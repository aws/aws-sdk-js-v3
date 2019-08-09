import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A POST request to import an API to API Gateway using an input of an API definition file.</p>
 */
export interface ImportRestApiInput {
  /**
   * <p>A query parameter to indicate whether to rollback the API creation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.</p>
   */
  failOnWarnings?: boolean;

  /**
   * <p>A key-value map of context-specific query string parameters specifying the behavior of different API importing operations. The following shows operation-specific parameters and their supported values.</p> <p> To exclude <a>DocumentationParts</a> from the import, set <code>parameters</code> as <code>ignore=documentation</code>.</p> <p> To configure the endpoint type, set <code>parameters</code> as <code>endpointConfigurationTypes=EDGE</code>, <code>endpointConfigurationTypes=REGIONAL</code>, or <code>endpointConfigurationTypes=PRIVATE</code>. The default endpoint type is <code>EDGE</code>.</p> <p> To handle imported <code>basepath</code>, set <code>parameters</code> as <code>basepath=ignore</code>, <code>basepath=prepend</code> or <code>basepath=split</code>.</p> <p>For example, the AWS CLI command to exclude documentation from the imported API is:</p> <pre><code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code></pre> <p>The AWS CLI command to set the regional endpoint on the imported API is:</p> <pre><code>aws apigateway import-rest-api --parameters endpointConfigurationTypes=REGIONAL --body 'file:///path/to/imported-api-body.json'</code></pre>
   */
  parameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>[Required] The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 2MB.</p>
   */
  body: ArrayBuffer | ArrayBufferView | string;

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
