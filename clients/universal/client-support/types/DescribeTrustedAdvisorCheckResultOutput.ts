import { _UnmarshalledTrustedAdvisorCheckResult } from "./_TrustedAdvisorCheckResult";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckResultOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The detailed results of the Trusted Advisor check.</p>
   */
  result?: _UnmarshalledTrustedAdvisorCheckResult;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
