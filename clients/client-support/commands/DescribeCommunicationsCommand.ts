import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeCommunicationsRequest, DescribeCommunicationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCommunicationsCommand,
  serializeAws_json1_1DescribeCommunicationsCommand,
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

export type DescribeCommunicationsCommandInput = DescribeCommunicationsRequest;
export type DescribeCommunicationsCommandOutput = DescribeCommunicationsResponse & __MetadataBearer;

/**
 * <p>Returns communications and attachments for one or more support cases. Use the
 *                 <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You
 *             can use the <code>caseId</code> parameter to restrict the results to a specific
 *             case.</p>
 *         <p>Case data is available for 12 months after creation. If a case was created more than
 *             12 months ago, a request for data might cause an error.</p>
 *         <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to
 *             control the pagination of the results. Set <code>maxResults</code> to the number of
 *             cases that you want to display on each page, and use <code>nextToken</code> to specify
 *             the resumption of pagination.</p>
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
export class DescribeCommunicationsCommand extends $Command<
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCommunicationsCommandInput) {
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
  ): Handler<DescribeCommunicationsCommandInput, DescribeCommunicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeCommunicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCommunicationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCommunicationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCommunicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCommunicationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCommunicationsCommandOutput> {
    return deserializeAws_json1_1DescribeCommunicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
