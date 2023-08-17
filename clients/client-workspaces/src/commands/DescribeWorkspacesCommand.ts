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

import { DescribeWorkspacesRequest, DescribeWorkspacesResult } from "../models/models_0";
import { de_DescribeWorkspacesCommand, se_DescribeWorkspacesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspacesCommand}.
 */
export interface DescribeWorkspacesCommandInput extends DescribeWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspacesCommand}.
 */
export interface DescribeWorkspacesCommandOutput extends DescribeWorkspacesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified WorkSpaces.</p>
 *          <p>You can filter the results by using the bundle identifier, directory identifier, or
 *          owner, but you can specify only one filter at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspacesRequest
 *   WorkspaceIds: [ // WorkspaceIdList
 *     "STRING_VALUE",
 *   ],
 *   DirectoryId: "STRING_VALUE",
 *   UserName: "STRING_VALUE",
 *   BundleId: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspacesResult
 * //   Workspaces: [ // WorkspaceList
 * //     { // Workspace
 * //       WorkspaceId: "STRING_VALUE",
 * //       DirectoryId: "STRING_VALUE",
 * //       UserName: "STRING_VALUE",
 * //       IpAddress: "STRING_VALUE",
 * //       State: "PENDING" || "AVAILABLE" || "IMPAIRED" || "UNHEALTHY" || "REBOOTING" || "STARTING" || "REBUILDING" || "RESTORING" || "MAINTENANCE" || "ADMIN_MAINTENANCE" || "TERMINATING" || "TERMINATED" || "SUSPENDED" || "UPDATING" || "STOPPING" || "STOPPED" || "ERROR",
 * //       BundleId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ComputerName: "STRING_VALUE",
 * //       VolumeEncryptionKey: "STRING_VALUE",
 * //       UserVolumeEncryptionEnabled: true || false,
 * //       RootVolumeEncryptionEnabled: true || false,
 * //       WorkspaceProperties: { // WorkspaceProperties
 * //         RunningMode: "AUTO_STOP" || "ALWAYS_ON" || "MANUAL",
 * //         RunningModeAutoStopTimeoutInMinutes: Number("int"),
 * //         RootVolumeSizeGib: Number("int"),
 * //         UserVolumeSizeGib: Number("int"),
 * //         ComputeTypeName: "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 * //         Protocols: [ // ProtocolList
 * //           "PCOIP" || "WSP",
 * //         ],
 * //       },
 * //       ModificationStates: [ // ModificationStateList
 * //         { // ModificationState
 * //           Resource: "ROOT_VOLUME" || "USER_VOLUME" || "COMPUTE_TYPE",
 * //           State: "UPDATE_INITIATED" || "UPDATE_IN_PROGRESS",
 * //         },
 * //       ],
 * //       RelatedWorkspaces: [ // RelatedWorkspaces
 * //         { // RelatedWorkspaceProperties
 * //           WorkspaceId: "STRING_VALUE",
 * //           Region: "STRING_VALUE",
 * //           State: "PENDING" || "AVAILABLE" || "IMPAIRED" || "UNHEALTHY" || "REBOOTING" || "STARTING" || "REBUILDING" || "RESTORING" || "MAINTENANCE" || "ADMIN_MAINTENANCE" || "TERMINATING" || "TERMINATED" || "SUSPENDED" || "UPDATING" || "STOPPING" || "STOPPED" || "ERROR",
 * //           Type: "PRIMARY" || "STANDBY",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkspacesCommandInput - {@link DescribeWorkspacesCommandInput}
 * @returns {@link DescribeWorkspacesCommandOutput}
 * @see {@link DescribeWorkspacesCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class DescribeWorkspacesCommand extends $Command<
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput,
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
  constructor(readonly input: DescribeWorkspacesCommandInput) {
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
  ): Handler<DescribeWorkspacesCommandInput, DescribeWorkspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkspacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "DescribeWorkspacesCommand";
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
  private serialize(input: DescribeWorkspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWorkspacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkspacesCommandOutput> {
    return de_DescribeWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
