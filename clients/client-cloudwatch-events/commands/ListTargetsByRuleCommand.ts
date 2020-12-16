import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ListTargetsByRuleRequest, ListTargetsByRuleResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTargetsByRuleCommand,
  serializeAws_json1_1ListTargetsByRuleCommand,
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

export type ListTargetsByRuleCommandInput = ListTargetsByRuleRequest;
export type ListTargetsByRuleCommandOutput = ListTargetsByRuleResponse & __MetadataBearer;

/**
 * <p>Lists the targets assigned to the specified rule.</p>
 */
export class ListTargetsByRuleCommand extends $Command<
  ListTargetsByRuleCommandInput,
  ListTargetsByRuleCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTargetsByRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "ListTargetsByRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTargetsByRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTargetsByRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTargetsByRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTargetsByRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTargetsByRuleCommandOutput> {
    return deserializeAws_json1_1ListTargetsByRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
