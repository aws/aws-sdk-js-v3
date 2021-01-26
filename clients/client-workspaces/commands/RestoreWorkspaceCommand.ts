import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { RestoreWorkspaceRequest, RestoreWorkspaceResult } from "../models/models_0";
import {
  deserializeAws_json1_1RestoreWorkspaceCommand,
  serializeAws_json1_1RestoreWorkspaceCommand,
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

export type RestoreWorkspaceCommandInput = RestoreWorkspaceRequest;
export type RestoreWorkspaceCommandOutput = RestoreWorkspaceResult & __MetadataBearer;

/**
 * <p>Restores the specified WorkSpace to its last known healthy state.</p>
 *          <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>,
 *             <code>ERROR</code>, <code>UNHEALTHY</code>, or <code>STOPPED</code>.</p>
 *          <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of
 *          data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a
 *          WorkSpace</a>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpace is completely
 *          restored.</p>
 */
export class RestoreWorkspaceCommand extends $Command<
  RestoreWorkspaceCommandInput,
  RestoreWorkspaceCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreWorkspaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreWorkspaceCommandInput, RestoreWorkspaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "RestoreWorkspaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreWorkspaceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreWorkspaceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreWorkspaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RestoreWorkspaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreWorkspaceCommandOutput> {
    return deserializeAws_json1_1RestoreWorkspaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
