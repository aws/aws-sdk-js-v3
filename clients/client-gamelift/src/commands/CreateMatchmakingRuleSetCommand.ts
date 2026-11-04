// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMatchmakingRuleSetInput, CreateMatchmakingRuleSetOutput } from "../models/models_0";
import { CreateMatchmakingRuleSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match to create, such as the number and size of teams. It also sets the parameters for acceptable player matches, such as minimum skill level or character type.
 *
 * To create a matchmaking rule set, provide unique rule set name and the rule set body in JSON format. Rule sets must be defined in the same Region as the matchmaking configuration they are used with.
 *
 * Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set syntax using [ValidateMatchmakingRuleSet](https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html) before creating a new rule set.
 *
 * **Learn more**
 *
 * - [Build a rule set](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html)
 * - [Design a matchmaker](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html)
 * - [Matchmaking with FlexMatch](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateMatchmakingRuleSetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateMatchmakingRuleSetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
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
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested operation would cause the resource to exceed the allowed service limit. Resolve the issue before retrying.
 *
 * @throws {@link TaggingFailedException} (client fault)
 *
 * The requested tagging operation did not succeed. This may be due to invalid tag format or the maximum tag limit may have been exceeded. Resolve the issue before retrying.
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *
 * The requested operation is not supported in the Region specified.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class CreateMatchmakingRuleSetCommand extends command<CreateMatchmakingRuleSetCommandInput, CreateMatchmakingRuleSetCommandOutput>(
  _ep0,
  _mw0,
  "CreateMatchmakingRuleSet",
  CreateMatchmakingRuleSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMatchmakingRuleSetInput;
      output: CreateMatchmakingRuleSetOutput;
    };
    sdk: {
      input: CreateMatchmakingRuleSetCommandInput;
      output: CreateMatchmakingRuleSetCommandOutput;
    };
  };
}
