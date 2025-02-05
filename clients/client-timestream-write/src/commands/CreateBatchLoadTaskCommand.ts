// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateBatchLoadTaskRequest,
  CreateBatchLoadTaskRequestFilterSensitiveLog,
  CreateBatchLoadTaskResponse,
} from "../models/models_0";
import { de_CreateBatchLoadTaskCommand, se_CreateBatchLoadTaskCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBatchLoadTaskCommand}.
 */
export interface CreateBatchLoadTaskCommandInput extends CreateBatchLoadTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateBatchLoadTaskCommand}.
 */
export interface CreateBatchLoadTaskCommandOutput extends CreateBatchLoadTaskResponse, __MetadataBearer {}

/**
 * <p>Creates a new Timestream batch load task. A batch load task processes data from
 *          a CSV source in an S3 location and writes to a Timestream table. A mapping from
 *          source to target is defined in a batch load task. Errors and events are written to a report
 *          at an S3 location. For the report, if the KMS key is not specified, the
 *          report will be encrypted with an S3 managed key when <code>SSE_S3</code> is the option.
 *          Otherwise an error is thrown. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed
 *             keys</a>. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. For
 *          details, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.create-batch-load.html">code
 *             sample</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, CreateBatchLoadTaskCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, CreateBatchLoadTaskCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TimestreamWriteClient(config);
 * const input = { // CreateBatchLoadTaskRequest
 *   ClientToken: "STRING_VALUE",
 *   DataModelConfiguration: { // DataModelConfiguration
 *     DataModel: { // DataModel
 *       TimeColumn: "STRING_VALUE",
 *       TimeUnit: "MILLISECONDS" || "SECONDS" || "MICROSECONDS" || "NANOSECONDS",
 *       DimensionMappings: [ // DimensionMappings // required
 *         { // DimensionMapping
 *           SourceColumn: "STRING_VALUE",
 *           DestinationColumn: "STRING_VALUE",
 *         },
 *       ],
 *       MultiMeasureMappings: { // MultiMeasureMappings
 *         TargetMultiMeasureName: "STRING_VALUE",
 *         MultiMeasureAttributeMappings: [ // MultiMeasureAttributeMappingList // required
 *           { // MultiMeasureAttributeMapping
 *             SourceColumn: "STRING_VALUE", // required
 *             TargetMultiMeasureAttributeName: "STRING_VALUE",
 *             MeasureValueType: "DOUBLE" || "BIGINT" || "BOOLEAN" || "VARCHAR" || "TIMESTAMP",
 *           },
 *         ],
 *       },
 *       MixedMeasureMappings: [ // MixedMeasureMappingList
 *         { // MixedMeasureMapping
 *           MeasureName: "STRING_VALUE",
 *           SourceColumn: "STRING_VALUE",
 *           TargetMeasureName: "STRING_VALUE",
 *           MeasureValueType: "DOUBLE" || "BIGINT" || "VARCHAR" || "BOOLEAN" || "TIMESTAMP" || "MULTI", // required
 *           MultiMeasureAttributeMappings: [
 *             {
 *               SourceColumn: "STRING_VALUE", // required
 *               TargetMultiMeasureAttributeName: "STRING_VALUE",
 *               MeasureValueType: "DOUBLE" || "BIGINT" || "BOOLEAN" || "VARCHAR" || "TIMESTAMP",
 *             },
 *           ],
 *         },
 *       ],
 *       MeasureNameColumn: "STRING_VALUE",
 *     },
 *     DataModelS3Configuration: { // DataModelS3Configuration
 *       BucketName: "STRING_VALUE",
 *       ObjectKey: "STRING_VALUE",
 *     },
 *   },
 *   DataSourceConfiguration: { // DataSourceConfiguration
 *     DataSourceS3Configuration: { // DataSourceS3Configuration
 *       BucketName: "STRING_VALUE", // required
 *       ObjectKeyPrefix: "STRING_VALUE",
 *     },
 *     CsvConfiguration: { // CsvConfiguration
 *       ColumnSeparator: "STRING_VALUE",
 *       EscapeChar: "STRING_VALUE",
 *       QuoteChar: "STRING_VALUE",
 *       NullValue: "STRING_VALUE",
 *       TrimWhiteSpace: true || false,
 *     },
 *     DataFormat: "CSV", // required
 *   },
 *   ReportConfiguration: { // ReportConfiguration
 *     ReportS3Configuration: { // ReportS3Configuration
 *       BucketName: "STRING_VALUE", // required
 *       ObjectKeyPrefix: "STRING_VALUE",
 *       EncryptionOption: "SSE_S3" || "SSE_KMS",
 *       KmsKeyId: "STRING_VALUE",
 *     },
 *   },
 *   TargetDatabaseName: "STRING_VALUE", // required
 *   TargetTableName: "STRING_VALUE", // required
 *   RecordVersion: Number("long"),
 * };
 * const command = new CreateBatchLoadTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateBatchLoadTaskResponse
 * //   TaskId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateBatchLoadTaskCommandInput - {@link CreateBatchLoadTaskCommandInput}
 * @returns {@link CreateBatchLoadTaskCommandOutput}
 * @see {@link CreateBatchLoadTaskCommandInput} for command's `input` shape.
 * @see {@link CreateBatchLoadTaskCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Timestream was unable to process this request because it contains resource that
 *          already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          Timestream was unable to fully process this request because of an internal server
 *          error.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p> The instance quota of resource exceeded for this account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> Too many requests were made by a user and they exceeded the service quotas. The request
 *          was throttled.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> An invalid or malformed request.</p>
 *
 * @throws {@link TimestreamWriteServiceException}
 * <p>Base exception class for all service exceptions from TimestreamWrite service.</p>
 *
 * @public
 */
export class CreateBatchLoadTaskCommand extends $Command
  .classBuilder<
    CreateBatchLoadTaskCommandInput,
    CreateBatchLoadTaskCommandOutput,
    TimestreamWriteClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamWriteClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "CreateBatchLoadTask", {})
  .n("TimestreamWriteClient", "CreateBatchLoadTaskCommand")
  .f(CreateBatchLoadTaskRequestFilterSensitiveLog, void 0)
  .ser(se_CreateBatchLoadTaskCommand)
  .de(de_CreateBatchLoadTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBatchLoadTaskRequest;
      output: CreateBatchLoadTaskResponse;
    };
    sdk: {
      input: CreateBatchLoadTaskCommandInput;
      output: CreateBatchLoadTaskCommandOutput;
    };
  };
}
