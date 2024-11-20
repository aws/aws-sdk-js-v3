// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWorkspacesRequest, DescribeWorkspacesResult } from "../models/models_0";
import { de_DescribeWorkspacesCommand, se_DescribeWorkspacesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *   WorkspaceName: "STRING_VALUE",
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
 * //       WorkspaceName: "STRING_VALUE",
 * //       WorkspaceProperties: { // WorkspaceProperties
 * //         RunningMode: "AUTO_STOP" || "ALWAYS_ON" || "MANUAL",
 * //         RunningModeAutoStopTimeoutInMinutes: Number("int"),
 * //         RootVolumeSizeGib: Number("int"),
 * //         UserVolumeSizeGib: Number("int"),
 * //         ComputeTypeName: "VALUE" || "STANDARD" || "PERFORMANCE" || "POWER" || "GRAPHICS" || "POWERPRO" || "GRAPHICSPRO" || "GRAPHICS_G4DN" || "GRAPHICSPRO_G4DN",
 * //         Protocols: [ // ProtocolList
 * //           "PCOIP" || "WSP",
 * //         ],
 * //         OperatingSystemName: "AMAZON_LINUX_2" || "UBUNTU_18_04" || "UBUNTU_20_04" || "UBUNTU_22_04" || "UNKNOWN" || "WINDOWS_10" || "WINDOWS_11" || "WINDOWS_7" || "WINDOWS_SERVER_2016" || "WINDOWS_SERVER_2019" || "WINDOWS_SERVER_2022" || "RHEL_8" || "ROCKY_8",
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
 * @public
 */
export class DescribeWorkspacesCommand extends $Command
  .classBuilder<
    DescribeWorkspacesCommandInput,
    DescribeWorkspacesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "DescribeWorkspaces", {})
  .n("WorkSpacesClient", "DescribeWorkspacesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWorkspacesCommand)
  .de(de_DescribeWorkspacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspacesRequest;
      output: DescribeWorkspacesResult;
    };
    sdk: {
      input: DescribeWorkspacesCommandInput;
      output: DescribeWorkspacesCommandOutput;
    };
  };
}
