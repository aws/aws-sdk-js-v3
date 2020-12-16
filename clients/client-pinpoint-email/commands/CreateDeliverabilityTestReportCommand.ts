import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { CreateDeliverabilityTestReportRequest, CreateDeliverabilityTestReportResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDeliverabilityTestReportCommand,
  serializeAws_restJson1CreateDeliverabilityTestReportCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateDeliverabilityTestReportCommandInput = CreateDeliverabilityTestReportRequest;
export type CreateDeliverabilityTestReportCommandOutput = CreateDeliverabilityTestReportResponse & __MetadataBearer;

/**
 * <p>Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled
 *             by various email providers around the world. When you perform a predictive inbox placement test, you provide a
 *             sample message that contains the content that you plan to send to your customers. Amazon Pinpoint
 *             then sends that message to special email addresses spread across several major email
 *             providers. After about 24 hours, the test is complete, and you can use the
 *                 <code>GetDeliverabilityTestReport</code> operation to view the results of the
 *             test.</p>
 */
export class CreateDeliverabilityTestReportCommand extends $Command<
  CreateDeliverabilityTestReportCommandInput,
  CreateDeliverabilityTestReportCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDeliverabilityTestReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointEmailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDeliverabilityTestReportCommandInput, CreateDeliverabilityTestReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "CreateDeliverabilityTestReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDeliverabilityTestReportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDeliverabilityTestReportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateDeliverabilityTestReportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDeliverabilityTestReportCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDeliverabilityTestReportCommandOutput> {
    return deserializeAws_restJson1CreateDeliverabilityTestReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
