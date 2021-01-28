import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";
import { DescribeTrustedAdvisorChecksRequest, DescribeTrustedAdvisorChecksResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand,
  serializeAws_json1_1DescribeTrustedAdvisorChecksCommand,
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

export type DescribeTrustedAdvisorChecksCommandInput = DescribeTrustedAdvisorChecksRequest;
export type DescribeTrustedAdvisorChecksCommandOutput = DescribeTrustedAdvisorChecksResponse & __MetadataBearer;

/**
 * <p>Returns information about all available AWS Trusted Advisor checks, including the name, ID,
 *             category, description, and metadata. You must specify a language code. The AWS Support API
 *             currently supports English ("en") and Japanese ("ja"). The response contains a <a>TrustedAdvisorCheckDescription</a> object for each check. You must set the
 *             AWS Region to us-east-1.</p>
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
export class DescribeTrustedAdvisorChecksCommand extends $Command<
  DescribeTrustedAdvisorChecksCommandInput,
  DescribeTrustedAdvisorChecksCommandOutput,
  SupportClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeTrustedAdvisorChecksCommandInput) {
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
  ): Handler<DescribeTrustedAdvisorChecksCommandInput, DescribeTrustedAdvisorChecksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportClient";
    const commandName = "DescribeTrustedAdvisorChecksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTrustedAdvisorChecksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrustedAdvisorChecksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTrustedAdvisorChecksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTrustedAdvisorChecksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrustedAdvisorChecksCommandOutput> {
    return deserializeAws_json1_1DescribeTrustedAdvisorChecksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
