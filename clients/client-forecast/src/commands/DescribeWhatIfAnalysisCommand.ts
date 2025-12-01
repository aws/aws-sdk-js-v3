// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import type { DescribeWhatIfAnalysisRequest, DescribeWhatIfAnalysisResponse } from "../models/models_0";
import { DescribeWhatIfAnalysis } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWhatIfAnalysisCommand}.
 */
export interface DescribeWhatIfAnalysisCommandInput extends DescribeWhatIfAnalysisRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWhatIfAnalysisCommand}.
 */
export interface DescribeWhatIfAnalysisCommandOutput extends DescribeWhatIfAnalysisResponse, __MetadataBearer {}

/**
 * <p>Describes the what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreateWhatIfAnalysis</code> request, this operation lists the following properties:</p>
 *          <ul>
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
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
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
 * import { ForecastClient, DescribeWhatIfAnalysisCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeWhatIfAnalysisCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DescribeWhatIfAnalysisRequest
 *   WhatIfAnalysisArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeWhatIfAnalysisCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWhatIfAnalysisResponse
 * //   WhatIfAnalysisName: "STRING_VALUE",
 * //   WhatIfAnalysisArn: "STRING_VALUE",
 * //   ForecastArn: "STRING_VALUE",
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   Status: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   TimeSeriesSelector: { // TimeSeriesSelector
 * //     TimeSeriesIdentifiers: { // TimeSeriesIdentifiers
 * //       DataSource: { // DataSource
 * //         S3Config: { // S3Config
 * //           Path: "STRING_VALUE", // required
 * //           RoleArn: "STRING_VALUE", // required
 * //           KMSKeyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       Schema: { // Schema
 * //         Attributes: [ // SchemaAttributes
 * //           { // SchemaAttribute
 * //             AttributeName: "STRING_VALUE",
 * //             AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 * //           },
 * //         ],
 * //       },
 * //       Format: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWhatIfAnalysisCommandInput - {@link DescribeWhatIfAnalysisCommandInput}
 * @returns {@link DescribeWhatIfAnalysisCommandOutput}
 * @see {@link DescribeWhatIfAnalysisCommandInput} for command's `input` shape.
 * @see {@link DescribeWhatIfAnalysisCommandOutput} for command's `response` shape.
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
export class DescribeWhatIfAnalysisCommand extends $Command
  .classBuilder<
    DescribeWhatIfAnalysisCommandInput,
    DescribeWhatIfAnalysisCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DescribeWhatIfAnalysis", {})
  .n("ForecastClient", "DescribeWhatIfAnalysisCommand")
  .sc(DescribeWhatIfAnalysis)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWhatIfAnalysisRequest;
      output: DescribeWhatIfAnalysisResponse;
    };
    sdk: {
      input: DescribeWhatIfAnalysisCommandInput;
      output: DescribeWhatIfAnalysisCommandOutput;
    };
  };
}
