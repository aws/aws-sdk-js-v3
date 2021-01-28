import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyWorkspacePropertiesRequest, ModifyWorkspacePropertiesResult } from "../models/models_0";
import {
  deserializeAws_json1_1ModifyWorkspacePropertiesCommand,
  serializeAws_json1_1ModifyWorkspacePropertiesCommand,
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

export type ModifyWorkspacePropertiesCommandInput = ModifyWorkspacePropertiesRequest;
export type ModifyWorkspacePropertiesCommandOutput = ModifyWorkspacePropertiesResult & __MetadataBearer;

/**
 * <p>Modifies the specified WorkSpace properties. For important information about how
 *          to modify the size of the root and user volumes, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/modify-workspaces.html">
 *             Modify a WorkSpace</a>.
 *       </p>
 */
export class ModifyWorkspacePropertiesCommand extends $Command<
  ModifyWorkspacePropertiesCommandInput,
  ModifyWorkspacePropertiesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyWorkspacePropertiesCommandInput) {
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
  ): Handler<ModifyWorkspacePropertiesCommandInput, ModifyWorkspacePropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifyWorkspacePropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyWorkspacePropertiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyWorkspacePropertiesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyWorkspacePropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyWorkspacePropertiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyWorkspacePropertiesCommandOutput> {
    return deserializeAws_json1_1ModifyWorkspacePropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
