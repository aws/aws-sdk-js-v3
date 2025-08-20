// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

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
 * <p>A recovery option for a user. The <code>AccountRecoverySettingType</code> data type is
 *             an array of this object. Each <code>RecoveryOptionType</code> has a priority property
 *             that determines whether it is a primary or secondary option.</p>
 *          <p>For example, if <code>verified_email</code> has a priority of <code>1</code> and
 *                 <code>verified_phone_number</code> has a priority of <code>2</code>, your user pool
 *             sends account-recovery messages to a verified email address but falls back to an SMS
 *             message if the user has a verified phone number. The <code>admin_only</code> option
 *             prevents self-service account recovery.</p>
 * @public
 */
export interface RecoveryOptionType {
  /**
   * <p>Your priority preference for using the specified attribute in account recovery. The
   *             highest priority is <code>1</code>.</p>
   * @public
   */
  Priority: number | undefined;

  /**
   * <p>The recovery method that this object sets a recovery option for.</p>
   * @public
   */
  Name: RecoveryOptionNameType | undefined;
}

/**
 * <p>The settings for user message delivery in forgot-password operations. Contains
 *             preference for email or SMS message delivery of password reset codes, or for admin-only
 *             password reset.</p>
 * @public
 */
export interface AccountRecoverySettingType {
  /**
   * <p>The list of options and priorities for user message delivery in forgot-password
   *             operations. Sets or displays user pool preferences for email or SMS message priority,
   *             whether users should fall back to a second delivery method, and whether passwords should
   *             only be reset by administrators.</p>
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
 * <p>The automated response to a risk level for adaptive authentication in full-function,
 *             or <code>ENFORCED</code>, mode. You can assign an action to each risk level that threat
 *             protection evaluates.</p>
 * @public
 */
export interface AccountTakeoverActionType {
  /**
   * <p>Determines whether Amazon Cognito sends a user a notification message when your user pools
   *             assesses a user's session at the associated risk level.</p>
   * @public
   */
  Notify: boolean | undefined;

  /**
   * <p>The action to take for the attempted account takeover action for the associated risk
   *             level. Valid values are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BLOCK</code>: Block the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_IF_CONFIGURED</code>: Present an MFA challenge if possible. MFA is
   *                     possible if the user pool has active MFA methods that the user can set up. For
   *                     example, if the user pool only supports SMS message MFA but the user
   *                     doesn't have a phone number attribute, MFA setup isn't possible. If MFA
   *                     setup isn't possible, allow the request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_REQUIRED</code>: Present an MFA challenge if possible. Block the
   *                     request if a user hasn't set up MFA. To sign in with required MFA, users must
   *                     have an email address or phone number attribute, or a registered TOTP
   *                     factor.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_ACTION</code>: Take no action. Permit sign-in.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EventAction: AccountTakeoverEventActionType | undefined;
}

/**
 * <p>A list of account-takeover actions for each level of risk that Amazon Cognito might assess with
 *             threat protection features.</p>
 * @public
 */
export interface AccountTakeoverActionsType {
  /**
   * <p>The action that you assign to a low-risk assessment by threat protection.</p>
   * @public
   */
  LowAction?: AccountTakeoverActionType | undefined;

  /**
   * <p>The action that you assign to a medium-risk assessment by threat protection.</p>
   * @public
   */
  MediumAction?: AccountTakeoverActionType | undefined;

  /**
   * <p>The action that you assign to a high-risk assessment by threat protection.</p>
   * @public
   */
  HighAction?: AccountTakeoverActionType | undefined;
}

/**
 * <p>The template for email messages that threat protection sends to a user when your
 *             threat protection automated response has a <i>Notify</i> action.</p>
 * @public
 */
export interface NotifyEmailType {
  /**
   * <p>The subject of the threat protection email notification.</p>
   * @public
   */
  Subject: string | undefined;

  /**
   * <p>The body of an email notification formatted in HTML. Choose an <code>HtmlBody</code>
   *             or a <code>TextBody</code> to send an HTML-formatted or plaintext message,
   *             respectively.</p>
   * @public
   */
  HtmlBody?: string | undefined;

  /**
   * <p>The body of an email notification formatted in plaintext. Choose an
   *                 <code>HtmlBody</code> or a <code>TextBody</code> to send an HTML-formatted or
   *             plaintext message, respectively.</p>
   * @public
   */
  TextBody?: string | undefined;
}

/**
 * <p>The configuration for Amazon SES email messages that threat protection sends to a user when
 *             your adaptive authentication automated response has a <i>Notify</i>
 *             action.</p>
 * @public
 */
export interface NotifyConfigurationType {
  /**
   * <p>The email address that sends the email message. The address must be either
   *             individually verified with Amazon Simple Email Service, or from a domain that has been verified with
   *             Amazon SES.</p>
   * @public
   */
  From?: string | undefined;

  /**
   * <p>The reply-to email address of an email template.</p>
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
   * <p>The template for the email message that your user pool sends when a detected risk
   *             event is blocked.</p>
   * @public
   */
  BlockEmail?: NotifyEmailType | undefined;

  /**
   * <p>The template for the email message that your user pool sends when no action is taken
   *             in response to a detected risk.</p>
   * @public
   */
  NoActionEmail?: NotifyEmailType | undefined;

  /**
   * <p>The template for the email message that your user pool sends when MFA is challenged in
   *             response to a detected risk.</p>
   * @public
   */
  MfaEmail?: NotifyEmailType | undefined;
}

/**
 * <p>The settings for automated responses and notification templates for adaptive
 *             authentication with threat protection features.</p>
 * @public
 */
export interface AccountTakeoverRiskConfigurationType {
  /**
   * <p>The settings for composing and sending an email message when threat protection
   *             assesses a risk level with adaptive authentication. When you choose to notify users in
   *                 <code>AccountTakeoverRiskConfiguration</code>, Amazon Cognito sends an email message using
   *             the method and template that you set with this data type.</p>
   * @public
   */
  NotifyConfiguration?: NotifyConfigurationType | undefined;

  /**
   * <p>A list of account-takeover actions for each level of risk that Amazon Cognito might assess with
   *             threat protection.</p>
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
 * <p>The minimum and maximum values of an attribute that is of the number type, for example
 *                 <code>custom:age</code>.</p>
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
 * <p>The minimum and maximum length values of an attribute that is of the string type, for
 *             example <code>custom:department</code>.</p>
 * @public
 */
export interface StringAttributeConstraintsType {
  /**
   * <p>The minimum length of a string attribute value.</p>
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
 *          <p>Developer-only <code>dev:</code> attributes are a legacy feature of user pools, and
 *             are read-only to all app clients. You can create and update developer-only attributes
 *             only with IAM-authenticated API operations. Use app client read/write permissions
 *             instead.</p>
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
   * <p>The ID of the user pool where you want to add custom attributes.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>An array of custom attribute names and other properties. Sets the following
   *             characteristics:</p>
   *          <dl>
   *             <dt>AttributeDataType</dt>
   *             <dd>
   *                <p>The expected data type. Can be a string, a number, a date and time, or a
   *                         boolean.</p>
   *             </dd>
   *             <dt>Mutable</dt>
   *             <dd>
   *                <p>If true, you can grant app clients write access to the attribute value. If
   *                         false, the attribute value can only be set up on sign-up or administrator
   *                         creation of users.</p>
   *             </dd>
   *             <dt>Name</dt>
   *             <dd>
   *                <p>The attribute name. For an attribute like <code>custom:myAttribute</code>,
   *                         enter <code>myAttribute</code> for this field.</p>
   *             </dd>
   *             <dt>Required</dt>
   *             <dd>
   *                <p>When true, users who sign up or are created must set a value for the
   *                         attribute.</p>
   *             </dd>
   *             <dt>NumberAttributeConstraints</dt>
   *             <dd>
   *                <p>The minimum and maximum length of accepted values for a
   *                             <code>Number</code>-type attribute.</p>
   *             </dd>
   *             <dt>StringAttributeConstraints</dt>
   *             <dd>
   *                <p>The minimum and maximum length of accepted values for a
   *                             <code>String</code>-type attribute.</p>
   *             </dd>
   *             <dt>DeveloperOnlyAttribute</dt>
   *             <dd>
   *                <p>This legacy option creates an attribute with a <code>dev:</code> prefix.
   *                         You can only set the value of a developer-only attribute with administrative
   *                         IAM credentials.</p>
   *             </dd>
   *          </dl>
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
   * <p>The reason code of the exception.</p>
   * @public
   */
  reasonCode?: string | undefined;

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
    this.reasonCode = opts.reasonCode;
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
   * <p>The ID of the user pool that contains the group that you want to add the user
   *             to.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
   * <p>The ID of the user pool where you want to confirm a user's sign-up
   *             request.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
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
 * <p>The name and value of a user attribute.</p>
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
 * <p>Creates a new user in the specified user pool.</p>
 * @public
 */
export interface AdminCreateUserRequest {
  /**
   * <p>The ID of the user pool where you want to create a user.</p>
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
   *          <p>You must also provide an email address or phone number when you expect the user to do
   *             passwordless sign-in with an email or SMS OTP. These attributes must be provided when
   *             passwordless options are the only available, or when you don't submit a
   *                 <code>TemporaryPassword</code>.</p>
   *          <p>In your <code>AdminCreateUser</code> request, you can set the
   *                 <code>email_verified</code> and <code>phone_number_verified</code> attributes to
   *                 <code>true</code>. The following conditions apply:</p>
   *          <dl>
   *             <dt>email</dt>
   *             <dd>
   *                <p>The email address where you want the user to receive their confirmation
   *                         code and username. You must provide a value for <code>email</code> when you
   *                         want to set <code>email_verified</code> to <code>true</code>, or if you set
   *                             <code>EMAIL</code> in the <code>DesiredDeliveryMediums</code>
   *                         parameter.</p>
   *             </dd>
   *             <dt>phone_number</dt>
   *             <dd>
   *                <p>The phone number where you want the user to receive their confirmation
   *                         code and username. You must provide a value for <code>phone_number</code>
   *                         when you want to set <code>phone_number_verified</code> to
   *                         <code>true</code>, or if you set <code>SMS</code> in the
   *                             <code>DesiredDeliveryMediums</code> parameter.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  UserAttributes?: AttributeType[] | undefined;

  /**
   * <p>Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda
   *     trigger. This set of key-value pairs are for custom validation of information that you
   *     collect from your users but don't need to retain.</p>
   *          <p>Your Lambda function can analyze this additional data and act on it. Your function
   *     can automatically confirm and verify select users or perform external API operations
   *     like logging user attributes and validation data to Amazon CloudWatch Logs.</p>
   *          <p>For more information about the pre sign-up Lambda trigger, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html">Pre sign-up Lambda trigger</a>.</p>
   * @public
   */
  ValidationData?: AttributeType[] | undefined;

  /**
   * <p>The user's temporary password. This password must conform to the password policy that
   *             you specified when you created the user pool.</p>
   *          <p>The exception to the requirement for a password is when your user pool supports
   *             passwordless sign-in with email or SMS OTPs. To create a user with no password, omit
   *             this parameter or submit a blank value. You can only create a passwordless user when
   *             passwordless sign-in is available.</p>
   *          <p>The temporary password is valid only once. To complete the Admin Create User flow, the
   *             user must enter the temporary password in the sign-in page, along with a new password to
   *             be used in all future sign-ins.</p>
   *          <p>If you don't specify a value, Amazon Cognito generates one for you unless you have passwordless
   *             options active for your user pool.</p>
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
   *             specified in the <code>UserAttributes</code> parameter already exists as an alias with a
   *             different user, this request migrates the alias from the previous user to the
   *             newly-created user. The previous user will no longer be able to log in using that
   *             alias.</p>
   *          <p>If this parameter is set to <code>False</code>, the API throws an
   *                 <code>AliasExistsException</code> error if the alias already exists. The default
   *             value is <code>False</code>.</p>
   * @public
   */
  ForceAliasCreation?: boolean | undefined;

  /**
   * <p>Set to <code>RESEND</code> to resend the invitation message to a user that already
   *             exists, and to reset the temporary-password duration with a new temporary password. Set
   *             to <code>SUPPRESS</code> to suppress sending the message. You can specify only one
   *             value.</p>
   * @public
   */
  MessageAction?: MessageActionType | undefined;

  /**
   * <p>Specify <code>EMAIL</code> if email will be used to send the welcome message. Specify
   *                 <code>SMS</code> if the phone number will be used. The default value is
   *                 <code>SMS</code>. You can specify more than one value.</p>
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
   *                 <code>ClientMetadata</code> attribute, which provides the data that you assigned to
   *             the ClientMetadata parameter in your AdminCreateUser request. In your function code in
   *             Lambda, you can process the <code>clientMetadata</code> value to enhance your
   *             workflow for your specific needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
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
   * <p>The user's username.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>Names and values of a user's attributes, for example <code>email</code>.</p>
   * @public
   */
  Attributes?: AttributeType[] | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
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
   * <p>Indicates whether the user's account is enabled or disabled.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The user status. This can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>UNCONFIRMED</code>: User has been created but not confirmed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONFIRMED</code>: User has been confirmed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EXTERNAL_PROVIDER</code>: User signed in with a third-party IdP.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESET_REQUIRED</code>: User is confirmed, but the user must request a
   *                     code and reset their password before they can sign in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FORCE_CHANGE_PASSWORD</code>: The user is confirmed and the user can
   *                     sign in using a temporary password, but on first sign-in, the user must change
   *                     their password to a new value before doing anything else. </p>
   *             </li>
   *          </ul>
   *          <p>The statuses <code>ARCHIVED</code>, <code>UNKNOWN</code>, and <code>COMPROMISED</code>
   *             are no longer used.</p>
   * @public
   */
  UserStatus?: UserStatusType | undefined;

  /**
   * <p>The user's MFA configuration.</p>
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
   * <p>The new user's profile details.</p>
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
 *                 <code>cognito-idp.amazonaws.com</code> or the external ID provided in the role does
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
 * <p>The settings for administrator creation of users in a user pool. Contains settings for
 *             allowing user sign-up, customizing invitation messages to new users, and the amount of
 *             time before temporary passwords expire.</p>
 * @public
 */
export interface AdminCreateUserConfigType {
  /**
   * <p>The setting for allowing self-service sign-up. When <code>true</code>, only
   *             administrators can create new user profiles. When <code>false</code>, users can register
   *             themselves and create a new user profile with the <code>SignUp</code> operation.</p>
   * @public
   */
  AllowAdminCreateUserOnly?: boolean | undefined;

  /**
   * <p>This parameter is no longer in use.</p>
   *          <p>The password expiration limit in days for administrator-created users. When this time
   *             expires, the user can't sign in with their temporary password. To reset the account
   *             after that time limit, you must call <code>AdminCreateUser</code> again, specifying
   *                 <code>RESEND</code> for the <code>MessageAction</code> parameter. </p>
   *          <p>The default value for this parameter is 7.</p>
   * @public
   */
  UnusedAccountValidityDays?: number | undefined;

  /**
   * <p>The template for the welcome message to new users. This template must include the
   *                 <code>\{####\}</code> temporary password placeholder if you are creating users with
   *             passwords. If your users don't have passwords, you can omit the placeholder.</p>
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
   * <p>The ID of the user pool where you want to delete the user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
   * <p>The ID of the user pool where you want to delete user attributes.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
 * <p>The characteristics of a source or destination user for linking a federated user
 *             profile to a local user profile.</p>
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
   * <p>The ID of the user pool where you want to delete the user's linked
   *             identities.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user profile that you want to delete a linked identity from.</p>
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
   * <p>The ID of the user pool where you want to disable the user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
   * <p>The ID of the user pool where you want to activate sign-in for the user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
   * <p>The ID of the user pool where the device owner is a user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The key ID of the device that you want to delete.</p>
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
   * <p>The key of the device that you want to delete.</p>
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * <p>The ID of the user pool where the device owner is a user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;
}

/**
 * <p>Information about a user's device that they've registered for device SRP
 *             authentication in your application. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>
 * @public
 */
export interface DeviceType {
  /**
   * <p>The device key, for example
   *                 <code>us-west-2_EXAMPLE-a1b2c3d4-5678-90ab-cdef-EXAMPLE22222</code>.</p>
   * @public
   */
  DeviceKey?: string | undefined;

  /**
   * <p>Metadata about a user's device, like name and last-access source IP.</p>
   * @public
   */
  DeviceAttributes?: AttributeType[] | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
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
   * <p>The date when the user last signed in with the device.</p>
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
   * <p>Details of the requested device. Includes device information, last-accessed and
   *             created dates, and the device key.</p>
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
   * <p>The ID of the user pool where you want to get information about the user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
   * <p>An array of name-value pairs of user attributes and their values, for example
   *                 <code>"email": "testuser@example.com"</code>.</p>
   * @public
   */
  UserAttributes?: AttributeType[] | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
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
   * <p>Indicates whether the user is activated for sign-in.</p>
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * <p>The user's status. Can be one of the following:</p>
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
   *             <li>
   *                <p>EXTERNAL_PROVIDER - The user signed in with a third-party identity
   *                     provider.</p>
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
   * <p>The user's preferred MFA. Users can prefer SMS message, email message, or TOTP
   *             MFA.</p>
   * @public
   */
  PreferredMfaSetting?: string | undefined;

  /**
   * <p>The MFA options that are activated for the user. The possible values in this list are
   *                 <code>SMS_MFA</code>, <code>EMAIL_OTP</code>, and
   *             <code>SOFTWARE_TOKEN_MFA</code>.</p>
   * @public
   */
  UserMFASettingList?: string[] | undefined;
}

/**
 * <p>Information that your application adds to authentication requests. Applies an endpoint
 *             ID to the analytics data that your user pool sends to Amazon Pinpoint.</p>
 *          <p>An endpoint ID uniquely identifies a mobile device, email address or phone number that
 *             can receive messages from Amazon Pinpoint analytics. For more information about Amazon Web Services Regions that
 *             can contain Amazon Pinpoint resources for use with Amazon Cognito user pools, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html">Using Amazon Pinpoint analytics with Amazon Cognito user pools</a>.</p>
 * @public
 */
export interface AnalyticsMetadataType {
  /**
   * <p>The endpoint ID. Information that you want to pass to Amazon Pinpoint about where to send
   *             notifications.</p>
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
  USER_AUTH: "USER_AUTH",
  USER_PASSWORD_AUTH: "USER_PASSWORD_AUTH",
  USER_SRP_AUTH: "USER_SRP_AUTH",
} as const;

/**
 * @public
 */
export type AuthFlowType = (typeof AuthFlowType)[keyof typeof AuthFlowType];

/**
 * <p>The HTTP header in the <code>ContextData</code> parameter.</p>
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
 * <p>Contextual user data used for evaluating the risk of an authentication event by user
 *             pool threat protection.</p>
 * @public
 */
export interface ContextDataType {
  /**
   * <p>The source IP address of your user's device.</p>
   * @public
   */
  IpAddress: string | undefined;

