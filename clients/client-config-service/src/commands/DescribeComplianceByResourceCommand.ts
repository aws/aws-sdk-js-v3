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
  DescribeComplianceByResourceRequest,
  DescribeComplianceByResourceRequestFilterSensitiveLog,
  DescribeComplianceByResourceResponse,
  DescribeComplianceByResourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeComplianceByResourceCommand,
  serializeAws_json1_1DescribeComplianceByResourceCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeComplianceByResourceCommandInput extends DescribeComplianceByResourceRequest {}
export interface DescribeComplianceByResourceCommandOutput
  extends DescribeComplianceByResourceResponse,
    __MetadataBearer {}

/**
 * <p>Indicates whether the specified Amazon Web Services resources are compliant. If
 * 			a resource is noncompliant, this action returns the number of Config rules that the resource does not comply with.</p>
 * 		       <p>A resource is compliant if it complies with all the Config
 * 			rules that evaluate it. It is noncompliant if it does not comply
 * 			with one or more of these rules.</p>
 * 		       <p>If Config has no current evaluation results for the
 * 			resource, it returns <code>INSUFFICIENT_DATA</code>. This result
 * 			might indicate one of the following conditions about the rules that
 * 			evaluate the resource:</p>
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
 * 					evaluation results to Config. Verify that the role that
 * 					you assigned to your configuration recorder includes the
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
 * import { ConfigServiceClient, DescribeComplianceByResourceCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeComplianceByResourceCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribeComplianceByResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeComplianceByResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeComplianceByResourceCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 */
export class DescribeComplianceByResourceCommand extends $Command<
  DescribeComplianceByResourceCommandInput,
  DescribeComplianceByResourceCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeComplianceByResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeComplianceByResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeComplianceByResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeComplianceByResourceResponseFilterSensitiveLog,
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
