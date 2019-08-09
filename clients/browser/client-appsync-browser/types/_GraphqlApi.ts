import { _LogConfig, _UnmarshalledLogConfig } from "./_LogConfig";
import {
  _UserPoolConfig,
  _UnmarshalledUserPoolConfig
} from "./_UserPoolConfig";
import {
  _OpenIDConnectConfig,
  _UnmarshalledOpenIDConnectConfig
} from "./_OpenIDConnectConfig";
import {
  _AdditionalAuthenticationProvider,
  _UnmarshalledAdditionalAuthenticationProvider
} from "./_AdditionalAuthenticationProvider";

/**
 * <p>Describes a GraphQL API.</p>
 */
export interface _GraphqlApi {
  /**
   * <p>The API name.</p>
   */
  name?: string;

  /**
   * <p>The API ID.</p>
   */
  apiId?: string;

  /**
   * <p>The authentication type.</p>
   */
  authenticationType?:
    | "API_KEY"
    | "AWS_IAM"
    | "AMAZON_COGNITO_USER_POOLS"
    | "OPENID_CONNECT"
    | string;

  /**
   * <p>The Amazon CloudWatch Logs configuration.</p>
   */
  logConfig?: _LogConfig;

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: _UserPoolConfig;

  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: _OpenIDConnectConfig;

  /**
   * <p>The ARN.</p>
   */
  arn?: string;

  /**
   * <p>The URIs.</p>
   */
  uris?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The tags.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code> API.</p>
   */
  additionalAuthenticationProviders?:
    | Array<_AdditionalAuthenticationProvider>
    | Iterable<_AdditionalAuthenticationProvider>;
}

export interface _UnmarshalledGraphqlApi extends _GraphqlApi {
  /**
   * <p>The Amazon CloudWatch Logs configuration.</p>
   */
  logConfig?: _UnmarshalledLogConfig;

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: _UnmarshalledUserPoolConfig;

  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: _UnmarshalledOpenIDConnectConfig;

  /**
   * <p>The URIs.</p>
   */
  uris?: { [key: string]: string };

  /**
   * <p>The tags.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A list of additional authentication providers for the <code>GraphqlApi</code> API.</p>
   */
  additionalAuthenticationProviders?: Array<
    _UnmarshalledAdditionalAuthenticationProvider
  >;
}
