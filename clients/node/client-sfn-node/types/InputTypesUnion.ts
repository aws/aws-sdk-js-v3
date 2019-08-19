import { CreateActivityInput } from "./CreateActivityInput";
import { CreateStateMachineInput } from "./CreateStateMachineInput";
import { DeleteActivityInput } from "./DeleteActivityInput";
import { DeleteStateMachineInput } from "./DeleteStateMachineInput";
import { DescribeActivityInput } from "./DescribeActivityInput";
import { DescribeExecutionInput } from "./DescribeExecutionInput";
import { DescribeStateMachineInput } from "./DescribeStateMachineInput";
import { DescribeStateMachineForExecutionInput } from "./DescribeStateMachineForExecutionInput";
import { GetActivityTaskInput } from "./GetActivityTaskInput";
import { GetExecutionHistoryInput } from "./GetExecutionHistoryInput";
import { ListActivitiesInput } from "./ListActivitiesInput";
import { ListExecutionsInput } from "./ListExecutionsInput";
import { ListStateMachinesInput } from "./ListStateMachinesInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { SendTaskFailureInput } from "./SendTaskFailureInput";
import { SendTaskHeartbeatInput } from "./SendTaskHeartbeatInput";
import { SendTaskSuccessInput } from "./SendTaskSuccessInput";
import { StartExecutionInput } from "./StartExecutionInput";
import { StopExecutionInput } from "./StopExecutionInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateStateMachineInput } from "./UpdateStateMachineInput";
export type InputTypesUnion =
  | CreateActivityInput
  | CreateStateMachineInput
  | DeleteActivityInput
  | DeleteStateMachineInput
  | DescribeActivityInput
  | DescribeExecutionInput
  | DescribeStateMachineInput
  | DescribeStateMachineForExecutionInput
  | GetActivityTaskInput
  | GetExecutionHistoryInput
  | ListActivitiesInput
  | ListExecutionsInput
  | ListStateMachinesInput
  | ListTagsForResourceInput
  | SendTaskFailureInput
  | SendTaskHeartbeatInput
  | SendTaskSuccessInput
  | StartExecutionInput
  | StopExecutionInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateStateMachineInput;
