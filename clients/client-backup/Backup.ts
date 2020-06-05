import { BackupClient } from "./BackupClient";
import {
  CreateBackupPlanCommand,
  CreateBackupPlanCommandInput,
  CreateBackupPlanCommandOutput
} from "./commands/CreateBackupPlanCommand";
import {
  CreateBackupSelectionCommand,
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput
} from "./commands/CreateBackupSelectionCommand";
import {
  CreateBackupVaultCommand,
  CreateBackupVaultCommandInput,
  CreateBackupVaultCommandOutput
} from "./commands/CreateBackupVaultCommand";
import {
  DeleteBackupPlanCommand,
  DeleteBackupPlanCommandInput,
  DeleteBackupPlanCommandOutput
} from "./commands/DeleteBackupPlanCommand";
import {
  DeleteBackupSelectionCommand,
  DeleteBackupSelectionCommandInput,
  DeleteBackupSelectionCommandOutput
} from "./commands/DeleteBackupSelectionCommand";
import {
  DeleteBackupVaultAccessPolicyCommand,
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput
} from "./commands/DeleteBackupVaultAccessPolicyCommand";
import {
  DeleteBackupVaultCommand,
  DeleteBackupVaultCommandInput,
  DeleteBackupVaultCommandOutput
} from "./commands/DeleteBackupVaultCommand";
import {
  DeleteBackupVaultNotificationsCommand,
  DeleteBackupVaultNotificationsCommandInput,
  DeleteBackupVaultNotificationsCommandOutput
} from "./commands/DeleteBackupVaultNotificationsCommand";
import {
  DeleteRecoveryPointCommand,
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput
} from "./commands/DeleteRecoveryPointCommand";
import {
  DescribeBackupJobCommand,
  DescribeBackupJobCommandInput,
  DescribeBackupJobCommandOutput
} from "./commands/DescribeBackupJobCommand";
import {
  DescribeBackupVaultCommand,
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput
} from "./commands/DescribeBackupVaultCommand";
import {
  DescribeCopyJobCommand,
  DescribeCopyJobCommandInput,
  DescribeCopyJobCommandOutput
} from "./commands/DescribeCopyJobCommand";
import {
  DescribeProtectedResourceCommand,
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput
} from "./commands/DescribeProtectedResourceCommand";
import {
  DescribeRecoveryPointCommand,
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput
} from "./commands/DescribeRecoveryPointCommand";
import {
  DescribeRestoreJobCommand,
  DescribeRestoreJobCommandInput,
  DescribeRestoreJobCommandOutput
} from "./commands/DescribeRestoreJobCommand";
import {
  ExportBackupPlanTemplateCommand,
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput
} from "./commands/ExportBackupPlanTemplateCommand";
import {
  GetBackupPlanCommand,
  GetBackupPlanCommandInput,
  GetBackupPlanCommandOutput
} from "./commands/GetBackupPlanCommand";
import {
  GetBackupPlanFromJSONCommand,
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput
} from "./commands/GetBackupPlanFromJSONCommand";
import {
  GetBackupPlanFromTemplateCommand,
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput
} from "./commands/GetBackupPlanFromTemplateCommand";
import {
  GetBackupSelectionCommand,
  GetBackupSelectionCommandInput,
  GetBackupSelectionCommandOutput
} from "./commands/GetBackupSelectionCommand";
import {
  GetBackupVaultAccessPolicyCommand,
  GetBackupVaultAccessPolicyCommandInput,
  GetBackupVaultAccessPolicyCommandOutput
} from "./commands/GetBackupVaultAccessPolicyCommand";
import {
  GetBackupVaultNotificationsCommand,
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput
} from "./commands/GetBackupVaultNotificationsCommand";
import {
  GetRecoveryPointRestoreMetadataCommand,
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput
} from "./commands/GetRecoveryPointRestoreMetadataCommand";
import {
  GetSupportedResourceTypesCommand,
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput
} from "./commands/GetSupportedResourceTypesCommand";
import {
  ListBackupJobsCommand,
  ListBackupJobsCommandInput,
  ListBackupJobsCommandOutput
} from "./commands/ListBackupJobsCommand";
import {
  ListBackupPlanTemplatesCommand,
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput
} from "./commands/ListBackupPlanTemplatesCommand";
import {
  ListBackupPlanVersionsCommand,
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput
} from "./commands/ListBackupPlanVersionsCommand";
import {
  ListBackupPlansCommand,
  ListBackupPlansCommandInput,
  ListBackupPlansCommandOutput
} from "./commands/ListBackupPlansCommand";
import {
  ListBackupSelectionsCommand,
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput
} from "./commands/ListBackupSelectionsCommand";
import {
  ListBackupVaultsCommand,
  ListBackupVaultsCommandInput,
  ListBackupVaultsCommandOutput
} from "./commands/ListBackupVaultsCommand";
import {
  ListCopyJobsCommand,
  ListCopyJobsCommandInput,
  ListCopyJobsCommandOutput
} from "./commands/ListCopyJobsCommand";
import {
  ListProtectedResourcesCommand,
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput
} from "./commands/ListProtectedResourcesCommand";
import {
  ListRecoveryPointsByBackupVaultCommand,
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput
} from "./commands/ListRecoveryPointsByBackupVaultCommand";
import {
  ListRecoveryPointsByResourceCommand,
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput
} from "./commands/ListRecoveryPointsByResourceCommand";
import {
  ListRestoreJobsCommand,
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput
} from "./commands/ListRestoreJobsCommand";
import {
  ListTagsCommand,
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "./commands/ListTagsCommand";
import {
  PutBackupVaultAccessPolicyCommand,
  PutBackupVaultAccessPolicyCommandInput,
  PutBackupVaultAccessPolicyCommandOutput
} from "./commands/PutBackupVaultAccessPolicyCommand";
import {
  PutBackupVaultNotificationsCommand,
  PutBackupVaultNotificationsCommandInput,
  PutBackupVaultNotificationsCommandOutput
} from "./commands/PutBackupVaultNotificationsCommand";
import {
  StartBackupJobCommand,
  StartBackupJobCommandInput,
  StartBackupJobCommandOutput
} from "./commands/StartBackupJobCommand";
import {
  StartCopyJobCommand,
  StartCopyJobCommandInput,
  StartCopyJobCommandOutput
} from "./commands/StartCopyJobCommand";
import {
  StartRestoreJobCommand,
  StartRestoreJobCommandInput,
  StartRestoreJobCommandOutput
} from "./commands/StartRestoreJobCommand";
import {
  StopBackupJobCommand,
  StopBackupJobCommandInput,
  StopBackupJobCommandOutput
} from "./commands/StopBackupJobCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateBackupPlanCommand,
  UpdateBackupPlanCommandInput,
  UpdateBackupPlanCommandOutput
} from "./commands/UpdateBackupPlanCommand";
import {
  UpdateRecoveryPointLifecycleCommand,
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput
} from "./commands/UpdateRecoveryPointLifecycleCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Backup</fullname>
 *          <p>AWS Backup is a unified backup service designed to protect AWS services and their
 *          associated data. AWS Backup simplifies the creation, migration, restoration, and deletion
 *          of backups, while also providing reporting and auditing.</p>
 */
