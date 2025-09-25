// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import { CreateApplication } from "../schemas/schemas_1_Application";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandInput extends CreateApplicationRequest {}
/**
 * @public
 *
 * The output of {@link CreateApplicationCommand}.
 */
export interface CreateApplicationCommandOutput extends CreateApplicationResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *
 *         <p>
 *             Creates an Amazon Kinesis Analytics application.
 *             You can configure each application with one streaming source as input,
 *             application code to process the input, and up to
 *             three destinations where
 *             you want Amazon Kinesis Analytics to write the output data from your application.
 *             For an overview, see
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works.html">How it Works</a>.
 *         </p>
 *         <p>In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a
 *             data element in the streaming source.</p>
 *
 *         <p>Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps.</p>
 *         <p>In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations.</p>
 *         <p>
 *             To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics
 *             needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the
 *             <code>kinesisanalytics:CreateApplication</code> action.
 *         </p>
 *         <p>
 *             For introductory exercises to create an Amazon Kinesis Analytics application, see
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/getting-started.html">Getting Started</a>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsClient, CreateApplicationCommand } from "@aws-sdk/client-kinesis-analytics"; // ES Modules import
 * // const { KinesisAnalyticsClient, CreateApplicationCommand } = require("@aws-sdk/client-kinesis-analytics"); // CommonJS import
 * // import type { KinesisAnalyticsClientConfig } from "@aws-sdk/client-kinesis-analytics";
 * const config = {}; // type is KinesisAnalyticsClientConfig
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // CreateApplicationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   ApplicationDescription: "STRING_VALUE",
 *   Inputs: [ // Inputs
 *     { // Input
 *       NamePrefix: "STRING_VALUE", // required
 *       InputProcessingConfiguration: { // InputProcessingConfiguration
 *         InputLambdaProcessor: { // InputLambdaProcessor
 *           ResourceARN: "STRING_VALUE", // required
 *           RoleARN: "STRING_VALUE", // required
 *         },
 *       },
 *       KinesisStreamsInput: { // KinesisStreamsInput
 *         ResourceARN: "STRING_VALUE", // required
 *         RoleARN: "STRING_VALUE", // required
 *       },
 *       KinesisFirehoseInput: { // KinesisFirehoseInput
 *         ResourceARN: "STRING_VALUE", // required
 *         RoleARN: "STRING_VALUE", // required
 *       },
 *       InputParallelism: { // InputParallelism
 *         Count: Number("int"),
 *       },
 *       InputSchema: { // SourceSchema
 *         RecordFormat: { // RecordFormat
 *           RecordFormatType: "JSON" || "CSV", // required
 *           MappingParameters: { // MappingParameters
 *             JSONMappingParameters: { // JSONMappingParameters
 *               RecordRowPath: "STRING_VALUE", // required
 *             },
 *             CSVMappingParameters: { // CSVMappingParameters
 *               RecordRowDelimiter: "STRING_VALUE", // required
 *               RecordColumnDelimiter: "STRING_VALUE", // required
 *             },
 *           },
 *         },
 *         RecordEncoding: "STRING_VALUE",
 *         RecordColumns: [ // RecordColumns // required
 *           { // RecordColumn
 *             Name: "STRING_VALUE", // required
 *             Mapping: "STRING_VALUE",
 *             SqlType: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   Outputs: [ // Outputs
 *     { // Output
 *       Name: "STRING_VALUE", // required
 *       KinesisStreamsOutput: { // KinesisStreamsOutput
 *         ResourceARN: "STRING_VALUE", // required
 *         RoleARN: "STRING_VALUE", // required
 *       },
 *       KinesisFirehoseOutput: { // KinesisFirehoseOutput
 *         ResourceARN: "STRING_VALUE", // required
 *         RoleARN: "STRING_VALUE", // required
 *       },
 *       LambdaOutput: { // LambdaOutput
 *         ResourceARN: "STRING_VALUE", // required
 *         RoleARN: "STRING_VALUE", // required
 *       },
 *       DestinationSchema: { // DestinationSchema
 *         RecordFormatType: "JSON" || "CSV", // required
 *       },
 *     },
 *   ],
 *   CloudWatchLoggingOptions: [ // CloudWatchLoggingOptions
 *     { // CloudWatchLoggingOption
 *       LogStreamARN: "STRING_VALUE", // required
 *       RoleARN: "STRING_VALUE", // required
 *     },
 *   ],
 *   ApplicationCode: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateApplicationCommand(input);
 * const response = await client.send(command);
 * // { // CreateApplicationResponse
 * //   ApplicationSummary: { // ApplicationSummary
 * //     ApplicationName: "STRING_VALUE", // required
 * //     ApplicationARN: "STRING_VALUE", // required
 * //     ApplicationStatus: "DELETING" || "STARTING" || "STOPPING" || "READY" || "RUNNING" || "UPDATING", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateApplicationCommandInput - {@link CreateApplicationCommandInput}
 * @returns {@link CreateApplicationCommandOutput}
 * @see {@link CreateApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsClientResolvedConfig | config} for KinesisAnalyticsClient's `config` shape.
 *
 * @throws {@link CodeValidationException} (client fault)
 *  <p>User-provided application code (query) is invalid. This can be a simple syntax error.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Specified input parameter value is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Exceeded the number of applications allowed.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>Application is not available for this operation.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
 *
 * @throws {@link KinesisAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalytics service.</p>
 *
 *
 * @public
 */
export class CreateApplicationCommand extends $Command
  .classBuilder<
    CreateApplicationCommandInput,
    CreateApplicationCommandOutput,
    KinesisAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("KinesisAnalytics_20150814", "CreateApplication", {})
  .n("KinesisAnalyticsClient", "CreateApplicationCommand")
  .sc(CreateApplication)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateApplicationRequest;
      output: CreateApplicationResponse;
    };
    sdk: {
      input: CreateApplicationCommandInput;
      output: CreateApplicationCommandOutput;
    };
  };
}
