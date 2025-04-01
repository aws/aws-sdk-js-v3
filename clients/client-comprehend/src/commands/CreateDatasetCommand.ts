// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/models_0";
import { de_CreateDatasetCommand, se_CreateDatasetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandInput extends CreateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetCommand}.
 */
export interface CreateDatasetCommandOutput extends CreateDatasetResponse, __MetadataBearer {}

/**
 * <p>Creates a dataset to upload training or test data for a model associated with a flywheel.
 *       For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, CreateDatasetCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, CreateDatasetCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // CreateDatasetRequest
 *   FlywheelArn: "STRING_VALUE", // required
 *   DatasetName: "STRING_VALUE", // required
 *   DatasetType: "TRAIN" || "TEST",
 *   Description: "STRING_VALUE",
 *   InputDataConfig: { // DatasetInputDataConfig
 *     AugmentedManifests: [ // DatasetAugmentedManifestsList
 *       { // DatasetAugmentedManifestsListItem
 *         AttributeNames: [ // AttributeNamesList // required
 *           "STRING_VALUE",
 *         ],
 *         S3Uri: "STRING_VALUE", // required
 *         AnnotationDataS3Uri: "STRING_VALUE",
 *         SourceDocumentsS3Uri: "STRING_VALUE",
 *         DocumentType: "PLAIN_TEXT_DOCUMENT" || "SEMI_STRUCTURED_DOCUMENT",
 *       },
 *     ],
 *     DataFormat: "COMPREHEND_CSV" || "AUGMENTED_MANIFEST",
 *     DocumentClassifierInputDataConfig: { // DatasetDocumentClassifierInputDataConfig
 *       S3Uri: "STRING_VALUE", // required
 *       LabelDelimiter: "STRING_VALUE",
 *     },
 *     EntityRecognizerInputDataConfig: { // DatasetEntityRecognizerInputDataConfig
 *       Annotations: { // DatasetEntityRecognizerAnnotations
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *       Documents: { // DatasetEntityRecognizerDocuments
 *         S3Uri: "STRING_VALUE", // required
 *         InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 *       },
 *       EntityList: { // DatasetEntityRecognizerEntityList
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetResponse
 * //   DatasetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDatasetCommandInput - {@link CreateDatasetCommandInput}
 * @returns {@link CreateDatasetCommandOutput}
 * @see {@link CreateDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The maximum number of resources per account has been exceeded. Review the resources, and
 *       then try your request again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per
 *       resource). The maximum number of tags includes both existing tags and those included in your
 *       current request. </p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class CreateDatasetCommand extends $Command
  .classBuilder<
    CreateDatasetCommandInput,
    CreateDatasetCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Comprehend_20171127", "CreateDataset", {})
  .n("ComprehendClient", "CreateDatasetCommand")
  .f(void 0, void 0)
  .ser(se_CreateDatasetCommand)
  .de(de_CreateDatasetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetRequest;
      output: CreateDatasetResponse;
    };
    sdk: {
      input: CreateDatasetCommandInput;
      output: CreateDatasetCommandOutput;
    };
  };
}
