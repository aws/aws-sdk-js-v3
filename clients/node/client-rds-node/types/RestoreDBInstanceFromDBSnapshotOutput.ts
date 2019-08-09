import { _UnmarshalledDBInstance } from "./_DBInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RestoreDBInstanceFromDBSnapshotOutput shape
 */
export interface RestoreDBInstanceFromDBSnapshotOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p>
   */
  DBInstance?: _UnmarshalledDBInstance;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
