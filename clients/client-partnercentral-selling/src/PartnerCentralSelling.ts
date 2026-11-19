// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AcceptEngagementInvitationCommandInput,
  type AcceptEngagementInvitationCommandOutput,
  AcceptEngagementInvitationCommand,
} from "./commands/AcceptEngagementInvitationCommand";
import {
  type AssignOpportunityCommandInput,
  type AssignOpportunityCommandOutput,
  AssignOpportunityCommand,
} from "./commands/AssignOpportunityCommand";
import {
  type AssociateOpportunityCommandInput,
  type AssociateOpportunityCommandOutput,
  AssociateOpportunityCommand,
} from "./commands/AssociateOpportunityCommand";
import {
  type CreateCustomerAccountCommandInput,
  type CreateCustomerAccountCommandOutput,
  CreateCustomerAccountCommand,
} from "./commands/CreateCustomerAccountCommand";
import {
  type CreateEngagementCommandInput,
  type CreateEngagementCommandOutput,
  CreateEngagementCommand,
} from "./commands/CreateEngagementCommand";
import {
  type CreateEngagementContextCommandInput,
  type CreateEngagementContextCommandOutput,
  CreateEngagementContextCommand,
} from "./commands/CreateEngagementContextCommand";
import {
  type CreateEngagementInvitationCommandInput,
  type CreateEngagementInvitationCommandOutput,
  CreateEngagementInvitationCommand,
} from "./commands/CreateEngagementInvitationCommand";
import {
  type CreateOpportunityCommandInput,
  type CreateOpportunityCommandOutput,
  CreateOpportunityCommand,
} from "./commands/CreateOpportunityCommand";
import {
  type CreateResourceSnapshotCommandInput,
  type CreateResourceSnapshotCommandOutput,
  CreateResourceSnapshotCommand,
} from "./commands/CreateResourceSnapshotCommand";
import {
  type CreateResourceSnapshotJobCommandInput,
  type CreateResourceSnapshotJobCommandOutput,
  CreateResourceSnapshotJobCommand,
} from "./commands/CreateResourceSnapshotJobCommand";
import {
  type DeleteCustomerAccountCommandInput,
  type DeleteCustomerAccountCommandOutput,
  DeleteCustomerAccountCommand,
} from "./commands/DeleteCustomerAccountCommand";
import {
  type DeleteResourceSnapshotJobCommandInput,
  type DeleteResourceSnapshotJobCommandOutput,
  DeleteResourceSnapshotJobCommand,
} from "./commands/DeleteResourceSnapshotJobCommand";
import {
  type DisassociateOpportunityCommandInput,
  type DisassociateOpportunityCommandOutput,
  DisassociateOpportunityCommand,
} from "./commands/DisassociateOpportunityCommand";
import {
  type GetAwsOpportunitySummaryCommandInput,
  type GetAwsOpportunitySummaryCommandOutput,
  GetAwsOpportunitySummaryCommand,
} from "./commands/GetAwsOpportunitySummaryCommand";
import {
  type GetCustomerAccountBulkJobCommandInput,
  type GetCustomerAccountBulkJobCommandOutput,
  GetCustomerAccountBulkJobCommand,
} from "./commands/GetCustomerAccountBulkJobCommand";
import {
  type GetCustomerAccountBulkJobReportUrlCommandInput,
  type GetCustomerAccountBulkJobReportUrlCommandOutput,
  GetCustomerAccountBulkJobReportUrlCommand,
} from "./commands/GetCustomerAccountBulkJobReportUrlCommand";
import {
  type GetCustomerAccountCommandInput,
  type GetCustomerAccountCommandOutput,
  GetCustomerAccountCommand,
} from "./commands/GetCustomerAccountCommand";
import {
  type GetCustomerAccountStatisticsCommandInput,
  type GetCustomerAccountStatisticsCommandOutput,
  GetCustomerAccountStatisticsCommand,
} from "./commands/GetCustomerAccountStatisticsCommand";
import {
  type GetEngagementCommandInput,
  type GetEngagementCommandOutput,
  GetEngagementCommand,
} from "./commands/GetEngagementCommand";
import {
  type GetEngagementInvitationCommandInput,
  type GetEngagementInvitationCommandOutput,
  GetEngagementInvitationCommand,
} from "./commands/GetEngagementInvitationCommand";
import {
  type GetOpportunityBulkJobReportUrlCommandInput,
  type GetOpportunityBulkJobReportUrlCommandOutput,
  GetOpportunityBulkJobReportUrlCommand,
} from "./commands/GetOpportunityBulkJobReportUrlCommand";
import {
  type GetOpportunityCommandInput,
  type GetOpportunityCommandOutput,
  GetOpportunityCommand,
} from "./commands/GetOpportunityCommand";
import {
  type GetProspectingFromEngagementTaskCommandInput,
  type GetProspectingFromEngagementTaskCommandOutput,
  GetProspectingFromEngagementTaskCommand,
} from "./commands/GetProspectingFromEngagementTaskCommand";
import {
  type GetResourceSnapshotCommandInput,
  type GetResourceSnapshotCommandOutput,
  GetResourceSnapshotCommand,
} from "./commands/GetResourceSnapshotCommand";
import {
  type GetResourceSnapshotJobCommandInput,
  type GetResourceSnapshotJobCommandOutput,
  GetResourceSnapshotJobCommand,
} from "./commands/GetResourceSnapshotJobCommand";
import {
  type GetSellingSystemSettingsCommandInput,
  type GetSellingSystemSettingsCommandOutput,
  GetSellingSystemSettingsCommand,
} from "./commands/GetSellingSystemSettingsCommand";
import {
  type ListCustomerAccountBulkJobResultsCommandInput,
  type ListCustomerAccountBulkJobResultsCommandOutput,
  ListCustomerAccountBulkJobResultsCommand,
} from "./commands/ListCustomerAccountBulkJobResultsCommand";
import {
  type ListCustomerAccountBulkJobsCommandInput,
  type ListCustomerAccountBulkJobsCommandOutput,
  ListCustomerAccountBulkJobsCommand,
} from "./commands/ListCustomerAccountBulkJobsCommand";
import {
  type ListEngagementByAcceptingInvitationTasksCommandInput,
  type ListEngagementByAcceptingInvitationTasksCommandOutput,
  ListEngagementByAcceptingInvitationTasksCommand,
} from "./commands/ListEngagementByAcceptingInvitationTasksCommand";
import {
  type ListEngagementFromOpportunityTasksCommandInput,
  type ListEngagementFromOpportunityTasksCommandOutput,
  ListEngagementFromOpportunityTasksCommand,
} from "./commands/ListEngagementFromOpportunityTasksCommand";
import {
  type ListEngagementGroupsCommandInput,
  type ListEngagementGroupsCommandOutput,
  ListEngagementGroupsCommand,
} from "./commands/ListEngagementGroupsCommand";
import {
  type ListEngagementInvitationsCommandInput,
  type ListEngagementInvitationsCommandOutput,
  ListEngagementInvitationsCommand,
} from "./commands/ListEngagementInvitationsCommand";
import {
  type ListEngagementMembersCommandInput,
  type ListEngagementMembersCommandOutput,
  ListEngagementMembersCommand,
} from "./commands/ListEngagementMembersCommand";
import {
  type ListEngagementResourceAssociationsCommandInput,
  type ListEngagementResourceAssociationsCommandOutput,
  ListEngagementResourceAssociationsCommand,
} from "./commands/ListEngagementResourceAssociationsCommand";
import {
  type ListEngagementsCommandInput,
  type ListEngagementsCommandOutput,
  ListEngagementsCommand,
} from "./commands/ListEngagementsCommand";
import {
  type ListOpportunitiesCommandInput,
  type ListOpportunitiesCommandOutput,
  ListOpportunitiesCommand,
} from "./commands/ListOpportunitiesCommand";
import {
  type ListOpportunityBulkJobResultsCommandInput,
  type ListOpportunityBulkJobResultsCommandOutput,
  ListOpportunityBulkJobResultsCommand,
} from "./commands/ListOpportunityBulkJobResultsCommand";
import {
  type ListOpportunityBulkJobsCommandInput,
  type ListOpportunityBulkJobsCommandOutput,
  ListOpportunityBulkJobsCommand,
} from "./commands/ListOpportunityBulkJobsCommand";
import {
  type ListOpportunityFromEngagementTasksCommandInput,
  type ListOpportunityFromEngagementTasksCommandOutput,
  ListOpportunityFromEngagementTasksCommand,
} from "./commands/ListOpportunityFromEngagementTasksCommand";
import {
  type ListProspectingFromEngagementTasksCommandInput,
  type ListProspectingFromEngagementTasksCommandOutput,
  ListProspectingFromEngagementTasksCommand,
} from "./commands/ListProspectingFromEngagementTasksCommand";
import {
  type ListResourceSnapshotJobsCommandInput,
  type ListResourceSnapshotJobsCommandOutput,
  ListResourceSnapshotJobsCommand,
} from "./commands/ListResourceSnapshotJobsCommand";
import {
  type ListResourceSnapshotsCommandInput,
  type ListResourceSnapshotsCommandOutput,
  ListResourceSnapshotsCommand,
} from "./commands/ListResourceSnapshotsCommand";
import {
  type ListSolutionsCommandInput,
  type ListSolutionsCommandOutput,
  ListSolutionsCommand,
} from "./commands/ListSolutionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutSellingSystemSettingsCommandInput,
  type PutSellingSystemSettingsCommandOutput,
  PutSellingSystemSettingsCommand,
} from "./commands/PutSellingSystemSettingsCommand";
import {
  type RejectEngagementInvitationCommandInput,
  type RejectEngagementInvitationCommandOutput,
  RejectEngagementInvitationCommand,
} from "./commands/RejectEngagementInvitationCommand";
import {
  type SearchCustomerAccountsCommandInput,
  type SearchCustomerAccountsCommandOutput,
  SearchCustomerAccountsCommand,
} from "./commands/SearchCustomerAccountsCommand";
import {
  type SearchEngagementsCommandInput,
  type SearchEngagementsCommandOutput,
  SearchEngagementsCommand,
} from "./commands/SearchEngagementsCommand";
import {
  type SearchOpportunitiesCommandInput,
  type SearchOpportunitiesCommandOutput,
  SearchOpportunitiesCommand,
} from "./commands/SearchOpportunitiesCommand";
import {
  type StartCustomerAccountBulkJobCommandInput,
  type StartCustomerAccountBulkJobCommandOutput,
  StartCustomerAccountBulkJobCommand,
} from "./commands/StartCustomerAccountBulkJobCommand";
import {
  type StartEngagementByAcceptingInvitationTaskCommandInput,
  type StartEngagementByAcceptingInvitationTaskCommandOutput,
  StartEngagementByAcceptingInvitationTaskCommand,
} from "./commands/StartEngagementByAcceptingInvitationTaskCommand";
import {
  type StartEngagementFromOpportunityTaskCommandInput,
  type StartEngagementFromOpportunityTaskCommandOutput,
  StartEngagementFromOpportunityTaskCommand,
} from "./commands/StartEngagementFromOpportunityTaskCommand";
import {
  type StartOpportunityBulkJobCommandInput,
  type StartOpportunityBulkJobCommandOutput,
  StartOpportunityBulkJobCommand,
} from "./commands/StartOpportunityBulkJobCommand";
import {
  type StartOpportunityFromEngagementTaskCommandInput,
  type StartOpportunityFromEngagementTaskCommandOutput,
  StartOpportunityFromEngagementTaskCommand,
} from "./commands/StartOpportunityFromEngagementTaskCommand";
import {
  type StartProspectingFromEngagementTaskCommandInput,
  type StartProspectingFromEngagementTaskCommandOutput,
  StartProspectingFromEngagementTaskCommand,
} from "./commands/StartProspectingFromEngagementTaskCommand";
import {
  type StartResourceSnapshotJobCommandInput,
  type StartResourceSnapshotJobCommandOutput,
  StartResourceSnapshotJobCommand,
} from "./commands/StartResourceSnapshotJobCommand";
import {
  type StopResourceSnapshotJobCommandInput,
  type StopResourceSnapshotJobCommandOutput,
  StopResourceSnapshotJobCommand,
} from "./commands/StopResourceSnapshotJobCommand";
import {
  type SubmitOpportunityCommandInput,
  type SubmitOpportunityCommandOutput,
  SubmitOpportunityCommand,
} from "./commands/SubmitOpportunityCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateCustomerAccountCommandInput,
  type UpdateCustomerAccountCommandOutput,
  UpdateCustomerAccountCommand,
} from "./commands/UpdateCustomerAccountCommand";
import {
  type UpdateEngagementContextCommandInput,
  type UpdateEngagementContextCommandOutput,
  UpdateEngagementContextCommand,
} from "./commands/UpdateEngagementContextCommand";
import {
  type UpdateOpportunityCommandInput,
  type UpdateOpportunityCommandOutput,
  UpdateOpportunityCommand,
} from "./commands/UpdateOpportunityCommand";
import { paginateListCustomerAccountBulkJobResults } from "./pagination/ListCustomerAccountBulkJobResultsPaginator";
import { paginateListCustomerAccountBulkJobs } from "./pagination/ListCustomerAccountBulkJobsPaginator";
import {
  paginateListEngagementByAcceptingInvitationTasks,
} from "./pagination/ListEngagementByAcceptingInvitationTasksPaginator";
import { paginateListEngagementFromOpportunityTasks } from "./pagination/ListEngagementFromOpportunityTasksPaginator";
import { paginateListEngagementGroups } from "./pagination/ListEngagementGroupsPaginator";
import { paginateListEngagementInvitations } from "./pagination/ListEngagementInvitationsPaginator";
import { paginateListEngagementMembers } from "./pagination/ListEngagementMembersPaginator";
import { paginateListEngagementResourceAssociations } from "./pagination/ListEngagementResourceAssociationsPaginator";
import { paginateListEngagements } from "./pagination/ListEngagementsPaginator";
import { paginateListOpportunities } from "./pagination/ListOpportunitiesPaginator";
import { paginateListOpportunityBulkJobResults } from "./pagination/ListOpportunityBulkJobResultsPaginator";
import { paginateListOpportunityBulkJobs } from "./pagination/ListOpportunityBulkJobsPaginator";
import { paginateListOpportunityFromEngagementTasks } from "./pagination/ListOpportunityFromEngagementTasksPaginator";
import { paginateListProspectingFromEngagementTasks } from "./pagination/ListProspectingFromEngagementTasksPaginator";
import { paginateListResourceSnapshotJobs } from "./pagination/ListResourceSnapshotJobsPaginator";
import { paginateListResourceSnapshots } from "./pagination/ListResourceSnapshotsPaginator";
import { paginateListSolutions } from "./pagination/ListSolutionsPaginator";
import { paginateSearchCustomerAccounts } from "./pagination/SearchCustomerAccountsPaginator";
import { paginateSearchEngagements } from "./pagination/SearchEngagementsPaginator";
import { paginateSearchOpportunities } from "./pagination/SearchOpportunitiesPaginator";
import { PartnerCentralSellingClient } from "./PartnerCentralSellingClient";

