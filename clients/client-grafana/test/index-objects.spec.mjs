import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountAccessType,
  AssertionAttributes$,
  AssociateLicense$,
  AssociateLicenseCommand,
  AssociateLicenseRequest$,
  AssociateLicenseResponse$,
  AuthenticationDescription$,
  AuthenticationProviderTypes,
  AuthenticationSummary$,
  AwsSsoAuthentication$,
  ConflictException,
  ConflictException$,
  CreateWorkspace$,
  CreateWorkspaceApiKey$,
  CreateWorkspaceApiKeyCommand,
  CreateWorkspaceApiKeyRequest$,
  CreateWorkspaceApiKeyResponse$,
  CreateWorkspaceCommand,
  CreateWorkspaceRequest$,
  CreateWorkspaceResponse$,
  CreateWorkspaceServiceAccount$,
  CreateWorkspaceServiceAccountCommand,
  CreateWorkspaceServiceAccountRequest$,
  CreateWorkspaceServiceAccountResponse$,
  CreateWorkspaceServiceAccountToken$,
  CreateWorkspaceServiceAccountTokenCommand,
  CreateWorkspaceServiceAccountTokenRequest$,
  CreateWorkspaceServiceAccountTokenResponse$,
  DataSourceType,
  DeleteWorkspace$,
  DeleteWorkspaceApiKey$,
  DeleteWorkspaceApiKeyCommand,
  DeleteWorkspaceApiKeyRequest$,
  DeleteWorkspaceApiKeyResponse$,
  DeleteWorkspaceCommand,
  DeleteWorkspaceRequest$,
  DeleteWorkspaceResponse$,
  DeleteWorkspaceServiceAccount$,
  DeleteWorkspaceServiceAccountCommand,
  DeleteWorkspaceServiceAccountRequest$,
  DeleteWorkspaceServiceAccountResponse$,
  DeleteWorkspaceServiceAccountToken$,
  DeleteWorkspaceServiceAccountTokenCommand,
  DeleteWorkspaceServiceAccountTokenRequest$,
  DeleteWorkspaceServiceAccountTokenResponse$,
  DescribeWorkspace$,
  DescribeWorkspaceAuthentication$,
  DescribeWorkspaceAuthenticationCommand,
  DescribeWorkspaceAuthenticationRequest$,
  DescribeWorkspaceAuthenticationResponse$,
  DescribeWorkspaceCommand,
  DescribeWorkspaceConfiguration$,
  DescribeWorkspaceConfigurationCommand,
  DescribeWorkspaceConfigurationRequest$,
  DescribeWorkspaceConfigurationResponse$,
  DescribeWorkspaceRequest$,
  DescribeWorkspaceResponse$,
  DisassociateLicense$,
  DisassociateLicenseCommand,
  DisassociateLicenseRequest$,
  DisassociateLicenseResponse$,
  Grafana,
  GrafanaClient,
  GrafanaServiceException,
  IdpMetadata$,
  InternalServerException,
  InternalServerException$,
  LicenseType,
  ListPermissions$,
  ListPermissionsCommand,
  ListPermissionsRequest$,
  ListPermissionsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListVersions$,
  ListVersionsCommand,
  ListVersionsRequest$,
  ListVersionsResponse$,
  ListWorkspaces$,
  ListWorkspacesCommand,
  ListWorkspaceServiceAccounts$,
  ListWorkspaceServiceAccountsCommand,
  ListWorkspaceServiceAccountsRequest$,
  ListWorkspaceServiceAccountsResponse$,
  ListWorkspaceServiceAccountTokens$,
  ListWorkspaceServiceAccountTokensCommand,
  ListWorkspaceServiceAccountTokensRequest$,
  ListWorkspaceServiceAccountTokensResponse$,
  ListWorkspacesRequest$,
  ListWorkspacesResponse$,
  NetworkAccessConfiguration$,
  NotificationDestinationType,
  paginateListPermissions,
  paginateListVersions,
  paginateListWorkspaces,
  paginateListWorkspaceServiceAccounts,
  paginateListWorkspaceServiceAccountTokens,
  PermissionEntry$,
  PermissionType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Role,
  RoleValues$,
  SamlAuthentication$,
  SamlConfiguration$,
  SamlConfigurationStatus,
  ServiceAccountSummary$,
  ServiceAccountTokenSummary$,
  ServiceAccountTokenSummaryWithKey$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAction,
  UpdateError$,
  UpdateInstruction$,
  UpdatePermissions$,
  UpdatePermissionsCommand,
  UpdatePermissionsRequest$,
  UpdatePermissionsResponse$,
  UpdateWorkspace$,
  UpdateWorkspaceAuthentication$,
  UpdateWorkspaceAuthenticationCommand,
  UpdateWorkspaceAuthenticationRequest$,
  UpdateWorkspaceAuthenticationResponse$,
  UpdateWorkspaceCommand,
  UpdateWorkspaceConfiguration$,
  UpdateWorkspaceConfigurationCommand,
  UpdateWorkspaceConfigurationRequest$,
  UpdateWorkspaceConfigurationResponse$,
  UpdateWorkspaceRequest$,
  UpdateWorkspaceResponse$,
  User$,
  UserType,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VpcConfiguration$,
  WorkspaceDescription$,
  WorkspaceStatus,
  WorkspaceSummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GrafanaClient === "function");
