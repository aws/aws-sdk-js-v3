import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessToken$,
  ConflictException,
  ConflictException$,
  CreateOAuth2Token$,
  CreateOAuth2TokenCommand,
  CreateOAuth2TokenRequest$,
  CreateOAuth2TokenRequestBody$,
  CreateOAuth2TokenResponse$,
  CreateOAuth2TokenResponseBody$,
  CreateOAuth2TokenWithIAM$,
  CreateOAuth2TokenWithIAMCommand,
  CreateOAuth2TokenWithIAMRequest$,
  CreateOAuth2TokenWithIAMResponse$,
  DeleteConsoleAuthorizationConfiguration$,
  DeleteConsoleAuthorizationConfigurationCommand,
  DeleteConsoleAuthorizationConfigurationInput$,
  DeleteConsoleAuthorizationConfigurationOutput$,
  DeleteResourcePermissionStatement$,
  DeleteResourcePermissionStatementCommand,
  DeleteResourcePermissionStatementInput$,
  DeleteResourcePermissionStatementOutput$,
  GetConsoleAuthorizationConfiguration$,
  GetConsoleAuthorizationConfigurationCommand,
  GetConsoleAuthorizationConfigurationInput$,
  GetConsoleAuthorizationConfigurationOutput$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyInput$,
  GetResourcePolicyOutput$,
  InternalServerException,
  InternalServerException$,
  IntrospectOAuth2TokenWithIAM$,
  IntrospectOAuth2TokenWithIAMCommand,
  IntrospectOAuth2TokenWithIAMRequest$,
  IntrospectOAuth2TokenWithIAMResponse$,
  ListResourcePermissionStatements$,
  ListResourcePermissionStatementsCommand,
  ListResourcePermissionStatementsInput$,
  ListResourcePermissionStatementsOutput$,
  OAuth2ErrorCode,
  paginateListResourcePermissionStatements,
  PermissionStatementSummary$,
  PolicyStatement$,
  PutConsoleAuthorizationConfiguration$,
  PutConsoleAuthorizationConfigurationCommand,
  PutConsoleAuthorizationConfigurationInput$,
  PutConsoleAuthorizationConfigurationOutput$,
  PutResourcePermissionStatement$,
  PutResourcePermissionStatementCommand,
  PutResourcePermissionStatementInput$,
  PutResourcePermissionStatementOutput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RevokeOAuth2TokenWithIAM$,
  RevokeOAuth2TokenWithIAMCommand,
  RevokeOAuth2TokenWithIAMRequest$,
  RevokeOAuth2TokenWithIAMResponse$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Signin,
  SigninClient,
  SigninResourceBasedPolicy$,
  SigninServiceException,
  TooManyRequestsError,
  TooManyRequestsError$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SigninClient === "function");
assert(typeof Signin === "function");
// commands
assert(typeof CreateOAuth2TokenCommand === "function");
assert(typeof CreateOAuth2Token$ === "object");
assert(typeof CreateOAuth2TokenWithIAMCommand === "function");
assert(typeof CreateOAuth2TokenWithIAM$ === "object");
assert(typeof DeleteConsoleAuthorizationConfigurationCommand === "function");
assert(typeof DeleteConsoleAuthorizationConfiguration$ === "object");
assert(typeof DeleteResourcePermissionStatementCommand === "function");
assert(typeof DeleteResourcePermissionStatement$ === "object");
assert(typeof GetConsoleAuthorizationConfigurationCommand === "function");
assert(typeof GetConsoleAuthorizationConfiguration$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof IntrospectOAuth2TokenWithIAMCommand === "function");
assert(typeof IntrospectOAuth2TokenWithIAM$ === "object");
assert(typeof ListResourcePermissionStatementsCommand === "function");
assert(typeof ListResourcePermissionStatements$ === "object");
assert(typeof PutConsoleAuthorizationConfigurationCommand === "function");
assert(typeof PutConsoleAuthorizationConfiguration$ === "object");
assert(typeof PutResourcePermissionStatementCommand === "function");
assert(typeof PutResourcePermissionStatement$ === "object");
assert(typeof RevokeOAuth2TokenWithIAMCommand === "function");
assert(typeof RevokeOAuth2TokenWithIAM$ === "object");
// structural schemas
assert(typeof AccessToken$ === "object");
assert(typeof CreateOAuth2TokenRequest$ === "object");
assert(typeof CreateOAuth2TokenRequestBody$ === "object");
assert(typeof CreateOAuth2TokenResponse$ === "object");
assert(typeof CreateOAuth2TokenResponseBody$ === "object");
assert(typeof CreateOAuth2TokenWithIAMRequest$ === "object");
assert(typeof CreateOAuth2TokenWithIAMResponse$ === "object");
assert(typeof DeleteConsoleAuthorizationConfigurationInput$ === "object");
assert(typeof DeleteConsoleAuthorizationConfigurationOutput$ === "object");
assert(typeof DeleteResourcePermissionStatementInput$ === "object");
assert(typeof DeleteResourcePermissionStatementOutput$ === "object");
assert(typeof GetConsoleAuthorizationConfigurationInput$ === "object");
assert(typeof GetConsoleAuthorizationConfigurationOutput$ === "object");
assert(typeof GetResourcePolicyInput$ === "object");
assert(typeof GetResourcePolicyOutput$ === "object");
assert(typeof IntrospectOAuth2TokenWithIAMRequest$ === "object");
assert(typeof IntrospectOAuth2TokenWithIAMResponse$ === "object");
assert(typeof ListResourcePermissionStatementsInput$ === "object");
assert(typeof ListResourcePermissionStatementsOutput$ === "object");
assert(typeof PermissionStatementSummary$ === "object");
assert(typeof PolicyStatement$ === "object");
assert(typeof PutConsoleAuthorizationConfigurationInput$ === "object");
assert(typeof PutConsoleAuthorizationConfigurationOutput$ === "object");
assert(typeof PutResourcePermissionStatementInput$ === "object");
assert(typeof PutResourcePermissionStatementOutput$ === "object");
assert(typeof RevokeOAuth2TokenWithIAMRequest$ === "object");
assert(typeof RevokeOAuth2TokenWithIAMResponse$ === "object");
assert(typeof SigninResourceBasedPolicy$ === "object");
// enums
assert(typeof OAuth2ErrorCode === "object");
// errors
assert(AccessDeniedException.prototype instanceof SigninServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SigninServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SigninServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SigninServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SigninServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TooManyRequestsError.prototype instanceof SigninServiceException);
assert(typeof TooManyRequestsError$ === "object");
assert(ValidationException.prototype instanceof SigninServiceException);
assert(typeof ValidationException$ === "object");
assert(SigninServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListResourcePermissionStatements === "function");
console.log(`Signin index test passed.`);
