// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartOTelEnrichmentInput, StartOTelEnrichmentOutput } from "../models/models_0";
import { StartOTelEnrichment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartOTelEnrichmentCommand}.
 */
export interface StartOTelEnrichmentCommandInput extends StartOTelEnrichmentInput {}
/**
 * @public
 *
 * The output of {@link StartOTelEnrichmentCommand}.
 */
export interface StartOTelEnrichmentCommandOutput extends StartOTelEnrichmentOutput, __MetadataBearer {}

/**
 * <p>Enables enrichment and PromQL access for CloudWatch vended metrics for
 *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingResourceTagsForTelemetry.html">supported Amazon Web Services resources</a> in the account. Once enabled, metrics that
 *             contain a resource identifier dimension (for example, EC2
 *             <code>CPUUtilization</code> with an <code>InstanceId</code> dimension) are enriched
 *             with resource ARN and resource tag labels and become queryable using
 *             PromQL.</p>
 *          <p>Before calling this operation, you must enable resource tags on telemetry for
 *             your account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/EnableResourceTagsOnTelemetry.html">Enable resource tags on telemetry</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, StartOTelEnrichmentCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, StartOTelEnrichmentCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = {};
 * const command = new StartOTelEnrichmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartOTelEnrichmentCommandInput - {@link StartOTelEnrichmentCommandInput}
 * @returns {@link StartOTelEnrichmentCommandOutput}
 * @see {@link StartOTelEnrichmentCommandInput} for command's `input` shape.
 * @see {@link StartOTelEnrichmentCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class StartOTelEnrichmentCommand extends $Command
  .classBuilder<
    StartOTelEnrichmentCommandInput,
    StartOTelEnrichmentCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "StartOTelEnrichment", {})
  .n("CloudWatchClient", "StartOTelEnrichmentCommand")
  .sc(StartOTelEnrichment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: StartOTelEnrichmentCommandInput;
      output: StartOTelEnrichmentCommandOutput;
    };
  };
}
