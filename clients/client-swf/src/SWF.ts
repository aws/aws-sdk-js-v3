// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CountClosedWorkflowExecutionsCommand,
  CountClosedWorkflowExecutionsCommandInput,
  CountClosedWorkflowExecutionsCommandOutput,
} from "./commands/CountClosedWorkflowExecutionsCommand";
import {
  CountOpenWorkflowExecutionsCommand,
  CountOpenWorkflowExecutionsCommandInput,
  CountOpenWorkflowExecutionsCommandOutput,
} from "./commands/CountOpenWorkflowExecutionsCommand";
import {
  CountPendingActivityTasksCommand,
  CountPendingActivityTasksCommandInput,
  CountPendingActivityTasksCommandOutput,
} from "./commands/CountPendingActivityTasksCommand";
import {
  CountPendingDecisionTasksCommand,
  CountPendingDecisionTasksCommandInput,
  CountPendingDecisionTasksCommandOutput,
} from "./commands/CountPendingDecisionTasksCommand";
import {
  DeprecateActivityTypeCommand,
  DeprecateActivityTypeCommandInput,
  DeprecateActivityTypeCommandOutput,
} from "./commands/DeprecateActivityTypeCommand";
import {
  DeprecateDomainCommand,
  DeprecateDomainCommandInput,
  DeprecateDomainCommandOutput,
} from "./commands/DeprecateDomainCommand";
import {
  DeprecateWorkflowTypeCommand,
  DeprecateWorkflowTypeCommandInput,
  DeprecateWorkflowTypeCommandOutput,
} from "./commands/DeprecateWorkflowTypeCommand";
import {
  DescribeActivityTypeCommand,
  DescribeActivityTypeCommandInput,
  DescribeActivityTypeCommandOutput,
} from "./commands/DescribeActivityTypeCommand";
import {
  DescribeDomainCommand,
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput,
} from "./commands/DescribeDomainCommand";
import {
  DescribeWorkflowExecutionCommand,
  DescribeWorkflowExecutionCommandInput,
  DescribeWorkflowExecutionCommandOutput,
} from "./commands/DescribeWorkflowExecutionCommand";
import {
  DescribeWorkflowTypeCommand,
  DescribeWorkflowTypeCommandInput,
  DescribeWorkflowTypeCommandOutput,
} from "./commands/DescribeWorkflowTypeCommand";
import {
  GetWorkflowExecutionHistoryCommand,
  GetWorkflowExecutionHistoryCommandInput,
  GetWorkflowExecutionHistoryCommandOutput,
} from "./commands/GetWorkflowExecutionHistoryCommand";
import {
  ListActivityTypesCommand,
  ListActivityTypesCommandInput,
  ListActivityTypesCommandOutput,
} from "./commands/ListActivityTypesCommand";
import {
  ListClosedWorkflowExecutionsCommand,
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput,
} from "./commands/ListClosedWorkflowExecutionsCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListOpenWorkflowExecutionsCommand,
  ListOpenWorkflowExecutionsCommandInput,
  ListOpenWorkflowExecutionsCommandOutput,
} from "./commands/ListOpenWorkflowExecutionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkflowTypesCommand,
  ListWorkflowTypesCommandInput,
  ListWorkflowTypesCommandOutput,
} from "./commands/ListWorkflowTypesCommand";
import {
  PollForActivityTaskCommand,
  PollForActivityTaskCommandInput,
  PollForActivityTaskCommandOutput,
} from "./commands/PollForActivityTaskCommand";
import {
  PollForDecisionTaskCommand,
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput,
} from "./commands/PollForDecisionTaskCommand";
import {
  RecordActivityTaskHeartbeatCommand,
  RecordActivityTaskHeartbeatCommandInput,
  RecordActivityTaskHeartbeatCommandOutput,
} from "./commands/RecordActivityTaskHeartbeatCommand";
import {
  RegisterActivityTypeCommand,
  RegisterActivityTypeCommandInput,
  RegisterActivityTypeCommandOutput,
} from "./commands/RegisterActivityTypeCommand";
import {
  RegisterDomainCommand,
  RegisterDomainCommandInput,
  RegisterDomainCommandOutput,
} from "./commands/RegisterDomainCommand";
import {
  RegisterWorkflowTypeCommand,
  RegisterWorkflowTypeCommandInput,
  RegisterWorkflowTypeCommandOutput,
} from "./commands/RegisterWorkflowTypeCommand";
import {
  RequestCancelWorkflowExecutionCommand,
  RequestCancelWorkflowExecutionCommandInput,
  RequestCancelWorkflowExecutionCommandOutput,
} from "./commands/RequestCancelWorkflowExecutionCommand";
import {
  RespondActivityTaskCanceledCommand,
  RespondActivityTaskCanceledCommandInput,
  RespondActivityTaskCanceledCommandOutput,
} from "./commands/RespondActivityTaskCanceledCommand";
import {
  RespondActivityTaskCompletedCommand,
  RespondActivityTaskCompletedCommandInput,
  RespondActivityTaskCompletedCommandOutput,
} from "./commands/RespondActivityTaskCompletedCommand";
import {
  RespondActivityTaskFailedCommand,
  RespondActivityTaskFailedCommandInput,
  RespondActivityTaskFailedCommandOutput,
} from "./commands/RespondActivityTaskFailedCommand";
import {
  RespondDecisionTaskCompletedCommand,
  RespondDecisionTaskCompletedCommandInput,
  RespondDecisionTaskCompletedCommandOutput,
} from "./commands/RespondDecisionTaskCompletedCommand";
import {
  SignalWorkflowExecutionCommand,
  SignalWorkflowExecutionCommandInput,
  SignalWorkflowExecutionCommandOutput,
} from "./commands/SignalWorkflowExecutionCommand";
import {
  StartWorkflowExecutionCommand,
  StartWorkflowExecutionCommandInput,
  StartWorkflowExecutionCommandOutput,
} from "./commands/StartWorkflowExecutionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateWorkflowExecutionCommand,
  TerminateWorkflowExecutionCommandInput,
  TerminateWorkflowExecutionCommandOutput,
} from "./commands/TerminateWorkflowExecutionCommand";
import {
  UndeprecateActivityTypeCommand,
  UndeprecateActivityTypeCommandInput,
  UndeprecateActivityTypeCommandOutput,
} from "./commands/UndeprecateActivityTypeCommand";
import {
  UndeprecateDomainCommand,
  UndeprecateDomainCommandInput,
  UndeprecateDomainCommandOutput,
} from "./commands/UndeprecateDomainCommand";
import {
  UndeprecateWorkflowTypeCommand,
  UndeprecateWorkflowTypeCommandInput,
  UndeprecateWorkflowTypeCommandOutput,
} from "./commands/UndeprecateWorkflowTypeCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { SWFClient } from "./SWFClient";

