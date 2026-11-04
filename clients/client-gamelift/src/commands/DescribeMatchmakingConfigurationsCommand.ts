// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeMatchmakingConfigurationsInput,
  DescribeMatchmakingConfigurationsOutput,
} from "../models/models_0";
import { DescribeMatchmakingConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeMatchmakingConfigurationsCommandOutput extends DescribeMatchmakingConfigurationsOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** EC2, Anywhere, Container
 *
 * Retrieves the details of FlexMatch matchmaking configurations.
 *
 * This operation offers the following options: (1) retrieve all matchmaking configurations, (2) retrieve configurations for a specified list, or (3) retrieve all configurations that use a specified rule set name. When requesting multiple items, use the pagination parameters to retrieve results as a set of sequential pages.
 *
 * If successful, a configuration is returned for each requested name. When specifying a list of names, only configurations that currently exist are returned.
 *
 * **Learn more**
 *
 * [Setting up FlexMatch matchmakers](https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeMatchmakingConfigurationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeMatchmakingConfigurationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
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
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
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
export class DescribeMatchmakingConfigurationsCommand extends command<DescribeMatchmakingConfigurationsCommandInput, DescribeMatchmakingConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMatchmakingConfigurations",
  DescribeMatchmakingConfigurations$
) {
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
