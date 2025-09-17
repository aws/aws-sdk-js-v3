// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeDatasetGroupRequest, DescribeDatasetGroupResponse } from "../models/models_0";
import { de_DescribeDatasetGroupCommand, se_DescribeDatasetGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDatasetGroupCommand}.
 */
export interface DescribeDatasetGroupCommandInput extends DescribeDatasetGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetGroupCommand}.
 */
export interface DescribeDatasetGroupCommandOutput extends DescribeDatasetGroupResponse, __MetadataBearer {}

/**
 * <p>Describes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>
 *       operation.</p>
 *          <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code>
 *       request, this operation includes the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DatasetArns</code> - The datasets belonging to the group.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DescribeDatasetGroupRequest
 *   DatasetGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetGroupResponse
 * //   DatasetGroupName: "STRING_VALUE",
 * //   DatasetGroupArn: "STRING_VALUE",
 * //   DatasetArns: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   Domain: "RETAIL" || "CUSTOM" || "INVENTORY_PLANNING" || "EC2_CAPACITY" || "WORK_FORCE" || "WEB_TRAFFIC" || "METRICS",
 * //   Status: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeDatasetGroupCommandInput - {@link DescribeDatasetGroupCommandInput}
 * @returns {@link DescribeDatasetGroupCommandOutput}
 * @see {@link DescribeDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
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
export class DescribeDatasetGroupCommand extends $Command
  .classBuilder<
    DescribeDatasetGroupCommandInput,
    DescribeDatasetGroupCommandOutput,
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
  .s("AmazonForecast", "DescribeDatasetGroup", {})
  .n("ForecastClient", "DescribeDatasetGroupCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDatasetGroupCommand)
  .de(de_DescribeDatasetGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDatasetGroupRequest;
      output: DescribeDatasetGroupResponse;
    };
    sdk: {
      input: DescribeDatasetGroupCommandInput;
      output: DescribeDatasetGroupCommandOutput;
    };
  };
}
