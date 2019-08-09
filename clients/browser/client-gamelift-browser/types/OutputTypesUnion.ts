import { AcceptMatchOutput } from "./AcceptMatchOutput";
import { CreateAliasOutput } from "./CreateAliasOutput";
import { CreateBuildOutput } from "./CreateBuildOutput";
import { CreateFleetOutput } from "./CreateFleetOutput";
import { CreateGameSessionOutput } from "./CreateGameSessionOutput";
import { CreateGameSessionQueueOutput } from "./CreateGameSessionQueueOutput";
import { CreateMatchmakingConfigurationOutput } from "./CreateMatchmakingConfigurationOutput";
import { CreateMatchmakingRuleSetOutput } from "./CreateMatchmakingRuleSetOutput";
import { CreatePlayerSessionOutput } from "./CreatePlayerSessionOutput";
import { CreatePlayerSessionsOutput } from "./CreatePlayerSessionsOutput";
import { CreateScriptOutput } from "./CreateScriptOutput";
import { CreateVpcPeeringAuthorizationOutput } from "./CreateVpcPeeringAuthorizationOutput";
import { CreateVpcPeeringConnectionOutput } from "./CreateVpcPeeringConnectionOutput";
import { DeleteAliasOutput } from "./DeleteAliasOutput";
import { DeleteBuildOutput } from "./DeleteBuildOutput";
import { DeleteFleetOutput } from "./DeleteFleetOutput";
import { DeleteGameSessionQueueOutput } from "./DeleteGameSessionQueueOutput";
import { DeleteMatchmakingConfigurationOutput } from "./DeleteMatchmakingConfigurationOutput";
import { DeleteMatchmakingRuleSetOutput } from "./DeleteMatchmakingRuleSetOutput";
import { DeleteScalingPolicyOutput } from "./DeleteScalingPolicyOutput";
import { DeleteScriptOutput } from "./DeleteScriptOutput";
import { DeleteVpcPeeringAuthorizationOutput } from "./DeleteVpcPeeringAuthorizationOutput";
import { DeleteVpcPeeringConnectionOutput } from "./DeleteVpcPeeringConnectionOutput";
import { DescribeAliasOutput } from "./DescribeAliasOutput";
import { DescribeBuildOutput } from "./DescribeBuildOutput";
import { DescribeEC2InstanceLimitsOutput } from "./DescribeEC2InstanceLimitsOutput";
import { DescribeFleetAttributesOutput } from "./DescribeFleetAttributesOutput";
import { DescribeFleetCapacityOutput } from "./DescribeFleetCapacityOutput";
import { DescribeFleetEventsOutput } from "./DescribeFleetEventsOutput";
import { DescribeFleetPortSettingsOutput } from "./DescribeFleetPortSettingsOutput";
import { DescribeFleetUtilizationOutput } from "./DescribeFleetUtilizationOutput";
import { DescribeGameSessionDetailsOutput } from "./DescribeGameSessionDetailsOutput";
import { DescribeGameSessionPlacementOutput } from "./DescribeGameSessionPlacementOutput";
import { DescribeGameSessionQueuesOutput } from "./DescribeGameSessionQueuesOutput";
import { DescribeGameSessionsOutput } from "./DescribeGameSessionsOutput";
import { DescribeInstancesOutput } from "./DescribeInstancesOutput";
import { DescribeMatchmakingOutput } from "./DescribeMatchmakingOutput";
import { DescribeMatchmakingConfigurationsOutput } from "./DescribeMatchmakingConfigurationsOutput";
import { DescribeMatchmakingRuleSetsOutput } from "./DescribeMatchmakingRuleSetsOutput";
import { DescribePlayerSessionsOutput } from "./DescribePlayerSessionsOutput";
import { DescribeRuntimeConfigurationOutput } from "./DescribeRuntimeConfigurationOutput";
import { DescribeScalingPoliciesOutput } from "./DescribeScalingPoliciesOutput";
import { DescribeScriptOutput } from "./DescribeScriptOutput";
import { DescribeVpcPeeringAuthorizationsOutput } from "./DescribeVpcPeeringAuthorizationsOutput";
import { DescribeVpcPeeringConnectionsOutput } from "./DescribeVpcPeeringConnectionsOutput";
import { GetGameSessionLogUrlOutput } from "./GetGameSessionLogUrlOutput";
import { GetInstanceAccessOutput } from "./GetInstanceAccessOutput";
import { ListAliasesOutput } from "./ListAliasesOutput";
import { ListBuildsOutput } from "./ListBuildsOutput";
import { ListFleetsOutput } from "./ListFleetsOutput";
import { ListScriptsOutput } from "./ListScriptsOutput";
import { PutScalingPolicyOutput } from "./PutScalingPolicyOutput";
import { RequestUploadCredentialsOutput } from "./RequestUploadCredentialsOutput";
import { ResolveAliasOutput } from "./ResolveAliasOutput";
import { SearchGameSessionsOutput } from "./SearchGameSessionsOutput";
import { StartFleetActionsOutput } from "./StartFleetActionsOutput";
import { StartGameSessionPlacementOutput } from "./StartGameSessionPlacementOutput";
import { StartMatchBackfillOutput } from "./StartMatchBackfillOutput";
import { StartMatchmakingOutput } from "./StartMatchmakingOutput";
import { StopFleetActionsOutput } from "./StopFleetActionsOutput";
import { StopGameSessionPlacementOutput } from "./StopGameSessionPlacementOutput";
import { StopMatchmakingOutput } from "./StopMatchmakingOutput";
import { UpdateAliasOutput } from "./UpdateAliasOutput";
import { UpdateBuildOutput } from "./UpdateBuildOutput";
import { UpdateFleetAttributesOutput } from "./UpdateFleetAttributesOutput";
import { UpdateFleetCapacityOutput } from "./UpdateFleetCapacityOutput";
import { UpdateFleetPortSettingsOutput } from "./UpdateFleetPortSettingsOutput";
import { UpdateGameSessionOutput } from "./UpdateGameSessionOutput";
import { UpdateGameSessionQueueOutput } from "./UpdateGameSessionQueueOutput";
import { UpdateMatchmakingConfigurationOutput } from "./UpdateMatchmakingConfigurationOutput";
import { UpdateRuntimeConfigurationOutput } from "./UpdateRuntimeConfigurationOutput";
import { UpdateScriptOutput } from "./UpdateScriptOutput";
import { ValidateMatchmakingRuleSetOutput } from "./ValidateMatchmakingRuleSetOutput";
export type OutputTypesUnion =
  | AcceptMatchOutput
  | CreateAliasOutput
  | CreateBuildOutput
  | CreateFleetOutput
  | CreateGameSessionOutput
  | CreateGameSessionQueueOutput
  | CreateMatchmakingConfigurationOutput
  | CreateMatchmakingRuleSetOutput
  | CreatePlayerSessionOutput
  | CreatePlayerSessionsOutput
  | CreateScriptOutput
  | CreateVpcPeeringAuthorizationOutput
  | CreateVpcPeeringConnectionOutput
  | DeleteAliasOutput
  | DeleteBuildOutput
  | DeleteFleetOutput
  | DeleteGameSessionQueueOutput
  | DeleteMatchmakingConfigurationOutput
  | DeleteMatchmakingRuleSetOutput
  | DeleteScalingPolicyOutput
  | DeleteScriptOutput
  | DeleteVpcPeeringAuthorizationOutput
  | DeleteVpcPeeringConnectionOutput
  | DescribeAliasOutput
  | DescribeBuildOutput
  | DescribeEC2InstanceLimitsOutput
  | DescribeFleetAttributesOutput
  | DescribeFleetCapacityOutput
  | DescribeFleetEventsOutput
  | DescribeFleetPortSettingsOutput
  | DescribeFleetUtilizationOutput
  | DescribeGameSessionDetailsOutput
  | DescribeGameSessionPlacementOutput
  | DescribeGameSessionQueuesOutput
  | DescribeGameSessionsOutput
  | DescribeInstancesOutput
  | DescribeMatchmakingOutput
  | DescribeMatchmakingConfigurationsOutput
  | DescribeMatchmakingRuleSetsOutput
  | DescribePlayerSessionsOutput
  | DescribeRuntimeConfigurationOutput
  | DescribeScalingPoliciesOutput
  | DescribeScriptOutput
  | DescribeVpcPeeringAuthorizationsOutput
  | DescribeVpcPeeringConnectionsOutput
  | GetGameSessionLogUrlOutput
  | GetInstanceAccessOutput
  | ListAliasesOutput
  | ListBuildsOutput
  | ListFleetsOutput
  | ListScriptsOutput
  | PutScalingPolicyOutput
  | RequestUploadCredentialsOutput
  | ResolveAliasOutput
  | SearchGameSessionsOutput
  | StartFleetActionsOutput
  | StartGameSessionPlacementOutput
  | StartMatchBackfillOutput
  | StartMatchmakingOutput
  | StopFleetActionsOutput
  | StopGameSessionPlacementOutput
  | StopMatchmakingOutput
  | UpdateAliasOutput
  | UpdateBuildOutput
  | UpdateFleetAttributesOutput
  | UpdateFleetCapacityOutput
  | UpdateFleetPortSettingsOutput
  | UpdateGameSessionOutput
  | UpdateGameSessionQueueOutput
  | UpdateMatchmakingConfigurationOutput
  | UpdateRuntimeConfigurationOutput
  | UpdateScriptOutput
  | ValidateMatchmakingRuleSetOutput;
