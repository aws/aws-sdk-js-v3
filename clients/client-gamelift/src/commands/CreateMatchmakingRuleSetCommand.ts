// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateMatchmakingRuleSetInput, CreateMatchmakingRuleSetOutput } from "../models/models_0";
import { de_CreateMatchmakingRuleSetCommand, se_CreateMatchmakingRuleSetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMatchmakingRuleSetCommand}.
 */
export interface CreateMatchmakingRuleSetCommandInput extends CreateMatchmakingRuleSetInput {}
/**
 * @public
 *
 * The output of {@link CreateMatchmakingRuleSetCommand}.
 */
export interface CreateMatchmakingRuleSetCommandOutput extends CreateMatchmakingRuleSetOutput, __MetadataBearer {}

/**
 * <p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match
 *             to create, such as the number and size of teams. It also sets the parameters for
 *             acceptable player matches, such as minimum skill level or character type.</p>
 *          <p>To create a matchmaking rule set, provide unique rule set name and the rule set body
 *             in JSON format. Rule sets must be defined in the same Region as the matchmaking
 *             configuration they are used with.</p>
 *          <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set
 *             syntax using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html">ValidateMatchmakingRuleSet</a> before creating a new rule set.</p>
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
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a
 *                         matchmaker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with
 *                         FlexMatch</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateMatchmakingRuleSetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateMatchmakingRuleSetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // CreateMatchmakingRuleSetInput
 *   Name: "STRING_VALUE", // required
 *   RuleSetBody: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMatchmakingRuleSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateMatchmakingRuleSetOutput
 * //   RuleSet: { // MatchmakingRuleSet
 * //     RuleSetName: "STRING_VALUE",
 * //     RuleSetArn: "STRING_VALUE",
 * //     RuleSetBody: "STRING_VALUE", // required
 * //     CreationTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMatchmakingRuleSetCommandInput - {@link CreateMatchmakingRuleSetCommandInput}
 * @returns {@link CreateMatchmakingRuleSetCommandOutput}
 * @see {@link CreateMatchmakingRuleSetCommandInput} for command's `input` shape.
 * @see {@link CreateMatchmakingRuleSetCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 * @public
 */
export class CreateMatchmakingRuleSetCommand extends $Command
  .classBuilder<
    CreateMatchmakingRuleSetCommandInput,
    CreateMatchmakingRuleSetCommandOutput,
    GameLiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GameLiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GameLift", "CreateMatchmakingRuleSet", {})
  .n("GameLiftClient", "CreateMatchmakingRuleSetCommand")
  .f(void 0, void 0)
  .ser(se_CreateMatchmakingRuleSetCommand)
  .de(de_CreateMatchmakingRuleSetCommand)
  .build() {}
