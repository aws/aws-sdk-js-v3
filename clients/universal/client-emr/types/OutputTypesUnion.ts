import { AddInstanceFleetOutput } from "./AddInstanceFleetOutput";
import { AddInstanceGroupsOutput } from "./AddInstanceGroupsOutput";
import { AddJobFlowStepsOutput } from "./AddJobFlowStepsOutput";
import { AddTagsOutput } from "./AddTagsOutput";
import { CancelStepsOutput } from "./CancelStepsOutput";
import { CreateSecurityConfigurationOutput } from "./CreateSecurityConfigurationOutput";
import { DeleteSecurityConfigurationOutput } from "./DeleteSecurityConfigurationOutput";
import { DescribeClusterOutput } from "./DescribeClusterOutput";
import { DescribeJobFlowsOutput } from "./DescribeJobFlowsOutput";
import { DescribeSecurityConfigurationOutput } from "./DescribeSecurityConfigurationOutput";
import { DescribeStepOutput } from "./DescribeStepOutput";
import { ListBootstrapActionsOutput } from "./ListBootstrapActionsOutput";
import { ListClustersOutput } from "./ListClustersOutput";
import { ListInstanceFleetsOutput } from "./ListInstanceFleetsOutput";
import { ListInstanceGroupsOutput } from "./ListInstanceGroupsOutput";
import { ListInstancesOutput } from "./ListInstancesOutput";
import { ListSecurityConfigurationsOutput } from "./ListSecurityConfigurationsOutput";
import { ListStepsOutput } from "./ListStepsOutput";
import { ModifyInstanceFleetOutput } from "./ModifyInstanceFleetOutput";
import { ModifyInstanceGroupsOutput } from "./ModifyInstanceGroupsOutput";
import { PutAutoScalingPolicyOutput } from "./PutAutoScalingPolicyOutput";
import { RemoveAutoScalingPolicyOutput } from "./RemoveAutoScalingPolicyOutput";
import { RemoveTagsOutput } from "./RemoveTagsOutput";
import { RunJobFlowOutput } from "./RunJobFlowOutput";
import { SetTerminationProtectionOutput } from "./SetTerminationProtectionOutput";
import { SetVisibleToAllUsersOutput } from "./SetVisibleToAllUsersOutput";
import { TerminateJobFlowsOutput } from "./TerminateJobFlowsOutput";
export type OutputTypesUnion =
  | AddInstanceFleetOutput
  | AddInstanceGroupsOutput
  | AddJobFlowStepsOutput
  | AddTagsOutput
  | CancelStepsOutput
  | CreateSecurityConfigurationOutput
  | DeleteSecurityConfigurationOutput
  | DescribeClusterOutput
  | DescribeJobFlowsOutput
  | DescribeSecurityConfigurationOutput
  | DescribeStepOutput
  | ListBootstrapActionsOutput
  | ListClustersOutput
  | ListInstanceFleetsOutput
  | ListInstanceGroupsOutput
  | ListInstancesOutput
  | ListSecurityConfigurationsOutput
  | ListStepsOutput
  | ModifyInstanceFleetOutput
  | ModifyInstanceGroupsOutput
  | PutAutoScalingPolicyOutput
  | RemoveAutoScalingPolicyOutput
  | RemoveTagsOutput
  | RunJobFlowOutput
  | SetTerminationProtectionOutput
  | SetVisibleToAllUsersOutput
  | TerminateJobFlowsOutput;
