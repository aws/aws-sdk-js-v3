// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMonitoringSubscriptionRequest, CreateMonitoringSubscriptionResult } from "../models/models_0";
import { CreateMonitoringSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CreateMonitoringSubscriptionCommandOutput extends CreateMonitoringSubscriptionResult, __MetadataBearer {}

/**
 * Enables or disables additional Amazon CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost.
 *
 * For more information, see [Viewing additional CloudFront distribution metrics](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional) in the *Amazon CloudFront Developer Guide*.
 *
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
 *
 * Access denied.
 *
 * @throws {@link MonitoringSubscriptionAlreadyExists} (client fault)
 *
 * A monitoring subscription already exists for the specified distribution.
 *
 * @throws {@link NoSuchDistribution} (client fault)
 *
 * The specified distribution does not exist.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * This operation is not supported in this Amazon Web Services Region.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class CreateMonitoringSubscriptionCommand extends command<CreateMonitoringSubscriptionCommandInput, CreateMonitoringSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "CreateMonitoringSubscription",
  CreateMonitoringSubscription$
) {
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
