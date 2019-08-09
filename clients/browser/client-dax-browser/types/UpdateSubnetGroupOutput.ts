import { _UnmarshalledSubnetGroup } from "./_SubnetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSubnetGroupOutput shape
 */
export interface UpdateSubnetGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The subnet group that has been modified.</p>
   */
  SubnetGroup?: _UnmarshalledSubnetGroup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
