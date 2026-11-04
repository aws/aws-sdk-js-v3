// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRuleRequest } from "../models/models_4";
import { UpdateRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRuleCommand}.
 */
export interface UpdateRuleCommandInput extends UpdateRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuleCommand}.
 */
export interface UpdateRuleCommandOutput extends __MetadataBearer {}

/**
 * Updates a rule for the specified Connect Customer instance.
 *
 * Use the [Rules Function language](https://docs.aws.amazon.com/connect/latest/APIReference/connect-rules-language.html) to code conditions for the rule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRuleCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRuleCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateRuleRequest
 *   RuleId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Function: "STRING_VALUE", // required
 *   Actions: [ // RuleActions // required
 *     { // RuleAction
 *       ActionType: "CREATE_TASK" || "ASSIGN_CONTACT_CATEGORY" || "GENERATE_EVENTBRIDGE_EVENT" || "SEND_NOTIFICATION" || "CREATE_CASE" || "UPDATE_CASE" || "ASSIGN_SLA" || "END_ASSOCIATED_TASKS" || "SUBMIT_AUTO_EVALUATION" || "EXTRACT_INFORMATION" || "SEND_IN_APP_NOTIFICATION", // required
 *       TaskAction: { // TaskActionDefinition
 *         Name: "STRING_VALUE", // required
 *         Description: "STRING_VALUE",
 *         ContactFlowId: "STRING_VALUE", // required
 *         References: { // ContactReferences
 *           "<keys>": { // Reference
 *             Value: "STRING_VALUE",
 *             Type: "URL" || "ATTACHMENT" || "CONTACT_ANALYSIS" || "NUMBER" || "STRING" || "DATE" || "EMAIL" || "EMAIL_MESSAGE" || "EMAIL_MESSAGE_PLAIN_TEXT" || "EMAIL_MESSAGE_PLAIN_TEXT_REDACTED" || "EMAIL_MESSAGE_REDACTED", // required
 *             Status: "AVAILABLE" || "DELETED" || "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED" || "DRAFTING",
 *             Arn: "STRING_VALUE",
 *             StatusReason: "STRING_VALUE",
 *           },
 *         },
 *       },
 *       EventBridgeAction: { // EventBridgeActionDefinition
 *         Name: "STRING_VALUE", // required
 *       },
 *       AssignContactCategoryAction: {},
 *       SendNotificationAction: { // SendNotificationActionDefinition
 *         DeliveryMethod: "EMAIL", // required
 *         Subject: "STRING_VALUE",
 *         Content: "STRING_VALUE", // required
 *         ContentType: "PLAIN_TEXT", // required
 *         Recipient: { // NotificationRecipientType
 *           UserTags: { // UserTagMap
 *             "<keys>": "STRING_VALUE",
 *           },
 *           UserIds: [ // UserIdList
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Exclusion: {
 *           UserTags: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           UserIds: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       CreateCaseAction: { // CreateCaseActionDefinition
 *         Fields: [ // FieldValues // required
 *           { // FieldValue
 *             Id: "STRING_VALUE", // required
 *             Value: { // FieldValueUnion
 *               BooleanValue: true || false,
 *               DoubleValue: Number("double"),
 *               EmptyValue: {},
 *               StringValue: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         TemplateId: "STRING_VALUE", // required
 *       },
 *       UpdateCaseAction: { // UpdateCaseActionDefinition
 *         Fields: [ // required
 *           {
 *             Id: "STRING_VALUE", // required
 *             Value: {
 *               BooleanValue: true || false,
 *               DoubleValue: Number("double"),
 *               EmptyValue: {},
 *               StringValue: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *       },
 *       AssignSlaAction: { // AssignSlaActionDefinition
 *         SlaAssignmentType: "CASES", // required
 *         CaseSlaConfiguration: { // CaseSlaConfiguration
 *           Name: "STRING_VALUE", // required
 *           Type: "CaseField", // required
 *           FieldId: "STRING_VALUE",
 *           TargetFieldValues: [ // SlaFieldValueUnionList
 *             {
 *               BooleanValue: true || false,
 *               DoubleValue: Number("double"),
 *               EmptyValue: {},
 *               StringValue: "STRING_VALUE",
 *             },
 *           ],
 *           TargetSlaMinutes: Number("long"), // required
 *         },
 *       },
 *       EndAssociatedTasksAction: {},
 *       SubmitAutoEvaluationAction: { // SubmitAutoEvaluationActionDefinition
 *         EvaluationFormId: "STRING_VALUE", // required
 *       },
 *       ExtractInformationAction: { // ExtractInformationActionDefinition
 *         RulesExtractionDefinitions: [ // RulesExtractionDefinitionIdentifierList // required
 *           { // RulesExtractionDefinitionIdentifier
 *             Identifier: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       SendInAppNotificationAction: { // SendInAppNotificationActionDefinition
 *         Content: { // NotificationContent // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *         Recipient: {
 *           UserTags: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           UserIds: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Exclusion: {
 *           UserTags: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           UserIds: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         Priority: "HIGH" || "LOW",
 *       },
 *     },
 *   ],
 *   PublishStatus: "DRAFT" || "PUBLISHED", // required
 *   PreEvaluationFilters: { // PreEvaluationFilters
 *     AndConditions: [ // PreEvaluationFilterList
 *       { // PreEvaluationFilter
 *         ResourceType: "CONTACT" || "CONTACT_EVALUATION", // required
 *         FilterType: "TAG", // required
 *         FilterKey: "STRING_VALUE", // required
 *         FilterValue: "STRING_VALUE", // required
 *         Operator: "EQUALS", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRuleCommandInput - {@link UpdateRuleCommandInput}
 * @returns {@link UpdateRuleCommandOutput}
 * @see {@link UpdateRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateRuleCommand extends command<UpdateRuleCommandInput, UpdateRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRule",
  UpdateRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuleRequest;
      output: {};
    };
    sdk: {
      input: UpdateRuleCommandInput;
      output: UpdateRuleCommandOutput;
    };
  };
}
