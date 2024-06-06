// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTextTranslationJobRequest, DescribeTextTranslationJobResponse } from "../models/models_0";
import { de_DescribeTextTranslationJobCommand, se_DescribeTextTranslationJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTextTranslationJobCommand}.
 */
export interface DescribeTextTranslationJobCommandInput extends DescribeTextTranslationJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTextTranslationJobCommand}.
 */
export interface DescribeTextTranslationJobCommandOutput extends DescribeTextTranslationJobResponse, __MetadataBearer {}

/**
 * <p>Gets the properties associated with an asynchronous batch translation job including name,
 *       ID, status, source and target languages, input/output S3 buckets, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, DescribeTextTranslationJobCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, DescribeTextTranslationJobCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const input = { // DescribeTextTranslationJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTextTranslationJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTextTranslationJobResponse
 * //   TextTranslationJobProperties: { // TextTranslationJobProperties
 * //     JobId: "STRING_VALUE",
 * //     JobName: "STRING_VALUE",
 * //     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERROR" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //     JobDetails: { // JobDetails
 * //       TranslatedDocumentsCount: Number("int"),
 * //       DocumentsWithErrorsCount: Number("int"),
 * //       InputDocumentsCount: Number("int"),
 * //     },
 * //     SourceLanguageCode: "STRING_VALUE",
 * //     TargetLanguageCodes: [ // TargetLanguageCodeStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     TerminologyNames: [ // ResourceNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     ParallelDataNames: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Message: "STRING_VALUE",
 * //     SubmittedTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     InputDataConfig: { // InputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       ContentType: "STRING_VALUE", // required
 * //     },
 * //     OutputDataConfig: { // OutputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       EncryptionKey: { // EncryptionKey
 * //         Type: "KMS", // required
 * //         Id: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     Settings: { // TranslationSettings
 * //       Formality: "FORMAL" || "INFORMAL",
 * //       Profanity: "MASK",
 * //       Brevity: "ON",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTextTranslationJobCommandInput - {@link DescribeTextTranslationJobCommandInput}
 * @returns {@link DescribeTextTranslationJobCommandOutput}
 * @see {@link DescribeTextTranslationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTextTranslationJobCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
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
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 * @public
 */
export class DescribeTextTranslationJobCommand extends $Command
  .classBuilder<
    DescribeTextTranslationJobCommandInput,
    DescribeTextTranslationJobCommandOutput,
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
  .s("AWSShineFrontendService_20170701", "DescribeTextTranslationJob", {})
  .n("TranslateClient", "DescribeTextTranslationJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTextTranslationJobCommand)
  .de(de_DescribeTextTranslationJobCommand)
  .build() {}
