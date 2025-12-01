// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptEngagementInvitationCommand,
  AcceptEngagementInvitationCommandInput,
  AcceptEngagementInvitationCommandOutput,
} from "./commands/AcceptEngagementInvitationCommand";
import {
  AssignOpportunityCommand,
  AssignOpportunityCommandInput,
  AssignOpportunityCommandOutput,
} from "./commands/AssignOpportunityCommand";
import {
  AssociateOpportunityCommand,
  AssociateOpportunityCommandInput,
  AssociateOpportunityCommandOutput,
} from "./commands/AssociateOpportunityCommand";
import {
  CreateEngagementCommand,
  CreateEngagementCommandInput,
  CreateEngagementCommandOutput,
} from "./commands/CreateEngagementCommand";
import {
  CreateEngagementContextCommand,
  CreateEngagementContextCommandInput,
  CreateEngagementContextCommandOutput,
} from "./commands/CreateEngagementContextCommand";
import {
  CreateEngagementInvitationCommand,
  CreateEngagementInvitationCommandInput,
  CreateEngagementInvitationCommandOutput,
} from "./commands/CreateEngagementInvitationCommand";
import {
  CreateOpportunityCommand,
  CreateOpportunityCommandInput,
  CreateOpportunityCommandOutput,
} from "./commands/CreateOpportunityCommand";
import {
  CreateResourceSnapshotCommand,
  CreateResourceSnapshotCommandInput,
  CreateResourceSnapshotCommandOutput,
} from "./commands/CreateResourceSnapshotCommand";
import {
  CreateResourceSnapshotJobCommand,
  CreateResourceSnapshotJobCommandInput,
  CreateResourceSnapshotJobCommandOutput,
} from "./commands/CreateResourceSnapshotJobCommand";
import {
  DeleteResourceSnapshotJobCommand,
  DeleteResourceSnapshotJobCommandInput,
  DeleteResourceSnapshotJobCommandOutput,
} from "./commands/DeleteResourceSnapshotJobCommand";
import {
  DisassociateOpportunityCommand,
  DisassociateOpportunityCommandInput,
  DisassociateOpportunityCommandOutput,
} from "./commands/DisassociateOpportunityCommand";
import {
  GetAwsOpportunitySummaryCommand,
  GetAwsOpportunitySummaryCommandInput,
  GetAwsOpportunitySummaryCommandOutput,
} from "./commands/GetAwsOpportunitySummaryCommand";
import {
  GetEngagementCommand,
  GetEngagementCommandInput,
  GetEngagementCommandOutput,
} from "./commands/GetEngagementCommand";
import {
  GetEngagementInvitationCommand,
  GetEngagementInvitationCommandInput,
  GetEngagementInvitationCommandOutput,
} from "./commands/GetEngagementInvitationCommand";
import {
  GetOpportunityCommand,
  GetOpportunityCommandInput,
  GetOpportunityCommandOutput,
} from "./commands/GetOpportunityCommand";
import {
  GetResourceSnapshotCommand,
  GetResourceSnapshotCommandInput,
  GetResourceSnapshotCommandOutput,
} from "./commands/GetResourceSnapshotCommand";
import {
  GetResourceSnapshotJobCommand,
  GetResourceSnapshotJobCommandInput,
  GetResourceSnapshotJobCommandOutput,
} from "./commands/GetResourceSnapshotJobCommand";
import {
  GetSellingSystemSettingsCommand,
  GetSellingSystemSettingsCommandInput,
  GetSellingSystemSettingsCommandOutput,
} from "./commands/GetSellingSystemSettingsCommand";
import {
  ListEngagementByAcceptingInvitationTasksCommand,
  ListEngagementByAcceptingInvitationTasksCommandInput,
  ListEngagementByAcceptingInvitationTasksCommandOutput,
} from "./commands/ListEngagementByAcceptingInvitationTasksCommand";
import {
  ListEngagementFromOpportunityTasksCommand,
  ListEngagementFromOpportunityTasksCommandInput,
  ListEngagementFromOpportunityTasksCommandOutput,
} from "./commands/ListEngagementFromOpportunityTasksCommand";
import {
  ListEngagementInvitationsCommand,
  ListEngagementInvitationsCommandInput,
  ListEngagementInvitationsCommandOutput,
} from "./commands/ListEngagementInvitationsCommand";
import {
  ListEngagementMembersCommand,
  ListEngagementMembersCommandInput,
  ListEngagementMembersCommandOutput,
} from "./commands/ListEngagementMembersCommand";
import {
  ListEngagementResourceAssociationsCommand,
  ListEngagementResourceAssociationsCommandInput,
  ListEngagementResourceAssociationsCommandOutput,
} from "./commands/ListEngagementResourceAssociationsCommand";
import {
  ListEngagementsCommand,
  ListEngagementsCommandInput,
  ListEngagementsCommandOutput,
} from "./commands/ListEngagementsCommand";
import {
  ListOpportunitiesCommand,
  ListOpportunitiesCommandInput,
  ListOpportunitiesCommandOutput,
} from "./commands/ListOpportunitiesCommand";
import {
  ListOpportunityFromEngagementTasksCommand,
  ListOpportunityFromEngagementTasksCommandInput,
  ListOpportunityFromEngagementTasksCommandOutput,
} from "./commands/ListOpportunityFromEngagementTasksCommand";
import {
  ListResourceSnapshotJobsCommand,
  ListResourceSnapshotJobsCommandInput,
  ListResourceSnapshotJobsCommandOutput,
} from "./commands/ListResourceSnapshotJobsCommand";
import {
  ListResourceSnapshotsCommand,
  ListResourceSnapshotsCommandInput,
  ListResourceSnapshotsCommandOutput,
} from "./commands/ListResourceSnapshotsCommand";
import {
  ListSolutionsCommand,
  ListSolutionsCommandInput,
  ListSolutionsCommandOutput,
} from "./commands/ListSolutionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutSellingSystemSettingsCommand,
  PutSellingSystemSettingsCommandInput,
  PutSellingSystemSettingsCommandOutput,
} from "./commands/PutSellingSystemSettingsCommand";
import {
  RejectEngagementInvitationCommand,
  RejectEngagementInvitationCommandInput,
  RejectEngagementInvitationCommandOutput,
} from "./commands/RejectEngagementInvitationCommand";
import {
  StartEngagementByAcceptingInvitationTaskCommand,
  StartEngagementByAcceptingInvitationTaskCommandInput,
  StartEngagementByAcceptingInvitationTaskCommandOutput,
} from "./commands/StartEngagementByAcceptingInvitationTaskCommand";
import {
  StartEngagementFromOpportunityTaskCommand,
  StartEngagementFromOpportunityTaskCommandInput,
  StartEngagementFromOpportunityTaskCommandOutput,
} from "./commands/StartEngagementFromOpportunityTaskCommand";
import {
  StartOpportunityFromEngagementTaskCommand,
  StartOpportunityFromEngagementTaskCommandInput,
  StartOpportunityFromEngagementTaskCommandOutput,
} from "./commands/StartOpportunityFromEngagementTaskCommand";
import {
  StartResourceSnapshotJobCommand,
  StartResourceSnapshotJobCommandInput,
  StartResourceSnapshotJobCommandOutput,
} from "./commands/StartResourceSnapshotJobCommand";
import {
  StopResourceSnapshotJobCommand,
  StopResourceSnapshotJobCommandInput,
  StopResourceSnapshotJobCommandOutput,
} from "./commands/StopResourceSnapshotJobCommand";
import {
  SubmitOpportunityCommand,
  SubmitOpportunityCommandInput,
  SubmitOpportunityCommandOutput,
} from "./commands/SubmitOpportunityCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateEngagementContextCommand,
  UpdateEngagementContextCommandInput,
  UpdateEngagementContextCommandOutput,
} from "./commands/UpdateEngagementContextCommand";
import {
  UpdateOpportunityCommand,
  UpdateOpportunityCommandInput,
  UpdateOpportunityCommandOutput,
} from "./commands/UpdateOpportunityCommand";
import { PartnerCentralSellingClient, PartnerCentralSellingClientConfig } from "./PartnerCentralSellingClient";

