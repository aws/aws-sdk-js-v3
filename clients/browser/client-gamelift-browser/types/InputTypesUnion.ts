import { AcceptMatchInput } from "./AcceptMatchInput";
import { CreateAliasInput } from "./CreateAliasInput";
import { CreateBuildInput } from "./CreateBuildInput";
import { CreateFleetInput } from "./CreateFleetInput";
import { CreateGameSessionInput } from "./CreateGameSessionInput";
import { CreateGameSessionQueueInput } from "./CreateGameSessionQueueInput";
import { CreateMatchmakingConfigurationInput } from "./CreateMatchmakingConfigurationInput";
import { CreateMatchmakingRuleSetInput } from "./CreateMatchmakingRuleSetInput";
import { CreatePlayerSessionInput } from "./CreatePlayerSessionInput";
import { CreatePlayerSessionsInput } from "./CreatePlayerSessionsInput";
import { CreateScriptInput } from "./CreateScriptInput";
import { CreateVpcPeeringAuthorizationInput } from "./CreateVpcPeeringAuthorizationInput";
import { CreateVpcPeeringConnectionInput } from "./CreateVpcPeeringConnectionInput";
import { DeleteAliasInput } from "./DeleteAliasInput";
import { DeleteBuildInput } from "./DeleteBuildInput";
import { DeleteFleetInput } from "./DeleteFleetInput";
import { DeleteGameSessionQueueInput } from "./DeleteGameSessionQueueInput";
import { DeleteMatchmakingConfigurationInput } from "./DeleteMatchmakingConfigurationInput";
import { DeleteMatchmakingRuleSetInput } from "./DeleteMatchmakingRuleSetInput";
import { DeleteScalingPolicyInput } from "./DeleteScalingPolicyInput";
import { DeleteScriptInput } from "./DeleteScriptInput";
import { DeleteVpcPeeringAuthorizationInput } from "./DeleteVpcPeeringAuthorizationInput";
import { DeleteVpcPeeringConnectionInput } from "./DeleteVpcPeeringConnectionInput";
import { DescribeAliasInput } from "./DescribeAliasInput";
import { DescribeBuildInput } from "./DescribeBuildInput";
import { DescribeEC2InstanceLimitsInput } from "./DescribeEC2InstanceLimitsInput";
import { DescribeFleetAttributesInput } from "./DescribeFleetAttributesInput";
import { DescribeFleetCapacityInput } from "./DescribeFleetCapacityInput";
import { DescribeFleetEventsInput } from "./DescribeFleetEventsInput";
import { DescribeFleetPortSettingsInput } from "./DescribeFleetPortSettingsInput";
import { DescribeFleetUtilizationInput } from "./DescribeFleetUtilizationInput";
import { DescribeGameSessionDetailsInput } from "./DescribeGameSessionDetailsInput";
import { DescribeGameSessionPlacementInput } from "./DescribeGameSessionPlacementInput";
import { DescribeGameSessionQueuesInput } from "./DescribeGameSessionQueuesInput";
import { DescribeGameSessionsInput } from "./DescribeGameSessionsInput";
import { DescribeInstancesInput } from "./DescribeInstancesInput";
import { DescribeMatchmakingInput } from "./DescribeMatchmakingInput";
import { DescribeMatchmakingConfigurationsInput } from "./DescribeMatchmakingConfigurationsInput";
import { DescribeMatchmakingRuleSetsInput } from "./DescribeMatchmakingRuleSetsInput";
import { DescribePlayerSessionsInput } from "./DescribePlayerSessionsInput";
import { DescribeRuntimeConfigurationInput } from "./DescribeRuntimeConfigurationInput";
import { DescribeScalingPoliciesInput } from "./DescribeScalingPoliciesInput";
import { DescribeScriptInput } from "./DescribeScriptInput";
import { DescribeVpcPeeringAuthorizationsInput } from "./DescribeVpcPeeringAuthorizationsInput";
import { DescribeVpcPeeringConnectionsInput } from "./DescribeVpcPeeringConnectionsInput";
import { GetGameSessionLogUrlInput } from "./GetGameSessionLogUrlInput";
import { GetInstanceAccessInput } from "./GetInstanceAccessInput";
import { ListAliasesInput } from "./ListAliasesInput";
import { ListBuildsInput } from "./ListBuildsInput";
import { ListFleetsInput } from "./ListFleetsInput";
import { ListScriptsInput } from "./ListScriptsInput";
import { PutScalingPolicyInput } from "./PutScalingPolicyInput";
import { RequestUploadCredentialsInput } from "./RequestUploadCredentialsInput";
import { ResolveAliasInput } from "./ResolveAliasInput";
import { SearchGameSessionsInput } from "./SearchGameSessionsInput";
import { StartFleetActionsInput } from "./StartFleetActionsInput";
import { StartGameSessionPlacementInput } from "./StartGameSessionPlacementInput";
import { StartMatchBackfillInput } from "./StartMatchBackfillInput";
import { StartMatchmakingInput } from "./StartMatchmakingInput";
import { StopFleetActionsInput } from "./StopFleetActionsInput";
import { StopGameSessionPlacementInput } from "./StopGameSessionPlacementInput";
import { StopMatchmakingInput } from "./StopMatchmakingInput";
import { UpdateAliasInput } from "./UpdateAliasInput";
import { UpdateBuildInput } from "./UpdateBuildInput";
import { UpdateFleetAttributesInput } from "./UpdateFleetAttributesInput";
import { UpdateFleetCapacityInput } from "./UpdateFleetCapacityInput";
import { UpdateFleetPortSettingsInput } from "./UpdateFleetPortSettingsInput";
import { UpdateGameSessionInput } from "./UpdateGameSessionInput";
import { UpdateGameSessionQueueInput } from "./UpdateGameSessionQueueInput";
import { UpdateMatchmakingConfigurationInput } from "./UpdateMatchmakingConfigurationInput";
import { UpdateRuntimeConfigurationInput } from "./UpdateRuntimeConfigurationInput";
import { UpdateScriptInput } from "./UpdateScriptInput";
import { ValidateMatchmakingRuleSetInput } from "./ValidateMatchmakingRuleSetInput";
export type InputTypesUnion =
  | AcceptMatchInput
  | CreateAliasInput
  | CreateBuildInput
  | CreateFleetInput
  | CreateGameSessionInput
  | CreateGameSessionQueueInput
  | CreateMatchmakingConfigurationInput
  | CreateMatchmakingRuleSetInput
  | CreatePlayerSessionInput
  | CreatePlayerSessionsInput
  | CreateScriptInput
  | CreateVpcPeeringAuthorizationInput
  | CreateVpcPeeringConnectionInput
  | DeleteAliasInput
  | DeleteBuildInput
  | DeleteFleetInput
  | DeleteGameSessionQueueInput
  | DeleteMatchmakingConfigurationInput
  | DeleteMatchmakingRuleSetInput
  | DeleteScalingPolicyInput
  | DeleteScriptInput
  | DeleteVpcPeeringAuthorizationInput
  | DeleteVpcPeeringConnectionInput
  | DescribeAliasInput
  | DescribeBuildInput
  | DescribeEC2InstanceLimitsInput
  | DescribeFleetAttributesInput
  | DescribeFleetCapacityInput
  | DescribeFleetEventsInput
  | DescribeFleetPortSettingsInput
  | DescribeFleetUtilizationInput
  | DescribeGameSessionDetailsInput
  | DescribeGameSessionPlacementInput
  | DescribeGameSessionQueuesInput
  | DescribeGameSessionsInput
  | DescribeInstancesInput
  | DescribeMatchmakingInput
  | DescribeMatchmakingConfigurationsInput
  | DescribeMatchmakingRuleSetsInput
  | DescribePlayerSessionsInput
  | DescribeRuntimeConfigurationInput
  | DescribeScalingPoliciesInput
  | DescribeScriptInput
  | DescribeVpcPeeringAuthorizationsInput
  | DescribeVpcPeeringConnectionsInput
  | GetGameSessionLogUrlInput
  | GetInstanceAccessInput
  | ListAliasesInput
  | ListBuildsInput
  | ListFleetsInput
  | ListScriptsInput
  | PutScalingPolicyInput
  | RequestUploadCredentialsInput
  | ResolveAliasInput
  | SearchGameSessionsInput
  | StartFleetActionsInput
  | StartGameSessionPlacementInput
  | StartMatchBackfillInput
  | StartMatchmakingInput
  | StopFleetActionsInput
  | StopGameSessionPlacementInput
  | StopMatchmakingInput
  | UpdateAliasInput
  | UpdateBuildInput
  | UpdateFleetAttributesInput
  | UpdateFleetCapacityInput
  | UpdateFleetPortSettingsInput
  | UpdateGameSessionInput
  | UpdateGameSessionQueueInput
  | UpdateMatchmakingConfigurationInput
  | UpdateRuntimeConfigurationInput
  | UpdateScriptInput
  | ValidateMatchmakingRuleSetInput;
