import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateReceiptRuleSetRequest, CreateReceiptRuleSetResponse } from "../models/models_0";
import {
  deserializeAws_queryCreateReceiptRuleSetCommand,
  serializeAws_queryCreateReceiptRuleSetCommand,
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

export interface CreateReceiptRuleSetCommandInput extends CreateReceiptRuleSetRequest {}
export interface CreateReceiptRuleSetCommandOutput extends CreateReceiptRuleSetResponse, __MetadataBearer {}

/**
 * <p>Creates an empty receipt rule set.</p>
 *         <p>For information about setting up receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rule-set.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateReceiptRuleSetCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateReceiptRuleSetCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new CreateReceiptRuleSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReceiptRuleSetCommandInput} for command's `input` shape.
 * @see {@link CreateReceiptRuleSetCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateReceiptRuleSetCommand extends $Command<
  CreateReceiptRuleSetCommandInput,
  CreateReceiptRuleSetCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReceiptRuleSetCommandInput) {
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
  ): Handler<CreateReceiptRuleSetCommandInput, CreateReceiptRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "CreateReceiptRuleSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReceiptRuleSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReceiptRuleSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReceiptRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateReceiptRuleSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReceiptRuleSetCommandOutput> {
    return deserializeAws_queryCreateReceiptRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
