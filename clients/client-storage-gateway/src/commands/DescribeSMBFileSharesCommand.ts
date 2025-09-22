// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSMBFileSharesInput, DescribeSMBFileSharesOutput } from "../models/models_0";
import { DescribeSMBFileShares } from "../schemas/schemas_7_File";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSMBFileSharesCommand}.
 */
export interface DescribeSMBFileSharesCommandInput extends DescribeSMBFileSharesInput {}
/**
 * @public
 *
 * The output of {@link DescribeSMBFileSharesCommand}.
 */
export interface DescribeSMBFileSharesCommandOutput extends DescribeSMBFileSharesOutput, __MetadataBearer {}

/**
 * <p>Gets a description for one or more Server Message Block (SMB) file shares from a S3 File
 *          Gateway. This operation is only supported for S3 File Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeSMBFileSharesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeSMBFileSharesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeSMBFileSharesInput
 *   FileShareARNList: [ // FileShareARNList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeSMBFileSharesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSMBFileSharesOutput
 * //   SMBFileShareInfoList: [ // SMBFileShareInfoList
 * //     { // SMBFileShareInfo
 * //       FileShareARN: "STRING_VALUE",
 * //       FileShareId: "STRING_VALUE",
 * //       FileShareStatus: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //       EncryptionType: "SseS3" || "SseKms" || "DsseKms",
 * //       KMSEncrypted: true || false,
 * //       KMSKey: "STRING_VALUE",
 * //       Path: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       LocationARN: "STRING_VALUE",
 * //       DefaultStorageClass: "STRING_VALUE",
 * //       ObjectACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control" || "aws-exec-read",
 * //       ReadOnly: true || false,
 * //       GuessMIMETypeEnabled: true || false,
 * //       RequesterPays: true || false,
 * //       SMBACLEnabled: true || false,
 * //       AccessBasedEnumeration: true || false,
 * //       AdminUserList: [ // UserList
 * //         "STRING_VALUE",
 * //       ],
 * //       ValidUserList: [
 * //         "STRING_VALUE",
 * //       ],
 * //       InvalidUserList: [
 * //         "STRING_VALUE",
 * //       ],
 * //       AuditDestinationARN: "STRING_VALUE",
 * //       Authentication: "STRING_VALUE",
 * //       CaseSensitivity: "ClientSpecified" || "CaseSensitive",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       FileShareName: "STRING_VALUE",
 * //       CacheAttributes: { // CacheAttributes
 * //         CacheStaleTimeoutInSeconds: Number("int"),
 * //       },
 * //       NotificationPolicy: "STRING_VALUE",
 * //       VPCEndpointDNSName: "STRING_VALUE",
 * //       BucketRegion: "STRING_VALUE",
 * //       OplocksEnabled: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSMBFileSharesCommandInput - {@link DescribeSMBFileSharesCommandInput}
 * @returns {@link DescribeSMBFileSharesCommandOutput}
 * @see {@link DescribeSMBFileSharesCommandInput} for command's `input` shape.
 * @see {@link DescribeSMBFileSharesCommandOutput} for command's `response` shape.
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
export class DescribeSMBFileSharesCommand extends $Command
  .classBuilder<
    DescribeSMBFileSharesCommandInput,
    DescribeSMBFileSharesCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DescribeSMBFileShares", {})
  .n("StorageGatewayClient", "DescribeSMBFileSharesCommand")
  .sc(DescribeSMBFileShares)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSMBFileSharesInput;
      output: DescribeSMBFileSharesOutput;
    };
    sdk: {
      input: DescribeSMBFileSharesCommandInput;
      output: DescribeSMBFileSharesCommandOutput;
    };
  };
}
