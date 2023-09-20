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
import { DescribeOrganizationConfigRulesRequest, DescribeOrganizationConfigRulesResponse } from "../models/models_0";
import {
  de_DescribeOrganizationConfigRulesCommand,
  se_DescribeOrganizationConfigRulesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationConfigRulesCommand}.
 */
export interface DescribeOrganizationConfigRulesCommandInput extends DescribeOrganizationConfigRulesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationConfigRulesCommand}.
 */
export interface DescribeOrganizationConfigRulesCommandOutput
  extends DescribeOrganizationConfigRulesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of organization Config rules. </p>
 *          <note>
 *             <p>When you specify the limit and the next token, you receive a paginated response.</p>
 *             <p>Limit and next token are not applicable if you specify organization Config rule names.
 * 			It is only applicable, when you request all the organization Config rules.</p>
 *             <p>
 *                <i>For accounts within an organzation</i>
 *             </p>
 *             <p>If you deploy an organizational rule or conformance pack in an organization
 * 				administrator account, and then establish a delegated administrator and deploy an
 * 				organizational rule or conformance pack in the delegated administrator account, you
 * 				won't be able to see the organizational rule or conformance pack in the organization
 * 				administrator account from the delegated administrator account or see the organizational
 * 				rule or conformance pack in the delegated administrator account from organization
 * 				administrator account. The <code>DescribeOrganizationConfigRules</code> and
 * 				<code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with
 * 				the organization-related resource that were deployed from within the account calling
 * 				those APIs.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeOrganizationConfigRulesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeOrganizationConfigRulesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeOrganizationConfigRulesRequest
 *   OrganizationConfigRuleNames: [ // OrganizationConfigRuleNames
 *     "STRING_VALUE",
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeOrganizationConfigRulesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationConfigRulesResponse
 * //   OrganizationConfigRules: [ // OrganizationConfigRules
 * //     { // OrganizationConfigRule
 * //       OrganizationConfigRuleName: "STRING_VALUE", // required
 * //       OrganizationConfigRuleArn: "STRING_VALUE", // required
 * //       OrganizationManagedRuleMetadata: { // OrganizationManagedRuleMetadata
 * //         Description: "STRING_VALUE",
 * //         RuleIdentifier: "STRING_VALUE", // required
 * //         InputParameters: "STRING_VALUE",
 * //         MaximumExecutionFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 * //         ResourceTypesScope: [ // ResourceTypesScope
 * //           "STRING_VALUE",
 * //         ],
 * //         ResourceIdScope: "STRING_VALUE",
 * //         TagKeyScope: "STRING_VALUE",
 * //         TagValueScope: "STRING_VALUE",
 * //       },
 * //       OrganizationCustomRuleMetadata: { // OrganizationCustomRuleMetadata
 * //         Description: "STRING_VALUE",
 * //         LambdaFunctionArn: "STRING_VALUE", // required
 * //         OrganizationConfigRuleTriggerTypes: [ // OrganizationConfigRuleTriggerTypes // required
 * //           "ConfigurationItemChangeNotification" || "OversizedConfigurationItemChangeNotification" || "ScheduledNotification",
 * //         ],
 * //         InputParameters: "STRING_VALUE",
 * //         MaximumExecutionFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 * //         ResourceTypesScope: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ResourceIdScope: "STRING_VALUE",
 * //         TagKeyScope: "STRING_VALUE",
 * //         TagValueScope: "STRING_VALUE",
 * //       },
 * //       ExcludedAccounts: [ // ExcludedAccounts
 * //         "STRING_VALUE",
 * //       ],
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //       OrganizationCustomPolicyRuleMetadata: { // OrganizationCustomPolicyRuleMetadataNoPolicy
 * //         Description: "STRING_VALUE",
 * //         OrganizationConfigRuleTriggerTypes: [ // OrganizationConfigRuleTriggerTypeNoSNs
 * //           "ConfigurationItemChangeNotification" || "OversizedConfigurationItemChangeNotification",
 * //         ],
 * //         InputParameters: "STRING_VALUE",
 * //         MaximumExecutionFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 * //         ResourceTypesScope: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ResourceIdScope: "STRING_VALUE",
 * //         TagKeyScope: "STRING_VALUE",
 * //         TagValueScope: "STRING_VALUE",
 * //         PolicyRuntime: "STRING_VALUE",
 * //         DebugLogDeliveryAccounts: [ // DebugLogDeliveryAccounts
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationConfigRulesCommandInput - {@link DescribeOrganizationConfigRulesCommandInput}
 * @returns {@link DescribeOrganizationConfigRulesCommandOutput}
 * @see {@link DescribeOrganizationConfigRulesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigRulesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidLimitException} (client fault)
 *  <p>The specified limit is outside the allowable range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link NoSuchOrganizationConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an organization Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link OrganizationAccessDeniedException} (client fault)
 *  <p>For <code>PutConfigurationAggregator</code> API, you can see this exception for the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>No permission to call <code>EnableAWSServiceAccess</code> API</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator cannot be updated because your Amazon Web Services Organization management account or the delegated administrator role changed.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>The configuration aggregator is associated with a previous Amazon Web Services Organization and Config cannot aggregate data with current Amazon Web Services Organization.
 * 				Delete this aggregator and create a new one with the current Amazon Web Services Organization.</p>
 *             </li>
 *             <li>
 *                <p>You are not a registered delegated administrator for Config with permissions to call <code>ListDelegatedAdministrators</code> API.
 * 			Ensure that the management account registers delagated administrator for Config service principle name before the delegated administrator creates an aggregator.</p>
 *             </li>
 *          </ul>
 *          <p>For all <code>OrganizationConfigRule</code> and <code>OrganizationConformancePack</code> APIs, Config throws an exception if APIs are called from member accounts. All APIs must be called from organization management account.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class DescribeOrganizationConfigRulesCommand extends $Command<
  DescribeOrganizationConfigRulesCommandInput,
  DescribeOrganizationConfigRulesCommandOutput,
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
  constructor(readonly input: DescribeOrganizationConfigRulesCommandInput) {
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
  ): Handler<DescribeOrganizationConfigRulesCommandInput, DescribeOrganizationConfigRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrganizationConfigRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DescribeOrganizationConfigRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StarlingDoveService",
        operation: "DescribeOrganizationConfigRules",
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
    input: DescribeOrganizationConfigRulesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeOrganizationConfigRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationConfigRulesCommandOutput> {
    return de_DescribeOrganizationConfigRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
