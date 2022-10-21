// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import {
  ListRuleNamesByTargetRequest,
  ListRuleNamesByTargetRequestFilterSensitiveLog,
  ListRuleNamesByTargetResponse,
  ListRuleNamesByTargetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListRuleNamesByTargetCommand,
  serializeAws_json1_1ListRuleNamesByTargetCommand,
} from "../protocols/Aws_json1_1";

export interface ListRuleNamesByTargetCommandInput extends ListRuleNamesByTargetRequest {}
export interface ListRuleNamesByTargetCommandOutput extends ListRuleNamesByTargetResponse, __MetadataBearer {}

/**
 * <p>Lists the rules for the specified target. You can see which of the rules in Amazon
 *       EventBridge can invoke a specific target in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListRuleNamesByTargetCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListRuleNamesByTargetCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new ListRuleNamesByTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRuleNamesByTargetCommandInput} for command's `input` shape.
 * @see {@link ListRuleNamesByTargetCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 */
export class ListRuleNamesByTargetCommand extends $Command<
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput,
  CloudWatchEventsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRuleNamesByTargetCommandInput, ListRuleNamesByTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRuleNamesByTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "ListRuleNamesByTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRuleNamesByTargetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListRuleNamesByTargetResponseFilterSensitiveLog,
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
