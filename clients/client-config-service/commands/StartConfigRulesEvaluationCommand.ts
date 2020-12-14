import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { StartConfigRulesEvaluationRequest, StartConfigRulesEvaluationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartConfigRulesEvaluationCommand,
  serializeAws_json1_1StartConfigRulesEvaluationCommand,
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

export type StartConfigRulesEvaluationCommandInput = StartConfigRulesEvaluationRequest;
export type StartConfigRulesEvaluationCommandOutput = StartConfigRulesEvaluationResponse & __MetadataBearer;

/**
 * <p>Runs an on-demand evaluation for the specified AWS Config rules
 * 			against the last known configuration state of the resources. Use
 * 				<code>StartConfigRulesEvaluation</code> when you want to test
 * 			that a rule you updated is working as expected.
 * 				<code>StartConfigRulesEvaluation</code> does not re-record the
 * 			latest configuration state for your resources. It re-runs an
 * 			evaluation against the last known state of your resources. </p>
 * 		       <p>You can specify up to 25 AWS Config rules per request. </p>
 *
 *
 * 		       <p>An existing <code>StartConfigRulesEvaluation</code> call for
 * 			the specified rules must complete before you can call the API again.
 * 			If you chose to have AWS Config stream to an Amazon SNS topic, you
 * 			will receive a <code>ConfigRuleEvaluationStarted</code> notification
 * 			when the evaluation starts.</p>
 * 		       <note>
 * 			         <p>You don't need to call the
 * 					<code>StartConfigRulesEvaluation</code> API to run an
 * 				evaluation for a new rule. When you create a rule, AWS Config
 * 				evaluates your resources against the rule automatically.
 * 			</p>
 * 		       </note>
 * 		       <p>The <code>StartConfigRulesEvaluation</code> API is useful if
 * 			you want to run on-demand evaluations, such as the following
 * 			example:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>You have a custom rule that evaluates your IAM
 * 					resources every 24 hours.</p>
 * 			         </li>
 *             <li>
 * 				           <p>You update your Lambda function to add additional
 * 					conditions to your rule.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Instead of waiting for the next periodic evaluation,
 * 					you call the <code>StartConfigRulesEvaluation</code>
 * 					API.</p>
 * 			         </li>
 *             <li>
 * 				           <p>AWS Config invokes your Lambda function and evaluates
 * 					your IAM resources.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Your custom rule will still run periodic evaluations
 * 					every 24 hours.</p>
 * 			         </li>
 *          </ol>
 */
export class StartConfigRulesEvaluationCommand extends $Command<
  StartConfigRulesEvaluationCommandInput,
  StartConfigRulesEvaluationCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartConfigRulesEvaluationCommandInput) {
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
  ): Handler<StartConfigRulesEvaluationCommandInput, StartConfigRulesEvaluationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "StartConfigRulesEvaluationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartConfigRulesEvaluationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartConfigRulesEvaluationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartConfigRulesEvaluationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartConfigRulesEvaluationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartConfigRulesEvaluationCommandOutput> {
    return deserializeAws_json1_1StartConfigRulesEvaluationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
