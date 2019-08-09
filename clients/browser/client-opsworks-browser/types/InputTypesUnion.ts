import { AssignInstanceInput } from "./AssignInstanceInput";
import { AssignVolumeInput } from "./AssignVolumeInput";
import { AssociateElasticIpInput } from "./AssociateElasticIpInput";
import { AttachElasticLoadBalancerInput } from "./AttachElasticLoadBalancerInput";
import { CloneStackInput } from "./CloneStackInput";
import { CreateAppInput } from "./CreateAppInput";
import { CreateDeploymentInput } from "./CreateDeploymentInput";
import { CreateInstanceInput } from "./CreateInstanceInput";
import { CreateLayerInput } from "./CreateLayerInput";
import { CreateStackInput } from "./CreateStackInput";
import { CreateUserProfileInput } from "./CreateUserProfileInput";
import { DeleteAppInput } from "./DeleteAppInput";
import { DeleteInstanceInput } from "./DeleteInstanceInput";
import { DeleteLayerInput } from "./DeleteLayerInput";
import { DeleteStackInput } from "./DeleteStackInput";
import { DeleteUserProfileInput } from "./DeleteUserProfileInput";
import { DeregisterEcsClusterInput } from "./DeregisterEcsClusterInput";
import { DeregisterElasticIpInput } from "./DeregisterElasticIpInput";
import { DeregisterInstanceInput } from "./DeregisterInstanceInput";
import { DeregisterRdsDbInstanceInput } from "./DeregisterRdsDbInstanceInput";
import { DeregisterVolumeInput } from "./DeregisterVolumeInput";
import { DescribeAgentVersionsInput } from "./DescribeAgentVersionsInput";
import { DescribeAppsInput } from "./DescribeAppsInput";
import { DescribeCommandsInput } from "./DescribeCommandsInput";
import { DescribeDeploymentsInput } from "./DescribeDeploymentsInput";
import { DescribeEcsClustersInput } from "./DescribeEcsClustersInput";
import { DescribeElasticIpsInput } from "./DescribeElasticIpsInput";
import { DescribeElasticLoadBalancersInput } from "./DescribeElasticLoadBalancersInput";
import { DescribeInstancesInput } from "./DescribeInstancesInput";
import { DescribeLayersInput } from "./DescribeLayersInput";
import { DescribeLoadBasedAutoScalingInput } from "./DescribeLoadBasedAutoScalingInput";
import { DescribeMyUserProfileInput } from "./DescribeMyUserProfileInput";
import { DescribeOperatingSystemsInput } from "./DescribeOperatingSystemsInput";
import { DescribePermissionsInput } from "./DescribePermissionsInput";
import { DescribeRaidArraysInput } from "./DescribeRaidArraysInput";
import { DescribeRdsDbInstancesInput } from "./DescribeRdsDbInstancesInput";
import { DescribeServiceErrorsInput } from "./DescribeServiceErrorsInput";
import { DescribeStackProvisioningParametersInput } from "./DescribeStackProvisioningParametersInput";
import { DescribeStackSummaryInput } from "./DescribeStackSummaryInput";
import { DescribeStacksInput } from "./DescribeStacksInput";
import { DescribeTimeBasedAutoScalingInput } from "./DescribeTimeBasedAutoScalingInput";
import { DescribeUserProfilesInput } from "./DescribeUserProfilesInput";
import { DescribeVolumesInput } from "./DescribeVolumesInput";
import { DetachElasticLoadBalancerInput } from "./DetachElasticLoadBalancerInput";
import { DisassociateElasticIpInput } from "./DisassociateElasticIpInput";
import { GetHostnameSuggestionInput } from "./GetHostnameSuggestionInput";
import { GrantAccessInput } from "./GrantAccessInput";
import { ListTagsInput } from "./ListTagsInput";
import { RebootInstanceInput } from "./RebootInstanceInput";
import { RegisterEcsClusterInput } from "./RegisterEcsClusterInput";
import { RegisterElasticIpInput } from "./RegisterElasticIpInput";
import { RegisterInstanceInput } from "./RegisterInstanceInput";
import { RegisterRdsDbInstanceInput } from "./RegisterRdsDbInstanceInput";
import { RegisterVolumeInput } from "./RegisterVolumeInput";
import { SetLoadBasedAutoScalingInput } from "./SetLoadBasedAutoScalingInput";
import { SetPermissionInput } from "./SetPermissionInput";
import { SetTimeBasedAutoScalingInput } from "./SetTimeBasedAutoScalingInput";
import { StartInstanceInput } from "./StartInstanceInput";
import { StartStackInput } from "./StartStackInput";
import { StopInstanceInput } from "./StopInstanceInput";
import { StopStackInput } from "./StopStackInput";
import { TagResourceInput } from "./TagResourceInput";
import { UnassignInstanceInput } from "./UnassignInstanceInput";
import { UnassignVolumeInput } from "./UnassignVolumeInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateAppInput } from "./UpdateAppInput";
import { UpdateElasticIpInput } from "./UpdateElasticIpInput";
import { UpdateInstanceInput } from "./UpdateInstanceInput";
import { UpdateLayerInput } from "./UpdateLayerInput";
import { UpdateMyUserProfileInput } from "./UpdateMyUserProfileInput";
import { UpdateRdsDbInstanceInput } from "./UpdateRdsDbInstanceInput";
import { UpdateStackInput } from "./UpdateStackInput";
import { UpdateUserProfileInput } from "./UpdateUserProfileInput";
import { UpdateVolumeInput } from "./UpdateVolumeInput";
export type InputTypesUnion =
  | AssignInstanceInput
  | AssignVolumeInput
  | AssociateElasticIpInput
  | AttachElasticLoadBalancerInput
  | CloneStackInput
  | CreateAppInput
  | CreateDeploymentInput
  | CreateInstanceInput
  | CreateLayerInput
  | CreateStackInput
  | CreateUserProfileInput
  | DeleteAppInput
  | DeleteInstanceInput
  | DeleteLayerInput
  | DeleteStackInput
  | DeleteUserProfileInput
  | DeregisterEcsClusterInput
  | DeregisterElasticIpInput
  | DeregisterInstanceInput
  | DeregisterRdsDbInstanceInput
  | DeregisterVolumeInput
  | DescribeAgentVersionsInput
  | DescribeAppsInput
  | DescribeCommandsInput
  | DescribeDeploymentsInput
  | DescribeEcsClustersInput
  | DescribeElasticIpsInput
  | DescribeElasticLoadBalancersInput
  | DescribeInstancesInput
  | DescribeLayersInput
  | DescribeLoadBasedAutoScalingInput
  | DescribeMyUserProfileInput
  | DescribeOperatingSystemsInput
  | DescribePermissionsInput
  | DescribeRaidArraysInput
  | DescribeRdsDbInstancesInput
  | DescribeServiceErrorsInput
  | DescribeStackProvisioningParametersInput
  | DescribeStackSummaryInput
  | DescribeStacksInput
  | DescribeTimeBasedAutoScalingInput
  | DescribeUserProfilesInput
  | DescribeVolumesInput
  | DetachElasticLoadBalancerInput
  | DisassociateElasticIpInput
  | GetHostnameSuggestionInput
  | GrantAccessInput
  | ListTagsInput
  | RebootInstanceInput
  | RegisterEcsClusterInput
  | RegisterElasticIpInput
  | RegisterInstanceInput
  | RegisterRdsDbInstanceInput
  | RegisterVolumeInput
  | SetLoadBasedAutoScalingInput
  | SetPermissionInput
  | SetTimeBasedAutoScalingInput
  | StartInstanceInput
  | StartStackInput
  | StopInstanceInput
  | StopStackInput
  | TagResourceInput
  | UnassignInstanceInput
  | UnassignVolumeInput
  | UntagResourceInput
  | UpdateAppInput
  | UpdateElasticIpInput
  | UpdateInstanceInput
  | UpdateLayerInput
  | UpdateMyUserProfileInput
  | UpdateRdsDbInstanceInput
  | UpdateStackInput
  | UpdateUserProfileInput
  | UpdateVolumeInput;
