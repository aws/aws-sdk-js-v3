import { CloudFormationClient } from "./CloudFormationClient";
import { AlreadyExistsException } from "./types/AlreadyExistsException";
import { CancelUpdateStackInput } from "./types/CancelUpdateStackInput";
import { CancelUpdateStackOutput } from "./types/CancelUpdateStackOutput";
import { ChangeSetNotFoundException } from "./types/ChangeSetNotFoundException";
import { ContinueUpdateRollbackInput } from "./types/ContinueUpdateRollbackInput";
import { ContinueUpdateRollbackOutput } from "./types/ContinueUpdateRollbackOutput";
import { CreateChangeSetInput } from "./types/CreateChangeSetInput";
import { CreateChangeSetOutput } from "./types/CreateChangeSetOutput";
import { CreateStackInput } from "./types/CreateStackInput";
import { CreateStackInstancesInput } from "./types/CreateStackInstancesInput";
import { CreateStackInstancesOutput } from "./types/CreateStackInstancesOutput";
import { CreateStackOutput } from "./types/CreateStackOutput";
import { CreateStackSetInput } from "./types/CreateStackSetInput";
import { CreateStackSetOutput } from "./types/CreateStackSetOutput";
import { CreatedButModifiedException } from "./types/CreatedButModifiedException";
import { DeleteChangeSetInput } from "./types/DeleteChangeSetInput";
import { DeleteChangeSetOutput } from "./types/DeleteChangeSetOutput";
import { DeleteStackInput } from "./types/DeleteStackInput";
import { DeleteStackInstancesInput } from "./types/DeleteStackInstancesInput";
import { DeleteStackInstancesOutput } from "./types/DeleteStackInstancesOutput";
import { DeleteStackOutput } from "./types/DeleteStackOutput";
import { DeleteStackSetInput } from "./types/DeleteStackSetInput";
import { DeleteStackSetOutput } from "./types/DeleteStackSetOutput";
import { DescribeAccountLimitsInput } from "./types/DescribeAccountLimitsInput";
import { DescribeAccountLimitsOutput } from "./types/DescribeAccountLimitsOutput";
import { DescribeChangeSetInput } from "./types/DescribeChangeSetInput";
import { DescribeChangeSetOutput } from "./types/DescribeChangeSetOutput";
import { DescribeStackDriftDetectionStatusInput } from "./types/DescribeStackDriftDetectionStatusInput";
import { DescribeStackDriftDetectionStatusOutput } from "./types/DescribeStackDriftDetectionStatusOutput";
import { DescribeStackEventsInput } from "./types/DescribeStackEventsInput";
import { DescribeStackEventsOutput } from "./types/DescribeStackEventsOutput";
import { DescribeStackInstanceInput } from "./types/DescribeStackInstanceInput";
import { DescribeStackInstanceOutput } from "./types/DescribeStackInstanceOutput";
import { DescribeStackResourceDriftsInput } from "./types/DescribeStackResourceDriftsInput";
import { DescribeStackResourceDriftsOutput } from "./types/DescribeStackResourceDriftsOutput";
import { DescribeStackResourceInput } from "./types/DescribeStackResourceInput";
import { DescribeStackResourceOutput } from "./types/DescribeStackResourceOutput";
import { DescribeStackResourcesInput } from "./types/DescribeStackResourcesInput";
import { DescribeStackResourcesOutput } from "./types/DescribeStackResourcesOutput";
import { DescribeStackSetInput } from "./types/DescribeStackSetInput";
import { DescribeStackSetOperationInput } from "./types/DescribeStackSetOperationInput";
import { DescribeStackSetOperationOutput } from "./types/DescribeStackSetOperationOutput";
import { DescribeStackSetOutput } from "./types/DescribeStackSetOutput";
import { DescribeStacksInput } from "./types/DescribeStacksInput";
import { DescribeStacksOutput } from "./types/DescribeStacksOutput";
import { DetectStackDriftInput } from "./types/DetectStackDriftInput";
import { DetectStackDriftOutput } from "./types/DetectStackDriftOutput";
import { DetectStackResourceDriftInput } from "./types/DetectStackResourceDriftInput";
import { DetectStackResourceDriftOutput } from "./types/DetectStackResourceDriftOutput";
import { EstimateTemplateCostInput } from "./types/EstimateTemplateCostInput";
import { EstimateTemplateCostOutput } from "./types/EstimateTemplateCostOutput";
import { ExecuteChangeSetInput } from "./types/ExecuteChangeSetInput";
import { ExecuteChangeSetOutput } from "./types/ExecuteChangeSetOutput";
import { GetStackPolicyInput } from "./types/GetStackPolicyInput";
import { GetStackPolicyOutput } from "./types/GetStackPolicyOutput";
import { GetTemplateInput } from "./types/GetTemplateInput";
import { GetTemplateOutput } from "./types/GetTemplateOutput";
import { GetTemplateSummaryInput } from "./types/GetTemplateSummaryInput";
import { GetTemplateSummaryOutput } from "./types/GetTemplateSummaryOutput";
import { InsufficientCapabilitiesException } from "./types/InsufficientCapabilitiesException";
import { InvalidChangeSetStatusException } from "./types/InvalidChangeSetStatusException";
import { InvalidOperationException } from "./types/InvalidOperationException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListChangeSetsInput } from "./types/ListChangeSetsInput";
import { ListChangeSetsOutput } from "./types/ListChangeSetsOutput";
import { ListExportsInput } from "./types/ListExportsInput";
import { ListExportsOutput } from "./types/ListExportsOutput";
import { ListImportsInput } from "./types/ListImportsInput";
import { ListImportsOutput } from "./types/ListImportsOutput";
import { ListStackInstancesInput } from "./types/ListStackInstancesInput";
import { ListStackInstancesOutput } from "./types/ListStackInstancesOutput";
import { ListStackResourcesInput } from "./types/ListStackResourcesInput";
import { ListStackResourcesOutput } from "./types/ListStackResourcesOutput";
import { ListStackSetOperationResultsInput } from "./types/ListStackSetOperationResultsInput";
import { ListStackSetOperationResultsOutput } from "./types/ListStackSetOperationResultsOutput";
import { ListStackSetOperationsInput } from "./types/ListStackSetOperationsInput";
import { ListStackSetOperationsOutput } from "./types/ListStackSetOperationsOutput";
import { ListStackSetsInput } from "./types/ListStackSetsInput";
import { ListStackSetsOutput } from "./types/ListStackSetsOutput";
import { ListStacksInput } from "./types/ListStacksInput";
import { ListStacksOutput } from "./types/ListStacksOutput";
import { NameAlreadyExistsException } from "./types/NameAlreadyExistsException";
import { OperationIdAlreadyExistsException } from "./types/OperationIdAlreadyExistsException";
import { OperationInProgressException } from "./types/OperationInProgressException";
import { OperationNotFoundException } from "./types/OperationNotFoundException";
import { SetStackPolicyInput } from "./types/SetStackPolicyInput";
import { SetStackPolicyOutput } from "./types/SetStackPolicyOutput";
import { SignalResourceInput } from "./types/SignalResourceInput";
import { SignalResourceOutput } from "./types/SignalResourceOutput";
import { StackInstanceNotFoundException } from "./types/StackInstanceNotFoundException";
import { StackSetNotEmptyException } from "./types/StackSetNotEmptyException";
import { StackSetNotFoundException } from "./types/StackSetNotFoundException";
import { StaleRequestException } from "./types/StaleRequestException";
import { StopStackSetOperationInput } from "./types/StopStackSetOperationInput";
import { StopStackSetOperationOutput } from "./types/StopStackSetOperationOutput";
import { TokenAlreadyExistsException } from "./types/TokenAlreadyExistsException";
import { UpdateStackInput } from "./types/UpdateStackInput";
import { UpdateStackInstancesInput } from "./types/UpdateStackInstancesInput";
import { UpdateStackInstancesOutput } from "./types/UpdateStackInstancesOutput";
import { UpdateStackOutput } from "./types/UpdateStackOutput";
import { UpdateStackSetInput } from "./types/UpdateStackSetInput";
import { UpdateStackSetOutput } from "./types/UpdateStackSetOutput";
import { UpdateTerminationProtectionInput } from "./types/UpdateTerminationProtectionInput";
import { UpdateTerminationProtectionOutput } from "./types/UpdateTerminationProtectionOutput";
import { ValidateTemplateInput } from "./types/ValidateTemplateInput";
import { ValidateTemplateOutput } from "./types/ValidateTemplateOutput";
import { CancelUpdateStackCommand } from "./commands/CancelUpdateStackCommand";
import { ContinueUpdateRollbackCommand } from "./commands/ContinueUpdateRollbackCommand";
import { CreateChangeSetCommand } from "./commands/CreateChangeSetCommand";
import { CreateStackCommand } from "./commands/CreateStackCommand";
import { CreateStackInstancesCommand } from "./commands/CreateStackInstancesCommand";
import { CreateStackSetCommand } from "./commands/CreateStackSetCommand";
import { DeleteChangeSetCommand } from "./commands/DeleteChangeSetCommand";
import { DeleteStackCommand } from "./commands/DeleteStackCommand";
import { DeleteStackInstancesCommand } from "./commands/DeleteStackInstancesCommand";
import { DeleteStackSetCommand } from "./commands/DeleteStackSetCommand";
import { DescribeAccountLimitsCommand } from "./commands/DescribeAccountLimitsCommand";
import { DescribeChangeSetCommand } from "./commands/DescribeChangeSetCommand";
import { DescribeStackDriftDetectionStatusCommand } from "./commands/DescribeStackDriftDetectionStatusCommand";
import { DescribeStackEventsCommand } from "./commands/DescribeStackEventsCommand";
import { DescribeStackInstanceCommand } from "./commands/DescribeStackInstanceCommand";
import { DescribeStackResourceCommand } from "./commands/DescribeStackResourceCommand";
import { DescribeStackResourceDriftsCommand } from "./commands/DescribeStackResourceDriftsCommand";
import { DescribeStackResourcesCommand } from "./commands/DescribeStackResourcesCommand";
import { DescribeStackSetCommand } from "./commands/DescribeStackSetCommand";
import { DescribeStackSetOperationCommand } from "./commands/DescribeStackSetOperationCommand";
import { DescribeStacksCommand } from "./commands/DescribeStacksCommand";
import { DetectStackDriftCommand } from "./commands/DetectStackDriftCommand";
import { DetectStackResourceDriftCommand } from "./commands/DetectStackResourceDriftCommand";
import { EstimateTemplateCostCommand } from "./commands/EstimateTemplateCostCommand";
import { ExecuteChangeSetCommand } from "./commands/ExecuteChangeSetCommand";
import { GetStackPolicyCommand } from "./commands/GetStackPolicyCommand";
import { GetTemplateCommand } from "./commands/GetTemplateCommand";
import { GetTemplateSummaryCommand } from "./commands/GetTemplateSummaryCommand";
import { ListChangeSetsCommand } from "./commands/ListChangeSetsCommand";
import { ListExportsCommand } from "./commands/ListExportsCommand";
import { ListImportsCommand } from "./commands/ListImportsCommand";
import { ListStackInstancesCommand } from "./commands/ListStackInstancesCommand";
import { ListStackResourcesCommand } from "./commands/ListStackResourcesCommand";
import { ListStackSetOperationResultsCommand } from "./commands/ListStackSetOperationResultsCommand";
import { ListStackSetOperationsCommand } from "./commands/ListStackSetOperationsCommand";
import { ListStackSetsCommand } from "./commands/ListStackSetsCommand";
import { ListStacksCommand } from "./commands/ListStacksCommand";
import { SetStackPolicyCommand } from "./commands/SetStackPolicyCommand";
import { SignalResourceCommand } from "./commands/SignalResourceCommand";
import { StopStackSetOperationCommand } from "./commands/StopStackSetOperationCommand";
import { UpdateStackCommand } from "./commands/UpdateStackCommand";
import { UpdateStackInstancesCommand } from "./commands/UpdateStackInstancesCommand";
import { UpdateStackSetCommand } from "./commands/UpdateStackSetCommand";
import { UpdateTerminationProtectionCommand } from "./commands/UpdateTerminationProtectionCommand";
import { ValidateTemplateCommand } from "./commands/ValidateTemplateCommand";

