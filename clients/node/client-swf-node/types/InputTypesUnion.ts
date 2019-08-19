import { CountClosedWorkflowExecutionsInput } from "./CountClosedWorkflowExecutionsInput";
import { CountOpenWorkflowExecutionsInput } from "./CountOpenWorkflowExecutionsInput";
import { CountPendingActivityTasksInput } from "./CountPendingActivityTasksInput";
import { CountPendingDecisionTasksInput } from "./CountPendingDecisionTasksInput";
import { DeprecateActivityTypeInput } from "./DeprecateActivityTypeInput";
import { DeprecateDomainInput } from "./DeprecateDomainInput";
import { DeprecateWorkflowTypeInput } from "./DeprecateWorkflowTypeInput";
import { DescribeActivityTypeInput } from "./DescribeActivityTypeInput";
import { DescribeDomainInput } from "./DescribeDomainInput";
import { DescribeWorkflowExecutionInput } from "./DescribeWorkflowExecutionInput";
import { DescribeWorkflowTypeInput } from "./DescribeWorkflowTypeInput";
import { GetWorkflowExecutionHistoryInput } from "./GetWorkflowExecutionHistoryInput";
import { ListActivityTypesInput } from "./ListActivityTypesInput";
import { ListClosedWorkflowExecutionsInput } from "./ListClosedWorkflowExecutionsInput";
import { ListDomainsInput } from "./ListDomainsInput";
import { ListOpenWorkflowExecutionsInput } from "./ListOpenWorkflowExecutionsInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListWorkflowTypesInput } from "./ListWorkflowTypesInput";
import { PollForActivityTaskInput } from "./PollForActivityTaskInput";
import { PollForDecisionTaskInput } from "./PollForDecisionTaskInput";
import { RecordActivityTaskHeartbeatInput } from "./RecordActivityTaskHeartbeatInput";
import { RegisterActivityTypeInput } from "./RegisterActivityTypeInput";
import { RegisterDomainInput } from "./RegisterDomainInput";
import { RegisterWorkflowTypeInput } from "./RegisterWorkflowTypeInput";
import { RequestCancelWorkflowExecutionInput } from "./RequestCancelWorkflowExecutionInput";
import { RespondActivityTaskCanceledInput } from "./RespondActivityTaskCanceledInput";
import { RespondActivityTaskCompletedInput } from "./RespondActivityTaskCompletedInput";
import { RespondActivityTaskFailedInput } from "./RespondActivityTaskFailedInput";
import { RespondDecisionTaskCompletedInput } from "./RespondDecisionTaskCompletedInput";
import { SignalWorkflowExecutionInput } from "./SignalWorkflowExecutionInput";
import { StartWorkflowExecutionInput } from "./StartWorkflowExecutionInput";
import { TagResourceInput } from "./TagResourceInput";
import { TerminateWorkflowExecutionInput } from "./TerminateWorkflowExecutionInput";
import { UndeprecateActivityTypeInput } from "./UndeprecateActivityTypeInput";
import { UndeprecateDomainInput } from "./UndeprecateDomainInput";
import { UndeprecateWorkflowTypeInput } from "./UndeprecateWorkflowTypeInput";
import { UntagResourceInput } from "./UntagResourceInput";
export type InputTypesUnion =
  | CountClosedWorkflowExecutionsInput
  | CountOpenWorkflowExecutionsInput
  | CountPendingActivityTasksInput
  | CountPendingDecisionTasksInput
  | DeprecateActivityTypeInput
  | DeprecateDomainInput
  | DeprecateWorkflowTypeInput
  | DescribeActivityTypeInput
  | DescribeDomainInput
  | DescribeWorkflowExecutionInput
  | DescribeWorkflowTypeInput
  | GetWorkflowExecutionHistoryInput
  | ListActivityTypesInput
  | ListClosedWorkflowExecutionsInput
  | ListDomainsInput
  | ListOpenWorkflowExecutionsInput
  | ListTagsForResourceInput
  | ListWorkflowTypesInput
  | PollForActivityTaskInput
  | PollForDecisionTaskInput
  | RecordActivityTaskHeartbeatInput
  | RegisterActivityTypeInput
  | RegisterDomainInput
  | RegisterWorkflowTypeInput
  | RequestCancelWorkflowExecutionInput
  | RespondActivityTaskCanceledInput
  | RespondActivityTaskCompletedInput
  | RespondActivityTaskFailedInput
  | RespondDecisionTaskCompletedInput
  | SignalWorkflowExecutionInput
  | StartWorkflowExecutionInput
  | TagResourceInput
  | TerminateWorkflowExecutionInput
  | UndeprecateActivityTypeInput
  | UndeprecateDomainInput
  | UndeprecateWorkflowTypeInput
  | UntagResourceInput;
