import { CreateJobOutput } from "./CreateJobOutput";
import { DeletePublicAccessBlockOutput } from "./DeletePublicAccessBlockOutput";
import { DescribeJobOutput } from "./DescribeJobOutput";
import { GetPublicAccessBlockOutput } from "./GetPublicAccessBlockOutput";
import { ListJobsOutput } from "./ListJobsOutput";
import { PutPublicAccessBlockOutput } from "./PutPublicAccessBlockOutput";
import { UpdateJobPriorityOutput } from "./UpdateJobPriorityOutput";
import { UpdateJobStatusOutput } from "./UpdateJobStatusOutput";
export type OutputTypesUnion =
  | CreateJobOutput
  | DeletePublicAccessBlockOutput
  | DescribeJobOutput
  | GetPublicAccessBlockOutput
  | ListJobsOutput
  | PutPublicAccessBlockOutput
  | UpdateJobPriorityOutput
  | UpdateJobStatusOutput;
