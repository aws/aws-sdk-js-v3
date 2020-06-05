import { CloudFormationClient } from "./CloudFormationClient";
import {
  CancelUpdateStackCommand,
  CancelUpdateStackCommandInput,
  CancelUpdateStackCommandOutput
} from "./commands/CancelUpdateStackCommand";
import {
  ContinueUpdateRollbackCommand,
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput
} from "./commands/ContinueUpdateRollbackCommand";
import {
  CreateChangeSetCommand,
  CreateChangeSetCommandInput,
  CreateChangeSetCommandOutput
} from "./commands/CreateChangeSetCommand";
import {
  CreateStackCommand,
  CreateStackCommandInput,
  CreateStackCommandOutput
} from "./commands/CreateStackCommand";
import {
  CreateStackInstancesCommand,
  CreateStackInstancesCommandInput,
  CreateStackInstancesCommandOutput
} from "./commands/CreateStackInstancesCommand";
import {
  CreateStackSetCommand,
  CreateStackSetCommandInput,
  CreateStackSetCommandOutput
} from "./commands/CreateStackSetCommand";
import {
  DeleteChangeSetCommand,
  DeleteChangeSetCommandInput,
  DeleteChangeSetCommandOutput
} from "./commands/DeleteChangeSetCommand";
import {
  DeleteStackCommand,
  DeleteStackCommandInput,
  DeleteStackCommandOutput
} from "./commands/DeleteStackCommand";
import {
  DeleteStackInstancesCommand,
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput
} from "./commands/DeleteStackInstancesCommand";
import {
  DeleteStackSetCommand,
  DeleteStackSetCommandInput,
  DeleteStackSetCommandOutput
} from "./commands/DeleteStackSetCommand";
import {
  DeregisterTypeCommand,
  DeregisterTypeCommandInput,
  DeregisterTypeCommandOutput
} from "./commands/DeregisterTypeCommand";
import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeChangeSetCommand,
  DescribeChangeSetCommandInput,
  DescribeChangeSetCommandOutput
} from "./commands/DescribeChangeSetCommand";
import {
  DescribeStackDriftDetectionStatusCommand,
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput
} from "./commands/DescribeStackDriftDetectionStatusCommand";
import {
  DescribeStackEventsCommand,
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput
} from "./commands/DescribeStackEventsCommand";
import {
  DescribeStackInstanceCommand,
  DescribeStackInstanceCommandInput,
  DescribeStackInstanceCommandOutput
} from "./commands/DescribeStackInstanceCommand";
import {
  DescribeStackResourceCommand,
  DescribeStackResourceCommandInput,
  DescribeStackResourceCommandOutput
} from "./commands/DescribeStackResourceCommand";
import {
  DescribeStackResourceDriftsCommand,
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput
} from "./commands/DescribeStackResourceDriftsCommand";
import {
  DescribeStackResourcesCommand,
  DescribeStackResourcesCommandInput,
  DescribeStackResourcesCommandOutput
} from "./commands/DescribeStackResourcesCommand";
import {
  DescribeStackSetCommand,
  DescribeStackSetCommandInput,
  DescribeStackSetCommandOutput
} from "./commands/DescribeStackSetCommand";
import {
  DescribeStackSetOperationCommand,
  DescribeStackSetOperationCommandInput,
  DescribeStackSetOperationCommandOutput
} from "./commands/DescribeStackSetOperationCommand";
import {
  DescribeStacksCommand,
  DescribeStacksCommandInput,
  DescribeStacksCommandOutput
} from "./commands/DescribeStacksCommand";
import {
  DescribeTypeCommand,
  DescribeTypeCommandInput,
  DescribeTypeCommandOutput
} from "./commands/DescribeTypeCommand";
import {
  DescribeTypeRegistrationCommand,
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput
} from "./commands/DescribeTypeRegistrationCommand";
import {
  DetectStackDriftCommand,
  DetectStackDriftCommandInput,
  DetectStackDriftCommandOutput
} from "./commands/DetectStackDriftCommand";
import {
  DetectStackResourceDriftCommand,
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput
} from "./commands/DetectStackResourceDriftCommand";
import {
  DetectStackSetDriftCommand,
  DetectStackSetDriftCommandInput,
  DetectStackSetDriftCommandOutput
} from "./commands/DetectStackSetDriftCommand";
import {
  EstimateTemplateCostCommand,
  EstimateTemplateCostCommandInput,
  EstimateTemplateCostCommandOutput
} from "./commands/EstimateTemplateCostCommand";
import {
  ExecuteChangeSetCommand,
  ExecuteChangeSetCommandInput,
  ExecuteChangeSetCommandOutput
} from "./commands/ExecuteChangeSetCommand";
import {
  GetStackPolicyCommand,
  GetStackPolicyCommandInput,
  GetStackPolicyCommandOutput
} from "./commands/GetStackPolicyCommand";
import {
  GetTemplateCommand,
  GetTemplateCommandInput,
  GetTemplateCommandOutput
} from "./commands/GetTemplateCommand";
import {
  GetTemplateSummaryCommand,
  GetTemplateSummaryCommandInput,
  GetTemplateSummaryCommandOutput
} from "./commands/GetTemplateSummaryCommand";
import {
  ListChangeSetsCommand,
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput
} from "./commands/ListChangeSetsCommand";
import {
  ListExportsCommand,
  ListExportsCommandInput,
  ListExportsCommandOutput
} from "./commands/ListExportsCommand";
import {
  ListImportsCommand,
  ListImportsCommandInput,
  ListImportsCommandOutput
} from "./commands/ListImportsCommand";
import {
  ListStackInstancesCommand,
  ListStackInstancesCommandInput,
  ListStackInstancesCommandOutput
} from "./commands/ListStackInstancesCommand";
import {
  ListStackResourcesCommand,
  ListStackResourcesCommandInput,
  ListStackResourcesCommandOutput
} from "./commands/ListStackResourcesCommand";
import {
  ListStackSetOperationResultsCommand,
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput
} from "./commands/ListStackSetOperationResultsCommand";
import {
  ListStackSetOperationsCommand,
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput
} from "./commands/ListStackSetOperationsCommand";
import {
  ListStackSetsCommand,
  ListStackSetsCommandInput,
  ListStackSetsCommandOutput
} from "./commands/ListStackSetsCommand";
import {
  ListStacksCommand,
  ListStacksCommandInput,
  ListStacksCommandOutput
} from "./commands/ListStacksCommand";
import {
  ListTypeRegistrationsCommand,
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput
} from "./commands/ListTypeRegistrationsCommand";
import {
  ListTypeVersionsCommand,
  ListTypeVersionsCommandInput,
  ListTypeVersionsCommandOutput
} from "./commands/ListTypeVersionsCommand";
import {
  ListTypesCommand,
  ListTypesCommandInput,
  ListTypesCommandOutput
} from "./commands/ListTypesCommand";
import {
  RecordHandlerProgressCommand,
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput
} from "./commands/RecordHandlerProgressCommand";
import {
  RegisterTypeCommand,
  RegisterTypeCommandInput,
  RegisterTypeCommandOutput
} from "./commands/RegisterTypeCommand";
import {
  SetStackPolicyCommand,
  SetStackPolicyCommandInput,
  SetStackPolicyCommandOutput
} from "./commands/SetStackPolicyCommand";
import {
  SetTypeDefaultVersionCommand,
  SetTypeDefaultVersionCommandInput,
  SetTypeDefaultVersionCommandOutput
} from "./commands/SetTypeDefaultVersionCommand";
import {
  SignalResourceCommand,
  SignalResourceCommandInput,
  SignalResourceCommandOutput
} from "./commands/SignalResourceCommand";
import {
  StopStackSetOperationCommand,
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput
} from "./commands/StopStackSetOperationCommand";
import {
  UpdateStackCommand,
  UpdateStackCommandInput,
  UpdateStackCommandOutput
} from "./commands/UpdateStackCommand";
import {
  UpdateStackInstancesCommand,
  UpdateStackInstancesCommandInput,
  UpdateStackInstancesCommandOutput
} from "./commands/UpdateStackInstancesCommand";
import {
  UpdateStackSetCommand,
  UpdateStackSetCommandInput,
  UpdateStackSetCommandOutput
} from "./commands/UpdateStackSetCommand";
import {
  UpdateTerminationProtectionCommand,
  UpdateTerminationProtectionCommandInput,
  UpdateTerminationProtectionCommandOutput
} from "./commands/UpdateTerminationProtectionCommand";
import {
  ValidateTemplateCommand,
  ValidateTemplateCommandInput,
  ValidateTemplateCommandOutput
} from "./commands/ValidateTemplateCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS CloudFormation</fullname>
 *          <p>AWS CloudFormation allows you to create and manage AWS infrastructure deployments
 *          predictably and repeatedly. You can use AWS CloudFormation to leverage AWS products, such
 *          as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification
 *          Service, Elastic Load Balancing, and Auto Scaling to build highly-reliable, highly
 *          scalable, cost-effective applications without creating or configuring the underlying AWS
 *          infrastructure.</p>
 *          <p>With AWS CloudFormation, you declare all of your resources and dependencies in a
 *          template file. The template defines a collection of resources as a single unit called a
 *          stack. AWS CloudFormation creates and deletes all member resources of the stack together
 *          and manages all dependencies between the resources for you.</p>
 *          <p>For more information about AWS CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">AWS CloudFormation Product Page</a>.</p>
 *          <p>Amazon CloudFormation makes use of other AWS products. If you need additional
 *          technical information about a specific AWS product, you can find the product's technical
 *          documentation at <a href="https://docs.aws.amazon.com/">docs.aws.amazon.com</a>.</p>
 */