  /**
   * <p>The name of your application's service endpoint.</p>
   * @public
   */
  ServerName: string | undefined;

  /**
   * <p>The path of your application's service endpoint.</p>
   * @public
   */
  ServerPath: string | undefined;

  /**
   * <p>The HTTP headers from your user's authentication request.</p>
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
   * <p>The ID of the user pool where the user wants to sign in.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the app client where the user wants to sign in.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The authentication flow that you want to initiate. Each <code>AuthFlow</code> has
   *             linked <code>AuthParameters</code> that you must submit. The following are some example
   *             flows.</p>
   *          <dl>
   *             <dt>USER_AUTH</dt>
   *             <dd>
   *                <p>The entry point for <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice">choice-based authentication</a> with passwords,
   *                         one-time passwords, and WebAuthn authenticators. Request a preferred
   *                         authentication type or review available authentication types. From the
   *                         offered authentication types, select one in a challenge response and then
   *                         authenticate with that method in an additional challenge response.
   *                         To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
   *                      Essentials tier</a> or higher.</p>
   *             </dd>
   *             <dt>USER_SRP_AUTH</dt>
   *             <dd>
   *                <p>Username-password authentication with the Secure Remote Password (SRP)
   *                         protocol. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow.html#Using-SRP-password-verification-in-custom-authentication-flow">Use SRP password verification in custom
   *                             authentication flow</a>.</p>
   *             </dd>
   *             <dt>REFRESH_TOKEN_AUTH and REFRESH_TOKEN</dt>
   *             <dd>
   *                <p>Receive new ID and access tokens when you pass a
   *                             <code>REFRESH_TOKEN</code> parameter with a valid refresh token as the
   *                         value. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-the-refresh-token.html">Using the refresh token</a>.</p>
   *             </dd>
   *             <dt>CUSTOM_AUTH</dt>
   *             <dd>
   *                <p>Custom authentication with Lambda triggers. For more information, see
   *                             <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html">Custom authentication challenge Lambda
   *                             triggers</a>.</p>
   *             </dd>
   *             <dt>ADMIN_USER_PASSWORD_AUTH</dt>
   *             <dd>
   *                <p>Server-side username-password authentication with the password sent
   *                         directly in the request. For more information about client-side and
   *                         server-side authentication, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-public-server-side.html">SDK authorization models</a>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  AuthFlow: AuthFlowType | undefined;

  /**
   * <p>The authentication parameters. These are inputs corresponding to the
   *                 <code>AuthFlow</code> that you're invoking.</p>
   *          <p>The following are some authentication flows and their parameters. Add a
   *                 <code>SECRET_HASH</code> parameter if your app client has a client secret. Add
   *                 <code>DEVICE_KEY</code> if you want to bypass multi-factor authentication with a
   *             remembered device. </p>
   *          <dl>
   *             <dt>USER_AUTH</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>USERNAME</code> (required)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>PREFERRED_CHALLENGE</code>. If you don't provide a
   *                                 value for <code>PREFERRED_CHALLENGE</code>, Amazon Cognito responds with the
   *                                     <code>AvailableChallenges</code> parameter that specifies the
   *                                 available sign-in methods.</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>USER_SRP_AUTH</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>USERNAME</code> (required)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>SRP_A</code> (required)</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>ADMIN_USER_PASSWORD_AUTH</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>USERNAME</code> (required)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>PASSWORD</code> (required)</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>REFRESH_TOKEN_AUTH/REFRESH_TOKEN</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>REFRESH_TOKEN</code>(required)</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>CUSTOM_AUTH</dt>
   *             <dd>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>USERNAME</code> (required)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ChallengeName: SRP_A</code> (when preceding custom
   *                                 authentication with SRP authentication)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>SRP_A: (An SRP_A value)</code> (when preceding custom
   *                                 authentication with SRP authentication)</p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
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
   *             <li>
   *                <p>Custom email sender</p>
   *             </li>
   *             <li>
   *                <p>Custom SMS sender</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;

  /**
   * <p>Information that supports analytics outcomes with Amazon Pinpoint, including the
   * user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier,
   * email address, or phone number.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat
   * protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html">Collecting data for threat protection in
   * applications</a>.</p>
   * @public
   */
  ContextData?: ContextDataType | undefined;

  /**
   * <p>The optional session ID from a <code>ConfirmSignUp</code> API request. You can sign in
   *             a user directly from the sign-up process with an <code>AuthFlow</code> of
   *                 <code>USER_AUTH</code> and <code>AuthParameters</code> of <code>EMAIL_OTP</code> or
   *                 <code>SMS_OTP</code>, depending on how your user pool sent the confirmation-code
   *             message.</p>
   * @public
   */
  Session?: string | undefined;
}

/**
 * <p>Information that your user pool responds with in <code>AuthenticationResult</code>when
 *             you configure it to remember devices and a user signs in with an unrecognized device.
 *             Amazon Cognito presents a new device key that you can use to set up <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">device authentication</a> in a "Remember me on this device"
 *             authentication model.</p>
 * @public
 */
export interface NewDeviceMetadataType {
  /**
   * <p>The device key, an identifier used in generating the
   *                 <code>DEVICE_PASSWORD_VERIFIER</code> for device SRP authentication.</p>
   * @public
   */
  DeviceKey?: string | undefined;

  /**
   * <p>The device group key, an identifier used in generating the
   *                 <code>DEVICE_PASSWORD_VERIFIER</code> for device SRP authentication.</p>
   * @public
   */
  DeviceGroupKey?: string | undefined;
}

/**
 * <p>The object that your application receives after authentication. Contains tokens and
 *             information for device authentication.</p>
 * @public
 */
export interface AuthenticationResultType {
  /**
   * <p>Your user's access token.</p>
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * <p>The expiration period of the authentication result in seconds.</p>
   * @public
   */
  ExpiresIn?: number | undefined;

  /**
   * <p>The intended use of the token, for example <code>Bearer</code>.</p>
   * @public
   */
  TokenType?: string | undefined;

  /**
   * <p>Your user's refresh token.</p>
   * @public
   */
  RefreshToken?: string | undefined;

  /**
   * <p>Your user's ID token.</p>
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
  PASSWORD: "PASSWORD",
  PASSWORD_SRP: "PASSWORD_SRP",
  PASSWORD_VERIFIER: "PASSWORD_VERIFIER",
  SELECT_CHALLENGE: "SELECT_CHALLENGE",
  SELECT_MFA_TYPE: "SELECT_MFA_TYPE",
  SMS_MFA: "SMS_MFA",
  SMS_OTP: "SMS_OTP",
  SOFTWARE_TOKEN_MFA: "SOFTWARE_TOKEN_MFA",
  WEB_AUTHN: "WEB_AUTHN",
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
   *          <p>Possible challenges include the following:</p>
   *          <note>
   *             <p>All of the following challenges require <code>USERNAME</code> and, when the app
   *                 client has a client secret, <code>SECRET_HASH</code> in the parameters. Include a
   *                 <code>DEVICE_KEY</code> for device authentication.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WEB_AUTHN</code>: Respond to the challenge with the results of a
   *                     successful authentication with a WebAuthn authenticator, or passkey, as
   *                     <code>CREDENTIAL</code>. Examples of WebAuthn authenticators include
   *                     biometric devices and security keys.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD</code>: Respond with the user's password as <code>PASSWORD</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_SRP</code>: Respond with the initial SRP secret as <code>SRP_A</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SELECT_CHALLENGE</code>: Respond with a challenge selection as <code>ANSWER</code>.
   *                 It must be one of the challenge types in the <code>AvailableChallenges</code> response
   *                 parameter. Add the parameters of the selected challenge, for example <code>USERNAME</code>
   *                 and <code>SMS_OTP</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMS_MFA</code>: Respond with the code that your user pool delivered in an SMS
   *                     message, as <code>SMS_MFA_CODE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_MFA</code>: Respond with the code that your user pool delivered in an email
   *                     message, as <code>EMAIL_MFA_CODE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_OTP</code>: Respond with the code that your user pool delivered in an email
   *                     message, as <code>EMAIL_OTP_CODE</code> .</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMS_OTP</code>: Respond with the code that your user pool delivered in an SMS
   *                     message, as <code>SMS_OTP_CODE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_VERIFIER</code>: Respond with the second stage of SRP secrets as
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>, <code>PASSWORD_CLAIM_SECRET_BLOCK</code>,
   *                         and <code>TIMESTAMP</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication
   *                     flow determines that the user should pass another challenge before tokens are
   *                     issued. The parameters of the challenge are determined by your Lambda function
   *                     and issued in the <code>ChallengeParameters</code> of a challenge response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_SRP_AUTH</code>: Respond with the initial parameters of device SRP
   *                 authentication. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Respond with
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     client-side SRP calculations. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their
   *                     passwords after successful first login. Respond to this challenge with
   *                     <code>NEW_PASSWORD</code> and any required attributes that Amazon Cognito returned in
   *                     the <code>requiredAttributes</code> parameter. You can also set values for
   *                     attributes that aren't required by your user pool and that your app client
   *                     can write.</p>
   *                <p>Amazon Cognito only returns this challenge for users who have temporary passwords.
   *                     When you create passwordless users, you must provide values for all required
   *                     attributes.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>AdminRespondToAuthChallenge</code> or <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the
   * <code>requiredAttributes</code> parameter, then use the <code>AdminUpdateUserAttributes</code> or <code>UpdateUserAttributes</code> API
   * operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_SETUP</code>: For users who are required to setup an MFA factor
   *                     before they can sign in. The MFA types activated for the user pool will be
   *                     listed in the challenge parameters <code>MFAS_CAN_SETUP</code> value. </p>
   *                <p>To set up time-based one-time password (TOTP) MFA, use the session returned
   *                     in this challenge from <code>InitiateAuth</code> or <code>AdminInitiateAuth</code>
   *                     as an input to <code>AssociateSoftwareToken</code>. Then, use the session returned
   *                     by <code>VerifySoftwareToken</code> as an input to
   *                     <code>RespondToAuthChallenge</code> or <code>AdminRespondToAuthChallenge</code>
   *                 with challenge name <code>MFA_SETUP</code> to complete sign-in.
   *                 </p>
   *                <p>To set up SMS or email MFA, collect a <code>phone_number</code> or
   *                     <code>email</code> attribute for the user. Then restart the authentication
   *                     flow with an <code>InitiateAuth</code> or <code>AdminInitiateAuth</code> request.
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * <p>The session that must be passed to challenge-response requests. If an
   *                 <code>AdminInitiateAuth</code> or <code>AdminRespondToAuthChallenge</code> API
   *             request results in another authentication challenge, Amazon Cognito returns a session ID and the
   *             parameters of the next challenge. Pass this session ID in the <code>Session</code>
   *             parameter of <code>AdminRespondToAuthChallenge</code>.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The parameters of an authentication challenge. Amazon Cognito returns challenge parameters as a
   *             guide to the responses your user or application must provide for the returned
   *                 <code>ChallengeName</code>. Calculate responses to the challenge parameters and pass
   *             them in the <code>ChallengeParameters</code> of
   *             <code>AdminRespondToAuthChallenge</code>.</p>
   *          <p>All challenges require <code>USERNAME</code> and, when the app client has a client
   *             secret, <code>SECRET_HASH</code>.</p>
   *          <p>In SRP challenges, Amazon Cognito returns the <code>username</code> attribute in
   *                 <code>USER_ID_FOR_SRP</code> instead of any email address, preferred username, or
   *             phone number alias that you might have specified in your <code>AdminInitiateAuth</code>
   *             request. You must use the username and not an alias in the
   *                 <code>ChallengeResponses</code> of your challenge response.</p>
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * <p>The outcome of successful authentication. This is only returned if the user pool has
   *             no additional challenges to return. If Amazon Cognito returns another challenge, the response
   *             includes <code>ChallengeName</code>, <code>ChallengeParameters</code>, and
   *                 <code>Session</code> so that your user can answer the challenge.</p>
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;

  /**
   * <p>This response parameter lists the available authentication challenges that users can
   *             select from in <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice">choice-based authentication</a>. For example, they might be
   *             able to choose between passkey authentication, a one-time password from an SMS message,
   *             and a traditional password.</p>
   * @public
   */
  AvailableChallenges?: ChallengeNameType[] | undefined;
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
 * <p>Exception that is thrown when you attempt to perform an operation that isn't enabled
 *             for the user pool client.</p>
 * @public
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
   * <p>The ID of the user pool where you want to link a federated identity.</p>
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
   *          <p>For OIDC, the <code>ProviderAttributeName</code> can be any mapped value from a claim
   *             in the ID token, or that your app retrieves from the <code>userInfo</code> endpoint. For
   *             SAML, the <code>ProviderAttributeName</code> can be any mapped value from a claim in the
   *             SAML assertion.</p>
   *          <p>The following additional considerations apply to <code>SourceUser</code> for OIDC and
   *             SAML providers.</p>
   *          <ul>
   *             <li>
   *                <p>You must map the claim to a user pool attribute in your IdP configuration, and
   *                     set the user pool attribute name as the value of
   *                         <code>ProviderAttributeName</code> in your
   *                         <code>AdminLinkProviderForUser</code> request. For example,
   *                         <code>email</code>.</p>
   *             </li>
   *             <li>
   *                <p>When you set <code>ProviderAttributeName</code> to
   *                         <code>Cognito_Subject</code>, Amazon Cognito will automatically parse the default
   *                     unique identifier found in the subject from the IdP token.</p>
   *             </li>
   *          </ul>
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
   * <p>The ID of the user pool where the device owner is a user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The maximum number of devices that you want Amazon Cognito to return in the response.</p>
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
   * <p>An array of devices and their information. Each entry that's returned includes
   *             device information, last-accessed and created dates, and the device key.</p>
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
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The ID of the user pool where you want to view a user's groups.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of groups that you want Amazon Cognito to return in the response.</p>
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
  NextToken?: string | undefined;
}

/**
 * <p>A user pool group. Contains details about the group and the way that it contributes to
 *             IAM role decisions with identity pools. Identity pools can make decisions about the
 *             IAM role to assign based on groups: users get credentials for the role associated with
 *             their highest-priority group.</p>
 * @public
 */
export interface GroupType {
  /**
   * <p>The name of the group.</p>
   * @public
   */
  GroupName?: string | undefined;

  /**
   * <p>The ID of the user pool that contains the group.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>A friendly description of the group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the IAM role associated with the group. If a group has the highest
   *             priority of a user's groups, users who authenticate with an identity pool get
   *             credentials for the <code>RoleArn</code> that's associated with the group.</p>
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
   *          <p>The default <code>Precedence</code> value is <code>null</code>.</p>
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
   * <p>An array of groups and information about them.</p>
   * @public
   */
  Groups?: GroupType[] | undefined;

  /**
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface AdminListUserAuthEventsRequest {
  /**
   * <p>The Id of the user pool that contains the user profile with the logged events.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
   * <p>This API operation returns a limited number of results. The pagination token is
   * an identifier that you can present in an additional API request with the same parameters. When
   * you include the pagination token, Amazon Cognito returns the next set of items after the current list.
   * Subsequent requests return a new pagination token. By use of this token, you can paginate
   * through the full list of items.</p>
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
 * <p>The responses to the challenge that you received in the previous request. Each
 *     challenge has its own required response parameters. The following examples are partial
 *     JSON request bodies that highlight challenge-response parameters.</p>
 *          <important>
 *             <p>You must provide a SECRET_HASH parameter in all challenge responses to an app
 *         client that has a client secret. Include a <code>DEVICE_KEY</code> for device
 *         authentication.</p>
 *          </important>
 *          <dl>
 *             <dt>SELECT_CHALLENGE</dt>
 *             <dd>
 *                <p>
 *                   <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
 *             "USERNAME": "[username]",
 *             "ANSWER": "[Challenge name]"\}</code>
 *                </p>
 *                <p>Available challenges are <code>PASSWORD</code>, <code>PASSWORD_SRP</code>,
 *             <code>EMAIL_OTP</code>, <code>SMS_OTP</code>, and <code>WEB_AUTHN</code>.</p>
 *                <p>Complete authentication in the <code>SELECT_CHALLENGE</code> response for
 *             <code>PASSWORD</code>, <code>PASSWORD_SRP</code>, and <code>WEB_AUTHN</code>:</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
 *                   "ANSWER": "WEB_AUTHN",
 *                   "USERNAME": "[username]",
 *                   "CREDENTIAL": "[AuthenticationResponseJSON]"\}</code>
 *                      </p>
 *                      <p>See <a href="https://www.w3.org/TR/WebAuthn-3/#dictdef-authenticationresponsejson">
 *                   AuthenticationResponseJSON</a>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
 *                   "ANSWER": "PASSWORD",
 *                   "USERNAME": "[username]",
 *                   "PASSWORD": "[password]"\}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
 *                   "ANSWER": "PASSWORD_SRP",
 *                   "USERNAME": "[username]",
 *                   "SRP_A": "[SRP_A]"\}</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *                <p>For <code>SMS_OTP</code> and <code>EMAIL_OTP</code>, respond with the
 *             username and answer. Your user pool will send a code for the user to submit in
 *             the next challenge response.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
 *                   "ANSWER": "SMS_OTP",
 *                   "USERNAME": "[username]"\}</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
 *                   "ANSWER": "EMAIL_OTP",
 *                   "USERNAME": "[username]"\}</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </dd>
 *             <dt>WEB_AUTHN</dt>
 *             <dd>
 *                <p>
 *                   <code>"ChallengeName": "WEB_AUTHN", "ChallengeResponses": \{
 *                   "USERNAME": "[username]",
 *                   "CREDENTIAL": "[AuthenticationResponseJSON]"\}</code>
 *                </p>
 *                <p>See <a href="https://www.w3.org/TR/WebAuthn-3/#dictdef-authenticationresponsejson">
 *                   AuthenticationResponseJSON</a>.</p>
 *             </dd>
 *             <dt>PASSWORD</dt>
 *             <dd>
 *                <p>
 *                   <code>"ChallengeName": "PASSWORD", "ChallengeResponses": \{
 *                   "USERNAME": "[username]",
 *                   "PASSWORD": "[password]"\}</code>
 *                </p>
 *             </dd>
 *             <dt>PASSWORD_SRP</dt>
 *             <dd>
 *                <p>
 *                   <code>"ChallengeName": "PASSWORD_SRP", "ChallengeResponses": \{
 *                   "USERNAME": "[username]",
 *                   "SRP_A": "[SRP_A]"\}</code>
 *                </p>
 *             </dd>
 *             <dt>SMS_OTP</dt>
 *             <dd>
 *                <p>
 *                   <code>"ChallengeName": "SMS_OTP", "ChallengeResponses":
 *             \{"SMS_OTP_CODE": "[code]", "USERNAME": "[username]"\}</code>
 *                </p>
 *             </dd>
 *             <dt>EMAIL_OTP</dt>
 *             <dd>
 *                <p>
 *                   <code>"ChallengeName": "EMAIL_OTP", "ChallengeResponses": \{"EMAIL_OTP_CODE":
 *                     "[code]", "USERNAME": "[username]"\}</code>
 *                </p>
 *             </dd>
 *             <dt>SMS_MFA</dt>
 *             <dd>
 *                <p>
 *                   <code>"ChallengeName": "SMS_MFA", "ChallengeResponses": \{"SMS_MFA_CODE":
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
 *             </dd>
 *             <dt>CUSTOM_CHALLENGE</dt>
 *             <dd>
 *                <p>
 *                   <code>"ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses":
 *                     \{"USERNAME": "[username]", "ANSWER": "[challenge_answer]"\}</code>
 *                </p>
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
 * In <code>AdminRespondToAuthChallenge</code> or <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the
 * <code>requiredAttributes</code> parameter, then use the <code>AdminUpdateUserAttributes</code> or <code>UpdateUserAttributes</code> API
 * operation to modify the value of any additional attributes.</p>
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
 *                 "[username]", "ANSWER": "[SMS_MFA|EMAIL_MFA|SOFTWARE_TOKEN_MFA]"\}</code>
 *                </p>
 *             </dd>
 *          </dl>
 *          <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about
 *     <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>
 * @public
 */
export interface ChallengeResponseType {
  /**
   * <p>The type of challenge that your previous authentication request returned in the
   *             parameter <code>ChallengeName</code>, for example <code>SMS_MFA</code>.</p>
   * @public
   */
  ChallengeName?: ChallengeName | undefined;

