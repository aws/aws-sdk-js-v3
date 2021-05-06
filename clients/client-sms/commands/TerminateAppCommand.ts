import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { TerminateAppRequest, TerminateAppResponse } from "../models/models_0";
import {
  deserializeAws_json1_1TerminateAppCommand,
  serializeAws_json1_1TerminateAppCommand,
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

export interface TerminateAppCommandInput extends TerminateAppRequest {}
export interface TerminateAppCommandOutput extends TerminateAppResponse, __MetadataBearer {}

/**
 * <p>Terminates the stack for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, TerminateAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, TerminateAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new TerminateAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TerminateAppCommandInput} for command's `input` shape.
 * @see {@link TerminateAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class TerminateAppCommand extends $Command<
  TerminateAppCommandInput,
  TerminateAppCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TerminateAppCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TerminateAppCommandInput, TerminateAppCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "TerminateAppCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TerminateAppRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TerminateAppResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TerminateAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1TerminateAppCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TerminateAppCommandOutput> {
    return deserializeAws_json1_1TerminateAppCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
