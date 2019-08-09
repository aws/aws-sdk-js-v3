import { _UnmarshalledSecurityGroupReference } from "./_SecurityGroupReference";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSecurityGroupReferencesOutput shape
 */
export interface DescribeSecurityGroupReferencesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the VPCs with the referencing security groups.</p>
   */
  SecurityGroupReferenceSet?: Array<_UnmarshalledSecurityGroupReference>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
