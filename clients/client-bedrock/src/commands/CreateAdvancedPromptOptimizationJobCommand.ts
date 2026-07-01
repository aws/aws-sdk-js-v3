// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateAdvancedPromptOptimizationJobRequest,
  CreateAdvancedPromptOptimizationJobResponse,
} from "../models/models_0";
import { CreateAdvancedPromptOptimizationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAdvancedPromptOptimizationJobCommand}.
 */
export interface CreateAdvancedPromptOptimizationJobCommandInput extends CreateAdvancedPromptOptimizationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateAdvancedPromptOptimizationJobCommand}.
 */
export interface CreateAdvancedPromptOptimizationJobCommandOutput extends CreateAdvancedPromptOptimizationJobResponse, __MetadataBearer {}

/**
 * <p>Creates an advanced prompt optimization job. The job optimizes your prompt templates for specific models using your evaluation dataset and criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateAdvancedPromptOptimizationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateAdvancedPromptOptimizationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // CreateAdvancedPromptOptimizationJobRequest
 *   jobName: "STRING_VALUE", // required
 *   jobDescription: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 *   inputConfig: { // AdvancedPromptOptimizationInputConfig
 *     s3Uri: "STRING_VALUE", // required
 *   },
 *   outputConfig: { // AdvancedPromptOptimizationOutputConfig
 *     s3Uri: "STRING_VALUE", // required
 *   },
 *   encryptionKeyArn: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   modelConfigurations: [ // ModelConfigurations // required
 *     { // ModelConfiguration
 *       modelId: "STRING_VALUE", // required
 *       inferenceConfig: { // InferenceConfiguration
 *         maxTokens: Number("int"),
 *         temperature: Number("float"),
 *         topP: Number("float"),
 *         stopSequences: [ // NonEmptyStringList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       additionalModelRequestFields: { // AdditionalModelRequestFields
 *         "<keys>": "DOCUMENT_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateAdvancedPromptOptimizationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateAdvancedPromptOptimizationJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAdvancedPromptOptimizationJobCommandInput - {@link CreateAdvancedPromptOptimizationJobCommandInput}
 * @returns {@link CreateAdvancedPromptOptimizationJobCommandOutput}
 * @see {@link CreateAdvancedPromptOptimizationJobCommandInput} for command's `input` shape.
 * @see {@link CreateAdvancedPromptOptimizationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per resource). The maximum number of tags includes both existing tags and those included in your current request. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 *
 * @public
 */
export class CreateAdvancedPromptOptimizationJobCommand extends command<CreateAdvancedPromptOptimizationJobCommandInput, CreateAdvancedPromptOptimizationJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateAdvancedPromptOptimizationJob",
  CreateAdvancedPromptOptimizationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAdvancedPromptOptimizationJobRequest;
      output: CreateAdvancedPromptOptimizationJobResponse;
    };
    sdk: {
      input: CreateAdvancedPromptOptimizationJobCommandInput;
      output: CreateAdvancedPromptOptimizationJobCommandOutput;
    };
  };
}
