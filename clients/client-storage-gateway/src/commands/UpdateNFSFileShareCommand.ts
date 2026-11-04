// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateNFSFileShareInput, UpdateNFSFileShareOutput } from "../models/models_0";
import { UpdateNFSFileShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a Network File System (NFS) file share. This operation is only supported in S3 File Gateways.
 *
 * > **Note:** To leave a file share field unchanged, set the corresponding input field to null.
 *
 * Updates the following file share settings:
 *
 * - Default storage class for your S3 bucket
 * - Metadata defaults for your S3 bucket
 * - Allowed NFS clients for your file share
 * - Squash settings
 * - Write status of your file share
 *
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
 *
 * An internal server error has occurred during the request. For more information, see the error and message fields.
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *
 * An exception occurred because an invalid gateway request was issued to the service. For more information, see the error and message fields.
 *
 * @throws {@link StorageGatewayServiceException}
 *
 * Base exception class for all service exceptions from StorageGateway service.
 *
 * @public
 */
export class UpdateNFSFileShareCommand extends command<UpdateNFSFileShareCommandInput, UpdateNFSFileShareCommandOutput>(
  _ep0,
  _mw0,
  "UpdateNFSFileShare",
  UpdateNFSFileShare$
) {
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
