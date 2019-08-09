import { _EndpointConfiguration } from "./_EndpointConfiguration";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The POST Request to add a new <a>RestApi</a> resource to your collection.</p>
 */
export interface CreateRestApiInput {
  /**
   * <p>[Required] The name of the <a>RestApi</a>.</p>
   */
  name: string;

  /**
   * <p>The description of the <a>RestApi</a>.</p>
   */
  description?: string;

  /**
   * <p>A version identifier for the API.</p>
   */
  version?: string;

  /**
   * <p>The ID of the <a>RestApi</a> that you want to clone from.</p>
   */
  cloneFrom?: string;

  /**
   * <p>The list of binary media types supported by the <a>RestApi</a>. By default, the <a>RestApi</a> supports only UTF-8-encoded text payloads.</p>
   */
  binaryMediaTypes?: Array<string> | Iterable<string>;

  /**
   * <p>A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.</p>
   */
  minimumCompressionSize?: number;

  /**
   * <p>The source of the API key for metering requests according to a usage plan. Valid values are: <ul><li><code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. </li><li><code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer.</li></ul> </p>
   */
  apiKeySource?: "HEADER" | "AUTHORIZER" | string;

  /**
   * <p>The endpoint configuration of this <a>RestApi</a> showing the endpoint types of the API. </p>
   */
  endpointConfiguration?: _EndpointConfiguration;

  /**
   * A stringified JSON policy document that applies to this RestApi regardless of the caller and <a>Method</a> configuration.
   */
  policy?: string;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

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