  /**
   * <p>The set of key-value pairs that provides a response to the requested challenge.</p>
   * @public
   */
  ChallengeResponse?: ChallengeResponse | undefined;
}

/**
 * <p>The context data that your application submitted in an authentication request with
 *             threat protection, as displayed in an <code>AdminListUserAuthEvents</code>
 *             response.</p>
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
 * <p>The feedback that your application submitted to a threat protection event log, as
 *             displayed in an <code>AdminListUserAuthEvents</code> response.</p>
 * @public
 */
export interface EventFeedbackType {
  /**
   * <p>Your feedback to the authentication event. When you provide a <code>FeedbackValue</code>
   * value of <code>valid</code>, you tell Amazon Cognito that you trust a user session where Amazon Cognito
   * has evaluated some level of risk. When you provide a <code>FeedbackValue</code> value of
   * <code>invalid</code>, you tell Amazon Cognito that you don't trust a user session, or you
   * don't believe that Amazon Cognito evaluated a high-enough risk level.</p>
   * @public
   */
  FeedbackValue: FeedbackValueType | undefined;

  /**
   * <p>The submitter of the event feedback. For example, if you submit event feedback in the
   *             Amazon Cognito console, this value is <code>Admin</code>.</p>
   * @public
   */
  Provider: string | undefined;

  /**
   * <p>The date that you or your user submitted the feedback.</p>
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
 * <p>The risk evaluation by adaptive authentication, as displayed in an
 *                 <code>AdminListUserAuthEvents</code> response. Contains evaluations of
 *             compromised-credentials detection and assessed risk level and action taken by adaptive
 *             authentication.</p>
 * @public
 */
export interface EventRiskType {
  /**
   * <p>The action taken by adaptive authentication. If <code>NoRisk</code>, your user pool
   *             took no action. If <code>AccountTakeover</code>, your user pool applied the adaptive
   *             authentication automated response that you configured. If <code>Block</code>, your user
   *             pool prevented the attempt.</p>
   * @public
   */
  RiskDecision?: RiskDecisionType | undefined;

  /**
   * <p>The risk level that adaptive authentication assessed for the authentication
   *             event.</p>
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
 * <p>One authentication event that Amazon Cognito logged in a user pool with threat protection
 *             active. Contains user and device metadata and a risk assessment from your user
 *             pool.</p>
 * @public
 */
export interface AuthEventType {
  /**
   * <p>The event ID.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>The type of authentication event.</p>
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
   * <p>The threat evaluation from your user pool about an event. Contains information about
   *             whether your user pool detected compromised credentials, whether the event triggered an
   *             automated response, and the level of risk.</p>
   * @public
   */
  EventRisk?: EventRiskType | undefined;

  /**
   * <p>A list of the challenges that the user was requested to answer, for example
   *                 <code>Password</code>, and the result, for example <code>Success</code>.</p>
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
   * <p>The <code>UpdateAuthEventFeedback</code> or <code>AdminUpdateAuthEventFeedback</code>
   *             feedback that you or your user provided in response to the event. A value of
   *                 <code>Valid</code> indicates that you disagreed with the level of risk that your
   *             user pool assigned, and evaluated a session to be valid, or likely safe. A value of
   *                 <code>Invalid</code> indicates that you agreed with the user pool risk level and
   *             evaluated a session to be invalid, or likely malicious.</p>
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
   * <p>The identifier that Amazon Cognito returned with the previous request to this operation. When
   * you include a pagination token in your request, Amazon Cognito returns the next set of items in
   * the list. By use of this token, you can paginate through the full list of items.</p>
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
   * <p>The ID of the user pool that contains the group and the user that you want to
   *             remove.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The name of the group that you want to remove the user from, for example
   *                 <code>MyTestGroup</code>.</p>
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
   * <p>The ID of the user pool where you want to reset the user's password.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
   *             triggers. The <code>AdminResetUserPassword</code> API operation invokes the function
   *             that is assigned to the <i>custom message</i> trigger. When Amazon Cognito invokes
   *             this function, it passes a JSON payload, which the function receives as input. This
   *             payload contains a <code>clientMetadata</code> attribute, which provides the data that
   *             you assigned to the ClientMetadata parameter in your AdminResetUserPassword request. In
   *             your function code in Lambda, you can process the
   *                 <code>clientMetadata</code> value to enhance your workflow for your specific needs. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
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
   * <p>The ID of the user pool where you want to respond to an authentication
   *             challenge.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the app client where you initiated sign-in.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The name of the challenge that you are responding to.</p>
   *          <p>Possible challenges include the following:</p>
   *          <note>
   *             <p>All of the following challenges require <code>USERNAME</code> and, when the app
   *                 client has a client secret, <code>SECRET_HASH</code> in the parameters. Include a
   *                 <code>DEVICE_KEY</code> for device authentication.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WEB_AUTHN</code>: Respond to the challenge with the results of a
   *                     successful authentication with a WebAuthn authenticator, or passkey, as
   *                     <code>CREDENTIAL</code>. Examples of WebAuthn authenticators include
   *                     biometric devices and security keys.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD</code>: Respond with the user's password as <code>PASSWORD</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_SRP</code>: Respond with the initial SRP secret as <code>SRP_A</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SELECT_CHALLENGE</code>: Respond with a challenge selection as <code>ANSWER</code>.
   *                 It must be one of the challenge types in the <code>AvailableChallenges</code> response
   *                 parameter. Add the parameters of the selected challenge, for example <code>USERNAME</code>
   *                 and <code>SMS_OTP</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMS_MFA</code>: Respond with the code that your user pool delivered in an SMS
   *                     message, as <code>SMS_MFA_CODE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_MFA</code>: Respond with the code that your user pool delivered in an email
   *                     message, as <code>EMAIL_MFA_CODE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_OTP</code>: Respond with the code that your user pool delivered in an email
   *                     message, as <code>EMAIL_OTP_CODE</code> .</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMS_OTP</code>: Respond with the code that your user pool delivered in an SMS
   *                     message, as <code>SMS_OTP_CODE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_VERIFIER</code>: Respond with the second stage of SRP secrets as
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>, <code>PASSWORD_CLAIM_SECRET_BLOCK</code>,
   *                         and <code>TIMESTAMP</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication
   *                     flow determines that the user should pass another challenge before tokens are
   *                     issued. The parameters of the challenge are determined by your Lambda function
   *                     and issued in the <code>ChallengeParameters</code> of a challenge response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_SRP_AUTH</code>: Respond with the initial parameters of device SRP
   *                 authentication. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Respond with
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     client-side SRP calculations. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their
   *                     passwords after successful first login. Respond to this challenge with
   *                     <code>NEW_PASSWORD</code> and any required attributes that Amazon Cognito returned in
   *                     the <code>requiredAttributes</code> parameter. You can also set values for
   *                     attributes that aren't required by your user pool and that your app client
   *                     can write.</p>
   *                <p>Amazon Cognito only returns this challenge for users who have temporary passwords.
   *                     When you create passwordless users, you must provide values for all required
   *                     attributes.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>AdminRespondToAuthChallenge</code> or <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the
   * <code>requiredAttributes</code> parameter, then use the <code>AdminUpdateUserAttributes</code> or <code>UpdateUserAttributes</code> API
   * operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_SETUP</code>: For users who are required to setup an MFA factor
   *                     before they can sign in. The MFA types activated for the user pool will be
   *                     listed in the challenge parameters <code>MFAS_CAN_SETUP</code> value. </p>
   *                <p>To set up time-based one-time password (TOTP) MFA, use the session returned
   *                     in this challenge from <code>InitiateAuth</code> or <code>AdminInitiateAuth</code>
   *                     as an input to <code>AssociateSoftwareToken</code>. Then, use the session returned
   *                     by <code>VerifySoftwareToken</code> as an input to
   *                     <code>RespondToAuthChallenge</code> or <code>AdminRespondToAuthChallenge</code>
   *                 with challenge name <code>MFA_SETUP</code> to complete sign-in.
   *                 </p>
   *                <p>To set up SMS or email MFA, collect a <code>phone_number</code> or
   *                     <code>email</code> attribute for the user. Then restart the authentication
   *                     flow with an <code>InitiateAuth</code> or <code>AdminInitiateAuth</code> request.
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  ChallengeName: ChallengeNameType | undefined;

  /**
   * <p>The responses to the challenge that you received in the previous request. Each
   *     challenge has its own required response parameters. The following examples are partial
   *     JSON request bodies that highlight challenge-response parameters.</p>
   *          <important>
   *             <p>You must provide a SECRET_HASH parameter in all challenge responses to an app
   *         client that has a client secret. Include a <code>DEVICE_KEY</code> for device
   *         authentication.</p>
   *          </important>
   *          <dl>
   *             <dt>SELECT_CHALLENGE</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *             "USERNAME": "[username]",
   *             "ANSWER": "[Challenge name]"\}</code>
   *                </p>
   *                <p>Available challenges are <code>PASSWORD</code>, <code>PASSWORD_SRP</code>,
   *             <code>EMAIL_OTP</code>, <code>SMS_OTP</code>, and <code>WEB_AUTHN</code>.</p>
   *                <p>Complete authentication in the <code>SELECT_CHALLENGE</code> response for
   *             <code>PASSWORD</code>, <code>PASSWORD_SRP</code>, and <code>WEB_AUTHN</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *                   "ANSWER": "WEB_AUTHN",
   *                   "USERNAME": "[username]",
   *                   "CREDENTIAL": "[AuthenticationResponseJSON]"\}</code>
   *                      </p>
   *                      <p>See <a href="https://www.w3.org/TR/WebAuthn-3/#dictdef-authenticationresponsejson">
   *                   AuthenticationResponseJSON</a>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *                   "ANSWER": "PASSWORD",
   *                   "USERNAME": "[username]",
   *                   "PASSWORD": "[password]"\}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *                   "ANSWER": "PASSWORD_SRP",
   *                   "USERNAME": "[username]",
   *                   "SRP_A": "[SRP_A]"\}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>For <code>SMS_OTP</code> and <code>EMAIL_OTP</code>, respond with the
   *             username and answer. Your user pool will send a code for the user to submit in
   *             the next challenge response.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *                   "ANSWER": "SMS_OTP",
   *                   "USERNAME": "[username]"\}</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{
   *                   "ANSWER": "EMAIL_OTP",
   *                   "USERNAME": "[username]"\}</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </dd>
   *             <dt>WEB_AUTHN</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "WEB_AUTHN", "ChallengeResponses": \{
   *                   "USERNAME": "[username]",
   *                   "CREDENTIAL": "[AuthenticationResponseJSON]"\}</code>
   *                </p>
   *                <p>See <a href="https://www.w3.org/TR/WebAuthn-3/#dictdef-authenticationresponsejson">
   *                   AuthenticationResponseJSON</a>.</p>
   *             </dd>
   *             <dt>PASSWORD</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "PASSWORD", "ChallengeResponses": \{
   *                   "USERNAME": "[username]",
   *                   "PASSWORD": "[password]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>PASSWORD_SRP</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "PASSWORD_SRP", "ChallengeResponses": \{
   *                   "USERNAME": "[username]",
   *                   "SRP_A": "[SRP_A]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>SMS_OTP</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SMS_OTP", "ChallengeResponses":
   *             \{"SMS_OTP_CODE": "[code]", "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>EMAIL_OTP</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "EMAIL_OTP", "ChallengeResponses": \{"EMAIL_OTP_CODE":
   *                     "[code]", "USERNAME": "[username]"\}</code>
   *                </p>
   *             </dd>
   *             <dt>SMS_MFA</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "SMS_MFA", "ChallengeResponses": \{"SMS_MFA_CODE":
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
   *             </dd>
   *             <dt>CUSTOM_CHALLENGE</dt>
   *             <dd>
   *                <p>
   *                   <code>"ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses":
   *                     \{"USERNAME": "[username]", "ANSWER": "[challenge_answer]"\}</code>
   *                </p>
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
   * In <code>AdminRespondToAuthChallenge</code> or <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the
   * <code>requiredAttributes</code> parameter, then use the <code>AdminUpdateUserAttributes</code> or <code>UpdateUserAttributes</code> API
   * operation to modify the value of any additional attributes.</p>
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
   *                 "[username]", "ANSWER": "[SMS_MFA|EMAIL_MFA|SOFTWARE_TOKEN_MFA]"\}</code>
   *                </p>
   *             </dd>
   *          </dl>
   *          <p>For more information about <code>SECRET_HASH</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>. For information about
   *     <code>DEVICE_KEY</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>
   * @public
   */
  ChallengeResponses?: Record<string, string> | undefined;

  /**
   * <p>The session identifier that maintains the state of authentication requests and
   *             challenge responses. If an <code>AdminInitiateAuth</code> or
   *                 <code>AdminRespondToAuthChallenge</code> API request results in a determination that
   *             your application must pass another challenge, Amazon Cognito returns a session with other
   *             challenge parameters. Send this session identifier, unmodified, to the next
   *                 <code>AdminRespondToAuthChallenge</code> request.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>Information that supports analytics outcomes with Amazon Pinpoint, including the
   * user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier,
   * email address, or phone number.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat
   * protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html">Collecting data for threat protection in
   * applications</a>.</p>
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
   *                <p>Pre sign-up</p>
   *             </li>
   *             <li>
   *                <p>custom message</p>
   *             </li>
   *             <li>
   *                <p>Post authentication</p>
   *             </li>
   *             <li>
   *                <p>User migration</p>
   *             </li>
   *             <li>
   *                <p>Pre token generation</p>
   *             </li>
   *             <li>
   *                <p>Define auth challenge</p>
   *             </li>
   *             <li>
   *                <p>Create auth challenge</p>
   *             </li>
   *             <li>
   *                <p>Verify auth challenge response</p>
   *             </li>
   *          </ul>
   *          <p>When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the
   *             function receives as input. This payload contains a <code>clientMetadata</code>
   *             attribute that provides the data that you assigned to the ClientMetadata parameter in
   *             your AdminRespondToAuthChallenge request. In your function code in Lambda, you can
   *             process the <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
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
   * <p>The name of the next challenge that you must respond to.</p>
   *          <p>Possible challenges include the following:</p>
   *          <note>
   *             <p>All of the following challenges require <code>USERNAME</code> and, when the app
   *                 client has a client secret, <code>SECRET_HASH</code> in the parameters. Include a
   *                 <code>DEVICE_KEY</code> for device authentication.</p>
   *          </note>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>WEB_AUTHN</code>: Respond to the challenge with the results of a
   *                     successful authentication with a WebAuthn authenticator, or passkey, as
   *                     <code>CREDENTIAL</code>. Examples of WebAuthn authenticators include
   *                     biometric devices and security keys.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD</code>: Respond with the user's password as <code>PASSWORD</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_SRP</code>: Respond with the initial SRP secret as <code>SRP_A</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SELECT_CHALLENGE</code>: Respond with a challenge selection as <code>ANSWER</code>.
   *                 It must be one of the challenge types in the <code>AvailableChallenges</code> response
   *                 parameter. Add the parameters of the selected challenge, for example <code>USERNAME</code>
   *                 and <code>SMS_OTP</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMS_MFA</code>: Respond with the code that your user pool delivered in an SMS
   *                     message, as <code>SMS_MFA_CODE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_MFA</code>: Respond with the code that your user pool delivered in an email
   *                     message, as <code>EMAIL_MFA_CODE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EMAIL_OTP</code>: Respond with the code that your user pool delivered in an email
   *                     message, as <code>EMAIL_OTP_CODE</code> .</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SMS_OTP</code>: Respond with the code that your user pool delivered in an SMS
   *                     message, as <code>SMS_OTP_CODE</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD_VERIFIER</code>: Respond with the second stage of SRP secrets as
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>, <code>PASSWORD_CLAIM_SECRET_BLOCK</code>,
   *                         and <code>TIMESTAMP</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_CHALLENGE</code>: This is returned if your custom authentication
   *                     flow determines that the user should pass another challenge before tokens are
   *                     issued. The parameters of the challenge are determined by your Lambda function
   *                     and issued in the <code>ChallengeParameters</code> of a challenge response.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_SRP_AUTH</code>: Respond with the initial parameters of device SRP
   *                 authentication. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Respond with
   *                         <code>PASSWORD_CLAIM_SIGNATURE</code>,
   *                         <code>PASSWORD_CLAIM_SECRET_BLOCK</code>, and <code>TIMESTAMP</code> after
   *                     client-side SRP calculations. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device">Signing in with a device</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users who are required to change their
   *                     passwords after successful first login. Respond to this challenge with
   *                     <code>NEW_PASSWORD</code> and any required attributes that Amazon Cognito returned in
   *                     the <code>requiredAttributes</code> parameter. You can also set values for
   *                     attributes that aren't required by your user pool and that your app client
   *                     can write.</p>
   *                <p>Amazon Cognito only returns this challenge for users who have temporary passwords.
   *                     When you create passwordless users, you must provide values for all required
   *                     attributes.</p>
   *                <note>
   *                   <p>In a <code>NEW_PASSWORD_REQUIRED</code> challenge response, you can't modify a required attribute that already has a value.
   * In <code>AdminRespondToAuthChallenge</code> or <code>RespondToAuthChallenge</code>, set a value for any keys that Amazon Cognito returned in the
   * <code>requiredAttributes</code> parameter, then use the <code>AdminUpdateUserAttributes</code> or <code>UpdateUserAttributes</code> API
   * operation to modify the value of any additional attributes.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MFA_SETUP</code>: For users who are required to setup an MFA factor
   *                     before they can sign in. The MFA types activated for the user pool will be
   *                     listed in the challenge parameters <code>MFAS_CAN_SETUP</code> value. </p>
   *                <p>To set up time-based one-time password (TOTP) MFA, use the session returned
   *                     in this challenge from <code>InitiateAuth</code> or <code>AdminInitiateAuth</code>
   *                     as an input to <code>AssociateSoftwareToken</code>. Then, use the session returned
   *                     by <code>VerifySoftwareToken</code> as an input to
   *                     <code>RespondToAuthChallenge</code> or <code>AdminRespondToAuthChallenge</code>
   *                 with challenge name <code>MFA_SETUP</code> to complete sign-in.
   *                 </p>
   *                <p>To set up SMS or email MFA, collect a <code>phone_number</code> or
   *                     <code>email</code> attribute for the user. Then restart the authentication
   *                     flow with an <code>InitiateAuth</code> or <code>AdminInitiateAuth</code> request.
   *                 </p>
   *             </li>
   *          </ul>
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * <p>The session identifier that maintains the state of authentication requests and
   *             challenge responses. If an <code>AdminInitiateAuth</code> or
   *                 <code>AdminRespondToAuthChallenge</code> API request results in a determination that
   *             your application must pass another challenge, Amazon Cognito returns a session with other
   *             challenge parameters. Send this session identifier, unmodified, to the next
   *                 <code>AdminRespondToAuthChallenge</code> request.</p>
   * @public
   */
  Session?: string | undefined;

