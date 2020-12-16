import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteDeviceDefinitionRequest, DeleteDeviceDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDeviceDefinitionCommand,
  serializeAws_restJson1DeleteDeviceDefinitionCommand,
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

export type DeleteDeviceDefinitionCommandInput = DeleteDeviceDefinitionRequest;
export type DeleteDeviceDefinitionCommandOutput = DeleteDeviceDefinitionResponse & __MetadataBearer;

/**
 * Deletes a device definition.
 */
export class DeleteDeviceDefinitionCommand extends $Command<
  DeleteDeviceDefinitionCommandInput,
  DeleteDeviceDefinitionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDeviceDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeviceDefinitionCommandInput, DeleteDeviceDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "DeleteDeviceDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDeviceDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDeviceDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDeviceDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDeviceDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDeviceDefinitionCommandOutput> {
    return deserializeAws_restJson1DeleteDeviceDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
