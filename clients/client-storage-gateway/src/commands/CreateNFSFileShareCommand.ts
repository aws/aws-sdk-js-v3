// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNFSFileShareInput, CreateNFSFileShareOutput } from "../models/models_0";
import { de_CreateNFSFileShareCommand, se_CreateNFSFileShareCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNFSFileShareCommand}.
 */
export interface CreateNFSFileShareCommandInput extends CreateNFSFileShareInput {}
/**
 * @public
 *
 * The output of {@link CreateNFSFileShareCommand}.
 */
export interface CreateNFSFileShareCommandOutput extends CreateNFSFileShareOutput, __MetadataBearer {}

/**
 * <p>Creates a Network File System (NFS) file share on an existing S3 File Gateway. In
 *          Storage Gateway, a file share is a file system mount point backed by Amazon S3
 *          cloud storage. Storage Gateway exposes file shares using an NFS interface. This operation
 *          is only supported for S3 File Gateways.</p>
 *          <important>
 *             <p>S3 File gateway requires Security Token Service (Amazon Web Services STS) to be
 *             activated to enable you to create a file share. Make sure Amazon Web Services STS is
 *             activated in the Amazon Web Services Region you are creating your S3 File Gateway in. If
 *                Amazon Web Services STS is not activated in the Amazon Web Services Region, activate
 *             it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the
 *                   <i>Identity and Access Management User Guide</i>.</p>
 *             <p>S3 File Gateways do not support creating hard or symbolic links on a file
 *             share.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateNFSFileShareCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateNFSFileShareCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateNFSFileShareInput
 *   ClientToken: "STRING_VALUE", // required
 *   NFSFileShareDefaults: { // NFSFileShareDefaults
 *     FileMode: "STRING_VALUE",
 *     DirectoryMode: "STRING_VALUE",
 *     GroupId: Number("long"),
 *     OwnerId: Number("long"),
 *   },
 *   GatewayARN: "STRING_VALUE", // required
 *   EncryptionType: "SseS3" || "SseKms" || "DsseKms",
 *   KMSEncrypted: true || false,
 *   KMSKey: "STRING_VALUE",
 *   Role: "STRING_VALUE", // required
 *   LocationARN: "STRING_VALUE", // required
 *   DefaultStorageClass: "STRING_VALUE",
 *   ObjectACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control" || "aws-exec-read",
 *   ClientList: [ // FileShareClientList
 *     "STRING_VALUE",
 *   ],
 *   Squash: "STRING_VALUE",
 *   ReadOnly: true || false,
 *   GuessMIMETypeEnabled: true || false,
 *   RequesterPays: true || false,
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   FileShareName: "STRING_VALUE",
 *   CacheAttributes: { // CacheAttributes
 *     CacheStaleTimeoutInSeconds: Number("int"),
 *   },
 *   NotificationPolicy: "STRING_VALUE",
 *   VPCEndpointDNSName: "STRING_VALUE",
 *   BucketRegion: "STRING_VALUE",
 *   AuditDestinationARN: "STRING_VALUE",
 * };
 * const command = new CreateNFSFileShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateNFSFileShareOutput
 * //   FileShareARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNFSFileShareCommandInput - {@link CreateNFSFileShareCommandInput}
 * @returns {@link CreateNFSFileShareCommandOutput}
 * @see {@link CreateNFSFileShareCommandInput} for command's `input` shape.
 * @see {@link CreateNFSFileShareCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateNFSFileShareCommand extends $Command
  .classBuilder<
    CreateNFSFileShareCommandInput,
    CreateNFSFileShareCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "CreateNFSFileShare", {})
  .n("StorageGatewayClient", "CreateNFSFileShareCommand")
  .f(void 0, void 0)
  .ser(se_CreateNFSFileShareCommand)
  .de(de_CreateNFSFileShareCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNFSFileShareInput;
      output: CreateNFSFileShareOutput;
    };
    sdk: {
      input: CreateNFSFileShareCommandInput;
      output: CreateNFSFileShareCommandOutput;
    };
  };
}
