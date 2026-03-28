// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AcceptAdministratorInvitationCommandInput,
  type AcceptAdministratorInvitationCommandOutput,
  AcceptAdministratorInvitationCommand,
} from "./commands/AcceptAdministratorInvitationCommand";
import {
  type AcceptInvitationCommandInput,
  type AcceptInvitationCommandOutput,
  AcceptInvitationCommand,
} from "./commands/AcceptInvitationCommand";
import {
  type ArchiveFindingsCommandInput,
  type ArchiveFindingsCommandOutput,
  ArchiveFindingsCommand,
} from "./commands/ArchiveFindingsCommand";
import {
  type CreateDetectorCommandInput,
  type CreateDetectorCommandOutput,
  CreateDetectorCommand,
} from "./commands/CreateDetectorCommand";
import {
  type CreateFilterCommandInput,
  type CreateFilterCommandOutput,
  CreateFilterCommand,
} from "./commands/CreateFilterCommand";
import {
  type CreateIPSetCommandInput,
  type CreateIPSetCommandOutput,
  CreateIPSetCommand,
} from "./commands/CreateIPSetCommand";
import {
  type CreateMalwareProtectionPlanCommandInput,
  type CreateMalwareProtectionPlanCommandOutput,
  CreateMalwareProtectionPlanCommand,
} from "./commands/CreateMalwareProtectionPlanCommand";
import {
  type CreateMembersCommandInput,
  type CreateMembersCommandOutput,
  CreateMembersCommand,
} from "./commands/CreateMembersCommand";
import {
  type CreatePublishingDestinationCommandInput,
  type CreatePublishingDestinationCommandOutput,
  CreatePublishingDestinationCommand,
} from "./commands/CreatePublishingDestinationCommand";
import {
  type CreateSampleFindingsCommandInput,
  type CreateSampleFindingsCommandOutput,
  CreateSampleFindingsCommand,
} from "./commands/CreateSampleFindingsCommand";
import {
  type CreateThreatEntitySetCommandInput,
  type CreateThreatEntitySetCommandOutput,
  CreateThreatEntitySetCommand,
} from "./commands/CreateThreatEntitySetCommand";
import {
  type CreateThreatIntelSetCommandInput,
  type CreateThreatIntelSetCommandOutput,
  CreateThreatIntelSetCommand,
} from "./commands/CreateThreatIntelSetCommand";
import {
  type CreateTrustedEntitySetCommandInput,
  type CreateTrustedEntitySetCommandOutput,
  CreateTrustedEntitySetCommand,
} from "./commands/CreateTrustedEntitySetCommand";
import {
  type DeclineInvitationsCommandInput,
  type DeclineInvitationsCommandOutput,
  DeclineInvitationsCommand,
} from "./commands/DeclineInvitationsCommand";
import {
  type DeleteDetectorCommandInput,
  type DeleteDetectorCommandOutput,
  DeleteDetectorCommand,
} from "./commands/DeleteDetectorCommand";
import {
  type DeleteFilterCommandInput,
  type DeleteFilterCommandOutput,
  DeleteFilterCommand,
} from "./commands/DeleteFilterCommand";
import {
  type DeleteInvitationsCommandInput,
  type DeleteInvitationsCommandOutput,
  DeleteInvitationsCommand,
} from "./commands/DeleteInvitationsCommand";
import {
  type DeleteIPSetCommandInput,
  type DeleteIPSetCommandOutput,
  DeleteIPSetCommand,
} from "./commands/DeleteIPSetCommand";
import {
  type DeleteMalwareProtectionPlanCommandInput,
  type DeleteMalwareProtectionPlanCommandOutput,
  DeleteMalwareProtectionPlanCommand,
} from "./commands/DeleteMalwareProtectionPlanCommand";
import {
  type DeleteMembersCommandInput,
  type DeleteMembersCommandOutput,
  DeleteMembersCommand,
} from "./commands/DeleteMembersCommand";
import {
  type DeletePublishingDestinationCommandInput,
  type DeletePublishingDestinationCommandOutput,
  DeletePublishingDestinationCommand,
} from "./commands/DeletePublishingDestinationCommand";
import {
  type DeleteThreatEntitySetCommandInput,
  type DeleteThreatEntitySetCommandOutput,
  DeleteThreatEntitySetCommand,
} from "./commands/DeleteThreatEntitySetCommand";
import {
  type DeleteThreatIntelSetCommandInput,
  type DeleteThreatIntelSetCommandOutput,
  DeleteThreatIntelSetCommand,
} from "./commands/DeleteThreatIntelSetCommand";
import {
  type DeleteTrustedEntitySetCommandInput,
  type DeleteTrustedEntitySetCommandOutput,
  DeleteTrustedEntitySetCommand,
} from "./commands/DeleteTrustedEntitySetCommand";
import {
  type DescribeMalwareScansCommandInput,
  type DescribeMalwareScansCommandOutput,
  DescribeMalwareScansCommand,
} from "./commands/DescribeMalwareScansCommand";
import {
  type DescribeOrganizationConfigurationCommandInput,
  type DescribeOrganizationConfigurationCommandOutput,
  DescribeOrganizationConfigurationCommand,
} from "./commands/DescribeOrganizationConfigurationCommand";
import {
  type DescribePublishingDestinationCommandInput,
  type DescribePublishingDestinationCommandOutput,
  DescribePublishingDestinationCommand,
} from "./commands/DescribePublishingDestinationCommand";
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
  type DisassociateMembersCommandInput,
  type DisassociateMembersCommandOutput,
  DisassociateMembersCommand,
} from "./commands/DisassociateMembersCommand";
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
  type GetCoverageStatisticsCommandInput,
  type GetCoverageStatisticsCommandOutput,
  GetCoverageStatisticsCommand,
} from "./commands/GetCoverageStatisticsCommand";
import {
  type GetDetectorCommandInput,
  type GetDetectorCommandOutput,
  GetDetectorCommand,
} from "./commands/GetDetectorCommand";
import { type GetFilterCommandInput, type GetFilterCommandOutput, GetFilterCommand } from "./commands/GetFilterCommand";
import {
  type GetFindingsCommandInput,
  type GetFindingsCommandOutput,
  GetFindingsCommand,
} from "./commands/GetFindingsCommand";
import {
  type GetFindingsStatisticsCommandInput,
  type GetFindingsStatisticsCommandOutput,
  GetFindingsStatisticsCommand,
} from "./commands/GetFindingsStatisticsCommand";
import {
  type GetInvitationsCountCommandInput,
  type GetInvitationsCountCommandOutput,
  GetInvitationsCountCommand,
} from "./commands/GetInvitationsCountCommand";
import { type GetIPSetCommandInput, type GetIPSetCommandOutput, GetIPSetCommand } from "./commands/GetIPSetCommand";
import {
  type GetMalwareProtectionPlanCommandInput,
  type GetMalwareProtectionPlanCommandOutput,
  GetMalwareProtectionPlanCommand,
} from "./commands/GetMalwareProtectionPlanCommand";
import {
  type GetMalwareScanCommandInput,
  type GetMalwareScanCommandOutput,
  GetMalwareScanCommand,
} from "./commands/GetMalwareScanCommand";
import {
  type GetMalwareScanSettingsCommandInput,
  type GetMalwareScanSettingsCommandOutput,
  GetMalwareScanSettingsCommand,
} from "./commands/GetMalwareScanSettingsCommand";
import {
  type GetMasterAccountCommandInput,
  type GetMasterAccountCommandOutput,
  GetMasterAccountCommand,
} from "./commands/GetMasterAccountCommand";
import {
  type GetMemberDetectorsCommandInput,
  type GetMemberDetectorsCommandOutput,
  GetMemberDetectorsCommand,
} from "./commands/GetMemberDetectorsCommand";
import {
  type GetMembersCommandInput,
  type GetMembersCommandOutput,
  GetMembersCommand,
} from "./commands/GetMembersCommand";
import {
  type GetOrganizationStatisticsCommandInput,
  type GetOrganizationStatisticsCommandOutput,
  GetOrganizationStatisticsCommand,
} from "./commands/GetOrganizationStatisticsCommand";
import {
  type GetRemainingFreeTrialDaysCommandInput,
  type GetRemainingFreeTrialDaysCommandOutput,
  GetRemainingFreeTrialDaysCommand,
} from "./commands/GetRemainingFreeTrialDaysCommand";
import {
  type GetThreatEntitySetCommandInput,
  type GetThreatEntitySetCommandOutput,
  GetThreatEntitySetCommand,
} from "./commands/GetThreatEntitySetCommand";
import {
  type GetThreatIntelSetCommandInput,
  type GetThreatIntelSetCommandOutput,
  GetThreatIntelSetCommand,
} from "./commands/GetThreatIntelSetCommand";
import {
  type GetTrustedEntitySetCommandInput,
  type GetTrustedEntitySetCommandOutput,
  GetTrustedEntitySetCommand,
} from "./commands/GetTrustedEntitySetCommand";
import {
  type GetUsageStatisticsCommandInput,
  type GetUsageStatisticsCommandOutput,
  GetUsageStatisticsCommand,
} from "./commands/GetUsageStatisticsCommand";
import {
  type InviteMembersCommandInput,
  type InviteMembersCommandOutput,
  InviteMembersCommand,
} from "./commands/InviteMembersCommand";
import {
  type ListCoverageCommandInput,
  type ListCoverageCommandOutput,
  ListCoverageCommand,
} from "./commands/ListCoverageCommand";
import {
  type ListDetectorsCommandInput,
  type ListDetectorsCommandOutput,
  ListDetectorsCommand,
} from "./commands/ListDetectorsCommand";
import {
  type ListFiltersCommandInput,
  type ListFiltersCommandOutput,
  ListFiltersCommand,
} from "./commands/ListFiltersCommand";
import {
  type ListFindingsCommandInput,
  type ListFindingsCommandOutput,
  ListFindingsCommand,
} from "./commands/ListFindingsCommand";
import {
  type ListInvitationsCommandInput,
  type ListInvitationsCommandOutput,
  ListInvitationsCommand,
} from "./commands/ListInvitationsCommand";
import {
  type ListIPSetsCommandInput,
  type ListIPSetsCommandOutput,
  ListIPSetsCommand,
} from "./commands/ListIPSetsCommand";
import {
  type ListMalwareProtectionPlansCommandInput,
  type ListMalwareProtectionPlansCommandOutput,
  ListMalwareProtectionPlansCommand,
} from "./commands/ListMalwareProtectionPlansCommand";
import {
  type ListMalwareScansCommandInput,
  type ListMalwareScansCommandOutput,
  ListMalwareScansCommand,
} from "./commands/ListMalwareScansCommand";
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
  type ListPublishingDestinationsCommandInput,
  type ListPublishingDestinationsCommandOutput,
  ListPublishingDestinationsCommand,
} from "./commands/ListPublishingDestinationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListThreatEntitySetsCommandInput,
  type ListThreatEntitySetsCommandOutput,
  ListThreatEntitySetsCommand,
} from "./commands/ListThreatEntitySetsCommand";
import {
  type ListThreatIntelSetsCommandInput,
  type ListThreatIntelSetsCommandOutput,
  ListThreatIntelSetsCommand,
} from "./commands/ListThreatIntelSetsCommand";
import {
  type ListTrustedEntitySetsCommandInput,
  type ListTrustedEntitySetsCommandOutput,
  ListTrustedEntitySetsCommand,
} from "./commands/ListTrustedEntitySetsCommand";
import {
  type SendObjectMalwareScanCommandInput,
  type SendObjectMalwareScanCommandOutput,
  SendObjectMalwareScanCommand,
} from "./commands/SendObjectMalwareScanCommand";
import {
  type StartMalwareScanCommandInput,
  type StartMalwareScanCommandOutput,
  StartMalwareScanCommand,
} from "./commands/StartMalwareScanCommand";
import {
  type StartMonitoringMembersCommandInput,
  type StartMonitoringMembersCommandOutput,
  StartMonitoringMembersCommand,
} from "./commands/StartMonitoringMembersCommand";
import {
  type StopMonitoringMembersCommandInput,
  type StopMonitoringMembersCommandOutput,
  StopMonitoringMembersCommand,
} from "./commands/StopMonitoringMembersCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UnarchiveFindingsCommandInput,
  type UnarchiveFindingsCommandOutput,
  UnarchiveFindingsCommand,
} from "./commands/UnarchiveFindingsCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateDetectorCommandInput,
  type UpdateDetectorCommandOutput,
  UpdateDetectorCommand,
} from "./commands/UpdateDetectorCommand";
import {
  type UpdateFilterCommandInput,
  type UpdateFilterCommandOutput,
  UpdateFilterCommand,
} from "./commands/UpdateFilterCommand";
import {
  type UpdateFindingsFeedbackCommandInput,
  type UpdateFindingsFeedbackCommandOutput,
  UpdateFindingsFeedbackCommand,
} from "./commands/UpdateFindingsFeedbackCommand";
import {
  type UpdateIPSetCommandInput,
  type UpdateIPSetCommandOutput,
  UpdateIPSetCommand,
} from "./commands/UpdateIPSetCommand";
import {
  type UpdateMalwareProtectionPlanCommandInput,
  type UpdateMalwareProtectionPlanCommandOutput,
  UpdateMalwareProtectionPlanCommand,
} from "./commands/UpdateMalwareProtectionPlanCommand";
import {
  type UpdateMalwareScanSettingsCommandInput,
  type UpdateMalwareScanSettingsCommandOutput,
  UpdateMalwareScanSettingsCommand,
} from "./commands/UpdateMalwareScanSettingsCommand";
import {
  type UpdateMemberDetectorsCommandInput,
  type UpdateMemberDetectorsCommandOutput,
  UpdateMemberDetectorsCommand,
} from "./commands/UpdateMemberDetectorsCommand";
import {
  type UpdateOrganizationConfigurationCommandInput,
  type UpdateOrganizationConfigurationCommandOutput,
  UpdateOrganizationConfigurationCommand,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  type UpdatePublishingDestinationCommandInput,
  type UpdatePublishingDestinationCommandOutput,
  UpdatePublishingDestinationCommand,
} from "./commands/UpdatePublishingDestinationCommand";
import {
  type UpdateThreatEntitySetCommandInput,
  type UpdateThreatEntitySetCommandOutput,
  UpdateThreatEntitySetCommand,
} from "./commands/UpdateThreatEntitySetCommand";
import {
  type UpdateThreatIntelSetCommandInput,
  type UpdateThreatIntelSetCommandOutput,
  UpdateThreatIntelSetCommand,
} from "./commands/UpdateThreatIntelSetCommand";
import {
  type UpdateTrustedEntitySetCommandInput,
  type UpdateTrustedEntitySetCommandOutput,
  UpdateTrustedEntitySetCommand,
} from "./commands/UpdateTrustedEntitySetCommand";
import { GuardDutyClient } from "./GuardDutyClient";
import { paginateDescribeMalwareScans } from "./pagination/DescribeMalwareScansPaginator";
import { paginateDescribeOrganizationConfiguration } from "./pagination/DescribeOrganizationConfigurationPaginator";
import { paginateGetUsageStatistics } from "./pagination/GetUsageStatisticsPaginator";
import { paginateListCoverage } from "./pagination/ListCoveragePaginator";
import { paginateListDetectors } from "./pagination/ListDetectorsPaginator";
import { paginateListFilters } from "./pagination/ListFiltersPaginator";
import { paginateListFindings } from "./pagination/ListFindingsPaginator";
import { paginateListInvitations } from "./pagination/ListInvitationsPaginator";
import { paginateListIPSets } from "./pagination/ListIPSetsPaginator";
import { paginateListMalwareScans } from "./pagination/ListMalwareScansPaginator";
import { paginateListMembers } from "./pagination/ListMembersPaginator";
import { paginateListOrganizationAdminAccounts } from "./pagination/ListOrganizationAdminAccountsPaginator";
import { paginateListPublishingDestinations } from "./pagination/ListPublishingDestinationsPaginator";
import { paginateListThreatEntitySets } from "./pagination/ListThreatEntitySetsPaginator";
import { paginateListThreatIntelSets } from "./pagination/ListThreatIntelSetsPaginator";
import { paginateListTrustedEntitySets } from "./pagination/ListTrustedEntitySetsPaginator";

