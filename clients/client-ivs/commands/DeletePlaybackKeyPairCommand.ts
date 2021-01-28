import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { DeletePlaybackKeyPairRequest, DeletePlaybackKeyPairResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeletePlaybackKeyPairCommand,
  serializeAws_restJson1DeletePlaybackKeyPairCommand,
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

export type DeletePlaybackKeyPairCommandInput = DeletePlaybackKeyPairRequest;
export type DeletePlaybackKeyPairCommandOutput = DeletePlaybackKeyPairResponse & __MetadataBearer;

/**
 * <p>Deletes a specified authorization key pair. This invalidates future viewer tokens
 *       generated using the key pair’s <code>privateKey</code>.</p>
 */
export class DeletePlaybackKeyPairCommand extends $Command<
  DeletePlaybackKeyPairCommandInput,
  DeletePlaybackKeyPairCommandOutput,
  IvsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePlaybackKeyPairCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeletePlaybackKeyPairCommandInput, DeletePlaybackKeyPairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "DeletePlaybackKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePlaybackKeyPairRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePlaybackKeyPairResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePlaybackKeyPairCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePlaybackKeyPairCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePlaybackKeyPairCommandOutput> {
    return deserializeAws_restJson1DeletePlaybackKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
