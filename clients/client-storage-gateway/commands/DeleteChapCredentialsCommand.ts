import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteChapCredentialsInput, DeleteChapCredentialsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteChapCredentialsCommand,
  serializeAws_json1_1DeleteChapCredentialsCommand,
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

export type DeleteChapCredentialsCommandInput = DeleteChapCredentialsInput;
export type DeleteChapCredentialsCommandOutput = DeleteChapCredentialsOutput & __MetadataBearer;

/**
 * <p>Deletes Challenge-Handshake Authentication Protocol (CHAP) credentials for a specified
 *          iSCSI target and initiator pair. This operation is supported in volume and tape gateway
 *          types.</p>
 */
export class DeleteChapCredentialsCommand extends $Command<
  DeleteChapCredentialsCommandInput,
  DeleteChapCredentialsCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteChapCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteChapCredentialsCommandInput, DeleteChapCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DeleteChapCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteChapCredentialsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteChapCredentialsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteChapCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteChapCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteChapCredentialsCommandOutput> {
    return deserializeAws_json1_1DeleteChapCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
