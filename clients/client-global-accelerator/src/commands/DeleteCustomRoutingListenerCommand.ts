// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DeleteCustomRoutingListenerRequest } from "../models/models_0";
import { de_DeleteCustomRoutingListenerCommand, se_DeleteCustomRoutingListenerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomRoutingListenerCommand}.
 */
export interface DeleteCustomRoutingListenerCommandInput extends DeleteCustomRoutingListenerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomRoutingListenerCommand}.
 */
export interface DeleteCustomRoutingListenerCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a listener for a custom routing accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteCustomRoutingListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteCustomRoutingListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DeleteCustomRoutingListenerRequest
 *   ListenerArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomRoutingListenerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomRoutingListenerCommandInput - {@link DeleteCustomRoutingListenerCommandInput}
 * @returns {@link DeleteCustomRoutingListenerCommandOutput}
 * @see {@link DeleteCustomRoutingListenerCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomRoutingListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AssociatedEndpointGroupFoundException} (client fault)
 *  <p>The listener that you specified has an endpoint group associated with it. You must remove all dependent resources
 * 			from a listener before you can delete it.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The listener that you specified doesn't exist.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 * @public
 */
export class DeleteCustomRoutingListenerCommand extends $Command
  .classBuilder<
    DeleteCustomRoutingListenerCommandInput,
    DeleteCustomRoutingListenerCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "DeleteCustomRoutingListener", {})
  .n("GlobalAcceleratorClient", "DeleteCustomRoutingListenerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCustomRoutingListenerCommand)
  .de(de_DeleteCustomRoutingListenerCommand)
  .build() {}
