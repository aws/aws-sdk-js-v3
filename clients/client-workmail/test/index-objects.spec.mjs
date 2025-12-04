import {
  AccessControlRuleEffect,
  AccessEffect,
  AssociateDelegateToResourceCommand,
  AssociateMemberToGroupCommand,
  AssumeImpersonationRoleCommand,
  AvailabilityProviderType,
  CancelMailboxExportJobCommand,
  CreateAliasCommand,
  CreateAvailabilityConfigurationCommand,
  CreateGroupCommand,
  CreateIdentityCenterApplicationCommand,
  CreateImpersonationRoleCommand,
  CreateMobileDeviceAccessRuleCommand,
  CreateOrganizationCommand,
  CreateResourceCommand,
  CreateUserCommand,
  DeleteAccessControlRuleCommand,
  DeleteAliasCommand,
  DeleteAvailabilityConfigurationCommand,
  DeleteEmailMonitoringConfigurationCommand,
  DeleteGroupCommand,
  DeleteIdentityCenterApplicationCommand,
  DeleteIdentityProviderConfigurationCommand,
  DeleteImpersonationRoleCommand,
  DeleteMailboxPermissionsCommand,
  DeleteMobileDeviceAccessOverrideCommand,
  DeleteMobileDeviceAccessRuleCommand,
  DeleteOrganizationCommand,
  DeletePersonalAccessTokenCommand,
  DeleteResourceCommand,
  DeleteRetentionPolicyCommand,
  DeleteUserCommand,
  DeregisterFromWorkMailCommand,
  DeregisterMailDomainCommand,
  DescribeEmailMonitoringConfigurationCommand,
  DescribeEntityCommand,
  DescribeGroupCommand,
  DescribeIdentityProviderConfigurationCommand,
  DescribeInboundDmarcSettingsCommand,
  DescribeMailboxExportJobCommand,
  DescribeOrganizationCommand,
  DescribeResourceCommand,
  DescribeUserCommand,
  DisassociateDelegateFromResourceCommand,
  DisassociateMemberFromGroupCommand,
  DnsRecordVerificationStatus,
  EntityState,
  EntityType,
  FolderName,
  GetAccessControlEffectCommand,
  GetDefaultRetentionPolicyCommand,
  GetImpersonationRoleCommand,
  GetImpersonationRoleEffectCommand,
  GetMailDomainCommand,
  GetMailboxDetailsCommand,
  GetMobileDeviceAccessEffectCommand,
  GetMobileDeviceAccessOverrideCommand,
  GetPersonalAccessTokenMetadataCommand,
  IdentityProviderAuthenticationMode,
  ImpersonationRoleType,
  ListAccessControlRulesCommand,
  ListAliasesCommand,
  ListAvailabilityConfigurationsCommand,
  ListGroupMembersCommand,
  ListGroupsCommand,
  ListGroupsForEntityCommand,
  ListImpersonationRolesCommand,
  ListMailDomainsCommand,
  ListMailboxExportJobsCommand,
  ListMailboxPermissionsCommand,
  ListMobileDeviceAccessOverridesCommand,
  ListMobileDeviceAccessRulesCommand,
  ListOrganizationsCommand,
  ListPersonalAccessTokensCommand,
  ListResourceDelegatesCommand,
  ListResourcesCommand,
  ListTagsForResourceCommand,
  ListUsersCommand,
  MailboxExportJobState,
  MemberType,
  MobileDeviceAccessRuleEffect,
  PermissionType,
  PersonalAccessTokenConfigurationStatus,
  PutAccessControlRuleCommand,
  PutEmailMonitoringConfigurationCommand,
  PutIdentityProviderConfigurationCommand,
  PutInboundDmarcSettingsCommand,
  PutMailboxPermissionsCommand,
  PutMobileDeviceAccessOverrideCommand,
  PutRetentionPolicyCommand,
  RegisterMailDomainCommand,
  RegisterToWorkMailCommand,
  ResetPasswordCommand,
  ResourceType,
  RetentionAction,
  StartMailboxExportJobCommand,
  TagResourceCommand,
  TestAvailabilityConfigurationCommand,
  UntagResourceCommand,
  UpdateAvailabilityConfigurationCommand,
  UpdateDefaultMailDomainCommand,
  UpdateGroupCommand,
  UpdateImpersonationRoleCommand,
  UpdateMailboxQuotaCommand,
  UpdateMobileDeviceAccessRuleCommand,
  UpdatePrimaryEmailAddressCommand,
  UpdateResourceCommand,
  UpdateUserCommand,
  UserRole,
  WorkMail,
  WorkMailClient,
  WorkMailServiceException,
  paginateListAliases,
  paginateListAvailabilityConfigurations,
  paginateListGroupMembers,
  paginateListGroups,
  paginateListGroupsForEntity,
  paginateListImpersonationRoles,
  paginateListMailDomains,
  paginateListMailboxExportJobs,
  paginateListMailboxPermissions,
  paginateListMobileDeviceAccessOverrides,
  paginateListOrganizations,
  paginateListPersonalAccessTokens,
  paginateListResourceDelegates,
  paginateListResources,
  paginateListUsers,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WorkMailClient === "function");
