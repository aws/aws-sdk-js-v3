import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetImportOutput shape
 */
export interface GetImportOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name given to the import job.</p>
   */
  name?: string;

  /**
   * <p>The type of resource imported.</p>
   */
  resourceType?: "BOT" | "INTENT" | "SLOT_TYPE" | string;

  /**
   * <p>The action taken when there was a conflict between an existing resource and a resource in the import file.</p>
   */
  mergeStrategy?: "OVERWRITE_LATEST" | "FAIL_ON_CONFLICT" | string;

  /**
   * <p>The identifier for the specific import job.</p>
   */
  importId?: string;

  /**
   * <p>The status of the import job. If the status is <code>FAILED</code>, you can get the reason for the failure from the <code>failureReason</code> field.</p>
   */
  importStatus?: "IN_PROGRESS" | "COMPLETE" | "FAILED" | string;

  /**
   * <p>A string that describes why an import job failed to complete.</p>
   */
  failureReason?: Array<string>;

  /**
   * <p>A timestamp for the date and time that the import job was created.</p>
   */
  createdDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
