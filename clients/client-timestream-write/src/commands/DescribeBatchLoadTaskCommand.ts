// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBatchLoadTaskRequest, DescribeBatchLoadTaskResponse } from "../models/models_0";
import { de_DescribeBatchLoadTaskCommand, se_DescribeBatchLoadTaskCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBatchLoadTaskCommand}.
 */
export interface DescribeBatchLoadTaskCommandInput extends DescribeBatchLoadTaskRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBatchLoadTaskCommand}.
 */
export interface DescribeBatchLoadTaskCommandOutput extends DescribeBatchLoadTaskResponse, __MetadataBearer {}

/**
 * <p>Returns information about the batch load task, including configurations, mappings,
 *          progress, and other details. <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Service quotas apply</a>. See
 *             <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.describe-batch-load.html">code
 *             sample</a> for details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamWriteClient, DescribeBatchLoadTaskCommand } from "@aws-sdk/client-timestream-write"; // ES Modules import
 * // const { TimestreamWriteClient, DescribeBatchLoadTaskCommand } = require("@aws-sdk/client-timestream-write"); // CommonJS import
 * // import type { TimestreamWriteClientConfig } from "@aws-sdk/client-timestream-write";
 * const config = {}; // type is TimestreamWriteClientConfig
 * const client = new TimestreamWriteClient(config);
 * const input = { // DescribeBatchLoadTaskRequest
 *   TaskId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBatchLoadTaskCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBatchLoadTaskResponse
 * //   BatchLoadTaskDescription: { // BatchLoadTaskDescription
 * //     TaskId: "STRING_VALUE",
 * //     ErrorMessage: "STRING_VALUE",
 * //     DataSourceConfiguration: { // DataSourceConfiguration
 * //       DataSourceS3Configuration: { // DataSourceS3Configuration
 * //         BucketName: "STRING_VALUE", // required
 * //         ObjectKeyPrefix: "STRING_VALUE",
 * //       },
 * //       CsvConfiguration: { // CsvConfiguration
 * //         ColumnSeparator: "STRING_VALUE",
 * //         EscapeChar: "STRING_VALUE",
 * //         QuoteChar: "STRING_VALUE",
 * //         NullValue: "STRING_VALUE",
 * //         TrimWhiteSpace: true || false,
 * //       },
 * //       DataFormat: "CSV", // required
 * //     },
 * //     ProgressReport: { // BatchLoadProgressReport
 * //       RecordsProcessed: Number("long"),
 * //       RecordsIngested: Number("long"),
 * //       ParseFailures: Number("long"),
 * //       RecordIngestionFailures: Number("long"),
 * //       FileFailures: Number("long"),
 * //       BytesMetered: Number("long"),
 * //     },
 * //     ReportConfiguration: { // ReportConfiguration
 * //       ReportS3Configuration: { // ReportS3Configuration
 * //         BucketName: "STRING_VALUE", // required
 * //         ObjectKeyPrefix: "STRING_VALUE",
 * //         EncryptionOption: "SSE_S3" || "SSE_KMS",
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //     },
 * //     DataModelConfiguration: { // DataModelConfiguration
 * //       DataModel: { // DataModel
 * //         TimeColumn: "STRING_VALUE",
 * //         TimeUnit: "MILLISECONDS" || "SECONDS" || "MICROSECONDS" || "NANOSECONDS",
 * //         DimensionMappings: [ // DimensionMappings // required
 * //           { // DimensionMapping
 * //             SourceColumn: "STRING_VALUE",
 * //             DestinationColumn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         MultiMeasureMappings: { // MultiMeasureMappings
 * //           TargetMultiMeasureName: "STRING_VALUE",
 * //           MultiMeasureAttributeMappings: [ // MultiMeasureAttributeMappingList // required
 * //             { // MultiMeasureAttributeMapping
 * //               SourceColumn: "STRING_VALUE", // required
 * //               TargetMultiMeasureAttributeName: "STRING_VALUE",
 * //               MeasureValueType: "DOUBLE" || "BIGINT" || "BOOLEAN" || "VARCHAR" || "TIMESTAMP",
 * //             },
 * //           ],
 * //         },
 * //         MixedMeasureMappings: [ // MixedMeasureMappingList
 * //           { // MixedMeasureMapping
 * //             MeasureName: "STRING_VALUE",
 * //             SourceColumn: "STRING_VALUE",
 * //             TargetMeasureName: "STRING_VALUE",
 * //             MeasureValueType: "DOUBLE" || "BIGINT" || "VARCHAR" || "BOOLEAN" || "TIMESTAMP" || "MULTI", // required
 * //             MultiMeasureAttributeMappings: [
 * //               {
 * //                 SourceColumn: "STRING_VALUE", // required
 * //                 TargetMultiMeasureAttributeName: "STRING_VALUE",
 * //                 MeasureValueType: "DOUBLE" || "BIGINT" || "BOOLEAN" || "VARCHAR" || "TIMESTAMP",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         MeasureNameColumn: "STRING_VALUE",
 * //       },
 * //       DataModelS3Configuration: { // DataModelS3Configuration
 * //         BucketName: "STRING_VALUE",
 * //         ObjectKey: "STRING_VALUE",
 * //       },
 * //     },
 * //     TargetDatabaseName: "STRING_VALUE",
 * //     TargetTableName: "STRING_VALUE",
 * //     TaskStatus: "CREATED" || "IN_PROGRESS" || "FAILED" || "SUCCEEDED" || "PROGRESS_STOPPED" || "PENDING_RESUME",
 * //     RecordVersion: Number("long"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     ResumableUntil: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBatchLoadTaskCommandInput - {@link DescribeBatchLoadTaskCommandInput}
 * @returns {@link DescribeBatchLoadTaskCommandOutput}
 * @see {@link DescribeBatchLoadTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchLoadTaskCommandOutput} for command's `response` shape.
 * @see {@link TimestreamWriteClientResolvedConfig | config} for TimestreamWriteClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this action.</p>
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p> Too many requests were made by a user and they exceeded the service quotas. The request
 *          was throttled.</p>
 *
 * @throws {@link TimestreamWriteServiceException}
 * <p>Base exception class for all service exceptions from TimestreamWrite service.</p>
 *
 *
 * @public
 */
export class DescribeBatchLoadTaskCommand extends $Command
  .classBuilder<
    DescribeBatchLoadTaskCommandInput,
    DescribeBatchLoadTaskCommandOutput,
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
  .s("Timestream_20181101", "DescribeBatchLoadTask", {})
  .n("TimestreamWriteClient", "DescribeBatchLoadTaskCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBatchLoadTaskCommand)
  .de(de_DescribeBatchLoadTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBatchLoadTaskRequest;
      output: DescribeBatchLoadTaskResponse;
    };
    sdk: {
      input: DescribeBatchLoadTaskCommandInput;
      output: DescribeBatchLoadTaskCommandOutput;
    };
  };
}
