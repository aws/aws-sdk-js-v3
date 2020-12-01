import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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
   * <p>Specifies the recovery method for a user.</p>
   */
  Name: RecoveryOptionNameType | string | undefined;
}

export namespace RecoveryOptionType {
  export const filterSensitiveLog = (obj: RecoveryOptionType): any => ({
    ...obj,
  });
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

export namespace AccountRecoverySettingType {
  export const filterSensitiveLog = (obj: AccountRecoverySettingType): any => ({
    ...obj,
  });
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
   * <p>The event action.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>BLOCK</code> Choosing this action will block the request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MFA_IF_CONFIGURED</code> Throw MFA challenge if user has configured it,
   *                     else allow the request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>MFA_REQUIRED</code> Throw MFA challenge if user has configured it, else
   *                     block the request.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NO_ACTION</code> Allow the user sign-in.</p>
   *             </li>
   *          </ul>
   */
  EventAction: AccountTakeoverEventActionType | string | undefined;
}

export namespace AccountTakeoverActionType {
  export const filterSensitiveLog = (obj: AccountTakeoverActionType): any => ({
    ...obj,
  });
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

export namespace AccountTakeoverActionsType {
  export const filterSensitiveLog = (obj: AccountTakeoverActionsType): any => ({
    ...obj,
  });
}

/**
 * <p>The notify email type.</p>
 */
export interface NotifyEmailType {
  /**
   * <p>The subject.</p>
   */
  Subject: string | undefined;

  /**
   * <p>The HTML body.</p>
   */
  HtmlBody?: string;

  /**
   * <p>The text body.</p>
   */
  TextBody?: string;
}

export namespace NotifyEmailType {
  export const filterSensitiveLog = (obj: NotifyEmailType): any => ({
    ...obj,
  });
}

/**
 * <p>The notify configuration type.</p>
 */
export interface NotifyConfigurationType {
  /**
   * <p>The email address that is sending the email. It must be either individually verified
   *             with Amazon SES, or from a domain that has been verified with Amazon SES.</p>
   */
  From?: string;

  /**
   * <p>The destination to which the receiver of an email should reply to.</p>
   */
  ReplyTo?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the identity that is associated with the sending
   *             authorization policy. It permits Amazon Cognito to send for the email address specified
   *             in the <code>From</code> parameter.</p>
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
   * <p>The MFA email template used when MFA is challenged as part of a detected risk.</p>
   */
  MfaEmail?: NotifyEmailType;
}

export namespace NotifyConfigurationType {
  export const filterSensitiveLog = (obj: NotifyConfigurationType): any => ({
    ...obj,
  });
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
   * <p>Account takeover risk configuration actions</p>
   */
  Actions: AccountTakeoverActionsType | undefined;
}

export namespace AccountTakeoverRiskConfigurationType {
  export const filterSensitiveLog = (obj: AccountTakeoverRiskConfigurationType): any => ({
    ...obj,
  });
}

export enum AttributeDataType {
  BOOLEAN = "Boolean",
  DATETIME = "DateTime",
  NUMBER = "Number",
  STRING = "String",
}

/**
 * <p>The minimum and maximum value of an attribute that is of the number data type.</p>
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

export namespace NumberAttributeConstraintsType {
  export const filterSensitiveLog = (obj: NumberAttributeConstraintsType): any => ({
    ...obj,
  });
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

export namespace StringAttributeConstraintsType {
  export const filterSensitiveLog = (obj: StringAttributeConstraintsType): any => ({
    ...obj,
  });
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
   *             <p>We recommend that you use <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserPoolClientType.html#CognitoUserPools-Type-UserPoolClientType-WriteAttributes">WriteAttributes</a> in the user pool client to control how attributes can
   *                 be mutated for new use cases instead of using
   *                 <code>DeveloperOnlyAttribute</code>.</p>
   *         </note>
   *         <p>Specifies whether the attribute type is developer only. This attribute can only be
   *             modified by an administrator. Users will not be able to modify this attribute using
   *             their access token. For example, <code>DeveloperOnlyAttribute</code> can be modified
   *             using AdminUpdateUserAttributes but cannot be updated
   *             using UpdateUserAttributes.</p>
   */
  DeveloperOnlyAttribute?: boolean;

  /**
   * <p>Specifies whether the value of the attribute can be changed.</p>
   *         <p>For any user pool attribute that's mapped to an identity provider attribute, you must
   *             set this parameter to <code>true</code>. Amazon Cognito updates mapped attributes when
   *             users sign in to your application through an identity provider. If an attribute is
   *             immutable, Amazon Cognito throws an error when it attempts to update the attribute. For
   *             more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying Identity Provider Attribute Mappings for Your User
   *                 Pool</a>.</p>
   */
  Mutable?: boolean;

