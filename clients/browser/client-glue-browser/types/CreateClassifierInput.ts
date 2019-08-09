import { _CreateGrokClassifierRequest } from "./_CreateGrokClassifierRequest";
import { _CreateXMLClassifierRequest } from "./_CreateXMLClassifierRequest";
import { _CreateJsonClassifierRequest } from "./_CreateJsonClassifierRequest";
import { _CreateCsvClassifierRequest } from "./_CreateCsvClassifierRequest";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateClassifierInput shape
 */
export interface CreateClassifierInput {
  /**
   * <p>A <code>GrokClassifier</code> object specifying the classifier to create.</p>
   */
  GrokClassifier?: _CreateGrokClassifierRequest;

  /**
   * <p>An <code>XMLClassifier</code> object specifying the classifier to create.</p>
   */
  XMLClassifier?: _CreateXMLClassifierRequest;

  /**
   * <p>A <code>JsonClassifier</code> object specifying the classifier to create.</p>
   */
  JsonClassifier?: _CreateJsonClassifierRequest;

  /**
   * <p>A <code>CsvClassifier</code> object specifying the classifier to create.</p>
   */
  CsvClassifier?: _CreateCsvClassifierRequest;

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
