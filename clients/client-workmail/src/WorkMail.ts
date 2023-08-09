// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateDelegateToResourceCommand,
  AssociateDelegateToResourceCommandInput,
  AssociateDelegateToResourceCommandOutput,
} from "./commands/AssociateDelegateToResourceCommand";
import {
  AssociateMemberToGroupCommand,
  AssociateMemberToGroupCommandInput,
  AssociateMemberToGroupCommandOutput,
} from "./commands/AssociateMemberToGroupCommand";
import {
  AssumeImpersonationRoleCommand,
  AssumeImpersonationRoleCommandInput,
  AssumeImpersonationRoleCommandOutput,
} from "./commands/AssumeImpersonationRoleCommand";
import {
  CancelMailboxExportJobCommand,
  CancelMailboxExportJobCommandInput,
  CancelMailboxExportJobCommandOutput,
} from "./commands/CancelMailboxExportJobCommand";
import { CreateAliasCommand, CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import {
  CreateAvailabilityConfigurationCommand,
  CreateAvailabilityConfigurationCommandInput,
  CreateAvailabilityConfigurationCommandOutput,
} from "./commands/CreateAvailabilityConfigurationCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateImpersonationRoleCommand,
  CreateImpersonationRoleCommandInput,
  CreateImpersonationRoleCommandOutput,
} from "./commands/CreateImpersonationRoleCommand";
import {
  CreateMobileDeviceAccessRuleCommand,
  CreateMobileDeviceAccessRuleCommandInput,
  CreateMobileDeviceAccessRuleCommandOutput,
} from "./commands/CreateMobileDeviceAccessRuleCommand";
import {
  CreateOrganizationCommand,
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput,
} from "./commands/CreateOrganizationCommand";
import {
  CreateResourceCommand,
  CreateResourceCommandInput,
  CreateResourceCommandOutput,
} from "./commands/CreateResourceCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteAccessControlRuleCommand,
  DeleteAccessControlRuleCommandInput,
  DeleteAccessControlRuleCommandOutput,
} from "./commands/DeleteAccessControlRuleCommand";
import { DeleteAliasCommand, DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import {
  DeleteAvailabilityConfigurationCommand,
  DeleteAvailabilityConfigurationCommandInput,
  DeleteAvailabilityConfigurationCommandOutput,
} from "./commands/DeleteAvailabilityConfigurationCommand";
import {
  DeleteEmailMonitoringConfigurationCommand,
  DeleteEmailMonitoringConfigurationCommandInput,
  DeleteEmailMonitoringConfigurationCommandOutput,
} from "./commands/DeleteEmailMonitoringConfigurationCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteImpersonationRoleCommand,
  DeleteImpersonationRoleCommandInput,
  DeleteImpersonationRoleCommandOutput,
} from "./commands/DeleteImpersonationRoleCommand";
import {
  DeleteMailboxPermissionsCommand,
  DeleteMailboxPermissionsCommandInput,
  DeleteMailboxPermissionsCommandOutput,
} from "./commands/DeleteMailboxPermissionsCommand";
import {
  DeleteMobileDeviceAccessOverrideCommand,
  DeleteMobileDeviceAccessOverrideCommandInput,
  DeleteMobileDeviceAccessOverrideCommandOutput,
} from "./commands/DeleteMobileDeviceAccessOverrideCommand";
import {
  DeleteMobileDeviceAccessRuleCommand,
  DeleteMobileDeviceAccessRuleCommandInput,
  DeleteMobileDeviceAccessRuleCommandOutput,
} from "./commands/DeleteMobileDeviceAccessRuleCommand";
import {
  DeleteOrganizationCommand,
  DeleteOrganizationCommandInput,
  DeleteOrganizationCommandOutput,
} from "./commands/DeleteOrganizationCommand";
import {
  DeleteResourceCommand,
  DeleteResourceCommandInput,
  DeleteResourceCommandOutput,
} from "./commands/DeleteResourceCommand";
import {
  DeleteRetentionPolicyCommand,
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
} from "./commands/DeleteRetentionPolicyCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeregisterFromWorkMailCommand,
  DeregisterFromWorkMailCommandInput,
  DeregisterFromWorkMailCommandOutput,
} from "./commands/DeregisterFromWorkMailCommand";
import {
  DeregisterMailDomainCommand,
  DeregisterMailDomainCommandInput,
  DeregisterMailDomainCommandOutput,
} from "./commands/DeregisterMailDomainCommand";
import {
  DescribeEmailMonitoringConfigurationCommand,
  DescribeEmailMonitoringConfigurationCommandInput,
  DescribeEmailMonitoringConfigurationCommandOutput,
} from "./commands/DescribeEmailMonitoringConfigurationCommand";
import {
  DescribeGroupCommand,
  DescribeGroupCommandInput,
  DescribeGroupCommandOutput,
} from "./commands/DescribeGroupCommand";
import {
  DescribeInboundDmarcSettingsCommand,
  DescribeInboundDmarcSettingsCommandInput,
  DescribeInboundDmarcSettingsCommandOutput,
} from "./commands/DescribeInboundDmarcSettingsCommand";
import {
  DescribeMailboxExportJobCommand,
  DescribeMailboxExportJobCommandInput,
  DescribeMailboxExportJobCommandOutput,
} from "./commands/DescribeMailboxExportJobCommand";
import {
  DescribeOrganizationCommand,
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "./commands/DescribeOrganizationCommand";
import {
  DescribeResourceCommand,
  DescribeResourceCommandInput,
  DescribeResourceCommandOutput,
} from "./commands/DescribeResourceCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
} from "./commands/DescribeUserCommand";
import {
  DisassociateDelegateFromResourceCommand,
  DisassociateDelegateFromResourceCommandInput,
  DisassociateDelegateFromResourceCommandOutput,
} from "./commands/DisassociateDelegateFromResourceCommand";
import {
  DisassociateMemberFromGroupCommand,
  DisassociateMemberFromGroupCommandInput,
  DisassociateMemberFromGroupCommandOutput,
} from "./commands/DisassociateMemberFromGroupCommand";
import {
  GetAccessControlEffectCommand,
  GetAccessControlEffectCommandInput,
  GetAccessControlEffectCommandOutput,
} from "./commands/GetAccessControlEffectCommand";
import {
  GetDefaultRetentionPolicyCommand,
  GetDefaultRetentionPolicyCommandInput,
  GetDefaultRetentionPolicyCommandOutput,
} from "./commands/GetDefaultRetentionPolicyCommand";
import {
  GetImpersonationRoleCommand,
  GetImpersonationRoleCommandInput,
  GetImpersonationRoleCommandOutput,
} from "./commands/GetImpersonationRoleCommand";
import {
  GetImpersonationRoleEffectCommand,
  GetImpersonationRoleEffectCommandInput,
  GetImpersonationRoleEffectCommandOutput,
} from "./commands/GetImpersonationRoleEffectCommand";
import {
  GetMailboxDetailsCommand,
  GetMailboxDetailsCommandInput,
  GetMailboxDetailsCommandOutput,
} from "./commands/GetMailboxDetailsCommand";
import {
  GetMailDomainCommand,
  GetMailDomainCommandInput,
  GetMailDomainCommandOutput,
} from "./commands/GetMailDomainCommand";
import {
  GetMobileDeviceAccessEffectCommand,
  GetMobileDeviceAccessEffectCommandInput,
  GetMobileDeviceAccessEffectCommandOutput,
} from "./commands/GetMobileDeviceAccessEffectCommand";
import {
  GetMobileDeviceAccessOverrideCommand,
  GetMobileDeviceAccessOverrideCommandInput,
  GetMobileDeviceAccessOverrideCommandOutput,
} from "./commands/GetMobileDeviceAccessOverrideCommand";
import {
  ListAccessControlRulesCommand,
  ListAccessControlRulesCommandInput,
  ListAccessControlRulesCommandOutput,
} from "./commands/ListAccessControlRulesCommand";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import {
  ListAvailabilityConfigurationsCommand,
  ListAvailabilityConfigurationsCommandInput,
  ListAvailabilityConfigurationsCommandOutput,
} from "./commands/ListAvailabilityConfigurationsCommand";
import {
  ListGroupMembersCommand,
  ListGroupMembersCommandInput,
  ListGroupMembersCommandOutput,
} from "./commands/ListGroupMembersCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListImpersonationRolesCommand,
  ListImpersonationRolesCommandInput,
  ListImpersonationRolesCommandOutput,
} from "./commands/ListImpersonationRolesCommand";
import {
  ListMailboxExportJobsCommand,
  ListMailboxExportJobsCommandInput,
  ListMailboxExportJobsCommandOutput,
} from "./commands/ListMailboxExportJobsCommand";
import {
  ListMailboxPermissionsCommand,
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
} from "./commands/ListMailboxPermissionsCommand";
import {
  ListMailDomainsCommand,
  ListMailDomainsCommandInput,
  ListMailDomainsCommandOutput,
} from "./commands/ListMailDomainsCommand";
import {
  ListMobileDeviceAccessOverridesCommand,
  ListMobileDeviceAccessOverridesCommandInput,
  ListMobileDeviceAccessOverridesCommandOutput,
} from "./commands/ListMobileDeviceAccessOverridesCommand";
import {
  ListMobileDeviceAccessRulesCommand,
  ListMobileDeviceAccessRulesCommandInput,
  ListMobileDeviceAccessRulesCommandOutput,
} from "./commands/ListMobileDeviceAccessRulesCommand";
import {
  ListOrganizationsCommand,
  ListOrganizationsCommandInput,
  ListOrganizationsCommandOutput,
} from "./commands/ListOrganizationsCommand";
import {
  ListResourceDelegatesCommand,
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput,
} from "./commands/ListResourceDelegatesCommand";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "./commands/ListResourcesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  PutAccessControlRuleCommand,
  PutAccessControlRuleCommandInput,
  PutAccessControlRuleCommandOutput,
} from "./commands/PutAccessControlRuleCommand";
import {
  PutEmailMonitoringConfigurationCommand,
  PutEmailMonitoringConfigurationCommandInput,
  PutEmailMonitoringConfigurationCommandOutput,
} from "./commands/PutEmailMonitoringConfigurationCommand";
import {
  PutInboundDmarcSettingsCommand,
  PutInboundDmarcSettingsCommandInput,
  PutInboundDmarcSettingsCommandOutput,
} from "./commands/PutInboundDmarcSettingsCommand";
import {
  PutMailboxPermissionsCommand,
  PutMailboxPermissionsCommandInput,
  PutMailboxPermissionsCommandOutput,
} from "./commands/PutMailboxPermissionsCommand";
import {
  PutMobileDeviceAccessOverrideCommand,
  PutMobileDeviceAccessOverrideCommandInput,
  PutMobileDeviceAccessOverrideCommandOutput,
} from "./commands/PutMobileDeviceAccessOverrideCommand";
import {
  PutRetentionPolicyCommand,
  PutRetentionPolicyCommandInput,
  PutRetentionPolicyCommandOutput,
} from "./commands/PutRetentionPolicyCommand";
import {
  RegisterMailDomainCommand,
  RegisterMailDomainCommandInput,
  RegisterMailDomainCommandOutput,
} from "./commands/RegisterMailDomainCommand";
import {
  RegisterToWorkMailCommand,
  RegisterToWorkMailCommandInput,
  RegisterToWorkMailCommandOutput,
} from "./commands/RegisterToWorkMailCommand";
import {
  ResetPasswordCommand,
  ResetPasswordCommandInput,
  ResetPasswordCommandOutput,
} from "./commands/ResetPasswordCommand";
import {
  StartMailboxExportJobCommand,
  StartMailboxExportJobCommandInput,
  StartMailboxExportJobCommandOutput,
} from "./commands/StartMailboxExportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestAvailabilityConfigurationCommand,
  TestAvailabilityConfigurationCommandInput,
  TestAvailabilityConfigurationCommandOutput,
} from "./commands/TestAvailabilityConfigurationCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAvailabilityConfigurationCommand,
  UpdateAvailabilityConfigurationCommandInput,
  UpdateAvailabilityConfigurationCommandOutput,
} from "./commands/UpdateAvailabilityConfigurationCommand";
import {
  UpdateDefaultMailDomainCommand,
  UpdateDefaultMailDomainCommandInput,
  UpdateDefaultMailDomainCommandOutput,
} from "./commands/UpdateDefaultMailDomainCommand";
import {
  UpdateImpersonationRoleCommand,
  UpdateImpersonationRoleCommandInput,
  UpdateImpersonationRoleCommandOutput,
} from "./commands/UpdateImpersonationRoleCommand";
import {
  UpdateMailboxQuotaCommand,
  UpdateMailboxQuotaCommandInput,
  UpdateMailboxQuotaCommandOutput,
} from "./commands/UpdateMailboxQuotaCommand";
import {
  UpdateMobileDeviceAccessRuleCommand,
  UpdateMobileDeviceAccessRuleCommandInput,
  UpdateMobileDeviceAccessRuleCommandOutput,
} from "./commands/UpdateMobileDeviceAccessRuleCommand";
import {
  UpdatePrimaryEmailAddressCommand,
  UpdatePrimaryEmailAddressCommandInput,
  UpdatePrimaryEmailAddressCommandOutput,
} from "./commands/UpdatePrimaryEmailAddressCommand";
import {
  UpdateResourceCommand,
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
} from "./commands/UpdateResourceCommand";
import { WorkMailClient, WorkMailClientConfig } from "./WorkMailClient";

