import { _AccessLogSettings } from "./_AccessLogSettings";
import { _RouteSettings } from "./_RouteSettings";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateStageInput shape
 */
export interface UpdateStageInput {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: _AccessLogSettings;

  /**
   * <p>The API identifier.</p>
   */
  ApiId: string;

  /**
   * <p>The identifier of a client certificate for a Stage.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The default route settings for the stage.</p>
   */
  DefaultRouteSettings?: _RouteSettings;

  /**
   * <p>The deployment identifier for the API stage.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description for the API stage.</p>
   */
  Description?: string;

  /**
   * <p>Route settings for the stage.</p>
   */
  RouteSettings?:
    | { [key: string]: _RouteSettings }
    | Iterable<[string, _RouteSettings]>;

  /**
   * <p>The stage name.</p>
   */
  StageName: string;

  /**
   * <p>A map that defines the stage variables for a Stage. Variable names
   *  can have alphanumeric and underscore characters, and the values must match
   *  [A-Za-z0-9-._~:/?#&=,]+.</p>
   */
  StageVariables?: { [key: string]: string } | Iterable<[string, string]>;

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
