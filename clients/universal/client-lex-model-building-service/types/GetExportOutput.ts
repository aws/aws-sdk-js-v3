import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetExportOutput shape
 */
export interface GetExportOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the bot being exported.</p>
   */
  name?: string;

  /**
   * <p>The version of the bot being exported.</p>
   */
  version?: string;

  /**
   * <p>The type of the exported resource.</p>
   */
  resourceType?: "BOT" | "INTENT" | "SLOT_TYPE" | string;

  /**
   * <p>The format of the exported data.</p>
   */
  exportType?: "ALEXA_SKILLS_KIT" | "LEX" | string;

  /**
   * <p>The status of the export. </p> <ul> <li> <p> <code>IN_PROGRESS</code> - The export is in progress.</p> </li> <li> <p> <code>READY</code> - The export is complete.</p> </li> <li> <p> <code>FAILED</code> - The export could not be completed.</p> </li> </ul>
   */
  exportStatus?: "IN_PROGRESS" | "READY" | "FAILED" | string;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the reason that it failed to export the resource.</p>
   */
  failureReason?: string;

  /**
   * <p>An S3 pre-signed URL that provides the location of the exported resource. The exported resource is a ZIP archive that contains the exported resource in JSON format. The structure of the archive may change. Your code should not rely on the archive structure.</p>
   */
  url?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
