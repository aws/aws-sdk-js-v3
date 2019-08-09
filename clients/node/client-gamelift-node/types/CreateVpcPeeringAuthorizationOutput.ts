import { _UnmarshalledVpcPeeringAuthorization } from "./_VpcPeeringAuthorization";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface CreateVpcPeeringAuthorizationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Details on the requested VPC peering authorization, including expiration.</p>
   */
  VpcPeeringAuthorization?: _UnmarshalledVpcPeeringAuthorization;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
