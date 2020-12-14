import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SubscribeInput, SubscribeResponse } from "../models/models_0";
import { deserializeAws_querySubscribeCommand, serializeAws_querySubscribeCommand } from "../protocols/Aws_query";
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

export type SubscribeCommandInput = SubscribeInput;
export type SubscribeCommandOutput = SubscribeResponse & __MetadataBearer;

/**
 * <p>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or
 *             if the endpoint and the topic are not in the same AWS account, the endpoint owner must
 *             run the <code>ConfirmSubscription</code> action to confirm the subscription.</p>
 *          <p>You call the <code>ConfirmSubscription</code> action with the token from the subscription response.
 *       Confirmation tokens are valid for three days.</p>
 *         <p>This action is throttled at 100 transactions per second (TPS).</p>
 */
export class SubscribeCommand extends $Command<SubscribeCommandInput, SubscribeCommandOutput, SNSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "SubscribeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubscribeInput.filterSensitiveLog,
      outputFilterSensitiveLog: SubscribeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubscribeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySubscribeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubscribeCommandOutput> {
    return deserializeAws_querySubscribeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
