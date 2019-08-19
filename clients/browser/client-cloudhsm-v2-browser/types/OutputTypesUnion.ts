import { CopyBackupToRegionOutput } from "./CopyBackupToRegionOutput";
import { CreateClusterOutput } from "./CreateClusterOutput";
import { CreateHsmOutput } from "./CreateHsmOutput";
import { DeleteBackupOutput } from "./DeleteBackupOutput";
import { DeleteClusterOutput } from "./DeleteClusterOutput";
import { DeleteHsmOutput } from "./DeleteHsmOutput";
import { DescribeBackupsOutput } from "./DescribeBackupsOutput";
import { DescribeClustersOutput } from "./DescribeClustersOutput";
import { InitializeClusterOutput } from "./InitializeClusterOutput";
import { ListTagsOutput } from "./ListTagsOutput";
import { RestoreBackupOutput } from "./RestoreBackupOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
export type OutputTypesUnion =
  | CopyBackupToRegionOutput
  | CreateClusterOutput
  | CreateHsmOutput
  | DeleteBackupOutput
  | DeleteClusterOutput
  | DeleteHsmOutput
  | DescribeBackupsOutput
  | DescribeClustersOutput
  | InitializeClusterOutput
  | ListTagsOutput
  | RestoreBackupOutput
  | TagResourceOutput
  | UntagResourceOutput;
