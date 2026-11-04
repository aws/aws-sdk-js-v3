// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVocabularyRequest, CreateVocabularyResponse } from "../models/models_1";
import { CreateVocabulary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a custom vocabulary associated with your Connect Customer instance. You can set a custom vocabulary to be your default vocabulary for a given language. Contact Lens for Connect Customer uses the default vocabulary in post-call and real-time contact analysis sessions for that language.
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class CreateVocabularyCommand extends command<CreateVocabularyCommandInput, CreateVocabularyCommandOutput>(
  _ep0,
  _mw0,
  "CreateVocabulary",
  CreateVocabulary$
) {
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
