// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLocationNfsRequest, UpdateLocationNfsResponse } from "../models/models_0";
import { UpdateLocationNfs } from "../schemas/schemas_5_Location";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLocationNfsCommand}.
 */
export interface UpdateLocationNfsCommandInput extends UpdateLocationNfsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLocationNfsCommand}.
 */
export interface UpdateLocationNfsCommandOutput extends UpdateLocationNfsResponse, __MetadataBearer {}

/**
 * <p>Modifies the following configuration parameters of the Network File System (NFS) transfer
 *       location that you're using with DataSync.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html">Configuring transfers with an NFS
 *         file server</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateLocationNfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateLocationNfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * // import type { DataSyncClientConfig } from "@aws-sdk/client-datasync";
 * const config = {}; // type is DataSyncClientConfig
 * const client = new DataSyncClient(config);
 * const input = { // UpdateLocationNfsRequest
 *   LocationArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   ServerHostname: "STRING_VALUE",
 *   OnPremConfig: { // OnPremConfig
 *     AgentArns: [ // AgentArnList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MountOptions: { // NfsMountOptions
 *     Version: "AUTOMATIC" || "NFS3" || "NFS4_0" || "NFS4_1",
 *   },
 * };
 * const command = new UpdateLocationNfsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLocationNfsCommandInput - {@link UpdateLocationNfsCommandInput}
 * @returns {@link UpdateLocationNfsCommandOutput}
 * @see {@link UpdateLocationNfsCommandInput} for command's `input` shape.
 * @see {@link UpdateLocationNfsCommandOutput} for command's `response` shape.
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
export class UpdateLocationNfsCommand extends $Command
  .classBuilder<
    UpdateLocationNfsCommandInput,
    UpdateLocationNfsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FmrsService", "UpdateLocationNfs", {})
  .n("DataSyncClient", "UpdateLocationNfsCommand")
  .sc(UpdateLocationNfs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLocationNfsRequest;
      output: {};
    };
    sdk: {
      input: UpdateLocationNfsCommandInput;
      output: UpdateLocationNfsCommandOutput;
    };
  };
}
