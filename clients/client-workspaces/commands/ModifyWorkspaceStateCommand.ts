import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyWorkspaceStateRequest, ModifyWorkspaceStateResult } from "../models/models_0";
import {
  deserializeAws_json1_1ModifyWorkspaceStateCommand,
  serializeAws_json1_1ModifyWorkspaceStateCommand,
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

export type ModifyWorkspaceStateCommandInput = ModifyWorkspaceStateRequest;
export type ModifyWorkspaceStateCommandOutput = ModifyWorkspaceStateResult & __MetadataBearer;

/**
 * <p>Sets the state of the specified WorkSpace.</p>
 *          <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to
 *             <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to
 *          reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not
 *          stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code>
 *          state.</p>
 */
export class ModifyWorkspaceStateCommand extends $Command<
  ModifyWorkspaceStateCommandInput,
  ModifyWorkspaceStateCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyWorkspaceStateCommandInput) {
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
  ): Handler<ModifyWorkspaceStateCommandInput, ModifyWorkspaceStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifyWorkspaceStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyWorkspaceStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyWorkspaceStateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyWorkspaceStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyWorkspaceStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyWorkspaceStateCommandOutput> {
    return deserializeAws_json1_1ModifyWorkspaceStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
