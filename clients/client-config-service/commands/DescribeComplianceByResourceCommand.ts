import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeComplianceByResourceRequest, DescribeComplianceByResourceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeComplianceByResourceCommand,
  serializeAws_json1_1DescribeComplianceByResourceCommand,
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

export type DescribeComplianceByResourceCommandInput = DescribeComplianceByResourceRequest;
export type DescribeComplianceByResourceCommandOutput = DescribeComplianceByResourceResponse & __MetadataBearer;

/**
 * <p>Indicates whether the specified AWS resources are compliant. If
 * 			a resource is noncompliant, this action returns the number of AWS
 * 			Config rules that the resource does not comply with.</p>
 * 		       <p>A resource is compliant if it complies with all the AWS Config
 * 			rules that evaluate it. It is noncompliant if it does not comply
 * 			with one or more of these rules.</p>
 * 		       <p>If AWS Config has no current evaluation results for the
 * 			resource, it returns <code>INSUFFICIENT_DATA</code>. This result
 * 			might indicate one of the following conditions about the rules that
 * 			evaluate the resource:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>AWS Config has never invoked an evaluation for the
 * 					rule. To check whether it has, use the
 * 						<code>DescribeConfigRuleEvaluationStatus</code> action
 * 					to get the <code>LastSuccessfulInvocationTime</code> and
 * 						<code>LastFailedInvocationTime</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The rule's AWS Lambda function is failing to send
 * 					evaluation results to AWS Config. Verify that the role that
 * 					you assigned to your configuration recorder includes the
 * 						<code>config:PutEvaluations</code> permission. If the
 * 					rule is a custom rule, verify that the AWS Lambda execution
 * 					role includes the <code>config:PutEvaluations</code>
 * 					permission.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The rule's AWS Lambda function has returned
 * 						<code>NOT_APPLICABLE</code> for all evaluation results.
 * 					This can occur if the resources were deleted or removed from
 * 					the rule's scope.</p>
 * 			         </li>
 *          </ul>
 */
export class DescribeComplianceByResourceCommand extends $Command<
  DescribeComplianceByResourceCommandInput,
  DescribeComplianceByResourceCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeComplianceByResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeComplianceByResourceCommandInput, DescribeComplianceByResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeComplianceByResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeComplianceByResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeComplianceByResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeComplianceByResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeComplianceByResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeComplianceByResourceCommandOutput> {
    return deserializeAws_json1_1DescribeComplianceByResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
