// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRuleRequest, DescribeRuleResponse } from "../models/models_1";
import { DescribeRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRuleCommand}.
 */
export interface DescribeRuleCommandInput extends DescribeRuleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRuleCommand}.
 */
export interface DescribeRuleCommandOutput extends DescribeRuleResponse, __MetadataBearer {}

/**
 * <p>Describes a rule for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeRuleCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeRuleCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeRuleRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RuleId: "STRING_VALUE", // required
 * };
 * const command = new DescribeRuleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuleResponse
 * //   Rule: { // Rule
 * //     Name: "STRING_VALUE", // required
 * //     RuleId: "STRING_VALUE", // required
 * //     RuleArn: "STRING_VALUE", // required
 * //     TriggerEventSource: { // RuleTriggerEventSource
 * //       EventSourceName: "OnPostCallAnalysisAvailable" || "OnRealTimeCallAnalysisAvailable" || "OnRealTimeChatAnalysisAvailable" || "OnPostChatAnalysisAvailable" || "OnZendeskTicketCreate" || "OnZendeskTicketStatusUpdate" || "OnSalesforceCaseCreate" || "OnContactEvaluationSubmit" || "OnMetricDataUpdate" || "OnCaseCreate" || "OnCaseUpdate" || "OnSlaBreach", // required
 * //       IntegrationAssociationId: "STRING_VALUE",
 * //     },
 * //     Function: "STRING_VALUE", // required
 * //     Actions: [ // RuleActions // required
 * //       { // RuleAction
 * //         ActionType: "CREATE_TASK" || "ASSIGN_CONTACT_CATEGORY" || "GENERATE_EVENTBRIDGE_EVENT" || "SEND_NOTIFICATION" || "CREATE_CASE" || "UPDATE_CASE" || "ASSIGN_SLA" || "END_ASSOCIATED_TASKS" || "SUBMIT_AUTO_EVALUATION", // required
 * //         TaskAction: { // TaskActionDefinition
 * //           Name: "STRING_VALUE", // required
 * //           Description: "STRING_VALUE",
 * //           ContactFlowId: "STRING_VALUE", // required
 * //           References: { // ContactReferences
 * //             "<keys>": { // Reference
 * //               Value: "STRING_VALUE",
 * //               Type: "URL" || "ATTACHMENT" || "CONTACT_ANALYSIS" || "NUMBER" || "STRING" || "DATE" || "EMAIL" || "EMAIL_MESSAGE" || "EMAIL_MESSAGE_PLAIN_TEXT", // required
 * //               Status: "AVAILABLE" || "DELETED" || "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED",
 * //               Arn: "STRING_VALUE",
 * //               StatusReason: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         EventBridgeAction: { // EventBridgeActionDefinition
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         AssignContactCategoryAction: {},
 * //         SendNotificationAction: { // SendNotificationActionDefinition
 * //           DeliveryMethod: "EMAIL", // required
 * //           Subject: "STRING_VALUE",
 * //           Content: "STRING_VALUE", // required
 * //           ContentType: "PLAIN_TEXT", // required
 * //           Recipient: { // NotificationRecipientType
 * //             UserTags: { // UserTagMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             UserIds: [ // UserIdList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           Exclusion: {
 * //             UserTags: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             UserIds: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         CreateCaseAction: { // CreateCaseActionDefinition
 * //           Fields: [ // FieldValues // required
 * //             { // FieldValue
 * //               Id: "STRING_VALUE", // required
 * //               Value: { // FieldValueUnion
 * //                 BooleanValue: true || false,
 * //                 DoubleValue: Number("double"),
 * //                 EmptyValue: {},
 * //                 StringValue: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           TemplateId: "STRING_VALUE", // required
 * //         },
 * //         UpdateCaseAction: { // UpdateCaseActionDefinition
 * //           Fields: [ // required
 * //             {
 * //               Id: "STRING_VALUE", // required
 * //               Value: {
 * //                 BooleanValue: true || false,
 * //                 DoubleValue: Number("double"),
 * //                 EmptyValue: {},
 * //                 StringValue: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         AssignSlaAction: { // AssignSlaActionDefinition
 * //           SlaAssignmentType: "CASES", // required
 * //           CaseSlaConfiguration: { // CaseSlaConfiguration
 * //             Name: "STRING_VALUE", // required
 * //             Type: "CaseField", // required
 * //             FieldId: "STRING_VALUE",
 * //             TargetFieldValues: [ // SlaFieldValueUnionList
 * //               {
 * //                 BooleanValue: true || false,
 * //                 DoubleValue: Number("double"),
 * //                 EmptyValue: {},
 * //                 StringValue: "STRING_VALUE",
 * //               },
 * //             ],
 * //             TargetSlaMinutes: Number("long"), // required
 * //           },
 * //         },
 * //         EndAssociatedTasksAction: {},
 * //         SubmitAutoEvaluationAction: { // SubmitAutoEvaluationActionDefinition
 * //           EvaluationFormId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     ],
 * //     PublishStatus: "DRAFT" || "PUBLISHED", // required
 * //     CreatedTime: new Date("TIMESTAMP"), // required
 * //     LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     LastUpdatedBy: "STRING_VALUE", // required
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRuleCommandInput - {@link DescribeRuleCommandInput}
 * @returns {@link DescribeRuleCommandOutput}
 * @see {@link DescribeRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleCommandOutput} for command's `response` shape.
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
export class DescribeRuleCommand extends $Command
  .classBuilder<
    DescribeRuleCommandInput,
    DescribeRuleCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeRule", {})
  .n("ConnectClient", "DescribeRuleCommand")
  .sc(DescribeRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRuleRequest;
      output: DescribeRuleResponse;
    };
    sdk: {
      input: DescribeRuleCommandInput;
      output: DescribeRuleCommandOutput;
    };
  };
}
