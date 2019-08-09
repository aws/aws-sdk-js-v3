import {
  _AuthenticateOidcActionConfig,
  _UnmarshalledAuthenticateOidcActionConfig
} from "./_AuthenticateOidcActionConfig";
import {
  _AuthenticateCognitoActionConfig,
  _UnmarshalledAuthenticateCognitoActionConfig
} from "./_AuthenticateCognitoActionConfig";
import {
  _RedirectActionConfig,
  _UnmarshalledRedirectActionConfig
} from "./_RedirectActionConfig";
import {
  _FixedResponseActionConfig,
  _UnmarshalledFixedResponseActionConfig
} from "./_FixedResponseActionConfig";

/**
 * <p>Information about an action.</p>
 */
export interface _Action {
  /**
   * <p>The type of action. Each rule must include exactly one of the following types of actions: <code>forward</code>, <code>fixed-response</code>, or <code>redirect</code>.</p>
   */
  Type:
    | "forward"
    | "authenticate-oidc"
    | "authenticate-cognito"
    | "redirect"
    | "fixed-response"
    | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the target group. Specify only when <code>Type</code> is <code>forward</code>.</p>
   */
  TargetGroupArn?: string;

  /**
   * <p>[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.</p>
   */
  AuthenticateOidcConfig?: _AuthenticateOidcActionConfig;

  /**
   * <p>[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.</p>
   */
  AuthenticateCognitoConfig?: _AuthenticateCognitoActionConfig;

  /**
   * <p>The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first. The final action to be performed must be a <code>forward</code> or a <code>fixed-response</code> action.</p>
   */
  Order?: number;

  /**
   * <p>[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.</p>
   */
  RedirectConfig?: _RedirectActionConfig;

  /**
   * <p>[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.</p>
   */
  FixedResponseConfig?: _FixedResponseActionConfig;
}

export interface _UnmarshalledAction extends _Action {
  /**
   * <p>[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when <code>Type</code> is <code>authenticate-oidc</code>.</p>
   */
  AuthenticateOidcConfig?: _UnmarshalledAuthenticateOidcActionConfig;

  /**
   * <p>[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when <code>Type</code> is <code>authenticate-cognito</code>.</p>
   */
  AuthenticateCognitoConfig?: _UnmarshalledAuthenticateCognitoActionConfig;

  /**
   * <p>[Application Load Balancer] Information for creating a redirect action. Specify only when <code>Type</code> is <code>redirect</code>.</p>
   */
  RedirectConfig?: _UnmarshalledRedirectActionConfig;

  /**
   * <p>[Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when <code>Type</code> is <code>fixed-response</code>.</p>
   */
  FixedResponseConfig?: _UnmarshalledFixedResponseActionConfig;
}
