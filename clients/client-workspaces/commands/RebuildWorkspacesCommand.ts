import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { RebuildWorkspacesRequest, RebuildWorkspacesResult } from "../models/models_0";
import {
  deserializeAws_json1_1RebuildWorkspacesCommand,
  serializeAws_json1_1RebuildWorkspacesCommand,
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

export type RebuildWorkspacesCommandInput = RebuildWorkspacesRequest;
export type RebuildWorkspacesCommandOutput = RebuildWorkspacesResult & __MetadataBearer;

/**
 * <p>Rebuilds the specified WorkSpace.</p>
 *          <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>,
 *             <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or <code>REBOOTING</code>.</p>
 *          <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss
 *          of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a
 *          WorkSpace</a>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
 *          rebuilt.</p>
 */
export class RebuildWorkspacesCommand extends $Command<
  RebuildWorkspacesCommandInput,
  RebuildWorkspacesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RebuildWorkspacesCommandInput) {
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
  ): Handler<RebuildWorkspacesCommandInput, RebuildWorkspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "RebuildWorkspacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebuildWorkspacesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RebuildWorkspacesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebuildWorkspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RebuildWorkspacesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebuildWorkspacesCommandOutput> {
    return deserializeAws_json1_1RebuildWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
