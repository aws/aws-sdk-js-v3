// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLocationNfsRequest, CreateLocationNfsResponse } from "../models/models_0";
import { de_CreateLocationNfsCommand, se_CreateLocationNfsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationNfsCommand}.
 */
export interface CreateLocationNfsCommandInput extends CreateLocationNfsRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationNfsCommand}.
 */
export interface CreateLocationNfsCommandOutput extends CreateLocationNfsResponse, __MetadataBearer {}

/**
 * <p>Creates a transfer <i>location</i> for a Network File System (NFS) file
 *       server. DataSync can use this location as a source or destination for
 *       transferring data.</p>
 *          <p>Before you begin, make sure that you understand how DataSync
 *       <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-nfs-location.html#accessing-nfs">accesses
 *         NFS file servers</a>.</p>
 *          <note>
 *             <p>If you're copying data to or from an Snowcone device, you can also use
 *           <code>CreateLocationNfs</code> to create your transfer location. For more information, see
 *           <a href="https://docs.aws.amazon.com/datasync/latest/userguide/nfs-on-snowcone.html">Configuring transfers with Snowcone</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationNfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationNfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationNfsRequest
 *   Subdirectory: "STRING_VALUE", // required
 *   ServerHostname: "STRING_VALUE", // required
 *   OnPremConfig: { // OnPremConfig
 *     AgentArns: [ // AgentArnList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MountOptions: { // NfsMountOptions
 *     Version: "AUTOMATIC" || "NFS3" || "NFS4_0" || "NFS4_1",
 *   },
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLocationNfsCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationNfsResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationNfsCommandInput - {@link CreateLocationNfsCommandInput}
 * @returns {@link CreateLocationNfsCommandOutput}
 * @see {@link CreateLocationNfsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationNfsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateLocationNfsCommand extends $Command
  .classBuilder<
    CreateLocationNfsCommandInput,
    CreateLocationNfsCommandOutput,
    DataSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FmrsService", "CreateLocationNfs", {})
  .n("DataSyncClient", "CreateLocationNfsCommand")
  .f(void 0, void 0)
  .ser(se_CreateLocationNfsCommand)
  .de(de_CreateLocationNfsCommand)
  .build() {}