export class CloudFormation extends CloudFormationClient {
  /**
   * <p>Cancels an update on the specified stack. If the call completes successfully, the
   *          stack rolls back the update and reverts to the previous stack configuration.</p>
   *          <note>
   *             <p>You can cancel only stacks that are in the UPDATE_IN_PROGRESS state.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CancelUpdateStackCommandOutput) => void),
    cb?: (err: any, data?: CancelUpdateStackCommandOutput) => void
  ): Promise<CancelUpdateStackCommandOutput> | void {
    const command = new CancelUpdateStackCommand(args);
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
   * <p>For a specified stack that is in the <code>UPDATE_ROLLBACK_FAILED</code> state,
   *          continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on
   *          the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can
   *          return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and
   *          then try to update the stack again.</p>
   *          <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when AWS
   *          CloudFormation cannot roll back all changes after a failed stack update. For example, you
   *          might have a stack that is rolling back to an old database instance that was deleted
   *          outside of AWS CloudFormation. Because AWS CloudFormation doesn't know the database was
   *          deleted, it assumes that the database instance still exists and attempts to roll back to
   *          it, causing the update rollback to fail.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ContinueUpdateRollbackCommandOutput) => void),
    cb?: (err: any, data?: ContinueUpdateRollbackCommandOutput) => void
  ): Promise<ContinueUpdateRollbackCommandOutput> | void {
    const command = new ContinueUpdateRollbackCommand(args);
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
   * <p>Creates a list of changes that will be applied to a stack so that you can review the
   *          changes before executing them. You can create a change set for a stack that doesn't exist
   *          or an existing stack. If you create a change set for a stack that doesn't exist, the change
   *          set shows all of the resources that AWS CloudFormation will create. If you create a change
   *          set for an existing stack, AWS CloudFormation compares the stack's information with the
   *          information that you submit in the change set and lists the differences. Use change sets to
   *          understand which resources AWS CloudFormation will create or change, and how it will change
   *          resources in an existing stack, before you create or update a stack.</p>
   *          <p>To create a change set for a stack that doesn't exist, for the
   *             <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change
   *          set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code>
   *          parameter. To create a change set for an import operation, specify <code>IMPORT</code> for
   *          the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call
   *          successfully completes, AWS CloudFormation starts creating the change set. To check the
   *          status of the change set or to review it, use the <a>DescribeChangeSet</a>
   *          action.</p>
   *          <p>When you are satisfied with the changes the change set will make, execute the change
   *          set by using the <a>ExecuteChangeSet</a> action. AWS CloudFormation doesn't make
   *          changes until you execute the change set.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateChangeSetCommandOutput) => void),
    cb?: (err: any, data?: CreateChangeSetCommandOutput) => void
  ): Promise<CreateChangeSetCommandOutput> | void {
    const command = new CreateChangeSetCommand(args);
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
   * <p>Creates a stack as specified in the template. After the call completes successfully,
   *          the stack creation starts. You can check the status of the stack via the <a>DescribeStacks</a> API.</p>
   */
  public createStack(
    args: CreateStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStackCommandOutput>;
  public createStack(
    args: CreateStackCommandInput,
    cb: (err: any, data?: CreateStackCommandOutput) => void
  ): void;
  public createStack(
    args: CreateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStackCommandOutput) => void
  ): void;
  public createStack(
    args: CreateStackCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateStackCommandOutput) => void),
    cb?: (err: any, data?: CreateStackCommandOutput) => void
  ): Promise<CreateStackCommandOutput> | void {
    const command = new CreateStackCommand(args);
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
   * <p>Creates stack instances for the specified accounts, within the specified regions. A
   *          stack instance refers to a stack in a specific account and region. <code>Accounts</code>
   *          and <code>Regions</code> are required parameters—you must specify at least one account and
   *          one region. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateStackInstancesCommandOutput) => void),
    cb?: (err: any, data?: CreateStackInstancesCommandOutput) => void
  ): Promise<CreateStackInstancesCommandOutput> | void {
    const command = new CreateStackInstancesCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateStackSetCommandOutput) => void),
    cb?: (err: any, data?: CreateStackSetCommandOutput) => void
  ): Promise<CreateStackSetCommandOutput> | void {
    const command = new CreateStackSetCommand(args);
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
   * <p>Deletes the specified change set. Deleting change sets ensures that no one executes
   *          the wrong change set.</p>
   *          <p>If the call successfully completes, AWS CloudFormation successfully deleted the
   *          change set.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteChangeSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteChangeSetCommandOutput) => void
  ): Promise<DeleteChangeSetCommandOutput> | void {
    const command = new DeleteChangeSetCommand(args);
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
   * <p>Deletes a specified stack. Once the call completes successfully, stack deletion
   *          starts. Deleted stacks do not show up in the <a>DescribeStacks</a> API if the
   *          deletion has been completed successfully.</p>
   */
  public deleteStack(
    args: DeleteStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStackCommandOutput>;
  public deleteStack(
    args: DeleteStackCommandInput,
    cb: (err: any, data?: DeleteStackCommandOutput) => void
  ): void;
  public deleteStack(
    args: DeleteStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStackCommandOutput) => void
  ): void;
  public deleteStack(
    args: DeleteStackCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteStackCommandOutput) => void),
    cb?: (err: any, data?: DeleteStackCommandOutput) => void
  ): Promise<DeleteStackCommandOutput> | void {
    const command = new DeleteStackCommand(args);
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
   * <p>Deletes stack instances for the specified accounts, in the specified regions. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteStackInstancesCommandOutput) => void),
    cb?: (err: any, data?: DeleteStackInstancesCommandOutput) => void
  ): Promise<DeleteStackInstancesCommandOutput> | void {
    const command = new DeleteStackInstancesCommand(args);
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
   * <p>Deletes a stack set. Before you can delete a stack set, all of its member stack
   *          instances must be deleted. For more information about how to do this, see <a>DeleteStackInstances</a>. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteStackSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteStackSetCommandOutput) => void
  ): Promise<DeleteStackSetCommandOutput> | void {
    const command = new DeleteStackSetCommand(args);
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
   * <p>Removes a type or type version from active use in the CloudFormation registry. If a type or type version is deregistered, it cannot be used in CloudFormation operations.</p>
   *          <p>To deregister a type, you must individually deregister all registered versions of that type. If a type has only a single registered version, deregistering that version results in the type itself being deregistered. </p>
   *          <p>You cannot deregister the default version of a type, unless it is the only registered version of that type, in which case the type itself is deregistered as well. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeregisterTypeCommandOutput) => void),
    cb?: (err: any, data?: DeregisterTypeCommandOutput) => void
  ): Promise<DeregisterTypeCommandOutput> | void {
    const command = new DeregisterTypeCommand(args);
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
   * <p>Retrieves your account's AWS CloudFormation limits, such as the maximum number of
   *          stacks that you can create in your account. For more information about account limits, see
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">AWS CloudFormation
   *             Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAccountLimitsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): Promise<DescribeAccountLimitsCommandOutput> | void {
    const command = new DescribeAccountLimitsCommand(args);
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
   * <p>Returns the inputs for the change set and a list of changes that AWS CloudFormation
   *          will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the AWS CloudFormation User
   *          Guide.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeChangeSetCommandOutput) => void),
    cb?: (err: any, data?: DescribeChangeSetCommandOutput) => void
  ): Promise<DescribeChangeSetCommandOutput> | void {
    const command = new DescribeChangeSetCommand(args);
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
   * <p>Returns information about a stack drift detection operation. A stack drift detection
   *          operation detects whether a stack's actual configuration differs, or has
   *             <i>drifted</i>, from it's expected configuration, as defined in the stack
   *          template and any values specified as template parameters. A stack is considered to have
   *          drifted if one or more of its resources have drifted. For more information on stack and
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
    cb: (
      err: any,
      data?: DescribeStackDriftDetectionStatusCommandOutput
    ) => void
  ): void;
  public describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DescribeStackDriftDetectionStatusCommandOutput
    ) => void
  ): void;
  public describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeStackDriftDetectionStatusCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DescribeStackDriftDetectionStatusCommandOutput
    ) => void
  ): Promise<DescribeStackDriftDetectionStatusCommandOutput> | void {
    const command = new DescribeStackDriftDetectionStatusCommand(args);
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
   * <p>Returns all stack related events for a specified stack in reverse chronological
   *          order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the AWS CloudFormation User Guide.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeStackEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackEventsCommandOutput) => void
  ): Promise<DescribeStackEventsCommandOutput> | void {
    const command = new DescribeStackEventsCommand(args);
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
   * <p>Returns the stack instance that's associated with the specified stack set, AWS
   *          account, and region.</p>
   *          <p>For a list of stack instances that are associated with a specific stack set, use
   *             <a>ListStackInstances</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeStackInstanceCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackInstanceCommandOutput) => void
  ): Promise<DescribeStackInstanceCommandOutput> | void {
    const command = new DescribeStackInstanceCommand(args);
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
   * <p>Returns a description of the specified resource in the specified stack.</p>
   *          <p>For deleted stacks, DescribeStackResource returns resource information for up to 90
   *          days after the stack has been deleted.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeStackResourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackResourceCommandOutput) => void
  ): Promise<DescribeStackResourceCommandOutput> | void {
    const command = new DescribeStackResourceCommand(args);
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
   * <p>Returns drift information for the resources that have been checked for drift in the
   *          specified stack. This includes actual and expected configuration values for resources where
   *          AWS CloudFormation detects configuration drift.</p>
   *          <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack
   *          resource that has been checked for drift. Resources that have not yet been checked for
   *          drift are not included. Resources that do not currently support drift detection are not
   *          checked, and so not included. For a list of resources that support drift detection, see
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
   *          <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual
   *          resources, or <a>DetectStackDrift</a> to detect drift on all supported resources
   *          for a given stack.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeStackResourceDriftsCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackResourceDriftsCommandOutput) => void
  ): Promise<DescribeStackResourceDriftsCommandOutput> | void {
    const command = new DescribeStackResourceDriftsCommand(args);
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
   * <p>Returns AWS resource descriptions for running and deleted stacks. If
   *             <code>StackName</code> is specified, all the associated resources that are part of the
   *          stack are returned. If <code>PhysicalResourceId</code> is specified, the associated
   *          resources of the stack that the resource belongs to are returned.</p>
   *          <note>
   *             <p>Only the first 100 resources will be returned. If your stack has more resources
   *             than this, you should use <code>ListStackResources</code> instead.</p>
   *          </note>
   *          <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information
   *          for up to 90 days after the stack has been deleted.</p>
   *          <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>,
   *          but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the
   *          returned result. For more information about resources, the <code>LogicalResourceId</code>
   *          and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">AWS CloudFormation User
   *          Guide</a>.</p>
   *          <note>
   *             <p>A <code>ValidationError</code> is returned if you specify both
   *                <code>StackName</code> and <code>PhysicalResourceId</code> in the same
   *             request.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeStackResourcesCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackResourcesCommandOutput) => void
  ): Promise<DescribeStackResourcesCommandOutput> | void {
    const command = new DescribeStackResourcesCommand(args);
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
   * <p>Returns the description for the specified stack; if no stack name was specified, then
   *          it returns the description for all the stacks created.</p>
   *          <note>
   *             <p>If the stack does not exist, an <code>AmazonCloudFormationException</code> is
   *             returned.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeStacksCommandOutput) => void),
    cb?: (err: any, data?: DescribeStacksCommandOutput) => void
  ): Promise<DescribeStacksCommandOutput> | void {
    const command = new DescribeStacksCommand(args);
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
   * <p>Returns the description of the specified stack set. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeStackSetCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackSetCommandOutput) => void
  ): Promise<DescribeStackSetCommandOutput> | void {
    const command = new DescribeStackSetCommand(args);
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
   * <p>Returns the description of the specified stack set operation. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeStackSetOperationCommandOutput) => void),
    cb?: (err: any, data?: DescribeStackSetOperationCommandOutput) => void
  ): Promise<DescribeStackSetOperationCommandOutput> | void {
    const command = new DescribeStackSetOperationCommand(args);
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
   * <p>Returns detailed information about a type that has been registered.</p>
   *          <p>If you specify a <code>VersionId</code>, <code>DescribeType</code> returns information about that specific type version. Otherwise, it returns information about the default type version.</p>
   */
  public describeType(
    args: DescribeTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTypeCommandOutput>;
  public describeType(
    args: DescribeTypeCommandInput,
    cb: (err: any, data?: DescribeTypeCommandOutput) => void
  ): void;
  public describeType(
    args: DescribeTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTypeCommandOutput) => void
  ): void;
  public describeType(
    args: DescribeTypeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTypeCommandOutput) => void),
    cb?: (err: any, data?: DescribeTypeCommandOutput) => void
  ): Promise<DescribeTypeCommandOutput> | void {
    const command = new DescribeTypeCommand(args);
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
   * <p>Returns information about a type's registration, including its current status and type and version identifiers.</p>
   *          <p>When you initiate a registration request using <code>
   *                <a>RegisterType</a>
   *             </code>, you can then use <code>
   *                <a>DescribeTypeRegistration</a>
   *             </code> to monitor the progress of that registration request.</p>
   *          <p>Once the registration request has completed, use <code>
   *                <a>DescribeType</a>
   *             </code> to return detailed informaiton about a type.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTypeRegistrationCommandOutput) => void),
    cb?: (err: any, data?: DescribeTypeRegistrationCommandOutput) => void
  ): Promise<DescribeTypeRegistrationCommandOutput> | void {
    const command = new DescribeTypeRegistrationCommand(args);
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
   * <p>Detects whether a stack's actual configuration differs, or has
   *             <i>drifted</i>, from it's expected configuration, as defined in the stack
   *          template and any values specified as template parameters. For each resource in the stack
   *          that supports drift detection, AWS CloudFormation compares the actual configuration of the resource with
   *          its expected template configuration. Only resource properties explicitly defined in the
   *          stack template are checked for drift. A stack is considered to have drifted if one or more
   *          of its resources differ from their expected template configurations. For more information,
   *          see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
   *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   *          <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a
   *          given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual
   *          resources.</p>
   *          <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
   *          <p>
   *             <code>DetectStackDrift</code> can take up to several minutes, depending on the number
   *          of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack
   *          drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and
   *          its resources.</p>
   *          <p>When detecting drift on a stack, AWS CloudFormation does not detect drift on any nested stacks
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DetectStackDriftCommandOutput) => void),
    cb?: (err: any, data?: DetectStackDriftCommandOutput) => void
  ): Promise<DetectStackDriftCommandOutput> | void {
    const command = new DetectStackDriftCommand(args);
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
   * <p>Returns information about whether a resource's actual configuration differs, or has
   *             <i>drifted</i>, from it's expected configuration, as defined in the stack
   *          template and any values specified as template parameters. This information includes actual
   *          and expected property values for resources in which AWS CloudFormation detects drift. Only resource
   *          properties explicitly defined in the stack template are checked for drift. For more
   *          information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting
   *             Unregulated Configuration Changes to Stacks and Resources</a>.</p>
   *          <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or
   *             <a>DetectStackDrift</a> to detect drift on all resources in a given stack
   *          that support drift detection.</p>
   *          <p>Resources that do not currently support drift detection cannot be checked. For a list
   *          of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DetectStackResourceDriftCommandOutput) => void),
    cb?: (err: any, data?: DetectStackResourceDriftCommandOutput) => void
  ): Promise<DetectStackResourceDriftCommandOutput> | void {
    const command = new DetectStackResourceDriftCommand(args);
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
   * <p>Detect drift on a stack set. When CloudFormation performs drift detection on a stack
   *          set, it performs drift detection on the stack associated with each stack instance in the
   *          stack set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">How CloudFormation
   *             Performs Drift Detection on a Stack Set</a>.</p>
   *          <p>
   *             <code>DetectStackSetDrift</code> returns the <code>OperationId</code> of the stack set
   *          drift detection operation. Use this operation id with <code>
   *                <a>DescribeStackSetOperation</a>
   *             </code> to monitor the progress of the drift
   *          detection operation. The drift detection operation may take some time, depending on the
   *          number of stack instances included in the stack set, as well as the number of resources
   *          included in each stack.</p>
   *          <p>Once the operation has completed, use the following actions to return drift
   *          information:</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>
   *                      <a>DescribeStackSet</a>
   *                   </code> to return detailed informaiton
   *                about the stack set, including detailed information about the last
   *                   <i>completed</i> drift operation performed on the stack set.
   *                (Information about drift operations that are in progress is not included.)</p>
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
   *          <p>For more information on performing a drift detection operation on a stack set, see
   *             <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-drift.html">Detecting Unmanaged
   *             Changes in Stack Sets</a>. </p>
   *          <p>You can only run a single drift detection operation on a given stack set at one time. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DetectStackSetDriftCommandOutput) => void),
    cb?: (err: any, data?: DetectStackSetDriftCommandOutput) => void
  ): Promise<DetectStackSetDriftCommandOutput> | void {
    const command = new DetectStackSetDriftCommand(args);
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
   * <p>Returns the estimated monthly cost of a template. The return value is an AWS Simple
   *          Monthly Calculator URL with a query string that describes the resources required to run the
   *          template.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: EstimateTemplateCostCommandOutput) => void),
    cb?: (err: any, data?: EstimateTemplateCostCommandOutput) => void
  ): Promise<EstimateTemplateCostCommandOutput> | void {
    const command = new EstimateTemplateCostCommand(args);
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
   * <p>Updates a stack using the input information that was provided when the specified
   *          change set was created. After the call successfully completes, AWS CloudFormation starts
   *          updating the stack. Use the <a>DescribeStacks</a> action to view the status of
   *          the update.</p>
   *          <p>When you execute a change set, AWS CloudFormation deletes all other change sets
   *          associated with the stack because they aren't valid for the updated stack.</p>
   *          <p>If a stack policy is associated with the stack, AWS CloudFormation enforces the
   *          policy during the update. You can't specify a temporary stack policy that overrides the
   *          current policy.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ExecuteChangeSetCommandOutput) => void),
    cb?: (err: any, data?: ExecuteChangeSetCommandOutput) => void
  ): Promise<ExecuteChangeSetCommandOutput> | void {
    const command = new ExecuteChangeSetCommand(args);
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
   * <p>Returns the stack policy for a specified stack. If a stack doesn't have a policy, a
   *          null value is returned.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetStackPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetStackPolicyCommandOutput) => void
  ): Promise<GetStackPolicyCommandOutput> | void {
    const command = new GetStackPolicyCommand(args);
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
   * <p>Returns the template body for a specified stack. You can get the template for running
   *          or deleted stacks.</p>
   *          <p>For deleted stacks, GetTemplate returns the template for up to 90 days after the
   *          stack has been deleted.</p>
   *          <note>
   *             <p> If the template does not exist, a <code>ValidationError</code> is returned.
   *          </p>
   *          </note>
   */
  public getTemplate(
    args: GetTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateCommandOutput>;
  public getTemplate(
    args: GetTemplateCommandInput,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;
  public getTemplate(
    args: GetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;
  public getTemplate(
    args: GetTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetTemplateCommandOutput) => void
  ): Promise<GetTemplateCommandOutput> | void {
    const command = new GetTemplateCommand(args);
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
   * <p>Returns information about a new or existing template. The
   *             <code>GetTemplateSummary</code> action is useful for viewing parameter information, such
   *          as default parameter values and parameter types, before you create or update a stack or
   *          stack set.</p>
   *          <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or
   *          you can get template information for a stack set, or a running or deleted stack.</p>
   *          <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information
   *          for up to 90 days after the stack has been deleted. If the template does not exist, a
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetTemplateSummaryCommandOutput) => void),
    cb?: (err: any, data?: GetTemplateSummaryCommandOutput) => void
  ): Promise<GetTemplateSummaryCommandOutput> | void {
    const command = new GetTemplateSummaryCommand(args);
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
   * <p>Returns the ID and status of each active change set for a stack. For example, AWS
   *          CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListChangeSetsCommandOutput) => void),
    cb?: (err: any, data?: ListChangeSetsCommandOutput) => void
  ): Promise<ListChangeSetsCommandOutput> | void {
    const command = new ListChangeSetsCommand(args);
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
   * <p>Lists all exported output values in the account and region in which you call this
   *          action. Use this action to see the exported output values that you can import into other
   *          stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html">
   *                <code>Fn::ImportValue</code>
   *             </a> function. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> AWS
   *             CloudFormation Export Stack Output Values</a>.</p>
   */
  public listExports(
    args: ListExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExportsCommandOutput>;
  public listExports(
    args: ListExportsCommandInput,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;
  public listExports(
    args: ListExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExportsCommandOutput) => void
  ): void;
  public listExports(
    args: ListExportsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListExportsCommandOutput) => void),
    cb?: (err: any, data?: ListExportsCommandOutput) => void
  ): Promise<ListExportsCommandOutput> | void {
    const command = new ListExportsCommand(args);
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
   * <p>Lists all stacks that are importing an exported output value. To modify or remove an
   *          exported output value, first use this action to see which stacks are using it. To see the
   *          exported output values in your account, see <a>ListExports</a>. </p>
   *          <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html">
   *                <code>Fn::ImportValue</code>
   *             </a> function. </p>
   */
  public listImports(
    args: ListImportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportsCommandOutput>;
  public listImports(
    args: ListImportsCommandInput,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;
  public listImports(
    args: ListImportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportsCommandOutput) => void
  ): void;
  public listImports(
    args: ListImportsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListImportsCommandOutput) => void),
    cb?: (err: any, data?: ListImportsCommandOutput) => void
  ): Promise<ListImportsCommandOutput> | void {
    const command = new ListImportsCommand(args);
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
   * <p>Returns summary information about stack instances that are associated with the
   *          specified stack set. You can filter for stack instances that are associated with a specific
   *          AWS account name or region.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListStackInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListStackInstancesCommandOutput) => void
  ): Promise<ListStackInstancesCommandOutput> | void {
    const command = new ListStackInstancesCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListStackResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListStackResourcesCommandOutput) => void
  ): Promise<ListStackResourcesCommandOutput> | void {
    const command = new ListStackResourcesCommand(args);
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
   * <p>Returns the summary information for stacks whose status matches the specified
   *          StackStatusFilter. Summary information for stacks that have been deleted is kept for 90
   *          days after the stack is deleted. If no StackStatusFilter is specified, summary information
   *          for all stacks is returned (including existing stacks and stacks that have been
   *          deleted).</p>
   */
  public listStacks(
    args: ListStacksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStacksCommandOutput>;
  public listStacks(
    args: ListStacksCommandInput,
    cb: (err: any, data?: ListStacksCommandOutput) => void
  ): void;
  public listStacks(
    args: ListStacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStacksCommandOutput) => void
  ): void;
  public listStacks(
    args: ListStacksCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListStacksCommandOutput) => void),
    cb?: (err: any, data?: ListStacksCommandOutput) => void
  ): Promise<ListStacksCommandOutput> | void {
    const command = new ListStacksCommand(args);
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
   * <p>Returns summary information about the results of a stack set operation. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListStackSetOperationResultsCommandOutput) => void),
    cb?: (err: any, data?: ListStackSetOperationResultsCommandOutput) => void
  ): Promise<ListStackSetOperationResultsCommandOutput> | void {
    const command = new ListStackSetOperationResultsCommand(args);
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
   * <p>Returns summary information about operations performed on a stack set. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListStackSetOperationsCommandOutput) => void),
    cb?: (err: any, data?: ListStackSetOperationsCommandOutput) => void
  ): Promise<ListStackSetOperationsCommandOutput> | void {
    const command = new ListStackSetOperationsCommand(args);
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
   * <p>Returns summary information about stack sets that are associated with the
   *          user.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListStackSetsCommandOutput) => void),
    cb?: (err: any, data?: ListStackSetsCommandOutput) => void
  ): Promise<ListStackSetsCommandOutput> | void {
    const command = new ListStackSetsCommand(args);
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
   * <p>Returns a list of registration tokens for the specified type.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTypeRegistrationsCommandOutput) => void),
    cb?: (err: any, data?: ListTypeRegistrationsCommandOutput) => void
  ): Promise<ListTypeRegistrationsCommandOutput> | void {
    const command = new ListTypeRegistrationsCommand(args);
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
   * <p>Returns summary information about types that have been registered with CloudFormation.</p>
   */
  public listTypes(
    args: ListTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypesCommandOutput>;
  public listTypes(
    args: ListTypesCommandInput,
    cb: (err: any, data?: ListTypesCommandOutput) => void
  ): void;
  public listTypes(
    args: ListTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypesCommandOutput) => void
  ): void;
  public listTypes(
    args: ListTypesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTypesCommandOutput) => void),
    cb?: (err: any, data?: ListTypesCommandOutput) => void
  ): Promise<ListTypesCommandOutput> | void {
    const command = new ListTypesCommand(args);
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
   * <p>Returns summary information about the versions of a type.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTypeVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListTypeVersionsCommandOutput) => void
  ): Promise<ListTypeVersionsCommandOutput> | void {
    const command = new ListTypeVersionsCommand(args);
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
   * <p>Reports progress of a resource handler to CloudFormation.</p>
   *          <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Do not use this API in your code.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RecordHandlerProgressCommandOutput) => void),
    cb?: (err: any, data?: RecordHandlerProgressCommandOutput) => void
  ): Promise<RecordHandlerProgressCommandOutput> | void {
    const command = new RecordHandlerProgressCommand(args);
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
   * <p>Registers a type with the CloudFormation service. Registering a type makes it available for use in CloudFormation templates in your AWS account, and includes:</p>
   *          <ul>
   *             <li>
   *                <p>Validating the resource schema</p>
   *             </li>
   *             <li>
   *                <p>Determining which handlers have been specified for the resource</p>
   *             </li>
   *             <li>
   *                <p>Making the resource type available for use in your account</p>
   *             </li>
   *          </ul>
   *          <p>For more information on how to develop types and ready them for registeration, see <a href="cloudformation-cli/latest/userguide/resource-types.html">Creating Resource Providers</a> in the <i>CloudFormation CLI User Guide</i>.</p>
   *          <p>Once you have initiated a registration request using <code>
   *                <a>RegisterType</a>
   *             </code>, you can use <code>
   *                <a>DescribeTypeRegistration</a>
   *             </code> to monitor the progress of the registration request.</p>
   */
  public registerType(
    args: RegisterTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTypeCommandOutput>;
  public registerType(
    args: RegisterTypeCommandInput,
    cb: (err: any, data?: RegisterTypeCommandOutput) => void
  ): void;
  public registerType(
    args: RegisterTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTypeCommandOutput) => void
  ): void;
  public registerType(
    args: RegisterTypeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RegisterTypeCommandOutput) => void),
    cb?: (err: any, data?: RegisterTypeCommandOutput) => void
  ): Promise<RegisterTypeCommandOutput> | void {
    const command = new RegisterTypeCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: SetStackPolicyCommandOutput) => void),
    cb?: (err: any, data?: SetStackPolicyCommandOutput) => void
  ): Promise<SetStackPolicyCommandOutput> | void {
    const command = new SetStackPolicyCommand(args);
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
   * <p>Specify the default version of a type. The default version of a type will be used in CloudFormation operations.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: SetTypeDefaultVersionCommandOutput) => void),
    cb?: (err: any, data?: SetTypeDefaultVersionCommandOutput) => void
  ): Promise<SetTypeDefaultVersionCommandOutput> | void {
    const command = new SetTypeDefaultVersionCommand(args);
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
   * <p>Sends a signal to the specified resource with a success or failure status. You can
   *          use the SignalResource API in conjunction with a creation policy or update policy. AWS
   *          CloudFormation doesn't proceed with a stack creation or update until resources receive the
   *          required number of signals or the timeout period is exceeded. The SignalResource API is
   *          useful in cases where you want to send signals from anywhere other than an Amazon EC2
   *          instance.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: SignalResourceCommandOutput) => void),
    cb?: (err: any, data?: SignalResourceCommandOutput) => void
  ): Promise<SignalResourceCommandOutput> | void {
    const command = new SignalResourceCommand(args);
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
   * <p>Stops an in-progress operation on a stack set and its associated stack instances. </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopStackSetOperationCommandOutput) => void),
    cb?: (err: any, data?: StopStackSetOperationCommandOutput) => void
  ): Promise<StopStackSetOperationCommandOutput> | void {
    const command = new StopStackSetOperationCommand(args);
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
   * <p>Updates a stack as specified in the template. After the call completes successfully,
   *          the stack update starts. You can check the status of the stack via the <a>DescribeStacks</a> action.</p>
   *          <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p>
   *          <p>For more information about creating an update template, updating a stack, and
   *          monitoring the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a
   *             Stack</a>.</p>
   */
  public updateStack(
    args: UpdateStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStackCommandOutput>;
  public updateStack(
    args: UpdateStackCommandInput,
    cb: (err: any, data?: UpdateStackCommandOutput) => void
  ): void;
  public updateStack(
    args: UpdateStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStackCommandOutput) => void
  ): void;
  public updateStack(
    args: UpdateStackCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateStackCommandOutput) => void),
    cb?: (err: any, data?: UpdateStackCommandOutput) => void
  ): Promise<UpdateStackCommandOutput> | void {
    const command = new UpdateStackCommand(args);
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
   * <p>Updates the parameter values for stack instances for the specified accounts, within
   *          the specified regions. A stack instance refers to a stack in a specific account and region. </p>
   *          <p>You can only update stack instances in regions and accounts where they already exist;
   *          to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>. </p>
   *          <p>During stack set updates, any parameters overridden for a stack instance are not
   *          updated, but retain their overridden value.</p>
   *          <p>You can only update the parameter <i>values</i> that are specified in
   *          the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateStackInstancesCommandOutput) => void),
    cb?: (err: any, data?: UpdateStackInstancesCommandOutput) => void
  ): Promise<UpdateStackInstancesCommandOutput> | void {
    const command = new UpdateStackInstancesCommand(args);
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
   * <p>Updates the stack set, and associated stack instances in the specified accounts and
   *          regions.</p>
   *          <p>Even if the stack set operation created by updating the stack set fails (completely
   *          or partially, below or above a specified failure tolerance), the stack set is updated with
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateStackSetCommandOutput) => void),
    cb?: (err: any, data?: UpdateStackSetCommandOutput) => void
  ): Promise<UpdateStackSetCommandOutput> | void {
    const command = new UpdateStackSetCommand(args);
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
   * <p>Updates termination protection for the specified stack. If a user attempts to delete
   *          a stack with termination protection enabled, the operation fails and the stack remains
   *          unchanged. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a
   *             Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   *          <p> For <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested
   *             stacks</a>, termination protection is set on the root stack and cannot be changed
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateTerminationProtectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateTerminationProtectionCommandOutput) => void
  ): Promise<UpdateTerminationProtectionCommandOutput> | void {
    const command = new UpdateTerminationProtectionCommand(args);
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
   * <p>Validates a specified template. AWS CloudFormation first checks if the template is
   *          valid JSON. If it isn't, AWS CloudFormation checks if the template is valid YAML. If both
   *          these checks fail, AWS CloudFormation returns a template validation error.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ValidateTemplateCommandOutput) => void),
    cb?: (err: any, data?: ValidateTemplateCommandOutput) => void
  ): Promise<ValidateTemplateCommandOutput> | void {
    const command = new ValidateTemplateCommand(args);
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
