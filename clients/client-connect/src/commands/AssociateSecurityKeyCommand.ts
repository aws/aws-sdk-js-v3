import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { AssociateSecurityKeyRequest, AssociateSecurityKeyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateSecurityKeyCommand,
  serializeAws_restJson1AssociateSecurityKeyCommand,
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

export interface AssociateSecurityKeyCommandInput extends AssociateSecurityKeyRequest {}
export interface AssociateSecurityKeyCommandOutput extends AssociateSecurityKeyResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Associates a security key to the instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateSecurityKeyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateSecurityKeyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateSecurityKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateSecurityKeyCommandInput} for command's `input` shape.
 * @see {@link AssociateSecurityKeyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateSecurityKeyCommand extends $Command<
  AssociateSecurityKeyCommandInput,
  AssociateSecurityKeyCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateSecurityKeyCommandInput) {
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
  ): Handler<AssociateSecurityKeyCommandInput, AssociateSecurityKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "AssociateSecurityKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateSecurityKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateSecurityKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateSecurityKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateSecurityKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateSecurityKeyCommandOutput> {
    return deserializeAws_restJson1AssociateSecurityKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
