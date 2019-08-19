import { _AttachmentsSource } from "./_AttachmentsSource";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDocumentInput shape
 */
export interface UpdateDocumentInput {
  /**
   * <p>A valid JSON or YAML string.</p>
   */
  Content: string;

  /**
   * <p>A list of key and value pairs that describe attachments to a version of a document.</p>
   */
  Attachments?: Array<_AttachmentsSource> | Iterable<_AttachmentsSource>;

  /**
   * <p>The name of the document that you want to update.</p>
   */
  Name: string;

  /**
   * <p>An optional field specifying the version of the artifact you are updating with the document. For example, "Release 12, Update 6". This value is unique across all versions of a document, and cannot be changed.</p>
   */
  VersionName?: string;

  /**
   * <p>The version of the document that you want to update.</p>
   */
  DocumentVersion?: string;

  /**
   * <p>Specify the document format for the new document version. Systems Manager supports JSON and YAML documents. JSON is the default format.</p>
   */
  DocumentFormat?: "YAML" | "JSON" | string;

  /**
   * <p>Specify a new target type for the document.</p>
   */
  TargetType?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
