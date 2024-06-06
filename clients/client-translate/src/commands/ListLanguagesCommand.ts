// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLanguagesRequest, ListLanguagesResponse } from "../models/models_0";
import { de_ListLanguagesCommand, se_ListLanguagesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLanguagesCommand}.
 */
export interface ListLanguagesCommandInput extends ListLanguagesRequest {}
/**
 * @public
 *
 * The output of {@link ListLanguagesCommand}.
 */
export interface ListLanguagesCommandOutput extends ListLanguagesResponse, __MetadataBearer {}

/**
 * <p>Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListLanguagesCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListLanguagesCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const input = { // ListLanguagesRequest
 *   DisplayLanguageCode: "de" || "en" || "es" || "fr" || "it" || "ja" || "ko" || "pt" || "zh" || "zh-TW",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLanguagesCommand(input);
 * const response = await client.send(command);
 * // { // ListLanguagesResponse
 * //   Languages: [ // LanguagesList
 * //     { // Language
 * //       LanguageName: "STRING_VALUE", // required
 * //       LanguageCode: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   DisplayLanguageCode: "de" || "en" || "es" || "fr" || "it" || "ja" || "ko" || "pt" || "zh" || "zh-TW",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLanguagesCommandInput - {@link ListLanguagesCommandInput}
 * @returns {@link ListLanguagesCommandOutput}
 * @see {@link ListLanguagesCommandInput} for command's `input` shape.
 * @see {@link ListLanguagesCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link UnsupportedDisplayLanguageCodeException} (client fault)
 *  <p>Requested display language code is not supported.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 * @public
 */
export class ListLanguagesCommand extends $Command
  .classBuilder<
    ListLanguagesCommandInput,
    ListLanguagesCommandOutput,
    TranslateClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: TranslateClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShineFrontendService_20170701", "ListLanguages", {})
  .n("TranslateClient", "ListLanguagesCommand")
  .f(void 0, void 0)
  .ser(se_ListLanguagesCommand)
  .de(de_ListLanguagesCommand)
  .build() {}
