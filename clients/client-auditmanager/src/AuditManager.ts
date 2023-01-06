// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AuditManagerClient } from "./AuditManagerClient";
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
 */
export class AuditManager extends AuditManagerClient {
  /**
   * <p> Associates an evidence folder to an assessment report in an Audit Manager
   *          assessment. </p>
   */
  public associateAssessmentReportEvidenceFolder(
    args: AssociateAssessmentReportEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAssessmentReportEvidenceFolderCommandOutput>;
  public associateAssessmentReportEvidenceFolder(
    args: AssociateAssessmentReportEvidenceFolderCommandInput,
    cb: (err: any, data?: AssociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;
  public associateAssessmentReportEvidenceFolder(
    args: AssociateAssessmentReportEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;
  public associateAssessmentReportEvidenceFolder(
    args: AssociateAssessmentReportEvidenceFolderCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateAssessmentReportEvidenceFolderCommandOutput) => void),
    cb?: (err: any, data?: AssociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): Promise<AssociateAssessmentReportEvidenceFolderCommandOutput> | void {
    const command = new AssociateAssessmentReportEvidenceFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Associates a list of evidence to an assessment report in an Audit Manager
   *          assessment. </p>
   */
  public batchAssociateAssessmentReportEvidence(
    args: BatchAssociateAssessmentReportEvidenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateAssessmentReportEvidenceCommandOutput>;
  public batchAssociateAssessmentReportEvidence(
    args: BatchAssociateAssessmentReportEvidenceCommandInput,
    cb: (err: any, data?: BatchAssociateAssessmentReportEvidenceCommandOutput) => void
  ): void;
  public batchAssociateAssessmentReportEvidence(
    args: BatchAssociateAssessmentReportEvidenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateAssessmentReportEvidenceCommandOutput) => void
  ): void;
  public batchAssociateAssessmentReportEvidence(
    args: BatchAssociateAssessmentReportEvidenceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchAssociateAssessmentReportEvidenceCommandOutput) => void),
    cb?: (err: any, data?: BatchAssociateAssessmentReportEvidenceCommandOutput) => void
  ): Promise<BatchAssociateAssessmentReportEvidenceCommandOutput> | void {
    const command = new BatchAssociateAssessmentReportEvidenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Creates a batch of delegations for an assessment in Audit Manager. </p>
   */
  public batchCreateDelegationByAssessment(
    args: BatchCreateDelegationByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateDelegationByAssessmentCommandOutput>;
  public batchCreateDelegationByAssessment(
    args: BatchCreateDelegationByAssessmentCommandInput,
    cb: (err: any, data?: BatchCreateDelegationByAssessmentCommandOutput) => void
  ): void;
  public batchCreateDelegationByAssessment(
    args: BatchCreateDelegationByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateDelegationByAssessmentCommandOutput) => void
  ): void;
  public batchCreateDelegationByAssessment(
    args: BatchCreateDelegationByAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreateDelegationByAssessmentCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateDelegationByAssessmentCommandOutput) => void
  ): Promise<BatchCreateDelegationByAssessmentCommandOutput> | void {
    const command = new BatchCreateDelegationByAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Deletes a batch of delegations for an assessment in Audit Manager. </p>
   */
  public batchDeleteDelegationByAssessment(
    args: BatchDeleteDelegationByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteDelegationByAssessmentCommandOutput>;
  public batchDeleteDelegationByAssessment(
    args: BatchDeleteDelegationByAssessmentCommandInput,
    cb: (err: any, data?: BatchDeleteDelegationByAssessmentCommandOutput) => void
  ): void;
  public batchDeleteDelegationByAssessment(
    args: BatchDeleteDelegationByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteDelegationByAssessmentCommandOutput) => void
  ): void;
  public batchDeleteDelegationByAssessment(
    args: BatchDeleteDelegationByAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteDelegationByAssessmentCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteDelegationByAssessmentCommandOutput) => void
  ): Promise<BatchDeleteDelegationByAssessmentCommandOutput> | void {
    const command = new BatchDeleteDelegationByAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Disassociates a list of evidence from an assessment report in Audit Manager.
   *       </p>
   */
  public batchDisassociateAssessmentReportEvidence(
    args: BatchDisassociateAssessmentReportEvidenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateAssessmentReportEvidenceCommandOutput>;
  public batchDisassociateAssessmentReportEvidence(
    args: BatchDisassociateAssessmentReportEvidenceCommandInput,
    cb: (err: any, data?: BatchDisassociateAssessmentReportEvidenceCommandOutput) => void
  ): void;
  public batchDisassociateAssessmentReportEvidence(
    args: BatchDisassociateAssessmentReportEvidenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateAssessmentReportEvidenceCommandOutput) => void
  ): void;
  public batchDisassociateAssessmentReportEvidence(
    args: BatchDisassociateAssessmentReportEvidenceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchDisassociateAssessmentReportEvidenceCommandOutput) => void),
    cb?: (err: any, data?: BatchDisassociateAssessmentReportEvidenceCommandOutput) => void
  ): Promise<BatchDisassociateAssessmentReportEvidenceCommandOutput> | void {
    const command = new BatchDisassociateAssessmentReportEvidenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Uploads one or more pieces of evidence to a control in an Audit Manager assessment.
   *          You can upload manual evidence from any Amazon Simple Storage Service (Amazon S3) bucket by
   *          specifying the S3 URI of the evidence. </p>
   *          <p>You must upload manual evidence to your S3 bucket before you can upload it to your
   *          assessment. For instructions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> in
   *          the <i>Amazon Simple Storage Service API Reference.</i>
   *          </p>
   *          <p>The following restrictions apply to this action:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum size of an individual evidence file: 100 MB</p>
   *             </li>
   *             <li>
   *                <p>Number of daily manual evidence uploads per control: 100</p>
   *             </li>
   *             <li>
   *                <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and
   *             restrictions for Audit Manager</a>.</p>
   */
  public batchImportEvidenceToAssessmentControl(
    args: BatchImportEvidenceToAssessmentControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchImportEvidenceToAssessmentControlCommandOutput>;
  public batchImportEvidenceToAssessmentControl(
    args: BatchImportEvidenceToAssessmentControlCommandInput,
    cb: (err: any, data?: BatchImportEvidenceToAssessmentControlCommandOutput) => void
  ): void;
  public batchImportEvidenceToAssessmentControl(
    args: BatchImportEvidenceToAssessmentControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchImportEvidenceToAssessmentControlCommandOutput) => void
  ): void;
  public batchImportEvidenceToAssessmentControl(
    args: BatchImportEvidenceToAssessmentControlCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchImportEvidenceToAssessmentControlCommandOutput) => void),
    cb?: (err: any, data?: BatchImportEvidenceToAssessmentControlCommandOutput) => void
  ): Promise<BatchImportEvidenceToAssessmentControlCommandOutput> | void {
    const command = new BatchImportEvidenceToAssessmentControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Creates an assessment in Audit Manager. </p>
   */
  public createAssessment(
    args: CreateAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentCommandOutput>;
  public createAssessment(
    args: CreateAssessmentCommandInput,
    cb: (err: any, data?: CreateAssessmentCommandOutput) => void
  ): void;
  public createAssessment(
    args: CreateAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentCommandOutput) => void
  ): void;
  public createAssessment(
    args: CreateAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAssessmentCommandOutput) => void),
    cb?: (err: any, data?: CreateAssessmentCommandOutput) => void
  ): Promise<CreateAssessmentCommandOutput> | void {
    const command = new CreateAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Creates a custom framework in Audit Manager. </p>
   */
  public createAssessmentFramework(
    args: CreateAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentFrameworkCommandOutput>;
  public createAssessmentFramework(
    args: CreateAssessmentFrameworkCommandInput,
    cb: (err: any, data?: CreateAssessmentFrameworkCommandOutput) => void
  ): void;
  public createAssessmentFramework(
    args: CreateAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentFrameworkCommandOutput) => void
  ): void;
  public createAssessmentFramework(
    args: CreateAssessmentFrameworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAssessmentFrameworkCommandOutput) => void),
    cb?: (err: any, data?: CreateAssessmentFrameworkCommandOutput) => void
  ): Promise<CreateAssessmentFrameworkCommandOutput> | void {
    const command = new CreateAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Creates an assessment report for the specified assessment. </p>
   */
  public createAssessmentReport(
    args: CreateAssessmentReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentReportCommandOutput>;
  public createAssessmentReport(
    args: CreateAssessmentReportCommandInput,
    cb: (err: any, data?: CreateAssessmentReportCommandOutput) => void
  ): void;
  public createAssessmentReport(
    args: CreateAssessmentReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentReportCommandOutput) => void
  ): void;
  public createAssessmentReport(
    args: CreateAssessmentReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAssessmentReportCommandOutput) => void),
    cb?: (err: any, data?: CreateAssessmentReportCommandOutput) => void
  ): Promise<CreateAssessmentReportCommandOutput> | void {
    const command = new CreateAssessmentReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Creates a new custom control in Audit Manager. </p>
   */
  public createControl(
    args: CreateControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateControlCommandOutput>;
  public createControl(
    args: CreateControlCommandInput,
    cb: (err: any, data?: CreateControlCommandOutput) => void
  ): void;
  public createControl(
    args: CreateControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateControlCommandOutput) => void
  ): void;
  public createControl(
    args: CreateControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateControlCommandOutput) => void),
    cb?: (err: any, data?: CreateControlCommandOutput) => void
  ): Promise<CreateControlCommandOutput> | void {
    const command = new CreateControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Deletes an assessment in Audit Manager. </p>
   */
  public deleteAssessment(
    args: DeleteAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentCommandOutput>;
  public deleteAssessment(
    args: DeleteAssessmentCommandInput,
    cb: (err: any, data?: DeleteAssessmentCommandOutput) => void
  ): void;
  public deleteAssessment(
    args: DeleteAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentCommandOutput) => void
  ): void;
  public deleteAssessment(
    args: DeleteAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssessmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssessmentCommandOutput) => void
  ): Promise<DeleteAssessmentCommandOutput> | void {
    const command = new DeleteAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Deletes a custom framework in Audit Manager. </p>
   */
  public deleteAssessmentFramework(
    args: DeleteAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentFrameworkCommandOutput>;
  public deleteAssessmentFramework(
    args: DeleteAssessmentFrameworkCommandInput,
    cb: (err: any, data?: DeleteAssessmentFrameworkCommandOutput) => void
  ): void;
  public deleteAssessmentFramework(
    args: DeleteAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentFrameworkCommandOutput) => void
  ): void;
  public deleteAssessmentFramework(
    args: DeleteAssessmentFrameworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssessmentFrameworkCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssessmentFrameworkCommandOutput) => void
  ): Promise<DeleteAssessmentFrameworkCommandOutput> | void {
    const command = new DeleteAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Deletes a share request for a custom framework in Audit Manager. </p>
   */
  public deleteAssessmentFrameworkShare(
    args: DeleteAssessmentFrameworkShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentFrameworkShareCommandOutput>;
  public deleteAssessmentFrameworkShare(
    args: DeleteAssessmentFrameworkShareCommandInput,
    cb: (err: any, data?: DeleteAssessmentFrameworkShareCommandOutput) => void
  ): void;
  public deleteAssessmentFrameworkShare(
    args: DeleteAssessmentFrameworkShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentFrameworkShareCommandOutput) => void
  ): void;
  public deleteAssessmentFrameworkShare(
    args: DeleteAssessmentFrameworkShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssessmentFrameworkShareCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssessmentFrameworkShareCommandOutput) => void
  ): Promise<DeleteAssessmentFrameworkShareCommandOutput> | void {
    const command = new DeleteAssessmentFrameworkShareCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an assessment report in Audit Manager. </p>
   *          <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager
   *          attempts to delete the following data:</p>
   *          <ol>
   *             <li>
   *                <p>The specified assessment report that’s stored in your S3 bucket</p>
   *             </li>
   *             <li>
   *                <p>The associated metadata that’s stored in Audit Manager</p>
   *             </li>
   *          </ol>
   *          <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report
   *          isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t
   *          fail. Instead, it proceeds to delete the associated metadata only. You must then delete the
   *          assessment report from the S3 bucket yourself. </p>
   *          <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or
   *             <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that
   *          your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that
   *          you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403
   *             (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API
   *             Reference</i>. </p>
   */
  public deleteAssessmentReport(
    args: DeleteAssessmentReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentReportCommandOutput>;
  public deleteAssessmentReport(
    args: DeleteAssessmentReportCommandInput,
    cb: (err: any, data?: DeleteAssessmentReportCommandOutput) => void
  ): void;
  public deleteAssessmentReport(
    args: DeleteAssessmentReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentReportCommandOutput) => void
  ): void;
  public deleteAssessmentReport(
    args: DeleteAssessmentReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssessmentReportCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssessmentReportCommandOutput) => void
  ): Promise<DeleteAssessmentReportCommandOutput> | void {
    const command = new DeleteAssessmentReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Deletes a custom control in Audit Manager. </p>
   */
  public deleteControl(
    args: DeleteControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteControlCommandOutput>;
  public deleteControl(
    args: DeleteControlCommandInput,
    cb: (err: any, data?: DeleteControlCommandOutput) => void
  ): void;
  public deleteControl(
    args: DeleteControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteControlCommandOutput) => void
  ): void;
  public deleteControl(
    args: DeleteControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteControlCommandOutput) => void),
    cb?: (err: any, data?: DeleteControlCommandOutput) => void
  ): Promise<DeleteControlCommandOutput> | void {
    const command = new DeleteControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Deregisters an account in Audit Manager. </p>
   *          <note>
   *             <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By
   *             default, Audit Manager retains your data. If you want to delete your data, you can
   *             use the <code>DeregistrationPolicy</code> attribute to request the deletion of your
   *             data. </p>
   *             <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data
   *                Protection</a> in the <i>Audit Manager User Guide</i>.
   *          </p>
   *          </note>
   */
  public deregisterAccount(
    args: DeregisterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterAccountCommandOutput>;
  public deregisterAccount(
    args: DeregisterAccountCommandInput,
    cb: (err: any, data?: DeregisterAccountCommandOutput) => void
  ): void;
  public deregisterAccount(
    args: DeregisterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterAccountCommandOutput) => void
  ): void;
  public deregisterAccount(
    args: DeregisterAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterAccountCommandOutput) => void),
    cb?: (err: any, data?: DeregisterAccountCommandOutput) => void
  ): Promise<DeregisterAccountCommandOutput> | void {
    const command = new DeregisterAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified Amazon Web Services account as a delegated administrator for
   *             Audit Manager. </p>
   *          <p>When you remove a delegated administrator from your Audit Manager settings, you
   *          continue to have access to the evidence that you previously collected under that account.
   *          This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to
   *          that delegated administrator account moving forward.</p>
   *          <important>
   *             <p>Keep in mind the following cleanup task if you use evidence finder:</p>
   *             <p>Before you use your management account to remove a delegated administrator, make sure
   *             that the current delegated administrator account signs in to Audit Manager and
   *             disables evidence finder first. Disabling evidence finder automatically deletes the
   *             event data store that was created in their account when they enabled evidence finder. If
   *             this task isn’t completed, the event data store remains in their account. In this case,
   *             we recommend that the original delegated administrator goes to CloudTrail Lake
   *             and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the
   *                event data store</a>.</p>
   *             <p>This cleanup task is necessary to ensure that you don't end up with multiple event
   *             data stores. Audit Manager ignores an unused event data store after you remove or
   *             change a delegated administrator account. However, the unused event data store continues
   *             to incur storage costs from CloudTrail Lake if you don't delete it.</p>
   *          </important>
   *          <p>When you deregister a delegated administrator account for Audit Manager, the data
   *          for that account isn’t deleted. If you want to delete resource data for a delegated
   *          administrator account, you must perform that task separately before you deregister the
   *          account. Either, you can do this in the Audit Manager console. Or, you can use one of
   *          the delete API operations that are provided by Audit Manager. </p>
   *          <p>To delete your Audit Manager resource data, see the following instructions: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an
   *                   assessment</a> in the <i>Audit Manager User
   *                Guide</i>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a
   *                   custom framework</a> in the <i>Audit Manager User
   *                   Guide</i>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User
   *                   Guide</i>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User
   *                   Guide</i>)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom
   *                   control</a> in the <i>Audit Manager User
   *                Guide</i>)</p>
   *             </li>
   *          </ul>
   *          <p>At this time, Audit Manager doesn't provide an option to delete evidence for a
   *          specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the
   *          time of deregistration.</p>
   */
  public deregisterOrganizationAdminAccount(
    args: DeregisterOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterOrganizationAdminAccountCommandOutput>;
  public deregisterOrganizationAdminAccount(
    args: DeregisterOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: DeregisterOrganizationAdminAccountCommandOutput) => void
  ): void;
  public deregisterOrganizationAdminAccount(
    args: DeregisterOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterOrganizationAdminAccountCommandOutput) => void
  ): void;
  public deregisterOrganizationAdminAccount(
    args: DeregisterOrganizationAdminAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterOrganizationAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: DeregisterOrganizationAdminAccountCommandOutput) => void
  ): Promise<DeregisterOrganizationAdminAccountCommandOutput> | void {
    const command = new DeregisterOrganizationAdminAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Disassociates an evidence folder from the specified assessment report in Audit Manager. </p>
   */
  public disassociateAssessmentReportEvidenceFolder(
    args: DisassociateAssessmentReportEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAssessmentReportEvidenceFolderCommandOutput>;
  public disassociateAssessmentReportEvidenceFolder(
    args: DisassociateAssessmentReportEvidenceFolderCommandInput,
    cb: (err: any, data?: DisassociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;
  public disassociateAssessmentReportEvidenceFolder(
    args: DisassociateAssessmentReportEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): void;
  public disassociateAssessmentReportEvidenceFolder(
    args: DisassociateAssessmentReportEvidenceFolderCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateAssessmentReportEvidenceFolderCommandOutput) => void),
    cb?: (err: any, data?: DisassociateAssessmentReportEvidenceFolderCommandOutput) => void
  ): Promise<DisassociateAssessmentReportEvidenceFolderCommandOutput> | void {
    const command = new DisassociateAssessmentReportEvidenceFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns the registration status of an account in Audit Manager. </p>
   */
  public getAccountStatus(
    args: GetAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountStatusCommandOutput>;
  public getAccountStatus(
    args: GetAccountStatusCommandInput,
    cb: (err: any, data?: GetAccountStatusCommandOutput) => void
  ): void;
  public getAccountStatus(
    args: GetAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountStatusCommandOutput) => void
  ): void;
  public getAccountStatus(
    args: GetAccountStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountStatusCommandOutput) => void),
    cb?: (err: any, data?: GetAccountStatusCommandOutput) => void
  ): Promise<GetAccountStatusCommandOutput> | void {
    const command = new GetAccountStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns an assessment from Audit Manager. </p>
   */
  public getAssessment(
    args: GetAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssessmentCommandOutput>;
  public getAssessment(
    args: GetAssessmentCommandInput,
    cb: (err: any, data?: GetAssessmentCommandOutput) => void
  ): void;
  public getAssessment(
    args: GetAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentCommandOutput) => void
  ): void;
  public getAssessment(
    args: GetAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssessmentCommandOutput) => void),
    cb?: (err: any, data?: GetAssessmentCommandOutput) => void
  ): Promise<GetAssessmentCommandOutput> | void {
    const command = new GetAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a framework from Audit Manager. </p>
   */
  public getAssessmentFramework(
    args: GetAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssessmentFrameworkCommandOutput>;
  public getAssessmentFramework(
    args: GetAssessmentFrameworkCommandInput,
    cb: (err: any, data?: GetAssessmentFrameworkCommandOutput) => void
  ): void;
  public getAssessmentFramework(
    args: GetAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentFrameworkCommandOutput) => void
  ): void;
  public getAssessmentFramework(
    args: GetAssessmentFrameworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssessmentFrameworkCommandOutput) => void),
    cb?: (err: any, data?: GetAssessmentFrameworkCommandOutput) => void
  ): Promise<GetAssessmentFrameworkCommandOutput> | void {
    const command = new GetAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns the URL of an assessment report in Audit Manager. </p>
   */
  public getAssessmentReportUrl(
    args: GetAssessmentReportUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssessmentReportUrlCommandOutput>;
  public getAssessmentReportUrl(
    args: GetAssessmentReportUrlCommandInput,
    cb: (err: any, data?: GetAssessmentReportUrlCommandOutput) => void
  ): void;
  public getAssessmentReportUrl(
    args: GetAssessmentReportUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentReportUrlCommandOutput) => void
  ): void;
  public getAssessmentReportUrl(
    args: GetAssessmentReportUrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssessmentReportUrlCommandOutput) => void),
    cb?: (err: any, data?: GetAssessmentReportUrlCommandOutput) => void
  ): Promise<GetAssessmentReportUrlCommandOutput> | void {
    const command = new GetAssessmentReportUrlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of changelogs from Audit Manager. </p>
   */
  public getChangeLogs(
    args: GetChangeLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChangeLogsCommandOutput>;
  public getChangeLogs(
    args: GetChangeLogsCommandInput,
    cb: (err: any, data?: GetChangeLogsCommandOutput) => void
  ): void;
  public getChangeLogs(
    args: GetChangeLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangeLogsCommandOutput) => void
  ): void;
  public getChangeLogs(
    args: GetChangeLogsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetChangeLogsCommandOutput) => void),
    cb?: (err: any, data?: GetChangeLogsCommandOutput) => void
  ): Promise<GetChangeLogsCommandOutput> | void {
    const command = new GetChangeLogsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a control from Audit Manager. </p>
   */
  public getControl(args: GetControlCommandInput, options?: __HttpHandlerOptions): Promise<GetControlCommandOutput>;
  public getControl(args: GetControlCommandInput, cb: (err: any, data?: GetControlCommandOutput) => void): void;
  public getControl(
    args: GetControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetControlCommandOutput) => void
  ): void;
  public getControl(
    args: GetControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetControlCommandOutput) => void),
    cb?: (err: any, data?: GetControlCommandOutput) => void
  ): Promise<GetControlCommandOutput> | void {
    const command = new GetControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of delegations from an audit owner to a delegate. </p>
   */
  public getDelegations(
    args: GetDelegationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDelegationsCommandOutput>;
  public getDelegations(
    args: GetDelegationsCommandInput,
    cb: (err: any, data?: GetDelegationsCommandOutput) => void
  ): void;
  public getDelegations(
    args: GetDelegationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDelegationsCommandOutput) => void
  ): void;
  public getDelegations(
    args: GetDelegationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDelegationsCommandOutput) => void),
    cb?: (err: any, data?: GetDelegationsCommandOutput) => void
  ): Promise<GetDelegationsCommandOutput> | void {
    const command = new GetDelegationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns evidence from Audit Manager. </p>
   */
  public getEvidence(args: GetEvidenceCommandInput, options?: __HttpHandlerOptions): Promise<GetEvidenceCommandOutput>;
  public getEvidence(args: GetEvidenceCommandInput, cb: (err: any, data?: GetEvidenceCommandOutput) => void): void;
  public getEvidence(
    args: GetEvidenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceCommandOutput) => void
  ): void;
  public getEvidence(
    args: GetEvidenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEvidenceCommandOutput) => void),
    cb?: (err: any, data?: GetEvidenceCommandOutput) => void
  ): Promise<GetEvidenceCommandOutput> | void {
    const command = new GetEvidenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns all evidence from a specified evidence folder in Audit Manager. </p>
   */
  public getEvidenceByEvidenceFolder(
    args: GetEvidenceByEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceByEvidenceFolderCommandOutput>;
  public getEvidenceByEvidenceFolder(
    args: GetEvidenceByEvidenceFolderCommandInput,
    cb: (err: any, data?: GetEvidenceByEvidenceFolderCommandOutput) => void
  ): void;
  public getEvidenceByEvidenceFolder(
    args: GetEvidenceByEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceByEvidenceFolderCommandOutput) => void
  ): void;
  public getEvidenceByEvidenceFolder(
    args: GetEvidenceByEvidenceFolderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEvidenceByEvidenceFolderCommandOutput) => void),
    cb?: (err: any, data?: GetEvidenceByEvidenceFolderCommandOutput) => void
  ): Promise<GetEvidenceByEvidenceFolderCommandOutput> | void {
    const command = new GetEvidenceByEvidenceFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns an evidence folder from the specified assessment in Audit Manager.
   *       </p>
   */
  public getEvidenceFolder(
    args: GetEvidenceFolderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceFolderCommandOutput>;
  public getEvidenceFolder(
    args: GetEvidenceFolderCommandInput,
    cb: (err: any, data?: GetEvidenceFolderCommandOutput) => void
  ): void;
  public getEvidenceFolder(
    args: GetEvidenceFolderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceFolderCommandOutput) => void
  ): void;
  public getEvidenceFolder(
    args: GetEvidenceFolderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEvidenceFolderCommandOutput) => void),
    cb?: (err: any, data?: GetEvidenceFolderCommandOutput) => void
  ): Promise<GetEvidenceFolderCommandOutput> | void {
    const command = new GetEvidenceFolderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns the evidence folders from a specified assessment in Audit Manager.
   *       </p>
   */
  public getEvidenceFoldersByAssessment(
    args: GetEvidenceFoldersByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceFoldersByAssessmentCommandOutput>;
  public getEvidenceFoldersByAssessment(
    args: GetEvidenceFoldersByAssessmentCommandInput,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentCommandOutput) => void
  ): void;
  public getEvidenceFoldersByAssessment(
    args: GetEvidenceFoldersByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentCommandOutput) => void
  ): void;
  public getEvidenceFoldersByAssessment(
    args: GetEvidenceFoldersByAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEvidenceFoldersByAssessmentCommandOutput) => void),
    cb?: (err: any, data?: GetEvidenceFoldersByAssessmentCommandOutput) => void
  ): Promise<GetEvidenceFoldersByAssessmentCommandOutput> | void {
    const command = new GetEvidenceFoldersByAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of evidence folders that are associated with a specified control in an
   *             Audit Manager assessment. </p>
   */
  public getEvidenceFoldersByAssessmentControl(
    args: GetEvidenceFoldersByAssessmentControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput>;
  public getEvidenceFoldersByAssessmentControl(
    args: GetEvidenceFoldersByAssessmentControlCommandInput,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentControlCommandOutput) => void
  ): void;
  public getEvidenceFoldersByAssessmentControl(
    args: GetEvidenceFoldersByAssessmentControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvidenceFoldersByAssessmentControlCommandOutput) => void
  ): void;
  public getEvidenceFoldersByAssessmentControl(
    args: GetEvidenceFoldersByAssessmentControlCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetEvidenceFoldersByAssessmentControlCommandOutput) => void),
    cb?: (err: any, data?: GetEvidenceFoldersByAssessmentControlCommandOutput) => void
  ): Promise<GetEvidenceFoldersByAssessmentControlCommandOutput> | void {
    const command = new GetEvidenceFoldersByAssessmentControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the latest analytics data for all your current active assessments. </p>
   */
  public getInsights(args: GetInsightsCommandInput, options?: __HttpHandlerOptions): Promise<GetInsightsCommandOutput>;
  public getInsights(args: GetInsightsCommandInput, cb: (err: any, data?: GetInsightsCommandOutput) => void): void;
  public getInsights(
    args: GetInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightsCommandOutput) => void
  ): void;
  public getInsights(
    args: GetInsightsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInsightsCommandOutput) => void),
    cb?: (err: any, data?: GetInsightsCommandOutput) => void
  ): Promise<GetInsightsCommandOutput> | void {
    const command = new GetInsightsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the latest analytics data for a specific active assessment. </p>
   */
  public getInsightsByAssessment(
    args: GetInsightsByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInsightsByAssessmentCommandOutput>;
  public getInsightsByAssessment(
    args: GetInsightsByAssessmentCommandInput,
    cb: (err: any, data?: GetInsightsByAssessmentCommandOutput) => void
  ): void;
  public getInsightsByAssessment(
    args: GetInsightsByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInsightsByAssessmentCommandOutput) => void
  ): void;
  public getInsightsByAssessment(
    args: GetInsightsByAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInsightsByAssessmentCommandOutput) => void),
    cb?: (err: any, data?: GetInsightsByAssessmentCommandOutput) => void
  ): Promise<GetInsightsByAssessmentCommandOutput> | void {
    const command = new GetInsightsByAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns the name of the delegated Amazon Web Services administrator account for the
   *          organization. </p>
   */
  public getOrganizationAdminAccount(
    args: GetOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOrganizationAdminAccountCommandOutput>;
  public getOrganizationAdminAccount(
    args: GetOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: GetOrganizationAdminAccountCommandOutput) => void
  ): void;
  public getOrganizationAdminAccount(
    args: GetOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOrganizationAdminAccountCommandOutput) => void
  ): void;
  public getOrganizationAdminAccount(
    args: GetOrganizationAdminAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOrganizationAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: GetOrganizationAdminAccountCommandOutput) => void
  ): Promise<GetOrganizationAdminAccountCommandOutput> | void {
    const command = new GetOrganizationAdminAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all of the Amazon Web Services that you can choose to include
   *          in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to
   *          narrow the assessment's <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.</p>
   */
  public getServicesInScope(
    args: GetServicesInScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServicesInScopeCommandOutput>;
  public getServicesInScope(
    args: GetServicesInScopeCommandInput,
    cb: (err: any, data?: GetServicesInScopeCommandOutput) => void
  ): void;
  public getServicesInScope(
    args: GetServicesInScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServicesInScopeCommandOutput) => void
  ): void;
  public getServicesInScope(
    args: GetServicesInScopeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServicesInScopeCommandOutput) => void),
    cb?: (err: any, data?: GetServicesInScopeCommandOutput) => void
  ): Promise<GetServicesInScopeCommandOutput> | void {
    const command = new GetServicesInScopeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns the settings for the specified Amazon Web Services account. </p>
   */
  public getSettings(args: GetSettingsCommandInput, options?: __HttpHandlerOptions): Promise<GetSettingsCommandOutput>;
  public getSettings(args: GetSettingsCommandInput, cb: (err: any, data?: GetSettingsCommandOutput) => void): void;
  public getSettings(
    args: GetSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSettingsCommandOutput) => void
  ): void;
  public getSettings(
    args: GetSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetSettingsCommandOutput) => void
  ): Promise<GetSettingsCommandOutput> | void {
    const command = new GetSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the latest analytics data for controls within a specific control domain and a
   *          specific active assessment.</p>
   *          <note>
   *             <p>Control insights are listed only if the control belongs to the control domain and
   *             assessment that was specified. Moreover, the control must have collected evidence on the
   *                <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither
   *             of these conditions are met, no data is listed for that control. </p>
   *          </note>
   */
  public listAssessmentControlInsightsByControlDomain(
    args: ListAssessmentControlInsightsByControlDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentControlInsightsByControlDomainCommandOutput>;
  public listAssessmentControlInsightsByControlDomain(
    args: ListAssessmentControlInsightsByControlDomainCommandInput,
    cb: (err: any, data?: ListAssessmentControlInsightsByControlDomainCommandOutput) => void
  ): void;
  public listAssessmentControlInsightsByControlDomain(
    args: ListAssessmentControlInsightsByControlDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentControlInsightsByControlDomainCommandOutput) => void
  ): void;
  public listAssessmentControlInsightsByControlDomain(
    args: ListAssessmentControlInsightsByControlDomainCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAssessmentControlInsightsByControlDomainCommandOutput) => void),
    cb?: (err: any, data?: ListAssessmentControlInsightsByControlDomainCommandOutput) => void
  ): Promise<ListAssessmentControlInsightsByControlDomainCommandOutput> | void {
    const command = new ListAssessmentControlInsightsByControlDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of the frameworks that are available in the Audit Manager framework
   *          library. </p>
   */
  public listAssessmentFrameworks(
    args: ListAssessmentFrameworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentFrameworksCommandOutput>;
  public listAssessmentFrameworks(
    args: ListAssessmentFrameworksCommandInput,
    cb: (err: any, data?: ListAssessmentFrameworksCommandOutput) => void
  ): void;
  public listAssessmentFrameworks(
    args: ListAssessmentFrameworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentFrameworksCommandOutput) => void
  ): void;
  public listAssessmentFrameworks(
    args: ListAssessmentFrameworksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssessmentFrameworksCommandOutput) => void),
    cb?: (err: any, data?: ListAssessmentFrameworksCommandOutput) => void
  ): Promise<ListAssessmentFrameworksCommandOutput> | void {
    const command = new ListAssessmentFrameworksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of sent or received share requests for custom frameworks in Audit Manager. </p>
   */
  public listAssessmentFrameworkShareRequests(
    args: ListAssessmentFrameworkShareRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentFrameworkShareRequestsCommandOutput>;
  public listAssessmentFrameworkShareRequests(
    args: ListAssessmentFrameworkShareRequestsCommandInput,
    cb: (err: any, data?: ListAssessmentFrameworkShareRequestsCommandOutput) => void
  ): void;
  public listAssessmentFrameworkShareRequests(
    args: ListAssessmentFrameworkShareRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentFrameworkShareRequestsCommandOutput) => void
  ): void;
  public listAssessmentFrameworkShareRequests(
    args: ListAssessmentFrameworkShareRequestsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssessmentFrameworkShareRequestsCommandOutput) => void),
    cb?: (err: any, data?: ListAssessmentFrameworkShareRequestsCommandOutput) => void
  ): Promise<ListAssessmentFrameworkShareRequestsCommandOutput> | void {
    const command = new ListAssessmentFrameworkShareRequestsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of assessment reports created in Audit Manager. </p>
   */
  public listAssessmentReports(
    args: ListAssessmentReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentReportsCommandOutput>;
  public listAssessmentReports(
    args: ListAssessmentReportsCommandInput,
    cb: (err: any, data?: ListAssessmentReportsCommandOutput) => void
  ): void;
  public listAssessmentReports(
    args: ListAssessmentReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentReportsCommandOutput) => void
  ): void;
  public listAssessmentReports(
    args: ListAssessmentReportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssessmentReportsCommandOutput) => void),
    cb?: (err: any, data?: ListAssessmentReportsCommandOutput) => void
  ): Promise<ListAssessmentReportsCommandOutput> | void {
    const command = new ListAssessmentReportsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of current and past assessments from Audit Manager. </p>
   */
  public listAssessments(
    args: ListAssessmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentsCommandOutput>;
  public listAssessments(
    args: ListAssessmentsCommandInput,
    cb: (err: any, data?: ListAssessmentsCommandOutput) => void
  ): void;
  public listAssessments(
    args: ListAssessmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentsCommandOutput) => void
  ): void;
  public listAssessments(
    args: ListAssessmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssessmentsCommandOutput) => void),
    cb?: (err: any, data?: ListAssessmentsCommandOutput) => void
  ): Promise<ListAssessmentsCommandOutput> | void {
    const command = new ListAssessmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the latest analytics data for control domains across all of your active
   *          assessments. </p>
   *          <note>
   *             <p>A control domain is listed only if at least one of the controls within that domain
   *             collected evidence on the <code>lastUpdated</code> date of
   *                <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed
   *             for that control domain.</p>
   *          </note>
   */
  public listControlDomainInsights(
    args: ListControlDomainInsightsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlDomainInsightsCommandOutput>;
  public listControlDomainInsights(
    args: ListControlDomainInsightsCommandInput,
    cb: (err: any, data?: ListControlDomainInsightsCommandOutput) => void
  ): void;
  public listControlDomainInsights(
    args: ListControlDomainInsightsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlDomainInsightsCommandOutput) => void
  ): void;
  public listControlDomainInsights(
    args: ListControlDomainInsightsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListControlDomainInsightsCommandOutput) => void),
    cb?: (err: any, data?: ListControlDomainInsightsCommandOutput) => void
  ): Promise<ListControlDomainInsightsCommandOutput> | void {
    const command = new ListControlDomainInsightsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists analytics data for control domains within a specified active assessment.</p>
   *          <note>
   *             <p>A control domain is listed only if at least one of the controls within that domain
   *             collected evidence on the <code>lastUpdated</code> date of
   *                <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed
   *             for that domain.</p>
   *          </note>
   */
  public listControlDomainInsightsByAssessment(
    args: ListControlDomainInsightsByAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlDomainInsightsByAssessmentCommandOutput>;
  public listControlDomainInsightsByAssessment(
    args: ListControlDomainInsightsByAssessmentCommandInput,
    cb: (err: any, data?: ListControlDomainInsightsByAssessmentCommandOutput) => void
  ): void;
  public listControlDomainInsightsByAssessment(
    args: ListControlDomainInsightsByAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlDomainInsightsByAssessmentCommandOutput) => void
  ): void;
  public listControlDomainInsightsByAssessment(
    args: ListControlDomainInsightsByAssessmentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListControlDomainInsightsByAssessmentCommandOutput) => void),
    cb?: (err: any, data?: ListControlDomainInsightsByAssessmentCommandOutput) => void
  ): Promise<ListControlDomainInsightsByAssessmentCommandOutput> | void {
    const command = new ListControlDomainInsightsByAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the latest analytics data for controls within a specific control domain across all
   *          active assessments.</p>
   *          <note>
   *             <p>Control insights are listed only if the control belongs to the control domain that
   *             was specified and the control collected evidence on the <code>lastUpdated</code> date of
   *                <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data
   *             is listed for that control. </p>
   *          </note>
   */
  public listControlInsightsByControlDomain(
    args: ListControlInsightsByControlDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlInsightsByControlDomainCommandOutput>;
  public listControlInsightsByControlDomain(
    args: ListControlInsightsByControlDomainCommandInput,
    cb: (err: any, data?: ListControlInsightsByControlDomainCommandOutput) => void
  ): void;
  public listControlInsightsByControlDomain(
    args: ListControlInsightsByControlDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlInsightsByControlDomainCommandOutput) => void
  ): void;
  public listControlInsightsByControlDomain(
    args: ListControlInsightsByControlDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListControlInsightsByControlDomainCommandOutput) => void),
    cb?: (err: any, data?: ListControlInsightsByControlDomainCommandOutput) => void
  ): Promise<ListControlInsightsByControlDomainCommandOutput> | void {
    const command = new ListControlInsightsByControlDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of controls from Audit Manager. </p>
   */
  public listControls(
    args: ListControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListControlsCommandOutput>;
  public listControls(args: ListControlsCommandInput, cb: (err: any, data?: ListControlsCommandOutput) => void): void;
  public listControls(
    args: ListControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListControlsCommandOutput) => void
  ): void;
  public listControls(
    args: ListControlsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListControlsCommandOutput) => void),
    cb?: (err: any, data?: ListControlsCommandOutput) => void
  ): Promise<ListControlsCommandOutput> | void {
    const command = new ListControlsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of keywords that are pre-mapped to the specified control data source.
   *       </p>
   */
  public listKeywordsForDataSource(
    args: ListKeywordsForDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKeywordsForDataSourceCommandOutput>;
  public listKeywordsForDataSource(
    args: ListKeywordsForDataSourceCommandInput,
    cb: (err: any, data?: ListKeywordsForDataSourceCommandOutput) => void
  ): void;
  public listKeywordsForDataSource(
    args: ListKeywordsForDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeywordsForDataSourceCommandOutput) => void
  ): void;
  public listKeywordsForDataSource(
    args: ListKeywordsForDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListKeywordsForDataSourceCommandOutput) => void),
    cb?: (err: any, data?: ListKeywordsForDataSourceCommandOutput) => void
  ): Promise<ListKeywordsForDataSourceCommandOutput> | void {
    const command = new ListKeywordsForDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of all Audit Manager notifications. </p>
   */
  public listNotifications(
    args: ListNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotificationsCommandOutput>;
  public listNotifications(
    args: ListNotificationsCommandInput,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  public listNotifications(
    args: ListNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotificationsCommandOutput) => void
  ): void;
  public listNotifications(
    args: ListNotificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNotificationsCommandOutput) => void),
    cb?: (err: any, data?: ListNotificationsCommandOutput) => void
  ): Promise<ListNotificationsCommandOutput> | void {
    const command = new ListNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Returns a list of tags for the specified resource in Audit Manager. </p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Enables Audit Manager for the specified Amazon Web Services account. </p>
   */
  public registerAccount(
    args: RegisterAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterAccountCommandOutput>;
  public registerAccount(
    args: RegisterAccountCommandInput,
    cb: (err: any, data?: RegisterAccountCommandOutput) => void
  ): void;
  public registerAccount(
    args: RegisterAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAccountCommandOutput) => void
  ): void;
  public registerAccount(
    args: RegisterAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterAccountCommandOutput) => void),
    cb?: (err: any, data?: RegisterAccountCommandOutput) => void
  ): Promise<RegisterAccountCommandOutput> | void {
    const command = new RegisterAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Enables an Amazon Web Services account within the organization as the delegated
   *          administrator for Audit Manager. </p>
   */
  public registerOrganizationAdminAccount(
    args: RegisterOrganizationAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterOrganizationAdminAccountCommandOutput>;
  public registerOrganizationAdminAccount(
    args: RegisterOrganizationAdminAccountCommandInput,
    cb: (err: any, data?: RegisterOrganizationAdminAccountCommandOutput) => void
  ): void;
  public registerOrganizationAdminAccount(
    args: RegisterOrganizationAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterOrganizationAdminAccountCommandOutput) => void
  ): void;
  public registerOrganizationAdminAccount(
    args: RegisterOrganizationAdminAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterOrganizationAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: RegisterOrganizationAdminAccountCommandOutput) => void
  ): Promise<RegisterOrganizationAdminAccountCommandOutput> | void {
    const command = new RegisterOrganizationAdminAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Creates a share request for a custom framework in Audit Manager. </p>
   *          <p>The share request specifies a recipient and notifies them that a custom framework is
   *          available. Recipients have 120 days to accept or decline the request. If no action is
   *          taken, the share request expires.</p>
   *          <p>When you create a share request, Audit Manager stores a snapshot of your custom
   *          framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also
   *          stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p>
   *          <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following
   *          events occurs:</p>
   *          <ul>
   *             <li>
   *                <p>The sender revokes the share request.</p>
   *             </li>
   *             <li>
   *                <p>The recipient declines the share request.</p>
   *             </li>
   *             <li>
   *                <p>The recipient encounters an error and doesn't successfully accept the share
   *                request.</p>
   *             </li>
   *             <li>
   *                <p>The share request expires before the recipient responds to the request.</p>
   *             </li>
   *          </ul>
   *          <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that
   *          corresponds with the latest version of the custom framework. </p>
   *          <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share
   *          request. </p>
   *          <important>
   *             <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to
   *             share a custom framework with another Amazon Web Services account. You may not share a
   *             custom framework that is derived from a standard framework if the standard framework is
   *             designated as not eligible for sharing by Amazon Web Services, unless you have obtained
   *             permission to do so from the owner of the standard framework. To learn more about which
   *             standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User
   *                Guide</i>.</p>
   *          </important>
   */
  public startAssessmentFrameworkShare(
    args: StartAssessmentFrameworkShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAssessmentFrameworkShareCommandOutput>;
  public startAssessmentFrameworkShare(
    args: StartAssessmentFrameworkShareCommandInput,
    cb: (err: any, data?: StartAssessmentFrameworkShareCommandOutput) => void
  ): void;
  public startAssessmentFrameworkShare(
    args: StartAssessmentFrameworkShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAssessmentFrameworkShareCommandOutput) => void
  ): void;
  public startAssessmentFrameworkShare(
    args: StartAssessmentFrameworkShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAssessmentFrameworkShareCommandOutput) => void),
    cb?: (err: any, data?: StartAssessmentFrameworkShareCommandOutput) => void
  ): Promise<StartAssessmentFrameworkShareCommandOutput> | void {
    const command = new StartAssessmentFrameworkShareCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Tags the specified resource in Audit Manager. </p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Removes a tag from a resource in Audit Manager. </p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Edits an Audit Manager assessment. </p>
   */
  public updateAssessment(
    args: UpdateAssessmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentCommandOutput>;
  public updateAssessment(
    args: UpdateAssessmentCommandInput,
    cb: (err: any, data?: UpdateAssessmentCommandOutput) => void
  ): void;
  public updateAssessment(
    args: UpdateAssessmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentCommandOutput) => void
  ): void;
  public updateAssessment(
    args: UpdateAssessmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssessmentCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssessmentCommandOutput) => void
  ): Promise<UpdateAssessmentCommandOutput> | void {
    const command = new UpdateAssessmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Updates a control within an assessment in Audit Manager. </p>
   */
  public updateAssessmentControl(
    args: UpdateAssessmentControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentControlCommandOutput>;
  public updateAssessmentControl(
    args: UpdateAssessmentControlCommandInput,
    cb: (err: any, data?: UpdateAssessmentControlCommandOutput) => void
  ): void;
  public updateAssessmentControl(
    args: UpdateAssessmentControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentControlCommandOutput) => void
  ): void;
  public updateAssessmentControl(
    args: UpdateAssessmentControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssessmentControlCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssessmentControlCommandOutput) => void
  ): Promise<UpdateAssessmentControlCommandOutput> | void {
    const command = new UpdateAssessmentControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Updates the status of a control set in an Audit Manager assessment. </p>
   */
  public updateAssessmentControlSetStatus(
    args: UpdateAssessmentControlSetStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentControlSetStatusCommandOutput>;
  public updateAssessmentControlSetStatus(
    args: UpdateAssessmentControlSetStatusCommandInput,
    cb: (err: any, data?: UpdateAssessmentControlSetStatusCommandOutput) => void
  ): void;
  public updateAssessmentControlSetStatus(
    args: UpdateAssessmentControlSetStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentControlSetStatusCommandOutput) => void
  ): void;
  public updateAssessmentControlSetStatus(
    args: UpdateAssessmentControlSetStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssessmentControlSetStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssessmentControlSetStatusCommandOutput) => void
  ): Promise<UpdateAssessmentControlSetStatusCommandOutput> | void {
    const command = new UpdateAssessmentControlSetStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Updates a custom framework in Audit Manager. </p>
   */
  public updateAssessmentFramework(
    args: UpdateAssessmentFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentFrameworkCommandOutput>;
  public updateAssessmentFramework(
    args: UpdateAssessmentFrameworkCommandInput,
    cb: (err: any, data?: UpdateAssessmentFrameworkCommandOutput) => void
  ): void;
  public updateAssessmentFramework(
    args: UpdateAssessmentFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentFrameworkCommandOutput) => void
  ): void;
  public updateAssessmentFramework(
    args: UpdateAssessmentFrameworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssessmentFrameworkCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssessmentFrameworkCommandOutput) => void
  ): Promise<UpdateAssessmentFrameworkCommandOutput> | void {
    const command = new UpdateAssessmentFrameworkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Updates a share request for a custom framework in Audit Manager. </p>
   */
  public updateAssessmentFrameworkShare(
    args: UpdateAssessmentFrameworkShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentFrameworkShareCommandOutput>;
  public updateAssessmentFrameworkShare(
    args: UpdateAssessmentFrameworkShareCommandInput,
    cb: (err: any, data?: UpdateAssessmentFrameworkShareCommandOutput) => void
  ): void;
  public updateAssessmentFrameworkShare(
    args: UpdateAssessmentFrameworkShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentFrameworkShareCommandOutput) => void
  ): void;
  public updateAssessmentFrameworkShare(
    args: UpdateAssessmentFrameworkShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssessmentFrameworkShareCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssessmentFrameworkShareCommandOutput) => void
  ): Promise<UpdateAssessmentFrameworkShareCommandOutput> | void {
    const command = new UpdateAssessmentFrameworkShareCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Updates the status of an assessment in Audit Manager. </p>
   */
  public updateAssessmentStatus(
    args: UpdateAssessmentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentStatusCommandOutput>;
  public updateAssessmentStatus(
    args: UpdateAssessmentStatusCommandInput,
    cb: (err: any, data?: UpdateAssessmentStatusCommandOutput) => void
  ): void;
  public updateAssessmentStatus(
    args: UpdateAssessmentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentStatusCommandOutput) => void
  ): void;
  public updateAssessmentStatus(
    args: UpdateAssessmentStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssessmentStatusCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssessmentStatusCommandOutput) => void
  ): Promise<UpdateAssessmentStatusCommandOutput> | void {
    const command = new UpdateAssessmentStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Updates a custom control in Audit Manager. </p>
   */
  public updateControl(
    args: UpdateControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateControlCommandOutput>;
  public updateControl(
    args: UpdateControlCommandInput,
    cb: (err: any, data?: UpdateControlCommandOutput) => void
  ): void;
  public updateControl(
    args: UpdateControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateControlCommandOutput) => void
  ): void;
  public updateControl(
    args: UpdateControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateControlCommandOutput) => void),
    cb?: (err: any, data?: UpdateControlCommandOutput) => void
  ): Promise<UpdateControlCommandOutput> | void {
    const command = new UpdateControlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Updates Audit Manager settings for the current user account. </p>
   */
  public updateSettings(
    args: UpdateSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSettingsCommandOutput>;
  public updateSettings(
    args: UpdateSettingsCommandInput,
    cb: (err: any, data?: UpdateSettingsCommandOutput) => void
  ): void;
  public updateSettings(
    args: UpdateSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSettingsCommandOutput) => void
  ): void;
  public updateSettings(
    args: UpdateSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateSettingsCommandOutput) => void
  ): Promise<UpdateSettingsCommandOutput> | void {
    const command = new UpdateSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Validates the integrity of an assessment report in Audit Manager. </p>
   */
  public validateAssessmentReportIntegrity(
    args: ValidateAssessmentReportIntegrityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateAssessmentReportIntegrityCommandOutput>;
  public validateAssessmentReportIntegrity(
    args: ValidateAssessmentReportIntegrityCommandInput,
    cb: (err: any, data?: ValidateAssessmentReportIntegrityCommandOutput) => void
  ): void;
  public validateAssessmentReportIntegrity(
    args: ValidateAssessmentReportIntegrityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateAssessmentReportIntegrityCommandOutput) => void
  ): void;
  public validateAssessmentReportIntegrity(
    args: ValidateAssessmentReportIntegrityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateAssessmentReportIntegrityCommandOutput) => void),
    cb?: (err: any, data?: ValidateAssessmentReportIntegrityCommandOutput) => void
  ): Promise<ValidateAssessmentReportIntegrityCommandOutput> | void {
    const command = new ValidateAssessmentReportIntegrityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