assert(typeof Grafana === "function");
// commands
assert(typeof AssociateLicenseCommand === "function");
assert(typeof AssociateLicense$ === "object");
assert(typeof CreateWorkspaceCommand === "function");
assert(typeof CreateWorkspace$ === "object");
assert(typeof CreateWorkspaceApiKeyCommand === "function");
assert(typeof CreateWorkspaceApiKey$ === "object");
assert(typeof CreateWorkspaceServiceAccountCommand === "function");
assert(typeof CreateWorkspaceServiceAccount$ === "object");
assert(typeof CreateWorkspaceServiceAccountTokenCommand === "function");
assert(typeof CreateWorkspaceServiceAccountToken$ === "object");
assert(typeof DeleteWorkspaceCommand === "function");
assert(typeof DeleteWorkspace$ === "object");
assert(typeof DeleteWorkspaceApiKeyCommand === "function");
assert(typeof DeleteWorkspaceApiKey$ === "object");
assert(typeof DeleteWorkspaceServiceAccountCommand === "function");
assert(typeof DeleteWorkspaceServiceAccount$ === "object");
assert(typeof DeleteWorkspaceServiceAccountTokenCommand === "function");
assert(typeof DeleteWorkspaceServiceAccountToken$ === "object");
assert(typeof DescribeWorkspaceCommand === "function");
assert(typeof DescribeWorkspace$ === "object");
assert(typeof DescribeWorkspaceAuthenticationCommand === "function");
assert(typeof DescribeWorkspaceAuthentication$ === "object");
assert(typeof DescribeWorkspaceConfigurationCommand === "function");
assert(typeof DescribeWorkspaceConfiguration$ === "object");
assert(typeof DisassociateLicenseCommand === "function");
assert(typeof DisassociateLicense$ === "object");
assert(typeof ListPermissionsCommand === "function");
assert(typeof ListPermissions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListVersionsCommand === "function");
assert(typeof ListVersions$ === "object");
assert(typeof ListWorkspacesCommand === "function");
assert(typeof ListWorkspaces$ === "object");
assert(typeof ListWorkspaceServiceAccountsCommand === "function");
assert(typeof ListWorkspaceServiceAccounts$ === "object");
assert(typeof ListWorkspaceServiceAccountTokensCommand === "function");
assert(typeof ListWorkspaceServiceAccountTokens$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdatePermissionsCommand === "function");
assert(typeof UpdatePermissions$ === "object");
assert(typeof UpdateWorkspaceCommand === "function");
assert(typeof UpdateWorkspace$ === "object");
assert(typeof UpdateWorkspaceAuthenticationCommand === "function");
assert(typeof UpdateWorkspaceAuthentication$ === "object");
assert(typeof UpdateWorkspaceConfigurationCommand === "function");
assert(typeof UpdateWorkspaceConfiguration$ === "object");
// structural schemas
assert(typeof AssertionAttributes$ === "object");
assert(typeof AssociateLicenseRequest$ === "object");
assert(typeof AssociateLicenseResponse$ === "object");
assert(typeof AuthenticationDescription$ === "object");
assert(typeof AuthenticationSummary$ === "object");
assert(typeof AwsSsoAuthentication$ === "object");
assert(typeof CreateWorkspaceApiKeyRequest$ === "object");
assert(typeof CreateWorkspaceApiKeyResponse$ === "object");
assert(typeof CreateWorkspaceRequest$ === "object");
assert(typeof CreateWorkspaceResponse$ === "object");
assert(typeof CreateWorkspaceServiceAccountRequest$ === "object");
assert(typeof CreateWorkspaceServiceAccountResponse$ === "object");
assert(typeof CreateWorkspaceServiceAccountTokenRequest$ === "object");
assert(typeof CreateWorkspaceServiceAccountTokenResponse$ === "object");
assert(typeof DeleteWorkspaceApiKeyRequest$ === "object");
assert(typeof DeleteWorkspaceApiKeyResponse$ === "object");
assert(typeof DeleteWorkspaceRequest$ === "object");
assert(typeof DeleteWorkspaceResponse$ === "object");
assert(typeof DeleteWorkspaceServiceAccountRequest$ === "object");
assert(typeof DeleteWorkspaceServiceAccountResponse$ === "object");
assert(typeof DeleteWorkspaceServiceAccountTokenRequest$ === "object");
assert(typeof DeleteWorkspaceServiceAccountTokenResponse$ === "object");
assert(typeof DescribeWorkspaceAuthenticationRequest$ === "object");
assert(typeof DescribeWorkspaceAuthenticationResponse$ === "object");
assert(typeof DescribeWorkspaceConfigurationRequest$ === "object");
assert(typeof DescribeWorkspaceConfigurationResponse$ === "object");
assert(typeof DescribeWorkspaceRequest$ === "object");
assert(typeof DescribeWorkspaceResponse$ === "object");
assert(typeof DisassociateLicenseRequest$ === "object");
assert(typeof DisassociateLicenseResponse$ === "object");
assert(typeof IdpMetadata$ === "object");
assert(typeof ListPermissionsRequest$ === "object");
assert(typeof ListPermissionsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListVersionsRequest$ === "object");
assert(typeof ListVersionsResponse$ === "object");
assert(typeof ListWorkspaceServiceAccountsRequest$ === "object");
assert(typeof ListWorkspaceServiceAccountsResponse$ === "object");
assert(typeof ListWorkspaceServiceAccountTokensRequest$ === "object");
assert(typeof ListWorkspaceServiceAccountTokensResponse$ === "object");
assert(typeof ListWorkspacesRequest$ === "object");
assert(typeof ListWorkspacesResponse$ === "object");
assert(typeof NetworkAccessConfiguration$ === "object");
assert(typeof PermissionEntry$ === "object");
assert(typeof RoleValues$ === "object");
assert(typeof SamlAuthentication$ === "object");
assert(typeof SamlConfiguration$ === "object");
assert(typeof ServiceAccountSummary$ === "object");
assert(typeof ServiceAccountTokenSummary$ === "object");
assert(typeof ServiceAccountTokenSummaryWithKey$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateError$ === "object");
assert(typeof UpdateInstruction$ === "object");
assert(typeof UpdatePermissionsRequest$ === "object");
assert(typeof UpdatePermissionsResponse$ === "object");
assert(typeof UpdateWorkspaceAuthenticationRequest$ === "object");
assert(typeof UpdateWorkspaceAuthenticationResponse$ === "object");
assert(typeof UpdateWorkspaceConfigurationRequest$ === "object");
assert(typeof UpdateWorkspaceConfigurationResponse$ === "object");
assert(typeof UpdateWorkspaceRequest$ === "object");
assert(typeof UpdateWorkspaceResponse$ === "object");
assert(typeof User$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VpcConfiguration$ === "object");
assert(typeof WorkspaceDescription$ === "object");
assert(typeof WorkspaceSummary$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof GrafanaServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof GrafanaServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof GrafanaServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof GrafanaServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof GrafanaServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof GrafanaServiceException);
assert(typeof ValidationException$ === "object");
assert(GrafanaServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListPermissions === "function");
assert(typeof paginateListVersions === "function");
assert(typeof paginateListWorkspaceServiceAccountTokens === "function");
assert(typeof paginateListWorkspaceServiceAccounts === "function");
assert(typeof paginateListWorkspaces === "function");
console.log(`Grafana index test passed.`);
