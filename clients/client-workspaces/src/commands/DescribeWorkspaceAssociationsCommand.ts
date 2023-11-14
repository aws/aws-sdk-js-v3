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

import { DescribeWorkspaceAssociationsRequest, DescribeWorkspaceAssociationsResult } from "../models/models_0";
import {
  de_DescribeWorkspaceAssociationsCommand,
  se_DescribeWorkspaceAssociationsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceAssociationsCommand}.
 */
export interface DescribeWorkspaceAssociationsCommandInput extends DescribeWorkspaceAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceAssociationsCommand}.
 */
export interface DescribeWorkspaceAssociationsCommandOutput
  extends DescribeWorkspaceAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the associations betweens applications and the specified WorkSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceAssociationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceAssociationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceAssociationsRequest
 *   WorkspaceId: "STRING_VALUE", // required
 *   AssociatedResourceTypes: [ // WorkSpaceAssociatedResourceTypeList // required
 *     "APPLICATION",
 *   ],
 * };
 * const command = new DescribeWorkspaceAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceAssociationsResult
 * //   Associations: [ // WorkspaceResourceAssociationList
 * //     { // WorkspaceResourceAssociation
 * //       AssociatedResourceId: "STRING_VALUE",
 * //       AssociatedResourceType: "APPLICATION",
 * //       Created: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       State: "PENDING_INSTALL" || "PENDING_INSTALL_DEPLOYMENT" || "PENDING_UNINSTALL" || "PENDING_UNINSTALL_DEPLOYMENT" || "INSTALLING" || "UNINSTALLING" || "ERROR" || "COMPLETED" || "REMOVED",
 * //       StateReason: { // AssociationStateReason
 * //         ErrorCode: "ValidationError.InsufficientDiskSpace" || "ValidationError.InsufficientMemory" || "ValidationError.UnsupportedOperatingSystem" || "DeploymentError.InternalServerError" || "DeploymentError.WorkspaceUnreachable",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //       WorkspaceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceAssociationsCommandInput - {@link DescribeWorkspaceAssociationsCommandInput}
 * @returns {@link DescribeWorkspaceAssociationsCommandOutput}
 * @see {@link DescribeWorkspaceAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceAssociationsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
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
export class DescribeWorkspaceAssociationsCommand extends $Command<
  DescribeWorkspaceAssociationsCommandInput,
  DescribeWorkspaceAssociationsCommandOutput,
  WorkSpacesClientResolvedConfig
> {
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
  constructor(readonly input: DescribeWorkspaceAssociationsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkspaceAssociationsCommandInput, DescribeWorkspaceAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkspaceAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspaceAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "DescribeWorkspaceAssociations",
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
  private serialize(input: DescribeWorkspaceAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWorkspaceAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkspaceAssociationsCommandOutput> {
    return de_DescribeWorkspaceAssociationsCommand(output, context);
  }
}
