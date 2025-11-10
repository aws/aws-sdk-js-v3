// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVocabularyRequest, DescribeVocabularyResponse } from "../models/models_1";
import { DescribeVocabulary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVocabularyCommand}.
 */
export interface DescribeVocabularyCommandInput extends DescribeVocabularyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVocabularyCommand}.
 */
export interface DescribeVocabularyCommandOutput extends DescribeVocabularyResponse, __MetadataBearer {}

/**
 * <p>Describes the specified vocabulary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeVocabularyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeVocabularyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeVocabularyRequest
 *   InstanceId: "STRING_VALUE", // required
 *   VocabularyId: "STRING_VALUE", // required
 * };
 * const command = new DescribeVocabularyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVocabularyResponse
 * //   Vocabulary: { // Vocabulary
 * //     Name: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     LanguageCode: "ar-AE" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fr-CA" || "fr-FR" || "hi-IN" || "it-IT" || "ja-JP" || "ko-KR" || "pt-BR" || "pt-PT" || "zh-CN" || "en-NZ" || "en-ZA" || "ca-ES" || "da-DK" || "fi-FI" || "id-ID" || "ms-MY" || "nl-NL" || "no-NO" || "pl-PL" || "sv-SE" || "tl-PH", // required
 * //     State: "CREATION_IN_PROGRESS" || "ACTIVE" || "CREATION_FAILED" || "DELETE_IN_PROGRESS", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     FailureReason: "STRING_VALUE",
 * //     Content: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeVocabularyCommandInput - {@link DescribeVocabularyCommandInput}
 * @returns {@link DescribeVocabularyCommandOutput}
 * @see {@link DescribeVocabularyCommandInput} for command's `input` shape.
 * @see {@link DescribeVocabularyCommandOutput} for command's `response` shape.
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
export class DescribeVocabularyCommand extends $Command
  .classBuilder<
    DescribeVocabularyCommandInput,
    DescribeVocabularyCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeVocabulary", {})
  .n("ConnectClient", "DescribeVocabularyCommand")
  .sc(DescribeVocabulary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVocabularyRequest;
      output: DescribeVocabularyResponse;
    };
    sdk: {
      input: DescribeVocabularyCommandInput;
      output: DescribeVocabularyCommandOutput;
    };
  };
}
