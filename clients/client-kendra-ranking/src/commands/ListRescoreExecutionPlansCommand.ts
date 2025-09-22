// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraRankingClient";
import { ListRescoreExecutionPlansRequest, ListRescoreExecutionPlansResponse } from "../models/models_0";
import { ListRescoreExecutionPlans } from "../schemas/schemas_1_Rescore";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRescoreExecutionPlansCommand}.
 */
export interface ListRescoreExecutionPlansCommandInput extends ListRescoreExecutionPlansRequest {}
/**
 * @public
 *
 * The output of {@link ListRescoreExecutionPlansCommand}.
 */
export interface ListRescoreExecutionPlansCommandOutput extends ListRescoreExecutionPlansResponse, __MetadataBearer {}

/**
 * <p>Lists your rescore execution plans. A rescore execution plan
 *             is an Amazon Kendra Intelligent Ranking resource used for
 *             provisioning the <code>Rescore</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraRankingClient, ListRescoreExecutionPlansCommand } from "@aws-sdk/client-kendra-ranking"; // ES Modules import
 * // const { KendraRankingClient, ListRescoreExecutionPlansCommand } = require("@aws-sdk/client-kendra-ranking"); // CommonJS import
 * // import type { KendraRankingClientConfig } from "@aws-sdk/client-kendra-ranking";
 * const config = {}; // type is KendraRankingClientConfig
 * const client = new KendraRankingClient(config);
 * const input = { // ListRescoreExecutionPlansRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRescoreExecutionPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListRescoreExecutionPlansResponse
 * //   SummaryItems: [ // RescoreExecutionPlanSummaryList
 * //     { // RescoreExecutionPlanSummary
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       Status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRescoreExecutionPlansCommandInput - {@link ListRescoreExecutionPlansCommandInput}
 * @returns {@link ListRescoreExecutionPlansCommandOutput}
 * @see {@link ListRescoreExecutionPlansCommandInput} for command's `input` shape.
 * @see {@link ListRescoreExecutionPlansCommandOutput} for command's `response` shape.
 * @see {@link KendraRankingClientResolvedConfig | config} for KendraRankingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don’t have sufficient access to perform this action.
 *             Please ensure you have the required permission policies
 *             and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for
 *             your Amazon Kendra Intelligent Ranking service.
 *             Please wait a few minutes and try again, or contact
 *             <a href="http://aws.amazon.com/contact-us/">Support</a>
 *             for help.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *             Please reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by
 *             the Amazon Kendra Intelligent Ranking service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraRankingServiceException}
 * <p>Base exception class for all service exceptions from KendraRanking service.</p>
 *
 *
 * @public
 */
export class ListRescoreExecutionPlansCommand extends $Command
  .classBuilder<
    ListRescoreExecutionPlansCommandInput,
    ListRescoreExecutionPlansCommandOutput,
    KendraRankingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KendraRankingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSKendraRerankingFrontendService", "ListRescoreExecutionPlans", {})
  .n("KendraRankingClient", "ListRescoreExecutionPlansCommand")
  .sc(ListRescoreExecutionPlans)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRescoreExecutionPlansRequest;
      output: ListRescoreExecutionPlansResponse;
    };
    sdk: {
      input: ListRescoreExecutionPlansCommandInput;
      output: ListRescoreExecutionPlansCommandOutput;
    };
  };
}
