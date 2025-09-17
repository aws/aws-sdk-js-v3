// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteTapeInput, DeleteTapeOutput } from "../models/models_0";
import { de_DeleteTapeCommand, se_DeleteTapeCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTapeCommand}.
 */
export interface DeleteTapeCommandInput extends DeleteTapeInput {}
/**
 * @public
 *
 * The output of {@link DeleteTapeCommand}.
 */
export interface DeleteTapeCommandOutput extends DeleteTapeOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified virtual tape. This operation is only supported in the tape gateway
 *          type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteTapeCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteTapeCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteTapeInput
 *   GatewayARN: "STRING_VALUE", // required
 *   TapeARN: "STRING_VALUE", // required
 *   BypassGovernanceRetention: true || false,
 * };
 * const command = new DeleteTapeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTapeOutput
 * //   TapeARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTapeCommandInput - {@link DeleteTapeCommandInput}
 * @returns {@link DeleteTapeCommandOutput}
 * @see {@link DeleteTapeCommandInput} for command's `input` shape.
 * @see {@link DeleteTapeCommandOutput} for command's `response` shape.
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
 * @example To delete a virtual tape
 * ```javascript
 * // This example deletes the specified virtual tape.
 * const input = {
 *   GatewayARN: "arn:aws:storagegateway:us-east-1:204469490176:gateway/sgw-12A3456B",
 *   TapeARN: "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0"
 * };
 * const command = new DeleteTapeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TapeARN: "arn:aws:storagegateway:us-east-1:204469490176:tape/TEST05A2A0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteTapeCommand extends $Command
  .classBuilder<
    DeleteTapeCommandInput,
    DeleteTapeCommandOutput,
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
  .s("StorageGateway_20130630", "DeleteTape", {})
  .n("StorageGatewayClient", "DeleteTapeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTapeCommand)
  .de(de_DeleteTapeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTapeInput;
      output: DeleteTapeOutput;
    };
    sdk: {
      input: DeleteTapeCommandInput;
      output: DeleteTapeCommandOutput;
    };
  };
}
