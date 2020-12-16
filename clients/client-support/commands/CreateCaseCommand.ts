import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { CreateCaseRequest, CreateCaseResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateCaseCommand,
  serializeAws_json1_1CreateCaseCommand,
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

export type CreateCaseCommandInput = CreateCaseRequest;
export type CreateCaseCommandOutput = CreateCaseResponse & __MetadataBearer;

/**
 * <p>Creates a case in the AWS Support Center. This operation is similar to how you create a case
 *             in the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create
 *                 Case</a> page.</p>
 *         <p>The AWS Support API doesn't support requesting service limit increases. You can submit a
 *             service limit increase in the following ways: </p>
 *         <ul>
 *             <li>
 *                 <p>Submit a request from the AWS Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
 *             </li>
 *             <li>
 *                 <p>Use the Service Quotas <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html">RequestServiceQuotaIncrease</a> operation.</p>
 *             </li>
 *          </ul>
 *         <p>A successful <code>CreateCase</code> request returns an AWS Support case number. You can use
 *             the <a>DescribeCases</a> operation and specify the case number to get
 *             existing AWS Support cases. After you create a case, use the <a>AddCommunicationToCase</a> operation to add additional communication or
 *             attachments to an existing case.</p>
 *         <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in
 *             the <a href="https://console.aws.amazon.com/support">AWS Support Center</a>. Use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p>
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
export class CreateCaseCommand extends $Command<
  CreateCaseCommandInput,
  CreateCaseCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCaseCommandInput) {
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
  ): Handler<CreateCaseCommandInput, CreateCaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "CreateCaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCaseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCaseCommandOutput> {
    return deserializeAws_json1_1CreateCaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
