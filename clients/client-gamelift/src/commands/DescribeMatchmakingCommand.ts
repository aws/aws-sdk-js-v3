// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeMatchmakingInput, DescribeMatchmakingOutput } from "../models/models_0";
import { DescribeMatchmaking } from "../schemas/schemas_6_Matchmaking";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMatchmakingCommand}.
 */
export interface DescribeMatchmakingCommandInput extends DescribeMatchmakingInput {}
/**
 * @public
 *
 * The output of {@link DescribeMatchmakingCommand}.
 */
export interface DescribeMatchmakingCommandOutput extends DescribeMatchmakingOutput, __MetadataBearer {}

/**
 * <p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket
 *             information, including--after a successful match is made--connection information for the
 *             resulting new game session. </p>
 *          <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the request
 *             is successful, a ticket object is returned for each requested ID that currently
 *             exists.</p>
 *          <p>This operation is not designed to be continually called to track matchmaking ticket
 *             status. This practice can cause you to exceed your API limit, which results in errors.
 *             Instead, as a best practice, set up an Amazon Simple Notification Service to receive notifications, and provide
 *             the topic ARN in the matchmaking configuration.</p>
 *          <p></p>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeMatchmakingCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeMatchmakingCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeMatchmakingInput
 *   TicketIds: [ // MatchmakingIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeMatchmakingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMatchmakingOutput
 * //   TicketList: [ // MatchmakingTicketList
 * //     { // MatchmakingTicket
 * //       TicketId: "STRING_VALUE",
 * //       ConfigurationName: "STRING_VALUE",
 * //       ConfigurationArn: "STRING_VALUE",
 * //       Status: "CANCELLED" || "COMPLETED" || "FAILED" || "PLACING" || "QUEUED" || "REQUIRES_ACCEPTANCE" || "SEARCHING" || "TIMED_OUT",
 * //       StatusReason: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       Players: [ // PlayerList
 * //         { // Player
 * //           PlayerId: "STRING_VALUE",
 * //           PlayerAttributes: { // PlayerAttributeMap
 * //             "<keys>": { // AttributeValue
 * //               S: "STRING_VALUE",
 * //               N: Number("double"),
 * //               SL: [ // PlayerAttributeStringList
 * //                 "STRING_VALUE",
 * //               ],
 * //               SDM: { // PlayerAttributeStringDoubleMap
 * //                 "<keys>": Number("double"),
 * //               },
 * //             },
 * //           },
 * //           Team: "STRING_VALUE",
 * //           LatencyInMs: { // LatencyMap
 * //             "<keys>": Number("int"),
 * //           },
 * //         },
 * //       ],
 * //       GameSessionConnectionInfo: { // GameSessionConnectionInfo
 * //         GameSessionArn: "STRING_VALUE",
 * //         IpAddress: "STRING_VALUE",
 * //         DnsName: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         MatchedPlayerSessions: [ // MatchedPlayerSessionList
 * //           { // MatchedPlayerSession
 * //             PlayerId: "STRING_VALUE",
 * //             PlayerSessionId: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       EstimatedWaitTime: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMatchmakingCommandInput - {@link DescribeMatchmakingCommandInput}
 * @returns {@link DescribeMatchmakingCommandOutput}
 * @see {@link DescribeMatchmakingCommandInput} for command's `input` shape.
 * @see {@link DescribeMatchmakingCommandOutput} for command's `response` shape.
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
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class DescribeMatchmakingCommand extends $Command
  .classBuilder<
    DescribeMatchmakingCommandInput,
    DescribeMatchmakingCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GameLift", "DescribeMatchmaking", {})
  .n("GameLiftClient", "DescribeMatchmakingCommand")
  .sc(DescribeMatchmaking)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMatchmakingInput;
      output: DescribeMatchmakingOutput;
    };
    sdk: {
      input: DescribeMatchmakingCommandInput;
      output: DescribeMatchmakingCommandOutput;
    };
  };
}
