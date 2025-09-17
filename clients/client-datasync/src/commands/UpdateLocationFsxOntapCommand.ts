// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateLocationFsxOntapRequest,
  UpdateLocationFsxOntapRequestFilterSensitiveLog,
  UpdateLocationFsxOntapResponse,
} from "../models/models_0";
import { de_UpdateLocationFsxOntapCommand, se_UpdateLocationFsxOntapCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationFsxOntapCommand}.
 */
export interface UpdateLocationFsxOntapCommandInput extends UpdateLocationFsxOntapRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationFsxOntapCommand}.
 */
export interface UpdateLocationFsxOntapCommandOutput extends UpdateLocationFsxOntapResponse, __MetadataBearer {}

/**
 * <p>Modifies the following configuration parameters of the Amazon FSx for NetApp ONTAP
 *       transfer location that you're using with DataSync.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Configuring DataSync
 *         transfers with FSx for ONTAP</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationFsxOntapCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationFsxOntapCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationFsxOntapRequest
 *   LocationArn: "STRING_VALUE", // required
 *   Protocol: { // FsxUpdateProtocol
 *     NFS: { // FsxProtocolNfs
 *       MountOptions: { // NfsMountOptions
 *         Version: "AUTOMATIC" || "NFS3" || "NFS4_0" || "NFS4_1",
 *       },
 *     },
 *     SMB: { // FsxUpdateProtocolSmb
 *       Domain: "STRING_VALUE",
 *       MountOptions: { // SmbMountOptions
 *         Version: "AUTOMATIC" || "SMB2" || "SMB3" || "SMB1" || "SMB2_0",
 *       },
 *       Password: "STRING_VALUE",
 *       User: "STRING_VALUE",
 *     },
 *   },
 *   Subdirectory: "STRING_VALUE",
 * };
 * const command = new UpdateLocationFsxOntapCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationFsxOntapCommandInput - {@link UpdateLocationFsxOntapCommandInput}
 * @returns {@link UpdateLocationFsxOntapCommandOutput}
 * @see {@link UpdateLocationFsxOntapCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationFsxOntapCommandOutput} for command's `response` shape.
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
export class UpdateLocationFsxOntapCommand extends $Command
  .classBuilder<
    UpdateLocationFsxOntapCommandInput,
    UpdateLocationFsxOntapCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "UpdateLocationFsxOntap", {})
  .n("DataSyncClient", "UpdateLocationFsxOntapCommand")
  .f(UpdateLocationFsxOntapRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateLocationFsxOntapCommand)
  .de(de_UpdateLocationFsxOntapCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLocationFsxOntapRequest;
      output: {};
    };
    sdk: {
      input: UpdateLocationFsxOntapCommandInput;
      output: UpdateLocationFsxOntapCommandOutput;
    };
  };
}
