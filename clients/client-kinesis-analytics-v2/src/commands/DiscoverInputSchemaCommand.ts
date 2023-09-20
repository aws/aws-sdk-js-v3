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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
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
 * <p>Infers a schema for a SQL-based Kinesis Data Analytics application by evaluating
 *       sample records on the specified streaming source (Kinesis data stream or Kinesis Data Firehose
 *       delivery stream) or Amazon S3 object. In the response, the operation returns the inferred
 *       schema and also the sample records that the operation used to infer the schema.</p>
 *          <p> You can use the inferred schema when configuring a streaming source for your application.
 *       When you create an application using the Kinesis Data Analytics console, the console uses this
 *       operation to infer a schema and show it in the console user interface. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DiscoverInputSchemaCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DiscoverInputSchemaCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
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
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link ResourceProvisionedThroughputExceededException} (client fault)
 *  <p>Discovery failed to get a record from the streaming source because of the Kinesis
 *       Streams <code>ProvisionedThroughputExceededException</code>. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a> in the Amazon Kinesis Streams API Reference.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link UnableToDetectSchemaException} (client fault)
 *  <p>The data format is not valid. Kinesis Data Analytics cannot detect the schema for
 *       the given streaming source.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this
 *       operation. </p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 */
export class DiscoverInputSchemaCommand extends $Command<
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
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
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DiscoverInputSchemaCommandInput, DiscoverInputSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DiscoverInputSchemaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DiscoverInputSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KinesisAnalytics_20180523",
        operation: "DiscoverInputSchema",
      },
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
