// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEntityRecognizersRequest, ListEntityRecognizersResponse } from "../models/models_0";
import { ListEntityRecognizers } from "../schemas/schemas_3_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEntityRecognizersCommand}.
 */
export interface ListEntityRecognizersCommandInput extends ListEntityRecognizersRequest {}
/**
 * @public
 *
 * The output of {@link ListEntityRecognizersCommand}.
 */
export interface ListEntityRecognizersCommandOutput extends ListEntityRecognizersResponse, __MetadataBearer {}

/**
 * <p>Gets a list of the properties of all entity recognizers that you created, including
 *       recognizers currently in training. Allows you to filter the list of recognizers based on
 *       criteria such as status and submission time. This call returns up to 500 entity recognizers in
 *       the list, with a default number of 100 recognizers in the list.</p>
 *          <p>The results of this list are not in any particular order. Please get the list and sort
 *       locally if needed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListEntityRecognizersCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListEntityRecognizersCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * // import type { ComprehendClientConfig } from "@aws-sdk/client-comprehend";
 * const config = {}; // type is ComprehendClientConfig
 * const client = new ComprehendClient(config);
 * const input = { // ListEntityRecognizersRequest
 *   Filter: { // EntityRecognizerFilter
 *     Status: "SUBMITTED" || "TRAINING" || "DELETING" || "STOP_REQUESTED" || "STOPPED" || "IN_ERROR" || "TRAINED" || "TRAINED_WITH_WARNING",
 *     RecognizerName: "STRING_VALUE",
 *     SubmitTimeBefore: new Date("TIMESTAMP"),
 *     SubmitTimeAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEntityRecognizersCommand(input);
 * const response = await client.send(command);
 * // { // ListEntityRecognizersResponse
 * //   EntityRecognizerPropertiesList: [ // EntityRecognizerPropertiesList
 * //     { // EntityRecognizerProperties
 * //       EntityRecognizerArn: "STRING_VALUE",
 * //       LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW",
 * //       Status: "SUBMITTED" || "TRAINING" || "DELETING" || "STOP_REQUESTED" || "STOPPED" || "IN_ERROR" || "TRAINED" || "TRAINED_WITH_WARNING",
 * //       Message: "STRING_VALUE",
 * //       SubmitTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       TrainingStartTime: new Date("TIMESTAMP"),
 * //       TrainingEndTime: new Date("TIMESTAMP"),
 * //       InputDataConfig: { // EntityRecognizerInputDataConfig
 * //         DataFormat: "COMPREHEND_CSV" || "AUGMENTED_MANIFEST",
 * //         EntityTypes: [ // EntityTypesList // required
 * //           { // EntityTypesListItem
 * //             Type: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         Documents: { // EntityRecognizerDocuments
 * //           S3Uri: "STRING_VALUE", // required
 * //           TestS3Uri: "STRING_VALUE",
 * //           InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 * //         },
 * //         Annotations: { // EntityRecognizerAnnotations
 * //           S3Uri: "STRING_VALUE", // required
 * //           TestS3Uri: "STRING_VALUE",
 * //         },
 * //         EntityList: { // EntityRecognizerEntityList
 * //           S3Uri: "STRING_VALUE", // required
 * //         },
 * //         AugmentedManifests: [ // EntityRecognizerAugmentedManifestsList
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
 * //       },
 * //       RecognizerMetadata: { // EntityRecognizerMetadata
 * //         NumberOfTrainedDocuments: Number("int"),
 * //         NumberOfTestDocuments: Number("int"),
 * //         EvaluationMetrics: { // EntityRecognizerEvaluationMetrics
 * //           Precision: Number("double"),
 * //           Recall: Number("double"),
 * //           F1Score: Number("double"),
 * //         },
 * //         EntityTypes: [ // EntityRecognizerMetadataEntityTypesList
 * //           { // EntityRecognizerMetadataEntityTypesListItem
 * //             Type: "STRING_VALUE",
 * //             EvaluationMetrics: { // EntityTypesEvaluationMetrics
 * //               Precision: Number("double"),
 * //               Recall: Number("double"),
 * //               F1Score: Number("double"),
 * //             },
 * //             NumberOfTrainMentions: Number("int"),
 * //           },
 * //         ],
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
 * //       ModelKmsKeyId: "STRING_VALUE",
 * //       VersionName: "STRING_VALUE",
 * //       SourceModelArn: "STRING_VALUE",
 * //       FlywheelArn: "STRING_VALUE",
 * //       OutputDataConfig: { // EntityRecognizerOutputDataConfig
 * //         FlywheelStatsS3Prefix: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntityRecognizersCommandInput - {@link ListEntityRecognizersCommandInput}
 * @returns {@link ListEntityRecognizersCommandOutput}
 * @see {@link ListEntityRecognizersCommandInput} for command's `input` shape.
 * @see {@link ListEntityRecognizersCommandOutput} for command's `response` shape.
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
export class ListEntityRecognizersCommand extends $Command
  .classBuilder<
    ListEntityRecognizersCommandInput,
    ListEntityRecognizersCommandOutput,
    ComprehendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ComprehendClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Comprehend_20171127", "ListEntityRecognizers", {})
  .n("ComprehendClient", "ListEntityRecognizersCommand")
  .sc(ListEntityRecognizers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEntityRecognizersRequest;
      output: ListEntityRecognizersResponse;
    };
    sdk: {
      input: ListEntityRecognizersCommandInput;
      output: ListEntityRecognizersCommandOutput;
    };
  };
}
