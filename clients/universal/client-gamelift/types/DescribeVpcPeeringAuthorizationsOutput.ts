import { _UnmarshalledVpcPeeringAuthorization } from "./_VpcPeeringAuthorization";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeVpcPeeringAuthorizationsOutput shape
 */
export interface DescribeVpcPeeringAuthorizationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Collection of objects that describe all valid VPC peering operations for the current AWS account.</p>
   */
  VpcPeeringAuthorizations?: Array<_UnmarshalledVpcPeeringAuthorization>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
