import { BackupClient } from "./BackupClient";
import { AlreadyExistsException } from "./types/AlreadyExistsException";
import { CreateBackupPlanInput } from "./types/CreateBackupPlanInput";
import { CreateBackupPlanOutput } from "./types/CreateBackupPlanOutput";
import { CreateBackupSelectionInput } from "./types/CreateBackupSelectionInput";
import { CreateBackupSelectionOutput } from "./types/CreateBackupSelectionOutput";
import { CreateBackupVaultInput } from "./types/CreateBackupVaultInput";
import { CreateBackupVaultOutput } from "./types/CreateBackupVaultOutput";
import { DeleteBackupPlanInput } from "./types/DeleteBackupPlanInput";
import { DeleteBackupPlanOutput } from "./types/DeleteBackupPlanOutput";
import { DeleteBackupSelectionInput } from "./types/DeleteBackupSelectionInput";
import { DeleteBackupSelectionOutput } from "./types/DeleteBackupSelectionOutput";
import { DeleteBackupVaultAccessPolicyInput } from "./types/DeleteBackupVaultAccessPolicyInput";
import { DeleteBackupVaultAccessPolicyOutput } from "./types/DeleteBackupVaultAccessPolicyOutput";
import { DeleteBackupVaultInput } from "./types/DeleteBackupVaultInput";
import { DeleteBackupVaultNotificationsInput } from "./types/DeleteBackupVaultNotificationsInput";
import { DeleteBackupVaultNotificationsOutput } from "./types/DeleteBackupVaultNotificationsOutput";
import { DeleteBackupVaultOutput } from "./types/DeleteBackupVaultOutput";
import { DeleteRecoveryPointInput } from "./types/DeleteRecoveryPointInput";
import { DeleteRecoveryPointOutput } from "./types/DeleteRecoveryPointOutput";
import { DependencyFailureException } from "./types/DependencyFailureException";
import { DescribeBackupJobInput } from "./types/DescribeBackupJobInput";
import { DescribeBackupJobOutput } from "./types/DescribeBackupJobOutput";
import { DescribeBackupVaultInput } from "./types/DescribeBackupVaultInput";
import { DescribeBackupVaultOutput } from "./types/DescribeBackupVaultOutput";
import { DescribeProtectedResourceInput } from "./types/DescribeProtectedResourceInput";
import { DescribeProtectedResourceOutput } from "./types/DescribeProtectedResourceOutput";
import { DescribeRecoveryPointInput } from "./types/DescribeRecoveryPointInput";
import { DescribeRecoveryPointOutput } from "./types/DescribeRecoveryPointOutput";
import { DescribeRestoreJobInput } from "./types/DescribeRestoreJobInput";
import { DescribeRestoreJobOutput } from "./types/DescribeRestoreJobOutput";
import { ExportBackupPlanTemplateInput } from "./types/ExportBackupPlanTemplateInput";
import { ExportBackupPlanTemplateOutput } from "./types/ExportBackupPlanTemplateOutput";
import { GetBackupPlanFromJSONInput } from "./types/GetBackupPlanFromJSONInput";
import { GetBackupPlanFromJSONOutput } from "./types/GetBackupPlanFromJSONOutput";
import { GetBackupPlanFromTemplateInput } from "./types/GetBackupPlanFromTemplateInput";
import { GetBackupPlanFromTemplateOutput } from "./types/GetBackupPlanFromTemplateOutput";
import { GetBackupPlanInput } from "./types/GetBackupPlanInput";
import { GetBackupPlanOutput } from "./types/GetBackupPlanOutput";
import { GetBackupSelectionInput } from "./types/GetBackupSelectionInput";
import { GetBackupSelectionOutput } from "./types/GetBackupSelectionOutput";
import { GetBackupVaultAccessPolicyInput } from "./types/GetBackupVaultAccessPolicyInput";
import { GetBackupVaultAccessPolicyOutput } from "./types/GetBackupVaultAccessPolicyOutput";
import { GetBackupVaultNotificationsInput } from "./types/GetBackupVaultNotificationsInput";
import { GetBackupVaultNotificationsOutput } from "./types/GetBackupVaultNotificationsOutput";
import { GetRecoveryPointRestoreMetadataInput } from "./types/GetRecoveryPointRestoreMetadataInput";
import { GetRecoveryPointRestoreMetadataOutput } from "./types/GetRecoveryPointRestoreMetadataOutput";
import { GetSupportedResourceTypesInput } from "./types/GetSupportedResourceTypesInput";
import { GetSupportedResourceTypesOutput } from "./types/GetSupportedResourceTypesOutput";
import { InvalidParameterValueException } from "./types/InvalidParameterValueException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListBackupJobsInput } from "./types/ListBackupJobsInput";
import { ListBackupJobsOutput } from "./types/ListBackupJobsOutput";
import { ListBackupPlanTemplatesInput } from "./types/ListBackupPlanTemplatesInput";
import { ListBackupPlanTemplatesOutput } from "./types/ListBackupPlanTemplatesOutput";
import { ListBackupPlanVersionsInput } from "./types/ListBackupPlanVersionsInput";
import { ListBackupPlanVersionsOutput } from "./types/ListBackupPlanVersionsOutput";
import { ListBackupPlansInput } from "./types/ListBackupPlansInput";
import { ListBackupPlansOutput } from "./types/ListBackupPlansOutput";
import { ListBackupSelectionsInput } from "./types/ListBackupSelectionsInput";
import { ListBackupSelectionsOutput } from "./types/ListBackupSelectionsOutput";
import { ListBackupVaultsInput } from "./types/ListBackupVaultsInput";
import { ListBackupVaultsOutput } from "./types/ListBackupVaultsOutput";
import { ListProtectedResourcesInput } from "./types/ListProtectedResourcesInput";
import { ListProtectedResourcesOutput } from "./types/ListProtectedResourcesOutput";
import { ListRecoveryPointsByBackupVaultInput } from "./types/ListRecoveryPointsByBackupVaultInput";
import { ListRecoveryPointsByBackupVaultOutput } from "./types/ListRecoveryPointsByBackupVaultOutput";
import { ListRecoveryPointsByResourceInput } from "./types/ListRecoveryPointsByResourceInput";
import { ListRecoveryPointsByResourceOutput } from "./types/ListRecoveryPointsByResourceOutput";
import { ListRestoreJobsInput } from "./types/ListRestoreJobsInput";
import { ListRestoreJobsOutput } from "./types/ListRestoreJobsOutput";
import { ListTagsInput } from "./types/ListTagsInput";
import { ListTagsOutput } from "./types/ListTagsOutput";
import { MissingParameterValueException } from "./types/MissingParameterValueException";
import { PutBackupVaultAccessPolicyInput } from "./types/PutBackupVaultAccessPolicyInput";
import { PutBackupVaultAccessPolicyOutput } from "./types/PutBackupVaultAccessPolicyOutput";
import { PutBackupVaultNotificationsInput } from "./types/PutBackupVaultNotificationsInput";
import { PutBackupVaultNotificationsOutput } from "./types/PutBackupVaultNotificationsOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { StartBackupJobInput } from "./types/StartBackupJobInput";
import { StartBackupJobOutput } from "./types/StartBackupJobOutput";
import { StartRestoreJobInput } from "./types/StartRestoreJobInput";
import { StartRestoreJobOutput } from "./types/StartRestoreJobOutput";
import { StopBackupJobInput } from "./types/StopBackupJobInput";
import { StopBackupJobOutput } from "./types/StopBackupJobOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateBackupPlanInput } from "./types/UpdateBackupPlanInput";
import { UpdateBackupPlanOutput } from "./types/UpdateBackupPlanOutput";
import { UpdateRecoveryPointLifecycleInput } from "./types/UpdateRecoveryPointLifecycleInput";
import { UpdateRecoveryPointLifecycleOutput } from "./types/UpdateRecoveryPointLifecycleOutput";
import { CreateBackupPlanCommand } from "./commands/CreateBackupPlanCommand";
import { CreateBackupSelectionCommand } from "./commands/CreateBackupSelectionCommand";
import { CreateBackupVaultCommand } from "./commands/CreateBackupVaultCommand";
import { DeleteBackupPlanCommand } from "./commands/DeleteBackupPlanCommand";
import { DeleteBackupSelectionCommand } from "./commands/DeleteBackupSelectionCommand";
import { DeleteBackupVaultAccessPolicyCommand } from "./commands/DeleteBackupVaultAccessPolicyCommand";
import { DeleteBackupVaultCommand } from "./commands/DeleteBackupVaultCommand";
import { DeleteBackupVaultNotificationsCommand } from "./commands/DeleteBackupVaultNotificationsCommand";
import { DeleteRecoveryPointCommand } from "./commands/DeleteRecoveryPointCommand";
import { DescribeBackupJobCommand } from "./commands/DescribeBackupJobCommand";
import { DescribeBackupVaultCommand } from "./commands/DescribeBackupVaultCommand";
import { DescribeProtectedResourceCommand } from "./commands/DescribeProtectedResourceCommand";
import { DescribeRecoveryPointCommand } from "./commands/DescribeRecoveryPointCommand";
import { DescribeRestoreJobCommand } from "./commands/DescribeRestoreJobCommand";
import { ExportBackupPlanTemplateCommand } from "./commands/ExportBackupPlanTemplateCommand";
import { GetBackupPlanCommand } from "./commands/GetBackupPlanCommand";
import { GetBackupPlanFromJSONCommand } from "./commands/GetBackupPlanFromJSONCommand";
import { GetBackupPlanFromTemplateCommand } from "./commands/GetBackupPlanFromTemplateCommand";
import { GetBackupSelectionCommand } from "./commands/GetBackupSelectionCommand";
import { GetBackupVaultAccessPolicyCommand } from "./commands/GetBackupVaultAccessPolicyCommand";
import { GetBackupVaultNotificationsCommand } from "./commands/GetBackupVaultNotificationsCommand";
import { GetRecoveryPointRestoreMetadataCommand } from "./commands/GetRecoveryPointRestoreMetadataCommand";
import { GetSupportedResourceTypesCommand } from "./commands/GetSupportedResourceTypesCommand";
import { ListBackupJobsCommand } from "./commands/ListBackupJobsCommand";
import { ListBackupPlanTemplatesCommand } from "./commands/ListBackupPlanTemplatesCommand";
import { ListBackupPlanVersionsCommand } from "./commands/ListBackupPlanVersionsCommand";
import { ListBackupPlansCommand } from "./commands/ListBackupPlansCommand";
import { ListBackupSelectionsCommand } from "./commands/ListBackupSelectionsCommand";
import { ListBackupVaultsCommand } from "./commands/ListBackupVaultsCommand";
import { ListProtectedResourcesCommand } from "./commands/ListProtectedResourcesCommand";
import { ListRecoveryPointsByBackupVaultCommand } from "./commands/ListRecoveryPointsByBackupVaultCommand";
import { ListRecoveryPointsByResourceCommand } from "./commands/ListRecoveryPointsByResourceCommand";
import { ListRestoreJobsCommand } from "./commands/ListRestoreJobsCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { PutBackupVaultAccessPolicyCommand } from "./commands/PutBackupVaultAccessPolicyCommand";
import { PutBackupVaultNotificationsCommand } from "./commands/PutBackupVaultNotificationsCommand";
import { StartBackupJobCommand } from "./commands/StartBackupJobCommand";
import { StartRestoreJobCommand } from "./commands/StartRestoreJobCommand";
import { StopBackupJobCommand } from "./commands/StopBackupJobCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateBackupPlanCommand } from "./commands/UpdateBackupPlanCommand";
import { UpdateRecoveryPointLifecycleCommand } from "./commands/UpdateRecoveryPointLifecycleCommand";

