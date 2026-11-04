// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveCustomRoutingEndpointsRequest } from "../models/models_0";
import { RemoveCustomRoutingEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveCustomRoutingEndpointsCommand}.
 */
export interface RemoveCustomRoutingEndpointsCommandInput extends RemoveCustomRoutingEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveCustomRoutingEndpointsCommand}.
 */
export interface RemoveCustomRoutingEndpointsCommandOutput extends __MetadataBearer {}

/**
 * Remove endpoints from a custom routing accelerator.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, RemoveCustomRoutingEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, RemoveCustomRoutingEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // RemoveCustomRoutingEndpointsRequest
 *   EndpointIds: [ // EndpointIds // required
 *     "STRING_VALUE",
 *   ],
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new RemoveCustomRoutingEndpointsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveCustomRoutingEndpointsCommandInput - {@link RemoveCustomRoutingEndpointsCommandInput}
 * @returns {@link RemoveCustomRoutingEndpointsCommandOutput}
 * @see {@link RemoveCustomRoutingEndpointsCommandInput} for command's `input` shape.
 * @see {@link RemoveCustomRoutingEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access permission.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You can't use both of those options.
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *
 * The endpoint group that you specified doesn't exist.
 *
 * @throws {@link EndpointNotFoundException} (client fault)
 *
 * The endpoint that you specified doesn't exist.
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
export class RemoveCustomRoutingEndpointsCommand extends command<RemoveCustomRoutingEndpointsCommandInput, RemoveCustomRoutingEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "RemoveCustomRoutingEndpoints",
  RemoveCustomRoutingEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveCustomRoutingEndpointsRequest;
      output: {};
    };
    sdk: {
      input: RemoveCustomRoutingEndpointsCommandInput;
      output: RemoveCustomRoutingEndpointsCommandOutput;
    };
  };
}
