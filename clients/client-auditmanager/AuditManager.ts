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
  ListAssessmentFrameworksCommand,
  ListAssessmentFrameworksCommandInput,
  ListAssessmentFrameworksCommandOutput,
} from "./commands/ListAssessmentFrameworksCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Welcome to the AWS Audit Manager API reference. This guide is for developers who need detailed information about the AWS Audit Manager API operations, data types, and errors. </p>
 *          <p>AWS Audit Manager is a service that provides automated evidence collection so that you
 *          can continuously audit your AWS usage, and assess the effectiveness of your controls to
 *          better manage risk and simplify compliance.</p>
 *          <p>AWS Audit Manager provides pre-built frameworks that structure and automate assessments
 *          for a given compliance standard. Frameworks include a pre-built collection of controls with
 *          descriptions and testing procedures, which are grouped according to the requirements of the
 *          specified compliance standard or regulation. You can also customize frameworks and controls
 *          to support internal audits with unique requirements. </p>
 *
 *          <p>Use the following links to get started with the AWS Audit Manager API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all AWS Audit Manager API operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Types.html">Data types</a>: An alphabetical list of all AWS Audit Manager data types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *
 *          <p>If you're new to AWS Audit Manager, we recommend that you review the <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html"> AWS Audit Manager User Guide</a>.</p>
 */
export class AuditManager extends AuditManagerClient {
  /**
   * <p>
   *          Associates an evidence folder to the specified assessment report in AWS Audit Manager.
   *       </p>
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
   * <p>
   *         Associates a list of evidence to an assessment report in an AWS Audit Manager assessment.
   *       </p>
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
   * <p>
   *    Create a batch of delegations for a specified assessment in AWS Audit Manager.
   *       </p>
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
   * <p>
   * Deletes the delegations in the specified AWS Audit Manager assessment.
   *       </p>
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
   * <p>
   *          Disassociates a list of evidence from the specified assessment report in AWS Audit Manager.
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
   * <p>
   *          Uploads one or more pieces of evidence to the specified control in the assessment in AWS Audit Manager.
   *       </p>
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
   * <p>
   *   Creates an assessment in AWS Audit Manager.
   * </p>
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
   * <p>
   * Creates a custom framework in AWS Audit Manager.
   * </p>
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
   * <p>
   * Creates an assessment report for the specified assessment.
   * </p>
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
   * <p>
   * Creates a new custom control in AWS Audit Manager.
   * </p>
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
   * <p>
   *    Deletes an assessment in AWS Audit Manager.
   * </p>
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
   * <p>
   *    Deletes a custom framework in AWS Audit Manager.
   * </p>
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
   * <p>
   * Deletes an assessment report from an assessment in AWS Audit Manager.
   * </p>
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
   * <p>
   *    Deletes a custom control in AWS Audit Manager.
   * </p>
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
   * <p>
   * Deregisters an account in AWS Audit Manager.
   * </p>
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
   * <p>
   *   Deregisters the delegated AWS administrator account from the AWS organization.
   * </p>
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
   * <p>
   *   Disassociates an evidence folder from the specified assessment report in AWS Audit Manager.
   * </p>
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
   * <p>
   * Returns the registration status of an account in AWS Audit Manager.
   * </p>
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
   * <p>
   * Returns an assessment from AWS Audit Manager.
   * </p>
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
   * <p>
   * Returns a framework from AWS Audit Manager.
   * </p>
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
   * <p>
   * Returns the URL of a specified assessment report in AWS Audit Manager.
   * </p>
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
   * <p>
   * Returns a list of changelogs from AWS Audit Manager.
   * </p>
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
   * <p>
   * Returns a control from AWS Audit Manager.
   * </p>
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
   * <p>
   *    Returns a list of delegations from an audit owner to a delegate.
   * </p>
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
   * <p>
   * Returns evidence from AWS Audit Manager.
   * </p>
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
   * <p>
   *    Returns all evidence from a specified evidence folder in AWS Audit Manager.
   * </p>
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
   * <p>
   * Returns an evidence folder from the specified assessment in AWS Audit Manager.
   * </p>
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
   * <p>
   *    Returns the evidence folders from a specified assessment in AWS Audit Manager.
   * </p>
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
   * <p>
   *    Returns a list of evidence folders associated with a specified control of an assessment in AWS Audit Manager.
   * </p>
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
   * <p>
   *   Returns the name of the delegated AWS administrator account for the AWS organization.
   * </p>
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
   * <p>
   *    Returns a list of the in-scope AWS services for the specified assessment.
   * </p>
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
   * <p>
   *    Returns the settings for the specified AWS account.
   * </p>
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
   * <p>
   * Returns a list of the frameworks available in the AWS Audit Manager framework library.
   * </p>
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
   * <p>
   * Returns a list of assessment reports created in AWS Audit Manager.
   * </p>
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
   * <p>
   * Returns a list of current and past assessments from AWS Audit Manager.
   * </p>
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
   * <p>
   * Returns a list of controls from AWS Audit Manager.
   * </p>
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
   * <p>
   * Returns a list of keywords that pre-mapped to the specified control data source.
   * </p>
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
   * <p>
   *    Returns a list of all AWS Audit Manager notifications.
   * </p>
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
   * <p>
   * Returns a list of tags for the specified resource in AWS Audit Manager.
   * </p>
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
   * <p>
   *  Enables AWS Audit Manager for the specified AWS account.
   * </p>
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
   * <p>
   *    Enables an AWS account within the organization as the delegated administrator for AWS Audit Manager.
   * </p>
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
   * <p>
   * Tags the specified resource in AWS Audit Manager.
   * </p>
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
   * <p>
   * Removes a tag from a resource in AWS Audit Manager.
   * </p>
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
   * <p>
   *    Edits an AWS Audit Manager assessment.
   * </p>
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
   * <p>
   * Updates a control within an assessment in AWS Audit Manager.
   * </p>
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
   * <p>
   *    Updates the status of a control set in an AWS Audit Manager assessment.
   * </p>
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
   * <p>
   * Updates a custom framework in AWS Audit Manager.
   * </p>
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
   * <p>
   *    Updates the status of an assessment in AWS Audit Manager.
   * </p>
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
   * <p>
   * Updates a custom control in AWS Audit Manager.
   * </p>
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
   * <p>
   *    Updates AWS Audit Manager settings for the current user account.
   * </p>
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
   * <p>
   *    Validates the integrity of an assessment report in AWS Audit Manager.
   * </p>
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
