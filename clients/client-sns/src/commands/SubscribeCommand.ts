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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { SubscribeInput, SubscribeResponse } from "../models/models_0";
import { de_SubscribeCommand, se_SubscribeCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SubscribeCommand}.
 */
export interface SubscribeCommandInput extends SubscribeInput {}
/**
 * @public
 *
 * The output of {@link SubscribeCommand}.
 */
export interface SubscribeCommandOutput extends SubscribeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or
 *             if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must
 *             run the <code>ConfirmSubscription</code> action to confirm the subscription.</p>
 *          <p>You call the <code>ConfirmSubscription</code> action with the token from the
 *             subscription response. Confirmation tokens are valid for three days.</p>
 *          <p>This action is throttled at 100 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SubscribeCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SubscribeCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // SubscribeInput
 *   TopicArn: "STRING_VALUE", // required
 *   Protocol: "STRING_VALUE", // required
 *   Endpoint: "STRING_VALUE",
 *   Attributes: { // SubscriptionAttributesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ReturnSubscriptionArn: true || false,
 * };
 * const command = new SubscribeCommand(input);
 * const response = await client.send(command);
 * // { // SubscribeResponse
 * //   SubscriptionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SubscribeCommandInput - {@link SubscribeCommandInput}
 * @returns {@link SubscribeCommandOutput}
 * @see {@link SubscribeCommandInput} for command's `input` shape.
 * @see {@link SubscribeCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link FilterPolicyLimitExceededException} (client fault)
 *  <p>Indicates that the number of filter polices in your Amazon Web Services account exceeds the limit. To
 *             add more filter polices, submit an Amazon SNS Limit Increase case in the Amazon Web Services Support
 *             Center.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link InvalidSecurityException} (client fault)
 *  <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link SubscriptionLimitExceededException} (client fault)
 *  <p>Indicates that the customer already owns the maximum allowed number of
 *             subscriptions.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 */
export class SubscribeCommand extends $Command<SubscribeCommandInput, SubscribeCommandOutput, SNSClientResolvedConfig> {
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
  constructor(readonly input: SubscribeCommandInput) {
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
  ): Handler<SubscribeCommandInput, SubscribeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SubscribeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "SubscribeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSimpleNotificationService",
        operation: "Subscribe",
      },
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
  private serialize(input: SubscribeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SubscribeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubscribeCommandOutput> {
    return de_SubscribeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
