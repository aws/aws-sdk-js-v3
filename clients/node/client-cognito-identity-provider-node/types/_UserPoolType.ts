import {
  _UserPoolPolicyType,
  _UnmarshalledUserPoolPolicyType
} from "./_UserPoolPolicyType";
import {
  _LambdaConfigType,
  _UnmarshalledLambdaConfigType
} from "./_LambdaConfigType";
import {
  _SchemaAttributeType,
  _UnmarshalledSchemaAttributeType
} from "./_SchemaAttributeType";
import {
  _VerificationMessageTemplateType,
  _UnmarshalledVerificationMessageTemplateType
} from "./_VerificationMessageTemplateType";
import {
  _DeviceConfigurationType,
  _UnmarshalledDeviceConfigurationType
} from "./_DeviceConfigurationType";
import {
  _EmailConfigurationType,
  _UnmarshalledEmailConfigurationType
} from "./_EmailConfigurationType";
import {
  _SmsConfigurationType,
  _UnmarshalledSmsConfigurationType
} from "./_SmsConfigurationType";
import {
  _AdminCreateUserConfigType,
  _UnmarshalledAdminCreateUserConfigType
} from "./_AdminCreateUserConfigType";
import {
  _UserPoolAddOnsType,
  _UnmarshalledUserPoolAddOnsType
} from "./_UserPoolAddOnsType";

/**
 * <p>A container for information about the user pool.</p>
 */
export interface _UserPoolType {
  /**
   * <p>The ID of the user pool.</p>
   */
  Id?: string;

  /**
   * <p>The name of the user pool.</p>
   */
  Name?: string;

  /**
   * <p>The policies associated with the user pool.</p>
   */
  Policies?: _UserPoolPolicyType;

  /**
   * <p>The AWS Lambda triggers associated with the user pool.</p>
   */
  LambdaConfig?: _LambdaConfigType;

  /**
   * <p>The status of a user pool.</p>
   */
  Status?: "Enabled" | "Disabled" | string;

  /**
   * <p>The date the user pool was last modified.</p>
   */
  LastModifiedDate?: Date | string | number;

  /**
   * <p>The date the user pool was created.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>A container with the schema attributes of a user pool.</p>
   */
  SchemaAttributes?:
    | Array<_SchemaAttributeType>
    | Iterable<_SchemaAttributeType>;

  /**
   * <p>Specifies the attributes that are auto-verified in a user pool.</p>
   */
  AutoVerifiedAttributes?:
    | Array<"phone_number" | "email" | string>
    | Iterable<"phone_number" | "email" | string>;

  /**
   * <p>Specifies the attributes that are aliased in a user pool.</p>
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
   * <p>The contents of the SMS verification message.</p>
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
   * <p>The device configuration.</p>
   */
  DeviceConfiguration?: _DeviceConfigurationType;

  /**
   * <p>A number estimating the size of the user pool.</p>
   */
  EstimatedNumberOfUsers?: number;

  /**
   * <p>The email configuration.</p>
   */
  EmailConfiguration?: _EmailConfigurationType;

  /**
   * <p>The SMS configuration.</p>
   */
  SmsConfiguration?: _SmsConfigurationType;

  /**
   * <p>The tags that are assigned to the user pool. A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p>
   */
  UserPoolTags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The reason why the SMS configuration cannot send the messages to your users.</p>
   */
  SmsConfigurationFailure?: string;

  /**
   * <p>The reason why the email configuration cannot send the messages to your users.</p>
   */
  EmailConfigurationFailure?: string;

  /**
   * <p>Holds the domain prefix if the user pool has a domain associated with it.</p>
   */
  Domain?: string;

  /**
   * <p>A custom domain name that you provide to Amazon Cognito. This parameter applies only if you use a custom domain to host the sign-up and sign-in pages for your application. For example: <code>auth.example.com</code>.</p> <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
   */
  CustomDomain?: string;

  /**
   * <p>The configuration for <code>AdminCreateUser</code> requests.</p>
   */
  AdminCreateUserConfig?: _AdminCreateUserConfigType;

  /**
   * <p>The user pool add-ons.</p>
   */
  UserPoolAddOns?: _UserPoolAddOnsType;

  /**
   * <p>The Amazon Resource Name (ARN) for the user pool.</p>
   */
  Arn?: string;
}

export interface _UnmarshalledUserPoolType extends _UserPoolType {
  /**
   * <p>The policies associated with the user pool.</p>
   */
  Policies?: _UnmarshalledUserPoolPolicyType;

  /**
   * <p>The AWS Lambda triggers associated with the user pool.</p>
   */
  LambdaConfig?: _UnmarshalledLambdaConfigType;

  /**
   * <p>The date the user pool was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the user pool was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>A container with the schema attributes of a user pool.</p>
   */
  SchemaAttributes?: Array<_UnmarshalledSchemaAttributeType>;

  /**
   * <p>Specifies the attributes that are auto-verified in a user pool.</p>
   */
  AutoVerifiedAttributes?: Array<"phone_number" | "email" | string>;

  /**
   * <p>Specifies the attributes that are aliased in a user pool.</p>
   */
  AliasAttributes?: Array<
    "phone_number" | "email" | "preferred_username" | string
  >;

  /**
   * <p>Specifies whether email addresses or phone numbers can be specified as usernames when a user signs up.</p>
   */
  UsernameAttributes?: Array<"phone_number" | "email" | string>;

  /**
   * <p>The template for verification messages.</p>
   */
  VerificationMessageTemplate?: _UnmarshalledVerificationMessageTemplateType;

  /**
   * <p>The device configuration.</p>
   */
  DeviceConfiguration?: _UnmarshalledDeviceConfigurationType;

  /**
   * <p>The email configuration.</p>
   */
  EmailConfiguration?: _UnmarshalledEmailConfigurationType;

  /**
   * <p>The SMS configuration.</p>
   */
  SmsConfiguration?: _UnmarshalledSmsConfigurationType;

  /**
   * <p>The tags that are assigned to the user pool. A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p>
   */
  UserPoolTags?: { [key: string]: string };

  /**
   * <p>The configuration for <code>AdminCreateUser</code> requests.</p>
   */
  AdminCreateUserConfig?: _UnmarshalledAdminCreateUserConfigType;

  /**
   * <p>The user pool add-ons.</p>
   */
  UserPoolAddOns?: _UnmarshalledUserPoolAddOnsType;
}
