// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListExplainabilityExportsRequest, ListExplainabilityExportsResponse } from "../models/models_0";
import { ListExplainabilityExports } from "../schemas/schemas_16_ListExplainabilityExports";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExplainabilityExportsCommand}.
 */
export interface ListExplainabilityExportsCommandInput extends ListExplainabilityExportsRequest {}
/**
 * @public
 *
 * The output of {@link ListExplainabilityExportsCommand}.
 */
export interface ListExplainabilityExportsCommandOutput extends ListExplainabilityExportsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Explainability exports created using the <a>CreateExplainabilityExport</a> operation. This operation returns a summary
 *             for each Explainability export. You can filter the list using an array of <a>Filter</a> objects.</p>
 *          <p>To retrieve the complete set of properties for a particular Explainability export, use
 *             the ARN with the <a>DescribeExplainability</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListExplainabilityExportsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListExplainabilityExportsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ListExplainabilityExportsRequest
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
 * const command = new ListExplainabilityExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListExplainabilityExportsResponse
 * //   ExplainabilityExports: [ // ExplainabilityExports
 * //     { // ExplainabilityExportSummary
 * //       ExplainabilityExportArn: "STRING_VALUE",
 * //       ExplainabilityExportName: "STRING_VALUE",
 * //       Destination: { // DataDestination
 * //         S3Config: { // S3Config
 * //           Path: "STRING_VALUE", // required
 * //           RoleArn: "STRING_VALUE", // required
 * //           KMSKeyArn: "STRING_VALUE",
 * //         },
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
 * @param ListExplainabilityExportsCommandInput - {@link ListExplainabilityExportsCommandInput}
 * @returns {@link ListExplainabilityExportsCommandOutput}
 * @see {@link ListExplainabilityExportsCommandInput} for command's `input` shape.
 * @see {@link ListExplainabilityExportsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListExplainabilityExportsCommand extends $Command
  .classBuilder<
    ListExplainabilityExportsCommandInput,
    ListExplainabilityExportsCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "ListExplainabilityExports", {})
  .n("ForecastClient", "ListExplainabilityExportsCommand")
  .sc(ListExplainabilityExports)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExplainabilityExportsRequest;
      output: ListExplainabilityExportsResponse;
    };
    sdk: {
      input: ListExplainabilityExportsCommandInput;
      output: ListExplainabilityExportsCommandOutput;
    };
  };
}
