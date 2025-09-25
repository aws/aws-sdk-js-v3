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
import { ListCustomRoutingListenersRequest, ListCustomRoutingListenersResponse } from "../models/models_0";
import { ListCustomRoutingListeners } from "../schemas/schemas_11_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomRoutingListenersCommand}.
 */
export interface ListCustomRoutingListenersCommandInput extends ListCustomRoutingListenersRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomRoutingListenersCommand}.
 */
export interface ListCustomRoutingListenersCommandOutput extends ListCustomRoutingListenersResponse, __MetadataBearer {}

/**
 * <p>List the listeners for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingListenersCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingListenersCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListCustomRoutingListenersRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomRoutingListenersCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomRoutingListenersResponse
 * //   Listeners: [ // CustomRoutingListeners
 * //     { // CustomRoutingListener
 * //       ListenerArn: "STRING_VALUE",
 * //       PortRanges: [ // PortRanges
 * //         { // PortRange
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomRoutingListenersCommandInput - {@link ListCustomRoutingListenersCommandInput}
 * @returns {@link ListCustomRoutingListenersCommandOutput}
 * @see {@link ListCustomRoutingListenersCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingListenersCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>There isn't another item to return.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class ListCustomRoutingListenersCommand extends $Command
  .classBuilder<
    ListCustomRoutingListenersCommandInput,
    ListCustomRoutingListenersCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "ListCustomRoutingListeners", {})
  .n("GlobalAcceleratorClient", "ListCustomRoutingListenersCommand")
  .sc(ListCustomRoutingListeners)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomRoutingListenersRequest;
      output: ListCustomRoutingListenersResponse;
    };
    sdk: {
      input: ListCustomRoutingListenersCommandInput;
      output: ListCustomRoutingListenersCommandOutput;
    };
  };
}
