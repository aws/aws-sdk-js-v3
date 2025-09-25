// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { DiscoverInputSchemaRequest, DiscoverInputSchemaResponse } from "../models/models_0";
import { DiscoverInputSchema } from "../schemas/schemas_1_Application";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DiscoverInputSchemaCommand}.
 */
export interface DiscoverInputSchemaCommandInput extends DiscoverInputSchemaRequest {}
/**
 * @public
 *
 * The output of {@link DiscoverInputSchemaCommand}.
 */
export interface DiscoverInputSchemaCommandOutput extends DiscoverInputSchemaResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Infers a schema by evaluating sample records on the specified streaming source (Amazon Kinesis stream or Amazon Kinesis Firehose delivery stream) or S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.</p>
 *         <p>
 *             You can use the inferred schema when configuring a streaming source
 *             for your application. For conceptual information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *             Note that when you create an application using the Amazon Kinesis Analytics console,
 *             the console uses this operation to infer a schema and show it in the console user interface.
 *         </p>
 *         <p>
 *             This operation requires permissions to perform the
 *             <code>kinesisanalytics:DiscoverInputSchema</code> action.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, DiscoverInputSchemaCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, DiscoverInputSchemaCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * // import type { KinesisAnalyticsClientConfig } from "@aws-sdk/client-kinesis-analytics";
 * const config = {}; // type is KinesisAnalyticsClientConfig
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // DiscoverInputSchemaRequest
 *   ResourceARN: "STRING_VALUE",
 *   RoleARN: "STRING_VALUE",
 *   InputStartingPositionConfiguration: { // InputStartingPositionConfiguration
 *     InputStartingPosition: "NOW" || "TRIM_HORIZON" || "LAST_STOPPED_POINT",
 *   },
 *   S3Configuration: { // S3Configuration
 *     RoleARN: "STRING_VALUE", // required
 *     BucketARN: "STRING_VALUE", // required
 *     FileKey: "STRING_VALUE", // required
 *   },
 *   InputProcessingConfiguration: { // InputProcessingConfiguration
 *     InputLambdaProcessor: { // InputLambdaProcessor
 *       ResourceARN: "STRING_VALUE", // required
 *       RoleARN: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new DiscoverInputSchemaCommand(input);
 * const response = await client.send(command);
 * // { // DiscoverInputSchemaResponse
 * //   InputSchema: { // SourceSchema
 * //     RecordFormat: { // RecordFormat
 * //       RecordFormatType: "JSON" || "CSV", // required
 * //       MappingParameters: { // MappingParameters
 * //         JSONMappingParameters: { // JSONMappingParameters
 * //           RecordRowPath: "STRING_VALUE", // required
 * //         },
 * //         CSVMappingParameters: { // CSVMappingParameters
 * //           RecordRowDelimiter: "STRING_VALUE", // required
 * //           RecordColumnDelimiter: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     RecordEncoding: "STRING_VALUE",
 * //     RecordColumns: [ // RecordColumns // required
 * //       { // RecordColumn
 * //         Name: "STRING_VALUE", // required
 * //         Mapping: "STRING_VALUE",
 * //         SqlType: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   ParsedInputRecords: [ // ParsedInputRecords
 * //     [ // ParsedInputRecord
 * //       "STRING_VALUE",
 * //     ],
 * //   ],
 * //   ProcessedInputRecords: [ // ProcessedInputRecords
 * //     "STRING_VALUE",
 * //   ],
 * //   RawInputRecords: [ // RawInputRecords
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DiscoverInputSchemaCommandInput - {@link DiscoverInputSchemaCommandInput}
 * @returns {@link DiscoverInputSchemaCommandOutput}
 * @see {@link DiscoverInputSchemaCommandInput} for command's `input` shape.
 * @see {@link DiscoverInputSchemaCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for KinesisAnalyticsClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Specified input parameter value is invalid.</p>
 *
 * @throws {@link ResourceProvisionedThroughputExceededException} (client fault)
 *  <p>Discovery failed to get a record from the
 *             streaming source because of the Amazon Kinesis Streams
 *             ProvisionedThroughputExceededException. For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a>
 *             in the Amazon Kinesis Streams API Reference.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation. </p>
 *
 * @throws {@link UnableToDetectSchemaException} (client fault)
 *  <p>Data format is not valid. Amazon Kinesis Analytics is not able to detect schema for
 *             the given streaming source.</p>
 *
 * @throws {@link KinesisAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalytics service.</p>
 *
 *
 * @public
 */
export class DiscoverInputSchemaCommand extends $Command
  .classBuilder<
    DiscoverInputSchemaCommandInput,
    DiscoverInputSchemaCommandOutput,
    KinesisAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20150814", "DiscoverInputSchema", {})
  .n("KinesisAnalyticsClient", "DiscoverInputSchemaCommand")
  .sc(DiscoverInputSchema)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DiscoverInputSchemaRequest;
      output: DiscoverInputSchemaResponse;
    };
    sdk: {
      input: DiscoverInputSchemaCommandInput;
      output: DiscoverInputSchemaCommandOutput;
    };
  };
}
