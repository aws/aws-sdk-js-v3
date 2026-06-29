// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StopOTelEnrichmentInput, StopOTelEnrichmentOutput } from "../models/models_0";
import { StopOTelEnrichment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopOTelEnrichmentCommand}.
 */
export interface StopOTelEnrichmentCommandInput extends StopOTelEnrichmentInput {}
/**
 * @public
 *
 * The output of {@link StopOTelEnrichmentCommand}.
 */
export interface StopOTelEnrichmentCommandOutput extends StopOTelEnrichmentOutput, __MetadataBearer {}

/**
 * <p>Disables enrichment and PromQL access for CloudWatch vended metrics for <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingResourceTagsForTelemetry.html">supported Amazon Web Services resources</a> in the account. After disabling,
 *             these metrics are no longer enriched with resource ARN and resource tag labels, and
 *             cannot be queried using PromQL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, StopOTelEnrichmentCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, StopOTelEnrichmentCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = {};
 * const command = new StopOTelEnrichmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopOTelEnrichmentCommandInput - {@link StopOTelEnrichmentCommandInput}
 * @returns {@link StopOTelEnrichmentCommandOutput}
 * @see {@link StopOTelEnrichmentCommandInput} for command's `input` shape.
 * @see {@link StopOTelEnrichmentCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class StopOTelEnrichmentCommand extends $Command
  .classBuilder<
    StopOTelEnrichmentCommandInput,
    StopOTelEnrichmentCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "StopOTelEnrichment", {})
  .n("CloudWatchClient", "StopOTelEnrichmentCommand")
  .sc(StopOTelEnrichment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: StopOTelEnrichmentCommandInput;
      output: StopOTelEnrichmentCommandOutput;
    };
  };
}
