// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  type AcceptInvitationCommandInput,
  type AcceptInvitationCommandOutput,
  AcceptInvitationCommand,
} from "./commands/AcceptInvitationCommand";
import {
  type BatchGetCustomDataIdentifiersCommandInput,
  type BatchGetCustomDataIdentifiersCommandOutput,
  BatchGetCustomDataIdentifiersCommand,
} from "./commands/BatchGetCustomDataIdentifiersCommand";
import {
  type BatchUpdateAutomatedDiscoveryAccountsCommandInput,
  type BatchUpdateAutomatedDiscoveryAccountsCommandOutput,
  BatchUpdateAutomatedDiscoveryAccountsCommand,
} from "./commands/BatchUpdateAutomatedDiscoveryAccountsCommand";
import {
  type CreateAllowListCommandInput,
  type CreateAllowListCommandOutput,
  CreateAllowListCommand,
} from "./commands/CreateAllowListCommand";
import {
  type CreateClassificationJobCommandInput,
  type CreateClassificationJobCommandOutput,
  CreateClassificationJobCommand,
} from "./commands/CreateClassificationJobCommand";
import {
  type CreateCustomDataIdentifierCommandInput,
  type CreateCustomDataIdentifierCommandOutput,
  CreateCustomDataIdentifierCommand,
} from "./commands/CreateCustomDataIdentifierCommand";
import {
  type CreateFindingsFilterCommandInput,
  type CreateFindingsFilterCommandOutput,
  CreateFindingsFilterCommand,
} from "./commands/CreateFindingsFilterCommand";
import {
  type CreateInvitationsCommandInput,
  type CreateInvitationsCommandOutput,
  CreateInvitationsCommand,
} from "./commands/CreateInvitationsCommand";
import {
  type CreateMemberCommandInput,
  type CreateMemberCommandOutput,
  CreateMemberCommand,
} from "./commands/CreateMemberCommand";
import {
  type CreateSampleFindingsCommandInput,
  type CreateSampleFindingsCommandOutput,
  CreateSampleFindingsCommand,
} from "./commands/CreateSampleFindingsCommand";
import {
  type DeclineInvitationsCommandInput,
  type DeclineInvitationsCommandOutput,
  DeclineInvitationsCommand,
} from "./commands/DeclineInvitationsCommand";
import {
  type DeleteAllowListCommandInput,
  type DeleteAllowListCommandOutput,
  DeleteAllowListCommand,
} from "./commands/DeleteAllowListCommand";
import {
  type DeleteCustomDataIdentifierCommandInput,
  type DeleteCustomDataIdentifierCommandOutput,
  DeleteCustomDataIdentifierCommand,
} from "./commands/DeleteCustomDataIdentifierCommand";
import {
  type DeleteFindingsFilterCommandInput,
  type DeleteFindingsFilterCommandOutput,
  DeleteFindingsFilterCommand,
} from "./commands/DeleteFindingsFilterCommand";
import {
  type DeleteInvitationsCommandInput,
  type DeleteInvitationsCommandOutput,
  DeleteInvitationsCommand,
} from "./commands/DeleteInvitationsCommand";
import {
  type DeleteMemberCommandInput,
  type DeleteMemberCommandOutput,
  DeleteMemberCommand,
} from "./commands/DeleteMemberCommand";
import {
  type DescribeBucketsCommandInput,
  type DescribeBucketsCommandOutput,
  DescribeBucketsCommand,
} from "./commands/DescribeBucketsCommand";
import {
  type DescribeClassificationJobCommandInput,
  type DescribeClassificationJobCommandOutput,
  DescribeClassificationJobCommand,
} from "./commands/DescribeClassificationJobCommand";
import {
  type DescribeOrganizationConfigurationCommandInput,
  type DescribeOrganizationConfigurationCommandOutput,
  DescribeOrganizationConfigurationCommand,
} from "./commands/DescribeOrganizationConfigurationCommand";
import {
  type DisableMacieCommandInput,
  type DisableMacieCommandOutput,
  DisableMacieCommand,
} from "./commands/DisableMacieCommand";
import {
  type DisableOrganizationAdminAccountCommandInput,
  type DisableOrganizationAdminAccountCommandOutput,
  DisableOrganizationAdminAccountCommand,
} from "./commands/DisableOrganizationAdminAccountCommand";
import {
  type DisassociateFromAdministratorAccountCommandInput,
  type DisassociateFromAdministratorAccountCommandOutput,
  DisassociateFromAdministratorAccountCommand,
} from "./commands/DisassociateFromAdministratorAccountCommand";
import {
  type DisassociateFromMasterAccountCommandInput,
  type DisassociateFromMasterAccountCommandOutput,
  DisassociateFromMasterAccountCommand,
} from "./commands/DisassociateFromMasterAccountCommand";
import {
  type DisassociateMemberCommandInput,
  type DisassociateMemberCommandOutput,
  DisassociateMemberCommand,
} from "./commands/DisassociateMemberCommand";
import {
  type EnableMacieCommandInput,
  type EnableMacieCommandOutput,
  EnableMacieCommand,
} from "./commands/EnableMacieCommand";
import {
  type EnableOrganizationAdminAccountCommandInput,
  type EnableOrganizationAdminAccountCommandOutput,
  EnableOrganizationAdminAccountCommand,
} from "./commands/EnableOrganizationAdminAccountCommand";
import {
  type GetAdministratorAccountCommandInput,
  type GetAdministratorAccountCommandOutput,
  GetAdministratorAccountCommand,
} from "./commands/GetAdministratorAccountCommand";
import {
  type GetAllowListCommandInput,
  type GetAllowListCommandOutput,
  GetAllowListCommand,
} from "./commands/GetAllowListCommand";
import {
  type GetAutomatedDiscoveryConfigurationCommandInput,
  type GetAutomatedDiscoveryConfigurationCommandOutput,
  GetAutomatedDiscoveryConfigurationCommand,
} from "./commands/GetAutomatedDiscoveryConfigurationCommand";
import {
  type GetBucketStatisticsCommandInput,
  type GetBucketStatisticsCommandOutput,
  GetBucketStatisticsCommand,
} from "./commands/GetBucketStatisticsCommand";
import {
  type GetClassificationExportConfigurationCommandInput,
  type GetClassificationExportConfigurationCommandOutput,
  GetClassificationExportConfigurationCommand,
} from "./commands/GetClassificationExportConfigurationCommand";
import {
  type GetClassificationScopeCommandInput,
  type GetClassificationScopeCommandOutput,
  GetClassificationScopeCommand,
} from "./commands/GetClassificationScopeCommand";
import {
  type GetCustomDataIdentifierCommandInput,
  type GetCustomDataIdentifierCommandOutput,
  GetCustomDataIdentifierCommand,
} from "./commands/GetCustomDataIdentifierCommand";
import {
  type GetFindingsCommandInput,
  type GetFindingsCommandOutput,
  GetFindingsCommand,
} from "./commands/GetFindingsCommand";
import {
  type GetFindingsFilterCommandInput,
  type GetFindingsFilterCommandOutput,
  GetFindingsFilterCommand,
} from "./commands/GetFindingsFilterCommand";
import {
  type GetFindingsPublicationConfigurationCommandInput,
  type GetFindingsPublicationConfigurationCommandOutput,
  GetFindingsPublicationConfigurationCommand,
} from "./commands/GetFindingsPublicationConfigurationCommand";
import {
  type GetFindingStatisticsCommandInput,
  type GetFindingStatisticsCommandOutput,
  GetFindingStatisticsCommand,
} from "./commands/GetFindingStatisticsCommand";
import {
  type GetInvitationsCountCommandInput,
  type GetInvitationsCountCommandOutput,
  GetInvitationsCountCommand,
} from "./commands/GetInvitationsCountCommand";
import {
  type GetMacieSessionCommandInput,
  type GetMacieSessionCommandOutput,
  GetMacieSessionCommand,
} from "./commands/GetMacieSessionCommand";
import {
  type GetMasterAccountCommandInput,
  type GetMasterAccountCommandOutput,
  GetMasterAccountCommand,
} from "./commands/GetMasterAccountCommand";
import { type GetMemberCommandInput, type GetMemberCommandOutput, GetMemberCommand } from "./commands/GetMemberCommand";
import {
  type GetResourceProfileCommandInput,
  type GetResourceProfileCommandOutput,
  GetResourceProfileCommand,
} from "./commands/GetResourceProfileCommand";
import {
  type GetRevealConfigurationCommandInput,
  type GetRevealConfigurationCommandOutput,
  GetRevealConfigurationCommand,
} from "./commands/GetRevealConfigurationCommand";
import {
  type GetSensitiveDataOccurrencesAvailabilityCommandInput,
  type GetSensitiveDataOccurrencesAvailabilityCommandOutput,
  GetSensitiveDataOccurrencesAvailabilityCommand,
} from "./commands/GetSensitiveDataOccurrencesAvailabilityCommand";
import {
  type GetSensitiveDataOccurrencesCommandInput,
  type GetSensitiveDataOccurrencesCommandOutput,
  GetSensitiveDataOccurrencesCommand,
} from "./commands/GetSensitiveDataOccurrencesCommand";
import {
  type GetSensitivityInspectionTemplateCommandInput,
  type GetSensitivityInspectionTemplateCommandOutput,
  GetSensitivityInspectionTemplateCommand,
} from "./commands/GetSensitivityInspectionTemplateCommand";
import {
  type GetUsageStatisticsCommandInput,
  type GetUsageStatisticsCommandOutput,
  GetUsageStatisticsCommand,
} from "./commands/GetUsageStatisticsCommand";
import {
  type GetUsageTotalsCommandInput,
  type GetUsageTotalsCommandOutput,
  GetUsageTotalsCommand,
} from "./commands/GetUsageTotalsCommand";
import {
  type ListAllowListsCommandInput,
  type ListAllowListsCommandOutput,
  ListAllowListsCommand,
} from "./commands/ListAllowListsCommand";
import {
  type ListAutomatedDiscoveryAccountsCommandInput,
  type ListAutomatedDiscoveryAccountsCommandOutput,
  ListAutomatedDiscoveryAccountsCommand,
} from "./commands/ListAutomatedDiscoveryAccountsCommand";
import {
  type ListClassificationJobsCommandInput,
  type ListClassificationJobsCommandOutput,
  ListClassificationJobsCommand,
} from "./commands/ListClassificationJobsCommand";
import {
  type ListClassificationScopesCommandInput,
  type ListClassificationScopesCommandOutput,
  ListClassificationScopesCommand,
} from "./commands/ListClassificationScopesCommand";
import {
  type ListCustomDataIdentifiersCommandInput,
  type ListCustomDataIdentifiersCommandOutput,
  ListCustomDataIdentifiersCommand,
} from "./commands/ListCustomDataIdentifiersCommand";
import {
  type ListFindingsCommandInput,
  type ListFindingsCommandOutput,
  ListFindingsCommand,
} from "./commands/ListFindingsCommand";
import {
  type ListFindingsFiltersCommandInput,
  type ListFindingsFiltersCommandOutput,
  ListFindingsFiltersCommand,
} from "./commands/ListFindingsFiltersCommand";
import {
  type ListInvitationsCommandInput,
  type ListInvitationsCommandOutput,
  ListInvitationsCommand,
} from "./commands/ListInvitationsCommand";
import {
  type ListManagedDataIdentifiersCommandInput,
  type ListManagedDataIdentifiersCommandOutput,
  ListManagedDataIdentifiersCommand,
} from "./commands/ListManagedDataIdentifiersCommand";
import {
  type ListMembersCommandInput,
  type ListMembersCommandOutput,
  ListMembersCommand,
} from "./commands/ListMembersCommand";
import {
  type ListOrganizationAdminAccountsCommandInput,
  type ListOrganizationAdminAccountsCommandOutput,
  ListOrganizationAdminAccountsCommand,
} from "./commands/ListOrganizationAdminAccountsCommand";
import {
  type ListResourceProfileArtifactsCommandInput,
  type ListResourceProfileArtifactsCommandOutput,
  ListResourceProfileArtifactsCommand,
} from "./commands/ListResourceProfileArtifactsCommand";
import {
  type ListResourceProfileDetectionsCommandInput,
  type ListResourceProfileDetectionsCommandOutput,
  ListResourceProfileDetectionsCommand,
} from "./commands/ListResourceProfileDetectionsCommand";
import {
  type ListSensitivityInspectionTemplatesCommandInput,
  type ListSensitivityInspectionTemplatesCommandOutput,
  ListSensitivityInspectionTemplatesCommand,
} from "./commands/ListSensitivityInspectionTemplatesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutClassificationExportConfigurationCommandInput,
  type PutClassificationExportConfigurationCommandOutput,
  PutClassificationExportConfigurationCommand,
} from "./commands/PutClassificationExportConfigurationCommand";
import {
  type PutFindingsPublicationConfigurationCommandInput,
  type PutFindingsPublicationConfigurationCommandOutput,
  PutFindingsPublicationConfigurationCommand,
} from "./commands/PutFindingsPublicationConfigurationCommand";
import {
  type SearchResourcesCommandInput,
  type SearchResourcesCommandOutput,
  SearchResourcesCommand,
} from "./commands/SearchResourcesCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TestCustomDataIdentifierCommandInput,
  type TestCustomDataIdentifierCommandOutput,
  TestCustomDataIdentifierCommand,
} from "./commands/TestCustomDataIdentifierCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAllowListCommandInput,
  type UpdateAllowListCommandOutput,
  UpdateAllowListCommand,
} from "./commands/UpdateAllowListCommand";
import {
  type UpdateAutomatedDiscoveryConfigurationCommandInput,
  type UpdateAutomatedDiscoveryConfigurationCommandOutput,
  UpdateAutomatedDiscoveryConfigurationCommand,
} from "./commands/UpdateAutomatedDiscoveryConfigurationCommand";
import {
  type UpdateClassificationJobCommandInput,
  type UpdateClassificationJobCommandOutput,
  UpdateClassificationJobCommand,
} from "./commands/UpdateClassificationJobCommand";
import {
  type UpdateClassificationScopeCommandInput,
  type UpdateClassificationScopeCommandOutput,
  UpdateClassificationScopeCommand,
} from "./commands/UpdateClassificationScopeCommand";
import {
  type UpdateFindingsFilterCommandInput,
  type UpdateFindingsFilterCommandOutput,
  UpdateFindingsFilterCommand,
} from "./commands/UpdateFindingsFilterCommand";
import {
  type UpdateMacieSessionCommandInput,
  type UpdateMacieSessionCommandOutput,
  UpdateMacieSessionCommand,
} from "./commands/UpdateMacieSessionCommand";
import {
  type UpdateMemberSessionCommandInput,
  type UpdateMemberSessionCommandOutput,
  UpdateMemberSessionCommand,
} from "./commands/UpdateMemberSessionCommand";
import {
  type UpdateOrganizationConfigurationCommandInput,
  type UpdateOrganizationConfigurationCommandOutput,
  UpdateOrganizationConfigurationCommand,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  type UpdateResourceProfileCommandInput,
  type UpdateResourceProfileCommandOutput,
  UpdateResourceProfileCommand,
} from "./commands/UpdateResourceProfileCommand";
import {
  type UpdateResourceProfileDetectionsCommandInput,
  type UpdateResourceProfileDetectionsCommandOutput,
  UpdateResourceProfileDetectionsCommand,
} from "./commands/UpdateResourceProfileDetectionsCommand";
import {
  type UpdateRevealConfigurationCommandInput,
  type UpdateRevealConfigurationCommandOutput,
  UpdateRevealConfigurationCommand,
} from "./commands/UpdateRevealConfigurationCommand";
import {
  type UpdateSensitivityInspectionTemplateCommandInput,
  type UpdateSensitivityInspectionTemplateCommandOutput,
  UpdateSensitivityInspectionTemplateCommand,
} from "./commands/UpdateSensitivityInspectionTemplateCommand";
import { Macie2Client } from "./Macie2Client";
import { paginateDescribeBuckets } from "./pagination/DescribeBucketsPaginator";
import { paginateGetUsageStatistics } from "./pagination/GetUsageStatisticsPaginator";
import { paginateListAllowLists } from "./pagination/ListAllowListsPaginator";
import { paginateListAutomatedDiscoveryAccounts } from "./pagination/ListAutomatedDiscoveryAccountsPaginator";
import { paginateListClassificationJobs } from "./pagination/ListClassificationJobsPaginator";
import { paginateListClassificationScopes } from "./pagination/ListClassificationScopesPaginator";
import { paginateListCustomDataIdentifiers } from "./pagination/ListCustomDataIdentifiersPaginator";
import { paginateListFindingsFilters } from "./pagination/ListFindingsFiltersPaginator";
import { paginateListFindings } from "./pagination/ListFindingsPaginator";
import { paginateListInvitations } from "./pagination/ListInvitationsPaginator";
import { paginateListManagedDataIdentifiers } from "./pagination/ListManagedDataIdentifiersPaginator";
import { paginateListMembers } from "./pagination/ListMembersPaginator";
import { paginateListOrganizationAdminAccounts } from "./pagination/ListOrganizationAdminAccountsPaginator";
import { paginateListResourceProfileArtifacts } from "./pagination/ListResourceProfileArtifactsPaginator";
import { paginateListResourceProfileDetections } from "./pagination/ListResourceProfileDetectionsPaginator";
import { paginateListSensitivityInspectionTemplates } from "./pagination/ListSensitivityInspectionTemplatesPaginator";
import { paginateSearchResources } from "./pagination/SearchResourcesPaginator";
import { waitUntilFindingRevealed } from "./waiters/waitForFindingRevealed";

