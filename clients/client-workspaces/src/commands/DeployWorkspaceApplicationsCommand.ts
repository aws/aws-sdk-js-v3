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

import { DeployWorkspaceApplicationsRequest, DeployWorkspaceApplicationsResult } from "../models/models_0";
import { de_DeployWorkspaceApplicationsCommand, se_DeployWorkspaceApplicationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeployWorkspaceApplicationsCommand}.
 */
export interface DeployWorkspaceApplicationsCommandInput extends DeployWorkspaceApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link DeployWorkspaceApplicationsCommand}.
 */
export interface DeployWorkspaceApplicationsCommandOutput extends DeployWorkspaceApplicationsResult, __MetadataBearer {}

/**
 * @public
 * <p>Deploys associated applications to the specified WorkSpace</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DeployWorkspaceApplicationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DeployWorkspaceApplicationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DeployWorkspaceApplicationsRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   Force: true || false,
 * };
 * const command = new DeployWorkspaceApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // DeployWorkspaceApplicationsResult
 * //   Deployment: { // WorkSpaceApplicationDeployment
 * //     Associations: [ // WorkspaceResourceAssociationList
 * //       { // WorkspaceResourceAssociation
 * //         AssociatedResourceId: "STRING_VALUE",
 * //         AssociatedResourceType: "APPLICATION",
 * //         Created: new Date("TIMESTAMP"),
 * //         LastUpdatedTime: new Date("TIMESTAMP"),
 * //         State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //         StateReason: { // AssociationStateReason
 * //           ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //         WorkspaceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeployWorkspaceApplicationsCommandInput - {@link DeployWorkspaceApplicationsCommandInput}
 * @returns {@link DeployWorkspaceApplicationsCommandOutput}
 * @see {@link DeployWorkspaceApplicationsCommandInput} for command's `input` shape.
 * @see {@link DeployWorkspaceApplicationsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link IncompatibleApplicationsException} (client fault)
 *  <p>The specified application is not compatible with the resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
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
export class DeployWorkspaceApplicationsCommand extends $Command<
  DeployWorkspaceApplicationsCommandInput,
  DeployWorkspaceApplicationsCommandOutput,
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
  constructor(readonly input: DeployWorkspaceApplicationsCommandInput) {
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
  ): Handler<DeployWorkspaceApplicationsCommandInput, DeployWorkspaceApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeployWorkspaceApplicationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DeployWorkspaceApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "DeployWorkspaceApplications",
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
  private serialize(input: DeployWorkspaceApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeployWorkspaceApplicationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeployWorkspaceApplicationsCommandOutput> {
    return de_DeployWorkspaceApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
