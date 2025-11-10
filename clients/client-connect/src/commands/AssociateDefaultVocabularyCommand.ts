// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateDefaultVocabularyRequest, AssociateDefaultVocabularyResponse } from "../models/models_0";
import { AssociateDefaultVocabulary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateDefaultVocabularyCommand}.
 */
export interface AssociateDefaultVocabularyCommandInput extends AssociateDefaultVocabularyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDefaultVocabularyCommand}.
 */
export interface AssociateDefaultVocabularyCommandOutput extends AssociateDefaultVocabularyResponse, __MetadataBearer {}

/**
 * <p>Associates an existing vocabulary as the default. Contact Lens for Amazon Connect uses the vocabulary in post-call
 *    and real-time analysis sessions for the given language.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateDefaultVocabularyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateDefaultVocabularyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateDefaultVocabularyRequest
 *   InstanceId: "STRING_VALUE", // required
 *   LanguageCode: "ar-AE" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fr-CA" || "fr-FR" || "hi-IN" || "it-IT" || "ja-JP" || "ko-KR" || "pt-BR" || "pt-PT" || "zh-CN" || "en-NZ" || "en-ZA" || "ca-ES" || "da-DK" || "fi-FI" || "id-ID" || "ms-MY" || "nl-NL" || "no-NO" || "pl-PL" || "sv-SE" || "tl-PH", // required
 *   VocabularyId: "STRING_VALUE",
 * };
 * const command = new AssociateDefaultVocabularyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDefaultVocabularyCommandInput - {@link AssociateDefaultVocabularyCommandInput}
 * @returns {@link AssociateDefaultVocabularyCommandOutput}
 * @see {@link AssociateDefaultVocabularyCommandInput} for command's `input` shape.
 * @see {@link AssociateDefaultVocabularyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class AssociateDefaultVocabularyCommand extends $Command
  .classBuilder<
    AssociateDefaultVocabularyCommandInput,
    AssociateDefaultVocabularyCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "AssociateDefaultVocabulary", {})
  .n("ConnectClient", "AssociateDefaultVocabularyCommand")
  .sc(AssociateDefaultVocabulary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDefaultVocabularyRequest;
      output: {};
    };
    sdk: {
      input: AssociateDefaultVocabularyCommandInput;
      output: AssociateDefaultVocabularyCommandOutput;
    };
  };
}
