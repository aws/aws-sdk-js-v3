// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UpdateRoutingControlStateRequest,
  UpdateRoutingControlStateRequestFilterSensitiveLog,
  UpdateRoutingControlStateResponse,
  UpdateRoutingControlStateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateRoutingControlStateCommand,
  serializeAws_json1_0UpdateRoutingControlStateCommand,
} from "../protocols/Aws_json1_0";
import {
  Route53RecoveryClusterClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryClusterClient";

export interface UpdateRoutingControlStateCommandInput extends UpdateRoutingControlStateRequest {}
export interface UpdateRoutingControlStateCommandOutput extends UpdateRoutingControlStateResponse, __MetadataBearer {}

/**
 * <p>Set the state of the routing control to reroute traffic. You can set the value to be On or
 * 			Off. When the state is On, traffic flows to a cell. When the state is Off, traffic does not
 * 			flow.</p>
 * 			      <p>With Route 53 ARC, you can add safety rules for routing controls, which are safeguards for routing
 * 				control state updates that help prevent unexpected outcomes, like fail open traffic routing. However,
 * 				there are scenarios when you might want to bypass the routing control safeguards that are enforced with
 * 				safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery,
 * 				and one or more safety rules might be unexpectedly preventing you from updating a routing control state to
 * 				reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change
 * 				a routing control state and fail over your application.</p>
 * 			      <p>The <code>SafetyRulesToOverride</code> property enables you override one or more safety rules and
 * 				update routing control states. For more information, see
 * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.override-safety-rule.html">
 * 					Override safety rules to reroute traffic</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 * 			      <p>
 *             <i>You must specify Regional endpoints when you work with API cluster operations
 * 				to get or update routing control states in Route 53 ARC.</i>
 *          </p>
 * 			      <p>To see a code example for getting a routing control state, including accessing Regional cluster endpoints
 * 				in sequence, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples_actions.html">API examples</a>
 * 				in the Amazon Route 53 Application Recovery Controller Developer Guide.</p>
 * 			      <ul>
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
 * import { Route53RecoveryClusterClient, UpdateRoutingControlStateCommand } from "@aws-sdk/client-route53-recovery-cluster"; // ES Modules import
 * // const { Route53RecoveryClusterClient, UpdateRoutingControlStateCommand } = require("@aws-sdk/client-route53-recovery-cluster"); // CommonJS import
 * const client = new Route53RecoveryClusterClient(config);
 * const command = new UpdateRoutingControlStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoutingControlStateCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingControlStateCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryClusterClientResolvedConfig | config} for Route53RecoveryClusterClient's `config` shape.
 *
 */
export class UpdateRoutingControlStateCommand extends $Command<
  UpdateRoutingControlStateCommandInput,
  UpdateRoutingControlStateCommandOutput,
  Route53RecoveryClusterClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: UpdateRoutingControlStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryClusterClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRoutingControlStateCommandInput, UpdateRoutingControlStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRoutingControlStateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryClusterClient";
    const commandName = "UpdateRoutingControlStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRoutingControlStateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRoutingControlStateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRoutingControlStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateRoutingControlStateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRoutingControlStateCommandOutput> {
    return deserializeAws_json1_0UpdateRoutingControlStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
