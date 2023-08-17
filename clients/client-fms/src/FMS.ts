// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateAdminAccountCommand,
  AssociateAdminAccountCommandInput,
  AssociateAdminAccountCommandOutput,
} from "./commands/AssociateAdminAccountCommand";
import {
  AssociateThirdPartyFirewallCommand,
  AssociateThirdPartyFirewallCommandInput,
  AssociateThirdPartyFirewallCommandOutput,
} from "./commands/AssociateThirdPartyFirewallCommand";
import {
  BatchAssociateResourceCommand,
  BatchAssociateResourceCommandInput,
  BatchAssociateResourceCommandOutput,
} from "./commands/BatchAssociateResourceCommand";
import {
  BatchDisassociateResourceCommand,
  BatchDisassociateResourceCommandInput,
  BatchDisassociateResourceCommandOutput,
} from "./commands/BatchDisassociateResourceCommand";
import {
  DeleteAppsListCommand,
  DeleteAppsListCommandInput,
  DeleteAppsListCommandOutput,
} from "./commands/DeleteAppsListCommand";
import {
  DeleteNotificationChannelCommand,
  DeleteNotificationChannelCommandInput,
  DeleteNotificationChannelCommandOutput,
} from "./commands/DeleteNotificationChannelCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeleteProtocolsListCommand,
  DeleteProtocolsListCommandInput,
  DeleteProtocolsListCommandOutput,
} from "./commands/DeleteProtocolsListCommand";
import {
  DeleteResourceSetCommand,
  DeleteResourceSetCommandInput,
  DeleteResourceSetCommandOutput,
} from "./commands/DeleteResourceSetCommand";
import {
  DisassociateAdminAccountCommand,
  DisassociateAdminAccountCommandInput,
  DisassociateAdminAccountCommandOutput,
} from "./commands/DisassociateAdminAccountCommand";
import {
  DisassociateThirdPartyFirewallCommand,
  DisassociateThirdPartyFirewallCommandInput,
  DisassociateThirdPartyFirewallCommandOutput,
} from "./commands/DisassociateThirdPartyFirewallCommand";
import {
  GetAdminAccountCommand,
  GetAdminAccountCommandInput,
  GetAdminAccountCommandOutput,
} from "./commands/GetAdminAccountCommand";
import {
  GetAdminScopeCommand,
  GetAdminScopeCommandInput,
  GetAdminScopeCommandOutput,
} from "./commands/GetAdminScopeCommand";
import { GetAppsListCommand, GetAppsListCommandInput, GetAppsListCommandOutput } from "./commands/GetAppsListCommand";
import {
  GetComplianceDetailCommand,
  GetComplianceDetailCommandInput,
  GetComplianceDetailCommandOutput,
} from "./commands/GetComplianceDetailCommand";
import {
  GetNotificationChannelCommand,
  GetNotificationChannelCommandInput,
  GetNotificationChannelCommandOutput,
} from "./commands/GetNotificationChannelCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  GetProtectionStatusCommand,
  GetProtectionStatusCommandInput,
  GetProtectionStatusCommandOutput,
} from "./commands/GetProtectionStatusCommand";
import {
  GetProtocolsListCommand,
  GetProtocolsListCommandInput,
  GetProtocolsListCommandOutput,
} from "./commands/GetProtocolsListCommand";
import {
  GetResourceSetCommand,
  GetResourceSetCommandInput,
  GetResourceSetCommandOutput,
} from "./commands/GetResourceSetCommand";
import {
  GetThirdPartyFirewallAssociationStatusCommand,
  GetThirdPartyFirewallAssociationStatusCommandInput,
  GetThirdPartyFirewallAssociationStatusCommandOutput,
} from "./commands/GetThirdPartyFirewallAssociationStatusCommand";
import {
  GetViolationDetailsCommand,
  GetViolationDetailsCommandInput,
  GetViolationDetailsCommandOutput,
} from "./commands/GetViolationDetailsCommand";
import {
  ListAdminAccountsForOrganizationCommand,
  ListAdminAccountsForOrganizationCommandInput,
  ListAdminAccountsForOrganizationCommandOutput,
} from "./commands/ListAdminAccountsForOrganizationCommand";
import {
  ListAdminsManagingAccountCommand,
  ListAdminsManagingAccountCommandInput,
  ListAdminsManagingAccountCommandOutput,
} from "./commands/ListAdminsManagingAccountCommand";
import {
  ListAppsListsCommand,
  ListAppsListsCommandInput,
  ListAppsListsCommandOutput,
} from "./commands/ListAppsListsCommand";
import {
  ListComplianceStatusCommand,
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput,
} from "./commands/ListComplianceStatusCommand";
import {
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "./commands/ListDiscoveredResourcesCommand";
import {
  ListMemberAccountsCommand,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
} from "./commands/ListMemberAccountsCommand";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "./commands/ListPoliciesCommand";
import {
  ListProtocolsListsCommand,
  ListProtocolsListsCommandInput,
  ListProtocolsListsCommandOutput,
} from "./commands/ListProtocolsListsCommand";
import {
  ListResourceSetResourcesCommand,
  ListResourceSetResourcesCommandInput,
  ListResourceSetResourcesCommandOutput,
} from "./commands/ListResourceSetResourcesCommand";
import {
  ListResourceSetsCommand,
  ListResourceSetsCommandInput,
  ListResourceSetsCommandOutput,
} from "./commands/ListResourceSetsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListThirdPartyFirewallFirewallPoliciesCommand,
  ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ListThirdPartyFirewallFirewallPoliciesCommandOutput,
} from "./commands/ListThirdPartyFirewallFirewallPoliciesCommand";
import {
  PutAdminAccountCommand,
  PutAdminAccountCommandInput,
  PutAdminAccountCommandOutput,
} from "./commands/PutAdminAccountCommand";
import { PutAppsListCommand, PutAppsListCommandInput, PutAppsListCommandOutput } from "./commands/PutAppsListCommand";
import {
  PutNotificationChannelCommand,
  PutNotificationChannelCommandInput,
  PutNotificationChannelCommandOutput,
} from "./commands/PutNotificationChannelCommand";
import { PutPolicyCommand, PutPolicyCommandInput, PutPolicyCommandOutput } from "./commands/PutPolicyCommand";
import {
  PutProtocolsListCommand,
  PutProtocolsListCommandInput,
  PutProtocolsListCommandOutput,
} from "./commands/PutProtocolsListCommand";
import {
  PutResourceSetCommand,
  PutResourceSetCommandInput,
  PutResourceSetCommandOutput,
} from "./commands/PutResourceSetCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { FMSClient, FMSClientConfig } from "./FMSClient";

