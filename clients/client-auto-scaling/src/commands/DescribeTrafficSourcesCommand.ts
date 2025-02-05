// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTrafficSourcesRequest, DescribeTrafficSourcesResponse } from "../models/models_0";
import { de_DescribeTrafficSourcesCommand, se_DescribeTrafficSourcesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrafficSourcesCommand}.
 */
export interface DescribeTrafficSourcesCommandInput extends DescribeTrafficSourcesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrafficSourcesCommand}.
 */
export interface DescribeTrafficSourcesCommandOutput extends DescribeTrafficSourcesResponse, __MetadataBearer {}

/**
 * <p>Gets information about the traffic sources for the specified Auto Scaling group.</p>
 *          <p>You can optionally provide a traffic source type. If you provide a traffic source
 *             type, then the results only include that traffic source type.</p>
 *          <p>If you do not provide a traffic source type, then the results include all the traffic
 *             sources for the specified Auto Scaling group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeTrafficSourcesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeTrafficSourcesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeTrafficSourcesRequest
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   TrafficSourceType: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrafficSourcesResponse
 * //   TrafficSources: [ // TrafficSourceStates
 * //     { // TrafficSourceState
 * //       TrafficSource: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       Identifier: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrafficSourcesCommandInput - {@link DescribeTrafficSourcesCommandInput}
 * @returns {@link DescribeTrafficSourcesCommandOutput}
 * @see {@link DescribeTrafficSourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficSourcesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @public
 * @example To describe the target groups for an Auto Scaling group
 * ```javascript
 * // This example describes the target groups attached to the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new DescribeTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NextToken": "",
 *   "TrafficSources": [
 *     {
 *       "Identifier": "arn:aws:vpc-lattice:us-west-2:123456789012:targetgroup/tg-0e2f2665eEXAMPLE",
 *       "State": "InService",
 *       "Type": "vpc-lattice"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-target-groups-for-an-auto-scaling-group-1680040714521
 * ```
 *
 */
export class DescribeTrafficSourcesCommand extends $Command
  .classBuilder<
    DescribeTrafficSourcesCommandInput,
    DescribeTrafficSourcesCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "DescribeTrafficSources", {})
  .n("AutoScalingClient", "DescribeTrafficSourcesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTrafficSourcesCommand)
  .de(de_DescribeTrafficSourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrafficSourcesRequest;
      output: DescribeTrafficSourcesResponse;
    };
    sdk: {
      input: DescribeTrafficSourcesCommandInput;
      output: DescribeTrafficSourcesCommandOutput;
    };
  };
}
