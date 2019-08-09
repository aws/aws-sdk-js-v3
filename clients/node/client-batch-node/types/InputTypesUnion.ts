import { CancelJobInput } from "./CancelJobInput";
import { CreateComputeEnvironmentInput } from "./CreateComputeEnvironmentInput";
import { CreateJobQueueInput } from "./CreateJobQueueInput";
import { DeleteComputeEnvironmentInput } from "./DeleteComputeEnvironmentInput";
import { DeleteJobQueueInput } from "./DeleteJobQueueInput";
import { DeregisterJobDefinitionInput } from "./DeregisterJobDefinitionInput";
import { DescribeComputeEnvironmentsInput } from "./DescribeComputeEnvironmentsInput";
import { DescribeJobDefinitionsInput } from "./DescribeJobDefinitionsInput";
import { DescribeJobQueuesInput } from "./DescribeJobQueuesInput";
import { DescribeJobsInput } from "./DescribeJobsInput";
import { ListJobsInput } from "./ListJobsInput";
import { RegisterJobDefinitionInput } from "./RegisterJobDefinitionInput";
import { SubmitJobInput } from "./SubmitJobInput";
import { TerminateJobInput } from "./TerminateJobInput";
import { UpdateComputeEnvironmentInput } from "./UpdateComputeEnvironmentInput";
import { UpdateJobQueueInput } from "./UpdateJobQueueInput";
export type InputTypesUnion =
  | CancelJobInput
  | CreateComputeEnvironmentInput
  | CreateJobQueueInput
  | DeleteComputeEnvironmentInput
  | DeleteJobQueueInput
  | DeregisterJobDefinitionInput
  | DescribeComputeEnvironmentsInput
  | DescribeJobDefinitionsInput
  | DescribeJobQueuesInput
  | DescribeJobsInput
  | ListJobsInput
  | RegisterJobDefinitionInput
  | SubmitJobInput
  | TerminateJobInput
  | UpdateComputeEnvironmentInput
  | UpdateJobQueueInput;
