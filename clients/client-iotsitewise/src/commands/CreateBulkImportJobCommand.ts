// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { CreateBulkImportJobRequest, CreateBulkImportJobResponse } from "../models/models_0";
import { de_CreateBulkImportJobCommand, se_CreateBulkImportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a
 *         bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
 *          <important>
 *             <p>Before you create a bulk import job, you must enable IoT SiteWise warm tier or IoT SiteWise cold tier.
 *         For more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p>
 *             <p>Bulk import is designed to store historical data to IoT SiteWise. It does not trigger
 *         computations or notifications on IoT SiteWise warm or cold tier storage.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateBulkImportJobCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateBulkImportJobCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateBulkImportJobRequest
 *   jobName: "STRING_VALUE", // required
 *   jobRoleArn: "STRING_VALUE", // required
 *   files: [ // Files // required
 *     { // File
 *       bucket: "STRING_VALUE", // required
 *       key: "STRING_VALUE", // required
 *       versionId: "STRING_VALUE",
 *     },
 *   ],
 *   errorReportLocation: { // ErrorReportLocation
 *     bucket: "STRING_VALUE", // required
 *     prefix: "STRING_VALUE", // required
 *   },
 *   jobConfiguration: { // JobConfiguration
 *     fileFormat: { // FileFormat
 *       csv: { // Csv
 *         columnNames: [ // ColumnNames // required
 *           "ALIAS" || "ASSET_ID" || "PROPERTY_ID" || "DATA_TYPE" || "TIMESTAMP_SECONDS" || "TIMESTAMP_NANO_OFFSET" || "QUALITY" || "VALUE",
 *         ],
 *       },
 *       parquet: {},
 *     },
 *   },
 *   adaptiveIngestion: true || false,
 *   deleteFilesAfterImport: true || false,
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've reached the limit for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateBulkImportJobCommand extends $Command
  .classBuilder<
    CreateBulkImportJobCommandInput,
    CreateBulkImportJobCommandOutput,
    IoTSiteWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTSiteWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTSiteWise", "CreateBulkImportJob", {})
  .n("IoTSiteWiseClient", "CreateBulkImportJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateBulkImportJobCommand)
  .de(de_CreateBulkImportJobCommand)
  .build() {
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
