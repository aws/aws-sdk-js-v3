// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExecuteTrainingOperationInput, ExecuteTrainingOperationOutput } from "../models/models_0";
import { ExecuteTrainingOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExecuteTrainingOperationCommand}.
 */
export interface ExecuteTrainingOperationCommandInput extends ExecuteTrainingOperationInput {}
/**
 * @public
 *
 * The output of {@link ExecuteTrainingOperationCommand}.
 */
export interface ExecuteTrainingOperationCommandOutput extends ExecuteTrainingOperationOutput, __MetadataBearer {}

/**
 * <p>Submits an asynchronous training operation to the specified training session. The service executes operations in sequence number order. The session must be in <code>Running</code> or <code>Blocked</code> state. Use <code>GetTrainingOperationResult</code> to poll for the result. Supported operation types: <code>forward</code>, <code>forwardBackward</code>, <code>optimizerStep</code>, <code>saveWeights</code>, <code>saveState</code>, and <code>loadState</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerTrainingSessionRuntimeClient, ExecuteTrainingOperationCommand } from "@aws-sdk/client-sagemakertrainingsessionruntime"; // ES Modules import
 * // const { SageMakerTrainingSessionRuntimeClient, ExecuteTrainingOperationCommand } = require("@aws-sdk/client-sagemakertrainingsessionruntime"); // CommonJS import
 * // import type { SageMakerTrainingSessionRuntimeClientConfig } from "@aws-sdk/client-sagemakertrainingsessionruntime";
 * const config = {}; // type is SageMakerTrainingSessionRuntimeClientConfig
 * const client = new SageMakerTrainingSessionRuntimeClient(config);
 * const input = { // ExecuteTrainingOperationInput
 *   trainingSessionName: "STRING_VALUE", // required
 *   sequenceNumber: Number("int"), // required
 *   clientToken: "STRING_VALUE",
 *   operationConfig: { // OperationConfig Union: only one key present
 *     forward: { // ForwardConfig
 *       lossFnName: "cross_entropy" || "importance_sampling" || "ppo" || "cispo", // required
 *       datumList: [ // DatumList // required
 *         { // Datum
 *           modelInput: { // ModelInput
 *             chunks: [ // EncodedTextChunkList // required
 *               { // EncodedTextChunk
 *                 tokens: [ // IntegerList // required
 *                   Number("int"),
 *                 ],
 *                 type: "encoded_text", // required
 *               },
 *             ],
 *           },
 *           lossFnInputs: { // TensorDataMap
 *             "<keys>": { // TensorData
 *               data: "DOCUMENT_VALUE", // required
 *               dtype: "STRING_VALUE", // required
 *               shape: [
 *                 Number("int"),
 *               ],
 *             },
 *           },
 *         },
 *       ],
 *       lossFnConfig: "DOCUMENT_VALUE",
 *     },
 *     forwardBackward: { // ForwardBackwardConfig
 *       lossFnName: "cross_entropy" || "importance_sampling" || "ppo" || "cispo", // required
 *       datumList: [ // required
 *         {
 *           modelInput: {
 *             chunks: [ // required
 *               {
 *                 tokens: [ // required
 *                   Number("int"),
 *                 ],
 *                 type: "encoded_text", // required
 *               },
 *             ],
 *           },
 *           lossFnInputs: {
 *             "<keys>": {
 *               data: "DOCUMENT_VALUE", // required
 *               dtype: "STRING_VALUE", // required
 *               shape: [
 *                 Number("int"),
 *               ],
 *             },
 *           },
 *         },
 *       ],
 *       lossFnConfig: "DOCUMENT_VALUE",
 *     },
 *     optimizerStep: { // OptimizerStepConfig
 *       adamParamsConfig: { // AdamParamsConfig
 *         learningRate: Number("double"), // required
 *         beta1: Number("double"),
 *         beta2: Number("double"),
 *         eps: Number("double"),
 *         weightDecay: Number("double"),
 *         gradClipNorm: Number("double"),
 *         loraPlusLrRatio: Number("double"),
 *       },
 *     },
 *     saveWeights: { // SaveWeightsConfig
 *       mergeWeights: true || false,
 *       description: "STRING_VALUE",
 *     },
 *     saveState: { // SaveStateConfig
 *       description: "STRING_VALUE",
 *     },
 *     loadState: { // LoadStateConfig
 *       modelPackageArn: "STRING_VALUE", // required
 *       loadOptimizer: true || false, // required
 *     },
 *   },
 * };
 * const command = new ExecuteTrainingOperationCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteTrainingOperationOutput
 * //   operationId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ExecuteTrainingOperationCommandInput - {@link ExecuteTrainingOperationCommandInput}
 * @returns {@link ExecuteTrainingOperationCommandOutput}
 * @see {@link ExecuteTrainingOperationCommandInput} for command's `input` shape.
 * @see {@link ExecuteTrainingOperationCommandOutput} for command's `response` shape.
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
 * @example Run a forward and backward pass
 * ```javascript
 * // Computes gradients for a batch of tokenized prompts and accumulates them into the session. Operations are applied in `sequenceNumber` order, so each call must supply the next number in the sequence.
 * const input = {
 *   operationConfig: {
 *     forwardBackward: {
 *       datumList: [
 *         {
 *           modelInput: {
 *             chunks: [
 *               {
 *                 tokens: [
 *                   791,
 *                   6864,
 *                   315,
 *                   9822,
 *                   374,
 *                   12366
 *                 ],
 *                 type: "encoded_text"
 *               }
 *             ]
 *           }
 *         }
 *       ],
 *       lossFnName: "cross_entropy"
 *     }
 *   },
 *   sequenceNumber: 1,
 *   trainingSessionName: "my-training-session"
 * };
 * const command = new ExecuteTrainingOperationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   operationId: "a1b2c3d4-5678-90ab-cdef-1234567890ab"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ExecuteTrainingOperationCommand extends command<ExecuteTrainingOperationCommandInput, ExecuteTrainingOperationCommandOutput>(
  _ep0,
  _mw0,
  "ExecuteTrainingOperation",
  ExecuteTrainingOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteTrainingOperationInput;
      output: ExecuteTrainingOperationOutput;
    };
    sdk: {
      input: ExecuteTrainingOperationCommandInput;
      output: ExecuteTrainingOperationCommandOutput;
    };
  };
}
