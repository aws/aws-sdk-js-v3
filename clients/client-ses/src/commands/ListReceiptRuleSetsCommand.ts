import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListReceiptRuleSetsRequest, ListReceiptRuleSetsResponse } from "../models/models_0";
import {
  deserializeAws_queryListReceiptRuleSetsCommand,
  serializeAws_queryListReceiptRuleSetsCommand,
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

export interface ListReceiptRuleSetsCommandInput extends ListReceiptRuleSetsRequest {}
export interface ListReceiptRuleSetsCommandOutput extends ListReceiptRuleSetsResponse, __MetadataBearer {}

/**
 * <p>Lists the receipt rule sets that exist under your AWS account in the current AWS
 *             Region. If there are additional receipt rule sets to be retrieved, you will receive a
 *                 <code>NextToken</code> that you can provide to the next call to
 *                 <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p>
 *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListReceiptRuleSetsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListReceiptRuleSetsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new ListReceiptRuleSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReceiptRuleSetsCommandInput} for command's `input` shape.
 * @see {@link ListReceiptRuleSetsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListReceiptRuleSetsCommand extends $Command<
  ListReceiptRuleSetsCommandInput,
  ListReceiptRuleSetsCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReceiptRuleSetsCommandInput) {
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
  ): Handler<ListReceiptRuleSetsCommandInput, ListReceiptRuleSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListReceiptRuleSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReceiptRuleSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReceiptRuleSetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReceiptRuleSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListReceiptRuleSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReceiptRuleSetsCommandOutput> {
    return deserializeAws_queryListReceiptRuleSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
