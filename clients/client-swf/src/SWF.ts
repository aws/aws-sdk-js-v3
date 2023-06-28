// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { SWFClient, SWFClientConfig } from "./SWFClient";

const commands = {
  CountClosedWorkflowExecutionsCommand,
  CountOpenWorkflowExecutionsCommand,
  CountPendingActivityTasksCommand,
  CountPendingDecisionTasksCommand,
  DeprecateActivityTypeCommand,
  DeprecateDomainCommand,
  DeprecateWorkflowTypeCommand,
  DescribeActivityTypeCommand,
  DescribeDomainCommand,
  DescribeWorkflowExecutionCommand,
  DescribeWorkflowTypeCommand,
  GetWorkflowExecutionHistoryCommand,
  ListActivityTypesCommand,
  ListClosedWorkflowExecutionsCommand,
  ListDomainsCommand,
  ListOpenWorkflowExecutionsCommand,
  ListTagsForResourceCommand,
  ListWorkflowTypesCommand,
  PollForActivityTaskCommand,
  PollForDecisionTaskCommand,
  RecordActivityTaskHeartbeatCommand,
  RegisterActivityTypeCommand,
  RegisterDomainCommand,
  RegisterWorkflowTypeCommand,
  RequestCancelWorkflowExecutionCommand,
  RespondActivityTaskCanceledCommand,
  RespondActivityTaskCompletedCommand,
  RespondActivityTaskFailedCommand,
  RespondDecisionTaskCompletedCommand,
  SignalWorkflowExecutionCommand,
  StartWorkflowExecutionCommand,
  TagResourceCommand,
  TerminateWorkflowExecutionCommand,
  UndeprecateActivityTypeCommand,
  UndeprecateDomainCommand,
  UndeprecateWorkflowTypeCommand,
  UntagResourceCommand,
};

