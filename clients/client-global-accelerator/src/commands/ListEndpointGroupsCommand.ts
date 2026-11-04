// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEndpointGroupsRequest, ListEndpointGroupsResponse } from "../models/models_0";
import { ListEndpointGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEndpointGroupsCommand}.
 */
export interface ListEndpointGroupsCommandInput extends ListEndpointGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListEndpointGroupsCommand}.
 */
export interface ListEndpointGroupsCommandOutput extends ListEndpointGroupsResponse, __MetadataBearer {}

/**
 * List the endpoint groups that are associated with a listener.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListEndpointGroupsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListEndpointGroupsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // import type { GlobalAcceleratorClientConfig } from "@aws-sdk/client-global-accelerator";
 * const config = {}; // type is GlobalAcceleratorClientConfig
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListEndpointGroupsRequest
 *   ListenerArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListEndpointGroupsResponse
 * //   EndpointGroups: [ // EndpointGroups
 * //     { // EndpointGroup
 * //       EndpointGroupArn: "STRING_VALUE",
 * //       EndpointGroupRegion: "STRING_VALUE",
 * //       EndpointDescriptions: [ // EndpointDescriptions
 * //         { // EndpointDescription
 * //           EndpointId: "STRING_VALUE",
 * //           Weight: Number("int"),
 * //           HealthState: "INITIAL" || "HEALTHY" || "UNHEALTHY",
 * //           HealthReason: "STRING_VALUE",
 * //           ClientIPPreservationEnabled: true || false,
 * //         },
 * //       ],
 * //       TrafficDialPercentage: Number("float"),
 * //       HealthCheckPort: Number("int"),
 * //       HealthCheckProtocol: "TCP" || "HTTP" || "HTTPS",
 * //       HealthCheckPath: "STRING_VALUE",
 * //       HealthCheckIntervalSeconds: Number("int"),
 * //       ThresholdCount: Number("int"),
 * //       PortOverrides: [ // PortOverrides
 * //         { // PortOverride
 * //           ListenerPort: Number("int"),
 * //           EndpointPort: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEndpointGroupsCommandInput - {@link ListEndpointGroupsCommandInput}
 * @returns {@link ListEndpointGroupsCommandOutput}
 * @see {@link ListEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * There was an internal error for Global Accelerator.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * An argument that you specified is invalid.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *
 * There isn't another item to return.
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
export class ListEndpointGroupsCommand extends command<ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListEndpointGroups",
  ListEndpointGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEndpointGroupsRequest;
      output: ListEndpointGroupsResponse;
    };
    sdk: {
      input: ListEndpointGroupsCommandInput;
      output: ListEndpointGroupsCommandOutput;
    };
  };
}
