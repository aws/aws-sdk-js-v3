// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { CognitoIdentityProviderServiceException as __BaseException } from "./CognitoIdentityProviderServiceException";

export enum RecoveryOptionNameType {
  ADMIN_ONLY = "admin_only",
  VERIFIED_EMAIL = "verified_email",
  VERIFIED_PHONE_NUMBER = "verified_phone_number",
}

/**
 * <p>A map containing a priority as a key, and recovery method name as a value.</p>
 */
export interface RecoveryOptionType {
  /**
   * <p>A positive integer specifying priority of a method with 1 being the highest
   *             priority.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The recovery method for a user.</p>
   */
  Name: RecoveryOptionNameType | string | undefined;
}

/**
 * <p>The data type for <code>AccountRecoverySetting</code>.</p>
 */
export interface AccountRecoverySettingType {
  /**
   * <p>The list of <code>RecoveryOptionTypes</code>.</p>
   */
  RecoveryMechanisms?: RecoveryOptionType[];
}

export enum AccountTakeoverEventActionType {
  BLOCK = "BLOCK",
  MFA_IF_CONFIGURED = "MFA_IF_CONFIGURED",
  MFA_REQUIRED = "MFA_REQUIRED",
  NO_ACTION = "NO_ACTION",
}

/**
 * <p>Account takeover action type.</p>
 */
export interface AccountTakeoverActionType {
  /**
   * <p>Flag specifying whether to send a notification.</p>
   */
  Notify: boolean | undefined;

  /**
   * <p>The action to take in response to the account takeover action. Valid values are as
   *             follows:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>BLOCK</code> Choosing this action will block the request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MFA_IF_CONFIGURED</code> Present an MFA challenge if user has configured
   *                     it, else allow the request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MFA_REQUIRED</code> Present an MFA challenge if user has configured it,
   *                     else block the request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NO_ACTION</code> Allow the user to sign in.</p>
   *             </li>
   *          </ul>
   */
  EventAction: AccountTakeoverEventActionType | string | undefined;
}

/**
 * <p>Account takeover actions type.</p>
 */
export interface AccountTakeoverActionsType {
  /**
   * <p>Action to take for a low risk.</p>
   */
  LowAction?: AccountTakeoverActionType;

  /**
   * <p>Action to take for a medium risk.</p>
   */
  MediumAction?: AccountTakeoverActionType;

  /**
   * <p>Action to take for a high risk.</p>
   */
  HighAction?: AccountTakeoverActionType;
}

/**
 * <p>The notify email type.</p>
 */
export interface NotifyEmailType {
  /**
   * <p>The email subject.</p>
   */
  Subject: string | undefined;

  /**
   * <p>The email HTML body.</p>
   */
  HtmlBody?: string;

  /**
   * <p>The email text body.</p>
   */
  TextBody?: string;
}

/**
 * <p>The notify configuration type.</p>
 */
export interface NotifyConfigurationType {
  /**
   * <p>The email address that is sending the email. The address must be either individually
   *             verified with Amazon Simple Email Service, or from a domain that has been verified with Amazon SES.</p>
   */
  From?: string;

  /**
   * <p>The destination to which the receiver of an email should reply to.</p>
   */
  ReplyTo?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity that is associated with the sending
   *             authorization policy. This identity permits Amazon Cognito to send for the email address
   *             specified in the <code>From</code> parameter.</p>
   */
  SourceArn: string | undefined;

  /**
   * <p>Email template used when a detected risk event is blocked.</p>
   */
  BlockEmail?: NotifyEmailType;

  /**
   * <p>The email template used when a detected risk event is allowed.</p>
   */
  NoActionEmail?: NotifyEmailType;

  /**
   * <p>The multi-factor authentication (MFA) email template used when MFA is challenged as
   *             part of a detected risk.</p>
   */
  MfaEmail?: NotifyEmailType;
}

/**
 * <p>Configuration for mitigation actions and notification for different levels of risk
 *             detected for a potential account takeover.</p>
 */
export interface AccountTakeoverRiskConfigurationType {
  /**
   * <p>The notify configuration used to construct email notifications.</p>
   */
  NotifyConfiguration?: NotifyConfigurationType;

  /**
   * <p>Account takeover risk configuration actions.</p>
   */
  Actions: AccountTakeoverActionsType | undefined;
}

export enum AttributeDataType {
  BOOLEAN = "Boolean",
  DATETIME = "DateTime",
  NUMBER = "Number",
  STRING = "String",
}

/**
 * <p>The minimum and maximum values of an attribute that is of the number data type.</p>
 */
export interface NumberAttributeConstraintsType {
  /**
   * <p>The minimum value of an attribute that is of the number data type.</p>
   */
  MinValue?: string;

  /**
   * <p>The maximum value of an attribute that is of the number data type.</p>
   */
  MaxValue?: string;
}

/**
 * <p>The constraints associated with a string attribute.</p>
 */
export interface StringAttributeConstraintsType {
  /**
   * <p>The minimum length.</p>
   */
  MinLength?: string;

  /**
   * <p>The maximum length.</p>
   */
  MaxLength?: string;
}

/**
 * <p>Contains information about the schema attribute.</p>
 */
export interface SchemaAttributeType {
  /**
   * <p>A schema attribute of the name type.</p>
   */
  Name?: string;

  /**
   * <p>The attribute data type.</p>
   */
  AttributeDataType?: AttributeDataType | string;

  /**
   * <note>
   *             <p>You should use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserPoolClientType.html#CognitoUserPools-Type-UserPoolClientType-WriteAttributes">WriteAttributes</a> in the user pool client to control how attributes can
   *                 be mutated for new use cases instead of using
   *                 <code>DeveloperOnlyAttribute</code>.</p>
   *         </note>
   *         <p>Specifies whether the attribute type is developer only. This attribute can only be
   *             modified by an administrator. Users won't be able to modify this attribute using their
   *             access token. For example, <code>DeveloperOnlyAttribute</code> can be modified using
   *             AdminUpdateUserAttributes but can't be updated using UpdateUserAttributes.</p>
   */
  DeveloperOnlyAttribute?: boolean;

  /**
   * <p>Specifies whether the value of the attribute can be changed.</p>
   *         <p>For any user pool attribute that is mapped to an IdP attribute, you must set this
   *             parameter to <code>true</code>. Amazon Cognito updates mapped attributes when users sign in to
   *             your application through an IdP. If an attribute is immutable, Amazon Cognito throws an error
   *             when it attempts to update the attribute. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying Identity Provider Attribute Mappings for Your User
   *                 Pool</a>.</p>
   */
  Mutable?: boolean;

  /**
   * <p>Specifies whether a user pool attribute is required. If the attribute is required and
   *             the user doesn't provide a value, registration or sign-in will fail.</p>
   */
  Required?: boolean;

  /**
   * <p>Specifies the constraints for an attribute of the number type.</p>
   */
  NumberAttributeConstraints?: NumberAttributeConstraintsType;

  /**
   * <p>Specifies the constraints for an attribute of the string type.</p>
   */
  StringAttributeConstraints?: StringAttributeConstraintsType;
}

/**
 * <p>Represents the request to add custom attributes.</p>
 */
export interface AddCustomAttributesRequest {
  /**
   * <p>The user pool ID for the user pool where you want to add custom attributes.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>An array of custom attributes, such as Mutable and Name.</p>
   */
  CustomAttributes: SchemaAttributeType[] | undefined;
}

/**
 * <p>Represents the response from the server for the request to add custom
 *             attributes.</p>
 */
export interface AddCustomAttributesResponse {}

/**
 * <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 */
export class InternalErrorException extends __BaseException {
  readonly name: "InternalErrorException" = "InternalErrorException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalErrorException, __BaseException>) {
    super({
      name: "InternalErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalErrorException.prototype);
  }
}

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>This exception is thrown when a user isn't authorized.</p>
 */
export class NotAuthorizedException extends __BaseException {
  readonly name: "NotAuthorizedException" = "NotAuthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotAuthorizedException, __BaseException>) {
    super({
      name: "NotAuthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotAuthorizedException.prototype);
  }
}

/**
 * <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
  }
}

/**
 * <p>This exception is thrown when you're trying to modify a user pool while a user import
 *             job is in progress for that pool.</p>
 */
export class UserImportInProgressException extends __BaseException {
  readonly name: "UserImportInProgressException" = "UserImportInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserImportInProgressException, __BaseException>) {
    super({
      name: "UserImportInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserImportInProgressException.prototype);
  }
}

export interface AdminAddUserToGroupRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username for the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>The group name.</p>
   */
  GroupName: string | undefined;
}

/**
 * <p>This exception is thrown when a user isn't found.</p>
 */
export class UserNotFoundException extends __BaseException {
  readonly name: "UserNotFoundException" = "UserNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserNotFoundException, __BaseException>) {
    super({
      name: "UserNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserNotFoundException.prototype);
  }
}

/**
 * <p>Represents the request to confirm user registration.</p>
 */
export interface AdminConfirmSignUpRequest {
  /**
   * <p>The user pool ID for which you want to confirm user registration.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name for which you want to confirm user registration.</p>
   */
  Username: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>If your user pool configuration includes triggers, the AdminConfirmSignUp API action
   *             invokes the Lambda function that is specified for the <i>post
   *                 confirmation</i> trigger. When Amazon Cognito invokes this function, it passes a JSON
   *             payload, which the function receives as input. In this payload, the
   *                 <code>clientMetadata</code> attribute provides the data that you assigned to the
   *             ClientMetadata parameter in your AdminConfirmSignUp request. In your function code in
   *             Lambda, you can process the ClientMetadata value to enhance your workflow for your
   *             specific needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>Represents the response from the server for the request to confirm
 *             registration.</p>
 */
export interface AdminConfirmSignUpResponse {}

/**
 * <p>This exception is thrown when Amazon Cognito encounters an invalid Lambda response.</p>
 */
export class InvalidLambdaResponseException extends __BaseException {
  readonly name: "InvalidLambdaResponseException" = "InvalidLambdaResponseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidLambdaResponseException, __BaseException>) {
    super({
      name: "InvalidLambdaResponseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidLambdaResponseException.prototype);
  }
}

/**
 * <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>This exception is thrown when the user has made too many failed attempts for a given
 *             action, such as sign-in.</p>
 */
export class TooManyFailedAttemptsException extends __BaseException {
  readonly name: "TooManyFailedAttemptsException" = "TooManyFailedAttemptsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyFailedAttemptsException, __BaseException>) {
    super({
      name: "TooManyFailedAttemptsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyFailedAttemptsException.prototype);
  }
}

/**
 * <p>This exception is thrown when Amazon Cognito encounters an unexpected exception with
 *             Lambda.</p>
 */
export class UnexpectedLambdaException extends __BaseException {
  readonly name: "UnexpectedLambdaException" = "UnexpectedLambdaException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnexpectedLambdaException, __BaseException>) {
    super({
      name: "UnexpectedLambdaException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnexpectedLambdaException.prototype);
  }
}

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception
 *             with the Lambda service.</p>
 */
export class UserLambdaValidationException extends __BaseException {
  readonly name: "UserLambdaValidationException" = "UserLambdaValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserLambdaValidationException, __BaseException>) {
    super({
      name: "UserLambdaValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserLambdaValidationException.prototype);
  }
}

export enum DeliveryMediumType {
  EMAIL = "EMAIL",
  SMS = "SMS",
}

export enum MessageActionType {
  RESEND = "RESEND",
  SUPPRESS = "SUPPRESS",
}

/**
 * <p>Specifies whether the attribute is standard or custom.</p>
 */
export interface AttributeType {
  /**
   * <p>The name of the attribute.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

/**
 * <p>Represents the request to create a user in the specified user pool.</p>
 */
export interface AdminCreateUserRequest {
  /**
   * <p>The user pool ID for the user pool where the user will be created.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username for the user. Must be unique within the user pool. Must be a UTF-8 string
   *             between 1 and 128 characters. After the user is created, the username can't be
   *             changed.</p>
   */
  Username: string | undefined;

  /**
   * <p>An array of name-value pairs that contain user attributes and attribute values to be
   *             set for the user to be created. You can create a user without specifying any attributes
   *             other than <code>Username</code>. However, any attributes that you specify as required
   *             (when creating a user pool or in the <b>Attributes</b> tab of
   *             the console) either you should supply (in your call to <code>AdminCreateUser</code>) or
   *             the user should supply (when they sign up in response to your welcome message).</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   *         <p>To send a message inviting the user to sign up, you must specify the user's email
   *             address or phone number. You can do this in your call to AdminCreateUser or in the
   *                 <b>Users</b> tab of the Amazon Cognito console for managing your
   *             user pools.</p>
   *         <p>In your call to <code>AdminCreateUser</code>, you can set the
   *                 <code>email_verified</code> attribute to <code>True</code>, and you can set the
   *                 <code>phone_number_verified</code> attribute to <code>True</code>. You can also do
   *             this by calling <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html">AdminUpdateUserAttributes</a>.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>email</b>: The email address of the user to whom
   *                     the message that contains the code and username will be sent. Required if the
   *                         <code>email_verified</code> attribute is set to <code>True</code>, or if
   *                         <code>"EMAIL"</code> is specified in the <code>DesiredDeliveryMediums</code>
   *                     parameter.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>phone_number</b>: The phone number of the user to
   *                     whom the message that contains the code and username will be sent. Required if
   *                     the <code>phone_number_verified</code> attribute is set to <code>True</code>, or
   *                     if <code>"SMS"</code> is specified in the <code>DesiredDeliveryMediums</code>
   *                     parameter.</p>
   *             </li>
   *          </ul>
   */
  UserAttributes?: AttributeType[];

  /**
   * <p>The user's validation data. This is an array of name-value pairs that contain user
   *             attributes and attribute values that you can use for custom validation, such as
   *             restricting the types of user accounts that can be registered. For example, you might
   *             choose to allow or disallow user sign-up based on the user's domain.</p>
   *         <p>To configure custom validation, you must create a Pre Sign-up Lambda trigger for
   *             the user pool as described in the Amazon Cognito Developer Guide. The Lambda trigger receives the
   *             validation data and uses it in the validation process.</p>
   *         <p>The user's validation data isn't persisted.</p>
   */
  ValidationData?: AttributeType[];

  /**
   * <p>The user's temporary password. This password must conform to the password policy that
   *             you specified when you created the user pool.</p>
   *         <p>The temporary password is valid only once. To complete the Admin Create User flow, the
   *             user must enter the temporary password in the sign-in page, along with a new password to
   *             be used in all future sign-ins.</p>
   *         <p>This parameter isn't required. If you don't specify a value, Amazon Cognito generates one for
   *             you.</p>
   *         <p>The temporary password can only be used until the user account expiration limit that
   *             you specified when you created the user pool. To reset the account after that time
   *             limit, you must call <code>AdminCreateUser</code> again, specifying
   *                 <code>"RESEND"</code> for the <code>MessageAction</code> parameter.</p>
   */
  TemporaryPassword?: string;

  /**
   * <p>This parameter is used only if the <code>phone_number_verified</code> or
   *                 <code>email_verified</code> attribute is set to <code>True</code>. Otherwise, it is
   *             ignored.</p>
   *         <p>If this parameter is set to <code>True</code> and the phone number or email address
   *             specified in the UserAttributes parameter already exists as an alias with a different
   *             user, the API call will migrate the alias from the previous user to the newly created
   *             user. The previous user will no longer be able to log in using that alias.</p>
   *         <p>If this parameter is set to <code>False</code>, the API throws an
   *                 <code>AliasExistsException</code> error if the alias already exists. The default
   *             value is <code>False</code>.</p>
   */
  ForceAliasCreation?: boolean;

  /**
   * <p>Set to <code>RESEND</code> to resend the invitation message to a user that already
   *             exists and reset the expiration limit on the user's account. Set to
   *                 <code>SUPPRESS</code> to suppress sending the message. You can specify only one
   *             value.</p>
   */
  MessageAction?: MessageActionType | string;

  /**
   * <p>Specify <code>"EMAIL"</code> if email will be used to send the welcome message.
   *             Specify <code>"SMS"</code> if the phone number will be used. The default value is
   *                 <code>"SMS"</code>. You can specify more than one value.</p>
   */
  DesiredDeliveryMediums?: (DeliveryMediumType | string)[];

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the AdminCreateUser API action, Amazon Cognito invokes the function that is assigned
   *             to the <i>pre sign-up</i> trigger. When Amazon Cognito invokes this function, it
   *             passes a JSON payload, which the function receives as input. This payload contains a
   *                 <code>clientMetadata</code> attribute, which provides the data that you assigned to
   *             the ClientMetadata parameter in your AdminCreateUser request. In your function code in
   *             Lambda, you can process the <code>clientMetadata</code> value to enhance your
   *             workflow for your specific needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>
 *             <i>This data type is no longer supported.</i> Applies only to SMS
 *             multi-factor authentication (MFA) configurations. Does not apply to time-based one-time
 *             password (TOTP) software token MFA configurations.</p>
 */
export interface MFAOptionType {
  /**
   * <p>The delivery medium to send the MFA code. You can use this parameter to set only the
   *                 <code>SMS</code> delivery medium value.</p>
   */
  DeliveryMedium?: DeliveryMediumType | string;

  /**
   * <p>The attribute name of the MFA option type. The only valid value is
   *                 <code>phone_number</code>.</p>
   */
  AttributeName?: string;
}

export enum UserStatusType {
  ARCHIVED = "ARCHIVED",
  COMPROMISED = "COMPROMISED",
  CONFIRMED = "CONFIRMED",
  FORCE_CHANGE_PASSWORD = "FORCE_CHANGE_PASSWORD",
  RESET_REQUIRED = "RESET_REQUIRED",
  UNCONFIRMED = "UNCONFIRMED",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>A user profile in a Amazon Cognito user pool.</p>
 */
export interface UserType {
  /**
   * <p>The user name of the user you want to describe.</p>
   */
  Username?: string;

  /**
   * <p>A container with information about the user type attributes.</p>
   */
  Attributes?: AttributeType[];

  /**
   * <p>The creation date of the user.</p>
   */
  UserCreateDate?: Date;

  /**
   * <p>The last modified date of the user.</p>
   */
  UserLastModifiedDate?: Date;

  /**
   * <p>Specifies whether the user is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The user status. This can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>UNCONFIRMED - User has been created but not confirmed.</p>
   *             </li>
   *             <li>
   *                 <p>CONFIRMED - User has been confirmed.</p>
   *             </li>
   *             <li>
   *                 <p>EXTERNAL_PROVIDER - User signed in with a third-party IdP.</p>
   *             </li>
   *             <li>
   *                 <p>ARCHIVED - User is no longer active.</p>
   *             </li>
   *             <li>
   *                 <p>UNKNOWN - User status isn't known.</p>
   *             </li>
   *             <li>
   *                 <p>RESET_REQUIRED - User is confirmed, but the user must request a code and reset
   *                     their password before they can sign in.</p>
   *             </li>
   *             <li>
   *                 <p>FORCE_CHANGE_PASSWORD - The user is confirmed and the user can sign in using a
   *                     temporary password, but on first sign-in, the user must change their password to
   *                     a new value before doing anything else. </p>
   *             </li>
   *          </ul>
   */
  UserStatus?: UserStatusType | string;

  /**
   * <p>The MFA options for the user.</p>
   */
  MFAOptions?: MFAOptionType[];
}

/**
 * <p>Represents the response from the server to the request to create the user.</p>
 */
export interface AdminCreateUserResponse {
  /**
   * <p>The newly created user.</p>
   */
  User?: UserType;
}

/**
 * <p>This exception is thrown when a verification code fails to deliver
 *             successfully.</p>
 */
export class CodeDeliveryFailureException extends __BaseException {
  readonly name: "CodeDeliveryFailureException" = "CodeDeliveryFailureException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeDeliveryFailureException, __BaseException>) {
    super({
      name: "CodeDeliveryFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeDeliveryFailureException.prototype);
  }
}

/**
 * <p>This exception is thrown when Amazon Cognito encounters an invalid password.</p>
 */
export class InvalidPasswordException extends __BaseException {
  readonly name: "InvalidPasswordException" = "InvalidPasswordException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPasswordException, __BaseException>) {
    super({
      name: "InvalidPasswordException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPasswordException.prototype);
  }
}

/**
 * <p>This exception is returned when the role provided for SMS configuration doesn't have
 *             permission to publish using Amazon SNS.</p>
 */
export class InvalidSmsRoleAccessPolicyException extends __BaseException {
  readonly name: "InvalidSmsRoleAccessPolicyException" = "InvalidSmsRoleAccessPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSmsRoleAccessPolicyException, __BaseException>) {
    super({
      name: "InvalidSmsRoleAccessPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSmsRoleAccessPolicyException.prototype);
  }
}

/**
 * <p>This exception is thrown when the trust relationship is not valid for the role
 *             provided for SMS configuration. This can happen if you don't trust
 *             <code>cognito-idp.amazonaws.com</code> or the external ID provided in the role does
 *             not match what is provided in the SMS configuration for the user pool.</p>
 */
export class InvalidSmsRoleTrustRelationshipException extends __BaseException {
  readonly name: "InvalidSmsRoleTrustRelationshipException" = "InvalidSmsRoleTrustRelationshipException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidSmsRoleTrustRelationshipException, __BaseException>) {
    super({
      name: "InvalidSmsRoleTrustRelationshipException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidSmsRoleTrustRelationshipException.prototype);
  }
}

/**
 * <p>This exception is thrown when a precondition is not met.</p>
 */
export class PreconditionNotMetException extends __BaseException {
  readonly name: "PreconditionNotMetException" = "PreconditionNotMetException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionNotMetException, __BaseException>) {
    super({
      name: "PreconditionNotMetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionNotMetException.prototype);
  }
}

/**
 * <p>The request failed because the user is in an unsupported state.</p>
 */
export class UnsupportedUserStateException extends __BaseException {
  readonly name: "UnsupportedUserStateException" = "UnsupportedUserStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedUserStateException, __BaseException>) {
    super({
      name: "UnsupportedUserStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedUserStateException.prototype);
  }
}

/**
 * <p>This exception is thrown when Amazon Cognito encounters a user name that already
 *             exists in the user pool.</p>
 */
export class UsernameExistsException extends __BaseException {
  readonly name: "UsernameExistsException" = "UsernameExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UsernameExistsException, __BaseException>) {
    super({
      name: "UsernameExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UsernameExistsException.prototype);
  }
}

/**
 * <p>The message template structure.</p>
 */
export interface MessageTemplateType {
  /**
   * <p>The message template for SMS messages.</p>
   */
  SMSMessage?: string;

  /**
   * <p>The message template for email messages. EmailMessage is allowed only if <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is DEVELOPER. </p>
   */
  EmailMessage?: string;

  /**
   * <p>The subject line for email messages. EmailSubject is allowed only if <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is DEVELOPER. </p>
   */
  EmailSubject?: string;
}

/**
 * <p>The configuration for creating a new user profile.</p>
 */
export interface AdminCreateUserConfigType {
  /**
   * <p>Set to <code>True</code> if only the administrator is allowed to create user profiles.
   *             Set to <code>False</code> if users can sign themselves up via an app.</p>
   */
  AllowAdminCreateUserOnly?: boolean;

  /**
   * <p>The user account expiration limit, in days, after which a new account that hasn't
   *             signed in is no longer usable. To reset the account after that time limit, you must call
   *                 <code>AdminCreateUser</code> again, specifying <code>"RESEND"</code> for the
   *                 <code>MessageAction</code> parameter. The default value for this parameter is 7. </p>
   *         <note>
   *             <p>If you set a value for <code>TemporaryPasswordValidityDays</code> in
   *                     <code>PasswordPolicy</code>, that value will be used, and
   *                     <code>UnusedAccountValidityDays</code> will be no longer be an available
   *                 parameter for that user pool.</p>
   *         </note>
   */
  UnusedAccountValidityDays?: number;

  /**
   * <p>The message template to be used for the welcome message to new users.</p>
   *         <p>See also <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-message-customizations.html#cognito-user-pool-settings-user-invitation-message-customization">Customizing User Invitation Messages</a>.</p>
   */
  InviteMessageTemplate?: MessageTemplateType;
}

/**
 * <p>Represents the request to delete a user as an administrator.</p>
 */
export interface AdminDeleteUserRequest {
  /**
   * <p>The user pool ID for the user pool where you want to delete the user.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user you want to delete.</p>
   */
  Username: string | undefined;
}

/**
 * <p>Represents the request to delete user attributes as an administrator.</p>
 */
export interface AdminDeleteUserAttributesRequest {
  /**
   * <p>The user pool ID for the user pool where you want to delete user attributes.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user from which you would like to delete attributes.</p>
   */
  Username: string | undefined;

  /**
   * <p>An array of strings representing the user attribute names you want to delete.</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   */
  UserAttributeNames: string[] | undefined;
}

/**
 * <p>Represents the response received from the server for a request to delete user
 *             attributes.</p>
 */
export interface AdminDeleteUserAttributesResponse {}

/**
 * <p>A container for information about an IdP for a user pool.</p>
 */
export interface ProviderUserIdentifierType {
  /**
   * <p>The name of the provider, such as Facebook, Google, or Login with Amazon.</p>
   */
  ProviderName?: string;

  /**
   * <p>The name of the provider attribute to link to, such as <code>NameID</code>.</p>
   */
  ProviderAttributeName?: string;

