import {
  AdditionalConstraintsElement,
  AmplifyBackend,
  AmplifyBackendClient,
  AmplifyBackendServiceException,
  AuthenticatedElement,
  AuthResources,
  BackendAPIAppSyncAuthSettings$,
  BackendAPIAuthType$,
  BackendAPIConflictResolution$,
  BackendAPIResourceConfig$,
  BackendAuthAppleProviderConfig$,
  BackendAuthSocialProviderConfig$,
  BackendJobRespObj$,
  BackendStoragePermissions$,
  BadRequestException,
  BadRequestException$,
  CloneBackend$,
  CloneBackendCommand,
  CloneBackendRequest$,
  CloneBackendResponse$,
  CreateBackend$,
  CreateBackendAPI$,
  CreateBackendAPICommand,
  CreateBackendAPIRequest$,
  CreateBackendAPIResponse$,
  CreateBackendAuth$,
  CreateBackendAuthCommand,
  CreateBackendAuthForgotPasswordConfig$,
  CreateBackendAuthIdentityPoolConfig$,
  CreateBackendAuthMFAConfig$,
  CreateBackendAuthOAuthConfig$,
  CreateBackendAuthPasswordPolicyConfig$,
  CreateBackendAuthRequest$,
  CreateBackendAuthResourceConfig$,
  CreateBackendAuthResponse$,
  CreateBackendAuthUserPoolConfig$,
  CreateBackendAuthVerificationMessageConfig$,
  CreateBackendCommand,
  CreateBackendConfig$,
  CreateBackendConfigCommand,
  CreateBackendConfigRequest$,
  CreateBackendConfigResponse$,
  CreateBackendRequest$,
  CreateBackendResponse$,
  CreateBackendStorage$,
  CreateBackendStorageCommand,
  CreateBackendStorageRequest$,
  CreateBackendStorageResourceConfig$,
  CreateBackendStorageResponse$,
  CreateToken$,
  CreateTokenCommand,
  CreateTokenRequest$,
  CreateTokenResponse$,
  DeleteBackend$,
  DeleteBackendAPI$,
  DeleteBackendAPICommand,
  DeleteBackendAPIRequest$,
  DeleteBackendAPIResponse$,
  DeleteBackendAuth$,
  DeleteBackendAuthCommand,
  DeleteBackendAuthRequest$,
  DeleteBackendAuthResponse$,
  DeleteBackendCommand,
  DeleteBackendRequest$,
  DeleteBackendResponse$,
  DeleteBackendStorage$,
  DeleteBackendStorageCommand,
  DeleteBackendStorageRequest$,
  DeleteBackendStorageResponse$,
  DeleteToken$,
  DeleteTokenCommand,
  DeleteTokenRequest$,
  DeleteTokenResponse$,
  DeliveryMethod,
  EmailSettings$,
  GatewayTimeoutException,
  GatewayTimeoutException$,
  GenerateBackendAPIModels$,
  GenerateBackendAPIModelsCommand,
  GenerateBackendAPIModelsRequest$,
  GenerateBackendAPIModelsResponse$,
  GetBackend$,
  GetBackendAPI$,
  GetBackendAPICommand,
  GetBackendAPIModels$,
  GetBackendAPIModelsCommand,
  GetBackendAPIModelsRequest$,
  GetBackendAPIModelsResponse$,
  GetBackendAPIRequest$,
  GetBackendAPIResponse$,
  GetBackendAuth$,
  GetBackendAuthCommand,
  GetBackendAuthRequest$,
  GetBackendAuthResponse$,
  GetBackendCommand,
  GetBackendJob$,
  GetBackendJobCommand,
  GetBackendJobRequest$,
  GetBackendJobResponse$,
  GetBackendRequest$,
  GetBackendResponse$,
  GetBackendStorage$,
  GetBackendStorageCommand,
  GetBackendStorageRequest$,
  GetBackendStorageResourceConfig$,
  GetBackendStorageResponse$,
  GetToken$,
  GetTokenCommand,
  GetTokenRequest$,
  GetTokenResponse$,
  ImportBackendAuth$,
  ImportBackendAuthCommand,
  ImportBackendAuthRequest$,
  ImportBackendAuthResponse$,
  ImportBackendStorage$,
  ImportBackendStorageCommand,
  ImportBackendStorageRequest$,
  ImportBackendStorageResponse$,
  ListBackendJobs$,
  ListBackendJobsCommand,
  ListBackendJobsRequest$,
  ListBackendJobsResponse$,
  ListS3Buckets$,
  ListS3BucketsCommand,
  ListS3BucketsRequest$,
  ListS3BucketsResponse$,
  LoginAuthConfigReqObj$,
  MFAMode,
  MfaTypesElement,
  Mode,
  NotFoundException,
  NotFoundException$,
  OAuthGrantType,
  OAuthScopesElement,
  RemoveAllBackends$,
  RemoveAllBackendsCommand,
  RemoveAllBackendsRequest$,
  RemoveAllBackendsResponse$,
  RemoveBackendConfig$,
  RemoveBackendConfigCommand,
  RemoveBackendConfigRequest$,
  RemoveBackendConfigResponse$,
  RequiredSignUpAttributesElement,
  ResolutionStrategy,
  ResourceConfig$,
  S3BucketInfo$,
  Service,
  ServiceName,
  Settings$,
  SignInMethod,
  SmsSettings$,
  SocialProviderSettings$,
  Status,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnAuthenticatedElement,
  UpdateBackendAPI$,
  UpdateBackendAPICommand,
  UpdateBackendAPIRequest$,
  UpdateBackendAPIResponse$,
  UpdateBackendAuth$,
  UpdateBackendAuthCommand,
  UpdateBackendAuthForgotPasswordConfig$,
  UpdateBackendAuthIdentityPoolConfig$,
  UpdateBackendAuthMFAConfig$,
  UpdateBackendAuthOAuthConfig$,
  UpdateBackendAuthPasswordPolicyConfig$,
  UpdateBackendAuthRequest$,
  UpdateBackendAuthResourceConfig$,
  UpdateBackendAuthResponse$,
  UpdateBackendAuthUserPoolConfig$,
  UpdateBackendAuthVerificationMessageConfig$,
  UpdateBackendConfig$,
  UpdateBackendConfigCommand,
  UpdateBackendConfigRequest$,
  UpdateBackendConfigResponse$,
  UpdateBackendJob$,
  UpdateBackendJobCommand,
  UpdateBackendJobRequest$,
  UpdateBackendJobResponse$,
  UpdateBackendStorage$,
  UpdateBackendStorageCommand,
  UpdateBackendStorageRequest$,
  UpdateBackendStorageResourceConfig$,
  UpdateBackendStorageResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AmplifyBackendClient === "function");
