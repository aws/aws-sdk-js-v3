import { HeaderBag } from "@aws-sdk/types";
import { IncomingHttpHeaders } from "http2";

const getTransformedHeaders = (headers: IncomingHttpHeaders): HeaderBag => {
  const transformedHeaders: HeaderBag = {};

  for (let name of Object.keys(headers)) {
    let headerValues = <string>headers[name];
    transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
  }

  return transformedHeaders;
};

export { getTransformedHeaders };
