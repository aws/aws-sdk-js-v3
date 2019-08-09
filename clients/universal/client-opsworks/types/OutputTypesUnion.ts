import { AssignInstanceOutput } from "./AssignInstanceOutput";
import { AssignVolumeOutput } from "./AssignVolumeOutput";
import { AssociateElasticIpOutput } from "./AssociateElasticIpOutput";
import { AttachElasticLoadBalancerOutput } from "./AttachElasticLoadBalancerOutput";
import { CloneStackOutput } from "./CloneStackOutput";
import { CreateAppOutput } from "./CreateAppOutput";
import { CreateDeploymentOutput } from "./CreateDeploymentOutput";
import { CreateInstanceOutput } from "./CreateInstanceOutput";
import { CreateLayerOutput } from "./CreateLayerOutput";
import { CreateStackOutput } from "./CreateStackOutput";
import { CreateUserProfileOutput } from "./CreateUserProfileOutput";
import { DeleteAppOutput } from "./DeleteAppOutput";
import { DeleteInstanceOutput } from "./DeleteInstanceOutput";
import { DeleteLayerOutput } from "./DeleteLayerOutput";
import { DeleteStackOutput } from "./DeleteStackOutput";
import { DeleteUserProfileOutput } from "./DeleteUserProfileOutput";
import { DeregisterEcsClusterOutput } from "./DeregisterEcsClusterOutput";
import { DeregisterElasticIpOutput } from "./DeregisterElasticIpOutput";
import { DeregisterInstanceOutput } from "./DeregisterInstanceOutput";
import { DeregisterRdsDbInstanceOutput } from "./DeregisterRdsDbInstanceOutput";
import { DeregisterVolumeOutput } from "./DeregisterVolumeOutput";
import { DescribeAgentVersionsOutput } from "./DescribeAgentVersionsOutput";
import { DescribeAppsOutput } from "./DescribeAppsOutput";
import { DescribeCommandsOutput } from "./DescribeCommandsOutput";
import { DescribeDeploymentsOutput } from "./DescribeDeploymentsOutput";
import { DescribeEcsClustersOutput } from "./DescribeEcsClustersOutput";
import { DescribeElasticIpsOutput } from "./DescribeElasticIpsOutput";
import { DescribeElasticLoadBalancersOutput } from "./DescribeElasticLoadBalancersOutput";
import { DescribeInstancesOutput } from "./DescribeInstancesOutput";
import { DescribeLayersOutput } from "./DescribeLayersOutput";
import { DescribeLoadBasedAutoScalingOutput } from "./DescribeLoadBasedAutoScalingOutput";
import { DescribeMyUserProfileOutput } from "./DescribeMyUserProfileOutput";
import { DescribeOperatingSystemsOutput } from "./DescribeOperatingSystemsOutput";
import { DescribePermissionsOutput } from "./DescribePermissionsOutput";
import { DescribeRaidArraysOutput } from "./DescribeRaidArraysOutput";
import { DescribeRdsDbInstancesOutput } from "./DescribeRdsDbInstancesOutput";
import { DescribeServiceErrorsOutput } from "./DescribeServiceErrorsOutput";
import { DescribeStackProvisioningParametersOutput } from "./DescribeStackProvisioningParametersOutput";
import { DescribeStackSummaryOutput } from "./DescribeStackSummaryOutput";
import { DescribeStacksOutput } from "./DescribeStacksOutput";
import { DescribeTimeBasedAutoScalingOutput } from "./DescribeTimeBasedAutoScalingOutput";
import { DescribeUserProfilesOutput } from "./DescribeUserProfilesOutput";
import { DescribeVolumesOutput } from "./DescribeVolumesOutput";
import { DetachElasticLoadBalancerOutput } from "./DetachElasticLoadBalancerOutput";
import { DisassociateElasticIpOutput } from "./DisassociateElasticIpOutput";
import { GetHostnameSuggestionOutput } from "./GetHostnameSuggestionOutput";
import { GrantAccessOutput } from "./GrantAccessOutput";
import { ListTagsOutput } from "./ListTagsOutput";
import { RebootInstanceOutput } from "./RebootInstanceOutput";
import { RegisterEcsClusterOutput } from "./RegisterEcsClusterOutput";
import { RegisterElasticIpOutput } from "./RegisterElasticIpOutput";
import { RegisterInstanceOutput } from "./RegisterInstanceOutput";
import { RegisterRdsDbInstanceOutput } from "./RegisterRdsDbInstanceOutput";
import { RegisterVolumeOutput } from "./RegisterVolumeOutput";
import { SetLoadBasedAutoScalingOutput } from "./SetLoadBasedAutoScalingOutput";
import { SetPermissionOutput } from "./SetPermissionOutput";
import { SetTimeBasedAutoScalingOutput } from "./SetTimeBasedAutoScalingOutput";
import { StartInstanceOutput } from "./StartInstanceOutput";
import { StartStackOutput } from "./StartStackOutput";
import { StopInstanceOutput } from "./StopInstanceOutput";
import { StopStackOutput } from "./StopStackOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UnassignInstanceOutput } from "./UnassignInstanceOutput";
import { UnassignVolumeOutput } from "./UnassignVolumeOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateAppOutput } from "./UpdateAppOutput";
import { UpdateElasticIpOutput } from "./UpdateElasticIpOutput";
import { UpdateInstanceOutput } from "./UpdateInstanceOutput";
import { UpdateLayerOutput } from "./UpdateLayerOutput";
import { UpdateMyUserProfileOutput } from "./UpdateMyUserProfileOutput";
import { UpdateRdsDbInstanceOutput } from "./UpdateRdsDbInstanceOutput";
import { UpdateStackOutput } from "./UpdateStackOutput";
import { UpdateUserProfileOutput } from "./UpdateUserProfileOutput";
import { UpdateVolumeOutput } from "./UpdateVolumeOutput";
export type OutputTypesUnion =
  | AssignInstanceOutput
  | AssignVolumeOutput
  | AssociateElasticIpOutput
  | AttachElasticLoadBalancerOutput
  | CloneStackOutput
  | CreateAppOutput
  | CreateDeploymentOutput
  | CreateInstanceOutput
  | CreateLayerOutput
  | CreateStackOutput
  | CreateUserProfileOutput
  | DeleteAppOutput
  | DeleteInstanceOutput
  | DeleteLayerOutput
  | DeleteStackOutput
  | DeleteUserProfileOutput
  | DeregisterEcsClusterOutput
  | DeregisterElasticIpOutput
  | DeregisterInstanceOutput
  | DeregisterRdsDbInstanceOutput
  | DeregisterVolumeOutput
  | DescribeAgentVersionsOutput
  | DescribeAppsOutput
  | DescribeCommandsOutput
  | DescribeDeploymentsOutput
  | DescribeEcsClustersOutput
  | DescribeElasticIpsOutput
  | DescribeElasticLoadBalancersOutput
  | DescribeInstancesOutput
  | DescribeLayersOutput
  | DescribeLoadBasedAutoScalingOutput
  | DescribeMyUserProfileOutput
  | DescribeOperatingSystemsOutput
  | DescribePermissionsOutput
  | DescribeRaidArraysOutput
  | DescribeRdsDbInstancesOutput
  | DescribeServiceErrorsOutput
  | DescribeStackProvisioningParametersOutput
  | DescribeStackSummaryOutput
  | DescribeStacksOutput
  | DescribeTimeBasedAutoScalingOutput
  | DescribeUserProfilesOutput
  | DescribeVolumesOutput
  | DetachElasticLoadBalancerOutput
  | DisassociateElasticIpOutput
  | GetHostnameSuggestionOutput
  | GrantAccessOutput
  | ListTagsOutput
  | RebootInstanceOutput
  | RegisterEcsClusterOutput
  | RegisterElasticIpOutput
  | RegisterInstanceOutput
  | RegisterRdsDbInstanceOutput
  | RegisterVolumeOutput
  | SetLoadBasedAutoScalingOutput
  | SetPermissionOutput
  | SetTimeBasedAutoScalingOutput
  | StartInstanceOutput
  | StartStackOutput
  | StopInstanceOutput
  | StopStackOutput
  | TagResourceOutput
  | UnassignInstanceOutput
  | UnassignVolumeOutput
  | UntagResourceOutput
  | UpdateAppOutput
  | UpdateElasticIpOutput
  | UpdateInstanceOutput
  | UpdateLayerOutput
  | UpdateMyUserProfileOutput
  | UpdateRdsDbInstanceOutput
  | UpdateStackOutput
  | UpdateUserProfileOutput
  | UpdateVolumeOutput;
