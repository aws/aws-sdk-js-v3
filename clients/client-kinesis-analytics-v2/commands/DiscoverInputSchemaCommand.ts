import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { DiscoverInputSchemaRequest, DiscoverInputSchemaResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DiscoverInputSchemaCommand,
  serializeAws_json1_1DiscoverInputSchemaCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DiscoverInputSchemaCommandInput extends DiscoverInputSchemaRequest {}
export interface DiscoverInputSchemaCommandOutput extends DiscoverInputSchemaResponse, __MetadataBearer {}

/**
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
 * const command = new DiscoverInputSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DiscoverInputSchemaCommandInput} for command's `input` shape.
 * @see {@link DiscoverInputSchemaCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DiscoverInputSchemaCommand extends $Command<
  DiscoverInputSchemaCommandInput,
  DiscoverInputSchemaCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "DiscoverInputSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DiscoverInputSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DiscoverInputSchemaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DiscoverInputSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DiscoverInputSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DiscoverInputSchemaCommandOutput> {
    return deserializeAws_json1_1DiscoverInputSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
