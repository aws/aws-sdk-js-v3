// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDatasetImportJobRequest, DescribeDatasetImportJobResponse } from "../models/models_0";
import { DescribeDatasetImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDatasetImportJobCommand}.
 */
export interface DescribeDatasetImportJobCommandInput extends DescribeDatasetImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetImportJobCommand}.
 */
export interface DescribeDatasetImportJobCommandOutput extends DescribeDatasetImportJobResponse, __MetadataBearer {}

/**
 * Describes a dataset import job created using the [CreateDatasetImportJob](https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html) operation.
 *
 * In addition to listing the parameters provided in the `CreateDatasetImportJob` request, this operation includes the following properties:
 *
 * - `CreationTime`
 * - `LastModificationTime`
 * - `DataSize`
 * - `FieldStatistics`
 * - `Status`
 * - `Message` - If an error occurred, information about the error.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeDatasetImportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeDatasetImportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * // import type { ForecastClientConfig } from "@aws-sdk/client-forecast";
 * const config = {}; // type is ForecastClientConfig
 * const client = new ForecastClient(config);
 * const input = { // DescribeDatasetImportJobRequest
 *   DatasetImportJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetImportJobResponse
 * //   DatasetImportJobName: "STRING_VALUE",
 * //   DatasetImportJobArn: "STRING_VALUE",
 * //   DatasetArn: "STRING_VALUE",
 * //   TimestampFormat: "STRING_VALUE",
 * //   TimeZone: "STRING_VALUE",
 * //   UseGeolocationForTimeZone: true || false,
 * //   GeolocationFormat: "STRING_VALUE",
 * //   DataSource: { // DataSource
 * //     S3Config: { // S3Config
 * //       Path: "STRING_VALUE", // required
 * //       RoleArn: "STRING_VALUE", // required
 * //       KMSKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   FieldStatistics: { // FieldStatistics
 * //     "<keys>": { // Statistics
 * //       Count: Number("int"),
 * //       CountDistinct: Number("int"),
 * //       CountNull: Number("int"),
 * //       CountNan: Number("int"),
 * //       Min: "STRING_VALUE",
 * //       Max: "STRING_VALUE",
 * //       Avg: Number("double"),
 * //       Stddev: Number("double"),
 * //       CountLong: Number("long"),
 * //       CountDistinctLong: Number("long"),
 * //       CountNullLong: Number("long"),
 * //       CountNanLong: Number("long"),
 * //     },
 * //   },
 * //   DataSize: Number("double"),
 * //   Status: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   Format: "STRING_VALUE",
 * //   ImportMode: "FULL" || "INCREMENTAL",
 * // };
 *
 * ```
 *
 * @param DescribeDatasetImportJobCommandInput - {@link DescribeDatasetImportJobCommandInput}
 * @returns {@link DescribeDatasetImportJobCommandOutput}
 * @see {@link DescribeDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetImportJobCommandOutput} for command's `response` shape.
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
export class DescribeDatasetImportJobCommand extends command<DescribeDatasetImportJobCommandInput, DescribeDatasetImportJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDatasetImportJob",
  DescribeDatasetImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDatasetImportJobRequest;
      output: DescribeDatasetImportJobResponse;
    };
    sdk: {
      input: DescribeDatasetImportJobCommandInput;
      output: DescribeDatasetImportJobCommandOutput;
    };
  };
}
