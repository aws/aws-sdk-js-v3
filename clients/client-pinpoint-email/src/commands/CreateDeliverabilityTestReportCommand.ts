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

export interface CreateDeliverabilityTestReportCommandInput extends CreateDeliverabilityTestReportRequest {}
export interface CreateDeliverabilityTestReportCommandOutput
  extends CreateDeliverabilityTestReportResponse,
    __MetadataBearer {}

/**
 * <p>Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled
 *             by various email providers around the world. When you perform a predictive inbox placement test, you provide a
 *             sample message that contains the content that you plan to send to your customers. Amazon Pinpoint
 *             then sends that message to special email addresses spread across several major email
 *             providers. After about 24 hours, the test is complete, and you can use the
 *                 <code>GetDeliverabilityTestReport</code> operation to view the results of the
 *             test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, CreateDeliverabilityTestReportCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, CreateDeliverabilityTestReportCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new CreateDeliverabilityTestReportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDeliverabilityTestReportCommandInput} for command's `input` shape.
 * @see {@link CreateDeliverabilityTestReportCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
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
