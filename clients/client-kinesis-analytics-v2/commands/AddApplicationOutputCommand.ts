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

export type AddApplicationOutputCommandInput = AddApplicationOutputRequest;
export type AddApplicationOutputCommandOutput = AddApplicationOutputResponse & __MetadataBearer;

/**
 * <p>Adds an external destination to your SQL-based Kinesis Data Analytics application.</p>
 *          <p>If you want Kinesis Data Analytics to deliver data from an in-application stream within
 *       your application to an external destination (such as an Kinesis data stream, a Kinesis Data
 *       Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to
 *       your application using this operation. You can configure one or more outputs for your
 *       application. Each output configuration maps an in-application stream and an external
 *       destination.</p>
 *          <p> You can use one of the output configurations to deliver data from your
 *       in-application error stream to an external destination so that you can analyze the
 *       errors.  </p>
 *          <p> Any configuration update, including adding a streaming source using this
 *       operation, results in a new version of the application. You can use the <a>DescribeApplication</a> operation to find the current application
 *       version.</p>
 */
export class AddApplicationOutputCommand extends $Command<
  AddApplicationOutputCommandInput,
  AddApplicationOutputCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "AddApplicationOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddApplicationOutputRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddApplicationOutputResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddApplicationOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddApplicationOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddApplicationOutputCommandOutput> {
    return deserializeAws_json1_1AddApplicationOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
