import { CancelClusterInput } from "./CancelClusterInput";
import { CancelJobInput } from "./CancelJobInput";
import { CreateAddressInput } from "./CreateAddressInput";
import { CreateClusterInput } from "./CreateClusterInput";
import { CreateJobInput } from "./CreateJobInput";
import { DescribeAddressInput } from "./DescribeAddressInput";
import { DescribeAddressesInput } from "./DescribeAddressesInput";
import { DescribeClusterInput } from "./DescribeClusterInput";
import { DescribeJobInput } from "./DescribeJobInput";
import { GetJobManifestInput } from "./GetJobManifestInput";
import { GetJobUnlockCodeInput } from "./GetJobUnlockCodeInput";
import { GetSnowballUsageInput } from "./GetSnowballUsageInput";
import { ListClusterJobsInput } from "./ListClusterJobsInput";
import { ListClustersInput } from "./ListClustersInput";
import { ListCompatibleImagesInput } from "./ListCompatibleImagesInput";
import { ListJobsInput } from "./ListJobsInput";
import { UpdateClusterInput } from "./UpdateClusterInput";
import { UpdateJobInput } from "./UpdateJobInput";
export type InputTypesUnion =
  | CancelClusterInput
  | CancelJobInput
  | CreateAddressInput
  | CreateClusterInput
  | CreateJobInput
  | DescribeAddressInput
  | DescribeAddressesInput
  | DescribeClusterInput
  | DescribeJobInput
  | GetJobManifestInput
  | GetJobUnlockCodeInput
  | GetSnowballUsageInput
  | ListClusterJobsInput
  | ListClustersInput
  | ListCompatibleImagesInput
  | ListJobsInput
  | UpdateClusterInput
  | UpdateJobInput;
