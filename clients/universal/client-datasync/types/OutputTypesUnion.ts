import { CancelTaskExecutionOutput } from "./CancelTaskExecutionOutput";
import { CreateAgentOutput } from "./CreateAgentOutput";
import { CreateLocationEfsOutput } from "./CreateLocationEfsOutput";
import { CreateLocationNfsOutput } from "./CreateLocationNfsOutput";
import { CreateLocationS3Output } from "./CreateLocationS3Output";
import { CreateTaskOutput } from "./CreateTaskOutput";
import { DeleteAgentOutput } from "./DeleteAgentOutput";
import { DeleteLocationOutput } from "./DeleteLocationOutput";
import { DeleteTaskOutput } from "./DeleteTaskOutput";
import { DescribeAgentOutput } from "./DescribeAgentOutput";
import { DescribeLocationEfsOutput } from "./DescribeLocationEfsOutput";
import { DescribeLocationNfsOutput } from "./DescribeLocationNfsOutput";
import { DescribeLocationS3Output } from "./DescribeLocationS3Output";
import { DescribeTaskOutput } from "./DescribeTaskOutput";
import { DescribeTaskExecutionOutput } from "./DescribeTaskExecutionOutput";
import { ListAgentsOutput } from "./ListAgentsOutput";
import { ListLocationsOutput } from "./ListLocationsOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ListTaskExecutionsOutput } from "./ListTaskExecutionsOutput";
import { ListTasksOutput } from "./ListTasksOutput";
import { StartTaskExecutionOutput } from "./StartTaskExecutionOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateAgentOutput } from "./UpdateAgentOutput";
import { UpdateTaskOutput } from "./UpdateTaskOutput";
export type OutputTypesUnion =
  | CancelTaskExecutionOutput
  | CreateAgentOutput
  | CreateLocationEfsOutput
  | CreateLocationNfsOutput
  | CreateLocationS3Output
  | CreateTaskOutput
  | DeleteAgentOutput
  | DeleteLocationOutput
  | DeleteTaskOutput
  | DescribeAgentOutput
  | DescribeLocationEfsOutput
  | DescribeLocationNfsOutput
  | DescribeLocationS3Output
  | DescribeTaskOutput
  | DescribeTaskExecutionOutput
  | ListAgentsOutput
  | ListLocationsOutput
  | ListTagsForResourceOutput
  | ListTaskExecutionsOutput
  | ListTasksOutput
  | StartTaskExecutionOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateAgentOutput
  | UpdateTaskOutput;
