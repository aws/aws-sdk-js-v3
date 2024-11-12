// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CognitoIdentityProviderServiceException as __BaseException } from "./CognitoIdentityProviderServiceException";

/**
 * @public
 * @enum
 */
export const RecoveryOptionNameType = {
  ADMIN_ONLY: "admin_only",
  VERIFIED_EMAIL: "verified_email",
  VERIFIED_PHONE_NUMBER: "verified_phone_number",
} as const;

/**
 * @public
 */
export type RecoveryOptionNameType = (typeof RecoveryOptionNameType)[keyof typeof RecoveryOptionNameType];

/**
 * <p>A map containing a priority as a key, and recovery method name as a value.</p>
 * @public
 */
export interface RecoveryOptionType {
  /**
   * <p>A positive integer specifying priority of a method with 1 being the highest
   *             priority.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The recovery method for a user.</p>
   * @public
   */
  Name: RecoveryOptionNameType | undefined;
}

/**
 * <p>The data type for <code>AccountRecoverySetting</code>.</p>
 * @public
 */
export interface AccountRecoverySettingType {
  /**
   * <p>The list of <code>RecoveryOptionTypes</code>.</p>
   * @public
   */
  RecoveryMechanisms?: RecoveryOptionType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AccountTakeoverEventActionType = {
  BLOCK: "BLOCK",
  MFA_IF_CONFIGURED: "MFA_IF_CONFIGURED",
  MFA_REQUIRED: "MFA_REQUIRED",
  NO_ACTION: "NO_ACTION",
} as const;

/**
 * @public
 */
export type AccountTakeoverEventActionType =
  (typeof AccountTakeoverEventActionType)[keyof typeof AccountTakeoverEventActionType];

/**
 * <p>Account takeover action type.</p>
 * @public
 */
export interface AccountTakeoverActionType {
  /**
   * <p>Flag specifying whether to send a notification.</p>
   * @public
   */
  Notify: boolean | undefined;

  /**
   * <p>The action to take in response to the account takeover action. Valid values are as
   *             follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code> Choosing this action will block the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_IF_CONFIGURED</code> Present an MFA challenge if user has configured
   *                     it, else allow the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_REQUIRED</code> Present an MFA challenge if user has configured it,
   *                     else block the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_ACTION</code> Allow the user to sign in.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EventAction: AccountTakeoverEventActionType | undefined;
}

/**
 * <p>Account takeover actions type.</p>
 * @public
 */
export interface AccountTakeoverActionsType {
  /**
   * <p>Action to take for a low risk.</p>
   * @public
   */
  LowAction?: AccountTakeoverActionType | undefined;

  /**
   * <p>Action to take for a medium risk.</p>
   * @public
   */
  MediumAction?: AccountTakeoverActionType | undefined;

  /**
   * <p>Action to take for a high risk.</p>
   * @public
   */
  HighAction?: AccountTakeoverActionType | undefined;
}

/**
 * <p>The notify email type.</p>
 * @public
 */
export interface NotifyEmailType {
  /**
   * <p>The email subject.</p>
   * @public
   */
  Subject: string | undefined;

  /**
   * <p>The email HTML body.</p>
   * @public
   */
  HtmlBody?: string | undefined;

  /**
   * <p>The email text body.</p>
   * @public
   */
  TextBody?: string | undefined;
}

/**
 * <p>The notify configuration type.</p>
 * @public
 */
export interface NotifyConfigurationType {
  /**
   * <p>The email address that is sending the email. The address must be either individually
   *             verified with Amazon Simple Email Service, or from a domain that has been verified with Amazon SES.</p>
   * @public
   */
  From?: string | undefined;

  /**
   * <p>The destination to which the receiver of an email should reply to.</p>
   * @public
   */
  ReplyTo?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity that is associated with the sending
   *             authorization policy. This identity permits Amazon Cognito to send for the email address
   *             specified in the <code>From</code> parameter.</p>
   * @public
   */
  SourceArn: string | undefined;

  /**
   * <p>Email template used when a detected risk event is blocked.</p>
   * @public
   */
  BlockEmail?: NotifyEmailType | undefined;

  /**
   * <p>The email template used when a detected risk event is allowed.</p>
   * @public
   */
  NoActionEmail?: NotifyEmailType | undefined;

  /**
   * <p>The multi-factor authentication (MFA) email template used when MFA is challenged as
   *             part of a detected risk.</p>
   * @public
   */
  MfaEmail?: NotifyEmailType | undefined;
}

/**
 * <p>Configuration for mitigation actions and notification for different levels of risk
 *             detected for a potential account takeover.</p>
 * @public
 */
export interface AccountTakeoverRiskConfigurationType {
  /**
   * <p>The notify configuration used to construct email notifications.</p>
   * @public
   */
  NotifyConfiguration?: NotifyConfigurationType | undefined;

  /**
   * <p>Account takeover risk configuration actions.</p>
   * @public
   */
  Actions: AccountTakeoverActionsType | undefined;
}

/**
 * @public
 * @enum
 */
export const AttributeDataType = {
  BOOLEAN: "Boolean",
  DATETIME: "DateTime",
  NUMBER: "Number",
  STRING: "String",
} as const;

/**
 * @public
 */
export type AttributeDataType = (typeof AttributeDataType)[keyof typeof AttributeDataType];

/**
 * <p>The minimum and maximum values of an attribute that is of the number data type.</p>
 * @public
 */
export interface NumberAttributeConstraintsType {
  /**
   * <p>The minimum value of an attribute that is of the number data type.</p>
   * @public
   */
  MinValue?: string | undefined;

  /**
   * <p>The maximum length of a number attribute value. Must be a number less than or equal to
   *                 <code>2^1023</code>, represented as a string with a length of 131072 characters or
   *             fewer.</p>
   * @public
   */
  MaxValue?: string | undefined;
}

/**
 * <p>The constraints associated with a string attribute.</p>
 * @public
 */
export interface StringAttributeConstraintsType {
  /**
   * <p>The minimum length.</p>
   * @public
   */
  MinLength?: string | undefined;

  /**
   * <p>The maximum length of a string attribute value. Must be a number less than or equal to
   *                 <code>2^1023</code>, represented as a string with a length of 131072 characters or
   *             fewer.</p>
   * @public
   */
  MaxLength?: string | undefined;
}

/**
 * <p>A list of the user attributes and their properties in your user pool. The attribute
 *             schema contains standard attributes, custom attributes with a <code>custom:</code>
 *             prefix, and developer attributes with a <code>dev:</code> prefix. For more information,
 *             see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html">User pool
 *                 attributes</a>.</p>
 *          <p>Developer-only attributes are a legacy feature of user pools, are read-only to all app
 *             clients. You can create and update developer-only attributes only with IAM-authenticated
 *             API operations. Use app client read/write permissions instead.</p>
 * @public
 */
export interface SchemaAttributeType {
  /**
   * <p>The name of your user pool attribute. When you create or update a user pool, adding a
   *             schema attribute creates a custom or developer-only attribute. When you add an attribute
   *             with a <code>Name</code> value of <code>MyAttribute</code>, Amazon Cognito creates the custom
   *             attribute <code>custom:MyAttribute</code>. When <code>DeveloperOnlyAttribute</code> is
   *                 <code>true</code>, Amazon Cognito creates your attribute as <code>dev:MyAttribute</code>. In
   *             an operation that describes a user pool, Amazon Cognito returns this value as <code>value</code>
   *             for standard attributes, <code>custom:value</code> for custom attributes, and
   *                 <code>dev:value</code> for developer-only attributes..</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The data format of the values for your attribute. When you choose an
   *                 <code>AttributeDataType</code>, Amazon Cognito validates the input against the data type. A
   *             custom attribute value in your user's ID token is always a string, for example
   *                 <code>"custom:isMember" : "true"</code> or <code>"custom:YearsAsMember" :
   *                 "12"</code>. </p>
   * @public
   */
  AttributeDataType?: AttributeDataType | undefined;

  /**
   * <note>
   *             <p>You should use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserPoolClientType.html#CognitoUserPools-Type-UserPoolClientType-WriteAttributes">WriteAttributes</a> in the user pool client to control how attributes can
   *                 be mutated for new use cases instead of using
   *                 <code>DeveloperOnlyAttribute</code>.</p>
   *          </note>
   *          <p>Specifies whether the attribute type is developer only. This attribute can only be
   *             modified by an administrator. Users won't be able to modify this attribute using their
   *             access token. For example, <code>DeveloperOnlyAttribute</code> can be modified using
   *             AdminUpdateUserAttributes but can't be updated using UpdateUserAttributes.</p>
   * @public
   */
  DeveloperOnlyAttribute?: boolean | undefined;

  /**
   * <p>Specifies whether the value of the attribute can be changed.</p>
   *          <p>Any user pool attribute whose value you map from an IdP attribute must be mutable,
   *             with a parameter value of <code>true</code>. Amazon Cognito updates mapped attributes when users
   *             sign in to your application through an IdP. If an attribute is immutable, Amazon Cognito throws
   *             an error when it attempts to update the attribute. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying Identity Provider Attribute Mappings for Your User
   *                 Pool</a>.</p>
   * @public
   */
  Mutable?: boolean | undefined;

  /**
   * <p>Specifies whether a user pool attribute is required. If the attribute is required and
   *             the user doesn't provide a value, registration or sign-in will fail.</p>
   * @public
   */
  Required?: boolean | undefined;

  /**
   * <p>Specifies the constraints for an attribute of the number type.</p>
   * @public
   */
  NumberAttributeConstraints?: NumberAttributeConstraintsType | undefined;

  /**
   * <p>Specifies the constraints for an attribute of the string type.</p>
   * @public
   */
  StringAttributeConstraints?: StringAttributeConstraintsType | undefined;
}

/**
 * <p>Represents the request to add custom attributes.</p>
 * @public
 */
export interface AddCustomAttributesRequest {
  /**
   * <p>The user pool ID for the user pool where you want to add custom attributes.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>An array of custom attributes, such as Mutable and Name.</p>
   * @public
   */
  CustomAttributes: SchemaAttributeType[] | undefined;
}

/**
 * <p>Represents the response from the server for the request to add custom
 *             attributes.</p>
 * @public
 */
export interface AddCustomAttributesResponse {}

/**
 * <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface AdminAddUserToGroupRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The name of the group that you want to add your user to.</p>
   * @public
   */
  GroupName: string | undefined;
}

/**
 * <p>This exception is thrown when a user isn't found.</p>
 * @public
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
 * <p>Confirm a user's registration as a user pool administrator.</p>
 * @public
 */
export interface AdminConfirmSignUpRequest {
  /**
   * <p>The user pool ID for which you want to confirm user registration.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>If your user pool configuration includes triggers, the AdminConfirmSignUp API action
   *             invokes the Lambda function that is specified for the <i>post
   *                 confirmation</i> trigger. When Amazon Cognito invokes this function, it passes a JSON
   *             payload, which the function receives as input. In this payload, the
   *                 <code>clientMetadata</code> attribute provides the data that you assigned to the
   *             ClientMetadata parameter in your AdminConfirmSignUp request. In your function code in
   *             Lambda, you can process the ClientMetadata value to enhance your workflow for your
   *             specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>Represents the response from the server for the request to confirm
 *             registration.</p>
 * @public
 */
export interface AdminConfirmSignUpResponse {}

/**
 * <p>This exception is thrown when Amazon Cognito encounters an invalid Lambda response.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const DeliveryMediumType = {
  EMAIL: "EMAIL",
  SMS: "SMS",
} as const;

/**
 * @public
 */
export type DeliveryMediumType = (typeof DeliveryMediumType)[keyof typeof DeliveryMediumType];

/**
 * @public
 * @enum
 */
export const MessageActionType = {
  RESEND: "RESEND",
  SUPPRESS: "SUPPRESS",
} as const;

/**
 * @public
 */
export type MessageActionType = (typeof MessageActionType)[keyof typeof MessageActionType];

/**
 * <p>Specifies whether the attribute is standard or custom.</p>
 * @public
 */
export interface AttributeType {
  /**
   * <p>The name of the attribute.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The value of the attribute.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Represents the request to create a user in the specified user pool.</p>
 * @public
 */
export interface AdminCreateUserRequest {
  /**
   * <p>The user pool ID for the user pool where the user will be created.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The value that you want to set as the username sign-in attribute. The following
   *             conditions apply to the username parameter.</p>
   *          <ul>
   *             <li>
   *                <p>The username can't be a duplicate of another username in the same user
   *                     pool.</p>
   *             </li>
   *             <li>
   *                <p>You can't change the value of a username after you create it.</p>
   *             </li>
   *             <li>
   *                <p>You can only provide a value if usernames are a valid sign-in attribute for
   *                     your user pool. If your user pool only supports phone numbers or email addresses
   *                     as sign-in attributes, Amazon Cognito automatically generates a username value. For more
   *                     information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-aliases">Customizing sign-in attributes</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>An array of name-value pairs that contain user attributes and attribute values to be
   *             set for the user to be created. You can create a user without specifying any attributes
   *             other than <code>Username</code>. However, any attributes that you specify as required
   *             (when creating a user pool or in the <b>Attributes</b> tab of
   *             the console) either you should supply (in your call to <code>AdminCreateUser</code>) or
   *             the user should supply (when they sign up in response to your welcome message).</p>
   *          <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   *          <p>To send a message inviting the user to sign up, you must specify the user's email
   *             address or phone number. You can do this in your call to AdminCreateUser or in the
   *                 <b>Users</b> tab of the Amazon Cognito console for managing your
   *             user pools.</p>
   *          <p>In your call to <code>AdminCreateUser</code>, you can set the
   *                 <code>email_verified</code> attribute to <code>True</code>, and you can set the
   *                 <code>phone_number_verified</code> attribute to <code>True</code>. You can also do
   *             this by calling <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html">AdminUpdateUserAttributes</a>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>email</b>: The email address of the user to whom
   *                     the message that contains the code and username will be sent. Required if the
   *                         <code>email_verified</code> attribute is set to <code>True</code>, or if
   *                         <code>"EMAIL"</code> is specified in the <code>DesiredDeliveryMediums</code>
   *                     parameter.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>phone_number</b>: The phone number of the user to
   *                     whom the message that contains the code and username will be sent. Required if
   *                     the <code>phone_number_verified</code> attribute is set to <code>True</code>, or
   *                     if <code>"SMS"</code> is specified in the <code>DesiredDeliveryMediums</code>
   *                     parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  UserAttributes?: AttributeType[] | undefined;

  /**
   * <p>Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda
   *     trigger. This set of key-value pairs are for custom validation of information that you
   *     collect from your users but don't need to retain.</p>
   *          <p>Your Lambda function can analyze this additional data and act on it. Your function
   *     might perform external API operations like logging user attributes and validation data
   *     to Amazon CloudWatch Logs. Validation data might also affect the response that your function returns
   *     to Amazon Cognito, like automatically confirming the user if they sign up from within your
   *     network.</p>
   *          <p>For more information about the pre sign-up Lambda trigger, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html">Pre sign-up Lambda trigger</a>.</p>
   * @public
   */
  ValidationData?: AttributeType[] | undefined;

  /**
   * <p>The user's temporary password. This password must conform to the password policy that
   *             you specified when you created the user pool.</p>
   *          <p>The temporary password is valid only once. To complete the Admin Create User flow, the
   *             user must enter the temporary password in the sign-in page, along with a new password to
   *             be used in all future sign-ins.</p>
   *          <p>This parameter isn't required. If you don't specify a value, Amazon Cognito generates one for
   *             you.</p>
   *          <p>The temporary password can only be used until the user account expiration limit that
   *             you set for your user pool. To reset the account after that time limit, you must call
   *                 <code>AdminCreateUser</code> again and specify <code>RESEND</code> for the
   *                 <code>MessageAction</code> parameter.</p>
   * @public
   */
  TemporaryPassword?: string | undefined;

  /**
   * <p>This parameter is used only if the <code>phone_number_verified</code> or
   *                 <code>email_verified</code> attribute is set to <code>True</code>. Otherwise, it is
   *             ignored.</p>
   *          <p>If this parameter is set to <code>True</code> and the phone number or email address
   *             specified in the UserAttributes parameter already exists as an alias with a different
   *             user, the API call will migrate the alias from the previous user to the newly created
   *             user. The previous user will no longer be able to log in using that alias.</p>
   *          <p>If this parameter is set to <code>False</code>, the API throws an
   *                 <code>AliasExistsException</code> error if the alias already exists. The default
   *             value is <code>False</code>.</p>
   * @public
   */
  ForceAliasCreation?: boolean | undefined;

  /**
   * <p>Set to <code>RESEND</code> to resend the invitation message to a user that already
   *             exists and reset the expiration limit on the user's account. Set to
   *                 <code>SUPPRESS</code> to suppress sending the message. You can specify only one
   *             value.</p>
   * @public
   */
  MessageAction?: MessageActionType | undefined;

  /**
   * <p>Specify <code>"EMAIL"</code> if email will be used to send the welcome message.
   *             Specify <code>"SMS"</code> if the phone number will be used. The default value is
   *                 <code>"SMS"</code>. You can specify more than one value.</p>
   * @public
   */
  DesiredDeliveryMediums?: DeliveryMediumType[] | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the AdminCreateUser API action, Amazon Cognito invokes the function that is assigned
   *             to the <i>pre sign-up</i> trigger. When Amazon Cognito invokes this function, it
   *             passes a JSON payload, which the function receives as input. This payload contains a
   *                 <code>clientMetadata</code> attribute, which provides the data that you assigned to
   *             the ClientMetadata parameter in your AdminCreateUser request. In your function code in
   *             Lambda, you can process the <code>clientMetadata</code> value to enhance your
   *             workflow for your specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>
 *             <i>This data type is no longer supported.</i> Applies only to SMS
 *             multi-factor authentication (MFA) configurations. Does not apply to time-based one-time
 *             password (TOTP) software token MFA configurations.</p>
 * @public
 */
export interface MFAOptionType {
  /**
   * <p>The delivery medium to send the MFA code. You can use this parameter to set only the
   *                 <code>SMS</code> delivery medium value.</p>
   * @public
   */
  DeliveryMedium?: DeliveryMediumType | undefined;

  /**
   * <p>The attribute name of the MFA option type. The only valid value is
   *                 <code>phone_number</code>.</p>
   * @public
   */
  AttributeName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UserStatusType = {
  ARCHIVED: "ARCHIVED",
  COMPROMISED: "COMPROMISED",
  CONFIRMED: "CONFIRMED",
  EXTERNAL_PROVIDER: "EXTERNAL_PROVIDER",
  FORCE_CHANGE_PASSWORD: "FORCE_CHANGE_PASSWORD",
  RESET_REQUIRED: "RESET_REQUIRED",
  UNCONFIRMED: "UNCONFIRMED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type UserStatusType = (typeof UserStatusType)[keyof typeof UserStatusType];

/**
 * <p>A user profile in a Amazon Cognito user pool.</p>
 * @public
 */
export interface UserType {
  /**
   * <p>The user name of the user you want to describe.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>A container with information about the user type attributes.</p>
   * @public
   */
  Attributes?: AttributeType[] | undefined;

  /**
   * <p>The creation date of the user.</p>
   * @public
   */
  UserCreateDate?: Date | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  UserLastModifiedDate?: Date | undefined;

  /**
   * <p>Specifies whether the user is enabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The user status. This can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>UNCONFIRMED - User has been created but not confirmed.</p>
   *             </li>
   *             <li>
   *                <p>CONFIRMED - User has been confirmed.</p>
   *             </li>
   *             <li>
   *                <p>EXTERNAL_PROVIDER - User signed in with a third-party IdP.</p>
   *             </li>
   *             <li>
   *                <p>UNKNOWN - User status isn't known.</p>
   *             </li>
   *             <li>
   *                <p>RESET_REQUIRED - User is confirmed, but the user must request a code and reset
   *                     their password before they can sign in.</p>
   *             </li>
   *             <li>
   *                <p>FORCE_CHANGE_PASSWORD - The user is confirmed and the user can sign in using a
   *                     temporary password, but on first sign-in, the user must change their password to
   *                     a new value before doing anything else. </p>
   *             </li>
   *          </ul>
   * @public
   */
  UserStatus?: UserStatusType | undefined;

  /**
   * <p>The MFA options for the user.</p>
   * @public
   */
  MFAOptions?: MFAOptionType[] | undefined;
}

/**
 * <p>Represents the response from the server to the request to create the user.</p>
 * @public
 */
export interface AdminCreateUserResponse {
  /**
   * <p>The newly created user.</p>
   * @public
   */
  User?: UserType | undefined;
}

/**
 * <p>This exception is thrown when a verification code fails to deliver
 *             successfully.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface MessageTemplateType {
  /**
   * <p>The message template for SMS messages.</p>
   * @public
   */
  SMSMessage?: string | undefined;

  /**
   * <p>The message template for email messages. EmailMessage is allowed only if <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is DEVELOPER. </p>
   * @public
   */
  EmailMessage?: string | undefined;

  /**
   * <p>The subject line for email messages. EmailSubject is allowed only if <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is DEVELOPER. </p>
   * @public
   */
  EmailSubject?: string | undefined;
}

/**
 * <p>The configuration for creating a new user profile.</p>
 * @public
 */
export interface AdminCreateUserConfigType {
  /**
   * <p>Set to <code>True</code> if only the administrator is allowed to create user profiles.
   *             Set to <code>False</code> if users can sign themselves up via an app.</p>
   * @public
   */
  AllowAdminCreateUserOnly?: boolean | undefined;

  /**
   * <p>The user account expiration limit, in days, after which a new account that hasn't
   *             signed in is no longer usable. To reset the account after that time limit, you must call
   *                 <code>AdminCreateUser</code> again, specifying <code>"RESEND"</code> for the
   *                 <code>MessageAction</code> parameter. The default value for this parameter is
   *             7.</p>
   *          <note>
   *             <p>If you set a value for <code>TemporaryPasswordValidityDays</code> in
   *                     <code>PasswordPolicy</code>, that value will be used, and
   *                     <code>UnusedAccountValidityDays</code> will be no longer be an available
   *                 parameter for that user pool.</p>
   *          </note>
   * @public
   */
  UnusedAccountValidityDays?: number | undefined;

  /**
   * <p>The message template to be used for the welcome message to new users.</p>
   *          <p>See also <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-message-customizations.html#cognito-user-pool-settings-user-invitation-message-customization">Customizing User Invitation Messages</a>.</p>
   * @public
   */
  InviteMessageTemplate?: MessageTemplateType | undefined;
}

/**
 * <p>Represents the request to delete a user as an administrator.</p>
 * @public
 */
export interface AdminDeleteUserRequest {
  /**
   * <p>The user pool ID for the user pool where you want to delete the user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;
}

/**
 * <p>Represents the request to delete user attributes as an administrator.</p>
 * @public
 */
export interface AdminDeleteUserAttributesRequest {
  /**
   * <p>The user pool ID for the user pool where you want to delete user attributes.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>An array of strings representing the user attribute names you want to delete.</p>
   *          <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   * @public
   */
  UserAttributeNames: string[] | undefined;
}

/**
 * <p>Represents the response received from the server for a request to delete user
 *             attributes.</p>
 * @public
 */
export interface AdminDeleteUserAttributesResponse {}

/**
 * <p>A container for information about an IdP for a user pool.</p>
 * @public
 */
export interface ProviderUserIdentifierType {
  /**
   * <p>The name of the provider, such as Facebook, Google, or Login with Amazon.</p>
   * @public
   */
  ProviderName?: string | undefined;

  /**
   * <p>The name of the provider attribute to link to, such as <code>NameID</code>.</p>
   * @public
   */
  ProviderAttributeName?: string | undefined;

  /**
   * <p>The value of the provider attribute to link to, such as
   *             <code>xxxxx_account</code>.</p>
   * @public
   */
  ProviderAttributeValue?: string | undefined;
}

/**
 * @public
 */
export interface AdminDisableProviderForUserRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user to be disabled.</p>
   * @public
   */
  User: ProviderUserIdentifierType | undefined;
}

/**
 * @public
 */
export interface AdminDisableProviderForUserResponse {}

/**
 * <p>This exception is thrown when a user tries to confirm the account with an email
 *             address or phone number that has already been supplied as an alias for a different user
 *             profile. This exception indicates that an account with this email address or phone
 *             already exists in a user pool that you've configured to use email address or phone
 *             number as a sign-in alias.</p>
 * @public
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
 * @public
 */
export interface AdminDisableUserRequest {
  /**
   * <p>The user pool ID for the user pool where you want to disable the user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;
}

/**
 * <p>Represents the response received from the server to disable the user as an
 *             administrator.</p>
 * @public
 */
export interface AdminDisableUserResponse {}

/**
 * <p>Represents the request that enables the user as an administrator.</p>
 * @public
 */
export interface AdminEnableUserRequest {
  /**
   * <p>The user pool ID for the user pool where you want to enable the user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;
}

/**
 * <p>Represents the response from the server for the request to enable a user as an
 *             administrator.</p>
 * @public
 */
export interface AdminEnableUserResponse {}

/**
 * <p>Sends the forgot device request, as an administrator.</p>
 * @public
 */
export interface AdminForgetDeviceRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The device key.</p>
   * @public
   */
  DeviceKey: string | undefined;
}

/**
 * <p>This exception is thrown when the user pool configuration is not valid.</p>
 * @public
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
 * @public
 */
export interface AdminGetDeviceRequest {
  /**
   * <p>The device key.</p>
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;
}

/**
 * <p>The device type.</p>
 * @public
 */
export interface DeviceType {
  /**
   * <p>The device key.</p>
   * @public
   */
  DeviceKey?: string | undefined;

