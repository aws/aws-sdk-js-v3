import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { CreateListenerInput, CreateListenerOutput } from "../models/models_0";
import {
  deserializeAws_queryCreateListenerCommand,
  serializeAws_queryCreateListenerCommand,
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

export type CreateListenerCommandInput = CreateListenerInput;
export type CreateListenerCommandOutput = CreateListenerOutput & __MetadataBearer;

/**
 * <p>Creates a listener for the specified Application Load Balancer, Network Load Balancer. or
 *       Gateway Load Balancer.</p>
 *
 *
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for
 *           your Application Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your
 *           Network Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your
 *           Gateway Load Balancers</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation is idempotent, which means that it completes at most one time. If you
 *       attempt to create multiple listeners with the same settings, each call succeeds.</p>
 */
export class CreateListenerCommand extends $Command<
  CreateListenerCommandInput,
  CreateListenerCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateListenerCommandInput) {
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
  ): Handler<CreateListenerCommandInput, CreateListenerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "CreateListenerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateListenerInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateListenerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateListenerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateListenerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateListenerCommandOutput> {
    return deserializeAws_queryCreateListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
