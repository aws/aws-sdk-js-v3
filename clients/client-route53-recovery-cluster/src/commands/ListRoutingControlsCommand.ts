// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRoutingControlsRequest, ListRoutingControlsResponse } from "../models/models_0";
import {
  Route53RecoveryClusterClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryClusterClient";
import { ListRoutingControls } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRoutingControlsCommand}.
 */
export interface ListRoutingControlsCommandInput extends ListRoutingControlsRequest {}
/**
 * @public
 *
 * The output of {@link ListRoutingControlsCommand}.
 */
export interface ListRoutingControlsCommandOutput extends ListRoutingControlsResponse, __MetadataBearer {}

/**
 * <p>List routing control names and Amazon Resource Names (ARNs), as well as the routing control
 * 			state for each routing control, along with the control panel name and control panel ARN for the routing controls.
 * 			If you specify a control panel ARN, this call lists the routing controls in the control panel. Otherwise, it lists
 * 			all the routing controls in the cluster.</p>
 *          <p>A routing control is a simple on/off switch in Route 53 ARC that you
 * 			can use to route traffic to cells. When a routing control state is set to ON, traffic flows to a cell. When
 * 			the state is set to OFF, traffic does not flow.</p>
 *          <p>Before you can create a routing control, you must first create a cluster, and then host the control
 * 			in a control panel on the cluster. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.create.html">
 * 				Create routing control structures</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.
 * 			You access one of the endpoints for the cluster to get or update the routing control state to
 * 			redirect traffic for your application. </p>
 *          <p>
 *             <i>You must specify Regional endpoints when you work with API cluster operations
 * 			to use this API operation to list routing controls in Route 53 ARC.</i>
 *          </p>
 *          <p>Learn more about working with routing controls in the following topics in the
 * 			Amazon Route 53 Application Recovery Controller Developer Guide:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html">
 * 				Viewing and updating routing control states</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with
 * 				routing controls in Route 53 ARC</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryClusterClient, ListRoutingControlsCommand } from "@aws-sdk/client-route53-recovery-cluster"; // ES Modules import
 * // const { Route53RecoveryClusterClient, ListRoutingControlsCommand } = require("@aws-sdk/client-route53-recovery-cluster"); // CommonJS import
 * // import type { Route53RecoveryClusterClientConfig } from "@aws-sdk/client-route53-recovery-cluster";
 * const config = {}; // type is Route53RecoveryClusterClientConfig
 * const client = new Route53RecoveryClusterClient(config);
 * const input = { // ListRoutingControlsRequest
 *   ControlPanelArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRoutingControlsCommand(input);
 * const response = await client.send(command);
 * // { // ListRoutingControlsResponse
 * //   RoutingControls: [ // RoutingControls // required
 * //     { // RoutingControl
 * //       ControlPanelArn: "STRING_VALUE",
 * //       ControlPanelName: "STRING_VALUE",
 * //       RoutingControlArn: "STRING_VALUE",
 * //       RoutingControlName: "STRING_VALUE",
 * //       RoutingControlState: "On" || "Off",
 * //       Owner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoutingControlsCommandInput - {@link ListRoutingControlsCommandInput}
 * @returns {@link ListRoutingControlsCommandOutput}
 * @see {@link ListRoutingControlsCommandInput} for command's `input` shape.
 * @see {@link ListRoutingControlsCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryClusterClientResolvedConfig | config} for Route53RecoveryClusterClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link EndpointTemporarilyUnavailableException} (server fault)
 *  <p>The cluster endpoint isn't available. Try another cluster endpoint.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an unexpected error during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a routing control or control panel that was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was a validation error on the request.</p>
 *
 * @throws {@link Route53RecoveryClusterServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryCluster service.</p>
 *
 *
 * @public
 */
export class ListRoutingControlsCommand extends $Command
  .classBuilder<
    ListRoutingControlsCommandInput,
    ListRoutingControlsCommandOutput,
    Route53RecoveryClusterClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryClusterClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ToggleCustomerAPI", "ListRoutingControls", {})
  .n("Route53RecoveryClusterClient", "ListRoutingControlsCommand")
  .sc(ListRoutingControls)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoutingControlsRequest;
      output: ListRoutingControlsResponse;
    };
    sdk: {
      input: ListRoutingControlsCommandInput;
      output: ListRoutingControlsCommandOutput;
    };
  };
}
