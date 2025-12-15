import {
  AccessControlRule$,
  AccessControlRuleEffect,
  AccessEffect,
  AssociateDelegateToResource$,
  AssociateDelegateToResourceCommand,
  AssociateDelegateToResourceRequest$,
  AssociateDelegateToResourceResponse$,
  AssociateMemberToGroup$,
  AssociateMemberToGroupCommand,
  AssociateMemberToGroupRequest$,
  AssociateMemberToGroupResponse$,
  AssumeImpersonationRole$,
  AssumeImpersonationRoleCommand,
  AssumeImpersonationRoleRequest$,
  AssumeImpersonationRoleResponse$,
  AvailabilityConfiguration$,
  AvailabilityProviderType,
  BookingOptions$,
  CancelMailboxExportJob$,
  CancelMailboxExportJobCommand,
  CancelMailboxExportJobRequest$,
  CancelMailboxExportJobResponse$,
  CreateAlias$,
  CreateAliasCommand,
  CreateAliasRequest$,
  CreateAliasResponse$,
  CreateAvailabilityConfiguration$,
  CreateAvailabilityConfigurationCommand,
  CreateAvailabilityConfigurationRequest$,
  CreateAvailabilityConfigurationResponse$,
  CreateGroup$,
  CreateGroupCommand,
  CreateGroupRequest$,
  CreateGroupResponse$,
  CreateIdentityCenterApplication$,
  CreateIdentityCenterApplicationCommand,
  CreateIdentityCenterApplicationRequest$,
  CreateIdentityCenterApplicationResponse$,
  CreateImpersonationRole$,
  CreateImpersonationRoleCommand,
  CreateImpersonationRoleRequest$,
  CreateImpersonationRoleResponse$,
  CreateMobileDeviceAccessRule$,
  CreateMobileDeviceAccessRuleCommand,
  CreateMobileDeviceAccessRuleRequest$,
  CreateMobileDeviceAccessRuleResponse$,
  CreateOrganization$,
  CreateOrganizationCommand,
  CreateOrganizationRequest$,
  CreateOrganizationResponse$,
  CreateResource$,
  CreateResourceCommand,
  CreateResourceRequest$,
  CreateResourceResponse$,
  CreateUser$,
  CreateUserCommand,
  CreateUserRequest$,
  CreateUserResponse$,
  Delegate$,
  DeleteAccessControlRule$,
  DeleteAccessControlRuleCommand,
  DeleteAccessControlRuleRequest$,
  DeleteAccessControlRuleResponse$,
  DeleteAlias$,
  DeleteAliasCommand,
  DeleteAliasRequest$,
  DeleteAliasResponse$,
  DeleteAvailabilityConfiguration$,
  DeleteAvailabilityConfigurationCommand,
  DeleteAvailabilityConfigurationRequest$,
  DeleteAvailabilityConfigurationResponse$,
  DeleteEmailMonitoringConfiguration$,
  DeleteEmailMonitoringConfigurationCommand,
  DeleteEmailMonitoringConfigurationRequest$,
  DeleteEmailMonitoringConfigurationResponse$,
  DeleteGroup$,
  DeleteGroupCommand,
  DeleteGroupRequest$,
  DeleteGroupResponse$,
  DeleteIdentityCenterApplication$,
  DeleteIdentityCenterApplicationCommand,
  DeleteIdentityCenterApplicationRequest$,
  DeleteIdentityCenterApplicationResponse$,
  DeleteIdentityProviderConfiguration$,
  DeleteIdentityProviderConfigurationCommand,
  DeleteIdentityProviderConfigurationRequest$,
  DeleteIdentityProviderConfigurationResponse$,
  DeleteImpersonationRole$,
  DeleteImpersonationRoleCommand,
  DeleteImpersonationRoleRequest$,
  DeleteImpersonationRoleResponse$,
  DeleteMailboxPermissions$,
  DeleteMailboxPermissionsCommand,
  DeleteMailboxPermissionsRequest$,
  DeleteMailboxPermissionsResponse$,
  DeleteMobileDeviceAccessOverride$,
  DeleteMobileDeviceAccessOverrideCommand,
  DeleteMobileDeviceAccessOverrideRequest$,
  DeleteMobileDeviceAccessOverrideResponse$,
  DeleteMobileDeviceAccessRule$,
  DeleteMobileDeviceAccessRuleCommand,
  DeleteMobileDeviceAccessRuleRequest$,
  DeleteMobileDeviceAccessRuleResponse$,
  DeleteOrganization$,
  DeleteOrganizationCommand,
  DeleteOrganizationRequest$,
  DeleteOrganizationResponse$,
  DeletePersonalAccessToken$,
  DeletePersonalAccessTokenCommand,
  DeletePersonalAccessTokenRequest$,
  DeletePersonalAccessTokenResponse$,
  DeleteResource$,
  DeleteResourceCommand,
  DeleteResourceRequest$,
  DeleteResourceResponse$,
  DeleteRetentionPolicy$,
  DeleteRetentionPolicyCommand,
  DeleteRetentionPolicyRequest$,
  DeleteRetentionPolicyResponse$,
  DeleteUser$,
  DeleteUserCommand,
  DeleteUserRequest$,
  DeleteUserResponse$,
  DeregisterFromWorkMail$,
  DeregisterFromWorkMailCommand,
  DeregisterFromWorkMailRequest$,
  DeregisterFromWorkMailResponse$,
  DeregisterMailDomain$,
  DeregisterMailDomainCommand,
  DeregisterMailDomainRequest$,
  DeregisterMailDomainResponse$,
  DescribeEmailMonitoringConfiguration$,
  DescribeEmailMonitoringConfigurationCommand,
  DescribeEmailMonitoringConfigurationRequest$,
  DescribeEmailMonitoringConfigurationResponse$,
  DescribeEntity$,
  DescribeEntityCommand,
  DescribeEntityRequest$,
  DescribeEntityResponse$,
  DescribeGroup$,
  DescribeGroupCommand,
  DescribeGroupRequest$,
  DescribeGroupResponse$,
  DescribeIdentityProviderConfiguration$,
  DescribeIdentityProviderConfigurationCommand,
  DescribeIdentityProviderConfigurationRequest$,
  DescribeIdentityProviderConfigurationResponse$,
  DescribeInboundDmarcSettings$,
  DescribeInboundDmarcSettingsCommand,
  DescribeInboundDmarcSettingsRequest$,
  DescribeInboundDmarcSettingsResponse$,
  DescribeMailboxExportJob$,
  DescribeMailboxExportJobCommand,
  DescribeMailboxExportJobRequest$,
  DescribeMailboxExportJobResponse$,
  DescribeOrganization$,
  DescribeOrganizationCommand,
  DescribeOrganizationRequest$,
  DescribeOrganizationResponse$,
  DescribeResource$,
  DescribeResourceCommand,
  DescribeResourceRequest$,
  DescribeResourceResponse$,
  DescribeUser$,
  DescribeUserCommand,
  DescribeUserRequest$,
  DescribeUserResponse$,
  DirectoryInUseException,
  DirectoryInUseException$,
  DirectoryServiceAuthenticationFailedException,
  DirectoryServiceAuthenticationFailedException$,
  DirectoryUnavailableException,
  DirectoryUnavailableException$,
  DisassociateDelegateFromResource$,
  DisassociateDelegateFromResourceCommand,
  DisassociateDelegateFromResourceRequest$,
  DisassociateDelegateFromResourceResponse$,
  DisassociateMemberFromGroup$,
  DisassociateMemberFromGroupCommand,
  DisassociateMemberFromGroupRequest$,
  DisassociateMemberFromGroupResponse$,
  DnsRecord$,
  DnsRecordVerificationStatus,
  Domain$,
  EmailAddressInUseException,
  EmailAddressInUseException$,
  EntityAlreadyRegisteredException,
  EntityAlreadyRegisteredException$,
  EntityNotFoundException,
  EntityNotFoundException$,
  EntityState,
  EntityStateException,
  EntityStateException$,
  EntityType,
  EwsAvailabilityProvider$,
  FolderConfiguration$,
  FolderName,
  GetAccessControlEffect$,
  GetAccessControlEffectCommand,
  GetAccessControlEffectRequest$,
  GetAccessControlEffectResponse$,
  GetDefaultRetentionPolicy$,
  GetDefaultRetentionPolicyCommand,
  GetDefaultRetentionPolicyRequest$,
  GetDefaultRetentionPolicyResponse$,
  GetImpersonationRole$,
  GetImpersonationRoleCommand,
  GetImpersonationRoleEffect$,
  GetImpersonationRoleEffectCommand,
  GetImpersonationRoleEffectRequest$,
  GetImpersonationRoleEffectResponse$,
  GetImpersonationRoleRequest$,
  GetImpersonationRoleResponse$,
  GetMailDomain$,
  GetMailDomainCommand,
  GetMailDomainRequest$,
  GetMailDomainResponse$,
  GetMailboxDetails$,
  GetMailboxDetailsCommand,
  GetMailboxDetailsRequest$,
  GetMailboxDetailsResponse$,
  GetMobileDeviceAccessEffect$,
  GetMobileDeviceAccessEffectCommand,
  GetMobileDeviceAccessEffectRequest$,
  GetMobileDeviceAccessEffectResponse$,
  GetMobileDeviceAccessOverride$,
  GetMobileDeviceAccessOverrideCommand,
  GetMobileDeviceAccessOverrideRequest$,
  GetMobileDeviceAccessOverrideResponse$,
  GetPersonalAccessTokenMetadata$,
  GetPersonalAccessTokenMetadataCommand,
  GetPersonalAccessTokenMetadataRequest$,
  GetPersonalAccessTokenMetadataResponse$,
  Group$,
  GroupIdentifier$,
  IdentityCenterConfiguration$,
  IdentityProviderAuthenticationMode,
  ImpersonationMatchedRule$,
  ImpersonationRole$,
  ImpersonationRoleType,
  ImpersonationRule$,
  InvalidConfigurationException,
  InvalidConfigurationException$,
  InvalidCustomSesConfigurationException,
  InvalidCustomSesConfigurationException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidPasswordException,
  InvalidPasswordException$,
  LambdaAvailabilityProvider$,
  LimitExceededException,
  LimitExceededException$,
  ListAccessControlRules$,
  ListAccessControlRulesCommand,
  ListAccessControlRulesRequest$,
  ListAccessControlRulesResponse$,
  ListAliases$,
  ListAliasesCommand,
  ListAliasesRequest$,
  ListAliasesResponse$,
  ListAvailabilityConfigurations$,
  ListAvailabilityConfigurationsCommand,
  ListAvailabilityConfigurationsRequest$,
  ListAvailabilityConfigurationsResponse$,
  ListGroupMembers$,
  ListGroupMembersCommand,
  ListGroupMembersRequest$,
  ListGroupMembersResponse$,
  ListGroups$,
  ListGroupsCommand,
  ListGroupsFilters$,
  ListGroupsForEntity$,
  ListGroupsForEntityCommand,
  ListGroupsForEntityFilters$,
  ListGroupsForEntityRequest$,
  ListGroupsForEntityResponse$,
  ListGroupsRequest$,
  ListGroupsResponse$,
  ListImpersonationRoles$,
  ListImpersonationRolesCommand,
  ListImpersonationRolesRequest$,
  ListImpersonationRolesResponse$,
  ListMailDomains$,
  ListMailDomainsCommand,
  ListMailDomainsRequest$,
  ListMailDomainsResponse$,
  ListMailboxExportJobs$,
  ListMailboxExportJobsCommand,
  ListMailboxExportJobsRequest$,
  ListMailboxExportJobsResponse$,
  ListMailboxPermissions$,
  ListMailboxPermissionsCommand,
  ListMailboxPermissionsRequest$,
  ListMailboxPermissionsResponse$,
  ListMobileDeviceAccessOverrides$,
  ListMobileDeviceAccessOverridesCommand,
  ListMobileDeviceAccessOverridesRequest$,
  ListMobileDeviceAccessOverridesResponse$,
  ListMobileDeviceAccessRules$,
  ListMobileDeviceAccessRulesCommand,
  ListMobileDeviceAccessRulesRequest$,
  ListMobileDeviceAccessRulesResponse$,
  ListOrganizations$,
  ListOrganizationsCommand,
  ListOrganizationsRequest$,
  ListOrganizationsResponse$,
  ListPersonalAccessTokens$,
  ListPersonalAccessTokensCommand,
  ListPersonalAccessTokensRequest$,
  ListPersonalAccessTokensResponse$,
  ListResourceDelegates$,
  ListResourceDelegatesCommand,
  ListResourceDelegatesRequest$,
  ListResourceDelegatesResponse$,
  ListResources$,
  ListResourcesCommand,
  ListResourcesFilters$,
  ListResourcesRequest$,
  ListResourcesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListUsers$,
  ListUsersCommand,
  ListUsersFilters$,
  ListUsersRequest$,
  ListUsersResponse$,
  MailDomainInUseException,
  MailDomainInUseException$,
  MailDomainNotFoundException,
  MailDomainNotFoundException$,
  MailDomainStateException,
  MailDomainStateException$,
  MailDomainSummary$,
  MailboxExportJob$,
  MailboxExportJobState,
  Member$,
  MemberType,
  MobileDeviceAccessMatchedRule$,
  MobileDeviceAccessOverride$,
  MobileDeviceAccessRule$,
  MobileDeviceAccessRuleEffect,
  NameAvailabilityException,
  NameAvailabilityException$,
  OrganizationNotFoundException,
  OrganizationNotFoundException$,
  OrganizationStateException,
  OrganizationStateException$,
  OrganizationSummary$,
  Permission$,
  PermissionType,
  PersonalAccessTokenConfiguration$,
  PersonalAccessTokenConfigurationStatus,
  PersonalAccessTokenSummary$,
  PutAccessControlRule$,
  PutAccessControlRuleCommand,
  PutAccessControlRuleRequest$,
  PutAccessControlRuleResponse$,
  PutEmailMonitoringConfiguration$,
  PutEmailMonitoringConfigurationCommand,
  PutEmailMonitoringConfigurationRequest$,
  PutEmailMonitoringConfigurationResponse$,
  PutIdentityProviderConfiguration$,
  PutIdentityProviderConfigurationCommand,
  PutIdentityProviderConfigurationRequest$,
  PutIdentityProviderConfigurationResponse$,
  PutInboundDmarcSettings$,
  PutInboundDmarcSettingsCommand,
  PutInboundDmarcSettingsRequest$,
  PutInboundDmarcSettingsResponse$,
  PutMailboxPermissions$,
  PutMailboxPermissionsCommand,
  PutMailboxPermissionsRequest$,
  PutMailboxPermissionsResponse$,
  PutMobileDeviceAccessOverride$,
  PutMobileDeviceAccessOverrideCommand,
  PutMobileDeviceAccessOverrideRequest$,
  PutMobileDeviceAccessOverrideResponse$,
  PutRetentionPolicy$,
  PutRetentionPolicyCommand,
  PutRetentionPolicyRequest$,
  PutRetentionPolicyResponse$,
  RedactedEwsAvailabilityProvider$,
  RegisterMailDomain$,
  RegisterMailDomainCommand,
  RegisterMailDomainRequest$,
  RegisterMailDomainResponse$,
  RegisterToWorkMail$,
  RegisterToWorkMailCommand,
  RegisterToWorkMailRequest$,
  RegisterToWorkMailResponse$,
  ReservedNameException,
  ReservedNameException$,
  ResetPassword$,
  ResetPasswordCommand,
  ResetPasswordRequest$,
  ResetPasswordResponse$,
  Resource$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  RetentionAction,
  StartMailboxExportJob$,
  StartMailboxExportJobCommand,
  StartMailboxExportJobRequest$,
  StartMailboxExportJobResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TestAvailabilityConfiguration$,
  TestAvailabilityConfigurationCommand,
  TestAvailabilityConfigurationRequest$,
  TestAvailabilityConfigurationResponse$,
  TooManyTagsException,
  TooManyTagsException$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAvailabilityConfiguration$,
  UpdateAvailabilityConfigurationCommand,
  UpdateAvailabilityConfigurationRequest$,
  UpdateAvailabilityConfigurationResponse$,
  UpdateDefaultMailDomain$,
  UpdateDefaultMailDomainCommand,
  UpdateDefaultMailDomainRequest$,
  UpdateDefaultMailDomainResponse$,
  UpdateGroup$,
  UpdateGroupCommand,
  UpdateGroupRequest$,
  UpdateGroupResponse$,
  UpdateImpersonationRole$,
  UpdateImpersonationRoleCommand,
  UpdateImpersonationRoleRequest$,
  UpdateImpersonationRoleResponse$,
  UpdateMailboxQuota$,
  UpdateMailboxQuotaCommand,
  UpdateMailboxQuotaRequest$,
  UpdateMailboxQuotaResponse$,
  UpdateMobileDeviceAccessRule$,
  UpdateMobileDeviceAccessRuleCommand,
  UpdateMobileDeviceAccessRuleRequest$,
  UpdateMobileDeviceAccessRuleResponse$,
  UpdatePrimaryEmailAddress$,
  UpdatePrimaryEmailAddressCommand,
  UpdatePrimaryEmailAddressRequest$,
  UpdatePrimaryEmailAddressResponse$,
  UpdateResource$,
  UpdateResourceCommand,
  UpdateResourceRequest$,
  UpdateResourceResponse$,
  UpdateUser$,
  UpdateUserCommand,
  UpdateUserRequest$,
  UpdateUserResponse$,
  User$,
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
assert(typeof AssociateDelegateToResource$ === "object");
assert(typeof AssociateMemberToGroupCommand === "function");
assert(typeof AssociateMemberToGroup$ === "object");
assert(typeof AssumeImpersonationRoleCommand === "function");
assert(typeof AssumeImpersonationRole$ === "object");
assert(typeof CancelMailboxExportJobCommand === "function");
assert(typeof CancelMailboxExportJob$ === "object");
assert(typeof CreateAliasCommand === "function");
assert(typeof CreateAlias$ === "object");
assert(typeof CreateAvailabilityConfigurationCommand === "function");
assert(typeof CreateAvailabilityConfiguration$ === "object");
assert(typeof CreateGroupCommand === "function");
assert(typeof CreateGroup$ === "object");
assert(typeof CreateIdentityCenterApplicationCommand === "function");
assert(typeof CreateIdentityCenterApplication$ === "object");
assert(typeof CreateImpersonationRoleCommand === "function");
assert(typeof CreateImpersonationRole$ === "object");
assert(typeof CreateMobileDeviceAccessRuleCommand === "function");
assert(typeof CreateMobileDeviceAccessRule$ === "object");
assert(typeof CreateOrganizationCommand === "function");
assert(typeof CreateOrganization$ === "object");
assert(typeof CreateResourceCommand === "function");
assert(typeof CreateResource$ === "object");
assert(typeof CreateUserCommand === "function");
assert(typeof CreateUser$ === "object");
assert(typeof DeleteAccessControlRuleCommand === "function");
assert(typeof DeleteAccessControlRule$ === "object");
assert(typeof DeleteAliasCommand === "function");
assert(typeof DeleteAlias$ === "object");
assert(typeof DeleteAvailabilityConfigurationCommand === "function");
assert(typeof DeleteAvailabilityConfiguration$ === "object");
assert(typeof DeleteEmailMonitoringConfigurationCommand === "function");
assert(typeof DeleteEmailMonitoringConfiguration$ === "object");
assert(typeof DeleteGroupCommand === "function");
assert(typeof DeleteGroup$ === "object");
assert(typeof DeleteIdentityCenterApplicationCommand === "function");
assert(typeof DeleteIdentityCenterApplication$ === "object");
assert(typeof DeleteIdentityProviderConfigurationCommand === "function");
assert(typeof DeleteIdentityProviderConfiguration$ === "object");
assert(typeof DeleteImpersonationRoleCommand === "function");
assert(typeof DeleteImpersonationRole$ === "object");
assert(typeof DeleteMailboxPermissionsCommand === "function");
assert(typeof DeleteMailboxPermissions$ === "object");
assert(typeof DeleteMobileDeviceAccessOverrideCommand === "function");
assert(typeof DeleteMobileDeviceAccessOverride$ === "object");
assert(typeof DeleteMobileDeviceAccessRuleCommand === "function");
assert(typeof DeleteMobileDeviceAccessRule$ === "object");
assert(typeof DeleteOrganizationCommand === "function");
assert(typeof DeleteOrganization$ === "object");
assert(typeof DeletePersonalAccessTokenCommand === "function");
assert(typeof DeletePersonalAccessToken$ === "object");
assert(typeof DeleteResourceCommand === "function");
assert(typeof DeleteResource$ === "object");
assert(typeof DeleteRetentionPolicyCommand === "function");
assert(typeof DeleteRetentionPolicy$ === "object");
assert(typeof DeleteUserCommand === "function");
assert(typeof DeleteUser$ === "object");
assert(typeof DeregisterFromWorkMailCommand === "function");
assert(typeof DeregisterFromWorkMail$ === "object");
assert(typeof DeregisterMailDomainCommand === "function");
assert(typeof DeregisterMailDomain$ === "object");
assert(typeof DescribeEmailMonitoringConfigurationCommand === "function");
assert(typeof DescribeEmailMonitoringConfiguration$ === "object");
assert(typeof DescribeEntityCommand === "function");
assert(typeof DescribeEntity$ === "object");
assert(typeof DescribeGroupCommand === "function");
assert(typeof DescribeGroup$ === "object");
assert(typeof DescribeIdentityProviderConfigurationCommand === "function");
assert(typeof DescribeIdentityProviderConfiguration$ === "object");
assert(typeof DescribeInboundDmarcSettingsCommand === "function");
assert(typeof DescribeInboundDmarcSettings$ === "object");
assert(typeof DescribeMailboxExportJobCommand === "function");
assert(typeof DescribeMailboxExportJob$ === "object");
assert(typeof DescribeOrganizationCommand === "function");
assert(typeof DescribeOrganization$ === "object");
assert(typeof DescribeResourceCommand === "function");
assert(typeof DescribeResource$ === "object");
assert(typeof DescribeUserCommand === "function");
assert(typeof DescribeUser$ === "object");
assert(typeof DisassociateDelegateFromResourceCommand === "function");
assert(typeof DisassociateDelegateFromResource$ === "object");
assert(typeof DisassociateMemberFromGroupCommand === "function");
assert(typeof DisassociateMemberFromGroup$ === "object");
assert(typeof GetAccessControlEffectCommand === "function");
assert(typeof GetAccessControlEffect$ === "object");
assert(typeof GetDefaultRetentionPolicyCommand === "function");
assert(typeof GetDefaultRetentionPolicy$ === "object");
assert(typeof GetImpersonationRoleCommand === "function");
assert(typeof GetImpersonationRole$ === "object");
assert(typeof GetImpersonationRoleEffectCommand === "function");
assert(typeof GetImpersonationRoleEffect$ === "object");
assert(typeof GetMailboxDetailsCommand === "function");
assert(typeof GetMailboxDetails$ === "object");
assert(typeof GetMailDomainCommand === "function");
assert(typeof GetMailDomain$ === "object");
assert(typeof GetMobileDeviceAccessEffectCommand === "function");
assert(typeof GetMobileDeviceAccessEffect$ === "object");
assert(typeof GetMobileDeviceAccessOverrideCommand === "function");
assert(typeof GetMobileDeviceAccessOverride$ === "object");
assert(typeof GetPersonalAccessTokenMetadataCommand === "function");
assert(typeof GetPersonalAccessTokenMetadata$ === "object");
assert(typeof ListAccessControlRulesCommand === "function");
assert(typeof ListAccessControlRules$ === "object");
assert(typeof ListAliasesCommand === "function");
assert(typeof ListAliases$ === "object");
assert(typeof ListAvailabilityConfigurationsCommand === "function");
assert(typeof ListAvailabilityConfigurations$ === "object");
assert(typeof ListGroupMembersCommand === "function");
assert(typeof ListGroupMembers$ === "object");
assert(typeof ListGroupsCommand === "function");
assert(typeof ListGroups$ === "object");
assert(typeof ListGroupsForEntityCommand === "function");
assert(typeof ListGroupsForEntity$ === "object");
assert(typeof ListImpersonationRolesCommand === "function");
assert(typeof ListImpersonationRoles$ === "object");
assert(typeof ListMailboxExportJobsCommand === "function");
assert(typeof ListMailboxExportJobs$ === "object");
assert(typeof ListMailboxPermissionsCommand === "function");
assert(typeof ListMailboxPermissions$ === "object");
assert(typeof ListMailDomainsCommand === "function");
assert(typeof ListMailDomains$ === "object");
assert(typeof ListMobileDeviceAccessOverridesCommand === "function");
assert(typeof ListMobileDeviceAccessOverrides$ === "object");
assert(typeof ListMobileDeviceAccessRulesCommand === "function");
assert(typeof ListMobileDeviceAccessRules$ === "object");
assert(typeof ListOrganizationsCommand === "function");
assert(typeof ListOrganizations$ === "object");
assert(typeof ListPersonalAccessTokensCommand === "function");
assert(typeof ListPersonalAccessTokens$ === "object");
assert(typeof ListResourceDelegatesCommand === "function");
assert(typeof ListResourceDelegates$ === "object");
assert(typeof ListResourcesCommand === "function");
assert(typeof ListResources$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListUsersCommand === "function");
assert(typeof ListUsers$ === "object");
assert(typeof PutAccessControlRuleCommand === "function");
assert(typeof PutAccessControlRule$ === "object");
assert(typeof PutEmailMonitoringConfigurationCommand === "function");
assert(typeof PutEmailMonitoringConfiguration$ === "object");
assert(typeof PutIdentityProviderConfigurationCommand === "function");
assert(typeof PutIdentityProviderConfiguration$ === "object");
assert(typeof PutInboundDmarcSettingsCommand === "function");
assert(typeof PutInboundDmarcSettings$ === "object");
assert(typeof PutMailboxPermissionsCommand === "function");
assert(typeof PutMailboxPermissions$ === "object");
assert(typeof PutMobileDeviceAccessOverrideCommand === "function");
assert(typeof PutMobileDeviceAccessOverride$ === "object");
assert(typeof PutRetentionPolicyCommand === "function");
assert(typeof PutRetentionPolicy$ === "object");
assert(typeof RegisterMailDomainCommand === "function");
assert(typeof RegisterMailDomain$ === "object");
assert(typeof RegisterToWorkMailCommand === "function");
assert(typeof RegisterToWorkMail$ === "object");
assert(typeof ResetPasswordCommand === "function");
assert(typeof ResetPassword$ === "object");
assert(typeof StartMailboxExportJobCommand === "function");
assert(typeof StartMailboxExportJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestAvailabilityConfigurationCommand === "function");
assert(typeof TestAvailabilityConfiguration$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAvailabilityConfigurationCommand === "function");
assert(typeof UpdateAvailabilityConfiguration$ === "object");
assert(typeof UpdateDefaultMailDomainCommand === "function");
assert(typeof UpdateDefaultMailDomain$ === "object");
assert(typeof UpdateGroupCommand === "function");
assert(typeof UpdateGroup$ === "object");
assert(typeof UpdateImpersonationRoleCommand === "function");
assert(typeof UpdateImpersonationRole$ === "object");
assert(typeof UpdateMailboxQuotaCommand === "function");
assert(typeof UpdateMailboxQuota$ === "object");
assert(typeof UpdateMobileDeviceAccessRuleCommand === "function");
assert(typeof UpdateMobileDeviceAccessRule$ === "object");
assert(typeof UpdatePrimaryEmailAddressCommand === "function");
assert(typeof UpdatePrimaryEmailAddress$ === "object");
assert(typeof UpdateResourceCommand === "function");
assert(typeof UpdateResource$ === "object");
assert(typeof UpdateUserCommand === "function");
assert(typeof UpdateUser$ === "object");
// structural schemas
assert(typeof AccessControlRule$ === "object");
assert(typeof AssociateDelegateToResourceRequest$ === "object");
assert(typeof AssociateDelegateToResourceResponse$ === "object");
assert(typeof AssociateMemberToGroupRequest$ === "object");
assert(typeof AssociateMemberToGroupResponse$ === "object");
assert(typeof AssumeImpersonationRoleRequest$ === "object");
assert(typeof AssumeImpersonationRoleResponse$ === "object");
assert(typeof AvailabilityConfiguration$ === "object");
assert(typeof BookingOptions$ === "object");
assert(typeof CancelMailboxExportJobRequest$ === "object");
assert(typeof CancelMailboxExportJobResponse$ === "object");
assert(typeof CreateAliasRequest$ === "object");
assert(typeof CreateAliasResponse$ === "object");
assert(typeof CreateAvailabilityConfigurationRequest$ === "object");
assert(typeof CreateAvailabilityConfigurationResponse$ === "object");
assert(typeof CreateGroupRequest$ === "object");
assert(typeof CreateGroupResponse$ === "object");
assert(typeof CreateIdentityCenterApplicationRequest$ === "object");
assert(typeof CreateIdentityCenterApplicationResponse$ === "object");
assert(typeof CreateImpersonationRoleRequest$ === "object");
assert(typeof CreateImpersonationRoleResponse$ === "object");
assert(typeof CreateMobileDeviceAccessRuleRequest$ === "object");
assert(typeof CreateMobileDeviceAccessRuleResponse$ === "object");
assert(typeof CreateOrganizationRequest$ === "object");
assert(typeof CreateOrganizationResponse$ === "object");
assert(typeof CreateResourceRequest$ === "object");
assert(typeof CreateResourceResponse$ === "object");
assert(typeof CreateUserRequest$ === "object");
assert(typeof CreateUserResponse$ === "object");
assert(typeof Delegate$ === "object");
assert(typeof DeleteAccessControlRuleRequest$ === "object");
assert(typeof DeleteAccessControlRuleResponse$ === "object");
assert(typeof DeleteAliasRequest$ === "object");
assert(typeof DeleteAliasResponse$ === "object");
assert(typeof DeleteAvailabilityConfigurationRequest$ === "object");
assert(typeof DeleteAvailabilityConfigurationResponse$ === "object");
assert(typeof DeleteEmailMonitoringConfigurationRequest$ === "object");
assert(typeof DeleteEmailMonitoringConfigurationResponse$ === "object");
assert(typeof DeleteGroupRequest$ === "object");
assert(typeof DeleteGroupResponse$ === "object");
assert(typeof DeleteIdentityCenterApplicationRequest$ === "object");
assert(typeof DeleteIdentityCenterApplicationResponse$ === "object");
assert(typeof DeleteIdentityProviderConfigurationRequest$ === "object");
assert(typeof DeleteIdentityProviderConfigurationResponse$ === "object");
assert(typeof DeleteImpersonationRoleRequest$ === "object");
assert(typeof DeleteImpersonationRoleResponse$ === "object");
assert(typeof DeleteMailboxPermissionsRequest$ === "object");
assert(typeof DeleteMailboxPermissionsResponse$ === "object");
assert(typeof DeleteMobileDeviceAccessOverrideRequest$ === "object");
assert(typeof DeleteMobileDeviceAccessOverrideResponse$ === "object");
assert(typeof DeleteMobileDeviceAccessRuleRequest$ === "object");
assert(typeof DeleteMobileDeviceAccessRuleResponse$ === "object");
assert(typeof DeleteOrganizationRequest$ === "object");
assert(typeof DeleteOrganizationResponse$ === "object");
assert(typeof DeletePersonalAccessTokenRequest$ === "object");
assert(typeof DeletePersonalAccessTokenResponse$ === "object");
assert(typeof DeleteResourceRequest$ === "object");
assert(typeof DeleteResourceResponse$ === "object");
assert(typeof DeleteRetentionPolicyRequest$ === "object");
assert(typeof DeleteRetentionPolicyResponse$ === "object");
assert(typeof DeleteUserRequest$ === "object");
assert(typeof DeleteUserResponse$ === "object");
assert(typeof DeregisterFromWorkMailRequest$ === "object");
assert(typeof DeregisterFromWorkMailResponse$ === "object");
assert(typeof DeregisterMailDomainRequest$ === "object");
assert(typeof DeregisterMailDomainResponse$ === "object");
assert(typeof DescribeEmailMonitoringConfigurationRequest$ === "object");
assert(typeof DescribeEmailMonitoringConfigurationResponse$ === "object");
assert(typeof DescribeEntityRequest$ === "object");
assert(typeof DescribeEntityResponse$ === "object");
assert(typeof DescribeGroupRequest$ === "object");
assert(typeof DescribeGroupResponse$ === "object");
assert(typeof DescribeIdentityProviderConfigurationRequest$ === "object");
assert(typeof DescribeIdentityProviderConfigurationResponse$ === "object");
assert(typeof DescribeInboundDmarcSettingsRequest$ === "object");
assert(typeof DescribeInboundDmarcSettingsResponse$ === "object");
assert(typeof DescribeMailboxExportJobRequest$ === "object");
assert(typeof DescribeMailboxExportJobResponse$ === "object");
assert(typeof DescribeOrganizationRequest$ === "object");
assert(typeof DescribeOrganizationResponse$ === "object");
assert(typeof DescribeResourceRequest$ === "object");
assert(typeof DescribeResourceResponse$ === "object");
assert(typeof DescribeUserRequest$ === "object");
assert(typeof DescribeUserResponse$ === "object");
assert(typeof DisassociateDelegateFromResourceRequest$ === "object");
assert(typeof DisassociateDelegateFromResourceResponse$ === "object");
assert(typeof DisassociateMemberFromGroupRequest$ === "object");
assert(typeof DisassociateMemberFromGroupResponse$ === "object");
assert(typeof DnsRecord$ === "object");
assert(typeof Domain$ === "object");
assert(typeof EwsAvailabilityProvider$ === "object");
assert(typeof FolderConfiguration$ === "object");
assert(typeof GetAccessControlEffectRequest$ === "object");
assert(typeof GetAccessControlEffectResponse$ === "object");
assert(typeof GetDefaultRetentionPolicyRequest$ === "object");
assert(typeof GetDefaultRetentionPolicyResponse$ === "object");
assert(typeof GetImpersonationRoleEffectRequest$ === "object");
assert(typeof GetImpersonationRoleEffectResponse$ === "object");
assert(typeof GetImpersonationRoleRequest$ === "object");
assert(typeof GetImpersonationRoleResponse$ === "object");
assert(typeof GetMailboxDetailsRequest$ === "object");
assert(typeof GetMailboxDetailsResponse$ === "object");
assert(typeof GetMailDomainRequest$ === "object");
assert(typeof GetMailDomainResponse$ === "object");
assert(typeof GetMobileDeviceAccessEffectRequest$ === "object");
assert(typeof GetMobileDeviceAccessEffectResponse$ === "object");
assert(typeof GetMobileDeviceAccessOverrideRequest$ === "object");
assert(typeof GetMobileDeviceAccessOverrideResponse$ === "object");
assert(typeof GetPersonalAccessTokenMetadataRequest$ === "object");
assert(typeof GetPersonalAccessTokenMetadataResponse$ === "object");
assert(typeof Group$ === "object");
assert(typeof GroupIdentifier$ === "object");
assert(typeof IdentityCenterConfiguration$ === "object");
assert(typeof ImpersonationMatchedRule$ === "object");
assert(typeof ImpersonationRole$ === "object");
assert(typeof ImpersonationRule$ === "object");
assert(typeof LambdaAvailabilityProvider$ === "object");
assert(typeof ListAccessControlRulesRequest$ === "object");
assert(typeof ListAccessControlRulesResponse$ === "object");
assert(typeof ListAliasesRequest$ === "object");
assert(typeof ListAliasesResponse$ === "object");
assert(typeof ListAvailabilityConfigurationsRequest$ === "object");
assert(typeof ListAvailabilityConfigurationsResponse$ === "object");
assert(typeof ListGroupMembersRequest$ === "object");
assert(typeof ListGroupMembersResponse$ === "object");
assert(typeof ListGroupsFilters$ === "object");
assert(typeof ListGroupsForEntityFilters$ === "object");
assert(typeof ListGroupsForEntityRequest$ === "object");
assert(typeof ListGroupsForEntityResponse$ === "object");
assert(typeof ListGroupsRequest$ === "object");
assert(typeof ListGroupsResponse$ === "object");
assert(typeof ListImpersonationRolesRequest$ === "object");
assert(typeof ListImpersonationRolesResponse$ === "object");
assert(typeof ListMailboxExportJobsRequest$ === "object");
assert(typeof ListMailboxExportJobsResponse$ === "object");
assert(typeof ListMailboxPermissionsRequest$ === "object");
assert(typeof ListMailboxPermissionsResponse$ === "object");
assert(typeof ListMailDomainsRequest$ === "object");
assert(typeof ListMailDomainsResponse$ === "object");
assert(typeof ListMobileDeviceAccessOverridesRequest$ === "object");
assert(typeof ListMobileDeviceAccessOverridesResponse$ === "object");
assert(typeof ListMobileDeviceAccessRulesRequest$ === "object");
assert(typeof ListMobileDeviceAccessRulesResponse$ === "object");
assert(typeof ListOrganizationsRequest$ === "object");
assert(typeof ListOrganizationsResponse$ === "object");
assert(typeof ListPersonalAccessTokensRequest$ === "object");
assert(typeof ListPersonalAccessTokensResponse$ === "object");
assert(typeof ListResourceDelegatesRequest$ === "object");
assert(typeof ListResourceDelegatesResponse$ === "object");
assert(typeof ListResourcesFilters$ === "object");
assert(typeof ListResourcesRequest$ === "object");
assert(typeof ListResourcesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListUsersFilters$ === "object");
assert(typeof ListUsersRequest$ === "object");
assert(typeof ListUsersResponse$ === "object");
assert(typeof MailboxExportJob$ === "object");
assert(typeof MailDomainSummary$ === "object");
assert(typeof Member$ === "object");
assert(typeof MobileDeviceAccessMatchedRule$ === "object");
assert(typeof MobileDeviceAccessOverride$ === "object");
assert(typeof MobileDeviceAccessRule$ === "object");
assert(typeof OrganizationSummary$ === "object");
assert(typeof Permission$ === "object");
assert(typeof PersonalAccessTokenConfiguration$ === "object");
assert(typeof PersonalAccessTokenSummary$ === "object");
assert(typeof PutAccessControlRuleRequest$ === "object");
assert(typeof PutAccessControlRuleResponse$ === "object");
assert(typeof PutEmailMonitoringConfigurationRequest$ === "object");
assert(typeof PutEmailMonitoringConfigurationResponse$ === "object");
assert(typeof PutIdentityProviderConfigurationRequest$ === "object");
assert(typeof PutIdentityProviderConfigurationResponse$ === "object");
assert(typeof PutInboundDmarcSettingsRequest$ === "object");
assert(typeof PutInboundDmarcSettingsResponse$ === "object");
assert(typeof PutMailboxPermissionsRequest$ === "object");
assert(typeof PutMailboxPermissionsResponse$ === "object");
assert(typeof PutMobileDeviceAccessOverrideRequest$ === "object");
assert(typeof PutMobileDeviceAccessOverrideResponse$ === "object");
assert(typeof PutRetentionPolicyRequest$ === "object");
assert(typeof PutRetentionPolicyResponse$ === "object");
assert(typeof RedactedEwsAvailabilityProvider$ === "object");
assert(typeof RegisterMailDomainRequest$ === "object");
assert(typeof RegisterMailDomainResponse$ === "object");
assert(typeof RegisterToWorkMailRequest$ === "object");
assert(typeof RegisterToWorkMailResponse$ === "object");
assert(typeof ResetPasswordRequest$ === "object");
assert(typeof ResetPasswordResponse$ === "object");
assert(typeof Resource$ === "object");
assert(typeof StartMailboxExportJobRequest$ === "object");
assert(typeof StartMailboxExportJobResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TestAvailabilityConfigurationRequest$ === "object");
assert(typeof TestAvailabilityConfigurationResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAvailabilityConfigurationRequest$ === "object");
assert(typeof UpdateAvailabilityConfigurationResponse$ === "object");
assert(typeof UpdateDefaultMailDomainRequest$ === "object");
assert(typeof UpdateDefaultMailDomainResponse$ === "object");
assert(typeof UpdateGroupRequest$ === "object");
assert(typeof UpdateGroupResponse$ === "object");
assert(typeof UpdateImpersonationRoleRequest$ === "object");
assert(typeof UpdateImpersonationRoleResponse$ === "object");
assert(typeof UpdateMailboxQuotaRequest$ === "object");
assert(typeof UpdateMailboxQuotaResponse$ === "object");
assert(typeof UpdateMobileDeviceAccessRuleRequest$ === "object");
assert(typeof UpdateMobileDeviceAccessRuleResponse$ === "object");
assert(typeof UpdatePrimaryEmailAddressRequest$ === "object");
assert(typeof UpdatePrimaryEmailAddressResponse$ === "object");
assert(typeof UpdateResourceRequest$ === "object");
assert(typeof UpdateResourceResponse$ === "object");
assert(typeof UpdateUserRequest$ === "object");
assert(typeof UpdateUserResponse$ === "object");
assert(typeof User$ === "object");
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
assert(DirectoryInUseException.prototype instanceof WorkMailServiceException);
assert(typeof DirectoryInUseException$ === "object");
assert(DirectoryServiceAuthenticationFailedException.prototype instanceof WorkMailServiceException);
assert(typeof DirectoryServiceAuthenticationFailedException$ === "object");
assert(DirectoryUnavailableException.prototype instanceof WorkMailServiceException);
assert(typeof DirectoryUnavailableException$ === "object");
assert(EmailAddressInUseException.prototype instanceof WorkMailServiceException);
assert(typeof EmailAddressInUseException$ === "object");
assert(EntityAlreadyRegisteredException.prototype instanceof WorkMailServiceException);
assert(typeof EntityAlreadyRegisteredException$ === "object");
assert(EntityNotFoundException.prototype instanceof WorkMailServiceException);
assert(typeof EntityNotFoundException$ === "object");
assert(EntityStateException.prototype instanceof WorkMailServiceException);
assert(typeof EntityStateException$ === "object");
assert(InvalidConfigurationException.prototype instanceof WorkMailServiceException);
assert(typeof InvalidConfigurationException$ === "object");
assert(InvalidCustomSesConfigurationException.prototype instanceof WorkMailServiceException);
assert(typeof InvalidCustomSesConfigurationException$ === "object");
assert(InvalidParameterException.prototype instanceof WorkMailServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidPasswordException.prototype instanceof WorkMailServiceException);
assert(typeof InvalidPasswordException$ === "object");
assert(LimitExceededException.prototype instanceof WorkMailServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MailDomainInUseException.prototype instanceof WorkMailServiceException);
assert(typeof MailDomainInUseException$ === "object");
assert(MailDomainNotFoundException.prototype instanceof WorkMailServiceException);
assert(typeof MailDomainNotFoundException$ === "object");
assert(MailDomainStateException.prototype instanceof WorkMailServiceException);
assert(typeof MailDomainStateException$ === "object");
assert(NameAvailabilityException.prototype instanceof WorkMailServiceException);
assert(typeof NameAvailabilityException$ === "object");
assert(OrganizationNotFoundException.prototype instanceof WorkMailServiceException);
assert(typeof OrganizationNotFoundException$ === "object");
assert(OrganizationStateException.prototype instanceof WorkMailServiceException);
assert(typeof OrganizationStateException$ === "object");
assert(ReservedNameException.prototype instanceof WorkMailServiceException);
assert(typeof ReservedNameException$ === "object");
assert(ResourceNotFoundException.prototype instanceof WorkMailServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TooManyTagsException.prototype instanceof WorkMailServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnsupportedOperationException.prototype instanceof WorkMailServiceException);
assert(typeof UnsupportedOperationException$ === "object");
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
