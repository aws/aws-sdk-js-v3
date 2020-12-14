import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListRuleNamesByTargetRequest, ListRuleNamesByTargetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListRuleNamesByTargetCommand,
  serializeAws_json1_1ListRuleNamesByTargetCommand,
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

export type ListRuleNamesByTargetCommandInput = ListRuleNamesByTargetRequest;
export type ListRuleNamesByTargetCommandOutput = ListRuleNamesByTargetResponse & __MetadataBearer;

/**
 * <p>Lists the rules for the specified target. You can see which of the rules in Amazon
 *             EventBridge can invoke a specific target in your account.</p>
 */
export class ListRuleNamesByTargetCommand extends $Command<
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRuleNamesByTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRuleNamesByTargetCommandInput, ListRuleNamesByTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "ListRuleNamesByTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRuleNamesByTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRuleNamesByTargetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRuleNamesByTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRuleNamesByTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRuleNamesByTargetCommandOutput> {
    return deserializeAws_json1_1ListRuleNamesByTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