const commands = {
  AcceptAdministratorInvitationCommand,
  AcceptInvitationCommand,
  ArchiveFindingsCommand,
  CreateDetectorCommand,
  CreateFilterCommand,
  CreateIPSetCommand,
  CreateMalwareProtectionPlanCommand,
  CreateMembersCommand,
  CreatePublishingDestinationCommand,
  CreateSampleFindingsCommand,
  CreateThreatEntitySetCommand,
  CreateThreatIntelSetCommand,
  CreateTrustedEntitySetCommand,
  DeclineInvitationsCommand,
  DeleteDetectorCommand,
  DeleteFilterCommand,
  DeleteInvitationsCommand,
  DeleteIPSetCommand,
  DeleteMalwareProtectionPlanCommand,
  DeleteMembersCommand,
  DeletePublishingDestinationCommand,
  DeleteThreatEntitySetCommand,
  DeleteThreatIntelSetCommand,
  DeleteTrustedEntitySetCommand,
  DescribeMalwareScansCommand,
  DescribeOrganizationConfigurationCommand,
  DescribePublishingDestinationCommand,
  DisableOrganizationAdminAccountCommand,
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromMasterAccountCommand,
  DisassociateMembersCommand,
  EnableOrganizationAdminAccountCommand,
  GetAdministratorAccountCommand,
  GetCoverageStatisticsCommand,
  GetDetectorCommand,
  GetFilterCommand,
  GetFindingsCommand,
  GetFindingsStatisticsCommand,
  GetInvitationsCountCommand,
  GetIPSetCommand,
  GetMalwareProtectionPlanCommand,
  GetMalwareScanCommand,
  GetMalwareScanSettingsCommand,
  GetMasterAccountCommand,
  GetMemberDetectorsCommand,
  GetMembersCommand,
  GetOrganizationStatisticsCommand,
  GetRemainingFreeTrialDaysCommand,
  GetThreatEntitySetCommand,
  GetThreatIntelSetCommand,
  GetTrustedEntitySetCommand,
  GetUsageStatisticsCommand,
  InviteMembersCommand,
  ListCoverageCommand,
  ListDetectorsCommand,
  ListFiltersCommand,
  ListFindingsCommand,
  ListInvitationsCommand,
  ListIPSetsCommand,
  ListMalwareProtectionPlansCommand,
  ListMalwareScansCommand,
  ListMembersCommand,
  ListOrganizationAdminAccountsCommand,
  ListPublishingDestinationsCommand,
  ListTagsForResourceCommand,
  ListThreatEntitySetsCommand,
  ListThreatIntelSetsCommand,
  ListTrustedEntitySetsCommand,
  SendObjectMalwareScanCommand,
  StartMalwareScanCommand,
  StartMonitoringMembersCommand,
  StopMonitoringMembersCommand,
  TagResourceCommand,
  UnarchiveFindingsCommand,
  UntagResourceCommand,
  UpdateDetectorCommand,
  UpdateFilterCommand,
  UpdateFindingsFeedbackCommand,
  UpdateIPSetCommand,
  UpdateMalwareProtectionPlanCommand,
  UpdateMalwareScanSettingsCommand,
  UpdateMemberDetectorsCommand,
  UpdateOrganizationConfigurationCommand,
  UpdatePublishingDestinationCommand,
  UpdateThreatEntitySetCommand,
  UpdateThreatIntelSetCommand,
  UpdateTrustedEntitySetCommand,
};
const paginators = {
  paginateDescribeMalwareScans,
  paginateDescribeOrganizationConfiguration,
  paginateGetUsageStatistics,
  paginateListCoverage,
  paginateListDetectors,
  paginateListFilters,
  paginateListFindings,
  paginateListInvitations,
  paginateListIPSets,
  paginateListMalwareScans,
  paginateListMembers,
  paginateListOrganizationAdminAccounts,
  paginateListPublishingDestinations,
  paginateListThreatEntitySets,
  paginateListThreatIntelSets,
  paginateListTrustedEntitySets,
};