  /**
   * <p>The device attributes.</p>
   * @public
   */
  DeviceAttributes?: AttributeType[] | undefined;

  /**
   * <p>The creation date of the device.</p>
   * @public
   */
  DeviceCreateDate?: Date | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  DeviceLastModifiedDate?: Date | undefined;

  /**
   * <p>The date when the device was last authenticated.</p>
   * @public
   */
  DeviceLastAuthenticatedDate?: Date | undefined;
}

/**
 * <p>Gets the device response, as an administrator.</p>
 * @public
 */
export interface AdminGetDeviceResponse {
  /**
   * <p>The device.</p>
   * @public
   */
  Device: DeviceType | undefined;
}

/**
 * <p>Represents the request to get the specified user as an administrator.</p>
 * @public
 */
export interface AdminGetUserRequest {
  /**
   * <p>The user pool ID for the user pool where you want to get information about the
   *             user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;
}

/**
 * <p>Represents the response from the server from the request to get the specified user as
 *             an administrator.</p>
 * @public
 */
export interface AdminGetUserResponse {
  /**
   * <p>The username of the user that you requested.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   * @public
   */
  UserAttributes?: AttributeType[] | undefined;

  /**
   * <p>The date the user was created.</p>
   * @public
   */
  UserCreateDate?: Date | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  UserLastModifiedDate?: Date | undefined;

  /**
   * <p>Indicates that the status is <code>enabled</code>.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The user status. Can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>UNCONFIRMED - User has been created but not confirmed.</p>
   *             </li>
   *             <li>
   *                <p>CONFIRMED - User has been confirmed.</p>
   *             </li>
   *             <li>
   *                <p>UNKNOWN - User status isn't known.</p>
   *             </li>
   *             <li>
   *                <p>RESET_REQUIRED - User is confirmed, but the user must request a code and reset
   *                     their password before they can sign in.</p>
   *             </li>
   *             <li>
   *                <p>FORCE_CHANGE_PASSWORD - The user is confirmed and the user can sign in using a
   *                     temporary password, but on first sign-in, the user must change their password to
   *                     a new value before doing anything else. </p>
   *             </li>
   *          </ul>
   * @public
   */
  UserStatus?: UserStatusType | undefined;

  /**
   * <p>
   *             <i>This response parameter is no longer supported.</i> It provides
   *             information only about SMS MFA configurations. It doesn't provide information about
   *             time-based one-time password (TOTP) software token MFA configurations. To look up
   *             information about either type of MFA configuration, use UserMFASettingList
   *             instead.</p>
   * @public
   */
  MFAOptions?: MFAOptionType[] | undefined;

  /**
   * <p>The user's preferred MFA setting.</p>
   * @public
   */
  PreferredMfaSetting?: string | undefined;

  /**
   * <p>The MFA options that are activated for the user. The possible values in this list are
   *             <code>SMS_MFA</code>, <code>EMAIL_OTP</code>, and <code>SOFTWARE_TOKEN_MFA</code>.</p>
   * @public
   */
  UserMFASettingList?: string[] | undefined;
}

/**
 * <p>An Amazon Pinpoint analytics endpoint.</p>
 *          <p>An endpoint uniquely identifies a mobile device, email address, or phone number that
 *             can receive messages from Amazon Pinpoint analytics. For more information about Amazon Web Services Regions that
 *             can contain Amazon Pinpoint resources for use with Amazon Cognito user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html">Using Amazon Pinpoint analytics with Amazon Cognito user pools</a>.</p>
 * @public
 */
export interface AnalyticsMetadataType {
  /**
   * <p>The endpoint ID.</p>
   * @public
   */
  AnalyticsEndpointId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AuthFlowType = {
  ADMIN_NO_SRP_AUTH: "ADMIN_NO_SRP_AUTH",
  ADMIN_USER_PASSWORD_AUTH: "ADMIN_USER_PASSWORD_AUTH",
  CUSTOM_AUTH: "CUSTOM_AUTH",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  REFRESH_TOKEN_AUTH: "REFRESH_TOKEN_AUTH",
  USER_PASSWORD_AUTH: "USER_PASSWORD_AUTH",
  USER_SRP_AUTH: "USER_SRP_AUTH",
} as const;

/**
 * @public
 */
export type AuthFlowType = (typeof AuthFlowType)[keyof typeof AuthFlowType];

/**
 * <p>The HTTP header.</p>
 * @public
 */
export interface HttpHeader {
  /**
   * <p>The header name.</p>
   * @public
   */
  headerName?: string | undefined;

  /**
   * <p>The header value.</p>
   * @public
   */
  headerValue?: string | undefined;
}

/**
 * <p>Contextual user data type used for evaluating the risk of an unexpected event by Amazon Cognito
 *             advanced security.</p>
 * @public
 */
export interface ContextDataType {
  /**
   * <p>The source IP address of your user's device.</p>
   * @public
   */
  IpAddress: string | undefined;

  /**
   * <p>Your server endpoint where this API is invoked.</p>
   * @public
   */
  ServerName: string | undefined;

  /**
   * <p>Your server path where this API is invoked.</p>
   * @public
   */
  ServerPath: string | undefined;

  /**
   * <p>HttpHeaders received on your server in same order.</p>
   * @public
   */
  HttpHeaders: HttpHeader[] | undefined;

  /**
   * <p>Encoded device-fingerprint details that your app collected with the Amazon Cognito
   *             context data collection library. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint">Adding user device and session data to API requests</a>.</p>
   * @public
   */
  EncodedData?: string | undefined;
}

/**
 * <p>Initiates the authorization request, as an administrator.</p>
 * @public
 */
export interface AdminInitiateAuthRequest {
  /**
   * <p>The ID of the Amazon Cognito user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The authentication flow for this call to run. The API action will depend on this
   *             value. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REFRESH_TOKEN_AUTH</code> will take in a valid refresh token and return
   *                     new tokens.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_SRP_AUTH</code> will take in <code>USERNAME</code> and
   *                         <code>SRP_A</code> and return the Secure Remote Password (SRP) protocol
   *                     variables to be used for next challenge execution.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN_USER_PASSWORD_AUTH</code> will take in <code>USERNAME</code> and
   *                         <code>PASSWORD</code> and return the next challenge or tokens.</p>
   *             </li>
   *          </ul>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>USER_SRP_AUTH</code>: Authentication flow for the Secure Remote Password
   *                     (SRP) protocol.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REFRESH_TOKEN_AUTH</code>/<code>REFRESH_TOKEN</code>: Authentication
   *                     flow for refreshing the access token and ID token by supplying a valid refresh
   *                     token.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_AUTH</code>: Custom authentication flow.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN_NO_SRP_AUTH</code>: Non-SRP authentication flow; you can pass in
   *                     the USERNAME and PASSWORD directly if the flow is enabled for calling the app
   *                     client.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN_USER_PASSWORD_AUTH</code>: Admin-based user password
   *                     authentication. This replaces the <code>ADMIN_NO_SRP_AUTH</code> authentication
   *                     flow. In this flow, Amazon Cognito receives the password in the request instead of using
   *                     the SRP process to verify passwords.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AuthFlow: AuthFlowType | undefined;

  /**
   * <p>The authentication parameters. These are inputs corresponding to the
   *                 <code>AuthFlow</code> that you're invoking. The required values depend on the value
   *             of <code>AuthFlow</code>:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>USER_SRP_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SRP_A</code> (required), <code>SECRET_HASH</code> (required if the app
   *                     client is configured with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>ADMIN_USER_PASSWORD_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>PASSWORD</code> (required), <code>SECRET_HASH</code> (required if the
   *                     app client is configured with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>REFRESH_TOKEN_AUTH/REFRESH_TOKEN</code>: <code>REFRESH_TOKEN</code>
   *                     (required), <code>SECRET_HASH</code> (required if the app client is configured
   *                     with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>CUSTOM_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SECRET_HASH</code> (if app client is configured with client secret),
   *                         <code>DEVICE_KEY</code>. To start the authentication flow with password
   *                     verification, include <code>ChallengeName: SRP_A</code> and <code>SRP_A: (The
   *                         SRP_A Value)</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about
   *             <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>
   * @public
   */
  AuthParameters?: Record<string, string> | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for certain custom
   *             workflows that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the AdminInitiateAuth API action, Amazon Cognito invokes the Lambda functions that
   *             are specified for various triggers. The ClientMetadata value is passed as input to the
   *             functions for only the following triggers:</p>
   *          <ul>
   *             <li>
   *                <p>Pre signup</p>
   *             </li>
   *             <li>
   *                <p>Pre authentication</p>
   *             </li>
   *             <li>
   *                <p>User migration</p>
   *             </li>
   *          </ul>
   *          <p>When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload, which
   *             the function receives as input. This payload contains a <code>validationData</code>
   *             attribute, which provides the data that you assigned to the ClientMetadata parameter in
   *             your AdminInitiateAuth request. In your function code in Lambda, you can process the
   *                 <code>validationData</code> value to enhance your workflow for your specific
   *             needs.</p>
   *          <p>When you use the AdminInitiateAuth API action, Amazon Cognito also invokes the functions for
   *             the following triggers, but it doesn't provide the ClientMetadata value as input:</p>
   *          <ul>
   *             <li>
   *                <p>Post authentication</p>
   *             </li>
   *             <li>
   *                <p>Custom message</p>
   *             </li>
   *             <li>
   *                <p>Pre token generation</p>
   *             </li>
   *             <li>
   *                <p>Create auth challenge</p>
   *             </li>
   *             <li>
   *                <p>Define auth challenge</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;

  /**
   * <p>The analytics metadata for collecting Amazon Pinpoint metrics for
   *                 <code>AdminInitiateAuth</code> calls.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   * @public
   */
  ContextData?: ContextDataType | undefined;
}

/**
 * <p>The new device metadata type.</p>
 * @public
 */
export interface NewDeviceMetadataType {
  /**
   * <p>The device key.</p>
   * @public
   */
  DeviceKey?: string | undefined;

  /**
   * <p>The device group key.</p>
   * @public
   */
  DeviceGroupKey?: string | undefined;
}

/**
 * <p>The authentication result.</p>
 * @public
 */
export interface AuthenticationResultType {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user who you want to
   *             authenticate.</p>
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * <p>The expiration period of the authentication result in seconds.</p>
   * @public
   */
  ExpiresIn?: number | undefined;

  /**
   * <p>The token type.</p>
   * @public
   */
  TokenType?: string | undefined;

  /**
   * <p>The refresh token.</p>
   * @public
   */
  RefreshToken?: string | undefined;

  /**
   * <p>The ID token.</p>
   * @public
   */
  IdToken?: string | undefined;

  /**
   * <p>The new device metadata from an authentication result.</p>
   * @public
   */
  NewDeviceMetadata?: NewDeviceMetadataType | undefined;
}

/**
 * @public
 * @enum
 */
export const ChallengeNameType = {
  ADMIN_NO_SRP_AUTH: "ADMIN_NO_SRP_AUTH",
  CUSTOM_CHALLENGE: "CUSTOM_CHALLENGE",
  DEVICE_PASSWORD_VERIFIER: "DEVICE_PASSWORD_VERIFIER",
  DEVICE_SRP_AUTH: "DEVICE_SRP_AUTH",
  EMAIL_OTP: "EMAIL_OTP",
  MFA_SETUP: "MFA_SETUP",
  NEW_PASSWORD_REQUIRED: "NEW_PASSWORD_REQUIRED",
  PASSWORD_VERIFIER: "PASSWORD_VERIFIER",
  SELECT_MFA_TYPE: "SELECT_MFA_TYPE",
  SMS_MFA: "SMS_MFA",
  SOFTWARE_TOKEN_MFA: "SOFTWARE_TOKEN_MFA",
} as const;

/**
 * @public
 */
export type ChallengeNameType = (typeof ChallengeNameType)[keyof typeof ChallengeNameType];

/**
 * <p>Initiates the authentication response, as an administrator.</p>
 * @public
 */
export interface AdminInitiateAuthResponse {
  /**
   * <p>The name of the challenge that you're responding to with this call. This is returned
   *             in the <code>AdminInitiateAuth</code> response if you must pass another
   *             challenge.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>MFA_SETUP</code>: If MFA is required, users who don't have at least one
   *                     of the MFA methods set up are presented with an <code>MFA_SETUP</code>
   *                     challenge. The user must set up at least one MFA type to continue to
   *                     authenticate.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SELECT_MFA_TYPE</code>: Selects the MFA type. Valid MFA options are
   *                     <code>SMS_MFA</code> for SMS message MFA, <code>EMAIL_OTP</code> for email
   *                     message MFA, and <code>SOFTWARE_TOKEN_MFA</code> for time-based one-time
   *                     password (TOTP) software token MFA.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMS_MFA</code>: Next challenge is to supply an
   *                     <code>SMS_MFA_CODE</code>that your user pool delivered
   *                     in an SMS message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_OTP</code>: Next challenge is to supply an
   *                     <code>EMAIL_OTP_CODE</code> that your user pool delivered
   *                     in an email message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_VERIFIER</code>: Next challenge is to supply
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     the client-side SRP calculations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication
   *                     flow determines that the user should pass another challenge before tokens are
   *                     issued.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_SRP_AUTH</code>: If device tracking was activated in your user
   *                     pool and the previous challenges were passed, this challenge is returned so that
   *                     Amazon Cognito can start tracking this device.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Similar to
   *                         <code>PASSWORD_VERIFIER</code>, but for devices only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ADMIN_NO_SRP_AUTH</code>: This is returned if you must authenticate with
   *                         <code>USERNAME</code> and <code>PASSWORD</code> directly. An app client must
   *                     be enabled to use this flow.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their
   *                     passwords after successful first login. Respond to this challenge with
   *                         <code>NEW_PASSWORD</code> and any required attributes that Amazon Cognito returned in
   *                     the <code>requiredAttributes</code> parameter. You can also set values for
   *                     attributes that aren't required by your user pool and that your app client can
   *                     write. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminRespondToAuthChallenge.html">AdminRespondToAuthChallenge</a>.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>AdminRespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter,
   * then use the <code>AdminUpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_SETUP</code>: For users who are required to set up an MFA factor
   *                     before they can sign in. The MFA types activated for the user pool will be
   *                     listed in the challenge parameters <code>MFAS_CAN_SETUP</code> value. </p>
   *                <p> To set up software token MFA, use the session returned here from
   *                         <code>InitiateAuth</code> as an input to
   *                     <code>AssociateSoftwareToken</code>, and use the session returned by
   *                         <code>VerifySoftwareToken</code> as an input to
   *                         <code>RespondToAuthChallenge</code> with challenge name
   *                         <code>MFA_SETUP</code> to complete sign-in. To set up SMS MFA, users will
   *                     need help from an administrator to add a phone number to their account and then
   *                     call <code>InitiateAuth</code> again to restart sign-in.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. If <code>AdminInitiateAuth</code> or <code>AdminRespondToAuthChallenge</code>
   *             API call determines that the caller must pass another challenge, they return a session
   *             with other challenge parameters. This session should be passed as it is to the next
   *                 <code>AdminRespondToAuthChallenge</code> API call.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The challenge parameters. These are returned to you in the
   *                 <code>AdminInitiateAuth</code> response if you must pass another challenge. The
   *             responses in this parameter should be used to compute inputs to the next call
   *                 (<code>AdminRespondToAuthChallenge</code>).</p>
   *          <p>All challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if
   *             applicable).</p>
   *          <p>The value of the <code>USER_ID_FOR_SRP</code> attribute is the user's actual username,
   *             not an alias (such as email address or phone number), even if you specified an alias in
   *             your call to <code>AdminInitiateAuth</code>. This happens because, in the
   *                 <code>AdminRespondToAuthChallenge</code> API <code>ChallengeResponses</code>, the
   *                 <code>USERNAME</code> attribute can't be an alias.</p>
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * <p>The result of the authentication response. This is only returned if the caller doesn't
   *             need to pass another challenge. If the caller does need to pass another challenge before
   *             it gets tokens, <code>ChallengeName</code>, <code>ChallengeParameters</code>, and
   *                 <code>Session</code> are returned.</p>
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;
}

/**
 * <p>This exception is thrown when Amazon Cognito isn't allowed to use your email identity. HTTP
 *             status code: 400.</p>
 * @public
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
 * <p>This exception is thrown when Amazon Cognito can't find a multi-factor authentication
 *             (MFA) method.</p>
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface AdminLinkProviderForUserRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The existing user in the user pool that you want to assign to the external IdP user
   *             account. This user can be a local (Username + Password) Amazon Cognito user pools user or a
   *             federated user (for example, a SAML or Facebook user). If the user doesn't exist, Amazon Cognito
   *             generates an exception. Amazon Cognito returns this user when the new user (with the linked IdP
   *             attribute) signs in.</p>
   *          <p>For a native username + password user, the <code>ProviderAttributeValue</code> for the
   *                 <code>DestinationUser</code> should be the username in the user pool. For a
   *             federated user, it should be the provider-specific <code>user_id</code>.</p>
   *          <p>The <code>ProviderAttributeName</code> of the <code>DestinationUser</code> is
   *             ignored.</p>
   *          <p>The <code>ProviderName</code> should be set to <code>Cognito</code> for users in
   *             Cognito user pools.</p>
   *          <important>
   *             <p>All attributes in the DestinationUser profile must be mutable. If you have
   *                 assigned the user any immutable custom attributes, the operation won't
   *                 succeed.</p>
   *          </important>
   * @public
   */
  DestinationUser: ProviderUserIdentifierType | undefined;

