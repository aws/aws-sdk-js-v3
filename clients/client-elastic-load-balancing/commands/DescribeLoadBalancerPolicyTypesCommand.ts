import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { DescribeLoadBalancerPolicyTypesInput, DescribeLoadBalancerPolicyTypesOutput } from "../models/models_0";
import {
  deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand,
  serializeAws_queryDescribeLoadBalancerPolicyTypesCommand,
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

export type DescribeLoadBalancerPolicyTypesCommandInput = DescribeLoadBalancerPolicyTypesInput;
export type DescribeLoadBalancerPolicyTypesCommandOutput = DescribeLoadBalancerPolicyTypesOutput & __MetadataBearer;

/**
 * <p>Describes the specified load balancer policy types or all load balancer policy types.</p>
 *          <p>The description of each type indicates how it can be used. For example,
 *            some policies can be used only with layer 7 listeners,
 *            some policies can be used only with layer 4 listeners,
 *            and some policies can be used only with your EC2 instances.</p>
 *          <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types.
 *            Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or
 *            <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>
 */
export class DescribeLoadBalancerPolicyTypesCommand extends $Command<
  DescribeLoadBalancerPolicyTypesCommandInput,
  DescribeLoadBalancerPolicyTypesCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLoadBalancerPolicyTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLoadBalancerPolicyTypesCommandInput, DescribeLoadBalancerPolicyTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DescribeLoadBalancerPolicyTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLoadBalancerPolicyTypesInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLoadBalancerPolicyTypesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeLoadBalancerPolicyTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeLoadBalancerPolicyTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLoadBalancerPolicyTypesCommandOutput> {
    return deserializeAws_queryDescribeLoadBalancerPolicyTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
