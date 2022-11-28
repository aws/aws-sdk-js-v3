// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { BackupClient } from "./BackupClient";
import {
  CancelLegalHoldCommand,
  CancelLegalHoldCommandInput,
  CancelLegalHoldCommandOutput,
} from "./commands/CancelLegalHoldCommand";
import {
  CreateBackupPlanCommand,
  CreateBackupPlanCommandInput,
  CreateBackupPlanCommandOutput,
} from "./commands/CreateBackupPlanCommand";
import {
  CreateBackupSelectionCommand,
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput,
} from "./commands/CreateBackupSelectionCommand";
import {
  CreateBackupVaultCommand,
  CreateBackupVaultCommandInput,
  CreateBackupVaultCommandOutput,
} from "./commands/CreateBackupVaultCommand";
import {
  CreateFrameworkCommand,
  CreateFrameworkCommandInput,
  CreateFrameworkCommandOutput,
} from "./commands/CreateFrameworkCommand";
import {
  CreateLegalHoldCommand,
  CreateLegalHoldCommandInput,
  CreateLegalHoldCommandOutput,
} from "./commands/CreateLegalHoldCommand";
import {
  CreateReportPlanCommand,
  CreateReportPlanCommandInput,
  CreateReportPlanCommandOutput,
} from "./commands/CreateReportPlanCommand";
import {
  DeleteBackupPlanCommand,
  DeleteBackupPlanCommandInput,
  DeleteBackupPlanCommandOutput,
} from "./commands/DeleteBackupPlanCommand";
import {
  DeleteBackupSelectionCommand,
  DeleteBackupSelectionCommandInput,
  DeleteBackupSelectionCommandOutput,
} from "./commands/DeleteBackupSelectionCommand";
import {
  DeleteBackupVaultAccessPolicyCommand,
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput,
} from "./commands/DeleteBackupVaultAccessPolicyCommand";
import {
  DeleteBackupVaultCommand,
  DeleteBackupVaultCommandInput,
  DeleteBackupVaultCommandOutput,
} from "./commands/DeleteBackupVaultCommand";
import {
  DeleteBackupVaultLockConfigurationCommand,
  DeleteBackupVaultLockConfigurationCommandInput,
  DeleteBackupVaultLockConfigurationCommandOutput,
} from "./commands/DeleteBackupVaultLockConfigurationCommand";
import {
  DeleteBackupVaultNotificationsCommand,
  DeleteBackupVaultNotificationsCommandInput,
  DeleteBackupVaultNotificationsCommandOutput,
} from "./commands/DeleteBackupVaultNotificationsCommand";
import {
  DeleteFrameworkCommand,
  DeleteFrameworkCommandInput,
  DeleteFrameworkCommandOutput,
} from "./commands/DeleteFrameworkCommand";
import {
  DeleteRecoveryPointCommand,
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput,
} from "./commands/DeleteRecoveryPointCommand";
import {
  DeleteReportPlanCommand,
  DeleteReportPlanCommandInput,
  DeleteReportPlanCommandOutput,
} from "./commands/DeleteReportPlanCommand";
import {
  DescribeBackupJobCommand,
  DescribeBackupJobCommandInput,
  DescribeBackupJobCommandOutput,
} from "./commands/DescribeBackupJobCommand";
import {
  DescribeBackupVaultCommand,
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput,
} from "./commands/DescribeBackupVaultCommand";
import {
  DescribeCopyJobCommand,
  DescribeCopyJobCommandInput,
  DescribeCopyJobCommandOutput,
} from "./commands/DescribeCopyJobCommand";
import {
  DescribeFrameworkCommand,
  DescribeFrameworkCommandInput,
  DescribeFrameworkCommandOutput,
} from "./commands/DescribeFrameworkCommand";
import {
  DescribeGlobalSettingsCommand,
  DescribeGlobalSettingsCommandInput,
  DescribeGlobalSettingsCommandOutput,
} from "./commands/DescribeGlobalSettingsCommand";
import {
  DescribeProtectedResourceCommand,
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput,
} from "./commands/DescribeProtectedResourceCommand";
import {
  DescribeRecoveryPointCommand,
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput,
} from "./commands/DescribeRecoveryPointCommand";
import {
  DescribeRegionSettingsCommand,
  DescribeRegionSettingsCommandInput,
  DescribeRegionSettingsCommandOutput,
} from "./commands/DescribeRegionSettingsCommand";
import {
  DescribeReportJobCommand,
  DescribeReportJobCommandInput,
  DescribeReportJobCommandOutput,
} from "./commands/DescribeReportJobCommand";
import {
  DescribeReportPlanCommand,
  DescribeReportPlanCommandInput,
  DescribeReportPlanCommandOutput,
} from "./commands/DescribeReportPlanCommand";
import {
  DescribeRestoreJobCommand,
  DescribeRestoreJobCommandInput,
  DescribeRestoreJobCommandOutput,
} from "./commands/DescribeRestoreJobCommand";
import {
  DisassociateRecoveryPointCommand,
  DisassociateRecoveryPointCommandInput,
  DisassociateRecoveryPointCommandOutput,
} from "./commands/DisassociateRecoveryPointCommand";
import {
  DisassociateRecoveryPointFromParentCommand,
  DisassociateRecoveryPointFromParentCommandInput,
  DisassociateRecoveryPointFromParentCommandOutput,
} from "./commands/DisassociateRecoveryPointFromParentCommand";
import {
  ExportBackupPlanTemplateCommand,
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput,
} from "./commands/ExportBackupPlanTemplateCommand";
import {
  GetBackupPlanCommand,
  GetBackupPlanCommandInput,
  GetBackupPlanCommandOutput,
} from "./commands/GetBackupPlanCommand";
import {
  GetBackupPlanFromJSONCommand,
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput,
} from "./commands/GetBackupPlanFromJSONCommand";
import {
  GetBackupPlanFromTemplateCommand,
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput,
} from "./commands/GetBackupPlanFromTemplateCommand";
import {
  GetBackupSelectionCommand,
  GetBackupSelectionCommandInput,
  GetBackupSelectionCommandOutput,
} from "./commands/GetBackupSelectionCommand";
import {
  GetBackupVaultAccessPolicyCommand,
  GetBackupVaultAccessPolicyCommandInput,
  GetBackupVaultAccessPolicyCommandOutput,
} from "./commands/GetBackupVaultAccessPolicyCommand";
import {
  GetBackupVaultNotificationsCommand,
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput,
} from "./commands/GetBackupVaultNotificationsCommand";
import {
  GetLegalHoldCommand,
  GetLegalHoldCommandInput,
  GetLegalHoldCommandOutput,
} from "./commands/GetLegalHoldCommand";
import {
  GetRecoveryPointRestoreMetadataCommand,
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput,
} from "./commands/GetRecoveryPointRestoreMetadataCommand";
import {
  GetSupportedResourceTypesCommand,
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput,
} from "./commands/GetSupportedResourceTypesCommand";
import {
  ListBackupJobsCommand,
  ListBackupJobsCommandInput,
  ListBackupJobsCommandOutput,
} from "./commands/ListBackupJobsCommand";
import {
  ListBackupPlansCommand,
  ListBackupPlansCommandInput,
  ListBackupPlansCommandOutput,
} from "./commands/ListBackupPlansCommand";
import {
  ListBackupPlanTemplatesCommand,
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "./commands/ListBackupPlanTemplatesCommand";
import {
  ListBackupPlanVersionsCommand,
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "./commands/ListBackupPlanVersionsCommand";
import {
  ListBackupSelectionsCommand,
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
} from "./commands/ListBackupSelectionsCommand";
import {
  ListBackupVaultsCommand,
  ListBackupVaultsCommandInput,
  ListBackupVaultsCommandOutput,
} from "./commands/ListBackupVaultsCommand";
import {
  ListCopyJobsCommand,
  ListCopyJobsCommandInput,
  ListCopyJobsCommandOutput,
} from "./commands/ListCopyJobsCommand";
import {
  ListFrameworksCommand,
  ListFrameworksCommandInput,
  ListFrameworksCommandOutput,
} from "./commands/ListFrameworksCommand";
import {
  ListLegalHoldsCommand,
  ListLegalHoldsCommandInput,
  ListLegalHoldsCommandOutput,
} from "./commands/ListLegalHoldsCommand";
import {
  ListProtectedResourcesCommand,
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "./commands/ListProtectedResourcesCommand";
import {
  ListRecoveryPointsByBackupVaultCommand,
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
} from "./commands/ListRecoveryPointsByBackupVaultCommand";
import {
  ListRecoveryPointsByLegalHoldCommand,
  ListRecoveryPointsByLegalHoldCommandInput,
  ListRecoveryPointsByLegalHoldCommandOutput,
} from "./commands/ListRecoveryPointsByLegalHoldCommand";
import {
  ListRecoveryPointsByResourceCommand,
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
} from "./commands/ListRecoveryPointsByResourceCommand";
import {
  ListReportJobsCommand,
  ListReportJobsCommandInput,
  ListReportJobsCommandOutput,
} from "./commands/ListReportJobsCommand";
import {
  ListReportPlansCommand,
  ListReportPlansCommandInput,
  ListReportPlansCommandOutput,
} from "./commands/ListReportPlansCommand";
import {
  ListRestoreJobsCommand,
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput,
} from "./commands/ListRestoreJobsCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  PutBackupVaultAccessPolicyCommand,
  PutBackupVaultAccessPolicyCommandInput,
  PutBackupVaultAccessPolicyCommandOutput,
} from "./commands/PutBackupVaultAccessPolicyCommand";
import {
  PutBackupVaultLockConfigurationCommand,
  PutBackupVaultLockConfigurationCommandInput,
  PutBackupVaultLockConfigurationCommandOutput,
} from "./commands/PutBackupVaultLockConfigurationCommand";
import {
  PutBackupVaultNotificationsCommand,
  PutBackupVaultNotificationsCommandInput,
  PutBackupVaultNotificationsCommandOutput,
} from "./commands/PutBackupVaultNotificationsCommand";
import {
  StartBackupJobCommand,
  StartBackupJobCommandInput,
  StartBackupJobCommandOutput,
} from "./commands/StartBackupJobCommand";
import {
  StartCopyJobCommand,
  StartCopyJobCommandInput,
  StartCopyJobCommandOutput,
} from "./commands/StartCopyJobCommand";
import {
  StartReportJobCommand,
  StartReportJobCommandInput,
  StartReportJobCommandOutput,
} from "./commands/StartReportJobCommand";
import {
  StartRestoreJobCommand,
  StartRestoreJobCommandInput,
  StartRestoreJobCommandOutput,
} from "./commands/StartRestoreJobCommand";
import {
  StopBackupJobCommand,
  StopBackupJobCommandInput,
  StopBackupJobCommandOutput,
} from "./commands/StopBackupJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBackupPlanCommand,
  UpdateBackupPlanCommandInput,
  UpdateBackupPlanCommandOutput,
} from "./commands/UpdateBackupPlanCommand";
import {
  UpdateFrameworkCommand,
  UpdateFrameworkCommandInput,
  UpdateFrameworkCommandOutput,
} from "./commands/UpdateFrameworkCommand";
import {
  UpdateGlobalSettingsCommand,
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import {
  UpdateRecoveryPointLifecycleCommand,
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput,
} from "./commands/UpdateRecoveryPointLifecycleCommand";
import {
  UpdateRegionSettingsCommand,
  UpdateRegionSettingsCommandInput,
  UpdateRegionSettingsCommandOutput,
} from "./commands/UpdateRegionSettingsCommand";
import {
  UpdateReportPlanCommand,
  UpdateReportPlanCommandInput,
  UpdateReportPlanCommandOutput,
} from "./commands/UpdateReportPlanCommand";

/**
 * <fullname>Backup</fullname>
 *          <p>Backup is a unified backup service designed to protect Amazon Web Services
 *          services and their associated data. Backup simplifies the creation, migration,
 *          restoration, and deletion of backups, while also providing reporting and
 *          auditing.</p>
 */
export class Backup extends BackupClient {
  /**
   * <p>This action removes the specified legal hold on a recovery point.
   *          This action can only be performed by a user with sufficient permissions.</p>
   */
  public cancelLegalHold(
    args: CancelLegalHoldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelLegalHoldCommandOutput>;
  public cancelLegalHold(
    args: CancelLegalHoldCommandInput,
    cb: (err: any, data?: CancelLegalHoldCommandOutput) => void
  ): void;
  public cancelLegalHold(
    args: CancelLegalHoldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelLegalHoldCommandOutput) => void
  ): void;
  public cancelLegalHold(
    args: CancelLegalHoldCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelLegalHoldCommandOutput) => void),
    cb?: (err: any, data?: CancelLegalHoldCommandOutput) => void
  ): Promise<CancelLegalHoldCommandOutput> | void {
    const command = new CancelLegalHoldCommand(args);
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
   * <p>Creates a backup plan using a backup plan name and backup rules. A backup plan is a
   *          document that contains information that Backup uses to schedule tasks that
   *          create recovery points for resources.</p>
   *          <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, you receive
   *          an <code>AlreadyExistsException</code> exception.</p>
   */
  public createBackupPlan(
    args: CreateBackupPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackupPlanCommandOutput>;
  public createBackupPlan(
    args: CreateBackupPlanCommandInput,
    cb: (err: any, data?: CreateBackupPlanCommandOutput) => void
  ): void;
  public createBackupPlan(
    args: CreateBackupPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupPlanCommandOutput) => void
  ): void;
  public createBackupPlan(
    args: CreateBackupPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackupPlanCommandOutput) => void),
    cb?: (err: any, data?: CreateBackupPlanCommandOutput) => void
  ): Promise<CreateBackupPlanCommandOutput> | void {
    const command = new CreateBackupPlanCommand(args);
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
   * <p>Creates a JSON document that specifies a set of resources to assign to a backup plan.
   *          For examples, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-json">Assigning resources programmatically</a>. </p>
   */
  public createBackupSelection(
    args: CreateBackupSelectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackupSelectionCommandOutput>;
  public createBackupSelection(
    args: CreateBackupSelectionCommandInput,
    cb: (err: any, data?: CreateBackupSelectionCommandOutput) => void
  ): void;
  public createBackupSelection(
    args: CreateBackupSelectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupSelectionCommandOutput) => void
  ): void;
  public createBackupSelection(
    args: CreateBackupSelectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackupSelectionCommandOutput) => void),
    cb?: (err: any, data?: CreateBackupSelectionCommandOutput) => void
  ): Promise<CreateBackupSelectionCommandOutput> | void {
    const command = new CreateBackupSelectionCommand(args);
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
   * <p>Creates a logical container where backups are stored. A <code>CreateBackupVault</code>
   *          request includes a name, optionally one or more resource tags, an encryption key, and a
   *          request ID.</p>
   *          <note>
   *             <p>Do not include sensitive data, such as passport numbers, in the name of a backup
   *             vault.</p>
   *          </note>
   */
  public createBackupVault(
    args: CreateBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackupVaultCommandOutput>;
  public createBackupVault(
    args: CreateBackupVaultCommandInput,
    cb: (err: any, data?: CreateBackupVaultCommandOutput) => void
  ): void;
  public createBackupVault(
    args: CreateBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupVaultCommandOutput) => void
  ): void;
  public createBackupVault(
    args: CreateBackupVaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBackupVaultCommandOutput) => void),
    cb?: (err: any, data?: CreateBackupVaultCommandOutput) => void
  ): Promise<CreateBackupVaultCommandOutput> | void {
    const command = new CreateBackupVaultCommand(args);
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
   * <p>Creates a framework with one or more controls. A framework is a collection of controls
   *          that you can use to evaluate your backup practices. By using pre-built customizable
   *          controls to define your policies, you can evaluate whether your backup practices comply
   *          with your policies and which resources are not yet in compliance.</p>
   */
  public createFramework(
    args: CreateFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFrameworkCommandOutput>;
  public createFramework(
    args: CreateFrameworkCommandInput,
    cb: (err: any, data?: CreateFrameworkCommandOutput) => void
  ): void;
  public createFramework(
    args: CreateFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFrameworkCommandOutput) => void
  ): void;
  public createFramework(
    args: CreateFrameworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFrameworkCommandOutput) => void),
    cb?: (err: any, data?: CreateFrameworkCommandOutput) => void
  ): Promise<CreateFrameworkCommandOutput> | void {
    const command = new CreateFrameworkCommand(args);
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
   * <p>This action creates a legal hold on a recovery point (backup). A legal hold
   *          is a restraint on altering or deleting a backup until an authorized user cancels the
   *          legal hold. Any actions to delete or disassociate a recovery point will fail with
   *          an error if one or more active legal holds are on the recovery point.</p>
   */
  public createLegalHold(
    args: CreateLegalHoldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLegalHoldCommandOutput>;
  public createLegalHold(
    args: CreateLegalHoldCommandInput,
    cb: (err: any, data?: CreateLegalHoldCommandOutput) => void
  ): void;
  public createLegalHold(
    args: CreateLegalHoldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLegalHoldCommandOutput) => void
  ): void;
  public createLegalHold(
    args: CreateLegalHoldCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLegalHoldCommandOutput) => void),
    cb?: (err: any, data?: CreateLegalHoldCommandOutput) => void
  ): Promise<CreateLegalHoldCommandOutput> | void {
    const command = new CreateLegalHoldCommand(args);
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
   * <p>Creates a report plan. A report plan is a document that contains information about the
   *          contents of the report and where Backup will deliver it.</p>
   *          <p>If you call <code>CreateReportPlan</code> with a plan that already exists, you receive
   *          an <code>AlreadyExistsException</code> exception.</p>
   */
  public createReportPlan(
    args: CreateReportPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReportPlanCommandOutput>;
  public createReportPlan(
    args: CreateReportPlanCommandInput,
    cb: (err: any, data?: CreateReportPlanCommandOutput) => void
  ): void;
  public createReportPlan(
    args: CreateReportPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReportPlanCommandOutput) => void
  ): void;
  public createReportPlan(
    args: CreateReportPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReportPlanCommandOutput) => void),
    cb?: (err: any, data?: CreateReportPlanCommandOutput) => void
  ): Promise<CreateReportPlanCommandOutput> | void {
    const command = new CreateReportPlanCommand(args);
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
   * <p>Deletes a backup plan. A backup plan can only be deleted after all associated selections
   *          of resources have been deleted. Deleting a backup plan deletes the current version of a
   *          backup plan. Previous versions, if any, will still exist.</p>
   */
  public deleteBackupPlan(
    args: DeleteBackupPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupPlanCommandOutput>;
  public deleteBackupPlan(
    args: DeleteBackupPlanCommandInput,
    cb: (err: any, data?: DeleteBackupPlanCommandOutput) => void
  ): void;
  public deleteBackupPlan(
    args: DeleteBackupPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupPlanCommandOutput) => void
  ): void;
  public deleteBackupPlan(
    args: DeleteBackupPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackupPlanCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupPlanCommandOutput) => void
  ): Promise<DeleteBackupPlanCommandOutput> | void {
    const command = new DeleteBackupPlanCommand(args);
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
   * <p>Deletes the resource selection associated with a backup plan that is specified by the
   *             <code>SelectionId</code>.</p>
   */
  public deleteBackupSelection(
    args: DeleteBackupSelectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupSelectionCommandOutput>;
  public deleteBackupSelection(
    args: DeleteBackupSelectionCommandInput,
    cb: (err: any, data?: DeleteBackupSelectionCommandOutput) => void
  ): void;
  public deleteBackupSelection(
    args: DeleteBackupSelectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupSelectionCommandOutput) => void
  ): void;
  public deleteBackupSelection(
    args: DeleteBackupSelectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackupSelectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupSelectionCommandOutput) => void
  ): Promise<DeleteBackupSelectionCommandOutput> | void {
    const command = new DeleteBackupSelectionCommand(args);
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
   * <p>Deletes the backup vault identified by its name. A vault can be deleted only if it is
   *          empty.</p>
   */
  public deleteBackupVault(
    args: DeleteBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupVaultCommandOutput>;
  public deleteBackupVault(
    args: DeleteBackupVaultCommandInput,
    cb: (err: any, data?: DeleteBackupVaultCommandOutput) => void
  ): void;
  public deleteBackupVault(
    args: DeleteBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupVaultCommandOutput) => void
  ): void;
  public deleteBackupVault(
    args: DeleteBackupVaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackupVaultCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupVaultCommandOutput) => void
  ): Promise<DeleteBackupVaultCommandOutput> | void {
    const command = new DeleteBackupVaultCommand(args);
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
   * <p>Deletes the policy document that manages permissions on a backup vault.</p>
   */
  public deleteBackupVaultAccessPolicy(
    args: DeleteBackupVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupVaultAccessPolicyCommandOutput>;
  public deleteBackupVaultAccessPolicy(
    args: DeleteBackupVaultAccessPolicyCommandInput,
    cb: (err: any, data?: DeleteBackupVaultAccessPolicyCommandOutput) => void
  ): void;
  public deleteBackupVaultAccessPolicy(
    args: DeleteBackupVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupVaultAccessPolicyCommandOutput) => void
  ): void;
  public deleteBackupVaultAccessPolicy(
    args: DeleteBackupVaultAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackupVaultAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupVaultAccessPolicyCommandOutput) => void
  ): Promise<DeleteBackupVaultAccessPolicyCommandOutput> | void {
    const command = new DeleteBackupVaultAccessPolicyCommand(args);
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
   * <p>Deletes Backup Vault Lock from a backup vault specified by a backup vault
   *          name.</p>
   *          <p>If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using
   *          API operations, and you will receive an <code>InvalidRequestException</code> if you attempt
   *          to do so. For more information, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html">Vault Lock</a> in the
   *                <i>Backup Developer Guide</i>.</p>
   */
  public deleteBackupVaultLockConfiguration(
    args: DeleteBackupVaultLockConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupVaultLockConfigurationCommandOutput>;
  public deleteBackupVaultLockConfiguration(
    args: DeleteBackupVaultLockConfigurationCommandInput,
    cb: (err: any, data?: DeleteBackupVaultLockConfigurationCommandOutput) => void
  ): void;
  public deleteBackupVaultLockConfiguration(
    args: DeleteBackupVaultLockConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupVaultLockConfigurationCommandOutput) => void
  ): void;
  public deleteBackupVaultLockConfiguration(
    args: DeleteBackupVaultLockConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackupVaultLockConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupVaultLockConfigurationCommandOutput) => void
  ): Promise<DeleteBackupVaultLockConfigurationCommandOutput> | void {
    const command = new DeleteBackupVaultLockConfigurationCommand(args);
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
   * <p>Deletes event notifications for the specified backup vault.</p>
   */
  public deleteBackupVaultNotifications(
    args: DeleteBackupVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupVaultNotificationsCommandOutput>;
  public deleteBackupVaultNotifications(
    args: DeleteBackupVaultNotificationsCommandInput,
    cb: (err: any, data?: DeleteBackupVaultNotificationsCommandOutput) => void
  ): void;
  public deleteBackupVaultNotifications(
    args: DeleteBackupVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupVaultNotificationsCommandOutput) => void
  ): void;
  public deleteBackupVaultNotifications(
    args: DeleteBackupVaultNotificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBackupVaultNotificationsCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupVaultNotificationsCommandOutput) => void
  ): Promise<DeleteBackupVaultNotificationsCommandOutput> | void {
    const command = new DeleteBackupVaultNotificationsCommand(args);
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
   * <p>Deletes the framework specified by a framework name.</p>
   */
  public deleteFramework(
    args: DeleteFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFrameworkCommandOutput>;
  public deleteFramework(
    args: DeleteFrameworkCommandInput,
    cb: (err: any, data?: DeleteFrameworkCommandOutput) => void
  ): void;
  public deleteFramework(
    args: DeleteFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFrameworkCommandOutput) => void
  ): void;
  public deleteFramework(
    args: DeleteFrameworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFrameworkCommandOutput) => void),
    cb?: (err: any, data?: DeleteFrameworkCommandOutput) => void
  ): Promise<DeleteFrameworkCommandOutput> | void {
    const command = new DeleteFrameworkCommand(args);
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
   * <p>Deletes the recovery point specified by a recovery point ID.</p>
   *          <p>If the recovery point ID belongs to a continuous backup, calling this endpoint deletes
   *          the existing continuous backup and stops future continuous backup.</p>
   *          <p>When an IAM role's permissions are insufficient to call this API, the service sends back
   *       an HTTP 200 response with an empty HTTP body, but the recovery point is not deleted.
   *       Instead, it enters an <code>EXPIRED</code> state.</p>
   *          <p>
   *             <code>EXPIRED</code> recovery points can be deleted with this API once the IAM role
   *       has the <code>iam:CreateServiceLinkedRole</code> action. To learn more about adding this role, see
   *       <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/deleting-backups.html#deleting-backups-troubleshooting">
   *          Troubleshooting manual deletions</a>.</p>
   *          <p>If the user or role is deleted or the permission within the role is removed,
   *       the deletion will not be successful and will enter an <code>EXPIRED</code> state.</p>
   */
  public deleteRecoveryPoint(
    args: DeleteRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecoveryPointCommandOutput>;
  public deleteRecoveryPoint(
    args: DeleteRecoveryPointCommandInput,
    cb: (err: any, data?: DeleteRecoveryPointCommandOutput) => void
  ): void;
  public deleteRecoveryPoint(
    args: DeleteRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecoveryPointCommandOutput) => void
  ): void;
  public deleteRecoveryPoint(
    args: DeleteRecoveryPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRecoveryPointCommandOutput) => void),
    cb?: (err: any, data?: DeleteRecoveryPointCommandOutput) => void
  ): Promise<DeleteRecoveryPointCommandOutput> | void {
    const command = new DeleteRecoveryPointCommand(args);
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
   * <p>Deletes the report plan specified by a report plan name.</p>
   */
  public deleteReportPlan(
    args: DeleteReportPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReportPlanCommandOutput>;
  public deleteReportPlan(
    args: DeleteReportPlanCommandInput,
    cb: (err: any, data?: DeleteReportPlanCommandOutput) => void
  ): void;
  public deleteReportPlan(
    args: DeleteReportPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReportPlanCommandOutput) => void
  ): void;
  public deleteReportPlan(
    args: DeleteReportPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReportPlanCommandOutput) => void),
    cb?: (err: any, data?: DeleteReportPlanCommandOutput) => void
  ): Promise<DeleteReportPlanCommandOutput> | void {
    const command = new DeleteReportPlanCommand(args);
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
   * <p>Returns backup job details for the specified <code>BackupJobId</code>.</p>
   */
  public describeBackupJob(
    args: DescribeBackupJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupJobCommandOutput>;
  public describeBackupJob(
    args: DescribeBackupJobCommandInput,
    cb: (err: any, data?: DescribeBackupJobCommandOutput) => void
  ): void;
  public describeBackupJob(
    args: DescribeBackupJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupJobCommandOutput) => void
  ): void;
  public describeBackupJob(
    args: DescribeBackupJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBackupJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeBackupJobCommandOutput) => void
  ): Promise<DescribeBackupJobCommandOutput> | void {
    const command = new DescribeBackupJobCommand(args);
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
   * <p>Returns metadata about a backup vault specified by its name.</p>
   */
  public describeBackupVault(
    args: DescribeBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupVaultCommandOutput>;
  public describeBackupVault(
    args: DescribeBackupVaultCommandInput,
    cb: (err: any, data?: DescribeBackupVaultCommandOutput) => void
  ): void;
  public describeBackupVault(
    args: DescribeBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupVaultCommandOutput) => void
  ): void;
  public describeBackupVault(
    args: DescribeBackupVaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBackupVaultCommandOutput) => void),
    cb?: (err: any, data?: DescribeBackupVaultCommandOutput) => void
  ): Promise<DescribeBackupVaultCommandOutput> | void {
    const command = new DescribeBackupVaultCommand(args);
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
   * <p>Returns metadata associated with creating a copy of a resource.</p>
   */
  public describeCopyJob(
    args: DescribeCopyJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCopyJobCommandOutput>;
  public describeCopyJob(
    args: DescribeCopyJobCommandInput,
    cb: (err: any, data?: DescribeCopyJobCommandOutput) => void
  ): void;
  public describeCopyJob(
    args: DescribeCopyJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCopyJobCommandOutput) => void
  ): void;
  public describeCopyJob(
    args: DescribeCopyJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCopyJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeCopyJobCommandOutput) => void
  ): Promise<DescribeCopyJobCommandOutput> | void {
    const command = new DescribeCopyJobCommand(args);
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
   * <p>Returns the framework details for the specified <code>FrameworkName</code>.</p>
   */
  public describeFramework(
    args: DescribeFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFrameworkCommandOutput>;
  public describeFramework(
    args: DescribeFrameworkCommandInput,
    cb: (err: any, data?: DescribeFrameworkCommandOutput) => void
  ): void;
  public describeFramework(
    args: DescribeFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFrameworkCommandOutput) => void
  ): void;
  public describeFramework(
    args: DescribeFrameworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFrameworkCommandOutput) => void),
    cb?: (err: any, data?: DescribeFrameworkCommandOutput) => void
  ): Promise<DescribeFrameworkCommandOutput> | void {
    const command = new DescribeFrameworkCommand(args);
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
   * <p>Describes whether the Amazon Web Services account is opted in to cross-account backup.
   *          Returns an error if the account is not a member of an Organizations organization.
   *          Example: <code>describe-global-settings --region us-west-2</code>
   *          </p>
   */
  public describeGlobalSettings(
    args: DescribeGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalSettingsCommandOutput>;
  public describeGlobalSettings(
    args: DescribeGlobalSettingsCommandInput,
    cb: (err: any, data?: DescribeGlobalSettingsCommandOutput) => void
  ): void;
  public describeGlobalSettings(
    args: DescribeGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalSettingsCommandOutput) => void
  ): void;
  public describeGlobalSettings(
    args: DescribeGlobalSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGlobalSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeGlobalSettingsCommandOutput) => void
  ): Promise<DescribeGlobalSettingsCommandOutput> | void {
    const command = new DescribeGlobalSettingsCommand(args);
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
   * <p>Returns information about a saved resource, including the last time it was backed up,
   *          its Amazon Resource Name (ARN), and the Amazon Web Services service type of the saved
   *          resource.</p>
   */
  public describeProtectedResource(
    args: DescribeProtectedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProtectedResourceCommandOutput>;
  public describeProtectedResource(
    args: DescribeProtectedResourceCommandInput,
    cb: (err: any, data?: DescribeProtectedResourceCommandOutput) => void
  ): void;
  public describeProtectedResource(
    args: DescribeProtectedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProtectedResourceCommandOutput) => void
  ): void;
  public describeProtectedResource(
    args: DescribeProtectedResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProtectedResourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeProtectedResourceCommandOutput) => void
  ): Promise<DescribeProtectedResourceCommandOutput> | void {
    const command = new DescribeProtectedResourceCommand(args);
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
   * <p>Returns metadata associated with a recovery point, including ID, status, encryption, and
   *          lifecycle.</p>
   */
  public describeRecoveryPoint(
    args: DescribeRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecoveryPointCommandOutput>;
  public describeRecoveryPoint(
    args: DescribeRecoveryPointCommandInput,
    cb: (err: any, data?: DescribeRecoveryPointCommandOutput) => void
  ): void;
  public describeRecoveryPoint(
    args: DescribeRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecoveryPointCommandOutput) => void
  ): void;
  public describeRecoveryPoint(
    args: DescribeRecoveryPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRecoveryPointCommandOutput) => void),
    cb?: (err: any, data?: DescribeRecoveryPointCommandOutput) => void
  ): Promise<DescribeRecoveryPointCommandOutput> | void {
    const command = new DescribeRecoveryPointCommand(args);
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
   * <p>Returns the current service opt-in settings for the Region. If service opt-in is enabled
   *          for a service, Backup tries to protect that service's resources in this Region,
   *          when the resource is included in an on-demand backup or scheduled backup plan. Otherwise,
   *             Backup does not try to protect that service's resources in this
   *          Region.</p>
   */
  public describeRegionSettings(
    args: DescribeRegionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegionSettingsCommandOutput>;
  public describeRegionSettings(
    args: DescribeRegionSettingsCommandInput,
    cb: (err: any, data?: DescribeRegionSettingsCommandOutput) => void
  ): void;
  public describeRegionSettings(
    args: DescribeRegionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegionSettingsCommandOutput) => void
  ): void;
  public describeRegionSettings(
    args: DescribeRegionSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRegionSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeRegionSettingsCommandOutput) => void
  ): Promise<DescribeRegionSettingsCommandOutput> | void {
    const command = new DescribeRegionSettingsCommand(args);
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
   * <p>Returns the details associated with creating a report as specified by its
   *             <code>ReportJobId</code>.</p>
   */
  public describeReportJob(
    args: DescribeReportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReportJobCommandOutput>;
  public describeReportJob(
    args: DescribeReportJobCommandInput,
    cb: (err: any, data?: DescribeReportJobCommandOutput) => void
  ): void;
  public describeReportJob(
    args: DescribeReportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReportJobCommandOutput) => void
  ): void;
  public describeReportJob(
    args: DescribeReportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeReportJobCommandOutput) => void
  ): Promise<DescribeReportJobCommandOutput> | void {
    const command = new DescribeReportJobCommand(args);
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
   * <p>Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region.</p>
   */
  public describeReportPlan(
    args: DescribeReportPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReportPlanCommandOutput>;
  public describeReportPlan(
    args: DescribeReportPlanCommandInput,
    cb: (err: any, data?: DescribeReportPlanCommandOutput) => void
  ): void;
  public describeReportPlan(
    args: DescribeReportPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReportPlanCommandOutput) => void
  ): void;
  public describeReportPlan(
    args: DescribeReportPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeReportPlanCommandOutput) => void),
    cb?: (err: any, data?: DescribeReportPlanCommandOutput) => void
  ): Promise<DescribeReportPlanCommandOutput> | void {
    const command = new DescribeReportPlanCommand(args);
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
   * <p>Returns metadata associated with a restore job that is specified by a job ID.</p>
   */
  public describeRestoreJob(
    args: DescribeRestoreJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRestoreJobCommandOutput>;
  public describeRestoreJob(
    args: DescribeRestoreJobCommandInput,
    cb: (err: any, data?: DescribeRestoreJobCommandOutput) => void
  ): void;
  public describeRestoreJob(
    args: DescribeRestoreJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRestoreJobCommandOutput) => void
  ): void;
  public describeRestoreJob(
    args: DescribeRestoreJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRestoreJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeRestoreJobCommandOutput) => void
  ): Promise<DescribeRestoreJobCommandOutput> | void {
    const command = new DescribeRestoreJobCommand(args);
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
   * <p>Deletes the specified continuous backup recovery point from Backup and
   *          releases control of that continuous backup to the source service, such as Amazon RDS. The source service will continue to create and retain continuous backups using the
   *          lifecycle that you specified in your original backup plan.</p>
   *          <p>Does not support snapshot backup recovery points.</p>
   */
  public disassociateRecoveryPoint(
    args: DisassociateRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRecoveryPointCommandOutput>;
  public disassociateRecoveryPoint(
    args: DisassociateRecoveryPointCommandInput,
    cb: (err: any, data?: DisassociateRecoveryPointCommandOutput) => void
  ): void;
  public disassociateRecoveryPoint(
    args: DisassociateRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRecoveryPointCommandOutput) => void
  ): void;
  public disassociateRecoveryPoint(
    args: DisassociateRecoveryPointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateRecoveryPointCommandOutput) => void),
    cb?: (err: any, data?: DisassociateRecoveryPointCommandOutput) => void
  ): Promise<DisassociateRecoveryPointCommandOutput> | void {
    const command = new DisassociateRecoveryPointCommand(args);
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
   * <p>This action to a specific child (nested) recovery point removes the relationship
   *          between the specified recovery point and its parent (composite) recovery point.</p>
   */
  public disassociateRecoveryPointFromParent(
    args: DisassociateRecoveryPointFromParentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRecoveryPointFromParentCommandOutput>;
  public disassociateRecoveryPointFromParent(
    args: DisassociateRecoveryPointFromParentCommandInput,
    cb: (err: any, data?: DisassociateRecoveryPointFromParentCommandOutput) => void
  ): void;
  public disassociateRecoveryPointFromParent(
    args: DisassociateRecoveryPointFromParentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRecoveryPointFromParentCommandOutput) => void
  ): void;
  public disassociateRecoveryPointFromParent(
    args: DisassociateRecoveryPointFromParentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateRecoveryPointFromParentCommandOutput) => void),
    cb?: (err: any, data?: DisassociateRecoveryPointFromParentCommandOutput) => void
  ): Promise<DisassociateRecoveryPointFromParentCommandOutput> | void {
    const command = new DisassociateRecoveryPointFromParentCommand(args);
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
   * <p>Returns the backup plan that is specified by the plan ID as a backup template.</p>
   */
  public exportBackupPlanTemplate(
    args: ExportBackupPlanTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportBackupPlanTemplateCommandOutput>;
  public exportBackupPlanTemplate(
    args: ExportBackupPlanTemplateCommandInput,
    cb: (err: any, data?: ExportBackupPlanTemplateCommandOutput) => void
  ): void;
  public exportBackupPlanTemplate(
    args: ExportBackupPlanTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportBackupPlanTemplateCommandOutput) => void
  ): void;
  public exportBackupPlanTemplate(
    args: ExportBackupPlanTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportBackupPlanTemplateCommandOutput) => void),
    cb?: (err: any, data?: ExportBackupPlanTemplateCommandOutput) => void
  ): Promise<ExportBackupPlanTemplateCommandOutput> | void {
    const command = new ExportBackupPlanTemplateCommand(args);
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
   * <p>Returns <code>BackupPlan</code> details for the specified <code>BackupPlanId</code>. The
   *          details are the body of a backup plan in JSON format, in addition to plan metadata.</p>
   */
  public getBackupPlan(
    args: GetBackupPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupPlanCommandOutput>;
  public getBackupPlan(
    args: GetBackupPlanCommandInput,
    cb: (err: any, data?: GetBackupPlanCommandOutput) => void
  ): void;
  public getBackupPlan(
    args: GetBackupPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupPlanCommandOutput) => void
  ): void;
  public getBackupPlan(
    args: GetBackupPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackupPlanCommandOutput) => void),
    cb?: (err: any, data?: GetBackupPlanCommandOutput) => void
  ): Promise<GetBackupPlanCommandOutput> | void {
    const command = new GetBackupPlanCommand(args);
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
   * <p>Returns a valid JSON document specifying a backup plan or an error.</p>
   */
  public getBackupPlanFromJSON(
    args: GetBackupPlanFromJSONCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupPlanFromJSONCommandOutput>;
  public getBackupPlanFromJSON(
    args: GetBackupPlanFromJSONCommandInput,
    cb: (err: any, data?: GetBackupPlanFromJSONCommandOutput) => void
  ): void;
  public getBackupPlanFromJSON(
    args: GetBackupPlanFromJSONCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupPlanFromJSONCommandOutput) => void
  ): void;
  public getBackupPlanFromJSON(
    args: GetBackupPlanFromJSONCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackupPlanFromJSONCommandOutput) => void),
    cb?: (err: any, data?: GetBackupPlanFromJSONCommandOutput) => void
  ): Promise<GetBackupPlanFromJSONCommandOutput> | void {
    const command = new GetBackupPlanFromJSONCommand(args);
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
   * <p>Returns the template specified by its <code>templateId</code> as a backup plan.</p>
   */
  public getBackupPlanFromTemplate(
    args: GetBackupPlanFromTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupPlanFromTemplateCommandOutput>;
  public getBackupPlanFromTemplate(
    args: GetBackupPlanFromTemplateCommandInput,
    cb: (err: any, data?: GetBackupPlanFromTemplateCommandOutput) => void
  ): void;
  public getBackupPlanFromTemplate(
    args: GetBackupPlanFromTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupPlanFromTemplateCommandOutput) => void
  ): void;
  public getBackupPlanFromTemplate(
    args: GetBackupPlanFromTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackupPlanFromTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetBackupPlanFromTemplateCommandOutput) => void
  ): Promise<GetBackupPlanFromTemplateCommandOutput> | void {
    const command = new GetBackupPlanFromTemplateCommand(args);
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
   * <p>Returns selection metadata and a document in JSON format that specifies a list of
   *          resources that are associated with a backup plan.</p>
   */
  public getBackupSelection(
    args: GetBackupSelectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupSelectionCommandOutput>;
  public getBackupSelection(
    args: GetBackupSelectionCommandInput,
    cb: (err: any, data?: GetBackupSelectionCommandOutput) => void
  ): void;
  public getBackupSelection(
    args: GetBackupSelectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupSelectionCommandOutput) => void
  ): void;
  public getBackupSelection(
    args: GetBackupSelectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackupSelectionCommandOutput) => void),
    cb?: (err: any, data?: GetBackupSelectionCommandOutput) => void
  ): Promise<GetBackupSelectionCommandOutput> | void {
    const command = new GetBackupSelectionCommand(args);
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
   * <p>Returns the access policy document that is associated with the named backup
   *          vault.</p>
   */
  public getBackupVaultAccessPolicy(
    args: GetBackupVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupVaultAccessPolicyCommandOutput>;
  public getBackupVaultAccessPolicy(
    args: GetBackupVaultAccessPolicyCommandInput,
    cb: (err: any, data?: GetBackupVaultAccessPolicyCommandOutput) => void
  ): void;
  public getBackupVaultAccessPolicy(
    args: GetBackupVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupVaultAccessPolicyCommandOutput) => void
  ): void;
  public getBackupVaultAccessPolicy(
    args: GetBackupVaultAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackupVaultAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetBackupVaultAccessPolicyCommandOutput) => void
  ): Promise<GetBackupVaultAccessPolicyCommandOutput> | void {
    const command = new GetBackupVaultAccessPolicyCommand(args);
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
   * <p>Returns event notifications for the specified backup vault.</p>
   */
  public getBackupVaultNotifications(
    args: GetBackupVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupVaultNotificationsCommandOutput>;
  public getBackupVaultNotifications(
    args: GetBackupVaultNotificationsCommandInput,
    cb: (err: any, data?: GetBackupVaultNotificationsCommandOutput) => void
  ): void;
  public getBackupVaultNotifications(
    args: GetBackupVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupVaultNotificationsCommandOutput) => void
  ): void;
  public getBackupVaultNotifications(
    args: GetBackupVaultNotificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBackupVaultNotificationsCommandOutput) => void),
    cb?: (err: any, data?: GetBackupVaultNotificationsCommandOutput) => void
  ): Promise<GetBackupVaultNotificationsCommandOutput> | void {
    const command = new GetBackupVaultNotificationsCommand(args);
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
   * <p>This action returns details for a specified legal hold. The details are the
   *          body of a legal hold in JSON format, in addition to metadata.</p>
   */
  public getLegalHold(
    args: GetLegalHoldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLegalHoldCommandOutput>;
  public getLegalHold(args: GetLegalHoldCommandInput, cb: (err: any, data?: GetLegalHoldCommandOutput) => void): void;
  public getLegalHold(
    args: GetLegalHoldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLegalHoldCommandOutput) => void
  ): void;
  public getLegalHold(
    args: GetLegalHoldCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLegalHoldCommandOutput) => void),
    cb?: (err: any, data?: GetLegalHoldCommandOutput) => void
  ): Promise<GetLegalHoldCommandOutput> | void {
    const command = new GetLegalHoldCommand(args);
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
   * <p>Returns a set of metadata key-value pairs that were used to create the backup.</p>
   */
  public getRecoveryPointRestoreMetadata(
    args: GetRecoveryPointRestoreMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecoveryPointRestoreMetadataCommandOutput>;
  public getRecoveryPointRestoreMetadata(
    args: GetRecoveryPointRestoreMetadataCommandInput,
    cb: (err: any, data?: GetRecoveryPointRestoreMetadataCommandOutput) => void
  ): void;
  public getRecoveryPointRestoreMetadata(
    args: GetRecoveryPointRestoreMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecoveryPointRestoreMetadataCommandOutput) => void
  ): void;
  public getRecoveryPointRestoreMetadata(
    args: GetRecoveryPointRestoreMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRecoveryPointRestoreMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetRecoveryPointRestoreMetadataCommandOutput) => void
  ): Promise<GetRecoveryPointRestoreMetadataCommandOutput> | void {
    const command = new GetRecoveryPointRestoreMetadataCommand(args);
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
   * <p>Returns the Amazon Web Services resource types supported by Backup.</p>
   */
  public getSupportedResourceTypes(
    args: GetSupportedResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSupportedResourceTypesCommandOutput>;
  public getSupportedResourceTypes(
    args: GetSupportedResourceTypesCommandInput,
    cb: (err: any, data?: GetSupportedResourceTypesCommandOutput) => void
  ): void;
  public getSupportedResourceTypes(
    args: GetSupportedResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSupportedResourceTypesCommandOutput) => void
  ): void;
  public getSupportedResourceTypes(
    args: GetSupportedResourceTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSupportedResourceTypesCommandOutput) => void),
    cb?: (err: any, data?: GetSupportedResourceTypesCommandOutput) => void
  ): Promise<GetSupportedResourceTypesCommandOutput> | void {
    const command = new GetSupportedResourceTypesCommand(args);
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
   * <p>Returns a list of existing backup jobs for an authenticated account for the last 30
   *          days. For a longer period of time, consider using these <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">monitoring tools</a>.</p>
   */
  public listBackupJobs(
    args: ListBackupJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupJobsCommandOutput>;
  public listBackupJobs(
    args: ListBackupJobsCommandInput,
    cb: (err: any, data?: ListBackupJobsCommandOutput) => void
  ): void;
  public listBackupJobs(
    args: ListBackupJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupJobsCommandOutput) => void
  ): void;
  public listBackupJobs(
    args: ListBackupJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBackupJobsCommandOutput) => void),
    cb?: (err: any, data?: ListBackupJobsCommandOutput) => void
  ): Promise<ListBackupJobsCommandOutput> | void {
    const command = new ListBackupJobsCommand(args);
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
   * <p>Returns a list of all active backup plans for an authenticated account. The list
   *          contains information such as Amazon Resource Names (ARNs), plan IDs, creation and deletion
   *          dates, version IDs, plan names, and creator request IDs.</p>
   */
  public listBackupPlans(
    args: ListBackupPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupPlansCommandOutput>;
  public listBackupPlans(
    args: ListBackupPlansCommandInput,
    cb: (err: any, data?: ListBackupPlansCommandOutput) => void
  ): void;
  public listBackupPlans(
    args: ListBackupPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupPlansCommandOutput) => void
  ): void;
  public listBackupPlans(
    args: ListBackupPlansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBackupPlansCommandOutput) => void),
    cb?: (err: any, data?: ListBackupPlansCommandOutput) => void
  ): Promise<ListBackupPlansCommandOutput> | void {
    const command = new ListBackupPlansCommand(args);
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
   * <p>Returns metadata of your saved backup plan templates, including the template ID, name,
   *          and the creation and deletion dates.</p>
   */
  public listBackupPlanTemplates(
    args: ListBackupPlanTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupPlanTemplatesCommandOutput>;
  public listBackupPlanTemplates(
    args: ListBackupPlanTemplatesCommandInput,
    cb: (err: any, data?: ListBackupPlanTemplatesCommandOutput) => void
  ): void;
  public listBackupPlanTemplates(
    args: ListBackupPlanTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupPlanTemplatesCommandOutput) => void
  ): void;
  public listBackupPlanTemplates(
    args: ListBackupPlanTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBackupPlanTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListBackupPlanTemplatesCommandOutput) => void
  ): Promise<ListBackupPlanTemplatesCommandOutput> | void {
    const command = new ListBackupPlanTemplatesCommand(args);
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
   * <p>Returns version metadata of your backup plans, including Amazon Resource Names (ARNs),
   *          backup plan IDs, creation and deletion dates, plan names, and version IDs.</p>
   */
  public listBackupPlanVersions(
    args: ListBackupPlanVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupPlanVersionsCommandOutput>;
  public listBackupPlanVersions(
    args: ListBackupPlanVersionsCommandInput,
    cb: (err: any, data?: ListBackupPlanVersionsCommandOutput) => void
  ): void;
  public listBackupPlanVersions(
    args: ListBackupPlanVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupPlanVersionsCommandOutput) => void
  ): void;
  public listBackupPlanVersions(
    args: ListBackupPlanVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBackupPlanVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListBackupPlanVersionsCommandOutput) => void
  ): Promise<ListBackupPlanVersionsCommandOutput> | void {
    const command = new ListBackupPlanVersionsCommand(args);
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
   * <p>Returns an array containing metadata of the resources associated with the target backup
   *          plan.</p>
   */
  public listBackupSelections(
    args: ListBackupSelectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupSelectionsCommandOutput>;
  public listBackupSelections(
    args: ListBackupSelectionsCommandInput,
    cb: (err: any, data?: ListBackupSelectionsCommandOutput) => void
  ): void;
  public listBackupSelections(
    args: ListBackupSelectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupSelectionsCommandOutput) => void
  ): void;
  public listBackupSelections(
    args: ListBackupSelectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBackupSelectionsCommandOutput) => void),
    cb?: (err: any, data?: ListBackupSelectionsCommandOutput) => void
  ): Promise<ListBackupSelectionsCommandOutput> | void {
    const command = new ListBackupSelectionsCommand(args);
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
   * <p>Returns a list of recovery point storage containers along with information about
   *          them.</p>
   */
  public listBackupVaults(
    args: ListBackupVaultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupVaultsCommandOutput>;
  public listBackupVaults(
    args: ListBackupVaultsCommandInput,
    cb: (err: any, data?: ListBackupVaultsCommandOutput) => void
  ): void;
  public listBackupVaults(
    args: ListBackupVaultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupVaultsCommandOutput) => void
  ): void;
  public listBackupVaults(
    args: ListBackupVaultsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBackupVaultsCommandOutput) => void),
    cb?: (err: any, data?: ListBackupVaultsCommandOutput) => void
  ): Promise<ListBackupVaultsCommandOutput> | void {
    const command = new ListBackupVaultsCommand(args);
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
   * <p>Returns metadata about your copy jobs.</p>
   */
  public listCopyJobs(
    args: ListCopyJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCopyJobsCommandOutput>;
  public listCopyJobs(args: ListCopyJobsCommandInput, cb: (err: any, data?: ListCopyJobsCommandOutput) => void): void;
  public listCopyJobs(
    args: ListCopyJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCopyJobsCommandOutput) => void
  ): void;
  public listCopyJobs(
    args: ListCopyJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCopyJobsCommandOutput) => void),
    cb?: (err: any, data?: ListCopyJobsCommandOutput) => void
  ): Promise<ListCopyJobsCommandOutput> | void {
    const command = new ListCopyJobsCommand(args);
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
   * <p>Returns a list of all frameworks for an Amazon Web Services account and Amazon Web Services Region.</p>
   */
  public listFrameworks(
    args: ListFrameworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFrameworksCommandOutput>;
  public listFrameworks(
    args: ListFrameworksCommandInput,
    cb: (err: any, data?: ListFrameworksCommandOutput) => void
  ): void;
  public listFrameworks(
    args: ListFrameworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFrameworksCommandOutput) => void
  ): void;
  public listFrameworks(
    args: ListFrameworksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFrameworksCommandOutput) => void),
    cb?: (err: any, data?: ListFrameworksCommandOutput) => void
  ): Promise<ListFrameworksCommandOutput> | void {
    const command = new ListFrameworksCommand(args);
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
   * <p>This action returns metadata about active and previous legal holds.</p>
   */
  public listLegalHolds(
    args: ListLegalHoldsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLegalHoldsCommandOutput>;
  public listLegalHolds(
    args: ListLegalHoldsCommandInput,
    cb: (err: any, data?: ListLegalHoldsCommandOutput) => void
  ): void;
  public listLegalHolds(
    args: ListLegalHoldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLegalHoldsCommandOutput) => void
  ): void;
  public listLegalHolds(
    args: ListLegalHoldsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLegalHoldsCommandOutput) => void),
    cb?: (err: any, data?: ListLegalHoldsCommandOutput) => void
  ): Promise<ListLegalHoldsCommandOutput> | void {
    const command = new ListLegalHoldsCommand(args);
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
   * <p>Returns an array of resources successfully backed up by Backup, including
   *          the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a
   *          resource type.</p>
   */
  public listProtectedResources(
    args: ListProtectedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtectedResourcesCommandOutput>;
  public listProtectedResources(
    args: ListProtectedResourcesCommandInput,
    cb: (err: any, data?: ListProtectedResourcesCommandOutput) => void
  ): void;
  public listProtectedResources(
    args: ListProtectedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtectedResourcesCommandOutput) => void
  ): void;
  public listProtectedResources(
    args: ListProtectedResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProtectedResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListProtectedResourcesCommandOutput) => void
  ): Promise<ListProtectedResourcesCommandOutput> | void {
    const command = new ListProtectedResourcesCommand(args);
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
   * <p>Returns detailed information about the recovery points stored in a backup vault.</p>
   */
  public listRecoveryPointsByBackupVault(
    args: ListRecoveryPointsByBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecoveryPointsByBackupVaultCommandOutput>;
  public listRecoveryPointsByBackupVault(
    args: ListRecoveryPointsByBackupVaultCommandInput,
    cb: (err: any, data?: ListRecoveryPointsByBackupVaultCommandOutput) => void
  ): void;
  public listRecoveryPointsByBackupVault(
    args: ListRecoveryPointsByBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecoveryPointsByBackupVaultCommandOutput) => void
  ): void;
  public listRecoveryPointsByBackupVault(
    args: ListRecoveryPointsByBackupVaultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecoveryPointsByBackupVaultCommandOutput) => void),
    cb?: (err: any, data?: ListRecoveryPointsByBackupVaultCommandOutput) => void
  ): Promise<ListRecoveryPointsByBackupVaultCommandOutput> | void {
    const command = new ListRecoveryPointsByBackupVaultCommand(args);
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
   * <p>This action returns recovery point ARNs (Amazon Resource Names) of the
   *          specified legal hold.</p>
   */
  public listRecoveryPointsByLegalHold(
    args: ListRecoveryPointsByLegalHoldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecoveryPointsByLegalHoldCommandOutput>;
  public listRecoveryPointsByLegalHold(
    args: ListRecoveryPointsByLegalHoldCommandInput,
    cb: (err: any, data?: ListRecoveryPointsByLegalHoldCommandOutput) => void
  ): void;
  public listRecoveryPointsByLegalHold(
    args: ListRecoveryPointsByLegalHoldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecoveryPointsByLegalHoldCommandOutput) => void
  ): void;
  public listRecoveryPointsByLegalHold(
    args: ListRecoveryPointsByLegalHoldCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecoveryPointsByLegalHoldCommandOutput) => void),
    cb?: (err: any, data?: ListRecoveryPointsByLegalHoldCommandOutput) => void
  ): Promise<ListRecoveryPointsByLegalHoldCommandOutput> | void {
    const command = new ListRecoveryPointsByLegalHoldCommand(args);
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
   * <p>Returns detailed information about all the recovery points of the type specified by a
   *          resource Amazon Resource Name (ARN).</p>
   *          <note>
   *             <p>For Amazon EFS and Amazon EC2, this action only lists recovery points
   *             created by Backup.</p>
   *          </note>
   */
  public listRecoveryPointsByResource(
    args: ListRecoveryPointsByResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecoveryPointsByResourceCommandOutput>;
  public listRecoveryPointsByResource(
    args: ListRecoveryPointsByResourceCommandInput,
    cb: (err: any, data?: ListRecoveryPointsByResourceCommandOutput) => void
  ): void;
  public listRecoveryPointsByResource(
    args: ListRecoveryPointsByResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecoveryPointsByResourceCommandOutput) => void
  ): void;
  public listRecoveryPointsByResource(
    args: ListRecoveryPointsByResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRecoveryPointsByResourceCommandOutput) => void),
    cb?: (err: any, data?: ListRecoveryPointsByResourceCommandOutput) => void
  ): Promise<ListRecoveryPointsByResourceCommandOutput> | void {
    const command = new ListRecoveryPointsByResourceCommand(args);
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
   * <p>Returns details about your report jobs.</p>
   */
  public listReportJobs(
    args: ListReportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportJobsCommandOutput>;
  public listReportJobs(
    args: ListReportJobsCommandInput,
    cb: (err: any, data?: ListReportJobsCommandOutput) => void
  ): void;
  public listReportJobs(
    args: ListReportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportJobsCommandOutput) => void
  ): void;
  public listReportJobs(
    args: ListReportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListReportJobsCommandOutput) => void
  ): Promise<ListReportJobsCommandOutput> | void {
    const command = new ListReportJobsCommand(args);
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
   * <p>Returns a list of your report plans. For detailed information about a single report
   *          plan, use <code>DescribeReportPlan</code>.</p>
   */
  public listReportPlans(
    args: ListReportPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportPlansCommandOutput>;
  public listReportPlans(
    args: ListReportPlansCommandInput,
    cb: (err: any, data?: ListReportPlansCommandOutput) => void
  ): void;
  public listReportPlans(
    args: ListReportPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportPlansCommandOutput) => void
  ): void;
  public listReportPlans(
    args: ListReportPlansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReportPlansCommandOutput) => void),
    cb?: (err: any, data?: ListReportPlansCommandOutput) => void
  ): Promise<ListReportPlansCommandOutput> | void {
    const command = new ListReportPlansCommand(args);
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
   * <p>Returns a list of jobs that Backup initiated to restore a saved resource,
   *          including details about the recovery process.</p>
   */
  public listRestoreJobs(
    args: ListRestoreJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRestoreJobsCommandOutput>;
  public listRestoreJobs(
    args: ListRestoreJobsCommandInput,
    cb: (err: any, data?: ListRestoreJobsCommandOutput) => void
  ): void;
  public listRestoreJobs(
    args: ListRestoreJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRestoreJobsCommandOutput) => void
  ): void;
  public listRestoreJobs(
    args: ListRestoreJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRestoreJobsCommandOutput) => void),
    cb?: (err: any, data?: ListRestoreJobsCommandOutput) => void
  ): Promise<ListRestoreJobsCommandOutput> | void {
    const command = new ListRestoreJobsCommand(args);
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
   * <p>Returns a list of key-value pairs assigned to a target recovery point, backup plan, or
   *          backup vault.</p>
   *          <p>
   *             <code>ListTags</code> only works for resource types that support full Backup
   *          management of their backups. Those resource types are listed in the "Full Backup management" section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource"> Feature
   *             availability by resource</a> table.</p>
   */
  public listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  public listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  public listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsCommandOutput) => void),
    cb?: (err: any, data?: ListTagsCommandOutput) => void
  ): Promise<ListTagsCommandOutput> | void {
    const command = new ListTagsCommand(args);
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
   * <p>Sets a resource-based policy that is used to manage access permissions on the target
   *          backup vault. Requires a backup vault name and an access policy document in JSON
   *          format.</p>
   */
  public putBackupVaultAccessPolicy(
    args: PutBackupVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBackupVaultAccessPolicyCommandOutput>;
  public putBackupVaultAccessPolicy(
    args: PutBackupVaultAccessPolicyCommandInput,
    cb: (err: any, data?: PutBackupVaultAccessPolicyCommandOutput) => void
  ): void;
  public putBackupVaultAccessPolicy(
    args: PutBackupVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBackupVaultAccessPolicyCommandOutput) => void
  ): void;
  public putBackupVaultAccessPolicy(
    args: PutBackupVaultAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutBackupVaultAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutBackupVaultAccessPolicyCommandOutput) => void
  ): Promise<PutBackupVaultAccessPolicyCommandOutput> | void {
    const command = new PutBackupVaultAccessPolicyCommand(args);
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
   * <p>Applies Backup Vault Lock to a backup vault, preventing attempts to delete
   *          any recovery point stored in or created in a backup vault. Vault Lock also prevents
   *          attempts to update the lifecycle policy that controls the retention period of any recovery
   *          point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and
   *          maximum retention period for future backup and copy jobs that target a backup vault.</p>
   *          <note>
   *             <p>Backup Vault Lock has yet to receive a third-party assessment for SEC
   *             17a-4(f) and CFTC.</p>
   *          </note>
   */
  public putBackupVaultLockConfiguration(
    args: PutBackupVaultLockConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBackupVaultLockConfigurationCommandOutput>;
  public putBackupVaultLockConfiguration(
    args: PutBackupVaultLockConfigurationCommandInput,
    cb: (err: any, data?: PutBackupVaultLockConfigurationCommandOutput) => void
  ): void;
  public putBackupVaultLockConfiguration(
    args: PutBackupVaultLockConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBackupVaultLockConfigurationCommandOutput) => void
  ): void;
  public putBackupVaultLockConfiguration(
    args: PutBackupVaultLockConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutBackupVaultLockConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutBackupVaultLockConfigurationCommandOutput) => void
  ): Promise<PutBackupVaultLockConfigurationCommandOutput> | void {
    const command = new PutBackupVaultLockConfigurationCommand(args);
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
   * <p>Turns on notifications on a backup vault for the specified topic and events.</p>
   */
  public putBackupVaultNotifications(
    args: PutBackupVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBackupVaultNotificationsCommandOutput>;
  public putBackupVaultNotifications(
    args: PutBackupVaultNotificationsCommandInput,
    cb: (err: any, data?: PutBackupVaultNotificationsCommandOutput) => void
  ): void;
  public putBackupVaultNotifications(
    args: PutBackupVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBackupVaultNotificationsCommandOutput) => void
  ): void;
  public putBackupVaultNotifications(
    args: PutBackupVaultNotificationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutBackupVaultNotificationsCommandOutput) => void),
    cb?: (err: any, data?: PutBackupVaultNotificationsCommandOutput) => void
  ): Promise<PutBackupVaultNotificationsCommandOutput> | void {
    const command = new PutBackupVaultNotificationsCommand(args);
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
   * <p>Starts an on-demand backup job for the specified resource.</p>
   */
  public startBackupJob(
    args: StartBackupJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBackupJobCommandOutput>;
  public startBackupJob(
    args: StartBackupJobCommandInput,
    cb: (err: any, data?: StartBackupJobCommandOutput) => void
  ): void;
  public startBackupJob(
    args: StartBackupJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBackupJobCommandOutput) => void
  ): void;
  public startBackupJob(
    args: StartBackupJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartBackupJobCommandOutput) => void),
    cb?: (err: any, data?: StartBackupJobCommandOutput) => void
  ): Promise<StartBackupJobCommandOutput> | void {
    const command = new StartBackupJobCommand(args);
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
   * <p>Starts a job to create a one-time copy of the specified resource.</p>
   *          <p>Does not support continuous backups.</p>
   */
  public startCopyJob(
    args: StartCopyJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCopyJobCommandOutput>;
  public startCopyJob(args: StartCopyJobCommandInput, cb: (err: any, data?: StartCopyJobCommandOutput) => void): void;
  public startCopyJob(
    args: StartCopyJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCopyJobCommandOutput) => void
  ): void;
  public startCopyJob(
    args: StartCopyJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartCopyJobCommandOutput) => void),
    cb?: (err: any, data?: StartCopyJobCommandOutput) => void
  ): Promise<StartCopyJobCommandOutput> | void {
    const command = new StartCopyJobCommand(args);
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
   * <p>Starts an on-demand report job for the specified report plan.</p>
   */
  public startReportJob(
    args: StartReportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReportJobCommandOutput>;
  public startReportJob(
    args: StartReportJobCommandInput,
    cb: (err: any, data?: StartReportJobCommandOutput) => void
  ): void;
  public startReportJob(
    args: StartReportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReportJobCommandOutput) => void
  ): void;
  public startReportJob(
    args: StartReportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartReportJobCommandOutput) => void),
    cb?: (err: any, data?: StartReportJobCommandOutput) => void
  ): Promise<StartReportJobCommandOutput> | void {
    const command = new StartReportJobCommand(args);
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
   * <p>Recovers the saved resource identified by an Amazon Resource Name (ARN).</p>
   */
  public startRestoreJob(
    args: StartRestoreJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRestoreJobCommandOutput>;
  public startRestoreJob(
    args: StartRestoreJobCommandInput,
    cb: (err: any, data?: StartRestoreJobCommandOutput) => void
  ): void;
  public startRestoreJob(
    args: StartRestoreJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRestoreJobCommandOutput) => void
  ): void;
  public startRestoreJob(
    args: StartRestoreJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartRestoreJobCommandOutput) => void),
    cb?: (err: any, data?: StartRestoreJobCommandOutput) => void
  ): Promise<StartRestoreJobCommandOutput> | void {
    const command = new StartRestoreJobCommand(args);
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
   * <p>Attempts to cancel a job to create a one-time backup of a resource.</p>
   *          <p>This action is not supported for the following services:
   *          Amazon FSx for Windows File Server, Amazon FSx for Lustre, FSx for ONTAP
   *          , Amazon FSx for OpenZFS, Amazon DocumentDB (with MongoDB compatibility), Amazon RDS, Amazon Aurora,
   *          and Amazon Neptune.</p>
   */
  public stopBackupJob(
    args: StopBackupJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBackupJobCommandOutput>;
  public stopBackupJob(
    args: StopBackupJobCommandInput,
    cb: (err: any, data?: StopBackupJobCommandOutput) => void
  ): void;
  public stopBackupJob(
    args: StopBackupJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBackupJobCommandOutput) => void
  ): void;
  public stopBackupJob(
    args: StopBackupJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopBackupJobCommandOutput) => void),
    cb?: (err: any, data?: StopBackupJobCommandOutput) => void
  ): Promise<StopBackupJobCommandOutput> | void {
    const command = new StopBackupJobCommand(args);
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
   * <p>Assigns a set of key-value pairs to a recovery point, backup plan, or backup vault
   *          identified by an Amazon Resource Name (ARN).</p>
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
   * <p>Removes a set of key-value pairs from a recovery point, backup plan, or backup vault
   *          identified by an Amazon Resource Name (ARN)</p>
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
   * <p>Updates an existing backup plan identified by its <code>backupPlanId</code> with the
   *          input document in JSON format. The new version is uniquely identified by a
   *             <code>VersionId</code>.</p>
   */
  public updateBackupPlan(
    args: UpdateBackupPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackupPlanCommandOutput>;
  public updateBackupPlan(
    args: UpdateBackupPlanCommandInput,
    cb: (err: any, data?: UpdateBackupPlanCommandOutput) => void
  ): void;
  public updateBackupPlan(
    args: UpdateBackupPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackupPlanCommandOutput) => void
  ): void;
  public updateBackupPlan(
    args: UpdateBackupPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBackupPlanCommandOutput) => void),
    cb?: (err: any, data?: UpdateBackupPlanCommandOutput) => void
  ): Promise<UpdateBackupPlanCommandOutput> | void {
    const command = new UpdateBackupPlanCommand(args);
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
   * <p>Updates an existing framework identified by its <code>FrameworkName</code> with the
   *          input document in JSON format.</p>
   */
  public updateFramework(
    args: UpdateFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFrameworkCommandOutput>;
  public updateFramework(
    args: UpdateFrameworkCommandInput,
    cb: (err: any, data?: UpdateFrameworkCommandOutput) => void
  ): void;
  public updateFramework(
    args: UpdateFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFrameworkCommandOutput) => void
  ): void;
  public updateFramework(
    args: UpdateFrameworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFrameworkCommandOutput) => void),
    cb?: (err: any, data?: UpdateFrameworkCommandOutput) => void
  ): Promise<UpdateFrameworkCommandOutput> | void {
    const command = new UpdateFrameworkCommand(args);
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
   * <p>Updates whether the Amazon Web Services account is opted in to cross-account backup.
   *          Returns an error if the account is not an Organizations management account. Use the
   *             <code>DescribeGlobalSettings</code> API to determine the current settings.</p>
   */
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGlobalSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): Promise<UpdateGlobalSettingsCommandOutput> | void {
    const command = new UpdateGlobalSettingsCommand(args);
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
   * <p>Sets the transition lifecycle of a recovery point.</p>
   *          <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. Backup transitions and expires backups automatically according to
   *          the lifecycle that you define.</p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “retention” setting must be 90 days greater than the “transition to
   *          cold after days” setting. The “transition to cold after days” setting cannot be changed
   *          after a backup has been transitioned to cold.</p>
   *          <p>Resource types that are able to be transitioned to cold storage are listed in the "Lifecycle to cold storage"
   *          section of the <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html#features-by-resource">
   *             Feature availability by resource</a> table. Backup ignores this expression for
   *          other resource types.</p>
   *          <p>This operation does not support continuous backups.</p>
   */
  public updateRecoveryPointLifecycle(
    args: UpdateRecoveryPointLifecycleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecoveryPointLifecycleCommandOutput>;
  public updateRecoveryPointLifecycle(
    args: UpdateRecoveryPointLifecycleCommandInput,
    cb: (err: any, data?: UpdateRecoveryPointLifecycleCommandOutput) => void
  ): void;
  public updateRecoveryPointLifecycle(
    args: UpdateRecoveryPointLifecycleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecoveryPointLifecycleCommandOutput) => void
  ): void;
  public updateRecoveryPointLifecycle(
    args: UpdateRecoveryPointLifecycleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRecoveryPointLifecycleCommandOutput) => void),
    cb?: (err: any, data?: UpdateRecoveryPointLifecycleCommandOutput) => void
  ): Promise<UpdateRecoveryPointLifecycleCommandOutput> | void {
    const command = new UpdateRecoveryPointLifecycleCommand(args);
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
   * <p>Updates the current service opt-in settings for the Region. If service-opt-in is enabled
   *          for a service, Backup tries to protect that service's resources in this Region,
   *          when the resource is included in an on-demand backup or scheduled backup plan. Otherwise,
   *             Backup does not try to protect that service's resources in this Region. Use
   *          the <code>DescribeRegionSettings</code> API to determine the resource types that are
   *          supported.</p>
   */
  public updateRegionSettings(
    args: UpdateRegionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegionSettingsCommandOutput>;
  public updateRegionSettings(
    args: UpdateRegionSettingsCommandInput,
    cb: (err: any, data?: UpdateRegionSettingsCommandOutput) => void
  ): void;
  public updateRegionSettings(
    args: UpdateRegionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegionSettingsCommandOutput) => void
  ): void;
  public updateRegionSettings(
    args: UpdateRegionSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRegionSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateRegionSettingsCommandOutput) => void
  ): Promise<UpdateRegionSettingsCommandOutput> | void {
    const command = new UpdateRegionSettingsCommand(args);
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
   * <p>Updates an existing report plan identified by its <code>ReportPlanName</code> with the
   *          input document in JSON format.</p>
   */
  public updateReportPlan(
    args: UpdateReportPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReportPlanCommandOutput>;
  public updateReportPlan(
    args: UpdateReportPlanCommandInput,
    cb: (err: any, data?: UpdateReportPlanCommandOutput) => void
  ): void;
  public updateReportPlan(
    args: UpdateReportPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReportPlanCommandOutput) => void
  ): void;
  public updateReportPlan(
    args: UpdateReportPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateReportPlanCommandOutput) => void),
    cb?: (err: any, data?: UpdateReportPlanCommandOutput) => void
  ): Promise<UpdateReportPlanCommandOutput> | void {
    const command = new UpdateReportPlanCommand(args);
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
