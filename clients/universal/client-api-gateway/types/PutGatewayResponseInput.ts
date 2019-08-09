import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.</p>
 */
export interface PutGatewayResponseInput {
  /**
   * <p>[Required] The string identifier of the associated <a>RestApi</a>.</p>
   */
  restApiId: string;

  /**
   * <p>[Required] <p>The response type of the associated <a>GatewayResponse</a>. Valid values are <ul><li>ACCESS_DENIED</li><li>API_CONFIGURATION_ERROR</li><li>AUTHORIZER_FAILURE</li><li> AUTHORIZER_CONFIGURATION_ERROR</li><li>BAD_REQUEST_PARAMETERS</li><li>BAD_REQUEST_BODY</li><li>DEFAULT_4XX</li><li>DEFAULT_5XX</li><li>EXPIRED_TOKEN</li><li>INVALID_SIGNATURE</li><li>INTEGRATION_FAILURE</li><li>INTEGRATION_TIMEOUT</li><li>INVALID_API_KEY</li><li>MISSING_AUTHENTICATION_TOKEN</li><li> QUOTA_EXCEEDED</li><li>REQUEST_TOO_LARGE</li><li>RESOURCE_NOT_FOUND</li><li>THROTTLED</li><li>UNAUTHORIZED</li><li>UNSUPPORTED_MEDIA_TYPE</li></ul> </p></p>
   */
  responseType:
    | "DEFAULT_4XX"
    | "DEFAULT_5XX"
    | "RESOURCE_NOT_FOUND"
    | "UNAUTHORIZED"
    | "INVALID_API_KEY"
    | "ACCESS_DENIED"
    | "AUTHORIZER_FAILURE"
    | "AUTHORIZER_CONFIGURATION_ERROR"
    | "INVALID_SIGNATURE"
    | "EXPIRED_TOKEN"
    | "MISSING_AUTHENTICATION_TOKEN"
    | "INTEGRATION_FAILURE"
    | "INTEGRATION_TIMEOUT"
    | "API_CONFIGURATION_ERROR"
    | "UNSUPPORTED_MEDIA_TYPE"
    | "BAD_REQUEST_PARAMETERS"
    | "BAD_REQUEST_BODY"
    | "REQUEST_TOO_LARGE"
    | "THROTTLED"
    | "QUOTA_EXCEEDED"
    | string;

  /**
   * The HTTP status code of the <a>GatewayResponse</a>.
   */
  statusCode?: string;

  /**
   * <p><p>Response parameters (paths, query strings and headers) of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p></p>
   */
  responseParameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p><p>Response templates of the <a>GatewayResponse</a> as a string-to-string map of key-value pairs.</p></p>
   */
  responseTemplates?: { [key: string]: string } | Iterable<[string, string]>;

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
