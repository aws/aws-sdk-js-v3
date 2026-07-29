// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDatasetExportJobRequest, CreateDatasetExportJobResponse } from "../models/models_0";
import { CreateDatasetExportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDatasetExportJobCommand}.
 */
export interface CreateDatasetExportJobCommandInput extends CreateDatasetExportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetExportJobCommand}.
 */
export interface CreateDatasetExportJobCommandOutput extends CreateDatasetExportJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous job that exports dataset and time-series data from a workspace to Amazon
 * S3. The operation returns a jobId immediately; poll DescribeDatasetExportJob to track progress and
 * ListDatasetExportJobs to enumerate a workspace's jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateDatasetExportJobCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateDatasetExportJobCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateDatasetExportJobRequest
 *   workspaceName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   destinationS3Uri: "STRING_VALUE", // required
 *   input: { // ProcessingInput Union: only one key present
 *     timeseries: [ // TimeseriesList
 *       { // TimeseriesItem
 *         timeSeriesId: "STRING_VALUE",
 *         propertyAlias: "STRING_VALUE",
 *         trimSettings: { // TrimSettings
 *           startTime: { // TimeInNanos
 *             timeInSeconds: Number("long"), // required
 *             offsetInNanos: Number("int"),
 *           },
 *           endTime: {
 *             timeInSeconds: Number("long"), // required
 *             offsetInNanos: Number("int"),
 *           },
 *         },
 *         formatSettings: { // FormatSettings
 *           framesPerSecond: Number("int"),
 *           widthInPixels: Number("int"),
 *           heightInPixels: Number("int"),
 *         },
 *       },
 *     ],
 *     dataset: { // DatasetItem
 *       datasetId: "STRING_VALUE", // required
 *       trimSettings: {
 *         startTime: {
 *           timeInSeconds: Number("long"), // required
 *           offsetInNanos: Number("int"),
 *         },
 *         endTime: {
 *           timeInSeconds: Number("long"), // required
 *           offsetInNanos: Number("int"),
 *         },
 *       },
 *       exportDataTypes: [ // ExportDataTypeList
 *         "VIDEO" || "TELEMETRY" || "ANNOTATION",
 *       ],
 *     },
 *   },
 *   errorReportLocation: { // ExportErrorReportLocation
 *     s3Uri: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateDatasetExportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetExportJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   workspaceName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDatasetExportJobCommandInput - {@link CreateDatasetExportJobCommandInput}
 * @returns {@link CreateDatasetExportJobCommandOutput}
 * @see {@link CreateDatasetExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetExportJobCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 *
 * @public
 */
export class CreateDatasetExportJobCommand extends command<CreateDatasetExportJobCommandInput, CreateDatasetExportJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateDatasetExportJob",
  CreateDatasetExportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetExportJobRequest;
      output: CreateDatasetExportJobResponse;
    };
    sdk: {
      input: CreateDatasetExportJobCommandInput;
      output: CreateDatasetExportJobCommandOutput;
    };
  };
}
