// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  KinesisAnalyticsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsClient";
import type { DescribeApplicationRequest, DescribeApplicationResponse } from "../models/models_0";
import { DescribeApplication } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationCommand}.
 */
export interface DescribeApplicationCommandInput extends DescribeApplicationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationCommand}.
 */
export interface DescribeApplicationCommandOutput extends DescribeApplicationResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Returns information about a specific Amazon Kinesis Analytics application.</p>
 *         <p>If you want to retrieve a list of all applications in your account,
 *             use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_ListApplications.html">ListApplications</a> operation.</p>
 *         <p>This operation requires permissions to perform the <code>kinesisanalytics:DescribeApplication</code>
 *             action. You can use <code>DescribeApplication</code> to get the current application versionId, which you need to call other
 *             operations such as <code>Update</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, DescribeApplicationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, DescribeApplicationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * // import type { KinesisAnalyticsClientConfig } from "@aws-sdk/client-kinesis-analytics";
 * const config = {}; // type is KinesisAnalyticsClientConfig
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // DescribeApplicationRequest
 *   ApplicationName: "STRING_VALUE", // required
 * };
 * const command = new DescribeApplicationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationResponse
 * //   ApplicationDetail: { // ApplicationDetail
 * //     ApplicationName: "STRING_VALUE", // required
 * //     ApplicationDescription: "STRING_VALUE",
 * //     ApplicationARN: "STRING_VALUE", // required
 * //     ApplicationStatus: "DELETING" || "STARTING" || "STOPPING" || "READY" || "RUNNING" || "UPDATING", // required
 * //     CreateTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdateTimestamp: new Date("TIMESTAMP"),
 * //     InputDescriptions: [ // InputDescriptions
 * //       { // InputDescription
 * //         InputId: "STRING_VALUE",
 * //         NamePrefix: "STRING_VALUE",
 * //         InAppStreamNames: [ // InAppStreamNames
 * //           "STRING_VALUE",
 * //         ],
 * //         InputProcessingConfigurationDescription: { // InputProcessingConfigurationDescription
 * //           InputLambdaProcessorDescription: { // InputLambdaProcessorDescription
 * //             ResourceARN: "STRING_VALUE",
 * //             RoleARN: "STRING_VALUE",
 * //           },
 * //         },
 * //         KinesisStreamsInputDescription: { // KinesisStreamsInputDescription
 * //           ResourceARN: "STRING_VALUE",
 * //           RoleARN: "STRING_VALUE",
 * //         },
 * //         KinesisFirehoseInputDescription: { // KinesisFirehoseInputDescription
 * //           ResourceARN: "STRING_VALUE",
 * //           RoleARN: "STRING_VALUE",
 * //         },
 * //         InputSchema: { // SourceSchema
 * //           RecordFormat: { // RecordFormat
 * //             RecordFormatType: "JSON" || "CSV", // required
 * //             MappingParameters: { // MappingParameters
 * //               JSONMappingParameters: { // JSONMappingParameters
 * //                 RecordRowPath: "STRING_VALUE", // required
 * //               },
 * //               CSVMappingParameters: { // CSVMappingParameters
 * //                 RecordRowDelimiter: "STRING_VALUE", // required
 * //                 RecordColumnDelimiter: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //           RecordEncoding: "STRING_VALUE",
 * //           RecordColumns: [ // RecordColumns // required
 * //             { // RecordColumn
 * //               Name: "STRING_VALUE", // required
 * //               Mapping: "STRING_VALUE",
 * //               SqlType: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //         InputParallelism: { // InputParallelism
 * //           Count: Number("int"),
 * //         },
 * //         InputStartingPositionConfiguration: { // InputStartingPositionConfiguration
 * //           InputStartingPosition: "NOW" || "TRIM_HORIZON" || "LAST_STOPPED_POINT",
 * //         },
 * //       },
 * //     ],
 * //     OutputDescriptions: [ // OutputDescriptions
 * //       { // OutputDescription
 * //         OutputId: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         KinesisStreamsOutputDescription: { // KinesisStreamsOutputDescription
 * //           ResourceARN: "STRING_VALUE",
 * //           RoleARN: "STRING_VALUE",
 * //         },
 * //         KinesisFirehoseOutputDescription: { // KinesisFirehoseOutputDescription
 * //           ResourceARN: "STRING_VALUE",
 * //           RoleARN: "STRING_VALUE",
 * //         },
 * //         LambdaOutputDescription: { // LambdaOutputDescription
 * //           ResourceARN: "STRING_VALUE",
 * //           RoleARN: "STRING_VALUE",
 * //         },
 * //         DestinationSchema: { // DestinationSchema
 * //           RecordFormatType: "JSON" || "CSV", // required
 * //         },
 * //       },
 * //     ],
 * //     ReferenceDataSourceDescriptions: [ // ReferenceDataSourceDescriptions
 * //       { // ReferenceDataSourceDescription
 * //         ReferenceId: "STRING_VALUE", // required
 * //         TableName: "STRING_VALUE", // required
 * //         S3ReferenceDataSourceDescription: { // S3ReferenceDataSourceDescription
 * //           BucketARN: "STRING_VALUE", // required
 * //           FileKey: "STRING_VALUE", // required
 * //           ReferenceRoleARN: "STRING_VALUE", // required
 * //         },
 * //         ReferenceSchema: {
 * //           RecordFormat: {
 * //             RecordFormatType: "JSON" || "CSV", // required
 * //             MappingParameters: {
 * //               JSONMappingParameters: {
 * //                 RecordRowPath: "STRING_VALUE", // required
 * //               },
 * //               CSVMappingParameters: {
 * //                 RecordRowDelimiter: "STRING_VALUE", // required
 * //                 RecordColumnDelimiter: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //           RecordEncoding: "STRING_VALUE",
 * //           RecordColumns: [ // required
 * //             {
 * //               Name: "STRING_VALUE", // required
 * //               Mapping: "STRING_VALUE",
 * //               SqlType: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     CloudWatchLoggingOptionDescriptions: [ // CloudWatchLoggingOptionDescriptions
 * //       { // CloudWatchLoggingOptionDescription
 * //         CloudWatchLoggingOptionId: "STRING_VALUE",
 * //         LogStreamARN: "STRING_VALUE", // required
 * //         RoleARN: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ApplicationCode: "STRING_VALUE",
 * //     ApplicationVersionId: Number("long"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeApplicationCommandInput - {@link DescribeApplicationCommandInput}
 * @returns {@link DescribeApplicationCommandOutput}
 * @see {@link DescribeApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for KinesisAnalyticsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
 *
 * @throws {@link KinesisAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalytics service.</p>
 *
 *
 * @public
 */
export class DescribeApplicationCommand extends $Command
  .classBuilder<
    DescribeApplicationCommandInput,
    DescribeApplicationCommandOutput,
    KinesisAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20150814", "DescribeApplication", {})
  .n("KinesisAnalyticsClient", "DescribeApplicationCommand")
  .sc(DescribeApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationRequest;
      output: DescribeApplicationResponse;
    };
    sdk: {
      input: DescribeApplicationCommandInput;
      output: DescribeApplicationCommandOutput;
    };
  };
}
