// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteMetricStreamInput, DeleteMetricStreamOutput } from "../models/models_0";
import { DeleteMetricStream } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Permanently deletes the metric stream that you specify.</p>
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
export class DeleteMetricStreamCommand extends $Command
  .classBuilder<
    DeleteMetricStreamCommandInput,
    DeleteMetricStreamCommandOutput,
    CloudWatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GraniteServiceVersion20100801", "DeleteMetricStream", {})
  .n("CloudWatchClient", "DeleteMetricStreamCommand")
  .sc(DeleteMetricStream)
  .build() {
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
