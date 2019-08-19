import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Request to add a new <a>Model</a> to an existing <a>RestApi</a> resource.</p>
 */
export interface CreateModelInput {
  /**
   * <p>[Required] The <a>RestApi</a> identifier under which the <a>Model</a> will be created.</p>
   */
  restApiId: string;

  /**
   * <p>[Required] The name of the model. Must be alphanumeric.</p>
   */
  name: string;

  /**
   * <p>The description of the model.</p>
   */
  description?: string;

  /**
   * <p>The schema for the model. For <code>application/json</code> models, this should be <a href="https://tools.ietf.org/html/draft-zyp-json-schema-04" target="_blank">JSON schema draft 4</a> model.</p>
   */
  schema?: string;

  /**
   * <p>[Required] The content-type for the model.</p>
   */
  contentType: string;

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
