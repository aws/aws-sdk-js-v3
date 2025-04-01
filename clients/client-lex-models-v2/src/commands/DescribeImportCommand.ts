// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeImportRequest, DescribeImportResponse } from "../models/models_1";
import { de_DescribeImportCommand, se_DescribeImportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImportCommand}.
 */
export interface DescribeImportCommandInput extends DescribeImportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImportCommand}.
 */
export interface DescribeImportCommandOutput extends DescribeImportResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specific import.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeImportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeImportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeImportRequest
 *   importId: "STRING_VALUE", // required
 * };
 * const command = new DescribeImportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImportResponse
 * //   importId: "STRING_VALUE",
 * //   resourceSpecification: { // ImportResourceSpecification
 * //     botImportSpecification: { // BotImportSpecification
 * //       botName: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       dataPrivacy: { // DataPrivacy
 * //         childDirected: true || false, // required
 * //       },
 * //       idleSessionTTLInSeconds: Number("int"),
 * //       botTags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       testBotAliasTags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     botLocaleImportSpecification: { // BotLocaleImportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //       nluIntentConfidenceThreshold: Number("double"),
 * //       voiceSettings: { // VoiceSettings
 * //         voiceId: "STRING_VALUE", // required
 * //         engine: "standard" || "neural" || "long-form" || "generative",
 * //       },
 * //     },
 * //     customVocabularyImportSpecification: { // CustomVocabularyImportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //     testSetImportResourceSpecification: { // TestSetImportResourceSpecification
 * //       testSetName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE", // required
 * //       storageLocation: { // TestSetStorageLocation
 * //         s3BucketName: "STRING_VALUE", // required
 * //         s3Path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //       importInputLocation: { // TestSetImportInputLocation
 * //         s3BucketName: "STRING_VALUE", // required
 * //         s3Path: "STRING_VALUE", // required
 * //       },
 * //       modality: "Text" || "Audio", // required
 * //       testSetTags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   importedResourceId: "STRING_VALUE",
 * //   importedResourceName: "STRING_VALUE",
 * //   mergeStrategy: "Overwrite" || "FailOnConflict" || "Append",
 * //   importStatus: "InProgress" || "Completed" || "Failed" || "Deleting",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeImportCommandInput - {@link DescribeImportCommandInput}
 * @returns {@link DescribeImportCommandOutput}
 * @see {@link DescribeImportCommandInput} for command's `input` shape.
 * @see {@link DescribeImportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class DescribeImportCommand extends $Command
  .classBuilder<
    DescribeImportCommandInput,
    DescribeImportCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "DescribeImport", {})
  .n("LexModelsV2Client", "DescribeImportCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImportCommand)
  .de(de_DescribeImportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImportRequest;
      output: DescribeImportResponse;
    };
    sdk: {
      input: DescribeImportCommandInput;
      output: DescribeImportCommandOutput;
    };
  };
}
