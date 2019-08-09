import { CreateClusterInput } from "./CreateClusterInput";
import { DeleteClusterInput } from "./DeleteClusterInput";
import { DescribeClusterInput } from "./DescribeClusterInput";
import { DescribeUpdateInput } from "./DescribeUpdateInput";
import { ListClustersInput } from "./ListClustersInput";
import { ListUpdatesInput } from "./ListUpdatesInput";
import { UpdateClusterConfigInput } from "./UpdateClusterConfigInput";
import { UpdateClusterVersionInput } from "./UpdateClusterVersionInput";
export type InputTypesUnion =
  | CreateClusterInput
  | DeleteClusterInput
  | DescribeClusterInput
  | DescribeUpdateInput
  | ListClustersInput
  | ListUpdatesInput
  | UpdateClusterConfigInput
  | UpdateClusterVersionInput;
