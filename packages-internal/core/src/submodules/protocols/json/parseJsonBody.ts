import type { HttpResponse, Schema, SerdeFunctions } from "@smithy/types";

import { collectBodyString } from "../common";
import { detectBufferParsing } from "./detectBufferParsing";
import { jsonReviver } from "./jsonReviver";
import { needsReviver } from "./needsReviver";

/**
 * @internal
 */
export const parseJsonBody = async (streamBody: any, context: SerdeFunctions, schema?: Schema): Promise<any> => {
  // Fast path: if streamBody is an async iterable and JSON.parse(Buffer) is supported,
  // collect chunks directly and parse the concatenated Buffer without UTF-8 decode.
  let parsingInput: any;

  if (detectBufferParsing() && typeof streamBody?.[Symbol.asyncIterator] === "function") {
    const chunks: any[] = [];
    for await (const chunk of streamBody) {
      chunks.push(chunk);
    }
    if (chunks.length > 0) {
      const buffer = Buffer.concat(chunks);
      if (buffer.byteLength === 0) {
        return {};
      }
      parsingInput = buffer;
    }
  }

  if (!parsingInput) {
    // Fallback: collect to string, then parse.
    const encoded = await collectBodyString(streamBody, context);
    if (encoded.length) {
      parsingInput = encoded;
    } else {
      return {};
    }
  }

  const reviver = schema && !needsReviver(schema) ? undefined : jsonReviver;

  try {
    return JSON.parse(parsingInput, reviver);
  } catch (e: any) {
    if (e?.name === "SyntaxError") {
      Object.defineProperty(e, "$responseBodyText", {
        value: typeof parsingInput === "string" ? parsingInput : parsingInput.toString("utf8"),
      });
    }
    throw e;
  }
};

/**
 * @internal
 */
export const parseJsonErrorBody = async (errorBody: any, context: SerdeFunctions) => {
  const value = await parseJsonBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * @internal
 */
const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

/**
 * @internal
 */
const sanitizeErrorCode = (rawValue: string | number): string => {
  let cleanValue = rawValue;
  if (typeof cleanValue === "number") {
    cleanValue = cleanValue.toString();
  }
  if (cleanValue.indexOf(",") >= 0) {
    cleanValue = cleanValue.split(",")[0];
  }
  if (cleanValue.indexOf(":") >= 0) {
    cleanValue = cleanValue.split(":")[0];
  }
  if (cleanValue.indexOf("#") >= 0) {
    cleanValue = cleanValue.split("#")[1];
  }
  return cleanValue;
};

/**
 * @internal
 */
export const loadRestJsonErrorCode = (output: HttpResponse, data: any): string | undefined => {
  return loadErrorCode(output, data, ["header", "code", "type"]);
};

/**
 * @internal
 */
export const loadJsonRpcErrorCode = (output: HttpResponse, data: any, queryCompat = false): string | undefined => {
  return loadErrorCode(output, data, queryCompat ? ["code", "header", "type"] : ["type", "code", "header"]);
};

/**
 * @internal
 */
const loadErrorCode = (
  { headers }: HttpResponse,
  data: any,
  order: ("header" | "code" | "type")[]
): string | undefined => {
  while (order.length > 0) {
    const location = order.shift();
    switch (location) {
      case "header":
        const headerKey = findKey(headers ?? {}, "x-amzn-errortype");
        if (headerKey !== undefined) {
          return sanitizeErrorCode(headers[headerKey]);
        }
        break;
      case "code":
        const codeKey = findKey(data ?? {}, "code");
        if (codeKey && data[codeKey] !== undefined) {
          return sanitizeErrorCode(data[codeKey]);
        }
        break;
      case "type":
        if (data?.__type !== undefined) {
          return sanitizeErrorCode(data.__type);
        }
        break;
    }
  }
};
