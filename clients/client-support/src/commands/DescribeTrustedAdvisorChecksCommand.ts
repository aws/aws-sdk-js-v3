// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTrustedAdvisorChecksRequest, DescribeTrustedAdvisorChecksResponse } from "../models/models_0";
import { DescribeTrustedAdvisorChecks } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrustedAdvisorChecksCommand}.
 */
export interface DescribeTrustedAdvisorChecksCommandInput extends DescribeTrustedAdvisorChecksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrustedAdvisorChecksCommand}.
 */
export interface DescribeTrustedAdvisorChecksCommandOutput
  extends DescribeTrustedAdvisorChecksResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about all available Trusted Advisor checks, including the name, ID,
 *             category, description, and metadata. You must specify a language code.</p>
 *          <p>The response contains a <a>TrustedAdvisorCheckDescription</a> object for
 *             each check. You must set the Amazon Web Services Region to us-east-1.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the <code>SubscriptionRequiredException</code> error
 *                         message appears. For information about changing your support plan, see
 *                             <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *                <li>
 *                   <p>The names and descriptions for Trusted Advisor checks are subject to change. We
 *                         recommend that you specify the check ID in your code to uniquely identify a
 *                         check.</p>
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
 * import { SupportClient, DescribeTrustedAdvisorChecksCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeTrustedAdvisorChecksCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // DescribeTrustedAdvisorChecksRequest
 *   language: "STRING_VALUE", // required
 * };
 * const command = new DescribeTrustedAdvisorChecksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrustedAdvisorChecksResponse
 * //   checks: [ // TrustedAdvisorCheckList // required
 * //     { // TrustedAdvisorCheckDescription
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       category: "STRING_VALUE", // required
 * //       metadata: [ // StringList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTrustedAdvisorChecksCommandInput - {@link DescribeTrustedAdvisorChecksCommandInput}
 * @returns {@link DescribeTrustedAdvisorChecksCommandOutput}
 * @see {@link DescribeTrustedAdvisorChecksCommandInput} for command's `input` shape.
 * @see {@link DescribeTrustedAdvisorChecksCommandOutput} for command's `response` shape.
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
export class DescribeTrustedAdvisorChecksCommand extends $Command
  .classBuilder<
    DescribeTrustedAdvisorChecksCommandInput,
    DescribeTrustedAdvisorChecksCommandOutput,
    SupportClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSupport_20130415", "DescribeTrustedAdvisorChecks", {})
  .n("SupportClient", "DescribeTrustedAdvisorChecksCommand")
  .sc(DescribeTrustedAdvisorChecks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTrustedAdvisorChecksRequest;
      output: DescribeTrustedAdvisorChecksResponse;
    };
    sdk: {
      input: DescribeTrustedAdvisorChecksCommandInput;
      output: DescribeTrustedAdvisorChecksCommandOutput;
    };
  };
}
