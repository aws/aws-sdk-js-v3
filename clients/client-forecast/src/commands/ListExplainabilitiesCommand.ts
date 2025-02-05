// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListExplainabilitiesRequest, ListExplainabilitiesResponse } from "../models/models_0";
import { de_ListExplainabilitiesCommand, se_ListExplainabilitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExplainabilitiesCommand}.
 */
export interface ListExplainabilitiesCommandInput extends ListExplainabilitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListExplainabilitiesCommand}.
 */
export interface ListExplainabilitiesCommandOutput extends ListExplainabilitiesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for
 *             each Explainability. You can filter the list using an array of <a>Filter</a>
 *             objects.</p>
 *          <p>To retrieve the complete set of properties for a particular Explainability resource,
 *             use the ARN with the <a>DescribeExplainability</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListExplainabilitiesCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListExplainabilitiesCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ForecastClient(config);
 * const input = { // ListExplainabilitiesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // Filters
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       Condition: "IS" || "IS_NOT", // required
 *     },
 *   ],
 * };
 * const command = new ListExplainabilitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListExplainabilitiesResponse
 * //   Explainabilities: [ // Explainabilities
 * //     { // ExplainabilitySummary
 * //       ExplainabilityArn: "STRING_VALUE",
 * //       ExplainabilityName: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       ExplainabilityConfig: { // ExplainabilityConfig
 * //         TimeSeriesGranularity: "ALL" || "SPECIFIC", // required
 * //         TimePointGranularity: "ALL" || "SPECIFIC", // required
 * //       },
 * //       Status: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExplainabilitiesCommandInput - {@link ListExplainabilitiesCommandInput}
 * @returns {@link ListExplainabilitiesCommandOutput}
 * @see {@link ListExplainabilitiesCommandInput} for command's `input` shape.
 * @see {@link ListExplainabilitiesCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 * @public
 */
export class ListExplainabilitiesCommand extends $Command
  .classBuilder<
    ListExplainabilitiesCommandInput,
    ListExplainabilitiesCommandOutput,
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
  .s("AmazonForecast", "ListExplainabilities", {})
  .n("ForecastClient", "ListExplainabilitiesCommand")
  .f(void 0, void 0)
  .ser(se_ListExplainabilitiesCommand)
  .de(de_ListExplainabilitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExplainabilitiesRequest;
      output: ListExplainabilitiesResponse;
    };
    sdk: {
      input: ListExplainabilitiesCommandInput;
      output: ListExplainabilitiesCommandOutput;
    };
  };
}
