// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartGameSessionPlacementInput, StartGameSessionPlacementOutput } from "../models/models_0";
import { StartGameSessionPlacement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartGameSessionPlacementCommand}.
 */
export interface StartGameSessionPlacementCommandInput extends StartGameSessionPlacementInput {}
/**
 * @public
 *
 * The output of {@link StartGameSessionPlacementCommand}.
 */
export interface StartGameSessionPlacementCommandOutput extends StartGameSessionPlacementOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Makes a request to start a new game session using a game session queue. When processing a placement request, Amazon GameLift Servers looks for the best possible available resource to host the game session, based on how the queue is configured to prioritize factors such as resource cost, latency, and location. After selecting an available resource, Amazon GameLift Servers prompts the resource to start a game session. A placement request can include a list of players to create a set of player sessions. The request can also include information to pass to the new game session, such as to specify a game map or other options.
 *
 * **Request options**
 *
 * Use this operation to make the following types of requests.
 *
 * - Request a placement using the queue's default prioritization process (see the default prioritization described in [PriorityConfiguration](https://docs.aws.amazon.com/gamelift/latest/apireference/API_PriorityConfiguration.html)). Include these required parameters:
 *
 *   - `GameSessionQueueName`
 *   - `MaximumPlayerSessionCount`
 *   - `PlacementID`
 * - Request a placement and prioritize based on latency. Include these parameters:
 *
 *   - Required parameters `GameSessionQueueName`, `MaximumPlayerSessionCount`, `PlacementID`.
 *   - `PlayerLatencies`. Include a set of latency values for destinations in the queue. When a request includes latency data, Amazon GameLift Servers automatically reorders the queue's locations priority list based on lowest available latency values. If a request includes latency data for multiple players, Amazon GameLift Servers calculates each location's average latency for all players and reorders to find the lowest latency across all players.
 *   - Don't include `PriorityConfigurationOverride`.
 *
 *   - Prioritize based on a custom list of locations. If you're using a queue that's configured to prioritize location first (see [PriorityConfiguration](https://docs.aws.amazon.com/gamelift/latest/apireference/API_PriorityConfiguration.html) for game session queues), you can optionally use the *PriorityConfigurationOverride* parameter to substitute a different location priority list for this placement request. Amazon GameLift Servers searches each location on the priority override list to find an available hosting resource for the new game session. Specify a fallback strategy to use in the event that Amazon GameLift Servers fails to place the game session in any of the locations on the override list.
 * - Request a placement and prioritize based on a custom list of locations.
 * - You can request new player sessions for a group of players. Include the *DesiredPlayerSessions* parameter and include at minimum a unique player ID for each. You can also include player-specific data to pass to the new game session.
 *
 * **Result**
 *
 * If successful, this operation generates a new game session placement request and adds it to the game session queue for processing. You can track the status of individual placement requests by calling [DescribeGameSessionPlacement](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html) or by monitoring queue notifications. When the request status is `FULFILLED`, a new game session has started and the placement request is updated with connection information for the game session (IP address and port). If the request included player session data, Amazon GameLift Servers creates a player session for each player ID in the request.
 *
 * The request results in a `InvalidRequestException` in the following situations:
 *
 * - If the request includes both *PlayerLatencies* and *PriorityConfigurationOverride* parameters.
 * - If the request includes the *PriorityConfigurationOverride* parameter and specifies a queue that doesn't prioritize locations.
 *
 * Amazon GameLift Servers continues to retry each placement request until it reaches the queue's timeout setting. If a request times out, you can resubmit the request to the same queue or try a different queue.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StartGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // StartGameSessionPlacementInput
 *   PlacementId: "STRING_VALUE", // required
 *   GameSessionQueueName: "STRING_VALUE", // required
 *   GameProperties: [ // GamePropertyList
 *     { // GameProperty
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   MaximumPlayerSessionCount: Number("int"), // required
 *   GameSessionName: "STRING_VALUE",
 *   PlayerLatencies: [ // PlayerLatencyList
 *     { // PlayerLatency
 *       PlayerId: "STRING_VALUE",
 *       RegionIdentifier: "STRING_VALUE",
 *       LatencyInMilliseconds: Number("float"),
 *     },
 *   ],
 *   DesiredPlayerSessions: [ // DesiredPlayerSessionList
 *     { // DesiredPlayerSession
 *       PlayerId: "STRING_VALUE",
 *       PlayerData: "STRING_VALUE",
 *     },
 *   ],
 *   GameSessionData: "STRING_VALUE",
 *   PriorityConfigurationOverride: { // PriorityConfigurationOverride
 *     PlacementFallbackStrategy: "DEFAULT_AFTER_SINGLE_PASS" || "NONE",
 *     LocationOrder: [ // LocationOrderOverrideList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new StartGameSessionPlacementCommand(input);
 * const response = await client.send(command);
 * // { // StartGameSessionPlacementOutput
 * //   GameSessionPlacement: { // GameSessionPlacement
 * //     PlacementId: "STRING_VALUE",
 * //     GameSessionQueueName: "STRING_VALUE",
 * //     Status: "PENDING" || "FULFILLED" || "CANCELLED" || "TIMED_OUT" || "FAILED",
 * //     GameProperties: [ // GamePropertyList
 * //       { // GameProperty
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     MaximumPlayerSessionCount: Number("int"),
 * //     GameSessionName: "STRING_VALUE",
 * //     GameSessionId: "STRING_VALUE",
 * //     GameSessionArn: "STRING_VALUE",
 * //     GameSessionRegion: "STRING_VALUE",
 * //     PlayerLatencies: [ // PlayerLatencyList
 * //       { // PlayerLatency
 * //         PlayerId: "STRING_VALUE",
 * //         RegionIdentifier: "STRING_VALUE",
 * //         LatencyInMilliseconds: Number("float"),
 * //       },
 * //     ],
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     IpAddress: "STRING_VALUE",
 * //     DnsName: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     PlacedPlayerSessions: [ // PlacedPlayerSessionList
 * //       { // PlacedPlayerSession
 * //         PlayerId: "STRING_VALUE",
 * //         PlayerSessionId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     GameSessionData: "STRING_VALUE",
 * //     MatchmakerData: "STRING_VALUE",
 * //     PriorityConfigurationOverride: { // PriorityConfigurationOverride
 * //       PlacementFallbackStrategy: "DEFAULT_AFTER_SINGLE_PASS" || "NONE",
 * //       LocationOrder: [ // LocationOrderOverrideList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     PlayerGatewayStatus: "DISABLED" || "ENABLED",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartGameSessionPlacementCommandInput - {@link StartGameSessionPlacementCommandInput}
 * @returns {@link StartGameSessionPlacementCommandOutput}
 * @see {@link StartGameSessionPlacementCommandInput} for command's `input` shape.
 * @see {@link StartGameSessionPlacementCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
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
export class StartGameSessionPlacementCommand extends command<StartGameSessionPlacementCommandInput, StartGameSessionPlacementCommandOutput>(
  _ep0,
  _mw0,
  "StartGameSessionPlacement",
  StartGameSessionPlacement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartGameSessionPlacementInput;
      output: StartGameSessionPlacementOutput;
    };
    sdk: {
      input: StartGameSessionPlacementCommandInput;
      output: StartGameSessionPlacementCommandOutput;
    };
  };
}
