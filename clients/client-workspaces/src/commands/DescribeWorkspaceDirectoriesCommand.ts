// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWorkspaceDirectoriesRequest, DescribeWorkspaceDirectoriesResult } from "../models/models_0";
import {
  de_DescribeWorkspaceDirectoriesCommand,
  se_DescribeWorkspaceDirectoriesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceDirectoriesCommand}.
 */
export interface DescribeWorkspaceDirectoriesCommandInput extends DescribeWorkspaceDirectoriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceDirectoriesCommand}.
 */
export interface DescribeWorkspaceDirectoriesCommandOutput
  extends DescribeWorkspaceDirectoriesResult,
    __MetadataBearer {}

/**
 * <p>Describes the available directories that are registered with Amazon WorkSpaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceDirectoriesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceDirectoriesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceDirectoriesRequest
 *   DirectoryIds: [ // DirectoryIdList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeWorkspaceDirectoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceDirectoriesResult
 * //   Directories: [ // DirectoryList
 * //     { // WorkspaceDirectory
 * //       DirectoryId: "STRING_VALUE",
 * //       Alias: "STRING_VALUE",
 * //       DirectoryName: "STRING_VALUE",
 * //       RegistrationCode: "STRING_VALUE",
 * //       SubnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       DnsIpAddresses: [ // DnsIpAddresses
 * //         "STRING_VALUE",
 * //       ],
 * //       CustomerUserName: "STRING_VALUE",
 * //       IamRoleId: "STRING_VALUE",
 * //       DirectoryType: "SIMPLE_AD" || "AD_CONNECTOR",
 * //       WorkspaceSecurityGroupId: "STRING_VALUE",
 * //       State: "REGISTERING" || "REGISTERED" || "DEREGISTERING" || "DEREGISTERED" || "ERROR",
 * //       WorkspaceCreationProperties: { // DefaultWorkspaceCreationProperties
 * //         EnableWorkDocs: true || false,
 * //         EnableInternetAccess: true || false,
 * //         DefaultOu: "STRING_VALUE",
 * //         CustomSecurityGroupId: "STRING_VALUE",
 * //         UserEnabledAsLocalAdministrator: true || false,
 * //         EnableMaintenanceMode: true || false,
 * //       },
 * //       ipGroupIds: [ // IpGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       WorkspaceAccessProperties: { // WorkspaceAccessProperties
 * //         DeviceTypeWindows: "ALLOW" || "DENY",
 * //         DeviceTypeOsx: "ALLOW" || "DENY",
 * //         DeviceTypeWeb: "ALLOW" || "DENY",
 * //         DeviceTypeIos: "ALLOW" || "DENY",
 * //         DeviceTypeAndroid: "ALLOW" || "DENY",
 * //         DeviceTypeChromeOs: "ALLOW" || "DENY",
 * //         DeviceTypeZeroClient: "ALLOW" || "DENY",
 * //         DeviceTypeLinux: "ALLOW" || "DENY",
 * //       },
 * //       Tenancy: "DEDICATED" || "SHARED",
 * //       SelfservicePermissions: { // SelfservicePermissions
 * //         RestartWorkspace: "ENABLED" || "DISABLED",
 * //         IncreaseVolumeSize: "ENABLED" || "DISABLED",
 * //         ChangeComputeType: "ENABLED" || "DISABLED",
 * //         SwitchRunningMode: "ENABLED" || "DISABLED",
 * //         RebuildWorkspace: "ENABLED" || "DISABLED",
 * //       },
 * //       SamlProperties: { // SamlProperties
 * //         Status: "DISABLED" || "ENABLED" || "ENABLED_WITH_DIRECTORY_LOGIN_FALLBACK",
 * //         UserAccessUrl: "STRING_VALUE",
 * //         RelayStateParameterName: "STRING_VALUE",
 * //       },
 * //       CertificateBasedAuthProperties: { // CertificateBasedAuthProperties
 * //         Status: "DISABLED" || "ENABLED",
 * //         CertificateAuthorityArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceDirectoriesCommandInput - {@link DescribeWorkspaceDirectoriesCommandInput}
 * @returns {@link DescribeWorkspaceDirectoriesCommandOutput}
 * @see {@link DescribeWorkspaceDirectoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceDirectoriesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 * @public
 */
export class DescribeWorkspaceDirectoriesCommand extends $Command
  .classBuilder<
    DescribeWorkspaceDirectoriesCommandInput,
    DescribeWorkspaceDirectoriesCommandOutput,
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
  .s("WorkspacesService", "DescribeWorkspaceDirectories", {})
  .n("WorkSpacesClient", "DescribeWorkspaceDirectoriesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWorkspaceDirectoriesCommand)
  .de(de_DescribeWorkspaceDirectoriesCommand)
  .build() {}