export interface GuardDuty {
  /**
   * @see {@link AcceptAdministratorInvitationCommand}
   */
  acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptAdministratorInvitationCommandOutput>;
  acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    cb: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void
  ): void;
  acceptAdministratorInvitation(
    args: AcceptAdministratorInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptAdministratorInvitationCommandOutput) => void
  ): void;

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
   * @see {@link ArchiveFindingsCommand}
   */
  archiveFindings(
    args: ArchiveFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ArchiveFindingsCommandOutput>;
  archiveFindings(
    args: ArchiveFindingsCommandInput,
    cb: (err: any, data?: ArchiveFindingsCommandOutput) => void
  ): void;
  archiveFindings(
    args: ArchiveFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ArchiveFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDetectorCommand}
   */
  createDetector(
    args: CreateDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDetectorCommandOutput>;
  createDetector(
    args: CreateDetectorCommandInput,
    cb: (err: any, data?: CreateDetectorCommandOutput) => void
  ): void;
  createDetector(
    args: CreateDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFilterCommand}
   */
  createFilter(
    args: CreateFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFilterCommandOutput>;
  createFilter(
    args: CreateFilterCommandInput,
    cb: (err: any, data?: CreateFilterCommandOutput) => void
  ): void;
  createFilter(
    args: CreateFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIPSetCommand}
   */
  createIPSet(
    args: CreateIPSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIPSetCommandOutput>;
  createIPSet(
    args: CreateIPSetCommandInput,
    cb: (err: any, data?: CreateIPSetCommandOutput) => void
  ): void;
  createIPSet(
    args: CreateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMalwareProtectionPlanCommand}
   */
  createMalwareProtectionPlan(
    args: CreateMalwareProtectionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMalwareProtectionPlanCommandOutput>;
  createMalwareProtectionPlan(
    args: CreateMalwareProtectionPlanCommandInput,
    cb: (err: any, data?: CreateMalwareProtectionPlanCommandOutput) => void
  ): void;
  createMalwareProtectionPlan(
    args: CreateMalwareProtectionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMalwareProtectionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMembersCommand}
   */
  createMembers(
    args: CreateMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMembersCommandOutput>;
  createMembers(
    args: CreateMembersCommandInput,
    cb: (err: any, data?: CreateMembersCommandOutput) => void
  ): void;
  createMembers(
    args: CreateMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePublishingDestinationCommand}
   */
  createPublishingDestination(
    args: CreatePublishingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePublishingDestinationCommandOutput>;
  createPublishingDestination(
    args: CreatePublishingDestinationCommandInput,
    cb: (err: any, data?: CreatePublishingDestinationCommandOutput) => void
  ): void;
  createPublishingDestination(
    args: CreatePublishingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePublishingDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSampleFindingsCommand}
   */
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
   * @see {@link CreateThreatEntitySetCommand}
   */
  createThreatEntitySet(
    args: CreateThreatEntitySetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThreatEntitySetCommandOutput>;
  createThreatEntitySet(
    args: CreateThreatEntitySetCommandInput,
    cb: (err: any, data?: CreateThreatEntitySetCommandOutput) => void
  ): void;
  createThreatEntitySet(
    args: CreateThreatEntitySetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThreatEntitySetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateThreatIntelSetCommand}
   */
  createThreatIntelSet(
    args: CreateThreatIntelSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThreatIntelSetCommandOutput>;
  createThreatIntelSet(
    args: CreateThreatIntelSetCommandInput,
    cb: (err: any, data?: CreateThreatIntelSetCommandOutput) => void
  ): void;
  createThreatIntelSet(
    args: CreateThreatIntelSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThreatIntelSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrustedEntitySetCommand}
   */
  createTrustedEntitySet(
    args: CreateTrustedEntitySetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrustedEntitySetCommandOutput>;
  createTrustedEntitySet(
    args: CreateTrustedEntitySetCommandInput,
    cb: (err: any, data?: CreateTrustedEntitySetCommandOutput) => void
  ): void;
  createTrustedEntitySet(
    args: CreateTrustedEntitySetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrustedEntitySetCommandOutput) => void
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
   * @see {@link DeleteDetectorCommand}
   */
  deleteDetector(
    args: DeleteDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDetectorCommandOutput>;
  deleteDetector(
    args: DeleteDetectorCommandInput,
    cb: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): void;
  deleteDetector(
    args: DeleteDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFilterCommand}
   */
  deleteFilter(
    args: DeleteFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFilterCommandOutput>;
  deleteFilter(
    args: DeleteFilterCommandInput,
    cb: (err: any, data?: DeleteFilterCommandOutput) => void
  ): void;
  deleteFilter(
    args: DeleteFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFilterCommandOutput) => void
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
   * @see {@link DeleteIPSetCommand}
   */
  deleteIPSet(
    args: DeleteIPSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIPSetCommandOutput>;
  deleteIPSet(
    args: DeleteIPSetCommandInput,
    cb: (err: any, data?: DeleteIPSetCommandOutput) => void
  ): void;
  deleteIPSet(
    args: DeleteIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMalwareProtectionPlanCommand}
   */
  deleteMalwareProtectionPlan(
    args: DeleteMalwareProtectionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMalwareProtectionPlanCommandOutput>;
  deleteMalwareProtectionPlan(
    args: DeleteMalwareProtectionPlanCommandInput,
    cb: (err: any, data?: DeleteMalwareProtectionPlanCommandOutput) => void
  ): void;
  deleteMalwareProtectionPlan(
    args: DeleteMalwareProtectionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMalwareProtectionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMembersCommand}
   */
  deleteMembers(
    args: DeleteMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMembersCommandOutput>;
  deleteMembers(
    args: DeleteMembersCommandInput,
    cb: (err: any, data?: DeleteMembersCommandOutput) => void
  ): void;
  deleteMembers(
    args: DeleteMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePublishingDestinationCommand}
   */
  deletePublishingDestination(
    args: DeletePublishingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublishingDestinationCommandOutput>;
  deletePublishingDestination(
    args: DeletePublishingDestinationCommandInput,
    cb: (err: any, data?: DeletePublishingDestinationCommandOutput) => void
  ): void;
  deletePublishingDestination(
    args: DeletePublishingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublishingDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThreatEntitySetCommand}
   */
  deleteThreatEntitySet(
    args: DeleteThreatEntitySetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThreatEntitySetCommandOutput>;
  deleteThreatEntitySet(
    args: DeleteThreatEntitySetCommandInput,
    cb: (err: any, data?: DeleteThreatEntitySetCommandOutput) => void
  ): void;
  deleteThreatEntitySet(
    args: DeleteThreatEntitySetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThreatEntitySetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteThreatIntelSetCommand}
   */
  deleteThreatIntelSet(
    args: DeleteThreatIntelSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThreatIntelSetCommandOutput>;
  deleteThreatIntelSet(
    args: DeleteThreatIntelSetCommandInput,
    cb: (err: any, data?: DeleteThreatIntelSetCommandOutput) => void
  ): void;
  deleteThreatIntelSet(
    args: DeleteThreatIntelSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThreatIntelSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrustedEntitySetCommand}
   */
  deleteTrustedEntitySet(
    args: DeleteTrustedEntitySetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrustedEntitySetCommandOutput>;
  deleteTrustedEntitySet(
    args: DeleteTrustedEntitySetCommandInput,
    cb: (err: any, data?: DeleteTrustedEntitySetCommandOutput) => void
  ): void;
  deleteTrustedEntitySet(
    args: DeleteTrustedEntitySetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrustedEntitySetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMalwareScansCommand}
   */
  describeMalwareScans(
    args: DescribeMalwareScansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMalwareScansCommandOutput>;
  describeMalwareScans(
    args: DescribeMalwareScansCommandInput,
    cb: (err: any, data?: DescribeMalwareScansCommandOutput) => void
  ): void;
  describeMalwareScans(
    args: DescribeMalwareScansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMalwareScansCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationConfigurationCommand}
   */
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
   * @see {@link DescribePublishingDestinationCommand}
   */
  describePublishingDestination(
    args: DescribePublishingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePublishingDestinationCommandOutput>;
  describePublishingDestination(
    args: DescribePublishingDestinationCommandInput,
    cb: (err: any, data?: DescribePublishingDestinationCommandOutput) => void
  ): void;
  describePublishingDestination(
    args: DescribePublishingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePublishingDestinationCommandOutput) => void
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
   * @see {@link DisassociateMembersCommand}
   */
  disassociateMembers(
    args: DisassociateMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMembersCommandOutput>;
  disassociateMembers(
    args: DisassociateMembersCommandInput,
    cb: (err: any, data?: DisassociateMembersCommandOutput) => void
  ): void;
  disassociateMembers(
    args: DisassociateMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMembersCommandOutput) => void
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
   * @see {@link GetCoverageStatisticsCommand}
   */
  getCoverageStatistics(
    args: GetCoverageStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCoverageStatisticsCommandOutput>;
  getCoverageStatistics(
    args: GetCoverageStatisticsCommandInput,
    cb: (err: any, data?: GetCoverageStatisticsCommandOutput) => void
  ): void;
  getCoverageStatistics(
    args: GetCoverageStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCoverageStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDetectorCommand}
   */
  getDetector(
    args: GetDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDetectorCommandOutput>;
  getDetector(
    args: GetDetectorCommandInput,
    cb: (err: any, data?: GetDetectorCommandOutput) => void
  ): void;
  getDetector(
    args: GetDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFilterCommand}
   */
  getFilter(
    args: GetFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFilterCommandOutput>;
  getFilter(
    args: GetFilterCommandInput,
    cb: (err: any, data?: GetFilterCommandOutput) => void
  ): void;
  getFilter(
    args: GetFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFilterCommandOutput) => void
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
   * @see {@link GetFindingsStatisticsCommand}
   */
  getFindingsStatistics(
    args: GetFindingsStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsStatisticsCommandOutput>;
  getFindingsStatistics(
    args: GetFindingsStatisticsCommandInput,
    cb: (err: any, data?: GetFindingsStatisticsCommandOutput) => void
  ): void;
  getFindingsStatistics(
    args: GetFindingsStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsStatisticsCommandOutput) => void
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
   * @see {@link GetIPSetCommand}
   */
  getIPSet(
    args: GetIPSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIPSetCommandOutput>;
  getIPSet(
    args: GetIPSetCommandInput,
    cb: (err: any, data?: GetIPSetCommandOutput) => void
  ): void;
  getIPSet(
    args: GetIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMalwareProtectionPlanCommand}
   */
  getMalwareProtectionPlan(
    args: GetMalwareProtectionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMalwareProtectionPlanCommandOutput>;
  getMalwareProtectionPlan(
    args: GetMalwareProtectionPlanCommandInput,
    cb: (err: any, data?: GetMalwareProtectionPlanCommandOutput) => void
  ): void;
  getMalwareProtectionPlan(
    args: GetMalwareProtectionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMalwareProtectionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMalwareScanCommand}
   */
  getMalwareScan(
    args: GetMalwareScanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMalwareScanCommandOutput>;
  getMalwareScan(
    args: GetMalwareScanCommandInput,
    cb: (err: any, data?: GetMalwareScanCommandOutput) => void
  ): void;
  getMalwareScan(
    args: GetMalwareScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMalwareScanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMalwareScanSettingsCommand}
   */
  getMalwareScanSettings(
    args: GetMalwareScanSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMalwareScanSettingsCommandOutput>;
  getMalwareScanSettings(
    args: GetMalwareScanSettingsCommandInput,
    cb: (err: any, data?: GetMalwareScanSettingsCommandOutput) => void
  ): void;
  getMalwareScanSettings(
    args: GetMalwareScanSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMalwareScanSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMasterAccountCommand}
   */
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
   * @see {@link GetMemberDetectorsCommand}
   */
  getMemberDetectors(
    args: GetMemberDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMemberDetectorsCommandOutput>;
  getMemberDetectors(
    args: GetMemberDetectorsCommandInput,
    cb: (err: any, data?: GetMemberDetectorsCommandOutput) => void
  ): void;
  getMemberDetectors(
    args: GetMemberDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemberDetectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMembersCommand}
   */
  getMembers(
    args: GetMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMembersCommandOutput>;
  getMembers(
    args: GetMembersCommandInput,
    cb: (err: any, data?: GetMembersCommandOutput) => void
  ): void;
  getMembers(
    args: GetMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationStatisticsCommand}
   */
  getOrganizationStatistics(): Promise<GetOrganizationStatisticsCommandOutput>;
  getOrganizationStatistics(
    args: GetOrganizationStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationStatisticsCommandOutput>;
  getOrganizationStatistics(
    args: GetOrganizationStatisticsCommandInput,
    cb: (err: any, data?: GetOrganizationStatisticsCommandOutput) => void
  ): void;
  getOrganizationStatistics(
    args: GetOrganizationStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRemainingFreeTrialDaysCommand}
   */
  getRemainingFreeTrialDays(
    args: GetRemainingFreeTrialDaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRemainingFreeTrialDaysCommandOutput>;
  getRemainingFreeTrialDays(
    args: GetRemainingFreeTrialDaysCommandInput,
    cb: (err: any, data?: GetRemainingFreeTrialDaysCommandOutput) => void
  ): void;
  getRemainingFreeTrialDays(
    args: GetRemainingFreeTrialDaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRemainingFreeTrialDaysCommandOutput) => void
  ): void;

  /**
   * @see {@link GetThreatEntitySetCommand}
   */
  getThreatEntitySet(
    args: GetThreatEntitySetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetThreatEntitySetCommandOutput>;
  getThreatEntitySet(
    args: GetThreatEntitySetCommandInput,
    cb: (err: any, data?: GetThreatEntitySetCommandOutput) => void
  ): void;
  getThreatEntitySet(
    args: GetThreatEntitySetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThreatEntitySetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetThreatIntelSetCommand}
   */
  getThreatIntelSet(
    args: GetThreatIntelSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetThreatIntelSetCommandOutput>;
  getThreatIntelSet(
    args: GetThreatIntelSetCommandInput,
    cb: (err: any, data?: GetThreatIntelSetCommandOutput) => void
  ): void;
  getThreatIntelSet(
    args: GetThreatIntelSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThreatIntelSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrustedEntitySetCommand}
   */
  getTrustedEntitySet(
    args: GetTrustedEntitySetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrustedEntitySetCommandOutput>;
  getTrustedEntitySet(
    args: GetTrustedEntitySetCommandInput,
    cb: (err: any, data?: GetTrustedEntitySetCommandOutput) => void
  ): void;
  getTrustedEntitySet(
    args: GetTrustedEntitySetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrustedEntitySetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetUsageStatisticsCommand}
   */
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
   * @see {@link InviteMembersCommand}
   */
  inviteMembers(
    args: InviteMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InviteMembersCommandOutput>;
  inviteMembers(
    args: InviteMembersCommandInput,
    cb: (err: any, data?: InviteMembersCommandOutput) => void
  ): void;
  inviteMembers(
    args: InviteMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InviteMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoverageCommand}
   */
  listCoverage(
    args: ListCoverageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoverageCommandOutput>;
  listCoverage(
    args: ListCoverageCommandInput,
    cb: (err: any, data?: ListCoverageCommandOutput) => void
  ): void;
  listCoverage(
    args: ListCoverageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoverageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDetectorsCommand}
   */
  listDetectors(): Promise<ListDetectorsCommandOutput>;
  listDetectors(
    args: ListDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDetectorsCommandOutput>;
  listDetectors(
    args: ListDetectorsCommandInput,
    cb: (err: any, data?: ListDetectorsCommandOutput) => void
  ): void;
  listDetectors(
    args: ListDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFiltersCommand}
   */
  listFilters(
    args: ListFiltersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFiltersCommandOutput>;
  listFilters(
    args: ListFiltersCommandInput,
    cb: (err: any, data?: ListFiltersCommandOutput) => void
  ): void;
  listFilters(
    args: ListFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsCommand}
   */
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
   * @see {@link ListIPSetsCommand}
   */
  listIPSets(
    args: ListIPSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIPSetsCommandOutput>;
  listIPSets(
    args: ListIPSetsCommandInput,
    cb: (err: any, data?: ListIPSetsCommandOutput) => void
  ): void;
  listIPSets(
    args: ListIPSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIPSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMalwareProtectionPlansCommand}
   */
  listMalwareProtectionPlans(): Promise<ListMalwareProtectionPlansCommandOutput>;
  listMalwareProtectionPlans(
    args: ListMalwareProtectionPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMalwareProtectionPlansCommandOutput>;
  listMalwareProtectionPlans(
    args: ListMalwareProtectionPlansCommandInput,
    cb: (err: any, data?: ListMalwareProtectionPlansCommandOutput) => void
  ): void;
  listMalwareProtectionPlans(
    args: ListMalwareProtectionPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMalwareProtectionPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMalwareScansCommand}
   */
  listMalwareScans(): Promise<ListMalwareScansCommandOutput>;
  listMalwareScans(
    args: ListMalwareScansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMalwareScansCommandOutput>;
  listMalwareScans(
    args: ListMalwareScansCommandInput,
    cb: (err: any, data?: ListMalwareScansCommandOutput) => void
  ): void;
  listMalwareScans(
    args: ListMalwareScansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMalwareScansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembersCommand}
   */
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
   * @see {@link ListPublishingDestinationsCommand}
   */
  listPublishingDestinations(
    args: ListPublishingDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublishingDestinationsCommandOutput>;
  listPublishingDestinations(
    args: ListPublishingDestinationsCommandInput,
    cb: (err: any, data?: ListPublishingDestinationsCommandOutput) => void
  ): void;
  listPublishingDestinations(
    args: ListPublishingDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublishingDestinationsCommandOutput) => void
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
   * @see {@link ListThreatEntitySetsCommand}
   */
  listThreatEntitySets(
    args: ListThreatEntitySetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThreatEntitySetsCommandOutput>;
  listThreatEntitySets(
    args: ListThreatEntitySetsCommandInput,
    cb: (err: any, data?: ListThreatEntitySetsCommandOutput) => void
  ): void;
  listThreatEntitySets(
    args: ListThreatEntitySetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThreatEntitySetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListThreatIntelSetsCommand}
   */
  listThreatIntelSets(
    args: ListThreatIntelSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThreatIntelSetsCommandOutput>;
  listThreatIntelSets(
    args: ListThreatIntelSetsCommandInput,
    cb: (err: any, data?: ListThreatIntelSetsCommandOutput) => void
  ): void;
  listThreatIntelSets(
    args: ListThreatIntelSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThreatIntelSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrustedEntitySetsCommand}
   */
  listTrustedEntitySets(
    args: ListTrustedEntitySetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrustedEntitySetsCommandOutput>;
  listTrustedEntitySets(
    args: ListTrustedEntitySetsCommandInput,
    cb: (err: any, data?: ListTrustedEntitySetsCommandOutput) => void
  ): void;
  listTrustedEntitySets(
    args: ListTrustedEntitySetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrustedEntitySetsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendObjectMalwareScanCommand}
   */
  sendObjectMalwareScan(): Promise<SendObjectMalwareScanCommandOutput>;
  sendObjectMalwareScan(
    args: SendObjectMalwareScanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendObjectMalwareScanCommandOutput>;
  sendObjectMalwareScan(
    args: SendObjectMalwareScanCommandInput,
    cb: (err: any, data?: SendObjectMalwareScanCommandOutput) => void
  ): void;
  sendObjectMalwareScan(
    args: SendObjectMalwareScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendObjectMalwareScanCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMalwareScanCommand}
   */
  startMalwareScan(
    args: StartMalwareScanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMalwareScanCommandOutput>;
  startMalwareScan(
    args: StartMalwareScanCommandInput,
    cb: (err: any, data?: StartMalwareScanCommandOutput) => void
  ): void;
  startMalwareScan(
    args: StartMalwareScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMalwareScanCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMonitoringMembersCommand}
   */
  startMonitoringMembers(
    args: StartMonitoringMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMonitoringMembersCommandOutput>;
  startMonitoringMembers(
    args: StartMonitoringMembersCommandInput,
    cb: (err: any, data?: StartMonitoringMembersCommandOutput) => void
  ): void;
  startMonitoringMembers(
    args: StartMonitoringMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMonitoringMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link StopMonitoringMembersCommand}
   */
  stopMonitoringMembers(
    args: StopMonitoringMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMonitoringMembersCommandOutput>;
  stopMonitoringMembers(
    args: StopMonitoringMembersCommandInput,
    cb: (err: any, data?: StopMonitoringMembersCommandOutput) => void
  ): void;
  stopMonitoringMembers(
    args: StopMonitoringMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMonitoringMembersCommandOutput) => void
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
   * @see {@link UnarchiveFindingsCommand}
   */
  unarchiveFindings(
    args: UnarchiveFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnarchiveFindingsCommandOutput>;
  unarchiveFindings(
    args: UnarchiveFindingsCommandInput,
    cb: (err: any, data?: UnarchiveFindingsCommandOutput) => void
  ): void;
  unarchiveFindings(
    args: UnarchiveFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnarchiveFindingsCommandOutput) => void
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
   * @see {@link UpdateDetectorCommand}
   */
  updateDetector(
    args: UpdateDetectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDetectorCommandOutput>;
  updateDetector(
    args: UpdateDetectorCommandInput,
    cb: (err: any, data?: UpdateDetectorCommandOutput) => void
  ): void;
  updateDetector(
    args: UpdateDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFilterCommand}
   */
  updateFilter(
    args: UpdateFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFilterCommandOutput>;
  updateFilter(
    args: UpdateFilterCommandInput,
    cb: (err: any, data?: UpdateFilterCommandOutput) => void
  ): void;
  updateFilter(
    args: UpdateFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFindingsFeedbackCommand}
   */
  updateFindingsFeedback(
    args: UpdateFindingsFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingsFeedbackCommandOutput>;
  updateFindingsFeedback(
    args: UpdateFindingsFeedbackCommandInput,
    cb: (err: any, data?: UpdateFindingsFeedbackCommandOutput) => void
  ): void;
  updateFindingsFeedback(
    args: UpdateFindingsFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingsFeedbackCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIPSetCommand}
   */
  updateIPSet(
    args: UpdateIPSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIPSetCommandOutput>;
  updateIPSet(
    args: UpdateIPSetCommandInput,
    cb: (err: any, data?: UpdateIPSetCommandOutput) => void
  ): void;
  updateIPSet(
    args: UpdateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMalwareProtectionPlanCommand}
   */
  updateMalwareProtectionPlan(
    args: UpdateMalwareProtectionPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMalwareProtectionPlanCommandOutput>;
  updateMalwareProtectionPlan(
    args: UpdateMalwareProtectionPlanCommandInput,
    cb: (err: any, data?: UpdateMalwareProtectionPlanCommandOutput) => void
  ): void;
  updateMalwareProtectionPlan(
    args: UpdateMalwareProtectionPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMalwareProtectionPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMalwareScanSettingsCommand}
   */
  updateMalwareScanSettings(
    args: UpdateMalwareScanSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMalwareScanSettingsCommandOutput>;
  updateMalwareScanSettings(
    args: UpdateMalwareScanSettingsCommandInput,
    cb: (err: any, data?: UpdateMalwareScanSettingsCommandOutput) => void
  ): void;
  updateMalwareScanSettings(
    args: UpdateMalwareScanSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMalwareScanSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMemberDetectorsCommand}
   */
  updateMemberDetectors(
    args: UpdateMemberDetectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMemberDetectorsCommandOutput>;
  updateMemberDetectors(
    args: UpdateMemberDetectorsCommandInput,
    cb: (err: any, data?: UpdateMemberDetectorsCommandOutput) => void
  ): void;
  updateMemberDetectors(
    args: UpdateMemberDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMemberDetectorsCommandOutput) => void
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
   * @see {@link UpdatePublishingDestinationCommand}
   */
  updatePublishingDestination(
    args: UpdatePublishingDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePublishingDestinationCommandOutput>;
  updatePublishingDestination(
    args: UpdatePublishingDestinationCommandInput,
    cb: (err: any, data?: UpdatePublishingDestinationCommandOutput) => void
  ): void;
  updatePublishingDestination(
    args: UpdatePublishingDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePublishingDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThreatEntitySetCommand}
   */
  updateThreatEntitySet(
    args: UpdateThreatEntitySetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThreatEntitySetCommandOutput>;
  updateThreatEntitySet(
    args: UpdateThreatEntitySetCommandInput,
    cb: (err: any, data?: UpdateThreatEntitySetCommandOutput) => void
  ): void;
  updateThreatEntitySet(
    args: UpdateThreatEntitySetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThreatEntitySetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateThreatIntelSetCommand}
   */
  updateThreatIntelSet(
    args: UpdateThreatIntelSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThreatIntelSetCommandOutput>;
  updateThreatIntelSet(
    args: UpdateThreatIntelSetCommandInput,
    cb: (err: any, data?: UpdateThreatIntelSetCommandOutput) => void
  ): void;
  updateThreatIntelSet(
    args: UpdateThreatIntelSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThreatIntelSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrustedEntitySetCommand}
   */
  updateTrustedEntitySet(
    args: UpdateTrustedEntitySetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrustedEntitySetCommandOutput>;
  updateTrustedEntitySet(
    args: UpdateTrustedEntitySetCommandInput,
    cb: (err: any, data?: UpdateTrustedEntitySetCommandOutput) => void
  ): void;
  updateTrustedEntitySet(
    args: UpdateTrustedEntitySetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrustedEntitySetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMalwareScansCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMalwareScansCommandOutput}.
   */
  paginateDescribeMalwareScans(
    args: DescribeMalwareScansCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMalwareScansCommandOutput>;

  /**
   * @see {@link DescribeOrganizationConfigurationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeOrganizationConfigurationCommandOutput}.
   */
  paginateDescribeOrganizationConfiguration(
    args: DescribeOrganizationConfigurationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeOrganizationConfigurationCommandOutput>;

  /**
   * @see {@link GetUsageStatisticsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetUsageStatisticsCommandOutput}.
   */
  paginateGetUsageStatistics(
    args: GetUsageStatisticsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetUsageStatisticsCommandOutput>;

  /**
   * @see {@link ListCoverageCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCoverageCommandOutput}.
   */
  paginateListCoverage(
    args: ListCoverageCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCoverageCommandOutput>;

  /**
   * @see {@link ListDetectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDetectorsCommandOutput}.
   */
  paginateListDetectors(
    args?: ListDetectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDetectorsCommandOutput>;

  /**
   * @see {@link ListFiltersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFiltersCommandOutput}.
   */
  paginateListFilters(
    args: ListFiltersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFiltersCommandOutput>;

  /**
   * @see {@link ListFindingsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFindingsCommandOutput}.
   */
  paginateListFindings(
    args: ListFindingsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFindingsCommandOutput>;

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
   * @see {@link ListIPSetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIPSetsCommandOutput}.
   */
  paginateListIPSets(
    args: ListIPSetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIPSetsCommandOutput>;

  /**
   * @see {@link ListMalwareScansCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMalwareScansCommandOutput}.
   */
  paginateListMalwareScans(
    args?: ListMalwareScansCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMalwareScansCommandOutput>;

  /**
   * @see {@link ListMembersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMembersCommandOutput}.
   */
  paginateListMembers(
    args: ListMembersCommandInput,
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
   * @see {@link ListPublishingDestinationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPublishingDestinationsCommandOutput}.
   */
  paginateListPublishingDestinations(
    args: ListPublishingDestinationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPublishingDestinationsCommandOutput>;

  /**
   * @see {@link ListThreatEntitySetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListThreatEntitySetsCommandOutput}.
   */
  paginateListThreatEntitySets(
    args: ListThreatEntitySetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListThreatEntitySetsCommandOutput>;

  /**
   * @see {@link ListThreatIntelSetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListThreatIntelSetsCommandOutput}.
   */
  paginateListThreatIntelSets(
    args: ListThreatIntelSetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListThreatIntelSetsCommandOutput>;

  /**
   * @see {@link ListTrustedEntitySetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTrustedEntitySetsCommandOutput}.
   */
  paginateListTrustedEntitySets(
    args: ListTrustedEntitySetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTrustedEntitySetsCommandOutput>;
}

/**
 * <p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes
 *       the following foundational data sources - VPC flow logs, Amazon Web Services CloudTrail management event logs, CloudTrail S3 data event
 *       logs, EKS audit logs, DNS logs, Amazon EBS volume data, runtime activity belonging to container workloads, such
 *       as Amazon EKS, Amazon ECS (including Amazon Web Services Fargate), and Amazon EC2 instances.
 *       It uses threat intelligence
 *       feeds, such as lists of malicious IPs and domains, and machine learning to identify
 *       unexpected, potentially unauthorized, and malicious activity within your Amazon Web Services environment.
 *       This can include issues like escalations of privileges, uses of exposed credentials, or
 *       communication with malicious IPs, domains, or presence of malware on your Amazon EC2 instances
 *       and container workloads. For example, GuardDuty can detect compromised EC2 instances and
 *       container workloads serving malware, or mining bitcoin. </p>
 *          <p>GuardDuty also monitors Amazon Web Services account access behavior for signs of compromise, such as
 *       unauthorized infrastructure deployments like EC2 instances deployed in a Region that has never
 *       been used, or unusual API calls like a password policy change to reduce password strength. </p>
 *          <p>GuardDuty informs you about the status of your Amazon Web Services environment by producing security
 *       findings that you can view in the GuardDuty console or through Amazon EventBridge. For more
 *       information, see the <i>
 *                <a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html">Amazon
 *           GuardDuty User Guide</a>
 *             </i>. </p>
 * @public
 */
export class GuardDuty extends GuardDutyClient implements GuardDuty {}
createAggregatedClient(commands, GuardDuty, { paginators });
