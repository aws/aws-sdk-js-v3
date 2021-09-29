import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { DeregisterTargetsInput, DeregisterTargetsOutput } from "../models/models_0";
import {
  deserializeAws_queryDeregisterTargetsCommand,
  serializeAws_queryDeregisterTargetsCommand,
} from "../protocols/Aws_query";
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

export interface DeregisterTargetsCommandInput extends DeregisterTargetsInput {}
export interface DeregisterTargetsCommandOutput extends DeregisterTargetsOutput, __MetadataBearer {}

/**
 * <p>Deregisters the specified targets from the specified target group. After the targets are
 *       deregistered, they no longer receive traffic from the load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeregisterTargetsCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeregisterTargetsCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * const client = new ElasticLoadBalancingV2Client(config);
 * const command = new DeregisterTargetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTargetsCommandInput} for command's `input` shape.
 * @see {@link DeregisterTargetsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeregisterTargetsCommand extends $Command<
  DeregisterTargetsCommandInput,
  DeregisterTargetsCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterTargetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterTargetsCommandInput, DeregisterTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "DeregisterTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterTargetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTargetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeregisterTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterTargetsCommandOutput> {
    return deserializeAws_queryDeregisterTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