const commands = {
  AcceptEngagementInvitationCommand,
  AssignOpportunityCommand,
  AssociateOpportunityCommand,
  CreateEngagementCommand,
  CreateEngagementContextCommand,
  CreateEngagementInvitationCommand,
  CreateOpportunityCommand,
  CreateResourceSnapshotCommand,
  CreateResourceSnapshotJobCommand,
  DeleteResourceSnapshotJobCommand,
  DisassociateOpportunityCommand,
  GetAwsOpportunitySummaryCommand,
  GetEngagementCommand,
  GetEngagementInvitationCommand,
  GetOpportunityCommand,
  GetResourceSnapshotCommand,
  GetResourceSnapshotJobCommand,
  GetSellingSystemSettingsCommand,
  ListEngagementByAcceptingInvitationTasksCommand,
  ListEngagementFromOpportunityTasksCommand,
  ListEngagementInvitationsCommand,
  ListEngagementMembersCommand,
  ListEngagementResourceAssociationsCommand,
  ListEngagementsCommand,
  ListOpportunitiesCommand,
  ListOpportunityFromEngagementTasksCommand,
  ListResourceSnapshotJobsCommand,
  ListResourceSnapshotsCommand,
  ListSolutionsCommand,
  ListTagsForResourceCommand,
  PutSellingSystemSettingsCommand,
  RejectEngagementInvitationCommand,
  StartEngagementByAcceptingInvitationTaskCommand,
  StartEngagementFromOpportunityTaskCommand,
  StartOpportunityFromEngagementTaskCommand,
  StartResourceSnapshotJobCommand,
  StopResourceSnapshotJobCommand,
  SubmitOpportunityCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEngagementContextCommand,
  UpdateOpportunityCommand,
};

