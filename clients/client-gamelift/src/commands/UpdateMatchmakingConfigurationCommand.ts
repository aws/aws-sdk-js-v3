// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateMatchmakingConfigurationInput, UpdateMatchmakingConfigurationOutput } from "../models/models_1";
import {
  de_UpdateMatchmakingConfigurationCommand,
  se_UpdateMatchmakingConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMatchmakingConfigurationCommand}.
 */
export interface UpdateMatchmakingConfigurationCommandInput extends UpdateMatchmakingConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateMatchmakingConfigurationCommand}.
 */
export interface UpdateMatchmakingConfigurationCommandOutput
  extends UpdateMatchmakingConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all
 *             matches and game sessions that are created after the update. To update settings, specify
 *             the configuration name to be updated and provide the new settings. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch
 *                 matchmaker</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateMatchmakingConfigurationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateMatchmakingConfigurationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // UpdateMatchmakingConfigurationInput
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   GameSessionQueueArns: [ // QueueArnsList
 *     "STRING_VALUE",
 *   ],
 *   RequestTimeoutSeconds: Number("int"),
 *   AcceptanceTimeoutSeconds: Number("int"),
 *   AcceptanceRequired: true || false,
 *   RuleSetName: "STRING_VALUE",
 *   NotificationTarget: "STRING_VALUE",
 *   AdditionalPlayerCount: Number("int"),
 *   CustomEventData: "STRING_VALUE",
 *   GameProperties: [ // GamePropertyList
 *     { // GameProperty
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   GameSessionData: "STRING_VALUE",
 *   BackfillMode: "AUTOMATIC" || "MANUAL",
 *   FlexMatchMode: "STANDALONE" || "WITH_QUEUE",
 * };
 * const command = new UpdateMatchmakingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMatchmakingConfigurationOutput
 * //   Configuration: { // MatchmakingConfiguration
 * //     Name: "STRING_VALUE",
 * //     ConfigurationArn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     GameSessionQueueArns: [ // QueueArnsList
 * //       "STRING_VALUE",
 * //     ],
 * //     RequestTimeoutSeconds: Number("int"),
 * //     AcceptanceTimeoutSeconds: Number("int"),
 * //     AcceptanceRequired: true || false,
 * //     RuleSetName: "STRING_VALUE",
 * //     RuleSetArn: "STRING_VALUE",
 * //     NotificationTarget: "STRING_VALUE",
 * //     AdditionalPlayerCount: Number("int"),
 * //     CustomEventData: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     GameProperties: [ // GamePropertyList
 * //       { // GameProperty
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     GameSessionData: "STRING_VALUE",
 * //     BackfillMode: "AUTOMATIC" || "MANUAL",
 * //     FlexMatchMode: "STANDALONE" || "WITH_QUEUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMatchmakingConfigurationCommandInput - {@link UpdateMatchmakingConfigurationCommandInput}
 * @returns {@link UpdateMatchmakingConfigurationCommandOutput}
 * @see {@link UpdateMatchmakingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateMatchmakingConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateMatchmakingConfigurationCommand extends $Command
  .classBuilder<
    UpdateMatchmakingConfigurationCommandInput,
    UpdateMatchmakingConfigurationCommandOutput,
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
  .s("GameLift", "UpdateMatchmakingConfiguration", {})
  .n("GameLiftClient", "UpdateMatchmakingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMatchmakingConfigurationCommand)
  .de(de_UpdateMatchmakingConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMatchmakingConfigurationInput;
      output: UpdateMatchmakingConfigurationOutput;
    };
    sdk: {
      input: UpdateMatchmakingConfigurationCommandInput;
      output: UpdateMatchmakingConfigurationCommandOutput;
    };
  };
}
