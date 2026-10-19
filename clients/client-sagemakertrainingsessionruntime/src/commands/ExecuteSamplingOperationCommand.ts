// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteSamplingOperationInput, ExecuteSamplingOperationOutput } from "../models/models_0";
import { ExecuteSamplingOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExecuteSamplingOperationCommand}.
 */
export interface ExecuteSamplingOperationCommandInput extends ExecuteSamplingOperationInput {}
/**
 * @public
 *
 * The output of {@link ExecuteSamplingOperationCommand}.
 */
export interface ExecuteSamplingOperationCommandOutput extends ExecuteSamplingOperationOutput, __MetadataBearer {}

/**
 * <p>Submits an asynchronous sampling operation to generate text or compute log-probabilities from the model associated with the specified training session. The session must be in <code>Running</code> or <code>Blocked</code> state. Use <code>GetSamplingOperationResult</code> to poll for the result.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerTrainingSessionRuntimeClient, ExecuteSamplingOperationCommand } from "@aws-sdk/client-sagemakertrainingsessionruntime"; // ES Modules import
 * // const { SageMakerTrainingSessionRuntimeClient, ExecuteSamplingOperationCommand } = require("@aws-sdk/client-sagemakertrainingsessionruntime"); // CommonJS import
 * // import type { SageMakerTrainingSessionRuntimeClientConfig } from "@aws-sdk/client-sagemakertrainingsessionruntime";
 * const config = {}; // type is SageMakerTrainingSessionRuntimeClientConfig
 * const client = new SageMakerTrainingSessionRuntimeClient(config);
 * const input = { // ExecuteSamplingOperationInput
 *   trainingSessionName: "STRING_VALUE", // required
 *   operationConfig: { // SampleOperationConfig Union: only one key present
 *     sample: { // SampleConfig
 *       prompt: { // ModelInput
 *         chunks: [ // EncodedTextChunkList // required
 *           { // EncodedTextChunk
 *             tokens: [ // IntegerList // required
 *               Number("int"),
 *             ],
 *             type: "encoded_text", // required
 *           },
 *         ],
 *       },
 *       numSamples: Number("int"), // required
 *       samplingParams: { // SamplingParams
 *         maxTokens: Number("int"), // required
 *         temperature: Number("double"),
 *         topK: Number("int"),
 *         topP: Number("double"),
 *         seed: Number("int"),
 *         stop: [ // StopSequenceList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       includePromptLogprobs: true || false,
 *       topkPromptLogprobs: Number("int"),
 *       modelPackageArn: "STRING_VALUE",
 *     },
 *     computeLogprobs: { // ComputeLogprobsConfig
 *       prompt: {
 *         chunks: [ // required
 *           {
 *             tokens: [ // required
 *               Number("int"),
 *             ],
 *             type: "encoded_text", // required
 *           },
 *         ],
 *       },
 *       modelPackageArn: "STRING_VALUE",
 *     },
 *     loadWeightsForSampling: { // LoadWeightsForSamplingConfig
 *       modelPackageArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new ExecuteSamplingOperationCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteSamplingOperationOutput
 * //   operationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ExecuteSamplingOperationCommandInput - {@link ExecuteSamplingOperationCommandInput}
 * @returns {@link ExecuteSamplingOperationCommandOutput}
 * @see {@link ExecuteSamplingOperationCommandInput} for command's `input` shape.
 * @see {@link ExecuteSamplingOperationCommandOutput} for command's `response` shape.
 * @see {@link SageMakerTrainingSessionRuntimeClientResolvedConfig | config} for SageMakerTrainingSessionRuntimeClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The training session is in a state that cannot accept new operations. The session must be in <code>Running</code> or <code>Blocked</code> state to accept requests.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Retry the request using exponential backoff.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified training session or operation does not exist, or the operation does not belong to the specified training session.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Retry the request after a brief wait using exponential backoff.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is not valid. Check the request syntax and parameters. Examples include invalid sequence numbers, malformed client tokens, missing required fields, or invalid operation configuration.</p>
 *
 * @throws {@link SageMakerTrainingSessionRuntimeServiceException}
 * <p>Base exception class for all service exceptions from SageMakerTrainingSessionRuntime service.</p>
 *
 *
 * @example Generate samples from a prompt
 * ```javascript
 * // Generates completions for a tokenized prompt using the session's current weights. Generation behavior is controlled by `samplingParams`, and the operation is dispatched asynchronously.
 * const input = {
 *   operationConfig: {
 *     sample: {
 *       numSamples: 4,
 *       prompt: {
 *         chunks: [
 *           {
 *             tokens: [
 *               791,
 *               6864,
 *               315,
 *               9822,
 *               374
 *             ],
 *             type: "encoded_text"
 *           }
 *         ]
 *       },
 *       samplingParams: {
 *         maxTokens: 1024,
 *         temperature: 0.7,
 *         topP: 0.9
 *       }
 *     }
 *   },
 *   trainingSessionName: "my-training-session"
 * };
 * const command = new ExecuteSamplingOperationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   operationId: "b2c3d4e5-6789-01bc-def0-234567890abc"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ExecuteSamplingOperationCommand extends command<ExecuteSamplingOperationCommandInput, ExecuteSamplingOperationCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteSamplingOperation",
  ExecuteSamplingOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteSamplingOperationInput;
      output: ExecuteSamplingOperationOutput;
    };
    sdk: {
      input: ExecuteSamplingOperationCommandInput;
      output: ExecuteSamplingOperationCommandOutput;
    };
  };
}
