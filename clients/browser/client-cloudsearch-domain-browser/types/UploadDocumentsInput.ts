import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Container for the parameters to the <code>UploadDocuments</code> request.</p>
 */
export interface UploadDocumentsInput<StreamType = Blob> {
  /**
   * <p>A batch of documents formatted in JSON or HTML.</p>
   */
  documents: ArrayBuffer | ArrayBufferView | string | StreamType;

  /**
   * <p>The format of the batch you are uploading. Amazon CloudSearch supports two document batch formats:</p> <ul> <li>application/json</li> <li>application/xml</li> </ul>
   */
  contentType: "application/json" | "application/xml" | string;

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
