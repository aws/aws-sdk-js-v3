import { _UnmarshalledAttachmentContent } from "./_AttachmentContent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDocumentOutput shape
 */
export interface GetDocumentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the Systems Manager document.</p>
   */
  Name?: string;

  /**
   * <p>The version of the artifact associated with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and cannot be changed.</p>
   */
  VersionName?: string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The status of the Systems Manager document, such as <code>Creating</code>, <code>Active</code>, <code>Updating</code>, <code>Failed</code>, and <code>Deleting</code>.</p>
   */
  Status?: "Creating" | "Active" | "Updating" | "Deleting" | "Failed" | string;

  /**
   * <p>A message returned by AWS Systems Manager that explains the <code>Status</code> value. For example, a <code>Failed</code> status might be explained by the <code>StatusInformation</code> message, "The specified S3 bucket does not exist. Verify that the URL of the S3 bucket is correct."</p>
   */
  StatusInformation?: string;

  /**
   * <p>The contents of the Systems Manager document.</p>
   */
  Content?: string;

  /**
   * <p>The document type.</p>
   */
  DocumentType?:
    | "Command"
    | "Policy"
    | "Automation"
    | "Session"
    | "Package"
    | string;

  /**
   * <p>The document format, either JSON or YAML.</p>
   */
  DocumentFormat?: "YAML" | "JSON" | string;

  /**
   * <p>A description of the document attachments, including names, locations, sizes, etc.</p>
   */
  AttachmentsContent?: Array<_UnmarshalledAttachmentContent>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
