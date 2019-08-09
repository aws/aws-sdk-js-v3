import { CreateClusterInput } from "./CreateClusterInput";
import { CreateServiceInput } from "./CreateServiceInput";
import { CreateTaskSetInput } from "./CreateTaskSetInput";
import { DeleteAccountSettingInput } from "./DeleteAccountSettingInput";
import { DeleteAttributesInput } from "./DeleteAttributesInput";
import { DeleteClusterInput } from "./DeleteClusterInput";
import { DeleteServiceInput } from "./DeleteServiceInput";
import { DeleteTaskSetInput } from "./DeleteTaskSetInput";
import { DeregisterContainerInstanceInput } from "./DeregisterContainerInstanceInput";
import { DeregisterTaskDefinitionInput } from "./DeregisterTaskDefinitionInput";
import { DescribeClustersInput } from "./DescribeClustersInput";
import { DescribeContainerInstancesInput } from "./DescribeContainerInstancesInput";
import { DescribeServicesInput } from "./DescribeServicesInput";
import { DescribeTaskDefinitionInput } from "./DescribeTaskDefinitionInput";
import { DescribeTaskSetsInput } from "./DescribeTaskSetsInput";
import { DescribeTasksInput } from "./DescribeTasksInput";
import { DiscoverPollEndpointInput } from "./DiscoverPollEndpointInput";
import { ListAccountSettingsInput } from "./ListAccountSettingsInput";
import { ListAttributesInput } from "./ListAttributesInput";
import { ListClustersInput } from "./ListClustersInput";
import { ListContainerInstancesInput } from "./ListContainerInstancesInput";
import { ListServicesInput } from "./ListServicesInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListTaskDefinitionFamiliesInput } from "./ListTaskDefinitionFamiliesInput";
import { ListTaskDefinitionsInput } from "./ListTaskDefinitionsInput";
import { ListTasksInput } from "./ListTasksInput";
import { PutAccountSettingInput } from "./PutAccountSettingInput";
import { PutAccountSettingDefaultInput } from "./PutAccountSettingDefaultInput";
import { PutAttributesInput } from "./PutAttributesInput";
import { RegisterContainerInstanceInput } from "./RegisterContainerInstanceInput";
import { RegisterTaskDefinitionInput } from "./RegisterTaskDefinitionInput";
import { RunTaskInput } from "./RunTaskInput";
import { StartTaskInput } from "./StartTaskInput";
import { StopTaskInput } from "./StopTaskInput";
import { SubmitAttachmentStateChangesInput } from "./SubmitAttachmentStateChangesInput";
import { SubmitContainerStateChangeInput } from "./SubmitContainerStateChangeInput";
import { SubmitTaskStateChangeInput } from "./SubmitTaskStateChangeInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateContainerAgentInput } from "./UpdateContainerAgentInput";
import { UpdateContainerInstancesStateInput } from "./UpdateContainerInstancesStateInput";
import { UpdateServiceInput } from "./UpdateServiceInput";
import { UpdateServicePrimaryTaskSetInput } from "./UpdateServicePrimaryTaskSetInput";
import { UpdateTaskSetInput } from "./UpdateTaskSetInput";
export type InputTypesUnion =
  | CreateClusterInput
  | CreateServiceInput
  | CreateTaskSetInput
  | DeleteAccountSettingInput
  | DeleteAttributesInput
  | DeleteClusterInput
  | DeleteServiceInput
  | DeleteTaskSetInput
  | DeregisterContainerInstanceInput
  | DeregisterTaskDefinitionInput
  | DescribeClustersInput
  | DescribeContainerInstancesInput
  | DescribeServicesInput
  | DescribeTaskDefinitionInput
  | DescribeTaskSetsInput
  | DescribeTasksInput
  | DiscoverPollEndpointInput
  | ListAccountSettingsInput
  | ListAttributesInput
  | ListClustersInput
  | ListContainerInstancesInput
  | ListServicesInput
  | ListTagsForResourceInput
  | ListTaskDefinitionFamiliesInput
  | ListTaskDefinitionsInput
  | ListTasksInput
  | PutAccountSettingInput
  | PutAccountSettingDefaultInput
  | PutAttributesInput
  | RegisterContainerInstanceInput
  | RegisterTaskDefinitionInput
  | RunTaskInput
  | StartTaskInput
  | StopTaskInput
  | SubmitAttachmentStateChangesInput
  | SubmitContainerStateChangeInput
  | SubmitTaskStateChangeInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateContainerAgentInput
  | UpdateContainerInstancesStateInput
  | UpdateServiceInput
  | UpdateServicePrimaryTaskSetInput
  | UpdateTaskSetInput;
