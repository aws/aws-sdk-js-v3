// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteMonitorRequest } from "../models/models_0";
import { DeleteMonitor } from "../schemas/schemas_27_DeleteMonitor";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMonitorCommand}.
 */
export interface DeleteMonitorCommandInput extends DeleteMonitorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMonitorCommand}.
 */
export interface DeleteMonitorCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a monitor resource. You can only delete a monitor resource with a status of <code>ACTIVE</code>, <code>ACTIVE_STOPPED</code>, <code>CREATE_FAILED</code>, or <code>CREATE_STOPPED</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteMonitorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteMonitorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteMonitorRequest
 *   MonitorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMonitorCommandInput - {@link DeleteMonitorCommandInput}
 * @returns {@link DeleteMonitorCommandOutput}
 * @see {@link DeleteMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 *
 * @public
 */
export class DeleteMonitorCommand extends $Command
  .classBuilder<
    DeleteMonitorCommandInput,
    DeleteMonitorCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DeleteMonitor", {})
  .n("ForecastClient", "DeleteMonitorCommand")
  .sc(DeleteMonitor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMonitorRequest;
      output: {};
    };
    sdk: {
      input: DeleteMonitorCommandInput;
      output: DeleteMonitorCommandOutput;
    };
  };
}