const commands = {
  AcceptEngagementInvitationCommand,
  AssignOpportunityCommand,
  AssociateOpportunityCommand,
  CreateCustomerAccountCommand,
  CreateEngagementCommand,
  CreateEngagementContextCommand,
  CreateEngagementInvitationCommand,
  CreateOpportunityCommand,
  CreateResourceSnapshotCommand,
  CreateResourceSnapshotJobCommand,
  DeleteCustomerAccountCommand,
  DeleteResourceSnapshotJobCommand,
  DisassociateOpportunityCommand,
  GetAwsOpportunitySummaryCommand,
  GetCustomerAccountCommand,
  GetCustomerAccountBulkJobCommand,
  GetCustomerAccountBulkJobReportUrlCommand,
  GetCustomerAccountStatisticsCommand,
  GetEngagementCommand,
  GetEngagementInvitationCommand,
  GetOpportunityCommand,
  GetOpportunityBulkJobReportUrlCommand,
  GetProspectingFromEngagementTaskCommand,
  GetResourceSnapshotCommand,
  GetResourceSnapshotJobCommand,
  GetSellingSystemSettingsCommand,
  ListCustomerAccountBulkJobResultsCommand,
  ListCustomerAccountBulkJobsCommand,
  ListEngagementByAcceptingInvitationTasksCommand,
  ListEngagementFromOpportunityTasksCommand,
  ListEngagementGroupsCommand,
  ListEngagementInvitationsCommand,
  ListEngagementMembersCommand,
  ListEngagementResourceAssociationsCommand,
  ListEngagementsCommand,
  ListOpportunitiesCommand,
  ListOpportunityBulkJobResultsCommand,
  ListOpportunityBulkJobsCommand,
  ListOpportunityFromEngagementTasksCommand,
  ListProspectingFromEngagementTasksCommand,
  ListResourceSnapshotJobsCommand,
  ListResourceSnapshotsCommand,
  ListSolutionsCommand,
  ListTagsForResourceCommand,
  PutSellingSystemSettingsCommand,
  RejectEngagementInvitationCommand,
  SearchCustomerAccountsCommand,
  SearchEngagementsCommand,
  SearchOpportunitiesCommand,
  StartCustomerAccountBulkJobCommand,
  StartEngagementByAcceptingInvitationTaskCommand,
  StartEngagementFromOpportunityTaskCommand,
  StartOpportunityBulkJobCommand,
  StartOpportunityFromEngagementTaskCommand,
  StartProspectingFromEngagementTaskCommand,
  StartResourceSnapshotJobCommand,
  StopResourceSnapshotJobCommand,
  SubmitOpportunityCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCustomerAccountCommand,
  UpdateEngagementContextCommand,
  UpdateOpportunityCommand,
};
const paginators = {
  paginateListCustomerAccountBulkJobResults,
  paginateListCustomerAccountBulkJobs,
  paginateListEngagementByAcceptingInvitationTasks,
  paginateListEngagementFromOpportunityTasks,
  paginateListEngagementGroups,
  paginateListEngagementInvitations,
  paginateListEngagementMembers,
  paginateListEngagementResourceAssociations,
  paginateListEngagements,
  paginateListOpportunities,
  paginateListOpportunityBulkJobResults,
  paginateListOpportunityBulkJobs,
  paginateListOpportunityFromEngagementTasks,
  paginateListProspectingFromEngagementTasks,
  paginateListResourceSnapshotJobs,
  paginateListResourceSnapshots,
  paginateListSolutions,
  paginateSearchCustomerAccounts,
  paginateSearchEngagements,
  paginateSearchOpportunities,
};

