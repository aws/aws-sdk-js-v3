import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import { DescribeRoutingControlRequest, DescribeRoutingControlResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeRoutingControlCommand,
  serializeAws_restJson1DescribeRoutingControlCommand,
} from "../protocols/Aws_restJson1";
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

export interface DescribeRoutingControlCommandInput extends DescribeRoutingControlRequest {}
export interface DescribeRoutingControlCommandOutput extends DescribeRoutingControlResponse, __MetadataBearer {}

/**
 * <p>Displays details about a routing control. A routing control has one of two states: ON and OFF. You can map the routing control state to the state of an Amazon Route 53 health check, which can be used to control routing.</p> <p>To get or update the routing control state, see the Recovery Cluster (data plane) API actions for Amazon Route 53 Application Recovery Controller.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, DescribeRoutingControlCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, DescribeRoutingControlCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const command = new DescribeRoutingControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRoutingControlCommandInput} for command's `input` shape.
 * @see {@link DescribeRoutingControlCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeRoutingControlCommand extends $Command<
  DescribeRoutingControlCommandInput,
  DescribeRoutingControlCommandOutput,
  Route53RecoveryControlConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRoutingControlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryControlConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRoutingControlCommandInput, DescribeRoutingControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "DescribeRoutingControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRoutingControlRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRoutingControlResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRoutingControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeRoutingControlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRoutingControlCommandOutput> {
    return deserializeAws_restJson1DescribeRoutingControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
