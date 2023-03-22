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
  ListSubscriptionsByTopicInput,
  ListSubscriptionsByTopicInputFilterSensitiveLog,
  ListSubscriptionsByTopicResponse,
  ListSubscriptionsByTopicResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListSubscriptionsByTopicCommand,
  serializeAws_queryListSubscriptionsByTopicCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 *
 * The input for {@link ListSubscriptionsByTopicCommand}.
 */
export interface ListSubscriptionsByTopicCommandInput extends ListSubscriptionsByTopicInput {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionsByTopicCommand}.
 */
export interface ListSubscriptionsByTopicCommandOutput extends ListSubscriptionsByTopicResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of the subscriptions to a specific topic. Each call returns a limited
 *             list of subscriptions, up to 100. If there are more subscriptions, a
 *                 <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in
 *             a new <code>ListSubscriptionsByTopic</code> call to get further results.</p>
 *          <p>This action is throttled at 30 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListSubscriptionsByTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListSubscriptionsByTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListSubscriptionsByTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListSubscriptionsByTopicCommandInput - {@link ListSubscriptionsByTopicCommandInput}
 * @returns {@link ListSubscriptionsByTopicCommandOutput}
 * @see {@link ListSubscriptionsByTopicCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsByTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 *
 */
export class ListSubscriptionsByTopicCommand extends $Command<
  ListSubscriptionsByTopicCommandInput,
  ListSubscriptionsByTopicCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListSubscriptionsByTopicCommandInput) {
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
  ): Handler<ListSubscriptionsByTopicCommandInput, ListSubscriptionsByTopicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSubscriptionsByTopicCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ListSubscriptionsByTopicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSubscriptionsByTopicInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListSubscriptionsByTopicResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListSubscriptionsByTopicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListSubscriptionsByTopicCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSubscriptionsByTopicCommandOutput> {
    return deserializeAws_queryListSubscriptionsByTopicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
