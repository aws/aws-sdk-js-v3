import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { SendBonusRequest, SendBonusResponse } from "../models/models_0";
import { deserializeAws_json1_1SendBonusCommand, serializeAws_json1_1SendBonusCommand } from "../protocols/Aws_json1_1";
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

export type SendBonusCommandInput = SendBonusRequest;
export type SendBonusCommandOutput = SendBonusResponse & __MetadataBearer;

/**
 * <p>
 *             The
 *             <code>SendBonus</code>
 *             operation issues a payment of money from your account to a Worker.
 *             This payment happens separately from the reward you pay to the Worker
 *             when you approve the Worker's assignment. The SendBonus operation
 *             requires the Worker's ID and the assignment ID as parameters to
 *             initiate payment of the bonus. You must include a message that
 *             explains the reason for the bonus payment, as the Worker may not be
 *             expecting the payment. Amazon Mechanical Turk collects a fee for
 *             bonus payments, similar to the HIT listing fee. This operation fails
 *             if your account does not have enough funds to pay for both the bonus
 *             and the fees.
 *         </p>
 */
export class SendBonusCommand extends $Command<
  SendBonusCommandInput,
  SendBonusCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SendBonusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SendBonusCommandInput, SendBonusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "SendBonusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendBonusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SendBonusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SendBonusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SendBonusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SendBonusCommandOutput> {
    return deserializeAws_json1_1SendBonusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
