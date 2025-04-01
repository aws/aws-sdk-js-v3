// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateWhatIfForecastRequest,
  CreateWhatIfForecastRequestFilterSensitiveLog,
  CreateWhatIfForecastResponse,
} from "../models/models_0";
import { de_CreateWhatIfForecastCommand, se_CreateWhatIfForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWhatIfForecastCommand}.
 */
export interface CreateWhatIfForecastCommandInput extends CreateWhatIfForecastRequest {}
/**
 * @public
 *
 * The output of {@link CreateWhatIfForecastCommand}.
 */
export interface CreateWhatIfForecastCommandOutput extends CreateWhatIfForecastResponse, __MetadataBearer {}

/**
 * <p>A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each
 *       what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateWhatIfForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateWhatIfForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // CreateWhatIfForecastRequest
 *   WhatIfForecastName: "STRING_VALUE", // required
 *   WhatIfAnalysisArn: "STRING_VALUE", // required
 *   TimeSeriesTransformations: [ // TimeSeriesTransformations
 *     { // TimeSeriesTransformation
 *       Action: { // Action
 *         AttributeName: "STRING_VALUE", // required
 *         Operation: "ADD" || "SUBTRACT" || "MULTIPLY" || "DIVIDE", // required
 *         Value: Number("double"), // required
 *       },
 *       TimeSeriesConditions: [ // TimeSeriesConditions
 *         { // TimeSeriesCondition
 *           AttributeName: "STRING_VALUE", // required
 *           AttributeValue: "STRING_VALUE", // required
 *           Condition: "EQUALS" || "NOT_EQUALS" || "LESS_THAN" || "GREATER_THAN", // required
 *         },
 *       ],
 *     },
 *   ],
 *   TimeSeriesReplacementsDataSource: { // TimeSeriesReplacementsDataSource
 *     S3Config: { // S3Config
 *       Path: "STRING_VALUE", // required
 *       RoleArn: "STRING_VALUE", // required
 *       KMSKeyArn: "STRING_VALUE",
 *     },
 *     Schema: { // Schema
 *       Attributes: [ // SchemaAttributes
 *         { // SchemaAttribute
 *           AttributeName: "STRING_VALUE",
 *           AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 *         },
 *       ],
 *     },
 *     Format: "STRING_VALUE",
 *     TimestampFormat: "STRING_VALUE",
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateWhatIfForecastCommand(input);
 * const response = await client.send(command);
 * // { // CreateWhatIfForecastResponse
 * //   WhatIfForecastArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWhatIfForecastCommandInput - {@link CreateWhatIfForecastCommandInput}
 * @returns {@link CreateWhatIfForecastCommandOutput}
 * @see {@link CreateWhatIfForecastCommandInput} for command's `input` shape.
 * @see {@link CreateWhatIfForecastCommandOutput} for command's `response` shape.
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
export class CreateWhatIfForecastCommand extends $Command
  .classBuilder<
    CreateWhatIfForecastCommandInput,
    CreateWhatIfForecastCommandOutput,
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
  .s("AmazonForecast", "CreateWhatIfForecast", {})
  .n("ForecastClient", "CreateWhatIfForecastCommand")
  .f(CreateWhatIfForecastRequestFilterSensitiveLog, void 0)
  .ser(se_CreateWhatIfForecastCommand)
  .de(de_CreateWhatIfForecastCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWhatIfForecastRequest;
      output: CreateWhatIfForecastResponse;
    };
    sdk: {
      input: CreateWhatIfForecastCommandInput;
      output: CreateWhatIfForecastCommandOutput;
    };
  };
}