  /**
   * <p>An external IdP account for a user who doesn't exist yet in the user pool. This user
   *             must be a federated user (for example, a SAML or Facebook user), not another native
   *             user.</p>
   *          <p>If the <code>SourceUser</code> is using a federated social IdP, such as Facebook,
   *             Google, or Login with Amazon, you must set the <code>ProviderAttributeName</code> to
   *                 <code>Cognito_Subject</code>. For social IdPs, the <code>ProviderName</code> will be
   *                 <code>Facebook</code>, <code>Google</code>, or <code>LoginWithAmazon</code>, and
   *             Amazon Cognito will automatically parse the Facebook, Google, and Login with Amazon tokens for
   *                 <code>id</code>, <code>sub</code>, and <code>user_id</code>, respectively. The
   *                 <code>ProviderAttributeValue</code> for the user must be the same value as the
   *                 <code>id</code>, <code>sub</code>, or <code>user_id</code> value found in the social
   *             IdP token.</p>
   *          <p></p>
   *          <p>For OIDC, the <code>ProviderAttributeName</code> can be any value that matches a claim
   *             in the ID token, or that your app retrieves from the <code>userInfo</code> endpoint. You
   *             must map the claim to a user pool attribute in your IdP configuration, and set the user
   *             pool attribute name as the value of <code>ProviderAttributeName</code> in your
   *                 <code>AdminLinkProviderForUser</code> request.</p>
   *          <p>For SAML, the <code>ProviderAttributeName</code> can be any value that matches a claim
   *             in the SAML assertion. To link SAML users based on the subject of the SAML assertion,
   *             map the subject to a claim through the SAML IdP and set that claim name as the value of
   *                 <code>ProviderAttributeName</code> in your <code>AdminLinkProviderForUser</code>
   *             request.</p>
   *          <p>For both OIDC and SAML users, when you set <code>ProviderAttributeName</code> to
   *                 <code>Cognito_Subject</code>, Amazon Cognito will automatically parse the default unique
   *             identifier found in the subject from the IdP token.</p>
   * @public
   */
  SourceUser: ProviderUserIdentifierType | undefined;
}

/**
 * @public
 */
export interface AdminLinkProviderForUserResponse {}

/**
 * <p>Represents the request to list devices, as an administrator.</p>
 * @public
 */
export interface AdminListDevicesRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The limit of the devices request.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * <p>Lists the device's response, as an administrator.</p>
 * @public
 */
export interface AdminListDevicesResponse {
  /**
   * <p>The devices in the list of devices response.</p>
   * @public
   */
  Devices?: DeviceType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * @public
 */
export interface AdminListGroupsForUserRequest {
  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The limit of the request to list groups.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The group type.</p>
 * @public
 */
export interface GroupType {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>A string containing the description of the group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The role Amazon Resource Name (ARN) for the group.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A non-negative integer value that specifies the precedence of this group relative to
   *             the other groups that a user can belong to in the user pool. Zero is the highest
   *             precedence value. Groups with lower <code>Precedence</code> values take precedence over
   *             groups with higher ornull <code>Precedence</code> values. If a user belongs to two or
   *             more groups, it is the group with the lowest precedence value whose role ARN is given in
   *             the user's tokens for the <code>cognito:roles</code> and
   *                 <code>cognito:preferred_role</code> claims.</p>
   *          <p>Two groups can have the same <code>Precedence</code> value. If this happens, neither
   *             group takes precedence over the other. If two groups with the same
   *                 <code>Precedence</code> have the same role ARN, that role is used in the
   *                 <code>cognito:preferred_role</code> claim in tokens for users in each group. If the
   *             two groups have different role ARNs, the <code>cognito:preferred_role</code> claim isn't
   *             set in users' tokens.</p>
   *          <p>The default <code>Precedence</code> value is null.</p>
   * @public
   */
  Precedence?: number | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface AdminListGroupsForUserResponse {
  /**
   * <p>The groups that the user belongs to.</p>
   * @public
   */
  Groups?: GroupType[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface AdminListUserAuthEventsRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The maximum number of authentication events to return. Returns 60 events if you set
   *                 <code>MaxResults</code> to 0, or if you don't include a <code>MaxResults</code>
   *             parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChallengeName = {
  Mfa: "Mfa",
  Password: "Password",
} as const;

/**
 * @public
 */
export type ChallengeName = (typeof ChallengeName)[keyof typeof ChallengeName];

/**
 * @public
 * @enum
 */
export const ChallengeResponse = {
  Failure: "Failure",
  Success: "Success",
} as const;

/**
 * @public
 */
export type ChallengeResponse = (typeof ChallengeResponse)[keyof typeof ChallengeResponse];

/**
 * <p>The challenge response type.</p>
 * @public
 */
export interface ChallengeResponseType {
  /**
   * <p>The challenge name.</p>
   * @public
   */
  ChallengeName?: ChallengeName | undefined;

  /**
   * <p>The challenge response.</p>
   * @public
   */
  ChallengeResponse?: ChallengeResponse | undefined;
}

/**
 * <p>Specifies the user context data captured at the time of an event request.</p>
 * @public
 */
export interface EventContextDataType {
  /**
   * <p>The source IP address of your user's device.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The user's device name.</p>
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * <p>The user's time zone.</p>
   * @public
   */
  Timezone?: string | undefined;

  /**
   * <p>The user's city.</p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>The user's country.</p>
   * @public
   */
  Country?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FeedbackValueType = {
  INVALID: "Invalid",
  VALID: "Valid",
} as const;

/**
 * @public
 */
export type FeedbackValueType = (typeof FeedbackValueType)[keyof typeof FeedbackValueType];

/**
 * <p>Specifies the event feedback type.</p>
 * @public
 */
export interface EventFeedbackType {
  /**
   * <p>The authentication event feedback value. When you provide a <code>FeedbackValue</code>
   * value of <code>valid</code>, you tell Amazon Cognito that you trust a user session where Amazon Cognito
   * has evaluated some level of risk. When you provide a <code>FeedbackValue</code> value of
   * <code>invalid</code>, you tell Amazon Cognito that you don't trust a user session, or you
   * don't believe that Amazon Cognito evaluated a high-enough risk level.</p>
   * @public
   */
  FeedbackValue: FeedbackValueType | undefined;

  /**
   * <p>The provider.</p>
   * @public
   */
  Provider: string | undefined;

  /**
   * <p>The event feedback date.</p>
   * @public
   */
  FeedbackDate?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const EventResponseType = {
  Fail: "Fail",
  InProgress: "InProgress",
  Pass: "Pass",
} as const;

/**
 * @public
 */
export type EventResponseType = (typeof EventResponseType)[keyof typeof EventResponseType];

/**
 * @public
 * @enum
 */
export const RiskDecisionType = {
  AccountTakeover: "AccountTakeover",
  Block: "Block",
  NoRisk: "NoRisk",
} as const;

/**
 * @public
 */
export type RiskDecisionType = (typeof RiskDecisionType)[keyof typeof RiskDecisionType];

/**
 * @public
 * @enum
 */
export const RiskLevelType = {
  High: "High",
  Low: "Low",
  Medium: "Medium",
} as const;

/**
 * @public
 */
export type RiskLevelType = (typeof RiskLevelType)[keyof typeof RiskLevelType];

/**
 * <p>The event risk type.</p>
 * @public
 */
export interface EventRiskType {
  /**
   * <p>The risk decision.</p>
   * @public
   */
  RiskDecision?: RiskDecisionType | undefined;

  /**
   * <p>The risk level.</p>
   * @public
   */
  RiskLevel?: RiskLevelType | undefined;

  /**
   * <p>Indicates whether compromised credentials were detected during an authentication
   *             event.</p>
   * @public
   */
  CompromisedCredentialsDetected?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const EventType = {
  ForgotPassword: "ForgotPassword",
  PasswordChange: "PasswordChange",
  ResendCode: "ResendCode",
  SignIn: "SignIn",
  SignUp: "SignUp",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * <p>The authentication event type.</p>
 * @public
 */
export interface AuthEventType {
  /**
   * <p>The event ID.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>The event type.</p>
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The event response.</p>
   * @public
   */
  EventResponse?: EventResponseType | undefined;

  /**
   * <p>The event risk.</p>
   * @public
   */
  EventRisk?: EventRiskType | undefined;

  /**
   * <p>The challenge responses.</p>
   * @public
   */
  ChallengeResponses?: ChallengeResponseType[] | undefined;

  /**
   * <p>The user context data captured at the time of an event request. This value provides
   *             additional information about the client from which event the request is received.</p>
   * @public
   */
  EventContextData?: EventContextDataType | undefined;

  /**
   * <p>A flag specifying the user feedback captured at the time of an event request is good
   *             or bad. </p>
   * @public
   */
  EventFeedback?: EventFeedbackType | undefined;
}

/**
 * @public
 */
export interface AdminListUserAuthEventsResponse {
  /**
   * <p>The response object. It includes the <code>EventID</code>, <code>EventType</code>,
   *                 <code>CreationDate</code>, <code>EventRisk</code>, and
   *             <code>EventResponse</code>.</p>
   * @public
   */
  AuthEvents?: AuthEventType[] | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>This exception is thrown when user pool add-ons aren't enabled.</p>
 * @public
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

/**
 * @public
 */
export interface AdminRemoveUserFromGroupRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The group name.</p>
   * @public
   */
  GroupName: string | undefined;
}

/**
 * <p>Represents the request to reset a user's password as an administrator.</p>
 * @public
 */
export interface AdminResetUserPasswordRequest {
  /**
   * <p>The user pool ID for the user pool where you want to reset the user's password.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the AdminResetUserPassword API action, Amazon Cognito invokes the function
   *             that is assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes
   *             this function, it passes a JSON payload, which the function receives as input. This
   *             payload contains a <code>clientMetadata</code> attribute, which provides the data that
   *             you assigned to the ClientMetadata parameter in your AdminResetUserPassword request. In
   *             your function code in Lambda, you can process the
   *                 <code>clientMetadata</code> value to enhance your workflow for your specific needs. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>Represents the response from the server to reset a user password as an
 *             administrator.</p>
 * @public
 */
export interface AdminResetUserPasswordResponse {}

/**
 * <p>The request to respond to the authentication challenge, as an administrator.</p>
 * @public
 */
export interface AdminRespondToAuthChallengeRequest {
  /**
   * <p>The ID of the Amazon Cognito user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html">AdminInitiateAuth</a>.</p>
   * @public
   */
  ChallengeName: ChallengeNameType | undefined;

  /**
   * <p>The responses to the challenge that you received in the previous request. Each
   *     challenge has its own required response parameters. The following examples are partial
   *     JSON request bodies that highlight challenge-response parameters.</p>
   *          <important>
   *             <p>You must provide a SECRET_HASH parameter in all challenge responses to an app
   *         client that has a client secret.</p>
   *          </important>
   *          <dl>
   *             <dt>SMS_MFA</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SMS_MFA", "ChallengeResponses": \{"SMS_MFA_CODE":
   *                     "[code]", "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>EMAIL_OTP</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "EMAIL_OTP", "ChallengeResponses": \{"EMAIL_OTP_CODE":
   *                     "[code]", "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>PASSWORD_VERIFIER</dt>
   *             <dd>
   *                <p>This challenge response is part of the SRP flow. Amazon Cognito requires
   *             that your application respond to this challenge within a few seconds. When
   *             the response time exceeds this period, your user pool returns a
   *             <code>NotAuthorizedException</code> error.</p>
   *                <p>
   *                   <code>"ChallengeName": "PASSWORD_VERIFIER", "ChallengeResponses":
   *                     \{"PASSWORD_CLAIM_SIGNATURE": "[claim_signature]",
   *                     "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP":
   *                     [timestamp], "USERNAME": "[username]"\}</code>
   *                </p>
   *                <p>Add <code>"DEVICE_KEY"</code> when you sign in with a remembered
   *                 device.</p>
   *             </dd>
   *             <dt>CUSTOM_CHALLENGE</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses":
   *                     \{"USERNAME": "[username]", "ANSWER": "[challenge_answer]"\}</code>
   *                </p>
   *                <p>Add <code>"DEVICE_KEY"</code> when you sign in with a remembered
   *                 device.</p>
   *             </dd>
   *             <dt>NEW_PASSWORD_REQUIRED</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "NEW_PASSWORD_REQUIRED", "ChallengeResponses":
   *                     \{"NEW_PASSWORD": "[new_password]", "USERNAME":
   *                 "[username]"\}</code>
   *                </p>
   *                <p>To set any required attributes that <code>InitiateAuth</code> returned in
   *                 an <code>requiredAttributes</code> parameter, add
   *                     <code>"userAttributes.[attribute_name]": "[attribute_value]"</code>.
   *                 This parameter can also set values for writable attributes that aren't
   *                 required by your user pool.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter,
   * then use the <code>UpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </dd>
   *             <dt>SOFTWARE_TOKEN_MFA</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SOFTWARE_TOKEN_MFA", "ChallengeResponses":
   *                     \{"USERNAME": "[username]", "SOFTWARE_TOKEN_MFA_CODE":
   *                     [authenticator_code]\}</code>
   *                </p>
   *             </dd>
   *             <dt>DEVICE_SRP_AUTH</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "DEVICE_SRP_AUTH", "ChallengeResponses": \{"USERNAME":
   *                 "[username]", "DEVICE_KEY": "[device_key]", "SRP_A":
   *                 "[srp_a]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>DEVICE_PASSWORD_VERIFIER</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "DEVICE_PASSWORD_VERIFIER", "ChallengeResponses":
   *                 \{"DEVICE_KEY": "[device_key]", "PASSWORD_CLAIM_SIGNATURE":
   *                 "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]",
   *                 "TIMESTAMP": [timestamp], "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>MFA_SETUP</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "MFA_SETUP", "ChallengeResponses": \{"USERNAME":
   *                 "[username]"\}, "SESSION": "[Session ID from
   *                 VerifySoftwareToken]"</code>
   *                </p>
   *             </dd>
   *             <dt>SELECT_MFA_TYPE</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SELECT_MFA_TYPE", "ChallengeResponses": \{"USERNAME":
   *                 "[username]", "ANSWER": "[SMS_MFA or SOFTWARE_TOKEN_MFA]"\}</code>
   *                </p>
   *             </dd>
   *          </dl>
   *          <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about
   *     <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>
   * @public
   */
  ChallengeResponses?: Record<string, string> | undefined;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. If an <code>InitiateAuth</code> or <code>RespondToAuthChallenge</code> API call
   *             determines that the caller must pass another challenge, it returns a session with other
   *             challenge parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The analytics metadata for collecting Amazon Pinpoint metrics for
   *                 <code>AdminRespondToAuthChallenge</code> calls.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   * @public
   */
  ContextData?: ContextDataType | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the AdminRespondToAuthChallenge API action, Amazon Cognito invokes any functions
   *             that you have assigned to the following triggers: </p>
   *          <ul>
   *             <li>
   *                <p>pre sign-up</p>
   *             </li>
   *             <li>
   *                <p>custom message</p>
   *             </li>
   *             <li>
   *                <p>post authentication</p>
   *             </li>
   *             <li>
   *                <p>user migration</p>
   *             </li>
   *             <li>
   *                <p>pre token generation</p>
   *             </li>
   *             <li>
   *                <p>define auth challenge</p>
   *             </li>
   *             <li>
   *                <p>create auth challenge</p>
   *             </li>
   *             <li>
   *                <p>verify auth challenge response</p>
   *             </li>
   *          </ul>
   *          <p>When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the
   *             function receives as input. This payload contains a <code>clientMetadata</code>
   *             attribute that provides the data that you assigned to the ClientMetadata parameter in
   *             your AdminRespondToAuthChallenge request. In your function code in Lambda, you can
   *             process the <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>Responds to the authentication challenge, as an administrator.</p>
 * @public
 */
export interface AdminRespondToAuthChallengeResponse {
  /**
   * <p>The name of the challenge. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html">AdminInitiateAuth</a>.</p>
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. If the caller must pass another challenge, they return a session with other
   *             challenge parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The challenge parameters. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html">AdminInitiateAuth</a>.</p>
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * <p>The result returned by the server in response to the authentication request.</p>
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;
}

/**
 * <p>This exception is thrown if the provided code doesn't match what the server was
 *             expecting.</p>
 * @public
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
 * @public
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
 * <p>The message returned when a user's new password matches a previous password and
 *             doesn't comply with the password-history policy.</p>
 * @public
 */
export class PasswordHistoryPolicyViolationException extends __BaseException {
  readonly name: "PasswordHistoryPolicyViolationException" = "PasswordHistoryPolicyViolationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PasswordHistoryPolicyViolationException, __BaseException>) {
    super({
      name: "PasswordHistoryPolicyViolationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PasswordHistoryPolicyViolationException.prototype);
  }
}

/**
 * <p>This exception is thrown when the software token time-based one-time password (TOTP)
 *             multi-factor authentication (MFA) isn't activated for the user pool.</p>
 * @public
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
 * <p>User preferences for multi-factor authentication with email messages. Activates or
 *             deactivates email MFA and sets it as the preferred MFA method when multiple methods are
 *             available. To activate this setting, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">
 *                      advanced security features</a> must be active in your user pool.</p>
 * @public
 */
export interface EmailMfaSettingsType {
  /**
   * <p>Specifies whether email message MFA is active for a user. When the value of this
   *             parameter is <code>Enabled</code>, the user will be prompted for MFA during all sign-in
   *             attempts, unless device tracking is turned on and the device has been trusted.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Specifies whether email message MFA is the user's preferred method.</p>
   * @public
   */
  PreferredMfa?: boolean | undefined;
}

/**
 * <p>The type used for enabling SMS multi-factor authentication (MFA) at the user level.
 *             Phone numbers don't need to be verified to be used for SMS MFA. If an MFA type is
 *             activated for a user, the user will be prompted for MFA during all sign-in attempts,
 *             unless device tracking is turned on and the device has been trusted. If you would like
 *             MFA to be applied selectively based on the assessed risk level of sign-in attempts,
 *             deactivate MFA for users and turn on Adaptive Authentication for the user pool.</p>
 * @public
 */
export interface SMSMfaSettingsType {
  /**
   * <p>Specifies whether SMS message MFA is activated. If an MFA type is activated for a
   *             user, the user will be prompted for MFA during all sign-in attempts, unless device
   *             tracking is turned on and the device has been trusted.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Specifies whether SMS is the preferred MFA method.</p>
   * @public
   */
  PreferredMfa?: boolean | undefined;
}

/**
 * <p>The type used for enabling software token MFA at the user level. If an MFA type is
 *             activated for a user, the user will be prompted for MFA during all sign-in attempts,
 *             unless device tracking is turned on and the device has been trusted. If you want MFA to
 *             be applied selectively based on the assessed risk level of sign-in attempts, deactivate
 *             MFA for users and turn on Adaptive Authentication for the user pool.</p>
 * @public
 */
export interface SoftwareTokenMfaSettingsType {
  /**
   * <p>Specifies whether software token MFA is activated. If an MFA type is activated for a
   *             user, the user will be prompted for MFA during all sign-in attempts, unless device
   *             tracking is turned on and the device has been trusted.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>Specifies whether software token MFA is the preferred MFA method.</p>
   * @public
   */
  PreferredMfa?: boolean | undefined;
}

/**
 * @public
 */
export interface AdminSetUserMFAPreferenceRequest {
  /**
   * <p>User preferences for SMS message MFA. Activates or deactivates SMS MFA and sets it as
   *             the preferred MFA method when multiple methods are available.</p>
   * @public
   */
  SMSMfaSettings?: SMSMfaSettingsType | undefined;

  /**
   * <p>User preferences for time-based one-time password (TOTP) MFA. Activates or deactivates
   *             TOTP MFA and sets it as the preferred MFA method when multiple methods are
   *             available.</p>
   * @public
   */
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType | undefined;

  /**
   * <p>User preferences for email message MFA. Activates or deactivates email MFA and sets it
   *             as the preferred MFA method when multiple methods are available. To activate this setting, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">
   *                      advanced security features</a> must be active in your user pool.</p>
   * @public
   */
  EmailMfaSettings?: EmailMfaSettingsType | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The ID of the user pool where you want to set a user's MFA preferences.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface AdminSetUserMFAPreferenceResponse {}

/**
 * @public
 */
export interface AdminSetUserPasswordRequest {
  /**
   * <p>The user pool ID for the user pool where you want to set the user's password.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The password for the user.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>
   *             <code>True</code> if the password is permanent, <code>False</code> if it is
   *             temporary.</p>
   * @public
   */
  Permanent?: boolean | undefined;
}

/**
 * @public
 */
export interface AdminSetUserPasswordResponse {}

/**
 * <p>You can use this parameter to set an MFA configuration that uses the SMS delivery
 *             medium.</p>
 * @public
 */
export interface AdminSetUserSettingsRequest {
  /**
   * <p>The ID of the user pool that contains the user whose options you're setting.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>You can use this parameter only to set an SMS configuration that uses SMS for
   *             delivery.</p>
   * @public
   */
  MFAOptions: MFAOptionType[] | undefined;
}

/**
 * <p>Represents the response from the server to set user settings as an
 *             administrator.</p>
 * @public
 */
export interface AdminSetUserSettingsResponse {}

/**
 * @public
 */
export interface AdminUpdateAuthEventFeedbackRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The authentication event ID.</p>
   * @public
   */
  EventId: string | undefined;

  /**
   * <p>The authentication event feedback value. When you provide a <code>FeedbackValue</code>
   * value of <code>valid</code>, you tell Amazon Cognito that you trust a user session where Amazon Cognito
   * has evaluated some level of risk. When you provide a <code>FeedbackValue</code> value of
   * <code>invalid</code>, you tell Amazon Cognito that you don't trust a user session, or you
   * don't believe that Amazon Cognito evaluated a high-enough risk level.</p>
   * @public
   */
  FeedbackValue: FeedbackValueType | undefined;
}

/**
 * @public
 */
export interface AdminUpdateAuthEventFeedbackResponse {}

/**
 * @public
 * @enum
 */
export const DeviceRememberedStatusType = {
  NOT_REMEMBERED: "not_remembered",
  REMEMBERED: "remembered",
} as const;

/**
 * @public
 */
export type DeviceRememberedStatusType = (typeof DeviceRememberedStatusType)[keyof typeof DeviceRememberedStatusType];

/**
 * <p>The request to update the device status, as an administrator.</p>
 * @public
 */
export interface AdminUpdateDeviceStatusRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The device key.</p>
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * <p>The status indicating whether a device has been remembered or not.</p>
   * @public
   */
  DeviceRememberedStatus?: DeviceRememberedStatusType | undefined;
}

/**
 * <p>The status response to the request to update the device, as an administrator.</p>
 * @public
 */
export interface AdminUpdateDeviceStatusResponse {}

/**
 * <p>Represents the request to update the user's attributes as an administrator.</p>
 * @public
 */
export interface AdminUpdateUserAttributesRequest {
  /**
   * <p>The user pool ID for the user pool where you want to update user attributes.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   *          <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   *          <p>If your user pool requires verification before Amazon Cognito updates an attribute value that
   *             you specify in this request, Amazon Cognito doesn’t immediately update the value of that
   *             attribute. After your user receives and responds to a verification message to verify the
   *             new value, Amazon Cognito updates the attribute value. Your user can sign in and receive messages
   *             with the original attribute value until they verify the new value.</p>
   *          <p>To update the value of an attribute that requires verification in the same API
   *             request, include the <code>email_verified</code> or <code>phone_number_verified</code>
   *             attribute, with a value of <code>true</code>. If you set the <code>email_verified</code>
   *             or <code>phone_number_verified</code> value for an <code>email</code> or
   *                 <code>phone_number</code> attribute that requires verification to <code>true</code>,
   *             Amazon Cognito doesn’t send a verification message to your user.</p>
   * @public
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the AdminUpdateUserAttributes API action, Amazon Cognito invokes the
   *             function that is assigned to the <i>custom message</i> trigger. When Amazon Cognito
   *             invokes this function, it passes a JSON payload, which the function receives as input.
   *             This payload contains a <code>clientMetadata</code> attribute, which provides the data
   *             that you assigned to the ClientMetadata parameter in your AdminUpdateUserAttributes
   *             request. In your function code in Lambda, you can process the
   *                 <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>Represents the response from the server for the request to update user attributes as
 *             an administrator.</p>
 * @public
 */
export interface AdminUpdateUserAttributesResponse {}

/**
 * <p>The request to sign out of all devices, as an administrator.</p>
 * @public
 */
export interface AdminUserGlobalSignOutRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;
}

/**
 * <p>The global sign-out response, as an administrator.</p>
 * @public
 */
export interface AdminUserGlobalSignOutResponse {}

/**
 * @public
 * @enum
 */
export const AdvancedSecurityEnabledModeType = {
  AUDIT: "AUDIT",
  ENFORCED: "ENFORCED",
} as const;

/**
 * @public
 */
export type AdvancedSecurityEnabledModeType =
  (typeof AdvancedSecurityEnabledModeType)[keyof typeof AdvancedSecurityEnabledModeType];

/**
 * <p>Advanced security configuration options for additional authentication types in your
 *             user pool, including custom
 *             authentication. </p>
 * @public
 */
export interface AdvancedSecurityAdditionalFlowsType {
  /**
   * <p>The operating mode of advanced security features in custom authentication with
   *             <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html">
   *                 Custom authentication challenge Lambda triggers</a>.
   *         </p>
   * @public
   */
  CustomAuthMode?: AdvancedSecurityEnabledModeType | undefined;
}

/**
 * @public
 * @enum
 */
export const AdvancedSecurityModeType = {
  AUDIT: "AUDIT",
  ENFORCED: "ENFORCED",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type AdvancedSecurityModeType = (typeof AdvancedSecurityModeType)[keyof typeof AdvancedSecurityModeType];

/**
 * @public
 * @enum
 */
export const AliasAttributeType = {
  EMAIL: "email",
  PHONE_NUMBER: "phone_number",
  PREFERRED_USERNAME: "preferred_username",
} as const;

/**
 * @public
 */
export type AliasAttributeType = (typeof AliasAttributeType)[keyof typeof AliasAttributeType];

/**
 * <p>The Amazon Pinpoint analytics configuration necessary to collect metrics for a user
 *             pool.</p>
 *          <note>
 *             <p>In Regions where Amazon Pinpoint isn't available, user pools only support sending
 *                 events to Amazon Pinpoint projects in us-east-1. In Regions where Amazon Pinpoint is available, user
 *                 pools support sending events to Amazon Pinpoint projects within that same Region.</p>
 *          </note>
 * @public
 */
export interface AnalyticsConfigurationType {
  /**
   * <p>The application ID for an Amazon Pinpoint application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Pinpoint project. You can use the Amazon Pinpoint project
   *             to integrate with the chosen user pool Client. Amazon Cognito publishes events to the Amazon Pinpoint
   *             project that the app ARN declares.</p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The ARN of an Identity and Access Management role that authorizes Amazon Cognito to publish events to Amazon Pinpoint
   *             analytics.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The external ID.</p>
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * <p>If <code>UserDataShared</code> is <code>true</code>, Amazon Cognito includes user data in the
   *             events that it publishes to Amazon Pinpoint analytics.</p>
   * @public
   */
  UserDataShared?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateSoftwareTokenRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose software token you want to
   *             generate.</p>
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. This allows authentication of the user as part of the MFA setup process.</p>
   * @public
   */
  Session?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSoftwareTokenResponse {
  /**
   * <p>A unique generated shared secret code that is used in the TOTP algorithm to generate a
   *             one-time code.</p>
   * @public
   */
  SecretCode?: string | undefined;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. This allows authentication of the user as part of the MFA setup process.</p>
   * @public
   */
  Session?: string | undefined;
}

/**
 * <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
 * @public
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
 * <p>This exception is thrown when WAF doesn't allow your request based on a web
 *             ACL that's associated with your user pool.</p>
 * @public
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

/**
 * @public
 * @enum
 */
export const VerifiedAttributeType = {
  EMAIL: "email",
  PHONE_NUMBER: "phone_number",
} as const;

/**
 * @public
 */
export type VerifiedAttributeType = (typeof VerifiedAttributeType)[keyof typeof VerifiedAttributeType];

/**
 * <p>Represents the request to change a user password.</p>
 * @public
 */
export interface ChangePasswordRequest {
  /**
   * <p>The old password.</p>
   * @public
   */
  PreviousPassword: string | undefined;

  /**
   * <p>The new password.</p>
   * @public
   */
  ProposedPassword: string | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose password you want to
   *             change.</p>
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * <p>The response from the server to the change password request.</p>
 * @public
 */
export interface ChangePasswordResponse {}

/**
 * <p>The device verifier against which it is authenticated.</p>
 * @public
 */
export interface DeviceSecretVerifierConfigType {
  /**
   * <p>The password verifier.</p>
   * @public
   */
  PasswordVerifier?: string | undefined;

  /**
   * <p>The <a href="https://en.wikipedia.org/wiki/Salt_(cryptography)">salt</a>
   *          </p>
   * @public
   */
  Salt?: string | undefined;
}

/**
 * <p>Confirms the device request.</p>
 * @public
 */
export interface ConfirmDeviceRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose device you want to
   *             confirm.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The device key.</p>
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * <p>The configuration of the device secret verifier.</p>
   * @public
   */
  DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType | undefined;

  /**
   * <p>The device name.</p>
   * @public
   */
  DeviceName?: string | undefined;
}

/**
 * <p>Confirms the device response.</p>
 * @public
 */
export interface ConfirmDeviceResponse {
  /**
   * <p>Indicates whether the user confirmation must confirm the device response.</p>
   * @public
   */
  UserConfirmationNecessary?: boolean | undefined;
}

/**
 * <p>Contextual data, such as the user's device fingerprint, IP address, or location, used
 *             for evaluating the risk of an unexpected event by Amazon Cognito advanced security.</p>
 * @public
 */
export interface UserContextDataType {
  /**
   * <p>The source IP address of your user's device.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>Encoded device-fingerprint details that your app collected with the Amazon Cognito
   *             context data collection library. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint">Adding user device and session data to API requests</a>.</p>
   * @public
   */
  EncodedData?: string | undefined;
}

/**
 * <p>The request representing the confirmation for a password reset.</p>
 * @public
 */
export interface ConfirmForgotPasswordRequest {
  /**
   * <p>The app client ID of the app associated with the user pool.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message. For more information
   *             about <code>SecretHash</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>.</p>
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The confirmation code from your user's request to reset their password. For more
   *             information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html">ForgotPassword</a>.</p>
   * @public
   */
  ConfirmationCode: string | undefined;

  /**
   * <p>The new password that your user wants to set.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for
   *                 <code>ConfirmForgotPassword</code> calls.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the ConfirmForgotPassword API action, Amazon Cognito invokes the function that is
   *             assigned to the <i>post confirmation</i> trigger. When Amazon Cognito invokes this
   *             function, it passes a JSON payload, which the function receives as input. This payload
   *             contains a <code>clientMetadata</code> attribute, which provides the data that you
   *             assigned to the ClientMetadata parameter in your ConfirmForgotPassword request. In your
   *             function code in Lambda, you can process the <code>clientMetadata</code> value to
   *             enhance your workflow for your specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>The response from the server that results from a user's request to retrieve a
 *             forgotten password.</p>
 * @public
 */
export interface ConfirmForgotPasswordResponse {}

/**
 * <p>Represents the request to confirm registration of a user.</p>
 * @public
 */
export interface ConfirmSignUpRequest {
  /**
   * <p>The ID of the app client associated with the user pool.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message.</p>
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The confirmation code sent by a user's request to confirm registration.</p>
   * @public
   */
  ConfirmationCode: string | undefined;

  /**
   * <p>Boolean to be specified to force user confirmation irrespective of existing alias. By
   *             default set to <code>False</code>. If this parameter is set to <code>True</code> and the
   *             phone number/email used for sign up confirmation already exists as an alias with a
   *             different user, the API call will migrate the alias from the previous user to the newly
   *             created user being confirmed. If set to <code>False</code>, the API will throw an
   *                 <b>AliasExistsException</b> error.</p>
   * @public
   */
  ForceAliasCreation?: boolean | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>ConfirmSignUp</code>
   *             calls.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the ConfirmSignUp API action, Amazon Cognito invokes the function that is
   *             assigned to the <i>post confirmation</i> trigger. When Amazon Cognito invokes this
   *             function, it passes a JSON payload, which the function receives as input. This payload
   *             contains a <code>clientMetadata</code> attribute, which provides the data that you
   *             assigned to the ClientMetadata parameter in your ConfirmSignUp request. In your function
   *             code in Lambda, you can process the <code>clientMetadata</code> value to
   *             enhance your workflow for your specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>Represents the response from the server for the registration confirmation.</p>
 * @public
 */
export interface ConfirmSignUpResponse {}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * <p>The name of the group. Must be unique.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A string containing the description of the group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The role Amazon Resource Name (ARN) for the group.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A non-negative integer value that specifies the precedence of this group relative to
   *             the other groups that a user can belong to in the user pool. Zero is the highest
   *             precedence value. Groups with lower <code>Precedence</code> values take precedence over
   *             groups with higher or null <code>Precedence</code> values. If a user belongs to two or
   *             more groups, it is the group with the lowest precedence value whose role ARN is given in
   *             the user's tokens for the <code>cognito:roles</code> and
   *                 <code>cognito:preferred_role</code> claims.</p>
   *          <p>Two groups can have the same <code>Precedence</code> value. If this happens, neither
   *             group takes precedence over the other. If two groups with the same
   *                 <code>Precedence</code> have the same role ARN, that role is used in the
   *                 <code>cognito:preferred_role</code> claim in tokens for users in each group. If the
   *             two groups have different role ARNs, the <code>cognito:preferred_role</code> claim isn't
   *             set in users' tokens.</p>
   *          <p>The default <code>Precedence</code> value is null. The maximum <code>Precedence</code>
   *             value is <code>2^31-1</code>.</p>
   * @public
   */
  Precedence?: number | undefined;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * <p>The group object for the group.</p>
   * @public
   */
  Group?: GroupType | undefined;
}

/**
 * <p>This exception is thrown when Amazon Cognito encounters a group that already exists in the user
 *             pool.</p>
 * @public
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

/**
 * @public
 * @enum
 */
export const IdentityProviderTypeType = {
  Facebook: "Facebook",
  Google: "Google",
  LoginWithAmazon: "LoginWithAmazon",
  OIDC: "OIDC",
  SAML: "SAML",
  SignInWithApple: "SignInWithApple",
} as const;

/**
 * @public
 */
export type IdentityProviderTypeType = (typeof IdentityProviderTypeType)[keyof typeof IdentityProviderTypeType];

/**
 * @public
 */
export interface CreateIdentityProviderRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The IdP name.</p>
   * @public
   */
  ProviderName: string | undefined;

  /**
   * <p>The IdP type.</p>
   * @public
   */
  ProviderType: IdentityProviderTypeType | undefined;

  /**
   * <p>The scopes, URLs, and identifiers for your external identity provider. The following
   * examples describe the provider detail keys for each IdP type. These values and their
   * schema are subject to change. Social IdP <code>authorize_scopes</code> values must match
   * the values listed here.</p>
   *          <dl>
   *             <dt>OpenID Connect (OIDC)</dt>
   *             <dd>
   *                <p>Amazon Cognito accepts the following elements when it can't discover endpoint
   *                 URLs from <code>oidc_issuer</code>: <code>attributes_url</code>,
   *                     <code>authorize_url</code>, <code>jwks_uri</code>,
   *                     <code>token_url</code>.</p>
   *                <p>Create or update request: <code>"ProviderDetails": \{
   *                     "attributes_request_method": "GET", "attributes_url":
   *                     "https://auth.example.com/userInfo", "authorize_scopes": "openid profile
   *                     email", "authorize_url": "https://auth.example.com/authorize",
   *                     "client_id": "1example23456789", "client_secret":
   *                     "provider-app-client-secret", "jwks_uri":
   *                     "https://auth.example.com/.well-known/jwks.json", "oidc_issuer":
   *                     "https://auth.example.com", "token_url": "https://example.com/token"
   *                     \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_request_method":
   *                     "GET", "attributes_url": "https://auth.example.com/userInfo",
   *                     "attributes_url_add_attributes": "false", "authorize_scopes": "openid
   *                     profile email", "authorize_url": "https://auth.example.com/authorize",
   *                     "client_id": "1example23456789", "client_secret":
   *                     "provider-app-client-secret", "jwks_uri":
   *                     "https://auth.example.com/.well-known/jwks.json", "oidc_issuer":
   *                     "https://auth.example.com", "token_url": "https://example.com/token"
   *                     \}</code>
   *                </p>
   *             </dd>
   *             <dt>SAML</dt>
   *             <dd>
   *                <p>Create or update request with Metadata URL: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL":
   *                     "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm":
   *                     "rsa-sha256" \}</code>
   *                </p>
   *                <p>Create or update request with Metadata file: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true",
   *                     "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm":
   *                     "rsa-sha256" \}</code>
   *                </p>
   *                <p>The value of <code>MetadataFile</code> must be the plaintext metadata document with all
   *                 quote (") characters escaped by backslashes.</p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]",
   *                     "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm":
   *                     "rsa-sha256", "SLORedirectBindingURI":
   *                     "https://auth.example.com/slo/saml", "SSORedirectBindingURI":
   *                     "https://auth.example.com/sso/saml" \}</code>
   *                </p>
   *             </dd>
   *             <dt>LoginWithAmazon</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "profile postal_code", "client_id":
   *                     "amzn1.application-oa2-client.1example23456789", "client_secret":
   *                     "provider-app-client-secret"</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_url":
   *                     "https://api.amazon.com/user/profile", "attributes_url_add_attributes":
   *                     "false", "authorize_scopes": "profile postal_code", "authorize_url":
   *                     "https://www.amazon.com/ap/oa", "client_id":
   *                     "amzn1.application-oa2-client.1example23456789", "client_secret":
   *                     "provider-app-client-secret", "token_request_method": "POST",
   *                     "token_url": "https://api.amazon.com/auth/o2/token" \}</code>
   *                </p>
   *             </dd>
   *             <dt>Google</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "email profile openid", "client_id":
   *                     "1example23456789.apps.googleusercontent.com", "client_secret":
   *                     "provider-app-client-secret" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_url":
   *                     "https://people.googleapis.com/v1/people/me?personFields=",
   *                     "attributes_url_add_attributes": "true", "authorize_scopes": "email
   *                     profile openid", "authorize_url":
   *                     "https://accounts.google.com/o/oauth2/v2/auth", "client_id":
   *                     "1example23456789.apps.googleusercontent.com", "client_secret":
   *                     "provider-app-client-secret", "oidc_issuer":
   *                     "https://accounts.google.com", "token_request_method": "POST",
   *                     "token_url": "https://www.googleapis.com/oauth2/v4/token"
   *                 \}</code>
   *                </p>
   *             </dd>
   *             <dt>SignInWithApple</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE",
   *                     "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{
   *                     "attributes_url_add_attributes": "false", "authorize_scopes": "email
   *                     name", "authorize_url": "https://appleid.apple.com/auth/authorize",
   *                     "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer":
   *                     "https://appleid.apple.com", "team_id": "2EXAMPLE",
   *                     "token_request_method": "POST", "token_url":
   *                     "https://appleid.apple.com/auth/token" \}</code>
   *                </p>
   *             </dd>
   *             <dt>Facebook</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "api_version": "v17.0",
   *             "authorize_scopes": "public_profile, email", "client_id": "1example23456789",
   *             "client_secret": "provider-app-client-secret" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails":
   *             \{ "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=",
   *             "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email",
   *             "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id":
   *             "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method":
   *             "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" \}</code>
   *                </p>
   *             </dd>
   *          </dl>
   * @public
   */
  ProviderDetails: Record<string, string> | undefined;

  /**
   * <p>A mapping of IdP attributes to standard and custom user pool attributes.</p>
   * @public
   */
  AttributeMapping?: Record<string, string> | undefined;

  /**
   * <p>A list of IdP identifiers.</p>
   * @public
   */
  IdpIdentifiers?: string[] | undefined;
}

/**
 * <p>A container for information about an IdP.</p>
 * @public
 */
export interface IdentityProviderType {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The IdP name.</p>
   * @public
   */
  ProviderName?: string | undefined;

  /**
   * <p>The IdP type.</p>
   * @public
   */
  ProviderType?: IdentityProviderTypeType | undefined;

  /**
   * <p>The scopes, URLs, and identifiers for your external identity provider. The following
   * examples describe the provider detail keys for each IdP type. These values and their
   * schema are subject to change. Social IdP <code>authorize_scopes</code> values must match
   * the values listed here.</p>
   *          <dl>
   *             <dt>OpenID Connect (OIDC)</dt>
   *             <dd>
   *                <p>Amazon Cognito accepts the following elements when it can't discover endpoint
   *                 URLs from <code>oidc_issuer</code>: <code>attributes_url</code>,
   *                     <code>authorize_url</code>, <code>jwks_uri</code>,
   *                     <code>token_url</code>.</p>
   *                <p>Create or update request: <code>"ProviderDetails": \{
   *                     "attributes_request_method": "GET", "attributes_url":
   *                     "https://auth.example.com/userInfo", "authorize_scopes": "openid profile
   *                     email", "authorize_url": "https://auth.example.com/authorize",
   *                     "client_id": "1example23456789", "client_secret":
   *                     "provider-app-client-secret", "jwks_uri":
   *                     "https://auth.example.com/.well-known/jwks.json", "oidc_issuer":
   *                     "https://auth.example.com", "token_url": "https://example.com/token"
   *                     \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_request_method":
   *                     "GET", "attributes_url": "https://auth.example.com/userInfo",
   *                     "attributes_url_add_attributes": "false", "authorize_scopes": "openid
   *                     profile email", "authorize_url": "https://auth.example.com/authorize",
   *                     "client_id": "1example23456789", "client_secret":
   *                     "provider-app-client-secret", "jwks_uri":
   *                     "https://auth.example.com/.well-known/jwks.json", "oidc_issuer":
   *                     "https://auth.example.com", "token_url": "https://example.com/token"
   *                     \}</code>
   *                </p>
   *             </dd>
   *             <dt>SAML</dt>
   *             <dd>
   *                <p>Create or update request with Metadata URL: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL":
   *                     "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm":
   *                     "rsa-sha256" \}</code>
   *                </p>
   *                <p>Create or update request with Metadata file: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true",
   *                     "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm":
   *                     "rsa-sha256" \}</code>
   *                </p>
   *                <p>The value of <code>MetadataFile</code> must be the plaintext metadata document with all
   *                 quote (") characters escaped by backslashes.</p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "IDPInit": "true",
   *                     "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]",
   *                     "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm":
   *                     "rsa-sha256", "SLORedirectBindingURI":
   *                     "https://auth.example.com/slo/saml", "SSORedirectBindingURI":
   *                     "https://auth.example.com/sso/saml" \}</code>
   *                </p>
   *             </dd>
   *             <dt>LoginWithAmazon</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "profile postal_code", "client_id":
   *                     "amzn1.application-oa2-client.1example23456789", "client_secret":
   *                     "provider-app-client-secret"</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_url":
   *                     "https://api.amazon.com/user/profile", "attributes_url_add_attributes":
   *                     "false", "authorize_scopes": "profile postal_code", "authorize_url":
   *                     "https://www.amazon.com/ap/oa", "client_id":
   *                     "amzn1.application-oa2-client.1example23456789", "client_secret":
   *                     "provider-app-client-secret", "token_request_method": "POST",
   *                     "token_url": "https://api.amazon.com/auth/o2/token" \}</code>
   *                </p>
   *             </dd>
   *             <dt>Google</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "email profile openid", "client_id":
   *                     "1example23456789.apps.googleusercontent.com", "client_secret":
   *                     "provider-app-client-secret" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{ "attributes_url":
   *                     "https://people.googleapis.com/v1/people/me?personFields=",
   *                     "attributes_url_add_attributes": "true", "authorize_scopes": "email
   *                     profile openid", "authorize_url":
   *                     "https://accounts.google.com/o/oauth2/v2/auth", "client_id":
   *                     "1example23456789.apps.googleusercontent.com", "client_secret":
   *                     "provider-app-client-secret", "oidc_issuer":
   *                     "https://accounts.google.com", "token_request_method": "POST",
   *                     "token_url": "https://www.googleapis.com/oauth2/v4/token"
   *                 \}</code>
   *                </p>
   *             </dd>
   *             <dt>SignInWithApple</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "authorize_scopes":
   *                     "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE",
   *                     "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails": \{
   *                     "attributes_url_add_attributes": "false", "authorize_scopes": "email
   *                     name", "authorize_url": "https://appleid.apple.com/auth/authorize",
   *                     "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer":
   *                     "https://appleid.apple.com", "team_id": "2EXAMPLE",
   *                     "token_request_method": "POST", "token_url":
   *                     "https://appleid.apple.com/auth/token" \}</code>
   *                </p>
   *             </dd>
   *             <dt>Facebook</dt>
   *             <dd>
   *                <p>Create or update request: <code>"ProviderDetails": \{ "api_version": "v17.0",
   *             "authorize_scopes": "public_profile, email", "client_id": "1example23456789",
   *             "client_secret": "provider-app-client-secret" \}</code>
   *                </p>
   *                <p>Describe response: <code>"ProviderDetails":
   *             \{ "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=",
   *             "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email",
   *             "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id":
   *             "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method":
   *             "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" \}</code>
   *                </p>
   *             </dd>
   *          </dl>
   * @public
   */
  ProviderDetails?: Record<string, string> | undefined;

  /**
   * <p>A mapping of IdP attributes to standard and custom user pool attributes.</p>
   * @public
   */
  AttributeMapping?: Record<string, string> | undefined;

  /**
   * <p>A list of IdP identifiers.</p>
   * @public
   */
  IdpIdentifiers?: string[] | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface CreateIdentityProviderResponse {
  /**
   * <p>The newly created IdP object.</p>
   * @public
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * <p>This exception is thrown when the provider is already supported by the user
 *             pool.</p>
 * @public
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
 * @public
 */
export interface ResourceServerScopeType {
  /**
   * <p>The name of the scope.</p>
   * @public
   */
  ScopeName: string | undefined;

  /**
   * <p>A description of the scope.</p>
   * @public
   */
  ScopeDescription: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceServerRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A unique resource server identifier for the resource server. The identifier can be an
   *             API friendly name like <code>solar-system-data</code>. You can also set an API URL like
   *                 <code>https://solar-system-data-api.example.com</code> as your identifier.</p>
   *          <p>Amazon Cognito represents scopes in the access token in the format
   *                 <code>$resource-server-identifier/$scope</code>. Longer scope-identifier strings
   *             increase the size of your access tokens.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>A friendly name for the resource server.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of scopes. Each scope is a key-value map with the keys <code>name</code> and
   *                 <code>description</code>.</p>
   * @public
   */
  Scopes?: ResourceServerScopeType[] | undefined;
}

/**
 * <p>A container for information about a resource server for a user pool.</p>
 * @public
 */
export interface ResourceServerType {
  /**
   * <p>The user pool ID for the user pool that hosts the resource server.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>A unique resource server identifier for the resource server. The identifier can be an
   *             API friendly name like <code>solar-system-data</code>. You can also set an API URL like
   *                 <code>https://solar-system-data-api.example.com</code> as your identifier.</p>
   *          <p>Amazon Cognito represents scopes in the access token in the format
   *                 <code>$resource-server-identifier/$scope</code>. Longer scope-identifier strings
   *             increase the size of your access tokens.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>The name of the resource server.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A list of scopes that are defined for the resource server.</p>
   * @public
   */
  Scopes?: ResourceServerScopeType[] | undefined;
}

/**
 * @public
 */
export interface CreateResourceServerResponse {
  /**
   * <p>The newly created resource server.</p>
   * @public
   */
  ResourceServer: ResourceServerType | undefined;
}

/**
 * <p>Represents the request to create the user import job.</p>
 * @public
 */
export interface CreateUserImportJobRequest {
  /**
   * <p>The job name for the user import job.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The role ARN for the Amazon CloudWatch Logs Logging role for the user import job.</p>
   * @public
   */
  CloudWatchLogsRoleArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UserImportJobStatusType = {
  Created: "Created",
  Expired: "Expired",
  Failed: "Failed",
  InProgress: "InProgress",
  Pending: "Pending",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Succeeded: "Succeeded",
} as const;

/**
 * @public
 */
export type UserImportJobStatusType = (typeof UserImportJobStatusType)[keyof typeof UserImportJobStatusType];

/**
 * <p>The user import job type.</p>
 * @public
 */
export interface UserImportJobType {
  /**
   * <p>The job name for the user import job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The job ID for the user import job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The pre-signed URL to be used to upload the <code>.csv</code> file.</p>
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The date when the user import job was started.</p>
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * <p>The date when the user import job was completed.</p>
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * <p>The status of the user import job. One of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Created</code> - The job was created but not started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Pending</code> - A transition state. You have started the job, but it
   *                     has not begun importing users yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InProgress</code> - The job has started, and users are being
   *                     imported.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopping</code> - You have stopped the job, but the job has not stopped
   *                     importing users yet.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Stopped</code> - You have stopped the job, and the job has stopped
   *                     importing users.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Succeeded</code> - The job has completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The job has stopped due to an error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Expired</code> - You created a job, but did not start the job within
   *                     24-48 hours. All data associated with the job was deleted, and the job can't be
   *                     started.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: UserImportJobStatusType | undefined;

  /**
   * <p>The role Amazon Resource Name (ARN) for the Amazon CloudWatch Logging role for the user import
   *             job. For more information, see "Creating the CloudWatch Logs IAM Role" in the Amazon Cognito Developer
   *             Guide.</p>
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * <p>The number of users that were successfully imported.</p>
   * @public
   */
  ImportedUsers?: number | undefined;

  /**
   * <p>The number of users that were skipped.</p>
   * @public
   */
  SkippedUsers?: number | undefined;

  /**
   * <p>The number of users that couldn't be imported.</p>
   * @public
   */
  FailedUsers?: number | undefined;

  /**
   * <p>The message returned when the user import job is completed.</p>
   * @public
   */
  CompletionMessage?: string | undefined;
}

/**
 * <p>Represents the response from the server to the request to create the user import
 *             job.</p>
 * @public
 */
export interface CreateUserImportJobResponse {
  /**
   * <p>The job object that represents the user import job.</p>
   * @public
   */
  UserImportJob?: UserImportJobType | undefined;
}

/**
 * @public
 * @enum
 */
export const DeletionProtectionType = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type DeletionProtectionType = (typeof DeletionProtectionType)[keyof typeof DeletionProtectionType];

/**
 * <p>The device-remembering configuration for a user pool. A <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">
 *                 DescribeUserPool</a> request returns a null value for this object when the user
 *             pool isn't configured to remember devices. When device remembering is active, you can
 *             remember a user's device with a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html">ConfirmDevice</a> API request. Additionally. when the property
 *                 <code>DeviceOnlyRememberedOnUserPrompt</code> is <code>true</code>, you must follow
 *                 <code>ConfirmDevice</code> with an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html">UpdateDeviceStatus</a> API request that sets the user's device to
 *                 <code>remembered</code> or <code>not_remembered</code>.</p>
 *          <p>To sign in with a remembered device, include <code>DEVICE_KEY</code> in the
 *             authentication parameters in your user's <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">
 *                 InitiateAuth</a> request. If your app doesn't include a <code>DEVICE_KEY</code>
 *             parameter, the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html#API_InitiateAuth_ResponseSyntax">response</a> from Amazon Cognito includes newly-generated <code>DEVICE_KEY</code> and
 *                 <code>DEVICE_GROUP_KEY</code> values under <code>NewDeviceMetadata</code>. Store
 *             these values to use in future device-authentication requests.</p>
 *          <note>
 *             <p>When you provide a value for any property of <code>DeviceConfiguration</code>, you
 *                 activate the device remembering for the user pool.</p>
 *          </note>
 * @public
 */
export interface DeviceConfigurationType {
  /**
   * <p>When true, a remembered device can sign in with device authentication instead of SMS
   *             and time-based one-time password (TOTP) factors for multi-factor authentication
   *             (MFA).</p>
   *          <note>
   *             <p>Whether or not <code>ChallengeRequiredOnNewDevice</code> is true, users who sign
   *                 in with devices that have not been confirmed or remembered must still provide a
   *                 second factor in a user pool that requires MFA.</p>
   *          </note>
   * @public
   */
  ChallengeRequiredOnNewDevice?: boolean | undefined;

  /**
   * <p>When true, Amazon Cognito doesn't automatically remember a user's device when your app sends a
   *                 <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmDevice.html">
   *                 ConfirmDevice</a> API request. In your app, create a prompt for your user to
   *             choose whether they want to remember their device. Return the user's choice in an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateDeviceStatus.html">
   *                 UpdateDeviceStatus</a> API request.</p>
   *          <p>When <code>DeviceOnlyRememberedOnUserPrompt</code> is <code>false</code>, Amazon
   *             Cognito immediately remembers devices that you register in a <code>ConfirmDevice</code>
   *             API request.</p>
   * @public
   */
  DeviceOnlyRememberedOnUserPrompt?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const EmailSendingAccountType = {
  COGNITO_DEFAULT: "COGNITO_DEFAULT",
  DEVELOPER: "DEVELOPER",
} as const;

/**
 * @public
 */
export type EmailSendingAccountType = (typeof EmailSendingAccountType)[keyof typeof EmailSendingAccountType];

/**
 * <p>The email configuration of your user pool. The email configuration type sets your
 *             preferred sending method, Amazon Web Services Region, and sender for messages from your user
 *             pool.</p>
 *          <note>
 *             <p>Amazon Cognito can send email messages with Amazon Simple Email Service resources in the Amazon Web Services Region where
 *                 you created your user pool, and in alternate Regions in some cases. For more
 *                 information on the supported Regions, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email settings for Amazon Cognito user pools</a>.</p>
 *          </note>
 * @public
 */
export interface EmailConfigurationType {
  /**
   * <p>The ARN of a verified email address or an address from a verified domain in Amazon SES. You
   *             can set a <code>SourceArn</code> email from a verified domain only with an API request.
   *             You can set a verified email address, but not an address in a verified domain, in the
   *             Amazon Cognito console. Amazon Cognito uses the email address that you provide in one of the following
   *             ways, depending on the value that you specify for the <code>EmailSendingAccount</code>
   *             parameter:</p>
   *          <ul>
   *             <li>
   *                <p>If you specify <code>COGNITO_DEFAULT</code>, Amazon Cognito uses this address as the
   *                     custom FROM address when it emails your users using its built-in email
   *                     account.</p>
   *             </li>
   *             <li>
   *                <p>If you specify <code>DEVELOPER</code>, Amazon Cognito emails your users with this
   *                     address by calling Amazon SES on your behalf.</p>
   *             </li>
   *          </ul>
   *          <p>The Region value of the <code>SourceArn</code> parameter must indicate a supported
   *             Amazon Web Services Region of your user pool. Typically, the Region in the <code>SourceArn</code> and
   *             the user pool Region are the same. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html#user-pool-email-developer-region-mapping">Amazon SES email configuration regions</a> in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html">Amazon Cognito Developer
   *                 Guide</a>.</p>
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * <p>The destination to which the receiver of the email should reply.</p>
   * @public
   */
  ReplyToEmailAddress?: string | undefined;

  /**
   * <p>Specifies whether Amazon Cognito uses its built-in functionality to send your users email
   *             messages, or uses your Amazon Simple Email Service email configuration. Specify one of the following
   *             values:</p>
   *          <dl>
   *             <dt>COGNITO_DEFAULT</dt>
   *             <dd>
   *                <p>When Amazon Cognito emails your users, it uses its built-in email functionality.
   *                         When you use the default option, Amazon Cognito allows only a limited number of
   *                         emails each day for your user pool. For typical production environments, the
   *                         default email limit is less than the required delivery volume. To achieve a
   *                         higher delivery volume, specify DEVELOPER to use your Amazon SES email
   *                         configuration.</p>
   *                <p>To look up the email delivery limit for the default option, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/limits.html">Limits</a> in the <i>Amazon Cognito Developer
   *                         Guide</i>.</p>
   *                <p>The default FROM address is <code>no-reply@verificationemail.com</code>.
   *                         To customize the FROM address, provide the Amazon Resource Name (ARN) of an
   *                         Amazon SES verified email address for the <code>SourceArn</code>
   *                         parameter.</p>
   *             </dd>
   *             <dt>DEVELOPER</dt>
   *             <dd>
   *                <p>When Amazon Cognito emails your users, it uses your Amazon SES configuration. Amazon Cognito
   *                         calls Amazon SES on your behalf to send email from your verified email address.
   *                         When you use this option, the email delivery limits are the same limits that
   *                         apply to your Amazon SES verified email address in your Amazon Web Services account.</p>
   *                <p>If you use this option, provide the ARN of an Amazon SES verified email address
   *                         for the <code>SourceArn</code> parameter.</p>
   *                <p>Before Amazon Cognito can email your users, it requires additional permissions to
   *                         call Amazon SES on your behalf. When you update your user pool with this option,
   *                         Amazon Cognito creates a <i>service-linked role</i>, which is a type of
   *                         role in your Amazon Web Services account. This role contains the permissions
   *                         that allow you to access Amazon SES and send email messages from your email
   *                         address. For more information about the service-linked role that Amazon Cognito
   *                         creates, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/using-service-linked-roles.html">Using Service-Linked Roles for Amazon Cognito</a> in the
   *                             <i>Amazon Cognito Developer Guide</i>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  EmailSendingAccount?: EmailSendingAccountType | undefined;

  /**
   * <p>Either the sender’s email address or the sender’s name with their email address. For
   *             example, <code>testuser@example.com</code> or <code>Test User
   *                 <testuser@example.com></code>. This address appears before the body of the
   *             email.</p>
   * @public
   */
  From?: string | undefined;

  /**
   * <p>The set of configuration rules that can be applied to emails sent using Amazon Simple Email Service. A
   *             configuration set is applied to an email by including a reference to the configuration
   *             set in the headers of the email. Once applied, all of the rules in that configuration
   *             set are applied to the email. Configuration sets can be used to apply the following
   *             types of rules to emails: </p>
   *          <dl>
   *             <dt>Event publishing</dt>
   *             <dd>
   *                <p>Amazon Simple Email Service can track the number of send, delivery, open, click, bounce, and
   *                         complaint events for each email sent. Use event publishing to send
   *                         information about these events to other Amazon Web Services services such as and
   *                         Amazon CloudWatch</p>
   *             </dd>
   *             <dt>IP pool management</dt>
   *             <dd>
   *                <p>When leasing dedicated IP addresses with Amazon Simple Email Service, you can create groups
   *                         of IP addresses, called dedicated IP pools. You can then associate the
   *                         dedicated IP pools with configuration sets.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  ConfigurationSet?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomEmailSenderLambdaVersionType = {
  V1_0: "V1_0",
} as const;

/**
 * @public
 */
export type CustomEmailSenderLambdaVersionType =
  (typeof CustomEmailSenderLambdaVersionType)[keyof typeof CustomEmailSenderLambdaVersionType];

/**
 * <p>The properties of a custom email sender Lambda trigger.</p>
 * @public
 */
export interface CustomEmailLambdaVersionConfigType {
  /**
   * <p>The user pool trigger version of the request that Amazon Cognito sends to your Lambda function. Higher-numbered versions add fields that support new features.</p>
   *          <p>You must use a <code>LambdaVersion</code> of <code>V1_0</code> with a custom sender
   *             function.</p>
   * @public
   */
  LambdaVersion: CustomEmailSenderLambdaVersionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the function that you want to assign to your Lambda trigger.</p>
   * @public
   */
  LambdaArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CustomSMSSenderLambdaVersionType = {
  V1_0: "V1_0",
} as const;

/**
 * @public
 */
export type CustomSMSSenderLambdaVersionType =
  (typeof CustomSMSSenderLambdaVersionType)[keyof typeof CustomSMSSenderLambdaVersionType];

/**
 * <p>The properties of a custom SMS sender Lambda trigger.</p>
 * @public
 */
export interface CustomSMSLambdaVersionConfigType {
  /**
   * <p>The user pool trigger version of the request that Amazon Cognito sends to your Lambda function. Higher-numbered versions add fields that support new features.</p>
   *          <p>You must use a <code>LambdaVersion</code> of <code>V1_0</code> with a custom sender
   *             function.</p>
   * @public
   */
  LambdaVersion: CustomSMSSenderLambdaVersionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the function that you want to assign to your Lambda trigger.</p>
   * @public
   */
  LambdaArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PreTokenGenerationLambdaVersionType = {
  V1_0: "V1_0",
  V2_0: "V2_0",
} as const;

/**
 * @public
 */
export type PreTokenGenerationLambdaVersionType =
  (typeof PreTokenGenerationLambdaVersionType)[keyof typeof PreTokenGenerationLambdaVersionType];

/**
 * <p>The properties of a pre token generation Lambda trigger.</p>
 * @public
 */
export interface PreTokenGenerationVersionConfigType {
  /**
   * <p>The user pool trigger version of the request that Amazon Cognito sends to your Lambda function. Higher-numbered versions add fields that support new features.</p>
   * @public
   */
  LambdaVersion: PreTokenGenerationLambdaVersionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the function that you want to assign to your Lambda trigger.</p>
   *          <p>This parameter and the <code>PreTokenGeneration</code> property of
   *                 <code>LambdaConfig</code> have the same value. For new instances of pre token
   *             generation triggers, set <code>LambdaArn</code>.</p>
   * @public
   */
  LambdaArn: string | undefined;
}

/**
 * <p>Specifies the configuration for Lambda triggers.</p>
 * @public
 */
export interface LambdaConfigType {
  /**
   * <p>A pre-registration Lambda trigger.</p>
   * @public
   */
  PreSignUp?: string | undefined;

  /**
   * <p>A custom Message Lambda trigger.</p>
   * @public
   */
  CustomMessage?: string | undefined;

  /**
   * <p>A post-confirmation Lambda trigger.</p>
   * @public
   */
  PostConfirmation?: string | undefined;

  /**
   * <p>A pre-authentication Lambda trigger.</p>
   * @public
   */
  PreAuthentication?: string | undefined;

  /**
   * <p>A post-authentication Lambda trigger.</p>
   * @public
   */
  PostAuthentication?: string | undefined;

  /**
   * <p>Defines the authentication challenge.</p>
   * @public
   */
  DefineAuthChallenge?: string | undefined;

  /**
   * <p>Creates an authentication challenge.</p>
   * @public
   */
  CreateAuthChallenge?: string | undefined;

  /**
   * <p>Verifies the authentication challenge response.</p>
   * @public
   */
  VerifyAuthChallengeResponse?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the function that you want to assign to your Lambda trigger.</p>
   *          <p>Set this parameter for legacy purposes. If you also set an ARN in
   *                 <code>PreTokenGenerationConfig</code>, its value must be identical to
   *                 <code>PreTokenGeneration</code>. For new instances of pre token generation triggers,
   *             set the <code>LambdaArn</code> of <code>PreTokenGenerationConfig</code>.</p>
   *          <p>You can set <code></code>
   *          </p>
   * @public
   */
  PreTokenGeneration?: string | undefined;

  /**
   * <p>The user migration Lambda config type.</p>
   * @public
   */
  UserMigration?: string | undefined;

  /**
   * <p>The detailed configuration of a pre token generation trigger. If you also set an ARN
   *             in <code>PreTokenGeneration</code>, its value must be identical to
   *                 <code>PreTokenGenerationConfig</code>.</p>
   * @public
   */
  PreTokenGenerationConfig?: PreTokenGenerationVersionConfigType | undefined;

  /**
   * <p>A custom SMS sender Lambda trigger.</p>
   * @public
   */
  CustomSMSSender?: CustomSMSLambdaVersionConfigType | undefined;

  /**
   * <p>A custom email sender Lambda trigger.</p>
   * @public
   */
  CustomEmailSender?: CustomEmailLambdaVersionConfigType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an <a href="/kms/latest/developerguide/concepts.html#master_keys">KMS key</a>. Amazon Cognito
   *             uses the key to encrypt codes and temporary passwords sent to
   *                 <code>CustomEmailSender</code> and <code>CustomSMSSender</code>.</p>
   * @public
   */
  KMSKeyID?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UserPoolMfaType = {
  OFF: "OFF",
  ON: "ON",
  OPTIONAL: "OPTIONAL",
} as const;

/**
 * @public
 */
export type UserPoolMfaType = (typeof UserPoolMfaType)[keyof typeof UserPoolMfaType];

/**
 * <p>The password policy type.</p>
 * @public
 */
export interface PasswordPolicyType {
  /**
   * <p>The minimum length of the password in the policy that you have set. This value can't
   *             be less than 6.</p>
   * @public
   */
  MinimumLength?: number | undefined;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to
   *             use at least one uppercase letter in their password.</p>
   * @public
   */
  RequireUppercase?: boolean | undefined;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to
   *             use at least one lowercase letter in their password.</p>
   * @public
   */
  RequireLowercase?: boolean | undefined;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to
   *             use at least one number in their password.</p>
   * @public
   */
  RequireNumbers?: boolean | undefined;

  /**
   * <p>In the password policy that you have set, refers to whether you have required users to
   *             use at least one symbol in their password.</p>
   * @public
   */
  RequireSymbols?: boolean | undefined;

  /**
   * <p>The number of previous passwords that you want Amazon Cognito to restrict each user from
   *             reusing. Users can't set a password that matches any of <code>n</code> previous
   *             passwords, where <code>n</code> is the value of <code>PasswordHistorySize</code>.</p>
   *          <p>Password history isn't enforced and isn't displayed in <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_DescribeUserPool.html">DescribeUserPool</a> responses when you set this value to
   *                 <code>0</code> or don't provide it. To activate this setting, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">
   *                      advanced security features</a> must be active in your user pool.</p>
   * @public
   */
  PasswordHistorySize?: number | undefined;

  /**
   * <p>The number of days a temporary password is valid in the password policy. If the user
   *             doesn't sign in during this time, an administrator must reset their password. Defaults
   *             to <code>7</code>. If you submit a value of <code>0</code>, Amazon Cognito treats it as a null
   *             value and sets <code>TemporaryPasswordValidityDays</code> to its default value.</p>
   *          <note>
   *             <p>When you set <code>TemporaryPasswordValidityDays</code> for a user pool, you can
   *                 no longer set a value for the legacy <code>UnusedAccountValidityDays</code>
   *                 parameter in that user pool.</p>
   *          </note>
   * @public
   */
  TemporaryPasswordValidityDays?: number | undefined;
}

/**
 * <p>The policy associated with a user pool.</p>
 * @public
 */
export interface UserPoolPolicyType {
  /**
   * <p>The password policy.</p>
   * @public
   */
  PasswordPolicy?: PasswordPolicyType | undefined;
}

/**
 * <p>The SMS configuration type is the settings that your Amazon Cognito user pool must use to send
 *             an SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS
 *             messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an
 *             Identity and Access Management (IAM) role in your Amazon Web Services account.</p>
 * @public
 */
export interface SmsConfigurationType {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS caller. This is the ARN of the IAM role
   *             in your Amazon Web Services account that Amazon Cognito will use to send SMS messages. SMS
   *             messages are subject to a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html">spending limit</a>. </p>
   * @public
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
   *          <p>For more information about the <code>ExternalId</code> of a role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html">How to use an
   *                 external ID when granting access to your Amazon Web Services resources to a third
   *                 party</a>
   *          </p>
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region to use with Amazon SNS integration. You can choose the same Region as your
   *             user pool, or a supported <b>Legacy Amazon SNS alternate
   *             Region</b>. </p>
   *          <p>
   *             Amazon Cognito resources in the Asia Pacific (Seoul) Amazon Web Services Region must use your Amazon SNS
   *             configuration in the Asia Pacific (Tokyo) Region. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html">SMS message settings for Amazon Cognito user pools</a>.</p>
   * @public
   */
  SnsRegion?: string | undefined;
}

/**
 * <p>The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>,
 * a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For
 * more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates">
 * Verifying updates to email addresses and phone numbers</a>.</p>
 * @public
 */
export interface UserAttributeUpdateSettingsType {
  /**
   * <p>Requires that your user verifies their email address, phone number, or both before
   *             Amazon Cognito updates the value of that attribute. When you update a user attribute that has
   *             this option activated, Amazon Cognito sends a verification message to the new phone number or
   *             email address. Amazon Cognito doesn’t change the value of the attribute until your user responds
   *             to the verification message and confirms the new value.</p>
   *          <p>You can verify an updated email address or phone number with a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifyUserAttribute.html">VerifyUserAttribute</a> API request. You can also call the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html">AdminUpdateUserAttributes</a> API and set <code>email_verified</code> or
   *                 <code>phone_number_verified</code> to true.</p>
   *          <p>When <code>AttributesRequireVerificationBeforeUpdate</code> is false, your user pool
   *             doesn't require that your users verify attribute changes before Amazon Cognito updates them. In a
   *             user pool where <code>AttributesRequireVerificationBeforeUpdate</code> is false, API
   *             operations that change attribute values can immediately update a user’s
   *                 <code>email</code> or <code>phone_number</code> attribute.</p>
   * @public
   */
  AttributesRequireVerificationBeforeUpdate?: VerifiedAttributeType[] | undefined;
}

/**
 * @public
 * @enum
 */
export const UsernameAttributeType = {
  EMAIL: "email",
  PHONE_NUMBER: "phone_number",
} as const;

/**
 * @public
 */
export type UsernameAttributeType = (typeof UsernameAttributeType)[keyof typeof UsernameAttributeType];

/**
 * <p>The username configuration type. </p>
 * @public
 */
export interface UsernameConfigurationType {
  /**
   * <p>Specifies whether user name case sensitivity will be applied for all users in the user
   *             pool through Amazon Cognito APIs. For most use cases, set case sensitivity to <code>False</code>
   *             (case insensitive) as a best practice. When usernames and email addresses are case
   *             insensitive, users can sign in as the same user when they enter a different
   *             capitalization of their user name.</p>
   *          <p>Valid values include:</p>
   *          <dl>
   *             <dt>True</dt>
   *             <dd>
   *                <p>Enables case sensitivity for all username input. When this option is set
   *                         to <code>True</code>, users must sign in using the exact capitalization of
   *                         their given username, such as “UserName”. This is the default value.</p>
   *             </dd>
   *             <dt>False</dt>
   *             <dd>
   *                <p>Enables case insensitivity for all username input. For example, when this
   *                         option is set to <code>False</code>, users can sign in using
   *                             <code>username</code>, <code>USERNAME</code>, or <code>UserName</code>.
   *                         This option also enables both <code>preferred_username</code> and
   *                             <code>email</code> alias to be case insensitive, in addition to the
   *                             <code>username</code> attribute.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  CaseSensitive: boolean | undefined;
}

/**
 * <p>User pool add-ons. Contains settings for activation of advanced security features. To
 *     log user security information but take no action, set to <code>AUDIT</code>. To
 *     configure automatic security responses to risky traffic to your user pool, set to
 *         <code>ENFORCED</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p>
 * @public
 */
export interface UserPoolAddOnsType {
  /**
   * <p>The operating mode of advanced security features for standard authentication types
   *             in your user pool, including username-password and secure remote password (SRP)
   *             authentication.
   *         </p>
   * @public
   */
  AdvancedSecurityMode: AdvancedSecurityModeType | undefined;

  /**
   * <p>Advanced security configuration options for additional authentication types in your
   *             user pool, including custom
   *             authentication. </p>
   * @public
   */
  AdvancedSecurityAdditionalFlows?: AdvancedSecurityAdditionalFlowsType | undefined;
}

/**
 * @public
 * @enum
 */
export const DefaultEmailOptionType = {
  CONFIRM_WITH_CODE: "CONFIRM_WITH_CODE",
  CONFIRM_WITH_LINK: "CONFIRM_WITH_LINK",
} as const;

/**
 * @public
 */
export type DefaultEmailOptionType = (typeof DefaultEmailOptionType)[keyof typeof DefaultEmailOptionType];

/**
 * <p>The template for verification messages.</p>
 * @public
 */
export interface VerificationMessageTemplateType {
  /**
   * <p>The template for SMS messages that Amazon Cognito sends to your users.</p>
   * @public
   */
  SmsMessage?: string | undefined;

  /**
   * <p>The template for email messages that Amazon Cognito sends to your users. You can set an
   *                 <code>EmailMessage</code> template only if the value of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email
   *             messages with your own Amazon SES configuration.</p>
   * @public
   */
  EmailMessage?: string | undefined;

  /**
   * <p>The subject line for the email message template. You can set an
   *                 <code>EmailSubject</code> template only if the value of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email
   *             messages with your own Amazon SES configuration.</p>
   * @public
   */
  EmailSubject?: string | undefined;

  /**
   * <p>The email message template for sending a confirmation link to the user. You can set an
   *                 <code>EmailMessageByLink</code> template only if the value of <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email
   *             messages with your own Amazon SES configuration.</p>
   * @public
   */
  EmailMessageByLink?: string | undefined;

  /**
   * <p>The subject line for the email message template for sending a confirmation link to the
   *             user. You can set an <code>EmailSubjectByLink</code> template only if the value of
   *                 <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount"> EmailSendingAccount</a> is <code>DEVELOPER</code>. When your <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is <code>DEVELOPER</code>, your user pool sends email
   *             messages with your own Amazon SES configuration.</p>
   * @public
   */
  EmailSubjectByLink?: string | undefined;

  /**
   * <p>The default email option.</p>
   * @public
   */
  DefaultEmailOption?: DefaultEmailOptionType | undefined;
}

/**
 * <p>Represents the request to create a user pool.</p>
 * @public
 */
export interface CreateUserPoolRequest {
  /**
   * <p>A string used to name the user pool.</p>
   * @public
   */
  PoolName: string | undefined;

  /**
   * <p>The policies associated with the new user pool.</p>
   * @public
   */
  Policies?: UserPoolPolicyType | undefined;

  /**
   * <p>When active, <code>DeletionProtection</code> prevents accidental deletion of your user
   * pool. Before you can delete a user pool that you have protected against deletion, you
   * must deactivate this feature.</p>
   *          <p>When you try to delete a protected user pool in a <code>DeleteUserPool</code> API request,
   * Amazon Cognito returns an <code>InvalidParameterException</code> error. To delete a protected user pool,
   * send a new <code>DeleteUserPool</code> request after you deactivate deletion protection in an
   * <code>UpdateUserPool</code> API request.</p>
   * @public
   */
  DeletionProtection?: DeletionProtectionType | undefined;

  /**
   * <p>The Lambda trigger configuration information for the new user pool.</p>
   *          <note>
   *             <p>In a push model, event sources (such as Amazon S3 and custom applications) need
   *                 permission to invoke a function. So you must make an extra call to add permission
   *                 for these event sources to invoke your Lambda function.</p>
   *             <p></p>
   *             <p>For more information on using the Lambda API to add permission, see<a href="https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html">
   *                     AddPermission </a>. </p>
   *             <p>For adding permission using the CLI, see<a href="https://docs.aws.amazon.com/cli/latest/reference/lambda/add-permission.html"> add-permission
   *                 </a>.</p>
   *          </note>
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * <p>The attributes to be auto-verified. Possible values: <b>email</b>, <b>phone_number</b>.</p>
   * @public
   */
  AutoVerifiedAttributes?: VerifiedAttributeType[] | undefined;

  /**
   * <p>Attributes supported as an alias for this user pool. Possible values: <b>phone_number</b>, <b>email</b>, or
   *                 <b>preferred_username</b>.</p>
   * @public
   */
  AliasAttributes?: AliasAttributeType[] | undefined;

  /**
   * <p>Specifies whether a user can use an email address or phone number as a username when
   *             they sign up.</p>
   * @public
   */
  UsernameAttributes?: UsernameAttributeType[] | undefined;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   * @public
   */
  SmsVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   * @public
   */
  EmailVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   * @public
   */
  EmailVerificationSubject?: string | undefined;

  /**
   * <p>The template for the verification message that the user sees when the app requests
   *             permission to access the user's information.</p>
   * @public
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType | undefined;

  /**
   * <p>A string representing the SMS authentication message.</p>
   * @public
   */
  SmsAuthenticationMessage?: string | undefined;

  /**
   * <p>Specifies MFA configuration details.</p>
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * <p>The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>,
   * a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For
   * more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates">
   * Verifying updates to email addresses and phone numbers</a>.</p>
   * @public
   */
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType | undefined;

  /**
   * <p>The device-remembering configuration for a user pool. A null value indicates that you
   *             have deactivated device remembering in your user pool.</p>
   *          <note>
   *             <p>When you provide a value for any <code>DeviceConfiguration</code> field, you
   *                 activate the Amazon Cognito device-remembering feature.</p>
   *          </note>
   * @public
   */
  DeviceConfiguration?: DeviceConfigurationType | undefined;

  /**
   * <p>The email configuration of your user pool. The email configuration type sets your
   *             preferred sending method, Amazon Web Services Region, and sender for messages from your user
   *             pool.</p>
   * @public
   */
  EmailConfiguration?: EmailConfigurationType | undefined;

  /**
   * <p>The SMS configuration with the settings that your Amazon Cognito user pool must use to send an
   *             SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages
   *             with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management
   *             (IAM) role in your Amazon Web Services account.</p>
   * @public
   */
  SmsConfiguration?: SmsConfigurationType | undefined;

  /**
   * <p>The tag keys and values to assign to the user pool. A tag is a label that you can use
   *             to categorize and manage user pools in different ways, such as by purpose, owner,
   *             environment, or other criteria.</p>
   * @public
   */
  UserPoolTags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for <code>AdminCreateUser</code> requests.</p>
   * @public
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType | undefined;

  /**
   * <p>An array of schema attributes for the new user pool. These attributes can be standard
   *             or custom attributes.</p>
   * @public
   */
  Schema?: SchemaAttributeType[] | undefined;

  /**
   * <p>User pool add-ons. Contains settings for activation of advanced security features. To
   *     log user security information but take no action, set to <code>AUDIT</code>. To
   *     configure automatic security responses to risky traffic to your user pool, set to
   *         <code>ENFORCED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p>
   * @public
   */
  UserPoolAddOns?: UserPoolAddOnsType | undefined;

  /**
   * <p>Case sensitivity on the username input for the selected sign-in option. When case
   *             sensitivity is set to <code>False</code> (case insensitive), users can sign in with any
   *             combination of capital and lowercase letters. For example, <code>username</code>,
   *                 <code>USERNAME</code>, or <code>UserName</code>, or for email,
   *                 <code>email@example.com</code> or <code>EMaiL@eXamplE.Com</code>. For most use
   *             cases, set case sensitivity to <code>False</code> (case insensitive) as a best practice.
   *             When usernames and email addresses are case insensitive, Amazon Cognito treats any variation in
   *             case as the same user, and prevents a case variation from being assigned to the same
   *             attribute for a different user.</p>
   *          <p>This configuration is immutable after you set it. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UsernameConfigurationType.html">UsernameConfigurationType</a>.</p>
   * @public
   */
  UsernameConfiguration?: UsernameConfigurationType | undefined;

  /**
   * <p>The available verified method a user can use to recover their password when they call
   *                 <code>ForgotPassword</code>. You can use this setting to define a preferred method
   *             when a user has more than one method available. With this setting, SMS doesn't qualify
   *             for a valid password recovery mechanism if the user also has SMS multi-factor
   *             authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy
   *             behavior to determine the recovery method where SMS is preferred through email.</p>
   * @public
   */
  AccountRecoverySetting?: AccountRecoverySettingType | undefined;
}

/**
 * @public
 * @enum
 */
export const StatusType = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;

/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * <p>A container for information about the user pool.</p>
 * @public
 */
export interface UserPoolType {
  /**
   * <p>The ID of the user pool.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the user pool.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The policies associated with the user pool.</p>
   * @public
   */
  Policies?: UserPoolPolicyType | undefined;

  /**
   * <p>When active, <code>DeletionProtection</code> prevents accidental deletion of your user
   * pool. Before you can delete a user pool that you have protected against deletion, you
   * must deactivate this feature.</p>
   *          <p>When you try to delete a protected user pool in a <code>DeleteUserPool</code> API request,
   * Amazon Cognito returns an <code>InvalidParameterException</code> error. To delete a protected user pool,
   * send a new <code>DeleteUserPool</code> request after you deactivate deletion protection in an
   * <code>UpdateUserPool</code> API request.</p>
   * @public
   */
  DeletionProtection?: DeletionProtectionType | undefined;

  /**
   * <p>The Lambda triggers associated with the user pool.</p>
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * @deprecated
   *
   * <p>This parameter is no longer used.</p>
   * @public
   */
  Status?: StatusType | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>A list of the user attributes and their properties in your user pool. The attribute
   *             schema contains standard attributes, custom attributes with a <code>custom:</code>
   *             prefix, and developer attributes with a <code>dev:</code> prefix. For more information,
   *             see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html">User pool
   *                 attributes</a>.</p>
   *          <p>Developer-only attributes are a legacy feature of user pools, are read-only to all app
   *             clients. You can create and update developer-only attributes only with IAM-authenticated
   *             API operations. Use app client read/write permissions instead.</p>
   * @public
   */
  SchemaAttributes?: SchemaAttributeType[] | undefined;

  /**
   * <p>The attributes that are auto-verified in a user pool.</p>
   * @public
   */
  AutoVerifiedAttributes?: VerifiedAttributeType[] | undefined;

  /**
   * <p>The attributes that are aliased in a user pool.</p>
   * @public
   */
  AliasAttributes?: AliasAttributeType[] | undefined;

  /**
   * <p>Specifies whether a user can use an email address or phone number as a username when
   *             they sign up.</p>
   * @public
   */
  UsernameAttributes?: UsernameAttributeType[] | undefined;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   * @public
   */
  SmsVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   * @public
   */
  EmailVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used. See <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerificationMessageTemplateType.html">VerificationMessageTemplateType</a>.</p>
   * @public
   */
  EmailVerificationSubject?: string | undefined;

  /**
   * <p>The template for verification messages.</p>
   * @public
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType | undefined;

  /**
   * <p>The contents of the SMS authentication message.</p>
   * @public
   */
  SmsAuthenticationMessage?: string | undefined;

  /**
   * <p>The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>,
   * a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For
   * more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates">
   * Verifying updates to email addresses and phone numbers</a>.</p>
   * @public
   */
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType | undefined;

  /**
   * <p>Can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OFF</code> - MFA tokens aren't required and can't be specified during user
   *                     registration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON</code> - MFA tokens are required for all user registrations. You can
   *                     only specify required when you're initially creating a user pool.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIONAL</code> - Users have the option when registering to create an MFA
   *                     token.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * <p>The device-remembering configuration for a user pool. A null value indicates that you
   *             have deactivated device remembering in your user pool.</p>
   *          <note>
   *             <p>When you provide a value for any <code>DeviceConfiguration</code> field, you
   *                 activate the Amazon Cognito device-remembering feature.</p>
   *          </note>
   * @public
   */
  DeviceConfiguration?: DeviceConfigurationType | undefined;

  /**
   * <p>A number estimating the size of the user pool.</p>
   * @public
   */
  EstimatedNumberOfUsers?: number | undefined;

  /**
   * <p>The email configuration of your user pool. The email configuration type sets your
   *             preferred sending method, Amazon Web Services Region, and sender for messages from your user
   *             pool.</p>
   * @public
   */
  EmailConfiguration?: EmailConfigurationType | undefined;

  /**
   * <p>The SMS configuration with the settings that your Amazon Cognito user pool must use to send an
   *             SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To send SMS messages
   *             with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management
   *             (IAM) role in your Amazon Web Services account.</p>
   * @public
   */
  SmsConfiguration?: SmsConfigurationType | undefined;

  /**
   * <p>The tags that are assigned to the user pool. A tag is a label that you can apply to
   *             user pools to categorize and manage them in different ways, such as by purpose, owner,
   *             environment, or other criteria.</p>
   * @public
   */
  UserPoolTags?: Record<string, string> | undefined;

  /**
   * <p>The reason why the SMS configuration can't send the messages to your users.</p>
   *          <p>This message might include comma-separated values to describe why your SMS
   *             configuration can't send messages to user pool end users.</p>
   *          <dl>
   *             <dt>InvalidSmsRoleAccessPolicyException</dt>
   *             <dd>
   *                <p>The Identity and Access Management role that Amazon Cognito uses to send SMS messages isn't properly
   *                         configured. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SmsConfigurationType.html">SmsConfigurationType</a>.</p>
   *             </dd>
   *             <dt>SNSSandbox</dt>
   *             <dd>
   *                <p>The Amazon Web Services account is in the SNS SMS Sandbox and messages will
   *                         only reach verified end users. This parameter won’t get populated with
   *                         SNSSandbox if the user creating the user pool doesn’t have SNS permissions.
   *                         To learn how to move your Amazon Web Services account out of the sandbox, see
   *                             <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox-moving-to-production.html">Moving out
   *                             of the SMS sandbox</a>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  SmsConfigurationFailure?: string | undefined;

  /**
   * <p>Deprecated. Review error codes from API requests with
   *                 <code>EventSource:cognito-idp.amazonaws.com</code> in CloudTrail for
   *             information about problems with user pool email configuration.</p>
   * @public
   */
  EmailConfigurationFailure?: string | undefined;

  /**
   * <p>The domain prefix, if the user pool has a domain associated with it.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>A custom domain name that you provide to Amazon Cognito. This parameter applies only if you use
   *             a custom domain to host the sign-up and sign-in pages for your application. An example
   *             of a custom domain name might be <code>auth.example.com</code>.</p>
   *          <p>For more information about adding a custom domain to your user pool, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">Using Your Own Domain for the Hosted UI</a>.</p>
   * @public
   */
  CustomDomain?: string | undefined;

  /**
   * <p>The configuration for <code>AdminCreateUser</code> requests.</p>
   * @public
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType | undefined;

  /**
   * <p>User pool add-ons. Contains settings for activation of advanced security features. To
   *     log user security information but take no action, set to <code>AUDIT</code>. To
   *     configure automatic security responses to risky traffic to your user pool, set to
   *         <code>ENFORCED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>.</p>
   * @public
   */
  UserPoolAddOns?: UserPoolAddOnsType | undefined;

  /**
   * <p>Case sensitivity of the username input for the selected sign-in option. For example,
   *             when case sensitivity is set to <code>False</code>, users can sign in using either
   *             "username" or "Username". This configuration is immutable once it has been set. For more
   *             information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UsernameConfigurationType.html">UsernameConfigurationType</a>.</p>
   * @public
   */
  UsernameConfiguration?: UsernameConfigurationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the user pool.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The available verified method a user can use to recover their password when they call
   *                 <code>ForgotPassword</code>. You can use this setting to define a preferred method
   *             when a user has more than one method available. With this setting, SMS doesn't qualify
   *             for a valid password recovery mechanism if the user also has SMS multi-factor
   *             authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy
   *             behavior to determine the recovery method where SMS is preferred through email.</p>
   * @public
   */
  AccountRecoverySetting?: AccountRecoverySettingType | undefined;
}

/**
 * <p>Represents the response from the server for the request to create a user pool.</p>
 * @public
 */
export interface CreateUserPoolResponse {
  /**
   * <p>A container for the user pool details.</p>
   * @public
   */
  UserPool?: UserPoolType | undefined;
}

/**
 * <p>This exception is thrown when a user pool tag can't be set or updated.</p>
 * @public
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

/**
 * @public
 * @enum
 */
export const OAuthFlowType = {
  client_credentials: "client_credentials",
  code: "code",
  implicit: "implicit",
} as const;

/**
 * @public
 */
export type OAuthFlowType = (typeof OAuthFlowType)[keyof typeof OAuthFlowType];

/**
 * @public
 * @enum
 */
export const ExplicitAuthFlowsType = {
  ADMIN_NO_SRP_AUTH: "ADMIN_NO_SRP_AUTH",
  ALLOW_ADMIN_USER_PASSWORD_AUTH: "ALLOW_ADMIN_USER_PASSWORD_AUTH",
  ALLOW_CUSTOM_AUTH: "ALLOW_CUSTOM_AUTH",
  ALLOW_REFRESH_TOKEN_AUTH: "ALLOW_REFRESH_TOKEN_AUTH",
  ALLOW_USER_PASSWORD_AUTH: "ALLOW_USER_PASSWORD_AUTH",
  ALLOW_USER_SRP_AUTH: "ALLOW_USER_SRP_AUTH",
  CUSTOM_AUTH_FLOW_ONLY: "CUSTOM_AUTH_FLOW_ONLY",
  USER_PASSWORD_AUTH: "USER_PASSWORD_AUTH",
} as const;

/**
 * @public
 */
export type ExplicitAuthFlowsType = (typeof ExplicitAuthFlowsType)[keyof typeof ExplicitAuthFlowsType];

/**
 * @public
 * @enum
 */
export const PreventUserExistenceErrorTypes = {
  ENABLED: "ENABLED",
  LEGACY: "LEGACY",
} as const;

/**
 * @public
 */
export type PreventUserExistenceErrorTypes =
  (typeof PreventUserExistenceErrorTypes)[keyof typeof PreventUserExistenceErrorTypes];

/**
 * @public
 * @enum
 */
export const TimeUnitsType = {
  DAYS: "days",
  HOURS: "hours",
  MINUTES: "minutes",
  SECONDS: "seconds",
} as const;

/**
 * @public
 */
export type TimeUnitsType = (typeof TimeUnitsType)[keyof typeof TimeUnitsType];

/**
 * <p>The data type TokenValidityUnits specifies the time units you use when you set the
 *             duration of ID, access, and refresh tokens.</p>
 * @public
 */
export interface TokenValidityUnitsType {
  /**
   * <p> A time unit of <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or
   *                 <code>days</code> for the value that you set in the <code>AccessTokenValidity</code>
   *             parameter. The default <code>AccessTokenValidity</code> time unit is hours.
   *                 <code>AccessTokenValidity</code> duration can range from five minutes to one
   *             day.</p>
   * @public
   */
  AccessToken?: TimeUnitsType | undefined;

  /**
   * <p>A time unit of <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or
   *                 <code>days</code> for the value that you set in the <code>IdTokenValidity</code>
   *             parameter. The default <code>IdTokenValidity</code> time unit is hours.
   *                 <code>IdTokenValidity</code> duration can range from five minutes to one day.</p>
   * @public
   */
  IdToken?: TimeUnitsType | undefined;

  /**
   * <p>A time unit of <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or
   *                 <code>days</code> for the value that you set in the
   *                 <code>RefreshTokenValidity</code> parameter. The default
   *                 <code>RefreshTokenValidity</code> time unit is days.
   *                 <code>RefreshTokenValidity</code> duration can range from 60 minutes to 10
   *             years.</p>
   * @public
   */
  RefreshToken?: TimeUnitsType | undefined;
}

/**
 * <p>Represents the request to create a user pool client.</p>
 * @public
 */
export interface CreateUserPoolClientRequest {
  /**
   * <p>The user pool ID for the user pool where you want to create a user pool client.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The client name for the user pool client you would like to create.</p>
   * @public
   */
  ClientName: string | undefined;

  /**
   * <p>Boolean to specify whether you want to generate a secret for the user pool client
   *             being created.</p>
   * @public
   */
  GenerateSecret?: boolean | undefined;

  /**
   * <p>The refresh token time limit. After this limit expires, your user can't use
   * their refresh token. To specify the time unit for <code>RefreshTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>RefreshTokenValidity</code> as <code>10</code> and
   * <code>TokenValidityUnits</code> as <code>days</code>, your user can refresh their session
   * and retrieve new access and ID tokens for 10 days.</p>
   *          <p>The default time unit for <code>RefreshTokenValidity</code> in an API request is days.
   * You can't set <code>RefreshTokenValidity</code> to 0. If you do, Amazon Cognito overrides the
   * value with the default value of 30 days. <i>Valid range</i> is displayed below
   * in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your refresh
   * tokens are valid for 30 days.</p>
   * @public
   */
  RefreshTokenValidity?: number | undefined;

  /**
   * <p>The access token time limit. After this limit expires, your user can't use
   * their access token. To specify the time unit for <code>AccessTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>AccessTokenValidity</code> to <code>10</code> and
   * <code>TokenValidityUnits</code> to <code>hours</code>, your user can authorize access with
   * their access token for 10 hours.</p>
   *          <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours.
   * <i>Valid range</i> is displayed below in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your access
   * tokens are valid for one hour.</p>
   * @public
   */
  AccessTokenValidity?: number | undefined;

  /**
   * <p>The ID token time limit. After this limit expires, your user can't use
   * their ID token. To specify the time unit for <code>IdTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>IdTokenValidity</code> as <code>10</code> and
   * <code>TokenValidityUnits</code> as <code>hours</code>, your user can authenticate their
   * session with their ID token for 10 hours.</p>
   *          <p>The default time unit for <code>IdTokenValidity</code> in an API request is hours.
   * <i>Valid range</i> is displayed below in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your ID
   * tokens are valid for one hour.</p>
   * @public
   */
  IdTokenValidity?: number | undefined;

  /**
   * <p>The units in which the validity times are represented. The default unit for
   *             RefreshToken is days, and default for ID and access tokens are hours.</p>
   * @public
   */
  TokenValidityUnits?: TokenValidityUnitsType | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have read access to.
   *     After your user authenticates in your app, their access token authorizes them to read
   *     their own attribute value for any attribute in this list. An example of this kind of
   *     activity is when your user selects a link to view their profile information. Your app
   *     makes a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUser.html">GetUser</a> API request to retrieve and display your user's profile
   *     data.</p>
   *          <p>When you don't specify the <code>ReadAttributes</code> for your app client, your
   *     app can read the values of <code>email_verified</code>,
   *         <code>phone_number_verified</code>, and the Standard attributes of your user pool.
   *     When your user pool app client has read access to these default attributes,
   *         <code>ReadAttributes</code> doesn't return any information. Amazon Cognito only
   *     populates <code>ReadAttributes</code> in the API response if you have specified your own
   *     custom set of read attributes.</p>
   * @public
   */
  ReadAttributes?: string[] | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have write access to.
   *     After your user authenticates in your app, their access token authorizes them to set or
   *     modify their own attribute value for any attribute in this list. An example of this kind
   *     of activity is when you present your user with a form to update their profile
   *     information and they change their last name. Your app then makes an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html">UpdateUserAttributes</a> API request and sets <code>family_name</code> to the
   *     new value. </p>
   *          <p>When you don't specify the <code>WriteAttributes</code> for your app client, your
   *     app can write the values of the Standard attributes of your user pool. When your user
   *     pool has write access to these default attributes, <code>WriteAttributes</code>
   *     doesn't return any information. Amazon Cognito only populates
   *         <code>WriteAttributes</code> in the API response if you have specified your own
   *     custom set of write attributes.</p>
   *          <p>If your app client allows users to sign in through an IdP, this array must include all
   *     attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when
   *     users sign in to your application through an IdP. If your app client does not have write
   *     access to a mapped attribute, Amazon Cognito throws an error when it tries to update the
   *     attribute. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying IdP Attribute Mappings for Your user
   *     pool</a>.</p>
   * @public
   */
  WriteAttributes?: string[] | undefined;

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
   * @public
   */
  ExplicitAuthFlows?: ExplicitAuthFlowsType[] | undefined;

  /**
   * <p>A list of provider names for the identity providers (IdPs) that are supported on this
   *             client. The following are supported: <code>COGNITO</code>, <code>Facebook</code>,
   *                 <code>Google</code>, <code>SignInWithApple</code>, and <code>LoginWithAmazon</code>.
   *             You can also specify the names that you configured for the SAML and OIDC IdPs in your
   *             user pool, for example <code>MySAMLIdP</code> or <code>MyOIDCIdP</code>.</p>
   * @public
   */
  SupportedIdentityProviders?: string[] | undefined;

  /**
   * <p>A list of allowed redirect (callback) URLs for the IdPs.</p>
   *          <p>A redirect URI must:</p>
   *          <ul>
   *             <li>
   *                <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *          <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *          <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes
   *             only.</p>
   *          <p>App callback URLs such as myapp://example are also supported.</p>
   * @public
   */
  CallbackURLs?: string[] | undefined;

  /**
   * <p>A list of allowed logout URLs for the IdPs.</p>
   * @public
   */
  LogoutURLs?: string[] | undefined;

  /**
   * <p>The default redirect URI. In app clients with one assigned IdP, replaces
   *                 <code>redirect_uri</code> in authentication requests. Must be in the
   *                 <code>CallbackURLs</code> list.</p>
   *          <p>A redirect URI must:</p>
   *          <ul>
   *             <li>
   *                <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html#cognito-user-pools-app-idp-settings-about">Default redirect URI</a>.</p>
   *          <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes
   *             only.</p>
   *          <p>App callback URLs such as myapp://example are also supported.</p>
   * @public
   */
  DefaultRedirectURI?: string | undefined;

  /**
   * <p>The OAuth grant types that you want your app client to generate. To create an app
   *             client that generates client credentials grants, you must add
   *                 <code>client_credentials</code> as the only allowed OAuth flow.</p>
   *          <dl>
   *             <dt>code</dt>
   *             <dd>
   *                <p>Use a code grant flow, which provides an authorization code as the
   *                         response. This code can be exchanged for access tokens with the
   *                             <code>/oauth2/token</code> endpoint.</p>
   *             </dd>
   *             <dt>implicit</dt>
   *             <dd>
   *                <p>Issue the access token (and, optionally, ID token, based on scopes)
   *                         directly to your user.</p>
   *             </dd>
   *             <dt>client_credentials</dt>
   *             <dd>
   *                <p>Issue the access token from the <code>/oauth2/token</code> endpoint
   *                         directly to a non-person user using a combination of the client ID and
   *                         client secret.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  AllowedOAuthFlows?: OAuthFlowType[] | undefined;

  /**
   * <p>The allowed OAuth scopes. Possible values provided by OAuth are <code>phone</code>,
   *                 <code>email</code>, <code>openid</code>, and <code>profile</code>. Possible values
   *             provided by Amazon Web Services are <code>aws.cognito.signin.user.admin</code>. Custom
   *             scopes created in Resource Servers are also supported.</p>
   * @public
   */
  AllowedOAuthScopes?: string[] | undefined;

  /**
   * <p>Set to <code>true</code> to use OAuth 2.0 features in your user pool app client.</p>
   *          <p>
   *             <code>AllowedOAuthFlowsUserPoolClient</code> must be <code>true</code> before you can configure
   * the following features in your app client.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CallBackURLs</code>: Callback URLs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LogoutURLs</code>: Sign-out redirect URLs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllowedOAuthScopes</code>: OAuth 2.0 scopes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllowedOAuthFlows</code>: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.</p>
   *             </li>
   *          </ul>
   *          <p>To use OAuth 2.0 features, configure one of these features in the Amazon Cognito console or set
   * <code>AllowedOAuthFlowsUserPoolClient</code> to <code>true</code> in a <code>CreateUserPoolClient</code> or
   * <code>UpdateUserPoolClient</code> API request. If you don't set a value for
   * <code>AllowedOAuthFlowsUserPoolClient</code> in a request with the CLI or SDKs, it defaults
   * to <code>false</code>.</p>
   * @public
   */
  AllowedOAuthFlowsUserPoolClient?: boolean | undefined;

  /**
   * <p>The user pool analytics configuration for collecting metrics and sending them to your
   *             Amazon Pinpoint campaign.</p>
   *          <note>
   *             <p>In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools only support sending
   *                 events to Amazon Pinpoint projects in Amazon Web Services Region us-east-1. In Regions where Amazon Pinpoint is
   *                 available, user pools support sending events to Amazon Pinpoint projects within that same
   *                 Region.</p>
   *          </note>
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType | undefined;

  /**
   * <p>Errors and responses that you want Amazon Cognito APIs to return during authentication, account
   *             confirmation, and password recovery when the user doesn't exist in the user pool. When
   *             set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error
   *             indicating either the username or password was incorrect. Account confirmation and
   *             password recovery return a response indicating a code was sent to a simulated
   *             destination. When set to <code>LEGACY</code>, those APIs return a
   *                 <code>UserNotFoundException</code> exception if the user doesn't exist in the user
   *             pool.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - This prevents user existence-related errors.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LEGACY</code> - This represents the early behavior of Amazon Cognito where user
   *                     existence related errors aren't prevented.</p>
   *             </li>
   *          </ul>
   *          <p>Defaults to <code>LEGACY</code> when you don't provide a value.</p>
   * @public
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | undefined;

  /**
   * <p>Activates or deactivates token revocation. For more information about revoking tokens,
   *             see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
   *          <p>If you don't include this parameter, token revocation is automatically activated for
   *             the new user pool client.</p>
   * @public
   */
  EnableTokenRevocation?: boolean | undefined;

  /**
   * <p>Activates the propagation of additional user context data. For more information about
   *             propagation of user context data, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html"> Adding advanced security to a user pool</a>. If you don’t include this
   *             parameter, you can't send device fingerprint information, including source IP address,
   *             to Amazon Cognito advanced security. You can only activate
   *                 <code>EnablePropagateAdditionalUserContextData</code> in an app client that has a
   *             client secret.</p>
   * @public
   */
  EnablePropagateAdditionalUserContextData?: boolean | undefined;

  /**
   * <p>Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration,
   * in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.</p>
   * @public
   */
  AuthSessionValidity?: number | undefined;
}

/**
 * <p>Contains information about a user pool client.</p>
 * @public
 */
export interface UserPoolClientType {
  /**
   * <p>The user pool ID for the user pool client.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The client name from the user pool request of the client type.</p>
   * @public
   */
  ClientName?: string | undefined;

  /**
   * <p>The ID of the client associated with the user pool.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The client secret from the user pool request of the client type.</p>
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * <p>The refresh token time limit. After this limit expires, your user can't use
   * their refresh token. To specify the time unit for <code>RefreshTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>RefreshTokenValidity</code> as <code>10</code> and
   * <code>TokenValidityUnits</code> as <code>days</code>, your user can refresh their session
   * and retrieve new access and ID tokens for 10 days.</p>
   *          <p>The default time unit for <code>RefreshTokenValidity</code> in an API request is days.
   * You can't set <code>RefreshTokenValidity</code> to 0. If you do, Amazon Cognito overrides the
   * value with the default value of 30 days. <i>Valid range</i> is displayed below
   * in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your refresh
   * tokens are valid for 30 days.</p>
   * @public
   */
  RefreshTokenValidity?: number | undefined;

  /**
   * <p>The access token time limit. After this limit expires, your user can't use
   * their access token. To specify the time unit for <code>AccessTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>AccessTokenValidity</code> to <code>10</code> and
   * <code>TokenValidityUnits</code> to <code>hours</code>, your user can authorize access with
   * their access token for 10 hours.</p>
   *          <p>The default time unit for <code>AccessTokenValidity</code> in an API request is hours.
   * <i>Valid range</i> is displayed below in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your access
   * tokens are valid for one hour.</p>
   * @public
   */
  AccessTokenValidity?: number | undefined;

  /**
   * <p>The ID token time limit. After this limit expires, your user can't use
   * their ID token. To specify the time unit for <code>IdTokenValidity</code> as
   * <code>seconds</code>, <code>minutes</code>, <code>hours</code>, or <code>days</code>,
   * set a <code>TokenValidityUnits</code> value in your API request.</p>
   *          <p>For example, when you set <code>IdTokenValidity</code> as <code>10</code> and
   * <code>TokenValidityUnits</code> as <code>hours</code>, your user can authenticate their
   * session with their ID token for 10 hours.</p>
   *          <p>The default time unit for <code>IdTokenValidity</code> in an API request is hours.
   * <i>Valid range</i> is displayed below in seconds.</p>
   *          <p>If you don't specify otherwise in the configuration of your app client, your ID
   * tokens are valid for one hour.</p>
   * @public
   */
  IdTokenValidity?: number | undefined;

  /**
   * <p>The time units used to specify the token validity times of each token type: ID,
   *             access, and refresh.</p>
   * @public
   */
  TokenValidityUnits?: TokenValidityUnitsType | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have read access to.
   *     After your user authenticates in your app, their access token authorizes them to read
   *     their own attribute value for any attribute in this list. An example of this kind of
   *     activity is when your user selects a link to view their profile information. Your app
   *     makes a <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_GetUser.html">GetUser</a> API request to retrieve and display your user's profile
   *     data.</p>
   *          <p>When you don't specify the <code>ReadAttributes</code> for your app client, your
   *     app can read the values of <code>email_verified</code>,
   *         <code>phone_number_verified</code>, and the Standard attributes of your user pool.
   *     When your user pool app client has read access to these default attributes,
   *         <code>ReadAttributes</code> doesn't return any information. Amazon Cognito only
   *     populates <code>ReadAttributes</code> in the API response if you have specified your own
   *     custom set of read attributes.</p>
   * @public
   */
  ReadAttributes?: string[] | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have write access to.
   *     After your user authenticates in your app, their access token authorizes them to set or
   *     modify their own attribute value for any attribute in this list. An example of this kind
   *     of activity is when you present your user with a form to update their profile
   *     information and they change their last name. Your app then makes an <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UpdateUserAttributes.html">UpdateUserAttributes</a> API request and sets <code>family_name</code> to the
   *     new value. </p>
   *          <p>When you don't specify the <code>WriteAttributes</code> for your app client, your
   *     app can write the values of the Standard attributes of your user pool. When your user
   *     pool has write access to these default attributes, <code>WriteAttributes</code>
   *     doesn't return any information. Amazon Cognito only populates
   *         <code>WriteAttributes</code> in the API response if you have specified your own
   *     custom set of write attributes.</p>
   *          <p>If your app client allows users to sign in through an IdP, this array must include all
   *     attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when
   *     users sign in to your application through an IdP. If your app client does not have write
   *     access to a mapped attribute, Amazon Cognito throws an error when it tries to update the
   *     attribute. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying IdP Attribute Mappings for Your user
   *     pool</a>.</p>
   * @public
   */
  WriteAttributes?: string[] | undefined;

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
   * @public
   */
  ExplicitAuthFlows?: ExplicitAuthFlowsType[] | undefined;

  /**
   * <p>A list of provider names for the IdPs that this client supports. The following are
   *             supported: <code>COGNITO</code>, <code>Facebook</code>, <code>Google</code>,
   *                 <code>SignInWithApple</code>, <code>LoginWithAmazon</code>, and the names of your
   *             own SAML and OIDC providers.</p>
   * @public
   */
  SupportedIdentityProviders?: string[] | undefined;

  /**
   * <p>A list of allowed redirect (callback) URLs for the IdPs.</p>
   *          <p>A redirect URI must:</p>
   *          <ul>
   *             <li>
   *                <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *          <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *          <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes
   *             only.</p>
   *          <p>App callback URLs such as myapp://example are also supported.</p>
   * @public
   */
  CallbackURLs?: string[] | undefined;

  /**
   * <p>A list of allowed logout URLs for the IdPs.</p>
   * @public
   */
  LogoutURLs?: string[] | undefined;

  /**
   * <p>The default redirect URI. Must be in the <code>CallbackURLs</code> list.</p>
   *          <p>A redirect URI must:</p>
   *          <ul>
   *             <li>
   *                <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                <p>Be registered with the authorization server.</p>
   *             </li>
   *             <li>
   *                <p>Not include a fragment component.</p>
   *             </li>
   *          </ul>
   *          <p>See <a href="https://tools.ietf.org/html/rfc6749#section-3.1.2">OAuth 2.0 -
   *                 Redirection Endpoint</a>.</p>
   *          <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing purposes
   *             only.</p>
   *          <p>App callback URLs such as myapp://example are also supported.</p>
   * @public
   */
  DefaultRedirectURI?: string | undefined;

  /**
   * <p>The allowed OAuth flows.</p>
   *          <dl>
   *             <dt>code</dt>
   *             <dd>
   *                <p>Use a code grant flow, which provides an authorization code as the
   *                         response. This code can be exchanged for access tokens with the
   *                             <code>/oauth2/token</code> endpoint.</p>
   *             </dd>
   *             <dt>implicit</dt>
   *             <dd>
   *                <p>Issue the access token (and, optionally, ID token, based on scopes)
   *                         directly to your user.</p>
   *             </dd>
   *             <dt>client_credentials</dt>
   *             <dd>
   *                <p>Issue the access token from the <code>/oauth2/token</code> endpoint
   *                         directly to a non-person user using a combination of the client ID and
   *                         client secret.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  AllowedOAuthFlows?: OAuthFlowType[] | undefined;

  /**
   * <p>The OAuth scopes that your app client supports. Possible values that OAuth provides
   *             are <code>phone</code>, <code>email</code>, <code>openid</code>, and
   *                 <code>profile</code>. Possible values that Amazon Web Services provides are
   *                 <code>aws.cognito.signin.user.admin</code>. Amazon Cognito also supports custom scopes that
   *             you create in Resource Servers.</p>
   * @public
   */
  AllowedOAuthScopes?: string[] | undefined;

  /**
   * <p>Set to <code>true</code> to use OAuth 2.0 features in your user pool app client.</p>
   *          <p>
   *             <code>AllowedOAuthFlowsUserPoolClient</code> must be <code>true</code> before you can configure
   * the following features in your app client.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CallBackURLs</code>: Callback URLs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LogoutURLs</code>: Sign-out redirect URLs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllowedOAuthScopes</code>: OAuth 2.0 scopes.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AllowedOAuthFlows</code>: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.</p>
   *             </li>
   *          </ul>
   *          <p>To use OAuth 2.0 features, configure one of these features in the Amazon Cognito console or set
   * <code>AllowedOAuthFlowsUserPoolClient</code> to <code>true</code> in a <code>CreateUserPoolClient</code> or
   * <code>UpdateUserPoolClient</code> API request. If you don't set a value for
   * <code>AllowedOAuthFlowsUserPoolClient</code> in a request with the CLI or SDKs, it defaults
   * to <code>false</code>.</p>
   * @public
   */
  AllowedOAuthFlowsUserPoolClient?: boolean | undefined;

  /**
   * <p>The Amazon Pinpoint analytics configuration for the user pool client.</p>
   *          <note>
   *             <p>Amazon Cognito user pools only support sending events to Amazon Pinpoint projects in the US East
   *                 (N. Virginia) us-east-1 Region, regardless of the Region where the user pool
   *                 resides.</p>
   *          </note>
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType | undefined;

  /**
   * <p>Errors and responses that you want Amazon Cognito APIs to return during authentication, account
   *             confirmation, and password recovery when the user doesn't exist in the user pool. When
   *             set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error
   *             indicating either the username or password was incorrect. Account confirmation and
   *             password recovery return a response indicating a code was sent to a simulated
   *             destination. When set to <code>LEGACY</code>, those APIs return a
   *                 <code>UserNotFoundException</code> exception if the user doesn't exist in the user
   *             pool.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> - This prevents user existence-related errors.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LEGACY</code> - This represents the early behavior of Amazon Cognito where user
   *                     existence related errors aren't prevented.</p>
   *             </li>
   *          </ul>
   *          <p>Defaults to <code>LEGACY</code> when you don't provide a value.</p>
   * @public
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | undefined;

  /**
   * <p>Indicates whether token revocation is activated for the user pool client. When you
   *             create a new user pool client, token revocation is activated by default. For more
   *             information about revoking tokens, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RevokeToken.html">RevokeToken</a>.</p>
   * @public
   */
  EnableTokenRevocation?: boolean | undefined;

  /**
   * <p>When <code>EnablePropagateAdditionalUserContextData</code> is true, Amazon Cognito accepts an
   *                 <code>IpAddress</code> value that you send in the <code>UserContextData</code>
   *             parameter. The <code>UserContextData</code> parameter sends information to Amazon Cognito
   *             advanced security for risk analysis. You can send <code>UserContextData</code> when you
   *             sign in Amazon Cognito native users with the <code>InitiateAuth</code> and
   *                 <code>RespondToAuthChallenge</code> API operations.</p>
   *          <p>When <code>EnablePropagateAdditionalUserContextData</code> is false, you can't send
   *             your user's source IP address to Amazon Cognito advanced security with unauthenticated API
   *             operations. <code>EnablePropagateAdditionalUserContextData</code> doesn't affect whether
   *             you can send a source IP address in a <code>ContextData</code> parameter with the
   *             authenticated API operations <code>AdminInitiateAuth</code> and
   *                 <code>AdminRespondToAuthChallenge</code>.</p>
   *          <p>You can only activate <code>EnablePropagateAdditionalUserContextData</code> in an app
   *             client that has a client secret. For more information about propagation of user context
   *             data, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint">Adding user device and session data to API requests</a>.</p>
   * @public
   */
  EnablePropagateAdditionalUserContextData?: boolean | undefined;

  /**
   * <p>Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration,
   * in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.</p>
   * @public
   */
  AuthSessionValidity?: number | undefined;
}

/**
 * <p>Represents the response from the server to create a user pool client.</p>
 * @public
 */
export interface CreateUserPoolClientResponse {
  /**
   * <p>The user pool client that was just created.</p>
   * @public
   */
  UserPoolClient?: UserPoolClientType | undefined;
}

/**
 * <p>This exception is thrown when the specified OAuth flow is not valid.</p>
 * @public
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
 * @public
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
 * @public
 */
export interface CustomDomainConfigType {
  /**
   * <p>The Amazon Resource Name (ARN) of an Certificate Manager SSL certificate. You use
   *             this certificate for the subdomain of your custom domain.</p>
   * @public
   */
  CertificateArn: string | undefined;
}

/**
 * @public
 */
export interface CreateUserPoolDomainRequest {
  /**
   * <p>The domain string. For custom domains, this is the fully-qualified domain name, such
   *             as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone,
   *             such as <code>auth</code>.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The configuration for a custom domain that hosts the sign-up and sign-in webpages for
   *             your application.</p>
   *          <p>Provide this parameter only if you want to use a custom domain for your user pool.
   *             Otherwise, you can exclude this parameter and use the Amazon Cognito hosted domain
   *             instead.</p>
   *          <p>For more information about the hosted domain and custom domains, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-assign-domain.html">Configuring a User Pool Domain</a>.</p>
   * @public
   */
  CustomDomainConfig?: CustomDomainConfigType | undefined;
}

/**
 * @public
 */
export interface CreateUserPoolDomainResponse {
  /**
   * <p>The Amazon CloudFront endpoint that you use as the target of the alias that you set up with
   *             your Domain Name Service (DNS) provider. Amazon Cognito returns this value if you set a custom
   *             domain with <code>CustomDomainConfig</code>. If you set an Amazon Cognito prefix domain, this
   *             operation returns a blank response.</p>
   * @public
   */
  CloudFrontDomain?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityProviderRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The IdP name.</p>
   * @public
   */
  ProviderName: string | undefined;
}

/**
 * <p>This exception is thrown when the specified identifier isn't supported.</p>
 * @public
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

/**
 * @public
 */
export interface DeleteResourceServerRequest {
  /**
   * <p>The user pool ID for the user pool that hosts the resource server.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The identifier for the resource server.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * <p>Represents the request to delete a user.</p>
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose user profile you want to
   *             delete.</p>
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * <p>Represents the request to delete user attributes.</p>
 * @public
 */
export interface DeleteUserAttributesRequest {
  /**
   * <p>An array of strings representing the user attribute names you want to delete.</p>
   *          <p>For custom attributes, you must prependattach the <code>custom:</code> prefix to the
   *             front of the attribute name.</p>
   * @public
   */
  UserAttributeNames: string[] | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose attributes you want to
   *             delete.</p>
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * <p>Represents the response from the server to delete user attributes.</p>
 * @public
 */
export interface DeleteUserAttributesResponse {}

/**
 * <p>Represents the request to delete a user pool.</p>
 * @public
 */
export interface DeleteUserPoolRequest {
  /**
   * <p>The user pool ID for the user pool you want to delete.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Represents the request to delete a user pool client.</p>
 * @public
 */
export interface DeleteUserPoolClientRequest {
  /**
   * <p>The user pool ID for the user pool where you want to delete the client.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID of the app associated with the user pool.</p>
   * @public
   */
  ClientId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserPoolDomainRequest {
  /**
   * <p>The domain string. For custom domains, this is the fully-qualified domain name, such
   *             as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone,
   *             such as <code>auth</code>.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserPoolDomainResponse {}

/**
 * @public
 */
export interface DescribeIdentityProviderRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The IdP name.</p>
   * @public
   */
  ProviderName: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityProviderResponse {
  /**
   * <p>The identity provider details.</p>
   * @public
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface DescribeResourceServerRequest {
  /**
   * <p>The user pool ID for the user pool that hosts the resource server.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A unique resource server identifier for the resource server. The identifier can be an
   *             API friendly name like <code>solar-system-data</code>. You can also set an API URL like
   *                 <code>https://solar-system-data-api.example.com</code> as your identifier.</p>
   *          <p>Amazon Cognito represents scopes in the access token in the format
   *                 <code>$resource-server-identifier/$scope</code>. Longer scope-identifier strings
   *             increase the size of your access tokens.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceServerResponse {
  /**
   * <p>The resource server.</p>
   * @public
   */
  ResourceServer: ResourceServerType | undefined;
}

/**
 * @public
 */
export interface DescribeRiskConfigurationRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID.</p>
   * @public
   */
  ClientId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CompromisedCredentialsEventActionType = {
  BLOCK: "BLOCK",
  NO_ACTION: "NO_ACTION",
} as const;

/**
 * @public
 */
export type CompromisedCredentialsEventActionType =
  (typeof CompromisedCredentialsEventActionType)[keyof typeof CompromisedCredentialsEventActionType];

/**
 * <p>The compromised credentials actions type.</p>
 * @public
 */
export interface CompromisedCredentialsActionsType {
  /**
   * <p>The event action.</p>
   * @public
   */
  EventAction: CompromisedCredentialsEventActionType | undefined;
}

/**
 * @public
 * @enum
 */
export const EventFilterType = {
  PASSWORD_CHANGE: "PASSWORD_CHANGE",
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP",
} as const;

/**
 * @public
 */
export type EventFilterType = (typeof EventFilterType)[keyof typeof EventFilterType];

/**
 * <p>The compromised credentials risk configuration type.</p>
 * @public
 */
export interface CompromisedCredentialsRiskConfigurationType {
  /**
   * <p>Perform the action for these events. The default is to perform all events if no event
   *             filter is specified.</p>
   * @public
   */
  EventFilter?: EventFilterType[] | undefined;

  /**
   * <p>The compromised credentials risk configuration actions.</p>
   * @public
   */
  Actions: CompromisedCredentialsActionsType | undefined;
}

/**
 * <p>The type of the configuration to override the risk decision.</p>
 * @public
 */
export interface RiskExceptionConfigurationType {
  /**
   * <p>Overrides the risk decision to always block the pre-authentication requests. The IP
   *             range is in CIDR notation, a compact representation of an IP address and its routing
   *             prefix.</p>
   * @public
   */
  BlockedIPRangeList?: string[] | undefined;

  /**
   * <p>Risk detection isn't performed on the IP addresses in this range list. The IP range is
   *             in CIDR notation.</p>
   * @public
   */
  SkippedIPRangeList?: string[] | undefined;
}

/**
 * <p>The risk configuration type.</p>
 * @public
 */
export interface RiskConfigurationType {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The app client ID.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The compromised credentials risk configuration object, including the
   *                 <code>EventFilter</code> and the <code>EventAction</code>.</p>
   * @public
   */
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType | undefined;

  /**
   * <p>The account takeover risk configuration object, including the
   *                 <code>NotifyConfiguration</code> object and <code>Actions</code> to take if there is
   *             an account takeover.</p>
   * @public
   */
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType | undefined;

  /**
   * <p>The configuration to override the risk decision.</p>
   * @public
   */
  RiskExceptionConfiguration?: RiskExceptionConfigurationType | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRiskConfigurationResponse {
  /**
   * <p>The risk configuration.</p>
   * @public
   */
  RiskConfiguration: RiskConfigurationType | undefined;
}

/**
 * <p>Represents the request to describe the user import job.</p>
 * @public
 */
export interface DescribeUserImportJobRequest {
  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The job ID for the user import job.</p>
   * @public
   */
  JobId: string | undefined;
}

/**
 * <p>Represents the response from the server to the request to describe the user import
 *             job.</p>
 * @public
 */
export interface DescribeUserImportJobResponse {
  /**
   * <p>The job object that represents the user import job.</p>
   * @public
   */
  UserImportJob?: UserImportJobType | undefined;
}

/**
 * <p>Represents the request to describe the user pool.</p>
 * @public
 */
export interface DescribeUserPoolRequest {
  /**
   * <p>The user pool ID for the user pool you want to describe.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Represents the response to describe the user pool.</p>
 * @public
 */
export interface DescribeUserPoolResponse {
  /**
   * <p>The container of metadata returned by the server to describe the pool.</p>
   * @public
   */
  UserPool?: UserPoolType | undefined;
}

/**
 * <p>Represents the request to describe a user pool client.</p>
 * @public
 */
export interface DescribeUserPoolClientRequest {
  /**
   * <p>The user pool ID for the user pool you want to describe.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client ID of the app associated with the user pool.</p>
   * @public
   */
  ClientId: string | undefined;
}

/**
 * <p>Represents the response from the server from a request to describe the user pool
 *             client.</p>
 * @public
 */
export interface DescribeUserPoolClientResponse {
  /**
   * <p>The user pool client from a server response to describe the user pool client.</p>
   * @public
   */
  UserPoolClient?: UserPoolClientType | undefined;
}

/**
 * @public
 */
export interface DescribeUserPoolDomainRequest {
  /**
   * <p>The domain string. For custom domains, this is the fully-qualified domain name, such
   *             as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone,
   *             such as <code>auth</code>.</p>
   * @public
   */
  Domain: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DomainStatusType = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DomainStatusType = (typeof DomainStatusType)[keyof typeof DomainStatusType];

/**
 * <p>A container for information about a domain.</p>
 * @public
 */
export interface DomainDescriptionType {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The Amazon Web Services ID for the user pool owner.</p>
   * @public
   */
  AWSAccountId?: string | undefined;

  /**
   * <p>The domain string. For custom domains, this is the fully-qualified domain name, such
   *             as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the prefix alone,
   *             such as <code>auth</code>.</p>
   * @public
   */
  Domain?: string | undefined;

  /**
   * <p>The Amazon S3 bucket where the static files for this domain are stored.</p>
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * <p>The Amazon CloudFront endpoint that you use as the target of the alias that you set up with
   *             your Domain Name Service (DNS) provider.</p>
   * @public
   */
  CloudFrontDistribution?: string | undefined;

  /**
   * <p>The app version.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The domain status.</p>
   * @public
   */
  Status?: DomainStatusType | undefined;

  /**
   * <p>The configuration for a custom domain that hosts the sign-up and sign-in webpages for
   *             your application.</p>
   * @public
   */
  CustomDomainConfig?: CustomDomainConfigType | undefined;
}

/**
 * @public
 */
export interface DescribeUserPoolDomainResponse {
  /**
   * <p>A domain description object containing information about the domain.</p>
   * @public
   */
  DomainDescription?: DomainDescriptionType | undefined;
}

/**
 * <p>Represents the request to forget the device.</p>
 * @public
 */
export interface ForgetDeviceRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose registered device you want to
   *             forget.</p>
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * <p>The device key.</p>
   * @public
   */
  DeviceKey: string | undefined;
}

/**
 * <p>Represents the request to reset a user's password.</p>
 * @public
 */
export interface ForgotPasswordRequest {
  /**
   * <p>The ID of the client associated with the user pool.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message.</p>
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>ForgotPassword</code> calls.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the ForgotPassword API action, Amazon Cognito invokes any
   *             functions that are assigned to the following triggers: <i>pre sign-up</i>,
   *                 <i>custom message</i>, and <i>user migration</i>. When
   *             Amazon Cognito invokes any of these functions, it passes a JSON payload, which the
   *             function receives as input. This payload contains a <code>clientMetadata</code>
   *             attribute, which provides the data that you assigned to the ClientMetadata parameter in
   *             your ForgotPassword request. In your function code in Lambda, you can
   *             process the <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>The delivery details for an email or SMS message that Amazon Cognito sent for authentication or
 *             verification.</p>
 * @public
 */
export interface CodeDeliveryDetailsType {
  /**
   * <p>The email address or phone number destination where Amazon Cognito sent the code.</p>
   * @public
   */
  Destination?: string | undefined;

  /**
   * <p>The method that Amazon Cognito used to send the code.</p>
   * @public
   */
  DeliveryMedium?: DeliveryMediumType | undefined;

  /**
   * <p>The name of the attribute that Amazon Cognito verifies with the code.</p>
   * @public
   */
  AttributeName?: string | undefined;
}

/**
 * <p>The response from Amazon Cognito to a request to reset a password.</p>
 * @public
 */
export interface ForgotPasswordResponse {
  /**
   * <p>The code delivery details returned by the server in response to the request to reset a
   *             password.</p>
   * @public
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType | undefined;
}

/**
 * <p>Represents the request to get the header information of the CSV file for the user
 *             import job.</p>
 * @public
 */
export interface GetCSVHeaderRequest {
  /**
   * <p>The user pool ID for the user pool that the users are to be imported into.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Represents the response from the server to the request to get the header information
 *             of the CSV file for the user import job.</p>
 * @public
 */
export interface GetCSVHeaderResponse {
  /**
   * <p>The user pool ID for the user pool that the users are to be imported into.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The header information of the CSV file for the user import job.</p>
   * @public
   */
  CSVHeader?: string[] | undefined;
}

/**
 * <p>Represents the request to get the device.</p>
 * @public
 */
export interface GetDeviceRequest {
  /**
   * <p>The device key.</p>
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose device information you want
   *             to request.</p>
   * @public
   */
  AccessToken?: string | undefined;
}

/**
 * <p>Gets the device response.</p>
 * @public
 */
export interface GetDeviceResponse {
  /**
   * <p>The device.</p>
   * @public
   */
  Device: DeviceType | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * <p>The group object for the group.</p>
   * @public
   */
  Group?: GroupType | undefined;
}

/**
 * @public
 */
export interface GetIdentityProviderByIdentifierRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The IdP identifier.</p>
   * @public
   */
  IdpIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIdentityProviderByIdentifierResponse {
  /**
   * <p>The identity provider details.</p>
   * @public
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface GetLogDeliveryConfigurationRequest {
  /**
   * <p>The ID of the user pool that has the logging configuration that you want to
   *             view.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Configuration for the CloudWatch log group destination of user pool detailed activity
 *             logging, or of user activity log export with advanced security features.</p>
 * @public
 */
export interface CloudWatchLogsConfigurationType {
  /**
   * <p>The Amazon Resource Name (arn) of a CloudWatch Logs log group where your user pool sends logs.
   *             The log group must not be encrypted with Key Management Service and must be in the same Amazon Web Services account
   *             as your user pool.</p>
   *          <p>To send logs to log groups with a resource policy of a size greater than 5120
   *             characters, configure a log group with a path that starts with
   *                 <code>/aws/vendedlogs</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html">Enabling
   *                 logging from certain Amazon Web Services services</a>.</p>
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EventSourceName = {
  USER_AUTH_EVENTS: "userAuthEvents",
  USER_NOTIFICATION: "userNotification",
} as const;

/**
 * @public
 */
export type EventSourceName = (typeof EventSourceName)[keyof typeof EventSourceName];

/**
 * <p>Configuration for the Amazon Data Firehose stream destination of user activity log export with
 *             advanced security features.</p>
 * @public
 */
export interface FirehoseConfigurationType {
  /**
   * <p>The ARN of an Amazon Data Firehose stream that's the destination for advanced security
   *             features log export.</p>
   * @public
   */
  StreamArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LogLevel = {
  ERROR: "ERROR",
  INFO: "INFO",
} as const;

/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * <p>Configuration for the Amazon S3 bucket destination of user activity log export with
 *             advanced security features.</p>
 * @public
 */
export interface S3ConfigurationType {
  /**
   * <p>The ARN of an Amazon S3 bucket that's the destination for advanced security features
   *             log export.</p>
   * @public
   */
  BucketArn?: string | undefined;
}

/**
 * <p>The logging parameters of a user pool.</p>
 * @public
 */
export interface LogConfigurationType {
  /**
   * <p>The <code>errorlevel</code> selection of logs that a user pool sends for detailed
   *             activity logging. To send <code>userNotification</code> activity with <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/tracking-quotas-and-usage-in-cloud-watch-logs.html">information about message delivery</a>, choose <code>ERROR</code> with
   *                 <code>CloudWatchLogsConfiguration</code>. To send <code>userAuthEvents</code>
   *             activity with user logs from advanced security features, choose <code>INFO</code> with
   *             one of <code>CloudWatchLogsConfiguration</code>, <code>FirehoseConfiguration</code>, or
   *                 <code>S3Configuration</code>.</p>
   * @public
   */
  LogLevel: LogLevel | undefined;

  /**
   * <p>The source of events that your user pool sends for logging. To send error-level logs
   *             about user notification activity, set to <code>userNotification</code>. To send
   *             info-level logs about advanced security features user activity, set to
   *                 <code>userAuthEvents</code>.</p>
   * @public
   */
  EventSource: EventSourceName | undefined;

  /**
   * <p>The CloudWatch log group destination of user pool detailed activity logs, or of user
   *             activity log export with advanced security features.</p>
   * @public
   */
  CloudWatchLogsConfiguration?: CloudWatchLogsConfigurationType | undefined;

  /**
   * <p>The Amazon S3 bucket destination of user activity log export with advanced security
   *             features. To activate this setting, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">
   *                      advanced security features</a> must be active in your user pool.</p>
   * @public
   */
  S3Configuration?: S3ConfigurationType | undefined;

  /**
   * <p>The Amazon Data Firehose stream destination of user activity log export with advanced security
   *             features. To activate this setting, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">
   *                      advanced security features</a> must be active in your user pool.</p>
   * @public
   */
  FirehoseConfiguration?: FirehoseConfigurationType | undefined;
}

/**
 * <p>The logging parameters of a user pool returned in response to
 *                 <code>GetLogDeliveryConfiguration</code>.</p>
 * @public
 */
export interface LogDeliveryConfigurationType {
  /**
   * <p>The ID of the user pool where you configured logging.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A logging destination of a user pool. User pools can have multiple logging
   *             destinations for message-delivery and user-activity logs.</p>
   * @public
   */
  LogConfigurations: LogConfigurationType[] | undefined;
}

/**
 * @public
 */
export interface GetLogDeliveryConfigurationResponse {
  /**
   * <p>The logging configuration of the requested user pool.</p>
   * @public
   */
  LogDeliveryConfiguration?: LogDeliveryConfigurationType | undefined;
}

/**
 * <p>Request to get a signing certificate from Amazon Cognito.</p>
 * @public
 */
export interface GetSigningCertificateRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Response from Amazon Cognito for a signing certificate request.</p>
 * @public
 */
export interface GetSigningCertificateResponse {
  /**
   * <p>The signing certificate.</p>
   * @public
   */
  Certificate?: string | undefined;
}

/**
 * @public
 */
export interface GetUICustomizationRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The client ID for the client app.</p>
   * @public
   */
  ClientId?: string | undefined;
}

/**
 * <p>A container for the UI customization information for a user pool's built-in app
 *             UI.</p>
 * @public
 */
export interface UICustomizationType {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The client ID for the client app.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The logo image for the UI customization.</p>
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * <p>The CSS values in the UI customization.</p>
   * @public
   */
  CSS?: string | undefined;

  /**
   * <p>The CSS version number.</p>
   * @public
   */
  CSSVersion?: string | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetUICustomizationResponse {
  /**
   * <p>The UI customization information.</p>
   * @public
   */
  UICustomization: UICustomizationType | undefined;
}

/**
 * <p>Represents the request to get information about the user.</p>
 * @public
 */
export interface GetUserRequest {
  /**
   * <p>A non-expired access token for the user whose information you want to query.</p>
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * <p>Represents the response from the server from the request to get information about the
 *             user.</p>
 * @public
 */
export interface GetUserResponse {
  /**
   * <p>The username of the user that you requested.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   *          <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   * @public
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * <p>
   *             <i>This response parameter is no longer supported.</i> It provides
   *             information only about SMS MFA configurations. It doesn't provide information about
   *             time-based one-time password (TOTP) software token MFA configurations. To look up
   *             information about either type of MFA configuration, use UserMFASettingList
   *             instead.</p>
   * @public
   */
  MFAOptions?: MFAOptionType[] | undefined;

  /**
   * <p>The user's preferred MFA setting.</p>
   * @public
   */
  PreferredMfaSetting?: string | undefined;

  /**
   * <p>The MFA options that are activated for the user. The possible values in this list are
   *             <code>SMS_MFA</code>, <code>EMAIL_OTP</code>, and <code>SOFTWARE_TOKEN_MFA</code>.</p>
   * @public
   */
  UserMFASettingList?: string[] | undefined;
}

/**
 * <p>Represents the request to get user attribute verification.</p>
 * @public
 */
export interface GetUserAttributeVerificationCodeRequest {
  /**
   * <p>A non-expired access token for the user whose attribute verification code you want to
   *             generate.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The attribute name returned by the server response to get the user attribute
   *             verification code.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool
   *             triggers. When you use the GetUserAttributeVerificationCode API action, Amazon Cognito invokes
   *             the function that is assigned to the <i>custom message</i> trigger. When
   *             Amazon Cognito invokes this function, it passes a JSON payload, which the function receives as
   *             input. This payload contains a <code>clientMetadata</code> attribute, which provides the
   *             data that you assigned to the ClientMetadata parameter in your
   *             GetUserAttributeVerificationCode request. In your function code in Lambda, you can process the <code>clientMetadata</code> value to enhance your workflow for
   *             your specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>The verification code response returned by the server response to get the user
 *             attribute verification code.</p>
 * @public
 */
export interface GetUserAttributeVerificationCodeResponse {
  /**
   * <p>The code delivery details returned by the server in response to the request to get the
   *             user attribute verification code.</p>
   * @public
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType | undefined;
}

/**
 * @public
 */
export interface GetUserPoolMfaConfigRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Sets or shows user pool email message configuration for MFA. Includes the subject and
 *             body of the email message template for MFA messages. To activate this setting, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">
 *                      advanced security features</a> must be active in your user pool.</p>
 * @public
 */
export interface EmailMfaConfigType {
  /**
   * <p>The template for the email message that your user pool sends to users with an MFA
   *             code. The message must contain the <code>\{####\}</code> placeholder. In the message,
   *             Amazon Cognito replaces this placeholder with the code. If you don't provide this parameter,
   *             Amazon Cognito sends messages in the default format.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The subject of the email message that your user pool sends to users with an MFA
   *             code.</p>
   * @public
   */
  Subject?: string | undefined;
}

/**
 * <p>Configures user pool SMS messages for multi-factor authentication (MFA). Sets the
 *             message template and the SMS message sending configuration for Amazon SNS.</p>
 * @public
 */
export interface SmsMfaConfigType {
  /**
   * <p>The SMS message that your user pool sends to users with an MFA code. The message must
   *             contain the <code>\{####\}</code> placeholder. In the message, Amazon Cognito replaces this
   *             placeholder with the code. If you don't provide this parameter, Amazon Cognito sends
   *             messages in the default format.</p>
   * @public
   */
  SmsAuthenticationMessage?: string | undefined;

  /**
   * <p>The SMS configuration with the settings that your Amazon Cognito user pool must use to send an
   *             SMS message from your Amazon Web Services account through Amazon Simple Notification Service. To request Amazon SNS in
   *             the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role that
   *             you provide for your Amazon Web Services account.</p>
   * @public
   */
  SmsConfiguration?: SmsConfigurationType | undefined;
}

/**
 * <p>Configures a user pool for time-based one-time password (TOTP) multi-factor
 *             authentication (MFA). Enables or disables TOTP.</p>
 * @public
 */
export interface SoftwareTokenMfaConfigType {
  /**
   * <p>Specifies whether software token MFA is activated.</p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface GetUserPoolMfaConfigResponse {
  /**
   * <p>Shows user pool SMS message configuration for MFA. Includes the message template and
   *             the SMS message sending configuration for Amazon SNS.</p>
   * @public
   */
  SmsMfaConfiguration?: SmsMfaConfigType | undefined;

  /**
   * <p>Shows user pool configuration for time-based one-time password (TOTP) MFA. Includes
   *             TOTP enabled or disabled state.</p>
   * @public
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType | undefined;

  /**
   * <p>Shows user pool email message configuration for MFA. Includes the subject and body of
   *             the email message template for MFA messages. To activate this setting, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">
   *                      advanced security features</a> must be active in your user pool.</p>
   * @public
   */
  EmailMfaConfiguration?: EmailMfaConfigType | undefined;

  /**
   * <p>The multi-factor authentication (MFA) configuration. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OFF</code> MFA won't be used for any users.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ON</code> MFA is required for all users to sign in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OPTIONAL</code> MFA will be required only for individual users who have
   *                     an MFA factor activated.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;
}

/**
 * <p>Represents the request to sign out all devices.</p>
 * @public
 */
export interface GlobalSignOutRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user who you want to sign out.</p>
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * <p>The response to the request to sign out all devices.</p>
 * @public
 */
export interface GlobalSignOutResponse {}

/**
 * <p>Initiates the authentication request.</p>
 * @public
 */
export interface InitiateAuthRequest {
  /**
   * <p>The authentication flow for this call to run. The API action will depend on this
   *             value. For example:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>REFRESH_TOKEN_AUTH</code> takes in a valid refresh token and returns new
   *                     tokens.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_SRP_AUTH</code> takes in <code>USERNAME</code> and
   *                         <code>SRP_A</code> and returns the SRP variables to be used for next
   *                     challenge execution.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_PASSWORD_AUTH</code> takes in <code>USERNAME</code> and
   *                         <code>PASSWORD</code> and returns the next challenge or tokens.</p>
   *             </li>
   *          </ul>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>USER_SRP_AUTH</code>: Authentication flow for the Secure Remote Password
   *                     (SRP) protocol.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>REFRESH_TOKEN_AUTH</code>/<code>REFRESH_TOKEN</code>: Authentication
   *                     flow for refreshing the access token and ID token by supplying a valid refresh
   *                     token.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_AUTH</code>: Custom authentication flow.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_PASSWORD_AUTH</code>: Non-SRP authentication flow; user name and
   *                     password are passed directly. If a user migration Lambda trigger is set, this
   *                     flow will invoke the user migration Lambda if it doesn't find the user name in
   *                     the user pool. </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <code>ADMIN_NO_SRP_AUTH</code> isn't a valid value.</p>
   * @public
   */
  AuthFlow: AuthFlowType | undefined;

  /**
   * <p>The authentication parameters. These are inputs corresponding to the
   *                 <code>AuthFlow</code> that you're invoking. The required values depend on the value
   *             of <code>AuthFlow</code>:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>USER_SRP_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SRP_A</code> (required), <code>SECRET_HASH</code> (required if the app
   *                     client is configured with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>USER_PASSWORD_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>PASSWORD</code> (required), <code>SECRET_HASH</code> (required if the
   *                     app client is configured with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>REFRESH_TOKEN_AUTH/REFRESH_TOKEN</code>: <code>REFRESH_TOKEN</code>
   *                     (required), <code>SECRET_HASH</code> (required if the app client is configured
   *                     with a client secret), <code>DEVICE_KEY</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>CUSTOM_AUTH</code>: <code>USERNAME</code> (required),
   *                         <code>SECRET_HASH</code> (if app client is configured with client secret),
   *                         <code>DEVICE_KEY</code>. To start the authentication flow with password
   *                     verification, include <code>ChallengeName: SRP_A</code> and <code>SRP_A: (The
   *                         SRP_A Value)</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about
   *             <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>
   * @public
   */
  AuthParameters?: Record<string, string> | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for certain custom
   *             workflows that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the InitiateAuth API action, Amazon Cognito invokes the Lambda functions that are
   *             specified for various triggers. The ClientMetadata value is passed as input to the
   *             functions for only the following triggers:</p>
   *          <ul>
   *             <li>
   *                <p>Pre signup</p>
   *             </li>
   *             <li>
   *                <p>Pre authentication</p>
   *             </li>
   *             <li>
   *                <p>User migration</p>
   *             </li>
   *          </ul>
   *          <p>When Amazon Cognito invokes the functions for these triggers, it passes a JSON payload, which
   *             the function receives as input. This payload contains a <code>validationData</code>
   *             attribute, which provides the data that you assigned to the ClientMetadata parameter in
   *             your InitiateAuth request. In your function code in Lambda, you can process the
   *                 <code>validationData</code> value to enhance your workflow for your specific
   *             needs.</p>
   *          <p>When you use the InitiateAuth API action, Amazon Cognito also invokes the functions for the
   *             following triggers, but it doesn't provide the ClientMetadata value as input:</p>
   *          <ul>
   *             <li>
   *                <p>Post authentication</p>
   *             </li>
   *             <li>
   *                <p>Custom message</p>
   *             </li>
   *             <li>
   *                <p>Pre token generation</p>
   *             </li>
   *             <li>
   *                <p>Create auth challenge</p>
   *             </li>
   *             <li>
   *                <p>Define auth challenge</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;

  /**
   * <p>The app client ID.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>InitiateAuth</code> calls.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;
}

/**
 * <p>Initiates the authentication response.</p>
 * @public
 */
export interface InitiateAuthResponse {
  /**
   * <p>The name of the challenge that you're responding to with this call. This name is
   *             returned in the <code>InitiateAuth</code> response if you must pass another
   *             challenge.</p>
   *          <p>Valid values include the following:</p>
   *          <note>
   *             <p>All of the following challenges require <code>USERNAME</code> and
   *                     <code>SECRET_HASH</code> (if applicable) in the parameters.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SMS_MFA</code>: Next challenge is to supply an
   *                     <code>SMS_MFA_CODE</code>that your user pool delivered
   *                     in an SMS message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_OTP</code>: Next challenge is to supply an
   *                     <code>EMAIL_OTP_CODE</code> that your user pool delivered
   *                     in an email message.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_VERIFIER</code>: Next challenge is to supply
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     the client-side SRP calculations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication
   *                     flow determines that the user should pass another challenge before tokens are
   *                     issued.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_SRP_AUTH</code>: If device tracking was activated on your user
   *                     pool and the previous challenges were passed, this challenge is returned so that
   *                     Amazon Cognito can start tracking this device.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Similar to
   *                         <code>PASSWORD_VERIFIER</code>, but for devices only.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their
   *                     passwords after successful first login. </p>
   *                <p>Respond to this challenge with <code>NEW_PASSWORD</code> and any required
   *                     attributes that Amazon Cognito returned in the <code>requiredAttributes</code> parameter.
   *                     You can also set values for attributes that aren't required by your user pool
   *                     and that your app client can write. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html">RespondToAuthChallenge</a>.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter,
   * then use the <code>UpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_SETUP</code>: For users who are required to setup an MFA factor
   *                     before they can sign in. The MFA types activated for the user pool will be
   *                     listed in the challenge parameters <code>MFAS_CAN_SETUP</code> value. </p>
   *                <p> To set up software token MFA, use the session returned here from
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
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * <p>The session that should pass both ways in challenge-response calls to the service. If
   *             the caller must pass another challenge, they return a session with other challenge
   *             parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The challenge parameters. These are returned in the <code>InitiateAuth</code> response
   *             if you must pass another challenge. The responses in this parameter should be used to
   *             compute inputs to the next call (<code>RespondToAuthChallenge</code>). </p>
   *          <p>All challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if
   *             applicable).</p>
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * <p>The result of the authentication response. This result is only returned if the caller
   *             doesn't need to pass another challenge. If the caller does need to pass another
   *             challenge before it gets tokens, <code>ChallengeName</code>,
   *                 <code>ChallengeParameters</code>, and <code>Session</code> are returned.</p>
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;
}

/**
 * <p>Represents the request to list the devices.</p>
 * @public
 */
export interface ListDevicesRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the user whose list of devices you want to
   *             view.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The limit of the device request.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * <p>Represents the response to list devices.</p>
 * @public
 */
export interface ListDevicesResponse {
  /**
   * <p>The devices returned in the list devices response.</p>
   * @public
   */
  Devices?: DeviceType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The limit of the request to list groups.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * <p>The group objects for the groups.</p>
   * @public
   */
  Groups?: GroupType[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersRequest {
  /**
   * <p>The user pool ID.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of IdPs to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A container for IdP details.</p>
 * @public
 */
export interface ProviderDescription {
  /**
   * <p>The IdP name.</p>
   * @public
   */
  ProviderName?: string | undefined;

  /**
   * <p>The IdP type.</p>
   * @public
   */
  ProviderType?: IdentityProviderTypeType | undefined;

  /**
   * <p>The date the provider was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersResponse {
  /**
   * <p>A list of IdP objects.</p>
   * @public
   */
  Providers: ProviderDescription[] | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceServersRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of resource servers to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceServersResponse {
  /**
   * <p>The resource servers.</p>
   * @public
   */
  ResourceServers: ResourceServerType[] | undefined;

  /**
   * <p>A pagination token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are assigned to the user pool.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents the request to list the user import jobs.</p>
 * @public
 */
export interface ListUserImportJobsRequest {
  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of import jobs you want the request to return.</p>
   * @public
   */
  MaxResults: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * <p>Represents the response from the server to the request to list the user import
 *             jobs.</p>
 * @public
 */
export interface ListUserImportJobsResponse {
  /**
   * <p>The user import jobs.</p>
   * @public
   */
  UserImportJobs?: UserImportJobType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * <p>Represents the request to list the user pool clients.</p>
 * @public
 */
export interface ListUserPoolClientsRequest {
  /**
   * <p>The user pool ID for the user pool where you want to list user pool clients.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of results you want the request to return when listing the user
   *             pool clients.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The description of the user pool client.</p>
 * @public
 */
export interface UserPoolClientDescription {
  /**
   * <p>The ID of the client associated with the user pool.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The user pool ID for the user pool where you want to describe the user pool
   *             client.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The client name from the user pool client description.</p>
   * @public
   */
  ClientName?: string | undefined;
}

/**
 * <p>Represents the response from the server that lists user pool clients.</p>
 * @public
 */
export interface ListUserPoolClientsResponse {
  /**
   * <p>The user pool clients in the response that lists user pool clients.</p>
   * @public
   */
  UserPoolClients?: UserPoolClientDescription[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the request to list user pools.</p>
 * @public
 */
export interface ListUserPoolsRequest {
  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results you want the request to return when listing the user
   *             pools.</p>
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * <p>A user pool description.</p>
 * @public
 */
export interface UserPoolDescriptionType {
  /**
   * <p>The ID in a user pool description.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name in a user pool description.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Lambda configuration information in a user pool description.</p>
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * @deprecated
   *
   * <p>The user pool status in a user pool description.</p>
   * @public
   */
  Status?: StatusType | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * <p>Represents the response to list user pools.</p>
 * @public
 */
export interface ListUserPoolsResponse {
  /**
   * <p>The user pools from the response to list users.</p>
   * @public
   */
  UserPools?: UserPoolDescriptionType[] | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the request to list users.</p>
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The user pool ID for the user pool on which the search should be performed.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A JSON array of user attribute names, for example <code>given_name</code>, that you
   *             want Amazon Cognito to include in the response for each user. When you don't provide an
   *                 <code>AttributesToGet</code> parameter, Amazon Cognito returns all attributes for each
   *             user.</p>
   *          <p>Use <code>AttributesToGet</code> with required attributes in your user pool, or in
   *             conjunction with <code>Filter</code>. Amazon Cognito returns an error if not all users in the
   *             results have set a value for the attribute you request. Attributes that you can't
   *             filter on, including custom attributes, must have a value set in every user profile
   *             before an <code>AttributesToGet</code> parameter returns results.</p>
   * @public
   */
  AttributesToGet?: string[] | undefined;

  /**
   * <p>Maximum number of users to be returned.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * <p>A filter string of the form "<i>AttributeName</i>
   *             <i>Filter-Type</i> "<i>AttributeValue</i>"". Quotation marks
   *             within the filter string must be escaped using the backslash (<code>\</code>) character.
   *             For example, <code>"family_name = \"Reddy\""</code>.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>AttributeName</i>: The name of the attribute to search for.
   *                     You can only search for one attribute at a time.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Filter-Type</i>: For an exact match, use <code>=</code>, for
   *                     example, "<code>given_name = \"Jon\"</code>". For a prefix ("starts with")
   *                     match, use <code>^=</code>, for example, "<code>given_name ^= \"Jon\"</code>".
   *                 </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>AttributeValue</i>: The attribute value that must be matched
   *                     for each user.</p>
   *             </li>
   *          </ul>
   *          <p>If the filter string is empty, <code>ListUsers</code> returns all users in the user
   *             pool.</p>
   *          <p>You can only search for the following standard attributes:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>username</code> (case-sensitive)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>email</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>phone_number</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>given_name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>family_name</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>preferred_username</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cognito:user_status</code> (called <b>Status</b> in the Console) (case-insensitive)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>status (called <b>Enabled</b> in the Console)
   *                         (case-sensitive)</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sub</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Custom attributes aren't searchable.</p>
   *          <note>
   *             <p>You can also list users with a client-side filter. The server-side filter matches
   *                 no more than one attribute. For an advanced search, use a client-side filter with
   *                 the <code>--query</code> parameter of the <code>list-users</code> action in the
   *                 CLI. When you use a client-side filter, ListUsers returns a paginated list of zero
   *                 or more users. You can receive multiple pages in a row with zero results. Repeat the
   *                 query with each pagination token that is returned until you receive a null
   *                 pagination token value, and then review the combined result. </p>
   *             <p>For more information about server-side and client-side filtering, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">FilteringCLI output</a> in the <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html">Command Line Interface
   *                     User Guide</a>. </p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-using-listusers-api">Searching for Users Using the ListUsers API</a> and <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-listusers-api-examples">Examples of Using the ListUsers API</a> in the <i>Amazon Cognito Developer
   *                 Guide</i>.</p>
   * @public
   */
  Filter?: string | undefined;
}

/**
 * <p>The response from the request to list users.</p>
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>A list of the user pool users, and their attributes, that match your query.</p>
   *          <note>
   *             <p>Amazon Cognito creates a profile in your user pool for each native user in your user pool,
   *                 and each unique user ID from your third-party identity providers (IdPs). When you
   *                 link users with the <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a> API operation, the output of
   *                     <code>ListUsers</code> displays both the IdP user and the native user that you
   *                 linked. You can identify IdP users in the <code>Users</code> object of this API
   *                 response by the IdP prefix that Amazon Cognito appends to <code>Username</code>.</p>
   *          </note>
   * @public
   */
  Users?: UserType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersInGroupRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The maximum number of users that you want to retrieve before pagination.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersInGroupResponse {
  /**
   * <p>A list of users in the group, and their attributes.</p>
   * @public
   */
  Users?: UserType[] | undefined;

  /**
   * <p>An identifier that you can use in a later request to return the next set of items in
   *             the list.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the request to resend the confirmation code.</p>
 * @public
 */
export interface ResendConfirmationCodeRequest {
  /**
   * <p>The ID of the client associated with the user pool.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>A keyed-hash message authentication code (HMAC) calculated using the secret key of a
   *             user pool client and username plus the client ID in the message.</p>
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>The username of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>ResendConfirmationCode</code> calls.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the ResendConfirmationCode API action, Amazon Cognito invokes the function that is
   *             assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes this
   *             function, it passes a JSON payload, which the function receives as input. This payload
   *             contains a <code>clientMetadata</code> attribute, which provides the data that you
   *             assigned to the ClientMetadata parameter in your ResendConfirmationCode request. In your
   *             function code in Lambda, you can process the <code>clientMetadata</code> value to enhance
   *             your workflow for your specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * <p>The response from the server when Amazon Cognito makes the request to resend a confirmation
 *             code.</p>
 * @public
 */
export interface ResendConfirmationCodeResponse {
  /**
   * <p>The code delivery details returned by the server in response to the request to resend
   *             the confirmation code.</p>
   * @public
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType | undefined;
}

/**
 * <p>The request to respond to an authentication challenge.</p>
 * @public
 */
export interface RespondToAuthChallengeRequest {
  /**
   * <p>The app client ID.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The challenge name. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p>
   *          <p>
   *             <code>ADMIN_NO_SRP_AUTH</code> isn't a valid value.</p>
   * @public
   */
  ChallengeName: ChallengeNameType | undefined;

  /**
   * <p>The session that should be passed both ways in challenge-response calls to the
   *             service. If <code>InitiateAuth</code> or <code>RespondToAuthChallenge</code> API call
   *             determines that the caller must pass another challenge, they return a session with other
   *             challenge parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The responses to the challenge that you received in the previous request. Each
   *     challenge has its own required response parameters. The following examples are partial
   *     JSON request bodies that highlight challenge-response parameters.</p>
   *          <important>
   *             <p>You must provide a SECRET_HASH parameter in all challenge responses to an app
   *         client that has a client secret.</p>
   *          </important>
   *          <dl>
   *             <dt>SMS_MFA</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SMS_MFA", "ChallengeResponses": \{"SMS_MFA_CODE":
   *                     "[code]", "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>EMAIL_OTP</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "EMAIL_OTP", "ChallengeResponses": \{"EMAIL_OTP_CODE":
   *                     "[code]", "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>PASSWORD_VERIFIER</dt>
   *             <dd>
   *                <p>This challenge response is part of the SRP flow. Amazon Cognito requires
   *             that your application respond to this challenge within a few seconds. When
   *             the response time exceeds this period, your user pool returns a
   *             <code>NotAuthorizedException</code> error.</p>
   *                <p>
   *                   <code>"ChallengeName": "PASSWORD_VERIFIER", "ChallengeResponses":
   *                     \{"PASSWORD_CLAIM_SIGNATURE": "[claim_signature]",
   *                     "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP":
   *                     [timestamp], "USERNAME": "[username]"\}</code>
   *                </p>
   *                <p>Add <code>"DEVICE_KEY"</code> when you sign in with a remembered
   *                 device.</p>
   *             </dd>
   *             <dt>CUSTOM_CHALLENGE</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses":
   *                     \{"USERNAME": "[username]", "ANSWER": "[challenge_answer]"\}</code>
   *                </p>
   *                <p>Add <code>"DEVICE_KEY"</code> when you sign in with a remembered
   *                 device.</p>
   *             </dd>
   *             <dt>NEW_PASSWORD_REQUIRED</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "NEW_PASSWORD_REQUIRED", "ChallengeResponses":
   *                     \{"NEW_PASSWORD": "[new_password]", "USERNAME":
   *                 "[username]"\}</code>
   *                </p>
   *                <p>To set any required attributes that <code>InitiateAuth</code> returned in
   *                 an <code>requiredAttributes</code> parameter, add
   *                     <code>"userAttributes.[attribute_name]": "[attribute_value]"</code>.
   *                 This parameter can also set values for writable attributes that aren't
   *                 required by your user pool.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the <code>requiredAttributes</code> parameter,
   * then use the <code>UpdateUserAttributes</code> API operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </dd>
   *             <dt>SOFTWARE_TOKEN_MFA</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SOFTWARE_TOKEN_MFA", "ChallengeResponses":
   *                     \{"USERNAME": "[username]", "SOFTWARE_TOKEN_MFA_CODE":
   *                     [authenticator_code]\}</code>
   *                </p>
   *             </dd>
   *             <dt>DEVICE_SRP_AUTH</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "DEVICE_SRP_AUTH", "ChallengeResponses": \{"USERNAME":
   *                 "[username]", "DEVICE_KEY": "[device_key]", "SRP_A":
   *                 "[srp_a]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>DEVICE_PASSWORD_VERIFIER</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "DEVICE_PASSWORD_VERIFIER", "ChallengeResponses":
   *                 \{"DEVICE_KEY": "[device_key]", "PASSWORD_CLAIM_SIGNATURE":
   *                 "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]",
   *                 "TIMESTAMP": [timestamp], "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>MFA_SETUP</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "MFA_SETUP", "ChallengeResponses": \{"USERNAME":
   *                 "[username]"\}, "SESSION": "[Session ID from
   *                 VerifySoftwareToken]"</code>
   *                </p>
   *             </dd>
   *             <dt>SELECT_MFA_TYPE</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SELECT_MFA_TYPE", "ChallengeResponses": \{"USERNAME":
   *                 "[username]", "ANSWER": "[SMS_MFA or SOFTWARE_TOKEN_MFA]"\}</code>
   *                </p>
   *             </dd>
   *          </dl>
   *          <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about
   *     <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>
   * @public
   */
  ChallengeResponses?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata that contributes to your metrics for
   *                 <code>RespondToAuthChallenge</code> calls.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session, such as the device fingerprint, IP address, or location. Amazon Cognito advanced
   * security evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool
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
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Customizing user pool Workflows with Lambda Triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the ClientMetadata parameter, remember that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the ClientMetadata value. This data is available only to Lambda
   *                         triggers that are assigned to a user pool to support custom workflows. If
   *                         your user pool configuration doesn't include triggers, the ClientMetadata
   *                         parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the ClientMetadata value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the ClientMetadata value. Don't use Amazon Cognito to provide sensitive
   *                         information.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

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
export const AdminDisableUserRequestFilterSensitiveLog = (obj: AdminDisableUserRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
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
export const AdminInitiateAuthRequestFilterSensitiveLog = (obj: AdminInitiateAuthRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.AuthParameters && { AuthParameters: SENSITIVE_STRING }),
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
  ...(obj.Session && { Session: SENSITIVE_STRING }),
  ...(obj.AuthenticationResult && {
    AuthenticationResult: AuthenticationResultTypeFilterSensitiveLog(obj.AuthenticationResult),
  }),
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
export const AdminListUserAuthEventsRequestFilterSensitiveLog = (obj: AdminListUserAuthEventsRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
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
export const AdminRespondToAuthChallengeRequestFilterSensitiveLog = (obj: AdminRespondToAuthChallengeRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.ChallengeResponses && { ChallengeResponses: SENSITIVE_STRING }),
  ...(obj.Session && { Session: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AdminRespondToAuthChallengeResponseFilterSensitiveLog = (
  obj: AdminRespondToAuthChallengeResponse
): any => ({
  ...obj,
  ...(obj.Session && { Session: SENSITIVE_STRING }),
  ...(obj.AuthenticationResult && {
    AuthenticationResult: AuthenticationResultTypeFilterSensitiveLog(obj.AuthenticationResult),
  }),
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
export const AdminSetUserPasswordRequestFilterSensitiveLog = (obj: AdminSetUserPasswordRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
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
export const AdminUpdateAuthEventFeedbackRequestFilterSensitiveLog = (
  obj: AdminUpdateAuthEventFeedbackRequest
): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
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
export const AdminUserGlobalSignOutRequestFilterSensitiveLog = (obj: AdminUserGlobalSignOutRequest): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociateSoftwareTokenRequestFilterSensitiveLog = (obj: AssociateSoftwareTokenRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  ...(obj.Session && { Session: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssociateSoftwareTokenResponseFilterSensitiveLog = (obj: AssociateSoftwareTokenResponse): any => ({
  ...obj,
  ...(obj.SecretCode && { SecretCode: SENSITIVE_STRING }),
  ...(obj.Session && { Session: SENSITIVE_STRING }),
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
export const ConfirmDeviceRequestFilterSensitiveLog = (obj: ConfirmDeviceRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
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
  ...(obj.UserContextData && { UserContextData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConfirmSignUpRequestFilterSensitiveLog = (obj: ConfirmSignUpRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.UserContextData && { UserContextData: SENSITIVE_STRING }),
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
export const DeleteUserPoolClientRequestFilterSensitiveLog = (obj: DeleteUserPoolClientRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
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
  ...(obj.UserContextData && { UserContextData: SENSITIVE_STRING }),
  ...(obj.Username && { Username: SENSITIVE_STRING }),
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
export const GlobalSignOutRequestFilterSensitiveLog = (obj: GlobalSignOutRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InitiateAuthRequestFilterSensitiveLog = (obj: InitiateAuthRequest): any => ({
  ...obj,
  ...(obj.AuthParameters && { AuthParameters: SENSITIVE_STRING }),
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.UserContextData && { UserContextData: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InitiateAuthResponseFilterSensitiveLog = (obj: InitiateAuthResponse): any => ({
  ...obj,
  ...(obj.Session && { Session: SENSITIVE_STRING }),
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
export const ListUsersResponseFilterSensitiveLog = (obj: ListUsersResponse): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserTypeFilterSensitiveLog(item)) }),
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
  ...(obj.UserContextData && { UserContextData: SENSITIVE_STRING }),
  ...(obj.Username && { Username: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RespondToAuthChallengeRequestFilterSensitiveLog = (obj: RespondToAuthChallengeRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.Session && { Session: SENSITIVE_STRING }),
  ...(obj.ChallengeResponses && { ChallengeResponses: SENSITIVE_STRING }),
  ...(obj.UserContextData && { UserContextData: SENSITIVE_STRING }),
});
