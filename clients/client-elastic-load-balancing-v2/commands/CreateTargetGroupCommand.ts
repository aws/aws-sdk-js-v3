import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { CreateTargetGroupInput, CreateTargetGroupOutput } from "../models/models_0";
import {
  deserializeAws_queryCreateTargetGroupCommand,
  serializeAws_queryCreateTargetGroupCommand,
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

export type CreateTargetGroupCommandInput = CreateTargetGroupInput;
export type CreateTargetGroupCommandOutput = CreateTargetGroupOutput & __MetadataBearer;

/**
 * <p>Creates a target group.</p>
 *
 *
 *
 *          <p>For more information, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 *          <p>This operation is idempotent, which means that it completes at most one time. If you
 *       attempt to create multiple target groups with the same settings, each call succeeds.</p>
 */
export class CreateTargetGroupCommand extends $Command<
  CreateTargetGroupCommandInput,
  CreateTargetGroupCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTargetGroupCommandInput) {
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
  ): Handler<CreateTargetGroupCommandInput, CreateTargetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "CreateTargetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTargetGroupInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTargetGroupOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTargetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateTargetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTargetGroupCommandOutput> {
    return deserializeAws_queryCreateTargetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
