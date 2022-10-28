// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CloudFormationClient } from "./CloudFormationClient";
import {
  ActivateTypeCommand,
  ActivateTypeCommandInput,
  ActivateTypeCommandOutput,
} from "./commands/ActivateTypeCommand";
import {
  BatchDescribeTypeConfigurationsCommand,
  BatchDescribeTypeConfigurationsCommandInput,
  BatchDescribeTypeConfigurationsCommandOutput,
} from "./commands/BatchDescribeTypeConfigurationsCommand";
import {
  CancelUpdateStackCommand,
  CancelUpdateStackCommandInput,
  CancelUpdateStackCommandOutput,
} from "./commands/CancelUpdateStackCommand";
import {
  ContinueUpdateRollbackCommand,
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput,
} from "./commands/ContinueUpdateRollbackCommand";
import {
  CreateChangeSetCommand,
  CreateChangeSetCommandInput,
  CreateChangeSetCommandOutput,
} from "./commands/CreateChangeSetCommand";
import { CreateStackCommand, CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import {
  CreateStackInstancesCommand,
  CreateStackInstancesCommandInput,
  CreateStackInstancesCommandOutput,
} from "./commands/CreateStackInstancesCommand";
import {
  CreateStackSetCommand,
  CreateStackSetCommandInput,
  CreateStackSetCommandOutput,
} from "./commands/CreateStackSetCommand";
import {
  DeactivateTypeCommand,
  DeactivateTypeCommandInput,
  DeactivateTypeCommandOutput,
} from "./commands/DeactivateTypeCommand";
import {
  DeleteChangeSetCommand,
  DeleteChangeSetCommandInput,
  DeleteChangeSetCommandOutput,
} from "./commands/DeleteChangeSetCommand";
import { DeleteStackCommand, DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import {
  DeleteStackInstancesCommand,
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput,
} from "./commands/DeleteStackInstancesCommand";
import {
  DeleteStackSetCommand,
  DeleteStackSetCommandInput,
  DeleteStackSetCommandOutput,
} from "./commands/DeleteStackSetCommand";
import {
  DeregisterTypeCommand,
  DeregisterTypeCommandInput,
  DeregisterTypeCommandOutput,
} from "./commands/DeregisterTypeCommand";
import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeChangeSetCommand,
  DescribeChangeSetCommandInput,
  DescribeChangeSetCommandOutput,
} from "./commands/DescribeChangeSetCommand";
import {
  DescribeChangeSetHooksCommand,
  DescribeChangeSetHooksCommandInput,
  DescribeChangeSetHooksCommandOutput,
} from "./commands/DescribeChangeSetHooksCommand";
import {
  DescribePublisherCommand,
  DescribePublisherCommandInput,
  DescribePublisherCommandOutput,
} from "./commands/DescribePublisherCommand";
import {
  DescribeStackDriftDetectionStatusCommand,
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput,
} from "./commands/DescribeStackDriftDetectionStatusCommand";
import {
  DescribeStackEventsCommand,
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
} from "./commands/DescribeStackEventsCommand";
import {
  DescribeStackInstanceCommand,
  DescribeStackInstanceCommandInput,
  DescribeStackInstanceCommandOutput,
} from "./commands/DescribeStackInstanceCommand";
import {
  DescribeStackResourceCommand,
  DescribeStackResourceCommandInput,
  DescribeStackResourceCommandOutput,
} from "./commands/DescribeStackResourceCommand";
import {
  DescribeStackResourceDriftsCommand,
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
} from "./commands/DescribeStackResourceDriftsCommand";
import {
  DescribeStackResourcesCommand,
  DescribeStackResourcesCommandInput,
  DescribeStackResourcesCommandOutput,
} from "./commands/DescribeStackResourcesCommand";
import {
  DescribeStacksCommand,
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput,
} from "./commands/DescribeStacksCommand";
import {
  DescribeStackSetCommand,
  DescribeStackSetCommandInput,
  DescribeStackSetCommandOutput,
} from "./commands/DescribeStackSetCommand";
import {
  DescribeStackSetOperationCommand,
  DescribeStackSetOperationCommandInput,
  DescribeStackSetOperationCommandOutput,
} from "./commands/DescribeStackSetOperationCommand";
import {
  DescribeTypeCommand,
  DescribeTypeCommandInput,
  DescribeTypeCommandOutput,
} from "./commands/DescribeTypeCommand";
import {
  DescribeTypeRegistrationCommand,
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput,
} from "./commands/DescribeTypeRegistrationCommand";
import {
  DetectStackDriftCommand,
  DetectStackDriftCommandInput,
  DetectStackDriftCommandOutput,
} from "./commands/DetectStackDriftCommand";
import {
  DetectStackResourceDriftCommand,
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput,
} from "./commands/DetectStackResourceDriftCommand";
import {
  DetectStackSetDriftCommand,
  DetectStackSetDriftCommandInput,
  DetectStackSetDriftCommandOutput,
} from "./commands/DetectStackSetDriftCommand";
import {
  EstimateTemplateCostCommand,
  EstimateTemplateCostCommandInput,
  EstimateTemplateCostCommandOutput,
} from "./commands/EstimateTemplateCostCommand";
import {
  ExecuteChangeSetCommand,
  ExecuteChangeSetCommandInput,
  ExecuteChangeSetCommandOutput,
} from "./commands/ExecuteChangeSetCommand";
import {
  GetStackPolicyCommand,
  GetStackPolicyCommandInput,
  GetStackPolicyCommandOutput,
} from "./commands/GetStackPolicyCommand";
import { GetTemplateCommand, GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import {
  GetTemplateSummaryCommand,
  GetTemplateSummaryCommandInput,
  GetTemplateSummaryCommandOutput,
} from "./commands/GetTemplateSummaryCommand";
import {
  ImportStacksToStackSetCommand,
  ImportStacksToStackSetCommandInput,
  ImportStacksToStackSetCommandOutput,
} from "./commands/ImportStacksToStackSetCommand";
import {
  ListChangeSetsCommand,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
} from "./commands/ListChangeSetsCommand";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import {
  ListStackInstancesCommand,
  ListStackInstancesCommandInput,
  ListStackInstancesCommandOutput,
} from "./commands/ListStackInstancesCommand";
import {
  ListStackResourcesCommand,
  ListStackResourcesCommandInput,
  ListStackResourcesCommandOutput,
} from "./commands/ListStackResourcesCommand";
import { ListStacksCommand, ListStacksCommandInput, ListStacksCommandOutput } from "./commands/ListStacksCommand";
import {
  ListStackSetOperationResultsCommand,
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
} from "./commands/ListStackSetOperationResultsCommand";
import {
  ListStackSetOperationsCommand,
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
} from "./commands/ListStackSetOperationsCommand";
import {
  ListStackSetsCommand,
  ListStackSetsCommandInput,
  ListStackSetsCommandOutput,
} from "./commands/ListStackSetsCommand";
import {
  ListTypeRegistrationsCommand,
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
} from "./commands/ListTypeRegistrationsCommand";
import { ListTypesCommand, ListTypesCommandInput, ListTypesCommandOutput } from "./commands/ListTypesCommand";
import {
  ListTypeVersionsCommand,
  ListTypeVersionsCommandInput,
  ListTypeVersionsCommandOutput,
} from "./commands/ListTypeVersionsCommand";
import { PublishTypeCommand, PublishTypeCommandInput, PublishTypeCommandOutput } from "./commands/PublishTypeCommand";
import {
  RecordHandlerProgressCommand,
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput,
} from "./commands/RecordHandlerProgressCommand";
import {
  RegisterPublisherCommand,
  RegisterPublisherCommandInput,
  RegisterPublisherCommandOutput,
} from "./commands/RegisterPublisherCommand";
import {
  RegisterTypeCommand,
  RegisterTypeCommandInput,
  RegisterTypeCommandOutput,
} from "./commands/RegisterTypeCommand";
import {
  RollbackStackCommand,
  RollbackStackCommandInput,
  RollbackStackCommandOutput,
} from "./commands/RollbackStackCommand";
import {
  SetStackPolicyCommand,
  SetStackPolicyCommandInput,
  SetStackPolicyCommandOutput,
} from "./commands/SetStackPolicyCommand";
import {
  SetTypeConfigurationCommand,
  SetTypeConfigurationCommandInput,
  SetTypeConfigurationCommandOutput,
} from "./commands/SetTypeConfigurationCommand";
import {
  SetTypeDefaultVersionCommand,
  SetTypeDefaultVersionCommandInput,
  SetTypeDefaultVersionCommandOutput,
} from "./commands/SetTypeDefaultVersionCommand";
import {
  SignalResourceCommand,
  SignalResourceCommandInput,
  SignalResourceCommandOutput,
} from "./commands/SignalResourceCommand";
import {
  StopStackSetOperationCommand,
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput,
} from "./commands/StopStackSetOperationCommand";
import { TestTypeCommand, TestTypeCommandInput, TestTypeCommandOutput } from "./commands/TestTypeCommand";
import { UpdateStackCommand, UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import {
  UpdateStackInstancesCommand,
  UpdateStackInstancesCommandInput,
  UpdateStackInstancesCommandOutput,
} from "./commands/UpdateStackInstancesCommand";
import {
  UpdateStackSetCommand,
  UpdateStackSetCommandInput,
  UpdateStackSetCommandOutput,
} from "./commands/UpdateStackSetCommand";
import {
  UpdateTerminationProtectionCommand,
  UpdateTerminationProtectionCommandInput,
  UpdateTerminationProtectionCommandOutput,
} from "./commands/UpdateTerminationProtectionCommand";
import {
  ValidateTemplateCommand,
  ValidateTemplateCommandInput,
  ValidateTemplateCommandOutput,
} from "./commands/ValidateTemplateCommand";

/**
 * <fullname>CloudFormation</fullname>
 *          <p>CloudFormation allows you to create and manage Amazon Web Services infrastructure
 *          deployments predictably and repeatedly. You can use CloudFormation to leverage
 *             Amazon Web Services products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store,
 *             Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build highly
 *          reliable, highly scalable, cost-effective applications without creating or configuring the
 *          underlying Amazon Web Services infrastructure.</p>
 *          <p>With CloudFormation, you declare all your resources and dependencies in a template
 *          file. The template defines a collection of resources as a single unit called a stack.
 *             CloudFormation creates and deletes all member resources of the stack together and
 *          manages all dependencies between the resources for you.</p>
 *          <p>For more information about CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">CloudFormation product page</a>.</p>
 *          <p>CloudFormation makes use of other Amazon Web Services products. If you need
 *          additional technical information about a specific Amazon Web Services product, you can find
 *          the product's technical documentation at <a href="https://docs.aws.amazon.com/">
 *                <code>docs.aws.amazon.com</code>
 *             </a>.</p>
 */
export class CloudFormation extends CloudFormationClient {
  /**
   * <p>Activates a public third-party extension, making it available for use in stack
   *          templates. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-public.html">Using
   *             public extensions</a> in the <i>CloudFormation User Guide</i>.</p>
   *          <p>Once you have activated a public third-party extension in your account and region, use
   *             <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For
   *          more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  public activateType(
    args: ActivateTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ActivateTypeCommandOutput>;
  public activateType(args: ActivateTypeCommandInput, cb: (err: any, data?: ActivateTypeCommandOutput) => void): void;
  public activateType(
    args: ActivateTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ActivateTypeCommandOutput) => void
  ): void;
  public activateType(
    args: ActivateTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ActivateTypeCommandOutput) => void),
    cb?: (err: any, data?: ActivateTypeCommandOutput) => void
  ): Promise<ActivateTypeCommandOutput> | void {
    const command = new ActivateTypeCommand(args);
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
   * <p>Returns configuration data for the specified CloudFormation extensions, from
   *          the CloudFormation registry for the account and region.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the
   *             <i>CloudFormation User Guide</i>.</p>
   */
  public batchDescribeTypeConfigurations(
    args: BatchDescribeTypeConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDescribeTypeConfigurationsCommandOutput>;
  public batchDescribeTypeConfigurations(
    args: BatchDescribeTypeConfigurationsCommandInput,
    cb: (err: any, data?: BatchDescribeTypeConfigurationsCommandOutput) => void
  ): void;
  public batchDescribeTypeConfigurations(
    args: BatchDescribeTypeConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDescribeTypeConfigurationsCommandOutput) => void
  ): void;
  public batchDescribeTypeConfigurations(
    args: BatchDescribeTypeConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDescribeTypeConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: BatchDescribeTypeConfigurationsCommandOutput) => void
  ): Promise<BatchDescribeTypeConfigurationsCommandOutput> | void {
    const command = new BatchDescribeTypeConfigurationsCommand(args);
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
   * <p>Cancels an update on the specified stack. If the call completes successfully, the stack
   *          rolls back the update and reverts to the previous stack configuration.</p>
   *          <note>
   *             <p>You can cancel only stacks that are in the <code>UPDATE_IN_PROGRESS</code>
   *             state.</p>
   *          </note>
   */
  public cancelUpdateStack(
    args: CancelUpdateStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelUpdateStackCommandOutput>;
  public cancelUpdateStack(
    args: CancelUpdateStackCommandInput,
    cb: (err: any, data?: CancelUpdateStackCommandOutput) => void
  ): void;
  public cancelUpdateStack(
    args: CancelUpdateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelUpdateStackCommandOutput) => void
  ): void;
  public cancelUpdateStack(
    args: CancelUpdateStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelUpdateStackCommandOutput) => void),
    cb?: (err: any, data?: CancelUpdateStackCommandOutput) => void
  ): Promise<CancelUpdateStackCommandOutput> | void {
    const command = new CancelUpdateStackCommand(args);
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
   * <p>For a specified stack that's in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues
   *          rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause
   *          of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can
   *          return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and
   *          then try to update the stack again.</p>
   *          <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when CloudFormation can't roll back all changes after a failed stack update. For example, you
   *          might have a stack that's rolling back to an old database instance that was deleted outside
   *          of CloudFormation. Because CloudFormation doesn't know the database was deleted, it
   *          assumes that the database instance still exists and attempts to roll back to it, causing
   *          the update rollback to fail.</p>
   */
  public continueUpdateRollback(
    args: ContinueUpdateRollbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ContinueUpdateRollbackCommandOutput>;
  public continueUpdateRollback(
    args: ContinueUpdateRollbackCommandInput,
    cb: (err: any, data?: ContinueUpdateRollbackCommandOutput) => void
  ): void;
  public continueUpdateRollback(
    args: ContinueUpdateRollbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ContinueUpdateRollbackCommandOutput) => void
  ): void;
  public continueUpdateRollback(
    args: ContinueUpdateRollbackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ContinueUpdateRollbackCommandOutput) => void),
    cb?: (err: any, data?: ContinueUpdateRollbackCommandOutput) => void
  ): Promise<ContinueUpdateRollbackCommandOutput> | void {
    const command = new ContinueUpdateRollbackCommand(args);
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
   * <p>Creates a list of changes that will be applied to a stack so that you can review the
   *          changes before executing them. You can create a change set for a stack that doesn't exist
   *          or an existing stack. If you create a change set for a stack that doesn't exist, the change
   *          set shows all of the resources that CloudFormation will create. If you create a change
   *          set for an existing stack, CloudFormation compares the stack's information with the
   *          information that you submit in the change set and lists the differences. Use change sets to
   *          understand which resources CloudFormation will create or change, and how it will change
   *          resources in an existing stack, before you create or update a stack.</p>
   *          <p>To create a change set for a stack that doesn't exist, for the
   *             <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change
   *          set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code>
   *          parameter. To create a change set for an import operation, specify <code>IMPORT</code> for
   *          the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call
   *          successfully completes, CloudFormation starts creating the change set. To check the
   *          status of the change set or to review it, use the <a>DescribeChangeSet</a>
   *          action.</p>
   *          <p>When you are satisfied with the changes the change set will make, execute the change set
   *          by using the <a>ExecuteChangeSet</a> action. CloudFormation doesn't make
   *          changes until you execute the change set.</p>
   *          <p>To create a change set for the entire stack hierarchy, set
   *             <code>IncludeNestedStacks</code> to <code>True</code>.</p>
   */
  public createChangeSet(
    args: CreateChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChangeSetCommandOutput>;
  public createChangeSet(
    args: CreateChangeSetCommandInput,
    cb: (err: any, data?: CreateChangeSetCommandOutput) => void
  ): void;
  public createChangeSet(
    args: CreateChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChangeSetCommandOutput) => void
  ): void;
  public createChangeSet(
    args: CreateChangeSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChangeSetCommandOutput) => void),
    cb?: (err: any, data?: CreateChangeSetCommandOutput) => void
  ): Promise<CreateChangeSetCommandOutput> | void {
    const command = new CreateChangeSetCommand(args);
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
   * <p>Creates a stack as specified in the template. After the call completes successfully, the
   *          stack creation starts. You can check the status of the stack through the <a>DescribeStacks</a>operation.</p>
   */
  public createStack(args: CreateStackCommandInput, options?: __HttpHandlerOptions): Promise<CreateStackCommandOutput>;
  public createStack(args: CreateStackCommandInput, cb: (err: any, data?: CreateStackCommandOutput) => void): void;
  public createStack(
    args: CreateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStackCommandOutput) => void
  ): void;
  public createStack(
    args: CreateStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStackCommandOutput) => void),
    cb?: (err: any, data?: CreateStackCommandOutput) => void
  ): Promise<CreateStackCommandOutput> | void {
    const command = new CreateStackCommand(args);
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
   * <p>Creates stack instances for the specified accounts, within the specified Amazon Web Services Regions. A stack instance refers to a stack in a specific account and Region.
   *          You must specify at least one value for either <code>Accounts</code> or
   *             <code>DeploymentTargets</code>, and you must specify at least one value for
   *             <code>Regions</code>.</p>
   */
  public createStackInstances(
    args: CreateStackInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStackInstancesCommandOutput>;
  public createStackInstances(
    args: CreateStackInstancesCommandInput,
    cb: (err: any, data?: CreateStackInstancesCommandOutput) => void
  ): void;
  public createStackInstances(
    args: CreateStackInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStackInstancesCommandOutput) => void
  ): void;
  public createStackInstances(
    args: CreateStackInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStackInstancesCommandOutput) => void),
    cb?: (err: any, data?: CreateStackInstancesCommandOutput) => void
  ): Promise<CreateStackInstancesCommandOutput> | void {
    const command = new CreateStackInstancesCommand(args);
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
   * <p>Creates a stack set.</p>
   */
  public createStackSet(
    args: CreateStackSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStackSetCommandOutput>;
  public createStackSet(
    args: CreateStackSetCommandInput,
    cb: (err: any, data?: CreateStackSetCommandOutput) => void
  ): void;
  public createStackSet(
    args: CreateStackSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStackSetCommandOutput) => void
  ): void;
  public createStackSet(
    args: CreateStackSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStackSetCommandOutput) => void),
    cb?: (err: any, data?: CreateStackSetCommandOutput) => void
  ): Promise<CreateStackSetCommandOutput> | void {
    const command = new CreateStackSetCommand(args);
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
   * <p>Deactivates a public extension that was previously activated in this account and
   *          region.</p>
   *          <p>Once deactivated, an extension can't be used in any CloudFormation operation.
   *          This includes stack update operations where the stack template includes the extension, even
   *          if no updates are being made to the extension. In addition, deactivated extensions aren't
   *          automatically updated if a new version of the extension is released.</p>
   */
  public deactivateType(
    args: DeactivateTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeactivateTypeCommandOutput>;
  public deactivateType(
    args: DeactivateTypeCommandInput,
    cb: (err: any, data?: DeactivateTypeCommandOutput) => void
  ): void;
  public deactivateType(
    args: DeactivateTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeactivateTypeCommandOutput) => void
  ): void;
  public deactivateType(
    args: DeactivateTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeactivateTypeCommandOutput) => void),
    cb?: (err: any, data?: DeactivateTypeCommandOutput) => void
  ): Promise<DeactivateTypeCommandOutput> | void {
    const command = new DeactivateTypeCommand(args);
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
   * <p>Deletes the specified change set. Deleting change sets ensures that no one executes the
   *          wrong change set.</p>
   *          <p>If the call successfully completes, CloudFormation successfully deleted the change
   *          set.</p>
   *          <p>If <code>IncludeNestedStacks</code> specifies <code>True</code> during the creation of
   *          the nested change set, then <code>DeleteChangeSet</code> will delete all change sets that
   *          belong to the stacks hierarchy and will also delete all change sets for nested stacks with
   *          the status of <code>REVIEW_IN_PROGRESS</code>.</p>
   */
  public deleteChangeSet(
    args: DeleteChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChangeSetCommandOutput>;
  public deleteChangeSet(
    args: DeleteChangeSetCommandInput,
    cb: (err: any, data?: DeleteChangeSetCommandOutput) => void
  ): void;
  public deleteChangeSet(
    args: DeleteChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChangeSetCommandOutput) => void
  ): void;
  public deleteChangeSet(
    args: DeleteChangeSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteChangeSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteChangeSetCommandOutput) => void
  ): Promise<DeleteChangeSetCommandOutput> | void {
    const command = new DeleteChangeSetCommand(args);
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
   * <p>Deletes a specified stack. Once the call completes successfully, stack deletion starts.
   *          Deleted stacks don't show up in the <a>DescribeStacks</a> operation if the
   *          deletion has been completed successfully.</p>
   */
  public deleteStack(args: DeleteStackCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStackCommandOutput>;
  public deleteStack(args: DeleteStackCommandInput, cb: (err: any, data?: DeleteStackCommandOutput) => void): void;
  public deleteStack(
    args: DeleteStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStackCommandOutput) => void
  ): void;
  public deleteStack(
    args: DeleteStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStackCommandOutput) => void),
    cb?: (err: any, data?: DeleteStackCommandOutput) => void
  ): Promise<DeleteStackCommandOutput> | void {
    const command = new DeleteStackCommand(args);
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
   * <p>Deletes stack instances for the specified accounts, in the specified Amazon Web Services Regions.</p>
   */
  public deleteStackInstances(
    args: DeleteStackInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStackInstancesCommandOutput>;
  public deleteStackInstances(
    args: DeleteStackInstancesCommandInput,
    cb: (err: any, data?: DeleteStackInstancesCommandOutput) => void
  ): void;
  public deleteStackInstances(
    args: DeleteStackInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStackInstancesCommandOutput) => void
  ): void;
  public deleteStackInstances(
    args: DeleteStackInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStackInstancesCommandOutput) => void),
    cb?: (err: any, data?: DeleteStackInstancesCommandOutput) => void
  ): Promise<DeleteStackInstancesCommandOutput> | void {
    const command = new DeleteStackInstancesCommand(args);
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
   * <p>Deletes a stack set. Before you can delete a stack set, all its member stack instances
   *          must be deleted. For more information about how to complete this, see <a>DeleteStackInstances</a>.</p>
   */
  public deleteStackSet(
    args: DeleteStackSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStackSetCommandOutput>;
  public deleteStackSet(
    args: DeleteStackSetCommandInput,
    cb: (err: any, data?: DeleteStackSetCommandOutput) => void
  ): void;
  public deleteStackSet(
    args: DeleteStackSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStackSetCommandOutput) => void
  ): void;
  public deleteStackSet(
    args: DeleteStackSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStackSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteStackSetCommandOutput) => void
  ): Promise<DeleteStackSetCommandOutput> | void {
    const command = new DeleteStackSetCommand(args);
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
   * <p>Marks an extension or extension version as <code>DEPRECATED</code> in the CloudFormation registry, removing it from active use. Deprecated extensions or
   *          extension versions cannot be used in CloudFormation operations.</p>
   *          <p>To deregister an entire extension, you must individually deregister all active versions
   *          of that extension. If an extension has only a single active version, deregistering that
   *          version results in the extension itself being deregistered and marked as deprecated in the
   *          registry.</p>
   *          <p>You can't deregister the default version of an extension if there are other active
   *          version of that extension. If you do deregister the default version of an extension, the
   *          extension type itself is deregistered as well and marked as deprecated.</p>
   *          <p>To view the deprecation status of an extension or extension version, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.</p>
   */
  public deregisterType(
    args: DeregisterTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTypeCommandOutput>;
  public deregisterType(
    args: DeregisterTypeCommandInput,
    cb: (err: any, data?: DeregisterTypeCommandOutput) => void
  ): void;
  public deregisterType(
    args: DeregisterTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTypeCommandOutput) => void
  ): void;
  public deregisterType(
    args: DeregisterTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterTypeCommandOutput) => void),
    cb?: (err: any, data?: DeregisterTypeCommandOutput) => void
  ): Promise<DeregisterTypeCommandOutput> | void {
    const command = new DeregisterTypeCommand(args);
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
   * <p>Retrieves your account's CloudFormation limits, such as the maximum number of stacks
   *          that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation Quotas</a> in the
   *          <i>CloudFormation User Guide</i>.</p>
   */
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountLimitsCommandOutput>;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountLimitsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): Promise<DescribeAccountLimitsCommandOutput> | void {
    const command = new DescribeAccountLimitsCommand(args);
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
   * <p>Returns the inputs for the change set and a list of changes that CloudFormation will
   *          make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the CloudFormation User Guide.</p>
   */
  public describeChangeSet(
    args: DescribeChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChangeSetCommandOutput>;
  public describeChangeSet(
    args: DescribeChangeSetCommandInput,
    cb: (err: any, data?: DescribeChangeSetCommandOutput) => void
  ): void;
  public describeChangeSet(
    args: DescribeChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChangeSetCommandOutput) => void
  ): void;
  public describeChangeSet(
    args: DescribeChangeSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChangeSetCommandOutput) => void),
    cb?: (err: any, data?: DescribeChangeSetCommandOutput) => void
  ): Promise<DescribeChangeSetCommandOutput> | void {
    const command = new DescribeChangeSetCommand(args);
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
   * <p>Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.</p>
   */
  public describeChangeSetHooks(
    args: DescribeChangeSetHooksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChangeSetHooksCommandOutput>;
  public describeChangeSetHooks(
    args: DescribeChangeSetHooksCommandInput,
    cb: (err: any, data?: DescribeChangeSetHooksCommandOutput) => void
  ): void;
  public describeChangeSetHooks(
    args: DescribeChangeSetHooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChangeSetHooksCommandOutput) => void
  ): void;
  public describeChangeSetHooks(
    args: DescribeChangeSetHooksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeChangeSetHooksCommandOutput) => void),
    cb?: (err: any, data?: DescribeChangeSetHooksCommandOutput) => void
  ): Promise<DescribeChangeSetHooksCommandOutput> | void {
    const command = new DescribeChangeSetHooksCommand(args);
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
   * <p>Returns information about a CloudFormation extension publisher.</p>
   *          <p>If you don't supply a <code>PublisherId</code>, and you have registered as an extension
   *          publisher, <code>DescribePublisher</code> returns information about your own publisher
   *          account.</p>
   *          <p>For more information about registering as a publisher, see:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing
   *                   extensions to make them available for public use</a> in the <i>CloudFormation CLI User Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describePublisher(
    args: DescribePublisherCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePublisherCommandOutput>;
  public describePublisher(
    args: DescribePublisherCommandInput,
    cb: (err: any, data?: DescribePublisherCommandOutput) => void
  ): void;
  public describePublisher(
    args: DescribePublisherCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePublisherCommandOutput) => void
  ): void;
  public describePublisher(
    args: DescribePublisherCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePublisherCommandOutput) => void),
    cb?: (err: any, data?: DescribePublisherCommandOutput) => void
  ): Promise<DescribePublisherCommandOutput> | void {
    const command = new DescribePublisherCommand(args);
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
   * <p>Returns information about a stack drift detection operation. A stack drift detection
   *          operation detects whether a stack's actual configuration differs, or has
   *             <i>drifted</i>, from it's expected configuration, as defined in the stack
   *          template and any values specified as template parameters. A stack is considered to have
   *          drifted if one or more of its resources have drifted. For more information about stack and
   *          resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
   *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   *          <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation.
   *             <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use
   *          to monitor the progress of the operation using
   *             <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has
   *          completed, use <a>DescribeStackResourceDrifts</a> to return drift information
   *          about the stack and its resources.</p>
   */
  public describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackDriftDetectionStatusCommandOutput>;
  public describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusCommandInput,
    cb: (err: any, data?: DescribeStackDriftDetectionStatusCommandOutput) => void
  ): void;
  public describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackDriftDetectionStatusCommandOutput) => void
  ): void;
  public describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStackDriftDetectionStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackDriftDetectionStatusCommandOutput) => void
  ): Promise<DescribeStackDriftDetectionStatusCommandOutput> | void {
    const command = new DescribeStackDriftDetectionStatusCommand(args);
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
   * <p>Returns all stack related events for a specified stack in reverse chronological order.
   *          For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the
   *          CloudFormation User Guide.</p>
   *          <note>
   *             <p>You can list events for stacks that have failed to create or have been deleted by
   *             specifying the unique stack identifier (stack ID).</p>
   *          </note>
   */
  public describeStackEvents(
    args: DescribeStackEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackEventsCommandOutput>;
  public describeStackEvents(
    args: DescribeStackEventsCommandInput,
    cb: (err: any, data?: DescribeStackEventsCommandOutput) => void
  ): void;
  public describeStackEvents(
    args: DescribeStackEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackEventsCommandOutput) => void
  ): void;
  public describeStackEvents(
    args: DescribeStackEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStackEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackEventsCommandOutput) => void
  ): Promise<DescribeStackEventsCommandOutput> | void {
    const command = new DescribeStackEventsCommand(args);
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
   * <p>Returns the stack instance that's associated with the specified stack set, Amazon Web Services account, and Region.</p>
   *          <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>
   */
  public describeStackInstance(
    args: DescribeStackInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackInstanceCommandOutput>;
  public describeStackInstance(
    args: DescribeStackInstanceCommandInput,
    cb: (err: any, data?: DescribeStackInstanceCommandOutput) => void
  ): void;
  public describeStackInstance(
    args: DescribeStackInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackInstanceCommandOutput) => void
  ): void;
  public describeStackInstance(
    args: DescribeStackInstanceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStackInstanceCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackInstanceCommandOutput) => void
  ): Promise<DescribeStackInstanceCommandOutput> | void {
    const command = new DescribeStackInstanceCommand(args);
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
   * <p>Returns a description of the specified resource in the specified stack.</p>
   *          <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days
   *          after the stack has been deleted.</p>
   */
  public describeStackResource(
    args: DescribeStackResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackResourceCommandOutput>;
  public describeStackResource(
    args: DescribeStackResourceCommandInput,
    cb: (err: any, data?: DescribeStackResourceCommandOutput) => void
  ): void;
  public describeStackResource(
    args: DescribeStackResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackResourceCommandOutput) => void
  ): void;
  public describeStackResource(
    args: DescribeStackResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStackResourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackResourceCommandOutput) => void
  ): Promise<DescribeStackResourceCommandOutput> | void {
    const command = new DescribeStackResourceCommand(args);
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
   * <p>Returns drift information for the resources that have been checked for drift in the
   *          specified stack. This includes actual and expected configuration values for resources where
   *          CloudFormation detects configuration drift.</p>
   *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack
   *          resource that has been checked for drift. Resources that haven't yet been checked for drift
   *          aren't included. Resources that don't currently support drift detection aren't checked, and
   *          so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
   *          <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources,
   *          or <a>DetectStackDrift</a> to detect drift on all supported resources for a
   *          given stack.</p>
   */
  public describeStackResourceDrifts(
    args: DescribeStackResourceDriftsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackResourceDriftsCommandOutput>;
  public describeStackResourceDrifts(
    args: DescribeStackResourceDriftsCommandInput,
    cb: (err: any, data?: DescribeStackResourceDriftsCommandOutput) => void
  ): void;
  public describeStackResourceDrifts(
    args: DescribeStackResourceDriftsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackResourceDriftsCommandOutput) => void
  ): void;
  public describeStackResourceDrifts(
    args: DescribeStackResourceDriftsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStackResourceDriftsCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackResourceDriftsCommandOutput) => void
  ): Promise<DescribeStackResourceDriftsCommandOutput> | void {
    const command = new DescribeStackResourceDriftsCommand(args);
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
   * <p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If
   *             <code>StackName</code> is specified, all the associated resources that are part of the
   *          stack are returned. If <code>PhysicalResourceId</code> is specified, the associated
   *          resources of the stack that the resource belongs to are returned.</p>
   *          <note>
   *             <p>Only the first 100 resources will be returned. If your stack has more resources than
   *             this, you should use <code>ListStackResources</code> instead.</p>
   *          </note>
   *          <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for
   *          up to 90 days after the stack has been deleted.</p>
   *          <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but
   *          not both. In addition, you can specify <code>LogicalResourceId</code> to filter the
   *          returned result. For more information about resources, the <code>LogicalResourceId</code>
   *          and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User
   *          Guide</a>.</p>
   *          <note>
   *             <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code>
   *             and <code>PhysicalResourceId</code> in the same request.</p>
   *          </note>
   */
  public describeStackResources(
    args: DescribeStackResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackResourcesCommandOutput>;
  public describeStackResources(
    args: DescribeStackResourcesCommandInput,
    cb: (err: any, data?: DescribeStackResourcesCommandOutput) => void
  ): void;
  public describeStackResources(
    args: DescribeStackResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackResourcesCommandOutput) => void
  ): void;
  public describeStackResources(
    args: DescribeStackResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStackResourcesCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackResourcesCommandOutput) => void
  ): Promise<DescribeStackResourcesCommandOutput> | void {
    const command = new DescribeStackResourcesCommand(args);
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
   * <p>Returns the description for the specified stack; if no stack name was specified, then it
   *          returns the description for all the stacks created.</p>
   *          <note>
   *             <p>If the stack doesn't exist, an <code>ValidationError</code> is returned.</p>
   *          </note>
   */
  public describeStacks(
    args: DescribeStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStacksCommandOutput>;
  public describeStacks(
    args: DescribeStacksCommandInput,
    cb: (err: any, data?: DescribeStacksCommandOutput) => void
  ): void;
  public describeStacks(
    args: DescribeStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStacksCommandOutput) => void
  ): void;
  public describeStacks(
    args: DescribeStacksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStacksCommandOutput) => void),
    cb?: (err: any, data?: DescribeStacksCommandOutput) => void
  ): Promise<DescribeStacksCommandOutput> | void {
    const command = new DescribeStacksCommand(args);
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
   * <p>Returns the description of the specified stack set.</p>
   */
  public describeStackSet(
    args: DescribeStackSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackSetCommandOutput>;
  public describeStackSet(
    args: DescribeStackSetCommandInput,
    cb: (err: any, data?: DescribeStackSetCommandOutput) => void
  ): void;
  public describeStackSet(
    args: DescribeStackSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackSetCommandOutput) => void
  ): void;
  public describeStackSet(
    args: DescribeStackSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStackSetCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackSetCommandOutput) => void
  ): Promise<DescribeStackSetCommandOutput> | void {
    const command = new DescribeStackSetCommand(args);
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
   * <p>Returns the description of the specified stack set operation.</p>
   */
  public describeStackSetOperation(
    args: DescribeStackSetOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStackSetOperationCommandOutput>;
  public describeStackSetOperation(
    args: DescribeStackSetOperationCommandInput,
    cb: (err: any, data?: DescribeStackSetOperationCommandOutput) => void
  ): void;
  public describeStackSetOperation(
    args: DescribeStackSetOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStackSetOperationCommandOutput) => void
  ): void;
  public describeStackSetOperation(
    args: DescribeStackSetOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStackSetOperationCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackSetOperationCommandOutput) => void
  ): Promise<DescribeStackSetOperationCommandOutput> | void {
    const command = new DescribeStackSetOperationCommand(args);
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
   * <p>Returns detailed information about an extension that has been registered.</p>
   *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information
   *          about that specific extension version. Otherwise, it returns information about the default
   *          extension version.</p>
   */
  public describeType(
    args: DescribeTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTypeCommandOutput>;
  public describeType(args: DescribeTypeCommandInput, cb: (err: any, data?: DescribeTypeCommandOutput) => void): void;
  public describeType(
    args: DescribeTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTypeCommandOutput) => void
  ): void;
  public describeType(
    args: DescribeTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTypeCommandOutput) => void),
    cb?: (err: any, data?: DescribeTypeCommandOutput) => void
  ): Promise<DescribeTypeCommandOutput> | void {
    const command = new DescribeTypeCommand(args);
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
   * <p>Returns information about an extension's registration, including its current status and
   *          type and version identifiers.</p>
   *          <p>When you initiate a registration request using <code>
   *                <a>RegisterType</a>
   *             </code>, you can then use <code>
   *                <a>DescribeTypeRegistration</a>
   *             </code> to
   *          monitor the progress of that registration request.</p>
   *          <p>Once the registration request has completed, use <code>
   *                <a>DescribeType</a>
   *             </code> to return detailed information about an extension.</p>
   */
  public describeTypeRegistration(
    args: DescribeTypeRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTypeRegistrationCommandOutput>;
  public describeTypeRegistration(
    args: DescribeTypeRegistrationCommandInput,
    cb: (err: any, data?: DescribeTypeRegistrationCommandOutput) => void
  ): void;
  public describeTypeRegistration(
    args: DescribeTypeRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTypeRegistrationCommandOutput) => void
  ): void;
  public describeTypeRegistration(
    args: DescribeTypeRegistrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTypeRegistrationCommandOutput) => void),
    cb?: (err: any, data?: DescribeTypeRegistrationCommandOutput) => void
  ): Promise<DescribeTypeRegistrationCommandOutput> | void {
    const command = new DescribeTypeRegistrationCommand(args);
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
   * <p>Detects whether a stack's actual configuration differs, or has
   *             <i>drifted</i>, from it's expected configuration, as defined in the stack
   *          template and any values specified as template parameters. For each resource in the stack
   *          that supports drift detection, CloudFormation compares the actual configuration of the resource with
   *          its expected template configuration. Only resource properties explicitly defined in the
   *          stack template are checked for drift. A stack is considered to have drifted if one or more
   *          of its resources differ from their expected template configurations. For more information,
   *          see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
   *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   *          <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given
   *          stack, or <a>DetectStackResourceDrift</a> to detect drift on individual
   *          resources.</p>
   *          <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
   *          <p>
   *             <code>DetectStackDrift</code> can take up to several minutes, depending on the number of
   *          resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection
   *          operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift
   *          information about the stack and its resources.</p>
   *          <p>When detecting drift on a stack, CloudFormation doesn't detect drift on any nested stacks
   *          belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack
   *          itself.</p>
   */
  public detectStackDrift(
    args: DetectStackDriftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectStackDriftCommandOutput>;
  public detectStackDrift(
    args: DetectStackDriftCommandInput,
    cb: (err: any, data?: DetectStackDriftCommandOutput) => void
  ): void;
  public detectStackDrift(
    args: DetectStackDriftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectStackDriftCommandOutput) => void
  ): void;
  public detectStackDrift(
    args: DetectStackDriftCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetectStackDriftCommandOutput) => void),
    cb?: (err: any, data?: DetectStackDriftCommandOutput) => void
  ): Promise<DetectStackDriftCommandOutput> | void {
    const command = new DetectStackDriftCommand(args);
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
   * <p>Returns information about whether a resource's actual configuration differs, or has
   *             <i>drifted</i>, from it's expected configuration, as defined in the stack
   *          template and any values specified as template parameters. This information includes actual
   *          and expected property values for resources in which CloudFormation detects drift. Only resource
   *          properties explicitly defined in the stack template are checked for drift. For more
   *          information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
   *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   *          <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or
   *             <a>DetectStackDrift</a> to detect drift on all resources in a given stack
   *          that support drift detection.</p>
   *          <p>Resources that don't currently support drift detection can't be checked. For a list of
   *          resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
   */
  public detectStackResourceDrift(
    args: DetectStackResourceDriftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectStackResourceDriftCommandOutput>;
  public detectStackResourceDrift(
    args: DetectStackResourceDriftCommandInput,
    cb: (err: any, data?: DetectStackResourceDriftCommandOutput) => void
  ): void;
  public detectStackResourceDrift(
    args: DetectStackResourceDriftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectStackResourceDriftCommandOutput) => void
  ): void;
  public detectStackResourceDrift(
    args: DetectStackResourceDriftCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetectStackResourceDriftCommandOutput) => void),
    cb?: (err: any, data?: DetectStackResourceDriftCommandOutput) => void
  ): Promise<DetectStackResourceDriftCommandOutput> | void {
    const command = new DetectStackResourceDriftCommand(args);
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
   * <p>Detect drift on a stack set. When CloudFormation performs drift detection on a
   *          stack set, it performs drift detection on the stack associated with each stack instance in
   *          the stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation performs drift detection on a stack set</a>.</p>
   *          <p>
   *             <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set
   *          drift detection operation. Use this operation id with <code>
   *                <a>DescribeStackSetOperation</a>
   *             </code> to monitor the progress of the drift
   *          detection operation. The drift detection operation may take some time, depending on the
   *          number of stack instances included in the stack set, in addition to the number of resources
   *          included in each stack.</p>
   *          <p>Once the operation has completed, use the following actions to return drift
   *          information:</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>
   *                      <a>DescribeStackSet</a>
   *                   </code> to return detailed information
   *                about the stack set, including detailed information about the last
   *                   <i>completed</i> drift operation performed on the stack set.
   *                (Information about drift operations that are in progress isn't included.)</p>
   *             </li>
   *             <li>
   *                <p>Use <code>
   *                      <a>ListStackInstances</a>
   *                   </code> to return a list of stack
   *                instances belonging to the stack set, including the drift status and last drift time
   *                checked of each instance.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>
   *                      <a>DescribeStackInstance</a>
   *                   </code> to return detailed
   *                information about a specific stack instance, including its drift status and last
   *                drift time checked.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about performing a drift detection operation on a stack set, see
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting unmanaged
   *             changes in stack sets</a>.</p>
   *          <p>You can only run a single drift detection operation on a given stack set at one
   *          time.</p>
   *          <p>To stop a drift detection stack set operation, use <code>
   *                <a>StopStackSetOperation</a>
   *             </code>.</p>
   */
  public detectStackSetDrift(
    args: DetectStackSetDriftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetectStackSetDriftCommandOutput>;
  public detectStackSetDrift(
    args: DetectStackSetDriftCommandInput,
    cb: (err: any, data?: DetectStackSetDriftCommandOutput) => void
  ): void;
  public detectStackSetDrift(
    args: DetectStackSetDriftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetectStackSetDriftCommandOutput) => void
  ): void;
  public detectStackSetDrift(
    args: DetectStackSetDriftCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetectStackSetDriftCommandOutput) => void),
    cb?: (err: any, data?: DetectStackSetDriftCommandOutput) => void
  ): Promise<DetectStackSetDriftCommandOutput> | void {
    const command = new DetectStackSetDriftCommand(args);
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
   * <p>Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple Monthly Calculator URL with a query string that describes the
   *          resources required to run the template.</p>
   */
  public estimateTemplateCost(
    args: EstimateTemplateCostCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EstimateTemplateCostCommandOutput>;
  public estimateTemplateCost(
    args: EstimateTemplateCostCommandInput,
    cb: (err: any, data?: EstimateTemplateCostCommandOutput) => void
  ): void;
  public estimateTemplateCost(
    args: EstimateTemplateCostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EstimateTemplateCostCommandOutput) => void
  ): void;
  public estimateTemplateCost(
    args: EstimateTemplateCostCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EstimateTemplateCostCommandOutput) => void),
    cb?: (err: any, data?: EstimateTemplateCostCommandOutput) => void
  ): Promise<EstimateTemplateCostCommandOutput> | void {
    const command = new EstimateTemplateCostCommand(args);
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
   * <p>Updates a stack using the input information that was provided when the specified change
   *          set was created. After the call successfully completes, CloudFormation starts updating
   *          the stack. Use the <a>DescribeStacks</a> action to view the status of the
   *          update.</p>
   *          <p>When you execute a change set, CloudFormation deletes all other change sets
   *          associated with the stack because they aren't valid for the updated stack.</p>
   *          <p>If a stack policy is associated with the stack, CloudFormation enforces the policy
   *          during the update. You can't specify a temporary stack policy that overrides the current
   *          policy.</p>
   *          <p>To create a change set for the entire stack hierarchy, <code>IncludeNestedStacks</code>
   *          must have been set to <code>True</code>.</p>
   */
  public executeChangeSet(
    args: ExecuteChangeSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteChangeSetCommandOutput>;
  public executeChangeSet(
    args: ExecuteChangeSetCommandInput,
    cb: (err: any, data?: ExecuteChangeSetCommandOutput) => void
  ): void;
  public executeChangeSet(
    args: ExecuteChangeSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteChangeSetCommandOutput) => void
  ): void;
  public executeChangeSet(
    args: ExecuteChangeSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteChangeSetCommandOutput) => void),
    cb?: (err: any, data?: ExecuteChangeSetCommandOutput) => void
  ): Promise<ExecuteChangeSetCommandOutput> | void {
    const command = new ExecuteChangeSetCommand(args);
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
   * <p>Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null
   *          value is returned.</p>
   */
  public getStackPolicy(
    args: GetStackPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStackPolicyCommandOutput>;
  public getStackPolicy(
    args: GetStackPolicyCommandInput,
    cb: (err: any, data?: GetStackPolicyCommandOutput) => void
  ): void;
  public getStackPolicy(
    args: GetStackPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStackPolicyCommandOutput) => void
  ): void;
  public getStackPolicy(
    args: GetStackPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStackPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetStackPolicyCommandOutput) => void
  ): Promise<GetStackPolicyCommandOutput> | void {
    const command = new GetStackPolicyCommand(args);
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
   * <p>Returns the template body for a specified stack. You can get the template for running or
   *          deleted stacks.</p>
   *          <p>For deleted stacks, <code>GetTemplate</code> returns the template for up to 90 days
   *          after the stack has been deleted.</p>
   *          <note>
   *             <p>If the template doesn't exist, a <code>ValidationError</code> is returned.</p>
   *          </note>
   */
  public getTemplate(args: GetTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetTemplateCommandOutput>;
  public getTemplate(args: GetTemplateCommandInput, cb: (err: any, data?: GetTemplateCommandOutput) => void): void;
  public getTemplate(
    args: GetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;
  public getTemplate(
    args: GetTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetTemplateCommandOutput) => void
  ): Promise<GetTemplateCommandOutput> | void {
    const command = new GetTemplateCommand(args);
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
   * <p>Returns information about a new or existing template. The
   *             <code>GetTemplateSummary</code> action is useful for viewing parameter information, such
   *          as default parameter values and parameter types, before you create or update a stack or
   *          stack set.</p>
   *          <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or
   *          you can get template information for a stack set, or a running or deleted stack.</p>
   *          <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for
   *          up to 90 days after the stack has been deleted. If the template doesn't exist, a
   *             <code>ValidationError</code> is returned.</p>
   */
  public getTemplateSummary(
    args: GetTemplateSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateSummaryCommandOutput>;
  public getTemplateSummary(
    args: GetTemplateSummaryCommandInput,
    cb: (err: any, data?: GetTemplateSummaryCommandOutput) => void
  ): void;
  public getTemplateSummary(
    args: GetTemplateSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateSummaryCommandOutput) => void
  ): void;
  public getTemplateSummary(
    args: GetTemplateSummaryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTemplateSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetTemplateSummaryCommandOutput) => void
  ): Promise<GetTemplateSummaryCommandOutput> | void {
    const command = new GetTemplateSummaryCommand(args);
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
   * <p>Import existing stacks into a new stack sets. Use the stack import operation to import
   *          up to 10 stacks into a new stack set in the same account as the source stack or in a
   *          different administrator account and Region, by specifying the stack ID of the stack you
   *          intend to import.</p>
   *          <note>
   *             <p>
   *                <code>ImportStacksToStackSet</code> is only supported by self-managed
   *             permissions.</p>
   *          </note>
   */
  public importStacksToStackSet(
    args: ImportStacksToStackSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportStacksToStackSetCommandOutput>;
  public importStacksToStackSet(
    args: ImportStacksToStackSetCommandInput,
    cb: (err: any, data?: ImportStacksToStackSetCommandOutput) => void
  ): void;
  public importStacksToStackSet(
    args: ImportStacksToStackSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportStacksToStackSetCommandOutput) => void
  ): void;
  public importStacksToStackSet(
    args: ImportStacksToStackSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportStacksToStackSetCommandOutput) => void),
    cb?: (err: any, data?: ImportStacksToStackSetCommandOutput) => void
  ): Promise<ImportStacksToStackSetCommandOutput> | void {
    const command = new ImportStacksToStackSetCommand(args);
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
   * <p>Returns the ID and status of each active change set for a stack. For example, CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or
   *             <code>CREATE_PENDING</code> state.</p>
   */
  public listChangeSets(
    args: ListChangeSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChangeSetsCommandOutput>;
  public listChangeSets(
    args: ListChangeSetsCommandInput,
    cb: (err: any, data?: ListChangeSetsCommandOutput) => void
  ): void;
  public listChangeSets(
    args: ListChangeSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChangeSetsCommandOutput) => void
  ): void;
  public listChangeSets(
    args: ListChangeSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListChangeSetsCommandOutput) => void),
    cb?: (err: any, data?: ListChangeSetsCommandOutput) => void
  ): Promise<ListChangeSetsCommandOutput> | void {
    const command = new ListChangeSetsCommand(args);
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
   * <p>Lists all exported output values in the account and Region in which you call this
   *          action. Use this action to see the exported output values that you can import into other
   *          stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html">
   *                <code>Fn::ImportValue</code>
   *             </a> function.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html">
   *             CloudFormation export stack output values</a>.</p>
   */
  public listExports(args: ListExportsCommandInput, options?: __HttpHandlerOptions): Promise<ListExportsCommandOutput>;
  public listExports(args: ListExportsCommandInput, cb: (err: any, data?: ListExportsCommandOutput) => void): void;
  public listExports(
    args: ListExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;
  public listExports(
    args: ListExportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExportsCommandOutput) => void),
    cb?: (err: any, data?: ListExportsCommandOutput) => void
  ): Promise<ListExportsCommandOutput> | void {
    const command = new ListExportsCommand(args);
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
   * <p>Lists all stacks that are importing an exported output value. To modify or remove an
   *          exported output value, first use this action to see which stacks are using it. To see the
   *          exported output values in your account, see <a>ListExports</a>.</p>
   *          <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html">
   *                <code>Fn::ImportValue</code>
   *             </a> function.</p>
   */
  public listImports(args: ListImportsCommandInput, options?: __HttpHandlerOptions): Promise<ListImportsCommandOutput>;
  public listImports(args: ListImportsCommandInput, cb: (err: any, data?: ListImportsCommandOutput) => void): void;
  public listImports(
    args: ListImportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;
  public listImports(
    args: ListImportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListImportsCommandOutput) => void),
    cb?: (err: any, data?: ListImportsCommandOutput) => void
  ): Promise<ListImportsCommandOutput> | void {
    const command = new ListImportsCommand(args);
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
   * <p>Returns summary information about stack instances that are associated with the specified
   *          stack set. You can filter for stack instances that are associated with a specific Amazon Web Services account name or Region, or that have a specific status.</p>
   */
  public listStackInstances(
    args: ListStackInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStackInstancesCommandOutput>;
  public listStackInstances(
    args: ListStackInstancesCommandInput,
    cb: (err: any, data?: ListStackInstancesCommandOutput) => void
  ): void;
  public listStackInstances(
    args: ListStackInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackInstancesCommandOutput) => void
  ): void;
  public listStackInstances(
    args: ListStackInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStackInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListStackInstancesCommandOutput) => void
  ): Promise<ListStackInstancesCommandOutput> | void {
    const command = new ListStackInstancesCommand(args);
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
   * <p>Returns descriptions of all resources of the specified stack.</p>
   *          <p>For deleted stacks, ListStackResources returns resource information for up to 90 days
   *          after the stack has been deleted.</p>
   */
  public listStackResources(
    args: ListStackResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStackResourcesCommandOutput>;
  public listStackResources(
    args: ListStackResourcesCommandInput,
    cb: (err: any, data?: ListStackResourcesCommandOutput) => void
  ): void;
  public listStackResources(
    args: ListStackResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackResourcesCommandOutput) => void
  ): void;
  public listStackResources(
    args: ListStackResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStackResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListStackResourcesCommandOutput) => void
  ): Promise<ListStackResourcesCommandOutput> | void {
    const command = new ListStackResourcesCommand(args);
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
   * <p>Returns the summary information for stacks whose status matches the specified
   *          StackStatusFilter. Summary information for stacks that have been deleted is kept for 90
   *          days after the stack is deleted. If no StackStatusFilter is specified, summary information
   *          for all stacks is returned (including existing stacks and stacks that have been
   *          deleted).</p>
   */
  public listStacks(args: ListStacksCommandInput, options?: __HttpHandlerOptions): Promise<ListStacksCommandOutput>;
  public listStacks(args: ListStacksCommandInput, cb: (err: any, data?: ListStacksCommandOutput) => void): void;
  public listStacks(
    args: ListStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStacksCommandOutput) => void
  ): void;
  public listStacks(
    args: ListStacksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStacksCommandOutput) => void),
    cb?: (err: any, data?: ListStacksCommandOutput) => void
  ): Promise<ListStacksCommandOutput> | void {
    const command = new ListStacksCommand(args);
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
   * <p>Returns summary information about the results of a stack set operation.</p>
   */
  public listStackSetOperationResults(
    args: ListStackSetOperationResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStackSetOperationResultsCommandOutput>;
  public listStackSetOperationResults(
    args: ListStackSetOperationResultsCommandInput,
    cb: (err: any, data?: ListStackSetOperationResultsCommandOutput) => void
  ): void;
  public listStackSetOperationResults(
    args: ListStackSetOperationResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackSetOperationResultsCommandOutput) => void
  ): void;
  public listStackSetOperationResults(
    args: ListStackSetOperationResultsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStackSetOperationResultsCommandOutput) => void),
    cb?: (err: any, data?: ListStackSetOperationResultsCommandOutput) => void
  ): Promise<ListStackSetOperationResultsCommandOutput> | void {
    const command = new ListStackSetOperationResultsCommand(args);
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
   * <p>Returns summary information about operations performed on a stack set.</p>
   */
  public listStackSetOperations(
    args: ListStackSetOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStackSetOperationsCommandOutput>;
  public listStackSetOperations(
    args: ListStackSetOperationsCommandInput,
    cb: (err: any, data?: ListStackSetOperationsCommandOutput) => void
  ): void;
  public listStackSetOperations(
    args: ListStackSetOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackSetOperationsCommandOutput) => void
  ): void;
  public listStackSetOperations(
    args: ListStackSetOperationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStackSetOperationsCommandOutput) => void),
    cb?: (err: any, data?: ListStackSetOperationsCommandOutput) => void
  ): Promise<ListStackSetOperationsCommandOutput> | void {
    const command = new ListStackSetOperationsCommand(args);
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
   * <p>Returns summary information about stack sets that are associated with the user.</p>
   *          <ul>
   *             <li>
   *                <p>[Self-managed permissions] If you set the <code>CallAs</code> parameter to
   *                   <code>SELF</code> while signed in to your Amazon Web Services account,
   *                   <code>ListStackSets</code> returns all self-managed stack sets in your Amazon Web Services account.</p>
   *             </li>
   *             <li>
   *                <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to
   *                   <code>SELF</code> while signed in to the organization's management account, <code>ListStackSets</code> returns all stack sets in the
   *                management account.</p>
   *             </li>
   *             <li>
   *                <p>[Service-managed permissions] If you set the <code>CallAs</code> parameter to
   *                   <code>DELEGATED_ADMIN</code> while signed in to your member account,
   *                   <code>ListStackSets</code> returns all stack sets with service-managed permissions
   *                in the management account.</p>
   *             </li>
   *          </ul>
   */
  public listStackSets(
    args: ListStackSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStackSetsCommandOutput>;
  public listStackSets(
    args: ListStackSetsCommandInput,
    cb: (err: any, data?: ListStackSetsCommandOutput) => void
  ): void;
  public listStackSets(
    args: ListStackSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStackSetsCommandOutput) => void
  ): void;
  public listStackSets(
    args: ListStackSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStackSetsCommandOutput) => void),
    cb?: (err: any, data?: ListStackSetsCommandOutput) => void
  ): Promise<ListStackSetsCommandOutput> | void {
    const command = new ListStackSetsCommand(args);
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
   * <p>Returns a list of registration tokens for the specified extension(s).</p>
   */
  public listTypeRegistrations(
    args: ListTypeRegistrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypeRegistrationsCommandOutput>;
  public listTypeRegistrations(
    args: ListTypeRegistrationsCommandInput,
    cb: (err: any, data?: ListTypeRegistrationsCommandOutput) => void
  ): void;
  public listTypeRegistrations(
    args: ListTypeRegistrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypeRegistrationsCommandOutput) => void
  ): void;
  public listTypeRegistrations(
    args: ListTypeRegistrationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTypeRegistrationsCommandOutput) => void),
    cb?: (err: any, data?: ListTypeRegistrationsCommandOutput) => void
  ): Promise<ListTypeRegistrationsCommandOutput> | void {
    const command = new ListTypeRegistrationsCommand(args);
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
   * <p>Returns summary information about extension that have been registered with CloudFormation.</p>
   */
  public listTypes(args: ListTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListTypesCommandOutput>;
  public listTypes(args: ListTypesCommandInput, cb: (err: any, data?: ListTypesCommandOutput) => void): void;
  public listTypes(
    args: ListTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypesCommandOutput) => void
  ): void;
  public listTypes(
    args: ListTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTypesCommandOutput) => void),
    cb?: (err: any, data?: ListTypesCommandOutput) => void
  ): Promise<ListTypesCommandOutput> | void {
    const command = new ListTypesCommand(args);
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
   * <p>Returns summary information about the versions of an extension.</p>
   */
  public listTypeVersions(
    args: ListTypeVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypeVersionsCommandOutput>;
  public listTypeVersions(
    args: ListTypeVersionsCommandInput,
    cb: (err: any, data?: ListTypeVersionsCommandOutput) => void
  ): void;
  public listTypeVersions(
    args: ListTypeVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypeVersionsCommandOutput) => void
  ): void;
  public listTypeVersions(
    args: ListTypeVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTypeVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListTypeVersionsCommandOutput) => void
  ): Promise<ListTypeVersionsCommandOutput> | void {
    const command = new ListTypeVersionsCommand(args);
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
   * <p>Publishes the specified extension to the CloudFormation registry as a public
   *          extension in this region. Public extensions are available for use by all CloudFormation users. For more information about publishing extensions, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html">Publishing extensions to make them available for public use</a> in the
   *                <i>CloudFormation CLI User Guide</i>.</p>
   *          <p>To publish an extension, you must be registered as a publisher with CloudFormation. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_RegisterPublisher.html">RegisterPublisher</a>.</p>
   */
  public publishType(args: PublishTypeCommandInput, options?: __HttpHandlerOptions): Promise<PublishTypeCommandOutput>;
  public publishType(args: PublishTypeCommandInput, cb: (err: any, data?: PublishTypeCommandOutput) => void): void;
  public publishType(
    args: PublishTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishTypeCommandOutput) => void
  ): void;
  public publishType(
    args: PublishTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PublishTypeCommandOutput) => void),
    cb?: (err: any, data?: PublishTypeCommandOutput) => void
  ): Promise<PublishTypeCommandOutput> | void {
    const command = new PublishTypeCommand(args);
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
   * <p>Reports progress of a resource handler to CloudFormation.</p>
   *          <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Don't use this API in your code.</p>
   */
  public recordHandlerProgress(
    args: RecordHandlerProgressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecordHandlerProgressCommandOutput>;
  public recordHandlerProgress(
    args: RecordHandlerProgressCommandInput,
    cb: (err: any, data?: RecordHandlerProgressCommandOutput) => void
  ): void;
  public recordHandlerProgress(
    args: RecordHandlerProgressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecordHandlerProgressCommandOutput) => void
  ): void;
  public recordHandlerProgress(
    args: RecordHandlerProgressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RecordHandlerProgressCommandOutput) => void),
    cb?: (err: any, data?: RecordHandlerProgressCommandOutput) => void
  ): Promise<RecordHandlerProgressCommandOutput> | void {
    const command = new RecordHandlerProgressCommand(args);
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
   * <p>Registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users.
   *          This publisher ID applies to your account in all Amazon Web Services Regions.</p>
   *          <p>For information about requirements for registering as a public extension publisher, see
   *             <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs">Registering your account to publish CloudFormation
   *             extensions</a> in the <i>CloudFormation CLI User
   *          Guide</i>.</p>
   *          <p></p>
   */
  public registerPublisher(
    args: RegisterPublisherCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterPublisherCommandOutput>;
  public registerPublisher(
    args: RegisterPublisherCommandInput,
    cb: (err: any, data?: RegisterPublisherCommandOutput) => void
  ): void;
  public registerPublisher(
    args: RegisterPublisherCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterPublisherCommandOutput) => void
  ): void;
  public registerPublisher(
    args: RegisterPublisherCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterPublisherCommandOutput) => void),
    cb?: (err: any, data?: RegisterPublisherCommandOutput) => void
  ): Promise<RegisterPublisherCommandOutput> | void {
    const command = new RegisterPublisherCommand(args);
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
   * <p>Registers an extension with the CloudFormation service. Registering an
   *          extension makes it available for use in CloudFormation templates in your Amazon Web Services account, and includes:</p>
   *          <ul>
   *             <li>
   *                <p>Validating the extension schema.</p>
   *             </li>
   *             <li>
   *                <p>Determining which handlers, if any, have been specified for the extension.</p>
   *             </li>
   *             <li>
   *                <p>Making the extension available for use in your account.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about how to develop extensions and ready them for registration,
   *          see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html">Creating Resource
   *             Providers</a> in the <i>CloudFormation CLI User
   *          Guide</i>.</p>
   *          <p>You can have a maximum of 50 resource extension versions registered at a time. This
   *          maximum is per account and per region. Use <a href="AWSCloudFormation/latest/APIReference/API_DeregisterType.html">DeregisterType</a> to deregister specific extension versions if necessary.</p>
   *          <p>Once you have initiated a registration request using <code>
   *                <a>RegisterType</a>
   *             </code>, you can use <code>
   *                <a>DescribeTypeRegistration</a>
   *             </code> to
   *          monitor the progress of the registration request.</p>
   *          <p>Once you have registered a private extension in your account and region, use <a href="AWSCloudFormation/latest/APIReference/API_SetTypeConfiguration.html">SetTypeConfiguration</a> to specify configuration properties for the extension. For
   *          more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the <i>CloudFormation User Guide</i>.</p>
   */
  public registerType(
    args: RegisterTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTypeCommandOutput>;
  public registerType(args: RegisterTypeCommandInput, cb: (err: any, data?: RegisterTypeCommandOutput) => void): void;
  public registerType(
    args: RegisterTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTypeCommandOutput) => void
  ): void;
  public registerType(
    args: RegisterTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterTypeCommandOutput) => void),
    cb?: (err: any, data?: RegisterTypeCommandOutput) => void
  ): Promise<RegisterTypeCommandOutput> | void {
    const command = new RegisterTypeCommand(args);
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
   * <p>When specifying <code>RollbackStack</code>, you preserve the state of previously
   *          provisioned resources when an operation fails. You can check the status of the stack
   *          through the <a>DescribeStacks</a> operation.</p>
   *          <p>Rolls back the specified stack to the last known stable state from
   *             <code>CREATE_FAILED</code> or <code>UPDATE_FAILED</code> stack statuses.</p>
   *          <p>This operation will delete a stack if it doesn't contain a last known stable state. A
   *          last known stable state includes any status in a <code>*_COMPLETE</code>. This includes the
   *          following stack statuses.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_COMPLETE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_COMPLETE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_ROLLBACK_COMPLETE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPORT_COMPLETE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IMPORT_ROLLBACK_COMPLETE</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public rollbackStack(
    args: RollbackStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RollbackStackCommandOutput>;
  public rollbackStack(
    args: RollbackStackCommandInput,
    cb: (err: any, data?: RollbackStackCommandOutput) => void
  ): void;
  public rollbackStack(
    args: RollbackStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RollbackStackCommandOutput) => void
  ): void;
  public rollbackStack(
    args: RollbackStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RollbackStackCommandOutput) => void),
    cb?: (err: any, data?: RollbackStackCommandOutput) => void
  ): Promise<RollbackStackCommandOutput> | void {
    const command = new RollbackStackCommand(args);
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
   * <p>Sets a stack policy for a specified stack.</p>
   */
  public setStackPolicy(
    args: SetStackPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetStackPolicyCommandOutput>;
  public setStackPolicy(
    args: SetStackPolicyCommandInput,
    cb: (err: any, data?: SetStackPolicyCommandOutput) => void
  ): void;
  public setStackPolicy(
    args: SetStackPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetStackPolicyCommandOutput) => void
  ): void;
  public setStackPolicy(
    args: SetStackPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetStackPolicyCommandOutput) => void),
    cb?: (err: any, data?: SetStackPolicyCommandOutput) => void
  ): Promise<SetStackPolicyCommandOutput> | void {
    const command = new SetStackPolicyCommand(args);
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
   * <p>Specifies the configuration data for a registered CloudFormation extension, in
   *          the given account and region.</p>
   *          <p>To view the current configuration data for an extension, refer to the
   *             <code>ConfigurationSchema</code> element of <a href="AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a>.
   *          For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry-register.html#registry-set-configuration">Configuring extensions at the account level</a> in the
   *             <i>CloudFormation User Guide</i>.</p>
   *          <important>
   *             <p>It's strongly recommended that you use dynamic references to restrict sensitive
   *             configuration definitions, such as third-party credentials. For more details on dynamic
   *             references, see <a href="https://docs.aws.amazon.com/">Using dynamic references to specify
   *                template values</a> in the <i>CloudFormation User
   *             Guide</i>.</p>
   *          </important>
   */
  public setTypeConfiguration(
    args: SetTypeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTypeConfigurationCommandOutput>;
  public setTypeConfiguration(
    args: SetTypeConfigurationCommandInput,
    cb: (err: any, data?: SetTypeConfigurationCommandOutput) => void
  ): void;
  public setTypeConfiguration(
    args: SetTypeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTypeConfigurationCommandOutput) => void
  ): void;
  public setTypeConfiguration(
    args: SetTypeConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetTypeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: SetTypeConfigurationCommandOutput) => void
  ): Promise<SetTypeConfigurationCommandOutput> | void {
    const command = new SetTypeConfigurationCommand(args);
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
   * <p>Specify the default version of an extension. The default version of an extension will be
   *          used in CloudFormation operations.</p>
   */
  public setTypeDefaultVersion(
    args: SetTypeDefaultVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTypeDefaultVersionCommandOutput>;
  public setTypeDefaultVersion(
    args: SetTypeDefaultVersionCommandInput,
    cb: (err: any, data?: SetTypeDefaultVersionCommandOutput) => void
  ): void;
  public setTypeDefaultVersion(
    args: SetTypeDefaultVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTypeDefaultVersionCommandOutput) => void
  ): void;
  public setTypeDefaultVersion(
    args: SetTypeDefaultVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetTypeDefaultVersionCommandOutput) => void),
    cb?: (err: any, data?: SetTypeDefaultVersionCommandOutput) => void
  ): Promise<SetTypeDefaultVersionCommandOutput> | void {
    const command = new SetTypeDefaultVersionCommand(args);
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
   * <p>Sends a signal to the specified resource with a success or failure status. You can use
   *          the <code>SignalResource</code> operation in conjunction with a creation policy or update
   *          policy. CloudFormation doesn't proceed with a stack creation or update until
   *          resources receive the required number of signals or the timeout period is exceeded. The
   *             <code>SignalResource</code> operation is useful in cases where you want to send signals
   *          from anywhere other than an Amazon EC2 instance.</p>
   */
  public signalResource(
    args: SignalResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SignalResourceCommandOutput>;
  public signalResource(
    args: SignalResourceCommandInput,
    cb: (err: any, data?: SignalResourceCommandOutput) => void
  ): void;
  public signalResource(
    args: SignalResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignalResourceCommandOutput) => void
  ): void;
  public signalResource(
    args: SignalResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SignalResourceCommandOutput) => void),
    cb?: (err: any, data?: SignalResourceCommandOutput) => void
  ): Promise<SignalResourceCommandOutput> | void {
    const command = new SignalResourceCommand(args);
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
   * <p>Stops an in-progress operation on a stack set and its associated stack instances.
   *          StackSets will cancel all the unstarted stack instance deployments and wait for those are
   *          in-progress to complete.</p>
   */
  public stopStackSetOperation(
    args: StopStackSetOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopStackSetOperationCommandOutput>;
  public stopStackSetOperation(
    args: StopStackSetOperationCommandInput,
    cb: (err: any, data?: StopStackSetOperationCommandOutput) => void
  ): void;
  public stopStackSetOperation(
    args: StopStackSetOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopStackSetOperationCommandOutput) => void
  ): void;
  public stopStackSetOperation(
    args: StopStackSetOperationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopStackSetOperationCommandOutput) => void),
    cb?: (err: any, data?: StopStackSetOperationCommandOutput) => void
  ): Promise<StopStackSetOperationCommandOutput> | void {
    const command = new StopStackSetOperationCommand(args);
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
   * <p>Tests a registered extension to make sure it meets all necessary requirements for being
   *          published in the CloudFormation registry.</p>
   *          <ul>
   *             <li>
   *                <p>For resource types, this includes passing all contracts tests defined for the
   *                type.</p>
   *             </li>
   *             <li>
   *                <p>For modules, this includes determining if the module's model meets all necessary
   *                requirements.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-testing">Testing your public extension prior to publishing</a> in the <i>CloudFormation CLI User Guide</i>.</p>
   *          <p>If you don't specify a version, CloudFormation uses the default version of the
   *          extension in your account and region for testing.</p>
   *          <p>To perform testing, CloudFormation assumes the execution role specified when
   *          the type was registered. For more information, see <a href="AWSCloudFormation/latest/APIReference/API_RegisterType.html">RegisterType</a>.</p>
   *          <p>Once you've initiated testing on an extension using <code>TestType</code>, you can pass
   *          the returned <code>TypeVersionArn</code> into <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeType.html">DescribeType</a> to monitor the current test status and test status description for
   *          the extension.</p>
   *          <p>An extension must have a test status of <code>PASSED</code> before it can be published.
   *          For more information, see <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-publish.html">Publishing extensions to make them available for public use</a>
   *          in the <i>CloudFormation CLI User Guide</i>.</p>
   */
  public testType(args: TestTypeCommandInput, options?: __HttpHandlerOptions): Promise<TestTypeCommandOutput>;
  public testType(args: TestTypeCommandInput, cb: (err: any, data?: TestTypeCommandOutput) => void): void;
  public testType(
    args: TestTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestTypeCommandOutput) => void
  ): void;
  public testType(
    args: TestTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestTypeCommandOutput) => void),
    cb?: (err: any, data?: TestTypeCommandOutput) => void
  ): Promise<TestTypeCommandOutput> | void {
    const command = new TestTypeCommand(args);
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
   * <p>Updates a stack as specified in the template. After the call completes successfully, the
   *          stack update starts. You can check the status of the stack through the <a>DescribeStacks</a> action.</p>
   *          <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p>
   *          <p>For more information about creating an update template, updating a stack, and monitoring
   *          the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a
   *             Stack</a>.</p>
   */
  public updateStack(args: UpdateStackCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStackCommandOutput>;
  public updateStack(args: UpdateStackCommandInput, cb: (err: any, data?: UpdateStackCommandOutput) => void): void;
  public updateStack(
    args: UpdateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStackCommandOutput) => void
  ): void;
  public updateStack(
    args: UpdateStackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStackCommandOutput) => void),
    cb?: (err: any, data?: UpdateStackCommandOutput) => void
  ): Promise<UpdateStackCommandOutput> | void {
    const command = new UpdateStackCommand(args);
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
   * <p>Updates the parameter values for stack instances for the specified accounts, within the
   *          specified Amazon Web Services Regions. A stack instance refers to a stack in a specific
   *          account and Region.</p>
   *          <p>You can only update stack instances in Amazon Web Services Regions and accounts where
   *          they already exist; to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>.</p>
   *          <p>During stack set updates, any parameters overridden for a stack instance aren't updated,
   *          but retain their overridden value.</p>
   *          <p>You can only update the parameter <i>values</i> that are specified in the
   *          stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a
   *          template, before you can override the parameter value specified in the stack set you must
   *          first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and
   *          parameter value specified in the stack set. Once a stack instance has been updated with the
   *          new parameter, you can then override the parameter value using
   *             <code>UpdateStackInstances</code>.</p>
   */
  public updateStackInstances(
    args: UpdateStackInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStackInstancesCommandOutput>;
  public updateStackInstances(
    args: UpdateStackInstancesCommandInput,
    cb: (err: any, data?: UpdateStackInstancesCommandOutput) => void
  ): void;
  public updateStackInstances(
    args: UpdateStackInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStackInstancesCommandOutput) => void
  ): void;
  public updateStackInstances(
    args: UpdateStackInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStackInstancesCommandOutput) => void),
    cb?: (err: any, data?: UpdateStackInstancesCommandOutput) => void
  ): Promise<UpdateStackInstancesCommandOutput> | void {
    const command = new UpdateStackInstancesCommand(args);
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
   * <p>Updates the stack set, and associated stack instances in the specified accounts and
   *             Amazon Web Services Regions.</p>
   *          <p>Even if the stack set operation created by updating the stack set fails (completely or
   *          partially, below or above a specified failure tolerance), the stack set is updated with
   *          your changes. Subsequent <a>CreateStackInstances</a> calls on the specified
   *          stack set use the updated stack set.</p>
   */
  public updateStackSet(
    args: UpdateStackSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStackSetCommandOutput>;
  public updateStackSet(
    args: UpdateStackSetCommandInput,
    cb: (err: any, data?: UpdateStackSetCommandOutput) => void
  ): void;
  public updateStackSet(
    args: UpdateStackSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStackSetCommandOutput) => void
  ): void;
  public updateStackSet(
    args: UpdateStackSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStackSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateStackSetCommandOutput) => void
  ): Promise<UpdateStackSetCommandOutput> | void {
    const command = new UpdateStackSetCommand(args);
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
   * <p>Updates termination protection for the specified stack. If a user attempts to delete a
   *          stack with termination protection enabled, the operation fails and the stack remains
   *          unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a
   *             Stack From Being Deleted</a> in the <i>CloudFormation User Guide</i>.</p>
   *          <p>For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested
   *             stacks</a>, termination protection is set on the root stack and can't be changed
   *          directly on the nested stack.</p>
   */
  public updateTerminationProtection(
    args: UpdateTerminationProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTerminationProtectionCommandOutput>;
  public updateTerminationProtection(
    args: UpdateTerminationProtectionCommandInput,
    cb: (err: any, data?: UpdateTerminationProtectionCommandOutput) => void
  ): void;
  public updateTerminationProtection(
    args: UpdateTerminationProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTerminationProtectionCommandOutput) => void
  ): void;
  public updateTerminationProtection(
    args: UpdateTerminationProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTerminationProtectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateTerminationProtectionCommandOutput) => void
  ): Promise<UpdateTerminationProtectionCommandOutput> | void {
    const command = new UpdateTerminationProtectionCommand(args);
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
   * <p>Validates a specified template. CloudFormation first checks if the template is
   *          valid JSON. If it isn't, CloudFormation checks if the template is valid YAML. If
   *          both these checks fail, CloudFormation returns a template validation error.</p>
   */
  public validateTemplate(
    args: ValidateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateTemplateCommandOutput>;
  public validateTemplate(
    args: ValidateTemplateCommandInput,
    cb: (err: any, data?: ValidateTemplateCommandOutput) => void
  ): void;
  public validateTemplate(
    args: ValidateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateTemplateCommandOutput) => void
  ): void;
  public validateTemplate(
    args: ValidateTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateTemplateCommandOutput) => void),
    cb?: (err: any, data?: ValidateTemplateCommandOutput) => void
  ): Promise<ValidateTemplateCommandOutput> | void {
    const command = new ValidateTemplateCommand(args);
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
