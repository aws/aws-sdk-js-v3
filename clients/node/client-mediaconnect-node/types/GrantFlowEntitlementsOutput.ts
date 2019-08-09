import { _UnmarshalledEntitlement } from "./_Entitlement";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GrantFlowEntitlementsOutput shape
 */
export interface GrantFlowEntitlementsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The entitlements that were just granted.
   */
  Entitlements?: Array<_UnmarshalledEntitlement>;

  /**
   * The ARN of the flow that these entitlements were granted to.
   */
  FlowArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
