import { DescribeJobExecutionInput } from "./DescribeJobExecutionInput";
import { GetPendingJobExecutionsInput } from "./GetPendingJobExecutionsInput";
import { StartNextPendingJobExecutionInput } from "./StartNextPendingJobExecutionInput";
import { UpdateJobExecutionInput } from "./UpdateJobExecutionInput";
export type InputTypesUnion =
  | DescribeJobExecutionInput
  | GetPendingJobExecutionsInput
  | StartNextPendingJobExecutionInput
  | UpdateJobExecutionInput;
