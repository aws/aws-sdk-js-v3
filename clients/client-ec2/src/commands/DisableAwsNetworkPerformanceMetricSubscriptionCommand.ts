// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisableAwsNetworkPerformanceMetricSubscriptionRequest,
  DisableAwsNetworkPerformanceMetricSubscriptionResult,
} from "../models/models_5";
import {
  de_DisableAwsNetworkPerformanceMetricSubscriptionCommand,
  se_DisableAwsNetworkPerformanceMetricSubscriptionCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableAwsNetworkPerformanceMetricSubscriptionCommand}.
 */
export interface DisableAwsNetworkPerformanceMetricSubscriptionCommandInput
  extends DisableAwsNetworkPerformanceMetricSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link DisableAwsNetworkPerformanceMetricSubscriptionCommand}.
 */
export interface DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput
  extends DisableAwsNetworkPerformanceMetricSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Disables Infrastructure Performance metric subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableAwsNetworkPerformanceMetricSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableAwsNetworkPerformanceMetricSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DisableAwsNetworkPerformanceMetricSubscriptionRequest
 *   Source: "STRING_VALUE",
 *   Destination: "STRING_VALUE",
 *   Metric: "aggregate-latency",
 *   Statistic: "p50",
 *   DryRun: true || false,
 * };
 * const command = new DisableAwsNetworkPerformanceMetricSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // DisableAwsNetworkPerformanceMetricSubscriptionResult
 * //   Output: true || false,
 * // };
 *
 * ```
 *
 * @param DisableAwsNetworkPerformanceMetricSubscriptionCommandInput - {@link DisableAwsNetworkPerformanceMetricSubscriptionCommandInput}
 * @returns {@link DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput}
 * @see {@link DisableAwsNetworkPerformanceMetricSubscriptionCommandInput} for command's `input` shape.
 * @see {@link DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DisableAwsNetworkPerformanceMetricSubscriptionCommand extends $Command
  .classBuilder<
    DisableAwsNetworkPerformanceMetricSubscriptionCommandInput,
    DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput,
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
  .s("AmazonEC2", "DisableAwsNetworkPerformanceMetricSubscription", {})
  .n("EC2Client", "DisableAwsNetworkPerformanceMetricSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_DisableAwsNetworkPerformanceMetricSubscriptionCommand)
  .de(de_DisableAwsNetworkPerformanceMetricSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableAwsNetworkPerformanceMetricSubscriptionRequest;
      output: DisableAwsNetworkPerformanceMetricSubscriptionResult;
    };
    sdk: {
      input: DisableAwsNetworkPerformanceMetricSubscriptionCommandInput;
      output: DisableAwsNetworkPerformanceMetricSubscriptionCommandOutput;
    };
  };
}