  /**
   * <p>The parameters that define your response to the next challenge.</p>
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * <p>The outcome of a successful authentication process. After your application has passed
   *             all challenges, Amazon Cognito returns an <code>AuthenticationResult</code> with the JSON web
   *             tokens (JWTs) that indicate successful sign-in.</p>
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
 *             available. To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
 *                      Essentials tier</a> or higher.</p>
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
 * <p>A user's preference for using SMS message multi-factor authentication (MFA). Turns SMS
 *             MFA on and off, and can set SMS as preferred when other MFA options are available. You
 *             can't turn off SMS MFA for any of your users when MFA is required in your user pool; you
 *             can only set the type that your user prefers. </p>
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
   * <p>Specifies whether SMS is the preferred MFA method. If true, your user pool prompts the
   *             specified user for a code delivered by SMS message after username-password sign-in
   *             succeeds. </p>
   * @public
   */
  PreferredMfa?: boolean | undefined;
}

/**
 * <p>A user's preference for using time-based one-time password (TOTP) multi-factor
 *             authentication (MFA). Turns TOTP MFA on and off, and can set TOTP as preferred when
 *             other MFA options are available. You can't turn off TOTP MFA for any of your users when
 *             MFA is required in your user pool; you can only set the type that your user prefers. </p>
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
   *             TOTP MFA and sets it as the preferred MFA method when multiple methods are available.
   *             This operation can set TOTP as a user's preferred MFA method before they register a
   *             TOTP authenticator.</p>
   * @public
   */
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType | undefined;

  /**
   * <p>User preferences for email message MFA. Activates or deactivates email MFA and sets it
   *             as the preferred MFA method when multiple methods are available.
   *             To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
   *                      Essentials tier</a> or higher.</p>
   * @public
   */
  EmailMfaSettings?: EmailMfaSettingsType | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
   * <p>The ID of the user pool where you want to set the user's password.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The new temporary or permanent password that you want to set for the user. You
   *             can't remove the password for a user who already has a password so that they can
   *             only sign in with passwordless methods. In this scenario, you must create a new user
   *             without a password.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>Set to <code>true</code> to set a password that the user can immediately sign in with.
   *             Set to <code>false</code> to set a temporary password that the user must change on their
   *             next sign-in.</p>
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
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
   * <p>The ID of the user pool where you want to submit authentication-event feedback.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The ID of the threat protection authentication event that you want to update.</p>
   * @public
   */
  EventId: string | undefined;

  /**
   * <p>Your feedback to the authentication event. When you provide a <code>FeedbackValue</code>
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
   * <p>The ID of the user pool where you want to change a user's device status.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The unique identifier, or device key, of the device that you want to update the status
   *             for.</p>
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * <p>To enable device authentication with the specified device, set to
   *                 <code>remembered</code>.To disable, set to <code>not_remembered</code>.</p>
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
   * <p>The ID of the user pool where you want to update user attributes.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
   *          <p>To skip the verification message and update the value of an attribute that requires
   *             verification in the same API request, include the <code>email_verified</code> or
   *                 <code>phone_number_verified</code> attribute, with a value of <code>true</code>. If
   *             you set the <code>email_verified</code> or <code>phone_number_verified</code> value for
   *             an <code>email</code> or <code>phone_number</code> attribute that requires verification
   *             to <code>true</code>, Amazon Cognito doesn’t send a verification message to your user.</p>
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
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
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
   * <p>The ID of the user pool where you want to sign out a user.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
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
 * <p>Threat protection configuration options for additional authentication types in your
 *             user pool, including custom
 *             authentication. </p>
 * @public
 */
export interface AdvancedSecurityAdditionalFlowsType {
  /**
   * <p>The operating mode of threat protection in custom authentication with <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html"> Custom
   *                 authentication challenge Lambda triggers</a>. </p>
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
 * @public
 * @enum
 */
export const AuthFactorType = {
  EMAIL_OTP: "EMAIL_OTP",
  PASSWORD: "PASSWORD",
  SMS_OTP: "SMS_OTP",
  WEB_AUTHN: "WEB_AUTHN",
} as const;

/**
 * @public
 */
export type AuthFactorType = (typeof AuthFactorType)[keyof typeof AuthFactorType];

/**
 * <p>The settings for Amazon Pinpoint analytics configuration. With an analytics configuration,
 *             your application can collect user-activity metrics for user notifications with a Amazon Pinpoint
 *             campaign.</p>
 *          <p>Amazon Pinpoint isn't available in all Amazon Web Services Regions. For a list of available Regions, see
 *                 <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html#cognito-user-pools-find-region-mappings">Amazon Cognito and Amazon Pinpoint Region availability</a>.</p>
 * @public
 */
export interface AnalyticsConfigurationType {
  /**
   * <p>Your Amazon Pinpoint project ID.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Pinpoint project that you want to connect to
   *             your user pool app client. Amazon Cognito publishes events to the Amazon Pinpoint project that
   *                 <code>ApplicationArn</code> declares. You can also configure your application to
   *             pass an endpoint ID in the <code>AnalyticsMetadata</code> parameter of sign-in
   *             operations. The endpoint ID is information about the destination for push
   *             notifications</p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The ARN of an Identity and Access Management role that has the permissions required for Amazon Cognito to publish
   *             events to Amazon Pinpoint analytics.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html">external ID</a> of the role that Amazon Cognito assumes to send
   *             analytics data to Amazon Pinpoint.</p>
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
 * @enum
 */
export const AssetCategoryType = {
  AUTH_APP_GRAPHIC: "AUTH_APP_GRAPHIC",
  EMAIL_GRAPHIC: "EMAIL_GRAPHIC",
  FAVICON_ICO: "FAVICON_ICO",
  FAVICON_SVG: "FAVICON_SVG",
  FORM_BACKGROUND: "FORM_BACKGROUND",
  FORM_LOGO: "FORM_LOGO",
  IDP_BUTTON_ICON: "IDP_BUTTON_ICON",
  PAGE_BACKGROUND: "PAGE_BACKGROUND",
  PAGE_FOOTER_BACKGROUND: "PAGE_FOOTER_BACKGROUND",
  PAGE_FOOTER_LOGO: "PAGE_FOOTER_LOGO",
  PAGE_HEADER_BACKGROUND: "PAGE_HEADER_BACKGROUND",
  PAGE_HEADER_LOGO: "PAGE_HEADER_LOGO",
  PASSKEY_GRAPHIC: "PASSKEY_GRAPHIC",
  PASSWORD_GRAPHIC: "PASSWORD_GRAPHIC",
  SMS_GRAPHIC: "SMS_GRAPHIC",
} as const;

/**
 * @public
 */
export type AssetCategoryType = (typeof AssetCategoryType)[keyof typeof AssetCategoryType];

/**
 * @public
 * @enum
 */
export const AssetExtensionType = {
  ICO: "ICO",
  JPEG: "JPEG",
  PNG: "PNG",
  SVG: "SVG",
  WEBP: "WEBP",
} as const;

/**
 * @public
 */
export type AssetExtensionType = (typeof AssetExtensionType)[keyof typeof AssetExtensionType];

/**
 * @public
 * @enum
 */
export const ColorSchemeModeType = {
  DARK: "DARK",
  DYNAMIC: "DYNAMIC",
  LIGHT: "LIGHT",
} as const;

/**
 * @public
 */
export type ColorSchemeModeType = (typeof ColorSchemeModeType)[keyof typeof ColorSchemeModeType];

/**
 * <p>An image file from a managed login branding style in a user pool.</p>
 * @public
 */
export interface AssetType {
  /**
   * <p>The category that the image corresponds to in your managed login configuration.
   *             Managed login has asset categories for different types of logos, backgrounds, and
   *             icons.</p>
   * @public
   */
  Category: AssetCategoryType | undefined;

  /**
   * <p>The display-mode target of the asset: light, dark, or browser-adaptive. For example,
   *             Amazon Cognito displays a dark-mode image only when the browser or application is in dark mode,
   *             but displays a browser-adaptive file in all contexts.</p>
   * @public
   */
  ColorMode: ColorSchemeModeType | undefined;

  /**
   * <p>The file type of the image file.</p>
   * @public
   */
  Extension: AssetExtensionType | undefined;

  /**
   * <p>The image file, in Base64-encoded binary.</p>
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSoftwareTokenRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   *          <p>You can provide either an access token or a session ID in the request.</p>
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * <p>The session identifier that maintains the state of authentication requests and
   *             challenge responses. In <code>AssociateSoftwareToken</code>, this is the session ID from
   *             a successful sign-in. You can provide either an access token or a session ID in the
   *             request.</p>
   * @public
   */
  Session?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSoftwareTokenResponse {
  /**
   * <p>A unique generated shared secret code that is used by the TOTP algorithm to generate a
   *             one-time code.</p>
   * @public
   */
  SecretCode?: string | undefined;

  /**
   * <p>The session identifier that maintains the state of authentication requests and
   *             challenge responses.</p>
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
   * <p>The user's previous password. Required if the user has a password. If the user
   *             has no password and only signs in with passwordless authentication options, you can omit
   *             this parameter.</p>
   * @public
   */
  PreviousPassword?: string | undefined;

  /**
   * <p>A new password that you prompted the user to enter in your application.</p>
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
 * @public
 */
export interface CompleteWebAuthnRegistrationRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>A <a href="https://www.w3.org/TR/WebAuthn-3/#dictdef-registrationresponsejson">RegistrationResponseJSON</a> public-key credential response from the
   *             user's passkey provider.</p>
   * @public
   */
  Credential: __DocumentType | undefined;
}

/**
 * @public
 */
export interface CompleteWebAuthnRegistrationResponse {}

/**
 * <p>This exception is thrown when the challenge from <code>StartWebAuthn</code>
 *             registration has expired.</p>
 * @public
 */
export class WebAuthnChallengeNotFoundException extends __BaseException {
  readonly name: "WebAuthnChallengeNotFoundException" = "WebAuthnChallengeNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnChallengeNotFoundException, __BaseException>) {
    super({
      name: "WebAuthnChallengeNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnChallengeNotFoundException.prototype);
  }
}

/**
 * <p>This exception is thrown when the access token is for a different client than the one
 *             in the original <code>StartWebAuthnRegistration</code> request.</p>
 * @public
 */
export class WebAuthnClientMismatchException extends __BaseException {
  readonly name: "WebAuthnClientMismatchException" = "WebAuthnClientMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnClientMismatchException, __BaseException>) {
    super({
      name: "WebAuthnClientMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnClientMismatchException.prototype);
  }
}

/**
 * <p>This exception is thrown when a user presents passkey credentials from an unsupported
 *             device or provider.</p>
 * @public
 */
export class WebAuthnCredentialNotSupportedException extends __BaseException {
  readonly name: "WebAuthnCredentialNotSupportedException" = "WebAuthnCredentialNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnCredentialNotSupportedException, __BaseException>) {
    super({
      name: "WebAuthnCredentialNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnCredentialNotSupportedException.prototype);
  }
}

/**
 * <p>This exception is thrown when the passkey feature isn't enabled for the user
 *             pool.</p>
 * @public
 */
export class WebAuthnNotEnabledException extends __BaseException {
  readonly name: "WebAuthnNotEnabledException" = "WebAuthnNotEnabledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnNotEnabledException, __BaseException>) {
    super({
      name: "WebAuthnNotEnabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnNotEnabledException.prototype);
  }
}

/**
 * <p>This exception is thrown when the passkey credential's registration origin does not
 *             align with the user pool relying party id.</p>
 * @public
 */
export class WebAuthnOriginNotAllowedException extends __BaseException {
  readonly name: "WebAuthnOriginNotAllowedException" = "WebAuthnOriginNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnOriginNotAllowedException, __BaseException>) {
    super({
      name: "WebAuthnOriginNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnOriginNotAllowedException.prototype);
  }
}

/**
 * <p>This exception is thrown when the given passkey credential is associated with a
 *             different relying party ID than the user pool relying party ID.</p>
 * @public
 */
export class WebAuthnRelyingPartyMismatchException extends __BaseException {
  readonly name: "WebAuthnRelyingPartyMismatchException" = "WebAuthnRelyingPartyMismatchException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<WebAuthnRelyingPartyMismatchException, __BaseException>) {
    super({
      name: "WebAuthnRelyingPartyMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, WebAuthnRelyingPartyMismatchException.prototype);
  }
}

/**
 * <p>A Secure Remote Password (SRP) value that your application generates when you register
 *             a user's device. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-getting-a-device-key">Getting a device key</a>.</p>
 * @public
 */
export interface DeviceSecretVerifierConfigType {
  /**
   * <p>A password verifier for a user's device. Used in SRP authentication.</p>
   * @public
   */
  PasswordVerifier?: string | undefined;

  /**
   * <p>The salt that you want to use in SRP authentication with the user's device.</p>
   * @public
   */
  Salt?: string | undefined;
}

/**
 * <p>The confirm-device request.</p>
 * @public
 */
export interface ConfirmDeviceRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The unique identifier, or device key, of the device that you want to update the status
   *             for.</p>
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * <p>The configuration of the device secret verifier.</p>
   * @public
   */
  DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType | undefined;

  /**
   * <p>A friendly name for the device, for example <code>MyMobilePhone</code>.</p>
   * @public
   */
  DeviceName?: string | undefined;
}

/**
 * <p>The confirm-device response.</p>
 * @public
 */
export interface ConfirmDeviceResponse {
  /**
   * <p>When <code>true</code>, your user must confirm that they want to remember the device.
   *             Prompt the user for an answer.</p>
   *          <p>When <code>false</code>, immediately sets the device as remembered and eligible for
   *             device authentication.</p>
   *          <p>You can configure your user pool to always remember devices, in which case this
   *             response is <code>false</code>, or to allow users to opt in, in which case this response
   *             is <code>true</code>. Configure this option under <i>Device tracking</i>
   *             in the <i>Sign-in</i> menu of your user pool.</p>
   * @public
   */
  UserConfirmationNecessary?: boolean | undefined;
}

/**
 * <p>This exception is thrown when a user attempts to confirm a device with a device key
 *             that already exists.</p>
 * @public
 */
export class DeviceKeyExistsException extends __BaseException {
  readonly name: "DeviceKeyExistsException" = "DeviceKeyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeviceKeyExistsException, __BaseException>) {
    super({
      name: "DeviceKeyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DeviceKeyExistsException.prototype);
  }
}

/**
 * <p>Contextual data, such as the user's device fingerprint, IP address, or location, used
 *             for evaluating the risk of an unexpected event by Amazon Cognito threat protection.</p>
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
   * <p>The ID of the app client where the user wants to reset their password. This parameter
   *             is an identifier of the client application that users are resetting their password from,
   *             but this operation resets users' irrespective of the app clients they sign in
   *             to.</p>
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
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The confirmation code that your user pool delivered when your user requested to reset
   *             their password.</p>
   * @public
   */
  ConfirmationCode: string | undefined;

  /**
   * <p>The new password that your user wants to set.</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>Information that supports analytics outcomes with Amazon Pinpoint, including the
   * user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier,
   * email address, or phone number.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat
   * protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html">Collecting data for threat protection in
   * applications</a>.</p>
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
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
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
   *             user pool client and username plus the client ID in the message. For more information
   *             about <code>SecretHash</code>, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash">Computing secret hash values</a>.</p>
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The confirmation code that your user pool sent in response to the <code>SignUp</code>
   *             request.</p>
   * @public
   */
  ConfirmationCode: string | undefined;

