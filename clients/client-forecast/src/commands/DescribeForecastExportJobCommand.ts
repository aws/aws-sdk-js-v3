// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeForecastExportJobRequest, DescribeForecastExportJobResponse } from "../models/models_0";
import { DescribeForecastExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeForecastExportJobCommand}.
 */
export interface DescribeForecastExportJobCommandInput extends DescribeForecastExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeForecastExportJobCommand}.
 */
export interface DescribeForecastExportJobCommandOutput extends DescribeForecastExportJobResponse, __MetadataBearer {}

/**
 * Describes a forecast export job created using the CreateForecastExportJob operation.
 *
 * In addition to listing the properties provided by the user in the `CreateForecastExportJob` request, this operation lists the following properties:
 *
 * - `CreationTime`
 * - `LastModificationTime`
 * - `Status`
 * - `Message` - If an error occurred, information about the error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeForecastExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeForecastExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DescribeForecastExportJobRequest
 *   ForecastExportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeForecastExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeForecastExportJobResponse
 * //   ForecastExportJobArn: "STRING_VALUE",
 * //   ForecastExportJobName: "STRING_VALUE",
 * //   ForecastArn: "STRING_VALUE",
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
 * @param DescribeForecastExportJobCommandInput - {@link DescribeForecastExportJobCommandInput}
 * @returns {@link DescribeForecastExportJobCommandOutput}
 * @see {@link DescribeForecastExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeForecastExportJobCommandOutput} for command's `response` shape.
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
export class DescribeForecastExportJobCommand extends command<DescribeForecastExportJobCommandInput, DescribeForecastExportJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeForecastExportJob",
  DescribeForecastExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeForecastExportJobRequest;
      output: DescribeForecastExportJobResponse;
    };
    sdk: {
      input: DescribeForecastExportJobCommandInput;
      output: DescribeForecastExportJobCommandOutput;
    };
  };
}
