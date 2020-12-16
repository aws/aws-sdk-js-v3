import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { SetSubnetsInput, SetSubnetsOutput } from "../models/models_0";
import { deserializeAws_querySetSubnetsCommand, serializeAws_querySetSubnetsCommand } from "../protocols/Aws_query";
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

export type SetSubnetsCommandInput = SetSubnetsInput;
export type SetSubnetsCommandOutput = SetSubnetsOutput & __MetadataBearer;

/**
 * <p>Enables the Availability Zones for the specified public subnets for the specified
 *       Application Load Balancer or Network Load Balancer. The specified subnets replace the
 *       previously enabled subnets.</p>
 *          <p>When you specify subnets for a Network Load Balancer, you must include all
 *       subnets that were enabled previously, with their existing configurations, plus any
 *       additional subnets.</p>
 */
export class SetSubnetsCommand extends $Command<
  SetSubnetsCommandInput,
  SetSubnetsCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetSubnetsCommandInput) {
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
  ): Handler<SetSubnetsCommandInput, SetSubnetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "SetSubnetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetSubnetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetSubnetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetSubnetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetSubnetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetSubnetsCommandOutput> {
    return deserializeAws_querySetSubnetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
