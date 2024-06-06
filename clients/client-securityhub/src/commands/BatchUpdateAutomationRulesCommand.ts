// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchUpdateAutomationRulesRequest, BatchUpdateAutomationRulesResponse } from "../models/models_2";
import { de_BatchUpdateAutomationRulesCommand, se_BatchUpdateAutomationRulesCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateAutomationRulesCommand}.
 */
export interface BatchUpdateAutomationRulesCommandInput extends BatchUpdateAutomationRulesRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateAutomationRulesCommand}.
 */
export interface BatchUpdateAutomationRulesCommandOutput extends BatchUpdateAutomationRulesResponse, __MetadataBearer {}

/**
 * <p>
 *          Updates one or more automation rules based on rule Amazon Resource Names (ARNs)
 *          and input parameters.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, BatchUpdateAutomationRulesCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, BatchUpdateAutomationRulesCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // BatchUpdateAutomationRulesRequest
 *   UpdateAutomationRulesRequestItems: [ // UpdateAutomationRulesRequestItemsList // required
 *     { // UpdateAutomationRulesRequestItem
 *       RuleArn: "STRING_VALUE", // required
 *       RuleStatus: "ENABLED" || "DISABLED",
 *       RuleOrder: Number("int"),
 *       Description: "STRING_VALUE",
 *       RuleName: "STRING_VALUE",
 *       IsTerminal: true || false,
 *       Criteria: { // AutomationRulesFindingFilters
 *         ProductArn: [ // StringFilterList
 *           { // StringFilter
 *             Value: "STRING_VALUE",
 *             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *           },
 *         ],
 *         AwsAccountId: [
 *           {
 *             Value: "STRING_VALUE",
 *             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *           },
 *         ],
 *         Id: [
 *           {
 *             Value: "STRING_VALUE",
 *             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *           },
 *         ],
 *         GeneratorId: [
 *           {
 *             Value: "STRING_VALUE",
 *             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *           },
 *         ],
 *         Type: [
 *           {
 *             Value: "STRING_VALUE",
 *             Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *           },
 *         ],
 *         FirstObservedAt: [ // DateFilterList
 *           { // DateFilter
 *             Start: "STRING_VALUE",
 *             End: "STRING_VALUE",
 *             DateRange: { // DateRange
 *               Value: Number("int"),
 *               Unit: "DAYS",
 *             },
 *           },
 *         ],
 *         LastObservedAt: [
 *           {
 *             Start: "STRING_VALUE",
 *             End: "STRING_VALUE",
 *             DateRange: {
 *               Value: Number("int"),
 *               Unit: "DAYS",
 *             },
 *           },
 *         ],
 *         CreatedAt: [
 *           {
 *             Start: "STRING_VALUE",
 *             End: "STRING_VALUE",
 *             DateRange: {
 *               Value: Number("int"),
 *               Unit: "DAYS",
 *             },
 *           },
 *         ],
 *         UpdatedAt: [
 *           {
 *             Start: "STRING_VALUE",
 *             End: "STRING_VALUE",
 *             DateRange: {
 *               Value: Number("int"),
 *               Unit: "DAYS",
 *             },
 *           },
 *         ],
 *         Confidence: [ // NumberFilterList
 *           { // NumberFilter
 *             Gte: Number("double"),
 *             Lte: Number("double"),
 *             Eq: Number("double"),
 *             Gt: Number("double"),
 *             Lt: Number("double"),
 *           },
 *         ],
 *         Criticality: [
 *           {
 *             Gte: Number("double"),
 *             Lte: Number("double"),
 *             Eq: Number("double"),
 *             Gt: Number("double"),
 *             Lt: Number("double"),
 *           },
 *         ],
 *         Title: "<StringFilterList>",
 *         Description: "<StringFilterList>",
 *         SourceUrl: "<StringFilterList>",
 *         ProductName: "<StringFilterList>",
 *         CompanyName: "<StringFilterList>",
 *         SeverityLabel: "<StringFilterList>",
 *         ResourceType: "<StringFilterList>",
 *         ResourceId: "<StringFilterList>",
 *         ResourcePartition: "<StringFilterList>",
 *         ResourceRegion: "<StringFilterList>",
 *         ResourceTags: [ // MapFilterList
 *           { // MapFilter
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *           },
 *         ],
 *         ResourceDetailsOther: [
 *           {
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *           },
 *         ],
 *         ComplianceStatus: "<StringFilterList>",
 *         ComplianceSecurityControlId: "<StringFilterList>",
 *         ComplianceAssociatedStandardsId: "<StringFilterList>",
 *         VerificationState: "<StringFilterList>",
 *         WorkflowStatus: "<StringFilterList>",
 *         RecordState: "<StringFilterList>",
 *         RelatedFindingsProductArn: "<StringFilterList>",
 *         RelatedFindingsId: "<StringFilterList>",
 *         NoteText: "<StringFilterList>",
 *         NoteUpdatedAt: [
 *           {
 *             Start: "STRING_VALUE",
 *             End: "STRING_VALUE",
 *             DateRange: {
 *               Value: Number("int"),
 *               Unit: "DAYS",
 *             },
 *           },
 *         ],
 *         NoteUpdatedBy: "<StringFilterList>",
 *         UserDefinedFields: [
 *           {
 *             Key: "STRING_VALUE",
 *             Value: "STRING_VALUE",
 *             Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *           },
 *         ],
 *         ResourceApplicationArn: "<StringFilterList>",
 *         ResourceApplicationName: "<StringFilterList>",
 *         AwsAccountName: "<StringFilterList>",
 *       },
 *       Actions: [ // ActionList
 *         { // AutomationRulesAction
 *           Type: "FINDING_FIELDS_UPDATE",
 *           FindingFieldsUpdate: { // AutomationRulesFindingFieldsUpdate
 *             Note: { // NoteUpdate
 *               Text: "STRING_VALUE", // required
 *               UpdatedBy: "STRING_VALUE", // required
 *             },
 *             Severity: { // SeverityUpdate
 *               Normalized: Number("int"),
 *               Product: Number("double"),
 *               Label: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 *             },
 *             VerificationState: "UNKNOWN" || "TRUE_POSITIVE" || "FALSE_POSITIVE" || "BENIGN_POSITIVE",
 *             Confidence: Number("int"),
 *             Criticality: Number("int"),
 *             Types: [ // TypeList
 *               "STRING_VALUE",
 *             ],
 *             UserDefinedFields: { // FieldMap
 *               "<keys>": "STRING_VALUE",
 *             },
 *             Workflow: { // WorkflowUpdate
 *               Status: "NEW" || "NOTIFIED" || "RESOLVED" || "SUPPRESSED",
 *             },
 *             RelatedFindings: [ // RelatedFindingList
 *               { // RelatedFinding
 *                 ProductArn: "STRING_VALUE", // required
 *                 Id: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchUpdateAutomationRulesCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateAutomationRulesResponse
 * //   ProcessedAutomationRules: [ // AutomationRulesArnsList
 * //     "STRING_VALUE",
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
 * @param BatchUpdateAutomationRulesCommandInput - {@link BatchUpdateAutomationRulesCommandInput}
 * @returns {@link BatchUpdateAutomationRulesCommandOutput}
 * @see {@link BatchUpdateAutomationRulesCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateAutomationRulesCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
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
 * @public
 * @example To update one ore more automation rules
 * ```javascript
 * // The following example updates the specified automation rules.
 * const input = {
 *   "UpdateAutomationRulesRequestItems": [
 *     {
 *       "RuleArn": "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       "RuleOrder": 15,
 *       "RuleStatus": "ENABLED"
 *     },
 *     {
 *       "RuleArn": "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222",
 *       "RuleStatus": "DISABLED"
 *     }
 *   ]
 * };
 * const command = new BatchUpdateAutomationRulesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ProcessedAutomationRules": [
 *     "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *     "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE22222"
 *   ]
 * }
 * *\/
 * // example id: to-update-one-ore-more-automation-rules-1684771025347
 * ```
 *
 */
export class BatchUpdateAutomationRulesCommand extends $Command
  .classBuilder<
    BatchUpdateAutomationRulesCommandInput,
    BatchUpdateAutomationRulesCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "BatchUpdateAutomationRules", {})
  .n("SecurityHubClient", "BatchUpdateAutomationRulesCommand")
  .f(void 0, void 0)
  .ser(se_BatchUpdateAutomationRulesCommand)
  .de(de_BatchUpdateAutomationRulesCommand)
  .build() {}
