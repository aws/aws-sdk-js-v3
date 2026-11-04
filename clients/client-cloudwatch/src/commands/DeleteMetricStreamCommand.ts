// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMetricStreamInput, DeleteMetricStreamOutput } from "../models/models_0";
import { DeleteMetricStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMetricStreamCommand}.
 */
export interface DeleteMetricStreamCommandInput extends DeleteMetricStreamInput {}
/**
 * @public
 *
 * The output of {@link DeleteMetricStreamCommand}.
 */
export interface DeleteMetricStreamCommandOutput extends DeleteMetricStreamOutput, __MetadataBearer {}

/**
 * Permanently deletes the metric stream that you specify.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteMetricStreamCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteMetricStreamCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // DeleteMetricStreamInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteMetricStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMetricStreamCommandInput - {@link DeleteMetricStreamCommandInput}
 * @returns {@link DeleteMetricStreamCommandOutput}
 * @see {@link DeleteMetricStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricStreamCommandOutput} for command's `response` shape.
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
export class DeleteMetricStreamCommand extends command<DeleteMetricStreamCommandInput, DeleteMetricStreamCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMetricStream",
  DeleteMetricStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMetricStreamInput;
      output: {};
    };
    sdk: {
      input: DeleteMetricStreamCommandInput;
      output: DeleteMetricStreamCommandOutput;
    };
  };
}
