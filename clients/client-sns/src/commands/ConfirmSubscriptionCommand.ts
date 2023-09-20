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

import { ConfirmSubscriptionInput, ConfirmSubscriptionResponse } from "../models/models_0";
import { de_ConfirmSubscriptionCommand, se_ConfirmSubscriptionCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ConfirmSubscriptionCommand}.
 */
export interface ConfirmSubscriptionCommandInput extends ConfirmSubscriptionInput {}
/**
 * @public
 *
 * The output of {@link ConfirmSubscriptionCommand}.
 */
export interface ConfirmSubscriptionCommandOutput extends ConfirmSubscriptionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Verifies an endpoint owner's intent to receive messages by validating the token sent
 *             to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the
 *             action creates a new subscription and returns its Amazon Resource Name (ARN). This call
 *             requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is
 *             set to "true".</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ConfirmSubscriptionCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ConfirmSubscriptionCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // ConfirmSubscriptionInput
 *   TopicArn: "STRING_VALUE", // required
 *   Token: "STRING_VALUE", // required
 *   AuthenticateOnUnsubscribe: "STRING_VALUE",
 * };
 * const command = new ConfirmSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmSubscriptionResponse
 * //   SubscriptionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ConfirmSubscriptionCommandInput - {@link ConfirmSubscriptionCommandInput}
 * @returns {@link ConfirmSubscriptionCommandOutput}
 * @see {@link ConfirmSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ConfirmSubscriptionCommandOutput} for command's `response` shape.
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
export class ConfirmSubscriptionCommand extends $Command<
  ConfirmSubscriptionCommandInput,
  ConfirmSubscriptionCommandOutput,
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
  constructor(readonly input: ConfirmSubscriptionCommandInput) {
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
  ): Handler<ConfirmSubscriptionCommandInput, ConfirmSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfirmSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ConfirmSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSimpleNotificationService",
        operation: "ConfirmSubscription",
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
  private serialize(input: ConfirmSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ConfirmSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfirmSubscriptionCommandOutput> {
    return de_ConfirmSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
