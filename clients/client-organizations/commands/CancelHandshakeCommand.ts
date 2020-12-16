import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CancelHandshakeRequest, CancelHandshakeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CancelHandshakeCommand,
  serializeAws_json1_1CancelHandshakeCommand,
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

export type CancelHandshakeCommandInput = CancelHandshakeRequest;
export type CancelHandshakeCommandOutput = CancelHandshakeResponse & __MetadataBearer;

/**
 * <p>Cancels a handshake. Canceling a handshake sets the handshake state to
 *                 <code>CANCELED</code>.</p>
 *         <p>This operation can be called only from the account that originated the handshake. The recipient of the handshake can't cancel it, but can use <a>DeclineHandshake</a> instead. After a handshake is canceled, the recipient
 *             can no longer respond to that handshake.</p>
 *         <p>After you cancel a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 */
export class CancelHandshakeCommand extends $Command<
  CancelHandshakeCommandInput,
  CancelHandshakeCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelHandshakeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelHandshakeCommandInput, CancelHandshakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "CancelHandshakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelHandshakeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CancelHandshakeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelHandshakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelHandshakeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelHandshakeCommandOutput> {
    return deserializeAws_json1_1CancelHandshakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
