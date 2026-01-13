import {
  AccountRecoverySettingType$,
  AccountTakeoverActionsType$,
  AccountTakeoverActionType$,
  AccountTakeoverEventActionType,
  AccountTakeoverRiskConfigurationType$,
  AddCustomAttributes$,
  AddCustomAttributesCommand,
  AddCustomAttributesRequest$,
  AddCustomAttributesResponse$,
  AdminAddUserToGroup$,
  AdminAddUserToGroupCommand,
  AdminAddUserToGroupRequest$,
  AdminConfirmSignUp$,
  AdminConfirmSignUpCommand,
  AdminConfirmSignUpRequest$,
  AdminConfirmSignUpResponse$,
  AdminCreateUser$,
  AdminCreateUserCommand,
  AdminCreateUserConfigType$,
  AdminCreateUserRequest$,
  AdminCreateUserResponse$,
  AdminDeleteUser$,
  AdminDeleteUserAttributes$,
  AdminDeleteUserAttributesCommand,
  AdminDeleteUserAttributesRequest$,
  AdminDeleteUserAttributesResponse$,
  AdminDeleteUserCommand,
  AdminDeleteUserRequest$,
  AdminDisableProviderForUser$,
  AdminDisableProviderForUserCommand,
  AdminDisableProviderForUserRequest$,
  AdminDisableProviderForUserResponse$,
  AdminDisableUser$,
  AdminDisableUserCommand,
  AdminDisableUserRequest$,
  AdminDisableUserResponse$,
  AdminEnableUser$,
  AdminEnableUserCommand,
  AdminEnableUserRequest$,
  AdminEnableUserResponse$,
  AdminForgetDevice$,
  AdminForgetDeviceCommand,
  AdminForgetDeviceRequest$,
  AdminGetDevice$,
  AdminGetDeviceCommand,
  AdminGetDeviceRequest$,
  AdminGetDeviceResponse$,
  AdminGetUser$,
  AdminGetUserCommand,
  AdminGetUserRequest$,
  AdminGetUserResponse$,
  AdminInitiateAuth$,
  AdminInitiateAuthCommand,
  AdminInitiateAuthRequest$,
  AdminInitiateAuthResponse$,
  AdminLinkProviderForUser$,
  AdminLinkProviderForUserCommand,
  AdminLinkProviderForUserRequest$,
  AdminLinkProviderForUserResponse$,
  AdminListDevices$,
  AdminListDevicesCommand,
  AdminListDevicesRequest$,
  AdminListDevicesResponse$,
  AdminListGroupsForUser$,
  AdminListGroupsForUserCommand,
  AdminListGroupsForUserRequest$,
  AdminListGroupsForUserResponse$,
  AdminListUserAuthEvents$,
  AdminListUserAuthEventsCommand,
  AdminListUserAuthEventsRequest$,
  AdminListUserAuthEventsResponse$,
  AdminRemoveUserFromGroup$,
  AdminRemoveUserFromGroupCommand,
  AdminRemoveUserFromGroupRequest$,
  AdminResetUserPassword$,
  AdminResetUserPasswordCommand,
  AdminResetUserPasswordRequest$,
  AdminResetUserPasswordResponse$,
  AdminRespondToAuthChallenge$,
  AdminRespondToAuthChallengeCommand,
  AdminRespondToAuthChallengeRequest$,
  AdminRespondToAuthChallengeResponse$,
  AdminSetUserMFAPreference$,
  AdminSetUserMFAPreferenceCommand,
  AdminSetUserMFAPreferenceRequest$,
  AdminSetUserMFAPreferenceResponse$,
  AdminSetUserPassword$,
  AdminSetUserPasswordCommand,
  AdminSetUserPasswordRequest$,
  AdminSetUserPasswordResponse$,
  AdminSetUserSettings$,
  AdminSetUserSettingsCommand,
  AdminSetUserSettingsRequest$,
  AdminSetUserSettingsResponse$,
  AdminUpdateAuthEventFeedback$,
  AdminUpdateAuthEventFeedbackCommand,
  AdminUpdateAuthEventFeedbackRequest$,
  AdminUpdateAuthEventFeedbackResponse$,
  AdminUpdateDeviceStatus$,
  AdminUpdateDeviceStatusCommand,
  AdminUpdateDeviceStatusRequest$,
  AdminUpdateDeviceStatusResponse$,
  AdminUpdateUserAttributes$,
  AdminUpdateUserAttributesCommand,
  AdminUpdateUserAttributesRequest$,
  AdminUpdateUserAttributesResponse$,
  AdminUserGlobalSignOut$,
  AdminUserGlobalSignOutCommand,
  AdminUserGlobalSignOutRequest$,
  AdminUserGlobalSignOutResponse$,
  AdvancedSecurityAdditionalFlowsType$,
  AdvancedSecurityEnabledModeType,
  AdvancedSecurityModeType,
  AliasAttributeType,
  AliasExistsException,
  AliasExistsException$,
  AnalyticsConfigurationType$,
  AnalyticsMetadataType$,
  AssetCategoryType,
  AssetExtensionType,
  AssetType$,
  AssociateSoftwareToken$,
  AssociateSoftwareTokenCommand,
  AssociateSoftwareTokenRequest$,
  AssociateSoftwareTokenResponse$,
  AttributeDataType,
  AttributeType$,
  AuthenticationResultType$,
  AuthEventType$,
  AuthFactorType,
  AuthFlowType,
  ChallengeName,
  ChallengeNameType,
  ChallengeResponse,
  ChallengeResponseType$,
  ChangePassword$,
  ChangePasswordCommand,
  ChangePasswordRequest$,
  ChangePasswordResponse$,
  CloudWatchLogsConfigurationType$,
  CodeDeliveryDetailsType$,
  CodeDeliveryFailureException,
  CodeDeliveryFailureException$,
  CodeMismatchException,
  CodeMismatchException$,
  CognitoIdentityProvider,
  CognitoIdentityProviderClient,
  CognitoIdentityProviderServiceException,
  ColorSchemeModeType,
  CompleteWebAuthnRegistration$,
  CompleteWebAuthnRegistrationCommand,
  CompleteWebAuthnRegistrationRequest$,
  CompleteWebAuthnRegistrationResponse$,
  CompromisedCredentialsActionsType$,
  CompromisedCredentialsEventActionType,
  CompromisedCredentialsRiskConfigurationType$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConfirmDevice$,
  ConfirmDeviceCommand,
  ConfirmDeviceRequest$,
  ConfirmDeviceResponse$,
  ConfirmForgotPassword$,
  ConfirmForgotPasswordCommand,
  ConfirmForgotPasswordRequest$,
  ConfirmForgotPasswordResponse$,
  ConfirmSignUp$,
  ConfirmSignUpCommand,
  ConfirmSignUpRequest$,
  ConfirmSignUpResponse$,
  ContextDataType$,
  CreateGroup$,
  CreateGroupCommand,
  CreateGroupRequest$,
  CreateGroupResponse$,
  CreateIdentityProvider$,
  CreateIdentityProviderCommand,
  CreateIdentityProviderRequest$,
  CreateIdentityProviderResponse$,
  CreateManagedLoginBranding$,
  CreateManagedLoginBrandingCommand,
  CreateManagedLoginBrandingRequest$,
  CreateManagedLoginBrandingResponse$,
  CreateResourceServer$,
  CreateResourceServerCommand,
  CreateResourceServerRequest$,
  CreateResourceServerResponse$,
  CreateTerms$,
  CreateTermsCommand,
  CreateTermsRequest$,
  CreateTermsResponse$,
  CreateUserImportJob$,
  CreateUserImportJobCommand,
  CreateUserImportJobRequest$,
  CreateUserImportJobResponse$,
  CreateUserPool$,
  CreateUserPoolClient$,
  CreateUserPoolClientCommand,
  CreateUserPoolClientRequest$,
  CreateUserPoolClientResponse$,
  CreateUserPoolCommand,
  CreateUserPoolDomain$,
  CreateUserPoolDomainCommand,
  CreateUserPoolDomainRequest$,
  CreateUserPoolDomainResponse$,
  CreateUserPoolRequest$,
  CreateUserPoolResponse$,
  CustomDomainConfigType$,
  CustomEmailLambdaVersionConfigType$,
  CustomEmailSenderLambdaVersionType,
  CustomSMSLambdaVersionConfigType$,
  CustomSMSSenderLambdaVersionType,
  DefaultEmailOptionType,
  DeleteGroup$,
  DeleteGroupCommand,
  DeleteGroupRequest$,
  DeleteIdentityProvider$,
  DeleteIdentityProviderCommand,
  DeleteIdentityProviderRequest$,
  DeleteManagedLoginBranding$,
  DeleteManagedLoginBrandingCommand,
  DeleteManagedLoginBrandingRequest$,
  DeleteResourceServer$,
  DeleteResourceServerCommand,
  DeleteResourceServerRequest$,
  DeleteTerms$,
  DeleteTermsCommand,
  DeleteTermsRequest$,
  DeleteUser$,
  DeleteUserAttributes$,
  DeleteUserAttributesCommand,
  DeleteUserAttributesRequest$,
  DeleteUserAttributesResponse$,
  DeleteUserCommand,
  DeleteUserPool$,
  DeleteUserPoolClient$,
  DeleteUserPoolClientCommand,
  DeleteUserPoolClientRequest$,
  DeleteUserPoolCommand,
  DeleteUserPoolDomain$,
  DeleteUserPoolDomainCommand,
  DeleteUserPoolDomainRequest$,
  DeleteUserPoolDomainResponse$,
  DeleteUserPoolRequest$,
  DeleteUserRequest$,
  DeleteWebAuthnCredential$,
  DeleteWebAuthnCredentialCommand,
  DeleteWebAuthnCredentialRequest$,
  DeleteWebAuthnCredentialResponse$,
  DeletionProtectionType,
  DeliveryMediumType,
  DescribeIdentityProvider$,
  DescribeIdentityProviderCommand,
  DescribeIdentityProviderRequest$,
  DescribeIdentityProviderResponse$,
  DescribeManagedLoginBranding$,
  DescribeManagedLoginBrandingByClient$,
  DescribeManagedLoginBrandingByClientCommand,
  DescribeManagedLoginBrandingByClientRequest$,
  DescribeManagedLoginBrandingByClientResponse$,
  DescribeManagedLoginBrandingCommand,
  DescribeManagedLoginBrandingRequest$,
  DescribeManagedLoginBrandingResponse$,
  DescribeResourceServer$,
  DescribeResourceServerCommand,
  DescribeResourceServerRequest$,
  DescribeResourceServerResponse$,
  DescribeRiskConfiguration$,
  DescribeRiskConfigurationCommand,
  DescribeRiskConfigurationRequest$,
  DescribeRiskConfigurationResponse$,
  DescribeTerms$,
  DescribeTermsCommand,
  DescribeTermsRequest$,
  DescribeTermsResponse$,
  DescribeUserImportJob$,
  DescribeUserImportJobCommand,
  DescribeUserImportJobRequest$,
  DescribeUserImportJobResponse$,
  DescribeUserPool$,
  DescribeUserPoolClient$,
  DescribeUserPoolClientCommand,
  DescribeUserPoolClientRequest$,
  DescribeUserPoolClientResponse$,
  DescribeUserPoolCommand,
  DescribeUserPoolDomain$,
  DescribeUserPoolDomainCommand,
  DescribeUserPoolDomainRequest$,
  DescribeUserPoolDomainResponse$,
  DescribeUserPoolRequest$,
  DescribeUserPoolResponse$,
  DeviceConfigurationType$,
  DeviceKeyExistsException,
  DeviceKeyExistsException$,
  DeviceRememberedStatusType,
  DeviceSecretVerifierConfigType$,
  DeviceType$,
  DomainDescriptionType$,
  DomainStatusType,
  DuplicateProviderException,
  DuplicateProviderException$,
  EmailConfigurationType$,
  EmailMfaConfigType$,
  EmailMfaSettingsType$,
  EmailSendingAccountType,
  EnableSoftwareTokenMFAException,
  EnableSoftwareTokenMFAException$,
  EventContextDataType$,
  EventFeedbackType$,
  EventFilterType,
  EventResponseType,
  EventRiskType$,
  EventSourceName,
  EventType,
  ExpiredCodeException,
  ExpiredCodeException$,
  ExplicitAuthFlowsType,
  FeatureType,
  FeatureUnavailableInTierException,
  FeatureUnavailableInTierException$,
  FeedbackValueType,
  FirehoseConfigurationType$,
  ForbiddenException,
  ForbiddenException$,
  ForgetDevice$,
  ForgetDeviceCommand,
  ForgetDeviceRequest$,
  ForgotPassword$,
  ForgotPasswordCommand,
  ForgotPasswordRequest$,
  ForgotPasswordResponse$,
  GetCSVHeader$,
  GetCSVHeaderCommand,
  GetCSVHeaderRequest$,
  GetCSVHeaderResponse$,
  GetDevice$,
  GetDeviceCommand,
  GetDeviceRequest$,
  GetDeviceResponse$,
  GetGroup$,
  GetGroupCommand,
  GetGroupRequest$,
  GetGroupResponse$,
  GetIdentityProviderByIdentifier$,
  GetIdentityProviderByIdentifierCommand,
  GetIdentityProviderByIdentifierRequest$,
  GetIdentityProviderByIdentifierResponse$,
  GetLogDeliveryConfiguration$,
  GetLogDeliveryConfigurationCommand,
  GetLogDeliveryConfigurationRequest$,
  GetLogDeliveryConfigurationResponse$,
  GetSigningCertificate$,
  GetSigningCertificateCommand,
  GetSigningCertificateRequest$,
  GetSigningCertificateResponse$,
  GetTokensFromRefreshToken$,
  GetTokensFromRefreshTokenCommand,
  GetTokensFromRefreshTokenRequest$,
  GetTokensFromRefreshTokenResponse$,
  GetUICustomization$,
  GetUICustomizationCommand,
  GetUICustomizationRequest$,
  GetUICustomizationResponse$,
  GetUser$,
  GetUserAttributeVerificationCode$,
  GetUserAttributeVerificationCodeCommand,
  GetUserAttributeVerificationCodeRequest$,
  GetUserAttributeVerificationCodeResponse$,
  GetUserAuthFactors$,
  GetUserAuthFactorsCommand,
  GetUserAuthFactorsRequest$,
  GetUserAuthFactorsResponse$,
  GetUserCommand,
  GetUserPoolMfaConfig$,
  GetUserPoolMfaConfigCommand,
  GetUserPoolMfaConfigRequest$,
  GetUserPoolMfaConfigResponse$,
  GetUserRequest$,
  GetUserResponse$,
  GlobalSignOut$,
  GlobalSignOutCommand,
  GlobalSignOutRequest$,
  GlobalSignOutResponse$,
  GroupExistsException,
  GroupExistsException$,
  GroupType$,
  HttpHeader$,
  IdentityProviderType$,
  IdentityProviderTypeType,
  InitiateAuth$,
  InitiateAuthCommand,
  InitiateAuthRequest$,
  InitiateAuthResponse$,
  InternalErrorException,
  InternalErrorException$,
  InvalidEmailRoleAccessPolicyException,
  InvalidEmailRoleAccessPolicyException$,
  InvalidLambdaResponseException,
  InvalidLambdaResponseException$,
  InvalidOAuthFlowException,
  InvalidOAuthFlowException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidPasswordException,
  InvalidPasswordException$,
  InvalidSmsRoleAccessPolicyException,
  InvalidSmsRoleAccessPolicyException$,
  InvalidSmsRoleTrustRelationshipException,
  InvalidSmsRoleTrustRelationshipException$,
  InvalidUserPoolConfigurationException,
  InvalidUserPoolConfigurationException$,
  LambdaConfigType$,
  LimitExceededException,
  LimitExceededException$,
  ListDevices$,
  ListDevicesCommand,
  ListDevicesRequest$,
  ListDevicesResponse$,
  ListGroups$,
  ListGroupsCommand,
  ListGroupsRequest$,
  ListGroupsResponse$,
  ListIdentityProviders$,
  ListIdentityProvidersCommand,
  ListIdentityProvidersRequest$,
  ListIdentityProvidersResponse$,
  ListResourceServers$,
  ListResourceServersCommand,
  ListResourceServersRequest$,
  ListResourceServersResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTerms$,
  ListTermsCommand,
  ListTermsRequest$,
  ListTermsResponse$,
  ListUserImportJobs$,
  ListUserImportJobsCommand,
  ListUserImportJobsRequest$,
  ListUserImportJobsResponse$,
  ListUserPoolClients$,
  ListUserPoolClientsCommand,
  ListUserPoolClientsRequest$,
  ListUserPoolClientsResponse$,
  ListUserPools$,
  ListUserPoolsCommand,
  ListUserPoolsRequest$,
  ListUserPoolsResponse$,
  ListUsers$,
  ListUsersCommand,
  ListUsersInGroup$,
  ListUsersInGroupCommand,
  ListUsersInGroupRequest$,
  ListUsersInGroupResponse$,
  ListUsersRequest$,
  ListUsersResponse$,
  ListWebAuthnCredentials$,
  ListWebAuthnCredentialsCommand,
  ListWebAuthnCredentialsRequest$,
  ListWebAuthnCredentialsResponse$,
  LogConfigurationType$,
  LogDeliveryConfigurationType$,
  LogLevel,
  ManagedLoginBrandingExistsException,
  ManagedLoginBrandingExistsException$,
  ManagedLoginBrandingType$,
  MessageActionType,
  MessageTemplateType$,
  MFAMethodNotFoundException,
  MFAMethodNotFoundException$,
  MFAOptionType$,
  NewDeviceMetadataType$,
  NotAuthorizedException,
  NotAuthorizedException$,
  NotifyConfigurationType$,
  NotifyEmailType$,
  NumberAttributeConstraintsType$,
  OAuthFlowType,
  paginateAdminListGroupsForUser,
  paginateAdminListUserAuthEvents,
  paginateListGroups,
  paginateListIdentityProviders,
  paginateListResourceServers,
  paginateListUserPoolClients,
  paginateListUserPools,
  paginateListUsers,
  paginateListUsersInGroup,
  PasswordHistoryPolicyViolationException,
  PasswordHistoryPolicyViolationException$,
  PasswordPolicyType$,
  PasswordResetRequiredException,
  PasswordResetRequiredException$,
  PreconditionNotMetException,
  PreconditionNotMetException$,
  PreTokenGenerationLambdaVersionType,
  PreTokenGenerationVersionConfigType$,
  PreventUserExistenceErrorTypes,
  ProviderDescription$,
  ProviderUserIdentifierType$,
  RecoveryOptionNameType,
  RecoveryOptionType$,
  RefreshTokenReuseException,
  RefreshTokenReuseException$,
  RefreshTokenRotationType$,
  ResendConfirmationCode$,
  ResendConfirmationCodeCommand,
  ResendConfirmationCodeRequest$,
  ResendConfirmationCodeResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceServerScopeType$,
  ResourceServerType$,
  RespondToAuthChallenge$,
  RespondToAuthChallengeCommand,
  RespondToAuthChallengeRequest$,
  RespondToAuthChallengeResponse$,
  RevokeToken$,
  RevokeTokenCommand,
  RevokeTokenRequest$,
  RevokeTokenResponse$,
  RiskConfigurationType$,
  RiskDecisionType,
  RiskExceptionConfigurationType$,
  RiskLevelType,
  S3ConfigurationType$,
  SchemaAttributeType$,
  ScopeDoesNotExistException,
  ScopeDoesNotExistException$,
  SetLogDeliveryConfiguration$,
  SetLogDeliveryConfigurationCommand,
  SetLogDeliveryConfigurationRequest$,
  SetLogDeliveryConfigurationResponse$,
  SetRiskConfiguration$,
  SetRiskConfigurationCommand,
  SetRiskConfigurationRequest$,
  SetRiskConfigurationResponse$,
  SetUICustomization$,
  SetUICustomizationCommand,
  SetUICustomizationRequest$,
  SetUICustomizationResponse$,
  SetUserMFAPreference$,
  SetUserMFAPreferenceCommand,
  SetUserMFAPreferenceRequest$,
  SetUserMFAPreferenceResponse$,
  SetUserPoolMfaConfig$,
  SetUserPoolMfaConfigCommand,
  SetUserPoolMfaConfigRequest$,
  SetUserPoolMfaConfigResponse$,
  SetUserSettings$,
  SetUserSettingsCommand,
  SetUserSettingsRequest$,
  SetUserSettingsResponse$,
  SignInPolicyType$,
  SignUp$,
  SignUpCommand,
  SignUpRequest$,
  SignUpResponse$,
  SmsConfigurationType$,
  SmsMfaConfigType$,
  SMSMfaSettingsType$,
  SoftwareTokenMfaConfigType$,
  SoftwareTokenMFANotFoundException,
  SoftwareTokenMFANotFoundException$,
  SoftwareTokenMfaSettingsType$,
  StartUserImportJob$,
  StartUserImportJobCommand,
  StartUserImportJobRequest$,
  StartUserImportJobResponse$,
  StartWebAuthnRegistration$,
  StartWebAuthnRegistrationCommand,
  StartWebAuthnRegistrationRequest$,
  StartWebAuthnRegistrationResponse$,
  StatusType,
  StopUserImportJob$,
  StopUserImportJobCommand,
  StopUserImportJobRequest$,
  StopUserImportJobResponse$,
  StringAttributeConstraintsType$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TermsDescriptionType$,
  TermsEnforcementType,
  TermsExistsException,
  TermsExistsException$,
  TermsSourceType,
  TermsType$,
  TierChangeNotAllowedException,
  TierChangeNotAllowedException$,
  TimeUnitsType,
  TokenValidityUnitsType$,
  TooManyFailedAttemptsException,
  TooManyFailedAttemptsException$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UICustomizationType$,
  UnauthorizedException,
  UnauthorizedException$,
  UnexpectedLambdaException,
  UnexpectedLambdaException$,
  UnsupportedIdentityProviderException,
  UnsupportedIdentityProviderException$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UnsupportedTokenTypeException,
  UnsupportedTokenTypeException$,
  UnsupportedUserStateException,
  UnsupportedUserStateException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAuthEventFeedback$,
  UpdateAuthEventFeedbackCommand,
  UpdateAuthEventFeedbackRequest$,
  UpdateAuthEventFeedbackResponse$,
  UpdateDeviceStatus$,
  UpdateDeviceStatusCommand,
  UpdateDeviceStatusRequest$,
  UpdateDeviceStatusResponse$,
  UpdateGroup$,
  UpdateGroupCommand,
  UpdateGroupRequest$,
  UpdateGroupResponse$,
  UpdateIdentityProvider$,
  UpdateIdentityProviderCommand,
  UpdateIdentityProviderRequest$,
  UpdateIdentityProviderResponse$,
  UpdateManagedLoginBranding$,
  UpdateManagedLoginBrandingCommand,
  UpdateManagedLoginBrandingRequest$,
  UpdateManagedLoginBrandingResponse$,
  UpdateResourceServer$,
  UpdateResourceServerCommand,
  UpdateResourceServerRequest$,
  UpdateResourceServerResponse$,
  UpdateTerms$,
  UpdateTermsCommand,
  UpdateTermsRequest$,
  UpdateTermsResponse$,
  UpdateUserAttributes$,
  UpdateUserAttributesCommand,
  UpdateUserAttributesRequest$,
  UpdateUserAttributesResponse$,
  UpdateUserPool$,
  UpdateUserPoolClient$,
  UpdateUserPoolClientCommand,
  UpdateUserPoolClientRequest$,
  UpdateUserPoolClientResponse$,
  UpdateUserPoolCommand,
  UpdateUserPoolDomain$,
  UpdateUserPoolDomainCommand,
  UpdateUserPoolDomainRequest$,
  UpdateUserPoolDomainResponse$,
  UpdateUserPoolRequest$,
  UpdateUserPoolResponse$,
  UserAttributeUpdateSettingsType$,
  UserContextDataType$,
  UserImportInProgressException,
  UserImportInProgressException$,
  UserImportJobStatusType,
  UserImportJobType$,
  UserLambdaValidationException,
  UserLambdaValidationException$,
  UsernameAttributeType,
  UsernameConfigurationType$,
  UsernameExistsException,
  UsernameExistsException$,
  UserNotConfirmedException,
  UserNotConfirmedException$,
  UserNotFoundException,
  UserNotFoundException$,
  UserPoolAddOnNotEnabledException,
  UserPoolAddOnNotEnabledException$,
  UserPoolAddOnsType$,
  UserPoolClientDescription$,
  UserPoolClientType$,
  UserPoolDescriptionType$,
  UserPoolMfaType,
  UserPoolPolicyType$,
  UserPoolTaggingException,
  UserPoolTaggingException$,
  UserPoolTierType,
  UserPoolType$,
  UserStatusType,
  UserType$,
  UserVerificationType,
  VerificationMessageTemplateType$,
  VerifiedAttributeType,
  VerifySoftwareToken$,
  VerifySoftwareTokenCommand,
  VerifySoftwareTokenRequest$,
  VerifySoftwareTokenResponse$,
  VerifySoftwareTokenResponseType,
  VerifyUserAttribute$,
  VerifyUserAttributeCommand,
  VerifyUserAttributeRequest$,
  VerifyUserAttributeResponse$,
  WebAuthnChallengeNotFoundException,
  WebAuthnChallengeNotFoundException$,
  WebAuthnClientMismatchException,
  WebAuthnClientMismatchException$,
  WebAuthnConfigurationMissingException,
  WebAuthnConfigurationMissingException$,
  WebAuthnConfigurationType$,
  WebAuthnCredentialDescription$,
  WebAuthnCredentialNotSupportedException,
  WebAuthnCredentialNotSupportedException$,
  WebAuthnNotEnabledException,
  WebAuthnNotEnabledException$,
  WebAuthnOriginNotAllowedException,
  WebAuthnOriginNotAllowedException$,
  WebAuthnRelyingPartyMismatchException,
  WebAuthnRelyingPartyMismatchException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CognitoIdentityProviderClient === "function");
