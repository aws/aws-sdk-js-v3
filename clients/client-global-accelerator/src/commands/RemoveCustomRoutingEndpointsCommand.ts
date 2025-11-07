// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { RemoveCustomRoutingEndpointsRequest } from "../models/models_0";
import { RemoveCustomRoutingEndpoints } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Remove endpoints from a custom routing accelerator.</p>
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
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't use both of those options.</p>
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *  <p>The endpoint group that you specified doesn't exist.</p>
 *
 * @throws {@link EndpointNotFoundException} (client fault)
 *  <p>The endpoint that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class RemoveCustomRoutingEndpointsCommand extends $Command
  .classBuilder<
    RemoveCustomRoutingEndpointsCommandInput,
    RemoveCustomRoutingEndpointsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "RemoveCustomRoutingEndpoints", {})
  .n("GlobalAcceleratorClient", "RemoveCustomRoutingEndpointsCommand")
  .sc(RemoveCustomRoutingEndpoints)
  .build() {
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
