// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDefaultVocabulariesRequest, ListDefaultVocabulariesResponse } from "../models/models_1";
import { de_ListDefaultVocabulariesCommand, se_ListDefaultVocabulariesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDefaultVocabulariesCommand}.
 */
export interface ListDefaultVocabulariesCommandInput extends ListDefaultVocabulariesRequest {}
/**
 * @public
 *
 * The output of {@link ListDefaultVocabulariesCommand}.
 */
export interface ListDefaultVocabulariesCommandOutput extends ListDefaultVocabulariesResponse, __MetadataBearer {}

/**
 * <p>Lists the default vocabularies for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListDefaultVocabulariesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListDefaultVocabulariesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // ListDefaultVocabulariesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   LanguageCode: "ar-AE" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fr-CA" || "fr-FR" || "hi-IN" || "it-IT" || "ja-JP" || "ko-KR" || "pt-BR" || "pt-PT" || "zh-CN" || "en-NZ" || "en-ZA",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDefaultVocabulariesCommand(input);
 * const response = await client.send(command);
 * // { // ListDefaultVocabulariesResponse
 * //   DefaultVocabularyList: [ // DefaultVocabularyList // required
 * //     { // DefaultVocabulary
 * //       InstanceId: "STRING_VALUE", // required
 * //       LanguageCode: "ar-AE" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fr-CA" || "fr-FR" || "hi-IN" || "it-IT" || "ja-JP" || "ko-KR" || "pt-BR" || "pt-PT" || "zh-CN" || "en-NZ" || "en-ZA", // required
 * //       VocabularyId: "STRING_VALUE", // required
 * //       VocabularyName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDefaultVocabulariesCommandInput - {@link ListDefaultVocabulariesCommandInput}
 * @returns {@link ListDefaultVocabulariesCommandOutput}
 * @see {@link ListDefaultVocabulariesCommandInput} for command's `input` shape.
 * @see {@link ListDefaultVocabulariesCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class ListDefaultVocabulariesCommand extends $Command
  .classBuilder<
    ListDefaultVocabulariesCommandInput,
    ListDefaultVocabulariesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ListDefaultVocabularies", {})
  .n("ConnectClient", "ListDefaultVocabulariesCommand")
  .f(void 0, void 0)
  .ser(se_ListDefaultVocabulariesCommand)
  .de(de_ListDefaultVocabulariesCommand)
  .build() {}
