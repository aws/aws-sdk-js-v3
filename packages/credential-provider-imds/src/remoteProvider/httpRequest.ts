import { ProviderError } from "@aws-sdk/property-provider";
import { Buffer } from "buffer";
import { IncomingMessage, request, RequestOptions } from "http";

/**
 * @internal
 */
export function httpRequest(options: RequestOptions): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const req = request({
      method: "GET",
      ...options,
      // Node.js http module doesn't accept hostname with square brackets
      // Refs: https://github.com/nodejs/node/issues/39738
      hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1"),
    });

    req.on("error", (err) => {
      reject(Object.assign(new ProviderError("Unable to connect to instance metadata service"), err));
      req.destroy();
    });

    req.on("timeout", () => {
      reject(new ProviderError("TimeoutError from instance metadata service"));
      req.destroy();
    });

    req.on("response", (res: IncomingMessage) => {
      const { statusCode = 400 } = res;
      if (statusCode < 200 || 300 <= statusCode) {
        reject(
          Object.assign(new ProviderError("Error response received from instance metadata service"), { statusCode })
        );
        req.destroy();
      }

      const chunks: Array<Buffer> = [];
      res.on("data", (chunk) => {
        chunks.push(chunk as Buffer);
      });
      res.on("end", () => {
        resolve(Buffer.concat(chunks));
        req.destroy();
      });
    });

    req.end();
  });
}
