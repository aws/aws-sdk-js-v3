// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSMBSecurityStrategyInput, UpdateSMBSecurityStrategyOutput } from "../models/models_0";
import { de_UpdateSMBSecurityStrategyCommand, se_UpdateSMBSecurityStrategyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSMBSecurityStrategyCommand}.
 */
export interface UpdateSMBSecurityStrategyCommandInput extends UpdateSMBSecurityStrategyInput {}
/**
 * @public
 *
 * The output of {@link UpdateSMBSecurityStrategyCommand}.
 */
export interface UpdateSMBSecurityStrategyCommandOutput extends UpdateSMBSecurityStrategyOutput, __MetadataBearer {}

/**
 * <p>Updates the SMB security strategy on a file gateway. This action is only supported in
 *          file gateways.</p>
 *          <note>
 *             <p>This API is called Security level in the User Guide.</p>
 *             <p>A higher security level can affect performance of the gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateSMBSecurityStrategyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateSMBSecurityStrategyInput
 *   GatewayARN: "STRING_VALUE", // required
 *   SMBSecurityStrategy: "ClientSpecified" || "MandatorySigning" || "MandatoryEncryption" || "MandatoryEncryptionNoAes128", // required
 * };
 * const command = new UpdateSMBSecurityStrategyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSMBSecurityStrategyOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSMBSecurityStrategyCommandInput - {@link UpdateSMBSecurityStrategyCommandInput}
 * @returns {@link UpdateSMBSecurityStrategyCommandOutput}
 * @see {@link UpdateSMBSecurityStrategyCommandInput} for command's `input` shape.
 * @see {@link UpdateSMBSecurityStrategyCommandOutput} for command's `response` shape.
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
export class UpdateSMBSecurityStrategyCommand extends $Command
  .classBuilder<
    UpdateSMBSecurityStrategyCommandInput,
    UpdateSMBSecurityStrategyCommandOutput,
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
  .s("StorageGateway_20130630", "UpdateSMBSecurityStrategy", {})
  .n("StorageGatewayClient", "UpdateSMBSecurityStrategyCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSMBSecurityStrategyCommand)
  .de(de_UpdateSMBSecurityStrategyCommand)
  .build() {}
