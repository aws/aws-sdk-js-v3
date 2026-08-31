// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeTrustedAdvisorCheckSummariesRequest,
  DescribeTrustedAdvisorCheckSummariesResponse,
} from "../models/models_0";
import { DescribeTrustedAdvisorCheckSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeTrustedAdvisorCheckSummariesCommandOutput extends DescribeTrustedAdvisorCheckSummariesResponse, __MetadataBearer {}

/**
 * <p>Returns the results for the Trusted Advisor check summaries for the check IDs that you
 *             specified. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
 *          <p>The response contains an array of <a>TrustedAdvisorCheckSummary</a>
 *             objects.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support
 *                         API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.</p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have an
 *                         Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>To call the Trusted Advisor operations in
 * the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland)
 * endpoints don't support the Trusted Advisor operations. For more information, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint">About the Amazon Web Services Support
 * API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
 *          <p>
 *             <b>Understanding the Trusted Advisor Resources processed value</b>
 *          </p>
 *          <p>The <b>Resources processed</b> value, <code>resourcesProcessed</code>, usually shows both flagged resources (those with warnings or errors) and resources in good standing (ok status resources). However, some checks report flagged resources only. To understand what a specific check reports, review the detailed check information in the <a href="https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor-check-reference.html">Trusted Advisor check reference</a>. If you see a <b>Green</b> criterion listed in the <b>Alert criteria</b>, then the check reports all resources. If there's no <b>Green</b> criterion listed in the <b>Alert criteria</b>, then the check reports only flagged resources. For example, the <a href="https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html#amazon-ec2-reserved-instances-optimization">Amazon EC2 Reserved Instance optimization check (cX3c2R1chu)</a> doesn't list a <b>Green</b> criterion in the <b>Alert criteria</b>. So, this check only reports flagged resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeTrustedAdvisorCheckSummariesCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorCheckSummariesCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
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
 *
 * @public
 */
export class DescribeTrustedAdvisorCheckSummariesCommand extends command<DescribeTrustedAdvisorCheckSummariesCommandInput, DescribeTrustedAdvisorCheckSummariesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTrustedAdvisorCheckSummaries",
  DescribeTrustedAdvisorCheckSummaries$
) {
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
