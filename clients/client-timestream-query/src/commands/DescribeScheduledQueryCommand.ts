// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeScheduledQueryRequest,
  DescribeScheduledQueryResponse,
  DescribeScheduledQueryResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeScheduledQueryCommand, se_DescribeScheduledQueryCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScheduledQueryCommand}.
 */
export interface DescribeScheduledQueryCommandInput extends DescribeScheduledQueryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScheduledQueryCommand}.
 */
export interface DescribeScheduledQueryCommandOutput extends DescribeScheduledQueryResponse, __MetadataBearer {}

/**
 * <p>Provides detailed information about a scheduled query.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, DescribeScheduledQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, DescribeScheduledQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const input = { // DescribeScheduledQueryRequest
 *   ScheduledQueryArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeScheduledQueryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScheduledQueryResponse
 * //   ScheduledQuery: { // ScheduledQueryDescription
 * //     Arn: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     QueryString: "STRING_VALUE", // required
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     State: "ENABLED" || "DISABLED", // required
 * //     PreviousInvocationTime: new Date("TIMESTAMP"),
 * //     NextInvocationTime: new Date("TIMESTAMP"),
 * //     ScheduleConfiguration: { // ScheduleConfiguration
 * //       ScheduleExpression: "STRING_VALUE", // required
 * //     },
 * //     NotificationConfiguration: { // NotificationConfiguration
 * //       SnsConfiguration: { // SnsConfiguration
 * //         TopicArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     TargetConfiguration: { // TargetConfiguration
 * //       TimestreamConfiguration: { // TimestreamConfiguration
 * //         DatabaseName: "STRING_VALUE", // required
 * //         TableName: "STRING_VALUE", // required
 * //         TimeColumn: "STRING_VALUE", // required
 * //         DimensionMappings: [ // DimensionMappingList // required
 * //           { // DimensionMapping
 * //             Name: "STRING_VALUE", // required
 * //             DimensionValueType: "VARCHAR", // required
 * //           },
 * //         ],
 * //         MultiMeasureMappings: { // MultiMeasureMappings
 * //           TargetMultiMeasureName: "STRING_VALUE",
 * //           MultiMeasureAttributeMappings: [ // MultiMeasureAttributeMappingList // required
 * //             { // MultiMeasureAttributeMapping
 * //               SourceColumn: "STRING_VALUE", // required
 * //               TargetMultiMeasureAttributeName: "STRING_VALUE",
 * //               MeasureValueType: "BIGINT" || "BOOLEAN" || "DOUBLE" || "VARCHAR" || "TIMESTAMP", // required
 * //             },
 * //           ],
 * //         },
 * //         MixedMeasureMappings: [ // MixedMeasureMappingList
 * //           { // MixedMeasureMapping
 * //             MeasureName: "STRING_VALUE",
 * //             SourceColumn: "STRING_VALUE",
 * //             TargetMeasureName: "STRING_VALUE",
 * //             MeasureValueType: "BIGINT" || "BOOLEAN" || "DOUBLE" || "VARCHAR" || "MULTI", // required
 * //             MultiMeasureAttributeMappings: [
 * //               {
 * //                 SourceColumn: "STRING_VALUE", // required
 * //                 TargetMultiMeasureAttributeName: "STRING_VALUE",
 * //                 MeasureValueType: "BIGINT" || "BOOLEAN" || "DOUBLE" || "VARCHAR" || "TIMESTAMP", // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         MeasureNameColumn: "STRING_VALUE",
 * //       },
 * //     },
 * //     ScheduledQueryExecutionRoleArn: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     ErrorReportConfiguration: { // ErrorReportConfiguration
 * //       S3Configuration: { // S3Configuration
 * //         BucketName: "STRING_VALUE", // required
 * //         ObjectKeyPrefix: "STRING_VALUE",
 * //         EncryptionOption: "SSE_S3" || "SSE_KMS",
 * //       },
 * //     },
 * //     LastRunSummary: { // ScheduledQueryRunSummary
 * //       InvocationTime: new Date("TIMESTAMP"),
 * //       TriggerTime: new Date("TIMESTAMP"),
 * //       RunStatus: "AUTO_TRIGGER_SUCCESS" || "AUTO_TRIGGER_FAILURE" || "MANUAL_TRIGGER_SUCCESS" || "MANUAL_TRIGGER_FAILURE",
 * //       ExecutionStats: { // ExecutionStats
 * //         ExecutionTimeInMillis: Number("long"),
 * //         DataWrites: Number("long"),
 * //         BytesMetered: Number("long"),
 * //         CumulativeBytesScanned: Number("long"),
 * //         RecordsIngested: Number("long"),
 * //         QueryResultRows: Number("long"),
 * //       },
 * //       ErrorReportLocation: { // ErrorReportLocation
 * //         S3ReportLocation: { // S3ReportLocation
 * //           BucketName: "STRING_VALUE",
 * //           ObjectKey: "STRING_VALUE",
 * //         },
 * //       },
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //     RecentlyFailedRuns: [ // ScheduledQueryRunSummaryList
 * //       {
 * //         InvocationTime: new Date("TIMESTAMP"),
 * //         TriggerTime: new Date("TIMESTAMP"),
 * //         RunStatus: "AUTO_TRIGGER_SUCCESS" || "AUTO_TRIGGER_FAILURE" || "MANUAL_TRIGGER_SUCCESS" || "MANUAL_TRIGGER_FAILURE",
 * //         ExecutionStats: {
 * //           ExecutionTimeInMillis: Number("long"),
 * //           DataWrites: Number("long"),
 * //           BytesMetered: Number("long"),
 * //           CumulativeBytesScanned: Number("long"),
 * //           RecordsIngested: Number("long"),
 * //           QueryResultRows: Number("long"),
 * //         },
 * //         ErrorReportLocation: {
 * //           S3ReportLocation: {
 * //             BucketName: "STRING_VALUE",
 * //             ObjectKey: "STRING_VALUE",
 * //           },
 * //         },
 * //         FailureReason: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeScheduledQueryCommandInput - {@link DescribeScheduledQueryCommandInput}
 * @returns {@link DescribeScheduledQueryCommandOutput}
 * @see {@link DescribeScheduledQueryCommandInput} for command's `input` shape.
 * @see {@link DescribeScheduledQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             The service was unable to fully process this request because of an internal
 *             server error. </p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 * @public
 */
export class DescribeScheduledQueryCommand extends $Command
  .classBuilder<
    DescribeScheduledQueryCommandInput,
    DescribeScheduledQueryCommandOutput,
    TimestreamQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TimestreamQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, { clientStack: cs, isDiscoveredEndpointRequired: true, options: o }),
    ];
  })
  .s("Timestream_20181101", "DescribeScheduledQuery", {})
  .n("TimestreamQueryClient", "DescribeScheduledQueryCommand")
  .f(void 0, DescribeScheduledQueryResponseFilterSensitiveLog)
  .ser(se_DescribeScheduledQueryCommand)
  .de(de_DescribeScheduledQueryCommand)
  .build() {}