  /**
   * <p>The value of the provider attribute to link to, such as
   *             <code>xxxxx_account</code>.</p>
   */
  ProviderAttributeValue?: string;
}

export interface AdminDisableProviderForUserRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user to be disabled.</p>
   */
  User: ProviderUserIdentifierType | undefined;
}

export interface AdminDisableProviderForUserResponse {}

/**
 * <p>This exception is thrown when a user tries to confirm the account with an email
 *             address or phone number that has already been supplied as an alias for a different
 *             user profile. This exception indicates that an account with this email address or phone
 *             already exists in a user pool that you've configured to use email address or phone
 *             number as a sign-in alias.</p>
 */
export class AliasExistsException extends __BaseException {
  readonly name: "AliasExistsException" = "AliasExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AliasExistsException, __BaseException>) {
    super({
      name: "AliasExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AliasExistsException.prototype);
  }
}

/**
 * <p>Represents the request to disable the user as an administrator.</p>
 */
export interface AdminDisableUserRequest {
  /**
   * <p>The user pool ID for the user pool where you want to disable the user.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user you want to disable.</p>
   */
  Username: string | undefined;
}

/**
 * <p>Represents the response received from the server to disable the user as an
 *             administrator.</p>
 */
export interface AdminDisableUserResponse {}

/**
 * <p>Represents the request that enables the user as an administrator.</p>
 */
export interface AdminEnableUserRequest {
  /**
   * <p>The user pool ID for the user pool where you want to enable the user.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user you want to enable.</p>
   */
  Username: string | undefined;
}

/**
 * <p>Represents the response from the server for the request to enable a user as an
 *             administrator.</p>
 */
export interface AdminEnableUserResponse {}

/**
 * <p>Sends the forgot device request, as an administrator.</p>
 */
export interface AdminForgetDeviceRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name.</p>
   */
  Username: string | undefined;

  /**
   * <p>The device key.</p>
   */
  DeviceKey: string | undefined;
}

/**
 * <p>This exception is thrown when the user pool configuration is not valid.</p>
 */
export class InvalidUserPoolConfigurationException extends __BaseException {
  readonly name: "InvalidUserPoolConfigurationException" = "InvalidUserPoolConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidUserPoolConfigurationException, __BaseException>) {
    super({
      name: "InvalidUserPoolConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidUserPoolConfigurationException.prototype);
  }
}

/**
 * <p>Represents the request to get the device, as an administrator.</p>
 */
export interface AdminGetDeviceRequest {
  /**
   * <p>The device key.</p>
   */
  DeviceKey: string | undefined;

  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name.</p>
   */
  Username: string | undefined;
}

/**
 * <p>The device type.</p>
 */
export interface DeviceType {
  /**
   * <p>The device key.</p>
   */
  DeviceKey?: string;

  /**
   * <p>The device attributes.</p>
   */
  DeviceAttributes?: AttributeType[];

  /**
   * <p>The creation date of the device.</p>
   */
  DeviceCreateDate?: Date;

  /**
   * <p>The last modified date of the device.</p>
   */
  DeviceLastModifiedDate?: Date;

  /**
   * <p>The date when the device was last authenticated.</p>
   */
  DeviceLastAuthenticatedDate?: Date;
}

/**
 * <p>Gets the device response, as an administrator.</p>
 */
export interface AdminGetDeviceResponse {
  /**
   * <p>The device.</p>
   */
  Device: DeviceType | undefined;
}

/**
 * <p>Represents the request to get the specified user as an administrator.</p>
 */
export interface AdminGetUserRequest {
  /**
   * <p>The user pool ID for the user pool where you want to get information about the
   *             user.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user you want to retrieve.</p>
   */
  Username: string | undefined;
}

/**
 * <p>Represents the response from the server from the request to get the specified user as
 *             an administrator.</p>
 */
export interface AdminGetUserResponse {
  /**
   * <p>The user name of the user about whom you're receiving information.</p>
   */
  Username: string | undefined;

  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   */
  UserAttributes?: AttributeType[];

  /**
   * <p>The date the user was created.</p>
   */
  UserCreateDate?: Date;

  /**
   * <p>The date the user was last modified.</p>
   */
  UserLastModifiedDate?: Date;

  /**
   * <p>Indicates that the status is <code>enabled</code>.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The user status. Can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>UNCONFIRMED - User has been created but not confirmed.</p>
   *             </li>
   *             <li>
   *                 <p>CONFIRMED - User has been confirmed.</p>
   *             </li>
   *             <li>
   *                 <p>ARCHIVED - User is no longer active.</p>
   *             </li>
   *             <li>
   *                 <p>UNKNOWN - User status isn't known.</p>
   *             </li>
   *             <li>
   *                 <p>RESET_REQUIRED - User is confirmed, but the user must request a code and reset
   *                     their password before they can sign in.</p>
   *             </li>
   *             <li>
   *                 <p>FORCE_CHANGE_PASSWORD - The user is confirmed and the user can sign in using a
   *                     temporary password, but on first sign-in, the user must change their password to
   *                     a new value before doing anything else. </p>
   *             </li>
   *          </ul>
   */
  UserStatus?: UserStatusType | string;

  /**
   * <p>
   *             <i>This response parameter is no longer supported.</i> It provides
   *             information only about SMS MFA configurations. It doesn't provide information about
   *             time-based one-time password (TOTP) software token MFA configurations. To look up
   *             information about either type of MFA configuration, use UserMFASettingList
   *             instead.</p>
   */
  MFAOptions?: MFAOptionType[];

  /**
   * <p>The user's preferred MFA setting.</p>
   */
  PreferredMfaSetting?: string;

  /**
   * <p>The MFA options that are activated for the user. The possible values in this list are
   *                 <code>SMS_MFA</code> and <code>SOFTWARE_TOKEN_MFA</code>.</p>
   */
  UserMFASettingList?: string[];
}

/**
 * <p>An Amazon Pinpoint analytics endpoint.</p>
 *         <p>An endpoint uniquely identifies a mobile device, email address, or phone number that
 *             can receive messages from Amazon Pinpoint analytics. For more information about Amazon Web Services Regions that
 *             can contain Amazon Pinpoint resources for use with Amazon Cognito user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html">Using Amazon Pinpoint analytics with Amazon Cognito user pools</a>.</p>
 */
export interface AnalyticsMetadataType {
  /**
   * <p>The endpoint ID.</p>
   */
  AnalyticsEndpointId?: string;
}

export enum AuthFlowType {
  ADMIN_NO_SRP_AUTH = "ADMIN_NO_SRP_AUTH",
  ADMIN_USER_PASSWORD_AUTH = "ADMIN_USER_PASSWORD_AUTH",
  CUSTOM_AUTH = "CUSTOM_AUTH",
  REFRESH_TOKEN = "REFRESH_TOKEN",
  REFRESH_TOKEN_AUTH = "REFRESH_TOKEN_AUTH",
  USER_PASSWORD_AUTH = "USER_PASSWORD_AUTH",
  USER_SRP_AUTH = "USER_SRP_AUTH",
}

/**
 * <p>The HTTP header.</p>
 */
export interface HttpHeader {
  /**
   * <p>The header name.</p>
   */
  headerName?: string;

  /**
   * <p>The header value.</p>
   */
  headerValue?: string;
}

/**
 * <p>Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito
 *             advanced security.</p>
 */
export interface ContextDataType {
  /**
   * <p>The source IP address of your user's device.</p>
   */
  IpAddress: string | undefined;

  /**
   * <p>Your server endpoint where this API is invoked.</p>
   */
  ServerName: string | undefined;

  /**
   * <p>Your server path where this API is invoked.</p>
   */
  ServerPath: string | undefined;

  /**
   * <p>HttpHeaders received on your server in same order.</p>
   */
  HttpHeaders: HttpHeader[] | undefined;

  /**
   * <p>Encoded device-fingerprint details that your app collected with the Amazon Cognito
   *             context data collection library. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint">Adding user device and session data to API requests</a>.</p>
   */
  EncodedData?: string;
}

/**
 * <p>Initiates the authorization request, as an administrator.</p>
 */
export interface AdminInitiateAuthRequest {
  /**
   * <p>The ID of the Amazon Cognito user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The authentication flow for this call to run. The API action will depend on this
   *             value. For example:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>REFRESH_TOKEN_AUTH</code> will take in a valid refresh token and return
   *                     new tokens.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>USER_SRP_AUTH</code> will take in <code>USERNAME</code> and
   *                         <code>SRP_A</code> and return the Secure Remote Password (SRP) protocol
   *                     variables to be used for next challenge execution.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ADMIN_USER_PASSWORD_AUTH</code> will take in <code>USERNAME</code> and
   *                         <code>PASSWORD</code> and return the next challenge or tokens.</p>
   *             </li>
   *          </ul>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>USER_SRP_AUTH</code>: Authentication flow for the Secure Remote Password
   *                     (SRP) protocol.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>REFRESH_TOKEN_AUTH</code>/<code>REFRESH_TOKEN</code>: Authentication
   *                     flow for refreshing the access token and ID token by supplying a valid refresh
   *                     token.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CUSTOM_AUTH</code>: Custom authentication flow.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ADMIN_NO_SRP_AUTH</code>: Non-SRP authentication flow; you can pass in
   *                     the USERNAME and PASSWORD directly if the flow is enabled for calling the app
   *                     client.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ADMIN_USER_PASSWORD_AUTH</code>: Admin-based user password
   *                     authentication. This replaces the <code>ADMIN_NO_SRP_AUTH</code> authentication
   *                     flow. In this flow, Amazon Cognito receives the password in the request instead of using
   *                     the SRP process to verify passwords.</p>
   *             </li>
   *          </ul>
   */
  AuthFlow: AuthFlowType | string | undefined;

  /**
   * <p>The authentication parameters. These are inputs corresponding to the
   *                 <code>AuthFlow</code> that you're invoking. The required values depend on the value
   *             of <code>AuthFlow</code>:</p>
   *         <ul>
   *             <li>
   *                 <p>For <code>USER_SRP_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SRP_A</code> (required), <code>SECRET_HASH</code> (required if the app
   *                     client is configured with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For <code>REFRESH_TOKEN_AUTH/REFRESH_TOKEN</code>: <code>REFRESH_TOKEN</code>
   *                     (required), <code>SECRET_HASH</code> (required if the app client is configured
   *                     with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For <code>ADMIN_NO_SRP_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SECRET_HASH</code> (if app client is configured with client secret),
   *                         <code>PASSWORD</code> (required), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For <code>CUSTOM_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SECRET_HASH</code> (if app client is configured with client secret),
   *                         <code>DEVICE_KEY</code>. To start the authentication flow with password
   *                     verification, include <code>ChallengeName: SRP_A</code> and <code>SRP_A: (The
   *                         SRP_A Value)</code>.</p>
   *             </li>
   *          </ul>
   */
  AuthParameters?: Record<string, string>;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for certain custom
   *             workflows that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the AdminInitiateAuth API action, Amazon Cognito invokes the Lambda functions that
   *             are specified for various triggers. The ClientMetadata value is passed as input to the
   *             functions for only the following triggers:</p>
   *         <ul>
   *             <li>
   *                 <p>Pre signup</p>
   *             </li>
   *             <li>
   *                 <p>Pre authentication</p>
   *             </li>
   *             <li>
   *                 <p>User migration</p>
   *             </li>
   *          </ul>
   *         <p>When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload, which
   *             the function receives as input. This payload contains a <code>validationData</code>
   *             attribute, which provides the data that you assigned to the ClientMetadata parameter in
   *             your AdminInitiateAuth request. In your function code in Lambda, you can process the
   *                 <code>validationData</code> value to enhance your workflow for your specific
   *             needs.</p>
   *         <p>When you use the AdminInitiateAuth API action, Amazon Cognito also invokes the functions for
   *             the following triggers, but it doesn't provide the ClientMetadata value as input:</p>
   *         <ul>
   *             <li>
   *                 <p>Post authentication</p>
   *             </li>
   *             <li>
   *                 <p>Custom message</p>
   *             </li>
   *             <li>
   *                 <p>Pre token generation</p>
   *             </li>
   *             <li>
   *                 <p>Create auth challenge</p>
   *             </li>
   *             <li>
   *                 <p>Define auth challenge</p>
   *             </li>
   *             <li>
   *                 <p>Verify auth challenge</p>
   *             </li>
   *          </ul>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;

  /**
   * <p>The analytics metadata for collecting Amazon Pinpoint metrics for
   *                 <code>AdminInitiateAuth</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   */
  ContextData?: ContextDataType;
}

/**
 * <p>The new device metadata type.</p>
 */
export interface NewDeviceMetadataType {
  /**
   * <p>The device key.</p>
   */
  DeviceKey?: string;

  /**
   * <p>The device group key.</p>
   */
  DeviceGroupKey?: string;
}

/**
 * <p>The authentication result.</p>
 */
export interface AuthenticationResultType {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user who you want to
   *             authenticate.</p>
   */
  AccessToken?: string;

  /**
   * <p>The expiration period of the authentication result in seconds.</p>
   */
  ExpiresIn?: number;

  /**
   * <p>The token type.</p>
   */
  TokenType?: string;

  /**
   * <p>The refresh token.</p>
   */
  RefreshToken?: string;

  /**
   * <p>The ID token.</p>
   */
  IdToken?: string;

  /**
   * <p>The new device metadata from an authentication result.</p>
   */
  NewDeviceMetadata?: NewDeviceMetadataType;
}

export enum ChallengeNameType {
  ADMIN_NO_SRP_AUTH = "ADMIN_NO_SRP_AUTH",
  CUSTOM_CHALLENGE = "CUSTOM_CHALLENGE",
  DEVICE_PASSWORD_VERIFIER = "DEVICE_PASSWORD_VERIFIER",
  DEVICE_SRP_AUTH = "DEVICE_SRP_AUTH",
  MFA_SETUP = "MFA_SETUP",
  NEW_PASSWORD_REQUIRED = "NEW_PASSWORD_REQUIRED",
  PASSWORD_VERIFIER = "PASSWORD_VERIFIER",
  SELECT_MFA_TYPE = "SELECT_MFA_TYPE",
  SMS_MFA = "SMS_MFA",
  SOFTWARE_TOKEN_MFA = "SOFTWARE_TOKEN_MFA",
}

/**
 * <p>Initiates the authentication response, as an administrator.</p>
 */
export interface AdminInitiateAuthResponse {
  /**
   * <p>The name of the challenge that you're responding to with this call. This is returned
   *             in the <code>AdminInitiateAuth</code> response if you must pass another
   *             challenge.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>MFA_SETUP</code>: If MFA is required, users who don't have at least one
   *                     of the MFA methods set up are presented with an <code>MFA_SETUP</code>
   *                     challenge. The user must set up at least one MFA type to continue to
   *                     authenticate.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SELECT_MFA_TYPE</code>: Selects the MFA type. Valid MFA options are
   *                         <code>SMS_MFA</code> for text SMS MFA, and <code>SOFTWARE_TOKEN_MFA</code>
   *                     for time-based one-time password (TOTP) software token MFA.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SMS_MFA</code>: Next challenge is to supply an
   *                     <code>SMS_MFA_CODE</code>, delivered via SMS.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PASSWORD_VERIFIER</code>: Next challenge is to supply
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     the client-side SRP calculations.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication
   *                     flow determines that the user should pass another challenge before tokens are
   *                     issued.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DEVICE_SRP_AUTH</code>: If device tracking was activated in your user
   *                     pool and the previous challenges were passed, this challenge is returned so that
   *                     Amazon Cognito can start tracking this device.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Similar to
   *                         <code>PASSWORD_VERIFIER</code>, but for devices only.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ADMIN_NO_SRP_AUTH</code>: This is returned if you must authenticate with
   *                         <code>USERNAME</code> and <code>PASSWORD</code> directly. An app client must
   *                     be enabled to use this flow.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their
   *                     passwords after successful first login. Respond to this challenge with
   *                         <code>NEW_PASSWORD</code> and any required attributes that Amazon Cognito returned in
   *                     the <code>requiredAttributes</code> parameter. You can also set values for
   *                     attributes that aren't required by your user pool and that your app client can
   *                     write. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRespondToAuthChallenge.html">AdminRespondToAuthChallenge</a>.</p>
   *
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>AdminRespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter,
   * then use the <code>AdminUpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p>
   *                </note>
   *
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MFA_SETUP</code>: For users who are required to set up an MFA factor
   *                     before they can sign in. The MFA types activated for the user pool will be
   *                     listed in the challenge parameters <code>MFA_CAN_SETUP</code> value. </p>
   *                 <p> To set up software token MFA, use the session returned here from
   *                         <code>InitiateAuth</code> as an input to
   *                     <code>AssociateSoftwareToken</code>, and use the session returned by
   *                         <code>VerifySoftwareToken</code> as an input to
   *                         <code>RespondToAuthChallenge</code> with challenge name
   *                         <code>MFA_SETUP</code> to complete sign-in. To set up SMS MFA, users will
   *                     need help from an administrator to add a phone number to their account and then
   *                     call <code>InitiateAuth</code> again to restart sign-in.</p>
   *             </li>
   *          </ul>
   */
  ChallengeName?: ChallengeNameType | string;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. If <code>AdminInitiateAuth</code> or <code>AdminRespondToAuthChallenge</code>
   *             API call determines that the caller must pass another challenge, they return a session
   *             with other challenge parameters. This session should be passed as it is to the next
   *                 <code>AdminRespondToAuthChallenge</code> API call.</p>
   */
  Session?: string;

  /**
   * <p>The challenge parameters. These are returned to you in the
   *                 <code>AdminInitiateAuth</code> response if you must pass another challenge. The
   *             responses in this parameter should be used to compute inputs to the next call
   *                 (<code>AdminRespondToAuthChallenge</code>).</p>
   *         <p>All challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if
   *             applicable).</p>
   *         <p>The value of the <code>USER_ID_FOR_SRP</code> attribute is the user's actual username,
   *             not an alias (such as email address or phone number), even if you specified an alias in
   *             your call to <code>AdminInitiateAuth</code>. This happens because, in the
   *                 <code>AdminRespondToAuthChallenge</code> API <code>ChallengeResponses</code>, the
   *                 <code>USERNAME</code> attribute can't be an alias.</p>
   */
  ChallengeParameters?: Record<string, string>;

  /**
   * <p>The result of the authentication response. This is only returned if the caller doesn't
   *             need to pass another challenge. If the caller does need to pass another challenge before
   *             it gets tokens, <code>ChallengeName</code>, <code>ChallengeParameters</code>, and
   *                 <code>Session</code> are returned.</p>
   */
  AuthenticationResult?: AuthenticationResultType;
}

/**
 * <p>This exception is thrown when Amazon Cognito can't find a multi-factor authentication
 *             (MFA) method.</p>
 */
export class MFAMethodNotFoundException extends __BaseException {
  readonly name: "MFAMethodNotFoundException" = "MFAMethodNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MFAMethodNotFoundException, __BaseException>) {
    super({
      name: "MFAMethodNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MFAMethodNotFoundException.prototype);
  }
}

/**
 * <p>This exception is thrown when a password reset is required.</p>
 */
export class PasswordResetRequiredException extends __BaseException {
  readonly name: "PasswordResetRequiredException" = "PasswordResetRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PasswordResetRequiredException, __BaseException>) {
    super({
      name: "PasswordResetRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PasswordResetRequiredException.prototype);
  }
}

/**
 * <p>This exception is thrown when a user isn't confirmed successfully.</p>
 */
export class UserNotConfirmedException extends __BaseException {
  readonly name: "UserNotConfirmedException" = "UserNotConfirmedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserNotConfirmedException, __BaseException>) {
    super({
      name: "UserNotConfirmedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserNotConfirmedException.prototype);
  }
}

export interface AdminLinkProviderForUserRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The existing user in the user pool that you want to assign to the external IdP user
   *             account. This user can be a native (Username + Password) Amazon Cognito user pools user or a
   *             federated user (for example, a SAML or Facebook user). If the user doesn't exist, Amazon Cognito
   *             generates an exception. Amazon Cognito returns this user when the new user (with the linked IdP
   *             attribute) signs in.</p>
   *         <p>For a native username + password user, the <code>ProviderAttributeValue</code> for the
   *                 <code>DestinationUser</code> should be the username in the user pool. For a
   *             federated user, it should be the provider-specific <code>user_id</code>.</p>
   *         <p>The <code>ProviderAttributeName</code> of the <code>DestinationUser</code> is
   *             ignored.</p>
   *         <p>The <code>ProviderName</code> should be set to <code>Cognito</code> for users in
   *             Cognito user pools.</p>
   *         <important>
   *             <p>All attributes in the DestinationUser profile must be mutable. If you have
   *                 assigned the user any immutable custom attributes, the operation won't
   *                 succeed.</p>
   *         </important>
   */
  DestinationUser: ProviderUserIdentifierType | undefined;

  /**
   * <p>An external IdP account for a user who doesn't exist yet in the user pool. This user
   *             must be a federated user (for example, a SAML or Facebook user), not another native
   *             user.</p>
   *         <p>If the <code>SourceUser</code> is using a federated social IdP, such as Facebook,
   *             Google, or Login with Amazon, you must set the <code>ProviderAttributeName</code> to
   *                 <code>Cognito_Subject</code>. For social IdPs, the <code>ProviderName</code> will be
   *                 <code>Facebook</code>, <code>Google</code>, or <code>LoginWithAmazon</code>, and
   *             Amazon Cognito will automatically parse the Facebook, Google, and Login with Amazon tokens for
   *                 <code>id</code>, <code>sub</code>, and <code>user_id</code>, respectively. The
   *                 <code>ProviderAttributeValue</code> for the user must be the same value as the
   *                 <code>id</code>, <code>sub</code>, or <code>user_id</code> value found in the social
   *             IdP token.</p>
   *         <p></p>
   *         <p>For SAML, the <code>ProviderAttributeName</code> can be any value that matches a claim
   *             in the SAML assertion. If you want to link SAML users based on the subject of the SAML
   *             assertion, you should map the subject to a claim through the SAML IdP and submit that
   *             claim name as the <code>ProviderAttributeName</code>. If you set
   *                 <code>ProviderAttributeName</code> to <code>Cognito_Subject</code>, Amazon Cognito will
   *             automatically parse the default unique identifier found in the subject from the SAML
   *             token.</p>
   */
  SourceUser: ProviderUserIdentifierType | undefined;
}

export interface AdminLinkProviderForUserResponse {}

/**
 * <p>Represents the request to list devices, as an administrator.</p>
 */
export interface AdminListDevicesRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name.</p>
   */
  Username: string | undefined;

  /**
   * <p>The limit of the devices request.</p>
   */
  Limit?: number;

  /**
   * <p>The pagination token.</p>
   */
  PaginationToken?: string;
}

/**
 * <p>Lists the device's response, as an administrator.</p>
 */
export interface AdminListDevicesResponse {
  /**
   * <p>The devices in the list of devices response.</p>
   */
  Devices?: DeviceType[];

  /**
   * <p>The pagination token.</p>
   */
  PaginationToken?: string;
}

export interface AdminListGroupsForUserRequest {
  /**
   * <p>The username for the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The limit of the request to list groups.</p>
   */
  Limit?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

/**
 * <p>The group type.</p>
 */
export interface GroupType {
  /**
   * <p>The name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId?: string;

  /**
   * <p>A string containing the description of the group.</p>
   */
  Description?: string;

  /**
   * <p>The role Amazon Resource Name (ARN) for the group.</p>
   */
  RoleArn?: string;

  /**
   * <p>A non-negative integer value that specifies the precedence of this group relative to
   *             the other groups that a user can belong to in the user pool. Zero is the highest
   *             precedence value. Groups with lower <code>Precedence</code> values take precedence over
   *             groups with higher ornull <code>Precedence</code> values. If a user belongs to two or
   *             more groups, it is the group with the lowest precedence value whose role ARN is given in
   *             the user's tokens for the <code>cognito:roles</code> and
   *                 <code>cognito:preferred_role</code> claims.</p>
   *         <p>Two groups can have the same <code>Precedence</code> value. If this happens, neither
   *             group takes precedence over the other. If two groups with the same
   *                 <code>Precedence</code> have the same role ARN, that role is used in the
   *                 <code>cognito:preferred_role</code> claim in tokens for users in each group. If the
   *             two groups have different role ARNs, the <code>cognito:preferred_role</code> claim isn't
   *             set in users' tokens.</p>
   *         <p>The default <code>Precedence</code> value is null.</p>
   */
  Precedence?: number;

