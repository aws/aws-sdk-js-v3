// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListEventSubscriptionsRequest, ListEventSubscriptionsResponse } from "../models/models_0";
import { de_ListEventSubscriptionsCommand, se_ListEventSubscriptionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEventSubscriptionsCommand}.
 */
export interface ListEventSubscriptionsCommandInput extends ListEventSubscriptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventSubscriptionsCommand}.
 */
export interface ListEventSubscriptionsCommandOutput extends ListEventSubscriptionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the event subscriptions for the assessment template that is specified by
 *          the ARN of the assessment template. For more information, see <a>SubscribeToEvent</a> and <a>UnsubscribeFromEvent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListEventSubscriptionsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListEventSubscriptionsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // ListEventSubscriptionsRequest
 *   resourceArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventSubscriptionsResponse
 * //   subscriptions: [ // SubscriptionList // required
 * //     { // Subscription
 * //       resourceArn: "STRING_VALUE", // required
 * //       topicArn: "STRING_VALUE", // required
 * //       eventSubscriptions: [ // EventSubscriptionList // required
 * //         { // EventSubscription
 * //           event: "STRING_VALUE", // required
 * //           subscribedAt: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventSubscriptionsCommandInput - {@link ListEventSubscriptionsCommandInput}
 * @returns {@link ListEventSubscriptionsCommandOutput}
 * @see {@link ListEventSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListEventSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example List event subscriptions
 * ```javascript
 * // Lists all the event subscriptions for the assessment template that is specified by the ARN of the assessment template.
 * const input = {
 *   "maxResults": 123,
 *   "resourceArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-7sbz2Kz0"
 * };
 * const command = new ListEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "nextToken": "1",
 *   "subscriptions": [
 *     {
 *       "eventSubscriptions": [
 *         {
 *           "event": "ASSESSMENT_RUN_COMPLETED",
 *           "subscribedAt": "1459455440.867"
 *         }
 *       ],
 *       "resourceArn": "arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-7sbz2Kz0",
 *       "topicArn": "arn:aws:sns:us-west-2:123456789012:exampletopic"
 *     }
 *   ]
 * }
 * *\/
 * // example id: list-event-subscriptions-1481068376945
 * ```
 *
 */
export class ListEventSubscriptionsCommand extends $Command<
  ListEventSubscriptionsCommandInput,
  ListEventSubscriptionsCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: ListEventSubscriptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventSubscriptionsCommandInput, ListEventSubscriptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEventSubscriptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "ListEventSubscriptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListEventSubscriptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEventSubscriptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventSubscriptionsCommandOutput> {
    return de_ListEventSubscriptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
