import { CreateActivityOutput } from "./CreateActivityOutput";
import { CreateStateMachineOutput } from "./CreateStateMachineOutput";
import { DeleteActivityOutput } from "./DeleteActivityOutput";
import { DeleteStateMachineOutput } from "./DeleteStateMachineOutput";
import { DescribeActivityOutput } from "./DescribeActivityOutput";
import { DescribeExecutionOutput } from "./DescribeExecutionOutput";
import { DescribeStateMachineOutput } from "./DescribeStateMachineOutput";
import { DescribeStateMachineForExecutionOutput } from "./DescribeStateMachineForExecutionOutput";
import { GetActivityTaskOutput } from "./GetActivityTaskOutput";
import { GetExecutionHistoryOutput } from "./GetExecutionHistoryOutput";
import { ListActivitiesOutput } from "./ListActivitiesOutput";
import { ListExecutionsOutput } from "./ListExecutionsOutput";
import { ListStateMachinesOutput } from "./ListStateMachinesOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { SendTaskFailureOutput } from "./SendTaskFailureOutput";
import { SendTaskHeartbeatOutput } from "./SendTaskHeartbeatOutput";
import { SendTaskSuccessOutput } from "./SendTaskSuccessOutput";
import { StartExecutionOutput } from "./StartExecutionOutput";
import { StopExecutionOutput } from "./StopExecutionOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateStateMachineOutput } from "./UpdateStateMachineOutput";
export type OutputTypesUnion =
  | CreateActivityOutput
  | CreateStateMachineOutput
  | DeleteActivityOutput
  | DeleteStateMachineOutput
  | DescribeActivityOutput
  | DescribeExecutionOutput
  | DescribeStateMachineOutput
  | DescribeStateMachineForExecutionOutput
  | GetActivityTaskOutput
  | GetExecutionHistoryOutput
  | ListActivitiesOutput
  | ListExecutionsOutput
  | ListStateMachinesOutput
  | ListTagsForResourceOutput
  | SendTaskFailureOutput
  | SendTaskHeartbeatOutput
  | SendTaskSuccessOutput
  | StartExecutionOutput
  | StopExecutionOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateStateMachineOutput;
