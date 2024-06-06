// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFileSystemAssociationsInput, DescribeFileSystemAssociationsOutput } from "../models/models_0";
import {
  de_DescribeFileSystemAssociationsCommand,
  se_DescribeFileSystemAssociationsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFileSystemAssociationsCommand}.
 */
export interface DescribeFileSystemAssociationsCommandInput extends DescribeFileSystemAssociationsInput {}
/**
 * @public
 *
 * The output of {@link DescribeFileSystemAssociationsCommand}.
 */
export interface DescribeFileSystemAssociationsCommandOutput
  extends DescribeFileSystemAssociationsOutput,
    __MetadataBearer {}

/**
 * <p>Gets the file system association information. This operation is only supported for FSx
 *          File Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeFileSystemAssociationsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeFileSystemAssociationsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeFileSystemAssociationsInput
 *   FileSystemAssociationARNList: [ // FileSystemAssociationARNList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeFileSystemAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFileSystemAssociationsOutput
 * //   FileSystemAssociationInfoList: [ // FileSystemAssociationInfoList
 * //     { // FileSystemAssociationInfo
 * //       FileSystemAssociationARN: "STRING_VALUE",
 * //       LocationARN: "STRING_VALUE",
 * //       FileSystemAssociationStatus: "STRING_VALUE",
 * //       AuditDestinationARN: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       CacheAttributes: { // CacheAttributes
 * //         CacheStaleTimeoutInSeconds: Number("int"),
 * //       },
 * //       EndpointNetworkConfiguration: { // EndpointNetworkConfiguration
 * //         IpAddresses: [ // IpAddressList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       FileSystemAssociationStatusDetails: [ // FileSystemAssociationStatusDetails
 * //         { // FileSystemAssociationStatusDetail
 * //           ErrorCode: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeFileSystemAssociationsCommandInput - {@link DescribeFileSystemAssociationsCommandInput}
 * @returns {@link DescribeFileSystemAssociationsCommandOutput}
 * @see {@link DescribeFileSystemAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemAssociationsCommandOutput} for command's `response` shape.
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
export class DescribeFileSystemAssociationsCommand extends $Command
  .classBuilder<
    DescribeFileSystemAssociationsCommandInput,
    DescribeFileSystemAssociationsCommandOutput,
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
  .s("StorageGateway_20130630", "DescribeFileSystemAssociations", {})
  .n("StorageGatewayClient", "DescribeFileSystemAssociationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFileSystemAssociationsCommand)
  .de(de_DescribeFileSystemAssociationsCommand)
  .build() {}
