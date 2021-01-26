import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DeleteMeshInput, DeleteMeshOutput } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMeshCommand,
  serializeAws_restJson1DeleteMeshCommand,
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

export type DeleteMeshCommandInput = DeleteMeshInput;
export type DeleteMeshCommandOutput = DeleteMeshOutput & __MetadataBearer;

/**
 * <p>Deletes an existing service mesh.</p>
 *          <p>You must delete all resources (virtual services, routes, virtual routers, and virtual
 *          nodes) in the service mesh before you can delete the mesh itself.</p>
 */
export class DeleteMeshCommand extends $Command<
  DeleteMeshCommandInput,
  DeleteMeshCommandOutput,
  AppMeshClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMeshCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMeshCommandInput, DeleteMeshCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DeleteMeshCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMeshInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMeshOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMeshCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMeshCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMeshCommandOutput> {
    return deserializeAws_restJson1DeleteMeshCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
