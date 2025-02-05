// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateFileSystemInput,
  AssociateFileSystemInputFilterSensitiveLog,
  AssociateFileSystemOutput,
} from "../models/models_0";
import { de_AssociateFileSystemCommand, se_AssociateFileSystemCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateFileSystemCommand}.
 */
export interface AssociateFileSystemCommandInput extends AssociateFileSystemInput {}
/**
 * @public
 *
 * The output of {@link AssociateFileSystemCommand}.
 */
export interface AssociateFileSystemCommandOutput extends AssociateFileSystemOutput, __MetadataBearer {}

/**
 * <p>Associate an Amazon FSx file system with the FSx File Gateway. After the
 *          association process is complete, the file shares on the Amazon FSx file system are
 *          available for access through the gateway. This operation only supports the FSx File Gateway
 *          type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, AssociateFileSystemCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, AssociateFileSystemCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new StorageGatewayClient(config);
 * const input = { // AssociateFileSystemInput
 *   UserName: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 *   GatewayARN: "STRING_VALUE", // required
 *   LocationARN: "STRING_VALUE", // required
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AuditDestinationARN: "STRING_VALUE",
 *   CacheAttributes: { // CacheAttributes
 *     CacheStaleTimeoutInSeconds: Number("int"),
 *   },
 *   EndpointNetworkConfiguration: { // EndpointNetworkConfiguration
 *     IpAddresses: [ // IpAddressList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new AssociateFileSystemCommand(input);
 * const response = await client.send(command);
 * // { // AssociateFileSystemOutput
 * //   FileSystemAssociationARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateFileSystemCommandInput - {@link AssociateFileSystemCommandInput}
 * @returns {@link AssociateFileSystemCommandOutput}
 * @see {@link AssociateFileSystemCommandInput} for command's `input` shape.
 * @see {@link AssociateFileSystemCommandOutput} for command's `response` shape.
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
export class AssociateFileSystemCommand extends $Command
  .classBuilder<
    AssociateFileSystemCommandInput,
    AssociateFileSystemCommandOutput,
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
  .s("StorageGateway_20130630", "AssociateFileSystem", {})
  .n("StorageGatewayClient", "AssociateFileSystemCommand")
  .f(AssociateFileSystemInputFilterSensitiveLog, void 0)
  .ser(se_AssociateFileSystemCommand)
  .de(de_AssociateFileSystemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateFileSystemInput;
      output: AssociateFileSystemOutput;
    };
    sdk: {
      input: AssociateFileSystemCommandInput;
      output: AssociateFileSystemCommandOutput;
    };
  };
}
