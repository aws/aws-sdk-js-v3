import { CreateJobInput } from "./CreateJobInput";
import { DeletePublicAccessBlockInput } from "./DeletePublicAccessBlockInput";
import { DescribeJobInput } from "./DescribeJobInput";
import { GetPublicAccessBlockInput } from "./GetPublicAccessBlockInput";
import { ListJobsInput } from "./ListJobsInput";
import { PutPublicAccessBlockInput } from "./PutPublicAccessBlockInput";
import { UpdateJobPriorityInput } from "./UpdateJobPriorityInput";
import { UpdateJobStatusInput } from "./UpdateJobStatusInput";
export type InputTypesUnion =
  | CreateJobInput
  | DeletePublicAccessBlockInput
  | DescribeJobInput
  | GetPublicAccessBlockInput
  | ListJobsInput
  | PutPublicAccessBlockInput
  | UpdateJobPriorityInput
  | UpdateJobStatusInput;
