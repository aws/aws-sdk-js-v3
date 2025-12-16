// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraRankingClient";
import type { DeleteRescoreExecutionPlanRequest } from "../models/models_0";
import { DeleteRescoreExecutionPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRescoreExecutionPlanCommand}.
 */
export interface DeleteRescoreExecutionPlanCommandInput extends DeleteRescoreExecutionPlanRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRescoreExecutionPlanCommand}.
 */
export interface DeleteRescoreExecutionPlanCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a rescore execution plan. A rescore execution
 *             plan is an Amazon Kendra Intelligent Ranking resource
 *             used for provisioning the <code>Rescore</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraRankingClient, DeleteRescoreExecutionPlanCommand } from "@aws-sdk/client-kendra-ranking"; // ES Modules import
 * // const { KendraRankingClient, DeleteRescoreExecutionPlanCommand } = require("@aws-sdk/client-kendra-ranking"); // CommonJS import
 * // import type { KendraRankingClientConfig } from "@aws-sdk/client-kendra-ranking";
 * const config = {}; // type is KendraRankingClientConfig
 * const client = new KendraRankingClient(config);
 * const input = { // DeleteRescoreExecutionPlanRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteRescoreExecutionPlanCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRescoreExecutionPlanCommandInput - {@link DeleteRescoreExecutionPlanCommandInput}
 * @returns {@link DeleteRescoreExecutionPlanCommandOutput}
 * @see {@link DeleteRescoreExecutionPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteRescoreExecutionPlanCommandOutput} for command's `response` shape.
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
export class DeleteRescoreExecutionPlanCommand extends $Command
  .classBuilder<
    DeleteRescoreExecutionPlanCommandInput,
    DeleteRescoreExecutionPlanCommandOutput,
    KendraRankingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KendraRankingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSKendraRerankingFrontendService", "DeleteRescoreExecutionPlan", {})
  .n("KendraRankingClient", "DeleteRescoreExecutionPlanCommand")
  .sc(DeleteRescoreExecutionPlan$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRescoreExecutionPlanRequest;
      output: {};
    };
    sdk: {
      input: DeleteRescoreExecutionPlanCommandInput;
      output: DeleteRescoreExecutionPlanCommandOutput;
    };
  };
}
