import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import {
  DescribeTrustedAdvisorCheckSummariesRequest,
  DescribeTrustedAdvisorCheckSummariesResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand,
  serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand,
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

export type DescribeTrustedAdvisorCheckSummariesCommandInput = DescribeTrustedAdvisorCheckSummariesRequest;
export type DescribeTrustedAdvisorCheckSummariesCommandOutput = DescribeTrustedAdvisorCheckSummariesResponse &
  __MetadataBearer;

/**
 * <p>Returns the results for the AWS Trusted Advisor check summaries for the check IDs that you
 *             specified. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
 *         <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a>
 *             objects.</p>
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
export class DescribeTrustedAdvisorCheckSummariesCommand extends $Command<
  DescribeTrustedAdvisorCheckSummariesCommandInput,
  DescribeTrustedAdvisorCheckSummariesCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTrustedAdvisorCheckSummariesCommandInput) {
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
  ): Handler<DescribeTrustedAdvisorCheckSummariesCommandInput, DescribeTrustedAdvisorCheckSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeTrustedAdvisorCheckSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTrustedAdvisorCheckSummariesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrustedAdvisorCheckSummariesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTrustedAdvisorCheckSummariesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrustedAdvisorCheckSummariesCommandOutput> {
    return deserializeAws_json1_1DescribeTrustedAdvisorCheckSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