  /**
   * <p>When <code>true</code>, forces user confirmation despite any existing aliases.
   *             Defaults to <code>false</code>. A value of <code>true</code> migrates the alias from an
   *             existing user to the new user if an existing user already has the phone number or email
   *             address as an alias.</p>
   *          <p>Say, for example, that an existing user has an <code>email</code> attribute of
   *                 <code>bob@example.com</code> and email is an alias in your user pool. If the new
   *             user also has an email of <code>bob@example.com</code> and your
   *                 <code>ConfirmSignUp</code> response sets <code>ForceAliasCreation</code> to
   *                 <code>true</code>, the new user can sign in with a username of
   *                 <code>bob@example.com</code> and the existing user can no longer do so.</p>
   *          <p>If <code>false</code> and an attribute belongs to an existing alias, this request
   *             returns an <b>AliasExistsException</b> error.</p>
   *          <p>For more information about sign-in aliases, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-aliases">Customizing sign-in attributes</a>.</p>
   * @public
   */
  ForceAliasCreation?: boolean | undefined;

  /**
   * <p>Information that supports analytics outcomes with Amazon Pinpoint, including the
   * user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier,
   * email address, or phone number.</p>
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * <p>Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat
   * protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html">Collecting data for threat protection in
   * applications</a>.</p>
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
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
   *                </li>
   *             </ul>
   *          </note>
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;

  /**
   * <p>The optional session ID from a <code>SignUp</code> API request. You can sign in a user
   *             directly from the sign-up process with the <code>USER_AUTH</code> authentication
   *             flow.</p>
   * @public
   */
  Session?: string | undefined;
}

/**
 * <p>Represents the response from the server for the registration confirmation.</p>
 * @public
 */
export interface ConfirmSignUpResponse {
  /**
   * <p>A session identifier that you can use to immediately sign in the confirmed user. You
   *             can automatically sign users in with the one-time password that they provided in a
   *             successful <code>ConfirmSignUp</code> request.</p>
   * @public
   */
  Session?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * <p>A name for the group. This name must be unique in your user pool.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID of the user pool where you want to create a user group.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A description of the group that you're creating.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that you want to associate with the
   *             group. A group role primarily declares a preferred role for the credentials that you get
   *             from an identity pool. Amazon Cognito ID tokens have a <code>cognito:preferred_role</code> claim
   *             that presents the highest-precedence group that a user belongs to. Both ID and access
   *             tokens also contain a <code>cognito:groups</code> claim that list all the groups that a
   *             user is a member of.</p>
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
   * <p>The response object for a created group.</p>
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
   * <p>The Id of the user pool where you want to create an IdP.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name that you want to assign to the IdP. You can pass the identity provider name
   *             in the <code>identity_provider</code> query parameter of requests to the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html">Authorize endpoint</a> to silently redirect to sign-in with the associated
   *             IdP.</p>
   * @public
   */
  ProviderName: string | undefined;

  /**
   * <p>The type of IdP that you want to add. Amazon Cognito supports OIDC, SAML 2.0, Login With
   *             Amazon, Sign In With Apple, Google, and Facebook IdPs.</p>
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
   * <p>A mapping of IdP attributes to standard and custom user pool attributes. Specify a
   *             user pool attribute as the key of the key-value pair, and the IdP attribute claim name
   *             as the value.</p>
   * @public
   */
  AttributeMapping?: Record<string, string> | undefined;

  /**
   * <p>An array of IdP identifiers, for example <code>"IdPIdentifiers": [ "MyIdP", "MyIdP2"
   *                 ]</code>. Identifiers are friendly names that you can pass in the
   *                 <code>idp_identifier</code> query parameter of requests to the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html">Authorize endpoint</a> to silently redirect to sign-in with the associated IdP.
   *             Identifiers in a domain format also enable the use of <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managing-saml-idp-naming.html">email-address matching with SAML providers</a>. </p>
   * @public
   */
  IdpIdentifiers?: string[] | undefined;
}

/**
 * <p>A user pool identity provider (IdP). Contains information about a third-party IdP to a
 *             user pool, the attributes that it populates to user profiles, and the trust relationship
 *             between the IdP and your user pool.</p>
 * @public
 */
export interface IdentityProviderType {
  /**
   * <p>The ID of the user pool associated with the IdP.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>A friendly name for the IdP.</p>
   * @public
   */
  ProviderName?: string | undefined;

  /**
   * <p>The type of IdP. Either SAML, OIDC, or a named social identity provider.</p>
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
   * <p>A list of IdP identifiers. IdP identifiers are strings that represent friendly names
   *             or domain names of IdPs, for example <code>MyIdP</code> or
   *             <code>auth.example.com</code>. You can choose to route user authorization requests to
   *             the right IdP with either IdP identifiers or IdP names. For more information, see
   *                 <code>identity_provider</code> and <code>idp_identifier</code> at <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html#get-authorize-request-parameters">Authorize endpoint</a>.</p>
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
   * <p>The details of the new user pool IdP.</p>
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
 * @public
 */
export interface CreateManagedLoginBrandingRequest {
  /**
   * <p>The ID of the user pool where you want to create a new branding style.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client that you want to create the branding style for. Each style is linked to
   *             an app client until you delete it.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>When true, applies the default branding style options. These default options are
   *             managed by Amazon Cognito. You can modify them later in the branding editor.</p>
   *          <p>When you specify <code>true</code> for this option, you must also omit values for
   *                 <code>Settings</code> and <code>Assets</code> in the request.</p>
   * @public
   */
  UseCognitoProvidedValues?: boolean | undefined;

  /**
   * <p>A JSON file, encoded as a <code>Document</code> type, with the the settings that you
   *             want to apply to your style.</p>
   *          <p>The following components are not currently implemented and reserved for future
   *             use:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>signUp</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instructions</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sessionTimerDisplay</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>languageSelector</code> (for localization, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-localization">Managed login localization)</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Settings?: __DocumentType | undefined;

  /**
   * <p>An array of image files that you want to apply to functions like backgrounds, logos,
   *             and icons. Each object must also indicate whether it is for dark mode, light mode, or
   *             browser-adaptive mode.</p>
   * @public
   */
  Assets?: AssetType[] | undefined;
}

/**
 * <p>A managed login branding style that's assigned to a user pool app client.</p>
 * @public
 */
export interface ManagedLoginBrandingType {
  /**
   * <p>The ID of the managed login branding style.</p>
   * @public
   */
  ManagedLoginBrandingId?: string | undefined;

  /**
   * <p>The user pool where the branding style is assigned.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>When true, applies the default branding style options. This option reverts to default
   *             style options that are managed by Amazon Cognito. You can modify them later in the branding
   *             editor.</p>
   *          <p>When you specify <code>true</code> for this option, you must also omit values for
   *                 <code>Settings</code> and <code>Assets</code> in the request.</p>
   * @public
   */
  UseCognitoProvidedValues?: boolean | undefined;

  /**
   * <p>A JSON file, encoded as a <code>Document</code> type, with the the settings that you
   *             want to apply to your style.</p>
   *          <p>The following components are not currently implemented and reserved for future
   *             use:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>signUp</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>instructions</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sessionTimerDisplay</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>languageSelector</code> (for localization, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-localization">Managed login localization)</a>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Settings?: __DocumentType | undefined;

  /**
   * <p>An array of image files that you want to apply to roles like backgrounds, logos, and
   *             icons. Each object must also indicate whether it is for dark mode, light mode, or
   *             browser-adaptive mode.</p>
   * @public
   */
  Assets?: AssetType[] | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate?: Date | undefined;

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
export interface CreateManagedLoginBrandingResponse {
  /**
   * <p>The details of the branding style that you created.</p>
   * @public
   */
  ManagedLoginBranding?: ManagedLoginBrandingType | undefined;
}

/**
 * <p>This exception is thrown when you attempt to apply a managed login branding style to
 *             an app client that already has an assigned style.</p>
 * @public
 */
export class ManagedLoginBrandingExistsException extends __BaseException {
  readonly name: "ManagedLoginBrandingExistsException" = "ManagedLoginBrandingExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ManagedLoginBrandingExistsException, __BaseException>) {
    super({
      name: "ManagedLoginBrandingExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ManagedLoginBrandingExistsException.prototype);
  }
}

/**
 * <p>One custom scope associated with a user pool resource server. This data type is a
 *             member of <code>ResourceServerScopeType</code>. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-define-resource-servers.html">
 *                 Scopes, M2M, and API authorization with resource servers</a>. </p>
 * @public
 */
export interface ResourceServerScopeType {
  /**
   * <p>The name of the scope. Amazon Cognito renders custom scopes in the format
   *                 <code>resourceServerIdentifier/ScopeName</code>. For example, if this parameter is
   *                 <code>exampleScope</code> in the resource server with the identifier
   *                 <code>exampleResourceServer</code>, you request and receive the scope
   *                 <code>exampleResourceServer/exampleScope</code>.</p>
   * @public
   */
  ScopeName: string | undefined;

