import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { PutAccountSendingAttributesRequest, PutAccountSendingAttributesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1PutAccountSendingAttributesCommand,
  serializeAws_restJson1PutAccountSendingAttributesCommand,
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

export interface PutAccountSendingAttributesCommandInput extends PutAccountSendingAttributesRequest {}
export interface PutAccountSendingAttributesCommandOutput
  extends PutAccountSendingAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Enable or disable the ability of your account to send email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutAccountSendingAttributesCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutAccountSendingAttributesCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new PutAccountSendingAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccountSendingAttributesCommandInput} for command's `input` shape.
 * @see {@link PutAccountSendingAttributesCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutAccountSendingAttributesCommand extends $Command<
  PutAccountSendingAttributesCommandInput,
  PutAccountSendingAttributesCommandOutput,
  PinpointEmailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAccountSendingAttributesCommandInput) {
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
  ): Handler<PutAccountSendingAttributesCommandInput, PutAccountSendingAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointEmailClient";
    const commandName = "PutAccountSendingAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccountSendingAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutAccountSendingAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAccountSendingAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutAccountSendingAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutAccountSendingAttributesCommandOutput> {
    return deserializeAws_restJson1PutAccountSendingAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
