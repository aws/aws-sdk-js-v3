import { _UnmarshalledEntitlement } from "./_Entitlement";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFlowEntitlementOutput shape
 */
export interface UpdateFlowEntitlementOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The settings for a flow entitlement.
   */
  Entitlement?: _UnmarshalledEntitlement;

  /**
   * The ARN of the flow that this entitlement was granted on.
   */
  FlowArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
