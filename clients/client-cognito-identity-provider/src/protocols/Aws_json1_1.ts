// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  DescribeIdentityProviderCommandInput,
  DescribeIdentityProviderCommandOutput,
} from "../commands/DescribeIdentityProviderCommand";
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
  GetSigningCertificateCommandInput,
  GetSigningCertificateCommandOutput,
} from "../commands/GetSigningCertificateCommand";
import { GetUICustomizationCommandInput, GetUICustomizationCommandOutput } from "../commands/GetUICustomizationCommand";
import {
  GetUserAttributeVerificationCodeCommandInput,
  GetUserAttributeVerificationCodeCommandOutput,
} from "../commands/GetUserAttributeVerificationCodeCommand";
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
  ResendConfirmationCodeCommandInput,
  ResendConfirmationCodeCommandOutput,
} from "../commands/ResendConfirmationCodeCommand";
import {
  RespondToAuthChallengeCommandInput,
  RespondToAuthChallengeCommandOutput,
} from "../commands/RespondToAuthChallengeCommand";
import { RevokeTokenCommandInput, RevokeTokenCommandOutput } from "../commands/RevokeTokenCommand";
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
  AddCustomAttributesResponse,
  AdminAddUserToGroupRequest,
  AdminConfirmSignUpRequest,
  AdminConfirmSignUpResponse,
  AdminCreateUserConfigType,
  AdminCreateUserRequest,
  AdminCreateUserResponse,
  AdminDeleteUserAttributesRequest,
  AdminDeleteUserAttributesResponse,
  AdminDeleteUserRequest,
  AdminDisableProviderForUserRequest,
  AdminDisableProviderForUserResponse,
  AdminDisableUserRequest,
  AdminDisableUserResponse,
  AdminEnableUserRequest,
  AdminEnableUserResponse,
  AdminForgetDeviceRequest,
  AdminGetDeviceRequest,
  AdminGetDeviceResponse,
  AdminGetUserRequest,
  AdminGetUserResponse,
  AdminInitiateAuthRequest,
  AdminInitiateAuthResponse,
  AdminLinkProviderForUserRequest,
  AdminLinkProviderForUserResponse,
  AdminListDevicesRequest,
  AdminListDevicesResponse,
  AdminListGroupsForUserRequest,
  AdminListGroupsForUserResponse,
  AdminListUserAuthEventsRequest,
  AdminListUserAuthEventsResponse,
  AdminRemoveUserFromGroupRequest,
  AdminResetUserPasswordRequest,
  AdminResetUserPasswordResponse,
  AdminRespondToAuthChallengeRequest,
  AdminRespondToAuthChallengeResponse,
  AdminSetUserMFAPreferenceRequest,
  AdminSetUserMFAPreferenceResponse,
  AdminSetUserPasswordRequest,
  AdminSetUserPasswordResponse,
  AdminSetUserSettingsRequest,
  AdminSetUserSettingsResponse,
  AdminUpdateAuthEventFeedbackRequest,
  AdminUpdateAuthEventFeedbackResponse,
  AdminUpdateDeviceStatusRequest,
  AdminUpdateDeviceStatusResponse,
  AdminUpdateUserAttributesRequest,
  AdminUpdateUserAttributesResponse,
  AdminUserGlobalSignOutRequest,
  AdminUserGlobalSignOutResponse,
  AliasAttributeType,
  AliasExistsException,
  AnalyticsConfigurationType,
  AnalyticsMetadataType,
  AssociateSoftwareTokenRequest,
  AssociateSoftwareTokenResponse,
  AttributeType,
  AuthenticationResultType,
  AuthEventType,
  ChallengeResponseType,
  ChangePasswordRequest,
  ChangePasswordResponse,
  CodeDeliveryDetailsType,
  CodeDeliveryFailureException,
  CodeMismatchException,
  CompromisedCredentialsActionsType,
  CompromisedCredentialsRiskConfigurationType,
  ConcurrentModificationException,
  ConfirmDeviceRequest,
  ConfirmDeviceResponse,
  ConfirmForgotPasswordRequest,
  ConfirmForgotPasswordResponse,
  ConfirmSignUpRequest,
  ConfirmSignUpResponse,
  ContextDataType,
  CreateGroupRequest,
  CreateGroupResponse,
  CreateIdentityProviderRequest,
  CreateIdentityProviderResponse,
  CreateResourceServerRequest,
  CreateResourceServerResponse,
  CreateUserImportJobRequest,
  CreateUserImportJobResponse,
  CreateUserPoolClientRequest,
  CreateUserPoolClientResponse,
  CreateUserPoolDomainRequest,
  CreateUserPoolDomainResponse,
  CreateUserPoolRequest,
  CreateUserPoolResponse,
  CustomDomainConfigType,
  CustomEmailLambdaVersionConfigType,
  CustomSMSLambdaVersionConfigType,
  DeleteGroupRequest,
  DeleteIdentityProviderRequest,
  DeleteResourceServerRequest,
  DeleteUserAttributesRequest,
  DeleteUserAttributesResponse,
  DeleteUserPoolClientRequest,
  DeleteUserPoolDomainRequest,
  DeleteUserPoolDomainResponse,
  DeleteUserPoolRequest,
  DeleteUserRequest,
  DeliveryMediumType,
  DescribeIdentityProviderRequest,
  DescribeIdentityProviderResponse,
  DescribeResourceServerRequest,
  DescribeResourceServerResponse,
  DescribeRiskConfigurationRequest,
  DescribeRiskConfigurationResponse,
  DescribeUserImportJobRequest,
  DescribeUserImportJobResponse,
  DescribeUserPoolClientRequest,
  DescribeUserPoolClientResponse,
  DescribeUserPoolDomainRequest,
  DescribeUserPoolDomainResponse,
  DescribeUserPoolRequest,
  DescribeUserPoolResponse,
  DeviceConfigurationType,
  DeviceSecretVerifierConfigType,
  DeviceType,
  DomainDescriptionType,
  DuplicateProviderException,
  EmailConfigurationType,
  EventContextDataType,
  EventFeedbackType,
  EventFilterType,
  EventRiskType,
  ExpiredCodeException,
  ExplicitAuthFlowsType,
  ForbiddenException,
  ForgetDeviceRequest,
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  GetCSVHeaderRequest,
  GetCSVHeaderResponse,
  GetDeviceRequest,
  GetDeviceResponse,
  GetGroupRequest,
  GetGroupResponse,
  GetIdentityProviderByIdentifierRequest,
  GetIdentityProviderByIdentifierResponse,
  GetSigningCertificateRequest,
  GetSigningCertificateResponse,
  GetUICustomizationRequest,
  GetUICustomizationResponse,
  GetUserAttributeVerificationCodeRequest,
  GetUserAttributeVerificationCodeResponse,
  GetUserPoolMfaConfigRequest,
  GetUserPoolMfaConfigResponse,
  GetUserRequest,
  GetUserResponse,
  GlobalSignOutRequest,
  GlobalSignOutResponse,
  GroupExistsException,
  GroupType,
  HttpHeader,
  IdentityProviderType,
  InitiateAuthRequest,
  InitiateAuthResponse,
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
  ListDevicesRequest,
  ListDevicesResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListIdentityProvidersRequest,
  ListIdentityProvidersResponse,
  ListResourceServersRequest,
  ListResourceServersResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListUserImportJobsRequest,
  ListUserImportJobsResponse,
  ListUserPoolClientsRequest,
  ListUserPoolClientsResponse,
  ListUserPoolsRequest,
  ListUserPoolsResponse,
  ListUsersInGroupRequest,
  ListUsersInGroupResponse,
  ListUsersRequest,
  ListUsersResponse,
  MessageTemplateType,
  MFAMethodNotFoundException,
  MFAOptionType,
  NewDeviceMetadataType,
  NotAuthorizedException,
  NotifyConfigurationType,
  NotifyEmailType,
  NumberAttributeConstraintsType,
  OAuthFlowType,
  PasswordPolicyType,
  PasswordResetRequiredException,
  PreconditionNotMetException,
  ProviderDescription,
  ProviderUserIdentifierType,
  RecoveryOptionType,
  ResendConfirmationCodeRequest,
  ResendConfirmationCodeResponse,
  ResourceNotFoundException,
  ResourceServerScopeType,
  ResourceServerType,
  RespondToAuthChallengeRequest,
  RespondToAuthChallengeResponse,
  RevokeTokenRequest,
  RevokeTokenResponse,
  RiskConfigurationType,
  RiskExceptionConfigurationType,
  SchemaAttributeType,
  ScopeDoesNotExistException,
  SetRiskConfigurationRequest,
  SetRiskConfigurationResponse,
  SetUICustomizationRequest,
  SetUICustomizationResponse,
  SetUserMFAPreferenceRequest,
  SetUserMFAPreferenceResponse,
  SetUserPoolMfaConfigRequest,
  SetUserPoolMfaConfigResponse,
  SetUserSettingsRequest,
  SetUserSettingsResponse,
  SmsConfigurationType,
  SmsMfaConfigType,
  SMSMfaSettingsType,
  SoftwareTokenMfaConfigType,
  SoftwareTokenMFANotFoundException,
  SoftwareTokenMfaSettingsType,
  StringAttributeConstraintsType,
  TokenValidityUnitsType,
  TooManyFailedAttemptsException,
  TooManyRequestsException,
  UICustomizationType,
  UnauthorizedException,
  UnexpectedLambdaException,
  UnsupportedIdentityProviderException,
  UnsupportedOperationException,
  UnsupportedTokenTypeException,
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
  UserPoolClientDescription,
  UserPoolClientType,
  UserPoolDescriptionType,
  UserPoolPolicyType,
  UserPoolTaggingException,
  UserPoolType,
  UserType,
  VerificationMessageTemplateType,
  VerifiedAttributeType,
} from "../models/models_0";
import {
  EnableSoftwareTokenMFAException,
  SignUpRequest,
  SignUpResponse,
  StartUserImportJobRequest,
  StartUserImportJobResponse,
  StopUserImportJobRequest,
  StopUserImportJobResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAuthEventFeedbackRequest,
  UpdateAuthEventFeedbackResponse,
  UpdateDeviceStatusRequest,
  UpdateDeviceStatusResponse,
  UpdateGroupRequest,
  UpdateGroupResponse,
  UpdateIdentityProviderRequest,
  UpdateIdentityProviderResponse,
  UpdateResourceServerRequest,
  UpdateResourceServerResponse,
  UpdateUserAttributesRequest,
  UpdateUserAttributesResponse,
  UpdateUserPoolClientRequest,
  UpdateUserPoolClientResponse,
  UpdateUserPoolDomainRequest,
  UpdateUserPoolDomainResponse,
  UpdateUserPoolRequest,
  UpdateUserPoolResponse,
  VerifySoftwareTokenRequest,
  VerifySoftwareTokenResponse,
  VerifyUserAttributeRequest,
  VerifyUserAttributeResponse,
} from "../models/models_1";

/**
 * serializeAws_json1_1AddCustomAttributesCommand
 */
