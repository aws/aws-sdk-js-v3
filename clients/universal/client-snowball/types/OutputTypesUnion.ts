import { CancelClusterOutput } from "./CancelClusterOutput";
import { CancelJobOutput } from "./CancelJobOutput";
import { CreateAddressOutput } from "./CreateAddressOutput";
import { CreateClusterOutput } from "./CreateClusterOutput";
import { CreateJobOutput } from "./CreateJobOutput";
import { DescribeAddressOutput } from "./DescribeAddressOutput";
import { DescribeAddressesOutput } from "./DescribeAddressesOutput";
import { DescribeClusterOutput } from "./DescribeClusterOutput";
import { DescribeJobOutput } from "./DescribeJobOutput";
import { GetJobManifestOutput } from "./GetJobManifestOutput";
import { GetJobUnlockCodeOutput } from "./GetJobUnlockCodeOutput";
import { GetSnowballUsageOutput } from "./GetSnowballUsageOutput";
import { ListClusterJobsOutput } from "./ListClusterJobsOutput";
import { ListClustersOutput } from "./ListClustersOutput";
import { ListCompatibleImagesOutput } from "./ListCompatibleImagesOutput";
import { ListJobsOutput } from "./ListJobsOutput";
import { UpdateClusterOutput } from "./UpdateClusterOutput";
import { UpdateJobOutput } from "./UpdateJobOutput";
export type OutputTypesUnion =
  | CancelClusterOutput
  | CancelJobOutput
  | CreateAddressOutput
  | CreateClusterOutput
  | CreateJobOutput
  | DescribeAddressOutput
  | DescribeAddressesOutput
  | DescribeClusterOutput
  | DescribeJobOutput
  | GetJobManifestOutput
  | GetJobUnlockCodeOutput
  | GetSnowballUsageOutput
  | ListClusterJobsOutput
  | ListClustersOutput
  | ListCompatibleImagesOutput
  | ListJobsOutput
  | UpdateClusterOutput
  | UpdateJobOutput;
