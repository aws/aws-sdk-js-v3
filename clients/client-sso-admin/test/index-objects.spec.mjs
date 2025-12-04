import {
  ApplicationStatus,
  ApplicationVisibility,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
  AttachManagedPolicyToPermissionSetCommand,
  AuthenticationMethodType,
  CreateAccountAssignmentCommand,
  CreateApplicationAssignmentCommand,
  CreateApplicationCommand,
  CreateInstanceAccessControlAttributeConfigurationCommand,
  CreateInstanceCommand,
  CreatePermissionSetCommand,
  CreateTrustedTokenIssuerCommand,
  DeleteAccountAssignmentCommand,
  DeleteApplicationAccessScopeCommand,
  DeleteApplicationAssignmentCommand,
  DeleteApplicationAuthenticationMethodCommand,
  DeleteApplicationCommand,
  DeleteApplicationGrantCommand,
  DeleteInlinePolicyFromPermissionSetCommand,
  DeleteInstanceAccessControlAttributeConfigurationCommand,
  DeleteInstanceCommand,
  DeletePermissionSetCommand,
  DeletePermissionsBoundaryFromPermissionSetCommand,
  DeleteTrustedTokenIssuerCommand,
  DescribeAccountAssignmentCreationStatusCommand,
  DescribeAccountAssignmentDeletionStatusCommand,
  DescribeApplicationAssignmentCommand,
  DescribeApplicationCommand,
  DescribeApplicationProviderCommand,
  DescribeInstanceAccessControlAttributeConfigurationCommand,
  DescribeInstanceCommand,
  DescribePermissionSetCommand,
  DescribePermissionSetProvisioningStatusCommand,
  DescribeTrustedTokenIssuerCommand,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommand,
  DetachManagedPolicyFromPermissionSetCommand,
  FederationProtocol,
  GetApplicationAccessScopeCommand,
  GetApplicationAssignmentConfigurationCommand,
  GetApplicationAuthenticationMethodCommand,
  GetApplicationGrantCommand,
  GetApplicationSessionConfigurationCommand,
  GetInlinePolicyForPermissionSetCommand,
  GetPermissionsBoundaryForPermissionSetCommand,
  GrantType,
  InstanceAccessControlAttributeConfigurationStatus,
  InstanceStatus,
  JwksRetrievalOption,
  KmsKeyStatus,
  KmsKeyType,
  ListAccountAssignmentCreationStatusCommand,
  ListAccountAssignmentDeletionStatusCommand,
  ListAccountAssignmentsCommand,
  ListAccountAssignmentsForPrincipalCommand,
  ListAccountsForProvisionedPermissionSetCommand,
  ListApplicationAccessScopesCommand,
  ListApplicationAssignmentsCommand,
  ListApplicationAssignmentsForPrincipalCommand,
  ListApplicationAuthenticationMethodsCommand,
  ListApplicationGrantsCommand,
  ListApplicationProvidersCommand,
  ListApplicationsCommand,
  ListCustomerManagedPolicyReferencesInPermissionSetCommand,
  ListInstancesCommand,
  ListManagedPoliciesInPermissionSetCommand,
  ListPermissionSetProvisioningStatusCommand,
  ListPermissionSetsCommand,
  ListPermissionSetsProvisionedToAccountCommand,
  ListTagsForResourceCommand,
  ListTrustedTokenIssuersCommand,
  PrincipalType,
  ProvisionPermissionSetCommand,
  ProvisionTargetType,
  ProvisioningStatus,
  PutApplicationAccessScopeCommand,
  PutApplicationAssignmentConfigurationCommand,
  PutApplicationAuthenticationMethodCommand,
  PutApplicationGrantCommand,
  PutApplicationSessionConfigurationCommand,
  PutInlinePolicyToPermissionSetCommand,
  PutPermissionsBoundaryToPermissionSetCommand,
  SSOAdmin,
  SSOAdminClient,
  SSOAdminServiceException,
  SignInOrigin,
  StatusValues,
  TagResourceCommand,
  TargetType,
  TrustedTokenIssuerType,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateInstanceAccessControlAttributeConfigurationCommand,
  UpdateInstanceCommand,
  UpdatePermissionSetCommand,
  UpdateTrustedTokenIssuerCommand,
  UserBackgroundSessionApplicationStatus,
  paginateListAccountAssignmentCreationStatus,
  paginateListAccountAssignmentDeletionStatus,
  paginateListAccountAssignments,
  paginateListAccountAssignmentsForPrincipal,
  paginateListAccountsForProvisionedPermissionSet,
  paginateListApplicationAccessScopes,
  paginateListApplicationAssignments,
  paginateListApplicationAssignmentsForPrincipal,
  paginateListApplicationAuthenticationMethods,
  paginateListApplicationGrants,
  paginateListApplicationProviders,
  paginateListApplications,
  paginateListCustomerManagedPolicyReferencesInPermissionSet,
  paginateListInstances,
  paginateListManagedPoliciesInPermissionSet,
  paginateListPermissionSetProvisioningStatus,
  paginateListPermissionSets,
  paginateListPermissionSetsProvisionedToAccount,
  paginateListTagsForResource,
  paginateListTrustedTokenIssuers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSOAdminClient === "function")
