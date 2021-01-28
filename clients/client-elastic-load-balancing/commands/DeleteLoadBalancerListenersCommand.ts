import {
  ElasticLoadBalancingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingClient";
import { DeleteLoadBalancerListenerInput, DeleteLoadBalancerListenerOutput } from "../models/models_0";
import {
  deserializeAws_queryDeleteLoadBalancerListenersCommand,
  serializeAws_queryDeleteLoadBalancerListenersCommand,
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

export type DeleteLoadBalancerListenersCommandInput = DeleteLoadBalancerListenerInput;
export type DeleteLoadBalancerListenersCommandOutput = DeleteLoadBalancerListenerOutput & __MetadataBearer;

/**
 * <p>Deletes the specified listeners from the specified load balancer.</p>
 */
export class DeleteLoadBalancerListenersCommand extends $Command<
  DeleteLoadBalancerListenersCommandInput,
  DeleteLoadBalancerListenersCommandOutput,
  ElasticLoadBalancingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLoadBalancerListenersCommandInput) {
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
  ): Handler<DeleteLoadBalancerListenersCommandInput, DeleteLoadBalancerListenersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingClient";
    const commandName = "DeleteLoadBalancerListenersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLoadBalancerListenerInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLoadBalancerListenerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLoadBalancerListenersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteLoadBalancerListenersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteLoadBalancerListenersCommandOutput> {
    return deserializeAws_queryDeleteLoadBalancerListenersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