export class CloudFormation extends CloudFormationClient {
  /**
   * <p>Cancels an update on the specified stack. If the call completes successfully, the stack rolls back the update and reverts to the previous stack configuration.</p> <note> <p>You can cancel only stacks that are in the UPDATE_IN_PROGRESS state.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {TokenAlreadyExistsException} <p>A client request token already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public cancelUpdateStack(
    args: CancelUpdateStackInput
  ): Promise<CancelUpdateStackOutput>;
  public cancelUpdateStack(
    args: CancelUpdateStackInput,
    cb: (err: any, data?: CancelUpdateStackOutput) => void
  ): void;
  public cancelUpdateStack(
    args: CancelUpdateStackInput,
    cb?: (err: any, data?: CancelUpdateStackOutput) => void
  ): Promise<CancelUpdateStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CancelUpdateStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>For a specified stack that is in the <code>UPDATE_ROLLBACK_FAILED</code> state, continues rolling it back to the <code>UPDATE_ROLLBACK_COMPLETE</code> state. Depending on the cause of the failure, you can manually <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-update-rollback-failed"> fix the error</a> and continue the rollback. By continuing the rollback, you can return your stack to a working state (the <code>UPDATE_ROLLBACK_COMPLETE</code> state), and then try to update the stack again.</p> <p>A stack goes into the <code>UPDATE_ROLLBACK_FAILED</code> state when AWS CloudFormation cannot roll back all changes after a failed stack update. For example, you might have a stack that is rolling back to an old database instance that was deleted outside of AWS CloudFormation. Because AWS CloudFormation doesn't know the database was deleted, it assumes that the database instance still exists and attempts to roll back to it, causing the update rollback to fail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TokenAlreadyExistsException} <p>A client request token already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public continueUpdateRollback(
    args: ContinueUpdateRollbackInput
  ): Promise<ContinueUpdateRollbackOutput>;
  public continueUpdateRollback(
    args: ContinueUpdateRollbackInput,
    cb: (err: any, data?: ContinueUpdateRollbackOutput) => void
  ): void;
  public continueUpdateRollback(
    args: ContinueUpdateRollbackInput,
    cb?: (err: any, data?: ContinueUpdateRollbackOutput) => void
  ): Promise<ContinueUpdateRollbackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ContinueUpdateRollbackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a list of changes that will be applied to a stack so that you can review the changes before executing them. You can create a change set for a stack that doesn't exist or an existing stack. If you create a change set for a stack that doesn't exist, the change set shows all of the resources that AWS CloudFormation will create. If you create a change set for an existing stack, AWS CloudFormation compares the stack's information with the information that you submit in the change set and lists the differences. Use change sets to understand which resources AWS CloudFormation will create or change, and how it will change resources in an existing stack, before you create or update a stack.</p> <p>To create a change set for a stack that doesn't exist, for the <code>ChangeSetType</code> parameter, specify <code>CREATE</code>. To create a change set for an existing stack, specify <code>UPDATE</code> for the <code>ChangeSetType</code> parameter. After the <code>CreateChangeSet</code> call successfully completes, AWS CloudFormation starts creating the change set. To check the status of the change set or to review it, use the <a>DescribeChangeSet</a> action.</p> <p>When you are satisfied with the changes the change set will make, execute the change set by using the <a>ExecuteChangeSet</a> action. AWS CloudFormation doesn't make changes until you execute the change set.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AlreadyExistsException} <p>The resource with the name requested already exists.</p>
   *   - {InsufficientCapabilitiesException} <p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>
   *   - {LimitExceededException} <p>The quota for the resource has already been reached.</p> <p>For information on resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createChangeSet(
    args: CreateChangeSetInput
  ): Promise<CreateChangeSetOutput>;
  public createChangeSet(
    args: CreateChangeSetInput,
    cb: (err: any, data?: CreateChangeSetOutput) => void
  ): void;
  public createChangeSet(
    args: CreateChangeSetInput,
    cb?: (err: any, data?: CreateChangeSetOutput) => void
  ): Promise<CreateChangeSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateChangeSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack via the <a>DescribeStacks</a> API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {LimitExceededException} <p>The quota for the resource has already been reached.</p> <p>For information on resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   *   - {AlreadyExistsException} <p>The resource with the name requested already exists.</p>
   *   - {TokenAlreadyExistsException} <p>A client request token already exists.</p>
   *   - {InsufficientCapabilitiesException} <p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStack(args: CreateStackInput): Promise<CreateStackOutput>;
  public createStack(
    args: CreateStackInput,
    cb: (err: any, data?: CreateStackOutput) => void
  ): void;
  public createStack(
    args: CreateStackInput,
    cb?: (err: any, data?: CreateStackOutput) => void
  ): Promise<CreateStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates stack instances for the specified accounts, within the specified regions. A stack instance refers to a stack in a specific account and region. <code>Accounts</code> and <code>Regions</code> are required parameters—you must specify at least one account and one region. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {OperationInProgressException} <p>Another operation is currently in progress for this stack set. Only one operation can be performed for a stack set at a given time.</p>
   *   - {OperationIdAlreadyExistsException} <p>The specified operation ID already exists.</p>
   *   - {StaleRequestException} <p>Another operation has been performed on this stack set since the specified operation was performed. </p>
   *   - {InvalidOperationException} <p>The specified operation isn't valid.</p>
   *   - {LimitExceededException} <p>The quota for the resource has already been reached.</p> <p>For information on resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStackInstances(
    args: CreateStackInstancesInput
  ): Promise<CreateStackInstancesOutput>;
  public createStackInstances(
    args: CreateStackInstancesInput,
    cb: (err: any, data?: CreateStackInstancesOutput) => void
  ): void;
  public createStackInstances(
    args: CreateStackInstancesInput,
    cb?: (err: any, data?: CreateStackInstancesOutput) => void
  ): Promise<CreateStackInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStackInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a stack set.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NameAlreadyExistsException} <p>The specified name is already in use.</p>
   *   - {CreatedButModifiedException} <p>The specified resource exists, but has been changed.</p>
   *   - {LimitExceededException} <p>The quota for the resource has already been reached.</p> <p>For information on resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStackSet(
    args: CreateStackSetInput
  ): Promise<CreateStackSetOutput>;
  public createStackSet(
    args: CreateStackSetInput,
    cb: (err: any, data?: CreateStackSetOutput) => void
  ): void;
  public createStackSet(
    args: CreateStackSetInput,
    cb?: (err: any, data?: CreateStackSetOutput) => void
  ): Promise<CreateStackSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStackSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified change set. Deleting change sets ensures that no one executes the wrong change set.</p> <p>If the call successfully completes, AWS CloudFormation successfully deleted the change set.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidChangeSetStatusException} <p>The specified change set can't be used to update the stack. For example, the change set status might be <code>CREATE_IN_PROGRESS</code>, or the stack status might be <code>UPDATE_IN_PROGRESS</code>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteChangeSet(
    args: DeleteChangeSetInput
  ): Promise<DeleteChangeSetOutput>;
  public deleteChangeSet(
    args: DeleteChangeSetInput,
    cb: (err: any, data?: DeleteChangeSetOutput) => void
  ): void;
  public deleteChangeSet(
    args: DeleteChangeSetInput,
    cb?: (err: any, data?: DeleteChangeSetOutput) => void
  ): Promise<DeleteChangeSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteChangeSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specified stack. Once the call completes successfully, stack deletion starts. Deleted stacks do not show up in the <a>DescribeStacks</a> API if the deletion has been completed successfully.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TokenAlreadyExistsException} <p>A client request token already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteStack(args: DeleteStackInput): Promise<DeleteStackOutput>;
  public deleteStack(
    args: DeleteStackInput,
    cb: (err: any, data?: DeleteStackOutput) => void
  ): void;
  public deleteStack(
    args: DeleteStackInput,
    cb?: (err: any, data?: DeleteStackOutput) => void
  ): Promise<DeleteStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes stack instances for the specified accounts, in the specified regions. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {OperationInProgressException} <p>Another operation is currently in progress for this stack set. Only one operation can be performed for a stack set at a given time.</p>
   *   - {OperationIdAlreadyExistsException} <p>The specified operation ID already exists.</p>
   *   - {StaleRequestException} <p>Another operation has been performed on this stack set since the specified operation was performed. </p>
   *   - {InvalidOperationException} <p>The specified operation isn't valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteStackInstances(
    args: DeleteStackInstancesInput
  ): Promise<DeleteStackInstancesOutput>;
  public deleteStackInstances(
    args: DeleteStackInstancesInput,
    cb: (err: any, data?: DeleteStackInstancesOutput) => void
  ): void;
  public deleteStackInstances(
    args: DeleteStackInstancesInput,
    cb?: (err: any, data?: DeleteStackInstancesOutput) => void
  ): Promise<DeleteStackInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteStackInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a stack set. Before you can delete a stack set, all of its member stack instances must be deleted. For more information about how to do this, see <a>DeleteStackInstances</a>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotEmptyException} <p>You can't yet delete this stack set, because it still contains one or more stack instances. Delete all stack instances from the stack set before deleting the stack set.</p>
   *   - {OperationInProgressException} <p>Another operation is currently in progress for this stack set. Only one operation can be performed for a stack set at a given time.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteStackSet(
    args: DeleteStackSetInput
  ): Promise<DeleteStackSetOutput>;
  public deleteStackSet(
    args: DeleteStackSetInput,
    cb: (err: any, data?: DeleteStackSetOutput) => void
  ): void;
  public deleteStackSet(
    args: DeleteStackSetInput,
    cb?: (err: any, data?: DeleteStackSetOutput) => void
  ): Promise<DeleteStackSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteStackSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves your account's AWS CloudFormation limits, such as the maximum number of stacks that you can create in your account. For more information about account limits, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">AWS CloudFormation Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAccountLimits(
    args: DescribeAccountLimitsInput
  ): Promise<DescribeAccountLimitsOutput>;
  public describeAccountLimits(
    args: DescribeAccountLimitsInput,
    cb: (err: any, data?: DescribeAccountLimitsOutput) => void
  ): void;
  public describeAccountLimits(
    args: DescribeAccountLimitsInput,
    cb?: (err: any, data?: DescribeAccountLimitsOutput) => void
  ): Promise<DescribeAccountLimitsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAccountLimitsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the inputs for the change set and a list of changes that AWS CloudFormation will make if you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Updating Stacks Using Change Sets</a> in the AWS CloudFormation User Guide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ChangeSetNotFoundException} <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the <code>ListChangeSets</code> action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeChangeSet(
    args: DescribeChangeSetInput
  ): Promise<DescribeChangeSetOutput>;
  public describeChangeSet(
    args: DescribeChangeSetInput,
    cb: (err: any, data?: DescribeChangeSetOutput) => void
  ): void;
  public describeChangeSet(
    args: DescribeChangeSetInput,
    cb?: (err: any, data?: DescribeChangeSetOutput) => void
  ): Promise<DescribeChangeSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeChangeSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a stack drift detection operation. A stack drift detection operation detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. A stack is considered to have drifted if one or more of its resources have drifted. For more information on stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <a>DetectStackDrift</a> to initiate a stack drift detection operation. <code>DetectStackDrift</code> returns a <code>StackDriftDetectionId</code> you can use to monitor the progress of the operation using <code>DescribeStackDriftDetectionStatus</code>. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusInput
  ): Promise<DescribeStackDriftDetectionStatusOutput>;
  public describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusInput,
    cb: (err: any, data?: DescribeStackDriftDetectionStatusOutput) => void
  ): void;
  public describeStackDriftDetectionStatus(
    args: DescribeStackDriftDetectionStatusInput,
    cb?: (err: any, data?: DescribeStackDriftDetectionStatusOutput) => void
  ): Promise<DescribeStackDriftDetectionStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStackDriftDetectionStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all stack related events for a specified stack in reverse chronological order. For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the AWS CloudFormation User Guide.</p> <note> <p>You can list events for stacks that have failed to create or have been deleted by specifying the unique stack identifier (stack ID).</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStackEvents(
    args: DescribeStackEventsInput
  ): Promise<DescribeStackEventsOutput>;
  public describeStackEvents(
    args: DescribeStackEventsInput,
    cb: (err: any, data?: DescribeStackEventsOutput) => void
  ): void;
  public describeStackEvents(
    args: DescribeStackEventsInput,
    cb?: (err: any, data?: DescribeStackEventsOutput) => void
  ): Promise<DescribeStackEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStackEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the stack instance that's associated with the specified stack set, AWS account, and region.</p> <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {StackInstanceNotFoundException} <p>The specified stack instance doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStackInstance(
    args: DescribeStackInstanceInput
  ): Promise<DescribeStackInstanceOutput>;
  public describeStackInstance(
    args: DescribeStackInstanceInput,
    cb: (err: any, data?: DescribeStackInstanceOutput) => void
  ): void;
  public describeStackInstance(
    args: DescribeStackInstanceInput,
    cb?: (err: any, data?: DescribeStackInstanceOutput) => void
  ): Promise<DescribeStackInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStackInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a description of the specified resource in the specified stack.</p> <p>For deleted stacks, DescribeStackResource returns resource information for up to 90 days after the stack has been deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStackResource(
    args: DescribeStackResourceInput
  ): Promise<DescribeStackResourceOutput>;
  public describeStackResource(
    args: DescribeStackResourceInput,
    cb: (err: any, data?: DescribeStackResourceOutput) => void
  ): void;
  public describeStackResource(
    args: DescribeStackResourceInput,
    cb?: (err: any, data?: DescribeStackResourceOutput) => void
  ): Promise<DescribeStackResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStackResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns drift information for the resources that have been checked for drift in the specified stack. This includes actual and expected configuration values for resources where AWS CloudFormation detects configuration drift.</p> <p>For a given stack, there will be one <code>StackResourceDrift</code> for each stack resource that has been checked for drift. Resources that have not yet been checked for drift are not included. Resources that do not currently support drift detection are not checked, and so not included. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p>Use <a>DetectStackResourceDrift</a> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all supported resources for a given stack.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStackResourceDrifts(
    args: DescribeStackResourceDriftsInput
  ): Promise<DescribeStackResourceDriftsOutput>;
  public describeStackResourceDrifts(
    args: DescribeStackResourceDriftsInput,
    cb: (err: any, data?: DescribeStackResourceDriftsOutput) => void
  ): void;
  public describeStackResourceDrifts(
    args: DescribeStackResourceDriftsInput,
    cb?: (err: any, data?: DescribeStackResourceDriftsOutput) => void
  ): Promise<DescribeStackResourceDriftsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStackResourceDriftsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns AWS resource descriptions for running and deleted stacks. If <code>StackName</code> is specified, all the associated resources that are part of the stack are returned. If <code>PhysicalResourceId</code> is specified, the associated resources of the stack that the resource belongs to are returned.</p> <note> <p>Only the first 100 resources will be returned. If your stack has more resources than this, you should use <code>ListStackResources</code> instead.</p> </note> <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for up to 90 days after the stack has been deleted.</p> <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but not both. In addition, you can specify <code>LogicalResourceId</code> to filter the returned result. For more information about resources, the <code>LogicalResourceId</code> and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">AWS CloudFormation User Guide</a>.</p> <note> <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code> and <code>PhysicalResourceId</code> in the same request.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStackResources(
    args: DescribeStackResourcesInput
  ): Promise<DescribeStackResourcesOutput>;
  public describeStackResources(
    args: DescribeStackResourcesInput,
    cb: (err: any, data?: DescribeStackResourcesOutput) => void
  ): void;
  public describeStackResources(
    args: DescribeStackResourcesInput,
    cb?: (err: any, data?: DescribeStackResourcesOutput) => void
  ): Promise<DescribeStackResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStackResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the description of the specified stack set. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStackSet(
    args: DescribeStackSetInput
  ): Promise<DescribeStackSetOutput>;
  public describeStackSet(
    args: DescribeStackSetInput,
    cb: (err: any, data?: DescribeStackSetOutput) => void
  ): void;
  public describeStackSet(
    args: DescribeStackSetInput,
    cb?: (err: any, data?: DescribeStackSetOutput) => void
  ): Promise<DescribeStackSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStackSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the description of the specified stack set operation. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {OperationNotFoundException} <p>The specified ID refers to an operation that doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStackSetOperation(
    args: DescribeStackSetOperationInput
  ): Promise<DescribeStackSetOperationOutput>;
  public describeStackSetOperation(
    args: DescribeStackSetOperationInput,
    cb: (err: any, data?: DescribeStackSetOperationOutput) => void
  ): void;
  public describeStackSetOperation(
    args: DescribeStackSetOperationInput,
    cb?: (err: any, data?: DescribeStackSetOperationOutput) => void
  ): Promise<DescribeStackSetOperationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStackSetOperationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the description for the specified stack; if no stack name was specified, then it returns the description for all the stacks created.</p> <note> <p>If the stack does not exist, an <code>AmazonCloudFormationException</code> is returned.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeStacks(
    args: DescribeStacksInput
  ): Promise<DescribeStacksOutput>;
  public describeStacks(
    args: DescribeStacksInput,
    cb: (err: any, data?: DescribeStacksOutput) => void
  ): void;
  public describeStacks(
    args: DescribeStacksInput,
    cb?: (err: any, data?: DescribeStacksOutput) => void
  ): Promise<DescribeStacksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeStacksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detects whether a stack's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. For each resource in the stack that supports drift detection, AWS CloudFormation compares the actual configuration of the resource with its expected template configuration. Only resource properties explicitly defined in the stack template are checked for drift. A stack is considered to have drifted if one or more of its resources differ from their expected template configurations. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackDrift</code> to detect drift on all supported resources for a given stack, or <a>DetectStackResourceDrift</a> to detect drift on individual resources.</p> <p>For a list of stack resources that currently support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p> <p> <code>DetectStackDrift</code> can take up to several minutes, depending on the number of resources contained within the stack. Use <a>DescribeStackDriftDetectionStatus</a> to monitor the progress of a detect stack drift operation. Once the drift detection operation has completed, use <a>DescribeStackResourceDrifts</a> to return drift information about the stack and its resources.</p> <p>When detecting drift on a stack, AWS CloudFormation does not detect drift on any nested stacks belonging to that stack. Perform <code>DetectStackDrift</code> directly on the nested stack itself.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detectStackDrift(
    args: DetectStackDriftInput
  ): Promise<DetectStackDriftOutput>;
  public detectStackDrift(
    args: DetectStackDriftInput,
    cb: (err: any, data?: DetectStackDriftOutput) => void
  ): void;
  public detectStackDrift(
    args: DetectStackDriftInput,
    cb?: (err: any, data?: DetectStackDriftOutput) => void
  ): Promise<DetectStackDriftOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetectStackDriftCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about whether a resource's actual configuration differs, or has <i>drifted</i>, from it's expected configuration, as defined in the stack template and any values specified as template parameters. This information includes actual and expected property values for resources in which AWS CloudFormation detects drift. Only resource properties explicitly defined in the stack template are checked for drift. For more information about stack and resource drift, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html">Detecting Unregulated Configuration Changes to Stacks and Resources</a>.</p> <p>Use <code>DetectStackResourceDrift</code> to detect drift on individual resources, or <a>DetectStackDrift</a> to detect drift on all resources in a given stack that support drift detection.</p> <p>Resources that do not currently support drift detection cannot be checked. For a list of resources that support drift detection, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift-resource-list.html">Resources that Support Drift Detection</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detectStackResourceDrift(
    args: DetectStackResourceDriftInput
  ): Promise<DetectStackResourceDriftOutput>;
  public detectStackResourceDrift(
    args: DetectStackResourceDriftInput,
    cb: (err: any, data?: DetectStackResourceDriftOutput) => void
  ): void;
  public detectStackResourceDrift(
    args: DetectStackResourceDriftInput,
    cb?: (err: any, data?: DetectStackResourceDriftOutput) => void
  ): Promise<DetectStackResourceDriftOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetectStackResourceDriftCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the estimated monthly cost of a template. The return value is an AWS Simple Monthly Calculator URL with a query string that describes the resources required to run the template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public estimateTemplateCost(
    args: EstimateTemplateCostInput
  ): Promise<EstimateTemplateCostOutput>;
  public estimateTemplateCost(
    args: EstimateTemplateCostInput,
    cb: (err: any, data?: EstimateTemplateCostOutput) => void
  ): void;
  public estimateTemplateCost(
    args: EstimateTemplateCostInput,
    cb?: (err: any, data?: EstimateTemplateCostOutput) => void
  ): Promise<EstimateTemplateCostOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EstimateTemplateCostCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a stack using the input information that was provided when the specified change set was created. After the call successfully completes, AWS CloudFormation starts updating the stack. Use the <a>DescribeStacks</a> action to view the status of the update.</p> <p>When you execute a change set, AWS CloudFormation deletes all other change sets associated with the stack because they aren't valid for the updated stack.</p> <p>If a stack policy is associated with the stack, AWS CloudFormation enforces the policy during the update. You can't specify a temporary stack policy that overrides the current policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidChangeSetStatusException} <p>The specified change set can't be used to update the stack. For example, the change set status might be <code>CREATE_IN_PROGRESS</code>, or the stack status might be <code>UPDATE_IN_PROGRESS</code>.</p>
   *   - {ChangeSetNotFoundException} <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the <code>ListChangeSets</code> action.</p>
   *   - {InsufficientCapabilitiesException} <p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>
   *   - {TokenAlreadyExistsException} <p>A client request token already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public executeChangeSet(
    args: ExecuteChangeSetInput
  ): Promise<ExecuteChangeSetOutput>;
  public executeChangeSet(
    args: ExecuteChangeSetInput,
    cb: (err: any, data?: ExecuteChangeSetOutput) => void
  ): void;
  public executeChangeSet(
    args: ExecuteChangeSetInput,
    cb?: (err: any, data?: ExecuteChangeSetOutput) => void
  ): Promise<ExecuteChangeSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExecuteChangeSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the stack policy for a specified stack. If a stack doesn't have a policy, a null value is returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getStackPolicy(
    args: GetStackPolicyInput
  ): Promise<GetStackPolicyOutput>;
  public getStackPolicy(
    args: GetStackPolicyInput,
    cb: (err: any, data?: GetStackPolicyOutput) => void
  ): void;
  public getStackPolicy(
    args: GetStackPolicyInput,
    cb?: (err: any, data?: GetStackPolicyOutput) => void
  ): Promise<GetStackPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetStackPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the template body for a specified stack. You can get the template for running or deleted stacks.</p> <p>For deleted stacks, GetTemplate returns the template for up to 90 days after the stack has been deleted.</p> <note> <p> If the template does not exist, a <code>ValidationError</code> is returned. </p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ChangeSetNotFoundException} <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the <code>ListChangeSets</code> action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTemplate(args: GetTemplateInput): Promise<GetTemplateOutput>;
  public getTemplate(
    args: GetTemplateInput,
    cb: (err: any, data?: GetTemplateOutput) => void
  ): void;
  public getTemplate(
    args: GetTemplateInput,
    cb?: (err: any, data?: GetTemplateOutput) => void
  ): Promise<GetTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a new or existing template. The <code>GetTemplateSummary</code> action is useful for viewing parameter information, such as default parameter values and parameter types, before you create or update a stack or stack set.</p> <p>You can use the <code>GetTemplateSummary</code> action when you submit a template, or you can get template information for a stack set, or a running or deleted stack.</p> <p>For deleted stacks, <code>GetTemplateSummary</code> returns the template information for up to 90 days after the stack has been deleted. If the template does not exist, a <code>ValidationError</code> is returned.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTemplateSummary(
    args: GetTemplateSummaryInput
  ): Promise<GetTemplateSummaryOutput>;
  public getTemplateSummary(
    args: GetTemplateSummaryInput,
    cb: (err: any, data?: GetTemplateSummaryOutput) => void
  ): void;
  public getTemplateSummary(
    args: GetTemplateSummaryInput,
    cb?: (err: any, data?: GetTemplateSummaryOutput) => void
  ): Promise<GetTemplateSummaryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTemplateSummaryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the ID and status of each active change set for a stack. For example, AWS CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or <code>CREATE_PENDING</code> state.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listChangeSets(
    args: ListChangeSetsInput
  ): Promise<ListChangeSetsOutput>;
  public listChangeSets(
    args: ListChangeSetsInput,
    cb: (err: any, data?: ListChangeSetsOutput) => void
  ): void;
  public listChangeSets(
    args: ListChangeSetsInput,
    cb?: (err: any, data?: ListChangeSetsOutput) => void
  ): Promise<ListChangeSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListChangeSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all exported output values in the account and region in which you call this action. Use this action to see the exported output values that you can import into other stacks. To import values, use the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-exports.html"> AWS CloudFormation Export Stack Output Values</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listExports(args: ListExportsInput): Promise<ListExportsOutput>;
  public listExports(
    args: ListExportsInput,
    cb: (err: any, data?: ListExportsOutput) => void
  ): void;
  public listExports(
    args: ListExportsInput,
    cb?: (err: any, data?: ListExportsOutput) => void
  ): Promise<ListExportsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListExportsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all stacks that are importing an exported output value. To modify or remove an exported output value, first use this action to see which stacks are using it. To see the exported output values in your account, see <a>ListExports</a>. </p> <p>For more information about importing an exported output value, see the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-importvalue.html"> <code>Fn::ImportValue</code> </a> function. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listImports(args: ListImportsInput): Promise<ListImportsOutput>;
  public listImports(
    args: ListImportsInput,
    cb: (err: any, data?: ListImportsOutput) => void
  ): void;
  public listImports(
    args: ListImportsInput,
    cb?: (err: any, data?: ListImportsOutput) => void
  ): Promise<ListImportsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListImportsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns summary information about stack instances that are associated with the specified stack set. You can filter for stack instances that are associated with a specific AWS account name or region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listStackInstances(
    args: ListStackInstancesInput
  ): Promise<ListStackInstancesOutput>;
  public listStackInstances(
    args: ListStackInstancesInput,
    cb: (err: any, data?: ListStackInstancesOutput) => void
  ): void;
  public listStackInstances(
    args: ListStackInstancesInput,
    cb?: (err: any, data?: ListStackInstancesOutput) => void
  ): Promise<ListStackInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStackInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns descriptions of all resources of the specified stack.</p> <p>For deleted stacks, ListStackResources returns resource information for up to 90 days after the stack has been deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listStackResources(
    args: ListStackResourcesInput
  ): Promise<ListStackResourcesOutput>;
  public listStackResources(
    args: ListStackResourcesInput,
    cb: (err: any, data?: ListStackResourcesOutput) => void
  ): void;
  public listStackResources(
    args: ListStackResourcesInput,
    cb?: (err: any, data?: ListStackResourcesOutput) => void
  ): Promise<ListStackResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStackResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns summary information about the results of a stack set operation. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {OperationNotFoundException} <p>The specified ID refers to an operation that doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listStackSetOperationResults(
    args: ListStackSetOperationResultsInput
  ): Promise<ListStackSetOperationResultsOutput>;
  public listStackSetOperationResults(
    args: ListStackSetOperationResultsInput,
    cb: (err: any, data?: ListStackSetOperationResultsOutput) => void
  ): void;
  public listStackSetOperationResults(
    args: ListStackSetOperationResultsInput,
    cb?: (err: any, data?: ListStackSetOperationResultsOutput) => void
  ): Promise<ListStackSetOperationResultsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStackSetOperationResultsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns summary information about operations performed on a stack set. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listStackSetOperations(
    args: ListStackSetOperationsInput
  ): Promise<ListStackSetOperationsOutput>;
  public listStackSetOperations(
    args: ListStackSetOperationsInput,
    cb: (err: any, data?: ListStackSetOperationsOutput) => void
  ): void;
  public listStackSetOperations(
    args: ListStackSetOperationsInput,
    cb?: (err: any, data?: ListStackSetOperationsOutput) => void
  ): Promise<ListStackSetOperationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStackSetOperationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns summary information about stack sets that are associated with the user.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listStackSets(args: ListStackSetsInput): Promise<ListStackSetsOutput>;
  public listStackSets(
    args: ListStackSetsInput,
    cb: (err: any, data?: ListStackSetsOutput) => void
  ): void;
  public listStackSets(
    args: ListStackSetsInput,
    cb?: (err: any, data?: ListStackSetsOutput) => void
  ): Promise<ListStackSetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStackSetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the summary information for stacks whose status matches the specified StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days after the stack is deleted. If no StackStatusFilter is specified, summary information for all stacks is returned (including existing stacks and stacks that have been deleted).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listStacks(args: ListStacksInput): Promise<ListStacksOutput>;
  public listStacks(
    args: ListStacksInput,
    cb: (err: any, data?: ListStacksOutput) => void
  ): void;
  public listStacks(
    args: ListStacksInput,
    cb?: (err: any, data?: ListStacksOutput) => void
  ): Promise<ListStacksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListStacksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets a stack policy for a specified stack.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setStackPolicy(
    args: SetStackPolicyInput
  ): Promise<SetStackPolicyOutput>;
  public setStackPolicy(
    args: SetStackPolicyInput,
    cb: (err: any, data?: SetStackPolicyOutput) => void
  ): void;
  public setStackPolicy(
    args: SetStackPolicyInput,
    cb?: (err: any, data?: SetStackPolicyOutput) => void
  ): Promise<SetStackPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetStackPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sends a signal to the specified resource with a success or failure status. You can use the SignalResource API in conjunction with a creation policy or update policy. AWS CloudFormation doesn't proceed with a stack creation or update until resources receive the required number of signals or the timeout period is exceeded. The SignalResource API is useful in cases where you want to send signals from anywhere other than an Amazon EC2 instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public signalResource(
    args: SignalResourceInput
  ): Promise<SignalResourceOutput>;
  public signalResource(
    args: SignalResourceInput,
    cb: (err: any, data?: SignalResourceOutput) => void
  ): void;
  public signalResource(
    args: SignalResourceInput,
    cb?: (err: any, data?: SignalResourceOutput) => void
  ): Promise<SignalResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SignalResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops an in-progress operation on a stack set and its associated stack instances. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {OperationNotFoundException} <p>The specified ID refers to an operation that doesn't exist.</p>
   *   - {InvalidOperationException} <p>The specified operation isn't valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopStackSetOperation(
    args: StopStackSetOperationInput
  ): Promise<StopStackSetOperationOutput>;
  public stopStackSetOperation(
    args: StopStackSetOperationInput,
    cb: (err: any, data?: StopStackSetOperationOutput) => void
  ): void;
  public stopStackSetOperation(
    args: StopStackSetOperationInput,
    cb?: (err: any, data?: StopStackSetOperationOutput) => void
  ): Promise<StopStackSetOperationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopStackSetOperationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a stack as specified in the template. After the call completes successfully, the stack update starts. You can check the status of the stack via the <a>DescribeStacks</a> action.</p> <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a> action.</p> <p>For more information about creating an update template, updating a stack, and monitoring the progress of the update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a Stack</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InsufficientCapabilitiesException} <p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>
   *   - {TokenAlreadyExistsException} <p>A client request token already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateStack(args: UpdateStackInput): Promise<UpdateStackOutput>;
  public updateStack(
    args: UpdateStackInput,
    cb: (err: any, data?: UpdateStackOutput) => void
  ): void;
  public updateStack(
    args: UpdateStackInput,
    cb?: (err: any, data?: UpdateStackOutput) => void
  ): Promise<UpdateStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the parameter values for stack instances for the specified accounts, within the specified regions. A stack instance refers to a stack in a specific account and region. </p> <p>You can only update stack instances in regions and accounts where they already exist; to create additional stack instances, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStackInstances.html">CreateStackInstances</a>. </p> <p>During stack set updates, any parameters overridden for a stack instance are not updated, but retain their overridden value.</p> <p>You can only update the parameter <i>values</i> that are specified in the stack set; to add or delete a parameter itself, use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update the stack set template. If you add a parameter to a template, before you can override the parameter value specified in the stack set you must first use <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStackSet.html">UpdateStackSet</a> to update all stack instances with the updated template and parameter value specified in the stack set. Once a stack instance has been updated with the new parameter, you can then override the parameter value using <code>UpdateStackInstances</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {StackInstanceNotFoundException} <p>The specified stack instance doesn't exist.</p>
   *   - {OperationInProgressException} <p>Another operation is currently in progress for this stack set. Only one operation can be performed for a stack set at a given time.</p>
   *   - {OperationIdAlreadyExistsException} <p>The specified operation ID already exists.</p>
   *   - {StaleRequestException} <p>Another operation has been performed on this stack set since the specified operation was performed. </p>
   *   - {InvalidOperationException} <p>The specified operation isn't valid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateStackInstances(
    args: UpdateStackInstancesInput
  ): Promise<UpdateStackInstancesOutput>;
  public updateStackInstances(
    args: UpdateStackInstancesInput,
    cb: (err: any, data?: UpdateStackInstancesOutput) => void
  ): void;
  public updateStackInstances(
    args: UpdateStackInstancesInput,
    cb?: (err: any, data?: UpdateStackInstancesOutput) => void
  ): Promise<UpdateStackInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateStackInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the stack set, and associated stack instances in the specified accounts and regions.</p> <p>Even if the stack set operation created by updating the stack set fails (completely or partially, below or above a specified failure tolerance), the stack set is updated with your changes. Subsequent <a>CreateStackInstances</a> calls on the specified stack set use the updated stack set.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {StackSetNotFoundException} <p>The specified stack set doesn't exist.</p>
   *   - {OperationInProgressException} <p>Another operation is currently in progress for this stack set. Only one operation can be performed for a stack set at a given time.</p>
   *   - {OperationIdAlreadyExistsException} <p>The specified operation ID already exists.</p>
   *   - {StaleRequestException} <p>Another operation has been performed on this stack set since the specified operation was performed. </p>
   *   - {InvalidOperationException} <p>The specified operation isn't valid.</p>
   *   - {StackInstanceNotFoundException} <p>The specified stack instance doesn't exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateStackSet(
    args: UpdateStackSetInput
  ): Promise<UpdateStackSetOutput>;
  public updateStackSet(
    args: UpdateStackSetInput,
    cb: (err: any, data?: UpdateStackSetOutput) => void
  ): void;
  public updateStackSet(
    args: UpdateStackSetInput,
    cb?: (err: any, data?: UpdateStackSetOutput) => void
  ): Promise<UpdateStackSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateStackSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates termination protection for the specified stack. If a user attempts to delete a stack with termination protection enabled, the operation fails and the stack remains unchanged. For more information, see <a href="AWSCloudFormation/latest/UserGuide/using-cfn-protect-stacks.html">Protecting a Stack From Being Deleted</a> in the <i>AWS CloudFormation User Guide</i>.</p> <p> For <a href="AWSCloudFormation/latest/UserGuide/using-cfn-nested-stacks.html">nested stacks</a>, termination protection is set on the root stack and cannot be changed directly on the nested stack.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateTerminationProtection(
    args: UpdateTerminationProtectionInput
  ): Promise<UpdateTerminationProtectionOutput>;
  public updateTerminationProtection(
    args: UpdateTerminationProtectionInput,
    cb: (err: any, data?: UpdateTerminationProtectionOutput) => void
  ): void;
  public updateTerminationProtection(
    args: UpdateTerminationProtectionInput,
    cb?: (err: any, data?: UpdateTerminationProtectionOutput) => void
  ): Promise<UpdateTerminationProtectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTerminationProtectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Validates a specified template. AWS CloudFormation first checks if the template is valid JSON. If it isn't, AWS CloudFormation checks if the template is valid YAML. If both these checks fail, AWS CloudFormation returns a template validation error.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public validateTemplate(
    args: ValidateTemplateInput
  ): Promise<ValidateTemplateOutput>;
  public validateTemplate(
    args: ValidateTemplateInput,
    cb: (err: any, data?: ValidateTemplateOutput) => void
  ): void;
  public validateTemplate(
    args: ValidateTemplateInput,
    cb?: (err: any, data?: ValidateTemplateOutput) => void
  ): Promise<ValidateTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ValidateTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
