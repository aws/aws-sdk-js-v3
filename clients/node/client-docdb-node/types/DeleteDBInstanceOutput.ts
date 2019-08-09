import { _UnmarshalledDBInstance } from "./_DBInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteDBInstanceOutput shape
 */
export interface DeleteDBInstanceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Detailed information about a DB instance. </p>
   */
  DBInstance?: _UnmarshalledDBInstance;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
