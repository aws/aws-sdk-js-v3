import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { UpdateServerRequest, UpdateServerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateServerCommand,
  serializeAws_json1_1UpdateServerCommand,
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

export type UpdateServerCommandInput = UpdateServerRequest;
export type UpdateServerCommandOutput = UpdateServerResponse & __MetadataBearer;

/**
 * <p>Updates the file transfer protocol-enabled server's properties after that server has
 *       been created.</p>
 *
 *          <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you
 *       updated.</p>
 */
export class UpdateServerCommand extends $Command<
  UpdateServerCommandInput,
  UpdateServerCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateServerCommandInput, UpdateServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "UpdateServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateServerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServerCommandOutput> {
    return deserializeAws_json1_1UpdateServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
