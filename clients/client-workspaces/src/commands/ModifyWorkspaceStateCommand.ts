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
  ModifyWorkspaceStateRequest,
  ModifyWorkspaceStateRequestFilterSensitiveLog,
  ModifyWorkspaceStateResult,
  ModifyWorkspaceStateResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ModifyWorkspaceStateCommand,
  serializeAws_json1_1ModifyWorkspaceStateCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface ModifyWorkspaceStateCommandInput extends ModifyWorkspaceStateRequest {}
export interface ModifyWorkspaceStateCommandOutput extends ModifyWorkspaceStateResult, __MetadataBearer {}

/**
 * <p>Sets the state of the specified WorkSpace.</p>
 *          <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to
 *             <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to
 *          reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not
 *          stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code>
 *          state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspaceStateCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspaceStateCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new ModifyWorkspaceStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyWorkspaceStateCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceStateCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class ModifyWorkspaceStateCommand extends $Command<
  ModifyWorkspaceStateCommandInput,
  ModifyWorkspaceStateCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyWorkspaceStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifyWorkspaceStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyWorkspaceStateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyWorkspaceStateResultFilterSensitiveLog,
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
