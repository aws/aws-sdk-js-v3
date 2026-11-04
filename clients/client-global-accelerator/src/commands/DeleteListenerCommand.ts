// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteListenerRequest } from "../models/models_0";
import { DeleteListener$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteListenerCommand}.
 */
export interface DeleteListenerCommandInput extends DeleteListenerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteListenerCommand}.
 */
export interface DeleteListenerCommandOutput extends __MetadataBearer {}

/**
 * Delete a listener from an accelerator.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteListenerCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteListenerCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DeleteListenerRequest
 *   ListenerArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteListenerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteListenerCommandInput - {@link DeleteListenerCommandInput}
 * @returns {@link DeleteListenerCommandOutput}
 * @see {@link DeleteListenerCommandInput} for command's `input` shape.
 * @see {@link DeleteListenerCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AssociatedEndpointGroupFoundException} (client fault)
 *
 * The listener that you specified has an endpoint group associated with it. You must remove all dependent resources from a listener before you can delete it.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *
 * The listener that you specified doesn't exist.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class DeleteListenerCommand extends command<DeleteListenerCommandInput, DeleteListenerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteListener",
  DeleteListener$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteListenerRequest;
      output: {};
    };
    sdk: {
      input: DeleteListenerCommandInput;
      output: DeleteListenerCommandOutput;
    };
  };
}
