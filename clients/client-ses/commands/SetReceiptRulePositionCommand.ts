import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetReceiptRulePositionRequest, SetReceiptRulePositionResponse } from "../models/models_0";
import {
  deserializeAws_querySetReceiptRulePositionCommand,
  serializeAws_querySetReceiptRulePositionCommand,
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

export type SetReceiptRulePositionCommandInput = SetReceiptRulePositionRequest;
export type SetReceiptRulePositionCommandOutput = SetReceiptRulePositionResponse & __MetadataBearer;

/**
 * <p>Sets the position of the specified receipt rule in the receipt rule set.</p>
 *         <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class SetReceiptRulePositionCommand extends $Command<
  SetReceiptRulePositionCommandInput,
  SetReceiptRulePositionCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetReceiptRulePositionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetReceiptRulePositionCommandInput, SetReceiptRulePositionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SetReceiptRulePositionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetReceiptRulePositionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetReceiptRulePositionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetReceiptRulePositionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetReceiptRulePositionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetReceiptRulePositionCommandOutput> {
    return deserializeAws_querySetReceiptRulePositionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
