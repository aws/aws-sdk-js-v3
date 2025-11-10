// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeTrustedAdvisorCheckResultRequest,
  DescribeTrustedAdvisorCheckResultResponse,
} from "../models/models_0";
import { DescribeTrustedAdvisorCheckResult } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrustedAdvisorCheckResultCommand}.
 */
export interface DescribeTrustedAdvisorCheckResultCommandInput extends DescribeTrustedAdvisorCheckResultRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrustedAdvisorCheckResultCommand}.
 */
export interface DescribeTrustedAdvisorCheckResultCommandOutput
  extends DescribeTrustedAdvisorCheckResultResponse,
    __MetadataBearer {}

/**
 * <p>Returns the results of the Trusted Advisor check that has the specified check ID. You
 *             can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
 *             operation.</p>
 *          <p>The response contains a <a>TrustedAdvisorCheckResult</a> object, which
 *             contains these three objects:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>TrustedAdvisorCategorySpecificSummary</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TrustedAdvisorResourceDetail</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TrustedAdvisorResourcesSummary</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>In addition, the response contains these fields:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>status</b> - The alert status of the check
 *                     can be <code>ok</code> (green), <code>warning</code> (yellow),
 *                         <code>error</code> (red), or <code>not_available</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>timestamp</b> - The time of the last refresh
 *                     of the check.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>checkId</b> - The unique identifier for the
 *                     check.</p>
 *             </li>
 *          </ul>
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
 * import { SupportClient, DescribeTrustedAdvisorCheckResultCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorCheckResultCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // DescribeTrustedAdvisorCheckResultRequest
 *   checkId: "STRING_VALUE", // required
 *   language: "STRING_VALUE",
 * };
 * const command = new DescribeTrustedAdvisorCheckResultCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustedAdvisorCheckResultResponse
 * //   result: { // TrustedAdvisorCheckResult
 * //     checkId: "STRING_VALUE", // required
 * //     timestamp: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     resourcesSummary: { // TrustedAdvisorResourcesSummary
 * //       resourcesProcessed: Number("long"), // required
 * //       resourcesFlagged: Number("long"), // required
 * //       resourcesIgnored: Number("long"), // required
 * //       resourcesSuppressed: Number("long"), // required
 * //     },
 * //     categorySpecificSummary: { // TrustedAdvisorCategorySpecificSummary
 * //       costOptimizing: { // TrustedAdvisorCostOptimizingSummary
 * //         estimatedMonthlySavings: Number("double"), // required
 * //         estimatedPercentMonthlySavings: Number("double"), // required
 * //       },
 * //     },
 * //     flaggedResources: [ // TrustedAdvisorResourceDetailList // required
 * //       { // TrustedAdvisorResourceDetail
 * //         status: "STRING_VALUE", // required
 * //         region: "STRING_VALUE",
 * //         resourceId: "STRING_VALUE", // required
 * //         isSuppressed: true || false,
 * //         metadata: [ // StringList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTrustedAdvisorCheckResultCommandInput - {@link DescribeTrustedAdvisorCheckResultCommandInput}
 * @returns {@link DescribeTrustedAdvisorCheckResultCommandOutput}
 * @see {@link DescribeTrustedAdvisorCheckResultCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorCheckResultCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeTrustedAdvisorCheckResultCommand extends $Command
  .classBuilder<
    DescribeTrustedAdvisorCheckResultCommandInput,
    DescribeTrustedAdvisorCheckResultCommandOutput,
    SupportClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSupport_20130415", "DescribeTrustedAdvisorCheckResult", {})
  .n("SupportClient", "DescribeTrustedAdvisorCheckResultCommand")
  .sc(DescribeTrustedAdvisorCheckResult)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrustedAdvisorCheckResultRequest;
      output: DescribeTrustedAdvisorCheckResultResponse;
    };
    sdk: {
      input: DescribeTrustedAdvisorCheckResultCommandInput;
      output: DescribeTrustedAdvisorCheckResultCommandOutput;
    };
  };
}
