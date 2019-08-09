import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RevokeFlowEntitlementOutput shape
 */
export interface RevokeFlowEntitlementOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the entitlement that was revoked.
   */
  EntitlementArn?: string;

  /**
   * The ARN of the flow that the entitlement was revoked from.
   */
  FlowArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
