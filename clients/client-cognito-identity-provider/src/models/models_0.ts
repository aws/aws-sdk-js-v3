// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AccountTakeoverEventActionType,
  AdvancedSecurityEnabledModeType,
  AdvancedSecurityModeType,
  AliasAttributeType,
  AssetCategoryType,
  AssetExtensionType,
  AttributeDataType,
  AuthFactorType,
  AuthFlowType,
  ChallengeName,
  ChallengeNameType,
  ChallengeResponse,
  ColorSchemeModeType,
  CompromisedCredentialsEventActionType,
  CustomEmailSenderLambdaVersionType,
  CustomSMSSenderLambdaVersionType,
  DefaultEmailOptionType,
  DeletionProtectionType,
  DeliveryMediumType,
  DeviceRememberedStatusType,
  DomainStatusType,
  EmailSendingAccountType,
  EncryptionKeyType,
  EventFilterType,
  EventResponseType,
  EventSourceName,
  EventType,
  ExplicitAuthFlowsType,
  FeatureType,
  FeedbackValueType,
  IdentityProviderTypeType,
  InboundFederationLambdaVersionType,
  IssuerType,
  LimitClass,
  LogLevel,
  MessageActionType,
  OAuthFlowType,
  PasswordHashingAlgorithmType,
  PreTokenGenerationLambdaVersionType,
  PreventUserExistenceErrorTypes,
  RecoveryOptionNameType,
  ReplicaRoleType,
  ReplicaStatusType,
  RiskDecisionType,
  RiskLevelType,
  SecurityPolicyType,
  StatusType,
  TermsEnforcementType,
  TermsSourceType,
  TimeUnitsType,
  UserImportJobStatusType,
  UsernameAttributeType,
  UserPoolMfaType,
  UserPoolTierType,
  UserStatusType,
  UserVerificationType,
  VerifiedAttributeType,
  WebAuthnFactorConfigurationType,
} from "./enums";

/**
 * A recovery option for a user. The `AccountRecoverySettingType` data type is an array of this object. Each `RecoveryOptionType` has a priority property that determines whether it is a primary or secondary option.
 *
 * For example, if `verified_email` has a priority of `1` and `verified_phone_number` has a priority of `2`, your user pool sends account-recovery messages to a verified email address but falls back to an SMS message if the user has a verified phone number. The `admin_only` option prevents self-service account recovery.
 *
 * @public
 */
export interface RecoveryOptionType {
  /**
   * Your priority preference for using the specified attribute in account recovery. The highest priority is `1`.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The recovery method that this object sets a recovery option for.
   *
   * @public
   */
  Name: RecoveryOptionNameType | undefined;
}

/**
 * The settings for user message delivery in forgot-password operations. Contains preference for email or SMS message delivery of password reset codes, or for admin-only password reset.
 *
 * @public
 */
export interface AccountRecoverySettingType {
  /**
   * The list of options and priorities for user message delivery in forgot-password operations. Sets or displays user pool preferences for email or SMS message priority, whether users should fall back to a second delivery method, and whether passwords should only be reset by administrators.
   *
   * @public
   */
  RecoveryMechanisms?: RecoveryOptionType[] | undefined;
}

/**
 * The automated response to a risk level for adaptive authentication in full-function, or `ENFORCED`, mode. You can assign an action to each risk level that threat protection evaluates.
 *
 * @public
 */
export interface AccountTakeoverActionType {
  /**
   * Determines whether Amazon Cognito sends a user a notification message when your user pools assesses a user's session at the associated risk level.
   *
   * @public
   */
  Notify: boolean | undefined;

  /**
   * The action to take for the attempted account takeover action for the associated risk level. Valid values are as follows:
   *
   * - `BLOCK`: Block the request.
   * - `MFA_IF_CONFIGURED`: Present an MFA challenge if possible. MFA is possible if the user pool has active MFA methods that the user can set up. For example, if the user pool only supports SMS message MFA but the user doesn't have a phone number attribute, MFA setup isn't possible. If MFA setup isn't possible, allow the request.
   * - `MFA_REQUIRED`: Present an MFA challenge if possible. Block the request if a user hasn't set up MFA. To sign in with required MFA, users must have an email address or phone number attribute, or a registered TOTP factor.
   * - `NO_ACTION`: Take no action. Permit sign-in.
   *
   * @public
   */
  EventAction: AccountTakeoverEventActionType | undefined;
}

/**
 * A list of account-takeover actions for each level of risk that Amazon Cognito might assess with threat protection features.
 *
 * @public
 */
export interface AccountTakeoverActionsType {
  /**
   * The action that you assign to a low-risk assessment by threat protection.
   *
   * @public
   */
  LowAction?: AccountTakeoverActionType | undefined;

  /**
   * The action that you assign to a medium-risk assessment by threat protection.
   *
   * @public
   */
  MediumAction?: AccountTakeoverActionType | undefined;

  /**
   * The action that you assign to a high-risk assessment by threat protection.
   *
   * @public
   */
  HighAction?: AccountTakeoverActionType | undefined;
}

/**
 * The template for email messages that threat protection sends to a user when your threat protection automated response has a *Notify* action.
 *
 * @public
 */
export interface NotifyEmailType {
  /**
   * The subject of the threat protection email notification.
   *
   * @public
   */
  Subject: string | undefined;

  /**
   * The body of an email notification formatted in HTML. Choose an `HtmlBody` or a `TextBody` to send an HTML-formatted or plaintext message, respectively.
   *
   * @public
   */
  HtmlBody?: string | undefined;

  /**
   * The body of an email notification formatted in plaintext. Choose an `HtmlBody` or a `TextBody` to send an HTML-formatted or plaintext message, respectively.
   *
   * @public
   */
  TextBody?: string | undefined;
}

/**
 * The configuration for Amazon SES email messages that threat protection sends to a user when your adaptive authentication automated response has a *Notify* action.
 *
 * @public
 */
export interface NotifyConfigurationType {
  /**
   * The email address that sends the email message. The address must be either individually verified with Amazon Simple Email Service, or from a domain that has been verified with Amazon SES.
   *
   * @public
   */
  From?: string | undefined;

  /**
   * The reply-to email address of an email template. Can be an email address in the format `admin@example.com` or `Administrator <admin@example.com>`.
   *
   * @public
   */
  ReplyTo?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the identity that is associated with the sending authorization policy. This identity permits Amazon Cognito to send for the email address specified in the `From` parameter.
   *
   * @public
   */
  SourceArn: string | undefined;

  /**
   * The template for the email message that your user pool sends when a detected risk event is blocked.
   *
   * @public
   */
  BlockEmail?: NotifyEmailType | undefined;

  /**
   * The template for the email message that your user pool sends when no action is taken in response to a detected risk.
   *
   * @public
   */
  NoActionEmail?: NotifyEmailType | undefined;

  /**
   * The template for the email message that your user pool sends when MFA is challenged in response to a detected risk.
   *
   * @public
   */
  MfaEmail?: NotifyEmailType | undefined;
}

/**
 * The settings for automated responses and notification templates for adaptive authentication with threat protection features.
 *
 * @public
 */
export interface AccountTakeoverRiskConfigurationType {
  /**
   * The settings for composing and sending an email message when threat protection assesses a risk level with adaptive authentication. When you choose to notify users in `AccountTakeoverRiskConfiguration`, Amazon Cognito sends an email message using the method and template that you set with this data type.
   *
   * @public
   */
  NotifyConfiguration?: NotifyConfigurationType | undefined;

  /**
   * A list of account-takeover actions for each level of risk that Amazon Cognito might assess with threat protection.
   *
   * @public
   */
  Actions: AccountTakeoverActionsType | undefined;
}

/**
 * The configuration for a single authentication context class reference (ACR) level in a user pool. Each entry in an `AcrConfiguration` map associates a level (`Level1` through `Level4`) with this configuration, which provides the custom name that Amazon Cognito reports for that level in the `acr` token claim.
 *
 * @public
 */
export interface AcrLevelConfigType {
  /**
   * The custom name for this authentication context class reference (ACR) level. This value is the URI that Amazon Cognito reports in the `acr` token claim when a user meets this level. The name must be unique across all levels in the user pool, including default names.
   *
   * @public
   */
  AcrValue: string | undefined;
}

/**
 * The minimum and maximum values of an attribute that is of the number type, for example `custom:age`.
 *
 * @public
 */
export interface NumberAttributeConstraintsType {
  /**
   * The minimum value of an attribute that is of the number data type.
   *
   * @public
   */
  MinValue?: string | undefined;

  /**
   * The maximum length of a number attribute value. Must be a number less than or equal to `2^1023`, represented as a string with a length of 131072 characters or fewer.
   *
   * @public
   */
  MaxValue?: string | undefined;
}

/**
 * The minimum and maximum length values of an attribute that is of the string type, for example `custom:department`.
 *
 * @public
 */
export interface StringAttributeConstraintsType {
  /**
   * The minimum length of a string attribute value.
   *
   * @public
   */
  MinLength?: string | undefined;

  /**
   * The maximum length of a string attribute value. Must be a number less than or equal to `2^1023`, represented as a string with a length of 131072 characters or fewer.
   *
   * @public
   */
  MaxLength?: string | undefined;
}

/**
 * A list of the user attributes and their properties in your user pool. The attribute schema contains standard attributes, custom attributes with a `custom:` prefix, and developer attributes with a `dev:` prefix. For more information, see [User pool attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html).
 *
 * Developer-only `dev:` attributes are a legacy feature of user pools, and are read-only to all app clients. You can create and update developer-only attributes only with IAM-authenticated API operations. Use app client read/write permissions instead.
 *
 * @public
 */
export interface SchemaAttributeType {
  /**
   * The name of your user pool attribute. When you create or update a user pool, adding a schema attribute creates a custom or developer-only attribute. When you add an attribute with a `Name` value of `MyAttribute`, Amazon Cognito creates the custom attribute `custom:MyAttribute`. When `DeveloperOnlyAttribute` is `true`, Amazon Cognito creates your attribute as `dev:MyAttribute`. In an operation that describes a user pool, Amazon Cognito returns this value as `value` for standard attributes, `custom:value` for custom attributes, and `dev:value` for developer-only attributes..
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The data format of the values for your attribute. When you choose an `AttributeDataType`, Amazon Cognito validates the input against the data type. A custom attribute value in your user's ID token is always a string, for example `"custom:isMember" : "true"` or `"custom:YearsAsMember" : "12"`.
   *
   * @public
   */
  AttributeDataType?: AttributeDataType | undefined;

  /**
   * > **Note:** You should use [WriteAttributes](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_UserPoolClientType.html#CognitoUserPools-Type-UserPoolClientType-WriteAttributes) in the user pool client to control how attributes can be mutated for new use cases instead of using `DeveloperOnlyAttribute`.
   *
   * Specifies whether the attribute type is developer only. This attribute can only be modified by an administrator. Users won't be able to modify this attribute using their access token. For example, `DeveloperOnlyAttribute` can be modified using AdminUpdateUserAttributes but can't be updated using UpdateUserAttributes.
   *
   * @public
   */
  DeveloperOnlyAttribute?: boolean | undefined;

  /**
   * Specifies whether the value of the attribute can be changed.
   *
   * Any user pool attribute whose value you map from an IdP attribute must be mutable, with a parameter value of `true`. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If an attribute is immutable, Amazon Cognito throws an error when it attempts to update the attribute. For more information, see [Specifying Identity Provider Attribute Mappings for Your User Pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html).
   *
   * @public
   */
  Mutable?: boolean | undefined;

  /**
   * Specifies whether a user pool attribute is required. If the attribute is required and the user doesn't provide a value, registration or sign-in will fail.
   *
   * @public
   */
  Required?: boolean | undefined;

  /**
   * Specifies the constraints for an attribute of the number type.
   *
   * @public
   */
  NumberAttributeConstraints?: NumberAttributeConstraintsType | undefined;

  /**
   * Specifies the constraints for an attribute of the string type.
   *
   * @public
   */
  StringAttributeConstraints?: StringAttributeConstraintsType | undefined;
}

/**
 * Represents the request to add custom attributes.
 *
 * @public
 */
export interface AddCustomAttributesRequest {
  /**
   * The ID of the user pool where you want to add custom attributes.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * An array of custom attribute names and other properties. Sets the following characteristics:
   *
   * - **AttributeDataType**
   *
   *   The expected data type. Can be a string, a number, a date and time, or a boolean.
   *
   * - **Mutable**
   *
   *   If true, you can grant app clients write access to the attribute value. If false, the attribute value can only be set up on sign-up or administrator creation of users.
   *
   * - **Name**
   *
   *   The attribute name. For an attribute like `custom:myAttribute`, enter `myAttribute` for this field.
   *
   * - **Required**
   *
   *   When true, users who sign up or are created must set a value for the attribute.
   *
   * - **NumberAttributeConstraints**
   *
   *   The minimum and maximum length of accepted values for a `Number`-type attribute.
   *
   * - **StringAttributeConstraints**
   *
   *   The minimum and maximum length of accepted values for a `String`-type attribute.
   *
   * - **DeveloperOnlyAttribute**
   *
   *   This legacy option creates an attribute with a `dev:` prefix. You can only set the value of a developer-only attribute with administrative IAM credentials.
   *
   * @public
   */
  CustomAttributes: SchemaAttributeType[] | undefined;
}

/**
 * Represents the response from the server for the request to add custom attributes.
 *
 * @public
 */
export interface AddCustomAttributesResponse {}

/**
 * The request to create a new client secret for a user pool app client.
 *
 * @public
 */
export interface AddUserPoolClientSecretRequest {
  /**
   * The ID of the user pool that contains the app client.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client for which you want to create a new secret.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The client secret value you want to use. If you don't provide this parameter, Amazon Cognito generates a secure secret for you.
   *
   * @public
   */
  ClientSecret?: string | undefined;
}

/**
 * Contains information about a client secret, including its unique identifier, value, and creation timestamp.
 *
 * @public
 */
export interface ClientSecretDescriptorType {
  /**
   * The unique identifier for the client secret. This identifier follows the format <client-id>--<epoch-create-time>.
   *
   * @public
   */
  ClientSecretId?: string | undefined;

  /**
   * The actual secret value. This is only returned when creating a new secret and only if Amazon Cognito generated the secret. For custom secrets that you provide, this field is not included in the response.
   *
   * @public
   */
  ClientSecretValue?: string | undefined;

  /**
   * The date and time when the client secret was created.
   *
   * @public
   */
  ClientSecretCreateDate?: Date | undefined;
}

/**
 * The response from creating a new client secret.
 *
 * @public
 */
export interface AddUserPoolClientSecretResponse {
  /**
   * The details of the newly created client secret, including its unique identifier and creation timestamp. The ClientSecretValue is only returned when Amazon Cognito generates the secret. For custom secrets that you provide, the ClientSecretValue is not included in the response.
   *
   * @public
   */
  ClientSecretDescriptor?: ClientSecretDescriptorType | undefined;
}

/**
 * @public
 */
export interface AdminAddUserToGroupRequest {
  /**
   * The ID of the user pool that contains the group that you want to add the user to.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The name of the group that you want to add your user to.
   *
   * @public
   */
  GroupName: string | undefined;
}

/**
 * Confirm a user's registration as a user pool administrator.
 *
 * @public
 */
export interface AdminConfirmSignUpRequest {
  /**
   * The ID of the user pool where you want to confirm a user's sign-up request.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * Represents the response from the server for the request to confirm registration.
 *
 * @public
 */
export interface AdminConfirmSignUpResponse {}

/**
 * The name and value of a user attribute.
 *
 * @public
 */
export interface AttributeType {
  /**
   * The name of the attribute, for example `email` or `custom:department`.
   *
   * In some older user pools, the regex pattern for acceptable values of this parameter is `[\p\{L\}\p\{M\}\p\{S\}\p\{N\}\p\{P\}]+`. Older pools will eventually be updated to use the new pattern. Affected user pools are those created before May 2024 in US East (N. Virginia), US East (Ohio), US West (N. California), US West (Oregon), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Seoul), Asia Pacific (Singapore), Asia Pacific (Sydney), Canada (Central), Europe (Frankfurt), Europe (Ireland), Europe (London), Europe (Paris), Europe (Stockholm), Middle East (Bahrain), and South America (São Paulo).
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the attribute.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Creates a new user in the specified user pool.
 *
 * @public
 */
export interface AdminCreateUserRequest {
  /**
   * The ID of the user pool where you want to create a user.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The value that you want to set as the username sign-in attribute. The following conditions apply to the username parameter.
   *
   * - The username can't be a duplicate of another username in the same user pool.
   * - You can't change the value of a username after you create it.
   * - You can only provide a value if usernames are a valid sign-in attribute for your user pool. If your user pool only supports phone numbers or email addresses as sign-in attributes, Amazon Cognito automatically generates a username value. For more information, see [Customizing sign-in attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-aliases).
   *
   * @public
   */
  Username: string | undefined;

  /**
   * An array of name-value pairs that contain user attributes and attribute values to be set for the user to be created. You can create a user without specifying any attributes other than `Username`. However, any attributes that you specify as required (when creating a user pool or in the **Attributes** tab of the console) either you should supply (in your call to `AdminCreateUser`) or the user should supply (when they sign up in response to your welcome message).
   *
   * For custom attributes, you must prepend the `custom:` prefix to the attribute name.
   *
   * To send a message inviting the user to sign up, you must specify the user's email address or phone number. You can do this in your call to AdminCreateUser or in the **Users** tab of the Amazon Cognito console for managing your user pools.
   *
   * You must also provide an email address or phone number when you expect the user to do passwordless sign-in with an email or SMS OTP. These attributes must be provided when passwordless options are the only available, or when you don't submit a `TemporaryPassword`.
   *
   * In your `AdminCreateUser` request, you can set the `email_verified` and `phone_number_verified` attributes to `true`. The following conditions apply:
   *
   * - **email**
   *
   *   The email address where you want the user to receive their confirmation code and username. You must provide a value for `email` when you want to set `email_verified` to `true`, or if you set `EMAIL` in the `DesiredDeliveryMediums` parameter.
   *
   * - **phone_number**
   *
   *   The phone number where you want the user to receive their confirmation code and username. You must provide a value for `phone_number` when you want to set `phone_number_verified` to `true`, or if you set `SMS` in the `DesiredDeliveryMediums` parameter.
   *
   * @public
   */
  UserAttributes?: AttributeType[] | undefined;

  /**
   * Temporary user attributes that contribute to the outcomes of your pre sign-up Lambda trigger. This set of key-value pairs are for custom validation of information that you collect from your users but don't need to retain.
   *
   * Your Lambda function can analyze this additional data and act on it. Your function can automatically confirm and verify select users or perform external API operations like logging user attributes and validation data to Amazon CloudWatch Logs.
   *
   * For more information about the pre sign-up Lambda trigger, see [Pre sign-up Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html).
   *
   * @public
   */
  ValidationData?: AttributeType[] | undefined;

  /**
   * The user's temporary password. This password must conform to the password policy that you specified when you created the user pool.
   *
   * The exception to the requirement for a password is when your user pool supports passwordless sign-in with email or SMS OTPs. To create a user with no password, omit this parameter or submit a blank value. You can only create a passwordless user when passwordless sign-in is available.
   *
   * The temporary password is valid only once. To complete the Admin Create User flow, the user must enter the temporary password in the sign-in page, along with a new password to be used in all future sign-ins.
   *
   * If you don't specify a value, Amazon Cognito generates one for you unless you have passwordless options active for your user pool.
   *
   * The temporary password can only be used until the user account expiration limit that you set for your user pool. To reset the account after that time limit, you must call `AdminCreateUser` again and specify `RESEND` for the `MessageAction` parameter.
   *
   * @public
   */
  TemporaryPassword?: string | undefined;

  /**
   * This parameter is used only if the `phone_number_verified` or `email_verified` attribute is set to `True`. Otherwise, it is ignored.
   *
   * If this parameter is set to `True` and the phone number or email address specified in the `UserAttributes` parameter already exists as an alias with a different user, this request migrates the alias from the previous user to the newly-created user. The previous user will no longer be able to log in using that alias.
   *
   * If this parameter is set to `False`, the API throws an `AliasExistsException` error if the alias already exists. The default value is `False`.
   *
   * @public
   */
  ForceAliasCreation?: boolean | undefined;

  /**
   * Set to `RESEND` to resend the invitation message to a user that already exists, and to reset the temporary-password duration with a new temporary password. Set to `SUPPRESS` to suppress sending the message. You can specify only one value.
   *
   * @public
   */
  MessageAction?: MessageActionType | undefined;

  /**
   * Specify `EMAIL` if email will be used to send the welcome message. Specify `SMS` if the phone number will be used. The default value is `SMS`. You can specify more than one value.
   *
   * @public
   */
  DesiredDeliveryMediums?: DeliveryMediumType[] | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * *This data type is no longer supported.* Applies only to SMS multi-factor authentication (MFA) configurations. Does not apply to time-based one-time password (TOTP) software token MFA configurations.
 *
 * @public
 */
export interface MFAOptionType {
  /**
   * The delivery medium to send the MFA code. You can use this parameter to set only the `SMS` delivery medium value.
   *
   * @public
   */
  DeliveryMedium?: DeliveryMediumType | undefined;

  /**
   * The attribute name of the MFA option type. The only valid value is `phone_number`.
   *
   * @public
   */
  AttributeName?: string | undefined;
}

/**
 * A user profile in a Amazon Cognito user pool.
 *
 * @public
 */
export interface UserType {
  /**
   * The user's username.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * Names and values of a user's attributes, for example `email`.
   *
   * @public
   */
  Attributes?: AttributeType[] | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  UserCreateDate?: Date | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  UserLastModifiedDate?: Date | undefined;

  /**
   * Indicates whether the user's account is enabled or disabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The user status. This can be one of the following:
   *
   * - `UNCONFIRMED`: User has been created but not confirmed.
   * - `CONFIRMED`: User has been confirmed.
   * - `EXTERNAL_PROVIDER`: User signed in with a third-party IdP.
   * - `RESET_REQUIRED`: User is confirmed, but the user must request a code and reset their password before they can sign in.
   * - `FORCE_CHANGE_PASSWORD`: The user is confirmed and the user can sign in using a temporary password, but on first sign-in, the user must change their password to a new value before doing anything else.
   *
   * The statuses `ARCHIVED`, `UNKNOWN`, and `COMPROMISED` are no longer used.
   *
   * @public
   */
  UserStatus?: UserStatusType | undefined;

  /**
   * The user's MFA configuration.
   *
   * @public
   */
  MFAOptions?: MFAOptionType[] | undefined;
}

/**
 * Represents the response from the server to the request to create the user.
 *
 * @public
 */
export interface AdminCreateUserResponse {
  /**
   * The new user's profile details.
   *
   * @public
   */
  User?: UserType | undefined;
}

/**
 * The message template structure.
 *
 * @public
 */
export interface MessageTemplateType {
  /**
   * The message template for SMS messages.
   *
   * @public
   */
  SMSMessage?: string | undefined;

  /**
   * The message template for email messages. EmailMessage is allowed only if [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is DEVELOPER.
   *
   * @public
   */
  EmailMessage?: string | undefined;

  /**
   * The subject line for email messages. EmailSubject is allowed only if [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is DEVELOPER.
   *
   * @public
   */
  EmailSubject?: string | undefined;
}

/**
 * The settings for administrator creation of users in a user pool. Contains settings for allowing user sign-up, customizing invitation messages to new users, and the amount of time before temporary passwords expire.
 *
 * @public
 */
export interface AdminCreateUserConfigType {
  /**
   * The setting for allowing self-service sign-up. When `true`, only administrators can create new user profiles. When `false`, users can register themselves and create a new user profile with the `SignUp` operation.
   *
   * @public
   */
  AllowAdminCreateUserOnly?: boolean | undefined;

  /**
   * This parameter is no longer in use.
   *
   * The password expiration limit in days for administrator-created users. When this time expires, the user can't sign in with their temporary password. To reset the account after that time limit, you must call `AdminCreateUser` again, specifying `RESEND` for the `MessageAction` parameter.
   *
   * The default value for this parameter is 7.
   *
   * @public
   */
  UnusedAccountValidityDays?: number | undefined;

  /**
   * The template for the welcome message to new users. This template must include the `\{####\}` temporary password placeholder if you are creating users with passwords. If your users don't have passwords, you can omit the placeholder.
   *
   * See also [Customizing User Invitation Messages](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-message-customizations.html#cognito-user-pool-settings-user-invitation-message-customization).
   *
   * @public
   */
  InviteMessageTemplate?: MessageTemplateType | undefined;
}

/**
 * @public
 */
export interface AdminDeleteSoftwareTokenRequest {
  /**
   * The ID of the user pool where you want to delete the user's software token.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;
}

/**
 * @public
 */
export interface AdminDeleteSoftwareTokenResponse {}

/**
 * Represents the request to delete a user as an administrator.
 *
 * @public
 */
export interface AdminDeleteUserRequest {
  /**
   * The ID of the user pool where you want to delete the user.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;
}

/**
 * Represents the request to delete user attributes as an administrator.
 *
 * @public
 */
export interface AdminDeleteUserAttributesRequest {
  /**
   * The ID of the user pool where you want to delete user attributes.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * An array of strings representing the user attribute names you want to delete.
   *
   * For custom attributes, you must prepend the `custom:` prefix to the attribute name.
   *
   * @public
   */
  UserAttributeNames: string[] | undefined;
}

/**
 * Represents the response received from the server for a request to delete user attributes.
 *
 * @public
 */
export interface AdminDeleteUserAttributesResponse {}

/**
 * The characteristics of a source or destination user for linking a federated user profile to a local user profile.
 *
 * @public
 */
export interface ProviderUserIdentifierType {
  /**
   * The name of the provider, such as Facebook, Google, or Login with Amazon.
   *
   * @public
   */
  ProviderName?: string | undefined;

  /**
   * The name of the provider attribute to link to, such as `NameID`.
   *
   * @public
   */
  ProviderAttributeName?: string | undefined;

  /**
   * The value of the provider attribute to link to, such as `xxxxx_account`.
   *
   * @public
   */
  ProviderAttributeValue?: string | undefined;
}

/**
 * @public
 */
export interface AdminDisableProviderForUserRequest {
  /**
   * The ID of the user pool where you want to delete the user's linked identities.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The user profile that you want to delete a linked identity from.
   *
   * @public
   */
  User: ProviderUserIdentifierType | undefined;
}

/**
 * @public
 */
export interface AdminDisableProviderForUserResponse {}

/**
 * Represents the request to disable the user as an administrator.
 *
 * @public
 */
export interface AdminDisableUserRequest {
  /**
   * The ID of the user pool where you want to disable the user.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;
}

/**
 * Represents the response received from the server to disable the user as an administrator.
 *
 * @public
 */
export interface AdminDisableUserResponse {}

/**
 * Represents the request that enables the user as an administrator.
 *
 * @public
 */
export interface AdminEnableUserRequest {
  /**
   * The ID of the user pool where you want to activate sign-in for the user.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;
}

/**
 * Represents the response from the server for the request to enable a user as an administrator.
 *
 * @public
 */
export interface AdminEnableUserResponse {}

/**
 * Sends the forgot device request, as an administrator.
 *
 * @public
 */
export interface AdminForgetDeviceRequest {
  /**
   * The ID of the user pool where the device owner is a user.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The key ID of the device that you want to delete.
   *
   * @public
   */
  DeviceKey: string | undefined;
}

/**
 * Represents the request to get the device, as an administrator.
 *
 * @public
 */
export interface AdminGetDeviceRequest {
  /**
   * The key of the device that you want to delete.
   *
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * The ID of the user pool where the device owner is a user.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;
}

/**
 * Information about a user's device that they've registered for device SRP authentication in your application. For more information, see [Working with user devices in your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html).
 *
 * @public
 */
export interface DeviceType {
  /**
   * The device key, for example `us-west-2_EXAMPLE-a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
   *
   * @public
   */
  DeviceKey?: string | undefined;

  /**
   * Metadata about a user's device, like name and last-access source IP.
   *
   * @public
   */
  DeviceAttributes?: AttributeType[] | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  DeviceCreateDate?: Date | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  DeviceLastModifiedDate?: Date | undefined;

  /**
   * The date when the user last signed in with the device.
   *
   * @public
   */
  DeviceLastAuthenticatedDate?: Date | undefined;
}

/**
 * Gets the device response, as an administrator.
 *
 * @public
 */
export interface AdminGetDeviceResponse {
  /**
   * Details of the requested device. Includes device information, last-accessed and created dates, and the device key.
   *
   * @public
   */
  Device: DeviceType | undefined;
}

/**
 * Represents the request to get the specified user as an administrator.
 *
 * @public
 */
export interface AdminGetUserRequest {
  /**
   * The ID of the user pool where you want to get information about the user.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;
}

/**
 * Represents the response from the server from the request to get the specified user as an administrator.
 *
 * @public
 */
export interface AdminGetUserResponse {
  /**
   * The username of the user that you requested.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * An array of name-value pairs of user attributes and their values, for example `"email": "testuser@example.com"`.
   *
   * @public
   */
  UserAttributes?: AttributeType[] | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  UserCreateDate?: Date | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  UserLastModifiedDate?: Date | undefined;

  /**
   * Indicates whether the user is activated for sign-in.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The user's status. Can be one of the following:
   *
   * - UNCONFIRMED - User has been created but not confirmed.
   * - CONFIRMED - User has been confirmed.
   * - UNKNOWN - User status isn't known.
   * - RESET_REQUIRED - User is confirmed, but the user must request a code and reset their password before they can sign in.
   * - FORCE_CHANGE_PASSWORD - The user is confirmed and the user can sign in using a temporary password, but on first sign-in, the user must change their password to a new value before doing anything else.
   * - EXTERNAL_PROVIDER - The user signed in with a third-party identity provider.
   *
   * @public
   */
  UserStatus?: UserStatusType | undefined;

  /**
   * *This response parameter is no longer supported.* It provides information only about SMS MFA configurations. It doesn't provide information about time-based one-time password (TOTP) software token MFA configurations. To look up information about either type of MFA configuration, use UserMFASettingList instead.
   *
   * @public
   */
  MFAOptions?: MFAOptionType[] | undefined;

  /**
   * The user's preferred MFA. Users can prefer SMS message, email message, or TOTP MFA.
   *
   * @public
   */
  PreferredMfaSetting?: string | undefined;

  /**
   * The MFA options that are activated for the user. The possible values in this list are `SMS_MFA`, `EMAIL_OTP`, and `SOFTWARE_TOKEN_MFA`.
   *
   * @public
   */
  UserMFASettingList?: string[] | undefined;
}

/**
 * @public
 */
export interface AdminGetUserAuthFactorsRequest {
  /**
   * The ID of the user pool where you want to get information about the user's authentication factors.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;
}

/**
 * @public
 */
export interface AdminGetUserAuthFactorsResponse {
  /**
   * The name of the user who is eligible for the authentication factors in the response.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The challenge method that Amazon Cognito returns to the user in response to sign-in requests. Users can prefer SMS message, email message, or TOTP MFA.
   *
   * @public
   */
  PreferredMfaSetting?: string | undefined;

  /**
   * The MFA options that are activated for the user. The possible values in this list are `SMS_MFA`, `EMAIL_OTP`, and `SOFTWARE_TOKEN_MFA`.
   *
   * @public
   */
  UserMFASettingList?: string[] | undefined;

  /**
   * The authentication types that are available to the user with `USER_AUTH` sign-in, for example `["PASSWORD", "WEB_AUTHN"]`.
   *
   * `PASSWORD` can only be used as a first authentication factor. `SOFTWARE_TOKEN` can only be used as an MFA factor. `EMAIL_OTP`, `SMS_OTP`, and `WEB_AUTHN` can be used as either a first authentication factor or an MFA factor. `WEB_AUTHN` is available as an MFA factor only when passkey MFA is enabled at the user pool level.
   *
   * @public
   */
  ConfiguredUserAuthFactors?: AuthFactorType[] | undefined;
}

/**
 * Information that your application adds to authentication requests. Applies an endpoint ID to the analytics data that your user pool sends to Amazon Pinpoint.
 *
 * An endpoint ID uniquely identifies a mobile device, email address or phone number that can receive messages from Amazon Pinpoint analytics. For more information about Amazon Web Services Regions that can contain Amazon Pinpoint resources for use with Amazon Cognito user pools, see [Using Amazon Pinpoint analytics with Amazon Cognito user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html).
 *
 * @public
 */
export interface AnalyticsMetadataType {
  /**
   * The endpoint ID. Information that you want to pass to Amazon Pinpoint about where to send notifications.
   *
   * @public
   */
  AnalyticsEndpointId?: string | undefined;
}

/**
 * The HTTP header in the `ContextData` parameter.
 *
 * @public
 */
export interface HttpHeader {
  /**
   * The header name.
   *
   * @public
   */
  headerName?: string | undefined;

  /**
   * The header value.
   *
   * @public
   */
  headerValue?: string | undefined;
}

/**
 * Contextual user data used for evaluating the risk of an authentication event by user pool threat protection.
 *
 * @public
 */
export interface ContextDataType {
  /**
   * The source IP address of your user's device.
   *
   * @public
   */
  IpAddress: string | undefined;

  /**
   * The name of your application's service endpoint.
   *
   * @public
   */
  ServerName: string | undefined;

  /**
   * The path of your application's service endpoint.
   *
   * @public
   */
  ServerPath: string | undefined;

  /**
   * The HTTP headers from your user's authentication request.
   *
   * @public
   */
  HttpHeaders: HttpHeader[] | undefined;

