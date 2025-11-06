// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeMatchmakingRuleSetsInput, DescribeMatchmakingRuleSetsOutput } from "../models/models_0";
import { de_DescribeMatchmakingRuleSetsCommand, se_DescribeMatchmakingRuleSetsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMatchmakingRuleSetsCommand}.
 */
export interface DescribeMatchmakingRuleSetsCommandInput extends DescribeMatchmakingRuleSetsInput {}
/**
 * @public
 *
 * The output of {@link DescribeMatchmakingRuleSetsCommand}.
 */
export interface DescribeMatchmakingRuleSetsCommandOutput extends DescribeMatchmakingRuleSetsOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing
 *             rule sets for the Region, or provide a list of one or more rule set names. When
 *             requesting multiple items, use the pagination parameters to retrieve results as a set of
 *             sequential pages. If successful, a rule set is returned for each requested name. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule
 *                         set</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeMatchmakingRuleSetsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeMatchmakingRuleSetsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DescribeMatchmakingRuleSetsInput
 *   Names: [ // MatchmakingRuleSetNameList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMatchmakingRuleSetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMatchmakingRuleSetsOutput
 * //   RuleSets: [ // MatchmakingRuleSetList // required
 * //     { // MatchmakingRuleSet
 * //       RuleSetName: "STRING_VALUE",
 * //       RuleSetArn: "STRING_VALUE",
 * //       RuleSetBody: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMatchmakingRuleSetsCommandInput - {@link DescribeMatchmakingRuleSetsCommandInput}
 * @returns {@link DescribeMatchmakingRuleSetsCommandOutput}
 * @see {@link DescribeMatchmakingRuleSetsCommandInput} for command's `input` shape.
 * @see {@link DescribeMatchmakingRuleSetsCommandOutput} for command's `response` shape.
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
export class DescribeMatchmakingRuleSetsCommand extends $Command
  .classBuilder<
    DescribeMatchmakingRuleSetsCommandInput,
    DescribeMatchmakingRuleSetsCommandOutput,
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
  .s("GameLift", "DescribeMatchmakingRuleSets", {})
  .n("GameLiftClient", "DescribeMatchmakingRuleSetsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMatchmakingRuleSetsCommand)
  .de(de_DescribeMatchmakingRuleSetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMatchmakingRuleSetsInput;
      output: DescribeMatchmakingRuleSetsOutput;
    };
    sdk: {
      input: DescribeMatchmakingRuleSetsCommandInput;
      output: DescribeMatchmakingRuleSetsCommandOutput;
    };
  };
}
