// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartMetricStreamsInput, StartMetricStreamsOutput } from "../models/models_0";
import { StartMetricStreams } from "../schemas/schemas_7_Metric";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMetricStreamsCommand}.
 */
export interface StartMetricStreamsCommandInput extends StartMetricStreamsInput {}
/**
 * @public
 *
 * The output of {@link StartMetricStreamsCommand}.
 */
export interface StartMetricStreamsCommandOutput extends StartMetricStreamsOutput, __MetadataBearer {}

/**
 * <p>Starts the streaming of metrics for one or more of your metric streams.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, StartMetricStreamsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, StartMetricStreamsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // StartMetricStreamsInput
 *   Names: [ // MetricStreamNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartMetricStreamsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartMetricStreamsCommandInput - {@link StartMetricStreamsCommandInput}
 * @returns {@link StartMetricStreamsCommandOutput}
 * @see {@link StartMetricStreamsCommandInput} for command's `input` shape.
 * @see {@link StartMetricStreamsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class StartMetricStreamsCommand extends $Command
  .classBuilder<
    StartMetricStreamsCommandInput,
    StartMetricStreamsCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "StartMetricStreams", {})
  .n("CloudWatchClient", "StartMetricStreamsCommand")
  .sc(StartMetricStreams)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMetricStreamsInput;
      output: {};
    };
    sdk: {
      input: StartMetricStreamsCommandInput;
      output: StartMetricStreamsCommandOutput;
    };
  };
}
