import { CreateClusterOutput } from "./CreateClusterOutput";
import { DeleteClusterOutput } from "./DeleteClusterOutput";
import { DescribeClusterOutput } from "./DescribeClusterOutput";
import { DescribeUpdateOutput } from "./DescribeUpdateOutput";
import { ListClustersOutput } from "./ListClustersOutput";
import { ListUpdatesOutput } from "./ListUpdatesOutput";
import { UpdateClusterConfigOutput } from "./UpdateClusterConfigOutput";
import { UpdateClusterVersionOutput } from "./UpdateClusterVersionOutput";
export type OutputTypesUnion =
  | CreateClusterOutput
  | DeleteClusterOutput
  | DescribeClusterOutput
  | DescribeUpdateOutput
  | ListClustersOutput
  | ListUpdatesOutput
  | UpdateClusterConfigOutput
  | UpdateClusterVersionOutput;
