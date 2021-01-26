import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeCasesRequest, DescribeCasesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCasesCommand,
  serializeAws_json1_1DescribeCasesCommand,
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

export type DescribeCasesCommandInput = DescribeCasesRequest;
export type DescribeCasesCommandOutput = DescribeCasesResponse & __MetadataBearer;

/**
 * <p>Returns a list of cases that you specify by passing one or more case IDs. You can use
 *             the <code>afterTime</code> and <code>beforeTime</code> parameters to filter the cases by
 *             date. You can set values for the <code>includeResolvedCases</code> and
 *                 <code>includeCommunications</code> parameters to specify how much information to
 *             return.</p>
 *         <p>The response returns the following in JSON format:</p>
 *         <ul>
 *             <li>
 *                 <p>One or more <a href="https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html">CaseDetails</a> data types.</p>
 *             </li>
 *             <li>
 *                 <p>One or more <code>nextToken</code> values, which specify where to paginate the
 *                     returned records represented by the <code>CaseDetails</code> objects.</p>
 *             </li>
 *          </ul>
 *         <p>Case data is available for 12 months after creation. If a case was created more than
 *             12 months ago, a request might return an error.</p>
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
export class DescribeCasesCommand extends $Command<
  DescribeCasesCommandInput,
  DescribeCasesCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCasesCommandInput) {
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
  ): Handler<DescribeCasesCommandInput, DescribeCasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeCasesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCasesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCasesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeCasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCasesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeCasesCommandOutput> {
    return deserializeAws_json1_1DescribeCasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
