// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ModifyWorkspaceCreationPropertiesRequest,
  ModifyWorkspaceCreationPropertiesRequestFilterSensitiveLog,
  ModifyWorkspaceCreationPropertiesResult,
  ModifyWorkspaceCreationPropertiesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand,
  serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface ModifyWorkspaceCreationPropertiesCommandInput extends ModifyWorkspaceCreationPropertiesRequest {}
export interface ModifyWorkspaceCreationPropertiesCommandOutput
  extends ModifyWorkspaceCreationPropertiesResult,
    __MetadataBearer {}

/**
 * <p>Modify the default properties used to create WorkSpaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspaceCreationPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspaceCreationPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyWorkspaceCreationPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyWorkspaceCreationPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceCreationPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class ModifyWorkspaceCreationPropertiesCommand extends $Command<
  ModifyWorkspaceCreationPropertiesCommandInput,
  ModifyWorkspaceCreationPropertiesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyWorkspaceCreationPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifyWorkspaceCreationPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyWorkspaceCreationPropertiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyWorkspaceCreationPropertiesResultFilterSensitiveLog,
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
