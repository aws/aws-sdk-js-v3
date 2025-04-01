// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTextTranslationJobsRequest, ListTextTranslationJobsResponse } from "../models/models_0";
import { de_ListTextTranslationJobsCommand, se_ListTextTranslationJobsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTextTranslationJobsCommand}.
 */
export interface ListTextTranslationJobsCommandInput extends ListTextTranslationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListTextTranslationJobsCommand}.
 */
export interface ListTextTranslationJobsCommandOutput extends ListTextTranslationJobsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the batch translation jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListTextTranslationJobsCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListTextTranslationJobsCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const input = { // ListTextTranslationJobsRequest
 *   Filter: { // TextTranslationJobFilter
 *     JobName: "STRING_VALUE",
 *     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERROR" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 *     SubmittedBeforeTime: new Date("TIMESTAMP"),
 *     SubmittedAfterTime: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTextTranslationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListTextTranslationJobsResponse
 * //   TextTranslationJobPropertiesList: [ // TextTranslationJobPropertiesList
 * //     { // TextTranslationJobProperties
 * //       JobId: "STRING_VALUE",
 * //       JobName: "STRING_VALUE",
 * //       JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "COMPLETED_WITH_ERROR" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //       JobDetails: { // JobDetails
 * //         TranslatedDocumentsCount: Number("int"),
 * //         DocumentsWithErrorsCount: Number("int"),
 * //         InputDocumentsCount: Number("int"),
 * //       },
 * //       SourceLanguageCode: "STRING_VALUE",
 * //       TargetLanguageCodes: [ // TargetLanguageCodeStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       TerminologyNames: [ // ResourceNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       ParallelDataNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Message: "STRING_VALUE",
 * //       SubmittedTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       InputDataConfig: { // InputDataConfig
 * //         S3Uri: "STRING_VALUE", // required
 * //         ContentType: "STRING_VALUE", // required
 * //       },
 * //       OutputDataConfig: { // OutputDataConfig
 * //         S3Uri: "STRING_VALUE", // required
 * //         EncryptionKey: { // EncryptionKey
 * //           Type: "KMS", // required
 * //           Id: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       Settings: { // TranslationSettings
 * //         Formality: "FORMAL" || "INFORMAL",
 * //         Profanity: "MASK",
 * //         Brevity: "ON",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTextTranslationJobsCommandInput - {@link ListTextTranslationJobsCommandInput}
 * @returns {@link ListTextTranslationJobsCommandOutput}
 * @see {@link ListTextTranslationJobsCommandInput} for command's `input` shape.
 * @see {@link ListTextTranslationJobsCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidFilterException} (client fault)
 *  <p>The filter specified for the operation is not valid. Specify a different filter.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p> The request that you made is not valid. Check your request to determine why it's not
 *       valid and then retry the request. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 *
 * @public
 */
export class ListTextTranslationJobsCommand extends $Command
  .classBuilder<
    ListTextTranslationJobsCommandInput,
    ListTextTranslationJobsCommandOutput,
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
  .s("AWSShineFrontendService_20170701", "ListTextTranslationJobs", {})
  .n("TranslateClient", "ListTextTranslationJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListTextTranslationJobsCommand)
  .de(de_ListTextTranslationJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTextTranslationJobsRequest;
      output: ListTextTranslationJobsResponse;
    };
    sdk: {
      input: ListTextTranslationJobsCommandInput;
      output: ListTextTranslationJobsCommandOutput;
    };
  };
}
