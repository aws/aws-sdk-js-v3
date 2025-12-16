// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DirectoryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DirectoryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDirectoriesRequest, DescribeDirectoriesResult } from "../models/models_0";
import { DescribeDirectories$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDirectoriesCommand}.
 */
export interface DescribeDirectoriesCommandInput extends DescribeDirectoriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDirectoriesCommand}.
 */
export interface DescribeDirectoriesCommandOutput extends DescribeDirectoriesResult, __MetadataBearer {}

/**
 * <p>Obtains information about the directories that belong to this account.</p>
 *          <p>You can retrieve information about specific directories by passing the directory
 *       identifiers in the <code>DirectoryIds</code> parameter. Otherwise, all directories that belong
 *       to the current account are returned.</p>
 *          <p>This operation supports pagination with the use of the <code>NextToken</code> request and
 *       response parameters. If more results are available, the
 *         <code>DescribeDirectoriesResult.NextToken</code> member contains a token that you pass in
 *       the next call to <a>DescribeDirectories</a> to retrieve the next set of
 *       items.</p>
 *          <p>You can also specify a maximum number of return results with the <code>Limit</code>
 *       parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DescribeDirectoriesCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DescribeDirectoriesCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // DescribeDirectoriesRequest
 *   DirectoryIds: [ // DirectoryIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new DescribeDirectoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDirectoriesResult
 * //   DirectoryDescriptions: [ // DirectoryDescriptions
 * //     { // DirectoryDescription
 * //       DirectoryId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ShortName: "STRING_VALUE",
 * //       Size: "Small" || "Large",
 * //       Edition: "Enterprise" || "Standard" || "Hybrid",
 * //       Alias: "STRING_VALUE",
 * //       AccessUrl: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DnsIpAddrs: [ // DnsIpAddrs
 * //         "STRING_VALUE",
 * //       ],
 * //       DnsIpv6Addrs: [ // DnsIpv6Addrs
 * //         "STRING_VALUE",
 * //       ],
 * //       Stage: "Requested" || "Creating" || "Created" || "Active" || "Inoperable" || "Impaired" || "Restoring" || "RestoreFailed" || "Deleting" || "Deleted" || "Failed" || "Updating",
 * //       ShareStatus: "Shared" || "PendingAcceptance" || "Rejected" || "Rejecting" || "RejectFailed" || "Sharing" || "ShareFailed" || "Deleted" || "Deleting",
 * //       ShareMethod: "ORGANIZATIONS" || "HANDSHAKE",
 * //       ShareNotes: "STRING_VALUE",
 * //       LaunchTime: new Date("TIMESTAMP"),
 * //       StageLastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       Type: "SimpleAD" || "ADConnector" || "MicrosoftAD" || "SharedMicrosoftAD",
 * //       VpcSettings: { // DirectoryVpcSettingsDescription
 * //         VpcId: "STRING_VALUE",
 * //         SubnetIds: [ // SubnetIds
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupId: "STRING_VALUE",
 * //         AvailabilityZones: [ // AvailabilityZones
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ConnectSettings: { // DirectoryConnectSettingsDescription
 * //         VpcId: "STRING_VALUE",
 * //         SubnetIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         CustomerUserName: "STRING_VALUE",
 * //         SecurityGroupId: "STRING_VALUE",
 * //         AvailabilityZones: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ConnectIps: [ // IpAddrs
 * //           "STRING_VALUE",
 * //         ],
 * //         ConnectIpsV6: [ // IpV6Addrs
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       RadiusSettings: { // RadiusSettings
 * //         RadiusServers: [ // Servers
 * //           "STRING_VALUE",
 * //         ],
 * //         RadiusServersIpv6: [
 * //           "STRING_VALUE",
 * //         ],
 * //         RadiusPort: Number("int"),
 * //         RadiusTimeout: Number("int"),
 * //         RadiusRetries: Number("int"),
 * //         SharedSecret: "STRING_VALUE",
 * //         AuthenticationProtocol: "PAP" || "CHAP" || "MS-CHAPv1" || "MS-CHAPv2",
 * //         DisplayLabel: "STRING_VALUE",
 * //         UseSameUsername: true || false,
 * //       },
 * //       RadiusStatus: "Creating" || "Completed" || "Failed",
 * //       StageReason: "STRING_VALUE",
 * //       SsoEnabled: true || false,
 * //       DesiredNumberOfDomainControllers: Number("int"),
 * //       OwnerDirectoryDescription: { // OwnerDirectoryDescription
 * //         DirectoryId: "STRING_VALUE",
 * //         AccountId: "STRING_VALUE",
 * //         DnsIpAddrs: [
 * //           "STRING_VALUE",
 * //         ],
 * //         DnsIpv6Addrs: [
 * //           "STRING_VALUE",
 * //         ],
 * //         VpcSettings: {
 * //           VpcId: "STRING_VALUE",
 * //           SubnetIds: [
 * //             "STRING_VALUE",
 * //           ],
 * //           SecurityGroupId: "STRING_VALUE",
 * //           AvailabilityZones: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         RadiusSettings: {
 * //           RadiusServers: [
 * //             "STRING_VALUE",
 * //           ],
 * //           RadiusServersIpv6: [
 * //             "STRING_VALUE",
 * //           ],
 * //           RadiusPort: Number("int"),
 * //           RadiusTimeout: Number("int"),
 * //           RadiusRetries: Number("int"),
 * //           SharedSecret: "STRING_VALUE",
 * //           AuthenticationProtocol: "PAP" || "CHAP" || "MS-CHAPv1" || "MS-CHAPv2",
 * //           DisplayLabel: "STRING_VALUE",
 * //           UseSameUsername: true || false,
 * //         },
 * //         RadiusStatus: "Creating" || "Completed" || "Failed",
 * //         NetworkType: "Dual-stack" || "IPv4" || "IPv6",
 * //       },
 * //       RegionsInfo: { // RegionsInfo
 * //         PrimaryRegion: "STRING_VALUE",
 * //         AdditionalRegions: [ // AdditionalRegions
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       OsVersion: "SERVER_2012" || "SERVER_2019",
 * //       HybridSettings: { // HybridSettingsDescription
 * //         SelfManagedDnsIpAddrs: [
 * //           "STRING_VALUE",
 * //         ],
 * //         SelfManagedInstanceIds: [ // AssessmentInstanceIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       NetworkType: "Dual-stack" || "IPv4" || "IPv6",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDirectoriesCommandInput - {@link DescribeDirectoriesCommandInput}
 * @returns {@link DescribeDirectoriesCommandOutput}
 * @see {@link DescribeDirectoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectoriesCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A client exception has occurred.</p>
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *  <p>The specified entity could not be found.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An exception has occurred in Directory Service.</p>
 *
 * @throws {@link DirectoryServiceServiceException}
 * <p>Base exception class for all service exceptions from DirectoryService service.</p>
 *
 *
 * @example To describe one or more directories
 * ```javascript
 * // The following example obtains information about a specified directory.
 * const input = {
 *   DirectoryIds: [
 *     "d-92654abfed"
 *   ],
 *   Limit: 0
 * };
 * const command = new DescribeDirectoriesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DirectoryDescriptions: [
 *     {
 *       AccessUrl: "myaccess.awsapps.com",
 *       Alias: "myaccess",
 *       DirectoryId: "d-92654abfed",
 *       DnsIpAddrs: [
 *         "172.30.21.228",
 *         "172.30.9.82"
 *       ],
 *       LaunchTime: 1.469737584772E9,
 *       Name: "corp.example.com",
 *       ShortName: "example",
 *       SsoEnabled: true,
 *       Stage: "Active",
 *       StageLastUpdatedDateTime: 1.46973913171E9,
 *       Type: "MicrosoftAD",
 *       VpcSettings: {
 *         AvailabilityZones: [
 *           "us-west-2a",
 *           "us-west-2b"
 *         ],
 *         SubnetIds: [
 *           "subnet-ba0146de",
 *           "subnet-bef46bc8"
 *         ],
 *         VpcId: "vpc-45025421"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDirectoriesCommand extends $Command
  .classBuilder<
    DescribeDirectoriesCommandInput,
    DescribeDirectoriesCommandOutput,
    DirectoryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DirectoryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DirectoryService_20150416", "DescribeDirectories", {})
  .n("DirectoryServiceClient", "DescribeDirectoriesCommand")
  .sc(DescribeDirectories$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDirectoriesRequest;
      output: DescribeDirectoriesResult;
    };
    sdk: {
      input: DescribeDirectoriesCommandInput;
      output: DescribeDirectoriesCommandOutput;
    };
  };
}
