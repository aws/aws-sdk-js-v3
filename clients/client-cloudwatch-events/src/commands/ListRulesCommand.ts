import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ListRulesRequest, ListRulesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListRulesCommand, serializeAws_json1_1ListRulesCommand } from "../protocols/Aws_json1_1";
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

export interface ListRulesCommandInput extends ListRulesRequest {}
export interface ListRulesCommandOutput extends ListRulesResponse, __MetadataBearer {}

/**
 * <p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide
 *       a prefix to match to the rule names.</p>
 *
 *          <p>ListRules does not list the targets of a rule. To see the targets associated with a rule,
 *       use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListRulesCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListRulesCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new ListRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRulesCommandInput} for command's `input` shape.
 * @see {@link ListRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListRulesCommand extends $Command<
  ListRulesCommandInput,
  ListRulesCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRulesCommandInput) {
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
  ): Handler<ListRulesCommandInput, ListRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "ListRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListRulesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRulesCommandOutput> {
    return deserializeAws_json1_1ListRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
