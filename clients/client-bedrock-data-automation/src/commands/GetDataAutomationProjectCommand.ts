// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockDataAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDataAutomationProjectRequest, GetDataAutomationProjectResponse } from "../models/models_0";
import { GetDataAutomationProject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataAutomationProjectCommand}.
 */
export interface GetDataAutomationProjectCommandInput extends GetDataAutomationProjectRequest {}
/**
 * @public
 *
 * The output of {@link GetDataAutomationProjectCommand}.
 */
export interface GetDataAutomationProjectCommandOutput extends GetDataAutomationProjectResponse, __MetadataBearer {}

/**
 * Gets an existing Amazon Bedrock Data Automation Project
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, GetDataAutomationProjectCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, GetDataAutomationProjectCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // GetDataAutomationProjectRequest
 *   projectArn: "STRING_VALUE", // required
 *   projectStage: "DEVELOPMENT" || "LIVE",
 * };
 * const command = new GetDataAutomationProjectCommand(input);
 * const response = await client.send(command);
 * // { // GetDataAutomationProjectResponse
 * //   project: { // DataAutomationProject
 * //     projectArn: "STRING_VALUE", // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     projectName: "STRING_VALUE", // required
 * //     projectStage: "DEVELOPMENT" || "LIVE",
 * //     projectType: "ASYNC" || "SYNC",
 * //     projectDescription: "STRING_VALUE",
 * //     standardOutputConfiguration: { // StandardOutputConfiguration
 * //       document: { // DocumentStandardOutputConfiguration
 * //         extraction: { // DocumentStandardExtraction
 * //           granularity: { // DocumentExtractionGranularity
 * //             types: [ // DocumentExtractionGranularityTypes
 * //               "DOCUMENT" || "PAGE" || "ELEMENT" || "WORD" || "LINE",
 * //             ],
 * //           },
 * //           boundingBox: { // DocumentBoundingBox
 * //             state: "ENABLED" || "DISABLED", // required
 * //           },
 * //         },
 * //         generativeField: { // DocumentStandardGenerativeField
 * //           state: "ENABLED" || "DISABLED", // required
 * //         },
 * //         outputFormat: { // DocumentOutputFormat
 * //           textFormat: { // DocumentOutputTextFormat
 * //             types: [ // DocumentOutputTextFormatTypes
 * //               "PLAIN_TEXT" || "MARKDOWN" || "HTML" || "CSV",
 * //             ],
 * //           },
 * //           additionalFileFormat: { // DocumentOutputAdditionalFileFormat
 * //             state: "ENABLED" || "DISABLED", // required
 * //           },
 * //         },
 * //       },
 * //       image: { // ImageStandardOutputConfiguration
 * //         extraction: { // ImageStandardExtraction
 * //           category: { // ImageExtractionCategory
 * //             state: "ENABLED" || "DISABLED", // required
 * //             types: [ // ImageExtractionCategoryTypes
 * //               "CONTENT_MODERATION" || "TEXT_DETECTION" || "LOGOS",
 * //             ],
 * //           },
 * //           boundingBox: { // ImageBoundingBox
 * //             state: "ENABLED" || "DISABLED", // required
 * //           },
 * //         },
 * //         generativeField: { // ImageStandardGenerativeField
 * //           state: "ENABLED" || "DISABLED", // required
 * //           types: [ // ImageStandardGenerativeFieldTypes
 * //             "IMAGE_SUMMARY" || "IAB",
 * //           ],
 * //         },
 * //       },
 * //       video: { // VideoStandardOutputConfiguration
 * //         extraction: { // VideoStandardExtraction
 * //           category: { // VideoExtractionCategory
 * //             state: "ENABLED" || "DISABLED", // required
 * //             types: [ // VideoExtractionCategoryTypes
 * //               "CONTENT_MODERATION" || "TEXT_DETECTION" || "TRANSCRIPT" || "LOGOS",
 * //             ],
 * //           },
 * //           boundingBox: { // VideoBoundingBox
 * //             state: "ENABLED" || "DISABLED", // required
 * //           },
 * //         },
 * //         generativeField: { // VideoStandardGenerativeField
 * //           state: "ENABLED" || "DISABLED", // required
 * //           types: [ // VideoStandardGenerativeFieldTypes
 * //             "VIDEO_SUMMARY" || "IAB" || "CHAPTER_SUMMARY",
 * //           ],
 * //         },
 * //       },
 * //       audio: { // AudioStandardOutputConfiguration
 * //         extraction: { // AudioStandardExtraction
 * //           category: { // AudioExtractionCategory
 * //             state: "ENABLED" || "DISABLED", // required
 * //             types: [ // AudioExtractionCategoryTypes
 * //               "AUDIO_CONTENT_MODERATION" || "TRANSCRIPT" || "TOPIC_CONTENT_MODERATION",
 * //             ],
 * //             typeConfiguration: { // AudioExtractionCategoryTypeConfiguration
 * //               transcript: { // TranscriptConfiguration
 * //                 speakerLabeling: { // SpeakerLabelingConfiguration
 * //                   state: "ENABLED" || "DISABLED", // required
 * //                 },
 * //                 channelLabeling: { // ChannelLabelingConfiguration
 * //                   state: "ENABLED" || "DISABLED", // required
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //         generativeField: { // AudioStandardGenerativeField
 * //           state: "ENABLED" || "DISABLED", // required
 * //           types: [ // AudioStandardGenerativeFieldTypes
 * //             "AUDIO_SUMMARY" || "IAB" || "TOPIC_SUMMARY",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     customOutputConfiguration: { // CustomOutputConfiguration
 * //       blueprints: [ // BlueprintItems
 * //         { // BlueprintItem
 * //           blueprintArn: "STRING_VALUE", // required
 * //           blueprintVersion: "STRING_VALUE",
 * //           blueprintStage: "DEVELOPMENT" || "LIVE",
 * //         },
 * //       ],
 * //     },
 * //     overrideConfiguration: { // OverrideConfiguration
 * //       document: { // DocumentOverrideConfiguration
 * //         splitter: { // SplitterConfiguration
 * //           state: "ENABLED" || "DISABLED",
 * //         },
 * //         modalityProcessing: { // ModalityProcessingConfiguration
 * //           state: "ENABLED" || "DISABLED",
 * //         },
 * //         sensitiveDataConfiguration: { // SensitiveDataConfiguration
 * //           detectionMode: "DETECTION" || "DETECTION_AND_REDACTION", // required
 * //           detectionScope: [ // SensitiveDataDetectionScope
 * //             "STANDARD" || "CUSTOM",
 * //           ],
 * //           piiEntitiesConfiguration: { // PIIEntitiesConfiguration
 * //             piiEntityTypes: [ // PIIEntityTypes
 * //               "ALL" || "ADDRESS" || "AGE" || "NAME" || "EMAIL" || "PHONE" || "USERNAME" || "PASSWORD" || "DRIVER_ID" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "PIN" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "IP_ADDRESS" || "MAC_ADDRESS" || "URL" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
 * //             ],
 * //             redactionMaskMode: "PII" || "ENTITY_TYPE",
 * //           },
 * //         },
 * //       },
 * //       image: { // ImageOverrideConfiguration
 * //         modalityProcessing: {
 * //           state: "ENABLED" || "DISABLED",
 * //         },
 * //         sensitiveDataConfiguration: {
 * //           detectionMode: "DETECTION" || "DETECTION_AND_REDACTION", // required
 * //           detectionScope: [
 * //             "STANDARD" || "CUSTOM",
 * //           ],
 * //           piiEntitiesConfiguration: {
 * //             piiEntityTypes: [
 * //               "ALL" || "ADDRESS" || "AGE" || "NAME" || "EMAIL" || "PHONE" || "USERNAME" || "PASSWORD" || "DRIVER_ID" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "PIN" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "IP_ADDRESS" || "MAC_ADDRESS" || "URL" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
 * //             ],
 * //             redactionMaskMode: "PII" || "ENTITY_TYPE",
 * //           },
 * //         },
 * //       },
 * //       video: { // VideoOverrideConfiguration
 * //         modalityProcessing: {
 * //           state: "ENABLED" || "DISABLED",
 * //         },
 * //         sensitiveDataConfiguration: {
 * //           detectionMode: "DETECTION" || "DETECTION_AND_REDACTION", // required
 * //           detectionScope: [
 * //             "STANDARD" || "CUSTOM",
 * //           ],
 * //           piiEntitiesConfiguration: {
 * //             piiEntityTypes: [
 * //               "ALL" || "ADDRESS" || "AGE" || "NAME" || "EMAIL" || "PHONE" || "USERNAME" || "PASSWORD" || "DRIVER_ID" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "PIN" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "IP_ADDRESS" || "MAC_ADDRESS" || "URL" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
 * //             ],
 * //             redactionMaskMode: "PII" || "ENTITY_TYPE",
 * //           },
 * //         },
 * //       },
 * //       audio: { // AudioOverrideConfiguration
 * //         modalityProcessing: {
 * //           state: "ENABLED" || "DISABLED",
 * //         },
 * //         languageConfiguration: { // AudioLanguageConfiguration
 * //           inputLanguages: [ // AudioInputLanguages
 * //             "EN" || "DE" || "ES" || "FR" || "IT" || "PT" || "JA" || "KO" || "CN" || "TW" || "HK",
 * //           ],
 * //           generativeOutputLanguage: "DEFAULT" || "EN",
 * //           identifyMultipleLanguages: true || false,
 * //         },
 * //         sensitiveDataConfiguration: {
 * //           detectionMode: "DETECTION" || "DETECTION_AND_REDACTION", // required
 * //           detectionScope: [
 * //             "STANDARD" || "CUSTOM",
 * //           ],
 * //           piiEntitiesConfiguration: {
 * //             piiEntityTypes: [
 * //               "ALL" || "ADDRESS" || "AGE" || "NAME" || "EMAIL" || "PHONE" || "USERNAME" || "PASSWORD" || "DRIVER_ID" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "CREDIT_DEBIT_CARD_CVV" || "CREDIT_DEBIT_CARD_EXPIRY" || "CREDIT_DEBIT_CARD_NUMBER" || "PIN" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "IP_ADDRESS" || "MAC_ADDRESS" || "URL" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "US_BANK_ACCOUNT_NUMBER" || "US_BANK_ROUTING_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "US_PASSPORT_NUMBER" || "US_SOCIAL_SECURITY_NUMBER" || "CA_HEALTH_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
 * //             ],
 * //             redactionMaskMode: "PII" || "ENTITY_TYPE",
 * //           },
 * //         },
 * //       },
 * //       modalityRouting: { // ModalityRoutingConfiguration
 * //         jpeg: "IMAGE" || "DOCUMENT" || "AUDIO" || "VIDEO",
 * //         png: "IMAGE" || "DOCUMENT" || "AUDIO" || "VIDEO",
 * //         mp4: "IMAGE" || "DOCUMENT" || "AUDIO" || "VIDEO",
 * //         mov: "IMAGE" || "DOCUMENT" || "AUDIO" || "VIDEO",
 * //       },
 * //     },
 * //     status: "COMPLETED" || "IN_PROGRESS" || "FAILED", // required
 * //     kmsKeyId: "STRING_VALUE",
 * //     kmsEncryptionContext: { // KmsEncryptionContext
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataAutomationProjectCommandInput - {@link GetDataAutomationProjectCommandInput}
 * @returns {@link GetDataAutomationProjectCommandOutput}
 * @see {@link GetDataAutomationProjectCommandInput} for command's `input` shape.
 * @see {@link GetDataAutomationProjectCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockDataAutomationServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomation service.</p>
 *
 *
 * @public
 */
export class GetDataAutomationProjectCommand extends $Command
  .classBuilder<
    GetDataAutomationProjectCommandInput,
    GetDataAutomationProjectCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "GetDataAutomationProject", {})
  .n("BedrockDataAutomationClient", "GetDataAutomationProjectCommand")
  .sc(GetDataAutomationProject$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataAutomationProjectRequest;
      output: GetDataAutomationProjectResponse;
    };
    sdk: {
      input: GetDataAutomationProjectCommandInput;
      output: GetDataAutomationProjectCommandOutput;
    };
  };
}
