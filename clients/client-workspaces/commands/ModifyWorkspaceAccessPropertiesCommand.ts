import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyWorkspaceAccessPropertiesRequest, ModifyWorkspaceAccessPropertiesResult } from "../models/models_0";
import {
  deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand,
  serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand,
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

export type ModifyWorkspaceAccessPropertiesCommandInput = ModifyWorkspaceAccessPropertiesRequest;
export type ModifyWorkspaceAccessPropertiesCommandOutput = ModifyWorkspaceAccessPropertiesResult & __MetadataBearer;

/**
 * <p>Specifies which devices and operating systems users can use to access their WorkSpaces.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access">
 *             Control Device Access</a>.</p>
 */
export class ModifyWorkspaceAccessPropertiesCommand extends $Command<
  ModifyWorkspaceAccessPropertiesCommandInput,
  ModifyWorkspaceAccessPropertiesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyWorkspaceAccessPropertiesCommandInput) {
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
  ): Handler<ModifyWorkspaceAccessPropertiesCommandInput, ModifyWorkspaceAccessPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifyWorkspaceAccessPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyWorkspaceAccessPropertiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyWorkspaceAccessPropertiesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyWorkspaceAccessPropertiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyWorkspaceAccessPropertiesCommandOutput> {
    return deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
