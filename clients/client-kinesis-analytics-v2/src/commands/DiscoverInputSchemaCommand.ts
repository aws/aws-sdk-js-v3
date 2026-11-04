// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DiscoverInputSchemaRequest, DiscoverInputSchemaResponse } from "../models/models_0";
import { DiscoverInputSchema$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose delivery stream) or Amazon S3 object. In the response, the operation returns the inferred schema and also the sample records that the operation used to infer the schema.
 *
 * You can use the inferred schema when configuring a streaming source for your application. When you create an application using the Kinesis Data Analytics console, the console uses this operation to infer a schema and show it in the console user interface.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DiscoverInputSchemaCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DiscoverInputSchemaCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * // import type { KinesisAnalyticsV2ClientConfig } from "@aws-sdk/client-kinesis-analytics-v2";
 * const config = {}; // type is KinesisAnalyticsV2ClientConfig
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DiscoverInputSchemaRequest
 *   ResourceARN: "STRING_VALUE",
 *   ServiceExecutionRole: "STRING_VALUE", // required
 *   InputStartingPositionConfiguration: { // InputStartingPositionConfiguration
 *     InputStartingPosition: "NOW" || "TRIM_HORIZON" || "LAST_STOPPED_POINT",
 *   },
 *   S3Configuration: { // S3Configuration
 *     BucketARN: "STRING_VALUE", // required
 *     FileKey: "STRING_VALUE", // required
 *   },
 *   InputProcessingConfiguration: { // InputProcessingConfiguration
 *     InputLambdaProcessor: { // InputLambdaProcessor
 *       ResourceARN: "STRING_VALUE", // required
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
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The specified input parameter value is not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request JSON is not valid for the operation.
 *
 * @throws {@link ResourceProvisionedThroughputExceededException} (client fault)
 *
 * Discovery failed to get a record from the streaming source because of the Kinesis Streams `ProvisionedThroughputExceededException`. For more information, see [GetRecords](http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html) in the Amazon Kinesis Streams API Reference.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link UnableToDetectSchemaException} (client fault)
 *
 * The data format is not valid. Kinesis Data Analytics cannot detect the schema for the given streaming source.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 *
 * Base exception class for all service exceptions from KinesisAnalyticsV2 service.
 *
 * @public
 */
export class DiscoverInputSchemaCommand extends command<DiscoverInputSchemaCommandInput, DiscoverInputSchemaCommandOutput>(
  _ep0,
  _mw0,
  "DiscoverInputSchema",
  DiscoverInputSchema$
) {
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
