// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSMBFileShareInput, CreateSMBFileShareOutput } from "../models/models_0";
import { CreateSMBFileShare$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig,
} from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSMBFileShareCommand}.
 */
export interface CreateSMBFileShareCommandInput extends CreateSMBFileShareInput {}
/**
 * @public
 *
 * The output of {@link CreateSMBFileShareCommand}.
 */
export interface CreateSMBFileShareCommandOutput extends CreateSMBFileShareOutput, __MetadataBearer {}

/**
 * <p>Creates a Server Message Block (SMB) file share on an existing S3 File Gateway. In
 *          Storage Gateway, a file share is a file system mount point backed by Amazon S3
 *          cloud storage. Storage Gateway exposes file shares using an SMB interface. This operation
 *          is only supported for S3 File Gateways.</p>
 *          <important>
 *             <p>S3 File Gateways require Security Token Service (Amazon Web Services STS) to be
 *             activated to enable you to create a file share. Make sure that Amazon Web Services STS
 *             is activated in the Amazon Web Services Region you are creating your S3 File Gateway in.
 *             If Amazon Web Services STS is not activated in this Amazon Web Services Region, activate
 *             it. For information about how to activate Amazon Web Services STS, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                deactivating Amazon Web Services STS in an Amazon Web Services Region</a> in the
 *                   <i>Identity and Access Management User Guide</i>.</p>
 *             <p>File gateways don't support creating hard or symbolic links on a file
 *             share.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, CreateSMBFileShareCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, CreateSMBFileShareCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // CreateSMBFileShareInput
 *   ClientToken: "STRING_VALUE", // required
 *   GatewayARN: "STRING_VALUE", // required
 *   EncryptionType: "SseS3" || "SseKms" || "DsseKms",
 *   KMSEncrypted: true || false,
 *   KMSKey: "STRING_VALUE",
 *   Role: "STRING_VALUE", // required
 *   LocationARN: "STRING_VALUE", // required
 *   DefaultStorageClass: "STRING_VALUE",
 *   ObjectACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control" || "aws-exec-read",
 *   ReadOnly: true || false,
 *   GuessMIMETypeEnabled: true || false,
 *   RequesterPays: true || false,
 *   SMBACLEnabled: true || false,
 *   AccessBasedEnumeration: true || false,
 *   AdminUserList: [ // UserList
 *     "STRING_VALUE",
 *   ],
 *   ValidUserList: [
 *     "STRING_VALUE",
 *   ],
 *   InvalidUserList: [
 *     "STRING_VALUE",
 *   ],
 *   AuditDestinationARN: "STRING_VALUE",
 *   Authentication: "STRING_VALUE",
 *   CaseSensitivity: "ClientSpecified" || "CaseSensitive",
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
 *   OplocksEnabled: true || false,
 * };
 * const command = new CreateSMBFileShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateSMBFileShareOutput
 * //   FileShareARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSMBFileShareCommandInput - {@link CreateSMBFileShareCommandInput}
 * @returns {@link CreateSMBFileShareCommandOutput}
 * @see {@link CreateSMBFileShareCommandInput} for command's `input` shape.
 * @see {@link CreateSMBFileShareCommandOutput} for command's `response` shape.
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
export class CreateSMBFileShareCommand extends $Command
  .classBuilder<
    CreateSMBFileShareCommandInput,
    CreateSMBFileShareCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "CreateSMBFileShare", {})
  .n("StorageGatewayClient", "CreateSMBFileShareCommand")
  .sc(CreateSMBFileShare$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSMBFileShareInput;
      output: CreateSMBFileShareOutput;
    };
    sdk: {
      input: CreateSMBFileShareCommandInput;
      output: CreateSMBFileShareCommandOutput;
    };
  };
}
