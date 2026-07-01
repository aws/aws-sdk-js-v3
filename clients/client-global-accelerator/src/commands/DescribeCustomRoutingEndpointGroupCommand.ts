// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeCustomRoutingEndpointGroupRequest,
  DescribeCustomRoutingEndpointGroupResponse,
} from "../models/models_0";
import { DescribeCustomRoutingEndpointGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCustomRoutingEndpointGroupCommand}.
 */
export interface DescribeCustomRoutingEndpointGroupCommandInput extends DescribeCustomRoutingEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCustomRoutingEndpointGroupCommand}.
 */
export interface DescribeCustomRoutingEndpointGroupCommandOutput extends DescribeCustomRoutingEndpointGroupResponse, __MetadataBearer {}

/**
 * <p>Describe an endpoint group for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeCustomRoutingEndpointGroupRequest
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCustomRoutingEndpointGroupResponse
 * //   EndpointGroup: { // CustomRoutingEndpointGroup
 * //     EndpointGroupArn: "STRING_VALUE",
 * //     EndpointGroupRegion: "STRING_VALUE",
 * //     DestinationDescriptions: [ // CustomRoutingDestinationDescriptions
 * //       { // CustomRoutingDestinationDescription
 * //         FromPort: Number("int"),
 * //         ToPort: Number("int"),
 * //         Protocols: [ // Protocols
 * //           "TCP" || "UDP",
 * //         ],
 * //       },
 * //     ],
 * //     EndpointDescriptions: [ // CustomRoutingEndpointDescriptions
 * //       { // CustomRoutingEndpointDescription
 * //         EndpointId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCustomRoutingEndpointGroupCommandInput - {@link DescribeCustomRoutingEndpointGroupCommandInput}
 * @returns {@link DescribeCustomRoutingEndpointGroupCommandOutput}
 * @see {@link DescribeCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
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
export class DescribeCustomRoutingEndpointGroupCommand extends command<DescribeCustomRoutingEndpointGroupCommandInput, DescribeCustomRoutingEndpointGroupCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCustomRoutingEndpointGroup",
  DescribeCustomRoutingEndpointGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCustomRoutingEndpointGroupRequest;
      output: DescribeCustomRoutingEndpointGroupResponse;
    };
    sdk: {
      input: DescribeCustomRoutingEndpointGroupCommandInput;
      output: DescribeCustomRoutingEndpointGroupCommandOutput;
    };
  };
}