const commands = {
  AssociateAdminAccountCommand,
  AssociateThirdPartyFirewallCommand,
  BatchAssociateResourceCommand,
  BatchDisassociateResourceCommand,
  DeleteAppsListCommand,
  DeleteNotificationChannelCommand,
  DeletePolicyCommand,
  DeleteProtocolsListCommand,
  DeleteResourceSetCommand,
  DisassociateAdminAccountCommand,
  DisassociateThirdPartyFirewallCommand,
  GetAdminAccountCommand,
  GetAdminScopeCommand,
  GetAppsListCommand,
  GetComplianceDetailCommand,
  GetNotificationChannelCommand,
  GetPolicyCommand,
  GetProtectionStatusCommand,
  GetProtocolsListCommand,
  GetResourceSetCommand,
  GetThirdPartyFirewallAssociationStatusCommand,
  GetViolationDetailsCommand,
  ListAdminAccountsForOrganizationCommand,
  ListAdminsManagingAccountCommand,
  ListAppsListsCommand,
  ListComplianceStatusCommand,
  ListDiscoveredResourcesCommand,
  ListMemberAccountsCommand,
  ListPoliciesCommand,
  ListProtocolsListsCommand,
  ListResourceSetResourcesCommand,
  ListResourceSetsCommand,
  ListTagsForResourceCommand,
  ListThirdPartyFirewallFirewallPoliciesCommand,
  PutAdminAccountCommand,
  PutAppsListCommand,
  PutNotificationChannelCommand,
  PutPolicyCommand,
  PutProtocolsListCommand,
  PutResourceSetCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface FMS {
  /**
   * @see {@link AssociateAdminAccountCommand}
   */
  associateAdminAccount(
    args: AssociateAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAdminAccountCommandOutput>;
  associateAdminAccount(
    args: AssociateAdminAccountCommandInput,
    cb: (err: any, data?: AssociateAdminAccountCommandOutput) => void
  ): void;
  associateAdminAccount(
    args: AssociateAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateThirdPartyFirewallCommand}
   */
  associateThirdPartyFirewall(
    args: AssociateThirdPartyFirewallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateThirdPartyFirewallCommandOutput>;
  associateThirdPartyFirewall(
    args: AssociateThirdPartyFirewallCommandInput,
    cb: (err: any, data?: AssociateThirdPartyFirewallCommandOutput) => void
  ): void;
  associateThirdPartyFirewall(
    args: AssociateThirdPartyFirewallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateThirdPartyFirewallCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateResourceCommand}
   */
  batchAssociateResource(
    args: BatchAssociateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateResourceCommandOutput>;
  batchAssociateResource(
    args: BatchAssociateResourceCommandInput,
    cb: (err: any, data?: BatchAssociateResourceCommandOutput) => void
  ): void;
  batchAssociateResource(
    args: BatchAssociateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateResourceCommand}
   */
  batchDisassociateResource(
    args: BatchDisassociateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateResourceCommandOutput>;
  batchDisassociateResource(
    args: BatchDisassociateResourceCommandInput,
    cb: (err: any, data?: BatchDisassociateResourceCommandOutput) => void
  ): void;
  batchDisassociateResource(
    args: BatchDisassociateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppsListCommand}
   */
  deleteAppsList(
    args: DeleteAppsListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppsListCommandOutput>;
  deleteAppsList(args: DeleteAppsListCommandInput, cb: (err: any, data?: DeleteAppsListCommandOutput) => void): void;
  deleteAppsList(
    args: DeleteAppsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppsListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotificationChannelCommand}
   */
  deleteNotificationChannel(
    args: DeleteNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationChannelCommandOutput>;
  deleteNotificationChannel(
    args: DeleteNotificationChannelCommandInput,
    cb: (err: any, data?: DeleteNotificationChannelCommandOutput) => void
  ): void;
  deleteNotificationChannel(
    args: DeleteNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
  deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProtocolsListCommand}
   */
  deleteProtocolsList(
    args: DeleteProtocolsListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProtocolsListCommandOutput>;
  deleteProtocolsList(
    args: DeleteProtocolsListCommandInput,
    cb: (err: any, data?: DeleteProtocolsListCommandOutput) => void
  ): void;
  deleteProtocolsList(
    args: DeleteProtocolsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProtocolsListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceSetCommand}
   */
  deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceSetCommandOutput>;
  deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    cb: (err: any, data?: DeleteResourceSetCommandOutput) => void
  ): void;
  deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAdminAccountCommand}
   */
  disassociateAdminAccount(
    args: DisassociateAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAdminAccountCommandOutput>;
  disassociateAdminAccount(
    args: DisassociateAdminAccountCommandInput,
    cb: (err: any, data?: DisassociateAdminAccountCommandOutput) => void
  ): void;
  disassociateAdminAccount(
    args: DisassociateAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateThirdPartyFirewallCommand}
   */
  disassociateThirdPartyFirewall(
    args: DisassociateThirdPartyFirewallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateThirdPartyFirewallCommandOutput>;
  disassociateThirdPartyFirewall(
    args: DisassociateThirdPartyFirewallCommandInput,
    cb: (err: any, data?: DisassociateThirdPartyFirewallCommandOutput) => void
  ): void;
  disassociateThirdPartyFirewall(
    args: DisassociateThirdPartyFirewallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateThirdPartyFirewallCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdminAccountCommand}
   */
  getAdminAccount(
    args: GetAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAdminAccountCommandOutput>;
  getAdminAccount(args: GetAdminAccountCommandInput, cb: (err: any, data?: GetAdminAccountCommandOutput) => void): void;
  getAdminAccount(
    args: GetAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdminScopeCommand}
   */
  getAdminScope(args: GetAdminScopeCommandInput, options?: __HttpHandlerOptions): Promise<GetAdminScopeCommandOutput>;
  getAdminScope(args: GetAdminScopeCommandInput, cb: (err: any, data?: GetAdminScopeCommandOutput) => void): void;
  getAdminScope(
    args: GetAdminScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAdminScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAppsListCommand}
   */
  getAppsList(args: GetAppsListCommandInput, options?: __HttpHandlerOptions): Promise<GetAppsListCommandOutput>;
  getAppsList(args: GetAppsListCommandInput, cb: (err: any, data?: GetAppsListCommandOutput) => void): void;
  getAppsList(
    args: GetAppsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppsListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComplianceDetailCommand}
   */
  getComplianceDetail(
    args: GetComplianceDetailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceDetailCommandOutput>;
  getComplianceDetail(
    args: GetComplianceDetailCommandInput,
    cb: (err: any, data?: GetComplianceDetailCommandOutput) => void
  ): void;
  getComplianceDetail(
    args: GetComplianceDetailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceDetailCommandOutput) => void
  ): void;

  /**
   * @see {@link GetNotificationChannelCommand}
   */
  getNotificationChannel(
    args: GetNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNotificationChannelCommandOutput>;
  getNotificationChannel(
    args: GetNotificationChannelCommandInput,
    cb: (err: any, data?: GetNotificationChannelCommandOutput) => void
  ): void;
  getNotificationChannel(
    args: GetNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNotificationChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProtectionStatusCommand}
   */
  getProtectionStatus(
    args: GetProtectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProtectionStatusCommandOutput>;
  getProtectionStatus(
    args: GetProtectionStatusCommandInput,
    cb: (err: any, data?: GetProtectionStatusCommandOutput) => void
  ): void;
  getProtectionStatus(
    args: GetProtectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProtectionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProtocolsListCommand}
   */
  getProtocolsList(
    args: GetProtocolsListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProtocolsListCommandOutput>;
  getProtocolsList(
    args: GetProtocolsListCommandInput,
    cb: (err: any, data?: GetProtocolsListCommandOutput) => void
  ): void;
  getProtocolsList(
    args: GetProtocolsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProtocolsListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceSetCommand}
   */
  getResourceSet(
    args: GetResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceSetCommandOutput>;
  getResourceSet(args: GetResourceSetCommandInput, cb: (err: any, data?: GetResourceSetCommandOutput) => void): void;
  getResourceSet(
    args: GetResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetThirdPartyFirewallAssociationStatusCommand}
   */
  getThirdPartyFirewallAssociationStatus(
    args: GetThirdPartyFirewallAssociationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetThirdPartyFirewallAssociationStatusCommandOutput>;
  getThirdPartyFirewallAssociationStatus(
    args: GetThirdPartyFirewallAssociationStatusCommandInput,
    cb: (err: any, data?: GetThirdPartyFirewallAssociationStatusCommandOutput) => void
  ): void;
  getThirdPartyFirewallAssociationStatus(
    args: GetThirdPartyFirewallAssociationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThirdPartyFirewallAssociationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetViolationDetailsCommand}
   */
  getViolationDetails(
    args: GetViolationDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetViolationDetailsCommandOutput>;
  getViolationDetails(
    args: GetViolationDetailsCommandInput,
    cb: (err: any, data?: GetViolationDetailsCommandOutput) => void
  ): void;
  getViolationDetails(
    args: GetViolationDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetViolationDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAdminAccountsForOrganizationCommand}
   */
  listAdminAccountsForOrganization(
    args: ListAdminAccountsForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAdminAccountsForOrganizationCommandOutput>;
  listAdminAccountsForOrganization(
    args: ListAdminAccountsForOrganizationCommandInput,
    cb: (err: any, data?: ListAdminAccountsForOrganizationCommandOutput) => void
  ): void;
  listAdminAccountsForOrganization(
    args: ListAdminAccountsForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAdminAccountsForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAdminsManagingAccountCommand}
   */
  listAdminsManagingAccount(
    args: ListAdminsManagingAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAdminsManagingAccountCommandOutput>;
  listAdminsManagingAccount(
    args: ListAdminsManagingAccountCommandInput,
    cb: (err: any, data?: ListAdminsManagingAccountCommandOutput) => void
  ): void;
  listAdminsManagingAccount(
    args: ListAdminsManagingAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAdminsManagingAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppsListsCommand}
   */
  listAppsLists(args: ListAppsListsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsListsCommandOutput>;
  listAppsLists(args: ListAppsListsCommandInput, cb: (err: any, data?: ListAppsListsCommandOutput) => void): void;
  listAppsLists(
    args: ListAppsListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComplianceStatusCommand}
   */
  listComplianceStatus(
    args: ListComplianceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComplianceStatusCommandOutput>;
  listComplianceStatus(
    args: ListComplianceStatusCommandInput,
    cb: (err: any, data?: ListComplianceStatusCommandOutput) => void
  ): void;
  listComplianceStatus(
    args: ListComplianceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComplianceStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDiscoveredResourcesCommand}
   */
  listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoveredResourcesCommandOutput>;
  listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;
  listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMemberAccountsCommand}
   */
  listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMemberAccountsCommandOutput>;
  listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    cb: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): void;
  listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(args: ListPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesCommandOutput>;
  listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
  listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProtocolsListsCommand}
   */
  listProtocolsLists(
    args: ListProtocolsListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtocolsListsCommandOutput>;
  listProtocolsLists(
    args: ListProtocolsListsCommandInput,
    cb: (err: any, data?: ListProtocolsListsCommandOutput) => void
  ): void;
  listProtocolsLists(
    args: ListProtocolsListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtocolsListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceSetResourcesCommand}
   */
  listResourceSetResources(
    args: ListResourceSetResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceSetResourcesCommandOutput>;
  listResourceSetResources(
    args: ListResourceSetResourcesCommandInput,
    cb: (err: any, data?: ListResourceSetResourcesCommandOutput) => void
  ): void;
  listResourceSetResources(
    args: ListResourceSetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceSetResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceSetsCommand}
   */
  listResourceSets(
    args: ListResourceSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceSetsCommandOutput>;
  listResourceSets(
    args: ListResourceSetsCommandInput,
    cb: (err: any, data?: ListResourceSetsCommandOutput) => void
  ): void;
  listResourceSets(
    args: ListResourceSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceSetsCommandOutput) => void
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
   * @see {@link ListThirdPartyFirewallFirewallPoliciesCommand}
   */
  listThirdPartyFirewallFirewallPolicies(
    args: ListThirdPartyFirewallFirewallPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThirdPartyFirewallFirewallPoliciesCommandOutput>;
  listThirdPartyFirewallFirewallPolicies(
    args: ListThirdPartyFirewallFirewallPoliciesCommandInput,
    cb: (err: any, data?: ListThirdPartyFirewallFirewallPoliciesCommandOutput) => void
  ): void;
  listThirdPartyFirewallFirewallPolicies(
    args: ListThirdPartyFirewallFirewallPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThirdPartyFirewallFirewallPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAdminAccountCommand}
   */
  putAdminAccount(
    args: PutAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAdminAccountCommandOutput>;
  putAdminAccount(args: PutAdminAccountCommandInput, cb: (err: any, data?: PutAdminAccountCommandOutput) => void): void;
  putAdminAccount(
    args: PutAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAppsListCommand}
   */
  putAppsList(args: PutAppsListCommandInput, options?: __HttpHandlerOptions): Promise<PutAppsListCommandOutput>;
  putAppsList(args: PutAppsListCommandInput, cb: (err: any, data?: PutAppsListCommandOutput) => void): void;
  putAppsList(
    args: PutAppsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppsListCommandOutput) => void
  ): void;

  /**
   * @see {@link PutNotificationChannelCommand}
   */
  putNotificationChannel(
    args: PutNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutNotificationChannelCommandOutput>;
  putNotificationChannel(
    args: PutNotificationChannelCommandInput,
    cb: (err: any, data?: PutNotificationChannelCommandOutput) => void
  ): void;
  putNotificationChannel(
    args: PutNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutNotificationChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPolicyCommand}
   */
  putPolicy(args: PutPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutPolicyCommandOutput>;
  putPolicy(args: PutPolicyCommandInput, cb: (err: any, data?: PutPolicyCommandOutput) => void): void;
  putPolicy(
    args: PutPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutProtocolsListCommand}
   */
  putProtocolsList(
    args: PutProtocolsListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProtocolsListCommandOutput>;
  putProtocolsList(
    args: PutProtocolsListCommandInput,
    cb: (err: any, data?: PutProtocolsListCommandOutput) => void
  ): void;
  putProtocolsList(
    args: PutProtocolsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProtocolsListCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourceSetCommand}
   */
  putResourceSet(
    args: PutResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourceSetCommandOutput>;
  putResourceSet(args: PutResourceSetCommandInput, cb: (err: any, data?: PutResourceSetCommandOutput) => void): void;
  putResourceSet(
    args: PutResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourceSetCommandOutput) => void
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
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This is the <i>Firewall Manager API Reference</i>. This guide is for
 *       developers who need detailed information about the Firewall Manager API actions, data
 *       types, and errors. For detailed information about Firewall Manager features, see the
 *         <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">Firewall Manager Developer Guide</a>.</p>
 *          <p>Some API actions require explicit resource permissions. For information, see the developer guide topic
 *         <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-security_iam_service-with-iam.html#fms-security_iam_service-with-iam-roles-service">Service roles for Firewall Manager</a>.
 * </p>
 */
export class FMS extends FMSClient implements FMS {}
createAggregatedClient(commands, FMS);