export class Backup extends BackupClient {
  /**
   * <p>Backup plans are documents that contain information that AWS Backup uses to schedule
   *          tasks that create recovery points of resources.</p>
   *          <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, an
   *             <code>AlreadyExistsException</code> is returned.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateBackupPlanCommandOutput) => void),
    cb?: (err: any, data?: CreateBackupPlanCommandOutput) => void
  ): Promise<CreateBackupPlanCommandOutput> | void {
    const command = new CreateBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a JSON document that specifies a set of resources to assign to a backup plan.
   *          Resources can be included by specifying patterns for a <code>ListOfTags</code> and selected
   *             <code>Resources</code>. </p>
   *          <p>For example, consider the following patterns:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Resources: "arn:aws:ec2:region:account-id:volume/volume-id"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConditionKey:"department"</code>
   *                </p>
   *                <p>
   *                   <code>ConditionValue:"finance"</code>
   *                </p>
   *                <p>
   *                   <code>ConditionType:"STRINGEQUALS"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ConditionKey:"importance"</code>
   *                </p>
   *                <p>
   *                   <code>ConditionValue:"critical"</code>
   *                </p>
   *                <p>
   *                   <code>ConditionType:"STRINGEQUALS"</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Using these patterns would back up all Amazon Elastic Block Store (Amazon EBS) volumes
   *          that are tagged as <code>"department=finance"</code>, <code>"importance=critical"</code>,
   *          in addition to an EBS volume with the specified volume Id.</p>
   *          <p>Resources and conditions are additive in that all resources that match the pattern are
   *          selected. This shouldn't be confused with a logical AND, where all conditions must match.
   *          The matching patterns are logically 'put together using the OR
   *          operator. In other words, all patterns that match are selected for backup.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateBackupSelectionCommandOutput) => void),
    cb?: (err: any, data?: CreateBackupSelectionCommandOutput) => void
  ): Promise<CreateBackupSelectionCommandOutput> | void {
    const command = new CreateBackupSelectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
   *             <p>Sensitive data, such as passport numbers, should not be included the name of a backup
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateBackupVaultCommandOutput) => void),
    cb?: (err: any, data?: CreateBackupVaultCommandOutput) => void
  ): Promise<CreateBackupVaultCommandOutput> | void {
    const command = new CreateBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteBackupPlanCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupPlanCommandOutput) => void
  ): Promise<DeleteBackupPlanCommandOutput> | void {
    const command = new DeleteBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteBackupSelectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupSelectionCommandOutput) => void
  ): Promise<DeleteBackupSelectionCommandOutput> | void {
    const command = new DeleteBackupSelectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteBackupVaultCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupVaultCommandOutput) => void
  ): Promise<DeleteBackupVaultCommandOutput> | void {
    const command = new DeleteBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteBackupVaultAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteBackupVaultAccessPolicyCommandOutput) => void
  ): Promise<DeleteBackupVaultAccessPolicyCommandOutput> | void {
    const command = new DeleteBackupVaultAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteBackupVaultNotificationsCommandOutput
        ) => void),
    cb?: (err: any, data?: DeleteBackupVaultNotificationsCommandOutput) => void
  ): Promise<DeleteBackupVaultNotificationsCommandOutput> | void {
    const command = new DeleteBackupVaultNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the recovery point specified by a recovery point ID.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteRecoveryPointCommandOutput) => void),
    cb?: (err: any, data?: DeleteRecoveryPointCommandOutput) => void
  ): Promise<DeleteRecoveryPointCommandOutput> | void {
    const command = new DeleteRecoveryPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns metadata associated with creating a backup of a resource.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeBackupJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeBackupJobCommandOutput) => void
  ): Promise<DescribeBackupJobCommandOutput> | void {
    const command = new DescribeBackupJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeBackupVaultCommandOutput) => void),
    cb?: (err: any, data?: DescribeBackupVaultCommandOutput) => void
  ): Promise<DescribeBackupVaultCommandOutput> | void {
    const command = new DescribeBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeCopyJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeCopyJobCommandOutput) => void
  ): Promise<DescribeCopyJobCommandOutput> | void {
    const command = new DescribeCopyJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a saved resource, including the last time it was backed-up,
   *          its Amazon Resource Name (ARN), and the AWS service type of the saved resource.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeProtectedResourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeProtectedResourceCommandOutput) => void
  ): Promise<DescribeProtectedResourceCommandOutput> | void {
    const command = new DescribeProtectedResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeRecoveryPointCommandOutput) => void),
    cb?: (err: any, data?: DescribeRecoveryPointCommandOutput) => void
  ): Promise<DescribeRecoveryPointCommandOutput> | void {
    const command = new DescribeRecoveryPointCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeRestoreJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeRestoreJobCommandOutput) => void
  ): Promise<DescribeRestoreJobCommandOutput> | void {
    const command = new DescribeRestoreJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ExportBackupPlanTemplateCommandOutput) => void),
    cb?: (err: any, data?: ExportBackupPlanTemplateCommandOutput) => void
  ): Promise<ExportBackupPlanTemplateCommandOutput> | void {
    const command = new ExportBackupPlanTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the body of a backup plan in JSON format, in addition to plan metadata.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetBackupPlanCommandOutput) => void),
    cb?: (err: any, data?: GetBackupPlanCommandOutput) => void
  ): Promise<GetBackupPlanCommandOutput> | void {
    const command = new GetBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetBackupPlanFromJSONCommandOutput) => void),
    cb?: (err: any, data?: GetBackupPlanFromJSONCommandOutput) => void
  ): Promise<GetBackupPlanFromJSONCommandOutput> | void {
    const command = new GetBackupPlanFromJSONCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetBackupPlanFromTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetBackupPlanFromTemplateCommandOutput) => void
  ): Promise<GetBackupPlanFromTemplateCommandOutput> | void {
    const command = new GetBackupPlanFromTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetBackupSelectionCommandOutput) => void),
    cb?: (err: any, data?: GetBackupSelectionCommandOutput) => void
  ): Promise<GetBackupSelectionCommandOutput> | void {
    const command = new GetBackupSelectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetBackupVaultAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetBackupVaultAccessPolicyCommandOutput) => void
  ): Promise<GetBackupVaultAccessPolicyCommandOutput> | void {
    const command = new GetBackupVaultAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetBackupVaultNotificationsCommandOutput) => void),
    cb?: (err: any, data?: GetBackupVaultNotificationsCommandOutput) => void
  ): Promise<GetBackupVaultNotificationsCommandOutput> | void {
    const command = new GetBackupVaultNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetRecoveryPointRestoreMetadataCommandOutput
        ) => void),
    cb?: (err: any, data?: GetRecoveryPointRestoreMetadataCommandOutput) => void
  ): Promise<GetRecoveryPointRestoreMetadataCommandOutput> | void {
    const command = new GetRecoveryPointRestoreMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the AWS resource types supported by AWS Backup.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetSupportedResourceTypesCommandOutput) => void),
    cb?: (err: any, data?: GetSupportedResourceTypesCommandOutput) => void
  ): Promise<GetSupportedResourceTypesCommandOutput> | void {
    const command = new GetSupportedResourceTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns metadata about your backup jobs.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListBackupJobsCommandOutput) => void),
    cb?: (err: any, data?: ListBackupJobsCommandOutput) => void
  ): Promise<ListBackupJobsCommandOutput> | void {
    const command = new ListBackupJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns metadata of your saved backup plans, including Amazon Resource Names (ARNs),
   *          plan IDs, creation and deletion dates, version IDs, plan names, and creator request
   *          IDs.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListBackupPlansCommandOutput) => void),
    cb?: (err: any, data?: ListBackupPlansCommandOutput) => void
  ): Promise<ListBackupPlansCommandOutput> | void {
    const command = new ListBackupPlansCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListBackupPlanTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListBackupPlanTemplatesCommandOutput) => void
  ): Promise<ListBackupPlanTemplatesCommandOutput> | void {
    const command = new ListBackupPlanTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListBackupPlanVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListBackupPlanVersionsCommandOutput) => void
  ): Promise<ListBackupPlanVersionsCommandOutput> | void {
    const command = new ListBackupPlanVersionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListBackupSelectionsCommandOutput) => void),
    cb?: (err: any, data?: ListBackupSelectionsCommandOutput) => void
  ): Promise<ListBackupSelectionsCommandOutput> | void {
    const command = new ListBackupSelectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListBackupVaultsCommandOutput) => void),
    cb?: (err: any, data?: ListBackupVaultsCommandOutput) => void
  ): Promise<ListBackupVaultsCommandOutput> | void {
    const command = new ListBackupVaultsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
  public listCopyJobs(
    args: ListCopyJobsCommandInput,
    cb: (err: any, data?: ListCopyJobsCommandOutput) => void
  ): void;
  public listCopyJobs(
    args: ListCopyJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCopyJobsCommandOutput) => void
  ): void;
  public listCopyJobs(
    args: ListCopyJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListCopyJobsCommandOutput) => void),
    cb?: (err: any, data?: ListCopyJobsCommandOutput) => void
  ): Promise<ListCopyJobsCommandOutput> | void {
    const command = new ListCopyJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns an array of resources successfully backed up by AWS Backup, including the time
   *          the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource
   *          type.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListProtectedResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListProtectedResourcesCommandOutput) => void
  ): Promise<ListProtectedResourcesCommandOutput> | void {
    const command = new ListProtectedResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListRecoveryPointsByBackupVaultCommandOutput
        ) => void),
    cb?: (err: any, data?: ListRecoveryPointsByBackupVaultCommandOutput) => void
  ): Promise<ListRecoveryPointsByBackupVaultCommandOutput> | void {
    const command = new ListRecoveryPointsByBackupVaultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns detailed information about recovery points of the type specified by a resource
   *          Amazon Resource Name (ARN).</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRecoveryPointsByResourceCommandOutput) => void),
    cb?: (err: any, data?: ListRecoveryPointsByResourceCommandOutput) => void
  ): Promise<ListRecoveryPointsByResourceCommandOutput> | void {
    const command = new ListRecoveryPointsByResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of jobs that AWS Backup initiated to restore a saved resource, including
   *          metadata about the recovery process.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRestoreJobsCommandOutput) => void),
    cb?: (err: any, data?: ListRestoreJobsCommandOutput) => void
  ): Promise<ListRestoreJobsCommandOutput> | void {
    const command = new ListRestoreJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of key-value pairs assigned to a target recovery point, backup plan, or
   *          backup vault.</p>
   */
  public listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsCommandOutput>;
  public listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  public listTags(
    args: ListTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsCommandOutput) => void),
    cb?: (err: any, data?: ListTagsCommandOutput) => void
  ): Promise<ListTagsCommandOutput> | void {
    const command = new ListTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutBackupVaultAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutBackupVaultAccessPolicyCommandOutput) => void
  ): Promise<PutBackupVaultAccessPolicyCommandOutput> | void {
    const command = new PutBackupVaultAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutBackupVaultNotificationsCommandOutput) => void),
    cb?: (err: any, data?: PutBackupVaultNotificationsCommandOutput) => void
  ): Promise<PutBackupVaultNotificationsCommandOutput> | void {
    const command = new PutBackupVaultNotificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a job to create a one-time backup of the specified resource.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartBackupJobCommandOutput) => void),
    cb?: (err: any, data?: StartBackupJobCommandOutput) => void
  ): Promise<StartBackupJobCommandOutput> | void {
    const command = new StartBackupJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a job to create a one-time copy of the specified resource.</p>
   */
  public startCopyJob(
    args: StartCopyJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCopyJobCommandOutput>;
  public startCopyJob(
    args: StartCopyJobCommandInput,
    cb: (err: any, data?: StartCopyJobCommandOutput) => void
  ): void;
  public startCopyJob(
    args: StartCopyJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCopyJobCommandOutput) => void
  ): void;
  public startCopyJob(
    args: StartCopyJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartCopyJobCommandOutput) => void),
    cb?: (err: any, data?: StartCopyJobCommandOutput) => void
  ): Promise<StartCopyJobCommandOutput> | void {
    const command = new StartCopyJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Recovers the saved resource identified by an Amazon Resource Name (ARN). </p>
   *          <p>If the resource ARN is included in the request, then the last complete backup of that
   *          resource is recovered. If the ARN of a recovery point is supplied, then that recovery point
   *          is restored.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartRestoreJobCommandOutput) => void),
    cb?: (err: any, data?: StartRestoreJobCommandOutput) => void
  ): Promise<StartRestoreJobCommandOutput> | void {
    const command = new StartRestoreJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attempts to cancel a job to create a one-time backup of a resource.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopBackupJobCommandOutput) => void),
    cb?: (err: any, data?: StopBackupJobCommandOutput) => void
  ): Promise<StopBackupJobCommandOutput> | void {
    const command = new StopBackupJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Assigns a set of key-value pairs to a recovery point, backup plan, or backup vault
   *          identified by an Amazon Resource Name (ARN).</p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Replaces the body of a saved backup plan identified by its <code>backupPlanId</code>
   *          with the input document in JSON format. The new version is uniquely identified by a
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateBackupPlanCommandOutput) => void),
    cb?: (err: any, data?: UpdateBackupPlanCommandOutput) => void
  ): Promise<UpdateBackupPlanCommandOutput> | void {
    const command = new UpdateBackupPlanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the transition lifecycle of a recovery point.</p>
   *          <p>The lifecycle defines when a protected resource is transitioned to cold storage and when
   *          it expires. AWS Backup transitions and expires backups automatically according to the
   *          lifecycle that you define. </p>
   *          <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90
   *          days. Therefore, the “expire after days” setting must be 90 days greater than the
   *          “transition to cold after days” setting. The “transition to cold after days” setting cannot
   *          be changed after a backup has been transitioned to cold. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateRecoveryPointLifecycleCommandOutput) => void),
    cb?: (err: any, data?: UpdateRecoveryPointLifecycleCommandOutput) => void
  ): Promise<UpdateRecoveryPointLifecycleCommandOutput> | void {
    const command = new UpdateRecoveryPointLifecycleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
