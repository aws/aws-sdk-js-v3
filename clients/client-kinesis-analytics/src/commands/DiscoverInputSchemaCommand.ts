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
import { DiscoverInputSchemaRequest, DiscoverInputSchemaResponse } from "../models/models_0";
import { de_DiscoverInputSchemaCommand, se_DiscoverInputSchemaCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 * const client = new KinesisAnalyticsClient(config);
 * const input = { // DiscoverInputSchemaRequest
 *   ResourceARN: "STRING_VALUE",
 *   RoleARN: "STRING_VALUE",
 *   InputStartingPositionConfiguration: { // InputStartingPositionConfiguration
 *     InputStartingPosition: "STRING_VALUE",
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
 * //       RecordFormatType: "STRING_VALUE", // required
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
 */
export class DiscoverInputSchemaCommand extends $Command<
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput,
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
  constructor(readonly input: DiscoverInputSchemaCommandInput) {
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
  ): Handler<DiscoverInputSchemaCommandInput, DiscoverInputSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DiscoverInputSchemaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsClient";
    const commandName = "DiscoverInputSchemaCommand";
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
  private serialize(input: DiscoverInputSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DiscoverInputSchemaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DiscoverInputSchemaCommandOutput> {
    return de_DiscoverInputSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
