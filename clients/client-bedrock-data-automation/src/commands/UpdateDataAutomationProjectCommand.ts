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
  UpdateDataAutomationProjectRequest,
  UpdateDataAutomationProjectRequestFilterSensitiveLog,
  UpdateDataAutomationProjectResponse,
} from "../models/models_0";
import {
  de_UpdateDataAutomationProjectCommand,
  se_UpdateDataAutomationProjectCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataAutomationProjectCommand}.
 */
export interface UpdateDataAutomationProjectCommandInput extends UpdateDataAutomationProjectRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataAutomationProjectCommand}.
 */
export interface UpdateDataAutomationProjectCommandOutput
  extends UpdateDataAutomationProjectResponse,
    __MetadataBearer {}

/**
 * Updates an existing Amazon Bedrock Data Automation Project
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, UpdateDataAutomationProjectCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, UpdateDataAutomationProjectCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // UpdateDataAutomationProjectRequest
 *   projectArn: "STRING_VALUE", // required
 *   projectStage: "DEVELOPMENT" || "LIVE",
 *   projectDescription: "STRING_VALUE",
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
 *     },
 *   },
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE", // required
 *     kmsEncryptionContext: { // KmsEncryptionContext
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateDataAutomationProjectCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataAutomationProjectResponse
 * //   projectArn: "STRING_VALUE", // required
 * //   projectStage: "DEVELOPMENT" || "LIVE",
 * //   status: "COMPLETED" || "IN_PROGRESS" || "FAILED",
 * // };
 *
 * ```
 *
 * @param UpdateDataAutomationProjectCommandInput - {@link UpdateDataAutomationProjectCommandInput}
 * @returns {@link UpdateDataAutomationProjectCommandOutput}
 * @see {@link UpdateDataAutomationProjectCommandInput} for command's `input` shape.
 * @see {@link UpdateDataAutomationProjectCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  This exception is thrown when a resource referenced by the operation does not exist
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
export class UpdateDataAutomationProjectCommand extends $Command
  .classBuilder<
    UpdateDataAutomationProjectCommandInput,
    UpdateDataAutomationProjectCommandOutput,
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
  .s("AmazonBedrockKeystoneBuildTimeService", "UpdateDataAutomationProject", {})
  .n("BedrockDataAutomationClient", "UpdateDataAutomationProjectCommand")
  .f(UpdateDataAutomationProjectRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateDataAutomationProjectCommand)
  .de(de_UpdateDataAutomationProjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataAutomationProjectRequest;
      output: UpdateDataAutomationProjectResponse;
    };
    sdk: {
      input: UpdateDataAutomationProjectCommandInput;
      output: UpdateDataAutomationProjectCommandOutput;
    };
  };
}
