// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartTextTranslationJobRequest, StartTextTranslationJobResponse } from "../models/models_0";
import { de_StartTextTranslationJobCommand, se_StartTextTranslationJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartTextTranslationJobCommand}.
 */
export interface StartTextTranslationJobCommandInput extends StartTextTranslationJobRequest {}
/**
 * @public
 *
 * The output of {@link StartTextTranslationJobCommand}.
 */
export interface StartTextTranslationJobCommandOutput extends StartTextTranslationJobResponse, __MetadataBearer {}

/**
 * <p>Starts an asynchronous batch translation job. Use batch translation jobs to
 *       translate large volumes of text across multiple documents at once.
 *       For batch translation, you can input documents with different source languages (specify <code>auto</code>
 *       as the source language). You can specify one
 *       or more target languages. Batch translation translates each input document into each of the target languages.
 *       For more information, see
 *       <a href="https://docs.aws.amazon.com/translate/latest/dg/async.html">Asynchronous batch processing</a>.</p>
 *
 *          <p>Batch translation jobs can be described with the <a>DescribeTextTranslationJob</a> operation, listed with the <a>ListTextTranslationJobs</a> operation, and stopped with the <a>StopTextTranslationJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, StartTextTranslationJobCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, StartTextTranslationJobCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TranslateClient(config);
 * const input = { // StartTextTranslationJobRequest
 *   JobName: "STRING_VALUE",
 *   InputDataConfig: { // InputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     ContentType: "STRING_VALUE", // required
 *   },
 *   OutputDataConfig: { // OutputDataConfig
 *     S3Uri: "STRING_VALUE", // required
 *     EncryptionKey: { // EncryptionKey
 *       Type: "KMS", // required
 *       Id: "STRING_VALUE", // required
 *     },
 *   },
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   SourceLanguageCode: "STRING_VALUE", // required
 *   TargetLanguageCodes: [ // TargetLanguageCodeStringList // required
 *     "STRING_VALUE",
 *   ],
 *   TerminologyNames: [ // ResourceNameList
 *     "STRING_VALUE",
 *   ],
 *   ParallelDataNames: [
 *     "STRING_VALUE",
 *   ],
 *   ClientToken: "STRING_VALUE", // required
 *   Settings: { // TranslationSettings
 *     Formality: "FORMAL" || "INFORMAL",
 *     Profanity: "MASK",
 *     Brevity: "ON",
 *   },
 * };
 * const command = new StartTextTranslationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartTextTranslationJobResponse
 * //   JobId: "STRING_VALUE",
 * //   JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERROR" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * // };
 *
 * ```
 *
 * @param StartTextTranslationJobCommandInput - {@link StartTextTranslationJobCommandInput}
 * @returns {@link StartTextTranslationJobCommandOutput}
 * @see {@link StartTextTranslationJobCommandInput} for command's `input` shape.
 * @see {@link StartTextTranslationJobCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is not valid. Check your request to determine why it's not
 *       valid and then retry the request. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link UnsupportedLanguagePairException} (client fault)
 *  <p>Amazon Translate does not support translation from the language of the source text into the requested
 *       target language. For more information, see <a href="https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html">Supported languages</a>. </p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 * @public
 */
export class StartTextTranslationJobCommand extends $Command
  .classBuilder<
    StartTextTranslationJobCommandInput,
    StartTextTranslationJobCommandOutput,
    TranslateClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TranslateClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShineFrontendService_20170701", "StartTextTranslationJob", {})
  .n("TranslateClient", "StartTextTranslationJobCommand")
  .f(void 0, void 0)
  .ser(se_StartTextTranslationJobCommand)
  .de(de_StartTextTranslationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartTextTranslationJobRequest;
      output: StartTextTranslationJobResponse;
    };
    sdk: {
      input: StartTextTranslationJobCommandInput;
      output: StartTextTranslationJobCommandOutput;
    };
  };
}