export interface SWF {
  /**
   * @see {@link CountClosedWorkflowExecutionsCommand}
   */
  countClosedWorkflowExecutions(
    args: CountClosedWorkflowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CountClosedWorkflowExecutionsCommandOutput>;
  countClosedWorkflowExecutions(
    args: CountClosedWorkflowExecutionsCommandInput,
    cb: (err: any, data?: CountClosedWorkflowExecutionsCommandOutput) => void
  ): void;
  countClosedWorkflowExecutions(
    args: CountClosedWorkflowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CountClosedWorkflowExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CountOpenWorkflowExecutionsCommand}
   */
  countOpenWorkflowExecutions(
    args: CountOpenWorkflowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CountOpenWorkflowExecutionsCommandOutput>;
  countOpenWorkflowExecutions(
    args: CountOpenWorkflowExecutionsCommandInput,
    cb: (err: any, data?: CountOpenWorkflowExecutionsCommandOutput) => void
  ): void;
  countOpenWorkflowExecutions(
    args: CountOpenWorkflowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CountOpenWorkflowExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CountPendingActivityTasksCommand}
   */
  countPendingActivityTasks(
    args: CountPendingActivityTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CountPendingActivityTasksCommandOutput>;
  countPendingActivityTasks(
    args: CountPendingActivityTasksCommandInput,
    cb: (err: any, data?: CountPendingActivityTasksCommandOutput) => void
  ): void;
  countPendingActivityTasks(
    args: CountPendingActivityTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CountPendingActivityTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link CountPendingDecisionTasksCommand}
   */
  countPendingDecisionTasks(
    args: CountPendingDecisionTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CountPendingDecisionTasksCommandOutput>;
  countPendingDecisionTasks(
    args: CountPendingDecisionTasksCommandInput,
    cb: (err: any, data?: CountPendingDecisionTasksCommandOutput) => void
  ): void;
  countPendingDecisionTasks(
    args: CountPendingDecisionTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CountPendingDecisionTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprecateActivityTypeCommand}
   */
  deprecateActivityType(
    args: DeprecateActivityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateActivityTypeCommandOutput>;
  deprecateActivityType(
    args: DeprecateActivityTypeCommandInput,
    cb: (err: any, data?: DeprecateActivityTypeCommandOutput) => void
  ): void;
  deprecateActivityType(
    args: DeprecateActivityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateActivityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprecateDomainCommand}
   */
  deprecateDomain(
    args: DeprecateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateDomainCommandOutput>;
  deprecateDomain(args: DeprecateDomainCommandInput, cb: (err: any, data?: DeprecateDomainCommandOutput) => void): void;
  deprecateDomain(
    args: DeprecateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprecateWorkflowTypeCommand}
   */
  deprecateWorkflowType(
    args: DeprecateWorkflowTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprecateWorkflowTypeCommandOutput>;
  deprecateWorkflowType(
    args: DeprecateWorkflowTypeCommandInput,
    cb: (err: any, data?: DeprecateWorkflowTypeCommandOutput) => void
  ): void;
  deprecateWorkflowType(
    args: DeprecateWorkflowTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprecateWorkflowTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActivityTypeCommand}
   */
  describeActivityType(
    args: DescribeActivityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActivityTypeCommandOutput>;
  describeActivityType(
    args: DescribeActivityTypeCommandInput,
    cb: (err: any, data?: DescribeActivityTypeCommandOutput) => void
  ): void;
  describeActivityType(
    args: DescribeActivityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActivityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainCommand}
   */
  describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  describeDomain(args: DescribeDomainCommandInput, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
  describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkflowExecutionCommand}
   */
  describeWorkflowExecution(
    args: DescribeWorkflowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkflowExecutionCommandOutput>;
  describeWorkflowExecution(
    args: DescribeWorkflowExecutionCommandInput,
    cb: (err: any, data?: DescribeWorkflowExecutionCommandOutput) => void
  ): void;
  describeWorkflowExecution(
    args: DescribeWorkflowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkflowExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkflowTypeCommand}
   */
  describeWorkflowType(
    args: DescribeWorkflowTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkflowTypeCommandOutput>;
  describeWorkflowType(
    args: DescribeWorkflowTypeCommandInput,
    cb: (err: any, data?: DescribeWorkflowTypeCommandOutput) => void
  ): void;
  describeWorkflowType(
    args: DescribeWorkflowTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkflowTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowExecutionHistoryCommand}
   */
  getWorkflowExecutionHistory(
    args: GetWorkflowExecutionHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowExecutionHistoryCommandOutput>;
  getWorkflowExecutionHistory(
    args: GetWorkflowExecutionHistoryCommandInput,
    cb: (err: any, data?: GetWorkflowExecutionHistoryCommandOutput) => void
  ): void;
  getWorkflowExecutionHistory(
    args: GetWorkflowExecutionHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowExecutionHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActivityTypesCommand}
   */
  listActivityTypes(
    args: ListActivityTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActivityTypesCommandOutput>;
  listActivityTypes(
    args: ListActivityTypesCommandInput,
    cb: (err: any, data?: ListActivityTypesCommandOutput) => void
  ): void;
  listActivityTypes(
    args: ListActivityTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActivityTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListClosedWorkflowExecutionsCommand}
   */
  listClosedWorkflowExecutions(
    args: ListClosedWorkflowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListClosedWorkflowExecutionsCommandOutput>;
  listClosedWorkflowExecutions(
    args: ListClosedWorkflowExecutionsCommandInput,
    cb: (err: any, data?: ListClosedWorkflowExecutionsCommandOutput) => void
  ): void;
  listClosedWorkflowExecutions(
    args: ListClosedWorkflowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListClosedWorkflowExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpenWorkflowExecutionsCommand}
   */
  listOpenWorkflowExecutions(
    args: ListOpenWorkflowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOpenWorkflowExecutionsCommandOutput>;
  listOpenWorkflowExecutions(
    args: ListOpenWorkflowExecutionsCommandInput,
    cb: (err: any, data?: ListOpenWorkflowExecutionsCommandOutput) => void
  ): void;
  listOpenWorkflowExecutions(
    args: ListOpenWorkflowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOpenWorkflowExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowTypesCommand}
   */
  listWorkflowTypes(
    args: ListWorkflowTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowTypesCommandOutput>;
  listWorkflowTypes(
    args: ListWorkflowTypesCommandInput,
    cb: (err: any, data?: ListWorkflowTypesCommandOutput) => void
  ): void;
  listWorkflowTypes(
    args: ListWorkflowTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link PollForActivityTaskCommand}
   */
  pollForActivityTask(
    args: PollForActivityTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PollForActivityTaskCommandOutput>;
  pollForActivityTask(
    args: PollForActivityTaskCommandInput,
    cb: (err: any, data?: PollForActivityTaskCommandOutput) => void
  ): void;
  pollForActivityTask(
    args: PollForActivityTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PollForActivityTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link PollForDecisionTaskCommand}
   */
  pollForDecisionTask(
    args: PollForDecisionTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PollForDecisionTaskCommandOutput>;
  pollForDecisionTask(
    args: PollForDecisionTaskCommandInput,
    cb: (err: any, data?: PollForDecisionTaskCommandOutput) => void
  ): void;
  pollForDecisionTask(
    args: PollForDecisionTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PollForDecisionTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link RecordActivityTaskHeartbeatCommand}
   */
  recordActivityTaskHeartbeat(
    args: RecordActivityTaskHeartbeatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecordActivityTaskHeartbeatCommandOutput>;
  recordActivityTaskHeartbeat(
    args: RecordActivityTaskHeartbeatCommandInput,
    cb: (err: any, data?: RecordActivityTaskHeartbeatCommandOutput) => void
  ): void;
  recordActivityTaskHeartbeat(
    args: RecordActivityTaskHeartbeatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecordActivityTaskHeartbeatCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterActivityTypeCommand}
   */
  registerActivityType(
    args: RegisterActivityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterActivityTypeCommandOutput>;
  registerActivityType(
    args: RegisterActivityTypeCommandInput,
    cb: (err: any, data?: RegisterActivityTypeCommandOutput) => void
  ): void;
  registerActivityType(
    args: RegisterActivityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterActivityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterDomainCommand}
   */
  registerDomain(
    args: RegisterDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDomainCommandOutput>;
  registerDomain(args: RegisterDomainCommandInput, cb: (err: any, data?: RegisterDomainCommandOutput) => void): void;
  registerDomain(
    args: RegisterDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterWorkflowTypeCommand}
   */
  registerWorkflowType(
    args: RegisterWorkflowTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterWorkflowTypeCommandOutput>;
  registerWorkflowType(
    args: RegisterWorkflowTypeCommandInput,
    cb: (err: any, data?: RegisterWorkflowTypeCommandOutput) => void
  ): void;
  registerWorkflowType(
    args: RegisterWorkflowTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterWorkflowTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link RequestCancelWorkflowExecutionCommand}
   */
  requestCancelWorkflowExecution(
    args: RequestCancelWorkflowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestCancelWorkflowExecutionCommandOutput>;
  requestCancelWorkflowExecution(
    args: RequestCancelWorkflowExecutionCommandInput,
    cb: (err: any, data?: RequestCancelWorkflowExecutionCommandOutput) => void
  ): void;
  requestCancelWorkflowExecution(
    args: RequestCancelWorkflowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestCancelWorkflowExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link RespondActivityTaskCanceledCommand}
   */
  respondActivityTaskCanceled(
    args: RespondActivityTaskCanceledCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RespondActivityTaskCanceledCommandOutput>;
  respondActivityTaskCanceled(
    args: RespondActivityTaskCanceledCommandInput,
    cb: (err: any, data?: RespondActivityTaskCanceledCommandOutput) => void
  ): void;
  respondActivityTaskCanceled(
    args: RespondActivityTaskCanceledCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RespondActivityTaskCanceledCommandOutput) => void
  ): void;

  /**
   * @see {@link RespondActivityTaskCompletedCommand}
   */
  respondActivityTaskCompleted(
    args: RespondActivityTaskCompletedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RespondActivityTaskCompletedCommandOutput>;
  respondActivityTaskCompleted(
    args: RespondActivityTaskCompletedCommandInput,
    cb: (err: any, data?: RespondActivityTaskCompletedCommandOutput) => void
  ): void;
  respondActivityTaskCompleted(
    args: RespondActivityTaskCompletedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RespondActivityTaskCompletedCommandOutput) => void
  ): void;

  /**
   * @see {@link RespondActivityTaskFailedCommand}
   */
  respondActivityTaskFailed(
    args: RespondActivityTaskFailedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RespondActivityTaskFailedCommandOutput>;
  respondActivityTaskFailed(
    args: RespondActivityTaskFailedCommandInput,
    cb: (err: any, data?: RespondActivityTaskFailedCommandOutput) => void
  ): void;
  respondActivityTaskFailed(
    args: RespondActivityTaskFailedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RespondActivityTaskFailedCommandOutput) => void
  ): void;

  /**
   * @see {@link RespondDecisionTaskCompletedCommand}
   */
  respondDecisionTaskCompleted(
    args: RespondDecisionTaskCompletedCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RespondDecisionTaskCompletedCommandOutput>;
  respondDecisionTaskCompleted(
    args: RespondDecisionTaskCompletedCommandInput,
    cb: (err: any, data?: RespondDecisionTaskCompletedCommandOutput) => void
  ): void;
  respondDecisionTaskCompleted(
    args: RespondDecisionTaskCompletedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RespondDecisionTaskCompletedCommandOutput) => void
  ): void;

  /**
   * @see {@link SignalWorkflowExecutionCommand}
   */
  signalWorkflowExecution(
    args: SignalWorkflowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SignalWorkflowExecutionCommandOutput>;
  signalWorkflowExecution(
    args: SignalWorkflowExecutionCommandInput,
    cb: (err: any, data?: SignalWorkflowExecutionCommandOutput) => void
  ): void;
  signalWorkflowExecution(
    args: SignalWorkflowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignalWorkflowExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWorkflowExecutionCommand}
   */
  startWorkflowExecution(
    args: StartWorkflowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWorkflowExecutionCommandOutput>;
  startWorkflowExecution(
    args: StartWorkflowExecutionCommandInput,
    cb: (err: any, data?: StartWorkflowExecutionCommandOutput) => void
  ): void;
  startWorkflowExecution(
    args: StartWorkflowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkflowExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateWorkflowExecutionCommand}
   */
  terminateWorkflowExecution(
    args: TerminateWorkflowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateWorkflowExecutionCommandOutput>;
  terminateWorkflowExecution(
    args: TerminateWorkflowExecutionCommandInput,
    cb: (err: any, data?: TerminateWorkflowExecutionCommandOutput) => void
  ): void;
  terminateWorkflowExecution(
    args: TerminateWorkflowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateWorkflowExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link UndeprecateActivityTypeCommand}
   */
  undeprecateActivityType(
    args: UndeprecateActivityTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UndeprecateActivityTypeCommandOutput>;
  undeprecateActivityType(
    args: UndeprecateActivityTypeCommandInput,
    cb: (err: any, data?: UndeprecateActivityTypeCommandOutput) => void
  ): void;
  undeprecateActivityType(
    args: UndeprecateActivityTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UndeprecateActivityTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link UndeprecateDomainCommand}
   */
  undeprecateDomain(
    args: UndeprecateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UndeprecateDomainCommandOutput>;
  undeprecateDomain(
    args: UndeprecateDomainCommandInput,
    cb: (err: any, data?: UndeprecateDomainCommandOutput) => void
  ): void;
  undeprecateDomain(
    args: UndeprecateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UndeprecateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link UndeprecateWorkflowTypeCommand}
   */
  undeprecateWorkflowType(
    args: UndeprecateWorkflowTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UndeprecateWorkflowTypeCommandOutput>;
  undeprecateWorkflowType(
    args: UndeprecateWorkflowTypeCommandInput,
    cb: (err: any, data?: UndeprecateWorkflowTypeCommandOutput) => void
  ): void;
  undeprecateWorkflowType(
    args: UndeprecateWorkflowTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UndeprecateWorkflowTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon Simple Workflow Service</fullname>
 *          <p>The Amazon Simple Workflow Service (Amazon SWF) makes it easy to build applications that use Amazon's cloud to
 *       coordinate work across distributed components. In Amazon SWF, a <i>task</i>
 *       represents a logical unit of work that is performed by a component of your workflow.
 *       Coordinating tasks in a workflow involves managing intertask dependencies, scheduling, and
 *       concurrency in accordance with the logical flow of the application.</p>
 *          <p>Amazon SWF gives you full control over implementing tasks and coordinating them without
 *       worrying about underlying complexities such as tracking their progress and maintaining their
 *       state.</p>
 *          <p>This documentation serves as reference only. For a broader overview of the Amazon SWF
 *       programming model, see the <i>
 *                <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/">Amazon SWF Developer Guide</a>
 *             </i>.</p>
 */
export class SWF extends SWFClient implements SWF {}
createAggregatedClient(commands, SWF);