assert(typeof CognitoIdentityProvider === "function");
// commands
assert(typeof AddCustomAttributesCommand === "function");
assert(typeof AddCustomAttributes$ === "object");
assert(typeof AdminAddUserToGroupCommand === "function");
assert(typeof AdminAddUserToGroup$ === "object");
assert(typeof AdminConfirmSignUpCommand === "function");
assert(typeof AdminConfirmSignUp$ === "object");
assert(typeof AdminCreateUserCommand === "function");
assert(typeof AdminCreateUser$ === "object");
assert(typeof AdminDeleteUserCommand === "function");
assert(typeof AdminDeleteUser$ === "object");
assert(typeof AdminDeleteUserAttributesCommand === "function");
assert(typeof AdminDeleteUserAttributes$ === "object");
assert(typeof AdminDisableProviderForUserCommand === "function");
assert(typeof AdminDisableProviderForUser$ === "object");
assert(typeof AdminDisableUserCommand === "function");
assert(typeof AdminDisableUser$ === "object");
assert(typeof AdminEnableUserCommand === "function");
assert(typeof AdminEnableUser$ === "object");
assert(typeof AdminForgetDeviceCommand === "function");
assert(typeof AdminForgetDevice$ === "object");
assert(typeof AdminGetDeviceCommand === "function");
assert(typeof AdminGetDevice$ === "object");
assert(typeof AdminGetUserCommand === "function");
assert(typeof AdminGetUser$ === "object");
assert(typeof AdminInitiateAuthCommand === "function");
assert(typeof AdminInitiateAuth$ === "object");
assert(typeof AdminLinkProviderForUserCommand === "function");
assert(typeof AdminLinkProviderForUser$ === "object");
assert(typeof AdminListDevicesCommand === "function");
assert(typeof AdminListDevices$ === "object");
assert(typeof AdminListGroupsForUserCommand === "function");
assert(typeof AdminListGroupsForUser$ === "object");
assert(typeof AdminListUserAuthEventsCommand === "function");
assert(typeof AdminListUserAuthEvents$ === "object");
assert(typeof AdminRemoveUserFromGroupCommand === "function");
assert(typeof AdminRemoveUserFromGroup$ === "object");
assert(typeof AdminResetUserPasswordCommand === "function");
assert(typeof AdminResetUserPassword$ === "object");
assert(typeof AdminRespondToAuthChallengeCommand === "function");
assert(typeof AdminRespondToAuthChallenge$ === "object");
assert(typeof AdminSetUserMFAPreferenceCommand === "function");
assert(typeof AdminSetUserMFAPreference$ === "object");
assert(typeof AdminSetUserPasswordCommand === "function");
assert(typeof AdminSetUserPassword$ === "object");
assert(typeof AdminSetUserSettingsCommand === "function");
assert(typeof AdminSetUserSettings$ === "object");
assert(typeof AdminUpdateAuthEventFeedbackCommand === "function");
assert(typeof AdminUpdateAuthEventFeedback$ === "object");
assert(typeof AdminUpdateDeviceStatusCommand === "function");
assert(typeof AdminUpdateDeviceStatus$ === "object");
assert(typeof AdminUpdateUserAttributesCommand === "function");
assert(typeof AdminUpdateUserAttributes$ === "object");
assert(typeof AdminUserGlobalSignOutCommand === "function");
assert(typeof AdminUserGlobalSignOut$ === "object");
assert(typeof AssociateSoftwareTokenCommand === "function");
assert(typeof AssociateSoftwareToken$ === "object");
assert(typeof ChangePasswordCommand === "function");
assert(typeof ChangePassword$ === "object");
assert(typeof CompleteWebAuthnRegistrationCommand === "function");
assert(typeof CompleteWebAuthnRegistration$ === "object");
assert(typeof ConfirmDeviceCommand === "function");
assert(typeof ConfirmDevice$ === "object");
assert(typeof ConfirmForgotPasswordCommand === "function");
assert(typeof ConfirmForgotPassword$ === "object");
assert(typeof ConfirmSignUpCommand === "function");
assert(typeof ConfirmSignUp$ === "object");
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateGroup$ === "object");
assert(typeof CreateIdentityProviderCommand === "function");
assert(typeof CreateIdentityProvider$ === "object");
assert(typeof CreateManagedLoginBrandingCommand === "function");
assert(typeof CreateManagedLoginBranding$ === "object");
assert(typeof CreateResourceServerCommand === "function");
assert(typeof CreateResourceServer$ === "object");
assert(typeof CreateTermsCommand === "function");
assert(typeof CreateTerms$ === "object");
assert(typeof CreateUserImportJobCommand === "function");
assert(typeof CreateUserImportJob$ === "object");
assert(typeof CreateUserPoolCommand === "function");
assert(typeof CreateUserPool$ === "object");
assert(typeof CreateUserPoolClientCommand === "function");
assert(typeof CreateUserPoolClient$ === "object");
assert(typeof CreateUserPoolDomainCommand === "function");
assert(typeof CreateUserPoolDomain$ === "object");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteGroup$ === "object");
assert(typeof DeleteIdentityProviderCommand === "function");
assert(typeof DeleteIdentityProvider$ === "object");
assert(typeof DeleteManagedLoginBrandingCommand === "function");
assert(typeof DeleteManagedLoginBranding$ === "object");
assert(typeof DeleteResourceServerCommand === "function");
assert(typeof DeleteResourceServer$ === "object");
assert(typeof DeleteTermsCommand === "function");
assert(typeof DeleteTerms$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DeleteUserAttributesCommand === "function");
assert(typeof DeleteUserAttributes$ === "object");
assert(typeof DeleteUserPoolCommand === "function");
assert(typeof DeleteUserPool$ === "object");
assert(typeof DeleteUserPoolClientCommand === "function");
assert(typeof DeleteUserPoolClient$ === "object");
assert(typeof DeleteUserPoolDomainCommand === "function");
assert(typeof DeleteUserPoolDomain$ === "object");
assert(typeof DeleteWebAuthnCredentialCommand === "function");
assert(typeof DeleteWebAuthnCredential$ === "object");
assert(typeof DescribeIdentityProviderCommand === "function");
assert(typeof DescribeIdentityProvider$ === "object");
assert(typeof DescribeManagedLoginBrandingCommand === "function");
assert(typeof DescribeManagedLoginBranding$ === "object");
assert(typeof DescribeManagedLoginBrandingByClientCommand === "function");
assert(typeof DescribeManagedLoginBrandingByClient$ === "object");
assert(typeof DescribeResourceServerCommand === "function");
assert(typeof DescribeResourceServer$ === "object");
assert(typeof DescribeRiskConfigurationCommand === "function");
assert(typeof DescribeRiskConfiguration$ === "object");
assert(typeof DescribeTermsCommand === "function");
assert(typeof DescribeTerms$ === "object");
assert(typeof DescribeUserImportJobCommand === "function");
assert(typeof DescribeUserImportJob$ === "object");
assert(typeof DescribeUserPoolCommand === "function");
assert(typeof DescribeUserPool$ === "object");
assert(typeof DescribeUserPoolClientCommand === "function");
assert(typeof DescribeUserPoolClient$ === "object");
assert(typeof DescribeUserPoolDomainCommand === "function");
assert(typeof DescribeUserPoolDomain$ === "object");
assert(typeof ForgetDeviceCommand === "function");
assert(typeof ForgetDevice$ === "object");
assert(typeof ForgotPasswordCommand === "function");
assert(typeof ForgotPassword$ === "object");
assert(typeof GetCSVHeaderCommand === "function");
assert(typeof GetCSVHeader$ === "object");
assert(typeof GetDeviceCommand === "function");
assert(typeof GetDevice$ === "object");
assert(typeof GetGroupCommand === "function");
assert(typeof GetGroup$ === "object");
assert(typeof GetIdentityProviderByIdentifierCommand === "function");
assert(typeof GetIdentityProviderByIdentifier$ === "object");
assert(typeof GetLogDeliveryConfigurationCommand === "function");
assert(typeof GetLogDeliveryConfiguration$ === "object");
assert(typeof GetSigningCertificateCommand === "function");
assert(typeof GetSigningCertificate$ === "object");
assert(typeof GetTokensFromRefreshTokenCommand === "function");
assert(typeof GetTokensFromRefreshToken$ === "object");
assert(typeof GetUICustomizationCommand === "function");
assert(typeof GetUICustomization$ === "object");
assert(typeof GetUserCommand === "function");
assert(typeof GetUser$ === "object");
assert(typeof GetUserAttributeVerificationCodeCommand === "function");
assert(typeof GetUserAttributeVerificationCode$ === "object");
assert(typeof GetUserAuthFactorsCommand === "function");
assert(typeof GetUserAuthFactors$ === "object");
assert(typeof GetUserPoolMfaConfigCommand === "function");
assert(typeof GetUserPoolMfaConfig$ === "object");
assert(typeof GlobalSignOutCommand === "function");
assert(typeof GlobalSignOut$ === "object");
assert(typeof InitiateAuthCommand === "function");
assert(typeof InitiateAuth$ === "object");
assert(typeof ListDevicesCommand === "function");
assert(typeof ListDevices$ === "object");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroups$ === "object");
assert(typeof ListIdentityProvidersCommand === "function");
assert(typeof ListIdentityProviders$ === "object");
assert(typeof ListResourceServersCommand === "function");
assert(typeof ListResourceServers$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTermsCommand === "function");
assert(typeof ListTerms$ === "object");
assert(typeof ListUserImportJobsCommand === "function");
assert(typeof ListUserImportJobs$ === "object");
assert(typeof ListUserPoolClientsCommand === "function");
assert(typeof ListUserPoolClients$ === "object");
assert(typeof ListUserPoolsCommand === "function");
assert(typeof ListUserPools$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof ListUsersInGroupCommand === "function");
assert(typeof ListUsersInGroup$ === "object");
assert(typeof ListWebAuthnCredentialsCommand === "function");
assert(typeof ListWebAuthnCredentials$ === "object");
assert(typeof ResendConfirmationCodeCommand === "function");
assert(typeof ResendConfirmationCode$ === "object");
assert(typeof RespondToAuthChallengeCommand === "function");
assert(typeof RespondToAuthChallenge$ === "object");
assert(typeof RevokeTokenCommand === "function");
assert(typeof RevokeToken$ === "object");
assert(typeof SetLogDeliveryConfigurationCommand === "function");
assert(typeof SetLogDeliveryConfiguration$ === "object");
assert(typeof SetRiskConfigurationCommand === "function");
assert(typeof SetRiskConfiguration$ === "object");
assert(typeof SetUICustomizationCommand === "function");
assert(typeof SetUICustomization$ === "object");
assert(typeof SetUserMFAPreferenceCommand === "function");
assert(typeof SetUserMFAPreference$ === "object");
assert(typeof SetUserPoolMfaConfigCommand === "function");
assert(typeof SetUserPoolMfaConfig$ === "object");
assert(typeof SetUserSettingsCommand === "function");
assert(typeof SetUserSettings$ === "object");
assert(typeof SignUpCommand === "function");
assert(typeof SignUp$ === "object");
assert(typeof StartUserImportJobCommand === "function");
assert(typeof StartUserImportJob$ === "object");
assert(typeof StartWebAuthnRegistrationCommand === "function");
assert(typeof StartWebAuthnRegistration$ === "object");
assert(typeof StopUserImportJobCommand === "function");
assert(typeof StopUserImportJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAuthEventFeedbackCommand === "function");
assert(typeof UpdateAuthEventFeedback$ === "object");
assert(typeof UpdateDeviceStatusCommand === "function");
assert(typeof UpdateDeviceStatus$ === "object");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateGroup$ === "object");
assert(typeof UpdateIdentityProviderCommand === "function");
assert(typeof UpdateIdentityProvider$ === "object");
assert(typeof UpdateManagedLoginBrandingCommand === "function");
assert(typeof UpdateManagedLoginBranding$ === "object");
assert(typeof UpdateResourceServerCommand === "function");
assert(typeof UpdateResourceServer$ === "object");
assert(typeof UpdateTermsCommand === "function");
assert(typeof UpdateTerms$ === "object");
assert(typeof UpdateUserAttributesCommand === "function");
assert(typeof UpdateUserAttributes$ === "object");
assert(typeof UpdateUserPoolCommand === "function");
assert(typeof UpdateUserPool$ === "object");
assert(typeof UpdateUserPoolClientCommand === "function");
assert(typeof UpdateUserPoolClient$ === "object");
assert(typeof UpdateUserPoolDomainCommand === "function");
assert(typeof UpdateUserPoolDomain$ === "object");
assert(typeof VerifySoftwareTokenCommand === "function");
assert(typeof VerifySoftwareToken$ === "object");
assert(typeof VerifyUserAttributeCommand === "function");
assert(typeof VerifyUserAttribute$ === "object");
// structural schemas
assert(typeof AccountRecoverySettingType$ === "object");
assert(typeof AccountTakeoverActionsType$ === "object");
assert(typeof AccountTakeoverActionType$ === "object");
assert(typeof AccountTakeoverRiskConfigurationType$ === "object");
assert(typeof AddCustomAttributesRequest$ === "object");
assert(typeof AddCustomAttributesResponse$ === "object");
assert(typeof AdminAddUserToGroupRequest$ === "object");
assert(typeof AdminConfirmSignUpRequest$ === "object");
assert(typeof AdminConfirmSignUpResponse$ === "object");
assert(typeof AdminCreateUserConfigType$ === "object");
assert(typeof AdminCreateUserRequest$ === "object");
assert(typeof AdminCreateUserResponse$ === "object");
assert(typeof AdminDeleteUserAttributesRequest$ === "object");
assert(typeof AdminDeleteUserAttributesResponse$ === "object");
assert(typeof AdminDeleteUserRequest$ === "object");
assert(typeof AdminDisableProviderForUserRequest$ === "object");
assert(typeof AdminDisableProviderForUserResponse$ === "object");
assert(typeof AdminDisableUserRequest$ === "object");
assert(typeof AdminDisableUserResponse$ === "object");
assert(typeof AdminEnableUserRequest$ === "object");
assert(typeof AdminEnableUserResponse$ === "object");
assert(typeof AdminForgetDeviceRequest$ === "object");
assert(typeof AdminGetDeviceRequest$ === "object");
assert(typeof AdminGetDeviceResponse$ === "object");
assert(typeof AdminGetUserRequest$ === "object");
assert(typeof AdminGetUserResponse$ === "object");
assert(typeof AdminInitiateAuthRequest$ === "object");
assert(typeof AdminInitiateAuthResponse$ === "object");
assert(typeof AdminLinkProviderForUserRequest$ === "object");
assert(typeof AdminLinkProviderForUserResponse$ === "object");
assert(typeof AdminListDevicesRequest$ === "object");
assert(typeof AdminListDevicesResponse$ === "object");
assert(typeof AdminListGroupsForUserRequest$ === "object");
assert(typeof AdminListGroupsForUserResponse$ === "object");
assert(typeof AdminListUserAuthEventsRequest$ === "object");
assert(typeof AdminListUserAuthEventsResponse$ === "object");
assert(typeof AdminRemoveUserFromGroupRequest$ === "object");
assert(typeof AdminResetUserPasswordRequest$ === "object");
assert(typeof AdminResetUserPasswordResponse$ === "object");
assert(typeof AdminRespondToAuthChallengeRequest$ === "object");
assert(typeof AdminRespondToAuthChallengeResponse$ === "object");
assert(typeof AdminSetUserMFAPreferenceRequest$ === "object");
assert(typeof AdminSetUserMFAPreferenceResponse$ === "object");
assert(typeof AdminSetUserPasswordRequest$ === "object");
assert(typeof AdminSetUserPasswordResponse$ === "object");
assert(typeof AdminSetUserSettingsRequest$ === "object");
assert(typeof AdminSetUserSettingsResponse$ === "object");
assert(typeof AdminUpdateAuthEventFeedbackRequest$ === "object");
assert(typeof AdminUpdateAuthEventFeedbackResponse$ === "object");
assert(typeof AdminUpdateDeviceStatusRequest$ === "object");
assert(typeof AdminUpdateDeviceStatusResponse$ === "object");
assert(typeof AdminUpdateUserAttributesRequest$ === "object");
assert(typeof AdminUpdateUserAttributesResponse$ === "object");
assert(typeof AdminUserGlobalSignOutRequest$ === "object");
assert(typeof AdminUserGlobalSignOutResponse$ === "object");
assert(typeof AdvancedSecurityAdditionalFlowsType$ === "object");
assert(typeof AnalyticsConfigurationType$ === "object");
assert(typeof AnalyticsMetadataType$ === "object");
assert(typeof AssetType$ === "object");
assert(typeof AssociateSoftwareTokenRequest$ === "object");
assert(typeof AssociateSoftwareTokenResponse$ === "object");
assert(typeof AttributeType$ === "object");
assert(typeof AuthenticationResultType$ === "object");
assert(typeof AuthEventType$ === "object");
assert(typeof ChallengeResponseType$ === "object");
assert(typeof ChangePasswordRequest$ === "object");
assert(typeof ChangePasswordResponse$ === "object");
assert(typeof CloudWatchLogsConfigurationType$ === "object");
assert(typeof CodeDeliveryDetailsType$ === "object");
assert(typeof CompleteWebAuthnRegistrationRequest$ === "object");
assert(typeof CompleteWebAuthnRegistrationResponse$ === "object");
assert(typeof CompromisedCredentialsActionsType$ === "object");
assert(typeof CompromisedCredentialsRiskConfigurationType$ === "object");
assert(typeof ConfirmDeviceRequest$ === "object");
assert(typeof ConfirmDeviceResponse$ === "object");
assert(typeof ConfirmForgotPasswordRequest$ === "object");
assert(typeof ConfirmForgotPasswordResponse$ === "object");
assert(typeof ConfirmSignUpRequest$ === "object");
assert(typeof ConfirmSignUpResponse$ === "object");
assert(typeof ContextDataType$ === "object");
assert(typeof CreateGroupRequest$ === "object");
assert(typeof CreateGroupResponse$ === "object");
assert(typeof CreateIdentityProviderRequest$ === "object");
assert(typeof CreateIdentityProviderResponse$ === "object");
assert(typeof CreateManagedLoginBrandingRequest$ === "object");
assert(typeof CreateManagedLoginBrandingResponse$ === "object");
assert(typeof CreateResourceServerRequest$ === "object");
assert(typeof CreateResourceServerResponse$ === "object");
assert(typeof CreateTermsRequest$ === "object");
assert(typeof CreateTermsResponse$ === "object");
assert(typeof CreateUserImportJobRequest$ === "object");
assert(typeof CreateUserImportJobResponse$ === "object");
assert(typeof CreateUserPoolClientRequest$ === "object");
assert(typeof CreateUserPoolClientResponse$ === "object");
assert(typeof CreateUserPoolDomainRequest$ === "object");
assert(typeof CreateUserPoolDomainResponse$ === "object");
assert(typeof CreateUserPoolRequest$ === "object");
assert(typeof CreateUserPoolResponse$ === "object");
assert(typeof CustomDomainConfigType$ === "object");
assert(typeof CustomEmailLambdaVersionConfigType$ === "object");
assert(typeof CustomSMSLambdaVersionConfigType$ === "object");
assert(typeof DeleteGroupRequest$ === "object");
assert(typeof DeleteIdentityProviderRequest$ === "object");
assert(typeof DeleteManagedLoginBrandingRequest$ === "object");
assert(typeof DeleteResourceServerRequest$ === "object");
assert(typeof DeleteTermsRequest$ === "object");
assert(typeof DeleteUserAttributesRequest$ === "object");
assert(typeof DeleteUserAttributesResponse$ === "object");
assert(typeof DeleteUserPoolClientRequest$ === "object");
assert(typeof DeleteUserPoolDomainRequest$ === "object");
assert(typeof DeleteUserPoolDomainResponse$ === "object");
assert(typeof DeleteUserPoolRequest$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteWebAuthnCredentialRequest$ === "object");
assert(typeof DeleteWebAuthnCredentialResponse$ === "object");
assert(typeof DescribeIdentityProviderRequest$ === "object");
assert(typeof DescribeIdentityProviderResponse$ === "object");
assert(typeof DescribeManagedLoginBrandingByClientRequest$ === "object");
assert(typeof DescribeManagedLoginBrandingByClientResponse$ === "object");
assert(typeof DescribeManagedLoginBrandingRequest$ === "object");
assert(typeof DescribeManagedLoginBrandingResponse$ === "object");
assert(typeof DescribeResourceServerRequest$ === "object");
assert(typeof DescribeResourceServerResponse$ === "object");
assert(typeof DescribeRiskConfigurationRequest$ === "object");
assert(typeof DescribeRiskConfigurationResponse$ === "object");
assert(typeof DescribeTermsRequest$ === "object");
assert(typeof DescribeTermsResponse$ === "object");
assert(typeof DescribeUserImportJobRequest$ === "object");
assert(typeof DescribeUserImportJobResponse$ === "object");
assert(typeof DescribeUserPoolClientRequest$ === "object");
assert(typeof DescribeUserPoolClientResponse$ === "object");
assert(typeof DescribeUserPoolDomainRequest$ === "object");
assert(typeof DescribeUserPoolDomainResponse$ === "object");
assert(typeof DescribeUserPoolRequest$ === "object");
assert(typeof DescribeUserPoolResponse$ === "object");
assert(typeof DeviceConfigurationType$ === "object");
assert(typeof DeviceSecretVerifierConfigType$ === "object");
assert(typeof DeviceType$ === "object");
assert(typeof DomainDescriptionType$ === "object");
assert(typeof EmailConfigurationType$ === "object");
assert(typeof EmailMfaConfigType$ === "object");
assert(typeof EmailMfaSettingsType$ === "object");
assert(typeof EventContextDataType$ === "object");
assert(typeof EventFeedbackType$ === "object");
assert(typeof EventRiskType$ === "object");
assert(typeof FirehoseConfigurationType$ === "object");
assert(typeof ForgetDeviceRequest$ === "object");
assert(typeof ForgotPasswordRequest$ === "object");
assert(typeof ForgotPasswordResponse$ === "object");
assert(typeof GetCSVHeaderRequest$ === "object");
assert(typeof GetCSVHeaderResponse$ === "object");
assert(typeof GetDeviceRequest$ === "object");
assert(typeof GetDeviceResponse$ === "object");
assert(typeof GetGroupRequest$ === "object");
assert(typeof GetGroupResponse$ === "object");
assert(typeof GetIdentityProviderByIdentifierRequest$ === "object");
assert(typeof GetIdentityProviderByIdentifierResponse$ === "object");
assert(typeof GetLogDeliveryConfigurationRequest$ === "object");
assert(typeof GetLogDeliveryConfigurationResponse$ === "object");
assert(typeof GetSigningCertificateRequest$ === "object");
assert(typeof GetSigningCertificateResponse$ === "object");
assert(typeof GetTokensFromRefreshTokenRequest$ === "object");
assert(typeof GetTokensFromRefreshTokenResponse$ === "object");
assert(typeof GetUICustomizationRequest$ === "object");
assert(typeof GetUICustomizationResponse$ === "object");
assert(typeof GetUserAttributeVerificationCodeRequest$ === "object");
assert(typeof GetUserAttributeVerificationCodeResponse$ === "object");
assert(typeof GetUserAuthFactorsRequest$ === "object");
assert(typeof GetUserAuthFactorsResponse$ === "object");
assert(typeof GetUserPoolMfaConfigRequest$ === "object");
assert(typeof GetUserPoolMfaConfigResponse$ === "object");
assert(typeof GetUserRequest$ === "object");
assert(typeof GetUserResponse$ === "object");
assert(typeof GlobalSignOutRequest$ === "object");
assert(typeof GlobalSignOutResponse$ === "object");
assert(typeof GroupType$ === "object");
assert(typeof HttpHeader$ === "object");
assert(typeof IdentityProviderType$ === "object");
assert(typeof InitiateAuthRequest$ === "object");
assert(typeof InitiateAuthResponse$ === "object");
assert(typeof LambdaConfigType$ === "object");
assert(typeof ListDevicesRequest$ === "object");
assert(typeof ListDevicesResponse$ === "object");
assert(typeof ListGroupsRequest$ === "object");
assert(typeof ListGroupsResponse$ === "object");
assert(typeof ListIdentityProvidersRequest$ === "object");
assert(typeof ListIdentityProvidersResponse$ === "object");
assert(typeof ListResourceServersRequest$ === "object");
assert(typeof ListResourceServersResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTermsRequest$ === "object");
assert(typeof ListTermsResponse$ === "object");
assert(typeof ListUserImportJobsRequest$ === "object");
assert(typeof ListUserImportJobsResponse$ === "object");
assert(typeof ListUserPoolClientsRequest$ === "object");
assert(typeof ListUserPoolClientsResponse$ === "object");
assert(typeof ListUserPoolsRequest$ === "object");
assert(typeof ListUserPoolsResponse$ === "object");
assert(typeof ListUsersInGroupRequest$ === "object");
assert(typeof ListUsersInGroupResponse$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResponse$ === "object");
assert(typeof ListWebAuthnCredentialsRequest$ === "object");
assert(typeof ListWebAuthnCredentialsResponse$ === "object");
assert(typeof LogConfigurationType$ === "object");
assert(typeof LogDeliveryConfigurationType$ === "object");
assert(typeof ManagedLoginBrandingType$ === "object");
assert(typeof MessageTemplateType$ === "object");
assert(typeof MFAOptionType$ === "object");
assert(typeof NewDeviceMetadataType$ === "object");
assert(typeof NotifyConfigurationType$ === "object");
assert(typeof NotifyEmailType$ === "object");
assert(typeof NumberAttributeConstraintsType$ === "object");
assert(typeof PasswordPolicyType$ === "object");
assert(typeof PreTokenGenerationVersionConfigType$ === "object");
assert(typeof ProviderDescription$ === "object");
assert(typeof ProviderUserIdentifierType$ === "object");
assert(typeof RecoveryOptionType$ === "object");
assert(typeof RefreshTokenRotationType$ === "object");
assert(typeof ResendConfirmationCodeRequest$ === "object");
assert(typeof ResendConfirmationCodeResponse$ === "object");
assert(typeof ResourceServerScopeType$ === "object");
assert(typeof ResourceServerType$ === "object");
assert(typeof RespondToAuthChallengeRequest$ === "object");
assert(typeof RespondToAuthChallengeResponse$ === "object");
assert(typeof RevokeTokenRequest$ === "object");
assert(typeof RevokeTokenResponse$ === "object");
assert(typeof RiskConfigurationType$ === "object");
assert(typeof RiskExceptionConfigurationType$ === "object");
assert(typeof S3ConfigurationType$ === "object");
assert(typeof SchemaAttributeType$ === "object");
assert(typeof SetLogDeliveryConfigurationRequest$ === "object");
assert(typeof SetLogDeliveryConfigurationResponse$ === "object");
assert(typeof SetRiskConfigurationRequest$ === "object");
assert(typeof SetRiskConfigurationResponse$ === "object");
assert(typeof SetUICustomizationRequest$ === "object");
assert(typeof SetUICustomizationResponse$ === "object");
assert(typeof SetUserMFAPreferenceRequest$ === "object");
assert(typeof SetUserMFAPreferenceResponse$ === "object");
assert(typeof SetUserPoolMfaConfigRequest$ === "object");
assert(typeof SetUserPoolMfaConfigResponse$ === "object");
assert(typeof SetUserSettingsRequest$ === "object");
assert(typeof SetUserSettingsResponse$ === "object");
assert(typeof SignInPolicyType$ === "object");
assert(typeof SignUpRequest$ === "object");
assert(typeof SignUpResponse$ === "object");
assert(typeof SmsConfigurationType$ === "object");
assert(typeof SmsMfaConfigType$ === "object");
assert(typeof SMSMfaSettingsType$ === "object");
assert(typeof SoftwareTokenMfaConfigType$ === "object");
assert(typeof SoftwareTokenMfaSettingsType$ === "object");
assert(typeof StartUserImportJobRequest$ === "object");
assert(typeof StartUserImportJobResponse$ === "object");
assert(typeof StartWebAuthnRegistrationRequest$ === "object");
assert(typeof StartWebAuthnRegistrationResponse$ === "object");
assert(typeof StopUserImportJobRequest$ === "object");
assert(typeof StopUserImportJobResponse$ === "object");
assert(typeof StringAttributeConstraintsType$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TermsDescriptionType$ === "object");
assert(typeof TermsType$ === "object");
assert(typeof TokenValidityUnitsType$ === "object");
assert(typeof UICustomizationType$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAuthEventFeedbackRequest$ === "object");
assert(typeof UpdateAuthEventFeedbackResponse$ === "object");
assert(typeof UpdateDeviceStatusRequest$ === "object");
assert(typeof UpdateDeviceStatusResponse$ === "object");
assert(typeof UpdateGroupRequest$ === "object");
assert(typeof UpdateGroupResponse$ === "object");
assert(typeof UpdateIdentityProviderRequest$ === "object");
assert(typeof UpdateIdentityProviderResponse$ === "object");
assert(typeof UpdateManagedLoginBrandingRequest$ === "object");
assert(typeof UpdateManagedLoginBrandingResponse$ === "object");
assert(typeof UpdateResourceServerRequest$ === "object");
assert(typeof UpdateResourceServerResponse$ === "object");
assert(typeof UpdateTermsRequest$ === "object");
assert(typeof UpdateTermsResponse$ === "object");
assert(typeof UpdateUserAttributesRequest$ === "object");
assert(typeof UpdateUserAttributesResponse$ === "object");
assert(typeof UpdateUserPoolClientRequest$ === "object");
assert(typeof UpdateUserPoolClientResponse$ === "object");
assert(typeof UpdateUserPoolDomainRequest$ === "object");
assert(typeof UpdateUserPoolDomainResponse$ === "object");
assert(typeof UpdateUserPoolRequest$ === "object");
assert(typeof UpdateUserPoolResponse$ === "object");
assert(typeof UserAttributeUpdateSettingsType$ === "object");
assert(typeof UserContextDataType$ === "object");
assert(typeof UserImportJobType$ === "object");
assert(typeof UsernameConfigurationType$ === "object");
assert(typeof UserPoolAddOnsType$ === "object");
assert(typeof UserPoolClientDescription$ === "object");
assert(typeof UserPoolClientType$ === "object");
assert(typeof UserPoolDescriptionType$ === "object");
assert(typeof UserPoolPolicyType$ === "object");
assert(typeof UserPoolType$ === "object");
assert(typeof UserType$ === "object");
assert(typeof VerificationMessageTemplateType$ === "object");
assert(typeof VerifySoftwareTokenRequest$ === "object");
assert(typeof VerifySoftwareTokenResponse$ === "object");
assert(typeof VerifyUserAttributeRequest$ === "object");
assert(typeof VerifyUserAttributeResponse$ === "object");
assert(typeof WebAuthnConfigurationType$ === "object");
assert(typeof WebAuthnCredentialDescription$ === "object");
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
assert(AliasExistsException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof AliasExistsException$ === "object");
assert(CodeDeliveryFailureException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof CodeDeliveryFailureException$ === "object");
assert(CodeMismatchException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof CodeMismatchException$ === "object");
assert(ConcurrentModificationException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(DeviceKeyExistsException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof DeviceKeyExistsException$ === "object");
assert(DuplicateProviderException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof DuplicateProviderException$ === "object");
assert(EnableSoftwareTokenMFAException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof EnableSoftwareTokenMFAException$ === "object");
assert(ExpiredCodeException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof ExpiredCodeException$ === "object");
assert(FeatureUnavailableInTierException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof FeatureUnavailableInTierException$ === "object");
assert(ForbiddenException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof ForbiddenException$ === "object");
assert(GroupExistsException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof GroupExistsException$ === "object");
assert(InternalErrorException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof InternalErrorException$ === "object");
assert(InvalidEmailRoleAccessPolicyException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof InvalidEmailRoleAccessPolicyException$ === "object");
assert(InvalidLambdaResponseException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof InvalidLambdaResponseException$ === "object");
assert(InvalidOAuthFlowException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof InvalidOAuthFlowException$ === "object");
assert(InvalidParameterException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidPasswordException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof InvalidPasswordException$ === "object");
assert(InvalidSmsRoleAccessPolicyException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof InvalidSmsRoleAccessPolicyException$ === "object");
assert(InvalidSmsRoleTrustRelationshipException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof InvalidSmsRoleTrustRelationshipException$ === "object");
assert(InvalidUserPoolConfigurationException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof InvalidUserPoolConfigurationException$ === "object");
assert(LimitExceededException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ManagedLoginBrandingExistsException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof ManagedLoginBrandingExistsException$ === "object");
assert(MFAMethodNotFoundException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof MFAMethodNotFoundException$ === "object");
assert(NotAuthorizedException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof NotAuthorizedException$ === "object");
assert(PasswordHistoryPolicyViolationException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof PasswordHistoryPolicyViolationException$ === "object");
assert(PasswordResetRequiredException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof PasswordResetRequiredException$ === "object");
assert(PreconditionNotMetException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof PreconditionNotMetException$ === "object");
assert(RefreshTokenReuseException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof RefreshTokenReuseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ScopeDoesNotExistException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof ScopeDoesNotExistException$ === "object");
assert(SoftwareTokenMFANotFoundException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof SoftwareTokenMFANotFoundException$ === "object");
assert(TermsExistsException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof TermsExistsException$ === "object");
assert(TierChangeNotAllowedException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof TierChangeNotAllowedException$ === "object");
assert(TooManyFailedAttemptsException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof TooManyFailedAttemptsException$ === "object");
assert(TooManyRequestsException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnauthorizedException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(UnexpectedLambdaException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UnexpectedLambdaException$ === "object");
assert(UnsupportedIdentityProviderException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UnsupportedIdentityProviderException$ === "object");
assert(UnsupportedOperationException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(UnsupportedTokenTypeException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UnsupportedTokenTypeException$ === "object");
assert(UnsupportedUserStateException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UnsupportedUserStateException$ === "object");
assert(UserImportInProgressException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UserImportInProgressException$ === "object");
assert(UserLambdaValidationException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UserLambdaValidationException$ === "object");
assert(UsernameExistsException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UsernameExistsException$ === "object");
assert(UserNotConfirmedException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UserNotConfirmedException$ === "object");
assert(UserNotFoundException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UserNotFoundException$ === "object");
assert(UserPoolAddOnNotEnabledException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UserPoolAddOnNotEnabledException$ === "object");
assert(UserPoolTaggingException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof UserPoolTaggingException$ === "object");
assert(WebAuthnChallengeNotFoundException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof WebAuthnChallengeNotFoundException$ === "object");
assert(WebAuthnClientMismatchException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof WebAuthnClientMismatchException$ === "object");
assert(WebAuthnConfigurationMissingException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof WebAuthnConfigurationMissingException$ === "object");
assert(WebAuthnCredentialNotSupportedException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof WebAuthnCredentialNotSupportedException$ === "object");
assert(WebAuthnNotEnabledException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof WebAuthnNotEnabledException$ === "object");
assert(WebAuthnOriginNotAllowedException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof WebAuthnOriginNotAllowedException$ === "object");
assert(WebAuthnRelyingPartyMismatchException.prototype instanceof CognitoIdentityProviderServiceException);
assert(typeof WebAuthnRelyingPartyMismatchException$ === "object");
assert(CognitoIdentityProviderServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateAdminListGroupsForUser === "function");
assert(typeof paginateAdminListUserAuthEvents === "function");
assert(typeof paginateListGroups === "function");
assert(typeof paginateListIdentityProviders === "function");
assert(typeof paginateListResourceServers === "function");
assert(typeof paginateListUserPoolClients === "function");
assert(typeof paginateListUserPools === "function");
assert(typeof paginateListUsers === "function");
assert(typeof paginateListUsersInGroup === "function");
console.log(`CognitoIdentityProvider index test passed.`);
