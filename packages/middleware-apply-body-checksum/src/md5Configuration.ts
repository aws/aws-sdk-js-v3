import { Encoder, Hash, StreamHasher } from "@aws-sdk/types";

export interface Md5BodyChecksumInputConfig {}
interface PreviouslyResolved {
  md5: { new (): Hash };
  base64Encoder: Encoder;
  streamHasher: StreamHasher<any>;
}
export interface Md5BodyChecksumResolvedConfig {
  md5: { new (): Hash };
  base64Encoder: Encoder;
  streamHasher: StreamHasher<any>;
}
export function resolveMd5BodyChecksumConfig<T>(
  input: T & PreviouslyResolved & Md5BodyChecksumInputConfig
): T & Md5BodyChecksumResolvedConfig {
  return {
    ...input,
  };
}
