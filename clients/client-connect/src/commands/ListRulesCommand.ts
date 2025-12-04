// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListRulesRequest, ListRulesResponse } from "../models/models_2";
import { ListRules } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRulesCommand}.
 */
export interface ListRulesCommandInput extends ListRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListRulesCommand}.
 */
export interface ListRulesCommandOutput extends ListRulesResponse, __MetadataBearer {}

/**
 * <p>List all rules for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListRulesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListRulesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListRulesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   PublishStatus: "DRAFT" || "PUBLISHED",
 *   EventSourceName: "OnPostCallAnalysisAvailable" || "OnRealTimeCallAnalysisAvailable" || "OnRealTimeChatAnalysisAvailable" || "OnPostChatAnalysisAvailable" || "OnZendeskTicketCreate" || "OnZendeskTicketStatusUpdate" || "OnSalesforceCaseCreate" || "OnContactEvaluationSubmit" || "OnMetricDataUpdate" || "OnCaseCreate" || "OnCaseUpdate" || "OnSlaBreach",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListRulesResponse
 * //   RuleSummaryList: [ // RuleSummaryList // required
 * //     { // RuleSummary
 * //       Name: "STRING_VALUE", // required
 * //       RuleId: "STRING_VALUE", // required
 * //       RuleArn: "STRING_VALUE", // required
 * //       EventSourceName: "OnPostCallAnalysisAvailable" || "OnRealTimeCallAnalysisAvailable" || "OnRealTimeChatAnalysisAvailable" || "OnPostChatAnalysisAvailable" || "OnZendeskTicketCreate" || "OnZendeskTicketStatusUpdate" || "OnSalesforceCaseCreate" || "OnContactEvaluationSubmit" || "OnMetricDataUpdate" || "OnCaseCreate" || "OnCaseUpdate" || "OnSlaBreach", // required
 * //       PublishStatus: "DRAFT" || "PUBLISHED", // required
 * //       ActionSummaries: [ // ActionSummaries // required
 * //         { // ActionSummary
 * //           ActionType: "CREATE_TASK" || "ASSIGN_CONTACT_CATEGORY" || "GENERATE_EVENTBRIDGE_EVENT" || "SEND_NOTIFICATION" || "CREATE_CASE" || "UPDATE_CASE" || "ASSIGN_SLA" || "END_ASSOCIATED_TASKS" || "SUBMIT_AUTO_EVALUATION", // required
 * //         },
 * //       ],
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       LastUpdatedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRulesCommandInput - {@link ListRulesCommandInput}
 * @returns {@link ListRulesCommandOutput}
 * @see {@link ListRulesCommandInput} for command's `input` shape.
 * @see {@link ListRulesCommandOutput} for command's `response` shape.
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
export class ListRulesCommand extends $Command
  .classBuilder<
    ListRulesCommandInput,
    ListRulesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListRules", {})
  .n("ConnectClient", "ListRulesCommand")
  .sc(ListRules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRulesRequest;
      output: ListRulesResponse;
    };
    sdk: {
      input: ListRulesCommandInput;
      output: ListRulesCommandOutput;
    };
  };
}
