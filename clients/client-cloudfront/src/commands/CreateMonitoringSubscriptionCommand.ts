// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateMonitoringSubscriptionRequest, CreateMonitoringSubscriptionResult } from "../models/models_0";
import { CreateMonitoringSubscription } from "../schemas/schemas_13_MonitoringSubscription";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMonitoringSubscriptionCommand}.
 */
export interface CreateMonitoringSubscriptionCommandInput extends CreateMonitoringSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateMonitoringSubscriptionCommand}.
 */
export interface CreateMonitoringSubscriptionCommandOutput
  extends CreateMonitoringSubscriptionResult,
    __MetadataBearer {}

/**
 * <p>Enables or disables additional Amazon CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional">Viewing additional CloudFront distribution metrics</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateMonitoringSubscriptionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateMonitoringSubscriptionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // CreateMonitoringSubscriptionRequest
 *   DistributionId: "STRING_VALUE", // required
 *   MonitoringSubscription: { // MonitoringSubscription
 *     RealtimeMetricsSubscriptionConfig: { // RealtimeMetricsSubscriptionConfig
 *       RealtimeMetricsSubscriptionStatus: "Enabled" || "Disabled", // required
 *     },
 *   },
 * };
 * const command = new CreateMonitoringSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateMonitoringSubscriptionResult
 * //   MonitoringSubscription: { // MonitoringSubscription
 * //     RealtimeMetricsSubscriptionConfig: { // RealtimeMetricsSubscriptionConfig
 * //       RealtimeMetricsSubscriptionStatus: "Enabled" || "Disabled", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMonitoringSubscriptionCommandInput - {@link CreateMonitoringSubscriptionCommandInput}
 * @returns {@link CreateMonitoringSubscriptionCommandOutput}
 * @see {@link CreateMonitoringSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateMonitoringSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link MonitoringSubscriptionAlreadyExists} (client fault)
 *  <p>A monitoring subscription already exists for the specified distribution.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class CreateMonitoringSubscriptionCommand extends $Command
  .classBuilder<
    CreateMonitoringSubscriptionCommandInput,
    CreateMonitoringSubscriptionCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "CreateMonitoringSubscription", {})
  .n("CloudFrontClient", "CreateMonitoringSubscriptionCommand")
  .sc(CreateMonitoringSubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMonitoringSubscriptionRequest;
      output: CreateMonitoringSubscriptionResult;
    };
    sdk: {
      input: CreateMonitoringSubscriptionCommandInput;
      output: CreateMonitoringSubscriptionCommandOutput;
    };
  };
}
