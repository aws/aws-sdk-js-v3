// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetAdvancedPromptOptimizationJobRequest,
  GetAdvancedPromptOptimizationJobResponse,
} from "../models/models_0";
import { GetAdvancedPromptOptimizationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAdvancedPromptOptimizationJobCommand}.
 */
export interface GetAdvancedPromptOptimizationJobCommandInput extends GetAdvancedPromptOptimizationJobRequest {}
/**
 * @public
 *
 * The output of {@link GetAdvancedPromptOptimizationJobCommand}.
 */
export interface GetAdvancedPromptOptimizationJobCommandOutput extends GetAdvancedPromptOptimizationJobResponse, __MetadataBearer {}

/**
 * <p>Gets information about an advanced prompt optimization job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetAdvancedPromptOptimizationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetAdvancedPromptOptimizationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * // import type { BedrockClientConfig } from "@aws-sdk/client-bedrock";
 * const config = {}; // type is BedrockClientConfig
 * const client = new BedrockClient(config);
 * const input = { // GetAdvancedPromptOptimizationJobRequest
 *   jobIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetAdvancedPromptOptimizationJobCommand(input);
 * const response = await client.send(command);
 * // { // GetAdvancedPromptOptimizationJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * //   jobName: "STRING_VALUE", // required
 * //   jobDescription: "STRING_VALUE",
 * //   jobStatus: "InProgress" || "Completed" || "Failed" || "PartiallyCompleted" || "Stopping" || "Stopped" || "Deleting", // required
 * //   inputConfig: { // AdvancedPromptOptimizationInputConfig
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * //   outputConfig: { // AdvancedPromptOptimizationOutputConfig
 * //     s3Uri: "STRING_VALUE", // required
 * //   },
 * //   encryptionKeyArn: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"), // required
 * //   lastModifiedTime: new Date("TIMESTAMP"),
 * //   failureMessage: "STRING_VALUE",
 * //   modelConfigurations: [ // ModelConfigurations // required
 * //     { // ModelConfiguration
 * //       modelId: "STRING_VALUE", // required
 * //       inferenceConfig: { // InferenceConfiguration
 * //         maxTokens: Number("int"),
 * //         temperature: Number("float"),
 * //         topP: Number("float"),
 * //         stopSequences: [ // NonEmptyStringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       additionalModelRequestFields: { // AdditionalModelRequestFields
 * //         "<keys>": "DOCUMENT_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAdvancedPromptOptimizationJobCommandInput - {@link GetAdvancedPromptOptimizationJobCommandInput}
 * @returns {@link GetAdvancedPromptOptimizationJobCommandOutput}
 * @see {@link GetAdvancedPromptOptimizationJobCommandInput} for command's `input` shape.
 * @see {@link GetAdvancedPromptOptimizationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
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
export class GetAdvancedPromptOptimizationJobCommand extends command<GetAdvancedPromptOptimizationJobCommandInput, GetAdvancedPromptOptimizationJobCommandOutput>(
  _ep0,
  _mw0,
  "GetAdvancedPromptOptimizationJob",
  GetAdvancedPromptOptimizationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAdvancedPromptOptimizationJobRequest;
      output: GetAdvancedPromptOptimizationJobResponse;
    };
    sdk: {
      input: GetAdvancedPromptOptimizationJobCommandInput;
      output: GetAdvancedPromptOptimizationJobCommandOutput;
    };
  };
}
