// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchRulesResponse } from "../models/models_3";
import type { SearchRulesRequest } from "../models/models_4";
import { SearchRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchRulesCommand}.
 */
export interface SearchRulesCommandInput extends SearchRulesRequest {}
/**
 * @public
 *
 * The output of {@link SearchRulesCommand}.
 */
export interface SearchRulesCommandOutput extends SearchRulesResponse, __MetadataBearer {}

/**
 * <p>Searches rules in an Connect Customer instance, with optional filtering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchRulesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchRulesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SearchRulesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SearchCriteria: { // RulesSearchCriteria
 *     OrConditions: [ // RulesSearchConditionList
 *       {
 *         OrConditions: [
 *           "<RulesSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<RulesSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<RulesSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 *   SearchFilter: { // RulesSearchFilter
 *     AttributeFilter: { // RuleAttributeFilter
 *       OrConditions: [ // RuleAttributeOrConditionList
 *         { // RuleAttributeAndCondition
 *           TagConditions: [ // TagAndConditionList
 *             { // TagCondition
 *               TagKey: "STRING_VALUE",
 *               TagValue: "STRING_VALUE",
 *             },
 *           ],
 *         },
 *       ],
 *       AndCondition: {
 *         TagConditions: [
 *           {
 *             TagKey: "STRING_VALUE",
 *             TagValue: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *       TagCondition: "<TagCondition>",
 *     },
 *   },
 * };
 * const command = new SearchRulesCommand(input);
 * const response = await client.send(command);
 * // { // SearchRulesResponse
 * //   Rules: [ // RuleSearchSummaryList // required
 * //     { // RuleSearchSummary
 * //       Name: "STRING_VALUE", // required
 * //       RuleId: "STRING_VALUE", // required
 * //       RuleArn: "STRING_VALUE", // required
 * //       TriggerEventSource: { // RuleTriggerEventSource
 * //         EventSourceName: "OnPostCallAnalysisAvailable" || "OnRealTimeCallAnalysisAvailable" || "OnRealTimeChatAnalysisAvailable" || "OnPostChatAnalysisAvailable" || "OnEmailAnalysisAvailable" || "OnZendeskTicketCreate" || "OnZendeskTicketStatusUpdate" || "OnSalesforceCaseCreate" || "OnContactEvaluationSubmit" || "OnMetricDataUpdate" || "OnCaseCreate" || "OnCaseUpdate" || "OnSlaBreach" || "OnAlertUpdate" || "OnSchedulePublish" || "OnScheduleUpdate" || "OnScheduleTimeOffRequestActivity", // required
 * //         IntegrationAssociationId: "STRING_VALUE",
 * //       },
 * //       ActionSummaries: [ // ActionSummaries // required
 * //         { // ActionSummary
 * //           ActionType: "CREATE_TASK" || "ASSIGN_CONTACT_CATEGORY" || "GENERATE_EVENTBRIDGE_EVENT" || "SEND_NOTIFICATION" || "CREATE_CASE" || "UPDATE_CASE" || "ASSIGN_SLA" || "END_ASSOCIATED_TASKS" || "SUBMIT_AUTO_EVALUATION", // required
 * //         },
 * //       ],
 * //       RuleCapabilityTiers: [ // RuleCapabilityTiers
 * //         "GenerativeAI",
 * //       ],
 * //       PublishStatus: "DRAFT" || "PUBLISHED", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //       LastUpdatedBy: "STRING_VALUE", // required
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   ApproximateTotalCount: Number("long"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchRulesCommandInput - {@link SearchRulesCommandInput}
 * @returns {@link SearchRulesCommandOutput}
 * @see {@link SearchRulesCommandInput} for command's `input` shape.
 * @see {@link SearchRulesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @example SearchRules
 * ```javascript
 * // Searches for published rules in an Amazon Connect instance.
 * const input = {
 *   InstanceId: "12345678-1234-1234-1234-123456789012",
 *   MaxResults: 10,
 *   SearchCriteria: {
 *     StringCondition: {
 *       ComparisonType: "EXACT",
 *       FieldName: "PublishStatus",
 *       Value: "PUBLISHED"
 *     }
 *   }
 * };
 * const command = new SearchRulesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApproximateTotalCount: 1,
 *   Rules: [
 *     {
 *       ActionSummaries: [
 *         {
 *           ActionType: "CREATE_TASK"
 *         }
 *       ],
 *       CreatedTime: "2026-01-15T10:00:00Z",
 *       LastUpdatedBy: "arn:aws:connect:us-west-2:123456789012:instance/12345678-1234-1234-1234-123456789012/agent/agent-id",
 *       LastUpdatedTime: "2026-03-20T14:30:00Z",
 *       Name: "MyRule",
 *       PublishStatus: "PUBLISHED",
 *       RuleArn: "arn:aws:connect:us-west-2:123456789012:instance/12345678-1234-1234-1234-123456789012/rule/aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
 *       RuleCapabilityTiers:       [],
 *       RuleId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
 *       TriggerEventSource: {
 *         EventSourceName: "OnPostCallAnalysisAvailable"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SearchRulesCommand extends command<SearchRulesCommandInput, SearchRulesCommandOutput>(
  _ep0,
  _mw0,
  "SearchRules",
  SearchRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchRulesRequest;
      output: SearchRulesResponse;
    };
    sdk: {
      input: SearchRulesCommandInput;
      output: SearchRulesCommandOutput;
    };
  };
}
