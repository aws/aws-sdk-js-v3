// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeWhatIfForecastRequest, DescribeWhatIfForecastResponse } from "../models/models_0";
import { de_DescribeWhatIfForecastCommand, se_DescribeWhatIfForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describes the what-if forecast created using the <a>CreateWhatIfForecast</a> operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreateWhatIfForecast</code> request, this operation lists the following properties:</p>
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
export class DescribeWhatIfForecastCommand extends $Command
  .classBuilder<
    DescribeWhatIfForecastCommandInput,
    DescribeWhatIfForecastCommandOutput,
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
  .s("AmazonForecast", "DescribeWhatIfForecast", {})
  .n("ForecastClient", "DescribeWhatIfForecastCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWhatIfForecastCommand)
  .de(de_DescribeWhatIfForecastCommand)
  .build() {
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
