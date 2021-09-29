import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteReceiptFilterRequest, DeleteReceiptFilterResponse } from "../models/models_0";
import {
  deserializeAws_queryDeleteReceiptFilterCommand,
  serializeAws_queryDeleteReceiptFilterCommand,
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

export interface DeleteReceiptFilterCommandInput extends DeleteReceiptFilterRequest {}
export interface DeleteReceiptFilterCommandOutput extends DeleteReceiptFilterResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified IP address filter.</p>
 *         <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-ip-filters.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteReceiptFilterCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteReceiptFilterCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new DeleteReceiptFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReceiptFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteReceiptFilterCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteReceiptFilterCommand extends $Command<
  DeleteReceiptFilterCommandInput,
  DeleteReceiptFilterCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteReceiptFilterCommandInput) {
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
  ): Handler<DeleteReceiptFilterCommandInput, DeleteReceiptFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "DeleteReceiptFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteReceiptFilterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteReceiptFilterResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteReceiptFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteReceiptFilterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteReceiptFilterCommandOutput> {
    return deserializeAws_queryDeleteReceiptFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
