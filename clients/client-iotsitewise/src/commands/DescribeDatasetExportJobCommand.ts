// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDatasetExportJobRequest, DescribeDatasetExportJobResponse } from "../models/models_0";
import { DescribeDatasetExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDatasetExportJobCommand}.
 */
export interface DescribeDatasetExportJobCommandInput extends DescribeDatasetExportJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDatasetExportJobCommand}.
 */
export interface DescribeDatasetExportJobCommandOutput extends DescribeDatasetExportJobResponse, __MetadataBearer {}

/**
 * Retrieves information about a dataset export job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeDatasetExportJobCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeDatasetExportJobCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeDatasetExportJobRequest
 *   workspaceName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDatasetExportJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDatasetExportJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   workspaceName: "STRING_VALUE", // required
 * //   status: "SUBMITTED" || "RUNNING" || "COMPLETED" || "COMPLETED_WITH_ERRORS" || "FAILED", // required
 * //   startedAt: new Date("TIMESTAMP"), // required
 * //   completedAt: new Date("TIMESTAMP"),
 * //   destinationS3Uri: "STRING_VALUE", // required
 * //   errorReportLocation: { // ExportErrorReportLocation
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * //   input: { // ProcessingInput Union: only one key present
 * //     timeseries: [ // TimeseriesList
 * //       { // TimeseriesItem
 * //         timeSeriesId: "STRING_VALUE",
 * //         propertyAlias: "STRING_VALUE",
 * //         trimSettings: { // TrimSettings
 * //           startTime: { // TimeInNanos
 * //             timeInSeconds: Number("long"), // required
 * //             offsetInNanos: Number("int"),
 * //           },
 * //           endTime: {
 * //             timeInSeconds: Number("long"), // required
 * //             offsetInNanos: Number("int"),
 * //           },
 * //         },
 * //         formatSettings: { // FormatSettings
 * //           framesPerSecond: Number("int"),
 * //           widthInPixels: Number("int"),
 * //           heightInPixels: Number("int"),
 * //         },
 * //       },
 * //     ],
 * //     dataset: { // DatasetItem
 * //       datasetId: "STRING_VALUE", // required
 * //       trimSettings: {
 * //         startTime: {
 * //           timeInSeconds: Number("long"), // required
 * //           offsetInNanos: Number("int"),
 * //         },
 * //         endTime: {
 * //           timeInSeconds: Number("long"), // required
 * //           offsetInNanos: Number("int"),
 * //         },
 * //       },
 * //       exportDataTypes: [ // ExportDataTypeList
 * //         "VIDEO" || "TELEMETRY" || "ANNOTATION",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDatasetExportJobCommandInput - {@link DescribeDatasetExportJobCommandInput}
 * @returns {@link DescribeDatasetExportJobCommandOutput}
 * @see {@link DescribeDatasetExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetExportJobCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class DescribeDatasetExportJobCommand extends command<DescribeDatasetExportJobCommandInput, DescribeDatasetExportJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDatasetExportJob",
  DescribeDatasetExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDatasetExportJobRequest;
      output: DescribeDatasetExportJobResponse;
    };
    sdk: {
      input: DescribeDatasetExportJobCommandInput;
      output: DescribeDatasetExportJobCommandOutput;
    };
  };
}
