// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DetectDominantLanguageRequest,
  DetectDominantLanguageRequestFilterSensitiveLog,
  DetectDominantLanguageResponse,
  DetectDominantLanguageResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DetectDominantLanguageCommand, se_DetectDominantLanguageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetectDominantLanguageCommand}.
 */
export interface DetectDominantLanguageCommandInput extends DetectDominantLanguageRequest {}
/**
 * @public
 *
 * The output of {@link DetectDominantLanguageCommand}.
 */
export interface DetectDominantLanguageCommandOutput extends DetectDominantLanguageResponse, __MetadataBearer {}

/**
 * <p>Determines the dominant language of the input text. For a list of languages that Amazon
 *       Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectDominantLanguageCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectDominantLanguageCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // DetectDominantLanguageRequest
 *   Text: "STRING_VALUE", // required
 * };
 * const command = new DetectDominantLanguageCommand(input);
 * const response = await client.send(command);
 * // { // DetectDominantLanguageResponse
 * //   Languages: [ // ListOfDominantLanguages
 * //     { // DominantLanguage
 * //       LanguageCode: "STRING_VALUE",
 * //       Score: Number("float"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DetectDominantLanguageCommandInput - {@link DetectDominantLanguageCommandInput}
 * @returns {@link DetectDominantLanguageCommandOutput}
 * @see {@link DetectDominantLanguageCommandInput} for command's `input` shape.
 * @see {@link DetectDominantLanguageCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TextSizeLimitExceededException} (client fault)
 *  <p>The size of the input text exceeds the limit. Use a smaller document.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class DetectDominantLanguageCommand extends $Command
  .classBuilder<
    DetectDominantLanguageCommandInput,
    DetectDominantLanguageCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "DetectDominantLanguage", {})
  .n("ComprehendClient", "DetectDominantLanguageCommand")
  .f(DetectDominantLanguageRequestFilterSensitiveLog, DetectDominantLanguageResponseFilterSensitiveLog)
  .ser(se_DetectDominantLanguageCommand)
  .de(de_DetectDominantLanguageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetectDominantLanguageRequest;
      output: DetectDominantLanguageResponse;
    };
    sdk: {
      input: DetectDominantLanguageCommandInput;
      output: DetectDominantLanguageCommandOutput;
    };
  };
}
