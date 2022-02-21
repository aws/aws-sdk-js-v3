import { ChecksumAlgorithm } from "./constants";
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
}

/**
 * Returns the checksum algorithm to use for the request, along with
 * the priority array of location to use to populate checksum and names
 * to be used as a key at the location.
 */
export const getChecksumAlgorithmForRequest = (
  input: any,
  { requestChecksumRequired, requestAlgorithmMember }: GetChecksumAlgorithmForRequestOptions
): ChecksumAlgorithm | undefined => {
  // Either the Operation input member that is used to configure request checksum behavior is not set, or
  // the value for input member to configure flexible checksum is not set.
  if (!requestAlgorithmMember || !input[requestAlgorithmMember]) {
    // Select MD5 only if request checksum is required.
    return requestChecksumRequired ? ChecksumAlgorithm.MD5 : undefined;
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
