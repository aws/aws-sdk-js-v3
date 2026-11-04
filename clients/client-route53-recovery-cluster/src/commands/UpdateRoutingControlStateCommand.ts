// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRoutingControlStateRequest, UpdateRoutingControlStateResponse } from "../models/models_0";
import { UpdateRoutingControlState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRoutingControlStateCommand}.
 */
export interface UpdateRoutingControlStateCommandInput extends UpdateRoutingControlStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoutingControlStateCommand}.
 */
export interface UpdateRoutingControlStateCommandOutput extends UpdateRoutingControlStateResponse, __MetadataBearer {}

/**
 * Set the state of the routing control to reroute traffic. You can set the value to ON or OFF. When the state is ON, traffic flows to a cell. When the state is OFF, traffic does not flow.
 *
 * With Route 53 ARC, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application.
 *
 * The `SafetyRulesToOverride` property enables you override one or more safety rules and update routing control states. For more information, see [Override safety rules to reroute traffic](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 *
 * *You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Route 53 ARC.*
 *
 * To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see [API examples](https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 *
 * - [Viewing and updating routing control states](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html)
 * - [Working with routing controls overall](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryClusterClient, UpdateRoutingControlStateCommand } from "@aws-sdk/client-route53-recovery-cluster"; // ES Modules import
 * // const { Route53RecoveryClusterClient, UpdateRoutingControlStateCommand } = require("@aws-sdk/client-route53-recovery-cluster"); // CommonJS import
 * // import type { Route53RecoveryClusterClientConfig } from "@aws-sdk/client-route53-recovery-cluster";
 * const config = {}; // type is Route53RecoveryClusterClientConfig
 * const client = new Route53RecoveryClusterClient(config);
 * const input = { // UpdateRoutingControlStateRequest
 *   RoutingControlArn: "STRING_VALUE", // required
 *   RoutingControlState: "On" || "Off", // required
 *   SafetyRulesToOverride: [ // Arns
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateRoutingControlStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRoutingControlStateCommandInput - {@link UpdateRoutingControlStateCommandInput}
 * @returns {@link UpdateRoutingControlStateCommandOutput}
 * @see {@link UpdateRoutingControlStateCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingControlStateCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryClusterClientResolvedConfig | config} for Route53RecoveryClusterClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict with this request. Try again.
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
export class UpdateRoutingControlStateCommand extends command<UpdateRoutingControlStateCommandInput, UpdateRoutingControlStateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRoutingControlState",
  UpdateRoutingControlState$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoutingControlStateRequest;
      output: {};
    };
    sdk: {
      input: UpdateRoutingControlStateCommandInput;
      output: UpdateRoutingControlStateCommandOutput;
    };
  };
}
