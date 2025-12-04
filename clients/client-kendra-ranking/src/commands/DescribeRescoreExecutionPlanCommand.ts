// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraRankingClient";
import type { DescribeRescoreExecutionPlanRequest, DescribeRescoreExecutionPlanResponse } from "../models/models_0";
import { DescribeRescoreExecutionPlan } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRescoreExecutionPlanCommand}.
 */
export interface DescribeRescoreExecutionPlanCommandInput extends DescribeRescoreExecutionPlanRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRescoreExecutionPlanCommand}.
 */
export interface DescribeRescoreExecutionPlanCommandOutput
  extends DescribeRescoreExecutionPlanResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about a rescore execution plan. A rescore
 *             execution plan is an Amazon Kendra Intelligent Ranking
 *             resource used for provisioning the <code>Rescore</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraRankingClient, DescribeRescoreExecutionPlanCommand } from "@aws-sdk/client-kendra-ranking"; // ES Modules import
 * // const { KendraRankingClient, DescribeRescoreExecutionPlanCommand } = require("@aws-sdk/client-kendra-ranking"); // CommonJS import
 * // import type { KendraRankingClientConfig } from "@aws-sdk/client-kendra-ranking";
 * const config = {}; // type is KendraRankingClientConfig
 * const client = new KendraRankingClient(config);
 * const input = { // DescribeRescoreExecutionPlanRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeRescoreExecutionPlanCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRescoreExecutionPlanResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CapacityUnits: { // CapacityUnitsConfiguration
 * //     RescoreCapacityUnits: Number("int"), // required
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   Status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //   ErrorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRescoreExecutionPlanCommandInput - {@link DescribeRescoreExecutionPlanCommandInput}
 * @returns {@link DescribeRescoreExecutionPlanCommandOutput}
 * @see {@link DescribeRescoreExecutionPlanCommandInput} for command's `input` shape.
 * @see {@link DescribeRescoreExecutionPlanCommandOutput} for command's `response` shape.
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
export class DescribeRescoreExecutionPlanCommand extends $Command
  .classBuilder<
    DescribeRescoreExecutionPlanCommandInput,
    DescribeRescoreExecutionPlanCommandOutput,
    KendraRankingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KendraRankingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSKendraRerankingFrontendService", "DescribeRescoreExecutionPlan", {})
  .n("KendraRankingClient", "DescribeRescoreExecutionPlanCommand")
  .sc(DescribeRescoreExecutionPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRescoreExecutionPlanRequest;
      output: DescribeRescoreExecutionPlanResponse;
    };
    sdk: {
      input: DescribeRescoreExecutionPlanCommandInput;
      output: DescribeRescoreExecutionPlanCommandOutput;
    };
  };
}
