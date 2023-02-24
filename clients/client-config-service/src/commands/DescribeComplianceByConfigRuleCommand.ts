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
  DescribeComplianceByConfigRuleRequest,
  DescribeComplianceByConfigRuleRequestFilterSensitiveLog,
  DescribeComplianceByConfigRuleResponse,
  DescribeComplianceByConfigRuleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeComplianceByConfigRuleCommand,
  serializeAws_json1_1DescribeComplianceByConfigRuleCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeComplianceByConfigRuleCommandInput extends DescribeComplianceByConfigRuleRequest {}
export interface DescribeComplianceByConfigRuleCommandOutput
  extends DescribeComplianceByConfigRuleResponse,
    __MetadataBearer {}

/**
 * <p>Indicates whether the specified Config rules are compliant.
 * 			If a rule is noncompliant, this action returns the number of Amazon Web Services
 * 			resources that do not comply with the rule.</p>
 * 		       <p>A rule is compliant if all of the evaluated resources comply
 * 			with it. It is noncompliant if any of these resources do not
 * 			comply.</p>
 * 		       <p>If Config has no current evaluation results for the rule,
 * 			it returns <code>INSUFFICIENT_DATA</code>. This result might
 * 			indicate one of the following conditions:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Config has never invoked an evaluation for the
 * 					rule. To check whether it has, use the
 * 						<code>DescribeConfigRuleEvaluationStatus</code> action
 * 					to get the <code>LastSuccessfulInvocationTime</code> and
 * 						<code>LastFailedInvocationTime</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The rule's Lambda function is failing to send
 * 					evaluation results to Config. Verify that the role you
 * 					assigned to your configuration recorder includes the
 * 						<code>config:PutEvaluations</code> permission. If the
 * 					rule is a custom rule, verify that the Lambda execution
 * 					role includes the <code>config:PutEvaluations</code>
 * 					permission.</p>
 * 			         </li>
 *             <li>
 * 				           <p>The rule's Lambda function has returned
 * 						<code>NOT_APPLICABLE</code> for all evaluation results.
 * 					This can occur if the resources were deleted or removed from
 * 					the rule's scope.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeComplianceByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeComplianceByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeComplianceByConfigRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComplianceByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeComplianceByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class DescribeComplianceByConfigRuleCommand extends $Command<
  DescribeComplianceByConfigRuleCommandInput,
  DescribeComplianceByConfigRuleCommandOutput,
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

  constructor(readonly input: DescribeComplianceByConfigRuleCommandInput) {
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
  ): Handler<DescribeComplianceByConfigRuleCommandInput, DescribeComplianceByConfigRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeComplianceByConfigRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeComplianceByConfigRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeComplianceByConfigRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeComplianceByConfigRuleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeComplianceByConfigRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeComplianceByConfigRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeComplianceByConfigRuleCommandOutput> {
    return deserializeAws_json1_1DescribeComplianceByConfigRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
