// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetOTelEnrichmentInput, GetOTelEnrichmentOutput } from "../models/models_0";
import { GetOTelEnrichment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOTelEnrichmentCommand}.
 */
export interface GetOTelEnrichmentCommandInput extends GetOTelEnrichmentInput {}
/**
 * @public
 *
 * The output of {@link GetOTelEnrichmentCommand}.
 */
export interface GetOTelEnrichmentCommandOutput extends GetOTelEnrichmentOutput, __MetadataBearer {}

/**
 * <p>Returns the current status of vended metric enrichment for the account, including
 *             whether CloudWatch vended metrics are enriched with resource ARN and resource tag labels
 *             and queryable using PromQL. For the list of supported resources, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/UsingResourceTagsForTelemetry.html">Supported Amazon Web Services infrastructure metrics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetOTelEnrichmentCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetOTelEnrichmentCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = {};
 * const command = new GetOTelEnrichmentCommand(input);
 * const response = await client.send(command);
 * // { // GetOTelEnrichmentOutput
 * //   Status: "Running" || "Stopped", // required
 * // };
 *
 * ```
 *
 * @param GetOTelEnrichmentCommandInput - {@link GetOTelEnrichmentCommandInput}
 * @returns {@link GetOTelEnrichmentCommandOutput}
 * @see {@link GetOTelEnrichmentCommandInput} for command's `input` shape.
 * @see {@link GetOTelEnrichmentCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class GetOTelEnrichmentCommand extends $Command
  .classBuilder<
    GetOTelEnrichmentCommandInput,
    GetOTelEnrichmentCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "GetOTelEnrichment", {})
  .n("CloudWatchClient", "GetOTelEnrichmentCommand")
  .sc(GetOTelEnrichment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetOTelEnrichmentOutput;
    };
    sdk: {
      input: GetOTelEnrichmentCommandInput;
      output: GetOTelEnrichmentCommandOutput;
    };
  };
}
