import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { DeleteLoadBalancerInput, DeleteLoadBalancerOutput } from "../models/models_0";
import {
  deserializeAws_queryDeleteLoadBalancerCommand,
  serializeAws_queryDeleteLoadBalancerCommand,
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

export type DeleteLoadBalancerCommandInput = DeleteLoadBalancerInput;
export type DeleteLoadBalancerCommandOutput = DeleteLoadBalancerOutput & __MetadataBearer;

/**
 * <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load
 *       Balancer. Deleting a load balancer also deletes its listeners.</p>
 *          <p>You can't delete a load balancer if deletion protection is enabled. If the load
 *       balancer does not exist or has already been deleted, the call succeeds.</p>
 *          <p>Deleting a load balancer does not affect its registered targets. For example, your EC2
 *       instances continue to run and are still registered to their target groups. If you no longer
 *       need these EC2 instances, you can stop or terminate them.</p>
 */
export class DeleteLoadBalancerCommand extends $Command<
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLoadBalancerCommandInput) {
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
  ): Handler<DeleteLoadBalancerCommandInput, DeleteLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "DeleteLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLoadBalancerInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLoadBalancerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLoadBalancerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteLoadBalancerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLoadBalancerCommandOutput> {
    return deserializeAws_queryDeleteLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
