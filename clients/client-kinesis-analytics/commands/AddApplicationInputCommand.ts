import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { AddApplicationInputRequest, AddApplicationInputResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AddApplicationInputCommand,
  serializeAws_json1_1AddApplicationInputCommand,
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

export type AddApplicationInputCommandInput = AddApplicationInputRequest;
export type AddApplicationInputCommandOutput = AddApplicationInputResponse & __MetadataBearer;

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>
 *             Adds a streaming source to your Amazon Kinesis application.
 *             For conceptual information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *         </p>
 *         <p>You can add a streaming source either when you create an application or you can use
 *             this operation to add a streaming source after you create an application. For more information, see
 *            <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_CreateApplication.html">CreateApplication</a>.</p>
 *         <p>Any configuration update, including adding a streaming source using this operation,
 *             results in a new version of the application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation
 *             to find the current application version.
 *         </p>
 *         <p>This operation requires permissions to perform the
 *             <code>kinesisanalytics:AddApplicationInput</code> action.</p>
 */
export class AddApplicationInputCommand extends $Command<
  AddApplicationInputCommandInput,
  AddApplicationInputCommandOutput,
  KinesisAnalyticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddApplicationInputCommandInput) {
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
  ): Handler<AddApplicationInputCommandInput, AddApplicationInputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsClient";
    const commandName = "AddApplicationInputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddApplicationInputRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddApplicationInputResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddApplicationInputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddApplicationInputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddApplicationInputCommandOutput> {
    return deserializeAws_json1_1AddApplicationInputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
