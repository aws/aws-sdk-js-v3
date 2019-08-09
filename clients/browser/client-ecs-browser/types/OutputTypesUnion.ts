import { CreateClusterOutput } from "./CreateClusterOutput";
import { CreateServiceOutput } from "./CreateServiceOutput";
import { CreateTaskSetOutput } from "./CreateTaskSetOutput";
import { DeleteAccountSettingOutput } from "./DeleteAccountSettingOutput";
import { DeleteAttributesOutput } from "./DeleteAttributesOutput";
import { DeleteClusterOutput } from "./DeleteClusterOutput";
import { DeleteServiceOutput } from "./DeleteServiceOutput";
import { DeleteTaskSetOutput } from "./DeleteTaskSetOutput";
import { DeregisterContainerInstanceOutput } from "./DeregisterContainerInstanceOutput";
import { DeregisterTaskDefinitionOutput } from "./DeregisterTaskDefinitionOutput";
import { DescribeClustersOutput } from "./DescribeClustersOutput";
import { DescribeContainerInstancesOutput } from "./DescribeContainerInstancesOutput";
import { DescribeServicesOutput } from "./DescribeServicesOutput";
import { DescribeTaskDefinitionOutput } from "./DescribeTaskDefinitionOutput";
import { DescribeTaskSetsOutput } from "./DescribeTaskSetsOutput";
import { DescribeTasksOutput } from "./DescribeTasksOutput";
import { DiscoverPollEndpointOutput } from "./DiscoverPollEndpointOutput";
import { ListAccountSettingsOutput } from "./ListAccountSettingsOutput";
import { ListAttributesOutput } from "./ListAttributesOutput";
import { ListClustersOutput } from "./ListClustersOutput";
import { ListContainerInstancesOutput } from "./ListContainerInstancesOutput";
import { ListServicesOutput } from "./ListServicesOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ListTaskDefinitionFamiliesOutput } from "./ListTaskDefinitionFamiliesOutput";
import { ListTaskDefinitionsOutput } from "./ListTaskDefinitionsOutput";
import { ListTasksOutput } from "./ListTasksOutput";
import { PutAccountSettingOutput } from "./PutAccountSettingOutput";
import { PutAccountSettingDefaultOutput } from "./PutAccountSettingDefaultOutput";
import { PutAttributesOutput } from "./PutAttributesOutput";
import { RegisterContainerInstanceOutput } from "./RegisterContainerInstanceOutput";
import { RegisterTaskDefinitionOutput } from "./RegisterTaskDefinitionOutput";
import { RunTaskOutput } from "./RunTaskOutput";
import { StartTaskOutput } from "./StartTaskOutput";
import { StopTaskOutput } from "./StopTaskOutput";
import { SubmitAttachmentStateChangesOutput } from "./SubmitAttachmentStateChangesOutput";
import { SubmitContainerStateChangeOutput } from "./SubmitContainerStateChangeOutput";
import { SubmitTaskStateChangeOutput } from "./SubmitTaskStateChangeOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateContainerAgentOutput } from "./UpdateContainerAgentOutput";
import { UpdateContainerInstancesStateOutput } from "./UpdateContainerInstancesStateOutput";
import { UpdateServiceOutput } from "./UpdateServiceOutput";
import { UpdateServicePrimaryTaskSetOutput } from "./UpdateServicePrimaryTaskSetOutput";
import { UpdateTaskSetOutput } from "./UpdateTaskSetOutput";
export type OutputTypesUnion =
  | CreateClusterOutput
  | CreateServiceOutput
  | CreateTaskSetOutput
  | DeleteAccountSettingOutput
  | DeleteAttributesOutput
  | DeleteClusterOutput
  | DeleteServiceOutput
  | DeleteTaskSetOutput
  | DeregisterContainerInstanceOutput
  | DeregisterTaskDefinitionOutput
  | DescribeClustersOutput
  | DescribeContainerInstancesOutput
  | DescribeServicesOutput
  | DescribeTaskDefinitionOutput
  | DescribeTaskSetsOutput
  | DescribeTasksOutput
  | DiscoverPollEndpointOutput
  | ListAccountSettingsOutput
  | ListAttributesOutput
  | ListClustersOutput
  | ListContainerInstancesOutput
  | ListServicesOutput
  | ListTagsForResourceOutput
  | ListTaskDefinitionFamiliesOutput
  | ListTaskDefinitionsOutput
  | ListTasksOutput
  | PutAccountSettingOutput
  | PutAccountSettingDefaultOutput
  | PutAttributesOutput
  | RegisterContainerInstanceOutput
  | RegisterTaskDefinitionOutput
  | RunTaskOutput
  | StartTaskOutput
  | StopTaskOutput
  | SubmitAttachmentStateChangesOutput
  | SubmitContainerStateChangeOutput
  | SubmitTaskStateChangeOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateContainerAgentOutput
  | UpdateContainerInstancesStateOutput
  | UpdateServiceOutput
  | UpdateServicePrimaryTaskSetOutput
  | UpdateTaskSetOutput;
