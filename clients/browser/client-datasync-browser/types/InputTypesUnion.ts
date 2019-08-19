import { CancelTaskExecutionInput } from "./CancelTaskExecutionInput";
import { CreateAgentInput } from "./CreateAgentInput";
import { CreateLocationEfsInput } from "./CreateLocationEfsInput";
import { CreateLocationNfsInput } from "./CreateLocationNfsInput";
import { CreateLocationS3Input } from "./CreateLocationS3Input";
import { CreateTaskInput } from "./CreateTaskInput";
import { DeleteAgentInput } from "./DeleteAgentInput";
import { DeleteLocationInput } from "./DeleteLocationInput";
import { DeleteTaskInput } from "./DeleteTaskInput";
import { DescribeAgentInput } from "./DescribeAgentInput";
import { DescribeLocationEfsInput } from "./DescribeLocationEfsInput";
import { DescribeLocationNfsInput } from "./DescribeLocationNfsInput";
import { DescribeLocationS3Input } from "./DescribeLocationS3Input";
import { DescribeTaskInput } from "./DescribeTaskInput";
import { DescribeTaskExecutionInput } from "./DescribeTaskExecutionInput";
import { ListAgentsInput } from "./ListAgentsInput";
import { ListLocationsInput } from "./ListLocationsInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListTaskExecutionsInput } from "./ListTaskExecutionsInput";
import { ListTasksInput } from "./ListTasksInput";
import { StartTaskExecutionInput } from "./StartTaskExecutionInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateAgentInput } from "./UpdateAgentInput";
import { UpdateTaskInput } from "./UpdateTaskInput";
export type InputTypesUnion =
  | CancelTaskExecutionInput
  | CreateAgentInput
  | CreateLocationEfsInput
  | CreateLocationNfsInput
  | CreateLocationS3Input
  | CreateTaskInput
  | DeleteAgentInput
  | DeleteLocationInput
  | DeleteTaskInput
  | DescribeAgentInput
  | DescribeLocationEfsInput
  | DescribeLocationNfsInput
  | DescribeLocationS3Input
  | DescribeTaskInput
  | DescribeTaskExecutionInput
  | ListAgentsInput
  | ListLocationsInput
  | ListTagsForResourceInput
  | ListTaskExecutionsInput
  | ListTasksInput
  | StartTaskExecutionInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateAgentInput
  | UpdateTaskInput;
