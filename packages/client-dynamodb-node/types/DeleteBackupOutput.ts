import { _UnmarshalledBackupDescription } from "./_BackupDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteBackupOutput shape
 */
export interface DeleteBackupOutput {
  /**
   * <p>Contains the description of the backup created for the table.</p>
   */
  BackupDescription?: _UnmarshalledBackupDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
