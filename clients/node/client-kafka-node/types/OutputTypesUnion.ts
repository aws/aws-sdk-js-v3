import { CreateClusterOutput } from "./CreateClusterOutput";
import { CreateConfigurationOutput } from "./CreateConfigurationOutput";
import { DeleteClusterOutput } from "./DeleteClusterOutput";
import { DescribeClusterOutput } from "./DescribeClusterOutput";
import { DescribeClusterOperationOutput } from "./DescribeClusterOperationOutput";
import { DescribeConfigurationOutput } from "./DescribeConfigurationOutput";
import { DescribeConfigurationRevisionOutput } from "./DescribeConfigurationRevisionOutput";
import { GetBootstrapBrokersOutput } from "./GetBootstrapBrokersOutput";
import { ListClusterOperationsOutput } from "./ListClusterOperationsOutput";
import { ListClustersOutput } from "./ListClustersOutput";
import { ListConfigurationRevisionsOutput } from "./ListConfigurationRevisionsOutput";
import { ListConfigurationsOutput } from "./ListConfigurationsOutput";
import { ListNodesOutput } from "./ListNodesOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateBrokerStorageOutput } from "./UpdateBrokerStorageOutput";
import { UpdateClusterConfigurationOutput } from "./UpdateClusterConfigurationOutput";
export type OutputTypesUnion =
  | CreateClusterOutput
  | CreateConfigurationOutput
  | DeleteClusterOutput
  | DescribeClusterOutput
  | DescribeClusterOperationOutput
  | DescribeConfigurationOutput
  | DescribeConfigurationRevisionOutput
  | GetBootstrapBrokersOutput
  | ListClusterOperationsOutput
  | ListClustersOutput
  | ListConfigurationRevisionsOutput
  | ListConfigurationsOutput
  | ListNodesOutput
  | ListTagsForResourceOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateBrokerStorageOutput
  | UpdateClusterConfigurationOutput;
