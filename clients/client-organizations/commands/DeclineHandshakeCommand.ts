import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DeclineHandshakeRequest, DeclineHandshakeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeclineHandshakeCommand,
  serializeAws_json1_1DeclineHandshakeCommand,
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

export type DeclineHandshakeCommandInput = DeclineHandshakeRequest;
export type DeclineHandshakeCommandOutput = DeclineHandshakeResponse & __MetadataBearer;

/**
 * <p>Declines a handshake request. This sets the handshake state to <code>DECLINED</code>
 *             and effectively deactivates the request.</p>
 *         <p>This operation can be called only from the account that received the handshake. The originator of the handshake can use <a>CancelHandshake</a>
 *             instead. The originator can't reactivate a declined request, but can reinitiate the
 *             process with a new handshake request.</p>
 *         <p>After you decline a handshake, it continues to appear in the results of relevant APIs
 *             for only 30 days. After that, it's deleted.</p>
 */
export class DeclineHandshakeCommand extends $Command<
  DeclineHandshakeCommandInput,
  DeclineHandshakeCommandOutput,
  OrganizationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeclineHandshakeCommandInput) {
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
  ): Handler<DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DeclineHandshakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeclineHandshakeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeclineHandshakeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeclineHandshakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeclineHandshakeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeclineHandshakeCommandOutput> {
    return deserializeAws_json1_1DeclineHandshakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
