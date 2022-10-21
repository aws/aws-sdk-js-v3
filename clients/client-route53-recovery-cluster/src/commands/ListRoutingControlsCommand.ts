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
  ListRoutingControlsRequest,
  ListRoutingControlsRequestFilterSensitiveLog,
  ListRoutingControlsResponse,
  ListRoutingControlsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0ListRoutingControlsCommand,
  serializeAws_json1_0ListRoutingControlsCommand,
} from "../protocols/Aws_json1_0";
import {
  Route53RecoveryClusterClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryClusterClient";

export interface ListRoutingControlsCommandInput extends ListRoutingControlsRequest {}
export interface ListRoutingControlsCommandOutput extends ListRoutingControlsResponse, __MetadataBearer {}

/**
 * <p>List routing control names and Amazon Resource Names (ARNs), as well as the routing control
 * 			state for each routing control, along with the control panel name and control panel ARN for the routing controls.
 * 			If you specify a control panel ARN, this call lists the routing controls in the control panel. Otherwise, it lists
 * 			all the routing controls in the cluster.</p>
 * 		       <p>A routing control is a simple on/off switch in Route 53 ARC that you
 * 			can use to route traffic to cells. When a routing control state is On, traffic flows to a cell. When
 * 			the state is Off, traffic does not flow.</p>
 * 		       <p>Before you can create a routing control, you must first create a cluster, and then host the control
 * 			in a control panel on the cluster. For more information, see <a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.create.html">
 * 				Create routing control structures</a> in the Amazon Route 53 Application Recovery Controller Developer Guide.
 * 			You access one of the endpoints for the cluster to get or update the routing control state to
 * 			redirect traffic for your application. </p>
 * 		       <p>
 *             <i>You must specify Regional endpoints when you work with API cluster operations
 * 			to use this API operation to list routing controls in Route 53 ARC.</i>
 *          </p>
 * 		       <p>Learn more about working with routing controls in the following topics in the
 * 			Amazon Route 53 Application Recovery Controller Developer Guide:</p>
 * 		       <ul>
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
 * const client = new Route53RecoveryClusterClient(config);
 * const command = new ListRoutingControlsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoutingControlsCommandInput} for command's `input` shape.
 * @see {@link ListRoutingControlsCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryClusterClientResolvedConfig | config} for Route53RecoveryClusterClient's `config` shape.
 *
 */
export class ListRoutingControlsCommand extends $Command<
  ListRoutingControlsCommandInput,
  ListRoutingControlsCommandOutput,
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

  constructor(readonly input: ListRoutingControlsCommandInput) {
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
  ): Handler<ListRoutingControlsCommandInput, ListRoutingControlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRoutingControlsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryClusterClient";
    const commandName = "ListRoutingControlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRoutingControlsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRoutingControlsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRoutingControlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListRoutingControlsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRoutingControlsCommandOutput> {
    return deserializeAws_json1_0ListRoutingControlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
