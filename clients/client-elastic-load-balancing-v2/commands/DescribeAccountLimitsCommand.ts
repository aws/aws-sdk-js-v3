import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { DescribeAccountLimitsInput, DescribeAccountLimitsOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeAccountLimitsCommand,
  serializeAws_queryDescribeAccountLimitsCommand,
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

export type DescribeAccountLimitsCommandInput = DescribeAccountLimitsInput;
export type DescribeAccountLimitsCommandOutput = DescribeAccountLimitsOutput & __MetadataBearer;

/**
 * <p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p>
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class DescribeAccountLimitsCommand extends $Command<
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAccountLimitsCommandInput) {
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
  ): Handler<DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "DescribeAccountLimitsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountLimitsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountLimitsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAccountLimitsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccountLimitsCommandOutput> {
    return deserializeAws_queryDescribeAccountLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
