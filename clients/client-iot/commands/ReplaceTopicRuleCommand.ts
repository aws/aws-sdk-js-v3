import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ReplaceTopicRuleRequest } from "../models/models_1";
import {
  deserializeAws_restJson1ReplaceTopicRuleCommand,
  serializeAws_restJson1ReplaceTopicRuleCommand,
} from "../protocols/Aws_restJson1";
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

export type ReplaceTopicRuleCommandInput = ReplaceTopicRuleRequest;
export type ReplaceTopicRuleCommandOutput = __MetadataBearer;

/**
 * <p>Replaces the rule. You must specify all parameters for the new rule. Creating rules
 *          is an administrator-level action. Any user who has permission to create rules will be able
 *          to access data processed by the rule.</p>
 */
export class ReplaceTopicRuleCommand extends $Command<
  ReplaceTopicRuleCommandInput,
  ReplaceTopicRuleCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ReplaceTopicRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ReplaceTopicRuleCommandInput, ReplaceTopicRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ReplaceTopicRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReplaceTopicRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReplaceTopicRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ReplaceTopicRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReplaceTopicRuleCommandOutput> {
    return deserializeAws_restJson1ReplaceTopicRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