const commands = {
  AcceptInvitationCommand,
  BatchGetCustomDataIdentifiersCommand,
  BatchUpdateAutomatedDiscoveryAccountsCommand,
  CreateAllowListCommand,
  CreateClassificationJobCommand,
  CreateCustomDataIdentifierCommand,
  CreateFindingsFilterCommand,
  CreateInvitationsCommand,
  CreateMemberCommand,
  CreateSampleFindingsCommand,
  DeclineInvitationsCommand,
  DeleteAllowListCommand,
  DeleteCustomDataIdentifierCommand,
  DeleteFindingsFilterCommand,
  DeleteInvitationsCommand,
  DeleteMemberCommand,
  DescribeBucketsCommand,
  DescribeClassificationJobCommand,
  DescribeOrganizationConfigurationCommand,
  DisableMacieCommand,
  DisableOrganizationAdminAccountCommand,
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromMasterAccountCommand,
  DisassociateMemberCommand,
  EnableMacieCommand,
  EnableOrganizationAdminAccountCommand,
  GetAdministratorAccountCommand,
  GetAllowListCommand,
  GetAutomatedDiscoveryConfigurationCommand,
  GetBucketStatisticsCommand,
  GetClassificationExportConfigurationCommand,
  GetClassificationScopeCommand,
  GetCustomDataIdentifierCommand,
  GetFindingsCommand,
  GetFindingsFilterCommand,
  GetFindingsPublicationConfigurationCommand,
  GetFindingStatisticsCommand,
  GetInvitationsCountCommand,
  GetMacieSessionCommand,
  GetMasterAccountCommand,
  GetMemberCommand,
  GetResourceProfileCommand,
  GetRevealConfigurationCommand,
  GetSensitiveDataOccurrencesCommand,
  GetSensitiveDataOccurrencesAvailabilityCommand,
  GetSensitivityInspectionTemplateCommand,
  GetUsageStatisticsCommand,
  GetUsageTotalsCommand,
  ListAllowListsCommand,
  ListAutomatedDiscoveryAccountsCommand,
  ListClassificationJobsCommand,
  ListClassificationScopesCommand,
  ListCustomDataIdentifiersCommand,
  ListFindingsCommand,
  ListFindingsFiltersCommand,
  ListInvitationsCommand,
  ListManagedDataIdentifiersCommand,
  ListMembersCommand,
  ListOrganizationAdminAccountsCommand,
  ListResourceProfileArtifactsCommand,
  ListResourceProfileDetectionsCommand,
  ListSensitivityInspectionTemplatesCommand,
  ListTagsForResourceCommand,
  PutClassificationExportConfigurationCommand,
  PutFindingsPublicationConfigurationCommand,
  SearchResourcesCommand,
  TagResourceCommand,
  TestCustomDataIdentifierCommand,
  UntagResourceCommand,
  UpdateAllowListCommand,
  UpdateAutomatedDiscoveryConfigurationCommand,
  UpdateClassificationJobCommand,
  UpdateClassificationScopeCommand,
  UpdateFindingsFilterCommand,
  UpdateMacieSessionCommand,
  UpdateMemberSessionCommand,
  UpdateOrganizationConfigurationCommand,
  UpdateResourceProfileCommand,
  UpdateResourceProfileDetectionsCommand,
  UpdateRevealConfigurationCommand,
  UpdateSensitivityInspectionTemplateCommand,
};
const paginators = {
  paginateDescribeBuckets,
  paginateGetUsageStatistics,
  paginateListAllowLists,
  paginateListAutomatedDiscoveryAccounts,
  paginateListClassificationJobs,
  paginateListClassificationScopes,
  paginateListCustomDataIdentifiers,
  paginateListFindings,
  paginateListFindingsFilters,
  paginateListInvitations,
  paginateListManagedDataIdentifiers,
  paginateListMembers,
  paginateListOrganizationAdminAccounts,
  paginateListResourceProfileArtifacts,
  paginateListResourceProfileDetections,
  paginateListSensitivityInspectionTemplates,
  paginateSearchResources,
};
const waiters = {
  waitUntilFindingRevealed,
};

