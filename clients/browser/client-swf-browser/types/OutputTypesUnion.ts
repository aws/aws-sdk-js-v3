import { CountClosedWorkflowExecutionsOutput } from "./CountClosedWorkflowExecutionsOutput";
import { CountOpenWorkflowExecutionsOutput } from "./CountOpenWorkflowExecutionsOutput";
import { CountPendingActivityTasksOutput } from "./CountPendingActivityTasksOutput";
import { CountPendingDecisionTasksOutput } from "./CountPendingDecisionTasksOutput";
import { DeprecateActivityTypeOutput } from "./DeprecateActivityTypeOutput";
import { DeprecateDomainOutput } from "./DeprecateDomainOutput";
import { DeprecateWorkflowTypeOutput } from "./DeprecateWorkflowTypeOutput";
import { DescribeActivityTypeOutput } from "./DescribeActivityTypeOutput";
import { DescribeDomainOutput } from "./DescribeDomainOutput";
import { DescribeWorkflowExecutionOutput } from "./DescribeWorkflowExecutionOutput";
import { DescribeWorkflowTypeOutput } from "./DescribeWorkflowTypeOutput";
import { GetWorkflowExecutionHistoryOutput } from "./GetWorkflowExecutionHistoryOutput";
import { ListActivityTypesOutput } from "./ListActivityTypesOutput";
import { ListClosedWorkflowExecutionsOutput } from "./ListClosedWorkflowExecutionsOutput";
import { ListDomainsOutput } from "./ListDomainsOutput";
import { ListOpenWorkflowExecutionsOutput } from "./ListOpenWorkflowExecutionsOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ListWorkflowTypesOutput } from "./ListWorkflowTypesOutput";
import { PollForActivityTaskOutput } from "./PollForActivityTaskOutput";
import { PollForDecisionTaskOutput } from "./PollForDecisionTaskOutput";
import { RecordActivityTaskHeartbeatOutput } from "./RecordActivityTaskHeartbeatOutput";
import { RegisterActivityTypeOutput } from "./RegisterActivityTypeOutput";
import { RegisterDomainOutput } from "./RegisterDomainOutput";
import { RegisterWorkflowTypeOutput } from "./RegisterWorkflowTypeOutput";
import { RequestCancelWorkflowExecutionOutput } from "./RequestCancelWorkflowExecutionOutput";
import { RespondActivityTaskCanceledOutput } from "./RespondActivityTaskCanceledOutput";
import { RespondActivityTaskCompletedOutput } from "./RespondActivityTaskCompletedOutput";
import { RespondActivityTaskFailedOutput } from "./RespondActivityTaskFailedOutput";
import { RespondDecisionTaskCompletedOutput } from "./RespondDecisionTaskCompletedOutput";
import { SignalWorkflowExecutionOutput } from "./SignalWorkflowExecutionOutput";
import { StartWorkflowExecutionOutput } from "./StartWorkflowExecutionOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { TerminateWorkflowExecutionOutput } from "./TerminateWorkflowExecutionOutput";
import { UndeprecateActivityTypeOutput } from "./UndeprecateActivityTypeOutput";
import { UndeprecateDomainOutput } from "./UndeprecateDomainOutput";
import { UndeprecateWorkflowTypeOutput } from "./UndeprecateWorkflowTypeOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
export type OutputTypesUnion =
  | CountClosedWorkflowExecutionsOutput
  | CountOpenWorkflowExecutionsOutput
  | CountPendingActivityTasksOutput
  | CountPendingDecisionTasksOutput
  | DeprecateActivityTypeOutput
  | DeprecateDomainOutput
  | DeprecateWorkflowTypeOutput
  | DescribeActivityTypeOutput
  | DescribeDomainOutput
  | DescribeWorkflowExecutionOutput
  | DescribeWorkflowTypeOutput
  | GetWorkflowExecutionHistoryOutput
  | ListActivityTypesOutput
  | ListClosedWorkflowExecutionsOutput
  | ListDomainsOutput
  | ListOpenWorkflowExecutionsOutput
  | ListTagsForResourceOutput
  | ListWorkflowTypesOutput
  | PollForActivityTaskOutput
  | PollForDecisionTaskOutput
  | RecordActivityTaskHeartbeatOutput
  | RegisterActivityTypeOutput
  | RegisterDomainOutput
  | RegisterWorkflowTypeOutput
  | RequestCancelWorkflowExecutionOutput
  | RespondActivityTaskCanceledOutput
  | RespondActivityTaskCompletedOutput
  | RespondActivityTaskFailedOutput
  | RespondDecisionTaskCompletedOutput
  | SignalWorkflowExecutionOutput
  | StartWorkflowExecutionOutput
  | TagResourceOutput
  | TerminateWorkflowExecutionOutput
  | UndeprecateActivityTypeOutput
  | UndeprecateDomainOutput
  | UndeprecateWorkflowTypeOutput
  | UntagResourceOutput;
