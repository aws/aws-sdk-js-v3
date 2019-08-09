import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCustomMetadataInput shape
 */
export interface CreateCustomMetadataInput {
  /**
   * <p>Amazon WorkDocs authentication token. Do not set this field when using administrative API actions, as in accessing the API using AWS credentials.</p>
   */
  AuthenticationToken?: string;

  /**
   * <p>The ID of the resource.</p>
   */
  ResourceId: string;

  /**
   * <p>The ID of the version, if the custom metadata is being added to a document version.</p>
   */
  VersionId?: string;

  /**
   * <p>Custom metadata in the form of name-value pairs.</p>
   */
  CustomMetadata: { [key: string]: string } | Iterable<[string, string]>;

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
