// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWhatIfForecastExportRequest, CreateWhatIfForecastExportResponse } from "../models/models_0";
import { CreateWhatIfForecastExport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Exports a forecast created by the CreateWhatIfForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:
 *
 * `≈<ForecastExportJobName>_<ExportTimestamp>_<PartNumber>`
 *
 * The <ExportTimestamp> component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).
 *
 * You must specify a DataDestination object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles.
 *
 * For more information, see howitworks-forecast.
 *
 * To get a list of all your what-if forecast export jobs, use the ListWhatIfForecastExports operation.
 *
 * > **Note:** The `Status` of the forecast export job must be `ACTIVE` before you can access the forecast in your Amazon S3 bucket. To get the status, use the DescribeWhatIfForecastExport operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateWhatIfForecastExportCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateWhatIfForecastExportCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
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
 *
 * We can't process the request because it includes an invalid value or a value that exceeds the valid range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of resources per account has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * There is already a resource with this name. Try again with a different name.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
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
export class CreateWhatIfForecastExportCommand extends command<CreateWhatIfForecastExportCommandInput, CreateWhatIfForecastExportCommandOutput>(
  _ep0,
  _mw0,
  "CreateWhatIfForecastExport",
  CreateWhatIfForecastExport$
) {
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
