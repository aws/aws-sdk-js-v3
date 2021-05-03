import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeLoadBalancersRequest, DescribeLoadBalancersResponse } from "../models/models_0";
import {
  deserializeAws_queryDescribeLoadBalancersCommand,
  serializeAws_queryDescribeLoadBalancersCommand,
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

export interface DescribeLoadBalancersCommandInput extends DescribeLoadBalancersRequest {}
export interface DescribeLoadBalancersCommandOutput extends DescribeLoadBalancersResponse, __MetadataBearer {}

/**
 * <p>Describes the load balancers for the specified Auto Scaling group.</p>
 *         <p>This operation describes only Classic Load Balancers. If you have Application Load
 *             Balancers, Network Load Balancers, or Gateway Load Balancers, use the <a>DescribeLoadBalancerTargetGroups</a> API instead.</p>
 * @example
 * User a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLoadBalancersCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLoadBalancersCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeLoadBalancersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DescribeLoadBalancersCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeLoadBalancersCommand extends $Command<
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLoadBalancersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLoadBalancersCommandInput, DescribeLoadBalancersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeLoadBalancersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLoadBalancersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLoadBalancersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLoadBalancersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLoadBalancersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLoadBalancersCommandOutput> {
    return deserializeAws_queryDescribeLoadBalancersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
