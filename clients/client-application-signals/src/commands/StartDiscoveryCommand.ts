// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDiscoveryInput, StartDiscoveryOutput } from "../models/models_0";
import { StartDiscovery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Enables this Amazon Web Services account to be able to use CloudWatch Application Signals by creating the *AWSServiceRoleForCloudWatchApplicationSignals* service-linked role. This service- linked role has the following permissions:
 *
 * - `xray:GetServiceGraph`
 * - `logs:StartQuery`
 * - `logs:GetQueryResults`
 * - `cloudwatch:GetMetricData`
 * - `cloudwatch:ListMetrics`
 * - `tag:GetResources`
 * - `autoscaling:DescribeAutoScalingGroups`
 *
 * A service-linked CloudTrail event channel is created to process CloudTrail events and return change event information. This includes last deployment time, userName, eventName, and other event metadata.
 *
 * After completing this step, you still need to instrument your Java and Python applications to send data to Application Signals. For more information, see [Enabling Application Signals](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Application-Signals-Enable.html).
 *
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The resource is not valid.
 *
 * @throws {@link ApplicationSignalsServiceException}
 *
 * Base exception class for all service exceptions from ApplicationSignals service.
 *
 * @public
 */
export class StartDiscoveryCommand extends command<StartDiscoveryCommandInput, StartDiscoveryCommandOutput>(
  _ep0,
  _mw0,
  "StartDiscovery",
  StartDiscovery$
) {
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
