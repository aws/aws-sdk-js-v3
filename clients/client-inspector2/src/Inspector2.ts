// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateMemberCommand,
  AssociateMemberCommandInput,
  AssociateMemberCommandOutput,
} from "./commands/AssociateMemberCommand";
import {
  BatchAssociateCodeSecurityScanConfigurationCommand,
  BatchAssociateCodeSecurityScanConfigurationCommandInput,
  BatchAssociateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/BatchAssociateCodeSecurityScanConfigurationCommand";
import {
  BatchDisassociateCodeSecurityScanConfigurationCommand,
  BatchDisassociateCodeSecurityScanConfigurationCommandInput,
  BatchDisassociateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/BatchDisassociateCodeSecurityScanConfigurationCommand";
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
  CreateCisScanConfigurationCommand,
  CreateCisScanConfigurationCommandInput,
  CreateCisScanConfigurationCommandOutput,
} from "./commands/CreateCisScanConfigurationCommand";
import {
  CreateCodeSecurityIntegrationCommand,
  CreateCodeSecurityIntegrationCommandInput,
  CreateCodeSecurityIntegrationCommandOutput,
} from "./commands/CreateCodeSecurityIntegrationCommand";
import {
  CreateCodeSecurityScanConfigurationCommand,
  CreateCodeSecurityScanConfigurationCommandInput,
  CreateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/CreateCodeSecurityScanConfigurationCommand";
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
  DeleteCisScanConfigurationCommand,
  DeleteCisScanConfigurationCommandInput,
  DeleteCisScanConfigurationCommandOutput,
} from "./commands/DeleteCisScanConfigurationCommand";
import {
  DeleteCodeSecurityIntegrationCommand,
  DeleteCodeSecurityIntegrationCommandInput,
  DeleteCodeSecurityIntegrationCommandOutput,
} from "./commands/DeleteCodeSecurityIntegrationCommand";
import {
  DeleteCodeSecurityScanConfigurationCommand,
  DeleteCodeSecurityScanConfigurationCommandInput,
  DeleteCodeSecurityScanConfigurationCommandOutput,
} from "./commands/DeleteCodeSecurityScanConfigurationCommand";
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
  GetCisScanReportCommand,
  GetCisScanReportCommandInput,
  GetCisScanReportCommandOutput,
} from "./commands/GetCisScanReportCommand";
import {
  GetCisScanResultDetailsCommand,
  GetCisScanResultDetailsCommandInput,
  GetCisScanResultDetailsCommandOutput,
} from "./commands/GetCisScanResultDetailsCommand";
import {
  GetClustersForImageCommand,
  GetClustersForImageCommandInput,
  GetClustersForImageCommandOutput,
} from "./commands/GetClustersForImageCommand";
import {
  GetCodeSecurityIntegrationCommand,
  GetCodeSecurityIntegrationCommandInput,
  GetCodeSecurityIntegrationCommandOutput,
} from "./commands/GetCodeSecurityIntegrationCommand";
import {
  GetCodeSecurityScanCommand,
  GetCodeSecurityScanCommandInput,
  GetCodeSecurityScanCommandOutput,
} from "./commands/GetCodeSecurityScanCommand";
import {
  GetCodeSecurityScanConfigurationCommand,
  GetCodeSecurityScanConfigurationCommandInput,
  GetCodeSecurityScanConfigurationCommandOutput,
} from "./commands/GetCodeSecurityScanConfigurationCommand";
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
  ListCisScanConfigurationsCommand,
  ListCisScanConfigurationsCommandInput,
  ListCisScanConfigurationsCommandOutput,
} from "./commands/ListCisScanConfigurationsCommand";
import {
  ListCisScanResultsAggregatedByChecksCommand,
  ListCisScanResultsAggregatedByChecksCommandInput,
  ListCisScanResultsAggregatedByChecksCommandOutput,
} from "./commands/ListCisScanResultsAggregatedByChecksCommand";
import {
  ListCisScanResultsAggregatedByTargetResourceCommand,
  ListCisScanResultsAggregatedByTargetResourceCommandInput,
  ListCisScanResultsAggregatedByTargetResourceCommandOutput,
} from "./commands/ListCisScanResultsAggregatedByTargetResourceCommand";
import {
  ListCisScansCommand,
  ListCisScansCommandInput,
  ListCisScansCommandOutput,
} from "./commands/ListCisScansCommand";
import {
  ListCodeSecurityIntegrationsCommand,
  ListCodeSecurityIntegrationsCommandInput,
  ListCodeSecurityIntegrationsCommandOutput,
} from "./commands/ListCodeSecurityIntegrationsCommand";
import {
  ListCodeSecurityScanConfigurationAssociationsCommand,
  ListCodeSecurityScanConfigurationAssociationsCommandInput,
  ListCodeSecurityScanConfigurationAssociationsCommandOutput,
} from "./commands/ListCodeSecurityScanConfigurationAssociationsCommand";
import {
  ListCodeSecurityScanConfigurationsCommand,
  ListCodeSecurityScanConfigurationsCommandInput,
  ListCodeSecurityScanConfigurationsCommandOutput,
} from "./commands/ListCodeSecurityScanConfigurationsCommand";
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
import {
  SendCisSessionHealthCommand,
  SendCisSessionHealthCommandInput,
  SendCisSessionHealthCommandOutput,
} from "./commands/SendCisSessionHealthCommand";
import {
  SendCisSessionTelemetryCommand,
  SendCisSessionTelemetryCommandInput,
  SendCisSessionTelemetryCommandOutput,
} from "./commands/SendCisSessionTelemetryCommand";
import {
  StartCisSessionCommand,
  StartCisSessionCommandInput,
  StartCisSessionCommandOutput,
} from "./commands/StartCisSessionCommand";
import {
  StartCodeSecurityScanCommand,
  StartCodeSecurityScanCommandInput,
  StartCodeSecurityScanCommandOutput,
} from "./commands/StartCodeSecurityScanCommand";
import {
  StopCisSessionCommand,
  StopCisSessionCommandInput,
  StopCisSessionCommandOutput,
} from "./commands/StopCisSessionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCisScanConfigurationCommand,
  UpdateCisScanConfigurationCommandInput,
  UpdateCisScanConfigurationCommandOutput,
} from "./commands/UpdateCisScanConfigurationCommand";
import {
  UpdateCodeSecurityIntegrationCommand,
  UpdateCodeSecurityIntegrationCommandInput,
  UpdateCodeSecurityIntegrationCommandOutput,
} from "./commands/UpdateCodeSecurityIntegrationCommand";
import {
  UpdateCodeSecurityScanConfigurationCommand,
  UpdateCodeSecurityScanConfigurationCommandInput,
  UpdateCodeSecurityScanConfigurationCommandOutput,
} from "./commands/UpdateCodeSecurityScanConfigurationCommand";
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
import { Inspector2Client } from "./Inspector2Client";

