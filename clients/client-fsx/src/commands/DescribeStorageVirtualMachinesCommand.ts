// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeStorageVirtualMachinesRequest, DescribeStorageVirtualMachinesResponse } from "../models/models_0";
import {
  de_DescribeStorageVirtualMachinesCommand,
  se_DescribeStorageVirtualMachinesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStorageVirtualMachinesCommand}.
 */
export interface DescribeStorageVirtualMachinesCommandInput extends DescribeStorageVirtualMachinesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStorageVirtualMachinesCommand}.
 */
export interface DescribeStorageVirtualMachinesCommandOutput
  extends DescribeStorageVirtualMachinesResponse,
    __MetadataBearer {}

/**
 * <p>Describes one or more Amazon FSx for NetApp ONTAP storage virtual machines (SVMs).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeStorageVirtualMachinesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeStorageVirtualMachinesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // DescribeStorageVirtualMachinesRequest
 *   StorageVirtualMachineIds: [ // StorageVirtualMachineIds
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // StorageVirtualMachineFilters
 *     { // StorageVirtualMachineFilter
 *       Name: "file-system-id",
 *       Values: [ // StorageVirtualMachineFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStorageVirtualMachinesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStorageVirtualMachinesResponse
 * //   StorageVirtualMachines: [ // StorageVirtualMachines
 * //     { // StorageVirtualMachine
 * //       ActiveDirectoryConfiguration: { // SvmActiveDirectoryConfiguration
 * //         NetBiosName: "STRING_VALUE",
 * //         SelfManagedActiveDirectoryConfiguration: { // SelfManagedActiveDirectoryAttributes
 * //           DomainName: "STRING_VALUE",
 * //           OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //           FileSystemAdministratorsGroup: "STRING_VALUE",
 * //           UserName: "STRING_VALUE",
 * //           DnsIps: [ // DnsIps
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Endpoints: { // SvmEndpoints
 * //         Iscsi: { // SvmEndpoint
 * //           DNSName: "STRING_VALUE",
 * //           IpAddresses: [ // OntapEndpointIpAddresses
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Management: {
 * //           DNSName: "STRING_VALUE",
 * //           IpAddresses: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Nfs: {
 * //           DNSName: "STRING_VALUE",
 * //           IpAddresses: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         Smb: {
 * //           DNSName: "STRING_VALUE",
 * //           IpAddresses: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       FileSystemId: "STRING_VALUE",
 * //       Lifecycle: "CREATED" || "CREATING" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING",
 * //       Name: "STRING_VALUE",
 * //       ResourceARN: "STRING_VALUE",
 * //       StorageVirtualMachineId: "STRING_VALUE",
 * //       Subtype: "DEFAULT" || "DP_DESTINATION" || "SYNC_DESTINATION" || "SYNC_SOURCE",
 * //       UUID: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       LifecycleTransitionReason: { // LifecycleTransitionReason
 * //         Message: "STRING_VALUE",
 * //       },
 * //       RootVolumeSecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStorageVirtualMachinesCommandInput - {@link DescribeStorageVirtualMachinesCommandInput}
 * @returns {@link DescribeStorageVirtualMachinesCommandOutput}
 * @see {@link DescribeStorageVirtualMachinesCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageVirtualMachinesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link StorageVirtualMachineNotFound} (client fault)
 *  <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 * @public
 */
export class DescribeStorageVirtualMachinesCommand extends $Command
  .classBuilder<
    DescribeStorageVirtualMachinesCommandInput,
    DescribeStorageVirtualMachinesCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSimbaAPIService_v20180301", "DescribeStorageVirtualMachines", {})
  .n("FSxClient", "DescribeStorageVirtualMachinesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStorageVirtualMachinesCommand)
  .de(de_DescribeStorageVirtualMachinesCommand)
  .build() {}
