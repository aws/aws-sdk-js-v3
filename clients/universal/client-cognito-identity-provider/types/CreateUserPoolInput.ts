import { _UserPoolPolicyType } from "./_UserPoolPolicyType";
import { _LambdaConfigType } from "./_LambdaConfigType";
import { _VerificationMessageTemplateType } from "./_VerificationMessageTemplateType";
import { _DeviceConfigurationType } from "./_DeviceConfigurationType";
import { _EmailConfigurationType } from "./_EmailConfigurationType";
import { _SmsConfigurationType } from "./_SmsConfigurationType";
import { _AdminCreateUserConfigType } from "./_AdminCreateUserConfigType";
import { _SchemaAttributeType } from "./_SchemaAttributeType";
import { _UserPoolAddOnsType } from "./_UserPoolAddOnsType";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the request to create a user pool.</p>
 */
export interface CreateUserPoolInput {
  /**
   * <p>A string used to name the user pool.</p>
   */
  PoolName: string;

  /**
   * <p>The policies associated with the new user pool.</p>
   */
  Policies?: _UserPoolPolicyType;

  /**
   * <p>The Lambda trigger configuration information for the new user pool.</p> <note> <p>In a push model, event sources (such as Amazon S3 and custom applications) need permission to invoke a function. So you will need to make an extra call to add permission for these event sources to invoke your Lambda function.</p> <p/> <p>For more information on using the Lambda API to add permission, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html"> AddPermission </a>. </p> <p>For adding permission using the AWS CLI, see <a href="https://docs.aws.amazon.com/cli/latest/reference/lambda/add-permission.html"> add-permission </a>.</p> </note>
   */
  LambdaConfig?: _LambdaConfigType;

  /**
   * <p>The attributes to be auto-verified. Possible values: <b>email</b>, <b>phone_number</b>.</p>
   */
  AutoVerifiedAttributes?:
    | Array<"phone_number" | "email" | string>
    | Iterable<"phone_number" | "email" | string>;

  /**
   * <p>Attributes supported as an alias for this user pool. Possible values: <b>phone_number</b>, <b>email</b>, or <b>preferred_username</b>.</p>
   */
  AliasAttributes?:
    | Array<"phone_number" | "email" | "preferred_username" | string>
    | Iterable<"phone_number" | "email" | "preferred_username" | string>;

  /**
   * <p>Specifies whether email addresses or phone numbers can be specified as usernames when a user signs up.</p>
   */
  UsernameAttributes?:
    | Array<"phone_number" | "email" | string>
    | Iterable<"phone_number" | "email" | string>;

  /**
   * <p>A string representing the SMS verification message.</p>
   */
  SmsVerificationMessage?: string;

  /**
   * <p>A string representing the email verification message.</p>
   */
  EmailVerificationMessage?: string;

  /**
   * <p>A string representing the email verification subject.</p>
   */
  EmailVerificationSubject?: string;

  /**
   * <p>The template for the verification message that the user sees when the app requests permission to access the user's information.</p>
   */
  VerificationMessageTemplate?: _VerificationMessageTemplateType;

  /**
   * <p>A string representing the SMS authentication message.</p>
   */
  SmsAuthenticationMessage?: string;

  /**
   * <p>Specifies MFA configuration details.</p>
   */
  MfaConfiguration?: "OFF" | "ON" | "OPTIONAL" | string;

  /**
   * <p>The device configuration.</p>
   */
  DeviceConfiguration?: _DeviceConfigurationType;

  /**
   * <p>The email configuration.</p>
   */
  EmailConfiguration?: _EmailConfigurationType;

  /**
   * <p>The SMS configuration.</p>
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
   * <p>An array of schema attributes for the new user pool. These attributes can be standard or custom attributes.</p>
   */
  Schema?: Array<_SchemaAttributeType> | Iterable<_SchemaAttributeType>;

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
