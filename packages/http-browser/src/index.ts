import {
    HeaderBag,
    HttpHandler,
    HttpRequest,
    HttpResponse
} from '@aws/types';

export const httpHandler: HttpHandler<ReadableStream> = function httpHandler(
    request: HttpRequest<ReadableStream>
): Promise<HttpResponse<ReadableStream>> {
    const url = `${request.protocol}//${request.hostname}:${request.port}${request.path}`;
    const requestOptions: RequestInit = {
        body: request.body,
        headers: request.headers,
        method: request.method,
        //mode: 'cors'
    };

    const fetchRequest = new Request(url, requestOptions);
    return fetch(fetchRequest)
        .then(response => {
            const fetchHeaders: any = response.headers;
            const transformedHeaders: HeaderBag = {};

            for (let pair of <Array<string[]>>fetchHeaders.entries()) {
                transformedHeaders[pair[0]] = transformedHeaders[pair[1]];
            }

            const httpResponse: HttpResponse<ReadableStream> = {
                headers: transformedHeaders,
                statusCode: response.status
            };

            if (response.body) {
                httpResponse.body = response.body;
                return httpResponse;
            } else {
                return response.arrayBuffer()
                    .then(buffer => {
                        httpResponse.body = buffer;
                        return httpResponse;
                    });
            }
        });
}