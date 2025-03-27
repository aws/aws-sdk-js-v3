// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDocumentClassifierRequest,
  DescribeDocumentClassifierResponse,
  DescribeDocumentClassifierResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeDocumentClassifierCommand, se_DescribeDocumentClassifierCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDocumentClassifierCommand}.
 */
export interface DescribeDocumentClassifierCommandInput extends DescribeDocumentClassifierRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDocumentClassifierCommand}.
 */
export interface DescribeDocumentClassifierCommandOutput extends DescribeDocumentClassifierResponse, __MetadataBearer {}

/**
 * <p>Gets the properties associated with a document classifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeDocumentClassifierCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeDocumentClassifierCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DescribeDocumentClassifierRequest
 *   DocumentClassifierArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDocumentClassifierCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDocumentClassifierResponse
 * //   DocumentClassifierProperties: { // DocumentClassifierProperties
 * //     DocumentClassifierArn: "STRING_VALUE",
 * //     LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW",
 * //     Status: "SUBMITTED" || "TRAINING" || "DELETING" || "STOP_REQUESTED" || "STOPPED" || "IN_ERROR" || "TRAINED" || "TRAINED_WITH_WARNING",
 * //     Message: "STRING_VALUE",
 * //     SubmitTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     TrainingStartTime: new Date("TIMESTAMP"),
 * //     TrainingEndTime: new Date("TIMESTAMP"),
 * //     InputDataConfig: { // DocumentClassifierInputDataConfig
 * //       DataFormat: "COMPREHEND_CSV" || "AUGMENTED_MANIFEST",
 * //       S3Uri: "STRING_VALUE",
 * //       TestS3Uri: "STRING_VALUE",
 * //       LabelDelimiter: "STRING_VALUE",
 * //       AugmentedManifests: [ // DocumentClassifierAugmentedManifestsList
 * //         { // AugmentedManifestsListItem
 * //           S3Uri: "STRING_VALUE", // required
 * //           Split: "TRAIN" || "TEST",
 * //           AttributeNames: [ // AttributeNamesList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           AnnotationDataS3Uri: "STRING_VALUE",
 * //           SourceDocumentsS3Uri: "STRING_VALUE",
 * //           DocumentType: "PLAIN_TEXT_DOCUMENT" || "SEMI_STRUCTURED_DOCUMENT",
 * //         },
 * //       ],
 * //       DocumentType: "PLAIN_TEXT_DOCUMENT" || "SEMI_STRUCTURED_DOCUMENT",
 * //       Documents: { // DocumentClassifierDocuments
 * //         S3Uri: "STRING_VALUE", // required
 * //         TestS3Uri: "STRING_VALUE",
 * //       },
 * //       DocumentReaderConfig: { // DocumentReaderConfig
 * //         DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 * //         DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 * //         FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 * //           "TABLES" || "FORMS",
 * //         ],
 * //       },
 * //     },
 * //     OutputDataConfig: { // DocumentClassifierOutputDataConfig
 * //       S3Uri: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       FlywheelStatsS3Prefix: "STRING_VALUE",
 * //     },
 * //     ClassifierMetadata: { // ClassifierMetadata
 * //       NumberOfLabels: Number("int"),
 * //       NumberOfTrainedDocuments: Number("int"),
 * //       NumberOfTestDocuments: Number("int"),
 * //       EvaluationMetrics: { // ClassifierEvaluationMetrics
 * //         Accuracy: Number("double"),
 * //         Precision: Number("double"),
 * //         Recall: Number("double"),
 * //         F1Score: Number("double"),
 * //         MicroPrecision: Number("double"),
 * //         MicroRecall: Number("double"),
 * //         MicroF1Score: Number("double"),
 * //         HammingLoss: Number("double"),
 * //       },
 * //     },
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     VolumeKmsKeyId: "STRING_VALUE",
 * //     VpcConfig: { // VpcConfig
 * //       SecurityGroupIds: [ // SecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Mode: "MULTI_CLASS" || "MULTI_LABEL",
 * //     ModelKmsKeyId: "STRING_VALUE",
 * //     VersionName: "STRING_VALUE",
 * //     SourceModelArn: "STRING_VALUE",
 * //     FlywheelArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDocumentClassifierCommandInput - {@link DescribeDocumentClassifierCommandInput}
 * @returns {@link DescribeDocumentClassifierCommandOutput}
 * @see {@link DescribeDocumentClassifierCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentClassifierCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 *
 * @public
 */
export class DescribeDocumentClassifierCommand extends $Command
  .classBuilder<
    DescribeDocumentClassifierCommandInput,
    DescribeDocumentClassifierCommandOutput,
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
  .s("Comprehend_20171127", "DescribeDocumentClassifier", {})
  .n("ComprehendClient", "DescribeDocumentClassifierCommand")
  .f(void 0, DescribeDocumentClassifierResponseFilterSensitiveLog)
  .ser(se_DescribeDocumentClassifierCommand)
  .de(de_DescribeDocumentClassifierCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDocumentClassifierRequest;
      output: DescribeDocumentClassifierResponse;
    };
    sdk: {
      input: DescribeDocumentClassifierCommandInput;
      output: DescribeDocumentClassifierCommandOutput;
    };
  };
}
