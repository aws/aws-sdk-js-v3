// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateNFSFileShareInput, UpdateNFSFileShareOutput } from "../models/models_0";
import { UpdateNFSFileShare } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateNFSFileShareCommand}.
 */
export interface UpdateNFSFileShareCommandInput extends UpdateNFSFileShareInput {}
/**
 * @public
 *
 * The output of {@link UpdateNFSFileShareCommand}.
 */
export interface UpdateNFSFileShareCommandOutput extends UpdateNFSFileShareOutput, __MetadataBearer {}

/**
 * <p>Updates a Network File System (NFS) file share. This operation is only supported in S3
 *          File Gateways.</p>
 *          <note>
 *             <p>To leave a file share field unchanged, set the corresponding input field to
 *             null.</p>
 *          </note>
 *          <p>Updates the following file share settings:</p>
 *          <ul>
 *             <li>
 *                <p>Default storage class for your S3 bucket</p>
 *             </li>
 *             <li>
 *                <p>Metadata defaults for your S3 bucket</p>
 *             </li>
 *             <li>
 *                <p>Allowed NFS clients for your file share</p>
 *             </li>
 *             <li>
 *                <p>Squash settings</p>
 *             </li>
 *             <li>
 *                <p>Write status of your file share</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateNFSFileShareCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateNFSFileShareCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateNFSFileShareInput
 *   FileShareARN: "STRING_VALUE", // required
 *   EncryptionType: "SseS3" || "SseKms" || "DsseKms",
 *   KMSEncrypted: true || false,
 *   KMSKey: "STRING_VALUE",
 *   NFSFileShareDefaults: { // NFSFileShareDefaults
 *     FileMode: "STRING_VALUE",
 *     DirectoryMode: "STRING_VALUE",
 *     GroupId: Number("long"),
 *     OwnerId: Number("long"),
 *   },
 *   DefaultStorageClass: "STRING_VALUE",
 *   ObjectACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control" || "aws-exec-read",
 *   ClientList: [ // FileShareClientList
 *     "STRING_VALUE",
 *   ],
 *   Squash: "STRING_VALUE",
 *   ReadOnly: true || false,
 *   GuessMIMETypeEnabled: true || false,
 *   RequesterPays: true || false,
 *   FileShareName: "STRING_VALUE",
 *   CacheAttributes: { // CacheAttributes
 *     CacheStaleTimeoutInSeconds: Number("int"),
 *   },
 *   NotificationPolicy: "STRING_VALUE",
 *   AuditDestinationARN: "STRING_VALUE",
 * };
 * const command = new UpdateNFSFileShareCommand(input);
 * const response = await client.send(command);
 * // { // UpdateNFSFileShareOutput
 * //   FileShareARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateNFSFileShareCommandInput - {@link UpdateNFSFileShareCommandInput}
 * @returns {@link UpdateNFSFileShareCommandOutput}
 * @see {@link UpdateNFSFileShareCommandInput} for command's `input` shape.
 * @see {@link UpdateNFSFileShareCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 *
 * @public
 */
export class UpdateNFSFileShareCommand extends $Command
  .classBuilder<
    UpdateNFSFileShareCommandInput,
    UpdateNFSFileShareCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "UpdateNFSFileShare", {})
  .n("StorageGatewayClient", "UpdateNFSFileShareCommand")
  .sc(UpdateNFSFileShare)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateNFSFileShareInput;
      output: UpdateNFSFileShareOutput;
    };
    sdk: {
      input: UpdateNFSFileShareCommandInput;
      output: UpdateNFSFileShareCommandOutput;
    };
  };
}
