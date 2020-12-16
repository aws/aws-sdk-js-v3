import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ConfirmSubscriptionInput, ConfirmSubscriptionResponse } from "../models/models_0";
import {
  deserializeAws_queryConfirmSubscriptionCommand,
  serializeAws_queryConfirmSubscriptionCommand,
} from "../protocols/Aws_query";
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

export type ConfirmSubscriptionCommandInput = ConfirmSubscriptionInput;
export type ConfirmSubscriptionCommandOutput = ConfirmSubscriptionResponse & __MetadataBearer;

/**
 * <p>Verifies an endpoint owner's intent to receive messages by validating the token sent
 *             to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the
 *             action creates a new subscription and returns its Amazon Resource Name (ARN). This call
 *             requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is
 *             set to "true".</p>
 */
export class ConfirmSubscriptionCommand extends $Command<
  ConfirmSubscriptionCommandInput,
  ConfirmSubscriptionCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ConfirmSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmSubscriptionInput.filterSensitiveLog,
      outputFilterSensitiveLog: ConfirmSubscriptionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfirmSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryConfirmSubscriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfirmSubscriptionCommandOutput> {
    return deserializeAws_queryConfirmSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
