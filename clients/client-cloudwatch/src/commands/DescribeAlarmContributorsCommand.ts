// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAlarmContributorsInput, DescribeAlarmContributorsOutput } from "../models/models_0";
import { DescribeAlarmContributors$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAlarmContributorsCommand}.
 */
export interface DescribeAlarmContributorsCommandInput extends DescribeAlarmContributorsInput {}
/**
 * @public
 *
 * The output of {@link DescribeAlarmContributorsCommand}.
 */
export interface DescribeAlarmContributorsCommandOutput extends DescribeAlarmContributorsOutput, __MetadataBearer {}

/**
 * <p>Returns the information of the current alarm contributors that are in <code>ALARM</code> state. This operation returns details about the individual time series that contribute to the alarm's state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmContributorsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmContributorsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // DescribeAlarmContributorsInput
 *   AlarmName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAlarmContributorsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAlarmContributorsOutput
 * //   AlarmContributors: [ // AlarmContributors // required
 * //     { // AlarmContributor
 * //       ContributorId: "STRING_VALUE", // required
 * //       ContributorAttributes: { // ContributorAttributes // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       StateReason: "STRING_VALUE", // required
 * //       StateTransitionedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAlarmContributorsCommandInput - {@link DescribeAlarmContributorsCommandInput}
 * @returns {@link DescribeAlarmContributorsCommandOutput}
 * @see {@link DescribeAlarmContributorsCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmContributorsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The next token specified is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class DescribeAlarmContributorsCommand extends $Command
  .classBuilder<
    DescribeAlarmContributorsCommandInput,
    DescribeAlarmContributorsCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "DescribeAlarmContributors", {})
  .n("CloudWatchClient", "DescribeAlarmContributorsCommand")
  .sc(DescribeAlarmContributors$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAlarmContributorsInput;
      output: DescribeAlarmContributorsOutput;
    };
    sdk: {
      input: DescribeAlarmContributorsCommandInput;
      output: DescribeAlarmContributorsCommandOutput;
    };
  };
}
