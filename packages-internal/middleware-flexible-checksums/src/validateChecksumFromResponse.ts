import { HttpResponse } from "@smithy/protocol-http";
import { Checksum, ChecksumConstructor, HashConstructor, Logger } from "@smithy/types";
import { createChecksumStream } from "@smithy/util-stream";

import { PreviouslyResolved } from "./configuration";
import { ChecksumAlgorithm } from "./constants";
import { getChecksum } from "./getChecksum";
import { getChecksumAlgorithmListForResponse } from "./getChecksumAlgorithmListForResponse";
import { getChecksumLocationName } from "./getChecksumLocationName";
import { isStreaming } from "./isStreaming";
import { selectChecksumAlgorithmFunction } from "./selectChecksumAlgorithmFunction";

export interface ValidateChecksumFromResponseOptions {
  config: PreviouslyResolved;

  /**
   * Defines the checksum algorithms clients SHOULD look for when validating checksums
   * returned in the HTTP response.
   */
  responseAlgorithms?: string[];

  logger?: Logger;
}

export const validateChecksumFromResponse = async (
  response: HttpResponse,
  { config, responseAlgorithms, logger }: ValidateChecksumFromResponseOptions
) => {
  // Verify checksum in response header.
  const checksumAlgorithms = getChecksumAlgorithmListForResponse(responseAlgorithms);
  const { body: responseBody, headers: responseHeaders } = response;
  for (const algorithm of checksumAlgorithms) {
    const responseHeader = getChecksumLocationName(algorithm);
    const checksumFromResponse = responseHeaders[responseHeader];
    if (checksumFromResponse) {
      let checksumAlgorithmFn: ChecksumConstructor | HashConstructor;
      try {
        checksumAlgorithmFn = selectChecksumAlgorithmFunction(algorithm as ChecksumAlgorithm, config);
      } catch (error) {
        if (algorithm === ChecksumAlgorithm.CRC64NVME) {
          logger?.warn(`Skipping ${ChecksumAlgorithm.CRC64NVME} checksum validation: ${error.message}`);
          continue;
        }
        throw error;
      }

      const { base64Encoder } = config;

      if (isStreaming(responseBody)) {
        response.body = createChecksumStream({
          expectedChecksum: checksumFromResponse,
          checksumSourceLocation: responseHeader,
          checksum: new checksumAlgorithmFn() as Checksum,
          source: responseBody,
          base64Encoder,
        });
        return;
      }

      const checksum = await getChecksum(responseBody, { checksumAlgorithmFn, base64Encoder });
      if (checksum === checksumFromResponse) {
        // The checksum for response payload is valid.
        break;
      }
      throw new Error(
        `Checksum mismatch: expected "${checksum}" but received "${checksumFromResponse}"` +
          ` in response header "${responseHeader}".`
      );
    }
  }
};
