// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeTrustedAdvisorCheckRefreshStatusesRequest,
  DescribeTrustedAdvisorCheckRefreshStatusesResponse,
} from "../models/models_0";
import { DescribeTrustedAdvisorCheckRefreshStatuses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTrustedAdvisorCheckRefreshStatusesCommand}.
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesCommandInput extends DescribeTrustedAdvisorCheckRefreshStatusesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrustedAdvisorCheckRefreshStatusesCommand}.
 */
export interface DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput extends DescribeTrustedAdvisorCheckRefreshStatusesResponse, __MetadataBearer {}

/**
 * <p>Returns the refresh status of the Trusted Advisor checks that have the specified check
 *             IDs. You can get the check IDs by calling the <a>DescribeTrustedAdvisorChecks</a> operation.</p>
 *          <p>Some checks are refreshed automatically, and you can't return their refresh statuses
 *             by using the <code>DescribeTrustedAdvisorCheckRefreshStatuses</code> operation. If you
 *             call this operation for these checks, you might see an
 *                 <code>InvalidParameterValue</code> error.</p>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeTrustedAdvisorCheckRefreshStatusesCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorCheckRefreshStatusesCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // DescribeTrustedAdvisorCheckRefreshStatusesRequest
 *   checkIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeTrustedAdvisorCheckRefreshStatusesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustedAdvisorCheckRefreshStatusesResponse
 * //   statuses: [ // TrustedAdvisorCheckRefreshStatusList // required
 * //     { // TrustedAdvisorCheckRefreshStatus
 * //       checkId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       millisUntilNextRefreshable: Number("long"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTrustedAdvisorCheckRefreshStatusesCommandInput - {@link DescribeTrustedAdvisorCheckRefreshStatusesCommandInput}
 * @returns {@link DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput}
 * @see {@link DescribeTrustedAdvisorCheckRefreshStatusesCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput} for command's `response` shape.
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
export class DescribeTrustedAdvisorCheckRefreshStatusesCommand extends command<DescribeTrustedAdvisorCheckRefreshStatusesCommandInput, DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTrustedAdvisorCheckRefreshStatuses",
  DescribeTrustedAdvisorCheckRefreshStatuses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrustedAdvisorCheckRefreshStatusesRequest;
      output: DescribeTrustedAdvisorCheckRefreshStatusesResponse;
    };
    sdk: {
      input: DescribeTrustedAdvisorCheckRefreshStatusesCommandInput;
      output: DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput;
    };
  };
}