const commands = {
  AssociateDelegateToResourceCommand,
  AssociateMemberToGroupCommand,
  AssumeImpersonationRoleCommand,
  CancelMailboxExportJobCommand,
  CreateAliasCommand,
  CreateAvailabilityConfigurationCommand,
  CreateGroupCommand,
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
  DeleteImpersonationRoleCommand,
  DeleteMailboxPermissionsCommand,
  DeleteMobileDeviceAccessOverrideCommand,
  DeleteMobileDeviceAccessRuleCommand,
  DeleteOrganizationCommand,
  DeleteResourceCommand,
  DeleteRetentionPolicyCommand,
  DeleteUserCommand,
  DeregisterFromWorkMailCommand,
  DeregisterMailDomainCommand,
  DescribeEmailMonitoringConfigurationCommand,
  DescribeGroupCommand,
  DescribeInboundDmarcSettingsCommand,
  DescribeMailboxExportJobCommand,
  DescribeOrganizationCommand,
  DescribeResourceCommand,
  DescribeUserCommand,
  DisassociateDelegateFromResourceCommand,
  DisassociateMemberFromGroupCommand,
  GetAccessControlEffectCommand,
  GetDefaultRetentionPolicyCommand,
  GetImpersonationRoleCommand,
  GetImpersonationRoleEffectCommand,
  GetMailboxDetailsCommand,
  GetMailDomainCommand,
  GetMobileDeviceAccessEffectCommand,
  GetMobileDeviceAccessOverrideCommand,
  ListAccessControlRulesCommand,
  ListAliasesCommand,
  ListAvailabilityConfigurationsCommand,
  ListGroupMembersCommand,
  ListGroupsCommand,
  ListImpersonationRolesCommand,
  ListMailboxExportJobsCommand,
  ListMailboxPermissionsCommand,
  ListMailDomainsCommand,
  ListMobileDeviceAccessOverridesCommand,
  ListMobileDeviceAccessRulesCommand,
  ListOrganizationsCommand,
  ListResourceDelegatesCommand,
  ListResourcesCommand,
  ListTagsForResourceCommand,
  ListUsersCommand,
  PutAccessControlRuleCommand,
  PutEmailMonitoringConfigurationCommand,
  PutInboundDmarcSettingsCommand,
  PutMailboxPermissionsCommand,
  PutMobileDeviceAccessOverrideCommand,
  PutRetentionPolicyCommand,
  RegisterMailDomainCommand,
  RegisterToWorkMailCommand,
  ResetPasswordCommand,
  StartMailboxExportJobCommand,
  TagResourceCommand,
  TestAvailabilityConfigurationCommand,
  UntagResourceCommand,
  UpdateAvailabilityConfigurationCommand,
  UpdateDefaultMailDomainCommand,
  UpdateImpersonationRoleCommand,
  UpdateMailboxQuotaCommand,
  UpdateMobileDeviceAccessRuleCommand,
  UpdatePrimaryEmailAddressCommand,
  UpdateResourceCommand,
};

