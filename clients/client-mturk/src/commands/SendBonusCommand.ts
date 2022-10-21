// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  SendBonusRequest,
  SendBonusRequestFilterSensitiveLog,
  SendBonusResponse,
  SendBonusResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { deserializeAws_json1_1SendBonusCommand, serializeAws_json1_1SendBonusCommand } from "../protocols/Aws_json1_1";

export interface SendBonusCommandInput extends SendBonusRequest {}
export interface SendBonusCommandOutput extends SendBonusResponse, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, SendBonusCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, SendBonusCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new SendBonusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SendBonusCommandInput} for command's `input` shape.
 * @see {@link SendBonusCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class SendBonusCommand extends $Command<
  SendBonusCommandInput,
  SendBonusCommandOutput,
  MTurkClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, SendBonusCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "SendBonusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SendBonusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SendBonusResponseFilterSensitiveLog,
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
