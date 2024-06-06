// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeNFSFileSharesInput, DescribeNFSFileSharesOutput } from "../models/models_0";
import { de_DescribeNFSFileSharesCommand, se_DescribeNFSFileSharesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeNFSFileSharesCommand}.
 */
export interface DescribeNFSFileSharesCommandInput extends DescribeNFSFileSharesInput {}
/**
 * @public
 *
 * The output of {@link DescribeNFSFileSharesCommand}.
 */
export interface DescribeNFSFileSharesCommandOutput extends DescribeNFSFileSharesOutput, __MetadataBearer {}

/**
 * <p>Gets a description for one or more Network File System (NFS) file shares from an S3 File
 *          Gateway. This operation is only supported for S3 File Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeNFSFileSharesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeNFSFileSharesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeNFSFileSharesInput
 *   FileShareARNList: [ // FileShareARNList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeNFSFileSharesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNFSFileSharesOutput
 * //   NFSFileShareInfoList: [ // NFSFileShareInfoList
 * //     { // NFSFileShareInfo
 * //       NFSFileShareDefaults: { // NFSFileShareDefaults
 * //         FileMode: "STRING_VALUE",
 * //         DirectoryMode: "STRING_VALUE",
 * //         GroupId: Number("long"),
 * //         OwnerId: Number("long"),
 * //       },
 * //       FileShareARN: "STRING_VALUE",
 * //       FileShareId: "STRING_VALUE",
 * //       FileShareStatus: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //       KMSEncrypted: true || false,
 * //       KMSKey: "STRING_VALUE",
 * //       Path: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       LocationARN: "STRING_VALUE",
 * //       DefaultStorageClass: "STRING_VALUE",
 * //       ObjectACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control" || "aws-exec-read",
 * //       ClientList: [ // FileShareClientList
 * //         "STRING_VALUE",
 * //       ],
 * //       Squash: "STRING_VALUE",
 * //       ReadOnly: true || false,
 * //       GuessMIMETypeEnabled: true || false,
 * //       RequesterPays: true || false,
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
 * //       AuditDestinationARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeNFSFileSharesCommandInput - {@link DescribeNFSFileSharesCommandInput}
 * @returns {@link DescribeNFSFileSharesCommandOutput}
 * @see {@link DescribeNFSFileSharesCommandInput} for command's `input` shape.
 * @see {@link DescribeNFSFileSharesCommandOutput} for command's `response` shape.
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
export class DescribeNFSFileSharesCommand extends $Command
  .classBuilder<
    DescribeNFSFileSharesCommandInput,
    DescribeNFSFileSharesCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "DescribeNFSFileShares", {})
  .n("StorageGatewayClient", "DescribeNFSFileSharesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeNFSFileSharesCommand)
  .de(de_DescribeNFSFileSharesCommand)
  .build() {}
