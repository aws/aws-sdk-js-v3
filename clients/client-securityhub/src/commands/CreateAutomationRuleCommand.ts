// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAutomationRuleRequest, CreateAutomationRuleResponse } from "../models/models_2";
import { de_CreateAutomationRuleCommand, se_CreateAutomationRuleCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAutomationRuleCommand}.
 */
export interface CreateAutomationRuleCommandInput extends CreateAutomationRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateAutomationRuleCommand}.
 */
export interface CreateAutomationRuleCommandOutput extends CreateAutomationRuleResponse, __MetadataBearer {}

/**
 * <p>
 *          Creates an automation rule based on input parameters.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateAutomationRuleCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateAutomationRuleCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // CreateAutomationRuleRequest
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RuleStatus: "ENABLED" || "DISABLED",
 *   RuleOrder: Number("int"), // required
 *   RuleName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   IsTerminal: true || false,
 *   Criteria: { // AutomationRulesFindingFilters
 *     ProductArn: [ // StringFilterList
 *       { // StringFilter
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *       },
 *     ],
 *     AwsAccountId: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *       },
 *     ],
 *     Id: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *       },
 *     ],
 *     GeneratorId: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *       },
 *     ],
 *     Type: [
 *       {
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *       },
 *     ],
 *     FirstObservedAt: [ // DateFilterList
 *       { // DateFilter
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: { // DateRange
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     LastObservedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     CreatedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     UpdatedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     Confidence: [ // NumberFilterList
 *       { // NumberFilter
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Eq: Number("double"),
 *         Gt: Number("double"),
 *         Lt: Number("double"),
 *       },
 *     ],
 *     Criticality: [
 *       {
 *         Gte: Number("double"),
 *         Lte: Number("double"),
 *         Eq: Number("double"),
 *         Gt: Number("double"),
 *         Lt: Number("double"),
 *       },
 *     ],
 *     Title: "<StringFilterList>",
 *     Description: "<StringFilterList>",
 *     SourceUrl: "<StringFilterList>",
 *     ProductName: "<StringFilterList>",
 *     CompanyName: "<StringFilterList>",
 *     SeverityLabel: "<StringFilterList>",
 *     ResourceType: "<StringFilterList>",
 *     ResourceId: "<StringFilterList>",
 *     ResourcePartition: "<StringFilterList>",
 *     ResourceRegion: "<StringFilterList>",
 *     ResourceTags: [ // MapFilterList
 *       { // MapFilter
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     ResourceDetailsOther: [
 *       {
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     ComplianceStatus: "<StringFilterList>",
 *     ComplianceSecurityControlId: "<StringFilterList>",
 *     ComplianceAssociatedStandardsId: "<StringFilterList>",
 *     VerificationState: "<StringFilterList>",
 *     WorkflowStatus: "<StringFilterList>",
 *     RecordState: "<StringFilterList>",
 *     RelatedFindingsProductArn: "<StringFilterList>",
 *     RelatedFindingsId: "<StringFilterList>",
 *     NoteText: "<StringFilterList>",
 *     NoteUpdatedAt: [
 *       {
 *         Start: "STRING_VALUE",
 *         End: "STRING_VALUE",
 *         DateRange: {
 *           Value: Number("int"),
 *           Unit: "DAYS",
 *         },
 *       },
 *     ],
 *     NoteUpdatedBy: "<StringFilterList>",
 *     UserDefinedFields: [
 *       {
 *         Key: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *         Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *       },
 *     ],
 *     ResourceApplicationArn: "<StringFilterList>",
 *     ResourceApplicationName: "<StringFilterList>",
 *     AwsAccountName: "<StringFilterList>",
 *   },
 *   Actions: [ // ActionList // required
 *     { // AutomationRulesAction
 *       Type: "FINDING_FIELDS_UPDATE",
 *       FindingFieldsUpdate: { // AutomationRulesFindingFieldsUpdate
 *         Note: { // NoteUpdate
 *           Text: "STRING_VALUE", // required
 *           UpdatedBy: "STRING_VALUE", // required
 *         },
 *         Severity: { // SeverityUpdate
 *           Normalized: Number("int"),
 *           Product: Number("double"),
 *           Label: "INFORMATIONAL" || "LOW" || "MEDIUM" || "HIGH" || "CRITICAL",
 *         },
 *         VerificationState: "UNKNOWN" || "TRUE_POSITIVE" || "FALSE_POSITIVE" || "BENIGN_POSITIVE",
 *         Confidence: Number("int"),
 *         Criticality: Number("int"),
 *         Types: [ // TypeList
 *           "STRING_VALUE",
 *         ],
 *         UserDefinedFields: { // FieldMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         Workflow: { // WorkflowUpdate
 *           Status: "NEW" || "NOTIFIED" || "RESOLVED" || "SUPPRESSED",
 *         },
 *         RelatedFindings: [ // RelatedFindingList
 *           { // RelatedFinding
 *             ProductArn: "STRING_VALUE", // required
 *             Id: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateAutomationRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateAutomationRuleResponse
 * //   RuleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAutomationRuleCommandInput - {@link CreateAutomationRuleCommandInput}
 * @returns {@link CreateAutomationRuleCommandOutput}
 * @see {@link CreateAutomationRuleCommandInput} for command's `input` shape.
 * @see {@link CreateAutomationRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To create an automation rule
 * ```javascript
 * // The following example creates an automation rule.
 * const input = {
 *   Actions: [
 *     {
 *       FindingFieldsUpdate: {
 *         Note: {
 *           Text: "This is a critical S3 bucket, please look into this ASAP",
 *           UpdatedBy: "test-user"
 *         },
 *         Severity: {
 *           Label: "CRITICAL"
 *         }
 *       },
 *       Type: "FINDING_FIELDS_UPDATE"
 *     }
 *   ],
 *   Criteria: {
 *     ComplianceStatus: [
 *       {
 *         Comparison: "EQUALS",
 *         Value: "FAILED"
 *       }
 *     ],
 *     ProductName: [
 *       {
 *         Comparison: "EQUALS",
 *         Value: "Security Hub"
 *       }
 *     ],
 *     RecordState: [
 *       {
 *         Comparison: "EQUALS",
 *         Value: "ACTIVE"
 *       }
 *     ],
 *     ResourceId: [
 *       {
 *         Comparison: "EQUALS",
 *         Value: "arn:aws:s3:::examplebucket/developers/design_info.doc"
 *       }
 *     ],
 *     WorkflowStatus: [
 *       {
 *         Comparison: "EQUALS",
 *         Value: "NEW"
 *       }
 *     ]
 *   },
 *   Description: "Elevate finding severity to Critical for important resources",
 *   IsTerminal: false,
 *   RuleName: "Elevate severity for important resources",
 *   RuleOrder: 1,
 *   RuleStatus: "ENABLED",
 *   Tags: {
 *     important-resources-rule: "s3-bucket"
 *   }
 * };
 * const command = new CreateAutomationRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   RuleArn: "arn:aws:securityhub:us-east-1:123456789012:automation-rule/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateAutomationRuleCommand extends $Command
  .classBuilder<
    CreateAutomationRuleCommandInput,
    CreateAutomationRuleCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "CreateAutomationRule", {})
  .n("SecurityHubClient", "CreateAutomationRuleCommand")
  .f(void 0, void 0)
  .ser(se_CreateAutomationRuleCommand)
  .de(de_CreateAutomationRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAutomationRuleRequest;
      output: CreateAutomationRuleResponse;
    };
    sdk: {
      input: CreateAutomationRuleCommandInput;
      output: CreateAutomationRuleCommandOutput;
    };
  };
}
