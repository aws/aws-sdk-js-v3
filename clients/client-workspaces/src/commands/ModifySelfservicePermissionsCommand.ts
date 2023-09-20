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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ModifySelfservicePermissionsRequest, ModifySelfservicePermissionsResult } from "../models/models_0";
import {
  de_ModifySelfservicePermissionsCommand,
  se_ModifySelfservicePermissionsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifySelfservicePermissionsCommand}.
 */
export interface ModifySelfservicePermissionsCommandInput extends ModifySelfservicePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifySelfservicePermissionsCommand}.
 */
export interface ModifySelfservicePermissionsCommandOutput
  extends ModifySelfservicePermissionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the self-service WorkSpace management capabilities for your users. For more
 *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifySelfservicePermissionsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifySelfservicePermissionsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifySelfservicePermissionsRequest
 *   ResourceId: "STRING_VALUE", // required
 *   SelfservicePermissions: { // SelfservicePermissions
 *     RestartWorkspace: "ENABLED" || "DISABLED",
 *     IncreaseVolumeSize: "ENABLED" || "DISABLED",
 *     ChangeComputeType: "ENABLED" || "DISABLED",
 *     SwitchRunningMode: "ENABLED" || "DISABLED",
 *     RebuildWorkspace: "ENABLED" || "DISABLED",
 *   },
 * };
 * const command = new ModifySelfservicePermissionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifySelfservicePermissionsCommandInput - {@link ModifySelfservicePermissionsCommandInput}
 * @returns {@link ModifySelfservicePermissionsCommandOutput}
 * @see {@link ModifySelfservicePermissionsCommandInput} for command's `input` shape.
 * @see {@link ModifySelfservicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class ModifySelfservicePermissionsCommand extends $Command<
  ModifySelfservicePermissionsCommandInput,
  ModifySelfservicePermissionsCommandOutput,
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
  constructor(readonly input: ModifySelfservicePermissionsCommandInput) {
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
  ): Handler<ModifySelfservicePermissionsCommandInput, ModifySelfservicePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySelfservicePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifySelfservicePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "ModifySelfservicePermissions",
      },
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
  private serialize(input: ModifySelfservicePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifySelfservicePermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifySelfservicePermissionsCommandOutput> {
    return de_ModifySelfservicePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
