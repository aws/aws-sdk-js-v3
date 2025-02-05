// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateFileSystemInput, DisassociateFileSystemOutput } from "../models/models_0";
import { de_DisassociateFileSystemCommand, se_DisassociateFileSystemCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateFileSystemCommand}.
 */
export interface DisassociateFileSystemCommandInput extends DisassociateFileSystemInput {}
/**
 * @public
 *
 * The output of {@link DisassociateFileSystemCommand}.
 */
export interface DisassociateFileSystemCommandOutput extends DisassociateFileSystemOutput, __MetadataBearer {}

/**
 * <p>Disassociates an Amazon FSx file system from the specified gateway. After the
 *          disassociation process finishes, the gateway can no longer access the Amazon FSx
 *          file system. This operation is only supported in the FSx File Gateway type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DisassociateFileSystemCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DisassociateFileSystemCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new StorageGatewayClient(config);
 * const input = { // DisassociateFileSystemInput
 *   FileSystemAssociationARN: "STRING_VALUE", // required
 *   ForceDelete: true || false,
 * };
 * const command = new DisassociateFileSystemCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateFileSystemOutput
 * //   FileSystemAssociationARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateFileSystemCommandInput - {@link DisassociateFileSystemCommandInput}
 * @returns {@link DisassociateFileSystemCommandOutput}
 * @see {@link DisassociateFileSystemCommandInput} for command's `input` shape.
 * @see {@link DisassociateFileSystemCommandOutput} for command's `response` shape.
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
export class DisassociateFileSystemCommand extends $Command
  .classBuilder<
    DisassociateFileSystemCommandInput,
    DisassociateFileSystemCommandOutput,
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
  .s("StorageGateway_20130630", "DisassociateFileSystem", {})
  .n("StorageGatewayClient", "DisassociateFileSystemCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateFileSystemCommand)
  .de(de_DisassociateFileSystemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFileSystemInput;
      output: DisassociateFileSystemOutput;
    };
    sdk: {
      input: DisassociateFileSystemCommandInput;
      output: DisassociateFileSystemCommandOutput;
    };
  };
}
