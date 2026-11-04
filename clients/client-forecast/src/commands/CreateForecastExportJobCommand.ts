// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateForecastExportJobRequest, CreateForecastExportJobResponse } from "../models/models_0";
import { CreateForecastExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateForecastExportJobCommand}.
 */
export interface CreateForecastExportJobCommandInput extends CreateForecastExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateForecastExportJobCommand}.
 */
export interface CreateForecastExportJobCommandOutput extends CreateForecastExportJobResponse, __MetadataBearer {}

/**
 * Exports a forecast created by the CreateForecast operation to your Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:
 *
 * <ForecastExportJobName>_<ExportTimestamp>_<PartNumber>
 *
 * where the <ExportTimestamp> component is in Java SimpleDateFormat (yyyy-MM-ddTHH-mm-ssZ).
 *
 * You must specify a DataDestination object that includes an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see aws-forecast-iam-roles.
 *
 * For more information, see howitworks-forecast.
 *
 * To get a list of all your forecast export jobs, use the ListForecastExportJobs operation.
 *
 * > **Note:** The `Status` of the forecast export job must be `ACTIVE` before you can access the forecast in your Amazon S3 bucket. To get the status, use the DescribeForecastExportJob operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateForecastExportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateForecastExportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // CreateForecastExportJobRequest
 *   ForecastExportJobName: "STRING_VALUE", // required
 *   ForecastArn: "STRING_VALUE", // required
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
 * const command = new CreateForecastExportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateForecastExportJobResponse
 * //   ForecastExportJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateForecastExportJobCommandInput - {@link CreateForecastExportJobCommandInput}
 * @returns {@link CreateForecastExportJobCommandOutput}
 * @see {@link CreateForecastExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateForecastExportJobCommandOutput} for command's `response` shape.
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
export class CreateForecastExportJobCommand extends command<CreateForecastExportJobCommandInput, CreateForecastExportJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateForecastExportJob",
  CreateForecastExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateForecastExportJobRequest;
      output: CreateForecastExportJobResponse;
    };
    sdk: {
      input: CreateForecastExportJobCommandInput;
      output: CreateForecastExportJobCommandOutput;
    };
  };
}
