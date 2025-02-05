// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateWhatIfForecastExportRequest,
  CreateWhatIfForecastExportRequestFilterSensitiveLog,
  CreateWhatIfForecastExportResponse,
} from "../models/models_0";
import { de_CreateWhatIfForecastExportCommand, se_CreateWhatIfForecastExportCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWhatIfForecastExportCommand}.
 */
export interface CreateWhatIfForecastExportCommandInput extends CreateWhatIfForecastExportRequest {}
/**
 * @public
 *
 * The output of {@link CreateWhatIfForecastExportCommand}.
 */
export interface CreateWhatIfForecastExportCommandOutput extends CreateWhatIfForecastExportResponse, __MetadataBearer {}

/**
 * <p>Exports a forecast created by the <a>CreateWhatIfForecast</a> operation to your
 *       Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p>
 *          <p>
 *             <code>≈<ForecastExportJobName>_<ExportTimestamp>_<PartNumber></code>
 *          </p>
 *          <p>The <ExportTimestamp> component is in Java SimpleDateFormat
 *       (yyyy-MM-ddTHH-mm-ssZ).</p>
 *          <p>You must specify a <a>DataDestination</a> object that includes an Identity and Access Management
 *       (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see
 *       <a>aws-forecast-iam-roles</a>.</p>
 *          <p>For more information, see <a>howitworks-forecast</a>.</p>
 *          <p>To get a list of all your what-if forecast export jobs, use the <a>ListWhatIfForecastExports</a>
 *       operation.</p>
 *          <note>
 *             <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before
 *         you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateWhatIfForecastExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateWhatIfForecastExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ForecastClient(config);
 * const input = { // CreateWhatIfForecastExportRequest
 *   WhatIfForecastExportName: "STRING_VALUE", // required
 *   WhatIfForecastArns: [ // WhatIfForecastArnListForExport // required
 *     "STRING_VALUE",
 *   ],
 *   Destination: { // DataDestination
 *     S3Config: { // S3Config
 *       Path: "STRING_VALUE", // required
 *       RoleArn: "STRING_VALUE", // required
 *       KMSKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Format: "STRING_VALUE",
 * };
 * const command = new CreateWhatIfForecastExportCommand(input);
 * const response = await client.send(command);
 * // { // CreateWhatIfForecastExportResponse
 * //   WhatIfForecastExportArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWhatIfForecastExportCommandInput - {@link CreateWhatIfForecastExportCommandInput}
 * @returns {@link CreateWhatIfForecastExportCommandOutput}
 * @see {@link CreateWhatIfForecastExportCommandInput} for command's `input` shape.
 * @see {@link CreateWhatIfForecastExportCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateWhatIfForecastExportCommand extends $Command
  .classBuilder<
    CreateWhatIfForecastExportCommandInput,
    CreateWhatIfForecastExportCommandOutput,
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
  .s("AmazonForecast", "CreateWhatIfForecastExport", {})
  .n("ForecastClient", "CreateWhatIfForecastExportCommand")
  .f(CreateWhatIfForecastExportRequestFilterSensitiveLog, void 0)
  .ser(se_CreateWhatIfForecastExportCommand)
  .de(de_CreateWhatIfForecastExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWhatIfForecastExportRequest;
      output: CreateWhatIfForecastExportResponse;
    };
    sdk: {
      input: CreateWhatIfForecastExportCommandInput;
      output: CreateWhatIfForecastExportCommandOutput;
    };
  };
}
