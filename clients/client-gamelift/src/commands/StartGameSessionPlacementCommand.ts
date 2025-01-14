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
 * <p>Makes a request to start a new game session using a game session queue. When
 *             processing a placement request in a queue, Amazon GameLift finds the best possible available
 *             resource to host the game session and prompts the resource to start the game session.  </p>
 *          <p>
 *             <b>Request options</b>
 *          </p>
 *          <p>Call this API with the following minimum parameters:
 *                 <i>GameSessionQueueName</i>,
 *                 <i>MaximumPlayerSessionCount</i>, and
 *             <i>PlacementID</i>. You can also include game session data (data formatted
 *             as strings) or game properties (data formatted as key-value pairs) to pass to the new
 *             game session.</p>
 *          <ul>
 *             <li>
 *                <p>You can change how Amazon GameLift chooses a hosting resource for the new game session.
 *                     Prioritizing resources for game session placements is defined when you configure
 *                     a game session queue. You can use the default prioritization process or specify
 *                     a custom process by providing a <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_PriorityConfiguration.html">
 *                         PriorityConfiguration</a> when you create or update a queue.</p>
 *                <ul>
 *                   <li>
 *                      <p>Prioritize based on resource cost and location, using the queue's
 *                             configured priority settings. Call this API with the minimum
 *                             parameters.</p>
 *                   </li>
 *                   <li>
 *                      <p>Prioritize based on latency. Include a set of values for
 *                                 <i>PlayerLatencies</i>. You can provide latency data
 *                             with or without player session data. This option instructs Amazon GameLift to
 *                             reorder the queue's prioritized locations list based on the latency
 *                             data. If latency data is provided for multiple players, Amazon GameLift
 *                             calculates each location's average latency for all players and reorders
 *                             to find the lowest latency across all players. Don't include latency
 *                             data if you're providing a custom list of locations.</p>
 *                   </li>
 *                   <li>
 *                      <p>Prioritize based on a custom list of locations. If you're using a
 *                             queue that's configured to prioritize location first (see <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_PriorityConfiguration.html">PriorityConfiguration</a> for game session queues), use the
 *                                 <i>PriorityConfigurationOverride</i> parameter to
 *                             substitute a different location list for this placement request. When
 *                             prioritizing placements by location, Amazon GameLift searches each location in
 *                             prioritized order to find an available hosting resource for the new game
 *                             session. You can choose whether to use the override list for the first
 *                             placement attempt only or for all attempts.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>You can request new player sessions for a group of players. Include the
 *                         <i>DesiredPlayerSessions</i> parameter and include at minimum
 *                     a unique player ID for each. You can also include player-specific data to pass
 *                     to the new game session. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Result</b>
 *          </p>
 *          <p>If successful, this request generates a new game session placement request and adds it
 *             to the game session queue for Amazon GameLift to process in turn. You can track the status of
 *             individual placement requests by calling <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeGameSessionPlacement.html">DescribeGameSessionPlacement</a>. A new game session is running if the status
 *             is <code>FULFILLED</code> and the request returns the game session connection
 *             information (IP address and port). If you include player session data, Amazon GameLift creates a
 *             player session for each player ID in the request.</p>
 *          <p>The request results in a <code>BadRequestException</code> in the following
 *             situations:</p>
 *          <ul>
 *             <li>
 *                <p>If the request includes both <i>PlayerLatencies</i> and
 *                         <i>PriorityConfigurationOverride</i> parameters.</p>
 *             </li>
 *             <li>
 *                <p>If the request includes the <i>PriorityConfigurationOverride</i>
 *                     parameter and designates a queue doesn't prioritize locations.</p>
 *             </li>
 *          </ul>
 *          <p>Amazon GameLift continues to retry each placement request until it reaches the queue's timeout
 *             setting. If a request times out, you can resubmit the request to the same queue or try a
 *             different queue. </p>
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
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
