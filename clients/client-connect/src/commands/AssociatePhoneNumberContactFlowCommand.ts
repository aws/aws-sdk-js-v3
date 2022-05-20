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
import { AssociatePhoneNumberContactFlowRequest } from "../models/models_0";
import {
  deserializeAws_restJson1AssociatePhoneNumberContactFlowCommand,
  serializeAws_restJson1AssociatePhoneNumberContactFlowCommand,
} from "../protocols/Aws_restJson1";

export interface AssociatePhoneNumberContactFlowCommandInput extends AssociatePhoneNumberContactFlowRequest {}
export interface AssociatePhoneNumberContactFlowCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates a contact flow with a phone number claimed to your Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociatePhoneNumberContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociatePhoneNumberContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociatePhoneNumberContactFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociatePhoneNumberContactFlowCommandInput} for command's `input` shape.
 * @see {@link AssociatePhoneNumberContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class AssociatePhoneNumberContactFlowCommand extends $Command<
  AssociatePhoneNumberContactFlowCommandInput,
  AssociatePhoneNumberContactFlowCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociatePhoneNumberContactFlowCommandInput) {
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
  ): Handler<AssociatePhoneNumberContactFlowCommandInput, AssociatePhoneNumberContactFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "AssociatePhoneNumberContactFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociatePhoneNumberContactFlowRequest.filterSensitiveLog,
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
    input: AssociatePhoneNumberContactFlowCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociatePhoneNumberContactFlowCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociatePhoneNumberContactFlowCommandOutput> {
    return deserializeAws_restJson1AssociatePhoneNumberContactFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
