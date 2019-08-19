import { CopyBackupToRegionInput } from "./CopyBackupToRegionInput";
import { CreateClusterInput } from "./CreateClusterInput";
import { CreateHsmInput } from "./CreateHsmInput";
import { DeleteBackupInput } from "./DeleteBackupInput";
import { DeleteClusterInput } from "./DeleteClusterInput";
import { DeleteHsmInput } from "./DeleteHsmInput";
import { DescribeBackupsInput } from "./DescribeBackupsInput";
import { DescribeClustersInput } from "./DescribeClustersInput";
import { InitializeClusterInput } from "./InitializeClusterInput";
import { ListTagsInput } from "./ListTagsInput";
import { RestoreBackupInput } from "./RestoreBackupInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
export type InputTypesUnion =
  | CopyBackupToRegionInput
  | CreateClusterInput
  | CreateHsmInput
  | DeleteBackupInput
  | DeleteClusterInput
  | DeleteHsmInput
  | DescribeBackupsInput
  | DescribeClustersInput
  | InitializeClusterInput
  | ListTagsInput
  | RestoreBackupInput
  | TagResourceInput
  | UntagResourceInput;
