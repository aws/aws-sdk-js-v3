// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeSupportedLanguagesRequest, DescribeSupportedLanguagesResponse } from "../models/models_0";
import { DescribeSupportedLanguages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of supported languages for a specified `categoryCode`, `issueType` and `serviceCode`. The returned supported languages will include a ISO 639-1 code for the `language`, and the language display name.
 *
 * > **Note:**
 * >
 * > - You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.
 * > - If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the `SubscriptionRequiredException` error message appears. For information about changing your support plan, see [Amazon Web Services Support](http://aws.amazon.com/premiumsupport/).
 *
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
 *   dryRun: true || false,
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
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The request was valid, but the operation wasn't performed because `dryRun` was set to `true`.
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
export class DescribeSupportedLanguagesCommand extends command<DescribeSupportedLanguagesCommandInput, DescribeSupportedLanguagesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeSupportedLanguages",
  DescribeSupportedLanguages$
) {
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
