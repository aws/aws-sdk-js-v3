import {
  Route53RecoveryClusterClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryClusterClient";
import { GetRoutingControlStateRequest, GetRoutingControlStateResponse } from "../models/models_0";
import {
  deserializeAws_json1_0GetRoutingControlStateCommand,
  serializeAws_json1_0GetRoutingControlStateCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface GetRoutingControlStateCommandInput extends GetRoutingControlStateRequest {}
export interface GetRoutingControlStateCommandOutput extends GetRoutingControlStateResponse, __MetadataBearer {}

/**
 * <p>Get the state for a routing control. A routing control is a simple on/off switch
 * 				that you can use to route traffic to cells. When the state is On, traffic flows to a cell. When it's off, traffic does not flow. </p>
 * 			      <p>Before you can create a routing control, you first must create a cluster to host the control.
 * 				For more information, see
 * 				<a href="https://docs.aws.amazon.com/recovery-cluster/latest/api/cluster.html">CreateCluster</a>.
 * 				Access one of the endpoints for the cluster to get or update the routing control state to
 * 				redirect traffic.</p>
 * 			      <p>For more information about working with routing controls, see
 * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Routing control</a>
 * 				in the Route 53 Application Recovery Controller Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryClusterClient, GetRoutingControlStateCommand } from "@aws-sdk/client-route53-recovery-cluster"; // ES Modules import
 * // const { Route53RecoveryClusterClient, GetRoutingControlStateCommand } = require("@aws-sdk/client-route53-recovery-cluster"); // CommonJS import
 * const client = new Route53RecoveryClusterClient(config);
 * const command = new GetRoutingControlStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRoutingControlStateCommandInput} for command's `input` shape.
 * @see {@link GetRoutingControlStateCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryClusterClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetRoutingControlStateCommand extends $Command<
  GetRoutingControlStateCommandInput,
  GetRoutingControlStateCommandOutput,
  Route53RecoveryClusterClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRoutingControlStateCommandInput) {
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
  ): Handler<GetRoutingControlStateCommandInput, GetRoutingControlStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryClusterClient";
    const commandName = "GetRoutingControlStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRoutingControlStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRoutingControlStateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRoutingControlStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetRoutingControlStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRoutingControlStateCommandOutput> {
    return deserializeAws_json1_0GetRoutingControlStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
