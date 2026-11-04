// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeMatchmakingRuleSetsInput, DescribeMatchmakingRuleSetsOutput } from "../models/models_0";
import { DescribeMatchmakingRuleSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing rule sets for the Region, or provide a list of one or more rule set names. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages. If successful, a rule set is returned for each requested name.
 *
 * **Learn more**
 *
 * - [Build a rule set](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html)
 *
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
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
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
export class DescribeMatchmakingRuleSetsCommand extends command<DescribeMatchmakingRuleSetsCommandInput, DescribeMatchmakingRuleSetsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMatchmakingRuleSets",
  DescribeMatchmakingRuleSets$
) {
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
