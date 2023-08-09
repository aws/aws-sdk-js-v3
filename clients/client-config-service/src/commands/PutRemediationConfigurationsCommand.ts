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
} from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutRemediationConfigurationsRequest, PutRemediationConfigurationsResponse } from "../models/models_1";
import {
  de_PutRemediationConfigurationsCommand,
  se_PutRemediationConfigurationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutRemediationConfigurationsCommand}.
 */
export interface PutRemediationConfigurationsCommandInput extends PutRemediationConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link PutRemediationConfigurationsCommand}.
 */
export interface PutRemediationConfigurationsCommandOutput
  extends PutRemediationConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds or updates the remediation configuration with a specific Config rule with the
 * 			selected target or action.
 * 			The API creates the <code>RemediationConfiguration</code> object for the Config rule.
 * 		The Config rule must already exist for you to add a remediation configuration.
 * 		The target (SSM document) must exist and have permissions to use the target. </p>
 *          <note>
 *             <p>If you make backward incompatible changes to the SSM document,
 * 			you must call this again to ensure the remediations can run.</p>
 *             <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules,
 * 				the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p>
 *          </note>
 *          <note>
 *             <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field  to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p>
 *             <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRemediationConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRemediationConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // PutRemediationConfigurationsRequest
 *   RemediationConfigurations: [ // RemediationConfigurations // required
 *     { // RemediationConfiguration
 *       ConfigRuleName: "STRING_VALUE", // required
 *       TargetType: "SSM_DOCUMENT", // required
 *       TargetId: "STRING_VALUE", // required
 *       TargetVersion: "STRING_VALUE",
 *       Parameters: { // RemediationParameters
 *         "<keys>": { // RemediationParameterValue
 *           ResourceValue: { // ResourceValue
 *             Value: "RESOURCE_ID", // required
 *           },
 *           StaticValue: { // StaticValue
 *             Values: [ // StaticParameterValues // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *       },
 *       ResourceType: "STRING_VALUE",
 *       Automatic: true || false,
 *       ExecutionControls: { // ExecutionControls
 *         SsmControls: { // SsmControls
 *           ConcurrentExecutionRatePercentage: Number("int"),
 *           ErrorPercentage: Number("int"),
 *         },
 *       },
 *       MaximumAutomaticAttempts: Number("int"),
 *       RetryAttemptSeconds: Number("long"),
 *       Arn: "STRING_VALUE",
 *       CreatedByService: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutRemediationConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // PutRemediationConfigurationsResponse
 * //   FailedBatches: [ // FailedRemediationBatches
 * //     { // FailedRemediationBatch
 * //       FailureMessage: "STRING_VALUE",
 * //       FailedItems: [ // RemediationConfigurations
 * //         { // RemediationConfiguration
 * //           ConfigRuleName: "STRING_VALUE", // required
 * //           TargetType: "SSM_DOCUMENT", // required
 * //           TargetId: "STRING_VALUE", // required
 * //           TargetVersion: "STRING_VALUE",
 * //           Parameters: { // RemediationParameters
 * //             "<keys>": { // RemediationParameterValue
 * //               ResourceValue: { // ResourceValue
 * //                 Value: "RESOURCE_ID", // required
 * //               },
 * //               StaticValue: { // StaticValue
 * //                 Values: [ // StaticParameterValues // required
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //           ResourceType: "STRING_VALUE",
 * //           Automatic: true || false,
 * //           ExecutionControls: { // ExecutionControls
 * //             SsmControls: { // SsmControls
 * //               ConcurrentExecutionRatePercentage: Number("int"),
 * //               ErrorPercentage: Number("int"),
 * //             },
 * //           },
 * //           MaximumAutomaticAttempts: Number("int"),
 * //           RetryAttemptSeconds: Number("long"),
 * //           Arn: "STRING_VALUE",
 * //           CreatedByService: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutRemediationConfigurationsCommandInput - {@link PutRemediationConfigurationsCommandInput}
 * @returns {@link PutRemediationConfigurationsCommandOutput}
 * @see {@link PutRemediationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link PutRemediationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InsufficientPermissionsException} (client fault)
 *  <p>Indicates one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For PutConfigRule, the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigRule, the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For PutOrganizationConfigRule, organization Config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack cannot be created because you do not have the following permissions: </p>
 *                <ul>
 *                   <li>
 *                      <p>You do not have permission to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class PutRemediationConfigurationsCommand extends $Command<
  PutRemediationConfigurationsCommandInput,
  PutRemediationConfigurationsCommandOutput,
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
  constructor(readonly input: PutRemediationConfigurationsCommandInput) {
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
  ): Handler<PutRemediationConfigurationsCommandInput, PutRemediationConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRemediationConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutRemediationConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: PutRemediationConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutRemediationConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutRemediationConfigurationsCommandOutput> {
    return de_PutRemediationConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
