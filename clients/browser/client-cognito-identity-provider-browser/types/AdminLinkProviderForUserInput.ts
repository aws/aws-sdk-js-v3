import { _ProviderUserIdentifierType } from "./_ProviderUserIdentifierType";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AdminLinkProviderForUserInput shape
 */
export interface AdminLinkProviderForUserInput {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string;

  /**
   * <p>The existing user in the user pool to be linked to the external identity provider user account. Can be a native (Username + Password) Cognito User Pools user or a federated user (for example, a SAML or Facebook user). If the user doesn't exist, an exception is thrown. This is the user that is returned when the new user (with the linked identity provider attribute) signs in.</p> <p>For a native username + password user, the <code>ProviderAttributeValue</code> for the <code>DestinationUser</code> should be the username in the user pool. For a federated user, it should be the provider-specific <code>user_id</code>.</p> <p>The <code>ProviderAttributeName</code> of the <code>DestinationUser</code> is ignored.</p> <p>The <code>ProviderName</code> should be set to <code>Cognito</code> for users in Cognito user pools.</p>
   */
  DestinationUser: _ProviderUserIdentifierType;

  /**
   * <p>An external identity provider account for a user who does not currently exist yet in the user pool. This user must be a federated user (for example, a SAML or Facebook user), not another native user.</p> <p>If the <code>SourceUser</code> is a federated social identity provider user (Facebook, Google, or Login with Amazon), you must set the <code>ProviderAttributeName</code> to <code>Cognito_Subject</code>. For social identity providers, the <code>ProviderName</code> will be <code>Facebook</code>, <code>Google</code>, or <code>LoginWithAmazon</code>, and Cognito will automatically parse the Facebook, Google, and Login with Amazon tokens for <code>id</code>, <code>sub</code>, and <code>user_id</code>, respectively. The <code>ProviderAttributeValue</code> for the user must be the same value as the <code>id</code>, <code>sub</code>, or <code>user_id</code> value found in the social identity provider token.</p> <p/> <p>For SAML, the <code>ProviderAttributeName</code> can be any value that matches a claim in the SAML assertion. If you wish to link SAML users based on the subject of the SAML assertion, you should map the subject to a claim through the SAML identity provider and submit that claim name as the <code>ProviderAttributeName</code>. If you set <code>ProviderAttributeName</code> to <code>Cognito_Subject</code>, Cognito will automatically parse the default unique identifier found in the subject from the SAML token.</p>
   */
  SourceUser: _ProviderUserIdentifierType;

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
