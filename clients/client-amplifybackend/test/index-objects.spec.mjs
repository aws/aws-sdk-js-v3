import {
  AdditionalConstraintsElement,
  AmplifyBackend,
  AmplifyBackendClient,
  AmplifyBackendServiceException,
  AuthResources,
  AuthenticatedElement,
  BadRequestException,
  CloneBackendCommand,
  CreateBackendAPICommand,
  CreateBackendAuthCommand,
  CreateBackendCommand,
  CreateBackendConfigCommand,
  CreateBackendStorageCommand,
  CreateTokenCommand,
  DeleteBackendAPICommand,
  DeleteBackendAuthCommand,
  DeleteBackendCommand,
  DeleteBackendStorageCommand,
  DeleteTokenCommand,
  DeliveryMethod,
  GatewayTimeoutException,
  GenerateBackendAPIModelsCommand,
  GetBackendAPICommand,
  GetBackendAPIModelsCommand,
  GetBackendAuthCommand,
  GetBackendCommand,
  GetBackendJobCommand,
  GetBackendStorageCommand,
  GetTokenCommand,
  ImportBackendAuthCommand,
  ImportBackendStorageCommand,
  ListBackendJobsCommand,
  ListS3BucketsCommand,
  MFAMode,
  MfaTypesElement,
  Mode,
  NotFoundException,
  OAuthGrantType,
  OAuthScopesElement,
  RemoveAllBackendsCommand,
  RemoveBackendConfigCommand,
  RequiredSignUpAttributesElement,
  ResolutionStrategy,
  Service,
  ServiceName,
  SignInMethod,
  Status,
  TooManyRequestsException,
  UnAuthenticatedElement,
  UpdateBackendAPICommand,
  UpdateBackendAuthCommand,
  UpdateBackendConfigCommand,
  UpdateBackendJobCommand,
  UpdateBackendStorageCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AmplifyBackendClient === "function");
assert(typeof AmplifyBackend === "function");
// commands
assert(typeof CloneBackendCommand === "function");
assert(typeof CreateBackendCommand === "function");
assert(typeof CreateBackendAPICommand === "function");
assert(typeof CreateBackendAuthCommand === "function");
assert(typeof CreateBackendConfigCommand === "function");
assert(typeof CreateBackendStorageCommand === "function");
assert(typeof CreateTokenCommand === "function");
assert(typeof DeleteBackendCommand === "function");
assert(typeof DeleteBackendAPICommand === "function");
assert(typeof DeleteBackendAuthCommand === "function");
assert(typeof DeleteBackendStorageCommand === "function");
assert(typeof DeleteTokenCommand === "function");
assert(typeof GenerateBackendAPIModelsCommand === "function");
assert(typeof GetBackendCommand === "function");
assert(typeof GetBackendAPICommand === "function");
assert(typeof GetBackendAPIModelsCommand === "function");
assert(typeof GetBackendAuthCommand === "function");
assert(typeof GetBackendJobCommand === "function");
assert(typeof GetBackendStorageCommand === "function");
assert(typeof GetTokenCommand === "function");
assert(typeof ImportBackendAuthCommand === "function");
assert(typeof ImportBackendStorageCommand === "function");
assert(typeof ListBackendJobsCommand === "function");
assert(typeof ListS3BucketsCommand === "function");
assert(typeof RemoveAllBackendsCommand === "function");
assert(typeof RemoveBackendConfigCommand === "function");
assert(typeof UpdateBackendAPICommand === "function");
assert(typeof UpdateBackendAuthCommand === "function");
assert(typeof UpdateBackendConfigCommand === "function");
assert(typeof UpdateBackendJobCommand === "function");
assert(typeof UpdateBackendStorageCommand === "function");
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
assert(GatewayTimeoutException.prototype instanceof AmplifyBackendServiceException);
assert(NotFoundException.prototype instanceof AmplifyBackendServiceException);
assert(TooManyRequestsException.prototype instanceof AmplifyBackendServiceException);
assert(AmplifyBackendServiceException.prototype instanceof Error);
console.log(`AmplifyBackend index test passed.`);
