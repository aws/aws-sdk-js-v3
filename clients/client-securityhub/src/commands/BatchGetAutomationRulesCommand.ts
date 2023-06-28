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

import { BatchGetAutomationRulesRequest, BatchGetAutomationRulesResponse } from "../models/models_2";
import { de_BatchGetAutomationRulesCommand, se_BatchGetAutomationRulesCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetAutomationRulesCommand}.
 */
export interface BatchGetAutomationRulesCommandInput extends BatchGetAutomationRulesRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetAutomationRulesCommand}.
 */
export interface BatchGetAutomationRulesCommandOutput extends BatchGetAutomationRulesResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Retrieves a list of details for automation rules based on rule Amazon Resource Names
 *          (ARNs).
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchGetAutomationRulesCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchGetAutomationRulesCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // BatchGetAutomationRulesRequest
 *   AutomationRulesArns: [ // AutomationRulesArnsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetAutomationRulesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetAutomationRulesResponse
 * //   Rules: [ // AutomationRulesConfigList
 * //     { // AutomationRulesConfig
 * //       RuleArn: "STRING_VALUE",
 * //       RuleStatus: "ENABLED" || "DISABLED",
 * //       RuleOrder: Number("int"),
 * //       RuleName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       IsTerminal: true || false,
 * //       Criteria: { // AutomationRulesFindingFilters
 * //         ProductArn: [ // StringFilterList
 * //           { // StringFilter
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS",
 * //           },
 * //         ],
 * //         AwsAccountId: [
 * //           {
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS",
 * //           },
 * //         ],
 * //         Id: [
 * //           {
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS",
 * //           },
 * //         ],
 * //         GeneratorId: [
 * //           {
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS",
 * //           },
 * //         ],
 * //         Type: [
 * //           {
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS",
 * //           },
 * //         ],
 * //         FirstObservedAt: [ // DateFilterList
 * //           { // DateFilter
 * //             Start: "STRING_VALUE",
 * //             End: "STRING_VALUE",
 * //             DateRange: { // DateRange
 * //               Value: Number("int"),
 * //               Unit: "DAYS",
 * //             },
 * //           },
 * //         ],
 * //         LastObservedAt: [
 * //           {
 * //             Start: "STRING_VALUE",
 * //             End: "STRING_VALUE",
 * //             DateRange: {
 * //               Value: Number("int"),
 * //               Unit: "DAYS",
 * //             },
 * //           },
 * //         ],
 * //         CreatedAt: [
 * //           {
 * //             Start: "STRING_VALUE",
 * //             End: "STRING_VALUE",
 * //             DateRange: {
 * //               Value: Number("int"),
 * //               Unit: "DAYS",
 * //             },
 * //           },
 * //         ],
 * //         UpdatedAt: [
 * //           {
 * //             Start: "STRING_VALUE",
 * //             End: "STRING_VALUE",
 * //             DateRange: {
 * //               Value: Number("int"),
 * //               Unit: "DAYS",
 * //             },
 * //           },
 * //         ],
 * //         Confidence: [ // NumberFilterList
 * //           { // NumberFilter
 * //             Gte: Number("double"),
 * //             Lte: Number("double"),
 * //             Eq: Number("double"),
 * //           },
 * //         ],
 * //         Criticality: [
 * //           {
 * //             Gte: Number("double"),
 * //             Lte: Number("double"),
 * //             Eq: Number("double"),
 * //           },
 * //         ],
 * //         Title: "<StringFilterList>",
 * //         Description: "<StringFilterList>",
 * //         SourceUrl: "<StringFilterList>",
 * //         ProductName: "<StringFilterList>",
 * //         CompanyName: "<StringFilterList>",
 * //         SeverityLabel: "<StringFilterList>",
 * //         ResourceType: "<StringFilterList>",
 * //         ResourceId: "<StringFilterList>",
 * //         ResourcePartition: "<StringFilterList>",
 * //         ResourceRegion: "<StringFilterList>",
 * //         ResourceTags: [ // MapFilterList
 * //           { // MapFilter
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "NOT_EQUALS",
 * //           },
 * //         ],
 * //         ResourceDetailsOther: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "NOT_EQUALS",
 * //           },
 * //         ],
 * //         ComplianceStatus: "<StringFilterList>",
 * //         ComplianceSecurityControlId: "<StringFilterList>",
 * //         ComplianceAssociatedStandardsId: "<StringFilterList>",
 * //         VerificationState: "<StringFilterList>",
 * //         WorkflowStatus: "<StringFilterList>",
 * //         RecordState: "<StringFilterList>",
 * //         RelatedFindingsProductArn: "<StringFilterList>",
 * //         RelatedFindingsId: "<StringFilterList>",
 * //         NoteText: "<StringFilterList>",
 * //         NoteUpdatedAt: [
 * //           {
 * //             Start: "STRING_VALUE",
 * //             End: "STRING_VALUE",
 * //             DateRange: {
 * //               Value: Number("int"),
 * //               Unit: "DAYS",
 * //             },
 * //           },
 * //         ],
 * //         NoteUpdatedBy: "<StringFilterList>",
 * //         UserDefinedFields: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //             Comparison: "EQUALS" || "NOT_EQUALS",
 * //           },
 * //         ],
 * //       },
 * //       Actions: [ // ActionList
 * //         { // AutomationRulesAction
 * //           Type: "FINDING_FIELDS_UPDATE",
 * //           FindingFieldsUpdate: { // AutomationRulesFindingFieldsUpdate
 * //             Note: { // NoteUpdate
 * //               Text: "STRING_VALUE", // required
 * //               UpdatedBy: "STRING_VALUE", // required
 * //             },
 * //             Severity: { // SeverityUpdate
 * //               Normalized: Number("int"),
 * //               Product: Number("double"),
 * //               Label: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 * //             },
 * //             VerificationState: "UNKNOWN" || "TRUE_POSITIVE" || "FALSE_POSITIVE" || "BENIGN_POSITIVE",
 * //             Confidence: Number("int"),
 * //             Criticality: Number("int"),
 * //             Types: [ // TypeList
 * //               "STRING_VALUE",
 * //             ],
 * //             UserDefinedFields: { // FieldMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             Workflow: { // WorkflowUpdate
 * //               Status: "NEW" || "NOTIFIED" || "RESOLVED" || "SUPPRESSED",
 * //             },
 * //             RelatedFindings: [ // RelatedFindingList
 * //               { // RelatedFinding
 * //                 ProductArn: "STRING_VALUE", // required
 * //                 Id: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       CreatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnprocessedAutomationRules: [ // UnprocessedAutomationRulesList
 * //     { // UnprocessedAutomationRule
 * //       RuleArn: "STRING_VALUE",
 * //       ErrorCode: Number("int"),
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetAutomationRulesCommandInput - {@link BatchGetAutomationRulesCommandInput}
 * @returns {@link BatchGetAutomationRulesCommandOutput}
 * @see {@link BatchGetAutomationRulesCommandInput} for command's `input` shape.
 * @see {@link BatchGetAutomationRulesCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To update one ore more automation rules
 * ```javascript
 * // The following example updates the specified automation rules.
 * const input = {
 *   "AutomationRulesArns": [
 *     "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *     "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222"
 *   ]
 * };
 * const command = new BatchGetAutomationRulesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Rules": [
 *     {
 *       "Actions": [
 *         {
 *           "FindingFieldsUpdate": {
 *             "Workflow": {
 *               "Status": "RESOLVED"
 *             }
 *           },
 *           "Type": "FINDING_FIELDS_UPDATE"
 *         }
 *       ],
 *       "CreatedAt": "2022-08-31T01:52:33.250Z",
 *       "CreatedBy": "AROAJURBUYQQNL5OL2TIM:TEST-16MJ75L9VBK14",
 *       "Criteria": {
 *         "AwsAccountId": [
 *           {
 *             "Comparison": "EQUALS",
 *             "Value": "111122223333"
 *           }
 *         ],
 *         "FirstObservedAt": [
 *           {
 *             "DateRange": {
 *               "Unit": "DAYS",
 *               "Value": 5
 *             }
 *           }
 *         ],
 *         "Type": [
 *           {
 *             "Comparison": "EQUALS",
 *             "Value": "Software and Configuration Checks/Industry and Regulatory Standards"
 *           }
 *         ]
 *       },
 *       "Description": "sample rule description 1",
 *       "RuleArn": "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       "RuleName": "sample-rule-name-1",
 *       "RuleOrder": 1,
 *       "RuleStatus": "ENABLED",
 *       "UpdatedAt": "2022-08-31T01:52:33.250Z"
 *     },
 *     {
 *       "Actions": [
 *         {
 *           "FindingFieldsUpdate": {
 *             "Workflow": {
 *               "Status": "RESOLVED"
 *             }
 *           },
 *           "Type": "FINDING_FIELDS_UPDATE"
 *         }
 *       ],
 *       "CreatedAt": "2022-08-31T01:52:33.250Z",
 *       "CreatedBy": "AROAJURBUYQQNL5OL2TIM:TEST-16MJ75L9VBK14",
 *       "Criteria": {
 *         "ResourceType": [
 *           {
 *             "Comparison": "EQUALS",
 *             "Value": "Ec2Instance"
 *           }
 *         ],
 *         "SeverityLabel": [
 *           {
 *             "Comparison": "EQUALS",
 *             "Value": "INFORMATIONAL"
 *           }
 *         ]
 *       },
 *       "Description": "Sample rule description 2",
 *       "RuleArn": "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
 *       "RuleName": "sample-rule-name-2",
 *       "RuleOrder": 2,
 *       "RuleStatus": "ENABLED",
 *       "UpdatedAt": "2022-08-31T01:52:33.250Z"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-update-one-ore-more-automation-rules-1684771025347
 * ```
 *
 */
export class BatchGetAutomationRulesCommand extends $Command<
  BatchGetAutomationRulesCommandInput,
  BatchGetAutomationRulesCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: BatchGetAutomationRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetAutomationRulesCommandInput, BatchGetAutomationRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetAutomationRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "BatchGetAutomationRulesCommand";
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
  private serialize(input: BatchGetAutomationRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetAutomationRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetAutomationRulesCommandOutput> {
    return de_BatchGetAutomationRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
