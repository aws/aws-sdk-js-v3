// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopMetricStreamsInput, StopMetricStreamsOutput } from "../models/models_0";
import { de_StopMetricStreamsCommand, se_StopMetricStreamsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopMetricStreamsCommand}.
 */
export interface StopMetricStreamsCommandInput extends StopMetricStreamsInput {}
/**
 * @public
 *
 * The output of {@link StopMetricStreamsCommand}.
 */
export interface StopMetricStreamsCommandOutput extends StopMetricStreamsOutput, __MetadataBearer {}

/**
 * <p>Stops the streaming of metrics for one or more of your metric streams.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, StopMetricStreamsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, StopMetricStreamsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // StopMetricStreamsInput
 *   Names: [ // MetricStreamNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StopMetricStreamsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopMetricStreamsCommandInput - {@link StopMetricStreamsCommandInput}
 * @returns {@link StopMetricStreamsCommandOutput}
 * @see {@link StopMetricStreamsCommandInput} for command's `input` shape.
 * @see {@link StopMetricStreamsCommandOutput} for command's `response` shape.
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
export class StopMetricStreamsCommand extends $Command
  .classBuilder<
    StopMetricStreamsCommandInput,
    StopMetricStreamsCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GraniteServiceVersion20100801", "StopMetricStreams", {})
  .n("CloudWatchClient", "StopMetricStreamsCommand")
  .f(void 0, void 0)
  .ser(se_StopMetricStreamsCommand)
  .de(de_StopMetricStreamsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopMetricStreamsInput;
      output: {};
    };
    sdk: {
      input: StopMetricStreamsCommandInput;
      output: StopMetricStreamsCommandOutput;
    };
  };
}
