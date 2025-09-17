// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraRankingClient";
import { CreateRescoreExecutionPlanRequest, CreateRescoreExecutionPlanResponse } from "../models/models_0";
import { de_CreateRescoreExecutionPlanCommand, se_CreateRescoreExecutionPlanCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRescoreExecutionPlanCommand}.
 */
export interface CreateRescoreExecutionPlanCommandInput extends CreateRescoreExecutionPlanRequest {}
/**
 * @public
 *
 * The output of {@link CreateRescoreExecutionPlanCommand}.
 */
export interface CreateRescoreExecutionPlanCommandOutput extends CreateRescoreExecutionPlanResponse, __MetadataBearer {}

/**
 * <p>Creates a rescore execution plan. A rescore execution
 *             plan is an Amazon Kendra Intelligent Ranking resource
 *             used for provisioning the <code>Rescore</code> API. You set
 *             the number of capacity units that you require for
 *             Amazon Kendra Intelligent Ranking to rescore or re-rank
 *             a search service's results.</p>
 *          <p>For an example of using the
 *             <code>CreateRescoreExecutionPlan</code> API, including using
 *             the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically
 *                 ranking a search service's results</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraRankingClient, CreateRescoreExecutionPlanCommand } from "@aws-sdk/client-kendra-ranking"; // ES Modules import
 * // const { KendraRankingClient, CreateRescoreExecutionPlanCommand } = require("@aws-sdk/client-kendra-ranking"); // CommonJS import
 * // import type { KendraRankingClientConfig } from "@aws-sdk/client-kendra-ranking";
 * const config = {}; // type is KendraRankingClientConfig
 * const client = new KendraRankingClient(config);
 * const input = { // CreateRescoreExecutionPlanRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   CapacityUnits: { // CapacityUnitsConfiguration
 *     RescoreCapacityUnits: Number("int"), // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateRescoreExecutionPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateRescoreExecutionPlanResponse
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRescoreExecutionPlanCommandInput - {@link CreateRescoreExecutionPlanCommandInput}
 * @returns {@link CreateRescoreExecutionPlanCommandOutput}
 * @see {@link CreateRescoreExecutionPlanCommandInput} for command's `input` shape.
 * @see {@link CreateRescoreExecutionPlanCommandOutput} for command's `response` shape.
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
export class CreateRescoreExecutionPlanCommand extends $Command
  .classBuilder<
    CreateRescoreExecutionPlanCommandInput,
    CreateRescoreExecutionPlanCommandOutput,
    KendraRankingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KendraRankingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSKendraRerankingFrontendService", "CreateRescoreExecutionPlan", {})
  .n("KendraRankingClient", "CreateRescoreExecutionPlanCommand")
  .f(void 0, void 0)
  .ser(se_CreateRescoreExecutionPlanCommand)
  .de(de_CreateRescoreExecutionPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRescoreExecutionPlanRequest;
      output: CreateRescoreExecutionPlanResponse;
    };
    sdk: {
      input: CreateRescoreExecutionPlanCommandInput;
      output: CreateRescoreExecutionPlanCommandOutput;
    };
  };
}
