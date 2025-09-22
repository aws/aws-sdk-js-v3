// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RefreshTrustedAdvisorCheckRequest, RefreshTrustedAdvisorCheckResponse } from "../models/models_0";
import { RefreshTrustedAdvisorCheck } from "../schemas/schemas_2_Advisor";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RefreshTrustedAdvisorCheckCommand}.
 */
export interface RefreshTrustedAdvisorCheckCommandInput extends RefreshTrustedAdvisorCheckRequest {}
/**
 * @public
 *
 * The output of {@link RefreshTrustedAdvisorCheckCommand}.
 */
export interface RefreshTrustedAdvisorCheckCommandOutput extends RefreshTrustedAdvisorCheckResponse, __MetadataBearer {}

/**
 * <p>Refreshes the Trusted Advisor check that you specify using the check ID. You can get the
 *             check IDs by calling the <a>DescribeTrustedAdvisorChecks</a>
 *             operation.</p>
 *          <p>Some checks are refreshed automatically. If you call the
 *             <code>RefreshTrustedAdvisorCheck</code> operation to refresh them, you might see
 *             the <code>InvalidParameterValue</code> error.</p>
 *          <p>The response contains a <a>TrustedAdvisorCheckRefreshStatus</a>
 *             object.</p>
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
 * import { SupportClient, RefreshTrustedAdvisorCheckCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, RefreshTrustedAdvisorCheckCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // RefreshTrustedAdvisorCheckRequest
 *   checkId: "STRING_VALUE", // required
 * };
 * const command = new RefreshTrustedAdvisorCheckCommand(input);
 * const response = await client.send(command);
 * // { // RefreshTrustedAdvisorCheckResponse
 * //   status: { // TrustedAdvisorCheckRefreshStatus
 * //     checkId: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     millisUntilNextRefreshable: Number("long"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param RefreshTrustedAdvisorCheckCommandInput - {@link RefreshTrustedAdvisorCheckCommandInput}
 * @returns {@link RefreshTrustedAdvisorCheckCommandOutput}
 * @see {@link RefreshTrustedAdvisorCheckCommandInput} for command's `input` shape.
 * @see {@link RefreshTrustedAdvisorCheckCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 *
 * @public
 */
export class RefreshTrustedAdvisorCheckCommand extends $Command
  .classBuilder<
    RefreshTrustedAdvisorCheckCommandInput,
    RefreshTrustedAdvisorCheckCommandOutput,
    SupportClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSupport_20130415", "RefreshTrustedAdvisorCheck", {})
  .n("SupportClient", "RefreshTrustedAdvisorCheckCommand")
  .sc(RefreshTrustedAdvisorCheck)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RefreshTrustedAdvisorCheckRequest;
      output: RefreshTrustedAdvisorCheckResponse;
    };
    sdk: {
      input: RefreshTrustedAdvisorCheckCommandInput;
      output: RefreshTrustedAdvisorCheckCommandOutput;
    };
  };
}
