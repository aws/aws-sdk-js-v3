// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateMemberCommand,
  AssociateMemberCommandInput,
  AssociateMemberCommandOutput,
} from "./commands/AssociateMemberCommand";
import {
  BatchGetAccountStatusCommand,
  BatchGetAccountStatusCommandInput,
  BatchGetAccountStatusCommandOutput,
} from "./commands/BatchGetAccountStatusCommand";
import {
  BatchGetCodeSnippetCommand,
  BatchGetCodeSnippetCommandInput,
  BatchGetCodeSnippetCommandOutput,
} from "./commands/BatchGetCodeSnippetCommand";
import {
  BatchGetFindingDetailsCommand,
  BatchGetFindingDetailsCommandInput,
  BatchGetFindingDetailsCommandOutput,
} from "./commands/BatchGetFindingDetailsCommand";
import {
  BatchGetFreeTrialInfoCommand,
  BatchGetFreeTrialInfoCommandInput,
  BatchGetFreeTrialInfoCommandOutput,
} from "./commands/BatchGetFreeTrialInfoCommand";
import {
  BatchGetMemberEc2DeepInspectionStatusCommand,
  BatchGetMemberEc2DeepInspectionStatusCommandInput,
  BatchGetMemberEc2DeepInspectionStatusCommandOutput,
} from "./commands/BatchGetMemberEc2DeepInspectionStatusCommand";
import {
  BatchUpdateMemberEc2DeepInspectionStatusCommand,
  BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
  BatchUpdateMemberEc2DeepInspectionStatusCommandOutput,
} from "./commands/BatchUpdateMemberEc2DeepInspectionStatusCommand";
import {
  CancelFindingsReportCommand,
  CancelFindingsReportCommandInput,
  CancelFindingsReportCommandOutput,
} from "./commands/CancelFindingsReportCommand";
import {
  CancelSbomExportCommand,
  CancelSbomExportCommandInput,
  CancelSbomExportCommandOutput,
} from "./commands/CancelSbomExportCommand";
import {
  CreateFilterCommand,
  CreateFilterCommandInput,
  CreateFilterCommandOutput,
} from "./commands/CreateFilterCommand";
import {
  CreateFindingsReportCommand,
  CreateFindingsReportCommandInput,
  CreateFindingsReportCommandOutput,
} from "./commands/CreateFindingsReportCommand";
import {
  CreateSbomExportCommand,
  CreateSbomExportCommandInput,
  CreateSbomExportCommandOutput,
} from "./commands/CreateSbomExportCommand";
import {
  DeleteFilterCommand,
  DeleteFilterCommandInput,
  DeleteFilterCommandOutput,
} from "./commands/DeleteFilterCommand";
import {
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "./commands/DescribeOrganizationConfigurationCommand";
import { DisableCommand, DisableCommandInput, DisableCommandOutput } from "./commands/DisableCommand";
import {
  DisableDelegatedAdminAccountCommand,
  DisableDelegatedAdminAccountCommandInput,
  DisableDelegatedAdminAccountCommandOutput,
} from "./commands/DisableDelegatedAdminAccountCommand";
import {
  DisassociateMemberCommand,
  DisassociateMemberCommandInput,
  DisassociateMemberCommandOutput,
} from "./commands/DisassociateMemberCommand";
import { EnableCommand, EnableCommandInput, EnableCommandOutput } from "./commands/EnableCommand";
import {
  EnableDelegatedAdminAccountCommand,
  EnableDelegatedAdminAccountCommandInput,
  EnableDelegatedAdminAccountCommandOutput,
} from "./commands/EnableDelegatedAdminAccountCommand";
import {
  GetConfigurationCommand,
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput,
} from "./commands/GetConfigurationCommand";
import {
  GetDelegatedAdminAccountCommand,
  GetDelegatedAdminAccountCommandInput,
  GetDelegatedAdminAccountCommandOutput,
} from "./commands/GetDelegatedAdminAccountCommand";
import {
  GetEc2DeepInspectionConfigurationCommand,
  GetEc2DeepInspectionConfigurationCommandInput,
  GetEc2DeepInspectionConfigurationCommandOutput,
} from "./commands/GetEc2DeepInspectionConfigurationCommand";
import {
  GetEncryptionKeyCommand,
  GetEncryptionKeyCommandInput,
  GetEncryptionKeyCommandOutput,
} from "./commands/GetEncryptionKeyCommand";
import {
  GetFindingsReportStatusCommand,
  GetFindingsReportStatusCommandInput,
  GetFindingsReportStatusCommandOutput,
} from "./commands/GetFindingsReportStatusCommand";
import { GetMemberCommand, GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import {
  GetSbomExportCommand,
  GetSbomExportCommandInput,
  GetSbomExportCommandOutput,
} from "./commands/GetSbomExportCommand";
import {
  ListAccountPermissionsCommand,
  ListAccountPermissionsCommandInput,
  ListAccountPermissionsCommandOutput,
} from "./commands/ListAccountPermissionsCommand";
import {
  ListCoverageCommand,
  ListCoverageCommandInput,
  ListCoverageCommandOutput,
} from "./commands/ListCoverageCommand";
import {
  ListCoverageStatisticsCommand,
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput,
} from "./commands/ListCoverageStatisticsCommand";
import {
  ListDelegatedAdminAccountsCommand,
  ListDelegatedAdminAccountsCommandInput,
  ListDelegatedAdminAccountsCommandOutput,
} from "./commands/ListDelegatedAdminAccountsCommand";
import { ListFiltersCommand, ListFiltersCommandInput, ListFiltersCommandOutput } from "./commands/ListFiltersCommand";
import {
  ListFindingAggregationsCommand,
  ListFindingAggregationsCommandInput,
  ListFindingAggregationsCommandOutput,
} from "./commands/ListFindingAggregationsCommand";
import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "./commands/ListFindingsCommand";
import { ListMembersCommand, ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListUsageTotalsCommand,
  ListUsageTotalsCommandInput,
  ListUsageTotalsCommandOutput,
} from "./commands/ListUsageTotalsCommand";
import {
  ResetEncryptionKeyCommand,
  ResetEncryptionKeyCommandInput,
  ResetEncryptionKeyCommandOutput,
} from "./commands/ResetEncryptionKeyCommand";
import {
  SearchVulnerabilitiesCommand,
  SearchVulnerabilitiesCommandInput,
  SearchVulnerabilitiesCommandOutput,
} from "./commands/SearchVulnerabilitiesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConfigurationCommand,
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "./commands/UpdateConfigurationCommand";
import {
  UpdateEc2DeepInspectionConfigurationCommand,
  UpdateEc2DeepInspectionConfigurationCommandInput,
  UpdateEc2DeepInspectionConfigurationCommandOutput,
} from "./commands/UpdateEc2DeepInspectionConfigurationCommand";
import {
  UpdateEncryptionKeyCommand,
  UpdateEncryptionKeyCommandInput,
  UpdateEncryptionKeyCommandOutput,
} from "./commands/UpdateEncryptionKeyCommand";
import {
  UpdateFilterCommand,
  UpdateFilterCommandInput,
  UpdateFilterCommandOutput,
} from "./commands/UpdateFilterCommand";
import {
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "./commands/UpdateOrganizationConfigurationCommand";
import {
  UpdateOrgEc2DeepInspectionConfigurationCommand,
  UpdateOrgEc2DeepInspectionConfigurationCommandInput,
  UpdateOrgEc2DeepInspectionConfigurationCommandOutput,
} from "./commands/UpdateOrgEc2DeepInspectionConfigurationCommand";
import { Inspector2Client, Inspector2ClientConfig } from "./Inspector2Client";

const commands = {
  AssociateMemberCommand,
  BatchGetAccountStatusCommand,
  BatchGetCodeSnippetCommand,
  BatchGetFindingDetailsCommand,
  BatchGetFreeTrialInfoCommand,
  BatchGetMemberEc2DeepInspectionStatusCommand,
  BatchUpdateMemberEc2DeepInspectionStatusCommand,
  CancelFindingsReportCommand,
  CancelSbomExportCommand,
  CreateFilterCommand,
  CreateFindingsReportCommand,
  CreateSbomExportCommand,
  DeleteFilterCommand,
  DescribeOrganizationConfigurationCommand,
  DisableCommand,
  DisableDelegatedAdminAccountCommand,
  DisassociateMemberCommand,
  EnableCommand,
  EnableDelegatedAdminAccountCommand,
  GetConfigurationCommand,
  GetDelegatedAdminAccountCommand,
  GetEc2DeepInspectionConfigurationCommand,
  GetEncryptionKeyCommand,
  GetFindingsReportStatusCommand,
  GetMemberCommand,
  GetSbomExportCommand,
  ListAccountPermissionsCommand,
  ListCoverageCommand,
  ListCoverageStatisticsCommand,
  ListDelegatedAdminAccountsCommand,
  ListFiltersCommand,
  ListFindingAggregationsCommand,
  ListFindingsCommand,
  ListMembersCommand,
  ListTagsForResourceCommand,
  ListUsageTotalsCommand,
  ResetEncryptionKeyCommand,
  SearchVulnerabilitiesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConfigurationCommand,
  UpdateEc2DeepInspectionConfigurationCommand,
  UpdateEncryptionKeyCommand,
  UpdateFilterCommand,
  UpdateOrganizationConfigurationCommand,
  UpdateOrgEc2DeepInspectionConfigurationCommand,
};

export interface Inspector2 {
  /**
   * @see {@link AssociateMemberCommand}
   */
  associateMember(
    args: AssociateMemberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMemberCommandOutput>;
  associateMember(args: AssociateMemberCommandInput, cb: (err: any, data?: AssociateMemberCommandOutput) => void): void;
  associateMember(
    args: AssociateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetAccountStatusCommand}
   */
  batchGetAccountStatus(
    args: BatchGetAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetAccountStatusCommandOutput>;
  batchGetAccountStatus(
    args: BatchGetAccountStatusCommandInput,
    cb: (err: any, data?: BatchGetAccountStatusCommandOutput) => void
  ): void;
  batchGetAccountStatus(
    args: BatchGetAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetAccountStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetCodeSnippetCommand}
   */
  batchGetCodeSnippet(
    args: BatchGetCodeSnippetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCodeSnippetCommandOutput>;
  batchGetCodeSnippet(
    args: BatchGetCodeSnippetCommandInput,
    cb: (err: any, data?: BatchGetCodeSnippetCommandOutput) => void
  ): void;
  batchGetCodeSnippet(
    args: BatchGetCodeSnippetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCodeSnippetCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetFindingDetailsCommand}
   */
  batchGetFindingDetails(
    args: BatchGetFindingDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetFindingDetailsCommandOutput>;
  batchGetFindingDetails(
    args: BatchGetFindingDetailsCommandInput,
    cb: (err: any, data?: BatchGetFindingDetailsCommandOutput) => void
  ): void;
  batchGetFindingDetails(
    args: BatchGetFindingDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetFindingDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetFreeTrialInfoCommand}
   */
  batchGetFreeTrialInfo(
    args: BatchGetFreeTrialInfoCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetFreeTrialInfoCommandOutput>;
  batchGetFreeTrialInfo(
    args: BatchGetFreeTrialInfoCommandInput,
    cb: (err: any, data?: BatchGetFreeTrialInfoCommandOutput) => void
  ): void;
  batchGetFreeTrialInfo(
    args: BatchGetFreeTrialInfoCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetFreeTrialInfoCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetMemberEc2DeepInspectionStatusCommand}
   */
  batchGetMemberEc2DeepInspectionStatus(
    args: BatchGetMemberEc2DeepInspectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetMemberEc2DeepInspectionStatusCommandOutput>;
  batchGetMemberEc2DeepInspectionStatus(
    args: BatchGetMemberEc2DeepInspectionStatusCommandInput,
    cb: (err: any, data?: BatchGetMemberEc2DeepInspectionStatusCommandOutput) => void
  ): void;
  batchGetMemberEc2DeepInspectionStatus(
    args: BatchGetMemberEc2DeepInspectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetMemberEc2DeepInspectionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateMemberEc2DeepInspectionStatusCommand}
   */
  batchUpdateMemberEc2DeepInspectionStatus(
    args: BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateMemberEc2DeepInspectionStatusCommandOutput>;
  batchUpdateMemberEc2DeepInspectionStatus(
    args: BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
    cb: (err: any, data?: BatchUpdateMemberEc2DeepInspectionStatusCommandOutput) => void
  ): void;
  batchUpdateMemberEc2DeepInspectionStatus(
    args: BatchUpdateMemberEc2DeepInspectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateMemberEc2DeepInspectionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelFindingsReportCommand}
   */
  cancelFindingsReport(
    args: CancelFindingsReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelFindingsReportCommandOutput>;
  cancelFindingsReport(
    args: CancelFindingsReportCommandInput,
    cb: (err: any, data?: CancelFindingsReportCommandOutput) => void
  ): void;
  cancelFindingsReport(
    args: CancelFindingsReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelFindingsReportCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelSbomExportCommand}
   */
  cancelSbomExport(
    args: CancelSbomExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelSbomExportCommandOutput>;
  cancelSbomExport(
    args: CancelSbomExportCommandInput,
    cb: (err: any, data?: CancelSbomExportCommandOutput) => void
  ): void;
  cancelSbomExport(
    args: CancelSbomExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSbomExportCommandOutput) => void
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
   * @see {@link CreateFindingsReportCommand}
   */
  createFindingsReport(
    args: CreateFindingsReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFindingsReportCommandOutput>;
  createFindingsReport(
    args: CreateFindingsReportCommandInput,
    cb: (err: any, data?: CreateFindingsReportCommandOutput) => void
  ): void;
  createFindingsReport(
    args: CreateFindingsReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFindingsReportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSbomExportCommand}
   */
  createSbomExport(
    args: CreateSbomExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSbomExportCommandOutput>;
  createSbomExport(
    args: CreateSbomExportCommandInput,
    cb: (err: any, data?: CreateSbomExportCommandOutput) => void
  ): void;
  createSbomExport(
    args: CreateSbomExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSbomExportCommandOutput) => void
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
   * @see {@link DisableCommand}
   */
  disable(args: DisableCommandInput, options?: __HttpHandlerOptions): Promise<DisableCommandOutput>;
  disable(args: DisableCommandInput, cb: (err: any, data?: DisableCommandOutput) => void): void;
  disable(
    args: DisableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableDelegatedAdminAccountCommand}
   */
  disableDelegatedAdminAccount(
    args: DisableDelegatedAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableDelegatedAdminAccountCommandOutput>;
  disableDelegatedAdminAccount(
    args: DisableDelegatedAdminAccountCommandInput,
    cb: (err: any, data?: DisableDelegatedAdminAccountCommandOutput) => void
  ): void;
  disableDelegatedAdminAccount(
    args: DisableDelegatedAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableDelegatedAdminAccountCommandOutput) => void
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
   * @see {@link EnableCommand}
   */
  enable(args: EnableCommandInput, options?: __HttpHandlerOptions): Promise<EnableCommandOutput>;
  enable(args: EnableCommandInput, cb: (err: any, data?: EnableCommandOutput) => void): void;
  enable(
    args: EnableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableDelegatedAdminAccountCommand}
   */
  enableDelegatedAdminAccount(
    args: EnableDelegatedAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableDelegatedAdminAccountCommandOutput>;
  enableDelegatedAdminAccount(
    args: EnableDelegatedAdminAccountCommandInput,
    cb: (err: any, data?: EnableDelegatedAdminAccountCommandOutput) => void
  ): void;
  enableDelegatedAdminAccount(
    args: EnableDelegatedAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableDelegatedAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationCommand}
   */
  getConfiguration(
    args: GetConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationCommandOutput>;
  getConfiguration(
    args: GetConfigurationCommandInput,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  getConfiguration(
    args: GetConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDelegatedAdminAccountCommand}
   */
  getDelegatedAdminAccount(
    args: GetDelegatedAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDelegatedAdminAccountCommandOutput>;
  getDelegatedAdminAccount(
    args: GetDelegatedAdminAccountCommandInput,
    cb: (err: any, data?: GetDelegatedAdminAccountCommandOutput) => void
  ): void;
  getDelegatedAdminAccount(
    args: GetDelegatedAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDelegatedAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEc2DeepInspectionConfigurationCommand}
   */
  getEc2DeepInspectionConfiguration(
    args: GetEc2DeepInspectionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEc2DeepInspectionConfigurationCommandOutput>;
  getEc2DeepInspectionConfiguration(
    args: GetEc2DeepInspectionConfigurationCommandInput,
    cb: (err: any, data?: GetEc2DeepInspectionConfigurationCommandOutput) => void
  ): void;
  getEc2DeepInspectionConfiguration(
    args: GetEc2DeepInspectionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEc2DeepInspectionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEncryptionKeyCommand}
   */
  getEncryptionKey(
    args: GetEncryptionKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEncryptionKeyCommandOutput>;
  getEncryptionKey(
    args: GetEncryptionKeyCommandInput,
    cb: (err: any, data?: GetEncryptionKeyCommandOutput) => void
  ): void;
  getEncryptionKey(
    args: GetEncryptionKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEncryptionKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingsReportStatusCommand}
   */
  getFindingsReportStatus(
    args: GetFindingsReportStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingsReportStatusCommandOutput>;
  getFindingsReportStatus(
    args: GetFindingsReportStatusCommandInput,
    cb: (err: any, data?: GetFindingsReportStatusCommandOutput) => void
  ): void;
  getFindingsReportStatus(
    args: GetFindingsReportStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingsReportStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMemberCommand}
   */
  getMember(args: GetMemberCommandInput, options?: __HttpHandlerOptions): Promise<GetMemberCommandOutput>;
  getMember(args: GetMemberCommandInput, cb: (err: any, data?: GetMemberCommandOutput) => void): void;
  getMember(
    args: GetMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSbomExportCommand}
   */
  getSbomExport(args: GetSbomExportCommandInput, options?: __HttpHandlerOptions): Promise<GetSbomExportCommandOutput>;
  getSbomExport(args: GetSbomExportCommandInput, cb: (err: any, data?: GetSbomExportCommandOutput) => void): void;
  getSbomExport(
    args: GetSbomExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSbomExportCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountPermissionsCommand}
   */
  listAccountPermissions(
    args: ListAccountPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountPermissionsCommandOutput>;
  listAccountPermissions(
    args: ListAccountPermissionsCommandInput,
    cb: (err: any, data?: ListAccountPermissionsCommandOutput) => void
  ): void;
  listAccountPermissions(
    args: ListAccountPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountPermissionsCommandOutput) => void
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
   * @see {@link ListCoverageStatisticsCommand}
   */
  listCoverageStatistics(
    args: ListCoverageStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCoverageStatisticsCommandOutput>;
  listCoverageStatistics(
    args: ListCoverageStatisticsCommandInput,
    cb: (err: any, data?: ListCoverageStatisticsCommandOutput) => void
  ): void;
  listCoverageStatistics(
    args: ListCoverageStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCoverageStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDelegatedAdminAccountsCommand}
   */
  listDelegatedAdminAccounts(
    args: ListDelegatedAdminAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDelegatedAdminAccountsCommandOutput>;
  listDelegatedAdminAccounts(
    args: ListDelegatedAdminAccountsCommandInput,
    cb: (err: any, data?: ListDelegatedAdminAccountsCommandOutput) => void
  ): void;
  listDelegatedAdminAccounts(
    args: ListDelegatedAdminAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDelegatedAdminAccountsCommandOutput) => void
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
   * @see {@link ListFindingAggregationsCommand}
   */
  listFindingAggregations(
    args: ListFindingAggregationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingAggregationsCommandOutput>;
  listFindingAggregations(
    args: ListFindingAggregationsCommandInput,
    cb: (err: any, data?: ListFindingAggregationsCommandOutput) => void
  ): void;
  listFindingAggregations(
    args: ListFindingAggregationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingAggregationsCommandOutput) => void
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
   * @see {@link ListUsageTotalsCommand}
   */
  listUsageTotals(
    args: ListUsageTotalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsageTotalsCommandOutput>;
  listUsageTotals(args: ListUsageTotalsCommandInput, cb: (err: any, data?: ListUsageTotalsCommandOutput) => void): void;
  listUsageTotals(
    args: ListUsageTotalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsageTotalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetEncryptionKeyCommand}
   */
  resetEncryptionKey(
    args: ResetEncryptionKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetEncryptionKeyCommandOutput>;
  resetEncryptionKey(
    args: ResetEncryptionKeyCommandInput,
    cb: (err: any, data?: ResetEncryptionKeyCommandOutput) => void
  ): void;
  resetEncryptionKey(
    args: ResetEncryptionKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetEncryptionKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchVulnerabilitiesCommand}
   */
  searchVulnerabilities(
    args: SearchVulnerabilitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchVulnerabilitiesCommandOutput>;
  searchVulnerabilities(
    args: SearchVulnerabilitiesCommandInput,
    cb: (err: any, data?: SearchVulnerabilitiesCommandOutput) => void
  ): void;
  searchVulnerabilities(
    args: SearchVulnerabilitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchVulnerabilitiesCommandOutput) => void
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
   * @see {@link UpdateConfigurationCommand}
   */
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationCommandOutput>;
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;
  updateConfiguration(
    args: UpdateConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEc2DeepInspectionConfigurationCommand}
   */
  updateEc2DeepInspectionConfiguration(
    args: UpdateEc2DeepInspectionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEc2DeepInspectionConfigurationCommandOutput>;
  updateEc2DeepInspectionConfiguration(
    args: UpdateEc2DeepInspectionConfigurationCommandInput,
    cb: (err: any, data?: UpdateEc2DeepInspectionConfigurationCommandOutput) => void
  ): void;
  updateEc2DeepInspectionConfiguration(
    args: UpdateEc2DeepInspectionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEc2DeepInspectionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEncryptionKeyCommand}
   */
  updateEncryptionKey(
    args: UpdateEncryptionKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEncryptionKeyCommandOutput>;
  updateEncryptionKey(
    args: UpdateEncryptionKeyCommandInput,
    cb: (err: any, data?: UpdateEncryptionKeyCommandOutput) => void
  ): void;
  updateEncryptionKey(
    args: UpdateEncryptionKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEncryptionKeyCommandOutput) => void
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
   * @see {@link UpdateOrgEc2DeepInspectionConfigurationCommand}
   */
  updateOrgEc2DeepInspectionConfiguration(
    args: UpdateOrgEc2DeepInspectionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOrgEc2DeepInspectionConfigurationCommandOutput>;
  updateOrgEc2DeepInspectionConfiguration(
    args: UpdateOrgEc2DeepInspectionConfigurationCommandInput,
    cb: (err: any, data?: UpdateOrgEc2DeepInspectionConfigurationCommandOutput) => void
  ): void;
  updateOrgEc2DeepInspectionConfiguration(
    args: UpdateOrgEc2DeepInspectionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrgEc2DeepInspectionConfigurationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Inspector is a vulnerability discovery service that automates continuous scanning for
 *          security vulnerabilities within your Amazon EC2, Amazon ECR, and Amazon Web Services Lambda environments.</p>
 */
export class Inspector2 extends Inspector2Client implements Inspector2 {}
createAggregatedClient(commands, Inspector2);
