import { _UnmarshalledTrustedAdvisorCheckRefreshStatus } from "./_TrustedAdvisorCheckRefreshStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The current refresh status of a Trusted Advisor check.</p>
 */
export interface RefreshTrustedAdvisorCheckOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current refresh status for a check, including the amount of time until the check is eligible for refresh.</p>
   */
  status: _UnmarshalledTrustedAdvisorCheckRefreshStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