export interface WorkMail {
  /**
   * @see {@link AssociateDelegateToResourceCommand}
   */
  associateDelegateToResource(
    args: AssociateDelegateToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDelegateToResourceCommandOutput>;
  associateDelegateToResource(
    args: AssociateDelegateToResourceCommandInput,
    cb: (err: any, data?: AssociateDelegateToResourceCommandOutput) => void
  ): void;
  associateDelegateToResource(
    args: AssociateDelegateToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDelegateToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateMemberToGroupCommand}
   */
  associateMemberToGroup(
    args: AssociateMemberToGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMemberToGroupCommandOutput>;
  associateMemberToGroup(
    args: AssociateMemberToGroupCommandInput,
    cb: (err: any, data?: AssociateMemberToGroupCommandOutput) => void
  ): void;
  associateMemberToGroup(
    args: AssociateMemberToGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMemberToGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeImpersonationRoleCommand}
   */
  assumeImpersonationRole(
    args: AssumeImpersonationRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeImpersonationRoleCommandOutput>;
  assumeImpersonationRole(
    args: AssumeImpersonationRoleCommandInput,
    cb: (err: any, data?: AssumeImpersonationRoleCommandOutput) => void
  ): void;
  assumeImpersonationRole(
    args: AssumeImpersonationRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeImpersonationRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMailboxExportJobCommand}
   */
  cancelMailboxExportJob(
    args: CancelMailboxExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMailboxExportJobCommandOutput>;
  cancelMailboxExportJob(
    args: CancelMailboxExportJobCommandInput,
    cb: (err: any, data?: CancelMailboxExportJobCommandOutput) => void
  ): void;
  cancelMailboxExportJob(
    args: CancelMailboxExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMailboxExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAliasCommand}
   */
  createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
  createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
  createAlias(
    args: CreateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAvailabilityConfigurationCommand}
   */
  createAvailabilityConfiguration(
    args: CreateAvailabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAvailabilityConfigurationCommandOutput>;
  createAvailabilityConfiguration(
    args: CreateAvailabilityConfigurationCommandInput,
    cb: (err: any, data?: CreateAvailabilityConfigurationCommandOutput) => void
  ): void;
  createAvailabilityConfiguration(
    args: CreateAvailabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAvailabilityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImpersonationRoleCommand}
   */
  createImpersonationRole(
    args: CreateImpersonationRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImpersonationRoleCommandOutput>;
  createImpersonationRole(
    args: CreateImpersonationRoleCommandInput,
    cb: (err: any, data?: CreateImpersonationRoleCommandOutput) => void
  ): void;
  createImpersonationRole(
    args: CreateImpersonationRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImpersonationRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMobileDeviceAccessRuleCommand}
   */
  createMobileDeviceAccessRule(
    args: CreateMobileDeviceAccessRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMobileDeviceAccessRuleCommandOutput>;
  createMobileDeviceAccessRule(
    args: CreateMobileDeviceAccessRuleCommandInput,
    cb: (err: any, data?: CreateMobileDeviceAccessRuleCommandOutput) => void
  ): void;
  createMobileDeviceAccessRule(
    args: CreateMobileDeviceAccessRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMobileDeviceAccessRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrganizationCommand}
   */
  createOrganization(
    args: CreateOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOrganizationCommandOutput>;
  createOrganization(
    args: CreateOrganizationCommandInput,
    cb: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): void;
  createOrganization(
    args: CreateOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceCommand}
   */
  createResource(
    args: CreateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceCommandOutput>;
  createResource(args: CreateResourceCommandInput, cb: (err: any, data?: CreateResourceCommandOutput) => void): void;
  createResource(
    args: CreateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserCommand}
   */
  createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessControlRuleCommand}
   */
  deleteAccessControlRule(
    args: DeleteAccessControlRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessControlRuleCommandOutput>;
  deleteAccessControlRule(
    args: DeleteAccessControlRuleCommandInput,
    cb: (err: any, data?: DeleteAccessControlRuleCommandOutput) => void
  ): void;
  deleteAccessControlRule(
    args: DeleteAccessControlRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessControlRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAliasCommand}
   */
  deleteAlias(args: DeleteAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAliasCommandOutput>;
  deleteAlias(args: DeleteAliasCommandInput, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
  deleteAlias(
    args: DeleteAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAvailabilityConfigurationCommand}
   */
  deleteAvailabilityConfiguration(
    args: DeleteAvailabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAvailabilityConfigurationCommandOutput>;
  deleteAvailabilityConfiguration(
    args: DeleteAvailabilityConfigurationCommandInput,
    cb: (err: any, data?: DeleteAvailabilityConfigurationCommandOutput) => void
  ): void;
  deleteAvailabilityConfiguration(
    args: DeleteAvailabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAvailabilityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEmailMonitoringConfigurationCommand}
   */
  deleteEmailMonitoringConfiguration(
    args: DeleteEmailMonitoringConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEmailMonitoringConfigurationCommandOutput>;
  deleteEmailMonitoringConfiguration(
    args: DeleteEmailMonitoringConfigurationCommandInput,
    cb: (err: any, data?: DeleteEmailMonitoringConfigurationCommandOutput) => void
  ): void;
  deleteEmailMonitoringConfiguration(
    args: DeleteEmailMonitoringConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEmailMonitoringConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImpersonationRoleCommand}
   */
  deleteImpersonationRole(
    args: DeleteImpersonationRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImpersonationRoleCommandOutput>;
  deleteImpersonationRole(
    args: DeleteImpersonationRoleCommandInput,
    cb: (err: any, data?: DeleteImpersonationRoleCommandOutput) => void
  ): void;
  deleteImpersonationRole(
    args: DeleteImpersonationRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImpersonationRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMailboxPermissionsCommand}
   */
  deleteMailboxPermissions(
    args: DeleteMailboxPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMailboxPermissionsCommandOutput>;
  deleteMailboxPermissions(
    args: DeleteMailboxPermissionsCommandInput,
    cb: (err: any, data?: DeleteMailboxPermissionsCommandOutput) => void
  ): void;
  deleteMailboxPermissions(
    args: DeleteMailboxPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMailboxPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMobileDeviceAccessOverrideCommand}
   */
  deleteMobileDeviceAccessOverride(
    args: DeleteMobileDeviceAccessOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMobileDeviceAccessOverrideCommandOutput>;
  deleteMobileDeviceAccessOverride(
    args: DeleteMobileDeviceAccessOverrideCommandInput,
    cb: (err: any, data?: DeleteMobileDeviceAccessOverrideCommandOutput) => void
  ): void;
  deleteMobileDeviceAccessOverride(
    args: DeleteMobileDeviceAccessOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMobileDeviceAccessOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMobileDeviceAccessRuleCommand}
   */
  deleteMobileDeviceAccessRule(
    args: DeleteMobileDeviceAccessRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMobileDeviceAccessRuleCommandOutput>;
  deleteMobileDeviceAccessRule(
    args: DeleteMobileDeviceAccessRuleCommandInput,
    cb: (err: any, data?: DeleteMobileDeviceAccessRuleCommandOutput) => void
  ): void;
  deleteMobileDeviceAccessRule(
    args: DeleteMobileDeviceAccessRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMobileDeviceAccessRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOrganizationCommand}
   */
  deleteOrganization(
    args: DeleteOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOrganizationCommandOutput>;
  deleteOrganization(
    args: DeleteOrganizationCommandInput,
    cb: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): void;
  deleteOrganization(
    args: DeleteOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceCommand}
   */
  deleteResource(
    args: DeleteResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceCommandOutput>;
  deleteResource(args: DeleteResourceCommandInput, cb: (err: any, data?: DeleteResourceCommandOutput) => void): void;
  deleteResource(
    args: DeleteResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRetentionPolicyCommand}
   */
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRetentionPolicyCommandOutput>;
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void
  ): void;
  deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserCommand}
   */
  deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterFromWorkMailCommand}
   */
  deregisterFromWorkMail(
    args: DeregisterFromWorkMailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterFromWorkMailCommandOutput>;
  deregisterFromWorkMail(
    args: DeregisterFromWorkMailCommandInput,
    cb: (err: any, data?: DeregisterFromWorkMailCommandOutput) => void
  ): void;
  deregisterFromWorkMail(
    args: DeregisterFromWorkMailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterFromWorkMailCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterMailDomainCommand}
   */
  deregisterMailDomain(
    args: DeregisterMailDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterMailDomainCommandOutput>;
  deregisterMailDomain(
    args: DeregisterMailDomainCommandInput,
    cb: (err: any, data?: DeregisterMailDomainCommandOutput) => void
  ): void;
  deregisterMailDomain(
    args: DeregisterMailDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterMailDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEmailMonitoringConfigurationCommand}
   */
  describeEmailMonitoringConfiguration(
    args: DescribeEmailMonitoringConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEmailMonitoringConfigurationCommandOutput>;
  describeEmailMonitoringConfiguration(
    args: DescribeEmailMonitoringConfigurationCommandInput,
    cb: (err: any, data?: DescribeEmailMonitoringConfigurationCommandOutput) => void
  ): void;
  describeEmailMonitoringConfiguration(
    args: DescribeEmailMonitoringConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEmailMonitoringConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGroupCommand}
   */
  describeGroup(args: DescribeGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeGroupCommandOutput>;
  describeGroup(args: DescribeGroupCommandInput, cb: (err: any, data?: DescribeGroupCommandOutput) => void): void;
  describeGroup(
    args: DescribeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInboundDmarcSettingsCommand}
   */
  describeInboundDmarcSettings(
    args: DescribeInboundDmarcSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInboundDmarcSettingsCommandOutput>;
  describeInboundDmarcSettings(
    args: DescribeInboundDmarcSettingsCommandInput,
    cb: (err: any, data?: DescribeInboundDmarcSettingsCommandOutput) => void
  ): void;
  describeInboundDmarcSettings(
    args: DescribeInboundDmarcSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInboundDmarcSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMailboxExportJobCommand}
   */
  describeMailboxExportJob(
    args: DescribeMailboxExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMailboxExportJobCommandOutput>;
  describeMailboxExportJob(
    args: DescribeMailboxExportJobCommandInput,
    cb: (err: any, data?: DescribeMailboxExportJobCommandOutput) => void
  ): void;
  describeMailboxExportJob(
    args: DescribeMailboxExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMailboxExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationCommand}
   */
  describeOrganization(
    args: DescribeOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationCommandOutput>;
  describeOrganization(
    args: DescribeOrganizationCommandInput,
    cb: (err: any, data?: DescribeOrganizationCommandOutput) => void
  ): void;
  describeOrganization(
    args: DescribeOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourceCommand}
   */
  describeResource(
    args: DescribeResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourceCommandOutput>;
  describeResource(
    args: DescribeResourceCommandInput,
    cb: (err: any, data?: DescribeResourceCommandOutput) => void
  ): void;
  describeResource(
    args: DescribeResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserCommand}
   */
  describeUser(args: DescribeUserCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserCommandOutput>;
  describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
  describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDelegateFromResourceCommand}
   */
  disassociateDelegateFromResource(
    args: DisassociateDelegateFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDelegateFromResourceCommandOutput>;
  disassociateDelegateFromResource(
    args: DisassociateDelegateFromResourceCommandInput,
    cb: (err: any, data?: DisassociateDelegateFromResourceCommandOutput) => void
  ): void;
  disassociateDelegateFromResource(
    args: DisassociateDelegateFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDelegateFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberFromGroupCommand}
   */
  disassociateMemberFromGroup(
    args: DisassociateMemberFromGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberFromGroupCommandOutput>;
  disassociateMemberFromGroup(
    args: DisassociateMemberFromGroupCommandInput,
    cb: (err: any, data?: DisassociateMemberFromGroupCommandOutput) => void
  ): void;
  disassociateMemberFromGroup(
    args: DisassociateMemberFromGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberFromGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessControlEffectCommand}
   */
  getAccessControlEffect(
    args: GetAccessControlEffectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessControlEffectCommandOutput>;
  getAccessControlEffect(
    args: GetAccessControlEffectCommandInput,
    cb: (err: any, data?: GetAccessControlEffectCommandOutput) => void
  ): void;
  getAccessControlEffect(
    args: GetAccessControlEffectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessControlEffectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDefaultRetentionPolicyCommand}
   */
  getDefaultRetentionPolicy(
    args: GetDefaultRetentionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultRetentionPolicyCommandOutput>;
  getDefaultRetentionPolicy(
    args: GetDefaultRetentionPolicyCommandInput,
    cb: (err: any, data?: GetDefaultRetentionPolicyCommandOutput) => void
  ): void;
  getDefaultRetentionPolicy(
    args: GetDefaultRetentionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultRetentionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImpersonationRoleCommand}
   */
  getImpersonationRole(
    args: GetImpersonationRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImpersonationRoleCommandOutput>;
  getImpersonationRole(
    args: GetImpersonationRoleCommandInput,
    cb: (err: any, data?: GetImpersonationRoleCommandOutput) => void
  ): void;
  getImpersonationRole(
    args: GetImpersonationRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImpersonationRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImpersonationRoleEffectCommand}
   */
  getImpersonationRoleEffect(
    args: GetImpersonationRoleEffectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImpersonationRoleEffectCommandOutput>;
  getImpersonationRoleEffect(
    args: GetImpersonationRoleEffectCommandInput,
    cb: (err: any, data?: GetImpersonationRoleEffectCommandOutput) => void
  ): void;
  getImpersonationRoleEffect(
    args: GetImpersonationRoleEffectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImpersonationRoleEffectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMailboxDetailsCommand}
   */
  getMailboxDetails(
    args: GetMailboxDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMailboxDetailsCommandOutput>;
  getMailboxDetails(
    args: GetMailboxDetailsCommandInput,
    cb: (err: any, data?: GetMailboxDetailsCommandOutput) => void
  ): void;
  getMailboxDetails(
    args: GetMailboxDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMailboxDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMailDomainCommand}
   */
  getMailDomain(args: GetMailDomainCommandInput, options?: __HttpHandlerOptions): Promise<GetMailDomainCommandOutput>;
  getMailDomain(args: GetMailDomainCommandInput, cb: (err: any, data?: GetMailDomainCommandOutput) => void): void;
  getMailDomain(
    args: GetMailDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMailDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMobileDeviceAccessEffectCommand}
   */
  getMobileDeviceAccessEffect(
    args: GetMobileDeviceAccessEffectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMobileDeviceAccessEffectCommandOutput>;
  getMobileDeviceAccessEffect(
    args: GetMobileDeviceAccessEffectCommandInput,
    cb: (err: any, data?: GetMobileDeviceAccessEffectCommandOutput) => void
  ): void;
  getMobileDeviceAccessEffect(
    args: GetMobileDeviceAccessEffectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMobileDeviceAccessEffectCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMobileDeviceAccessOverrideCommand}
   */
  getMobileDeviceAccessOverride(
    args: GetMobileDeviceAccessOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMobileDeviceAccessOverrideCommandOutput>;
  getMobileDeviceAccessOverride(
    args: GetMobileDeviceAccessOverrideCommandInput,
    cb: (err: any, data?: GetMobileDeviceAccessOverrideCommandOutput) => void
  ): void;
  getMobileDeviceAccessOverride(
    args: GetMobileDeviceAccessOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMobileDeviceAccessOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessControlRulesCommand}
   */
  listAccessControlRules(
    args: ListAccessControlRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessControlRulesCommandOutput>;
  listAccessControlRules(
    args: ListAccessControlRulesCommandInput,
    cb: (err: any, data?: ListAccessControlRulesCommandOutput) => void
  ): void;
  listAccessControlRules(
    args: ListAccessControlRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessControlRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
  listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
  listAliases(
    args: ListAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailabilityConfigurationsCommand}
   */
  listAvailabilityConfigurations(
    args: ListAvailabilityConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailabilityConfigurationsCommandOutput>;
  listAvailabilityConfigurations(
    args: ListAvailabilityConfigurationsCommandInput,
    cb: (err: any, data?: ListAvailabilityConfigurationsCommandOutput) => void
  ): void;
  listAvailabilityConfigurations(
    args: ListAvailabilityConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailabilityConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupMembersCommand}
   */
  listGroupMembers(
    args: ListGroupMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupMembersCommandOutput>;
  listGroupMembers(
    args: ListGroupMembersCommandInput,
    cb: (err: any, data?: ListGroupMembersCommandOutput) => void
  ): void;
  listGroupMembers(
    args: ListGroupMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImpersonationRolesCommand}
   */
  listImpersonationRoles(
    args: ListImpersonationRolesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImpersonationRolesCommandOutput>;
  listImpersonationRoles(
    args: ListImpersonationRolesCommandInput,
    cb: (err: any, data?: ListImpersonationRolesCommandOutput) => void
  ): void;
  listImpersonationRoles(
    args: ListImpersonationRolesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImpersonationRolesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMailboxExportJobsCommand}
   */
  listMailboxExportJobs(
    args: ListMailboxExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMailboxExportJobsCommandOutput>;
  listMailboxExportJobs(
    args: ListMailboxExportJobsCommandInput,
    cb: (err: any, data?: ListMailboxExportJobsCommandOutput) => void
  ): void;
  listMailboxExportJobs(
    args: ListMailboxExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMailboxExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMailboxPermissionsCommand}
   */
  listMailboxPermissions(
    args: ListMailboxPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMailboxPermissionsCommandOutput>;
  listMailboxPermissions(
    args: ListMailboxPermissionsCommandInput,
    cb: (err: any, data?: ListMailboxPermissionsCommandOutput) => void
  ): void;
  listMailboxPermissions(
    args: ListMailboxPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMailboxPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMailDomainsCommand}
   */
  listMailDomains(
    args: ListMailDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMailDomainsCommandOutput>;
  listMailDomains(args: ListMailDomainsCommandInput, cb: (err: any, data?: ListMailDomainsCommandOutput) => void): void;
  listMailDomains(
    args: ListMailDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMailDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMobileDeviceAccessOverridesCommand}
   */
  listMobileDeviceAccessOverrides(
    args: ListMobileDeviceAccessOverridesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMobileDeviceAccessOverridesCommandOutput>;
  listMobileDeviceAccessOverrides(
    args: ListMobileDeviceAccessOverridesCommandInput,
    cb: (err: any, data?: ListMobileDeviceAccessOverridesCommandOutput) => void
  ): void;
  listMobileDeviceAccessOverrides(
    args: ListMobileDeviceAccessOverridesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMobileDeviceAccessOverridesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMobileDeviceAccessRulesCommand}
   */
  listMobileDeviceAccessRules(
    args: ListMobileDeviceAccessRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMobileDeviceAccessRulesCommandOutput>;
  listMobileDeviceAccessRules(
    args: ListMobileDeviceAccessRulesCommandInput,
    cb: (err: any, data?: ListMobileDeviceAccessRulesCommandOutput) => void
  ): void;
  listMobileDeviceAccessRules(
    args: ListMobileDeviceAccessRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMobileDeviceAccessRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationsCommand}
   */
  listOrganizations(
    args: ListOrganizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationsCommandOutput>;
  listOrganizations(
    args: ListOrganizationsCommandInput,
    cb: (err: any, data?: ListOrganizationsCommandOutput) => void
  ): void;
  listOrganizations(
    args: ListOrganizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceDelegatesCommand}
   */
  listResourceDelegates(
    args: ListResourceDelegatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceDelegatesCommandOutput>;
  listResourceDelegates(
    args: ListResourceDelegatesCommandInput,
    cb: (err: any, data?: ListResourceDelegatesCommandOutput) => void
  ): void;
  listResourceDelegates(
    args: ListResourceDelegatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceDelegatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesCommand}
   */
  listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
  listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
  listResources(
    args: ListResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUsersCommand}
   */
  listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccessControlRuleCommand}
   */
  putAccessControlRule(
    args: PutAccessControlRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccessControlRuleCommandOutput>;
  putAccessControlRule(
    args: PutAccessControlRuleCommandInput,
    cb: (err: any, data?: PutAccessControlRuleCommandOutput) => void
  ): void;
  putAccessControlRule(
    args: PutAccessControlRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccessControlRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link PutEmailMonitoringConfigurationCommand}
   */
  putEmailMonitoringConfiguration(
    args: PutEmailMonitoringConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutEmailMonitoringConfigurationCommandOutput>;
  putEmailMonitoringConfiguration(
    args: PutEmailMonitoringConfigurationCommandInput,
    cb: (err: any, data?: PutEmailMonitoringConfigurationCommandOutput) => void
  ): void;
  putEmailMonitoringConfiguration(
    args: PutEmailMonitoringConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutEmailMonitoringConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutInboundDmarcSettingsCommand}
   */
  putInboundDmarcSettings(
    args: PutInboundDmarcSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInboundDmarcSettingsCommandOutput>;
  putInboundDmarcSettings(
    args: PutInboundDmarcSettingsCommandInput,
    cb: (err: any, data?: PutInboundDmarcSettingsCommandOutput) => void
  ): void;
  putInboundDmarcSettings(
    args: PutInboundDmarcSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInboundDmarcSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMailboxPermissionsCommand}
   */
  putMailboxPermissions(
    args: PutMailboxPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMailboxPermissionsCommandOutput>;
  putMailboxPermissions(
    args: PutMailboxPermissionsCommandInput,
    cb: (err: any, data?: PutMailboxPermissionsCommandOutput) => void
  ): void;
  putMailboxPermissions(
    args: PutMailboxPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMailboxPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMobileDeviceAccessOverrideCommand}
   */
  putMobileDeviceAccessOverride(
    args: PutMobileDeviceAccessOverrideCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMobileDeviceAccessOverrideCommandOutput>;
  putMobileDeviceAccessOverride(
    args: PutMobileDeviceAccessOverrideCommandInput,
    cb: (err: any, data?: PutMobileDeviceAccessOverrideCommandOutput) => void
  ): void;
  putMobileDeviceAccessOverride(
    args: PutMobileDeviceAccessOverrideCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMobileDeviceAccessOverrideCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRetentionPolicyCommand}
   */
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRetentionPolicyCommandOutput>;
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void
  ): void;
  putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterMailDomainCommand}
   */
  registerMailDomain(
    args: RegisterMailDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterMailDomainCommandOutput>;
  registerMailDomain(
    args: RegisterMailDomainCommandInput,
    cb: (err: any, data?: RegisterMailDomainCommandOutput) => void
  ): void;
  registerMailDomain(
    args: RegisterMailDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterMailDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterToWorkMailCommand}
   */
  registerToWorkMail(
    args: RegisterToWorkMailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterToWorkMailCommandOutput>;
  registerToWorkMail(
    args: RegisterToWorkMailCommandInput,
    cb: (err: any, data?: RegisterToWorkMailCommandOutput) => void
  ): void;
  registerToWorkMail(
    args: RegisterToWorkMailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterToWorkMailCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetPasswordCommand}
   */
  resetPassword(args: ResetPasswordCommandInput, options?: __HttpHandlerOptions): Promise<ResetPasswordCommandOutput>;
  resetPassword(args: ResetPasswordCommandInput, cb: (err: any, data?: ResetPasswordCommandOutput) => void): void;
  resetPassword(
    args: ResetPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetPasswordCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMailboxExportJobCommand}
   */
  startMailboxExportJob(
    args: StartMailboxExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMailboxExportJobCommandOutput>;
  startMailboxExportJob(
    args: StartMailboxExportJobCommandInput,
    cb: (err: any, data?: StartMailboxExportJobCommandOutput) => void
  ): void;
  startMailboxExportJob(
    args: StartMailboxExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMailboxExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestAvailabilityConfigurationCommand}
   */
  testAvailabilityConfiguration(
    args: TestAvailabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestAvailabilityConfigurationCommandOutput>;
  testAvailabilityConfiguration(
    args: TestAvailabilityConfigurationCommandInput,
    cb: (err: any, data?: TestAvailabilityConfigurationCommandOutput) => void
  ): void;
  testAvailabilityConfiguration(
    args: TestAvailabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestAvailabilityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAvailabilityConfigurationCommand}
   */
  updateAvailabilityConfiguration(
    args: UpdateAvailabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAvailabilityConfigurationCommandOutput>;
  updateAvailabilityConfiguration(
    args: UpdateAvailabilityConfigurationCommandInput,
    cb: (err: any, data?: UpdateAvailabilityConfigurationCommandOutput) => void
  ): void;
  updateAvailabilityConfiguration(
    args: UpdateAvailabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAvailabilityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDefaultMailDomainCommand}
   */
  updateDefaultMailDomain(
    args: UpdateDefaultMailDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDefaultMailDomainCommandOutput>;
  updateDefaultMailDomain(
    args: UpdateDefaultMailDomainCommandInput,
    cb: (err: any, data?: UpdateDefaultMailDomainCommandOutput) => void
  ): void;
  updateDefaultMailDomain(
    args: UpdateDefaultMailDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDefaultMailDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateImpersonationRoleCommand}
   */
  updateImpersonationRole(
    args: UpdateImpersonationRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateImpersonationRoleCommandOutput>;
  updateImpersonationRole(
    args: UpdateImpersonationRoleCommandInput,
    cb: (err: any, data?: UpdateImpersonationRoleCommandOutput) => void
  ): void;
  updateImpersonationRole(
    args: UpdateImpersonationRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateImpersonationRoleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMailboxQuotaCommand}
   */
  updateMailboxQuota(
    args: UpdateMailboxQuotaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMailboxQuotaCommandOutput>;
  updateMailboxQuota(
    args: UpdateMailboxQuotaCommandInput,
    cb: (err: any, data?: UpdateMailboxQuotaCommandOutput) => void
  ): void;
  updateMailboxQuota(
    args: UpdateMailboxQuotaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMailboxQuotaCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMobileDeviceAccessRuleCommand}
   */
  updateMobileDeviceAccessRule(
    args: UpdateMobileDeviceAccessRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMobileDeviceAccessRuleCommandOutput>;
  updateMobileDeviceAccessRule(
    args: UpdateMobileDeviceAccessRuleCommandInput,
    cb: (err: any, data?: UpdateMobileDeviceAccessRuleCommandOutput) => void
  ): void;
  updateMobileDeviceAccessRule(
    args: UpdateMobileDeviceAccessRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMobileDeviceAccessRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePrimaryEmailAddressCommand}
   */
  updatePrimaryEmailAddress(
    args: UpdatePrimaryEmailAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePrimaryEmailAddressCommandOutput>;
  updatePrimaryEmailAddress(
    args: UpdatePrimaryEmailAddressCommandInput,
    cb: (err: any, data?: UpdatePrimaryEmailAddressCommandOutput) => void
  ): void;
  updatePrimaryEmailAddress(
    args: UpdatePrimaryEmailAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePrimaryEmailAddressCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceCommand}
   */
  updateResource(
    args: UpdateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCommandOutput>;
  updateResource(args: UpdateResourceCommandInput, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
  updateResource(
    args: UpdateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>WorkMail is a secure, managed business email and calendaring service with support for
 *          existing desktop and mobile email clients. You can access your email, contacts, and
 *          calendars using Microsoft Outlook, your browser, or other native iOS and Android email
 *          applications. You can integrate WorkMail with your existing corporate directory and control
 *          both the keys that encrypt your data and the location in which your data is
 *          stored.</p>
 *          <p>The WorkMail API is designed for the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>Listing and describing organizations</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing users</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing groups</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing resources</p>
 *             </li>
 *          </ul>
 *          <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not
 *          only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management
 *          users and roles to help facilitate access, trust, and permission policies. By creating a
 *          role and allowing an IAM user to access the WorkMail site, the IAM user gains full
 *          administrative visibility into the entire WorkMail organization (or as set in the IAM
 *          policy). This includes, but is not limited to, the ability to create, update, and delete
 *          users, groups, and resources. This allows developers to perform the scenarios listed above,
 *          as well as give users the ability to grant access on a selective basis using the IAM
 *          model.</p>
 */
export class WorkMail extends WorkMailClient implements WorkMail {}
createAggregatedClient(commands, WorkMail);
