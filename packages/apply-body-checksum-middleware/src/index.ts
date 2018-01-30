import { isArrayBuffer } from '@aws/is-array-buffer';
import {
    BuildHandler,
    BuildHandlerArguments,
    BuildMiddleware,
    Encoder,
    Hash,
    HeaderBag,
    StreamCollector,
} from '@aws/types';

export function applyBodyChecksumMiddleware<StreamType = Uint8Array>(
    headerName: string,
    hashCtor: {new (): Hash},
    encoder: Encoder,
    streamCollector: StreamCollector<StreamType> = throwOnStream
): BuildMiddleware<any, any, StreamType> {
    return <Output extends object>(
        next: BuildHandler<any, Output, any>
    ): BuildHandler<any, Output, any> => async (
        args: BuildHandlerArguments<any, any>
    ): Promise<Output> => {
        const {request} = args;

        let {body, headers} = request;
        if (!hasHeader(headerName, headers)) {
            const hash = new hashCtor();

            if (
                body &&
                typeof body !== 'string' &&
                !ArrayBuffer.isView(body) &&
                !isArrayBuffer(body)
            ) {
                body = await streamCollector(body);
            }

            hash.update(body || '');
            headers = {
                ...headers,
                [headerName]: encoder(await hash.digest())
            }
        }

        return next({
            ...args,
            request: {
                ...request,
                headers,
                body,
            }
        });
    };
}

function hasHeader(soughtHeader: string, headers: HeaderBag): boolean {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }

    return false;
}

function throwOnStream(stream: any): never {
    throw new Error(
        `applyBodyChecksumMiddleware encountered a request with a streaming body of type ${
            Object.prototype.toString.call(stream)
        }, but no stream collector function was provided`
    );
}