  /**
   * Encoded device-fingerprint details that your app collected with the Amazon Cognito context data collection library. For more information, see [Adding user device and session data to API requests](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint).
   *
   * @public
   */
  EncodedData?: string | undefined;
}

/**
 * Initiates the authorization request, as an administrator.
 *
 * @public
 */
export interface AdminInitiateAuthRequest {
  /**
   * The ID of the user pool where the user wants to sign in.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client where the user wants to sign in.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The authentication flow that you want to initiate. Each `AuthFlow` has linked `AuthParameters` that you must submit. The following are some example flows.
   *
   * - **USER_AUTH**
   *
   *   The entry point for [choice-based authentication](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice) with passwords, one-time passwords, and WebAuthn authenticators. Request a preferred authentication type or review available authentication types. From the offered authentication types, select one in a challenge response and then authenticate with that method in an additional challenge response. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * - **USER_SRP_AUTH**
   *
   *   Username-password authentication with the Secure Remote Password (SRP) protocol. For more information, see [Use SRP password verification in custom authentication flow](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow.html#Using-SRP-password-verification-in-custom-authentication-flow).
   *
   * - **REFRESH_TOKEN_AUTH and REFRESH_TOKEN**
   *
   *   Receive new ID and access tokens when you pass a `REFRESH_TOKEN` parameter with a valid refresh token as the value. For more information, see [Using the refresh token](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-the-refresh-token.html).
   *
   * - **CUSTOM_AUTH**
   *
   *   Custom authentication with Lambda triggers. For more information, see [Custom authentication challenge Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html).
   *
   * - **ADMIN_USER_PASSWORD_AUTH**
   *
   *   Server-side username-password authentication with the password sent directly in the request. For more information about client-side and server-side authentication, see [SDK authorization models](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-public-server-side.html).
   *
   * @public
   */
  AuthFlow: AuthFlowType | undefined;

  /**
   * The authentication parameters. These are inputs corresponding to the `AuthFlow` that you're invoking.
   *
   * The following are some authentication flows and their parameters. Add a `SECRET_HASH` parameter if your app client has a client secret. Add `DEVICE_KEY` if you want to bypass multi-factor authentication with a remembered device.
   *
   * - **USER_AUTH**
   *
   *   - `USERNAME` (required)
   *   - `PREFERRED_CHALLENGE`. If you don't provide a value for `PREFERRED_CHALLENGE`, Amazon Cognito responds with the `AvailableChallenges` parameter that specifies the available sign-in methods.
   *   - `TARGET_ACR_VALUES`. An optional, space-separated list of the authentication context class reference (ACR) level URIs that you want the user to reach. List the levels in priority order, from highest to lowest. Amazon Cognito attempts the highest-priority level that the user can satisfy, and falls back through the list. Amazon Cognito ignores any value that it doesn't recognize. If none of the requested values are valid, Amazon Cognito returns an error.
   *
   *     Requesting step-up authentication with this parameter requires the Essentials or Plus feature plan. On a lower feature plan, AdminInitiateAuth returns a FeatureUnavailableInTierException. `USERNAME` is required. When you provide an `ACCESS_TOKEN`, you must also provide `TARGET_ACR_VALUES`. Amazon Cognito returns an error if you provide an `ACCESS_TOKEN` without `TARGET_ACR_VALUES`. The `USERNAME` that you provide must match the user that the `ACCESS_TOKEN` was issued for.
   *
   *     For more information about step-up authentication and how Amazon Cognito handles multi-factor authentication requirements, see [Step-up authentication with ACR and AMR](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-step-up-authentication.html) in the *Amazon Cognito Developer Guide*.
   *   - `MAX_AGE`. An optional integer that sets the maximum number of seconds allowed since the user last authenticated. If the user's most recent authentication is older than this value, Amazon Cognito discards the authentication-methods credit from any access token that you provide and processes the request as a fresh authentication toward the target level. The access token itself remains valid.
   *
   * - **USER_SRP_AUTH**
   *
   *   - `USERNAME` (required)
   *   - `SRP_A` (required)
   *
   * - **ADMIN_USER_PASSWORD_AUTH**
   *
   *   - `USERNAME` (required)
   *   - `PASSWORD` (required)
   *
   * - **REFRESH_TOKEN_AUTH/REFRESH_TOKEN**
   *
   *   - `REFRESH_TOKEN`(required)
   *
   * - **CUSTOM_AUTH**
   *
   *   - `USERNAME` (required)
   *   - `ChallengeName: SRP_A` (when preceding custom authentication with SRP authentication)
   *   - `SRP_A: (An SRP_A value)` (when preceding custom authentication with SRP authentication)
   *
   * For more information about `SECRET_HASH`, see [Computing secret hash values](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash). For information about `DEVICE_KEY`, see [Working with user devices in your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html).
   *
   * @public
   */
  AuthParameters?: Record<string, string> | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * The `ClientMetadata` value is passed as input to the functions for only the following triggers:
   *
   * - Pre signup
   * - Pre authentication
   * - User migration
   *
   * This request also invokes the functions for the following triggers, but doesn't pass `ClientMetadata`:
   *
   * - Post authentication
   * - Custom message
   * - Pre token generation
   * - Create auth challenge
   * - Define auth challenge
   * - Custom email sender
   * - Custom SMS sender
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;

  /**
   * Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number.
   *
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.
   *
   * For more information, see [Collecting data for threat protection in applications](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html).
   *
   * @public
   */
  ContextData?: ContextDataType | undefined;

  /**
   * The optional session ID from a `ConfirmSignUp` API request. You can sign in a user directly from the sign-up process with an `AuthFlow` of `USER_AUTH` and `AuthParameters` of `EMAIL_OTP` or `SMS_OTP`, depending on how your user pool sent the confirmation-code message.
   *
   * @public
   */
  Session?: string | undefined;
}

/**
 * Information that your user pool responds with in `AuthenticationResult`when you configure it to remember devices and a user signs in with an unrecognized device. Amazon Cognito presents a new device key that you can use to set up [device authentication](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html) in a "Remember me on this device" authentication model.
 *
 * @public
 */
export interface NewDeviceMetadataType {
  /**
   * The device key, an identifier used in generating the `DEVICE_PASSWORD_VERIFIER` for device SRP authentication.
   *
   * @public
   */
  DeviceKey?: string | undefined;

  /**
   * The device group key, an identifier used in generating the `DEVICE_PASSWORD_VERIFIER` for device SRP authentication.
   *
   * @public
   */
  DeviceGroupKey?: string | undefined;
}

/**
 * The object that your application receives after authentication. Contains tokens and information for device authentication.
 *
 * @public
 */
export interface AuthenticationResultType {
  /**
   * Your user's access token.
   *
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * The expiration period of the authentication result in seconds.
   *
   * @public
   */
  ExpiresIn?: number | undefined;

  /**
   * The intended use of the token, for example `Bearer`.
   *
   * @public
   */
  TokenType?: string | undefined;

  /**
   * Your user's refresh token.
   *
   * @public
   */
  RefreshToken?: string | undefined;

  /**
   * Your user's ID token.
   *
   * @public
   */
  IdToken?: string | undefined;

  /**
   * The new device metadata from an authentication result.
   *
   * @public
   */
  NewDeviceMetadata?: NewDeviceMetadataType | undefined;
}

/**
 * Initiates the authentication response, as an administrator.
 *
 * @public
 */
export interface AdminInitiateAuthResponse {
  /**
   * The name of the challenge that you're responding to with this call. This is returned in the `AdminInitiateAuth` response if you must pass another challenge.
   *
   * Possible challenges include the following:
   *
   * > **Note:** All of the following challenges require `USERNAME` and, when the app client has a client secret, `SECRET_HASH` in the parameters. Include a `DEVICE_KEY` for device authentication.
   *
   * - `WEB_AUTHN`: Respond to the challenge with the results of a successful authentication with a WebAuthn authenticator, or passkey, as `CREDENTIAL`. Examples of WebAuthn authenticators include biometric devices and security keys.
   * - `PASSWORD`: Respond with the user's password as `PASSWORD`.
   * - `PASSWORD_SRP`: Respond with the initial SRP secret as `SRP_A`.
   * - `SELECT_CHALLENGE`: Respond with a challenge selection as `ANSWER`. It must be one of the challenge types in the `AvailableChallenges` response parameter. Add the parameters of the selected challenge, for example `USERNAME` and `SMS_OTP`.
   * - `SMS_MFA`: Respond with the code that your user pool delivered in an SMS message, as `SMS_MFA_CODE`
   * - `EMAIL_MFA`: Respond with the code that your user pool delivered in an email message, as `EMAIL_MFA_CODE`
   * - `EMAIL_OTP`: Respond with the code that your user pool delivered in an email message, as `EMAIL_OTP_CODE` .
   * - `SMS_OTP`: Respond with the code that your user pool delivered in an SMS message, as `SMS_OTP_CODE`.
   * - `PASSWORD_VERIFIER`: Respond with the second stage of SRP secrets as `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP`.
   * - `CUSTOM_CHALLENGE`: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued. The parameters of the challenge are determined by your Lambda function and issued in the `ChallengeParameters` of a challenge response.
   * - `DEVICE_SRP_AUTH`: Respond with the initial parameters of device SRP authentication. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `DEVICE_PASSWORD_VERIFIER`: Respond with `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP` after client-side SRP calculations. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `NEW_PASSWORD_REQUIRED`: For users who are required to change their passwords after successful first login. Respond to this challenge with `NEW_PASSWORD` and any required attributes that Amazon Cognito returned in the `requiredAttributes` parameter. You can also set values for attributes that aren't required by your user pool and that your app client can write.
   *
   *   Amazon Cognito only returns this challenge for users who have temporary passwords. When you create passwordless users, you must provide values for all required attributes.
   *
   *   > **Note:** In a `NEW_PASSWORD_REQUIRED` challenge response, you can't modify a required attribute that already has a value. In `AdminRespondToAuthChallenge` or `RespondToAuthChallenge`, set a value for any keys that Amazon Cognito returned in the `requiredAttributes` parameter, then use the `AdminUpdateUserAttributes` or `UpdateUserAttributes` API operation to modify the value of any additional attributes.
   * - `MFA_SETUP`: For users who are required to setup an MFA factor before they can sign in. The MFA types activated for the user pool will be listed in the challenge parameters `MFAS_CAN_SETUP` value.
   *
   *   To set up time-based one-time password (TOTP) MFA, use the session returned in this challenge from `InitiateAuth` or `AdminInitiateAuth` as an input to `AssociateSoftwareToken`. Then, use the session returned by `VerifySoftwareToken` as an input to `RespondToAuthChallenge` or `AdminRespondToAuthChallenge` with challenge name `MFA_SETUP` to complete sign-in.
   *
   *   To set up SMS or email MFA, collect a `phone_number` or `email` attribute for the user. Then restart the authentication flow with an `InitiateAuth` or `AdminInitiateAuth` request.
   *
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * The session that must be passed to challenge-response requests. If an `AdminInitiateAuth` or `AdminRespondToAuthChallenge` API request results in another authentication challenge, Amazon Cognito returns a session ID and the parameters of the next challenge. Pass this session ID in the `Session` parameter of `AdminRespondToAuthChallenge`.
   *
   * @public
   */
  Session?: string | undefined;

  /**
   * The parameters of an authentication challenge. Amazon Cognito returns challenge parameters as a guide to the responses your user or application must provide for the returned `ChallengeName`. Calculate responses to the challenge parameters and pass them in the `ChallengeParameters` of `AdminRespondToAuthChallenge`.
   *
   * All challenges require `USERNAME` and, when the app client has a client secret, `SECRET_HASH`.
   *
   * In SRP challenges, Amazon Cognito returns the `username` attribute in `USER_ID_FOR_SRP` instead of any email address, preferred username, or phone number alias that you might have specified in your `AdminInitiateAuth` request. You must use the username and not an alias in the `ChallengeResponses` of your challenge response.
   *
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * The outcome of successful authentication. This is only returned if the user pool has no additional challenges to return. If Amazon Cognito returns another challenge, the response includes `ChallengeName`, `ChallengeParameters`, and `Session` so that your user can answer the challenge.
   *
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;

  /**
   * This response parameter lists the available authentication challenges that users can select from in [choice-based authentication](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice). For example, they might be able to choose between passkey authentication, a one-time password from an SMS message, and a traditional password.
   *
   * @public
   */
  AvailableChallenges?: ChallengeNameType[] | undefined;
}

/**
 * @public
 */
export interface AdminLinkProviderForUserRequest {
  /**
   * The ID of the user pool where you want to link a federated identity.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The existing user in the user pool that you want to assign to the external IdP user account. This user can be a local (Username + Password) Amazon Cognito user pools user or a federated user (for example, a SAML or Facebook user). If the user doesn't exist, Amazon Cognito generates an exception. Amazon Cognito returns this user when the new user (with the linked IdP attribute) signs in.
   *
   * For a native username + password user, the `ProviderAttributeValue` for the `DestinationUser` should be the username in the user pool. For a federated user, it should be the provider-specific `user_id`.
   *
   * The `ProviderAttributeName` of the `DestinationUser` is ignored.
   *
   * The `ProviderName` should be set to `Cognito` for users in Cognito user pools.
   *
   * @public
   */
  DestinationUser: ProviderUserIdentifierType | undefined;

