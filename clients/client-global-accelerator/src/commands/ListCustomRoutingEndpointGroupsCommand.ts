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
import { ListCustomRoutingEndpointGroupsRequest, ListCustomRoutingEndpointGroupsResponse } from "../models/models_0";
import { ListCustomRoutingEndpointGroups } from "../schemas/schemas_2_Listener";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomRoutingEndpointGroupsCommand}.
 */
export interface ListCustomRoutingEndpointGroupsCommandInput extends ListCustomRoutingEndpointGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomRoutingEndpointGroupsCommand}.
 */
export interface ListCustomRoutingEndpointGroupsCommandOutput
  extends ListCustomRoutingEndpointGroupsResponse,
    __MetadataBearer {}

/**
 * <p>List the endpoint groups that are associated with a listener for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingEndpointGroupsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingEndpointGroupsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListCustomRoutingEndpointGroupsRequest
 *   ListenerArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomRoutingEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomRoutingEndpointGroupsResponse
 * //   EndpointGroups: [ // CustomRoutingEndpointGroups
 * //     { // CustomRoutingEndpointGroup
 * //       EndpointGroupArn: "STRING_VALUE",
 * //       EndpointGroupRegion: "STRING_VALUE",
 * //       DestinationDescriptions: [ // CustomRoutingDestinationDescriptions
 * //         { // CustomRoutingDestinationDescription
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //           Protocols: [ // Protocols
 * //             "TCP" || "UDP",
 * //           ],
 * //         },
 * //       ],
 * //       EndpointDescriptions: [ // CustomRoutingEndpointDescriptions
 * //         { // CustomRoutingEndpointDescription
 * //           EndpointId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomRoutingEndpointGroupsCommandInput - {@link ListCustomRoutingEndpointGroupsCommandInput}
 * @returns {@link ListCustomRoutingEndpointGroupsCommandOutput}
 * @see {@link ListCustomRoutingEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
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
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The listener that you specified doesn't exist.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 *
 * @public
 */
export class ListCustomRoutingEndpointGroupsCommand extends $Command
  .classBuilder<
    ListCustomRoutingEndpointGroupsCommandInput,
    ListCustomRoutingEndpointGroupsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GlobalAccelerator_V20180706", "ListCustomRoutingEndpointGroups", {})
  .n("GlobalAcceleratorClient", "ListCustomRoutingEndpointGroupsCommand")
  .sc(ListCustomRoutingEndpointGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomRoutingEndpointGroupsRequest;
      output: ListCustomRoutingEndpointGroupsResponse;
    };
    sdk: {
      input: ListCustomRoutingEndpointGroupsCommandInput;
      output: ListCustomRoutingEndpointGroupsCommandOutput;
    };
  };
}
