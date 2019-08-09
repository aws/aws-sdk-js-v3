import { CancelJobOutput } from "./CancelJobOutput";
import { CreateComputeEnvironmentOutput } from "./CreateComputeEnvironmentOutput";
import { CreateJobQueueOutput } from "./CreateJobQueueOutput";
import { DeleteComputeEnvironmentOutput } from "./DeleteComputeEnvironmentOutput";
import { DeleteJobQueueOutput } from "./DeleteJobQueueOutput";
import { DeregisterJobDefinitionOutput } from "./DeregisterJobDefinitionOutput";
import { DescribeComputeEnvironmentsOutput } from "./DescribeComputeEnvironmentsOutput";
import { DescribeJobDefinitionsOutput } from "./DescribeJobDefinitionsOutput";
import { DescribeJobQueuesOutput } from "./DescribeJobQueuesOutput";
import { DescribeJobsOutput } from "./DescribeJobsOutput";
import { ListJobsOutput } from "./ListJobsOutput";
import { RegisterJobDefinitionOutput } from "./RegisterJobDefinitionOutput";
import { SubmitJobOutput } from "./SubmitJobOutput";
import { TerminateJobOutput } from "./TerminateJobOutput";
import { UpdateComputeEnvironmentOutput } from "./UpdateComputeEnvironmentOutput";
import { UpdateJobQueueOutput } from "./UpdateJobQueueOutput";
export type OutputTypesUnion =
  | CancelJobOutput
  | CreateComputeEnvironmentOutput
  | CreateJobQueueOutput
  | DeleteComputeEnvironmentOutput
  | DeleteJobQueueOutput
  | DeregisterJobDefinitionOutput
  | DescribeComputeEnvironmentsOutput
  | DescribeJobDefinitionsOutput
  | DescribeJobQueuesOutput
  | DescribeJobsOutput
  | ListJobsOutput
  | RegisterJobDefinitionOutput
  | SubmitJobOutput
  | TerminateJobOutput
  | UpdateComputeEnvironmentOutput
  | UpdateJobQueueOutput;
