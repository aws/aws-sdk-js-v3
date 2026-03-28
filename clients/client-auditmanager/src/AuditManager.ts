// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { AuditManagerClient } from "./AuditManagerClient";
import {
  type AssociateAssessmentReportEvidenceFolderCommandInput,
  type AssociateAssessmentReportEvidenceFolderCommandOutput,
  AssociateAssessmentReportEvidenceFolderCommand,
} from "./commands/AssociateAssessmentReportEvidenceFolderCommand";
import {
  type BatchAssociateAssessmentReportEvidenceCommandInput,
  type BatchAssociateAssessmentReportEvidenceCommandOutput,
  BatchAssociateAssessmentReportEvidenceCommand,
} from "./commands/BatchAssociateAssessmentReportEvidenceCommand";
import {
  type BatchCreateDelegationByAssessmentCommandInput,
  type BatchCreateDelegationByAssessmentCommandOutput,
  BatchCreateDelegationByAssessmentCommand,
} from "./commands/BatchCreateDelegationByAssessmentCommand";
import {
  type BatchDeleteDelegationByAssessmentCommandInput,
  type BatchDeleteDelegationByAssessmentCommandOutput,
  BatchDeleteDelegationByAssessmentCommand,
} from "./commands/BatchDeleteDelegationByAssessmentCommand";
import {
  type BatchDisassociateAssessmentReportEvidenceCommandInput,
  type BatchDisassociateAssessmentReportEvidenceCommandOutput,
  BatchDisassociateAssessmentReportEvidenceCommand,
} from "./commands/BatchDisassociateAssessmentReportEvidenceCommand";
import {
  type BatchImportEvidenceToAssessmentControlCommandInput,
  type BatchImportEvidenceToAssessmentControlCommandOutput,
  BatchImportEvidenceToAssessmentControlCommand,
} from "./commands/BatchImportEvidenceToAssessmentControlCommand";
import {
  type CreateAssessmentCommandInput,
  type CreateAssessmentCommandOutput,
  CreateAssessmentCommand,
} from "./commands/CreateAssessmentCommand";
import {
  type CreateAssessmentFrameworkCommandInput,
  type CreateAssessmentFrameworkCommandOutput,
  CreateAssessmentFrameworkCommand,
} from "./commands/CreateAssessmentFrameworkCommand";
import {
  type CreateAssessmentReportCommandInput,
  type CreateAssessmentReportCommandOutput,
  CreateAssessmentReportCommand,
} from "./commands/CreateAssessmentReportCommand";
import {
  type CreateControlCommandInput,
  type CreateControlCommandOutput,
  CreateControlCommand,
} from "./commands/CreateControlCommand";
import {
  type DeleteAssessmentCommandInput,
  type DeleteAssessmentCommandOutput,
  DeleteAssessmentCommand,
} from "./commands/DeleteAssessmentCommand";
import {
  type DeleteAssessmentFrameworkCommandInput,
  type DeleteAssessmentFrameworkCommandOutput,
  DeleteAssessmentFrameworkCommand,
} from "./commands/DeleteAssessmentFrameworkCommand";
import {
  type DeleteAssessmentFrameworkShareCommandInput,
  type DeleteAssessmentFrameworkShareCommandOutput,
  DeleteAssessmentFrameworkShareCommand,
} from "./commands/DeleteAssessmentFrameworkShareCommand";
import {
  type DeleteAssessmentReportCommandInput,
  type DeleteAssessmentReportCommandOutput,
  DeleteAssessmentReportCommand,
} from "./commands/DeleteAssessmentReportCommand";
import {
  type DeleteControlCommandInput,
  type DeleteControlCommandOutput,
  DeleteControlCommand,
} from "./commands/DeleteControlCommand";
import {
  type DeregisterAccountCommandInput,
  type DeregisterAccountCommandOutput,
  DeregisterAccountCommand,
} from "./commands/DeregisterAccountCommand";
import {
  type DeregisterOrganizationAdminAccountCommandInput,
  type DeregisterOrganizationAdminAccountCommandOutput,
  DeregisterOrganizationAdminAccountCommand,
} from "./commands/DeregisterOrganizationAdminAccountCommand";
import {
  type DisassociateAssessmentReportEvidenceFolderCommandInput,
  type DisassociateAssessmentReportEvidenceFolderCommandOutput,
  DisassociateAssessmentReportEvidenceFolderCommand,
} from "./commands/DisassociateAssessmentReportEvidenceFolderCommand";
import {
  type GetAccountStatusCommandInput,
  type GetAccountStatusCommandOutput,
  GetAccountStatusCommand,
} from "./commands/GetAccountStatusCommand";
import {
  type GetAssessmentCommandInput,
  type GetAssessmentCommandOutput,
  GetAssessmentCommand,
} from "./commands/GetAssessmentCommand";
import {
  type GetAssessmentFrameworkCommandInput,
  type GetAssessmentFrameworkCommandOutput,
  GetAssessmentFrameworkCommand,
} from "./commands/GetAssessmentFrameworkCommand";
import {
  type GetAssessmentReportUrlCommandInput,
  type GetAssessmentReportUrlCommandOutput,
  GetAssessmentReportUrlCommand,
} from "./commands/GetAssessmentReportUrlCommand";
import {
  type GetChangeLogsCommandInput,
  type GetChangeLogsCommandOutput,
  GetChangeLogsCommand,
} from "./commands/GetChangeLogsCommand";
import {
  type GetControlCommandInput,
  type GetControlCommandOutput,
  GetControlCommand,
} from "./commands/GetControlCommand";
import {
  type GetDelegationsCommandInput,
  type GetDelegationsCommandOutput,
  GetDelegationsCommand,
} from "./commands/GetDelegationsCommand";
import {
  type GetEvidenceByEvidenceFolderCommandInput,
  type GetEvidenceByEvidenceFolderCommandOutput,
  GetEvidenceByEvidenceFolderCommand,
} from "./commands/GetEvidenceByEvidenceFolderCommand";
import {
  type GetEvidenceCommandInput,
  type GetEvidenceCommandOutput,
  GetEvidenceCommand,
} from "./commands/GetEvidenceCommand";
import {
  type GetEvidenceFileUploadUrlCommandInput,
  type GetEvidenceFileUploadUrlCommandOutput,
  GetEvidenceFileUploadUrlCommand,
} from "./commands/GetEvidenceFileUploadUrlCommand";
import {
  type GetEvidenceFolderCommandInput,
  type GetEvidenceFolderCommandOutput,
  GetEvidenceFolderCommand,
} from "./commands/GetEvidenceFolderCommand";
import {
  type GetEvidenceFoldersByAssessmentCommandInput,
  type GetEvidenceFoldersByAssessmentCommandOutput,
  GetEvidenceFoldersByAssessmentCommand,
} from "./commands/GetEvidenceFoldersByAssessmentCommand";
import {
  type GetEvidenceFoldersByAssessmentControlCommandInput,
  type GetEvidenceFoldersByAssessmentControlCommandOutput,
  GetEvidenceFoldersByAssessmentControlCommand,
} from "./commands/GetEvidenceFoldersByAssessmentControlCommand";
import {
  type GetInsightsByAssessmentCommandInput,
  type GetInsightsByAssessmentCommandOutput,
  GetInsightsByAssessmentCommand,
} from "./commands/GetInsightsByAssessmentCommand";
import {
  type GetInsightsCommandInput,
  type GetInsightsCommandOutput,
  GetInsightsCommand,
} from "./commands/GetInsightsCommand";
import {
  type GetOrganizationAdminAccountCommandInput,
  type GetOrganizationAdminAccountCommandOutput,
  GetOrganizationAdminAccountCommand,
} from "./commands/GetOrganizationAdminAccountCommand";
import {
  type GetServicesInScopeCommandInput,
  type GetServicesInScopeCommandOutput,
  GetServicesInScopeCommand,
} from "./commands/GetServicesInScopeCommand";
import {
  type GetSettingsCommandInput,
  type GetSettingsCommandOutput,
  GetSettingsCommand,
} from "./commands/GetSettingsCommand";
import {
  type ListAssessmentControlInsightsByControlDomainCommandInput,
  type ListAssessmentControlInsightsByControlDomainCommandOutput,
  ListAssessmentControlInsightsByControlDomainCommand,
} from "./commands/ListAssessmentControlInsightsByControlDomainCommand";
import {
  type ListAssessmentFrameworksCommandInput,
  type ListAssessmentFrameworksCommandOutput,
  ListAssessmentFrameworksCommand,
} from "./commands/ListAssessmentFrameworksCommand";
import {
  type ListAssessmentFrameworkShareRequestsCommandInput,
  type ListAssessmentFrameworkShareRequestsCommandOutput,
  ListAssessmentFrameworkShareRequestsCommand,
} from "./commands/ListAssessmentFrameworkShareRequestsCommand";
import {
  type ListAssessmentReportsCommandInput,
  type ListAssessmentReportsCommandOutput,
  ListAssessmentReportsCommand,
} from "./commands/ListAssessmentReportsCommand";
import {
  type ListAssessmentsCommandInput,
  type ListAssessmentsCommandOutput,
  ListAssessmentsCommand,
} from "./commands/ListAssessmentsCommand";
import {
  type ListControlDomainInsightsByAssessmentCommandInput,
  type ListControlDomainInsightsByAssessmentCommandOutput,
  ListControlDomainInsightsByAssessmentCommand,
} from "./commands/ListControlDomainInsightsByAssessmentCommand";
import {
  type ListControlDomainInsightsCommandInput,
  type ListControlDomainInsightsCommandOutput,
  ListControlDomainInsightsCommand,
} from "./commands/ListControlDomainInsightsCommand";
import {
  type ListControlInsightsByControlDomainCommandInput,
  type ListControlInsightsByControlDomainCommandOutput,
  ListControlInsightsByControlDomainCommand,
} from "./commands/ListControlInsightsByControlDomainCommand";
import {
  type ListControlsCommandInput,
  type ListControlsCommandOutput,
  ListControlsCommand,
} from "./commands/ListControlsCommand";
import {
  type ListKeywordsForDataSourceCommandInput,
  type ListKeywordsForDataSourceCommandOutput,
  ListKeywordsForDataSourceCommand,
} from "./commands/ListKeywordsForDataSourceCommand";
import {
  type ListNotificationsCommandInput,
  type ListNotificationsCommandOutput,
  ListNotificationsCommand,
} from "./commands/ListNotificationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type RegisterAccountCommandInput,
  type RegisterAccountCommandOutput,
  RegisterAccountCommand,
} from "./commands/RegisterAccountCommand";
import {
  type RegisterOrganizationAdminAccountCommandInput,
  type RegisterOrganizationAdminAccountCommandOutput,
  RegisterOrganizationAdminAccountCommand,
} from "./commands/RegisterOrganizationAdminAccountCommand";
import {
  type StartAssessmentFrameworkShareCommandInput,
  type StartAssessmentFrameworkShareCommandOutput,
  StartAssessmentFrameworkShareCommand,
} from "./commands/StartAssessmentFrameworkShareCommand";
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
  type UpdateAssessmentCommandInput,
  type UpdateAssessmentCommandOutput,
  UpdateAssessmentCommand,
} from "./commands/UpdateAssessmentCommand";
import {
  type UpdateAssessmentControlCommandInput,
  type UpdateAssessmentControlCommandOutput,
  UpdateAssessmentControlCommand,
} from "./commands/UpdateAssessmentControlCommand";
import {
  type UpdateAssessmentControlSetStatusCommandInput,
  type UpdateAssessmentControlSetStatusCommandOutput,
  UpdateAssessmentControlSetStatusCommand,
} from "./commands/UpdateAssessmentControlSetStatusCommand";
import {
  type UpdateAssessmentFrameworkCommandInput,
  type UpdateAssessmentFrameworkCommandOutput,
  UpdateAssessmentFrameworkCommand,
} from "./commands/UpdateAssessmentFrameworkCommand";
import {
  type UpdateAssessmentFrameworkShareCommandInput,
  type UpdateAssessmentFrameworkShareCommandOutput,
  UpdateAssessmentFrameworkShareCommand,
} from "./commands/UpdateAssessmentFrameworkShareCommand";
import {
  type UpdateAssessmentStatusCommandInput,
  type UpdateAssessmentStatusCommandOutput,
  UpdateAssessmentStatusCommand,
} from "./commands/UpdateAssessmentStatusCommand";
import {
  type UpdateControlCommandInput,
  type UpdateControlCommandOutput,
  UpdateControlCommand,
} from "./commands/UpdateControlCommand";
import {
  type UpdateSettingsCommandInput,
  type UpdateSettingsCommandOutput,
  UpdateSettingsCommand,
} from "./commands/UpdateSettingsCommand";
import {
  type ValidateAssessmentReportIntegrityCommandInput,
  type ValidateAssessmentReportIntegrityCommandOutput,
  ValidateAssessmentReportIntegrityCommand,
} from "./commands/ValidateAssessmentReportIntegrityCommand";
import { paginateGetChangeLogs } from "./pagination/GetChangeLogsPaginator";
import { paginateGetDelegations } from "./pagination/GetDelegationsPaginator";
import { paginateGetEvidenceByEvidenceFolder } from "./pagination/GetEvidenceByEvidenceFolderPaginator";
import {
  paginateGetEvidenceFoldersByAssessmentControl,
} from "./pagination/GetEvidenceFoldersByAssessmentControlPaginator";
import { paginateGetEvidenceFoldersByAssessment } from "./pagination/GetEvidenceFoldersByAssessmentPaginator";
import {
  paginateListAssessmentControlInsightsByControlDomain,
} from "./pagination/ListAssessmentControlInsightsByControlDomainPaginator";
import {
  paginateListAssessmentFrameworkShareRequests,
} from "./pagination/ListAssessmentFrameworkShareRequestsPaginator";
import { paginateListAssessmentFrameworks } from "./pagination/ListAssessmentFrameworksPaginator";
import { paginateListAssessmentReports } from "./pagination/ListAssessmentReportsPaginator";
import { paginateListAssessments } from "./pagination/ListAssessmentsPaginator";
import {
  paginateListControlDomainInsightsByAssessment,
} from "./pagination/ListControlDomainInsightsByAssessmentPaginator";
import { paginateListControlDomainInsights } from "./pagination/ListControlDomainInsightsPaginator";
import { paginateListControlInsightsByControlDomain } from "./pagination/ListControlInsightsByControlDomainPaginator";
import { paginateListControls } from "./pagination/ListControlsPaginator";
import { paginateListKeywordsForDataSource } from "./pagination/ListKeywordsForDataSourcePaginator";
import { paginateListNotifications } from "./pagination/ListNotificationsPaginator";

