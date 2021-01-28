import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { ModifyTargetGroupAttributesInput, ModifyTargetGroupAttributesOutput } from "../models/models_0";
import {
  deserializeAws_queryModifyTargetGroupAttributesCommand,
  serializeAws_queryModifyTargetGroupAttributesCommand,
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

export type ModifyTargetGroupAttributesCommandInput = ModifyTargetGroupAttributesInput;
export type ModifyTargetGroupAttributesCommandOutput = ModifyTargetGroupAttributesOutput & __MetadataBearer;

/**
 * <p>Modifies the specified attributes of the specified target group.</p>
 */
export class ModifyTargetGroupAttributesCommand extends $Command<
  ModifyTargetGroupAttributesCommandInput,
  ModifyTargetGroupAttributesCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyTargetGroupAttributesCommandInput) {
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
  ): Handler<ModifyTargetGroupAttributesCommandInput, ModifyTargetGroupAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "ModifyTargetGroupAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTargetGroupAttributesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyTargetGroupAttributesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyTargetGroupAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyTargetGroupAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTargetGroupAttributesCommandOutput> {
    return deserializeAws_queryModifyTargetGroupAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
