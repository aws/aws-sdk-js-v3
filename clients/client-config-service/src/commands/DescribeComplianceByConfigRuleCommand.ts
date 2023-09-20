// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeComplianceByConfigRuleRequest, DescribeComplianceByConfigRuleResponse } from "../models/models_0";
import {
  de_DescribeComplianceByConfigRuleCommand,
  se_DescribeComplianceByConfigRuleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeComplianceByConfigRuleCommand}.
 */
export interface DescribeComplianceByConfigRuleCommandInput extends DescribeComplianceByConfigRuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeComplianceByConfigRuleCommand}.
 */
export interface DescribeComplianceByConfigRuleCommandOutput
  extends DescribeComplianceByConfigRuleResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Indicates whether the specified Config rules are compliant.
 * 			If a rule is noncompliant, this action returns the number of Amazon Web Services
 * 			resources that do not comply with the rule.</p>
 *          <p>A rule is compliant if all of the evaluated resources comply
 * 			with it. It is noncompliant if any of these resources do not
 * 			comply.</p>
 *          <p>If Config has no current evaluation results for the rule,
 * 			it returns <code>INSUFFICIENT_DATA</code>. This result might
 * 			indicate one of the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>Config has never invoked an evaluation for the
 * 					rule. To check whether it has, use the
 * 						<code>DescribeConfigRuleEvaluationStatus</code> action
 * 					to get the <code>LastSuccessfulInvocationTime</code> and
 * 						<code>LastFailedInvocationTime</code>.</p>
 *             </li>
 *             <li>
 *                <p>The rule's Lambda function is failing to send
 * 					evaluation results to Config. Verify that the role you
 * 					assigned to your configuration recorder includes the
 * 						<code>config:PutEvaluations</code> permission. If the
 * 					rule is a custom rule, verify that the Lambda execution
 * 					role includes the <code>config:PutEvaluations</code>
 * 					permission.</p>
 *             </li>
 *             <li>
 *                <p>The rule's Lambda function has returned
 * 						<code>NOT_APPLICABLE</code> for all evaluation results.
 * 					This can occur if the resources were deleted or removed from
 * 					the rule's scope.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeComplianceByConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeComplianceByConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeComplianceByConfigRuleRequest
 *   ConfigRuleNames: [ // ConfigRuleNames
 *     "STRING_VALUE",
 *   ],
 *   ComplianceTypes: [ // ComplianceTypes
 *     "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeComplianceByConfigRuleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeComplianceByConfigRuleResponse
 * //   ComplianceByConfigRules: [ // ComplianceByConfigRules
 * //     { // ComplianceByConfigRule
 * //       ConfigRuleName: "STRING_VALUE",
 * //       Compliance: { // Compliance
 * //         ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA",
 * //         ComplianceContributorCount: { // ComplianceContributorCount
 * //           CappedCount: Number("int"),
 * //           CapExceeded: true || false,
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeComplianceByConfigRuleCommandInput - {@link DescribeComplianceByConfigRuleCommandInput}
 * @returns {@link DescribeComplianceByConfigRuleCommandOutput}
 * @see {@link DescribeComplianceByConfigRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeComplianceByConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link NoSuchConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "DescribeComplianceByConfigRule",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DescribeComplianceByConfigRuleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeComplianceByConfigRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeComplianceByConfigRuleCommandOutput> {
    return de_DescribeComplianceByConfigRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
