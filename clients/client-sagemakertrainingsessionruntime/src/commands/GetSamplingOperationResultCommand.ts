// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSamplingOperationResultInput, GetSamplingOperationResultOutput } from "../models/models_0";
import { GetSamplingOperationResult$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSamplingOperationResultCommand}.
 */
export interface GetSamplingOperationResultCommandInput extends GetSamplingOperationResultInput {}
/**
 * @public
 *
 * The output of {@link GetSamplingOperationResultCommand}.
 */
export interface GetSamplingOperationResultCommandOutput extends GetSamplingOperationResultOutput, __MetadataBearer {}

/**
 * <p>Retrieves the current status and result of a previously submitted sampling operation. Poll this operation until the status reaches a terminal state (Completed or Failed).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerTrainingSessionRuntimeClient, GetSamplingOperationResultCommand } from "@aws-sdk/client-sagemakertrainingsessionruntime"; // ES Modules import
 * // const { SageMakerTrainingSessionRuntimeClient, GetSamplingOperationResultCommand } = require("@aws-sdk/client-sagemakertrainingsessionruntime"); // CommonJS import
 * // import type { SageMakerTrainingSessionRuntimeClientConfig } from "@aws-sdk/client-sagemakertrainingsessionruntime";
 * const config = {}; // type is SageMakerTrainingSessionRuntimeClientConfig
 * const client = new SageMakerTrainingSessionRuntimeClient(config);
 * const input = { // GetSamplingOperationResultInput
 *   trainingSessionName: "STRING_VALUE", // required
 *   operationId: "STRING_VALUE", // required
 * };
 * const command = new GetSamplingOperationResultCommand(input);
 * const response = await client.send(command);
 * // { // GetSamplingOperationResultOutput
 * //   status: "Pending" || "InProgress" || "Completed" || "Failed" || "Skipped", // required
 * //   operationResult: { // SampleOperationResult Union: only one key present
 * //     sample: { // SampleResponse
 * //       sequences: [ // SampledSequenceList // required
 * //         { // SampledSequence
 * //           stopReason: "stop" || "length", // required
 * //           tokens: [ // IntegerList // required
 * //             Number("int"),
 * //           ],
 * //           logprobs: [ // DoubleList
 * //             Number("double"),
 * //           ],
 * //           tokenUsage: { // SampleTokenUsage
 * //             prefill: Number("int"), // required
 * //             decode: Number("int"), // required
 * //           },
 * //         },
 * //       ],
 * //       promptLogprobs: [
 * //         Number("double"),
 * //       ],
 * //       topkPromptLogprobs: [ // TopkPromptLogprobsList
 * //         [ // TokenLogprobList
 * //           { // TokenLogprob
 * //             tokenId: Number("int"), // required
 * //             logprob: Number("double"), // required
 * //           },
 * //         ],
 * //       ],
 * //     },
 * //     computeLogprobs: { // ComputeLogprobsResult
 * //       logprobs: [ // required
 * //         Number("double"),
 * //       ],
 * //     },
 * //     loadWeightsForSampling: {},
 * //   },
 * //   errorDetails: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSamplingOperationResultCommandInput - {@link GetSamplingOperationResultCommandInput}
 * @returns {@link GetSamplingOperationResultCommandOutput}
 * @see {@link GetSamplingOperationResultCommandInput} for command's `input` shape.
 * @see {@link GetSamplingOperationResultCommandOutput} for command's `response` shape.
 * @see {@link SageMakerTrainingSessionRuntimeClientResolvedConfig | config} for SageMakerTrainingSessionRuntimeClient's `config` shape.
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
 * @example Get the result of a sampling operation
 * ```javascript
 * // Retrieves the status and generated sequences for a sampling operation submitted with ExecuteSamplingOperation.
 * const input = {
 *   operationId: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
 *   trainingSessionName: "my-training-session"
 * };
 * const command = new GetSamplingOperationResultCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   operationResult: {
 *     sample: {
 *       sequences: [
 *         {
 *           stopReason: "stop",
 *           tokenUsage: {
 *             decode: 7,
 *             prefill: 5
 *           },
 *           tokens: [
 *             791,
 *             6864,
 *             315,
 *             9822,
 *             374,
 *             12366,
 *             13
 *           ]
 *         }
 *       ]
 *     }
 *   },
 *   status: "Completed"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSamplingOperationResultCommand extends command<GetSamplingOperationResultCommandInput, GetSamplingOperationResultCommandOutput>(
  _ep0,
  _mw0,
  "GetSamplingOperationResult",
  GetSamplingOperationResult$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSamplingOperationResultInput;
      output: GetSamplingOperationResultOutput;
    };
    sdk: {
      input: GetSamplingOperationResultCommandInput;
      output: GetSamplingOperationResultCommandOutput;
    };
  };
}
