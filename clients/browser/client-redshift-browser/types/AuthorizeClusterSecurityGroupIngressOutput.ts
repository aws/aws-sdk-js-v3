import { _UnmarshalledClusterSecurityGroup } from "./_ClusterSecurityGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AuthorizeClusterSecurityGroupIngressOutput shape
 */
export interface AuthorizeClusterSecurityGroupIngressOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes a security group.</p>
   */
  ClusterSecurityGroup?: _UnmarshalledClusterSecurityGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
