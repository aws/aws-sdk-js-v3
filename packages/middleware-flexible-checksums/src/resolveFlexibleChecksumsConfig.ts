import { Provider } from "@smithy/types";
import { normalizeProvider } from "@smithy/util-middleware";

import {
  DEFAULT_REQUEST_CHECKSUM_CALCULATION,
  DEFAULT_RESPONSE_CHECKSUM_VALIDATION,
  RequestChecksumCalculation,
  ResponseChecksumValidation,
} from "./constants";

export interface FlexibleChecksumsInputConfig {
  /**
   * Determines when a checksum will be calculated for request payloads.
   */
  requestChecksumCalculation?: RequestChecksumCalculation | Provider<RequestChecksumCalculation>;

  /**
   * Determines when checksum validation will be performed on response payloads.
   */
  responseChecksumValidation?: ResponseChecksumValidation | Provider<ResponseChecksumValidation>;

  /**
   * Default 65536.
   *
   * Minimum number of bytes to buffer into a chunk when processing input streams
   * with chunked encoding (that is, when request checksums are enabled).
   * A minimum of 8kb = 8 * 1024 is required, and 64kb or higher is recommended.
   *
   * See https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-streaming.html.
   *
   * To turn off this feature, configure the value to zero or false.
   */
  requestStreamBufferSize?: number | false;
}

export interface FlexibleChecksumsResolvedConfig {
  requestChecksumCalculation: Provider<RequestChecksumCalculation>;
  responseChecksumValidation: Provider<ResponseChecksumValidation>;
  requestStreamBufferSize: number;
}

export const resolveFlexibleChecksumsConfig = <T>(
  input: T & FlexibleChecksumsInputConfig
): T & FlexibleChecksumsResolvedConfig => ({
  ...input,
  requestChecksumCalculation: normalizeProvider(
    input.requestChecksumCalculation ?? DEFAULT_REQUEST_CHECKSUM_CALCULATION
  ),
  responseChecksumValidation: normalizeProvider(
    input.responseChecksumValidation ?? DEFAULT_RESPONSE_CHECKSUM_VALIDATION
  ),
  requestStreamBufferSize: Number(input.requestStreamBufferSize ?? 64 * 1024),
});
