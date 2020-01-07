import { SWFClient } from "./SWFClient";
import { CountClosedWorkflowExecutionsCommandInput, CountClosedWorkflowExecutionsCommandOutput } from "./commands/CountClosedWorkflowExecutionsCommand";
import { CountOpenWorkflowExecutionsCommandInput, CountOpenWorkflowExecutionsCommandOutput } from "./commands/CountOpenWorkflowExecutionsCommand";
import { CountPendingActivityTasksCommandInput, CountPendingActivityTasksCommandOutput } from "./commands/CountPendingActivityTasksCommand";
import { CountPendingDecisionTasksCommandInput, CountPendingDecisionTasksCommandOutput } from "./commands/CountPendingDecisionTasksCommand";
import { DeprecateActivityTypeCommandInput, DeprecateActivityTypeCommandOutput } from "./commands/DeprecateActivityTypeCommand";
import { DeprecateDomainCommandInput, DeprecateDomainCommandOutput } from "./commands/DeprecateDomainCommand";
import { DeprecateWorkflowTypeCommandInput, DeprecateWorkflowTypeCommandOutput } from "./commands/DeprecateWorkflowTypeCommand";
import { DescribeActivityTypeCommandInput, DescribeActivityTypeCommandOutput } from "./commands/DescribeActivityTypeCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import { DescribeWorkflowExecutionCommandInput, DescribeWorkflowExecutionCommandOutput } from "./commands/DescribeWorkflowExecutionCommand";
import { DescribeWorkflowTypeCommandInput, DescribeWorkflowTypeCommandOutput } from "./commands/DescribeWorkflowTypeCommand";
import { GetWorkflowExecutionHistoryCommandInput, GetWorkflowExecutionHistoryCommandOutput } from "./commands/GetWorkflowExecutionHistoryCommand";
import { ListActivityTypesCommandInput, ListActivityTypesCommandOutput } from "./commands/ListActivityTypesCommand";
import { ListClosedWorkflowExecutionsCommandInput, ListClosedWorkflowExecutionsCommandOutput } from "./commands/ListClosedWorkflowExecutionsCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListOpenWorkflowExecutionsCommandInput, ListOpenWorkflowExecutionsCommandOutput } from "./commands/ListOpenWorkflowExecutionsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListWorkflowTypesCommandInput, ListWorkflowTypesCommandOutput } from "./commands/ListWorkflowTypesCommand";
import { PollForActivityTaskCommandInput, PollForActivityTaskCommandOutput } from "./commands/PollForActivityTaskCommand";
import { PollForDecisionTaskCommandInput, PollForDecisionTaskCommandOutput } from "./commands/PollForDecisionTaskCommand";
import { RecordActivityTaskHeartbeatCommandInput, RecordActivityTaskHeartbeatCommandOutput } from "./commands/RecordActivityTaskHeartbeatCommand";
import { RegisterActivityTypeCommandInput, RegisterActivityTypeCommandOutput } from "./commands/RegisterActivityTypeCommand";
import { RegisterDomainCommandInput, RegisterDomainCommandOutput } from "./commands/RegisterDomainCommand";
import { RegisterWorkflowTypeCommandInput, RegisterWorkflowTypeCommandOutput } from "./commands/RegisterWorkflowTypeCommand";
import { RequestCancelWorkflowExecutionCommandInput, RequestCancelWorkflowExecutionCommandOutput } from "./commands/RequestCancelWorkflowExecutionCommand";
import { RespondActivityTaskCanceledCommandInput, RespondActivityTaskCanceledCommandOutput } from "./commands/RespondActivityTaskCanceledCommand";
import { RespondActivityTaskCompletedCommandInput, RespondActivityTaskCompletedCommandOutput } from "./commands/RespondActivityTaskCompletedCommand";
import { RespondActivityTaskFailedCommandInput, RespondActivityTaskFailedCommandOutput } from "./commands/RespondActivityTaskFailedCommand";
import { RespondDecisionTaskCompletedCommandInput, RespondDecisionTaskCompletedCommandOutput } from "./commands/RespondDecisionTaskCompletedCommand";
import { SignalWorkflowExecutionCommandInput, SignalWorkflowExecutionCommandOutput } from "./commands/SignalWorkflowExecutionCommand";
import { StartWorkflowExecutionCommandInput, StartWorkflowExecutionCommandOutput } from "./commands/StartWorkflowExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TerminateWorkflowExecutionCommandInput, TerminateWorkflowExecutionCommandOutput } from "./commands/TerminateWorkflowExecutionCommand";
import { UndeprecateActivityTypeCommandInput, UndeprecateActivityTypeCommandOutput } from "./commands/UndeprecateActivityTypeCommand";
import { UndeprecateDomainCommandInput, UndeprecateDomainCommandOutput } from "./commands/UndeprecateDomainCommand";
import { UndeprecateWorkflowTypeCommandInput, UndeprecateWorkflowTypeCommandOutput } from "./commands/UndeprecateWorkflowTypeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class SWF extends SWFClient {
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
    countClosedWorkflowExecutions(args: CountClosedWorkflowExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<CountClosedWorkflowExecutionsCommandOutput>;
    countClosedWorkflowExecutions(args: CountClosedWorkflowExecutionsCommandInput, cb: (err: any, data?: CountClosedWorkflowExecutionsCommandOutput) => void): void;
    countClosedWorkflowExecutions(args: CountClosedWorkflowExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CountClosedWorkflowExecutionsCommandOutput) => void): void;
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
    countOpenWorkflowExecutions(args: CountOpenWorkflowExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<CountOpenWorkflowExecutionsCommandOutput>;
    countOpenWorkflowExecutions(args: CountOpenWorkflowExecutionsCommandInput, cb: (err: any, data?: CountOpenWorkflowExecutionsCommandOutput) => void): void;
    countOpenWorkflowExecutions(args: CountOpenWorkflowExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CountOpenWorkflowExecutionsCommandOutput) => void): void;
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
    countPendingActivityTasks(args: CountPendingActivityTasksCommandInput, options?: __HttpHandlerOptions): Promise<CountPendingActivityTasksCommandOutput>;
    countPendingActivityTasks(args: CountPendingActivityTasksCommandInput, cb: (err: any, data?: CountPendingActivityTasksCommandOutput) => void): void;
    countPendingActivityTasks(args: CountPendingActivityTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CountPendingActivityTasksCommandOutput) => void): void;
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
    countPendingDecisionTasks(args: CountPendingDecisionTasksCommandInput, options?: __HttpHandlerOptions): Promise<CountPendingDecisionTasksCommandOutput>;
    countPendingDecisionTasks(args: CountPendingDecisionTasksCommandInput, cb: (err: any, data?: CountPendingDecisionTasksCommandOutput) => void): void;
    countPendingDecisionTasks(args: CountPendingDecisionTasksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CountPendingDecisionTasksCommandOutput) => void): void;
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
    deprecateActivityType(args: DeprecateActivityTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeprecateActivityTypeCommandOutput>;
    deprecateActivityType(args: DeprecateActivityTypeCommandInput, cb: (err: any, data?: DeprecateActivityTypeCommandOutput) => void): void;
    deprecateActivityType(args: DeprecateActivityTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeprecateActivityTypeCommandOutput) => void): void;
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
    deprecateDomain(args: DeprecateDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeprecateDomainCommandOutput>;
    deprecateDomain(args: DeprecateDomainCommandInput, cb: (err: any, data?: DeprecateDomainCommandOutput) => void): void;
    deprecateDomain(args: DeprecateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeprecateDomainCommandOutput) => void): void;
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
    deprecateWorkflowType(args: DeprecateWorkflowTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeprecateWorkflowTypeCommandOutput>;
    deprecateWorkflowType(args: DeprecateWorkflowTypeCommandInput, cb: (err: any, data?: DeprecateWorkflowTypeCommandOutput) => void): void;
    deprecateWorkflowType(args: DeprecateWorkflowTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeprecateWorkflowTypeCommandOutput) => void): void;
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
    describeActivityType(args: DescribeActivityTypeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeActivityTypeCommandOutput>;
    describeActivityType(args: DescribeActivityTypeCommandInput, cb: (err: any, data?: DescribeActivityTypeCommandOutput) => void): void;
    describeActivityType(args: DescribeActivityTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeActivityTypeCommandOutput) => void): void;
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
    describeDomain(args: DescribeDomainCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDomainCommandOutput>;
    describeDomain(args: DescribeDomainCommandInput, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
    describeDomain(args: DescribeDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
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
    describeWorkflowExecution(args: DescribeWorkflowExecutionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkflowExecutionCommandOutput>;
    describeWorkflowExecution(args: DescribeWorkflowExecutionCommandInput, cb: (err: any, data?: DescribeWorkflowExecutionCommandOutput) => void): void;
    describeWorkflowExecution(args: DescribeWorkflowExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkflowExecutionCommandOutput) => void): void;
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
    describeWorkflowType(args: DescribeWorkflowTypeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkflowTypeCommandOutput>;
    describeWorkflowType(args: DescribeWorkflowTypeCommandInput, cb: (err: any, data?: DescribeWorkflowTypeCommandOutput) => void): void;
    describeWorkflowType(args: DescribeWorkflowTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkflowTypeCommandOutput) => void): void;
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
    getWorkflowExecutionHistory(args: GetWorkflowExecutionHistoryCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowExecutionHistoryCommandOutput>;
    getWorkflowExecutionHistory(args: GetWorkflowExecutionHistoryCommandInput, cb: (err: any, data?: GetWorkflowExecutionHistoryCommandOutput) => void): void;
    getWorkflowExecutionHistory(args: GetWorkflowExecutionHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWorkflowExecutionHistoryCommandOutput) => void): void;
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
    listActivityTypes(args: ListActivityTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListActivityTypesCommandOutput>;
    listActivityTypes(args: ListActivityTypesCommandInput, cb: (err: any, data?: ListActivityTypesCommandOutput) => void): void;
    listActivityTypes(args: ListActivityTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListActivityTypesCommandOutput) => void): void;
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
    listClosedWorkflowExecutions(args: ListClosedWorkflowExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListClosedWorkflowExecutionsCommandOutput>;
    listClosedWorkflowExecutions(args: ListClosedWorkflowExecutionsCommandInput, cb: (err: any, data?: ListClosedWorkflowExecutionsCommandOutput) => void): void;
    listClosedWorkflowExecutions(args: ListClosedWorkflowExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListClosedWorkflowExecutionsCommandOutput) => void): void;
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
    listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
    listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    listDomains(args: ListDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
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
    listOpenWorkflowExecutions(args: ListOpenWorkflowExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListOpenWorkflowExecutionsCommandOutput>;
    listOpenWorkflowExecutions(args: ListOpenWorkflowExecutionsCommandInput, cb: (err: any, data?: ListOpenWorkflowExecutionsCommandOutput) => void): void;
    listOpenWorkflowExecutions(args: ListOpenWorkflowExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListOpenWorkflowExecutionsCommandOutput) => void): void;
    /**
     * <p>List tags for a given domain.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
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
    listWorkflowTypes(args: ListWorkflowTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkflowTypesCommandOutput>;
    listWorkflowTypes(args: ListWorkflowTypesCommandInput, cb: (err: any, data?: ListWorkflowTypesCommandOutput) => void): void;
    listWorkflowTypes(args: ListWorkflowTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorkflowTypesCommandOutput) => void): void;
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
    pollForActivityTask(args: PollForActivityTaskCommandInput, options?: __HttpHandlerOptions): Promise<PollForActivityTaskCommandOutput>;
    pollForActivityTask(args: PollForActivityTaskCommandInput, cb: (err: any, data?: PollForActivityTaskCommandOutput) => void): void;
    pollForActivityTask(args: PollForActivityTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PollForActivityTaskCommandOutput) => void): void;
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
    pollForDecisionTask(args: PollForDecisionTaskCommandInput, options?: __HttpHandlerOptions): Promise<PollForDecisionTaskCommandOutput>;
    pollForDecisionTask(args: PollForDecisionTaskCommandInput, cb: (err: any, data?: PollForDecisionTaskCommandOutput) => void): void;
    pollForDecisionTask(args: PollForDecisionTaskCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PollForDecisionTaskCommandOutput) => void): void;
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
    recordActivityTaskHeartbeat(args: RecordActivityTaskHeartbeatCommandInput, options?: __HttpHandlerOptions): Promise<RecordActivityTaskHeartbeatCommandOutput>;
    recordActivityTaskHeartbeat(args: RecordActivityTaskHeartbeatCommandInput, cb: (err: any, data?: RecordActivityTaskHeartbeatCommandOutput) => void): void;
    recordActivityTaskHeartbeat(args: RecordActivityTaskHeartbeatCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RecordActivityTaskHeartbeatCommandOutput) => void): void;
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
    registerActivityType(args: RegisterActivityTypeCommandInput, options?: __HttpHandlerOptions): Promise<RegisterActivityTypeCommandOutput>;
    registerActivityType(args: RegisterActivityTypeCommandInput, cb: (err: any, data?: RegisterActivityTypeCommandOutput) => void): void;
    registerActivityType(args: RegisterActivityTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterActivityTypeCommandOutput) => void): void;
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
    registerDomain(args: RegisterDomainCommandInput, options?: __HttpHandlerOptions): Promise<RegisterDomainCommandOutput>;
    registerDomain(args: RegisterDomainCommandInput, cb: (err: any, data?: RegisterDomainCommandOutput) => void): void;
    registerDomain(args: RegisterDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterDomainCommandOutput) => void): void;
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
    registerWorkflowType(args: RegisterWorkflowTypeCommandInput, options?: __HttpHandlerOptions): Promise<RegisterWorkflowTypeCommandOutput>;
    registerWorkflowType(args: RegisterWorkflowTypeCommandInput, cb: (err: any, data?: RegisterWorkflowTypeCommandOutput) => void): void;
    registerWorkflowType(args: RegisterWorkflowTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterWorkflowTypeCommandOutput) => void): void;
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
    requestCancelWorkflowExecution(args: RequestCancelWorkflowExecutionCommandInput, options?: __HttpHandlerOptions): Promise<RequestCancelWorkflowExecutionCommandOutput>;
    requestCancelWorkflowExecution(args: RequestCancelWorkflowExecutionCommandInput, cb: (err: any, data?: RequestCancelWorkflowExecutionCommandOutput) => void): void;
    requestCancelWorkflowExecution(args: RequestCancelWorkflowExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RequestCancelWorkflowExecutionCommandOutput) => void): void;
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
    respondActivityTaskCanceled(args: RespondActivityTaskCanceledCommandInput, options?: __HttpHandlerOptions): Promise<RespondActivityTaskCanceledCommandOutput>;
    respondActivityTaskCanceled(args: RespondActivityTaskCanceledCommandInput, cb: (err: any, data?: RespondActivityTaskCanceledCommandOutput) => void): void;
    respondActivityTaskCanceled(args: RespondActivityTaskCanceledCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RespondActivityTaskCanceledCommandOutput) => void): void;
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
    respondActivityTaskCompleted(args: RespondActivityTaskCompletedCommandInput, options?: __HttpHandlerOptions): Promise<RespondActivityTaskCompletedCommandOutput>;
    respondActivityTaskCompleted(args: RespondActivityTaskCompletedCommandInput, cb: (err: any, data?: RespondActivityTaskCompletedCommandOutput) => void): void;
    respondActivityTaskCompleted(args: RespondActivityTaskCompletedCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RespondActivityTaskCompletedCommandOutput) => void): void;
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
    respondActivityTaskFailed(args: RespondActivityTaskFailedCommandInput, options?: __HttpHandlerOptions): Promise<RespondActivityTaskFailedCommandOutput>;
    respondActivityTaskFailed(args: RespondActivityTaskFailedCommandInput, cb: (err: any, data?: RespondActivityTaskFailedCommandOutput) => void): void;
    respondActivityTaskFailed(args: RespondActivityTaskFailedCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RespondActivityTaskFailedCommandOutput) => void): void;
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
    respondDecisionTaskCompleted(args: RespondDecisionTaskCompletedCommandInput, options?: __HttpHandlerOptions): Promise<RespondDecisionTaskCompletedCommandOutput>;
    respondDecisionTaskCompleted(args: RespondDecisionTaskCompletedCommandInput, cb: (err: any, data?: RespondDecisionTaskCompletedCommandOutput) => void): void;
    respondDecisionTaskCompleted(args: RespondDecisionTaskCompletedCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RespondDecisionTaskCompletedCommandOutput) => void): void;
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
    signalWorkflowExecution(args: SignalWorkflowExecutionCommandInput, options?: __HttpHandlerOptions): Promise<SignalWorkflowExecutionCommandOutput>;
    signalWorkflowExecution(args: SignalWorkflowExecutionCommandInput, cb: (err: any, data?: SignalWorkflowExecutionCommandOutput) => void): void;
    signalWorkflowExecution(args: SignalWorkflowExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SignalWorkflowExecutionCommandOutput) => void): void;
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
    startWorkflowExecution(args: StartWorkflowExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StartWorkflowExecutionCommandOutput>;
    startWorkflowExecution(args: StartWorkflowExecutionCommandInput, cb: (err: any, data?: StartWorkflowExecutionCommandOutput) => void): void;
    startWorkflowExecution(args: StartWorkflowExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartWorkflowExecutionCommandOutput) => void): void;
    /**
     * <p>Add a tag to a Amazon SWF domain.</p>
     *          <note>
     *             <p>Amazon SWF supports a maximum of 50 tags per resource.</p>
     *          </note>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
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
    terminateWorkflowExecution(args: TerminateWorkflowExecutionCommandInput, options?: __HttpHandlerOptions): Promise<TerminateWorkflowExecutionCommandOutput>;
    terminateWorkflowExecution(args: TerminateWorkflowExecutionCommandInput, cb: (err: any, data?: TerminateWorkflowExecutionCommandOutput) => void): void;
    terminateWorkflowExecution(args: TerminateWorkflowExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TerminateWorkflowExecutionCommandOutput) => void): void;
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
    undeprecateActivityType(args: UndeprecateActivityTypeCommandInput, options?: __HttpHandlerOptions): Promise<UndeprecateActivityTypeCommandOutput>;
    undeprecateActivityType(args: UndeprecateActivityTypeCommandInput, cb: (err: any, data?: UndeprecateActivityTypeCommandOutput) => void): void;
    undeprecateActivityType(args: UndeprecateActivityTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UndeprecateActivityTypeCommandOutput) => void): void;
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
    undeprecateDomain(args: UndeprecateDomainCommandInput, options?: __HttpHandlerOptions): Promise<UndeprecateDomainCommandOutput>;
    undeprecateDomain(args: UndeprecateDomainCommandInput, cb: (err: any, data?: UndeprecateDomainCommandOutput) => void): void;
    undeprecateDomain(args: UndeprecateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UndeprecateDomainCommandOutput) => void): void;
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
    undeprecateWorkflowType(args: UndeprecateWorkflowTypeCommandInput, options?: __HttpHandlerOptions): Promise<UndeprecateWorkflowTypeCommandOutput>;
    undeprecateWorkflowType(args: UndeprecateWorkflowTypeCommandInput, cb: (err: any, data?: UndeprecateWorkflowTypeCommandOutput) => void): void;
    undeprecateWorkflowType(args: UndeprecateWorkflowTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UndeprecateWorkflowTypeCommandOutput) => void): void;
    /**
     * <p>Remove a tag from a Amazon SWF domain.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
}
