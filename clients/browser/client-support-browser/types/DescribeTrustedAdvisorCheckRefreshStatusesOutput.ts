import { _UnmarshalledTrustedAdvisorCheckRefreshStatus } from "./_TrustedAdvisorCheckRefreshStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.</p>
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The refresh status of the specified Trusted Advisor checks.</p>
   */
  statuses: Array<_UnmarshalledTrustedAdvisorCheckRefreshStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