/**
 * <fullname>Amazon Simple Workflow Service</fullname>
 *
 *          <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to
 *       coordinate work across distributed components. In Amazon SWF, a <i>task</i>
 *       represents a logical unit of work that is performed by a component of your workflow.
 *       Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and
 *       concurrency in accordance with the logical flow of the application.</p>
 *
 *          <p>Amazon SWF gives you full control over implementing tasks and coordinating them without
 *       worrying about underlying complexities such as tracking their progress and maintaining their
 *       state.</p>
 *
 *          <p>This documentation serves as reference only. For a broader overview of the Amazon SWF
 *       programming model, see the <i>
 *                <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a>
 *             </i>.</p>
 */
export class SWF extends SWFClient {
  /**
   * <p>Returns the number of closed workflow executions within the given domain that meet the
   *       specified filtering criteria.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>tagFilter.tag</code>: String constraint. The key is
   *                 <code>swf:tagFilter.tag</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>typeFilter.name</code>: String constraint. The key is
   *                 <code>swf:typeFilter.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>typeFilter.version</code>: String constraint. The key is
   *                 <code>swf:typeFilter.version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public countClosedWorkflowExecutions(
    args: CountClosedWorkflowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CountClosedWorkflowExecutionsCommandOutput>;
  public countClosedWorkflowExecutions(
    args: CountClosedWorkflowExecutionsCommandInput,
    cb: (err: any, data?: CountClosedWorkflowExecutionsCommandOutput) => void
  ): void;
  public countClosedWorkflowExecutions(
    args: CountClosedWorkflowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CountClosedWorkflowExecutionsCommandOutput) => void
  ): void;
  public countClosedWorkflowExecutions(
    args: CountClosedWorkflowExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CountClosedWorkflowExecutionsCommandOutput) => void),
    cb?: (err: any, data?: CountClosedWorkflowExecutionsCommandOutput) => void
  ): Promise<CountClosedWorkflowExecutionsCommandOutput> | void {
    const command = new CountClosedWorkflowExecutionsCommand(args);
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
   * <p>Returns the number of open workflow executions within the given domain that meet the
   *       specified filtering criteria.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>tagFilter.tag</code>: String constraint. The key is
   *                 <code>swf:tagFilter.tag</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>typeFilter.name</code>: String constraint. The key is
   *                 <code>swf:typeFilter.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>typeFilter.version</code>: String constraint. The key is
   *                 <code>swf:typeFilter.version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public countOpenWorkflowExecutions(
    args: CountOpenWorkflowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CountOpenWorkflowExecutionsCommandOutput>;
  public countOpenWorkflowExecutions(
    args: CountOpenWorkflowExecutionsCommandInput,
    cb: (err: any, data?: CountOpenWorkflowExecutionsCommandOutput) => void
  ): void;
  public countOpenWorkflowExecutions(
    args: CountOpenWorkflowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CountOpenWorkflowExecutionsCommandOutput) => void
  ): void;
  public countOpenWorkflowExecutions(
    args: CountOpenWorkflowExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CountOpenWorkflowExecutionsCommandOutput) => void),
    cb?: (err: any, data?: CountOpenWorkflowExecutionsCommandOutput) => void
  ): Promise<CountOpenWorkflowExecutionsCommandOutput> | void {
    const command = new CountOpenWorkflowExecutionsCommand(args);
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
   * <p>Returns the estimated number of activity tasks in the specified task list. The count
   *       returned is an approximation and isn't guaranteed to be exact. If you specify a task list that
   *       no activity task was ever scheduled in then <code>0</code> is returned.</p>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the <code>taskList.name</code> parameter by using a
   *             <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the
   *           action to access only certain task lists.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public countPendingActivityTasks(
    args: CountPendingActivityTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CountPendingActivityTasksCommandOutput>;
  public countPendingActivityTasks(
    args: CountPendingActivityTasksCommandInput,
    cb: (err: any, data?: CountPendingActivityTasksCommandOutput) => void
  ): void;
  public countPendingActivityTasks(
    args: CountPendingActivityTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CountPendingActivityTasksCommandOutput) => void
  ): void;
  public countPendingActivityTasks(
    args: CountPendingActivityTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CountPendingActivityTasksCommandOutput) => void),
    cb?: (err: any, data?: CountPendingActivityTasksCommandOutput) => void
  ): Promise<CountPendingActivityTasksCommandOutput> | void {
    const command = new CountPendingActivityTasksCommand(args);
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
   * <p>Returns the estimated number of decision tasks in the specified task list. The count
   *       returned is an approximation and isn't guaranteed to be exact. If you specify a task list that
   *       no decision task was ever scheduled in then <code>0</code> is returned.</p>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the <code>taskList.name</code> parameter by using a
   *             <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the
   *           action to access only certain task lists.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public countPendingDecisionTasks(
    args: CountPendingDecisionTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CountPendingDecisionTasksCommandOutput>;
  public countPendingDecisionTasks(
    args: CountPendingDecisionTasksCommandInput,
    cb: (err: any, data?: CountPendingDecisionTasksCommandOutput) => void
  ): void;
  public countPendingDecisionTasks(
    args: CountPendingDecisionTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CountPendingDecisionTasksCommandOutput) => void
  ): void;
  public countPendingDecisionTasks(
    args: CountPendingDecisionTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CountPendingDecisionTasksCommandOutput) => void),
    cb?: (err: any, data?: CountPendingDecisionTasksCommandOutput) => void
  ): Promise<CountPendingDecisionTasksCommandOutput> | void {
    const command = new CountPendingDecisionTasksCommand(args);
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
   * <p>Deprecates the specified <i>activity type</i>. After an activity type has
   *       been deprecated, you cannot create new tasks of that activity type. Tasks of this type that
   *       were scheduled before the type was deprecated continue to run.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>activityType.name</code>: String constraint. The key is
   *                 <code>swf:activityType.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>activityType.version</code>: String constraint. The key is
   *                 <code>swf:activityType.version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public deprecateActivityType(
    args: DeprecateActivityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateActivityTypeCommandOutput>;
  public deprecateActivityType(
    args: DeprecateActivityTypeCommandInput,
    cb: (err: any, data?: DeprecateActivityTypeCommandOutput) => void
  ): void;
  public deprecateActivityType(
    args: DeprecateActivityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateActivityTypeCommandOutput) => void
  ): void;
  public deprecateActivityType(
    args: DeprecateActivityTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeprecateActivityTypeCommandOutput) => void),
    cb?: (err: any, data?: DeprecateActivityTypeCommandOutput) => void
  ): Promise<DeprecateActivityTypeCommandOutput> | void {
    const command = new DeprecateActivityTypeCommand(args);
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
   * <p>Deprecates the specified domain. After a domain has been deprecated it cannot be used
   *       to create new workflow executions or register new types. However, you can still use visibility
   *       actions on this domain. Deprecating a domain also deprecates all activity and workflow types
   *       registered in the domain. Executions that were started before the domain was deprecated
   *       continues to run.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public deprecateDomain(
    args: DeprecateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateDomainCommandOutput>;
  public deprecateDomain(
    args: DeprecateDomainCommandInput,
    cb: (err: any, data?: DeprecateDomainCommandOutput) => void
  ): void;
  public deprecateDomain(
    args: DeprecateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateDomainCommandOutput) => void
  ): void;
  public deprecateDomain(
    args: DeprecateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeprecateDomainCommandOutput) => void),
    cb?: (err: any, data?: DeprecateDomainCommandOutput) => void
  ): Promise<DeprecateDomainCommandOutput> | void {
    const command = new DeprecateDomainCommand(args);
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
   * <p>Deprecates the specified <i>workflow type</i>. After a workflow type has
   *       been deprecated, you cannot create new executions of that type. Executions that were started
   *       before the type was deprecated continues to run. A deprecated workflow type may still be used
   *       when calling visibility actions.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>workflowType.name</code>: String constraint. The key is
   *                 <code>swf:workflowType.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>workflowType.version</code>: String constraint. The key is
   *                 <code>swf:workflowType.version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public deprecateWorkflowType(
    args: DeprecateWorkflowTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateWorkflowTypeCommandOutput>;
  public deprecateWorkflowType(
    args: DeprecateWorkflowTypeCommandInput,
    cb: (err: any, data?: DeprecateWorkflowTypeCommandOutput) => void
  ): void;
  public deprecateWorkflowType(
    args: DeprecateWorkflowTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateWorkflowTypeCommandOutput) => void
  ): void;
  public deprecateWorkflowType(
    args: DeprecateWorkflowTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeprecateWorkflowTypeCommandOutput) => void),
    cb?: (err: any, data?: DeprecateWorkflowTypeCommandOutput) => void
  ): Promise<DeprecateWorkflowTypeCommandOutput> | void {
    const command = new DeprecateWorkflowTypeCommand(args);
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
   * <p>Returns information about the specified activity type. This includes configuration
   *       settings provided when the type was registered and other general information about the
   *       type.</p>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>activityType.name</code>: String constraint. The key is
   *                 <code>swf:activityType.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>activityType.version</code>: String constraint. The key is
   *                 <code>swf:activityType.version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public describeActivityType(
    args: DescribeActivityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActivityTypeCommandOutput>;
  public describeActivityType(
    args: DescribeActivityTypeCommandInput,
    cb: (err: any, data?: DescribeActivityTypeCommandOutput) => void
  ): void;
  public describeActivityType(
    args: DescribeActivityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActivityTypeCommandOutput) => void
  ): void;
  public describeActivityType(
    args: DescribeActivityTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeActivityTypeCommandOutput) => void),
    cb?: (err: any, data?: DescribeActivityTypeCommandOutput) => void
  ): Promise<DescribeActivityTypeCommandOutput> | void {
    const command = new DescribeActivityTypeCommand(args);
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
   * <p>Returns information about the specified domain, including description and
   *       status.</p>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  public describeDomain(
    args: DescribeDomainCommandInput,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainCommandOutput) => void
  ): Promise<DescribeDomainCommandOutput> | void {
    const command = new DescribeDomainCommand(args);
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
   * <p>Returns information about the specified workflow execution including its type and some
   *       statistics.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public describeWorkflowExecution(
    args: DescribeWorkflowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkflowExecutionCommandOutput>;
  public describeWorkflowExecution(
    args: DescribeWorkflowExecutionCommandInput,
    cb: (err: any, data?: DescribeWorkflowExecutionCommandOutput) => void
  ): void;
  public describeWorkflowExecution(
    args: DescribeWorkflowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkflowExecutionCommandOutput) => void
  ): void;
  public describeWorkflowExecution(
    args: DescribeWorkflowExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkflowExecutionCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkflowExecutionCommandOutput) => void
  ): Promise<DescribeWorkflowExecutionCommandOutput> | void {
    const command = new DescribeWorkflowExecutionCommand(args);
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
   * <p>Returns information about the specified <i>workflow type</i>. This
   *       includes configuration settings specified when the type was registered and other information
   *       such as creation date, current status, etc.</p>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>workflowType.name</code>: String constraint. The key is
   *                 <code>swf:workflowType.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>workflowType.version</code>: String constraint. The key is
   *                 <code>swf:workflowType.version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public describeWorkflowType(
    args: DescribeWorkflowTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkflowTypeCommandOutput>;
  public describeWorkflowType(
    args: DescribeWorkflowTypeCommandInput,
    cb: (err: any, data?: DescribeWorkflowTypeCommandOutput) => void
  ): void;
  public describeWorkflowType(
    args: DescribeWorkflowTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkflowTypeCommandOutput) => void
  ): void;
  public describeWorkflowType(
    args: DescribeWorkflowTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWorkflowTypeCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkflowTypeCommandOutput) => void
  ): Promise<DescribeWorkflowTypeCommandOutput> | void {
    const command = new DescribeWorkflowTypeCommand(args);
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
   * <p>Returns the history of the specified workflow execution. The results may be split into
   *       multiple pages. To retrieve subsequent pages, make the call again using the
   *         <code>nextPageToken</code> returned by the initial call.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public getWorkflowExecutionHistory(
    args: GetWorkflowExecutionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowExecutionHistoryCommandOutput>;
  public getWorkflowExecutionHistory(
    args: GetWorkflowExecutionHistoryCommandInput,
    cb: (err: any, data?: GetWorkflowExecutionHistoryCommandOutput) => void
  ): void;
  public getWorkflowExecutionHistory(
    args: GetWorkflowExecutionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowExecutionHistoryCommandOutput) => void
  ): void;
  public getWorkflowExecutionHistory(
    args: GetWorkflowExecutionHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowExecutionHistoryCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowExecutionHistoryCommandOutput) => void
  ): Promise<GetWorkflowExecutionHistoryCommandOutput> | void {
    const command = new GetWorkflowExecutionHistoryCommand(args);
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
   * <p>Returns information about all activities registered in the specified domain that match
   *       the specified name and registration status. The result includes information like creation
   *       date, current status of the activity, etc. The results may be split into multiple pages. To
   *       retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned
   *       by the initial call.</p>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public listActivityTypes(
    args: ListActivityTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActivityTypesCommandOutput>;
  public listActivityTypes(
    args: ListActivityTypesCommandInput,
    cb: (err: any, data?: ListActivityTypesCommandOutput) => void
  ): void;
  public listActivityTypes(
    args: ListActivityTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActivityTypesCommandOutput) => void
  ): void;
  public listActivityTypes(
    args: ListActivityTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListActivityTypesCommandOutput) => void),
    cb?: (err: any, data?: ListActivityTypesCommandOutput) => void
  ): Promise<ListActivityTypesCommandOutput> | void {
    const command = new ListActivityTypesCommand(args);
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
   * <p>Returns a list of closed workflow executions in the specified domain that meet the
   *       filtering criteria. The results may be split into multiple pages. To retrieve subsequent
   *       pages, make the call again using the nextPageToken returned by the initial call.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>tagFilter.tag</code>: String constraint. The key is
   *                 <code>swf:tagFilter.tag</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>typeFilter.name</code>: String constraint. The key is
   *                 <code>swf:typeFilter.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>typeFilter.version</code>: String constraint. The key is
   *                 <code>swf:typeFilter.version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public listClosedWorkflowExecutions(
    args: ListClosedWorkflowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClosedWorkflowExecutionsCommandOutput>;
  public listClosedWorkflowExecutions(
    args: ListClosedWorkflowExecutionsCommandInput,
    cb: (err: any, data?: ListClosedWorkflowExecutionsCommandOutput) => void
  ): void;
  public listClosedWorkflowExecutions(
    args: ListClosedWorkflowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClosedWorkflowExecutionsCommandOutput) => void
  ): void;
  public listClosedWorkflowExecutions(
    args: ListClosedWorkflowExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListClosedWorkflowExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListClosedWorkflowExecutionsCommandOutput) => void
  ): Promise<ListClosedWorkflowExecutionsCommandOutput> | void {
    const command = new ListClosedWorkflowExecutionsCommand(args);
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
   * <p>Returns the list of domains registered in the account. The results may be split into
   *       multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken
   *       returned by the initial call.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains. The element must be set to
   *             <code>arn:aws:swf::AccountID:domain/*</code>, where <i>AccountID</i> is
   *           the account ID, with no dashes.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  public listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  public listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainsCommandOutput) => void
  ): Promise<ListDomainsCommandOutput> | void {
    const command = new ListDomainsCommand(args);
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
   * <p>Returns a list of open workflow executions in the specified domain that meet the
   *       filtering criteria. The results may be split into multiple pages. To retrieve subsequent
   *       pages, make the call again using the nextPageToken returned by the initial call.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>tagFilter.tag</code>: String constraint. The key is
   *                 <code>swf:tagFilter.tag</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>typeFilter.name</code>: String constraint. The key is
   *                 <code>swf:typeFilter.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>typeFilter.version</code>: String constraint. The key is
   *                 <code>swf:typeFilter.version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public listOpenWorkflowExecutions(
    args: ListOpenWorkflowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpenWorkflowExecutionsCommandOutput>;
  public listOpenWorkflowExecutions(
    args: ListOpenWorkflowExecutionsCommandInput,
    cb: (err: any, data?: ListOpenWorkflowExecutionsCommandOutput) => void
  ): void;
  public listOpenWorkflowExecutions(
    args: ListOpenWorkflowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpenWorkflowExecutionsCommandOutput) => void
  ): void;
  public listOpenWorkflowExecutions(
    args: ListOpenWorkflowExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOpenWorkflowExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListOpenWorkflowExecutionsCommandOutput) => void
  ): Promise<ListOpenWorkflowExecutionsCommandOutput> | void {
    const command = new ListOpenWorkflowExecutionsCommand(args);
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
   * <p>List tags for a given domain.</p>
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
   * <p>Returns information about workflow types in the specified domain. The results may be
   *       split into multiple pages that can be retrieved by making the call repeatedly.</p>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public listWorkflowTypes(
    args: ListWorkflowTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowTypesCommandOutput>;
  public listWorkflowTypes(
    args: ListWorkflowTypesCommandInput,
    cb: (err: any, data?: ListWorkflowTypesCommandOutput) => void
  ): void;
  public listWorkflowTypes(
    args: ListWorkflowTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowTypesCommandOutput) => void
  ): void;
  public listWorkflowTypes(
    args: ListWorkflowTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkflowTypesCommandOutput) => void),
    cb?: (err: any, data?: ListWorkflowTypesCommandOutput) => void
  ): Promise<ListWorkflowTypesCommandOutput> | void {
    const command = new ListWorkflowTypesCommand(args);
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
   * <p>Used by workers to get an <a>ActivityTask</a> from the specified activity
   *         <code>taskList</code>. This initiates a long poll, where the service holds the HTTP
   *       connection open and responds as soon as a task becomes available. The maximum time the service
   *       holds on to the request before responding is 60 seconds. If no task is available within 60
   *       seconds, the poll returns an empty result. An empty result, in this context, means that an
   *       ActivityTask is returned, but that the value of taskToken is an empty string. If a task is
   *       returned, the worker should use its type to identify and process it correctly.</p>
   *          <important>
   *             <p>Workers should set their client side socket timeout to at least 70 seconds (10
   *         seconds higher than the maximum time service may hold the poll request).</p>
   *          </important>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the <code>taskList.name</code> parameter by using a
   *             <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the
   *           action to access only certain task lists.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public pollForActivityTask(
    args: PollForActivityTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PollForActivityTaskCommandOutput>;
  public pollForActivityTask(
    args: PollForActivityTaskCommandInput,
    cb: (err: any, data?: PollForActivityTaskCommandOutput) => void
  ): void;
  public pollForActivityTask(
    args: PollForActivityTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PollForActivityTaskCommandOutput) => void
  ): void;
  public pollForActivityTask(
    args: PollForActivityTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PollForActivityTaskCommandOutput) => void),
    cb?: (err: any, data?: PollForActivityTaskCommandOutput) => void
  ): Promise<PollForActivityTaskCommandOutput> | void {
    const command = new PollForActivityTaskCommand(args);
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
   * <p>Used by deciders to get a <a>DecisionTask</a> from the specified decision
   *         <code>taskList</code>. A decision task may be returned for any open workflow execution that
   *       is using the specified task list. The task includes a paginated view of the history of the
   *       workflow execution. The decider should use the workflow type and the history to determine how
   *       to properly handle the task.</p>
   *          <p>This action initiates a long poll, where the service holds the HTTP connection open and
   *       responds as soon a task becomes available. If no decision task is available in the specified
   *       task list before the timeout of 60 seconds expires, an empty result is returned. An empty
   *       result, in this context, means that a DecisionTask is returned, but that the value of
   *       taskToken is an empty string.</p>
   *          <important>
   *             <p>Deciders should set their client side socket timeout to at least 70 seconds (10
   *         seconds higher than the timeout).</p>
   *          </important>
   *          <important>
   *             <p>Because the number of workflow history events for a single workflow execution might
   *         be very large, the result returned might be split up across a number of pages. To retrieve
   *         subsequent pages, make additional calls to <code>PollForDecisionTask</code> using the
   *           <code>nextPageToken</code> returned by the initial call. Note that you do
   *           <i>not</i> call <code>GetWorkflowExecutionHistory</code> with this
   *           <code>nextPageToken</code>. Instead, call <code>PollForDecisionTask</code>
   *         again.</p>
   *          </important>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the <code>taskList.name</code> parameter by using a
   *             <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the
   *           action to access only certain task lists.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public pollForDecisionTask(
    args: PollForDecisionTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PollForDecisionTaskCommandOutput>;
  public pollForDecisionTask(
    args: PollForDecisionTaskCommandInput,
    cb: (err: any, data?: PollForDecisionTaskCommandOutput) => void
  ): void;
  public pollForDecisionTask(
    args: PollForDecisionTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PollForDecisionTaskCommandOutput) => void
  ): void;
  public pollForDecisionTask(
    args: PollForDecisionTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PollForDecisionTaskCommandOutput) => void),
    cb?: (err: any, data?: PollForDecisionTaskCommandOutput) => void
  ): Promise<PollForDecisionTaskCommandOutput> | void {
    const command = new PollForDecisionTaskCommand(args);
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
   * <p>Used by activity workers to report to the service that the <a>ActivityTask</a> represented by the specified <code>taskToken</code> is still making progress. The worker
   *       can also specify details of the progress, for example percent complete, using the
   *         <code>details</code> parameter. This action can also be used by the worker as a mechanism to
   *       check if cancellation is being requested for the activity task. If a cancellation is being
   *       attempted for the specified task, then the boolean <code>cancelRequested</code> flag returned
   *       by the service is set to <code>true</code>.</p>
   *          <p>This action resets the <code>taskHeartbeatTimeout</code> clock. The
   *         <code>taskHeartbeatTimeout</code> is specified in <a>RegisterActivityType</a>.</p>
   *          <p>This action doesn't in itself create an event in the workflow execution history.
   *       However, if the task times out, the workflow execution history contains a
   *         <code>ActivityTaskTimedOut</code> event that contains the information from the last
   *       heartbeat generated by the activity worker.</p>
   *          <note>
   *             <p>The <code>taskStartToCloseTimeout</code> of an activity type is the maximum duration
   *         of an activity task, regardless of the number of <a>RecordActivityTaskHeartbeat</a> requests received. The <code>taskStartToCloseTimeout</code> is also specified in <a>RegisterActivityType</a>.</p>
   *          </note>
   *          <note>
   *             <p>This operation is only useful for long-lived activities to report liveliness of the
   *         task and to determine if a cancellation is being attempted.</p>
   *          </note>
   *          <important>
   *             <p>If the <code>cancelRequested</code> flag returns <code>true</code>, a cancellation is
   *         being attempted. If the worker can cancel the activity, it should respond with <a>RespondActivityTaskCanceled</a>. Otherwise, it should ignore the cancellation
   *         request.</p>
   *          </important>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public recordActivityTaskHeartbeat(
    args: RecordActivityTaskHeartbeatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecordActivityTaskHeartbeatCommandOutput>;
  public recordActivityTaskHeartbeat(
    args: RecordActivityTaskHeartbeatCommandInput,
    cb: (err: any, data?: RecordActivityTaskHeartbeatCommandOutput) => void
  ): void;
  public recordActivityTaskHeartbeat(
    args: RecordActivityTaskHeartbeatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecordActivityTaskHeartbeatCommandOutput) => void
  ): void;
  public recordActivityTaskHeartbeat(
    args: RecordActivityTaskHeartbeatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RecordActivityTaskHeartbeatCommandOutput) => void),
    cb?: (err: any, data?: RecordActivityTaskHeartbeatCommandOutput) => void
  ): Promise<RecordActivityTaskHeartbeatCommandOutput> | void {
    const command = new RecordActivityTaskHeartbeatCommand(args);
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
   * <p>Registers a new <i>activity type</i> along with its configuration
   *       settings in the specified domain.</p>
   *          <important>
   *             <p>A <code>TypeAlreadyExists</code> fault is returned if the type already exists in the
   *         domain. You cannot change any configuration settings of the type after its registration, and
   *         it must be registered as a new version.</p>
   *          </important>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>defaultTaskList.name</code>: String constraint. The key is
   *                 <code>swf:defaultTaskList.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>name</code>: String constraint. The key is <code>swf:name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>version</code>: String constraint. The key is
   *               <code>swf:version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public registerActivityType(
    args: RegisterActivityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterActivityTypeCommandOutput>;
  public registerActivityType(
    args: RegisterActivityTypeCommandInput,
    cb: (err: any, data?: RegisterActivityTypeCommandOutput) => void
  ): void;
  public registerActivityType(
    args: RegisterActivityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterActivityTypeCommandOutput) => void
  ): void;
  public registerActivityType(
    args: RegisterActivityTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterActivityTypeCommandOutput) => void),
    cb?: (err: any, data?: RegisterActivityTypeCommandOutput) => void
  ): Promise<RegisterActivityTypeCommandOutput> | void {
    const command = new RegisterActivityTypeCommand(args);
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
   * <p>Registers a new domain.</p>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>You cannot use an IAM policy to control domain access for this action. The name of
   *           the domain being registered is available as the resource of this action.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public registerDomain(
    args: RegisterDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDomainCommandOutput>;
  public registerDomain(
    args: RegisterDomainCommandInput,
    cb: (err: any, data?: RegisterDomainCommandOutput) => void
  ): void;
  public registerDomain(
    args: RegisterDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDomainCommandOutput) => void
  ): void;
  public registerDomain(
    args: RegisterDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterDomainCommandOutput) => void),
    cb?: (err: any, data?: RegisterDomainCommandOutput) => void
  ): Promise<RegisterDomainCommandOutput> | void {
    const command = new RegisterDomainCommand(args);
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
   * <p>Registers a new <i>workflow type</i> and its configuration settings in
   *       the specified domain.</p>
   *          <p>The retention period for the workflow history is set by the <a>RegisterDomain</a> action.</p>
   *          <important>
   *             <p>If the type already exists, then a <code>TypeAlreadyExists</code> fault is returned.
   *         You cannot change the configuration settings of a workflow type once it is registered and it
   *         must be registered as a new version.</p>
   *          </important>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>defaultTaskList.name</code>: String constraint. The key is
   *                 <code>swf:defaultTaskList.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>name</code>: String constraint. The key is <code>swf:name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>version</code>: String constraint. The key is
   *               <code>swf:version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public registerWorkflowType(
    args: RegisterWorkflowTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterWorkflowTypeCommandOutput>;
  public registerWorkflowType(
    args: RegisterWorkflowTypeCommandInput,
    cb: (err: any, data?: RegisterWorkflowTypeCommandOutput) => void
  ): void;
  public registerWorkflowType(
    args: RegisterWorkflowTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterWorkflowTypeCommandOutput) => void
  ): void;
  public registerWorkflowType(
    args: RegisterWorkflowTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterWorkflowTypeCommandOutput) => void),
    cb?: (err: any, data?: RegisterWorkflowTypeCommandOutput) => void
  ): Promise<RegisterWorkflowTypeCommandOutput> | void {
    const command = new RegisterWorkflowTypeCommand(args);
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
   * <p>Records a <code>WorkflowExecutionCancelRequested</code> event in the currently running
   *       workflow execution identified by the given domain, workflowId, and runId. This logically
   *       requests the cancellation of the workflow execution as a whole. It is up to the decider to
   *       take appropriate actions when it receives an execution history with this event.</p>
   *
   *          <note>
   *             <p>If the runId isn't specified, the <code>WorkflowExecutionCancelRequested</code> event
   *         is recorded in the history of the current open workflow execution with the specified
   *         workflowId in the domain.</p>
   *          </note>
   *
   *          <note>
   *             <p>Because this action allows the workflow to properly clean up and gracefully close, it
   *         should be used instead of <a>TerminateWorkflowExecution</a> when
   *         possible.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public requestCancelWorkflowExecution(
    args: RequestCancelWorkflowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestCancelWorkflowExecutionCommandOutput>;
  public requestCancelWorkflowExecution(
    args: RequestCancelWorkflowExecutionCommandInput,
    cb: (err: any, data?: RequestCancelWorkflowExecutionCommandOutput) => void
  ): void;
  public requestCancelWorkflowExecution(
    args: RequestCancelWorkflowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestCancelWorkflowExecutionCommandOutput) => void
  ): void;
  public requestCancelWorkflowExecution(
    args: RequestCancelWorkflowExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RequestCancelWorkflowExecutionCommandOutput) => void),
    cb?: (err: any, data?: RequestCancelWorkflowExecutionCommandOutput) => void
  ): Promise<RequestCancelWorkflowExecutionCommandOutput> | void {
    const command = new RequestCancelWorkflowExecutionCommand(args);
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
   * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified
   *       by the <code>taskToken</code> was successfully canceled. Additional <code>details</code> can
   *       be provided using the <code>details</code> argument.</p>
   *
   *          <p>These <code>details</code> (if provided) appear in the
   *         <code>ActivityTaskCanceled</code> event added to the workflow history.</p>
   *
   *          <important>
   *             <p>Only use this operation if the <code>canceled</code> flag of a <a>RecordActivityTaskHeartbeat</a> request returns <code>true</code> and if the
   *         activity can be safely undone or abandoned.</p>
   *          </important>
   *
   *          <p>A task is considered open from the time that it is scheduled until it is closed.
   *       Therefore a task is reported as open while a worker is processing it. A task is closed after
   *       it has been specified in a call to <a>RespondActivityTaskCompleted</a>,
   *       RespondActivityTaskCanceled, <a>RespondActivityTaskFailed</a>, or the task has
   *         <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed
   *         out</a>.</p>
   *
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public respondActivityTaskCanceled(
    args: RespondActivityTaskCanceledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RespondActivityTaskCanceledCommandOutput>;
  public respondActivityTaskCanceled(
    args: RespondActivityTaskCanceledCommandInput,
    cb: (err: any, data?: RespondActivityTaskCanceledCommandOutput) => void
  ): void;
  public respondActivityTaskCanceled(
    args: RespondActivityTaskCanceledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RespondActivityTaskCanceledCommandOutput) => void
  ): void;
  public respondActivityTaskCanceled(
    args: RespondActivityTaskCanceledCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RespondActivityTaskCanceledCommandOutput) => void),
    cb?: (err: any, data?: RespondActivityTaskCanceledCommandOutput) => void
  ): Promise<RespondActivityTaskCanceledCommandOutput> | void {
    const command = new RespondActivityTaskCanceledCommand(args);
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
   * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified
   *       by the <code>taskToken</code> completed successfully with a <code>result</code> (if provided).
   *       The <code>result</code> appears in the <code>ActivityTaskCompleted</code> event in the
   *       workflow history.</p>
   *
   *          <important>
   *             <p>If the requested task doesn't complete successfully, use <a>RespondActivityTaskFailed</a> instead. If the worker finds that the task is
   *         canceled through the <code>canceled</code> flag returned by <a>RecordActivityTaskHeartbeat</a>, it should cancel the task, clean up and then call
   *           <a>RespondActivityTaskCanceled</a>.</p>
   *          </important>
   *
   *          <p>A task is considered open from the time that it is scheduled until it is closed.
   *       Therefore a task is reported as open while a worker is processing it. A task is closed after
   *       it has been specified in a call to RespondActivityTaskCompleted, <a>RespondActivityTaskCanceled</a>, <a>RespondActivityTaskFailed</a>, or the
   *       task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed
   *         out</a>.</p>
   *
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public respondActivityTaskCompleted(
    args: RespondActivityTaskCompletedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RespondActivityTaskCompletedCommandOutput>;
  public respondActivityTaskCompleted(
    args: RespondActivityTaskCompletedCommandInput,
    cb: (err: any, data?: RespondActivityTaskCompletedCommandOutput) => void
  ): void;
  public respondActivityTaskCompleted(
    args: RespondActivityTaskCompletedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RespondActivityTaskCompletedCommandOutput) => void
  ): void;
  public respondActivityTaskCompleted(
    args: RespondActivityTaskCompletedCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RespondActivityTaskCompletedCommandOutput) => void),
    cb?: (err: any, data?: RespondActivityTaskCompletedCommandOutput) => void
  ): Promise<RespondActivityTaskCompletedCommandOutput> | void {
    const command = new RespondActivityTaskCompletedCommand(args);
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
   * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified
   *       by the <code>taskToken</code> has failed with <code>reason</code> (if specified). The
   *         <code>reason</code> and <code>details</code> appear in the <code>ActivityTaskFailed</code>
   *       event added to the workflow history.</p>
   *
   *          <p>A task is considered open from the time that it is scheduled until it is closed.
   *       Therefore a task is reported as open while a worker is processing it. A task is closed after
   *       it has been specified in a call to <a>RespondActivityTaskCompleted</a>, <a>RespondActivityTaskCanceled</a>, RespondActivityTaskFailed, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed
   *         out</a>.</p>
   *
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public respondActivityTaskFailed(
    args: RespondActivityTaskFailedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RespondActivityTaskFailedCommandOutput>;
  public respondActivityTaskFailed(
    args: RespondActivityTaskFailedCommandInput,
    cb: (err: any, data?: RespondActivityTaskFailedCommandOutput) => void
  ): void;
  public respondActivityTaskFailed(
    args: RespondActivityTaskFailedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RespondActivityTaskFailedCommandOutput) => void
  ): void;
  public respondActivityTaskFailed(
    args: RespondActivityTaskFailedCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RespondActivityTaskFailedCommandOutput) => void),
    cb?: (err: any, data?: RespondActivityTaskFailedCommandOutput) => void
  ): Promise<RespondActivityTaskFailedCommandOutput> | void {
    const command = new RespondActivityTaskFailedCommand(args);
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
   * <p>Used by deciders to tell the service that the <a>DecisionTask</a> identified
   *       by the <code>taskToken</code> has successfully completed. The <code>decisions</code> argument
   *       specifies the list of decisions made while processing the task.</p>
   *
   *          <p>A <code>DecisionTaskCompleted</code> event is added to the workflow history. The
   *         <code>executionContext</code> specified is attached to the event in the workflow execution
   *       history.</p>
   *
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *
   *          <p>If an IAM policy grants permission to use <code>RespondDecisionTaskCompleted</code>, it
   *       can express permissions for the list of decisions in the <code>decisions</code> parameter.
   *       Each of the decisions has one or more parameters, much like a regular API call. To allow for
   *       policies to be as readable as possible, you can express permissions on decisions as if they
   *       were actual API calls, including applying conditions to some parameters. For more information,
   *       see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using
   *         IAM to Manage Access to Amazon SWF Workflows</a> in the
   *       <i>Amazon SWF Developer Guide</i>.</p>
   */
  public respondDecisionTaskCompleted(
    args: RespondDecisionTaskCompletedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RespondDecisionTaskCompletedCommandOutput>;
  public respondDecisionTaskCompleted(
    args: RespondDecisionTaskCompletedCommandInput,
    cb: (err: any, data?: RespondDecisionTaskCompletedCommandOutput) => void
  ): void;
  public respondDecisionTaskCompleted(
    args: RespondDecisionTaskCompletedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RespondDecisionTaskCompletedCommandOutput) => void
  ): void;
  public respondDecisionTaskCompleted(
    args: RespondDecisionTaskCompletedCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RespondDecisionTaskCompletedCommandOutput) => void),
    cb?: (err: any, data?: RespondDecisionTaskCompletedCommandOutput) => void
  ): Promise<RespondDecisionTaskCompletedCommandOutput> | void {
    const command = new RespondDecisionTaskCompletedCommand(args);
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
   * <p>Records a <code>WorkflowExecutionSignaled</code> event in the workflow execution
   *       history and creates a decision task for the workflow execution identified by the given domain,
   *       workflowId and runId. The event is recorded with the specified user defined signalName and
   *       input (if provided).</p>
   *
   *          <note>
   *             <p>If a runId isn't specified, then the <code>WorkflowExecutionSignaled</code> event is
   *         recorded in the history of the current open workflow with the matching workflowId in the
   *         domain.</p>
   *          </note>
   *
   *          <note>
   *             <p>If the specified workflow execution isn't open, this method fails with
   *           <code>UnknownResource</code>.</p>
   *          </note>
   *
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public signalWorkflowExecution(
    args: SignalWorkflowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SignalWorkflowExecutionCommandOutput>;
  public signalWorkflowExecution(
    args: SignalWorkflowExecutionCommandInput,
    cb: (err: any, data?: SignalWorkflowExecutionCommandOutput) => void
  ): void;
  public signalWorkflowExecution(
    args: SignalWorkflowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignalWorkflowExecutionCommandOutput) => void
  ): void;
  public signalWorkflowExecution(
    args: SignalWorkflowExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SignalWorkflowExecutionCommandOutput) => void),
    cb?: (err: any, data?: SignalWorkflowExecutionCommandOutput) => void
  ): Promise<SignalWorkflowExecutionCommandOutput> | void {
    const command = new SignalWorkflowExecutionCommand(args);
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
   * <p>Starts an execution of the workflow type in the specified domain using the provided
   *         <code>workflowId</code> and input data.</p>
   *
   *          <p>This action returns the newly started workflow execution.</p>
   *
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>tagList.member.0</code>: The key is <code>swf:tagList.member.0</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>tagList.member.1</code>: The key is <code>swf:tagList.member.1</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>tagList.member.2</code>: The key is <code>swf:tagList.member.2</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>tagList.member.3</code>: The key is <code>swf:tagList.member.3</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>tagList.member.4</code>: The key is <code>swf:tagList.member.4</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>taskList</code>: String constraint. The key is
   *               <code>swf:taskList.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>workflowType.name</code>: String constraint. The key is
   *                 <code>swf:workflowType.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>workflowType.version</code>: String constraint. The key is
   *                 <code>swf:workflowType.version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public startWorkflowExecution(
    args: StartWorkflowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWorkflowExecutionCommandOutput>;
  public startWorkflowExecution(
    args: StartWorkflowExecutionCommandInput,
    cb: (err: any, data?: StartWorkflowExecutionCommandOutput) => void
  ): void;
  public startWorkflowExecution(
    args: StartWorkflowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkflowExecutionCommandOutput) => void
  ): void;
  public startWorkflowExecution(
    args: StartWorkflowExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartWorkflowExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartWorkflowExecutionCommandOutput) => void
  ): Promise<StartWorkflowExecutionCommandOutput> | void {
    const command = new StartWorkflowExecutionCommand(args);
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
   * <p>Add a tag to a Amazon SWF domain.</p>
   *          <note>
   *             <p>Amazon SWF supports a maximum of 50 tags per resource.</p>
   *          </note>
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
   * <p>Records a <code>WorkflowExecutionTerminated</code> event and forces closure of the
   *       workflow execution identified by the given domain, runId, and workflowId. The child policy,
   *       registered with the workflow type or specified when starting this execution, is applied to any
   *       open child workflow executions of this workflow execution.</p>
   *
   *          <important>
   *             <p>If the identified workflow execution was in progress, it is terminated
   *         immediately.</p>
   *          </important>
   *
   *          <note>
   *             <p>If a runId isn't specified, then the <code>WorkflowExecutionTerminated</code> event
   *         is recorded in the history of the current open workflow with the matching workflowId in the
   *         domain.</p>
   *          </note>
   *
   *          <note>
   *             <p>You should consider using <a>RequestCancelWorkflowExecution</a> action
   *         instead because it allows the workflow to gracefully close while <a>TerminateWorkflowExecution</a> doesn't.</p>
   *          </note>
   *
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public terminateWorkflowExecution(
    args: TerminateWorkflowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateWorkflowExecutionCommandOutput>;
  public terminateWorkflowExecution(
    args: TerminateWorkflowExecutionCommandInput,
    cb: (err: any, data?: TerminateWorkflowExecutionCommandOutput) => void
  ): void;
  public terminateWorkflowExecution(
    args: TerminateWorkflowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateWorkflowExecutionCommandOutput) => void
  ): void;
  public terminateWorkflowExecution(
    args: TerminateWorkflowExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TerminateWorkflowExecutionCommandOutput) => void),
    cb?: (err: any, data?: TerminateWorkflowExecutionCommandOutput) => void
  ): Promise<TerminateWorkflowExecutionCommandOutput> | void {
    const command = new TerminateWorkflowExecutionCommand(args);
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
   * <p>Undeprecates a previously deprecated <i>activity type</i>. After an activity type has
   *       been undeprecated, you can create new tasks of that activity type.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>activityType.name</code>: String constraint. The key is
   *               <code>swf:activityType.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>activityType.version</code>: String constraint. The key is
   *               <code>swf:activityType.version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public undeprecateActivityType(
    args: UndeprecateActivityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UndeprecateActivityTypeCommandOutput>;
  public undeprecateActivityType(
    args: UndeprecateActivityTypeCommandInput,
    cb: (err: any, data?: UndeprecateActivityTypeCommandOutput) => void
  ): void;
  public undeprecateActivityType(
    args: UndeprecateActivityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UndeprecateActivityTypeCommandOutput) => void
  ): void;
  public undeprecateActivityType(
    args: UndeprecateActivityTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UndeprecateActivityTypeCommandOutput) => void),
    cb?: (err: any, data?: UndeprecateActivityTypeCommandOutput) => void
  ): Promise<UndeprecateActivityTypeCommandOutput> | void {
    const command = new UndeprecateActivityTypeCommand(args);
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
   * <p>Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used
   *       to create new workflow executions or register new types.</p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public undeprecateDomain(
    args: UndeprecateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UndeprecateDomainCommandOutput>;
  public undeprecateDomain(
    args: UndeprecateDomainCommandInput,
    cb: (err: any, data?: UndeprecateDomainCommandOutput) => void
  ): void;
  public undeprecateDomain(
    args: UndeprecateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UndeprecateDomainCommandOutput) => void
  ): void;
  public undeprecateDomain(
    args: UndeprecateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UndeprecateDomainCommandOutput) => void),
    cb?: (err: any, data?: UndeprecateDomainCommandOutput) => void
  ): Promise<UndeprecateDomainCommandOutput> | void {
    const command = new UndeprecateDomainCommand(args);
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
   * <p>Undeprecates a previously deprecated <i>workflow type</i>. After a workflow type has
   *       been undeprecated, you can create new executions of that type. </p>
   *          <note>
   *             <p>This operation is eventually consistent. The results are best effort and may not
   *         exactly reflect recent updates and changes.</p>
   *          </note>
   *          <p>
   *             <b>Access Control</b>
   *          </p>
   *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
   *           only specified domains.</p>
   *             </li>
   *             <li>
   *                <p>Use an <code>Action</code> element to allow or deny permission to call this
   *           action.</p>
   *             </li>
   *             <li>
   *                <p>Constrain the following parameters by using a <code>Condition</code> element with
   *           the appropriate keys.</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>workflowType.name</code>: String constraint. The key is
   *               <code>swf:workflowType.name</code>.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>workflowType.version</code>: String constraint. The key is
   *               <code>swf:workflowType.version</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
   *       parameter values fall outside the specified constraints, the action fails. The associated
   *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
   *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
   *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
   */
  public undeprecateWorkflowType(
    args: UndeprecateWorkflowTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UndeprecateWorkflowTypeCommandOutput>;
  public undeprecateWorkflowType(
    args: UndeprecateWorkflowTypeCommandInput,
    cb: (err: any, data?: UndeprecateWorkflowTypeCommandOutput) => void
  ): void;
  public undeprecateWorkflowType(
    args: UndeprecateWorkflowTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UndeprecateWorkflowTypeCommandOutput) => void
  ): void;
  public undeprecateWorkflowType(
    args: UndeprecateWorkflowTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UndeprecateWorkflowTypeCommandOutput) => void),
    cb?: (err: any, data?: UndeprecateWorkflowTypeCommandOutput) => void
  ): Promise<UndeprecateWorkflowTypeCommandOutput> | void {
    const command = new UndeprecateWorkflowTypeCommand(args);
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
   * <p>Remove a tag from a Amazon SWF domain.</p>
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
}