/**
 * @public
 */
export interface PartnerCentralSellingRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface PartnerCentralSelling {
  /**
   * @see {@link AcceptEngagementInvitationCommand}
   */
  acceptEngagementInvitation(
    args: AcceptEngagementInvitationCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<AcceptEngagementInvitationCommandOutput>;
  acceptEngagementInvitation(
    args: AcceptEngagementInvitationCommandInput,
    cb: (err: any, data?: AcceptEngagementInvitationCommandOutput) => void
  ): void;
  acceptEngagementInvitation(
    args: AcceptEngagementInvitationCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: AcceptEngagementInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link AssignOpportunityCommand}
   */
  assignOpportunity(
    args: AssignOpportunityCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<AssignOpportunityCommandOutput>;
  assignOpportunity(
    args: AssignOpportunityCommandInput,
    cb: (err: any, data?: AssignOpportunityCommandOutput) => void
  ): void;
  assignOpportunity(
    args: AssignOpportunityCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: AssignOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateOpportunityCommand}
   */
  associateOpportunity(
    args: AssociateOpportunityCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<AssociateOpportunityCommandOutput>;
  associateOpportunity(
    args: AssociateOpportunityCommandInput,
    cb: (err: any, data?: AssociateOpportunityCommandOutput) => void
  ): void;
  associateOpportunity(
    args: AssociateOpportunityCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: AssociateOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomerAccountCommand}
   */
  createCustomerAccount(
    args: CreateCustomerAccountCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<CreateCustomerAccountCommandOutput>;
  createCustomerAccount(
    args: CreateCustomerAccountCommandInput,
    cb: (err: any, data?: CreateCustomerAccountCommandOutput) => void
  ): void;
  createCustomerAccount(
    args: CreateCustomerAccountCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: CreateCustomerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEngagementCommand}
   */
  createEngagement(
    args: CreateEngagementCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<CreateEngagementCommandOutput>;
  createEngagement(
    args: CreateEngagementCommandInput,
    cb: (err: any, data?: CreateEngagementCommandOutput) => void
  ): void;
  createEngagement(
    args: CreateEngagementCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: CreateEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEngagementContextCommand}
   */
  createEngagementContext(
    args: CreateEngagementContextCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<CreateEngagementContextCommandOutput>;
  createEngagementContext(
    args: CreateEngagementContextCommandInput,
    cb: (err: any, data?: CreateEngagementContextCommandOutput) => void
  ): void;
  createEngagementContext(
    args: CreateEngagementContextCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: CreateEngagementContextCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEngagementInvitationCommand}
   */
  createEngagementInvitation(
    args: CreateEngagementInvitationCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<CreateEngagementInvitationCommandOutput>;
  createEngagementInvitation(
    args: CreateEngagementInvitationCommandInput,
    cb: (err: any, data?: CreateEngagementInvitationCommandOutput) => void
  ): void;
  createEngagementInvitation(
    args: CreateEngagementInvitationCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: CreateEngagementInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOpportunityCommand}
   */
  createOpportunity(
    args: CreateOpportunityCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<CreateOpportunityCommandOutput>;
  createOpportunity(
    args: CreateOpportunityCommandInput,
    cb: (err: any, data?: CreateOpportunityCommandOutput) => void
  ): void;
  createOpportunity(
    args: CreateOpportunityCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: CreateOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceSnapshotCommand}
   */
  createResourceSnapshot(
    args: CreateResourceSnapshotCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<CreateResourceSnapshotCommandOutput>;
  createResourceSnapshot(
    args: CreateResourceSnapshotCommandInput,
    cb: (err: any, data?: CreateResourceSnapshotCommandOutput) => void
  ): void;
  createResourceSnapshot(
    args: CreateResourceSnapshotCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: CreateResourceSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceSnapshotJobCommand}
   */
  createResourceSnapshotJob(
    args: CreateResourceSnapshotJobCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<CreateResourceSnapshotJobCommandOutput>;
  createResourceSnapshotJob(
    args: CreateResourceSnapshotJobCommandInput,
    cb: (err: any, data?: CreateResourceSnapshotJobCommandOutput) => void
  ): void;
  createResourceSnapshotJob(
    args: CreateResourceSnapshotJobCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: CreateResourceSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomerAccountCommand}
   */
  deleteCustomerAccount(
    args: DeleteCustomerAccountCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<DeleteCustomerAccountCommandOutput>;
  deleteCustomerAccount(
    args: DeleteCustomerAccountCommandInput,
    cb: (err: any, data?: DeleteCustomerAccountCommandOutput) => void
  ): void;
  deleteCustomerAccount(
    args: DeleteCustomerAccountCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: DeleteCustomerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceSnapshotJobCommand}
   */
  deleteResourceSnapshotJob(
    args: DeleteResourceSnapshotJobCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<DeleteResourceSnapshotJobCommandOutput>;
  deleteResourceSnapshotJob(
    args: DeleteResourceSnapshotJobCommandInput,
    cb: (err: any, data?: DeleteResourceSnapshotJobCommandOutput) => void
  ): void;
  deleteResourceSnapshotJob(
    args: DeleteResourceSnapshotJobCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: DeleteResourceSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateOpportunityCommand}
   */
  disassociateOpportunity(
    args: DisassociateOpportunityCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<DisassociateOpportunityCommandOutput>;
  disassociateOpportunity(
    args: DisassociateOpportunityCommandInput,
    cb: (err: any, data?: DisassociateOpportunityCommandOutput) => void
  ): void;
  disassociateOpportunity(
    args: DisassociateOpportunityCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: DisassociateOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAwsOpportunitySummaryCommand}
   */
  getAwsOpportunitySummary(
    args: GetAwsOpportunitySummaryCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetAwsOpportunitySummaryCommandOutput>;
  getAwsOpportunitySummary(
    args: GetAwsOpportunitySummaryCommandInput,
    cb: (err: any, data?: GetAwsOpportunitySummaryCommandOutput) => void
  ): void;
  getAwsOpportunitySummary(
    args: GetAwsOpportunitySummaryCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetAwsOpportunitySummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomerAccountCommand}
   */
  getCustomerAccount(
    args: GetCustomerAccountCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetCustomerAccountCommandOutput>;
  getCustomerAccount(
    args: GetCustomerAccountCommandInput,
    cb: (err: any, data?: GetCustomerAccountCommandOutput) => void
  ): void;
  getCustomerAccount(
    args: GetCustomerAccountCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetCustomerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomerAccountBulkJobCommand}
   */
  getCustomerAccountBulkJob(
    args: GetCustomerAccountBulkJobCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetCustomerAccountBulkJobCommandOutput>;
  getCustomerAccountBulkJob(
    args: GetCustomerAccountBulkJobCommandInput,
    cb: (err: any, data?: GetCustomerAccountBulkJobCommandOutput) => void
  ): void;
  getCustomerAccountBulkJob(
    args: GetCustomerAccountBulkJobCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetCustomerAccountBulkJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomerAccountBulkJobReportUrlCommand}
   */
  getCustomerAccountBulkJobReportUrl(
    args: GetCustomerAccountBulkJobReportUrlCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetCustomerAccountBulkJobReportUrlCommandOutput>;
  getCustomerAccountBulkJobReportUrl(
    args: GetCustomerAccountBulkJobReportUrlCommandInput,
    cb: (err: any, data?: GetCustomerAccountBulkJobReportUrlCommandOutput) => void
  ): void;
  getCustomerAccountBulkJobReportUrl(
    args: GetCustomerAccountBulkJobReportUrlCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetCustomerAccountBulkJobReportUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomerAccountStatisticsCommand}
   */
  getCustomerAccountStatistics(
    args: GetCustomerAccountStatisticsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetCustomerAccountStatisticsCommandOutput>;
  getCustomerAccountStatistics(
    args: GetCustomerAccountStatisticsCommandInput,
    cb: (err: any, data?: GetCustomerAccountStatisticsCommandOutput) => void
  ): void;
  getCustomerAccountStatistics(
    args: GetCustomerAccountStatisticsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetCustomerAccountStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEngagementCommand}
   */
  getEngagement(
    args: GetEngagementCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetEngagementCommandOutput>;
  getEngagement(
    args: GetEngagementCommandInput,
    cb: (err: any, data?: GetEngagementCommandOutput) => void
  ): void;
  getEngagement(
    args: GetEngagementCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEngagementInvitationCommand}
   */
  getEngagementInvitation(
    args: GetEngagementInvitationCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetEngagementInvitationCommandOutput>;
  getEngagementInvitation(
    args: GetEngagementInvitationCommandInput,
    cb: (err: any, data?: GetEngagementInvitationCommandOutput) => void
  ): void;
  getEngagementInvitation(
    args: GetEngagementInvitationCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetEngagementInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOpportunityCommand}
   */
  getOpportunity(
    args: GetOpportunityCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetOpportunityCommandOutput>;
  getOpportunity(
    args: GetOpportunityCommandInput,
    cb: (err: any, data?: GetOpportunityCommandOutput) => void
  ): void;
  getOpportunity(
    args: GetOpportunityCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOpportunityBulkJobReportUrlCommand}
   */
  getOpportunityBulkJobReportUrl(
    args: GetOpportunityBulkJobReportUrlCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetOpportunityBulkJobReportUrlCommandOutput>;
  getOpportunityBulkJobReportUrl(
    args: GetOpportunityBulkJobReportUrlCommandInput,
    cb: (err: any, data?: GetOpportunityBulkJobReportUrlCommandOutput) => void
  ): void;
  getOpportunityBulkJobReportUrl(
    args: GetOpportunityBulkJobReportUrlCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetOpportunityBulkJobReportUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProspectingFromEngagementTaskCommand}
   */
  getProspectingFromEngagementTask(
    args: GetProspectingFromEngagementTaskCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetProspectingFromEngagementTaskCommandOutput>;
  getProspectingFromEngagementTask(
    args: GetProspectingFromEngagementTaskCommandInput,
    cb: (err: any, data?: GetProspectingFromEngagementTaskCommandOutput) => void
  ): void;
  getProspectingFromEngagementTask(
    args: GetProspectingFromEngagementTaskCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetProspectingFromEngagementTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceSnapshotCommand}
   */
  getResourceSnapshot(
    args: GetResourceSnapshotCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetResourceSnapshotCommandOutput>;
  getResourceSnapshot(
    args: GetResourceSnapshotCommandInput,
    cb: (err: any, data?: GetResourceSnapshotCommandOutput) => void
  ): void;
  getResourceSnapshot(
    args: GetResourceSnapshotCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetResourceSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceSnapshotJobCommand}
   */
  getResourceSnapshotJob(
    args: GetResourceSnapshotJobCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetResourceSnapshotJobCommandOutput>;
  getResourceSnapshotJob(
    args: GetResourceSnapshotJobCommandInput,
    cb: (err: any, data?: GetResourceSnapshotJobCommandOutput) => void
  ): void;
  getResourceSnapshotJob(
    args: GetResourceSnapshotJobCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetResourceSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSellingSystemSettingsCommand}
   */
  getSellingSystemSettings(
    args: GetSellingSystemSettingsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<GetSellingSystemSettingsCommandOutput>;
  getSellingSystemSettings(
    args: GetSellingSystemSettingsCommandInput,
    cb: (err: any, data?: GetSellingSystemSettingsCommandOutput) => void
  ): void;
  getSellingSystemSettings(
    args: GetSellingSystemSettingsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: GetSellingSystemSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomerAccountBulkJobResultsCommand}
   */
  listCustomerAccountBulkJobResults(
    args: ListCustomerAccountBulkJobResultsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListCustomerAccountBulkJobResultsCommandOutput>;
  listCustomerAccountBulkJobResults(
    args: ListCustomerAccountBulkJobResultsCommandInput,
    cb: (err: any, data?: ListCustomerAccountBulkJobResultsCommandOutput) => void
  ): void;
  listCustomerAccountBulkJobResults(
    args: ListCustomerAccountBulkJobResultsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListCustomerAccountBulkJobResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomerAccountBulkJobsCommand}
   */
  listCustomerAccountBulkJobs(
    args: ListCustomerAccountBulkJobsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListCustomerAccountBulkJobsCommandOutput>;
  listCustomerAccountBulkJobs(
    args: ListCustomerAccountBulkJobsCommandInput,
    cb: (err: any, data?: ListCustomerAccountBulkJobsCommandOutput) => void
  ): void;
  listCustomerAccountBulkJobs(
    args: ListCustomerAccountBulkJobsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListCustomerAccountBulkJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementByAcceptingInvitationTasksCommand}
   */
  listEngagementByAcceptingInvitationTasks(
    args: ListEngagementByAcceptingInvitationTasksCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListEngagementByAcceptingInvitationTasksCommandOutput>;
  listEngagementByAcceptingInvitationTasks(
    args: ListEngagementByAcceptingInvitationTasksCommandInput,
    cb: (err: any, data?: ListEngagementByAcceptingInvitationTasksCommandOutput) => void
  ): void;
  listEngagementByAcceptingInvitationTasks(
    args: ListEngagementByAcceptingInvitationTasksCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListEngagementByAcceptingInvitationTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementFromOpportunityTasksCommand}
   */
  listEngagementFromOpportunityTasks(
    args: ListEngagementFromOpportunityTasksCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListEngagementFromOpportunityTasksCommandOutput>;
  listEngagementFromOpportunityTasks(
    args: ListEngagementFromOpportunityTasksCommandInput,
    cb: (err: any, data?: ListEngagementFromOpportunityTasksCommandOutput) => void
  ): void;
  listEngagementFromOpportunityTasks(
    args: ListEngagementFromOpportunityTasksCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListEngagementFromOpportunityTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementGroupsCommand}
   */
  listEngagementGroups(
    args: ListEngagementGroupsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListEngagementGroupsCommandOutput>;
  listEngagementGroups(
    args: ListEngagementGroupsCommandInput,
    cb: (err: any, data?: ListEngagementGroupsCommandOutput) => void
  ): void;
  listEngagementGroups(
    args: ListEngagementGroupsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListEngagementGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementInvitationsCommand}
   */
  listEngagementInvitations(
    args: ListEngagementInvitationsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListEngagementInvitationsCommandOutput>;
  listEngagementInvitations(
    args: ListEngagementInvitationsCommandInput,
    cb: (err: any, data?: ListEngagementInvitationsCommandOutput) => void
  ): void;
  listEngagementInvitations(
    args: ListEngagementInvitationsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListEngagementInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementMembersCommand}
   */
  listEngagementMembers(
    args: ListEngagementMembersCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListEngagementMembersCommandOutput>;
  listEngagementMembers(
    args: ListEngagementMembersCommandInput,
    cb: (err: any, data?: ListEngagementMembersCommandOutput) => void
  ): void;
  listEngagementMembers(
    args: ListEngagementMembersCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListEngagementMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementResourceAssociationsCommand}
   */
  listEngagementResourceAssociations(
    args: ListEngagementResourceAssociationsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListEngagementResourceAssociationsCommandOutput>;
  listEngagementResourceAssociations(
    args: ListEngagementResourceAssociationsCommandInput,
    cb: (err: any, data?: ListEngagementResourceAssociationsCommandOutput) => void
  ): void;
  listEngagementResourceAssociations(
    args: ListEngagementResourceAssociationsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListEngagementResourceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementsCommand}
   */
  listEngagements(
    args: ListEngagementsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListEngagementsCommandOutput>;
  listEngagements(
    args: ListEngagementsCommandInput,
    cb: (err: any, data?: ListEngagementsCommandOutput) => void
  ): void;
  listEngagements(
    args: ListEngagementsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListEngagementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpportunitiesCommand}
   */
  listOpportunities(
    args: ListOpportunitiesCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListOpportunitiesCommandOutput>;
  listOpportunities(
    args: ListOpportunitiesCommandInput,
    cb: (err: any, data?: ListOpportunitiesCommandOutput) => void
  ): void;
  listOpportunities(
    args: ListOpportunitiesCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListOpportunitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpportunityBulkJobResultsCommand}
   */
  listOpportunityBulkJobResults(
    args: ListOpportunityBulkJobResultsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListOpportunityBulkJobResultsCommandOutput>;
  listOpportunityBulkJobResults(
    args: ListOpportunityBulkJobResultsCommandInput,
    cb: (err: any, data?: ListOpportunityBulkJobResultsCommandOutput) => void
  ): void;
  listOpportunityBulkJobResults(
    args: ListOpportunityBulkJobResultsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListOpportunityBulkJobResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpportunityBulkJobsCommand}
   */
  listOpportunityBulkJobs(
    args: ListOpportunityBulkJobsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListOpportunityBulkJobsCommandOutput>;
  listOpportunityBulkJobs(
    args: ListOpportunityBulkJobsCommandInput,
    cb: (err: any, data?: ListOpportunityBulkJobsCommandOutput) => void
  ): void;
  listOpportunityBulkJobs(
    args: ListOpportunityBulkJobsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListOpportunityBulkJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpportunityFromEngagementTasksCommand}
   */
  listOpportunityFromEngagementTasks(
    args: ListOpportunityFromEngagementTasksCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListOpportunityFromEngagementTasksCommandOutput>;
  listOpportunityFromEngagementTasks(
    args: ListOpportunityFromEngagementTasksCommandInput,
    cb: (err: any, data?: ListOpportunityFromEngagementTasksCommandOutput) => void
  ): void;
  listOpportunityFromEngagementTasks(
    args: ListOpportunityFromEngagementTasksCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListOpportunityFromEngagementTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProspectingFromEngagementTasksCommand}
   */
  listProspectingFromEngagementTasks(
    args: ListProspectingFromEngagementTasksCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListProspectingFromEngagementTasksCommandOutput>;
  listProspectingFromEngagementTasks(
    args: ListProspectingFromEngagementTasksCommandInput,
    cb: (err: any, data?: ListProspectingFromEngagementTasksCommandOutput) => void
  ): void;
  listProspectingFromEngagementTasks(
    args: ListProspectingFromEngagementTasksCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListProspectingFromEngagementTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceSnapshotJobsCommand}
   */
  listResourceSnapshotJobs(
    args: ListResourceSnapshotJobsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListResourceSnapshotJobsCommandOutput>;
  listResourceSnapshotJobs(
    args: ListResourceSnapshotJobsCommandInput,
    cb: (err: any, data?: ListResourceSnapshotJobsCommandOutput) => void
  ): void;
  listResourceSnapshotJobs(
    args: ListResourceSnapshotJobsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListResourceSnapshotJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceSnapshotsCommand}
   */
  listResourceSnapshots(
    args: ListResourceSnapshotsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListResourceSnapshotsCommandOutput>;
  listResourceSnapshots(
    args: ListResourceSnapshotsCommandInput,
    cb: (err: any, data?: ListResourceSnapshotsCommandOutput) => void
  ): void;
  listResourceSnapshots(
    args: ListResourceSnapshotsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListResourceSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolutionsCommand}
   */
  listSolutions(
    args: ListSolutionsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListSolutionsCommandOutput>;
  listSolutions(
    args: ListSolutionsCommandInput,
    cb: (err: any, data?: ListSolutionsCommandOutput) => void
  ): void;
  listSolutions(
    args: ListSolutionsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListSolutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSellingSystemSettingsCommand}
   */
  putSellingSystemSettings(
    args: PutSellingSystemSettingsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<PutSellingSystemSettingsCommandOutput>;
  putSellingSystemSettings(
    args: PutSellingSystemSettingsCommandInput,
    cb: (err: any, data?: PutSellingSystemSettingsCommandOutput) => void
  ): void;
  putSellingSystemSettings(
    args: PutSellingSystemSettingsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: PutSellingSystemSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectEngagementInvitationCommand}
   */
  rejectEngagementInvitation(
    args: RejectEngagementInvitationCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<RejectEngagementInvitationCommandOutput>;
  rejectEngagementInvitation(
    args: RejectEngagementInvitationCommandInput,
    cb: (err: any, data?: RejectEngagementInvitationCommandOutput) => void
  ): void;
  rejectEngagementInvitation(
    args: RejectEngagementInvitationCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: RejectEngagementInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchCustomerAccountsCommand}
   */
  searchCustomerAccounts(
    args: SearchCustomerAccountsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<SearchCustomerAccountsCommandOutput>;
  searchCustomerAccounts(
    args: SearchCustomerAccountsCommandInput,
    cb: (err: any, data?: SearchCustomerAccountsCommandOutput) => void
  ): void;
  searchCustomerAccounts(
    args: SearchCustomerAccountsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: SearchCustomerAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchEngagementsCommand}
   */
  searchEngagements(
    args: SearchEngagementsCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<SearchEngagementsCommandOutput>;
  searchEngagements(
    args: SearchEngagementsCommandInput,
    cb: (err: any, data?: SearchEngagementsCommandOutput) => void
  ): void;
  searchEngagements(
    args: SearchEngagementsCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: SearchEngagementsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchOpportunitiesCommand}
   */
  searchOpportunities(
    args: SearchOpportunitiesCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<SearchOpportunitiesCommandOutput>;
  searchOpportunities(
    args: SearchOpportunitiesCommandInput,
    cb: (err: any, data?: SearchOpportunitiesCommandOutput) => void
  ): void;
  searchOpportunities(
    args: SearchOpportunitiesCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: SearchOpportunitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCustomerAccountBulkJobCommand}
   */
  startCustomerAccountBulkJob(
    args: StartCustomerAccountBulkJobCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<StartCustomerAccountBulkJobCommandOutput>;
  startCustomerAccountBulkJob(
    args: StartCustomerAccountBulkJobCommandInput,
    cb: (err: any, data?: StartCustomerAccountBulkJobCommandOutput) => void
  ): void;
  startCustomerAccountBulkJob(
    args: StartCustomerAccountBulkJobCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: StartCustomerAccountBulkJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEngagementByAcceptingInvitationTaskCommand}
   */
  startEngagementByAcceptingInvitationTask(
    args: StartEngagementByAcceptingInvitationTaskCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<StartEngagementByAcceptingInvitationTaskCommandOutput>;
  startEngagementByAcceptingInvitationTask(
    args: StartEngagementByAcceptingInvitationTaskCommandInput,
    cb: (err: any, data?: StartEngagementByAcceptingInvitationTaskCommandOutput) => void
  ): void;
  startEngagementByAcceptingInvitationTask(
    args: StartEngagementByAcceptingInvitationTaskCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: StartEngagementByAcceptingInvitationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEngagementFromOpportunityTaskCommand}
   */
  startEngagementFromOpportunityTask(
    args: StartEngagementFromOpportunityTaskCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<StartEngagementFromOpportunityTaskCommandOutput>;
  startEngagementFromOpportunityTask(
    args: StartEngagementFromOpportunityTaskCommandInput,
    cb: (err: any, data?: StartEngagementFromOpportunityTaskCommandOutput) => void
  ): void;
  startEngagementFromOpportunityTask(
    args: StartEngagementFromOpportunityTaskCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: StartEngagementFromOpportunityTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartOpportunityBulkJobCommand}
   */
  startOpportunityBulkJob(
    args: StartOpportunityBulkJobCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<StartOpportunityBulkJobCommandOutput>;
  startOpportunityBulkJob(
    args: StartOpportunityBulkJobCommandInput,
    cb: (err: any, data?: StartOpportunityBulkJobCommandOutput) => void
  ): void;
  startOpportunityBulkJob(
    args: StartOpportunityBulkJobCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: StartOpportunityBulkJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartOpportunityFromEngagementTaskCommand}
   */
  startOpportunityFromEngagementTask(
    args: StartOpportunityFromEngagementTaskCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<StartOpportunityFromEngagementTaskCommandOutput>;
  startOpportunityFromEngagementTask(
    args: StartOpportunityFromEngagementTaskCommandInput,
    cb: (err: any, data?: StartOpportunityFromEngagementTaskCommandOutput) => void
  ): void;
  startOpportunityFromEngagementTask(
    args: StartOpportunityFromEngagementTaskCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: StartOpportunityFromEngagementTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartProspectingFromEngagementTaskCommand}
   */
  startProspectingFromEngagementTask(
    args: StartProspectingFromEngagementTaskCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<StartProspectingFromEngagementTaskCommandOutput>;
  startProspectingFromEngagementTask(
    args: StartProspectingFromEngagementTaskCommandInput,
    cb: (err: any, data?: StartProspectingFromEngagementTaskCommandOutput) => void
  ): void;
  startProspectingFromEngagementTask(
    args: StartProspectingFromEngagementTaskCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: StartProspectingFromEngagementTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartResourceSnapshotJobCommand}
   */
  startResourceSnapshotJob(
    args: StartResourceSnapshotJobCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<StartResourceSnapshotJobCommandOutput>;
  startResourceSnapshotJob(
    args: StartResourceSnapshotJobCommandInput,
    cb: (err: any, data?: StartResourceSnapshotJobCommandOutput) => void
  ): void;
  startResourceSnapshotJob(
    args: StartResourceSnapshotJobCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: StartResourceSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopResourceSnapshotJobCommand}
   */
  stopResourceSnapshotJob(
    args: StopResourceSnapshotJobCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<StopResourceSnapshotJobCommandOutput>;
  stopResourceSnapshotJob(
    args: StopResourceSnapshotJobCommandInput,
    cb: (err: any, data?: StopResourceSnapshotJobCommandOutput) => void
  ): void;
  stopResourceSnapshotJob(
    args: StopResourceSnapshotJobCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: StopResourceSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitOpportunityCommand}
   */
  submitOpportunity(
    args: SubmitOpportunityCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<SubmitOpportunityCommandOutput>;
  submitOpportunity(
    args: SubmitOpportunityCommandInput,
    cb: (err: any, data?: SubmitOpportunityCommandOutput) => void
  ): void;
  submitOpportunity(
    args: SubmitOpportunityCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: SubmitOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomerAccountCommand}
   */
  updateCustomerAccount(
    args: UpdateCustomerAccountCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<UpdateCustomerAccountCommandOutput>;
  updateCustomerAccount(
    args: UpdateCustomerAccountCommandInput,
    cb: (err: any, data?: UpdateCustomerAccountCommandOutput) => void
  ): void;
  updateCustomerAccount(
    args: UpdateCustomerAccountCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: UpdateCustomerAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEngagementContextCommand}
   */
  updateEngagementContext(
    args: UpdateEngagementContextCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<UpdateEngagementContextCommandOutput>;
  updateEngagementContext(
    args: UpdateEngagementContextCommandInput,
    cb: (err: any, data?: UpdateEngagementContextCommandOutput) => void
  ): void;
  updateEngagementContext(
    args: UpdateEngagementContextCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: UpdateEngagementContextCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOpportunityCommand}
   */
  updateOpportunity(
    args: UpdateOpportunityCommandInput,
    options?: PartnerCentralSellingRequestOptions
  ): Promise<UpdateOpportunityCommandOutput>;
  updateOpportunity(
    args: UpdateOpportunityCommandInput,
    cb: (err: any, data?: UpdateOpportunityCommandOutput) => void
  ): void;
  updateOpportunity(
    args: UpdateOpportunityCommandInput,
    options: PartnerCentralSellingRequestOptions,
    cb: (err: any, data?: UpdateOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomerAccountBulkJobResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCustomerAccountBulkJobResultsCommandOutput}.
   */
  paginateListCustomerAccountBulkJobResults(
    args: ListCustomerAccountBulkJobResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCustomerAccountBulkJobResultsCommandOutput>;

  /**
   * @see {@link ListCustomerAccountBulkJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCustomerAccountBulkJobsCommandOutput}.
   */
  paginateListCustomerAccountBulkJobs(
    args: ListCustomerAccountBulkJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCustomerAccountBulkJobsCommandOutput>;

  /**
   * @see {@link ListEngagementByAcceptingInvitationTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEngagementByAcceptingInvitationTasksCommandOutput}.
   */
  paginateListEngagementByAcceptingInvitationTasks(
    args: ListEngagementByAcceptingInvitationTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEngagementByAcceptingInvitationTasksCommandOutput>;

  /**
   * @see {@link ListEngagementFromOpportunityTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEngagementFromOpportunityTasksCommandOutput}.
   */
  paginateListEngagementFromOpportunityTasks(
    args: ListEngagementFromOpportunityTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEngagementFromOpportunityTasksCommandOutput>;

  /**
   * @see {@link ListEngagementGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEngagementGroupsCommandOutput}.
   */
  paginateListEngagementGroups(
    args: ListEngagementGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEngagementGroupsCommandOutput>;

  /**
   * @see {@link ListEngagementInvitationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEngagementInvitationsCommandOutput}.
   */
  paginateListEngagementInvitations(
    args: ListEngagementInvitationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEngagementInvitationsCommandOutput>;

  /**
   * @see {@link ListEngagementMembersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEngagementMembersCommandOutput}.
   */
  paginateListEngagementMembers(
    args: ListEngagementMembersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEngagementMembersCommandOutput>;

  /**
   * @see {@link ListEngagementResourceAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEngagementResourceAssociationsCommandOutput}.
   */
  paginateListEngagementResourceAssociations(
    args: ListEngagementResourceAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEngagementResourceAssociationsCommandOutput>;

  /**
   * @see {@link ListEngagementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEngagementsCommandOutput}.
   */
  paginateListEngagements(
    args: ListEngagementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEngagementsCommandOutput>;

  /**
   * @see {@link ListOpportunitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOpportunitiesCommandOutput}.
   */
  paginateListOpportunities(
    args: ListOpportunitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOpportunitiesCommandOutput>;

  /**
   * @see {@link ListOpportunityBulkJobResultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOpportunityBulkJobResultsCommandOutput}.
   */
  paginateListOpportunityBulkJobResults(
    args: ListOpportunityBulkJobResultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOpportunityBulkJobResultsCommandOutput>;

  /**
   * @see {@link ListOpportunityBulkJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOpportunityBulkJobsCommandOutput}.
   */
  paginateListOpportunityBulkJobs(
    args: ListOpportunityBulkJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOpportunityBulkJobsCommandOutput>;

  /**
   * @see {@link ListOpportunityFromEngagementTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOpportunityFromEngagementTasksCommandOutput}.
   */
  paginateListOpportunityFromEngagementTasks(
    args: ListOpportunityFromEngagementTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOpportunityFromEngagementTasksCommandOutput>;

  /**
   * @see {@link ListProspectingFromEngagementTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProspectingFromEngagementTasksCommandOutput}.
   */
  paginateListProspectingFromEngagementTasks(
    args: ListProspectingFromEngagementTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProspectingFromEngagementTasksCommandOutput>;

  /**
   * @see {@link ListResourceSnapshotJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceSnapshotJobsCommandOutput}.
   */
  paginateListResourceSnapshotJobs(
    args: ListResourceSnapshotJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceSnapshotJobsCommandOutput>;

  /**
   * @see {@link ListResourceSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListResourceSnapshotsCommandOutput}.
   */
  paginateListResourceSnapshots(
    args: ListResourceSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListResourceSnapshotsCommandOutput>;

  /**
   * @see {@link ListSolutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSolutionsCommandOutput}.
   */
  paginateListSolutions(
    args: ListSolutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSolutionsCommandOutput>;

  /**
   * @see {@link SearchCustomerAccountsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchCustomerAccountsCommandOutput}.
   */
  paginateSearchCustomerAccounts(
    args: SearchCustomerAccountsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchCustomerAccountsCommandOutput>;

  /**
   * @see {@link SearchEngagementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchEngagementsCommandOutput}.
   */
  paginateSearchEngagements(
    args: SearchEngagementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchEngagementsCommandOutput>;

  /**
   * @see {@link SearchOpportunitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchOpportunitiesCommandOutput}.
   */
  paginateSearchOpportunities(
    args: SearchOpportunitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchOpportunitiesCommandOutput>;
}

/**
 * <fullname>Partner Central</fullname> <p>This Amazon Web Services (AWS) Partner Central API reference is designed to help <a href="http://aws.amazon.com/partners/programs/">AWS Partners</a> integrate Customer Relationship Management (CRM) systems with AWS Partner Central. Partners can automate interactions with AWS Partner Central, which helps to ensure effective engagements in joint business activities.</p> <p>The API provides standard AWS API functionality. Access it by either using API <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/API_Operations.html">Actions</a> or by using an AWS SDK that's tailored to your programming language or platform. For more information, see <a href="http://aws.amazon.com/getting-started">Getting Started with AWS</a> and <a href="http://aws.amazon.com/developer/tools/">Tools to Build on AWS</a>.</p> <p class="title"> <b>Features offered by AWS Partner Central API</b> </p> <ol> <li> <p> <b>Opportunity management:</b> Manages coselling opportunities through API actions such as <code>CreateOpportunity</code>, <code>UpdateOpportunity</code>, <code>ListOpportunities</code>, <code>GetOpportunity</code>, and <code>AssignOpportunity</code>.</p> </li> <li> <p> <b>AWS referral management:</b> Manages referrals shared by AWS using actions such as <code>ListEngagementInvitations</code>, <code>GetEngagementInvitation</code>, <code>StartEngagementByAcceptingInvitation</code>, and <code>RejectEngagementInvitation</code>.</p> </li> <li> <p> <b>Entity association:</b> Associates related entities such as <i>AWS Products</i>, <i>Partner Solutions</i>, and <i>AWS Marketplace Private Offers</i> with opportunities using the actions <code>AssociateOpportunity</code>, and <code>DisassociateOpportunity</code>.</p> </li> <li> <p> <b>View AWS opportunity details:</b> Retrieves real-time summaries of AWS opportunities using the <code>GetAWSOpportunitySummary</code> action.</p> </li> <li> <p> <b>List solutions:</b> Provides list APIs for listing partner offers using <code>ListSolutions</code>.</p> </li> <li> <p> <b>Event subscription:</b> Subscribe to real-time opportunity updates through AWS EventBridge by using actions such as <i>Opportunity Created</i>, <i>Opportunity Updated</i>, <i>Engagement Invitation Accepted</i>, <i>Engagement Invitation Rejected</i>, and <i>Engagement Invitation Created</i>.</p> </li> </ol>
 * @public
 */
export class PartnerCentralSelling extends PartnerCentralSellingClient implements PartnerCentralSelling {}
createAggregatedClient(commands, PartnerCentralSelling, { paginators });
