import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetActiveReceiptRuleSetRequest, SetActiveReceiptRuleSetResponse } from "../models/models_0";
import {
  deserializeAws_querySetActiveReceiptRuleSetCommand,
  serializeAws_querySetActiveReceiptRuleSetCommand,
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

export type SetActiveReceiptRuleSetCommandInput = SetActiveReceiptRuleSetRequest;
export type SetActiveReceiptRuleSetCommandOutput = SetActiveReceiptRuleSetResponse & __MetadataBearer;

/**
 * <p>Sets the specified receipt rule set as the active receipt rule set.</p>
 *         <note>
 *             <p>To disable your email-receiving through Amazon SES completely, you can call this API
 *                 with RuleSetName set to null.</p>
 *         </note>
 *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 */
export class SetActiveReceiptRuleSetCommand extends $Command<
  SetActiveReceiptRuleSetCommandInput,
  SetActiveReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetActiveReceiptRuleSetCommandInput) {
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
  ): Handler<SetActiveReceiptRuleSetCommandInput, SetActiveReceiptRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "SetActiveReceiptRuleSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetActiveReceiptRuleSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SetActiveReceiptRuleSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetActiveReceiptRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetActiveReceiptRuleSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetActiveReceiptRuleSetCommandOutput> {
    return deserializeAws_querySetActiveReceiptRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
