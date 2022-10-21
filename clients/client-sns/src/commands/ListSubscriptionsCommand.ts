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

import {
  ListSubscriptionsInput,
  ListSubscriptionsInputFilterSensitiveLog,
  ListSubscriptionsResponse,
  ListSubscriptionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListSubscriptionsCommand,
  serializeAws_queryListSubscriptionsCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface ListSubscriptionsCommandInput extends ListSubscriptionsInput {}
export interface ListSubscriptionsCommandOutput extends ListSubscriptionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the requester's subscriptions. Each call returns a limited list of
 *             subscriptions, up to 100. If there are more subscriptions, a <code>NextToken</code> is
 *             also returned. Use the <code>NextToken</code> parameter in a new
 *                 <code>ListSubscriptions</code> call to get further results.</p>
 *         <p>This action is throttled at 30 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListSubscriptionsCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListSubscriptionsCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class ListSubscriptionsCommand extends $Command<
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
  SNSClientResolvedConfig
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

  constructor(readonly input: ListSubscriptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSubscriptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ListSubscriptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSubscriptionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListSubscriptionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSubscriptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListSubscriptionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSubscriptionsCommandOutput> {
    return deserializeAws_queryListSubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
