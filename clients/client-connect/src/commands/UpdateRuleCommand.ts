// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
<<<<<<< HEAD
import { UpdateRuleRequest } from "../models/models_3";
=======
import type { UpdateRuleRequest } from "../models/models_2";
>>>>>>> 60efd81940b (chore: codegen)
import { UpdateRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates a rule for the specified Amazon Connect instance.</p>
 *          <p>Use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/connect-rules-language.html">Rules Function
 *     language</a> to code conditions for the rule. </p>
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
 *       ActionType: "CREATE_TASK" || "ASSIGN_CONTACT_CATEGORY" || "GENERATE_EVENTBRIDGE_EVENT" || "SEND_NOTIFICATION" || "CREATE_CASE" || "UPDATE_CASE" || "ASSIGN_SLA" || "END_ASSOCIATED_TASKS" || "SUBMIT_AUTO_EVALUATION", // required
 *       TaskAction: { // TaskActionDefinition
 *         Name: "STRING_VALUE", // required
 *         Description: "STRING_VALUE",
 *         ContactFlowId: "STRING_VALUE", // required
 *         References: { // ContactReferences
 *           "<keys>": { // Reference
 *             Value: "STRING_VALUE",
 *             Type: "URL" || "ATTACHMENT" || "CONTACT_ANALYSIS" || "NUMBER" || "STRING" || "DATE" || "EMAIL" || "EMAIL_MESSAGE" || "EMAIL_MESSAGE_PLAIN_TEXT", // required
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
 *     },
 *   ],
 *   PublishStatus: "DRAFT" || "PUBLISHED", // required
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateRuleCommand extends $Command
  .classBuilder<
    UpdateRuleCommandInput,
    UpdateRuleCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateRule", {})
  .n("ConnectClient", "UpdateRuleCommand")
  .sc(UpdateRule)
  .build() {
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
