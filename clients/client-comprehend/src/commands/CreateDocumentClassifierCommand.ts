// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDocumentClassifierRequest, CreateDocumentClassifierResponse } from "../models/models_0";
import { CreateDocumentClassifier } from "../schemas/schemas_3_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDocumentClassifierCommand}.
 */
export interface CreateDocumentClassifierCommandInput extends CreateDocumentClassifierRequest {}
/**
 * @public
 *
 * The output of {@link CreateDocumentClassifierCommand}.
 */
export interface CreateDocumentClassifierCommandOutput extends CreateDocumentClassifierResponse, __MetadataBearer {}

/**
 * <p>Creates a new document classifier that you can use to categorize documents. To create a
 *       classifier, you provide a set of training documents that are labeled with the categories that you
 *       want to use. For more information, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html">Training classifier models</a>
 *       in the Comprehend Developer Guide.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, CreateDocumentClassifierCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, CreateDocumentClassifierCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // CreateDocumentClassifierRequest
 *   DocumentClassifierName: "STRING_VALUE", // required
 *   VersionName: "STRING_VALUE",
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   InputDataConfig: { // DocumentClassifierInputDataConfig
 *     DataFormat: "COMPREHEND_CSV" || "AUGMENTED_MANIFEST",
 *     S3Uri: "STRING_VALUE",
 *     TestS3Uri: "STRING_VALUE",
 *     LabelDelimiter: "STRING_VALUE",
 *     AugmentedManifests: [ // DocumentClassifierAugmentedManifestsList
 *       { // AugmentedManifestsListItem
 *         S3Uri: "STRING_VALUE", // required
 *         Split: "TRAIN" || "TEST",
 *         AttributeNames: [ // AttributeNamesList // required
 *           "STRING_VALUE",
 *         ],
 *         AnnotationDataS3Uri: "STRING_VALUE",
 *         SourceDocumentsS3Uri: "STRING_VALUE",
 *         DocumentType: "PLAIN_TEXT_DOCUMENT" || "SEMI_STRUCTURED_DOCUMENT",
 *       },
 *     ],
 *     DocumentType: "PLAIN_TEXT_DOCUMENT" || "SEMI_STRUCTURED_DOCUMENT",
 *     Documents: { // DocumentClassifierDocuments
 *       S3Uri: "STRING_VALUE", // required
 *       TestS3Uri: "STRING_VALUE",
 *     },
 *     DocumentReaderConfig: { // DocumentReaderConfig
 *       DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 *       DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 *       FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 *         "TABLES" || "FORMS",
 *       ],
 *     },
 *   },
 *   OutputDataConfig: { // DocumentClassifierOutputDataConfig
 *     S3Uri: "STRING_VALUE",
 *     KmsKeyId: "STRING_VALUE",
 *     FlywheelStatsS3Prefix: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 *   VolumeKmsKeyId: "STRING_VALUE",
 *   VpcConfig: { // VpcConfig
 *     SecurityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // Subnets // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Mode: "MULTI_CLASS" || "MULTI_LABEL",
 *   ModelKmsKeyId: "STRING_VALUE",
 *   ModelPolicy: "STRING_VALUE",
 * };
 * const command = new CreateDocumentClassifierCommand(input);
 * const response = await client.send(command);
 * // { // CreateDocumentClassifierResponse
 * //   DocumentClassifierArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDocumentClassifierCommandInput - {@link CreateDocumentClassifierCommandInput}
 * @returns {@link CreateDocumentClassifierCommandOutput}
 * @see {@link CreateDocumentClassifierCommandInput} for command's `input` shape.
 * @see {@link CreateDocumentClassifierCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link KmsKeyValidationException} (client fault)
 *  <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and
 *       re-enter it.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The maximum number of resources per account has been exceeded. Review the resources, and
 *       then try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per
 *       resource). The maximum number of tags includes both existing tags and those included in your
 *       current request. </p>
 *
 * @throws {@link UnsupportedLanguageException} (client fault)
 *  <p>Amazon Comprehend can't process the language of the input text. For a list of supported languages,
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/supported-languages.html">Supported languages</a> in the Comprehend Developer Guide.
 *     </p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class CreateDocumentClassifierCommand extends $Command
  .classBuilder<
    CreateDocumentClassifierCommandInput,
    CreateDocumentClassifierCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "CreateDocumentClassifier", {})
  .n("ComprehendClient", "CreateDocumentClassifierCommand")
  .sc(CreateDocumentClassifier)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDocumentClassifierRequest;
      output: CreateDocumentClassifierResponse;
    };
    sdk: {
      input: CreateDocumentClassifierCommandInput;
      output: CreateDocumentClassifierCommandOutput;
    };
  };
}
