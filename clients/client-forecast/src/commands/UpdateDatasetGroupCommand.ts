// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { UpdateDatasetGroupRequest, UpdateDatasetGroupResponse } from "../models/models_0";
import { UpdateDatasetGroup } from "../schemas/schemas_9_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatasetGroupCommand}.
 */
export interface UpdateDatasetGroupCommandInput extends UpdateDatasetGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetGroupCommand}.
 */
export interface UpdateDatasetGroupCommandOutput extends UpdateDatasetGroupResponse, __MetadataBearer {}

/**
 * <p>Replaces the datasets in a dataset group with the specified datasets.</p>
 *          <note>
 *             <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can
 *         use the dataset group to create a predictor. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>
 *         operation to get the status.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, UpdateDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, UpdateDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // UpdateDatasetGroupRequest
 *   DatasetGroupArn: "STRING_VALUE", // required
 *   DatasetArns: [ // ArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDatasetGroupCommandInput - {@link UpdateDatasetGroupCommandInput}
 * @returns {@link UpdateDatasetGroupCommandOutput}
 * @see {@link UpdateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetGroupCommandOutput} for command's `response` shape.
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
export class UpdateDatasetGroupCommand extends $Command
  .classBuilder<
    UpdateDatasetGroupCommandInput,
    UpdateDatasetGroupCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "UpdateDatasetGroup", {})
  .n("ForecastClient", "UpdateDatasetGroupCommand")
  .sc(UpdateDatasetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDatasetGroupRequest;
      output: {};
    };
    sdk: {
      input: UpdateDatasetGroupCommandInput;
      output: UpdateDatasetGroupCommandOutput;
    };
  };
}
