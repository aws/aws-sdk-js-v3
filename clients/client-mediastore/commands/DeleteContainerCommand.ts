import { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import { DeleteContainerInput, DeleteContainerOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteContainerCommand,
  serializeAws_json1_1DeleteContainerCommand,
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

export type DeleteContainerCommandInput = DeleteContainerInput;
export type DeleteContainerCommandOutput = DeleteContainerOutput & __MetadataBearer;

/**
 * <p>Deletes the specified container. Before you make a <code>DeleteContainer</code>
 *          request, delete any objects in the container or in any folders in the container. You can
 *          delete only empty containers. </p>
 */
export class DeleteContainerCommand extends $Command<
  DeleteContainerCommandInput,
  DeleteContainerCommandOutput,
  MediaStoreClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteContainerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteContainerCommandInput, DeleteContainerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreClient";
    const commandName = "DeleteContainerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteContainerInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteContainerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteContainerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteContainerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteContainerCommandOutput> {
    return deserializeAws_json1_1DeleteContainerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
