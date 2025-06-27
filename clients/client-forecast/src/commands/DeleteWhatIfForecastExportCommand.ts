// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteWhatIfForecastExportRequest } from "../models/models_0";
import { de_DeleteWhatIfForecastExportCommand, se_DeleteWhatIfForecastExportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWhatIfForecastExportCommand}.
 */
export interface DeleteWhatIfForecastExportCommandInput extends DeleteWhatIfForecastExportRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWhatIfForecastExportCommand}.
 */
export interface DeleteWhatIfForecastExportCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a>
 *       operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteWhatIfForecastExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteWhatIfForecastExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // DeleteWhatIfForecastExportRequest
 *   WhatIfForecastExportArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteWhatIfForecastExportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWhatIfForecastExportCommandInput - {@link DeleteWhatIfForecastExportCommandInput}
 * @returns {@link DeleteWhatIfForecastExportCommandOutput}
 * @see {@link DeleteWhatIfForecastExportCommandInput} for command's `input` shape.
 * @see {@link DeleteWhatIfForecastExportCommandOutput} for command's `response` shape.
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
export class DeleteWhatIfForecastExportCommand extends $Command
  .classBuilder<
    DeleteWhatIfForecastExportCommandInput,
    DeleteWhatIfForecastExportCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonForecast", "DeleteWhatIfForecastExport", {})
  .n("ForecastClient", "DeleteWhatIfForecastExportCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWhatIfForecastExportCommand)
  .de(de_DeleteWhatIfForecastExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWhatIfForecastExportRequest;
      output: {};
    };
    sdk: {
      input: DeleteWhatIfForecastExportCommandInput;
      output: DeleteWhatIfForecastExportCommandOutput;
    };
  };
}
