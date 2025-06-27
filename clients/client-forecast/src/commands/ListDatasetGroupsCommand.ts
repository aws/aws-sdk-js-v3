// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListDatasetGroupsRequest, ListDatasetGroupsResponse } from "../models/models_0";
import { de_ListDatasetGroupsCommand, se_ListDatasetGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetGroupsCommand}.
 */
export interface ListDatasetGroupsCommandInput extends ListDatasetGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetGroupsCommand}.
 */
export interface ListDatasetGroupsCommandOutput extends ListDatasetGroupsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of dataset groups created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.
 *       For each dataset group, this operation returns a summary of its properties, including its
 *       Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
 *       dataset group ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>
 *       operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListDatasetGroupsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListDatasetGroupsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // ListDatasetGroupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDatasetGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetGroupsResponse
 * //   DatasetGroups: [ // DatasetGroups
 * //     { // DatasetGroupSummary
 * //       DatasetGroupArn: "STRING_VALUE",
 * //       DatasetGroupName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetGroupsCommandInput - {@link ListDatasetGroupsCommandInput}
 * @returns {@link ListDatasetGroupsCommandOutput}
 * @see {@link ListDatasetGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetGroupsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 *
 * @public
 */
export class ListDatasetGroupsCommand extends $Command
  .classBuilder<
    ListDatasetGroupsCommandInput,
    ListDatasetGroupsCommandOutput,
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
  .s("AmazonForecast", "ListDatasetGroups", {})
  .n("ForecastClient", "ListDatasetGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListDatasetGroupsCommand)
  .de(de_ListDatasetGroupsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasetGroupsRequest;
      output: ListDatasetGroupsResponse;
    };
    sdk: {
      input: ListDatasetGroupsCommandInput;
      output: ListDatasetGroupsCommandOutput;
    };
  };
}
