// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeWhatIfForecastRequest, DescribeWhatIfForecastResponse } from "../models/models_0";
import { DescribeWhatIfForecast$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeWhatIfForecastCommand}.
 */
export interface DescribeWhatIfForecastCommandInput extends DescribeWhatIfForecastRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWhatIfForecastCommand}.
 */
export interface DescribeWhatIfForecastCommandOutput extends DescribeWhatIfForecastResponse, __MetadataBearer {}

/**
 * Describes the what-if forecast created using the CreateWhatIfForecast operation.
 *
 * In addition to listing the properties provided in the `CreateWhatIfForecast` request, this operation lists the following properties:
 *
 * - `CreationTime`
 * - `LastModificationTime`
 * - `Message` - If an error occurred, information about the error.
 * - `Status`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeWhatIfForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeWhatIfForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DescribeWhatIfForecastRequest
 *   WhatIfForecastArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeWhatIfForecastCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWhatIfForecastResponse
 * //   WhatIfForecastName: "STRING_VALUE",
 * //   WhatIfForecastArn: "STRING_VALUE",
 * //   WhatIfAnalysisArn: "STRING_VALUE",
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   Status: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   TimeSeriesTransformations: [ // TimeSeriesTransformations
 * //     { // TimeSeriesTransformation
 * //       Action: { // Action
 * //         AttributeName: "STRING_VALUE", // required
 * //         Operation: "ADD" || "SUBTRACT" || "MULTIPLY" || "DIVIDE", // required
 * //         Value: Number("double"), // required
 * //       },
 * //       TimeSeriesConditions: [ // TimeSeriesConditions
 * //         { // TimeSeriesCondition
 * //           AttributeName: "STRING_VALUE", // required
 * //           AttributeValue: "STRING_VALUE", // required
 * //           Condition: "EQUALS" || "NOT_EQUALS" || "LESS_THAN" || "GREATER_THAN", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   TimeSeriesReplacementsDataSource: { // TimeSeriesReplacementsDataSource
 * //     S3Config: { // S3Config
 * //       Path: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       KMSKeyArn: "STRING_VALUE",
 * //     },
 * //     Schema: { // Schema
 * //       Attributes: [ // SchemaAttributes
 * //         { // SchemaAttribute
 * //           AttributeName: "STRING_VALUE",
 * //           AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 * //         },
 * //       ],
 * //     },
 * //     Format: "STRING_VALUE",
 * //     TimestampFormat: "STRING_VALUE",
 * //   },
 * //   ForecastTypes: [ // ForecastTypes
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeWhatIfForecastCommandInput - {@link DescribeWhatIfForecastCommandInput}
 * @returns {@link DescribeWhatIfForecastCommandOutput}
 * @see {@link DescribeWhatIfForecastCommandInput} for command's `input` shape.
 * @see {@link DescribeWhatIfForecastCommandOutput} for command's `response` shape.
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
export class DescribeWhatIfForecastCommand extends command<DescribeWhatIfForecastCommandInput, DescribeWhatIfForecastCommandOutput>(
  _ep0,
  _mw0,
  "DescribeWhatIfForecast",
  DescribeWhatIfForecast$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWhatIfForecastRequest;
      output: DescribeWhatIfForecastResponse;
    };
    sdk: {
      input: DescribeWhatIfForecastCommandInput;
      output: DescribeWhatIfForecastCommandOutput;
    };
  };
}
