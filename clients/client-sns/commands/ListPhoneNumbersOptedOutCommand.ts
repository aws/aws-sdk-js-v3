import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ListPhoneNumbersOptedOutInput, ListPhoneNumbersOptedOutResponse } from "../models/models_0";
import {
  deserializeAws_queryListPhoneNumbersOptedOutCommand,
  serializeAws_queryListPhoneNumbersOptedOutCommand,
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

export type ListPhoneNumbersOptedOutCommandInput = ListPhoneNumbersOptedOutInput;
export type ListPhoneNumbersOptedOutCommandOutput = ListPhoneNumbersOptedOutResponse & __MetadataBearer;

/**
 * <p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS
 *             messages to them.</p>
 *         <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page
 *             returns up to 100 phone numbers. If additional phone numbers are available after the
 *             first page of results, then a <code>NextToken</code> string will be returned. To receive
 *             the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the
 *                 <code>NextToken</code> string received from the previous call. When there are no
 *             more records to return, <code>NextToken</code> will be null.</p>
 */
export class ListPhoneNumbersOptedOutCommand extends $Command<
  ListPhoneNumbersOptedOutCommandInput,
  ListPhoneNumbersOptedOutCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPhoneNumbersOptedOutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPhoneNumbersOptedOutCommandInput, ListPhoneNumbersOptedOutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ListPhoneNumbersOptedOutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPhoneNumbersOptedOutInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListPhoneNumbersOptedOutResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPhoneNumbersOptedOutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListPhoneNumbersOptedOutCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPhoneNumbersOptedOutCommandOutput> {
    return deserializeAws_queryListPhoneNumbersOptedOutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
