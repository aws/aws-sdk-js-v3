import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { UnsubscribeInput } from "../models/models_0";
import { deserializeAws_queryUnsubscribeCommand, serializeAws_queryUnsubscribeCommand } from "../protocols/Aws_query";
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

export type UnsubscribeCommandInput = UnsubscribeInput;
export type UnsubscribeCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a subscription. If the subscription requires authentication for deletion, only
 *             the owner of the subscription or the topic's owner can unsubscribe, and an AWS signature
 *             is required. If the <code>Unsubscribe</code> call does not require authentication and
 *             the requester is not the subscription owner, a final cancellation message is delivered
 *             to the endpoint, so that the endpoint owner can easily resubscribe to the topic if the
 *                 <code>Unsubscribe</code> request was unintended.</p>
 *         <p>This action is throttled at 100 transactions per second (TPS).</p>
 */
export class UnsubscribeCommand extends $Command<
  UnsubscribeCommandInput,
  UnsubscribeCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "UnsubscribeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnsubscribeInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnsubscribeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUnsubscribeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnsubscribeCommandOutput> {
    return deserializeAws_queryUnsubscribeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
