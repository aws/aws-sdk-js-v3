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

import { ModifyWorkspaceAccessPropertiesRequest, ModifyWorkspaceAccessPropertiesResult } from "../models/models_0";
import {
  de_ModifyWorkspaceAccessPropertiesCommand,
  se_ModifyWorkspaceAccessPropertiesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyWorkspaceAccessPropertiesCommand}.
 */
export interface ModifyWorkspaceAccessPropertiesCommandInput extends ModifyWorkspaceAccessPropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ModifyWorkspaceAccessPropertiesCommand}.
 */
export interface ModifyWorkspaceAccessPropertiesCommandOutput
  extends ModifyWorkspaceAccessPropertiesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Specifies which devices and operating systems users can use to access their WorkSpaces.
 *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access">
 *             Control Device Access</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, ModifyWorkspaceAccessPropertiesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, ModifyWorkspaceAccessPropertiesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // ModifyWorkspaceAccessPropertiesRequest
 *   ResourceId: "STRING_VALUE", // required
 *   WorkspaceAccessProperties: { // WorkspaceAccessProperties
 *     DeviceTypeWindows: "ALLOW" || "DENY",
 *     DeviceTypeOsx: "ALLOW" || "DENY",
 *     DeviceTypeWeb: "ALLOW" || "DENY",
 *     DeviceTypeIos: "ALLOW" || "DENY",
 *     DeviceTypeAndroid: "ALLOW" || "DENY",
 *     DeviceTypeChromeOs: "ALLOW" || "DENY",
 *     DeviceTypeZeroClient: "ALLOW" || "DENY",
 *     DeviceTypeLinux: "ALLOW" || "DENY",
 *   },
 * };
 * const command = new ModifyWorkspaceAccessPropertiesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ModifyWorkspaceAccessPropertiesCommandInput - {@link ModifyWorkspaceAccessPropertiesCommandInput}
 * @returns {@link ModifyWorkspaceAccessPropertiesCommandOutput}
 * @see {@link ModifyWorkspaceAccessPropertiesCommandInput} for command's `input` shape.
 * @see {@link ModifyWorkspaceAccessPropertiesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class ModifyWorkspaceAccessPropertiesCommand extends $Command<
  ModifyWorkspaceAccessPropertiesCommandInput,
  ModifyWorkspaceAccessPropertiesCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyWorkspaceAccessPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ModifyWorkspaceAccessPropertiesCommand";
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
  private serialize(
    input: ModifyWorkspaceAccessPropertiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyWorkspaceAccessPropertiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyWorkspaceAccessPropertiesCommandOutput> {
    return de_ModifyWorkspaceAccessPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
