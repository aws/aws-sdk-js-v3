// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeMatchmakingConfigurationsInput, DescribeMatchmakingConfigurationsOutput } from "../models/models_0";
import {
  de_DescribeMatchmakingConfigurationsCommand,
  se_DescribeMatchmakingConfigurationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMatchmakingConfigurationsCommand}.
 */
export interface DescribeMatchmakingConfigurationsCommandInput extends DescribeMatchmakingConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link DescribeMatchmakingConfigurationsCommand}.
 */
export interface DescribeMatchmakingConfigurationsCommandOutput
  extends DescribeMatchmakingConfigurationsOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves the details of FlexMatch matchmaking configurations. </p>
 *          <p>This operation offers the following options: (1) retrieve all matchmaking
 *             configurations, (2) retrieve configurations for a specified list, or (3) retrieve all
 *             configurations that use a specified rule set name. When requesting multiple items, use
 *             the pagination parameters to retrieve results as a set of sequential pages. </p>
 *          <p>If successful, a configuration is returned for each requested name. When specifying a
 *             list of names, only configurations that currently exist are returned. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html"> Setting up FlexMatch matchmakers</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeMatchmakingConfigurationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeMatchmakingConfigurationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GameLiftClient(config);
 * const input = { // DescribeMatchmakingConfigurationsInput
 *   Names: [ // MatchmakingConfigurationNameList
 *     "STRING_VALUE",
 *   ],
 *   RuleSetName: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMatchmakingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMatchmakingConfigurationsOutput
 * //   Configurations: [ // MatchmakingConfigurationList
 * //     { // MatchmakingConfiguration
 * //       Name: "STRING_VALUE",
 * //       ConfigurationArn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       GameSessionQueueArns: [ // QueueArnsList
 * //         "STRING_VALUE",
 * //       ],
 * //       RequestTimeoutSeconds: Number("int"),
 * //       AcceptanceTimeoutSeconds: Number("int"),
 * //       AcceptanceRequired: true || false,
 * //       RuleSetName: "STRING_VALUE",
 * //       RuleSetArn: "STRING_VALUE",
 * //       NotificationTarget: "STRING_VALUE",
 * //       AdditionalPlayerCount: Number("int"),
 * //       CustomEventData: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       GameProperties: [ // GamePropertyList
 * //         { // GameProperty
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       GameSessionData: "STRING_VALUE",
 * //       BackfillMode: "AUTOMATIC" || "MANUAL",
 * //       FlexMatchMode: "STANDALONE" || "WITH_QUEUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMatchmakingConfigurationsCommandInput - {@link DescribeMatchmakingConfigurationsCommandInput}
 * @returns {@link DescribeMatchmakingConfigurationsCommandOutput}
 * @see {@link DescribeMatchmakingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeMatchmakingConfigurationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeMatchmakingConfigurationsCommand extends $Command
  .classBuilder<
    DescribeMatchmakingConfigurationsCommandInput,
    DescribeMatchmakingConfigurationsCommandOutput,
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
  .s("GameLift", "DescribeMatchmakingConfigurations", {})
  .n("GameLiftClient", "DescribeMatchmakingConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMatchmakingConfigurationsCommand)
  .de(de_DescribeMatchmakingConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMatchmakingConfigurationsInput;
      output: DescribeMatchmakingConfigurationsOutput;
    };
    sdk: {
      input: DescribeMatchmakingConfigurationsCommandInput;
      output: DescribeMatchmakingConfigurationsCommandOutput;
    };
  };
}
