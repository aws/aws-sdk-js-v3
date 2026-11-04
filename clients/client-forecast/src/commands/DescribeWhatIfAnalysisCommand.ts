// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeWhatIfAnalysisRequest, DescribeWhatIfAnalysisResponse } from "../models/models_0";
import { DescribeWhatIfAnalysis$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the what-if analysis created using the CreateWhatIfAnalysis operation.
 *
 * In addition to listing the properties provided in the `CreateWhatIfAnalysis` request, this operation lists the following properties:
 *
 * - `CreationTime`
 * - `LastModificationTime`
 * - `Message` - If an error occurred, information about the error.
 * - `Status`
 *
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
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try again.
 *
 * @throws {@link ForecastServiceException}
 *
 * Base exception class for all service exceptions from Forecast service.
 *
 * @public
 */
export class DescribeWhatIfAnalysisCommand extends command<DescribeWhatIfAnalysisCommandInput, DescribeWhatIfAnalysisCommandOutput>(
  _ep0,
  _mw0,
  "DescribeWhatIfAnalysis",
  DescribeWhatIfAnalysis$
) {
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
