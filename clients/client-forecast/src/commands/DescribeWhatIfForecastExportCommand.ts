// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import type { DescribeWhatIfForecastExportRequest, DescribeWhatIfForecastExportResponse } from "../models/models_0";
import { DescribeWhatIfForecastExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWhatIfForecastExportCommand}.
 */
export interface DescribeWhatIfForecastExportCommandInput extends DescribeWhatIfForecastExportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWhatIfForecastExportCommand}.
 */
export interface DescribeWhatIfForecastExportCommandOutput extends DescribeWhatIfForecastExportResponse, __MetadataBearer {}

/**
 * <p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p>
 *          <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p>
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
 * import { ForecastClient, DescribeWhatIfForecastExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeWhatIfForecastExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DescribeWhatIfForecastExportRequest
 *   WhatIfForecastExportArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeWhatIfForecastExportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWhatIfForecastExportResponse
 * //   WhatIfForecastExportArn: "STRING_VALUE",
 * //   WhatIfForecastExportName: "STRING_VALUE",
 * //   WhatIfForecastArns: [ // LongArnList
 * //     "STRING_VALUE",
 * //   ],
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
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   Format: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWhatIfForecastExportCommandInput - {@link DescribeWhatIfForecastExportCommandInput}
 * @returns {@link DescribeWhatIfForecastExportCommandOutput}
 * @see {@link DescribeWhatIfForecastExportCommandInput} for command's `input` shape.
 * @see {@link DescribeWhatIfForecastExportCommandOutput} for command's `response` shape.
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
export class DescribeWhatIfForecastExportCommand extends $Command
  .classBuilder<
    DescribeWhatIfForecastExportCommandInput,
    DescribeWhatIfForecastExportCommandOutput,
    ForecastClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ForecastClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonForecast", "DescribeWhatIfForecastExport", {})
  .n("ForecastClient", "DescribeWhatIfForecastExportCommand")
  .sc(DescribeWhatIfForecastExport$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWhatIfForecastExportRequest;
      output: DescribeWhatIfForecastExportResponse;
    };
    sdk: {
      input: DescribeWhatIfForecastExportCommandInput;
      output: DescribeWhatIfForecastExportCommandOutput;
    };
  };
}
