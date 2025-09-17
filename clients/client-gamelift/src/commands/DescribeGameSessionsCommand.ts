// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DescribeGameSessionsInput,
  DescribeGameSessionsOutput,
  DescribeGameSessionsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeGameSessionsCommand, se_DescribeGameSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGameSessionsCommand}.
 */
export interface DescribeGameSessionsCommandInput extends DescribeGameSessionsInput {}
/**
 * @public
 *
 * The output of {@link DescribeGameSessionsCommand}.
 */
export interface DescribeGameSessionsCommandOutput extends DescribeGameSessionsOutput, __MetadataBearer {}

/**
 * <p>Retrieves a set of one or more game sessions in a specific fleet location. You can
 *             optionally filter the results by current game session status.</p>
 *          <p>This operation can be used in the following ways: </p>
 *          <ul>
 *             <li>
 *                <p>To retrieve all game sessions that are currently running on all locations in a
 *                     fleet, provide a fleet or alias ID, with an optional status filter. This
 *                     approach returns all game sessions in the fleet's home Region and all remote
 *                     locations.</p>
 *             </li>
 *             <li>
 *                <p>To retrieve all game sessions that are currently running on a specific fleet
 *                     location, provide a fleet or alias ID and a location name, with optional status
 *                     filter. The location can be the fleet's home Region or any remote
 *                     location.</p>
 *             </li>
 *             <li>
 *                <p>To retrieve a specific game session, provide the game session ID. This
 *                     approach looks for the game session ID in all fleets that reside in the Amazon Web Services
 *                     Region defined in the request.</p>
 *             </li>
 *          </ul>
 *          <p>Use the pagination parameters to retrieve results as a set of sequential pages. </p>
 *          <p>If successful, a <code>GameSession</code> object is returned for each game session
 *             that matches the request.</p>
 *          <p>This operation is not designed to be continually called to track game session status.
 *             This practice can cause you to exceed your API limit, which results in errors. Instead,
 *             you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or
 *             queues. Continuously polling with <code>DescribeGameSessions</code> should only be used
 *             for games in development with low game session usage. </p>
 *          <p>
 *             <i>Available in Amazon GameLift Servers Local.</i>
 *          </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-sdk-client-api.html#gamelift-sdk-client-api-find">Find a game session</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameSessionsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeGameSessionsInput
 *   FleetId: "STRING_VALUE",
 *   GameSessionId: "STRING_VALUE",
 *   AliasId: "STRING_VALUE",
 *   Location: "STRING_VALUE",
 *   StatusFilter: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeGameSessionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGameSessionsOutput
 * //   GameSessions: [ // GameSessionList
 * //     { // GameSession
 * //       GameSessionId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       FleetId: "STRING_VALUE",
 * //       FleetArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       TerminationTime: new Date("TIMESTAMP"),
 * //       CurrentPlayerSessionCount: Number("int"),
 * //       MaximumPlayerSessionCount: Number("int"),
 * //       Status: "ACTIVE" || "ACTIVATING" || "TERMINATED" || "TERMINATING" || "ERROR",
 * //       StatusReason: "INTERRUPTED" || "TRIGGERED_ON_PROCESS_TERMINATE" || "FORCE_TERMINATED",
 * //       GameProperties: [ // GamePropertyList
 * //         { // GameProperty
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       IpAddress: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       PlayerSessionCreationPolicy: "ACCEPT_ALL" || "DENY_ALL",
 * //       CreatorId: "STRING_VALUE",
 * //       GameSessionData: "STRING_VALUE",
 * //       MatchmakerData: "STRING_VALUE",
 * //       Location: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeGameSessionsCommandInput - {@link DescribeGameSessionsCommandInput}
 * @returns {@link DescribeGameSessionsCommandOutput}
 * @see {@link DescribeGameSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionsCommandOutput} for command's `response` shape.
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
 * @throws {@link TerminalRoutingStrategyException} (client fault)
 *  <p>The service is unable to resolve the routing for a particular alias because it has a
 *             terminal <code>RoutingStrategy</code> associated with it. The message returned in this
 *             exception is the message defined in the routing strategy itself. Such requests should
 *             only be retried if the routing strategy for the specified alias is modified. </p>
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
 *
 * @public
 */
export class DescribeGameSessionsCommand extends $Command
  .classBuilder<
    DescribeGameSessionsCommandInput,
    DescribeGameSessionsCommandOutput,
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
  .s("GameLift", "DescribeGameSessions", {})
  .n("GameLiftClient", "DescribeGameSessionsCommand")
  .f(void 0, DescribeGameSessionsOutputFilterSensitiveLog)
  .ser(se_DescribeGameSessionsCommand)
  .de(de_DescribeGameSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGameSessionsInput;
      output: DescribeGameSessionsOutput;
    };
    sdk: {
      input: DescribeGameSessionsCommandInput;
      output: DescribeGameSessionsCommandOutput;
    };
  };
}
