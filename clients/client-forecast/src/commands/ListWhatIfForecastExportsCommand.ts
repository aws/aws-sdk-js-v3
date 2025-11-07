// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { ListWhatIfForecastExportsRequest, ListWhatIfForecastExportsResponse } from "../models/models_0";
import { ListWhatIfForecastExports } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWhatIfForecastExportsCommand}.
 */
export interface ListWhatIfForecastExportsCommandInput extends ListWhatIfForecastExportsRequest {}
/**
 * @public
 *
 * The output of {@link ListWhatIfForecastExportsCommand}.
 */
export interface ListWhatIfForecastExportsCommandOutput extends ListWhatIfForecastExportsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of what-if forecast exports created using the <a>CreateWhatIfForecastExport</a> operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the <a>DescribeWhatIfForecastExport</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListWhatIfForecastExportsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListWhatIfForecastExportsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // ListWhatIfForecastExportsRequest
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
 * const command = new ListWhatIfForecastExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListWhatIfForecastExportsResponse
 * //   WhatIfForecastExports: [ // WhatIfForecastExports
 * //     { // WhatIfForecastExportSummary
 * //       WhatIfForecastExportArn: "STRING_VALUE",
 * //       WhatIfForecastArns: [ // WhatIfForecastArnListForExport
 * //         "STRING_VALUE",
 * //       ],
 * //       WhatIfForecastExportName: "STRING_VALUE",
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
 * @param ListWhatIfForecastExportsCommandInput - {@link ListWhatIfForecastExportsCommandInput}
 * @returns {@link ListWhatIfForecastExportsCommandOutput}
 * @see {@link ListWhatIfForecastExportsCommandInput} for command's `input` shape.
 * @see {@link ListWhatIfForecastExportsCommandOutput} for command's `response` shape.
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
export class ListWhatIfForecastExportsCommand extends $Command
  .classBuilder<
    ListWhatIfForecastExportsCommandInput,
    ListWhatIfForecastExportsCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "ListWhatIfForecastExports", {})
  .n("ForecastClient", "ListWhatIfForecastExportsCommand")
  .sc(ListWhatIfForecastExports)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWhatIfForecastExportsRequest;
      output: ListWhatIfForecastExportsResponse;
    };
    sdk: {
      input: ListWhatIfForecastExportsCommandInput;
      output: ListWhatIfForecastExportsCommandOutput;
    };
  };
}
