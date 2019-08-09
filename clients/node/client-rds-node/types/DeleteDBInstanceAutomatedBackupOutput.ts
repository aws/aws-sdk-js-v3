import { _UnmarshalledDBInstanceAutomatedBackup } from "./_DBInstanceAutomatedBackup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteDBInstanceAutomatedBackupOutput shape
 */
export interface DeleteDBInstanceAutomatedBackupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An automated backup of a DB instance. It it consists of system backups, transaction logs, and the database instance properties that existed at the time you deleted the source instance. </p>
   */
  DBInstanceAutomatedBackup?: _UnmarshalledDBInstanceAutomatedBackup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
