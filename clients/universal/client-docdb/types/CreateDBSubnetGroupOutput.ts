import { _UnmarshalledDBSubnetGroup } from "./_DBSubnetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDBSubnetGroupOutput shape
 */
export interface CreateDBSubnetGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about a DB subnet group. </p>
   */
  DBSubnetGroup?: _UnmarshalledDBSubnetGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
