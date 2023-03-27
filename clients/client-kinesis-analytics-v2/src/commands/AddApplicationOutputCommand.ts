// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { AddApplicationOutputRequest, AddApplicationOutputResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AddApplicationOutputCommand,
  serializeAws_json1_1AddApplicationOutputCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AddApplicationOutputCommand}.
 */
export interface AddApplicationOutputCommandInput extends AddApplicationOutputRequest {}
/**
 * @public
 *
 * The output of {@link AddApplicationOutputCommand}.
 */
export interface AddApplicationOutputCommandOutput extends AddApplicationOutputResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p>
 *          <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within
 *       your application to an external destination (such as an Kinesis data stream, a Kinesis Data
 *       Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to
 *       your application using this operation. You can configure one or more outputs for your
 *       application. Each output configuration maps an in-application stream and an external
 *       destination.</p>
 *          <p> You can use one of the output configurations to deliver data from your
 *       in-application error stream to an external destination so that you can analyze the
 *       errors.  </p>
 *          <p> Any configuration update, including adding a streaming source using this
 *       operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application
 *       version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, AddApplicationOutputCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, AddApplicationOutputCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // AddApplicationOutputRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   CurrentApplicationVersionId: Number("long"), // required
 *   Output: { // Output
 *     Name: "STRING_VALUE", // required
 *     KinesisStreamsOutput: { // KinesisStreamsOutput
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *     KinesisFirehoseOutput: { // KinesisFirehoseOutput
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *     LambdaOutput: { // LambdaOutput
 *       ResourceARN: "STRING_VALUE", // required
 *     },
 *     DestinationSchema: { // DestinationSchema
 *       RecordFormatType: "JSON" || "CSV", // required
 *     },
 *   },
 * };
 * const command = new AddApplicationOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AddApplicationOutputCommandInput - {@link AddApplicationOutputCommandInput}
 * @returns {@link AddApplicationOutputCommandOutput}
 * @see {@link AddApplicationOutputCommandInput} for command's `input` shape.
 * @see {@link AddApplicationOutputCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request JSON is not valid for the operation.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The application is not available for this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 *
 */
export class AddApplicationOutputCommand extends $Command<
  AddApplicationOutputCommandInput,
  AddApplicationOutputCommandOutput,
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
  constructor(readonly input: AddApplicationOutputCommandInput) {
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
  ): Handler<AddApplicationOutputCommandInput, AddApplicationOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddApplicationOutputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "AddApplicationOutputCommand";
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
  private serialize(input: AddApplicationOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddApplicationOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddApplicationOutputCommandOutput> {
    return deserializeAws_json1_1AddApplicationOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
