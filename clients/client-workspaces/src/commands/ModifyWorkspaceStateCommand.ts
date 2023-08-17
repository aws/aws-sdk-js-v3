// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ModifyWorkspaceStateRequest, ModifyWorkspaceStateResult } from "../models/models_0";
import { de_ModifyWorkspaceStateCommand, se_ModifyWorkspaceStateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyWorkspaceStateCommand}.
 */
export interface ModifyWorkspaceStateCommandInput extends ModifyWorkspaceStateRequest {}
/**
 * @public
 *
 * The output of {@link ModifyWorkspaceStateCommand}.
 */
export interface ModifyWorkspaceStateCommandOutput extends ModifyWorkspaceStateResult, __MetadataBearer {}

/**
 * @public
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
 * const input = { // ModifyWorkspaceStateRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   WorkspaceState: "AVAILABLE" || "ADMIN_MAINTENANCE", // required
 * };
 * const command = new ModifyWorkspaceStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyWorkspaceStateCommandInput - {@link ModifyWorkspaceStateCommandInput}
 * @returns {@link ModifyWorkspaceStateCommandOutput}
 * @see {@link ModifyWorkspaceStateCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceStateCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ModifyWorkspaceStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyWorkspaceStateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyWorkspaceStateCommandOutput> {
    return de_ModifyWorkspaceStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
