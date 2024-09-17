import {
  ChecksumAlgorithm,
  DEFAULT_CHECKSUM_ALGORITHM,
  RequestChecksumCalculation,
  S3_EXPRESS_DEFAULT_CHECKSUM_ALGORITHM,
} from "./constants";
import { CLIENT_SUPPORTED_ALGORITHMS } from "./types";

export interface GetChecksumAlgorithmForRequestOptions {
  /**
   * Indicates an operation requires a checksum in its HTTP request.
   */
  requestChecksumRequired: boolean;

  /**
   * Defines a top-level operation input member that is used to configure request checksum behavior.
   */
  requestAlgorithmMember?: string;

  /**
   * Determines when a checksum will be calculated for request payloads
   */
  requestChecksumCalculation: string;
}

/**
 * Returns the checksum algorithm to use for the request, along with
 * the priority array of location to use to populate checksum and names
 * to be used as a key at the location.
 */
export const getChecksumAlgorithmForRequest = (
  input: any,
  {
    requestChecksumRequired,
    requestAlgorithmMember,
    requestChecksumCalculation,
  }: GetChecksumAlgorithmForRequestOptions,
  isS3Express?: boolean
): ChecksumAlgorithm | undefined => {
  const defaultAlgorithm = isS3Express ? S3_EXPRESS_DEFAULT_CHECKSUM_ALGORITHM : DEFAULT_CHECKSUM_ALGORITHM;

  // Either the Operation input member that is used to configure request checksum behavior is not set, or
  // the value for input member to configure flexible checksum is not set.
  if (!requestAlgorithmMember || !input[requestAlgorithmMember]) {
    // Select an algorithm only if request checksum calculation is supported
    // or request checksum is required.
    return requestChecksumCalculation === RequestChecksumCalculation.WHEN_SUPPORTED || requestChecksumRequired
      ? defaultAlgorithm
      : undefined;
  }

  const checksumAlgorithm = input[requestAlgorithmMember];
  // Validate that at least one algorithm from customer preference is supported by the SDK.
  if (!CLIENT_SUPPORTED_ALGORITHMS.includes(checksumAlgorithm)) {
    throw new Error(
      `The checksum algorithm "${checksumAlgorithm}" is not supported by the client.` +
        ` Select one of ${CLIENT_SUPPORTED_ALGORITHMS}.`
    );
  }

  return checksumAlgorithm as ChecksumAlgorithm;
};
