import {
  ChecksumConstructor,
  Decoder,
  Encoder,
  HashConstructor,
  InitializeHandler,
  InitializeHandlerArguments,
  InitializeHandlerOptions,
  InitializeHandlerOutput,
  InitializeMiddleware,
  MetadataBearer,
  Pluggable,
  SourceData,
} from "@smithy/types";
interface PreviouslyResolved {
  base64Encoder: Encoder;
  md5: ChecksumConstructor | HashConstructor;
  utf8Decoder: Decoder;
}

export function ssecMiddleware(options: PreviouslyResolved): InitializeMiddleware<any, any> {
  return <Output extends MetadataBearer>(next: InitializeHandler<any, Output>): InitializeHandler<any, Output> =>
    async (args: InitializeHandlerArguments<any>): Promise<InitializeHandlerOutput<Output>> => {
      const input = { ...args.input };
      const properties = [
        {
          target: "SSECustomerKey",
          hash: "SSECustomerKeyMD5",
        },
        {
          target: "CopySourceSSECustomerKey",
          hash: "CopySourceSSECustomerKeyMD5",
        },
      ];

      for (const prop of properties) {
        const value: SourceData | undefined = (input as any)[prop.target];
        if (value) {
          let valueForHash: Uint8Array;
          if (typeof value === "string") {
            const isBase64Encoded = /^(?:[A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value);
            if (isBase64Encoded) {
              valueForHash = base64ToUint8Array(value);
            } else {
              valueForHash = options.utf8Decoder(value);
              input[prop.target] = options.base64Encoder(valueForHash);
            }
          } else {
            valueForHash = ArrayBuffer.isView(value)
              ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength)
              : new Uint8Array(value);
            input[prop.target] = options.base64Encoder(valueForHash);
          }

          const hash = new options.md5();
          hash.update(valueForHash);
          input[prop.hash] = options.base64Encoder(await hash.digest());
        }
      }

      return next({
        ...args,
        input,
      });
    };
}

function base64ToUint8Array(base64String: string) {
  const binaryString = atob(base64String);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export const ssecMiddlewareOptions: InitializeHandlerOptions = {
  name: "ssecMiddleware",
  step: "initialize",
  tags: ["SSE"],
  override: true,
};

export const getSsecPlugin = (config: PreviouslyResolved): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(ssecMiddleware(config), ssecMiddlewareOptions);
  },
});
