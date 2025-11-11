// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTrafficSourcesRequest, DescribeTrafficSourcesResponse } from "../models/models_0";
import { DescribeTrafficSources } from "../schemas/schemas_0";

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
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
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
 *
 * @example To describe the target groups for an Auto Scaling group
 * ```javascript
 * // This example describes the target groups attached to the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group"
 * };
 * const command = new DescribeTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NextToken: "",
 *   TrafficSources: [
 *     {
 *       Identifier: "arn:aws:vpc-lattice:us-west-2:123456789012:targetgroup/tg-0e2f2665eEXAMPLE",
 *       State: "InService",
 *       Type: "vpc-lattice"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "DescribeTrafficSources", {})
  .n("AutoScalingClient", "DescribeTrafficSourcesCommand")
  .sc(DescribeTrafficSources)
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
