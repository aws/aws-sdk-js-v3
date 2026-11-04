// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMetricStreamsInput, StartMetricStreamsOutput } from "../models/models_0";
import { StartMetricStreams$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts the streaming of metrics for one or more of your metric streams.
 *
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
export class StartMetricStreamsCommand extends command<StartMetricStreamsCommandInput, StartMetricStreamsCommandOutput>(
  _ep0,
  _mw0,
  "StartMetricStreams",
  StartMetricStreams$
) {
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
