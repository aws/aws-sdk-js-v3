// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAutomaticTapeCreationPolicyInput, DeleteAutomaticTapeCreationPolicyOutput } from "../models/models_0";
import { DeleteAutomaticTapeCreationPolicy } from "../schemas/schemas_10_DeleteAutomaticTapeCreationPolicy";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAutomaticTapeCreationPolicyCommand}.
 */
export interface DeleteAutomaticTapeCreationPolicyCommandInput extends DeleteAutomaticTapeCreationPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteAutomaticTapeCreationPolicyCommand}.
 */
export interface DeleteAutomaticTapeCreationPolicyCommandOutput
  extends DeleteAutomaticTapeCreationPolicyOutput,
    __MetadataBearer {}

/**
 * <p>Deletes the automatic tape creation policy of a gateway. If you delete this policy, new
 *          virtual tapes must be created manually. Use the Amazon Resource Name (ARN) of the gateway
 *          in your request to remove the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteAutomaticTapeCreationPolicyCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteAutomaticTapeCreationPolicyCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteAutomaticTapeCreationPolicyInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new DeleteAutomaticTapeCreationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAutomaticTapeCreationPolicyOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteAutomaticTapeCreationPolicyCommandInput - {@link DeleteAutomaticTapeCreationPolicyCommandInput}
 * @returns {@link DeleteAutomaticTapeCreationPolicyCommandOutput}
 * @see {@link DeleteAutomaticTapeCreationPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAutomaticTapeCreationPolicyCommandOutput} for command's `response` shape.
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
export class DeleteAutomaticTapeCreationPolicyCommand extends $Command
  .classBuilder<
    DeleteAutomaticTapeCreationPolicyCommandInput,
    DeleteAutomaticTapeCreationPolicyCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DeleteAutomaticTapeCreationPolicy", {})
  .n("StorageGatewayClient", "DeleteAutomaticTapeCreationPolicyCommand")
  .sc(DeleteAutomaticTapeCreationPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAutomaticTapeCreationPolicyInput;
      output: DeleteAutomaticTapeCreationPolicyOutput;
    };
    sdk: {
      input: DeleteAutomaticTapeCreationPolicyCommandInput;
      output: DeleteAutomaticTapeCreationPolicyCommandOutput;
    };
  };
}
