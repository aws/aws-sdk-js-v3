// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateCustomRoutingEndpointGroupRequest,
  CreateCustomRoutingEndpointGroupResponse,
} from "../models/models_0";
import { CreateCustomRoutingEndpointGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCustomRoutingEndpointGroupCommand}.
 */
export interface CreateCustomRoutingEndpointGroupCommandInput extends CreateCustomRoutingEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomRoutingEndpointGroupCommand}.
 */
export interface CreateCustomRoutingEndpointGroupCommandOutput extends CreateCustomRoutingEndpointGroupResponse, __MetadataBearer {}

/**
 * Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // CreateCustomRoutingEndpointGroupRequest
 *   ListenerArn: "STRING_VALUE", // required
 *   EndpointGroupRegion: "STRING_VALUE", // required
 *   DestinationConfigurations: [ // CustomRoutingDestinationConfigurations // required
 *     { // CustomRoutingDestinationConfiguration
 *       FromPort: Number("int"), // required
 *       ToPort: Number("int"), // required
 *       Protocols: [ // CustomRoutingProtocols // required
 *         "TCP" || "UDP",
 *       ],
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomRoutingEndpointGroupResponse
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
 * @param CreateCustomRoutingEndpointGroupCommandInput - {@link CreateCustomRoutingEndpointGroupCommandInput}
 * @returns {@link CreateCustomRoutingEndpointGroupCommandOutput}
 * @see {@link CreateCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *
 * The accelerator that you specified doesn't exist.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access permission.
 *
 * @throws {@link EndpointGroupAlreadyExistsException} (client fault)
 *
 * The endpoint group that you specified already exists.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link InvalidPortRangeException} (client fault)
 *
 * The port numbers that you specified are not valid numbers or are not unique for this accelerator.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Processing your request would cause you to exceed an Global Accelerator limit.
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
export class CreateCustomRoutingEndpointGroupCommand extends command<CreateCustomRoutingEndpointGroupCommandInput, CreateCustomRoutingEndpointGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateCustomRoutingEndpointGroup",
  CreateCustomRoutingEndpointGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomRoutingEndpointGroupRequest;
      output: CreateCustomRoutingEndpointGroupResponse;
    };
    sdk: {
      input: CreateCustomRoutingEndpointGroupCommandInput;
      output: CreateCustomRoutingEndpointGroupCommandOutput;
    };
  };
}
