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

import { UnsubscribeInput } from "../models/models_0";
import { de_UnsubscribeCommand, se_UnsubscribeCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UnsubscribeCommand}.
 */
export interface UnsubscribeCommandInput extends UnsubscribeInput {}
/**
 * @public
 *
 * The output of {@link UnsubscribeCommand}.
 */
export interface UnsubscribeCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a subscription. If the subscription requires authentication for deletion, only
 *             the owner of the subscription or the topic's owner can unsubscribe, and an Amazon Web Services
 *             signature is required. If the <code>Unsubscribe</code> call does not require
 *             authentication and the requester is not the subscription owner, a final cancellation
 *             message is delivered to the endpoint, so that the endpoint owner can easily resubscribe
 *             to the topic if the <code>Unsubscribe</code> request was unintended.</p>
 *          <note>
 *             <p>Amazon SQS queue subscriptions require authentication for deletion. Only the owner of
 *                 the subscription, or the owner of the topic can unsubscribe using the required Amazon Web Services
 *                 signature.</p>
 *          </note>
 *          <p>This action is throttled at 100 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, UnsubscribeCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, UnsubscribeCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // UnsubscribeInput
 *   SubscriptionArn: "STRING_VALUE", // required
 * };
 * const command = new UnsubscribeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnsubscribeCommandInput - {@link UnsubscribeCommandInput}
 * @returns {@link UnsubscribeCommandOutput}
 * @see {@link UnsubscribeCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidSecurityException} (client fault)
 *  <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 */
export class UnsubscribeCommand extends $Command<
  UnsubscribeCommandInput,
  UnsubscribeCommandOutput,
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
  constructor(readonly input: UnsubscribeCommandInput) {
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
  ): Handler<UnsubscribeCommandInput, UnsubscribeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UnsubscribeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "UnsubscribeCommand";
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
  private serialize(input: UnsubscribeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UnsubscribeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnsubscribeCommandOutput> {
    return de_UnsubscribeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
