import { AddInstanceFleetInput } from "./AddInstanceFleetInput";
import { AddInstanceGroupsInput } from "./AddInstanceGroupsInput";
import { AddJobFlowStepsInput } from "./AddJobFlowStepsInput";
import { AddTagsInput } from "./AddTagsInput";
import { CancelStepsInput } from "./CancelStepsInput";
import { CreateSecurityConfigurationInput } from "./CreateSecurityConfigurationInput";
import { DeleteSecurityConfigurationInput } from "./DeleteSecurityConfigurationInput";
import { DescribeClusterInput } from "./DescribeClusterInput";
import { DescribeJobFlowsInput } from "./DescribeJobFlowsInput";
import { DescribeSecurityConfigurationInput } from "./DescribeSecurityConfigurationInput";
import { DescribeStepInput } from "./DescribeStepInput";
import { ListBootstrapActionsInput } from "./ListBootstrapActionsInput";
import { ListClustersInput } from "./ListClustersInput";
import { ListInstanceFleetsInput } from "./ListInstanceFleetsInput";
import { ListInstanceGroupsInput } from "./ListInstanceGroupsInput";
import { ListInstancesInput } from "./ListInstancesInput";
import { ListSecurityConfigurationsInput } from "./ListSecurityConfigurationsInput";
import { ListStepsInput } from "./ListStepsInput";
import { ModifyInstanceFleetInput } from "./ModifyInstanceFleetInput";
import { ModifyInstanceGroupsInput } from "./ModifyInstanceGroupsInput";
import { PutAutoScalingPolicyInput } from "./PutAutoScalingPolicyInput";
import { RemoveAutoScalingPolicyInput } from "./RemoveAutoScalingPolicyInput";
import { RemoveTagsInput } from "./RemoveTagsInput";
import { RunJobFlowInput } from "./RunJobFlowInput";
import { SetTerminationProtectionInput } from "./SetTerminationProtectionInput";
import { SetVisibleToAllUsersInput } from "./SetVisibleToAllUsersInput";
import { TerminateJobFlowsInput } from "./TerminateJobFlowsInput";
export type InputTypesUnion =
  | AddInstanceFleetInput
  | AddInstanceGroupsInput
  | AddJobFlowStepsInput
  | AddTagsInput
  | CancelStepsInput
  | CreateSecurityConfigurationInput
  | DeleteSecurityConfigurationInput
  | DescribeClusterInput
  | DescribeJobFlowsInput
  | DescribeSecurityConfigurationInput
  | DescribeStepInput
  | ListBootstrapActionsInput
  | ListClustersInput
  | ListInstanceFleetsInput
  | ListInstanceGroupsInput
  | ListInstancesInput
  | ListSecurityConfigurationsInput
  | ListStepsInput
  | ModifyInstanceFleetInput
  | ModifyInstanceGroupsInput
  | PutAutoScalingPolicyInput
  | RemoveAutoScalingPolicyInput
  | RemoveTagsInput
  | RunJobFlowInput
  | SetTerminationProtectionInput
  | SetVisibleToAllUsersInput
  | TerminateJobFlowsInput;