  /**
   * An external IdP account for a user who doesn't exist yet in the user pool. This user must be a federated user (for example, a SAML or Facebook user), not another native user.
   *
   * If the `SourceUser` is using a federated social IdP, such as Facebook, Google, or Login with Amazon, you must set the `ProviderAttributeName` to `Cognito_Subject`. For social IdPs, the `ProviderName` will be `Facebook`, `Google`, or `LoginWithAmazon`, and Amazon Cognito will automatically parse the Facebook, Google, and Login with Amazon tokens for `id`, `sub`, and `user_id`, respectively. The `ProviderAttributeValue` for the user must be the same value as the `id`, `sub`, or `user_id` value found in the social IdP token.
   *
   * For OIDC, the `ProviderAttributeName` can be any mapped value from a claim in the ID token, or that your app retrieves from the `userInfo` endpoint. For SAML, the `ProviderAttributeName` can be any mapped value from a claim in the SAML assertion.
   *
   * The following additional considerations apply to `SourceUser` for OIDC and SAML providers.
   *
   * - You must map the claim to a user pool attribute in your IdP configuration, and set the user pool attribute name as the value of `ProviderAttributeName` in your `AdminLinkProviderForUser` request. For example, `email`.
   * - When you set `ProviderAttributeName` to `Cognito_Subject`, Amazon Cognito will automatically parse the default unique identifier found in the subject from the IdP token.
   *
   * @public
   */
  SourceUser: ProviderUserIdentifierType | undefined;
}

/**
 * @public
 */
export interface AdminLinkProviderForUserResponse {}

/**
 * Represents the request to list devices, as an administrator.
 *
 * @public
 */
export interface AdminListDevicesRequest {
  /**
   * The ID of the user pool where the device owner is a user.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The maximum number of devices that you want Amazon Cognito to return in the response.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * Lists the device's response, as an administrator.
 *
 * @public
 */
export interface AdminListDevicesResponse {
  /**
   * An array of devices and their information. Each entry that's returned includes device information, last-accessed and created dates, and the device key.
   *
   * @public
   */
  Devices?: DeviceType[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * @public
 */
export interface AdminListGroupsForUserRequest {
  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The ID of the user pool where you want to view a user's groups.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The maximum number of groups that you want Amazon Cognito to return in the response.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A user pool group. Contains details about the group and the way that it contributes to IAM role decisions with identity pools. Identity pools can make decisions about the IAM role to assign based on groups: users get credentials for the role associated with their highest-priority group.
 *
 * @public
 */
export interface GroupType {
  /**
   * The name of the group.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * The ID of the user pool that contains the group.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * A friendly description of the group.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the IAM role associated with the group. If a group has the highest priority of a user's groups, users who authenticate with an identity pool get credentials for the `RoleArn` that's associated with the group.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A non-negative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower `Precedence` values take precedence over groups with higher ornull `Precedence` values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN is given in the user's tokens for the `cognito:roles` and `cognito:preferred_role` claims.
   *
   * Two groups can have the same `Precedence` value. If this happens, neither group takes precedence over the other. If two groups with the same `Precedence` have the same role ARN, that role is used in the `cognito:preferred_role` claim in tokens for users in each group. If the two groups have different role ARNs, the `cognito:preferred_role` claim isn't set in users' tokens.
   *
   * The default `Precedence` value is `null`.
   *
   * @public
   */
  Precedence?: number | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface AdminListGroupsForUserResponse {
  /**
   * An array of groups and information about them.
   *
   * @public
   */
  Groups?: GroupType[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface AdminListUserAuthEventsRequest {
  /**
   * The Id of the user pool that contains the user profile with the logged events.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The maximum number of authentication events to return. Returns 60 events if you set `MaxResults` to 0, or if you don't include a `MaxResults` parameter.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The responses to the challenge that you received in the previous request. Each challenge has its own required response parameters. The following examples are partial JSON request bodies that highlight challenge-response parameters.
 *
 * > **Important:** You must provide a SECRET_HASH parameter in all challenge responses to an app client that has a client secret. Include a `DEVICE_KEY` for device authentication.
 *
 * - **SELECT_CHALLENGE**
 *
 *   `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "USERNAME": "[username]", "ANSWER": "[Challenge name]"\}`
 *
 *   Available challenges are `PASSWORD`, `PASSWORD_SRP`, `EMAIL_OTP`, `SMS_OTP`, and `WEB_AUTHN`.
 *
 *   Complete authentication in the `SELECT_CHALLENGE` response for `PASSWORD`, `PASSWORD_SRP`, and `WEB_AUTHN`:
 *
 *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "WEB_AUTHN", "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"\}`
 *
 *     See [AuthenticationResponseJSON](https://www.w3.org/TR/WebAuthn-3/#dictdef-authenticationresponsejson).
 *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "PASSWORD", "USERNAME": "[username]", "PASSWORD": "[password]"\}`
 *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "PASSWORD_SRP", "USERNAME": "[username]", "SRP_A": "[SRP_A]"\}`
 *
 *   For `SMS_OTP` and `EMAIL_OTP`, respond with the username and answer. Your user pool will send a code for the user to submit in the next challenge response.
 *
 *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "SMS_OTP", "USERNAME": "[username]"\}`
 *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "EMAIL_OTP", "USERNAME": "[username]"\}`
 *
 * - **WEB_AUTHN**
 *
 *   `"ChallengeName": "WEB_AUTHN", "ChallengeResponses": \{ "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"\}`
 *
 *   See [AuthenticationResponseJSON](https://www.w3.org/TR/WebAuthn-3/#dictdef-authenticationresponsejson).
 *
 * - **PASSWORD**
 *
 *   `"ChallengeName": "PASSWORD", "ChallengeResponses": \{ "USERNAME": "[username]", "PASSWORD": "[password]"\}`
 *
 * - **PASSWORD_SRP**
 *
 *   `"ChallengeName": "PASSWORD_SRP", "ChallengeResponses": \{ "USERNAME": "[username]", "SRP_A": "[SRP_A]"\}`
 *
 * - **SMS_OTP**
 *
 *   `"ChallengeName": "SMS_OTP", "ChallengeResponses": \{"SMS_OTP_CODE": "[code]", "USERNAME": "[username]"\}`
 *
 * - **EMAIL_OTP**
 *
 *   `"ChallengeName": "EMAIL_OTP", "ChallengeResponses": \{"EMAIL_OTP_CODE": "[code]", "USERNAME": "[username]"\}`
 *
 * - **SMS_MFA**
 *
 *   `"ChallengeName": "SMS_MFA", "ChallengeResponses": \{"SMS_MFA_CODE": "[code]", "USERNAME": "[username]"\}`
 *
 * - **PASSWORD_VERIFIER**
 *
 *   This challenge response is part of the SRP flow. Amazon Cognito requires that your application respond to this challenge within a few seconds. When the response time exceeds this period, your user pool returns a `NotAuthorizedException` error.
 *
 *   `"ChallengeName": "PASSWORD_VERIFIER", "ChallengeResponses": \{"PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"\}`
 *
 * - **CUSTOM_CHALLENGE**
 *
 *   `"ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses": \{"USERNAME": "[username]", "ANSWER": "[challenge_answer]"\}`
 *
 * - **NEW_PASSWORD_REQUIRED**
 *
 *   `"ChallengeName": "NEW_PASSWORD_REQUIRED", "ChallengeResponses": \{"NEW_PASSWORD": "[new_password]", "USERNAME": "[username]"\}`
 *
 *   To set any required attributes that `InitiateAuth` returned in an `requiredAttributes` parameter, add `"userAttributes.[attribute_name]": "[attribute_value]"`. This parameter can also set values for writable attributes that aren't required by your user pool.
 *
 *   > **Note:** In a `NEW_PASSWORD_REQUIRED` challenge response, you can't modify a required attribute that already has a value. In `AdminRespondToAuthChallenge` or `RespondToAuthChallenge`, set a value for any keys that Amazon Cognito returned in the `requiredAttributes` parameter, then use the `AdminUpdateUserAttributes` or `UpdateUserAttributes` API operation to modify the value of any additional attributes.
 *
 * - **SOFTWARE_TOKEN_MFA**
 *
 *   `"ChallengeName": "SOFTWARE_TOKEN_MFA", "ChallengeResponses": \{"USERNAME": "[username]", "SOFTWARE_TOKEN_MFA_CODE": [authenticator_code]\}`
 *
 * - **DEVICE_SRP_AUTH**
 *
 *   `"ChallengeName": "DEVICE_SRP_AUTH", "ChallengeResponses": \{"USERNAME": "[username]", "DEVICE_KEY": "[device_key]", "SRP_A": "[srp_a]"\}`
 *
 * - **DEVICE_PASSWORD_VERIFIER**
 *
 *   `"ChallengeName": "DEVICE_PASSWORD_VERIFIER", "ChallengeResponses": \{"DEVICE_KEY": "[device_key]", "PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"\}`
 *
 * - **MFA_SETUP**
 *
 *   `"ChallengeName": "MFA_SETUP", "ChallengeResponses": \{"USERNAME": "[username]"\}, "SESSION": "[Session ID from VerifySoftwareToken]"`
 *
 * - **SELECT_MFA_TYPE**
 *
 *   `"ChallengeName": "SELECT_MFA_TYPE", "ChallengeResponses": \{"USERNAME": "[username]", "ANSWER": "[SMS_MFA|EMAIL_MFA|SOFTWARE_TOKEN_MFA]"\}`
 *
 * For more information about `SECRET_HASH`, see [Computing secret hash values](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash). For information about `DEVICE_KEY`, see [Working with user devices in your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html).
 *
 * @public
 */
export interface ChallengeResponseType {
  /**
   * The type of challenge that your previous authentication request returned in the parameter `ChallengeName`, for example `SMS_MFA`.
   *
   * @public
   */
  ChallengeName?: ChallengeName | undefined;

  /**
   * The set of key-value pairs that provides a response to the requested challenge.
   *
   * @public
   */
  ChallengeResponse?: ChallengeResponse | undefined;
}

/**
 * The context data that your application submitted in an authentication request with threat protection, as displayed in an `AdminListUserAuthEvents` response.
 *
 * @public
 */
export interface EventContextDataType {
  /**
   * The source IP address of your user's device.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * The user's device name.
   *
   * @public
   */
  DeviceName?: string | undefined;

  /**
   * The user's time zone.
   *
   * @public
   */
  Timezone?: string | undefined;

  /**
   * The user's city.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The user's country.
   *
   * @public
   */
  Country?: string | undefined;
}

/**
 * The feedback that your application submitted to a threat protection event log, as displayed in an `AdminListUserAuthEvents` response.
 *
 * @public
 */
export interface EventFeedbackType {
  /**
   * Your feedback to the authentication event. When you provide a `FeedbackValue` value of `valid`, you tell Amazon Cognito that you trust a user session where Amazon Cognito has evaluated some level of risk. When you provide a `FeedbackValue` value of `invalid`, you tell Amazon Cognito that you don't trust a user session, or you don't believe that Amazon Cognito evaluated a high-enough risk level.
   *
   * @public
   */
  FeedbackValue: FeedbackValueType | undefined;

  /**
   * The submitter of the event feedback. For example, if you submit event feedback in the Amazon Cognito console, this value is `Admin`.
   *
   * @public
   */
  Provider: string | undefined;

  /**
   * The date that you or your user submitted the feedback.
   *
   * @public
   */
  FeedbackDate?: Date | undefined;
}

/**
 * The risk evaluation by adaptive authentication, as displayed in an `AdminListUserAuthEvents` response. Contains evaluations of compromised-credentials detection and assessed risk level and action taken by adaptive authentication.
 *
 * @public
 */
export interface EventRiskType {
  /**
   * The action taken by adaptive authentication. If `NoRisk`, your user pool took no action. If `AccountTakeover`, your user pool applied the adaptive authentication automated response that you configured. If `Block`, your user pool prevented the attempt.
   *
   * @public
   */
  RiskDecision?: RiskDecisionType | undefined;

  /**
   * The risk level that adaptive authentication assessed for the authentication event.
   *
   * @public
   */
  RiskLevel?: RiskLevelType | undefined;

  /**
   * Indicates whether compromised credentials were detected during an authentication event.
   *
   * @public
   */
  CompromisedCredentialsDetected?: boolean | undefined;
}

/**
 * One authentication event that Amazon Cognito logged in a user pool with threat protection active. Contains user and device metadata and a risk assessment from your user pool.
 *
 * @public
 */
export interface AuthEventType {
  /**
   * The event ID.
   *
   * @public
   */
  EventId?: string | undefined;

  /**
   * The type of authentication event.
   *
   * @public
   */
  EventType?: EventType | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The event response.
   *
   * @public
   */
  EventResponse?: EventResponseType | undefined;

  /**
   * The threat evaluation from your user pool about an event. Contains information about whether your user pool detected compromised credentials, whether the event triggered an automated response, and the level of risk.
   *
   * @public
   */
  EventRisk?: EventRiskType | undefined;

  /**
   * A list of the challenges that the user was requested to answer, for example `Password`, and the result, for example `Success`.
   *
   * @public
   */
  ChallengeResponses?: ChallengeResponseType[] | undefined;

  /**
   * The user context data captured at the time of an event request. This value provides additional information about the client from which event the request is received.
   *
   * @public
   */
  EventContextData?: EventContextDataType | undefined;

  /**
   * The `UpdateAuthEventFeedback` or `AdminUpdateAuthEventFeedback` feedback that you or your user provided in response to the event. A value of `Valid` indicates that you disagreed with the level of risk that your user pool assigned, and evaluated a session to be valid, or likely safe. A value of `Invalid` indicates that you agreed with the user pool risk level and evaluated a session to be invalid, or likely malicious.
   *
   * @public
   */
  EventFeedback?: EventFeedbackType | undefined;
}

/**
 * @public
 */
export interface AdminListUserAuthEventsResponse {
  /**
   * The response object. It includes the `EventID`, `EventType`, `CreationDate`, `EventRisk`, and `EventResponse`.
   *
   * @public
   */
  AuthEvents?: AuthEventType[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface AdminRemoveUserFromGroupRequest {
  /**
   * The ID of the user pool that contains the group and the user that you want to remove.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The name of the group that you want to remove the user from, for example `MyTestGroup`.
   *
   * @public
   */
  GroupName: string | undefined;
}

/**
 * Represents the request to reset a user's password as an administrator.
 *
 * @public
 */
export interface AdminResetUserPasswordRequest {
  /**
   * The ID of the user pool where you want to reset the user's password.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * Represents the response from the server to reset a user password as an administrator.
 *
 * @public
 */
export interface AdminResetUserPasswordResponse {}

/**
 * The request to respond to the authentication challenge, as an administrator.
 *
 * @public
 */
export interface AdminRespondToAuthChallengeRequest {
  /**
   * The ID of the user pool where you want to respond to an authentication challenge.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client where you initiated sign-in.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The name of the challenge that you are responding to.
   *
   * Possible challenges include the following:
   *
   * > **Note:** All of the following challenges require `USERNAME` and, when the app client has a client secret, `SECRET_HASH` in the parameters. Include a `DEVICE_KEY` for device authentication.
   *
   * - `WEB_AUTHN`: Respond to the challenge with the results of a successful authentication with a WebAuthn authenticator, or passkey, as `CREDENTIAL`. Examples of WebAuthn authenticators include biometric devices and security keys.
   * - `PASSWORD`: Respond with the user's password as `PASSWORD`.
   * - `PASSWORD_SRP`: Respond with the initial SRP secret as `SRP_A`.
   * - `SELECT_CHALLENGE`: Respond with a challenge selection as `ANSWER`. It must be one of the challenge types in the `AvailableChallenges` response parameter. Add the parameters of the selected challenge, for example `USERNAME` and `SMS_OTP`.
   * - `SMS_MFA`: Respond with the code that your user pool delivered in an SMS message, as `SMS_MFA_CODE`
   * - `EMAIL_MFA`: Respond with the code that your user pool delivered in an email message, as `EMAIL_MFA_CODE`
   * - `EMAIL_OTP`: Respond with the code that your user pool delivered in an email message, as `EMAIL_OTP_CODE` .
   * - `SMS_OTP`: Respond with the code that your user pool delivered in an SMS message, as `SMS_OTP_CODE`.
   * - `PASSWORD_VERIFIER`: Respond with the second stage of SRP secrets as `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP`.
   * - `CUSTOM_CHALLENGE`: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued. The parameters of the challenge are determined by your Lambda function and issued in the `ChallengeParameters` of a challenge response.
   * - `DEVICE_SRP_AUTH`: Respond with the initial parameters of device SRP authentication. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `DEVICE_PASSWORD_VERIFIER`: Respond with `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP` after client-side SRP calculations. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `NEW_PASSWORD_REQUIRED`: For users who are required to change their passwords after successful first login. Respond to this challenge with `NEW_PASSWORD` and any required attributes that Amazon Cognito returned in the `requiredAttributes` parameter. You can also set values for attributes that aren't required by your user pool and that your app client can write.
   *
   *   Amazon Cognito only returns this challenge for users who have temporary passwords. When you create passwordless users, you must provide values for all required attributes.
   *
   *   > **Note:** In a `NEW_PASSWORD_REQUIRED` challenge response, you can't modify a required attribute that already has a value. In `AdminRespondToAuthChallenge` or `RespondToAuthChallenge`, set a value for any keys that Amazon Cognito returned in the `requiredAttributes` parameter, then use the `AdminUpdateUserAttributes` or `UpdateUserAttributes` API operation to modify the value of any additional attributes.
   * - `MFA_SETUP`: For users who are required to setup an MFA factor before they can sign in. The MFA types activated for the user pool will be listed in the challenge parameters `MFAS_CAN_SETUP` value.
   *
   *   To set up time-based one-time password (TOTP) MFA, use the session returned in this challenge from `InitiateAuth` or `AdminInitiateAuth` as an input to `AssociateSoftwareToken`. Then, use the session returned by `VerifySoftwareToken` as an input to `RespondToAuthChallenge` or `AdminRespondToAuthChallenge` with challenge name `MFA_SETUP` to complete sign-in.
   *
   *   To set up SMS or email MFA, collect a `phone_number` or `email` attribute for the user. Then restart the authentication flow with an `InitiateAuth` or `AdminInitiateAuth` request.
   *
   * @public
   */
  ChallengeName: ChallengeNameType | undefined;

  /**
   * The responses to the challenge that you received in the previous request. Each challenge has its own required response parameters. The following examples are partial JSON request bodies that highlight challenge-response parameters.
   *
   * > **Important:** You must provide a SECRET_HASH parameter in all challenge responses to an app client that has a client secret. Include a `DEVICE_KEY` for device authentication.
   *
   * - **SELECT_CHALLENGE**
   *
   *   `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "USERNAME": "[username]", "ANSWER": "[Challenge name]"\}`
   *
   *   Available challenges are `PASSWORD`, `PASSWORD_SRP`, `EMAIL_OTP`, `SMS_OTP`, and `WEB_AUTHN`.
   *
   *   Complete authentication in the `SELECT_CHALLENGE` response for `PASSWORD`, `PASSWORD_SRP`, and `WEB_AUTHN`:
   *
   *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "WEB_AUTHN", "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"\}`
   *
   *     See [AuthenticationResponseJSON](https://www.w3.org/TR/WebAuthn-3/#dictdef-authenticationresponsejson).
   *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "PASSWORD", "USERNAME": "[username]", "PASSWORD": "[password]"\}`
   *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "PASSWORD_SRP", "USERNAME": "[username]", "SRP_A": "[SRP_A]"\}`
   *
   *   For `SMS_OTP` and `EMAIL_OTP`, respond with the username and answer. Your user pool will send a code for the user to submit in the next challenge response.
   *
   *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "SMS_OTP", "USERNAME": "[username]"\}`
   *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "EMAIL_OTP", "USERNAME": "[username]"\}`
   *
   * - **WEB_AUTHN**
   *
   *   `"ChallengeName": "WEB_AUTHN", "ChallengeResponses": \{ "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"\}`
   *
   *   See [AuthenticationResponseJSON](https://www.w3.org/TR/WebAuthn-3/#dictdef-authenticationresponsejson).
   *
   * - **PASSWORD**
   *
   *   `"ChallengeName": "PASSWORD", "ChallengeResponses": \{ "USERNAME": "[username]", "PASSWORD": "[password]"\}`
   *
   * - **PASSWORD_SRP**
   *
   *   `"ChallengeName": "PASSWORD_SRP", "ChallengeResponses": \{ "USERNAME": "[username]", "SRP_A": "[SRP_A]"\}`
   *
   * - **SMS_OTP**
   *
   *   `"ChallengeName": "SMS_OTP", "ChallengeResponses": \{"SMS_OTP_CODE": "[code]", "USERNAME": "[username]"\}`
   *
   * - **EMAIL_OTP**
   *
   *   `"ChallengeName": "EMAIL_OTP", "ChallengeResponses": \{"EMAIL_OTP_CODE": "[code]", "USERNAME": "[username]"\}`
   *
   * - **SMS_MFA**
   *
   *   `"ChallengeName": "SMS_MFA", "ChallengeResponses": \{"SMS_MFA_CODE": "[code]", "USERNAME": "[username]"\}`
   *
   * - **PASSWORD_VERIFIER**
   *
   *   This challenge response is part of the SRP flow. Amazon Cognito requires that your application respond to this challenge within a few seconds. When the response time exceeds this period, your user pool returns a `NotAuthorizedException` error.
   *
   *   `"ChallengeName": "PASSWORD_VERIFIER", "ChallengeResponses": \{"PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"\}`
   *
   * - **CUSTOM_CHALLENGE**
   *
   *   `"ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses": \{"USERNAME": "[username]", "ANSWER": "[challenge_answer]"\}`
   *
   * - **NEW_PASSWORD_REQUIRED**
   *
   *   `"ChallengeName": "NEW_PASSWORD_REQUIRED", "ChallengeResponses": \{"NEW_PASSWORD": "[new_password]", "USERNAME": "[username]"\}`
   *
   *   To set any required attributes that `InitiateAuth` returned in an `requiredAttributes` parameter, add `"userAttributes.[attribute_name]": "[attribute_value]"`. This parameter can also set values for writable attributes that aren't required by your user pool.
   *
   *   > **Note:** In a `NEW_PASSWORD_REQUIRED` challenge response, you can't modify a required attribute that already has a value. In `AdminRespondToAuthChallenge` or `RespondToAuthChallenge`, set a value for any keys that Amazon Cognito returned in the `requiredAttributes` parameter, then use the `AdminUpdateUserAttributes` or `UpdateUserAttributes` API operation to modify the value of any additional attributes.
   *
   * - **SOFTWARE_TOKEN_MFA**
   *
   *   `"ChallengeName": "SOFTWARE_TOKEN_MFA", "ChallengeResponses": \{"USERNAME": "[username]", "SOFTWARE_TOKEN_MFA_CODE": [authenticator_code]\}`
   *
   * - **DEVICE_SRP_AUTH**
   *
   *   `"ChallengeName": "DEVICE_SRP_AUTH", "ChallengeResponses": \{"USERNAME": "[username]", "DEVICE_KEY": "[device_key]", "SRP_A": "[srp_a]"\}`
   *
   * - **DEVICE_PASSWORD_VERIFIER**
   *
   *   `"ChallengeName": "DEVICE_PASSWORD_VERIFIER", "ChallengeResponses": \{"DEVICE_KEY": "[device_key]", "PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"\}`
   *
   * - **MFA_SETUP**
   *
   *   `"ChallengeName": "MFA_SETUP", "ChallengeResponses": \{"USERNAME": "[username]"\}, "SESSION": "[Session ID from VerifySoftwareToken]"`
   *
   * - **SELECT_MFA_TYPE**
   *
   *   `"ChallengeName": "SELECT_MFA_TYPE", "ChallengeResponses": \{"USERNAME": "[username]", "ANSWER": "[SMS_MFA|EMAIL_MFA|SOFTWARE_TOKEN_MFA]"\}`
   *
   * For more information about `SECRET_HASH`, see [Computing secret hash values](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash). For information about `DEVICE_KEY`, see [Working with user devices in your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html).
   *
   * @public
   */
  ChallengeResponses?: Record<string, string> | undefined;

  /**
   * The session identifier that maintains the state of authentication requests and challenge responses. If an `AdminInitiateAuth` or `AdminRespondToAuthChallenge` API request results in a determination that your application must pass another challenge, Amazon Cognito returns a session with other challenge parameters. Send this session identifier, unmodified, to the next `AdminRespondToAuthChallenge` request.
   *
   * @public
   */
  Session?: string | undefined;

  /**
   * Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number.
   *
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.
   *
   * For more information, see [Collecting data for threat protection in applications](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html).
   *
   * @public
   */
  ContextData?: ContextDataType | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * Responds to the authentication challenge, as an administrator.
 *
 * @public
 */
export interface AdminRespondToAuthChallengeResponse {
  /**
   * The name of the next challenge that you must respond to.
   *
   * Possible challenges include the following:
   *
   * > **Note:** All of the following challenges require `USERNAME` and, when the app client has a client secret, `SECRET_HASH` in the parameters. Include a `DEVICE_KEY` for device authentication.
   *
   * - `WEB_AUTHN`: Respond to the challenge with the results of a successful authentication with a WebAuthn authenticator, or passkey, as `CREDENTIAL`. Examples of WebAuthn authenticators include biometric devices and security keys.
   * - `PASSWORD`: Respond with the user's password as `PASSWORD`.
   * - `PASSWORD_SRP`: Respond with the initial SRP secret as `SRP_A`.
   * - `SELECT_CHALLENGE`: Respond with a challenge selection as `ANSWER`. It must be one of the challenge types in the `AvailableChallenges` response parameter. Add the parameters of the selected challenge, for example `USERNAME` and `SMS_OTP`.
   * - `SMS_MFA`: Respond with the code that your user pool delivered in an SMS message, as `SMS_MFA_CODE`
   * - `EMAIL_MFA`: Respond with the code that your user pool delivered in an email message, as `EMAIL_MFA_CODE`
   * - `EMAIL_OTP`: Respond with the code that your user pool delivered in an email message, as `EMAIL_OTP_CODE` .
   * - `SMS_OTP`: Respond with the code that your user pool delivered in an SMS message, as `SMS_OTP_CODE`.
   * - `PASSWORD_VERIFIER`: Respond with the second stage of SRP secrets as `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP`.
   * - `CUSTOM_CHALLENGE`: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued. The parameters of the challenge are determined by your Lambda function and issued in the `ChallengeParameters` of a challenge response.
   * - `DEVICE_SRP_AUTH`: Respond with the initial parameters of device SRP authentication. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `DEVICE_PASSWORD_VERIFIER`: Respond with `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP` after client-side SRP calculations. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `NEW_PASSWORD_REQUIRED`: For users who are required to change their passwords after successful first login. Respond to this challenge with `NEW_PASSWORD` and any required attributes that Amazon Cognito returned in the `requiredAttributes` parameter. You can also set values for attributes that aren't required by your user pool and that your app client can write.
   *
   *   Amazon Cognito only returns this challenge for users who have temporary passwords. When you create passwordless users, you must provide values for all required attributes.
   *
   *   > **Note:** In a `NEW_PASSWORD_REQUIRED` challenge response, you can't modify a required attribute that already has a value. In `AdminRespondToAuthChallenge` or `RespondToAuthChallenge`, set a value for any keys that Amazon Cognito returned in the `requiredAttributes` parameter, then use the `AdminUpdateUserAttributes` or `UpdateUserAttributes` API operation to modify the value of any additional attributes.
   * - `MFA_SETUP`: For users who are required to setup an MFA factor before they can sign in. The MFA types activated for the user pool will be listed in the challenge parameters `MFAS_CAN_SETUP` value.
   *
   *   To set up time-based one-time password (TOTP) MFA, use the session returned in this challenge from `InitiateAuth` or `AdminInitiateAuth` as an input to `AssociateSoftwareToken`. Then, use the session returned by `VerifySoftwareToken` as an input to `RespondToAuthChallenge` or `AdminRespondToAuthChallenge` with challenge name `MFA_SETUP` to complete sign-in.
   *
   *   To set up SMS or email MFA, collect a `phone_number` or `email` attribute for the user. Then restart the authentication flow with an `InitiateAuth` or `AdminInitiateAuth` request.
   *
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * The session identifier that maintains the state of authentication requests and challenge responses. If an `AdminInitiateAuth` or `AdminRespondToAuthChallenge` API request results in a determination that your application must pass another challenge, Amazon Cognito returns a session with other challenge parameters. Send this session identifier, unmodified, to the next `AdminRespondToAuthChallenge` request.
   *
   * @public
   */
  Session?: string | undefined;

  /**
   * The parameters that define your response to the next challenge.
   *
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * The outcome of a successful authentication process. After your application has passed all challenges, Amazon Cognito returns an `AuthenticationResult` with the JSON web tokens (JWTs) that indicate successful sign-in.
   *
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;

  /**
   * This response parameter lists the available authentication challenges that users can select from in [choice-based authentication](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice). For example, they might be able to choose between passkey authentication, a one-time password from an SMS message, and a traditional password.
   *
   * @public
   */
  AvailableChallenges?: ChallengeNameType[] | undefined;
}

/**
 * User preferences for multi-factor authentication with email messages. Activates or deactivates email MFA and sets it as the preferred MFA method when multiple methods are available. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
 *
 * @public
 */
export interface EmailMfaSettingsType {
  /**
   * Specifies whether email message MFA is active for a user. When the value of this parameter is `Enabled`, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Specifies whether email message MFA is the user's preferred method.
   *
   * @public
   */
  PreferredMfa?: boolean | undefined;
}

/**
 * A user's preference for using SMS message multi-factor authentication (MFA). Turns SMS MFA on and off, and can set SMS as preferred when other MFA options are available. You can't turn off SMS MFA for any of your users when MFA is required in your user pool; you can only set the type that your user prefers.
 *
 * @public
 */
export interface SMSMfaSettingsType {
  /**
   * Specifies whether SMS message MFA is activated. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Specifies whether SMS is the preferred MFA method. If true, your user pool prompts the specified user for a code delivered by SMS message after username-password sign-in succeeds.
   *
   * @public
   */
  PreferredMfa?: boolean | undefined;
}

/**
 * A user's preference for using time-based one-time password (TOTP) multi-factor authentication (MFA). Turns TOTP MFA on and off, and can set TOTP as preferred when other MFA options are available. You can't turn off TOTP MFA for any of your users when MFA is required in your user pool; you can only set the type that your user prefers.
 *
 * @public
 */
export interface SoftwareTokenMfaSettingsType {
  /**
   * Specifies whether software token MFA is activated. If an MFA type is activated for a user, the user will be prompted for MFA during all sign-in attempts, unless device tracking is turned on and the device has been trusted.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * Specifies whether software token MFA is the preferred MFA method.
   *
   * @public
   */
  PreferredMfa?: boolean | undefined;
}

/**
 * A user's preference for using passkey, or WebAuthn, multi-factor authentication (MFA). Turns passkey MFA on and off for the user. Unlike other MFA settings types, this type doesn't include a `PreferredMfa` option because passkey MFA applies only when passkey is the first authentication factor.
 *
 * @public
 */
export interface WebAuthnMfaSettingsType {
  /**
   * Specifies whether passkey MFA is activated for a user. When activated, the user's passkey authentication requires user verification, and passkey sign-in is available when MFA is required. The user must also have at least one other MFA method such as SMS, TOTP, or email activated to prevent account lockout.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * @public
 */
export interface AdminSetUserMFAPreferenceRequest {
  /**
   * User preferences for SMS message MFA. Activates or deactivates SMS MFA and sets it as the preferred MFA method when multiple methods are available.
   *
   * @public
   */
  SMSMfaSettings?: SMSMfaSettingsType | undefined;

  /**
   * User preferences for time-based one-time password (TOTP) MFA. Activates or deactivates TOTP MFA and sets it as the preferred MFA method when multiple methods are available.
   *
   * @public
   */
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType | undefined;

  /**
   * User preferences for email message MFA. Activates or deactivates email MFA and sets it as the preferred MFA method when multiple methods are available. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * @public
   */
  EmailMfaSettings?: EmailMfaSettingsType | undefined;

  /**
   * User preferences for passkey MFA. Activates or deactivates passkey MFA for the user. When activated, passkey authentication requires user verification, and passkey sign-in is available when MFA is required. To activate this setting, the `FactorConfiguration` of your user pool `WebAuthnConfiguration` must be `MULTI_FACTOR_WITH_USER_VERIFICATION`. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * @public
   */
  WebAuthnMfaSettings?: WebAuthnMfaSettingsType | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The ID of the user pool where you want to set a user's MFA preferences.
   *
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
   * The ID of the user pool where you want to set the user's password.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The new temporary or permanent password that you want to set for the user. You can't remove the password for a user who already has a password so that they can only sign in with passwordless methods. In this scenario, you must create a new user without a password.
   *
   * @public
   */
  Password: string | undefined;

  /**
   * Set to `true` to set a password that the user can immediately sign in with. Set to `false` to set a temporary password that the user must change on their next sign-in.
   *
   * @public
   */
  Permanent?: boolean | undefined;
}

/**
 * @public
 */
export interface AdminSetUserPasswordResponse {}

/**
 * You can use this parameter to set an MFA configuration that uses the SMS delivery medium.
 *
 * @public
 */
export interface AdminSetUserSettingsRequest {
  /**
   * The ID of the user pool that contains the user whose options you're setting.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * You can use this parameter only to set an SMS configuration that uses SMS for delivery.
   *
   * @public
   */
  MFAOptions: MFAOptionType[] | undefined;
}

/**
 * Represents the response from the server to set user settings as an administrator.
 *
 * @public
 */
export interface AdminSetUserSettingsResponse {}

/**
 * @public
 */
export interface AdminUpdateAuthEventFeedbackRequest {
  /**
   * The ID of the user pool where you want to submit authentication-event feedback.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The ID of the threat protection authentication event that you want to update.
   *
   * @public
   */
  EventId: string | undefined;

  /**
   * Your feedback to the authentication event. When you provide a `FeedbackValue` value of `valid`, you tell Amazon Cognito that you trust a user session where Amazon Cognito has evaluated some level of risk. When you provide a `FeedbackValue` value of `invalid`, you tell Amazon Cognito that you don't trust a user session, or you don't believe that Amazon Cognito evaluated a high-enough risk level.
   *
   * @public
   */
  FeedbackValue: FeedbackValueType | undefined;
}

/**
 * @public
 */
export interface AdminUpdateAuthEventFeedbackResponse {}

/**
 * The request to update the device status, as an administrator.
 *
 * @public
 */
export interface AdminUpdateDeviceStatusRequest {
  /**
   * The ID of the user pool where you want to change a user's device status.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The unique identifier, or device key, of the device that you want to update the status for.
   *
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * To enable device authentication with the specified device, set to `remembered`.To disable, set to `not_remembered`.
   *
   * @public
   */
  DeviceRememberedStatus?: DeviceRememberedStatusType | undefined;
}

/**
 * The status response to the request to update the device, as an administrator.
 *
 * @public
 */
export interface AdminUpdateDeviceStatusResponse {}

/**
 * Represents the request to update the user's attributes as an administrator.
 *
 * @public
 */
export interface AdminUpdateUserAttributesRequest {
  /**
   * The ID of the user pool where you want to update user attributes.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * An array of name-value pairs representing user attributes.
   *
   * For custom attributes, you must prepend the `custom:` prefix to the attribute name.
   *
   * If your user pool requires verification before Amazon Cognito updates an attribute value that you specify in this request, Amazon Cognito doesn’t immediately update the value of that attribute. After your user receives and responds to a verification message to verify the new value, Amazon Cognito updates the attribute value. Your user can sign in and receive messages with the original attribute value until they verify the new value.
   *
   * To skip the verification message and update the value of an attribute that requires verification in the same API request, include the `email_verified` or `phone_number_verified` attribute, with a value of `true`. If you set the `email_verified` or `phone_number_verified` value for an `email` or `phone_number` attribute that requires verification to `true`, Amazon Cognito doesn’t send a verification message to your user.
   *
   * @public
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * Represents the response from the server for the request to update user attributes as an administrator.
 *
 * @public
 */
export interface AdminUpdateUserAttributesResponse {}

/**
 * The request to sign out of all devices, as an administrator.
 *
 * @public
 */
export interface AdminUserGlobalSignOutRequest {
  /**
   * The ID of the user pool where you want to sign out a user.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;
}

/**
 * The global sign-out response, as an administrator.
 *
 * @public
 */
export interface AdminUserGlobalSignOutResponse {}

/**
 * Threat protection configuration options for additional authentication types in your user pool, including custom authentication.
 *
 * @public
 */
export interface AdvancedSecurityAdditionalFlowsType {
  /**
   * The operating mode of threat protection in custom authentication with [Custom authentication challenge Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html).
   *
   * @public
   */
  CustomAuthMode?: AdvancedSecurityEnabledModeType | undefined;
}

/**
 * The settings for Amazon Pinpoint analytics configuration. With an analytics configuration, your application can collect user-activity metrics for user notifications with a Amazon Pinpoint campaign.
 *
 * Amazon Pinpoint isn't available in all Amazon Web Services Regions. For a list of available Regions, see [Amazon Cognito and Amazon Pinpoint Region availability](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html#cognito-user-pools-find-region-mappings).
 *
 * @public
 */
export interface AnalyticsConfigurationType {
  /**
   * Your Amazon Pinpoint project ID.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Amazon Pinpoint project that you want to connect to your user pool app client. Amazon Cognito publishes events to the Amazon Pinpoint project that `ApplicationArn` declares. You can also configure your application to pass an endpoint ID in the `AnalyticsMetadata` parameter of sign-in operations. The endpoint ID is information about the destination for push notifications
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The ARN of an Identity and Access Management role that has the permissions required for Amazon Cognito to publish events to Amazon Pinpoint analytics.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The [external ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html) of the role that Amazon Cognito assumes to send analytics data to Amazon Pinpoint.
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * If `UserDataShared` is `true`, Amazon Cognito includes user data in the events that it publishes to Amazon Pinpoint analytics.
   *
   * @public
   */
  UserDataShared?: boolean | undefined;
}

/**
 * An image file from a managed login branding style in a user pool.
 *
 * @public
 */
export interface AssetType {
  /**
   * The category that the image corresponds to in your managed login configuration. Managed login has asset categories for different types of logos, backgrounds, and icons.
   *
   * @public
   */
  Category: AssetCategoryType | undefined;

  /**
   * The display-mode target of the asset: light, dark, or browser-adaptive. For example, Amazon Cognito displays a dark-mode image only when the browser or application is in dark mode, but displays a browser-adaptive file in all contexts.
   *
   * @public
   */
  ColorMode: ColorSchemeModeType | undefined;

  /**
   * The file type of the image file.
   *
   * @public
   */
  Extension: AssetExtensionType | undefined;

  /**
   * The image file, in Base64-encoded binary.
   *
   * @public
   */
  Bytes?: Uint8Array | undefined;

  /**
   * The ID of the asset.
   *
   * @public
   */
  ResourceId?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSoftwareTokenRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * You can provide either an access token or a session ID in the request.
   *
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * The session identifier that maintains the state of authentication requests and challenge responses. In `AssociateSoftwareToken`, this is the session ID from a successful sign-in. You can provide either an access token or a session ID in the request.
   *
   * @public
   */
  Session?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSoftwareTokenResponse {
  /**
   * A unique generated shared secret code that is used by the TOTP algorithm to generate a one-time code.
   *
   * @public
   */
  SecretCode?: string | undefined;

  /**
   * The session identifier that maintains the state of authentication requests and challenge responses.
   *
   * @public
   */
  Session?: string | undefined;
}

/**
 * Represents the request to change a user password.
 *
 * @public
 */
export interface ChangePasswordRequest {
  /**
   * The user's previous password. Required if the user has a password. If the user has no password and only signs in with passwordless authentication options, you can omit this parameter.
   *
   * @public
   */
  PreviousPassword?: string | undefined;

  /**
   * A new password that you prompted the user to enter in your application.
   *
   * @public
   */
  ProposedPassword: string | undefined;

  /**
   * A valid access token that Amazon Cognito issued to the user whose password you want to change.
   *
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * The response from the server to the change password request.
 *
 * @public
 */
export interface ChangePasswordResponse {}

/**
 * @public
 */
export interface CompleteWebAuthnRegistrationRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;

  /**
   * A [RegistrationResponseJSON](https://www.w3.org/TR/WebAuthn-3/#dictdef-registrationresponsejson) public-key credential response from the user's passkey provider.
   *
   * @public
   */
  Credential: __DocumentType | undefined;
}

/**
 * @public
 */
export interface CompleteWebAuthnRegistrationResponse {}

/**
 * A Secure Remote Password (SRP) value that your application generates when you register a user's device. For more information, see [Getting a device key](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-getting-a-device-key).
 *
 * @public
 */
export interface DeviceSecretVerifierConfigType {
  /**
   * A password verifier for a user's device. Used in SRP authentication.
   *
   * @public
   */
  PasswordVerifier?: string | undefined;

  /**
   * The salt that you want to use in SRP authentication with the user's device.
   *
   * @public
   */
  Salt?: string | undefined;
}

/**
 * The confirm-device request.
 *
 * @public
 */
export interface ConfirmDeviceRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;

  /**
   * The unique identifier, or device key, of the device that you want to update the status for.
   *
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * The configuration of the device secret verifier.
   *
   * @public
   */
  DeviceSecretVerifierConfig?: DeviceSecretVerifierConfigType | undefined;

  /**
   * A friendly name for the device, for example `MyMobilePhone`.
   *
   * @public
   */
  DeviceName?: string | undefined;
}

/**
 * The confirm-device response.
 *
 * @public
 */
export interface ConfirmDeviceResponse {
  /**
   * When `true`, your user must confirm that they want to remember the device. Prompt the user for an answer.
   *
   * When `false`, immediately sets the device as remembered and eligible for device authentication.
   *
   * You can configure your user pool to always remember devices, in which case this response is `false`, or to allow users to opt in, in which case this response is `true`. Configure this option under *Device tracking* in the *Sign-in* menu of your user pool.
   *
   * @public
   */
  UserConfirmationNecessary?: boolean | undefined;
}

/**
 * Contextual data, such as the user's device fingerprint, IP address, or location, used for evaluating the risk of an unexpected event by Amazon Cognito threat protection.
 *
 * @public
 */
export interface UserContextDataType {
  /**
   * The source IP address of your user's device.
   *
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * Encoded device-fingerprint details that your app collected with the Amazon Cognito context data collection library. For more information, see [Adding user device and session data to API requests](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint).
   *
   * @public
   */
  EncodedData?: string | undefined;
}

/**
 * The request representing the confirmation for a password reset.
 *
 * @public
 */
export interface ConfirmForgotPasswordRequest {
  /**
   * The ID of the app client where the user wants to reset their password. This parameter is an identifier of the client application that users are resetting their password from, but this operation resets users' irrespective of the app clients they sign in to.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about `SecretHash`, see [Computing secret hash values](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash).
   *
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The confirmation code that your user pool delivered when your user requested to reset their password.
   *
   * @public
   */
  ConfirmationCode: string | undefined;

  /**
   * The new password that your user wants to set.
   *
   * @public
   */
  Password: string | undefined;

  /**
   * Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number.
   *
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.
   *
   * For more information, see [Collecting data for threat protection in applications](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html).
   *
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * The response from the server that results from a user's request to retrieve a forgotten password.
 *
 * @public
 */
export interface ConfirmForgotPasswordResponse {}

/**
 * Represents the request to confirm registration of a user.
 *
 * @public
 */
export interface ConfirmSignUpRequest {
  /**
   * The ID of the app client associated with the user pool.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about `SecretHash`, see [Computing secret hash values](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash).
   *
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The confirmation code that your user pool sent in response to the `SignUp` request.
   *
   * @public
   */
  ConfirmationCode: string | undefined;

  /**
   * When `true`, forces user confirmation despite any existing aliases. Defaults to `false`. A value of `true` migrates the alias from an existing user to the new user if an existing user already has the phone number or email address as an alias.
   *
   * Say, for example, that an existing user has an `email` attribute of `bob@example.com` and email is an alias in your user pool. If the new user also has an email of `bob@example.com` and your `ConfirmSignUp` response sets `ForceAliasCreation` to `true`, the new user can sign in with a username of `bob@example.com` and the existing user can no longer do so.
   *
   * If `false` and an attribute belongs to an existing alias, this request returns an **AliasExistsException** error.
   *
   * For more information about sign-in aliases, see [Customizing sign-in attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-aliases).
   *
   * @public
   */
  ForceAliasCreation?: boolean | undefined;

  /**
   * Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number.
   *
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.
   *
   * For more information, see [Collecting data for threat protection in applications](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html).
   *
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;

  /**
   * The optional session ID from a `SignUp` API request. You can sign in a user directly from the sign-up process with the `USER_AUTH` authentication flow.
   *
   * @public
   */
  Session?: string | undefined;
}

/**
 * Represents the response from the server for the registration confirmation.
 *
 * @public
 */
export interface ConfirmSignUpResponse {
  /**
   * A session identifier that you can use to immediately sign in the confirmed user. You can automatically sign users in with the one-time password that they provided in a successful `ConfirmSignUp` request.
   *
   * @public
   */
  Session?: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * A name for the group. This name must be unique in your user pool.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The ID of the user pool where you want to create a user group.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * A description of the group that you're creating.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the IAM role that you want to associate with the group. A group role primarily declares a preferred role for the credentials that you get from an identity pool. Amazon Cognito ID tokens have a `cognito:preferred_role` claim that presents the highest-precedence group that a user belongs to. Both ID and access tokens also contain a `cognito:groups` claim that list all the groups that a user is a member of.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A non-negative integer value that specifies the precedence of this group relative to the other groups that a user can belong to in the user pool. Zero is the highest precedence value. Groups with lower `Precedence` values take precedence over groups with higher or null `Precedence` values. If a user belongs to two or more groups, it is the group with the lowest precedence value whose role ARN is given in the user's tokens for the `cognito:roles` and `cognito:preferred_role` claims.
   *
   * Two groups can have the same `Precedence` value. If this happens, neither group takes precedence over the other. If two groups with the same `Precedence` have the same role ARN, that role is used in the `cognito:preferred_role` claim in tokens for users in each group. If the two groups have different role ARNs, the `cognito:preferred_role` claim isn't set in users' tokens.
   *
   * The default `Precedence` value is null. The maximum `Precedence` value is `2^31-1`.
   *
   * @public
   */
  Precedence?: number | undefined;
}

/**
 * @public
 */
export interface CreateGroupResponse {
  /**
   * The response object for a created group.
   *
   * @public
   */
  Group?: GroupType | undefined;
}

/**
 * @public
 */
export interface CreateIdentityProviderRequest {
  /**
   * The Id of the user pool where you want to create an IdP.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name that you want to assign to the IdP. You can pass the identity provider name in the `identity_provider` query parameter of requests to the [Authorize endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html) to silently redirect to sign-in with the associated IdP.
   *
   * @public
   */
  ProviderName: string | undefined;

  /**
   * The type of IdP that you want to add. Amazon Cognito supports OIDC, SAML 2.0, Login With Amazon, Sign In With Apple, Google, and Facebook IdPs.
   *
   * @public
   */
  ProviderType: IdentityProviderTypeType | undefined;

  /**
   * The scopes, URLs, and identifiers for your external identity provider. The following examples describe the provider detail keys for each IdP type. These values and their schema are subject to change. Social IdP `authorize_scopes` values must match the values listed here.
   *
   * - **OpenID Connect (OIDC)**
   *
   *   Amazon Cognito accepts the following elements when it can't discover endpoint URLs from `oidc_issuer`: `attributes_url`, `authorize_url`, `jwks_uri`, `token_url`.
   *
   *   Create or update request: `"ProviderDetails": \{ "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "attributes_url_add_attributes": "false", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" \}`
   *
   * - **SAML**
   *
   *   Create or update request with Metadata URL: `"ProviderDetails": \{ "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256" \}`
   *
   *   Create or update request with Metadata file: `"ProviderDetails": \{ "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm": "rsa-sha256" \}`
   *
   *   The value of `MetadataFile` must be the plaintext metadata document with all quote (") characters escaped by backslashes.
   *
   *   Describe response: `"ProviderDetails": \{ "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256", "SLORedirectBindingURI": "https://auth.example.com/slo/saml", "SSORedirectBindingURI": "https://auth.example.com/sso/saml" \}`
   *
   * - **LoginWithAmazon**
   *
   *   Create or update request: `"ProviderDetails": \{ "authorize_scopes": "profile postal_code", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret"`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_url": "https://api.amazon.com/user/profile", "attributes_url_add_attributes": "false", "authorize_scopes": "profile postal_code", "authorize_url": "https://www.amazon.com/ap/oa", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "POST", "token_url": "https://api.amazon.com/auth/o2/token" \}`
   *
   * - **Google**
   *
   *   Create or update request: `"ProviderDetails": \{ "authorize_scopes": "email profile openid", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_url": "https://people.googleapis.com/v1/people/me?personFields=", "attributes_url_add_attributes": "true", "authorize_scopes": "email profile openid", "authorize_url": "https://accounts.google.com/o/oauth2/v2/auth", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret", "oidc_issuer": "https://accounts.google.com", "token_request_method": "POST", "token_url": "https://www.googleapis.com/oauth2/v4/token" \}`
   *
   * - **SignInWithApple**
   *
   *   Create or update request: `"ProviderDetails": \{ "authorize_scopes": "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE", "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_url_add_attributes": "false", "authorize_scopes": "email name", "authorize_url": "https://appleid.apple.com/auth/authorize", "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer": "https://appleid.apple.com", "team_id": "2EXAMPLE", "token_request_method": "POST", "token_url": "https://appleid.apple.com/auth/token" \}`
   *
   * - **Facebook**
   *
   *   Create or update request: `"ProviderDetails": \{ "api_version": "v17.0", "authorize_scopes": "public_profile, email", "client_id": "1example23456789", "client_secret": "provider-app-client-secret" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=", "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email", "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" \}`
   *
   * @public
   */
  ProviderDetails: Record<string, string> | undefined;

  /**
   * A mapping of IdP attributes to standard and custom user pool attributes. Specify a user pool attribute as the key of the key-value pair, and the IdP attribute claim name as the value.
   *
   * @public
   */
  AttributeMapping?: Record<string, string> | undefined;

  /**
   * An array of IdP identifiers, for example `"IdPIdentifiers": [ "MyIdP", "MyIdP2" ]`. Identifiers are friendly names that you can pass in the `idp_identifier` query parameter of requests to the [Authorize endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html) to silently redirect to sign-in with the associated IdP. Identifiers in a domain format also enable the use of [email-address matching with SAML providers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managing-saml-idp-naming.html).
   *
   * @public
   */
  IdpIdentifiers?: string[] | undefined;

  /**
   * A mapping between the authentication context class reference (ACR) levels of your user pool and the ACR values of the external OpenID Connect (OIDC) identity provider (IdP). The map is keyed by level, from `Level1` through `Level4`, and each value is the ACR value that the IdP uses for the corresponding level. Amazon Cognito uses this mapping to translate a requested user pool ACR level to the value that the IdP expects, and to map an ACR value that the IdP returns back to a user pool level. When the IdP returns an ACR value that isn't mapped, Amazon Cognito resolves it to the lowest level. Only OIDC IdPs support ACR mapping.
   *
   * Setting `AcrMapping` is available in all feature plans. It isn't restricted to the Essentials or Plus feature plan.
   *
   * @public
   */
  AcrMapping?: Record<string, string> | undefined;
}

/**
 * A user pool identity provider (IdP). Contains information about a third-party IdP to a user pool, the attributes that it populates to user profiles, and the trust relationship between the IdP and your user pool.
 *
 * @public
 */
export interface IdentityProviderType {
  /**
   * The ID of the user pool associated with the IdP.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * A friendly name for the IdP.
   *
   * @public
   */
  ProviderName?: string | undefined;

  /**
   * The type of IdP. Either SAML, OIDC, or a named social identity provider.
   *
   * @public
   */
  ProviderType?: IdentityProviderTypeType | undefined;

  /**
   * The scopes, URLs, and identifiers for your external identity provider. The following examples describe the provider detail keys for each IdP type. These values and their schema are subject to change. Social IdP `authorize_scopes` values must match the values listed here.
   *
   * - **OpenID Connect (OIDC)**
   *
   *   Amazon Cognito accepts the following elements when it can't discover endpoint URLs from `oidc_issuer`: `attributes_url`, `authorize_url`, `jwks_uri`, `token_url`.
   *
   *   Create or update request: `"ProviderDetails": \{ "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_request_method": "GET", "attributes_url": "https://auth.example.com/userInfo", "attributes_url_add_attributes": "false", "authorize_scopes": "openid profile email", "authorize_url": "https://auth.example.com/authorize", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "jwks_uri": "https://auth.example.com/.well-known/jwks.json", "oidc_issuer": "https://auth.example.com", "token_url": "https://example.com/token" \}`
   *
   * - **SAML**
   *
   *   Create or update request with Metadata URL: `"ProviderDetails": \{ "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256" \}`
   *
   *   Create or update request with Metadata file: `"ProviderDetails": \{ "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "MetadataFile": "[metadata XML]", "RequestSigningAlgorithm": "rsa-sha256" \}`
   *
   *   The value of `MetadataFile` must be the plaintext metadata document with all quote (") characters escaped by backslashes.
   *
   *   Describe response: `"ProviderDetails": \{ "IDPInit": "true", "IDPSignout": "true", "EncryptedResponses" : "true", "ActiveEncryptionCertificate": "[certificate]", "MetadataURL": "https://auth.example.com/sso/saml/metadata", "RequestSigningAlgorithm": "rsa-sha256", "SLORedirectBindingURI": "https://auth.example.com/slo/saml", "SSORedirectBindingURI": "https://auth.example.com/sso/saml" \}`
   *
   * - **LoginWithAmazon**
   *
   *   Create or update request: `"ProviderDetails": \{ "authorize_scopes": "profile postal_code", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret"`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_url": "https://api.amazon.com/user/profile", "attributes_url_add_attributes": "false", "authorize_scopes": "profile postal_code", "authorize_url": "https://www.amazon.com/ap/oa", "client_id": "amzn1.application-oa2-client.1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "POST", "token_url": "https://api.amazon.com/auth/o2/token" \}`
   *
   * - **Google**
   *
   *   Create or update request: `"ProviderDetails": \{ "authorize_scopes": "email profile openid", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_url": "https://people.googleapis.com/v1/people/me?personFields=", "attributes_url_add_attributes": "true", "authorize_scopes": "email profile openid", "authorize_url": "https://accounts.google.com/o/oauth2/v2/auth", "client_id": "1example23456789.apps.googleusercontent.com", "client_secret": "provider-app-client-secret", "oidc_issuer": "https://accounts.google.com", "token_request_method": "POST", "token_url": "https://www.googleapis.com/oauth2/v4/token" \}`
   *
   * - **SignInWithApple**
   *
   *   Create or update request: `"ProviderDetails": \{ "authorize_scopes": "email name", "client_id": "com.example.cognito", "private_key": "1EXAMPLE", "key_id": "2EXAMPLE", "team_id": "3EXAMPLE" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "attributes_url_add_attributes": "false", "authorize_scopes": "email name", "authorize_url": "https://appleid.apple.com/auth/authorize", "client_id": "com.example.cognito", "key_id": "1EXAMPLE", "oidc_issuer": "https://appleid.apple.com", "team_id": "2EXAMPLE", "token_request_method": "POST", "token_url": "https://appleid.apple.com/auth/token" \}`
   *
   * - **Facebook**
   *
   *   Create or update request: `"ProviderDetails": \{ "api_version": "v17.0", "authorize_scopes": "public_profile, email", "client_id": "1example23456789", "client_secret": "provider-app-client-secret" \}`
   *
   *   Describe response: `"ProviderDetails": \{ "api_version": "v17.0", "attributes_url": "https://graph.facebook.com/v17.0/me?fields=", "attributes_url_add_attributes": "true", "authorize_scopes": "public_profile, email", "authorize_url": "https://www.facebook.com/v17.0/dialog/oauth", "client_id": "1example23456789", "client_secret": "provider-app-client-secret", "token_request_method": "GET", "token_url": "https://graph.facebook.com/v17.0/oauth/access_token" \}`
   *
   * @public
   */
  ProviderDetails?: Record<string, string> | undefined;

  /**
   * A mapping of IdP attributes to standard and custom user pool attributes.
   *
   * @public
   */
  AttributeMapping?: Record<string, string> | undefined;

  /**
   * A list of IdP identifiers. IdP identifiers are strings that represent friendly names or domain names of IdPs, for example `MyIdP` or `auth.example.com`. You can choose to route user authorization requests to the right IdP with either IdP identifiers or IdP names. For more information, see `identity_provider` and `idp_identifier` at [Authorize endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html#get-authorize-request-parameters).
   *
   * @public
   */
  IdpIdentifiers?: string[] | undefined;

  /**
   * A mapping between the authentication context class reference (ACR) levels of your user pool and the ACR values of the external OpenID Connect (OIDC) identity provider (IdP), so that your application gets a consistent step-up experience regardless of which IdP authenticated the user. The map is keyed by level, from `Level1` through `Level4`.
   *
   * @public
   */
  AcrMapping?: Record<string, string> | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface CreateIdentityProviderResponse {
  /**
   * The details of the new user pool IdP.
   *
   * @public
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface CreateManagedLoginBrandingRequest {
  /**
   * The ID of the user pool where you want to create a new branding style.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The app client that you want to create the branding style for. Each style is linked to an app client until you delete it.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * When true, applies the default branding style options. These default options are managed by Amazon Cognito. You can modify them later in the branding editor.
   *
   * When you specify `true` for this option, you must also omit values for `Settings` and `Assets` in the request.
   *
   * @public
   */
  UseCognitoProvidedValues?: boolean | undefined;

  /**
   * A JSON file, encoded as a `Document` type, with the the settings that you want to apply to your style.
   *
   * The following components are not currently implemented and reserved for future use:
   *
   * - `signUp`
   * - `instructions`
   * - `sessionTimerDisplay`
   * - `languageSelector` (for localization, see [Managed login localization)](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-localization)
   *
   * @public
   */
  Settings?: __DocumentType | undefined;

  /**
   * An array of image files that you want to apply to functions like backgrounds, logos, and icons. Each object must also indicate whether it is for dark mode, light mode, or browser-adaptive mode.
   *
   * @public
   */
  Assets?: AssetType[] | undefined;
}

/**
 * A managed login branding style that's assigned to a user pool app client.
 *
 * @public
 */
export interface ManagedLoginBrandingType {
  /**
   * The ID of the managed login branding style.
   *
   * @public
   */
  ManagedLoginBrandingId?: string | undefined;

  /**
   * The user pool where the branding style is assigned.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * When true, applies the default branding style options. This option reverts to default style options that are managed by Amazon Cognito. You can modify them later in the branding editor.
   *
   * When you specify `true` for this option, you must also omit values for `Settings` and `Assets` in the request.
   *
   * @public
   */
  UseCognitoProvidedValues?: boolean | undefined;

  /**
   * A JSON file, encoded as a `Document` type, with the the settings that you want to apply to your style.
   *
   * The following components are not currently implemented and reserved for future use:
   *
   * - `signUp`
   * - `instructions`
   * - `sessionTimerDisplay`
   * - `languageSelector` (for localization, see [Managed login localization)](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-localization)
   *
   * @public
   */
  Settings?: __DocumentType | undefined;

  /**
   * An array of image files that you want to apply to roles like backgrounds, logos, and icons. Each object must also indicate whether it is for dark mode, light mode, or browser-adaptive mode.
   *
   * @public
   */
  Assets?: AssetType[] | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface CreateManagedLoginBrandingResponse {
  /**
   * The details of the branding style that you created.
   *
   * @public
   */
  ManagedLoginBranding?: ManagedLoginBrandingType | undefined;
}

/**
 * One custom scope associated with a user pool resource server. This data type is a member of `ResourceServerScopeType`. For more information, see [Scopes, M2M, and API authorization with resource servers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-define-resource-servers.html).
 *
 * @public
 */
export interface ResourceServerScopeType {
  /**
   * The name of the scope. Amazon Cognito renders custom scopes in the format `resourceServerIdentifier/ScopeName`. For example, if this parameter is `exampleScope` in the resource server with the identifier `exampleResourceServer`, you request and receive the scope `exampleResourceServer/exampleScope`.
   *
   * @public
   */
  ScopeName: string | undefined;

  /**
   * A friendly description of a custom scope.
   *
   * @public
   */
  ScopeDescription: string | undefined;
}

/**
 * @public
 */
export interface CreateResourceServerRequest {
  /**
   * The ID of the user pool where you want to create a resource server.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * A unique resource server identifier for the resource server. The identifier can be an API friendly name like `solar-system-data`. You can also set an API URL like `https://solar-system-data-api.example.com` as your identifier.
   *
   * Amazon Cognito represents scopes in the access token in the format `$resource-server-identifier/$scope`. Longer scope-identifier strings increase the size of your access tokens.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * A friendly name for the resource server.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of custom scopes. Each scope is a key-value map with the keys `ScopeName` and `ScopeDescription`. The name of a custom scope is a combination of `ScopeName` and the resource server `Name` in this request, for example `MyResourceServerName/MyScopeName`.
   *
   * @public
   */
  Scopes?: ResourceServerScopeType[] | undefined;
}

/**
 * The details of a resource server configuration and associated custom scopes in a user pool.
 *
 * @public
 */
export interface ResourceServerType {
  /**
   * The ID of the user pool that contains the resource server configuration.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * A unique resource server identifier for the resource server. The identifier can be an API friendly name like `solar-system-data`. You can also set an API URL like `https://solar-system-data-api.example.com` as your identifier.
   *
   * Amazon Cognito represents scopes in the access token in the format `$resource-server-identifier/$scope`. Longer scope-identifier strings increase the size of your access tokens.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * The name of the resource server.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of scopes that are defined for the resource server.
   *
   * @public
   */
  Scopes?: ResourceServerScopeType[] | undefined;
}

/**
 * @public
 */
export interface CreateResourceServerResponse {
  /**
   * The details of the new resource server.
   *
   * @public
   */
  ResourceServer: ResourceServerType | undefined;
}

/**
 * @public
 */
export interface CreateTermsRequest {
  /**
   * The ID of the user pool where you want to create terms documents.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client where you want to create terms documents. Must be an app client in the requested user pool.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * A friendly name for the document that you want to create in the current request. Must begin with `terms-of-use` or `privacy-policy` as identification of the document type. Provide URLs for both `terms-of-use` and `privacy-policy` in separate requests.
   *
   * @public
   */
  TermsName: string | undefined;

  /**
   * This parameter is reserved for future use and currently accepts only one value.
   *
   * @public
   */
  TermsSource: TermsSourceType | undefined;

  /**
   * This parameter is reserved for future use and currently accepts only one value.
   *
   * @public
   */
  Enforcement: TermsEnforcementType | undefined;

  /**
   * A map of URLs to languages. For each localized language that will view the requested `TermsName`, assign a URL. A selection of `cognito:default` displays for all languages that don't have a language-specific URL.
   *
   * For example, `"cognito:default": "https://terms.example.com", "cognito:spanish": "https://terms.example.com/es"`.
   *
   * @public
   */
  Links?: Record<string, string> | undefined;
}

/**
 * The details of a set of terms documents. For more information, see [Terms documents](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-terms-documents).
 *
 * @public
 */
export interface TermsType {
  /**
   * The ID of the terms documents.
   *
   * @public
   */
  TermsId: string | undefined;

  /**
   * The ID of the user pool that contains the terms documents.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client that the terms documents are assigned to.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The type and friendly name of the terms documents.
   *
   * @public
   */
  TermsName: string | undefined;

  /**
   * This parameter is reserved for future use and currently accepts one value.
   *
   * @public
   */
  TermsSource: TermsSourceType | undefined;

  /**
   * This parameter is reserved for future use and currently accepts one value.
   *
   * @public
   */
  Enforcement: TermsEnforcementType | undefined;

  /**
   * A map of URLs to languages. For each localized language that will view the requested `TermsName`, assign a URL. A selection of `cognito:default` displays for all languages that don't have a language-specific URL.
   *
   * For example, `"cognito:default": "https://terms.example.com", "cognito:spanish": "https://terms.example.com/es"`.
   *
   * @public
   */
  Links: Record<string, string> | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  LastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface CreateTermsResponse {
  /**
   * A summary of your terms documents. Includes a unique identifier for later changes to the terms documents.
   *
   * @public
   */
  Terms?: TermsType | undefined;
}

/**
 * Represents the request to create the user import job.
 *
 * @public
 */
export interface CreateUserImportJobRequest {
  /**
   * A friendly name for the user import job.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The ID of the user pool that you want to import users into.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * You must specify an IAM role that has permission to log import-job results to Amazon CloudWatch Logs. This parameter is the ARN of that role.
   *
   * @public
   */
  CloudWatchLogsRoleArn: string | undefined;

  /**
   * The password hashing algorithm used to generate the hashes in the CSV file for this import job.
   *
   * Valid values: `BCRYPT` | `SCRYPT` | `ARGON2ID` | `PBKDF2_SHA256`
   *
   * @public
   */
  PasswordHashingAlgorithm?: PasswordHashingAlgorithmType | undefined;
}

/**
 * A user import job in a user pool. Describes the status of user import with a CSV file. For more information, see [Importing users into user pools from a CSV file](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-using-import-tool.html).
 *
 * @public
 */
export interface UserImportJobType {
  /**
   * The friendly name of the user import job.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The ID of the user import job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The ID of the user pool that the users are being imported into.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * The pre-signed URL target for uploading the CSV file.
   *
   * @public
   */
  PreSignedUrl?: string | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The date when the user import job was started.
   *
   * @public
   */
  StartDate?: Date | undefined;

  /**
   * The date when the user import job was completed.
   *
   * @public
   */
  CompletionDate?: Date | undefined;

  /**
   * The status of the user import job. One of the following:
   *
   * - `Created` - The job was created but not started.
   * - `Pending` - A transition state. You have started the job, but it has not begun importing users yet.
   * - `InProgress` - The job has started, and users are being imported.
   * - `Stopping` - You have stopped the job, but the job has not stopped importing users yet.
   * - `Stopped` - You have stopped the job, and the job has stopped importing users.
   * - `Succeeded` - The job has completed successfully.
   * - `Failed` - The job has stopped due to an error.
   * - `Expired` - You created a job, but did not start the job within 24-48 hours. All data associated with the job was deleted, and the job can't be started.
   *
   * @public
   */
  Status?: UserImportJobStatusType | undefined;

  /**
   * The role Amazon Resource Name (ARN) for the Amazon CloudWatch Logging role for the user import job. For more information, see "Creating the CloudWatch Logs IAM Role" in the Amazon Cognito Developer Guide.
   *
   * @public
   */
  CloudWatchLogsRoleArn?: string | undefined;

  /**
   * The number of users that were successfully imported.
   *
   * @public
   */
  ImportedUsers?: number | undefined;

  /**
   * The number of users that were skipped.
   *
   * @public
   */
  SkippedUsers?: number | undefined;

  /**
   * The number of users that couldn't be imported.
   *
   * @public
   */
  FailedUsers?: number | undefined;

  /**
   * The message returned when the user import job is completed.
   *
   * @public
   */
  CompletionMessage?: string | undefined;

  /**
   * The password hashing algorithm used to generate the hashes in the CSV file for this import job.
   *
   * Valid values: `BCRYPT` | `SCRYPT` | `ARGON2ID` | `PBKDF2_SHA256`
   *
   * @public
   */
  PasswordHashingAlgorithm?: PasswordHashingAlgorithmType | undefined;
}

/**
 * Represents the response from the server to the request to create the user import job.
 *
 * @public
 */
export interface CreateUserImportJobResponse {
  /**
   * The details of the user import job. Includes logging destination, status, and the Amazon S3 pre-signed URL for CSV upload.
   *
   * @public
   */
  UserImportJob?: UserImportJobType | undefined;
}

/**
 * The device-remembering configuration for a user pool.
 *
 * > **Note:** When you provide a value for any property of `DeviceConfiguration`, you activate the device remembering for the user pool.
 *
 * @public
 */
export interface DeviceConfigurationType {
  /**
   * When true, a remembered device can sign in with device authentication instead of SMS and time-based one-time password (TOTP) factors for multi-factor authentication (MFA).
   *
   * > **Note:** Whether or not `ChallengeRequiredOnNewDevice` is true, users who sign in with devices that have not been confirmed or remembered must still provide a second factor in a user pool that requires MFA.
   *
   * @public
   */
  ChallengeRequiredOnNewDevice?: boolean | undefined;

  /**
   * When true, Amazon Cognito doesn't automatically remember a user's device when your app sends a `ConfirmDevice` API request. In your app, create a prompt for your user to choose whether they want to remember their device. Return the user's choice in an `UpdateDeviceStatus` API request.
   *
   * When `DeviceOnlyRememberedOnUserPrompt` is `false`, Amazon Cognito immediately remembers devices that you register in a `ConfirmDevice` API request.
   *
   * @public
   */
  DeviceOnlyRememberedOnUserPrompt?: boolean | undefined;
}

/**
 * The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.
 *
 * > **Note:** Amazon Cognito can send email messages with Amazon Simple Email Service resources in the Amazon Web Services Region where you created your user pool, and in alternate Regions in some cases. For more information on the supported Regions, see [Email settings for Amazon Cognito user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html).
 *
 * @public
 */
export interface EmailConfigurationType {
  /**
   * The ARN of a verified email address or an address from a verified domain in Amazon SES. You can set a `SourceArn` email from a verified domain only with an API request. You can set a verified email address, but not an address in a verified domain, in the Amazon Cognito console. Amazon Cognito uses the email address that you provide in one of the following ways, depending on the value that you specify for the `EmailSendingAccount` parameter:
   *
   * - If you specify `COGNITO_DEFAULT`, Amazon Cognito uses this address as the custom FROM address when it emails your users using its built-in email account.
   * - If you specify `DEVELOPER`, Amazon Cognito emails your users with this address by calling Amazon SES on your behalf.
   *
   * The Region value of the `SourceArn` parameter must indicate a supported Amazon Web Services Region of your user pool. Typically, the Region in the `SourceArn` and the user pool Region are the same. For more information, see [Amazon SES email configuration regions](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-email.html#user-pool-email-developer-region-mapping) in the [Amazon Cognito Developer Guide](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html).
   *
   * @public
   */
  SourceArn?: string | undefined;

  /**
   * The destination to which the receiver of the email should reply.
   *
   * @public
   */
  ReplyToEmailAddress?: string | undefined;

  /**
   * Specifies whether Amazon Cognito uses its built-in functionality to send your users email messages, or uses your Amazon Simple Email Service email configuration. Specify one of the following values:
   *
   * - **COGNITO_DEFAULT**
   *
   *   When Amazon Cognito emails your users, it uses its built-in email functionality. When you use the default option, Amazon Cognito allows only a limited number of emails each day for your user pool. For typical production environments, the default email limit is less than the required delivery volume. To achieve a higher delivery volume, specify DEVELOPER to use your Amazon SES email configuration.
   *
   *   To look up the email delivery limit for the default option, see [Limits](https://docs.aws.amazon.com/cognito/latest/developerguide/limits.html) in the *Amazon Cognito Developer Guide*.
   *
   *   The default FROM address is `no-reply@verificationemail.com`. To customize the FROM address, provide the Amazon Resource Name (ARN) of an Amazon SES verified email address for the `SourceArn` parameter.
   *
   * - **DEVELOPER**
   *
   *   When Amazon Cognito emails your users, it uses your Amazon SES configuration. Amazon Cognito calls Amazon SES on your behalf to send email from your verified email address. When you use this option, the email delivery limits are the same limits that apply to your Amazon SES verified email address in your Amazon Web Services account.
   *
   *   If you use this option, provide the ARN of an Amazon SES verified email address for the `SourceArn` parameter.
   *
   *   Before Amazon Cognito can email your users, it requires additional permissions to call Amazon SES on your behalf. When you update your user pool with this option, Amazon Cognito creates a *service-linked role*, which is a type of role in your Amazon Web Services account. This role contains the permissions that allow you to access Amazon SES and send email messages from your email address. For more information about the service-linked role that Amazon Cognito creates, see [Using Service-Linked Roles for Amazon Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/using-service-linked-roles.html) in the *Amazon Cognito Developer Guide*.
   *
   * @public
   */
  EmailSendingAccount?: EmailSendingAccountType | undefined;

  /**
   * Either the sender’s email address or the sender’s name with their email address. For example, `testuser@example.com` or `Test User <testuser@example.com>`. This address appears before the body of the email.
   *
   * @public
   */
  From?: string | undefined;

  /**
   * The set of configuration rules that can be applied to emails sent using Amazon Simple Email Service. A configuration set is applied to an email by including a reference to the configuration set in the headers of the email. Once applied, all of the rules in that configuration set are applied to the email. Configuration sets can be used to apply the following types of rules to emails:
   *
   * - **Event publishing**
   *
   *   Amazon Simple Email Service can track the number of send, delivery, open, click, bounce, and complaint events for each email sent. Use event publishing to send information about these events to other Amazon Web Services services such as and Amazon CloudWatch
   *
   * - **IP pool management**
   *
   *   When leasing dedicated IP addresses with Amazon Simple Email Service, you can create groups of IP addresses, called dedicated IP pools. You can then associate the dedicated IP pools with configuration sets.
   *
   * @public
   */
  ConfigurationSet?: string | undefined;
}

/**
 * Specifies the issuer configuration for a user pool. Contains settings that determine how tokens are issued and validated.
 *
 * @public
 */
export interface IssuerConfigurationType {
  /**
   * The type of issuer configuration. Determines the token issuing behavior for the user pool.
   *
   * - **ORIGINAL**
   *
   *   The original issuer configuration for user pools. The issuer URL is hosted in the user pool’s region and provides OIDC endpoints specific to that region.
   *
   *   Original issuers have the format of `https://cognito-idp.[region].amazonaws.com/[userPoolId]`
   *
   * - **UPDATED**
   *
   *   Recommended for all user pools, including for multi-Region replication. Updated issuers host the same JWKS content in multiple regions, resulting in improved resilience and efficiency.
   *
   *   Updated issuers have the format of `https://issuer-cognito-idp.[region].amazonaws.com/[userPoolId]`, where region is the primary Amazon Web Services Region of your user pool.
   *
   * @public
   */
  Type?: IssuerType | undefined;
}

/**
 * Specifies the key configuration for a user pool. Contains settings for encryption keys used to secure user pool data.
 *
 * @public
 */
export interface KeyConfigurationType {
  /**
   * The type of encryption key used for the user pool.
   *
   * - **AWS_OWNED_KEY**
   *
   *   A key owned by Amazon Web Services in Key Management Service.
   *
   * - **CUSTOMER_MANAGED_KEY**
   *
   *   A key managed by the customer in Key Management Service. You must use a multi-region key to enable multi-region replication for a user pool.
   *
   * @public
   */
  KeyType?: EncryptionKeyType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used for encryption. If not specified, Amazon Web Services managed keys are used.
   *
   * @public
   */
  KmsKeyArn?: string | undefined;
}

/**
 * The properties of a custom email sender Lambda trigger.
 *
 * @public
 */
export interface CustomEmailLambdaVersionConfigType {
  /**
   * The user pool trigger version of the request that Amazon Cognito sends to your Lambda function. Higher-numbered versions add fields that support new features.
   *
   * You must use a `LambdaVersion` of `V1_0` with a custom sender function.
   *
   * @public
   */
  LambdaVersion: CustomEmailSenderLambdaVersionType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the function that you want to assign to your Lambda trigger.
   *
   * @public
   */
  LambdaArn: string | undefined;
}

/**
 * The properties of a custom SMS sender Lambda trigger.
 *
 * @public
 */
export interface CustomSMSLambdaVersionConfigType {
  /**
   * The user pool trigger version of the request that Amazon Cognito sends to your Lambda function. Higher-numbered versions add fields that support new features.
   *
   * You must use a `LambdaVersion` of `V1_0` with a custom sender function.
   *
   * @public
   */
  LambdaVersion: CustomSMSSenderLambdaVersionType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the function that you want to assign to your Lambda trigger.
   *
   * @public
   */
  LambdaArn: string | undefined;
}

/**
 * The properties of an inbound federation Lambda trigger.
 *
 * @public
 */
export interface InboundFederationLambdaType {
  /**
   * The user pool trigger version of the request that Amazon Cognito sends to your Lambda function. Higher-numbered versions add fields that support new features.
   *
   * You must use a `LambdaVersion` of `V1_0` with an inbound federation function.
   *
   * @public
   */
  LambdaVersion: InboundFederationLambdaVersionType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the function that you want to assign to your Lambda trigger.
   *
   * @public
   */
  LambdaArn: string | undefined;
}

/**
 * The properties of a pre token generation Lambda trigger.
 *
 * @public
 */
export interface PreTokenGenerationVersionConfigType {
  /**
   * The user pool trigger version of the request that Amazon Cognito sends to your Lambda function. Higher-numbered versions add fields that support new features.
   *
   * @public
   */
  LambdaVersion: PreTokenGenerationLambdaVersionType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the function that you want to assign to your Lambda trigger.
   *
   * This parameter and the `PreTokenGeneration` property of `LambdaConfig` have the same value. For new instances of pre token generation triggers, set `LambdaArn`.
   *
   * @public
   */
  LambdaArn: string | undefined;
}

/**
 * A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible stages of user pool operations. Triggers can modify the outcome of the operations that invoked them.
 *
 * @public
 */
export interface LambdaConfigType {
  /**
   * The configuration of a [pre sign-up Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html) in a user pool. This trigger evaluates new users and can bypass confirmation, [link a federated user profile](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html), or block sign-up requests.
   *
   * @public
   */
  PreSignUp?: string | undefined;

  /**
   * A custom message Lambda trigger. This trigger is an opportunity to customize all SMS and email messages from your user pool. When a custom message trigger is active, your user pool routes all messages to a Lambda function that returns a runtime-customized message subject and body for your user pool to deliver to a user.
   *
   * @public
   */
  CustomMessage?: string | undefined;

  /**
   * The configuration of a [post confirmation Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-confirmation.html) in a user pool. This trigger can take custom actions after a user confirms their user account and their email address or phone number.
   *
   * @public
   */
  PostConfirmation?: string | undefined;

  /**
   * The configuration of a [pre authentication trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-authentication.html) in a user pool. This trigger can evaluate and modify user sign-in events.
   *
   * @public
   */
  PreAuthentication?: string | undefined;

  /**
   * The configuration of a [post authentication Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-post-authentication.html) in a user pool. This trigger can take custom actions after a user signs in.
   *
   * @public
   */
  PostAuthentication?: string | undefined;

  /**
   * The configuration of a define auth challenge Lambda trigger, one of three triggers in the sequence of the [custom authentication challenge triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html).
   *
   * @public
   */
  DefineAuthChallenge?: string | undefined;

  /**
   * The configuration of a create auth challenge Lambda trigger, one of three triggers in the sequence of the [custom authentication challenge triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html).
   *
   * @public
   */
  CreateAuthChallenge?: string | undefined;

  /**
   * The configuration of a verify auth challenge Lambda trigger, one of three triggers in the sequence of the [custom authentication challenge triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html).
   *
   * @public
   */
  VerifyAuthChallengeResponse?: string | undefined;

  /**
   * The legacy configuration of a [pre token generation Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html) in a user pool.
   *
   * Set this parameter for legacy purposes. If you also set an ARN in `PreTokenGenerationConfig`, its value must be identical to `PreTokenGeneration`. For new instances of pre token generation triggers, set the `LambdaArn` of `PreTokenGenerationConfig`.
   *
   * @public
   */
  PreTokenGeneration?: string | undefined;

  /**
   * The configuration of a [migrate user Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-migrate-user.html) in a user pool. This trigger can create user profiles when users sign in or attempt to reset their password with credentials that don't exist yet.
   *
   * @public
   */
  UserMigration?: string | undefined;

  /**
   * The detailed configuration of a [pre token generation Lambda trigger](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-token-generation.html) in a user pool. If you also set an ARN in `PreTokenGeneration`, its value must be identical to `PreTokenGenerationConfig`.
   *
   * @public
   */
  PreTokenGenerationConfig?: PreTokenGenerationVersionConfigType | undefined;

  /**
   * The configuration of a custom SMS sender Lambda trigger. This trigger routes all SMS notifications from a user pool to a Lambda function that delivers the message using custom logic.
   *
   * @public
   */
  CustomSMSSender?: CustomSMSLambdaVersionConfigType | undefined;

  /**
   * The configuration of a custom email sender Lambda trigger. This trigger routes all email notifications from a user pool to a Lambda function that delivers the message using custom logic.
   *
   * @public
   */
  CustomEmailSender?: CustomEmailLambdaVersionConfigType | undefined;

  /**
   * The ARN of an [KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys). Amazon Cognito uses the key to encrypt codes and temporary passwords sent to custom sender Lambda triggers.
   *
   * @public
   */
  KMSKeyID?: string | undefined;

  /**
   * The configuration of an inbound federation Lambda trigger. This trigger can transform federated user attributes during the authentication with external identity providers.
   *
   * @public
   */
  InboundFederation?: InboundFederationLambdaType | undefined;
}

/**
 * The password policy settings for a user pool, including complexity, history, and length requirements.
 *
 * @public
 */
export interface PasswordPolicyType {
  /**
   * The minimum length of the password in the policy that you have set. This value can't be less than 6.
   *
   * @public
   */
  MinimumLength?: number | undefined;

  /**
   * The requirement in a password policy that users must include at least one uppercase letter in their password.
   *
   * @public
   */
  RequireUppercase?: boolean | undefined;

  /**
   * The requirement in a password policy that users must include at least one lowercase letter in their password.
   *
   * @public
   */
  RequireLowercase?: boolean | undefined;

  /**
   * The requirement in a password policy that users must include at least one number in their password.
   *
   * @public
   */
  RequireNumbers?: boolean | undefined;

  /**
   * The requirement in a password policy that users must include at least one symbol in their password.
   *
   * @public
   */
  RequireSymbols?: boolean | undefined;

  /**
   * The number of previous passwords that you want Amazon Cognito to restrict each user from reusing. Users can't set a password that matches any of `n` previous passwords, where `n` is the value of `PasswordHistorySize`.
   *
   * @public
   */
  PasswordHistorySize?: number | undefined;

  /**
   * The number of days a temporary password is valid in the password policy. If the user doesn't sign in during this time, an administrator must reset their password. Defaults to `7`. If you submit a value of `0`, Amazon Cognito treats it as a null value and sets `TemporaryPasswordValidityDays` to its default value.
   *
   * > **Note:** When you set `TemporaryPasswordValidityDays` for a user pool, you can no longer set a value for the legacy `UnusedAccountValidityDays` parameter in that user pool.
   *
   * @public
   */
  TemporaryPasswordValidityDays?: number | undefined;
}

/**
 * The policy for allowed types of authentication in a user pool. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
 *
 * @public
 */
export interface SignInPolicyType {
  /**
   * The sign-in methods that a user pool supports as the first factor. You can permit users to start authentication with a standard username and password, or with other one-time password and hardware factors.
   *
   * > **Note:** `SOFTWARE_TOKEN` is not currently supported as a first auth factor. Do not include this value in `AllowedFirstAuthFactors`.
   *
   * @public
   */
  AllowedFirstAuthFactors?: AuthFactorType[] | undefined;
}

/**
 * A list of user pool policies. Contains the policy that sets password-complexity requirements.
 *
 * @public
 */
export interface UserPoolPolicyType {
  /**
   * The password policy settings for a user pool, including complexity, history, and length requirements.
   *
   * @public
   */
  PasswordPolicy?: PasswordPolicyType | undefined;

  /**
   * The policy for allowed types of authentication in a user pool.
   *
   * @public
   */
  SignInPolicy?: SignInPolicyType | undefined;
}

/**
 * The configuration that Amazon Cognito uses to send SMS messages through Amazon Web Services End User Messaging SMS. Provide this structure in the `EumsSms` member of `SmsConfigurationType` to use Amazon Web Services End User Messaging SMS instead of Amazon SNS.
 *
 * @public
 */
export interface EumsSmsConfigurationType {
  /**
   * The ARN of the IAM role that Amazon Cognito assumes to send SMS messages through Amazon Web Services End User Messaging SMS. The role must grant permission to call the `sms-voice:SendTextMessage` operation.
   *
   * @public
   */
  CallerArn: string | undefined;

  /**
   * The external ID that Amazon Cognito includes when it assumes the `CallerArn` role. Use this value as a condition in the role trust policy to prevent the confused deputy problem.
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * The origination identity that Amazon Web Services End User Messaging SMS uses to send messages to your users. This value can be one of the following:
   *
   * - A phone number – A long code, toll-free number, or short code that is assigned to your account.
   * - A sender ID – An alphabetic name that identifies the message sender in supported countries.
   * - A phone pool – A group of phone numbers that Amazon Web Services End User Messaging SMS selects from when it sends messages.
   *
   * You can provide an E.164 phone number or the ARN of the phone number, sender ID, or phone pool. Amazon Web Services End User Messaging SMS evaluates IAM authorization with the value that you provide. If the permissions policy of your `CallerArn` role scopes the `sms-voice:SendTextMessage` resource to a specific ARN, provide that same ARN. If the formats do not match, requests fail with an `InvalidSmsRoleAccessPolicyException`.
   *
   * Depending on the destination country, you must provide an origination identity. For country-specific requirements, see [Supported countries and regions for SMS messaging](https://docs.aws.amazon.com/sms-voice/latest/userguide/phone-numbers-sms-by-country.html) in the Amazon Web Services End User Messaging SMS User Guide.
   *
   * @public
   */
  OriginationIdentity?: string | undefined;

  /**
   * The name of the Amazon Web Services End User Messaging SMS configuration set that Amazon Cognito applies to messages, for logging and event destinations. If you omit this member, Amazon Cognito sends messages without applying a configuration set.
   *
   * @public
   */
  ConfigurationSetName?: string | undefined;

  /**
   * The principal entity ID required by India's Distributed Ledger Technology (DLT) regulations for SMS messages.
   *
   * @public
   */
  InEntityId?: string | undefined;

  /**
   * The registered template ID for the message template required by India's DLT regulations for SMS messages.
   *
   * @public
   */
  InTemplateId?: string | undefined;

  /**
   * The Amazon Web Services Region of the Amazon Web Services End User Messaging SMS resources that Amazon Cognito uses to send messages. Amazon Web Services End User Messaging SMS must be available in your user pool's Region.
   *
   * If you omit this parameter, Amazon Cognito uses the same Region as your user pool. You can also set this parameter to your user pool's Region explicitly. Amazon Cognito rejects any other value with an `InvalidParameterException`.
   *
   * @public
   */
  Region?: string | undefined;
}

/**
 * User pool configuration for delivery of SMS messages with Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account.
 *
 * @public
 */
export interface SmsConfigurationType {
  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS caller. This is the ARN of the IAM role in your Amazon Web Services account that Amazon Cognito will use to send SMS messages. SMS messages are subject to a [spending limit](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html).
   *
   * @public
   */
  SnsCallerArn?: string | undefined;

  /**
   * The external ID provides additional security for your IAM role. You can use an `ExternalId` with the IAM role that you use with Amazon SNS to send SMS messages for your user pool. If you provide an `ExternalId`, your Amazon Cognito user pool includes it in the request to assume your IAM role. You can configure the role trust policy to require that Amazon Cognito, and any principal, provide the `ExternalID`. If you use the Amazon Cognito Management Console to create a role for SMS multi-factor authentication (MFA), Amazon Cognito creates a role with the required permissions and a trust policy that demonstrates use of the `ExternalId`.
   *
   * For more information about the `ExternalId` of a role, see [How to use an external ID when granting access to your Amazon Web Services resources to a third party](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html).
   *
   * @public
   */
  ExternalId?: string | undefined;

  /**
   * The Amazon Web Services Region to use with Amazon SNS integration. You can choose the same Region as your user pool, or a supported **Legacy Amazon SNS alternate Region**.
   *
   * Amazon Cognito resources in the Asia Pacific (Seoul) Amazon Web Services Region must use your Amazon SNS configuration in the Asia Pacific (Tokyo) Region. For more information, see [SMS message settings for Amazon Cognito user pools](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html).
   *
   * @public
   */
  SnsRegion?: string | undefined;

  /**
   * The configuration for sending SMS messages through Amazon Web Services End User Messaging SMS, as an alternative to Amazon SNS. In a user pool, provide either the Amazon SNS configuration (`SnsCallerArn`) or this configuration, but not both. In Amazon Web Services Regions where Amazon SNS is not available, this configuration is required.
   *
   * @public
   */
  EumsSms?: EumsSmsConfigurationType | undefined;
}

/**
 * The settings for updates to user attributes. These settings include the property `AttributesRequireVerificationBeforeUpdate`, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see [Verifying updates to email addresses and phone numbers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates).
 *
 * @public
 */
export interface UserAttributeUpdateSettingsType {
  /**
   * Requires that your user verifies their email address, phone number, or both before Amazon Cognito updates the value of that attribute. When you update a user attribute that has this option activated, Amazon Cognito sends a verification message to the new phone number or email address. Amazon Cognito doesn’t change the value of the attribute until your user responds to the verification message and confirms the new value.
   *
   * When `AttributesRequireVerificationBeforeUpdate` is false, your user pool doesn't require that your users verify attribute changes before Amazon Cognito updates them. In a user pool where `AttributesRequireVerificationBeforeUpdate` is false, API operations that change attribute values can immediately update a user’s `email` or `phone_number` attribute.
   *
   * @public
   */
  AttributesRequireVerificationBeforeUpdate?: VerifiedAttributeType[] | undefined;
}

/**
 * The configuration of a user pool for username case sensitivity.
 *
 * @public
 */
export interface UsernameConfigurationType {
  /**
   * Specifies whether user name case sensitivity will be applied for all users in the user pool through Amazon Cognito APIs. For most use cases, set case sensitivity to `False` (case insensitive) as a best practice. When usernames and email addresses are case insensitive, users can sign in as the same user when they enter a different capitalization of their user name.
   *
   * Valid values include:
   *
   * - **true**
   *
   *   Enables case sensitivity for all username input. When this option is set to `true`, users must sign in using the exact capitalization of their given username, such as “UserName”. This is the default value.
   *
   * - **false**
   *
   *   Enables case insensitivity for all username input. For example, when this option is set to `false`, users can sign in using `username`, `USERNAME`, or `UserName`. This option also enables both `preferred_username` and `email` alias to be case insensitive, in addition to the `username` attribute.
   *
   * @public
   */
  CaseSensitive: boolean | undefined;
}

/**
 * Contains settings for activation of threat protection, including the operating mode and additional authentication types. To log user security information but take no action, set to `AUDIT`. To configure automatic security responses to potentially unwanted traffic to your user pool, set to `ENFORCED`.
 *
 * For more information, see [Adding advanced security to a user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html). To activate this setting, your user pool must be on the [Plus tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html).
 *
 * @public
 */
export interface UserPoolAddOnsType {
  /**
   * The operating mode of threat protection for standard authentication types in your user pool, including username-password and secure remote password (SRP) authentication.
   *
   * @public
   */
  AdvancedSecurityMode: AdvancedSecurityModeType | undefined;

  /**
   * Threat protection configuration options for additional authentication types in your user pool, including custom authentication.
   *
   * @public
   */
  AdvancedSecurityAdditionalFlows?: AdvancedSecurityAdditionalFlowsType | undefined;
}

/**
 * The template for the verification message that your user pool delivers to users who set an email address or phone number attribute.
 *
 * @public
 */
export interface VerificationMessageTemplateType {
  /**
   * The template for SMS messages that Amazon Cognito sends to your users.
   *
   * @public
   */
  SmsMessage?: string | undefined;

  /**
   * The template for email messages that Amazon Cognito sends to your users. You can set an `EmailMessage` template only if the value of [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration.
   *
   * @public
   */
  EmailMessage?: string | undefined;

  /**
   * The subject line for the email message template. You can set an `EmailSubject` template only if the value of [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration.
   *
   * @public
   */
  EmailSubject?: string | undefined;

  /**
   * The email message template for sending a confirmation link to the user. You can set an `EmailMessageByLink` template only if the value of [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration.
   *
   * @public
   */
  EmailMessageByLink?: string | undefined;

  /**
   * The subject line for the email message template for sending a confirmation link to the user. You can set an `EmailSubjectByLink` template only if the value of [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`. When your [EmailSendingAccount](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_EmailConfigurationType.html#CognitoUserPools-Type-EmailConfigurationType-EmailSendingAccount) is `DEVELOPER`, your user pool sends email messages with your own Amazon SES configuration.
   *
   * @public
   */
  EmailSubjectByLink?: string | undefined;

  /**
   * The configuration of verification emails to contain a clickable link or a verification code.
   *
   * For link, your template body must contain link text in the format `\{##Click here##\}`. "Click here" in the example is a customizable string. For code, your template body must contain a code placeholder in the format `\{####\}`.
   *
   * @public
   */
  DefaultEmailOption?: DefaultEmailOptionType | undefined;
}

/**
 * Represents the request to create a user pool.
 *
 * @public
 */
export interface CreateUserPoolRequest {
  /**
   * A friendly name for your user pool.
   *
   * @public
   */
  PoolName: string | undefined;

  /**
   * The password policy and sign-in policy in the user pool. The password policy sets options like password complexity requirements and password history. The sign-in policy sets the options available to applications in [choice-based authentication](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice).
   *
   * @public
   */
  Policies?: UserPoolPolicyType | undefined;

  /**
   * When active, `DeletionProtection` prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature.
   *
   * When you try to delete a protected user pool in a `DeleteUserPool` API request, Amazon Cognito returns an `InvalidParameterException` error. To delete a protected user pool, send a new `DeleteUserPool` request after you deactivate deletion protection in an `UpdateUserPool` API request.
   *
   * @public
   */
  DeletionProtection?: DeletionProtectionType | undefined;

  /**
   * A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible stages of authentication operations. Triggers can modify the outcome of the operations that invoked them.
   *
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * The attributes that you want your user pool to automatically verify. For more information, see [Verifying contact information at sign-up](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#allowing-users-to-sign-up-and-confirm-themselves).
   *
   * @public
   */
  AutoVerifiedAttributes?: VerifiedAttributeType[] | undefined;

  /**
   * Attributes supported as an alias for this user pool. For more information about alias attributes, see [Customizing sign-in attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-aliases).
   *
   * @public
   */
  AliasAttributes?: AliasAttributeType[] | undefined;

  /**
   * Specifies whether a user can use an email address or phone number as a username when they sign up. For more information, see [Customizing sign-in attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html#user-pool-settings-aliases).
   *
   * @public
   */
  UsernameAttributes?: UsernameAttributeType[] | undefined;

  /**
   * This parameter is no longer used.
   *
   * @public
   */
  SmsVerificationMessage?: string | undefined;

  /**
   * This parameter is no longer used.
   *
   * @public
   */
  EmailVerificationMessage?: string | undefined;

  /**
   * This parameter is no longer used.
   *
   * @public
   */
  EmailVerificationSubject?: string | undefined;

  /**
   * The template for the verification message that your user pool delivers to users who set an email address or phone number attribute.
   *
   * Set the email message type that corresponds to your `DefaultEmailOption` selection. For `CONFIRM_WITH_LINK`, specify an `EmailMessageByLink` and leave `EmailMessage` blank. For `CONFIRM_WITH_CODE`, specify an `EmailMessage` and leave `EmailMessageByLink` blank. When you supply both parameters with either choice, Amazon Cognito returns an error.
   *
   * @public
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType | undefined;

  /**
   * The contents of the SMS message that your user pool sends to users in SMS OTP and MFA authentication.
   *
   * @public
   */
  SmsAuthenticationMessage?: string | undefined;

  /**
   * Sets multi-factor authentication (MFA) to be on, off, or optional. When `ON`, all users must set up MFA before they can sign in. When `OPTIONAL`, your application must make a client-side determination of whether a user wants to register an MFA device. For user pools with adaptive authentication with threat protection, choose `OPTIONAL`.
   *
   * When `MfaConfiguration` is `OPTIONAL`, managed login doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in API responses and in managed login for users who have chosen and configured a preferred MFA factor.
   *
   * The `CreateUserPool` operation supports only SMS MFA configuration. If you set `MfaConfiguration` to either of these values, include an `SmsConfiguration` in the same request:
   *
   * - `ON` – Requires MFA for all users
   * - `OPTIONAL` – Makes MFA optional for each user
   *
   * If you omit `SmsConfiguration`, the operation returns an `InvalidParameterException`. To configure TOTP or email MFA, use the [SetUserPoolMfaConfig](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SetUserPoolMfaConfig.html) operation. You can also use `SetUserPoolMfaConfig` to add MFA factors later.
   *
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * The settings for updates to user attributes. These settings include the property `AttributesRequireVerificationBeforeUpdate`, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see [Verifying updates to email addresses and phone numbers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates).
   *
   * @public
   */
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType | undefined;

  /**
   * The device-remembering configuration for a user pool. Device remembering or device tracking is a "Remember me on this device" option for user pools that perform authentication with the device key of a trusted device in the back end, instead of a user-provided MFA code. For more information about device authentication, see [Working with user devices in your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html). A null value indicates that you have deactivated device remembering in your user pool.
   *
   * > **Note:** When you provide a value for any `DeviceConfiguration` field, you activate the Amazon Cognito device-remembering feature. For more information, see [Working with devices](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html).
   *
   * @public
   */
  DeviceConfiguration?: DeviceConfigurationType | undefined;

  /**
   * The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.
   *
   * @public
   */
  EmailConfiguration?: EmailConfigurationType | undefined;

  /**
   * The settings for your Amazon Cognito user pool to send SMS messages with Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account. For more information see [SMS message settings](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-sms-settings.html).
   *
   * @public
   */
  SmsConfiguration?: SmsConfigurationType | undefined;

  /**
   * The tag keys and values to assign to the user pool. A tag is a label that you can use to categorize and manage user pools in different ways, such as by purpose, owner, environment, or other criteria.
   *
   * @public
   */
  UserPoolTags?: Record<string, string> | undefined;

  /**
   * The configuration for administrative creation of users. Includes the template for the invitation message for new users, the duration of temporary passwords, and permitting self-service sign-up.
   *
   * @public
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType | undefined;

  /**
   * An array of attributes for the new user pool. You can add custom attributes and modify the properties of default attributes. The specifications in this parameter set the required attributes in your user pool. For more information, see [Working with user attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html).
   *
   * @public
   */
  Schema?: SchemaAttributeType[] | undefined;

  /**
   * Contains settings for activation of threat protection, including the operating mode and additional authentication types. To log user security information but take no action, set to `AUDIT`. To configure automatic security responses to potentially unwanted traffic to your user pool, set to `ENFORCED`.
   *
   * For more information, see [Adding advanced security to a user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html). To activate this setting, your user pool must be on the [Plus tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html).
   *
   * @public
   */
  UserPoolAddOns?: UserPoolAddOnsType | undefined;

  /**
   * Sets the case sensitivity option for sign-in usernames. When `CaseSensitive` is `false` (case insensitive), users can sign in with any combination of capital and lowercase letters. For example, `username`, `USERNAME`, or `UserName`, or for email, `email@example.com` or `EMaiL@eXamplE.Com`. For most use cases, set case sensitivity to `false` as a best practice. When usernames and email addresses are case insensitive, Amazon Cognito treats any variation in case as the same user, and prevents a case variation from being assigned to the same attribute for a different user.
   *
   * When `CaseSensitive` is `true` (case sensitive), Amazon Cognito interprets `USERNAME` and `UserName` as distinct users.
   *
   * This configuration is immutable after you set it.
   *
   * @public
   */
  UsernameConfiguration?: UsernameConfigurationType | undefined;

  /**
   * The available verified method a user can use to recover their password when they call `ForgotPassword`. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. Email MFA is also disqualifying for account recovery with email. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred over email.
   *
   * As a best practice, configure both `verified_email` and `verified_phone_number`, with one having a higher priority than the other.
   *
   * @public
   */
  AccountRecoverySetting?: AccountRecoverySettingType | undefined;

  /**
   * The user pool [feature plan](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html), or tier. This parameter determines the eligibility of the user pool for features like managed login, access-token customization, and threat protection. Defaults to `ESSENTIALS`.
   *
   * @public
   */
  UserPoolTier?: UserPoolTierType | undefined;

  /**
   * The key configuration for the user pool. Specifies the key type and KMS key ARN for encryption.
   *
   * @public
   */
  KeyConfiguration?: KeyConfigurationType | undefined;

  /**
   * The issuer configuration for the user pool. Specifies the issuer type for token generation.
   *
   * @public
   */
  IssuerConfiguration?: IssuerConfigurationType | undefined;

  /**
   * The custom names for the authentication context class reference (ACR) levels in your user pool. Amazon Cognito defines four fixed ACR levels that represent increasing authentication assurance. The combination of authentication factors that satisfies each level is fixed and you can't change it. With this configuration, you customize only the URI name that Amazon Cognito reports for each level in the `acr` token claim.
   *
   * You can override a subset of the levels. By default, the levels are named `urn:cognito:loa:1` through `urn:cognito:loa:4`, and Amazon Cognito applies the default name to any level that you don't specify. Each name must be unique across all four levels, including any default names that apply to levels you don't override. A name can contain any character that is valid in a URL or a URN.
   *
   * Configuring custom ACR level names requires the Essentials or Plus feature plan. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * @public
   */
  AcrConfiguration?: Record<string, AcrLevelConfigType> | undefined;
}

/**
 * The configuration of a user pool.
 *
 * @public
 */
export interface UserPoolType {
  /**
   * The ID of the user pool.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the user pool.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of user pool policies. Contains the policy that sets password-complexity requirements.
   *
   * @public
   */
  Policies?: UserPoolPolicyType | undefined;

  /**
   * When active, `DeletionProtection` prevents accidental deletion of your user pool. Before you can delete a user pool that you have protected against deletion, you must deactivate this feature.
   *
   * When you try to delete a protected user pool in a `DeleteUserPool` API request, Amazon Cognito returns an `InvalidParameterException` error. To delete a protected user pool, send a new `DeleteUserPool` request after you deactivate deletion protection in an `UpdateUserPool` API request.
   *
   * @public
   */
  DeletionProtection?: DeletionProtectionType | undefined;

  /**
   * A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible stages of user pool operations. Triggers can modify the outcome of the operations that invoked them.
   *
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * This parameter is no longer used.
   *
   * @deprecated This property is no longer available.
   * @public
   */
  Status?: StatusType | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * A list of the user attributes and their properties in your user pool. The attribute schema contains standard attributes, custom attributes with a `custom:` prefix, and developer attributes with a `dev:` prefix. For more information, see [User pool attributes](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html).
   *
   * Developer-only attributes are a legacy feature of user pools, and are read-only to all app clients. You can create and update developer-only attributes only with IAM-authenticated API operations. Use app client read/write permissions instead.
   *
   * @public
   */
  SchemaAttributes?: SchemaAttributeType[] | undefined;

  /**
   * The attributes that are auto-verified in a user pool.
   *
   * @public
   */
  AutoVerifiedAttributes?: VerifiedAttributeType[] | undefined;

  /**
   * Attributes supported as an alias for this user pool. An alias is an attribute that users can enter as an alternative username. Possible values: **phone_number**, **email**, or **preferred_username**.
   *
   * @public
   */
  AliasAttributes?: AliasAttributeType[] | undefined;

  /**
   * Specifies whether a user can use an email address or phone number as a username when they sign up.
   *
   * @public
   */
  UsernameAttributes?: UsernameAttributeType[] | undefined;

  /**
   * This parameter is no longer used.
   *
   * @public
   */
  SmsVerificationMessage?: string | undefined;

  /**
   * This parameter is no longer used.
   *
   * @public
   */
  EmailVerificationMessage?: string | undefined;

  /**
   * This parameter is no longer used.
   *
   * @public
   */
  EmailVerificationSubject?: string | undefined;

  /**
   * The template for the verification message that your user pool delivers to users who set an email address or phone number attribute.
   *
   * @public
   */
  VerificationMessageTemplate?: VerificationMessageTemplateType | undefined;

  /**
   * The contents of the SMS authentication message.
   *
   * @public
   */
  SmsAuthenticationMessage?: string | undefined;

  /**
   * The settings for updates to user attributes. These settings include the property `AttributesRequireVerificationBeforeUpdate`, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see [Verifying updates to email addresses and phone numbers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates).
   *
   * @public
   */
  UserAttributeUpdateSettings?: UserAttributeUpdateSettingsType | undefined;

  /**
   * Can be one of the following values:
   *
   * - `OFF` - MFA tokens aren't required and can't be specified during user registration.
   * - `ON` - MFA tokens are required for all user registrations. You can only specify required when you're initially creating a user pool.
   * - `OPTIONAL` - Users have the option when registering to create an MFA token.
   *
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * The device-remembering configuration for a user pool. A null value indicates that you have deactivated device remembering in your user pool.
   *
   * > **Note:** When you provide a value for any `DeviceConfiguration` field, you activate the Amazon Cognito device-remembering feature.
   *
   * @public
   */
  DeviceConfiguration?: DeviceConfigurationType | undefined;

  /**
   * A number estimating the size of the user pool.
   *
   * @public
   */
  EstimatedNumberOfUsers?: number | undefined;

  /**
   * The email configuration of your user pool. The email configuration type sets your preferred sending method, Amazon Web Services Region, and sender for messages from your user pool.
   *
   * @public
   */
  EmailConfiguration?: EmailConfigurationType | undefined;

  /**
   * User pool configuration for delivery of SMS messages with Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account.
   *
   * @public
   */
  SmsConfiguration?: SmsConfigurationType | undefined;

  /**
   * The tags that are assigned to the user pool. A tag is a label that you can apply to user pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.
   *
   * @public
   */
  UserPoolTags?: Record<string, string> | undefined;

  /**
   * The reason why the SMS configuration can't send the messages to your users.
   *
   * This message might include comma-separated values to describe why your SMS configuration can't send messages to user pool end users.
   *
   * - **InvalidSmsRoleAccessPolicyException**
   *
   *   The Identity and Access Management role that Amazon Cognito uses to send SMS messages isn't properly configured. For more information, see [SmsConfigurationType](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_SmsConfigurationType.html).
   *
   * - **SNSSandbox**
   *
   *   The Amazon Web Services account is in the SNS SMS Sandbox and messages will only reach verified end users. This parameter won’t get populated with SNSSandbox if the user creating the user pool doesn’t have SNS permissions. To learn how to move your Amazon Web Services account out of the sandbox, see [Moving out of the SMS sandbox](https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox-moving-to-production.html).
   *
   * @public
   */
  SmsConfigurationFailure?: string | undefined;

  /**
   * Deprecated. Review error codes from API requests with `EventSource:cognito-idp.amazonaws.com` in CloudTrail for information about problems with user pool email configuration.
   *
   * @public
   */
  EmailConfigurationFailure?: string | undefined;

  /**
   * The domain prefix, if the user pool has a domain associated with it.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * A custom domain name that you provide to Amazon Cognito. This parameter applies only if you use a custom domain to host the sign-up and sign-in pages for your application. An example of a custom domain name might be `auth.example.com`.
   *
   * For more information about adding a custom domain to your user pool, see [Using Your Own Domain for the Hosted UI](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html).
   *
   * @public
   */
  CustomDomain?: string | undefined;

  /**
   * The configuration for `AdminCreateUser` requests.
   *
   * @public
   */
  AdminCreateUserConfig?: AdminCreateUserConfigType | undefined;

  /**
   * Contains settings for activation of threat protection, including the operating mode and additional authentication types. To log user security information but take no action, set to `AUDIT`. To configure automatic security responses to potentially unwanted traffic to your user pool, set to `ENFORCED`.
   *
   * For more information, see [Adding advanced security to a user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-advanced-security.html). To activate this setting, your user pool must be on the [Plus tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html).
   *
   * @public
   */
  UserPoolAddOns?: UserPoolAddOnsType | undefined;

  /**
   * Case sensitivity of the username input for the selected sign-in option. When case sensitivity is set to `False` (case insensitive), users can sign in with any combination of capital and lowercase letters. For example, `username`, `USERNAME`, or `UserName`, or for email, `email@example.com` or `EMaiL@eXamplE.Com`. For most use cases, set case sensitivity to `False` (case insensitive) as a best practice. When usernames and email addresses are case insensitive, Amazon Cognito treats any variation in case as the same user, and prevents a case variation from being assigned to the same attribute for a different user.
   *
   * @public
   */
  UsernameConfiguration?: UsernameConfigurationType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user pool.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The available verified method a user can use to recover their password when they call `ForgotPassword`. You can use this setting to define a preferred method when a user has more than one method available. With this setting, SMS doesn't qualify for a valid password recovery mechanism if the user also has SMS multi-factor authentication (MFA) activated. In the absence of this setting, Amazon Cognito uses the legacy behavior to determine the recovery method where SMS is preferred through email.
   *
   * @public
   */
  AccountRecoverySetting?: AccountRecoverySettingType | undefined;

  /**
   * The user pool [feature plan](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html), or tier. This parameter determines the eligibility of the user pool for features like managed login, access-token customization, and threat protection. Defaults to `ESSENTIALS`.
   *
   * @public
   */
  UserPoolTier?: UserPoolTierType | undefined;

  /**
   * The key configuration for the user pool, including encryption settings.
   *
   * @public
   */
  KeyConfiguration?: KeyConfigurationType | undefined;

  /**
   * The issuer configuration for the user pool, including token issuing settings.
   *
   * @public
   */
  IssuerConfiguration?: IssuerConfigurationType | undefined;

  /**
   * The names of the authentication context class reference (ACR) levels for the user pool. Amazon Cognito always returns the effective configuration, with default names merged in for any level that you haven't customized.
   *
   * Configuring custom ACR level names requires the Essentials or Plus feature plan. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * @public
   */
  AcrConfiguration?: Record<string, AcrLevelConfigType> | undefined;
}

/**
 * Represents the response from the server for the request to create a user pool.
 *
 * @public
 */
export interface CreateUserPoolResponse {
  /**
   * The details of the created user pool.
   *
   * @public
   */
  UserPool?: UserPoolType | undefined;
}

/**
 * The configuration of your app client for refresh token rotation. When enabled, your app client issues new ID, access, and refresh tokens when users renew their sessions with refresh tokens. When disabled, token refresh issues only ID and access tokens.
 *
 * @public
 */
export interface RefreshTokenRotationType {
  /**
   * The state of refresh token rotation for the current app client.
   *
   * @public
   */
  Feature: FeatureType | undefined;

  /**
   * When you request a token refresh with `GetTokensFromRefreshToken`, the original refresh token that you're rotating out can remain valid for a period of time of up to 60 seconds. This allows for client-side retries. When `RetryGracePeriodSeconds` is `0`, the grace period is disabled and a successful request immediately invalidates the submitted refresh token.
   *
   * @public
   */
  RetryGracePeriodSeconds?: number | undefined;
}

/**
 * The time units that, with `IdTokenValidity`, `AccessTokenValidity`, and `RefreshTokenValidity`, set and display the duration of ID, access, and refresh tokens for an app client. You can assign a separate token validity unit to each type of token.
 *
 * @public
 */
export interface TokenValidityUnitsType {
  /**
   * A time unit for the value that you set in the `AccessTokenValidity` parameter. The default `AccessTokenValidity` time unit is `hours`. `AccessTokenValidity` duration can range from five minutes to one day.
   *
   * @public
   */
  AccessToken?: TimeUnitsType | undefined;

  /**
   * A time unit for the value that you set in the `IdTokenValidity` parameter. The default `IdTokenValidity` time unit is `hours`. `IdTokenValidity` duration can range from five minutes to one day.
   *
   * @public
   */
  IdToken?: TimeUnitsType | undefined;

  /**
   * A time unit for the value that you set in the `RefreshTokenValidity` parameter. The default `RefreshTokenValidity` time unit is `days`. `RefreshTokenValidity` duration can range from 60 minutes to 10 years.
   *
   * @public
   */
  RefreshToken?: TimeUnitsType | undefined;
}

/**
 * Represents the request to create a user pool client.
 *
 * @public
 */
export interface CreateUserPoolClientRequest {
  /**
   * The ID of the user pool where you want to create an app client.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * A friendly name for the app client that you want to create.
   *
   * @public
   */
  ClientName: string | undefined;

  /**
   * When `true`, generates a client secret for the app client. Client secrets are used with server-side and machine-to-machine applications. Client secrets are automatically generated; you can't specify a secret value. For more information, see [App client types](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-client-apps.html#user-pool-settings-client-app-client-types).
   *
   * @public
   */
  GenerateSecret?: boolean | undefined;

  /**
   * A custom client secret that you want to use for the app client. You cannot specify both GenerateSecret as true and provide a ClientSecret value.
   *
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for `RefreshTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `RefreshTokenValidity` as `10` and `TokenValidityUnits` as `days`, your user can refresh their session and retrieve new access and ID tokens for 10 days.
   *
   * The default time unit for `RefreshTokenValidity` in an API request is days. You can't set `RefreshTokenValidity` to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. *Valid range* is displayed below in seconds.
   *
   * If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days.
   *
   * @public
   */
  RefreshTokenValidity?: number | undefined;

  /**
   * The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for `AccessTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `AccessTokenValidity` to `10` and `TokenValidityUnits` to `hours`, your user can authorize access with their access token for 10 hours.
   *
   * The default time unit for `AccessTokenValidity` in an API request is hours. *Valid range* is displayed below in seconds.
   *
   * If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour.
   *
   * @public
   */
  AccessTokenValidity?: number | undefined;

  /**
   * The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for `IdTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `IdTokenValidity` as `10` and `TokenValidityUnits` as `hours`, your user can authenticate their session with their ID token for 10 hours.
   *
   * The default time unit for `IdTokenValidity` in an API request is hours. *Valid range* is displayed below in seconds.
   *
   * If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour.
   *
   * @public
   */
  IdTokenValidity?: number | undefined;

  /**
   * The units that validity times are represented in. The default unit for refresh tokens is days, and the default for ID and access tokens are hours.
   *
   * @public
   */
  TokenValidityUnits?: TokenValidityUnitsType | undefined;

  /**
   * The list of user attributes that you want your app client to have read access to. After your user authenticates in your app, their access token authorizes them to read their own attribute value for any attribute in this list.
   *
   * When you don't specify the `ReadAttributes` for your app client, your app can read the values of `email_verified`, `phone_number_verified`, and the standard attributes of your user pool. When your user pool app client has read access to these default attributes, `ReadAttributes` doesn't return any information. Amazon Cognito only populates `ReadAttributes` in the API response if you have specified your own custom set of read attributes.
   *
   * @public
   */
  ReadAttributes?: string[] | undefined;

  /**
   * The list of user attributes that you want your app client to have write access to. After your user authenticates in your app, their access token authorizes them to set or modify their own attribute value for any attribute in this list.
   *
   * When you don't specify the `WriteAttributes` for your app client, your app can write the values of the Standard attributes of your user pool. When your user pool has write access to these default attributes, `WriteAttributes` doesn't return any information. Amazon Cognito only populates `WriteAttributes` in the API response if you have specified your own custom set of write attributes.
   *
   * If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see [Specifying IdP Attribute Mappings for Your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html).
   *
   * @public
   */
  WriteAttributes?: string[] | undefined;

  /**
   * The [authentication flows](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow-methods.html) that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.
   *
   * > **Note:** If you don't specify a value for `ExplicitAuthFlows`, your app client supports `ALLOW_REFRESH_TOKEN_AUTH`, `ALLOW_USER_SRP_AUTH`, and `ALLOW_CUSTOM_AUTH`.
   *
   * The values for authentication flow options include the following.
   *
   * - `ALLOW_USER_AUTH`: Enable selection-based sign-in with `USER_AUTH`. This setting covers username-password, secure remote password (SRP), passwordless, and passkey authentication. This authentiation flow can do username-password and SRP authentication without other `ExplicitAuthFlows` permitting them. For example users can complete an SRP challenge through `USER_AUTH` without the flow `USER_SRP_AUTH` being active for the app client. This flow doesn't include `CUSTOM_AUTH`.
   *
   *   To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   * - `ALLOW_ADMIN_USER_PASSWORD_AUTH`: Enable admin based user password authentication flow `ADMIN_USER_PASSWORD_AUTH`. This setting replaces the `ADMIN_NO_SRP_AUTH` setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password.
   * - `ALLOW_CUSTOM_AUTH`: Enable Lambda trigger based authentication.
   * - `ALLOW_USER_PASSWORD_AUTH`: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords.
   * - `ALLOW_USER_SRP_AUTH`: Enable SRP-based authentication.
   * - `ALLOW_REFRESH_TOKEN_AUTH`: Enable authflow to refresh tokens.
   *
   * In some environments, you will see the values `ADMIN_NO_SRP_AUTH`, `CUSTOM_AUTH_FLOW_ONLY`, or `USER_PASSWORD_AUTH`. You can't assign these legacy `ExplicitAuthFlows` values to user pool clients at the same time as values that begin with `ALLOW_`, like `ALLOW_USER_SRP_AUTH`.
   *
   * @public
   */
  ExplicitAuthFlows?: ExplicitAuthFlowsType[] | undefined;

  /**
   * A list of provider names for the identity providers (IdPs) that are supported on this client. The following are supported: `COGNITO`, `Facebook`, `Google`, `SignInWithApple`, and `LoginWithAmazon`. You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example `MySAMLIdP` or `MyOIDCIdP`.
   *
   * This parameter sets the IdPs that [managed login](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html) will display on the login page for your app client. The removal of `COGNITO` from this list doesn't prevent authentication operations for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent SDK-based authentication is to block access with a [WAF rule](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-waf.html).
   *
   * @public
   */
  SupportedIdentityProviders?: string[] | undefined;

  /**
   * A list of allowed redirect, or callback, URLs for managed login authentication. These URLs are the paths where you want to send your users' browsers after they complete authentication with managed login or a third-party IdP. Typically, callback URLs are the home of an application that uses OAuth or OIDC libraries to process authentication outcomes.
   *
   * A redirect URI must meet the following requirements:
   *
   * - Be an absolute URI.
   * - Be registered with the authorization server. Amazon Cognito doesn't accept authorization requests with `redirect_uri` values that aren't in the list of `CallbackURLs` that you provide in this parameter.
   * - Not include a fragment component.
   *
   * See [OAuth 2.0 - Redirection Endpoint](https://tools.ietf.org/html/rfc6749#section-3.1.2).
   *
   * Amazon Cognito requires HTTPS over HTTP except for callback URLs to `http://localhost`, `http://127.0.0.1` and `http://[::1]`. These callback URLs are for testing purposes only. You can specify custom TCP ports for your callback URLs.
   *
   * App callback URLs such as `myapp://example` are also supported.
   *
   * @public
   */
  CallbackURLs?: string[] | undefined;

  /**
   * A list of allowed logout URLs for managed login authentication. When you pass `logout_uri` and `client_id` parameters to `/logout`, Amazon Cognito signs out your user and redirects them to the logout URL. This parameter describes the URLs that you want to be the permitted targets of `logout_uri`. A typical use of these URLs is when a user selects "Sign out" and you redirect them to your public homepage. For more information, see [Logout endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/logout-endpoint.html).
   *
   * @public
   */
  LogoutURLs?: string[] | undefined;

  /**
   * The default redirect URI. In app clients with one assigned IdP, replaces `redirect_uri` in authentication requests. Must be in the `CallbackURLs` list.
   *
   * @public
   */
  DefaultRedirectURI?: string | undefined;

  /**
   * The OAuth grant types that you want your app client to generate for clients in managed login authentication. To create an app client that generates client credentials grants, you must add `client_credentials` as the only allowed OAuth flow.
   *
   * - **code**
   *
   *   Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the `/oauth2/token` endpoint.
   *
   * - **implicit**
   *
   *   Issue the access token, and the ID token when scopes like `openid` and `profile` are requested, directly to your user.
   *
   * - **client_credentials**
   *
   *   Issue the access token from the `/oauth2/token` endpoint directly to a non-person user, authorized by a combination of the client ID and client secret.
   *
   * @public
   */
  AllowedOAuthFlows?: OAuthFlowType[] | undefined;

  /**
   * The OAuth, OpenID Connect (OIDC), and custom scopes that you want to permit your app client to authorize access with. Scopes govern access control to user pool self-service API operations, user data from the `userInfo` endpoint, and third-party APIs. Scope values include `phone`, `email`, `openid`, and `profile`. The `aws.cognito.signin.user.admin` scope authorizes user self-service operations. Custom scopes with resource servers authorize access to external APIs.
   *
   * @public
   */
  AllowedOAuthScopes?: string[] | undefined;

  /**
   * Set to `true` to use OAuth 2.0 authorization server features in your app client.
   *
   * This parameter must have a value of `true` before you can configure the following features in your app client.
   *
   * - `CallBackURLs`: Callback URLs.
   * - `LogoutURLs`: Sign-out redirect URLs.
   * - `AllowedOAuthScopes`: OAuth 2.0 scopes.
   * - `AllowedOAuthFlows`: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.
   *
   * To use authorization server features, configure one of these features in the Amazon Cognito console or set `AllowedOAuthFlowsUserPoolClient` to `true` in a `CreateUserPoolClient` or `UpdateUserPoolClient` API request. If you don't set a value for `AllowedOAuthFlowsUserPoolClient` in a request with the CLI or SDKs, it defaults to `false`. When `false`, only SDK-based API sign-in is permitted.
   *
   * @public
   */
  AllowedOAuthFlowsUserPoolClient?: boolean | undefined;

  /**
   * The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign.
   *
   * In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools might not have access to analytics or might be configurable with campaigns in the US East (N. Virginia) Region. For more information, see [Using Amazon Pinpoint analytics](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-pinpoint-integration.html).
   *
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType | undefined;

  /**
   * When `ENABLED`, suppresses messages that might indicate a valid user exists when someone attempts sign-in. This parameters sets your preference for the errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to `ENABLED` and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to `LEGACY`, those APIs return a `UserNotFoundException` exception if the user doesn't exist in the user pool.
   *
   * Defaults to `LEGACY`.
   *
   * @public
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | undefined;

  /**
   * Activates or deactivates [token revocation](https://docs.aws.amazon.com/cognito/latest/developerguide/token-revocation.html) in the target app client.
   *
   * If you don't include this parameter, token revocation is automatically activated for the new user pool client.
   *
   * @public
   */
  EnableTokenRevocation?: boolean | undefined;

  /**
   * When `true`, your application can include additional `UserContextData` in authentication requests. This data includes the IP address, and contributes to analysis by threat protection features. For more information about propagation of user context data, see [Adding session data to API requests](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint). If you don’t include this parameter, you can't send the source IP address to Amazon Cognito threat protection features. You can only activate `EnablePropagateAdditionalUserContextData` in an app client that has a client secret.
   *
   * @public
   */
  EnablePropagateAdditionalUserContextData?: boolean | undefined;

  /**
   * Amazon Cognito creates a session token for each API request in an authentication flow. `AuthSessionValidity` is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.
   *
   * @public
   */
  AuthSessionValidity?: number | undefined;

  /**
   * The configuration of your app client for refresh token rotation. When enabled, your app client issues new ID, access, and refresh tokens when users renew their sessions with refresh tokens. When disabled, token refresh issues only ID and access tokens.
   *
   * @public
   */
  RefreshTokenRotation?: RefreshTokenRotationType | undefined;
}

/**
 * The configuration of a user pool client.
 *
 * @public
 */
export interface UserPoolClientType {
  /**
   * The ID of the user pool associated with the app client.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * The name of the app client.
   *
   * @public
   */
  ClientName?: string | undefined;

  /**
   * The ID of the app client.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The app client secret.
   *
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * The refresh token time limit. After this limit expires, your user can't use their refresh token. To specify the time unit for `RefreshTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `RefreshTokenValidity` as `10` and `TokenValidityUnits` as `days`, your user can refresh their session and retrieve new access and ID tokens for 10 days.
   *
   * The default time unit for `RefreshTokenValidity` in an API request is days. You can't set `RefreshTokenValidity` to 0. If you do, Amazon Cognito overrides the value with the default value of 30 days. *Valid range* is displayed below in seconds.
   *
   * If you don't specify otherwise in the configuration of your app client, your refresh tokens are valid for 30 days.
   *
   * @public
   */
  RefreshTokenValidity?: number | undefined;

  /**
   * The access token time limit. After this limit expires, your user can't use their access token. To specify the time unit for `AccessTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `AccessTokenValidity` to `10` and `TokenValidityUnits` to `hours`, your user can authorize access with their access token for 10 hours.
   *
   * The default time unit for `AccessTokenValidity` in an API request is hours. *Valid range* is displayed below in seconds.
   *
   * If you don't specify otherwise in the configuration of your app client, your access tokens are valid for one hour.
   *
   * @public
   */
  AccessTokenValidity?: number | undefined;

  /**
   * The ID token time limit. After this limit expires, your user can't use their ID token. To specify the time unit for `IdTokenValidity` as `seconds`, `minutes`, `hours`, or `days`, set a `TokenValidityUnits` value in your API request.
   *
   * For example, when you set `IdTokenValidity` as `10` and `TokenValidityUnits` as `hours`, your user can authenticate their session with their ID token for 10 hours.
   *
   * The default time unit for `IdTokenValidity` in an API request is hours. *Valid range* is displayed below in seconds.
   *
   * If you don't specify otherwise in the configuration of your app client, your ID tokens are valid for one hour.
   *
   * @public
   */
  IdTokenValidity?: number | undefined;

  /**
   * The time units that, with `IdTokenValidity`, `AccessTokenValidity`, and `RefreshTokenValidity`, set and display the duration of ID, access, and refresh tokens for an app client. You can assign a separate token validity unit to each type of token.
   *
   * @public
   */
  TokenValidityUnits?: TokenValidityUnitsType | undefined;

  /**
   * The list of user attributes that you want your app client to have read access to. After your user authenticates in your app, their access token authorizes them to read their own attribute value for any attribute in this list.
   *
   * When you don't specify the `ReadAttributes` for your app client, your app can read the values of `email_verified`, `phone_number_verified`, and the standard attributes of your user pool. When your user pool app client has read access to these default attributes, `ReadAttributes` doesn't return any information. Amazon Cognito only populates `ReadAttributes` in the API response if you have specified your own custom set of read attributes.
   *
   * @public
   */
  ReadAttributes?: string[] | undefined;

  /**
   * The list of user attributes that you want your app client to have write access to. After your user authenticates in your app, their access token authorizes them to set or modify their own attribute value for any attribute in this list.
   *
   * When you don't specify the `WriteAttributes` for your app client, your app can write the values of the Standard attributes of your user pool. When your user pool has write access to these default attributes, `WriteAttributes` doesn't return any information. Amazon Cognito only populates `WriteAttributes` in the API response if you have specified your own custom set of write attributes.
   *
   * If your app client allows users to sign in through an IdP, this array must include all attributes that you have mapped to IdP attributes. Amazon Cognito updates mapped attributes when users sign in to your application through an IdP. If your app client does not have write access to a mapped attribute, Amazon Cognito throws an error when it tries to update the attribute. For more information, see [Specifying IdP Attribute Mappings for Your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-specifying-attribute-mapping.html).
   *
   * @public
   */
  WriteAttributes?: string[] | undefined;

  /**
   * The [authentication flows](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow-methods.html) that you want your user pool client to support. For each app client in your user pool, you can sign in your users with any combination of one or more flows, including with a user name and Secure Remote Password (SRP), a user name and password, or a custom authentication process that you define with Lambda functions.
   *
   * > **Note:** If you don't specify a value for `ExplicitAuthFlows`, your app client supports `ALLOW_REFRESH_TOKEN_AUTH`, `ALLOW_USER_SRP_AUTH`, and `ALLOW_CUSTOM_AUTH`.
   *
   * The values for authentication flow options include the following.
   *
   * - `ALLOW_USER_AUTH`: Enable selection-based sign-in with `USER_AUTH`. This setting covers username-password, secure remote password (SRP), passwordless, and passkey authentication. This authentiation flow can do username-password and SRP authentication without other `ExplicitAuthFlows` permitting them. For example users can complete an SRP challenge through `USER_AUTH` without the flow `USER_SRP_AUTH` being active for the app client. This flow doesn't include `CUSTOM_AUTH`.
   *
   *   To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   * - `ALLOW_ADMIN_USER_PASSWORD_AUTH`: Enable admin based user password authentication flow `ADMIN_USER_PASSWORD_AUTH`. This setting replaces the `ADMIN_NO_SRP_AUTH` setting. With this authentication flow, your app passes a user name and password to Amazon Cognito in the request, instead of using the Secure Remote Password (SRP) protocol to securely transmit the password.
   * - `ALLOW_CUSTOM_AUTH`: Enable Lambda trigger based authentication.
   * - `ALLOW_USER_PASSWORD_AUTH`: Enable user password-based authentication. In this flow, Amazon Cognito receives the password in the request instead of using the SRP protocol to verify passwords.
   * - `ALLOW_USER_SRP_AUTH`: Enable SRP-based authentication.
   * - `ALLOW_REFRESH_TOKEN_AUTH`: Enable authflow to refresh tokens.
   *
   * In some environments, you will see the values `ADMIN_NO_SRP_AUTH`, `CUSTOM_AUTH_FLOW_ONLY`, or `USER_PASSWORD_AUTH`. You can't assign these legacy `ExplicitAuthFlows` values to user pool clients at the same time as values that begin with `ALLOW_`, like `ALLOW_USER_SRP_AUTH`.
   *
   * @public
   */
  ExplicitAuthFlows?: ExplicitAuthFlowsType[] | undefined;

  /**
   * A list of provider names for the identity providers (IdPs) that are supported on this client. The following are supported: `COGNITO`, `Facebook`, `Google`, `SignInWithApple`, and `LoginWithAmazon`. You can also specify the names that you configured for the SAML and OIDC IdPs in your user pool, for example `MySAMLIdP` or `MyOIDCIdP`.
   *
   * This parameter sets the IdPs that [managed login](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html) will display on the login page for your app client. The removal of `COGNITO` from this list doesn't prevent authentication operations for local users with the user pools API in an Amazon Web Services SDK. The only way to prevent SDK-based authentication is to block access with a [WAF rule](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-waf.html).
   *
   * @public
   */
  SupportedIdentityProviders?: string[] | undefined;

  /**
   * A list of allowed redirect (callback) URLs for the IdPs.
   *
   * A redirect URI must:
   *
   * - Be an absolute URI.
   * - Be registered with the authorization server.
   * - Not include a fragment component.
   *
   * See [OAuth 2.0 - Redirection Endpoint](https://tools.ietf.org/html/rfc6749#section-3.1.2).
   *
   * Amazon Cognito requires HTTPS over HTTP for callback URLs to `http://localhost`, `http://127.0.0.1` and `http://[::1]`. These callback URLs are for testing purposes only. You can specify custom TCP ports for your callback URLs.
   *
   * App callback URLs such as myapp://example are also supported.
   *
   * @public
   */
  CallbackURLs?: string[] | undefined;

  /**
   * A list of allowed logout URLs for the IdPs.
   *
   * @public
   */
  LogoutURLs?: string[] | undefined;

  /**
   * The default redirect URI. Must be in the `CallbackURLs` list.
   *
   * A redirect URI must:
   *
   * - Be an absolute URI.
   * - Be registered with the authorization server.
   * - Not include a fragment component.
   *
   * See [OAuth 2.0 - Redirection Endpoint](https://tools.ietf.org/html/rfc6749#section-3.1.2).
   *
   * Amazon Cognito requires HTTPS over HTTP for callback URLs to `http://localhost`, `http://127.0.0.1` and `http://[::1]`. These callback URLs are for testing purposes only. You can specify custom TCP ports for your callback URLs.
   *
   * App callback URLs such as myapp://example are also supported.
   *
   * @public
   */
  DefaultRedirectURI?: string | undefined;

  /**
   * The OAuth grant types that you want your app client to generate. To create an app client that generates client credentials grants, you must add `client_credentials` as the only allowed OAuth flow.
   *
   * - **code**
   *
   *   Use a code grant flow, which provides an authorization code as the response. This code can be exchanged for access tokens with the `/oauth2/token` endpoint.
   *
   * - **implicit**
   *
   *   Issue the access token (and, optionally, ID token, based on scopes) directly to your user.
   *
   * - **client_credentials**
   *
   *   Issue the access token from the `/oauth2/token` endpoint directly to a non-person user using a combination of the client ID and client secret.
   *
   * @public
   */
  AllowedOAuthFlows?: OAuthFlowType[] | undefined;

  /**
   * The OAuth 2.0 scopes that you want your app client to support. Can include standard OAuth scopes like `phone`, `email`, `openid`, and `profile`. Can also include the `aws.cognito.signin.user.admin` scope that authorizes user profile self-service operations and custom scopes from resource servers.
   *
   * @public
   */
  AllowedOAuthScopes?: string[] | undefined;

  /**
   * Set to `true` to use OAuth 2.0 authorization server features in your app client.
   *
   * This parameter must have a value of `true` before you can configure the following features in your app client.
   *
   * - `CallBackURLs`: Callback URLs.
   * - `LogoutURLs`: Sign-out redirect URLs.
   * - `AllowedOAuthScopes`: OAuth 2.0 scopes.
   * - `AllowedOAuthFlows`: Support for authorization code, implicit, and client credentials OAuth 2.0 grants.
   *
   * To use authorization server features, configure one of these features in the Amazon Cognito console or set `AllowedOAuthFlowsUserPoolClient` to `true` in a `CreateUserPoolClient` or `UpdateUserPoolClient` API request. If you don't set a value for `AllowedOAuthFlowsUserPoolClient` in a request with the CLI or SDKs, it defaults to `false`. When `false`, only SDK-based API sign-in is permitted.
   *
   * @public
   */
  AllowedOAuthFlowsUserPoolClient?: boolean | undefined;

  /**
   * The user pool analytics configuration for collecting metrics and sending them to your Amazon Pinpoint campaign.
   *
   * > **Note:** In Amazon Web Services Regions where Amazon Pinpoint isn't available, user pools only support sending events to Amazon Pinpoint projects in Amazon Web Services Region us-east-1. In Regions where Amazon Pinpoint is available, user pools support sending events to Amazon Pinpoint projects within that same Region.
   *
   * @public
   */
  AnalyticsConfiguration?: AnalyticsConfigurationType | undefined;

  /**
   * When `ENABLED`, suppresses messages that might indicate a valid user exists when someone attempts sign-in. This parameters sets your preference for the errors and responses that you want Amazon Cognito APIs to return during authentication, account confirmation, and password recovery when the user doesn't exist in the user pool. When set to `ENABLED` and the user doesn't exist, authentication returns an error indicating either the username or password was incorrect. Account confirmation and password recovery return a response indicating a code was sent to a simulated destination. When set to `LEGACY`, those APIs return a `UserNotFoundException` exception if the user doesn't exist in the user pool.
   *
   * Defaults to `LEGACY`.
   *
   * @public
   */
  PreventUserExistenceErrors?: PreventUserExistenceErrorTypes | undefined;

  /**
   * Indicates whether token revocation is activated for the user pool client. When you create a new user pool client, token revocation is activated by default.
   *
   * @public
   */
  EnableTokenRevocation?: boolean | undefined;

  /**
   * When `EnablePropagateAdditionalUserContextData` is true, Amazon Cognito accepts an `IpAddress` value that you send in the `UserContextData` parameter. The `UserContextData` parameter sends information to Amazon Cognito threat protection for risk analysis. You can send `UserContextData` when you sign in Amazon Cognito native users with the `InitiateAuth` and `RespondToAuthChallenge` API operations.
   *
   * When `EnablePropagateAdditionalUserContextData` is false, you can't send your user's source IP address to Amazon Cognito threat protection with unauthenticated API operations. `EnablePropagateAdditionalUserContextData` doesn't affect whether you can send a source IP address in a `ContextData` parameter with the authenticated API operations `AdminInitiateAuth` and `AdminRespondToAuthChallenge`.
   *
   * You can only activate `EnablePropagateAdditionalUserContextData` in an app client that has a client secret. For more information about propagation of user context data, see [Adding user device and session data to API requests](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-device-fingerprint).
   *
   * @public
   */
  EnablePropagateAdditionalUserContextData?: boolean | undefined;

  /**
   * Amazon Cognito creates a session token for each API request in an authentication flow. `AuthSessionValidity` is the duration, in minutes, of that session token. Your user pool native user must respond to each authentication challenge before the session expires.
   *
   * @public
   */
  AuthSessionValidity?: number | undefined;

  /**
   * The configuration of your app client for refresh token rotation. When enabled, your app client issues new ID, access, and refresh tokens when users renew their sessions with refresh tokens. When disabled, token refresh issues only ID and access tokens.
   *
   * @public
   */
  RefreshTokenRotation?: RefreshTokenRotationType | undefined;
}

/**
 * Represents the response from the server to create a user pool client.
 *
 * @public
 */
export interface CreateUserPoolClientResponse {
  /**
   * The details of the new app client.
   *
   * @public
   */
  UserPoolClient?: UserPoolClientType | undefined;
}

/**
 * The configuration for a custom domain, including the SSL certificate and TLS security policy.
 *
 * @public
 */
export interface CustomDomainConfigType {
  /**
   * The Amazon Resource Name (ARN) of an Certificate Manager SSL certificate. You use this certificate for the subdomain of your custom domain.
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * The security policy for the custom domain. Defines the minimum TLS version and cipher suites that Amazon CloudFront supports when communicating with clients. For specific guidance, see [Supported protocols and ciphers between viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html). Valid values are as follows:
   *
   * - `TLS_V1_3_2025` (strictest): A post-quantum-ready policy requiring TLS 1.3. It provides the strongest security posture and is ideal for workloads where all clients and browsers are updated to the latest versions. [Supported protocols and ciphers for TLSv1.3_2025](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html).
   * - `TLS_V1_2_2021` (recommended): A post-quantum-ready policy which prefers TLS 1.3 but allows fallback to TLS 1.2 to accommodate older clients. It is the recommended minimum for typical commercial-grade consumer applications. [Supported protocols and ciphers for TLSv1.2_2021](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html).
   * - `TLS_V1` (strongly discouraged): Permits fallback to TLS 1.0. It offers the broadest compatibility, including support for legacy clients that are more than a decade old. This compatibility comes at the expense of allowing TLS versions and cryptographic algorithms that are no longer considered safe for commercial use. [Supported protocols and ciphers for TLSv1](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html).
   *
   * @public
   */
  SecurityPolicy?: SecurityPolicyType | undefined;
}

/**
 * Specifies failover configuration for multi-region user pool domains. Contains settings for the secondary region and health check configuration.
 *
 * @public
 */
export interface FailoverType {
  /**
   * The secondary Amazon Web Services Region to use for failover when the primary region becomes unavailable.
   *
   * @public
   */
  SecondaryRegion: string | undefined;

  /**
   * The ID of the Amazon Web Services Route53 healthcheck that controls routing. If the healthcheck is healthy, traffic will be routed to the primary replica, and if the healthcheck is unhealthy, traffic will be routed to the secondary region.
   *
   * @public
   */
  PrimaryRoute53HealthCheckId: string | undefined;
}

/**
 * Specifies routing configuration for user pool domains. Contains failover settings for multi-region deployments.
 *
 * @public
 */
export interface RoutingType {
  /**
   * The failover configuration that specifies the secondary region and health check settings.
   *
   * @public
   */
  Failover?: FailoverType | undefined;
}

/**
 * @public
 */
export interface CreateUserPoolDomainRequest {
  /**
   * The domain string. For custom domains, this is the fully-qualified domain name, such as `auth.example.com`. For prefix domains, this is the prefix alone, such as `myprefix`. A prefix value of `myprefix` for a user pool in the `us-east-1` Region results in a domain of `myprefix.auth.us-east-1.amazoncognito.com`.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * The ID of the user pool where you want to add a domain.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The version of managed login branding that you want to apply to your domain. A value of `1` indicates hosted UI (classic) and a version of `2` indicates managed login.
   *
   * Managed login requires that your user pool be configured for any [feature plan](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html) other than `Lite`.
   *
   * A `ManagedLoginVersion` value of `2` does not activate managed login pages for your app client. When you create an app client programmatically, your app client has no branding style. To use managed login, create a branding style using the [CreateManagedLoginBranding](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateManagedLoginBranding.html) operation. When you use the console, Amazon Cognito assigns a default branding style automatically. When you use the API or an SDK, you must create a branding style yourself.
   *
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * The configuration for a custom domain. Configures your domain with an Certificate Manager certificate in the `us-east-1` Region.
   *
   * Provide this parameter only if you want to use a [custom domain](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-add-custom-domain.html) for your user pool. Otherwise, you can omit this parameter and use a [prefix domain](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-assign-domain-prefix.html) instead.
   *
   * When you create a custom domain, the passkey RP ID defaults to the custom domain. If you had a prefix domain active, this will cause passkey integration for your prefix domain to stop working due to a mismatch in RP ID. To keep the prefix domain passkey integration working, you can explicitly set RP ID to the prefix domain.
   *
   * @public
   */
  CustomDomainConfig?: CustomDomainConfigType | undefined;

  /**
   * The configuration of routing for requests to the domain for replicas of a replicated user pool. The routing configuration is currently only supported for custom domains.
   *
   * @public
   */
  Routing?: RoutingType | undefined;
}

/**
 * @public
 */
export interface CreateUserPoolDomainResponse {
  /**
   * The version of managed login branding applied your domain. A value of `1` indicates hosted UI (classic) and a version of `2` indicates managed login.
   *
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * The fully-qualified domain name (FQDN) of the Amazon CloudFront distribution that hosts your managed login or classic hosted UI pages. Your domain-name authority must have an alias record that points requests for your custom domain to this FQDN. Amazon Cognito returns this value if you set a custom domain with `CustomDomainConfig`. If you set an Amazon Cognito prefix domain, this parameter returns null.
   *
   * @public
   */
  CloudFrontDomain?: string | undefined;

  /**
   * The routing configuration that was applied to the user pool domain.
   *
   * @public
   */
  Routing?: RoutingType | undefined;
}

/**
 * @public
 */
export interface CreateUserPoolReplicaRequest {
  /**
   * The ID of the user pool to replicate.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The Amazon Web Services Region where you want to create the replica user pool.
   *
   * @public
   */
  RegionName: string | undefined;

  /**
   * A map of tags to assign to the replica user pool. Each tag consists of a key and an optional value, both of which you define. You can maintain tags independently on replica user pools.
   *
   * @public
   */
  UserPoolTags?: Record<string, string> | undefined;
}

/**
 * Contains information about a replica user pool, including Region, status, role, and ARN.
 *
 * @public
 */
export interface UserPoolReplicaType {
  /**
   * The Amazon Web Services Region where the replica is located.
   *
   * @public
   */
  RegionName?: string | undefined;

  /**
   * The current status of the replica.
   *
   * - **CREATING**
   *
   *   The replica is being created.
   *
   * - **INACTIVE**
   *
   *   The replica has been created, but is not accepting requests for end-users. Administrator configuration operations are supported.
   *
   * - **ACTIVE**
   *
   *   The replica is available for both end-user and administrator operations.
   *
   * - **DELETING**
   *
   *   The replica is being deleted.
   *
   * @public
   */
  Status?: ReplicaStatusType | undefined;

  /**
   * The role of the user pool replica that determines which API operations are enabled.
   *
   * - **PRIMARY**
   *
   *   The primary replica supports all end user and administrator operations.
   *
   * - **SECONDARY**
   *
   *   The secondary replica supports a limited set of end user and administrator operations. Generally, only administrator operations that set configurations specific to the replica, and only end-user operations that do not create or change attributes of a user are supported.
   *
   * @public
   */
  Role?: ReplicaRoleType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the replica user pool.
   *
   * @public
   */
  UserPoolArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateUserPoolReplicaResponse {
  /**
   * Information about the created user pool replica, including its status and role.
   *
   * @public
   */
  UserPoolReplica?: UserPoolReplicaType | undefined;
}

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * The name of the group that you want to delete.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The ID of the user pool where you want to delete the group.
   *
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIdentityProviderRequest {
  /**
   * The ID of the user pool where you want to delete the identity provider.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the IdP that you want to delete.
   *
   * @public
   */
  ProviderName: string | undefined;
}

/**
 * @public
 */
export interface DeleteManagedLoginBrandingRequest {
  /**
   * The ID of the managed login branding style that you want to delete.
   *
   * @public
   */
  ManagedLoginBrandingId: string | undefined;

  /**
   * The ID of the user pool that contains the managed login branding style that you want to delete.
   *
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceServerRequest {
  /**
   * The ID of the user pool where you want to delete the resource server.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The identifier of the resource server that you want to delete.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteTermsRequest {
  /**
   * The ID of the terms documents that you want to delete.
   *
   * @public
   */
  TermsId: string | undefined;

  /**
   * The ID of the user pool that contains the terms documents that you want to delete.
   *
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * Represents the request to delete a user.
 *
 * @public
 */
export interface DeleteUserRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * Represents the request to delete user attributes.
 *
 * @public
 */
export interface DeleteUserAttributesRequest {
  /**
   * An array of strings representing the user attribute names you want to delete.
   *
   * For custom attributes, you must prepend the `custom:` prefix to the attribute name, for example `custom:department`.
   *
   * @public
   */
  UserAttributeNames: string[] | undefined;

  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * Represents the response from the server to delete user attributes.
 *
 * @public
 */
export interface DeleteUserAttributesResponse {}

/**
 * Represents the request to delete a user pool.
 *
 * @public
 */
export interface DeleteUserPoolRequest {
  /**
   * The ID of the user pool that you want to delete.
   *
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * Represents the request to delete a user pool client.
 *
 * @public
 */
export interface DeleteUserPoolClientRequest {
  /**
   * The ID of the user pool where you want to delete the client.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the user pool app client that you want to delete.
   *
   * @public
   */
  ClientId: string | undefined;
}

/**
 * The request to delete a specific client secret from a user pool app client.
 *
 * @public
 */
export interface DeleteUserPoolClientSecretRequest {
  /**
   * The ID of the user pool that contains the app client.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client from which you want to delete the secret.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The unique identifier of the client secret you want to delete.
   *
   * @public
   */
  ClientSecretId: string | undefined;
}

/**
 * The response from deleting a client secret.
 *
 * @public
 */
export interface DeleteUserPoolClientSecretResponse {}

/**
 * @public
 */
export interface DeleteUserPoolDomainRequest {
  /**
   * The domain that you want to delete. For custom domains, this is the fully-qualified domain name like `auth.example.com`. For Amazon Cognito prefix domains, this is the prefix alone, like `myprefix`.
   *
   * @public
   */
  Domain: string | undefined;

  /**
   * The ID of the user pool where you want to delete the domain.
   *
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
export interface DeleteUserPoolReplicaRequest {
  /**
   * The ID of the user pool that contains the replica to delete.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The Amazon Web Services Region of the replica to delete.
   *
   * @public
   */
  RegionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserPoolReplicaResponse {
  /**
   * Information about the deleted user pool replica.
   *
   * @public
   */
  UserPoolReplica?: UserPoolReplicaType | undefined;
}

/**
 * @public
 */
export interface DeleteWebAuthnCredentialRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;

  /**
   * The unique identifier of the passkey that you want to delete.
   *
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
   * The ID of the user pool that has the IdP that you want to describe..
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the IdP that you want to describe.
   *
   * @public
   */
  ProviderName: string | undefined;
}

/**
 * @public
 */
export interface DescribeIdentityProviderResponse {
  /**
   * The details of the requested IdP.
   *
   * @public
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface DescribeManagedLoginBrandingRequest {
  /**
   * The ID of the user pool that contains the managed login branding style that you want to get information about.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the managed login branding style that you want to get more information about.
   *
   * @public
   */
  ManagedLoginBrandingId: string | undefined;

  /**
   * When `true`, returns values for branding options that are unchanged from Amazon Cognito defaults. When `false` or when you omit this parameter, returns only values that you customized in your branding style.
   *
   * @public
   */
  ReturnMergedResources?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeManagedLoginBrandingResponse {
  /**
   * The details of the requested branding style.
   *
   * @public
   */
  ManagedLoginBranding?: ManagedLoginBrandingType | undefined;
}

/**
 * @public
 */
export interface DescribeManagedLoginBrandingByClientRequest {
  /**
   * The ID of the user pool that contains the app client where you want more information about the managed login branding style.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The app client that's assigned to the branding style that you want more information about.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * When `true`, returns values for branding options that are unchanged from Amazon Cognito defaults. When `false` or when you omit this parameter, returns only values that you customized in your branding style.
   *
   * @public
   */
  ReturnMergedResources?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeManagedLoginBrandingByClientResponse {
  /**
   * The details of the requested branding style.
   *
   * @public
   */
  ManagedLoginBranding?: ManagedLoginBrandingType | undefined;
}

/**
 * @public
 */
export interface DescribeResourceServerRequest {
  /**
   * The ID of the user pool that hosts the resource server.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * A unique resource server identifier for the resource server. The identifier can be an API friendly name like `solar-system-data`. You can also set an API URL like `https://solar-system-data-api.example.com` as your identifier.
   *
   * Amazon Cognito represents scopes in the access token in the format `$resource-server-identifier/$scope`. Longer scope-identifier strings increase the size of your access tokens.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourceServerResponse {
  /**
   * The details of the requested resource server.
   *
   * @public
   */
  ResourceServer: ResourceServerType | undefined;
}

/**
 * @public
 */
export interface DescribeRiskConfigurationRequest {
  /**
   * The ID of the user pool with the risk configuration that you want to inspect. You can apply default risk configuration at the user pool level and further customize it from user pool defaults at the app-client level. Specify `ClientId` to inspect client-level configuration, or `UserPoolId` to inspect pool-level configuration.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client with the risk configuration that you want to inspect. You can apply default risk configuration at the user pool level and further customize it from user pool defaults at the app-client level. Specify `ClientId` to inspect client-level configuration, or `UserPoolId` to inspect pool-level configuration.
   *
   * @public
   */
  ClientId?: string | undefined;
}

/**
 * Settings for user pool actions when Amazon Cognito detects compromised credentials with threat protection in full-function `ENFORCED` mode.
 *
 * @public
 */
export interface CompromisedCredentialsActionsType {
  /**
   * The action that Amazon Cognito takes when it detects compromised credentials.
   *
   * @public
   */
  EventAction: CompromisedCredentialsEventActionType | undefined;
}

/**
 * Settings for compromised-credentials actions and authentication-event sources with threat protection in full-function `ENFORCED` mode.
 *
 * @public
 */
export interface CompromisedCredentialsRiskConfigurationType {
  /**
   * Settings for the sign-in activity where you want to configure compromised-credentials actions. Defaults to all events.
   *
   * @public
   */
  EventFilter?: EventFilterType[] | undefined;

  /**
   * Settings for the actions that you want your user pool to take when Amazon Cognito detects compromised credentials.
   *
   * @public
   */
  Actions: CompromisedCredentialsActionsType | undefined;
}

/**
 * Exceptions to the risk evaluation configuration, including always-allow and always-block IP address ranges.
 *
 * @public
 */
export interface RiskExceptionConfigurationType {
  /**
   * An always-block IP address list. Overrides the risk decision and always blocks authentication requests. This parameter is displayed and set in CIDR notation.
   *
   * @public
   */
  BlockedIPRangeList?: string[] | undefined;

  /**
   * An always-allow IP address list. Risk detection isn't performed on the IP addresses in this range list. This parameter is displayed and set in CIDR notation.
   *
   * @public
   */
  SkippedIPRangeList?: string[] | undefined;
}

/**
 * The settings of risk configuration for threat protection with threat protection in a user pool.
 *
 * @public
 */
export interface RiskConfigurationType {
  /**
   * The ID of the user pool that has the risk configuration applied.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * The app client where this configuration is applied. When this parameter isn't present, the risk configuration applies to all user pool app clients that don't have client-level settings.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * Settings for compromised-credentials actions and authentication types with threat protection in full-function `ENFORCED` mode.
   *
   * @public
   */
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType | undefined;

  /**
   * The settings for automated responses and notification templates for adaptive authentication with threat protection.
   *
   * @public
   */
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType | undefined;

  /**
   * Exceptions to the risk evaluation configuration, including always-allow and always-block IP address ranges.
   *
   * @public
   */
  RiskExceptionConfiguration?: RiskExceptionConfigurationType | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRiskConfigurationResponse {
  /**
   * The details of the requested risk configuration.
   *
   * @public
   */
  RiskConfiguration: RiskConfigurationType | undefined;
}

/**
 * @public
 */
export interface DescribeTermsRequest {
  /**
   * The ID of the terms documents that you want to describe.
   *
   * @public
   */
  TermsId: string | undefined;

  /**
   * The ID of the user pool that contains the terms documents that you want to describe.
   *
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface DescribeTermsResponse {
  /**
   * A summary of the requested terms documents. Includes a unique identifier for later changes to the terms documents.
   *
   * @public
   */
  Terms?: TermsType | undefined;
}

/**
 * @public
 */
export interface DescribeTermsByClientRequest {
  /**
   * The ID of the app client that the terms documents are associated with.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The ID of the user pool that contains the terms documents that you want to describe.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the terms documents that you want to describe.
   *
   * @public
   */
  TermsName: string | undefined;
}

/**
 * @public
 */
export interface DescribeTermsByClientResponse {
  /**
   * A summary of the requested terms documents, including a unique identifier for later changes to the terms documents.
   *
   * @public
   */
  Terms?: TermsType | undefined;
}

/**
 * Represents the request to describe the user import job.
 *
 * @public
 */
export interface DescribeUserImportJobRequest {
  /**
   * The ID of the user pool that's associated with the import job.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The Id of the user import job that you want to describe.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * Represents the response from the server to the request to describe the user import job.
 *
 * @public
 */
export interface DescribeUserImportJobResponse {
  /**
   * The details of the user import job. Includes logging destination, status, and the Amazon S3 pre-signed URL for CSV upload.
   *
   * @public
   */
  UserImportJob?: UserImportJobType | undefined;
}

/**
 * Represents the request to describe the user pool.
 *
 * @public
 */
export interface DescribeUserPoolRequest {
  /**
   * The ID of the user pool you want to describe.
   *
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * Represents the response to describe the user pool.
 *
 * @public
 */
export interface DescribeUserPoolResponse {
  /**
   * The details of the requested user pool.
   *
   * @public
   */
  UserPool?: UserPoolType | undefined;
}

/**
 * Represents the request to describe a user pool client.
 *
 * @public
 */
export interface DescribeUserPoolClientRequest {
  /**
   * The ID of the user pool that contains the app client you want to describe.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client that you want to describe.
   *
   * @public
   */
  ClientId: string | undefined;
}

/**
 * Represents the response from the server from a request to describe the user pool client.
 *
 * @public
 */
export interface DescribeUserPoolClientResponse {
  /**
   * The details of the request app client.
   *
   * @public
   */
  UserPoolClient?: UserPoolClientType | undefined;
}

/**
 * @public
 */
export interface DescribeUserPoolDomainRequest {
  /**
   * The domain that you want to describe. For custom domains, this is the fully-qualified domain name, such as `auth.example.com`. For Amazon Cognito prefix domains, this is the prefix alone, such as `auth`.
   *
   * @public
   */
  Domain: string | undefined;
}

/**
 * A container for information about the user pool domain associated with the hosted UI and OAuth endpoints.
 *
 * @public
 */
export interface DomainDescriptionType {
  /**
   * The ID of the user pool that the domain is attached to.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * The Amazon Web Services account that you created the user pool in.
   *
   * @public
   */
  AWSAccountId?: string | undefined;

  /**
   * The domain string. For custom domains, this is the fully-qualified domain name, such as `auth.example.com`. For Amazon Cognito prefix domains, this is the prefix alone, such as `auth`.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * The Amazon S3 bucket where the static files for this domain are stored.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The Amazon CloudFront endpoint that hosts your custom domain.
   *
   * @public
   */
  CloudFrontDistribution?: string | undefined;

  /**
   * The app version.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The domain status.
   *
   * @public
   */
  Status?: DomainStatusType | undefined;

  /**
   * The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.
   *
   * @public
   */
  CustomDomainConfig?: CustomDomainConfigType | undefined;

  /**
   * The version of managed login branding that you want to apply to your domain. A value of `1` indicates hosted UI (classic) branding and a version of `2` indicates managed login branding.
   *
   * Managed login requires that your user pool be configured for any [feature plan](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-sign-in-feature-plans.html) other than `Lite`.
   *
   * @public
   */
  ManagedLoginVersion?: number | undefined;

  /**
   * The routing configuration for the domain, including failover settings for multi-region deployments. Currently only `Failover` configurations are allowed.
   *
   * @public
   */
  Routing?: RoutingType | undefined;
}

/**
 * @public
 */
export interface DescribeUserPoolDomainResponse {
  /**
   * The details of the requested user pool domain.
   *
   * @public
   */
  DomainDescription?: DomainDescriptionType | undefined;
}

/**
 * Represents the request to forget the device.
 *
 * @public
 */
export interface ForgetDeviceRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * The unique identifier, or device key, of the device that the user wants to forget.
   *
   * @public
   */
  DeviceKey: string | undefined;
}

/**
 * Represents the request to reset a user's password.
 *
 * @public
 */
export interface ForgotPasswordRequest {
  /**
   * The ID of the user pool app client associated with the current signed-in user.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about `SecretHash`, see [Computing secret hash values](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash).
   *
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.
   *
   * For more information, see [Collecting data for threat protection in applications](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html).
   *
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number.
   *
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * The delivery details for an email or SMS message that Amazon Cognito sent for authentication or verification.
 *
 * @public
 */
export interface CodeDeliveryDetailsType {
  /**
   * The email address or phone number destination where Amazon Cognito sent the code.
   *
   * @public
   */
  Destination?: string | undefined;

  /**
   * The method that Amazon Cognito used to send the code.
   *
   * @public
   */
  DeliveryMedium?: DeliveryMediumType | undefined;

  /**
   * The name of the attribute that Amazon Cognito verifies with the code.
   *
   * @public
   */
  AttributeName?: string | undefined;
}

/**
 * The response from Amazon Cognito to a request to reset a password.
 *
 * @public
 */
export interface ForgotPasswordResponse {
  /**
   * Information about the phone number or email address that Amazon Cognito sent the password-recovery code to.
   *
   * @public
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType | undefined;
}

/**
 * @public
 */
export interface GetClientTokenRequest {
  /**
   * The ID of the app client that requests the access token. The app client must have a client secret and the `ALLOW_CLIENT_TOKEN_AUTH` authentication flow.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * An active secret for the app client.
   *
   * @public
   */
  Secret: string | undefined;

  /**
   * The custom scopes to authorize in the access token, in the format `resource-server-identifier/scope-name`. Each scope must belong to a resource server in your user pool. If you don't specify any scopes, Amazon Cognito authorizes the scopes that are configured for the app client.
   *
   * @public
   */
  Scopes?: string[] | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * The access token and its metadata from a machine-to-machine (M2M) client credentials grant.
 *
 * @public
 */
export interface ClientAuthenticationResultType {
  /**
   * The access token for the requested app client. Present this token to a resource server to authorize a request, using the scopes granted in the token.
   *
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * The number of seconds until the access token expires.
   *
   * @public
   */
  ExpiresIn?: number | undefined;

  /**
   * The type of the token. For example, `Bearer`.
   *
   * @public
   */
  TokenType?: string | undefined;
}

/**
 * @public
 */
export interface GetClientTokenResponse {
  /**
   * The access token that Amazon Cognito issues for the app client, and its metadata.
   *
   * @public
   */
  ClientAuthenticationResult?: ClientAuthenticationResultType | undefined;
}

/**
 * Represents the request to get the header information of the CSV file for the user import job.
 *
 * @public
 */
export interface GetCSVHeaderRequest {
  /**
   * The ID of the user pool that you want to import users into.
   *
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * Represents the response from the server to the request to get the header information of the CSV file for the user import job.
 *
 * @public
 */
export interface GetCSVHeaderResponse {
  /**
   * The ID of the requested user pool.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * A comma-separated list of attributes from your user pool. Save this output to a `.csv` file and populate it with the attributes of the users that you want to import.
   *
   * @public
   */
  CSVHeader?: string[] | undefined;
}

/**
 * Represents the request to get the device.
 *
 * @public
 */
export interface GetDeviceRequest {
  /**
   * The key of the device that you want to get information about.
   *
   * @public
   */
  DeviceKey: string | undefined;

  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken?: string | undefined;
}

/**
 * Gets the device response.
 *
 * @public
 */
export interface GetDeviceResponse {
  /**
   * Details of the requested device. Includes device information, last-accessed and created dates, and the device key.
   *
   * @public
   */
  Device: DeviceType | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * The name of the group that you want to get information about.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The ID of the user pool that contains the group that you want to query.
   *
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * A container for the requested group. Includes description, precedence, and IAM role values.
   *
   * @public
   */
  Group?: GroupType | undefined;
}

/**
 * @public
 */
export interface GetIdentityProviderByIdentifierRequest {
  /**
   * The ID of the user pool where you want to get information about the IdP.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The identifier that you assigned to your user pool. The identifier is an alternative name for an IdP that is distinct from the IdP name. For example, an IdP with a name of `MyIdP` might have an identifier of the email domain `example.com`.
   *
   * @public
   */
  IdpIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIdentityProviderByIdentifierResponse {
  /**
   * The configuration of the IdP in your user pool. Includes additional identifiers, the IdP name and type, and trust-relationship details like the issuer URL.
   *
   * @public
   */
  IdentityProvider: IdentityProviderType | undefined;
}

/**
 * @public
 */
export interface GetLogDeliveryConfigurationRequest {
  /**
   * The ID of the user pool that has the logging configuration that you want to view.
   *
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * Configuration for the CloudWatch log group destination of user pool detailed activity logging, or of user activity log export with threat protection.
 *
 * @public
 */
export interface CloudWatchLogsConfigurationType {
  /**
   * The Amazon Resource Name (arn) of a CloudWatch Logs log group where your user pool sends logs. The log group must not be encrypted with Key Management Service and must be in the same Amazon Web Services account as your user pool.
   *
   * To send logs to log groups with a resource policy of a size greater than 5120 characters, configure a log group with a path that starts with `/aws/vendedlogs`. For more information, see [Enabling logging from certain Amazon Web Services services](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html).
   *
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * Configuration for the Amazon Data Firehose stream destination of user activity log export with threat protection.
 *
 * @public
 */
export interface FirehoseConfigurationType {
  /**
   * The ARN of an Amazon Data Firehose stream that's the destination for threat protection log export.
   *
   * @public
   */
  StreamArn?: string | undefined;
}

/**
 * Configuration for the Amazon S3 bucket destination of user activity log export with threat protection.
 *
 * @public
 */
export interface S3ConfigurationType {
  /**
   * The ARN of an Amazon S3 bucket that's the destination for threat protection log export.
   *
   * @public
   */
  BucketArn?: string | undefined;
}

/**
 * The configuration of user event logs to an external Amazon Web Services service like Amazon Data Firehose, Amazon S3, or Amazon CloudWatch Logs.
 *
 * @public
 */
export interface LogConfigurationType {
  /**
   * The `errorlevel` selection of logs that a user pool sends for detailed activity logging. To send `userNotification` activity with [information about message delivery](https://docs.aws.amazon.com/cognito/latest/developerguide/exporting-quotas-and-usage.html), choose `ERROR` with `CloudWatchLogsConfiguration`. To send `userAuthEvents` activity with user logs from threat protection with the Plus feature plan, choose `INFO` with one of `CloudWatchLogsConfiguration`, `FirehoseConfiguration`, or `S3Configuration`.
   *
   * @public
   */
  LogLevel: LogLevel | undefined;

  /**
   * The source of events that your user pool sends for logging. To send error-level logs about user notification activity, set to `userNotification`. To send info-level logs about threat-protection user activity in user pools with the Plus feature plan, set to `userAuthEvents`.
   *
   * @public
   */
  EventSource: EventSourceName | undefined;

  /**
   * The CloudWatch log group destination of user pool detailed activity logs, or of user activity log export with threat protection.
   *
   * @public
   */
  CloudWatchLogsConfiguration?: CloudWatchLogsConfigurationType | undefined;

  /**
   * The Amazon S3 bucket destination of user activity log export with threat protection. To activate this setting, your user pool must be on the [Plus tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html).
   *
   * @public
   */
  S3Configuration?: S3ConfigurationType | undefined;

  /**
   * The Amazon Data Firehose stream destination of user activity log export with threat protection. To activate this setting, your user pool must be on the [Plus tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-plus.html).
   *
   * @public
   */
  FirehoseConfiguration?: FirehoseConfigurationType | undefined;
}

/**
 * The logging parameters of a user pool, as returned in the response to a `GetLogDeliveryConfiguration` request.
 *
 * @public
 */
export interface LogDeliveryConfigurationType {
  /**
   * The ID of the user pool where you configured logging.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * A logging destination of a user pool. User pools can have multiple logging destinations for message-delivery and user-activity logs.
   *
   * @public
   */
  LogConfigurations: LogConfigurationType[] | undefined;
}

/**
 * @public
 */
export interface GetLogDeliveryConfigurationResponse {
  /**
   * The logging configuration of the requested user pool. Includes types of logs configured and their destinations.
   *
   * @public
   */
  LogDeliveryConfiguration?: LogDeliveryConfigurationType | undefined;
}

/**
 * The class and attributes that identify a specific limit at the account level.
 *
 * @public
 */
export interface LimitDefinitionType {
  /**
   * The class of the limit. For API rate limits, this is `API_CATEGORY`.
   *
   * @public
   */
  LimitClass: LimitClass | undefined;

  /**
   * The attributes that identify the specific limit. For API rate limits, specify the `Category` key with a value like `UserAuthentication` or `UserCreation`.
   *
   * @public
   */
  Attributes: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetProvisionedLimitRequest {
  /**
   * The limit to retrieve. Specify the limit class and the attributes that identify the limit.
   *
   * @public
   */
  LimitDefinition: LimitDefinitionType | undefined;
}

/**
 * The limit definition and current limit values for a provisioned limit.
 *
 * @public
 */
export interface LimitType {
  /**
   * The definition that identifies this limit, including the class and attributes.
   *
   * @public
   */
  LimitDefinition: LimitDefinitionType | undefined;

  /**
   * The provisioned limit value, in requests per second (RPS). This is the rate that Amazon Cognito currently enforces for your account.
   *
   * @public
   */
  ProvisionedLimitValue: number | undefined;

  /**
   * The default (free) limit value, in requests per second (RPS). This is the rate included at no additional cost.
   *
   * @public
   */
  FreeLimitValue: number | undefined;
}

/**
 * @public
 */
export interface GetProvisionedLimitResponse {
  /**
   * The provisioned and default limit values for the requested limit.
   *
   * @public
   */
  Limit: LimitType | undefined;
}

/**
 * Request to get a signing certificate from Amazon Cognito.
 *
 * @public
 */
export interface GetSigningCertificateRequest {
  /**
   * The ID of the user pool where you want to view the signing certificate.
   *
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * Response from Amazon Cognito for a signing certificate request.
 *
 * @public
 */
export interface GetSigningCertificateResponse {
  /**
   * The x.509 certificate that signs SAML 2.0 authentication requests for your user pool.
   *
   * @public
   */
  Certificate?: string | undefined;
}

/**
 * @public
 */
export interface GetTokensFromRefreshTokenRequest {
  /**
   * A valid refresh token that can authorize the request for new tokens. When refresh token rotation is active in the requested app client, this token is invalidated after the request is complete and after an optional grace period.
   *
   * @public
   */
  RefreshToken: string | undefined;

  /**
   * The app client that issued the refresh token to the user who wants to request new tokens.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The client secret of the requested app client, if the client has a secret.
   *
   * @public
   */
  ClientSecret?: string | undefined;

  /**
   * When you enable device remembering, Amazon Cognito issues a device key that you can use for device authentication that bypasses multi-factor authentication (MFA). To implement `GetTokensFromRefreshToken` in a user pool with device remembering, you must capture the device key from the initial authentication request. If your application doesn't provide the key of a registered device, Amazon Cognito issues a new one. You must provide the confirmed device key in this request if device remembering is enabled in your user pool.
   *
   * For more information about device remembering, see [Working with devices](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html).
   *
   * @public
   */
  DeviceKey?: string | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTokensFromRefreshTokenResponse {
  /**
   * The object that your application receives after authentication. Contains tokens and information for device authentication.
   *
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;
}

/**
 * @public
 */
export interface GetUICustomizationRequest {
  /**
   * The ID of the user pool that you want to query for branding settings.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client that you want to query for branding settings.
   *
   * @public
   */
  ClientId?: string | undefined;
}

/**
 * A container for the UI customization information for the hosted UI in a user pool.
 *
 * @public
 */
export interface UICustomizationType {
  /**
   * The ID of the user pool with hosted UI customizations.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * The app client ID for your UI customization. When this value isn't present, the customization applies to all user pool app clients that don't have client-level settings..
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * A URL path to the hosted logo image of your UI customization.
   *
   * @public
   */
  ImageUrl?: string | undefined;

  /**
   * The CSS values in the UI customization.
   *
   * @public
   */
  CSS?: string | undefined;

  /**
   * The CSS version number.
   *
   * @public
   */
  CSSVersion?: string | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetUICustomizationResponse {
  /**
   * Information about the classic hosted UI custom CSS and logo-image branding that you applied to the user pool or app client.
   *
   * @public
   */
  UICustomization: UICustomizationType | undefined;
}

/**
 * Represents the request to get information about the user.
 *
 * @public
 */
export interface GetUserRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * Represents the response from the server from the request to get information about the user.
 *
 * @public
 */
export interface GetUserResponse {
  /**
   * The name of the user that you requested.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * An array of name-value pairs representing user attributes.
   *
   * Custom attributes are prepended with the `custom:` prefix.
   *
   * @public
   */
  UserAttributes: AttributeType[] | undefined;

  /**
   * *This response parameter is no longer supported.* It provides information only about SMS MFA configurations. It doesn't provide information about time-based one-time password (TOTP) software token MFA configurations. To look up information about either type of MFA configuration, use UserMFASettingList instead.
   *
   * @public
   */
  MFAOptions?: MFAOptionType[] | undefined;

  /**
   * The user's preferred MFA. Users can prefer SMS message, email message, or TOTP MFA.
   *
   * @public
   */
  PreferredMfaSetting?: string | undefined;

  /**
   * The MFA options that are activated for the user. The possible values in this list are `SMS_MFA`, `EMAIL_OTP`, and `SOFTWARE_TOKEN_MFA`.
   *
   * @public
   */
  UserMFASettingList?: string[] | undefined;
}

/**
 * Represents the request to get user attribute verification.
 *
 * @public
 */
export interface GetUserAttributeVerificationCodeRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;

  /**
   * The name of the attribute that the user wants to verify, for example `email`.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * The verification code response returned by the server response to get the user attribute verification code.
 *
 * @public
 */
export interface GetUserAttributeVerificationCodeResponse {
  /**
   * Information about the delivery destination of the user attribute verification code.
   *
   * @public
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType | undefined;
}

/**
 * @public
 */
export interface GetUserAuthFactorsRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * @public
 */
export interface GetUserAuthFactorsResponse {
  /**
   * The name of the user who is eligible for the authentication factors in the response.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The challenge method that Amazon Cognito returns to the user in response to sign-in requests. Users can prefer SMS message, email message, or TOTP MFA.
   *
   * @public
   */
  PreferredMfaSetting?: string | undefined;

  /**
   * The MFA options that are activated for the user. The possible values in this list are `SMS_MFA`, `EMAIL_OTP`, and `SOFTWARE_TOKEN_MFA`.
   *
   * @public
   */
  UserMFASettingList?: string[] | undefined;

  /**
   * The authentication types that are available to the user with `USER_AUTH` sign-in, for example `["PASSWORD", "WEB_AUTHN"]`.
   *
   * `PASSWORD` can only be used as a first authentication factor. `SOFTWARE_TOKEN` can only be used as an MFA factor. `EMAIL_OTP`, `SMS_OTP`, and `WEB_AUTHN` can be used as either a first authentication factor or an MFA factor. `WEB_AUTHN` is available as an MFA factor only when passkey MFA is enabled at the user pool level.
   *
   * @public
   */
  ConfiguredUserAuthFactors?: AuthFactorType[] | undefined;
}

/**
 * @public
 */
export interface GetUserPoolMfaConfigRequest {
  /**
   * The ID of the user pool where you want to query WebAuthn and MFA configuration.
   *
   * @public
   */
  UserPoolId: string | undefined;
}

/**
 * Sets or shows configuration for user pool email message MFA and sign-in with one-time passwords (OTPs). Includes the subject and body of the email message template for sign-in and MFA messages. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
 *
 * @public
 */
export interface EmailMfaConfigType {
  /**
   * The template for the email messages that your user pool sends to users with codes for MFA and sign-in with email OTPs. The message must contain the `\{####\}` placeholder. In the message, Amazon Cognito replaces this placeholder with the code. If you don't provide this parameter, Amazon Cognito sends messages in the default format.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The subject of the email messages that your user pool sends to users with codes for MFA and email OTP sign-in.
   *
   * @public
   */
  Subject?: string | undefined;
}

/**
 * The configuration of multi-factor authentication (MFA) with SMS messages in a user pool.
 *
 * @public
 */
export interface SmsMfaConfigType {
  /**
   * The SMS authentication message that will be sent to users with the code they must sign in with. The message must contain the `\{####\}` placeholder. Your user pool replaces the placeholder with the MFA code. If this parameter isn't provided, your user pool sends a default message.
   *
   * @public
   */
  SmsAuthenticationMessage?: string | undefined;

  /**
   * User pool configuration for delivery of SMS messages with Amazon Simple Notification Service. To send SMS messages with Amazon SNS in the Amazon Web Services Region that you want, the Amazon Cognito user pool uses an Identity and Access Management (IAM) role in your Amazon Web Services account.
   *
   * You can set `SmsConfiguration` in `CreateUserPool` and `UpdateUserPool`, or in `SetUserPoolMfaConfig`.
   *
   * @public
   */
  SmsConfiguration?: SmsConfigurationType | undefined;
}

/**
 * Settings for time-based one-time password (TOTP) multi-factor authentication (MFA) in a user pool. Enables and disables availability of this feature.
 *
 * @public
 */
export interface SoftwareTokenMfaConfigType {
  /**
   * The activation state of TOTP MFA.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * Settings for authentication (MFA) with passkey, or webauthN, biometric and security-key devices in a user pool. Configures the following:
 *
 * - Configuration for requiring user-verification support in passkeys.
 * - The user pool relying-party ID. This is the domain, typically your user pool domain, that user's passkey providers should trust as a receiver of passkey authentication.
 * - The providers that you want to allow as origins for passkey authentication.
 *
 * @public
 */
export interface WebAuthnConfigurationType {
  /**
   * Sets or displays the authentication domain, typically your user pool domain, that passkey providers must use as a relying party (RP) in their configuration.
   *
   * Under the following conditions, the passkey relying party ID must be the fully-qualified domain name of your custom domain:
   *
   * - The user pool is configured for passkey authentication.
   * - The user pool has a custom domain, whether or not it also has a prefix domain.
   * - Your application performs authentication with managed login or the classic hosted UI.
   *
   * @public
   */
  RelyingPartyId?: string | undefined;

  /**
   * When `required`, users can only register and sign in users with passkeys that are capable of [user verification](https://www.w3.org/TR/webauthn-2/#enum-userVerificationRequirement). When `preferred`, your user pool doesn't require the use of authenticators with user verification but encourages it.
   *
   * @public
   */
  UserVerification?: UserVerificationType | undefined;

  /**
   * Sets whether passkeys can be used as multi-factor authentication (MFA). When set to `MULTI_FACTOR_WITH_USER_VERIFICATION`, passkey authentication with user verification satisfies MFA requirements. When set to `SINGLE_FACTOR` or not set, passkeys are a single authentication factor. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * @public
   */
  FactorConfiguration?: WebAuthnFactorConfigurationType | undefined;
}

/**
 * @public
 */
export interface GetUserPoolMfaConfigResponse {
  /**
   * Shows user pool configuration for SMS message MFA. Includes the message template and the SMS message sending configuration for Amazon SNS.
   *
   * @public
   */
  SmsMfaConfiguration?: SmsMfaConfigType | undefined;

  /**
   * Shows user pool configuration for time-based one-time password (TOTP) MFA. Includes TOTP enabled or disabled state.
   *
   * @public
   */
  SoftwareTokenMfaConfiguration?: SoftwareTokenMfaConfigType | undefined;

  /**
   * Shows configuration for user pool email message MFA and sign-in with one-time passwords (OTPs). Includes the subject and body of the email message template for sign-in and MFA messages. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * @public
   */
  EmailMfaConfiguration?: EmailMfaConfigType | undefined;

  /**
   * Displays the state of multi-factor authentication (MFA) as on, off, or optional. When `ON`, all users must set up MFA before they can sign in. When `OPTIONAL`, your application must make a client-side determination of whether a user wants to register an MFA device. For user pools with adaptive authentication with threat protection, choose `OPTIONAL`.
   *
   * When `MfaConfiguration` is `OPTIONAL`, managed login doesn't automatically prompt users to set up MFA. Amazon Cognito generates MFA prompts in API responses and in managed login for users who have chosen and configured a preferred MFA factor.
   *
   * @public
   */
  MfaConfiguration?: UserPoolMfaType | undefined;

  /**
   * Shows user pool configuration for sign-in with passkey authenticators such as biometric devices and security keys. Includes relying-party configuration, user-verification requirements, and whether passkeys can satisfy MFA requirements.
   *
   * @public
   */
  WebAuthnConfiguration?: WebAuthnConfigurationType | undefined;
}

/**
 * Represents the request to sign out all devices.
 *
 * @public
 */
export interface GlobalSignOutRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * The response to the request to sign out all devices.
 *
 * @public
 */
export interface GlobalSignOutResponse {}

/**
 * Initiates the authentication request.
 *
 * @public
 */
export interface InitiateAuthRequest {
  /**
   * The authentication flow that you want to initiate. Each `AuthFlow` has linked `AuthParameters` that you must submit. The following are some example flows.
   *
   * - **USER_AUTH**
   *
   *   The entry point for [choice-based authentication](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice) with passwords, one-time passwords, and WebAuthn authenticators. Request a preferred authentication type or review available authentication types. From the offered authentication types, select one in a challenge response and then authenticate with that method in an additional challenge response. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * - **USER_SRP_AUTH**
   *
   *   Username-password authentication with the Secure Remote Password (SRP) protocol. For more information, see [Use SRP password verification in custom authentication flow](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-authentication-flow.html#Using-SRP-password-verification-in-custom-authentication-flow).
   *
   * - **REFRESH_TOKEN_AUTH and REFRESH_TOKEN**
   *
   *   Receive new ID and access tokens when you pass a `REFRESH_TOKEN` parameter with a valid refresh token as the value. For more information, see [Using the refresh token](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-the-refresh-token.html).
   *
   * - **CUSTOM_AUTH**
   *
   *   Custom authentication with Lambda triggers. For more information, see [Custom authentication challenge Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-challenge.html).
   *
   * - **USER_PASSWORD_AUTH**
   *
   *   Client-side username-password authentication with the password sent directly in the request. For more information about client-side and server-side authentication, see [SDK authorization models](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-public-server-side.html).
   *
   * `ADMIN_USER_PASSWORD_AUTH` is a flow type of `AdminInitiateAuth` and isn't valid for InitiateAuth. `ADMIN_NO_SRP_AUTH` is a legacy server-side username-password flow and isn't valid for InitiateAuth.
   *
   * @public
   */
  AuthFlow: AuthFlowType | undefined;

  /**
   * The authentication parameters. These are inputs corresponding to the `AuthFlow` that you're invoking.
   *
   * The following are some authentication flows and their parameters. Add a `SECRET_HASH` parameter if your app client has a client secret. Add `DEVICE_KEY` if you want to bypass multi-factor authentication with a remembered device.
   *
   * - **USER_AUTH**
   *
   *   - `USERNAME` (required)
   *   - `PREFERRED_CHALLENGE`. If you don't provide a value for `PREFERRED_CHALLENGE`, Amazon Cognito responds with the `AvailableChallenges` parameter that specifies the available sign-in methods.
   *   - `TARGET_ACR_VALUES`. An optional, space-separated list of the authentication context class reference (ACR) level URIs that you want the user to reach. List the levels in priority order, from highest to lowest. Amazon Cognito attempts the highest-priority level that the user can satisfy, and falls back through the list. Amazon Cognito ignores any value that it doesn't recognize. If none of the requested values are valid, Amazon Cognito returns an error.
   *
   *     Requesting step-up authentication with this parameter requires the Essentials or Plus feature plan. On a lower feature plan, InitiateAuth returns a FeatureUnavailableInTierException. `USERNAME` is required. When you provide an `ACCESS_TOKEN`, you must also provide `TARGET_ACR_VALUES`. Amazon Cognito returns an error if you provide an `ACCESS_TOKEN` without `TARGET_ACR_VALUES`. The `USERNAME` that you provide must match the user that the `ACCESS_TOKEN` was issued for.
   *
   *     For more information about step-up authentication and how Amazon Cognito handles multi-factor authentication requirements, see [Step-up authentication with ACR and AMR](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-step-up-authentication.html) in the *Amazon Cognito Developer Guide*.
   *   - `MAX_AGE`. An optional integer that sets the maximum number of seconds allowed since the user last authenticated. If the user's most recent authentication is older than this value, Amazon Cognito discards the authentication-methods credit from any access token that you provide and processes the request as a fresh authentication toward the target level. The access token itself remains valid.
   *
   * - **USER_SRP_AUTH**
   *
   *   - `USERNAME` (required)
   *   - `SRP_A` (required)
   *
   * - **USER_PASSWORD_AUTH**
   *
   *   - `USERNAME` (required)
   *   - `PASSWORD` (required)
   *
   * - **REFRESH_TOKEN_AUTH/REFRESH_TOKEN**
   *
   *   - `REFRESH_TOKEN`(required)
   *
   * - **CUSTOM_AUTH**
   *
   *   - `USERNAME` (required)
   *   - `ChallengeName: SRP_A` (when doing SRP authentication before custom challenges)
   *   - `SRP_A: (An SRP_A value)` (when doing SRP authentication before custom challenges)
   *
   * For more information about `SECRET_HASH`, see [Computing secret hash values](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash). For information about `DEVICE_KEY`, see [Working with user devices in your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html).
   *
   * @public
   */
  AuthParameters?: Record<string, string> | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * The `ClientMetadata` value is passed as input to the functions for only the following triggers:
   *
   * - Pre signup
   * - Pre authentication
   * - User migration
   *
   * This request also invokes the functions for the following triggers, but doesn't pass `ClientMetadata`:
   *
   * - Post authentication
   * - Custom message
   * - Pre token generation
   * - Create auth challenge
   * - Define auth challenge
   * - Custom email sender
   * - Custom SMS sender
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;

  /**
   * The ID of the app client that your user wants to sign in to.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number.
   *
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.
   *
   * For more information, see [Collecting data for threat protection in applications](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html).
   *
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * The optional session ID from a `ConfirmSignUp` API request. You can sign in a user directly from the sign-up process with the `USER_AUTH` authentication flow. When you pass the session ID to `InitiateAuth`, Amazon Cognito assumes the SMS or email message one-time verification password from `ConfirmSignUp` as the primary authentication factor. You're not required to submit this code a second time. This option is only valid for users who have confirmed their sign-up and are signing in for the first time within the authentication flow session duration of the session ID.
   *
   * @public
   */
  Session?: string | undefined;
}

/**
 * Initiates the authentication response.
 *
 * @public
 */
export interface InitiateAuthResponse {
  /**
   * The name of an additional authentication challenge that you must respond to.
   *
   * Possible challenges include the following:
   *
   * > **Note:** All of the following challenges require `USERNAME` and, when the app client has a client secret, `SECRET_HASH` in the parameters. Include a `DEVICE_KEY` for device authentication.
   *
   * - `WEB_AUTHN`: Respond to the challenge with the results of a successful authentication with a WebAuthn authenticator, or passkey, as `CREDENTIAL`. Examples of WebAuthn authenticators include biometric devices and security keys.
   * - `PASSWORD`: Respond with the user's password as `PASSWORD`.
   * - `PASSWORD_SRP`: Respond with the initial SRP secret as `SRP_A`.
   * - `SELECT_CHALLENGE`: Respond with a challenge selection as `ANSWER`. It must be one of the challenge types in the `AvailableChallenges` response parameter. Add the parameters of the selected challenge, for example `USERNAME` and `SMS_OTP`.
   * - `SMS_MFA`: Respond with the code that your user pool delivered in an SMS message, as `SMS_MFA_CODE`
   * - `EMAIL_MFA`: Respond with the code that your user pool delivered in an email message, as `EMAIL_MFA_CODE`
   * - `EMAIL_OTP`: Respond with the code that your user pool delivered in an email message, as `EMAIL_OTP_CODE` .
   * - `SMS_OTP`: Respond with the code that your user pool delivered in an SMS message, as `SMS_OTP_CODE`.
   * - `PASSWORD_VERIFIER`: Respond with the second stage of SRP secrets as `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP`.
   * - `CUSTOM_CHALLENGE`: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued. The parameters of the challenge are determined by your Lambda function and issued in the `ChallengeParameters` of a challenge response.
   * - `DEVICE_SRP_AUTH`: Respond with the initial parameters of device SRP authentication. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `DEVICE_PASSWORD_VERIFIER`: Respond with `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP` after client-side SRP calculations. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `NEW_PASSWORD_REQUIRED`: For users who are required to change their passwords after successful first login. Respond to this challenge with `NEW_PASSWORD` and any required attributes that Amazon Cognito returned in the `requiredAttributes` parameter. You can also set values for attributes that aren't required by your user pool and that your app client can write.
   *
   *   Amazon Cognito only returns this challenge for users who have temporary passwords. When you create passwordless users, you must provide values for all required attributes.
   *
   *   > **Note:** In a `NEW_PASSWORD_REQUIRED` challenge response, you can't modify a required attribute that already has a value. In `AdminRespondToAuthChallenge` or `RespondToAuthChallenge`, set a value for any keys that Amazon Cognito returned in the `requiredAttributes` parameter, then use the `AdminUpdateUserAttributes` or `UpdateUserAttributes` API operation to modify the value of any additional attributes.
   * - `MFA_SETUP`: For users who are required to setup an MFA factor before they can sign in. The MFA types activated for the user pool will be listed in the challenge parameters `MFAS_CAN_SETUP` value.
   *
   *   To set up time-based one-time password (TOTP) MFA, use the session returned in this challenge from `InitiateAuth` or `AdminInitiateAuth` as an input to `AssociateSoftwareToken`. Then, use the session returned by `VerifySoftwareToken` as an input to `RespondToAuthChallenge` or `AdminRespondToAuthChallenge` with challenge name `MFA_SETUP` to complete sign-in.
   *
   *   To set up SMS or email MFA, collect a `phone_number` or `email` attribute for the user. Then restart the authentication flow with an `InitiateAuth` or `AdminInitiateAuth` request.
   *
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * The session identifier that links a challenge response to the initial authentication request. If the user must pass another challenge, Amazon Cognito returns a session ID and challenge parameters.
   *
   * @public
   */
  Session?: string | undefined;

  /**
   * The required parameters of the `ChallengeName` challenge.
   *
   * All challenges require `USERNAME`. They also require `SECRET_HASH` if your app client has a client secret.
   *
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * The result of a successful and complete authentication request. This result is only returned if the user doesn't need to pass another challenge. If they must pass another challenge before they get tokens, Amazon Cognito returns a challenge in `ChallengeName`, `ChallengeParameters`, and `Session` response parameters.
   *
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;

  /**
   * This response parameter lists the available authentication challenges that users can select from in [choice-based authentication](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice). For example, they might be able to choose between passkey authentication, a one-time password from an SMS message, and a traditional password.
   *
   * @public
   */
  AvailableChallenges?: ChallengeNameType[] | undefined;
}

/**
 * Represents the request to list the devices.
 *
 * @public
 */
export interface ListDevicesRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;

  /**
   * The maximum number of devices that you want Amazon Cognito to return in the response.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * Represents the response to list devices.
 *
 * @public
 */
export interface ListDevicesResponse {
  /**
   * An array of devices and their details. Each entry that's returned includes device information, last-accessed and created dates, and the device key.
   *
   * @public
   */
  Devices?: DeviceType[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * The ID of the user pool where you want to list user groups.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The maximum number of groups that you want Amazon Cognito to return in the response.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * An array of groups and their details. Each entry that's returned includes description, precedence, and IAM role values.
   *
   * @public
   */
  Groups?: GroupType[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersRequest {
  /**
   * The ID of the user pool where you want to list IdPs.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The maximum number of IdPs that you want Amazon Cognito to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The details of a user pool identity provider (IdP), including name and type.
 *
 * @public
 */
export interface ProviderDescription {
  /**
   * The name of the IdP, for example `MySAMLProvider`.
   *
   * @public
   */
  ProviderName?: string | undefined;

  /**
   * The type of the provider, for example `SAML`. Amazon Cognito supports SAML 2.0, OIDC, and social IdPs. User pools list supported social IdPs by name in this response parameter: Facebook, Google, Login with Amazon, and Sign in with Apple.
   *
   * @public
   */
  ProviderType?: IdentityProviderTypeType | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListIdentityProvidersResponse {
  /**
   * An array of the IdPs in your user pool. For each, the response includes identifiers, the IdP name and type, and trust-relationship details like the issuer URL.
   *
   * @public
   */
  Providers: ProviderDescription[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceServersRequest {
  /**
   * The ID of the user pool where you want to list resource servers.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The maximum number of resource servers that you want Amazon Cognito to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceServersResponse {
  /**
   * An array of resource servers and the details of their configuration. For each, the response includes names, identifiers, and custom scopes.
   *
   * @public
   */
  ResourceServers: ResourceServerType[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the user pool that the tags are assigned to.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags that are assigned to the user pool.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTermsRequest {
  /**
   * The ID of the user pool where you want to list terms documents.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The maximum number of terms documents that you want Amazon Cognito to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The details of a set of terms documents. For more information, see [Terms documents](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html#managed-login-terms-documents).
 *
 * @public
 */
export interface TermsDescriptionType {
  /**
   * The ID of the requested terms documents.
   *
   * @public
   */
  TermsId: string | undefined;

  /**
   * The type and friendly name of the requested terms documents.
   *
   * @public
   */
  TermsName: string | undefined;

  /**
   * This parameter is reserved for future use and currently accepts one value.
   *
   * @public
   */
  Enforcement: TermsEnforcementType | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  LastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface ListTermsResponse {
  /**
   * A summary of the requested terms documents. Includes unique identifiers for later changes to the terms documents.
   *
   * @public
   */
  Terms: TermsDescriptionType[] | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the request to list the user import jobs.
 *
 * @public
 */
export interface ListUserImportJobsRequest {
  /**
   * The ID of the user pool where you want to list import jobs.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The maximum number of import jobs that you want Amazon Cognito to return in the response.
   *
   * @public
   */
  MaxResults: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * Represents the response from the server to the request to list the user import jobs.
 *
 * @public
 */
export interface ListUserImportJobsResponse {
  /**
   * An array of user import jobs from the requested user pool. For each, the response includes logging destination, status, and the Amazon S3 pre-signed URL for CSV upload.
   *
   * @public
   */
  UserImportJobs?: UserImportJobType[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * Represents the request to list the user pool clients.
 *
 * @public
 */
export interface ListUserPoolClientsRequest {
  /**
   * The ID of the user pool where you want to list user pool clients.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The maximum number of app clients that you want Amazon Cognito to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A short description of a user pool app client.
 *
 * @public
 */
export interface UserPoolClientDescription {
  /**
   * The app client ID.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The ID of the user pool that's associated with the app client.
   *
   * @public
   */
  UserPoolId?: string | undefined;

  /**
   * The app client name.
   *
   * @public
   */
  ClientName?: string | undefined;
}

/**
 * Represents the response from the server that lists user pool clients.
 *
 * @public
 */
export interface ListUserPoolClientsResponse {
  /**
   * An array of app clients and their details. Includes app client ID and name.
   *
   * @public
   */
  UserPoolClients?: UserPoolClientDescription[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The request to list client secrets for a user pool app client.
 *
 * @public
 */
export interface ListUserPoolClientSecretsRequest {
  /**
   * The ID of the user pool that contains the app client.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client whose secrets you want to list.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The response containing the list of client secret metadata. This response does not include a NextToken field as all secrets are returned in a single response.
 *
 * @public
 */
export interface ListUserPoolClientSecretsResponse {
  /**
   * A list of client secret descriptors containing the identifier and creation date for each secret. For security reasons, the response never reveals the actual secret value in ClientSecretValue.
   *
   * @public
   */
  ClientSecrets?: ClientSecretDescriptorType[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserPoolReplicasRequest {
  /**
   * The ID of the user pool for which to list replicas.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * A pagination token for retrieving the next page of results. If this parameter is omitted, the operation returns the first page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUserPoolReplicasResponse {
  /**
   * A list of user pool replicas, including information about their status, role, and Region.
   *
   * @public
   */
  UserPoolReplicas?: UserPoolReplicaType[] | undefined;

  /**
   * A pagination token for retrieving the next page of results. If this value is null, there are no more results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the request to list user pools.
 *
 * @public
 */
export interface ListUserPoolsRequest {
  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of user pools that you want Amazon Cognito to return in the response.
   *
   * @public
   */
  MaxResults: number | undefined;
}

/**
 * A short description of a user pool.
 *
 * @public
 */
export interface UserPoolDescriptionType {
  /**
   * The user pool ID.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The user pool name.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A collection of user pool Lambda triggers. Amazon Cognito invokes triggers at several possible stages of user pool operations. Triggers can modify the outcome of the operations that invoked them.
   *
   * @public
   */
  LambdaConfig?: LambdaConfigType | undefined;

  /**
   * The user pool status.
   *
   * @deprecated This property is no longer available.
   * @public
   */
  Status?: StatusType | undefined;

  /**
   * The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreationDate?: Date | undefined;

  /**
   * A list of Amazon Web Services Regions where replicas of this user pool exist.
   *
   * @public
   */
  ReplicaRegions?: string[] | undefined;
}

/**
 * Represents the response to list user pools.
 *
 * @public
 */
export interface ListUserPoolsResponse {
  /**
   * An array of user pools and their configuration details.
   *
   * @public
   */
  UserPools?: UserPoolDescriptionType[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the request to list users.
 *
 * @public
 */
export interface ListUsersRequest {
  /**
   * The ID of the user pool where you want to display or search for users.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * A JSON array of user attribute names, for example `given_name`, that you want Amazon Cognito to include in the response for each user. When you don't provide an `AttributesToGet` parameter, Amazon Cognito returns all attributes for each user.
   *
   * Use `AttributesToGet` with required attributes in your user pool, or in conjunction with `Filter`. Amazon Cognito returns an error if not all users in the results have set a value for the attribute you request. Attributes that you can't filter on, including custom attributes, must have a value set in every user profile before an `AttributesToGet` parameter returns results.
   *
   * @public
   */
  AttributesToGet?: string[] | undefined;

  /**
   * The maximum number of users that you want Amazon Cognito to return in the response. In some SDK contexts, this operation might return fewer items than you specify in the `Limit` parameter without having reached the end of the full list. If the response contains a `PaginationToken`, then there are more results.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  PaginationToken?: string | undefined;

  /**
   * A filter string of the form `"AttributeName Filter-Type "AttributeValue"`. Quotation marks within the filter string must be escaped using the backslash (`\`) character. For example, `"family_name = \"Reddy\""`.
   *
   * - *AttributeName*: The name of the attribute to search for. You can only search for one attribute at a time.
   * - *Filter-Type*: For an exact match, use `=`, for example, "`given_name = \"Jon\"`". For a prefix ("starts with") match, use `^=`, for example, "`given_name ^= \"Jon\"`".
   * - *AttributeValue*: The attribute value that must be matched for each user.
   *
   * If the filter string is empty, `ListUsers` returns all users in the user pool.
   *
   * You can only search for the following standard attributes:
   *
   * - `username` (case-sensitive)
   * - `email`
   * - `phone_number`
   * - `name`
   * - `given_name`
   * - `family_name`
   * - `preferred_username`
   * - `cognito:user_status` (called **Status** in the Console) (case-insensitive)
   * - `status (called Enabled in the Console) (case-sensitive)`
   * - `sub`
   *
   * Custom attributes aren't searchable.
   *
   * > **Note:**
   * >
   * > You can also list users with a client-side filter. The server-side filter matches no more than one attribute. For an advanced search, use a client-side filter with the `--query` parameter of the `list-users` action in the CLI. When you use a client-side filter, ListUsers returns a paginated list of zero or more users. You can receive multiple pages in a row with zero results. Repeat the query with each pagination token that is returned until you receive a null pagination token value, and then review the combined result.
   * >
   * > For more information about server-side and client-side filtering, see [FilteringCLI output](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html) in the [Command Line Interface User Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html).
   *
   * For more information, see [Searching for Users Using the ListUsers API](https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-using-listusers-api) and [Examples of Using the ListUsers API](https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-manage-user-accounts.html#cognito-user-pools-searching-for-users-listusers-api-examples) in the *Amazon Cognito Developer Guide*.
   *
   * @public
   */
  Filter?: string | undefined;
}

/**
 * The response from the request to list users.
 *
 * @public
 */
export interface ListUsersResponse {
  /**
   * An array of user pool users who match your query, and their attributes. Between different requests, you might observe variations in the sequence that users in this response object are sorted into. The sort order of users isn't guaranteed to follow a single pattern, but the paginated list from a single chain of requests won't return duplicates.
   *
   * @public
   */
  Users?: UserType[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  PaginationToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersInGroupRequest {
  /**
   * The ID of the user pool where you want to view the membership of the requested group.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The name of the group that you want to query for user membership.
   *
   * @public
   */
  GroupName: string | undefined;

  /**
   * The maximum number of groups that you want Amazon Cognito to return in the response. In some SDK contexts, this operation might return fewer items than you specify in the `Limit` parameter without having reached the end of the full list. If the response contains a `PaginationToken`, then there are more results.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersInGroupResponse {
  /**
   * An array of users who are members in the group, and their attributes.
   *
   * @public
   */
  Users?: UserType[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWebAuthnCredentialsRequest {
  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;

  /**
   * This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of the user's passkey credentials that you want to return.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The details of a passkey, or webauthN, biometric or security-key authentication factor for a user.
 *
 * @public
 */
export interface WebAuthnCredentialDescription {
  /**
   * The unique identifier of the passkey credential.
   *
   * @public
   */
  CredentialId: string | undefined;

  /**
   * An automatically-generated friendly name for the passkey credential.
   *
   * @public
   */
  FriendlyCredentialName: string | undefined;

  /**
   * The relying-party ID of the provider for the passkey credential.
   *
   * @public
   */
  RelyingPartyId: string | undefined;

  /**
   * The general category of the passkey authenticator. Can be a platform, or on-device authenticator like a built-in fingerprint scanner, or a cross-platform device that's not attached to the device like a Bluetooth security key.
   *
   * @public
   */
  AuthenticatorAttachment?: string | undefined;

  /**
   * Information about the transport methods of the passkey credential, for example USB or Bluetooth Low Energy.
   *
   * @public
   */
  AuthenticatorTransports: string[] | undefined;

  /**
   * The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java `Date` object.
   *
   * @public
   */
  CreatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListWebAuthnCredentialsResponse {
  /**
   * A list of registered passkeys for a user.
   *
   * @public
   */
  Credentials: WebAuthnCredentialDescription[] | undefined;

  /**
   * The identifier that Amazon Cognito returned with the previous request to this operation. When you include a pagination token in your request, Amazon Cognito returns the next set of items in the list. By use of this token, you can paginate through the full list of items.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents the request to resend the confirmation code.
 *
 * @public
 */
export interface ResendConfirmationCodeRequest {
  /**
   * The ID of the user pool app client where the user signed up.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * A keyed-hash message authentication code (HMAC) calculated using the secret key of a user pool client and username plus the client ID in the message. For more information about `SecretHash`, see [Computing secret hash values](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash).
   *
   * @public
   */
  SecretHash?: string | undefined;

  /**
   * Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.
   *
   * For more information, see [Collecting data for threat protection in applications](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html).
   *
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * The name of the user that you want to query or modify. The value of this parameter is typically your user's username, but it can be any of their alias attributes. If `username` isn't an alias attribute in your user pool, this value must be the `sub` of a local user or the username of a user from a third-party IdP.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number.
   *
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * The response from the server when Amazon Cognito makes the request to resend a confirmation code.
 *
 * @public
 */
export interface ResendConfirmationCodeResponse {
  /**
   * Information about the phone number or email address that Amazon Cognito sent the confirmation code to.
   *
   * @public
   */
  CodeDeliveryDetails?: CodeDeliveryDetailsType | undefined;
}

/**
 * The request to respond to an authentication challenge.
 *
 * @public
 */
export interface RespondToAuthChallengeRequest {
  /**
   * The ID of the app client where the user is signing in.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The name of the challenge that you are responding to.
   *
   * > **Note:** You can't respond to an `ADMIN_NO_SRP_AUTH` challenge with this operation.
   *
   * Possible challenges include the following:
   *
   * > **Note:** All of the following challenges require `USERNAME` and, when the app client has a client secret, `SECRET_HASH` in the parameters. Include a `DEVICE_KEY` for device authentication.
   *
   * - `WEB_AUTHN`: Respond to the challenge with the results of a successful authentication with a WebAuthn authenticator, or passkey, as `CREDENTIAL`. Examples of WebAuthn authenticators include biometric devices and security keys.
   * - `PASSWORD`: Respond with the user's password as `PASSWORD`.
   * - `PASSWORD_SRP`: Respond with the initial SRP secret as `SRP_A`.
   * - `SELECT_CHALLENGE`: Respond with a challenge selection as `ANSWER`. It must be one of the challenge types in the `AvailableChallenges` response parameter. Add the parameters of the selected challenge, for example `USERNAME` and `SMS_OTP`.
   * - `SMS_MFA`: Respond with the code that your user pool delivered in an SMS message, as `SMS_MFA_CODE`
   * - `EMAIL_MFA`: Respond with the code that your user pool delivered in an email message, as `EMAIL_MFA_CODE`
   * - `EMAIL_OTP`: Respond with the code that your user pool delivered in an email message, as `EMAIL_OTP_CODE` .
   * - `SMS_OTP`: Respond with the code that your user pool delivered in an SMS message, as `SMS_OTP_CODE`.
   * - `PASSWORD_VERIFIER`: Respond with the second stage of SRP secrets as `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP`.
   * - `CUSTOM_CHALLENGE`: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued. The parameters of the challenge are determined by your Lambda function and issued in the `ChallengeParameters` of a challenge response.
   * - `DEVICE_SRP_AUTH`: Respond with the initial parameters of device SRP authentication. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `DEVICE_PASSWORD_VERIFIER`: Respond with `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP` after client-side SRP calculations. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `NEW_PASSWORD_REQUIRED`: For users who are required to change their passwords after successful first login. Respond to this challenge with `NEW_PASSWORD` and any required attributes that Amazon Cognito returned in the `requiredAttributes` parameter. You can also set values for attributes that aren't required by your user pool and that your app client can write.
   *
   *   Amazon Cognito only returns this challenge for users who have temporary passwords. When you create passwordless users, you must provide values for all required attributes.
   *
   *   > **Note:** In a `NEW_PASSWORD_REQUIRED` challenge response, you can't modify a required attribute that already has a value. In `AdminRespondToAuthChallenge` or `RespondToAuthChallenge`, set a value for any keys that Amazon Cognito returned in the `requiredAttributes` parameter, then use the `AdminUpdateUserAttributes` or `UpdateUserAttributes` API operation to modify the value of any additional attributes.
   * - `MFA_SETUP`: For users who are required to setup an MFA factor before they can sign in. The MFA types activated for the user pool will be listed in the challenge parameters `MFAS_CAN_SETUP` value.
   *
   *   To set up time-based one-time password (TOTP) MFA, use the session returned in this challenge from `InitiateAuth` or `AdminInitiateAuth` as an input to `AssociateSoftwareToken`. Then, use the session returned by `VerifySoftwareToken` as an input to `RespondToAuthChallenge` or `AdminRespondToAuthChallenge` with challenge name `MFA_SETUP` to complete sign-in.
   *
   *   To set up SMS or email MFA, collect a `phone_number` or `email` attribute for the user. Then restart the authentication flow with an `InitiateAuth` or `AdminInitiateAuth` request.
   *
   * @public
   */
  ChallengeName: ChallengeNameType | undefined;

  /**
   * The session identifier that maintains the state of authentication requests and challenge responses. If an `AdminInitiateAuth` or `AdminRespondToAuthChallenge` API request results in a determination that your application must pass another challenge, Amazon Cognito returns a session with other challenge parameters. Send this session identifier, unmodified, to the next `AdminRespondToAuthChallenge` request.
   *
   * @public
   */
  Session?: string | undefined;

  /**
   * The responses to the challenge that you received in the previous request. Each challenge has its own required response parameters. The following examples are partial JSON request bodies that highlight challenge-response parameters.
   *
   * > **Important:** You must provide a SECRET_HASH parameter in all challenge responses to an app client that has a client secret. Include a `DEVICE_KEY` for device authentication.
   *
   * - **SELECT_CHALLENGE**
   *
   *   `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "USERNAME": "[username]", "ANSWER": "[Challenge name]"\}`
   *
   *   Available challenges are `PASSWORD`, `PASSWORD_SRP`, `EMAIL_OTP`, `SMS_OTP`, and `WEB_AUTHN`.
   *
   *   Complete authentication in the `SELECT_CHALLENGE` response for `PASSWORD`, `PASSWORD_SRP`, and `WEB_AUTHN`:
   *
   *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "WEB_AUTHN", "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"\}`
   *
   *     See [AuthenticationResponseJSON](https://www.w3.org/TR/WebAuthn-3/#dictdef-authenticationresponsejson).
   *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "PASSWORD", "USERNAME": "[username]", "PASSWORD": "[password]"\}`
   *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "PASSWORD_SRP", "USERNAME": "[username]", "SRP_A": "[SRP_A]"\}`
   *
   *   For `SMS_OTP` and `EMAIL_OTP`, respond with the username and answer. Your user pool will send a code for the user to submit in the next challenge response.
   *
   *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "SMS_OTP", "USERNAME": "[username]"\}`
   *   - `"ChallengeName": "SELECT_CHALLENGE", "ChallengeResponses": \{ "ANSWER": "EMAIL_OTP", "USERNAME": "[username]"\}`
   *
   * - **WEB_AUTHN**
   *
   *   `"ChallengeName": "WEB_AUTHN", "ChallengeResponses": \{ "USERNAME": "[username]", "CREDENTIAL": "[AuthenticationResponseJSON]"\}`
   *
   *   See [AuthenticationResponseJSON](https://www.w3.org/TR/WebAuthn-3/#dictdef-authenticationresponsejson).
   *
   * - **PASSWORD**
   *
   *   `"ChallengeName": "PASSWORD", "ChallengeResponses": \{ "USERNAME": "[username]", "PASSWORD": "[password]"\}`
   *
   * - **PASSWORD_SRP**
   *
   *   `"ChallengeName": "PASSWORD_SRP", "ChallengeResponses": \{ "USERNAME": "[username]", "SRP_A": "[SRP_A]"\}`
   *
   * - **SMS_OTP**
   *
   *   `"ChallengeName": "SMS_OTP", "ChallengeResponses": \{"SMS_OTP_CODE": "[code]", "USERNAME": "[username]"\}`
   *
   * - **EMAIL_OTP**
   *
   *   `"ChallengeName": "EMAIL_OTP", "ChallengeResponses": \{"EMAIL_OTP_CODE": "[code]", "USERNAME": "[username]"\}`
   *
   * - **SMS_MFA**
   *
   *   `"ChallengeName": "SMS_MFA", "ChallengeResponses": \{"SMS_MFA_CODE": "[code]", "USERNAME": "[username]"\}`
   *
   * - **PASSWORD_VERIFIER**
   *
   *   This challenge response is part of the SRP flow. Amazon Cognito requires that your application respond to this challenge within a few seconds. When the response time exceeds this period, your user pool returns a `NotAuthorizedException` error.
   *
   *   `"ChallengeName": "PASSWORD_VERIFIER", "ChallengeResponses": \{"PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"\}`
   *
   * - **CUSTOM_CHALLENGE**
   *
   *   `"ChallengeName": "CUSTOM_CHALLENGE", "ChallengeResponses": \{"USERNAME": "[username]", "ANSWER": "[challenge_answer]"\}`
   *
   * - **NEW_PASSWORD_REQUIRED**
   *
   *   `"ChallengeName": "NEW_PASSWORD_REQUIRED", "ChallengeResponses": \{"NEW_PASSWORD": "[new_password]", "USERNAME": "[username]"\}`
   *
   *   To set any required attributes that `InitiateAuth` returned in an `requiredAttributes` parameter, add `"userAttributes.[attribute_name]": "[attribute_value]"`. This parameter can also set values for writable attributes that aren't required by your user pool.
   *
   *   > **Note:** In a `NEW_PASSWORD_REQUIRED` challenge response, you can't modify a required attribute that already has a value. In `AdminRespondToAuthChallenge` or `RespondToAuthChallenge`, set a value for any keys that Amazon Cognito returned in the `requiredAttributes` parameter, then use the `AdminUpdateUserAttributes` or `UpdateUserAttributes` API operation to modify the value of any additional attributes.
   *
   * - **SOFTWARE_TOKEN_MFA**
   *
   *   `"ChallengeName": "SOFTWARE_TOKEN_MFA", "ChallengeResponses": \{"USERNAME": "[username]", "SOFTWARE_TOKEN_MFA_CODE": [authenticator_code]\}`
   *
   * - **DEVICE_SRP_AUTH**
   *
   *   `"ChallengeName": "DEVICE_SRP_AUTH", "ChallengeResponses": \{"USERNAME": "[username]", "DEVICE_KEY": "[device_key]", "SRP_A": "[srp_a]"\}`
   *
   * - **DEVICE_PASSWORD_VERIFIER**
   *
   *   `"ChallengeName": "DEVICE_PASSWORD_VERIFIER", "ChallengeResponses": \{"DEVICE_KEY": "[device_key]", "PASSWORD_CLAIM_SIGNATURE": "[claim_signature]", "PASSWORD_CLAIM_SECRET_BLOCK": "[secret_block]", "TIMESTAMP": [timestamp], "USERNAME": "[username]"\}`
   *
   * - **MFA_SETUP**
   *
   *   `"ChallengeName": "MFA_SETUP", "ChallengeResponses": \{"USERNAME": "[username]"\}, "SESSION": "[Session ID from VerifySoftwareToken]"`
   *
   * - **SELECT_MFA_TYPE**
   *
   *   `"ChallengeName": "SELECT_MFA_TYPE", "ChallengeResponses": \{"USERNAME": "[username]", "ANSWER": "[SMS_MFA|EMAIL_MFA|SOFTWARE_TOKEN_MFA]"\}`
   *
   * For more information about `SECRET_HASH`, see [Computing secret hash values](https://docs.aws.amazon.com/cognito/latest/developerguide/signing-up-users-in-your-app.html#cognito-user-pools-computing-secret-hash). For information about `DEVICE_KEY`, see [Working with user devices in your user pool](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html).
   *
   * @public
   */
  ChallengeResponses?: Record<string, string> | undefined;

  /**
   * Information that supports analytics outcomes with Amazon Pinpoint, including the user's endpoint ID. The endpoint ID is a destination for Amazon Pinpoint push notifications, for example a device identifier, email address, or phone number.
   *
   * @public
   */
  AnalyticsMetadata?: AnalyticsMetadataType | undefined;

  /**
   * Contextual data about your user session like the device fingerprint, IP address, or location. Amazon Cognito threat protection evaluates the risk of an authentication event based on the context that your app generates and passes to Amazon Cognito when it makes API requests.
   *
   * For more information, see [Collecting data for threat protection in applications](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-viewing-threat-protection-app.html).
   *
   * @public
   */
  UserContextData?: UserContextDataType | undefined;

  /**
   * A map of custom key-value pairs that you can provide as input for any custom workflows that this action triggers. You create custom workflows by assigning Lambda functions to user pool triggers.
   *
   * When Amazon Cognito invokes any of these functions, it passes a JSON payload, which the function receives as input. This payload contains a `clientMetadata` attribute that provides the data that you assigned to the ClientMetadata parameter in your request. In your function code, you can process the `clientMetadata` value to enhance your workflow for your specific needs.
   *
   * To review the Lambda trigger types that Amazon Cognito invokes at runtime with API requests, see [Connecting API actions to Lambda triggers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-working-with-lambda-triggers.html#lambda-triggers-by-event) in the *Amazon Cognito Developer Guide*.
   *
   * > **Note:**
   * >
   * > When you use the `ClientMetadata` parameter, note that Amazon Cognito won't do the following:
   * >
   * > - Store the `ClientMetadata` value. This data is available only to Lambda triggers that are assigned to a user pool to support custom workflows. If your user pool configuration doesn't include triggers, the `ClientMetadata` parameter serves no purpose.
   * > - Validate the `ClientMetadata` value.
   * > - Encrypt the `ClientMetadata` value. Don't send sensitive information in this parameter.
   *
   * @public
   */
  ClientMetadata?: Record<string, string> | undefined;
}

/**
 * The response to respond to the authentication challenge.
 *
 * @public
 */
export interface RespondToAuthChallengeResponse {
  /**
   * The name of the next challenge that you must respond to.
   *
   * Possible challenges include the following:
   *
   * > **Note:** All of the following challenges require `USERNAME` and, when the app client has a client secret, `SECRET_HASH` in the parameters. Include a `DEVICE_KEY` for device authentication.
   *
   * - `WEB_AUTHN`: Respond to the challenge with the results of a successful authentication with a WebAuthn authenticator, or passkey, as `CREDENTIAL`. Examples of WebAuthn authenticators include biometric devices and security keys.
   * - `PASSWORD`: Respond with the user's password as `PASSWORD`.
   * - `PASSWORD_SRP`: Respond with the initial SRP secret as `SRP_A`.
   * - `SELECT_CHALLENGE`: Respond with a challenge selection as `ANSWER`. It must be one of the challenge types in the `AvailableChallenges` response parameter. Add the parameters of the selected challenge, for example `USERNAME` and `SMS_OTP`.
   * - `SMS_MFA`: Respond with the code that your user pool delivered in an SMS message, as `SMS_MFA_CODE`
   * - `EMAIL_MFA`: Respond with the code that your user pool delivered in an email message, as `EMAIL_MFA_CODE`
   * - `EMAIL_OTP`: Respond with the code that your user pool delivered in an email message, as `EMAIL_OTP_CODE` .
   * - `SMS_OTP`: Respond with the code that your user pool delivered in an SMS message, as `SMS_OTP_CODE`.
   * - `PASSWORD_VERIFIER`: Respond with the second stage of SRP secrets as `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP`.
   * - `CUSTOM_CHALLENGE`: This is returned if your custom authentication flow determines that the user should pass another challenge before tokens are issued. The parameters of the challenge are determined by your Lambda function and issued in the `ChallengeParameters` of a challenge response.
   * - `DEVICE_SRP_AUTH`: Respond with the initial parameters of device SRP authentication. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `DEVICE_PASSWORD_VERIFIER`: Respond with `PASSWORD_CLAIM_SIGNATURE`, `PASSWORD_CLAIM_SECRET_BLOCK`, and `TIMESTAMP` after client-side SRP calculations. For more information, see [Signing in with a device](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html#user-pools-remembered-devices-signing-in-with-a-device).
   * - `NEW_PASSWORD_REQUIRED`: For users who are required to change their passwords after successful first login. Respond to this challenge with `NEW_PASSWORD` and any required attributes that Amazon Cognito returned in the `requiredAttributes` parameter. You can also set values for attributes that aren't required by your user pool and that your app client can write.
   *
   *   Amazon Cognito only returns this challenge for users who have temporary passwords. When you create passwordless users, you must provide values for all required attributes.
   *
   *   > **Note:** In a `NEW_PASSWORD_REQUIRED` challenge response, you can't modify a required attribute that already has a value. In `AdminRespondToAuthChallenge` or `RespondToAuthChallenge`, set a value for any keys that Amazon Cognito returned in the `requiredAttributes` parameter, then use the `AdminUpdateUserAttributes` or `UpdateUserAttributes` API operation to modify the value of any additional attributes.
   * - `MFA_SETUP`: For users who are required to setup an MFA factor before they can sign in. The MFA types activated for the user pool will be listed in the challenge parameters `MFAS_CAN_SETUP` value.
   *
   *   To set up time-based one-time password (TOTP) MFA, use the session returned in this challenge from `InitiateAuth` or `AdminInitiateAuth` as an input to `AssociateSoftwareToken`. Then, use the session returned by `VerifySoftwareToken` as an input to `RespondToAuthChallenge` or `AdminRespondToAuthChallenge` with challenge name `MFA_SETUP` to complete sign-in.
   *
   *   To set up SMS or email MFA, collect a `phone_number` or `email` attribute for the user. Then restart the authentication flow with an `InitiateAuth` or `AdminInitiateAuth` request.
   *
   * @public
   */
  ChallengeName?: ChallengeNameType | undefined;

  /**
   * The session identifier that maintains the state of authentication requests and challenge responses. If an `InitiateAuth` or `RespondToAuthChallenge` API request results in a determination that your application must pass another challenge, Amazon Cognito returns a session with other challenge parameters. Send this session identifier, unmodified, to the next `RespondToAuthChallenge` request.
   *
   * @public
   */
  Session?: string | undefined;

  /**
   * The parameters that define your response to the next challenge.
   *
   * @public
   */
  ChallengeParameters?: Record<string, string> | undefined;

  /**
   * The outcome of a successful authentication process. After your application has passed all challenges, Amazon Cognito returns an `AuthenticationResult` with the JSON web tokens (JWTs) that indicate successful sign-in.
   *
   * @public
   */
  AuthenticationResult?: AuthenticationResultType | undefined;

  /**
   * This response parameter lists the available authentication challenges that users can select from in [choice-based authentication](https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flows-selection-sdk.html#authentication-flows-selection-choice). For example, they might be able to choose between passkey authentication, a one-time password from an SMS message, and a traditional password.
   *
   * @public
   */
  AvailableChallenges?: ChallengeNameType[] | undefined;
}

/**
 * @public
 */
export interface RevokeTokenRequest {
  /**
   * The refresh token that you want to revoke.
   *
   * @public
   */
  Token: string | undefined;

  /**
   * The ID of the app client where the token that you want to revoke was issued.
   *
   * @public
   */
  ClientId: string | undefined;

  /**
   * The client secret of the requested app client, if the client has a secret.
   *
   * @public
   */
  ClientSecret?: string | undefined;
}

/**
 * @public
 */
export interface RevokeTokenResponse {}

/**
 * @public
 */
export interface SetLogDeliveryConfigurationRequest {
  /**
   * The ID of the user pool where you want to configure logging.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * A collection of the logging configurations for a user pool.
   *
   * @public
   */
  LogConfigurations: LogConfigurationType[] | undefined;
}

/**
 * @public
 */
export interface SetLogDeliveryConfigurationResponse {
  /**
   * The logging configuration that you applied to the requested user pool.
   *
   * @public
   */
  LogDeliveryConfiguration?: LogDeliveryConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetRiskConfigurationRequest {
  /**
   * The ID of the user pool where you want to set a risk configuration. If you include `UserPoolId` in your request, don't include `ClientId`. When the client ID is null, the same risk configuration is applied to all the clients in the userPool. When you include both `ClientId` and `UserPoolId`, Amazon Cognito maps the configuration to the app client only.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client where you want to set a risk configuration. If `ClientId` is null, then the risk configuration is mapped to `UserPoolId`. When the client ID is null, the same risk configuration is applied to all the clients in the userPool.
   *
   * When you include a `ClientId` parameter, Amazon Cognito maps the configuration to the app client. When you include both `ClientId` and `UserPoolId`, Amazon Cognito maps the configuration to the app client only.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The configuration of automated reactions to detected compromised credentials. Includes settings for blocking future sign-in requests and for the types of password-submission events you want to monitor.
   *
   * @public
   */
  CompromisedCredentialsRiskConfiguration?: CompromisedCredentialsRiskConfigurationType | undefined;

  /**
   * The settings for automated responses and notification templates for adaptive authentication with threat protection.
   *
   * @public
   */
  AccountTakeoverRiskConfiguration?: AccountTakeoverRiskConfigurationType | undefined;

  /**
   * A set of IP-address overrides to threat protection. You can set up IP-address always-block and always-allow lists.
   *
   * @public
   */
  RiskExceptionConfiguration?: RiskExceptionConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetRiskConfigurationResponse {
  /**
   * The API response that contains the risk configuration that you set and the timestamp of the most recent change.
   *
   * @public
   */
  RiskConfiguration: RiskConfigurationType | undefined;
}

/**
 * @public
 */
export interface SetUICustomizationRequest {
  /**
   * The ID of the user pool where you want to apply branding to the classic hosted UI.
   *
   * @public
   */
  UserPoolId: string | undefined;

  /**
   * The ID of the app client that you want to customize. To apply a default style to all app clients not configured with client-level branding, set this parameter value to `ALL`.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * A plaintext CSS file that contains the custom fields that you want to apply to your user pool or app client. To download a template, go to the Amazon Cognito console. Navigate to your user pool *App clients* tab, select *Login pages*, edit *Hosted UI (classic) style*, and select the link to `CSS template.css`.
   *
   * @public
   */
  CSS?: string | undefined;

  /**
   * The image that you want to set as your login in the classic hosted UI, as a Base64-formatted binary object.
   *
   * @public
   */
  ImageFile?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SetUICustomizationResponse {
  /**
   * Information about the hosted UI branding that you applied.
   *
   * @public
   */
  UICustomization: UICustomizationType | undefined;
}

/**
 * @public
 */
export interface SetUserMFAPreferenceRequest {
  /**
   * User preferences for SMS message MFA. Activates or deactivates SMS MFA and sets it as the preferred MFA method when multiple methods are available.
   *
   * @public
   */
  SMSMfaSettings?: SMSMfaSettingsType | undefined;

  /**
   * User preferences for time-based one-time password (TOTP) MFA. Activates or deactivates TOTP MFA and sets it as the preferred MFA method when multiple methods are available. Users must register a TOTP authenticator before they set this as their preferred MFA method.
   *
   * @public
   */
  SoftwareTokenMfaSettings?: SoftwareTokenMfaSettingsType | undefined;

  /**
   * User preferences for email message MFA. Activates or deactivates email MFA and sets it as the preferred MFA method when multiple methods are available. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * @public
   */
  EmailMfaSettings?: EmailMfaSettingsType | undefined;

  /**
   * User preferences for passkey MFA. Activates or deactivates passkey MFA for the user. When activated, passkey authentication requires user verification, and passkey sign-in is available when MFA is required. To activate this setting, the `FactorConfiguration` of your user pool `WebAuthnConfiguration` must be `MULTI_FACTOR_WITH_USER_VERIFICATION`. To activate this setting, your user pool must be in the [Essentials tier](https://docs.aws.amazon.com/cognito/latest/developerguide/feature-plans-features-essentials.html) or higher.
   *
   * @public
   */
  WebAuthnMfaSettings?: WebAuthnMfaSettingsType | undefined;

  /**
   * A valid access token that Amazon Cognito issued to the currently signed-in user. Must include a scope claim for `aws.cognito.signin.user.admin`.
   *
   * @public
   */
  AccessToken: string | undefined;
}

/**
 * @public
 */
export interface SetUserMFAPreferenceResponse {}
