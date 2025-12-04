// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import type { DeleteDatasetRequest } from "../models/models_0";
import { DeleteDataset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDatasetCommand}.
 */
export interface DeleteDatasetCommandInput extends DeleteDatasetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatasetCommand}.
 */
export interface DeleteDatasetCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Amazon Forecast dataset that was created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. You can
 *       only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>.
 *       To get the status use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.</p>
 *          <note>
 *             <p>Forecast does not automatically update any dataset groups that contain the deleted dataset.
 *         In order to update the dataset group, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation,
 *         omitting the deleted dataset's ARN.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteDatasetCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteDatasetCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteDatasetRequest
 *   DatasetArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDatasetCommandInput - {@link DeleteDatasetCommandInput}
 * @returns {@link DeleteDatasetCommandOutput}
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
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
export class DeleteDatasetCommand extends $Command
  .classBuilder<
    DeleteDatasetCommandInput,
    DeleteDatasetCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DeleteDataset", {})
  .n("ForecastClient", "DeleteDatasetCommand")
  .sc(DeleteDataset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatasetRequest;
      output: {};
    };
    sdk: {
      input: DeleteDatasetCommandInput;
      output: DeleteDatasetCommandOutput;
    };
  };
}
