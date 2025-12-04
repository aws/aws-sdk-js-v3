import {
  AccountTakeoverEventActionType,
  AddCustomAttributesCommand,
  AdminAddUserToGroupCommand,
  AdminConfirmSignUpCommand,
  AdminCreateUserCommand,
  AdminDeleteUserAttributesCommand,
  AdminDeleteUserCommand,
  AdminDisableProviderForUserCommand,
  AdminDisableUserCommand,
  AdminEnableUserCommand,
  AdminForgetDeviceCommand,
  AdminGetDeviceCommand,
  AdminGetUserCommand,
  AdminInitiateAuthCommand,
  AdminLinkProviderForUserCommand,
  AdminListDevicesCommand,
  AdminListGroupsForUserCommand,
  AdminListUserAuthEventsCommand,
  AdminRemoveUserFromGroupCommand,
  AdminResetUserPasswordCommand,
  AdminRespondToAuthChallengeCommand,
  AdminSetUserMFAPreferenceCommand,
  AdminSetUserPasswordCommand,
  AdminSetUserSettingsCommand,
  AdminUpdateAuthEventFeedbackCommand,
  AdminUpdateDeviceStatusCommand,
  AdminUpdateUserAttributesCommand,
  AdminUserGlobalSignOutCommand,
  AdvancedSecurityEnabledModeType,
  AdvancedSecurityModeType,
  AliasAttributeType,
  AssetCategoryType,
  AssetExtensionType,
  AssociateSoftwareTokenCommand,
  AttributeDataType,
  AuthFactorType,
  AuthFlowType,
  ChallengeName,
  ChallengeNameType,
  ChallengeResponse,
  ChangePasswordCommand,
  CognitoIdentityProvider,
  CognitoIdentityProviderClient,
  CognitoIdentityProviderServiceException,
  ColorSchemeModeType,
  CompleteWebAuthnRegistrationCommand,
  CompromisedCredentialsEventActionType,
  ConfirmDeviceCommand,
  ConfirmForgotPasswordCommand,
  ConfirmSignUpCommand,
  CreateGroupCommand,
  CreateIdentityProviderCommand,
  CreateManagedLoginBrandingCommand,
  CreateResourceServerCommand,
  CreateTermsCommand,
  CreateUserImportJobCommand,
  CreateUserPoolClientCommand,
  CreateUserPoolCommand,
  CreateUserPoolDomainCommand,
  CustomEmailSenderLambdaVersionType,
  CustomSMSSenderLambdaVersionType,
  DefaultEmailOptionType,
  DeleteGroupCommand,
  DeleteIdentityProviderCommand,
  DeleteManagedLoginBrandingCommand,
  DeleteResourceServerCommand,
  DeleteTermsCommand,
  DeleteUserAttributesCommand,
  DeleteUserCommand,
  DeleteUserPoolClientCommand,
  DeleteUserPoolCommand,
  DeleteUserPoolDomainCommand,
  DeleteWebAuthnCredentialCommand,
  DeletionProtectionType,
  DeliveryMediumType,
  DescribeIdentityProviderCommand,
  DescribeManagedLoginBrandingByClientCommand,
  DescribeManagedLoginBrandingCommand,
  DescribeResourceServerCommand,
  DescribeRiskConfigurationCommand,
  DescribeTermsCommand,
  DescribeUserImportJobCommand,
  DescribeUserPoolClientCommand,
  DescribeUserPoolCommand,
  DescribeUserPoolDomainCommand,
  DeviceRememberedStatusType,
  DomainStatusType,
  EmailSendingAccountType,
  EventFilterType,
  EventResponseType,
  EventSourceName,
  EventType,
  ExplicitAuthFlowsType,
  FeatureType,
  FeedbackValueType,
  ForgetDeviceCommand,
  ForgotPasswordCommand,
  GetCSVHeaderCommand,
  GetDeviceCommand,
  GetGroupCommand,
  GetIdentityProviderByIdentifierCommand,
  GetLogDeliveryConfigurationCommand,
  GetSigningCertificateCommand,
  GetTokensFromRefreshTokenCommand,
  GetUICustomizationCommand,
  GetUserAttributeVerificationCodeCommand,
  GetUserAuthFactorsCommand,
  GetUserCommand,
  GetUserPoolMfaConfigCommand,
  GlobalSignOutCommand,
  IdentityProviderTypeType,
  InitiateAuthCommand,
  ListDevicesCommand,
  ListGroupsCommand,
  ListIdentityProvidersCommand,
  ListResourceServersCommand,
  ListTagsForResourceCommand,
  ListTermsCommand,
  ListUserImportJobsCommand,
  ListUserPoolClientsCommand,
  ListUserPoolsCommand,
  ListUsersCommand,
  ListUsersInGroupCommand,
  ListWebAuthnCredentialsCommand,
  LogLevel,
  MessageActionType,
  OAuthFlowType,
  PreTokenGenerationLambdaVersionType,
  PreventUserExistenceErrorTypes,
  RecoveryOptionNameType,
  ResendConfirmationCodeCommand,
  RespondToAuthChallengeCommand,
  RevokeTokenCommand,
  RiskDecisionType,
  RiskLevelType,
  SetLogDeliveryConfigurationCommand,
  SetRiskConfigurationCommand,
  SetUICustomizationCommand,
  SetUserMFAPreferenceCommand,
  SetUserPoolMfaConfigCommand,
  SetUserSettingsCommand,
  SignUpCommand,
  StartUserImportJobCommand,
  StartWebAuthnRegistrationCommand,
  StatusType,
  StopUserImportJobCommand,
  TagResourceCommand,
  TermsEnforcementType,
  TermsSourceType,
  TimeUnitsType,
  UntagResourceCommand,
  UpdateAuthEventFeedbackCommand,
  UpdateDeviceStatusCommand,
  UpdateGroupCommand,
  UpdateIdentityProviderCommand,
  UpdateManagedLoginBrandingCommand,
  UpdateResourceServerCommand,
  UpdateTermsCommand,
  UpdateUserAttributesCommand,
  UpdateUserPoolClientCommand,
  UpdateUserPoolCommand,
  UpdateUserPoolDomainCommand,
  UserImportJobStatusType,
  UserPoolMfaType,
  UserPoolTierType,
  UserStatusType,
  UserVerificationType,
  UsernameAttributeType,
  VerifiedAttributeType,
  VerifySoftwareTokenCommand,
  VerifySoftwareTokenResponseType,
  VerifyUserAttributeCommand,
  paginateAdminListGroupsForUser,
  paginateAdminListUserAuthEvents,
  paginateListGroups,
  paginateListIdentityProviders,
  paginateListResourceServers,
  paginateListUserPoolClients,
  paginateListUserPools,
  paginateListUsers,
  paginateListUsersInGroup,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CognitoIdentityProviderClient === "function")
