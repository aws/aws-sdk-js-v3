// smithy-typescript generated code
import { VerifySoftwareTokenResponseType } from "./enums";

import { CustomDomainConfigType, UserPoolClientType } from "./models_0";

/**
 * <p>Represents the response from the server to the request to update the user pool
 *             client.</p>
 * @public
 */
export interface UpdateUserPoolClientResponse {
  /**
   * <p>The updated details of your app client.</p>
   * @public
   */
  UserPoolClient?: UserPoolClientType | undefined;
}

/**
 * <p>The UpdateUserPoolDomain request input.</p>
 * @public
 */
export interface UpdateUserPoolDomainRequest {
  /**
   * <p>The name of the domain that you want to update. For custom domains, this is the
   *             fully-qualified domain name, for example <code>auth.example.com</code>. For prefix
   *             domains, this is the prefix alone, such as <code>myprefix</code>.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The ID of the user pool that is associated with the domain you're updating.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A version number that indicates the state of managed login for your domain. Version
   *             <code>1</code> is hosted UI (classic). Version <code>2</code> is the newer managed
   *             login with the branding editor. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">Managed login</a>.</p>
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * <p>The configuration for a custom domain that hosts managed login for your application.
   *             In an <code>UpdateUserPoolDomain</code> request, this parameter specifies an SSL
   *             certificate for the managed login hosted webserver. The certificate must be an ACM ARN
   *             in <code>us-east-1</code>.</p>
   *          <p>When you create a custom domain, the passkey RP ID defaults to the custom domain. If
   *             you had a prefix domain active, this will cause passkey integration for your prefix
   *             domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey
   *             integration working, you can explicitly set RP ID to the prefix domain.</p>
   * @public
   */
  CustomDomainConfig?: CustomDomainConfigType | undefined;
}

/**
 * <p>The UpdateUserPoolDomain response output.</p>
 * @public
 */
export interface UpdateUserPoolDomainResponse {
  /**
   * <p>A version number that indicates the state of managed login for your domain. Version
   *             <code>1</code> is hosted UI (classic). Version <code>2</code> is the newer managed
   *             login with the branding editor. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">Managed login</a>.</p>
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * <p>The fully-qualified domain name (FQDN) of the Amazon CloudFront distribution that hosts your
   *             managed login or classic hosted UI pages. You domain-name authority must have an alias
   *             record that points requests for your custom domain to this FQDN. Amazon Cognito returns this
   *             value if you set a custom domain with <code>CustomDomainConfig</code>. If you set an
   *             Amazon Cognito prefix domain, this operation returns a blank response.</p>
   * @public
   */
  CloudFrontDomain?: string | undefined;
}

/**
 * @public
 */
export interface VerifySoftwareTokenRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * <p>The session ID from an <code>AssociateSoftwareToken</code> request.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>A TOTP that the user generated in their configured authenticator app.</p>
   * @public
   */
  UserCode: string | undefined;

  /**
   * <p>A friendly name for the device that's running the TOTP authenticator.</p>
   * @public
   */
  FriendlyDeviceName?: string | undefined;
}

/**
 * @public
 */
export interface VerifySoftwareTokenResponse {
  /**
   * <p>Amazon Cognito can accept or reject the code that you provide. This response parameter
   *             indicates the success of TOTP verification. Some reasons that this operation might
   *             return an error are clock skew on the user's device and excessive retries.</p>
   * @public
   */
  Status?: VerifySoftwareTokenResponseType | undefined;

  /**
   * <p>This session ID satisfies an <code>MFA_SETUP</code> challenge. Supply the session ID
   *             in your challenge response.</p>
   * @public
   */
  Session?: string | undefined;
}

/**
 * <p>Represents the request to verify user attributes.</p>
 * @public
 */
export interface VerifyUserAttributeRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The name of the attribute that you want to verify.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The verification code that your user pool sent to the added or changed attribute, for
   *             example the user's email address.</p>
   * @public
   */
  Code: string | undefined;
}

/**
 * <p>A container representing the response from the server from the request to verify user
 *             attributes.</p>
 * @public
 */
export interface VerifyUserAttributeResponse {}
