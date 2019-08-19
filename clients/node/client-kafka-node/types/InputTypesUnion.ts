import { CreateClusterInput } from "./CreateClusterInput";
import { CreateConfigurationInput } from "./CreateConfigurationInput";
import { DeleteClusterInput } from "./DeleteClusterInput";
import { DescribeClusterInput } from "./DescribeClusterInput";
import { DescribeClusterOperationInput } from "./DescribeClusterOperationInput";
import { DescribeConfigurationInput } from "./DescribeConfigurationInput";
import { DescribeConfigurationRevisionInput } from "./DescribeConfigurationRevisionInput";
import { GetBootstrapBrokersInput } from "./GetBootstrapBrokersInput";
import { ListClusterOperationsInput } from "./ListClusterOperationsInput";
import { ListClustersInput } from "./ListClustersInput";
import { ListConfigurationRevisionsInput } from "./ListConfigurationRevisionsInput";
import { ListConfigurationsInput } from "./ListConfigurationsInput";
import { ListNodesInput } from "./ListNodesInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateBrokerStorageInput } from "./UpdateBrokerStorageInput";
import { UpdateClusterConfigurationInput } from "./UpdateClusterConfigurationInput";
export type InputTypesUnion =
  | CreateClusterInput
  | CreateConfigurationInput
  | DeleteClusterInput
  | DescribeClusterInput
  | DescribeClusterOperationInput
  | DescribeConfigurationInput
  | DescribeConfigurationRevisionInput
  | GetBootstrapBrokersInput
  | ListClusterOperationsInput
  | ListClustersInput
  | ListConfigurationRevisionsInput
  | ListConfigurationsInput
  | ListNodesInput
  | ListTagsForResourceInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateBrokerStorageInput
  | UpdateClusterConfigurationInput;
