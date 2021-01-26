import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { CreateApplicationRequest, CreateApplicationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateApplicationCommand,
  serializeAws_json1_1CreateApplicationCommand,
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

export type CreateApplicationCommandInput = CreateApplicationRequest;
export type CreateApplicationCommandOutput = CreateApplicationResponse & __MetadataBearer;

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
 */
export class CreateApplicationCommand extends $Command<
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
  KinesisAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateApplicationCommandInput) {
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
  ): Handler<CreateApplicationCommandInput, CreateApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsClient";
    const commandName = "CreateApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateApplicationCommandOutput> {
    return deserializeAws_json1_1CreateApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