export class Backup extends BackupClient {
  /**
   * <p>Backup plans are documents that contain information that AWS Backup uses to schedule tasks that create recovery points of resources.</p> <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, the existing <code>backupPlanId</code> is returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.</p>
   *   - {AlreadyExistsException} <p>The required resource already exists.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBackupPlan(
    args: CreateBackupPlanInput
  ): Promise<CreateBackupPlanOutput>;
  public createBackupPlan(
    args: CreateBackupPlanInput,
    cb: (err: any, data?: CreateBackupPlanOutput) => void
  ): void;
  public createBackupPlan(
    args: CreateBackupPlanInput,
    cb?: (err: any, data?: CreateBackupPlanOutput) => void
  ): Promise<CreateBackupPlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBackupPlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a JSON document that specifies a set of resources to assign to a backup plan. Resources can be included by specifying patterns for a <code>ListOfTags</code> and selected <code>Resources</code>. </p> <p>For example, consider the following patterns:</p> <ul> <li> <p> <code>Resources: "arn:aws:ec2:region:account-id:volume/volume-id"</code> </p> </li> <li> <p> <code>ConditionKey:"department"</code> </p> <p> <code>ConditionValue:"finance"</code> </p> <p> <code>ConditionType:"StringEquals"</code> </p> </li> <li> <p> <code>ConditionKey:"importance"</code> </p> <p> <code>ConditionValue:"critical"</code> </p> <p> <code>ConditionType:"StringEquals"</code> </p> </li> </ul> <p>Using these patterns would back up all Amazon Elastic Block Store (Amazon EBS) volumes that are tagged as <code>"department=finance"</code>, <code>"importance=critical"</code>, in addition to an EBS volume with the specified volume Id.</p> <p>Resources and conditions are additive in that all resources that match the pattern are selected. This shouldn't be confused with a logical AND, where all conditions must match. The matching patterns are logically 'put together using the OR operator. In other words, all patterns that match are selected for backup.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.</p>
   *   - {AlreadyExistsException} <p>The required resource already exists.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBackupSelection(
    args: CreateBackupSelectionInput
  ): Promise<CreateBackupSelectionOutput>;
  public createBackupSelection(
    args: CreateBackupSelectionInput,
    cb: (err: any, data?: CreateBackupSelectionOutput) => void
  ): void;
  public createBackupSelection(
    args: CreateBackupSelectionInput,
    cb?: (err: any, data?: CreateBackupSelectionOutput) => void
  ): Promise<CreateBackupSelectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBackupSelectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a logical container where backups are stored. A <code>CreateBackupVault</code> request includes a name, optionally one or more resource tags, an encryption key, and a request ID.</p> <note> <p>Sensitive data, such as passport numbers, should not be included the name of a backup vault.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {LimitExceededException} <p>A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.</p>
   *   - {AlreadyExistsException} <p>The required resource already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBackupVault(
    args: CreateBackupVaultInput
  ): Promise<CreateBackupVaultOutput>;
  public createBackupVault(
    args: CreateBackupVaultInput,
    cb: (err: any, data?: CreateBackupVaultOutput) => void
  ): void;
  public createBackupVault(
    args: CreateBackupVaultInput,
    cb?: (err: any, data?: CreateBackupVaultOutput) => void
  ): Promise<CreateBackupVaultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBackupVaultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a backup plan. A backup plan can only be deleted after all associated selections of resources have been deleted. Deleting a backup plan deletes the current version of a backup plan. Previous versions, if any, will still exist.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBackupPlan(
    args: DeleteBackupPlanInput
  ): Promise<DeleteBackupPlanOutput>;
  public deleteBackupPlan(
    args: DeleteBackupPlanInput,
    cb: (err: any, data?: DeleteBackupPlanOutput) => void
  ): void;
  public deleteBackupPlan(
    args: DeleteBackupPlanInput,
    cb?: (err: any, data?: DeleteBackupPlanOutput) => void
  ): Promise<DeleteBackupPlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBackupPlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the resource selection associated with a backup plan that is specified by the <code>SelectionId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBackupSelection(
    args: DeleteBackupSelectionInput
  ): Promise<DeleteBackupSelectionOutput>;
  public deleteBackupSelection(
    args: DeleteBackupSelectionInput,
    cb: (err: any, data?: DeleteBackupSelectionOutput) => void
  ): void;
  public deleteBackupSelection(
    args: DeleteBackupSelectionInput,
    cb?: (err: any, data?: DeleteBackupSelectionOutput) => void
  ): Promise<DeleteBackupSelectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBackupSelectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the backup vault identified by its name. A vault can be deleted only if it is empty.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBackupVault(
    args: DeleteBackupVaultInput
  ): Promise<DeleteBackupVaultOutput>;
  public deleteBackupVault(
    args: DeleteBackupVaultInput,
    cb: (err: any, data?: DeleteBackupVaultOutput) => void
  ): void;
  public deleteBackupVault(
    args: DeleteBackupVaultInput,
    cb?: (err: any, data?: DeleteBackupVaultOutput) => void
  ): Promise<DeleteBackupVaultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBackupVaultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the policy document that manages permissions on a backup vault.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBackupVaultAccessPolicy(
    args: DeleteBackupVaultAccessPolicyInput
  ): Promise<DeleteBackupVaultAccessPolicyOutput>;
  public deleteBackupVaultAccessPolicy(
    args: DeleteBackupVaultAccessPolicyInput,
    cb: (err: any, data?: DeleteBackupVaultAccessPolicyOutput) => void
  ): void;
  public deleteBackupVaultAccessPolicy(
    args: DeleteBackupVaultAccessPolicyInput,
    cb?: (err: any, data?: DeleteBackupVaultAccessPolicyOutput) => void
  ): Promise<DeleteBackupVaultAccessPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBackupVaultAccessPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes event notifications for the specified backup vault.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBackupVaultNotifications(
    args: DeleteBackupVaultNotificationsInput
  ): Promise<DeleteBackupVaultNotificationsOutput>;
  public deleteBackupVaultNotifications(
    args: DeleteBackupVaultNotificationsInput,
    cb: (err: any, data?: DeleteBackupVaultNotificationsOutput) => void
  ): void;
  public deleteBackupVaultNotifications(
    args: DeleteBackupVaultNotificationsInput,
    cb?: (err: any, data?: DeleteBackupVaultNotificationsOutput) => void
  ): Promise<DeleteBackupVaultNotificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBackupVaultNotificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the recovery point specified by a recovery point ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRecoveryPoint(
    args: DeleteRecoveryPointInput
  ): Promise<DeleteRecoveryPointOutput>;
  public deleteRecoveryPoint(
    args: DeleteRecoveryPointInput,
    cb: (err: any, data?: DeleteRecoveryPointOutput) => void
  ): void;
  public deleteRecoveryPoint(
    args: DeleteRecoveryPointInput,
    cb?: (err: any, data?: DeleteRecoveryPointOutput) => void
  ): Promise<DeleteRecoveryPointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRecoveryPointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata associated with creating a backup of a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {DependencyFailureException} <p>A dependent AWS service or resource returned an error to the AWS Backup service, and the action cannot be completed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBackupJob(
    args: DescribeBackupJobInput
  ): Promise<DescribeBackupJobOutput>;
  public describeBackupJob(
    args: DescribeBackupJobInput,
    cb: (err: any, data?: DescribeBackupJobOutput) => void
  ): void;
  public describeBackupJob(
    args: DescribeBackupJobInput,
    cb?: (err: any, data?: DescribeBackupJobOutput) => void
  ): Promise<DescribeBackupJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBackupJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata about a backup vault specified by its name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBackupVault(
    args: DescribeBackupVaultInput
  ): Promise<DescribeBackupVaultOutput>;
  public describeBackupVault(
    args: DescribeBackupVaultInput,
    cb: (err: any, data?: DescribeBackupVaultOutput) => void
  ): void;
  public describeBackupVault(
    args: DescribeBackupVaultInput,
    cb?: (err: any, data?: DescribeBackupVaultOutput) => void
  ): Promise<DescribeBackupVaultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBackupVaultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a saved resource, including the last time it was backed-up, its Amazon Resource Name (ARN), and the AWS service type of the saved resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeProtectedResource(
    args: DescribeProtectedResourceInput
  ): Promise<DescribeProtectedResourceOutput>;
  public describeProtectedResource(
    args: DescribeProtectedResourceInput,
    cb: (err: any, data?: DescribeProtectedResourceOutput) => void
  ): void;
  public describeProtectedResource(
    args: DescribeProtectedResourceInput,
    cb?: (err: any, data?: DescribeProtectedResourceOutput) => void
  ): Promise<DescribeProtectedResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeProtectedResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRecoveryPoint(
    args: DescribeRecoveryPointInput
  ): Promise<DescribeRecoveryPointOutput>;
  public describeRecoveryPoint(
    args: DescribeRecoveryPointInput,
    cb: (err: any, data?: DescribeRecoveryPointOutput) => void
  ): void;
  public describeRecoveryPoint(
    args: DescribeRecoveryPointInput,
    cb?: (err: any, data?: DescribeRecoveryPointOutput) => void
  ): Promise<DescribeRecoveryPointOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRecoveryPointCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata associated with a restore job that is specified by a job ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {DependencyFailureException} <p>A dependent AWS service or resource returned an error to the AWS Backup service, and the action cannot be completed.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRestoreJob(
    args: DescribeRestoreJobInput
  ): Promise<DescribeRestoreJobOutput>;
  public describeRestoreJob(
    args: DescribeRestoreJobInput,
    cb: (err: any, data?: DescribeRestoreJobOutput) => void
  ): void;
  public describeRestoreJob(
    args: DescribeRestoreJobInput,
    cb?: (err: any, data?: DescribeRestoreJobOutput) => void
  ): Promise<DescribeRestoreJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRestoreJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the backup plan that is specified by the plan ID as a backup template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public exportBackupPlanTemplate(
    args: ExportBackupPlanTemplateInput
  ): Promise<ExportBackupPlanTemplateOutput>;
  public exportBackupPlanTemplate(
    args: ExportBackupPlanTemplateInput,
    cb: (err: any, data?: ExportBackupPlanTemplateOutput) => void
  ): void;
  public exportBackupPlanTemplate(
    args: ExportBackupPlanTemplateInput,
    cb?: (err: any, data?: ExportBackupPlanTemplateOutput) => void
  ): Promise<ExportBackupPlanTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExportBackupPlanTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the body of a backup plan in JSON format, in addition to plan metadata.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBackupPlan(args: GetBackupPlanInput): Promise<GetBackupPlanOutput>;
  public getBackupPlan(
    args: GetBackupPlanInput,
    cb: (err: any, data?: GetBackupPlanOutput) => void
  ): void;
  public getBackupPlan(
    args: GetBackupPlanInput,
    cb?: (err: any, data?: GetBackupPlanOutput) => void
  ): Promise<GetBackupPlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBackupPlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a valid JSON document specifying a backup plan or an error.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBackupPlanFromJSON(
    args: GetBackupPlanFromJSONInput
  ): Promise<GetBackupPlanFromJSONOutput>;
  public getBackupPlanFromJSON(
    args: GetBackupPlanFromJSONInput,
    cb: (err: any, data?: GetBackupPlanFromJSONOutput) => void
  ): void;
  public getBackupPlanFromJSON(
    args: GetBackupPlanFromJSONInput,
    cb?: (err: any, data?: GetBackupPlanFromJSONOutput) => void
  ): Promise<GetBackupPlanFromJSONOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBackupPlanFromJSONCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the template specified by its <code>templateId</code> as a backup plan.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBackupPlanFromTemplate(
    args: GetBackupPlanFromTemplateInput
  ): Promise<GetBackupPlanFromTemplateOutput>;
  public getBackupPlanFromTemplate(
    args: GetBackupPlanFromTemplateInput,
    cb: (err: any, data?: GetBackupPlanFromTemplateOutput) => void
  ): void;
  public getBackupPlanFromTemplate(
    args: GetBackupPlanFromTemplateInput,
    cb?: (err: any, data?: GetBackupPlanFromTemplateOutput) => void
  ): Promise<GetBackupPlanFromTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBackupPlanFromTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns selection metadata and a document in JSON format that specifies a list of resources that are associated with a backup plan.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBackupSelection(
    args: GetBackupSelectionInput
  ): Promise<GetBackupSelectionOutput>;
  public getBackupSelection(
    args: GetBackupSelectionInput,
    cb: (err: any, data?: GetBackupSelectionOutput) => void
  ): void;
  public getBackupSelection(
    args: GetBackupSelectionInput,
    cb?: (err: any, data?: GetBackupSelectionOutput) => void
  ): Promise<GetBackupSelectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBackupSelectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the access policy document that is associated with the named backup vault.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBackupVaultAccessPolicy(
    args: GetBackupVaultAccessPolicyInput
  ): Promise<GetBackupVaultAccessPolicyOutput>;
  public getBackupVaultAccessPolicy(
    args: GetBackupVaultAccessPolicyInput,
    cb: (err: any, data?: GetBackupVaultAccessPolicyOutput) => void
  ): void;
  public getBackupVaultAccessPolicy(
    args: GetBackupVaultAccessPolicyInput,
    cb?: (err: any, data?: GetBackupVaultAccessPolicyOutput) => void
  ): Promise<GetBackupVaultAccessPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBackupVaultAccessPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns event notifications for the specified backup vault.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBackupVaultNotifications(
    args: GetBackupVaultNotificationsInput
  ): Promise<GetBackupVaultNotificationsOutput>;
  public getBackupVaultNotifications(
    args: GetBackupVaultNotificationsInput,
    cb: (err: any, data?: GetBackupVaultNotificationsOutput) => void
  ): void;
  public getBackupVaultNotifications(
    args: GetBackupVaultNotificationsInput,
    cb?: (err: any, data?: GetBackupVaultNotificationsOutput) => void
  ): Promise<GetBackupVaultNotificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBackupVaultNotificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns two sets of metadata key-value pairs. The first set lists the metadata that the recovery point was created with. The second set lists the metadata key-value pairs that are required to restore the recovery point.</p> <p>These sets can be the same, or the restore metadata set can contain different values if the target service to be restored has changed since the recovery point was created and now requires additional or different information in order to be restored.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRecoveryPointRestoreMetadata(
    args: GetRecoveryPointRestoreMetadataInput
  ): Promise<GetRecoveryPointRestoreMetadataOutput>;
  public getRecoveryPointRestoreMetadata(
    args: GetRecoveryPointRestoreMetadataInput,
    cb: (err: any, data?: GetRecoveryPointRestoreMetadataOutput) => void
  ): void;
  public getRecoveryPointRestoreMetadata(
    args: GetRecoveryPointRestoreMetadataInput,
    cb?: (err: any, data?: GetRecoveryPointRestoreMetadataOutput) => void
  ): Promise<GetRecoveryPointRestoreMetadataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRecoveryPointRestoreMetadataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the AWS resource types supported by AWS Backup.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSupportedResourceTypes(
    args: GetSupportedResourceTypesInput
  ): Promise<GetSupportedResourceTypesOutput>;
  public getSupportedResourceTypes(
    args: GetSupportedResourceTypesInput,
    cb: (err: any, data?: GetSupportedResourceTypesOutput) => void
  ): void;
  public getSupportedResourceTypes(
    args: GetSupportedResourceTypesInput,
    cb?: (err: any, data?: GetSupportedResourceTypesOutput) => void
  ): Promise<GetSupportedResourceTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSupportedResourceTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata about your backup jobs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBackupJobs(
    args: ListBackupJobsInput
  ): Promise<ListBackupJobsOutput>;
  public listBackupJobs(
    args: ListBackupJobsInput,
    cb: (err: any, data?: ListBackupJobsOutput) => void
  ): void;
  public listBackupJobs(
    args: ListBackupJobsInput,
    cb?: (err: any, data?: ListBackupJobsOutput) => void
  ): Promise<ListBackupJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBackupJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata of your saved backup plan templates, including the template ID, name, and the creation and deletion dates.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBackupPlanTemplates(
    args: ListBackupPlanTemplatesInput
  ): Promise<ListBackupPlanTemplatesOutput>;
  public listBackupPlanTemplates(
    args: ListBackupPlanTemplatesInput,
    cb: (err: any, data?: ListBackupPlanTemplatesOutput) => void
  ): void;
  public listBackupPlanTemplates(
    args: ListBackupPlanTemplatesInput,
    cb?: (err: any, data?: ListBackupPlanTemplatesOutput) => void
  ): Promise<ListBackupPlanTemplatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBackupPlanTemplatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns version metadata of your backup plans, including Amazon Resource Names (ARNs), backup plan IDs, creation and deletion dates, plan names, and version IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBackupPlanVersions(
    args: ListBackupPlanVersionsInput
  ): Promise<ListBackupPlanVersionsOutput>;
  public listBackupPlanVersions(
    args: ListBackupPlanVersionsInput,
    cb: (err: any, data?: ListBackupPlanVersionsOutput) => void
  ): void;
  public listBackupPlanVersions(
    args: ListBackupPlanVersionsInput,
    cb?: (err: any, data?: ListBackupPlanVersionsOutput) => void
  ): Promise<ListBackupPlanVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBackupPlanVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns metadata of your saved backup plans, including Amazon Resource Names (ARNs), plan IDs, creation and deletion dates, version IDs, plan names, and creator request IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBackupPlans(
    args: ListBackupPlansInput
  ): Promise<ListBackupPlansOutput>;
  public listBackupPlans(
    args: ListBackupPlansInput,
    cb: (err: any, data?: ListBackupPlansOutput) => void
  ): void;
  public listBackupPlans(
    args: ListBackupPlansInput,
    cb?: (err: any, data?: ListBackupPlansOutput) => void
  ): Promise<ListBackupPlansOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBackupPlansCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array containing metadata of the resources associated with the target backup plan.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBackupSelections(
    args: ListBackupSelectionsInput
  ): Promise<ListBackupSelectionsOutput>;
  public listBackupSelections(
    args: ListBackupSelectionsInput,
    cb: (err: any, data?: ListBackupSelectionsOutput) => void
  ): void;
  public listBackupSelections(
    args: ListBackupSelectionsInput,
    cb?: (err: any, data?: ListBackupSelectionsOutput) => void
  ): Promise<ListBackupSelectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBackupSelectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of recovery point storage containers along with information about them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listBackupVaults(
    args: ListBackupVaultsInput
  ): Promise<ListBackupVaultsOutput>;
  public listBackupVaults(
    args: ListBackupVaultsInput,
    cb: (err: any, data?: ListBackupVaultsOutput) => void
  ): void;
  public listBackupVaults(
    args: ListBackupVaultsInput,
    cb?: (err: any, data?: ListBackupVaultsOutput) => void
  ): Promise<ListBackupVaultsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListBackupVaultsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of resources successfully backed up by AWS Backup, including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listProtectedResources(
    args: ListProtectedResourcesInput
  ): Promise<ListProtectedResourcesOutput>;
  public listProtectedResources(
    args: ListProtectedResourcesInput,
    cb: (err: any, data?: ListProtectedResourcesOutput) => void
  ): void;
  public listProtectedResources(
    args: ListProtectedResourcesInput,
    cb?: (err: any, data?: ListProtectedResourcesOutput) => void
  ): Promise<ListProtectedResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListProtectedResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns detailed information about the recovery points stored in a backup vault.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRecoveryPointsByBackupVault(
    args: ListRecoveryPointsByBackupVaultInput
  ): Promise<ListRecoveryPointsByBackupVaultOutput>;
  public listRecoveryPointsByBackupVault(
    args: ListRecoveryPointsByBackupVaultInput,
    cb: (err: any, data?: ListRecoveryPointsByBackupVaultOutput) => void
  ): void;
  public listRecoveryPointsByBackupVault(
    args: ListRecoveryPointsByBackupVaultInput,
    cb?: (err: any, data?: ListRecoveryPointsByBackupVaultOutput) => void
  ): Promise<ListRecoveryPointsByBackupVaultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRecoveryPointsByBackupVaultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns detailed information about recovery points of the type specified by a resource Amazon Resource Name (ARN).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRecoveryPointsByResource(
    args: ListRecoveryPointsByResourceInput
  ): Promise<ListRecoveryPointsByResourceOutput>;
  public listRecoveryPointsByResource(
    args: ListRecoveryPointsByResourceInput,
    cb: (err: any, data?: ListRecoveryPointsByResourceOutput) => void
  ): void;
  public listRecoveryPointsByResource(
    args: ListRecoveryPointsByResourceInput,
    cb?: (err: any, data?: ListRecoveryPointsByResourceOutput) => void
  ): Promise<ListRecoveryPointsByResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRecoveryPointsByResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of jobs that AWS Backup initiated to restore a saved resource, including metadata about the recovery process.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRestoreJobs(
    args: ListRestoreJobsInput
  ): Promise<ListRestoreJobsOutput>;
  public listRestoreJobs(
    args: ListRestoreJobsInput,
    cb: (err: any, data?: ListRestoreJobsOutput) => void
  ): void;
  public listRestoreJobs(
    args: ListRestoreJobsInput,
    cb?: (err: any, data?: ListRestoreJobsOutput) => void
  ): Promise<ListRestoreJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRestoreJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of key-value pairs assigned to a target recovery point, backup plan, or backup vault.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTags(args: ListTagsInput): Promise<ListTagsOutput>;
  public listTags(
    args: ListTagsInput,
    cb: (err: any, data?: ListTagsOutput) => void
  ): void;
  public listTags(
    args: ListTagsInput,
    cb?: (err: any, data?: ListTagsOutput) => void
  ): Promise<ListTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets a resource-based policy that is used to manage access permissions on the target backup vault. Requires a backup vault name and an access policy document in JSON format.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBackupVaultAccessPolicy(
    args: PutBackupVaultAccessPolicyInput
  ): Promise<PutBackupVaultAccessPolicyOutput>;
  public putBackupVaultAccessPolicy(
    args: PutBackupVaultAccessPolicyInput,
    cb: (err: any, data?: PutBackupVaultAccessPolicyOutput) => void
  ): void;
  public putBackupVaultAccessPolicy(
    args: PutBackupVaultAccessPolicyInput,
    cb?: (err: any, data?: PutBackupVaultAccessPolicyOutput) => void
  ): Promise<PutBackupVaultAccessPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBackupVaultAccessPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Turns on notifications on a backup vault for the specified topic and events.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putBackupVaultNotifications(
    args: PutBackupVaultNotificationsInput
  ): Promise<PutBackupVaultNotificationsOutput>;
  public putBackupVaultNotifications(
    args: PutBackupVaultNotificationsInput,
    cb: (err: any, data?: PutBackupVaultNotificationsOutput) => void
  ): void;
  public putBackupVaultNotifications(
    args: PutBackupVaultNotificationsInput,
    cb?: (err: any, data?: PutBackupVaultNotificationsOutput) => void
  ): Promise<PutBackupVaultNotificationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutBackupVaultNotificationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a job to create a one-time backup of the specified resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {LimitExceededException} <p>A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startBackupJob(
    args: StartBackupJobInput
  ): Promise<StartBackupJobOutput>;
  public startBackupJob(
    args: StartBackupJobInput,
    cb: (err: any, data?: StartBackupJobOutput) => void
  ): void;
  public startBackupJob(
    args: StartBackupJobInput,
    cb?: (err: any, data?: StartBackupJobOutput) => void
  ): Promise<StartBackupJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartBackupJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Recovers the saved resource identified by an Amazon Resource Name (ARN). </p> <p>If the resource ARN is included in the request, then the last complete backup of that resource is recovered. If the ARN of a recovery point is supplied, then that recovery point is restored.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startRestoreJob(
    args: StartRestoreJobInput
  ): Promise<StartRestoreJobOutput>;
  public startRestoreJob(
    args: StartRestoreJobInput,
    cb: (err: any, data?: StartRestoreJobOutput) => void
  ): void;
  public startRestoreJob(
    args: StartRestoreJobInput,
    cb?: (err: any, data?: StartRestoreJobOutput) => void
  ): Promise<StartRestoreJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartRestoreJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attempts to cancel a job to create a one-time backup of a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopBackupJob(args: StopBackupJobInput): Promise<StopBackupJobOutput>;
  public stopBackupJob(
    args: StopBackupJobInput,
    cb: (err: any, data?: StopBackupJobOutput) => void
  ): void;
  public stopBackupJob(
    args: StopBackupJobInput,
    cb?: (err: any, data?: StopBackupJobOutput) => void
  ): Promise<StopBackupJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopBackupJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Assigns a set of key-value pairs to a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {LimitExceededException} <p>A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a set of key-value pairs from a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN)</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Replaces the body of a saved backup plan identified by its <code>backupPlanId</code> with the input document in JSON format. The new version is uniquely identified by a <code>VersionId</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateBackupPlan(
    args: UpdateBackupPlanInput
  ): Promise<UpdateBackupPlanOutput>;
  public updateBackupPlan(
    args: UpdateBackupPlanInput,
    cb: (err: any, data?: UpdateBackupPlanOutput) => void
  ): void;
  public updateBackupPlan(
    args: UpdateBackupPlanInput,
    cb?: (err: any, data?: UpdateBackupPlanOutput) => void
  ): Promise<UpdateBackupPlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateBackupPlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the transition lifecycle of a recovery point.</p> <p>The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. AWS Backup transitions and expires backups automatically according to the lifecycle that you define. </p> <p>Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the “expire after days” setting must be 90 days greater than the “transition to cold after days” setting. The “transition to cold after days” setting cannot be changed after a backup has been transitioned to cold. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>A resource that is required for the action doesn't exist.</p>
   *   - {InvalidParameterValueException} <p>Indicates that something is wrong with a parameter's value. For example, the value is out of range.</p>
   *   - {MissingParameterValueException} <p>Indicates that a required parameter is missing.</p>
   *   - {ServiceUnavailableException} <p>The request failed due to a temporary failure of the server.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRecoveryPointLifecycle(
    args: UpdateRecoveryPointLifecycleInput
  ): Promise<UpdateRecoveryPointLifecycleOutput>;
  public updateRecoveryPointLifecycle(
    args: UpdateRecoveryPointLifecycleInput,
    cb: (err: any, data?: UpdateRecoveryPointLifecycleOutput) => void
  ): void;
  public updateRecoveryPointLifecycle(
    args: UpdateRecoveryPointLifecycleInput,
    cb?: (err: any, data?: UpdateRecoveryPointLifecycleOutput) => void
  ): Promise<UpdateRecoveryPointLifecycleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRecoveryPointLifecycleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
