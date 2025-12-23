// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeTrustedAdvisorCheckRefreshStatusesRequest,
  DescribeTrustedAdvisorCheckRefreshStatusesResponse,
} from "../models/models_0";
import { DescribeTrustedAdvisorCheckRefreshStatuses$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class DescribeTrustedAdvisorCheckRefreshStatusesCommand extends $Command
  .classBuilder<
    DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
    DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput,
    SupportClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSupport_20130415", "DescribeTrustedAdvisorCheckRefreshStatuses", {})
  .n("SupportClient", "DescribeTrustedAdvisorCheckRefreshStatusesCommand")
  .sc(DescribeTrustedAdvisorCheckRefreshStatuses$)
  .build() {
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
