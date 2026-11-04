// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopMetricStreamsInput, StopMetricStreamsOutput } from "../models/models_0";
import { StopMetricStreams$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Stops the streaming of metrics for one or more of your metric streams.
 *
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
 *
 * Request processing has failed due to some unknown error, exception, or failure.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of an input parameter is bad or out-of-range.
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *
 * An input parameter that is required is missing.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
 *
 * @public
 */
export class StopMetricStreamsCommand extends command<StopMetricStreamsCommandInput, StopMetricStreamsCommandOutput>(
  _ep0,
  _mw0,
  "StopMetricStreams",
  StopMetricStreams$
) {
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
