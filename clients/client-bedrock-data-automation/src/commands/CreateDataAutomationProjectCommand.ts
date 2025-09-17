// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockDataAutomationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockDataAutomationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateDataAutomationProjectRequest,
  CreateDataAutomationProjectRequestFilterSensitiveLog,
  CreateDataAutomationProjectResponse,
} from "../models/models_0";
import {
  de_CreateDataAutomationProjectCommand,
  se_CreateDataAutomationProjectCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataAutomationProjectCommand}.
 */
export interface CreateDataAutomationProjectCommandInput extends CreateDataAutomationProjectRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataAutomationProjectCommand}.
 */
export interface CreateDataAutomationProjectCommandOutput
  extends CreateDataAutomationProjectResponse,
    __MetadataBearer {}

/**
 * Creates an Amazon Bedrock Data Automation Project
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, CreateDataAutomationProjectCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, CreateDataAutomationProjectCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // CreateDataAutomationProjectRequest
 *   projectName: "STRING_VALUE", // required
 *   projectDescription: "STRING_VALUE",
 *   projectStage: "DEVELOPMENT" || "LIVE",
 *   standardOutputConfiguration: { // StandardOutputConfiguration
 *     document: { // DocumentStandardOutputConfiguration
 *       extraction: { // DocumentStandardExtraction
 *         granularity: { // DocumentExtractionGranularity
 *           types: [ // DocumentExtractionGranularityTypes
 *             "DOCUMENT" || "PAGE" || "ELEMENT" || "WORD" || "LINE",
 *           ],
 *         },
 *         boundingBox: { // DocumentBoundingBox
 *           state: "ENABLED" || "DISABLED", // required
 *         },
 *       },
 *       generativeField: { // DocumentStandardGenerativeField
 *         state: "ENABLED" || "DISABLED", // required
 *       },
 *       outputFormat: { // DocumentOutputFormat
 *         textFormat: { // DocumentOutputTextFormat
 *           types: [ // DocumentOutputTextFormatTypes
 *             "PLAIN_TEXT" || "MARKDOWN" || "HTML" || "CSV",
 *           ],
 *         },
 *         additionalFileFormat: { // DocumentOutputAdditionalFileFormat
 *           state: "ENABLED" || "DISABLED", // required
 *         },
 *       },
 *     },
 *     image: { // ImageStandardOutputConfiguration
 *       extraction: { // ImageStandardExtraction
 *         category: { // ImageExtractionCategory
 *           state: "ENABLED" || "DISABLED", // required
 *           types: [ // ImageExtractionCategoryTypes
 *             "CONTENT_MODERATION" || "TEXT_DETECTION" || "LOGOS",
 *           ],
 *         },
 *         boundingBox: { // ImageBoundingBox
 *           state: "ENABLED" || "DISABLED", // required
 *         },
 *       },
 *       generativeField: { // ImageStandardGenerativeField
 *         state: "ENABLED" || "DISABLED", // required
 *         types: [ // ImageStandardGenerativeFieldTypes
 *           "IMAGE_SUMMARY" || "IAB",
 *         ],
 *       },
 *     },
 *     video: { // VideoStandardOutputConfiguration
 *       extraction: { // VideoStandardExtraction
 *         category: { // VideoExtractionCategory
 *           state: "ENABLED" || "DISABLED", // required
 *           types: [ // VideoExtractionCategoryTypes
 *             "CONTENT_MODERATION" || "TEXT_DETECTION" || "TRANSCRIPT" || "LOGOS",
 *           ],
 *         },
 *         boundingBox: { // VideoBoundingBox
 *           state: "ENABLED" || "DISABLED", // required
 *         },
 *       },
 *       generativeField: { // VideoStandardGenerativeField
 *         state: "ENABLED" || "DISABLED", // required
 *         types: [ // VideoStandardGenerativeFieldTypes
 *           "VIDEO_SUMMARY" || "IAB" || "CHAPTER_SUMMARY",
 *         ],
 *       },
 *     },
 *     audio: { // AudioStandardOutputConfiguration
 *       extraction: { // AudioStandardExtraction
 *         category: { // AudioExtractionCategory
 *           state: "ENABLED" || "DISABLED", // required
 *           types: [ // AudioExtractionCategoryTypes
 *             "AUDIO_CONTENT_MODERATION" || "TRANSCRIPT" || "TOPIC_CONTENT_MODERATION",
 *           ],
 *         },
 *       },
 *       generativeField: { // AudioStandardGenerativeField
 *         state: "ENABLED" || "DISABLED", // required
 *         types: [ // AudioStandardGenerativeFieldTypes
 *           "AUDIO_SUMMARY" || "IAB" || "TOPIC_SUMMARY",
 *         ],
 *       },
 *     },
 *   },
 *   customOutputConfiguration: { // CustomOutputConfiguration
 *     blueprints: [ // BlueprintItems
 *       { // BlueprintItem
 *         blueprintArn: "STRING_VALUE", // required
 *         blueprintVersion: "STRING_VALUE",
 *         blueprintStage: "DEVELOPMENT" || "LIVE",
 *       },
 *     ],
 *   },
 *   overrideConfiguration: { // OverrideConfiguration
 *     document: { // DocumentOverrideConfiguration
 *       splitter: { // SplitterConfiguration
 *         state: "ENABLED" || "DISABLED",
 *       },
 *       modalityProcessing: { // ModalityProcessingConfiguration
 *         state: "ENABLED" || "DISABLED",
 *       },
 *     },
 *     image: { // ImageOverrideConfiguration
 *       modalityProcessing: {
 *         state: "ENABLED" || "DISABLED",
 *       },
 *     },
 *     video: { // VideoOverrideConfiguration
 *       modalityProcessing: {
 *         state: "ENABLED" || "DISABLED",
 *       },
 *     },
 *     audio: { // AudioOverrideConfiguration
 *       modalityProcessing: {
 *         state: "ENABLED" || "DISABLED",
 *       },
 *     },
 *     modalityRouting: { // ModalityRoutingConfiguration
 *       jpeg: "IMAGE" || "DOCUMENT" || "AUDIO" || "VIDEO",
 *       png: "IMAGE" || "DOCUMENT" || "AUDIO" || "VIDEO",
 *       mp4: "IMAGE" || "DOCUMENT" || "AUDIO" || "VIDEO",
 *       mov: "IMAGE" || "DOCUMENT" || "AUDIO" || "VIDEO",
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE", // required
 *     kmsEncryptionContext: { // KmsEncryptionContext
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDataAutomationProjectCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataAutomationProjectResponse
 * //   projectArn: "STRING_VALUE", // required
 * //   projectStage: "DEVELOPMENT" || "LIVE",
 * //   status: "COMPLETED" || "IN_PROGRESS" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateDataAutomationProjectCommandInput - {@link CreateDataAutomationProjectCommandInput}
 * @returns {@link CreateDataAutomationProjectCommandOutput}
 * @see {@link CreateDataAutomationProjectCommandInput} for command's `input` shape.
 * @see {@link CreateDataAutomationProjectCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link ConflictException} (client fault)
 *  This exception is thrown when there is a conflict performing an operation
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  This exception is thrown when a request is made beyond the service quota
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
export class CreateDataAutomationProjectCommand extends $Command
  .classBuilder<
    CreateDataAutomationProjectCommandInput,
    CreateDataAutomationProjectCommandOutput,
    BedrockDataAutomationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockDataAutomationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockKeystoneBuildTimeService", "CreateDataAutomationProject", {})
  .n("BedrockDataAutomationClient", "CreateDataAutomationProjectCommand")
  .f(CreateDataAutomationProjectRequestFilterSensitiveLog, void 0)
  .ser(se_CreateDataAutomationProjectCommand)
  .de(de_CreateDataAutomationProjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataAutomationProjectRequest;
      output: CreateDataAutomationProjectResponse;
    };
    sdk: {
      input: CreateDataAutomationProjectCommandInput;
      output: CreateDataAutomationProjectCommandOutput;
    };
  };
}