export const se_AddCustomAttributesCommand = async (
  input: AddCustomAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AddCustomAttributes",
  };
  let body: any;
  body = JSON.stringify(se_AddCustomAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminAddUserToGroupCommand
 */
export const se_AdminAddUserToGroupCommand = async (
  input: AdminAddUserToGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminAddUserToGroup",
  };
  let body: any;
  body = JSON.stringify(se_AdminAddUserToGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminConfirmSignUpCommand
 */
export const se_AdminConfirmSignUpCommand = async (
  input: AdminConfirmSignUpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminConfirmSignUp",
  };
  let body: any;
  body = JSON.stringify(se_AdminConfirmSignUpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminCreateUserCommand
 */
export const se_AdminCreateUserCommand = async (
  input: AdminCreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminCreateUser",
  };
  let body: any;
  body = JSON.stringify(se_AdminCreateUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminDeleteUserCommand
 */
export const se_AdminDeleteUserCommand = async (
  input: AdminDeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminDeleteUser",
  };
  let body: any;
  body = JSON.stringify(se_AdminDeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminDeleteUserAttributesCommand
 */
export const se_AdminDeleteUserAttributesCommand = async (
  input: AdminDeleteUserAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminDeleteUserAttributes",
  };
  let body: any;
  body = JSON.stringify(se_AdminDeleteUserAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminDisableProviderForUserCommand
 */
export const se_AdminDisableProviderForUserCommand = async (
  input: AdminDisableProviderForUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminDisableProviderForUser",
  };
  let body: any;
  body = JSON.stringify(se_AdminDisableProviderForUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminDisableUserCommand
 */
export const se_AdminDisableUserCommand = async (
  input: AdminDisableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminDisableUser",
  };
  let body: any;
  body = JSON.stringify(se_AdminDisableUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminEnableUserCommand
 */
export const se_AdminEnableUserCommand = async (
  input: AdminEnableUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminEnableUser",
  };
  let body: any;
  body = JSON.stringify(se_AdminEnableUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminForgetDeviceCommand
 */
export const se_AdminForgetDeviceCommand = async (
  input: AdminForgetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminForgetDevice",
  };
  let body: any;
  body = JSON.stringify(se_AdminForgetDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminGetDeviceCommand
 */
export const se_AdminGetDeviceCommand = async (
  input: AdminGetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminGetDevice",
  };
  let body: any;
  body = JSON.stringify(se_AdminGetDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminGetUserCommand
 */
export const se_AdminGetUserCommand = async (
  input: AdminGetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminGetUser",
  };
  let body: any;
  body = JSON.stringify(se_AdminGetUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminInitiateAuthCommand
 */
export const se_AdminInitiateAuthCommand = async (
  input: AdminInitiateAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminInitiateAuth",
  };
  let body: any;
  body = JSON.stringify(se_AdminInitiateAuthRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminLinkProviderForUserCommand
 */
export const se_AdminLinkProviderForUserCommand = async (
  input: AdminLinkProviderForUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminLinkProviderForUser",
  };
  let body: any;
  body = JSON.stringify(se_AdminLinkProviderForUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminListDevicesCommand
 */
export const se_AdminListDevicesCommand = async (
  input: AdminListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminListDevices",
  };
  let body: any;
  body = JSON.stringify(se_AdminListDevicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminListGroupsForUserCommand
 */
export const se_AdminListGroupsForUserCommand = async (
  input: AdminListGroupsForUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminListGroupsForUser",
  };
  let body: any;
  body = JSON.stringify(se_AdminListGroupsForUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminListUserAuthEventsCommand
 */
export const se_AdminListUserAuthEventsCommand = async (
  input: AdminListUserAuthEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminListUserAuthEvents",
  };
  let body: any;
  body = JSON.stringify(se_AdminListUserAuthEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminRemoveUserFromGroupCommand
 */
export const se_AdminRemoveUserFromGroupCommand = async (
  input: AdminRemoveUserFromGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup",
  };
  let body: any;
  body = JSON.stringify(se_AdminRemoveUserFromGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminResetUserPasswordCommand
 */
export const se_AdminResetUserPasswordCommand = async (
  input: AdminResetUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminResetUserPassword",
  };
  let body: any;
  body = JSON.stringify(se_AdminResetUserPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminRespondToAuthChallengeCommand
 */
export const se_AdminRespondToAuthChallengeCommand = async (
  input: AdminRespondToAuthChallengeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge",
  };
  let body: any;
  body = JSON.stringify(se_AdminRespondToAuthChallengeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminSetUserMFAPreferenceCommand
 */
export const se_AdminSetUserMFAPreferenceCommand = async (
  input: AdminSetUserMFAPreferenceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminSetUserMFAPreference",
  };
  let body: any;
  body = JSON.stringify(se_AdminSetUserMFAPreferenceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminSetUserPasswordCommand
 */
export const se_AdminSetUserPasswordCommand = async (
  input: AdminSetUserPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminSetUserPassword",
  };
  let body: any;
  body = JSON.stringify(se_AdminSetUserPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminSetUserSettingsCommand
 */
export const se_AdminSetUserSettingsCommand = async (
  input: AdminSetUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminSetUserSettings",
  };
  let body: any;
  body = JSON.stringify(se_AdminSetUserSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminUpdateAuthEventFeedbackCommand
 */
export const se_AdminUpdateAuthEventFeedbackCommand = async (
  input: AdminUpdateAuthEventFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback",
  };
  let body: any;
  body = JSON.stringify(se_AdminUpdateAuthEventFeedbackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminUpdateDeviceStatusCommand
 */
export const se_AdminUpdateDeviceStatusCommand = async (
  input: AdminUpdateDeviceStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus",
  };
  let body: any;
  body = JSON.stringify(se_AdminUpdateDeviceStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminUpdateUserAttributesCommand
 */
export const se_AdminUpdateUserAttributesCommand = async (
  input: AdminUpdateUserAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminUpdateUserAttributes",
  };
  let body: any;
  body = JSON.stringify(se_AdminUpdateUserAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AdminUserGlobalSignOutCommand
 */
export const se_AdminUserGlobalSignOutCommand = async (
  input: AdminUserGlobalSignOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AdminUserGlobalSignOut",
  };
  let body: any;
  body = JSON.stringify(se_AdminUserGlobalSignOutRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateSoftwareTokenCommand
 */
export const se_AssociateSoftwareTokenCommand = async (
  input: AssociateSoftwareTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.AssociateSoftwareToken",
  };
  let body: any;
  body = JSON.stringify(se_AssociateSoftwareTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ChangePasswordCommand
 */
export const se_ChangePasswordCommand = async (
  input: ChangePasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ChangePassword",
  };
  let body: any;
  body = JSON.stringify(se_ChangePasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConfirmDeviceCommand
 */
export const se_ConfirmDeviceCommand = async (
  input: ConfirmDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ConfirmDevice",
  };
  let body: any;
  body = JSON.stringify(se_ConfirmDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConfirmForgotPasswordCommand
 */
export const se_ConfirmForgotPasswordCommand = async (
  input: ConfirmForgotPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ConfirmForgotPassword",
  };
  let body: any;
  body = JSON.stringify(se_ConfirmForgotPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ConfirmSignUpCommand
 */
export const se_ConfirmSignUpCommand = async (
  input: ConfirmSignUpCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ConfirmSignUp",
  };
  let body: any;
  body = JSON.stringify(se_ConfirmSignUpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateGroupCommand
 */
export const se_CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.CreateGroup",
  };
  let body: any;
  body = JSON.stringify(se_CreateGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateIdentityProviderCommand
 */
export const se_CreateIdentityProviderCommand = async (
  input: CreateIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.CreateIdentityProvider",
  };
  let body: any;
  body = JSON.stringify(se_CreateIdentityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateResourceServerCommand
 */
export const se_CreateResourceServerCommand = async (
  input: CreateResourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.CreateResourceServer",
  };
  let body: any;
  body = JSON.stringify(se_CreateResourceServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserImportJobCommand
 */
export const se_CreateUserImportJobCommand = async (
  input: CreateUserImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserImportJob",
  };
  let body: any;
  body = JSON.stringify(se_CreateUserImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserPoolCommand
 */
export const se_CreateUserPoolCommand = async (
  input: CreateUserPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserPool",
  };
  let body: any;
  body = JSON.stringify(se_CreateUserPoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserPoolClientCommand
 */
export const se_CreateUserPoolClientCommand = async (
  input: CreateUserPoolClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserPoolClient",
  };
  let body: any;
  body = JSON.stringify(se_CreateUserPoolClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserPoolDomainCommand
 */
export const se_CreateUserPoolDomainCommand = async (
  input: CreateUserPoolDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.CreateUserPoolDomain",
  };
  let body: any;
  body = JSON.stringify(se_CreateUserPoolDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteGroupCommand
 */
export const se_DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DeleteGroup",
  };
  let body: any;
  body = JSON.stringify(se_DeleteGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteIdentityProviderCommand
 */
export const se_DeleteIdentityProviderCommand = async (
  input: DeleteIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DeleteIdentityProvider",
  };
  let body: any;
  body = JSON.stringify(se_DeleteIdentityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourceServerCommand
 */
export const se_DeleteResourceServerCommand = async (
  input: DeleteResourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DeleteResourceServer",
  };
  let body: any;
  body = JSON.stringify(se_DeleteResourceServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserCommand
 */
export const se_DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUser",
  };
  let body: any;
  body = JSON.stringify(se_DeleteUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserAttributesCommand
 */
export const se_DeleteUserAttributesCommand = async (
  input: DeleteUserAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserAttributes",
  };
  let body: any;
  body = JSON.stringify(se_DeleteUserAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserPoolCommand
 */
export const se_DeleteUserPoolCommand = async (
  input: DeleteUserPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserPool",
  };
  let body: any;
  body = JSON.stringify(se_DeleteUserPoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserPoolClientCommand
 */
export const se_DeleteUserPoolClientCommand = async (
  input: DeleteUserPoolClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserPoolClient",
  };
  let body: any;
  body = JSON.stringify(se_DeleteUserPoolClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserPoolDomainCommand
 */
export const se_DeleteUserPoolDomainCommand = async (
  input: DeleteUserPoolDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DeleteUserPoolDomain",
  };
  let body: any;
  body = JSON.stringify(se_DeleteUserPoolDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeIdentityProviderCommand
 */
export const se_DescribeIdentityProviderCommand = async (
  input: DescribeIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DescribeIdentityProvider",
  };
  let body: any;
  body = JSON.stringify(se_DescribeIdentityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeResourceServerCommand
 */
export const se_DescribeResourceServerCommand = async (
  input: DescribeResourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DescribeResourceServer",
  };
  let body: any;
  body = JSON.stringify(se_DescribeResourceServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeRiskConfigurationCommand
 */
export const se_DescribeRiskConfigurationCommand = async (
  input: DescribeRiskConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DescribeRiskConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DescribeRiskConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserImportJobCommand
 */
export const se_DescribeUserImportJobCommand = async (
  input: DescribeUserImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserImportJob",
  };
  let body: any;
  body = JSON.stringify(se_DescribeUserImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserPoolCommand
 */
export const se_DescribeUserPoolCommand = async (
  input: DescribeUserPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserPool",
  };
  let body: any;
  body = JSON.stringify(se_DescribeUserPoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserPoolClientCommand
 */
export const se_DescribeUserPoolClientCommand = async (
  input: DescribeUserPoolClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserPoolClient",
  };
  let body: any;
  body = JSON.stringify(se_DescribeUserPoolClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserPoolDomainCommand
 */
export const se_DescribeUserPoolDomainCommand = async (
  input: DescribeUserPoolDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.DescribeUserPoolDomain",
  };
  let body: any;
  body = JSON.stringify(se_DescribeUserPoolDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ForgetDeviceCommand
 */
export const se_ForgetDeviceCommand = async (
  input: ForgetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ForgetDevice",
  };
  let body: any;
  body = JSON.stringify(se_ForgetDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ForgotPasswordCommand
 */
export const se_ForgotPasswordCommand = async (
  input: ForgotPasswordCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ForgotPassword",
  };
  let body: any;
  body = JSON.stringify(se_ForgotPasswordRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCSVHeaderCommand
 */
export const se_GetCSVHeaderCommand = async (
  input: GetCSVHeaderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.GetCSVHeader",
  };
  let body: any;
  body = JSON.stringify(se_GetCSVHeaderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeviceCommand
 */
export const se_GetDeviceCommand = async (
  input: GetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.GetDevice",
  };
  let body: any;
  body = JSON.stringify(se_GetDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetGroupCommand
 */
export const se_GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.GetGroup",
  };
  let body: any;
  body = JSON.stringify(se_GetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetIdentityProviderByIdentifierCommand
 */
export const se_GetIdentityProviderByIdentifierCommand = async (
  input: GetIdentityProviderByIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier",
  };
  let body: any;
  body = JSON.stringify(se_GetIdentityProviderByIdentifierRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSigningCertificateCommand
 */
export const se_GetSigningCertificateCommand = async (
  input: GetSigningCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.GetSigningCertificate",
  };
  let body: any;
  body = JSON.stringify(se_GetSigningCertificateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUICustomizationCommand
 */
export const se_GetUICustomizationCommand = async (
  input: GetUICustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.GetUICustomization",
  };
  let body: any;
  body = JSON.stringify(se_GetUICustomizationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUserCommand
 */
export const se_GetUserCommand = async (
  input: GetUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.GetUser",
  };
  let body: any;
  body = JSON.stringify(se_GetUserRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUserAttributeVerificationCodeCommand
 */
export const se_GetUserAttributeVerificationCodeCommand = async (
  input: GetUserAttributeVerificationCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode",
  };
  let body: any;
  body = JSON.stringify(se_GetUserAttributeVerificationCodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUserPoolMfaConfigCommand
 */
export const se_GetUserPoolMfaConfigCommand = async (
  input: GetUserPoolMfaConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.GetUserPoolMfaConfig",
  };
  let body: any;
  body = JSON.stringify(se_GetUserPoolMfaConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GlobalSignOutCommand
 */
export const se_GlobalSignOutCommand = async (
  input: GlobalSignOutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.GlobalSignOut",
  };
  let body: any;
  body = JSON.stringify(se_GlobalSignOutRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InitiateAuthCommand
 */
export const se_InitiateAuthCommand = async (
  input: InitiateAuthCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.InitiateAuth",
  };
  let body: any;
  body = JSON.stringify(se_InitiateAuthRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDevicesCommand
 */
export const se_ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ListDevices",
  };
  let body: any;
  body = JSON.stringify(se_ListDevicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListGroupsCommand
 */
export const se_ListGroupsCommand = async (
  input: ListGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ListGroups",
  };
  let body: any;
  body = JSON.stringify(se_ListGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListIdentityProvidersCommand
 */
export const se_ListIdentityProvidersCommand = async (
  input: ListIdentityProvidersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ListIdentityProviders",
  };
  let body: any;
  body = JSON.stringify(se_ListIdentityProvidersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListResourceServersCommand
 */
export const se_ListResourceServersCommand = async (
  input: ListResourceServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ListResourceServers",
  };
  let body: any;
  body = JSON.stringify(se_ListResourceServersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUserImportJobsCommand
 */
export const se_ListUserImportJobsCommand = async (
  input: ListUserImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ListUserImportJobs",
  };
  let body: any;
  body = JSON.stringify(se_ListUserImportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUserPoolClientsCommand
 */
export const se_ListUserPoolClientsCommand = async (
  input: ListUserPoolClientsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ListUserPoolClients",
  };
  let body: any;
  body = JSON.stringify(se_ListUserPoolClientsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUserPoolsCommand
 */
export const se_ListUserPoolsCommand = async (
  input: ListUserPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ListUserPools",
  };
  let body: any;
  body = JSON.stringify(se_ListUserPoolsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUsersCommand
 */
export const se_ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ListUsers",
  };
  let body: any;
  body = JSON.stringify(se_ListUsersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUsersInGroupCommand
 */
export const se_ListUsersInGroupCommand = async (
  input: ListUsersInGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ListUsersInGroup",
  };
  let body: any;
  body = JSON.stringify(se_ListUsersInGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResendConfirmationCodeCommand
 */
export const se_ResendConfirmationCodeCommand = async (
  input: ResendConfirmationCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.ResendConfirmationCode",
  };
  let body: any;
  body = JSON.stringify(se_ResendConfirmationCodeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RespondToAuthChallengeCommand
 */
export const se_RespondToAuthChallengeCommand = async (
  input: RespondToAuthChallengeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.RespondToAuthChallenge",
  };
  let body: any;
  body = JSON.stringify(se_RespondToAuthChallengeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RevokeTokenCommand
 */
export const se_RevokeTokenCommand = async (
  input: RevokeTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.RevokeToken",
  };
  let body: any;
  body = JSON.stringify(se_RevokeTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetRiskConfigurationCommand
 */
export const se_SetRiskConfigurationCommand = async (
  input: SetRiskConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.SetRiskConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_SetRiskConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetUICustomizationCommand
 */
export const se_SetUICustomizationCommand = async (
  input: SetUICustomizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.SetUICustomization",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.SetUserMFAPreference",
  };
  let body: any;
  body = JSON.stringify(se_SetUserMFAPreferenceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetUserPoolMfaConfigCommand
 */
export const se_SetUserPoolMfaConfigCommand = async (
  input: SetUserPoolMfaConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.SetUserPoolMfaConfig",
  };
  let body: any;
  body = JSON.stringify(se_SetUserPoolMfaConfigRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetUserSettingsCommand
 */
export const se_SetUserSettingsCommand = async (
  input: SetUserSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.SetUserSettings",
  };
  let body: any;
  body = JSON.stringify(se_SetUserSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SignUpCommand
 */
export const se_SignUpCommand = async (input: SignUpCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.SignUp",
  };
  let body: any;
  body = JSON.stringify(se_SignUpRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartUserImportJobCommand
 */
export const se_StartUserImportJobCommand = async (
  input: StartUserImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.StartUserImportJob",
  };
  let body: any;
  body = JSON.stringify(se_StartUserImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopUserImportJobCommand
 */
export const se_StopUserImportJobCommand = async (
  input: StopUserImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.StopUserImportJob",
  };
  let body: any;
  body = JSON.stringify(se_StopUserImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAuthEventFeedbackCommand
 */
export const se_UpdateAuthEventFeedbackCommand = async (
  input: UpdateAuthEventFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.UpdateAuthEventFeedback",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAuthEventFeedbackRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDeviceStatusCommand
 */
export const se_UpdateDeviceStatusCommand = async (
  input: UpdateDeviceStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.UpdateDeviceStatus",
  };
  let body: any;
  body = JSON.stringify(se_UpdateDeviceStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateGroupCommand
 */
export const se_UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.UpdateGroup",
  };
  let body: any;
  body = JSON.stringify(se_UpdateGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateIdentityProviderCommand
 */
export const se_UpdateIdentityProviderCommand = async (
  input: UpdateIdentityProviderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.UpdateIdentityProvider",
  };
  let body: any;
  body = JSON.stringify(se_UpdateIdentityProviderRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateResourceServerCommand
 */
export const se_UpdateResourceServerCommand = async (
  input: UpdateResourceServerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.UpdateResourceServer",
  };
  let body: any;
  body = JSON.stringify(se_UpdateResourceServerRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserAttributesCommand
 */
export const se_UpdateUserAttributesCommand = async (
  input: UpdateUserAttributesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserAttributes",
  };
  let body: any;
  body = JSON.stringify(se_UpdateUserAttributesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserPoolCommand
 */
export const se_UpdateUserPoolCommand = async (
  input: UpdateUserPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserPool",
  };
  let body: any;
  body = JSON.stringify(se_UpdateUserPoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserPoolClientCommand
 */
export const se_UpdateUserPoolClientCommand = async (
  input: UpdateUserPoolClientCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserPoolClient",
  };
  let body: any;
  body = JSON.stringify(se_UpdateUserPoolClientRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserPoolDomainCommand
 */
export const se_UpdateUserPoolDomainCommand = async (
  input: UpdateUserPoolDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.UpdateUserPoolDomain",
  };
  let body: any;
  body = JSON.stringify(se_UpdateUserPoolDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1VerifySoftwareTokenCommand
 */
export const se_VerifySoftwareTokenCommand = async (
  input: VerifySoftwareTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.VerifySoftwareToken",
  };
  let body: any;
  body = JSON.stringify(se_VerifySoftwareTokenRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1VerifyUserAttributeCommand
 */
export const se_VerifyUserAttributeCommand = async (
  input: VerifyUserAttributeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityProviderService.VerifyUserAttribute",
  };
  let body: any;
  body = JSON.stringify(se_VerifyUserAttributeRequest(input, context));
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
    return de_AddCustomAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AddCustomAttributesResponse(data, context);
  const response: AddCustomAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AddCustomAttributesCommandError
 */
const de_AddCustomAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddCustomAttributesCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminAddUserToGroupCommand
 */
export const de_AdminAddUserToGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminAddUserToGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminAddUserToGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AdminAddUserToGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminAddUserToGroupCommandError
 */
const de_AdminAddUserToGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminAddUserToGroupCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminConfirmSignUpCommand
 */
export const de_AdminConfirmSignUpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminConfirmSignUpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminConfirmSignUpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminConfirmSignUpResponse(data, context);
  const response: AdminConfirmSignUpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminConfirmSignUpCommandError
 */
const de_AdminConfirmSignUpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminConfirmSignUpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyFailedAttemptsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException":
      throw await de_TooManyFailedAttemptsExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminCreateUserCommand
 */
export const de_AdminCreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminCreateUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminCreateUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminCreateUserResponse(data, context);
  const response: AdminCreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminCreateUserCommandError
 */
const de_AdminCreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminCreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeDeliveryFailureException":
    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
      throw await de_CodeDeliveryFailureExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException":
      throw await de_PreconditionNotMetExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UnsupportedUserStateException":
    case "com.amazonaws.cognitoidentityprovider#UnsupportedUserStateException":
      throw await de_UnsupportedUserStateExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    case "UsernameExistsException":
    case "com.amazonaws.cognitoidentityprovider#UsernameExistsException":
      throw await de_UsernameExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminDeleteUserCommand
 */
export const de_AdminDeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminDeleteUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AdminDeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminDeleteUserCommandError
 */
const de_AdminDeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDeleteUserCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminDeleteUserAttributesCommand
 */
export const de_AdminDeleteUserAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDeleteUserAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminDeleteUserAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminDeleteUserAttributesResponse(data, context);
  const response: AdminDeleteUserAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminDeleteUserAttributesCommandError
 */
const de_AdminDeleteUserAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDeleteUserAttributesCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminDisableProviderForUserCommand
 */
export const de_AdminDisableProviderForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDisableProviderForUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminDisableProviderForUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminDisableProviderForUserResponse(data, context);
  const response: AdminDisableProviderForUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminDisableProviderForUserCommandError
 */
const de_AdminDisableProviderForUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDisableProviderForUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AliasExistsException":
    case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
      throw await de_AliasExistsExceptionRes(parsedOutput, context);
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminDisableUserCommand
 */
export const de_AdminDisableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDisableUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminDisableUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminDisableUserResponse(data, context);
  const response: AdminDisableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminDisableUserCommandError
 */
const de_AdminDisableUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminDisableUserCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminEnableUserCommand
 */
export const de_AdminEnableUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminEnableUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminEnableUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminEnableUserResponse(data, context);
  const response: AdminEnableUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminEnableUserCommandError
 */
const de_AdminEnableUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminEnableUserCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminForgetDeviceCommand
 */
export const de_AdminForgetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminForgetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminForgetDeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AdminForgetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminForgetDeviceCommandError
 */
const de_AdminForgetDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminForgetDeviceCommandOutput> => {
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
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminGetDeviceCommand
 */
export const de_AdminGetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminGetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminGetDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminGetDeviceResponse(data, context);
  const response: AdminGetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminGetDeviceCommandError
 */
const de_AdminGetDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminGetDeviceCommandOutput> => {
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
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminGetUserCommand
 */
export const de_AdminGetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminGetUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminGetUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminGetUserResponse(data, context);
  const response: AdminGetUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminGetUserCommandError
 */
const de_AdminGetUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminGetUserCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminInitiateAuthCommand
 */
export const de_AdminInitiateAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminInitiateAuthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminInitiateAuthCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminInitiateAuthResponse(data, context);
  const response: AdminInitiateAuthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminInitiateAuthCommandError
 */
const de_AdminInitiateAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminInitiateAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "MFAMethodNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException":
      throw await de_MFAMethodNotFoundExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminLinkProviderForUserCommand
 */
export const de_AdminLinkProviderForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminLinkProviderForUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminLinkProviderForUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminLinkProviderForUserResponse(data, context);
  const response: AdminLinkProviderForUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminLinkProviderForUserCommandError
 */
const de_AdminLinkProviderForUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminLinkProviderForUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AliasExistsException":
    case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
      throw await de_AliasExistsExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminListDevicesCommand
 */
export const de_AdminListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminListDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminListDevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminListDevicesResponse(data, context);
  const response: AdminListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminListDevicesCommandError
 */
const de_AdminListDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminListDevicesCommandOutput> => {
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
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminListGroupsForUserCommand
 */
export const de_AdminListGroupsForUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminListGroupsForUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminListGroupsForUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminListGroupsForUserResponse(data, context);
  const response: AdminListGroupsForUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminListGroupsForUserCommandError
 */
const de_AdminListGroupsForUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminListGroupsForUserCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminListUserAuthEventsCommand
 */
export const de_AdminListUserAuthEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminListUserAuthEventsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminListUserAuthEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminListUserAuthEventsResponse(data, context);
  const response: AdminListUserAuthEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminListUserAuthEventsCommandError
 */
const de_AdminListUserAuthEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminListUserAuthEventsCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    case "UserPoolAddOnNotEnabledException":
    case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
      throw await de_UserPoolAddOnNotEnabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminRemoveUserFromGroupCommand
 */
export const de_AdminRemoveUserFromGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminRemoveUserFromGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminRemoveUserFromGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: AdminRemoveUserFromGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminRemoveUserFromGroupCommandError
 */
const de_AdminRemoveUserFromGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminRemoveUserFromGroupCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminResetUserPasswordCommand
 */
export const de_AdminResetUserPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminResetUserPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminResetUserPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminResetUserPasswordResponse(data, context);
  const response: AdminResetUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminResetUserPasswordCommandError
 */
const de_AdminResetUserPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminResetUserPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidEmailRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
      throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminRespondToAuthChallengeCommand
 */
export const de_AdminRespondToAuthChallengeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminRespondToAuthChallengeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminRespondToAuthChallengeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminRespondToAuthChallengeResponse(data, context);
  const response: AdminRespondToAuthChallengeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminRespondToAuthChallengeCommandError
 */
const de_AdminRespondToAuthChallengeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminRespondToAuthChallengeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AliasExistsException":
    case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
      throw await de_AliasExistsExceptionRes(parsedOutput, context);
    case "CodeMismatchException":
    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
      throw await de_CodeMismatchExceptionRes(parsedOutput, context);
    case "ExpiredCodeException":
    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
      throw await de_ExpiredCodeExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "MFAMethodNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException":
      throw await de_MFAMethodNotFoundExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "SoftwareTokenMFANotFoundException":
    case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException":
      throw await de_SoftwareTokenMFANotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminSetUserMFAPreferenceCommand
 */
export const de_AdminSetUserMFAPreferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminSetUserMFAPreferenceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminSetUserMFAPreferenceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminSetUserMFAPreferenceResponse(data, context);
  const response: AdminSetUserMFAPreferenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminSetUserMFAPreferenceCommandError
 */
const de_AdminSetUserMFAPreferenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminSetUserMFAPreferenceCommandOutput> => {
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
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminSetUserPasswordCommand
 */
export const de_AdminSetUserPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminSetUserPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminSetUserPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminSetUserPasswordResponse(data, context);
  const response: AdminSetUserPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminSetUserPasswordCommandError
 */
const de_AdminSetUserPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminSetUserPasswordCommandOutput> => {
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
    case "InvalidPasswordException":
    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminSetUserSettingsCommand
 */
export const de_AdminSetUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminSetUserSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminSetUserSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminSetUserSettingsResponse(data, context);
  const response: AdminSetUserSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminSetUserSettingsCommandError
 */
const de_AdminSetUserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminSetUserSettingsCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommand
 */
export const de_AdminUpdateAuthEventFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUpdateAuthEventFeedbackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminUpdateAuthEventFeedbackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminUpdateAuthEventFeedbackResponse(data, context);
  const response: AdminUpdateAuthEventFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminUpdateAuthEventFeedbackCommandError
 */
const de_AdminUpdateAuthEventFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUpdateAuthEventFeedbackCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    case "UserPoolAddOnNotEnabledException":
    case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
      throw await de_UserPoolAddOnNotEnabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminUpdateDeviceStatusCommand
 */
export const de_AdminUpdateDeviceStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUpdateDeviceStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminUpdateDeviceStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminUpdateDeviceStatusResponse(data, context);
  const response: AdminUpdateDeviceStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminUpdateDeviceStatusCommandError
 */
const de_AdminUpdateDeviceStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUpdateDeviceStatusCommandOutput> => {
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
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminUpdateUserAttributesCommand
 */
export const de_AdminUpdateUserAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUpdateUserAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminUpdateUserAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminUpdateUserAttributesResponse(data, context);
  const response: AdminUpdateUserAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminUpdateUserAttributesCommandError
 */
const de_AdminUpdateUserAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUpdateUserAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AliasExistsException":
    case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
      throw await de_AliasExistsExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidEmailRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
      throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AdminUserGlobalSignOutCommand
 */
export const de_AdminUserGlobalSignOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUserGlobalSignOutCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AdminUserGlobalSignOutCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AdminUserGlobalSignOutResponse(data, context);
  const response: AdminUserGlobalSignOutCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AdminUserGlobalSignOutCommandError
 */
const de_AdminUserGlobalSignOutCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AdminUserGlobalSignOutCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AssociateSoftwareTokenCommand
 */
export const de_AssociateSoftwareTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSoftwareTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateSoftwareTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AssociateSoftwareTokenResponse(data, context);
  const response: AssociateSoftwareTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1AssociateSoftwareTokenCommandError
 */
const de_AssociateSoftwareTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateSoftwareTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
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
    case "SoftwareTokenMFANotFoundException":
    case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException":
      throw await de_SoftwareTokenMFANotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ChangePasswordCommand
 */
export const de_ChangePasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangePasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ChangePasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ChangePasswordResponse(data, context);
  const response: ChangePasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ChangePasswordCommandError
 */
const de_ChangePasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ChangePasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConfirmDeviceCommand
 */
export const de_ConfirmDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConfirmDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfirmDeviceResponse(data, context);
  const response: ConfirmDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ConfirmDeviceCommandError
 */
const de_ConfirmDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    case "UsernameExistsException":
    case "com.amazonaws.cognitoidentityprovider#UsernameExistsException":
      throw await de_UsernameExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConfirmForgotPasswordCommand
 */
export const de_ConfirmForgotPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmForgotPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConfirmForgotPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfirmForgotPasswordResponse(data, context);
  const response: ConfirmForgotPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ConfirmForgotPasswordCommandError
 */
const de_ConfirmForgotPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmForgotPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeMismatchException":
    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
      throw await de_CodeMismatchExceptionRes(parsedOutput, context);
    case "ExpiredCodeException":
    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
      throw await de_ExpiredCodeExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyFailedAttemptsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException":
      throw await de_TooManyFailedAttemptsExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConfirmSignUpCommand
 */
export const de_ConfirmSignUpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmSignUpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ConfirmSignUpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ConfirmSignUpResponse(data, context);
  const response: ConfirmSignUpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ConfirmSignUpCommandError
 */
const de_ConfirmSignUpCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfirmSignUpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AliasExistsException":
    case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
      throw await de_AliasExistsExceptionRes(parsedOutput, context);
    case "CodeMismatchException":
    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
      throw await de_CodeMismatchExceptionRes(parsedOutput, context);
    case "ExpiredCodeException":
    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
      throw await de_ExpiredCodeExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyFailedAttemptsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyFailedAttemptsException":
      throw await de_TooManyFailedAttemptsExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateGroupCommand
 */
export const de_CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateGroupResponse(data, context);
  const response: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateGroupCommandError
 */
const de_CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GroupExistsException":
    case "com.amazonaws.cognitoidentityprovider#GroupExistsException":
      throw await de_GroupExistsExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateIdentityProviderCommand
 */
export const de_CreateIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateIdentityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateIdentityProviderResponse(data, context);
  const response: CreateIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateIdentityProviderCommandError
 */
const de_CreateIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateProviderException":
    case "com.amazonaws.cognitoidentityprovider#DuplicateProviderException":
      throw await de_DuplicateProviderExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateResourceServerCommand
 */
export const de_CreateResourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateResourceServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateResourceServerResponse(data, context);
  const response: CreateResourceServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateResourceServerCommandError
 */
const de_CreateResourceServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceServerCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUserImportJobCommand
 */
export const de_CreateUserImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserImportJobResponse(data, context);
  const response: CreateUserImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUserImportJobCommandError
 */
const de_CreateUserImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserImportJobCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PreconditionNotMetException":
    case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException":
      throw await de_PreconditionNotMetExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUserPoolCommand
 */
export const de_CreateUserPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserPoolResponse(data, context);
  const response: CreateUserPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUserPoolCommandError
 */
const de_CreateUserPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidEmailRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
      throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserPoolTaggingException":
    case "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException":
      throw await de_UserPoolTaggingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUserPoolClientCommand
 */
export const de_CreateUserPoolClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserPoolClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserPoolClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserPoolClientResponse(data, context);
  const response: CreateUserPoolClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUserPoolClientCommandError
 */
const de_CreateUserPoolClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserPoolClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOAuthFlowException":
    case "com.amazonaws.cognitoidentityprovider#InvalidOAuthFlowException":
      throw await de_InvalidOAuthFlowExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ScopeDoesNotExistException":
    case "com.amazonaws.cognitoidentityprovider#ScopeDoesNotExistException":
      throw await de_ScopeDoesNotExistExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUserPoolDomainCommand
 */
export const de_CreateUserPoolDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserPoolDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserPoolDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUserPoolDomainResponse(data, context);
  const response: CreateUserPoolDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateUserPoolDomainCommandError
 */
const de_CreateUserPoolDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserPoolDomainCommandOutput> => {
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
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteGroupCommand
 */
export const de_DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteGroupCommandError
 */
const de_DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteIdentityProviderCommand
 */
export const de_DeleteIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteIdentityProviderCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteIdentityProviderCommandError
 */
const de_DeleteIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
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
    case "UnsupportedIdentityProviderException":
    case "com.amazonaws.cognitoidentityprovider#UnsupportedIdentityProviderException":
      throw await de_UnsupportedIdentityProviderExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteResourceServerCommand
 */
export const de_DeleteResourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourceServerCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourceServerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourceServerCommandError
 */
const de_DeleteResourceServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceServerCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserCommand
 */
export const de_DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserCommandError
 */
const de_DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserAttributesCommand
 */
export const de_DeleteUserAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteUserAttributesResponse(data, context);
  const response: DeleteUserAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserAttributesCommandError
 */
const de_DeleteUserAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserPoolCommand
 */
export const de_DeleteUserPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserPoolCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserPoolCommandError
 */
const de_DeleteUserPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPoolCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserPoolClientCommand
 */
export const de_DeleteUserPoolClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPoolClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserPoolClientCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserPoolClientCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserPoolClientCommandError
 */
const de_DeleteUserPoolClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPoolClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserPoolDomainCommand
 */
export const de_DeleteUserPoolDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPoolDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserPoolDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteUserPoolDomainResponse(data, context);
  const response: DeleteUserPoolDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteUserPoolDomainCommandError
 */
const de_DeleteUserPoolDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserPoolDomainCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeIdentityProviderCommand
 */
export const de_DescribeIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeIdentityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeIdentityProviderResponse(data, context);
  const response: DescribeIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeIdentityProviderCommandError
 */
const de_DescribeIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeResourceServerCommand
 */
export const de_DescribeResourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeResourceServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeResourceServerResponse(data, context);
  const response: DescribeResourceServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeResourceServerCommandError
 */
const de_DescribeResourceServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceServerCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeRiskConfigurationCommand
 */
export const de_DescribeRiskConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRiskConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeRiskConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeRiskConfigurationResponse(data, context);
  const response: DescribeRiskConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeRiskConfigurationCommandError
 */
const de_DescribeRiskConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRiskConfigurationCommandOutput> => {
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
    case "UserPoolAddOnNotEnabledException":
    case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
      throw await de_UserPoolAddOnNotEnabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeUserImportJobCommand
 */
export const de_DescribeUserImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserImportJobResponse(data, context);
  const response: DescribeUserImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUserImportJobCommandError
 */
const de_DescribeUserImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserImportJobCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeUserPoolCommand
 */
export const de_DescribeUserPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserPoolResponse(data, context);
  const response: DescribeUserPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUserPoolCommandError
 */
const de_DescribeUserPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserPoolCommandOutput> => {
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
    case "UserPoolTaggingException":
    case "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException":
      throw await de_UserPoolTaggingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeUserPoolClientCommand
 */
export const de_DescribeUserPoolClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserPoolClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserPoolClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserPoolClientResponse(data, context);
  const response: DescribeUserPoolClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUserPoolClientCommandError
 */
const de_DescribeUserPoolClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserPoolClientCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeUserPoolDomainCommand
 */
export const de_DescribeUserPoolDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserPoolDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserPoolDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserPoolDomainResponse(data, context);
  const response: DescribeUserPoolDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeUserPoolDomainCommandError
 */
const de_DescribeUserPoolDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserPoolDomainCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ForgetDeviceCommand
 */
export const de_ForgetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForgetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ForgetDeviceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ForgetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ForgetDeviceCommandError
 */
const de_ForgetDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForgetDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ForgotPasswordCommand
 */
export const de_ForgotPasswordCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForgotPasswordCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ForgotPasswordCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ForgotPasswordResponse(data, context);
  const response: ForgotPasswordCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ForgotPasswordCommandError
 */
const de_ForgotPasswordCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ForgotPasswordCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeDeliveryFailureException":
    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
      throw await de_CodeDeliveryFailureExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidEmailRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
      throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCSVHeaderCommand
 */
export const de_GetCSVHeaderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCSVHeaderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCSVHeaderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCSVHeaderResponse(data, context);
  const response: GetCSVHeaderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCSVHeaderCommandError
 */
const de_GetCSVHeaderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCSVHeaderCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetDeviceCommand
 */
export const de_GetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeviceResponse(data, context);
  const response: GetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetDeviceCommandError
 */
const de_GetDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetGroupCommand
 */
export const de_GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetGroupResponse(data, context);
  const response: GetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetGroupCommandError
 */
const de_GetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetIdentityProviderByIdentifierCommand
 */
export const de_GetIdentityProviderByIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityProviderByIdentifierCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetIdentityProviderByIdentifierCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIdentityProviderByIdentifierResponse(data, context);
  const response: GetIdentityProviderByIdentifierCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetIdentityProviderByIdentifierCommandError
 */
const de_GetIdentityProviderByIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityProviderByIdentifierCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetSigningCertificateCommand
 */
export const de_GetSigningCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningCertificateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSigningCertificateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSigningCertificateResponse(data, context);
  const response: GetSigningCertificateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetSigningCertificateCommandError
 */
const de_GetSigningCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSigningCertificateCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetUICustomizationCommand
 */
export const de_GetUICustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUICustomizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUICustomizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUICustomizationResponse(data, context);
  const response: GetUICustomizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetUICustomizationCommandError
 */
const de_GetUICustomizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUICustomizationCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetUserCommand
 */
export const de_GetUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUserCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUserResponse(data, context);
  const response: GetUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetUserCommandError
 */
const de_GetUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetUserAttributeVerificationCodeCommand
 */
export const de_GetUserAttributeVerificationCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserAttributeVerificationCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUserAttributeVerificationCodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUserAttributeVerificationCodeResponse(data, context);
  const response: GetUserAttributeVerificationCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetUserAttributeVerificationCodeCommandError
 */
const de_GetUserAttributeVerificationCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserAttributeVerificationCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeDeliveryFailureException":
    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
      throw await de_CodeDeliveryFailureExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidEmailRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
      throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetUserPoolMfaConfigCommand
 */
export const de_GetUserPoolMfaConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserPoolMfaConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUserPoolMfaConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUserPoolMfaConfigResponse(data, context);
  const response: GetUserPoolMfaConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetUserPoolMfaConfigCommandError
 */
const de_GetUserPoolMfaConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUserPoolMfaConfigCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GlobalSignOutCommand
 */
export const de_GlobalSignOutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GlobalSignOutCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GlobalSignOutCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GlobalSignOutResponse(data, context);
  const response: GlobalSignOutCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GlobalSignOutCommandError
 */
const de_GlobalSignOutCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GlobalSignOutCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1InitiateAuthCommand
 */
export const de_InitiateAuthCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateAuthCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_InitiateAuthCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_InitiateAuthResponse(data, context);
  const response: InitiateAuthCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1InitiateAuthCommandError
 */
const de_InitiateAuthCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateAuthCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDevicesCommand
 */
export const de_ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDevicesResponse(data, context);
  const response: ListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDevicesCommandError
 */
const de_ListDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListGroupsCommand
 */
export const de_ListGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListGroupsResponse(data, context);
  const response: ListGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListGroupsCommandError
 */
const de_ListGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroupsCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListIdentityProvidersCommand
 */
export const de_ListIdentityProvidersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProvidersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListIdentityProvidersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListIdentityProvidersResponse(data, context);
  const response: ListIdentityProvidersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListIdentityProvidersCommandError
 */
const de_ListIdentityProvidersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProvidersCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListResourceServersCommand
 */
export const de_ListResourceServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListResourceServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListResourceServersResponse(data, context);
  const response: ListResourceServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListResourceServersCommandError
 */
const de_ListResourceServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceServersCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListUserImportJobsCommand
 */
export const de_ListUserImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUserImportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUserImportJobsResponse(data, context);
  const response: ListUserImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListUserImportJobsCommandError
 */
const de_ListUserImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserImportJobsCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListUserPoolClientsCommand
 */
export const de_ListUserPoolClientsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserPoolClientsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUserPoolClientsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUserPoolClientsResponse(data, context);
  const response: ListUserPoolClientsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListUserPoolClientsCommandError
 */
const de_ListUserPoolClientsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserPoolClientsCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListUserPoolsCommand
 */
export const de_ListUserPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserPoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUserPoolsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUserPoolsResponse(data, context);
  const response: ListUserPoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListUserPoolsCommandError
 */
const de_ListUserPoolsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserPoolsCommandOutput> => {
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
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListUsersCommand
 */
export const de_ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUsersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUsersResponse(data, context);
  const response: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListUsersCommandError
 */
const de_ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListUsersInGroupCommand
 */
export const de_ListUsersInGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersInGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUsersInGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUsersInGroupResponse(data, context);
  const response: ListUsersInGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListUsersInGroupCommandError
 */
const de_ListUsersInGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersInGroupCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResendConfirmationCodeCommand
 */
export const de_ResendConfirmationCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendConfirmationCodeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResendConfirmationCodeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResendConfirmationCodeResponse(data, context);
  const response: ResendConfirmationCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResendConfirmationCodeCommandError
 */
const de_ResendConfirmationCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResendConfirmationCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeDeliveryFailureException":
    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
      throw await de_CodeDeliveryFailureExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidEmailRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
      throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RespondToAuthChallengeCommand
 */
export const de_RespondToAuthChallengeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondToAuthChallengeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RespondToAuthChallengeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RespondToAuthChallengeResponse(data, context);
  const response: RespondToAuthChallengeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RespondToAuthChallengeCommandError
 */
const de_RespondToAuthChallengeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondToAuthChallengeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AliasExistsException":
    case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
      throw await de_AliasExistsExceptionRes(parsedOutput, context);
    case "CodeMismatchException":
    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
      throw await de_CodeMismatchExceptionRes(parsedOutput, context);
    case "ExpiredCodeException":
    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
      throw await de_ExpiredCodeExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "MFAMethodNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#MFAMethodNotFoundException":
      throw await de_MFAMethodNotFoundExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "SoftwareTokenMFANotFoundException":
    case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException":
      throw await de_SoftwareTokenMFANotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RevokeTokenCommand
 */
export const de_RevokeTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RevokeTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RevokeTokenResponse(data, context);
  const response: RevokeTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RevokeTokenCommandError
 */
const de_RevokeTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.cognitoidentityprovider#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.cognitoidentityprovider#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
    case "UnsupportedTokenTypeException":
    case "com.amazonaws.cognitoidentityprovider#UnsupportedTokenTypeException":
      throw await de_UnsupportedTokenTypeExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetRiskConfigurationCommand
 */
export const de_SetRiskConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRiskConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetRiskConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetRiskConfigurationResponse(data, context);
  const response: SetRiskConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetRiskConfigurationCommandError
 */
const de_SetRiskConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetRiskConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeDeliveryFailureException":
    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
      throw await de_CodeDeliveryFailureExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidEmailRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
      throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
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
    case "UserPoolAddOnNotEnabledException":
    case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
      throw await de_UserPoolAddOnNotEnabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetUICustomizationCommand
 */
export const de_SetUICustomizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUICustomizationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetUICustomizationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetUICustomizationResponse(data, context);
  const response: SetUICustomizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetUICustomizationCommandError
 */
const de_SetUICustomizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUICustomizationCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetUserMFAPreferenceCommand
 */
export const de_SetUserMFAPreferenceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUserMFAPreferenceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetUserMFAPreferenceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetUserMFAPreferenceResponse(data, context);
  const response: SetUserMFAPreferenceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetUserMFAPreferenceCommandError
 */
const de_SetUserMFAPreferenceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUserMFAPreferenceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetUserPoolMfaConfigCommand
 */
export const de_SetUserPoolMfaConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUserPoolMfaConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetUserPoolMfaConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetUserPoolMfaConfigResponse(data, context);
  const response: SetUserPoolMfaConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetUserPoolMfaConfigCommandError
 */
const de_SetUserPoolMfaConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUserPoolMfaConfigCommandOutput> => {
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
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetUserSettingsCommand
 */
export const de_SetUserSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUserSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetUserSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetUserSettingsResponse(data, context);
  const response: SetUserSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetUserSettingsCommandError
 */
const de_SetUserSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetUserSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SignUpCommand
 */
export const de_SignUpCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignUpCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SignUpCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SignUpResponse(data, context);
  const response: SignUpCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SignUpCommandError
 */
const de_SignUpCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<SignUpCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeDeliveryFailureException":
    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
      throw await de_CodeDeliveryFailureExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidEmailRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
      throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidPasswordException":
    case "com.amazonaws.cognitoidentityprovider#InvalidPasswordException":
      throw await de_InvalidPasswordExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UsernameExistsException":
    case "com.amazonaws.cognitoidentityprovider#UsernameExistsException":
      throw await de_UsernameExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartUserImportJobCommand
 */
export const de_StartUserImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartUserImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartUserImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartUserImportJobResponse(data, context);
  const response: StartUserImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartUserImportJobCommandError
 */
const de_StartUserImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartUserImportJobCommandOutput> => {
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
    case "PreconditionNotMetException":
    case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException":
      throw await de_PreconditionNotMetExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopUserImportJobCommand
 */
export const de_StopUserImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopUserImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopUserImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopUserImportJobResponse(data, context);
  const response: StopUserImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopUserImportJobCommandError
 */
const de_StopUserImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopUserImportJobCommandOutput> => {
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
    case "PreconditionNotMetException":
    case "com.amazonaws.cognitoidentityprovider#PreconditionNotMetException":
      throw await de_PreconditionNotMetExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateAuthEventFeedbackCommand
 */
export const de_UpdateAuthEventFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthEventFeedbackCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAuthEventFeedbackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAuthEventFeedbackResponse(data, context);
  const response: UpdateAuthEventFeedbackCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAuthEventFeedbackCommandError
 */
const de_UpdateAuthEventFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAuthEventFeedbackCommandOutput> => {
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
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    case "UserPoolAddOnNotEnabledException":
    case "com.amazonaws.cognitoidentityprovider#UserPoolAddOnNotEnabledException":
      throw await de_UserPoolAddOnNotEnabledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDeviceStatusCommand
 */
export const de_UpdateDeviceStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDeviceStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDeviceStatusResponse(data, context);
  const response: UpdateDeviceStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDeviceStatusCommandError
 */
const de_UpdateDeviceStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateGroupCommand
 */
export const de_UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateGroupResponse(data, context);
  const response: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateGroupCommandError
 */
const de_UpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateIdentityProviderCommand
 */
export const de_UpdateIdentityProviderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateIdentityProviderCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateIdentityProviderResponse(data, context);
  const response: UpdateIdentityProviderCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateIdentityProviderCommandError
 */
const de_UpdateIdentityProviderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityProviderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
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
    case "UnsupportedIdentityProviderException":
    case "com.amazonaws.cognitoidentityprovider#UnsupportedIdentityProviderException":
      throw await de_UnsupportedIdentityProviderExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateResourceServerCommand
 */
export const de_UpdateResourceServerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceServerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateResourceServerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateResourceServerResponse(data, context);
  const response: UpdateResourceServerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateResourceServerCommandError
 */
const de_UpdateResourceServerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceServerCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateUserAttributesCommand
 */
export const de_UpdateUserAttributesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserAttributesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserAttributesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUserAttributesResponse(data, context);
  const response: UpdateUserAttributesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateUserAttributesCommandError
 */
const de_UpdateUserAttributesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserAttributesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AliasExistsException":
    case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
      throw await de_AliasExistsExceptionRes(parsedOutput, context);
    case "CodeDeliveryFailureException":
    case "com.amazonaws.cognitoidentityprovider#CodeDeliveryFailureException":
      throw await de_CodeDeliveryFailureExceptionRes(parsedOutput, context);
    case "CodeMismatchException":
    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
      throw await de_CodeMismatchExceptionRes(parsedOutput, context);
    case "ExpiredCodeException":
    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
      throw await de_ExpiredCodeExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidEmailRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
      throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidLambdaResponseException":
    case "com.amazonaws.cognitoidentityprovider#InvalidLambdaResponseException":
      throw await de_InvalidLambdaResponseExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnexpectedLambdaException":
    case "com.amazonaws.cognitoidentityprovider#UnexpectedLambdaException":
      throw await de_UnexpectedLambdaExceptionRes(parsedOutput, context);
    case "UserLambdaValidationException":
    case "com.amazonaws.cognitoidentityprovider#UserLambdaValidationException":
      throw await de_UserLambdaValidationExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateUserPoolCommand
 */
export const de_UpdateUserPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUserPoolResponse(data, context);
  const response: UpdateUserPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateUserPoolCommandError
 */
const de_UpdateUserPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidEmailRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidEmailRoleAccessPolicyException":
      throw await de_InvalidEmailRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleAccessPolicyException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleAccessPolicyException":
      throw await de_InvalidSmsRoleAccessPolicyExceptionRes(parsedOutput, context);
    case "InvalidSmsRoleTrustRelationshipException":
    case "com.amazonaws.cognitoidentityprovider#InvalidSmsRoleTrustRelationshipException":
      throw await de_InvalidSmsRoleTrustRelationshipExceptionRes(parsedOutput, context);
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
    case "UserPoolTaggingException":
    case "com.amazonaws.cognitoidentityprovider#UserPoolTaggingException":
      throw await de_UserPoolTaggingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateUserPoolClientCommand
 */
export const de_UpdateUserPoolClientCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPoolClientCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserPoolClientCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUserPoolClientResponse(data, context);
  const response: UpdateUserPoolClientCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateUserPoolClientCommandError
 */
const de_UpdateUserPoolClientCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPoolClientCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentityprovider#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidOAuthFlowException":
    case "com.amazonaws.cognitoidentityprovider#InvalidOAuthFlowException":
      throw await de_InvalidOAuthFlowExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ScopeDoesNotExistException":
    case "com.amazonaws.cognitoidentityprovider#ScopeDoesNotExistException":
      throw await de_ScopeDoesNotExistExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateUserPoolDomainCommand
 */
export const de_UpdateUserPoolDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPoolDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserPoolDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUserPoolDomainResponse(data, context);
  const response: UpdateUserPoolDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateUserPoolDomainCommandError
 */
const de_UpdateUserPoolDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserPoolDomainCommandOutput> => {
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
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1VerifySoftwareTokenCommand
 */
export const de_VerifySoftwareTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifySoftwareTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_VerifySoftwareTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VerifySoftwareTokenResponse(data, context);
  const response: VerifySoftwareTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1VerifySoftwareTokenCommandError
 */
const de_VerifySoftwareTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifySoftwareTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeMismatchException":
    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
      throw await de_CodeMismatchExceptionRes(parsedOutput, context);
    case "EnableSoftwareTokenMFAException":
    case "com.amazonaws.cognitoidentityprovider#EnableSoftwareTokenMFAException":
      throw await de_EnableSoftwareTokenMFAExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidUserPoolConfigurationException":
    case "com.amazonaws.cognitoidentityprovider#InvalidUserPoolConfigurationException":
      throw await de_InvalidUserPoolConfigurationExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "SoftwareTokenMFANotFoundException":
    case "com.amazonaws.cognitoidentityprovider#SoftwareTokenMFANotFoundException":
      throw await de_SoftwareTokenMFANotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1VerifyUserAttributeCommand
 */
export const de_VerifyUserAttributeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyUserAttributeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_VerifyUserAttributeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_VerifyUserAttributeResponse(data, context);
  const response: VerifyUserAttributeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1VerifyUserAttributeCommandError
 */
const de_VerifyUserAttributeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyUserAttributeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AliasExistsException":
    case "com.amazonaws.cognitoidentityprovider#AliasExistsException":
      throw await de_AliasExistsExceptionRes(parsedOutput, context);
    case "CodeMismatchException":
    case "com.amazonaws.cognitoidentityprovider#CodeMismatchException":
      throw await de_CodeMismatchExceptionRes(parsedOutput, context);
    case "ExpiredCodeException":
    case "com.amazonaws.cognitoidentityprovider#ExpiredCodeException":
      throw await de_ExpiredCodeExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.cognitoidentityprovider#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentityprovider#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentityprovider#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentityprovider#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentityprovider#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "PasswordResetRequiredException":
    case "com.amazonaws.cognitoidentityprovider#PasswordResetRequiredException":
      throw await de_PasswordResetRequiredExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentityprovider#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UserNotConfirmedException":
    case "com.amazonaws.cognitoidentityprovider#UserNotConfirmedException":
      throw await de_UserNotConfirmedExceptionRes(parsedOutput, context);
    case "UserNotFoundException":
    case "com.amazonaws.cognitoidentityprovider#UserNotFoundException":
      throw await de_UserNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
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
  const deserialized: any = de_AliasExistsException(body, context);
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
  const deserialized: any = de_CodeDeliveryFailureException(body, context);
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
  const deserialized: any = de_CodeMismatchException(body, context);
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
  const deserialized: any = de_ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
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
  const deserialized: any = de_DuplicateProviderException(body, context);
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
  const deserialized: any = de_EnableSoftwareTokenMFAException(body, context);
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
  const deserialized: any = de_ExpiredCodeException(body, context);
  const exception = new ExpiredCodeException({
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
  const deserialized: any = de_ForbiddenException(body, context);
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
  const deserialized: any = de_GroupExistsException(body, context);
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
  const deserialized: any = de_InternalErrorException(body, context);
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
  const deserialized: any = de_InvalidEmailRoleAccessPolicyException(body, context);
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
  const deserialized: any = de_InvalidLambdaResponseException(body, context);
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
  const deserialized: any = de_InvalidOAuthFlowException(body, context);
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
  const deserialized: any = de_InvalidParameterException(body, context);
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
  const deserialized: any = de_InvalidPasswordException(body, context);
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
  const deserialized: any = de_InvalidSmsRoleAccessPolicyException(body, context);
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
  const deserialized: any = de_InvalidSmsRoleTrustRelationshipException(body, context);
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
  const deserialized: any = de_InvalidUserPoolConfigurationException(body, context);
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
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
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
  const deserialized: any = de_MFAMethodNotFoundException(body, context);
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
  const deserialized: any = de_NotAuthorizedException(body, context);
  const exception = new NotAuthorizedException({
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
  const deserialized: any = de_PasswordResetRequiredException(body, context);
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
  const deserialized: any = de_PreconditionNotMetException(body, context);
  const exception = new PreconditionNotMetException({
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
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
  const deserialized: any = de_ScopeDoesNotExistException(body, context);
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
  const deserialized: any = de_SoftwareTokenMFANotFoundException(body, context);
  const exception = new SoftwareTokenMFANotFoundException({
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
  const deserialized: any = de_TooManyFailedAttemptsException(body, context);
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
  const deserialized: any = de_TooManyRequestsException(body, context);
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
  const deserialized: any = de_UnauthorizedException(body, context);
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
  const deserialized: any = de_UnexpectedLambdaException(body, context);
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
  const deserialized: any = de_UnsupportedIdentityProviderException(body, context);
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
  const deserialized: any = de_UnsupportedOperationException(body, context);
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
  const deserialized: any = de_UnsupportedTokenTypeException(body, context);
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
  const deserialized: any = de_UnsupportedUserStateException(body, context);
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
  const deserialized: any = de_UserImportInProgressException(body, context);
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
  const deserialized: any = de_UserLambdaValidationException(body, context);
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
  const deserialized: any = de_UsernameExistsException(body, context);
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
  const deserialized: any = de_UserNotConfirmedException(body, context);
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
  const deserialized: any = de_UserNotFoundException(body, context);
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
  const deserialized: any = de_UserPoolAddOnNotEnabledException(body, context);
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
  const deserialized: any = de_UserPoolTaggingException(body, context);
  const exception = new UserPoolTaggingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AccountRecoverySettingType
 */
const se_AccountRecoverySettingType = (input: AccountRecoverySettingType, context: __SerdeContext): any => {
  return {
    ...(input.RecoveryMechanisms != null && {
      RecoveryMechanisms: se_RecoveryMechanismsType(input.RecoveryMechanisms, context),
    }),
  };
};

/**
 * serializeAws_json1_1AccountTakeoverActionsType
 */
const se_AccountTakeoverActionsType = (input: AccountTakeoverActionsType, context: __SerdeContext): any => {
  return {
    ...(input.HighAction != null && { HighAction: se_AccountTakeoverActionType(input.HighAction, context) }),
    ...(input.LowAction != null && { LowAction: se_AccountTakeoverActionType(input.LowAction, context) }),
    ...(input.MediumAction != null && { MediumAction: se_AccountTakeoverActionType(input.MediumAction, context) }),
  };
};

/**
 * serializeAws_json1_1AccountTakeoverActionType
 */
const se_AccountTakeoverActionType = (input: AccountTakeoverActionType, context: __SerdeContext): any => {
  return {
    ...(input.EventAction != null && { EventAction: input.EventAction }),
    ...(input.Notify != null && { Notify: input.Notify }),
  };
};

/**
 * serializeAws_json1_1AccountTakeoverRiskConfigurationType
 */
const se_AccountTakeoverRiskConfigurationType = (
  input: AccountTakeoverRiskConfigurationType,
  context: __SerdeContext
): any => {
  return {
    ...(input.Actions != null && { Actions: se_AccountTakeoverActionsType(input.Actions, context) }),
    ...(input.NotifyConfiguration != null && {
      NotifyConfiguration: se_NotifyConfigurationType(input.NotifyConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1AddCustomAttributesRequest
 */
const se_AddCustomAttributesRequest = (input: AddCustomAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomAttributes != null && {
      CustomAttributes: se_CustomAttributesListType(input.CustomAttributes, context),
    }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1AdminAddUserToGroupRequest
 */
const se_AdminAddUserToGroupRequest = (input: AdminAddUserToGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminConfirmSignUpRequest
 */
const se_AdminConfirmSignUpRequest = (input: AdminConfirmSignUpRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminCreateUserConfigType
 */
const se_AdminCreateUserConfigType = (input: AdminCreateUserConfigType, context: __SerdeContext): any => {
  return {
    ...(input.AllowAdminCreateUserOnly != null && { AllowAdminCreateUserOnly: input.AllowAdminCreateUserOnly }),
    ...(input.InviteMessageTemplate != null && {
      InviteMessageTemplate: se_MessageTemplateType(input.InviteMessageTemplate, context),
    }),
    ...(input.UnusedAccountValidityDays != null && { UnusedAccountValidityDays: input.UnusedAccountValidityDays }),
  };
};

/**
 * serializeAws_json1_1AdminCreateUserRequest
 */
const se_AdminCreateUserRequest = (input: AdminCreateUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.DesiredDeliveryMediums != null && {
      DesiredDeliveryMediums: se_DeliveryMediumListType(input.DesiredDeliveryMediums, context),
    }),
    ...(input.ForceAliasCreation != null && { ForceAliasCreation: input.ForceAliasCreation }),
    ...(input.MessageAction != null && { MessageAction: input.MessageAction }),
    ...(input.TemporaryPassword != null && { TemporaryPassword: input.TemporaryPassword }),
    ...(input.UserAttributes != null && { UserAttributes: se_AttributeListType(input.UserAttributes, context) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
    ...(input.ValidationData != null && { ValidationData: se_AttributeListType(input.ValidationData, context) }),
  };
};

/**
 * serializeAws_json1_1AdminDeleteUserAttributesRequest
 */
const se_AdminDeleteUserAttributesRequest = (input: AdminDeleteUserAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserAttributeNames != null && {
      UserAttributeNames: se_AttributeNameListType(input.UserAttributeNames, context),
    }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminDeleteUserRequest
 */
const se_AdminDeleteUserRequest = (input: AdminDeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminDisableProviderForUserRequest
 */
const se_AdminDisableProviderForUserRequest = (
  input: AdminDisableProviderForUserRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.User != null && { User: se_ProviderUserIdentifierType(input.User, context) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1AdminDisableUserRequest
 */
const se_AdminDisableUserRequest = (input: AdminDisableUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminEnableUserRequest
 */
const se_AdminEnableUserRequest = (input: AdminEnableUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminForgetDeviceRequest
 */
const se_AdminForgetDeviceRequest = (input: AdminForgetDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceKey != null && { DeviceKey: input.DeviceKey }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminGetDeviceRequest
 */
const se_AdminGetDeviceRequest = (input: AdminGetDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceKey != null && { DeviceKey: input.DeviceKey }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminGetUserRequest
 */
const se_AdminGetUserRequest = (input: AdminGetUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminInitiateAuthRequest
 */
const se_AdminInitiateAuthRequest = (input: AdminInitiateAuthRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnalyticsMetadata != null && {
      AnalyticsMetadata: se_AnalyticsMetadataType(input.AnalyticsMetadata, context),
    }),
    ...(input.AuthFlow != null && { AuthFlow: input.AuthFlow }),
    ...(input.AuthParameters != null && { AuthParameters: se_AuthParametersType(input.AuthParameters, context) }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.ContextData != null && { ContextData: se_ContextDataType(input.ContextData, context) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1AdminLinkProviderForUserRequest
 */
const se_AdminLinkProviderForUserRequest = (input: AdminLinkProviderForUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.DestinationUser != null && {
      DestinationUser: se_ProviderUserIdentifierType(input.DestinationUser, context),
    }),
    ...(input.SourceUser != null && { SourceUser: se_ProviderUserIdentifierType(input.SourceUser, context) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1AdminListDevicesRequest
 */
const se_AdminListDevicesRequest = (input: AdminListDevicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminListGroupsForUserRequest
 */
const se_AdminListGroupsForUserRequest = (input: AdminListGroupsForUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminListUserAuthEventsRequest
 */
const se_AdminListUserAuthEventsRequest = (input: AdminListUserAuthEventsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminRemoveUserFromGroupRequest
 */
const se_AdminRemoveUserFromGroupRequest = (input: AdminRemoveUserFromGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminResetUserPasswordRequest
 */
const se_AdminResetUserPasswordRequest = (input: AdminResetUserPasswordRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminRespondToAuthChallengeRequest
 */
const se_AdminRespondToAuthChallengeRequest = (
  input: AdminRespondToAuthChallengeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AnalyticsMetadata != null && {
      AnalyticsMetadata: se_AnalyticsMetadataType(input.AnalyticsMetadata, context),
    }),
    ...(input.ChallengeName != null && { ChallengeName: input.ChallengeName }),
    ...(input.ChallengeResponses != null && {
      ChallengeResponses: se_ChallengeResponsesType(input.ChallengeResponses, context),
    }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.ContextData != null && { ContextData: se_ContextDataType(input.ContextData, context) }),
    ...(input.Session != null && { Session: input.Session }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1AdminSetUserMFAPreferenceRequest
 */
const se_AdminSetUserMFAPreferenceRequest = (input: AdminSetUserMFAPreferenceRequest, context: __SerdeContext): any => {
  return {
    ...(input.SMSMfaSettings != null && { SMSMfaSettings: se_SMSMfaSettingsType(input.SMSMfaSettings, context) }),
    ...(input.SoftwareTokenMfaSettings != null && {
      SoftwareTokenMfaSettings: se_SoftwareTokenMfaSettingsType(input.SoftwareTokenMfaSettings, context),
    }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminSetUserPasswordRequest
 */
const se_AdminSetUserPasswordRequest = (input: AdminSetUserPasswordRequest, context: __SerdeContext): any => {
  return {
    ...(input.Password != null && { Password: input.Password }),
    ...(input.Permanent != null && { Permanent: input.Permanent }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminSetUserSettingsRequest
 */
const se_AdminSetUserSettingsRequest = (input: AdminSetUserSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MFAOptions != null && { MFAOptions: se_MFAOptionListType(input.MFAOptions, context) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminUpdateAuthEventFeedbackRequest
 */
const se_AdminUpdateAuthEventFeedbackRequest = (
  input: AdminUpdateAuthEventFeedbackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventId != null && { EventId: input.EventId }),
    ...(input.FeedbackValue != null && { FeedbackValue: input.FeedbackValue }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminUpdateDeviceStatusRequest
 */
const se_AdminUpdateDeviceStatusRequest = (input: AdminUpdateDeviceStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.DeviceKey != null && { DeviceKey: input.DeviceKey }),
    ...(input.DeviceRememberedStatus != null && { DeviceRememberedStatus: input.DeviceRememberedStatus }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminUpdateUserAttributesRequest
 */
const se_AdminUpdateUserAttributesRequest = (input: AdminUpdateUserAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.UserAttributes != null && { UserAttributes: se_AttributeListType(input.UserAttributes, context) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AdminUserGlobalSignOutRequest
 */
const se_AdminUserGlobalSignOutRequest = (input: AdminUserGlobalSignOutRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1AliasAttributesListType
 */
const se_AliasAttributesListType = (input: (AliasAttributeType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AnalyticsConfigurationType
 */
const se_AnalyticsConfigurationType = (input: AnalyticsConfigurationType, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationArn != null && { ApplicationArn: input.ApplicationArn }),
    ...(input.ApplicationId != null && { ApplicationId: input.ApplicationId }),
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.UserDataShared != null && { UserDataShared: input.UserDataShared }),
  };
};

/**
 * serializeAws_json1_1AnalyticsMetadataType
 */
const se_AnalyticsMetadataType = (input: AnalyticsMetadataType, context: __SerdeContext): any => {
  return {
    ...(input.AnalyticsEndpointId != null && { AnalyticsEndpointId: input.AnalyticsEndpointId }),
  };
};

/**
 * serializeAws_json1_1AssociateSoftwareTokenRequest
 */
const se_AssociateSoftwareTokenRequest = (input: AssociateSoftwareTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.Session != null && { Session: input.Session }),
  };
};

/**
 * serializeAws_json1_1AttributeListType
 */
const se_AttributeListType = (input: AttributeType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeType(entry, context);
    });
};

/**
 * serializeAws_json1_1AttributeMappingType
 */
const se_AttributeMappingType = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1AttributeNameListType
 */
const se_AttributeNameListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AttributesRequireVerificationBeforeUpdateType
 */
const se_AttributesRequireVerificationBeforeUpdateType = (
  input: (VerifiedAttributeType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AttributeType
 */
const se_AttributeType = (input: AttributeType, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1AuthParametersType
 */
const se_AuthParametersType = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1BlockedIPRangeListType
 */
const se_BlockedIPRangeListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CallbackURLsListType
 */
const se_CallbackURLsListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ChallengeResponsesType
 */
const se_ChallengeResponsesType = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ChangePasswordRequest
 */
const se_ChangePasswordRequest = (input: ChangePasswordRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.PreviousPassword != null && { PreviousPassword: input.PreviousPassword }),
    ...(input.ProposedPassword != null && { ProposedPassword: input.ProposedPassword }),
  };
};

/**
 * serializeAws_json1_1ClientMetadataType
 */
const se_ClientMetadataType = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ClientPermissionListType
 */
const se_ClientPermissionListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CompromisedCredentialsActionsType
 */
const se_CompromisedCredentialsActionsType = (
  input: CompromisedCredentialsActionsType,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventAction != null && { EventAction: input.EventAction }),
  };
};

/**
 * serializeAws_json1_1CompromisedCredentialsRiskConfigurationType
 */
const se_CompromisedCredentialsRiskConfigurationType = (
  input: CompromisedCredentialsRiskConfigurationType,
  context: __SerdeContext
): any => {
  return {
    ...(input.Actions != null && { Actions: se_CompromisedCredentialsActionsType(input.Actions, context) }),
    ...(input.EventFilter != null && { EventFilter: se_EventFiltersType(input.EventFilter, context) }),
  };
};

/**
 * serializeAws_json1_1ConfirmDeviceRequest
 */
const se_ConfirmDeviceRequest = (input: ConfirmDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.DeviceKey != null && { DeviceKey: input.DeviceKey }),
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
    ...(input.DeviceSecretVerifierConfig != null && {
      DeviceSecretVerifierConfig: se_DeviceSecretVerifierConfigType(input.DeviceSecretVerifierConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_1ConfirmForgotPasswordRequest
 */
const se_ConfirmForgotPasswordRequest = (input: ConfirmForgotPasswordRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnalyticsMetadata != null && {
      AnalyticsMetadata: se_AnalyticsMetadataType(input.AnalyticsMetadata, context),
    }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.ConfirmationCode != null && { ConfirmationCode: input.ConfirmationCode }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.SecretHash != null && { SecretHash: input.SecretHash }),
    ...(input.UserContextData != null && { UserContextData: se_UserContextDataType(input.UserContextData, context) }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1ConfirmSignUpRequest
 */
const se_ConfirmSignUpRequest = (input: ConfirmSignUpRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnalyticsMetadata != null && {
      AnalyticsMetadata: se_AnalyticsMetadataType(input.AnalyticsMetadata, context),
    }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.ConfirmationCode != null && { ConfirmationCode: input.ConfirmationCode }),
    ...(input.ForceAliasCreation != null && { ForceAliasCreation: input.ForceAliasCreation }),
    ...(input.SecretHash != null && { SecretHash: input.SecretHash }),
    ...(input.UserContextData != null && { UserContextData: se_UserContextDataType(input.UserContextData, context) }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1ContextDataType
 */
const se_ContextDataType = (input: ContextDataType, context: __SerdeContext): any => {
  return {
    ...(input.EncodedData != null && { EncodedData: input.EncodedData }),
    ...(input.HttpHeaders != null && { HttpHeaders: se_HttpHeaderList(input.HttpHeaders, context) }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
    ...(input.ServerName != null && { ServerName: input.ServerName }),
    ...(input.ServerPath != null && { ServerPath: input.ServerPath }),
  };
};

/**
 * serializeAws_json1_1CreateGroupRequest
 */
const se_CreateGroupRequest = (input: CreateGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.Precedence != null && { Precedence: input.Precedence }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1CreateIdentityProviderRequest
 */
const se_CreateIdentityProviderRequest = (input: CreateIdentityProviderRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttributeMapping != null && {
      AttributeMapping: se_AttributeMappingType(input.AttributeMapping, context),
    }),
    ...(input.IdpIdentifiers != null && { IdpIdentifiers: se_IdpIdentifiersListType(input.IdpIdentifiers, context) }),
    ...(input.ProviderDetails != null && { ProviderDetails: se_ProviderDetailsType(input.ProviderDetails, context) }),
    ...(input.ProviderName != null && { ProviderName: input.ProviderName }),
    ...(input.ProviderType != null && { ProviderType: input.ProviderType }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1CreateResourceServerRequest
 */
const se_CreateResourceServerRequest = (input: CreateResourceServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scopes != null && { Scopes: se_ResourceServerScopeListType(input.Scopes, context) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1CreateUserImportJobRequest
 */
const se_CreateUserImportJobRequest = (input: CreateUserImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogsRoleArn != null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1CreateUserPoolClientRequest
 */
const se_CreateUserPoolClientRequest = (input: CreateUserPoolClientRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessTokenValidity != null && { AccessTokenValidity: input.AccessTokenValidity }),
    ...(input.AllowedOAuthFlows != null && { AllowedOAuthFlows: se_OAuthFlowsType(input.AllowedOAuthFlows, context) }),
    ...(input.AllowedOAuthFlowsUserPoolClient != null && {
      AllowedOAuthFlowsUserPoolClient: input.AllowedOAuthFlowsUserPoolClient,
    }),
    ...(input.AllowedOAuthScopes != null && {
      AllowedOAuthScopes: se_ScopeListType(input.AllowedOAuthScopes, context),
    }),
    ...(input.AnalyticsConfiguration != null && {
      AnalyticsConfiguration: se_AnalyticsConfigurationType(input.AnalyticsConfiguration, context),
    }),
    ...(input.AuthSessionValidity != null && { AuthSessionValidity: input.AuthSessionValidity }),
    ...(input.CallbackURLs != null && { CallbackURLs: se_CallbackURLsListType(input.CallbackURLs, context) }),
    ...(input.ClientName != null && { ClientName: input.ClientName }),
    ...(input.DefaultRedirectURI != null && { DefaultRedirectURI: input.DefaultRedirectURI }),
    ...(input.EnablePropagateAdditionalUserContextData != null && {
      EnablePropagateAdditionalUserContextData: input.EnablePropagateAdditionalUserContextData,
    }),
    ...(input.EnableTokenRevocation != null && { EnableTokenRevocation: input.EnableTokenRevocation }),
    ...(input.ExplicitAuthFlows != null && {
      ExplicitAuthFlows: se_ExplicitAuthFlowsListType(input.ExplicitAuthFlows, context),
    }),
    ...(input.GenerateSecret != null && { GenerateSecret: input.GenerateSecret }),
    ...(input.IdTokenValidity != null && { IdTokenValidity: input.IdTokenValidity }),
    ...(input.LogoutURLs != null && { LogoutURLs: se_LogoutURLsListType(input.LogoutURLs, context) }),
    ...(input.PreventUserExistenceErrors != null && { PreventUserExistenceErrors: input.PreventUserExistenceErrors }),
    ...(input.ReadAttributes != null && { ReadAttributes: se_ClientPermissionListType(input.ReadAttributes, context) }),
    ...(input.RefreshTokenValidity != null && { RefreshTokenValidity: input.RefreshTokenValidity }),
    ...(input.SupportedIdentityProviders != null && {
      SupportedIdentityProviders: se_SupportedIdentityProvidersListType(input.SupportedIdentityProviders, context),
    }),
    ...(input.TokenValidityUnits != null && {
      TokenValidityUnits: se_TokenValidityUnitsType(input.TokenValidityUnits, context),
    }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.WriteAttributes != null && {
      WriteAttributes: se_ClientPermissionListType(input.WriteAttributes, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateUserPoolDomainRequest
 */
const se_CreateUserPoolDomainRequest = (input: CreateUserPoolDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomDomainConfig != null && {
      CustomDomainConfig: se_CustomDomainConfigType(input.CustomDomainConfig, context),
    }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1CreateUserPoolRequest
 */
const se_CreateUserPoolRequest = (input: CreateUserPoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountRecoverySetting != null && {
      AccountRecoverySetting: se_AccountRecoverySettingType(input.AccountRecoverySetting, context),
    }),
    ...(input.AdminCreateUserConfig != null && {
      AdminCreateUserConfig: se_AdminCreateUserConfigType(input.AdminCreateUserConfig, context),
    }),
    ...(input.AliasAttributes != null && {
      AliasAttributes: se_AliasAttributesListType(input.AliasAttributes, context),
    }),
    ...(input.AutoVerifiedAttributes != null && {
      AutoVerifiedAttributes: se_VerifiedAttributesListType(input.AutoVerifiedAttributes, context),
    }),
    ...(input.DeletionProtection != null && { DeletionProtection: input.DeletionProtection }),
    ...(input.DeviceConfiguration != null && {
      DeviceConfiguration: se_DeviceConfigurationType(input.DeviceConfiguration, context),
    }),
    ...(input.EmailConfiguration != null && {
      EmailConfiguration: se_EmailConfigurationType(input.EmailConfiguration, context),
    }),
    ...(input.EmailVerificationMessage != null && { EmailVerificationMessage: input.EmailVerificationMessage }),
    ...(input.EmailVerificationSubject != null && { EmailVerificationSubject: input.EmailVerificationSubject }),
    ...(input.LambdaConfig != null && { LambdaConfig: se_LambdaConfigType(input.LambdaConfig, context) }),
    ...(input.MfaConfiguration != null && { MfaConfiguration: input.MfaConfiguration }),
    ...(input.Policies != null && { Policies: se_UserPoolPolicyType(input.Policies, context) }),
    ...(input.PoolName != null && { PoolName: input.PoolName }),
    ...(input.Schema != null && { Schema: se_SchemaAttributesListType(input.Schema, context) }),
    ...(input.SmsAuthenticationMessage != null && { SmsAuthenticationMessage: input.SmsAuthenticationMessage }),
    ...(input.SmsConfiguration != null && {
      SmsConfiguration: se_SmsConfigurationType(input.SmsConfiguration, context),
    }),
    ...(input.SmsVerificationMessage != null && { SmsVerificationMessage: input.SmsVerificationMessage }),
    ...(input.UserAttributeUpdateSettings != null && {
      UserAttributeUpdateSettings: se_UserAttributeUpdateSettingsType(input.UserAttributeUpdateSettings, context),
    }),
    ...(input.UserPoolAddOns != null && { UserPoolAddOns: se_UserPoolAddOnsType(input.UserPoolAddOns, context) }),
    ...(input.UserPoolTags != null && { UserPoolTags: se_UserPoolTagsType(input.UserPoolTags, context) }),
    ...(input.UsernameAttributes != null && {
      UsernameAttributes: se_UsernameAttributesListType(input.UsernameAttributes, context),
    }),
    ...(input.UsernameConfiguration != null && {
      UsernameConfiguration: se_UsernameConfigurationType(input.UsernameConfiguration, context),
    }),
    ...(input.VerificationMessageTemplate != null && {
      VerificationMessageTemplate: se_VerificationMessageTemplateType(input.VerificationMessageTemplate, context),
    }),
  };
};

/**
 * serializeAws_json1_1CustomAttributesListType
 */
const se_CustomAttributesListType = (input: SchemaAttributeType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SchemaAttributeType(entry, context);
    });
};

/**
 * serializeAws_json1_1CustomDomainConfigType
 */
const se_CustomDomainConfigType = (input: CustomDomainConfigType, context: __SerdeContext): any => {
  return {
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
  };
};

/**
 * serializeAws_json1_1CustomEmailLambdaVersionConfigType
 */
const se_CustomEmailLambdaVersionConfigType = (
  input: CustomEmailLambdaVersionConfigType,
  context: __SerdeContext
): any => {
  return {
    ...(input.LambdaArn != null && { LambdaArn: input.LambdaArn }),
    ...(input.LambdaVersion != null && { LambdaVersion: input.LambdaVersion }),
  };
};

/**
 * serializeAws_json1_1CustomSMSLambdaVersionConfigType
 */
const se_CustomSMSLambdaVersionConfigType = (input: CustomSMSLambdaVersionConfigType, context: __SerdeContext): any => {
  return {
    ...(input.LambdaArn != null && { LambdaArn: input.LambdaArn }),
    ...(input.LambdaVersion != null && { LambdaVersion: input.LambdaVersion }),
  };
};

/**
 * serializeAws_json1_1DeleteGroupRequest
 */
const se_DeleteGroupRequest = (input: DeleteGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DeleteIdentityProviderRequest
 */
const se_DeleteIdentityProviderRequest = (input: DeleteIdentityProviderRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProviderName != null && { ProviderName: input.ProviderName }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DeleteResourceServerRequest
 */
const se_DeleteResourceServerRequest = (input: DeleteResourceServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DeleteUserAttributesRequest
 */
const se_DeleteUserAttributesRequest = (input: DeleteUserAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.UserAttributeNames != null && {
      UserAttributeNames: se_AttributeNameListType(input.UserAttributeNames, context),
    }),
  };
};

/**
 * serializeAws_json1_1DeleteUserPoolClientRequest
 */
const se_DeleteUserPoolClientRequest = (input: DeleteUserPoolClientRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DeleteUserPoolDomainRequest
 */
const se_DeleteUserPoolDomainRequest = (input: DeleteUserPoolDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DeleteUserPoolRequest
 */
const se_DeleteUserPoolRequest = (input: DeleteUserPoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DeleteUserRequest
 */
const se_DeleteUserRequest = (input: DeleteUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
  };
};

/**
 * serializeAws_json1_1DeliveryMediumListType
 */
const se_DeliveryMediumListType = (input: (DeliveryMediumType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DescribeIdentityProviderRequest
 */
const se_DescribeIdentityProviderRequest = (input: DescribeIdentityProviderRequest, context: __SerdeContext): any => {
  return {
    ...(input.ProviderName != null && { ProviderName: input.ProviderName }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DescribeResourceServerRequest
 */
const se_DescribeResourceServerRequest = (input: DescribeResourceServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DescribeRiskConfigurationRequest
 */
const se_DescribeRiskConfigurationRequest = (input: DescribeRiskConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DescribeUserImportJobRequest
 */
const se_DescribeUserImportJobRequest = (input: DescribeUserImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DescribeUserPoolClientRequest
 */
const se_DescribeUserPoolClientRequest = (input: DescribeUserPoolClientRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DescribeUserPoolDomainRequest
 */
const se_DescribeUserPoolDomainRequest = (input: DescribeUserPoolDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
  };
};

/**
 * serializeAws_json1_1DescribeUserPoolRequest
 */
const se_DescribeUserPoolRequest = (input: DescribeUserPoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1DeviceConfigurationType
 */
const se_DeviceConfigurationType = (input: DeviceConfigurationType, context: __SerdeContext): any => {
  return {
    ...(input.ChallengeRequiredOnNewDevice != null && {
      ChallengeRequiredOnNewDevice: input.ChallengeRequiredOnNewDevice,
    }),
    ...(input.DeviceOnlyRememberedOnUserPrompt != null && {
      DeviceOnlyRememberedOnUserPrompt: input.DeviceOnlyRememberedOnUserPrompt,
    }),
  };
};

/**
 * serializeAws_json1_1DeviceSecretVerifierConfigType
 */
const se_DeviceSecretVerifierConfigType = (input: DeviceSecretVerifierConfigType, context: __SerdeContext): any => {
  return {
    ...(input.PasswordVerifier != null && { PasswordVerifier: input.PasswordVerifier }),
    ...(input.Salt != null && { Salt: input.Salt }),
  };
};

/**
 * serializeAws_json1_1EmailConfigurationType
 */
const se_EmailConfigurationType = (input: EmailConfigurationType, context: __SerdeContext): any => {
  return {
    ...(input.ConfigurationSet != null && { ConfigurationSet: input.ConfigurationSet }),
    ...(input.EmailSendingAccount != null && { EmailSendingAccount: input.EmailSendingAccount }),
    ...(input.From != null && { From: input.From }),
    ...(input.ReplyToEmailAddress != null && { ReplyToEmailAddress: input.ReplyToEmailAddress }),
    ...(input.SourceArn != null && { SourceArn: input.SourceArn }),
  };
};

/**
 * serializeAws_json1_1EventFiltersType
 */
const se_EventFiltersType = (input: (EventFilterType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ExplicitAuthFlowsListType
 */
const se_ExplicitAuthFlowsListType = (input: (ExplicitAuthFlowsType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ForgetDeviceRequest
 */
const se_ForgetDeviceRequest = (input: ForgetDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.DeviceKey != null && { DeviceKey: input.DeviceKey }),
  };
};

/**
 * serializeAws_json1_1ForgotPasswordRequest
 */
const se_ForgotPasswordRequest = (input: ForgotPasswordRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnalyticsMetadata != null && {
      AnalyticsMetadata: se_AnalyticsMetadataType(input.AnalyticsMetadata, context),
    }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.SecretHash != null && { SecretHash: input.SecretHash }),
    ...(input.UserContextData != null && { UserContextData: se_UserContextDataType(input.UserContextData, context) }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1GetCSVHeaderRequest
 */
const se_GetCSVHeaderRequest = (input: GetCSVHeaderRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1GetDeviceRequest
 */
const se_GetDeviceRequest = (input: GetDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.DeviceKey != null && { DeviceKey: input.DeviceKey }),
  };
};

/**
 * serializeAws_json1_1GetGroupRequest
 */
const se_GetGroupRequest = (input: GetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1GetIdentityProviderByIdentifierRequest
 */
const se_GetIdentityProviderByIdentifierRequest = (
  input: GetIdentityProviderByIdentifierRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdpIdentifier != null && { IdpIdentifier: input.IdpIdentifier }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1GetSigningCertificateRequest
 */
const se_GetSigningCertificateRequest = (input: GetSigningCertificateRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1GetUICustomizationRequest
 */
const se_GetUICustomizationRequest = (input: GetUICustomizationRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1GetUserAttributeVerificationCodeRequest
 */
const se_GetUserAttributeVerificationCodeRequest = (
  input: GetUserAttributeVerificationCodeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
  };
};

/**
 * serializeAws_json1_1GetUserPoolMfaConfigRequest
 */
const se_GetUserPoolMfaConfigRequest = (input: GetUserPoolMfaConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1GetUserRequest
 */
const se_GetUserRequest = (input: GetUserRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
  };
};

/**
 * serializeAws_json1_1GlobalSignOutRequest
 */
const se_GlobalSignOutRequest = (input: GlobalSignOutRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
  };
};

/**
 * serializeAws_json1_1HttpHeader
 */
const se_HttpHeader = (input: HttpHeader, context: __SerdeContext): any => {
  return {
    ...(input.headerName != null && { headerName: input.headerName }),
    ...(input.headerValue != null && { headerValue: input.headerValue }),
  };
};

/**
 * serializeAws_json1_1HttpHeaderList
 */
const se_HttpHeaderList = (input: HttpHeader[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_HttpHeader(entry, context);
    });
};

/**
 * serializeAws_json1_1IdpIdentifiersListType
 */
const se_IdpIdentifiersListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1InitiateAuthRequest
 */
const se_InitiateAuthRequest = (input: InitiateAuthRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnalyticsMetadata != null && {
      AnalyticsMetadata: se_AnalyticsMetadataType(input.AnalyticsMetadata, context),
    }),
    ...(input.AuthFlow != null && { AuthFlow: input.AuthFlow }),
    ...(input.AuthParameters != null && { AuthParameters: se_AuthParametersType(input.AuthParameters, context) }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.UserContextData != null && { UserContextData: se_UserContextDataType(input.UserContextData, context) }),
  };
};

/**
 * serializeAws_json1_1LambdaConfigType
 */
const se_LambdaConfigType = (input: LambdaConfigType, context: __SerdeContext): any => {
  return {
    ...(input.CreateAuthChallenge != null && { CreateAuthChallenge: input.CreateAuthChallenge }),
    ...(input.CustomEmailSender != null && {
      CustomEmailSender: se_CustomEmailLambdaVersionConfigType(input.CustomEmailSender, context),
    }),
    ...(input.CustomMessage != null && { CustomMessage: input.CustomMessage }),
    ...(input.CustomSMSSender != null && {
      CustomSMSSender: se_CustomSMSLambdaVersionConfigType(input.CustomSMSSender, context),
    }),
    ...(input.DefineAuthChallenge != null && { DefineAuthChallenge: input.DefineAuthChallenge }),
    ...(input.KMSKeyID != null && { KMSKeyID: input.KMSKeyID }),
    ...(input.PostAuthentication != null && { PostAuthentication: input.PostAuthentication }),
    ...(input.PostConfirmation != null && { PostConfirmation: input.PostConfirmation }),
    ...(input.PreAuthentication != null && { PreAuthentication: input.PreAuthentication }),
    ...(input.PreSignUp != null && { PreSignUp: input.PreSignUp }),
    ...(input.PreTokenGeneration != null && { PreTokenGeneration: input.PreTokenGeneration }),
    ...(input.UserMigration != null && { UserMigration: input.UserMigration }),
    ...(input.VerifyAuthChallengeResponse != null && {
      VerifyAuthChallengeResponse: input.VerifyAuthChallengeResponse,
    }),
  };
};

/**
 * serializeAws_json1_1ListDevicesRequest
 */
const se_ListDevicesRequest = (input: ListDevicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
  };
};

/**
 * serializeAws_json1_1ListGroupsRequest
 */
const se_ListGroupsRequest = (input: ListGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1ListIdentityProvidersRequest
 */
const se_ListIdentityProvidersRequest = (input: ListIdentityProvidersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1ListResourceServersRequest
 */
const se_ListResourceServersRequest = (input: ListResourceServersRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ListUserImportJobsRequest
 */
const se_ListUserImportJobsRequest = (input: ListUserImportJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1ListUserPoolClientsRequest
 */
const se_ListUserPoolClientsRequest = (input: ListUserPoolClientsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1ListUserPoolsRequest
 */
const se_ListUserPoolsRequest = (input: ListUserPoolsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListUsersInGroupRequest
 */
const se_ListUsersInGroupRequest = (input: ListUsersInGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1ListUsersRequest
 */
const se_ListUsersRequest = (input: ListUsersRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttributesToGet != null && {
      AttributesToGet: se_SearchedAttributeNamesListType(input.AttributesToGet, context),
    }),
    ...(input.Filter != null && { Filter: input.Filter }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.PaginationToken != null && { PaginationToken: input.PaginationToken }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1LogoutURLsListType
 */
const se_LogoutURLsListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1MessageTemplateType
 */
const se_MessageTemplateType = (input: MessageTemplateType, context: __SerdeContext): any => {
  return {
    ...(input.EmailMessage != null && { EmailMessage: input.EmailMessage }),
    ...(input.EmailSubject != null && { EmailSubject: input.EmailSubject }),
    ...(input.SMSMessage != null && { SMSMessage: input.SMSMessage }),
  };
};

/**
 * serializeAws_json1_1MFAOptionListType
 */
const se_MFAOptionListType = (input: MFAOptionType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MFAOptionType(entry, context);
    });
};

/**
 * serializeAws_json1_1MFAOptionType
 */
const se_MFAOptionType = (input: MFAOptionType, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.DeliveryMedium != null && { DeliveryMedium: input.DeliveryMedium }),
  };
};

/**
 * serializeAws_json1_1NotifyConfigurationType
 */
const se_NotifyConfigurationType = (input: NotifyConfigurationType, context: __SerdeContext): any => {
  return {
    ...(input.BlockEmail != null && { BlockEmail: se_NotifyEmailType(input.BlockEmail, context) }),
    ...(input.From != null && { From: input.From }),
    ...(input.MfaEmail != null && { MfaEmail: se_NotifyEmailType(input.MfaEmail, context) }),
    ...(input.NoActionEmail != null && { NoActionEmail: se_NotifyEmailType(input.NoActionEmail, context) }),
    ...(input.ReplyTo != null && { ReplyTo: input.ReplyTo }),
    ...(input.SourceArn != null && { SourceArn: input.SourceArn }),
  };
};

/**
 * serializeAws_json1_1NotifyEmailType
 */
const se_NotifyEmailType = (input: NotifyEmailType, context: __SerdeContext): any => {
  return {
    ...(input.HtmlBody != null && { HtmlBody: input.HtmlBody }),
    ...(input.Subject != null && { Subject: input.Subject }),
    ...(input.TextBody != null && { TextBody: input.TextBody }),
  };
};

/**
 * serializeAws_json1_1NumberAttributeConstraintsType
 */
const se_NumberAttributeConstraintsType = (input: NumberAttributeConstraintsType, context: __SerdeContext): any => {
  return {
    ...(input.MaxValue != null && { MaxValue: input.MaxValue }),
    ...(input.MinValue != null && { MinValue: input.MinValue }),
  };
};

/**
 * serializeAws_json1_1OAuthFlowsType
 */
const se_OAuthFlowsType = (input: (OAuthFlowType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PasswordPolicyType
 */
const se_PasswordPolicyType = (input: PasswordPolicyType, context: __SerdeContext): any => {
  return {
    ...(input.MinimumLength != null && { MinimumLength: input.MinimumLength }),
    ...(input.RequireLowercase != null && { RequireLowercase: input.RequireLowercase }),
    ...(input.RequireNumbers != null && { RequireNumbers: input.RequireNumbers }),
    ...(input.RequireSymbols != null && { RequireSymbols: input.RequireSymbols }),
    ...(input.RequireUppercase != null && { RequireUppercase: input.RequireUppercase }),
    ...(input.TemporaryPasswordValidityDays != null && {
      TemporaryPasswordValidityDays: input.TemporaryPasswordValidityDays,
    }),
  };
};

/**
 * serializeAws_json1_1ProviderDetailsType
 */
const se_ProviderDetailsType = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ProviderUserIdentifierType
 */
const se_ProviderUserIdentifierType = (input: ProviderUserIdentifierType, context: __SerdeContext): any => {
  return {
    ...(input.ProviderAttributeName != null && { ProviderAttributeName: input.ProviderAttributeName }),
    ...(input.ProviderAttributeValue != null && { ProviderAttributeValue: input.ProviderAttributeValue }),
    ...(input.ProviderName != null && { ProviderName: input.ProviderName }),
  };
};

/**
 * serializeAws_json1_1RecoveryMechanismsType
 */
const se_RecoveryMechanismsType = (input: RecoveryOptionType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RecoveryOptionType(entry, context);
    });
};

/**
 * serializeAws_json1_1RecoveryOptionType
 */
const se_RecoveryOptionType = (input: RecoveryOptionType, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Priority != null && { Priority: input.Priority }),
  };
};

/**
 * serializeAws_json1_1ResendConfirmationCodeRequest
 */
const se_ResendConfirmationCodeRequest = (input: ResendConfirmationCodeRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnalyticsMetadata != null && {
      AnalyticsMetadata: se_AnalyticsMetadataType(input.AnalyticsMetadata, context),
    }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.SecretHash != null && { SecretHash: input.SecretHash }),
    ...(input.UserContextData != null && { UserContextData: se_UserContextDataType(input.UserContextData, context) }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1ResourceServerScopeListType
 */
const se_ResourceServerScopeListType = (input: ResourceServerScopeType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceServerScopeType(entry, context);
    });
};

/**
 * serializeAws_json1_1ResourceServerScopeType
 */
const se_ResourceServerScopeType = (input: ResourceServerScopeType, context: __SerdeContext): any => {
  return {
    ...(input.ScopeDescription != null && { ScopeDescription: input.ScopeDescription }),
    ...(input.ScopeName != null && { ScopeName: input.ScopeName }),
  };
};

/**
 * serializeAws_json1_1RespondToAuthChallengeRequest
 */
const se_RespondToAuthChallengeRequest = (input: RespondToAuthChallengeRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnalyticsMetadata != null && {
      AnalyticsMetadata: se_AnalyticsMetadataType(input.AnalyticsMetadata, context),
    }),
    ...(input.ChallengeName != null && { ChallengeName: input.ChallengeName }),
    ...(input.ChallengeResponses != null && {
      ChallengeResponses: se_ChallengeResponsesType(input.ChallengeResponses, context),
    }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.Session != null && { Session: input.Session }),
    ...(input.UserContextData != null && { UserContextData: se_UserContextDataType(input.UserContextData, context) }),
  };
};

/**
 * serializeAws_json1_1RevokeTokenRequest
 */
const se_RevokeTokenRequest = (input: RevokeTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientSecret != null && { ClientSecret: input.ClientSecret }),
    ...(input.Token != null && { Token: input.Token }),
  };
};

/**
 * serializeAws_json1_1RiskExceptionConfigurationType
 */
const se_RiskExceptionConfigurationType = (input: RiskExceptionConfigurationType, context: __SerdeContext): any => {
  return {
    ...(input.BlockedIPRangeList != null && {
      BlockedIPRangeList: se_BlockedIPRangeListType(input.BlockedIPRangeList, context),
    }),
    ...(input.SkippedIPRangeList != null && {
      SkippedIPRangeList: se_SkippedIPRangeListType(input.SkippedIPRangeList, context),
    }),
  };
};

/**
 * serializeAws_json1_1SchemaAttributesListType
 */
const se_SchemaAttributesListType = (input: SchemaAttributeType[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SchemaAttributeType(entry, context);
    });
};

/**
 * serializeAws_json1_1SchemaAttributeType
 */
const se_SchemaAttributeType = (input: SchemaAttributeType, context: __SerdeContext): any => {
  return {
    ...(input.AttributeDataType != null && { AttributeDataType: input.AttributeDataType }),
    ...(input.DeveloperOnlyAttribute != null && { DeveloperOnlyAttribute: input.DeveloperOnlyAttribute }),
    ...(input.Mutable != null && { Mutable: input.Mutable }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NumberAttributeConstraints != null && {
      NumberAttributeConstraints: se_NumberAttributeConstraintsType(input.NumberAttributeConstraints, context),
    }),
    ...(input.Required != null && { Required: input.Required }),
    ...(input.StringAttributeConstraints != null && {
      StringAttributeConstraints: se_StringAttributeConstraintsType(input.StringAttributeConstraints, context),
    }),
  };
};

/**
 * serializeAws_json1_1ScopeListType
 */
const se_ScopeListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SearchedAttributeNamesListType
 */
const se_SearchedAttributeNamesListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SetRiskConfigurationRequest
 */
const se_SetRiskConfigurationRequest = (input: SetRiskConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountTakeoverRiskConfiguration != null && {
      AccountTakeoverRiskConfiguration: se_AccountTakeoverRiskConfigurationType(
        input.AccountTakeoverRiskConfiguration,
        context
      ),
    }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.CompromisedCredentialsRiskConfiguration != null && {
      CompromisedCredentialsRiskConfiguration: se_CompromisedCredentialsRiskConfigurationType(
        input.CompromisedCredentialsRiskConfiguration,
        context
      ),
    }),
    ...(input.RiskExceptionConfiguration != null && {
      RiskExceptionConfiguration: se_RiskExceptionConfigurationType(input.RiskExceptionConfiguration, context),
    }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1SetUICustomizationRequest
 */
const se_SetUICustomizationRequest = (input: SetUICustomizationRequest, context: __SerdeContext): any => {
  return {
    ...(input.CSS != null && { CSS: input.CSS }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ImageFile != null && { ImageFile: context.base64Encoder(input.ImageFile) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1SetUserMFAPreferenceRequest
 */
const se_SetUserMFAPreferenceRequest = (input: SetUserMFAPreferenceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.SMSMfaSettings != null && { SMSMfaSettings: se_SMSMfaSettingsType(input.SMSMfaSettings, context) }),
    ...(input.SoftwareTokenMfaSettings != null && {
      SoftwareTokenMfaSettings: se_SoftwareTokenMfaSettingsType(input.SoftwareTokenMfaSettings, context),
    }),
  };
};

/**
 * serializeAws_json1_1SetUserPoolMfaConfigRequest
 */
const se_SetUserPoolMfaConfigRequest = (input: SetUserPoolMfaConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.MfaConfiguration != null && { MfaConfiguration: input.MfaConfiguration }),
    ...(input.SmsMfaConfiguration != null && {
      SmsMfaConfiguration: se_SmsMfaConfigType(input.SmsMfaConfiguration, context),
    }),
    ...(input.SoftwareTokenMfaConfiguration != null && {
      SoftwareTokenMfaConfiguration: se_SoftwareTokenMfaConfigType(input.SoftwareTokenMfaConfiguration, context),
    }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1SetUserSettingsRequest
 */
const se_SetUserSettingsRequest = (input: SetUserSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.MFAOptions != null && { MFAOptions: se_MFAOptionListType(input.MFAOptions, context) }),
  };
};

/**
 * serializeAws_json1_1SignUpRequest
 */
const se_SignUpRequest = (input: SignUpRequest, context: __SerdeContext): any => {
  return {
    ...(input.AnalyticsMetadata != null && {
      AnalyticsMetadata: se_AnalyticsMetadataType(input.AnalyticsMetadata, context),
    }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.SecretHash != null && { SecretHash: input.SecretHash }),
    ...(input.UserAttributes != null && { UserAttributes: se_AttributeListType(input.UserAttributes, context) }),
    ...(input.UserContextData != null && { UserContextData: se_UserContextDataType(input.UserContextData, context) }),
    ...(input.Username != null && { Username: input.Username }),
    ...(input.ValidationData != null && { ValidationData: se_AttributeListType(input.ValidationData, context) }),
  };
};

/**
 * serializeAws_json1_1SkippedIPRangeListType
 */
const se_SkippedIPRangeListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SmsConfigurationType
 */
const se_SmsConfigurationType = (input: SmsConfigurationType, context: __SerdeContext): any => {
  return {
    ...(input.ExternalId != null && { ExternalId: input.ExternalId }),
    ...(input.SnsCallerArn != null && { SnsCallerArn: input.SnsCallerArn }),
    ...(input.SnsRegion != null && { SnsRegion: input.SnsRegion }),
  };
};

/**
 * serializeAws_json1_1SmsMfaConfigType
 */
const se_SmsMfaConfigType = (input: SmsMfaConfigType, context: __SerdeContext): any => {
  return {
    ...(input.SmsAuthenticationMessage != null && { SmsAuthenticationMessage: input.SmsAuthenticationMessage }),
    ...(input.SmsConfiguration != null && {
      SmsConfiguration: se_SmsConfigurationType(input.SmsConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1SMSMfaSettingsType
 */
const se_SMSMfaSettingsType = (input: SMSMfaSettingsType, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.PreferredMfa != null && { PreferredMfa: input.PreferredMfa }),
  };
};

/**
 * serializeAws_json1_1SoftwareTokenMfaConfigType
 */
const se_SoftwareTokenMfaConfigType = (input: SoftwareTokenMfaConfigType, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

/**
 * serializeAws_json1_1SoftwareTokenMfaSettingsType
 */
const se_SoftwareTokenMfaSettingsType = (input: SoftwareTokenMfaSettingsType, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.PreferredMfa != null && { PreferredMfa: input.PreferredMfa }),
  };
};

/**
 * serializeAws_json1_1StartUserImportJobRequest
 */
const se_StartUserImportJobRequest = (input: StartUserImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1StopUserImportJobRequest
 */
const se_StopUserImportJobRequest = (input: StopUserImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.JobId != null && { JobId: input.JobId }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1StringAttributeConstraintsType
 */
const se_StringAttributeConstraintsType = (input: StringAttributeConstraintsType, context: __SerdeContext): any => {
  return {
    ...(input.MaxLength != null && { MaxLength: input.MaxLength }),
    ...(input.MinLength != null && { MinLength: input.MinLength }),
  };
};

/**
 * serializeAws_json1_1SupportedIdentityProvidersListType
 */
const se_SupportedIdentityProvidersListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_UserPoolTagsType(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TokenValidityUnitsType
 */
const se_TokenValidityUnitsType = (input: TokenValidityUnitsType, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.IdToken != null && { IdToken: input.IdToken }),
    ...(input.RefreshToken != null && { RefreshToken: input.RefreshToken }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_UserPoolTagsListType(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateAuthEventFeedbackRequest
 */
const se_UpdateAuthEventFeedbackRequest = (input: UpdateAuthEventFeedbackRequest, context: __SerdeContext): any => {
  return {
    ...(input.EventId != null && { EventId: input.EventId }),
    ...(input.FeedbackToken != null && { FeedbackToken: input.FeedbackToken }),
    ...(input.FeedbackValue != null && { FeedbackValue: input.FeedbackValue }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.Username != null && { Username: input.Username }),
  };
};

/**
 * serializeAws_json1_1UpdateDeviceStatusRequest
 */
const se_UpdateDeviceStatusRequest = (input: UpdateDeviceStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.DeviceKey != null && { DeviceKey: input.DeviceKey }),
    ...(input.DeviceRememberedStatus != null && { DeviceRememberedStatus: input.DeviceRememberedStatus }),
  };
};

/**
 * serializeAws_json1_1UpdateGroupRequest
 */
const se_UpdateGroupRequest = (input: UpdateGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.Precedence != null && { Precedence: input.Precedence }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1UpdateIdentityProviderRequest
 */
const se_UpdateIdentityProviderRequest = (input: UpdateIdentityProviderRequest, context: __SerdeContext): any => {
  return {
    ...(input.AttributeMapping != null && {
      AttributeMapping: se_AttributeMappingType(input.AttributeMapping, context),
    }),
    ...(input.IdpIdentifiers != null && { IdpIdentifiers: se_IdpIdentifiersListType(input.IdpIdentifiers, context) }),
    ...(input.ProviderDetails != null && { ProviderDetails: se_ProviderDetailsType(input.ProviderDetails, context) }),
    ...(input.ProviderName != null && { ProviderName: input.ProviderName }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1UpdateResourceServerRequest
 */
const se_UpdateResourceServerRequest = (input: UpdateResourceServerRequest, context: __SerdeContext): any => {
  return {
    ...(input.Identifier != null && { Identifier: input.Identifier }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Scopes != null && { Scopes: se_ResourceServerScopeListType(input.Scopes, context) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1UpdateUserAttributesRequest
 */
const se_UpdateUserAttributesRequest = (input: UpdateUserAttributesRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.ClientMetadata != null && { ClientMetadata: se_ClientMetadataType(input.ClientMetadata, context) }),
    ...(input.UserAttributes != null && { UserAttributes: se_AttributeListType(input.UserAttributes, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateUserPoolClientRequest
 */
const se_UpdateUserPoolClientRequest = (input: UpdateUserPoolClientRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessTokenValidity != null && { AccessTokenValidity: input.AccessTokenValidity }),
    ...(input.AllowedOAuthFlows != null && { AllowedOAuthFlows: se_OAuthFlowsType(input.AllowedOAuthFlows, context) }),
    ...(input.AllowedOAuthFlowsUserPoolClient != null && {
      AllowedOAuthFlowsUserPoolClient: input.AllowedOAuthFlowsUserPoolClient,
    }),
    ...(input.AllowedOAuthScopes != null && {
      AllowedOAuthScopes: se_ScopeListType(input.AllowedOAuthScopes, context),
    }),
    ...(input.AnalyticsConfiguration != null && {
      AnalyticsConfiguration: se_AnalyticsConfigurationType(input.AnalyticsConfiguration, context),
    }),
    ...(input.AuthSessionValidity != null && { AuthSessionValidity: input.AuthSessionValidity }),
    ...(input.CallbackURLs != null && { CallbackURLs: se_CallbackURLsListType(input.CallbackURLs, context) }),
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ClientName != null && { ClientName: input.ClientName }),
    ...(input.DefaultRedirectURI != null && { DefaultRedirectURI: input.DefaultRedirectURI }),
    ...(input.EnablePropagateAdditionalUserContextData != null && {
      EnablePropagateAdditionalUserContextData: input.EnablePropagateAdditionalUserContextData,
    }),
    ...(input.EnableTokenRevocation != null && { EnableTokenRevocation: input.EnableTokenRevocation }),
    ...(input.ExplicitAuthFlows != null && {
      ExplicitAuthFlows: se_ExplicitAuthFlowsListType(input.ExplicitAuthFlows, context),
    }),
    ...(input.IdTokenValidity != null && { IdTokenValidity: input.IdTokenValidity }),
    ...(input.LogoutURLs != null && { LogoutURLs: se_LogoutURLsListType(input.LogoutURLs, context) }),
    ...(input.PreventUserExistenceErrors != null && { PreventUserExistenceErrors: input.PreventUserExistenceErrors }),
    ...(input.ReadAttributes != null && { ReadAttributes: se_ClientPermissionListType(input.ReadAttributes, context) }),
    ...(input.RefreshTokenValidity != null && { RefreshTokenValidity: input.RefreshTokenValidity }),
    ...(input.SupportedIdentityProviders != null && {
      SupportedIdentityProviders: se_SupportedIdentityProvidersListType(input.SupportedIdentityProviders, context),
    }),
    ...(input.TokenValidityUnits != null && {
      TokenValidityUnits: se_TokenValidityUnitsType(input.TokenValidityUnits, context),
    }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.WriteAttributes != null && {
      WriteAttributes: se_ClientPermissionListType(input.WriteAttributes, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateUserPoolDomainRequest
 */
const se_UpdateUserPoolDomainRequest = (input: UpdateUserPoolDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.CustomDomainConfig != null && {
      CustomDomainConfig: se_CustomDomainConfigType(input.CustomDomainConfig, context),
    }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
  };
};

/**
 * serializeAws_json1_1UpdateUserPoolRequest
 */
const se_UpdateUserPoolRequest = (input: UpdateUserPoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccountRecoverySetting != null && {
      AccountRecoverySetting: se_AccountRecoverySettingType(input.AccountRecoverySetting, context),
    }),
    ...(input.AdminCreateUserConfig != null && {
      AdminCreateUserConfig: se_AdminCreateUserConfigType(input.AdminCreateUserConfig, context),
    }),
    ...(input.AutoVerifiedAttributes != null && {
      AutoVerifiedAttributes: se_VerifiedAttributesListType(input.AutoVerifiedAttributes, context),
    }),
    ...(input.DeletionProtection != null && { DeletionProtection: input.DeletionProtection }),
    ...(input.DeviceConfiguration != null && {
      DeviceConfiguration: se_DeviceConfigurationType(input.DeviceConfiguration, context),
    }),
    ...(input.EmailConfiguration != null && {
      EmailConfiguration: se_EmailConfigurationType(input.EmailConfiguration, context),
    }),
    ...(input.EmailVerificationMessage != null && { EmailVerificationMessage: input.EmailVerificationMessage }),
    ...(input.EmailVerificationSubject != null && { EmailVerificationSubject: input.EmailVerificationSubject }),
    ...(input.LambdaConfig != null && { LambdaConfig: se_LambdaConfigType(input.LambdaConfig, context) }),
    ...(input.MfaConfiguration != null && { MfaConfiguration: input.MfaConfiguration }),
    ...(input.Policies != null && { Policies: se_UserPoolPolicyType(input.Policies, context) }),
    ...(input.SmsAuthenticationMessage != null && { SmsAuthenticationMessage: input.SmsAuthenticationMessage }),
    ...(input.SmsConfiguration != null && {
      SmsConfiguration: se_SmsConfigurationType(input.SmsConfiguration, context),
    }),
    ...(input.SmsVerificationMessage != null && { SmsVerificationMessage: input.SmsVerificationMessage }),
    ...(input.UserAttributeUpdateSettings != null && {
      UserAttributeUpdateSettings: se_UserAttributeUpdateSettingsType(input.UserAttributeUpdateSettings, context),
    }),
    ...(input.UserPoolAddOns != null && { UserPoolAddOns: se_UserPoolAddOnsType(input.UserPoolAddOns, context) }),
    ...(input.UserPoolId != null && { UserPoolId: input.UserPoolId }),
    ...(input.UserPoolTags != null && { UserPoolTags: se_UserPoolTagsType(input.UserPoolTags, context) }),
    ...(input.VerificationMessageTemplate != null && {
      VerificationMessageTemplate: se_VerificationMessageTemplateType(input.VerificationMessageTemplate, context),
    }),
  };
};

/**
 * serializeAws_json1_1UserAttributeUpdateSettingsType
 */
const se_UserAttributeUpdateSettingsType = (input: UserAttributeUpdateSettingsType, context: __SerdeContext): any => {
  return {
    ...(input.AttributesRequireVerificationBeforeUpdate != null && {
      AttributesRequireVerificationBeforeUpdate: se_AttributesRequireVerificationBeforeUpdateType(
        input.AttributesRequireVerificationBeforeUpdate,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1UserContextDataType
 */
const se_UserContextDataType = (input: UserContextDataType, context: __SerdeContext): any => {
  return {
    ...(input.EncodedData != null && { EncodedData: input.EncodedData }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
  };
};

/**
 * serializeAws_json1_1UsernameAttributesListType
 */
const se_UsernameAttributesListType = (input: (UsernameAttributeType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UsernameConfigurationType
 */
const se_UsernameConfigurationType = (input: UsernameConfigurationType, context: __SerdeContext): any => {
  return {
    ...(input.CaseSensitive != null && { CaseSensitive: input.CaseSensitive }),
  };
};

/**
 * serializeAws_json1_1UserPoolAddOnsType
 */
const se_UserPoolAddOnsType = (input: UserPoolAddOnsType, context: __SerdeContext): any => {
  return {
    ...(input.AdvancedSecurityMode != null && { AdvancedSecurityMode: input.AdvancedSecurityMode }),
  };
};

/**
 * serializeAws_json1_1UserPoolPolicyType
 */
const se_UserPoolPolicyType = (input: UserPoolPolicyType, context: __SerdeContext): any => {
  return {
    ...(input.PasswordPolicy != null && { PasswordPolicy: se_PasswordPolicyType(input.PasswordPolicy, context) }),
  };
};

/**
 * serializeAws_json1_1UserPoolTagsListType
 */
const se_UserPoolTagsListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1UserPoolTagsType
 */
const se_UserPoolTagsType = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1VerificationMessageTemplateType
 */
const se_VerificationMessageTemplateType = (input: VerificationMessageTemplateType, context: __SerdeContext): any => {
  return {
    ...(input.DefaultEmailOption != null && { DefaultEmailOption: input.DefaultEmailOption }),
    ...(input.EmailMessage != null && { EmailMessage: input.EmailMessage }),
    ...(input.EmailMessageByLink != null && { EmailMessageByLink: input.EmailMessageByLink }),
    ...(input.EmailSubject != null && { EmailSubject: input.EmailSubject }),
    ...(input.EmailSubjectByLink != null && { EmailSubjectByLink: input.EmailSubjectByLink }),
    ...(input.SmsMessage != null && { SmsMessage: input.SmsMessage }),
  };
};

/**
 * serializeAws_json1_1VerifiedAttributesListType
 */
const se_VerifiedAttributesListType = (input: (VerifiedAttributeType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1VerifySoftwareTokenRequest
 */
const se_VerifySoftwareTokenRequest = (input: VerifySoftwareTokenRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.FriendlyDeviceName != null && { FriendlyDeviceName: input.FriendlyDeviceName }),
    ...(input.Session != null && { Session: input.Session }),
    ...(input.UserCode != null && { UserCode: input.UserCode }),
  };
};

/**
 * serializeAws_json1_1VerifyUserAttributeRequest
 */
const se_VerifyUserAttributeRequest = (input: VerifyUserAttributeRequest, context: __SerdeContext): any => {
  return {
    ...(input.AccessToken != null && { AccessToken: input.AccessToken }),
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.Code != null && { Code: input.Code }),
  };
};

/**
 * deserializeAws_json1_1AccountRecoverySettingType
 */
const de_AccountRecoverySettingType = (output: any, context: __SerdeContext): AccountRecoverySettingType => {
  return {
    RecoveryMechanisms:
      output.RecoveryMechanisms != null ? de_RecoveryMechanismsType(output.RecoveryMechanisms, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AccountTakeoverActionsType
 */
const de_AccountTakeoverActionsType = (output: any, context: __SerdeContext): AccountTakeoverActionsType => {
  return {
    HighAction: output.HighAction != null ? de_AccountTakeoverActionType(output.HighAction, context) : undefined,
    LowAction: output.LowAction != null ? de_AccountTakeoverActionType(output.LowAction, context) : undefined,
    MediumAction: output.MediumAction != null ? de_AccountTakeoverActionType(output.MediumAction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AccountTakeoverActionType
 */
const de_AccountTakeoverActionType = (output: any, context: __SerdeContext): AccountTakeoverActionType => {
  return {
    EventAction: __expectString(output.EventAction),
    Notify: __expectBoolean(output.Notify),
  } as any;
};

/**
 * deserializeAws_json1_1AccountTakeoverRiskConfigurationType
 */
const de_AccountTakeoverRiskConfigurationType = (
  output: any,
  context: __SerdeContext
): AccountTakeoverRiskConfigurationType => {
  return {
    Actions: output.Actions != null ? de_AccountTakeoverActionsType(output.Actions, context) : undefined,
    NotifyConfiguration:
      output.NotifyConfiguration != null ? de_NotifyConfigurationType(output.NotifyConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AddCustomAttributesResponse
 */
const de_AddCustomAttributesResponse = (output: any, context: __SerdeContext): AddCustomAttributesResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminConfirmSignUpResponse
 */
const de_AdminConfirmSignUpResponse = (output: any, context: __SerdeContext): AdminConfirmSignUpResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminCreateUserConfigType
 */
const de_AdminCreateUserConfigType = (output: any, context: __SerdeContext): AdminCreateUserConfigType => {
  return {
    AllowAdminCreateUserOnly: __expectBoolean(output.AllowAdminCreateUserOnly),
    InviteMessageTemplate:
      output.InviteMessageTemplate != null ? de_MessageTemplateType(output.InviteMessageTemplate, context) : undefined,
    UnusedAccountValidityDays: __expectInt32(output.UnusedAccountValidityDays),
  } as any;
};

/**
 * deserializeAws_json1_1AdminCreateUserResponse
 */
const de_AdminCreateUserResponse = (output: any, context: __SerdeContext): AdminCreateUserResponse => {
  return {
    User: output.User != null ? de_UserType(output.User, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AdminDeleteUserAttributesResponse
 */
const de_AdminDeleteUserAttributesResponse = (
  output: any,
  context: __SerdeContext
): AdminDeleteUserAttributesResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminDisableProviderForUserResponse
 */
const de_AdminDisableProviderForUserResponse = (
  output: any,
  context: __SerdeContext
): AdminDisableProviderForUserResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminDisableUserResponse
 */
const de_AdminDisableUserResponse = (output: any, context: __SerdeContext): AdminDisableUserResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminEnableUserResponse
 */
const de_AdminEnableUserResponse = (output: any, context: __SerdeContext): AdminEnableUserResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminGetDeviceResponse
 */
const de_AdminGetDeviceResponse = (output: any, context: __SerdeContext): AdminGetDeviceResponse => {
  return {
    Device: output.Device != null ? de_DeviceType(output.Device, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AdminGetUserResponse
 */
const de_AdminGetUserResponse = (output: any, context: __SerdeContext): AdminGetUserResponse => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    MFAOptions: output.MFAOptions != null ? de_MFAOptionListType(output.MFAOptions, context) : undefined,
    PreferredMfaSetting: __expectString(output.PreferredMfaSetting),
    UserAttributes: output.UserAttributes != null ? de_AttributeListType(output.UserAttributes, context) : undefined,
    UserCreateDate:
      output.UserCreateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UserCreateDate)))
        : undefined,
    UserLastModifiedDate:
      output.UserLastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UserLastModifiedDate)))
        : undefined,
    UserMFASettingList:
      output.UserMFASettingList != null ? de_UserMFASettingListType(output.UserMFASettingList, context) : undefined,
    UserStatus: __expectString(output.UserStatus),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1AdminInitiateAuthResponse
 */
const de_AdminInitiateAuthResponse = (output: any, context: __SerdeContext): AdminInitiateAuthResponse => {
  return {
    AuthenticationResult:
      output.AuthenticationResult != null
        ? de_AuthenticationResultType(output.AuthenticationResult, context)
        : undefined,
    ChallengeName: __expectString(output.ChallengeName),
    ChallengeParameters:
      output.ChallengeParameters != null ? de_ChallengeParametersType(output.ChallengeParameters, context) : undefined,
    Session: __expectString(output.Session),
  } as any;
};

/**
 * deserializeAws_json1_1AdminLinkProviderForUserResponse
 */
const de_AdminLinkProviderForUserResponse = (
  output: any,
  context: __SerdeContext
): AdminLinkProviderForUserResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminListDevicesResponse
 */
const de_AdminListDevicesResponse = (output: any, context: __SerdeContext): AdminListDevicesResponse => {
  return {
    Devices: output.Devices != null ? de_DeviceListType(output.Devices, context) : undefined,
    PaginationToken: __expectString(output.PaginationToken),
  } as any;
};

/**
 * deserializeAws_json1_1AdminListGroupsForUserResponse
 */
const de_AdminListGroupsForUserResponse = (output: any, context: __SerdeContext): AdminListGroupsForUserResponse => {
  return {
    Groups: output.Groups != null ? de_GroupListType(output.Groups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1AdminListUserAuthEventsResponse
 */
const de_AdminListUserAuthEventsResponse = (output: any, context: __SerdeContext): AdminListUserAuthEventsResponse => {
  return {
    AuthEvents: output.AuthEvents != null ? de_AuthEventsType(output.AuthEvents, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1AdminResetUserPasswordResponse
 */
const de_AdminResetUserPasswordResponse = (output: any, context: __SerdeContext): AdminResetUserPasswordResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminRespondToAuthChallengeResponse
 */
const de_AdminRespondToAuthChallengeResponse = (
  output: any,
  context: __SerdeContext
): AdminRespondToAuthChallengeResponse => {
  return {
    AuthenticationResult:
      output.AuthenticationResult != null
        ? de_AuthenticationResultType(output.AuthenticationResult, context)
        : undefined,
    ChallengeName: __expectString(output.ChallengeName),
    ChallengeParameters:
      output.ChallengeParameters != null ? de_ChallengeParametersType(output.ChallengeParameters, context) : undefined,
    Session: __expectString(output.Session),
  } as any;
};

/**
 * deserializeAws_json1_1AdminSetUserMFAPreferenceResponse
 */
const de_AdminSetUserMFAPreferenceResponse = (
  output: any,
  context: __SerdeContext
): AdminSetUserMFAPreferenceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminSetUserPasswordResponse
 */
const de_AdminSetUserPasswordResponse = (output: any, context: __SerdeContext): AdminSetUserPasswordResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminSetUserSettingsResponse
 */
const de_AdminSetUserSettingsResponse = (output: any, context: __SerdeContext): AdminSetUserSettingsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminUpdateAuthEventFeedbackResponse
 */
const de_AdminUpdateAuthEventFeedbackResponse = (
  output: any,
  context: __SerdeContext
): AdminUpdateAuthEventFeedbackResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminUpdateDeviceStatusResponse
 */
const de_AdminUpdateDeviceStatusResponse = (output: any, context: __SerdeContext): AdminUpdateDeviceStatusResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminUpdateUserAttributesResponse
 */
const de_AdminUpdateUserAttributesResponse = (
  output: any,
  context: __SerdeContext
): AdminUpdateUserAttributesResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AdminUserGlobalSignOutResponse
 */
const de_AdminUserGlobalSignOutResponse = (output: any, context: __SerdeContext): AdminUserGlobalSignOutResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1AliasAttributesListType
 */
const de_AliasAttributesListType = (output: any, context: __SerdeContext): (AliasAttributeType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AliasExistsException
 */
const de_AliasExistsException = (output: any, context: __SerdeContext): AliasExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1AnalyticsConfigurationType
 */
const de_AnalyticsConfigurationType = (output: any, context: __SerdeContext): AnalyticsConfigurationType => {
  return {
    ApplicationArn: __expectString(output.ApplicationArn),
    ApplicationId: __expectString(output.ApplicationId),
    ExternalId: __expectString(output.ExternalId),
    RoleArn: __expectString(output.RoleArn),
    UserDataShared: __expectBoolean(output.UserDataShared),
  } as any;
};

/**
 * deserializeAws_json1_1AssociateSoftwareTokenResponse
 */
const de_AssociateSoftwareTokenResponse = (output: any, context: __SerdeContext): AssociateSoftwareTokenResponse => {
  return {
    SecretCode: __expectString(output.SecretCode),
    Session: __expectString(output.Session),
  } as any;
};

/**
 * deserializeAws_json1_1AttributeListType
 */
const de_AttributeListType = (output: any, context: __SerdeContext): AttributeType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttributeType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttributeMappingType
 */
const de_AttributeMappingType = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1AttributesRequireVerificationBeforeUpdateType
 */
const de_AttributesRequireVerificationBeforeUpdateType = (
  output: any,
  context: __SerdeContext
): (VerifiedAttributeType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttributeType
 */
const de_AttributeType = (output: any, context: __SerdeContext): AttributeType => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1AuthenticationResultType
 */
const de_AuthenticationResultType = (output: any, context: __SerdeContext): AuthenticationResultType => {
  return {
    AccessToken: __expectString(output.AccessToken),
    ExpiresIn: __expectInt32(output.ExpiresIn),
    IdToken: __expectString(output.IdToken),
    NewDeviceMetadata:
      output.NewDeviceMetadata != null ? de_NewDeviceMetadataType(output.NewDeviceMetadata, context) : undefined,
    RefreshToken: __expectString(output.RefreshToken),
    TokenType: __expectString(output.TokenType),
  } as any;
};

/**
 * deserializeAws_json1_1AuthEventsType
 */
const de_AuthEventsType = (output: any, context: __SerdeContext): AuthEventType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AuthEventType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AuthEventType
 */
const de_AuthEventType = (output: any, context: __SerdeContext): AuthEventType => {
  return {
    ChallengeResponses:
      output.ChallengeResponses != null ? de_ChallengeResponseListType(output.ChallengeResponses, context) : undefined,
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    EventContextData:
      output.EventContextData != null ? de_EventContextDataType(output.EventContextData, context) : undefined,
    EventFeedback: output.EventFeedback != null ? de_EventFeedbackType(output.EventFeedback, context) : undefined,
    EventId: __expectString(output.EventId),
    EventResponse: __expectString(output.EventResponse),
    EventRisk: output.EventRisk != null ? de_EventRiskType(output.EventRisk, context) : undefined,
    EventType: __expectString(output.EventType),
  } as any;
};

/**
 * deserializeAws_json1_1BlockedIPRangeListType
 */
const de_BlockedIPRangeListType = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CallbackURLsListType
 */
const de_CallbackURLsListType = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ChallengeParametersType
 */
const de_ChallengeParametersType = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ChallengeResponseListType
 */
const de_ChallengeResponseListType = (output: any, context: __SerdeContext): ChallengeResponseType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ChallengeResponseType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ChallengeResponseType
 */
const de_ChallengeResponseType = (output: any, context: __SerdeContext): ChallengeResponseType => {
  return {
    ChallengeName: __expectString(output.ChallengeName),
    ChallengeResponse: __expectString(output.ChallengeResponse),
  } as any;
};

/**
 * deserializeAws_json1_1ChangePasswordResponse
 */
const de_ChangePasswordResponse = (output: any, context: __SerdeContext): ChangePasswordResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ClientPermissionListType
 */
const de_ClientPermissionListType = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CodeDeliveryDetailsListType
 */
const de_CodeDeliveryDetailsListType = (output: any, context: __SerdeContext): CodeDeliveryDetailsType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CodeDeliveryDetailsType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CodeDeliveryDetailsType
 */
const de_CodeDeliveryDetailsType = (output: any, context: __SerdeContext): CodeDeliveryDetailsType => {
  return {
    AttributeName: __expectString(output.AttributeName),
    DeliveryMedium: __expectString(output.DeliveryMedium),
    Destination: __expectString(output.Destination),
  } as any;
};

/**
 * deserializeAws_json1_1CodeDeliveryFailureException
 */
const de_CodeDeliveryFailureException = (output: any, context: __SerdeContext): CodeDeliveryFailureException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CodeMismatchException
 */
const de_CodeMismatchException = (output: any, context: __SerdeContext): CodeMismatchException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1CompromisedCredentialsActionsType
 */
const de_CompromisedCredentialsActionsType = (
  output: any,
  context: __SerdeContext
): CompromisedCredentialsActionsType => {
  return {
    EventAction: __expectString(output.EventAction),
  } as any;
};

/**
 * deserializeAws_json1_1CompromisedCredentialsRiskConfigurationType
 */
const de_CompromisedCredentialsRiskConfigurationType = (
  output: any,
  context: __SerdeContext
): CompromisedCredentialsRiskConfigurationType => {
  return {
    Actions: output.Actions != null ? de_CompromisedCredentialsActionsType(output.Actions, context) : undefined,
    EventFilter: output.EventFilter != null ? de_EventFiltersType(output.EventFilter, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ConfirmDeviceResponse
 */
const de_ConfirmDeviceResponse = (output: any, context: __SerdeContext): ConfirmDeviceResponse => {
  return {
    UserConfirmationNecessary: __expectBoolean(output.UserConfirmationNecessary),
  } as any;
};

/**
 * deserializeAws_json1_1ConfirmForgotPasswordResponse
 */
const de_ConfirmForgotPasswordResponse = (output: any, context: __SerdeContext): ConfirmForgotPasswordResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ConfirmSignUpResponse
 */
const de_ConfirmSignUpResponse = (output: any, context: __SerdeContext): ConfirmSignUpResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1CreateGroupResponse
 */
const de_CreateGroupResponse = (output: any, context: __SerdeContext): CreateGroupResponse => {
  return {
    Group: output.Group != null ? de_GroupType(output.Group, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateIdentityProviderResponse
 */
const de_CreateIdentityProviderResponse = (output: any, context: __SerdeContext): CreateIdentityProviderResponse => {
  return {
    IdentityProvider:
      output.IdentityProvider != null ? de_IdentityProviderType(output.IdentityProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateResourceServerResponse
 */
const de_CreateResourceServerResponse = (output: any, context: __SerdeContext): CreateResourceServerResponse => {
  return {
    ResourceServer: output.ResourceServer != null ? de_ResourceServerType(output.ResourceServer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserImportJobResponse
 */
const de_CreateUserImportJobResponse = (output: any, context: __SerdeContext): CreateUserImportJobResponse => {
  return {
    UserImportJob: output.UserImportJob != null ? de_UserImportJobType(output.UserImportJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserPoolClientResponse
 */
const de_CreateUserPoolClientResponse = (output: any, context: __SerdeContext): CreateUserPoolClientResponse => {
  return {
    UserPoolClient: output.UserPoolClient != null ? de_UserPoolClientType(output.UserPoolClient, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserPoolDomainResponse
 */
const de_CreateUserPoolDomainResponse = (output: any, context: __SerdeContext): CreateUserPoolDomainResponse => {
  return {
    CloudFrontDomain: __expectString(output.CloudFrontDomain),
  } as any;
};

/**
 * deserializeAws_json1_1CreateUserPoolResponse
 */
const de_CreateUserPoolResponse = (output: any, context: __SerdeContext): CreateUserPoolResponse => {
  return {
    UserPool: output.UserPool != null ? de_UserPoolType(output.UserPool, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomDomainConfigType
 */
const de_CustomDomainConfigType = (output: any, context: __SerdeContext): CustomDomainConfigType => {
  return {
    CertificateArn: __expectString(output.CertificateArn),
  } as any;
};

/**
 * deserializeAws_json1_1CustomEmailLambdaVersionConfigType
 */
const de_CustomEmailLambdaVersionConfigType = (
  output: any,
  context: __SerdeContext
): CustomEmailLambdaVersionConfigType => {
  return {
    LambdaArn: __expectString(output.LambdaArn),
    LambdaVersion: __expectString(output.LambdaVersion),
  } as any;
};

/**
 * deserializeAws_json1_1CustomSMSLambdaVersionConfigType
 */
const de_CustomSMSLambdaVersionConfigType = (
  output: any,
  context: __SerdeContext
): CustomSMSLambdaVersionConfigType => {
  return {
    LambdaArn: __expectString(output.LambdaArn),
    LambdaVersion: __expectString(output.LambdaVersion),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteUserAttributesResponse
 */
const de_DeleteUserAttributesResponse = (output: any, context: __SerdeContext): DeleteUserAttributesResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteUserPoolDomainResponse
 */
const de_DeleteUserPoolDomainResponse = (output: any, context: __SerdeContext): DeleteUserPoolDomainResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DescribeIdentityProviderResponse
 */
const de_DescribeIdentityProviderResponse = (
  output: any,
  context: __SerdeContext
): DescribeIdentityProviderResponse => {
  return {
    IdentityProvider:
      output.IdentityProvider != null ? de_IdentityProviderType(output.IdentityProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeResourceServerResponse
 */
const de_DescribeResourceServerResponse = (output: any, context: __SerdeContext): DescribeResourceServerResponse => {
  return {
    ResourceServer: output.ResourceServer != null ? de_ResourceServerType(output.ResourceServer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeRiskConfigurationResponse
 */
const de_DescribeRiskConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeRiskConfigurationResponse => {
  return {
    RiskConfiguration:
      output.RiskConfiguration != null ? de_RiskConfigurationType(output.RiskConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUserImportJobResponse
 */
const de_DescribeUserImportJobResponse = (output: any, context: __SerdeContext): DescribeUserImportJobResponse => {
  return {
    UserImportJob: output.UserImportJob != null ? de_UserImportJobType(output.UserImportJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUserPoolClientResponse
 */
const de_DescribeUserPoolClientResponse = (output: any, context: __SerdeContext): DescribeUserPoolClientResponse => {
  return {
    UserPoolClient: output.UserPoolClient != null ? de_UserPoolClientType(output.UserPoolClient, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUserPoolDomainResponse
 */
const de_DescribeUserPoolDomainResponse = (output: any, context: __SerdeContext): DescribeUserPoolDomainResponse => {
  return {
    DomainDescription:
      output.DomainDescription != null ? de_DomainDescriptionType(output.DomainDescription, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeUserPoolResponse
 */
const de_DescribeUserPoolResponse = (output: any, context: __SerdeContext): DescribeUserPoolResponse => {
  return {
    UserPool: output.UserPool != null ? de_UserPoolType(output.UserPool, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeviceConfigurationType
 */
const de_DeviceConfigurationType = (output: any, context: __SerdeContext): DeviceConfigurationType => {
  return {
    ChallengeRequiredOnNewDevice: __expectBoolean(output.ChallengeRequiredOnNewDevice),
    DeviceOnlyRememberedOnUserPrompt: __expectBoolean(output.DeviceOnlyRememberedOnUserPrompt),
  } as any;
};

/**
 * deserializeAws_json1_1DeviceListType
 */
const de_DeviceListType = (output: any, context: __SerdeContext): DeviceType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeviceType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceType
 */
const de_DeviceType = (output: any, context: __SerdeContext): DeviceType => {
  return {
    DeviceAttributes:
      output.DeviceAttributes != null ? de_AttributeListType(output.DeviceAttributes, context) : undefined,
    DeviceCreateDate:
      output.DeviceCreateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeviceCreateDate)))
        : undefined,
    DeviceKey: __expectString(output.DeviceKey),
    DeviceLastAuthenticatedDate:
      output.DeviceLastAuthenticatedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeviceLastAuthenticatedDate)))
        : undefined,
    DeviceLastModifiedDate:
      output.DeviceLastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeviceLastModifiedDate)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DomainDescriptionType
 */
const de_DomainDescriptionType = (output: any, context: __SerdeContext): DomainDescriptionType => {
  return {
    AWSAccountId: __expectString(output.AWSAccountId),
    CloudFrontDistribution: __expectString(output.CloudFrontDistribution),
    CustomDomainConfig:
      output.CustomDomainConfig != null ? de_CustomDomainConfigType(output.CustomDomainConfig, context) : undefined,
    Domain: __expectString(output.Domain),
    S3Bucket: __expectString(output.S3Bucket),
    Status: __expectString(output.Status),
    UserPoolId: __expectString(output.UserPoolId),
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1DuplicateProviderException
 */
const de_DuplicateProviderException = (output: any, context: __SerdeContext): DuplicateProviderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1EmailConfigurationType
 */
const de_EmailConfigurationType = (output: any, context: __SerdeContext): EmailConfigurationType => {
  return {
    ConfigurationSet: __expectString(output.ConfigurationSet),
    EmailSendingAccount: __expectString(output.EmailSendingAccount),
    From: __expectString(output.From),
    ReplyToEmailAddress: __expectString(output.ReplyToEmailAddress),
    SourceArn: __expectString(output.SourceArn),
  } as any;
};

/**
 * deserializeAws_json1_1EnableSoftwareTokenMFAException
 */
const de_EnableSoftwareTokenMFAException = (output: any, context: __SerdeContext): EnableSoftwareTokenMFAException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1EventContextDataType
 */
const de_EventContextDataType = (output: any, context: __SerdeContext): EventContextDataType => {
  return {
    City: __expectString(output.City),
    Country: __expectString(output.Country),
    DeviceName: __expectString(output.DeviceName),
    IpAddress: __expectString(output.IpAddress),
    Timezone: __expectString(output.Timezone),
  } as any;
};

/**
 * deserializeAws_json1_1EventFeedbackType
 */
const de_EventFeedbackType = (output: any, context: __SerdeContext): EventFeedbackType => {
  return {
    FeedbackDate:
      output.FeedbackDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FeedbackDate)))
        : undefined,
    FeedbackValue: __expectString(output.FeedbackValue),
    Provider: __expectString(output.Provider),
  } as any;
};

/**
 * deserializeAws_json1_1EventFiltersType
 */
const de_EventFiltersType = (output: any, context: __SerdeContext): (EventFilterType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventRiskType
 */
const de_EventRiskType = (output: any, context: __SerdeContext): EventRiskType => {
  return {
    CompromisedCredentialsDetected: __expectBoolean(output.CompromisedCredentialsDetected),
    RiskDecision: __expectString(output.RiskDecision),
    RiskLevel: __expectString(output.RiskLevel),
  } as any;
};

/**
 * deserializeAws_json1_1ExpiredCodeException
 */
const de_ExpiredCodeException = (output: any, context: __SerdeContext): ExpiredCodeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ExplicitAuthFlowsListType
 */
const de_ExplicitAuthFlowsListType = (output: any, context: __SerdeContext): (ExplicitAuthFlowsType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ForbiddenException
 */
const de_ForbiddenException = (output: any, context: __SerdeContext): ForbiddenException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ForgotPasswordResponse
 */
const de_ForgotPasswordResponse = (output: any, context: __SerdeContext): ForgotPasswordResponse => {
  return {
    CodeDeliveryDetails:
      output.CodeDeliveryDetails != null ? de_CodeDeliveryDetailsType(output.CodeDeliveryDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetCSVHeaderResponse
 */
const de_GetCSVHeaderResponse = (output: any, context: __SerdeContext): GetCSVHeaderResponse => {
  return {
    CSVHeader: output.CSVHeader != null ? de_ListOfStringTypes(output.CSVHeader, context) : undefined,
    UserPoolId: __expectString(output.UserPoolId),
  } as any;
};

/**
 * deserializeAws_json1_1GetDeviceResponse
 */
const de_GetDeviceResponse = (output: any, context: __SerdeContext): GetDeviceResponse => {
  return {
    Device: output.Device != null ? de_DeviceType(output.Device, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetGroupResponse
 */
const de_GetGroupResponse = (output: any, context: __SerdeContext): GetGroupResponse => {
  return {
    Group: output.Group != null ? de_GroupType(output.Group, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetIdentityProviderByIdentifierResponse
 */
const de_GetIdentityProviderByIdentifierResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityProviderByIdentifierResponse => {
  return {
    IdentityProvider:
      output.IdentityProvider != null ? de_IdentityProviderType(output.IdentityProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSigningCertificateResponse
 */
const de_GetSigningCertificateResponse = (output: any, context: __SerdeContext): GetSigningCertificateResponse => {
  return {
    Certificate: __expectString(output.Certificate),
  } as any;
};

/**
 * deserializeAws_json1_1GetUICustomizationResponse
 */
const de_GetUICustomizationResponse = (output: any, context: __SerdeContext): GetUICustomizationResponse => {
  return {
    UICustomization:
      output.UICustomization != null ? de_UICustomizationType(output.UICustomization, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetUserAttributeVerificationCodeResponse
 */
const de_GetUserAttributeVerificationCodeResponse = (
  output: any,
  context: __SerdeContext
): GetUserAttributeVerificationCodeResponse => {
  return {
    CodeDeliveryDetails:
      output.CodeDeliveryDetails != null ? de_CodeDeliveryDetailsType(output.CodeDeliveryDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetUserPoolMfaConfigResponse
 */
const de_GetUserPoolMfaConfigResponse = (output: any, context: __SerdeContext): GetUserPoolMfaConfigResponse => {
  return {
    MfaConfiguration: __expectString(output.MfaConfiguration),
    SmsMfaConfiguration:
      output.SmsMfaConfiguration != null ? de_SmsMfaConfigType(output.SmsMfaConfiguration, context) : undefined,
    SoftwareTokenMfaConfiguration:
      output.SoftwareTokenMfaConfiguration != null
        ? de_SoftwareTokenMfaConfigType(output.SoftwareTokenMfaConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetUserResponse
 */
const de_GetUserResponse = (output: any, context: __SerdeContext): GetUserResponse => {
  return {
    MFAOptions: output.MFAOptions != null ? de_MFAOptionListType(output.MFAOptions, context) : undefined,
    PreferredMfaSetting: __expectString(output.PreferredMfaSetting),
    UserAttributes: output.UserAttributes != null ? de_AttributeListType(output.UserAttributes, context) : undefined,
    UserMFASettingList:
      output.UserMFASettingList != null ? de_UserMFASettingListType(output.UserMFASettingList, context) : undefined,
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1GlobalSignOutResponse
 */
const de_GlobalSignOutResponse = (output: any, context: __SerdeContext): GlobalSignOutResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1GroupExistsException
 */
const de_GroupExistsException = (output: any, context: __SerdeContext): GroupExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1GroupListType
 */
const de_GroupListType = (output: any, context: __SerdeContext): GroupType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroupType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GroupType
 */
const de_GroupType = (output: any, context: __SerdeContext): GroupType => {
  return {
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    Description: __expectString(output.Description),
    GroupName: __expectString(output.GroupName),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    Precedence: __expectInt32(output.Precedence),
    RoleArn: __expectString(output.RoleArn),
    UserPoolId: __expectString(output.UserPoolId),
  } as any;
};

/**
 * deserializeAws_json1_1IdentityProviderType
 */
const de_IdentityProviderType = (output: any, context: __SerdeContext): IdentityProviderType => {
  return {
    AttributeMapping:
      output.AttributeMapping != null ? de_AttributeMappingType(output.AttributeMapping, context) : undefined,
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    IdpIdentifiers:
      output.IdpIdentifiers != null ? de_IdpIdentifiersListType(output.IdpIdentifiers, context) : undefined,
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    ProviderDetails:
      output.ProviderDetails != null ? de_ProviderDetailsType(output.ProviderDetails, context) : undefined,
    ProviderName: __expectString(output.ProviderName),
    ProviderType: __expectString(output.ProviderType),
    UserPoolId: __expectString(output.UserPoolId),
  } as any;
};

/**
 * deserializeAws_json1_1IdpIdentifiersListType
 */
const de_IdpIdentifiersListType = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InitiateAuthResponse
 */
const de_InitiateAuthResponse = (output: any, context: __SerdeContext): InitiateAuthResponse => {
  return {
    AuthenticationResult:
      output.AuthenticationResult != null
        ? de_AuthenticationResultType(output.AuthenticationResult, context)
        : undefined,
    ChallengeName: __expectString(output.ChallengeName),
    ChallengeParameters:
      output.ChallengeParameters != null ? de_ChallengeParametersType(output.ChallengeParameters, context) : undefined,
    Session: __expectString(output.Session),
  } as any;
};

/**
 * deserializeAws_json1_1InternalErrorException
 */
const de_InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidEmailRoleAccessPolicyException
 */
const de_InvalidEmailRoleAccessPolicyException = (
  output: any,
  context: __SerdeContext
): InvalidEmailRoleAccessPolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidLambdaResponseException
 */
const de_InvalidLambdaResponseException = (output: any, context: __SerdeContext): InvalidLambdaResponseException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOAuthFlowException
 */
const de_InvalidOAuthFlowException = (output: any, context: __SerdeContext): InvalidOAuthFlowException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPasswordException
 */
const de_InvalidPasswordException = (output: any, context: __SerdeContext): InvalidPasswordException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSmsRoleAccessPolicyException
 */
const de_InvalidSmsRoleAccessPolicyException = (
  output: any,
  context: __SerdeContext
): InvalidSmsRoleAccessPolicyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSmsRoleTrustRelationshipException
 */
const de_InvalidSmsRoleTrustRelationshipException = (
  output: any,
  context: __SerdeContext
): InvalidSmsRoleTrustRelationshipException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidUserPoolConfigurationException
 */
const de_InvalidUserPoolConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidUserPoolConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LambdaConfigType
 */
const de_LambdaConfigType = (output: any, context: __SerdeContext): LambdaConfigType => {
  return {
    CreateAuthChallenge: __expectString(output.CreateAuthChallenge),
    CustomEmailSender:
      output.CustomEmailSender != null
        ? de_CustomEmailLambdaVersionConfigType(output.CustomEmailSender, context)
        : undefined,
    CustomMessage: __expectString(output.CustomMessage),
    CustomSMSSender:
      output.CustomSMSSender != null ? de_CustomSMSLambdaVersionConfigType(output.CustomSMSSender, context) : undefined,
    DefineAuthChallenge: __expectString(output.DefineAuthChallenge),
    KMSKeyID: __expectString(output.KMSKeyID),
    PostAuthentication: __expectString(output.PostAuthentication),
    PostConfirmation: __expectString(output.PostConfirmation),
    PreAuthentication: __expectString(output.PreAuthentication),
    PreSignUp: __expectString(output.PreSignUp),
    PreTokenGeneration: __expectString(output.PreTokenGeneration),
    UserMigration: __expectString(output.UserMigration),
    VerifyAuthChallengeResponse: __expectString(output.VerifyAuthChallengeResponse),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListDevicesResponse
 */
const de_ListDevicesResponse = (output: any, context: __SerdeContext): ListDevicesResponse => {
  return {
    Devices: output.Devices != null ? de_DeviceListType(output.Devices, context) : undefined,
    PaginationToken: __expectString(output.PaginationToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListGroupsResponse
 */
const de_ListGroupsResponse = (output: any, context: __SerdeContext): ListGroupsResponse => {
  return {
    Groups: output.Groups != null ? de_GroupListType(output.Groups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListIdentityProvidersResponse
 */
const de_ListIdentityProvidersResponse = (output: any, context: __SerdeContext): ListIdentityProvidersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Providers: output.Providers != null ? de_ProvidersListType(output.Providers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListOfStringTypes
 */
const de_ListOfStringTypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ListResourceServersResponse
 */
const de_ListResourceServersResponse = (output: any, context: __SerdeContext): ListResourceServersResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ResourceServers:
      output.ResourceServers != null ? de_ResourceServersListType(output.ResourceServers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_UserPoolTagsType(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUserImportJobsResponse
 */
const de_ListUserImportJobsResponse = (output: any, context: __SerdeContext): ListUserImportJobsResponse => {
  return {
    PaginationToken: __expectString(output.PaginationToken),
    UserImportJobs:
      output.UserImportJobs != null ? de_UserImportJobsListType(output.UserImportJobs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUserPoolClientsResponse
 */
const de_ListUserPoolClientsResponse = (output: any, context: __SerdeContext): ListUserPoolClientsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    UserPoolClients:
      output.UserPoolClients != null ? de_UserPoolClientListType(output.UserPoolClients, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUserPoolsResponse
 */
const de_ListUserPoolsResponse = (output: any, context: __SerdeContext): ListUserPoolsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    UserPools: output.UserPools != null ? de_UserPoolListType(output.UserPools, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUsersInGroupResponse
 */
const de_ListUsersInGroupResponse = (output: any, context: __SerdeContext): ListUsersInGroupResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Users: output.Users != null ? de_UsersListType(output.Users, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUsersResponse
 */
const de_ListUsersResponse = (output: any, context: __SerdeContext): ListUsersResponse => {
  return {
    PaginationToken: __expectString(output.PaginationToken),
    Users: output.Users != null ? de_UsersListType(output.Users, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LogoutURLsListType
 */
const de_LogoutURLsListType = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MessageTemplateType
 */
const de_MessageTemplateType = (output: any, context: __SerdeContext): MessageTemplateType => {
  return {
    EmailMessage: __expectString(output.EmailMessage),
    EmailSubject: __expectString(output.EmailSubject),
    SMSMessage: __expectString(output.SMSMessage),
  } as any;
};

/**
 * deserializeAws_json1_1MFAMethodNotFoundException
 */
const de_MFAMethodNotFoundException = (output: any, context: __SerdeContext): MFAMethodNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1MFAOptionListType
 */
const de_MFAOptionListType = (output: any, context: __SerdeContext): MFAOptionType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MFAOptionType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MFAOptionType
 */
const de_MFAOptionType = (output: any, context: __SerdeContext): MFAOptionType => {
  return {
    AttributeName: __expectString(output.AttributeName),
    DeliveryMedium: __expectString(output.DeliveryMedium),
  } as any;
};

/**
 * deserializeAws_json1_1NewDeviceMetadataType
 */
const de_NewDeviceMetadataType = (output: any, context: __SerdeContext): NewDeviceMetadataType => {
  return {
    DeviceGroupKey: __expectString(output.DeviceGroupKey),
    DeviceKey: __expectString(output.DeviceKey),
  } as any;
};

/**
 * deserializeAws_json1_1NotAuthorizedException
 */
const de_NotAuthorizedException = (output: any, context: __SerdeContext): NotAuthorizedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NotifyConfigurationType
 */
const de_NotifyConfigurationType = (output: any, context: __SerdeContext): NotifyConfigurationType => {
  return {
    BlockEmail: output.BlockEmail != null ? de_NotifyEmailType(output.BlockEmail, context) : undefined,
    From: __expectString(output.From),
    MfaEmail: output.MfaEmail != null ? de_NotifyEmailType(output.MfaEmail, context) : undefined,
    NoActionEmail: output.NoActionEmail != null ? de_NotifyEmailType(output.NoActionEmail, context) : undefined,
    ReplyTo: __expectString(output.ReplyTo),
    SourceArn: __expectString(output.SourceArn),
  } as any;
};

/**
 * deserializeAws_json1_1NotifyEmailType
 */
const de_NotifyEmailType = (output: any, context: __SerdeContext): NotifyEmailType => {
  return {
    HtmlBody: __expectString(output.HtmlBody),
    Subject: __expectString(output.Subject),
    TextBody: __expectString(output.TextBody),
  } as any;
};

/**
 * deserializeAws_json1_1NumberAttributeConstraintsType
 */
const de_NumberAttributeConstraintsType = (output: any, context: __SerdeContext): NumberAttributeConstraintsType => {
  return {
    MaxValue: __expectString(output.MaxValue),
    MinValue: __expectString(output.MinValue),
  } as any;
};

/**
 * deserializeAws_json1_1OAuthFlowsType
 */
const de_OAuthFlowsType = (output: any, context: __SerdeContext): (OAuthFlowType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PasswordPolicyType
 */
const de_PasswordPolicyType = (output: any, context: __SerdeContext): PasswordPolicyType => {
  return {
    MinimumLength: __expectInt32(output.MinimumLength),
    RequireLowercase: __expectBoolean(output.RequireLowercase),
    RequireNumbers: __expectBoolean(output.RequireNumbers),
    RequireSymbols: __expectBoolean(output.RequireSymbols),
    RequireUppercase: __expectBoolean(output.RequireUppercase),
    TemporaryPasswordValidityDays: __expectInt32(output.TemporaryPasswordValidityDays),
  } as any;
};

/**
 * deserializeAws_json1_1PasswordResetRequiredException
 */
const de_PasswordResetRequiredException = (output: any, context: __SerdeContext): PasswordResetRequiredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PreconditionNotMetException
 */
const de_PreconditionNotMetException = (output: any, context: __SerdeContext): PreconditionNotMetException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ProviderDescription
 */
const de_ProviderDescription = (output: any, context: __SerdeContext): ProviderDescription => {
  return {
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    ProviderName: __expectString(output.ProviderName),
    ProviderType: __expectString(output.ProviderType),
  } as any;
};

/**
 * deserializeAws_json1_1ProviderDetailsType
 */
const de_ProviderDetailsType = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ProvidersListType
 */
const de_ProvidersListType = (output: any, context: __SerdeContext): ProviderDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProviderDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecoveryMechanismsType
 */
const de_RecoveryMechanismsType = (output: any, context: __SerdeContext): RecoveryOptionType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecoveryOptionType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RecoveryOptionType
 */
const de_RecoveryOptionType = (output: any, context: __SerdeContext): RecoveryOptionType => {
  return {
    Name: __expectString(output.Name),
    Priority: __expectInt32(output.Priority),
  } as any;
};

/**
 * deserializeAws_json1_1ResendConfirmationCodeResponse
 */
const de_ResendConfirmationCodeResponse = (output: any, context: __SerdeContext): ResendConfirmationCodeResponse => {
  return {
    CodeDeliveryDetails:
      output.CodeDeliveryDetails != null ? de_CodeDeliveryDetailsType(output.CodeDeliveryDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceServerScopeListType
 */
const de_ResourceServerScopeListType = (output: any, context: __SerdeContext): ResourceServerScopeType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceServerScopeType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceServerScopeType
 */
const de_ResourceServerScopeType = (output: any, context: __SerdeContext): ResourceServerScopeType => {
  return {
    ScopeDescription: __expectString(output.ScopeDescription),
    ScopeName: __expectString(output.ScopeName),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceServersListType
 */
const de_ResourceServersListType = (output: any, context: __SerdeContext): ResourceServerType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceServerType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceServerType
 */
const de_ResourceServerType = (output: any, context: __SerdeContext): ResourceServerType => {
  return {
    Identifier: __expectString(output.Identifier),
    Name: __expectString(output.Name),
    Scopes: output.Scopes != null ? de_ResourceServerScopeListType(output.Scopes, context) : undefined,
    UserPoolId: __expectString(output.UserPoolId),
  } as any;
};

/**
 * deserializeAws_json1_1RespondToAuthChallengeResponse
 */
const de_RespondToAuthChallengeResponse = (output: any, context: __SerdeContext): RespondToAuthChallengeResponse => {
  return {
    AuthenticationResult:
      output.AuthenticationResult != null
        ? de_AuthenticationResultType(output.AuthenticationResult, context)
        : undefined,
    ChallengeName: __expectString(output.ChallengeName),
    ChallengeParameters:
      output.ChallengeParameters != null ? de_ChallengeParametersType(output.ChallengeParameters, context) : undefined,
    Session: __expectString(output.Session),
  } as any;
};

/**
 * deserializeAws_json1_1RevokeTokenResponse
 */
const de_RevokeTokenResponse = (output: any, context: __SerdeContext): RevokeTokenResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1RiskConfigurationType
 */
const de_RiskConfigurationType = (output: any, context: __SerdeContext): RiskConfigurationType => {
  return {
    AccountTakeoverRiskConfiguration:
      output.AccountTakeoverRiskConfiguration != null
        ? de_AccountTakeoverRiskConfigurationType(output.AccountTakeoverRiskConfiguration, context)
        : undefined,
    ClientId: __expectString(output.ClientId),
    CompromisedCredentialsRiskConfiguration:
      output.CompromisedCredentialsRiskConfiguration != null
        ? de_CompromisedCredentialsRiskConfigurationType(output.CompromisedCredentialsRiskConfiguration, context)
        : undefined,
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    RiskExceptionConfiguration:
      output.RiskExceptionConfiguration != null
        ? de_RiskExceptionConfigurationType(output.RiskExceptionConfiguration, context)
        : undefined,
    UserPoolId: __expectString(output.UserPoolId),
  } as any;
};

/**
 * deserializeAws_json1_1RiskExceptionConfigurationType
 */
const de_RiskExceptionConfigurationType = (output: any, context: __SerdeContext): RiskExceptionConfigurationType => {
  return {
    BlockedIPRangeList:
      output.BlockedIPRangeList != null ? de_BlockedIPRangeListType(output.BlockedIPRangeList, context) : undefined,
    SkippedIPRangeList:
      output.SkippedIPRangeList != null ? de_SkippedIPRangeListType(output.SkippedIPRangeList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SchemaAttributesListType
 */
const de_SchemaAttributesListType = (output: any, context: __SerdeContext): SchemaAttributeType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SchemaAttributeType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SchemaAttributeType
 */
const de_SchemaAttributeType = (output: any, context: __SerdeContext): SchemaAttributeType => {
  return {
    AttributeDataType: __expectString(output.AttributeDataType),
    DeveloperOnlyAttribute: __expectBoolean(output.DeveloperOnlyAttribute),
    Mutable: __expectBoolean(output.Mutable),
    Name: __expectString(output.Name),
    NumberAttributeConstraints:
      output.NumberAttributeConstraints != null
        ? de_NumberAttributeConstraintsType(output.NumberAttributeConstraints, context)
        : undefined,
    Required: __expectBoolean(output.Required),
    StringAttributeConstraints:
      output.StringAttributeConstraints != null
        ? de_StringAttributeConstraintsType(output.StringAttributeConstraints, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ScopeDoesNotExistException
 */
const de_ScopeDoesNotExistException = (output: any, context: __SerdeContext): ScopeDoesNotExistException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ScopeListType
 */
const de_ScopeListType = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SetRiskConfigurationResponse
 */
const de_SetRiskConfigurationResponse = (output: any, context: __SerdeContext): SetRiskConfigurationResponse => {
  return {
    RiskConfiguration:
      output.RiskConfiguration != null ? de_RiskConfigurationType(output.RiskConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SetUICustomizationResponse
 */
const de_SetUICustomizationResponse = (output: any, context: __SerdeContext): SetUICustomizationResponse => {
  return {
    UICustomization:
      output.UICustomization != null ? de_UICustomizationType(output.UICustomization, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SetUserMFAPreferenceResponse
 */
const de_SetUserMFAPreferenceResponse = (output: any, context: __SerdeContext): SetUserMFAPreferenceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1SetUserPoolMfaConfigResponse
 */
const de_SetUserPoolMfaConfigResponse = (output: any, context: __SerdeContext): SetUserPoolMfaConfigResponse => {
  return {
    MfaConfiguration: __expectString(output.MfaConfiguration),
    SmsMfaConfiguration:
      output.SmsMfaConfiguration != null ? de_SmsMfaConfigType(output.SmsMfaConfiguration, context) : undefined,
    SoftwareTokenMfaConfiguration:
      output.SoftwareTokenMfaConfiguration != null
        ? de_SoftwareTokenMfaConfigType(output.SoftwareTokenMfaConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SetUserSettingsResponse
 */
const de_SetUserSettingsResponse = (output: any, context: __SerdeContext): SetUserSettingsResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1SignUpResponse
 */
const de_SignUpResponse = (output: any, context: __SerdeContext): SignUpResponse => {
  return {
    CodeDeliveryDetails:
      output.CodeDeliveryDetails != null ? de_CodeDeliveryDetailsType(output.CodeDeliveryDetails, context) : undefined,
    UserConfirmed: __expectBoolean(output.UserConfirmed),
    UserSub: __expectString(output.UserSub),
  } as any;
};

/**
 * deserializeAws_json1_1SkippedIPRangeListType
 */
const de_SkippedIPRangeListType = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SmsConfigurationType
 */
const de_SmsConfigurationType = (output: any, context: __SerdeContext): SmsConfigurationType => {
  return {
    ExternalId: __expectString(output.ExternalId),
    SnsCallerArn: __expectString(output.SnsCallerArn),
    SnsRegion: __expectString(output.SnsRegion),
  } as any;
};

/**
 * deserializeAws_json1_1SmsMfaConfigType
 */
const de_SmsMfaConfigType = (output: any, context: __SerdeContext): SmsMfaConfigType => {
  return {
    SmsAuthenticationMessage: __expectString(output.SmsAuthenticationMessage),
    SmsConfiguration:
      output.SmsConfiguration != null ? de_SmsConfigurationType(output.SmsConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SoftwareTokenMfaConfigType
 */
const de_SoftwareTokenMfaConfigType = (output: any, context: __SerdeContext): SoftwareTokenMfaConfigType => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

/**
 * deserializeAws_json1_1SoftwareTokenMFANotFoundException
 */
const de_SoftwareTokenMFANotFoundException = (
  output: any,
  context: __SerdeContext
): SoftwareTokenMFANotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1StartUserImportJobResponse
 */
const de_StartUserImportJobResponse = (output: any, context: __SerdeContext): StartUserImportJobResponse => {
  return {
    UserImportJob: output.UserImportJob != null ? de_UserImportJobType(output.UserImportJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopUserImportJobResponse
 */
const de_StopUserImportJobResponse = (output: any, context: __SerdeContext): StopUserImportJobResponse => {
  return {
    UserImportJob: output.UserImportJob != null ? de_UserImportJobType(output.UserImportJob, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StringAttributeConstraintsType
 */
const de_StringAttributeConstraintsType = (output: any, context: __SerdeContext): StringAttributeConstraintsType => {
  return {
    MaxLength: __expectString(output.MaxLength),
    MinLength: __expectString(output.MinLength),
  } as any;
};

/**
 * deserializeAws_json1_1SupportedIdentityProvidersListType
 */
const de_SupportedIdentityProvidersListType = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TokenValidityUnitsType
 */
const de_TokenValidityUnitsType = (output: any, context: __SerdeContext): TokenValidityUnitsType => {
  return {
    AccessToken: __expectString(output.AccessToken),
    IdToken: __expectString(output.IdToken),
    RefreshToken: __expectString(output.RefreshToken),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyFailedAttemptsException
 */
const de_TooManyFailedAttemptsException = (output: any, context: __SerdeContext): TooManyFailedAttemptsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1TooManyRequestsException
 */
const de_TooManyRequestsException = (output: any, context: __SerdeContext): TooManyRequestsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UICustomizationType
 */
const de_UICustomizationType = (output: any, context: __SerdeContext): UICustomizationType => {
  return {
    CSS: __expectString(output.CSS),
    CSSVersion: __expectString(output.CSSVersion),
    ClientId: __expectString(output.ClientId),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    ImageUrl: __expectString(output.ImageUrl),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    UserPoolId: __expectString(output.UserPoolId),
  } as any;
};

/**
 * deserializeAws_json1_1UnauthorizedException
 */
const de_UnauthorizedException = (output: any, context: __SerdeContext): UnauthorizedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnexpectedLambdaException
 */
const de_UnexpectedLambdaException = (output: any, context: __SerdeContext): UnexpectedLambdaException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedIdentityProviderException
 */
const de_UnsupportedIdentityProviderException = (
  output: any,
  context: __SerdeContext
): UnsupportedIdentityProviderException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedOperationException
 */
const de_UnsupportedOperationException = (output: any, context: __SerdeContext): UnsupportedOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedTokenTypeException
 */
const de_UnsupportedTokenTypeException = (output: any, context: __SerdeContext): UnsupportedTokenTypeException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedUserStateException
 */
const de_UnsupportedUserStateException = (output: any, context: __SerdeContext): UnsupportedUserStateException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateAuthEventFeedbackResponse
 */
const de_UpdateAuthEventFeedbackResponse = (output: any, context: __SerdeContext): UpdateAuthEventFeedbackResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDeviceStatusResponse
 */
const de_UpdateDeviceStatusResponse = (output: any, context: __SerdeContext): UpdateDeviceStatusResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateGroupResponse
 */
const de_UpdateGroupResponse = (output: any, context: __SerdeContext): UpdateGroupResponse => {
  return {
    Group: output.Group != null ? de_GroupType(output.Group, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateIdentityProviderResponse
 */
const de_UpdateIdentityProviderResponse = (output: any, context: __SerdeContext): UpdateIdentityProviderResponse => {
  return {
    IdentityProvider:
      output.IdentityProvider != null ? de_IdentityProviderType(output.IdentityProvider, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateResourceServerResponse
 */
const de_UpdateResourceServerResponse = (output: any, context: __SerdeContext): UpdateResourceServerResponse => {
  return {
    ResourceServer: output.ResourceServer != null ? de_ResourceServerType(output.ResourceServer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateUserAttributesResponse
 */
const de_UpdateUserAttributesResponse = (output: any, context: __SerdeContext): UpdateUserAttributesResponse => {
  return {
    CodeDeliveryDetailsList:
      output.CodeDeliveryDetailsList != null
        ? de_CodeDeliveryDetailsListType(output.CodeDeliveryDetailsList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateUserPoolClientResponse
 */
const de_UpdateUserPoolClientResponse = (output: any, context: __SerdeContext): UpdateUserPoolClientResponse => {
  return {
    UserPoolClient: output.UserPoolClient != null ? de_UserPoolClientType(output.UserPoolClient, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateUserPoolDomainResponse
 */
const de_UpdateUserPoolDomainResponse = (output: any, context: __SerdeContext): UpdateUserPoolDomainResponse => {
  return {
    CloudFrontDomain: __expectString(output.CloudFrontDomain),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateUserPoolResponse
 */
const de_UpdateUserPoolResponse = (output: any, context: __SerdeContext): UpdateUserPoolResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UserAttributeUpdateSettingsType
 */
const de_UserAttributeUpdateSettingsType = (output: any, context: __SerdeContext): UserAttributeUpdateSettingsType => {
  return {
    AttributesRequireVerificationBeforeUpdate:
      output.AttributesRequireVerificationBeforeUpdate != null
        ? de_AttributesRequireVerificationBeforeUpdateType(output.AttributesRequireVerificationBeforeUpdate, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UserImportInProgressException
 */
const de_UserImportInProgressException = (output: any, context: __SerdeContext): UserImportInProgressException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserImportJobsListType
 */
const de_UserImportJobsListType = (output: any, context: __SerdeContext): UserImportJobType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserImportJobType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserImportJobType
 */
const de_UserImportJobType = (output: any, context: __SerdeContext): UserImportJobType => {
  return {
    CloudWatchLogsRoleArn: __expectString(output.CloudWatchLogsRoleArn),
    CompletionDate:
      output.CompletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionDate)))
        : undefined,
    CompletionMessage: __expectString(output.CompletionMessage),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    FailedUsers: __expectLong(output.FailedUsers),
    ImportedUsers: __expectLong(output.ImportedUsers),
    JobId: __expectString(output.JobId),
    JobName: __expectString(output.JobName),
    PreSignedUrl: __expectString(output.PreSignedUrl),
    SkippedUsers: __expectLong(output.SkippedUsers),
    StartDate:
      output.StartDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartDate))) : undefined,
    Status: __expectString(output.Status),
    UserPoolId: __expectString(output.UserPoolId),
  } as any;
};

/**
 * deserializeAws_json1_1UserLambdaValidationException
 */
const de_UserLambdaValidationException = (output: any, context: __SerdeContext): UserLambdaValidationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserMFASettingListType
 */
const de_UserMFASettingListType = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UsernameAttributesListType
 */
const de_UsernameAttributesListType = (output: any, context: __SerdeContext): (UsernameAttributeType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UsernameConfigurationType
 */
const de_UsernameConfigurationType = (output: any, context: __SerdeContext): UsernameConfigurationType => {
  return {
    CaseSensitive: __expectBoolean(output.CaseSensitive),
  } as any;
};

/**
 * deserializeAws_json1_1UsernameExistsException
 */
const de_UsernameExistsException = (output: any, context: __SerdeContext): UsernameExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserNotConfirmedException
 */
const de_UserNotConfirmedException = (output: any, context: __SerdeContext): UserNotConfirmedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserNotFoundException
 */
const de_UserNotFoundException = (output: any, context: __SerdeContext): UserNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserPoolAddOnNotEnabledException
 */
const de_UserPoolAddOnNotEnabledException = (
  output: any,
  context: __SerdeContext
): UserPoolAddOnNotEnabledException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserPoolAddOnsType
 */
const de_UserPoolAddOnsType = (output: any, context: __SerdeContext): UserPoolAddOnsType => {
  return {
    AdvancedSecurityMode: __expectString(output.AdvancedSecurityMode),
  } as any;
};

/**
 * deserializeAws_json1_1UserPoolClientDescription
 */
const de_UserPoolClientDescription = (output: any, context: __SerdeContext): UserPoolClientDescription => {
  return {
    ClientId: __expectString(output.ClientId),
    ClientName: __expectString(output.ClientName),
    UserPoolId: __expectString(output.UserPoolId),
  } as any;
};

/**
 * deserializeAws_json1_1UserPoolClientListType
 */
const de_UserPoolClientListType = (output: any, context: __SerdeContext): UserPoolClientDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserPoolClientDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserPoolClientType
 */
const de_UserPoolClientType = (output: any, context: __SerdeContext): UserPoolClientType => {
  return {
    AccessTokenValidity: __expectInt32(output.AccessTokenValidity),
    AllowedOAuthFlows:
      output.AllowedOAuthFlows != null ? de_OAuthFlowsType(output.AllowedOAuthFlows, context) : undefined,
    AllowedOAuthFlowsUserPoolClient: __expectBoolean(output.AllowedOAuthFlowsUserPoolClient),
    AllowedOAuthScopes:
      output.AllowedOAuthScopes != null ? de_ScopeListType(output.AllowedOAuthScopes, context) : undefined,
    AnalyticsConfiguration:
      output.AnalyticsConfiguration != null
        ? de_AnalyticsConfigurationType(output.AnalyticsConfiguration, context)
        : undefined,
    AuthSessionValidity: __expectInt32(output.AuthSessionValidity),
    CallbackURLs: output.CallbackURLs != null ? de_CallbackURLsListType(output.CallbackURLs, context) : undefined,
    ClientId: __expectString(output.ClientId),
    ClientName: __expectString(output.ClientName),
    ClientSecret: __expectString(output.ClientSecret),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    DefaultRedirectURI: __expectString(output.DefaultRedirectURI),
    EnablePropagateAdditionalUserContextData: __expectBoolean(output.EnablePropagateAdditionalUserContextData),
    EnableTokenRevocation: __expectBoolean(output.EnableTokenRevocation),
    ExplicitAuthFlows:
      output.ExplicitAuthFlows != null ? de_ExplicitAuthFlowsListType(output.ExplicitAuthFlows, context) : undefined,
    IdTokenValidity: __expectInt32(output.IdTokenValidity),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    LogoutURLs: output.LogoutURLs != null ? de_LogoutURLsListType(output.LogoutURLs, context) : undefined,
    PreventUserExistenceErrors: __expectString(output.PreventUserExistenceErrors),
    ReadAttributes:
      output.ReadAttributes != null ? de_ClientPermissionListType(output.ReadAttributes, context) : undefined,
    RefreshTokenValidity: __expectInt32(output.RefreshTokenValidity),
    SupportedIdentityProviders:
      output.SupportedIdentityProviders != null
        ? de_SupportedIdentityProvidersListType(output.SupportedIdentityProviders, context)
        : undefined,
    TokenValidityUnits:
      output.TokenValidityUnits != null ? de_TokenValidityUnitsType(output.TokenValidityUnits, context) : undefined,
    UserPoolId: __expectString(output.UserPoolId),
    WriteAttributes:
      output.WriteAttributes != null ? de_ClientPermissionListType(output.WriteAttributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UserPoolDescriptionType
 */
const de_UserPoolDescriptionType = (output: any, context: __SerdeContext): UserPoolDescriptionType => {
  return {
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    Id: __expectString(output.Id),
    LambdaConfig: output.LambdaConfig != null ? de_LambdaConfigType(output.LambdaConfig, context) : undefined,
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1UserPoolListType
 */
const de_UserPoolListType = (output: any, context: __SerdeContext): UserPoolDescriptionType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserPoolDescriptionType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserPoolPolicyType
 */
const de_UserPoolPolicyType = (output: any, context: __SerdeContext): UserPoolPolicyType => {
  return {
    PasswordPolicy: output.PasswordPolicy != null ? de_PasswordPolicyType(output.PasswordPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UserPoolTaggingException
 */
const de_UserPoolTaggingException = (output: any, context: __SerdeContext): UserPoolTaggingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UserPoolTagsType
 */
const de_UserPoolTagsType = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1UserPoolType
 */
const de_UserPoolType = (output: any, context: __SerdeContext): UserPoolType => {
  return {
    AccountRecoverySetting:
      output.AccountRecoverySetting != null
        ? de_AccountRecoverySettingType(output.AccountRecoverySetting, context)
        : undefined,
    AdminCreateUserConfig:
      output.AdminCreateUserConfig != null
        ? de_AdminCreateUserConfigType(output.AdminCreateUserConfig, context)
        : undefined,
    AliasAttributes:
      output.AliasAttributes != null ? de_AliasAttributesListType(output.AliasAttributes, context) : undefined,
    Arn: __expectString(output.Arn),
    AutoVerifiedAttributes:
      output.AutoVerifiedAttributes != null
        ? de_VerifiedAttributesListType(output.AutoVerifiedAttributes, context)
        : undefined,
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    CustomDomain: __expectString(output.CustomDomain),
    DeletionProtection: __expectString(output.DeletionProtection),
    DeviceConfiguration:
      output.DeviceConfiguration != null ? de_DeviceConfigurationType(output.DeviceConfiguration, context) : undefined,
    Domain: __expectString(output.Domain),
    EmailConfiguration:
      output.EmailConfiguration != null ? de_EmailConfigurationType(output.EmailConfiguration, context) : undefined,
    EmailConfigurationFailure: __expectString(output.EmailConfigurationFailure),
    EmailVerificationMessage: __expectString(output.EmailVerificationMessage),
    EmailVerificationSubject: __expectString(output.EmailVerificationSubject),
    EstimatedNumberOfUsers: __expectInt32(output.EstimatedNumberOfUsers),
    Id: __expectString(output.Id),
    LambdaConfig: output.LambdaConfig != null ? de_LambdaConfigType(output.LambdaConfig, context) : undefined,
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    MfaConfiguration: __expectString(output.MfaConfiguration),
    Name: __expectString(output.Name),
    Policies: output.Policies != null ? de_UserPoolPolicyType(output.Policies, context) : undefined,
    SchemaAttributes:
      output.SchemaAttributes != null ? de_SchemaAttributesListType(output.SchemaAttributes, context) : undefined,
    SmsAuthenticationMessage: __expectString(output.SmsAuthenticationMessage),
    SmsConfiguration:
      output.SmsConfiguration != null ? de_SmsConfigurationType(output.SmsConfiguration, context) : undefined,
    SmsConfigurationFailure: __expectString(output.SmsConfigurationFailure),
    SmsVerificationMessage: __expectString(output.SmsVerificationMessage),
    Status: __expectString(output.Status),
    UserAttributeUpdateSettings:
      output.UserAttributeUpdateSettings != null
        ? de_UserAttributeUpdateSettingsType(output.UserAttributeUpdateSettings, context)
        : undefined,
    UserPoolAddOns: output.UserPoolAddOns != null ? de_UserPoolAddOnsType(output.UserPoolAddOns, context) : undefined,
    UserPoolTags: output.UserPoolTags != null ? de_UserPoolTagsType(output.UserPoolTags, context) : undefined,
    UsernameAttributes:
      output.UsernameAttributes != null ? de_UsernameAttributesListType(output.UsernameAttributes, context) : undefined,
    UsernameConfiguration:
      output.UsernameConfiguration != null
        ? de_UsernameConfigurationType(output.UsernameConfiguration, context)
        : undefined,
    VerificationMessageTemplate:
      output.VerificationMessageTemplate != null
        ? de_VerificationMessageTemplateType(output.VerificationMessageTemplate, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UsersListType
 */
const de_UsersListType = (output: any, context: __SerdeContext): UserType[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UserType(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UserType
 */
const de_UserType = (output: any, context: __SerdeContext): UserType => {
  return {
    Attributes: output.Attributes != null ? de_AttributeListType(output.Attributes, context) : undefined,
    Enabled: __expectBoolean(output.Enabled),
    MFAOptions: output.MFAOptions != null ? de_MFAOptionListType(output.MFAOptions, context) : undefined,
    UserCreateDate:
      output.UserCreateDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UserCreateDate)))
        : undefined,
    UserLastModifiedDate:
      output.UserLastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UserLastModifiedDate)))
        : undefined,
    UserStatus: __expectString(output.UserStatus),
    Username: __expectString(output.Username),
  } as any;
};

/**
 * deserializeAws_json1_1VerificationMessageTemplateType
 */
const de_VerificationMessageTemplateType = (output: any, context: __SerdeContext): VerificationMessageTemplateType => {
  return {
    DefaultEmailOption: __expectString(output.DefaultEmailOption),
    EmailMessage: __expectString(output.EmailMessage),
    EmailMessageByLink: __expectString(output.EmailMessageByLink),
    EmailSubject: __expectString(output.EmailSubject),
    EmailSubjectByLink: __expectString(output.EmailSubjectByLink),
    SmsMessage: __expectString(output.SmsMessage),
  } as any;
};

/**
 * deserializeAws_json1_1VerifiedAttributesListType
 */
const de_VerifiedAttributesListType = (output: any, context: __SerdeContext): (VerifiedAttributeType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VerifySoftwareTokenResponse
 */
const de_VerifySoftwareTokenResponse = (output: any, context: __SerdeContext): VerifySoftwareTokenResponse => {
  return {
    Session: __expectString(output.Session),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1VerifyUserAttributeResponse
 */
const de_VerifyUserAttributeResponse = (output: any, context: __SerdeContext): VerifyUserAttributeResponse => {
  return {} as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
