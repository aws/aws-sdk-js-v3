// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTrainingOperationResultInput, GetTrainingOperationResultOutput } from "../models/models_0";
import { GetTrainingOperationResult$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrainingOperationResultCommand}.
 */
export interface GetTrainingOperationResultCommandInput extends GetTrainingOperationResultInput {}
/**
 * @public
 *
 * The output of {@link GetTrainingOperationResultCommand}.
 */
export interface GetTrainingOperationResultCommandOutput extends GetTrainingOperationResultOutput, __MetadataBearer {}

/**
 * <p>Retrieves the current status and result of a previously submitted training operation. Poll this operation until the status reaches a terminal state (Completed, Failed, or Skipped).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerTrainingSessionRuntimeClient, GetTrainingOperationResultCommand } from "@aws-sdk/client-sagemakertrainingsessionruntime"; // ES Modules import
 * // const { SageMakerTrainingSessionRuntimeClient, GetTrainingOperationResultCommand } = require("@aws-sdk/client-sagemakertrainingsessionruntime"); // CommonJS import
 * // import type { SageMakerTrainingSessionRuntimeClientConfig } from "@aws-sdk/client-sagemakertrainingsessionruntime";
 * const config = {}; // type is SageMakerTrainingSessionRuntimeClientConfig
 * const client = new SageMakerTrainingSessionRuntimeClient(config);
 * const input = { // GetTrainingOperationResultInput
 *   trainingSessionName: "STRING_VALUE", // required
 *   operationId: "STRING_VALUE", // required
 * };
 * const command = new GetTrainingOperationResultCommand(input);
 * const response = await client.send(command);
 * // { // GetTrainingOperationResultOutput
 * //   status: "Pending" || "InProgress" || "Completed" || "Failed" || "Skipped", // required
 * //   operationResult: { // OperationResult Union: only one key present
 * //     forward: { // ForwardResult
 * //       lossFnOutputType: "STRING_VALUE",
 * //       lossFnOutputs: [ // TensorDataMapList
 * //         { // TensorDataMap
 * //           "<keys>": { // TensorData
 * //             data: "DOCUMENT_VALUE", // required
 * //             dtype: "STRING_VALUE", // required
 * //             shape: [ // IntegerList
 * //               Number("int"),
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       metrics: { // MetricsMap
 * //         "<keys>": Number("double"),
 * //       },
 * //       tokenUsage: { // TrainingTokenUsage
 * //         trainingTokens: Number("int"),
 * //       },
 * //     },
 * //     forwardBackward: { // ForwardBackwardResult
 * //       lossFnOutputType: "STRING_VALUE",
 * //       lossFnOutputs: [
 * //         {
 * //           "<keys>": {
 * //             data: "DOCUMENT_VALUE", // required
 * //             dtype: "STRING_VALUE", // required
 * //             shape: [
 * //               Number("int"),
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       metrics: {
 * //         "<keys>": Number("double"),
 * //       },
 * //       tokenUsage: {
 * //         trainingTokens: Number("int"),
 * //       },
 * //     },
 * //     optimizerStep: { // OptimizerStepResult
 * //       metrics: {
 * //         "<keys>": Number("double"),
 * //       },
 * //     },
 * //     saveWeights: { // SaveWeightsResult
 * //       modelPackageArn: "STRING_VALUE",
 * //     },
 * //     saveState: { // SaveStateResult
 * //       modelPackageArn: "STRING_VALUE", // required
 * //     },
 * //     loadState: {},
 * //   },
 * //   errorDetails: "STRING_VALUE",
 * //   tokenUsage: {
 * //     trainingTokens: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrainingOperationResultCommandInput - {@link GetTrainingOperationResultCommandInput}
 * @returns {@link GetTrainingOperationResultCommandOutput}
 * @see {@link GetTrainingOperationResultCommandInput} for command's `input` shape.
 * @see {@link GetTrainingOperationResultCommandOutput} for command's `response` shape.
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
 * @example Get the result of a training operation
 * ```javascript
 * // Retrieves the status and result of a training operation submitted with ExecuteTrainingOperation.
 * const input = {
 *   operationId: "a1b2c3d4-5678-90ab-cdef-1234567890ab",
 *   trainingSessionName: "my-training-session"
 * };
 * const command = new GetTrainingOperationResultCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   operationResult: {
 *     forwardBackward: {
 *       lossFnOutputType: "logprobs",
 *       metrics: {
 *         loss: 1.8342
 *       }
 *     }
 *   },
 *   status: "Completed",
 *   tokenUsage: {
 *     trainingTokens: 4096
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTrainingOperationResultCommand extends command<GetTrainingOperationResultCommandInput, GetTrainingOperationResultCommandOutput>(
  _ep0,
  _mw0,
  "GetTrainingOperationResult",
  GetTrainingOperationResult$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrainingOperationResultInput;
      output: GetTrainingOperationResultOutput;
    };
    sdk: {
      input: GetTrainingOperationResultCommandInput;
      output: GetTrainingOperationResultCommandOutput;
    };
  };
}
