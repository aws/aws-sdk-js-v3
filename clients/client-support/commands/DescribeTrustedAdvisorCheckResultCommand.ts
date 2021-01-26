import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import {
  DescribeTrustedAdvisorCheckResultRequest,
  DescribeTrustedAdvisorCheckResultResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand,
  serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand,
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

export type DescribeTrustedAdvisorCheckResultCommandInput = DescribeTrustedAdvisorCheckResultRequest;
export type DescribeTrustedAdvisorCheckResultCommandOutput = DescribeTrustedAdvisorCheckResultResponse &
  __MetadataBearer;

/**
 * <p>Returns the results of the AWS Trusted Advisor check that has the specified check ID. You
 *             can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
 *             operation.</p>
 *         <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which
 *             contains these three objects:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>TrustedAdvisorCategorySpecificSummary</a>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>TrustedAdvisorResourceDetail</a>
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>TrustedAdvisorResourcesSummary</a>
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>In addition, the response contains these fields:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <b>status</b> - The alert status of the check:
 *                     "ok" (green), "warning" (yellow), "error" (red), or "not_available".</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>timestamp</b> - The time of the last refresh
 *                     of the check.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <b>checkId</b> - The unique identifier for the
 *                     check.</p>
 *             </li>
 *          </ul>
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
export class DescribeTrustedAdvisorCheckResultCommand extends $Command<
  DescribeTrustedAdvisorCheckResultCommandInput,
  DescribeTrustedAdvisorCheckResultCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTrustedAdvisorCheckResultCommandInput) {
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
  ): Handler<DescribeTrustedAdvisorCheckResultCommandInput, DescribeTrustedAdvisorCheckResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeTrustedAdvisorCheckResultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTrustedAdvisorCheckResultRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrustedAdvisorCheckResultResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTrustedAdvisorCheckResultCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrustedAdvisorCheckResultCommandOutput> {
    return deserializeAws_json1_1DescribeTrustedAdvisorCheckResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
