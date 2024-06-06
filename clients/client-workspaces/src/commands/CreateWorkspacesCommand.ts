// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorkspacesRequest, CreateWorkspacesResult } from "../models/models_0";
import { de_CreateWorkspacesCommand, se_CreateWorkspacesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates one or more WorkSpaces.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The <code>MANUAL</code> running mode value is only supported by Amazon WorkSpaces
 *                Core. Contact your account team to be allow-listed to use this value. For more
 *                information, see <a href="http://aws.amazon.com/workspaces/core/">Amazon WorkSpaces
 *                   Core</a>.</p>
 *                </li>
 *                <li>
 *                   <p>You don't need to specify the <code>PCOIP</code> protocol for Linux bundles
 *                   because <code>WSP</code> is the default protocol for those bundles.</p>
 *                </li>
 *                <li>
 *                   <p>User-decoupled WorkSpaces are only supported by Amazon WorkSpaces
 *                Core.</p>
 *                </li>
 *             </ul>
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
 *         OperatingSystemName: "AMAZON_LINUX_2" || "UBUNTU_18_04" || "UBUNTU_20_04" || "UBUNTU_22_04" || "UNKNOWN" || "WINDOWS_10" || "WINDOWS_11" || "WINDOWS_7" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022",
 *       },
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *       WorkspaceName: "STRING_VALUE",
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
 * //           OperatingSystemName: "AMAZON_LINUX_2" || "UBUNTU_18_04" || "UBUNTU_20_04" || "UBUNTU_22_04" || "UNKNOWN" || "WINDOWS_10" || "WINDOWS_11" || "WINDOWS_7" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022",
 * //         },
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         WorkspaceName: "STRING_VALUE",
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
 * //       WorkspaceName: "STRING_VALUE",
 * //       WorkspaceProperties: {
 * //         RunningMode: "AUTO_STOP" || "ALWAYS_ON" || "MANUAL",
 * //         RunningModeAutoStopTimeoutInMinutes: Number("int"),
 * //         RootVolumeSizeGib: Number("int"),
 * //         UserVolumeSizeGib: Number("int"),
 * //         ComputeTypeName: "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 * //         Protocols: [
 * //           "PCOIP" || "WSP",
 * //         ],
 * //         OperatingSystemName: "AMAZON_LINUX_2" || "UBUNTU_18_04" || "UBUNTU_20_04" || "UBUNTU_22_04" || "UNKNOWN" || "WINDOWS_10" || "WINDOWS_11" || "WINDOWS_7" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022",
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
 * //       DataReplicationSettings: { // DataReplicationSettings
 * //         DataReplication: "NO_REPLICATION" || "PRIMARY_AS_SOURCE",
 * //         RecoverySnapshotTime: new Date("TIMESTAMP"),
 * //       },
 * //       StandbyWorkspacesProperties: [ // StandbyWorkspacesPropertiesList
 * //         { // StandbyWorkspacesProperties
 * //           StandbyWorkspaceId: "STRING_VALUE",
 * //           DataReplication: "NO_REPLICATION" || "PRIMARY_AS_SOURCE",
 * //           RecoverySnapshotTime: new Date("TIMESTAMP"),
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
 * @public
 */
export class CreateWorkspacesCommand extends $Command
  .classBuilder<
    CreateWorkspacesCommandInput,
    CreateWorkspacesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "CreateWorkspaces", {})
  .n("WorkSpacesClient", "CreateWorkspacesCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkspacesCommand)
  .de(de_CreateWorkspacesCommand)
  .build() {}