  /**
   * <p>Specifies whether a user pool attribute is required. If the attribute is required and
   *             the user does not provide a value, registration or sign-in will fail.</p>
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

export namespace SchemaAttributeType {
  export const filterSensitiveLog = (obj: SchemaAttributeType): any => ({
    ...obj,
  });
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

export namespace AddCustomAttributesRequest {
  export const filterSensitiveLog = (obj: AddCustomAttributesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the response from the server for the request to add custom
 *             attributes.</p>
 */
export interface AddCustomAttributesResponse {}

export namespace AddCustomAttributesResponse {
  export const filterSensitiveLog = (obj: AddCustomAttributesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 */
export interface InternalErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalErrorException";
  $fault: "server";
  /**
   * <p>The message returned when Amazon Cognito throws an internal error exception.</p>
   */
  message?: string;
}

export namespace InternalErrorException {
  export const filterSensitiveLog = (obj: InternalErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * <p>The message returned when the Amazon Cognito service throws an invalid parameter
   *             exception.</p>
   */
  message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when a user is not authorized.</p>
 */
export interface NotAuthorizedException extends __SmithyException, $MetadataBearer {
  name: "NotAuthorizedException";
  $fault: "client";
  /**
   * <p>The message returned when the Amazon Cognito service returns a not authorized
   *             exception.</p>
   */
  message?: string;
}

export namespace NotAuthorizedException {
  export const filterSensitiveLog = (obj: NotAuthorizedException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the Amazon Cognito service cannot find the requested
 *             resource.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message returned when the Amazon Cognito service returns a resource not found
   *             exception.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 */
export interface TooManyRequestsException extends __SmithyException, $MetadataBearer {
  name: "TooManyRequestsException";
  $fault: "client";
  /**
   * <p>The message returned when the Amazon Cognito service returns a too many requests
   *             exception.</p>
   */
  message?: string;
}

export namespace TooManyRequestsException {
  export const filterSensitiveLog = (obj: TooManyRequestsException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when you are trying to modify a user pool while a user import
 *             job is in progress for that pool.</p>
 */
export interface UserImportInProgressException extends __SmithyException, $MetadataBearer {
  name: "UserImportInProgressException";
  $fault: "client";
  /**
   * <p>The message returned when the user pool has an import job running.</p>
   */
  message?: string;
}

export namespace UserImportInProgressException {
  export const filterSensitiveLog = (obj: UserImportInProgressException): any => ({
    ...obj,
  });
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

export namespace AdminAddUserToGroupRequest {
  export const filterSensitiveLog = (obj: AdminAddUserToGroupRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>This exception is thrown when a user is not found.</p>
 */
export interface UserNotFoundException extends __SmithyException, $MetadataBearer {
  name: "UserNotFoundException";
  $fault: "client";
  /**
   * <p>The message returned when a user is not found.</p>
   */
  message?: string;
}

export namespace UserNotFoundException {
  export const filterSensitiveLog = (obj: UserNotFoundException): any => ({
    ...obj,
  });
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
   *             that this action triggers. </p>
   *         <p>If your user pool configuration includes triggers, the AdminConfirmSignUp API action
   *             invokes the AWS Lambda function that is specified for the <i>post
   *                 confirmation</i> trigger. When Amazon Cognito invokes this function, it
   *             passes a JSON payload, which the function receives as input. In this payload, the
   *                 <code>clientMetadata</code> attribute provides the data that you assigned to the
   *             ClientMetadata parameter in your AdminConfirmSignUp request. In your function code in
   *             AWS Lambda, you can process the ClientMetadata value to enhance your workflow for your
   *             specific needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace AdminConfirmSignUpRequest {
  export const filterSensitiveLog = (obj: AdminConfirmSignUpRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the response from the server for the request to confirm
 *             registration.</p>
 */
export interface AdminConfirmSignUpResponse {}

export namespace AdminConfirmSignUpResponse {
  export const filterSensitiveLog = (obj: AdminConfirmSignUpResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS
 *             Lambda response.</p>
 */
export interface InvalidLambdaResponseException extends __SmithyException, $MetadataBearer {
  name: "InvalidLambdaResponseException";
  $fault: "client";
  /**
   * <p>The message returned when the Amazon Cognito service throws an invalid AWS Lambda
   *             response exception.</p>
   */
  message?: string;
}

export namespace InvalidLambdaResponseException {
  export const filterSensitiveLog = (obj: InvalidLambdaResponseException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when a user exceeds the limit for a requested AWS
 *             resource.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The message returned when Amazon Cognito throws a limit exceeded exception.</p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the user has made too many failed attempts for a given
 *             action (e.g., sign in).</p>
 */
export interface TooManyFailedAttemptsException extends __SmithyException, $MetadataBearer {
  name: "TooManyFailedAttemptsException";
  $fault: "client";
  /**
   * <p>The message returned when the Amazon Cognito service returns a too many failed
   *             attempts exception.</p>
   */
  message?: string;
}

export namespace TooManyFailedAttemptsException {
  export const filterSensitiveLog = (obj: TooManyFailedAttemptsException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters an unexpected
 *             exception with the AWS Lambda service.</p>
 */
export interface UnexpectedLambdaException extends __SmithyException, $MetadataBearer {
  name: "UnexpectedLambdaException";
  $fault: "client";
  /**
   * <p>The message returned when the Amazon Cognito service returns an unexpected AWS Lambda
   *             exception.</p>
   */
  message?: string;
}

export namespace UnexpectedLambdaException {
  export const filterSensitiveLog = (obj: UnexpectedLambdaException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters a user validation
 *             exception with the AWS Lambda service.</p>
 */
export interface UserLambdaValidationException extends __SmithyException, $MetadataBearer {
  name: "UserLambdaValidationException";
  $fault: "client";
  /**
   * <p>The message returned when the Amazon Cognito service returns a user validation
   *             exception with the AWS Lambda service.</p>
   */
  message?: string;
}

export namespace UserLambdaValidationException {
  export const filterSensitiveLog = (obj: UserLambdaValidationException): any => ({
    ...obj,
  });
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

export namespace AttributeType {
  export const filterSensitiveLog = (obj: AttributeType): any => ({
    ...obj,
    ...(obj.Value && { Value: SENSITIVE_STRING }),
  });
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
   *             between 1 and 128 characters. After the user is created, the username cannot be
   *             changed.</p>
   */
  Username: string | undefined;

  /**
   * <p>An array of name-value pairs that contain user attributes and attribute values to be
   *             set for the user to be created. You can create a user without specifying any attributes
   *             other than <code>Username</code>. However, any attributes that you specify as required
   *             (when creating a user pool or in the <b>Attributes</b> tab of the console) must be supplied either by you (in your
   *             call to <code>AdminCreateUser</code>) or by the user (when he or she signs up in
   *             response to your welcome message).</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   *         <p>To send a message inviting the user to sign up, you must specify the user's email
   *             address or phone number. This can be done in your call to AdminCreateUser or in the
   *                 <b>Users</b> tab of the Amazon Cognito console for
   *             managing your user pools.</p>
   *         <p>In your call to <code>AdminCreateUser</code>, you can set the
   *                 <code>email_verified</code> attribute to <code>True</code>, and you can set the
   *                 <code>phone_number_verified</code> attribute to <code>True</code>. (You can also do
   *             this by calling <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminUpdateUserAttributes.html">AdminUpdateUserAttributes</a>.)</p>
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
   *         <p>To configure custom validation, you must create a Pre Sign-up Lambda trigger for the
   *             user pool as described in the Amazon Cognito Developer Guide. The Lambda trigger
   *             receives the validation data and uses it in the validation process.</p>
   *         <p>The user's validation data is not persisted.</p>
   */
  ValidationData?: AttributeType[];

  /**
   * <p>The user's temporary password. This password must conform to the password policy that
   *             you specified when you created the user pool.</p>
   *         <p>The temporary password is valid only once. To complete the Admin Create User flow, the
   *             user must enter the temporary password in the sign-in page along with a new password to
   *             be used in all future sign-ins.</p>
   *         <p>This parameter is not required. If you do not specify a value, Amazon Cognito
   *             generates one for you.</p>
   *         <p>The temporary password can only be used until the user account expiration limit that
   *             you specified when you created the user pool. To reset the account after that time
   *             limit, you must call <code>AdminCreateUser</code> again, specifying
   *                 <code>"RESEND"</code> for the <code>MessageAction</code> parameter.</p>
   */
  TemporaryPassword?: string;

  /**
   * <p>This parameter is only used if the <code>phone_number_verified</code> or
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
   * <p>Set to <code>"RESEND"</code> to resend the invitation message to a user that already
   *             exists and reset the expiration limit on the user's account. Set to
   *                 <code>"SUPPRESS"</code> to suppress sending the message. Only one value can be
   *             specified.</p>
   */
  MessageAction?: MessageActionType | string;

  /**
   * <p>Specify <code>"EMAIL"</code> if email will be used to send the welcome message.
   *             Specify <code>"SMS"</code> if the phone number will be used. The default value is
   *                 <code>"SMS"</code>. More than one value can be specified.</p>
   */
  DesiredDeliveryMediums?: (DeliveryMediumType | string)[];

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the AdminCreateUser API action, Amazon Cognito invokes the function that is
   *             assigned to the <i>pre sign-up</i> trigger. When Amazon Cognito invokes
   *             this function, it passes a JSON payload, which the function receives as input. This
   *             payload contains a <code>clientMetadata</code> attribute, which provides the data that
   *             you assigned to the ClientMetadata parameter in your AdminCreateUser request. In your
   *             function code in AWS Lambda, you can process the <code>clientMetadata</code> value to
   *             enhance your workflow for your specific needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace AdminCreateUserRequest {
  export const filterSensitiveLog = (obj: AdminCreateUserRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.UserAttributes && {
      UserAttributes: obj.UserAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
    }),
    ...(obj.ValidationData && {
      ValidationData: obj.ValidationData.map((item) => AttributeType.filterSensitiveLog(item)),
    }),
    ...(obj.TemporaryPassword && { TemporaryPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>
 *             <i>This data type is no longer supported.</i> You can use it only for
 *             SMS MFA configurations. You can't use it for TOTP software token MFA
 *             configurations.</p>
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

export namespace MFAOptionType {
  export const filterSensitiveLog = (obj: MFAOptionType): any => ({
    ...obj,
  });
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
 * <p>The user type.</p>
 */
export interface UserType {
  /**
   * <p>The user name of the user you wish to describe.</p>
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
   *                 <p>COMPROMISED - User is disabled due to a potential security threat.</p>
   *             </li>
   *             <li>
   *                 <p>UNKNOWN - User status is not known.</p>
   *             </li>
   *             <li>
   *                 <p>RESET_REQUIRED - User is confirmed, but the user must request a code and reset
   *                     his or her password before he or she can sign in.</p>
   *             </li>
   *             <li>
   *                 <p>FORCE_CHANGE_PASSWORD - The user is confirmed and the user can sign in using a
   *                     temporary password, but on first sign-in, the user must change his or her
   *                     password to a new value before doing anything else. </p>
   *             </li>
   *          </ul>
   */
  UserStatus?: UserStatusType | string;

  /**
   * <p>The MFA options for the user.</p>
   */
  MFAOptions?: MFAOptionType[];
}

export namespace UserType {
  export const filterSensitiveLog = (obj: UserType): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.Attributes && { Attributes: obj.Attributes.map((item) => AttributeType.filterSensitiveLog(item)) }),
  });
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

export namespace AdminCreateUserResponse {
  export const filterSensitiveLog = (obj: AdminCreateUserResponse): any => ({
    ...obj,
    ...(obj.User && { User: UserType.filterSensitiveLog(obj.User) }),
  });
}

/**
 * <p>This exception is thrown when a verification code fails to deliver
 *             successfully.</p>
 */
export interface CodeDeliveryFailureException extends __SmithyException, $MetadataBearer {
  name: "CodeDeliveryFailureException";
  $fault: "client";
  /**
   * <p>The message sent when a verification code fails to deliver successfully.</p>
   */
  message?: string;
}

export namespace CodeDeliveryFailureException {
  export const filterSensitiveLog = (obj: CodeDeliveryFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             password.</p>
 */
export interface InvalidPasswordException extends __SmithyException, $MetadataBearer {
  name: "InvalidPasswordException";
  $fault: "client";
  /**
   * <p>The message returned when the Amazon Cognito service throws an invalid user password
   *             exception.</p>
   */
  message?: string;
}

export namespace InvalidPasswordException {
  export const filterSensitiveLog = (obj: InvalidPasswordException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is returned when the role provided for SMS configuration does not have
 *             permission to publish using Amazon SNS.</p>
 */
export interface InvalidSmsRoleAccessPolicyException extends __SmithyException, $MetadataBearer {
  name: "InvalidSmsRoleAccessPolicyException";
  $fault: "client";
  /**
   * <p>The message retuned when the invalid SMS role access policy exception is
   *             thrown.</p>
   */
  message?: string;
}

export namespace InvalidSmsRoleAccessPolicyException {
  export const filterSensitiveLog = (obj: InvalidSmsRoleAccessPolicyException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the trust relationship is invalid for the role provided
 *             for SMS configuration. This can happen if you do not trust <b>cognito-idp.amazonaws.com</b> or the external ID provided in the role does
 *             not match what is provided in the SMS configuration for the user pool.</p>
 */
export interface InvalidSmsRoleTrustRelationshipException extends __SmithyException, $MetadataBearer {
  name: "InvalidSmsRoleTrustRelationshipException";
  $fault: "client";
  /**
   * <p>The message returned when the role trust relationship for the SMS message is
   *             invalid.</p>
   */
  message?: string;
}

export namespace InvalidSmsRoleTrustRelationshipException {
  export const filterSensitiveLog = (obj: InvalidSmsRoleTrustRelationshipException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when a precondition is not met.</p>
 */
export interface PreconditionNotMetException extends __SmithyException, $MetadataBearer {
  name: "PreconditionNotMetException";
  $fault: "client";
  /**
   * <p>The message returned when a precondition is not met.</p>
   */
  message?: string;
}

export namespace PreconditionNotMetException {
  export const filterSensitiveLog = (obj: PreconditionNotMetException): any => ({
    ...obj,
  });
}

/**
 * <p>The request failed because the user is in an unsupported state.</p>
 */
export interface UnsupportedUserStateException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedUserStateException";
  $fault: "client";
  /**
   * <p>The message returned when the user is in an unsupported state.</p>
   */
  message?: string;
}

export namespace UnsupportedUserStateException {
  export const filterSensitiveLog = (obj: UnsupportedUserStateException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when Amazon Cognito encounters a user name that already
 *             exists in the user pool.</p>
 */
export interface UsernameExistsException extends __SmithyException, $MetadataBearer {
  name: "UsernameExistsException";
  $fault: "client";
  /**
   * <p>The message returned when Amazon Cognito throws a user name exists exception.</p>
   */
  message?: string;
}

export namespace UsernameExistsException {
  export const filterSensitiveLog = (obj: UsernameExistsException): any => ({
    ...obj,
  });
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

export namespace MessageTemplateType {
  export const filterSensitiveLog = (obj: MessageTemplateType): any => ({
    ...obj,
  });
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
   * <p>The user account expiration limit, in days, after which the account is no longer
   *             usable. To reset the account after that time limit, you must call
   *                 <code>AdminCreateUser</code> again, specifying <code>"RESEND"</code> for the
   *                 <code>MessageAction</code> parameter. The default value for this parameter is 7. </p>
   *         <note>
   *             <p>If you set a value for <code>TemporaryPasswordValidityDays</code> in
   *                     <code>PasswordPolicy</code>, that value will be used and
   *                     <code>UnusedAccountValidityDays</code> will be deprecated for that user pool.
   *             </p>
   *         </note>
   */
  UnusedAccountValidityDays?: number;

  /**
   * <p>The message template to be used for the welcome message to new users.</p>
   *         <p>See also <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-message-customizations.html#cognito-user-pool-settings-user-invitation-message-customization">Customizing User Invitation Messages</a>.</p>
   */
  InviteMessageTemplate?: MessageTemplateType;
}

export namespace AdminCreateUserConfigType {
  export const filterSensitiveLog = (obj: AdminCreateUserConfigType): any => ({
    ...obj,
  });
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
   * <p>The user name of the user you wish to delete.</p>
   */
  Username: string | undefined;
}

export namespace AdminDeleteUserRequest {
  export const filterSensitiveLog = (obj: AdminDeleteUserRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
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
   * <p>An array of strings representing the user attribute names you wish to delete.</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   */
  UserAttributeNames: string[] | undefined;
}

export namespace AdminDeleteUserAttributesRequest {
  export const filterSensitiveLog = (obj: AdminDeleteUserAttributesRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the response received from the server for a request to delete user
 *             attributes.</p>
 */
export interface AdminDeleteUserAttributesResponse {}

export namespace AdminDeleteUserAttributesResponse {
  export const filterSensitiveLog = (obj: AdminDeleteUserAttributesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A container for information about an identity provider for a user pool.</p>
 */
export interface ProviderUserIdentifierType {
  /**
   * <p>The name of the provider, for example, Facebook, Google, or Login with Amazon.</p>
   */
  ProviderName?: string;

  /**
   * <p>The name of the provider attribute to link to, for example,
   *             <code>NameID</code>.</p>
   */
  ProviderAttributeName?: string;

  /**
   * <p>The value of the provider attribute to link to, for example,
   *                 <code>xxxxx_account</code>.</p>
   */
  ProviderAttributeValue?: string;
}

export namespace ProviderUserIdentifierType {
  export const filterSensitiveLog = (obj: ProviderUserIdentifierType): any => ({
    ...obj,
  });
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

export namespace AdminDisableProviderForUserRequest {
  export const filterSensitiveLog = (obj: AdminDisableProviderForUserRequest): any => ({
    ...obj,
  });
}

export interface AdminDisableProviderForUserResponse {}

export namespace AdminDisableProviderForUserResponse {
  export const filterSensitiveLog = (obj: AdminDisableProviderForUserResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when a user tries to confirm the account with an email or
 *             phone number that has already been supplied as an alias from a different account. This
 *             exception tells user that an account with this email or phone already exists.</p>
 */
export interface AliasExistsException extends __SmithyException, $MetadataBearer {
  name: "AliasExistsException";
  $fault: "client";
  /**
   * <p>The message sent to the user when an alias exists.</p>
   */
  message?: string;
}

export namespace AliasExistsException {
  export const filterSensitiveLog = (obj: AliasExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to disable any user as an administrator.</p>
 */
export interface AdminDisableUserRequest {
  /**
   * <p>The user pool ID for the user pool where you want to disable the user.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user you wish to disable.</p>
   */
  Username: string | undefined;
}

export namespace AdminDisableUserRequest {
  export const filterSensitiveLog = (obj: AdminDisableUserRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the response received from the server to disable the user as an
 *             administrator.</p>
 */
export interface AdminDisableUserResponse {}

export namespace AdminDisableUserResponse {
  export const filterSensitiveLog = (obj: AdminDisableUserResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request that enables the user as an administrator.</p>
 */
export interface AdminEnableUserRequest {
  /**
   * <p>The user pool ID for the user pool where you want to enable the user.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user you wish to enable.</p>
   */
  Username: string | undefined;
}

export namespace AdminEnableUserRequest {
  export const filterSensitiveLog = (obj: AdminEnableUserRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the response from the server for the request to enable a user as an
 *             administrator.</p>
 */
export interface AdminEnableUserResponse {}

export namespace AdminEnableUserResponse {
  export const filterSensitiveLog = (obj: AdminEnableUserResponse): any => ({
    ...obj,
  });
}

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

export namespace AdminForgetDeviceRequest {
  export const filterSensitiveLog = (obj: AdminForgetDeviceRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>This exception is thrown when the user pool configuration is invalid.</p>
 */
export interface InvalidUserPoolConfigurationException extends __SmithyException, $MetadataBearer {
  name: "InvalidUserPoolConfigurationException";
  $fault: "client";
  /**
   * <p>The message returned when the user pool configuration is invalid.</p>
   */
  message?: string;
}

export namespace InvalidUserPoolConfigurationException {
  export const filterSensitiveLog = (obj: InvalidUserPoolConfigurationException): any => ({
    ...obj,
  });
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

export namespace AdminGetDeviceRequest {
  export const filterSensitiveLog = (obj: AdminGetDeviceRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
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
   * <p>The date in which the device was last authenticated.</p>
   */
  DeviceLastAuthenticatedDate?: Date;
}

export namespace DeviceType {
  export const filterSensitiveLog = (obj: DeviceType): any => ({
    ...obj,
    ...(obj.DeviceAttributes && {
      DeviceAttributes: obj.DeviceAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
    }),
  });
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

export namespace AdminGetDeviceResponse {
  export const filterSensitiveLog = (obj: AdminGetDeviceResponse): any => ({
    ...obj,
    ...(obj.Device && { Device: DeviceType.filterSensitiveLog(obj.Device) }),
  });
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
   * <p>The user name of the user you wish to retrieve.</p>
   */
  Username: string | undefined;
}

export namespace AdminGetUserRequest {
  export const filterSensitiveLog = (obj: AdminGetUserRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the response from the server from the request to get the specified user as
 *             an administrator.</p>
 */
export interface AdminGetUserResponse {
  /**
   * <p>The user name of the user about whom you are receiving information.</p>
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
   * <p>Indicates that the status is enabled.</p>
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
   *                 <p>COMPROMISED - User is disabled due to a potential security threat.</p>
   *             </li>
   *             <li>
   *                 <p>UNKNOWN - User status is not known.</p>
   *             </li>
   *             <li>
   *                 <p>RESET_REQUIRED - User is confirmed, but the user must request a code and reset
   *                     his or her password before he or she can sign in.</p>
   *             </li>
   *             <li>
   *                 <p>FORCE_CHANGE_PASSWORD - The user is confirmed and the user can sign in using a
   *                     temporary password, but on first sign-in, the user must change his or her
   *                     password to a new value before doing anything else. </p>
   *             </li>
   *          </ul>
   */
  UserStatus?: UserStatusType | string;

  /**
   * <p>
   *             <i>This response parameter is no longer supported.</i> It provides
   *             information only about SMS MFA configurations. It doesn't provide information about TOTP
   *             software token MFA configurations. To look up information about either type of MFA
   *             configuration, use UserMFASettingList instead.</p>
   */
  MFAOptions?: MFAOptionType[];

  /**
   * <p>The user's preferred MFA setting.</p>
   */
  PreferredMfaSetting?: string;

  /**
   * <p>The MFA options that are enabled for the user. The possible values in this list are
   *                 <code>SMS_MFA</code> and <code>SOFTWARE_TOKEN_MFA</code>.</p>
   */
  UserMFASettingList?: string[];
}

export namespace AdminGetUserResponse {
  export const filterSensitiveLog = (obj: AdminGetUserResponse): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.UserAttributes && {
      UserAttributes: obj.UserAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>An Amazon Pinpoint analytics endpoint.</p>
 *         <p>An endpoint uniquely identifies a mobile device, email address, or phone number that
 *             can receive messages from Amazon Pinpoint analytics.</p>
 *         <note>
 *             <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p>
 *         </note>
 */
export interface AnalyticsMetadataType {
  /**
   * <p>The endpoint ID.</p>
   */
  AnalyticsEndpointId?: string;
}

export namespace AnalyticsMetadataType {
  export const filterSensitiveLog = (obj: AnalyticsMetadataType): any => ({
    ...obj,
  });
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
   * <p>The header name</p>
   */
  headerName?: string;

  /**
   * <p>The header value.</p>
   */
  headerValue?: string;
}

export namespace HttpHeader {
  export const filterSensitiveLog = (obj: HttpHeader): any => ({
    ...obj,
  });
}

/**
 * <p>Contextual user data type used for evaluating the risk of an unexpected event by
 *             Amazon Cognito advanced security.</p>
 */
export interface ContextDataType {
  /**
   * <p>Source IP address of your user.</p>
   */
  IpAddress: string | undefined;

  /**
   * <p>Your server endpoint where this API is invoked.</p>
   */
  ServerName: string | undefined;

  /**
   * <p>Your server path where this API is invoked. </p>
   */
  ServerPath: string | undefined;

  /**
   * <p>HttpHeaders received on your server in same order.</p>
   */
  HttpHeaders: HttpHeader[] | undefined;

  /**
   * <p>Encoded data containing device fingerprinting details, collected using the Amazon
   *             Cognito context data collection library.</p>
   */
  EncodedData?: string;
}

export namespace ContextDataType {
  export const filterSensitiveLog = (obj: ContextDataType): any => ({
    ...obj,
  });
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
   * <p>The authentication flow for this call to execute. The API action will depend on this
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
   *                         <code>SRP_A</code> and return the SRP variables to be used for next
   *                     challenge execution.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>USER_PASSWORD_AUTH</code> will take in <code>USERNAME</code> and
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
   *                   <code>USER_PASSWORD_AUTH</code>: Non-SRP authentication flow; USERNAME and
   *                     PASSWORD are passed directly. If a user migration Lambda trigger is set, this
   *                     flow will invoke the user migration Lambda if the USERNAME is not found in the
   *                     user pool. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ADMIN_USER_PASSWORD_AUTH</code>: Admin-based user password
   *                     authentication. This replaces the <code>ADMIN_NO_SRP_AUTH</code> authentication
   *                     flow. In this flow, Cognito receives the password in the request instead of
   *                     using the SRP process to verify passwords.</p>
   *             </li>
   *          </ul>
   */
  AuthFlow: AuthFlowType | string | undefined;

  /**
   * <p>The authentication parameters. These are inputs corresponding to the
   *                 <code>AuthFlow</code> that you are invoking. The required values depend on the value
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
  AuthParameters?: { [key: string]: string };

  /**
   * <p>A map of custom key-value pairs that you can provide as input for certain custom
   *             workflows that this action triggers.</p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the AdminInitiateAuth API action, Amazon Cognito invokes the AWS Lambda
   *             functions that are specified for various triggers. The ClientMetadata value is passed as
   *             input to the functions for only the following triggers:</p>
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
   *
   *         <p>When Amazon Cognito invokes the functions for these triggers, it passes a JSON
   *             payload, which the function receives as input. This payload contains a
   *                 <code>validationData</code> attribute, which provides the data that you assigned to
   *             the ClientMetadata parameter in your AdminInitiateAuth request. In your function code in
   *             AWS Lambda, you can process the <code>validationData</code> value to enhance your
   *             workflow for your specific needs.</p>
   *
   *         <p>When you use the AdminInitiateAuth API action, Amazon Cognito also invokes the
   *             functions for the following triggers, but it does not provide the ClientMetadata value
   *             as input:</p>
   *
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
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };

  /**
   * <p>The analytics metadata for collecting Amazon Pinpoint metrics for
   *                 <code>AdminInitiateAuth</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used
   *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
   *             security.</p>
   */
  ContextData?: ContextDataType;
}

export namespace AdminInitiateAuthRequest {
  export const filterSensitiveLog = (obj: AdminInitiateAuthRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
    ...(obj.AuthParameters && { AuthParameters: SENSITIVE_STRING }),
  });
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

export namespace NewDeviceMetadataType {
  export const filterSensitiveLog = (obj: NewDeviceMetadataType): any => ({
    ...obj,
  });
}

/**
 * <p>The authentication result.</p>
 */
export interface AuthenticationResultType {
  /**
   * <p>The access token.</p>
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

export namespace AuthenticationResultType {
  export const filterSensitiveLog = (obj: AuthenticationResultType): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
    ...(obj.RefreshToken && { RefreshToken: SENSITIVE_STRING }),
    ...(obj.IdToken && { IdToken: SENSITIVE_STRING }),
  });
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
   * <p>The name of the challenge which you are responding to with this call. This is returned
   *             to you in the <code>AdminInitiateAuth</code> response if you need to pass another
   *             challenge.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>MFA_SETUP</code>: If MFA is required, users who do not have at least one
   *                     of the MFA methods set up are presented with an <code>MFA_SETUP</code>
   *                     challenge. The user must set up at least one MFA type to continue to
   *                     authenticate.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SELECT_MFA_TYPE</code>: Selects the MFA type. Valid MFA options are
   *                         <code>SMS_MFA</code> for text SMS MFA, and <code>SOFTWARE_TOKEN_MFA</code>
   *                     for TOTP software token MFA.</p>
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
   *                   <code>DEVICE_SRP_AUTH</code>: If device tracking was enabled on your user pool
   *                     and the previous challenges were passed, this challenge is returned so that
   *                     Amazon Cognito can start tracking this device.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Similar to
   *                         <code>PASSWORD_VERIFIER</code>, but for devices only.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ADMIN_NO_SRP_AUTH</code>: This is returned if you need to authenticate
   *                     with <code>USERNAME</code> and <code>PASSWORD</code> directly. An app client
   *                     must be enabled to use this flow.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users which are required to change
   *                     their passwords after successful first login. This challenge should be passed
   *                     with <code>NEW_PASSWORD</code> and any other required attributes.</p>
   *             </li>
   *          </ul>
   */
  ChallengeName?: ChallengeNameType | string;

  /**
   * <p>The session which should be passed both ways in challenge-response calls to the
   *             service. If <code>AdminInitiateAuth</code> or <code>AdminRespondToAuthChallenge</code>
   *             API call determines that the caller needs to go through another challenge, they return a
   *             session with other challenge parameters. This session should be passed as it is to the
   *             next <code>AdminRespondToAuthChallenge</code> API call.</p>
   */
  Session?: string;

  /**
   * <p>The challenge parameters. These are returned to you in the
   *                 <code>AdminInitiateAuth</code> response if you need to pass another challenge. The
   *             responses in this parameter should be used to compute inputs to the next call
   *                 (<code>AdminRespondToAuthChallenge</code>).</p>
   *         <p>All challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if
   *             applicable).</p>
   *         <p>The value of the <code>USER_ID_FOR_SRP</code> attribute will be the user's actual
   *             username, not an alias (such as email address or phone number), even if you specified an
   *             alias in your call to <code>AdminInitiateAuth</code>. This is because, in the
   *                 <code>AdminRespondToAuthChallenge</code> API <code>ChallengeResponses</code>, the
   *                 <code>USERNAME</code> attribute cannot be an alias.</p>
   */
  ChallengeParameters?: { [key: string]: string };

  /**
   * <p>The result of the authentication response. This is only returned if the caller does
   *             not need to pass another challenge. If the caller does need to pass another challenge
   *             before it gets tokens, <code>ChallengeName</code>, <code>ChallengeParameters</code>, and
   *                 <code>Session</code> are returned.</p>
   */
  AuthenticationResult?: AuthenticationResultType;
}

export namespace AdminInitiateAuthResponse {
  export const filterSensitiveLog = (obj: AdminInitiateAuthResponse): any => ({
    ...obj,
    ...(obj.AuthenticationResult && {
      AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
    }),
  });
}

/**
 * <p>This exception is thrown when Amazon Cognito cannot find a multi-factor authentication
 *             (MFA) method.</p>
 */
export interface MFAMethodNotFoundException extends __SmithyException, $MetadataBearer {
  name: "MFAMethodNotFoundException";
  $fault: "client";
  /**
   * <p>The message returned when Amazon Cognito throws an MFA method not found
   *             exception.</p>
   */
  message?: string;
}

export namespace MFAMethodNotFoundException {
  export const filterSensitiveLog = (obj: MFAMethodNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when a password reset is required.</p>
 */
export interface PasswordResetRequiredException extends __SmithyException, $MetadataBearer {
  name: "PasswordResetRequiredException";
  $fault: "client";
  /**
   * <p>The message returned when a password reset is required.</p>
   */
  message?: string;
}

export namespace PasswordResetRequiredException {
  export const filterSensitiveLog = (obj: PasswordResetRequiredException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when a user is not confirmed successfully.</p>
 */
export interface UserNotConfirmedException extends __SmithyException, $MetadataBearer {
  name: "UserNotConfirmedException";
  $fault: "client";
  /**
   * <p>The message returned when a user is not confirmed successfully.</p>
   */
  message?: string;
}

export namespace UserNotConfirmedException {
  export const filterSensitiveLog = (obj: UserNotConfirmedException): any => ({
    ...obj,
  });
}

export interface AdminLinkProviderForUserRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The existing user in the user pool to be linked to the external identity provider user
   *             account. Can be a native (Username + Password) Cognito User Pools user or a federated
   *             user (for example, a SAML or Facebook user). If the user doesn't exist, an exception is
   *             thrown. This is the user that is returned when the new user (with the linked identity
   *             provider attribute) signs in.</p>
   *         <p>For a native username + password user, the <code>ProviderAttributeValue</code> for the
   *                 <code>DestinationUser</code> should be the username in the user pool. For a
   *             federated user, it should be the provider-specific <code>user_id</code>.</p>
   *         <p>The <code>ProviderAttributeName</code> of the <code>DestinationUser</code> is
   *             ignored.</p>
   *         <p>The <code>ProviderName</code> should be set to <code>Cognito</code> for users in
   *             Cognito user pools.</p>
   */
  DestinationUser: ProviderUserIdentifierType | undefined;

  /**
   * <p>An external identity provider account for a user who does not currently exist yet in
   *             the user pool. This user must be a federated user (for example, a SAML or Facebook
   *             user), not another native user.</p>
   *         <p>If the <code>SourceUser</code> is a federated social identity provider user (Facebook,
   *             Google, or Login with Amazon), you must set the <code>ProviderAttributeName</code> to
   *                 <code>Cognito_Subject</code>. For social identity providers, the
   *                 <code>ProviderName</code> will be <code>Facebook</code>, <code>Google</code>, or
   *                 <code>LoginWithAmazon</code>, and Cognito will automatically parse the Facebook,
   *             Google, and Login with Amazon tokens for <code>id</code>, <code>sub</code>, and
   *                 <code>user_id</code>, respectively. The <code>ProviderAttributeValue</code> for the
   *             user must be the same value as the <code>id</code>, <code>sub</code>, or
   *                 <code>user_id</code> value found in the social identity provider token.</p>
   *         <p></p>
   *         <p>For SAML, the <code>ProviderAttributeName</code> can be any value that matches a claim
   *             in the SAML assertion. If you wish to link SAML users based on the subject of the SAML
   *             assertion, you should map the subject to a claim through the SAML identity provider and
   *             submit that claim name as the <code>ProviderAttributeName</code>. If you set
   *                 <code>ProviderAttributeName</code> to <code>Cognito_Subject</code>, Cognito will
   *             automatically parse the default unique identifier found in the subject from the SAML
   *             token.</p>
   */
  SourceUser: ProviderUserIdentifierType | undefined;
}

export namespace AdminLinkProviderForUserRequest {
  export const filterSensitiveLog = (obj: AdminLinkProviderForUserRequest): any => ({
    ...obj,
  });
}

export interface AdminLinkProviderForUserResponse {}

export namespace AdminLinkProviderForUserResponse {
  export const filterSensitiveLog = (obj: AdminLinkProviderForUserResponse): any => ({
    ...obj,
  });
}

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

export namespace AdminListDevicesRequest {
  export const filterSensitiveLog = (obj: AdminListDevicesRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
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

export namespace AdminListDevicesResponse {
  export const filterSensitiveLog = (obj: AdminListDevicesResponse): any => ({
    ...obj,
  });
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

export namespace AdminListGroupsForUserRequest {
  export const filterSensitiveLog = (obj: AdminListGroupsForUserRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
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
   * <p>The role ARN for the group.</p>
   */
  RoleArn?: string;

  /**
   * <p>A nonnegative integer value that specifies the precedence of this group relative to
   *             the other groups that a user can belong to in the user pool. If a user belongs to two or
   *             more groups, it is the group with the highest precedence whose role ARN will be used in
   *             the <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims in the
   *             user's tokens. Groups with higher <code>Precedence</code> values take precedence over
   *             groups with lower <code>Precedence</code> values or with null <code>Precedence</code>
   *             values.</p>
   *         <p>Two groups can have the same <code>Precedence</code> value. If this happens, neither
   *             group takes precedence over the other. If two groups with the same
   *                 <code>Precedence</code> have the same role ARN, that role is used in the
   *                 <code>cognito:preferred_role</code> claim in tokens for users in each group. If the
   *             two groups have different role ARNs, the <code>cognito:preferred_role</code> claim is
   *             not set in users' tokens.</p>
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

export namespace GroupType {
  export const filterSensitiveLog = (obj: GroupType): any => ({
    ...obj,
  });
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

export namespace AdminListGroupsForUserResponse {
  export const filterSensitiveLog = (obj: AdminListGroupsForUserResponse): any => ({
    ...obj,
  });
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
   * <p>The maximum number of authentication events to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

export namespace AdminListUserAuthEventsRequest {
  export const filterSensitiveLog = (obj: AdminListUserAuthEventsRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
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
   * <p>The challenge name</p>
   */
  ChallengeName?: ChallengeName | string;

  /**
   * <p>The challenge response.</p>
   */
  ChallengeResponse?: ChallengeResponse | string;
}

export namespace ChallengeResponseType {
  export const filterSensitiveLog = (obj: ChallengeResponseType): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the user context data captured at the time of an event request.</p>
 */
export interface EventContextDataType {
  /**
   * <p>The user's IP address.</p>
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

export namespace EventContextDataType {
  export const filterSensitiveLog = (obj: EventContextDataType): any => ({
    ...obj,
  });
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

export namespace EventFeedbackType {
  export const filterSensitiveLog = (obj: EventFeedbackType): any => ({
    ...obj,
  });
}

export enum EventResponseType {
  Failure = "Failure",
  Success = "Success",
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

export namespace EventRiskType {
  export const filterSensitiveLog = (obj: EventRiskType): any => ({
    ...obj,
  });
}

export enum EventType {
  ForgotPassword = "ForgotPassword",
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
   * <p>The user context data captured at the time of an event request. It provides additional
   *             information about the client from which event the request is received.</p>
   */
  EventContextData?: EventContextDataType;

  /**
   * <p>A flag specifying the user feedback captured at the time of an event request is good
   *             or bad. </p>
   */
  EventFeedback?: EventFeedbackType;
}

export namespace AuthEventType {
  export const filterSensitiveLog = (obj: AuthEventType): any => ({
    ...obj,
  });
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

export namespace AdminListUserAuthEventsResponse {
  export const filterSensitiveLog = (obj: AdminListUserAuthEventsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when user pool add-ons are not enabled.</p>
 */
export interface UserPoolAddOnNotEnabledException extends __SmithyException, $MetadataBearer {
  name: "UserPoolAddOnNotEnabledException";
  $fault: "client";
  message?: string;
}

export namespace UserPoolAddOnNotEnabledException {
  export const filterSensitiveLog = (obj: UserPoolAddOnNotEnabledException): any => ({
    ...obj,
  });
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

export namespace AdminRemoveUserFromGroupRequest {
  export const filterSensitiveLog = (obj: AdminRemoveUserFromGroupRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
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
   * <p>The user name of the user whose password you wish to reset.</p>
   */
  Username: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the AdminResetUserPassword API action, Amazon Cognito invokes the function
   *             that is assigned to the <i>custom message</i> trigger. When Amazon Cognito
   *             invokes this function, it passes a JSON payload, which the function receives as input.
   *             This payload contains a <code>clientMetadata</code> attribute, which provides the data
   *             that you assigned to the ClientMetadata parameter in your AdminResetUserPassword
   *             request. In your function code in AWS Lambda, you can process the
   *                 <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace AdminResetUserPasswordRequest {
  export const filterSensitiveLog = (obj: AdminResetUserPasswordRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the response from the server to reset a user password as an
 *             administrator.</p>
 */
export interface AdminResetUserPasswordResponse {}

export namespace AdminResetUserPasswordResponse {
  export const filterSensitiveLog = (obj: AdminResetUserPasswordResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when Amazon Cognito is not allowed to use your email
 *             identity. HTTP status code: 400.</p>
 */
export interface InvalidEmailRoleAccessPolicyException extends __SmithyException, $MetadataBearer {
  name: "InvalidEmailRoleAccessPolicyException";
  $fault: "client";
  /**
   * <p>The message returned when you have an unverified email address or the identity policy
   *             is not set on an email address that Amazon Cognito can access.</p>
   */
  message?: string;
}

export namespace InvalidEmailRoleAccessPolicyException {
  export const filterSensitiveLog = (obj: InvalidEmailRoleAccessPolicyException): any => ({
    ...obj,
  });
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
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ADMIN_NO_SRP_AUTH</code>: <code>PASSWORD</code>, <code>USERNAME</code>,
   *                         <code>SECRET_HASH</code> (if app client is configured with client secret).
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>NEW_PASSWORD_REQUIRED</code>: <code>NEW_PASSWORD</code>, any other
   *                     required attributes, <code>USERNAME</code>, <code>SECRET_HASH</code> (if app
   *                     client is configured with client secret). </p>
   *             </li>
   *          </ul>
   *         <p>The value of the <code>USERNAME</code> attribute must be the user's actual username,
   *             not an alias (such as email address or phone number). To make this easier, the
   *                 <code>AdminInitiateAuth</code> response includes the actual username value in the
   *                 <code>USERNAMEUSER_ID_FOR_SRP</code> attribute, even if you specified an alias in
   *             your call to <code>AdminInitiateAuth</code>.</p>
   */
  ChallengeResponses?: { [key: string]: string };

  /**
   * <p>The session which should be passed both ways in challenge-response calls to the
   *             service. If <code>InitiateAuth</code> or <code>RespondToAuthChallenge</code> API call
   *             determines that the caller needs to go through another challenge, they return a session
   *             with other challenge parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   */
  Session?: string;

  /**
   * <p>The analytics metadata for collecting Amazon Pinpoint metrics for
   *                 <code>AdminRespondToAuthChallenge</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used
   *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
   *             security.</p>
   */
  ContextData?: ContextDataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the AdminRespondToAuthChallenge API action, Amazon Cognito invokes any
   *             functions that are assigned to the following triggers: <i>pre sign-up</i>,
   *                 <i>custom message</i>, <i>post authentication</i>,
   *                 <i>user migration</i>, <i>pre token generation</i>,
   *                 <i>define auth challenge</i>, <i>create auth
   *                 challenge</i>, and <i>verify auth challenge response</i>. When
   *             Amazon Cognito invokes any of these functions, it passes a JSON payload, which the
   *             function receives as input. This payload contains a <code>clientMetadata</code>
   *             attribute, which provides the data that you assigned to the ClientMetadata parameter in
   *             your AdminRespondToAuthChallenge request. In your function code in AWS Lambda, you can
   *             process the <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace AdminRespondToAuthChallengeRequest {
  export const filterSensitiveLog = (obj: AdminRespondToAuthChallengeRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
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
   * <p>The session which should be passed both ways in challenge-response calls to the
   *             service. If the caller needs to
   *             go through another challenge, they return a session with other challenge parameters.
   *             This session should be passed as it is to the next <code>RespondToAuthChallenge</code>
   *             API call.</p>
   */
  Session?: string;

  /**
   * <p>The challenge parameters. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminInitiateAuth.html">AdminInitiateAuth</a>.</p>
   */
  ChallengeParameters?: { [key: string]: string };

  /**
   * <p>The result returned by the server in response to the authentication request.</p>
   */
  AuthenticationResult?: AuthenticationResultType;
}

export namespace AdminRespondToAuthChallengeResponse {
  export const filterSensitiveLog = (obj: AdminRespondToAuthChallengeResponse): any => ({
    ...obj,
    ...(obj.AuthenticationResult && {
      AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
    }),
  });
}

/**
 * <p>This exception is thrown if the provided code does not match what the server was
 *             expecting.</p>
 */
export interface CodeMismatchException extends __SmithyException, $MetadataBearer {
  name: "CodeMismatchException";
  $fault: "client";
  /**
   * <p>The message provided when the code mismatch exception is thrown.</p>
   */
  message?: string;
}

export namespace CodeMismatchException {
  export const filterSensitiveLog = (obj: CodeMismatchException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown if a code has expired.</p>
 */
export interface ExpiredCodeException extends __SmithyException, $MetadataBearer {
  name: "ExpiredCodeException";
  $fault: "client";
  /**
   * <p>The message returned when the expired code exception is thrown.</p>
   */
  message?: string;
}

export namespace ExpiredCodeException {
  export const filterSensitiveLog = (obj: ExpiredCodeException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the software token TOTP multi-factor authentication
 *             (MFA) is not enabled for the user pool.</p>
 */
export interface SoftwareTokenMFANotFoundException extends __SmithyException, $MetadataBearer {
  name: "SoftwareTokenMFANotFoundException";
  $fault: "client";
  message?: string;
}

export namespace SoftwareTokenMFANotFoundException {
  export const filterSensitiveLog = (obj: SoftwareTokenMFANotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The type used for enabling SMS MFA at the user level. Phone numbers don't need to be verified
 *             to be used for SMS MFA. If an MFA type is enabled for a user, the user will be prompted for MFA during all sign in attempts,
 *             unless device tracking is turned on and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign in attempts,
 *             disable MFA for users and turn on Adaptive Authentication for the user pool.</p>
 */
export interface SMSMfaSettingsType {
  /**
   * <p>Specifies whether SMS text message MFA is enabled. If an MFA type is enabled for a user,
   *             the user will be prompted for MFA during all sign in attempts, unless device tracking is turned on and the device has been trusted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies whether SMS is the preferred MFA method.</p>
   */
  PreferredMfa?: boolean;
}

export namespace SMSMfaSettingsType {
  export const filterSensitiveLog = (obj: SMSMfaSettingsType): any => ({
    ...obj,
  });
}

/**
 * <p>The type used for enabling software token MFA at the user level. If an MFA type is enabled for a user, the user will be prompted for MFA during all sign in attempts, unless device tracking is turned on
 *             and the device has been trusted. If you would like MFA to be applied selectively based on the assessed risk level of sign in attempts,
 *             disable MFA for users and turn on Adaptive Authentication for the user pool.</p>
 */
export interface SoftwareTokenMfaSettingsType {
  /**
   * <p>Specifies whether software token MFA is enabled. If an MFA type is enabled for a user, the user will be prompted for MFA during
   *             all sign in attempts, unless device tracking is turned on and the device has been trusted.</p>
   */
  Enabled?: boolean;

  /**
   * <p>Specifies whether software token MFA is the preferred MFA method.</p>
   */
  PreferredMfa?: boolean;
}

export namespace SoftwareTokenMfaSettingsType {
  export const filterSensitiveLog = (obj: SoftwareTokenMfaSettingsType): any => ({
    ...obj,
  });
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

export namespace AdminSetUserMFAPreferenceRequest {
  export const filterSensitiveLog = (obj: AdminSetUserMFAPreferenceRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

export interface AdminSetUserMFAPreferenceResponse {}

export namespace AdminSetUserMFAPreferenceResponse {
  export const filterSensitiveLog = (obj: AdminSetUserMFAPreferenceResponse): any => ({
    ...obj,
  });
}

export interface AdminSetUserPasswordRequest {
  /**
   * <p>The user pool ID for the user pool where you want to set the user's password.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user whose password you wish to set.</p>
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

export namespace AdminSetUserPasswordRequest {
  export const filterSensitiveLog = (obj: AdminSetUserPasswordRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface AdminSetUserPasswordResponse {}

export namespace AdminSetUserPasswordResponse {
  export const filterSensitiveLog = (obj: AdminSetUserPasswordResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You can use this parameter to set an MFA configuration that uses the SMS delivery
 *             medium.</p>
 */
export interface AdminSetUserSettingsRequest {
  /**
   * <p>The ID of the user pool that contains the user that you are setting options
   *             for.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The user name of the user that you are setting options for.</p>
   */
  Username: string | undefined;

  /**
   * <p>You can use this parameter only to set an SMS configuration that uses SMS for
   *             delivery.</p>
   */
  MFAOptions: MFAOptionType[] | undefined;
}

export namespace AdminSetUserSettingsRequest {
  export const filterSensitiveLog = (obj: AdminSetUserSettingsRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the response from the server to set user settings as an
 *             administrator.</p>
 */
export interface AdminSetUserSettingsResponse {}

export namespace AdminSetUserSettingsResponse {
  export const filterSensitiveLog = (obj: AdminSetUserSettingsResponse): any => ({
    ...obj,
  });
}

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

export namespace AdminUpdateAuthEventFeedbackRequest {
  export const filterSensitiveLog = (obj: AdminUpdateAuthEventFeedbackRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

export interface AdminUpdateAuthEventFeedbackResponse {}

export namespace AdminUpdateAuthEventFeedbackResponse {
  export const filterSensitiveLog = (obj: AdminUpdateAuthEventFeedbackResponse): any => ({
    ...obj,
  });
}

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

export namespace AdminUpdateDeviceStatusRequest {
  export const filterSensitiveLog = (obj: AdminUpdateDeviceStatusRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>The status response from the request to update the device, as an administrator.</p>
 */
export interface AdminUpdateDeviceStatusResponse {}

export namespace AdminUpdateDeviceStatusResponse {
  export const filterSensitiveLog = (obj: AdminUpdateDeviceStatusResponse): any => ({
    ...obj,
  });
}

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
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the AdminUpdateUserAttributes API action, Amazon Cognito invokes the
   *             function that is assigned to the <i>custom message</i> trigger. When
   *             Amazon Cognito invokes this function, it passes a JSON payload, which the function
   *             receives as input. This payload contains a <code>clientMetadata</code> attribute, which
   *             provides the data that you assigned to the ClientMetadata parameter in your
   *             AdminUpdateUserAttributes request. In your function code in AWS Lambda, you can process
   *             the <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace AdminUpdateUserAttributesRequest {
  export const filterSensitiveLog = (obj: AdminUpdateUserAttributesRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.UserAttributes && {
      UserAttributes: obj.UserAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>Represents the response from the server for the request to update user attributes as
 *             an administrator.</p>
 */
export interface AdminUpdateUserAttributesResponse {}

export namespace AdminUpdateUserAttributesResponse {
  export const filterSensitiveLog = (obj: AdminUpdateUserAttributesResponse): any => ({
    ...obj,
  });
}

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

export namespace AdminUserGlobalSignOutRequest {
  export const filterSensitiveLog = (obj: AdminUserGlobalSignOutRequest): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>The global sign-out response, as an administrator.</p>
 */
export interface AdminUserGlobalSignOutResponse {}

export namespace AdminUserGlobalSignOutResponse {
  export const filterSensitiveLog = (obj: AdminUserGlobalSignOutResponse): any => ({
    ...obj,
  });
}

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
 * <p>The Amazon Pinpoint analytics configuration for collecting metrics for a user
 *             pool.</p>
 *         <note>
 *             <p>In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1.
 *                 In regions where Pinpoint is available, Cognito User Pools will
 *                 support sending events to Amazon Pinpoint projects within that same region.
 *             </p>
 *         </note>
 */
export interface AnalyticsConfigurationType {
  /**
   * <p>The application ID for an Amazon Pinpoint application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon Pinpoint project. You can use the Amazon Pinpoint
   *         project for Pinpoint integration with the chosen User Pool Client.
   *         Amazon Cognito publishes events to the pinpoint project declared by the app ARN.</p>
   */
  ApplicationArn?: string;

  /**
   * <p>The ARN of an IAM role that authorizes Amazon Cognito to publish events to Amazon
   *             Pinpoint analytics.</p>
   */
  RoleArn?: string;

  /**
   * <p>The external ID.</p>
   */
  ExternalId?: string;

  /**
   * <p>If <code>UserDataShared</code> is <code>true</code>, Amazon Cognito will include user
   *             data in the events it publishes to Amazon Pinpoint analytics.</p>
   */
  UserDataShared?: boolean;
}

export namespace AnalyticsConfigurationType {
  export const filterSensitiveLog = (obj: AnalyticsConfigurationType): any => ({
    ...obj,
  });
}

export interface AssociateSoftwareTokenRequest {
  /**
   * <p>The access token.</p>
   */
  AccessToken?: string;

  /**
   * <p>The session which should be passed both ways in challenge-response calls to the
   *             service. This allows authentication of the user as part of the MFA setup process.</p>
   */
  Session?: string;
}

export namespace AssociateSoftwareTokenRequest {
  export const filterSensitiveLog = (obj: AssociateSoftwareTokenRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
}

export interface AssociateSoftwareTokenResponse {
  /**
   * <p>A unique generated shared secret code that is used in the TOTP algorithm to generate a
   *             one time code.</p>
   */
  SecretCode?: string;

  /**
   * <p>The session which should be passed both ways in challenge-response calls to the
   *             service. This allows authentication of the user as part of the MFA setup process.</p>
   */
  Session?: string;
}

export namespace AssociateSoftwareTokenResponse {
  export const filterSensitiveLog = (obj: AssociateSoftwareTokenResponse): any => ({
    ...obj,
    ...(obj.SecretCode && { SecretCode: SENSITIVE_STRING }),
  });
}

/**
 * <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  /**
   * <p>The message provided when the concurrent exception is thrown.</p>
   */
  message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
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
   * <p>The access token.</p>
   */
  AccessToken: string | undefined;
}

export namespace ChangePasswordRequest {
  export const filterSensitiveLog = (obj: ChangePasswordRequest): any => ({
    ...obj,
    ...(obj.PreviousPassword && { PreviousPassword: SENSITIVE_STRING }),
    ...(obj.ProposedPassword && { ProposedPassword: SENSITIVE_STRING }),
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The response from the server to the change password request.</p>
 */
export interface ChangePasswordResponse {}

export namespace ChangePasswordResponse {
  export const filterSensitiveLog = (obj: ChangePasswordResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The device verifier against which it will be authenticated.</p>
 */
export interface DeviceSecretVerifierConfigType {
  /**
   * <p>The password verifier.</p>
   */
  PasswordVerifier?: string;

  /**
   * <p>The salt.</p>
   */
  Salt?: string;
}

export namespace DeviceSecretVerifierConfigType {
  export const filterSensitiveLog = (obj: DeviceSecretVerifierConfigType): any => ({
    ...obj,
  });
}

/**
 * <p>Confirms the device request.</p>
 */
export interface ConfirmDeviceRequest {
  /**
   * <p>The access token.</p>
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

export namespace ConfirmDeviceRequest {
  export const filterSensitiveLog = (obj: ConfirmDeviceRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Confirms the device response.</p>
 */
export interface ConfirmDeviceResponse {
  /**
   * <p>Indicates whether the user confirmation is necessary to confirm the device
   *             response.</p>
   */
  UserConfirmationNecessary?: boolean;
}

export namespace ConfirmDeviceResponse {
  export const filterSensitiveLog = (obj: ConfirmDeviceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contextual data such as the user's device fingerprint, IP address, or location used
 *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
 *             security.</p>
 */
export interface UserContextDataType {
  /**
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used
   *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
   *             security.</p>
   */
  EncodedData?: string;
}

export namespace UserContextDataType {
  export const filterSensitiveLog = (obj: UserContextDataType): any => ({
    ...obj,
  });
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
   * <p>The confirmation code sent by a user's request to retrieve a forgotten password. For
   *             more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ForgotPassword.html">ForgotPassword</a>.</p>
   */
  ConfirmationCode: string | undefined;

  /**
   * <p>The password sent by a user's request to retrieve a forgotten password.</p>
   */
  Password: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for
   *                 <code>ConfirmForgotPassword</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used
   *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
   *             security.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the ConfirmForgotPassword API action, Amazon Cognito invokes the function
   *             that is assigned to the <i>post confirmation</i> trigger. When Amazon
   *             Cognito invokes this function, it passes a JSON payload, which the function receives as
   *             input. This payload contains a <code>clientMetadata</code> attribute, which provides the
   *             data that you assigned to the ClientMetadata parameter in your ConfirmForgotPassword
   *             request. In your function code in AWS Lambda, you can process the
   *                 <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace ConfirmForgotPasswordRequest {
  export const filterSensitiveLog = (obj: ConfirmForgotPasswordRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
    ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>The response from the server that results from a user's request to retrieve a
 *             forgotten password.</p>
 */
export interface ConfirmForgotPasswordResponse {}

export namespace ConfirmForgotPasswordResponse {
  export const filterSensitiveLog = (obj: ConfirmForgotPasswordResponse): any => ({
    ...obj,
  });
}

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
   * <p>The user name of the user whose registration you wish to confirm.</p>
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
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for
   *                 <code>ConfirmSignUp</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used
   *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
   *             security.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the ConfirmSignUp API action, Amazon Cognito invokes the function that is
   *             assigned to the <i>post confirmation</i> trigger. When Amazon Cognito
   *             invokes this function, it passes a JSON payload, which the function receives as input.
   *             This payload contains a <code>clientMetadata</code> attribute, which provides the data
   *             that you assigned to the ClientMetadata parameter in your ConfirmSignUp request. In your
   *             function code in AWS Lambda, you can process the <code>clientMetadata</code> value to
   *             enhance your workflow for your specific needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace ConfirmSignUpRequest {
  export const filterSensitiveLog = (obj: ConfirmSignUpRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
    ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the response from the server for the registration confirmation.</p>
 */
export interface ConfirmSignUpResponse {}

export namespace ConfirmSignUpResponse {
  export const filterSensitiveLog = (obj: ConfirmSignUpResponse): any => ({
    ...obj,
  });
}

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
   * <p>The role ARN for the group.</p>
   */
  RoleArn?: string;

  /**
   * <p>A nonnegative integer value that specifies the precedence of this group relative to
   *             the other groups that a user can belong to in the user pool. Zero is the highest
   *             precedence value. Groups with lower <code>Precedence</code> values take precedence over
   *             groups with higher or null <code>Precedence</code> values. If a user belongs to two or
   *             more groups, it is the group with the lowest precedence value whose role ARN will be
   *             used in the <code>cognito:roles</code> and <code>cognito:preferred_role</code> claims in
   *             the user's tokens.</p>
   *         <p>Two groups can have the same <code>Precedence</code> value. If this happens, neither
   *             group takes precedence over the other. If two groups with the same
   *                 <code>Precedence</code> have the same role ARN, that role is used in the
   *                 <code>cognito:preferred_role</code> claim in tokens for users in each group. If the
   *             two groups have different role ARNs, the <code>cognito:preferred_role</code> claim is
   *             not set in users' tokens.</p>
   *         <p>The default <code>Precedence</code> value is null.</p>
   */
  Precedence?: number;
}

export namespace CreateGroupRequest {
  export const filterSensitiveLog = (obj: CreateGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateGroupResponse {
  /**
   * <p>The group object for the group.</p>
   */
  Group?: GroupType;
}

export namespace CreateGroupResponse {
  export const filterSensitiveLog = (obj: CreateGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when Amazon Cognito encounters a group that already exists in
 *             the user pool.</p>
 */
export interface GroupExistsException extends __SmithyException, $MetadataBearer {
  name: "GroupExistsException";
  $fault: "client";
  message?: string;
}

export namespace GroupExistsException {
  export const filterSensitiveLog = (obj: GroupExistsException): any => ({
    ...obj,
  });
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
   * <p>The identity provider name.</p>
   */
  ProviderName: string | undefined;

  /**
   * <p>The identity provider type.</p>
   */
  ProviderType: IdentityProviderTypeType | string | undefined;

  /**
   * <p>The identity provider details. The following list describes the provider detail keys
   *             for each identity provider type.</p>
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
   *                     <p>For Facebook:</p>
   *                     <ul>
   *                   <li>
   *                             <p>client_id</p>
   *                         </li>
   *                   <li>
   *                             <p>client_secret</p>
   *                         </li>
   *                   <li>
   *                             <p>authorize_scopes</p>
   *                         </li>
   *                   <li>
   *                             <p>api_version</p>
   *                         </li>
   *                </ul>
   *                 </li>
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
   *                         <p>authorize_url <i>if not available from discovery URL specified
   *                                 by oidc_issuer key</i>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>token_url <i>if not available from discovery URL specified by
   *                                 oidc_issuer key</i>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>attributes_url <i>if not available from discovery URL specified
   *                                 by oidc_issuer key</i>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>jwks_uri <i>if not available from discovery URL specified by
   *                                 oidc_issuer key</i>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For SAML providers:</p>
   *                 <ul>
   *                   <li>
   *                         <p>MetadataFile OR MetadataURL</p>
   *                     </li>
   *                   <li>
   *                         <p>IDPSignout <i>optional</i>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  ProviderDetails: { [key: string]: string } | undefined;

  /**
   * <p>A mapping of identity provider attributes to standard and custom user pool
   *             attributes.</p>
   */
  AttributeMapping?: { [key: string]: string };

  /**
   * <p>A list of identity provider identifiers.</p>
   */
  IdpIdentifiers?: string[];
}

export namespace CreateIdentityProviderRequest {
  export const filterSensitiveLog = (obj: CreateIdentityProviderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A container for information about an identity provider.</p>
 */
export interface IdentityProviderType {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The identity provider name.</p>
   */
  ProviderName?: string;

  /**
   * <p>The identity provider type.</p>
   */
  ProviderType?: IdentityProviderTypeType | string;

  /**
   * <p>The identity provider details. The following list describes the provider detail keys
   *             for each identity provider type.</p>
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
   *                         <p>authorize_url <i>if not available from discovery URL specified
   *                                 by oidc_issuer key</i>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>token_url <i>if not available from discovery URL specified by
   *                                 oidc_issuer key</i>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>attributes_url <i>if not available from discovery URL specified
   *                                 by oidc_issuer key</i>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>jwks_uri <i>if not available from discovery URL specified by
   *                                 oidc_issuer key</i>
   *                      </p>
   *                     </li>
   *                   <li>
   *                         <p>authorize_scopes</p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For SAML providers:</p>
   *                 <ul>
   *                   <li>
   *                         <p>MetadataFile OR MetadataURL</p>
   *                     </li>
   *                   <li>
   *                         <p>IDPSignOut <i>optional</i>
   *                      </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  ProviderDetails?: { [key: string]: string };

  /**
   * <p>A mapping of identity provider attributes to standard and custom user pool
   *             attributes.</p>
   */
  AttributeMapping?: { [key: string]: string };

  /**
   * <p>A list of identity provider identifiers.</p>
   */
  IdpIdentifiers?: string[];

  /**
   * <p>The date the identity provider was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The date the identity provider was created.</p>
   */
  CreationDate?: Date;
}

export namespace IdentityProviderType {
  export const filterSensitiveLog = (obj: IdentityProviderType): any => ({
    ...obj,
  });
}

export interface CreateIdentityProviderResponse {
  /**
   * <p>The newly created identity provider object.</p>
   */
  IdentityProvider: IdentityProviderType | undefined;
}

export namespace CreateIdentityProviderResponse {
  export const filterSensitiveLog = (obj: CreateIdentityProviderResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the provider is already supported by the user
 *             pool.</p>
 */
export interface DuplicateProviderException extends __SmithyException, $MetadataBearer {
  name: "DuplicateProviderException";
  $fault: "client";
  message?: string;
}

export namespace DuplicateProviderException {
  export const filterSensitiveLog = (obj: DuplicateProviderException): any => ({
    ...obj,
  });
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

export namespace ResourceServerScopeType {
  export const filterSensitiveLog = (obj: ResourceServerScopeType): any => ({
    ...obj,
  });
}

export interface CreateResourceServerRequest {
  /**
   * <p>The user pool ID for the user pool.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>A unique resource server identifier for the resource server. This could be an HTTPS
   *             endpoint where the resource server is located. For example,
   *                 <code>https://my-weather-api.example.com</code>.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>A friendly name for the resource server.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of scopes. Each scope is map, where the keys are <code>name</code> and
   *                 <code>description</code>.</p>
   */
  Scopes?: ResourceServerScopeType[];
}

export namespace CreateResourceServerRequest {
  export const filterSensitiveLog = (obj: CreateResourceServerRequest): any => ({
    ...obj,
  });
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

export namespace ResourceServerType {
  export const filterSensitiveLog = (obj: ResourceServerType): any => ({
    ...obj,
  });
}

export interface CreateResourceServerResponse {
  /**
   * <p>The newly created resource server.</p>
   */
  ResourceServer: ResourceServerType | undefined;
}

export namespace CreateResourceServerResponse {
  export const filterSensitiveLog = (obj: CreateResourceServerResponse): any => ({
    ...obj,
  });
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
   * <p>The role ARN for the Amazon CloudWatch Logging role for the user import job.</p>
   */
  CloudWatchLogsRoleArn: string | undefined;
}

export namespace CreateUserImportJobRequest {
  export const filterSensitiveLog = (obj: CreateUserImportJobRequest): any => ({
    ...obj,
  });
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
   *                     24-48 hours. All data associated with the job was deleted, and the job cannot be
   *                     started.</p>
   *             </li>
   *          </ul>
   */
  Status?: UserImportJobStatusType | string;

  /**
   * <p>The role ARN for the Amazon CloudWatch Logging role for the user import job. For more
   *             information, see "Creating the CloudWatch Logs IAM Role" in the Amazon Cognito Developer
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
   * <p>The number of users that could not be imported.</p>
   */
  FailedUsers?: number;

  /**
   * <p>The message returned when the user import job is completed.</p>
   */
  CompletionMessage?: string;
}

export namespace UserImportJobType {
  export const filterSensitiveLog = (obj: UserImportJobType): any => ({
    ...obj,
  });
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

export namespace CreateUserImportJobResponse {
  export const filterSensitiveLog = (obj: CreateUserImportJobResponse): any => ({
    ...obj,
  });
}

export enum VerifiedAttributeType {
  EMAIL = "email",
  PHONE_NUMBER = "phone_number",
}

/**
 * <p>The configuration for the user pool's device tracking.</p>
 */
export interface DeviceConfigurationType {
  /**
   * <p>Indicates whether a challenge is required on a new device. Only applicable to a new
   *             device.</p>
   */
  ChallengeRequiredOnNewDevice?: boolean;

  /**
   * <p>If true, a device is only remembered on user prompt.</p>
   */
  DeviceOnlyRememberedOnUserPrompt?: boolean;
}

export namespace DeviceConfigurationType {
  export const filterSensitiveLog = (obj: DeviceConfigurationType): any => ({
    ...obj,
  });
}

export enum EmailSendingAccountType {
  COGNITO_DEFAULT = "COGNITO_DEFAULT",
  DEVELOPER = "DEVELOPER",
}

/**
 * <p>The email configuration type. </p>
 *          <note>
 *             <p>Amazon Cognito has specific regions for use with Amazon SES. For more information on the supported regions, see
 *             <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html">Email Settings for Amazon Cognito User Pools</a>.</p>
 *          </note>
 */
export interface EmailConfigurationType {
  /**
   * <p>The Amazon Resource Name (ARN) of a verified email address in Amazon SES. This email
   *             address is used in one of the following ways, depending on the value that you specify
   *             for the <code>EmailSendingAccount</code> parameter:</p>
   *         <ul>
   *             <li>
   *                 <p>If you specify <code>COGNITO_DEFAULT</code>, Amazon Cognito uses this address
   *                     as the custom FROM address when it emails your users by using its built-in email
   *                     account.</p>
   *             </li>
   *             <li>
   *                 <p>If you specify <code>DEVELOPER</code>, Amazon Cognito emails your users with
   *                     this address by calling Amazon SES on your behalf.</p>
   *             </li>
   *          </ul>
   */
  SourceArn?: string;

  /**
   * <p>The destination to which the receiver of the email should reply to.</p>
   */
  ReplyToEmailAddress?: string;

  /**
   * <p>Specifies whether Amazon Cognito emails your users by using its built-in email
   *             functionality or your Amazon SES email configuration. Specify one of the following
   *             values:</p>
   *         <dl>
   *             <dt>COGNITO_DEFAULT</dt>
   *             <dd>
   *                     <p>When Amazon Cognito emails your users, it uses its built-in email
   *                         functionality. When you use the default option, Amazon Cognito allows only a
   *                         limited number of emails each day for your user pool. For typical production
   *                         environments, the default email limit is below the required delivery volume.
   *                         To achieve a higher delivery volume, specify DEVELOPER to use your Amazon
   *                         SES email configuration.</p>
   *
   *                     <p>To look up the email delivery limit for the default option, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/limits.html">Limits in Amazon Cognito</a> in the <i>Amazon Cognito
   *                             Developer Guide</i>.</p>
   *                     <p>The default FROM address is no-reply@verificationemail.com. To customize
   *                         the FROM address, provide the ARN of an Amazon SES verified email address
   *                         for the <code>SourceArn</code> parameter.</p>
   *                     <p>
   *                         If EmailSendingAccount is COGNITO_DEFAULT, the following parameters aren't allowed:</p>
   *
   *                         <ul>
   *                   <li>
   *                      <p>EmailVerificationMessage</p>
   *                   </li>
   *                   <li>
   *                      <p>EmailVerificationSubject</p>
   *                   </li>
   *                   <li>
   *                      <p>InviteMessageTemplate.EmailMessage</p>
   *                   </li>
   *                   <li>
   *                      <p>InviteMessageTemplate.EmailSubject</p>
   *                   </li>
   *                   <li>
   *                      <p>VerificationMessageTemplate.EmailMessage</p>
   *                   </li>
   *                   <li>
   *                      <p>VerificationMessageTemplate.EmailMessageByLink</p>
   *                   </li>
   *                   <li>
   *                      <p>VerificationMessageTemplate.EmailSubject,</p>
   *                   </li>
   *                   <li>
   *                      <p>VerificationMessageTemplate.EmailSubjectByLink</p>
   *                   </li>
   *                </ul>
   *
   *
   *                     <note>
   *                   <p>DEVELOPER EmailSendingAccount is required.</p>
   *                </note>
   *                 </dd>
   *             <dt>DEVELOPER</dt>
   *             <dd>
   *                     <p>When Amazon Cognito emails your users, it uses your Amazon SES
   *                         configuration. Amazon Cognito calls Amazon SES on your behalf to send email
   *                         from your verified email address. When you use this option, the email
   *                         delivery limits are the same limits that apply to your Amazon SES verified
   *                         email address in your AWS account.</p>
   *                     <p>If you use this option, you must provide the ARN of an Amazon SES verified
   *                         email address for the <code>SourceArn</code> parameter.</p>
   *                     <p>Before Amazon Cognito can email your users, it requires additional
   *                         permissions to call Amazon SES on your behalf. When you update your user
   *                         pool with this option, Amazon Cognito creates a <i>service-linked
   *                             role</i>, which is a type of IAM role, in your AWS account. This
   *                         role contains the permissions that allow Amazon Cognito to access Amazon SES
   *                         and send email messages with your address. For more information about the
   *                         service-linked role that Amazon Cognito creates, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/using-service-linked-roles.html">Using Service-Linked Roles for Amazon
   *                             Cognito</a> in the <i>Amazon Cognito Developer
   *                             Guide</i>.</p>
   *                 </dd>
   *          </dl>
   */
  EmailSendingAccount?: EmailSendingAccountType | string;

  /**
   * <p>Identifies either the sender’s email address or the sender’s name with their email
   *             address. For example, <code>testuser@example.com</code> or <code>Test User
   *                 <testuser@example.com></code>. This address will appear before the body of the
   *             email.</p>
   */
  From?: string;

  /**
   * <p>The set of configuration rules that can be applied to emails sent using Amazon SES. A
   *             configuration set is applied to an email by including a reference to the configuration
   *             set in the headers of the email. Once applied, all of the rules in that configuration
   *             set are applied to the email. Configuration sets can be used to apply the following
   *             types of rules to emails: </p>
   *         <ul>
   *             <li>
   *                 <p>Event publishing – Amazon SES can track the number of send, delivery, open,
   *                     click, bounce, and complaint events for each email sent. Use event publishing to
   *                     send information about these events to other AWS services such as SNS and
   *                     CloudWatch.</p>
   *             </li>
   *             <li>
   *                 <p>IP pool management – When leasing dedicated IP addresses with Amazon SES, you
   *                     can create groups of IP addresses, called dedicated IP pools. You can then
   *                     associate the dedicated IP pools with configuration sets.</p>
   *             </li>
   *          </ul>
   */
  ConfigurationSet?: string;
}

export namespace EmailConfigurationType {
  export const filterSensitiveLog = (obj: EmailConfigurationType): any => ({
    ...obj,
  });
}

export enum CustomEmailSenderLambdaVersionType {
  V1_0 = "V1_0",
}

/**
 * <p>A custom email sender Lambda configuration type.</p>
 */
export interface CustomEmailLambdaVersionConfigType {
  /**
   * <p>The Lambda version represents the signature of the "request" attribute in the "event" information Amazon Cognito passes to your custom email Lambda function.
   *             The only supported value is <code>V1_0</code>.</p>
   */
  LambdaVersion: CustomEmailSenderLambdaVersionType | string | undefined;

  /**
   * <p>The Lambda Amazon Resource Name of the Lambda function that Amazon Cognito triggers to send email notifications to users.</p>
   */
  LambdaArn: string | undefined;
}

export namespace CustomEmailLambdaVersionConfigType {
  export const filterSensitiveLog = (obj: CustomEmailLambdaVersionConfigType): any => ({
    ...obj,
  });
}

export enum CustomSMSSenderLambdaVersionType {
  V1_0 = "V1_0",
}

/**
 * <p>A custom SMS sender Lambda configuration type.</p>
 */
export interface CustomSMSLambdaVersionConfigType {
  /**
   * <p>The Lambda version represents the signature of the "request" attribute in the "event" information Amazon Cognito passes to your custom SMS Lambda function.
   *             The only supported value is <code>V1_0</code>.</p>
   */
  LambdaVersion: CustomSMSSenderLambdaVersionType | string | undefined;

  /**
   * <p>The Lambda Amazon Resource Name of the Lambda function that Amazon Cognito triggers to send SMS notifications to users.</p>
   */
  LambdaArn: string | undefined;
}

export namespace CustomSMSLambdaVersionConfigType {
  export const filterSensitiveLog = (obj: CustomSMSLambdaVersionConfigType): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for AWS Lambda triggers.</p>
 */
export interface LambdaConfigType {
  /**
   * <p>A pre-registration AWS Lambda trigger.</p>
   */
  PreSignUp?: string;

  /**
   * <p>A custom Message AWS Lambda trigger.</p>
   */
  CustomMessage?: string;

  /**
   * <p>A post-confirmation AWS Lambda trigger.</p>
   */
  PostConfirmation?: string;

  /**
   * <p>A pre-authentication AWS Lambda trigger.</p>
   */
  PreAuthentication?: string;

  /**
   * <p>A post-authentication AWS Lambda trigger.</p>
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
   * <p>A custom SMS sender AWS Lambda trigger.</p>
   */
  CustomSMSSender?: CustomSMSLambdaVersionConfigType;

  /**
   * <p>A custom email sender AWS Lambda trigger.</p>
   */
  CustomEmailSender?: CustomEmailLambdaVersionConfigType;

  /**
   * <p>The Amazon Resource Name of Key Management Service <a href="/kms/latest/developerguide/concepts.html#master_keys">Customer master keys</a>
   *             . Amazon Cognito uses the key to encrypt codes and temporary passwords sent to
   *             <code>CustomEmailSender</code> and <code>CustomSMSSender</code>.</p>
   */
  KMSKeyID?: string;
}

export namespace LambdaConfigType {
  export const filterSensitiveLog = (obj: LambdaConfigType): any => ({
    ...obj,
  });
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
   * <p>The minimum length of the password policy that you have set. Cannot be less than
   *             6.</p>
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
   * <p>In the password policy you have set, refers to the number of days a temporary password
   *             is valid. If the user does not sign-in during this time, their password will need to be
   *             reset by an administrator.</p>
   *         <note>
   *             <p>When you set <code>TemporaryPasswordValidityDays</code> for a user pool, you will
   *                 no longer be able to set the deprecated <code>UnusedAccountValidityDays</code> value
   *                 for that user pool.</p>
   *         </note>
   */
  TemporaryPasswordValidityDays?: number;
}

export namespace PasswordPolicyType {
  export const filterSensitiveLog = (obj: PasswordPolicyType): any => ({
    ...obj,
  });
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

export namespace UserPoolPolicyType {
  export const filterSensitiveLog = (obj: UserPoolPolicyType): any => ({
    ...obj,
  });
}

/**
 * <p>The SMS configuration type that includes the settings the Cognito User Pool needs to
 *             call for the Amazon SNS service to send an SMS message from your AWS account. The
 *             Cognito User Pool makes the request to the Amazon SNS Service by using an AWS IAM role
 *             that you provide for your AWS account.</p>
 */
export interface SmsConfigurationType {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) caller.
   *             This is the ARN of the IAM role in your AWS account which Cognito will use to send SMS
   *             messages. SMS messages are subject to a <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html">spending limit</a>.
   *         </p>
   */
  SnsCallerArn: string | undefined;

  /**
   * <p>The external ID is a value that we recommend you use to add security to your IAM role
   *             which is used to call Amazon SNS to send SMS messages for your user pool. If you provide
   *             an <code>ExternalId</code>, the Cognito User Pool will include it when attempting to
   *             assume your IAM role, so that you can set your roles trust policy to require the
   *                 <code>ExternalID</code>. If you use the Cognito Management Console to create a role
   *             for SMS MFA, Cognito will create a role with the required permissions and a trust policy
   *             that demonstrates use of the <code>ExternalId</code>.</p>
   */
  ExternalId?: string;
}

export namespace SmsConfigurationType {
  export const filterSensitiveLog = (obj: SmsConfigurationType): any => ({
    ...obj,
  });
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
   * <p>Specifies whether username case sensitivity will be applied for all users in the user
   *             pool through Cognito APIs.</p>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>True</code>
   *                   </b>: Enables case sensitivity
   *                     for all username input. When this option is set to <code>True</code>, users must
   *                     sign in using the exact capitalization of their given username. For example,
   *                     “UserName”. This is the default value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>
   *                      <code>False</code>
   *                   </b>: Enables case
   *                     insensitivity for all username input. For example, when this option is set to
   *                         <code>False</code>, users will be able to sign in using either "username" or
   *                     "Username". This option also enables both <code>preferred_username</code> and
   *                         <code>email</code> alias to be case insensitive, in addition to the
   *                         <code>username</code> attribute.</p>
   *             </li>
   *          </ul>
   */
  CaseSensitive: boolean | undefined;
}

export namespace UsernameConfigurationType {
  export const filterSensitiveLog = (obj: UsernameConfigurationType): any => ({
    ...obj,
  });
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

export namespace UserPoolAddOnsType {
  export const filterSensitiveLog = (obj: UserPoolAddOnsType): any => ({
    ...obj,
  });
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
   * <p>The SMS message template.</p>
   */
  SmsMessage?: string;

  /**
   * <p>The email message template. EmailMessage is allowed only if <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">
   *             EmailSendingAccount</a> is DEVELOPER.
   *          </p>
   */
  EmailMessage?: string;

  /**
   * <p>The subject line for the email message template. EmailSubject is allowed only if <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a>
   *             is DEVELOPER.
   *           </p>
   */
  EmailSubject?: string;

  /**
   * <p>The email message template for sending a confirmation link to the user. EmailMessageByLink is allowed only if <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">
   *             EmailSendingAccount</a> is DEVELOPER.</p>
   */
  EmailMessageByLink?: string;

  /**
   * <p>The subject line for the email message template for sending a confirmation link to the
   *             user. EmailSubjectByLink is allowed only <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">
   *                 EmailSendingAccount</a> is DEVELOPER.</p>
   */
  EmailSubjectByLink?: string;

  /**
   * <p>The default email option.</p>
   */
  DefaultEmailOption?: DefaultEmailOptionType | string;
}

export namespace VerificationMessageTemplateType {
  export const filterSensitiveLog = (obj: VerificationMessageTemplateType): any => ({
    ...obj,
  });
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
   * <p>The Lambda trigger configuration information for the new user pool.</p>
   *         <note>
   *             <p>In a push model, event sources (such as Amazon S3 and custom applications) need
   *                 permission to invoke a function. So you will need to make an extra call to add
   *                 permission for these event sources to invoke your Lambda function.</p>
   *             <p></p>
   *             <p>For more information on using the Lambda API to add permission, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_AddPermission.html">
   *                     AddPermission </a>. </p>
   *             <p>For adding permission using the AWS CLI, see <a href="https://docs.aws.amazon.com/cli/latest/reference/lambda/add-permission.html"> add-permission
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
   * <p>Specifies whether email addresses or phone numbers can be specified as usernames when
   *             a user signs up.</p>
   */
  UsernameAttributes?: (UsernameAttributeType | string)[];

  /**
   * <p>A string representing the SMS verification message.</p>
   */
  SmsVerificationMessage?: string;

  /**
   * <p>A string representing the email verification message. EmailVerificationMessage is allowed only if <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is DEVELOPER. </p>
   */
  EmailVerificationMessage?: string;

  /**
   * <p>A string representing the email verification subject.  EmailVerificationSubject is allowed only if <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount">EmailSendingAccount</a> is DEVELOPER. </p>
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
   * <p>The device configuration.</p>
   */
  DeviceConfiguration?: DeviceConfigurationType;

  /**
   * <p>The email configuration.</p>
   */
  EmailConfiguration?: EmailConfigurationType;

  /**
   * <p>The SMS configuration.</p>
   */
  SmsConfiguration?: SmsConfigurationType;

  /**
   * <p>The tag keys and values to assign to the user pool. A tag is a label that you can use
   *             to categorize and manage user pools in different ways, such as by purpose, owner,
   *             environment, or other criteria.</p>
   */
  UserPoolTags?: { [key: string]: string };

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
   * <p>Used to enable advanced security risk detection. Set the key
   *                 <code>AdvancedSecurityMode</code> to the value "AUDIT".</p>
   */
  UserPoolAddOns?: UserPoolAddOnsType;

  /**
   * <p>You can choose to set case sensitivity on the username input for the selected sign-in
   *             option. For example, when this is set to <code>False</code>, users will be able to sign
   *             in using either "username" or "Username". This configuration is immutable once it has
   *             been set. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UsernameConfigurationType.html">UsernameConfigurationType</a>.</p>
   */
  UsernameConfiguration?: UsernameConfigurationType;

  /**
   * <p>Use this setting to define which verified available method a user can use to recover
   *             their password when they call <code>ForgotPassword</code>. It allows you to define a
   *             preferred method when a user has more than one method available. With this setting, SMS
   *             does not qualify for a valid password recovery mechanism if the user also has SMS MFA
   *             enabled. In the absence of this setting, Cognito uses the legacy behavior to determine
   *             the recovery method where SMS is preferred over email.</p>
   */
  AccountRecoverySetting?: AccountRecoverySettingType;
}

export namespace CreateUserPoolRequest {
  export const filterSensitiveLog = (obj: CreateUserPoolRequest): any => ({
    ...obj,
  });
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
   * <p>The AWS Lambda triggers associated with the user pool.</p>
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
   * <p>Specifies the attributes that are auto-verified in a user pool.</p>
   */
  AutoVerifiedAttributes?: (VerifiedAttributeType | string)[];

  /**
   * <p>Specifies the attributes that are aliased in a user pool.</p>
   */
  AliasAttributes?: (AliasAttributeType | string)[];

  /**
   * <p>Specifies whether email addresses or phone numbers can be specified as usernames when
   *             a user signs up.</p>
   */
  UsernameAttributes?: (UsernameAttributeType | string)[];

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
  VerificationMessageTemplate?: VerificationMessageTemplateType;

  /**
   * <p>The contents of the SMS authentication message.</p>
   */
  SmsAuthenticationMessage?: string;

  /**
   * <p>Can be one of the following values:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>OFF</code> - MFA tokens are not required and cannot be specified during
   *                     user registration.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ON</code> - MFA tokens are required for all user registrations. You can
   *                     only specify required when you are initially creating a user pool.</p>
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
   * <p>The device configuration.</p>
   */
  DeviceConfiguration?: DeviceConfigurationType;

  /**
   * <p>A number estimating the size of the user pool.</p>
   */
  EstimatedNumberOfUsers?: number;

  /**
   * <p>The email configuration.</p>
   */
  EmailConfiguration?: EmailConfigurationType;

  /**
   * <p>The SMS configuration.</p>
   */
  SmsConfiguration?: SmsConfigurationType;

  /**
   * <p>The tags that are assigned to the user pool. A tag is a label that you can apply to
   *             user pools to categorize and manage them in different ways, such as by purpose, owner,
   *             environment, or other criteria.</p>
   */
  UserPoolTags?: { [key: string]: string };

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
   * <p>A custom domain name that you provide to Amazon Cognito. This parameter applies only
   *             if you use a custom domain to host the sign-up and sign-in pages for your application.
   *             For example: <code>auth.example.com</code>.</p>
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
   * <p>You can choose to enable case sensitivity on the username input for the selected
   *             sign-in option. For example, when this is set to <code>False</code>, users will be able
   *             to sign in using either "username" or "Username". This configuration is immutable once
   *             it has been set. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UsernameConfigurationType.html">UsernameConfigurationType</a>.</p>
   */
  UsernameConfiguration?: UsernameConfigurationType;

  /**
   * <p>The Amazon Resource Name (ARN) for the user pool.</p>
   */
  Arn?: string;

  /**
   * <p>Use this setting to define which verified available method a user can use to recover
   *             their password when they call <code>ForgotPassword</code>. It allows you to define a
   *             preferred method when a user has more than one method available. With this setting, SMS
   *             does not qualify for a valid password recovery mechanism if the user also has SMS MFA
   *             enabled. In the absence of this setting, Cognito uses the legacy behavior to determine
   *             the recovery method where SMS is preferred over email.</p>
   */
  AccountRecoverySetting?: AccountRecoverySettingType;
}

export namespace UserPoolType {
  export const filterSensitiveLog = (obj: UserPoolType): any => ({
    ...obj,
  });
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

export namespace CreateUserPoolResponse {
  export const filterSensitiveLog = (obj: CreateUserPoolResponse): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when a user pool tag cannot be set or updated.</p>
 */
export interface UserPoolTaggingException extends __SmithyException, $MetadataBearer {
  name: "UserPoolTaggingException";
  $fault: "client";
  message?: string;
}

export namespace UserPoolTaggingException {
  export const filterSensitiveLog = (obj: UserPoolTaggingException): any => ({
    ...obj,
  });
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
 * <p>The data type for TokenValidityUnits that specifics the time measurements for token validity.</p>
 */
export interface TokenValidityUnitsType {
  /**
   * <p> A time unit in “seconds”, “minutes”, “hours” or “days” for the value in AccessTokenValidity, defaults to hours.</p>
   */
  AccessToken?: TimeUnitsType | string;

  /**
   * <p>A time unit in “seconds”, “minutes”, “hours” or “days” for the value in IdTokenValidity, defaults to hours.</p>
   */
  IdToken?: TimeUnitsType | string;

  /**
   * <p>A time unit in “seconds”, “minutes”, “hours” or “days” for the value in RefreshTokenValidity, defaults to days.</p>
   */
  RefreshToken?: TimeUnitsType | string;
}

export namespace TokenValidityUnitsType {
  export const filterSensitiveLog = (obj: TokenValidityUnitsType): any => ({
    ...obj,
  });
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
   * <p>The time limit, in days, after which the refresh token is no longer valid and cannot
   *             be used.</p>
   */
  RefreshTokenValidity?: number;

  /**
   * <p>The time limit, between 5 minutes and 1 day, after which the access token is no longer valid and cannot be used. This value will be overridden if
   *             you have entered a value in TokenValidityUnits.</p>
   */
  AccessTokenValidity?: number;

  /**
   * <p>The time limit, between 5 minutes and 1 day, after which the ID token is no longer valid and cannot be used. This value will be overridden if
   *             you have entered a value in TokenValidityUnits.</p>
   */
  IdTokenValidity?: number;

  /**
   * <p>The units in which the validity times are represented in. Default for RefreshToken is days, and default for ID and access tokens are hours.</p>
   */
  TokenValidityUnits?: TokenValidityUnitsType;

  /**
   * <p>The read attributes.</p>
   */
  ReadAttributes?: string[];

  /**
   * <p>The user pool attributes that the app client can write to.</p>
   *         <p>If your app client allows users to sign in through an identity provider, this array
   *             must include all attributes that are mapped to identity provider attributes. Amazon
   *             Cognito updates mapped attributes when users sign in to your application through an
   *             identity provider. If your app client lacks write access to a mapped attribute, Amazon
   *             Cognito throws an error when it attempts to update the attribute. For more information,
   *             see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html">Specifying Identity Provider Attribute Mappings for Your User
   *                 Pool</a>.</p>
   */
  WriteAttributes?: string[];

  /**
   * <p>The authentication flows that are supported by the user pool clients. Flow names
   *             without the <code>ALLOW_</code> prefix are deprecated in favor of new names with the
   *                 <code>ALLOW_</code> prefix. Note that values with <code>ALLOW_</code> prefix cannot
   *             be used along with values without <code>ALLOW_</code> prefix.</p>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_ADMIN_USER_PASSWORD_AUTH</code>: Enable admin based user password
   *                     authentication flow <code>ADMIN_USER_PASSWORD_AUTH</code>. This setting replaces
   *                     the <code>ADMIN_NO_SRP_AUTH</code> setting. With this authentication flow,
   *                     Cognito receives the password in the request instead of using the SRP (Secure
   *                     Remote Password protocol) protocol to verify passwords.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_CUSTOM_AUTH</code>: Enable Lambda trigger based
   *                     authentication.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_USER_PASSWORD_AUTH</code>: Enable user password-based
   *                     authentication. In this flow, Cognito receives the password in the request
   *                     instead of using the SRP protocol to verify passwords.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_USER_SRP_AUTH</code>: Enable SRP based authentication.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_REFRESH_TOKEN_AUTH</code>: Enable authflow to refresh
   *                     tokens.</p>
   *             </li>
   *          </ul>
   */
  ExplicitAuthFlows?: (ExplicitAuthFlowsType | string)[];

  /**
   * <p>A list of provider names for the identity providers that are supported on this client.
   *             The following are supported: <code>COGNITO</code>, <code>Facebook</code>,
   *                 <code>Google</code> and <code>LoginWithAmazon</code>.</p>
   */
  SupportedIdentityProviders?: string[];

  /**
   * <p>A list of allowed redirect (callback) URLs for the identity providers.</p>
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
   *         <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing
   *             purposes only.</p>
   *         <p>App callback URLs such as myapp://example are also supported.</p>
   */
  CallbackURLs?: string[];

  /**
   * <p>A list of allowed logout URLs for the identity providers.</p>
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
   *         <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing
   *             purposes only.</p>
   *         <p>App callback URLs such as myapp://example are also supported.</p>
   */
  DefaultRedirectURI?: string;

  /**
   * <p>The allowed OAuth flows.</p>
   *         <p>Set to <code>code</code> to initiate a code grant flow, which provides an
   *             authorization code as the response. This code can be exchanged for access tokens with
   *             the token endpoint.</p>
   *         <p>Set to <code>implicit</code> to specify that the client should get the access token
   *             (and, optionally, ID token, based on scopes) directly.</p>
   *         <p>Set to <code>client_credentials</code> to specify that the client should get the
   *             access token (and, optionally, ID token, based on scopes) from the token endpoint using
   *             a combination of client and client_secret.</p>
   */
  AllowedOAuthFlows?: (OAuthFlowType | string)[];

  /**
   * <p>The allowed OAuth scopes. Possible values provided by OAuth are: <code>phone</code>,
   *                 <code>email</code>, <code>openid</code>, and <code>profile</code>. Possible values
   *             provided by AWS are: <code>aws.cognito.signin.user.admin</code>. Custom scopes created
   *             in Resource Servers are also supported.</p>
   */
  AllowedOAuthScopes?: string[];

  /**
   * <p>Set to true if the client is allowed to follow the OAuth protocol when interacting
   *             with Cognito user pools.</p>
   */
  AllowedOAuthFlowsUserPoolClient?: boolean;

  /**
   * <p>The Amazon Pinpoint analytics configuration for collecting metrics for this user
   *             pool.</p>
   *         <note>
   *             <p>In regions where Pinpoint is not available, Cognito User Pools only supports sending events to Amazon Pinpoint projects in us-east-1.
   *                 In regions where Pinpoint is available, Cognito User Pools will
   *                 support sending events to Amazon Pinpoint projects within that same region.
   *             </p>
   *         </note>
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType;

  /**
   * <p>Use this setting to choose which errors and responses are returned by Cognito APIs
   *             during authentication, account confirmation, and password recovery when the user does
   *             not exist in the user pool. When set to <code>ENABLED</code> and the user does not
   *             exist, authentication returns an error indicating either the username or password was
   *             incorrect, and account confirmation and password recovery return a response indicating a
   *             code was sent to a simulated destination. When set to <code>LEGACY</code>, those APIs
   *             will return a <code>UserNotFoundException</code> exception if the user does not exist in
   *             the user pool.</p>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code> - This prevents user existence-related errors.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>LEGACY</code> - This represents the old behavior of Cognito where user
   *                     existence related errors are not prevented.</p>
   *             </li>
   *          </ul>
   *
   *
   *         <note>
   *             <p>After February 15th 2020, the value of <code>PreventUserExistenceErrors</code>
   *                 will default to <code>ENABLED</code> for newly created user pool clients if no value
   *                 is provided.</p>
   *         </note>
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | string;
}

export namespace CreateUserPoolClientRequest {
  export const filterSensitiveLog = (obj: CreateUserPoolClientRequest): any => ({
    ...obj,
  });
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
   * <p>The time limit, in days, after which the refresh token is no longer valid and cannot
   *             be used.</p>
   */
  RefreshTokenValidity?: number;

  /**
   * <p>The time limit, specified by tokenValidityUnits, defaulting to hours, after which the access token is no longer valid and cannot be used.</p>
   */
  AccessTokenValidity?: number;

  /**
   * <p>The time limit, specified by tokenValidityUnits, defaulting to hours, after which the refresh token is no longer valid and cannot be used.</p>
   */
  IdTokenValidity?: number;

  /**
   * <p>The time units used to specify the token validity times of their respective token.</p>
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
   * <p>The authentication flows that are supported by the user pool clients. Flow names
   *             without the <code>ALLOW_</code> prefix are deprecated in favor of new names with the
   *                 <code>ALLOW_</code> prefix. Note that values with <code>ALLOW_</code> prefix cannot
   *             be used along with values without <code>ALLOW_</code> prefix.</p>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_ADMIN_USER_PASSWORD_AUTH</code>: Enable admin based user password
   *                     authentication flow <code>ADMIN_USER_PASSWORD_AUTH</code>. This setting replaces
   *                     the <code>ADMIN_NO_SRP_AUTH</code> setting. With this authentication flow,
   *                     Cognito receives the password in the request instead of using the SRP (Secure
   *                     Remote Password protocol) protocol to verify passwords.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_CUSTOM_AUTH</code>: Enable Lambda trigger based
   *                     authentication.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_USER_PASSWORD_AUTH</code>: Enable user password-based
   *                     authentication. In this flow, Cognito receives the password in the request
   *                     instead of using the SRP protocol to verify passwords.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_USER_SRP_AUTH</code>: Enable SRP based authentication.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALLOW_REFRESH_TOKEN_AUTH</code>: Enable authflow to refresh
   *                     tokens.</p>
   *             </li>
   *          </ul>
   */
  ExplicitAuthFlows?: (ExplicitAuthFlowsType | string)[];

  /**
   * <p>A list of provider names for the identity providers that are supported on this
   *             client.</p>
   */
  SupportedIdentityProviders?: string[];

  /**
   * <p>A list of allowed redirect (callback) URLs for the identity providers.</p>
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
   *         <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing
   *             purposes only.</p>
   *         <p>App callback URLs such as myapp://example are also supported.</p>
   */
  CallbackURLs?: string[];

  /**
   * <p>A list of allowed logout URLs for the identity providers.</p>
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
   *         <p>Amazon Cognito requires HTTPS over HTTP except for http://localhost for testing
   *             purposes only.</p>
   *         <p>App callback URLs such as myapp://example are also supported.</p>
   */
  DefaultRedirectURI?: string;

  /**
   * <p>The allowed OAuth flows.</p>
   *         <p>Set to <code>code</code> to initiate a code grant flow, which provides an
   *             authorization code as the response. This code can be exchanged for access tokens with
   *             the token endpoint.</p>
   *         <p>Set to <code>implicit</code> to specify that the client should get the access token
   *             (and, optionally, ID token, based on scopes) directly.</p>
   *         <p>Set to <code>client_credentials</code> to specify that the client should get the
   *             access token (and, optionally, ID token, based on scopes) from the token endpoint using
   *             a combination of client and client_secret.</p>
   */
  AllowedOAuthFlows?: (OAuthFlowType | string)[];

  /**
   * <p>The allowed OAuth scopes. Possible values provided by OAuth are: <code>phone</code>,
   *                 <code>email</code>, <code>openid</code>, and <code>profile</code>. Possible values
   *             provided by AWS are: <code>aws.cognito.signin.user.admin</code>. Custom scopes created
   *             in Resource Servers are also supported.</p>
   */
  AllowedOAuthScopes?: string[];

  /**
   * <p>Set to true if the client is allowed to follow the OAuth protocol when interacting
   *             with Cognito user pools.</p>
   */
  AllowedOAuthFlowsUserPoolClient?: boolean;

  /**
   * <p>The Amazon Pinpoint analytics configuration for the user pool client.</p>
   *         <note>
   *             <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p>
   *         </note>
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType;

  /**
   * <p>Use this setting to choose which errors and responses are returned by Cognito APIs
   *             during authentication, account confirmation, and password recovery when the user does
   *             not exist in the user pool. When set to <code>ENABLED</code> and the user does not
   *             exist, authentication returns an error indicating either the username or password was
   *             incorrect, and account confirmation and password recovery return a response indicating a
   *             code was sent to a simulated destination. When set to <code>LEGACY</code>, those APIs
   *             will return a <code>UserNotFoundException</code> exception if the user does not exist in
   *             the user pool.</p>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code> - This prevents user existence-related errors.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>LEGACY</code> - This represents the old behavior of Cognito where user
   *                     existence related errors are not prevented.</p>
   *             </li>
   *          </ul>
   *
   *
   *         <note>
   *             <p>After February 15th 2020, the value of <code>PreventUserExistenceErrors</code>
   *                 will default to <code>ENABLED</code> for newly created user pool clients if no value
   *                 is provided.</p>
   *         </note>
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | string;
}

export namespace UserPoolClientType {
  export const filterSensitiveLog = (obj: UserPoolClientType): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
    ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
  });
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

export namespace CreateUserPoolClientResponse {
  export const filterSensitiveLog = (obj: CreateUserPoolClientResponse): any => ({
    ...obj,
    ...(obj.UserPoolClient && { UserPoolClient: UserPoolClientType.filterSensitiveLog(obj.UserPoolClient) }),
  });
}

/**
 * <p>This exception is thrown when the specified OAuth flow is invalid.</p>
 */
export interface InvalidOAuthFlowException extends __SmithyException, $MetadataBearer {
  name: "InvalidOAuthFlowException";
  $fault: "client";
  message?: string;
}

export namespace InvalidOAuthFlowException {
  export const filterSensitiveLog = (obj: InvalidOAuthFlowException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the specified scope does not exist.</p>
 */
export interface ScopeDoesNotExistException extends __SmithyException, $MetadataBearer {
  name: "ScopeDoesNotExistException";
  $fault: "client";
  message?: string;
}

export namespace ScopeDoesNotExistException {
  export const filterSensitiveLog = (obj: ScopeDoesNotExistException): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for a custom domain that hosts the sign-up and sign-in webpages for
 *             your application.</p>
 */
export interface CustomDomainConfigType {
  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Certificate Manager SSL certificate. You use
   *             this certificate for the subdomain of your custom domain.</p>
   */
  CertificateArn: string | undefined;
}

export namespace CustomDomainConfigType {
  export const filterSensitiveLog = (obj: CustomDomainConfigType): any => ({
    ...obj,
  });
}

export interface CreateUserPoolDomainRequest {
  /**
   * <p>The domain string.</p>
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

export namespace CreateUserPoolDomainRequest {
  export const filterSensitiveLog = (obj: CreateUserPoolDomainRequest): any => ({
    ...obj,
  });
}

export interface CreateUserPoolDomainResponse {
  /**
   * <p>The Amazon CloudFront endpoint that you use as the target of the alias that you set up
   *             with your Domain Name Service (DNS) provider.</p>
   */
  CloudFrontDomain?: string;
}

export namespace CreateUserPoolDomainResponse {
  export const filterSensitiveLog = (obj: CreateUserPoolDomainResponse): any => ({
    ...obj,
  });
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

export namespace DeleteGroupRequest {
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteIdentityProviderRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The identity provider name.</p>
   */
  ProviderName: string | undefined;
}

export namespace DeleteIdentityProviderRequest {
  export const filterSensitiveLog = (obj: DeleteIdentityProviderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>This exception is thrown when the specified identifier is not supported.</p>
 */
export interface UnsupportedIdentityProviderException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedIdentityProviderException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedIdentityProviderException {
  export const filterSensitiveLog = (obj: UnsupportedIdentityProviderException): any => ({
    ...obj,
  });
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

export namespace DeleteResourceServerRequest {
  export const filterSensitiveLog = (obj: DeleteResourceServerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to delete a user.</p>
 */
export interface DeleteUserRequest {
  /**
   * <p>The access token from a request to delete a user.</p>
   */
  AccessToken: string | undefined;
}

export namespace DeleteUserRequest {
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the request to delete user attributes.</p>
 */
export interface DeleteUserAttributesRequest {
  /**
   * <p>An array of strings representing the user attribute names you wish to delete.</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   */
  UserAttributeNames: string[] | undefined;

  /**
   * <p>The access token used in the request to delete user attributes.</p>
   */
  AccessToken: string | undefined;
}

export namespace DeleteUserAttributesRequest {
  export const filterSensitiveLog = (obj: DeleteUserAttributesRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the response from the server to delete user attributes.</p>
 */
export interface DeleteUserAttributesResponse {}

export namespace DeleteUserAttributesResponse {
  export const filterSensitiveLog = (obj: DeleteUserAttributesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to delete a user pool.</p>
 */
export interface DeleteUserPoolRequest {
  /**
   * <p>The user pool ID for the user pool you want to delete.</p>
   */
  UserPoolId: string | undefined;
}

export namespace DeleteUserPoolRequest {
  export const filterSensitiveLog = (obj: DeleteUserPoolRequest): any => ({
    ...obj,
  });
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

export namespace DeleteUserPoolClientRequest {
  export const filterSensitiveLog = (obj: DeleteUserPoolClientRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
}

export interface DeleteUserPoolDomainRequest {
  /**
   * <p>The domain string.</p>
   */
  Domain: string | undefined;

  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;
}

export namespace DeleteUserPoolDomainRequest {
  export const filterSensitiveLog = (obj: DeleteUserPoolDomainRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserPoolDomainResponse {}

export namespace DeleteUserPoolDomainResponse {
  export const filterSensitiveLog = (obj: DeleteUserPoolDomainResponse): any => ({
    ...obj,
  });
}

export interface DescribeIdentityProviderRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The identity provider name.</p>
   */
  ProviderName: string | undefined;
}

export namespace DescribeIdentityProviderRequest {
  export const filterSensitiveLog = (obj: DescribeIdentityProviderRequest): any => ({
    ...obj,
  });
}

export interface DescribeIdentityProviderResponse {
  /**
   * <p>The identity provider that was deleted.</p>
   */
  IdentityProvider: IdentityProviderType | undefined;
}

export namespace DescribeIdentityProviderResponse {
  export const filterSensitiveLog = (obj: DescribeIdentityProviderResponse): any => ({
    ...obj,
  });
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

export namespace DescribeResourceServerRequest {
  export const filterSensitiveLog = (obj: DescribeResourceServerRequest): any => ({
    ...obj,
  });
}

export interface DescribeResourceServerResponse {
  /**
   * <p>The resource server.</p>
   */
  ResourceServer: ResourceServerType | undefined;
}

export namespace DescribeResourceServerResponse {
  export const filterSensitiveLog = (obj: DescribeResourceServerResponse): any => ({
    ...obj,
  });
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

export namespace DescribeRiskConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeRiskConfigurationRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
}

export enum CompromisedCredentialsEventActionType {
  BLOCK = "BLOCK",
  NO_ACTION = "NO_ACTION",
}

/**
 * <p>The compromised credentials actions type</p>
 */
export interface CompromisedCredentialsActionsType {
  /**
   * <p>The event action.</p>
   */
  EventAction: CompromisedCredentialsEventActionType | string | undefined;
}

export namespace CompromisedCredentialsActionsType {
  export const filterSensitiveLog = (obj: CompromisedCredentialsActionsType): any => ({
    ...obj,
  });
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

export namespace CompromisedCredentialsRiskConfigurationType {
  export const filterSensitiveLog = (obj: CompromisedCredentialsRiskConfigurationType): any => ({
    ...obj,
  });
}

/**
 * <p>The type of the configuration to override the risk decision.</p>
 */
export interface RiskExceptionConfigurationType {
  /**
   * <p>Overrides the risk decision to always block the pre-authentication requests. The IP
   *             range is in CIDR notation: a compact representation of an IP address and its associated
   *             routing prefix.</p>
   */
  BlockedIPRangeList?: string[];

  /**
   * <p>Risk detection is not performed on the IP addresses in the range list. The IP range is
   *             in CIDR notation.</p>
   */
  SkippedIPRangeList?: string[];
}

export namespace RiskExceptionConfigurationType {
  export const filterSensitiveLog = (obj: RiskExceptionConfigurationType): any => ({
    ...obj,
  });
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
   * <p>The compromised credentials risk configuration object including the
   *                 <code>EventFilter</code> and the <code>EventAction</code>
   *          </p>
   */
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType;

  /**
   * <p>The account takeover risk configuration object including the
   *                 <code>NotifyConfiguration</code> object and <code>Actions</code> to take in the case
   *             of an account takeover.</p>
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

export namespace RiskConfigurationType {
  export const filterSensitiveLog = (obj: RiskConfigurationType): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
}

export interface DescribeRiskConfigurationResponse {
  /**
   * <p>The risk configuration.</p>
   */
  RiskConfiguration: RiskConfigurationType | undefined;
}

export namespace DescribeRiskConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeRiskConfigurationResponse): any => ({
    ...obj,
    ...(obj.RiskConfiguration && {
      RiskConfiguration: RiskConfigurationType.filterSensitiveLog(obj.RiskConfiguration),
    }),
  });
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

export namespace DescribeUserImportJobRequest {
  export const filterSensitiveLog = (obj: DescribeUserImportJobRequest): any => ({
    ...obj,
  });
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

export namespace DescribeUserImportJobResponse {
  export const filterSensitiveLog = (obj: DescribeUserImportJobResponse): any => ({
    ...obj,
  });
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

export namespace DescribeUserPoolRequest {
  export const filterSensitiveLog = (obj: DescribeUserPoolRequest): any => ({
    ...obj,
  });
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

export namespace DescribeUserPoolResponse {
  export const filterSensitiveLog = (obj: DescribeUserPoolResponse): any => ({
    ...obj,
  });
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

export namespace DescribeUserPoolClientRequest {
  export const filterSensitiveLog = (obj: DescribeUserPoolClientRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
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

export namespace DescribeUserPoolClientResponse {
  export const filterSensitiveLog = (obj: DescribeUserPoolClientResponse): any => ({
    ...obj,
    ...(obj.UserPoolClient && { UserPoolClient: UserPoolClientType.filterSensitiveLog(obj.UserPoolClient) }),
  });
}

export interface DescribeUserPoolDomainRequest {
  /**
   * <p>The domain string.</p>
   */
  Domain: string | undefined;
}

export namespace DescribeUserPoolDomainRequest {
  export const filterSensitiveLog = (obj: DescribeUserPoolDomainRequest): any => ({
    ...obj,
  });
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
   * <p>The AWS account ID for the user pool owner.</p>
   */
  AWSAccountId?: string;

  /**
   * <p>The domain string.</p>
   */
  Domain?: string;

  /**
   * <p>The S3 bucket where the static files for this domain are stored.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The ARN of the CloudFront distribution.</p>
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

export namespace DomainDescriptionType {
  export const filterSensitiveLog = (obj: DomainDescriptionType): any => ({
    ...obj,
  });
}

export interface DescribeUserPoolDomainResponse {
  /**
   * <p>A domain description object containing information about the domain.</p>
   */
  DomainDescription?: DomainDescriptionType;
}

export namespace DescribeUserPoolDomainResponse {
  export const filterSensitiveLog = (obj: DescribeUserPoolDomainResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to forget the device.</p>
 */
export interface ForgetDeviceRequest {
  /**
   * <p>The access token for the forgotten device request.</p>
   */
  AccessToken?: string;

  /**
   * <p>The device key.</p>
   */
  DeviceKey: string | undefined;
}

export namespace ForgetDeviceRequest {
  export const filterSensitiveLog = (obj: ForgetDeviceRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
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
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used
   *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
   *             security.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>The user name of the user for whom you want to enter a code to reset a forgotten
   *             password.</p>
   */
  Username: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for
   *                 <code>ForgotPassword</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the ForgotPassword API action, Amazon Cognito invokes any functions that
   *             are assigned to the following triggers: <i>pre sign-up</i>,
   *                 <i>custom message</i>, and <i>user migration</i>. When
   *             Amazon Cognito invokes any of these functions, it passes a JSON payload, which the
   *             function receives as input. This payload contains a <code>clientMetadata</code>
   *             attribute, which provides the data that you assigned to the ClientMetadata parameter in
   *             your ForgotPassword request. In your function code in AWS Lambda, you can process the
   *                 <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace ForgotPasswordRequest {
  export const filterSensitiveLog = (obj: ForgotPasswordRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
    ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>The code delivery details being returned from the server.</p>
 */
export interface CodeDeliveryDetailsType {
  /**
   * <p>The destination for the code delivery details.</p>
   */
  Destination?: string;

  /**
   * <p>The delivery medium (email message or phone number).</p>
   */
  DeliveryMedium?: DeliveryMediumType | string;

  /**
   * <p>The attribute name.</p>
   */
  AttributeName?: string;
}

export namespace CodeDeliveryDetailsType {
  export const filterSensitiveLog = (obj: CodeDeliveryDetailsType): any => ({
    ...obj,
  });
}

/**
 * <p>Respresents the response from the server regarding the request to reset a
 *             password.</p>
 */
export interface ForgotPasswordResponse {
  /**
   * <p>The code delivery details returned by the server in response to the request to reset a
   *             password.</p>
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
}

export namespace ForgotPasswordResponse {
  export const filterSensitiveLog = (obj: ForgotPasswordResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to get the header information for the .csv file for the user
 *             import job.</p>
 */
export interface GetCSVHeaderRequest {
  /**
   * <p>The user pool ID for the user pool that the users are to be imported into.</p>
   */
  UserPoolId: string | undefined;
}

export namespace GetCSVHeaderRequest {
  export const filterSensitiveLog = (obj: GetCSVHeaderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the response from the server to the request to get the header information
 *             for the .csv file for the user import job.</p>
 */
export interface GetCSVHeaderResponse {
  /**
   * <p>The user pool ID for the user pool that the users are to be imported into.</p>
   */
  UserPoolId?: string;

  /**
   * <p>The header information for the .csv file for the user import job.</p>
   */
  CSVHeader?: string[];
}

export namespace GetCSVHeaderResponse {
  export const filterSensitiveLog = (obj: GetCSVHeaderResponse): any => ({
    ...obj,
  });
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
   * <p>The access token.</p>
   */
  AccessToken?: string;
}

export namespace GetDeviceRequest {
  export const filterSensitiveLog = (obj: GetDeviceRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
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

export namespace GetDeviceResponse {
  export const filterSensitiveLog = (obj: GetDeviceResponse): any => ({
    ...obj,
    ...(obj.Device && { Device: DeviceType.filterSensitiveLog(obj.Device) }),
  });
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

export namespace GetGroupRequest {
  export const filterSensitiveLog = (obj: GetGroupRequest): any => ({
    ...obj,
  });
}

export interface GetGroupResponse {
  /**
   * <p>The group object for the group.</p>
   */
  Group?: GroupType;
}

export namespace GetGroupResponse {
  export const filterSensitiveLog = (obj: GetGroupResponse): any => ({
    ...obj,
  });
}

export interface GetIdentityProviderByIdentifierRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The identity provider ID.</p>
   */
  IdpIdentifier: string | undefined;
}

export namespace GetIdentityProviderByIdentifierRequest {
  export const filterSensitiveLog = (obj: GetIdentityProviderByIdentifierRequest): any => ({
    ...obj,
  });
}

export interface GetIdentityProviderByIdentifierResponse {
  /**
   * <p>The identity provider object.</p>
   */
  IdentityProvider: IdentityProviderType | undefined;
}

export namespace GetIdentityProviderByIdentifierResponse {
  export const filterSensitiveLog = (obj: GetIdentityProviderByIdentifierResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Request to get a signing certificate from Cognito.</p>
 */
export interface GetSigningCertificateRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;
}

export namespace GetSigningCertificateRequest {
  export const filterSensitiveLog = (obj: GetSigningCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Response from Cognito for a signing certificate request.</p>
 */
export interface GetSigningCertificateResponse {
  /**
   * <p>The signing certificate.</p>
   */
  Certificate?: string;
}

export namespace GetSigningCertificateResponse {
  export const filterSensitiveLog = (obj: GetSigningCertificateResponse): any => ({
    ...obj,
  });
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

export namespace GetUICustomizationRequest {
  export const filterSensitiveLog = (obj: GetUICustomizationRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
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

export namespace UICustomizationType {
  export const filterSensitiveLog = (obj: UICustomizationType): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
}

export interface GetUICustomizationResponse {
  /**
   * <p>The UI customization information.</p>
   */
  UICustomization: UICustomizationType | undefined;
}

export namespace GetUICustomizationResponse {
  export const filterSensitiveLog = (obj: GetUICustomizationResponse): any => ({
    ...obj,
    ...(obj.UICustomization && { UICustomization: UICustomizationType.filterSensitiveLog(obj.UICustomization) }),
  });
}

/**
 * <p>Represents the request to get information about the user.</p>
 */
export interface GetUserRequest {
  /**
   * <p>The access token returned by the server response to get information about the
   *             user.</p>
   */
  AccessToken: string | undefined;
}

export namespace GetUserRequest {
  export const filterSensitiveLog = (obj: GetUserRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>Represents the response from the server from the request to get information about the
 *             user.</p>
 */
export interface GetUserResponse {
  /**
   * <p>The user name of the user you wish to retrieve from the get user request.</p>
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
   *             information only about SMS MFA configurations. It doesn't provide information about TOTP
   *             software token MFA configurations. To look up information about either type of MFA
   *             configuration, use UserMFASettingList instead.</p>
   */
  MFAOptions?: MFAOptionType[];

  /**
   * <p>The user's preferred MFA setting.</p>
   */
  PreferredMfaSetting?: string;

  /**
   * <p>The MFA options that are enabled for the user. The possible values in this list are
   *                 <code>SMS_MFA</code> and <code>SOFTWARE_TOKEN_MFA</code>.</p>
   */
  UserMFASettingList?: string[];
}

export namespace GetUserResponse {
  export const filterSensitiveLog = (obj: GetUserResponse): any => ({
    ...obj,
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.UserAttributes && {
      UserAttributes: obj.UserAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>Represents the request to get user attribute verification.</p>
 */
export interface GetUserAttributeVerificationCodeRequest {
  /**
   * <p>The access token returned by the server response to get the user attribute
   *             verification code.</p>
   */
  AccessToken: string | undefined;

  /**
   * <p>The attribute name returned by the server response to get the user attribute
   *             verification code.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the GetUserAttributeVerificationCode API action, Amazon Cognito invokes the
   *             function that is assigned to the <i>custom message</i> trigger. When
   *             Amazon Cognito invokes this function, it passes a JSON payload, which the function
   *             receives as input. This payload contains a <code>clientMetadata</code> attribute, which
   *             provides the data that you assigned to the ClientMetadata parameter in your
   *             GetUserAttributeVerificationCode request. In your function code in AWS Lambda, you can
   *             process the <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace GetUserAttributeVerificationCodeRequest {
  export const filterSensitiveLog = (obj: GetUserAttributeVerificationCodeRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
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

export namespace GetUserAttributeVerificationCodeResponse {
  export const filterSensitiveLog = (obj: GetUserAttributeVerificationCodeResponse): any => ({
    ...obj,
  });
}

export interface GetUserPoolMfaConfigRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;
}

export namespace GetUserPoolMfaConfigRequest {
  export const filterSensitiveLog = (obj: GetUserPoolMfaConfigRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The SMS text message multi-factor authentication (MFA) configuration type.</p>
 */
export interface SmsMfaConfigType {
  /**
   * <p>The SMS authentication message that will be sent to users with the code they need to
   *             sign in. The message must contain the ‘{####}’ placeholder, which will be replaced with
   *             the code. If the message is not included, and default message will be used.</p>
   */
  SmsAuthenticationMessage?: string;

  /**
   * <p>The SMS configuration.</p>
   */
  SmsConfiguration?: SmsConfigurationType;
}

export namespace SmsMfaConfigType {
  export const filterSensitiveLog = (obj: SmsMfaConfigType): any => ({
    ...obj,
  });
}

/**
 * <p>The type used for enabling software token MFA at the user pool level.</p>
 */
export interface SoftwareTokenMfaConfigType {
  /**
   * <p>Specifies whether software token MFA is enabled.</p>
   */
  Enabled?: boolean;
}

export namespace SoftwareTokenMfaConfigType {
  export const filterSensitiveLog = (obj: SoftwareTokenMfaConfigType): any => ({
    ...obj,
  });
}

export interface GetUserPoolMfaConfigResponse {
  /**
   * <p>The SMS text message multi-factor (MFA) configuration.</p>
   */
  SmsMfaConfiguration?: SmsMfaConfigType;

  /**
   * <p>The software token multi-factor (MFA) configuration.</p>
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType;

  /**
   * <p>The multi-factor (MFA) configuration. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OFF</code> MFA will not be used for any users.</p>
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

export namespace GetUserPoolMfaConfigResponse {
  export const filterSensitiveLog = (obj: GetUserPoolMfaConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to sign out all devices.</p>
 */
export interface GlobalSignOutRequest {
  /**
   * <p>The access token.</p>
   */
  AccessToken: string | undefined;
}

export namespace GlobalSignOutRequest {
  export const filterSensitiveLog = (obj: GlobalSignOutRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The response to the request to sign out all devices.</p>
 */
export interface GlobalSignOutResponse {}

export namespace GlobalSignOutResponse {
  export const filterSensitiveLog = (obj: GlobalSignOutResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Initiates the authentication request.</p>
 */
export interface InitiateAuthRequest {
  /**
   * <p>The authentication flow for this call to execute. The API action will depend on this
   *             value. For example: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>REFRESH_TOKEN_AUTH</code> will take in a valid refresh token and return
   *                     new tokens.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>USER_SRP_AUTH</code> will take in <code>USERNAME</code> and
   *                         <code>SRP_A</code> and return the SRP variables to be used for next
   *                     challenge execution.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>USER_PASSWORD_AUTH</code> will take in <code>USERNAME</code> and
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
   *                   <code>USER_PASSWORD_AUTH</code>: Non-SRP authentication flow; USERNAME and
   *                     PASSWORD are passed directly. If a user migration Lambda trigger is set, this
   *                     flow will invoke the user migration Lambda if the USERNAME is not found in the
   *                     user pool. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ADMIN_USER_PASSWORD_AUTH</code>: Admin-based user password
   *                     authentication. This replaces the <code>ADMIN_NO_SRP_AUTH</code> authentication
   *                     flow. In this flow, Cognito receives the password in the request instead of
   *                     using the SRP process to verify passwords.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <code>ADMIN_NO_SRP_AUTH</code> is not a valid value.</p>
   */
  AuthFlow: AuthFlowType | string | undefined;

  /**
   * <p>The authentication parameters. These are inputs corresponding to the
   *                 <code>AuthFlow</code> that you are invoking. The required values depend on the value
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
   *                     <code>DEVICE_KEY</code>. To start the authentication flow with password verification, include <code>ChallengeName: SRP_A</code> and <code>SRP_A: (The SRP_A Value)</code>.</p>
   *             </li>
   *          </ul>
   */
  AuthParameters?: { [key: string]: string };

  /**
   * <p>A map of custom key-value pairs that you can provide as input for certain custom
   *             workflows that this action triggers.</p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the InitiateAuth API action, Amazon Cognito invokes the AWS Lambda
   *             functions that are specified for various triggers. The ClientMetadata value is passed as
   *             input to the functions for only the following triggers:</p>
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
   *
   *         <p>When Amazon Cognito invokes the functions for these triggers, it passes a JSON
   *             payload, which the function receives as input. This payload contains a
   *                 <code>validationData</code> attribute, which provides the data that you assigned to
   *             the ClientMetadata parameter in your InitiateAuth request. In your function code in AWS
   *             Lambda, you can process the <code>validationData</code> value to enhance your workflow
   *             for your specific needs.</p>
   *
   *         <p>When you use the InitiateAuth API action, Amazon Cognito also invokes the functions
   *             for the following triggers, but it does not provide the ClientMetadata value as
   *             input:</p>
   *
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
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };

  /**
   * <p>The app client ID.</p>
   */
  ClientId: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for
   *                 <code>InitiateAuth</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used
   *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
   *             security.</p>
   */
  UserContextData?: UserContextDataType;
}

export namespace InitiateAuthRequest {
  export const filterSensitiveLog = (obj: InitiateAuthRequest): any => ({
    ...obj,
    ...(obj.AuthParameters && { AuthParameters: SENSITIVE_STRING }),
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
}

/**
 * <p>Initiates the authentication response.</p>
 */
export interface InitiateAuthResponse {
  /**
   * <p>The name of the challenge which you are responding to with this call. This is returned
   *             to you in the <code>AdminInitiateAuth</code> response if you need to pass another
   *             challenge.</p>
   *         <p>Valid values include the following. Note that all of these challenges require
   *                 <code>USERNAME</code> and <code>SECRET_HASH</code> (if applicable) in the
   *             parameters.</p>
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
   *                   <code>DEVICE_SRP_AUTH</code>: If device tracking was enabled on your user pool
   *                     and the previous challenges were passed, this challenge is returned so that
   *                     Amazon Cognito can start tracking this device.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DEVICE_PASSWORD_VERIFIER</code>: Similar to
   *                         <code>PASSWORD_VERIFIER</code>, but for devices only.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: For users which are required to change
   *                     their passwords after successful first login. This challenge should be passed
   *                     with <code>NEW_PASSWORD</code> and any other required attributes.</p>
   *             </li>
   *          </ul>
   */
  ChallengeName?: ChallengeNameType | string;

  /**
   * <p>The session which should be passed both ways in challenge-response calls to the
   *             service. If the caller needs to
   *             go through another challenge, they return a session with other challenge parameters.
   *             This session should be passed as it is to the next <code>RespondToAuthChallenge</code>
   *             API call.</p>
   */
  Session?: string;

  /**
   * <p>The challenge parameters. These are returned to you in the <code>InitiateAuth</code>
   *             response if you need to pass another challenge. The responses in this parameter should
   *             be used to compute inputs to the next call (<code>RespondToAuthChallenge</code>). </p>
   *         <p>All challenges require <code>USERNAME</code> and <code>SECRET_HASH</code> (if
   *             applicable).</p>
   */
  ChallengeParameters?: { [key: string]: string };

  /**
   * <p>The result of the authentication response. This is only returned if the caller does
   *             not need to pass another challenge. If the caller does need to pass another challenge
   *             before it gets tokens, <code>ChallengeName</code>, <code>ChallengeParameters</code>, and
   *                 <code>Session</code> are returned.</p>
   */
  AuthenticationResult?: AuthenticationResultType;
}

export namespace InitiateAuthResponse {
  export const filterSensitiveLog = (obj: InitiateAuthResponse): any => ({
    ...obj,
    ...(obj.AuthenticationResult && {
      AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
    }),
  });
}

/**
 * <p>Represents the request to list the devices.</p>
 */
export interface ListDevicesRequest {
  /**
   * <p>The access tokens for the request to list devices.</p>
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

export namespace ListDevicesRequest {
  export const filterSensitiveLog = (obj: ListDevicesRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
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

export namespace ListDevicesResponse {
  export const filterSensitiveLog = (obj: ListDevicesResponse): any => ({
    ...obj,
  });
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

export namespace ListGroupsRequest {
  export const filterSensitiveLog = (obj: ListGroupsRequest): any => ({
    ...obj,
  });
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

export namespace ListGroupsResponse {
  export const filterSensitiveLog = (obj: ListGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListIdentityProvidersRequest {
  /**
   * <p>The user pool ID.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The maximum number of identity providers to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListIdentityProvidersRequest {
  export const filterSensitiveLog = (obj: ListIdentityProvidersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A container for identity provider details.</p>
 */
export interface ProviderDescription {
  /**
   * <p>The identity provider name.</p>
   */
  ProviderName?: string;

  /**
   * <p>The identity provider type.</p>
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

export namespace ProviderDescription {
  export const filterSensitiveLog = (obj: ProviderDescription): any => ({
    ...obj,
  });
}

export interface ListIdentityProvidersResponse {
  /**
   * <p>A list of identity provider objects.</p>
   */
  Providers: ProviderDescription[] | undefined;

  /**
   * <p>A pagination token.</p>
   */
  NextToken?: string;
}

export namespace ListIdentityProvidersResponse {
  export const filterSensitiveLog = (obj: ListIdentityProvidersResponse): any => ({
    ...obj,
  });
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

export namespace ListResourceServersRequest {
  export const filterSensitiveLog = (obj: ListResourceServersRequest): any => ({
    ...obj,
  });
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

export namespace ListResourceServersResponse {
  export const filterSensitiveLog = (obj: ListResourceServersResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags that are assigned to the user pool.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace ListUserImportJobsRequest {
  export const filterSensitiveLog = (obj: ListUserImportJobsRequest): any => ({
    ...obj,
  });
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

export namespace ListUserImportJobsResponse {
  export const filterSensitiveLog = (obj: ListUserImportJobsResponse): any => ({
    ...obj,
  });
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

export namespace ListUserPoolClientsRequest {
  export const filterSensitiveLog = (obj: ListUserPoolClientsRequest): any => ({
    ...obj,
  });
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

export namespace UserPoolClientDescription {
  export const filterSensitiveLog = (obj: UserPoolClientDescription): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
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

export namespace ListUserPoolClientsResponse {
  export const filterSensitiveLog = (obj: ListUserPoolClientsResponse): any => ({
    ...obj,
    ...(obj.UserPoolClients && {
      UserPoolClients: obj.UserPoolClients.map((item) => UserPoolClientDescription.filterSensitiveLog(item)),
    }),
  });
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

export namespace ListUserPoolsRequest {
  export const filterSensitiveLog = (obj: ListUserPoolsRequest): any => ({
    ...obj,
  });
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
   * <p>The AWS Lambda configuration information in a user pool description.</p>
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

export namespace UserPoolDescriptionType {
  export const filterSensitiveLog = (obj: UserPoolDescriptionType): any => ({
    ...obj,
  });
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

export namespace ListUserPoolsResponse {
  export const filterSensitiveLog = (obj: ListUserPoolsResponse): any => ({
    ...obj,
  });
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
   *         <p>Custom attributes are not searchable.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-using-listusers-api">Searching for Users Using the ListUsers API</a> and <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-listusers-api-examples">Examples of Using the ListUsers API</a> in the <i>Amazon Cognito
   *                 Developer Guide</i>.</p>
   */
  Filter?: string;
}

export namespace ListUsersRequest {
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
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

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
    ...(obj.Users && { Users: obj.Users.map((item) => UserType.filterSensitiveLog(item)) }),
  });
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

export namespace ListUsersInGroupRequest {
  export const filterSensitiveLog = (obj: ListUsersInGroupRequest): any => ({
    ...obj,
  });
}

export interface ListUsersInGroupResponse {
  /**
   * <p>The users returned in the request to list users.</p>
   */
  Users?: UserType[];

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be
   *             used to return the next set of items in the list.</p>
   */
  NextToken?: string;
}

export namespace ListUsersInGroupResponse {
  export const filterSensitiveLog = (obj: ListUsersInGroupResponse): any => ({
    ...obj,
    ...(obj.Users && { Users: obj.Users.map((item) => UserType.filterSensitiveLog(item)) }),
  });
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
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used
   *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
   *             security.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>The user name of the user to whom you wish to resend a confirmation code.</p>
   */
  Username: string | undefined;

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for
   *                 <code>ResendConfirmationCode</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the ResendConfirmationCode API action, Amazon Cognito invokes the function
   *             that is assigned to the <i>custom message</i> trigger. When Amazon Cognito
   *             invokes this function, it passes a JSON payload, which the function receives as input.
   *             This payload contains a <code>clientMetadata</code> attribute, which provides the data
   *             that you assigned to the ClientMetadata parameter in your ResendConfirmationCode
   *             request. In your function code in AWS Lambda, you can process the
   *                 <code>clientMetadata</code> value to enhance your workflow for your specific
   *             needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace ResendConfirmationCodeRequest {
  export const filterSensitiveLog = (obj: ResendConfirmationCodeRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
    ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
    ...(obj.Username && { Username: SENSITIVE_STRING }),
  });
}

/**
 * <p>The response from the server when the Amazon Cognito Your User Pools service makes the
 *             request to resend a confirmation code.</p>
 */
export interface ResendConfirmationCodeResponse {
  /**
   * <p>The code delivery details returned by the server in response to the request to resend
   *             the confirmation code.</p>
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType;
}

export namespace ResendConfirmationCodeResponse {
  export const filterSensitiveLog = (obj: ResendConfirmationCodeResponse): any => ({
    ...obj,
  });
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
   *             <code>ADMIN_NO_SRP_AUTH</code> is not a valid value.</p>
   */
  ChallengeName: ChallengeNameType | string | undefined;

  /**
   * <p>The session which should be passed both ways in challenge-response calls to the
   *             service. If <code>InitiateAuth</code> or <code>RespondToAuthChallenge</code> API call
   *             determines that the caller needs to go through another challenge, they return a session
   *             with other challenge parameters. This session should be passed as it is to the next
   *                 <code>RespondToAuthChallenge</code> API call.</p>
   */
  Session?: string;

  /**
   * <p>The challenge responses. These are inputs corresponding to the value of
   *                 <code>ChallengeName</code>, for example:</p>
   *         <note>
   *             <p>
   *                <code>SECRET_HASH</code> (if app client is configured with client secret) applies
   *                 to all inputs below (including <code>SOFTWARE_TOKEN_MFA</code>).</p>
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
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NEW_PASSWORD_REQUIRED</code>: <code>NEW_PASSWORD</code>, any other
   *                     required attributes, <code>USERNAME</code>. </p>
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
   *                         <code>PASSWORD_VERIFIER</code> requires plus <code>DEVICE_KEY</code>.</p>
   *             </li>
   *          </ul>
   */
  ChallengeResponses?: { [key: string]: string };

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for
   *                 <code>RespondToAuthChallenge</code> calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used
   *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
   *             security.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the RespondToAuthChallenge API action, Amazon Cognito invokes any functions
   *             that are assigned to the following triggers: <i>post authentication</i>,
   *                 <i>pre token generation</i>, <i>define auth
   *                 challenge</i>, <i>create auth challenge</i>, and
   *                 <i>verify auth challenge</i>. When Amazon Cognito invokes any of these
   *             functions, it passes a JSON payload, which the function receives as input. This payload
   *             contains a <code>clientMetadata</code> attribute, which provides the data that you
   *             assigned to the ClientMetadata parameter in your RespondToAuthChallenge request. In your
   *             function code in AWS Lambda, you can process the <code>clientMetadata</code> value to
   *             enhance your workflow for your specific needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace RespondToAuthChallengeRequest {
  export const filterSensitiveLog = (obj: RespondToAuthChallengeRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
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
   * <p>The session which should be passed both ways in challenge-response calls to the
   *             service. If the caller needs to
   *             go through another challenge, they return a session with other challenge parameters.
   *             This session should be passed as it is to the next <code>RespondToAuthChallenge</code>
   *             API call.</p>
   */
  Session?: string;

  /**
   * <p>The challenge parameters. For more information, see <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html">InitiateAuth</a>.</p>
   */
  ChallengeParameters?: { [key: string]: string };

  /**
   * <p>The result returned by the server in response to the request to respond to the
   *             authentication challenge.</p>
   */
  AuthenticationResult?: AuthenticationResultType;
}

export namespace RespondToAuthChallengeResponse {
  export const filterSensitiveLog = (obj: RespondToAuthChallengeResponse): any => ({
    ...obj,
    ...(obj.AuthenticationResult && {
      AuthenticationResult: AuthenticationResultType.filterSensitiveLog(obj.AuthenticationResult),
    }),
  });
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
   *         <p>Otherwise, <code>ClientId</code> is mapped to the client. When the client ID is not
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

export namespace SetRiskConfigurationRequest {
  export const filterSensitiveLog = (obj: SetRiskConfigurationRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
}

export interface SetRiskConfigurationResponse {
  /**
   * <p>The risk configuration.</p>
   */
  RiskConfiguration: RiskConfigurationType | undefined;
}

export namespace SetRiskConfigurationResponse {
  export const filterSensitiveLog = (obj: SetRiskConfigurationResponse): any => ({
    ...obj,
    ...(obj.RiskConfiguration && {
      RiskConfiguration: RiskConfigurationType.filterSensitiveLog(obj.RiskConfiguration),
    }),
  });
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

export namespace SetUICustomizationRequest {
  export const filterSensitiveLog = (obj: SetUICustomizationRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
  });
}

export interface SetUICustomizationResponse {
  /**
   * <p>The UI customization information.</p>
   */
  UICustomization: UICustomizationType | undefined;
}

export namespace SetUICustomizationResponse {
  export const filterSensitiveLog = (obj: SetUICustomizationResponse): any => ({
    ...obj,
    ...(obj.UICustomization && { UICustomization: UICustomizationType.filterSensitiveLog(obj.UICustomization) }),
  });
}

export interface SetUserMFAPreferenceRequest {
  /**
   * <p>The SMS text message multi-factor authentication (MFA) settings.</p>
   */
  SMSMfaSettings?: SMSMfaSettingsType;

  /**
   * <p>The time-based one-time password software token MFA settings.</p>
   */
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType;

  /**
   * <p>The access token for the user.</p>
   */
  AccessToken: string | undefined;
}

export namespace SetUserMFAPreferenceRequest {
  export const filterSensitiveLog = (obj: SetUserMFAPreferenceRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
}

export interface SetUserMFAPreferenceResponse {}

export namespace SetUserMFAPreferenceResponse {
  export const filterSensitiveLog = (obj: SetUserMFAPreferenceResponse): any => ({
    ...obj,
  });
}

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
   * <p>The MFA configuration. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>OFF</code> MFA will not be used for any users.</p>
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

export namespace SetUserPoolMfaConfigRequest {
  export const filterSensitiveLog = (obj: SetUserPoolMfaConfigRequest): any => ({
    ...obj,
  });
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
   *                   <code>OFF</code> MFA will not be used for any users.</p>
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

export namespace SetUserPoolMfaConfigResponse {
  export const filterSensitiveLog = (obj: SetUserPoolMfaConfigResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to set user settings.</p>
 */
export interface SetUserSettingsRequest {
  /**
   * <p>The access token for the set user settings request.</p>
   */
  AccessToken: string | undefined;

  /**
   * <p>You can use this parameter only to set an SMS configuration that uses SMS for
   *             delivery.</p>
   */
  MFAOptions: MFAOptionType[] | undefined;
}

export namespace SetUserSettingsRequest {
  export const filterSensitiveLog = (obj: SetUserSettingsRequest): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>The response from the server for a set user settings request.</p>
 */
export interface SetUserSettingsResponse {}

export namespace SetUserSettingsResponse {
  export const filterSensitiveLog = (obj: SetUserSettingsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to register a user.</p>
 */
export interface SignUpRequest {
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
   * <p>The user name of the user you wish to register.</p>
   */
  Username: string | undefined;

  /**
   * <p>The password of the user you wish to register.</p>
   */
  Password: string | undefined;

  /**
   * <p>An array of name-value pairs representing user attributes.</p>
   *         <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the
   *             attribute name.</p>
   */
  UserAttributes?: AttributeType[];

  /**
   * <p>The validation data in the request to register a user.</p>
   */
  ValidationData?: AttributeType[];

  /**
   * <p>The Amazon Pinpoint analytics metadata for collecting metrics for <code>SignUp</code>
   *             calls.</p>
   */
  AnalyticsMetadata?: AnalyticsMetadataType;

  /**
   * <p>Contextual data such as the user's device fingerprint, IP address, or location used
   *             for evaluating the risk of an unexpected event by Amazon Cognito advanced
   *             security.</p>
   */
  UserContextData?: UserContextDataType;

  /**
   * <p>A map of custom key-value pairs that you can provide as input for any custom workflows
   *             that this action triggers. </p>
   *         <p>You create custom workflows by assigning AWS Lambda functions to user pool triggers.
   *             When you use the SignUp API action, Amazon Cognito invokes any functions that are
   *             assigned to the following triggers: <i>pre sign-up</i>, <i>custom
   *                 message</i>, and <i>post confirmation</i>. When Amazon Cognito
   *             invokes any of these functions, it passes a JSON payload, which the function receives as
   *             input. This payload contains a <code>clientMetadata</code> attribute, which provides the
   *             data that you assigned to the ClientMetadata parameter in your SignUp request. In your
   *             function code in AWS Lambda, you can process the <code>clientMetadata</code> value to
   *             enhance your workflow for your specific needs.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html">Customizing User Pool Workflows with Lambda Triggers</a> in the
   *                 <i>Amazon Cognito Developer Guide</i>.</p>
   *         <note>
   *             <p>Take the following limitations into consideration when you use the ClientMetadata
   *                 parameter:</p>
   *             <ul>
   *                <li>
   *                     <p>Amazon Cognito does not store the ClientMetadata value. This data is
   *                         available only to AWS Lambda triggers that are assigned to a user pool to
   *                         support custom workflows. If your user pool configuration does not include
   *                         triggers, the ClientMetadata parameter serves no purpose.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not validate the ClientMetadata value.</p>
   *                 </li>
   *                <li>
   *                     <p>Amazon Cognito does not encrypt the the ClientMetadata value, so don't use
   *                         it to provide sensitive information.</p>
   *                 </li>
   *             </ul>
   *         </note>
   */
  ClientMetadata?: { [key: string]: string };
}

export namespace SignUpRequest {
  export const filterSensitiveLog = (obj: SignUpRequest): any => ({
    ...obj,
    ...(obj.ClientId && { ClientId: SENSITIVE_STRING }),
    ...(obj.SecretHash && { SecretHash: SENSITIVE_STRING }),
    ...(obj.Username && { Username: SENSITIVE_STRING }),
    ...(obj.Password && { Password: SENSITIVE_STRING }),
    ...(obj.UserAttributes && {
      UserAttributes: obj.UserAttributes.map((item) => AttributeType.filterSensitiveLog(item)),
    }),
    ...(obj.ValidationData && {
      ValidationData: obj.ValidationData.map((item) => AttributeType.filterSensitiveLog(item)),
    }),
  });
}

/**
 * <p>The response from the server for a registration request.</p>
 */
export interface SignUpResponse {
  /**
   * <p>A response from the server indicating that a user registration has been
   *             confirmed.</p>
   */
  UserConfirmed: boolean | undefined;

  /**
   * <p>The code delivery details returned by the server response to the user registration
   *             request.</p>
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType;

  /**
   * <p>The UUID of the authenticated user. This is not the same as
   *             <code>username</code>.</p>
   */
  UserSub: string | undefined;
}

export namespace SignUpResponse {
  export const filterSensitiveLog = (obj: SignUpResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to start the user import job.</p>
 */
export interface StartUserImportJobRequest {
  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The job ID for the user import job.</p>
   */
  JobId: string | undefined;
}

export namespace StartUserImportJobRequest {
  export const filterSensitiveLog = (obj: StartUserImportJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the response from the server to the request to start the user import
 *             job.</p>
 */
export interface StartUserImportJobResponse {
  /**
   * <p>The job object that represents the user import job.</p>
   */
  UserImportJob?: UserImportJobType;
}

export namespace StartUserImportJobResponse {
  export const filterSensitiveLog = (obj: StartUserImportJobResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the request to stop the user import job.</p>
 */
export interface StopUserImportJobRequest {
  /**
   * <p>The user pool ID for the user pool that the users are being imported into.</p>
   */
  UserPoolId: string | undefined;

  /**
   * <p>The job ID for the user import job.</p>
   */
  JobId: string | undefined;
}

export namespace StopUserImportJobRequest {
  export const filterSensitiveLog = (obj: StopUserImportJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the response from the server to the request to stop the user import
 *             job.</p>
 */
export interface StopUserImportJobResponse {
  /**
   * <p>The job object that represents the user import job.</p>
   */
  UserImportJob?: UserImportJobType;
}

export namespace StopUserImportJobResponse {
  export const filterSensitiveLog = (obj: StopUserImportJobResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the user pool to assign the tags to.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to assign to the user pool.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}
