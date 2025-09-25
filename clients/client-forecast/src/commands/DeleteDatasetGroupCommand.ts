// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DeleteDatasetGroupRequest } from "../models/models_0";
import { DeleteDatasetGroup } from "../schemas/schemas_37_DeleteDatasetGroup";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDatasetGroupCommand}.
 */
export interface DeleteDatasetGroupCommandInput extends DeleteDatasetGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatasetGroupCommand}.
 */
export interface DeleteDatasetGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.
 *       You can only delete dataset groups that have a status of <code>ACTIVE</code>,
 *         <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p>
 *          <p>This operation deletes only the dataset group, not the datasets in the group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DeleteDatasetGroupRequest
 *   DatasetGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatasetGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDatasetGroupCommandInput - {@link DeleteDatasetGroupCommandInput}
 * @returns {@link DeleteDatasetGroupCommandOutput}
 * @see {@link DeleteDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetGroupCommandOutput} for command's `response` shape.
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
export class DeleteDatasetGroupCommand extends $Command
  .classBuilder<
    DeleteDatasetGroupCommandInput,
    DeleteDatasetGroupCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DeleteDatasetGroup", {})
  .n("ForecastClient", "DeleteDatasetGroupCommand")
  .sc(DeleteDatasetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatasetGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteDatasetGroupCommandInput;
      output: DeleteDatasetGroupCommandOutput;
    };
  };
}
