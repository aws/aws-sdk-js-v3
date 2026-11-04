// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCustomRoutingEndpointGroupRequest } from "../models/models_0";
import { DeleteCustomRoutingEndpointGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCustomRoutingEndpointGroupCommand}.
 */
export interface DeleteCustomRoutingEndpointGroupCommandInput extends DeleteCustomRoutingEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomRoutingEndpointGroupCommand}.
 */
export interface DeleteCustomRoutingEndpointGroupCommandOutput extends __MetadataBearer {}

/**
 * Delete an endpoint group from a listener for a custom routing accelerator.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DeleteCustomRoutingEndpointGroupRequest
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomRoutingEndpointGroupCommandInput - {@link DeleteCustomRoutingEndpointGroupCommandInput}
 * @returns {@link DeleteCustomRoutingEndpointGroupCommandOutput}
 * @see {@link DeleteCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *
 * The endpoint group that you specified doesn't exist.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link GlobalAcceleratorServiceException}
 *
 * Base exception class for all service exceptions from GlobalAccelerator service.
 *
 * @public
 */
export class DeleteCustomRoutingEndpointGroupCommand extends command<DeleteCustomRoutingEndpointGroupCommandInput, DeleteCustomRoutingEndpointGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCustomRoutingEndpointGroup",
  DeleteCustomRoutingEndpointGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomRoutingEndpointGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomRoutingEndpointGroupCommandInput;
      output: DeleteCustomRoutingEndpointGroupCommandOutput;
    };
  };
}
