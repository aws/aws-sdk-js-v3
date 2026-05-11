import type { HttpResponse, SerdeFunctions } from "@smithy/types";

import { collectBodyString } from "../common";

/**
 * @internal
 */
export const parseJsonBody = (streamBody: any, context: SerdeFunctions): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      try {
        return JSON.parse(encoded);
      } catch (e: any) {
        if (e?.name === "SyntaxError") {
          Object.defineProperty(e, "$responseBodyText", {
            value: encoded,
          });
        }
        throw e;
      }
    }
    return {};
  });

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
const sanitizeErrorCode = (rawValue: string | number, removeNamespace = true): string => {
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
  if (removeNamespace && cleanValue.indexOf("#") >= 0) {
    cleanValue = cleanValue.split("#")[1];
  }
  return cleanValue;
};

/**
 * @internal
 */
export const loadRestJsonErrorCode = (output: HttpResponse, data: any): string | undefined => {
  return loadErrorCode(output, data, true, ["header", "code", "type"]);
};

/**
 * @internal
 */
export const loadJsonRpcErrorCode = (
  output: HttpResponse,
  data: any,
  removeNamespace: boolean,
  queryCompat = false
): string | undefined => {
  return loadErrorCode(
    output,
    data,
    removeNamespace,
    queryCompat ? ["code", "header", "type"] : ["type", "code", "header"]
  );
};

/**
 * @internal
 */
const loadErrorCode = (
  { headers }: HttpResponse,
  data: any,
  removeNamespace: boolean,
  order: ("header" | "code" | "type")[]
): string | undefined => {
  while (order.length > 0) {
    const location = order.shift();
    switch (location) {
      case "header":
        const headerKey = findKey(headers ?? {}, "x-amzn-errortype");
        if (headerKey !== undefined) {
          return sanitizeErrorCode(headers[headerKey], removeNamespace);
        }
        break;
      case "code":
        const codeKey = findKey(data ?? {}, "code");
        if (codeKey && data[codeKey] !== undefined) {
          return sanitizeErrorCode(data[codeKey], removeNamespace);
        }
        break;
      case "type":
        if (data?.__type !== undefined) {
          return sanitizeErrorCode(data.__type, removeNamespace);
        }
        break;
    }
  }
};
