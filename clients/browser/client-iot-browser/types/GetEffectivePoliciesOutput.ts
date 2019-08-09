import { _UnmarshalledEffectivePolicy } from "./_EffectivePolicy";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetEffectivePoliciesOutput shape
 */
export interface GetEffectivePoliciesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The effective policies.</p>
   */
  effectivePolicies?: Array<_UnmarshalledEffectivePolicy>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
