import { _UserPoolPolicyType } from "./_UserPoolPolicyType";
import { _LambdaConfigType } from "./_LambdaConfigType";
import { _VerificationMessageTemplateType } from "./_VerificationMessageTemplateType";
import { _DeviceConfigurationType } from "./_DeviceConfigurationType";
import { _EmailConfigurationType } from "./_EmailConfigurationType";
import { _SmsConfigurationType } from "./_SmsConfigurationType";
import { _AdminCreateUserConfigType } from "./_AdminCreateUserConfigType";
import { _UserPoolAddOnsType } from "./_UserPoolAddOnsType";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the request to update the user pool.</p>
 */
export interface UpdateUserPoolInput {
  /**
   * <p>The user pool ID for the user pool you want to update.</p>
   */
  UserPoolId: string;

  /**
   * <p>A container with the policies you wish to update in a user pool.</p>
   */
  Policies?: _UserPoolPolicyType;

  /**
   * <p>The AWS Lambda configuration information from the request to update the user pool.</p>
   */
  LambdaConfig?: _LambdaConfigType;

  /**
   * <p>The attributes that are automatically verified when the Amazon Cognito service makes a request to update user pools.</p>
   */
  AutoVerifiedAttributes?:
    | Array<"phone_number" | "email" | string>
    | Iterable<"phone_number" | "email" | string>;

  /**
   * <p>A container with information about the SMS verification message.</p>
   */
  SmsVerificationMessage?: string;

  /**
   * <p>The contents of the email verification message.</p>
   */
  EmailVerificationMessage?: string;

  /**
   * <p>The subject of the email verification message.</p>
   */
  EmailVerificationSubject?: string;

  /**
   * <p>The template for verification messages.</p>
   */
  VerificationMessageTemplate?: _VerificationMessageTemplateType;

  /**
   * <p>The contents of the SMS authentication message.</p>
   */
  SmsAuthenticationMessage?: string;

  /**
   * <p>Can be one of the following values:</p> <ul> <li> <p> <code>OFF</code> - MFA tokens are not required and cannot be specified during user registration.</p> </li> <li> <p> <code>ON</code> - MFA tokens are required for all user registrations. You can only specify required when you are initially creating a user pool.</p> </li> <li> <p> <code>OPTIONAL</code> - Users have the option when registering to create an MFA token.</p> </li> </ul>
   */
  MfaConfiguration?: "OFF" | "ON" | "OPTIONAL" | string;

  /**
   * <p>Device configuration.</p>
   */
  DeviceConfiguration?: _DeviceConfigurationType;

  /**
   * <p>Email configuration.</p>
   */
  EmailConfiguration?: _EmailConfigurationType;

  /**
   * <p>SMS configuration.</p>
   */
  SmsConfiguration?: _SmsConfigurationType;

  /**
   * <p>The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.</p>
   */
  UserPoolTags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The configuration for <code>AdminCreateUser</code> requests.</p>
   */
  AdminCreateUserConfig?: _AdminCreateUserConfigType;

  /**
   * <p>Used to enable advanced security risk detection. Set the key <code>AdvancedSecurityMode</code> to the value "AUDIT".</p>
   */
  UserPoolAddOns?: _UserPoolAddOnsType;

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