assert(typeof CognitoIdentityProvider === "function")
// commands
assert(typeof AddCustomAttributesCommand === "function")
assert(typeof AdminAddUserToGroupCommand === "function")
assert(typeof AdminConfirmSignUpCommand === "function")
assert(typeof AdminCreateUserCommand === "function")
assert(typeof AdminDeleteUserCommand === "function")
assert(typeof AdminDeleteUserAttributesCommand === "function")
assert(typeof AdminDisableProviderForUserCommand === "function")
assert(typeof AdminDisableUserCommand === "function")
assert(typeof AdminEnableUserCommand === "function")
assert(typeof AdminForgetDeviceCommand === "function")
assert(typeof AdminGetDeviceCommand === "function")
assert(typeof AdminGetUserCommand === "function")
assert(typeof AdminInitiateAuthCommand === "function")
assert(typeof AdminLinkProviderForUserCommand === "function")
assert(typeof AdminListDevicesCommand === "function")
assert(typeof AdminListGroupsForUserCommand === "function")
assert(typeof AdminListUserAuthEventsCommand === "function")
assert(typeof AdminRemoveUserFromGroupCommand === "function")
assert(typeof AdminResetUserPasswordCommand === "function")
assert(typeof AdminRespondToAuthChallengeCommand === "function")
assert(typeof AdminSetUserMFAPreferenceCommand === "function")
assert(typeof AdminSetUserPasswordCommand === "function")
assert(typeof AdminSetUserSettingsCommand === "function")
assert(typeof AdminUpdateAuthEventFeedbackCommand === "function")
assert(typeof AdminUpdateDeviceStatusCommand === "function")
assert(typeof AdminUpdateUserAttributesCommand === "function")
assert(typeof AdminUserGlobalSignOutCommand === "function")
assert(typeof AssociateSoftwareTokenCommand === "function")
assert(typeof ChangePasswordCommand === "function")
assert(typeof CompleteWebAuthnRegistrationCommand === "function")
assert(typeof ConfirmDeviceCommand === "function")
assert(typeof ConfirmForgotPasswordCommand === "function")
assert(typeof ConfirmSignUpCommand === "function")
assert(typeof CreateGroupCommand === "function")
assert(typeof CreateIdentityProviderCommand === "function")
assert(typeof CreateManagedLoginBrandingCommand === "function")
assert(typeof CreateResourceServerCommand === "function")
assert(typeof CreateTermsCommand === "function")
assert(typeof CreateUserImportJobCommand === "function")
assert(typeof CreateUserPoolCommand === "function")
assert(typeof CreateUserPoolClientCommand === "function")
assert(typeof CreateUserPoolDomainCommand === "function")
assert(typeof DeleteGroupCommand === "function")
assert(typeof DeleteIdentityProviderCommand === "function")
assert(typeof DeleteManagedLoginBrandingCommand === "function")
assert(typeof DeleteResourceServerCommand === "function")
assert(typeof DeleteTermsCommand === "function")
assert(typeof DeleteUserCommand === "function")
assert(typeof DeleteUserAttributesCommand === "function")
assert(typeof DeleteUserPoolCommand === "function")
assert(typeof DeleteUserPoolClientCommand === "function")
assert(typeof DeleteUserPoolDomainCommand === "function")
assert(typeof DeleteWebAuthnCredentialCommand === "function")
assert(typeof DescribeIdentityProviderCommand === "function")
assert(typeof DescribeManagedLoginBrandingCommand === "function")
assert(typeof DescribeManagedLoginBrandingByClientCommand === "function")
assert(typeof DescribeResourceServerCommand === "function")
assert(typeof DescribeRiskConfigurationCommand === "function")
assert(typeof DescribeTermsCommand === "function")
assert(typeof DescribeUserImportJobCommand === "function")
assert(typeof DescribeUserPoolCommand === "function")
assert(typeof DescribeUserPoolClientCommand === "function")
assert(typeof DescribeUserPoolDomainCommand === "function")
assert(typeof ForgetDeviceCommand === "function")
assert(typeof ForgotPasswordCommand === "function")
assert(typeof GetCSVHeaderCommand === "function")
assert(typeof GetDeviceCommand === "function")
assert(typeof GetGroupCommand === "function")
assert(typeof GetIdentityProviderByIdentifierCommand === "function")
assert(typeof GetLogDeliveryConfigurationCommand === "function")
assert(typeof GetSigningCertificateCommand === "function")
assert(typeof GetTokensFromRefreshTokenCommand === "function")
assert(typeof GetUICustomizationCommand === "function")
assert(typeof GetUserCommand === "function")
assert(typeof GetUserAttributeVerificationCodeCommand === "function")
assert(typeof GetUserAuthFactorsCommand === "function")
assert(typeof GetUserPoolMfaConfigCommand === "function")
assert(typeof GlobalSignOutCommand === "function")
assert(typeof InitiateAuthCommand === "function")
assert(typeof ListDevicesCommand === "function")
assert(typeof ListGroupsCommand === "function")
assert(typeof ListIdentityProvidersCommand === "function")
assert(typeof ListResourceServersCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTermsCommand === "function")
assert(typeof ListUserImportJobsCommand === "function")
assert(typeof ListUserPoolClientsCommand === "function")
assert(typeof ListUserPoolsCommand === "function")
assert(typeof ListUsersCommand === "function")
assert(typeof ListUsersInGroupCommand === "function")
assert(typeof ListWebAuthnCredentialsCommand === "function")
assert(typeof ResendConfirmationCodeCommand === "function")
assert(typeof RespondToAuthChallengeCommand === "function")
assert(typeof RevokeTokenCommand === "function")
assert(typeof SetLogDeliveryConfigurationCommand === "function")
assert(typeof SetRiskConfigurationCommand === "function")
assert(typeof SetUICustomizationCommand === "function")
assert(typeof SetUserMFAPreferenceCommand === "function")
assert(typeof SetUserPoolMfaConfigCommand === "function")
assert(typeof SetUserSettingsCommand === "function")
assert(typeof SignUpCommand === "function")
assert(typeof StartUserImportJobCommand === "function")
assert(typeof StartWebAuthnRegistrationCommand === "function")
assert(typeof StopUserImportJobCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateAuthEventFeedbackCommand === "function")
assert(typeof UpdateDeviceStatusCommand === "function")
assert(typeof UpdateGroupCommand === "function")
assert(typeof UpdateIdentityProviderCommand === "function")
assert(typeof UpdateManagedLoginBrandingCommand === "function")
assert(typeof UpdateResourceServerCommand === "function")
assert(typeof UpdateTermsCommand === "function")
assert(typeof UpdateUserAttributesCommand === "function")
assert(typeof UpdateUserPoolCommand === "function")
assert(typeof UpdateUserPoolClientCommand === "function")
assert(typeof UpdateUserPoolDomainCommand === "function")
assert(typeof VerifySoftwareTokenCommand === "function")
assert(typeof VerifyUserAttributeCommand === "function")
// enums
assert(typeof AccountTakeoverEventActionType === "object");
assert(typeof AdvancedSecurityEnabledModeType === "object");
assert(typeof AdvancedSecurityModeType === "object");
assert(typeof AliasAttributeType === "object");
assert(typeof AssetCategoryType === "object");
assert(typeof AssetExtensionType === "object");
assert(typeof AttributeDataType === "object");
assert(typeof AuthFactorType === "object");
assert(typeof AuthFlowType === "object");
assert(typeof ChallengeName === "object");
assert(typeof ChallengeNameType === "object");
assert(typeof ChallengeResponse === "object");
assert(typeof ColorSchemeModeType === "object");
assert(typeof CompromisedCredentialsEventActionType === "object");
assert(typeof CustomEmailSenderLambdaVersionType === "object");
assert(typeof CustomSMSSenderLambdaVersionType === "object");
assert(typeof DefaultEmailOptionType === "object");
assert(typeof DeletionProtectionType === "object");
assert(typeof DeliveryMediumType === "object");
assert(typeof DeviceRememberedStatusType === "object");
assert(typeof DomainStatusType === "object");
assert(typeof EmailSendingAccountType === "object");
assert(typeof EventFilterType === "object");
assert(typeof EventResponseType === "object");
assert(typeof EventSourceName === "object");
assert(typeof EventType === "object");
assert(typeof ExplicitAuthFlowsType === "object");
assert(typeof FeatureType === "object");
assert(typeof FeedbackValueType === "object");
assert(typeof IdentityProviderTypeType === "object");
assert(typeof LogLevel === "object");
assert(typeof MessageActionType === "object");
assert(typeof OAuthFlowType === "object");
assert(typeof PreTokenGenerationLambdaVersionType === "object");
assert(typeof PreventUserExistenceErrorTypes === "object");
assert(typeof RecoveryOptionNameType === "object");
assert(typeof RiskDecisionType === "object");
assert(typeof RiskLevelType === "object");
assert(typeof StatusType === "object");
assert(typeof TermsEnforcementType === "object");
assert(typeof TermsSourceType === "object");
assert(typeof TimeUnitsType === "object");
assert(typeof UserImportJobStatusType === "object");
assert(typeof UsernameAttributeType === "object");
assert(typeof UserPoolMfaType === "object");
assert(typeof UserPoolTierType === "object");
assert(typeof UserStatusType === "object");
assert(typeof UserVerificationType === "object");
assert(typeof VerifiedAttributeType === "object");
assert(typeof VerifySoftwareTokenResponseType === "object");
// errors
assert(CognitoIdentityProviderServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateAdminListGroupsForUser === "function")
assert(typeof paginateAdminListUserAuthEvents === "function")
assert(typeof paginateListGroups === "function")
assert(typeof paginateListIdentityProviders === "function")
assert(typeof paginateListResourceServers === "function")
assert(typeof paginateListUserPoolClients === "function")
assert(typeof paginateListUserPools === "function")
assert(typeof paginateListUsers === "function")
assert(typeof paginateListUsersInGroup === "function")
console.log(`CognitoIdentityProvider index test passed.`);
