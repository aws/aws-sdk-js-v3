// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeWorkspaceImagesRequest, DescribeWorkspaceImagesResult } from "../models/models_0";
import { DescribeWorkspaceImages } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceImagesCommand}.
 */
export interface DescribeWorkspaceImagesCommandInput extends DescribeWorkspaceImagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceImagesCommand}.
 */
export interface DescribeWorkspaceImagesCommandOutput extends DescribeWorkspaceImagesResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes one or more specified images, if the image identifiers
 *          are provided. Otherwise, all images in the account are described. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeWorkspaceImagesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeWorkspaceImagesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeWorkspaceImagesRequest
 *   ImageIds: [ // WorkspaceImageIdList
 *     "STRING_VALUE",
 *   ],
 *   ImageType: "OWNED" || "SHARED",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeWorkspaceImagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceImagesResult
 * //   Images: [ // WorkspaceImageList
 * //     { // WorkspaceImage
 * //       ImageId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       OperatingSystem: { // OperatingSystem
 * //         Type: "WINDOWS" || "LINUX",
 * //       },
 * //       State: "AVAILABLE" || "PENDING" || "ERROR",
 * //       RequiredTenancy: "DEFAULT" || "DEDICATED",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //       Created: new Date("TIMESTAMP"),
 * //       OwnerAccountId: "STRING_VALUE",
 * //       Updates: { // UpdateResult
 * //         UpdateAvailable: true || false,
 * //         Description: "STRING_VALUE",
 * //       },
 * //       ErrorDetails: [ // ErrorDetailsList
 * //         { // ErrorDetails
 * //           ErrorCode: "OutdatedPowershellVersion" || "OfficeInstalled" || "PCoIPAgentInstalled" || "WindowsUpdatesEnabled" || "AutoMountDisabled" || "WorkspacesBYOLAccountNotFound" || "WorkspacesBYOLAccountDisabled" || "DHCPDisabled" || "DiskFreeSpace" || "AdditionalDrivesAttached" || "OSNotSupported" || "DomainJoined" || "AzureDomainJoined" || "FirewallEnabled" || "VMWareToolsInstalled" || "DiskSizeExceeded" || "IncompatiblePartitioning" || "PendingReboot" || "AutoLogonEnabled" || "RealTimeUniversalDisabled" || "MultipleBootPartition" || "Requires64BitOS" || "ZeroRearmCount" || "InPlaceUpgrade" || "AntiVirusInstalled" || "UEFINotSupported" || "UnknownError" || "AppXPackagesInstalled" || "ReservedStorageInUse" || "AdditionalDrivesPresent" || "WindowsUpdatesRequired" || "SysPrepFileMissing" || "UserProfileMissing" || "InsufficientDiskSpace" || "EnvironmentVariablesPathMissingEntries" || "DomainAccountServicesFound" || "InvalidIp" || "RemoteDesktopServicesDisabled" || "WindowsModulesInstallerDisabled" || "AmazonSsmAgentEnabled" || "UnsupportedSecurityProtocol" || "MultipleUserProfiles" || "StagedAppxPackage" || "UnsupportedOsUpgrade" || "InsufficientRearmCount" || "ProtocolOSIncompatibility" || "MemoryIntegrityIncompatibility" || "RestrictedDriveLetterInUse",
 * //           ErrorMessage: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceImagesCommandInput - {@link DescribeWorkspaceImagesCommandInput}
 * @returns {@link DescribeWorkspaceImagesCommandOutput}
 * @see {@link DescribeWorkspaceImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceImagesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeWorkspaceImagesCommand extends $Command
  .classBuilder<
    DescribeWorkspaceImagesCommandInput,
    DescribeWorkspaceImagesCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DescribeWorkspaceImages", {})
  .n("WorkSpacesClient", "DescribeWorkspaceImagesCommand")
  .sc(DescribeWorkspaceImages)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceImagesRequest;
      output: DescribeWorkspaceImagesResult;
    };
    sdk: {
      input: DescribeWorkspaceImagesCommandInput;
      output: DescribeWorkspaceImagesCommandOutput;
    };
  };
}
