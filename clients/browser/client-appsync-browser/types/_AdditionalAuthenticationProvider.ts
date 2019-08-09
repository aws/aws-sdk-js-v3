import {
  _OpenIDConnectConfig,
  _UnmarshalledOpenIDConnectConfig
} from "./_OpenIDConnectConfig";
import {
  _CognitoUserPoolConfig,
  _UnmarshalledCognitoUserPoolConfig
} from "./_CognitoUserPoolConfig";

/**
 * <p>Describes an additional authentication provider.</p>
 */
export interface _AdditionalAuthenticationProvider {
  /**
   * <p>The authentication type: API key, AWS IAM, OIDC, or Amazon Cognito user pools.</p>
   */
  authenticationType?:
    | "API_KEY"
    | "AWS_IAM"
    | "AMAZON_COGNITO_USER_POOLS"
    | "OPENID_CONNECT"
    | string;

  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: _OpenIDConnectConfig;

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: _CognitoUserPoolConfig;
}

export interface _UnmarshalledAdditionalAuthenticationProvider
  extends _AdditionalAuthenticationProvider {
  /**
   * <p>The OpenID Connect configuration.</p>
   */
  openIDConnectConfig?: _UnmarshalledOpenIDConnectConfig;

  /**
   * <p>The Amazon Cognito user pool configuration.</p>
   */
  userPoolConfig?: _UnmarshalledCognitoUserPoolConfig;
}
