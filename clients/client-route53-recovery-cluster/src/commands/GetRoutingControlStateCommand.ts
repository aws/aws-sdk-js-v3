// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRoutingControlStateRequest, GetRoutingControlStateResponse } from "../models/models_0";
import { GetRoutingControlState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRoutingControlStateCommand}.
 */
export interface GetRoutingControlStateCommandInput extends GetRoutingControlStateRequest {}
/**
 * @public
 *
 * The output of {@link GetRoutingControlStateCommand}.
 */
export interface GetRoutingControlStateCommandOutput extends GetRoutingControlStateResponse, __MetadataBearer {}

/**
 * Get the state for a routing control. A routing control is a simple on/off switch that you can use to route traffic to cells. When a routing control state is set to ON, traffic flows to a cell. When the state is set to OFF, traffic does not flow.
 *
 * Before you can create a routing control, you must first create a cluster, and then host the control in a control panel on the cluster. For more information, see [Create routing control structures](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.create.html) in the Amazon Route 53 Application Recovery Controller Developer Guide. You access one of the endpoints for the cluster to get or update the routing control state to redirect traffic for your application.
 *
 * *You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC.*
 *
 * To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see [API examples](https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 *
 * Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide:
 *
 * - [Viewing and updating routing control states](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html)
 * - [Working with routing controls in Route 53 ARC](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryClusterClient, GetRoutingControlStateCommand } from "@aws-sdk/client-route53-recovery-cluster"; // ES Modules import
 * // const { Route53RecoveryClusterClient, GetRoutingControlStateCommand } = require("@aws-sdk/client-route53-recovery-cluster"); // CommonJS import
 * // import type { Route53RecoveryClusterClientConfig } from "@aws-sdk/client-route53-recovery-cluster";
 * const config = {}; // type is Route53RecoveryClusterClientConfig
 * const client = new Route53RecoveryClusterClient(config);
 * const input = { // GetRoutingControlStateRequest
 *   RoutingControlArn: "STRING_VALUE", // required
 * };
 * const command = new GetRoutingControlStateCommand(input);
 * const response = await client.send(command);
 * // { // GetRoutingControlStateResponse
 * //   RoutingControlArn: "STRING_VALUE", // required
 * //   RoutingControlState: "On" || "Off", // required
 * //   RoutingControlName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRoutingControlStateCommandInput - {@link GetRoutingControlStateCommandInput}
 * @returns {@link GetRoutingControlStateCommandOutput}
 * @see {@link GetRoutingControlStateCommandInput} for command's `input` shape.
 * @see {@link GetRoutingControlStateCommandOutput} for command's `response` shape.
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
export class GetRoutingControlStateCommand extends command<GetRoutingControlStateCommandInput, GetRoutingControlStateCommandOutput>(
  _ep0,
  _mw0,
  "GetRoutingControlState",
  GetRoutingControlState$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRoutingControlStateRequest;
      output: GetRoutingControlStateResponse;
    };
    sdk: {
      input: GetRoutingControlStateCommandInput;
      output: GetRoutingControlStateCommandOutput;
    };
  };
}
