// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateLocationFsxOpenZfsRequest, CreateLocationFsxOpenZfsResponse } from "../models/models_0";
import { CreateLocationFsxOpenZfs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationFsxOpenZfsCommand}.
 */
export interface CreateLocationFsxOpenZfsCommandInput extends CreateLocationFsxOpenZfsRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationFsxOpenZfsCommand}.
 */
export interface CreateLocationFsxOpenZfsCommandOutput extends CreateLocationFsxOpenZfsResponse, __MetadataBearer {}

/**
 * <p>Creates a transfer <i>location</i> for an Amazon FSx for OpenZFS file
 *       system. DataSync can use this location as a source or destination for
 *       transferring data.</p>
 *          <p>Before you begin, make sure that you understand how DataSync
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html#create-openzfs-access">accesses
 *           FSx for OpenZFS file systems</a>.</p>
 *          <note>
 *             <p>Request parameters related to <code>SMB</code> aren't supported with the
 *           <code>CreateLocationFsxOpenZfs</code> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxOpenZfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxOpenZfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationFsxOpenZfsRequest
 *   FsxFilesystemArn: "STRING_VALUE", // required
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
 *   Subdirectory: "STRING_VALUE",
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLocationFsxOpenZfsCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationFsxOpenZfsResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationFsxOpenZfsCommandInput - {@link CreateLocationFsxOpenZfsCommandInput}
 * @returns {@link CreateLocationFsxOpenZfsCommandOutput}
 * @see {@link CreateLocationFsxOpenZfsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxOpenZfsCommandOutput} for command's `response` shape.
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
export class CreateLocationFsxOpenZfsCommand extends $Command
  .classBuilder<
    CreateLocationFsxOpenZfsCommandInput,
    CreateLocationFsxOpenZfsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "CreateLocationFsxOpenZfs", {})
  .n("DataSyncClient", "CreateLocationFsxOpenZfsCommand")
  .sc(CreateLocationFsxOpenZfs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocationFsxOpenZfsRequest;
      output: CreateLocationFsxOpenZfsResponse;
    };
    sdk: {
      input: CreateLocationFsxOpenZfsCommandInput;
      output: CreateLocationFsxOpenZfsCommandOutput;
    };
  };
}
