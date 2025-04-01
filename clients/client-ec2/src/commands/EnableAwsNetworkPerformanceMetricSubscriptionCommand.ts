// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  EnableAwsNetworkPerformanceMetricSubscriptionRequest,
  EnableAwsNetworkPerformanceMetricSubscriptionResult,
} from "../models/models_6";
import {
  de_EnableAwsNetworkPerformanceMetricSubscriptionCommand,
  se_EnableAwsNetworkPerformanceMetricSubscriptionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableAwsNetworkPerformanceMetricSubscriptionCommand}.
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionCommandInput
  extends EnableAwsNetworkPerformanceMetricSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link EnableAwsNetworkPerformanceMetricSubscriptionCommand}.
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput
  extends EnableAwsNetworkPerformanceMetricSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Enables Infrastructure Performance subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableAwsNetworkPerformanceMetricSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableAwsNetworkPerformanceMetricSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableAwsNetworkPerformanceMetricSubscriptionRequest
 *   Source: "STRING_VALUE",
 *   Destination: "STRING_VALUE",
 *   Metric: "aggregate-latency",
 *   Statistic: "p50",
 *   DryRun: true || false,
 * };
 * const command = new EnableAwsNetworkPerformanceMetricSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // EnableAwsNetworkPerformanceMetricSubscriptionResult
 * //   Output: true || false,
 * // };
 *
 * ```
 *
 * @param EnableAwsNetworkPerformanceMetricSubscriptionCommandInput - {@link EnableAwsNetworkPerformanceMetricSubscriptionCommandInput}
 * @returns {@link EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput}
 * @see {@link EnableAwsNetworkPerformanceMetricSubscriptionCommandInput} for command's `input` shape.
 * @see {@link EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableAwsNetworkPerformanceMetricSubscriptionCommand extends $Command
  .classBuilder<
    EnableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "EnableAwsNetworkPerformanceMetricSubscription", {})
  .n("EC2Client", "EnableAwsNetworkPerformanceMetricSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_EnableAwsNetworkPerformanceMetricSubscriptionCommand)
  .de(de_EnableAwsNetworkPerformanceMetricSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableAwsNetworkPerformanceMetricSubscriptionRequest;
      output: EnableAwsNetworkPerformanceMetricSubscriptionResult;
    };
    sdk: {
      input: EnableAwsNetworkPerformanceMetricSubscriptionCommandInput;
      output: EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput;
    };
  };
}
