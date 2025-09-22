// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSupportedLanguagesRequest, DescribeSupportedLanguagesResponse } from "../models/models_0";
import { DescribeSupportedLanguages } from "../schemas/schemas_1_Describe";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSupportedLanguagesCommand}.
 */
export interface DescribeSupportedLanguagesCommandInput extends DescribeSupportedLanguagesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSupportedLanguagesCommand}.
 */
export interface DescribeSupportedLanguagesCommandOutput extends DescribeSupportedLanguagesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of supported languages for a specified <code>categoryCode</code>,
 *         <code>issueType</code> and <code>serviceCode</code>. The returned supported languages will
 *         include a ISO 639-1 code for the <code>language</code>, and the language display name.</p>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeSupportedLanguagesCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeSupportedLanguagesCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // DescribeSupportedLanguagesRequest
 *   issueType: "STRING_VALUE", // required
 *   serviceCode: "STRING_VALUE", // required
 *   categoryCode: "STRING_VALUE", // required
 * };
 * const command = new DescribeSupportedLanguagesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSupportedLanguagesResponse
 * //   supportedLanguages: [ // SupportedLanguagesList
 * //     { // SupportedLanguage
 * //       code: "STRING_VALUE",
 * //       language: "STRING_VALUE",
 * //       display: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSupportedLanguagesCommandInput - {@link DescribeSupportedLanguagesCommandInput}
 * @returns {@link DescribeSupportedLanguagesCommandOutput}
 * @see {@link DescribeSupportedLanguagesCommandInput} for command's `input` shape.
 * @see {@link DescribeSupportedLanguagesCommandOutput} for command's `response` shape.
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
export class DescribeSupportedLanguagesCommand extends $Command
  .classBuilder<
    DescribeSupportedLanguagesCommandInput,
    DescribeSupportedLanguagesCommandOutput,
    SupportClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSupport_20130415", "DescribeSupportedLanguages", {})
  .n("SupportClient", "DescribeSupportedLanguagesCommand")
  .sc(DescribeSupportedLanguages)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSupportedLanguagesRequest;
      output: DescribeSupportedLanguagesResponse;
    };
    sdk: {
      input: DescribeSupportedLanguagesCommandInput;
      output: DescribeSupportedLanguagesCommandOutput;
    };
  };
}
