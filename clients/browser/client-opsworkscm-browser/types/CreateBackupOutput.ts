import { _UnmarshalledBackup } from "./_Backup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateBackupOutput shape
 */
export interface CreateBackupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Backup created by request.</p>
   */
  Backup?: _UnmarshalledBackup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
