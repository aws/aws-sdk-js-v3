import {
  AccessDeniedException,
  AccountAccessType,
  AssociateLicenseCommand,
  AuthenticationProviderTypes,
  ConflictException,
  CreateWorkspaceApiKeyCommand,
  CreateWorkspaceCommand,
  CreateWorkspaceServiceAccountCommand,
  CreateWorkspaceServiceAccountTokenCommand,
  DataSourceType,
  DeleteWorkspaceApiKeyCommand,
  DeleteWorkspaceCommand,
  DeleteWorkspaceServiceAccountCommand,
  DeleteWorkspaceServiceAccountTokenCommand,
  DescribeWorkspaceAuthenticationCommand,
  DescribeWorkspaceCommand,
  DescribeWorkspaceConfigurationCommand,
  DisassociateLicenseCommand,
  Grafana,
  GrafanaClient,
  GrafanaServiceException,
  InternalServerException,
  LicenseType,
  ListPermissionsCommand,
  ListTagsForResourceCommand,
  ListVersionsCommand,
  ListWorkspaceServiceAccountTokensCommand,
  ListWorkspaceServiceAccountsCommand,
  ListWorkspacesCommand,
  NotificationDestinationType,
  PermissionType,
  ResourceNotFoundException,
  Role,
  SamlConfigurationStatus,
  ServiceQuotaExceededException,
  TagResourceCommand,
  ThrottlingException,
  UntagResourceCommand,
  UpdateAction,
  UpdatePermissionsCommand,
  UpdateWorkspaceAuthenticationCommand,
  UpdateWorkspaceCommand,
  UpdateWorkspaceConfigurationCommand,
  UserType,
  ValidationException,
  ValidationExceptionReason,
  WorkspaceStatus,
  paginateListPermissions,
  paginateListVersions,
  paginateListWorkspaceServiceAccountTokens,
  paginateListWorkspaceServiceAccounts,
  paginateListWorkspaces,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GrafanaClient === "function");
assert(typeof Grafana === "function");
// commands
assert(typeof AssociateLicenseCommand === "function");
assert(typeof CreateWorkspaceCommand === "function");
assert(typeof CreateWorkspaceApiKeyCommand === "function");
assert(typeof CreateWorkspaceServiceAccountCommand === "function");
assert(typeof CreateWorkspaceServiceAccountTokenCommand === "function");
assert(typeof DeleteWorkspaceCommand === "function");
assert(typeof DeleteWorkspaceApiKeyCommand === "function");
assert(typeof DeleteWorkspaceServiceAccountCommand === "function");
assert(typeof DeleteWorkspaceServiceAccountTokenCommand === "function");
assert(typeof DescribeWorkspaceCommand === "function");
assert(typeof DescribeWorkspaceAuthenticationCommand === "function");
assert(typeof DescribeWorkspaceConfigurationCommand === "function");
assert(typeof DisassociateLicenseCommand === "function");
assert(typeof ListPermissionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListVersionsCommand === "function");
assert(typeof ListWorkspacesCommand === "function");
assert(typeof ListWorkspaceServiceAccountsCommand === "function");
assert(typeof ListWorkspaceServiceAccountTokensCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdatePermissionsCommand === "function");
assert(typeof UpdateWorkspaceCommand === "function");
assert(typeof UpdateWorkspaceAuthenticationCommand === "function");
assert(typeof UpdateWorkspaceConfigurationCommand === "function");
// enums
assert(typeof AccountAccessType === "object");
assert(typeof AuthenticationProviderTypes === "object");
assert(typeof DataSourceType === "object");
assert(typeof LicenseType === "object");
assert(typeof NotificationDestinationType === "object");
assert(typeof PermissionType === "object");
assert(typeof Role === "object");
assert(typeof SamlConfigurationStatus === "object");
assert(typeof UpdateAction === "object");
assert(typeof UserType === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof WorkspaceStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof GrafanaServiceException);
assert(ConflictException.prototype instanceof GrafanaServiceException);
assert(InternalServerException.prototype instanceof GrafanaServiceException);
assert(ResourceNotFoundException.prototype instanceof GrafanaServiceException);
assert(ServiceQuotaExceededException.prototype instanceof GrafanaServiceException);
assert(ThrottlingException.prototype instanceof GrafanaServiceException);
assert(ValidationException.prototype instanceof GrafanaServiceException);
assert(GrafanaServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListPermissions === "function");
assert(typeof paginateListVersions === "function");
assert(typeof paginateListWorkspaceServiceAccountTokens === "function");
assert(typeof paginateListWorkspaceServiceAccounts === "function");
assert(typeof paginateListWorkspaces === "function");
console.log(`Grafana index test passed.`);
