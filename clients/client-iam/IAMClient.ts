import {
  AddClientIDToOpenIDConnectProviderRequest,
  AddRoleToInstanceProfileRequest,
  AddUserToGroupRequest,
  AttachGroupPolicyRequest,
  AttachRolePolicyRequest,
  AttachUserPolicyRequest,
  ChangePasswordRequest,
  CreateAccessKeyRequest,
  CreateAccessKeyResponse,
  CreateAccountAliasRequest,
  CreateGroupRequest,
  CreateGroupResponse,
  CreateInstanceProfileRequest,
  CreateInstanceProfileResponse,
  CreateLoginProfileRequest,
  CreateLoginProfileResponse,
  CreateOpenIDConnectProviderRequest,
  CreateOpenIDConnectProviderResponse,
  CreatePolicyRequest,
  CreatePolicyResponse,
  CreatePolicyVersionRequest,
  CreatePolicyVersionResponse,
  CreateRoleRequest,
  CreateRoleResponse,
  CreateSAMLProviderRequest,
  CreateSAMLProviderResponse,
  CreateServiceLinkedRoleRequest,
  CreateServiceLinkedRoleResponse,
  CreateServiceSpecificCredentialRequest,
  CreateServiceSpecificCredentialResponse,
  CreateUserRequest,
  CreateUserResponse,
  CreateVirtualMFADeviceRequest,
  CreateVirtualMFADeviceResponse,
  DeactivateMFADeviceRequest,
  DeleteAccessKeyRequest,
  DeleteAccountAliasRequest,
  DeleteGroupPolicyRequest,
  DeleteGroupRequest,
  DeleteInstanceProfileRequest,
  DeleteLoginProfileRequest,
  DeleteOpenIDConnectProviderRequest,
  DeletePolicyRequest,
  DeletePolicyVersionRequest,
  DeleteRolePermissionsBoundaryRequest,
  DeleteRolePolicyRequest,
  DeleteRoleRequest,
  DeleteSAMLProviderRequest,
  DeleteSSHPublicKeyRequest,
  DeleteServerCertificateRequest,
  DeleteServiceLinkedRoleRequest,
  DeleteServiceLinkedRoleResponse,
  DeleteServiceSpecificCredentialRequest,
  DeleteSigningCertificateRequest,
  DeleteUserPermissionsBoundaryRequest,
  DeleteUserPolicyRequest,
  DeleteUserRequest,
  DeleteVirtualMFADeviceRequest,
  DetachGroupPolicyRequest,
  DetachRolePolicyRequest,
  DetachUserPolicyRequest,
  EnableMFADeviceRequest,
  GenerateCredentialReportResponse,
  GenerateOrganizationsAccessReportRequest,
  GenerateOrganizationsAccessReportResponse,
  GenerateServiceLastAccessedDetailsRequest,
  GenerateServiceLastAccessedDetailsResponse,
  GetAccessKeyLastUsedRequest,
  GetAccessKeyLastUsedResponse,
  GetAccountAuthorizationDetailsRequest,
  GetAccountAuthorizationDetailsResponse,
  GetAccountPasswordPolicyResponse,
  GetAccountSummaryResponse,
  GetContextKeysForCustomPolicyRequest,
  GetContextKeysForPolicyResponse,
  GetContextKeysForPrincipalPolicyRequest,
  GetCredentialReportResponse,
  GetGroupPolicyRequest,
  GetGroupPolicyResponse,
  GetGroupRequest,
  GetGroupResponse,
  GetInstanceProfileRequest,
  GetInstanceProfileResponse,
  GetLoginProfileRequest,
  GetLoginProfileResponse,
  GetOpenIDConnectProviderRequest,
  GetOpenIDConnectProviderResponse,
  GetOrganizationsAccessReportRequest,
  GetOrganizationsAccessReportResponse,
  GetPolicyRequest,
  GetPolicyResponse,
  GetPolicyVersionRequest,
  GetPolicyVersionResponse,
  GetRolePolicyRequest,
  GetRolePolicyResponse,
  GetRoleRequest,
  GetRoleResponse,
  GetSAMLProviderRequest,
  GetSAMLProviderResponse,
  GetSSHPublicKeyRequest,
  GetSSHPublicKeyResponse,
  GetServerCertificateRequest,
  GetServerCertificateResponse,
  GetServiceLastAccessedDetailsRequest,
  GetServiceLastAccessedDetailsResponse,
  GetServiceLastAccessedDetailsWithEntitiesRequest,
  GetServiceLastAccessedDetailsWithEntitiesResponse,
  GetServiceLinkedRoleDeletionStatusRequest,
  GetServiceLinkedRoleDeletionStatusResponse,
  GetUserPolicyRequest,
  GetUserPolicyResponse,
  GetUserRequest,
  GetUserResponse,
  ListAccessKeysRequest,
  ListAccessKeysResponse,
  ListAccountAliasesRequest,
  ListAccountAliasesResponse,
  ListAttachedGroupPoliciesRequest,
  ListAttachedGroupPoliciesResponse,
  ListAttachedRolePoliciesRequest,
  ListAttachedRolePoliciesResponse,
  ListAttachedUserPoliciesRequest,
  ListAttachedUserPoliciesResponse,
  ListEntitiesForPolicyRequest,
  ListEntitiesForPolicyResponse,
  ListGroupPoliciesRequest,
  ListGroupPoliciesResponse,
  ListGroupsForUserRequest,
  ListGroupsForUserResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListInstanceProfilesForRoleRequest,
  ListInstanceProfilesForRoleResponse,
  ListInstanceProfilesRequest,
  ListInstanceProfilesResponse,
  ListMFADevicesRequest,
  ListMFADevicesResponse,
  ListOpenIDConnectProvidersRequest,
  ListOpenIDConnectProvidersResponse,
  ListPoliciesGrantingServiceAccessRequest,
  ListPoliciesGrantingServiceAccessResponse,
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListPolicyVersionsRequest,
  ListPolicyVersionsResponse,
  ListRolePoliciesRequest,
  ListRolePoliciesResponse,
  ListRoleTagsRequest,
  ListRoleTagsResponse,
  ListRolesRequest,
  ListRolesResponse,
  ListSAMLProvidersRequest,
  ListSAMLProvidersResponse,
  ListSSHPublicKeysRequest,
  ListSSHPublicKeysResponse,
  ListServerCertificatesRequest,
  ListServerCertificatesResponse,
  ListServiceSpecificCredentialsRequest,
  ListServiceSpecificCredentialsResponse,
  ListSigningCertificatesRequest,
  ListSigningCertificatesResponse,
  ListUserPoliciesRequest,
  ListUserPoliciesResponse,
  ListUserTagsRequest,
  ListUserTagsResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListVirtualMFADevicesRequest,
  ListVirtualMFADevicesResponse,
  PutGroupPolicyRequest,
  PutRolePermissionsBoundaryRequest,
  PutRolePolicyRequest,
  PutUserPermissionsBoundaryRequest,
  PutUserPolicyRequest,
  RemoveClientIDFromOpenIDConnectProviderRequest,
  RemoveRoleFromInstanceProfileRequest,
  RemoveUserFromGroupRequest,
  ResetServiceSpecificCredentialRequest,
  ResetServiceSpecificCredentialResponse,
  ResyncMFADeviceRequest,
  SetDefaultPolicyVersionRequest,
  SetSecurityTokenServicePreferencesRequest,
  SimulateCustomPolicyRequest,
  SimulatePolicyResponse,
  SimulatePrincipalPolicyRequest,
  TagRoleRequest,
  TagUserRequest,
  UntagRoleRequest,
  UntagUserRequest,
  UpdateAccessKeyRequest,
  UpdateAccountPasswordPolicyRequest,
  UpdateAssumeRolePolicyRequest,
  UpdateGroupRequest,
  UpdateLoginProfileRequest,
  UpdateOpenIDConnectProviderThumbprintRequest,
  UpdateRoleDescriptionRequest,
  UpdateRoleDescriptionResponse,
  UpdateRoleRequest,
  UpdateRoleResponse,
  UpdateSAMLProviderRequest,
  UpdateSAMLProviderResponse,
  UpdateSSHPublicKeyRequest,
  UpdateServerCertificateRequest,
  UpdateServiceSpecificCredentialRequest,
  UpdateSigningCertificateRequest,
  UpdateUserRequest,
  UploadSSHPublicKeyRequest,
  UploadSSHPublicKeyResponse,
  UploadServerCertificateRequest,
  UploadServerCertificateResponse,
  UploadSigningCertificateRequest,
  UploadSigningCertificateResponse
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
  | {}
  | AddClientIDToOpenIDConnectProviderRequest
  | AddRoleToInstanceProfileRequest
  | AddUserToGroupRequest
  | AttachGroupPolicyRequest
  | AttachRolePolicyRequest
  | AttachUserPolicyRequest
  | ChangePasswordRequest
  | CreateAccessKeyRequest
  | CreateAccountAliasRequest
  | CreateGroupRequest
  | CreateInstanceProfileRequest
  | CreateLoginProfileRequest
  | CreateOpenIDConnectProviderRequest
  | CreatePolicyRequest
  | CreatePolicyVersionRequest
  | CreateRoleRequest
  | CreateSAMLProviderRequest
  | CreateServiceLinkedRoleRequest
  | CreateServiceSpecificCredentialRequest
  | CreateUserRequest
  | CreateVirtualMFADeviceRequest
  | DeactivateMFADeviceRequest
  | DeleteAccessKeyRequest
  | DeleteAccountAliasRequest
  | DeleteGroupPolicyRequest
  | DeleteGroupRequest
  | DeleteInstanceProfileRequest
  | DeleteLoginProfileRequest
  | DeleteOpenIDConnectProviderRequest
  | DeletePolicyRequest
  | DeletePolicyVersionRequest
  | DeleteRolePermissionsBoundaryRequest
  | DeleteRolePolicyRequest
  | DeleteRoleRequest
  | DeleteSAMLProviderRequest
  | DeleteSSHPublicKeyRequest
  | DeleteServerCertificateRequest
  | DeleteServiceLinkedRoleRequest
  | DeleteServiceSpecificCredentialRequest
  | DeleteSigningCertificateRequest
  | DeleteUserPermissionsBoundaryRequest
  | DeleteUserPolicyRequest
  | DeleteUserRequest
  | DeleteVirtualMFADeviceRequest
  | DetachGroupPolicyRequest
  | DetachRolePolicyRequest
  | DetachUserPolicyRequest
  | EnableMFADeviceRequest
  | GenerateOrganizationsAccessReportRequest
  | GenerateServiceLastAccessedDetailsRequest
  | GetAccessKeyLastUsedRequest
  | GetAccountAuthorizationDetailsRequest
  | GetContextKeysForCustomPolicyRequest
  | GetContextKeysForPrincipalPolicyRequest
  | GetGroupPolicyRequest
  | GetGroupRequest
  | GetInstanceProfileRequest
  | GetLoginProfileRequest
  | GetOpenIDConnectProviderRequest
  | GetOrganizationsAccessReportRequest
  | GetPolicyRequest
  | GetPolicyVersionRequest
  | GetRolePolicyRequest
  | GetRoleRequest
  | GetSAMLProviderRequest
  | GetSSHPublicKeyRequest
  | GetServerCertificateRequest
  | GetServiceLastAccessedDetailsRequest
  | GetServiceLastAccessedDetailsWithEntitiesRequest
  | GetServiceLinkedRoleDeletionStatusRequest
  | GetUserPolicyRequest
  | GetUserRequest
  | ListAccessKeysRequest
  | ListAccountAliasesRequest
  | ListAttachedGroupPoliciesRequest
  | ListAttachedRolePoliciesRequest
  | ListAttachedUserPoliciesRequest
  | ListEntitiesForPolicyRequest
  | ListGroupPoliciesRequest
  | ListGroupsForUserRequest
  | ListGroupsRequest
  | ListInstanceProfilesForRoleRequest
  | ListInstanceProfilesRequest
  | ListMFADevicesRequest
  | ListOpenIDConnectProvidersRequest
  | ListPoliciesGrantingServiceAccessRequest
  | ListPoliciesRequest
  | ListPolicyVersionsRequest
  | ListRolePoliciesRequest
  | ListRoleTagsRequest
  | ListRolesRequest
  | ListSAMLProvidersRequest
  | ListSSHPublicKeysRequest
  | ListServerCertificatesRequest
  | ListServiceSpecificCredentialsRequest
  | ListSigningCertificatesRequest
  | ListUserPoliciesRequest
  | ListUserTagsRequest
  | ListUsersRequest
  | ListVirtualMFADevicesRequest
  | PutGroupPolicyRequest
  | PutRolePermissionsBoundaryRequest
  | PutRolePolicyRequest
  | PutUserPermissionsBoundaryRequest
  | PutUserPolicyRequest
  | RemoveClientIDFromOpenIDConnectProviderRequest
  | RemoveRoleFromInstanceProfileRequest
  | RemoveUserFromGroupRequest
  | ResetServiceSpecificCredentialRequest
  | ResyncMFADeviceRequest
  | SetDefaultPolicyVersionRequest
  | SetSecurityTokenServicePreferencesRequest
  | SimulateCustomPolicyRequest
  | SimulatePrincipalPolicyRequest
  | TagRoleRequest
  | TagUserRequest
  | UntagRoleRequest
  | UntagUserRequest
  | UpdateAccessKeyRequest
  | UpdateAccountPasswordPolicyRequest
  | UpdateAssumeRolePolicyRequest
  | UpdateGroupRequest
  | UpdateLoginProfileRequest
  | UpdateOpenIDConnectProviderThumbprintRequest
  | UpdateRoleDescriptionRequest
  | UpdateRoleRequest
  | UpdateSAMLProviderRequest
  | UpdateSSHPublicKeyRequest
  | UpdateServerCertificateRequest
  | UpdateServiceSpecificCredentialRequest
  | UpdateSigningCertificateRequest
  | UpdateUserRequest
  | UploadSSHPublicKeyRequest
  | UploadServerCertificateRequest
  | UploadSigningCertificateRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | CreateAccessKeyResponse
  | CreateGroupResponse
  | CreateInstanceProfileResponse
  | CreateLoginProfileResponse
  | CreateOpenIDConnectProviderResponse
  | CreatePolicyResponse
  | CreatePolicyVersionResponse
  | CreateRoleResponse
  | CreateSAMLProviderResponse
  | CreateServiceLinkedRoleResponse
  | CreateServiceSpecificCredentialResponse
  | CreateUserResponse
  | CreateVirtualMFADeviceResponse
  | DeleteServiceLinkedRoleResponse
  | GenerateCredentialReportResponse
  | GenerateOrganizationsAccessReportResponse
  | GenerateServiceLastAccessedDetailsResponse
  | GetAccessKeyLastUsedResponse
  | GetAccountAuthorizationDetailsResponse
  | GetAccountPasswordPolicyResponse
  | GetAccountSummaryResponse
  | GetContextKeysForPolicyResponse
  | GetContextKeysForPolicyResponse
  | GetCredentialReportResponse
  | GetGroupPolicyResponse
  | GetGroupResponse
  | GetInstanceProfileResponse
  | GetLoginProfileResponse
  | GetOpenIDConnectProviderResponse
  | GetOrganizationsAccessReportResponse
  | GetPolicyResponse
  | GetPolicyVersionResponse
  | GetRolePolicyResponse
  | GetRoleResponse
  | GetSAMLProviderResponse
  | GetSSHPublicKeyResponse
  | GetServerCertificateResponse
  | GetServiceLastAccessedDetailsResponse
  | GetServiceLastAccessedDetailsWithEntitiesResponse
  | GetServiceLinkedRoleDeletionStatusResponse
  | GetUserPolicyResponse
  | GetUserResponse
  | ListAccessKeysResponse
  | ListAccountAliasesResponse
  | ListAttachedGroupPoliciesResponse
  | ListAttachedRolePoliciesResponse
  | ListAttachedUserPoliciesResponse
  | ListEntitiesForPolicyResponse
  | ListGroupPoliciesResponse
  | ListGroupsForUserResponse
  | ListGroupsResponse
  | ListInstanceProfilesForRoleResponse
  | ListInstanceProfilesResponse
  | ListMFADevicesResponse
  | ListOpenIDConnectProvidersResponse
  | ListPoliciesGrantingServiceAccessResponse
  | ListPoliciesResponse
  | ListPolicyVersionsResponse
  | ListRolePoliciesResponse
  | ListRoleTagsResponse
  | ListRolesResponse
  | ListSAMLProvidersResponse
  | ListSSHPublicKeysResponse
  | ListServerCertificatesResponse
  | ListServiceSpecificCredentialsResponse
  | ListSigningCertificatesResponse
  | ListUserPoliciesResponse
  | ListUserTagsResponse
  | ListUsersResponse
  | ListVirtualMFADevicesResponse
  | ResetServiceSpecificCredentialResponse
  | SimulatePolicyResponse
  | SimulatePolicyResponse
  | UpdateRoleDescriptionResponse
  | UpdateRoleResponse
  | UpdateSAMLProviderResponse
  | UploadSSHPublicKeyResponse
  | UploadServerCertificateResponse
  | UploadSigningCertificateResponse;

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

export type IAMClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type IAMClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *          <fullname>AWS Identity and Access Management</fullname>
 *          <p>AWS Identity and Access Management (IAM) is a web service that you can use to manage
 *       users and user permissions under your AWS account. This guide provides descriptions of IAM
 *       actions that you can call programmatically. For general information about IAM, see <a href="http://aws.amazon.com/iam/">AWS Identity and Access Management (IAM)</a>. For the user
 *       guide for IAM, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/">Using IAM</a>. </p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Ruby, .NET, iOS, Android, etc.). The SDKs provide a
 *         convenient way to create programmatic access to IAM and AWS. For example, the SDKs take care
 *         of tasks such as cryptographically signing requests (see below), managing errors, and
 *         retrying requests automatically. For information about the AWS SDKs, including how to
 *         download and install them, see the <a href="http://aws.amazon.com/tools/">Tools for Amazon Web
 *           Services</a> page. </p>
 *          </note>
 *          <p>We recommend that you use the AWS SDKs to make programmatic API calls to IAM. However,
 *       you can also use the IAM Query API to make direct calls to the IAM web service. To learn more
 *       about the IAM Query API, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAM_UsingQueryAPI.html">Making Query Requests</a> in the
 *         <i>Using IAM</i> guide. IAM supports GET and POST requests for all actions.
 *       That is, the API does not require you to use GET for some actions and POST for others.
 *       However, GET requests are subject to the limitation size of a URL. Therefore, for operations
 *       that require larger sizes, use a POST request. </p>
 *          <p>
 *             <b>Signing Requests</b>
 *          </p>
 *          <p>Requests must be signed using an access key ID and a secret access key. We strongly
 *       recommend that you do not use your AWS account access key ID and secret access key for
 *       everyday work with IAM. You can use the access key ID and secret access key for an IAM user or
 *       you can use the AWS Security Token Service to generate temporary security credentials and use
 *       those to sign requests.</p>
 *          <p>To sign requests, we recommend that you use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>. If you have an
 *       existing application that uses Signature Version 2, you do not have to update it to use
 *       Signature Version 4. However, some operations now require Signature Version 4. The
 *       documentation for operations that require version 4 indicate this requirement. </p>
 *          <p>
 *             <b>Additional Resources</b>
 *          </p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">AWS
 *             Security Credentials</a>. This topic provides general information about the types of
 *           credentials used for accessing AWS. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/IAMBestPractices.html">IAM Best
 *             Practices</a>. This topic presents a list of suggestions for using the IAM service
 *           to help secure your AWS resources. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html">Signing
 *             AWS API Requests</a>. This set of topics walk you through the process of signing a
 *           request using an access key ID and secret access key. </p>
 *             </li>
 *          </ul>
 *
 */
export class IAMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IAMClientResolvedConfig
> {
  readonly config: IAMClientResolvedConfig;

  constructor(configuration: IAMClientConfig) {
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
