// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { DescribeApplicationRequest, DescribeApplicationResponse } from "../models/models_0";
import { de_DescribeApplicationCommand, se_DescribeApplicationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * //     ApplicationStatus: "STRING_VALUE", // required
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
 * //             RecordFormatType: "STRING_VALUE", // required
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
 * //           InputStartingPosition: "STRING_VALUE",
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
 * //           RecordFormatType: "STRING_VALUE", // required
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
 * //             RecordFormatType: "STRING_VALUE", // required
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
 */
export class DescribeApplicationCommand extends $Command<
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
  KinesisAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeApplicationCommandInput, DescribeApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsClient";
    const commandName = "DescribeApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeApplicationCommandOutput> {
    return de_DescribeApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
