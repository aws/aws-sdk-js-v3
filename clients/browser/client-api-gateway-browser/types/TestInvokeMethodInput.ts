import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Make a request to simulate the execution of a <a>Method</a>.</p>
 */
export interface TestInvokeMethodInput {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string;

  /**
   * <p>[Required] Specifies a test invoke method request's resource ID.</p>
   */
  resourceId: string;

  /**
   * <p>[Required] Specifies a test invoke method request's HTTP method.</p>
   */
  httpMethod: string;

  /**
   * <p>The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters.</p>
   */
  pathWithQueryString?: string;

  /**
   * <p>The simulated request body of an incoming invocation request.</p>
   */
  body?: string;

  /**
   * <p>A key-value map of headers to simulate an incoming invocation request.</p>
   */
  headers?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The headers as a map from string to list of values to simulate an incoming invocation request.</p>
   */
  multiValueHeaders?:
    | { [key: string]: Array<string> | Iterable<string> }
    | Iterable<[string, Array<string> | Iterable<string>]>;

  /**
   * <p>A <a>ClientCertificate</a> identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint.</p>
   */
  clientCertificateId?: string;

  /**
   * <p>A key-value map of stage variables to simulate an invocation on a deployed <a>Stage</a>.</p>
   */
  stageVariables?: { [key: string]: string } | Iterable<[string, string]>;

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
