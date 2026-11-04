// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRoutingControlsRequest, ListRoutingControlsResponse } from "../models/models_0";
import { ListRoutingControls$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List routing control names and Amazon Resource Names (ARNs), as well as the routing control state for each routing control, along with the control panel name and control panel ARN for the routing controls. If you specify a control panel ARN, this call lists the routing controls in the control panel. Otherwise, it lists all the routing controls in the cluster.
 *
 * A routing control is a simple on/off switch in Route 53 ARC that you can use to route traffic to cells. When a routing control state is set to ON, traffic flows to a cell. When the state is set to OFF, traffic does not flow.
 *
 * Before you can create a routing control, you must first create a cluster, and then host the control in a control panel on the cluster. For more information, see [Create routing control structures](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.create.html) in the Amazon Route 53 Application Recovery Controller Developer Guide. You access one of the endpoints for the cluster to get or update the routing control state to redirect traffic for your application.
 *
 * *You must specify Regional endpoints when you work with API cluster operations to use this API operation to list routing controls in Route 53 ARC.*
 *
 * Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide:
 *
 * - [Viewing and updating routing control states](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html)
 * - [Working with routing controls in Route 53 ARC](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html)
 *
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link EndpointTemporarilyUnavailableException} (server fault)
 *
 * The cluster endpoint isn't available. Try another cluster endpoint.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an unexpected error during processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a routing control or control panel that was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There was a validation error on the request.
 *
 * @throws {@link Route53RecoveryClusterServiceException}
 *
 * Base exception class for all service exceptions from Route53RecoveryCluster service.
 *
 * @public
 */
export class ListRoutingControlsCommand extends command<ListRoutingControlsCommandInput, ListRoutingControlsCommandOutput>(
  _ep0,
  _mw0,
  "ListRoutingControls",
  ListRoutingControls$
) {
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
