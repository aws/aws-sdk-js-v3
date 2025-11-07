// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraRankingClient";
import { UpdateRescoreExecutionPlanRequest } from "../models/models_0";
import { UpdateRescoreExecutionPlan } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRescoreExecutionPlanCommand}.
 */
export interface UpdateRescoreExecutionPlanCommandInput extends UpdateRescoreExecutionPlanRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRescoreExecutionPlanCommand}.
 */
export interface UpdateRescoreExecutionPlanCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a rescore execution plan. A rescore execution plan
 *             is an Amazon Kendra Intelligent Ranking resource used for
 *             provisioning the <code>Rescore</code> API. You can update the
 *             number of capacity units you require for Amazon Kendra
 *             Intelligent Ranking to rescore or re-rank a search service's
 *             results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraRankingClient, UpdateRescoreExecutionPlanCommand } from "@aws-sdk/client-kendra-ranking"; // ES Modules import
 * // const { KendraRankingClient, UpdateRescoreExecutionPlanCommand } = require("@aws-sdk/client-kendra-ranking"); // CommonJS import
 * // import type { KendraRankingClientConfig } from "@aws-sdk/client-kendra-ranking";
 * const config = {}; // type is KendraRankingClientConfig
 * const client = new KendraRankingClient(config);
 * const input = { // UpdateRescoreExecutionPlanRequest
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   CapacityUnits: { // CapacityUnitsConfiguration
 *     RescoreCapacityUnits: Number("int"), // required
 *   },
 * };
 * const command = new UpdateRescoreExecutionPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRescoreExecutionPlanCommandInput - {@link UpdateRescoreExecutionPlanCommandInput}
 * @returns {@link UpdateRescoreExecutionPlanCommandOutput}
 * @see {@link UpdateRescoreExecutionPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateRescoreExecutionPlanCommandOutput} for command's `response` shape.
 * @see {@link KendraRankingClientResolvedConfig | config} for KendraRankingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don’t have sufficient access to perform this action.
 *             Please ensure you have the required permission policies
 *             and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any
 *             inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for
 *             your Amazon Kendra Intelligent Ranking service.
 *             Please wait a few minutes and try again, or contact
 *             <a href="http://aws.amazon.com/contact-us/">Support</a>
 *             for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn't exist. Please
 *             check you have provided the correct resource and try
 *             again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your
 *             Amazon Kendra Intelligent Ranking service. Please
 *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas</a>
 *             for more information, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> to inquire about
 *             an increase of limits.</p>
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
export class UpdateRescoreExecutionPlanCommand extends $Command
  .classBuilder<
    UpdateRescoreExecutionPlanCommandInput,
    UpdateRescoreExecutionPlanCommandOutput,
    KendraRankingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KendraRankingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSKendraRerankingFrontendService", "UpdateRescoreExecutionPlan", {})
  .n("KendraRankingClient", "UpdateRescoreExecutionPlanCommand")
  .sc(UpdateRescoreExecutionPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRescoreExecutionPlanRequest;
      output: {};
    };
    sdk: {
      input: UpdateRescoreExecutionPlanCommandInput;
      output: UpdateRescoreExecutionPlanCommandOutput;
    };
  };
}
