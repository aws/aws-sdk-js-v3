// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLocationFsxOpenZfsRequest, UpdateLocationFsxOpenZfsResponse } from "../models/models_0";
import { UpdateLocationFsxOpenZfs } from "../schemas/schemas_17_Location";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationFsxOpenZfsCommand}.
 */
export interface UpdateLocationFsxOpenZfsCommandInput extends UpdateLocationFsxOpenZfsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationFsxOpenZfsCommand}.
 */
export interface UpdateLocationFsxOpenZfsCommandOutput extends UpdateLocationFsxOpenZfsResponse, __MetadataBearer {}

/**
 * <p>Modifies the following configuration parameters of the Amazon FSx for OpenZFS
 *       transfer location that you're using with DataSync.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-openzfs-location.html">Configuring DataSync
 *         transfers with FSx for OpenZFS</a>.</p>
 *          <note>
 *             <p>Request parameters related to <code>SMB</code> aren't supported with the
 *           <code>UpdateLocationFsxOpenZfs</code> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationFsxOpenZfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationFsxOpenZfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationFsxOpenZfsRequest
 *   LocationArn: "STRING_VALUE", // required
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
 *   Subdirectory: "STRING_VALUE",
 * };
 * const command = new UpdateLocationFsxOpenZfsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationFsxOpenZfsCommandInput - {@link UpdateLocationFsxOpenZfsCommandInput}
 * @returns {@link UpdateLocationFsxOpenZfsCommandOutput}
 * @see {@link UpdateLocationFsxOpenZfsCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationFsxOpenZfsCommandOutput} for command's `response` shape.
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
export class UpdateLocationFsxOpenZfsCommand extends $Command
  .classBuilder<
    UpdateLocationFsxOpenZfsCommandInput,
    UpdateLocationFsxOpenZfsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "UpdateLocationFsxOpenZfs", {})
  .n("DataSyncClient", "UpdateLocationFsxOpenZfsCommand")
  .sc(UpdateLocationFsxOpenZfs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLocationFsxOpenZfsRequest;
      output: {};
    };
    sdk: {
      input: UpdateLocationFsxOpenZfsCommandInput;
      output: UpdateLocationFsxOpenZfsCommandOutput;
    };
  };
}
