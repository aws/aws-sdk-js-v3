// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AddCustomAttributesCommandInput,
  AddCustomAttributesCommandOutput,
} from "../commands/AddCustomAttributesCommand";
import {
  AdminAddUserToGroupCommandInput,
  AdminAddUserToGroupCommandOutput,
} from "../commands/AdminAddUserToGroupCommand";
import { AdminConfirmSignUpCommandInput, AdminConfirmSignUpCommandOutput } from "../commands/AdminConfirmSignUpCommand";
import { AdminCreateUserCommandInput, AdminCreateUserCommandOutput } from "../commands/AdminCreateUserCommand";
import {
  AdminDeleteUserAttributesCommandInput,
  AdminDeleteUserAttributesCommandOutput,
} from "../commands/AdminDeleteUserAttributesCommand";
import { AdminDeleteUserCommandInput, AdminDeleteUserCommandOutput } from "../commands/AdminDeleteUserCommand";
import {
  AdminDisableProviderForUserCommandInput,
  AdminDisableProviderForUserCommandOutput,
} from "../commands/AdminDisableProviderForUserCommand";
import { AdminDisableUserCommandInput, AdminDisableUserCommandOutput } from "../commands/AdminDisableUserCommand";
import { AdminEnableUserCommandInput, AdminEnableUserCommandOutput } from "../commands/AdminEnableUserCommand";
import { AdminForgetDeviceCommandInput, AdminForgetDeviceCommandOutput } from "../commands/AdminForgetDeviceCommand";
import { AdminGetDeviceCommandInput, AdminGetDeviceCommandOutput } from "../commands/AdminGetDeviceCommand";
import { AdminGetUserCommandInput, AdminGetUserCommandOutput } from "../commands/AdminGetUserCommand";
import { AdminInitiateAuthCommandInput, AdminInitiateAuthCommandOutput } from "../commands/AdminInitiateAuthCommand";
import {
  AdminLinkProviderForUserCommandInput,
  AdminLinkProviderForUserCommandOutput,
} from "../commands/AdminLinkProviderForUserCommand";
import { AdminListDevicesCommandInput, AdminListDevicesCommandOutput } from "../commands/AdminListDevicesCommand";
import {
  AdminListGroupsForUserCommandInput,
  AdminListGroupsForUserCommandOutput,
} from "../commands/AdminListGroupsForUserCommand";
import {
  AdminListUserAuthEventsCommandInput,
  AdminListUserAuthEventsCommandOutput,
} from "../commands/AdminListUserAuthEventsCommand";
import {
  AdminRemoveUserFromGroupCommandInput,
  AdminRemoveUserFromGroupCommandOutput,
} from "../commands/AdminRemoveUserFromGroupCommand";
import {
  AdminResetUserPasswordCommandInput,
  AdminResetUserPasswordCommandOutput,
} from "../commands/AdminResetUserPasswordCommand";
import {
  AdminRespondToAuthChallengeCommandInput,
  AdminRespondToAuthChallengeCommandOutput,
} from "../commands/AdminRespondToAuthChallengeCommand";
import {
  AdminSetUserMFAPreferenceCommandInput,
  AdminSetUserMFAPreferenceCommandOutput,
} from "../commands/AdminSetUserMFAPreferenceCommand";
import {
  AdminSetUserPasswordCommandInput,
  AdminSetUserPasswordCommandOutput,
} from "../commands/AdminSetUserPasswordCommand";
import {
  AdminSetUserSettingsCommandInput,
  AdminSetUserSettingsCommandOutput,
} from "../commands/AdminSetUserSettingsCommand";
import {
  AdminUpdateAuthEventFeedbackCommandInput,
  AdminUpdateAuthEventFeedbackCommandOutput,
} from "../commands/AdminUpdateAuthEventFeedbackCommand";
import {
  AdminUpdateDeviceStatusCommandInput,
  AdminUpdateDeviceStatusCommandOutput,
} from "../commands/AdminUpdateDeviceStatusCommand";
import {
  AdminUpdateUserAttributesCommandInput,
  AdminUpdateUserAttributesCommandOutput,
} from "../commands/AdminUpdateUserAttributesCommand";
import {
  AdminUserGlobalSignOutCommandInput,
  AdminUserGlobalSignOutCommandOutput,
} from "../commands/AdminUserGlobalSignOutCommand";
import {
  AssociateSoftwareTokenCommandInput,
  AssociateSoftwareTokenCommandOutput,
} from "../commands/AssociateSoftwareTokenCommand";
import { ChangePasswordCommandInput, ChangePasswordCommandOutput } from "../commands/ChangePasswordCommand";
import {
  CompleteWebAuthnRegistrationCommandInput,
  CompleteWebAuthnRegistrationCommandOutput,
} from "../commands/CompleteWebAuthnRegistrationCommand";
import { ConfirmDeviceCommandInput, ConfirmDeviceCommandOutput } from "../commands/ConfirmDeviceCommand";
import {
  ConfirmForgotPasswordCommandInput,
  ConfirmForgotPasswordCommandOutput,
} from "../commands/ConfirmForgotPasswordCommand";
import { ConfirmSignUpCommandInput, ConfirmSignUpCommandOutput } from "../commands/ConfirmSignUpCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "../commands/CreateGroupCommand";
import {
  CreateIdentityProviderCommandInput,
  CreateIdentityProviderCommandOutput,
} from "../commands/CreateIdentityProviderCommand";
import {
  CreateManagedLoginBrandingCommandInput,
  CreateManagedLoginBrandingCommandOutput,
} from "../commands/CreateManagedLoginBrandingCommand";
import {
  CreateResourceServerCommandInput,
  CreateResourceServerCommandOutput,
} from "../commands/CreateResourceServerCommand";
import {
  CreateUserImportJobCommandInput,
  CreateUserImportJobCommandOutput,
} from "../commands/CreateUserImportJobCommand";
import {
  CreateUserPoolClientCommandInput,
  CreateUserPoolClientCommandOutput,
} from "../commands/CreateUserPoolClientCommand";
import { CreateUserPoolCommandInput, CreateUserPoolCommandOutput } from "../commands/CreateUserPoolCommand";
import {
  CreateUserPoolDomainCommandInput,
  CreateUserPoolDomainCommandOutput,
} from "../commands/CreateUserPoolDomainCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "../commands/DeleteGroupCommand";
import {
  DeleteIdentityProviderCommandInput,
  DeleteIdentityProviderCommandOutput,
} from "../commands/DeleteIdentityProviderCommand";
import {
  DeleteManagedLoginBrandingCommandInput,
  DeleteManagedLoginBrandingCommandOutput,
} from "../commands/DeleteManagedLoginBrandingCommand";
import {
  DeleteResourceServerCommandInput,
  DeleteResourceServerCommandOutput,
} from "../commands/DeleteResourceServerCommand";
import {
  DeleteUserAttributesCommandInput,
  DeleteUserAttributesCommandOutput,
} from "../commands/DeleteUserAttributesCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import {
  DeleteUserPoolClientCommandInput,
  DeleteUserPoolClientCommandOutput,
} from "../commands/DeleteUserPoolClientCommand";
import { DeleteUserPoolCommandInput, DeleteUserPoolCommandOutput } from "../commands/DeleteUserPoolCommand";
import {
  DeleteUserPoolDomainCommandInput,
  DeleteUserPoolDomainCommandOutput,
} from "../commands/DeleteUserPoolDomainCommand";
import {
  DeleteWebAuthnCredentialCommandInput,
  DeleteWebAuthnCredentialCommandOutput,
} from "../commands/DeleteWebAuthnCredentialCommand";
import {
  DescribeIdentityProviderCommandInput,
  DescribeIdentityProviderCommandOutput,
} from "../commands/DescribeIdentityProviderCommand";
import {
  DescribeManagedLoginBrandingByClientCommandInput,
  DescribeManagedLoginBrandingByClientCommandOutput,
} from "../commands/DescribeManagedLoginBrandingByClientCommand";
import {
  DescribeManagedLoginBrandingCommandInput,
  DescribeManagedLoginBrandingCommandOutput,
} from "../commands/DescribeManagedLoginBrandingCommand";
import {
  DescribeResourceServerCommandInput,
  DescribeResourceServerCommandOutput,
} from "../commands/DescribeResourceServerCommand";
import {
  DescribeRiskConfigurationCommandInput,
  DescribeRiskConfigurationCommandOutput,
} from "../commands/DescribeRiskConfigurationCommand";
import {
  DescribeUserImportJobCommandInput,
  DescribeUserImportJobCommandOutput,
} from "../commands/DescribeUserImportJobCommand";
import {
  DescribeUserPoolClientCommandInput,
  DescribeUserPoolClientCommandOutput,
} from "../commands/DescribeUserPoolClientCommand";
import { DescribeUserPoolCommandInput, DescribeUserPoolCommandOutput } from "../commands/DescribeUserPoolCommand";
import {
  DescribeUserPoolDomainCommandInput,
  DescribeUserPoolDomainCommandOutput,
} from "../commands/DescribeUserPoolDomainCommand";
import { ForgetDeviceCommandInput, ForgetDeviceCommandOutput } from "../commands/ForgetDeviceCommand";
import { ForgotPasswordCommandInput, ForgotPasswordCommandOutput } from "../commands/ForgotPasswordCommand";
import { GetCSVHeaderCommandInput, GetCSVHeaderCommandOutput } from "../commands/GetCSVHeaderCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "../commands/GetDeviceCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "../commands/GetGroupCommand";
import {
  GetIdentityProviderByIdentifierCommandInput,
  GetIdentityProviderByIdentifierCommandOutput,
} from "../commands/GetIdentityProviderByIdentifierCommand";
import {
  GetLogDeliveryConfigurationCommandInput,
  GetLogDeliveryConfigurationCommandOutput,
} from "../commands/GetLogDeliveryConfigurationCommand";
import {
  GetSigningCertificateCommandInput,
  GetSigningCertificateCommandOutput,
} from "../commands/GetSigningCertificateCommand";
import {
  GetTokensFromRefreshTokenCommandInput,
  GetTokensFromRefreshTokenCommandOutput,
} from "../commands/GetTokensFromRefreshTokenCommand";
import { GetUICustomizationCommandInput, GetUICustomizationCommandOutput } from "../commands/GetUICustomizationCommand";
import {
  GetUserAttributeVerificationCodeCommandInput,
  GetUserAttributeVerificationCodeCommandOutput,
} from "../commands/GetUserAttributeVerificationCodeCommand";
import { GetUserAuthFactorsCommandInput, GetUserAuthFactorsCommandOutput } from "../commands/GetUserAuthFactorsCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "../commands/GetUserCommand";
import {
  GetUserPoolMfaConfigCommandInput,
  GetUserPoolMfaConfigCommandOutput,
} from "../commands/GetUserPoolMfaConfigCommand";
import { GlobalSignOutCommandInput, GlobalSignOutCommandOutput } from "../commands/GlobalSignOutCommand";
import { InitiateAuthCommandInput, InitiateAuthCommandOutput } from "../commands/InitiateAuthCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "../commands/ListGroupsCommand";
import {
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "../commands/ListIdentityProvidersCommand";
import {
  ListResourceServersCommandInput,
  ListResourceServersCommandOutput,
} from "../commands/ListResourceServersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUserImportJobsCommandInput, ListUserImportJobsCommandOutput } from "../commands/ListUserImportJobsCommand";
import {
  ListUserPoolClientsCommandInput,
  ListUserPoolClientsCommandOutput,
} from "../commands/ListUserPoolClientsCommand";
import { ListUserPoolsCommandInput, ListUserPoolsCommandOutput } from "../commands/ListUserPoolsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { ListUsersInGroupCommandInput, ListUsersInGroupCommandOutput } from "../commands/ListUsersInGroupCommand";
import {
  ListWebAuthnCredentialsCommandInput,
  ListWebAuthnCredentialsCommandOutput,
} from "../commands/ListWebAuthnCredentialsCommand";
import {
  ResendConfirmationCodeCommandInput,
  ResendConfirmationCodeCommandOutput,
} from "../commands/ResendConfirmationCodeCommand";
import {
  RespondToAuthChallengeCommandInput,
  RespondToAuthChallengeCommandOutput,
} from "../commands/RespondToAuthChallengeCommand";
import { RevokeTokenCommandInput, RevokeTokenCommandOutput } from "../commands/RevokeTokenCommand";
import {
  SetLogDeliveryConfigurationCommandInput,
  SetLogDeliveryConfigurationCommandOutput,
} from "../commands/SetLogDeliveryConfigurationCommand";
import {
  SetRiskConfigurationCommandInput,
  SetRiskConfigurationCommandOutput,
} from "../commands/SetRiskConfigurationCommand";
import { SetUICustomizationCommandInput, SetUICustomizationCommandOutput } from "../commands/SetUICustomizationCommand";
import {
  SetUserMFAPreferenceCommandInput,
  SetUserMFAPreferenceCommandOutput,
} from "../commands/SetUserMFAPreferenceCommand";
import {
  SetUserPoolMfaConfigCommandInput,
  SetUserPoolMfaConfigCommandOutput,
} from "../commands/SetUserPoolMfaConfigCommand";
import { SetUserSettingsCommandInput, SetUserSettingsCommandOutput } from "../commands/SetUserSettingsCommand";
import { SignUpCommandInput, SignUpCommandOutput } from "../commands/SignUpCommand";
import { StartUserImportJobCommandInput, StartUserImportJobCommandOutput } from "../commands/StartUserImportJobCommand";
import {
  StartWebAuthnRegistrationCommandInput,
  StartWebAuthnRegistrationCommandOutput,
} from "../commands/StartWebAuthnRegistrationCommand";
import { StopUserImportJobCommandInput, StopUserImportJobCommandOutput } from "../commands/StopUserImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAuthEventFeedbackCommandInput,
  UpdateAuthEventFeedbackCommandOutput,
} from "../commands/UpdateAuthEventFeedbackCommand";
import { UpdateDeviceStatusCommandInput, UpdateDeviceStatusCommandOutput } from "../commands/UpdateDeviceStatusCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "../commands/UpdateGroupCommand";
import {
  UpdateIdentityProviderCommandInput,
  UpdateIdentityProviderCommandOutput,
} from "../commands/UpdateIdentityProviderCommand";
import {
  UpdateManagedLoginBrandingCommandInput,
  UpdateManagedLoginBrandingCommandOutput,
} from "../commands/UpdateManagedLoginBrandingCommand";
import {
  UpdateResourceServerCommandInput,
  UpdateResourceServerCommandOutput,
} from "../commands/UpdateResourceServerCommand";
import {
  UpdateUserAttributesCommandInput,
  UpdateUserAttributesCommandOutput,
} from "../commands/UpdateUserAttributesCommand";
import {
  UpdateUserPoolClientCommandInput,
  UpdateUserPoolClientCommandOutput,
} from "../commands/UpdateUserPoolClientCommand";
import { UpdateUserPoolCommandInput, UpdateUserPoolCommandOutput } from "../commands/UpdateUserPoolCommand";
import {
  UpdateUserPoolDomainCommandInput,
  UpdateUserPoolDomainCommandOutput,
} from "../commands/UpdateUserPoolDomainCommand";
import {
  VerifySoftwareTokenCommandInput,
  VerifySoftwareTokenCommandOutput,
} from "../commands/VerifySoftwareTokenCommand";
import {
  VerifyUserAttributeCommandInput,
  VerifyUserAttributeCommandOutput,
} from "../commands/VerifyUserAttributeCommand";
import { CognitoIdentityProviderServiceException as __BaseException } from "../models/CognitoIdentityProviderServiceException";
import {
  AccountRecoverySettingType,
  AccountTakeoverActionsType,
  AccountTakeoverActionType,
  AccountTakeoverRiskConfigurationType,
  AddCustomAttributesRequest,
  AdminAddUserToGroupRequest,
  AdminConfirmSignUpRequest,
  AdminCreateUserConfigType,
  AdminCreateUserRequest,
  AdminCreateUserResponse,
  AdminDeleteUserAttributesRequest,
  AdminDeleteUserRequest,
  AdminDisableProviderForUserRequest,
  AdminDisableUserRequest,
  AdminEnableUserRequest,
  AdminForgetDeviceRequest,
  AdminGetDeviceRequest,
  AdminGetDeviceResponse,
  AdminGetUserRequest,
  AdminGetUserResponse,
  AdminInitiateAuthRequest,
  AdminLinkProviderForUserRequest,
  AdminListDevicesRequest,
  AdminListDevicesResponse,
  AdminListGroupsForUserRequest,
  AdminListGroupsForUserResponse,
  AdminListUserAuthEventsRequest,
  AdminListUserAuthEventsResponse,
  AdminRemoveUserFromGroupRequest,
  AdminResetUserPasswordRequest,
  AdminRespondToAuthChallengeRequest,
  AdminSetUserMFAPreferenceRequest,
  AdminSetUserPasswordRequest,
  AdminSetUserSettingsRequest,
  AdminUpdateAuthEventFeedbackRequest,
  AdminUpdateDeviceStatusRequest,
  AdminUpdateUserAttributesRequest,
  AdminUserGlobalSignOutRequest,
  AdvancedSecurityAdditionalFlowsType,
  AliasAttributeType,
  AliasExistsException,
  AnalyticsConfigurationType,
  AnalyticsMetadataType,
  AssetType,
  AssociateSoftwareTokenRequest,
  AttributeType,
  AuthEventType,
  AuthFactorType,
  ChangePasswordRequest,
  CloudWatchLogsConfigurationType,
  CodeDeliveryFailureException,
  CodeMismatchException,
  CompleteWebAuthnRegistrationRequest,
  CompromisedCredentialsActionsType,
  CompromisedCredentialsRiskConfigurationType,
  ConcurrentModificationException,
  ConfirmDeviceRequest,
  ConfirmForgotPasswordRequest,
  ConfirmSignUpRequest,
  ContextDataType,
  CreateGroupRequest,
  CreateGroupResponse,
  CreateIdentityProviderRequest,
  CreateIdentityProviderResponse,
  CreateManagedLoginBrandingRequest,
  CreateManagedLoginBrandingResponse,
  CreateResourceServerRequest,
  CreateUserImportJobRequest,
  CreateUserImportJobResponse,
  CreateUserPoolClientRequest,
  CreateUserPoolClientResponse,
  CreateUserPoolDomainRequest,
  CreateUserPoolRequest,
  CreateUserPoolResponse,
  CustomDomainConfigType,
  CustomEmailLambdaVersionConfigType,
  CustomSMSLambdaVersionConfigType,
  DeleteGroupRequest,
  DeleteIdentityProviderRequest,
  DeleteManagedLoginBrandingRequest,
  DeleteResourceServerRequest,
  DeleteUserAttributesRequest,
  DeleteUserPoolClientRequest,
  DeleteUserPoolDomainRequest,
  DeleteUserPoolRequest,
  DeleteUserRequest,
  DeleteWebAuthnCredentialRequest,
  DeliveryMediumType,
  DescribeIdentityProviderRequest,
  DescribeIdentityProviderResponse,
  DescribeManagedLoginBrandingByClientRequest,
  DescribeManagedLoginBrandingByClientResponse,
  DescribeManagedLoginBrandingRequest,
  DescribeManagedLoginBrandingResponse,
  DescribeResourceServerRequest,
  DescribeRiskConfigurationRequest,
  DescribeRiskConfigurationResponse,
  DescribeUserImportJobRequest,
  DescribeUserImportJobResponse,
  DescribeUserPoolClientRequest,
  DescribeUserPoolClientResponse,
  DescribeUserPoolDomainRequest,
  DescribeUserPoolRequest,
  DescribeUserPoolResponse,
  DeviceConfigurationType,
  DeviceKeyExistsException,
  DeviceSecretVerifierConfigType,
  DeviceType,
  DuplicateProviderException,
  EmailConfigurationType,
  EmailMfaSettingsType,
  EventFeedbackType,
  EventFilterType,
  ExpiredCodeException,
  ExplicitAuthFlowsType,
  FeatureUnavailableInTierException,
  FirehoseConfigurationType,
  ForbiddenException,
  ForgetDeviceRequest,
  ForgotPasswordRequest,
  GetCSVHeaderRequest,
  GetDeviceRequest,
  GetDeviceResponse,
  GetGroupRequest,
  GetGroupResponse,
  GetIdentityProviderByIdentifierRequest,
  GetIdentityProviderByIdentifierResponse,
  GetLogDeliveryConfigurationRequest,
  GetSigningCertificateRequest,
  GetTokensFromRefreshTokenRequest,
  GetUICustomizationRequest,
  GetUICustomizationResponse,
  GetUserAttributeVerificationCodeRequest,
  GetUserRequest,
  GroupExistsException,
  GroupType,
  HttpHeader,
  IdentityProviderType,
  InternalErrorException,
  InvalidEmailRoleAccessPolicyException,
  InvalidLambdaResponseException,
  InvalidOAuthFlowException,
  InvalidParameterException,
  InvalidPasswordException,
  InvalidSmsRoleAccessPolicyException,
  InvalidSmsRoleTrustRelationshipException,
  InvalidUserPoolConfigurationException,
  LambdaConfigType,
  LimitExceededException,
  LogConfigurationType,
  ManagedLoginBrandingExistsException,
  ManagedLoginBrandingType,
  MessageTemplateType,
  MFAMethodNotFoundException,
  MFAOptionType,
  NotAuthorizedException,
  NotifyConfigurationType,
  NotifyEmailType,
  NumberAttributeConstraintsType,
  OAuthFlowType,
  PasswordHistoryPolicyViolationException,
  PasswordPolicyType,
  PasswordResetRequiredException,
  PreconditionNotMetException,
  PreTokenGenerationVersionConfigType,
  ProviderUserIdentifierType,
  RecoveryOptionType,
  RefreshTokenReuseException,
  RefreshTokenRotationType,
  ResourceNotFoundException,
  ResourceServerScopeType,
  RiskConfigurationType,
  RiskExceptionConfigurationType,
  S3ConfigurationType,
  SchemaAttributeType,
  ScopeDoesNotExistException,
  SignInPolicyType,
  SmsConfigurationType,
  SMSMfaSettingsType,
  SoftwareTokenMFANotFoundException,
  SoftwareTokenMfaSettingsType,
  StringAttributeConstraintsType,
  TierChangeNotAllowedException,
  TokenValidityUnitsType,
  TooManyFailedAttemptsException,
  TooManyRequestsException,
  UICustomizationType,
  UnexpectedLambdaException,
  UnsupportedIdentityProviderException,
  UnsupportedOperationException,
  UnsupportedUserStateException,
  UserAttributeUpdateSettingsType,
  UserContextDataType,
  UserImportInProgressException,
  UserImportJobType,
  UserLambdaValidationException,
  UsernameAttributeType,
  UsernameConfigurationType,
  UsernameExistsException,
  UserNotConfirmedException,
  UserNotFoundException,
  UserPoolAddOnNotEnabledException,
  UserPoolAddOnsType,
  UserPoolClientType,
  UserPoolPolicyType,
  UserPoolTaggingException,
  UserPoolType,
  UserType,
  VerificationMessageTemplateType,
  VerifiedAttributeType,
  WebAuthnChallengeNotFoundException,
  WebAuthnClientMismatchException,
  WebAuthnCredentialNotSupportedException,
  WebAuthnNotEnabledException,
  WebAuthnOriginNotAllowedException,
  WebAuthnRelyingPartyMismatchException,
} from "../models/models_0";
import {
  EmailMfaConfigType,
  EnableSoftwareTokenMFAException,
  GetUserAuthFactorsRequest,
  GetUserPoolMfaConfigRequest,
  GlobalSignOutRequest,
  InitiateAuthRequest,
  ListDevicesRequest,
  ListDevicesResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListIdentityProvidersRequest,
  ListIdentityProvidersResponse,
  ListResourceServersRequest,
  ListTagsForResourceRequest,
  ListUserImportJobsRequest,
  ListUserImportJobsResponse,
  ListUserPoolClientsRequest,
  ListUserPoolsRequest,
  ListUserPoolsResponse,
  ListUsersInGroupRequest,
  ListUsersInGroupResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListWebAuthnCredentialsRequest,
  ListWebAuthnCredentialsResponse,
  ProviderDescription,
  ResendConfirmationCodeRequest,
  RespondToAuthChallengeRequest,
  RevokeTokenRequest,
  SetLogDeliveryConfigurationRequest,
  SetRiskConfigurationRequest,
  SetRiskConfigurationResponse,
  SetUICustomizationRequest,
  SetUICustomizationResponse,
  SetUserMFAPreferenceRequest,
  SetUserPoolMfaConfigRequest,
  SetUserSettingsRequest,
  SignUpRequest,
  SmsMfaConfigType,
  SoftwareTokenMfaConfigType,
  StartUserImportJobRequest,
  StartUserImportJobResponse,
  StartWebAuthnRegistrationRequest,
  StartWebAuthnRegistrationResponse,
  StopUserImportJobRequest,
  StopUserImportJobResponse,
  TagResourceRequest,
  UnauthorizedException,
  UnsupportedTokenTypeException,
  UntagResourceRequest,
  UpdateAuthEventFeedbackRequest,
  UpdateDeviceStatusRequest,
  UpdateGroupRequest,
  UpdateGroupResponse,
  UpdateIdentityProviderRequest,
  UpdateIdentityProviderResponse,
  UpdateManagedLoginBrandingRequest,
  UpdateManagedLoginBrandingResponse,
  UpdateResourceServerRequest,
  UpdateUserAttributesRequest,
  UpdateUserPoolClientRequest,
  UpdateUserPoolClientResponse,
  UpdateUserPoolDomainRequest,
  UpdateUserPoolRequest,
  UserPoolDescriptionType,
  VerifySoftwareTokenRequest,
  VerifyUserAttributeRequest,
  WebAuthnConfigurationMissingException,
  WebAuthnConfigurationType,
  WebAuthnCredentialDescription,
} from "../models/models_1";

