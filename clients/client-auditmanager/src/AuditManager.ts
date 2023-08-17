// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AuditManagerClient, AuditManagerClientConfig } from "./AuditManagerClient";
import {
  AssociateAssessmentReportEvidenceFolderCommand,
  AssociateAssessmentReportEvidenceFolderCommandInput,
  AssociateAssessmentReportEvidenceFolderCommandOutput,
} from "./commands/AssociateAssessmentReportEvidenceFolderCommand";
import {
  BatchAssociateAssessmentReportEvidenceCommand,
  BatchAssociateAssessmentReportEvidenceCommandInput,
  BatchAssociateAssessmentReportEvidenceCommandOutput,
} from "./commands/BatchAssociateAssessmentReportEvidenceCommand";
import {
  BatchCreateDelegationByAssessmentCommand,
  BatchCreateDelegationByAssessmentCommandInput,
  BatchCreateDelegationByAssessmentCommandOutput,
} from "./commands/BatchCreateDelegationByAssessmentCommand";
import {
  BatchDeleteDelegationByAssessmentCommand,
  BatchDeleteDelegationByAssessmentCommandInput,
  BatchDeleteDelegationByAssessmentCommandOutput,
} from "./commands/BatchDeleteDelegationByAssessmentCommand";
import {
  BatchDisassociateAssessmentReportEvidenceCommand,
  BatchDisassociateAssessmentReportEvidenceCommandInput,
  BatchDisassociateAssessmentReportEvidenceCommandOutput,
} from "./commands/BatchDisassociateAssessmentReportEvidenceCommand";
import {
  BatchImportEvidenceToAssessmentControlCommand,
  BatchImportEvidenceToAssessmentControlCommandInput,
  BatchImportEvidenceToAssessmentControlCommandOutput,
} from "./commands/BatchImportEvidenceToAssessmentControlCommand";
import {
  CreateAssessmentCommand,
  CreateAssessmentCommandInput,
  CreateAssessmentCommandOutput,
} from "./commands/CreateAssessmentCommand";
import {
  CreateAssessmentFrameworkCommand,
  CreateAssessmentFrameworkCommandInput,
  CreateAssessmentFrameworkCommandOutput,
} from "./commands/CreateAssessmentFrameworkCommand";
import {
  CreateAssessmentReportCommand,
  CreateAssessmentReportCommandInput,
  CreateAssessmentReportCommandOutput,
} from "./commands/CreateAssessmentReportCommand";
import {
  CreateControlCommand,
  CreateControlCommandInput,
  CreateControlCommandOutput,
} from "./commands/CreateControlCommand";
import {
  DeleteAssessmentCommand,
  DeleteAssessmentCommandInput,
  DeleteAssessmentCommandOutput,
} from "./commands/DeleteAssessmentCommand";
import {
  DeleteAssessmentFrameworkCommand,
  DeleteAssessmentFrameworkCommandInput,
  DeleteAssessmentFrameworkCommandOutput,
} from "./commands/DeleteAssessmentFrameworkCommand";
import {
  DeleteAssessmentFrameworkShareCommand,
  DeleteAssessmentFrameworkShareCommandInput,
  DeleteAssessmentFrameworkShareCommandOutput,
} from "./commands/DeleteAssessmentFrameworkShareCommand";
import {
  DeleteAssessmentReportCommand,
  DeleteAssessmentReportCommandInput,
  DeleteAssessmentReportCommandOutput,
} from "./commands/DeleteAssessmentReportCommand";
import {
  DeleteControlCommand,
  DeleteControlCommandInput,
  DeleteControlCommandOutput,
} from "./commands/DeleteControlCommand";
import {
  DeregisterAccountCommand,
  DeregisterAccountCommandInput,
  DeregisterAccountCommandOutput,
} from "./commands/DeregisterAccountCommand";
import {
  DeregisterOrganizationAdminAccountCommand,
  DeregisterOrganizationAdminAccountCommandInput,
  DeregisterOrganizationAdminAccountCommandOutput,
} from "./commands/DeregisterOrganizationAdminAccountCommand";
import {
  DisassociateAssessmentReportEvidenceFolderCommand,
  DisassociateAssessmentReportEvidenceFolderCommandInput,
  DisassociateAssessmentReportEvidenceFolderCommandOutput,
} from "./commands/DisassociateAssessmentReportEvidenceFolderCommand";
import {
  GetAccountStatusCommand,
  GetAccountStatusCommandInput,
  GetAccountStatusCommandOutput,
} from "./commands/GetAccountStatusCommand";
import {
  GetAssessmentCommand,
  GetAssessmentCommandInput,
  GetAssessmentCommandOutput,
} from "./commands/GetAssessmentCommand";
import {
  GetAssessmentFrameworkCommand,
  GetAssessmentFrameworkCommandInput,
  GetAssessmentFrameworkCommandOutput,
} from "./commands/GetAssessmentFrameworkCommand";
import {
  GetAssessmentReportUrlCommand,
  GetAssessmentReportUrlCommandInput,
  GetAssessmentReportUrlCommandOutput,
} from "./commands/GetAssessmentReportUrlCommand";
import {
  GetChangeLogsCommand,
  GetChangeLogsCommandInput,
  GetChangeLogsCommandOutput,
} from "./commands/GetChangeLogsCommand";
import { GetControlCommand, GetControlCommandInput, GetControlCommandOutput } from "./commands/GetControlCommand";
import {
  GetDelegationsCommand,
  GetDelegationsCommandInput,
  GetDelegationsCommandOutput,
} from "./commands/GetDelegationsCommand";
import {
  GetEvidenceByEvidenceFolderCommand,
  GetEvidenceByEvidenceFolderCommandInput,
  GetEvidenceByEvidenceFolderCommandOutput,
} from "./commands/GetEvidenceByEvidenceFolderCommand";
import { GetEvidenceCommand, GetEvidenceCommandInput, GetEvidenceCommandOutput } from "./commands/GetEvidenceCommand";
import {
  GetEvidenceFileUploadUrlCommand,
  GetEvidenceFileUploadUrlCommandInput,
  GetEvidenceFileUploadUrlCommandOutput,
} from "./commands/GetEvidenceFileUploadUrlCommand";
import {
  GetEvidenceFolderCommand,
  GetEvidenceFolderCommandInput,
  GetEvidenceFolderCommandOutput,
} from "./commands/GetEvidenceFolderCommand";
import {
  GetEvidenceFoldersByAssessmentCommand,
  GetEvidenceFoldersByAssessmentCommandInput,
  GetEvidenceFoldersByAssessmentCommandOutput,
} from "./commands/GetEvidenceFoldersByAssessmentCommand";
import {
  GetEvidenceFoldersByAssessmentControlCommand,
  GetEvidenceFoldersByAssessmentControlCommandInput,
  GetEvidenceFoldersByAssessmentControlCommandOutput,
} from "./commands/GetEvidenceFoldersByAssessmentControlCommand";
import {
  GetInsightsByAssessmentCommand,
  GetInsightsByAssessmentCommandInput,
  GetInsightsByAssessmentCommandOutput,
} from "./commands/GetInsightsByAssessmentCommand";
import { GetInsightsCommand, GetInsightsCommandInput, GetInsightsCommandOutput } from "./commands/GetInsightsCommand";
import {
  GetOrganizationAdminAccountCommand,
  GetOrganizationAdminAccountCommandInput,
  GetOrganizationAdminAccountCommandOutput,
} from "./commands/GetOrganizationAdminAccountCommand";
import {
  GetServicesInScopeCommand,
  GetServicesInScopeCommandInput,
  GetServicesInScopeCommandOutput,
} from "./commands/GetServicesInScopeCommand";
import { GetSettingsCommand, GetSettingsCommandInput, GetSettingsCommandOutput } from "./commands/GetSettingsCommand";
import {
  ListAssessmentControlInsightsByControlDomainCommand,
  ListAssessmentControlInsightsByControlDomainCommandInput,
  ListAssessmentControlInsightsByControlDomainCommandOutput,
} from "./commands/ListAssessmentControlInsightsByControlDomainCommand";
import {
  ListAssessmentFrameworksCommand,
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
} from "./commands/ListAssessmentFrameworksCommand";
import {
  ListAssessmentFrameworkShareRequestsCommand,
  ListAssessmentFrameworkShareRequestsCommandInput,
  ListAssessmentFrameworkShareRequestsCommandOutput,
} from "./commands/ListAssessmentFrameworkShareRequestsCommand";
import {
  ListAssessmentReportsCommand,
  ListAssessmentReportsCommandInput,
  ListAssessmentReportsCommandOutput,
} from "./commands/ListAssessmentReportsCommand";
import {
  ListAssessmentsCommand,
  ListAssessmentsCommandInput,
  ListAssessmentsCommandOutput,
} from "./commands/ListAssessmentsCommand";
import {
  ListControlDomainInsightsByAssessmentCommand,
  ListControlDomainInsightsByAssessmentCommandInput,
  ListControlDomainInsightsByAssessmentCommandOutput,
} from "./commands/ListControlDomainInsightsByAssessmentCommand";
import {
  ListControlDomainInsightsCommand,
  ListControlDomainInsightsCommandInput,
  ListControlDomainInsightsCommandOutput,
} from "./commands/ListControlDomainInsightsCommand";
import {
  ListControlInsightsByControlDomainCommand,
  ListControlInsightsByControlDomainCommandInput,
  ListControlInsightsByControlDomainCommandOutput,
} from "./commands/ListControlInsightsByControlDomainCommand";
import {
  ListControlsCommand,
  ListControlsCommandInput,
  ListControlsCommandOutput,
} from "./commands/ListControlsCommand";
import {
  ListKeywordsForDataSourceCommand,
  ListKeywordsForDataSourceCommandInput,
  ListKeywordsForDataSourceCommandOutput,
} from "./commands/ListKeywordsForDataSourceCommand";
import {
  ListNotificationsCommand,
  ListNotificationsCommandInput,
  ListNotificationsCommandOutput,
} from "./commands/ListNotificationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterAccountCommand,
  RegisterAccountCommandInput,
  RegisterAccountCommandOutput,
} from "./commands/RegisterAccountCommand";
import {
  RegisterOrganizationAdminAccountCommand,
  RegisterOrganizationAdminAccountCommandInput,
  RegisterOrganizationAdminAccountCommandOutput,
} from "./commands/RegisterOrganizationAdminAccountCommand";
import {
  StartAssessmentFrameworkShareCommand,
  StartAssessmentFrameworkShareCommandInput,
  StartAssessmentFrameworkShareCommandOutput,
} from "./commands/StartAssessmentFrameworkShareCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAssessmentCommand,
  UpdateAssessmentCommandInput,
  UpdateAssessmentCommandOutput,
} from "./commands/UpdateAssessmentCommand";
import {
  UpdateAssessmentControlCommand,
  UpdateAssessmentControlCommandInput,
  UpdateAssessmentControlCommandOutput,
} from "./commands/UpdateAssessmentControlCommand";
import {
  UpdateAssessmentControlSetStatusCommand,
  UpdateAssessmentControlSetStatusCommandInput,
  UpdateAssessmentControlSetStatusCommandOutput,
} from "./commands/UpdateAssessmentControlSetStatusCommand";
import {
  UpdateAssessmentFrameworkCommand,
  UpdateAssessmentFrameworkCommandInput,
  UpdateAssessmentFrameworkCommandOutput,
} from "./commands/UpdateAssessmentFrameworkCommand";
import {
  UpdateAssessmentFrameworkShareCommand,
  UpdateAssessmentFrameworkShareCommandInput,
  UpdateAssessmentFrameworkShareCommandOutput,
} from "./commands/UpdateAssessmentFrameworkShareCommand";
import {
  UpdateAssessmentStatusCommand,
  UpdateAssessmentStatusCommandInput,
  UpdateAssessmentStatusCommandOutput,
} from "./commands/UpdateAssessmentStatusCommand";
import {
  UpdateControlCommand,
  UpdateControlCommandInput,
  UpdateControlCommandOutput,
} from "./commands/UpdateControlCommand";
import {
  UpdateSettingsCommand,
  UpdateSettingsCommandInput,
  UpdateSettingsCommandOutput,
} from "./commands/UpdateSettingsCommand";
import {
  ValidateAssessmentReportIntegrityCommand,
  ValidateAssessmentReportIntegrityCommandInput,
  ValidateAssessmentReportIntegrityCommandOutput,
} from "./commands/ValidateAssessmentReportIntegrityCommand";

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
  createControl(args: CreateControlCommandInput, options?: __HttpHandlerOptions): Promise<CreateControlCommandOutput>;
  createControl(args: CreateControlCommandInput, cb: (err: any, data?: CreateControlCommandOutput) => void): void;
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
  deleteControl(args: DeleteControlCommandInput, options?: __HttpHandlerOptions): Promise<DeleteControlCommandOutput>;
  deleteControl(args: DeleteControlCommandInput, cb: (err: any, data?: DeleteControlCommandOutput) => void): void;
  deleteControl(
    args: DeleteControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteControlCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterAccountCommand}
   */
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
  getAssessment(args: GetAssessmentCommandInput, options?: __HttpHandlerOptions): Promise<GetAssessmentCommandOutput>;
  getAssessment(args: GetAssessmentCommandInput, cb: (err: any, data?: GetAssessmentCommandOutput) => void): void;
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
  getChangeLogs(args: GetChangeLogsCommandInput, options?: __HttpHandlerOptions): Promise<GetChangeLogsCommandOutput>;
  getChangeLogs(args: GetChangeLogsCommandInput, cb: (err: any, data?: GetChangeLogsCommandOutput) => void): void;
  getChangeLogs(
    args: GetChangeLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangeLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetControlCommand}
   */
  getControl(args: GetControlCommandInput, options?: __HttpHandlerOptions): Promise<GetControlCommandOutput>;
  getControl(args: GetControlCommandInput, cb: (err: any, data?: GetControlCommandOutput) => void): void;
  getControl(
    args: GetControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetControlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDelegationsCommand}
   */
  getDelegations(
    args: GetDelegationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDelegationsCommandOutput>;
  getDelegations(args: GetDelegationsCommandInput, cb: (err: any, data?: GetDelegationsCommandOutput) => void): void;
  getDelegations(
    args: GetDelegationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDelegationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEvidenceCommand}
   */
  getEvidence(args: GetEvidenceCommandInput, options?: __HttpHandlerOptions): Promise<GetEvidenceCommandOutput>;
  getEvidence(args: GetEvidenceCommandInput, cb: (err: any, data?: GetEvidenceCommandOutput) => void): void;
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
  getInsights(args: GetInsightsCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightsCommandOutput>;
  getInsights(args: GetInsightsCommandInput, cb: (err: any, data?: GetInsightsCommandOutput) => void): void;
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
  getSettings(args: GetSettingsCommandInput, options?: __HttpHandlerOptions): Promise<GetSettingsCommandOutput>;
  getSettings(args: GetSettingsCommandInput, cb: (err: any, data?: GetSettingsCommandOutput) => void): void;
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
  listAssessments(
    args: ListAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentsCommandOutput>;
  listAssessments(args: ListAssessmentsCommandInput, cb: (err: any, data?: ListAssessmentsCommandOutput) => void): void;
  listAssessments(
    args: ListAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListControlDomainInsightsCommand}
   */
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
  listControls(args: ListControlsCommandInput, options?: __HttpHandlerOptions): Promise<ListControlsCommandOutput>;
  listControls(args: ListControlsCommandInput, cb: (err: any, data?: ListControlsCommandOutput) => void): void;
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
  registerAccount(
    args: RegisterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterAccountCommandOutput>;
  registerAccount(args: RegisterAccountCommandInput, cb: (err: any, data?: RegisterAccountCommandOutput) => void): void;
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
  updateControl(args: UpdateControlCommandInput, options?: __HttpHandlerOptions): Promise<UpdateControlCommandOutput>;
  updateControl(args: UpdateControlCommandInput, cb: (err: any, data?: UpdateControlCommandOutput) => void): void;
  updateControl(
    args: UpdateControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateControlCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSettingsCommand}
   */
  updateSettings(
    args: UpdateSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSettingsCommandOutput>;
  updateSettings(args: UpdateSettingsCommandInput, cb: (err: any, data?: UpdateSettingsCommandOutput) => void): void;
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
}

/**
 * @public
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
 */
export class AuditManager extends AuditManagerClient implements AuditManager {}
createAggregatedClient(commands, AuditManager);
