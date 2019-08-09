import { _UnmarshalledTrustedAdvisorCheckSummary } from "./_TrustedAdvisorCheckSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckSummariesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The summary information for the requested Trusted Advisor checks.</p>
   */
  summaries: Array<_UnmarshalledTrustedAdvisorCheckSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
