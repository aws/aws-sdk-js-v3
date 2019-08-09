import { SWFClient } from "./SWFClient";
import { CountClosedWorkflowExecutionsInput } from "./types/CountClosedWorkflowExecutionsInput";
import { CountClosedWorkflowExecutionsOutput } from "./types/CountClosedWorkflowExecutionsOutput";
import { CountOpenWorkflowExecutionsInput } from "./types/CountOpenWorkflowExecutionsInput";
import { CountOpenWorkflowExecutionsOutput } from "./types/CountOpenWorkflowExecutionsOutput";
import { CountPendingActivityTasksInput } from "./types/CountPendingActivityTasksInput";
import { CountPendingActivityTasksOutput } from "./types/CountPendingActivityTasksOutput";
import { CountPendingDecisionTasksInput } from "./types/CountPendingDecisionTasksInput";
import { CountPendingDecisionTasksOutput } from "./types/CountPendingDecisionTasksOutput";
import { DefaultUndefinedFault } from "./types/DefaultUndefinedFault";
import { DeprecateActivityTypeInput } from "./types/DeprecateActivityTypeInput";
import { DeprecateActivityTypeOutput } from "./types/DeprecateActivityTypeOutput";
import { DeprecateDomainInput } from "./types/DeprecateDomainInput";
import { DeprecateDomainOutput } from "./types/DeprecateDomainOutput";
import { DeprecateWorkflowTypeInput } from "./types/DeprecateWorkflowTypeInput";
import { DeprecateWorkflowTypeOutput } from "./types/DeprecateWorkflowTypeOutput";
import { DescribeActivityTypeInput } from "./types/DescribeActivityTypeInput";
import { DescribeActivityTypeOutput } from "./types/DescribeActivityTypeOutput";
import { DescribeDomainInput } from "./types/DescribeDomainInput";
import { DescribeDomainOutput } from "./types/DescribeDomainOutput";
import { DescribeWorkflowExecutionInput } from "./types/DescribeWorkflowExecutionInput";
import { DescribeWorkflowExecutionOutput } from "./types/DescribeWorkflowExecutionOutput";
import { DescribeWorkflowTypeInput } from "./types/DescribeWorkflowTypeInput";
import { DescribeWorkflowTypeOutput } from "./types/DescribeWorkflowTypeOutput";
import { DomainAlreadyExistsFault } from "./types/DomainAlreadyExistsFault";
import { DomainDeprecatedFault } from "./types/DomainDeprecatedFault";
import { GetWorkflowExecutionHistoryInput } from "./types/GetWorkflowExecutionHistoryInput";
import { GetWorkflowExecutionHistoryOutput } from "./types/GetWorkflowExecutionHistoryOutput";
import { LimitExceededFault } from "./types/LimitExceededFault";
import { ListActivityTypesInput } from "./types/ListActivityTypesInput";
import { ListActivityTypesOutput } from "./types/ListActivityTypesOutput";
import { ListClosedWorkflowExecutionsInput } from "./types/ListClosedWorkflowExecutionsInput";
import { ListClosedWorkflowExecutionsOutput } from "./types/ListClosedWorkflowExecutionsOutput";
import { ListDomainsInput } from "./types/ListDomainsInput";
import { ListDomainsOutput } from "./types/ListDomainsOutput";
import { ListOpenWorkflowExecutionsInput } from "./types/ListOpenWorkflowExecutionsInput";
import { ListOpenWorkflowExecutionsOutput } from "./types/ListOpenWorkflowExecutionsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListWorkflowTypesInput } from "./types/ListWorkflowTypesInput";
import { ListWorkflowTypesOutput } from "./types/ListWorkflowTypesOutput";
import { OperationNotPermittedFault } from "./types/OperationNotPermittedFault";
import { PollForActivityTaskInput } from "./types/PollForActivityTaskInput";
import { PollForActivityTaskOutput } from "./types/PollForActivityTaskOutput";
import { PollForDecisionTaskInput } from "./types/PollForDecisionTaskInput";
import { PollForDecisionTaskOutput } from "./types/PollForDecisionTaskOutput";
import { RecordActivityTaskHeartbeatInput } from "./types/RecordActivityTaskHeartbeatInput";
import { RecordActivityTaskHeartbeatOutput } from "./types/RecordActivityTaskHeartbeatOutput";
import { RegisterActivityTypeInput } from "./types/RegisterActivityTypeInput";
import { RegisterActivityTypeOutput } from "./types/RegisterActivityTypeOutput";
import { RegisterDomainInput } from "./types/RegisterDomainInput";
import { RegisterDomainOutput } from "./types/RegisterDomainOutput";
import { RegisterWorkflowTypeInput } from "./types/RegisterWorkflowTypeInput";
import { RegisterWorkflowTypeOutput } from "./types/RegisterWorkflowTypeOutput";
import { RequestCancelWorkflowExecutionInput } from "./types/RequestCancelWorkflowExecutionInput";
import { RequestCancelWorkflowExecutionOutput } from "./types/RequestCancelWorkflowExecutionOutput";
import { RespondActivityTaskCanceledInput } from "./types/RespondActivityTaskCanceledInput";
import { RespondActivityTaskCanceledOutput } from "./types/RespondActivityTaskCanceledOutput";
import { RespondActivityTaskCompletedInput } from "./types/RespondActivityTaskCompletedInput";
import { RespondActivityTaskCompletedOutput } from "./types/RespondActivityTaskCompletedOutput";
import { RespondActivityTaskFailedInput } from "./types/RespondActivityTaskFailedInput";
import { RespondActivityTaskFailedOutput } from "./types/RespondActivityTaskFailedOutput";
import { RespondDecisionTaskCompletedInput } from "./types/RespondDecisionTaskCompletedInput";
import { RespondDecisionTaskCompletedOutput } from "./types/RespondDecisionTaskCompletedOutput";
import { SignalWorkflowExecutionInput } from "./types/SignalWorkflowExecutionInput";
import { SignalWorkflowExecutionOutput } from "./types/SignalWorkflowExecutionOutput";
import { StartWorkflowExecutionInput } from "./types/StartWorkflowExecutionInput";
import { StartWorkflowExecutionOutput } from "./types/StartWorkflowExecutionOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TerminateWorkflowExecutionInput } from "./types/TerminateWorkflowExecutionInput";
import { TerminateWorkflowExecutionOutput } from "./types/TerminateWorkflowExecutionOutput";
import { TooManyTagsFault } from "./types/TooManyTagsFault";
import { TypeAlreadyExistsFault } from "./types/TypeAlreadyExistsFault";
import { TypeDeprecatedFault } from "./types/TypeDeprecatedFault";
import { UndeprecateActivityTypeInput } from "./types/UndeprecateActivityTypeInput";
import { UndeprecateActivityTypeOutput } from "./types/UndeprecateActivityTypeOutput";
import { UndeprecateDomainInput } from "./types/UndeprecateDomainInput";
import { UndeprecateDomainOutput } from "./types/UndeprecateDomainOutput";
import { UndeprecateWorkflowTypeInput } from "./types/UndeprecateWorkflowTypeInput";
import { UndeprecateWorkflowTypeOutput } from "./types/UndeprecateWorkflowTypeOutput";
import { UnknownResourceFault } from "./types/UnknownResourceFault";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { WorkflowExecutionAlreadyStartedFault } from "./types/WorkflowExecutionAlreadyStartedFault";
import { CountClosedWorkflowExecutionsCommand } from "./commands/CountClosedWorkflowExecutionsCommand";
import { CountOpenWorkflowExecutionsCommand } from "./commands/CountOpenWorkflowExecutionsCommand";
import { CountPendingActivityTasksCommand } from "./commands/CountPendingActivityTasksCommand";
import { CountPendingDecisionTasksCommand } from "./commands/CountPendingDecisionTasksCommand";
import { DeprecateActivityTypeCommand } from "./commands/DeprecateActivityTypeCommand";
import { DeprecateDomainCommand } from "./commands/DeprecateDomainCommand";
import { DeprecateWorkflowTypeCommand } from "./commands/DeprecateWorkflowTypeCommand";
import { DescribeActivityTypeCommand } from "./commands/DescribeActivityTypeCommand";
import { DescribeDomainCommand } from "./commands/DescribeDomainCommand";
import { DescribeWorkflowExecutionCommand } from "./commands/DescribeWorkflowExecutionCommand";
import { DescribeWorkflowTypeCommand } from "./commands/DescribeWorkflowTypeCommand";
import { GetWorkflowExecutionHistoryCommand } from "./commands/GetWorkflowExecutionHistoryCommand";
import { ListActivityTypesCommand } from "./commands/ListActivityTypesCommand";
import { ListClosedWorkflowExecutionsCommand } from "./commands/ListClosedWorkflowExecutionsCommand";
import { ListDomainsCommand } from "./commands/ListDomainsCommand";
import { ListOpenWorkflowExecutionsCommand } from "./commands/ListOpenWorkflowExecutionsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListWorkflowTypesCommand } from "./commands/ListWorkflowTypesCommand";
import { PollForActivityTaskCommand } from "./commands/PollForActivityTaskCommand";
import { PollForDecisionTaskCommand } from "./commands/PollForDecisionTaskCommand";
import { RecordActivityTaskHeartbeatCommand } from "./commands/RecordActivityTaskHeartbeatCommand";
import { RegisterActivityTypeCommand } from "./commands/RegisterActivityTypeCommand";
import { RegisterDomainCommand } from "./commands/RegisterDomainCommand";
import { RegisterWorkflowTypeCommand } from "./commands/RegisterWorkflowTypeCommand";
import { RequestCancelWorkflowExecutionCommand } from "./commands/RequestCancelWorkflowExecutionCommand";
import { RespondActivityTaskCanceledCommand } from "./commands/RespondActivityTaskCanceledCommand";
import { RespondActivityTaskCompletedCommand } from "./commands/RespondActivityTaskCompletedCommand";
import { RespondActivityTaskFailedCommand } from "./commands/RespondActivityTaskFailedCommand";
import { RespondDecisionTaskCompletedCommand } from "./commands/RespondDecisionTaskCompletedCommand";
import { SignalWorkflowExecutionCommand } from "./commands/SignalWorkflowExecutionCommand";
import { StartWorkflowExecutionCommand } from "./commands/StartWorkflowExecutionCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TerminateWorkflowExecutionCommand } from "./commands/TerminateWorkflowExecutionCommand";
import { UndeprecateActivityTypeCommand } from "./commands/UndeprecateActivityTypeCommand";
import { UndeprecateDomainCommand } from "./commands/UndeprecateDomainCommand";
import { UndeprecateWorkflowTypeCommand } from "./commands/UndeprecateWorkflowTypeCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";

