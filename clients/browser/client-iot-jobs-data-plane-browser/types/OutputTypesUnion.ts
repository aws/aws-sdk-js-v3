import { DescribeJobExecutionOutput } from "./DescribeJobExecutionOutput";
import { GetPendingJobExecutionsOutput } from "./GetPendingJobExecutionsOutput";
import { StartNextPendingJobExecutionOutput } from "./StartNextPendingJobExecutionOutput";
import { UpdateJobExecutionOutput } from "./UpdateJobExecutionOutput";
export type OutputTypesUnion =
  | DescribeJobExecutionOutput
  | GetPendingJobExecutionsOutput
  | StartNextPendingJobExecutionOutput
  | UpdateJobExecutionOutput;
