// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeExplainabilityRequest, DescribeExplainabilityResponse } from "../models/models_0";
import { de_DescribeExplainabilityCommand, se_DescribeExplainabilityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeExplainabilityCommand}.
 */
export interface DescribeExplainabilityCommandInput extends DescribeExplainabilityRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExplainabilityCommand}.
 */
export interface DescribeExplainabilityCommandOutput extends DescribeExplainabilityResponse, __MetadataBearer {}

/**
 * <p>Describes an Explainability resource created using the <a>CreateExplainability</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeExplainabilityCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeExplainabilityCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ForecastClient(config);
 * const input = { // DescribeExplainabilityRequest
 *   ExplainabilityArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeExplainabilityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExplainabilityResponse
 * //   ExplainabilityArn: "STRING_VALUE",
 * //   ExplainabilityName: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   ExplainabilityConfig: { // ExplainabilityConfig
 * //     TimeSeriesGranularity: "ALL" || "SPECIFIC", // required
 * //     TimePointGranularity: "ALL" || "SPECIFIC", // required
 * //   },
 * //   EnableVisualization: true || false,
 * //   DataSource: { // DataSource
 * //     S3Config: { // S3Config
 * //       Path: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       KMSKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   Schema: { // Schema
 * //     Attributes: [ // SchemaAttributes
 * //       { // SchemaAttribute
 * //         AttributeName: "STRING_VALUE",
 * //         AttributeType: "string" || "integer" || "float" || "timestamp" || "geolocation",
 * //       },
 * //     ],
 * //   },
 * //   StartDateTime: "STRING_VALUE",
 * //   EndDateTime: "STRING_VALUE",
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   Message: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeExplainabilityCommandInput - {@link DescribeExplainabilityCommandInput}
 * @returns {@link DescribeExplainabilityCommandOutput}
 * @see {@link DescribeExplainabilityCommandInput} for command's `input` shape.
 * @see {@link DescribeExplainabilityCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeExplainabilityCommand extends $Command
  .classBuilder<
    DescribeExplainabilityCommandInput,
    DescribeExplainabilityCommandOutput,
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
  .s("AmazonForecast", "DescribeExplainability", {})
  .n("ForecastClient", "DescribeExplainabilityCommand")
  .f(void 0, void 0)
  .ser(se_DescribeExplainabilityCommand)
  .de(de_DescribeExplainabilityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExplainabilityRequest;
      output: DescribeExplainabilityResponse;
    };
    sdk: {
      input: DescribeExplainabilityCommandInput;
      output: DescribeExplainabilityCommandOutput;
    };
  };
}
