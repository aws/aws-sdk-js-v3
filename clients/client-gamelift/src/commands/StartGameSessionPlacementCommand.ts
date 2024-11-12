// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  StartGameSessionPlacementInput,
  StartGameSessionPlacementInputFilterSensitiveLog,
  StartGameSessionPlacementOutput,
  StartGameSessionPlacementOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_StartGameSessionPlacementCommand, se_StartGameSessionPlacementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Places a request for a new game session in a queue. When processing a placement
 *             request, Amazon GameLift searches for available resources on the queue's destinations, scanning
 *             each until it finds resources or the placement request times out.</p>
 *          <p>A game session placement request can also request player sessions. When a new game
 *             session is successfully created, Amazon GameLift creates a player session for each player
 *             included in the request.</p>
 *          <p>When placing a game session, by default Amazon GameLift tries each fleet in the order they are
 *             listed in the queue configuration. Ideally, a queue's destinations are listed in
 *             preference order.</p>
 *          <p>Alternatively, when requesting a game session with players, you can also provide
 *             latency data for each player in relevant Regions. Latency data indicates the performance
 *             lag a player experiences when connected to a fleet in the Region. Amazon GameLift uses latency
 *             data to reorder the list of destinations to place the game session in a Region with
 *             minimal lag. If latency data is provided for multiple players, Amazon GameLift calculates each
 *             Region's average lag for all players and reorders to get the best game play across all
 *             players. </p>
 *          <p>To place a new game session request, specify the following:</p>
 *          <ul>
 *             <li>
 *                <p>The queue name and a set of game session properties and settings</p>
 *             </li>
 *             <li>
 *                <p>A unique ID (such as a UUID) for the placement. You use this ID to track the
 *                     status of the placement request</p>
 *             </li>
 *             <li>
 *                <p>(Optional) A set of player data and a unique player ID for each player that
 *                     you are joining to the new game session (player data is optional, but if you
 *                     include it, you must also provide a unique ID for each player)</p>
 *             </li>
 *             <li>
 *                <p>Latency data for all players (if you want to optimize game play for the
 *                     players)</p>
 *             </li>
 *          </ul>
 *          <p>If successful, a new game session placement is created.</p>
 *          <p>To track the status of a placement request, call <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html">DescribeGameSessionPlacement</a> and check the request's status. If the status
 *             is <code>FULFILLED</code>, a new game session has been created and a game session ARN
 *             and Region are referenced. If the placement request times out, submit a new request to the same
 *             queue or a different queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StartGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
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
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class StartGameSessionPlacementCommand extends $Command
  .classBuilder<
    StartGameSessionPlacementCommandInput,
    StartGameSessionPlacementCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "StartGameSessionPlacement", {})
  .n("GameLiftClient", "StartGameSessionPlacementCommand")
  .f(StartGameSessionPlacementInputFilterSensitiveLog, StartGameSessionPlacementOutputFilterSensitiveLog)
  .ser(se_StartGameSessionPlacementCommand)
  .de(de_StartGameSessionPlacementCommand)
  .build() {
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
