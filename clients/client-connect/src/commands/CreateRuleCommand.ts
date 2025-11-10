// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRuleRequest, CreateRuleResponse } from "../models/models_0";
import { CreateRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandInput extends CreateRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuleCommand}.
 */
export interface CreateRuleCommandOutput extends CreateRuleResponse, __MetadataBearer {}

/**
 * <p>Creates a rule for the specified Amazon Connect instance.</p>
 *          <p>Use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/connect-rules-language.html">Rules Function language</a> to
 *    code conditions for the rule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateRuleCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateRuleCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateRuleRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   TriggerEventSource: { // RuleTriggerEventSource
 *     EventSourceName: "OnPostCallAnalysisAvailable" || "OnRealTimeCallAnalysisAvailable" || "OnRealTimeChatAnalysisAvailable" || "OnPostChatAnalysisAvailable" || "OnZendeskTicketCreate" || "OnZendeskTicketStatusUpdate" || "OnSalesforceCaseCreate" || "OnContactEvaluationSubmit" || "OnMetricDataUpdate" || "OnCaseCreate" || "OnCaseUpdate" || "OnSlaBreach", // required
 *     IntegrationAssociationId: "STRING_VALUE",
 *   },
 *   Function: "STRING_VALUE", // required
 *   Actions: [ // RuleActions // required
 *     { // RuleAction
 *       ActionType: "CREATE_TASK" || "ASSIGN_CONTACT_CATEGORY" || "GENERATE_EVENTBRIDGE_EVENT" || "SEND_NOTIFICATION" || "CREATE_CASE" || "UPDATE_CASE" || "ASSIGN_SLA" || "END_ASSOCIATED_TASKS" || "SUBMIT_AUTO_EVALUATION", // required
 *       TaskAction: { // TaskActionDefinition
 *         Name: "STRING_VALUE", // required
 *         Description: "STRING_VALUE",
 *         ContactFlowId: "STRING_VALUE", // required
 *         References: { // ContactReferences
 *           "<keys>": { // Reference
 *             Value: "STRING_VALUE",
 *             Type: "URL" || "ATTACHMENT" || "CONTACT_ANALYSIS" || "NUMBER" || "STRING" || "DATE" || "EMAIL" || "EMAIL_MESSAGE", // required
 *             Status: "AVAILABLE" || "DELETED" || "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED",
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
 *     },
 *   ],
 *   PublishStatus: "DRAFT" || "PUBLISHED", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleResponse
 * //   RuleArn: "STRING_VALUE", // required
 * //   RuleId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRuleCommandInput - {@link CreateRuleCommandInput}
 * @returns {@link CreateRuleCommandOutput}
 * @see {@link CreateRuleCommandInput} for command's `input` shape.
 * @see {@link CreateRuleCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class CreateRuleCommand extends $Command
  .classBuilder<
    CreateRuleCommandInput,
    CreateRuleCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateRule", {})
  .n("ConnectClient", "CreateRuleCommand")
  .sc(CreateRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuleRequest;
      output: CreateRuleResponse;
    };
    sdk: {
      input: CreateRuleCommandInput;
      output: CreateRuleCommandOutput;
    };
  };
}
