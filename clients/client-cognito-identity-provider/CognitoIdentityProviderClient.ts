import {
  AddCustomAttributesRequest,
  AddCustomAttributesResponse,
  AdminAddUserToGroupRequest,
  AdminConfirmSignUpRequest,
  AdminConfirmSignUpResponse,
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
  AssociateSoftwareTokenRequest,
  AssociateSoftwareTokenResponse,
  ChangePasswordRequest,
  ChangePasswordResponse,
  ConfirmDeviceRequest,
  ConfirmDeviceResponse,
  ConfirmForgotPasswordRequest,
  ConfirmForgotPasswordResponse,
  ConfirmSignUpRequest,
  ConfirmSignUpResponse,
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
  InitiateAuthRequest,
  InitiateAuthResponse,
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
  ResendConfirmationCodeRequest,
  ResendConfirmationCodeResponse,
  RespondToAuthChallengeRequest,
  RespondToAuthChallengeResponse,
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
  VerifyUserAttributeResponse
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddCustomAttributesRequest
  | AdminAddUserToGroupRequest
  | AdminConfirmSignUpRequest
  | AdminCreateUserRequest
  | AdminDeleteUserAttributesRequest
  | AdminDeleteUserRequest
  | AdminDisableProviderForUserRequest
  | AdminDisableUserRequest
  | AdminEnableUserRequest
  | AdminForgetDeviceRequest
  | AdminGetDeviceRequest
  | AdminGetUserRequest
  | AdminInitiateAuthRequest
  | AdminLinkProviderForUserRequest
  | AdminListDevicesRequest
  | AdminListGroupsForUserRequest
  | AdminListUserAuthEventsRequest
  | AdminRemoveUserFromGroupRequest
  | AdminResetUserPasswordRequest
  | AdminRespondToAuthChallengeRequest
  | AdminSetUserMFAPreferenceRequest
  | AdminSetUserPasswordRequest
  | AdminSetUserSettingsRequest
  | AdminUpdateAuthEventFeedbackRequest
  | AdminUpdateDeviceStatusRequest
  | AdminUpdateUserAttributesRequest
  | AdminUserGlobalSignOutRequest
  | AssociateSoftwareTokenRequest
  | ChangePasswordRequest
  | ConfirmDeviceRequest
  | ConfirmForgotPasswordRequest
  | ConfirmSignUpRequest
  | CreateGroupRequest
  | CreateIdentityProviderRequest
  | CreateResourceServerRequest
  | CreateUserImportJobRequest
  | CreateUserPoolClientRequest
  | CreateUserPoolDomainRequest
  | CreateUserPoolRequest
  | DeleteGroupRequest
  | DeleteIdentityProviderRequest
  | DeleteResourceServerRequest
  | DeleteUserAttributesRequest
  | DeleteUserPoolClientRequest
  | DeleteUserPoolDomainRequest
  | DeleteUserPoolRequest
  | DeleteUserRequest
  | DescribeIdentityProviderRequest
  | DescribeResourceServerRequest
  | DescribeRiskConfigurationRequest
  | DescribeUserImportJobRequest
  | DescribeUserPoolClientRequest
  | DescribeUserPoolDomainRequest
  | DescribeUserPoolRequest
  | ForgetDeviceRequest
  | ForgotPasswordRequest
  | GetCSVHeaderRequest
  | GetDeviceRequest
  | GetGroupRequest
  | GetIdentityProviderByIdentifierRequest
  | GetSigningCertificateRequest
  | GetUICustomizationRequest
  | GetUserAttributeVerificationCodeRequest
  | GetUserPoolMfaConfigRequest
  | GetUserRequest
  | GlobalSignOutRequest
  | InitiateAuthRequest
  | ListDevicesRequest
  | ListGroupsRequest
  | ListIdentityProvidersRequest
  | ListResourceServersRequest
  | ListTagsForResourceRequest
  | ListUserImportJobsRequest
  | ListUserPoolClientsRequest
  | ListUserPoolsRequest
  | ListUsersInGroupRequest
  | ListUsersRequest
  | ResendConfirmationCodeRequest
  | RespondToAuthChallengeRequest
  | SetRiskConfigurationRequest
  | SetUICustomizationRequest
  | SetUserMFAPreferenceRequest
  | SetUserPoolMfaConfigRequest
  | SetUserSettingsRequest
  | SignUpRequest
  | StartUserImportJobRequest
  | StopUserImportJobRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateAuthEventFeedbackRequest
  | UpdateDeviceStatusRequest
  | UpdateGroupRequest
  | UpdateIdentityProviderRequest
  | UpdateResourceServerRequest
  | UpdateUserAttributesRequest
  | UpdateUserPoolClientRequest
  | UpdateUserPoolDomainRequest
  | UpdateUserPoolRequest
  | VerifySoftwareTokenRequest
  | VerifyUserAttributeRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AddCustomAttributesResponse
  | AdminConfirmSignUpResponse
  | AdminCreateUserResponse
  | AdminDeleteUserAttributesResponse
  | AdminDisableProviderForUserResponse
  | AdminDisableUserResponse
  | AdminEnableUserResponse
  | AdminGetDeviceResponse
  | AdminGetUserResponse
  | AdminInitiateAuthResponse
  | AdminLinkProviderForUserResponse
  | AdminListDevicesResponse
  | AdminListGroupsForUserResponse
  | AdminListUserAuthEventsResponse
  | AdminResetUserPasswordResponse
  | AdminRespondToAuthChallengeResponse
  | AdminSetUserMFAPreferenceResponse
  | AdminSetUserPasswordResponse
  | AdminSetUserSettingsResponse
  | AdminUpdateAuthEventFeedbackResponse
  | AdminUpdateDeviceStatusResponse
  | AdminUpdateUserAttributesResponse
  | AdminUserGlobalSignOutResponse
  | AssociateSoftwareTokenResponse
  | ChangePasswordResponse
  | ConfirmDeviceResponse
  | ConfirmForgotPasswordResponse
  | ConfirmSignUpResponse
  | CreateGroupResponse
  | CreateIdentityProviderResponse
  | CreateResourceServerResponse
  | CreateUserImportJobResponse
  | CreateUserPoolClientResponse
  | CreateUserPoolDomainResponse
  | CreateUserPoolResponse
  | DeleteUserAttributesResponse
  | DeleteUserPoolDomainResponse
  | DescribeIdentityProviderResponse
  | DescribeResourceServerResponse
  | DescribeRiskConfigurationResponse
  | DescribeUserImportJobResponse
  | DescribeUserPoolClientResponse
  | DescribeUserPoolDomainResponse
  | DescribeUserPoolResponse
  | ForgotPasswordResponse
  | GetCSVHeaderResponse
  | GetDeviceResponse
  | GetGroupResponse
  | GetIdentityProviderByIdentifierResponse
  | GetSigningCertificateResponse
  | GetUICustomizationResponse
  | GetUserAttributeVerificationCodeResponse
  | GetUserPoolMfaConfigResponse
  | GetUserResponse
  | GlobalSignOutResponse
  | InitiateAuthResponse
  | ListDevicesResponse
  | ListGroupsResponse
  | ListIdentityProvidersResponse
  | ListResourceServersResponse
  | ListTagsForResourceResponse
  | ListUserImportJobsResponse
  | ListUserPoolClientsResponse
  | ListUserPoolsResponse
  | ListUsersInGroupResponse
  | ListUsersResponse
  | ResendConfirmationCodeResponse
  | RespondToAuthChallengeResponse
  | SetRiskConfigurationResponse
  | SetUICustomizationResponse
  | SetUserMFAPreferenceResponse
  | SetUserPoolMfaConfigResponse
  | SetUserSettingsResponse
  | SignUpResponse
  | StartUserImportJobResponse
  | StopUserImportJobResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateAuthEventFeedbackResponse
  | UpdateDeviceStatusResponse
  | UpdateGroupResponse
  | UpdateIdentityProviderResponse
  | UpdateResourceServerResponse
  | UpdateUserAttributesResponse
  | UpdateUserPoolClientResponse
  | UpdateUserPoolDomainResponse
  | UpdateUserPoolResponse
  | VerifySoftwareTokenResponse
  | VerifyUserAttributeResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type CognitoIdentityProviderClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CognitoIdentityProviderClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 *
 *         <p>Using the Amazon Cognito User Pools API, you can create a user pool to manage
 *             directories and users. You can authenticate a user to obtain tokens related to user
 *             identity and access policies.</p>
 *         <p>This API reference provides information about user pools in Amazon Cognito User
 *             Pools.</p>
 *         <p>For more information, see the Amazon Cognito Documentation.</p>
 *
 */
export class CognitoIdentityProviderClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CognitoIdentityProviderClientResolvedConfig
> {
  readonly config: CognitoIdentityProviderClientResolvedConfig;

  constructor(configuration: CognitoIdentityProviderClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
