// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRoutingControlStatesRequest, UpdateRoutingControlStatesResponse } from "../models/models_0";
import { UpdateRoutingControlStates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRoutingControlStatesCommand}.
 */
export interface UpdateRoutingControlStatesCommandInput extends UpdateRoutingControlStatesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoutingControlStatesCommand}.
 */
export interface UpdateRoutingControlStatesCommandOutput extends UpdateRoutingControlStatesResponse, __MetadataBearer {}

/**
 * Set multiple routing control states. You can set the value for each state to be ON or OFF. When the state is ON, traffic flows to a cell. When it's OFF, traffic does not flow.
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
 * import { Route53RecoveryClusterClient, UpdateRoutingControlStatesCommand } from "@aws-sdk/client-route53-recovery-cluster"; // ES Modules import
 * // const { Route53RecoveryClusterClient, UpdateRoutingControlStatesCommand } = require("@aws-sdk/client-route53-recovery-cluster"); // CommonJS import
 * // import type { Route53RecoveryClusterClientConfig } from "@aws-sdk/client-route53-recovery-cluster";
 * const config = {}; // type is Route53RecoveryClusterClientConfig
 * const client = new Route53RecoveryClusterClient(config);
 * const input = { // UpdateRoutingControlStatesRequest
 *   UpdateRoutingControlStateEntries: [ // UpdateRoutingControlStateEntries // required
 *     { // UpdateRoutingControlStateEntry
 *       RoutingControlArn: "STRING_VALUE", // required
 *       RoutingControlState: "On" || "Off", // required
 *     },
 *   ],
 *   SafetyRulesToOverride: [ // Arns
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateRoutingControlStatesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRoutingControlStatesCommandInput - {@link UpdateRoutingControlStatesCommandInput}
 * @returns {@link UpdateRoutingControlStatesCommandOutput}
 * @see {@link UpdateRoutingControlStatesCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingControlStatesCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceLimitExceededException} (client fault)
 *
 * The request can't update that many routing control states at the same time. Try again with fewer routing control states.
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
export class UpdateRoutingControlStatesCommand extends command<UpdateRoutingControlStatesCommandInput, UpdateRoutingControlStatesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRoutingControlStates",
  UpdateRoutingControlStates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoutingControlStatesRequest;
      output: {};
    };
    sdk: {
      input: UpdateRoutingControlStatesCommandInput;
      output: UpdateRoutingControlStatesCommandOutput;
    };
  };
}
