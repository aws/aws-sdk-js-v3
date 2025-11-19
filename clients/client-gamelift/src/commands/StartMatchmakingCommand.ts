// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { StartMatchmakingInput, StartMatchmakingOutput } from "../models/models_0";
import { StartMatchmaking } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMatchmakingCommand}.
 */
export interface StartMatchmakingCommandInput extends StartMatchmakingInput {}
/**
 * @public
 *
 * The output of {@link StartMatchmakingCommand}.
 */
export interface StartMatchmakingCommandOutput extends StartMatchmakingOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking
 *             rules. With games that use Amazon GameLift Servers managed hosting, this operation also triggers Amazon GameLift Servers
 *             to find hosting resources and start a new game session for the new match. Each
 *             matchmaking request includes information on one or more players and specifies the
 *             FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to
 *             build a match that includes all players in the request, placing them in the same team
 *             and finding additional players as needed to fill the match. </p>
 *          <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration,
 *             and include the players to be matched. You must also include any player attributes that
 *             are required by the matchmaking configuration's rule set. If successful, a matchmaking
 *             ticket is returned with status set to <code>QUEUED</code>. </p>
 *          <p>Track matchmaking events to respond as needed and acquire game session connection
 *             information for successfully completed matches. Ticket status updates are tracked using
 *             event notification through Amazon Simple Notification Service, which is defined in the matchmaking
 *             configuration.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *                 Add FlexMatch to a game client</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set Up FlexMatch event
 *                 notification</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html">
 *                 How Amazon GameLift Servers FlexMatch works</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StartMatchmakingCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartMatchmakingCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // StartMatchmakingInput
 *   TicketId: "STRING_VALUE",
 *   ConfigurationName: "STRING_VALUE", // required
 *   Players: [ // PlayerList // required
 *     { // Player
 *       PlayerId: "STRING_VALUE",
 *       PlayerAttributes: { // PlayerAttributeMap
 *         "<keys>": { // AttributeValue
 *           S: "STRING_VALUE",
 *           N: Number("double"),
 *           SL: [ // PlayerAttributeStringList
 *             "STRING_VALUE",
 *           ],
 *           SDM: { // PlayerAttributeStringDoubleMap
 *             "<keys>": Number("double"),
 *           },
 *         },
 *       },
 *       Team: "STRING_VALUE",
 *       LatencyInMs: { // LatencyMap
 *         "<keys>": Number("int"),
 *       },
 *     },
 *   ],
 * };
 * const command = new StartMatchmakingCommand(input);
 * const response = await client.send(command);
 * // { // StartMatchmakingOutput
 * //   MatchmakingTicket: { // MatchmakingTicket
 * //     TicketId: "STRING_VALUE",
 * //     ConfigurationName: "STRING_VALUE",
 * //     ConfigurationArn: "STRING_VALUE",
 * //     Status: "CANCELLED" || "COMPLETED" || "FAILED" || "PLACING" || "QUEUED" || "REQUIRES_ACCEPTANCE" || "SEARCHING" || "TIMED_OUT",
 * //     StatusReason: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     Players: [ // PlayerList
 * //       { // Player
 * //         PlayerId: "STRING_VALUE",
 * //         PlayerAttributes: { // PlayerAttributeMap
 * //           "<keys>": { // AttributeValue
 * //             S: "STRING_VALUE",
 * //             N: Number("double"),
 * //             SL: [ // PlayerAttributeStringList
 * //               "STRING_VALUE",
 * //             ],
 * //             SDM: { // PlayerAttributeStringDoubleMap
 * //               "<keys>": Number("double"),
 * //             },
 * //           },
 * //         },
 * //         Team: "STRING_VALUE",
 * //         LatencyInMs: { // LatencyMap
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //     ],
 * //     GameSessionConnectionInfo: { // GameSessionConnectionInfo
 * //       GameSessionArn: "STRING_VALUE",
 * //       IpAddress: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       MatchedPlayerSessions: [ // MatchedPlayerSessionList
 * //         { // MatchedPlayerSession
 * //           PlayerId: "STRING_VALUE",
 * //           PlayerSessionId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     EstimatedWaitTime: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StartMatchmakingCommandInput - {@link StartMatchmakingCommandInput}
 * @returns {@link StartMatchmakingCommandOutput}
 * @see {@link StartMatchmakingCommandInput} for command's `input` shape.
 * @see {@link StartMatchmakingCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class StartMatchmakingCommand extends $Command
  .classBuilder<
    StartMatchmakingCommandInput,
    StartMatchmakingCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "StartMatchmaking", {})
  .n("GameLiftClient", "StartMatchmakingCommand")
  .sc(StartMatchmaking)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMatchmakingInput;
      output: StartMatchmakingOutput;
    };
    sdk: {
      input: StartMatchmakingCommandInput;
      output: StartMatchmakingCommandOutput;
    };
  };
}
