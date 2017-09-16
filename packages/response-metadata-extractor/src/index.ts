import {
    HeaderBag,
    HttpResponse,
    ResponseMetadata,
} from "@aws/types";

const REQUEST_ID_HEADER = 'x-amz-request-id';
const REQUEST_ID_ALT_HEADER = 'x-amz-requestid';
const EXTENDED_REQUEST_ID_HEADER = 'x-amz-id-2';
const CF_ID_HEADER = 'x-amz-cf-id';

export function extractMetadata(
    {headers, statusCode}: HttpResponse<any>
): ResponseMetadata {
    const responseHeaders: HeaderBag = Object.keys(headers)
        .reduce((lowercase: HeaderBag, headerName: string) => {
            lowercase[headerName.toLowerCase()] = headers[headerName];
            return lowercase;
        }, {});

    return {
        statusCode,
        responseHeaders,
        requestId: responseHeaders[REQUEST_ID_HEADER]
                    || responseHeaders[REQUEST_ID_ALT_HEADER],
        extendedRequestId: responseHeaders[EXTENDED_REQUEST_ID_HEADER],
        cfId: responseHeaders[CF_ID_HEADER],
    };
}