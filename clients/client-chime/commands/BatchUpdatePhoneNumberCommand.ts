import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { BatchUpdatePhoneNumberRequest, BatchUpdatePhoneNumberResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchUpdatePhoneNumberCommand,
  serializeAws_restJson1BatchUpdatePhoneNumberCommand,
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

export interface BatchUpdatePhoneNumberCommandInput extends BatchUpdatePhoneNumberRequest {}
export interface BatchUpdatePhoneNumberCommandOutput extends BatchUpdatePhoneNumberResponse, __MetadataBearer {}

/**
 * <p>Updates phone number product types or calling names. You can update one attribute at a time for each
 *         <code>UpdatePhoneNumberRequestItem</code>. For example, you can update the product type or the calling name.</p>
 *
 *          <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For
 *             numbers outside the
 *             US,
 *             you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
 *
 *          <p>Updates to outbound calling names can take 72 hours to complete. Pending updates to outbound calling names must be complete before you
 *             can request another update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUpdatePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchUpdatePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new BatchUpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchUpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link BatchUpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchUpdatePhoneNumberCommand extends $Command<
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchUpdatePhoneNumberCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchUpdatePhoneNumberCommandInput, BatchUpdatePhoneNumberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "BatchUpdatePhoneNumberCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchUpdatePhoneNumberRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchUpdatePhoneNumberResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchUpdatePhoneNumberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchUpdatePhoneNumberCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchUpdatePhoneNumberCommandOutput> {
    return deserializeAws_restJson1BatchUpdatePhoneNumberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
