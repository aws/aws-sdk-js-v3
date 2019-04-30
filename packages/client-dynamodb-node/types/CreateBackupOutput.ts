import { _UnmarshalledBackupDetails } from "./_BackupDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateBackupOutput shape
 */
export interface CreateBackupOutput {
  /**
   * <p>Contains the details of the backup created for the table.</p>
   */
  BackupDetails?: _UnmarshalledBackupDetails;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
