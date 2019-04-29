import { isArrayBuffer } from "@aws-sdk/is-array-buffer";
import {
  BuildHandler,
  BuildHandlerArguments,
  BuildMiddleware,
  Encoder,
  Hash,
  HeaderBag,
  StreamHasher
} from "@aws-sdk/types";

export function applyBodyChecksumMiddleware<StreamType>(
  headerName: string,
  hashCtor: { new (): Hash },
  encoder: Encoder,
  streamHasher: StreamHasher<StreamType> = throwOnStream
): BuildMiddleware<any, any, StreamType> {
  return <Output extends object>(
    next: BuildHandler<any, Output, any>
  ): BuildHandler<any, Output, any> => async ({
    request,
    input
  }: BuildHandlerArguments<any, any>): Promise<Output> => {
    const { body, headers } = request;
    if (!hasHeader(headerName, headers)) {
      let digest: Promise<Uint8Array>;

      if (
        body === undefined ||
        typeof body === "string" ||
        ArrayBuffer.isView(body) ||
        isArrayBuffer(body)
      ) {
        const hash = new hashCtor();
        hash.update(body || "");
        digest = hash.digest();
      } else {
        digest = streamHasher(hashCtor, body);
      }

      request = {
        ...request,
        headers: {
          ...headers,
          [headerName]: encoder(await digest)
        }
      };
    }

    return next({ input, request });
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
    `applyBodyChecksumMiddleware encountered a request with a streaming body of type ${Object.prototype.toString.call(
      stream
    )}, but no stream hasher function was provided`
  );
}
