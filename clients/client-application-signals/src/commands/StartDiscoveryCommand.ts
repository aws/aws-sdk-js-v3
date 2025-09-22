// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartDiscoveryInput, StartDiscoveryOutput } from "../models/models_0";
import { StartDiscovery } from "../schemas/schemas_5_";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDiscoveryCommand}.
 */
export interface StartDiscoveryCommandInput extends StartDiscoveryInput {}
/**
 * @public
 *
 * The output of {@link StartDiscoveryCommand}.
 */
export interface StartDiscoveryCommandOutput extends StartDiscoveryOutput, __MetadataBearer {}

/**
 * <p>Enables this Amazon Web Services account to be able to use CloudWatch Application Signals
 *          by creating the <i>AWSServiceRoleForCloudWatchApplicationSignals</i> service-linked role. This service-
 *          linked role has the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>xray:GetServiceGraph</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>logs:StartQuery</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>logs:GetQueryResults</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>cloudwatch:GetMetricData</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>cloudwatch:ListMetrics</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>tag:GetResources</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>autoscaling:DescribeAutoScalingGroups</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>After completing this step, you still need to instrument your Java and Python applications to send data
 *          to Application Signals. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Signals-Enable.html">
 *             Enabling Application Signals</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, StartDiscoveryCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, StartDiscoveryCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // import type { ApplicationSignalsClientConfig } from "@aws-sdk/client-application-signals";
 * const config = {}; // type is ApplicationSignalsClientConfig
 * const client = new ApplicationSignalsClient(config);
 * const input = {};
 * const command = new StartDiscoveryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartDiscoveryCommandInput - {@link StartDiscoveryCommandInput}
 * @returns {@link StartDiscoveryCommandOutput}
 * @see {@link StartDiscoveryCommandInput} for command's `input` shape.
 * @see {@link StartDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource is not valid.</p>
 *
 * @throws {@link ApplicationSignalsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationSignals service.</p>
 *
 *
 * @public
 */
export class StartDiscoveryCommand extends $Command
  .classBuilder<
    StartDiscoveryCommandInput,
    StartDiscoveryCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationSignals", "StartDiscovery", {})
  .n("ApplicationSignalsClient", "StartDiscoveryCommand")
  .sc(StartDiscovery)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: StartDiscoveryCommandInput;
      output: StartDiscoveryCommandOutput;
    };
  };
}
