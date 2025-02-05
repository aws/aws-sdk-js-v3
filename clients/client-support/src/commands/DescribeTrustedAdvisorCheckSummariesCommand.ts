// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeTrustedAdvisorCheckSummariesRequest,
  DescribeTrustedAdvisorCheckSummariesResponse,
} from "../models/models_0";
import {
  de_DescribeTrustedAdvisorCheckSummariesCommand,
  se_DescribeTrustedAdvisorCheckSummariesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrustedAdvisorCheckSummariesCommand}.
 */
export interface DescribeTrustedAdvisorCheckSummariesCommandInput extends DescribeTrustedAdvisorCheckSummariesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrustedAdvisorCheckSummariesCommand}.
 */
export interface DescribeTrustedAdvisorCheckSummariesCommandOutput
  extends DescribeTrustedAdvisorCheckSummariesResponse,
    __MetadataBearer {}

/**
 * <p>Returns the results for the Trusted Advisor check summaries for the check IDs that you
 *             specified. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
 *          <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a>
 *             objects.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>To call the Trusted Advisor operations in
 * the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland)
 * endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support
 * API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeTrustedAdvisorCheckSummariesCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorCheckSummariesCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SupportClient(config);
 * const input = { // DescribeTrustedAdvisorCheckSummariesRequest
 *   checkIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeTrustedAdvisorCheckSummariesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustedAdvisorCheckSummariesResponse
 * //   summaries: [ // TrustedAdvisorCheckSummaryList // required
 * //     { // TrustedAdvisorCheckSummary
 * //       checkId: "STRING_VALUE", // required
 * //       timestamp: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       hasFlaggedResources: true || false,
 * //       resourcesSummary: { // TrustedAdvisorResourcesSummary
 * //         resourcesProcessed: Number("long"), // required
 * //         resourcesFlagged: Number("long"), // required
 * //         resourcesIgnored: Number("long"), // required
 * //         resourcesSuppressed: Number("long"), // required
 * //       },
 * //       categorySpecificSummary: { // TrustedAdvisorCategorySpecificSummary
 * //         costOptimizing: { // TrustedAdvisorCostOptimizingSummary
 * //           estimatedMonthlySavings: Number("double"), // required
 * //           estimatedPercentMonthlySavings: Number("double"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTrustedAdvisorCheckSummariesCommandInput - {@link DescribeTrustedAdvisorCheckSummariesCommandInput}
 * @returns {@link DescribeTrustedAdvisorCheckSummariesCommandOutput}
 * @see {@link DescribeTrustedAdvisorCheckSummariesCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorCheckSummariesCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *         You have exceeded the maximum allowed TPS (Transactions Per Second) for the operations.
 *         </p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 * @public
 */
export class DescribeTrustedAdvisorCheckSummariesCommand extends $Command
  .classBuilder<
    DescribeTrustedAdvisorCheckSummariesCommandInput,
    DescribeTrustedAdvisorCheckSummariesCommandOutput,
    SupportClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSupport_20130415", "DescribeTrustedAdvisorCheckSummaries", {})
  .n("SupportClient", "DescribeTrustedAdvisorCheckSummariesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTrustedAdvisorCheckSummariesCommand)
  .de(de_DescribeTrustedAdvisorCheckSummariesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrustedAdvisorCheckSummariesRequest;
      output: DescribeTrustedAdvisorCheckSummariesResponse;
    };
    sdk: {
      input: DescribeTrustedAdvisorCheckSummariesCommandInput;
      output: DescribeTrustedAdvisorCheckSummariesCommandOutput;
    };
  };
}
