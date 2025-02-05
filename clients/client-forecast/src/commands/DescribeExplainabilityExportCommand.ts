// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeExplainabilityExportRequest, DescribeExplainabilityExportResponse } from "../models/models_0";
import {
  de_DescribeExplainabilityExportCommand,
  se_DescribeExplainabilityExportCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeExplainabilityExportCommand}.
 */
export interface DescribeExplainabilityExportCommandInput extends DescribeExplainabilityExportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExplainabilityExportCommand}.
 */
export interface DescribeExplainabilityExportCommandOutput
  extends DescribeExplainabilityExportResponse,
    __MetadataBearer {}

/**
 * <p>Describes an Explainability export created using the <a>CreateExplainabilityExport</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeExplainabilityExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeExplainabilityExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ForecastClient(config);
 * const input = { // DescribeExplainabilityExportRequest
 *   ExplainabilityExportArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeExplainabilityExportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExplainabilityExportResponse
 * //   ExplainabilityExportArn: "STRING_VALUE",
 * //   ExplainabilityExportName: "STRING_VALUE",
 * //   ExplainabilityArn: "STRING_VALUE",
 * //   Destination: { // DataDestination
 * //     S3Config: { // S3Config
 * //       Path: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       KMSKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   Message: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   Format: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeExplainabilityExportCommandInput - {@link DescribeExplainabilityExportCommandInput}
 * @returns {@link DescribeExplainabilityExportCommandOutput}
 * @see {@link DescribeExplainabilityExportCommandInput} for command's `input` shape.
 * @see {@link DescribeExplainabilityExportCommandOutput} for command's `response` shape.
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
export class DescribeExplainabilityExportCommand extends $Command
  .classBuilder<
    DescribeExplainabilityExportCommandInput,
    DescribeExplainabilityExportCommandOutput,
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
  .s("AmazonForecast", "DescribeExplainabilityExport", {})
  .n("ForecastClient", "DescribeExplainabilityExportCommand")
  .f(void 0, void 0)
  .ser(se_DescribeExplainabilityExportCommand)
  .de(de_DescribeExplainabilityExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExplainabilityExportRequest;
      output: DescribeExplainabilityExportResponse;
    };
    sdk: {
      input: DescribeExplainabilityExportCommandInput;
      output: DescribeExplainabilityExportCommandOutput;
    };
  };
}
