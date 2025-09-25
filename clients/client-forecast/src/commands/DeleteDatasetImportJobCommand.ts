// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteDatasetImportJobRequest } from "../models/models_0";
import { DeleteDatasetImportJob } from "../schemas/schemas_42_DeleteDatasetImportJob";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDatasetImportJobCommand}.
 */
export interface DeleteDatasetImportJobCommandInput extends DeleteDatasetImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatasetImportJobCommand}.
 */
export interface DeleteDatasetImportJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>
 *       operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code>
 *       or <code>CREATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>
 *       operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteDatasetImportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteDatasetImportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteDatasetImportJobRequest
 *   DatasetImportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDatasetImportJobCommandInput - {@link DeleteDatasetImportJobCommandInput}
 * @returns {@link DeleteDatasetImportJobCommandOutput}
 * @see {@link DeleteDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetImportJobCommandOutput} for command's `response` shape.
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
export class DeleteDatasetImportJobCommand extends $Command
  .classBuilder<
    DeleteDatasetImportJobCommandInput,
    DeleteDatasetImportJobCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DeleteDatasetImportJob", {})
  .n("ForecastClient", "DeleteDatasetImportJobCommand")
  .sc(DeleteDatasetImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatasetImportJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteDatasetImportJobCommandInput;
      output: DeleteDatasetImportJobCommandOutput;
    };
  };
}
