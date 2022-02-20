import { Encoder, HashConstructor, StreamHasher } from "@aws-sdk/types";

export interface FlexibleChecksumsInputConfig {}

interface PreviouslyResolved {
  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder: Encoder;

  /**
   * A constructor for a class implementing the {@link Hash} interface that computes MD5 hashes.
   * @internal
   */
  md5: HashConstructor;

  /**
   * A constructor for a class implementing the {@link Hash} interface that computes SHA1 hashes.
   * @internal
   */
  sha1: HashConstructor;

  /**
   * A constructor for a class implementing the {@link Hash} interface that computes SHA256 hashes.
   * @internal
   */
  sha256: HashConstructor;

  /**
   * A function that, given a hash constructor and a stream, calculates the hash of the streamed value.
   * @internal
   */
  streamHasher: StreamHasher<any>;
}

export interface FlexibleChecksumsResolvedConfig extends PreviouslyResolved {}

export const resolveFlexibleChecksumsConfig = <T>(
  input: T & PreviouslyResolved & FlexibleChecksumsInputConfig
): T & FlexibleChecksumsResolvedConfig => input;
