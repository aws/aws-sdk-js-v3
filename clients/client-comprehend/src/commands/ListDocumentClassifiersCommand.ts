// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDocumentClassifiersRequest, ListDocumentClassifiersResponse } from "../models/models_0";
import { ListDocumentClassifiers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDocumentClassifiersCommand}.
 */
export interface ListDocumentClassifiersCommandInput extends ListDocumentClassifiersRequest {}
/**
 * @public
 *
 * The output of {@link ListDocumentClassifiersCommand}.
 */
export interface ListDocumentClassifiersCommandOutput extends ListDocumentClassifiersResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the document classifiers that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListDocumentClassifiersCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListDocumentClassifiersCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListDocumentClassifiersRequest
 *   Filter: { // DocumentClassifierFilter
 *     Status: "SUBMITTED" || "TRAINING" || "DELETING" || "STOP_REQUESTED" || "STOPPED" || "IN_ERROR" || "TRAINED" || "TRAINED_WITH_WARNING",
 *     DocumentClassifierName: "STRING_VALUE",
 *     SubmitTimeBefore: new Date("TIMESTAMP"),
 *     SubmitTimeAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDocumentClassifiersCommand(input);
 * const response = await client.send(command);
 * // { // ListDocumentClassifiersResponse
 * //   DocumentClassifierPropertiesList: [ // DocumentClassifierPropertiesList
 * //     { // DocumentClassifierProperties
 * //       DocumentClassifierArn: "STRING_VALUE",
 * //       LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW",
 * //       Status: "SUBMITTED" || "TRAINING" || "DELETING" || "STOP_REQUESTED" || "STOPPED" || "IN_ERROR" || "TRAINED" || "TRAINED_WITH_WARNING",
 * //       Message: "STRING_VALUE",
 * //       SubmitTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       TrainingStartTime: new Date("TIMESTAMP"),
 * //       TrainingEndTime: new Date("TIMESTAMP"),
 * //       InputDataConfig: { // DocumentClassifierInputDataConfig
 * //         DataFormat: "COMPREHEND_CSV" || "AUGMENTED_MANIFEST",
 * //         S3Uri: "STRING_VALUE",
 * //         TestS3Uri: "STRING_VALUE",
 * //         LabelDelimiter: "STRING_VALUE",
 * //         AugmentedManifests: [ // DocumentClassifierAugmentedManifestsList
 * //           { // AugmentedManifestsListItem
 * //             S3Uri: "STRING_VALUE", // required
 * //             Split: "TRAIN" || "TEST",
 * //             AttributeNames: [ // AttributeNamesList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             AnnotationDataS3Uri: "STRING_VALUE",
 * //             SourceDocumentsS3Uri: "STRING_VALUE",
 * //             DocumentType: "PLAIN_TEXT_DOCUMENT" || "SEMI_STRUCTURED_DOCUMENT",
 * //           },
 * //         ],
 * //         DocumentType: "PLAIN_TEXT_DOCUMENT" || "SEMI_STRUCTURED_DOCUMENT",
 * //         Documents: { // DocumentClassifierDocuments
 * //           S3Uri: "STRING_VALUE", // required
 * //           TestS3Uri: "STRING_VALUE",
 * //         },
 * //         DocumentReaderConfig: { // DocumentReaderConfig
 * //           DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 * //           DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 * //           FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 * //             "TABLES" || "FORMS",
 * //           ],
 * //         },
 * //       },
 * //       OutputDataConfig: { // DocumentClassifierOutputDataConfig
 * //         S3Uri: "STRING_VALUE",
 * //         KmsKeyId: "STRING_VALUE",
 * //         FlywheelStatsS3Prefix: "STRING_VALUE",
 * //       },
 * //       ClassifierMetadata: { // ClassifierMetadata
 * //         NumberOfLabels: Number("int"),
 * //         NumberOfTrainedDocuments: Number("int"),
 * //         NumberOfTestDocuments: Number("int"),
 * //         EvaluationMetrics: { // ClassifierEvaluationMetrics
 * //           Accuracy: Number("double"),
 * //           Precision: Number("double"),
 * //           Recall: Number("double"),
 * //           F1Score: Number("double"),
 * //           MicroPrecision: Number("double"),
 * //           MicroRecall: Number("double"),
 * //           MicroF1Score: Number("double"),
 * //           HammingLoss: Number("double"),
 * //         },
 * //       },
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       VolumeKmsKeyId: "STRING_VALUE",
 * //       VpcConfig: { // VpcConfig
 * //         SecurityGroupIds: [ // SecurityGroupIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Subnets: [ // Subnets // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Mode: "MULTI_CLASS" || "MULTI_LABEL",
 * //       ModelKmsKeyId: "STRING_VALUE",
 * //       VersionName: "STRING_VALUE",
 * //       SourceModelArn: "STRING_VALUE",
 * //       FlywheelArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDocumentClassifiersCommandInput - {@link ListDocumentClassifiersCommandInput}
 * @returns {@link ListDocumentClassifiersCommandOutput}
 * @see {@link ListDocumentClassifiersCommandInput} for command's `input` shape.
 * @see {@link ListDocumentClassifiersCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidFilterException} (client fault)
 *  <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
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
export class ListDocumentClassifiersCommand extends $Command
  .classBuilder<
    ListDocumentClassifiersCommandInput,
    ListDocumentClassifiersCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "ListDocumentClassifiers", {})
  .n("ComprehendClient", "ListDocumentClassifiersCommand")
  .sc(ListDocumentClassifiers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDocumentClassifiersRequest;
      output: ListDocumentClassifiersResponse;
    };
    sdk: {
      input: ListDocumentClassifiersCommandInput;
      output: ListDocumentClassifiersCommandOutput;
    };
  };
}
