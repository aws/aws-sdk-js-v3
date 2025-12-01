// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import type { DeleteCustomRoutingEndpointGroupRequest } from "../models/models_0";
import { DeleteCustomRoutingEndpointGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Delete an endpoint group from a listener for a custom routing accelerator.</p>
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
 *  <p>The endpoint group that you specified doesn't exist.</p>
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
export class DeleteCustomRoutingEndpointGroupCommand extends $Command
  .classBuilder<
    DeleteCustomRoutingEndpointGroupCommandInput,
    DeleteCustomRoutingEndpointGroupCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "DeleteCustomRoutingEndpointGroup", {})
  .n("GlobalAcceleratorClient", "DeleteCustomRoutingEndpointGroupCommand")
  .sc(DeleteCustomRoutingEndpointGroup)
  .build() {
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
