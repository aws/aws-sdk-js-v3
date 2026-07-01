// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  EnableAwsNetworkPerformanceMetricSubscriptionRequest,
  EnableAwsNetworkPerformanceMetricSubscriptionResult,
} from "../models/models_5";
import { EnableAwsNetworkPerformanceMetricSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableAwsNetworkPerformanceMetricSubscriptionCommand}.
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionCommandInput extends EnableAwsNetworkPerformanceMetricSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link EnableAwsNetworkPerformanceMetricSubscriptionCommand}.
 */
export interface EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput extends EnableAwsNetworkPerformanceMetricSubscriptionResult, __MetadataBearer {}

/**
 * <p>Enables Infrastructure Performance subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableAwsNetworkPerformanceMetricSubscriptionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableAwsNetworkPerformanceMetricSubscriptionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
export class EnableAwsNetworkPerformanceMetricSubscriptionCommand extends command<EnableAwsNetworkPerformanceMetricSubscriptionCommandInput, EnableAwsNetworkPerformanceMetricSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "EnableAwsNetworkPerformanceMetricSubscription",
  EnableAwsNetworkPerformanceMetricSubscription$
) {
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
