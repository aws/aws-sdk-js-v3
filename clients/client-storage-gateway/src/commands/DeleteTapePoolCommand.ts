// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteTapePoolInput, DeleteTapePoolOutput } from "../models/models_0";
import { DeleteTapePool$ } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  StorageGatewayClientResolvedConfig,
} from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTapePoolCommand}.
 */
export interface DeleteTapePoolCommandInput extends DeleteTapePoolInput {}
/**
 * @public
 *
 * The output of {@link DeleteTapePoolCommand}.
 */
export interface DeleteTapePoolCommandOutput extends DeleteTapePoolOutput, __MetadataBearer {}

/**
 * <p>Delete a custom tape pool. A custom tape pool can only be deleted if there are no tapes
 *          in the pool and if there are no automatic tape creation policies that reference the custom
 *          tape pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DeleteTapePoolCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DeleteTapePoolCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * // import type { StorageGatewayClientConfig } from "@aws-sdk/client-storage-gateway";
 * const config = {}; // type is StorageGatewayClientConfig
 * const client = new StorageGatewayClient(config);
 * const input = { // DeleteTapePoolInput
 *   PoolARN: "STRING_VALUE", // required
 * };
 * const command = new DeleteTapePoolCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTapePoolOutput
 * //   PoolARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTapePoolCommandInput - {@link DeleteTapePoolCommandInput}
 * @returns {@link DeleteTapePoolCommandOutput}
 * @see {@link DeleteTapePoolCommandInput} for command's `input` shape.
 * @see {@link DeleteTapePoolCommandOutput} for command's `response` shape.
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
export class DeleteTapePoolCommand extends $Command
  .classBuilder<
    DeleteTapePoolCommandInput,
    DeleteTapePoolCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StorageGateway_20130630", "DeleteTapePool", {})
  .n("StorageGatewayClient", "DeleteTapePoolCommand")
  .sc(DeleteTapePool$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTapePoolInput;
      output: DeleteTapePoolOutput;
    };
    sdk: {
      input: DeleteTapePoolCommandInput;
      output: DeleteTapePoolCommandOutput;
    };
  };
}
