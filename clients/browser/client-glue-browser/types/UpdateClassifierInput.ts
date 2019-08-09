import { _UpdateGrokClassifierRequest } from "./_UpdateGrokClassifierRequest";
import { _UpdateXMLClassifierRequest } from "./_UpdateXMLClassifierRequest";
import { _UpdateJsonClassifierRequest } from "./_UpdateJsonClassifierRequest";
import { _UpdateCsvClassifierRequest } from "./_UpdateCsvClassifierRequest";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateClassifierInput shape
 */
export interface UpdateClassifierInput {
  /**
   * <p>A <code>GrokClassifier</code> object with updated fields.</p>
   */
  GrokClassifier?: _UpdateGrokClassifierRequest;

  /**
   * <p>An <code>XMLClassifier</code> object with updated fields.</p>
   */
  XMLClassifier?: _UpdateXMLClassifierRequest;

  /**
   * <p>A <code>JsonClassifier</code> object with updated fields.</p>
   */
  JsonClassifier?: _UpdateJsonClassifierRequest;

  /**
   * <p>A <code>CsvClassifier</code> object with updated fields.</p>
   */
  CsvClassifier?: _UpdateCsvClassifierRequest;

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