  /**
   * <p>The date the group was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the group was created.</p>
   */
  CreationDate?: Date;
}

export interface AdminListGroupsForUserResponse {
  /**
   * <p>The groups that the user belongs to.</p>
   */
  Groups?: GroupType[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

export interface AdminListUserAuthEventsRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user pool username or an alias.</p>
   */
  Username: string | undefined;

  /**
   * <p>The maximum number of authentication events to return. Returns 60 events if you set
   *                 <code>MaxResults</code> to 0, or if you don't include a <code>MaxResults</code>
   *             parameter.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

export enum ChallengeName {
  Mfa = "Mfa",
  Password = "Password",
}

export enum ChallengeResponse {
  Failure = "Failure",
  Success = "Success",
}

/**
 * <p>The challenge response type.</p>
 */
export interface ChallengeResponseType {
  /**
   * <p>The challenge name.</p>
   */
  ChallengeName?: ChallengeName | string;

  /**
   * <p>The challenge response.</p>
   */
  ChallengeResponse?: ChallengeResponse | string;
}

/**
 * <p>Specifies the user context data captured at the time of an event request.</p>
 */
export interface EventContextDataType {
  /**
   * <p>The source IP address of your user's device.</p>
   */
  IpAddress?: string;

  /**
   * <p>The user's device name.</p>
   */
  DeviceName?: string;

  /**
   * <p>The user's time zone.</p>
   */
  Timezone?: string;

  /**
   * <p>The user's city.</p>
   */
  City?: string;

  /**
   * <p>The user's country.</p>
   */
  Country?: string;
}

export enum FeedbackValueType {
  INVALID = "Invalid",
  VALID = "Valid",
}

/**
 * <p>Specifies the event feedback type.</p>
 */
export interface EventFeedbackType {
  /**
   * <p>The event feedback value.</p>
   */
  FeedbackValue: FeedbackValueType | string | undefined;

  /**
   * <p>The provider.</p>
   */
  Provider: string | undefined;

  /**
   * <p>The event feedback date.</p>
   */
  FeedbackDate?: Date;
}

export enum EventResponseType {
  Fail = "Fail",
  InProgress = "InProgress",
  Pass = "Pass",
}

export enum RiskDecisionType {
  AccountTakeover = "AccountTakeover",
  Block = "Block",
  NoRisk = "NoRisk",
}

export enum RiskLevelType {
  High = "High",
  Low = "Low",
  Medium = "Medium",
}

/**
 * <p>The event risk type.</p>
 */
export interface EventRiskType {
  /**
   * <p>The risk decision.</p>
   */
  RiskDecision?: RiskDecisionType | string;

  /**
   * <p>The risk level.</p>
   */
  RiskLevel?: RiskLevelType | string;

  /**
   * <p>Indicates whether compromised credentials were detected during an authentication
   *             event.</p>
   */
  CompromisedCredentialsDetected?: boolean;
}

export enum EventType {
  ForgotPassword = "ForgotPassword",
  PasswordChange = "PasswordChange",
  ResendCode = "ResendCode",
  SignIn = "SignIn",
  SignUp = "SignUp",
}

/**
 * <p>The authentication event type.</p>
 */
export interface AuthEventType {
  /**
   * <p>The event ID.</p>
   */
  EventId?: string;

  /**
   * <p>The event type.</p>
   */
  EventType?: EventType | string;

  /**
   * <p>The creation date</p>
   */
  CreationDate?: Date;

  /**
   * <p>The event response.</p>
   */
  EventResponse?: EventResponseType | string;

  /**
   * <p>The event risk.</p>
   */
  EventRisk?: EventRiskType;

  /**
   * <p>The challenge responses.</p>
   */
  ChallengeResponses?: ChallengeResponseType[];

  /**
   * <p>The user context data captured at the time of an event request. This value provides
   *             additional information about the client from which event the request is received.</p>
   */
  EventContextData?: EventContextDataType;

  /**
   * <p>A flag specifying the user feedback captured at the time of an event request is good
   *             or bad. </p>
   */
  EventFeedback?: EventFeedbackType;
}

export interface AdminListUserAuthEventsResponse {
  /**
   * <p>The response object. It includes the <code>EventID</code>, <code>EventType</code>,
   *                 <code>CreationDate</code>, <code>EventRisk</code>, and
   *             <code>EventResponse</code>.</p>
   */
  AuthEvents?: AuthEventType[];

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>This exception is thrown when user pool add-ons aren't enabled.</p>
 */
export class UserPoolAddOnNotEnabledException extends __BaseException {
  readonly name: "UserPoolAddOnNotEnabledException" = "UserPoolAddOnNotEnabledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserPoolAddOnNotEnabledException, __BaseException>) {
    super({
      name: "UserPoolAddOnNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserPoolAddOnNotEnabledException.prototype);
  }
}

export interface AdminRemoveUserFromGroupRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username for the user.</p>
   */
  Username: string | undefined;

  /**
   * <p>The group name.</p>
   */
  GroupName: string | undefined;
}

/**
 * <p>Represents the request to reset a user's password as an administrator.</p>
 */
export interface AdminResetUserPasswordRequest {
  /**
   * <p>The user pool ID for the user pool where you want to reset the user's password.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user whose password you want to reset.</p>
   */
  Username: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the AdminResetUserPassword API action, Amazon Cognito invokes the function
   *             that is assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes
   *             this function, it passes a JSON payload, which the function receives as input. This
   *             payload contains a <code>clientMetadata</code> attribute, which provides the data that
   *             you assigned to the ClientMetadata parameter in your AdminResetUserPassword request. In
   *             your function code in Lambda, you can process the
   *                 <code>clientMetadata</code> value to enhance your workflow for your specific needs. </p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>Represents the response from the server to reset a user password as an
 *             administrator.</p>
 */
export interface AdminResetUserPasswordResponse {}

/**
 * <p>This exception is thrown when Amazon Cognito isn't allowed to use your email identity. HTTP
 *             status code: 400.</p>
 */
export class InvalidEmailRoleAccessPolicyException extends __BaseException {
  readonly name: "InvalidEmailRoleAccessPolicyException" = "InvalidEmailRoleAccessPolicyException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEmailRoleAccessPolicyException, __BaseException>) {
    super({
      name: "InvalidEmailRoleAccessPolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEmailRoleAccessPolicyException.prototype);
  }
}

/**
 * <p>The request to respond to the authentication challenge, as an administrator.</p>
 */
export interface AdminRespondToAuthChallengeRequest {
  /**
   * <p>The ID of the Amazon Cognito user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html">AdminInitiateAuth</a>.</p>
   */
  ChallengeName: ChallengeNameType | string | undefined;

  /**
   * <p>The challenge responses. These are inputs corresponding to the value of
   *                 <code>ChallengeName</code>, for example:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SMS_MFA</code>: <code>SMS_MFA_CODE</code>, <code>USERNAME</code>,
   *                         <code>SECRET_HASH</code> (if app client is configured with client
   *                     secret).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PASSWORD_VERIFIER</code>: <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, <code>TIMESTAMP</code>,
   *                         <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured
   *                     with client secret).</p>
   *                 <note>
   *                     <p>
   *                      <code>PASSWORD_VERIFIER</code> requires <code>DEVICE_KEY</code> when
   *                         signing in with a remembered device.</p>
   *                 </note>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ADMIN_NO_SRP_AUTH</code>: <code>PASSWORD</code>, <code>USERNAME</code>,
   *                         <code>SECRET_HASH</code> (if app client is configured with client secret).
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>NEW_PASSWORD_REQUIRED</code>: <code>NEW_PASSWORD</code>,
   *                         <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured
   *                     with client secret). To set any required attributes that Amazon Cognito returned as
   *                         <code>requiredAttributes</code> in the <code>AdminInitiateAuth</code>
   *                     response, add a <code>userAttributes.<i>attributename</i>
   *                   </code>
   *                     parameter. This parameter can also set values for writable attributes that
   *                     aren't required by your user pool.</p>
   *
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>AdminRespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter,
   * then use the <code>AdminUpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p>
   *                </note>
   *
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MFA_SETUP</code> requires <code>USERNAME</code>, plus you must use the
   *                     session value returned by <code>VerifySoftwareToken</code> in the
   *                         <code>Session</code> parameter.</p>
   *             </li>
   *          </ul>
   *         <p>The value of the <code>USERNAME</code> attribute must be the user's actual username,
   *             not an alias (such as an email address or phone number). To make this simpler, the
   *                 <code>AdminInitiateAuth</code> response includes the actual username value in the
   *                 <code>USERNAMEUSER_ID_FOR_SRP</code> attribute. This happens even if you specified
   *             an alias in your call to <code>AdminInitiateAuth</code>.</p>
   */
  ChallengeResponses?: Record<string, string>;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. If an <code>InitiateAuth</code> or <code>RespondToAuthChallenge</code> API call
   *             determines that the caller must pass another challenge, it returns a session with other
   *             challenge parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   */
  Session?: string;

  /**
   * <p>The analytics metadata for collecting Amazon Pinpoint metrics for
   *                 <code>AdminRespondToAuthChallenge</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   */
  ContextData?: ContextDataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the AdminRespondToAuthChallenge API action, Amazon Cognito invokes any functions
   *             that you have assigned to the following triggers: </p>
   *         <ul>
   *             <li>
   *                 <p>pre sign-up</p>
   *             </li>
   *             <li>
   *                 <p>custom message</p>
   *             </li>
   *             <li>
   *                 <p>post authentication</p>
   *             </li>
   *             <li>
   *                 <p>user migration</p>
   *             </li>
   *             <li>
   *                 <p>pre token generation</p>
   *             </li>
   *             <li>
   *                 <p>define auth challenge</p>
   *             </li>
   *             <li>
   *                 <p>create auth challenge</p>
   *             </li>
   *             <li>
   *                 <p>verify auth challenge response</p>
   *             </li>
   *          </ul>
   *         <p>When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the
   *             function receives as input. This payload contains a <code>clientMetadata</code>
   *             attribute that provides the data that you assigned to the ClientMetadata parameter in
   *             your AdminRespondToAuthChallenge request. In your function code in Lambda, you can
   *             process the <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>Responds to the authentication challenge, as an administrator.</p>
 */
export interface AdminRespondToAuthChallengeResponse {
  /**
   * <p>The name of the challenge. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html">AdminInitiateAuth</a>.</p>
   */
  ChallengeName?: ChallengeNameType | string;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. If the caller must pass another challenge, they return a session with other
   *             challenge parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   */
  Session?: string;

  /**
   * <p>The challenge parameters. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html">AdminInitiateAuth</a>.</p>
   */
  ChallengeParameters?: Record<string, string>;

  /**
   * <p>The result returned by the server in response to the authentication request.</p>
   */
  AuthenticationResult?: AuthenticationResultType;
}

/**
 * <p>This exception is thrown if the provided code doesn't match what the server was
 *             expecting.</p>
 */
export class CodeMismatchException extends __BaseException {
  readonly name: "CodeMismatchException" = "CodeMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeMismatchException, __BaseException>) {
    super({
      name: "CodeMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeMismatchException.prototype);
  }
}

/**
 * <p>This exception is thrown if a code has expired.</p>
 */
export class ExpiredCodeException extends __BaseException {
  readonly name: "ExpiredCodeException" = "ExpiredCodeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ExpiredCodeException, __BaseException>) {
    super({
      name: "ExpiredCodeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ExpiredCodeException.prototype);
  }
}

/**
 * <p>This exception is thrown when the software token time-based one-time password (TOTP)
 *             multi-factor authentication (MFA) isn't activated for the user pool.</p>
 */
export class SoftwareTokenMFANotFoundException extends __BaseException {
  readonly name: "SoftwareTokenMFANotFoundException" = "SoftwareTokenMFANotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SoftwareTokenMFANotFoundException, __BaseException>) {
    super({
      name: "SoftwareTokenMFANotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SoftwareTokenMFANotFoundException.prototype);
  }
}

/**
 * <p>The type used for enabling SMS multi-factor authentication (MFA) at the user level.
 *             Phone numbers don't need to be verified to be used for SMS MFA. If an MFA type is
 *             activated for a user, the user will be prompted for MFA during all sign-in attempts,
 *             unless device tracking is turned on and the device has been trusted. If you would like
 *             MFA to be applied selectively based on the assessed risk level of sign-in attempts,
 *             deactivate MFA for users and turn on Adaptive Authentication for the user pool.</p>
 */
export interface SMSMfaSettingsType {
  /**
   * <p>Specifies whether SMS text message MFA is activated. If an MFA type is activated for a
   *             user, the user will be prompted for MFA during all sign-in attempts, unless device
   *             tracking is turned on and the device has been trusted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies whether SMS is the preferred MFA method.</p>
   */
  PreferredMfa?: boolean;
}

/**
 * <p>The type used for enabling software token MFA at the user level. If an MFA type is
 *             activated for a user, the user will be prompted for MFA during all sign-in attempts,
 *             unless device tracking is turned on and the device has been trusted. If you want MFA to
 *             be applied selectively based on the assessed risk level of sign-in attempts, deactivate
 *             MFA for users and turn on Adaptive Authentication for the user pool.</p>
 */
export interface SoftwareTokenMfaSettingsType {
  /**
   * <p>Specifies whether software token MFA is activated. If an MFA type is activated for a
   *             user, the user will be prompted for MFA during all sign-in attempts, unless device
   *             tracking is turned on and the device has been trusted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies whether software token MFA is the preferred MFA method.</p>
   */
  PreferredMfa?: boolean;
}

export interface AdminSetUserMFAPreferenceRequest {
  /**
   * <p>The SMS text message MFA settings.</p>
   */
  SMSMfaSettings?: SMSMfaSettingsType;

  /**
   * <p>The time-based one-time password software token MFA settings.</p>
   */
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;

  /**
   * <p>The user pool username or alias.</p>
   */
  Username: string | undefined;

  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;
}

export interface AdminSetUserMFAPreferenceResponse {}

export interface AdminSetUserPasswordRequest {
  /**
   * <p>The user pool ID for the user pool where you want to set the user's password.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user whose password you want to set.</p>
   */
  Username: string | undefined;

  /**
   * <p>The password for the user.</p>
   */
  Password: string | undefined;

  /**
   * <p>
   *             <code>True</code> if the password is permanent, <code>False</code> if it is
   *             temporary.</p>
   */
  Permanent?: boolean;
}

export interface AdminSetUserPasswordResponse {}

/**
 * <p>You can use this parameter to set an MFA configuration that uses the SMS delivery
 *             medium.</p>
 */
export interface AdminSetUserSettingsRequest {
  /**
   * <p>The ID of the user pool that contains the user whose options you're setting.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user whose options you're setting.</p>
   */
  Username: string | undefined;

  /**
   * <p>You can use this parameter only to set an SMS configuration that uses SMS for
   *             delivery.</p>
   */
  MFAOptions: MFAOptionType[] | undefined;
}

/**
 * <p>Represents the response from the server to set user settings as an
 *             administrator.</p>
 */
export interface AdminSetUserSettingsResponse {}

export interface AdminUpdateAuthEventFeedbackRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user pool username.</p>
   */
  Username: string | undefined;

  /**
   * <p>The authentication event ID.</p>
   */
  EventId: string | undefined;

  /**
   * <p>The authentication event feedback value.</p>
   */
  FeedbackValue: FeedbackValueType | string | undefined;
}

export interface AdminUpdateAuthEventFeedbackResponse {}

export enum DeviceRememberedStatusType {
  NOT_REMEMBERED = "not_remembered",
  REMEMBERED = "remembered",
}

/**
 * <p>The request to update the device status, as an administrator.</p>
 */
export interface AdminUpdateDeviceStatusRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name.</p>
   */
  Username: string | undefined;

  /**
   * <p>The device key.</p>
   */
  DeviceKey: string | undefined;

  /**
   * <p>The status indicating whether a device has been remembered or not.</p>
   */
  DeviceRememberedStatus?: DeviceRememberedStatusType | string;
}

/**
 * <p>The status response to the request to update the device, as an administrator.</p>
 */
export interface AdminUpdateDeviceStatusResponse {}

/**
 * <p>Represents the request to update the user's attributes as an administrator.</p>
 */
export interface AdminUpdateUserAttributesRequest {
  /**
   * <p>The user pool ID for the user pool where you want to update user attributes.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user for whom you want to update user attributes.</p>
   */
  Username: string | undefined;

  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   *         <p>If your user pool requires verification before Amazon Cognito updates an attribute value that
   *             you specify in this request, Amazon Cognito doesn’t immediately update the value of that
   *             attribute. After your user receives and responds to a verification message to verify the
   *             new value, Amazon Cognito updates the attribute value. Your user can sign in and receive messages
   *             with the original attribute value until they verify the new value.</p>
   *         <p>To update the value of an attribute that requires verification in the same API
   *             request, include the <code>email_verified</code> or <code>phone_number_verified</code>
   *             attribute, with a value of <code>true</code>. If you set the <code>email_verified</code>
   *             or <code>phone_number_verified</code> value for an <code>email</code> or
   *                 <code>phone_number</code> attribute that requires verification to <code>true</code>,
   *             Amazon Cognito doesn’t send a verification message to your user.</p>
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the AdminUpdateUserAttributes API action, Amazon Cognito invokes the
   *             function that is assigned to the <i>custom message</i> trigger. When Amazon Cognito
   *             invokes this function, it passes a JSON payload, which the function receives as input.
   *             This payload contains a <code>clientMetadata</code> attribute, which provides the data
   *             that you assigned to the ClientMetadata parameter in your AdminUpdateUserAttributes
   *             request. In your function code in Lambda, you can process the
   *                 <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>Represents the response from the server for the request to update user attributes as
 *             an administrator.</p>
 */
export interface AdminUpdateUserAttributesResponse {}

/**
 * <p>The request to sign out of all devices, as an administrator.</p>
 */
export interface AdminUserGlobalSignOutRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name.</p>
   */
  Username: string | undefined;
}

/**
 * <p>The global sign-out response, as an administrator.</p>
 */
export interface AdminUserGlobalSignOutResponse {}

export enum AdvancedSecurityModeType {
  AUDIT = "AUDIT",
  ENFORCED = "ENFORCED",
  OFF = "OFF",
}

export enum AliasAttributeType {
  EMAIL = "email",
  PHONE_NUMBER = "phone_number",
  PREFERRED_USERNAME = "preferred_username",
}

/**
 * <p>The Amazon Pinpoint analytics configuration necessary to collect metrics for a user
 *             pool.</p>
 *         <note>
 *             <p>In Regions where Amazon Pinpointisn't available, user pools only support sending events to
 *                 Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user pools
 *                 support sending events to Amazon Pinpoint projects within that same Region.</p>
 *         </note>
 */
export interface AnalyticsConfigurationType {
  /**
   * <p>The application ID for an Amazon Pinpoint application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Pinpoint project. You can use the Amazon Pinpoint project
   *             to integrate with the chosen user pool Client. Amazon Cognito publishes events to the Amazon Pinpoint
   *             project that the app ARN declares.</p>
   */
  ApplicationArn?: string;

  /**
   * <p>The ARN of an Identity and Access Management role that authorizes Amazon Cognito to publish events to Amazon Pinpoint
   *             analytics.</p>
   */
  RoleArn?: string;

  /**
   * <p>The external ID.</p>
   */
  ExternalId?: string;

  /**
   * <p>If <code>UserDataShared</code> is <code>true</code>, Amazon Cognito includes user data in the
   *             events that it publishes to Amazon Pinpoint analytics.</p>
   */
  UserDataShared?: boolean;
}

export interface AssociateSoftwareTokenRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose software token you want to
   *             generate.</p>
   */
  AccessToken?: string;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. This allows authentication of the user as part of the MFA setup process.</p>
   */
  Session?: string;
}

export interface AssociateSoftwareTokenResponse {
  /**
   * <p>A unique generated shared secret code that is used in the
   *             TOTP algorithm to generate a one-time code.</p>
   */
  SecretCode?: string;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. This allows authentication of the user as part of the MFA setup process.</p>
   */
  Session?: string;
}

/**
 * <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * <p>This exception is thrown when WAF doesn't allow your request based on a web ACL that's associated with your user pool.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

export enum VerifiedAttributeType {
  EMAIL = "email",
  PHONE_NUMBER = "phone_number",
}

/**
 * <p>Represents the request to change a user password.</p>
 */
export interface ChangePasswordRequest {
  /**
   * <p>The old password.</p>
   */
  PreviousPassword: string | undefined;

  /**
   * <p>The new password.</p>
   */
  ProposedPassword: string | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose password you want to
   *             change.</p>
   */
  AccessToken: string | undefined;
}

/**
 * <p>The response from the server to the change password request.</p>
 */
export interface ChangePasswordResponse {}

/**
 * <p>The device verifier against which it is authenticated.</p>
 */
export interface DeviceSecretVerifierConfigType {
  /**
   * <p>The password verifier.</p>
   */
  PasswordVerifier?: string;

  /**
   * <p>The <a href="https://en.wikipedia.org/wiki/Salt_(cryptography)">salt</a>
   *          </p>
   */
  Salt?: string;
}

/**
 * <p>Confirms the device request.</p>
 */
export interface ConfirmDeviceRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose device you want to
   *             confirm.</p>
   */
  AccessToken: string | undefined;

  /**
   * <p>The device key.</p>
   */
  DeviceKey: string | undefined;

  /**
   * <p>The configuration of the device secret verifier.</p>
   */
  DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType;

  /**
   * <p>The device name.</p>
   */
  DeviceName?: string;
}

/**
 * <p>Confirms the device response.</p>
 */
export interface ConfirmDeviceResponse {
  /**
   * <p>Indicates whether the user confirmation must confirm the device response.</p>
   */
  UserConfirmationNecessary?: boolean;
}

/**
 * <p>Contextual data, such as the user's device fingerprint, IP address, or location, used
 *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
 *         security.</p>
 */
export interface UserContextDataType {
  /**
   * <p>The source IP address of your user's device.</p>
   */
  IpAddress?: string;

  /**
   * <p>Encoded device-fingerprint details that your app collected with the Amazon Cognito
   *             context data collection library. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint">Adding user device and session data to API requests</a>.</p>
   */
  EncodedData?: string;
}

/**
 * <p>The request representing the confirmation for a password reset.</p>
 */
export interface ConfirmForgotPasswordRequest {
  /**
   * <p>The app client ID of the app associated with the user pool.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message.</p>
   */
  SecretHash?: string;

  /**
   * <p>The user name of the user for whom you want to enter a code to retrieve a forgotten
   *             password.</p>
   */
  Username: string | undefined;

  /**
   * <p>The confirmation code from your user's request to reset their password. For
   *             more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html">ForgotPassword</a>.</p>
   */
  ConfirmationCode: string | undefined;

  /**
   * <p>The new password that your user wants to set.</p>
   */
  Password: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for
   *                 <code>ConfirmForgotPassword</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the ConfirmForgotPassword API action, Amazon Cognito invokes the function that is
   *             assigned to the <i>post confirmation</i> trigger. When Amazon Cognito invokes this
   *             function, it passes a JSON payload, which the function receives as input. This payload
   *             contains a <code>clientMetadata</code> attribute, which provides the data that you
   *             assigned to the ClientMetadata parameter in your ConfirmForgotPassword request. In your
   *             function code in Lambda, you can process the <code>clientMetadata</code> value to
   *             enhance your workflow for your specific needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>The response from the server that results from a user's request to retrieve a
 *             forgotten password.</p>
 */
export interface ConfirmForgotPasswordResponse {}

/**
 * <p>Represents the request to confirm registration of a user.</p>
 */
export interface ConfirmSignUpRequest {
  /**
   * <p>The ID of the app client associated with the user pool.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message.</p>
   */
  SecretHash?: string;

  /**
   * <p>The user name of the user whose registration you want to confirm.</p>
   */
  Username: string | undefined;

  /**
   * <p>The confirmation code sent by a user's request to confirm registration.</p>
   */
  ConfirmationCode: string | undefined;

  /**
   * <p>Boolean to be specified to force user confirmation irrespective of existing alias. By
   *             default set to <code>False</code>. If this parameter is set to <code>True</code> and the
   *             phone number/email used for sign up confirmation already exists as an alias with a
   *             different user, the API call will migrate the alias from the previous user to the newly
   *             created user being confirmed. If set to <code>False</code>, the API will throw an
   *                 <b>AliasExistsException</b> error.</p>
   */
  ForceAliasCreation?: boolean;

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>ConfirmSignUp</code>
   *             calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the ConfirmSignUp API action, Amazon Cognito invokes the function that is
   *             assigned to the <i>post confirmation</i> trigger. When Amazon Cognito invokes this
   *             function, it passes a JSON payload, which the function receives as input. This payload
   *             contains a <code>clientMetadata</code> attribute, which provides the data that you
   *             assigned to the ClientMetadata parameter in your ConfirmSignUp request. In your function
   *             code in Lambda, you can process the <code>clientMetadata</code> value to
   *             enhance your workflow for your specific needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>Represents the response from the server for the registration confirmation.</p>
 */
export interface ConfirmSignUpResponse {}

export interface CreateGroupRequest {
  /**
   * <p>The name of the group. Must be unique.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>A string containing the description of the group.</p>
   */
  Description?: string;

  /**
   * <p>The role Amazon Resource Name (ARN) for the group.</p>
   */
  RoleArn?: string;

  /**
   * <p>A non-negative integer value that specifies the precedence of this group relative to
   *             the other groups that a user can belong to in the user pool. Zero is the highest
   *             precedence value. Groups with lower <code>Precedence</code> values take precedence over
   *             groups with higher or null <code>Precedence</code> values. If a user belongs to two or
   *             more groups, it is the group with the lowest precedence value whose role ARN is given in
   *             the user's tokens for the <code>cognito:roles</code> and
   *                 <code>cognito:preferred_role</code> claims.</p>
   *         <p>Two groups can have the same <code>Precedence</code> value. If this happens, neither
   *             group takes precedence over the other. If two groups with the same
   *                 <code>Precedence</code> have the same role ARN, that role is used in the
   *                 <code>cognito:preferred_role</code> claim in tokens for users in each group. If the
   *             two groups have different role ARNs, the <code>cognito:preferred_role</code> claim isn't
   *             set in users' tokens.</p>
   *         <p>The default <code>Precedence</code> value is null. The maximum <code>Precedence</code>
   *             value is <code>2^31-1</code>.</p>
   */
  Precedence?: number;
}

export interface CreateGroupResponse {
  /**
   * <p>The group object for the group.</p>
   */
  Group?: GroupType;
}

/**
 * <p>This exception is thrown when Amazon Cognito encounters a group that already exists in the user
 *             pool.</p>
 */
export class GroupExistsException extends __BaseException {
  readonly name: "GroupExistsException" = "GroupExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GroupExistsException, __BaseException>) {
    super({
      name: "GroupExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, GroupExistsException.prototype);
  }
}

export enum IdentityProviderTypeType {
  Facebook = "Facebook",
  Google = "Google",
  LoginWithAmazon = "LoginWithAmazon",
  OIDC = "OIDC",
  SAML = "SAML",
  SignInWithApple = "SignInWithApple",
}

export interface CreateIdentityProviderRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The IdP name.</p>
   */
  ProviderName: string | undefined;

  /**
   * <p>The IdP type.</p>
   */
  ProviderType: IdentityProviderTypeType | string | undefined;

  /**
   * <p>The IdP details. The following list describes the provider detail keys for each IdP
   *             type.</p>
   *         <ul>
   *             <li>
   *                 <p>For Google and Login with Amazon:</p>
   *                 <ul>
   *                   <li>
   *                         <p>client_id</p>
   *                     </li>
   *                   <li>
   *                         <p>client_secret</p>
   *                     </li>
   *                   <li>
   *                         <p>authorize_scopes</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For Facebook:</p>
   *                 <ul>
   *                   <li>
   *                         <p>client_id</p>
   *                     </li>
   *                   <li>
   *                         <p>client_secret</p>
   *                     </li>
   *                   <li>
   *                         <p>authorize_scopes</p>
   *                     </li>
   *                   <li>
   *                         <p>api_version</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For Sign in with Apple:</p>
   *                 <ul>
   *                   <li>
   *                         <p>client_id</p>
   *                     </li>
   *                   <li>
   *                         <p>team_id</p>
   *                     </li>
   *                   <li>
   *                         <p>key_id</p>
   *                     </li>
   *                   <li>
   *                         <p>private_key</p>
   *                     </li>
   *                   <li>
   *                         <p>authorize_scopes</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For OpenID Connect (OIDC) providers:</p>
   *                 <ul>
   *                   <li>
   *                         <p>client_id</p>
   *                     </li>
   *                   <li>
   *                         <p>client_secret</p>
   *                     </li>
   *                   <li>
   *                         <p>attributes_request_method</p>
   *                     </li>
   *                   <li>
   *                         <p>oidc_issuer</p>
   *                     </li>
   *                   <li>
   *                         <p>authorize_scopes</p>
   *                     </li>
   *                   <li>
   *                         <p>The following keys are only present if Amazon Cognito didn't discover them at
   *                             the <code>oidc_issuer</code> URL.</p>
   *                         <ul>
   *                         <li>
   *                                 <p>authorize_url </p>
   *                             </li>
   *                         <li>
   *                                 <p>token_url </p>
   *                             </li>
   *                         <li>
   *                                 <p>attributes_url </p>
   *                             </li>
   *                         <li>
   *                                 <p>jwks_uri </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Amazon Cognito sets the value of the following keys automatically. They are
   *                             read-only.</p>
   *                         <ul>
   *                         <li>
   *                                 <p>attributes_url_add_attributes </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For SAML providers:</p>
   *                 <ul>
   *                   <li>
   *                         <p>MetadataFile or MetadataURL</p>
   *                     </li>
   *                   <li>
   *                         <p>IDPSignout <i>optional</i>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  ProviderDetails: Record<string, string> | undefined;

  /**
   * <p>A mapping of IdP attributes to standard and custom user pool attributes.</p>
   */
  AttributeMapping?: Record<string, string>;

  /**
   * <p>A list of IdP identifiers.</p>
   */
  IdpIdentifiers?: string[];
}

/**
 * <p>A container for information about an IdP.</p>
 */
export interface IdentityProviderType {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The IdP name.</p>
   */
  ProviderName?: string;

  /**
   * <p>The IdP type.</p>
   */
  ProviderType?: IdentityProviderTypeType | string;

  /**
   * <p>The IdP details. The following list describes the provider detail keys for each IdP
   *             type.</p>
   *         <ul>
   *             <li>
   *                 <p>For Google and Login with Amazon:</p>
   *                 <ul>
   *                   <li>
   *                         <p>client_id</p>
   *                     </li>
   *                   <li>
   *                         <p>client_secret</p>
   *                     </li>
   *                   <li>
   *                         <p>authorize_scopes</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For Facebook:</p>
   *                 <ul>
   *                   <li>
   *                         <p>client_id</p>
   *                     </li>
   *                   <li>
   *                         <p>client_secret</p>
   *                     </li>
   *                   <li>
   *                         <p>authorize_scopes</p>
   *                     </li>
   *                   <li>
   *                         <p>api_version</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For Sign in with Apple:</p>
   *                 <ul>
   *                   <li>
   *                         <p>client_id</p>
   *                     </li>
   *                   <li>
   *                         <p>team_id</p>
   *                     </li>
   *                   <li>
   *                         <p>key_id</p>
   *                     </li>
   *                   <li>
   *                         <p>private_key</p>
   *                         <p>
   *                         <i>You can submit a private_key when you add or update an IdP.
   *                                 Describe operations don't return the private key.</i>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>authorize_scopes</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For OIDC providers:</p>
   *                 <ul>
   *                   <li>
   *                         <p>client_id</p>
   *                     </li>
   *                   <li>
   *                         <p>client_secret</p>
   *                     </li>
   *                   <li>
   *                         <p>attributes_request_method</p>
   *                     </li>
   *                   <li>
   *                         <p>oidc_issuer</p>
   *                     </li>
   *                   <li>
   *                         <p>authorize_scopes</p>
   *                     </li>
   *                   <li>
   *                         <p>The following keys are only present if Amazon Cognito didn't discover them at
   *                             the <code>oidc_issuer</code> URL.</p>
   *                         <ul>
   *                         <li>
   *                                 <p>authorize_url </p>
   *                             </li>
   *                         <li>
   *                                 <p>token_url </p>
   *                             </li>
   *                         <li>
   *                                 <p>attributes_url </p>
   *                             </li>
   *                         <li>
   *                                 <p>jwks_uri </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                   <li>
   *                         <p>Amazon Cognito sets the value of the following keys automatically. They are
   *                             read-only.</p>
   *                         <ul>
   *                         <li>
   *                                 <p>attributes_url_add_attributes </p>
   *                             </li>
   *                      </ul>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For SAML providers:</p>
   *                 <ul>
   *                   <li>
   *                         <p>MetadataFile or MetadataURL</p>
   *                     </li>
   *                   <li>
   *                         <p>IDPSignout <i>optional</i>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  ProviderDetails?: Record<string, string>;

  /**
   * <p>A mapping of IdP attributes to standard and custom user pool attributes.</p>
   */
  AttributeMapping?: Record<string, string>;

  /**
   * <p>A list of IdP identifiers.</p>
   */
  IdpIdentifiers?: string[];

  /**
   * <p>The date the IdP was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the IdP was created.</p>
   */
  CreationDate?: Date;
}

export interface CreateIdentityProviderResponse {
  /**
   * <p>The newly created IdP object.</p>
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * <p>This exception is thrown when the provider is already supported by the user
 *             pool.</p>
 */
export class DuplicateProviderException extends __BaseException {
  readonly name: "DuplicateProviderException" = "DuplicateProviderException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateProviderException, __BaseException>) {
    super({
      name: "DuplicateProviderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateProviderException.prototype);
  }
}

/**
 * <p>A resource server scope.</p>
 */
export interface ResourceServerScopeType {
  /**
   * <p>The name of the scope.</p>
   */
  ScopeName: string | undefined;

  /**
   * <p>A description of the scope.</p>
   */
  ScopeDescription: string | undefined;
}

export interface CreateResourceServerRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>A unique resource server identifier for the resource server. This could be an HTTPS
   *             endpoint where the resource server is located, such as
   *                 <code>https://my-weather-api.example.com</code>.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>A friendly name for the resource server.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of scopes. Each scope is a key-value map with the keys <code>name</code> and
   *                 <code>description</code>.</p>
   */
  Scopes?: ResourceServerScopeType[];
}

/**
 * <p>A container for information about a resource server for a user pool.</p>
 */
export interface ResourceServerType {
  /**
   * <p>The user pool ID for the user pool that hosts the resource server.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The identifier for the resource server.</p>
   */
  Identifier?: string;

  /**
   * <p>The name of the resource server.</p>
   */
  Name?: string;

  /**
   * <p>A list of scopes that are defined for the resource server.</p>
   */
  Scopes?: ResourceServerScopeType[];
}

export interface CreateResourceServerResponse {
  /**
   * <p>The newly created resource server.</p>
   */
  ResourceServer: ResourceServerType | undefined;
}

/**
 * <p>Represents the request to create the user import job.</p>
 */
export interface CreateUserImportJobRequest {
  /**
   * <p>The job name for the user import job.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The role ARN for the Amazon CloudWatch Logs Logging role for the user import job.</p>
   */
  CloudWatchLogsRoleArn: string | undefined;
}

export enum UserImportJobStatusType {
  Created = "Created",
  Expired = "Expired",
  Failed = "Failed",
  InProgress = "InProgress",
  Pending = "Pending",
  Stopped = "Stopped",
  Stopping = "Stopping",
  Succeeded = "Succeeded",
}

/**
 * <p>The user import job type.</p>
 */
export interface UserImportJobType {
  /**
   * <p>The job name for the user import job.</p>
   */
  JobName?: string;

  /**
   * <p>The job ID for the user import job.</p>
   */
  JobId?: string;

  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The pre-signed URL to be used to upload the <code>.csv</code> file.</p>
   */
  PreSignedUrl?: string;

  /**
   * <p>The date the user import job was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The date when the user import job was started.</p>
   */
  StartDate?: Date;

  /**
   * <p>The date when the user import job was completed.</p>
   */
  CompletionDate?: Date;

  /**
   * <p>The status of the user import job. One of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Created</code> - The job was created but not started.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Pending</code> - A transition state. You have started the job, but it
   *                     has not begun importing users yet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InProgress</code> - The job has started, and users are being
   *                     imported.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopping</code> - You have stopped the job, but the job has not stopped
   *                     importing users yet.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Stopped</code> - You have stopped the job, and the job has stopped
   *                     importing users.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Succeeded</code> - The job has completed successfully.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Failed</code> - The job has stopped due to an error.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Expired</code> - You created a job, but did not start the job within
   *                     24-48 hours. All data associated with the job was deleted, and the job can't be
   *                     started.</p>
   *             </li>
   *          </ul>
   */
  Status?: UserImportJobStatusType | string;

  /**
   * <p>The role Amazon Resource Name (ARN) for the Amazon CloudWatch Logging role for the user import
   *             job. For more information, see "Creating the CloudWatch Logs IAM Role" in the Amazon Cognito Developer
   *             Guide.</p>
   */
  CloudWatchLogsRoleArn?: string;

  /**
   * <p>The number of users that were successfully imported.</p>
   */
  ImportedUsers?: number;

  /**
   * <p>The number of users that were skipped.</p>
   */
  SkippedUsers?: number;

  /**
   * <p>The number of users that couldn't be imported.</p>
   */
  FailedUsers?: number;

  /**
   * <p>The message returned when the user import job is completed.</p>
   */
  CompletionMessage?: string;
}

/**
 * <p>Represents the response from the server to the request to create the user import
 *             job.</p>
 */
export interface CreateUserImportJobResponse {
  /**
   * <p>The job object that represents the user import job.</p>
   */
  UserImportJob?: UserImportJobType;
}

export enum DeletionProtectionType {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
 * <p>The device-remembering configuration for a user pool. A <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">
 *                 DescribeUserPool</a> request returns a null value for this object when the user
 *             pool isn't configured to remember devices. When device remembering is active, you can
 *             remember a user's device with a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html">ConfirmDevice</a> API request. Additionally. when the property
 *                 <code>DeviceOnlyRememberedOnUserPrompt</code> is <code>true</code>, you must follow
 *                 <code>ConfirmDevice</code> with an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html">UpdateDeviceStatus</a> API request that sets the user's device to
 *                 <code>remembered</code> or <code>not_remembered</code>.</p>
 *         <p>To sign in with a remembered device, include <code>DEVICE_KEY</code> in the
 *             authentication parameters in your user's <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">
 *                 InitiateAuth</a> request. If your app doesn't include a <code>DEVICE_KEY</code>
 *             parameter, the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html#API_InitiateAuth_ResponseSyntax">response</a> from Amazon Cognito includes newly-generated <code>DEVICE_KEY</code> and
 *                 <code>DEVICE_GROUP_KEY</code> values under <code>NewDeviceMetadata</code>. Store
 *             these values to use in future device-authentication requests.</p>
 *          <note>
 *             <p>When you provide a value for any property of <code>DeviceConfiguration</code>, you
 *                 activate the device remembering for the user pool.</p>
 *          </note>
 */
export interface DeviceConfigurationType {
  /**
   * <p>When true, a remembered device can sign in with device authentication instead of SMS
   *             and time-based one-time password (TOTP) factors for multi-factor authentication
   *             (MFA).</p>
   *          <note>
   *             <p>Whether or not <code>ChallengeRequiredOnNewDevice</code> is true, users who sign in
   *                 with devices that have not been confirmed or remembered must still provide a second
   *                 factor in a user pool that requires MFA.</p>
   *          </note>
   */
  ChallengeRequiredOnNewDevice?: boolean;

  /**
   * <p>When true, Amazon Cognito doesn't automatically remember a user's device when your app sends a
   *             <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html">
   *             ConfirmDevice</a> API request. In your app, create a prompt for
   *             your user to choose whether they want to remember their device. Return the user's choice
   *             in an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html">
   *             UpdateDeviceStatus</a> API request.</p>
   *         <p>When <code>DeviceOnlyRememberedOnUserPrompt</code> is <code>false</code>, Amazon
   *             Cognito immediately remembers devices that you register in a <code>ConfirmDevice</code>
   *             API request.</p>
   */
  DeviceOnlyRememberedOnUserPrompt?: boolean;
}

export enum EmailSendingAccountType {
  COGNITO_DEFAULT = "COGNITO_DEFAULT",
  DEVELOPER = "DEVELOPER",
}

/**
 * <p>The email configuration of your user pool. The email configuration type sets your
 *             preferred sending method, Amazon Web Services Region, and sender for messages from your user
 *             pool.</p>
 *         <note>
 *             <p>Amazon Cognito can send email messages with Amazon Simple Email Service resources in the Amazon Web Services Region where
 *                 you created your user pool, and in alternate Regions in some cases. For more
 *                 information on the supported Regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email settings for Amazon Cognito user pools</a>.</p>
 *         </note>
 */
export interface EmailConfigurationType {
  /**
   * <p>The ARN of a verified email address in Amazon SES. Amazon Cognito uses this email address in one of
   *             the following ways, depending on the value that you specify for the
   *                 <code>EmailSendingAccount</code> parameter:</p>
   *         <ul>
   *             <li>
   *                 <p>If you specify <code>COGNITO_DEFAULT</code>, Amazon Cognito uses this address as the
   *                     custom FROM address when it emails your users using its built-in email
   *                     account.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify <code>DEVELOPER</code>, Amazon Cognito emails your users with this
   *                     address by calling Amazon SES on your behalf.</p>
   *             </li>
   *          </ul>
   *         <p>The Region value of the <code>SourceArn</code> parameter must indicate a supported
   *             Amazon Web Services Region of your user pool. Typically, the Region in the <code>SourceArn</code> and
   *             the user pool Region are the same. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html#user-pool-email-developer-region-mapping">Amazon SES email configuration regions</a> in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito Developer
   *                 Guide</a>.</p>
   */
  SourceArn?: string;

  /**
   * <p>The destination to which the receiver of the email should reply.</p>
   */
  ReplyToEmailAddress?: string;

  /**
   * <p>Specifies whether Amazon Cognito uses its built-in functionality to send your users email
   *             messages, or uses your Amazon Simple Email Service email configuration. Specify one of the following
   *             values:</p>
   *         <dl>
   *             <dt>COGNITO_DEFAULT</dt>
   *             <dd>
   *                     <p>When Amazon Cognito emails your users, it uses its built-in email functionality.
   *                         When you use the default option, Amazon Cognito allows only a limited number of
   *                         emails each day for your user pool. For typical production environments, the
   *                         default email limit is less than the required delivery volume. To achieve a
   *                         higher delivery volume, specify DEVELOPER to use your Amazon SES email
   *                         configuration.</p>
   *                     <p>To look up the email delivery limit for the default option, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/limits.html">Limits</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *                     <p>The default FROM address is <code>no-reply@verificationemail.com</code>.
   *                         To customize the FROM address, provide the Amazon Resource Name (ARN) of an
   *                         Amazon SES verified email address for the <code>SourceArn</code>
   *                         parameter.</p>
   *
   *                 </dd>
   *             <dt>DEVELOPER</dt>
   *             <dd>
   *                     <p>When Amazon Cognito emails your users, it uses your Amazon SES configuration. Amazon Cognito
   *                         calls Amazon SES on your behalf to send email from your verified email address.
   *                         When you use this option, the email delivery limits are the same limits that
   *                         apply to your Amazon SES verified email address in your Amazon Web Services account.</p>
   *                     <p>If you use this option, provide the ARN of an Amazon SES verified email address
   *                         for the <code>SourceArn</code> parameter.</p>
   *                     <p>Before Amazon Cognito can email your users, it requires additional permissions to
   *                         call Amazon SES on your behalf. When you update your user pool with this option,
   *                         Amazon Cognito creates a <i>service-linked role</i>, which is a type of
   *                         role in your Amazon Web Services account. This role contains the permissions
   *                         that allow you to access Amazon SES and send email messages from your email address. For
   *                         more information about the service-linked role that Amazon Cognito creates, see
   *                             <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/using-service-linked-roles.html">Using Service-Linked Roles for Amazon Cognito</a> in the
   *                             <i>Amazon Cognito Developer Guide</i>.</p>
   *                 </dd>
   *          </dl>
   */
  EmailSendingAccount?: EmailSendingAccountType | string;

  /**
   * <p>Either the sender’s email address or the sender’s name with their email address. For
   *             example, <code>testuser@example.com</code> or <code>Test User
   *                 <testuser@example.com></code>. This address appears before the body of the
   *             email.</p>
   */
  From?: string;

  /**
   * <p>The set of configuration rules that can be applied to emails sent using Amazon Simple Email Service. A
   *             configuration set is applied to an email by including a reference to the configuration
   *             set in the headers of the email. Once applied, all of the rules in that configuration
   *             set are applied to the email. Configuration sets can be used to apply the following
   *             types of rules to emails: </p>
   *         <dl>
   *             <dt>Event publishing</dt>
   *             <dd>
   *                     <p>Amazon Simple Email Service can track the number of send, delivery, open, click, bounce, and
   *                         complaint events for each email sent. Use event publishing to send
   *                         information about these events to other Amazon Web Services services such as and
   *                         Amazon CloudWatch</p>
   *                 </dd>
   *             <dt>IP pool management</dt>
   *             <dd>
   *                     <p>When leasing dedicated IP addresses with Amazon Simple Email Service, you can create groups
   *                         of IP addresses, called dedicated IP pools. You can then associate the
   *                         dedicated IP pools with configuration sets.</p>
   *                 </dd>
   *          </dl>
   */
  ConfigurationSet?: string;
}

export enum CustomEmailSenderLambdaVersionType {
  V1_0 = "V1_0",
}

/**
 * <p>A custom email sender Lambda configuration type.</p>
 */
export interface CustomEmailLambdaVersionConfigType {
  /**
   * <p>Signature of the "request" attribute in the "event" information Amazon Cognito passes to your
   *             custom email Lambda function. The only supported value is <code>V1_0</code>.</p>
   */
  LambdaVersion: CustomEmailSenderLambdaVersionType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that Amazon Cognito activates to send
   *             email notifications to users.</p>
   */
  LambdaArn: string | undefined;
}

export enum CustomSMSSenderLambdaVersionType {
  V1_0 = "V1_0",
}

/**
 * <p>A custom SMS sender Lambda configuration type.</p>
 */
export interface CustomSMSLambdaVersionConfigType {
  /**
   * <p>Signature of the "request" attribute in the "event" information that Amazon Cognito passes to
   *             your custom SMS Lambda function. The only supported value is <code>V1_0</code>.</p>
   */
  LambdaVersion: CustomSMSSenderLambdaVersionType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function that Amazon Cognito activates to send SMS
   *             notifications to users.</p>
   */
  LambdaArn: string | undefined;
}

/**
 * <p>Specifies the configuration for Lambda triggers.</p>
 */
export interface LambdaConfigType {
  /**
   * <p>A pre-registration Lambda trigger.</p>
   */
  PreSignUp?: string;

  /**
   * <p>A custom Message Lambda trigger.</p>
   */
  CustomMessage?: string;

  /**
   * <p>A post-confirmation Lambda trigger.</p>
   */
  PostConfirmation?: string;

  /**
   * <p>A pre-authentication Lambda trigger.</p>
   */
  PreAuthentication?: string;

  /**
   * <p>A post-authentication Lambda trigger.</p>
   */
  PostAuthentication?: string;

  /**
   * <p>Defines the authentication challenge.</p>
   */
  DefineAuthChallenge?: string;

  /**
   * <p>Creates an authentication challenge.</p>
   */
  CreateAuthChallenge?: string;

  /**
   * <p>Verifies the authentication challenge response.</p>
   */
  VerifyAuthChallengeResponse?: string;

  /**
   * <p>A Lambda trigger that is invoked before token generation.</p>
   */
  PreTokenGeneration?: string;

  /**
   * <p>The user migration Lambda config type.</p>
   */
  UserMigration?: string;

  /**
   * <p>A custom SMS sender Lambda trigger.</p>
   */
  CustomSMSSender?: CustomSMSLambdaVersionConfigType;

  /**
   * <p>A custom email sender Lambda trigger.</p>
   */
  CustomEmailSender?: CustomEmailLambdaVersionConfigType;

  /**
   * <p>The Amazon Resource Name (ARN) of an <a href="/kms/latest/developerguide/concepts.html#master_keys">KMS key</a>. Amazon Cognito
   *             uses the key to encrypt codes and temporary passwords sent to
   *                 <code>CustomEmailSender</code> and <code>CustomSMSSender</code>.</p>
   */
  KMSKeyID?: string;
}

export enum UserPoolMfaType {
  OFF = "OFF",
  ON = "ON",
  OPTIONAL = "OPTIONAL",
}

/**
 * <p>The password policy type.</p>
 */
export interface PasswordPolicyType {
  /**
   * <p>The minimum length of the password in the policy that you have set. This value can't
   *             be less than 6.</p>
   */
  MinimumLength?: number;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to
   *             use at least one uppercase letter in their password.</p>
   */
  RequireUppercase?: boolean;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to
   *             use at least one lowercase letter in their password.</p>
   */
  RequireLowercase?: boolean;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to
   *             use at least one number in their password.</p>
   */
  RequireNumbers?: boolean;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to
   *             use at least one symbol in their password.</p>
   */
  RequireSymbols?: boolean;

  /**
   * <p>The number of days a temporary password is valid in the password policy. If the user
   *             doesn't sign in during this time, an administrator must reset their password.</p>
   *         <note>
   *             <p>When you set <code>TemporaryPasswordValidityDays</code> for a user pool, you can
   *                 no longer set a value for the legacy <code>UnusedAccountValidityDays</code>
   *                 parameter in that user pool.</p>
   *         </note>
   */
  TemporaryPasswordValidityDays?: number;
}

/**
 * <p>The policy associated with a user pool.</p>
 */
export interface UserPoolPolicyType {
  /**
   * <p>The password policy.</p>
   */
  PasswordPolicy?: PasswordPolicyType;
}

/**
 * <p>The SMS configuration type is the settings that your Amazon Cognito user pool must use to send
 *             an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS
 *             messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an
 *             Identity and Access Management (IAM) role in your Amazon Web Services account.</p>
 */
export interface SmsConfigurationType {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS caller. This is the ARN of the IAM role
   *             in your Amazon Web Services account that Amazon Cognito will use to send SMS messages. SMS
   *             messages are subject to a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html">spending limit</a>. </p>
   */
  SnsCallerArn: string | undefined;

  /**
   * <p>The external ID provides additional security for your IAM role. You can use an
   *                 <code>ExternalId</code> with the IAM role that you use with Amazon SNS to send SMS
   *             messages for your user pool. If you provide an <code>ExternalId</code>, your Amazon Cognito user
   *             pool includes it in the request to assume your IAM role. You can configure the role
   *             trust policy to require that Amazon Cognito, and any principal, provide the
   *                 <code>ExternalID</code>. If you use the Amazon Cognito Management Console to create a role
   *             for SMS multi-factor authentication (MFA), Amazon Cognito creates a role with the required
   *             permissions and a trust policy that demonstrates use of the
   *             <code>ExternalId</code>.</p>
   *         <p>For more information about the <code>ExternalId</code> of a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html">How to use an
   *                 external ID when granting access to your Amazon Web Services resources to a third
   *                 party</a>
   *          </p>
   */
  ExternalId?: string;

  /**
   * <p>The Amazon Web Services Region to use with Amazon SNS integration. You can choose the same Region as your
   *             user pool, or a supported <b>Legacy Amazon SNS alternate
   *             Region</b>. </p>
   *         <p>
   *             Amazon Cognito resources in the Asia Pacific (Seoul) Amazon Web Services Region must use your Amazon SNS
   *             configuration in the Asia Pacific (Tokyo) Region. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html">SMS message settings for Amazon Cognito user pools</a>.</p>
   */
  SnsRegion?: string;
}

/**
 * <p>The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>,
 * a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For
 * more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates">
 * Verifying updates to email addresses and phone numbers</a>.</p>
 */
export interface UserAttributeUpdateSettingsType {
  /**
   * <p>Requires that your user verifies their email address, phone number, or both before
   *             Amazon Cognito updates the value of that attribute. When you update a user attribute that has
   *             this option activated, Amazon Cognito sends a verification message to the new phone number or
   *             email address. Amazon Cognito doesn’t change the value of the attribute until your user responds
   *             to the verification message and confirms the new value.</p>
   *         <p>You can verify an updated email address or phone number with a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html">VerifyUserAttribute</a> API request. You can also call the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html">UpdateUserAttributes</a> or <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html">AdminUpdateUserAttributes</a> API and set <code>email_verified</code> or
   *                 <code>phone_number_verified</code> to true.</p>
   *         <p>When <code>AttributesRequireVerificationBeforeUpdate</code> is false, your user pool
   *             doesn't require that your users verify attribute changes before Amazon Cognito updates them. In a
   *             user pool where <code>AttributesRequireVerificationBeforeUpdate</code> is false, API
   *             operations that change attribute values can immediately update a user’s
   *                 <code>email</code> or <code>phone_number</code> attribute.</p>
   */
  AttributesRequireVerificationBeforeUpdate?: (VerifiedAttributeType | string)[];
}

export enum UsernameAttributeType {
  EMAIL = "email",
  PHONE_NUMBER = "phone_number",
}

/**
 * <p>The username configuration type. </p>
 */
export interface UsernameConfigurationType {
  /**
   * <p>Specifies whether user name case sensitivity will be applied for all users in the user
   *             pool through Amazon Cognito APIs.</p>
   *         <p>Valid values include:</p>
   *         <dl>
   *             <dt>True</dt>
   *             <dd>
   *                     <p>Enables case sensitivity for all username input. When this option is set
   *                         to <code>True</code>, users must sign in using the exact capitalization of
   *                         their given username, such as “UserName”. This is the default value.</p>
   *                 </dd>
   *             <dt>False</dt>
   *             <dd>
   *                     <p>Enables case insensitivity for all username input. For example, when this
   *                         option is set to <code>False</code>, users can sign in using either
   *                         "username" or "Username". This option also enables both
   *                             <code>preferred_username</code> and <code>email</code> alias to be case
   *                         insensitive, in addition to the <code>username</code> attribute.</p>
   *                 </dd>
   *          </dl>
   */
  CaseSensitive: boolean | undefined;
}

/**
 * <p>The user pool add-ons type.</p>
 */
export interface UserPoolAddOnsType {
  /**
   * <p>The advanced security mode.</p>
   */
  AdvancedSecurityMode: AdvancedSecurityModeType | string | undefined;
}

export enum DefaultEmailOptionType {
  CONFIRM_WITH_CODE = "CONFIRM_WITH_CODE",
  CONFIRM_WITH_LINK = "CONFIRM_WITH_LINK",
}

/**
 * <p>The template for verification messages.</p>
 */
export interface VerificationMessageTemplateType {
  /**
   * <p>The template for SMS messages that Amazon Cognito sends to your users.</p>
   */
  SmsMessage?: string;

  /**
   * <p>The template for email messages that Amazon Cognito sends to your users. You can set an
   *                 <code>EmailMessage</code> template only if the value of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email
   *             messages with your own Amazon SES configuration.</p>
   */
  EmailMessage?: string;

  /**
   * <p>The subject line for the email message template. You can set an
   *                 <code>EmailSubject</code> template only if the value of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email
   *             messages with your own Amazon SES configuration.</p>
   */
  EmailSubject?: string;

  /**
   * <p>The email message template for sending a confirmation link to the user. You can set an
   *                 <code>EmailMessageByLink</code> template only if the value of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email
   *             messages with your own Amazon SES configuration.</p>
   */
  EmailMessageByLink?: string;

  /**
   * <p>The subject line for the email message template for sending a confirmation link to the
   *             user. You can set an <code>EmailSubjectByLink</code> template only if the value of
   *                 <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email
   *             messages with your own Amazon SES configuration.</p>
   */
  EmailSubjectByLink?: string;

  /**
   * <p>The default email option.</p>
   */
  DefaultEmailOption?: DefaultEmailOptionType | string;
}

/**
 * <p>Represents the request to create a user pool.</p>
 */
export interface CreateUserPoolRequest {
  /**
   * <p>A string used to name the user pool.</p>
   */
  PoolName: string | undefined;

  /**
   * <p>The policies associated with the new user pool.</p>
   */
  Policies?: UserPoolPolicyType;

  /**
   * <p>When active, <code>DeletionProtection</code> prevents accidental deletion of your user
   *         pool. Before you can delete a user pool that you have protected against deletion, you
   *         must deactivate this feature.</p>
   *         <p>When you try to delete a protected user pool in a <code>DeleteUserPool</code> API request,
   *         Amazon Cognito returns an <code>InvalidParameterException</code> error. To delete a protected user pool,
   *         send a new <code>DeleteUserPool</code> request after you deactivate deletion protection in an
   *         <code>UpdateUserPool</code> API request.</p>
   */
  DeletionProtection?: DeletionProtectionType | string;

  /**
   * <p>The Lambda trigger configuration information for the new user pool.</p>
   *         <note>
   *             <p>In a push model, event sources (such as Amazon S3 and custom applications) need
   *                 permission to invoke a function. So you must make an extra call to add permission
   *                 for these event sources to invoke your Lambda function.</p>
   *             <p></p>
   *             <p>For more information on using the Lambda API to add permission, see<a href="https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html">
   *                     AddPermission </a>. </p>
   *             <p>For adding permission using the CLI, see<a href="https://docs.aws.amazon.com/cli/latest/reference/lambda/add-permission.html"> add-permission
   *                 </a>.</p>
   *         </note>
   */
  LambdaConfig?: LambdaConfigType;

  /**
   * <p>The attributes to be auto-verified. Possible values: <b>email</b>, <b>phone_number</b>.</p>
   */
  AutoVerifiedAttributes?: (VerifiedAttributeType | string)[];

  /**
   * <p>Attributes supported as an alias for this user pool. Possible values: <b>phone_number</b>, <b>email</b>, or
   *                 <b>preferred_username</b>.</p>
   */
  AliasAttributes?: (AliasAttributeType | string)[];

  /**
   * <p>Specifies whether a user can use an email address or phone number as a username when
   *             they sign up.</p>
   */
  UsernameAttributes?: (UsernameAttributeType | string)[];

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  SmsVerificationMessage?: string;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  EmailVerificationMessage?: string;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  EmailVerificationSubject?: string;

  /**
   * <p>The template for the verification message that the user sees when the app requests
   *             permission to access the user's information.</p>
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType;

  /**
   * <p>A string representing the SMS authentication message.</p>
   */
  SmsAuthenticationMessage?: string;

  /**
   * <p>Specifies MFA configuration details.</p>
   */
  MfaConfiguration?: UserPoolMfaType | string;

  /**
   * <p>The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>,
   * a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For
   * more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates">
   * Verifying updates to email addresses and phone numbers</a>.</p>
   */
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;

  /**
   * <p>The device-remembering configuration for a user pool. A null value indicates that you have deactivated device remembering in your user pool.</p>
   *         <note>
   *             <p>When you provide a value for any <code>DeviceConfiguration</code> field, you activate the Amazon Cognito device-remembering feature.</p>
   *         </note>
   */
  DeviceConfiguration?: DeviceConfigurationType;

  /**
   * <p>The email configuration of your user pool. The email configuration type sets your
   *             preferred sending method, Amazon Web Services Region, and sender for messages from your user
   *             pool.</p>
   */
  EmailConfiguration?: EmailConfigurationType;

  /**
   * <p>The SMS configuration with the settings that your Amazon Cognito user pool must use to send an
   *             SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages
   *             with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management
   *             (IAM) role in your Amazon Web Services account.</p>
   */
  SmsConfiguration?: SmsConfigurationType;

  /**
   * <p>The tag keys and values to assign to the user pool. A tag is a label that you can use
   *             to categorize and manage user pools in different ways, such as by purpose, owner,
   *             environment, or other criteria.</p>
   */
  UserPoolTags?: Record<string, string>;

  /**
   * <p>The configuration for <code>AdminCreateUser</code> requests.</p>
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType;

  /**
   * <p>An array of schema attributes for the new user pool. These attributes can be standard
   *             or custom attributes.</p>
   */
  Schema?: SchemaAttributeType[];

  /**
   * <p>Enables advanced security risk detection. Set the key
   *                 <code>AdvancedSecurityMode</code> to the value "AUDIT".</p>
   */
  UserPoolAddOns?: UserPoolAddOnsType;

  /**
   * <p>Case sensitivity on the username input for the selected sign-in option. For example,
   *             when case sensitivity is set to <code>False</code>, users can sign in using either
   *             "username" or "Username". This configuration is immutable once it has been set. For more
   *             information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UsernameConfigurationType.html">UsernameConfigurationType</a>.</p>
   */
  UsernameConfiguration?: UsernameConfigurationType;

  /**
   * <p>The available verified method a user can use to recover their password when they call
   *                 <code>ForgotPassword</code>. You can use this setting to define a preferred method
   *             when a user has more than one method available. With this setting, SMS doesn't qualify
   *             for a valid password recovery mechanism if the user also has SMS multi-factor
   *             authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy
   *             behavior to determine the recovery method where SMS is preferred through email.</p>
   */
  AccountRecoverySetting?: AccountRecoverySettingType;
}

export enum StatusType {
  Disabled = "Disabled",
  Enabled = "Enabled",
}

/**
 * <p>A container for information about the user pool.</p>
 */
export interface UserPoolType {
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
  Policies?: UserPoolPolicyType;

  /**
   * <p>When active, <code>DeletionProtection</code> prevents accidental deletion of your user
   *         pool. Before you can delete a user pool that you have protected against deletion, you
   *         must deactivate this feature.</p>
   *         <p>When you try to delete a protected user pool in a <code>DeleteUserPool</code> API request,
   *         Amazon Cognito returns an <code>InvalidParameterException</code> error. To delete a protected user pool,
   *         send a new <code>DeleteUserPool</code> request after you deactivate deletion protection in an
   *         <code>UpdateUserPool</code> API request.</p>
   */
  DeletionProtection?: DeletionProtectionType | string;

  /**
   * <p>The Lambda triggers associated with the user pool.</p>
   */
  LambdaConfig?: LambdaConfigType;

  /**
   * <p>The status of a user pool.</p>
   */
  Status?: StatusType | string;

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
  SchemaAttributes?: SchemaAttributeType[];

  /**
   * <p>The attributes that are auto-verified in a user pool.</p>
   */
  AutoVerifiedAttributes?: (VerifiedAttributeType | string)[];

  /**
   * <p>The attributes that are aliased in a user pool.</p>
   */
  AliasAttributes?: (AliasAttributeType | string)[];

  /**
   * <p>Specifies whether a user can use an email address or phone number as a username when
   *             they sign up.</p>
   */
  UsernameAttributes?: (UsernameAttributeType | string)[];

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  SmsVerificationMessage?: string;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  EmailVerificationMessage?: string;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   */
  EmailVerificationSubject?: string;

  /**
   * <p>The template for verification messages.</p>
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType;

  /**
   * <p>The contents of the SMS authentication message.</p>
   */
  SmsAuthenticationMessage?: string;

  /**
   * <p>The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>,
   * a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For
   * more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates">
   * Verifying updates to email addresses and phone numbers</a>.</p>
   */
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType;

  /**
   * <p>Can be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>OFF</code> - MFA tokens aren't required and can't be specified during user
   *                     registration.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ON</code> - MFA tokens are required for all user registrations. You can
   *                     only specify required when you're initially creating a user pool.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>OPTIONAL</code> - Users have the option when registering to create an MFA
   *                     token.</p>
   *             </li>
   *          </ul>
   */
  MfaConfiguration?: UserPoolMfaType | string;

  /**
   * <p>The device-remembering configuration for a user pool. A null value indicates that you have deactivated device remembering in your user pool.</p>
   *         <note>
   *             <p>When you provide a value for any <code>DeviceConfiguration</code> field, you activate the Amazon Cognito device-remembering feature.</p>
   *         </note>
   */
  DeviceConfiguration?: DeviceConfigurationType;

  /**
   * <p>A number estimating the size of the user pool.</p>
   */
  EstimatedNumberOfUsers?: number;

  /**
   * <p>The email configuration of your user pool. The email configuration type sets your
   *             preferred sending method, Amazon Web Services Region, and sender for messages tfrom your user
   *             pool.</p>
   */
  EmailConfiguration?: EmailConfigurationType;

  /**
   * <p>The SMS configuration with the settings that your Amazon Cognito user pool must use to send an
   *             SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages
   *             with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management
   *             (IAM) role in your Amazon Web Services account.</p>
   */
  SmsConfiguration?: SmsConfigurationType;

  /**
   * <p>The tags that are assigned to the user pool. A tag is a label that you can apply to
   *             user pools to categorize and manage them in different ways, such as by purpose, owner,
   *             environment, or other criteria.</p>
   */
  UserPoolTags?: Record<string, string>;

  /**
   * <p>The reason why the SMS configuration can't send the messages to your users.</p>
   *         <p>This message might include comma-separated values to describe why your SMS
   *             configuration can't send messages to user pool end users.</p>
   *         <dl>
   *             <dt>InvalidSmsRoleAccessPolicyException</dt>
   *             <dd>
   *                     <p>The Identity and Access Management role that Amazon Cognito uses to send SMS messages isn't properly
   *                         configured. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SmsConfigurationType.html">SmsConfigurationType</a>.</p>
   *                 </dd>
   *             <dt>SNSSandbox</dt>
   *             <dd>
   *                     <p>The Amazon Web Services account is in the SNS SMS Sandbox and messages will
   *                         only reach verified end users. This parameter won’t get populated with
   *                         SNSSandbox if the IAM user creating the user pool doesn’t have SNS
   *                         permissions. To learn how to move your Amazon Web Services account out of the
   *                         sandbox, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox-moving-to-production.html">Moving out
   *                             of the SMS sandbox</a>.</p>
   *                 </dd>
   *          </dl>
   */
  SmsConfigurationFailure?: string;

  /**
   * <p>Deprecated. Review error codes from API requests with
   *                 <code>EventSource:cognito-idp.amazonaws.com</code> in CloudTrail for
   *             information about problems with user pool email configuration.</p>
   */
  EmailConfigurationFailure?: string;

  /**
   * <p>The domain prefix, if the user pool has a domain associated with it.</p>
   */
  Domain?: string;

  /**
   * <p>A custom domain name that you provide to Amazon Cognito. This parameter applies only if you use
   *             a custom domain to host the sign-up and sign-in pages for your application. An example
   *             of a custom domain name might be <code>auth.example.com</code>.</p>
   *         <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
   */
  CustomDomain?: string;

  /**
   * <p>The configuration for <code>AdminCreateUser</code> requests.</p>
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType;

  /**
   * <p>The user pool add-ons.</p>
   */
  UserPoolAddOns?: UserPoolAddOnsType;

  /**
   * <p>Case sensitivity of the username input for the selected sign-in option. For example,
   *             when case sensitivity is set to <code>False</code>, users can sign in using either
   *             "username" or "Username". This configuration is immutable once it has been set. For more
   *             information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UsernameConfigurationType.html">UsernameConfigurationType</a>.</p>
   */
  UsernameConfiguration?: UsernameConfigurationType;

  /**
   * <p>The Amazon Resource Name (ARN) for the user pool.</p>
   */
  Arn?: string;

  /**
   * <p>The available verified method a user can use to recover their password when they call
   *                 <code>ForgotPassword</code>. You can use this setting to define a preferred method
   *             when a user has more than one method available. With this setting, SMS doesn't qualify
   *             for a valid password recovery mechanism if the user also has SMS multi-factor
   *             authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy
   *             behavior to determine the recovery method where SMS is preferred through email.</p>
   */
  AccountRecoverySetting?: AccountRecoverySettingType;
}

/**
 * <p>Represents the response from the server for the request to create a user pool.</p>
 */
export interface CreateUserPoolResponse {
  /**
   * <p>A container for the user pool details.</p>
   */
  UserPool?: UserPoolType;
}

/**
 * <p>This exception is thrown when a user pool tag can't be set or updated.</p>
 */
export class UserPoolTaggingException extends __BaseException {
  readonly name: "UserPoolTaggingException" = "UserPoolTaggingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserPoolTaggingException, __BaseException>) {
    super({
      name: "UserPoolTaggingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserPoolTaggingException.prototype);
  }
}

export enum OAuthFlowType {
  client_credentials = "client_credentials",
  code = "code",
  implicit = "implicit",
}

export enum ExplicitAuthFlowsType {
  ADMIN_NO_SRP_AUTH = "ADMIN_NO_SRP_AUTH",
  ALLOW_ADMIN_USER_PASSWORD_AUTH = "ALLOW_ADMIN_USER_PASSWORD_AUTH",
  ALLOW_CUSTOM_AUTH = "ALLOW_CUSTOM_AUTH",
  ALLOW_REFRESH_TOKEN_AUTH = "ALLOW_REFRESH_TOKEN_AUTH",
  ALLOW_USER_PASSWORD_AUTH = "ALLOW_USER_PASSWORD_AUTH",
  ALLOW_USER_SRP_AUTH = "ALLOW_USER_SRP_AUTH",
  CUSTOM_AUTH_FLOW_ONLY = "CUSTOM_AUTH_FLOW_ONLY",
  USER_PASSWORD_AUTH = "USER_PASSWORD_AUTH",
}

export enum PreventUserExistenceErrorTypes {
  ENABLED = "ENABLED",
  LEGACY = "LEGACY",
}

export enum TimeUnitsType {
  DAYS = "days",
  HOURS = "hours",
  MINUTES = "minutes",
  SECONDS = "seconds",
}

/**
 * <p>The data type TokenValidityUnits specifies the time units you use when you set the
 *             duration of ID, access, and refresh tokens.</p>
 */
export interface TokenValidityUnitsType {
  /**
   * <p> A time unit of <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or
   *                 <code>days</code> for the value that you set in the <code>AccessTokenValidity</code>
   *             parameter. The default <code>AccessTokenValidity</code> time unit is hours.</p>
   */
  AccessToken?: TimeUnitsType | string;

  /**
   * <p>A time unit of <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or
   *                 <code>days</code> for the value that you set in the <code>IdTokenValidity</code>
   *             parameter. The default <code>IdTokenValidity</code> time unit is hours.</p>
   */
  IdToken?: TimeUnitsType | string;

  /**
   * <p>A time unit of <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or
   *                 <code>days</code> for the value that you set in the
   *                 <code>RefreshTokenValidity</code> parameter. The default
   *                 <code>RefreshTokenValidity</code> time unit is days.</p>
   */
  RefreshToken?: TimeUnitsType | string;
}

/**
 * <p>Represents the request to create a user pool client.</p>
 */
export interface CreateUserPoolClientRequest {
  /**
   * <p>The user pool ID for the user pool where you want to create a user pool client.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The client name for the user pool client you would like to create.</p>
   */
  ClientName: string | undefined;

  /**
   * <p>Boolean to specify whether you want to generate a secret for the user pool client
   *             being created.</p>
   */
  GenerateSecret?: boolean;

  /**
   * <p>The refresh token time limit. After this limit expires, your user can't use
   *         their refresh token. To specify the time unit for <code>RefreshTokenValidity</code> as
   *         <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   *         set a <code>TokenValidityUnits</code> value in your API request.</p>
   *         <p>For example, when you set <code>RefreshTokenValidity</code> as <code>10</code> and
   *         <code>TokenValidityUnits</code> as <code>days</code>, your user can refresh their session
   *         and retrieve new access and ID tokens for 10 days.</p>
   *         <p>The default time unit for <code>RefreshTokenValidity</code> in an API request is days.
   *         You can't set <code>RefreshTokenValidity</code> to 0. If you do, Amazon Cognito overrides the
   *         value with the default value of 30 days. <i>Valid range</i> is displayed below
   *         in seconds.</p>
   *         <p>If you don't specify otherwise in the configuration of your app client, your refresh
   *         tokens are valid for 30 days.</p>
   */
  RefreshTokenValidity?: number;

  /**
   * <p>The access token time limit. After this limit expires, your user can't use
   *         their access token. To specify the time unit for <code>AccessTokenValidity</code> as
   *         <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   *         set a <code>TokenValidityUnits</code> value in your API request.</p>
   *         <p>For example, when you set <code>AccessTokenValidity</code> to <code>10</code> and
   *         <code>TokenValidityUnits</code> to <code>hours</code>, your user can authorize access with
   *         their access token for 10 hours.</p>
   *         <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours.
   *         <i>Valid range</i> is displayed below in seconds.</p>
   *         <p>If you don't specify otherwise in the configuration of your app client, your access
   *         tokens are valid for one hour.</p>
   */
  AccessTokenValidity?: number;

  /**
   * <p>The ID token time limit. After this limit expires, your user can't use
   *         their ID token. To specify the time unit for <code>IdTokenValidity</code> as
   *         <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   *         set a <code>TokenValidityUnits</code> value in your API request.</p>
   *         <p>For example, when you set <code>IdTokenValidity</code> as <code>10</code> and
   *         <code>TokenValidityUnits</code> as <code>hours</code>, your user can authenticate their
   *         session with their ID token for 10 hours.</p>
   *         <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours.
   *         <i>Valid range</i> is displayed below in seconds.</p>
   *         <p>If you don't specify otherwise in the configuration of your app client, your ID
   *         tokens are valid for one hour.</p>
   */
  IdTokenValidity?: number;

  /**
   * <p>The units in which the validity times are represented. The default unit for
   *             RefreshToken is days, and default for ID and access tokens are hours.</p>
   */
  TokenValidityUnits?: TokenValidityUnitsType;

  /**
   * <p>The read attributes.</p>
   */
  ReadAttributes?: string[];

  /**
   * <p>The user pool attributes that the app client can write to.</p>
   *         <p>If your app client allows users to sign in through an IdP, this array must include all
   *             attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when
   *             users sign in to your application through an IdP. If your app client does not have write
   *             access to a mapped attribute, Amazon Cognito throws an error when it tries to update the
   *             attribute. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying IdP Attribute Mappings for Your user
   *             pool</a>.</p>
   */
  WriteAttributes?: string[];

  /**
   * <p>The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in
   * your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and
   * password, or a custom authentication process that you define with Lambda functions.</p>
   *          <note>
   *             <p>If you don't specify a value for <code>ExplicitAuthFlows</code>, your user client supports <code>ALLOW_REFRESH_TOKEN_AUTH</code>, <code>ALLOW_USER_SRP_AUTH</code>, and <code>ALLOW_CUSTOM_AUTH</code>.</p>
   *          </note>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW_ADMIN_USER_PASSWORD_AUTH</code>: Enable admin based user password
   *             authentication flow <code>ADMIN_USER_PASSWORD_AUTH</code>. This setting replaces
   *             the <code>ADMIN_NO_SRP_AUTH</code> setting. With this authentication flow, your app
   *             passes a user name and password to Amazon Cognito in the request, instead of using the Secure
   *             Remote Password (SRP) protocol to securely transmit the password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_CUSTOM_AUTH</code>: Enable Lambda trigger based
   *             authentication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_USER_PASSWORD_AUTH</code>: Enable user password-based
   *             authentication. In this flow, Amazon Cognito receives the password in the request instead
   *             of using the SRP protocol to verify passwords.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_USER_SRP_AUTH</code>: Enable SRP-based authentication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_REFRESH_TOKEN_AUTH</code>: Enable authflow to refresh
   *             tokens.</p>
   *             </li>
   *          </ul>
   *          <p>In some environments, you will see the values <code>ADMIN_NO_SRP_AUTH</code>, <code>CUSTOM_AUTH_FLOW_ONLY</code>, or <code>USER_PASSWORD_AUTH</code>.
   * You can't assign these legacy <code>ExplicitAuthFlows</code> values to user pool clients at the same time as values that begin with <code>ALLOW_</code>,
   * like <code>ALLOW_USER_SRP_AUTH</code>.</p>
   */
  ExplicitAuthFlows?: (ExplicitAuthFlowsType | string)[];

  /**
   * <p>A list of provider names for the identity providers (IdPs) that are supported on this
   *             client. The following are supported: <code>COGNITO</code>, <code>Facebook</code>,
   *             <code>Google</code>, <code>SignInWithApple</code>, and <code>LoginWithAmazon</code>. You can also specify the names
   *             that you configured for the SAML and OIDC IdPs in your user pool, for example
   *                 <code>MySAMLIdP</code> or <code>MyOIDCIdP</code>.</p>
   */
  SupportedIdentityProviders?: string[];

  /**
   * <p>A list of allowed redirect (callback) URLs for the IdPs.</p>
   *         <p>A redirect URI must:</p>
   *         <ul>
   *             <li>
   *                 <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                 <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                 <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *         <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *         <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes
   *             only.</p>
   *         <p>App callback URLs such as myapp://example are also supported.</p>
   */
  CallbackURLs?: string[];

  /**
   * <p>A list of allowed logout URLs for the IdPs.</p>
   */
  LogoutURLs?: string[];

  /**
   * <p>The default redirect URI. Must be in the <code>CallbackURLs</code> list.</p>
   *         <p>A redirect URI must:</p>
   *         <ul>
   *             <li>
   *                 <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                 <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                 <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *         <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *         <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes
   *             only.</p>
   *         <p>App callback URLs such as myapp://example are also supported.</p>
   */
  DefaultRedirectURI?: string;

  /**
   * <p>The allowed OAuth flows.</p>
   *         <dl>
   *             <dt>code</dt>
   *             <dd>
   *                     <p>Use a code grant flow, which provides an authorization code as the
   *                         response. This code can be exchanged for access tokens with the
   *                             <code>/oauth2/token</code> endpoint.</p>
   *                 </dd>
   *             <dt>implicit</dt>
   *             <dd>
   *                     <p>Issue the access token (and, optionally, ID token, based on scopes)
   *                         directly to your user.</p>
   *                 </dd>
   *             <dt>client_credentials</dt>
   *             <dd>
   *                     <p>Issue the access token from the <code>/oauth2/token</code> endpoint
   *                         directly to a non-person user using a combination of the client ID and
   *                         client secret.</p>
   *                 </dd>
   *          </dl>
   */
  AllowedOAuthFlows?: (OAuthFlowType | string)[];

  /**
   * <p>The allowed OAuth scopes. Possible values provided by OAuth are <code>phone</code>,
   *                 <code>email</code>, <code>openid</code>, and <code>profile</code>. Possible values
   *             provided by Amazon Web Services are <code>aws.cognito.signin.user.admin</code>. Custom
   *             scopes created in Resource Servers are also supported.</p>
   */
  AllowedOAuthScopes?: string[];

  /**
   * <p>Set to true if the client is allowed to follow the OAuth protocol when interacting
   *             with Amazon Cognito user pools.</p>
   */
  AllowedOAuthFlowsUserPoolClient?: boolean;

  /**
   * <p>The user pool analytics configuration for collecting metrics and sending them to your
   *             Amazon Pinpoint campaign.</p>
   *         <note>
   *             <p>In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools only support sending
   *                 events to Amazon Pinpoint projects in Amazon Web Services Region us-east-1. In Regions where Amazon Pinpoint is
   *                 available, user pools support sending events to Amazon Pinpoint projects within that same
   *                 Region.</p>
   *         </note>
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType;

  /**
   * <p>Errors and responses that you want Amazon Cognito APIs to return during authentication, account
   *             confirmation, and password recovery when the user doesn't exist in the user pool. When
   *             set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error
   *             indicating either the username or password was incorrect. Account confirmation and
   *             password recovery return a response indicating a code was sent to a simulated
   *             destination. When set to <code>LEGACY</code>, those APIs return a
   *                 <code>UserNotFoundException</code> exception if the user doesn't exist in the user
   *             pool.</p>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code> - This prevents user existence-related errors.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>LEGACY</code> - This represents the early behavior of Amazon Cognito where user
   *                     existence related errors aren't prevented.</p>
   *             </li>
   *          </ul>
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | string;

  /**
   * <p>Activates or deactivates token revocation. For more information about revoking tokens,
   *             see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
   *         <p>If you don't include this parameter, token revocation is automatically activated for
   *             the new user pool client.</p>
   */
  EnableTokenRevocation?: boolean;

  /**
   * <p>Activates the propagation of additional user context data. For more information about
   *             propagation of user context data, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html"> Adding advanced security to a user pool</a>. If you don’t include this
   *             parameter, you can't send device fingerprint information, including source IP address,
   *             to Amazon Cognito advanced security. You can only activate
   *             <code>EnablePropagateAdditionalUserContextData</code> in an app client that has a
   *             client secret.</p>
   */
  EnablePropagateAdditionalUserContextData?: boolean;

  /**
   * <p>Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration,
   * in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.</p>
   */
  AuthSessionValidity?: number;
}

/**
 * <p>Contains information about a user pool client.</p>
 */
export interface UserPoolClientType {
  /**
   * <p>The user pool ID for the user pool client.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The client name from the user pool request of the client type.</p>
   */
  ClientName?: string;

  /**
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId?: string;

  /**
   * <p>The client secret from the user pool request of the client type.</p>
   */
  ClientSecret?: string;

  /**
   * <p>The date the user pool client was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the user pool client was created.</p>
   */
  CreationDate?: Date;

  /**
   * <p>The refresh token time limit. After this limit expires, your user can't use
   *         their refresh token. To specify the time unit for <code>RefreshTokenValidity</code> as
   *         <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   *         set a <code>TokenValidityUnits</code> value in your API request.</p>
   *         <p>For example, when you set <code>RefreshTokenValidity</code> as <code>10</code> and
   *         <code>TokenValidityUnits</code> as <code>days</code>, your user can refresh their session
   *         and retrieve new access and ID tokens for 10 days.</p>
   *         <p>The default time unit for <code>RefreshTokenValidity</code> in an API request is days.
   *         You can't set <code>RefreshTokenValidity</code> to 0. If you do, Amazon Cognito overrides the
   *         value with the default value of 30 days. <i>Valid range</i> is displayed below
   *         in seconds.</p>
   *         <p>If you don't specify otherwise in the configuration of your app client, your refresh
   *         tokens are valid for 30 days.</p>
   */
  RefreshTokenValidity?: number;

  /**
   * <p>The access token time limit. After this limit expires, your user can't use
   *         their access token. To specify the time unit for <code>AccessTokenValidity</code> as
   *         <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   *         set a <code>TokenValidityUnits</code> value in your API request.</p>
   *         <p>For example, when you set <code>AccessTokenValidity</code> to <code>10</code> and
   *         <code>TokenValidityUnits</code> to <code>hours</code>, your user can authorize access with
   *         their access token for 10 hours.</p>
   *         <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours.
   *         <i>Valid range</i> is displayed below in seconds.</p>
   *         <p>If you don't specify otherwise in the configuration of your app client, your access
   *         tokens are valid for one hour.</p>
   */
  AccessTokenValidity?: number;

  /**
   * <p>The ID token time limit. After this limit expires, your user can't use
   *         their ID token. To specify the time unit for <code>IdTokenValidity</code> as
   *         <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   *         set a <code>TokenValidityUnits</code> value in your API request.</p>
   *         <p>For example, when you set <code>IdTokenValidity</code> as <code>10</code> and
   *         <code>TokenValidityUnits</code> as <code>hours</code>, your user can authenticate their
   *         session with their ID token for 10 hours.</p>
   *         <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours.
   *         <i>Valid range</i> is displayed below in seconds.</p>
   *         <p>If you don't specify otherwise in the configuration of your app client, your ID
   *         tokens are valid for one hour.</p>
   */
  IdTokenValidity?: number;

  /**
   * <p>The time units used to specify the token validity times of each token type: ID,
   *             access, and refresh.</p>
   */
  TokenValidityUnits?: TokenValidityUnitsType;

  /**
   * <p>The Read-only attributes.</p>
   */
  ReadAttributes?: string[];

  /**
   * <p>The writeable attributes.</p>
   */
  WriteAttributes?: string[];

  /**
   * <p>The authentication flows that you want your user pool client to support. For each app client in your user pool, you can sign in
   * your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and
   * password, or a custom authentication process that you define with Lambda functions.</p>
   *          <note>
   *             <p>If you don't specify a value for <code>ExplicitAuthFlows</code>, your user client supports <code>ALLOW_REFRESH_TOKEN_AUTH</code>, <code>ALLOW_USER_SRP_AUTH</code>, and <code>ALLOW_CUSTOM_AUTH</code>.</p>
   *          </note>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW_ADMIN_USER_PASSWORD_AUTH</code>: Enable admin based user password
   *             authentication flow <code>ADMIN_USER_PASSWORD_AUTH</code>. This setting replaces
   *             the <code>ADMIN_NO_SRP_AUTH</code> setting. With this authentication flow, your app
   *             passes a user name and password to Amazon Cognito in the request, instead of using the Secure
   *             Remote Password (SRP) protocol to securely transmit the password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_CUSTOM_AUTH</code>: Enable Lambda trigger based
   *             authentication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_USER_PASSWORD_AUTH</code>: Enable user password-based
   *             authentication. In this flow, Amazon Cognito receives the password in the request instead
   *             of using the SRP protocol to verify passwords.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_USER_SRP_AUTH</code>: Enable SRP-based authentication.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALLOW_REFRESH_TOKEN_AUTH</code>: Enable authflow to refresh
   *             tokens.</p>
   *             </li>
   *          </ul>
   *          <p>In some environments, you will see the values <code>ADMIN_NO_SRP_AUTH</code>, <code>CUSTOM_AUTH_FLOW_ONLY</code>, or <code>USER_PASSWORD_AUTH</code>.
   * You can't assign these legacy <code>ExplicitAuthFlows</code> values to user pool clients at the same time as values that begin with <code>ALLOW_</code>,
   * like <code>ALLOW_USER_SRP_AUTH</code>.</p>
   */
  ExplicitAuthFlows?: (ExplicitAuthFlowsType | string)[];

  /**
   * <p>A list of provider names for the IdPs that this client supports. The following are
   *             supported: <code>COGNITO</code>, <code>Facebook</code>, <code>Google</code>, <code>SignInWithApple</code>,
   *             <code>LoginWithAmazon</code>, and the names of your own SAML and OIDC providers.</p>
   */
  SupportedIdentityProviders?: string[];

  /**
   * <p>A list of allowed redirect (callback) URLs for the IdPs.</p>
   *         <p>A redirect URI must:</p>
   *         <ul>
   *             <li>
   *                 <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                 <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                 <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *         <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *         <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes
   *             only.</p>
   *         <p>App callback URLs such as myapp://example are also supported.</p>
   */
  CallbackURLs?: string[];

  /**
   * <p>A list of allowed logout URLs for the IdPs.</p>
   */
  LogoutURLs?: string[];

  /**
   * <p>The default redirect URI. Must be in the <code>CallbackURLs</code> list.</p>
   *         <p>A redirect URI must:</p>
   *         <ul>
   *             <li>
   *                 <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                 <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                 <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *         <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *         <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes
   *             only.</p>
   *         <p>App callback URLs such as myapp://example are also supported.</p>
   */
  DefaultRedirectURI?: string;

  /**
   * <p>The allowed OAuth flows.</p>
   *         <dl>
   *             <dt>code</dt>
   *             <dd>
   *                     <p>Use a code grant flow, which provides an authorization code as the
   *                         response. This code can be exchanged for access tokens with the
   *                             <code>/oauth2/token</code> endpoint.</p>
   *                 </dd>
   *             <dt>implicit</dt>
   *             <dd>
   *                     <p>Issue the access token (and, optionally, ID token, based on scopes)
   *                         directly to your user.</p>
   *                 </dd>
   *             <dt>client_credentials</dt>
   *             <dd>
   *                     <p>Issue the access token from the <code>/oauth2/token</code> endpoint
   *                         directly to a non-person user using a combination of the client ID and
   *                         client secret.</p>
   *                 </dd>
   *          </dl>
   */
  AllowedOAuthFlows?: (OAuthFlowType | string)[];

  /**
   * <p>The OAuth scopes that your app client supports. Possible values that OAuth provides
   *             are <code>phone</code>, <code>email</code>, <code>openid</code>, and
   *                 <code>profile</code>. Possible values that Amazon Web Services provides are
   *                 <code>aws.cognito.signin.user.admin</code>. Amazon Cognito also supports custom scopes that
   *             you create in Resource Servers.</p>
   */
  AllowedOAuthScopes?: string[];

  /**
   * <p>Set to true if the client is allowed to follow the OAuth protocol when interacting
   *             with Amazon Cognito user pools.</p>
   */
  AllowedOAuthFlowsUserPoolClient?: boolean;

  /**
   * <p>The Amazon Pinpoint analytics configuration for the user pool client.</p>
   *         <note>
   *             <p>Amazon Cognito user pools only support sending events to Amazon Pinpoint projects in the US East
   *                 (N. Virginia) us-east-1 Region, regardless of the Region where the user pool
   *                 resides.</p>
   *         </note>
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType;

  /**
   * <p>Errors and responses that you want Amazon Cognito APIs to return during authentication, account
   *             confirmation, and password recovery when the user doesn't exist in the user pool. When
   *             set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error
   *             indicating either the username or password was incorrect. Account confirmation and
   *             password recovery return a response indicating a code was sent to a simulated
   *             destination. When set to <code>LEGACY</code>, those APIs return a
   *                 <code>UserNotFoundException</code> exception if the user doesn't exist in the user
   *             pool.</p>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code> - This prevents user existence-related errors.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>LEGACY</code> - This represents the old behavior of Amazon Cognito where user
   *                     existence related errors aren't prevented.</p>
   *             </li>
   *          </ul>
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | string;

  /**
   * <p>Indicates whether token revocation is activated for the user pool client. When you
   *             create a new user pool client, token revocation is activated by default. For more
   *             information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
   */
  EnableTokenRevocation?: boolean;

  /**
   * <p>When <code>EnablePropagateAdditionalUserContextData</code> is true, Amazon Cognito accepts an
   *                 <code>IpAddress</code> value that you send in the <code>UserContextData</code>
   *             parameter. The <code>UserContextData</code> parameter sends information to Amazon Cognito
   *             advanced security for risk analysis. You can send <code>UserContextData</code> when you
   *             sign in Amazon Cognito native users with the <code>InitiateAuth</code> and
   *                 <code>RespondToAuthChallenge</code> API operations.</p>
   *         <p>When <code>EnablePropagateAdditionalUserContextData</code> is false, you can't send
   *             your user's source IP address to Amazon Cognito advanced security with unauthenticated API
   *             operations. <code>EnablePropagateAdditionalUserContextData</code> doesn't affect whether
   *             you can send a source IP address in a <code>ContextData</code> parameter with the
   *             authenticated API operations <code>AdminInitiateAuth</code> and
   *                 <code>AdminRespondToAuthChallenge</code>.</p>
   *         <p>You can only activate <code>EnablePropagateAdditionalUserContextData</code> in an app
   *             client that has a client secret. For more information about propagation of user context
   *             data, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint">Adding user device and session data to API requests</a>.</p>
   */
  EnablePropagateAdditionalUserContextData?: boolean;

  /**
   * <p>Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration,
   * in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.</p>
   */
  AuthSessionValidity?: number;
}

/**
 * <p>Represents the response from the server to create a user pool client.</p>
 */
export interface CreateUserPoolClientResponse {
  /**
   * <p>The user pool client that was just created.</p>
   */
  UserPoolClient?: UserPoolClientType;
}

/**
 * <p>This exception is thrown when the specified OAuth flow is not valid.</p>
 */
export class InvalidOAuthFlowException extends __BaseException {
  readonly name: "InvalidOAuthFlowException" = "InvalidOAuthFlowException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidOAuthFlowException, __BaseException>) {
    super({
      name: "InvalidOAuthFlowException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidOAuthFlowException.prototype);
  }
}

/**
 * <p>This exception is thrown when the specified scope doesn't exist.</p>
 */
export class ScopeDoesNotExistException extends __BaseException {
  readonly name: "ScopeDoesNotExistException" = "ScopeDoesNotExistException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScopeDoesNotExistException, __BaseException>) {
    super({
      name: "ScopeDoesNotExistException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScopeDoesNotExistException.prototype);
  }
}

/**
 * <p>The configuration for a custom domain that hosts the sign-up and sign-in webpages for
 *             your application.</p>
 */
export interface CustomDomainConfigType {
  /**
   * <p>The Amazon Resource Name (ARN) of an Certificate Manager SSL certificate. You use
   *             this certificate for the subdomain of your custom domain.</p>
   */
  CertificateArn: string | undefined;
}

export interface CreateUserPoolDomainRequest {
  /**
   * <p>The domain string. For custom domains, this is the fully-qualified domain name, such
   *             as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone,
   *             such as <code>auth</code>.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The configuration for a custom domain that hosts the sign-up and sign-in webpages for
   *             your application.</p>
   *         <p>Provide this parameter only if you want to use a custom domain for your user pool.
   *             Otherwise, you can exclude this parameter and use the Amazon Cognito hosted domain
   *             instead.</p>
   *         <p>For more information about the hosted domain and custom domains, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-assign-domain.html">Configuring a User Pool Domain</a>.</p>
   */
  CustomDomainConfig?: CustomDomainConfigType;
}

export interface CreateUserPoolDomainResponse {
  /**
   * <p>The Amazon CloudFront endpoint that you use as the target of the alias that you set up with
   *             your Domain Name Service (DNS) provider.</p>
   */
  CloudFrontDomain?: string;
}

export interface DeleteGroupRequest {
  /**
   * <p>The name of the group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;
}

export interface DeleteIdentityProviderRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The IdP name.</p>
   */
  ProviderName: string | undefined;
}

/**
 * <p>This exception is thrown when the specified identifier isn't supported.</p>
 */
export class UnsupportedIdentityProviderException extends __BaseException {
  readonly name: "UnsupportedIdentityProviderException" = "UnsupportedIdentityProviderException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedIdentityProviderException, __BaseException>) {
    super({
      name: "UnsupportedIdentityProviderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedIdentityProviderException.prototype);
  }
}

export interface DeleteResourceServerRequest {
  /**
   * <p>The user pool ID for the user pool that hosts the resource server.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The identifier for the resource server.</p>
   */
  Identifier: string | undefined;
}

/**
 * <p>Represents the request to delete a user.</p>
 */
export interface DeleteUserRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose user profile you want to
   *             delete.</p>
   */
  AccessToken: string | undefined;
}

/**
 * <p>Represents the request to delete user attributes.</p>
 */
export interface DeleteUserAttributesRequest {
  /**
   * <p>An array of strings representing the user attribute names you want to delete.</p>
   *         <p>For custom attributes, you must prependattach the <code>custom:</code> prefix to the
   *             front of the attribute name.</p>
   */
  UserAttributeNames: string[] | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose attributes you want to
   *             delete.</p>
   */
  AccessToken: string | undefined;
}

/**
 * <p>Represents the response from the server to delete user attributes.</p>
 */
export interface DeleteUserAttributesResponse {}

/**
 * <p>Represents the request to delete a user pool.</p>
 */
export interface DeleteUserPoolRequest {
  /**
   * <p>The user pool ID for the user pool you want to delete.</p>
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Represents the request to delete a user pool client.</p>
 */
export interface DeleteUserPoolClientRequest {
  /**
   * <p>The user pool ID for the user pool where you want to delete the client.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID of the app associated with the user pool.</p>
   */
  ClientId: string | undefined;
}

export interface DeleteUserPoolDomainRequest {
  /**
   * <p>The domain string. For custom domains, this is the fully-qualified domain name, such
   *             as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone,
   *             such as <code>auth</code>.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;
}

export interface DeleteUserPoolDomainResponse {}

export interface DescribeIdentityProviderRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The IdP name.</p>
   */
  ProviderName: string | undefined;
}

export interface DescribeIdentityProviderResponse {
  /**
   * <p>The identity provider details.</p>
   */
  IdentityProvider: IdentityProviderType | undefined;
}

export interface DescribeResourceServerRequest {
  /**
   * <p>The user pool ID for the user pool that hosts the resource server.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The identifier for the resource server</p>
   */
  Identifier: string | undefined;
}

export interface DescribeResourceServerResponse {
  /**
   * <p>The resource server.</p>
   */
  ResourceServer: ResourceServerType | undefined;
}

export interface DescribeRiskConfigurationRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID.</p>
   */
  ClientId?: string;
}

export enum CompromisedCredentialsEventActionType {
  BLOCK = "BLOCK",
  NO_ACTION = "NO_ACTION",
}

/**
 * <p>The compromised credentials actions type.</p>
 */
export interface CompromisedCredentialsActionsType {
  /**
   * <p>The event action.</p>
   */
  EventAction: CompromisedCredentialsEventActionType | string | undefined;
}

export enum EventFilterType {
  PASSWORD_CHANGE = "PASSWORD_CHANGE",
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
}

/**
 * <p>The compromised credentials risk configuration type.</p>
 */
export interface CompromisedCredentialsRiskConfigurationType {
  /**
   * <p>Perform the action for these events. The default is to perform all events if no event
   *             filter is specified.</p>
   */
  EventFilter?: (EventFilterType | string)[];

  /**
   * <p>The compromised credentials risk configuration actions.</p>
   */
  Actions: CompromisedCredentialsActionsType | undefined;
}

/**
 * <p>The type of the configuration to override the risk decision.</p>
 */
export interface RiskExceptionConfigurationType {
  /**
   * <p>Overrides the risk decision to always block the pre-authentication requests. The IP
   *             range is in CIDR notation, a compact representation of an IP address and its routing
   *             prefix.</p>
   */
  BlockedIPRangeList?: string[];

  /**
   * <p>Risk detection isn't performed on the IP addresses in this range list. The IP range is
   *             in CIDR notation.</p>
   */
  SkippedIPRangeList?: string[];
}

/**
 * <p>The risk configuration type.</p>
 */
export interface RiskConfigurationType {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The app client ID.</p>
   */
  ClientId?: string;

  /**
   * <p>The compromised credentials risk configuration object, including the
   *                 <code>EventFilter</code> and the <code>EventAction</code>.</p>
   */
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

  /**
   * <p>The account takeover risk configuration object, including the
   *                 <code>NotifyConfiguration</code> object and <code>Actions</code> to take if there is
   *             an account takeover.</p>
   */
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

  /**
   * <p>The configuration to override the risk decision.</p>
   */
  RiskExceptionConfiguration?: RiskExceptionConfigurationType;

  /**
   * <p>The last modified date.</p>
   */
  LastModifiedDate?: Date;
}

export interface DescribeRiskConfigurationResponse {
  /**
   * <p>The risk configuration.</p>
   */
  RiskConfiguration: RiskConfigurationType | undefined;
}

/**
 * <p>Represents the request to describe the user import job.</p>
 */
export interface DescribeUserImportJobRequest {
  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The job ID for the user import job.</p>
   */
  JobId: string | undefined;
}

/**
 * <p>Represents the response from the server to the request to describe the user import
 *             job.</p>
 */
export interface DescribeUserImportJobResponse {
  /**
   * <p>The job object that represents the user import job.</p>
   */
  UserImportJob?: UserImportJobType;
}

/**
 * <p>Represents the request to describe the user pool.</p>
 */
export interface DescribeUserPoolRequest {
  /**
   * <p>The user pool ID for the user pool you want to describe.</p>
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Represents the response to describe the user pool.</p>
 */
export interface DescribeUserPoolResponse {
  /**
   * <p>The container of metadata returned by the server to describe the pool.</p>
   */
  UserPool?: UserPoolType;
}

/**
 * <p>Represents the request to describe a user pool client.</p>
 */
export interface DescribeUserPoolClientRequest {
  /**
   * <p>The user pool ID for the user pool you want to describe.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID of the app associated with the user pool.</p>
   */
  ClientId: string | undefined;
}

/**
 * <p>Represents the response from the server from a request to describe the user pool
 *             client.</p>
 */
export interface DescribeUserPoolClientResponse {
  /**
   * <p>The user pool client from a server response to describe the user pool client.</p>
   */
  UserPoolClient?: UserPoolClientType;
}

export interface DescribeUserPoolDomainRequest {
  /**
   * <p>The domain string. For custom domains, this is the fully-qualified domain name, such
   *             as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone,
   *             such as <code>auth</code>.</p>
   */
  Domain: string | undefined;
}

export enum DomainStatusType {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>A container for information about a domain.</p>
 */
export interface DomainDescriptionType {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The Amazon Web Services ID for the user pool owner.</p>
   */
  AWSAccountId?: string;

  /**
   * <p>The domain string. For custom domains, this is the fully-qualified domain name, such
   *             as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone,
   *             such as <code>auth</code>.</p>
   */
  Domain?: string;

  /**
   * <p>The Amazon S3 bucket where the static files for this domain are stored.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudFront distribution.</p>
   */
  CloudFrontDistribution?: string;

  /**
   * <p>The app version.</p>
   */
  Version?: string;

  /**
   * <p>The domain status.</p>
   */
  Status?: DomainStatusType | string;

  /**
   * <p>The configuration for a custom domain that hosts the sign-up and sign-in webpages for
   *             your application.</p>
   */
  CustomDomainConfig?: CustomDomainConfigType;
}

export interface DescribeUserPoolDomainResponse {
  /**
   * <p>A domain description object containing information about the domain.</p>
   */
  DomainDescription?: DomainDescriptionType;
}

/**
 * <p>Represents the request to forget the device.</p>
 */
export interface ForgetDeviceRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose registered device you want to
   *             forget.</p>
   */
  AccessToken?: string;

  /**
   * <p>The device key.</p>
   */
  DeviceKey: string | undefined;
}

/**
 * <p>Represents the request to reset a user's password.</p>
 */
export interface ForgotPasswordRequest {
  /**
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message.</p>
   */
  SecretHash?: string;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>The user name of the user for whom you want to enter a code to reset a forgotten
   *             password.</p>
   */
  Username: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>ForgotPassword</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the ForgotPassword API action, Amazon Cognito invokes any
   *             functions that are assigned to the following triggers: <i>pre sign-up</i>,
   *                 <i>custom message</i>, and <i>user migration</i>. When
   *             Amazon Cognito invokes any of these functions, it passes a JSON payload, which the
   *             function receives as input. This payload contains a <code>clientMetadata</code>
   *             attribute, which provides the data that you assigned to the ClientMetadata parameter in
   *             your ForgotPassword request. In your function code in Lambda, you can
   *             process the <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>The delivery details for an email or SMS message that Amazon Cognito sent for authentication or
 *             verification.</p>
 */
export interface CodeDeliveryDetailsType {
  /**
   * <p>The email address or phone number destination where Amazon Cognito sent the code.</p>
   */
  Destination?: string;

  /**
   * <p>The method that Amazon Cognito used to send the code.</p>
   */
  DeliveryMedium?: DeliveryMediumType | string;

  /**
   * <p>The name of the attribute that Amazon Cognito verifies with the code.</p>
   */
  AttributeName?: string;
}

/**
 * <p>The response from Amazon Cognito to a request to reset a password.</p>
 */
export interface ForgotPasswordResponse {
  /**
   * <p>The code delivery details returned by the server in response to the request to reset a
   *             password.</p>
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
}

/**
 * <p>Represents the request to get the header information of the CSV file for the user
 *             import job.</p>
 */
export interface GetCSVHeaderRequest {
  /**
   * <p>The user pool ID for the user pool that the users are to be imported into.</p>
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Represents the response from the server to the request to get the header information
 *             of the CSV file for the user import job.</p>
 */
export interface GetCSVHeaderResponse {
  /**
   * <p>The user pool ID for the user pool that the users are to be imported into.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The header information of the CSV file for the user import job.</p>
   */
  CSVHeader?: string[];
}

/**
 * <p>Represents the request to get the device.</p>
 */
export interface GetDeviceRequest {
  /**
   * <p>The device key.</p>
   */
  DeviceKey: string | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose device information you want
   *             to request.</p>
   */
  AccessToken?: string;
}

/**
 * <p>Gets the device response.</p>
 */
export interface GetDeviceResponse {
  /**
   * <p>The device.</p>
   */
  Device: DeviceType | undefined;
}

export interface GetGroupRequest {
  /**
   * <p>The name of the group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;
}

export interface GetGroupResponse {
  /**
   * <p>The group object for the group.</p>
   */
  Group?: GroupType;
}

export interface GetIdentityProviderByIdentifierRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The IdP identifier.</p>
   */
  IdpIdentifier: string | undefined;
}

export interface GetIdentityProviderByIdentifierResponse {
  /**
   * <p>The identity provider details.</p>
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * <p>Request to get a signing certificate from Amazon Cognito.</p>
 */
export interface GetSigningCertificateRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Response from Amazon Cognito for a signing certificate request.</p>
 */
export interface GetSigningCertificateResponse {
  /**
   * <p>The signing certificate.</p>
   */
  Certificate?: string;
}

export interface GetUICustomizationRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The client ID for the client app.</p>
   */
  ClientId?: string;
}

/**
 * <p>A container for the UI customization information for a user pool's built-in app
 *             UI.</p>
 */
export interface UICustomizationType {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The client ID for the client app.</p>
   */
  ClientId?: string;

  /**
   * <p>The logo image for the UI customization.</p>
   */
  ImageUrl?: string;

  /**
   * <p>The CSS values in the UI customization.</p>
   */
  CSS?: string;

  /**
   * <p>The CSS version number.</p>
   */
  CSSVersion?: string;

  /**
   * <p>The last-modified date for the UI customization.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The creation date for the UI customization.</p>
   */
  CreationDate?: Date;
}

export interface GetUICustomizationResponse {
  /**
   * <p>The UI customization information.</p>
   */
  UICustomization: UICustomizationType | undefined;
}

/**
 * <p>Represents the request to get information about the user.</p>
 */
export interface GetUserRequest {
  /**
   * <p>A non-expired access token for the user whose information you want to query.</p>
   */
  AccessToken: string | undefined;
}

/**
 * <p>Represents the response from the server from the request to get information about the
 *             user.</p>
 */
export interface GetUserResponse {
  /**
   * <p>The user name of the user you want to retrieve from the get user request.</p>
   */
  Username: string | undefined;

  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * <p>
   *             <i>This response parameter is no longer supported.</i> It provides
   *             information only about SMS MFA configurations. It doesn't provide information about
   *             time-based one-time password (TOTP) software token MFA configurations. To look up
   *             information about either type of MFA configuration, use UserMFASettingList
   *             instead.</p>
   */
  MFAOptions?: MFAOptionType[];

  /**
   * <p>The user's preferred MFA setting.</p>
   */
  PreferredMfaSetting?: string;

  /**
   * <p>The MFA options that are activated for the user. The possible values in this list are
   *                 <code>SMS_MFA</code> and <code>SOFTWARE_TOKEN_MFA</code>.</p>
   */
  UserMFASettingList?: string[];
}

/**
 * <p>Represents the request to get user attribute verification.</p>
 */
export interface GetUserAttributeVerificationCodeRequest {
  /**
   * <p>A non-expired access token for the user whose attribute verification code you want to
   *             generate.</p>
   */
  AccessToken: string | undefined;

  /**
   * <p>The attribute name returned by the server response to get the user attribute
   *             verification code.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the GetUserAttributeVerificationCode API action, Amazon Cognito invokes
   *             the function that is assigned to the <i>custom message</i> trigger. When
   *             Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as
   *             input. This payload contains a <code>clientMetadata</code> attribute, which provides the
   *             data that you assigned to the ClientMetadata parameter in your
   *             GetUserAttributeVerificationCode request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for
   *             your specific needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>The verification code response returned by the server response to get the user
 *             attribute verification code.</p>
 */
export interface GetUserAttributeVerificationCodeResponse {
  /**
   * <p>The code delivery details returned by the server in response to the request to get the
   *             user attribute verification code.</p>
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
}

export interface GetUserPoolMfaConfigRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;
}

/**
 * <p>The SMS text message multi-factor authentication (MFA) configuration type.</p>
 */
export interface SmsMfaConfigType {
  /**
   * <p>The SMS authentication message that will be sent to users with the code they must sign
   *             in. The message must contain the ‘{####}’ placeholder, which is replaced with the code.
   *             If the message isn't included, and default message will be used.</p>
   */
  SmsAuthenticationMessage?: string;

  /**
   * <p>The SMS configuration with the settings that your Amazon Cognito user pool must use to send an
   *             SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To request Amazon SNS in
   *             the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role that
   *             you provide for your Amazon Web Services account.</p>
   */
  SmsConfiguration?: SmsConfigurationType;
}

/**
 * <p>The type used for enabling software token MFA at the user pool level.</p>
 */
export interface SoftwareTokenMfaConfigType {
  /**
   * <p>Specifies whether software token MFA is activated.</p>
   */
  Enabled?: boolean;
}

export interface GetUserPoolMfaConfigResponse {
  /**
   * <p>The SMS text message multi-factor authentication (MFA) configuration.</p>
   */
  SmsMfaConfiguration?: SmsMfaConfigType;

  /**
   * <p>The software token multi-factor authentication (MFA) configuration.</p>
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;

  /**
   * <p>The multi-factor authentication (MFA) configuration. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OFF</code> MFA won't be used for any users.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ON</code> MFA is required for all users to sign in.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>OPTIONAL</code> MFA will be required only for individual users who have
   *                     an MFA factor activated.</p>
   *             </li>
   *          </ul>
   */
  MfaConfiguration?: UserPoolMfaType | string;
}

/**
 * <p>Represents the request to sign out all devices.</p>
 */
export interface GlobalSignOutRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user who you want to sign out.</p>
   */
  AccessToken: string | undefined;
}

/**
 * <p>The response to the request to sign out all devices.</p>
 */
export interface GlobalSignOutResponse {}

/**
 * <p>Initiates the authentication request.</p>
 */
export interface InitiateAuthRequest {
  /**
   * <p>The authentication flow for this call to run. The API action will depend on this
   *             value. For example:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>REFRESH_TOKEN_AUTH</code> takes in a valid refresh token and returns new
   *                     tokens.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>USER_SRP_AUTH</code> takes in <code>USERNAME</code> and
   *                         <code>SRP_A</code> and returns the SRP variables to be used for next
   *                     challenge execution.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>USER_PASSWORD_AUTH</code> takes in <code>USERNAME</code> and
   *                         <code>PASSWORD</code> and returns the next challenge or tokens.</p>
   *             </li>
   *          </ul>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>USER_SRP_AUTH</code>: Authentication flow for the Secure Remote Password
   *                     (SRP) protocol.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>REFRESH_TOKEN_AUTH</code>/<code>REFRESH_TOKEN</code>: Authentication
   *                     flow for refreshing the access token and ID token by supplying a valid refresh
   *                     token.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CUSTOM_AUTH</code>: Custom authentication flow.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>USER_PASSWORD_AUTH</code>: Non-SRP authentication flow; user name and
   *                     password are passed directly. If a user migration Lambda trigger is set, this
   *                     flow will invoke the user migration Lambda if it doesn't find the user name in
   *                     the user pool. </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <code>ADMIN_NO_SRP_AUTH</code> isn't a valid value.</p>
   */
  AuthFlow: AuthFlowType | string | undefined;

  /**
   * <p>The authentication parameters. These are inputs corresponding to the
   *                 <code>AuthFlow</code> that you're invoking. The required values depend on the value
   *             of <code>AuthFlow</code>:</p>
   *         <ul>
   *             <li>
   *                 <p>For <code>USER_SRP_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SRP_A</code> (required), <code>SECRET_HASH</code> (required if the app
   *                     client is configured with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For <code>REFRESH_TOKEN_AUTH/REFRESH_TOKEN</code>: <code>REFRESH_TOKEN</code>
   *                     (required), <code>SECRET_HASH</code> (required if the app client is configured
   *                     with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For <code>CUSTOM_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SECRET_HASH</code> (if app client is configured with client secret),
   *                         <code>DEVICE_KEY</code>. To start the authentication flow with password
   *                     verification, include <code>ChallengeName: SRP_A</code> and <code>SRP_A: (The
   *                         SRP_A Value)</code>.</p>
   *             </li>
   *          </ul>
   */
  AuthParameters?: Record<string, string>;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for certain custom
   *             workflows that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the InitiateAuth API action, Amazon Cognito invokes the Lambda functions that are
   *             specified for various triggers. The ClientMetadata value is passed as input to the
   *             functions for only the following triggers:</p>
   *         <ul>
   *             <li>
   *                 <p>Pre signup</p>
   *             </li>
   *             <li>
   *                 <p>Pre authentication</p>
   *             </li>
   *             <li>
   *                 <p>User migration</p>
   *             </li>
   *          </ul>
   *         <p>When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload, which
   *             the function receives as input. This payload contains a <code>validationData</code>
   *             attribute, which provides the data that you assigned to the ClientMetadata parameter in
   *             your InitiateAuth request. In your function code in Lambda, you can process the
   *                 <code>validationData</code> value to enhance your workflow for your specific
   *             needs.</p>
   *         <p>When you use the InitiateAuth API action, Amazon Cognito also invokes the functions for the
   *             following triggers, but it doesn't provide the ClientMetadata value as input:</p>
   *         <ul>
   *             <li>
   *                 <p>Post authentication</p>
   *             </li>
   *             <li>
   *                 <p>Custom message</p>
   *             </li>
   *             <li>
   *                 <p>Pre token generation</p>
   *             </li>
   *             <li>
   *                 <p>Create auth challenge</p>
   *             </li>
   *             <li>
   *                 <p>Define auth challenge</p>
   *             </li>
   *             <li>
   *                 <p>Verify auth challenge</p>
   *             </li>
   *          </ul>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;

  /**
   * <p>The app client ID.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>InitiateAuth</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   */
  UserContextData?: UserContextDataType;
}

/**
 * <p>Initiates the authentication response.</p>
 */
export interface InitiateAuthResponse {
  /**
   * <p>The name of the challenge that you're responding to with this call. This name is
   *             returned in the <code>AdminInitiateAuth</code> response if you must pass another
   *             challenge.</p>
   *         <p>Valid values include the following:</p>
   *         <note>
   *             <p>All of the following challenges require <code>USERNAME</code> and
   *                     <code>SECRET_HASH</code> (if applicable) in the parameters.</p>
   *         </note>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SMS_MFA</code>: Next challenge is to supply an
   *                     <code>SMS_MFA_CODE</code>, delivered via SMS.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PASSWORD_VERIFIER</code>: Next challenge is to supply
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     the client-side SRP calculations.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication
   *                     flow determines that the user should pass another challenge before tokens are
   *                     issued.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DEVICE_SRP_AUTH</code>: If device tracking was activated on your user
   *                     pool and the previous challenges were passed, this challenge is returned so that
   *                     Amazon Cognito can start tracking this device.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Similar to
   *                         <code>PASSWORD_VERIFIER</code>, but for devices only.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their
   *                     passwords after successful first login. </p>
   *                 <p>Respond to this challenge with <code>NEW_PASSWORD</code> and any required
   *                     attributes that Amazon Cognito returned in the <code>requiredAttributes</code> parameter.
   *                     You can also set values for attributes that aren't required by your user pool
   *                     and that your app client can write. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html">RespondToAuthChallenge</a>.</p>
   *
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter,
   * then use the <code>UpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p>
   *                </note>
   *
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MFA_SETUP</code>: For users who are required to setup an MFA factor
   *                     before they can sign in. The MFA types activated for the user pool will be
   *                     listed in the challenge parameters <code>MFA_CAN_SETUP</code> value. </p>
   *                 <p> To set up software token MFA, use the session returned here from
   *                         <code>InitiateAuth</code> as an input to
   *                     <code>AssociateSoftwareToken</code>. Use the session returned by
   *                         <code>VerifySoftwareToken</code> as an input to
   *                         <code>RespondToAuthChallenge</code> with challenge name
   *                         <code>MFA_SETUP</code> to complete sign-in. To set up SMS MFA, an
   *                     administrator should help the user to add a phone number to their account, and
   *                     then the user should call <code>InitiateAuth</code> again to restart
   *                     sign-in.</p>
   *             </li>
   *          </ul>
   */
  ChallengeName?: ChallengeNameType | string;

  /**
   * <p>The session that should pass both ways in challenge-response calls to the service. If
   *             the caller must pass another challenge, they return a session with other challenge
   *             parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   */
  Session?: string;

  /**
   * <p>The challenge parameters. These are returned in the <code>InitiateAuth</code> response
   *             if you must pass another challenge. The responses in this parameter should be used to
   *             compute inputs to the next call (<code>RespondToAuthChallenge</code>). </p>
   *         <p>All challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if
   *             applicable).</p>
   */
  ChallengeParameters?: Record<string, string>;

  /**
   * <p>The result of the authentication response. This result is only returned if the caller
   *             doesn't need to pass another challenge. If the caller does need to pass another
   *             challenge before it gets tokens, <code>ChallengeName</code>,
   *                 <code>ChallengeParameters</code>, and <code>Session</code> are returned.</p>
   */
  AuthenticationResult?: AuthenticationResultType;
}

/**
 * <p>Represents the request to list the devices.</p>
 */
export interface ListDevicesRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose list of devices you want to
   *             view.</p>
   */
  AccessToken: string | undefined;

  /**
   * <p>The limit of the device request.</p>
   */
  Limit?: number;

  /**
   * <p>The pagination token for the list request.</p>
   */
  PaginationToken?: string;
}

/**
 * <p>Represents the response to list devices.</p>
 */
export interface ListDevicesResponse {
  /**
   * <p>The devices returned in the list devices response.</p>
   */
  Devices?: DeviceType[];

  /**
   * <p>The pagination token for the list device response.</p>
   */
  PaginationToken?: string;
}

export interface ListGroupsRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The limit of the request to list groups.</p>
   */
  Limit?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

export interface ListGroupsResponse {
  /**
   * <p>The group objects for the groups.</p>
   */
  Groups?: GroupType[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

export interface ListIdentityProvidersRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of IdPs to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>A container for IdP details.</p>
 */
export interface ProviderDescription {
  /**
   * <p>The IdP name.</p>
   */
  ProviderName?: string;

  /**
   * <p>The IdP type.</p>
   */
  ProviderType?: IdentityProviderTypeType | string;

  /**
   * <p>The date the provider was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the provider was added to the user pool.</p>
   */
  CreationDate?: Date;
}

export interface ListIdentityProvidersResponse {
  /**
   * <p>A list of IdP objects.</p>
   */
  Providers: ProviderDescription[] | undefined;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

export interface ListResourceServersRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of resource servers to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

export interface ListResourceServersResponse {
  /**
   * <p>The resource servers.</p>
   */
  ResourceServers: ResourceServerType[] | undefined;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are assigned to the user pool.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Represents the request to list the user import jobs.</p>
 */
export interface ListUserImportJobsRequest {
  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of import jobs you want the request to return.</p>
   */
  MaxResults: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to
   *                 <code>ListUserImportJobs</code>, which can be used to return the next set of import
   *             jobs in the list.</p>
   */
  PaginationToken?: string;
}

/**
 * <p>Represents the response from the server to the request to list the user import
 *             jobs.</p>
 */
export interface ListUserImportJobsResponse {
  /**
   * <p>The user import jobs.</p>
   */
  UserImportJobs?: UserImportJobType[];

  /**
   * <p>An identifier that can be used to return the next set of user import jobs in the
   *             list.</p>
   */
  PaginationToken?: string;
}

/**
 * <p>Represents the request to list the user pool clients.</p>
 */
export interface ListUserPoolClientsRequest {
  /**
   * <p>The user pool ID for the user pool where you want to list user pool clients.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of results you want the request to return when listing the user
   *             pool clients.</p>
   */
  MaxResults?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

/**
 * <p>The description of the user pool client.</p>
 */
export interface UserPoolClientDescription {
  /**
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId?: string;

  /**
   * <p>The user pool ID for the user pool where you want to describe the user pool
   *             client.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The client name from the user pool client description.</p>
   */
  ClientName?: string;
}

/**
 * <p>Represents the response from the server that lists user pool clients.</p>
 */
export interface ListUserPoolClientsResponse {
  /**
   * <p>The user pool clients in the response that lists user pool clients.</p>
   */
  UserPoolClients?: UserPoolClientDescription[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the request to list user pools.</p>
 */
export interface ListUserPoolsRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results you want the request to return when listing the user
   *             pools.</p>
   */
  MaxResults: number | undefined;
}

/**
 * <p>A user pool description.</p>
 */
export interface UserPoolDescriptionType {
  /**
   * <p>The ID in a user pool description.</p>
   */
  Id?: string;

  /**
   * <p>The name in a user pool description.</p>
   */
  Name?: string;

  /**
   * <p>The Lambda configuration information in a user pool description.</p>
   */
  LambdaConfig?: LambdaConfigType;

  /**
   * <p>The user pool status in a user pool description.</p>
   */
  Status?: StatusType | string;

  /**
   * <p>The date the user pool description was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the user pool description was created.</p>
   */
  CreationDate?: Date;
}

/**
 * <p>Represents the response to list user pools.</p>
 */
export interface ListUserPoolsResponse {
  /**
   * <p>The user pools from the response to list users.</p>
   */
  UserPools?: UserPoolDescriptionType[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the request to list users.</p>
 */
export interface ListUsersRequest {
  /**
   * <p>The user pool ID for the user pool on which the search should be performed.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>An array of strings, where each string is the name of a user attribute to be returned
   *             for each user in the search results. If the array is null, all attributes are
   *             returned.</p>
   */
  AttributesToGet?: string[];

  /**
   * <p>Maximum number of users to be returned.</p>
   */
  Limit?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  PaginationToken?: string;

  /**
   * <p>A filter string of the form "<i>AttributeName</i>
   *             <i>Filter-Type</i> "<i>AttributeValue</i>"". Quotation marks
   *             within the filter string must be escaped using the backslash (\) character. For example,
   *                 "<code>family_name</code> = \"Reddy\"".</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <i>AttributeName</i>: The name of the attribute to search for.
   *                     You can only search for one attribute at a time.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <i>Filter-Type</i>: For an exact match, use =, for example,
   *                         "<code>given_name</code> = \"Jon\"". For a prefix ("starts with") match, use
   *                     ^=, for example, "<code>given_name</code> ^= \"Jon\"". </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <i>AttributeValue</i>: The attribute value that must be matched
   *                     for each user.</p>
   *             </li>
   *          </ul>
   *         <p>If the filter string is empty, <code>ListUsers</code> returns all users in the user
   *             pool.</p>
   *         <p>You can only search for the following standard attributes:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>username</code> (case-sensitive)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>email</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>phone_number</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>name</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>given_name</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>family_name</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>preferred_username</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>cognito:user_status</code> (called <b>Status</b> in the Console) (case-insensitive)</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>status (called <b>Enabled</b> in the Console)
   *                         (case-sensitive)</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sub</code>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>Custom attributes aren't searchable.</p>
   *         <note>
   *             <p>You can also list users with a client-side filter. The server-side filter matches
   *                 no more than one attribute. For an advanced search, use a client-side filter with
   *                 the <code>--query</code> parameter of the <code>list-users</code> action in the
   *                 CLI. When you use a client-side filter, ListUsers returns a paginated list of zero
   *                 or more users. You can receive multiple pages in a row with zero results. Repeat the
   *                 query with each pagination token that is returned until you receive a null
   *                 pagination token value, and then review the combined result. </p>
   *             <p>For more information about server-side and client-side filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">FilteringCLI output</a> in the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Command Line Interface
   *                     User Guide</a>. </p>
   *         </note>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-using-listusers-api">Searching for Users Using the ListUsers API</a> and <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-listusers-api-examples">Examples of Using the ListUsers API</a> in the <i>Amazon Cognito Developer
   *                 Guide</i>.</p>
   */
  Filter?: string;
}

/**
 * <p>The response from the request to list users.</p>
 */
export interface ListUsersResponse {
  /**
   * <p>The users returned in the request to list users.</p>
   */
  Users?: UserType[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  PaginationToken?: string;
}

export interface ListUsersInGroupRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The limit of the request to list users.</p>
   */
  Limit?: number;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

export interface ListUsersInGroupResponse {
  /**
   * <p>The users returned in the request to list users.</p>
   */
  Users?: UserType[];

  /**
   * <p>An identifier that you can use in a later request to return the next set of items in
   *             the list.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents the request to resend the confirmation code.</p>
 */
export interface ResendConfirmationCodeRequest {
  /**
   * <p>The ID of the client associated with the user pool.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message.</p>
   */
  SecretHash?: string;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>The <code>username</code> attribute of the user to whom you want to resend a
   *             confirmation code.</p>
   */
  Username: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>ResendConfirmationCode</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the ResendConfirmationCode API action, Amazon Cognito invokes the function that is
   *             assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes this
   *             function, it passes a JSON payload, which the function receives as input. This payload
   *             contains a <code>clientMetadata</code> attribute, which provides the data that you
   *             assigned to the ClientMetadata parameter in your ResendConfirmationCode request. In your
   *             function code in Lambda, you can process the <code>clientMetadata</code> value to enhance
   *             your workflow for your specific needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>The response from the server when Amazon Cognito makes the request to resend a confirmation
 *             code.</p>
 */
export interface ResendConfirmationCodeResponse {
  /**
   * <p>The code delivery details returned by the server in response to the request to resend
   *             the confirmation code.</p>
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
}

/**
 * <p>The request to respond to an authentication challenge.</p>
 */
export interface RespondToAuthChallengeRequest {
  /**
   * <p>The app client ID.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p>
   *         <p>
   *             <code>ADMIN_NO_SRP_AUTH</code> isn't a valid value.</p>
   */
  ChallengeName: ChallengeNameType | string | undefined;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. If <code>InitiateAuth</code> or <code>RespondToAuthChallenge</code> API call
   *             determines that the caller must pass another challenge, they return a session with other
   *             challenge parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   */
  Session?: string;

  /**
   * <p>The challenge responses. These are inputs corresponding to the value of
   *                 <code>ChallengeName</code>, for example:</p>
   *         <note>
   *             <p>
   *                <code>SECRET_HASH</code> (if app client is configured with client secret) applies
   *                 to all of the inputs that follow (including <code>SOFTWARE_TOKEN_MFA</code>).</p>
   *         </note>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SMS_MFA</code>: <code>SMS_MFA_CODE</code>, <code>USERNAME</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PASSWORD_VERIFIER</code>: <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, <code>TIMESTAMP</code>,
   *                         <code>USERNAME</code>.</p>
   *                 <note>
   *                     <p>
   *                      <code>PASSWORD_VERIFIER</code> requires <code>DEVICE_KEY</code> when you
   *                         sign in with a remembered device.</p>
   *                 </note>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>NEW_PASSWORD_REQUIRED</code>: <code>NEW_PASSWORD</code>,
   *                     <code>USERNAME</code>, <code>SECRET_HASH</code> (if app client is configured
   *                     with client secret). To set any required attributes that Amazon Cognito returned as
   *                     <code>requiredAttributes</code> in the <code>InitiateAuth</code> response,
   *                     add a <code>userAttributes.<i>attributename</i>
   *                   </code> parameter.
   *                     This parameter can also set values for writable attributes that aren't required
   *                     by your user pool.</p>
   *
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter,
   * then use the <code>UpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p>
   *                </note>
   *
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SOFTWARE_TOKEN_MFA</code>: <code>USERNAME</code> and
   *                         <code>SOFTWARE_TOKEN_MFA_CODE</code> are required attributes.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DEVICE_SRP_AUTH</code> requires <code>USERNAME</code>,
   *                         <code>DEVICE_KEY</code>, <code>SRP_A</code> (and
   *                     <code>SECRET_HASH</code>).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code> requires everything that
   *                         <code>PASSWORD_VERIFIER</code> requires, plus
   *                     <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MFA_SETUP</code> requires <code>USERNAME</code>, plus you must use the
   *                     session value returned by <code>VerifySoftwareToken</code> in the
   *                         <code>Session</code> parameter.</p>
   *             </li>
   *          </ul>
   */
  ChallengeResponses?: Record<string, string>;

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>RespondToAuthChallenge</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *         <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the RespondToAuthChallenge API action, Amazon Cognito invokes any
   *             functions that are assigned to the following triggers: <i>post
   *                 authentication</i>, <i>pre token generation</i>,
   *                 <i>define auth challenge</i>, <i>create auth
   *                 challenge</i>, and <i>verify auth challenge</i>. When Amazon Cognito
   *             invokes any of these functions, it passes a JSON payload, which the function receives as
   *             input. This payload contains a <code>clientMetadata</code> attribute, which provides the
   *             data that you assigned to the ClientMetadata parameter in your RespondToAuthChallenge
   *             request. In your function code in Lambda, you can process the
   *                 <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *
   *         <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                     <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: Record<string, string>;
}

/**
 * <p>The response to respond to the authentication challenge.</p>
 */
export interface RespondToAuthChallengeResponse {
  /**
   * <p>The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p>
   */
  ChallengeName?: ChallengeNameType | string;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. If the caller must pass another challenge, they return a session with other
   *             challenge parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   */
  Session?: string;

  /**
   * <p>The challenge parameters. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p>
   */
  ChallengeParameters?: Record<string, string>;

  /**
   * <p>The result returned by the server in response to the request to respond to the
   *             authentication challenge.</p>
   */
  AuthenticationResult?: AuthenticationResultType;
}

export interface RevokeTokenRequest {
  /**
   * <p>The refresh token that you want to revoke.</p>
   */
  Token: string | undefined;

  /**
   * <p>The client ID for the token that you want to revoke.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The secret for the client ID. This is required only if the client ID has a
   *             secret.</p>
   */
  ClientSecret?: string;
}

export interface RevokeTokenResponse {}

/**
 * <p>Exception that is thrown when the request isn't authorized. This can happen due to an
 *             invalid access token in the request.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>Exception that is thrown when you attempt to perform an operation that isn't enabled
 *             for the user pool client.</p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
  }
}

/**
 * <p>Exception that is thrown when an unsupported token is passed to an operation.</p>
 */
export class UnsupportedTokenTypeException extends __BaseException {
  readonly name: "UnsupportedTokenTypeException" = "UnsupportedTokenTypeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedTokenTypeException, __BaseException>) {
    super({
      name: "UnsupportedTokenTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedTokenTypeException.prototype);
  }
}

export interface SetRiskConfigurationRequest {
  /**
   * <p>The user pool ID. </p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID. If <code>ClientId</code> is null, then the risk configuration is
   *             mapped to <code>userPoolId</code>. When the client ID is null, the same risk
   *             configuration is applied to all the clients in the userPool.</p>
   *         <p>Otherwise, <code>ClientId</code> is mapped to the client. When the client ID isn't
   *             null, the user pool configuration is overridden and the risk configuration for the
   *             client is used instead.</p>
   */
  ClientId?: string;

  /**
   * <p>The compromised credentials risk configuration.</p>
   */
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

  /**
   * <p>The account takeover risk configuration.</p>
   */
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType;

  /**
   * <p>The configuration to override the risk decision.</p>
   */
  RiskExceptionConfiguration?: RiskExceptionConfigurationType;
}

export interface SetRiskConfigurationResponse {
  /**
   * <p>The risk configuration.</p>
   */
  RiskConfiguration: RiskConfigurationType | undefined;
}

export interface SetUICustomizationRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The client ID for the client app.</p>
   */
  ClientId?: string;

  /**
   * <p>The CSS values in the UI customization.</p>
   */
  CSS?: string;

  /**
   * <p>The uploaded logo image for the UI customization.</p>
   */
  ImageFile?: Uint8Array;
}

export interface SetUICustomizationResponse {
  /**
   * <p>The UI customization information.</p>
   */
  UICustomization: UICustomizationType | undefined;
}

export interface SetUserMFAPreferenceRequest {
  /**
   * <p>The SMS text message multi-factor authentication (MFA) settings.</p>
   */
  SMSMfaSettings?: SMSMfaSettingsType;

  /**
   * <p>The time-based one-time password (TOTP) software token MFA settings.</p>
   */
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;

  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose MFA preference you want to
   *             set.</p>
   */
  AccessToken: string | undefined;
}

export interface SetUserMFAPreferenceResponse {}

export interface SetUserPoolMfaConfigRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The SMS text message MFA configuration.</p>
   */
  SmsMfaConfiguration?: SmsMfaConfigType;

  /**
   * <p>The software token MFA configuration.</p>
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;

  /**
   * <p>The MFA configuration. If you set the MfaConfiguration value to ‘ON’, only users who
   *             have set up an MFA factor can sign in. To learn more, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-mfa.html">Adding Multi-Factor
   *                 Authentication (MFA) to a user pool</a>. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OFF</code> MFA won't be used for any users.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ON</code> MFA is required for all users to sign in.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>OPTIONAL</code> MFA will be required only for individual users who have
   *                     an MFA factor activated.</p>
   *             </li>
   *          </ul>
   */
  MfaConfiguration?: UserPoolMfaType | string;
}

export interface SetUserPoolMfaConfigResponse {
  /**
   * <p>The SMS text message MFA configuration.</p>
   */
  SmsMfaConfiguration?: SmsMfaConfigType;

  /**
   * <p>The software token MFA configuration.</p>
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;

  /**
   * <p>The MFA configuration. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OFF</code> MFA won't be used for any users.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ON</code> MFA is required for all users to sign in.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>OPTIONAL</code> MFA will be required only for individual users who have
   *                     an MFA factor enabled.</p>
   *             </li>
   *          </ul>
   */
  MfaConfiguration?: UserPoolMfaType | string;
}

/**
 * <p>Represents the request to set user settings.</p>
 */
export interface SetUserSettingsRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose user settings you want to
   *             configure.</p>
   */
  AccessToken: string | undefined;

  /**
   * <p>You can use this parameter only to set an SMS configuration that uses SMS for
   *             delivery.</p>
   */
  MFAOptions: MFAOptionType[] | undefined;
}

/**
 * <p>The response from the server for a set user settings request.</p>
 */
export interface SetUserSettingsResponse {}

/**
 * @internal
 */
export const RecoveryOptionTypeFilterSensitiveLog = (obj: RecoveryOptionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountRecoverySettingTypeFilterSensitiveLog = (obj: AccountRecoverySettingType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountTakeoverActionTypeFilterSensitiveLog = (obj: AccountTakeoverActionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountTakeoverActionsTypeFilterSensitiveLog = (obj: AccountTakeoverActionsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyEmailTypeFilterSensitiveLog = (obj: NotifyEmailType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyConfigurationTypeFilterSensitiveLog = (obj: NotifyConfigurationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccountTakeoverRiskConfigurationTypeFilterSensitiveLog = (
  obj: AccountTakeoverRiskConfigurationType
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NumberAttributeConstraintsTypeFilterSensitiveLog = (obj: NumberAttributeConstraintsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StringAttributeConstraintsTypeFilterSensitiveLog = (obj: StringAttributeConstraintsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SchemaAttributeTypeFilterSensitiveLog = (obj: SchemaAttributeType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddCustomAttributesRequestFilterSensitiveLog = (obj: AddCustomAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddCustomAttributesResponseFilterSensitiveLog = (obj: AddCustomAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminAddUserToGroupRequestFilterSensitiveLog = (obj: AdminAddUserToGroupRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminConfirmSignUpRequestFilterSensitiveLog = (obj: AdminConfirmSignUpRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminConfirmSignUpResponseFilterSensitiveLog = (obj: AdminConfirmSignUpResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeTypeFilterSensitiveLog = (obj: AttributeType): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminCreateUserRequestFilterSensitiveLog = (obj: AdminCreateUserRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.UserAttributes && {
    UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
  ...(obj.ValidationData && {
    ValidationData: obj.ValidationData.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
  ...(obj.TemporaryPassword && { TemporaryPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MFAOptionTypeFilterSensitiveLog = (obj: MFAOptionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserTypeFilterSensitiveLog = (obj: UserType): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeTypeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const AdminCreateUserResponseFilterSensitiveLog = (obj: AdminCreateUserResponse): any => ({
  ...obj,
  ...(obj.User && { User: UserTypeFilterSensitiveLog(obj.User) }),
});

/**
 * @internal
 */
export const MessageTemplateTypeFilterSensitiveLog = (obj: MessageTemplateType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminCreateUserConfigTypeFilterSensitiveLog = (obj: AdminCreateUserConfigType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminDeleteUserRequestFilterSensitiveLog = (obj: AdminDeleteUserRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminDeleteUserAttributesRequestFilterSensitiveLog = (obj: AdminDeleteUserAttributesRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminDeleteUserAttributesResponseFilterSensitiveLog = (obj: AdminDeleteUserAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProviderUserIdentifierTypeFilterSensitiveLog = (obj: ProviderUserIdentifierType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminDisableProviderForUserRequestFilterSensitiveLog = (obj: AdminDisableProviderForUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminDisableProviderForUserResponseFilterSensitiveLog = (
  obj: AdminDisableProviderForUserResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminDisableUserRequestFilterSensitiveLog = (obj: AdminDisableUserRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminDisableUserResponseFilterSensitiveLog = (obj: AdminDisableUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminEnableUserRequestFilterSensitiveLog = (obj: AdminEnableUserRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminEnableUserResponseFilterSensitiveLog = (obj: AdminEnableUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminForgetDeviceRequestFilterSensitiveLog = (obj: AdminForgetDeviceRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminGetDeviceRequestFilterSensitiveLog = (obj: AdminGetDeviceRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeviceTypeFilterSensitiveLog = (obj: DeviceType): any => ({
  ...obj,
  ...(obj.DeviceAttributes && {
    DeviceAttributes: obj.DeviceAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AdminGetDeviceResponseFilterSensitiveLog = (obj: AdminGetDeviceResponse): any => ({
  ...obj,
  ...(obj.Device && { Device: DeviceTypeFilterSensitiveLog(obj.Device) }),
});

/**
 * @internal
 */
export const AdminGetUserRequestFilterSensitiveLog = (obj: AdminGetUserRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminGetUserResponseFilterSensitiveLog = (obj: AdminGetUserResponse): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.UserAttributes && {
    UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AnalyticsMetadataTypeFilterSensitiveLog = (obj: AnalyticsMetadataType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpHeaderFilterSensitiveLog = (obj: HttpHeader): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContextDataTypeFilterSensitiveLog = (obj: ContextDataType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminInitiateAuthRequestFilterSensitiveLog = (obj: AdminInitiateAuthRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.AuthParameters && { AuthParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NewDeviceMetadataTypeFilterSensitiveLog = (obj: NewDeviceMetadataType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthenticationResultTypeFilterSensitiveLog = (obj: AuthenticationResultType): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  ...(obj.RefreshToken && { RefreshToken: SENSITIVE_STRING }),
  ...(obj.IdToken && { IdToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminInitiateAuthResponseFilterSensitiveLog = (obj: AdminInitiateAuthResponse): any => ({
  ...obj,
  ...(obj.AuthenticationResult && {
    AuthenticationResult: AuthenticationResultTypeFilterSensitiveLog(obj.AuthenticationResult),
  }),
});

/**
 * @internal
 */
export const AdminLinkProviderForUserRequestFilterSensitiveLog = (obj: AdminLinkProviderForUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminLinkProviderForUserResponseFilterSensitiveLog = (obj: AdminLinkProviderForUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminListDevicesRequestFilterSensitiveLog = (obj: AdminListDevicesRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminListDevicesResponseFilterSensitiveLog = (obj: AdminListDevicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminListGroupsForUserRequestFilterSensitiveLog = (obj: AdminListGroupsForUserRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GroupTypeFilterSensitiveLog = (obj: GroupType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminListGroupsForUserResponseFilterSensitiveLog = (obj: AdminListGroupsForUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminListUserAuthEventsRequestFilterSensitiveLog = (obj: AdminListUserAuthEventsRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChallengeResponseTypeFilterSensitiveLog = (obj: ChallengeResponseType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventContextDataTypeFilterSensitiveLog = (obj: EventContextDataType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventFeedbackTypeFilterSensitiveLog = (obj: EventFeedbackType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventRiskTypeFilterSensitiveLog = (obj: EventRiskType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AuthEventTypeFilterSensitiveLog = (obj: AuthEventType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminListUserAuthEventsResponseFilterSensitiveLog = (obj: AdminListUserAuthEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminRemoveUserFromGroupRequestFilterSensitiveLog = (obj: AdminRemoveUserFromGroupRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminResetUserPasswordRequestFilterSensitiveLog = (obj: AdminResetUserPasswordRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminResetUserPasswordResponseFilterSensitiveLog = (obj: AdminResetUserPasswordResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminRespondToAuthChallengeRequestFilterSensitiveLog = (obj: AdminRespondToAuthChallengeRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminRespondToAuthChallengeResponseFilterSensitiveLog = (
  obj: AdminRespondToAuthChallengeResponse
): any => ({
  ...obj,
  ...(obj.AuthenticationResult && {
    AuthenticationResult: AuthenticationResultTypeFilterSensitiveLog(obj.AuthenticationResult),
  }),
});

/**
 * @internal
 */
export const SMSMfaSettingsTypeFilterSensitiveLog = (obj: SMSMfaSettingsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SoftwareTokenMfaSettingsTypeFilterSensitiveLog = (obj: SoftwareTokenMfaSettingsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminSetUserMFAPreferenceRequestFilterSensitiveLog = (obj: AdminSetUserMFAPreferenceRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminSetUserMFAPreferenceResponseFilterSensitiveLog = (obj: AdminSetUserMFAPreferenceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminSetUserPasswordRequestFilterSensitiveLog = (obj: AdminSetUserPasswordRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminSetUserPasswordResponseFilterSensitiveLog = (obj: AdminSetUserPasswordResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminSetUserSettingsRequestFilterSensitiveLog = (obj: AdminSetUserSettingsRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminSetUserSettingsResponseFilterSensitiveLog = (obj: AdminSetUserSettingsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminUpdateAuthEventFeedbackRequestFilterSensitiveLog = (
  obj: AdminUpdateAuthEventFeedbackRequest
): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminUpdateAuthEventFeedbackResponseFilterSensitiveLog = (
  obj: AdminUpdateAuthEventFeedbackResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminUpdateDeviceStatusRequestFilterSensitiveLog = (obj: AdminUpdateDeviceStatusRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminUpdateDeviceStatusResponseFilterSensitiveLog = (obj: AdminUpdateDeviceStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminUpdateUserAttributesRequestFilterSensitiveLog = (obj: AdminUpdateUserAttributesRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.UserAttributes && {
    UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AdminUpdateUserAttributesResponseFilterSensitiveLog = (obj: AdminUpdateUserAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdminUserGlobalSignOutRequestFilterSensitiveLog = (obj: AdminUserGlobalSignOutRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminUserGlobalSignOutResponseFilterSensitiveLog = (obj: AdminUserGlobalSignOutResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalyticsConfigurationTypeFilterSensitiveLog = (obj: AnalyticsConfigurationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateSoftwareTokenRequestFilterSensitiveLog = (obj: AssociateSoftwareTokenRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociateSoftwareTokenResponseFilterSensitiveLog = (obj: AssociateSoftwareTokenResponse): any => ({
  ...obj,
  ...(obj.SecretCode && { SecretCode: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChangePasswordRequestFilterSensitiveLog = (obj: ChangePasswordRequest): any => ({
  ...obj,
  ...(obj.PreviousPassword && { PreviousPassword: SENSITIVE_STRING }),
  ...(obj.ProposedPassword && { ProposedPassword: SENSITIVE_STRING }),
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChangePasswordResponseFilterSensitiveLog = (obj: ChangePasswordResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceSecretVerifierConfigTypeFilterSensitiveLog = (obj: DeviceSecretVerifierConfigType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfirmDeviceRequestFilterSensitiveLog = (obj: ConfirmDeviceRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConfirmDeviceResponseFilterSensitiveLog = (obj: ConfirmDeviceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserContextDataTypeFilterSensitiveLog = (obj: UserContextDataType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfirmForgotPasswordRequestFilterSensitiveLog = (obj: ConfirmForgotPasswordRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConfirmForgotPasswordResponseFilterSensitiveLog = (obj: ConfirmForgotPasswordResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfirmSignUpRequestFilterSensitiveLog = (obj: ConfirmSignUpRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConfirmSignUpResponseFilterSensitiveLog = (obj: ConfirmSignUpResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupRequestFilterSensitiveLog = (obj: CreateGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupResponseFilterSensitiveLog = (obj: CreateGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIdentityProviderRequestFilterSensitiveLog = (obj: CreateIdentityProviderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentityProviderTypeFilterSensitiveLog = (obj: IdentityProviderType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIdentityProviderResponseFilterSensitiveLog = (obj: CreateIdentityProviderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceServerScopeTypeFilterSensitiveLog = (obj: ResourceServerScopeType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceServerRequestFilterSensitiveLog = (obj: CreateResourceServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceServerTypeFilterSensitiveLog = (obj: ResourceServerType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourceServerResponseFilterSensitiveLog = (obj: CreateResourceServerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserImportJobRequestFilterSensitiveLog = (obj: CreateUserImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserImportJobTypeFilterSensitiveLog = (obj: UserImportJobType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserImportJobResponseFilterSensitiveLog = (obj: CreateUserImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeviceConfigurationTypeFilterSensitiveLog = (obj: DeviceConfigurationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EmailConfigurationTypeFilterSensitiveLog = (obj: EmailConfigurationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomEmailLambdaVersionConfigTypeFilterSensitiveLog = (obj: CustomEmailLambdaVersionConfigType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomSMSLambdaVersionConfigTypeFilterSensitiveLog = (obj: CustomSMSLambdaVersionConfigType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaConfigTypeFilterSensitiveLog = (obj: LambdaConfigType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PasswordPolicyTypeFilterSensitiveLog = (obj: PasswordPolicyType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserPoolPolicyTypeFilterSensitiveLog = (obj: UserPoolPolicyType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SmsConfigurationTypeFilterSensitiveLog = (obj: SmsConfigurationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserAttributeUpdateSettingsTypeFilterSensitiveLog = (obj: UserAttributeUpdateSettingsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsernameConfigurationTypeFilterSensitiveLog = (obj: UsernameConfigurationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserPoolAddOnsTypeFilterSensitiveLog = (obj: UserPoolAddOnsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VerificationMessageTemplateTypeFilterSensitiveLog = (obj: VerificationMessageTemplateType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserPoolRequestFilterSensitiveLog = (obj: CreateUserPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserPoolTypeFilterSensitiveLog = (obj: UserPoolType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserPoolResponseFilterSensitiveLog = (obj: CreateUserPoolResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TokenValidityUnitsTypeFilterSensitiveLog = (obj: TokenValidityUnitsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserPoolClientRequestFilterSensitiveLog = (obj: CreateUserPoolClientRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserPoolClientTypeFilterSensitiveLog = (obj: UserPoolClientType): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateUserPoolClientResponseFilterSensitiveLog = (obj: CreateUserPoolClientResponse): any => ({
  ...obj,
  ...(obj.UserPoolClient && { UserPoolClient: UserPoolClientTypeFilterSensitiveLog(obj.UserPoolClient) }),
});

/**
 * @internal
 */
export const CustomDomainConfigTypeFilterSensitiveLog = (obj: CustomDomainConfigType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserPoolDomainRequestFilterSensitiveLog = (obj: CreateUserPoolDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserPoolDomainResponseFilterSensitiveLog = (obj: CreateUserPoolDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupRequestFilterSensitiveLog = (obj: DeleteGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIdentityProviderRequestFilterSensitiveLog = (obj: DeleteIdentityProviderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourceServerRequestFilterSensitiveLog = (obj: DeleteResourceServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserRequestFilterSensitiveLog = (obj: DeleteUserRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteUserAttributesRequestFilterSensitiveLog = (obj: DeleteUserAttributesRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteUserAttributesResponseFilterSensitiveLog = (obj: DeleteUserAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserPoolRequestFilterSensitiveLog = (obj: DeleteUserPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserPoolClientRequestFilterSensitiveLog = (obj: DeleteUserPoolClientRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteUserPoolDomainRequestFilterSensitiveLog = (obj: DeleteUserPoolDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserPoolDomainResponseFilterSensitiveLog = (obj: DeleteUserPoolDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityProviderRequestFilterSensitiveLog = (obj: DescribeIdentityProviderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIdentityProviderResponseFilterSensitiveLog = (obj: DescribeIdentityProviderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourceServerRequestFilterSensitiveLog = (obj: DescribeResourceServerRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourceServerResponseFilterSensitiveLog = (obj: DescribeResourceServerResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRiskConfigurationRequestFilterSensitiveLog = (obj: DescribeRiskConfigurationRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CompromisedCredentialsActionsTypeFilterSensitiveLog = (obj: CompromisedCredentialsActionsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompromisedCredentialsRiskConfigurationTypeFilterSensitiveLog = (
  obj: CompromisedCredentialsRiskConfigurationType
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RiskExceptionConfigurationTypeFilterSensitiveLog = (obj: RiskExceptionConfigurationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RiskConfigurationTypeFilterSensitiveLog = (obj: RiskConfigurationType): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeRiskConfigurationResponseFilterSensitiveLog = (obj: DescribeRiskConfigurationResponse): any => ({
  ...obj,
  ...(obj.RiskConfiguration && { RiskConfiguration: RiskConfigurationTypeFilterSensitiveLog(obj.RiskConfiguration) }),
});

/**
 * @internal
 */
export const DescribeUserImportJobRequestFilterSensitiveLog = (obj: DescribeUserImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserImportJobResponseFilterSensitiveLog = (obj: DescribeUserImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserPoolRequestFilterSensitiveLog = (obj: DescribeUserPoolRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserPoolResponseFilterSensitiveLog = (obj: DescribeUserPoolResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserPoolClientRequestFilterSensitiveLog = (obj: DescribeUserPoolClientRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeUserPoolClientResponseFilterSensitiveLog = (obj: DescribeUserPoolClientResponse): any => ({
  ...obj,
  ...(obj.UserPoolClient && { UserPoolClient: UserPoolClientTypeFilterSensitiveLog(obj.UserPoolClient) }),
});

/**
 * @internal
 */
export const DescribeUserPoolDomainRequestFilterSensitiveLog = (obj: DescribeUserPoolDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainDescriptionTypeFilterSensitiveLog = (obj: DomainDescriptionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserPoolDomainResponseFilterSensitiveLog = (obj: DescribeUserPoolDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ForgetDeviceRequestFilterSensitiveLog = (obj: ForgetDeviceRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ForgotPasswordRequestFilterSensitiveLog = (obj: ForgotPasswordRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CodeDeliveryDetailsTypeFilterSensitiveLog = (obj: CodeDeliveryDetailsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ForgotPasswordResponseFilterSensitiveLog = (obj: ForgotPasswordResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCSVHeaderRequestFilterSensitiveLog = (obj: GetCSVHeaderRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCSVHeaderResponseFilterSensitiveLog = (obj: GetCSVHeaderResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDeviceRequestFilterSensitiveLog = (obj: GetDeviceRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetDeviceResponseFilterSensitiveLog = (obj: GetDeviceResponse): any => ({
  ...obj,
  ...(obj.Device && { Device: DeviceTypeFilterSensitiveLog(obj.Device) }),
});

/**
 * @internal
 */
export const GetGroupRequestFilterSensitiveLog = (obj: GetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupResponseFilterSensitiveLog = (obj: GetGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIdentityProviderByIdentifierRequestFilterSensitiveLog = (
  obj: GetIdentityProviderByIdentifierRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetIdentityProviderByIdentifierResponseFilterSensitiveLog = (
  obj: GetIdentityProviderByIdentifierResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSigningCertificateRequestFilterSensitiveLog = (obj: GetSigningCertificateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSigningCertificateResponseFilterSensitiveLog = (obj: GetSigningCertificateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUICustomizationRequestFilterSensitiveLog = (obj: GetUICustomizationRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UICustomizationTypeFilterSensitiveLog = (obj: UICustomizationType): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetUICustomizationResponseFilterSensitiveLog = (obj: GetUICustomizationResponse): any => ({
  ...obj,
  ...(obj.UICustomization && { UICustomization: UICustomizationTypeFilterSensitiveLog(obj.UICustomization) }),
});

/**
 * @internal
 */
export const GetUserRequestFilterSensitiveLog = (obj: GetUserRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetUserResponseFilterSensitiveLog = (obj: GetUserResponse): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.UserAttributes && {
    UserAttributes: obj.UserAttributes.map((item) => AttributeTypeFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetUserAttributeVerificationCodeRequestFilterSensitiveLog = (
  obj: GetUserAttributeVerificationCodeRequest
): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetUserAttributeVerificationCodeResponseFilterSensitiveLog = (
  obj: GetUserAttributeVerificationCodeResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUserPoolMfaConfigRequestFilterSensitiveLog = (obj: GetUserPoolMfaConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SmsMfaConfigTypeFilterSensitiveLog = (obj: SmsMfaConfigType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SoftwareTokenMfaConfigTypeFilterSensitiveLog = (obj: SoftwareTokenMfaConfigType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUserPoolMfaConfigResponseFilterSensitiveLog = (obj: GetUserPoolMfaConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlobalSignOutRequestFilterSensitiveLog = (obj: GlobalSignOutRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GlobalSignOutResponseFilterSensitiveLog = (obj: GlobalSignOutResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InitiateAuthRequestFilterSensitiveLog = (obj: InitiateAuthRequest): any => ({
  ...obj,
  ...(obj.AuthParameters && { AuthParameters: SENSITIVE_STRING }),
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InitiateAuthResponseFilterSensitiveLog = (obj: InitiateAuthResponse): any => ({
  ...obj,
  ...(obj.AuthenticationResult && {
    AuthenticationResult: AuthenticationResultTypeFilterSensitiveLog(obj.AuthenticationResult),
  }),
});

/**
 * @internal
 */
export const ListDevicesRequestFilterSensitiveLog = (obj: ListDevicesRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDevicesResponseFilterSensitiveLog = (obj: ListDevicesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupsRequestFilterSensitiveLog = (obj: ListGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGroupsResponseFilterSensitiveLog = (obj: ListGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIdentityProvidersRequestFilterSensitiveLog = (obj: ListIdentityProvidersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProviderDescriptionFilterSensitiveLog = (obj: ProviderDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIdentityProvidersResponseFilterSensitiveLog = (obj: ListIdentityProvidersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceServersRequestFilterSensitiveLog = (obj: ListResourceServersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceServersResponseFilterSensitiveLog = (obj: ListResourceServersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserImportJobsRequestFilterSensitiveLog = (obj: ListUserImportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserImportJobsResponseFilterSensitiveLog = (obj: ListUserImportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserPoolClientsRequestFilterSensitiveLog = (obj: ListUserPoolClientsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserPoolClientDescriptionFilterSensitiveLog = (obj: UserPoolClientDescription): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListUserPoolClientsResponseFilterSensitiveLog = (obj: ListUserPoolClientsResponse): any => ({
  ...obj,
  ...(obj.UserPoolClients && {
    UserPoolClients: obj.UserPoolClients.map((item) => UserPoolClientDescriptionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListUserPoolsRequestFilterSensitiveLog = (obj: ListUserPoolsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserPoolDescriptionTypeFilterSensitiveLog = (obj: UserPoolDescriptionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserPoolsResponseFilterSensitiveLog = (obj: ListUserPoolsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsersRequestFilterSensitiveLog = (obj: ListUsersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsersResponseFilterSensitiveLog = (obj: ListUsersResponse): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserTypeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListUsersInGroupRequestFilterSensitiveLog = (obj: ListUsersInGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsersInGroupResponseFilterSensitiveLog = (obj: ListUsersInGroupResponse): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserTypeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ResendConfirmationCodeRequestFilterSensitiveLog = (obj: ResendConfirmationCodeRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResendConfirmationCodeResponseFilterSensitiveLog = (obj: ResendConfirmationCodeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RespondToAuthChallengeRequestFilterSensitiveLog = (obj: RespondToAuthChallengeRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RespondToAuthChallengeResponseFilterSensitiveLog = (obj: RespondToAuthChallengeResponse): any => ({
  ...obj,
  ...(obj.AuthenticationResult && {
    AuthenticationResult: AuthenticationResultTypeFilterSensitiveLog(obj.AuthenticationResult),
  }),
});

/**
 * @internal
 */
export const RevokeTokenRequestFilterSensitiveLog = (obj: RevokeTokenRequest): any => ({
  ...obj,
  ...(obj.Token && { Token: SENSITIVE_STRING }),
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RevokeTokenResponseFilterSensitiveLog = (obj: RevokeTokenResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetRiskConfigurationRequestFilterSensitiveLog = (obj: SetRiskConfigurationRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetRiskConfigurationResponseFilterSensitiveLog = (obj: SetRiskConfigurationResponse): any => ({
  ...obj,
  ...(obj.RiskConfiguration && { RiskConfiguration: RiskConfigurationTypeFilterSensitiveLog(obj.RiskConfiguration) }),
});

/**
 * @internal
 */
export const SetUICustomizationRequestFilterSensitiveLog = (obj: SetUICustomizationRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetUICustomizationResponseFilterSensitiveLog = (obj: SetUICustomizationResponse): any => ({
  ...obj,
  ...(obj.UICustomization && { UICustomization: UICustomizationTypeFilterSensitiveLog(obj.UICustomization) }),
});

/**
 * @internal
 */
export const SetUserMFAPreferenceRequestFilterSensitiveLog = (obj: SetUserMFAPreferenceRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetUserMFAPreferenceResponseFilterSensitiveLog = (obj: SetUserMFAPreferenceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetUserPoolMfaConfigRequestFilterSensitiveLog = (obj: SetUserPoolMfaConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetUserPoolMfaConfigResponseFilterSensitiveLog = (obj: SetUserPoolMfaConfigResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetUserSettingsRequestFilterSensitiveLog = (obj: SetUserSettingsRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SetUserSettingsResponseFilterSensitiveLog = (obj: SetUserSettingsResponse): any => ({
  ...obj,
});