assert(typeof SSOAdmin === "function")
// commands
assert(typeof AttachCustomerManagedPolicyReferenceToPermissionSetCommand === "function")
assert(typeof AttachManagedPolicyToPermissionSetCommand === "function")
assert(typeof CreateAccountAssignmentCommand === "function")
assert(typeof CreateApplicationCommand === "function")
assert(typeof CreateApplicationAssignmentCommand === "function")
assert(typeof CreateInstanceCommand === "function")
assert(typeof CreateInstanceAccessControlAttributeConfigurationCommand === "function")
assert(typeof CreatePermissionSetCommand === "function")
assert(typeof CreateTrustedTokenIssuerCommand === "function")
assert(typeof DeleteAccountAssignmentCommand === "function")
assert(typeof DeleteApplicationCommand === "function")
assert(typeof DeleteApplicationAccessScopeCommand === "function")
assert(typeof DeleteApplicationAssignmentCommand === "function")
assert(typeof DeleteApplicationAuthenticationMethodCommand === "function")
assert(typeof DeleteApplicationGrantCommand === "function")
assert(typeof DeleteInlinePolicyFromPermissionSetCommand === "function")
assert(typeof DeleteInstanceCommand === "function")
assert(typeof DeleteInstanceAccessControlAttributeConfigurationCommand === "function")
assert(typeof DeletePermissionsBoundaryFromPermissionSetCommand === "function")
assert(typeof DeletePermissionSetCommand === "function")
assert(typeof DeleteTrustedTokenIssuerCommand === "function")
assert(typeof DescribeAccountAssignmentCreationStatusCommand === "function")
assert(typeof DescribeAccountAssignmentDeletionStatusCommand === "function")
assert(typeof DescribeApplicationCommand === "function")
assert(typeof DescribeApplicationAssignmentCommand === "function")
assert(typeof DescribeApplicationProviderCommand === "function")
assert(typeof DescribeInstanceCommand === "function")
assert(typeof DescribeInstanceAccessControlAttributeConfigurationCommand === "function")
assert(typeof DescribePermissionSetCommand === "function")
assert(typeof DescribePermissionSetProvisioningStatusCommand === "function")
assert(typeof DescribeTrustedTokenIssuerCommand === "function")
assert(typeof DetachCustomerManagedPolicyReferenceFromPermissionSetCommand === "function")
assert(typeof DetachManagedPolicyFromPermissionSetCommand === "function")
assert(typeof GetApplicationAccessScopeCommand === "function")
assert(typeof GetApplicationAssignmentConfigurationCommand === "function")
assert(typeof GetApplicationAuthenticationMethodCommand === "function")
assert(typeof GetApplicationGrantCommand === "function")
assert(typeof GetApplicationSessionConfigurationCommand === "function")
assert(typeof GetInlinePolicyForPermissionSetCommand === "function")
assert(typeof GetPermissionsBoundaryForPermissionSetCommand === "function")
assert(typeof ListAccountAssignmentCreationStatusCommand === "function")
assert(typeof ListAccountAssignmentDeletionStatusCommand === "function")
assert(typeof ListAccountAssignmentsCommand === "function")
assert(typeof ListAccountAssignmentsForPrincipalCommand === "function")
assert(typeof ListAccountsForProvisionedPermissionSetCommand === "function")
assert(typeof ListApplicationAccessScopesCommand === "function")
assert(typeof ListApplicationAssignmentsCommand === "function")
assert(typeof ListApplicationAssignmentsForPrincipalCommand === "function")
assert(typeof ListApplicationAuthenticationMethodsCommand === "function")
assert(typeof ListApplicationGrantsCommand === "function")
assert(typeof ListApplicationProvidersCommand === "function")
assert(typeof ListApplicationsCommand === "function")
assert(typeof ListCustomerManagedPolicyReferencesInPermissionSetCommand === "function")
assert(typeof ListInstancesCommand === "function")
assert(typeof ListManagedPoliciesInPermissionSetCommand === "function")
assert(typeof ListPermissionSetProvisioningStatusCommand === "function")
assert(typeof ListPermissionSetsCommand === "function")
assert(typeof ListPermissionSetsProvisionedToAccountCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTrustedTokenIssuersCommand === "function")
assert(typeof ProvisionPermissionSetCommand === "function")
assert(typeof PutApplicationAccessScopeCommand === "function")
assert(typeof PutApplicationAssignmentConfigurationCommand === "function")
assert(typeof PutApplicationAuthenticationMethodCommand === "function")
assert(typeof PutApplicationGrantCommand === "function")
assert(typeof PutApplicationSessionConfigurationCommand === "function")
assert(typeof PutInlinePolicyToPermissionSetCommand === "function")
assert(typeof PutPermissionsBoundaryToPermissionSetCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateApplicationCommand === "function")
assert(typeof UpdateInstanceCommand === "function")
assert(typeof UpdateInstanceAccessControlAttributeConfigurationCommand === "function")
assert(typeof UpdatePermissionSetCommand === "function")
assert(typeof UpdateTrustedTokenIssuerCommand === "function")
// enums
assert(typeof ApplicationStatus === "object");
assert(typeof ApplicationVisibility === "object");
assert(typeof AuthenticationMethodType === "object");
assert(typeof FederationProtocol === "object");
assert(typeof GrantType === "object");
assert(typeof InstanceAccessControlAttributeConfigurationStatus === "object");
assert(typeof InstanceStatus === "object");
assert(typeof JwksRetrievalOption === "object");
assert(typeof KmsKeyStatus === "object");
assert(typeof KmsKeyType === "object");
assert(typeof PrincipalType === "object");
assert(typeof ProvisioningStatus === "object");
assert(typeof ProvisionTargetType === "object");
assert(typeof SignInOrigin === "object");
assert(typeof StatusValues === "object");
assert(typeof TargetType === "object");
assert(typeof TrustedTokenIssuerType === "object");
assert(typeof UserBackgroundSessionApplicationStatus === "object");
// errors
assert(SSOAdminServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListAccountAssignmentCreationStatus === "function")
assert(typeof paginateListAccountAssignmentDeletionStatus === "function")
assert(typeof paginateListAccountAssignments === "function")
assert(typeof paginateListAccountAssignmentsForPrincipal === "function")
assert(typeof paginateListAccountsForProvisionedPermissionSet === "function")
assert(typeof paginateListApplicationAccessScopes === "function")
assert(typeof paginateListApplicationAssignments === "function")
assert(typeof paginateListApplicationAssignmentsForPrincipal === "function")
assert(typeof paginateListApplicationAuthenticationMethods === "function")
assert(typeof paginateListApplicationGrants === "function")
assert(typeof paginateListApplicationProviders === "function")
assert(typeof paginateListApplications === "function")
assert(typeof paginateListCustomerManagedPolicyReferencesInPermissionSet === "function")
assert(typeof paginateListInstances === "function")
assert(typeof paginateListManagedPoliciesInPermissionSet === "function")
assert(typeof paginateListPermissionSetProvisioningStatus === "function")
assert(typeof paginateListPermissionSets === "function")
assert(typeof paginateListPermissionSetsProvisionedToAccount === "function")
assert(typeof paginateListTagsForResource === "function")
assert(typeof paginateListTrustedTokenIssuers === "function")
console.log(`SSOAdmin index test passed.`);
