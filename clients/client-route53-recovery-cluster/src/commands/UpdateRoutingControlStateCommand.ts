import {
  Route53RecoveryClusterClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryClusterClient";
import { UpdateRoutingControlStateRequest, UpdateRoutingControlStateResponse } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateRoutingControlStateCommand,
  serializeAws_json1_0UpdateRoutingControlStateCommand,
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

export interface UpdateRoutingControlStateCommandInput extends UpdateRoutingControlStateRequest {}
export interface UpdateRoutingControlStateCommandOutput extends UpdateRoutingControlStateResponse, __MetadataBearer {}

/**
 * <p>Set the state of the routing control to reroute traffic. You can set the value to be On or Off.
 * 				When the state is On, traffic flows to a cell. When it's off, traffic does not flow.</p>
 * 			      <p>For more information about working with routing controls, see
 * 				<a href="https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.html">Routing control</a>
 * 				in the Route 53 Application Recovery Controller Developer Guide.</p>
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
 * @see {@link Route53RecoveryClusterClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateRoutingControlStateCommand extends $Command<
  UpdateRoutingControlStateCommandInput,
  UpdateRoutingControlStateCommandOutput,
  Route53RecoveryClusterClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryClusterClient";
    const commandName = "UpdateRoutingControlStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRoutingControlStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRoutingControlStateResponse.filterSensitiveLog,
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
