// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEndpointGroupRequest } from "../models/models_0";
import { DeleteEndpointGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEndpointGroupCommand}.
 */
export interface DeleteEndpointGroupCommandInput extends DeleteEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEndpointGroupCommand}.
 */
export interface DeleteEndpointGroupCommandOutput extends __MetadataBearer {}

/**
 * Delete an endpoint group from a listener.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DeleteEndpointGroupRequest
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEndpointGroupCommandInput - {@link DeleteEndpointGroupCommandInput}
 * @returns {@link DeleteEndpointGroupCommandOutput}
 * @see {@link DeleteEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointGroupCommandOutput} for command's `response` shape.
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
export class DeleteEndpointGroupCommand extends command<DeleteEndpointGroupCommandInput, DeleteEndpointGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEndpointGroup",
  DeleteEndpointGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEndpointGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteEndpointGroupCommandInput;
      output: DeleteEndpointGroupCommandOutput;
    };
  };
}
