import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { GetLinkAssociationsRequest, GetLinkAssociationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetLinkAssociationsCommand,
  serializeAws_restJson1GetLinkAssociationsCommand,
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

export type GetLinkAssociationsCommandInput = GetLinkAssociationsRequest;
export type GetLinkAssociationsCommandOutput = GetLinkAssociationsResponse & __MetadataBearer;

/**
 * <p>Gets the link associations for a device or a link. Either the device ID or the link ID
 *             must be specified.</p>
 */
export class GetLinkAssociationsCommand extends $Command<
  GetLinkAssociationsCommandInput,
  GetLinkAssociationsCommandOutput,
  NetworkManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLinkAssociationsCommandInput) {
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
  ): Handler<GetLinkAssociationsCommandInput, GetLinkAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetLinkAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLinkAssociationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLinkAssociationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLinkAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLinkAssociationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLinkAssociationsCommandOutput> {
    return deserializeAws_restJson1GetLinkAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