/**
 * serializeAws_json1_1AddCustomAttributesCommand
 */
export const se_AddCustomAttributesCommand = async (
  input: AddCustomAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddCustomAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminAddUserToGroupCommand
 */
export const se_AdminAddUserToGroupCommand = async (
  input: AdminAddUserToGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminAddUserToGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminConfirmSignUpCommand
 */
export const se_AdminConfirmSignUpCommand = async (
  input: AdminConfirmSignUpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminConfirmSignUp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminCreateUserCommand
 */
export const se_AdminCreateUserCommand = async (
  input: AdminCreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminCreateUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminDeleteUserCommand
 */
export const se_AdminDeleteUserCommand = async (
  input: AdminDeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminDeleteUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminDeleteUserAttributesCommand
 */
export const se_AdminDeleteUserAttributesCommand = async (
  input: AdminDeleteUserAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminDeleteUserAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminDisableProviderForUserCommand
 */
export const se_AdminDisableProviderForUserCommand = async (
  input: AdminDisableProviderForUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminDisableProviderForUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminDisableUserCommand
 */
export const se_AdminDisableUserCommand = async (
  input: AdminDisableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminDisableUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminEnableUserCommand
 */
export const se_AdminEnableUserCommand = async (
  input: AdminEnableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminEnableUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminForgetDeviceCommand
 */
export const se_AdminForgetDeviceCommand = async (
  input: AdminForgetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminForgetDevice");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminGetDeviceCommand
 */
export const se_AdminGetDeviceCommand = async (
  input: AdminGetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminGetDevice");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminGetUserCommand
 */
export const se_AdminGetUserCommand = async (
  input: AdminGetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminGetUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminInitiateAuthCommand
 */
export const se_AdminInitiateAuthCommand = async (
  input: AdminInitiateAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminInitiateAuth");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminLinkProviderForUserCommand
 */
export const se_AdminLinkProviderForUserCommand = async (
  input: AdminLinkProviderForUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminLinkProviderForUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminListDevicesCommand
 */
export const se_AdminListDevicesCommand = async (
  input: AdminListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminListDevices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminListGroupsForUserCommand
 */
export const se_AdminListGroupsForUserCommand = async (
  input: AdminListGroupsForUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminListGroupsForUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminListUserAuthEventsCommand
 */
export const se_AdminListUserAuthEventsCommand = async (
  input: AdminListUserAuthEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminListUserAuthEvents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminRemoveUserFromGroupCommand
 */
export const se_AdminRemoveUserFromGroupCommand = async (
  input: AdminRemoveUserFromGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminRemoveUserFromGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminResetUserPasswordCommand
 */
export const se_AdminResetUserPasswordCommand = async (
  input: AdminResetUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminResetUserPassword");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminRespondToAuthChallengeCommand
 */
export const se_AdminRespondToAuthChallengeCommand = async (
  input: AdminRespondToAuthChallengeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminRespondToAuthChallenge");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminSetUserMFAPreferenceCommand
 */
export const se_AdminSetUserMFAPreferenceCommand = async (
  input: AdminSetUserMFAPreferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminSetUserMFAPreference");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminSetUserPasswordCommand
 */
export const se_AdminSetUserPasswordCommand = async (
  input: AdminSetUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminSetUserPassword");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminSetUserSettingsCommand
 */
export const se_AdminSetUserSettingsCommand = async (
  input: AdminSetUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminSetUserSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand
 */
export const se_AdminUpdateAuthEventFeedbackCommand = async (
  input: AdminUpdateAuthEventFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminUpdateAuthEventFeedback");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminUpdateDeviceStatusCommand
 */
export const se_AdminUpdateDeviceStatusCommand = async (
  input: AdminUpdateDeviceStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminUpdateDeviceStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminUpdateUserAttributesCommand
 */
export const se_AdminUpdateUserAttributesCommand = async (
  input: AdminUpdateUserAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminUpdateUserAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminUserGlobalSignOutCommand
 */
export const se_AdminUserGlobalSignOutCommand = async (
  input: AdminUserGlobalSignOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AdminUserGlobalSignOut");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateSoftwareTokenCommand
 */
export const se_AssociateSoftwareTokenCommand = async (
  input: AssociateSoftwareTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateSoftwareToken");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ChangePasswordCommand
 */
export const se_ChangePasswordCommand = async (
  input: ChangePasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ChangePassword");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CompleteWebAuthnRegistrationCommand
 */
export const se_CompleteWebAuthnRegistrationCommand = async (
  input: CompleteWebAuthnRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CompleteWebAuthnRegistration");
  let body: any;
  body = JSON.stringify(se_CompleteWebAuthnRegistrationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConfirmDeviceCommand
 */
export const se_ConfirmDeviceCommand = async (
  input: ConfirmDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConfirmDevice");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConfirmForgotPasswordCommand
 */
export const se_ConfirmForgotPasswordCommand = async (
  input: ConfirmForgotPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConfirmForgotPassword");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConfirmSignUpCommand
 */
export const se_ConfirmSignUpCommand = async (
  input: ConfirmSignUpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ConfirmSignUp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateIdentityProviderCommand
 */
export const se_CreateIdentityProviderCommand = async (
  input: CreateIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateIdentityProvider");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateManagedLoginBrandingCommand
 */
export const se_CreateManagedLoginBrandingCommand = async (
  input: CreateManagedLoginBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateManagedLoginBranding");
  let body: any;
  body = JSON.stringify(se_CreateManagedLoginBrandingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateResourceServerCommand
 */
export const se_CreateResourceServerCommand = async (
  input: CreateResourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateResourceServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserImportJobCommand
 */
export const se_CreateUserImportJobCommand = async (
  input: CreateUserImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUserImportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserPoolCommand
 */
export const se_CreateUserPoolCommand = async (
  input: CreateUserPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUserPool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserPoolClientCommand
 */
export const se_CreateUserPoolClientCommand = async (
  input: CreateUserPoolClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUserPoolClient");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserPoolDomainCommand
 */
export const se_CreateUserPoolDomainCommand = async (
  input: CreateUserPoolDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUserPoolDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteIdentityProviderCommand
 */
export const se_DeleteIdentityProviderCommand = async (
  input: DeleteIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteIdentityProvider");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteManagedLoginBrandingCommand
 */
export const se_DeleteManagedLoginBrandingCommand = async (
  input: DeleteManagedLoginBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteManagedLoginBranding");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourceServerCommand
 */
export const se_DeleteResourceServerCommand = async (
  input: DeleteResourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourceServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserAttributesCommand
 */
export const se_DeleteUserAttributesCommand = async (
  input: DeleteUserAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUserAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserPoolCommand
 */
export const se_DeleteUserPoolCommand = async (
  input: DeleteUserPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUserPool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserPoolClientCommand
 */
export const se_DeleteUserPoolClientCommand = async (
  input: DeleteUserPoolClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUserPoolClient");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserPoolDomainCommand
 */
export const se_DeleteUserPoolDomainCommand = async (
  input: DeleteUserPoolDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUserPoolDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWebAuthnCredentialCommand
 */
export const se_DeleteWebAuthnCredentialCommand = async (
  input: DeleteWebAuthnCredentialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWebAuthnCredential");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeIdentityProviderCommand
 */
export const se_DescribeIdentityProviderCommand = async (
  input: DescribeIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeIdentityProvider");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeManagedLoginBrandingCommand
 */
export const se_DescribeManagedLoginBrandingCommand = async (
  input: DescribeManagedLoginBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeManagedLoginBranding");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeManagedLoginBrandingByClientCommand
 */
export const se_DescribeManagedLoginBrandingByClientCommand = async (
  input: DescribeManagedLoginBrandingByClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeManagedLoginBrandingByClient");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeResourceServerCommand
 */
export const se_DescribeResourceServerCommand = async (
  input: DescribeResourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeResourceServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRiskConfigurationCommand
 */
export const se_DescribeRiskConfigurationCommand = async (
  input: DescribeRiskConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeRiskConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserImportJobCommand
 */
export const se_DescribeUserImportJobCommand = async (
  input: DescribeUserImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUserImportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserPoolCommand
 */
export const se_DescribeUserPoolCommand = async (
  input: DescribeUserPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUserPool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserPoolClientCommand
 */
export const se_DescribeUserPoolClientCommand = async (
  input: DescribeUserPoolClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUserPoolClient");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserPoolDomainCommand
 */
export const se_DescribeUserPoolDomainCommand = async (
  input: DescribeUserPoolDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUserPoolDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ForgetDeviceCommand
 */
export const se_ForgetDeviceCommand = async (
  input: ForgetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ForgetDevice");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ForgotPasswordCommand
 */
export const se_ForgotPasswordCommand = async (
  input: ForgotPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ForgotPassword");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCSVHeaderCommand
 */
export const se_GetCSVHeaderCommand = async (
  input: GetCSVHeaderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCSVHeader");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeviceCommand
 */
export const se_GetDeviceCommand = async (
  input: GetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDevice");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetGroupCommand
 */
export const se_GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetIdentityProviderByIdentifierCommand
 */
export const se_GetIdentityProviderByIdentifierCommand = async (
  input: GetIdentityProviderByIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetIdentityProviderByIdentifier");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLogDeliveryConfigurationCommand
 */
export const se_GetLogDeliveryConfigurationCommand = async (
  input: GetLogDeliveryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLogDeliveryConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSigningCertificateCommand
 */
export const se_GetSigningCertificateCommand = async (
  input: GetSigningCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSigningCertificate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTokensFromRefreshTokenCommand
 */
export const se_GetTokensFromRefreshTokenCommand = async (
  input: GetTokensFromRefreshTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTokensFromRefreshToken");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUICustomizationCommand
 */
export const se_GetUICustomizationCommand = async (
  input: GetUICustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUICustomization");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUserCommand
 */
export const se_GetUserCommand = async (
  input: GetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUser");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUserAttributeVerificationCodeCommand
 */
export const se_GetUserAttributeVerificationCodeCommand = async (
  input: GetUserAttributeVerificationCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUserAttributeVerificationCode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUserAuthFactorsCommand
 */
export const se_GetUserAuthFactorsCommand = async (
  input: GetUserAuthFactorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUserAuthFactors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUserPoolMfaConfigCommand
 */
export const se_GetUserPoolMfaConfigCommand = async (
  input: GetUserPoolMfaConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUserPoolMfaConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GlobalSignOutCommand
 */
export const se_GlobalSignOutCommand = async (
  input: GlobalSignOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GlobalSignOut");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InitiateAuthCommand
 */
export const se_InitiateAuthCommand = async (
  input: InitiateAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("InitiateAuth");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDevicesCommand
 */
export const se_ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDevices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListGroups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListIdentityProvidersCommand
 */
export const se_ListIdentityProvidersCommand = async (
  input: ListIdentityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListIdentityProviders");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceServersCommand
 */
export const se_ListResourceServersCommand = async (
  input: ListResourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListResourceServers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUserImportJobsCommand
 */
export const se_ListUserImportJobsCommand = async (
  input: ListUserImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUserImportJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUserPoolClientsCommand
 */
export const se_ListUserPoolClientsCommand = async (
  input: ListUserPoolClientsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUserPoolClients");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUserPoolsCommand
 */
export const se_ListUserPoolsCommand = async (
  input: ListUserPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUserPools");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUsers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUsersInGroupCommand
 */
export const se_ListUsersInGroupCommand = async (
  input: ListUsersInGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUsersInGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWebAuthnCredentialsCommand
 */
export const se_ListWebAuthnCredentialsCommand = async (
  input: ListWebAuthnCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWebAuthnCredentials");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResendConfirmationCodeCommand
 */
export const se_ResendConfirmationCodeCommand = async (
  input: ResendConfirmationCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResendConfirmationCode");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RespondToAuthChallengeCommand
 */
export const se_RespondToAuthChallengeCommand = async (
  input: RespondToAuthChallengeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RespondToAuthChallenge");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RevokeTokenCommand
 */
export const se_RevokeTokenCommand = async (
  input: RevokeTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RevokeToken");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetLogDeliveryConfigurationCommand
 */
export const se_SetLogDeliveryConfigurationCommand = async (
  input: SetLogDeliveryConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetLogDeliveryConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetRiskConfigurationCommand
 */
export const se_SetRiskConfigurationCommand = async (
  input: SetRiskConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetRiskConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetUICustomizationCommand
 */
export const se_SetUICustomizationCommand = async (
  input: SetUICustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetUICustomization");
  let body: any;
  body = JSON.stringify(se_SetUICustomizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetUserMFAPreferenceCommand
 */
export const se_SetUserMFAPreferenceCommand = async (
  input: SetUserMFAPreferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetUserMFAPreference");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetUserPoolMfaConfigCommand
 */
export const se_SetUserPoolMfaConfigCommand = async (
  input: SetUserPoolMfaConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetUserPoolMfaConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetUserSettingsCommand
 */
export const se_SetUserSettingsCommand = async (
  input: SetUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SetUserSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SignUpCommand
 */
export const se_SignUpCommand = async (input: SignUpCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SignUp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartUserImportJobCommand
 */
export const se_StartUserImportJobCommand = async (
  input: StartUserImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartUserImportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartWebAuthnRegistrationCommand
 */
export const se_StartWebAuthnRegistrationCommand = async (
  input: StartWebAuthnRegistrationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartWebAuthnRegistration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopUserImportJobCommand
 */
export const se_StopUserImportJobCommand = async (
  input: StopUserImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopUserImportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAuthEventFeedbackCommand
 */
export const se_UpdateAuthEventFeedbackCommand = async (
  input: UpdateAuthEventFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAuthEventFeedback");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDeviceStatusCommand
 */
export const se_UpdateDeviceStatusCommand = async (
  input: UpdateDeviceStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDeviceStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateIdentityProviderCommand
 */
export const se_UpdateIdentityProviderCommand = async (
  input: UpdateIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateIdentityProvider");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateManagedLoginBrandingCommand
 */
export const se_UpdateManagedLoginBrandingCommand = async (
  input: UpdateManagedLoginBrandingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateManagedLoginBranding");
  let body: any;
  body = JSON.stringify(se_UpdateManagedLoginBrandingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateResourceServerCommand
 */
export const se_UpdateResourceServerCommand = async (
  input: UpdateResourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateResourceServer");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserAttributesCommand
 */
export const se_UpdateUserAttributesCommand = async (
  input: UpdateUserAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUserAttributes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserPoolCommand
 */
export const se_UpdateUserPoolCommand = async (
  input: UpdateUserPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUserPool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserPoolClientCommand
 */
export const se_UpdateUserPoolClientCommand = async (
  input: UpdateUserPoolClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUserPoolClient");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserPoolDomainCommand
 */
export const se_UpdateUserPoolDomainCommand = async (
  input: UpdateUserPoolDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUserPoolDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1VerifySoftwareTokenCommand
 */
export const se_VerifySoftwareTokenCommand = async (
  input: VerifySoftwareTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("VerifySoftwareToken");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1VerifyUserAttributeCommand
 */
export const se_VerifyUserAttributeCommand = async (
  input: VerifyUserAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("VerifyUserAttribute");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddCustomAttributesCommand
 */
export const de_AddCustomAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCustomAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddCustomAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminAddUserToGroupCommand
 */
export const de_AdminAddUserToGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminAddUserToGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AdminAddUserToGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminConfirmSignUpCommand
 */
export const de_AdminConfirmSignUpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminConfirmSignUpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminConfirmSignUpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminCreateUserCommand
 */
export const de_AdminCreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminCreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminCreateUserResponse(data, context);
  const response: AdminCreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminDeleteUserCommand
 */
export const de_AdminDeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AdminDeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminDeleteUserAttributesCommand
 */
export const de_AdminDeleteUserAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDeleteUserAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminDeleteUserAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminDisableProviderForUserCommand
 */
export const de_AdminDisableProviderForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDisableProviderForUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminDisableProviderForUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminDisableUserCommand
 */
export const de_AdminDisableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDisableUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminDisableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminEnableUserCommand
 */
export const de_AdminEnableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminEnableUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminEnableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminForgetDeviceCommand
 */
export const de_AdminForgetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminForgetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AdminForgetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminGetDeviceCommand
 */
export const de_AdminGetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminGetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminGetDeviceResponse(data, context);
  const response: AdminGetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminGetUserCommand
 */
export const de_AdminGetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminGetUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminGetUserResponse(data, context);
  const response: AdminGetUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminInitiateAuthCommand
 */
export const de_AdminInitiateAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminInitiateAuthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminInitiateAuthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminLinkProviderForUserCommand
 */
export const de_AdminLinkProviderForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminLinkProviderForUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminLinkProviderForUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminListDevicesCommand
 */
export const de_AdminListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminListDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminListDevicesResponse(data, context);
  const response: AdminListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminListGroupsForUserCommand
 */
export const de_AdminListGroupsForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminListGroupsForUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminListGroupsForUserResponse(data, context);
  const response: AdminListGroupsForUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminListUserAuthEventsCommand
 */
export const de_AdminListUserAuthEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminListUserAuthEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminListUserAuthEventsResponse(data, context);
  const response: AdminListUserAuthEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminRemoveUserFromGroupCommand
 */
export const de_AdminRemoveUserFromGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminRemoveUserFromGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AdminRemoveUserFromGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminResetUserPasswordCommand
 */
export const de_AdminResetUserPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminResetUserPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminResetUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminRespondToAuthChallengeCommand
 */
export const de_AdminRespondToAuthChallengeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminRespondToAuthChallengeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminRespondToAuthChallengeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminSetUserMFAPreferenceCommand
 */
export const de_AdminSetUserMFAPreferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminSetUserMFAPreferenceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminSetUserMFAPreferenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminSetUserPasswordCommand
 */
export const de_AdminSetUserPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminSetUserPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminSetUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminSetUserSettingsCommand
 */
export const de_AdminSetUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminSetUserSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminSetUserSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand
 */
export const de_AdminUpdateAuthEventFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUpdateAuthEventFeedbackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminUpdateAuthEventFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminUpdateDeviceStatusCommand
 */
export const de_AdminUpdateDeviceStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUpdateDeviceStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminUpdateDeviceStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminUpdateUserAttributesCommand
 */
export const de_AdminUpdateUserAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUpdateUserAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminUpdateUserAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AdminUserGlobalSignOutCommand
 */
export const de_AdminUserGlobalSignOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUserGlobalSignOutCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AdminUserGlobalSignOutCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateSoftwareTokenCommand
 */
export const de_AssociateSoftwareTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSoftwareTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateSoftwareTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ChangePasswordCommand
 */
export const de_ChangePasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangePasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ChangePasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CompleteWebAuthnRegistrationCommand
 */
export const de_CompleteWebAuthnRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteWebAuthnRegistrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CompleteWebAuthnRegistrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ConfirmDeviceCommand
 */
export const de_ConfirmDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ConfirmDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ConfirmForgotPasswordCommand
 */
export const de_ConfirmForgotPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmForgotPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ConfirmForgotPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ConfirmSignUpCommand
 */
export const de_ConfirmSignUpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmSignUpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ConfirmSignUpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGroupResponse(data, context);
  const response: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateIdentityProviderCommand
 */
export const de_CreateIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateIdentityProviderResponse(data, context);
  const response: CreateIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateManagedLoginBrandingCommand
 */
export const de_CreateManagedLoginBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateManagedLoginBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateManagedLoginBrandingResponse(data, context);
  const response: CreateManagedLoginBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateResourceServerCommand
 */
export const de_CreateResourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateResourceServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUserImportJobCommand
 */
export const de_CreateUserImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserImportJobResponse(data, context);
  const response: CreateUserImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUserPoolCommand
 */
export const de_CreateUserPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserPoolResponse(data, context);
  const response: CreateUserPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUserPoolClientCommand
 */
export const de_CreateUserPoolClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserPoolClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserPoolClientResponse(data, context);
  const response: CreateUserPoolClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUserPoolDomainCommand
 */
export const de_CreateUserPoolDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserPoolDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateUserPoolDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteIdentityProviderCommand
 */
export const de_DeleteIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteManagedLoginBrandingCommand
 */
export const de_DeleteManagedLoginBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteManagedLoginBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteManagedLoginBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteResourceServerCommand
 */
export const de_DeleteResourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourceServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserAttributesCommand
 */
export const de_DeleteUserAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteUserAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserPoolCommand
 */
export const de_DeleteUserPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserPoolClientCommand
 */
export const de_DeleteUserPoolClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPoolClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserPoolClientCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserPoolDomainCommand
 */
export const de_DeleteUserPoolDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPoolDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteUserPoolDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWebAuthnCredentialCommand
 */
export const de_DeleteWebAuthnCredentialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWebAuthnCredentialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteWebAuthnCredentialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeIdentityProviderCommand
 */
export const de_DescribeIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeIdentityProviderResponse(data, context);
  const response: DescribeIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeManagedLoginBrandingCommand
 */
export const de_DescribeManagedLoginBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedLoginBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeManagedLoginBrandingResponse(data, context);
  const response: DescribeManagedLoginBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeManagedLoginBrandingByClientCommand
 */
export const de_DescribeManagedLoginBrandingByClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeManagedLoginBrandingByClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeManagedLoginBrandingByClientResponse(data, context);
  const response: DescribeManagedLoginBrandingByClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeResourceServerCommand
 */
export const de_DescribeResourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeResourceServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeRiskConfigurationCommand
 */
export const de_DescribeRiskConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRiskConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRiskConfigurationResponse(data, context);
  const response: DescribeRiskConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeUserImportJobCommand
 */
export const de_DescribeUserImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserImportJobResponse(data, context);
  const response: DescribeUserImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeUserPoolCommand
 */
export const de_DescribeUserPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserPoolResponse(data, context);
  const response: DescribeUserPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeUserPoolClientCommand
 */
export const de_DescribeUserPoolClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserPoolClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserPoolClientResponse(data, context);
  const response: DescribeUserPoolClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeUserPoolDomainCommand
 */
export const de_DescribeUserPoolDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserPoolDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeUserPoolDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ForgetDeviceCommand
 */
export const de_ForgetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForgetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ForgetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1ForgotPasswordCommand
 */
export const de_ForgotPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForgotPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ForgotPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCSVHeaderCommand
 */
export const de_GetCSVHeaderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCSVHeaderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetCSVHeaderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDeviceCommand
 */
export const de_GetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeviceResponse(data, context);
  const response: GetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetGroupCommand
 */
export const de_GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetGroupResponse(data, context);
  const response: GetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetIdentityProviderByIdentifierCommand
 */
export const de_GetIdentityProviderByIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityProviderByIdentifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIdentityProviderByIdentifierResponse(data, context);
  const response: GetIdentityProviderByIdentifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetLogDeliveryConfigurationCommand
 */
export const de_GetLogDeliveryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogDeliveryConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetLogDeliveryConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSigningCertificateCommand
 */
export const de_GetSigningCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetSigningCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTokensFromRefreshTokenCommand
 */
export const de_GetTokensFromRefreshTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTokensFromRefreshTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetTokensFromRefreshTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUICustomizationCommand
 */
export const de_GetUICustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUICustomizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUICustomizationResponse(data, context);
  const response: GetUICustomizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUserCommand
 */
export const de_GetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUserAttributeVerificationCodeCommand
 */
export const de_GetUserAttributeVerificationCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserAttributeVerificationCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetUserAttributeVerificationCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUserAuthFactorsCommand
 */
export const de_GetUserAuthFactorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserAuthFactorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetUserAuthFactorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUserPoolMfaConfigCommand
 */
export const de_GetUserPoolMfaConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserPoolMfaConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetUserPoolMfaConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GlobalSignOutCommand
 */
export const de_GlobalSignOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GlobalSignOutCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GlobalSignOutCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1InitiateAuthCommand
 */
export const de_InitiateAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateAuthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: InitiateAuthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDevicesCommand
 */
export const de_ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDevicesResponse(data, context);
  const response: ListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListGroupsCommand
 */
export const de_ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGroupsResponse(data, context);
  const response: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListIdentityProvidersCommand
 */
export const de_ListIdentityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListIdentityProvidersResponse(data, context);
  const response: ListIdentityProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListResourceServersCommand
 */
export const de_ListResourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListResourceServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUserImportJobsCommand
 */
export const de_ListUserImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUserImportJobsResponse(data, context);
  const response: ListUserImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUserPoolClientsCommand
 */
export const de_ListUserPoolClientsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserPoolClientsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListUserPoolClientsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUserPoolsCommand
 */
export const de_ListUserPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserPoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUserPoolsResponse(data, context);
  const response: ListUserPoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUsersResponse(data, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUsersInGroupCommand
 */
export const de_ListUsersInGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersInGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUsersInGroupResponse(data, context);
  const response: ListUsersInGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListWebAuthnCredentialsCommand
 */
export const de_ListWebAuthnCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWebAuthnCredentialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWebAuthnCredentialsResponse(data, context);
  const response: ListWebAuthnCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ResendConfirmationCodeCommand
 */
export const de_ResendConfirmationCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendConfirmationCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ResendConfirmationCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RespondToAuthChallengeCommand
 */
export const de_RespondToAuthChallengeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondToAuthChallengeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RespondToAuthChallengeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RevokeTokenCommand
 */
export const de_RevokeTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RevokeTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SetLogDeliveryConfigurationCommand
 */
export const de_SetLogDeliveryConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetLogDeliveryConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SetLogDeliveryConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SetRiskConfigurationCommand
 */
export const de_SetRiskConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRiskConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetRiskConfigurationResponse(data, context);
  const response: SetRiskConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SetUICustomizationCommand
 */
export const de_SetUICustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUICustomizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetUICustomizationResponse(data, context);
  const response: SetUICustomizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SetUserMFAPreferenceCommand
 */
export const de_SetUserMFAPreferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUserMFAPreferenceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SetUserMFAPreferenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SetUserPoolMfaConfigCommand
 */
export const de_SetUserPoolMfaConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUserPoolMfaConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SetUserPoolMfaConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SetUserSettingsCommand
 */
export const de_SetUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUserSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SetUserSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SignUpCommand
 */
export const de_SignUpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignUpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SignUpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartUserImportJobCommand
 */
export const de_StartUserImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartUserImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartUserImportJobResponse(data, context);
  const response: StartUserImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartWebAuthnRegistrationCommand
 */
export const de_StartWebAuthnRegistrationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWebAuthnRegistrationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartWebAuthnRegistrationResponse(data, context);
  const response: StartWebAuthnRegistrationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopUserImportJobCommand
 */
export const de_StopUserImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopUserImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopUserImportJobResponse(data, context);
  const response: StopUserImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAuthEventFeedbackCommand
 */
export const de_UpdateAuthEventFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthEventFeedbackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateAuthEventFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDeviceStatusCommand
 */
export const de_UpdateDeviceStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDeviceStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGroupResponse(data, context);
  const response: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateIdentityProviderCommand
 */
export const de_UpdateIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateIdentityProviderResponse(data, context);
  const response: UpdateIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateManagedLoginBrandingCommand
 */
export const de_UpdateManagedLoginBrandingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateManagedLoginBrandingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateManagedLoginBrandingResponse(data, context);
  const response: UpdateManagedLoginBrandingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateResourceServerCommand
 */
export const de_UpdateResourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateResourceServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUserAttributesCommand
 */
export const de_UpdateUserAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateUserAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUserPoolCommand
 */
export const de_UpdateUserPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateUserPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUserPoolClientCommand
 */
export const de_UpdateUserPoolClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPoolClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUserPoolClientResponse(data, context);
  const response: UpdateUserPoolClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUserPoolDomainCommand
 */
export const de_UpdateUserPoolDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPoolDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateUserPoolDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1VerifySoftwareTokenCommand
 */
export const de_VerifySoftwareTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifySoftwareTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: VerifySoftwareTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1VerifyUserAttributeCommand
 */
export const de_VerifyUserAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyUserAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: VerifyUserAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserImportInProgressException":
    case "com.amazonaws.cognitoidentityprovider#UserImportInProgressException":
      throw await de_UserImportInProgressExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "TooManyFailedAttemptsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException":
      throw await de_TooManyFailedAttemptsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "CodeDeliveryFailureException":
    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
      throw await de_CodeDeliveryFailureExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException":
      throw await de_PreconditionNotMetExceptionRes(parsedOutput, context);
    case "UnsupportedUserStateException":
    case "com.amazonaws.cognitoidentityprovider#UnsupportedUserStateException":
      throw await de_UnsupportedUserStateExceptionRes(parsedOutput, context);
    case "UsernameExistsException":
    case "com.amazonaws.cognitoidentityprovider#UsernameExistsException":
      throw await de_UsernameExistsExceptionRes(parsedOutput, context);
    case "AliasExistsException":
    case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
      throw await de_AliasExistsExceptionRes(parsedOutput, context);
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "InvalidEmailRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
      throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "MFAMethodNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException":
      throw await de_MFAMethodNotFoundExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cognitoidentityprovider#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserPoolAddOnNotEnabledException":
    case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
      throw await de_UserPoolAddOnNotEnabledExceptionRes(parsedOutput, context);
    case "CodeMismatchException":
    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
      throw await de_CodeMismatchExceptionRes(parsedOutput, context);
    case "ExpiredCodeException":
    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
      throw await de_ExpiredCodeExceptionRes(parsedOutput, context);
    case "PasswordHistoryPolicyViolationException":
    case "com.amazonaws.cognitoidentityprovider#PasswordHistoryPolicyViolationException":
      throw await de_PasswordHistoryPolicyViolationExceptionRes(parsedOutput, context);
    case "SoftwareTokenMFANotFoundException":
    case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException":
      throw await de_SoftwareTokenMFANotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "WebAuthnChallengeNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#WebAuthnChallengeNotFoundException":
      throw await de_WebAuthnChallengeNotFoundExceptionRes(parsedOutput, context);
    case "WebAuthnClientMismatchException":
    case "com.amazonaws.cognitoidentityprovider#WebAuthnClientMismatchException":
      throw await de_WebAuthnClientMismatchExceptionRes(parsedOutput, context);
    case "WebAuthnCredentialNotSupportedException":
    case "com.amazonaws.cognitoidentityprovider#WebAuthnCredentialNotSupportedException":
      throw await de_WebAuthnCredentialNotSupportedExceptionRes(parsedOutput, context);
    case "WebAuthnNotEnabledException":
    case "com.amazonaws.cognitoidentityprovider#WebAuthnNotEnabledException":
      throw await de_WebAuthnNotEnabledExceptionRes(parsedOutput, context);
    case "WebAuthnOriginNotAllowedException":
    case "com.amazonaws.cognitoidentityprovider#WebAuthnOriginNotAllowedException":
      throw await de_WebAuthnOriginNotAllowedExceptionRes(parsedOutput, context);
    case "WebAuthnRelyingPartyMismatchException":
    case "com.amazonaws.cognitoidentityprovider#WebAuthnRelyingPartyMismatchException":
      throw await de_WebAuthnRelyingPartyMismatchExceptionRes(parsedOutput, context);
    case "DeviceKeyExistsException":
    case "com.amazonaws.cognitoidentityprovider#DeviceKeyExistsException":
      throw await de_DeviceKeyExistsExceptionRes(parsedOutput, context);
    case "GroupExistsException":
    case "com.amazonaws.cognitoidentityprovider#GroupExistsException":
      throw await de_GroupExistsExceptionRes(parsedOutput, context);
    case "DuplicateProviderException":
    case "com.amazonaws.cognitoidentityprovider#DuplicateProviderException":
      throw await de_DuplicateProviderExceptionRes(parsedOutput, context);
    case "ManagedLoginBrandingExistsException":
    case "com.amazonaws.cognitoidentityprovider#ManagedLoginBrandingExistsException":
      throw await de_ManagedLoginBrandingExistsExceptionRes(parsedOutput, context);
    case "FeatureUnavailableInTierException":
    case "com.amazonaws.cognitoidentityprovider#FeatureUnavailableInTierException":
      throw await de_FeatureUnavailableInTierExceptionRes(parsedOutput, context);
    case "TierChangeNotAllowedException":
    case "com.amazonaws.cognitoidentityprovider#TierChangeNotAllowedException":
      throw await de_TierChangeNotAllowedExceptionRes(parsedOutput, context);
    case "UserPoolTaggingException":
    case "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException":
      throw await de_UserPoolTaggingExceptionRes(parsedOutput, context);
    case "InvalidOAuthFlowException":
    case "com.amazonaws.cognitoidentityprovider#InvalidOAuthFlowException":
      throw await de_InvalidOAuthFlowExceptionRes(parsedOutput, context);
    case "ScopeDoesNotExistException":
    case "com.amazonaws.cognitoidentityprovider#ScopeDoesNotExistException":
      throw await de_ScopeDoesNotExistExceptionRes(parsedOutput, context);
    case "UnsupportedIdentityProviderException":
    case "com.amazonaws.cognitoidentityprovider#UnsupportedIdentityProviderException":
      throw await de_UnsupportedIdentityProviderExceptionRes(parsedOutput, context);
    case "RefreshTokenReuseException":
    case "com.amazonaws.cognitoidentityprovider#RefreshTokenReuseException":
      throw await de_RefreshTokenReuseExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.cognitoidentityprovider#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedTokenTypeException":
    case "com.amazonaws.cognitoidentityprovider#UnsupportedTokenTypeException":
      throw await de_UnsupportedTokenTypeExceptionRes(parsedOutput, context);
    case "WebAuthnConfigurationMissingException":
    case "com.amazonaws.cognitoidentityprovider#WebAuthnConfigurationMissingException":
      throw await de_WebAuthnConfigurationMissingExceptionRes(parsedOutput, context);
    case "EnableSoftwareTokenMFAException":
    case "com.amazonaws.cognitoidentityprovider#EnableSoftwareTokenMFAException":
      throw await de_EnableSoftwareTokenMFAExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_1AliasExistsExceptionRes
 */
const de_AliasExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AliasExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AliasExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CodeDeliveryFailureExceptionRes
 */
const de_CodeDeliveryFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeDeliveryFailureException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CodeDeliveryFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CodeMismatchExceptionRes
 */
const de_CodeMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CodeMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeviceKeyExistsExceptionRes
 */
const de_DeviceKeyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeviceKeyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DeviceKeyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateProviderExceptionRes
 */
const de_DuplicateProviderExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateProviderException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DuplicateProviderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1EnableSoftwareTokenMFAExceptionRes
 */
const de_EnableSoftwareTokenMFAExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EnableSoftwareTokenMFAException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new EnableSoftwareTokenMFAException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ExpiredCodeExceptionRes
 */
const de_ExpiredCodeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredCodeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ExpiredCodeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FeatureUnavailableInTierExceptionRes
 */
const de_FeatureUnavailableInTierExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FeatureUnavailableInTierException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FeatureUnavailableInTierException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1GroupExistsExceptionRes
 */
const de_GroupExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GroupExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new GroupExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalErrorExceptionRes
 */
const de_InternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidEmailRoleAccessPolicyExceptionRes
 */
const de_InvalidEmailRoleAccessPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEmailRoleAccessPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidEmailRoleAccessPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidLambdaResponseExceptionRes
 */
const de_InvalidLambdaResponseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLambdaResponseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidLambdaResponseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOAuthFlowExceptionRes
 */
const de_InvalidOAuthFlowExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOAuthFlowException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidOAuthFlowException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPasswordExceptionRes
 */
const de_InvalidPasswordExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPasswordException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidPasswordException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSmsRoleAccessPolicyExceptionRes
 */
const de_InvalidSmsRoleAccessPolicyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSmsRoleAccessPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidSmsRoleAccessPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSmsRoleTrustRelationshipExceptionRes
 */
const de_InvalidSmsRoleTrustRelationshipExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSmsRoleTrustRelationshipException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidSmsRoleTrustRelationshipException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidUserPoolConfigurationExceptionRes
 */
const de_InvalidUserPoolConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidUserPoolConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidUserPoolConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ManagedLoginBrandingExistsExceptionRes
 */
const de_ManagedLoginBrandingExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManagedLoginBrandingExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ManagedLoginBrandingExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MFAMethodNotFoundExceptionRes
 */
const de_MFAMethodNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MFAMethodNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MFAMethodNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotAuthorizedExceptionRes
 */
const de_NotAuthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NotAuthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PasswordHistoryPolicyViolationExceptionRes
 */
const de_PasswordHistoryPolicyViolationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PasswordHistoryPolicyViolationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PasswordHistoryPolicyViolationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PasswordResetRequiredExceptionRes
 */
const de_PasswordResetRequiredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PasswordResetRequiredException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PasswordResetRequiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1PreconditionNotMetExceptionRes
 */
const de_PreconditionNotMetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionNotMetException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new PreconditionNotMetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RefreshTokenReuseExceptionRes
 */
const de_RefreshTokenReuseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RefreshTokenReuseException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new RefreshTokenReuseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ScopeDoesNotExistExceptionRes
 */
const de_ScopeDoesNotExistExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ScopeDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ScopeDoesNotExistException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SoftwareTokenMFANotFoundExceptionRes
 */
const de_SoftwareTokenMFANotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SoftwareTokenMFANotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SoftwareTokenMFANotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TierChangeNotAllowedExceptionRes
 */
const de_TierChangeNotAllowedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TierChangeNotAllowedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TierChangeNotAllowedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyFailedAttemptsExceptionRes
 */
const de_TooManyFailedAttemptsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyFailedAttemptsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyFailedAttemptsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnexpectedLambdaExceptionRes
 */
const de_UnexpectedLambdaExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnexpectedLambdaException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnexpectedLambdaException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedIdentityProviderExceptionRes
 */
const de_UnsupportedIdentityProviderExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedIdentityProviderException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedIdentityProviderException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedTokenTypeExceptionRes
 */
const de_UnsupportedTokenTypeExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedTokenTypeException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedTokenTypeException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedUserStateExceptionRes
 */
const de_UnsupportedUserStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedUserStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedUserStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserImportInProgressExceptionRes
 */
const de_UserImportInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserImportInProgressException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UserImportInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserLambdaValidationExceptionRes
 */
const de_UserLambdaValidationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserLambdaValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UserLambdaValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UsernameExistsExceptionRes
 */
const de_UsernameExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UsernameExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UsernameExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserNotConfirmedExceptionRes
 */
const de_UserNotConfirmedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserNotConfirmedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UserNotConfirmedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserNotFoundExceptionRes
 */
const de_UserNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UserNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserPoolAddOnNotEnabledExceptionRes
 */
const de_UserPoolAddOnNotEnabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserPoolAddOnNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UserPoolAddOnNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UserPoolTaggingExceptionRes
 */
const de_UserPoolTaggingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UserPoolTaggingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UserPoolTaggingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WebAuthnChallengeNotFoundExceptionRes
 */
const de_WebAuthnChallengeNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WebAuthnChallengeNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new WebAuthnChallengeNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WebAuthnClientMismatchExceptionRes
 */
const de_WebAuthnClientMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WebAuthnClientMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new WebAuthnClientMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WebAuthnConfigurationMissingExceptionRes
 */
const de_WebAuthnConfigurationMissingExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WebAuthnConfigurationMissingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new WebAuthnConfigurationMissingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WebAuthnCredentialNotSupportedExceptionRes
 */
const de_WebAuthnCredentialNotSupportedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WebAuthnCredentialNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new WebAuthnCredentialNotSupportedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WebAuthnNotEnabledExceptionRes
 */
const de_WebAuthnNotEnabledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WebAuthnNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new WebAuthnNotEnabledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WebAuthnOriginNotAllowedExceptionRes
 */
const de_WebAuthnOriginNotAllowedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WebAuthnOriginNotAllowedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new WebAuthnOriginNotAllowedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1WebAuthnRelyingPartyMismatchExceptionRes
 */
const de_WebAuthnRelyingPartyMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WebAuthnRelyingPartyMismatchException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new WebAuthnRelyingPartyMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AccountRecoverySettingType omitted.

// se_AccountTakeoverActionsType omitted.

// se_AccountTakeoverActionType omitted.

// se_AccountTakeoverRiskConfigurationType omitted.

// se_AddCustomAttributesRequest omitted.

// se_AdminAddUserToGroupRequest omitted.

// se_AdminConfirmSignUpRequest omitted.

// se_AdminCreateUserConfigType omitted.

// se_AdminCreateUserRequest omitted.

// se_AdminDeleteUserAttributesRequest omitted.

// se_AdminDeleteUserRequest omitted.

// se_AdminDisableProviderForUserRequest omitted.

// se_AdminDisableUserRequest omitted.

// se_AdminEnableUserRequest omitted.

// se_AdminForgetDeviceRequest omitted.

// se_AdminGetDeviceRequest omitted.

// se_AdminGetUserRequest omitted.

// se_AdminInitiateAuthRequest omitted.

// se_AdminLinkProviderForUserRequest omitted.

// se_AdminListDevicesRequest omitted.

// se_AdminListGroupsForUserRequest omitted.

// se_AdminListUserAuthEventsRequest omitted.

// se_AdminRemoveUserFromGroupRequest omitted.

// se_AdminResetUserPasswordRequest omitted.

// se_AdminRespondToAuthChallengeRequest omitted.

// se_AdminSetUserMFAPreferenceRequest omitted.

// se_AdminSetUserPasswordRequest omitted.

// se_AdminSetUserSettingsRequest omitted.

// se_AdminUpdateAuthEventFeedbackRequest omitted.

// se_AdminUpdateDeviceStatusRequest omitted.

// se_AdminUpdateUserAttributesRequest omitted.

// se_AdminUserGlobalSignOutRequest omitted.

// se_AdvancedSecurityAdditionalFlowsType omitted.

// se_AliasAttributesListType omitted.

// se_AllowedFirstAuthFactorsListType omitted.

// se_AnalyticsConfigurationType omitted.

// se_AnalyticsMetadataType omitted.

/**
 * serializeAws_json1_1AssetListType
 */
const se_AssetListType = (input: AssetType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssetType(entry, context);
    });
};

/**
 * serializeAws_json1_1AssetType
 */
const se_AssetType = (input: AssetType, context: __SerdeContext): any => {
  return take(input, {
    Bytes: context.base64Encoder,
    Category: [],
    ColorMode: [],
    Extension: [],
    ResourceId: [],
  });
};

// se_AssociateSoftwareTokenRequest omitted.

// se_AttributeListType omitted.

// se_AttributeMappingType omitted.

// se_AttributeNameListType omitted.

// se_AttributesRequireVerificationBeforeUpdateType omitted.

// se_AttributeType omitted.

// se_AuthParametersType omitted.

// se_BlockedIPRangeListType omitted.

// se_CallbackURLsListType omitted.

// se_ChallengeResponsesType omitted.

// se_ChangePasswordRequest omitted.

// se_ClientMetadataType omitted.

// se_ClientPermissionListType omitted.

// se_CloudWatchLogsConfigurationType omitted.

/**
 * serializeAws_json1_1CompleteWebAuthnRegistrationRequest
 */
const se_CompleteWebAuthnRegistrationRequest = (
  input: CompleteWebAuthnRegistrationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AccessToken: [],
    Credential: (_) => se_Document(_, context),
  });
};

// se_CompromisedCredentialsActionsType omitted.

// se_CompromisedCredentialsRiskConfigurationType omitted.

// se_ConfirmDeviceRequest omitted.

// se_ConfirmForgotPasswordRequest omitted.

// se_ConfirmSignUpRequest omitted.

// se_ContextDataType omitted.

// se_CreateGroupRequest omitted.

// se_CreateIdentityProviderRequest omitted.

/**
 * serializeAws_json1_1CreateManagedLoginBrandingRequest
 */
const se_CreateManagedLoginBrandingRequest = (
  input: CreateManagedLoginBrandingRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Assets: (_) => se_AssetListType(_, context),
    ClientId: [],
    Settings: (_) => se_Document(_, context),
    UseCognitoProvidedValues: [],
    UserPoolId: [],
  });
};

// se_CreateResourceServerRequest omitted.

// se_CreateUserImportJobRequest omitted.

// se_CreateUserPoolClientRequest omitted.

// se_CreateUserPoolDomainRequest omitted.

// se_CreateUserPoolRequest omitted.

// se_CustomAttributesListType omitted.

// se_CustomDomainConfigType omitted.

// se_CustomEmailLambdaVersionConfigType omitted.

// se_CustomSMSLambdaVersionConfigType omitted.

// se_DeleteGroupRequest omitted.

// se_DeleteIdentityProviderRequest omitted.

// se_DeleteManagedLoginBrandingRequest omitted.

// se_DeleteResourceServerRequest omitted.

// se_DeleteUserAttributesRequest omitted.

// se_DeleteUserPoolClientRequest omitted.

// se_DeleteUserPoolDomainRequest omitted.

// se_DeleteUserPoolRequest omitted.

// se_DeleteUserRequest omitted.

// se_DeleteWebAuthnCredentialRequest omitted.

// se_DeliveryMediumListType omitted.

// se_DescribeIdentityProviderRequest omitted.

// se_DescribeManagedLoginBrandingByClientRequest omitted.

// se_DescribeManagedLoginBrandingRequest omitted.

// se_DescribeResourceServerRequest omitted.

// se_DescribeRiskConfigurationRequest omitted.

// se_DescribeUserImportJobRequest omitted.

// se_DescribeUserPoolClientRequest omitted.

// se_DescribeUserPoolDomainRequest omitted.

// se_DescribeUserPoolRequest omitted.

// se_DeviceConfigurationType omitted.

// se_DeviceSecretVerifierConfigType omitted.

/**
 * serializeAws_json1_1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_EmailConfigurationType omitted.

// se_EmailMfaConfigType omitted.

// se_EmailMfaSettingsType omitted.

// se_EventFiltersType omitted.

// se_ExplicitAuthFlowsListType omitted.

// se_FirehoseConfigurationType omitted.

// se_ForgetDeviceRequest omitted.

// se_ForgotPasswordRequest omitted.

// se_GetCSVHeaderRequest omitted.

// se_GetDeviceRequest omitted.

// se_GetGroupRequest omitted.

// se_GetIdentityProviderByIdentifierRequest omitted.

// se_GetLogDeliveryConfigurationRequest omitted.

// se_GetSigningCertificateRequest omitted.

// se_GetTokensFromRefreshTokenRequest omitted.

// se_GetUICustomizationRequest omitted.

// se_GetUserAttributeVerificationCodeRequest omitted.

// se_GetUserAuthFactorsRequest omitted.

// se_GetUserPoolMfaConfigRequest omitted.

// se_GetUserRequest omitted.

// se_GlobalSignOutRequest omitted.

// se_HttpHeader omitted.

// se_HttpHeaderList omitted.

// se_IdpIdentifiersListType omitted.

// se_InitiateAuthRequest omitted.

// se_LambdaConfigType omitted.

// se_ListDevicesRequest omitted.

// se_ListGroupsRequest omitted.

// se_ListIdentityProvidersRequest omitted.

// se_ListResourceServersRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListUserImportJobsRequest omitted.

// se_ListUserPoolClientsRequest omitted.

// se_ListUserPoolsRequest omitted.

// se_ListUsersInGroupRequest omitted.

// se_ListUsersRequest omitted.

// se_ListWebAuthnCredentialsRequest omitted.

// se_LogConfigurationListType omitted.

// se_LogConfigurationType omitted.

// se_LogoutURLsListType omitted.

// se_MessageTemplateType omitted.

// se_MFAOptionListType omitted.

// se_MFAOptionType omitted.

// se_NotifyConfigurationType omitted.

// se_NotifyEmailType omitted.

// se_NumberAttributeConstraintsType omitted.

// se_OAuthFlowsType omitted.

// se_PasswordPolicyType omitted.

// se_PreTokenGenerationVersionConfigType omitted.

// se_ProviderDetailsType omitted.

// se_ProviderUserIdentifierType omitted.

// se_RecoveryMechanismsType omitted.

// se_RecoveryOptionType omitted.

// se_RefreshTokenRotationType omitted.

// se_ResendConfirmationCodeRequest omitted.

// se_ResourceServerScopeListType omitted.

// se_ResourceServerScopeType omitted.

// se_RespondToAuthChallengeRequest omitted.

// se_RevokeTokenRequest omitted.

// se_RiskExceptionConfigurationType omitted.

// se_S3ConfigurationType omitted.

// se_SchemaAttributesListType omitted.

// se_SchemaAttributeType omitted.

// se_ScopeListType omitted.

// se_SearchedAttributeNamesListType omitted.

// se_SetLogDeliveryConfigurationRequest omitted.

// se_SetRiskConfigurationRequest omitted.

/**
 * serializeAws_json1_1SetUICustomizationRequest
 */
const se_SetUICustomizationRequest = (input: SetUICustomizationRequest, context: __SerdeContext): any => {
  return take(input, {
    CSS: [],
    ClientId: [],
    ImageFile: context.base64Encoder,
    UserPoolId: [],
  });
};

// se_SetUserMFAPreferenceRequest omitted.

// se_SetUserPoolMfaConfigRequest omitted.

// se_SetUserSettingsRequest omitted.

// se_SignInPolicyType omitted.

// se_SignUpRequest omitted.

// se_SkippedIPRangeListType omitted.

// se_SmsConfigurationType omitted.

// se_SmsMfaConfigType omitted.

// se_SMSMfaSettingsType omitted.

// se_SoftwareTokenMfaConfigType omitted.

// se_SoftwareTokenMfaSettingsType omitted.

// se_StartUserImportJobRequest omitted.

// se_StartWebAuthnRegistrationRequest omitted.

// se_StopUserImportJobRequest omitted.

// se_StringAttributeConstraintsType omitted.

// se_SupportedIdentityProvidersListType omitted.

// se_TagResourceRequest omitted.

// se_TokenValidityUnitsType omitted.

// se_UntagResourceRequest omitted.

// se_UpdateAuthEventFeedbackRequest omitted.

// se_UpdateDeviceStatusRequest omitted.

// se_UpdateGroupRequest omitted.

// se_UpdateIdentityProviderRequest omitted.

/**
 * serializeAws_json1_1UpdateManagedLoginBrandingRequest
 */
const se_UpdateManagedLoginBrandingRequest = (
  input: UpdateManagedLoginBrandingRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Assets: (_) => se_AssetListType(_, context),
    ManagedLoginBrandingId: [],
    Settings: (_) => se_Document(_, context),
    UseCognitoProvidedValues: [],
    UserPoolId: [],
  });
};

// se_UpdateResourceServerRequest omitted.

// se_UpdateUserAttributesRequest omitted.

// se_UpdateUserPoolClientRequest omitted.

// se_UpdateUserPoolDomainRequest omitted.

// se_UpdateUserPoolRequest omitted.

// se_UserAttributeUpdateSettingsType omitted.

// se_UserContextDataType omitted.

// se_UsernameAttributesListType omitted.

// se_UsernameConfigurationType omitted.

// se_UserPoolAddOnsType omitted.

// se_UserPoolPolicyType omitted.

// se_UserPoolTagsListType omitted.

// se_UserPoolTagsType omitted.

// se_VerificationMessageTemplateType omitted.

// se_VerifiedAttributesListType omitted.

// se_VerifySoftwareTokenRequest omitted.

// se_VerifyUserAttributeRequest omitted.

// se_WebAuthnConfigurationType omitted.

// de_AccountRecoverySettingType omitted.

// de_AccountTakeoverActionsType omitted.

// de_AccountTakeoverActionType omitted.

// de_AccountTakeoverRiskConfigurationType omitted.

// de_AddCustomAttributesResponse omitted.

// de_AdminConfirmSignUpResponse omitted.

// de_AdminCreateUserConfigType omitted.

/**
 * deserializeAws_json1_1AdminCreateUserResponse
 */
const de_AdminCreateUserResponse = (output: any, context: __SerdeContext): AdminCreateUserResponse => {
  return take(output, {
    User: (_: any) => de_UserType(_, context),
  }) as any;
};

// de_AdminDeleteUserAttributesResponse omitted.

// de_AdminDisableProviderForUserResponse omitted.

// de_AdminDisableUserResponse omitted.

// de_AdminEnableUserResponse omitted.

/**
 * deserializeAws_json1_1AdminGetDeviceResponse
 */
const de_AdminGetDeviceResponse = (output: any, context: __SerdeContext): AdminGetDeviceResponse => {
  return take(output, {
    Device: (_: any) => de_DeviceType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1AdminGetUserResponse
 */
const de_AdminGetUserResponse = (output: any, context: __SerdeContext): AdminGetUserResponse => {
  return take(output, {
    Enabled: __expectBoolean,
    MFAOptions: _json,
    PreferredMfaSetting: __expectString,
    UserAttributes: _json,
    UserCreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UserLastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UserMFASettingList: _json,
    UserStatus: __expectString,
    Username: __expectString,
  }) as any;
};

// de_AdminInitiateAuthResponse omitted.

// de_AdminLinkProviderForUserResponse omitted.

/**
 * deserializeAws_json1_1AdminListDevicesResponse
 */
const de_AdminListDevicesResponse = (output: any, context: __SerdeContext): AdminListDevicesResponse => {
  return take(output, {
    Devices: (_: any) => de_DeviceListType(_, context),
    PaginationToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AdminListGroupsForUserResponse
 */
const de_AdminListGroupsForUserResponse = (output: any, context: __SerdeContext): AdminListGroupsForUserResponse => {
  return take(output, {
    Groups: (_: any) => de_GroupListType(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AdminListUserAuthEventsResponse
 */
const de_AdminListUserAuthEventsResponse = (output: any, context: __SerdeContext): AdminListUserAuthEventsResponse => {
  return take(output, {
    AuthEvents: (_: any) => de_AuthEventsType(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_AdminResetUserPasswordResponse omitted.

// de_AdminRespondToAuthChallengeResponse omitted.

// de_AdminSetUserMFAPreferenceResponse omitted.

// de_AdminSetUserPasswordResponse omitted.

// de_AdminSetUserSettingsResponse omitted.

// de_AdminUpdateAuthEventFeedbackResponse omitted.

// de_AdminUpdateDeviceStatusResponse omitted.

// de_AdminUpdateUserAttributesResponse omitted.

// de_AdminUserGlobalSignOutResponse omitted.

// de_AdvancedSecurityAdditionalFlowsType omitted.

// de_AliasAttributesListType omitted.

// de_AliasExistsException omitted.

// de_AllowedFirstAuthFactorsListType omitted.

// de_AnalyticsConfigurationType omitted.

/**
 * deserializeAws_json1_1AssetListType
 */
const de_AssetListType = (output: any, context: __SerdeContext): AssetType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssetType
 */
const de_AssetType = (output: any, context: __SerdeContext): AssetType => {
  return take(output, {
    Bytes: context.base64Decoder,
    Category: __expectString,
    ColorMode: __expectString,
    Extension: __expectString,
    ResourceId: __expectString,
  }) as any;
};

// de_AssociateSoftwareTokenResponse omitted.

// de_AttributeListType omitted.

// de_AttributeMappingType omitted.

// de_AttributesRequireVerificationBeforeUpdateType omitted.

// de_AttributeType omitted.

// de_AuthenticationResultType omitted.

/**
 * deserializeAws_json1_1AuthEventsType
 */
const de_AuthEventsType = (output: any, context: __SerdeContext): AuthEventType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AuthEventType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AuthEventType
 */
const de_AuthEventType = (output: any, context: __SerdeContext): AuthEventType => {
  return take(output, {
    ChallengeResponses: _json,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EventContextData: _json,
    EventFeedback: (_: any) => de_EventFeedbackType(_, context),
    EventId: __expectString,
    EventResponse: __expectString,
    EventRisk: _json,
    EventType: __expectString,
  }) as any;
};

// de_AvailableChallengeListType omitted.

// de_BlockedIPRangeListType omitted.

// de_CallbackURLsListType omitted.

// de_ChallengeParametersType omitted.

// de_ChallengeResponseListType omitted.

// de_ChallengeResponseType omitted.

// de_ChangePasswordResponse omitted.

// de_ClientPermissionListType omitted.

// de_CloudWatchLogsConfigurationType omitted.

// de_CodeDeliveryDetailsListType omitted.

// de_CodeDeliveryDetailsType omitted.

// de_CodeDeliveryFailureException omitted.

// de_CodeMismatchException omitted.

// de_CompleteWebAuthnRegistrationResponse omitted.

// de_CompromisedCredentialsActionsType omitted.

// de_CompromisedCredentialsRiskConfigurationType omitted.

// de_ConcurrentModificationException omitted.

// de_ConfiguredUserAuthFactorsListType omitted.

// de_ConfirmDeviceResponse omitted.

// de_ConfirmForgotPasswordResponse omitted.

// de_ConfirmSignUpResponse omitted.

/**
 * deserializeAws_json1_1CreateGroupResponse
 */
const de_CreateGroupResponse = (output: any, context: __SerdeContext): CreateGroupResponse => {
  return take(output, {
    Group: (_: any) => de_GroupType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateIdentityProviderResponse
 */
const de_CreateIdentityProviderResponse = (output: any, context: __SerdeContext): CreateIdentityProviderResponse => {
  return take(output, {
    IdentityProvider: (_: any) => de_IdentityProviderType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateManagedLoginBrandingResponse
 */
const de_CreateManagedLoginBrandingResponse = (
  output: any,
  context: __SerdeContext
): CreateManagedLoginBrandingResponse => {
  return take(output, {
    ManagedLoginBranding: (_: any) => de_ManagedLoginBrandingType(_, context),
  }) as any;
};

// de_CreateResourceServerResponse omitted.

/**
 * deserializeAws_json1_1CreateUserImportJobResponse
 */
const de_CreateUserImportJobResponse = (output: any, context: __SerdeContext): CreateUserImportJobResponse => {
  return take(output, {
    UserImportJob: (_: any) => de_UserImportJobType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateUserPoolClientResponse
 */
const de_CreateUserPoolClientResponse = (output: any, context: __SerdeContext): CreateUserPoolClientResponse => {
  return take(output, {
    UserPoolClient: (_: any) => de_UserPoolClientType(_, context),
  }) as any;
};

// de_CreateUserPoolDomainResponse omitted.

/**
 * deserializeAws_json1_1CreateUserPoolResponse
 */
const de_CreateUserPoolResponse = (output: any, context: __SerdeContext): CreateUserPoolResponse => {
  return take(output, {
    UserPool: (_: any) => de_UserPoolType(_, context),
  }) as any;
};

// de_CustomDomainConfigType omitted.

// de_CustomEmailLambdaVersionConfigType omitted.

// de_CustomSMSLambdaVersionConfigType omitted.

// de_DeleteUserAttributesResponse omitted.

// de_DeleteUserPoolDomainResponse omitted.

// de_DeleteWebAuthnCredentialResponse omitted.

/**
 * deserializeAws_json1_1DescribeIdentityProviderResponse
 */
const de_DescribeIdentityProviderResponse = (
  output: any,
  context: __SerdeContext
): DescribeIdentityProviderResponse => {
  return take(output, {
    IdentityProvider: (_: any) => de_IdentityProviderType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeManagedLoginBrandingByClientResponse
 */
const de_DescribeManagedLoginBrandingByClientResponse = (
  output: any,
  context: __SerdeContext
): DescribeManagedLoginBrandingByClientResponse => {
  return take(output, {
    ManagedLoginBranding: (_: any) => de_ManagedLoginBrandingType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeManagedLoginBrandingResponse
 */
const de_DescribeManagedLoginBrandingResponse = (
  output: any,
  context: __SerdeContext
): DescribeManagedLoginBrandingResponse => {
  return take(output, {
    ManagedLoginBranding: (_: any) => de_ManagedLoginBrandingType(_, context),
  }) as any;
};

// de_DescribeResourceServerResponse omitted.

/**
 * deserializeAws_json1_1DescribeRiskConfigurationResponse
 */
const de_DescribeRiskConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeRiskConfigurationResponse => {
  return take(output, {
    RiskConfiguration: (_: any) => de_RiskConfigurationType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeUserImportJobResponse
 */
const de_DescribeUserImportJobResponse = (output: any, context: __SerdeContext): DescribeUserImportJobResponse => {
  return take(output, {
    UserImportJob: (_: any) => de_UserImportJobType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeUserPoolClientResponse
 */
const de_DescribeUserPoolClientResponse = (output: any, context: __SerdeContext): DescribeUserPoolClientResponse => {
  return take(output, {
    UserPoolClient: (_: any) => de_UserPoolClientType(_, context),
  }) as any;
};

// de_DescribeUserPoolDomainResponse omitted.

/**
 * deserializeAws_json1_1DescribeUserPoolResponse
 */
const de_DescribeUserPoolResponse = (output: any, context: __SerdeContext): DescribeUserPoolResponse => {
  return take(output, {
    UserPool: (_: any) => de_UserPoolType(_, context),
  }) as any;
};

// de_DeviceConfigurationType omitted.

// de_DeviceKeyExistsException omitted.

/**
 * deserializeAws_json1_1DeviceListType
 */
const de_DeviceListType = (output: any, context: __SerdeContext): DeviceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceType
 */
const de_DeviceType = (output: any, context: __SerdeContext): DeviceType => {
  return take(output, {
    DeviceAttributes: _json,
    DeviceCreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceKey: __expectString,
    DeviceLastAuthenticatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceLastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_DomainDescriptionType omitted.

// de_DuplicateProviderException omitted.

// de_EmailConfigurationType omitted.

// de_EmailMfaConfigType omitted.

// de_EnableSoftwareTokenMFAException omitted.

// de_EventContextDataType omitted.

/**
 * deserializeAws_json1_1EventFeedbackType
 */
const de_EventFeedbackType = (output: any, context: __SerdeContext): EventFeedbackType => {
  return take(output, {
    FeedbackDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FeedbackValue: __expectString,
    Provider: __expectString,
  }) as any;
};

// de_EventFiltersType omitted.

// de_EventRiskType omitted.

// de_ExpiredCodeException omitted.

// de_ExplicitAuthFlowsListType omitted.

// de_FeatureUnavailableInTierException omitted.

// de_FirehoseConfigurationType omitted.

// de_ForbiddenException omitted.

// de_ForgotPasswordResponse omitted.

// de_GetCSVHeaderResponse omitted.

/**
 * deserializeAws_json1_1GetDeviceResponse
 */
const de_GetDeviceResponse = (output: any, context: __SerdeContext): GetDeviceResponse => {
  return take(output, {
    Device: (_: any) => de_DeviceType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetGroupResponse
 */
const de_GetGroupResponse = (output: any, context: __SerdeContext): GetGroupResponse => {
  return take(output, {
    Group: (_: any) => de_GroupType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetIdentityProviderByIdentifierResponse
 */
const de_GetIdentityProviderByIdentifierResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityProviderByIdentifierResponse => {
  return take(output, {
    IdentityProvider: (_: any) => de_IdentityProviderType(_, context),
  }) as any;
};

// de_GetLogDeliveryConfigurationResponse omitted.

// de_GetSigningCertificateResponse omitted.

// de_GetTokensFromRefreshTokenResponse omitted.

/**
 * deserializeAws_json1_1GetUICustomizationResponse
 */
const de_GetUICustomizationResponse = (output: any, context: __SerdeContext): GetUICustomizationResponse => {
  return take(output, {
    UICustomization: (_: any) => de_UICustomizationType(_, context),
  }) as any;
};

// de_GetUserAttributeVerificationCodeResponse omitted.

// de_GetUserAuthFactorsResponse omitted.

// de_GetUserPoolMfaConfigResponse omitted.

// de_GetUserResponse omitted.

// de_GlobalSignOutResponse omitted.

// de_GroupExistsException omitted.

/**
 * deserializeAws_json1_1GroupListType
 */
const de_GroupListType = (output: any, context: __SerdeContext): GroupType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GroupType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GroupType
 */
const de_GroupType = (output: any, context: __SerdeContext): GroupType => {
  return take(output, {
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    GroupName: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Precedence: __expectInt32,
    RoleArn: __expectString,
    UserPoolId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1IdentityProviderType
 */
const de_IdentityProviderType = (output: any, context: __SerdeContext): IdentityProviderType => {
  return take(output, {
    AttributeMapping: _json,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IdpIdentifiers: _json,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProviderDetails: _json,
    ProviderName: __expectString,
    ProviderType: __expectString,
    UserPoolId: __expectString,
  }) as any;
};

// de_IdpIdentifiersListType omitted.

// de_InitiateAuthResponse omitted.

// de_InternalErrorException omitted.

// de_InvalidEmailRoleAccessPolicyException omitted.

// de_InvalidLambdaResponseException omitted.

// de_InvalidOAuthFlowException omitted.

// de_InvalidParameterException omitted.

// de_InvalidPasswordException omitted.

// de_InvalidSmsRoleAccessPolicyException omitted.

// de_InvalidSmsRoleTrustRelationshipException omitted.

// de_InvalidUserPoolConfigurationException omitted.

// de_LambdaConfigType omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListDevicesResponse
 */
const de_ListDevicesResponse = (output: any, context: __SerdeContext): ListDevicesResponse => {
  return take(output, {
    Devices: (_: any) => de_DeviceListType(_, context),
    PaginationToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListGroupsResponse
 */
const de_ListGroupsResponse = (output: any, context: __SerdeContext): ListGroupsResponse => {
  return take(output, {
    Groups: (_: any) => de_GroupListType(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListIdentityProvidersResponse
 */
const de_ListIdentityProvidersResponse = (output: any, context: __SerdeContext): ListIdentityProvidersResponse => {
  return take(output, {
    NextToken: __expectString,
    Providers: (_: any) => de_ProvidersListType(_, context),
  }) as any;
};

// de_ListOfStringTypes omitted.

// de_ListResourceServersResponse omitted.

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1ListUserImportJobsResponse
 */
const de_ListUserImportJobsResponse = (output: any, context: __SerdeContext): ListUserImportJobsResponse => {
  return take(output, {
    PaginationToken: __expectString,
    UserImportJobs: (_: any) => de_UserImportJobsListType(_, context),
  }) as any;
};

// de_ListUserPoolClientsResponse omitted.

/**
 * deserializeAws_json1_1ListUserPoolsResponse
 */
const de_ListUserPoolsResponse = (output: any, context: __SerdeContext): ListUserPoolsResponse => {
  return take(output, {
    NextToken: __expectString,
    UserPools: (_: any) => de_UserPoolListType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListUsersInGroupResponse
 */
const de_ListUsersInGroupResponse = (output: any, context: __SerdeContext): ListUsersInGroupResponse => {
  return take(output, {
    NextToken: __expectString,
    Users: (_: any) => de_UsersListType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListUsersResponse
 */
const de_ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  return take(output, {
    PaginationToken: __expectString,
    Users: (_: any) => de_UsersListType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListWebAuthnCredentialsResponse
 */
const de_ListWebAuthnCredentialsResponse = (output: any, context: __SerdeContext): ListWebAuthnCredentialsResponse => {
  return take(output, {
    Credentials: (_: any) => de_WebAuthnCredentialDescriptionListType(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_LogConfigurationListType omitted.

// de_LogConfigurationType omitted.

// de_LogDeliveryConfigurationType omitted.

// de_LogoutURLsListType omitted.

// de_ManagedLoginBrandingExistsException omitted.

/**
 * deserializeAws_json1_1ManagedLoginBrandingType
 */
const de_ManagedLoginBrandingType = (output: any, context: __SerdeContext): ManagedLoginBrandingType => {
  return take(output, {
    Assets: (_: any) => de_AssetListType(_, context),
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ManagedLoginBrandingId: __expectString,
    Settings: (_: any) => de_Document(_, context),
    UseCognitoProvidedValues: __expectBoolean,
    UserPoolId: __expectString,
  }) as any;
};

// de_MessageTemplateType omitted.

// de_MFAMethodNotFoundException omitted.

// de_MFAOptionListType omitted.

// de_MFAOptionType omitted.

// de_NewDeviceMetadataType omitted.

// de_NotAuthorizedException omitted.

// de_NotifyConfigurationType omitted.

// de_NotifyEmailType omitted.

// de_NumberAttributeConstraintsType omitted.

// de_OAuthFlowsType omitted.

// de_PasswordHistoryPolicyViolationException omitted.

// de_PasswordPolicyType omitted.

// de_PasswordResetRequiredException omitted.

// de_PreconditionNotMetException omitted.

// de_PreTokenGenerationVersionConfigType omitted.

/**
 * deserializeAws_json1_1ProviderDescription
 */
const de_ProviderDescription = (output: any, context: __SerdeContext): ProviderDescription => {
  return take(output, {
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProviderName: __expectString,
    ProviderType: __expectString,
  }) as any;
};

// de_ProviderDetailsType omitted.

/**
 * deserializeAws_json1_1ProvidersListType
 */
const de_ProvidersListType = (output: any, context: __SerdeContext): ProviderDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProviderDescription(entry, context);
    });
  return retVal;
};

// de_RecoveryMechanismsType omitted.

// de_RecoveryOptionType omitted.

// de_RefreshTokenReuseException omitted.

// de_RefreshTokenRotationType omitted.

// de_ResendConfirmationCodeResponse omitted.

// de_ResourceNotFoundException omitted.

// de_ResourceServerScopeListType omitted.

// de_ResourceServerScopeType omitted.

// de_ResourceServersListType omitted.

// de_ResourceServerType omitted.

// de_RespondToAuthChallengeResponse omitted.

// de_RevokeTokenResponse omitted.

/**
 * deserializeAws_json1_1RiskConfigurationType
 */
const de_RiskConfigurationType = (output: any, context: __SerdeContext): RiskConfigurationType => {
  return take(output, {
    AccountTakeoverRiskConfiguration: _json,
    ClientId: __expectString,
    CompromisedCredentialsRiskConfiguration: _json,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RiskExceptionConfiguration: _json,
    UserPoolId: __expectString,
  }) as any;
};

// de_RiskExceptionConfigurationType omitted.

// de_S3ConfigurationType omitted.

// de_SchemaAttributesListType omitted.

// de_SchemaAttributeType omitted.

// de_ScopeDoesNotExistException omitted.

// de_ScopeListType omitted.

// de_SetLogDeliveryConfigurationResponse omitted.

/**
 * deserializeAws_json1_1SetRiskConfigurationResponse
 */
const de_SetRiskConfigurationResponse = (output: any, context: __SerdeContext): SetRiskConfigurationResponse => {
  return take(output, {
    RiskConfiguration: (_: any) => de_RiskConfigurationType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SetUICustomizationResponse
 */
const de_SetUICustomizationResponse = (output: any, context: __SerdeContext): SetUICustomizationResponse => {
  return take(output, {
    UICustomization: (_: any) => de_UICustomizationType(_, context),
  }) as any;
};

// de_SetUserMFAPreferenceResponse omitted.

// de_SetUserPoolMfaConfigResponse omitted.

// de_SetUserSettingsResponse omitted.

// de_SignInPolicyType omitted.

// de_SignUpResponse omitted.

// de_SkippedIPRangeListType omitted.

// de_SmsConfigurationType omitted.

// de_SmsMfaConfigType omitted.

// de_SoftwareTokenMfaConfigType omitted.

// de_SoftwareTokenMFANotFoundException omitted.

/**
 * deserializeAws_json1_1StartUserImportJobResponse
 */
const de_StartUserImportJobResponse = (output: any, context: __SerdeContext): StartUserImportJobResponse => {
  return take(output, {
    UserImportJob: (_: any) => de_UserImportJobType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartWebAuthnRegistrationResponse
 */
const de_StartWebAuthnRegistrationResponse = (
  output: any,
  context: __SerdeContext
): StartWebAuthnRegistrationResponse => {
  return take(output, {
    CredentialCreationOptions: (_: any) => de_Document(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopUserImportJobResponse
 */
const de_StopUserImportJobResponse = (output: any, context: __SerdeContext): StopUserImportJobResponse => {
  return take(output, {
    UserImportJob: (_: any) => de_UserImportJobType(_, context),
  }) as any;
};

// de_StringAttributeConstraintsType omitted.

// de_SupportedIdentityProvidersListType omitted.

// de_TagResourceResponse omitted.

// de_TierChangeNotAllowedException omitted.

// de_TokenValidityUnitsType omitted.

// de_TooManyFailedAttemptsException omitted.

// de_TooManyRequestsException omitted.

/**
 * deserializeAws_json1_1UICustomizationType
 */
const de_UICustomizationType = (output: any, context: __SerdeContext): UICustomizationType => {
  return take(output, {
    CSS: __expectString,
    CSSVersion: __expectString,
    ClientId: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ImageUrl: __expectString,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UserPoolId: __expectString,
  }) as any;
};

// de_UnauthorizedException omitted.

// de_UnexpectedLambdaException omitted.

// de_UnsupportedIdentityProviderException omitted.

// de_UnsupportedOperationException omitted.

// de_UnsupportedTokenTypeException omitted.

// de_UnsupportedUserStateException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateAuthEventFeedbackResponse omitted.

// de_UpdateDeviceStatusResponse omitted.

/**
 * deserializeAws_json1_1UpdateGroupResponse
 */
const de_UpdateGroupResponse = (output: any, context: __SerdeContext): UpdateGroupResponse => {
  return take(output, {
    Group: (_: any) => de_GroupType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateIdentityProviderResponse
 */
const de_UpdateIdentityProviderResponse = (output: any, context: __SerdeContext): UpdateIdentityProviderResponse => {
  return take(output, {
    IdentityProvider: (_: any) => de_IdentityProviderType(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateManagedLoginBrandingResponse
 */
const de_UpdateManagedLoginBrandingResponse = (
  output: any,
  context: __SerdeContext
): UpdateManagedLoginBrandingResponse => {
  return take(output, {
    ManagedLoginBranding: (_: any) => de_ManagedLoginBrandingType(_, context),
  }) as any;
};

// de_UpdateResourceServerResponse omitted.

// de_UpdateUserAttributesResponse omitted.

/**
 * deserializeAws_json1_1UpdateUserPoolClientResponse
 */
const de_UpdateUserPoolClientResponse = (output: any, context: __SerdeContext): UpdateUserPoolClientResponse => {
  return take(output, {
    UserPoolClient: (_: any) => de_UserPoolClientType(_, context),
  }) as any;
};

// de_UpdateUserPoolDomainResponse omitted.

// de_UpdateUserPoolResponse omitted.

// de_UserAttributeUpdateSettingsType omitted.

// de_UserImportInProgressException omitted.

/**
 * deserializeAws_json1_1UserImportJobsListType
 */
const de_UserImportJobsListType = (output: any, context: __SerdeContext): UserImportJobType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserImportJobType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserImportJobType
 */
const de_UserImportJobType = (output: any, context: __SerdeContext): UserImportJobType => {
  return take(output, {
    CloudWatchLogsRoleArn: __expectString,
    CompletionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CompletionMessage: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailedUsers: __expectLong,
    ImportedUsers: __expectLong,
    JobId: __expectString,
    JobName: __expectString,
    PreSignedUrl: __expectString,
    SkippedUsers: __expectLong,
    StartDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    UserPoolId: __expectString,
  }) as any;
};

// de_UserLambdaValidationException omitted.

// de_UserMFASettingListType omitted.

// de_UsernameAttributesListType omitted.

// de_UsernameConfigurationType omitted.

// de_UsernameExistsException omitted.

// de_UserNotConfirmedException omitted.

// de_UserNotFoundException omitted.

// de_UserPoolAddOnNotEnabledException omitted.

// de_UserPoolAddOnsType omitted.

// de_UserPoolClientDescription omitted.

// de_UserPoolClientListType omitted.

/**
 * deserializeAws_json1_1UserPoolClientType
 */
const de_UserPoolClientType = (output: any, context: __SerdeContext): UserPoolClientType => {
  return take(output, {
    AccessTokenValidity: __expectInt32,
    AllowedOAuthFlows: _json,
    AllowedOAuthFlowsUserPoolClient: __expectBoolean,
    AllowedOAuthScopes: _json,
    AnalyticsConfiguration: _json,
    AuthSessionValidity: __expectInt32,
    CallbackURLs: _json,
    ClientId: __expectString,
    ClientName: __expectString,
    ClientSecret: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultRedirectURI: __expectString,
    EnablePropagateAdditionalUserContextData: __expectBoolean,
    EnableTokenRevocation: __expectBoolean,
    ExplicitAuthFlows: _json,
    IdTokenValidity: __expectInt32,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LogoutURLs: _json,
    PreventUserExistenceErrors: __expectString,
    ReadAttributes: _json,
    RefreshTokenRotation: _json,
    RefreshTokenValidity: __expectInt32,
    SupportedIdentityProviders: _json,
    TokenValidityUnits: _json,
    UserPoolId: __expectString,
    WriteAttributes: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1UserPoolDescriptionType
 */
const de_UserPoolDescriptionType = (output: any, context: __SerdeContext): UserPoolDescriptionType => {
  return take(output, {
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    LambdaConfig: _json,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UserPoolListType
 */
const de_UserPoolListType = (output: any, context: __SerdeContext): UserPoolDescriptionType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserPoolDescriptionType(entry, context);
    });
  return retVal;
};

// de_UserPoolPolicyType omitted.

// de_UserPoolTaggingException omitted.

// de_UserPoolTagsType omitted.

/**
 * deserializeAws_json1_1UserPoolType
 */
const de_UserPoolType = (output: any, context: __SerdeContext): UserPoolType => {
  return take(output, {
    AccountRecoverySetting: _json,
    AdminCreateUserConfig: _json,
    AliasAttributes: _json,
    Arn: __expectString,
    AutoVerifiedAttributes: _json,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomDomain: __expectString,
    DeletionProtection: __expectString,
    DeviceConfiguration: _json,
    Domain: __expectString,
    EmailConfiguration: _json,
    EmailConfigurationFailure: __expectString,
    EmailVerificationMessage: __expectString,
    EmailVerificationSubject: __expectString,
    EstimatedNumberOfUsers: __expectInt32,
    Id: __expectString,
    LambdaConfig: _json,
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MfaConfiguration: __expectString,
    Name: __expectString,
    Policies: _json,
    SchemaAttributes: _json,
    SmsAuthenticationMessage: __expectString,
    SmsConfiguration: _json,
    SmsConfigurationFailure: __expectString,
    SmsVerificationMessage: __expectString,
    Status: __expectString,
    UserAttributeUpdateSettings: _json,
    UserPoolAddOns: _json,
    UserPoolTags: _json,
    UserPoolTier: __expectString,
    UsernameAttributes: _json,
    UsernameConfiguration: _json,
    VerificationMessageTemplate: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1UsersListType
 */
const de_UsersListType = (output: any, context: __SerdeContext): UserType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserType
 */
const de_UserType = (output: any, context: __SerdeContext): UserType => {
  return take(output, {
    Attributes: _json,
    Enabled: __expectBoolean,
    MFAOptions: _json,
    UserCreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UserLastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    UserStatus: __expectString,
    Username: __expectString,
  }) as any;
};

// de_VerificationMessageTemplateType omitted.

// de_VerifiedAttributesListType omitted.

// de_VerifySoftwareTokenResponse omitted.

// de_VerifyUserAttributeResponse omitted.

// de_WebAuthnAuthenticatorTransportsList omitted.

// de_WebAuthnChallengeNotFoundException omitted.

// de_WebAuthnClientMismatchException omitted.

// de_WebAuthnConfigurationMissingException omitted.

// de_WebAuthnConfigurationType omitted.

/**
 * deserializeAws_json1_1WebAuthnCredentialDescription
 */
const de_WebAuthnCredentialDescription = (output: any, context: __SerdeContext): WebAuthnCredentialDescription => {
  return take(output, {
    AuthenticatorAttachment: __expectString,
    AuthenticatorTransports: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CredentialId: __expectString,
    FriendlyCredentialName: __expectString,
    RelyingPartyId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1WebAuthnCredentialDescriptionListType
 */
const de_WebAuthnCredentialDescriptionListType = (
  output: any,
  context: __SerdeContext
): WebAuthnCredentialDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WebAuthnCredentialDescription(entry, context);
    });
  return retVal;
};

// de_WebAuthnCredentialNotSupportedException omitted.

// de_WebAuthnNotEnabledException omitted.

// de_WebAuthnOriginNotAllowedException omitted.

// de_WebAuthnRelyingPartyMismatchException omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSCognitoIdentityProviderService.${operation}`,
  };
}
