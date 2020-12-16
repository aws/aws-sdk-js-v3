import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteBGPPeerRequest, DeleteBGPPeerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteBGPPeerCommand,
  serializeAws_json1_1DeleteBGPPeerCommand,
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

export type DeleteBGPPeerCommandInput = DeleteBGPPeerRequest;
export type DeleteBGPPeerCommandOutput = DeleteBGPPeerResponse & __MetadataBearer;

/**
 * <p>Deletes the specified BGP peer on the specified virtual interface with the specified customer address and ASN.</p>
 *          <p>You cannot delete the last BGP peer from a virtual interface.</p>
 */
export class DeleteBGPPeerCommand extends $Command<
  DeleteBGPPeerCommandInput,
  DeleteBGPPeerCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBGPPeerCommandInput) {
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
  ): Handler<DeleteBGPPeerCommandInput, DeleteBGPPeerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DeleteBGPPeerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBGPPeerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBGPPeerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBGPPeerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteBGPPeerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBGPPeerCommandOutput> {
    return deserializeAws_json1_1DeleteBGPPeerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
