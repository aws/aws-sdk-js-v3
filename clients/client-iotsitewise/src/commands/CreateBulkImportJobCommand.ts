// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBulkImportJobRequest, CreateBulkImportJobResponse } from "../models/models_0";
import { CreateBulkImportJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBulkImportJobCommand}.
 */
export interface CreateBulkImportJobCommandInput extends CreateBulkImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateBulkImportJobCommand}.
 */
export interface CreateBulkImportJobCommandOutput extends CreateBulkImportJobResponse, __MetadataBearer {}

/**
 * Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see [Create a bulk import job (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html) in the *Amazon Simple Storage Service User Guide*.
 *
 * > **Important:**
 * >
 * > Before you create a bulk import job that ingests data into time series outside of a workspace, you must enable IoT SiteWise warm tier or IoT SiteWise cold tier. For more information about how to configure storage settings, see [PutStorageConfiguration](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html). This requirement doesn't apply to bulk import jobs that ingest data into a session dataset in a workspace (jobs that specify a `workspaceName` and `datasetId`). Those jobs don't use IoT SiteWise warm or cold tier storage.
 * >
 * > Bulk import is designed to store historical data to IoT SiteWise.
 * >
 * > - Newly ingested data in the hot tier triggers notifications and computations.
 * > - After data moves from the hot tier to the warm or cold tier based on retention settings, it does not trigger computations or notifications.
 * > - Data older than 7 days does not trigger computations or notifications.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateBulkImportJobCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateBulkImportJobCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateBulkImportJobRequest
 *   jobName: "STRING_VALUE", // required
 *   jobRoleArn: "STRING_VALUE", // required
 *   files: [ // Files // required
 *     { // File
 *       bucket: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *       versionId: "STRING_VALUE",
 *       alias: "STRING_VALUE",
 *       startTime: { // TimeInNanos
 *         timeInSeconds: Number("long"), // required
 *         offsetInNanos: Number("int"),
 *       },
 *       fileFormat: { // FileFormat
 *         csv: { // Csv
 *           columnNames: [ // ColumnNames // required
 *             "ALIAS" || "ASSET_ID" || "PROPERTY_ID" || "DATA_TYPE" || "TIMESTAMP_SECONDS" || "TIMESTAMP_NANO_OFFSET" || "QUALITY" || "VALUE",
 *           ],
 *         },
 *         parquet: {},
 *         mp4: {},
 *         annotation: {},
 *       },
 *     },
 *   ],
 *   errorReportLocation: { // ErrorReportLocation
 *     bucket: "STRING_VALUE", // required
 *     prefix: "STRING_VALUE", // required
 *   },
 *   jobConfiguration: { // JobConfiguration
 *     fileFormat: {
 *       csv: {
 *         columnNames: [ // required
 *           "ALIAS" || "ASSET_ID" || "PROPERTY_ID" || "DATA_TYPE" || "TIMESTAMP_SECONDS" || "TIMESTAMP_NANO_OFFSET" || "QUALITY" || "VALUE",
 *         ],
 *       },
 *       parquet: {},
 *       mp4: {},
 *       annotation: {},
 *     },
 *   },
 *   adaptiveIngestion: true || false,
 *   deleteFilesAfterImport: true || false,
 *   datasetId: "STRING_VALUE",
 *   workspaceName: "STRING_VALUE",
 * };
 * const command = new CreateBulkImportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateBulkImportJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   jobName: "STRING_VALUE", // required
 * //   jobStatus: "PENDING" || "CANCELLED" || "RUNNING" || "COMPLETED" || "FAILED" || "COMPLETED_WITH_FAILURES", // required
 * // };
 *
 * ```
 *
 * @param CreateBulkImportJobCommandInput - {@link CreateBulkImportJobCommandInput}
 * @returns {@link CreateBulkImportJobCommandOutput}
 * @see {@link CreateBulkImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateBulkImportJobCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *
 * Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You've reached the quota for a resource. For example, this can occur if you're trying to associate more than the allowed number of child assets or attempting to create more than the allowed number of properties for an asset model.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
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
export class CreateBulkImportJobCommand extends command<CreateBulkImportJobCommandInput, CreateBulkImportJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateBulkImportJob",
  CreateBulkImportJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBulkImportJobRequest;
      output: CreateBulkImportJobResponse;
    };
    sdk: {
      input: CreateBulkImportJobCommandInput;
      output: CreateBulkImportJobCommandOutput;
    };
  };
}
