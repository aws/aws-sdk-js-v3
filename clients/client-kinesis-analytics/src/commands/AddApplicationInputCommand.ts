// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddApplicationInputRequest, AddApplicationInputResponse } from "../models/models_0";
import { AddApplicationInput$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddApplicationInputCommand}.
 */
export interface AddApplicationInputCommandInput extends AddApplicationInputRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationInputCommand}.
 */
export interface AddApplicationInputCommandOutput extends AddApplicationInputResponse, __MetadataBearer {}

/**
 * > **Note:** This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see [Amazon Kinesis Data Analytics API V2 Documentation](/kinesisanalytics/latest/apiv2/Welcome.html).
 *
 *
 *
 * Adds a streaming source to your Amazon Kinesis application. For conceptual information, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
 *
 * You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see [CreateApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html).
 *
 * Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation to find the current application version.
 *
 * This operation requires permissions to perform the `kinesisanalytics:AddApplicationInput` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, AddApplicationInputCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, AddApplicationInputCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * // import type { KinesisAnalyticsClientConfig } from "@aws-sdk/client-kinesis-analytics";
 * const config = {}; // type is KinesisAnalyticsClientConfig
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // AddApplicationInputRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   Input: { // Input
 *     NamePrefix: "STRING_VALUE", // required
 *     InputProcessingConfiguration: { // InputProcessingConfiguration
 *       InputLambdaProcessor: { // InputLambdaProcessor
 *         ResourceARN: "STRING_VALUE", // required
 *         RoleARN: "STRING_VALUE", // required
 *       },
 *     },
 *     KinesisStreamsInput: { // KinesisStreamsInput
 *       ResourceARN: "STRING_VALUE", // required
 *       RoleARN: "STRING_VALUE", // required
 *     },
 *     KinesisFirehoseInput: { // KinesisFirehoseInput
 *       ResourceARN: "STRING_VALUE", // required
 *       RoleARN: "STRING_VALUE", // required
 *     },
 *     InputParallelism: { // InputParallelism
 *       Count: Number("int"),
 *     },
 *     InputSchema: { // SourceSchema
 *       RecordFormat: { // RecordFormat
 *         RecordFormatType: "JSON" || "CSV", // required
 *         MappingParameters: { // MappingParameters
 *           JSONMappingParameters: { // JSONMappingParameters
 *             RecordRowPath: "STRING_VALUE", // required
 *           },
 *           CSVMappingParameters: { // CSVMappingParameters
 *             RecordRowDelimiter: "STRING_VALUE", // required
 *             RecordColumnDelimiter: "STRING_VALUE", // required
 *           },
 *         },
 *       },
 *       RecordEncoding: "STRING_VALUE",
 *       RecordColumns: [ // RecordColumns // required
 *         { // RecordColumn
 *           Name: "STRING_VALUE", // required
 *           Mapping: "STRING_VALUE",
 *           SqlType: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new AddApplicationInputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddApplicationInputCommandInput - {@link AddApplicationInputCommandInput}
 * @returns {@link AddApplicationInputCommandOutput}
 * @see {@link AddApplicationInputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationInputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for KinesisAnalyticsClient's `config` shape.
 *
 * @throws {@link CodeValidationException} (client fault)
 *
 * User-provided application code (query) is invalid. This can be a simple syntax error.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * Specified input parameter value is invalid.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * Application is not available for this operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Specified application can't be found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KinesisAnalyticsServiceException}
 *
 * Base exception class for all service exceptions from KinesisAnalytics service.
 *
 * @public
 */
export class AddApplicationInputCommand extends command<AddApplicationInputCommandInput, AddApplicationInputCommandOutput>(
  _ep0,
  _mw0,
  "AddApplicationInput",
  AddApplicationInput$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddApplicationInputRequest;
      output: {};
    };
    sdk: {
      input: AddApplicationInputCommandInput;
      output: AddApplicationInputCommandOutput;
    };
  };
}
