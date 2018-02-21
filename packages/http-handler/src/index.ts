import { FetchHttpHandler } from '@aws/fetch-http-handler';
import { isArrayBuffer } from '@aws/is-array-buffer';
import { NodeHttpHandler } from '@aws/node-http-handler';
import {
    streamCollector as browserStreamCollector,
} from '@aws/stream-collector-browser';
import {
    streamCollector as nodeStreamCollector,
} from '@aws/stream-collector-node';
import {
    BrowserHttpOptions,
    HttpHandler as IHttpHandler,
    HttpHandlerOptions,
    HttpRequest,
    NodeHttpOptions,
    StreamCollector,
    HttpResponse
} from '@aws/types';
import { Readable } from 'stream';

export type HttpHandlerOptions = BrowserHttpOptions|NodeHttpOptions;

export class HttpHandler implements IHttpHandler {
    private readonly handler: IHttpHandler<Blob|Readable>;
    private readonly streamCollector: StreamCollector<Blob|Readable>;

    constructor(options?: HttpHandlerOptions) {
        if (supportsHttpModule()) {
            this.handler = new NodeHttpHandler(options as NodeHttpOptions);
            this.streamCollector = nodeStreamCollector as StreamCollector<Blob|Readable>;
        } else {
            this.handler = new FetchHttpHandler(options as BrowserHttpOptions);
            this.streamCollector = browserStreamCollector as StreamCollector<Blob|Readable>;
        }
    }

    destroy() {
        this.handler.destroy();
    }

    async handle(
        request: HttpRequest,
        options?: HttpHandlerOptions
    ) {
        const response = await this.handler.handle(
            request as HttpRequest<never>,
            options
        );
        const { body } = response;
        const universalResponse: HttpResponse<Uint8Array> = {
            ...response,
            body: undefined
        };

        if (
            body &&
            typeof body !== 'string' &&
            !ArrayBuffer.isView(body) &&
            !isArrayBuffer(body)
        ) {
            universalResponse.body = await this.streamCollector(body)
        }

        return universalResponse;
    }
}

function supportsHttpModule() {
    try {
        require('http');
        require('https');
        return true;
    } catch {
        return false;
    }
}
