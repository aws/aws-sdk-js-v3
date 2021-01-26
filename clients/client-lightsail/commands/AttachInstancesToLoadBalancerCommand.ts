import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachInstancesToLoadBalancerRequest, AttachInstancesToLoadBalancerResult } from "../models/models_0";
import {
  deserializeAws_json1_1AttachInstancesToLoadBalancerCommand,
  serializeAws_json1_1AttachInstancesToLoadBalancerCommand,
} from "../protocols/Aws_json1_1";
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

export type AttachInstancesToLoadBalancerCommandInput = AttachInstancesToLoadBalancerRequest;
export type AttachInstancesToLoadBalancerCommandOutput = AttachInstancesToLoadBalancerResult & __MetadataBearer;

/**
 * <p>Attaches one or more Lightsail instances to a load balancer.</p>
 *          <p>After some time, the instances are attached to the load balancer and the health check
 *       status is available.</p>
 *          <p>The <code>attach instances to load balancer</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by <code>load balancer
 *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class AttachInstancesToLoadBalancerCommand extends $Command<
  AttachInstancesToLoadBalancerCommandInput,
  AttachInstancesToLoadBalancerCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AttachInstancesToLoadBalancerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AttachInstancesToLoadBalancerCommandInput, AttachInstancesToLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "AttachInstancesToLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachInstancesToLoadBalancerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AttachInstancesToLoadBalancerResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachInstancesToLoadBalancerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AttachInstancesToLoadBalancerCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AttachInstancesToLoadBalancerCommandOutput> {
    return deserializeAws_json1_1AttachInstancesToLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
