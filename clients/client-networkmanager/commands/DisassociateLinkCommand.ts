import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { DisassociateLinkRequest, DisassociateLinkResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateLinkCommand,
  serializeAws_restJson1DisassociateLinkCommand,
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

export type DisassociateLinkCommandInput = DisassociateLinkRequest;
export type DisassociateLinkCommandOutput = DisassociateLinkResponse & __MetadataBearer;

/**
 * <p>Disassociates an existing device from a link. You must first disassociate any customer
 *             gateways that are associated with the link.</p>
 */
export class DisassociateLinkCommand extends $Command<
  DisassociateLinkCommandInput,
  DisassociateLinkCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateLinkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateLinkCommandInput, DisassociateLinkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "DisassociateLinkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateLinkRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateLinkResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateLinkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateLinkCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateLinkCommandOutput> {
    return deserializeAws_restJson1DisassociateLinkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
