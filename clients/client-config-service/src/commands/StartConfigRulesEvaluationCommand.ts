// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import {
  StartConfigRulesEvaluationRequest,
  StartConfigRulesEvaluationRequestFilterSensitiveLog,
  StartConfigRulesEvaluationResponse,
  StartConfigRulesEvaluationResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1StartConfigRulesEvaluationCommand,
  serializeAws_json1_1StartConfigRulesEvaluationCommand,
} from "../protocols/Aws_json1_1";

export interface StartConfigRulesEvaluationCommandInput extends StartConfigRulesEvaluationRequest {}
export interface StartConfigRulesEvaluationCommandOutput extends StartConfigRulesEvaluationResponse, __MetadataBearer {}

/**
 * <p>Runs an on-demand evaluation for the specified Config rules
 * 			against the last known configuration state of the resources. Use
 * 				<code>StartConfigRulesEvaluation</code> when you want to test
 * 			that a rule you updated is working as expected.
 * 				<code>StartConfigRulesEvaluation</code> does not re-record the
 * 			latest configuration state for your resources. It re-runs an
 * 			evaluation against the last known state of your resources. </p>
 * 		       <p>You can specify up to 25 Config rules per request. </p>
 *
 *
 * 		       <p>An existing <code>StartConfigRulesEvaluation</code> call for
 * 			the specified rules must complete before you can call the API again.
 * 			If you chose to have Config stream to an Amazon SNS topic, you
 * 			will receive a <code>ConfigRuleEvaluationStarted</code> notification
 * 			when the evaluation starts.</p>
 * 		       <note>
 * 			         <p>You don't need to call the
 * 					<code>StartConfigRulesEvaluation</code> API to run an
 * 				evaluation for a new rule. When you create a rule, Config
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
 * 				           <p>Config invokes your Lambda function and evaluates
 * 					your IAM resources.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Your custom rule will still run periodic evaluations
 * 					every 24 hours.</p>
 * 			         </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, StartConfigRulesEvaluationCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, StartConfigRulesEvaluationCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new StartConfigRulesEvaluationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartConfigRulesEvaluationCommandInput} for command's `input` shape.
 * @see {@link StartConfigRulesEvaluationCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class StartConfigRulesEvaluationCommand extends $Command<
  StartConfigRulesEvaluationCommandInput,
  StartConfigRulesEvaluationCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartConfigRulesEvaluationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "StartConfigRulesEvaluationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartConfigRulesEvaluationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartConfigRulesEvaluationResponseFilterSensitiveLog,
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
