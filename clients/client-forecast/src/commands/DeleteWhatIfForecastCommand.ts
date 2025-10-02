// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteWhatIfForecastRequest } from "../models/models_0";
import { de_DeleteWhatIfForecastCommand, se_DeleteWhatIfForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWhatIfForecastCommand}.
 */
export interface DeleteWhatIfForecastCommandInput extends DeleteWhatIfForecastRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWhatIfForecastCommand}.
 */
export interface DeleteWhatIfForecastCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a what-if forecast created using the <a>CreateWhatIfForecast</a>
 *       operation. You can delete only what-if forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecast</a> operation. </p>
 *          <p>You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteWhatIfForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteWhatIfForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteWhatIfForecastRequest
 *   WhatIfForecastArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteWhatIfForecastCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWhatIfForecastCommandInput - {@link DeleteWhatIfForecastCommandInput}
 * @returns {@link DeleteWhatIfForecastCommandOutput}
 * @see {@link DeleteWhatIfForecastCommandInput} for command's `input` shape.
 * @see {@link DeleteWhatIfForecastCommandOutput} for command's `response` shape.
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
export class DeleteWhatIfForecastCommand extends $Command
  .classBuilder<
    DeleteWhatIfForecastCommandInput,
    DeleteWhatIfForecastCommandOutput,
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
  .s("AmazonForecast", "DeleteWhatIfForecast", {})
  .n("ForecastClient", "DeleteWhatIfForecastCommand")
  .f(void 0, void 0)
  .ser(se_DeleteWhatIfForecastCommand)
  .de(de_DeleteWhatIfForecastCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWhatIfForecastRequest;
      output: {};
    };
    sdk: {
      input: DeleteWhatIfForecastCommandInput;
      output: DeleteWhatIfForecastCommandOutput;
    };
  };
}
