// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateVocabularyRequest, CreateVocabularyResponse } from "../models/models_0";
import { CreateVocabulary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVocabularyCommand}.
 */
export interface CreateVocabularyCommandInput extends CreateVocabularyRequest {}
/**
 * @public
 *
 * The output of {@link CreateVocabularyCommand}.
 */
export interface CreateVocabularyCommandOutput extends CreateVocabularyResponse, __MetadataBearer {}

/**
 * <p>Creates a custom vocabulary associated with your Amazon Connect instance. You can set a custom vocabulary to
 *    be your default vocabulary for a given language. Contact Lens for Amazon Connect uses the default vocabulary in post-call and real-time
 *    contact analysis sessions for that language.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateVocabularyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateVocabularyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateVocabularyRequest
 *   ClientToken: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   VocabularyName: "STRING_VALUE", // required
 *   LanguageCode: "ar-AE" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fr-CA" || "fr-FR" || "hi-IN" || "it-IT" || "ja-JP" || "ko-KR" || "pt-BR" || "pt-PT" || "zh-CN" || "en-NZ" || "en-ZA" || "ca-ES" || "da-DK" || "fi-FI" || "id-ID" || "ms-MY" || "nl-NL" || "no-NO" || "pl-PL" || "sv-SE" || "tl-PH", // required
 *   Content: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVocabularyCommand(input);
 * const response = await client.send(command);
 * // { // CreateVocabularyResponse
 * //   VocabularyArn: "STRING_VALUE", // required
 * //   VocabularyId: "STRING_VALUE", // required
 * //   State: "CREATION_IN_PROGRESS" || "ACTIVE" || "CREATION_FAILED" || "DELETE_IN_PROGRESS", // required
 * // };
 *
 * ```
 *
 * @param CreateVocabularyCommandInput - {@link CreateVocabularyCommandInput}
 * @returns {@link CreateVocabularyCommandOutput}
 * @see {@link CreateVocabularyCommandInput} for command's `input` shape.
 * @see {@link CreateVocabularyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class CreateVocabularyCommand extends $Command
  .classBuilder<
    CreateVocabularyCommandInput,
    CreateVocabularyCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateVocabulary", {})
  .n("ConnectClient", "CreateVocabularyCommand")
  .sc(CreateVocabulary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVocabularyRequest;
      output: CreateVocabularyResponse;
    };
    sdk: {
      input: CreateVocabularyCommandInput;
      output: CreateVocabularyCommandOutput;
    };
  };
}
