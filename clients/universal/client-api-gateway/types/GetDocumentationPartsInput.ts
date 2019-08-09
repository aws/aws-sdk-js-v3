import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Gets the documentation parts of an API. The result may be filtered by the type, name, or path of API entities (targets).</p>
 */
export interface GetDocumentationPartsInput {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string;

  /**
   * <p>The type of API entities of the to-be-retrieved documentation parts. </p>
   */
  type?:
    | "API"
    | "AUTHORIZER"
    | "MODEL"
    | "RESOURCE"
    | "METHOD"
    | "PATH_PARAMETER"
    | "QUERY_PARAMETER"
    | "REQUEST_HEADER"
    | "REQUEST_BODY"
    | "RESPONSE"
    | "RESPONSE_HEADER"
    | "RESPONSE_BODY"
    | string;

  /**
   * <p>The name of API entities of the to-be-retrieved documentation parts.</p>
   */
  nameQuery?: string;

  /**
   * <p>The path of API entities of the to-be-retrieved documentation parts.</p>
   */
  path?: string;

  /**
   * <p>The current pagination position in the paged result set.</p>
   */
  position?: string;

  /**
   * <p>The maximum number of returned results per page. The default value is 25 and the maximum value is 500.</p>
   */
  limit?: number;

  /**
   * <p>The status of the API documentation parts to retrieve. Valid values are <code>DOCUMENTED</code> for retrieving <a>DocumentationPart</a> resources with content and <code>UNDOCUMENTED</code> for <a>DocumentationPart</a> resources without content.</p>
   */
  locationStatus?: "DOCUMENTED" | "UNDOCUMENTED" | string;

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
