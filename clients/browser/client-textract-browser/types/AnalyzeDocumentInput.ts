import { _Document } from "./_Document";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AnalyzeDocumentInput shape
 */
export interface AnalyzeDocumentInput {
  /**
   * <p>The input document as base64-encoded bytes or an Amazon S3 object. If you use the AWS CLI to call Amazon Textract operations, you can't pass image bytes. The document must be an image in JPG or PNG format.</p> <p>If you are using an AWS SDK to call Amazon Textract, you might not need to base64-encode image bytes passed using the <code>Bytes</code> field. </p>
   */
  Document: _Document;

  /**
   * <p>A list of the types of analysis to perform. Add TABLES to the list to return information about the tables detected in the input document. Add FORMS to return detected fields and the associated text. To perform both types of analysis, add TABLES and FORMS to <code>FeatureTypes</code>.</p>
   */
  FeatureTypes:
    | Array<"TABLES" | "FORMS" | string>
    | Iterable<"TABLES" | "FORMS" | string>;

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
