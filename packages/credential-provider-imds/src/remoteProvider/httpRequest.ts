import { Buffer } from "buffer";
import { request, IncomingMessage, RequestOptions } from "http";
import { ProviderError } from "@aws-sdk/property-provider";

/**
 * @internal
 */
export function httpRequest(options: RequestOptions): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const req = request({ method: "GET", ...options });
    req.on("error", (err) => {
      reject(new ProviderError("Unable to connect to instance metadata service"));
    });

    req.on("response", (res: IncomingMessage) => {
      const { statusCode = 400 } = res;
      if (statusCode < 200 || 300 <= statusCode) {
        const error = new ProviderError("Error response received from instance metadata service");
        (error as any).statusCode = statusCode;
        reject(error);
      }

      const chunks: Array<Buffer> = [];
      res.on("data", (chunk) => {
        chunks.push(chunk as Buffer);
      });
      res.on("end", () => {
        resolve(Buffer.concat(chunks));
      });
    });

    req.end();
  });
}
