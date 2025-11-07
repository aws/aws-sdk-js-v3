// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { CreateDatasetGroupRequest, CreateDatasetGroupResponse } from "../models/models_0";
import { CreateDatasetGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatasetGroupCommand}.
 */
export interface CreateDatasetGroupCommandInput extends CreateDatasetGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetGroupCommand}.
 */
export interface CreateDatasetGroupCommandOutput extends CreateDatasetGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a dataset group, which holds a collection of related datasets. You can add
 *       datasets to the dataset group when you create the dataset group, or later by using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p>
 *          <p>After creating a dataset group and adding datasets, you use the dataset group when you
 *       create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p>
 *          <p>To get a list of all your datasets groups, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a>
 *       operation.</p>
 *          <note>
 *             <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can
 *         use the dataset group to create a predictor. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // CreateDatasetGroupRequest
 *   DatasetGroupName: "STRING_VALUE", // required
 *   Domain: "RETAIL" || "CUSTOM" || "INVENTORY_PLANNING" || "EC2_CAPACITY" || "WORK_FORCE" || "WEB_TRAFFIC" || "METRICS", // required
 *   DatasetArns: [ // ArnList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetGroupResponse
 * //   DatasetGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDatasetGroupCommandInput - {@link CreateDatasetGroupCommandInput}
 * @returns {@link CreateDatasetGroupCommandOutput}
 * @see {@link CreateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of resources per account has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>There is already a resource with this name. Try again with a different name.</p>
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
export class CreateDatasetGroupCommand extends $Command
  .classBuilder<
    CreateDatasetGroupCommandInput,
    CreateDatasetGroupCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "CreateDatasetGroup", {})
  .n("ForecastClient", "CreateDatasetGroupCommand")
  .sc(CreateDatasetGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetGroupRequest;
      output: CreateDatasetGroupResponse;
    };
    sdk: {
      input: CreateDatasetGroupCommandInput;
      output: CreateDatasetGroupCommandOutput;
    };
  };
}
