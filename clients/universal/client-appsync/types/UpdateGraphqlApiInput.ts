import { _LogConfig } from "./_LogConfig";
import { _UserPoolConfig } from "./_UserPoolConfig";
import { _OpenIDConnectConfig } from "./_OpenIDConnectConfig";
import { _AdditionalAuthenticationProvider } from "./_AdditionalAuthenticationProvider";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateGraphqlApiInput shape
 */
export interface UpdateGraphqlApiInput {
  /**
   * <p>The API ID.</p>
   */
  apiId: string;

  /**
   * <p>The new name for the <code>GraphqlApi</code> object.</p>
   */
  name: string;

  /**
   * <p>The Amazon CloudWatch Logs configuration for the <code>GraphqlApi</code> object.</p>
   */
  logConfig?: _LogConfig;

  /**
   * <p>The new authentication type for the <code>GraphqlApi</code> object.</p>
   */
  authenticationType?:
    | "API_KEY"
    | "AWS_IAM"
    | "AMAZON_COGNITO_USER_POOLS"
    | "OPENID_CONNECT"
    | string;

  /**
   * <p>The new Amazon Cognito user pool configuration for the <code>GraphqlApi</code> object.</p>
   */
  userPoolConfig?: _UserPoolConfig;

  /**
   * <p>The OpenID Connect configuration for the <code>GraphqlApi</code> object.</p>
   */
  openIDConnectConfig?: _OpenIDConnectConfig;

  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code> API.</p>
   */
  additionalAuthenticationProviders?:
    | Array<_AdditionalAuthenticationProvider>
    | Iterable<_AdditionalAuthenticationProvider>;

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
