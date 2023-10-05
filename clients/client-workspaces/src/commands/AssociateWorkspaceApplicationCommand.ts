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

import { AssociateWorkspaceApplicationRequest, AssociateWorkspaceApplicationResult } from "../models/models_0";
import {
  de_AssociateWorkspaceApplicationCommand,
  se_AssociateWorkspaceApplicationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateWorkspaceApplicationCommand}.
 */
export interface AssociateWorkspaceApplicationCommandInput extends AssociateWorkspaceApplicationRequest {}
/**
 * @public
 *
 * The output of {@link AssociateWorkspaceApplicationCommand}.
 */
export interface AssociateWorkspaceApplicationCommandOutput
  extends AssociateWorkspaceApplicationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates the specified application to the specified WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AssociateWorkspaceApplicationCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AssociateWorkspaceApplicationCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // AssociateWorkspaceApplicationRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new AssociateWorkspaceApplicationCommand(input);
 * const response = await client.send(command);
 * // { // AssociateWorkspaceApplicationResult
 * //   Association: { // WorkspaceResourceAssociation
 * //     AssociatedResourceId: "STRING_VALUE",
 * //     AssociatedResourceType: "APPLICATION",
 * //     Created: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //     StateReason: { // AssociationStateReason
 * //       ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //     WorkspaceId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateWorkspaceApplicationCommandInput - {@link AssociateWorkspaceApplicationCommandInput}
 * @returns {@link AssociateWorkspaceApplicationCommandOutput}
 * @see {@link AssociateWorkspaceApplicationCommandInput} for command's `input` shape.
 * @see {@link AssociateWorkspaceApplicationCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link ApplicationNotSupportedException} (client fault)
 *  <p>The specified application is not supported.</p>
 *
 * @throws {@link ComputeNotCompatibleException} (client fault)
 *  <p>The compute type of the WorkSpace is not compatible with the application.</p>
 *
 * @throws {@link IncompatibleApplicationsException} (client fault)
 *  <p>The specified application is not compatible with the resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperatingSystemNotCompatibleException} (client fault)
 *  <p>The operating system of the WorkSpace is not compatible with the application.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is currently in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class AssociateWorkspaceApplicationCommand extends $Command<
  AssociateWorkspaceApplicationCommandInput,
  AssociateWorkspaceApplicationCommandOutput,
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
  constructor(readonly input: AssociateWorkspaceApplicationCommandInput) {
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
  ): Handler<AssociateWorkspaceApplicationCommandInput, AssociateWorkspaceApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateWorkspaceApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "AssociateWorkspaceApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "AssociateWorkspaceApplication",
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
  private serialize(input: AssociateWorkspaceApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateWorkspaceApplicationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateWorkspaceApplicationCommandOutput> {
    return de_AssociateWorkspaceApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
