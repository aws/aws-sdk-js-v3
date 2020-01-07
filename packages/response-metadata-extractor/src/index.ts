import { HeaderBag, HttpResponse, ResponseMetadata } from "@aws-sdk/types";

const REQUEST_ID_HEADER = "x-amz-request-id";
const REQUEST_ID_ALT_HEADER = "x-amzn-requestid";
const EXTENDED_REQUEST_ID_HEADER = "x-amz-id-2";
const CF_ID_HEADER = "x-amz-cf-id";

export function extractMetadata(httpResponse: HttpResponse): ResponseMetadata {
  const httpHeaders: HeaderBag = Object.keys(httpResponse.headers).reduce(
    (lowercase: HeaderBag, headerName: string) => {
      lowercase[headerName.toLowerCase()] = httpResponse.headers[headerName];
      return lowercase;
    },
    {}
  );
  return {
    httpHeaders,
    httpStatusCode: httpResponse.statusCode,
    requestId:
      httpHeaders[REQUEST_ID_HEADER] || httpHeaders[REQUEST_ID_ALT_HEADER],
    extendedRequestId: httpHeaders[EXTENDED_REQUEST_ID_HEADER],
    cfId: httpHeaders[CF_ID_HEADER]
  };
}