const commands = {
  AssociateAssessmentReportEvidenceFolderCommand,
  BatchAssociateAssessmentReportEvidenceCommand,
  BatchCreateDelegationByAssessmentCommand,
  BatchDeleteDelegationByAssessmentCommand,
  BatchDisassociateAssessmentReportEvidenceCommand,
  BatchImportEvidenceToAssessmentControlCommand,
  CreateAssessmentCommand,
  CreateAssessmentFrameworkCommand,
  CreateAssessmentReportCommand,
  CreateControlCommand,
  DeleteAssessmentCommand,
  DeleteAssessmentFrameworkCommand,
  DeleteAssessmentFrameworkShareCommand,
  DeleteAssessmentReportCommand,
  DeleteControlCommand,
  DeregisterAccountCommand,
  DeregisterOrganizationAdminAccountCommand,
  DisassociateAssessmentReportEvidenceFolderCommand,
  GetAccountStatusCommand,
  GetAssessmentCommand,
  GetAssessmentFrameworkCommand,
  GetAssessmentReportUrlCommand,
  GetChangeLogsCommand,
  GetControlCommand,
  GetDelegationsCommand,
  GetEvidenceCommand,
  GetEvidenceByEvidenceFolderCommand,
  GetEvidenceFileUploadUrlCommand,
  GetEvidenceFolderCommand,
  GetEvidenceFoldersByAssessmentCommand,
  GetEvidenceFoldersByAssessmentControlCommand,
  GetInsightsCommand,
  GetInsightsByAssessmentCommand,
  GetOrganizationAdminAccountCommand,
  GetServicesInScopeCommand,
  GetSettingsCommand,
  ListAssessmentControlInsightsByControlDomainCommand,
  ListAssessmentFrameworksCommand,
  ListAssessmentFrameworkShareRequestsCommand,
  ListAssessmentReportsCommand,
  ListAssessmentsCommand,
  ListControlDomainInsightsCommand,
  ListControlDomainInsightsByAssessmentCommand,
  ListControlInsightsByControlDomainCommand,
  ListControlsCommand,
  ListKeywordsForDataSourceCommand,
  ListNotificationsCommand,
  ListTagsForResourceCommand,
  RegisterAccountCommand,
  RegisterOrganizationAdminAccountCommand,
  StartAssessmentFrameworkShareCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAssessmentCommand,
  UpdateAssessmentControlCommand,
  UpdateAssessmentControlSetStatusCommand,
  UpdateAssessmentFrameworkCommand,
  UpdateAssessmentFrameworkShareCommand,
  UpdateAssessmentStatusCommand,
  UpdateControlCommand,
  UpdateSettingsCommand,
  ValidateAssessmentReportIntegrityCommand,
};
const paginators = {
  paginateGetChangeLogs,
  paginateGetDelegations,
  paginateGetEvidenceByEvidenceFolder,
  paginateGetEvidenceFoldersByAssessment,
  paginateGetEvidenceFoldersByAssessmentControl,
  paginateListAssessmentControlInsightsByControlDomain,
  paginateListAssessmentFrameworks,
  paginateListAssessmentFrameworkShareRequests,
  paginateListAssessmentReports,
  paginateListAssessments,
  paginateListControlDomainInsights,
  paginateListControlDomainInsightsByAssessment,
  paginateListControlInsightsByControlDomain,
  paginateListControls,
  paginateListKeywordsForDataSource,
  paginateListNotifications,
};

