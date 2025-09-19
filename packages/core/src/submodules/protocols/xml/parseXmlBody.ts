import { parseXML } from "@aws-sdk/xml-builder";
import { getValueFromTextNode } from "@smithy/smithy-client";
import type { HttpResponse, SerdeContext } from "@smithy/types";

import { collectBodyString } from "../common";

/**
 * @internal
 */
export const parseXmlBody = (streamBody: any, context: SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      let parsedObj;
      try {
        parsedObj = parseXML(encoded);
      } catch (e: any) {
        if (e && typeof e === "object") {
          Object.defineProperty(e, "$responseBodyText", {
            value: encoded,
          });
        }
        throw e;
      }

      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

/**
 * @internal
 */
export const parseXmlErrorBody = async (errorBody: any, context: SerdeContext) => {
  const value = await parseXmlBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

/**
 * @internal
 */
export const loadRestXmlErrorCode = (output: HttpResponse, data: any): string | undefined => {
  if (data?.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (data?.Code !== undefined) {
    return data.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
