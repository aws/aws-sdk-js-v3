import {
  ElasticLoadBalancingv2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingv2Client";
import { ModifyLoadBalancerAttributesInput, ModifyLoadBalancerAttributesOutput } from "../models/index";
import {
  deserializeAws_queryModifyLoadBalancerAttributesCommand,
  serializeAws_queryModifyLoadBalancerAttributesCommand,
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

export type ModifyLoadBalancerAttributesCommandInput = ModifyLoadBalancerAttributesInput;
export type ModifyLoadBalancerAttributesCommandOutput = ModifyLoadBalancerAttributesOutput & __MetadataBearer;

export class ModifyLoadBalancerAttributesCommand extends $Command<
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
  ElasticLoadBalancingv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyLoadBalancerAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyLoadBalancerAttributesCommandInput, ModifyLoadBalancerAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyLoadBalancerAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyLoadBalancerAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyLoadBalancerAttributesCommandOutput> {
    return deserializeAws_queryModifyLoadBalancerAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