  /**
   * <p>A friendly description of a custom scope.</p>
   * @public
   */
  ScopeDescription: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceServerRequest {
  /**
   * <p>The ID of the user pool where you want to create a resource server.</p>
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
   * <p>A list of custom scopes. Each scope is a key-value map with the keys
   *                 <code>ScopeName</code> and <code>ScopeDescription</code>. The name of a custom scope
   *             is a combination of <code>ScopeName</code> and the resource server <code>Name</code> in
   *             this request, for example <code>MyResourceServerName/MyScopeName</code>.</p>
   * @public
   */
  Scopes?: ResourceServerScopeType[] | undefined;
}

/**
 * <p>The details of a resource server configuration and associated custom scopes in a user
 *             pool.</p>
 * @public
 */
export interface ResourceServerType {
  /**
   * <p>The ID of the user pool that contains the resource server configuration.</p>
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
   * <p>The details of the new resource server.</p>
   * @public
   */
  ResourceServer: ResourceServerType | undefined;
}

/**
 * @public
 * @enum
 */
export const TermsEnforcementType = {
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type TermsEnforcementType = (typeof TermsEnforcementType)[keyof typeof TermsEnforcementType];

/**
 * @public
 * @enum
 */
export const TermsSourceType = {
  LINK: "LINK",
} as const;

/**
 * @public
 */
export type TermsSourceType = (typeof TermsSourceType)[keyof typeof TermsSourceType];

/**
 * @public
 */
export interface CreateTermsRequest {
  /**
   * <p>The ID of the user pool where you want to create terms documents.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the app client where you want to create terms documents. Must be an app
   *             client in the requested user pool.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>A friendly name for the document that you want to create in the current request. Must
   *             begin with <code>terms-of-use</code> or <code>privacy-policy</code> as identification of
   *             the document type. Provide URLs for both <code>terms-of-use</code> and
   *                 <code>privacy-policy</code> in separate requests.</p>
   * @public
   */
  TermsName: string | undefined;

  /**
   * <p>This parameter is reserved for future use and currently accepts only one value.</p>
   * @public
   */
  TermsSource: TermsSourceType | undefined;

  /**
   * <p>This parameter is reserved for future use and currently accepts only one value.</p>
   * @public
   */
  Enforcement: TermsEnforcementType | undefined;

  /**
   * <p>A map of URLs to languages. For each localized language that will view the requested
   *                 <code>TermsName</code>, assign a URL. A selection of <code>cognito:default</code>
   *             displays for all languages that don't have a language-specific URL.</p>
   *          <p>For example, <code>"cognito:default": "https://terms.example.com", "cognito:spanish":
   *                 "https://terms.example.com/es"</code>.</p>
   * @public
   */
  Links?: Record<string, string> | undefined;
}

/**
 * <p>The details of a set of terms documents. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-terms-documents">Terms documents</a>.</p>
 * @public
 */
export interface TermsType {
  /**
   * <p>The ID of the terms documents.</p>
   * @public
   */
  TermsId: string | undefined;

  /**
   * <p>The ID of the user pool that contains the terms documents.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the app client that the terms documents are assigned to.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The type and friendly name of the terms documents.</p>
   * @public
   */
  TermsName: string | undefined;

  /**
   * <p>This parameter is reserved for future use and currently accepts one value.</p>
   * @public
   */
  TermsSource: TermsSourceType | undefined;

  /**
   * <p>This parameter is reserved for future use and currently accepts one value.</p>
   * @public
   */
  Enforcement: TermsEnforcementType | undefined;

  /**
   * <p>A map of URLs to languages. For each localized language that will view the requested
   *             <code>TermsName</code>, assign a URL. A selection of <code>cognito:default</code>
   *             displays for all languages that don't have a language-specific URL.</p>
   *          <p>For example, <code>"cognito:default": "https://terms.example.com", "cognito:spanish":
   *                 "https://terms.example.com/es"</code>.</p>
   * @public
   */
  Links: Record<string, string> | undefined;

  /**
   * <p>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * <p>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a
   * human-readable format like ISO 8601 or a Java <code>Date</code> object.</p>
   * @public
   */
  LastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface CreateTermsResponse {
  /**
   * <p>A summary of your terms documents. Includes a unique identifier for later changes to
   *             the terms documents.</p>
   * @public
   */
  Terms?: TermsType | undefined;
}

/**
 * <p>Terms document names must be unique to the app client. This exception is thrown when
 *             you attempt to create terms documents with a duplicate <code>TermsName</code>.</p>
 * @public
 */
export class TermsExistsException extends __BaseException {
  readonly name: "TermsExistsException" = "TermsExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TermsExistsException, __BaseException>) {
    super({
      name: "TermsExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TermsExistsException.prototype);
  }
}

/**
 * <p>Represents the request to create the user import job.</p>
 * @public
 */
export interface CreateUserImportJobRequest {
  /**
   * <p>A friendly name for the user import job.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The ID of the user pool that you want to import users into.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>You must specify an IAM role that has permission to log import-job results to
   *             Amazon CloudWatch Logs. This parameter is the ARN of that role.</p>
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
 * <p>A user import job in a user pool. Describes the status of user import with a CSV file.
 *             For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-using-import-tool.html">Importing users into user pools from a CSV file</a>.</p>
 * @public
 */
export interface UserImportJobType {
  /**
   * <p>The friendly name of the user import job.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The ID of the user import job.</p>
   * @public
   */
  JobId?: string | undefined;

  /**
   * <p>The ID of the user pool that the users are being imported into.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The pre-signed URL target for uploading the CSV file.</p>
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
   * <p>The details of the user import job. Includes logging destination, status, and the Amazon S3
   *             pre-signed URL for CSV upload.</p>
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
 * <p>The device-remembering configuration for a user pool.</p>
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
   *                 <code>ConfirmDevice</code> API request. In your app, create a prompt for your user
   *             to choose whether they want to remember their device. Return the user's choice in an
   *                 <code>UpdateDeviceStatus</code> API request.</p>
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
  V3_0: "V3_0",
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
 * <p>A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible
 *             stages of user pool operations. Triggers can modify the outcome of the operations that
 *             invoked them.</p>
 * @public
 */
export interface LambdaConfigType {
  /**
   * <p>The configuration of a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html">pre sign-up Lambda trigger</a> in a user pool. This trigger
   *             evaluates new users and can bypass confirmation, <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html">link a federated user profile</a>, or block sign-up
   *             requests.</p>
   * @public
   */
  PreSignUp?: string | undefined;

  /**
   * <p>A custom message Lambda trigger. This trigger is an opportunity to customize all SMS
   *             and email messages from your user pool. When a custom message trigger is active, your
   *             user pool routes all messages to a Lambda function that returns a runtime-customized
   *             message subject and body for your user pool to deliver to a user.</p>
   * @public
   */
  CustomMessage?: string | undefined;

  /**
   * <p>The configuration of a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-confirmation.html">post confirmation Lambda trigger</a> in a user pool. This
   *             trigger can take custom actions after a user confirms their user account and their email
   *             address or phone number.</p>
   * @public
   */
  PostConfirmation?: string | undefined;

  /**
   * <p>The configuration of a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-authentication.html">pre authentication trigger</a> in a user pool. This trigger
   *             can evaluate and modify user sign-in events.</p>
   * @public
   */
  PreAuthentication?: string | undefined;

  /**
   * <p>The configuration of a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-authentication.html">post authentication Lambda trigger</a> in a user pool. This
   *             trigger can take custom actions after a user signs in.</p>
   * @public
   */
  PostAuthentication?: string | undefined;

  /**
   * <p>The configuration of a define auth challenge Lambda trigger, one of three triggers in
   *             the sequence of the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html">custom authentication challenge triggers</a>.</p>
   * @public
   */
  DefineAuthChallenge?: string | undefined;

  /**
   * <p>The configuration of a create auth challenge Lambda trigger, one of three triggers in
   *             the sequence of the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html">custom authentication challenge triggers</a>.</p>
   * @public
   */
  CreateAuthChallenge?: string | undefined;

  /**
   * <p>The configuration of a verify auth challenge Lambda trigger, one of three triggers in
   *             the sequence of the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html">custom authentication challenge triggers</a>.</p>
   * @public
   */
  VerifyAuthChallengeResponse?: string | undefined;

  /**
   * <p>The legacy configuration of a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html">pre token generation Lambda trigger</a> in a user
   *             pool.</p>
   *          <p>Set this parameter for legacy purposes. If you also set an ARN in
   *                 <code>PreTokenGenerationConfig</code>, its value must be identical to
   *                 <code>PreTokenGeneration</code>. For new instances of pre token generation triggers,
   *             set the <code>LambdaArn</code> of <code>PreTokenGenerationConfig</code>.</p>
   * @public
   */
  PreTokenGeneration?: string | undefined;

  /**
   * <p>The configuration of a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-migrate-user.html">migrate user Lambda trigger</a> in a user pool. This trigger
   *             can create user profiles when users sign in or attempt to reset their password with
   *             credentials that don't exist yet.</p>
   * @public
   */
  UserMigration?: string | undefined;

  /**
   * <p>The detailed configuration of a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html">pre token generation Lambda trigger</a> in a user pool. If
   *             you also set an ARN in <code>PreTokenGeneration</code>, its value must be identical to
   *                 <code>PreTokenGenerationConfig</code>.</p>
   * @public
   */
  PreTokenGenerationConfig?: PreTokenGenerationVersionConfigType | undefined;

  /**
   * <p>The configuration of a custom SMS sender Lambda trigger. This trigger routes all SMS
   *             notifications from a user pool to a Lambda function that delivers the message using
   *             custom logic.</p>
   * @public
   */
  CustomSMSSender?: CustomSMSLambdaVersionConfigType | undefined;

  /**
   * <p>The configuration of a custom email sender Lambda trigger. This trigger routes all
   *             email notifications from a user pool to a Lambda function that delivers the message using
   *             custom logic.</p>
   * @public
   */
  CustomEmailSender?: CustomEmailLambdaVersionConfigType | undefined;

  /**
   * <p>The ARN of an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">KMS key</a>. Amazon Cognito uses the key to encrypt codes and temporary passwords sent to
   *             custom sender Lambda triggers.</p>
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
 * <p>The password policy settings for a user pool, including complexity, history, and
 *             length requirements.</p>
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
   * <p>The requirement in a password policy that users must include at least one uppercase
   *             letter in their password.</p>
   * @public
   */
  RequireUppercase?: boolean | undefined;

  /**
   * <p>The requirement in a password policy that users must include at least one lowercase
   *             letter in their password.</p>
   * @public
   */
  RequireLowercase?: boolean | undefined;

  /**
   * <p>The requirement in a password policy that users must include at least one number in
   *             their password.</p>
   * @public
   */
  RequireNumbers?: boolean | undefined;

  /**
   * <p>The requirement in a password policy that users must include at least one symbol in
   *             their password.</p>
   * @public
   */
  RequireSymbols?: boolean | undefined;

  /**
   * <p>The number of previous passwords that you want Amazon Cognito to restrict each user from
   *             reusing. Users can't set a password that matches any of <code>n</code> previous
   *             passwords, where <code>n</code> is the value of <code>PasswordHistorySize</code>.</p>
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
 * <p>The policy for allowed types of authentication in a user pool.
 *             To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
 *                      Essentials tier</a> or higher.</p>
 * @public
 */
export interface SignInPolicyType {
  /**
   * <p>The sign-in methods that a user pool supports as the first factor. You can permit
   *             users to start authentication with a standard username and password, or with other
   *             one-time password and hardware factors.</p>
   * @public
   */
  AllowedFirstAuthFactors?: AuthFactorType[] | undefined;
}

/**
 * <p>A list of user pool policies. Contains the policy that sets password-complexity
 *             requirements.</p>
 * @public
 */
export interface UserPoolPolicyType {
  /**
   * <p>The password policy settings for a user pool, including complexity, history, and
   *             length requirements.</p>
   * @public
   */
  PasswordPolicy?: PasswordPolicyType | undefined;

  /**
   * <p>The policy for allowed types of authentication in a user pool.</p>
   * @public
   */
  SignInPolicy?: SignInPolicyType | undefined;
}

/**
 * <p>User pool configuration for delivery of SMS messages with Amazon Simple Notification Service. To send SMS
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
   *                 party</a>.</p>
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
 * <p>The configuration of a user pool for username case sensitivity.</p>
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
   *             <dt>true</dt>
   *             <dd>
   *                <p>Enables case sensitivity for all username input. When this option is set
   *                         to <code>true</code>, users must sign in using the exact capitalization of
   *                         their given username, such as “UserName”. This is the default value.</p>
   *             </dd>
   *             <dt>false</dt>
   *             <dd>
   *                <p>Enables case insensitivity for all username input. For example, when this
   *                         option is set to <code>false</code>, users can sign in using
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
 * <p>Contains settings for activation of threat protection, including the operating
 * mode and additional authentication types. To log user security information but take
 * no action, set to <code>AUDIT</code>. To configure automatic security responses to
 * potentially unwanted traffic to your user pool, set to <code>ENFORCED</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>. To activate this setting, your user pool must be on the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html">
 *                      Plus tier</a>.</p>
 * @public
 */
export interface UserPoolAddOnsType {
  /**
   * <p>The operating mode of threat protection for standard authentication types in your user
   *             pool, including username-password and secure remote password (SRP) authentication.
   *         </p>
   * @public
   */
  AdvancedSecurityMode: AdvancedSecurityModeType | undefined;

  /**
   * <p>Threat protection configuration options for additional authentication types in your
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
export const UserPoolTierType = {
  ESSENTIALS: "ESSENTIALS",
  LITE: "LITE",
  PLUS: "PLUS",
} as const;

/**
 * @public
 */
export type UserPoolTierType = (typeof UserPoolTierType)[keyof typeof UserPoolTierType];

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
 * <p>The template for the verification message that your user pool delivers to users who
 *             set an email address or phone number attribute.</p>
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
   * <p>The configuration of verification emails to contain a clickable link or a verification
   *             code.</p>
   *          <p>For link, your template body must contain link text in the format <code>\{##Click
   *                 here##\}</code>. "Click here" in the example is a customizable string. For code, your
   *             template body must contain a code placeholder in the format <code>\{####\}</code>.</p>
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
   * <p>A friendly name for your user pool.</p>
   * @public
   */
  PoolName: string | undefined;

  /**
   * <p>The password policy and sign-in policy in the user pool. The password policy sets
   *             options like password complexity requirements and password history. The sign-in policy
   *             sets the options available to applications in <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice">choice-based authentication</a>.</p>
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
   * <p>A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible
   *             stages of authentication operations. Triggers can modify the outcome of the operations
   *             that invoked them.</p>
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * <p>The attributes that you want your user pool to automatically verify. For more
   *             information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#allowing-users-to-sign-up-and-confirm-themselves">Verifying contact information at sign-up</a>.</p>
   * @public
   */
  AutoVerifiedAttributes?: VerifiedAttributeType[] | undefined;

  /**
   * <p>Attributes supported as an alias for this user pool. For more information about alias
   *             attributes, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-aliases">Customizing sign-in attributes</a>.</p>
   * @public
   */
  AliasAttributes?: AliasAttributeType[] | undefined;

  /**
   * <p>Specifies whether a user can use an email address or phone number as a username when
   *             they sign up. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-aliases">Customizing sign-in attributes</a>.</p>
   * @public
   */
  UsernameAttributes?: UsernameAttributeType[] | undefined;

  /**
   * <p>This parameter is no longer used.</p>
   * @public
   */
  SmsVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used.</p>
   * @public
   */
  EmailVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used.</p>
   * @public
   */
  EmailVerificationSubject?: string | undefined;

  /**
   * <p>The template for the verification message that your user pool delivers to users who
   *             set an email address or phone number attribute.</p>
   *          <p>Set the email message type that corresponds to your <code>DefaultEmailOption</code>
   *             selection. For <code>CONFIRM_WITH_LINK</code>, specify an
   *                 <code>EmailMessageByLink</code> and leave <code>EmailMessage</code> blank. For
   *                 <code>CONFIRM_WITH_CODE</code>, specify an <code>EmailMessage</code> and leave
   *                 <code>EmailMessageByLink</code> blank. When you supply both parameters with either
   *             choice, Amazon Cognito returns an error.</p>
   * @public
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType | undefined;

  /**
   * <p>The contents of the SMS message that your user pool sends to users in SMS OTP and MFA
   *             authentication.</p>
   * @public
   */
  SmsAuthenticationMessage?: string | undefined;

  /**
   * <p>Sets multi-factor authentication (MFA) to be on, off, or optional. When
   *                 <code>ON</code>, all users must set up MFA before they can sign in. When
   *                 <code>OPTIONAL</code>, your application must make a client-side determination of
   *             whether a user wants to register an MFA device. For user pools with adaptive
   *             authentication with threat protection, choose <code>OPTIONAL</code>.</p>
   *          <p>When <code>MfaConfiguration</code> is <code>OPTIONAL</code>, managed login
   *             doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in
   *             API responses and in managed login for users who have chosen and configured a preferred
   *             MFA factor.</p>
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
   * <p>The device-remembering configuration for a user pool. Device remembering or device
   *             tracking is a "Remember me on this device" option for user pools that perform
   *             authentication with the device key of a trusted device in the back end, instead of a
   *             user-provided MFA code. For more information about device authentication, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>. A null value indicates that
   *             you have deactivated device remembering in your user pool.</p>
   *          <note>
   *             <p>When you provide a value for any <code>DeviceConfiguration</code> field, you
   *                 activate the Amazon Cognito device-remembering feature. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with devices</a>.</p>
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
   * <p>The settings for your Amazon Cognito user pool to send SMS messages with Amazon Simple Notification Service. To send SMS
   *             messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an
   *             Identity and Access Management (IAM) role in your Amazon Web Services account. For more information see
   *                 <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html">SMS message settings</a>.</p>
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
   * <p>The configuration for administrative creation of users. Includes the template for the
   *             invitation message for new users, the duration of temporary passwords, and permitting
   *             self-service sign-up.</p>
   * @public
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType | undefined;

  /**
   * <p>An array of attributes for the new user pool. You can add custom attributes and modify
   *             the properties of default attributes. The specifications in this parameter set the
   *             required attributes in your user pool. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html">Working with user attributes</a>.</p>
   * @public
   */
  Schema?: SchemaAttributeType[] | undefined;

  /**
   * <p>Contains settings for activation of threat protection, including the operating
   * mode and additional authentication types. To log user security information but take
   * no action, set to <code>AUDIT</code>. To configure automatic security responses to
   * potentially unwanted traffic to your user pool, set to <code>ENFORCED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>. To activate this setting, your user pool must be on the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html">
   *                      Plus tier</a>.</p>
   * @public
   */
  UserPoolAddOns?: UserPoolAddOnsType | undefined;

  /**
   * <p>Sets the case sensitivity option for sign-in usernames. When
   *                 <code>CaseSensitive</code> is <code>false</code> (case insensitive), users can sign
   *             in with any combination of capital and lowercase letters. For example,
   *                 <code>username</code>, <code>USERNAME</code>, or <code>UserName</code>, or for
   *             email, <code>email@example.com</code> or <code>EMaiL@eXamplE.Com</code>. For most use
   *             cases, set case sensitivity to <code>false</code> as a best practice. When usernames and
   *             email addresses are case insensitive, Amazon Cognito treats any variation in case as the same
   *             user, and prevents a case variation from being assigned to the same attribute for a
   *             different user.</p>
   *          <p>When <code>CaseSensitive</code> is <code>true</code> (case sensitive), Amazon Cognito
   *             interprets <code>USERNAME</code> and <code>UserName</code> as distinct users.</p>
   *          <p>This configuration is immutable after you set it.</p>
   * @public
   */
  UsernameConfiguration?: UsernameConfigurationType | undefined;

  /**
   * <p>The available verified method a user can use to recover their password when they call
   *                 <code>ForgotPassword</code>. You can use this setting to define a preferred method
   *             when a user has more than one method available. With this setting, SMS doesn't qualify
   *             for a valid password recovery mechanism if the user also has SMS multi-factor
   *             authentication (MFA) activated. Email MFA is also disqualifying for account recovery
   *             with email. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine
   *             the recovery method where SMS is preferred over email.</p>
   *          <p>As a best practice, configure both <code>verified_email</code> and
   *                 <code>verified_phone_number</code>, with one having a higher priority than the
   *             other.</p>
   * @public
   */
  AccountRecoverySetting?: AccountRecoverySettingType | undefined;

  /**
   * <p>The user pool <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html">feature plan</a>, or tier. This parameter determines the
   *             eligibility of the user pool for features like managed login, access-token
   *             customization, and threat protection. Defaults to <code>ESSENTIALS</code>.</p>
   * @public
   */
  UserPoolTier?: UserPoolTierType | undefined;
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
 * <p>The configuration of a user pool.</p>
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
   * <p>A list of user pool policies. Contains the policy that sets password-complexity
   *             requirements.</p>
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
   * <p>A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible
   *             stages of user pool operations. Triggers can modify the outcome of the operations that
   *             invoked them.</p>
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * <p>This parameter is no longer used.</p>
   *
   * @deprecated
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
   *          <p>Developer-only attributes are a legacy feature of user pools, and are read-only to all
   *             app clients. You can create and update developer-only attributes only with
   *             IAM-authenticated API operations. Use app client read/write permissions instead.</p>
   * @public
   */
  SchemaAttributes?: SchemaAttributeType[] | undefined;

  /**
   * <p>The attributes that are auto-verified in a user pool.</p>
   * @public
   */
  AutoVerifiedAttributes?: VerifiedAttributeType[] | undefined;

  /**
   * <p>Attributes supported as an alias for this user pool. An alias is an attribute that
   *             users can enter as an alternative username. Possible values: <b>phone_number</b>, <b>email</b>, or <b>preferred_username</b>.</p>
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
   * <p>This parameter is no longer used.</p>
   * @public
   */
  SmsVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used.</p>
   * @public
   */
  EmailVerificationMessage?: string | undefined;

  /**
   * <p>This parameter is no longer used.</p>
   * @public
   */
  EmailVerificationSubject?: string | undefined;

  /**
   * <p>The template for the verification message that your user pool delivers to users who
   *             set an email address or phone number attribute.</p>
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
   * <p>User pool configuration for delivery of SMS messages with Amazon Simple Notification Service. To send SMS
   *             messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an
   *             Identity and Access Management (IAM) role in your Amazon Web Services account.</p>
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
   * <p>Contains settings for activation of threat protection, including the operating
   * mode and additional authentication types. To log user security information but take
   * no action, set to <code>AUDIT</code>. To configure automatic security responses to
   * potentially unwanted traffic to your user pool, set to <code>ENFORCED</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html">Adding advanced security to a user pool</a>. To activate this setting, your user pool must be on the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html">
   *                      Plus tier</a>.</p>
   * @public
   */
  UserPoolAddOns?: UserPoolAddOnsType | undefined;

  /**
   * <p>Case sensitivity of the username input for the selected sign-in option. When case
   *             sensitivity is set to <code>False</code> (case insensitive), users can sign in with any
   *             combination of capital and lowercase letters. For example, <code>username</code>,
   *                 <code>USERNAME</code>, or <code>UserName</code>, or for email,
   *                 <code>email@example.com</code> or <code>EMaiL@eXamplE.Com</code>. For most use
   *             cases, set case sensitivity to <code>False</code> (case insensitive) as a best practice.
   *             When usernames and email addresses are case insensitive, Amazon Cognito treats any variation in
   *             case as the same user, and prevents a case variation from being assigned to the same
   *             attribute for a different user.</p>
   * @public
   */
  UsernameConfiguration?: UsernameConfigurationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user pool.</p>
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

  /**
   * <p>The user pool <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html">feature plan</a>, or tier. This parameter determines the
   *             eligibility of the user pool for features like managed login, access-token
   *             customization, and threat protection. Defaults to <code>ESSENTIALS</code>.</p>
   * @public
   */
  UserPoolTier?: UserPoolTierType | undefined;
}

/**
 * <p>Represents the response from the server for the request to create a user pool.</p>
 * @public
 */
export interface CreateUserPoolResponse {
  /**
   * <p>The details of the created user pool.</p>
   * @public
   */
  UserPool?: UserPoolType | undefined;
}

/**
 * <p>This exception is thrown when a feature you attempted to configure isn't
 *             available in your current feature plan.</p>
 * @public
 */
export class FeatureUnavailableInTierException extends __BaseException {
  readonly name: "FeatureUnavailableInTierException" = "FeatureUnavailableInTierException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<FeatureUnavailableInTierException, __BaseException>) {
    super({
      name: "FeatureUnavailableInTierException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, FeatureUnavailableInTierException.prototype);
  }
}

/**
 * <p>This exception is thrown when you've attempted to change your feature plan but
 *             the operation isn't permitted.</p>
 * @public
 */
export class TierChangeNotAllowedException extends __BaseException {
  readonly name: "TierChangeNotAllowedException" = "TierChangeNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TierChangeNotAllowedException, __BaseException>) {
    super({
      name: "TierChangeNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TierChangeNotAllowedException.prototype);
  }
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
  ALLOW_USER_AUTH: "ALLOW_USER_AUTH",
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
export const FeatureType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];

/**
 * <p>The configuration of your app client for refresh token rotation. When enabled, your
 *             app client issues new ID, access, and refresh tokens when users renew their sessions
 *             with refresh tokens. When disabled, token refresh issues only ID and access
 *             tokens.</p>
 * @public
 */
export interface RefreshTokenRotationType {
  /**
   * <p>The state of refresh token rotation for the current app client.</p>
   * @public
   */
  Feature: FeatureType | undefined;

  /**
   * <p>When you request a token refresh with <code>GetTokensFromRefreshToken</code>, the
   *             original refresh token that you're rotating out can remain valid for a period of time of
   *             up to 60 seconds. This allows for client-side retries. When
   *                 <code>RetryGracePeriodSeconds</code> is <code>0</code>, the grace period is disabled
   *             and a successful request immediately invalidates the submitted refresh token.</p>
   * @public
   */
  RetryGracePeriodSeconds?: number | undefined;
}

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
 * <p>The time units that, with <code>IdTokenValidity</code>,
 *                 <code>AccessTokenValidity</code>, and <code>RefreshTokenValidity</code>, set and
 *             display the duration of ID, access, and refresh tokens for an app client. You can assign
 *             a separate token validity unit to each type of token. </p>
 * @public
 */
export interface TokenValidityUnitsType {
  /**
   * <p> A time unit for the value that you set in the <code>AccessTokenValidity</code>
   *             parameter. The default <code>AccessTokenValidity</code> time unit is <code>hours</code>.
   *                 <code>AccessTokenValidity</code> duration can range from five minutes to one
   *             day.</p>
   * @public
   */
  AccessToken?: TimeUnitsType | undefined;

  /**
   * <p>A time unit for the value that you set in the <code>IdTokenValidity</code> parameter.
   *             The default <code>IdTokenValidity</code> time unit is <code>hours</code>.
   *                 <code>IdTokenValidity</code> duration can range from five minutes to one day.</p>
   * @public
   */
  IdToken?: TimeUnitsType | undefined;

  /**
   * <p>A time unit for the value that you set in the <code>RefreshTokenValidity</code>
   *             parameter. The default <code>RefreshTokenValidity</code> time unit is <code>days</code>.
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
   * <p>The ID of the user pool where you want to create an app client.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>A friendly name for the app client that you want to create.</p>
   * @public
   */
  ClientName: string | undefined;

  /**
   * <p>When <code>true</code>, generates a client secret for the app client. Client secrets
   *             are used with server-side and machine-to-machine applications. Client secrets are
   *             automatically generated; you can't specify a secret value. For more information,
   *             see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html#user-pool-settings-client-app-client-types">App client types</a>.</p>
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
   * <p>The units that validity times are represented in. The default unit for refresh tokens
   *             is days, and the default for ID and access tokens are hours.</p>
   * @public
   */
  TokenValidityUnits?: TokenValidityUnitsType | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have read access to.
   *     After your user authenticates in your app, their access token authorizes them to read
   *     their own attribute value for any attribute in this list.</p>
   *          <p>When you don't specify the <code>ReadAttributes</code> for your app client, your
   *     app can read the values of <code>email_verified</code>,
   *     <code>phone_number_verified</code>, and the standard attributes of your user pool.
   *     When your user pool app client has read access to these default attributes,
   *     <code>ReadAttributes</code> doesn't return any information. Amazon Cognito only
   *     populates <code>ReadAttributes</code> in the API response if you have specified your own
   *     custom set of read attributes.</p>
   * @public
   */
  ReadAttributes?: string[] | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have write access to.
   *     After your user authenticates in your app, their access token authorizes them to set or
   *     modify their own attribute value for any attribute in this list.</p>
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
   * <p>The <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow-methods.html">authentication flows</a> that you want your user pool client to support. For each app
   * client in your user pool, you can sign in your users with any combination of one or more flows, including with
   * a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that
   * you define with Lambda functions.</p>
   *          <note>
   *             <p>If you don't specify a value for <code>ExplicitAuthFlows</code>, your app client supports
   * <code>ALLOW_REFRESH_TOKEN_AUTH</code>, <code>ALLOW_USER_SRP_AUTH</code>, and <code>ALLOW_CUSTOM_AUTH</code>.
   * </p>
   *          </note>
   *          <p>The values for authentication flow options include the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW_USER_AUTH</code>: Enable selection-based sign-in
   *             with <code>USER_AUTH</code>. This setting covers username-password,
   *             secure remote password (SRP), passwordless, and passkey authentication.
   *             This authentiation flow can do username-password and SRP authentication
   *             without other <code>ExplicitAuthFlows</code> permitting them. For example
   *             users can complete an SRP challenge through <code>USER_AUTH</code>
   *             without the flow <code>USER_SRP_AUTH</code> being active for the app
   *             client. This flow doesn't include <code>CUSTOM_AUTH</code>.
   *         </p>
   *                <p>To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
   *                      Essentials tier</a> or higher.</p>
   *             </li>
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
   *             <code>Google</code>, <code>SignInWithApple</code>, and <code>LoginWithAmazon</code>.
   *             You can also specify the names that you configured for the SAML and OIDC IdPs in your
   *             user pool, for example <code>MySAMLIdP</code> or <code>MyOIDCIdP</code>.</p>
   *          <p>This parameter sets the IdPs that <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">managed
   *             login</a> will display on the login page for your app client. The removal of
   *             <code>COGNITO</code> from this list doesn't prevent authentication operations
   *             for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent
   *             SDK-based authentication is to block access with a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-waf.html">WAF rule</a>.
   *         </p>
   * @public
   */
  SupportedIdentityProviders?: string[] | undefined;

  /**
   * <p>A list of allowed redirect, or callback, URLs for managed login authentication. These
   *             URLs are the paths where you want to send your users' browsers after they complete
   *             authentication with managed login or a third-party IdP. Typically, callback URLs are the
   *             home of an application that uses OAuth or OIDC libraries to process authentication
   *             outcomes.</p>
   *          <p>A redirect URI must meet the following requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Be an absolute URI.</p>
   *             </li>
   *             <li>
   *                <p>Be registered with the authorization server. Amazon Cognito doesn't accept
   *                     authorization requests with <code>redirect_uri</code> values that aren't in
   *                     the list of <code>CallbackURLs</code> that you provide in this parameter.</p>
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
   * <p>A list of allowed logout URLs for managed login authentication. When you pass
   *                 <code>logout_uri</code> and <code>client_id</code> parameters to
   *                 <code>/logout</code>, Amazon Cognito signs out your user and redirects them to the logout
   *             URL. This parameter describes the URLs that you want to be the permitted targets of
   *                 <code>logout_uri</code>. A typical use of these URLs is when a user selects "Sign
   *             out" and you redirect them to your public homepage. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/logout-endpoint.html">Logout
   *                 endpoint</a>.</p>
   * @public
   */
  LogoutURLs?: string[] | undefined;

  /**
   * <p>The default redirect URI. In app clients with one assigned IdP, replaces
   *                 <code>redirect_uri</code> in authentication requests. Must be in the
   *                 <code>CallbackURLs</code> list.</p>
   * @public
   */
  DefaultRedirectURI?: string | undefined;

  /**
   * <p>The OAuth grant types that you want your app client to generate for clients in managed
   *             login authentication. To create an app client that generates client credentials grants,
   *             you must add <code>client_credentials</code> as the only allowed OAuth flow.</p>
   *          <dl>
   *             <dt>code</dt>
   *             <dd>
   *                <p>Use a code grant flow, which provides an authorization code as the
   *                         response. This code can be exchanged for access tokens with the
   *                             <code>/oauth2/token</code> endpoint.</p>
   *             </dd>
   *             <dt>implicit</dt>
   *             <dd>
   *                <p>Issue the access token, and the ID token when scopes like
   *                             <code>openid</code> and <code>profile</code> are requested, directly to
   *                         your user.</p>
   *             </dd>
   *             <dt>client_credentials</dt>
   *             <dd>
   *                <p>Issue the access token from the <code>/oauth2/token</code> endpoint
   *                         directly to a non-person user, authorized by a combination of the client ID
   *                         and client secret.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  AllowedOAuthFlows?: OAuthFlowType[] | undefined;

  /**
   * <p>The OAuth, OpenID Connect (OIDC), and custom scopes that you want to permit your app
   *             client to authorize access with. Scopes govern access control to user pool self-service
   *             API operations, user data from the <code>userInfo</code> endpoint, and third-party APIs.
   *             Scope values include <code>phone</code>, <code>email</code>, <code>openid</code>, and
   *                 <code>profile</code>. The <code>aws.cognito.signin.user.admin</code> scope
   *             authorizes user self-service operations. Custom scopes with resource servers authorize
   *             access to external APIs.</p>
   * @public
   */
  AllowedOAuthScopes?: string[] | undefined;

  /**
   * <p>Set to <code>true</code> to use OAuth 2.0 authorization server features in your app client.</p>
   *          <p>This parameter must have a value of <code>true</code> before you can configure
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
   *          <p>To use authorization server features, configure one of these features in the Amazon Cognito console or set
   * <code>AllowedOAuthFlowsUserPoolClient</code> to <code>true</code> in a <code>CreateUserPoolClient</code> or
   * <code>UpdateUserPoolClient</code> API request. If you don't set a value for
   * <code>AllowedOAuthFlowsUserPoolClient</code> in a request with the CLI or SDKs, it defaults
   * to <code>false</code>. When <code>false</code>, only SDK-based API sign-in is permitted.</p>
   * @public
   */
  AllowedOAuthFlowsUserPoolClient?: boolean | undefined;

  /**
   * <p>The user pool analytics configuration for collecting metrics and sending them to your
   *             Amazon Pinpoint campaign.</p>
   *          <p>In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools might not have access to
   *             analytics or might be configurable with campaigns in the US East (N. Virginia) Region.
   *             For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html">Using Amazon Pinpoint analytics</a>.</p>
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType | undefined;

  /**
   * <p>When <code>ENABLED</code>, suppresses messages that might indicate a valid user exists
   *             when someone attempts sign-in. This parameters sets your preference for the errors and
   *             responses that you want Amazon Cognito APIs to return during authentication, account
   *             confirmation, and password recovery when the user doesn't exist in the user pool. When
   *             set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error
   *             indicating either the username or password was incorrect. Account confirmation and
   *             password recovery return a response indicating a code was sent to a simulated
   *             destination. When set to <code>LEGACY</code>, those APIs return a
   *             <code>UserNotFoundException</code> exception if the user doesn't exist in the user
   *             pool.</p>
   *          <p>Defaults to <code>LEGACY</code>.</p>
   * @public
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | undefined;

  /**
   * <p>Activates or deactivates <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/token-revocation.html">token
   *                 revocation</a> in the target app client.</p>
   *          <p>If you don't include this parameter, token revocation is automatically activated for
   *             the new user pool client.</p>
   * @public
   */
  EnableTokenRevocation?: boolean | undefined;

  /**
   * <p>When <code>true</code>, your application can include additional
   *                 <code>UserContextData</code> in authentication requests. This data includes the IP
   *             address, and contributes to analysis by threat protection features. For more information
   *             about propagation of user context data, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint">Adding session data to API requests</a>. If you don’t include this parameter,
   *             you can't send the source IP address to Amazon Cognito threat protection features. You can only
   *             activate <code>EnablePropagateAdditionalUserContextData</code> in an app client that has
   *             a client secret.</p>
   * @public
   */
  EnablePropagateAdditionalUserContextData?: boolean | undefined;

  /**
   * <p>Amazon Cognito creates a session token for each API request in an authentication flow. <code>AuthSessionValidity</code> is the duration,
   * in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.</p>
   * @public
   */
  AuthSessionValidity?: number | undefined;

  /**
   * <p>The configuration of your app client for refresh token rotation. When enabled, your
   *             app client issues new ID, access, and refresh tokens when users renew their sessions
   *             with refresh tokens. When disabled, token refresh issues only ID and access
   *             tokens.</p>
   * @public
   */
  RefreshTokenRotation?: RefreshTokenRotationType | undefined;
}

/**
 * <p>The configuration of a user pool client.</p>
 * @public
 */
export interface UserPoolClientType {
  /**
   * <p>The ID of the user pool associated with the app client.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The name of the app client.</p>
   * @public
   */
  ClientName?: string | undefined;

  /**
   * <p>The ID of the app client.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The app client secret.</p>
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
   * <p>The time units that, with <code>IdTokenValidity</code>,
   *                 <code>AccessTokenValidity</code>, and <code>RefreshTokenValidity</code>, set and
   *             display the duration of ID, access, and refresh tokens for an app client. You can assign
   *             a separate token validity unit to each type of token. </p>
   * @public
   */
  TokenValidityUnits?: TokenValidityUnitsType | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have read access to.
   *     After your user authenticates in your app, their access token authorizes them to read
   *     their own attribute value for any attribute in this list.</p>
   *          <p>When you don't specify the <code>ReadAttributes</code> for your app client, your
   *     app can read the values of <code>email_verified</code>,
   *     <code>phone_number_verified</code>, and the standard attributes of your user pool.
   *     When your user pool app client has read access to these default attributes,
   *     <code>ReadAttributes</code> doesn't return any information. Amazon Cognito only
   *     populates <code>ReadAttributes</code> in the API response if you have specified your own
   *     custom set of read attributes.</p>
   * @public
   */
  ReadAttributes?: string[] | undefined;

  /**
   * <p>The list of user attributes that you want your app client to have write access to.
   *     After your user authenticates in your app, their access token authorizes them to set or
   *     modify their own attribute value for any attribute in this list.</p>
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
   * <p>The <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow-methods.html">authentication flows</a> that you want your user pool client to support. For each app
   * client in your user pool, you can sign in your users with any combination of one or more flows, including with
   * a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that
   * you define with Lambda functions.</p>
   *          <note>
   *             <p>If you don't specify a value for <code>ExplicitAuthFlows</code>, your app client supports
   * <code>ALLOW_REFRESH_TOKEN_AUTH</code>, <code>ALLOW_USER_SRP_AUTH</code>, and <code>ALLOW_CUSTOM_AUTH</code>.
   * </p>
   *          </note>
   *          <p>The values for authentication flow options include the following.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALLOW_USER_AUTH</code>: Enable selection-based sign-in
   *             with <code>USER_AUTH</code>. This setting covers username-password,
   *             secure remote password (SRP), passwordless, and passkey authentication.
   *             This authentiation flow can do username-password and SRP authentication
   *             without other <code>ExplicitAuthFlows</code> permitting them. For example
   *             users can complete an SRP challenge through <code>USER_AUTH</code>
   *             without the flow <code>USER_SRP_AUTH</code> being active for the app
   *             client. This flow doesn't include <code>CUSTOM_AUTH</code>.
   *         </p>
   *                <p>To activate this setting, your user pool must be in the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html">
   *                      Essentials tier</a> or higher.</p>
   *             </li>
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
   *             <code>Google</code>, <code>SignInWithApple</code>, and <code>LoginWithAmazon</code>.
   *             You can also specify the names that you configured for the SAML and OIDC IdPs in your
   *             user pool, for example <code>MySAMLIdP</code> or <code>MyOIDCIdP</code>.</p>
   *          <p>This parameter sets the IdPs that <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">managed
   *             login</a> will display on the login page for your app client. The removal of
   *             <code>COGNITO</code> from this list doesn't prevent authentication operations
   *             for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent
   *             SDK-based authentication is to block access with a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-waf.html">WAF rule</a>.
   *         </p>
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
   * <p>The OAuth 2.0 scopes that you want your app client to support. Can include standard
   *             OAuth scopes like <code>phone</code>, <code>email</code>, <code>openid</code>, and
   *                 <code>profile</code>. Can also include the
   *                 <code>aws.cognito.signin.user.admin</code> scope that authorizes user profile
   *             self-service operations and custom scopes from resource servers.</p>
   * @public
   */
  AllowedOAuthScopes?: string[] | undefined;

  /**
   * <p>Set to <code>true</code> to use OAuth 2.0 authorization server features in your app client.</p>
   *          <p>This parameter must have a value of <code>true</code> before you can configure
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
   *          <p>To use authorization server features, configure one of these features in the Amazon Cognito console or set
   * <code>AllowedOAuthFlowsUserPoolClient</code> to <code>true</code> in a <code>CreateUserPoolClient</code> or
   * <code>UpdateUserPoolClient</code> API request. If you don't set a value for
   * <code>AllowedOAuthFlowsUserPoolClient</code> in a request with the CLI or SDKs, it defaults
   * to <code>false</code>. When <code>false</code>, only SDK-based API sign-in is permitted.</p>
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
   * <p>When <code>ENABLED</code>, suppresses messages that might indicate a valid user exists
   *             when someone attempts sign-in. This parameters sets your preference for the errors and
   *             responses that you want Amazon Cognito APIs to return during authentication, account
   *             confirmation, and password recovery when the user doesn't exist in the user pool. When
   *             set to <code>ENABLED</code> and the user doesn't exist, authentication returns an error
   *             indicating either the username or password was incorrect. Account confirmation and
   *             password recovery return a response indicating a code was sent to a simulated
   *             destination. When set to <code>LEGACY</code>, those APIs return a
   *             <code>UserNotFoundException</code> exception if the user doesn't exist in the user
   *             pool.</p>
   *          <p>Defaults to <code>LEGACY</code>.</p>
   * @public
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | undefined;

  /**
   * <p>Indicates whether token revocation is activated for the user pool client. When you
   *             create a new user pool client, token revocation is activated by default.</p>
   * @public
   */
  EnableTokenRevocation?: boolean | undefined;

  /**
   * <p>When <code>EnablePropagateAdditionalUserContextData</code> is true, Amazon Cognito accepts an
   *                 <code>IpAddress</code> value that you send in the <code>UserContextData</code>
   *             parameter. The <code>UserContextData</code> parameter sends information to Amazon Cognito threat
   *             protection for risk analysis. You can send <code>UserContextData</code> when you sign in
   *             Amazon Cognito native users with the <code>InitiateAuth</code> and
   *                 <code>RespondToAuthChallenge</code> API operations.</p>
   *          <p>When <code>EnablePropagateAdditionalUserContextData</code> is false, you can't send
   *             your user's source IP address to Amazon Cognito threat protection with unauthenticated API
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

  /**
   * <p>The configuration of your app client for refresh token rotation. When enabled, your
   *             app client issues new ID, access, and refresh tokens when users renew their sessions
   *             with refresh tokens. When disabled, token refresh issues only ID and access
   *             tokens.</p>
   * @public
   */
  RefreshTokenRotation?: RefreshTokenRotationType | undefined;
}

/**
 * <p>Represents the response from the server to create a user pool client.</p>
 * @public
 */
export interface CreateUserPoolClientResponse {
  /**
   * <p>The details of the new app client.</p>
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
 * <p>The configuration for a hosted UI custom domain.</p>
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
   *             as <code>auth.example.com</code>. For prefix domains, this is the prefix alone, such as
   *                 <code>myprefix</code>. A prefix value of <code>myprefix</code> for a user pool in
   *             the <code>us-east-1</code> Region results in a domain of
   *                 <code>myprefix.auth.us-east-1.amazoncognito.com</code>.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The ID of the user pool where you want to add a domain.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The version of managed login branding that you want to apply to your domain. A value
   *             of <code>1</code> indicates hosted UI (classic) and a version of <code>2</code>
   *             indicates managed login.</p>
   *          <p>Managed login requires that your user pool be configured for any <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html">feature plan</a> other than <code>Lite</code>.</p>
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * <p>The configuration for a custom domain. Configures your domain with an Certificate Manager
   *             certificate in the <code>us-east-1</code> Region.</p>
   *          <p>Provide this parameter only if you want to use a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html">custom domain</a> for your user pool. Otherwise, you can
   *             omit this parameter and use a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-assign-domain-prefix.html">prefix domain</a> instead.</p>
   *          <p>When you create a custom domain, the passkey RP ID defaults to the custom domain. If
   *             you had a prefix domain active, this will cause passkey integration for your prefix
   *             domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey
   *             integration working, you can explicitly set RP ID to the prefix domain.</p>
   * @public
   */
  CustomDomainConfig?: CustomDomainConfigType | undefined;
}

/**
 * @public
 */
export interface CreateUserPoolDomainResponse {
  /**
   * <p>The version of managed login branding applied your domain. A value of <code>1</code>
   *             indicates hosted UI (classic) and a version of <code>2</code> indicates managed
   *             login.</p>
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * <p>The fully-qualified domain name (FQDN) of the Amazon CloudFront distribution that hosts your
   *             managed login or classic hosted UI pages. Your domain-name authority must have an alias
   *             record that points requests for your custom domain to this FQDN. Amazon Cognito returns this
   *             value if you set a custom domain with <code>CustomDomainConfig</code>. If you set an
   *             Amazon Cognito prefix domain, this parameter returns null.</p>
   * @public
   */
  CloudFrontDomain?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * <p>The name of the group that you want to delete.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID of the user pool where you want to delete the group.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityProviderRequest {
  /**
   * <p>The ID of the user pool where you want to delete the identity provider.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the IdP that you want to delete.</p>
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
export interface DeleteManagedLoginBrandingRequest {
  /**
   * <p>The ID of the managed login branding style that you want to delete.</p>
   * @public
   */
  ManagedLoginBrandingId: string | undefined;

  /**
   * <p>The ID of the user pool that contains the managed login branding style that you want
   *             to delete.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceServerRequest {
  /**
   * <p>The ID of the user pool where you want to delete the resource server.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The identifier of the resource server that you want to delete.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTermsRequest {
  /**
   * <p>The ID of the terms documents that you want to delete.</p>
   * @public
   */
  TermsId: string | undefined;

  /**
   * <p>The ID of the user pool that contains the terms documents that you want to
   *             delete.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * <p>Represents the request to delete a user.</p>
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
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
   *          <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name, for example <code>custom:department</code>.</p>
   * @public
   */
  UserAttributeNames: string[] | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
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
   * <p>The ID of the user pool that you want to delete.</p>
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
   * <p>The ID of the user pool where you want to delete the client.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the user pool app client that you want to delete.</p>
   * @public
   */
  ClientId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserPoolDomainRequest {
  /**
   * <p>The domain that you want to delete. For custom domains, this is the fully-qualified
   *             domain name like <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is the
   *             prefix alone, like <code>myprefix</code>.</p>
   * @public
   */
  Domain: string | undefined;

  /**
   * <p>The ID of the user pool where you want to delete the domain.</p>
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
export interface DeleteWebAuthnCredentialRequest {
  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken: string | undefined;

  /**
   * <p>The unique identifier of the passkey that you want to delete.</p>
   * @public
   */
  CredentialId: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebAuthnCredentialResponse {}

/**
 * @public
 */
export interface DescribeIdentityProviderRequest {
  /**
   * <p>The ID of the user pool that has the IdP that you want to describe..</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The name of the IdP that you want to describe.</p>
   * @public
   */
  ProviderName: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityProviderResponse {
  /**
   * <p>The details of the requested IdP.</p>
   * @public
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface DescribeManagedLoginBrandingRequest {
  /**
   * <p>The ID of the user pool that contains the managed login branding style that you want
   *             to get information about.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the managed login branding style that you want to get more information
   *             about.</p>
   * @public
   */
  ManagedLoginBrandingId: string | undefined;

  /**
   * <p>When <code>true</code>, returns values for branding options that are unchanged from
   *             Amazon Cognito defaults. When <code>false</code> or when you omit this parameter, returns only
   *             values that you customized in your branding style.</p>
   * @public
   */
  ReturnMergedResources?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeManagedLoginBrandingResponse {
  /**
   * <p>The details of the requested branding style.</p>
   * @public
   */
  ManagedLoginBranding?: ManagedLoginBrandingType | undefined;
}

/**
 * @public
 */
export interface DescribeManagedLoginBrandingByClientRequest {
  /**
   * <p>The ID of the user pool that contains the app client where you want more information
   *             about the managed login branding style.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The app client that's assigned to the branding style that you want more information
   *             about.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>When <code>true</code>, returns values for branding options that are unchanged from
   *             Amazon Cognito defaults. When <code>false</code> or when you omit this parameter, returns only
   *             values that you customized in your branding style.</p>
   * @public
   */
  ReturnMergedResources?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeManagedLoginBrandingByClientResponse {
  /**
   * <p>The details of the requested branding style.</p>
   * @public
   */
  ManagedLoginBranding?: ManagedLoginBrandingType | undefined;
}

/**
 * @public
 */
export interface DescribeResourceServerRequest {
  /**
   * <p>The ID of the user pool that hosts the resource server.</p>
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
   * <p>The details of the requested resource server.</p>
   * @public
   */
  ResourceServer: ResourceServerType | undefined;
}

/**
 * @public
 */
export interface DescribeRiskConfigurationRequest {
  /**
   * <p>The ID of the user pool with the risk configuration that you want to inspect. You can
   *             apply default risk configuration at the user pool level and further customize it from
   *             user pool defaults at the app-client level. Specify <code>ClientId</code> to inspect
   *             client-level configuration, or <code>UserPoolId</code> to inspect pool-level
   *             configuration.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the app client with the risk configuration that you want to inspect. You can
   *             apply default risk configuration at the user pool level and further customize it from
   *             user pool defaults at the app-client level. Specify <code>ClientId</code> to inspect
   *             client-level configuration, or <code>UserPoolId</code> to inspect pool-level
   *             configuration.</p>
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
 * <p>Settings for user pool actions when Amazon Cognito detects compromised credentials with threat
 *             protection in full-function <code>ENFORCED</code> mode.</p>
 * @public
 */
export interface CompromisedCredentialsActionsType {
  /**
   * <p>The action that Amazon Cognito takes when it detects compromised credentials.</p>
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
 * <p>Settings for compromised-credentials actions and authentication-event sources with
 *             threat protection in full-function <code>ENFORCED</code> mode.</p>
 * @public
 */
export interface CompromisedCredentialsRiskConfigurationType {
  /**
   * <p>Settings for the sign-in activity where you want to configure compromised-credentials
   *             actions. Defaults to all events.</p>
   * @public
   */
  EventFilter?: EventFilterType[] | undefined;

  /**
   * <p>Settings for the actions that you want your user pool to take when Amazon Cognito detects
   *             compromised credentials.</p>
   * @public
   */
  Actions: CompromisedCredentialsActionsType | undefined;
}

/**
 * <p>Exceptions to the risk evaluation configuration, including always-allow and
 *             always-block IP address ranges. </p>
 * @public
 */
export interface RiskExceptionConfigurationType {
  /**
   * <p>An always-block IP address list. Overrides the risk decision and always blocks
   *             authentication requests. This parameter is displayed and set in CIDR notation.</p>
   * @public
   */
  BlockedIPRangeList?: string[] | undefined;

  /**
   * <p>An always-allow IP address list. Risk detection isn't performed on the IP addresses in
   *             this range list. This parameter is displayed and set in CIDR notation.</p>
   * @public
   */
  SkippedIPRangeList?: string[] | undefined;
}

/**
 * <p>The settings of risk configuration for threat protection with threat protection in a
 *             user pool.</p>
 * @public
 */
export interface RiskConfigurationType {
  /**
   * <p>The ID of the user pool that has the risk configuration applied.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The app client where this configuration is applied. When this parameter isn't present,
   *             the risk configuration applies to all user pool app clients that don't have
   *             client-level settings.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>Settings for compromised-credentials actions and authentication types with threat
   *             protection in full-function <code>ENFORCED</code> mode.</p>
   * @public
   */
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType | undefined;

  /**
   * <p>The settings for automated responses and notification templates for adaptive
   *             authentication with threat protection.</p>
   * @public
   */
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType | undefined;

  /**
   * <p>Exceptions to the risk evaluation configuration, including always-allow and
   *             always-block IP address ranges. </p>
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
   * <p>The details of the requested risk configuration.</p>
   * @public
   */
  RiskConfiguration: RiskConfigurationType | undefined;
}

/**
 * @public
 */
export interface DescribeTermsRequest {
  /**
   * <p>The ID of the terms documents that you want to describe.</p>
   * @public
   */
  TermsId: string | undefined;

  /**
   * <p>The ID of the user pool that contains the terms documents that you want to
   *             describe.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTermsResponse {
  /**
   * <p>A summary of the requested terms documents. Includes a unique identifier for later
   *             changes to the terms documents.</p>
   * @public
   */
  Terms?: TermsType | undefined;
}

/**
 * <p>Represents the request to describe the user import job.</p>
 * @public
 */
export interface DescribeUserImportJobRequest {
  /**
   * <p>The ID of the user pool that's associated with the import job.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The Id of the user import job that you want to describe.</p>
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
   * <p>The details of the user import job. Includes logging destination, status, and the Amazon S3
   *             pre-signed URL for CSV upload.</p>
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
   * <p>The ID of the user pool you want to describe.</p>
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
   * <p>The details of the requested user pool.</p>
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
   * <p>The ID of the user pool that contains the app client you want to describe.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The ID of the app client that you want to describe.</p>
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
   * <p>The details of the request app client.</p>
   * @public
   */
  UserPoolClient?: UserPoolClientType | undefined;
}

/**
 * @public
 */
export interface DescribeUserPoolDomainRequest {
  /**
   * <p>The domain that you want to describe. For custom domains, this is the fully-qualified
   *             domain name, such as <code>auth.example.com</code>. For Amazon Cognito prefix domains, this is
   *             the prefix alone, such as <code>auth</code>.</p>
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
 * <p>A container for information about the user pool domain associated with the hosted UI
 *             and OAuth endpoints.</p>
 * @public
 */
export interface DomainDescriptionType {
  /**
   * <p>The ID of the user pool that the domain is attached to.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>The Amazon Web Services account that you created the user pool in.</p>
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
   * <p>The Amazon CloudFront endpoint that hosts your custom domain.</p>
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

  /**
   * <p>The version of managed login branding that you want to apply to your domain. A value
   *             of <code>1</code> indicates hosted UI (classic) branding and a version of <code>2</code>
   *             indicates managed login branding.</p>
   *          <p>Managed login requires that your user pool be configured for any <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html">feature plan</a> other than <code>Lite</code>.</p>
   * @public
   */
  ManagedLoginVersion?: number | undefined;
}

/**
 * @public
 */
export interface DescribeUserPoolDomainResponse {
  /**
   * <p>The details of the requested user pool domain.</p>
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
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * <p>The unique identifier, or device key, of the device that the user wants to
   *             forget.</p>
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
   * <p>The ID of the user pool app client associated with the current signed-in user.</p>
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
   * <p>Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat
   * protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito
   * when it makes API requests.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html">Collecting data for threat protection in
   * applications</a>.</p>
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * <p>The name of the user that you want to query or modify. The value of this parameter
   *             is typically your user's username, but it can be any of their alias attributes. If
   *                 <code>username</code> isn't an alias attribute in your user pool, this value
   *             must be the <code>sub</code> of a local user or the username of a user from a
   *             third-party IdP.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>Information that supports analytics outcomes with Amazon Pinpoint, including the
   * user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier,
   * email address, or phone number.</p>
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
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
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
   * <p>Information about the phone number or email address that Amazon Cognito sent the
   *             password-recovery code to.</p>
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
   * <p>The ID of the user pool that you want to import users into.</p>
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
   * <p>The ID of the requested user pool.</p>
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * <p>A comma-separated list of attributes from your user pool. Save this output to a
   *                 <code>.csv</code> file and populate it with the attributes of the users that you
   *             want to import.</p>
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
   * <p>The key of the device that you want to get information about.</p>
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * <p>A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for
   * <code>aws.cognito.signin.user.admin</code>.</p>
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
   * <p>Details of the requested device. Includes device information, last-accessed and
   *             created dates, and the device key.</p>
   * @public
   */
  Device: DeviceType | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * <p>The name of the group that you want to get information about.</p>
   * @public
   */
  GroupName: string | undefined;

  /**
   * <p>The ID of the user pool that contains the group that you want to query.</p>
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * <p>A container for the requested group. Includes description, precedence, and IAM role
   *             values.</p>
   * @public
   */
  Group?: GroupType | undefined;
}

/**
 * @public
 */
export interface GetIdentityProviderByIdentifierRequest {
  /**
   * <p>The ID of the user pool where you want to get information about the IdP.</p>
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * <p>The identifier that you assigned to your user pool. The identifier is an alternative
   *             name for an IdP that is distinct from the IdP name. For example, an IdP with a name of
   *                 <code>MyIdP</code> might have an identifier of the email domain
   *                 <code>example.com</code>.</p>
   * @public
   */
  IdpIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIdentityProviderByIdentifierResponse {
  /**
   * <p>The configuration of the IdP in your user pool. Includes additional identifiers, the
   *             IdP name and type, and trust-relationship details like the issuer URL.</p>
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
 *             logging, or of user activity log export with threat protection.</p>
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
 *             threat protection.</p>
 * @public
 */
export interface FirehoseConfigurationType {
  /**
   * <p>The ARN of an Amazon Data Firehose stream that's the destination for threat protection log
   *             export.</p>
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
 * <p>Configuration for the Amazon S3 bucket destination of user activity log export with threat
 *             protection.</p>
 * @public
 */
export interface S3ConfigurationType {
  /**
   * <p>The ARN of an Amazon S3 bucket that's the destination for threat protection log
   *             export.</p>
   * @public
   */
  BucketArn?: string | undefined;
}

/**
 * <p>The configuration of user event logs to an external Amazon Web Services service like
 *                 Amazon Data Firehose, Amazon S3, or Amazon CloudWatch Logs.</p>
 * @public
 */
export interface LogConfigurationType {
  /**
   * <p>The <code>errorlevel</code> selection of logs that a user pool sends for detailed
   *             activity logging. To send <code>userNotification</code> activity with <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/exporting-quotas-and-usage.html">information
   *                 about message delivery</a>, choose <code>ERROR</code> with
   *                 <code>CloudWatchLogsConfiguration</code>. To send <code>userAuthEvents</code>
   *             activity with user logs from threat protection with the Plus feature plan, choose
   *                 <code>INFO</code> with one of <code>CloudWatchLogsConfiguration</code>,
   *                 <code>FirehoseConfiguration</code>, or <code>S3Configuration</code>.</p>
   * @public
   */
  LogLevel: LogLevel | undefined;

  /**
   * <p>The source of events that your user pool sends for logging. To send error-level logs
   *             about user notification activity, set to <code>userNotification</code>. To send
   *             info-level logs about threat-protection user activity in user pools with the Plus
   *             feature plan, set to <code>userAuthEvents</code>.</p>
   * @public
   */
  EventSource: EventSourceName | undefined;

  /**
   * <p>The CloudWatch log group destination of user pool detailed activity logs, or of user
   *             activity log export with threat protection.</p>
   * @public
   */
  CloudWatchLogsConfiguration?: CloudWatchLogsConfigurationType | undefined;

  /**
   * <p>The Amazon S3 bucket destination of user activity log export with threat protection.
   *             To activate this setting, your user pool must be on the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html">
   *                      Plus tier</a>.</p>
   * @public
   */
  S3Configuration?: S3ConfigurationType | undefined;

  /**
   * <p>The Amazon Data Firehose stream destination of user activity log export with threat protection.
   *             To activate this setting, your user pool must be on the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html">
   *                      Plus tier</a>.</p>
   * @public
   */
  FirehoseConfiguration?: FirehoseConfigurationType | undefined;
}

/**
 * <p>The logging parameters of a user pool, as returned in the response to a
 *                 <code>GetLogDeliveryConfiguration</code> request.</p>
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
   * <p>The logging configuration of the requested user pool. Includes types of logs
   *             configured and their destinations.</p>
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
   * <p>The ID of the user pool where you want to view the signing certificate.</p>
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
   * <p>The x.509 certificate that signs SAML 2.0 authentication requests for your user
   *             pool.</p>
   * @public
   */
  Certificate?: string | undefined;
}

/**
 * @public
 */
export interface GetTokensFromRefreshTokenRequest {
  /**
   * <p>A valid refresh token that can authorize the request for new tokens. When refresh
   *             token rotation is active in the requested app client, this token is invalidated after
   *             the request is complete and after an optional grace period.</p>
   * @public
   */
  RefreshToken: string | undefined;

  /**
   * <p>The app client that issued the refresh token to the user who wants to request new
   *             tokens.</p>
   * @public
   */
  ClientId: string | undefined;

  /**
   * <p>The client secret of the requested app client, if the client has a secret.</p>
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * <p>When you enable device remembering, Amazon Cognito issues a device key that you can use for
   *             device authentication that bypasses multi-factor authentication (MFA). To implement
   *                 <code>GetTokensFromRefreshToken</code> in a user pool with device remembering, you
   *             must capture the device key from the initial authentication request. If your application
   *             doesn't provide the key of a registered device, Amazon Cognito issues a new one. You must
   *             provide the confirmed device key in this request if device remembering is enabled in
   *             your user pool.</p>
   *          <p>For more information about device remembering, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with devices</a>.</p>
   * @public
   */
  DeviceKey?: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for certain custom
   *             workflows that this action triggers.</p>
   *          <p>You create custom workflows by assigning Lambda functions to user pool triggers.
   *             When you use the <code>GetTokensFromRefreshToken</code> API action, Amazon Cognito invokes the
   *             Lambda function the pre token generation trigger.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">
   * Using Lambda triggers</a> in the <i>Amazon Cognito Developer Guide</i>.</p>
   *          <note>
   *             <p>When you use the <code>ClientMetadata</code> parameter, note that Amazon Cognito won't do the
   *                 following:</p>
   *             <ul>
   *                <li>
   *                   <p>Store the <code>ClientMetadata</code> value. This data is available only
   *                         to Lambda triggers that are assigned to a user pool to support custom
   *                         workflows. If your user pool configuration doesn't include triggers, the
   *                         <code>ClientMetadata</code> parameter serves no purpose.</p>
   *                </li>
   *                <li>
   *                   <p>Validate the <code>ClientMetadata</code> value.</p>
   *                </li>
   *                <li>
   *                   <p>Encrypt the <code>ClientMetadata</code> value. Don't send sensitive
   *                         information in this parameter.</p>
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
  ...(obj.Session && { Session: SENSITIVE_STRING }),
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
export const CompleteWebAuthnRegistrationRequestFilterSensitiveLog = (
  obj: CompleteWebAuthnRegistrationRequest
): any => ({
  ...obj,
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
  ...(obj.Session && { Session: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConfirmSignUpResponseFilterSensitiveLog = (obj: ConfirmSignUpResponse): any => ({
  ...obj,
  ...(obj.Session && { Session: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateManagedLoginBrandingRequestFilterSensitiveLog = (obj: CreateManagedLoginBrandingRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateTermsRequestFilterSensitiveLog = (obj: CreateTermsRequest): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TermsTypeFilterSensitiveLog = (obj: TermsType): any => ({
  ...obj,
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateTermsResponseFilterSensitiveLog = (obj: CreateTermsResponse): any => ({
  ...obj,
  ...(obj.Terms && { Terms: TermsTypeFilterSensitiveLog(obj.Terms) }),
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
export const DeleteWebAuthnCredentialRequestFilterSensitiveLog = (obj: DeleteWebAuthnCredentialRequest): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeManagedLoginBrandingByClientRequestFilterSensitiveLog = (
  obj: DescribeManagedLoginBrandingByClientRequest
): any => ({
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
export const DescribeTermsResponseFilterSensitiveLog = (obj: DescribeTermsResponse): any => ({
  ...obj,
  ...(obj.Terms && { Terms: TermsTypeFilterSensitiveLog(obj.Terms) }),
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
export const GetTokensFromRefreshTokenRequestFilterSensitiveLog = (obj: GetTokensFromRefreshTokenRequest): any => ({
  ...obj,
  ...(obj.RefreshToken && { RefreshToken: SENSITIVE_STRING }),
  ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});
