import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteNamespaceRequest, DeleteNamespaceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteNamespaceCommand,
  serializeAws_restJson1DeleteNamespaceCommand,
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

export type DeleteNamespaceCommandInput = DeleteNamespaceRequest;
export type DeleteNamespaceCommandOutput = DeleteNamespaceResponse & __MetadataBearer;

/**
 * <p>Deletes a namespace and the users and groups that are associated with the namespace.
 *         This is an asynchronous process. Assets including dashboards, analyses, datasets and data sources are not
 *         deleted. To delete these assets, you use the API operations for the relevant asset. </p>
 */
export class DeleteNamespaceCommand extends $Command<
  DeleteNamespaceCommandInput,
  DeleteNamespaceCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteNamespaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteNamespaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNamespaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteNamespaceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNamespaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteNamespaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNamespaceCommandOutput> {
    return deserializeAws_restJson1DeleteNamespaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
