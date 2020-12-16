import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { AddAttachmentsToSetRequest, AddAttachmentsToSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AddAttachmentsToSetCommand,
  serializeAws_json1_1AddAttachmentsToSetCommand,
} from "../protocols/Aws_json1_1";
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

export type AddAttachmentsToSetCommandInput = AddAttachmentsToSetRequest;
export type AddAttachmentsToSetCommandOutput = AddAttachmentsToSetResponse & __MetadataBearer;

/**
 * <p>Adds one or more attachments to an attachment set. </p>
 *         <p>An attachment set is a temporary container for attachments that you add to a case or
 *             case communication. The set is available for 1 hour after it's created. The
 *                 <code>expiryTime</code> returned in the response is when the set expires. </p>
 *         <note>
 *             <ul>
 *                <li>
 *                     <p>You must have a Business or Enterprise support plan to use the AWS Support
 *                         API. </p>
 *                 </li>
 *                <li>
 *                     <p>If you call the AWS Support API from an account that does not have a
 *                         Business or Enterprise support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">AWS Support</a>.</p>
 *                 </li>
 *             </ul>
 *         </note>
 */
export class AddAttachmentsToSetCommand extends $Command<
  AddAttachmentsToSetCommandInput,
  AddAttachmentsToSetCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddAttachmentsToSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddAttachmentsToSetCommandInput, AddAttachmentsToSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "AddAttachmentsToSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddAttachmentsToSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddAttachmentsToSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddAttachmentsToSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddAttachmentsToSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddAttachmentsToSetCommandOutput> {
    return deserializeAws_json1_1AddAttachmentsToSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
