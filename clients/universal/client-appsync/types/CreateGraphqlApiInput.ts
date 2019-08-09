import { _LogConfig } from "./_LogConfig";
import { _UserPoolConfig } from "./_UserPoolConfig";
import { _OpenIDConnectConfig } from "./_OpenIDConnectConfig";
import { _AdditionalAuthenticationProvider } from "./_AdditionalAuthenticationProvider";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateGraphqlApiInput shape
 */
export interface CreateGraphqlApiInput {
  /**
   * <p>A user-supplied name for the <code>GraphqlApi</code>.</p>
   */
  name: string;

  /**
   * <p>The Amazon CloudWatch Logs configuration.</p>
   */
  logConfig?: _LogConfig;

  /**
   * <p>The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools.</p>
   */
  authenticationType:
    | "API_KEY"
    | "AWS_IAM"
    | "AMAZON_COGNITO_USER_POOLS"
    | "OPENID_CONNECT"
    | string;

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: _UserPoolConfig;

  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: _OpenIDConnectConfig;

  /**
   * <p>A <code>TagMap</code> object.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

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
