// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeAwsNetworkPerformanceMetricSubscriptionsRequest,
  DescribeAwsNetworkPerformanceMetricSubscriptionsResult,
} from "../models/models_3";
import {
  de_DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
  se_DescribeAwsNetworkPerformanceMetricSubscriptionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommand}.
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput
  extends DescribeAwsNetworkPerformanceMetricSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommand}.
 */
export interface DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput
  extends DescribeAwsNetworkPerformanceMetricSubscriptionsResult,
    __MetadataBearer {}

/**
 * <p>Describes the current Infrastructure Performance metric subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAwsNetworkPerformanceMetricSubscriptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAwsNetworkPerformanceMetricSubscriptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeAwsNetworkPerformanceMetricSubscriptionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeAwsNetworkPerformanceMetricSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAwsNetworkPerformanceMetricSubscriptionsResult
 * //   NextToken: "STRING_VALUE",
 * //   Subscriptions: [ // SubscriptionList
 * //     { // Subscription
 * //       Source: "STRING_VALUE",
 * //       Destination: "STRING_VALUE",
 * //       Metric: "aggregate-latency",
 * //       Statistic: "p50",
 * //       Period: "five-minutes" || "fifteen-minutes" || "one-hour" || "three-hours" || "one-day" || "one-week",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput - {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput}
 * @returns {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput}
 * @see {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeAwsNetworkPerformanceMetricSubscriptionsCommand extends $Command
  .classBuilder<
    DescribeAwsNetworkPerformanceMetricSubscriptionsCommandInput,
    DescribeAwsNetworkPerformanceMetricSubscriptionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeAwsNetworkPerformanceMetricSubscriptions", {})
  .n("EC2Client", "DescribeAwsNetworkPerformanceMetricSubscriptionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAwsNetworkPerformanceMetricSubscriptionsCommand)
  .de(de_DescribeAwsNetworkPerformanceMetricSubscriptionsCommand)
  .build() {}
