import { GameLiftClient } from "./GameLiftClient";
import { AcceptMatchCommand, AcceptMatchCommandInput, AcceptMatchCommandOutput } from "./commands/AcceptMatchCommand";
import { CreateAliasCommand, CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateBuildCommand, CreateBuildCommandInput, CreateBuildCommandOutput } from "./commands/CreateBuildCommand";
import { CreateFleetCommand, CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import {
  CreateGameSessionCommand,
  CreateGameSessionCommandInput,
  CreateGameSessionCommandOutput,
} from "./commands/CreateGameSessionCommand";
import {
  CreateGameSessionQueueCommand,
  CreateGameSessionQueueCommandInput,
  CreateGameSessionQueueCommandOutput,
} from "./commands/CreateGameSessionQueueCommand";
import {
  CreateMatchmakingConfigurationCommand,
  CreateMatchmakingConfigurationCommandInput,
  CreateMatchmakingConfigurationCommandOutput,
} from "./commands/CreateMatchmakingConfigurationCommand";
import {
  CreateMatchmakingRuleSetCommand,
  CreateMatchmakingRuleSetCommandInput,
  CreateMatchmakingRuleSetCommandOutput,
} from "./commands/CreateMatchmakingRuleSetCommand";
import {
  CreatePlayerSessionCommand,
  CreatePlayerSessionCommandInput,
  CreatePlayerSessionCommandOutput,
} from "./commands/CreatePlayerSessionCommand";
import {
  CreatePlayerSessionsCommand,
  CreatePlayerSessionsCommandInput,
  CreatePlayerSessionsCommandOutput,
} from "./commands/CreatePlayerSessionsCommand";
import {
  CreateScriptCommand,
  CreateScriptCommandInput,
  CreateScriptCommandOutput,
} from "./commands/CreateScriptCommand";
import {
  CreateVpcPeeringAuthorizationCommand,
  CreateVpcPeeringAuthorizationCommandInput,
  CreateVpcPeeringAuthorizationCommandOutput,
} from "./commands/CreateVpcPeeringAuthorizationCommand";
import {
  CreateVpcPeeringConnectionCommand,
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
} from "./commands/CreateVpcPeeringConnectionCommand";
import { DeleteAliasCommand, DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import { DeleteBuildCommand, DeleteBuildCommandInput, DeleteBuildCommandOutput } from "./commands/DeleteBuildCommand";
import { DeleteFleetCommand, DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteGameSessionQueueCommand,
  DeleteGameSessionQueueCommandInput,
  DeleteGameSessionQueueCommandOutput,
} from "./commands/DeleteGameSessionQueueCommand";
import {
  DeleteMatchmakingConfigurationCommand,
  DeleteMatchmakingConfigurationCommandInput,
  DeleteMatchmakingConfigurationCommandOutput,
} from "./commands/DeleteMatchmakingConfigurationCommand";
import {
  DeleteMatchmakingRuleSetCommand,
  DeleteMatchmakingRuleSetCommandInput,
  DeleteMatchmakingRuleSetCommandOutput,
} from "./commands/DeleteMatchmakingRuleSetCommand";
import {
  DeleteScalingPolicyCommand,
  DeleteScalingPolicyCommandInput,
  DeleteScalingPolicyCommandOutput,
} from "./commands/DeleteScalingPolicyCommand";
import {
  DeleteScriptCommand,
  DeleteScriptCommandInput,
  DeleteScriptCommandOutput,
} from "./commands/DeleteScriptCommand";
import {
  DeleteVpcPeeringAuthorizationCommand,
  DeleteVpcPeeringAuthorizationCommandInput,
  DeleteVpcPeeringAuthorizationCommandOutput,
} from "./commands/DeleteVpcPeeringAuthorizationCommand";
import {
  DeleteVpcPeeringConnectionCommand,
  DeleteVpcPeeringConnectionCommandInput,
  DeleteVpcPeeringConnectionCommandOutput,
} from "./commands/DeleteVpcPeeringConnectionCommand";
import {
  DescribeAliasCommand,
  DescribeAliasCommandInput,
  DescribeAliasCommandOutput,
} from "./commands/DescribeAliasCommand";
import {
  DescribeBuildCommand,
  DescribeBuildCommandInput,
  DescribeBuildCommandOutput,
} from "./commands/DescribeBuildCommand";
import {
  DescribeEC2InstanceLimitsCommand,
  DescribeEC2InstanceLimitsCommandInput,
  DescribeEC2InstanceLimitsCommandOutput,
} from "./commands/DescribeEC2InstanceLimitsCommand";
import {
  DescribeFleetAttributesCommand,
  DescribeFleetAttributesCommandInput,
  DescribeFleetAttributesCommandOutput,
} from "./commands/DescribeFleetAttributesCommand";
import {
  DescribeFleetCapacityCommand,
  DescribeFleetCapacityCommandInput,
  DescribeFleetCapacityCommandOutput,
} from "./commands/DescribeFleetCapacityCommand";
import {
  DescribeFleetEventsCommand,
  DescribeFleetEventsCommandInput,
  DescribeFleetEventsCommandOutput,
} from "./commands/DescribeFleetEventsCommand";
import {
  DescribeFleetPortSettingsCommand,
  DescribeFleetPortSettingsCommandInput,
  DescribeFleetPortSettingsCommandOutput,
} from "./commands/DescribeFleetPortSettingsCommand";
import {
  DescribeFleetUtilizationCommand,
  DescribeFleetUtilizationCommandInput,
  DescribeFleetUtilizationCommandOutput,
} from "./commands/DescribeFleetUtilizationCommand";
import {
  DescribeGameSessionDetailsCommand,
  DescribeGameSessionDetailsCommandInput,
  DescribeGameSessionDetailsCommandOutput,
} from "./commands/DescribeGameSessionDetailsCommand";
import {
  DescribeGameSessionPlacementCommand,
  DescribeGameSessionPlacementCommandInput,
  DescribeGameSessionPlacementCommandOutput,
} from "./commands/DescribeGameSessionPlacementCommand";
import {
  DescribeGameSessionQueuesCommand,
  DescribeGameSessionQueuesCommandInput,
  DescribeGameSessionQueuesCommandOutput,
} from "./commands/DescribeGameSessionQueuesCommand";
import {
  DescribeGameSessionsCommand,
  DescribeGameSessionsCommandInput,
  DescribeGameSessionsCommandOutput,
} from "./commands/DescribeGameSessionsCommand";
import {
  DescribeInstancesCommand,
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
} from "./commands/DescribeInstancesCommand";
import {
  DescribeMatchmakingCommand,
  DescribeMatchmakingCommandInput,
  DescribeMatchmakingCommandOutput,
} from "./commands/DescribeMatchmakingCommand";
import {
  DescribeMatchmakingConfigurationsCommand,
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput,
} from "./commands/DescribeMatchmakingConfigurationsCommand";
import {
  DescribeMatchmakingRuleSetsCommand,
  DescribeMatchmakingRuleSetsCommandInput,
  DescribeMatchmakingRuleSetsCommandOutput,
} from "./commands/DescribeMatchmakingRuleSetsCommand";
import {
  DescribePlayerSessionsCommand,
  DescribePlayerSessionsCommandInput,
  DescribePlayerSessionsCommandOutput,
} from "./commands/DescribePlayerSessionsCommand";
import {
  DescribeRuntimeConfigurationCommand,
  DescribeRuntimeConfigurationCommandInput,
  DescribeRuntimeConfigurationCommandOutput,
} from "./commands/DescribeRuntimeConfigurationCommand";
import {
  DescribeScalingPoliciesCommand,
  DescribeScalingPoliciesCommandInput,
  DescribeScalingPoliciesCommandOutput,
} from "./commands/DescribeScalingPoliciesCommand";
import {
  DescribeScriptCommand,
  DescribeScriptCommandInput,
  DescribeScriptCommandOutput,
} from "./commands/DescribeScriptCommand";
import {
  DescribeVpcPeeringAuthorizationsCommand,
  DescribeVpcPeeringAuthorizationsCommandInput,
  DescribeVpcPeeringAuthorizationsCommandOutput,
} from "./commands/DescribeVpcPeeringAuthorizationsCommand";
import {
  DescribeVpcPeeringConnectionsCommand,
  DescribeVpcPeeringConnectionsCommandInput,
  DescribeVpcPeeringConnectionsCommandOutput,
} from "./commands/DescribeVpcPeeringConnectionsCommand";
import {
  GetGameSessionLogUrlCommand,
  GetGameSessionLogUrlCommandInput,
  GetGameSessionLogUrlCommandOutput,
} from "./commands/GetGameSessionLogUrlCommand";
import {
  GetInstanceAccessCommand,
  GetInstanceAccessCommandInput,
  GetInstanceAccessCommandOutput,
} from "./commands/GetInstanceAccessCommand";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import { ListBuildsCommand, ListBuildsCommandInput, ListBuildsCommandOutput } from "./commands/ListBuildsCommand";
import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import { ListScriptsCommand, ListScriptsCommandInput, ListScriptsCommandOutput } from "./commands/ListScriptsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutScalingPolicyCommand,
  PutScalingPolicyCommandInput,
  PutScalingPolicyCommandOutput,
} from "./commands/PutScalingPolicyCommand";
import {
  RequestUploadCredentialsCommand,
  RequestUploadCredentialsCommandInput,
  RequestUploadCredentialsCommandOutput,
} from "./commands/RequestUploadCredentialsCommand";
import {
  ResolveAliasCommand,
  ResolveAliasCommandInput,
  ResolveAliasCommandOutput,
} from "./commands/ResolveAliasCommand";
import {
  SearchGameSessionsCommand,
  SearchGameSessionsCommandInput,
  SearchGameSessionsCommandOutput,
} from "./commands/SearchGameSessionsCommand";
import {
  StartFleetActionsCommand,
  StartFleetActionsCommandInput,
  StartFleetActionsCommandOutput,
} from "./commands/StartFleetActionsCommand";
import {
  StartGameSessionPlacementCommand,
  StartGameSessionPlacementCommandInput,
  StartGameSessionPlacementCommandOutput,
} from "./commands/StartGameSessionPlacementCommand";
import {
  StartMatchBackfillCommand,
  StartMatchBackfillCommandInput,
  StartMatchBackfillCommandOutput,
} from "./commands/StartMatchBackfillCommand";
import {
  StartMatchmakingCommand,
  StartMatchmakingCommandInput,
  StartMatchmakingCommandOutput,
} from "./commands/StartMatchmakingCommand";
import {
  StopFleetActionsCommand,
  StopFleetActionsCommandInput,
  StopFleetActionsCommandOutput,
} from "./commands/StopFleetActionsCommand";
import {
  StopGameSessionPlacementCommand,
  StopGameSessionPlacementCommandInput,
  StopGameSessionPlacementCommandOutput,
} from "./commands/StopGameSessionPlacementCommand";
import {
  StopMatchmakingCommand,
  StopMatchmakingCommandInput,
  StopMatchmakingCommandOutput,
} from "./commands/StopMatchmakingCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateAliasCommand, UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import { UpdateBuildCommand, UpdateBuildCommandInput, UpdateBuildCommandOutput } from "./commands/UpdateBuildCommand";
import {
  UpdateFleetAttributesCommand,
  UpdateFleetAttributesCommandInput,
  UpdateFleetAttributesCommandOutput,
} from "./commands/UpdateFleetAttributesCommand";
import {
  UpdateFleetCapacityCommand,
  UpdateFleetCapacityCommandInput,
  UpdateFleetCapacityCommandOutput,
} from "./commands/UpdateFleetCapacityCommand";
import {
  UpdateFleetPortSettingsCommand,
  UpdateFleetPortSettingsCommandInput,
  UpdateFleetPortSettingsCommandOutput,
} from "./commands/UpdateFleetPortSettingsCommand";
import {
  UpdateGameSessionCommand,
  UpdateGameSessionCommandInput,
  UpdateGameSessionCommandOutput,
} from "./commands/UpdateGameSessionCommand";
import {
  UpdateGameSessionQueueCommand,
  UpdateGameSessionQueueCommandInput,
  UpdateGameSessionQueueCommandOutput,
} from "./commands/UpdateGameSessionQueueCommand";
import {
  UpdateMatchmakingConfigurationCommand,
  UpdateMatchmakingConfigurationCommandInput,
  UpdateMatchmakingConfigurationCommandOutput,
} from "./commands/UpdateMatchmakingConfigurationCommand";
import {
  UpdateRuntimeConfigurationCommand,
  UpdateRuntimeConfigurationCommandInput,
  UpdateRuntimeConfigurationCommandOutput,
} from "./commands/UpdateRuntimeConfigurationCommand";
import {
  UpdateScriptCommand,
  UpdateScriptCommandInput,
  UpdateScriptCommandOutput,
} from "./commands/UpdateScriptCommand";
import {
  ValidateMatchmakingRuleSetCommand,
  ValidateMatchmakingRuleSetCommandInput,
  ValidateMatchmakingRuleSetCommandOutput,
} from "./commands/ValidateMatchmakingRuleSetCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon GameLift Service</fullname>
 *         <p> Amazon GameLift is a managed service for developers who need a scalable, dedicated server
 *             solution for their multiplayer games. Use Amazon GameLift for these tasks: (1) set up computing
 *             resources and deploy your game servers, (2) run game sessions and get players into
 *             games, (3) automatically scale your resources to meet player demand and manage costs,
 *             and (4) track in-depth metrics on game server performance and player usage.</p>
 *
 *         <p>When setting up hosting resources, you can deploy your custom game server or use the
 *             Amazon GameLift Realtime Servers. Realtime Servers gives you the ability to quickly stand up lightweight, efficient
 *             game servers with the core Amazon GameLift infrastructure already built in.</p>
 *
 *         <p>
 *             <b>Get Amazon GameLift Tools and Resources</b>
 *          </p>
 *         <p>This reference guide describes the low-level service API for Amazon GameLift and provides links to
 *             language-specific SDK reference topics. See also
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-components.html">
 *                 Amazon GameLift Tools and Resources</a>.</p>
 *         <p>
 *             <b>API Summary</b>
 *          </p>
 *         <p>The Amazon GameLift service API includes two key sets of actions:</p>
 *         <ul>
 *             <li>
 *                 <p>Manage game sessions and player access --
 *                     Integrate this functionality into game client services in order to create new game
 *                     sessions, retrieve information on existing game sessions; reserve a player slot
 *                     in a game session, request matchmaking, etc.</p>
 *             </li>
 *             <li>
 *                 <p>Configure and manage game server resources --
 *                     Manage your Amazon GameLift hosting resources, including builds, scripts, fleets, queues,
 *                     and aliases. Set up matchmakers, configure auto-scaling, retrieve game logs, and
 *                     get hosting and game metrics.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>
 *                <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html">
 *             Task-based list of API actions</a>
 *             </b>
 *          </p>
 */
export class GameLift extends GameLiftClient {
  /**
   * <p>Registers a player's acceptance or rejection of a proposed FlexMatch match. A
   *             matchmaking configuration may require player acceptance; if so, then matches built with
   *             that configuration cannot be completed unless all players accept the proposed match
   *             within a specified time limit. </p>
   *         <p>When FlexMatch builds a match, all the matchmaking tickets involved in the proposed
   *             match are placed into status <code>REQUIRES_ACCEPTANCE</code>. This is a trigger for
   *             your game to get acceptance from all players in the ticket. Acceptances are only valid
   *             for tickets when they are in this status; all other acceptances result in an
   *             error.</p>
   *         <p>To register acceptance, specify the ticket ID, a response, and one or more players.
   *             Once all players have registered acceptance, the matchmaking tickets advance to status
   *             <code>PLACING</code>, where a new game session is created for the match. </p>
   *         <p>If any player rejects the match, or if acceptances are not received before a specified
   *             timeout, the proposed match is dropped. The matchmaking tickets are then handled in one
   *             of two ways: For tickets where one or more players rejected the match, the ticket status
   *             is returned to <code>SEARCHING</code> to find a new match. For tickets where one or more
   *             players failed to respond, the ticket status is set to <code>CANCELLED</code>, and
   *             processing is terminated. A new matchmaking request for these players can be submitted
   *             as needed. </p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-client.html">
   *                 Add FlexMatch to a Game Client</a>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-events.html"> FlexMatch Events Reference</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>StartMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>StopMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>AcceptMatch</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>StartMatchBackfill</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public acceptMatch(args: AcceptMatchCommandInput, options?: __HttpHandlerOptions): Promise<AcceptMatchCommandOutput>;
  public acceptMatch(args: AcceptMatchCommandInput, cb: (err: any, data?: AcceptMatchCommandOutput) => void): void;
  public acceptMatch(
    args: AcceptMatchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptMatchCommandOutput) => void
  ): void;
  public acceptMatch(
    args: AcceptMatchCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptMatchCommandOutput) => void),
    cb?: (err: any, data?: AcceptMatchCommandOutput) => void
  ): Promise<AcceptMatchCommandOutput> | void {
    const command = new AcceptMatchCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of
   *             a fleet ID. An alias provides a level of abstraction for a fleet that is useful when
   *             redirecting player traffic from one fleet to another, such as when updating your game
   *             build.  </p>
   *         <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A
   *             simple alias points to an active fleet. A terminal alias is used to display messaging or
   *             link to a URL instead of routing players to an active fleet. For example, you might use
   *             a terminal alias when a game version is no longer supported and you want to direct
   *             players to an upgrade site. </p>
   *         <p>To create a fleet alias, specify an alias name, routing strategy, and optional
   *             description. Each simple alias can point to only one fleet, but a fleet can have
   *             multiple aliases. If successful, a new alias record is returned, including an alias ID
   *             and an ARN. You can reassign an alias to another fleet by calling
   *                 <code>UpdateAlias</code>.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListAliases</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ResolveAlias</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
  public createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
  public createAlias(
    args: CreateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;
  public createAlias(
    args: CreateAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAliasCommandOutput) => void),
    cb?: (err: any, data?: CreateAliasCommandOutput) => void
  ): Promise<CreateAliasCommandOutput> | void {
    const command = new CreateAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Amazon GameLift build record for your game server binary files and points to
   *             the location of your game server build files in an Amazon Simple Storage Service (Amazon S3)
   *             location. </p>
   *         <p>Game server binaries must be combined into a zip file for use with
   *             Amazon GameLift. </p>
   *         <important>
   *             <p>To create new builds directly from a file directory, use the AWS CLI command <b>
   *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a>
   *                </b>. This helper command uploads build files and
   *                 creates a new build record in one step, and automatically handles the necessary
   *                 permissions. </p>
   *         </important>
   *         <p>The <code>CreateBuild</code> operation should be used only in the following scenarios:</p>
   *         <ul>
   *             <li>
   *                 <p>To create a new game build with build files that are in an Amazon S3 bucket under your own AWS account. To use
   *                     this option, you must first give Amazon GameLift access to that Amazon S3 bucket. Then call <code>CreateBuild</code>
   *                     and specify a build name, operating system, and the Amazon S3 storage location of your
   *                     game build.</p>
   *             </li>
   *             <li>
   *                 <p>To upload build files directly to Amazon GameLift's Amazon S3 account. To use this option,
   *                     first call <code>CreateBuild</code> and specify a build name and operating system.
   *                     This action creates a new build record and returns an Amazon S3 storage location
   *                     (bucket and key only) and temporary access credentials. Use the credentials to
   *                     manually upload your build file to the provided storage location (see the Amazon S3 topic
   *                         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a>). You can upload build files to the GameLift Amazon S3 location only once.
   *                 </p>
   *             </li>
   *          </ul>
   *         <p>If successful, this operation creates a new build record with a unique build ID and
   *             places it in <code>INITIALIZED</code> status. You can use <a>DescribeBuild</a> to check the status of your build. A build must be in <code>READY</code> status
   *             before it can be used to create fleets.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your
   *                 Game</a>
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html</a>
   *         </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListBuilds</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteBuild</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createBuild(args: CreateBuildCommandInput, options?: __HttpHandlerOptions): Promise<CreateBuildCommandOutput>;
  public createBuild(args: CreateBuildCommandInput, cb: (err: any, data?: CreateBuildCommandOutput) => void): void;
  public createBuild(
    args: CreateBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBuildCommandOutput) => void
  ): void;
  public createBuild(
    args: CreateBuildCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBuildCommandOutput) => void),
    cb?: (err: any, data?: CreateBuildCommandOutput) => void
  ): Promise<CreateBuildCommandOutput> | void {
    const command = new CreateBuildCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new fleet to run your game servers. whether they are custom game builds or
   *             Realtime Servers with game-specific script. A fleet is a set of Amazon Elastic Compute Cloud
   *             (Amazon EC2) instances, each of which can host multiple game sessions. When creating a
   *             fleet, you choose the hardware specifications, set some configuration options, and
   *             specify the game server to deploy on the new fleet. </p>
   *         <p>To create a new fleet, you must provide the following: (1) a fleet name, (2) an EC2
   *             instance type and fleet type (spot or on-demand), (3) the build ID for your game build
   *             or script ID if using Realtime Servers, and (4) a runtime configuration, which determines how game
   *             servers will run on each instance in the fleet. </p>
   *
   *         <p>If the <code>CreateFleet</code> call is successful, Amazon GameLift performs the following
   *             tasks. You can track the process of a fleet by checking the fleet status or by
   *             monitoring fleet creation events:</p>
   *         <ul>
   *             <li>
   *                 <p>Creates a fleet record. Status: <code>NEW</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Begins writing events to the fleet event log, which can be accessed in the
   *                     Amazon GameLift console.</p>
   *             </li>
   *             <li>
   *                  <p>Sets the fleet's target capacity to 1 (desired instances), which triggers
   *                     Amazon GameLift to start one new EC2 instance.</p>
   *             </li>
   *             <li>
   *                 <p>Downloads the game build or Realtime script to the new instance and installs it.
   *                     Statuses: <code>DOWNLOADING</code>, <code>VALIDATING</code>,
   *                         <code>BUILDING</code>. </p>
   *             </li>
   *             <li>
   *                 <p>Starts launching server processes on the instance. If the fleet is configured
   *                     to run multiple server processes per instance, Amazon GameLift staggers each process
   *                     launch by a few seconds. Status: <code>ACTIVATING</code>.</p>
   *             </li>
   *             <li>
   *                 <p>Sets the fleet's status to <code>ACTIVE</code> as soon as one server
   *                     process is ready to host a game session.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Setting Up Fleets</a>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html#fleets-creating-debug-creation"> Debug Fleet
   *                 Creation Issues</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  public createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  public createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFleetCommandOutput) => void),
    cb?: (err: any, data?: CreateFleetCommandOutput) => void
  ): Promise<CreateFleetCommandOutput> | void {
    const command = new CreateFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a multiplayer game session for players. This action creates a game session
   *             record and assigns an available server process in the specified fleet to host the game
   *             session. A fleet must have an <code>ACTIVE</code> status before a game session can be
   *             created in it.</p>
   *         <p>To create a game session, specify either fleet ID or alias ID and indicate a
   *             maximum number of players to allow in the game session. You can also provide a name and
   *             game-specific properties for this game session. If successful, a <a>GameSession</a> object is returned containing the game session properties
   *             and other settings you specified.</p>
   *         <p>
   *             <b>Idempotency tokens.</b> You can add a token that
   *             uniquely identifies game session requests. This is useful for ensuring that game session
   *             requests are idempotent. Multiple requests with the same idempotency token are processed
   *             only once; subsequent requests return the original result. All response values are the
   *             same with the exception of game session status, which may change.</p>
   *         <p>
   *             <b>Resource creation limits.</b> If you are creating a
   *             game session on a fleet with a resource creation limit policy in force, then you must
   *             specify a creator ID. Without this ID, Amazon GameLift has no way to evaluate the policy for this
   *             new game session request.</p>
   *         <p>
   *             <b>Player acceptance policy.</b> By default, newly created
   *             game sessions are open to new players. You can restrict new player access by using <a>UpdateGameSession</a> to change the game session's player session creation
   *             policy.</p>
   *         <p>
   *             <b>Game session logs.</b> Logs are retained for all
   *             active game sessions for 14 days. To access the logs, call <a>GetGameSessionLogUrl</a> to download the log files.</p>
   *         <p>
   *             <i>Available in Amazon GameLift Local.</i>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionDetails</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SearchGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetGameSessionLogUrl</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public createGameSession(
    args: CreateGameSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGameSessionCommandOutput>;
  public createGameSession(
    args: CreateGameSessionCommandInput,
    cb: (err: any, data?: CreateGameSessionCommandOutput) => void
  ): void;
  public createGameSession(
    args: CreateGameSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGameSessionCommandOutput) => void
  ): void;
  public createGameSession(
    args: CreateGameSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGameSessionCommandOutput) => void),
    cb?: (err: any, data?: CreateGameSessionCommandOutput) => void
  ): Promise<CreateGameSessionCommandOutput> | void {
    const command = new CreateGameSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Establishes a new queue for processing requests to place new game sessions. A queue
   *             identifies where new game sessions can be hosted -- by specifying a list of destinations
   *             (fleets or aliases) -- and how long requests can wait in the queue before timing out.
   *             You can set up a queue to try to place game sessions on fleets in multiple Regions. To
   *             add placement requests to a queue, call <a>StartGameSessionPlacement</a> and
   *             reference the queue name.</p>
   *         <p>
   *             <b>Destination order.</b> When processing a request for a
   *             game session, Amazon GameLift tries each destination in order until it finds one with available
   *             resources to host the new game session. A queue's default order is determined by how
   *             destinations are listed. The default order is overridden when a game session placement
   *             request provides player latency information. Player latency information enables Amazon GameLift
   *             to prioritize destinations where players report the lowest average latency, as a result
   *             placing the new game session where the majority of players will have the best possible
   *             gameplay experience.</p>
   *         <p>
   *             <b>Player latency policies.</b> For placement requests
   *             containing player latency information, use player latency policies to protect individual
   *             players from very high latencies. With a latency cap, even when a destination can
   *             deliver a low latency for most players, the game is not placed where any individual
   *             player is reporting latency higher than a policy's maximum. A queue can have multiple
   *             latency policies, which are enforced consecutively starting with the policy with the
   *             lowest latency cap. Use multiple policies to gradually relax latency controls; for
   *             example, you might set a policy with a low latency cap for the first 60 seconds, a
   *             second policy with a higher cap for the next 60 seconds, etc. </p>
   *         <p>To create a new queue, provide a name, timeout value, a list of destinations and,
   *             if desired, a set of latency policies. If successful, a new queue object is
   *             returned.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSessionQueue</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionQueues</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSessionQueue</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteGameSessionQueue</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createGameSessionQueue(
    args: CreateGameSessionQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGameSessionQueueCommandOutput>;
  public createGameSessionQueue(
    args: CreateGameSessionQueueCommandInput,
    cb: (err: any, data?: CreateGameSessionQueueCommandOutput) => void
  ): void;
  public createGameSessionQueue(
    args: CreateGameSessionQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGameSessionQueueCommandOutput) => void
  ): void;
  public createGameSessionQueue(
    args: CreateGameSessionQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGameSessionQueueCommandOutput) => void),
    cb?: (err: any, data?: CreateGameSessionQueueCommandOutput) => void
  ): Promise<CreateGameSessionQueueCommandOutput> | void {
    const command = new CreateGameSessionQueueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Defines a new matchmaking configuration for use with FlexMatch. A matchmaking
   *             configuration sets out guidelines for matching players and getting the matches into
   *             games. You can set up multiple matchmaking configurations to handle the scenarios needed
   *             for your game. Each matchmaking ticket (<a>StartMatchmaking</a> or <a>StartMatchBackfill</a>) specifies a configuration for the match and provides
   *             player attributes to support the configuration being used. </p>
   *         <p>To create a matchmaking configuration, at a minimum you must specify the following:
   *             configuration name; a rule set that governs how to evaluate players and find acceptable
   *             matches; a game session queue to use when placing a new game session for the match; and
   *             the maximum time allowed for a matchmaking attempt.</p>
   *         <p>There are two ways to track the progress of matchmaking tickets: (1) polling ticket
   *             status with <a>DescribeMatchmaking</a>; or (2) receiving notifications with
   *             Amazon Simple Notification Service (SNS). To use notifications, you first need to set up an SNS topic to receive the
   *             notifications, and provide the topic ARN in the matchmaking configuration. Since
   *             notifications promise only "best effort" delivery, we recommend calling
   *                 <code>DescribeMatchmaking</code> if no notifications are received within 30
   *             seconds.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-configuration.html">
   *                 Design a FlexMatch Matchmaker</a>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-notification.html"> Setting up
   *                 Notifications for Matchmaking</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingConfigurations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingRuleSets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ValidateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createMatchmakingConfiguration(
    args: CreateMatchmakingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMatchmakingConfigurationCommandOutput>;
  public createMatchmakingConfiguration(
    args: CreateMatchmakingConfigurationCommandInput,
    cb: (err: any, data?: CreateMatchmakingConfigurationCommandOutput) => void
  ): void;
  public createMatchmakingConfiguration(
    args: CreateMatchmakingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMatchmakingConfigurationCommandOutput) => void
  ): void;
  public createMatchmakingConfiguration(
    args: CreateMatchmakingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMatchmakingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateMatchmakingConfigurationCommandOutput) => void
  ): Promise<CreateMatchmakingConfigurationCommandOutput> | void {
    const command = new CreateMatchmakingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match
   *             to create, such as the number and size of teams. It also sets the parameters for
   *             acceptable player matches, such as minimum skill level or character type. A rule set is
   *             used by a <a>MatchmakingConfiguration</a>. </p>
   *         <p>To create a matchmaking rule set, provide unique rule set name and the rule set body
   *             in JSON format. Rule sets must be defined in the same Region as the matchmaking
   *             configuration they are used with.</p>
   *         <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule
   *             set syntax using <a>ValidateMatchmakingRuleSet</a> before creating a new rule
   *             set.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a Rule
   *                         Set</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-configuration.html">Design a
   *                         Matchmaker</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-intro.html">Matchmaking with
   *                         FlexMatch</a>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingConfigurations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingRuleSets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ValidateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createMatchmakingRuleSet(
    args: CreateMatchmakingRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMatchmakingRuleSetCommandOutput>;
  public createMatchmakingRuleSet(
    args: CreateMatchmakingRuleSetCommandInput,
    cb: (err: any, data?: CreateMatchmakingRuleSetCommandOutput) => void
  ): void;
  public createMatchmakingRuleSet(
    args: CreateMatchmakingRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMatchmakingRuleSetCommandOutput) => void
  ): void;
  public createMatchmakingRuleSet(
    args: CreateMatchmakingRuleSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMatchmakingRuleSetCommandOutput) => void),
    cb?: (err: any, data?: CreateMatchmakingRuleSetCommandOutput) => void
  ): Promise<CreateMatchmakingRuleSetCommandOutput> | void {
    const command = new CreateMatchmakingRuleSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Reserves an open player slot in an active game session. Before a
   *         player can be added, a game session must have an <code>ACTIVE</code> status, have a
   *         creation policy of <code>ALLOW_ALL</code>, and have an open player slot. To add a group
   *         of players to a game session, use <a>CreatePlayerSessions</a>. When the player
   *         connects to the game server and references a player session ID, the game server contacts the
   *         Amazon GameLift service to validate the player reservation and accept the player.</p>
   *          <p>To create a player session, specify a game session ID, player ID, and optionally a
   *         string of player data. If successful, a slot is reserved in the game session for the player
   *         and a new <a>PlayerSession</a> object is returned. Player sessions cannot be
   *         updated. </p>
   *          <p>
   *             <i>Available in Amazon GameLift Local.</i>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreatePlayerSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreatePlayerSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribePlayerSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public createPlayerSession(
    args: CreatePlayerSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlayerSessionCommandOutput>;
  public createPlayerSession(
    args: CreatePlayerSessionCommandInput,
    cb: (err: any, data?: CreatePlayerSessionCommandOutput) => void
  ): void;
  public createPlayerSession(
    args: CreatePlayerSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlayerSessionCommandOutput) => void
  ): void;
  public createPlayerSession(
    args: CreatePlayerSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePlayerSessionCommandOutput) => void),
    cb?: (err: any, data?: CreatePlayerSessionCommandOutput) => void
  ): Promise<CreatePlayerSessionCommandOutput> | void {
    const command = new CreatePlayerSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Reserves open slots in a game session for a group of players.
   *         Before players can be added, a game session must have an
   *         <code>ACTIVE</code> status, have a creation policy of <code>ALLOW_ALL</code>, and
   *         have an open player slot. To add a single player to a game session, use <a>CreatePlayerSession</a>. When a player connects to the game server and
   *         references a player session ID, the game server contacts the
   *         Amazon GameLift service to validate the player reservation and accept the player.</p>
   *          <p>To create player sessions, specify a game session ID, a list of player IDs, and
   *         optionally a set of player data strings. If successful, a slot is reserved in the game
   *         session for each player  and a set of new <a>PlayerSession</a> objects is returned.
   *         Player sessions cannot be updated.</p>
   *          <p>
   *             <i>Available in Amazon GameLift Local.</i>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreatePlayerSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreatePlayerSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribePlayerSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public createPlayerSessions(
    args: CreatePlayerSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlayerSessionsCommandOutput>;
  public createPlayerSessions(
    args: CreatePlayerSessionsCommandInput,
    cb: (err: any, data?: CreatePlayerSessionsCommandOutput) => void
  ): void;
  public createPlayerSessions(
    args: CreatePlayerSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlayerSessionsCommandOutput) => void
  ): void;
  public createPlayerSessions(
    args: CreatePlayerSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePlayerSessionsCommandOutput) => void),
    cb?: (err: any, data?: CreatePlayerSessionsCommandOutput) => void
  ): Promise<CreatePlayerSessionsCommandOutput> | void {
    const command = new CreatePlayerSessionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that
   *             provide configuration settings and optional custom game logic for your game. The script
   *             is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is
   *             executed during an active game session. </p>
   *         <p>To create a new script record, specify a script name and provide the script file(s).
   *             The script files and all dependencies must be zipped into a single file. You can pull
   *             the zip file from either of these locations: </p>
   *         <ul>
   *             <li>
   *                <p>A locally available directory. Use the <i>ZipFile</i> parameter for this
   *                     option.</p>
   *             </li>
   *             <li>
   *                <p>An Amazon Simple Storage Service (Amazon S3) bucket under your AWS account. Use the
   *                         <i>StorageLocation</i> parameter for this option. You'll need
   *                     to have an Identity Access Management (IAM) role that allows the Amazon GameLift
   *                     service to access your S3 bucket. </p>
   *             </li>
   *          </ul>
   *         <p>If the call is successful, a new script record is created with a unique script ID. If the
   *             script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket
   *             and the script record's storage location reflects this location. If the script file is provided
   *             as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListScripts</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteScript</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createScript(
    args: CreateScriptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScriptCommandOutput>;
  public createScript(args: CreateScriptCommandInput, cb: (err: any, data?: CreateScriptCommandOutput) => void): void;
  public createScript(
    args: CreateScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScriptCommandOutput) => void
  ): void;
  public createScript(
    args: CreateScriptCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateScriptCommandOutput) => void),
    cb?: (err: any, data?: CreateScriptCommandOutput) => void
  ): Promise<CreateScriptCommandOutput> | void {
    const command = new CreateScriptCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests authorization to create or delete a peer connection between the VPC for
   *             your Amazon GameLift fleet and a virtual private cloud (VPC) in your AWS account. VPC peering enables the game
   *             servers on your fleet to communicate directly with other AWS resources. Once you've
   *             received authorization, call <a>CreateVpcPeeringConnection</a> to establish
   *             the peering connection. For more information, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift
   *                 Fleets</a>.</p>
   *         <p>You can peer with VPCs that are owned by any AWS account you have access to,
   *             including the account that you use to manage your Amazon GameLift fleets. You cannot peer with
   *             VPCs that are in different Regions.</p>
   *         <p>To request authorization to create a connection, call this operation from the AWS
   *             account with the VPC that you want to peer to your Amazon GameLift fleet. For example, to
   *             enable your game servers to retrieve data from a DynamoDB table, use the account that
   *             manages that DynamoDB resource. Identify the following values: (1) The ID of the VPC
   *             that you want to peer with, and (2) the ID of the AWS account that you use to manage
   *             Amazon GameLift. If successful, VPC peering is authorized for the specified VPC. </p>
   *         <p>To request authorization to delete a connection, call this operation from the AWS
   *             account with the VPC that is peered with your Amazon GameLift fleet. Identify the following
   *             values: (1) VPC ID that you want to delete the peering connection for, and (2) ID of the
   *             AWS account that you use to manage Amazon GameLift. </p>
   *         <p>The authorization remains valid for 24 hours unless it is canceled by a call to
   *                 <a>DeleteVpcPeeringAuthorization</a>. You must create or delete the
   *             peering connection while the authorization is valid. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringAuthorizations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringConnections</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createVpcPeeringAuthorization(
    args: CreateVpcPeeringAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcPeeringAuthorizationCommandOutput>;
  public createVpcPeeringAuthorization(
    args: CreateVpcPeeringAuthorizationCommandInput,
    cb: (err: any, data?: CreateVpcPeeringAuthorizationCommandOutput) => void
  ): void;
  public createVpcPeeringAuthorization(
    args: CreateVpcPeeringAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcPeeringAuthorizationCommandOutput) => void
  ): void;
  public createVpcPeeringAuthorization(
    args: CreateVpcPeeringAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpcPeeringAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcPeeringAuthorizationCommandOutput) => void
  ): Promise<CreateVpcPeeringAuthorizationCommandOutput> | void {
    const command = new CreateVpcPeeringAuthorizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Establishes a VPC peering connection between a virtual private cloud (VPC) in an AWS account with the VPC
   *             for your Amazon GameLift fleet. VPC peering enables the game servers on your fleet to
   *             communicate directly with other AWS resources. You can peer with VPCs in any AWS account
   *             that you have access to, including the account that you use to manage your Amazon GameLift
   *             fleets. You cannot peer with VPCs that are in different Regions. For more information,
   *             see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/vpc-peering.html">VPC Peering with Amazon GameLift Fleets</a>.</p>
   *         <p>Before calling this operation to establish the peering connection, you first need
   *             to call <a>CreateVpcPeeringAuthorization</a> and identify the VPC you want to
   *             peer with. Once the authorization for the specified VPC is issued, you have 24 hours to
   *             establish the connection. These two operations handle all tasks necessary to peer the
   *             two VPCs, including acceptance, updating routing tables, etc. </p>
   *         <p>To establish the connection, call this operation from the AWS account that is used
   *             to manage the Amazon GameLift fleets. Identify the following values: (1) The ID of the fleet
   *             you want to be enable a VPC peering connection for; (2) The AWS account with the VPC
   *             that you want to peer with; and (3) The ID of the VPC you want to peer with. This
   *             operation is asynchronous. If successful, a <a>VpcPeeringConnection</a>
   *             request is created. You can use continuous polling to track the request's status using
   *                 <a>DescribeVpcPeeringConnections</a>, or by monitoring fleet events for
   *             success or failure using <a>DescribeFleetEvents</a>. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringAuthorizations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringConnections</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcPeeringConnectionCommandOutput>;
  public createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void
  ): void;
  public createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void
  ): void;
  public createVpcPeeringConnection(
    args: CreateVpcPeeringConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcPeeringConnectionCommandOutput) => void
  ): Promise<CreateVpcPeeringConnectionCommandOutput> | void {
    const command = new CreateVpcPeeringConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an alias. This action removes all record of the alias. Game clients
   *             attempting to access a server process using the deleted alias receive an error. To
   *             delete an alias, specify the alias ID to be deleted.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListAliases</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ResolveAlias</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteAlias(args: DeleteAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAliasCommandOutput>;
  public deleteAlias(args: DeleteAliasCommandInput, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
  public deleteAlias(
    args: DeleteAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAliasCommandOutput) => void
  ): void;
  public deleteAlias(
    args: DeleteAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAliasCommandOutput) => void),
    cb?: (err: any, data?: DeleteAliasCommandOutput) => void
  ): Promise<DeleteAliasCommandOutput> | void {
    const command = new DeleteAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a build. This action permanently deletes the build record and any uploaded
   *             build files.</p>
   *         <p>To delete a build, specify its ID. Deleting a build does not affect the status of
   *             any active fleets using the build, but you can no longer create new fleets with the
   *             deleted build.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/build-intro.html">
   *                 Working with Builds</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListBuilds</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteBuild</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteBuild(args: DeleteBuildCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBuildCommandOutput>;
  public deleteBuild(args: DeleteBuildCommandInput, cb: (err: any, data?: DeleteBuildCommandOutput) => void): void;
  public deleteBuild(
    args: DeleteBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBuildCommandOutput) => void
  ): void;
  public deleteBuild(
    args: DeleteBuildCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBuildCommandOutput) => void),
    cb?: (err: any, data?: DeleteBuildCommandOutput) => void
  ): Promise<DeleteBuildCommandOutput> | void {
    const command = new DeleteBuildCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes everything related to a fleet. Before deleting a fleet, you must set the
   *             fleet's desired capacity to zero. See <a>UpdateFleetCapacity</a>.</p>
   *         <p>If the fleet being deleted has a VPC peering connection, you first need to get a
   *             valid authorization (good for 24 hours) by calling <a>CreateVpcPeeringAuthorization</a>.
   *             You do not need to explicitly delete the VPC peering connection--this is done as part of the
   *             delete fleet process.</p>
   *         <p>This action removes the fleet's resources and the fleet record. Once a fleet is
   *             deleted, you can no longer use that fleet.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
  public deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFleetCommandOutput) => void),
    cb?: (err: any, data?: DeleteFleetCommandOutput) => void
  ): Promise<DeleteFleetCommandOutput> | void {
    const command = new DeleteFleetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a game session queue. This action means that any <a>StartGameSessionPlacement</a> requests that reference this queue will fail.
   *             To delete a queue, specify the queue name.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSessionQueue</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionQueues</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSessionQueue</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteGameSessionQueue</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteGameSessionQueue(
    args: DeleteGameSessionQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGameSessionQueueCommandOutput>;
  public deleteGameSessionQueue(
    args: DeleteGameSessionQueueCommandInput,
    cb: (err: any, data?: DeleteGameSessionQueueCommandOutput) => void
  ): void;
  public deleteGameSessionQueue(
    args: DeleteGameSessionQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGameSessionQueueCommandOutput) => void
  ): void;
  public deleteGameSessionQueue(
    args: DeleteGameSessionQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGameSessionQueueCommandOutput) => void),
    cb?: (err: any, data?: DeleteGameSessionQueueCommandOutput) => void
  ): Promise<DeleteGameSessionQueueCommandOutput> | void {
    const command = new DeleteGameSessionQueueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Permanently removes a FlexMatch matchmaking configuration. To delete, specify the
   *             configuration name. A matchmaking configuration cannot be deleted if it is being used in
   *             any active matchmaking tickets.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingConfigurations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingRuleSets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ValidateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteMatchmakingConfiguration(
    args: DeleteMatchmakingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMatchmakingConfigurationCommandOutput>;
  public deleteMatchmakingConfiguration(
    args: DeleteMatchmakingConfigurationCommandInput,
    cb: (err: any, data?: DeleteMatchmakingConfigurationCommandOutput) => void
  ): void;
  public deleteMatchmakingConfiguration(
    args: DeleteMatchmakingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMatchmakingConfigurationCommandOutput) => void
  ): void;
  public deleteMatchmakingConfiguration(
    args: DeleteMatchmakingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMatchmakingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteMatchmakingConfigurationCommandOutput) => void
  ): Promise<DeleteMatchmakingConfigurationCommandOutput> | void {
    const command = new DeleteMatchmakingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule
   *             set name. Rule sets cannot be deleted if they are currently being used by a matchmaking
   *             configuration. </p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a Rule
   *                         Set</a>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingConfigurations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingRuleSets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ValidateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteMatchmakingRuleSet(
    args: DeleteMatchmakingRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMatchmakingRuleSetCommandOutput>;
  public deleteMatchmakingRuleSet(
    args: DeleteMatchmakingRuleSetCommandInput,
    cb: (err: any, data?: DeleteMatchmakingRuleSetCommandOutput) => void
  ): void;
  public deleteMatchmakingRuleSet(
    args: DeleteMatchmakingRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMatchmakingRuleSetCommandOutput) => void
  ): void;
  public deleteMatchmakingRuleSet(
    args: DeleteMatchmakingRuleSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMatchmakingRuleSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteMatchmakingRuleSetCommandOutput) => void
  ): Promise<DeleteMatchmakingRuleSetCommandOutput> | void {
    const command = new DeleteMatchmakingRuleSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a fleet scaling policy. This action means that the policy is no longer in
   *             force and removes all record of it. To delete a scaling policy, specify both the scaling
   *             policy name and the fleet ID it is associated with.</p>
   *         <p>To temporarily suspend scaling policies, call <a>StopFleetActions</a>.
   *             This operation suspends all policies for the fleet.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>DescribeFleetCapacity</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetCapacity</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeEC2InstanceLimits</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage scaling policies:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a>PutScalingPolicy</a> (auto-scaling)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeScalingPolicies</a> (auto-scaling)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DeleteScalingPolicy</a> (auto-scaling)</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScalingPolicyCommandOutput>;
  public deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    cb: (err: any, data?: DeleteScalingPolicyCommandOutput) => void
  ): void;
  public deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScalingPolicyCommandOutput) => void
  ): void;
  public deleteScalingPolicy(
    args: DeleteScalingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteScalingPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteScalingPolicyCommandOutput) => void
  ): Promise<DeleteScalingPolicyCommandOutput> | void {
    const command = new DeleteScalingPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a Realtime script. This action permanently deletes the script record. If
   *             script files were uploaded, they are also deleted (files stored in an S3 bucket are not
   *             deleted). </p>
   *         <p>To delete a script, specify the script ID.  Before deleting a script, be sure to
   *             terminate all fleets that are deployed with the script being deleted. Fleet instances
   *             periodically check for script updates, and if the script record no longer exists, the
   *             instance will go into an error state and be unable to host game sessions.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
   *         </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListScripts</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteScript</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteScript(
    args: DeleteScriptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScriptCommandOutput>;
  public deleteScript(args: DeleteScriptCommandInput, cb: (err: any, data?: DeleteScriptCommandOutput) => void): void;
  public deleteScript(
    args: DeleteScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScriptCommandOutput) => void
  ): void;
  public deleteScript(
    args: DeleteScriptCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteScriptCommandOutput) => void),
    cb?: (err: any, data?: DeleteScriptCommandOutput) => void
  ): Promise<DeleteScriptCommandOutput> | void {
    const command = new DeleteScriptCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a pending VPC peering authorization for the specified VPC. If you need to
   *             delete an existing VPC peering connection, call <a>DeleteVpcPeeringConnection</a>. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringAuthorizations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringConnections</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteVpcPeeringAuthorization(
    args: DeleteVpcPeeringAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcPeeringAuthorizationCommandOutput>;
  public deleteVpcPeeringAuthorization(
    args: DeleteVpcPeeringAuthorizationCommandInput,
    cb: (err: any, data?: DeleteVpcPeeringAuthorizationCommandOutput) => void
  ): void;
  public deleteVpcPeeringAuthorization(
    args: DeleteVpcPeeringAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcPeeringAuthorizationCommandOutput) => void
  ): void;
  public deleteVpcPeeringAuthorization(
    args: DeleteVpcPeeringAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpcPeeringAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcPeeringAuthorizationCommandOutput) => void
  ): Promise<DeleteVpcPeeringAuthorizationCommandOutput> | void {
    const command = new DeleteVpcPeeringAuthorizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a VPC peering connection. To delete the connection, you must have a valid
   *             authorization for the VPC peering connection that you want to delete. You can check for
   *             an authorization by calling <a>DescribeVpcPeeringAuthorizations</a> or
   *             request a new one using <a>CreateVpcPeeringAuthorization</a>. </p>
   *         <p>Once a valid authorization exists, call this operation from the AWS account that is
   *             used to manage the Amazon GameLift fleets. Identify the connection to delete by the connection
   *             ID and fleet ID. If successful, the connection is removed. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringAuthorizations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringConnections</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcPeeringConnectionCommandOutput>;
  public deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    cb: (err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void
  ): void;
  public deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void
  ): void;
  public deleteVpcPeeringConnection(
    args: DeleteVpcPeeringConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcPeeringConnectionCommandOutput) => void
  ): Promise<DeleteVpcPeeringConnectionCommandOutput> | void {
    const command = new DeleteVpcPeeringConnectionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves properties for an alias. This operation returns all alias metadata and
   *             settings. To get an alias's target fleet ID only, use <code>ResolveAlias</code>. </p>
   *         <p>To get alias properties, specify the alias ID. If successful, the requested alias
   *             record is returned.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListAliases</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ResolveAlias</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeAlias(
    args: DescribeAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAliasCommandOutput>;
  public describeAlias(
    args: DescribeAliasCommandInput,
    cb: (err: any, data?: DescribeAliasCommandOutput) => void
  ): void;
  public describeAlias(
    args: DescribeAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAliasCommandOutput) => void
  ): void;
  public describeAlias(
    args: DescribeAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAliasCommandOutput) => void),
    cb?: (err: any, data?: DescribeAliasCommandOutput) => void
  ): Promise<DescribeAliasCommandOutput> | void {
    const command = new DescribeAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves properties for a build. To request a build record, specify a build ID. If
   *             successful, an object containing the build properties is returned.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/build-intro.html">
   *                 Working with Builds</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListBuilds</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteBuild</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeBuild(
    args: DescribeBuildCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBuildCommandOutput>;
  public describeBuild(
    args: DescribeBuildCommandInput,
    cb: (err: any, data?: DescribeBuildCommandOutput) => void
  ): void;
  public describeBuild(
    args: DescribeBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBuildCommandOutput) => void
  ): void;
  public describeBuild(
    args: DescribeBuildCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBuildCommandOutput) => void),
    cb?: (err: any, data?: DescribeBuildCommandOutput) => void
  ): Promise<DescribeBuildCommandOutput> | void {
    const command = new DescribeBuildCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the following information for the specified EC2 instance
   *             type:</p>
   *         <ul>
   *             <li>
   *                 <p>maximum number of instances allowed per AWS account (service
   *                     limit)</p>
   *             </li>
   *             <li>
   *                 <p>current usage level for the AWS account</p>
   *             </li>
   *          </ul>
   *         <p>Service limits vary depending on Region. Available Regions for Amazon GameLift can be found
   *             in the AWS Management Console for Amazon GameLift (see the drop-down list in the upper right
   *             corner).</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Describe fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetUtilization</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeEC2InstanceLimits</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetEvents</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Update fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describeEC2InstanceLimits(
    args: DescribeEC2InstanceLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEC2InstanceLimitsCommandOutput>;
  public describeEC2InstanceLimits(
    args: DescribeEC2InstanceLimitsCommandInput,
    cb: (err: any, data?: DescribeEC2InstanceLimitsCommandOutput) => void
  ): void;
  public describeEC2InstanceLimits(
    args: DescribeEC2InstanceLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEC2InstanceLimitsCommandOutput) => void
  ): void;
  public describeEC2InstanceLimits(
    args: DescribeEC2InstanceLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEC2InstanceLimitsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEC2InstanceLimitsCommandOutput) => void
  ): Promise<DescribeEC2InstanceLimitsCommandOutput> | void {
    const command = new DescribeEC2InstanceLimitsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves fleet properties, including metadata, status, and configuration, for one
   *             or more fleets. You can request attributes for all fleets, or specify a list of one or
   *             more fleet IDs. When requesting multiple fleets, use the pagination parameters to
   *             retrieve results as a set of sequential pages. If successful, a <a>FleetAttributes</a> object is returned for each requested fleet ID. When
   *             specifying a list of fleet IDs, attribute objects are returned only for fleets that
   *             currently exist. </p>
   *         <note>
   *             <p>Some API actions may limit the number of fleet IDs allowed in one request. If a
   *                 request exceeds this limit, the request fails and the error message includes the
   *                 maximum allowed.</p>
   *         </note>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Describe fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetUtilization</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeEC2InstanceLimits</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetEvents</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describeFleetAttributes(
    args: DescribeFleetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetAttributesCommandOutput>;
  public describeFleetAttributes(
    args: DescribeFleetAttributesCommandInput,
    cb: (err: any, data?: DescribeFleetAttributesCommandOutput) => void
  ): void;
  public describeFleetAttributes(
    args: DescribeFleetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetAttributesCommandOutput) => void
  ): void;
  public describeFleetAttributes(
    args: DescribeFleetAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetAttributesCommandOutput) => void
  ): Promise<DescribeFleetAttributesCommandOutput> | void {
    const command = new DescribeFleetAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the current status of fleet capacity for one or more fleets. This
   *             information includes the number of instances that have been requested for the fleet and
   *             the number currently active. You can request capacity for all fleets, or specify a list
   *             of one or more fleet IDs. When requesting multiple fleets, use the pagination parameters
   *             to retrieve results as a set of sequential pages. If successful, a <a>FleetCapacity</a> object is returned for each requested fleet ID. When
   *             specifying a list of fleet IDs, attribute objects are returned only for fleets that
   *             currently exist. </p>
   *         <note>
   *             <p>Some API actions may limit the number of fleet IDs allowed in one request. If a
   *                 request exceeds this limit, the request fails and the error message includes the
   *                 maximum allowed.</p>
   *         </note>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Describe fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetUtilization</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeEC2InstanceLimits</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetEvents</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describeFleetCapacity(
    args: DescribeFleetCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetCapacityCommandOutput>;
  public describeFleetCapacity(
    args: DescribeFleetCapacityCommandInput,
    cb: (err: any, data?: DescribeFleetCapacityCommandOutput) => void
  ): void;
  public describeFleetCapacity(
    args: DescribeFleetCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetCapacityCommandOutput) => void
  ): void;
  public describeFleetCapacity(
    args: DescribeFleetCapacityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetCapacityCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetCapacityCommandOutput) => void
  ): Promise<DescribeFleetCapacityCommandOutput> | void {
    const command = new DescribeFleetCapacityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves entries from the specified fleet's event log. You can specify a time
   *             range to limit the result set. Use the pagination parameters to retrieve results as a
   *             set of sequential pages. If successful, a collection of event log entries matching the
   *             request are returned.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Describe fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetUtilization</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeEC2InstanceLimits</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetEvents</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describeFleetEvents(
    args: DescribeFleetEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetEventsCommandOutput>;
  public describeFleetEvents(
    args: DescribeFleetEventsCommandInput,
    cb: (err: any, data?: DescribeFleetEventsCommandOutput) => void
  ): void;
  public describeFleetEvents(
    args: DescribeFleetEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetEventsCommandOutput) => void
  ): void;
  public describeFleetEvents(
    args: DescribeFleetEventsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetEventsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetEventsCommandOutput) => void
  ): Promise<DescribeFleetEventsCommandOutput> | void {
    const command = new DescribeFleetEventsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the inbound connection permissions for a fleet. Connection permissions
   *             include a range of IP addresses and port settings that incoming traffic can use to
   *             access server processes in the fleet. To get a fleet's inbound connection permissions,
   *             specify a fleet ID. If successful, a collection of <a>IpPermission</a>
   *             objects is returned for the requested fleet ID. If the requested fleet has been deleted,
   *             the result set is empty.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Describe fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetUtilization</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeEC2InstanceLimits</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetEvents</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describeFleetPortSettings(
    args: DescribeFleetPortSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetPortSettingsCommandOutput>;
  public describeFleetPortSettings(
    args: DescribeFleetPortSettingsCommandInput,
    cb: (err: any, data?: DescribeFleetPortSettingsCommandOutput) => void
  ): void;
  public describeFleetPortSettings(
    args: DescribeFleetPortSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetPortSettingsCommandOutput) => void
  ): void;
  public describeFleetPortSettings(
    args: DescribeFleetPortSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetPortSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetPortSettingsCommandOutput) => void
  ): Promise<DescribeFleetPortSettingsCommandOutput> | void {
    const command = new DescribeFleetPortSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves utilization statistics for one or more fleets. You can request
   *             utilization data for all fleets, or specify a list of one or more fleet IDs. When
   *             requesting multiple fleets, use the pagination parameters to retrieve results as a set
   *             of sequential pages. If successful, a <a>FleetUtilization</a> object is
   *             returned for each requested fleet ID. When specifying a list of fleet IDs, utilization
   *             objects are returned only for fleets that currently exist. </p>
   *         <note>
   *             <p>Some API actions may limit the number of fleet IDs allowed in one request. If a
   *                 request exceeds this limit, the request fails and the error message includes the
   *                 maximum allowed.</p>
   *         </note>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Describe fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetUtilization</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeEC2InstanceLimits</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetEvents</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describeFleetUtilization(
    args: DescribeFleetUtilizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetUtilizationCommandOutput>;
  public describeFleetUtilization(
    args: DescribeFleetUtilizationCommandInput,
    cb: (err: any, data?: DescribeFleetUtilizationCommandOutput) => void
  ): void;
  public describeFleetUtilization(
    args: DescribeFleetUtilizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetUtilizationCommandOutput) => void
  ): void;
  public describeFleetUtilization(
    args: DescribeFleetUtilizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetUtilizationCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetUtilizationCommandOutput) => void
  ): Promise<DescribeFleetUtilizationCommandOutput> | void {
    const command = new DescribeFleetUtilizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves properties, including the protection policy in force, for one or more
   *             game sessions. This action can be used in several ways: (1) provide a
   *                 <code>GameSessionId</code> or <code>GameSessionArn</code> to request details for a
   *             specific game session; (2) provide either a <code>FleetId</code> or an
   *                 <code>AliasId</code> to request properties for all game sessions running on a fleet. </p>
   *         <p>To get game session record(s), specify just one of the following: game session ID,
   *             fleet ID, or alias ID. You can filter this request by game session status. Use the
   *             pagination parameters to retrieve results as a set of sequential pages. If successful, a
   *                 <a>GameSessionDetail</a> object is returned for each session matching the
   *             request.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionDetails</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SearchGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetGameSessionLogUrl</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describeGameSessionDetails(
    args: DescribeGameSessionDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGameSessionDetailsCommandOutput>;
  public describeGameSessionDetails(
    args: DescribeGameSessionDetailsCommandInput,
    cb: (err: any, data?: DescribeGameSessionDetailsCommandOutput) => void
  ): void;
  public describeGameSessionDetails(
    args: DescribeGameSessionDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGameSessionDetailsCommandOutput) => void
  ): void;
  public describeGameSessionDetails(
    args: DescribeGameSessionDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGameSessionDetailsCommandOutput) => void),
    cb?: (err: any, data?: DescribeGameSessionDetailsCommandOutput) => void
  ): Promise<DescribeGameSessionDetailsCommandOutput> | void {
    const command = new DescribeGameSessionDetailsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves properties and current status of a game session placement request. To get
   *         game session placement details, specify the placement ID. If successful, a <a>GameSessionPlacement</a> object is returned.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionDetails</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SearchGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetGameSessionLogUrl</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describeGameSessionPlacement(
    args: DescribeGameSessionPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGameSessionPlacementCommandOutput>;
  public describeGameSessionPlacement(
    args: DescribeGameSessionPlacementCommandInput,
    cb: (err: any, data?: DescribeGameSessionPlacementCommandOutput) => void
  ): void;
  public describeGameSessionPlacement(
    args: DescribeGameSessionPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGameSessionPlacementCommandOutput) => void
  ): void;
  public describeGameSessionPlacement(
    args: DescribeGameSessionPlacementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGameSessionPlacementCommandOutput) => void),
    cb?: (err: any, data?: DescribeGameSessionPlacementCommandOutput) => void
  ): Promise<DescribeGameSessionPlacementCommandOutput> | void {
    const command = new DescribeGameSessionPlacementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the properties for one or more game session queues. When requesting
   *             multiple queues, use the pagination parameters to retrieve results as a set of
   *             sequential pages. If successful, a <a>GameSessionQueue</a> object is returned
   *             for each requested queue. When specifying a list of queues, objects are returned only
   *             for queues that currently exist in the Region.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSessionQueue</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionQueues</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSessionQueue</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteGameSessionQueue</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeGameSessionQueues(
    args: DescribeGameSessionQueuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGameSessionQueuesCommandOutput>;
  public describeGameSessionQueues(
    args: DescribeGameSessionQueuesCommandInput,
    cb: (err: any, data?: DescribeGameSessionQueuesCommandOutput) => void
  ): void;
  public describeGameSessionQueues(
    args: DescribeGameSessionQueuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGameSessionQueuesCommandOutput) => void
  ): void;
  public describeGameSessionQueues(
    args: DescribeGameSessionQueuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGameSessionQueuesCommandOutput) => void),
    cb?: (err: any, data?: DescribeGameSessionQueuesCommandOutput) => void
  ): Promise<DescribeGameSessionQueuesCommandOutput> | void {
    const command = new DescribeGameSessionQueuesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a set of one or more game sessions. Request a specific game session or
   *             request all game sessions on a fleet. Alternatively, use <a>SearchGameSessions</a> to request a set of active game sessions that are
   *             filtered by certain criteria. To retrieve protection policy settings for game sessions,
   *             use <a>DescribeGameSessionDetails</a>.</p>
   *         <p>To get game sessions, specify one of the following: game session ID, fleet ID, or
   *             alias ID. You can filter this request by game session status. Use the pagination
   *             parameters to retrieve results as a set of sequential pages. If successful, a <a>GameSession</a> object is returned for each game session matching the
   *             request.</p>
   *         <p>
   *             <i>Available in Amazon GameLift Local.</i>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionDetails</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SearchGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetGameSessionLogUrl</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describeGameSessions(
    args: DescribeGameSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGameSessionsCommandOutput>;
  public describeGameSessions(
    args: DescribeGameSessionsCommandInput,
    cb: (err: any, data?: DescribeGameSessionsCommandOutput) => void
  ): void;
  public describeGameSessions(
    args: DescribeGameSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGameSessionsCommandOutput) => void
  ): void;
  public describeGameSessions(
    args: DescribeGameSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGameSessionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeGameSessionsCommandOutput) => void
  ): Promise<DescribeGameSessionsCommandOutput> | void {
    const command = new DescribeGameSessionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a fleet's instances, including instance IDs. Use this
   *             action to get details on all instances in the fleet or get details on one specific
   *             instance.</p>
   *         <p>To get a specific instance, specify fleet ID and instance ID. To get all instances
   *             in a fleet, specify a fleet ID only. Use the pagination parameters to retrieve results
   *             as a set of sequential pages. If successful, an <a>Instance</a> object is
   *             returned for each result.</p>
   */
  public describeInstances(
    args: DescribeInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstancesCommandOutput>;
  public describeInstances(
    args: DescribeInstancesCommandInput,
    cb: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): void;
  public describeInstances(
    args: DescribeInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): void;
  public describeInstances(
    args: DescribeInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeInstancesCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstancesCommandOutput) => void
  ): Promise<DescribeInstancesCommandOutput> | void {
    const command = new DescribeInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket
   *             information, including status and--once a successful match is made--acquire connection
   *             information for the resulting new game session. </p>
   *         <p>You can use this operation to track the progress of matchmaking requests (through
   *             polling) as an alternative to using event notifications. See more details on tracking
   *             matchmaking requests through polling or notifications in <a>StartMatchmaking</a>. </p>
   *         <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the
   *             request is successful, a ticket object is returned for each requested ID that currently
   *             exists.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-client.html">
   *             Add FlexMatch to a Game Client</a>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-notification.html">
   *             Set Up FlexMatch Event Notification</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>StartMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>StopMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>AcceptMatch</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>StartMatchBackfill</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeMatchmaking(
    args: DescribeMatchmakingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMatchmakingCommandOutput>;
  public describeMatchmaking(
    args: DescribeMatchmakingCommandInput,
    cb: (err: any, data?: DescribeMatchmakingCommandOutput) => void
  ): void;
  public describeMatchmaking(
    args: DescribeMatchmakingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMatchmakingCommandOutput) => void
  ): void;
  public describeMatchmaking(
    args: DescribeMatchmakingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMatchmakingCommandOutput) => void),
    cb?: (err: any, data?: DescribeMatchmakingCommandOutput) => void
  ): Promise<DescribeMatchmakingCommandOutput> | void {
    const command = new DescribeMatchmakingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the details of FlexMatch matchmaking configurations. With this operation, you
   *             have the following options: (1) retrieve all existing configurations, (2) provide the
   *             names of one or more configurations to retrieve, or (3) retrieve all configurations that
   *             use a specified rule set name. When requesting multiple items, use the pagination
   *             parameters to retrieve results as a set of sequential pages. If successful, a
   *             configuration is returned for each requested name. When specifying a list of names, only
   *             configurations that currently exist are returned. </p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/matchmaker-build.html"> Setting Up FlexMatch
   *                 Matchmakers</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingConfigurations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingRuleSets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ValidateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeMatchmakingConfigurations(
    args: DescribeMatchmakingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMatchmakingConfigurationsCommandOutput>;
  public describeMatchmakingConfigurations(
    args: DescribeMatchmakingConfigurationsCommandInput,
    cb: (err: any, data?: DescribeMatchmakingConfigurationsCommandOutput) => void
  ): void;
  public describeMatchmakingConfigurations(
    args: DescribeMatchmakingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMatchmakingConfigurationsCommandOutput) => void
  ): void;
  public describeMatchmakingConfigurations(
    args: DescribeMatchmakingConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMatchmakingConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeMatchmakingConfigurationsCommandOutput) => void
  ): Promise<DescribeMatchmakingConfigurationsCommandOutput> | void {
    const command = new DescribeMatchmakingConfigurationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all
   *             existing rule sets for the Region, or provide a list of one or more rule set names. When
   *             requesting multiple items, use the pagination parameters to retrieve results as a set of
   *             sequential pages. If successful, a rule set is returned for each requested name. </p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a Rule
   *                         Set</a>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingConfigurations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingRuleSets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ValidateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeMatchmakingRuleSets(
    args: DescribeMatchmakingRuleSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMatchmakingRuleSetsCommandOutput>;
  public describeMatchmakingRuleSets(
    args: DescribeMatchmakingRuleSetsCommandInput,
    cb: (err: any, data?: DescribeMatchmakingRuleSetsCommandOutput) => void
  ): void;
  public describeMatchmakingRuleSets(
    args: DescribeMatchmakingRuleSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMatchmakingRuleSetsCommandOutput) => void
  ): void;
  public describeMatchmakingRuleSets(
    args: DescribeMatchmakingRuleSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMatchmakingRuleSetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeMatchmakingRuleSetsCommandOutput) => void
  ): Promise<DescribeMatchmakingRuleSetsCommandOutput> | void {
    const command = new DescribeMatchmakingRuleSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves properties for one or more player sessions. This action can be used in
   *         several ways: (1) provide a <code>PlayerSessionId</code> to request properties for a
   *         specific player session; (2) provide a <code>GameSessionId</code> to request properties
   *         for all player sessions in the specified game session; (3) provide a
   *         <code>PlayerId</code> to request properties for all player sessions of a specified
   *         player. </p>
   *          <p>To get game session record(s), specify only one of the following: a player session
   *         ID, a game session ID, or a player ID. You can filter this request by player session
   *         status. Use the pagination parameters to retrieve results as a set of sequential pages.
   *         If successful, a <a>PlayerSession</a> object is returned for each session
   *         matching the request.</p>
   *          <p>
   *             <i>Available in Amazon GameLift Local.</i>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreatePlayerSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreatePlayerSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribePlayerSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describePlayerSessions(
    args: DescribePlayerSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePlayerSessionsCommandOutput>;
  public describePlayerSessions(
    args: DescribePlayerSessionsCommandInput,
    cb: (err: any, data?: DescribePlayerSessionsCommandOutput) => void
  ): void;
  public describePlayerSessions(
    args: DescribePlayerSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePlayerSessionsCommandOutput) => void
  ): void;
  public describePlayerSessions(
    args: DescribePlayerSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePlayerSessionsCommandOutput) => void),
    cb?: (err: any, data?: DescribePlayerSessionsCommandOutput) => void
  ): Promise<DescribePlayerSessionsCommandOutput> | void {
    const command = new DescribePlayerSessionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the current runtime configuration for the specified fleet. The runtime
   *             configuration tells Amazon GameLift how to launch server processes on instances in the
   *             fleet.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Describe fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetUtilization</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeEC2InstanceLimits</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetEvents</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describeRuntimeConfiguration(
    args: DescribeRuntimeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuntimeConfigurationCommandOutput>;
  public describeRuntimeConfiguration(
    args: DescribeRuntimeConfigurationCommandInput,
    cb: (err: any, data?: DescribeRuntimeConfigurationCommandOutput) => void
  ): void;
  public describeRuntimeConfiguration(
    args: DescribeRuntimeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuntimeConfigurationCommandOutput) => void
  ): void;
  public describeRuntimeConfiguration(
    args: DescribeRuntimeConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRuntimeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeRuntimeConfigurationCommandOutput) => void
  ): Promise<DescribeRuntimeConfigurationCommandOutput> | void {
    const command = new DescribeRuntimeConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves all scaling policies applied to a fleet.</p>
   *         <p>To get a fleet's scaling policies, specify the fleet ID. You can filter this
   *             request by policy status, such as to retrieve only active scaling policies. Use the
   *             pagination parameters to retrieve results as a set of sequential pages. If successful,
   *             set of <a>ScalingPolicy</a> objects is returned for the fleet.</p>
   *         <p>A fleet may have all of its scaling policies suspended (<a>StopFleetActions</a>). This action does not affect the status of the scaling
   *             policies, which remains ACTIVE. To see whether a fleet's scaling policies are in force
   *             or suspended, call <a>DescribeFleetAttributes</a> and check the stopped
   *             actions.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>DescribeFleetCapacity</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetCapacity</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeEC2InstanceLimits</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage scaling policies:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a>PutScalingPolicy</a> (auto-scaling)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeScalingPolicies</a> (auto-scaling)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DeleteScalingPolicy</a> (auto-scaling)</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingPoliciesCommandOutput>;
  public describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    cb: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void
  ): void;
  public describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void
  ): void;
  public describeScalingPolicies(
    args: DescribeScalingPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScalingPoliciesCommandOutput) => void),
    cb?: (err: any, data?: DescribeScalingPoliciesCommandOutput) => void
  ): Promise<DescribeScalingPoliciesCommandOutput> | void {
    const command = new DescribeScalingPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves properties for a Realtime script. </p>
   *         <p>To request a script record, specify the script ID. If successful, an object containing the script properties
   *         is returned.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
   *         </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListScripts</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteScript</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeScript(
    args: DescribeScriptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScriptCommandOutput>;
  public describeScript(
    args: DescribeScriptCommandInput,
    cb: (err: any, data?: DescribeScriptCommandOutput) => void
  ): void;
  public describeScript(
    args: DescribeScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScriptCommandOutput) => void
  ): void;
  public describeScript(
    args: DescribeScriptCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScriptCommandOutput) => void),
    cb?: (err: any, data?: DescribeScriptCommandOutput) => void
  ): Promise<DescribeScriptCommandOutput> | void {
    const command = new DescribeScriptCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves valid VPC peering authorizations that are pending for the AWS account.
   *             This operation returns all VPC peering authorizations and requests for peering. This
   *             includes those initiated and received by this account. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringAuthorizations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringConnections</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeVpcPeeringAuthorizations(
    args: DescribeVpcPeeringAuthorizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcPeeringAuthorizationsCommandOutput>;
  public describeVpcPeeringAuthorizations(
    args: DescribeVpcPeeringAuthorizationsCommandInput,
    cb: (err: any, data?: DescribeVpcPeeringAuthorizationsCommandOutput) => void
  ): void;
  public describeVpcPeeringAuthorizations(
    args: DescribeVpcPeeringAuthorizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcPeeringAuthorizationsCommandOutput) => void
  ): void;
  public describeVpcPeeringAuthorizations(
    args: DescribeVpcPeeringAuthorizationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcPeeringAuthorizationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcPeeringAuthorizationsCommandOutput) => void
  ): Promise<DescribeVpcPeeringAuthorizationsCommandOutput> | void {
    const command = new DescribeVpcPeeringAuthorizationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information on VPC peering connections. Use this operation to get peering
   *             information for all fleets or for one specific fleet ID. </p>
   *         <p>To retrieve connection information, call this operation from the AWS account that
   *             is used to manage the Amazon GameLift fleets. Specify a fleet ID or leave the parameter empty
   *             to retrieve all connection records. If successful, the retrieved information includes
   *             both active and pending connections. Active connections identify the IpV4 CIDR block
   *             that the VPC uses to connect. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringAuthorizations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringAuthorization</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeVpcPeeringConnections</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteVpcPeeringConnection</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVpcPeeringConnectionsCommandOutput>;
  public describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    cb: (err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void
  ): void;
  public describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void
  ): void;
  public describeVpcPeeringConnections(
    args: DescribeVpcPeeringConnectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeVpcPeeringConnectionsCommandOutput) => void
  ): Promise<DescribeVpcPeeringConnectionsCommandOutput> | void {
    const command = new DescribeVpcPeeringConnectionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the location of stored game session logs for a specified game session.
   *             When a game session is terminated, Amazon GameLift automatically stores the logs in Amazon S3 and
   *             retains them for 14 days. Use this URL to download the logs.</p>
   *         <note>
   *             <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">AWS Service
   *                     Limits</a> page for maximum log file sizes. Log files that exceed this limit
   *                 are not saved.</p>
   *         </note>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionDetails</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SearchGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetGameSessionLogUrl</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public getGameSessionLogUrl(
    args: GetGameSessionLogUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGameSessionLogUrlCommandOutput>;
  public getGameSessionLogUrl(
    args: GetGameSessionLogUrlCommandInput,
    cb: (err: any, data?: GetGameSessionLogUrlCommandOutput) => void
  ): void;
  public getGameSessionLogUrl(
    args: GetGameSessionLogUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGameSessionLogUrlCommandOutput) => void
  ): void;
  public getGameSessionLogUrl(
    args: GetGameSessionLogUrlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGameSessionLogUrlCommandOutput) => void),
    cb?: (err: any, data?: GetGameSessionLogUrlCommandOutput) => void
  ): Promise<GetGameSessionLogUrlCommandOutput> | void {
    const command = new GetGameSessionLogUrlCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests remote access to a fleet instance. Remote access is useful for debugging,
   *             gathering benchmarking data, or watching activity in real time. </p>
   *         <p>Access requires credentials that match the operating system of the instance. For a
   *             Windows instance, Amazon GameLift returns a user name and password as strings for use with a
   *             Windows Remote Desktop client. For a Linux instance, Amazon GameLift returns a user name and RSA
   *             private key, also as strings, for use with an SSH client. The private key must be saved
   *             in the proper format to a <code>.pem</code> file before using. If you're making this
   *             request using the AWS CLI, saving the secret can be handled as part of the
   *             GetInstanceAccess request. (See the example later in this topic). For more information
   *             on remote access, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Accessing an
   *                 Instance</a>.</p>
   *         <p>To request access to a specific instance, specify the IDs of both the instance and
   *             the fleet it belongs to. You can retrieve a fleet's instance IDs by calling <a>DescribeInstances</a>. If successful, an <a>InstanceAccess</a>
   *             object is returned containing the instance's IP address and a set of
   *             credentials.</p>
   */
  public getInstanceAccess(
    args: GetInstanceAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceAccessCommandOutput>;
  public getInstanceAccess(
    args: GetInstanceAccessCommandInput,
    cb: (err: any, data?: GetInstanceAccessCommandOutput) => void
  ): void;
  public getInstanceAccess(
    args: GetInstanceAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceAccessCommandOutput) => void
  ): void;
  public getInstanceAccess(
    args: GetInstanceAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInstanceAccessCommandOutput) => void),
    cb?: (err: any, data?: GetInstanceAccessCommandOutput) => void
  ): Promise<GetInstanceAccessCommandOutput> | void {
    const command = new GetInstanceAccessCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves all aliases for this AWS account. You can filter the result set by
   *             alias name and/or routing strategy type. Use the pagination parameters to retrieve
   *             results in sequential pages.</p>
   *         <note>
   *             <p>Returned aliases are not listed in any particular order.</p>
   *         </note>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListAliases</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ResolveAlias</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
  public listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
  public listAliases(
    args: ListAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAliasesCommandOutput) => void
  ): void;
  public listAliases(
    args: ListAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAliasesCommandOutput) => void),
    cb?: (err: any, data?: ListAliasesCommandOutput) => void
  ): Promise<ListAliasesCommandOutput> | void {
    const command = new ListAliasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves build records for all builds associated with the AWS account in use.
   *             You can limit results to builds that are in a specific status by using the
   *                 <code>Status</code> parameter. Use the pagination parameters to retrieve results in
   *             a set of sequential pages. </p>
   *         <note>
   *             <p>Build records are not listed in any particular order.</p>
   *         </note>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/build-intro.html">
   *                 Working with Builds</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListBuilds</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteBuild</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public listBuilds(args: ListBuildsCommandInput, options?: __HttpHandlerOptions): Promise<ListBuildsCommandOutput>;
  public listBuilds(args: ListBuildsCommandInput, cb: (err: any, data?: ListBuildsCommandOutput) => void): void;
  public listBuilds(
    args: ListBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBuildsCommandOutput) => void
  ): void;
  public listBuilds(
    args: ListBuildsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListBuildsCommandOutput) => void),
    cb?: (err: any, data?: ListBuildsCommandOutput) => void
  ): Promise<ListBuildsCommandOutput> | void {
    const command = new ListBuildsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a collection of fleet records for this AWS account. You can filter the
   *             result set to find only those fleets that are deployed with a specific build or script.
   *             Use the pagination parameters to retrieve results in sequential
   *             pages.</p>
   *         <note>
   *             <p>Fleet records are not listed in a particular order.</p>
   *         </note>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Set Up Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public listFleets(args: ListFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListFleetsCommandOutput>;
  public listFleets(args: ListFleetsCommandInput, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
  public listFleets(
    args: ListFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;
  public listFleets(
    args: ListFleetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFleetsCommandOutput) => void),
    cb?: (err: any, data?: ListFleetsCommandOutput) => void
  ): Promise<ListFleetsCommandOutput> | void {
    const command = new ListFleetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves script records for all Realtime scripts that are associated with the AWS account in use. </p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
   *         </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListScripts</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteScript</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public listScripts(args: ListScriptsCommandInput, options?: __HttpHandlerOptions): Promise<ListScriptsCommandOutput>;
  public listScripts(args: ListScriptsCommandInput, cb: (err: any, data?: ListScriptsCommandOutput) => void): void;
  public listScripts(
    args: ListScriptsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScriptsCommandOutput) => void
  ): void;
  public listScripts(
    args: ListScriptsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListScriptsCommandOutput) => void),
    cb?: (err: any, data?: ListScriptsCommandOutput) => void
  ): Promise<ListScriptsCommandOutput> | void {
    const command = new ListScriptsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>
   *             Retrieves all tags that are assigned to a GameLift resource.
   *             Resource tags are used to organize AWS resources for a range of purposes.
   *             This action handles the permissions necessary to manage tags for the following
   *             GameLift resource types:</p>
   *         <ul>
   *             <li>
   *                 <p>Build</p>
   *             </li>
   *             <li>
   *                 <p>Script</p>
   *             </li>
   *             <li>
   *                 <p>Fleet</p>
   *             </li>
   *             <li>
   *                 <p>Alias</p>
   *             </li>
   *             <li>
   *                 <p>GameSessionQueue</p>
   *             </li>
   *             <li>
   *                 <p>MatchmakingConfiguration</p>
   *             </li>
   *             <li>
   *                 <p>MatchmakingRuleSet</p>
   *             </li>
   *          </ul>
   *         <p>To list tags for a resource, specify the unique ARN value for the resource.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the
   *             <i>AWS General Reference</i>
   *          </p>
   *         <p>
   *             <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/">
   *             AWS Tagging Strategies</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>TagResource</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UntagResource</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListTagsForResource</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates or updates a scaling policy for a fleet. Scaling policies are used to
   *             automatically scale a fleet's hosting capacity to meet player demand. An active scaling
   *             policy instructs Amazon GameLift to track a fleet metric and automatically change the fleet's
   *             capacity when a certain threshold is reached. There are two types of scaling policies:
   *             target-based and rule-based. Use a target-based policy to quickly and efficiently manage
   *             fleet scaling; this option is the most commonly used. Use rule-based policies when you
   *             need to exert fine-grained control over auto-scaling. </p>
   *         <p>Fleets can have multiple scaling policies of each type in force at the same time;
   *             you can have one target-based policy, one or multiple rule-based scaling policies, or
   *             both. We recommend caution, however, because multiple auto-scaling policies can have
   *             unintended consequences.</p>
   *         <p>You can temporarily suspend all scaling policies for a fleet by calling <a>StopFleetActions</a> with the fleet action AUTO_SCALING. To resume scaling
   *             policies, call <a>StartFleetActions</a> with the same fleet action. To stop
   *             just one scaling policy--or to permanently remove it, you must delete the policy with
   *                 <a>DeleteScalingPolicy</a>.</p>
   *         <p>Learn more about how to work with auto-scaling in <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-autoscaling.html">Set Up Fleet Automatic
   *                 Scaling</a>.</p>
   *         <p>
   *             <b>Target-based policy</b>
   *          </p>
   *         <p>A target-based policy tracks a single metric: PercentAvailableGameSessions. This
   *             metric tells us how much of a fleet's hosting capacity is ready to host game sessions
   *             but is not currently in use. This is the fleet's buffer; it measures the additional
   *             player demand that the fleet could handle at current capacity. With a target-based
   *             policy, you set your ideal buffer size and leave it to Amazon GameLift to take whatever action
   *             is needed to maintain that target. </p>
   *         <p>For example, you might choose to maintain a 10% buffer for a fleet that has the
   *             capacity to host 100 simultaneous game sessions. This policy tells Amazon GameLift to take
   *             action whenever the fleet's available capacity falls below or rises above 10 game
   *             sessions. Amazon GameLift will start new instances or stop unused instances in order to return
   *             to the 10% buffer. </p>
   *         <p>To create or update a target-based policy, specify a fleet ID and name, and set the
   *             policy type to "TargetBased". Specify the metric to track (PercentAvailableGameSessions)
   *             and reference a <a>TargetConfiguration</a> object with your desired buffer
   *             value. Exclude all other parameters. On a successful request, the policy name is
   *             returned. The scaling policy is automatically in force as soon as it's successfully
   *             created. If the fleet's auto-scaling actions are temporarily suspended, the new policy
   *             will be in force once the fleet actions are restarted.</p>
   *         <p>
   *             <b>Rule-based policy</b>
   *          </p>
   *         <p>A rule-based policy tracks specified fleet metric, sets a threshold value, and
   *             specifies the type of action to initiate when triggered. With a rule-based policy, you
   *             can select from several available fleet metrics. Each policy specifies whether to scale
   *             up or scale down (and by how much), so you need one policy for each type of action. </p>
   *         <p>For example, a policy may make the following statement: "If the percentage of idle
   *             instances is greater than 20% for more than 15 minutes, then reduce the fleet capacity
   *             by 10%."</p>
   *         <p>A policy's rule statement has the following structure:</p>
   *         <p>If <code>[MetricName]</code> is <code>[ComparisonOperator]</code>
   *             <code>[Threshold]</code> for <code>[EvaluationPeriods]</code> minutes, then
   *                 <code>[ScalingAdjustmentType]</code> to/by
   *             <code>[ScalingAdjustment]</code>.</p>
   *         <p>To implement the example, the rule statement would look like this:</p>
   *         <p>If <code>[PercentIdleInstances]</code> is <code>[GreaterThanThreshold]</code>
   *             <code>[20]</code> for <code>[15]</code> minutes, then
   *                 <code>[PercentChangeInCapacity]</code> to/by <code>[10]</code>.</p>
   *         <p>To create or update a scaling policy, specify a unique combination of name and
   *             fleet ID, and set the policy type to "RuleBased". Specify the parameter values for a
   *             policy rule statement. On a successful request, the policy name is returned. Scaling
   *             policies are automatically in force as soon as they're successfully created. If the
   *             fleet's auto-scaling actions are temporarily suspended, the new policy will be in force
   *             once the fleet actions are restarted.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>DescribeFleetCapacity</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateFleetCapacity</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeEC2InstanceLimits</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Manage scaling policies:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a>PutScalingPolicy</a> (auto-scaling)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeScalingPolicies</a> (auto-scaling)</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DeleteScalingPolicy</a> (auto-scaling)</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutScalingPolicyCommandOutput>;
  public putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;
  public putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): void;
  public putScalingPolicy(
    args: PutScalingPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutScalingPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutScalingPolicyCommandOutput) => void
  ): Promise<PutScalingPolicyCommandOutput> | void {
    const command = new PutScalingPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a fresh set of credentials for use when uploading a new set of game build
   *             files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see
   *                 <a>CreateBuild</a>.</p>
   *         <p>To request new credentials, specify the build ID as returned with an initial
   *                 <code>CreateBuild</code> request. If successful, a new set of credentials are
   *             returned, along with the S3 storage location associated with the build ID.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your
   *                 Game</a>
   *         </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListBuilds</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteBuild</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public requestUploadCredentials(
    args: RequestUploadCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestUploadCredentialsCommandOutput>;
  public requestUploadCredentials(
    args: RequestUploadCredentialsCommandInput,
    cb: (err: any, data?: RequestUploadCredentialsCommandOutput) => void
  ): void;
  public requestUploadCredentials(
    args: RequestUploadCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestUploadCredentialsCommandOutput) => void
  ): void;
  public requestUploadCredentials(
    args: RequestUploadCredentialsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RequestUploadCredentialsCommandOutput) => void),
    cb?: (err: any, data?: RequestUploadCredentialsCommandOutput) => void
  ): Promise<RequestUploadCredentialsCommandOutput> | void {
    const command = new RequestUploadCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the fleet ID that an alias is currently pointing to.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListAliases</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ResolveAlias</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public resolveAlias(
    args: ResolveAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResolveAliasCommandOutput>;
  public resolveAlias(args: ResolveAliasCommandInput, cb: (err: any, data?: ResolveAliasCommandOutput) => void): void;
  public resolveAlias(
    args: ResolveAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResolveAliasCommandOutput) => void
  ): void;
  public resolveAlias(
    args: ResolveAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResolveAliasCommandOutput) => void),
    cb?: (err: any, data?: ResolveAliasCommandOutput) => void
  ): Promise<ResolveAliasCommandOutput> | void {
    const command = new ResolveAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves all active game sessions that match a set of search criteria and sorts
   *             them in a specified order. You can search or sort by the following game session
   *             attributes:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>gameSessionId</b> -- A unique identifier for the game session. You can use
   *                     either a <code>GameSessionId</code> or <code>GameSessionArn</code> value.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>gameSessionName</b> -- Name assigned to a game
   *                     session. This value is set when requesting a new game session with <a>CreateGameSession</a> or updating with <a>UpdateGameSession</a>. Game session names do not need to be unique
   *                     to a game session.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>gameSessionProperties</b> -- Custom data
   *                     defined in a game session's <code>GameProperty</code> parameter.
   *                         <code>GameProperty</code> values are stored as key:value pairs; the filter
   *                     expression must indicate the key and a string to search the data values for. For
   *                     example, to search for game sessions with custom data containing the key:value
   *                     pair "gameMode:brawl", specify the following:
   *                         <code>gameSessionProperties.gameMode = "brawl"</code>. All custom data
   *                     values are searched as strings.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>maximumSessions</b> -- Maximum number of
   *                     player sessions allowed for a game session. This value is set when requesting a
   *                     new game session with <a>CreateGameSession</a> or updating with <a>UpdateGameSession</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>creationTimeMillis</b> -- Value indicating
   *                     when a game session was created. It is expressed in Unix time as
   *                     milliseconds.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>playerSessionCount</b> -- Number of players
   *                     currently connected to a game session. This value changes rapidly as players
   *                     join the session or drop out.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>hasAvailablePlayerSessions</b> -- Boolean
   *                     value indicating whether a game session has reached its maximum number of
   *                     players. It is highly recommended that all search requests include this filter
   *                     attribute to optimize search performance and return only sessions that players
   *                     can join. </p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>Returned values for <code>playerSessionCount</code> and
   *                     <code>hasAvailablePlayerSessions</code> change quickly as players join sessions
   *                 and others drop out. Results should be considered a snapshot in time. Be sure to
   *                 refresh search results often, and handle sessions that fill up before a player can
   *                 join. </p>
   *         </note>
   *         <p>To search or sort, specify either a fleet ID or an alias ID, and provide a search
   *             filter expression, a sort expression, or both. If successful, a collection of <a>GameSession</a> objects matching the request is returned. Use the pagination
   *             parameters to retrieve results as a set of sequential pages. </p>
   *         <p>You can search for game sessions one fleet at a time only. To find game sessions
   *             across multiple fleets, you must search each fleet separately and combine the results.
   *             This search feature finds only game sessions that are in <code>ACTIVE</code> status. To
   *             locate games in statuses other than active, use <a>DescribeGameSessionDetails</a>.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionDetails</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SearchGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetGameSessionLogUrl</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public searchGameSessions(
    args: SearchGameSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchGameSessionsCommandOutput>;
  public searchGameSessions(
    args: SearchGameSessionsCommandInput,
    cb: (err: any, data?: SearchGameSessionsCommandOutput) => void
  ): void;
  public searchGameSessions(
    args: SearchGameSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchGameSessionsCommandOutput) => void
  ): void;
  public searchGameSessions(
    args: SearchGameSessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchGameSessionsCommandOutput) => void),
    cb?: (err: any, data?: SearchGameSessionsCommandOutput) => void
  ): Promise<SearchGameSessionsCommandOutput> | void {
    const command = new SearchGameSessionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resumes activity on a fleet that was suspended with <a>StopFleetActions</a>. Currently, this operation is used to restart a fleet's
   *             auto-scaling activity. </p>
   *         <p>To start fleet actions, specify the fleet ID and the type of actions to restart. When
   *             auto-scaling fleet actions are restarted, Amazon GameLift once again initiates scaling events
   *             as triggered by the fleet's scaling policies. If actions on the fleet were never
   *             stopped, this operation will have no effect. You can view a fleet's stopped actions
   *             using <a>DescribeFleetAttributes</a>.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Describe fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetUtilization</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeEC2InstanceLimits</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetEvents</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Update fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public startFleetActions(
    args: StartFleetActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartFleetActionsCommandOutput>;
  public startFleetActions(
    args: StartFleetActionsCommandInput,
    cb: (err: any, data?: StartFleetActionsCommandOutput) => void
  ): void;
  public startFleetActions(
    args: StartFleetActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartFleetActionsCommandOutput) => void
  ): void;
  public startFleetActions(
    args: StartFleetActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartFleetActionsCommandOutput) => void),
    cb?: (err: any, data?: StartFleetActionsCommandOutput) => void
  ): Promise<StartFleetActionsCommandOutput> | void {
    const command = new StartFleetActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Places a request for a new game session in a queue (see <a>CreateGameSessionQueue</a>). When processing a placement request, Amazon GameLift
   *         searches for available resources on the queue's destinations, scanning each until it
   *         finds resources or the placement request times out.</p>
   *          <p>A game session placement request can also request player sessions. When a new game
   *         session is successfully created, Amazon GameLift creates a player session for each player
   *         included in the request.</p>
   *          <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they
   *         are listed in the queue configuration. Ideally, a queue's destinations are listed in
   *         preference order.</p>
   *          <p>Alternatively, when requesting a game session with players, you can also provide
   *         latency data for each player in relevant Regions. Latency data indicates the performance
   *         lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency
   *         data to reorder the list of destinations to place the game session in a Region with
   *         minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each
   *         Region's average lag for all players and reorders to get the best game play across all
   *         players. </p>
   *          <p>To place a new game session request, specify the following:</p>
   *          <ul>
   *             <li>
   *                <p>The queue name and a set of game session properties and settings</p>
   *             </li>
   *             <li>
   *                <p>A unique ID (such as a UUID) for the placement. You use this ID to track
   *                 the status of the placement request</p>
   *             </li>
   *             <li>
   *                <p>(Optional) A set of player data and a unique player ID for each player that
   *                 you are joining to the new game session (player data is optional, but if you
   *                 include it, you must also provide a unique ID for each player)</p>
   *             </li>
   *             <li>
   *                <p>Latency data for all players (if you want to optimize game play for the
   *                 players)</p>
   *             </li>
   *          </ul>
   *          <p>If successful, a new game session placement is created.</p>
   *          <p>To track the status of a placement request, call <a>DescribeGameSessionPlacement</a> and check the request's status. If the
   *         status is <code>FULFILLED</code>, a new game session has been created and a game session
   *         ARN and Region are referenced. If the placement request times out, you can resubmit the
   *         request or retry it with a different queue. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionDetails</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SearchGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetGameSessionLogUrl</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public startGameSessionPlacement(
    args: StartGameSessionPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartGameSessionPlacementCommandOutput>;
  public startGameSessionPlacement(
    args: StartGameSessionPlacementCommandInput,
    cb: (err: any, data?: StartGameSessionPlacementCommandOutput) => void
  ): void;
  public startGameSessionPlacement(
    args: StartGameSessionPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartGameSessionPlacementCommandOutput) => void
  ): void;
  public startGameSessionPlacement(
    args: StartGameSessionPlacementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartGameSessionPlacementCommandOutput) => void),
    cb?: (err: any, data?: StartGameSessionPlacementCommandOutput) => void
  ): Promise<StartGameSessionPlacementCommandOutput> | void {
    const command = new StartGameSessionPlacementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Finds new players to fill open slots in an existing game session. This operation
   *             can be used to add players to matched games that start with fewer than the maximum
   *             number of players or to replace players when they drop out. By backfilling with the same
   *             matchmaker used to create the original match, you ensure that new players meet the match
   *             criteria and maintain a consistent experience throughout the game session. You can
   *             backfill a match anytime after a game session has been created. </p>
   *         <p>To request a match backfill, specify a unique ticket ID, the existing game
   *             session's ARN, a matchmaking configuration, and a set of data that describes all current
   *             players in the game session. If successful, a match backfill ticket is created and
   *             returned with status set to QUEUED. The ticket is placed in the matchmaker's ticket pool
   *             and processed. Track the status of the ticket to respond as needed. </p>
   *         <p>The process of finding backfill matches is essentially identical to the initial
   *             matchmaking process. The matchmaker searches the pool and groups tickets together to
   *             form potential matches, allowing only one backfill ticket per potential match. Once the
   *             a match is formed, the matchmaker creates player sessions for the new players. All
   *             tickets in the match are updated with the game session's connection information, and the
   *             <a>GameSession</a> object is updated to include matchmaker data on the
   *             new players. For more detail on how match backfill requests are processed, see <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-match.html"> How
   *                 Amazon GameLift FlexMatch Works</a>. </p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-backfill.html">
   *             Backfill Existing Games with FlexMatch</a>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-match.html">
   *                 How GameLift FlexMatch Works</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>StartMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>StopMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>AcceptMatch</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>StartMatchBackfill</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public startMatchBackfill(
    args: StartMatchBackfillCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMatchBackfillCommandOutput>;
  public startMatchBackfill(
    args: StartMatchBackfillCommandInput,
    cb: (err: any, data?: StartMatchBackfillCommandOutput) => void
  ): void;
  public startMatchBackfill(
    args: StartMatchBackfillCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMatchBackfillCommandOutput) => void
  ): void;
  public startMatchBackfill(
    args: StartMatchBackfillCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMatchBackfillCommandOutput) => void),
    cb?: (err: any, data?: StartMatchBackfillCommandOutput) => void
  ): Promise<StartMatchBackfillCommandOutput> | void {
    const command = new StartMatchBackfillCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Uses FlexMatch to create a game match for a group of players based on custom
   *             matchmaking rules, and starts a new game for the matched players. Each matchmaking
   *             request specifies the type of match to build (team configuration, rules for an
   *             acceptable match, etc.). The request also specifies the players to find a match for and
   *             where to host the new game session for optimal performance. A matchmaking request might
   *             start with a single player or a group of players who want to play together. FlexMatch
   *             finds additional players as needed to fill the match. Match type, rules, and the queue
   *             used to place a new game session are defined in a <code>MatchmakingConfiguration</code>.
   * </p>
   *         <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking
   *             configuration, and include the players to be matched. You must also include a set of
   *             player attributes relevant for the matchmaking configuration. If successful, a
   *             matchmaking ticket is returned with status set to <code>QUEUED</code>. Track the status
   *             of the ticket to respond as needed and acquire game session connection information for
   *             successfully completed matches.</p>
   *         <p>
   *             <b>Tracking ticket status</b> -- A couple of options are
   *             available for tracking the status of matchmaking requests: </p>
   *         <ul>
   *             <li>
   *                 <p>Polling -- Call <code>DescribeMatchmaking</code>. This operation returns
   *                     the full ticket object, including current status and (for completed tickets)
   *                     game session connection info. We recommend polling no more than once every 10
   *                     seconds.</p>
   *             </li>
   *             <li>
   *                 <p>Notifications -- Get event notifications for changes in ticket status using
   *                     Amazon Simple Notification Service (SNS). Notifications are easy to set up (see <a>CreateMatchmakingConfiguration</a>) and typically deliver match
   *                     status changes faster and more efficiently than polling. We recommend that you
   *                     use polling to back up to notifications (since delivery is not guaranteed) and
   *                     call <code>DescribeMatchmaking</code> only when notifications are not received
   *                     within 30 seconds.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Processing a matchmaking request</b> -- FlexMatch
   *             handles a matchmaking request as follows: </p>
   *         <ol>
   *             <li>
   *                 <p>Your client code submits a <code>StartMatchmaking</code> request for one or
   *                     more players and tracks the status of the request ticket. </p>
   *             </li>
   *             <li>
   *                 <p>FlexMatch uses this ticket and others in process to build an acceptable
   *                     match. When a potential match is identified, all tickets in the proposed match
   *                     are advanced to the next status. </p>
   *             </li>
   *             <li>
   *                 <p>If the match requires player acceptance (set in the matchmaking
   *                     configuration), the tickets move into status <code>REQUIRES_ACCEPTANCE</code>.
   *                     This status triggers your client code to solicit acceptance from all players in
   *                     every ticket involved in the match, and then call <a>AcceptMatch</a>
   *                     for each player. If any player rejects or fails to accept the match before a
   *                     specified timeout, the proposed match is dropped (see <code>AcceptMatch</code>
   *                     for more details).</p>
   *             </li>
   *             <li>
   *                 <p>Once a match is proposed and accepted, the matchmaking tickets move into
   *                     status <code>PLACING</code>. FlexMatch locates resources for a new game session
   *                     using the game session queue (set in the matchmaking configuration) and creates
   *                     the game session based on the match data. </p>
   *             </li>
   *             <li>
   *                 <p>When the match is successfully placed, the matchmaking tickets move into
   *                     <code>COMPLETED</code> status. Connection information (including game
   *                     session endpoint and player session) is added to the matchmaking tickets.
   *                     Matched players can use the connection information to join the game. </p>
   *             </li>
   *          </ol>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-client.html">
   *             Add FlexMatch to a Game Client</a>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-notification.html">
   *             Set Up FlexMatch Event Notification</a>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-tasks.html">
   *             FlexMatch Integration Roadmap</a>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-match.html">
   *             How GameLift FlexMatch Works</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>StartMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>StopMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>AcceptMatch</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>StartMatchBackfill</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public startMatchmaking(
    args: StartMatchmakingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMatchmakingCommandOutput>;
  public startMatchmaking(
    args: StartMatchmakingCommandInput,
    cb: (err: any, data?: StartMatchmakingCommandOutput) => void
  ): void;
  public startMatchmaking(
    args: StartMatchmakingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMatchmakingCommandOutput) => void
  ): void;
  public startMatchmaking(
    args: StartMatchmakingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMatchmakingCommandOutput) => void),
    cb?: (err: any, data?: StartMatchmakingCommandOutput) => void
  ): Promise<StartMatchmakingCommandOutput> | void {
    const command = new StartMatchmakingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Suspends activity on a fleet. Currently, this operation is used to stop a fleet's
   *             auto-scaling activity. It is used to temporarily stop scaling events triggered by the
   *             fleet's scaling policies. The policies can be retained and auto-scaling activity can be
   *             restarted using <a>StartFleetActions</a>. You can view a fleet's stopped
   *             actions using <a>DescribeFleetAttributes</a>.</p>
   *         <p>To stop fleet actions, specify the fleet ID and the type of actions to suspend. When
   *             auto-scaling fleet actions are stopped, Amazon GameLift no longer initiates scaling events
   *             except to maintain the fleet's desired instances setting (<a>FleetCapacity</a>. Changes to the fleet's capacity must be done manually using <a>UpdateFleetCapacity</a>. </p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Describe fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetUtilization</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeEC2InstanceLimits</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeFleetEvents</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Update fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public stopFleetActions(
    args: StopFleetActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopFleetActionsCommandOutput>;
  public stopFleetActions(
    args: StopFleetActionsCommandInput,
    cb: (err: any, data?: StopFleetActionsCommandOutput) => void
  ): void;
  public stopFleetActions(
    args: StopFleetActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopFleetActionsCommandOutput) => void
  ): void;
  public stopFleetActions(
    args: StopFleetActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopFleetActionsCommandOutput) => void),
    cb?: (err: any, data?: StopFleetActionsCommandOutput) => void
  ): Promise<StopFleetActionsCommandOutput> | void {
    const command = new StopFleetActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a game session placement that is in <code>PENDING</code> status. To stop a
   *         placement, provide the placement ID values. If successful, the placement is moved to
   *         <code>CANCELLED</code> status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionDetails</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SearchGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetGameSessionLogUrl</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public stopGameSessionPlacement(
    args: StopGameSessionPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopGameSessionPlacementCommandOutput>;
  public stopGameSessionPlacement(
    args: StopGameSessionPlacementCommandInput,
    cb: (err: any, data?: StopGameSessionPlacementCommandOutput) => void
  ): void;
  public stopGameSessionPlacement(
    args: StopGameSessionPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopGameSessionPlacementCommandOutput) => void
  ): void;
  public stopGameSessionPlacement(
    args: StopGameSessionPlacementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopGameSessionPlacementCommandOutput) => void),
    cb?: (err: any, data?: StopGameSessionPlacementCommandOutput) => void
  ): Promise<StopGameSessionPlacementCommandOutput> | void {
    const command = new StopGameSessionPlacementCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a matchmaking ticket or match backfill ticket that is currently being
   *             processed. To stop the matchmaking operation, specify the ticket ID. If successful, work
   *             on the ticket is stopped, and the ticket status is changed to
   *             <code>CANCELLED</code>.</p>
   *         <p>This call is also used to turn off automatic backfill for an individual game session.
   *             This is for game sessions that are created with a matchmaking configuration that has
   *             automatic backfill enabled. The ticket ID is included in the <code>MatchmakerData</code>
   *             of an updated game session object, which is provided to the game server.</p>
   *         <note>
   *             <p>If the action is successful, the service sends back an empty JSON struct with the HTTP 200 response
   *         (not an empty HTTP body).</p>
   *          </note>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-client.html">
   *                 Add FlexMatch to a Game Client</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>StartMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>StopMatchmaking</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>AcceptMatch</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>StartMatchBackfill</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public stopMatchmaking(
    args: StopMatchmakingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMatchmakingCommandOutput>;
  public stopMatchmaking(
    args: StopMatchmakingCommandInput,
    cb: (err: any, data?: StopMatchmakingCommandOutput) => void
  ): void;
  public stopMatchmaking(
    args: StopMatchmakingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMatchmakingCommandOutput) => void
  ): void;
  public stopMatchmaking(
    args: StopMatchmakingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopMatchmakingCommandOutput) => void),
    cb?: (err: any, data?: StopMatchmakingCommandOutput) => void
  ): Promise<StopMatchmakingCommandOutput> | void {
    const command = new StopMatchmakingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Assigns a tag to a GameLift resource. AWS resource tags provide an additional
   *             management tool set. You can use tags to organize resources, create IAM permissions
   *             policies to manage access to groups of resources, customize AWS cost breakdowns, etc.
   *             This action handles the permissions necessary to manage tags for the following GameLift
   *             resource types:</p>
   *         <ul>
   *             <li>
   *                 <p>Build</p>
   *             </li>
   *             <li>
   *                 <p>Script</p>
   *             </li>
   *             <li>
   *                 <p>Fleet</p>
   *             </li>
   *             <li>
   *                 <p>Alias</p>
   *             </li>
   *             <li>
   *                 <p>GameSessionQueue</p>
   *             </li>
   *             <li>
   *                 <p>MatchmakingConfiguration</p>
   *             </li>
   *             <li>
   *                 <p>MatchmakingRuleSet</p>
   *             </li>
   *          </ul>
   *         <p>To add a tag to a resource, specify the unique ARN value for the resource and provide
   *             a trig list containing one or more tags. The operation succeeds even if the list
   *             includes tags that are already assigned to the specified resource. </p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the
   *             <i>AWS General Reference</i>
   *          </p>
   *         <p>
   *             <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/">
   *             AWS Tagging Strategies</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>TagResource</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UntagResource</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListTagsForResource</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a tag that is assigned to a GameLift resource.
   *             Resource tags are used to organize AWS resources for a range of purposes.
   *             This action handles the permissions necessary to manage tags for the following
   *             GameLift resource types:</p>
   *         <ul>
   *             <li>
   *                 <p>Build</p>
   *             </li>
   *             <li>
   *                 <p>Script</p>
   *             </li>
   *             <li>
   *                 <p>Fleet</p>
   *             </li>
   *             <li>
   *                 <p>Alias</p>
   *             </li>
   *             <li>
   *                 <p>GameSessionQueue</p>
   *             </li>
   *             <li>
   *                 <p>MatchmakingConfiguration</p>
   *             </li>
   *             <li>
   *                 <p>MatchmakingRuleSet</p>
   *             </li>
   *          </ul>
   *         <p>To remove a tag from a resource, specify the unique ARN value for the resource and provide
   *             a string list containing one or more tags to be removed.
   *             This action succeeds even if the list includes tags that are not currently assigned to the
   *             specified resource.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the
   *             <i>AWS General Reference</i>
   *          </p>
   *         <p>
   *             <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/">
   *             AWS Tagging Strategies</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>TagResource</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UntagResource</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListTagsForResource</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates properties for an alias. To update properties, specify the alias ID to be
   *             updated and provide the information to be changed. To reassign an alias to another
   *             fleet, provide an updated routing strategy. If successful, the updated alias record is
   *             returned.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListAliases</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteAlias</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ResolveAlias</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateAlias(args: UpdateAliasCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAliasCommandOutput>;
  public updateAlias(args: UpdateAliasCommandInput, cb: (err: any, data?: UpdateAliasCommandOutput) => void): void;
  public updateAlias(
    args: UpdateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAliasCommandOutput) => void
  ): void;
  public updateAlias(
    args: UpdateAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAliasCommandOutput) => void),
    cb?: (err: any, data?: UpdateAliasCommandOutput) => void
  ): Promise<UpdateAliasCommandOutput> | void {
    const command = new UpdateAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates metadata in a build record, including the build name and version. To update
   *             the metadata, specify the build ID to update and provide the new values. If successful,
   *             a build object containing the updated metadata is returned.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/build-intro.html">
   *                 Working with Builds</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListBuilds</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateBuild</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteBuild</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateBuild(args: UpdateBuildCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBuildCommandOutput>;
  public updateBuild(args: UpdateBuildCommandInput, cb: (err: any, data?: UpdateBuildCommandOutput) => void): void;
  public updateBuild(
    args: UpdateBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBuildCommandOutput) => void
  ): void;
  public updateBuild(
    args: UpdateBuildCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBuildCommandOutput) => void),
    cb?: (err: any, data?: UpdateBuildCommandOutput) => void
  ): Promise<UpdateBuildCommandOutput> | void {
    const command = new UpdateBuildCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates fleet properties, including name and description, for a fleet. To update
   *             metadata, specify the fleet ID and the property values that you want to change. If
   *             successful, the fleet ID for the updated fleet is returned.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Update fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public updateFleetAttributes(
    args: UpdateFleetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetAttributesCommandOutput>;
  public updateFleetAttributes(
    args: UpdateFleetAttributesCommandInput,
    cb: (err: any, data?: UpdateFleetAttributesCommandOutput) => void
  ): void;
  public updateFleetAttributes(
    args: UpdateFleetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetAttributesCommandOutput) => void
  ): void;
  public updateFleetAttributes(
    args: UpdateFleetAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFleetAttributesCommandOutput) => void),
    cb?: (err: any, data?: UpdateFleetAttributesCommandOutput) => void
  ): Promise<UpdateFleetAttributesCommandOutput> | void {
    const command = new UpdateFleetAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates capacity settings for a fleet. Use this action to specify the number of
   *             EC2 instances (hosts) that you want this fleet to contain. Before calling this action,
   *             you may want to call <a>DescribeEC2InstanceLimits</a> to get the maximum
   *             capacity based on the fleet's EC2 instance type.</p>
   *         <p>Specify minimum and maximum number of instances. Amazon GameLift will not change fleet
   *             capacity to values fall outside of this range. This is particularly important when using
   *             auto-scaling (see <a>PutScalingPolicy</a>) to allow capacity to adjust based
   *             on player demand while imposing limits on automatic adjustments.</p>
   *         <p>To update fleet capacity, specify the fleet ID and the number of instances you want
   *             the fleet to host. If successful, Amazon GameLift starts or terminates instances so that the
   *             fleet's active instance count matches the desired instance count. You can view a fleet's
   *             current capacity information by calling <a>DescribeFleetCapacity</a>. If the
   *             desired instance count is higher than the instance type's limit, the "Limit Exceeded"
   *             exception occurs.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Update fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public updateFleetCapacity(
    args: UpdateFleetCapacityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetCapacityCommandOutput>;
  public updateFleetCapacity(
    args: UpdateFleetCapacityCommandInput,
    cb: (err: any, data?: UpdateFleetCapacityCommandOutput) => void
  ): void;
  public updateFleetCapacity(
    args: UpdateFleetCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetCapacityCommandOutput) => void
  ): void;
  public updateFleetCapacity(
    args: UpdateFleetCapacityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFleetCapacityCommandOutput) => void),
    cb?: (err: any, data?: UpdateFleetCapacityCommandOutput) => void
  ): Promise<UpdateFleetCapacityCommandOutput> | void {
    const command = new UpdateFleetCapacityCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates port settings for a fleet. To update settings, specify the fleet ID to be
   *             updated and list the permissions you want to update. List the permissions you want to
   *             add in <code>InboundPermissionAuthorizations</code>, and permissions you want to remove
   *             in <code>InboundPermissionRevocations</code>. Permissions to be removed must match
   *             existing fleet permissions. If successful, the fleet ID for the updated fleet is
   *             returned.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Update fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public updateFleetPortSettings(
    args: UpdateFleetPortSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetPortSettingsCommandOutput>;
  public updateFleetPortSettings(
    args: UpdateFleetPortSettingsCommandInput,
    cb: (err: any, data?: UpdateFleetPortSettingsCommandOutput) => void
  ): void;
  public updateFleetPortSettings(
    args: UpdateFleetPortSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetPortSettingsCommandOutput) => void
  ): void;
  public updateFleetPortSettings(
    args: UpdateFleetPortSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFleetPortSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateFleetPortSettingsCommandOutput) => void
  ): Promise<UpdateFleetPortSettingsCommandOutput> | void {
    const command = new UpdateFleetPortSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates game session properties. This includes the session name, maximum player
   *             count, protection policy, which controls whether or not an active game session can be
   *             terminated during a scale-down event, and the player session creation policy, which
   *             controls whether or not new players can join the session. To update a game session,
   *             specify the game session ID and the values you want to change. If successful, an updated
   *                 <a>GameSession</a> object is returned. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionDetails</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>SearchGameSessions</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSession</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>GetGameSessionLogUrl</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Game session placements</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>DescribeGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopGameSessionPlacement</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public updateGameSession(
    args: UpdateGameSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGameSessionCommandOutput>;
  public updateGameSession(
    args: UpdateGameSessionCommandInput,
    cb: (err: any, data?: UpdateGameSessionCommandOutput) => void
  ): void;
  public updateGameSession(
    args: UpdateGameSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGameSessionCommandOutput) => void
  ): void;
  public updateGameSession(
    args: UpdateGameSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGameSessionCommandOutput) => void),
    cb?: (err: any, data?: UpdateGameSessionCommandOutput) => void
  ): Promise<UpdateGameSessionCommandOutput> | void {
    const command = new UpdateGameSessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates settings for a game session queue, which determines how new game session
   *             requests in the queue are processed. To update settings, specify the queue name to be
   *             updated and provide the new settings. When updating destinations, provide a complete
   *             list of destinations. </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateGameSessionQueue</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeGameSessionQueues</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateGameSessionQueue</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteGameSessionQueue</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateGameSessionQueue(
    args: UpdateGameSessionQueueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGameSessionQueueCommandOutput>;
  public updateGameSessionQueue(
    args: UpdateGameSessionQueueCommandInput,
    cb: (err: any, data?: UpdateGameSessionQueueCommandOutput) => void
  ): void;
  public updateGameSessionQueue(
    args: UpdateGameSessionQueueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGameSessionQueueCommandOutput) => void
  ): void;
  public updateGameSessionQueue(
    args: UpdateGameSessionQueueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGameSessionQueueCommandOutput) => void),
    cb?: (err: any, data?: UpdateGameSessionQueueCommandOutput) => void
  ): Promise<UpdateGameSessionQueueCommandOutput> | void {
    const command = new UpdateGameSessionQueueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions
   *             that are created after the update. To update settings,
   *             specify the configuration name to be updated and provide the new settings. </p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-configuration.html">
   *             Design a FlexMatch Matchmaker</a>
   *          </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingConfigurations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingRuleSets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ValidateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateMatchmakingConfiguration(
    args: UpdateMatchmakingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMatchmakingConfigurationCommandOutput>;
  public updateMatchmakingConfiguration(
    args: UpdateMatchmakingConfigurationCommandInput,
    cb: (err: any, data?: UpdateMatchmakingConfigurationCommandOutput) => void
  ): void;
  public updateMatchmakingConfiguration(
    args: UpdateMatchmakingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMatchmakingConfigurationCommandOutput) => void
  ): void;
  public updateMatchmakingConfiguration(
    args: UpdateMatchmakingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMatchmakingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateMatchmakingConfigurationCommandOutput) => void
  ): Promise<UpdateMatchmakingConfigurationCommandOutput> | void {
    const command = new UpdateMatchmakingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the current runtime configuration for the specified fleet, which tells Amazon GameLift
   *             how to launch server processes on instances in the fleet. You can update a fleet's
   *             runtime configuration at any time after the fleet is created; it does not need to be in
   *             an <code>ACTIVE</code> status.</p>
   *         <p>To update runtime configuration, specify the fleet ID and provide a
   *                 <code>RuntimeConfiguration</code> object with an updated set of server process
   *             configurations.</p>
   *         <p>Each instance in a Amazon GameLift fleet checks regularly for an updated runtime configuration
   *             and changes how it launches server processes to comply with the latest version. Existing
   *             server processes are not affected by the update; runtime configuration changes are
   *             applied gradually as existing processes shut down and new processes are launched during
   *             Amazon GameLift's normal process recycling activity.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">
   *                 Working with Fleets</a>.</p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListFleets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteFleet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeFleetAttributes</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Update fleets:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetAttributes</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetCapacity</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateFleetPortSettings</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>UpdateRuntimeConfiguration</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Manage fleet actions:</p>
   *                         <ul>
   *                   <li>
   *                      <p>
   *                         <a>StartFleetActions</a>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <a>StopFleetActions</a>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  public updateRuntimeConfiguration(
    args: UpdateRuntimeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuntimeConfigurationCommandOutput>;
  public updateRuntimeConfiguration(
    args: UpdateRuntimeConfigurationCommandInput,
    cb: (err: any, data?: UpdateRuntimeConfigurationCommandOutput) => void
  ): void;
  public updateRuntimeConfiguration(
    args: UpdateRuntimeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuntimeConfigurationCommandOutput) => void
  ): void;
  public updateRuntimeConfiguration(
    args: UpdateRuntimeConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRuntimeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateRuntimeConfigurationCommandOutput) => void
  ): Promise<UpdateRuntimeConfigurationCommandOutput> | void {
    const command = new UpdateRuntimeConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates Realtime script metadata and content.</p>
   *         <p>To update script metadata, specify the script ID and provide updated name and/or
   *             version values. </p>
   *         <p>To update script content, provide an updated zip file by pointing to either a local
   *             file or an Amazon S3 bucket location. You can use either method regardless of how the
   *             original script was uploaded. Use the <i>Version</i> parameter to track
   *             updates to the script.</p>
   *         <p>If the call is successful, the updated metadata is stored in the script record and a
   *             revised script is uploaded to the Amazon GameLift service. Once the script is updated and
   *             acquired by a fleet instance, the new version is used for all new game sessions. </p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <p>
   *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
   *         </p>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ListScripts</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateScript</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteScript</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateScript(
    args: UpdateScriptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScriptCommandOutput>;
  public updateScript(args: UpdateScriptCommandInput, cb: (err: any, data?: UpdateScriptCommandOutput) => void): void;
  public updateScript(
    args: UpdateScriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScriptCommandOutput) => void
  ): void;
  public updateScript(
    args: UpdateScriptCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateScriptCommandOutput) => void),
    cb?: (err: any, data?: UpdateScriptCommandOutput) => void
  ): Promise<UpdateScriptCommandOutput> | void {
    const command = new UpdateScriptCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Validates the syntax of a matchmaking rule or rule set. This operation checks that
   *             the rule set is using syntactically correct JSON and that it conforms to allowed
   *             property expressions. To validate syntax, provide a rule set JSON string.</p>
   *         <p>
   *             <b>Learn more</b>
   *          </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/match-rulesets.html">Build a Rule
   *                         Set</a>
   *                </p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>Related operations</b>
   *          </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingConfigurations</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>UpdateMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingConfiguration</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>CreateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DescribeMatchmakingRuleSets</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>ValidateMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a>DeleteMatchmakingRuleSet</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public validateMatchmakingRuleSet(
    args: ValidateMatchmakingRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateMatchmakingRuleSetCommandOutput>;
  public validateMatchmakingRuleSet(
    args: ValidateMatchmakingRuleSetCommandInput,
    cb: (err: any, data?: ValidateMatchmakingRuleSetCommandOutput) => void
  ): void;
  public validateMatchmakingRuleSet(
    args: ValidateMatchmakingRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateMatchmakingRuleSetCommandOutput) => void
  ): void;
  public validateMatchmakingRuleSet(
    args: ValidateMatchmakingRuleSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateMatchmakingRuleSetCommandOutput) => void),
    cb?: (err: any, data?: ValidateMatchmakingRuleSetCommandOutput) => void
  ): Promise<ValidateMatchmakingRuleSetCommandOutput> | void {
    const command = new ValidateMatchmakingRuleSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
