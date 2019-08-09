import { _UnmarshalledBackup } from "./_Backup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response object for the <code>CreateBackup</code> operation.</p>
 */
export interface CreateBackupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A description of the backup.</p>
   */
  Backup?: _UnmarshalledBackup;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
