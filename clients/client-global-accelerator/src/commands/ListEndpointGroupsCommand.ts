// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { ListEndpointGroupsRequest, ListEndpointGroupsResponse } from "../models/models_0";
import { de_ListEndpointGroupsCommand, se_ListEndpointGroupsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List the endpoint groups that are associated with a listener. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListEndpointGroupsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListEndpointGroupsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
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
export class ListEndpointGroupsCommand extends $Command
  .classBuilder<
    ListEndpointGroupsCommandInput,
    ListEndpointGroupsCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "ListEndpointGroups", {})
  .n("GlobalAcceleratorClient", "ListEndpointGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListEndpointGroupsCommand)
  .de(de_ListEndpointGroupsCommand)
  .build() {
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
