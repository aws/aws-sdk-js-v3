import { _UnmarshalledDBSubnetGroup } from "./_DBSubnetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyDBSubnetGroupOutput shape
 */
export interface ModifyDBSubnetGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
   */
  DBSubnetGroup?: _UnmarshalledDBSubnetGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
