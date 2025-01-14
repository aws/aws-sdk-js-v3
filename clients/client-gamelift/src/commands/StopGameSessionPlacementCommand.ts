// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  StopGameSessionPlacementInput,
  StopGameSessionPlacementOutput,
  StopGameSessionPlacementOutputFilterSensitiveLog,
} from "../models/models_1";
import { de_StopGameSessionPlacementCommand, se_StopGameSessionPlacementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopGameSessionPlacementCommand}.
 */
export interface StopGameSessionPlacementCommandInput extends StopGameSessionPlacementInput {}
/**
 * @public
 *
 * The output of {@link StopGameSessionPlacementCommand}.
 */
export interface StopGameSessionPlacementCommandOutput extends StopGameSessionPlacementOutput, __MetadataBearer {}

/**
 * <p>Cancels a game session placement that is in <code>PENDING</code> status. To stop a
 *             placement, provide the placement ID values. If successful, the placement is moved to
 *                 <code>CANCELLED</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, StopGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StopGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // StopGameSessionPlacementInput
 *   PlacementId: "STRING_VALUE", // required
 * };
 * const command = new StopGameSessionPlacementCommand(input);
 * const response = await client.send(command);
 * // { // StopGameSessionPlacementOutput
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
 * @param StopGameSessionPlacementCommandInput - {@link StopGameSessionPlacementCommandInput}
 * @returns {@link StopGameSessionPlacementCommandOutput}
 * @see {@link StopGameSessionPlacementCommandInput} for command's `input` shape.
 * @see {@link StopGameSessionPlacementCommandOutput} for command's `response` shape.
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
export class StopGameSessionPlacementCommand extends $Command
  .classBuilder<
    StopGameSessionPlacementCommandInput,
    StopGameSessionPlacementCommandOutput,
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
  .s("GameLift", "StopGameSessionPlacement", {})
  .n("GameLiftClient", "StopGameSessionPlacementCommand")
  .f(void 0, StopGameSessionPlacementOutputFilterSensitiveLog)
  .ser(se_StopGameSessionPlacementCommand)
  .de(de_StopGameSessionPlacementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopGameSessionPlacementInput;
      output: StopGameSessionPlacementOutput;
    };
    sdk: {
      input: StopGameSessionPlacementCommandInput;
      output: StopGameSessionPlacementCommandOutput;
    };
  };
}