assert(typeof WorkMail === "function");
// commands
assert(typeof AssociateDelegateToResourceCommand === "function");
assert(typeof AssociateMemberToGroupCommand === "function");
assert(typeof AssumeImpersonationRoleCommand === "function");
assert(typeof CancelMailboxExportJobCommand === "function");
assert(typeof CreateAliasCommand === "function");
assert(typeof CreateAvailabilityConfigurationCommand === "function");
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateIdentityCenterApplicationCommand === "function");
assert(typeof CreateImpersonationRoleCommand === "function");
assert(typeof CreateMobileDeviceAccessRuleCommand === "function");
assert(typeof CreateOrganizationCommand === "function");
assert(typeof CreateResourceCommand === "function");
assert(typeof CreateUserCommand === "function");
assert(typeof DeleteAccessControlRuleCommand === "function");
assert(typeof DeleteAliasCommand === "function");
assert(typeof DeleteAvailabilityConfigurationCommand === "function");
assert(typeof DeleteEmailMonitoringConfigurationCommand === "function");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteIdentityCenterApplicationCommand === "function");
assert(typeof DeleteIdentityProviderConfigurationCommand === "function");
assert(typeof DeleteImpersonationRoleCommand === "function");
assert(typeof DeleteMailboxPermissionsCommand === "function");
assert(typeof DeleteMobileDeviceAccessOverrideCommand === "function");
assert(typeof DeleteMobileDeviceAccessRuleCommand === "function");
assert(typeof DeleteOrganizationCommand === "function");
assert(typeof DeletePersonalAccessTokenCommand === "function");
assert(typeof DeleteResourceCommand === "function");
assert(typeof DeleteRetentionPolicyCommand === "function");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeregisterFromWorkMailCommand === "function");
assert(typeof DeregisterMailDomainCommand === "function");
assert(typeof DescribeEmailMonitoringConfigurationCommand === "function");
assert(typeof DescribeEntityCommand === "function");
assert(typeof DescribeGroupCommand === "function");
assert(typeof DescribeIdentityProviderConfigurationCommand === "function");
assert(typeof DescribeInboundDmarcSettingsCommand === "function");
assert(typeof DescribeMailboxExportJobCommand === "function");
assert(typeof DescribeOrganizationCommand === "function");
assert(typeof DescribeResourceCommand === "function");
assert(typeof DescribeUserCommand === "function");
assert(typeof DisassociateDelegateFromResourceCommand === "function");
assert(typeof DisassociateMemberFromGroupCommand === "function");
assert(typeof GetAccessControlEffectCommand === "function");
assert(typeof GetDefaultRetentionPolicyCommand === "function");
assert(typeof GetImpersonationRoleCommand === "function");
assert(typeof GetImpersonationRoleEffectCommand === "function");
assert(typeof GetMailboxDetailsCommand === "function");
assert(typeof GetMailDomainCommand === "function");
assert(typeof GetMobileDeviceAccessEffectCommand === "function");
assert(typeof GetMobileDeviceAccessOverrideCommand === "function");
assert(typeof GetPersonalAccessTokenMetadataCommand === "function");
assert(typeof ListAccessControlRulesCommand === "function");
assert(typeof ListAliasesCommand === "function");
assert(typeof ListAvailabilityConfigurationsCommand === "function");
assert(typeof ListGroupMembersCommand === "function");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroupsForEntityCommand === "function");
assert(typeof ListImpersonationRolesCommand === "function");
assert(typeof ListMailboxExportJobsCommand === "function");
assert(typeof ListMailboxPermissionsCommand === "function");
assert(typeof ListMailDomainsCommand === "function");
assert(typeof ListMobileDeviceAccessOverridesCommand === "function");
assert(typeof ListMobileDeviceAccessRulesCommand === "function");
assert(typeof ListOrganizationsCommand === "function");
assert(typeof ListPersonalAccessTokensCommand === "function");
assert(typeof ListResourceDelegatesCommand === "function");
assert(typeof ListResourcesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListUsersCommand === "function");
assert(typeof PutAccessControlRuleCommand === "function");
assert(typeof PutEmailMonitoringConfigurationCommand === "function");
assert(typeof PutIdentityProviderConfigurationCommand === "function");
assert(typeof PutInboundDmarcSettingsCommand === "function");
assert(typeof PutMailboxPermissionsCommand === "function");
assert(typeof PutMobileDeviceAccessOverrideCommand === "function");
assert(typeof PutRetentionPolicyCommand === "function");
assert(typeof RegisterMailDomainCommand === "function");
assert(typeof RegisterToWorkMailCommand === "function");
assert(typeof ResetPasswordCommand === "function");
assert(typeof StartMailboxExportJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestAvailabilityConfigurationCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAvailabilityConfigurationCommand === "function");
assert(typeof UpdateDefaultMailDomainCommand === "function");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateImpersonationRoleCommand === "function");
assert(typeof UpdateMailboxQuotaCommand === "function");
assert(typeof UpdateMobileDeviceAccessRuleCommand === "function");
assert(typeof UpdatePrimaryEmailAddressCommand === "function");
assert(typeof UpdateResourceCommand === "function");
assert(typeof UpdateUserCommand === "function");
// enums
assert(typeof AccessControlRuleEffect === "object");
assert(typeof AccessEffect === "object");
assert(typeof AvailabilityProviderType === "object");
assert(typeof DnsRecordVerificationStatus === "object");
assert(typeof EntityState === "object");
assert(typeof EntityType === "object");
assert(typeof FolderName === "object");
assert(typeof IdentityProviderAuthenticationMode === "object");
assert(typeof ImpersonationRoleType === "object");
assert(typeof MailboxExportJobState === "object");
assert(typeof MemberType === "object");
assert(typeof MobileDeviceAccessRuleEffect === "object");
assert(typeof PermissionType === "object");
assert(typeof PersonalAccessTokenConfigurationStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof RetentionAction === "object");
assert(typeof UserRole === "object");
// errors
assert(WorkMailServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAliases === "function");
assert(typeof paginateListAvailabilityConfigurations === "function");
assert(typeof paginateListGroupMembers === "function");
assert(typeof paginateListGroups === "function");
assert(typeof paginateListGroupsForEntity === "function");
assert(typeof paginateListImpersonationRoles === "function");
assert(typeof paginateListMailDomains === "function");
assert(typeof paginateListMailboxExportJobs === "function");
assert(typeof paginateListMailboxPermissions === "function");
assert(typeof paginateListMobileDeviceAccessOverrides === "function");
assert(typeof paginateListOrganizations === "function");
assert(typeof paginateListPersonalAccessTokens === "function");
assert(typeof paginateListResourceDelegates === "function");
assert(typeof paginateListResources === "function");
assert(typeof paginateListUsers === "function");
console.log(`WorkMail index test passed.`);