export interface Macie2 {
  /**
   * @see {@link AcceptInvitationCommand}
   */
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptInvitationCommandOutput>;
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;
  acceptInvitation(
    args: AcceptInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCustomDataIdentifiersCommand}
   */
  batchGetCustomDataIdentifiers(): Promise<BatchGetCustomDataIdentifiersCommandOutput>;
  batchGetCustomDataIdentifiers(
    args: BatchGetCustomDataIdentifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCustomDataIdentifiersCommandOutput>;
  batchGetCustomDataIdentifiers(
    args: BatchGetCustomDataIdentifiersCommandInput,
    cb: (err: any, data?: BatchGetCustomDataIdentifiersCommandOutput) => void
  ): void;
  batchGetCustomDataIdentifiers(
    args: BatchGetCustomDataIdentifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCustomDataIdentifiersCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateAutomatedDiscoveryAccountsCommand}
   */
  batchUpdateAutomatedDiscoveryAccounts(): Promise<BatchUpdateAutomatedDiscoveryAccountsCommandOutput>;
  batchUpdateAutomatedDiscoveryAccounts(
    args: BatchUpdateAutomatedDiscoveryAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateAutomatedDiscoveryAccountsCommandOutput>;
  batchUpdateAutomatedDiscoveryAccounts(
    args: BatchUpdateAutomatedDiscoveryAccountsCommandInput,
    cb: (err: any, data?: BatchUpdateAutomatedDiscoveryAccountsCommandOutput) => void
  ): void;
  batchUpdateAutomatedDiscoveryAccounts(
    args: BatchUpdateAutomatedDiscoveryAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateAutomatedDiscoveryAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAllowListCommand}
   */
  createAllowList(
    args: CreateAllowListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAllowListCommandOutput>;
  createAllowList(
    args: CreateAllowListCommandInput,
    cb: (err: any, data?: CreateAllowListCommandOutput) => void
  ): void;
  createAllowList(
    args: CreateAllowListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAllowListCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateClassificationJobCommand}
   */
  createClassificationJob(
    args: CreateClassificationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateClassificationJobCommandOutput>;
  createClassificationJob(
    args: CreateClassificationJobCommandInput,
    cb: (err: any, data?: CreateClassificationJobCommandOutput) => void
  ): void;
  createClassificationJob(
    args: CreateClassificationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateClassificationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomDataIdentifierCommand}
   */
  createCustomDataIdentifier(
    args: CreateCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomDataIdentifierCommandOutput>;
  createCustomDataIdentifier(
    args: CreateCustomDataIdentifierCommandInput,
    cb: (err: any, data?: CreateCustomDataIdentifierCommandOutput) => void
  ): void;
  createCustomDataIdentifier(
    args: CreateCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomDataIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFindingsFilterCommand}
   */
  createFindingsFilter(
    args: CreateFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFindingsFilterCommandOutput>;
  createFindingsFilter(
    args: CreateFindingsFilterCommandInput,
    cb: (err: any, data?: CreateFindingsFilterCommandOutput) => void
  ): void;
  createFindingsFilter(
    args: CreateFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFindingsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInvitationsCommand}
   */
  createInvitations(
    args: CreateInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInvitationsCommandOutput>;
  createInvitations(
    args: CreateInvitationsCommandInput,
    cb: (err: any, data?: CreateInvitationsCommandOutput) => void
  ): void;
  createInvitations(
    args: CreateInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMemberCommand}
   */
  createMember(
    args: CreateMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMemberCommandOutput>;
  createMember(
    args: CreateMemberCommandInput,
    cb: (err: any, data?: CreateMemberCommandOutput) => void
  ): void;
  createMember(
    args: CreateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSampleFindingsCommand}
   */
  createSampleFindings(): Promise<CreateSampleFindingsCommandOutput>;
  createSampleFindings(
    args: CreateSampleFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSampleFindingsCommandOutput>;
  createSampleFindings(
    args: CreateSampleFindingsCommandInput,
    cb: (err: any, data?: CreateSampleFindingsCommandOutput) => void
  ): void;
  createSampleFindings(
    args: CreateSampleFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSampleFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeclineInvitationsCommand}
   */
  declineInvitations(
    args: DeclineInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeclineInvitationsCommandOutput>;
  declineInvitations(
    args: DeclineInvitationsCommandInput,
    cb: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): void;
  declineInvitations(
    args: DeclineInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeclineInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAllowListCommand}
   */
  deleteAllowList(
    args: DeleteAllowListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAllowListCommandOutput>;
  deleteAllowList(
    args: DeleteAllowListCommandInput,
    cb: (err: any, data?: DeleteAllowListCommandOutput) => void
  ): void;
  deleteAllowList(
    args: DeleteAllowListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAllowListCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomDataIdentifierCommand}
   */
  deleteCustomDataIdentifier(
    args: DeleteCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomDataIdentifierCommandOutput>;
  deleteCustomDataIdentifier(
    args: DeleteCustomDataIdentifierCommandInput,
    cb: (err: any, data?: DeleteCustomDataIdentifierCommandOutput) => void
  ): void;
  deleteCustomDataIdentifier(
    args: DeleteCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomDataIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFindingsFilterCommand}
   */
  deleteFindingsFilter(
    args: DeleteFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFindingsFilterCommandOutput>;
  deleteFindingsFilter(
    args: DeleteFindingsFilterCommandInput,
    cb: (err: any, data?: DeleteFindingsFilterCommandOutput) => void
  ): void;
  deleteFindingsFilter(
    args: DeleteFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFindingsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInvitationsCommand}
   */
  deleteInvitations(
    args: DeleteInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInvitationsCommandOutput>;
  deleteInvitations(
    args: DeleteInvitationsCommandInput,
    cb: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): void;
  deleteInvitations(
    args: DeleteInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMemberCommand}
   */
  deleteMember(
    args: DeleteMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMemberCommandOutput>;
  deleteMember(
    args: DeleteMemberCommandInput,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;
  deleteMember(
    args: DeleteMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBucketsCommand}
   */
  describeBuckets(): Promise<DescribeBucketsCommandOutput>;
  describeBuckets(
    args: DescribeBucketsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBucketsCommandOutput>;
  describeBuckets(
    args: DescribeBucketsCommandInput,
    cb: (err: any, data?: DescribeBucketsCommandOutput) => void
  ): void;
  describeBuckets(
    args: DescribeBucketsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBucketsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClassificationJobCommand}
   */
  describeClassificationJob(
    args: DescribeClassificationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClassificationJobCommandOutput>;
  describeClassificationJob(
    args: DescribeClassificationJobCommandInput,
    cb: (err: any, data?: DescribeClassificationJobCommandOutput) => void
  ): void;
  describeClassificationJob(
    args: DescribeClassificationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClassificationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationConfigurationCommand}
   */
  describeOrganizationConfiguration(): Promise<DescribeOrganizationConfigurationCommandOutput>;
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationConfigurationCommandOutput>;
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;
  describeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableMacieCommand}
   */
  disableMacie(): Promise<DisableMacieCommandOutput>;
  disableMacie(
    args: DisableMacieCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableMacieCommandOutput>;
  disableMacie(
    args: DisableMacieCommandInput,
    cb: (err: any, data?: DisableMacieCommandOutput) => void
  ): void;
  disableMacie(
    args: DisableMacieCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableMacieCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableOrganizationAdminAccountCommand}
   */
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableOrganizationAdminAccountCommandOutput>;
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;
  disableOrganizationAdminAccount(
    args: DisableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFromAdministratorAccountCommand}
   */
  disassociateFromAdministratorAccount(): Promise<DisassociateFromAdministratorAccountCommandOutput>;
  disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFromAdministratorAccountCommandOutput>;
  disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): void;
  disassociateFromAdministratorAccount(
    args: DisassociateFromAdministratorAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFromAdministratorAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFromMasterAccountCommand}
   */
  disassociateFromMasterAccount(): Promise<DisassociateFromMasterAccountCommandOutput>;
  disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFromMasterAccountCommandOutput>;
  disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): void;
  disassociateFromMasterAccount(
    args: DisassociateFromMasterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFromMasterAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateMemberCommand}
   */
  disassociateMember(
    args: DisassociateMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberCommandOutput>;
  disassociateMember(
    args: DisassociateMemberCommandInput,
    cb: (err: any, data?: DisassociateMemberCommandOutput) => void
  ): void;
  disassociateMember(
    args: DisassociateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableMacieCommand}
   */
  enableMacie(): Promise<EnableMacieCommandOutput>;
  enableMacie(
    args: EnableMacieCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableMacieCommandOutput>;
  enableMacie(
    args: EnableMacieCommandInput,
    cb: (err: any, data?: EnableMacieCommandOutput) => void
  ): void;
  enableMacie(
    args: EnableMacieCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableMacieCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableOrganizationAdminAccountCommand}
   */
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableOrganizationAdminAccountCommandOutput>;
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;
  enableOrganizationAdminAccount(
    args: EnableOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAdministratorAccountCommand}
   */
  getAdministratorAccount(): Promise<GetAdministratorAccountCommandOutput>;
  getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAdministratorAccountCommandOutput>;
  getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): void;
  getAdministratorAccount(
    args: GetAdministratorAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAdministratorAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAllowListCommand}
   */
  getAllowList(
    args: GetAllowListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAllowListCommandOutput>;
  getAllowList(
    args: GetAllowListCommandInput,
    cb: (err: any, data?: GetAllowListCommandOutput) => void
  ): void;
  getAllowList(
    args: GetAllowListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAllowListCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAutomatedDiscoveryConfigurationCommand}
   */
  getAutomatedDiscoveryConfiguration(): Promise<GetAutomatedDiscoveryConfigurationCommandOutput>;
  getAutomatedDiscoveryConfiguration(
    args: GetAutomatedDiscoveryConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutomatedDiscoveryConfigurationCommandOutput>;
  getAutomatedDiscoveryConfiguration(
    args: GetAutomatedDiscoveryConfigurationCommandInput,
    cb: (err: any, data?: GetAutomatedDiscoveryConfigurationCommandOutput) => void
  ): void;
  getAutomatedDiscoveryConfiguration(
    args: GetAutomatedDiscoveryConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutomatedDiscoveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBucketStatisticsCommand}
   */
  getBucketStatistics(): Promise<GetBucketStatisticsCommandOutput>;
  getBucketStatistics(
    args: GetBucketStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBucketStatisticsCommandOutput>;
  getBucketStatistics(
    args: GetBucketStatisticsCommandInput,
    cb: (err: any, data?: GetBucketStatisticsCommandOutput) => void
  ): void;
  getBucketStatistics(
    args: GetBucketStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBucketStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClassificationExportConfigurationCommand}
   */
  getClassificationExportConfiguration(): Promise<GetClassificationExportConfigurationCommandOutput>;
  getClassificationExportConfiguration(
    args: GetClassificationExportConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClassificationExportConfigurationCommandOutput>;
  getClassificationExportConfiguration(
    args: GetClassificationExportConfigurationCommandInput,
    cb: (err: any, data?: GetClassificationExportConfigurationCommandOutput) => void
  ): void;
  getClassificationExportConfiguration(
    args: GetClassificationExportConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClassificationExportConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClassificationScopeCommand}
   */
  getClassificationScope(
    args: GetClassificationScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClassificationScopeCommandOutput>;
  getClassificationScope(
    args: GetClassificationScopeCommandInput,
    cb: (err: any, data?: GetClassificationScopeCommandOutput) => void
  ): void;
  getClassificationScope(
    args: GetClassificationScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClassificationScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomDataIdentifierCommand}
   */
  getCustomDataIdentifier(
    args: GetCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomDataIdentifierCommandOutput>;
  getCustomDataIdentifier(
    args: GetCustomDataIdentifierCommandInput,
    cb: (err: any, data?: GetCustomDataIdentifierCommandOutput) => void
  ): void;
  getCustomDataIdentifier(
    args: GetCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomDataIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingsCommand}
   */
  getFindings(
    args: GetFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsCommandOutput>;
  getFindings(
    args: GetFindingsCommandInput,
    cb: (err: any, data?: GetFindingsCommandOutput) => void
  ): void;
  getFindings(
    args: GetFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingsFilterCommand}
   */
  getFindingsFilter(
    args: GetFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsFilterCommandOutput>;
  getFindingsFilter(
    args: GetFindingsFilterCommandInput,
    cb: (err: any, data?: GetFindingsFilterCommandOutput) => void
  ): void;
  getFindingsFilter(
    args: GetFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingsPublicationConfigurationCommand}
   */
  getFindingsPublicationConfiguration(): Promise<GetFindingsPublicationConfigurationCommandOutput>;
  getFindingsPublicationConfiguration(
    args: GetFindingsPublicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsPublicationConfigurationCommandOutput>;
  getFindingsPublicationConfiguration(
    args: GetFindingsPublicationConfigurationCommandInput,
    cb: (err: any, data?: GetFindingsPublicationConfigurationCommandOutput) => void
  ): void;
  getFindingsPublicationConfiguration(
    args: GetFindingsPublicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsPublicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingStatisticsCommand}
   */
  getFindingStatistics(
    args: GetFindingStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingStatisticsCommandOutput>;
  getFindingStatistics(
    args: GetFindingStatisticsCommandInput,
    cb: (err: any, data?: GetFindingStatisticsCommandOutput) => void
  ): void;
  getFindingStatistics(
    args: GetFindingStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvitationsCountCommand}
   */
  getInvitationsCount(): Promise<GetInvitationsCountCommandOutput>;
  getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvitationsCountCommandOutput>;
  getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    cb: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): void;
  getInvitationsCount(
    args: GetInvitationsCountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvitationsCountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMacieSessionCommand}
   */
  getMacieSession(): Promise<GetMacieSessionCommandOutput>;
  getMacieSession(
    args: GetMacieSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMacieSessionCommandOutput>;
  getMacieSession(
    args: GetMacieSessionCommandInput,
    cb: (err: any, data?: GetMacieSessionCommandOutput) => void
  ): void;
  getMacieSession(
    args: GetMacieSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMacieSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMasterAccountCommand}
   */
  getMasterAccount(): Promise<GetMasterAccountCommandOutput>;
  getMasterAccount(
    args: GetMasterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMasterAccountCommandOutput>;
  getMasterAccount(
    args: GetMasterAccountCommandInput,
    cb: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): void;
  getMasterAccount(
    args: GetMasterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMasterAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMemberCommand}
   */
  getMember(
    args: GetMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMemberCommandOutput>;
  getMember(
    args: GetMemberCommandInput,
    cb: (err: any, data?: GetMemberCommandOutput) => void
  ): void;
  getMember(
    args: GetMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceProfileCommand}
   */
  getResourceProfile(
    args: GetResourceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceProfileCommandOutput>;
  getResourceProfile(
    args: GetResourceProfileCommandInput,
    cb: (err: any, data?: GetResourceProfileCommandOutput) => void
  ): void;
  getResourceProfile(
    args: GetResourceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRevealConfigurationCommand}
   */
  getRevealConfiguration(): Promise<GetRevealConfigurationCommandOutput>;
  getRevealConfiguration(
    args: GetRevealConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRevealConfigurationCommandOutput>;
  getRevealConfiguration(
    args: GetRevealConfigurationCommandInput,
    cb: (err: any, data?: GetRevealConfigurationCommandOutput) => void
  ): void;
  getRevealConfiguration(
    args: GetRevealConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRevealConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSensitiveDataOccurrencesCommand}
   */
  getSensitiveDataOccurrences(
    args: GetSensitiveDataOccurrencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSensitiveDataOccurrencesCommandOutput>;
  getSensitiveDataOccurrences(
    args: GetSensitiveDataOccurrencesCommandInput,
    cb: (err: any, data?: GetSensitiveDataOccurrencesCommandOutput) => void
  ): void;
  getSensitiveDataOccurrences(
    args: GetSensitiveDataOccurrencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSensitiveDataOccurrencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSensitiveDataOccurrencesAvailabilityCommand}
   */
  getSensitiveDataOccurrencesAvailability(
    args: GetSensitiveDataOccurrencesAvailabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSensitiveDataOccurrencesAvailabilityCommandOutput>;
  getSensitiveDataOccurrencesAvailability(
    args: GetSensitiveDataOccurrencesAvailabilityCommandInput,
    cb: (err: any, data?: GetSensitiveDataOccurrencesAvailabilityCommandOutput) => void
  ): void;
  getSensitiveDataOccurrencesAvailability(
    args: GetSensitiveDataOccurrencesAvailabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSensitiveDataOccurrencesAvailabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSensitivityInspectionTemplateCommand}
   */
  getSensitivityInspectionTemplate(
    args: GetSensitivityInspectionTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSensitivityInspectionTemplateCommandOutput>;
  getSensitivityInspectionTemplate(
    args: GetSensitivityInspectionTemplateCommandInput,
    cb: (err: any, data?: GetSensitivityInspectionTemplateCommandOutput) => void
  ): void;
  getSensitivityInspectionTemplate(
    args: GetSensitivityInspectionTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSensitivityInspectionTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsageStatisticsCommand}
   */
  getUsageStatistics(): Promise<GetUsageStatisticsCommandOutput>;
  getUsageStatistics(
    args: GetUsageStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsageStatisticsCommandOutput>;
  getUsageStatistics(
    args: GetUsageStatisticsCommandInput,
    cb: (err: any, data?: GetUsageStatisticsCommandOutput) => void
  ): void;
  getUsageStatistics(
    args: GetUsageStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsageTotalsCommand}
   */
  getUsageTotals(): Promise<GetUsageTotalsCommandOutput>;
  getUsageTotals(
    args: GetUsageTotalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsageTotalsCommandOutput>;
  getUsageTotals(
    args: GetUsageTotalsCommandInput,
    cb: (err: any, data?: GetUsageTotalsCommandOutput) => void
  ): void;
  getUsageTotals(
    args: GetUsageTotalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageTotalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAllowListsCommand}
   */
  listAllowLists(): Promise<ListAllowListsCommandOutput>;
  listAllowLists(
    args: ListAllowListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAllowListsCommandOutput>;
  listAllowLists(
    args: ListAllowListsCommandInput,
    cb: (err: any, data?: ListAllowListsCommandOutput) => void
  ): void;
  listAllowLists(
    args: ListAllowListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAllowListsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutomatedDiscoveryAccountsCommand}
   */
  listAutomatedDiscoveryAccounts(): Promise<ListAutomatedDiscoveryAccountsCommandOutput>;
  listAutomatedDiscoveryAccounts(
    args: ListAutomatedDiscoveryAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutomatedDiscoveryAccountsCommandOutput>;
  listAutomatedDiscoveryAccounts(
    args: ListAutomatedDiscoveryAccountsCommandInput,
    cb: (err: any, data?: ListAutomatedDiscoveryAccountsCommandOutput) => void
  ): void;
  listAutomatedDiscoveryAccounts(
    args: ListAutomatedDiscoveryAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutomatedDiscoveryAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClassificationJobsCommand}
   */
  listClassificationJobs(): Promise<ListClassificationJobsCommandOutput>;
  listClassificationJobs(
    args: ListClassificationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClassificationJobsCommandOutput>;
  listClassificationJobs(
    args: ListClassificationJobsCommandInput,
    cb: (err: any, data?: ListClassificationJobsCommandOutput) => void
  ): void;
  listClassificationJobs(
    args: ListClassificationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClassificationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClassificationScopesCommand}
   */
  listClassificationScopes(): Promise<ListClassificationScopesCommandOutput>;
  listClassificationScopes(
    args: ListClassificationScopesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClassificationScopesCommandOutput>;
  listClassificationScopes(
    args: ListClassificationScopesCommandInput,
    cb: (err: any, data?: ListClassificationScopesCommandOutput) => void
  ): void;
  listClassificationScopes(
    args: ListClassificationScopesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClassificationScopesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomDataIdentifiersCommand}
   */
  listCustomDataIdentifiers(): Promise<ListCustomDataIdentifiersCommandOutput>;
  listCustomDataIdentifiers(
    args: ListCustomDataIdentifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomDataIdentifiersCommandOutput>;
  listCustomDataIdentifiers(
    args: ListCustomDataIdentifiersCommandInput,
    cb: (err: any, data?: ListCustomDataIdentifiersCommandOutput) => void
  ): void;
  listCustomDataIdentifiers(
    args: ListCustomDataIdentifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomDataIdentifiersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsCommand}
   */
  listFindings(): Promise<ListFindingsCommandOutput>;
  listFindings(
    args: ListFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsCommandOutput>;
  listFindings(
    args: ListFindingsCommandInput,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;
  listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsFiltersCommand}
   */
  listFindingsFilters(): Promise<ListFindingsFiltersCommandOutput>;
  listFindingsFilters(
    args: ListFindingsFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsFiltersCommandOutput>;
  listFindingsFilters(
    args: ListFindingsFiltersCommandInput,
    cb: (err: any, data?: ListFindingsFiltersCommandOutput) => void
  ): void;
  listFindingsFilters(
    args: ListFindingsFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvitationsCommand}
   */
  listInvitations(): Promise<ListInvitationsCommandOutput>;
  listInvitations(
    args: ListInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvitationsCommandOutput>;
  listInvitations(
    args: ListInvitationsCommandInput,
    cb: (err: any, data?: ListInvitationsCommandOutput) => void
  ): void;
  listInvitations(
    args: ListInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedDataIdentifiersCommand}
   */
  listManagedDataIdentifiers(): Promise<ListManagedDataIdentifiersCommandOutput>;
  listManagedDataIdentifiers(
    args: ListManagedDataIdentifiersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedDataIdentifiersCommandOutput>;
  listManagedDataIdentifiers(
    args: ListManagedDataIdentifiersCommandInput,
    cb: (err: any, data?: ListManagedDataIdentifiersCommandOutput) => void
  ): void;
  listManagedDataIdentifiers(
    args: ListManagedDataIdentifiersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedDataIdentifiersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembersCommand}
   */
  listMembers(): Promise<ListMembersCommandOutput>;
  listMembers(
    args: ListMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMembersCommandOutput>;
  listMembers(
    args: ListMembersCommandInput,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;
  listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationAdminAccountsCommand}
   */
  listOrganizationAdminAccounts(): Promise<ListOrganizationAdminAccountsCommandOutput>;
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationAdminAccountsCommandOutput>;
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;
  listOrganizationAdminAccounts(
    args: ListOrganizationAdminAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationAdminAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceProfileArtifactsCommand}
   */
  listResourceProfileArtifacts(
    args: ListResourceProfileArtifactsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceProfileArtifactsCommandOutput>;
  listResourceProfileArtifacts(
    args: ListResourceProfileArtifactsCommandInput,
    cb: (err: any, data?: ListResourceProfileArtifactsCommandOutput) => void
  ): void;
  listResourceProfileArtifacts(
    args: ListResourceProfileArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceProfileArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceProfileDetectionsCommand}
   */
  listResourceProfileDetections(
    args: ListResourceProfileDetectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceProfileDetectionsCommandOutput>;
  listResourceProfileDetections(
    args: ListResourceProfileDetectionsCommandInput,
    cb: (err: any, data?: ListResourceProfileDetectionsCommandOutput) => void
  ): void;
  listResourceProfileDetections(
    args: ListResourceProfileDetectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceProfileDetectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSensitivityInspectionTemplatesCommand}
   */
  listSensitivityInspectionTemplates(): Promise<ListSensitivityInspectionTemplatesCommandOutput>;
  listSensitivityInspectionTemplates(
    args: ListSensitivityInspectionTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSensitivityInspectionTemplatesCommandOutput>;
  listSensitivityInspectionTemplates(
    args: ListSensitivityInspectionTemplatesCommandInput,
    cb: (err: any, data?: ListSensitivityInspectionTemplatesCommandOutput) => void
  ): void;
  listSensitivityInspectionTemplates(
    args: ListSensitivityInspectionTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSensitivityInspectionTemplatesCommandOutput) => void
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
   * @see {@link PutClassificationExportConfigurationCommand}
   */
  putClassificationExportConfiguration(
    args: PutClassificationExportConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutClassificationExportConfigurationCommandOutput>;
  putClassificationExportConfiguration(
    args: PutClassificationExportConfigurationCommandInput,
    cb: (err: any, data?: PutClassificationExportConfigurationCommandOutput) => void
  ): void;
  putClassificationExportConfiguration(
    args: PutClassificationExportConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutClassificationExportConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFindingsPublicationConfigurationCommand}
   */
  putFindingsPublicationConfiguration(): Promise<PutFindingsPublicationConfigurationCommandOutput>;
  putFindingsPublicationConfiguration(
    args: PutFindingsPublicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFindingsPublicationConfigurationCommandOutput>;
  putFindingsPublicationConfiguration(
    args: PutFindingsPublicationConfigurationCommandInput,
    cb: (err: any, data?: PutFindingsPublicationConfigurationCommandOutput) => void
  ): void;
  putFindingsPublicationConfiguration(
    args: PutFindingsPublicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFindingsPublicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchResourcesCommand}
   */
  searchResources(): Promise<SearchResourcesCommandOutput>;
  searchResources(
    args: SearchResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchResourcesCommandOutput>;
  searchResources(
    args: SearchResourcesCommandInput,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;
  searchResources(
    args: SearchResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TestCustomDataIdentifierCommand}
   */
  testCustomDataIdentifier(
    args: TestCustomDataIdentifierCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestCustomDataIdentifierCommandOutput>;
  testCustomDataIdentifier(
    args: TestCustomDataIdentifierCommandInput,
    cb: (err: any, data?: TestCustomDataIdentifierCommandOutput) => void
  ): void;
  testCustomDataIdentifier(
    args: TestCustomDataIdentifierCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestCustomDataIdentifierCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAllowListCommand}
   */
  updateAllowList(
    args: UpdateAllowListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAllowListCommandOutput>;
  updateAllowList(
    args: UpdateAllowListCommandInput,
    cb: (err: any, data?: UpdateAllowListCommandOutput) => void
  ): void;
  updateAllowList(
    args: UpdateAllowListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAllowListCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAutomatedDiscoveryConfigurationCommand}
   */
  updateAutomatedDiscoveryConfiguration(
    args: UpdateAutomatedDiscoveryConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAutomatedDiscoveryConfigurationCommandOutput>;
  updateAutomatedDiscoveryConfiguration(
    args: UpdateAutomatedDiscoveryConfigurationCommandInput,
    cb: (err: any, data?: UpdateAutomatedDiscoveryConfigurationCommandOutput) => void
  ): void;
  updateAutomatedDiscoveryConfiguration(
    args: UpdateAutomatedDiscoveryConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAutomatedDiscoveryConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClassificationJobCommand}
   */
  updateClassificationJob(
    args: UpdateClassificationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClassificationJobCommandOutput>;
  updateClassificationJob(
    args: UpdateClassificationJobCommandInput,
    cb: (err: any, data?: UpdateClassificationJobCommandOutput) => void
  ): void;
  updateClassificationJob(
    args: UpdateClassificationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClassificationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateClassificationScopeCommand}
   */
  updateClassificationScope(
    args: UpdateClassificationScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClassificationScopeCommandOutput>;
  updateClassificationScope(
    args: UpdateClassificationScopeCommandInput,
    cb: (err: any, data?: UpdateClassificationScopeCommandOutput) => void
  ): void;
  updateClassificationScope(
    args: UpdateClassificationScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClassificationScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFindingsFilterCommand}
   */
  updateFindingsFilter(
    args: UpdateFindingsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingsFilterCommandOutput>;
  updateFindingsFilter(
    args: UpdateFindingsFilterCommandInput,
    cb: (err: any, data?: UpdateFindingsFilterCommandOutput) => void
  ): void;
  updateFindingsFilter(
    args: UpdateFindingsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMacieSessionCommand}
   */
  updateMacieSession(): Promise<UpdateMacieSessionCommandOutput>;
  updateMacieSession(
    args: UpdateMacieSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMacieSessionCommandOutput>;
  updateMacieSession(
    args: UpdateMacieSessionCommandInput,
    cb: (err: any, data?: UpdateMacieSessionCommandOutput) => void
  ): void;
  updateMacieSession(
    args: UpdateMacieSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMacieSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMemberSessionCommand}
   */
  updateMemberSession(
    args: UpdateMemberSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMemberSessionCommandOutput>;
  updateMemberSession(
    args: UpdateMemberSessionCommandInput,
    cb: (err: any, data?: UpdateMemberSessionCommandOutput) => void
  ): void;
  updateMemberSession(
    args: UpdateMemberSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMemberSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOrganizationConfigurationCommand}
   */
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOrganizationConfigurationCommandOutput>;
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;
  updateOrganizationConfiguration(
    args: UpdateOrganizationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceProfileCommand}
   */
  updateResourceProfile(
    args: UpdateResourceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceProfileCommandOutput>;
  updateResourceProfile(
    args: UpdateResourceProfileCommandInput,
    cb: (err: any, data?: UpdateResourceProfileCommandOutput) => void
  ): void;
  updateResourceProfile(
    args: UpdateResourceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceProfileDetectionsCommand}
   */
  updateResourceProfileDetections(
    args: UpdateResourceProfileDetectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceProfileDetectionsCommandOutput>;
  updateResourceProfileDetections(
    args: UpdateResourceProfileDetectionsCommandInput,
    cb: (err: any, data?: UpdateResourceProfileDetectionsCommandOutput) => void
  ): void;
  updateResourceProfileDetections(
    args: UpdateResourceProfileDetectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceProfileDetectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRevealConfigurationCommand}
   */
  updateRevealConfiguration(
    args: UpdateRevealConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRevealConfigurationCommandOutput>;
  updateRevealConfiguration(
    args: UpdateRevealConfigurationCommandInput,
    cb: (err: any, data?: UpdateRevealConfigurationCommandOutput) => void
  ): void;
  updateRevealConfiguration(
    args: UpdateRevealConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRevealConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSensitivityInspectionTemplateCommand}
   */
  updateSensitivityInspectionTemplate(
    args: UpdateSensitivityInspectionTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSensitivityInspectionTemplateCommandOutput>;
  updateSensitivityInspectionTemplate(
    args: UpdateSensitivityInspectionTemplateCommandInput,
    cb: (err: any, data?: UpdateSensitivityInspectionTemplateCommandOutput) => void
  ): void;
  updateSensitivityInspectionTemplate(
    args: UpdateSensitivityInspectionTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSensitivityInspectionTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBucketsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeBucketsCommandOutput}.
   */
  paginateDescribeBuckets(
    args?: DescribeBucketsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeBucketsCommandOutput>;

  /**
   * @see {@link GetUsageStatisticsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetUsageStatisticsCommandOutput}.
   */
  paginateGetUsageStatistics(
    args?: GetUsageStatisticsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetUsageStatisticsCommandOutput>;

  /**
   * @see {@link ListAllowListsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAllowListsCommandOutput}.
   */
  paginateListAllowLists(
    args?: ListAllowListsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAllowListsCommandOutput>;

  /**
   * @see {@link ListAutomatedDiscoveryAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAutomatedDiscoveryAccountsCommandOutput}.
   */
  paginateListAutomatedDiscoveryAccounts(
    args?: ListAutomatedDiscoveryAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAutomatedDiscoveryAccountsCommandOutput>;

  /**
   * @see {@link ListClassificationJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClassificationJobsCommandOutput}.
   */
  paginateListClassificationJobs(
    args?: ListClassificationJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClassificationJobsCommandOutput>;

  /**
   * @see {@link ListClassificationScopesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListClassificationScopesCommandOutput}.
   */
  paginateListClassificationScopes(
    args?: ListClassificationScopesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListClassificationScopesCommandOutput>;

  /**
   * @see {@link ListCustomDataIdentifiersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCustomDataIdentifiersCommandOutput}.
   */
  paginateListCustomDataIdentifiers(
    args?: ListCustomDataIdentifiersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCustomDataIdentifiersCommandOutput>;

  /**
   * @see {@link ListFindingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFindingsCommandOutput}.
   */
  paginateListFindings(
    args?: ListFindingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFindingsCommandOutput>;

  /**
   * @see {@link ListFindingsFiltersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFindingsFiltersCommandOutput}.
   */
  paginateListFindingsFilters(
    args?: ListFindingsFiltersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFindingsFiltersCommandOutput>;

  /**
   * @see {@link ListInvitationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInvitationsCommandOutput}.
   */
  paginateListInvitations(
    args?: ListInvitationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInvitationsCommandOutput>;

  /**
   * @see {@link ListManagedDataIdentifiersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedDataIdentifiersCommandOutput}.
   */
  paginateListManagedDataIdentifiers(
    args?: ListManagedDataIdentifiersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedDataIdentifiersCommandOutput>;

  /**
   * @see {@link ListMembersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMembersCommandOutput}.
   */
  paginateListMembers(
    args?: ListMembersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMembersCommandOutput>;

  /**
   * @see {@link ListOrganizationAdminAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOrganizationAdminAccountsCommandOutput}.
   */
  paginateListOrganizationAdminAccounts(
    args?: ListOrganizationAdminAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOrganizationAdminAccountsCommandOutput>;

  /**
   * @see {@link ListResourceProfileArtifactsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceProfileArtifactsCommandOutput}.
   */
  paginateListResourceProfileArtifacts(
    args: ListResourceProfileArtifactsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceProfileArtifactsCommandOutput>;

  /**
   * @see {@link ListResourceProfileDetectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceProfileDetectionsCommandOutput}.
   */
  paginateListResourceProfileDetections(
    args: ListResourceProfileDetectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceProfileDetectionsCommandOutput>;

  /**
   * @see {@link ListSensitivityInspectionTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSensitivityInspectionTemplatesCommandOutput}.
   */
  paginateListSensitivityInspectionTemplates(
    args?: ListSensitivityInspectionTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSensitivityInspectionTemplatesCommandOutput>;

  /**
   * @see {@link SearchResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchResourcesCommandOutput}.
   */
  paginateSearchResources(
    args?: SearchResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchResourcesCommandOutput>;

  /**
   * @see {@link GetSensitiveDataOccurrencesCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilFindingRevealed(
    args: GetSensitiveDataOccurrencesCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<Macie2>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>Amazon Macie</p>
 * @public
 */
export class Macie2 extends Macie2Client implements Macie2 {}
createAggregatedClient(commands, Macie2, { paginators, waiters });
