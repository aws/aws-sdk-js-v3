// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeTrustedAdvisorCheckResultRequest,
  DescribeTrustedAdvisorCheckResultResponse,
} from "../models/models_0";
import { DescribeTrustedAdvisorCheckResult$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeTrustedAdvisorCheckResultCommandOutput extends DescribeTrustedAdvisorCheckResultResponse, __MetadataBearer {}

/**
 * Returns the results of the Trusted Advisor check that has the specified check ID. You can get the check IDs by calling the DescribeTrustedAdvisorChecks operation.
 *
 * The response contains a TrustedAdvisorCheckResult object, which contains these three objects:
 *
 * - TrustedAdvisorCategorySpecificSummary
 * - TrustedAdvisorResourceDetail
 * - TrustedAdvisorResourcesSummary
 *
 * In addition, the response contains these fields:
 *
 * - **status** - The alert status of the check can be `ok` (green), `warning` (yellow), `error` (red), or `not_available`.
 * - **timestamp** - The time of the last refresh of the check.
 * - **checkId** - The unique identifier for the check.
 *
 * > **Note:**
 * >
 * > - You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.
 * > - If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the `SubscriptionRequiredException` error message appears. For information about changing your support plan, see [Amazon Web Services Support](http://aws.amazon.com/premiumsupport/).
 *
 * To call the Trusted Advisor operations in the Amazon Web Services Support API, you must use the US East (N. Virginia) endpoint. Currently, the US West (Oregon) and Europe (Ireland) endpoints don't support the Trusted Advisor operations. For more information, see [About the Amazon Web Services Support API](https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html#endpoint) in the *Amazon Web Services Support User Guide*.
 *
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
 *
 * An internal server error occurred.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You have exceeded the maximum allowed TPS (Transactions Per Second) for the operations.
 *
 * @throws {@link SupportServiceException}
 *
 * Base exception class for all service exceptions from Support service.
 *
 * @public
 */
export class DescribeTrustedAdvisorCheckResultCommand extends command<DescribeTrustedAdvisorCheckResultCommandInput, DescribeTrustedAdvisorCheckResultCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTrustedAdvisorCheckResult",
  DescribeTrustedAdvisorCheckResult$
) {
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
