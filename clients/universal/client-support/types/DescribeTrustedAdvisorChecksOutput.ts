import { _UnmarshalledTrustedAdvisorCheckDescription } from "./_TrustedAdvisorCheckDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
 */
export interface DescribeTrustedAdvisorChecksOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about all available Trusted Advisor checks.</p>
   */
  checks: Array<_UnmarshalledTrustedAdvisorCheckDescription>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
