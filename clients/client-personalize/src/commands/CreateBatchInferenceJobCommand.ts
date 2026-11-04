// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBatchInferenceJobRequest, CreateBatchInferenceJobResponse } from "../models/models_0";
import { CreateBatchInferenceJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBatchInferenceJobCommand}.
 */
export interface CreateBatchInferenceJobCommandInput extends CreateBatchInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateBatchInferenceJobCommand}.
 */
export interface CreateBatchInferenceJobCommandOutput extends CreateBatchInferenceJobResponse, __MetadataBearer {}

/**
 * Generates batch recommendations based on a list of items or users stored in Amazon S3 and exports the recommendations to an Amazon S3 bucket.
 *
 * To generate batch recommendations, specify the ARN of a solution version and an Amazon S3 URI for the input and output data. For user personalization, popular items, and personalized ranking solutions, the batch inference job generates a list of recommended items for each user ID in the input file. For related items solutions, the job generates a list of recommended items for each item ID in the input file.
 *
 * For more information, see [Creating a batch inference job](https://docs.aws.amazon.com/personalize/latest/dg/getting-batch-recommendations.html).
 *
 * If you use the Similar-Items recipe, Amazon Personalize can add descriptive themes to batch recommendations. To generate themes, set the job's mode to `THEME_GENERATION` and specify the name of the field that contains item names in the input data.
 *
 * For more information about generating themes, see [Batch recommendations with themes from Content Generator](https://docs.aws.amazon.com/personalize/latest/dg/themed-batch-recommendations.html).
 *
 * You can't get batch recommendations with the Trending-Now or Next-Best-Action recipes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateBatchInferenceJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateBatchInferenceJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // CreateBatchInferenceJobRequest
 *   jobName: "STRING_VALUE", // required
 *   solutionVersionArn: "STRING_VALUE", // required
 *   filterArn: "STRING_VALUE",
 *   numResults: Number("int"),
 *   jobInput: { // BatchInferenceJobInput
 *     s3DataSource: { // S3DataConfig
 *       path: "STRING_VALUE", // required
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   jobOutput: { // BatchInferenceJobOutput
 *     s3DataDestination: {
 *       path: "STRING_VALUE", // required
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   batchInferenceJobConfig: { // BatchInferenceJobConfig
 *     itemExplorationConfig: { // HyperParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     rankingInfluence: { // RankingInfluence
 *       "<keys>": Number("double"),
 *     },
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   batchInferenceJobMode: "BATCH_INFERENCE" || "THEME_GENERATION",
 *   themeGenerationConfig: { // ThemeGenerationConfig
 *     fieldsForThemeGeneration: { // FieldsForThemeGeneration
 *       itemName: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateBatchInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateBatchInferenceJobResponse
 * //   batchInferenceJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBatchInferenceJobCommandInput - {@link CreateBatchInferenceJobCommandInput}
 * @returns {@link CreateBatchInferenceJobCommandOutput}
 * @see {@link CreateBatchInferenceJobCommandInput} for command's `input` shape.
 * @see {@link CreateBatchInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of requests per second has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Could not find the specified resource.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * You have exceeded the maximum number of tags you can apply to this resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
 *
 * @public
 */
export class CreateBatchInferenceJobCommand extends command<CreateBatchInferenceJobCommandInput, CreateBatchInferenceJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateBatchInferenceJob",
  CreateBatchInferenceJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBatchInferenceJobRequest;
      output: CreateBatchInferenceJobResponse;
    };
    sdk: {
      input: CreateBatchInferenceJobCommandInput;
      output: CreateBatchInferenceJobCommandOutput;
    };
  };
}
