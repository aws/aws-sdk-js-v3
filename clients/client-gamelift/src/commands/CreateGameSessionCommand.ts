// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGameSessionInput, CreateGameSessionOutput } from "../models/models_0";
import { CreateGameSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGameSessionCommand}.
 */
export interface CreateGameSessionCommandInput extends CreateGameSessionInput {}
/**
 * @public
 *
 * The output of {@link CreateGameSessionCommand}.
 */
export interface CreateGameSessionCommandOutput extends CreateGameSessionOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Creates a multiplayer game session for players in a specific fleet location. This operation prompts an available server process to start a game session and retrieves connection information for the new game session. As an alternative, consider using the Amazon GameLift Servers game session placement feature with [StartGameSessionPlacement](https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html), which uses the FleetIQ algorithm and queues to optimize the placement process.
 *
 * When creating a game session, you specify exactly where you want to place it and provide a set of game session configuration settings. The target fleet must be in `ACTIVE` status.
 *
 * You can use this operation in the following ways:
 *
 * - To create a game session on an instance in a fleet's home Region, provide a fleet or alias ID along with your game session configuration.
 * - To create a game session on an instance in a fleet's remote location, provide a fleet or alias ID and a location name, along with your game session configuration.
 * - To create a game session on an instance in an Anywhere fleet, specify the fleet's custom location.
 *
 * If successful, Amazon GameLift Servers initiates a workflow to start a new game session and returns a `GameSession` object containing the game session configuration and status. When the game session status is `ACTIVE`, it is updated with connection information and you can create player sessions for the game session. By default, newly created game sessions are open to new players. You can restrict new player access by using [UpdateGameSession](https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateGameSession.html) to change the game session's player session creation policy.
 *
 * Amazon GameLift Servers retains logs for active game sessions for 14 days. To access the logs, call [GetGameSessionLogUrl](https://docs.aws.amazon.com/gamelift/latest/apireference/API_GetGameSessionLogUrl.html) to download the log files.
 *
 * *Available in Amazon GameLift Servers Local.*
 *
 * **Learn more**
 *
 * [Start a game session](https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-server-api.html#gamelift-sdk-server-startsession)
 *
 * [All APIs by task](https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateGameSessionCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateGameSessionCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // CreateGameSessionInput
 *   FleetId: "STRING_VALUE",
 *   AliasId: "STRING_VALUE",
 *   MaximumPlayerSessionCount: Number("int"), // required
 *   Name: "STRING_VALUE",
 *   GameProperties: [ // GamePropertyList
 *     { // GameProperty
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   CreatorId: "STRING_VALUE",
 *   GameSessionId: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE",
 *   GameSessionData: "STRING_VALUE",
 *   Location: "STRING_VALUE",
 * };
 * const command = new CreateGameSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateGameSessionOutput
 * //   GameSession: { // GameSession
 * //     GameSessionId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     FleetId: "STRING_VALUE",
 * //     FleetArn: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     TerminationTime: new Date("TIMESTAMP"),
 * //     CurrentPlayerSessionCount: Number("int"),
 * //     MaximumPlayerSessionCount: Number("int"),
 * //     Status: "ACTIVE" || "ACTIVATING" || "TERMINATED" || "TERMINATING" || "ERROR",
 * //     StatusReason: "INTERRUPTED" || "TRIGGERED_ON_PROCESS_TERMINATE" || "FORCE_TERMINATED",
 * //     GameProperties: [ // GamePropertyList
 * //       { // GameProperty
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     IpAddress: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     PlayerSessionCreationPolicy: "ACCEPT_ALL" || "DENY_ALL",
 * //     CreatorId: "STRING_VALUE",
 * //     GameSessionData: "STRING_VALUE",
 * //     MatchmakerData: "STRING_VALUE",
 * //     Location: "STRING_VALUE",
 * //     ComputeName: "STRING_VALUE",
 * //     PlayerGatewayStatus: "DISABLED" || "ENABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateGameSessionCommandInput - {@link CreateGameSessionCommandInput}
 * @returns {@link CreateGameSessionCommandOutput}
 * @see {@link CreateGameSessionCommandInput} for command's `input` shape.
 * @see {@link CreateGameSessionCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link FleetCapacityExceededException} (client fault)
 *
 * The specified fleet has no available instances to fulfill a `CreateGameSession` request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * A game session with this custom ID string already exists in this fleet. Resolve this conflict before retrying this request.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidFleetStatusException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a resource associated with the request and/or the fleet. Resolve the conflict before retrying.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested operation would cause the resource to exceed the allowed service limit. Resolve the issue before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link TerminalRoutingStrategyException} (client fault)
 *
 * The service is unable to resolve the routing for a particular alias because it has a terminal `RoutingStrategy` associated with it. The message returned in this exception is the message defined in the routing strategy itself. Such requests should only be retried if the routing strategy for the specified alias is modified.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *
 * The requested operation is not supported in the Region specified.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class CreateGameSessionCommand extends command<CreateGameSessionCommandInput, CreateGameSessionCommandOutput>(
  _ep0,
  _mw0,
  "CreateGameSession",
  CreateGameSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGameSessionInput;
      output: CreateGameSessionOutput;
    };
    sdk: {
      input: CreateGameSessionCommandInput;
      output: CreateGameSessionCommandOutput;
    };
  };
}
