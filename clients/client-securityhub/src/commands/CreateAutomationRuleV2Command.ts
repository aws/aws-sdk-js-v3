// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAutomationRuleV2Request, CreateAutomationRuleV2Response } from "../models/models_2";
import { de_CreateAutomationRuleV2Command, se_CreateAutomationRuleV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAutomationRuleV2Command}.
 */
export interface CreateAutomationRuleV2CommandInput extends CreateAutomationRuleV2Request {}
/**
 * @public
 *
 * The output of {@link CreateAutomationRuleV2Command}.
 */
export interface CreateAutomationRuleV2CommandOutput extends CreateAutomationRuleV2Response, __MetadataBearer {}

/**
 * <p>Creates a V2 automation rule. This API is in private preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateAutomationRuleV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateAutomationRuleV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // CreateAutomationRuleV2Request
 *   RuleName: "STRING_VALUE", // required
 *   RuleStatus: "ENABLED" || "DISABLED",
 *   Description: "STRING_VALUE", // required
 *   RuleOrder: Number("float"), // required
 *   Criteria: { // Criteria Union: only one key present
 *     OcsfFindingCriteria: { // OcsfFindingFilters
 *       CompositeFilters: [ // CompositeFilterList
 *         { // CompositeFilter
 *           StringFilters: [ // OcsfStringFilterList
 *             { // OcsfStringFilter
 *               FieldName: "metadata.uid" || "activity_name" || "cloud.account.uid" || "cloud.provider" || "cloud.region" || "compliance.assessments.category" || "compliance.assessments.name" || "compliance.control" || "compliance.status" || "compliance.standards" || "finding_info.desc" || "finding_info.src_url" || "finding_info.title" || "finding_info.types" || "finding_info.uid" || "finding_info.related_events.uid" || "finding_info.related_events.product.uid" || "finding_info.related_events.title" || "metadata.product.name" || "metadata.product.uid" || "metadata.product.vendor_name" || "remediation.desc" || "remediation.references" || "resources.cloud_partition" || "resources.region" || "resources.type" || "resources.uid" || "severity" || "status" || "comment" || "vulnerabilities.fix_coverage" || "class_name",
 *               Filter: { // StringFilter
 *                 Value: "STRING_VALUE",
 *                 Comparison: "EQUALS" || "PREFIX" || "NOT_EQUALS" || "PREFIX_NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS" || "CONTAINS_WORD",
 *               },
 *             },
 *           ],
 *           DateFilters: [ // OcsfDateFilterList
 *             { // OcsfDateFilter
 *               FieldName: "finding_info.created_time_dt" || "finding_info.first_seen_time_dt" || "finding_info.last_seen_time_dt" || "finding_info.modified_time_dt",
 *               Filter: { // DateFilter
 *                 Start: "STRING_VALUE",
 *                 End: "STRING_VALUE",
 *                 DateRange: { // DateRange
 *                   Value: Number("int"),
 *                   Unit: "DAYS",
 *                 },
 *               },
 *             },
 *           ],
 *           BooleanFilters: [ // OcsfBooleanFilterList
 *             { // OcsfBooleanFilter
 *               FieldName: "compliance.assessments.meets_criteria" || "vulnerabilities.is_exploit_available" || "vulnerabilities.is_fix_available",
 *               Filter: { // BooleanFilter
 *                 Value: true || false,
 *               },
 *             },
 *           ],
 *           NumberFilters: [ // OcsfNumberFilterList
 *             { // OcsfNumberFilter
 *               FieldName: "activity_id" || "compliance.status_id" || "confidence_score" || "severity_id" || "status_id" || "finding_info.related_events_count",
 *               Filter: { // NumberFilter
 *                 Gte: Number("double"),
 *                 Lte: Number("double"),
 *                 Eq: Number("double"),
 *                 Gt: Number("double"),
 *                 Lt: Number("double"),
 *               },
 *             },
 *           ],
 *           MapFilters: [ // OcsfMapFilterList
 *             { // OcsfMapFilter
 *               FieldName: "resources.tags",
 *               Filter: { // MapFilter
 *                 Key: "STRING_VALUE",
 *                 Value: "STRING_VALUE",
 *                 Comparison: "EQUALS" || "NOT_EQUALS" || "CONTAINS" || "NOT_CONTAINS",
 *               },
 *             },
 *           ],
 *           Operator: "AND" || "OR",
 *         },
 *       ],
 *       CompositeOperator: "AND" || "OR",
 *     },
 *   },
 *   Actions: [ // AutomationRulesActionListV2 // required
 *     { // AutomationRulesActionV2
 *       Type: "FINDING_FIELDS_UPDATE" || "EXTERNAL_INTEGRATION", // required
 *       FindingFieldsUpdate: { // AutomationRulesFindingFieldsUpdateV2
 *         SeverityId: Number("int"),
 *         Comment: "STRING_VALUE",
 *         StatusId: Number("int"),
 *       },
 *       ExternalIntegrationConfiguration: { // ExternalIntegrationConfiguration
 *         ConnectorArn: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateAutomationRuleV2Command(input);
 * const response = await client.send(command);
 * // { // CreateAutomationRuleV2Response
 * //   RuleArn: "STRING_VALUE",
 * //   RuleId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAutomationRuleV2CommandInput - {@link CreateAutomationRuleV2CommandInput}
 * @returns {@link CreateAutomationRuleV2CommandOutput}
 * @see {@link CreateAutomationRuleV2CommandInput} for command's `input` shape.
 * @see {@link CreateAutomationRuleV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class CreateAutomationRuleV2Command extends $Command
  .classBuilder<
    CreateAutomationRuleV2CommandInput,
    CreateAutomationRuleV2CommandOutput,
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
  .s("SecurityHubAPIService", "CreateAutomationRuleV2", {})
  .n("SecurityHubClient", "CreateAutomationRuleV2Command")
  .f(void 0, void 0)
  .ser(se_CreateAutomationRuleV2Command)
  .de(de_CreateAutomationRuleV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAutomationRuleV2Request;
      output: CreateAutomationRuleV2Response;
    };
    sdk: {
      input: CreateAutomationRuleV2CommandInput;
      output: CreateAutomationRuleV2CommandOutput;
    };
  };
}