export class SWF extends SWFClient {
  /**
   * <p>Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public countClosedWorkflowExecutions(
    args: CountClosedWorkflowExecutionsInput
  ): Promise<CountClosedWorkflowExecutionsOutput>;
  public countClosedWorkflowExecutions(
    args: CountClosedWorkflowExecutionsInput,
    cb: (err: any, data?: CountClosedWorkflowExecutionsOutput) => void
  ): void;
  public countClosedWorkflowExecutions(
    args: CountClosedWorkflowExecutionsInput,
    cb?: (err: any, data?: CountClosedWorkflowExecutionsOutput) => void
  ): Promise<CountClosedWorkflowExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CountClosedWorkflowExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the number of open workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public countOpenWorkflowExecutions(
    args: CountOpenWorkflowExecutionsInput
  ): Promise<CountOpenWorkflowExecutionsOutput>;
  public countOpenWorkflowExecutions(
    args: CountOpenWorkflowExecutionsInput,
    cb: (err: any, data?: CountOpenWorkflowExecutionsOutput) => void
  ): void;
  public countOpenWorkflowExecutions(
    args: CountOpenWorkflowExecutionsInput,
    cb?: (err: any, data?: CountOpenWorkflowExecutionsOutput) => void
  ): Promise<CountOpenWorkflowExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CountOpenWorkflowExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public countPendingActivityTasks(
    args: CountPendingActivityTasksInput
  ): Promise<CountPendingActivityTasksOutput>;
  public countPendingActivityTasks(
    args: CountPendingActivityTasksInput,
    cb: (err: any, data?: CountPendingActivityTasksOutput) => void
  ): void;
  public countPendingActivityTasks(
    args: CountPendingActivityTasksInput,
    cb?: (err: any, data?: CountPendingActivityTasksOutput) => void
  ): Promise<CountPendingActivityTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CountPendingActivityTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public countPendingDecisionTasks(
    args: CountPendingDecisionTasksInput
  ): Promise<CountPendingDecisionTasksOutput>;
  public countPendingDecisionTasks(
    args: CountPendingDecisionTasksInput,
    cb: (err: any, data?: CountPendingDecisionTasksOutput) => void
  ): void;
  public countPendingDecisionTasks(
    args: CountPendingDecisionTasksInput,
    cb?: (err: any, data?: CountPendingDecisionTasksOutput) => void
  ): Promise<CountPendingDecisionTasksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CountPendingDecisionTasksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecates the specified <i>activity type</i>. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {TypeDeprecatedFault} <p>Returned when the specified activity or workflow type was already deprecated.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deprecateActivityType(
    args: DeprecateActivityTypeInput
  ): Promise<DeprecateActivityTypeOutput>;
  public deprecateActivityType(
    args: DeprecateActivityTypeInput,
    cb: (err: any, data?: DeprecateActivityTypeOutput) => void
  ): void;
  public deprecateActivityType(
    args: DeprecateActivityTypeInput,
    cb?: (err: any, data?: DeprecateActivityTypeOutput) => void
  ): Promise<DeprecateActivityTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeprecateActivityTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {DomainDeprecatedFault} <p>Returned when the specified domain has been deprecated.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deprecateDomain(
    args: DeprecateDomainInput
  ): Promise<DeprecateDomainOutput>;
  public deprecateDomain(
    args: DeprecateDomainInput,
    cb: (err: any, data?: DeprecateDomainOutput) => void
  ): void;
  public deprecateDomain(
    args: DeprecateDomainInput,
    cb?: (err: any, data?: DeprecateDomainOutput) => void
  ): Promise<DeprecateDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeprecateDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deprecates the specified <i>workflow type</i>. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {TypeDeprecatedFault} <p>Returned when the specified activity or workflow type was already deprecated.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deprecateWorkflowType(
    args: DeprecateWorkflowTypeInput
  ): Promise<DeprecateWorkflowTypeOutput>;
  public deprecateWorkflowType(
    args: DeprecateWorkflowTypeInput,
    cb: (err: any, data?: DeprecateWorkflowTypeOutput) => void
  ): void;
  public deprecateWorkflowType(
    args: DeprecateWorkflowTypeInput,
    cb?: (err: any, data?: DeprecateWorkflowTypeOutput) => void
  ): Promise<DeprecateWorkflowTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeprecateWorkflowTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeActivityType(
    args: DescribeActivityTypeInput
  ): Promise<DescribeActivityTypeOutput>;
  public describeActivityType(
    args: DescribeActivityTypeInput,
    cb: (err: any, data?: DescribeActivityTypeOutput) => void
  ): void;
  public describeActivityType(
    args: DescribeActivityTypeInput,
    cb?: (err: any, data?: DescribeActivityTypeOutput) => void
  ): Promise<DescribeActivityTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeActivityTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the specified domain, including description and status.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDomain(
    args: DescribeDomainInput
  ): Promise<DescribeDomainOutput>;
  public describeDomain(
    args: DescribeDomainInput,
    cb: (err: any, data?: DescribeDomainOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainInput,
    cb?: (err: any, data?: DescribeDomainOutput) => void
  ): Promise<DescribeDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the specified workflow execution including its type and some statistics.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeWorkflowExecution(
    args: DescribeWorkflowExecutionInput
  ): Promise<DescribeWorkflowExecutionOutput>;
  public describeWorkflowExecution(
    args: DescribeWorkflowExecutionInput,
    cb: (err: any, data?: DescribeWorkflowExecutionOutput) => void
  ): void;
  public describeWorkflowExecution(
    args: DescribeWorkflowExecutionInput,
    cb?: (err: any, data?: DescribeWorkflowExecutionOutput) => void
  ): Promise<DescribeWorkflowExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeWorkflowExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the specified <i>workflow type</i>. This includes configuration settings specified when the type was registered and other information such as creation date, current status, etc.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeWorkflowType(
    args: DescribeWorkflowTypeInput
  ): Promise<DescribeWorkflowTypeOutput>;
  public describeWorkflowType(
    args: DescribeWorkflowTypeInput,
    cb: (err: any, data?: DescribeWorkflowTypeOutput) => void
  ): void;
  public describeWorkflowType(
    args: DescribeWorkflowTypeInput,
    cb?: (err: any, data?: DescribeWorkflowTypeOutput) => void
  ): Promise<DescribeWorkflowTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeWorkflowTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getWorkflowExecutionHistory(
    args: GetWorkflowExecutionHistoryInput
  ): Promise<GetWorkflowExecutionHistoryOutput>;
  public getWorkflowExecutionHistory(
    args: GetWorkflowExecutionHistoryInput,
    cb: (err: any, data?: GetWorkflowExecutionHistoryOutput) => void
  ): void;
  public getWorkflowExecutionHistory(
    args: GetWorkflowExecutionHistoryInput,
    cb?: (err: any, data?: GetWorkflowExecutionHistoryOutput) => void
  ): Promise<GetWorkflowExecutionHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetWorkflowExecutionHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listActivityTypes(
    args: ListActivityTypesInput
  ): Promise<ListActivityTypesOutput>;
  public listActivityTypes(
    args: ListActivityTypesInput,
    cb: (err: any, data?: ListActivityTypesOutput) => void
  ): void;
  public listActivityTypes(
    args: ListActivityTypesInput,
    cb?: (err: any, data?: ListActivityTypesOutput) => void
  ): Promise<ListActivityTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListActivityTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listClosedWorkflowExecutions(
    args: ListClosedWorkflowExecutionsInput
  ): Promise<ListClosedWorkflowExecutionsOutput>;
  public listClosedWorkflowExecutions(
    args: ListClosedWorkflowExecutionsInput,
    cb: (err: any, data?: ListClosedWorkflowExecutionsOutput) => void
  ): void;
  public listClosedWorkflowExecutions(
    args: ListClosedWorkflowExecutionsInput,
    cb?: (err: any, data?: ListClosedWorkflowExecutionsOutput) => void
  ): Promise<ListClosedWorkflowExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListClosedWorkflowExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the list of domains registered in the account. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains. The element must be set to <code>arn:aws:swf::AccountID:domain/*</code>, where <i>AccountID</i> is the account ID, with no dashes.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDomains(args: ListDomainsInput): Promise<ListDomainsOutput>;
  public listDomains(
    args: ListDomainsInput,
    cb: (err: any, data?: ListDomainsOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsInput,
    cb?: (err: any, data?: ListDomainsOutput) => void
  ): Promise<ListDomainsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDomainsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listOpenWorkflowExecutions(
    args: ListOpenWorkflowExecutionsInput
  ): Promise<ListOpenWorkflowExecutionsOutput>;
  public listOpenWorkflowExecutions(
    args: ListOpenWorkflowExecutionsInput,
    cb: (err: any, data?: ListOpenWorkflowExecutionsOutput) => void
  ): void;
  public listOpenWorkflowExecutions(
    args: ListOpenWorkflowExecutionsInput,
    cb?: (err: any, data?: ListOpenWorkflowExecutionsOutput) => void
  ): Promise<ListOpenWorkflowExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListOpenWorkflowExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List tags for a given domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {LimitExceededFault} <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listWorkflowTypes(
    args: ListWorkflowTypesInput
  ): Promise<ListWorkflowTypesOutput>;
  public listWorkflowTypes(
    args: ListWorkflowTypesInput,
    cb: (err: any, data?: ListWorkflowTypesOutput) => void
  ): void;
  public listWorkflowTypes(
    args: ListWorkflowTypesInput,
    cb?: (err: any, data?: ListWorkflowTypesOutput) => void
  ): Promise<ListWorkflowTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListWorkflowTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by workers to get an <a>ActivityTask</a> from the specified activity <code>taskList</code>. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly.</p> <important> <p>Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request).</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {LimitExceededFault} <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public pollForActivityTask(
    args: PollForActivityTaskInput
  ): Promise<PollForActivityTaskOutput>;
  public pollForActivityTask(
    args: PollForActivityTaskInput,
    cb: (err: any, data?: PollForActivityTaskOutput) => void
  ): void;
  public pollForActivityTask(
    args: PollForActivityTaskInput,
    cb?: (err: any, data?: PollForActivityTaskOutput) => void
  ): Promise<PollForActivityTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PollForActivityTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by deciders to get a <a>DecisionTask</a> from the specified decision <code>taskList</code>. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task.</p> <p>This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string.</p> <important> <p>Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher than the timeout).</p> </important> <important> <p>Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to <code>PollForDecisionTask</code> using the <code>nextPageToken</code> returned by the initial call. Note that you do <i>not</i> call <code>GetWorkflowExecutionHistory</code> with this <code>nextPageToken</code>. Instead, call <code>PollForDecisionTask</code> again.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {LimitExceededFault} <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public pollForDecisionTask(
    args: PollForDecisionTaskInput
  ): Promise<PollForDecisionTaskOutput>;
  public pollForDecisionTask(
    args: PollForDecisionTaskInput,
    cb: (err: any, data?: PollForDecisionTaskOutput) => void
  ): void;
  public pollForDecisionTask(
    args: PollForDecisionTaskInput,
    cb?: (err: any, data?: PollForDecisionTaskOutput) => void
  ): Promise<PollForDecisionTaskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PollForDecisionTaskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by activity workers to report to the service that the <a>ActivityTask</a> represented by the specified <code>taskToken</code> is still making progress. The worker can also specify details of the progress, for example percent complete, using the <code>details</code> parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean <code>cancelRequested</code> flag returned by the service is set to <code>true</code>.</p> <p>This action resets the <code>taskHeartbeatTimeout</code> clock. The <code>taskHeartbeatTimeout</code> is specified in <a>RegisterActivityType</a>.</p> <p>This action doesn't in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history contains a <code>ActivityTaskTimedOut</code> event that contains the information from the last heartbeat generated by the activity worker.</p> <note> <p>The <code>taskStartToCloseTimeout</code> of an activity type is the maximum duration of an activity task, regardless of the number of <a>RecordActivityTaskHeartbeat</a> requests received. The <code>taskStartToCloseTimeout</code> is also specified in <a>RegisterActivityType</a>.</p> </note> <note> <p>This operation is only useful for long-lived activities to report liveliness of the task and to determine if a cancellation is being attempted.</p> </note> <important> <p>If the <code>cancelRequested</code> flag returns <code>true</code>, a cancellation is being attempted. If the worker can cancel the activity, it should respond with <a>RespondActivityTaskCanceled</a>. Otherwise, it should ignore the cancellation request.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public recordActivityTaskHeartbeat(
    args: RecordActivityTaskHeartbeatInput
  ): Promise<RecordActivityTaskHeartbeatOutput>;
  public recordActivityTaskHeartbeat(
    args: RecordActivityTaskHeartbeatInput,
    cb: (err: any, data?: RecordActivityTaskHeartbeatOutput) => void
  ): void;
  public recordActivityTaskHeartbeat(
    args: RecordActivityTaskHeartbeatInput,
    cb?: (err: any, data?: RecordActivityTaskHeartbeatOutput) => void
  ): Promise<RecordActivityTaskHeartbeatOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RecordActivityTaskHeartbeatCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a new <i>activity type</i> along with its configuration settings in the specified domain.</p> <important> <p>A <code>TypeAlreadyExists</code> fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TypeAlreadyExistsFault} <p>Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.</p>
   *   - {LimitExceededFault} <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerActivityType(
    args: RegisterActivityTypeInput
  ): Promise<RegisterActivityTypeOutput>;
  public registerActivityType(
    args: RegisterActivityTypeInput,
    cb: (err: any, data?: RegisterActivityTypeOutput) => void
  ): void;
  public registerActivityType(
    args: RegisterActivityTypeInput,
    cb?: (err: any, data?: RegisterActivityTypeOutput) => void
  ): Promise<RegisterActivityTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterActivityTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a new domain.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DomainAlreadyExistsFault} <p>Returned if the domain already exists. You may get this fault if you are registering a domain that is either already registered or deprecated, or if you undeprecate a domain that is currently registered.</p>
   *   - {LimitExceededFault} <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {TooManyTagsFault} <p>You've exceeded the number of tags allowed for a domain.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerDomain(
    args: RegisterDomainInput
  ): Promise<RegisterDomainOutput>;
  public registerDomain(
    args: RegisterDomainInput,
    cb: (err: any, data?: RegisterDomainOutput) => void
  ): void;
  public registerDomain(
    args: RegisterDomainInput,
    cb?: (err: any, data?: RegisterDomainOutput) => void
  ): Promise<RegisterDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers a new <i>workflow type</i> and its configuration settings in the specified domain.</p> <p>The retention period for the workflow history is set by the <a>RegisterDomain</a> action.</p> <important> <p>If the type already exists, then a <code>TypeAlreadyExists</code> fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {TypeAlreadyExistsFault} <p>Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.</p>
   *   - {LimitExceededFault} <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerWorkflowType(
    args: RegisterWorkflowTypeInput
  ): Promise<RegisterWorkflowTypeOutput>;
  public registerWorkflowType(
    args: RegisterWorkflowTypeInput,
    cb: (err: any, data?: RegisterWorkflowTypeOutput) => void
  ): void;
  public registerWorkflowType(
    args: RegisterWorkflowTypeInput,
    cb?: (err: any, data?: RegisterWorkflowTypeOutput) => void
  ): Promise<RegisterWorkflowTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterWorkflowTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Records a <code>WorkflowExecutionCancelRequested</code> event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> <note> <p>If the runId isn't specified, the <code>WorkflowExecutionCancelRequested</code> event is recorded in the history of the current open workflow execution with the specified workflowId in the domain.</p> </note> <note> <p>Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of <a>TerminateWorkflowExecution</a> when possible.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public requestCancelWorkflowExecution(
    args: RequestCancelWorkflowExecutionInput
  ): Promise<RequestCancelWorkflowExecutionOutput>;
  public requestCancelWorkflowExecution(
    args: RequestCancelWorkflowExecutionInput,
    cb: (err: any, data?: RequestCancelWorkflowExecutionOutput) => void
  ): void;
  public requestCancelWorkflowExecution(
    args: RequestCancelWorkflowExecutionInput,
    cb?: (err: any, data?: RequestCancelWorkflowExecutionOutput) => void
  ): Promise<RequestCancelWorkflowExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RequestCancelWorkflowExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> was successfully canceled. Additional <code>details</code> can be provided using the <code>details</code> argument.</p> <p>These <code>details</code> (if provided) appear in the <code>ActivityTaskCanceled</code> event added to the workflow history.</p> <important> <p>Only use this operation if the <code>canceled</code> flag of a <a>RecordActivityTaskHeartbeat</a> request returns <code>true</code> and if the activity can be safely undone or abandoned.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, RespondActivityTaskCanceled, <a>RespondActivityTaskFailed</a>, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public respondActivityTaskCanceled(
    args: RespondActivityTaskCanceledInput
  ): Promise<RespondActivityTaskCanceledOutput>;
  public respondActivityTaskCanceled(
    args: RespondActivityTaskCanceledInput,
    cb: (err: any, data?: RespondActivityTaskCanceledOutput) => void
  ): void;
  public respondActivityTaskCanceled(
    args: RespondActivityTaskCanceledInput,
    cb?: (err: any, data?: RespondActivityTaskCanceledOutput) => void
  ): Promise<RespondActivityTaskCanceledOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RespondActivityTaskCanceledCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> completed successfully with a <code>result</code> (if provided). The <code>result</code> appears in the <code>ActivityTaskCompleted</code> event in the workflow history.</p> <important> <p>If the requested task doesn't complete successfully, use <a>RespondActivityTaskFailed</a> instead. If the worker finds that the task is canceled through the <code>canceled</code> flag returned by <a>RecordActivityTaskHeartbeat</a>, it should cancel the task, clean up and then call <a>RespondActivityTaskCanceled</a>.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, <a>RespondActivityTaskCanceled</a>, <a>RespondActivityTaskFailed</a>, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public respondActivityTaskCompleted(
    args: RespondActivityTaskCompletedInput
  ): Promise<RespondActivityTaskCompletedOutput>;
  public respondActivityTaskCompleted(
    args: RespondActivityTaskCompletedInput,
    cb: (err: any, data?: RespondActivityTaskCompletedOutput) => void
  ): void;
  public respondActivityTaskCompleted(
    args: RespondActivityTaskCompletedInput,
    cb?: (err: any, data?: RespondActivityTaskCompletedOutput) => void
  ): Promise<RespondActivityTaskCompletedOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RespondActivityTaskCompletedCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> has failed with <code>reason</code> (if specified). The <code>reason</code> and <code>details</code> appear in the <code>ActivityTaskFailed</code> event added to the workflow history.</p> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, <a>RespondActivityTaskCanceled</a>, RespondActivityTaskFailed, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public respondActivityTaskFailed(
    args: RespondActivityTaskFailedInput
  ): Promise<RespondActivityTaskFailedOutput>;
  public respondActivityTaskFailed(
    args: RespondActivityTaskFailedInput,
    cb: (err: any, data?: RespondActivityTaskFailedOutput) => void
  ): void;
  public respondActivityTaskFailed(
    args: RespondActivityTaskFailedInput,
    cb?: (err: any, data?: RespondActivityTaskFailedOutput) => void
  ): Promise<RespondActivityTaskFailedOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RespondActivityTaskFailedCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Used by deciders to tell the service that the <a>DecisionTask</a> identified by the <code>taskToken</code> has successfully completed. The <code>decisions</code> argument specifies the list of decisions made while processing the task.</p> <p>A <code>DecisionTaskCompleted</code> event is added to the workflow history. The <code>executionContext</code> specified is attached to the event in the workflow execution history.</p> <p> <b>Access Control</b> </p> <p>If an IAM policy grants permission to use <code>RespondDecisionTaskCompleted</code>, it can express permissions for the list of decisions in the <code>decisions</code> parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public respondDecisionTaskCompleted(
    args: RespondDecisionTaskCompletedInput
  ): Promise<RespondDecisionTaskCompletedOutput>;
  public respondDecisionTaskCompleted(
    args: RespondDecisionTaskCompletedInput,
    cb: (err: any, data?: RespondDecisionTaskCompletedOutput) => void
  ): void;
  public respondDecisionTaskCompleted(
    args: RespondDecisionTaskCompletedInput,
    cb?: (err: any, data?: RespondDecisionTaskCompletedOutput) => void
  ): Promise<RespondDecisionTaskCompletedOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RespondDecisionTaskCompletedCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Records a <code>WorkflowExecutionSignaled</code> event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided).</p> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionSignaled</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>If the specified workflow execution isn't open, this method fails with <code>UnknownResource</code>.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public signalWorkflowExecution(
    args: SignalWorkflowExecutionInput
  ): Promise<SignalWorkflowExecutionOutput>;
  public signalWorkflowExecution(
    args: SignalWorkflowExecutionInput,
    cb: (err: any, data?: SignalWorkflowExecutionOutput) => void
  ): void;
  public signalWorkflowExecution(
    args: SignalWorkflowExecutionInput,
    cb?: (err: any, data?: SignalWorkflowExecutionOutput) => void
  ): Promise<SignalWorkflowExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SignalWorkflowExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts an execution of the workflow type in the specified domain using the provided <code>workflowId</code> and input data.</p> <p>This action returns the newly started workflow execution.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.0</code>: The key is <code>swf:tagList.member.0</code>.</p> </li> <li> <p> <code>tagList.member.1</code>: The key is <code>swf:tagList.member.1</code>.</p> </li> <li> <p> <code>tagList.member.2</code>: The key is <code>swf:tagList.member.2</code>.</p> </li> <li> <p> <code>tagList.member.3</code>: The key is <code>swf:tagList.member.3</code>.</p> </li> <li> <p> <code>tagList.member.4</code>: The key is <code>swf:tagList.member.4</code>.</p> </li> <li> <p> <code>taskList</code>: String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {TypeDeprecatedFault} <p>Returned when the specified activity or workflow type was already deprecated.</p>
   *   - {WorkflowExecutionAlreadyStartedFault} <p>Returned by <a>StartWorkflowExecution</a> when an open execution with the same workflowId is already running in the specified domain.</p>
   *   - {LimitExceededFault} <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {DefaultUndefinedFault} <p>The <code>StartWorkflowExecution</code> API action was called without the required parameters set.</p> <p>Some workflow execution parameters, such as the decision <code>taskList</code>, must be set to start the execution. However, these parameters might have been set as defaults when the workflow type was registered. In this case, you can omit these parameters from the <code>StartWorkflowExecution</code> call and Amazon SWF uses the values defined in the workflow type.</p> <note> <p>If these parameters aren't set and no default parameters were defined in the workflow type, this error is displayed.</p> </note>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startWorkflowExecution(
    args: StartWorkflowExecutionInput
  ): Promise<StartWorkflowExecutionOutput>;
  public startWorkflowExecution(
    args: StartWorkflowExecutionInput,
    cb: (err: any, data?: StartWorkflowExecutionOutput) => void
  ): void;
  public startWorkflowExecution(
    args: StartWorkflowExecutionInput,
    cb?: (err: any, data?: StartWorkflowExecutionOutput) => void
  ): Promise<StartWorkflowExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartWorkflowExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Add a tag to a Amazon SWF domain.</p> <note> <p>Amazon SWF supports a maximum of 50 tags per resource.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {TooManyTagsFault} <p>You've exceeded the number of tags allowed for a domain.</p>
   *   - {LimitExceededFault} <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
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
   * <p>Records a <code>WorkflowExecutionTerminated</code> event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution.</p> <important> <p>If the identified workflow execution was in progress, it is terminated immediately.</p> </important> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionTerminated</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>You should consider using <a>RequestCancelWorkflowExecution</a> action instead because it allows the workflow to gracefully close while <a>TerminateWorkflowExecution</a> doesn't.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public terminateWorkflowExecution(
    args: TerminateWorkflowExecutionInput
  ): Promise<TerminateWorkflowExecutionOutput>;
  public terminateWorkflowExecution(
    args: TerminateWorkflowExecutionInput,
    cb: (err: any, data?: TerminateWorkflowExecutionOutput) => void
  ): void;
  public terminateWorkflowExecution(
    args: TerminateWorkflowExecutionInput,
    cb?: (err: any, data?: TerminateWorkflowExecutionOutput) => void
  ): Promise<TerminateWorkflowExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TerminateWorkflowExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Undeprecates a previously deprecated <i>activity type</i>. After an activity type has been undeprecated, you can create new tasks of that activity type.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {TypeAlreadyExistsFault} <p>Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public undeprecateActivityType(
    args: UndeprecateActivityTypeInput
  ): Promise<UndeprecateActivityTypeOutput>;
  public undeprecateActivityType(
    args: UndeprecateActivityTypeInput,
    cb: (err: any, data?: UndeprecateActivityTypeOutput) => void
  ): void;
  public undeprecateActivityType(
    args: UndeprecateActivityTypeInput,
    cb?: (err: any, data?: UndeprecateActivityTypeOutput) => void
  ): Promise<UndeprecateActivityTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UndeprecateActivityTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {DomainAlreadyExistsFault} <p>Returned if the domain already exists. You may get this fault if you are registering a domain that is either already registered or deprecated, or if you undeprecate a domain that is currently registered.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public undeprecateDomain(
    args: UndeprecateDomainInput
  ): Promise<UndeprecateDomainOutput>;
  public undeprecateDomain(
    args: UndeprecateDomainInput,
    cb: (err: any, data?: UndeprecateDomainOutput) => void
  ): void;
  public undeprecateDomain(
    args: UndeprecateDomainInput,
    cb?: (err: any, data?: UndeprecateDomainOutput) => void
  ): Promise<UndeprecateDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UndeprecateDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Undeprecates a previously deprecated <i>workflow type</i>. After a workflow type has been undeprecated, you can create new executions of that type. </p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {TypeAlreadyExistsFault} <p>Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public undeprecateWorkflowType(
    args: UndeprecateWorkflowTypeInput
  ): Promise<UndeprecateWorkflowTypeOutput>;
  public undeprecateWorkflowType(
    args: UndeprecateWorkflowTypeInput,
    cb: (err: any, data?: UndeprecateWorkflowTypeOutput) => void
  ): void;
  public undeprecateWorkflowType(
    args: UndeprecateWorkflowTypeInput,
    cb?: (err: any, data?: UndeprecateWorkflowTypeOutput) => void
  ): Promise<UndeprecateWorkflowTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UndeprecateWorkflowTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Remove a tag from a Amazon SWF domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnknownResourceFault} <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
   *   - {LimitExceededFault} <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
   *   - {OperationNotPermittedFault} <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
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
}
