import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { RegisterTargetsInput, RegisterTargetsOutput } from "../models/models_0";
import {
  deserializeAws_queryRegisterTargetsCommand,
  serializeAws_queryRegisterTargetsCommand,
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

export type RegisterTargetsCommandInput = RegisterTargetsInput;
export type RegisterTargetsCommandOutput = RegisterTargetsOutput & __MetadataBearer;

/**
 * <p>Registers the specified targets with the specified target group.</p>
 *
 *          <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p>
 *
 *          <p>By default, the load balancer routes requests to registered targets using the protocol
 *       and port for the target group. Alternatively, you can override the port for a target when you
 *       register it. You can register each EC2 instance or IP address with the same target group
 *       multiple times using different ports.</p>
 *
 *          <p>With a Network Load Balancer, you cannot register instances by instance ID if they have
 *       the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3,
 *       and T1. You can register instances of these types by IP address.</p>
 */
export class RegisterTargetsCommand extends $Command<
  RegisterTargetsCommandInput,
  RegisterTargetsCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterTargetsCommandInput) {
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
  ): Handler<RegisterTargetsCommandInput, RegisterTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "RegisterTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterTargetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterTargetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRegisterTargetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterTargetsCommandOutput> {
    return deserializeAws_queryRegisterTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
