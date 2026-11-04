// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeFileSystemAssociationsInput, DescribeFileSystemAssociationsOutput } from "../models/models_0";
import { DescribeFileSystemAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeFileSystemAssociationsCommandOutput extends DescribeFileSystemAssociationsOutput, __MetadataBearer {}

/**
 * Gets the file system association information. This operation is only supported for FSx File Gateways.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeFileSystemAssociationsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeFileSystemAssociationsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
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
export class DescribeFileSystemAssociationsCommand extends command<DescribeFileSystemAssociationsCommandInput, DescribeFileSystemAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeFileSystemAssociations",
  DescribeFileSystemAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFileSystemAssociationsInput;
      output: DescribeFileSystemAssociationsOutput;
    };
    sdk: {
      input: DescribeFileSystemAssociationsCommandInput;
      output: DescribeFileSystemAssociationsCommandOutput;
    };
  };
}
