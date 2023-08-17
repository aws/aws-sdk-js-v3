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

import { CreateWorkspacesRequest, CreateWorkspacesResult } from "../models/models_0";
import { de_CreateWorkspacesCommand, se_CreateWorkspacesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkspacesCommand}.
 */
export interface CreateWorkspacesCommandInput extends CreateWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkspacesCommand}.
 */
export interface CreateWorkspacesCommandOutput extends CreateWorkspacesResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates one or more WorkSpaces.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>
 *          <note>
 *             <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces
 *             Core. Contact your account team to be allow-listed to use this value. For more
 *             information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces
 *                Core</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateWorkspacesRequest
 *   Workspaces: [ // WorkspaceRequestList // required
 *     { // WorkspaceRequest
 *       DirectoryId: "STRING_VALUE", // required
 *       UserName: "STRING_VALUE", // required
 *       BundleId: "STRING_VALUE", // required
 *       VolumeEncryptionKey: "STRING_VALUE",
 *       UserVolumeEncryptionEnabled: true || false,
 *       RootVolumeEncryptionEnabled: true || false,
 *       WorkspaceProperties: { // WorkspaceProperties
 *         RunningMode: "AUTO_STOP" || "ALWAYS_ON" || "MANUAL",
 *         RunningModeAutoStopTimeoutInMinutes: Number("int"),
 *         RootVolumeSizeGib: Number("int"),
 *         UserVolumeSizeGib: Number("int"),
 *         ComputeTypeName: "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 *         Protocols: [ // ProtocolList
 *           "PCOIP" || "WSP",
 *         ],
 *       },
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkspacesResult
 * //   FailedRequests: [ // FailedCreateWorkspaceRequests
 * //     { // FailedCreateWorkspaceRequest
 * //       WorkspaceRequest: { // WorkspaceRequest
 * //         DirectoryId: "STRING_VALUE", // required
 * //         UserName: "STRING_VALUE", // required
 * //         BundleId: "STRING_VALUE", // required
 * //         VolumeEncryptionKey: "STRING_VALUE",
 * //         UserVolumeEncryptionEnabled: true || false,
 * //         RootVolumeEncryptionEnabled: true || false,
 * //         WorkspaceProperties: { // WorkspaceProperties
 * //           RunningMode: "AUTO_STOP" || "ALWAYS_ON" || "MANUAL",
 * //           RunningModeAutoStopTimeoutInMinutes: Number("int"),
 * //           RootVolumeSizeGib: Number("int"),
 * //           UserVolumeSizeGib: Number("int"),
 * //           ComputeTypeName: "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 * //           Protocols: [ // ProtocolList
 * //             "PCOIP" || "WSP",
 * //           ],
 * //         },
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PendingRequests: [ // WorkspaceList
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
 * //       WorkspaceProperties: {
 * //         RunningMode: "AUTO_STOP" || "ALWAYS_ON" || "MANUAL",
 * //         RunningModeAutoStopTimeoutInMinutes: Number("int"),
 * //         RootVolumeSizeGib: Number("int"),
 * //         UserVolumeSizeGib: Number("int"),
 * //         ComputeTypeName: "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 * //         Protocols: [
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
 * // };
 *
 * ```
 *
 * @param CreateWorkspacesCommandInput - {@link CreateWorkspacesCommandInput}
 * @returns {@link CreateWorkspacesCommandOutput}
 * @see {@link CreateWorkspacesCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class CreateWorkspacesCommand extends $Command<
  CreateWorkspacesCommandInput,
  CreateWorkspacesCommandOutput,
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
  constructor(readonly input: CreateWorkspacesCommandInput) {
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
  ): Handler<CreateWorkspacesCommandInput, CreateWorkspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkspacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "CreateWorkspacesCommand";
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
  private serialize(input: CreateWorkspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWorkspacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkspacesCommandOutput> {
    return de_CreateWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
