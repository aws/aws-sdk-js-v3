import { Encoder, HashConstructor, StreamHasher } from "@aws-sdk/types";

export interface Md5BodyChecksumInputConfig {}
interface PreviouslyResolved {
  md5: HashConstructor;
  base64Encoder: Encoder;
  streamHasher: StreamHasher<any>;
}

export interface Md5BodyChecksumResolvedConfig {
  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface that computes MD5 hashes.
   * @internal
   */
  md5: HashConstructor;
  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder: Encoder;
  /**
   * A function that, given a hash constructor and a stream, calculates the hash of the streamed value.
   * @internal
   */
  streamHasher: StreamHasher<any>;
}

export const resolveMd5BodyChecksumConfig = <T>(
  input: T & PreviouslyResolved & Md5BodyChecksumInputConfig
): T & Md5BodyChecksumResolvedConfig => input;
