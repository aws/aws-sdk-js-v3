// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLocationFsxOntapRequest, CreateLocationFsxOntapResponse } from "../models/models_0";
import { CreateLocationFsxOntap } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationFsxOntapCommand}.
 */
export interface CreateLocationFsxOntapCommandInput extends CreateLocationFsxOntapRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationFsxOntapCommand}.
 */
export interface CreateLocationFsxOntapCommandOutput extends CreateLocationFsxOntapResponse, __MetadataBearer {}

/**
 * <p>Creates a transfer <i>location</i> for an Amazon FSx for NetApp ONTAP file
 *       system. DataSync can use this location as a source or destination for
 *       transferring data.</p>
 *          <p>Before you begin, make sure that you understand how DataSync
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html#create-ontap-location-access">accesses FSx for ONTAP file systems</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxOntapCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxOntapCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationFsxOntapRequest
 *   Protocol: { // FsxProtocol
 *     NFS: { // FsxProtocolNfs
 *       MountOptions: { // NfsMountOptions
 *         Version: "AUTOMATIC" || "NFS3" || "NFS4_0" || "NFS4_1",
 *       },
 *     },
 *     SMB: { // FsxProtocolSmb
 *       Domain: "STRING_VALUE",
 *       MountOptions: { // SmbMountOptions
 *         Version: "AUTOMATIC" || "SMB2" || "SMB3" || "SMB1" || "SMB2_0",
 *       },
 *       Password: "STRING_VALUE", // required
 *       User: "STRING_VALUE", // required
 *     },
 *   },
 *   SecurityGroupArns: [ // Ec2SecurityGroupArnList // required
 *     "STRING_VALUE",
 *   ],
 *   StorageVirtualMachineArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLocationFsxOntapCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationFsxOntapResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationFsxOntapCommandInput - {@link CreateLocationFsxOntapCommandInput}
 * @returns {@link CreateLocationFsxOntapCommandOutput}
 * @see {@link CreateLocationFsxOntapCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxOntapCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 *
 * @public
 */
export class CreateLocationFsxOntapCommand extends $Command
  .classBuilder<
    CreateLocationFsxOntapCommandInput,
    CreateLocationFsxOntapCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "CreateLocationFsxOntap", {})
  .n("DataSyncClient", "CreateLocationFsxOntapCommand")
  .sc(CreateLocationFsxOntap)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocationFsxOntapRequest;
      output: CreateLocationFsxOntapResponse;
    };
    sdk: {
      input: CreateLocationFsxOntapCommandInput;
      output: CreateLocationFsxOntapCommandOutput;
    };
  };
}
