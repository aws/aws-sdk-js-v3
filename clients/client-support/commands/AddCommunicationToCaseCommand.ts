import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { AddCommunicationToCaseRequest, AddCommunicationToCaseResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AddCommunicationToCaseCommand,
  serializeAws_json1_1AddCommunicationToCaseCommand,
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

export type AddCommunicationToCaseCommandInput = AddCommunicationToCaseRequest;
export type AddCommunicationToCaseCommandOutput = AddCommunicationToCaseResponse & __MetadataBearer;

/**
 * <p>Adds additional customer communication to an AWS Support case. Use the <code>caseId</code>
 *             parameter to identify the case to which to add communication. You can list a set of
 *             email addresses to copy on the communication by using the <code>ccEmailAddresses</code>
 *             parameter. The <code>communicationBody</code> value contains the text of the
 *             communication.</p>
 *
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
export class AddCommunicationToCaseCommand extends $Command<
  AddCommunicationToCaseCommandInput,
  AddCommunicationToCaseCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddCommunicationToCaseCommandInput) {
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
  ): Handler<AddCommunicationToCaseCommandInput, AddCommunicationToCaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "AddCommunicationToCaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddCommunicationToCaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AddCommunicationToCaseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddCommunicationToCaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddCommunicationToCaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddCommunicationToCaseCommandOutput> {
    return deserializeAws_json1_1AddCommunicationToCaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