const commands = {
  AssociateMemberCommand,
  BatchAssociateCodeSecurityScanConfigurationCommand,
  BatchDisassociateCodeSecurityScanConfigurationCommand,
  BatchGetAccountStatusCommand,
  BatchGetCodeSnippetCommand,
  BatchGetFindingDetailsCommand,
  BatchGetFreeTrialInfoCommand,
  BatchGetMemberEc2DeepInspectionStatusCommand,
  BatchUpdateMemberEc2DeepInspectionStatusCommand,
  CancelFindingsReportCommand,
  CancelSbomExportCommand,
  CreateCisScanConfigurationCommand,
  CreateCodeSecurityIntegrationCommand,
  CreateCodeSecurityScanConfigurationCommand,
  CreateFilterCommand,
  CreateFindingsReportCommand,
  CreateSbomExportCommand,
  DeleteCisScanConfigurationCommand,
  DeleteCodeSecurityIntegrationCommand,
  DeleteCodeSecurityScanConfigurationCommand,
  DeleteFilterCommand,
  DescribeOrganizationConfigurationCommand,
  DisableCommand,
  DisableDelegatedAdminAccountCommand,
  DisassociateMemberCommand,
  EnableCommand,
  EnableDelegatedAdminAccountCommand,
  GetCisScanReportCommand,
  GetCisScanResultDetailsCommand,
  GetClustersForImageCommand,
  GetCodeSecurityIntegrationCommand,
  GetCodeSecurityScanCommand,
  GetCodeSecurityScanConfigurationCommand,
  GetConfigurationCommand,
  GetDelegatedAdminAccountCommand,
  GetEc2DeepInspectionConfigurationCommand,
  GetEncryptionKeyCommand,
  GetFindingsReportStatusCommand,
  GetMemberCommand,
  GetSbomExportCommand,
  ListAccountPermissionsCommand,
  ListCisScanConfigurationsCommand,
  ListCisScanResultsAggregatedByChecksCommand,
  ListCisScanResultsAggregatedByTargetResourceCommand,
  ListCisScansCommand,
  ListCodeSecurityIntegrationsCommand,
  ListCodeSecurityScanConfigurationAssociationsCommand,
  ListCodeSecurityScanConfigurationsCommand,
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
  SendCisSessionHealthCommand,
  SendCisSessionTelemetryCommand,
  StartCisSessionCommand,
  StartCodeSecurityScanCommand,
  StopCisSessionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCisScanConfigurationCommand,
  UpdateCodeSecurityIntegrationCommand,
  UpdateCodeSecurityScanConfigurationCommand,
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
  associateMember(
    args: AssociateMemberCommandInput,
    cb: (err: any, data?: AssociateMemberCommandOutput) => void
  ): void;
  associateMember(
    args: AssociateMemberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMemberCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateCodeSecurityScanConfigurationCommand}
   */
  batchAssociateCodeSecurityScanConfiguration(
    args: BatchAssociateCodeSecurityScanConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateCodeSecurityScanConfigurationCommandOutput>;
  batchAssociateCodeSecurityScanConfiguration(
    args: BatchAssociateCodeSecurityScanConfigurationCommandInput,
    cb: (err: any, data?: BatchAssociateCodeSecurityScanConfigurationCommandOutput) => void
  ): void;
  batchAssociateCodeSecurityScanConfiguration(
    args: BatchAssociateCodeSecurityScanConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateCodeSecurityScanConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateCodeSecurityScanConfigurationCommand}
   */
  batchDisassociateCodeSecurityScanConfiguration(
    args: BatchDisassociateCodeSecurityScanConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateCodeSecurityScanConfigurationCommandOutput>;
  batchDisassociateCodeSecurityScanConfiguration(
    args: BatchDisassociateCodeSecurityScanConfigurationCommandInput,
    cb: (err: any, data?: BatchDisassociateCodeSecurityScanConfigurationCommandOutput) => void
  ): void;
  batchDisassociateCodeSecurityScanConfiguration(
    args: BatchDisassociateCodeSecurityScanConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateCodeSecurityScanConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetAccountStatusCommand}
   */
  batchGetAccountStatus(): Promise<BatchGetAccountStatusCommandOutput>;
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
  batchGetMemberEc2DeepInspectionStatus(): Promise<BatchGetMemberEc2DeepInspectionStatusCommandOutput>;
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
   * @see {@link CreateCisScanConfigurationCommand}
   */
  createCisScanConfiguration(
    args: CreateCisScanConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCisScanConfigurationCommandOutput>;
  createCisScanConfiguration(
    args: CreateCisScanConfigurationCommandInput,
    cb: (err: any, data?: CreateCisScanConfigurationCommandOutput) => void
  ): void;
  createCisScanConfiguration(
    args: CreateCisScanConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCisScanConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCodeSecurityIntegrationCommand}
   */
  createCodeSecurityIntegration(
    args: CreateCodeSecurityIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCodeSecurityIntegrationCommandOutput>;
  createCodeSecurityIntegration(
    args: CreateCodeSecurityIntegrationCommandInput,
    cb: (err: any, data?: CreateCodeSecurityIntegrationCommandOutput) => void
  ): void;
  createCodeSecurityIntegration(
    args: CreateCodeSecurityIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCodeSecurityIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCodeSecurityScanConfigurationCommand}
   */
  createCodeSecurityScanConfiguration(
    args: CreateCodeSecurityScanConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCodeSecurityScanConfigurationCommandOutput>;
  createCodeSecurityScanConfiguration(
    args: CreateCodeSecurityScanConfigurationCommandInput,
    cb: (err: any, data?: CreateCodeSecurityScanConfigurationCommandOutput) => void
  ): void;
  createCodeSecurityScanConfiguration(
    args: CreateCodeSecurityScanConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCodeSecurityScanConfigurationCommandOutput) => void
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
   * @see {@link DeleteCisScanConfigurationCommand}
   */
  deleteCisScanConfiguration(
    args: DeleteCisScanConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCisScanConfigurationCommandOutput>;
  deleteCisScanConfiguration(
    args: DeleteCisScanConfigurationCommandInput,
    cb: (err: any, data?: DeleteCisScanConfigurationCommandOutput) => void
  ): void;
  deleteCisScanConfiguration(
    args: DeleteCisScanConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCisScanConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCodeSecurityIntegrationCommand}
   */
  deleteCodeSecurityIntegration(
    args: DeleteCodeSecurityIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCodeSecurityIntegrationCommandOutput>;
  deleteCodeSecurityIntegration(
    args: DeleteCodeSecurityIntegrationCommandInput,
    cb: (err: any, data?: DeleteCodeSecurityIntegrationCommandOutput) => void
  ): void;
  deleteCodeSecurityIntegration(
    args: DeleteCodeSecurityIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCodeSecurityIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCodeSecurityScanConfigurationCommand}
   */
  deleteCodeSecurityScanConfiguration(
    args: DeleteCodeSecurityScanConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCodeSecurityScanConfigurationCommandOutput>;
  deleteCodeSecurityScanConfiguration(
    args: DeleteCodeSecurityScanConfigurationCommandInput,
    cb: (err: any, data?: DeleteCodeSecurityScanConfigurationCommandOutput) => void
  ): void;
  deleteCodeSecurityScanConfiguration(
    args: DeleteCodeSecurityScanConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCodeSecurityScanConfigurationCommandOutput) => void
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
   * @see {@link DisableCommand}
   */
  disable(): Promise<DisableCommandOutput>;
  disable(
    args: DisableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableCommandOutput>;
  disable(
    args: DisableCommandInput,
    cb: (err: any, data?: DisableCommandOutput) => void
  ): void;
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
  enable(
    args: EnableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableCommandOutput>;
  enable(
    args: EnableCommandInput,
    cb: (err: any, data?: EnableCommandOutput) => void
  ): void;
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
   * @see {@link GetCisScanReportCommand}
   */
  getCisScanReport(
    args: GetCisScanReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCisScanReportCommandOutput>;
  getCisScanReport(
    args: GetCisScanReportCommandInput,
    cb: (err: any, data?: GetCisScanReportCommandOutput) => void
  ): void;
  getCisScanReport(
    args: GetCisScanReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCisScanReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCisScanResultDetailsCommand}
   */
  getCisScanResultDetails(
    args: GetCisScanResultDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCisScanResultDetailsCommandOutput>;
  getCisScanResultDetails(
    args: GetCisScanResultDetailsCommandInput,
    cb: (err: any, data?: GetCisScanResultDetailsCommandOutput) => void
  ): void;
  getCisScanResultDetails(
    args: GetCisScanResultDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCisScanResultDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetClustersForImageCommand}
   */
  getClustersForImage(
    args: GetClustersForImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClustersForImageCommandOutput>;
  getClustersForImage(
    args: GetClustersForImageCommandInput,
    cb: (err: any, data?: GetClustersForImageCommandOutput) => void
  ): void;
  getClustersForImage(
    args: GetClustersForImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClustersForImageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodeSecurityIntegrationCommand}
   */
  getCodeSecurityIntegration(
    args: GetCodeSecurityIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCodeSecurityIntegrationCommandOutput>;
  getCodeSecurityIntegration(
    args: GetCodeSecurityIntegrationCommandInput,
    cb: (err: any, data?: GetCodeSecurityIntegrationCommandOutput) => void
  ): void;
  getCodeSecurityIntegration(
    args: GetCodeSecurityIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCodeSecurityIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodeSecurityScanCommand}
   */
  getCodeSecurityScan(
    args: GetCodeSecurityScanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCodeSecurityScanCommandOutput>;
  getCodeSecurityScan(
    args: GetCodeSecurityScanCommandInput,
    cb: (err: any, data?: GetCodeSecurityScanCommandOutput) => void
  ): void;
  getCodeSecurityScan(
    args: GetCodeSecurityScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCodeSecurityScanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCodeSecurityScanConfigurationCommand}
   */
  getCodeSecurityScanConfiguration(
    args: GetCodeSecurityScanConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCodeSecurityScanConfigurationCommandOutput>;
  getCodeSecurityScanConfiguration(
    args: GetCodeSecurityScanConfigurationCommandInput,
    cb: (err: any, data?: GetCodeSecurityScanConfigurationCommandOutput) => void
  ): void;
  getCodeSecurityScanConfiguration(
    args: GetCodeSecurityScanConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCodeSecurityScanConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationCommand}
   */
  getConfiguration(): Promise<GetConfigurationCommandOutput>;
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
  getDelegatedAdminAccount(): Promise<GetDelegatedAdminAccountCommandOutput>;
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
  getEc2DeepInspectionConfiguration(): Promise<GetEc2DeepInspectionConfigurationCommandOutput>;
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
  getFindingsReportStatus(): Promise<GetFindingsReportStatusCommandOutput>;
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
   * @see {@link GetSbomExportCommand}
   */
  getSbomExport(
    args: GetSbomExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSbomExportCommandOutput>;
  getSbomExport(
    args: GetSbomExportCommandInput,
    cb: (err: any, data?: GetSbomExportCommandOutput) => void
  ): void;
  getSbomExport(
    args: GetSbomExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSbomExportCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountPermissionsCommand}
   */
  listAccountPermissions(): Promise<ListAccountPermissionsCommandOutput>;
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
   * @see {@link ListCisScanConfigurationsCommand}
   */
  listCisScanConfigurations(): Promise<ListCisScanConfigurationsCommandOutput>;
  listCisScanConfigurations(
    args: ListCisScanConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCisScanConfigurationsCommandOutput>;
  listCisScanConfigurations(
    args: ListCisScanConfigurationsCommandInput,
    cb: (err: any, data?: ListCisScanConfigurationsCommandOutput) => void
  ): void;
  listCisScanConfigurations(
    args: ListCisScanConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCisScanConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCisScanResultsAggregatedByChecksCommand}
   */
  listCisScanResultsAggregatedByChecks(
    args: ListCisScanResultsAggregatedByChecksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCisScanResultsAggregatedByChecksCommandOutput>;
  listCisScanResultsAggregatedByChecks(
    args: ListCisScanResultsAggregatedByChecksCommandInput,
    cb: (err: any, data?: ListCisScanResultsAggregatedByChecksCommandOutput) => void
  ): void;
  listCisScanResultsAggregatedByChecks(
    args: ListCisScanResultsAggregatedByChecksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCisScanResultsAggregatedByChecksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCisScanResultsAggregatedByTargetResourceCommand}
   */
  listCisScanResultsAggregatedByTargetResource(
    args: ListCisScanResultsAggregatedByTargetResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCisScanResultsAggregatedByTargetResourceCommandOutput>;
  listCisScanResultsAggregatedByTargetResource(
    args: ListCisScanResultsAggregatedByTargetResourceCommandInput,
    cb: (err: any, data?: ListCisScanResultsAggregatedByTargetResourceCommandOutput) => void
  ): void;
  listCisScanResultsAggregatedByTargetResource(
    args: ListCisScanResultsAggregatedByTargetResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCisScanResultsAggregatedByTargetResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCisScansCommand}
   */
  listCisScans(): Promise<ListCisScansCommandOutput>;
  listCisScans(
    args: ListCisScansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCisScansCommandOutput>;
  listCisScans(
    args: ListCisScansCommandInput,
    cb: (err: any, data?: ListCisScansCommandOutput) => void
  ): void;
  listCisScans(
    args: ListCisScansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCisScansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeSecurityIntegrationsCommand}
   */
  listCodeSecurityIntegrations(): Promise<ListCodeSecurityIntegrationsCommandOutput>;
  listCodeSecurityIntegrations(
    args: ListCodeSecurityIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodeSecurityIntegrationsCommandOutput>;
  listCodeSecurityIntegrations(
    args: ListCodeSecurityIntegrationsCommandInput,
    cb: (err: any, data?: ListCodeSecurityIntegrationsCommandOutput) => void
  ): void;
  listCodeSecurityIntegrations(
    args: ListCodeSecurityIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodeSecurityIntegrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeSecurityScanConfigurationAssociationsCommand}
   */
  listCodeSecurityScanConfigurationAssociations(
    args: ListCodeSecurityScanConfigurationAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodeSecurityScanConfigurationAssociationsCommandOutput>;
  listCodeSecurityScanConfigurationAssociations(
    args: ListCodeSecurityScanConfigurationAssociationsCommandInput,
    cb: (err: any, data?: ListCodeSecurityScanConfigurationAssociationsCommandOutput) => void
  ): void;
  listCodeSecurityScanConfigurationAssociations(
    args: ListCodeSecurityScanConfigurationAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodeSecurityScanConfigurationAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeSecurityScanConfigurationsCommand}
   */
  listCodeSecurityScanConfigurations(): Promise<ListCodeSecurityScanConfigurationsCommandOutput>;
  listCodeSecurityScanConfigurations(
    args: ListCodeSecurityScanConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodeSecurityScanConfigurationsCommandOutput>;
  listCodeSecurityScanConfigurations(
    args: ListCodeSecurityScanConfigurationsCommandInput,
    cb: (err: any, data?: ListCodeSecurityScanConfigurationsCommandOutput) => void
  ): void;
  listCodeSecurityScanConfigurations(
    args: ListCodeSecurityScanConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodeSecurityScanConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCoverageCommand}
   */
  listCoverage(): Promise<ListCoverageCommandOutput>;
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
   * @see {@link ListCoverageStatisticsCommand}
   */
  listCoverageStatistics(): Promise<ListCoverageStatisticsCommandOutput>;
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
  listDelegatedAdminAccounts(): Promise<ListDelegatedAdminAccountsCommandOutput>;
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
  listFilters(): Promise<ListFiltersCommandOutput>;
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
  listUsageTotals(): Promise<ListUsageTotalsCommandOutput>;
  listUsageTotals(
    args: ListUsageTotalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsageTotalsCommandOutput>;
  listUsageTotals(
    args: ListUsageTotalsCommandInput,
    cb: (err: any, data?: ListUsageTotalsCommandOutput) => void
  ): void;
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
   * @see {@link SendCisSessionHealthCommand}
   */
  sendCisSessionHealth(
    args: SendCisSessionHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendCisSessionHealthCommandOutput>;
  sendCisSessionHealth(
    args: SendCisSessionHealthCommandInput,
    cb: (err: any, data?: SendCisSessionHealthCommandOutput) => void
  ): void;
  sendCisSessionHealth(
    args: SendCisSessionHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendCisSessionHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link SendCisSessionTelemetryCommand}
   */
  sendCisSessionTelemetry(
    args: SendCisSessionTelemetryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendCisSessionTelemetryCommandOutput>;
  sendCisSessionTelemetry(
    args: SendCisSessionTelemetryCommandInput,
    cb: (err: any, data?: SendCisSessionTelemetryCommandOutput) => void
  ): void;
  sendCisSessionTelemetry(
    args: SendCisSessionTelemetryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendCisSessionTelemetryCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCisSessionCommand}
   */
  startCisSession(
    args: StartCisSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCisSessionCommandOutput>;
  startCisSession(
    args: StartCisSessionCommandInput,
    cb: (err: any, data?: StartCisSessionCommandOutput) => void
  ): void;
  startCisSession(
    args: StartCisSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCisSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCodeSecurityScanCommand}
   */
  startCodeSecurityScan(
    args: StartCodeSecurityScanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCodeSecurityScanCommandOutput>;
  startCodeSecurityScan(
    args: StartCodeSecurityScanCommandInput,
    cb: (err: any, data?: StartCodeSecurityScanCommandOutput) => void
  ): void;
  startCodeSecurityScan(
    args: StartCodeSecurityScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCodeSecurityScanCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCisSessionCommand}
   */
  stopCisSession(
    args: StopCisSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCisSessionCommandOutput>;
  stopCisSession(
    args: StopCisSessionCommandInput,
    cb: (err: any, data?: StopCisSessionCommandOutput) => void
  ): void;
  stopCisSession(
    args: StopCisSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCisSessionCommandOutput) => void
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
   * @see {@link UpdateCisScanConfigurationCommand}
   */
  updateCisScanConfiguration(
    args: UpdateCisScanConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCisScanConfigurationCommandOutput>;
  updateCisScanConfiguration(
    args: UpdateCisScanConfigurationCommandInput,
    cb: (err: any, data?: UpdateCisScanConfigurationCommandOutput) => void
  ): void;
  updateCisScanConfiguration(
    args: UpdateCisScanConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCisScanConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCodeSecurityIntegrationCommand}
   */
  updateCodeSecurityIntegration(
    args: UpdateCodeSecurityIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCodeSecurityIntegrationCommandOutput>;
  updateCodeSecurityIntegration(
    args: UpdateCodeSecurityIntegrationCommandInput,
    cb: (err: any, data?: UpdateCodeSecurityIntegrationCommandOutput) => void
  ): void;
  updateCodeSecurityIntegration(
    args: UpdateCodeSecurityIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCodeSecurityIntegrationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCodeSecurityScanConfigurationCommand}
   */
  updateCodeSecurityScanConfiguration(
    args: UpdateCodeSecurityScanConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCodeSecurityScanConfigurationCommandOutput>;
  updateCodeSecurityScanConfiguration(
    args: UpdateCodeSecurityScanConfigurationCommandInput,
    cb: (err: any, data?: UpdateCodeSecurityScanConfigurationCommandOutput) => void
  ): void;
  updateCodeSecurityScanConfiguration(
    args: UpdateCodeSecurityScanConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCodeSecurityScanConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationCommand}
   */
  updateConfiguration(): Promise<UpdateConfigurationCommandOutput>;
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
  updateEc2DeepInspectionConfiguration(): Promise<UpdateEc2DeepInspectionConfigurationCommandOutput>;
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
 * <p>Amazon Inspector is a vulnerability discovery service that automates continuous scanning for
 *          security vulnerabilities within your Amazon EC2, Amazon ECR, and Amazon Web Services Lambda environments.</p>
 * @public
 */
export class Inspector2 extends Inspector2Client implements Inspector2 {}
createAggregatedClient(commands, Inspector2);
