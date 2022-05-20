// smithy-typescript generated code
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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DisassociatePhoneNumberContactFlowRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DisassociatePhoneNumberContactFlowCommand,
  serializeAws_restJson1DisassociatePhoneNumberContactFlowCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociatePhoneNumberContactFlowCommandInput extends DisassociatePhoneNumberContactFlowRequest {}
export interface DisassociatePhoneNumberContactFlowCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the contact flow association from a phone number claimed to your Amazon Connect instance, if a contact flow association exists.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociatePhoneNumberContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociatePhoneNumberContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DisassociatePhoneNumberContactFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociatePhoneNumberContactFlowCommandInput} for command's `input` shape.
 * @see {@link DisassociatePhoneNumberContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class DisassociatePhoneNumberContactFlowCommand extends $Command<
  DisassociatePhoneNumberContactFlowCommandInput,
  DisassociatePhoneNumberContactFlowCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociatePhoneNumberContactFlowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociatePhoneNumberContactFlowCommandInput, DisassociatePhoneNumberContactFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DisassociatePhoneNumberContactFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociatePhoneNumberContactFlowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociatePhoneNumberContactFlowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociatePhoneNumberContactFlowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociatePhoneNumberContactFlowCommandOutput> {
    return deserializeAws_restJson1DisassociatePhoneNumberContactFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