export interface PartnerCentralSelling {
  /**
   * @see {@link AcceptEngagementInvitationCommand}
   */
  acceptEngagementInvitation(
    args: AcceptEngagementInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptEngagementInvitationCommandOutput>;
  acceptEngagementInvitation(
    args: AcceptEngagementInvitationCommandInput,
    cb: (err: any, data?: AcceptEngagementInvitationCommandOutput) => void
  ): void;
  acceptEngagementInvitation(
    args: AcceptEngagementInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptEngagementInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link AssignOpportunityCommand}
   */
  assignOpportunity(
    args: AssignOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssignOpportunityCommandOutput>;
  assignOpportunity(
    args: AssignOpportunityCommandInput,
    cb: (err: any, data?: AssignOpportunityCommandOutput) => void
  ): void;
  assignOpportunity(
    args: AssignOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssignOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateOpportunityCommand}
   */
  associateOpportunity(
    args: AssociateOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateOpportunityCommandOutput>;
  associateOpportunity(
    args: AssociateOpportunityCommandInput,
    cb: (err: any, data?: AssociateOpportunityCommandOutput) => void
  ): void;
  associateOpportunity(
    args: AssociateOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEngagementCommand}
   */
  createEngagement(
    args: CreateEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEngagementCommandOutput>;
  createEngagement(
    args: CreateEngagementCommandInput,
    cb: (err: any, data?: CreateEngagementCommandOutput) => void
  ): void;
  createEngagement(
    args: CreateEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEngagementContextCommand}
   */
  createEngagementContext(
    args: CreateEngagementContextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEngagementContextCommandOutput>;
  createEngagementContext(
    args: CreateEngagementContextCommandInput,
    cb: (err: any, data?: CreateEngagementContextCommandOutput) => void
  ): void;
  createEngagementContext(
    args: CreateEngagementContextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEngagementContextCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEngagementInvitationCommand}
   */
  createEngagementInvitation(
    args: CreateEngagementInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEngagementInvitationCommandOutput>;
  createEngagementInvitation(
    args: CreateEngagementInvitationCommandInput,
    cb: (err: any, data?: CreateEngagementInvitationCommandOutput) => void
  ): void;
  createEngagementInvitation(
    args: CreateEngagementInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEngagementInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOpportunityCommand}
   */
  createOpportunity(
    args: CreateOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOpportunityCommandOutput>;
  createOpportunity(
    args: CreateOpportunityCommandInput,
    cb: (err: any, data?: CreateOpportunityCommandOutput) => void
  ): void;
  createOpportunity(
    args: CreateOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceSnapshotCommand}
   */
  createResourceSnapshot(
    args: CreateResourceSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceSnapshotCommandOutput>;
  createResourceSnapshot(
    args: CreateResourceSnapshotCommandInput,
    cb: (err: any, data?: CreateResourceSnapshotCommandOutput) => void
  ): void;
  createResourceSnapshot(
    args: CreateResourceSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceSnapshotJobCommand}
   */
  createResourceSnapshotJob(
    args: CreateResourceSnapshotJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceSnapshotJobCommandOutput>;
  createResourceSnapshotJob(
    args: CreateResourceSnapshotJobCommandInput,
    cb: (err: any, data?: CreateResourceSnapshotJobCommandOutput) => void
  ): void;
  createResourceSnapshotJob(
    args: CreateResourceSnapshotJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceSnapshotJobCommand}
   */
  deleteResourceSnapshotJob(
    args: DeleteResourceSnapshotJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceSnapshotJobCommandOutput>;
  deleteResourceSnapshotJob(
    args: DeleteResourceSnapshotJobCommandInput,
    cb: (err: any, data?: DeleteResourceSnapshotJobCommandOutput) => void
  ): void;
  deleteResourceSnapshotJob(
    args: DeleteResourceSnapshotJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateOpportunityCommand}
   */
  disassociateOpportunity(
    args: DisassociateOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateOpportunityCommandOutput>;
  disassociateOpportunity(
    args: DisassociateOpportunityCommandInput,
    cb: (err: any, data?: DisassociateOpportunityCommandOutput) => void
  ): void;
  disassociateOpportunity(
    args: DisassociateOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAwsOpportunitySummaryCommand}
   */
  getAwsOpportunitySummary(
    args: GetAwsOpportunitySummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAwsOpportunitySummaryCommandOutput>;
  getAwsOpportunitySummary(
    args: GetAwsOpportunitySummaryCommandInput,
    cb: (err: any, data?: GetAwsOpportunitySummaryCommandOutput) => void
  ): void;
  getAwsOpportunitySummary(
    args: GetAwsOpportunitySummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAwsOpportunitySummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEngagementCommand}
   */
  getEngagement(args: GetEngagementCommandInput, options?: __HttpHandlerOptions): Promise<GetEngagementCommandOutput>;
  getEngagement(args: GetEngagementCommandInput, cb: (err: any, data?: GetEngagementCommandOutput) => void): void;
  getEngagement(
    args: GetEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEngagementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEngagementInvitationCommand}
   */
  getEngagementInvitation(
    args: GetEngagementInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEngagementInvitationCommandOutput>;
  getEngagementInvitation(
    args: GetEngagementInvitationCommandInput,
    cb: (err: any, data?: GetEngagementInvitationCommandOutput) => void
  ): void;
  getEngagementInvitation(
    args: GetEngagementInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEngagementInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOpportunityCommand}
   */
  getOpportunity(
    args: GetOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOpportunityCommandOutput>;
  getOpportunity(args: GetOpportunityCommandInput, cb: (err: any, data?: GetOpportunityCommandOutput) => void): void;
  getOpportunity(
    args: GetOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOpportunityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceSnapshotCommand}
   */
  getResourceSnapshot(
    args: GetResourceSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceSnapshotCommandOutput>;
  getResourceSnapshot(
    args: GetResourceSnapshotCommandInput,
    cb: (err: any, data?: GetResourceSnapshotCommandOutput) => void
  ): void;
  getResourceSnapshot(
    args: GetResourceSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceSnapshotJobCommand}
   */
  getResourceSnapshotJob(
    args: GetResourceSnapshotJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceSnapshotJobCommandOutput>;
  getResourceSnapshotJob(
    args: GetResourceSnapshotJobCommandInput,
    cb: (err: any, data?: GetResourceSnapshotJobCommandOutput) => void
  ): void;
  getResourceSnapshotJob(
    args: GetResourceSnapshotJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSellingSystemSettingsCommand}
   */
  getSellingSystemSettings(
    args: GetSellingSystemSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSellingSystemSettingsCommandOutput>;
  getSellingSystemSettings(
    args: GetSellingSystemSettingsCommandInput,
    cb: (err: any, data?: GetSellingSystemSettingsCommandOutput) => void
  ): void;
  getSellingSystemSettings(
    args: GetSellingSystemSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSellingSystemSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementByAcceptingInvitationTasksCommand}
   */
  listEngagementByAcceptingInvitationTasks(
    args: ListEngagementByAcceptingInvitationTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngagementByAcceptingInvitationTasksCommandOutput>;
  listEngagementByAcceptingInvitationTasks(
    args: ListEngagementByAcceptingInvitationTasksCommandInput,
    cb: (err: any, data?: ListEngagementByAcceptingInvitationTasksCommandOutput) => void
  ): void;
  listEngagementByAcceptingInvitationTasks(
    args: ListEngagementByAcceptingInvitationTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngagementByAcceptingInvitationTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementFromOpportunityTasksCommand}
   */
  listEngagementFromOpportunityTasks(
    args: ListEngagementFromOpportunityTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngagementFromOpportunityTasksCommandOutput>;
  listEngagementFromOpportunityTasks(
    args: ListEngagementFromOpportunityTasksCommandInput,
    cb: (err: any, data?: ListEngagementFromOpportunityTasksCommandOutput) => void
  ): void;
  listEngagementFromOpportunityTasks(
    args: ListEngagementFromOpportunityTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngagementFromOpportunityTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementInvitationsCommand}
   */
  listEngagementInvitations(
    args: ListEngagementInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngagementInvitationsCommandOutput>;
  listEngagementInvitations(
    args: ListEngagementInvitationsCommandInput,
    cb: (err: any, data?: ListEngagementInvitationsCommandOutput) => void
  ): void;
  listEngagementInvitations(
    args: ListEngagementInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngagementInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementMembersCommand}
   */
  listEngagementMembers(
    args: ListEngagementMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngagementMembersCommandOutput>;
  listEngagementMembers(
    args: ListEngagementMembersCommandInput,
    cb: (err: any, data?: ListEngagementMembersCommandOutput) => void
  ): void;
  listEngagementMembers(
    args: ListEngagementMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngagementMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementResourceAssociationsCommand}
   */
  listEngagementResourceAssociations(
    args: ListEngagementResourceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngagementResourceAssociationsCommandOutput>;
  listEngagementResourceAssociations(
    args: ListEngagementResourceAssociationsCommandInput,
    cb: (err: any, data?: ListEngagementResourceAssociationsCommandOutput) => void
  ): void;
  listEngagementResourceAssociations(
    args: ListEngagementResourceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngagementResourceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEngagementsCommand}
   */
  listEngagements(
    args: ListEngagementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngagementsCommandOutput>;
  listEngagements(args: ListEngagementsCommandInput, cb: (err: any, data?: ListEngagementsCommandOutput) => void): void;
  listEngagements(
    args: ListEngagementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngagementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpportunitiesCommand}
   */
  listOpportunities(
    args: ListOpportunitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpportunitiesCommandOutput>;
  listOpportunities(
    args: ListOpportunitiesCommandInput,
    cb: (err: any, data?: ListOpportunitiesCommandOutput) => void
  ): void;
  listOpportunities(
    args: ListOpportunitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpportunitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpportunityFromEngagementTasksCommand}
   */
  listOpportunityFromEngagementTasks(
    args: ListOpportunityFromEngagementTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpportunityFromEngagementTasksCommandOutput>;
  listOpportunityFromEngagementTasks(
    args: ListOpportunityFromEngagementTasksCommandInput,
    cb: (err: any, data?: ListOpportunityFromEngagementTasksCommandOutput) => void
  ): void;
  listOpportunityFromEngagementTasks(
    args: ListOpportunityFromEngagementTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpportunityFromEngagementTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceSnapshotJobsCommand}
   */
  listResourceSnapshotJobs(
    args: ListResourceSnapshotJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceSnapshotJobsCommandOutput>;
  listResourceSnapshotJobs(
    args: ListResourceSnapshotJobsCommandInput,
    cb: (err: any, data?: ListResourceSnapshotJobsCommandOutput) => void
  ): void;
  listResourceSnapshotJobs(
    args: ListResourceSnapshotJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceSnapshotJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceSnapshotsCommand}
   */
  listResourceSnapshots(
    args: ListResourceSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceSnapshotsCommandOutput>;
  listResourceSnapshots(
    args: ListResourceSnapshotsCommandInput,
    cb: (err: any, data?: ListResourceSnapshotsCommandOutput) => void
  ): void;
  listResourceSnapshots(
    args: ListResourceSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSolutionsCommand}
   */
  listSolutions(args: ListSolutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSolutionsCommandOutput>;
  listSolutions(args: ListSolutionsCommandInput, cb: (err: any, data?: ListSolutionsCommandOutput) => void): void;
  listSolutions(
    args: ListSolutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSolutionsCommandOutput) => void
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
   * @see {@link PutSellingSystemSettingsCommand}
   */
  putSellingSystemSettings(
    args: PutSellingSystemSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSellingSystemSettingsCommandOutput>;
  putSellingSystemSettings(
    args: PutSellingSystemSettingsCommandInput,
    cb: (err: any, data?: PutSellingSystemSettingsCommandOutput) => void
  ): void;
  putSellingSystemSettings(
    args: PutSellingSystemSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSellingSystemSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectEngagementInvitationCommand}
   */
  rejectEngagementInvitation(
    args: RejectEngagementInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectEngagementInvitationCommandOutput>;
  rejectEngagementInvitation(
    args: RejectEngagementInvitationCommandInput,
    cb: (err: any, data?: RejectEngagementInvitationCommandOutput) => void
  ): void;
  rejectEngagementInvitation(
    args: RejectEngagementInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectEngagementInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEngagementByAcceptingInvitationTaskCommand}
   */
  startEngagementByAcceptingInvitationTask(
    args: StartEngagementByAcceptingInvitationTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEngagementByAcceptingInvitationTaskCommandOutput>;
  startEngagementByAcceptingInvitationTask(
    args: StartEngagementByAcceptingInvitationTaskCommandInput,
    cb: (err: any, data?: StartEngagementByAcceptingInvitationTaskCommandOutput) => void
  ): void;
  startEngagementByAcceptingInvitationTask(
    args: StartEngagementByAcceptingInvitationTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEngagementByAcceptingInvitationTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEngagementFromOpportunityTaskCommand}
   */
  startEngagementFromOpportunityTask(
    args: StartEngagementFromOpportunityTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEngagementFromOpportunityTaskCommandOutput>;
  startEngagementFromOpportunityTask(
    args: StartEngagementFromOpportunityTaskCommandInput,
    cb: (err: any, data?: StartEngagementFromOpportunityTaskCommandOutput) => void
  ): void;
  startEngagementFromOpportunityTask(
    args: StartEngagementFromOpportunityTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEngagementFromOpportunityTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartOpportunityFromEngagementTaskCommand}
   */
  startOpportunityFromEngagementTask(
    args: StartOpportunityFromEngagementTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartOpportunityFromEngagementTaskCommandOutput>;
  startOpportunityFromEngagementTask(
    args: StartOpportunityFromEngagementTaskCommandInput,
    cb: (err: any, data?: StartOpportunityFromEngagementTaskCommandOutput) => void
  ): void;
  startOpportunityFromEngagementTask(
    args: StartOpportunityFromEngagementTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartOpportunityFromEngagementTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartResourceSnapshotJobCommand}
   */
  startResourceSnapshotJob(
    args: StartResourceSnapshotJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartResourceSnapshotJobCommandOutput>;
  startResourceSnapshotJob(
    args: StartResourceSnapshotJobCommandInput,
    cb: (err: any, data?: StartResourceSnapshotJobCommandOutput) => void
  ): void;
  startResourceSnapshotJob(
    args: StartResourceSnapshotJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartResourceSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopResourceSnapshotJobCommand}
   */
  stopResourceSnapshotJob(
    args: StopResourceSnapshotJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopResourceSnapshotJobCommandOutput>;
  stopResourceSnapshotJob(
    args: StopResourceSnapshotJobCommandInput,
    cb: (err: any, data?: StopResourceSnapshotJobCommandOutput) => void
  ): void;
  stopResourceSnapshotJob(
    args: StopResourceSnapshotJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopResourceSnapshotJobCommandOutput) => void
  ): void;

  /**
   * @see {@link SubmitOpportunityCommand}
   */
  submitOpportunity(
    args: SubmitOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitOpportunityCommandOutput>;
  submitOpportunity(
    args: SubmitOpportunityCommandInput,
    cb: (err: any, data?: SubmitOpportunityCommandOutput) => void
  ): void;
  submitOpportunity(
    args: SubmitOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitOpportunityCommandOutput) => void
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

  /**
   * @see {@link UpdateEngagementContextCommand}
   */
  updateEngagementContext(
    args: UpdateEngagementContextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEngagementContextCommandOutput>;
  updateEngagementContext(
    args: UpdateEngagementContextCommandInput,
    cb: (err: any, data?: UpdateEngagementContextCommandOutput) => void
  ): void;
  updateEngagementContext(
    args: UpdateEngagementContextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEngagementContextCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOpportunityCommand}
   */
  updateOpportunity(
    args: UpdateOpportunityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOpportunityCommandOutput>;
  updateOpportunity(
    args: UpdateOpportunityCommandInput,
    cb: (err: any, data?: UpdateOpportunityCommandOutput) => void
  ): void;
  updateOpportunity(
    args: UpdateOpportunityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOpportunityCommandOutput) => void
  ): void;
}

/**
 * <fullname>AWS Partner Central API for Selling</fullname> <p> <b>AWS Partner Central API for Selling Reference Guide</b> </p> <p>This Amazon Web Services (AWS) Partner Central API reference is designed to help <a href="http://aws.amazon.com/partners/programs/">AWS Partners</a> integrate Customer Relationship Management (CRM) systems with AWS Partner Central. Partners can automate interactions with AWS Partner Central, which helps to ensure effective engagements in joint business activities.</p> <p>The API provides standard AWS API functionality. Access it by either using API <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/API_Operations.html">Actions</a> or by using an AWS SDK that's tailored to your programming language or platform. For more information, see <a href="http://aws.amazon.com/getting-started">Getting Started with AWS</a> and <a href="http://aws.amazon.com/developer/tools/">Tools to Build on AWS</a>.</p> <p class="title"> <b>Features offered by AWS Partner Central API</b> </p> <ol> <li> <p> <b>Opportunity management:</b> Manages coselling opportunities through API actions such as <code>CreateOpportunity</code>, <code>UpdateOpportunity</code>, <code>ListOpportunities</code>, <code>GetOpportunity</code>, and <code>AssignOpportunity</code>.</p> </li> <li> <p> <b>AWS referral management:</b> Manages referrals shared by AWS using actions such as <code>ListEngagementInvitations</code>, <code>GetEngagementInvitation</code>, <code>StartEngagementByAcceptingInvitation</code>, and <code>RejectEngagementInvitation</code>.</p> </li> <li> <p> <b>Entity association:</b> Associates related entities such as <i>AWS Products</i>, <i>Partner Solutions</i>, and <i>AWS Marketplace Private Offers</i> with opportunities using the actions <code>AssociateOpportunity</code>, and <code>DisassociateOpportunity</code>.</p> </li> <li> <p> <b>View AWS opportunity details:</b> Retrieves real-time summaries of AWS opportunities using the <code>GetAWSOpportunitySummary</code> action.</p> </li> <li> <p> <b>List solutions:</b> Provides list APIs for listing partner offers using <code>ListSolutions</code>.</p> </li> <li> <p> <b>Event subscription:</b> Subscribe to real-time opportunity updates through AWS EventBridge by using actions such as <i>Opportunity Created</i>, <i>Opportunity Updated</i>, <i>Engagement Invitation Accepted</i>, <i>Engagement Invitation Rejected</i>, and <i>Engagement Invitation Created</i>.</p> </li> </ol>
 * @public
 */
export class PartnerCentralSelling extends PartnerCentralSellingClient implements PartnerCentralSelling {}
createAggregatedClient(commands, PartnerCentralSelling);
