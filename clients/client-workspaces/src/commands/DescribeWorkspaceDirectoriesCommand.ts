// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeWorkspaceDirectoriesRequest, DescribeWorkspaceDirectoriesResult } from "../models/models_0";
import { DescribeWorkspaceDirectories } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

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
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceDirectoriesRequest
 *   DirectoryIds: [ // DirectoryIdList
 *     "STRING_VALUE",
 *   ],
 *   WorkspaceDirectoryNames: [ // WorkspaceDirectoryNameList
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // DescribeWorkspaceDirectoriesFilterList
 *     { // DescribeWorkspaceDirectoriesFilter
 *       Name: "USER_IDENTITY_TYPE" || "WORKSPACE_TYPE", // required
 *       Values: [ // DescribeWorkspaceDirectoriesFilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
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
 * //       DnsIpv6Addresses: [ // DnsIpv6Addresses
 * //         "STRING_VALUE",
 * //       ],
 * //       CustomerUserName: "STRING_VALUE",
 * //       IamRoleId: "STRING_VALUE",
 * //       DirectoryType: "SIMPLE_AD" || "AD_CONNECTOR" || "CUSTOMER_MANAGED" || "AWS_IAM_IDENTITY_CENTER",
 * //       WorkspaceSecurityGroupId: "STRING_VALUE",
 * //       State: "REGISTERING" || "REGISTERED" || "DEREGISTERING" || "DEREGISTERED" || "ERROR",
 * //       WorkspaceCreationProperties: { // DefaultWorkspaceCreationProperties
 * //         EnableInternetAccess: true || false,
 * //         DefaultOu: "STRING_VALUE",
 * //         CustomSecurityGroupId: "STRING_VALUE",
 * //         UserEnabledAsLocalAdministrator: true || false,
 * //         EnableMaintenanceMode: true || false,
 * //         InstanceIamRoleArn: "STRING_VALUE",
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
 * //         DeviceTypeWorkSpacesThinClient: "ALLOW" || "DENY",
 * //         AccessEndpointConfig: { // AccessEndpointConfig
 * //           AccessEndpoints: [ // AccessEndpointList // required
 * //             { // AccessEndpoint
 * //               AccessEndpointType: "STREAMING_WSP",
 * //               VpcEndpointId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           InternetFallbackProtocols: [ // InternetFallbackProtocolList
 * //             "PCOIP",
 * //           ],
 * //         },
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
 * //       EndpointEncryptionMode: "STANDARD_TLS" || "FIPS_VALIDATED",
 * //       MicrosoftEntraConfig: { // MicrosoftEntraConfig
 * //         TenantId: "STRING_VALUE",
 * //         ApplicationConfigSecretArn: "STRING_VALUE",
 * //       },
 * //       WorkspaceDirectoryName: "STRING_VALUE",
 * //       WorkspaceDirectoryDescription: "STRING_VALUE",
 * //       UserIdentityType: "CUSTOMER_MANAGED" || "AWS_DIRECTORY_SERVICE" || "AWS_IAM_IDENTITY_CENTER",
 * //       WorkspaceType: "PERSONAL" || "POOLS",
 * //       IDCConfig: { // IDCConfig
 * //         InstanceArn: "STRING_VALUE",
 * //         ApplicationArn: "STRING_VALUE",
 * //       },
 * //       ActiveDirectoryConfig: { // ActiveDirectoryConfig
 * //         DomainName: "STRING_VALUE", // required
 * //         ServiceAccountSecretArn: "STRING_VALUE", // required
 * //       },
 * //       StreamingProperties: { // StreamingProperties
 * //         StreamingExperiencePreferredProtocol: "TCP" || "UDP",
 * //         UserSettings: [ // UserSettings
 * //           { // UserSetting
 * //             Action: "CLIPBOARD_COPY_FROM_LOCAL_DEVICE" || "CLIPBOARD_COPY_TO_LOCAL_DEVICE" || "PRINTING_TO_LOCAL_DEVICE" || "SMART_CARD", // required
 * //             Permission: "ENABLED" || "DISABLED", // required
 * //             MaximumLength: Number("int"),
 * //           },
 * //         ],
 * //         StorageConnectors: [ // StorageConnectors
 * //           { // StorageConnector
 * //             ConnectorType: "HOME_FOLDER", // required
 * //             Status: "ENABLED" || "DISABLED", // required
 * //           },
 * //         ],
 * //         GlobalAccelerator: { // GlobalAcceleratorForDirectory
 * //           Mode: "ENABLED_AUTO" || "DISABLED", // required
 * //           PreferredProtocol: "TCP" || "NONE",
 * //         },
 * //       },
 * //       ErrorMessage: "STRING_VALUE",
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DescribeWorkspaceDirectories", {})
  .n("WorkSpacesClient", "DescribeWorkspaceDirectoriesCommand")
  .sc(DescribeWorkspaceDirectories)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceDirectoriesRequest;
      output: DescribeWorkspaceDirectoriesResult;
    };
    sdk: {
      input: DescribeWorkspaceDirectoriesCommandInput;
      output: DescribeWorkspaceDirectoriesCommandOutput;
    };
  };
}
