import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface ValidateMatchmakingRuleSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Response indicating whether the rule set is valid.</p>
   */
  Valid?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
