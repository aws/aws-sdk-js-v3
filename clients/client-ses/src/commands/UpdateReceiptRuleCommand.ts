import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateReceiptRuleRequest, UpdateReceiptRuleResponse } from "../models/models_0";
import {
  deserializeAws_queryUpdateReceiptRuleCommand,
  serializeAws_queryUpdateReceiptRuleCommand,
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

export interface UpdateReceiptRuleCommandInput extends UpdateReceiptRuleRequest {}
export interface UpdateReceiptRuleCommandOutput extends UpdateReceiptRuleResponse, __MetadataBearer {}

/**
 * <p>Updates a receipt rule.</p>
 *         <p>For information about managing receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rules.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateReceiptRuleCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateReceiptRuleCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new UpdateReceiptRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateReceiptRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateReceiptRuleCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateReceiptRuleCommand extends $Command<
  UpdateReceiptRuleCommandInput,
  UpdateReceiptRuleCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateReceiptRuleCommandInput) {
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
  ): Handler<UpdateReceiptRuleCommandInput, UpdateReceiptRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "UpdateReceiptRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateReceiptRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateReceiptRuleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateReceiptRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateReceiptRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateReceiptRuleCommandOutput> {
    return deserializeAws_queryUpdateReceiptRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
