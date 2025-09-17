// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateGameSessionQueueInput, UpdateGameSessionQueueOutput } from "../models/models_1";
import { de_UpdateGameSessionQueueCommand, se_UpdateGameSessionQueueCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGameSessionQueueCommand}.
 */
export interface UpdateGameSessionQueueCommandInput extends UpdateGameSessionQueueInput {}
/**
 * @public
 *
 * The output of {@link UpdateGameSessionQueueCommand}.
 */
export interface UpdateGameSessionQueueCommandOutput extends UpdateGameSessionQueueOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration of a game session queue, which determines how the queue
 *             processes new game session requests. To update settings, specify the queue name to be
 *             updated and provide the new settings. When updating destinations, provide a complete
 *             list of destinations. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-intro.html">
 *                 Using Multi-Region Queues</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateGameSessionQueueCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateGameSessionQueueCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateGameSessionQueueInput
 *   Name: "STRING_VALUE", // required
 *   TimeoutInSeconds: Number("int"),
 *   PlayerLatencyPolicies: [ // PlayerLatencyPolicyList
 *     { // PlayerLatencyPolicy
 *       MaximumIndividualPlayerLatencyMilliseconds: Number("int"),
 *       PolicyDurationSeconds: Number("int"),
 *     },
 *   ],
 *   Destinations: [ // GameSessionQueueDestinationList
 *     { // GameSessionQueueDestination
 *       DestinationArn: "STRING_VALUE",
 *     },
 *   ],
 *   FilterConfiguration: { // FilterConfiguration
 *     AllowedLocations: [ // LocationList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   PriorityConfiguration: { // PriorityConfiguration
 *     PriorityOrder: [ // PriorityTypeList
 *       "LATENCY" || "COST" || "DESTINATION" || "LOCATION",
 *     ],
 *     LocationOrder: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CustomEventData: "STRING_VALUE",
 *   NotificationTarget: "STRING_VALUE",
 * };
 * const command = new UpdateGameSessionQueueCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGameSessionQueueOutput
 * //   GameSessionQueue: { // GameSessionQueue
 * //     Name: "STRING_VALUE",
 * //     GameSessionQueueArn: "STRING_VALUE",
 * //     TimeoutInSeconds: Number("int"),
 * //     PlayerLatencyPolicies: [ // PlayerLatencyPolicyList
 * //       { // PlayerLatencyPolicy
 * //         MaximumIndividualPlayerLatencyMilliseconds: Number("int"),
 * //         PolicyDurationSeconds: Number("int"),
 * //       },
 * //     ],
 * //     Destinations: [ // GameSessionQueueDestinationList
 * //       { // GameSessionQueueDestination
 * //         DestinationArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     FilterConfiguration: { // FilterConfiguration
 * //       AllowedLocations: [ // LocationList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     PriorityConfiguration: { // PriorityConfiguration
 * //       PriorityOrder: [ // PriorityTypeList
 * //         "LATENCY" || "COST" || "DESTINATION" || "LOCATION",
 * //       ],
 * //       LocationOrder: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CustomEventData: "STRING_VALUE",
 * //     NotificationTarget: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateGameSessionQueueCommandInput - {@link UpdateGameSessionQueueCommandInput}
 * @returns {@link UpdateGameSessionQueueCommandOutput}
 * @see {@link UpdateGameSessionQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateGameSessionQueueCommandOutput} for command's `response` shape.
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
export class UpdateGameSessionQueueCommand extends $Command
  .classBuilder<
    UpdateGameSessionQueueCommandInput,
    UpdateGameSessionQueueCommandOutput,
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
  .s("GameLift", "UpdateGameSessionQueue", {})
  .n("GameLiftClient", "UpdateGameSessionQueueCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGameSessionQueueCommand)
  .de(de_UpdateGameSessionQueueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGameSessionQueueInput;
      output: UpdateGameSessionQueueOutput;
    };
    sdk: {
      input: UpdateGameSessionQueueCommandInput;
      output: UpdateGameSessionQueueCommandOutput;
    };
  };
}
