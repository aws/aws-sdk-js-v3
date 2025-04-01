// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeForecastRequest, DescribeForecastResponse } from "../models/models_0";
import { de_DescribeForecastCommand, se_DescribeForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeForecastCommand}.
 */
export interface DescribeForecastCommandInput extends DescribeForecastRequest {}
/**
 * @public
 *
 * The output of {@link DescribeForecastCommand}.
 */
export interface DescribeForecastCommandOutput extends DescribeForecastResponse, __MetadataBearer {}

/**
 * <p>Describes a forecast created using the <a>CreateForecast</a> operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreateForecast</code> request,
 *       this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DatasetGroupArn</code> - The dataset group that provided the training
 *           data.</p>
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
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // DescribeForecastRequest
 *   ForecastArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeForecastCommand(input);
 * const response = await client.send(command);
 * // { // DescribeForecastResponse
 * //   ForecastArn: "STRING_VALUE",
 * //   ForecastName: "STRING_VALUE",
 * //   ForecastTypes: [ // ForecastTypes
 * //     "STRING_VALUE",
 * //   ],
 * //   PredictorArn: "STRING_VALUE",
 * //   DatasetGroupArn: "STRING_VALUE",
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
 * @param DescribeForecastCommandInput - {@link DescribeForecastCommandInput}
 * @returns {@link DescribeForecastCommandOutput}
 * @see {@link DescribeForecastCommandInput} for command's `input` shape.
 * @see {@link DescribeForecastCommandOutput} for command's `response` shape.
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
export class DescribeForecastCommand extends $Command
  .classBuilder<
    DescribeForecastCommandInput,
    DescribeForecastCommandOutput,
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
  .s("AmazonForecast", "DescribeForecast", {})
  .n("ForecastClient", "DescribeForecastCommand")
  .f(void 0, void 0)
  .ser(se_DescribeForecastCommand)
  .de(de_DescribeForecastCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeForecastRequest;
      output: DescribeForecastResponse;
    };
    sdk: {
      input: DescribeForecastCommandInput;
      output: DescribeForecastCommandOutput;
    };
  };
}
