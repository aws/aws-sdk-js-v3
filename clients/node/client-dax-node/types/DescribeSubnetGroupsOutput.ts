import { _UnmarshalledSubnetGroup } from "./_SubnetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSubnetGroupsOutput shape
 */
export interface DescribeSubnetGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of subnet groups. Each element in the array represents a single subnet group.</p>
   */
  SubnetGroups?: Array<_UnmarshalledSubnetGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
