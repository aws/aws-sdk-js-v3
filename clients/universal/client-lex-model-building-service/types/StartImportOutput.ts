import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartImportOutput shape
 */
export interface StartImportOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name given to the import job.</p>
   */
  name?: string;

  /**
   * <p>The type of resource to import.</p>
   */
  resourceType?: "BOT" | "INTENT" | "SLOT_TYPE" | string;

  /**
   * <p>The action to take when there is a merge conflict.</p>
   */
  mergeStrategy?: "OVERWRITE_LATEST" | "FAIL_ON_CONFLICT" | string;

  /**
   * <p>The identifier for the specific import job.</p>
   */
  importId?: string;

  /**
   * <p>The status of the import job. If the status is <code>FAILED</code>, you can get the reason for the failure using the <code>GetImport</code> operation.</p>
   */
  importStatus?: "IN_PROGRESS" | "COMPLETE" | "FAILED" | string;

  /**
   * <p>A timestamp for the date and time that the import job was requested.</p>
   */
  createdDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
