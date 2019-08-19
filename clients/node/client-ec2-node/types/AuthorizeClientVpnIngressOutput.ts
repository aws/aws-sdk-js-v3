import { _UnmarshalledClientVpnAuthorizationRuleStatus } from "./_ClientVpnAuthorizationRuleStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AuthorizeClientVpnIngressOutput shape
 */
export interface AuthorizeClientVpnIngressOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current state of the authorization rule.</p>
   */
  Status?: _UnmarshalledClientVpnAuthorizationRuleStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
