// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptAdministratorInvitationCommand,
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "./commands/AcceptAdministratorInvitationCommand";
import {
  AcceptInvitationCommand,
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput,
} from "./commands/AcceptInvitationCommand";
import {
  ArchiveFindingsCommand,
  ArchiveFindingsCommandInput,
  ArchiveFindingsCommandOutput,
} from "./commands/ArchiveFindingsCommand";
import {
  CreateDetectorCommand,
  CreateDetectorCommandInput,
  CreateDetectorCommandOutput,
} from "./commands/CreateDetectorCommand";
import {
  CreateFilterCommand,
  CreateFilterCommandInput,
  CreateFilterCommandOutput,
} from "./commands/CreateFilterCommand";
import { CreateIPSetCommand, CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import {
  CreateMembersCommand,
  CreateMembersCommandInput,
  CreateMembersCommandOutput,
} from "./commands/CreateMembersCommand";
import {
  CreatePublishingDestinationCommand,
  CreatePublishingDestinationCommandInput,
  CreatePublishingDestinationCommandOutput,
} from "./commands/CreatePublishingDestinationCommand";
import {
  CreateSampleFindingsCommand,
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput,
} from "./commands/CreateSampleFindingsCommand";
import {
  CreateThreatIntelSetCommand,
  CreateThreatIntelSetCommandInput,
  CreateThreatIntelSetCommandOutput,
} from "./commands/CreateThreatIntelSetCommand";
import {
  DeclineInvitationsCommand,
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput,
} from "./commands/DeclineInvitationsCommand";
import {
  DeleteDetectorCommand,
  DeleteDetectorCommandInput,
  DeleteDetectorCommandOutput,
} from "./commands/DeleteDetectorCommand";
import {
  DeleteFilterCommand,
  DeleteFilterCommandInput,
  DeleteFilterCommandOutput,
} from "./commands/DeleteFilterCommand";
import {
  DeleteInvitationsCommand,
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput,
} from "./commands/DeleteInvitationsCommand";
import { DeleteIPSetCommand, DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import {
  DeleteMembersCommand,
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput,
} from "./commands/DeleteMembersCommand";
import {
  DeletePublishingDestinationCommand,
  DeletePublishingDestinationCommandInput,
  DeletePublishingDestinationCommandOutput,
} from "./commands/DeletePublishingDestinationCommand";
import {
  DeleteThreatIntelSetCommand,
  DeleteThreatIntelSetCommandInput,
  DeleteThreatIntelSetCommandOutput,
} from "./commands/DeleteThreatIntelSetCommand";
import {
  DescribeMalwareScansCommand,
  DescribeMalwareScansCommandInput,
  DescribeMalwareScansCommandOutput,
} from "./commands/DescribeMalwareScansCommand";
import {
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import {
  DescribePublishingDestinationCommand,
  DescribePublishingDestinationCommandInput,
  DescribePublishingDestinationCommandOutput,
} from "./commands/DescribePublishingDestinationCommand";
import {
  DisableOrganizationAdminAccountCommand,
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "./commands/DisableOrganizationAdminAccountCommand";
import {
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
} from "./commands/DisassociateFromAdministratorAccountCommand";
import {
  DisassociateFromMasterAccountCommand,
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "./commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommand,
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "./commands/DisassociateMembersCommand";
import {
  EnableOrganizationAdminAccountCommand,
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "./commands/EnableOrganizationAdminAccountCommand";
import {
  GetAdministratorAccountCommand,
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "./commands/GetAdministratorAccountCommand";
import {
  GetCoverageStatisticsCommand,
  GetCoverageStatisticsCommandInput,
  GetCoverageStatisticsCommandOutput,
} from "./commands/GetCoverageStatisticsCommand";
import { GetDetectorCommand, GetDetectorCommandInput, GetDetectorCommandOutput } from "./commands/GetDetectorCommand";
import { GetFilterCommand, GetFilterCommandInput, GetFilterCommandOutput } from "./commands/GetFilterCommand";
import { GetFindingsCommand, GetFindingsCommandInput, GetFindingsCommandOutput } from "./commands/GetFindingsCommand";
import {
  GetFindingsStatisticsCommand,
  GetFindingsStatisticsCommandInput,
  GetFindingsStatisticsCommandOutput,
} from "./commands/GetFindingsStatisticsCommand";
import {
  GetInvitationsCountCommand,
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "./commands/GetInvitationsCountCommand";
import { GetIPSetCommand, GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import {
  GetMalwareScanSettingsCommand,
  GetMalwareScanSettingsCommandInput,
  GetMalwareScanSettingsCommandOutput,
} from "./commands/GetMalwareScanSettingsCommand";
import {
  GetMasterAccountCommand,
  GetMasterAccountCommandInput,
  GetMasterAccountCommandOutput,
} from "./commands/GetMasterAccountCommand";
import {
  GetMemberDetectorsCommand,
  GetMemberDetectorsCommandInput,
  GetMemberDetectorsCommandOutput,
} from "./commands/GetMemberDetectorsCommand";
import { GetMembersCommand, GetMembersCommandInput, GetMembersCommandOutput } from "./commands/GetMembersCommand";
import {
  GetRemainingFreeTrialDaysCommand,
  GetRemainingFreeTrialDaysCommandInput,
  GetRemainingFreeTrialDaysCommandOutput,
} from "./commands/GetRemainingFreeTrialDaysCommand";
import {
  GetThreatIntelSetCommand,
  GetThreatIntelSetCommandInput,
  GetThreatIntelSetCommandOutput,
} from "./commands/GetThreatIntelSetCommand";
import {
  GetUsageStatisticsCommand,
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
} from "./commands/GetUsageStatisticsCommand";
import {
  InviteMembersCommand,
  InviteMembersCommandInput,
  InviteMembersCommandOutput,
} from "./commands/InviteMembersCommand";
import {
  ListCoverageCommand,
  ListCoverageCommandInput,
  ListCoverageCommandOutput,
} from "./commands/ListCoverageCommand";
import {
  ListDetectorsCommand,
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput,
} from "./commands/ListDetectorsCommand";
import { ListFiltersCommand, ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "./commands/ListFindingsCommand";
import {
  ListInvitationsCommand,
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput,
} from "./commands/ListInvitationsCommand";
import { ListIPSetsCommand, ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "./commands/ListOrganizationAdminAccountsCommand";
import {
  ListPublishingDestinationsCommand,
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
} from "./commands/ListPublishingDestinationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListThreatIntelSetsCommand,
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput,
} from "./commands/ListThreatIntelSetsCommand";
import {
  StartMalwareScanCommand,
  StartMalwareScanCommandInput,
  StartMalwareScanCommandOutput,
} from "./commands/StartMalwareScanCommand";
import {
  StartMonitoringMembersCommand,
  StartMonitoringMembersCommandInput,
  StartMonitoringMembersCommandOutput,
} from "./commands/StartMonitoringMembersCommand";
import {
  StopMonitoringMembersCommand,
  StopMonitoringMembersCommandInput,
  StopMonitoringMembersCommandOutput,
} from "./commands/StopMonitoringMembersCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UnarchiveFindingsCommand,
  UnarchiveFindingsCommandInput,
  UnarchiveFindingsCommandOutput,
} from "./commands/UnarchiveFindingsCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDetectorCommand,
  UpdateDetectorCommandInput,
  UpdateDetectorCommandOutput,
} from "./commands/UpdateDetectorCommand";
import {
  UpdateFilterCommand,
  UpdateFilterCommandInput,
  UpdateFilterCommandOutput,
} from "./commands/UpdateFilterCommand";
import {
  UpdateFindingsFeedbackCommand,
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput,
} from "./commands/UpdateFindingsFeedbackCommand";
import { UpdateIPSetCommand, UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import {
  UpdateMalwareScanSettingsCommand,
  UpdateMalwareScanSettingsCommandInput,
  UpdateMalwareScanSettingsCommandOutput,
} from "./commands/UpdateMalwareScanSettingsCommand";
import {
  UpdateMemberDetectorsCommand,
  UpdateMemberDetectorsCommandInput,
  UpdateMemberDetectorsCommandOutput,
} from "./commands/UpdateMemberDetectorsCommand";
import {
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  UpdatePublishingDestinationCommand,
  UpdatePublishingDestinationCommandInput,
  UpdatePublishingDestinationCommandOutput,
} from "./commands/UpdatePublishingDestinationCommand";
import {
  UpdateThreatIntelSetCommand,
  UpdateThreatIntelSetCommandInput,
  UpdateThreatIntelSetCommandOutput,
} from "./commands/UpdateThreatIntelSetCommand";
import { GuardDutyClient, GuardDutyClientConfig } from "./GuardDutyClient";

const commands = {
  AcceptAdministratorInvitationCommand,
  AcceptInvitationCommand,
  ArchiveFindingsCommand,
  CreateDetectorCommand,
  CreateFilterCommand,
  CreateIPSetCommand,
  CreateMembersCommand,
  CreatePublishingDestinationCommand,
  CreateSampleFindingsCommand,
  CreateThreatIntelSetCommand,
  DeclineInvitationsCommand,
  DeleteDetectorCommand,
  DeleteFilterCommand,
  DeleteInvitationsCommand,
  DeleteIPSetCommand,
  DeleteMembersCommand,
  DeletePublishingDestinationCommand,
  DeleteThreatIntelSetCommand,
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
  GetMalwareScanSettingsCommand,
  GetMasterAccountCommand,
  GetMemberDetectorsCommand,
  GetMembersCommand,
  GetRemainingFreeTrialDaysCommand,
  GetThreatIntelSetCommand,
  GetUsageStatisticsCommand,
  InviteMembersCommand,
  ListCoverageCommand,
  ListDetectorsCommand,
  ListFiltersCommand,
  ListFindingsCommand,
  ListInvitationsCommand,
  ListIPSetsCommand,
  ListMembersCommand,
  ListOrganizationAdminAccountsCommand,
  ListPublishingDestinationsCommand,
  ListTagsForResourceCommand,
  ListThreatIntelSetsCommand,
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
  UpdateMalwareScanSettingsCommand,
  UpdateMemberDetectorsCommand,
  UpdateOrganizationConfigurationCommand,
  UpdatePublishingDestinationCommand,
  UpdateThreatIntelSetCommand,
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
  archiveFindings(args: ArchiveFindingsCommandInput, cb: (err: any, data?: ArchiveFindingsCommandOutput) => void): void;
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
  createDetector(args: CreateDetectorCommandInput, cb: (err: any, data?: CreateDetectorCommandOutput) => void): void;
  createDetector(
    args: CreateDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFilterCommand}
   */
  createFilter(args: CreateFilterCommandInput, options?: __HttpHandlerOptions): Promise<CreateFilterCommandOutput>;
  createFilter(args: CreateFilterCommandInput, cb: (err: any, data?: CreateFilterCommandOutput) => void): void;
  createFilter(
    args: CreateFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIPSetCommand}
   */
  createIPSet(args: CreateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateIPSetCommandOutput>;
  createIPSet(args: CreateIPSetCommandInput, cb: (err: any, data?: CreateIPSetCommandOutput) => void): void;
  createIPSet(
    args: CreateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMembersCommand}
   */
  createMembers(args: CreateMembersCommandInput, options?: __HttpHandlerOptions): Promise<CreateMembersCommandOutput>;
  createMembers(args: CreateMembersCommandInput, cb: (err: any, data?: CreateMembersCommandOutput) => void): void;
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
  deleteDetector(args: DeleteDetectorCommandInput, cb: (err: any, data?: DeleteDetectorCommandOutput) => void): void;
  deleteDetector(
    args: DeleteDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFilterCommand}
   */
  deleteFilter(args: DeleteFilterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFilterCommandOutput>;
  deleteFilter(args: DeleteFilterCommandInput, cb: (err: any, data?: DeleteFilterCommandOutput) => void): void;
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
  deleteIPSet(args: DeleteIPSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIPSetCommandOutput>;
  deleteIPSet(args: DeleteIPSetCommandInput, cb: (err: any, data?: DeleteIPSetCommandOutput) => void): void;
  deleteIPSet(
    args: DeleteIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMembersCommand}
   */
  deleteMembers(args: DeleteMembersCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMembersCommandOutput>;
  deleteMembers(args: DeleteMembersCommandInput, cb: (err: any, data?: DeleteMembersCommandOutput) => void): void;
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
  getDetector(args: GetDetectorCommandInput, options?: __HttpHandlerOptions): Promise<GetDetectorCommandOutput>;
  getDetector(args: GetDetectorCommandInput, cb: (err: any, data?: GetDetectorCommandOutput) => void): void;
  getDetector(
    args: GetDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFilterCommand}
   */
  getFilter(args: GetFilterCommandInput, options?: __HttpHandlerOptions): Promise<GetFilterCommandOutput>;
  getFilter(args: GetFilterCommandInput, cb: (err: any, data?: GetFilterCommandOutput) => void): void;
  getFilter(
    args: GetFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingsCommand}
   */
  getFindings(args: GetFindingsCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingsCommandOutput>;
  getFindings(args: GetFindingsCommandInput, cb: (err: any, data?: GetFindingsCommandOutput) => void): void;
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
  getIPSet(args: GetIPSetCommandInput, options?: __HttpHandlerOptions): Promise<GetIPSetCommandOutput>;
  getIPSet(args: GetIPSetCommandInput, cb: (err: any, data?: GetIPSetCommandOutput) => void): void;
  getIPSet(
    args: GetIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIPSetCommandOutput) => void
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
  getMembers(args: GetMembersCommandInput, options?: __HttpHandlerOptions): Promise<GetMembersCommandOutput>;
  getMembers(args: GetMembersCommandInput, cb: (err: any, data?: GetMembersCommandOutput) => void): void;
  getMembers(
    args: GetMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMembersCommandOutput) => void
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
  inviteMembers(args: InviteMembersCommandInput, options?: __HttpHandlerOptions): Promise<InviteMembersCommandOutput>;
  inviteMembers(args: InviteMembersCommandInput, cb: (err: any, data?: InviteMembersCommandOutput) => void): void;
  inviteMembers(
    args: InviteMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InviteMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoverageCommand}
   */
  listCoverage(args: ListCoverageCommandInput, options?: __HttpHandlerOptions): Promise<ListCoverageCommandOutput>;
  listCoverage(args: ListCoverageCommandInput, cb: (err: any, data?: ListCoverageCommandOutput) => void): void;
  listCoverage(
    args: ListCoverageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoverageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDetectorsCommand}
   */
  listDetectors(args: ListDetectorsCommandInput, options?: __HttpHandlerOptions): Promise<ListDetectorsCommandOutput>;
  listDetectors(args: ListDetectorsCommandInput, cb: (err: any, data?: ListDetectorsCommandOutput) => void): void;
  listDetectors(
    args: ListDetectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDetectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFiltersCommand}
   */
  listFilters(args: ListFiltersCommandInput, options?: __HttpHandlerOptions): Promise<ListFiltersCommandOutput>;
  listFilters(args: ListFiltersCommandInput, cb: (err: any, data?: ListFiltersCommandOutput) => void): void;
  listFilters(
    args: ListFiltersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFiltersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsCommand}
   */
  listFindings(args: ListFindingsCommandInput, options?: __HttpHandlerOptions): Promise<ListFindingsCommandOutput>;
  listFindings(args: ListFindingsCommandInput, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
  listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvitationsCommand}
   */
  listInvitations(
    args: ListInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvitationsCommandOutput>;
  listInvitations(args: ListInvitationsCommandInput, cb: (err: any, data?: ListInvitationsCommandOutput) => void): void;
  listInvitations(
    args: ListInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvitationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIPSetsCommand}
   */
  listIPSets(args: ListIPSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListIPSetsCommandOutput>;
  listIPSets(args: ListIPSetsCommandInput, cb: (err: any, data?: ListIPSetsCommandOutput) => void): void;
  listIPSets(
    args: ListIPSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIPSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMembersCommand}
   */
  listMembers(args: ListMembersCommandInput, options?: __HttpHandlerOptions): Promise<ListMembersCommandOutput>;
  listMembers(args: ListMembersCommandInput, cb: (err: any, data?: ListMembersCommandOutput) => void): void;
  listMembers(
    args: ListMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationAdminAccountsCommand}
   */
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
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
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
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
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
  updateDetector(args: UpdateDetectorCommandInput, cb: (err: any, data?: UpdateDetectorCommandOutput) => void): void;
  updateDetector(
    args: UpdateDetectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDetectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFilterCommand}
   */
  updateFilter(args: UpdateFilterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFilterCommandOutput>;
  updateFilter(args: UpdateFilterCommandInput, cb: (err: any, data?: UpdateFilterCommandOutput) => void): void;
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
  updateIPSet(args: UpdateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIPSetCommandOutput>;
  updateIPSet(args: UpdateIPSetCommandInput, cb: (err: any, data?: UpdateIPSetCommandOutput) => void): void;
  updateIPSet(
    args: UpdateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIPSetCommandOutput) => void
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
}

/**
 * @public
 * <p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes
 *       the following data sources: VPC flow logs, Amazon Web Services CloudTrail management event logs, CloudTrail S3 data event
 *       logs, EKS audit logs, DNS logs, and Amazon EBS volume data.
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
 */
export class GuardDuty extends GuardDutyClient implements GuardDuty {}
createAggregatedClient(commands, GuardDuty);