export interface AuditManager {
  /**
   * @see {@link AssociateAssessmentReportEvidenceFolderCommand}
   */
  associateAssessmentReportEvidenceFolder(
    args: AssociateAssessmentReportEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAssessmentReportEvidenceFolderCommandOutput>;
  associateAssessmentReportEvidenceFolder(
    args: AssociateAssessmentReportEvidenceFolderCommandInput,
    cb: (err: any, data?: AssociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;
  associateAssessmentReportEvidenceFolder(
    args: AssociateAssessmentReportEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateAssessmentReportEvidenceCommand}
   */
  batchAssociateAssessmentReportEvidence(
    args: BatchAssociateAssessmentReportEvidenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateAssessmentReportEvidenceCommandOutput>;
  batchAssociateAssessmentReportEvidence(
    args: BatchAssociateAssessmentReportEvidenceCommandInput,
    cb: (err: any, data?: BatchAssociateAssessmentReportEvidenceCommandOutput) => void
  ): void;
  batchAssociateAssessmentReportEvidence(
    args: BatchAssociateAssessmentReportEvidenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateAssessmentReportEvidenceCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateDelegationByAssessmentCommand}
   */
  batchCreateDelegationByAssessment(
    args: BatchCreateDelegationByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateDelegationByAssessmentCommandOutput>;
  batchCreateDelegationByAssessment(
    args: BatchCreateDelegationByAssessmentCommandInput,
    cb: (err: any, data?: BatchCreateDelegationByAssessmentCommandOutput) => void
  ): void;
  batchCreateDelegationByAssessment(
    args: BatchCreateDelegationByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateDelegationByAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteDelegationByAssessmentCommand}
   */
  batchDeleteDelegationByAssessment(
    args: BatchDeleteDelegationByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteDelegationByAssessmentCommandOutput>;
  batchDeleteDelegationByAssessment(
    args: BatchDeleteDelegationByAssessmentCommandInput,
    cb: (err: any, data?: BatchDeleteDelegationByAssessmentCommandOutput) => void
  ): void;
  batchDeleteDelegationByAssessment(
    args: BatchDeleteDelegationByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteDelegationByAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateAssessmentReportEvidenceCommand}
   */
  batchDisassociateAssessmentReportEvidence(
    args: BatchDisassociateAssessmentReportEvidenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateAssessmentReportEvidenceCommandOutput>;
  batchDisassociateAssessmentReportEvidence(
    args: BatchDisassociateAssessmentReportEvidenceCommandInput,
    cb: (err: any, data?: BatchDisassociateAssessmentReportEvidenceCommandOutput) => void
  ): void;
  batchDisassociateAssessmentReportEvidence(
    args: BatchDisassociateAssessmentReportEvidenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateAssessmentReportEvidenceCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchImportEvidenceToAssessmentControlCommand}
   */
  batchImportEvidenceToAssessmentControl(
    args: BatchImportEvidenceToAssessmentControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchImportEvidenceToAssessmentControlCommandOutput>;
  batchImportEvidenceToAssessmentControl(
    args: BatchImportEvidenceToAssessmentControlCommandInput,
    cb: (err: any, data?: BatchImportEvidenceToAssessmentControlCommandOutput) => void
  ): void;
  batchImportEvidenceToAssessmentControl(
    args: BatchImportEvidenceToAssessmentControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchImportEvidenceToAssessmentControlCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssessmentCommand}
   */
  createAssessment(
    args: CreateAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentCommandOutput>;
  createAssessment(
    args: CreateAssessmentCommandInput,
    cb: (err: any, data?: CreateAssessmentCommandOutput) => void
  ): void;
  createAssessment(
    args: CreateAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssessmentFrameworkCommand}
   */
  createAssessmentFramework(
    args: CreateAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentFrameworkCommandOutput>;
  createAssessmentFramework(
    args: CreateAssessmentFrameworkCommandInput,
    cb: (err: any, data?: CreateAssessmentFrameworkCommandOutput) => void
  ): void;
  createAssessmentFramework(
    args: CreateAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentFrameworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssessmentReportCommand}
   */
  createAssessmentReport(
    args: CreateAssessmentReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentReportCommandOutput>;
  createAssessmentReport(
    args: CreateAssessmentReportCommandInput,
    cb: (err: any, data?: CreateAssessmentReportCommandOutput) => void
  ): void;
  createAssessmentReport(
    args: CreateAssessmentReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentReportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateControlCommand}
   */
  createControl(
    args: CreateControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateControlCommandOutput>;
  createControl(
    args: CreateControlCommandInput,
    cb: (err: any, data?: CreateControlCommandOutput) => void
  ): void;
  createControl(
    args: CreateControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateControlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssessmentCommand}
   */
  deleteAssessment(
    args: DeleteAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentCommandOutput>;
  deleteAssessment(
    args: DeleteAssessmentCommandInput,
    cb: (err: any, data?: DeleteAssessmentCommandOutput) => void
  ): void;
  deleteAssessment(
    args: DeleteAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssessmentFrameworkCommand}
   */
  deleteAssessmentFramework(
    args: DeleteAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentFrameworkCommandOutput>;
  deleteAssessmentFramework(
    args: DeleteAssessmentFrameworkCommandInput,
    cb: (err: any, data?: DeleteAssessmentFrameworkCommandOutput) => void
  ): void;
  deleteAssessmentFramework(
    args: DeleteAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentFrameworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssessmentFrameworkShareCommand}
   */
  deleteAssessmentFrameworkShare(
    args: DeleteAssessmentFrameworkShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentFrameworkShareCommandOutput>;
  deleteAssessmentFrameworkShare(
    args: DeleteAssessmentFrameworkShareCommandInput,
    cb: (err: any, data?: DeleteAssessmentFrameworkShareCommandOutput) => void
  ): void;
  deleteAssessmentFrameworkShare(
    args: DeleteAssessmentFrameworkShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentFrameworkShareCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssessmentReportCommand}
   */
  deleteAssessmentReport(
    args: DeleteAssessmentReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentReportCommandOutput>;
  deleteAssessmentReport(
    args: DeleteAssessmentReportCommandInput,
    cb: (err: any, data?: DeleteAssessmentReportCommandOutput) => void
  ): void;
  deleteAssessmentReport(
    args: DeleteAssessmentReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentReportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteControlCommand}
   */
  deleteControl(
    args: DeleteControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteControlCommandOutput>;
  deleteControl(
    args: DeleteControlCommandInput,
    cb: (err: any, data?: DeleteControlCommandOutput) => void
  ): void;
  deleteControl(
    args: DeleteControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteControlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterAccountCommand}
   */
  deregisterAccount(): Promise<DeregisterAccountCommandOutput>;
  deregisterAccount(
    args: DeregisterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterAccountCommandOutput>;
  deregisterAccount(
    args: DeregisterAccountCommandInput,
    cb: (err: any, data?: DeregisterAccountCommandOutput) => void
  ): void;
  deregisterAccount(
    args: DeregisterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterOrganizationAdminAccountCommand}
   */
  deregisterOrganizationAdminAccount(): Promise<DeregisterOrganizationAdminAccountCommandOutput>;
  deregisterOrganizationAdminAccount(
    args: DeregisterOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterOrganizationAdminAccountCommandOutput>;
  deregisterOrganizationAdminAccount(
    args: DeregisterOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: DeregisterOrganizationAdminAccountCommandOutput) => void
  ): void;
  deregisterOrganizationAdminAccount(
    args: DeregisterOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAssessmentReportEvidenceFolderCommand}
   */
  disassociateAssessmentReportEvidenceFolder(
    args: DisassociateAssessmentReportEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAssessmentReportEvidenceFolderCommandOutput>;
  disassociateAssessmentReportEvidenceFolder(
    args: DisassociateAssessmentReportEvidenceFolderCommandInput,
    cb: (err: any, data?: DisassociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;
  disassociateAssessmentReportEvidenceFolder(
    args: DisassociateAssessmentReportEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountStatusCommand}
   */
  getAccountStatus(): Promise<GetAccountStatusCommandOutput>;
  getAccountStatus(
    args: GetAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountStatusCommandOutput>;
  getAccountStatus(
    args: GetAccountStatusCommandInput,
    cb: (err: any, data?: GetAccountStatusCommandOutput) => void
  ): void;
  getAccountStatus(
    args: GetAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssessmentCommand}
   */
  getAssessment(
    args: GetAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssessmentCommandOutput>;
  getAssessment(
    args: GetAssessmentCommandInput,
    cb: (err: any, data?: GetAssessmentCommandOutput) => void
  ): void;
  getAssessment(
    args: GetAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssessmentFrameworkCommand}
   */
  getAssessmentFramework(
    args: GetAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssessmentFrameworkCommandOutput>;
  getAssessmentFramework(
    args: GetAssessmentFrameworkCommandInput,
    cb: (err: any, data?: GetAssessmentFrameworkCommandOutput) => void
  ): void;
  getAssessmentFramework(
    args: GetAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentFrameworkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssessmentReportUrlCommand}
   */
  getAssessmentReportUrl(
    args: GetAssessmentReportUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssessmentReportUrlCommandOutput>;
  getAssessmentReportUrl(
    args: GetAssessmentReportUrlCommandInput,
    cb: (err: any, data?: GetAssessmentReportUrlCommandOutput) => void
  ): void;
  getAssessmentReportUrl(
    args: GetAssessmentReportUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentReportUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChangeLogsCommand}
   */
  getChangeLogs(
    args: GetChangeLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChangeLogsCommandOutput>;
  getChangeLogs(
    args: GetChangeLogsCommandInput,
    cb: (err: any, data?: GetChangeLogsCommandOutput) => void
  ): void;
  getChangeLogs(
    args: GetChangeLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangeLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetControlCommand}
   */
  getControl(
    args: GetControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetControlCommandOutput>;
  getControl(
    args: GetControlCommandInput,
    cb: (err: any, data?: GetControlCommandOutput) => void
  ): void;
  getControl(
    args: GetControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetControlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDelegationsCommand}
   */
  getDelegations(): Promise<GetDelegationsCommandOutput>;
  getDelegations(
    args: GetDelegationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDelegationsCommandOutput>;
  getDelegations(
    args: GetDelegationsCommandInput,
    cb: (err: any, data?: GetDelegationsCommandOutput) => void
  ): void;
  getDelegations(
    args: GetDelegationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDelegationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEvidenceCommand}
   */
  getEvidence(
    args: GetEvidenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceCommandOutput>;
  getEvidence(
    args: GetEvidenceCommandInput,
    cb: (err: any, data?: GetEvidenceCommandOutput) => void
  ): void;
  getEvidence(
    args: GetEvidenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEvidenceByEvidenceFolderCommand}
   */
  getEvidenceByEvidenceFolder(
    args: GetEvidenceByEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceByEvidenceFolderCommandOutput>;
  getEvidenceByEvidenceFolder(
    args: GetEvidenceByEvidenceFolderCommandInput,
    cb: (err: any, data?: GetEvidenceByEvidenceFolderCommandOutput) => void
  ): void;
  getEvidenceByEvidenceFolder(
    args: GetEvidenceByEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceByEvidenceFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEvidenceFileUploadUrlCommand}
   */
  getEvidenceFileUploadUrl(
    args: GetEvidenceFileUploadUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceFileUploadUrlCommandOutput>;
  getEvidenceFileUploadUrl(
    args: GetEvidenceFileUploadUrlCommandInput,
    cb: (err: any, data?: GetEvidenceFileUploadUrlCommandOutput) => void
  ): void;
  getEvidenceFileUploadUrl(
    args: GetEvidenceFileUploadUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceFileUploadUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEvidenceFolderCommand}
   */
  getEvidenceFolder(
    args: GetEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceFolderCommandOutput>;
  getEvidenceFolder(
    args: GetEvidenceFolderCommandInput,
    cb: (err: any, data?: GetEvidenceFolderCommandOutput) => void
  ): void;
  getEvidenceFolder(
    args: GetEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceFolderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEvidenceFoldersByAssessmentCommand}
   */
  getEvidenceFoldersByAssessment(
    args: GetEvidenceFoldersByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceFoldersByAssessmentCommandOutput>;
  getEvidenceFoldersByAssessment(
    args: GetEvidenceFoldersByAssessmentCommandInput,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentCommandOutput) => void
  ): void;
  getEvidenceFoldersByAssessment(
    args: GetEvidenceFoldersByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEvidenceFoldersByAssessmentControlCommand}
   */
  getEvidenceFoldersByAssessmentControl(
    args: GetEvidenceFoldersByAssessmentControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput>;
  getEvidenceFoldersByAssessmentControl(
    args: GetEvidenceFoldersByAssessmentControlCommandInput,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentControlCommandOutput) => void
  ): void;
  getEvidenceFoldersByAssessmentControl(
    args: GetEvidenceFoldersByAssessmentControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentControlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightsCommand}
   */
  getInsights(): Promise<GetInsightsCommandOutput>;
  getInsights(
    args: GetInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightsCommandOutput>;
  getInsights(
    args: GetInsightsCommandInput,
    cb: (err: any, data?: GetInsightsCommandOutput) => void
  ): void;
  getInsights(
    args: GetInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInsightsByAssessmentCommand}
   */
  getInsightsByAssessment(
    args: GetInsightsByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightsByAssessmentCommandOutput>;
  getInsightsByAssessment(
    args: GetInsightsByAssessmentCommandInput,
    cb: (err: any, data?: GetInsightsByAssessmentCommandOutput) => void
  ): void;
  getInsightsByAssessment(
    args: GetInsightsByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightsByAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOrganizationAdminAccountCommand}
   */
  getOrganizationAdminAccount(): Promise<GetOrganizationAdminAccountCommandOutput>;
  getOrganizationAdminAccount(
    args: GetOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationAdminAccountCommandOutput>;
  getOrganizationAdminAccount(
    args: GetOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: GetOrganizationAdminAccountCommandOutput) => void
  ): void;
  getOrganizationAdminAccount(
    args: GetOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServicesInScopeCommand}
   */
  getServicesInScope(): Promise<GetServicesInScopeCommandOutput>;
  getServicesInScope(
    args: GetServicesInScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServicesInScopeCommandOutput>;
  getServicesInScope(
    args: GetServicesInScopeCommandInput,
    cb: (err: any, data?: GetServicesInScopeCommandOutput) => void
  ): void;
  getServicesInScope(
    args: GetServicesInScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServicesInScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSettingsCommand}
   */
  getSettings(
    args: GetSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSettingsCommandOutput>;
  getSettings(
    args: GetSettingsCommandInput,
    cb: (err: any, data?: GetSettingsCommandOutput) => void
  ): void;
  getSettings(
    args: GetSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssessmentControlInsightsByControlDomainCommand}
   */
  listAssessmentControlInsightsByControlDomain(
    args: ListAssessmentControlInsightsByControlDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentControlInsightsByControlDomainCommandOutput>;
  listAssessmentControlInsightsByControlDomain(
    args: ListAssessmentControlInsightsByControlDomainCommandInput,
    cb: (err: any, data?: ListAssessmentControlInsightsByControlDomainCommandOutput) => void
  ): void;
  listAssessmentControlInsightsByControlDomain(
    args: ListAssessmentControlInsightsByControlDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentControlInsightsByControlDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssessmentFrameworksCommand}
   */
  listAssessmentFrameworks(
    args: ListAssessmentFrameworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentFrameworksCommandOutput>;
  listAssessmentFrameworks(
    args: ListAssessmentFrameworksCommandInput,
    cb: (err: any, data?: ListAssessmentFrameworksCommandOutput) => void
  ): void;
  listAssessmentFrameworks(
    args: ListAssessmentFrameworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentFrameworksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssessmentFrameworkShareRequestsCommand}
   */
  listAssessmentFrameworkShareRequests(
    args: ListAssessmentFrameworkShareRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentFrameworkShareRequestsCommandOutput>;
  listAssessmentFrameworkShareRequests(
    args: ListAssessmentFrameworkShareRequestsCommandInput,
    cb: (err: any, data?: ListAssessmentFrameworkShareRequestsCommandOutput) => void
  ): void;
  listAssessmentFrameworkShareRequests(
    args: ListAssessmentFrameworkShareRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentFrameworkShareRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssessmentReportsCommand}
   */
  listAssessmentReports(): Promise<ListAssessmentReportsCommandOutput>;
  listAssessmentReports(
    args: ListAssessmentReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentReportsCommandOutput>;
  listAssessmentReports(
    args: ListAssessmentReportsCommandInput,
    cb: (err: any, data?: ListAssessmentReportsCommandOutput) => void
  ): void;
  listAssessmentReports(
    args: ListAssessmentReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssessmentsCommand}
   */
  listAssessments(): Promise<ListAssessmentsCommandOutput>;
  listAssessments(
    args: ListAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentsCommandOutput>;
  listAssessments(
    args: ListAssessmentsCommandInput,
    cb: (err: any, data?: ListAssessmentsCommandOutput) => void
  ): void;
  listAssessments(
    args: ListAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListControlDomainInsightsCommand}
   */
  listControlDomainInsights(): Promise<ListControlDomainInsightsCommandOutput>;
  listControlDomainInsights(
    args: ListControlDomainInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlDomainInsightsCommandOutput>;
  listControlDomainInsights(
    args: ListControlDomainInsightsCommandInput,
    cb: (err: any, data?: ListControlDomainInsightsCommandOutput) => void
  ): void;
  listControlDomainInsights(
    args: ListControlDomainInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlDomainInsightsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListControlDomainInsightsByAssessmentCommand}
   */
  listControlDomainInsightsByAssessment(
    args: ListControlDomainInsightsByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlDomainInsightsByAssessmentCommandOutput>;
  listControlDomainInsightsByAssessment(
    args: ListControlDomainInsightsByAssessmentCommandInput,
    cb: (err: any, data?: ListControlDomainInsightsByAssessmentCommandOutput) => void
  ): void;
  listControlDomainInsightsByAssessment(
    args: ListControlDomainInsightsByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlDomainInsightsByAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListControlInsightsByControlDomainCommand}
   */
  listControlInsightsByControlDomain(
    args: ListControlInsightsByControlDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlInsightsByControlDomainCommandOutput>;
  listControlInsightsByControlDomain(
    args: ListControlInsightsByControlDomainCommandInput,
    cb: (err: any, data?: ListControlInsightsByControlDomainCommandOutput) => void
  ): void;
  listControlInsightsByControlDomain(
    args: ListControlInsightsByControlDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlInsightsByControlDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ListControlsCommand}
   */
  listControls(
    args: ListControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlsCommandOutput>;
  listControls(
    args: ListControlsCommandInput,
    cb: (err: any, data?: ListControlsCommandOutput) => void
  ): void;
  listControls(
    args: ListControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListKeywordsForDataSourceCommand}
   */
  listKeywordsForDataSource(
    args: ListKeywordsForDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKeywordsForDataSourceCommandOutput>;
  listKeywordsForDataSource(
    args: ListKeywordsForDataSourceCommandInput,
    cb: (err: any, data?: ListKeywordsForDataSourceCommandOutput) => void
  ): void;
  listKeywordsForDataSource(
    args: ListKeywordsForDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeywordsForDataSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotificationsCommand}
   */
  listNotifications(): Promise<ListNotificationsCommandOutput>;
  listNotifications(
    args: ListNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationsCommandOutput>;
  listNotifications(
    args: ListNotificationsCommandInput,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  listNotifications(
    args: ListNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
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
   * @see {@link RegisterAccountCommand}
   */
  registerAccount(): Promise<RegisterAccountCommandOutput>;
  registerAccount(
    args: RegisterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterAccountCommandOutput>;
  registerAccount(
    args: RegisterAccountCommandInput,
    cb: (err: any, data?: RegisterAccountCommandOutput) => void
  ): void;
  registerAccount(
    args: RegisterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterOrganizationAdminAccountCommand}
   */
  registerOrganizationAdminAccount(
    args: RegisterOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterOrganizationAdminAccountCommandOutput>;
  registerOrganizationAdminAccount(
    args: RegisterOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: RegisterOrganizationAdminAccountCommandOutput) => void
  ): void;
  registerOrganizationAdminAccount(
    args: RegisterOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterOrganizationAdminAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAssessmentFrameworkShareCommand}
   */
  startAssessmentFrameworkShare(
    args: StartAssessmentFrameworkShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAssessmentFrameworkShareCommandOutput>;
  startAssessmentFrameworkShare(
    args: StartAssessmentFrameworkShareCommandInput,
    cb: (err: any, data?: StartAssessmentFrameworkShareCommandOutput) => void
  ): void;
  startAssessmentFrameworkShare(
    args: StartAssessmentFrameworkShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAssessmentFrameworkShareCommandOutput) => void
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
   * @see {@link UpdateAssessmentCommand}
   */
  updateAssessment(
    args: UpdateAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentCommandOutput>;
  updateAssessment(
    args: UpdateAssessmentCommandInput,
    cb: (err: any, data?: UpdateAssessmentCommandOutput) => void
  ): void;
  updateAssessment(
    args: UpdateAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssessmentControlCommand}
   */
  updateAssessmentControl(
    args: UpdateAssessmentControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentControlCommandOutput>;
  updateAssessmentControl(
    args: UpdateAssessmentControlCommandInput,
    cb: (err: any, data?: UpdateAssessmentControlCommandOutput) => void
  ): void;
  updateAssessmentControl(
    args: UpdateAssessmentControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssessmentControlSetStatusCommand}
   */
  updateAssessmentControlSetStatus(
    args: UpdateAssessmentControlSetStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentControlSetStatusCommandOutput>;
  updateAssessmentControlSetStatus(
    args: UpdateAssessmentControlSetStatusCommandInput,
    cb: (err: any, data?: UpdateAssessmentControlSetStatusCommandOutput) => void
  ): void;
  updateAssessmentControlSetStatus(
    args: UpdateAssessmentControlSetStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentControlSetStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssessmentFrameworkCommand}
   */
  updateAssessmentFramework(
    args: UpdateAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentFrameworkCommandOutput>;
  updateAssessmentFramework(
    args: UpdateAssessmentFrameworkCommandInput,
    cb: (err: any, data?: UpdateAssessmentFrameworkCommandOutput) => void
  ): void;
  updateAssessmentFramework(
    args: UpdateAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentFrameworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssessmentFrameworkShareCommand}
   */
  updateAssessmentFrameworkShare(
    args: UpdateAssessmentFrameworkShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentFrameworkShareCommandOutput>;
  updateAssessmentFrameworkShare(
    args: UpdateAssessmentFrameworkShareCommandInput,
    cb: (err: any, data?: UpdateAssessmentFrameworkShareCommandOutput) => void
  ): void;
  updateAssessmentFrameworkShare(
    args: UpdateAssessmentFrameworkShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentFrameworkShareCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssessmentStatusCommand}
   */
  updateAssessmentStatus(
    args: UpdateAssessmentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentStatusCommandOutput>;
  updateAssessmentStatus(
    args: UpdateAssessmentStatusCommandInput,
    cb: (err: any, data?: UpdateAssessmentStatusCommandOutput) => void
  ): void;
  updateAssessmentStatus(
    args: UpdateAssessmentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateControlCommand}
   */
  updateControl(
    args: UpdateControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateControlCommandOutput>;
  updateControl(
    args: UpdateControlCommandInput,
    cb: (err: any, data?: UpdateControlCommandOutput) => void
  ): void;
  updateControl(
    args: UpdateControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSettingsCommand}
   */
  updateSettings(): Promise<UpdateSettingsCommandOutput>;
  updateSettings(
    args: UpdateSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSettingsCommandOutput>;
  updateSettings(
    args: UpdateSettingsCommandInput,
    cb: (err: any, data?: UpdateSettingsCommandOutput) => void
  ): void;
  updateSettings(
    args: UpdateSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateAssessmentReportIntegrityCommand}
   */
  validateAssessmentReportIntegrity(
    args: ValidateAssessmentReportIntegrityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateAssessmentReportIntegrityCommandOutput>;
  validateAssessmentReportIntegrity(
    args: ValidateAssessmentReportIntegrityCommandInput,
    cb: (err: any, data?: ValidateAssessmentReportIntegrityCommandOutput) => void
  ): void;
  validateAssessmentReportIntegrity(
    args: ValidateAssessmentReportIntegrityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateAssessmentReportIntegrityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChangeLogsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetChangeLogsCommandOutput}.
   */
  paginateGetChangeLogs(
    args: GetChangeLogsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetChangeLogsCommandOutput>;

  /**
   * @see {@link GetDelegationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetDelegationsCommandOutput}.
   */
  paginateGetDelegations(
    args?: GetDelegationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetDelegationsCommandOutput>;

  /**
   * @see {@link GetEvidenceByEvidenceFolderCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetEvidenceByEvidenceFolderCommandOutput}.
   */
  paginateGetEvidenceByEvidenceFolder(
    args: GetEvidenceByEvidenceFolderCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetEvidenceByEvidenceFolderCommandOutput>;

  /**
   * @see {@link GetEvidenceFoldersByAssessmentCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetEvidenceFoldersByAssessmentCommandOutput}.
   */
  paginateGetEvidenceFoldersByAssessment(
    args: GetEvidenceFoldersByAssessmentCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetEvidenceFoldersByAssessmentCommandOutput>;

  /**
   * @see {@link GetEvidenceFoldersByAssessmentControlCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetEvidenceFoldersByAssessmentControlCommandOutput}.
   */
  paginateGetEvidenceFoldersByAssessmentControl(
    args: GetEvidenceFoldersByAssessmentControlCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetEvidenceFoldersByAssessmentControlCommandOutput>;

  /**
   * @see {@link ListAssessmentControlInsightsByControlDomainCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssessmentControlInsightsByControlDomainCommandOutput}.
   */
  paginateListAssessmentControlInsightsByControlDomain(
    args: ListAssessmentControlInsightsByControlDomainCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssessmentControlInsightsByControlDomainCommandOutput>;

  /**
   * @see {@link ListAssessmentFrameworksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssessmentFrameworksCommandOutput}.
   */
  paginateListAssessmentFrameworks(
    args: ListAssessmentFrameworksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssessmentFrameworksCommandOutput>;

  /**
   * @see {@link ListAssessmentFrameworkShareRequestsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssessmentFrameworkShareRequestsCommandOutput}.
   */
  paginateListAssessmentFrameworkShareRequests(
    args: ListAssessmentFrameworkShareRequestsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssessmentFrameworkShareRequestsCommandOutput>;

  /**
   * @see {@link ListAssessmentReportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssessmentReportsCommandOutput}.
   */
  paginateListAssessmentReports(
    args?: ListAssessmentReportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssessmentReportsCommandOutput>;

  /**
   * @see {@link ListAssessmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssessmentsCommandOutput}.
   */
  paginateListAssessments(
    args?: ListAssessmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssessmentsCommandOutput>;

  /**
   * @see {@link ListControlDomainInsightsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListControlDomainInsightsCommandOutput}.
   */
  paginateListControlDomainInsights(
    args?: ListControlDomainInsightsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListControlDomainInsightsCommandOutput>;

  /**
   * @see {@link ListControlDomainInsightsByAssessmentCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListControlDomainInsightsByAssessmentCommandOutput}.
   */
  paginateListControlDomainInsightsByAssessment(
    args: ListControlDomainInsightsByAssessmentCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListControlDomainInsightsByAssessmentCommandOutput>;

  /**
   * @see {@link ListControlInsightsByControlDomainCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListControlInsightsByControlDomainCommandOutput}.
   */
  paginateListControlInsightsByControlDomain(
    args: ListControlInsightsByControlDomainCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListControlInsightsByControlDomainCommandOutput>;

  /**
   * @see {@link ListControlsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListControlsCommandOutput}.
   */
  paginateListControls(
    args: ListControlsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListControlsCommandOutput>;

  /**
   * @see {@link ListKeywordsForDataSourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListKeywordsForDataSourceCommandOutput}.
   */
  paginateListKeywordsForDataSource(
    args: ListKeywordsForDataSourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListKeywordsForDataSourceCommandOutput>;

  /**
   * @see {@link ListNotificationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListNotificationsCommandOutput}.
   */
  paginateListNotifications(
    args?: ListNotificationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListNotificationsCommandOutput>;
}

/**
 * <p>Welcome to the Audit Manager API reference. This guide is for developers who
 *          need detailed information about the Audit Manager API operations, data types, and
 *          errors. </p>
 *          <p>Audit Manager is a service that provides automated evidence collection so that you
 *          can continually audit your Amazon Web Services usage. You can use it to assess the
 *          effectiveness of your controls, manage risk, and simplify compliance.</p>
 *          <p>Audit Manager provides prebuilt frameworks that structure and automate assessments
 *          for a given compliance standard. Frameworks include a prebuilt collection of controls with
 *          descriptions and testing procedures. These controls are grouped according to the
 *          requirements of the specified compliance standard or regulation. You can also customize
 *          frameworks and controls to support internal audits with specific requirements. </p>
 *          <p>Use the following links to get started with the Audit Manager API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html">Actions</a>: An
 *                alphabetical list of all Audit Manager API operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Audit Manager data
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html">Common
 *                   parameters</a>: Parameters that all operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html">Common errors</a>:
 *                Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *          <p>If you're new to Audit Manager, we recommend that you review the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html">
 *             Audit Manager User Guide</a>.</p>
 * @public
 */
export class AuditManager extends AuditManagerClient implements AuditManager {}
createAggregatedClient(commands, AuditManager, { paginators });
