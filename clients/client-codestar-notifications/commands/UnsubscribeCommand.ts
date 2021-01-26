import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import { UnsubscribeRequest, UnsubscribeResult } from "../models/models_0";
import {
  deserializeAws_restJson1UnsubscribeCommand,
  serializeAws_restJson1UnsubscribeCommand,
} from "../protocols/Aws_restJson1";
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

export type UnsubscribeCommandInput = UnsubscribeRequest;
export type UnsubscribeCommandOutput = UnsubscribeResult & __MetadataBearer;

/**
 * <p>Removes an association between a notification rule and an Amazon SNS topic so that
 *             subscribers to that topic stop receiving notifications when the events described in the
 *             rule are triggered.</p>
 */
export class UnsubscribeCommand extends $Command<
  UnsubscribeCommandInput,
  UnsubscribeCommandOutput,
  CodestarNotificationsClientResolvedConfig
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
    configuration: CodestarNotificationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnsubscribeCommandInput, UnsubscribeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "UnsubscribeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnsubscribeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UnsubscribeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnsubscribeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnsubscribeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnsubscribeCommandOutput> {
    return deserializeAws_restJson1UnsubscribeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
