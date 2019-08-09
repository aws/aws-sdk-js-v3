import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ExportBackupPlanTemplateOutput shape
 */
export interface ExportBackupPlanTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The body of a backup plan template in JSON format.</p> <note> <p>This is a signed JSON document that cannot be modified before being passed to <code>GetBackupPlanFromJSON.</code> </p> </note>
   */
  BackupPlanTemplateJson?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
