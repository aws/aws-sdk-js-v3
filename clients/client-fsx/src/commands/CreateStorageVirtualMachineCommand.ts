// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  CreateStorageVirtualMachineRequest,
  CreateStorageVirtualMachineRequestFilterSensitiveLog,
  CreateStorageVirtualMachineResponse,
} from "../models/models_0";
import { de_CreateStorageVirtualMachineCommand, se_CreateStorageVirtualMachineCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateStorageVirtualMachineCommand}.
 */
export interface CreateStorageVirtualMachineCommandInput extends CreateStorageVirtualMachineRequest {}
/**
 * @public
 *
 * The output of {@link CreateStorageVirtualMachineCommand}.
 */
export interface CreateStorageVirtualMachineCommandOutput
  extends CreateStorageVirtualMachineResponse,
    __MetadataBearer {}

/**
 * <p>Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateStorageVirtualMachineCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateStorageVirtualMachineCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FSxClient(config);
 * const input = { // CreateStorageVirtualMachineRequest
 *   ActiveDirectoryConfiguration: { // CreateSvmActiveDirectoryConfiguration
 *     NetBiosName: "STRING_VALUE", // required
 *     SelfManagedActiveDirectoryConfiguration: { // SelfManagedActiveDirectoryConfiguration
 *       DomainName: "STRING_VALUE", // required
 *       OrganizationalUnitDistinguishedName: "STRING_VALUE",
 *       FileSystemAdministratorsGroup: "STRING_VALUE",
 *       UserName: "STRING_VALUE", // required
 *       Password: "STRING_VALUE", // required
 *       DnsIps: [ // DnsIps // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   SvmAdminPassword: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   RootVolumeSecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * };
 * const command = new CreateStorageVirtualMachineCommand(input);
 * const response = await client.send(command);
 * // { // CreateStorageVirtualMachineResponse
 * //   StorageVirtualMachine: { // StorageVirtualMachine
 * //     ActiveDirectoryConfiguration: { // SvmActiveDirectoryConfiguration
 * //       NetBiosName: "STRING_VALUE",
 * //       SelfManagedActiveDirectoryConfiguration: { // SelfManagedActiveDirectoryAttributes
 * //         DomainName: "STRING_VALUE",
 * //         OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //         FileSystemAdministratorsGroup: "STRING_VALUE",
 * //         UserName: "STRING_VALUE",
 * //         DnsIps: [ // DnsIps
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Endpoints: { // SvmEndpoints
 * //       Iscsi: { // SvmEndpoint
 * //         DNSName: "STRING_VALUE",
 * //         IpAddresses: [ // OntapEndpointIpAddresses
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Management: {
 * //         DNSName: "STRING_VALUE",
 * //         IpAddresses: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Nfs: {
 * //         DNSName: "STRING_VALUE",
 * //         IpAddresses: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Smb: {
 * //         DNSName: "STRING_VALUE",
 * //         IpAddresses: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     FileSystemId: "STRING_VALUE",
 * //     Lifecycle: "CREATED" || "CREATING" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING",
 * //     Name: "STRING_VALUE",
 * //     ResourceARN: "STRING_VALUE",
 * //     StorageVirtualMachineId: "STRING_VALUE",
 * //     Subtype: "DEFAULT" || "DP_DESTINATION" || "SYNC_DESTINATION" || "SYNC_SOURCE",
 * //     UUID: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     LifecycleTransitionReason: { // LifecycleTransitionReason
 * //       Message: "STRING_VALUE",
 * //     },
 * //     RootVolumeSecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateStorageVirtualMachineCommandInput - {@link CreateStorageVirtualMachineCommandInput}
 * @returns {@link CreateStorageVirtualMachineCommandOutput}
 * @see {@link CreateStorageVirtualMachineCommandInput} for command's `input` shape.
 * @see {@link CreateStorageVirtualMachineCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link ActiveDirectoryError} (client fault)
 *  <p>An Active Directory error.</p>
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 * @public
 */
export class CreateStorageVirtualMachineCommand extends $Command
  .classBuilder<
    CreateStorageVirtualMachineCommandInput,
    CreateStorageVirtualMachineCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSimbaAPIService_v20180301", "CreateStorageVirtualMachine", {})
  .n("FSxClient", "CreateStorageVirtualMachineCommand")
  .f(CreateStorageVirtualMachineRequestFilterSensitiveLog, void 0)
  .ser(se_CreateStorageVirtualMachineCommand)
  .de(de_CreateStorageVirtualMachineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStorageVirtualMachineRequest;
      output: CreateStorageVirtualMachineResponse;
    };
    sdk: {
      input: CreateStorageVirtualMachineCommandInput;
      output: CreateStorageVirtualMachineCommandOutput;
    };
  };
}
