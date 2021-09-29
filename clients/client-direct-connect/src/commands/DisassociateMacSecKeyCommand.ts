import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DisassociateMacSecKeyRequest, DisassociateMacSecKeyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateMacSecKeyCommand,
  serializeAws_json1_1DisassociateMacSecKeyCommand,
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

export interface DisassociateMacSecKeyCommandInput extends DisassociateMacSecKeyRequest {}
export interface DisassociateMacSecKeyCommandOutput extends DisassociateMacSecKeyResponse, __MetadataBearer {}

/**
 * <p>Removes the association between a MAC Security (MACsec) security key and an Direct Connect dedicated connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DisassociateMacSecKeyCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DisassociateMacSecKeyCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DisassociateMacSecKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMacSecKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateMacSecKeyCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DisassociateMacSecKeyCommand extends $Command<
  DisassociateMacSecKeyCommandInput,
  DisassociateMacSecKeyCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateMacSecKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateMacSecKeyCommandInput, DisassociateMacSecKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DisassociateMacSecKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateMacSecKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateMacSecKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateMacSecKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateMacSecKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateMacSecKeyCommandOutput> {
    return deserializeAws_json1_1DisassociateMacSecKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
