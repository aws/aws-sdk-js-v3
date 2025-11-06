// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  DescribeGameSessionPlacementInput,
  DescribeGameSessionPlacementOutput,
  DescribeGameSessionPlacementOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeGameSessionPlacementCommand,
  se_DescribeGameSessionPlacementCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGameSessionPlacementCommand}.
 */
export interface DescribeGameSessionPlacementCommandInput extends DescribeGameSessionPlacementInput {}
/**
 * @public
 *
 * The output of {@link DescribeGameSessionPlacementCommand}.
 */
export interface DescribeGameSessionPlacementCommandOutput
  extends DescribeGameSessionPlacementOutput,
    __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Retrieves information, including current status, about a game session placement
 *             request. </p>
 *          <p>To get game session placement details, specify the placement ID.</p>
 *          <p>This operation is not designed to be continually called to track game session status.
 *             This practice can cause you to exceed your API limit, which results in errors. Instead,
 *             you must configure an Amazon Simple Notification Service (SNS) topic to receive notifications from FlexMatch or
 *             queues. Continuously polling with <code>DescribeGameSessionPlacement</code> should only
 *             be used for games in development with low game session usage. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeGameSessionPlacementInput
 *   PlacementId: "STRING_VALUE", // required
 * };
 * const command = new DescribeGameSessionPlacementCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGameSessionPlacementOutput
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
 * @param DescribeGameSessionPlacementCommandInput - {@link DescribeGameSessionPlacementCommandInput}
 * @returns {@link DescribeGameSessionPlacementCommandOutput}
 * @see {@link DescribeGameSessionPlacementCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionPlacementCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeGameSessionPlacementCommand extends $Command
  .classBuilder<
    DescribeGameSessionPlacementCommandInput,
    DescribeGameSessionPlacementCommandOutput,
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
  .s("GameLift", "DescribeGameSessionPlacement", {})
  .n("GameLiftClient", "DescribeGameSessionPlacementCommand")
  .f(void 0, DescribeGameSessionPlacementOutputFilterSensitiveLog)
  .ser(se_DescribeGameSessionPlacementCommand)
  .de(de_DescribeGameSessionPlacementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGameSessionPlacementInput;
      output: DescribeGameSessionPlacementOutput;
    };
    sdk: {
      input: DescribeGameSessionPlacementCommandInput;
      output: DescribeGameSessionPlacementCommandOutput;
    };
  };
}
