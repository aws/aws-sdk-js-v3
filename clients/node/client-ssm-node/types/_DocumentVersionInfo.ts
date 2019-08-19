/**
 * <p>Version information about the document.</p>
 */
export interface _DocumentVersionInfo {
  /**
   * <p>The document name.</p>
   */
  Name?: string;

  /**
   * <p>The document version.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>The version of the artifact associated with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and cannot be changed.</p>
   */
  VersionName?: string;

  /**
   * <p>The date the document was created.</p>
   */
  CreatedDate?: Date | string | number;

  /**
   * <p>An identifier for the default version of the document.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * <p>The document format, either JSON or YAML.</p>
   */
  DocumentFormat?: "YAML" | "JSON" | string;

  /**
   * <p>The status of the Systems Manager document, such as <code>Creating</code>, <code>Active</code>, <code>Failed</code>, and <code>Deleting</code>.</p>
   */
  Status?: "Creating" | "Active" | "Updating" | "Deleting" | "Failed" | string;

  /**
   * <p>A message returned by AWS Systems Manager that explains the <code>Status</code> value. For example, a <code>Failed</code> status might be explained by the <code>StatusInformation</code> message, "The specified S3 bucket does not exist. Verify that the URL of the S3 bucket is correct."</p>
   */
  StatusInformation?: string;
}

export interface _UnmarshalledDocumentVersionInfo extends _DocumentVersionInfo {
  /**
   * <p>The date the document was created.</p>
   */
  CreatedDate?: Date;
}
