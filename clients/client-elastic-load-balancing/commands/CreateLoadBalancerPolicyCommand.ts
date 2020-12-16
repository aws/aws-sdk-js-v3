import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { CreateLoadBalancerPolicyInput, CreateLoadBalancerPolicyOutput } from "../models/models_0";
import {
  deserializeAws_queryCreateLoadBalancerPolicyCommand,
  serializeAws_queryCreateLoadBalancerPolicyCommand,
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

export type CreateLoadBalancerPolicyCommandInput = CreateLoadBalancerPolicyInput;
export type CreateLoadBalancerPolicyCommandOutput = CreateLoadBalancerPolicyOutput & __MetadataBearer;

/**
 * <p>Creates a policy with the specified attributes for the specified load balancer.</p>
 *          <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>
 */
export class CreateLoadBalancerPolicyCommand extends $Command<
  CreateLoadBalancerPolicyCommandInput,
  CreateLoadBalancerPolicyCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLoadBalancerPolicyCommandInput) {
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
  ): Handler<CreateLoadBalancerPolicyCommandInput, CreateLoadBalancerPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "CreateLoadBalancerPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLoadBalancerPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateLoadBalancerPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLoadBalancerPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateLoadBalancerPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLoadBalancerPolicyCommandOutput> {
    return deserializeAws_queryCreateLoadBalancerPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
