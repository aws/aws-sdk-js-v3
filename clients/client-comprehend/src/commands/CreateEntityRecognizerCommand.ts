// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateEntityRecognizerRequest, CreateEntityRecognizerResponse } from "../models/models_0";
import { CreateEntityRecognizer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEntityRecognizerCommand}.
 */
export interface CreateEntityRecognizerCommandInput extends CreateEntityRecognizerRequest {}
/**
 * @public
 *
 * The output of {@link CreateEntityRecognizerCommand}.
 */
export interface CreateEntityRecognizerCommandOutput extends CreateEntityRecognizerResponse, __MetadataBearer {}

/**
 * <p>Creates an entity recognizer using submitted files. After your
 *         <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the
 *         <code>DescribeEntityRecognizer</code> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, CreateEntityRecognizerCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, CreateEntityRecognizerCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // CreateEntityRecognizerRequest
 *   RecognizerName: "STRING_VALUE", // required
 *   VersionName: "STRING_VALUE",
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   InputDataConfig: { // EntityRecognizerInputDataConfig
 *     DataFormat: "COMPREHEND_CSV" || "AUGMENTED_MANIFEST",
 *     EntityTypes: [ // EntityTypesList // required
 *       { // EntityTypesListItem
 *         Type: "STRING_VALUE", // required
 *       },
 *     ],
 *     Documents: { // EntityRecognizerDocuments
 *       S3Uri: "STRING_VALUE", // required
 *       TestS3Uri: "STRING_VALUE",
 *       InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 *     },
 *     Annotations: { // EntityRecognizerAnnotations
 *       S3Uri: "STRING_VALUE", // required
 *       TestS3Uri: "STRING_VALUE",
 *     },
 *     EntityList: { // EntityRecognizerEntityList
 *       S3Uri: "STRING_VALUE", // required
 *     },
 *     AugmentedManifests: [ // EntityRecognizerAugmentedManifestsList
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
 *   ModelKmsKeyId: "STRING_VALUE",
 *   ModelPolicy: "STRING_VALUE",
 * };
 * const command = new CreateEntityRecognizerCommand(input);
 * const response = await client.send(command);
 * // { // CreateEntityRecognizerResponse
 * //   EntityRecognizerArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEntityRecognizerCommandInput - {@link CreateEntityRecognizerCommandInput}
 * @returns {@link CreateEntityRecognizerCommandOutput}
 * @see {@link CreateEntityRecognizerCommandInput} for command's `input` shape.
 * @see {@link CreateEntityRecognizerCommandOutput} for command's `response` shape.
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
export class CreateEntityRecognizerCommand extends $Command
  .classBuilder<
    CreateEntityRecognizerCommandInput,
    CreateEntityRecognizerCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "CreateEntityRecognizer", {})
  .n("ComprehendClient", "CreateEntityRecognizerCommand")
  .sc(CreateEntityRecognizer$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEntityRecognizerRequest;
      output: CreateEntityRecognizerResponse;
    };
    sdk: {
      input: CreateEntityRecognizerCommandInput;
      output: CreateEntityRecognizerCommandOutput;
    };
  };
}
