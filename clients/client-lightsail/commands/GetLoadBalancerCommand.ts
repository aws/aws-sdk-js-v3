import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerRequest, GetLoadBalancerResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetLoadBalancerCommand,
  serializeAws_json1_1GetLoadBalancerCommand,
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

export type GetLoadBalancerCommandInput = GetLoadBalancerRequest;
export type GetLoadBalancerCommandOutput = GetLoadBalancerResult & __MetadataBearer;

/**
 * <p>Returns information about the specified Lightsail load balancer.</p>
 */
export class GetLoadBalancerCommand extends $Command<
  GetLoadBalancerCommandInput,
  GetLoadBalancerCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLoadBalancerCommandInput) {
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
  ): Handler<GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLoadBalancerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLoadBalancerResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLoadBalancerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLoadBalancerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLoadBalancerCommandOutput> {
    return deserializeAws_json1_1GetLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