assert(typeof AmplifyBackend === "function");
// commands
assert(typeof CloneBackendCommand === "function");
assert(typeof CloneBackend$ === "object");
assert(typeof CreateBackendCommand === "function");
assert(typeof CreateBackend$ === "object");
assert(typeof CreateBackendAPICommand === "function");
assert(typeof CreateBackendAPI$ === "object");
assert(typeof CreateBackendAuthCommand === "function");
assert(typeof CreateBackendAuth$ === "object");
assert(typeof CreateBackendConfigCommand === "function");
assert(typeof CreateBackendConfig$ === "object");
assert(typeof CreateBackendStorageCommand === "function");
assert(typeof CreateBackendStorage$ === "object");
assert(typeof CreateTokenCommand === "function");
assert(typeof CreateToken$ === "object");
assert(typeof DeleteBackendCommand === "function");
assert(typeof DeleteBackend$ === "object");
assert(typeof DeleteBackendAPICommand === "function");
assert(typeof DeleteBackendAPI$ === "object");
assert(typeof DeleteBackendAuthCommand === "function");
assert(typeof DeleteBackendAuth$ === "object");
assert(typeof DeleteBackendStorageCommand === "function");
assert(typeof DeleteBackendStorage$ === "object");
assert(typeof DeleteTokenCommand === "function");
assert(typeof DeleteToken$ === "object");
assert(typeof GenerateBackendAPIModelsCommand === "function");
assert(typeof GenerateBackendAPIModels$ === "object");
assert(typeof GetBackendCommand === "function");
assert(typeof GetBackend$ === "object");
assert(typeof GetBackendAPICommand === "function");
assert(typeof GetBackendAPI$ === "object");
assert(typeof GetBackendAPIModelsCommand === "function");
assert(typeof GetBackendAPIModels$ === "object");
assert(typeof GetBackendAuthCommand === "function");
assert(typeof GetBackendAuth$ === "object");
assert(typeof GetBackendJobCommand === "function");
assert(typeof GetBackendJob$ === "object");
assert(typeof GetBackendStorageCommand === "function");
assert(typeof GetBackendStorage$ === "object");
assert(typeof GetTokenCommand === "function");
assert(typeof GetToken$ === "object");
assert(typeof ImportBackendAuthCommand === "function");
assert(typeof ImportBackendAuth$ === "object");
assert(typeof ImportBackendStorageCommand === "function");
assert(typeof ImportBackendStorage$ === "object");
assert(typeof ListBackendJobsCommand === "function");
assert(typeof ListBackendJobs$ === "object");
assert(typeof ListS3BucketsCommand === "function");
assert(typeof ListS3Buckets$ === "object");
assert(typeof RemoveAllBackendsCommand === "function");
assert(typeof RemoveAllBackends$ === "object");
assert(typeof RemoveBackendConfigCommand === "function");
assert(typeof RemoveBackendConfig$ === "object");
assert(typeof UpdateBackendAPICommand === "function");
assert(typeof UpdateBackendAPI$ === "object");
assert(typeof UpdateBackendAuthCommand === "function");
assert(typeof UpdateBackendAuth$ === "object");
assert(typeof UpdateBackendConfigCommand === "function");
assert(typeof UpdateBackendConfig$ === "object");
assert(typeof UpdateBackendJobCommand === "function");
assert(typeof UpdateBackendJob$ === "object");
assert(typeof UpdateBackendStorageCommand === "function");
assert(typeof UpdateBackendStorage$ === "object");
// structural schemas
assert(typeof BackendAPIAppSyncAuthSettings$ === "object");
assert(typeof BackendAPIAuthType$ === "object");
assert(typeof BackendAPIConflictResolution$ === "object");
assert(typeof BackendAPIResourceConfig$ === "object");
assert(typeof BackendAuthAppleProviderConfig$ === "object");
assert(typeof BackendAuthSocialProviderConfig$ === "object");
assert(typeof BackendJobRespObj$ === "object");
assert(typeof BackendStoragePermissions$ === "object");
assert(typeof CloneBackendRequest$ === "object");
assert(typeof CloneBackendResponse$ === "object");
assert(typeof CreateBackendAPIRequest$ === "object");
assert(typeof CreateBackendAPIResponse$ === "object");
assert(typeof CreateBackendAuthForgotPasswordConfig$ === "object");
assert(typeof CreateBackendAuthIdentityPoolConfig$ === "object");
assert(typeof CreateBackendAuthMFAConfig$ === "object");
assert(typeof CreateBackendAuthOAuthConfig$ === "object");
assert(typeof CreateBackendAuthPasswordPolicyConfig$ === "object");
assert(typeof CreateBackendAuthRequest$ === "object");
assert(typeof CreateBackendAuthResourceConfig$ === "object");
assert(typeof CreateBackendAuthResponse$ === "object");
assert(typeof CreateBackendAuthUserPoolConfig$ === "object");
assert(typeof CreateBackendAuthVerificationMessageConfig$ === "object");
assert(typeof CreateBackendConfigRequest$ === "object");
assert(typeof CreateBackendConfigResponse$ === "object");
assert(typeof CreateBackendRequest$ === "object");
assert(typeof CreateBackendResponse$ === "object");
assert(typeof CreateBackendStorageRequest$ === "object");
assert(typeof CreateBackendStorageResourceConfig$ === "object");
assert(typeof CreateBackendStorageResponse$ === "object");
assert(typeof CreateTokenRequest$ === "object");
assert(typeof CreateTokenResponse$ === "object");
assert(typeof DeleteBackendAPIRequest$ === "object");
assert(typeof DeleteBackendAPIResponse$ === "object");
assert(typeof DeleteBackendAuthRequest$ === "object");
assert(typeof DeleteBackendAuthResponse$ === "object");
assert(typeof DeleteBackendRequest$ === "object");
assert(typeof DeleteBackendResponse$ === "object");
assert(typeof DeleteBackendStorageRequest$ === "object");
assert(typeof DeleteBackendStorageResponse$ === "object");
assert(typeof DeleteTokenRequest$ === "object");
assert(typeof DeleteTokenResponse$ === "object");
assert(typeof EmailSettings$ === "object");
assert(typeof GenerateBackendAPIModelsRequest$ === "object");
assert(typeof GenerateBackendAPIModelsResponse$ === "object");
assert(typeof GetBackendAPIModelsRequest$ === "object");
assert(typeof GetBackendAPIModelsResponse$ === "object");
assert(typeof GetBackendAPIRequest$ === "object");
assert(typeof GetBackendAPIResponse$ === "object");
assert(typeof GetBackendAuthRequest$ === "object");
assert(typeof GetBackendAuthResponse$ === "object");
assert(typeof GetBackendJobRequest$ === "object");
assert(typeof GetBackendJobResponse$ === "object");
assert(typeof GetBackendRequest$ === "object");
assert(typeof GetBackendResponse$ === "object");
assert(typeof GetBackendStorageRequest$ === "object");
assert(typeof GetBackendStorageResourceConfig$ === "object");
assert(typeof GetBackendStorageResponse$ === "object");
assert(typeof GetTokenRequest$ === "object");
assert(typeof GetTokenResponse$ === "object");
assert(typeof ImportBackendAuthRequest$ === "object");
assert(typeof ImportBackendAuthResponse$ === "object");
assert(typeof ImportBackendStorageRequest$ === "object");
assert(typeof ImportBackendStorageResponse$ === "object");
assert(typeof ListBackendJobsRequest$ === "object");
assert(typeof ListBackendJobsResponse$ === "object");
assert(typeof ListS3BucketsRequest$ === "object");
assert(typeof ListS3BucketsResponse$ === "object");
assert(typeof LoginAuthConfigReqObj$ === "object");
assert(typeof RemoveAllBackendsRequest$ === "object");
assert(typeof RemoveAllBackendsResponse$ === "object");
assert(typeof RemoveBackendConfigRequest$ === "object");
assert(typeof RemoveBackendConfigResponse$ === "object");
assert(typeof ResourceConfig$ === "object");
assert(typeof S3BucketInfo$ === "object");
assert(typeof Settings$ === "object");
assert(typeof SmsSettings$ === "object");
assert(typeof SocialProviderSettings$ === "object");
assert(typeof UpdateBackendAPIRequest$ === "object");
assert(typeof UpdateBackendAPIResponse$ === "object");
assert(typeof UpdateBackendAuthForgotPasswordConfig$ === "object");
assert(typeof UpdateBackendAuthIdentityPoolConfig$ === "object");
assert(typeof UpdateBackendAuthMFAConfig$ === "object");
assert(typeof UpdateBackendAuthOAuthConfig$ === "object");
assert(typeof UpdateBackendAuthPasswordPolicyConfig$ === "object");
assert(typeof UpdateBackendAuthRequest$ === "object");
assert(typeof UpdateBackendAuthResourceConfig$ === "object");
assert(typeof UpdateBackendAuthResponse$ === "object");
assert(typeof UpdateBackendAuthUserPoolConfig$ === "object");
assert(typeof UpdateBackendAuthVerificationMessageConfig$ === "object");
assert(typeof UpdateBackendConfigRequest$ === "object");
assert(typeof UpdateBackendConfigResponse$ === "object");
assert(typeof UpdateBackendJobRequest$ === "object");
assert(typeof UpdateBackendJobResponse$ === "object");
assert(typeof UpdateBackendStorageRequest$ === "object");
assert(typeof UpdateBackendStorageResourceConfig$ === "object");
assert(typeof UpdateBackendStorageResponse$ === "object");
// enums
assert(typeof AdditionalConstraintsElement === "object");
assert(typeof AuthenticatedElement === "object");
assert(typeof AuthResources === "object");
assert(typeof DeliveryMethod === "object");
assert(typeof MFAMode === "object");
assert(typeof MfaTypesElement === "object");
assert(typeof Mode === "object");
assert(typeof OAuthGrantType === "object");
assert(typeof OAuthScopesElement === "object");
assert(typeof RequiredSignUpAttributesElement === "object");
assert(typeof ResolutionStrategy === "object");
assert(typeof Service === "object");
assert(typeof ServiceName === "object");
assert(typeof SignInMethod === "object");
assert(typeof Status === "object");
assert(typeof UnAuthenticatedElement === "object");
// errors
assert(BadRequestException.prototype instanceof AmplifyBackendServiceException);
assert(typeof BadRequestException$ === "object");
assert(GatewayTimeoutException.prototype instanceof AmplifyBackendServiceException);
assert(typeof GatewayTimeoutException$ === "object");
assert(NotFoundException.prototype instanceof AmplifyBackendServiceException);
assert(typeof NotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof AmplifyBackendServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(AmplifyBackendServiceException.prototype instanceof Error);
console.log(`AmplifyBackend index test passed.`);
