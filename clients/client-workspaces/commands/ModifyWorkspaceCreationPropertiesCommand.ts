import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyWorkspaceCreationPropertiesRequest, ModifyWorkspaceCreationPropertiesResult } from "../models/models_0";
import {
  deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand,
  serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand,
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

export type ModifyWorkspaceCreationPropertiesCommandInput = ModifyWorkspaceCreationPropertiesRequest;
export type ModifyWorkspaceCreationPropertiesCommandOutput = ModifyWorkspaceCreationPropertiesResult & __MetadataBearer;

/**
 * <p>Modify the default properties used to create WorkSpaces.</p>
 */
export class ModifyWorkspaceCreationPropertiesCommand extends $Command<
  ModifyWorkspaceCreationPropertiesCommandInput,
  ModifyWorkspaceCreationPropertiesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyWorkspaceCreationPropertiesCommandInput) {
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
  ): Handler<ModifyWorkspaceCreationPropertiesCommandInput, ModifyWorkspaceCreationPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifyWorkspaceCreationPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyWorkspaceCreationPropertiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyWorkspaceCreationPropertiesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyWorkspaceCreationPropertiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyWorkspaceCreationPropertiesCommandOutput> {
    return deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
