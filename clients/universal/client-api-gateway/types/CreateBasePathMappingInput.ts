import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Requests API Gateway to create a new <a>BasePathMapping</a> resource.</p>
 */
export interface CreateBasePathMappingInput {
  /**
   * <p>[Required] The domain name of the <a>BasePathMapping</a> resource to create.</p>
   */
  domainName: string;

  /**
   * <p>The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name.</p>
   */
  basePath?: string;

  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string;

  /**
   * <p>The name of the API's stage that you want to use for this mapping. Specify '(none)' if you do not want callers to explicitly specify the stage name after any base path name.</p>
   */
  stage?: string;

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
