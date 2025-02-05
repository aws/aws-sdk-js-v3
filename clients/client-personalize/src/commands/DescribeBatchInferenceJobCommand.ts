// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBatchInferenceJobRequest, DescribeBatchInferenceJobResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_DescribeBatchInferenceJobCommand, se_DescribeBatchInferenceJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBatchInferenceJobCommand}.
 */
export interface DescribeBatchInferenceJobCommandInput extends DescribeBatchInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBatchInferenceJobCommand}.
 */
export interface DescribeBatchInferenceJobCommandOutput extends DescribeBatchInferenceJobResponse, __MetadataBearer {}

/**
 * <p>Gets the properties of a batch inference job including name, Amazon Resource Name (ARN),
 *       status, input and output configurations, and the ARN of the solution version used to generate
 *       the recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, DescribeBatchInferenceJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, DescribeBatchInferenceJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PersonalizeClient(config);
 * const input = { // DescribeBatchInferenceJobRequest
 *   batchInferenceJobArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeBatchInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBatchInferenceJobResponse
 * //   batchInferenceJob: { // BatchInferenceJob
 * //     jobName: "STRING_VALUE",
 * //     batchInferenceJobArn: "STRING_VALUE",
 * //     filterArn: "STRING_VALUE",
 * //     failureReason: "STRING_VALUE",
 * //     solutionVersionArn: "STRING_VALUE",
 * //     numResults: Number("int"),
 * //     jobInput: { // BatchInferenceJobInput
 * //       s3DataSource: { // S3DataConfig
 * //         path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     jobOutput: { // BatchInferenceJobOutput
 * //       s3DataDestination: {
 * //         path: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     batchInferenceJobConfig: { // BatchInferenceJobConfig
 * //       itemExplorationConfig: { // HyperParameters
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     roleArn: "STRING_VALUE",
 * //     batchInferenceJobMode: "BATCH_INFERENCE" || "THEME_GENERATION",
 * //     themeGenerationConfig: { // ThemeGenerationConfig
 * //       fieldsForThemeGeneration: { // FieldsForThemeGeneration
 * //         itemName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     status: "STRING_VALUE",
 * //     creationDateTime: new Date("TIMESTAMP"),
 * //     lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBatchInferenceJobCommandInput - {@link DescribeBatchInferenceJobCommandInput}
 * @returns {@link DescribeBatchInferenceJobCommandOutput}
 * @see {@link DescribeBatchInferenceJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBatchInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 * @public
 */
export class DescribeBatchInferenceJobCommand extends $Command
  .classBuilder<
    DescribeBatchInferenceJobCommandInput,
    DescribeBatchInferenceJobCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPersonalize", "DescribeBatchInferenceJob", {})
  .n("PersonalizeClient", "DescribeBatchInferenceJobCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBatchInferenceJobCommand)
  .de(de_DescribeBatchInferenceJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBatchInferenceJobRequest;
      output: DescribeBatchInferenceJobResponse;
    };
    sdk: {
      input: DescribeBatchInferenceJobCommandInput;
      output: DescribeBatchInferenceJobCommandOutput;
    };
  };
}
