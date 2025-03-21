// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetMonitoringSubscriptionRequest, GetMonitoringSubscriptionResult } from "../models/models_1";
import { de_GetMonitoringSubscriptionCommand, se_GetMonitoringSubscriptionCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMonitoringSubscriptionCommand}.
 */
export interface GetMonitoringSubscriptionCommandInput extends GetMonitoringSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link GetMonitoringSubscriptionCommand}.
 */
export interface GetMonitoringSubscriptionCommandOutput extends GetMonitoringSubscriptionResult, __MetadataBearer {}

/**
 * <p>Gets information about whether additional CloudWatch metrics are enabled for the
 * 			specified CloudFront distribution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetMonitoringSubscriptionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetMonitoringSubscriptionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetMonitoringSubscriptionRequest
 *   DistributionId: "STRING_VALUE", // required
 * };
 * const command = new GetMonitoringSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // GetMonitoringSubscriptionResult
 * //   MonitoringSubscription: { // MonitoringSubscription
 * //     RealtimeMetricsSubscriptionConfig: { // RealtimeMetricsSubscriptionConfig
 * //       RealtimeMetricsSubscriptionStatus: "Enabled" || "Disabled", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMonitoringSubscriptionCommandInput - {@link GetMonitoringSubscriptionCommandInput}
 * @returns {@link GetMonitoringSubscriptionCommandOutput}
 * @see {@link GetMonitoringSubscriptionCommandInput} for command's `input` shape.
 * @see {@link GetMonitoringSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *  <p>The specified distribution does not exist.</p>
 *
 * @throws {@link NoSuchMonitoringSubscription} (client fault)
 *  <p>A monitoring subscription does not exist for the specified distribution.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class GetMonitoringSubscriptionCommand extends $Command
  .classBuilder<
    GetMonitoringSubscriptionCommandInput,
    GetMonitoringSubscriptionCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "GetMonitoringSubscription", {})
  .n("CloudFrontClient", "GetMonitoringSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_GetMonitoringSubscriptionCommand)
  .de(de_GetMonitoringSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMonitoringSubscriptionRequest;
      output: GetMonitoringSubscriptionResult;
    };
    sdk: {
      input: GetMonitoringSubscriptionCommandInput;
      output: GetMonitoringSubscriptionCommandOutput;
    };
  };
}
