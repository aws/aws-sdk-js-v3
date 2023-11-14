// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { UpdateRoutingControlStatesRequest, UpdateRoutingControlStatesResponse } from "../models/models_0";
import { de_UpdateRoutingControlStatesCommand, se_UpdateRoutingControlStatesCommand } from "../protocols/Aws_json1_0";
import {
  Route53RecoveryClusterClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryClusterClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Set multiple routing control states. You can set the value for each state to be ON or OFF.
 * 			When the state is ON, traffic flows to a cell. When it's OFF, traffic does not
 * 			flow.</p>
 *          <p>With Route 53 ARC, you can add safety rules for routing controls, which are safeguards for routing
 * 				control state updates that help prevent unexpected outcomes, like fail open traffic routing. However,
 * 				there are scenarios when you might want to bypass the routing control safeguards that are enforced with
 * 				safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery,
 * 				and one or more safety rules might be unexpectedly preventing you from updating a routing control state to
 * 				reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change
 * 				a routing control state and fail over your application.</p>
 *          <p>The <code>SafetyRulesToOverride</code> property enables you override one or more safety rules and
 * 				update routing control states. For more information, see
 * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html">
 * 					Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 *          <p>
 *             <i>You must specify Regional endpoints when you work with API cluster operations
 * 				to get or update routing control states in Route 53 ARC.</i>
 *          </p>
 *          <p>To see a code example for getting a routing control state, including accessing Regional cluster endpoints
 * 				in sequence, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html">API examples</a>
 * 				in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.update.html">
 * 					Viewing and updating routing control states</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Working with routing controls overall</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryClusterClient, UpdateRoutingControlStatesCommand } from "@aws-sdk/client-route53-recovery-cluster"; // ES Modules import
 * // const { Route53RecoveryClusterClient, UpdateRoutingControlStatesCommand } = require("@aws-sdk/client-route53-recovery-cluster"); // CommonJS import
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
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this request. Try again.</p>
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
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The request can't update that many routing control states at the same time. Try again with fewer routing control states.</p>
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
 */
export class UpdateRoutingControlStatesCommand extends $Command<
  UpdateRoutingControlStatesCommandInput,
  UpdateRoutingControlStatesCommandOutput,
  Route53RecoveryClusterClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateRoutingControlStatesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryClusterClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRoutingControlStatesCommandInput, UpdateRoutingControlStatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRoutingControlStatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryClusterClient";
    const commandName = "UpdateRoutingControlStatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ToggleCustomerAPI",
        operation: "UpdateRoutingControlStates",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateRoutingControlStatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRoutingControlStatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRoutingControlStatesCommandOutput> {
    return de_UpdateRoutingControlStatesCommand(output, context);
  }
}
