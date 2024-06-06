// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAutomaticTapeCreationPolicyInput, UpdateAutomaticTapeCreationPolicyOutput } from "../models/models_0";
import {
  de_UpdateAutomaticTapeCreationPolicyCommand,
  se_UpdateAutomaticTapeCreationPolicyCommand,
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
 * The input for {@link UpdateAutomaticTapeCreationPolicyCommand}.
 */
export interface UpdateAutomaticTapeCreationPolicyCommandInput extends UpdateAutomaticTapeCreationPolicyInput {}
/**
 * @public
 *
 * The output of {@link UpdateAutomaticTapeCreationPolicyCommand}.
 */
export interface UpdateAutomaticTapeCreationPolicyCommandOutput
  extends UpdateAutomaticTapeCreationPolicyOutput,
    __MetadataBearer {}

/**
 * <p>Updates the automatic tape creation policy of a gateway. Use this to update the policy
 *          with a new set of automatic tape creation rules. This is only supported for tape
 *          gateways.</p>
 *          <p>By default, there is no automatic tape creation policy.</p>
 *          <note>
 *             <p>A gateway can have only one automatic tape creation policy.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateAutomaticTapeCreationPolicyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateAutomaticTapeCreationPolicyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // UpdateAutomaticTapeCreationPolicyInput
 *   AutomaticTapeCreationRules: [ // AutomaticTapeCreationRules // required
 *     { // AutomaticTapeCreationRule
 *       TapeBarcodePrefix: "STRING_VALUE", // required
 *       PoolId: "STRING_VALUE", // required
 *       TapeSizeInBytes: Number("long"), // required
 *       MinimumNumTapes: Number("int"), // required
 *       Worm: true || false,
 *     },
 *   ],
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new UpdateAutomaticTapeCreationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAutomaticTapeCreationPolicyOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAutomaticTapeCreationPolicyCommandInput - {@link UpdateAutomaticTapeCreationPolicyCommandInput}
 * @returns {@link UpdateAutomaticTapeCreationPolicyCommandOutput}
 * @see {@link UpdateAutomaticTapeCreationPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAutomaticTapeCreationPolicyCommandOutput} for command's `response` shape.
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
export class UpdateAutomaticTapeCreationPolicyCommand extends $Command
  .classBuilder<
    UpdateAutomaticTapeCreationPolicyCommandInput,
    UpdateAutomaticTapeCreationPolicyCommandOutput,
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
  .s("StorageGateway_20130630", "UpdateAutomaticTapeCreationPolicy", {})
  .n("StorageGatewayClient", "UpdateAutomaticTapeCreationPolicyCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAutomaticTapeCreationPolicyCommand)
  .de(de_UpdateAutomaticTapeCreationPolicyCommand)
  .build() {}
