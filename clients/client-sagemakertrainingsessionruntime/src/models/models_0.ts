// smithy-typescript generated code
import type { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import type { EncodedTextChunkType, LossFnName, RequestStatus, StopReason } from "./enums";

/**
 * The Adam optimizer hyperparameters used during an optimizer step.
 *
 * @public
 */
export interface AdamParamsConfig {
  /**
   * The learning rate for the optimizer. Must be greater than 0.
   *
   * @public
   */
  learningRate: number | undefined;

  /**
   * The exponential decay rate for the first moment estimates.
   *
   * @public
   */
  beta1?: number | undefined;

  /**
   * The exponential decay rate for the second moment estimates.
   *
   * @public
   */
  beta2?: number | undefined;

  /**
   * A small constant added to the denominator for numerical stability.
   *
   * @public
   */
  eps?: number | undefined;

  /**
   * The weight decay (L2 regularization) coefficient.
   *
   * @public
   */
  weightDecay?: number | undefined;

  /**
   * The maximum gradient norm for gradient clipping. Gradients are scaled down if their norm exceeds this value.
   *
   * @public
   */
  gradClipNorm?: number | undefined;

  /**
   * The learning rate multiplier for LoRA+ B matrices relative to A matrices. When set, B matrices use `learningRate * loraPlusLrRatio` while A matrices use the base learning rate.
   *
   * @public
   */
  loraPlusLrRatio?: number | undefined;
}

/**
 * A chunk of pre-tokenized text represented as a list of token IDs.
 *
 * @public
 */
export interface EncodedTextChunk {
  /**
   * The token IDs representing the encoded text.
   *
   * @public
   */
  tokens: number[] | undefined;

  /**
   * The type of the chunk encoding.
   *
   * @public
   */
  type: EncodedTextChunkType | undefined;
}

/**
 * The tokenized model input composed of ordered encoded text chunks.
 *
 * @public
 */
export interface ModelInput {
  /**
   * The ordered list of encoded text chunks forming the input sequence.
   *
   * @public
   */
  chunks: EncodedTextChunk[] | undefined;
}

/**
 * The configuration for computing log-probabilities of prompt tokens without generating new text.
 *
 * @public
 */
export interface ComputeLogprobsConfig {
  /**
   * The input prompt whose token log-probabilities will be computed.
   *
   * @public
   */
  prompt: ModelInput | undefined;

  /**
   * The ARN of the model package whose checkpoint this operation should run against. Must be a valid SageMaker model package ARN in the format `arn:aws:sagemaker:REGION:ACCOUNT:model-package/PACKAGE_NAME/VERSION`. When absent, the operation runs against the session's latest checkpoint.
   *
   * @public
   */
  modelPackageArn?: string | undefined;
}

/**
 * The result of a compute-logprobs operation.
 *
 * @public
 */
export interface ComputeLogprobsResult {
  /**
   * The per-token log-probabilities for the input prompt.
   *
   * @public
   */
  logprobs: number[] | undefined;
}

/**
 * A tensor with data, data type, and shape metadata.
 *
 * @public
 */
export interface TensorData {
  /**
   * The raw tensor data as JSON. The format is determined by the `dtype` field: integer arrays for `int64`, floating-point arrays for `float32`.
   *
   * @public
   */
  data: __DocumentType | undefined;

  /**
   * The data type of the tensor elements, such as `int64` or `float32`.
   *
   * @public
   */
  dtype: string | undefined;

  /**
   * The dimensions of the tensor, such as [batch_size, seq_length].
   *
   * @public
   */
  shape?: number[] | undefined;
}

/**
 * A single training datum containing model input and optional loss function inputs.
 *
 * @public
 */
export interface Datum {
  /**
   * The tokenized input to feed to the model.
   *
   * @public
   */
  modelInput: ModelInput | undefined;

  /**
   * The tensor inputs for the loss function, keyed by name. Unsupported keys are rejected. Supported keys: `target_tokens`, `weights`, `advantages`, `logprobs`, `ref_log_prob`, `temperature`. Required keys depend on the loss function type: SFT (`cross_entropy`) requires `target_tokens` and `weights`; RL (`ppo`, `cispo`, `importance_sampling`) requires `target_tokens`, `weights`, `advantages`, and `logprobs`.
   *
   * @public
   */
  lossFnInputs?: Record<string, TensorData> | undefined;
}

/**
 * The configuration for loading model weights for inference and sampling without restoring optimizer state.
 *
 * @public
 */
export interface LoadWeightsForSamplingConfig {
  /**
   * The ARN of the model package containing the weights to load for sampling. Must be a valid SageMaker model package ARN in the format `arn:aws:sagemaker:REGION:ACCOUNT:model-package/PACKAGE_NAME/VERSION`. The model package must belong to the same AWS account as the training session.
   *
   * @public
   */
  modelPackageArn: string | undefined;
}

/**
 * The parameters controlling the text generation sampling strategy.
 *
 * @public
 */
export interface SamplingParams {
  /**
   * The maximum number of tokens to generate per sample.
   *
   * @public
   */
  maxTokens: number | undefined;

  /**
   * The sampling temperature controlling randomness. Higher values produce more diverse outputs.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The number of highest-probability vocabulary tokens to keep for top-k filtering. Set to -1 to disable.
   *
   * @public
   */
  topK?: number | undefined;

  /**
   * The cumulative probability threshold for nucleus (top-p) sampling. Only tokens with cumulative probability below this threshold are considered.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The random seed for reproducible sampling. When set, the same seed with the same input produces deterministic outputs.
   *
   * @public
   */
  seed?: number | undefined;

  /**
   * The list of stop sequences that terminate generation when encountered in the output.
   *
   * @public
   */
  stop?: string[] | undefined;
}

/**
 * The configuration for generating text samples from the model.
 *
 * @public
 */
export interface SampleConfig {
  /**
   * The input prompt to send to the model for text generation.
   *
   * @public
   */
  prompt: ModelInput | undefined;

  /**
   * The number of independent samples to generate for the prompt.
   *
   * @public
   */
  numSamples: number | undefined;

  /**
   * The parameters controlling the sampling strategy.
   *
   * @public
   */
  samplingParams: SamplingParams | undefined;

  /**
   * Specifies whether to include per-token log-probabilities for the input prompt in the response.
   *
   * @public
   */
  includePromptLogprobs?: boolean | undefined;

  /**
   * The number of top-k log-probabilities to return per prompt token.
   *
   * @public
   */
  topkPromptLogprobs?: number | undefined;

  /**
   * The ARN of the model package whose checkpoint this sample should run against. Must be a valid SageMaker model package ARN in the format `arn:aws:sagemaker:REGION:ACCOUNT:model-package/PACKAGE_NAME/VERSION`. When absent, the sample runs against the session's latest checkpoint.
   *
   * @public
   */
  modelPackageArn?: string | undefined;
}

/**
 * The configuration for a sampling operation. Exactly one member must be set to specify the operation type.
 *
 * @public
 */
export type SampleOperationConfig =
  | SampleOperationConfig.ComputeLogprobsMember
  | SampleOperationConfig.LoadWeightsForSamplingMember
  | SampleOperationConfig.SampleMember
  | SampleOperationConfig.$UnknownMember;

/**
 * @public
 */
export namespace SampleOperationConfig {
  /**
   * The configuration for generating text samples from the model.
   *
   * @public
   */
  export interface SampleMember {
    sample: SampleConfig;
    computeLogprobs?: never;
    loadWeightsForSampling?: never;
    $unknown?: never;
  }

  /**
   * The configuration for computing log-probabilities of prompt tokens without generating new text.
   *
   * @public
   */
  export interface ComputeLogprobsMember {
    sample?: never;
    computeLogprobs: ComputeLogprobsConfig;
    loadWeightsForSampling?: never;
    $unknown?: never;
  }

  /**
   * The configuration for loading model weights for inference and sampling without restoring optimizer state.
   *
   * @public
   */
  export interface LoadWeightsForSamplingMember {
    sample?: never;
    computeLogprobs?: never;
    loadWeightsForSampling: LoadWeightsForSamplingConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sample?: never;
    computeLogprobs?: never;
    loadWeightsForSampling?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sample: (value: SampleConfig) => T;
    computeLogprobs: (value: ComputeLogprobsConfig) => T;
    loadWeightsForSampling: (value: LoadWeightsForSamplingConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ExecuteSamplingOperationInput {
  /**
   * The name of the training session to sample from.
   *
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * The configuration for the sample operation. Specify either a sample configuration to generate text or a computeLogprobs configuration to compute token log-probabilities.
   *
   * @public
   */
  operationConfig: SampleOperationConfig | undefined;
}

/**
 * @public
 */
export interface ExecuteSamplingOperationOutput {
  /**
   * The unique identifier for the submitted sample operation. Use this identifier with `GetSamplingOperationResult` to retrieve the operation status and result.
   *
   * @public
   */
  operationId: string | undefined;
}

/**
 * The configuration for a forward-only pass through the model. This computes loss values without computing gradients.
 *
 * @public
 */
export interface ForwardConfig {
  /**
   * The name of the loss function to evaluate during the forward pass.
   *
   * @public
   */
  lossFnName: LossFnName | undefined;

  /**
   * The list of input data to feed through the model. Must contain at least one datum, and each datum must have a non-empty modelInput with at least one chunk.
   *
   * @public
   */
  datumList: Datum[] | undefined;

  /**
   * Additional loss function configuration passed to the engine. Supported keys are `clip_low_threshold` (valid range: 0 to 1) and `clip_high_threshold` (valid range: 1 to 10). Unsupported keys are rejected.
   *
   * @public
   */
  lossFnConfig?: __DocumentType | undefined;
}

/**
 * The configuration for a forward and backward pass through the model. This computes both loss values and gradients for use in subsequent optimizer steps.
 *
 * @public
 */
export interface ForwardBackwardConfig {
  /**
   * The name of the loss function to evaluate during the forward-backward pass.
   *
   * @public
   */
  lossFnName: LossFnName | undefined;

  /**
   * The list of input data to feed through the model. Must contain at least one datum, and each datum must have a non-empty modelInput with at least one chunk.
   *
   * @public
   */
  datumList: Datum[] | undefined;

  /**
   * Additional loss function configuration passed to the engine. Supported keys are `clip_low_threshold` (valid range: 0 to 1) and `clip_high_threshold` (valid range: 1 to 10). Unsupported keys are rejected.
   *
   * @public
   */
  lossFnConfig?: __DocumentType | undefined;
}

/**
 * The configuration for loading training state from a previously saved checkpoint. This restores model weights and optionally optimizer state.
 *
 * @public
 */
export interface LoadStateConfig {
  /**
   * The ARN of the model package containing the checkpoint to load. Must be a valid SageMaker model package ARN in the format `arn:aws:sagemaker:REGION:ACCOUNT:model-package/PACKAGE_NAME/VERSION`. Model package group ARNs are not accepted.
   *
   * @public
   */
  modelPackageArn: string | undefined;

  /**
   * Specifies whether to also restore the optimizer state alongside model weights. When true, optimizer state is restored to resume training from where it left off.
   *
   * @public
   */
  loadOptimizer: boolean | undefined;
}

/**
 * The configuration for an optimizer step that updates model weights using gradients accumulated from previous forward-backward passes.
 *
 * @public
 */
export interface OptimizerStepConfig {
  /**
   * The Adam optimizer hyperparameters for this step.
   *
   * @public
   */
  adamParamsConfig: AdamParamsConfig | undefined;
}

/**
 * The configuration for saving full training state, including model weights and optimizer state. Use this to create resumable checkpoints.
 *
 * @public
 */
export interface SaveStateConfig {
  /**
   * A human-readable description for the saved state checkpoint.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * The configuration for saving model weights as a checkpoint.
 *
 * @public
 */
export interface SaveWeightsConfig {
  /**
   * Specifies whether to merge LoRA adapter weights into the base model before saving. When true, the saved checkpoint contains the full merged model weights.
   *
   * @public
   */
  mergeWeights?: boolean | undefined;

  /**
   * A human-readable description for the saved checkpoint.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * The configuration for a training operation. Exactly one member must be set to specify the operation type and its parameters.
 *
 * @public
 */
export type OperationConfig =
  | OperationConfig.ForwardMember
  | OperationConfig.ForwardBackwardMember
  | OperationConfig.LoadStateMember
  | OperationConfig.OptimizerStepMember
  | OperationConfig.SaveStateMember
  | OperationConfig.SaveWeightsMember
  | OperationConfig.$UnknownMember;

/**
 * @public
 */
export namespace OperationConfig {
  /**
   * The configuration for a forward-only pass through the model without gradient computation.
   *
   * @public
   */
  export interface ForwardMember {
    forward: ForwardConfig;
    forwardBackward?: never;
    optimizerStep?: never;
    saveWeights?: never;
    saveState?: never;
    loadState?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a forward and backward pass that computes gradients.
   *
   * @public
   */
  export interface ForwardBackwardMember {
    forward?: never;
    forwardBackward: ForwardBackwardConfig;
    optimizerStep?: never;
    saveWeights?: never;
    saveState?: never;
    loadState?: never;
    $unknown?: never;
  }

  /**
   * The configuration for an optimizer step that updates model weights using accumulated gradients.
   *
   * @public
   */
  export interface OptimizerStepMember {
    forward?: never;
    forwardBackward?: never;
    optimizerStep: OptimizerStepConfig;
    saveWeights?: never;
    saveState?: never;
    loadState?: never;
    $unknown?: never;
  }

  /**
   * The configuration for saving model weights as a checkpoint.
   *
   * @public
   */
  export interface SaveWeightsMember {
    forward?: never;
    forwardBackward?: never;
    optimizerStep?: never;
    saveWeights: SaveWeightsConfig;
    saveState?: never;
    loadState?: never;
    $unknown?: never;
  }

  /**
   * The configuration for saving full training state, including model weights and optimizer state.
   *
   * @public
   */
  export interface SaveStateMember {
    forward?: never;
    forwardBackward?: never;
    optimizerStep?: never;
    saveWeights?: never;
    saveState: SaveStateConfig;
    loadState?: never;
    $unknown?: never;
  }

  /**
   * The configuration for loading training state from a previously saved checkpoint.
   *
   * @public
   */
  export interface LoadStateMember {
    forward?: never;
    forwardBackward?: never;
    optimizerStep?: never;
    saveWeights?: never;
    saveState?: never;
    loadState: LoadStateConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    forward?: never;
    forwardBackward?: never;
    optimizerStep?: never;
    saveWeights?: never;
    saveState?: never;
    loadState?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    forward: (value: ForwardConfig) => T;
    forwardBackward: (value: ForwardBackwardConfig) => T;
    optimizerStep: (value: OptimizerStepConfig) => T;
    saveWeights: (value: SaveWeightsConfig) => T;
    saveState: (value: SaveStateConfig) => T;
    loadState: (value: LoadStateConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ExecuteTrainingOperationInput {
  /**
   * The name of the training session to submit the operation to.
   *
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * The monotonically increasing sequence number that determines execution order. The training session processes operations strictly in sequence number order. If a gap exists, the session blocks until the missing operation arrives or times out. Must be at least 1.
   *
   * @public
   */
  sequenceNumber: number | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service ignores the request but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The configuration that specifies the type and parameters of the training operation. Exactly one member of the union must be set.
   *
   * @public
   */
  operationConfig: OperationConfig | undefined;
}

/**
 * @public
 */
export interface ExecuteTrainingOperationOutput {
  /**
   * The unique identifier for the submitted operation. Use this identifier with `GetTrainingOperationResult` to retrieve the operation status and result.
   *
   * @public
   */
  operationId: string | undefined;
}

/**
 * The token usage statistics for training operations.
 *
 * @public
 */
export interface TrainingTokenUsage {
  /**
   * The number of training tokens consumed by the operation.
   *
   * @public
   */
  trainingTokens?: number | undefined;
}

/**
 * The result of a forward and backward pass through the model, including computed gradients.
 *
 * @public
 */
export interface ForwardBackwardResult {
  /**
   * The data type of the loss function output tensors.
   *
   * @public
   */
  lossFnOutputType?: string | undefined;

  /**
   * The loss function output tensors, keyed by name.
   *
   * @public
   */
  lossFnOutputs?: Record<string, TensorData>[] | undefined;

  /**
   * The training metrics emitted by the engine, such as loss values.
   *
   * @public
   */
  metrics?: Record<string, number> | undefined;

  /**
   * The token usage statistics for metering.
   *
   * @public
   */
  tokenUsage?: TrainingTokenUsage | undefined;
}

/**
 * The result of a forward-only pass through the model.
 *
 * @public
 */
export interface ForwardResult {
  /**
   * The data type of the loss function output tensors.
   *
   * @public
   */
  lossFnOutputType?: string | undefined;

  /**
   * The loss function output tensors, keyed by name.
   *
   * @public
   */
  lossFnOutputs?: Record<string, TensorData>[] | undefined;

  /**
   * The training metrics emitted by the engine, such as loss values.
   *
   * @public
   */
  metrics?: Record<string, number> | undefined;

  /**
   * The token usage statistics for metering.
   *
   * @public
   */
  tokenUsage?: TrainingTokenUsage | undefined;
}

/**
 * @public
 */
export interface GetSamplingOperationResultInput {
  /**
   * The name of the training session that owns the sample operation.
   *
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * The unique identifier of the sample operation to retrieve, returned by `ExecuteSamplingOperation`.
   *
   * @public
   */
  operationId: string | undefined;
}

/**
 * The result of loading weights for sampling. An empty response indicates success.
 *
 * @public
 */
export interface LoadWeightsForSamplingResult {}

/**
 * The token usage statistics for a sample generation.
 *
 * @public
 */
export interface SampleTokenUsage {
  /**
   * The number of tokens in the input prompt (prefill phase).
   *
   * @public
   */
  prefill: number | undefined;

  /**
   * The number of tokens generated (decode phase).
   *
   * @public
   */
  decode: number | undefined;
}

/**
 * A single generated sequence from the model.
 *
 * @public
 */
export interface SampledSequence {
  /**
   * The reason why generation stopped. A value of `stop` indicates a stop sequence was encountered. A value of `length` indicates the maximum token limit was reached.
   *
   * @public
   */
  stopReason: StopReason | undefined;

  /**
   * The token IDs of the generated sequence.
   *
   * @public
   */
  tokens: number[] | undefined;

  /**
   * The per-token log-probabilities for the generated tokens.
   *
   * @public
   */
  logprobs?: number[] | undefined;

  /**
   * The token usage statistics for this individual sample.
   *
   * @public
   */
  tokenUsage?: SampleTokenUsage | undefined;
}

/**
 * The log-probability for a single token.
 *
 * @public
 */
export interface TokenLogprob {
  /**
   * The vocabulary token ID.
   *
   * @public
   */
  tokenId: number | undefined;

  /**
   * The log-probability of the token.
   *
   * @public
   */
  logprob: number | undefined;
}

/**
 * The response containing generated samples and optional log-probabilities.
 *
 * @public
 */
export interface SampleResponse {
  /**
   * The list of generated sequences.
   *
   * @public
   */
  sequences: SampledSequence[] | undefined;

  /**
   * The per-token log-probabilities for the input prompt. Populated only when `includePromptLogprobs` is true.
   *
   * @public
   */
  promptLogprobs?: number[] | undefined;

  /**
   * The top-k log-probabilities per prompt token, as a list of lists. Populated only when `topkPromptLogprobs` is greater than 0.
   *
   * @public
   */
  topkPromptLogprobs?: TokenLogprob[][] | undefined;
}

/**
 * The result of a completed sampling operation. Exactly one member is populated, corresponding to the operation type that was submitted.
 *
 * @public
 */
export type SampleOperationResult =
  | SampleOperationResult.ComputeLogprobsMember
  | SampleOperationResult.LoadWeightsForSamplingMember
  | SampleOperationResult.SampleMember
  | SampleOperationResult.$UnknownMember;

/**
 * @public
 */
export namespace SampleOperationResult {
  /**
   * The generated text samples from the model.
   *
   * @public
   */
  export interface SampleMember {
    sample: SampleResponse;
    computeLogprobs?: never;
    loadWeightsForSampling?: never;
    $unknown?: never;
  }

  /**
   * The computed log-probabilities for the prompt tokens.
   *
   * @public
   */
  export interface ComputeLogprobsMember {
    sample?: never;
    computeLogprobs: ComputeLogprobsResult;
    loadWeightsForSampling?: never;
    $unknown?: never;
  }

  /**
   * The result from loading weights for sampling.
   *
   * @public
   */
  export interface LoadWeightsForSamplingMember {
    sample?: never;
    computeLogprobs?: never;
    loadWeightsForSampling: LoadWeightsForSamplingResult;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sample?: never;
    computeLogprobs?: never;
    loadWeightsForSampling?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sample: (value: SampleResponse) => T;
    computeLogprobs: (value: ComputeLogprobsResult) => T;
    loadWeightsForSampling: (value: LoadWeightsForSamplingResult) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetSamplingOperationResultOutput {
  /**
   * The current status of the sample operation. Possible values are `Pending`, `InProgress`, `Completed`, or `Failed`.
   *
   * @public
   */
  status: RequestStatus | undefined;

  /**
   * The result payload of the sample operation. The service populates this field only when the status is `Completed`.
   *
   * @public
   */
  operationResult?: SampleOperationResult | undefined;

  /**
   * A message describing why the sample operation failed. The service populates this field only when the status is `Failed`.
   *
   * @public
   */
  errorDetails?: string | undefined;
}

/**
 * @public
 */
export interface GetTrainingOperationResultInput {
  /**
   * The name of the training session that owns the operation.
   *
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * The unique identifier of the operation to retrieve, returned by `ExecuteTrainingOperation`.
   *
   * @public
   */
  operationId: string | undefined;
}

/**
 * The result of loading training state. An empty response indicates success.
 *
 * @public
 */
export interface LoadStateResult {}

/**
 * The result of an optimizer step.
 *
 * @public
 */
export interface OptimizerStepResult {
  /**
   * The training metrics emitted by the engine after the optimizer step.
   *
   * @public
   */
  metrics?: Record<string, number> | undefined;
}

/**
 * The result of saving full training state.
 *
 * @public
 */
export interface SaveStateResult {
  /**
   * The ARN of the model package created for the saved state checkpoint.
   *
   * @public
   */
  modelPackageArn: string | undefined;
}

/**
 * The result of saving model weights.
 *
 * @public
 */
export interface SaveWeightsResult {
  /**
   * The ARN of the model package created for the saved weights.
   *
   * @public
   */
  modelPackageArn?: string | undefined;
}

/**
 * The result of a completed training operation. Exactly one member is populated, corresponding to the operation type that was submitted.
 *
 * @public
 */
export type OperationResult =
  | OperationResult.ForwardMember
  | OperationResult.ForwardBackwardMember
  | OperationResult.LoadStateMember
  | OperationResult.OptimizerStepMember
  | OperationResult.SaveStateMember
  | OperationResult.SaveWeightsMember
  | OperationResult.$UnknownMember;

/**
 * @public
 */
export namespace OperationResult {
  /**
   * The result from a forward-only pass.
   *
   * @public
   */
  export interface ForwardMember {
    forward: ForwardResult;
    forwardBackward?: never;
    optimizerStep?: never;
    saveWeights?: never;
    saveState?: never;
    loadState?: never;
    $unknown?: never;
  }

  /**
   * The result from a forward and backward pass.
   *
   * @public
   */
  export interface ForwardBackwardMember {
    forward?: never;
    forwardBackward: ForwardBackwardResult;
    optimizerStep?: never;
    saveWeights?: never;
    saveState?: never;
    loadState?: never;
    $unknown?: never;
  }

  /**
   * The result from an optimizer step.
   *
   * @public
   */
  export interface OptimizerStepMember {
    forward?: never;
    forwardBackward?: never;
    optimizerStep: OptimizerStepResult;
    saveWeights?: never;
    saveState?: never;
    loadState?: never;
    $unknown?: never;
  }

  /**
   * The result from saving model weights.
   *
   * @public
   */
  export interface SaveWeightsMember {
    forward?: never;
    forwardBackward?: never;
    optimizerStep?: never;
    saveWeights: SaveWeightsResult;
    saveState?: never;
    loadState?: never;
    $unknown?: never;
  }

  /**
   * The result from saving full training state.
   *
   * @public
   */
  export interface SaveStateMember {
    forward?: never;
    forwardBackward?: never;
    optimizerStep?: never;
    saveWeights?: never;
    saveState: SaveStateResult;
    loadState?: never;
    $unknown?: never;
  }

  /**
   * The result from loading training state.
   *
   * @public
   */
  export interface LoadStateMember {
    forward?: never;
    forwardBackward?: never;
    optimizerStep?: never;
    saveWeights?: never;
    saveState?: never;
    loadState: LoadStateResult;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    forward?: never;
    forwardBackward?: never;
    optimizerStep?: never;
    saveWeights?: never;
    saveState?: never;
    loadState?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    forward: (value: ForwardResult) => T;
    forwardBackward: (value: ForwardBackwardResult) => T;
    optimizerStep: (value: OptimizerStepResult) => T;
    saveWeights: (value: SaveWeightsResult) => T;
    saveState: (value: SaveStateResult) => T;
    loadState: (value: LoadStateResult) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetTrainingOperationResultOutput {
  /**
   * The current status of the operation. Possible values are `Pending`, `InProgress`, `Completed`, `Failed`, or `Skipped`.
   *
   * @public
   */
  status: RequestStatus | undefined;

  /**
   * The result payload of the operation. The service populates this field only when the status is `Completed`. The populated member of the union corresponds to the operation type that was submitted.
   *
   * @public
   */
  operationResult?: OperationResult | undefined;

  /**
   * A message describing why the operation failed. The service populates this field only when the status is `Failed`.
   *
   * @public
   */
  errorDetails?: string | undefined;

  /**
   * The token usage statistics for metering purposes. The service populates this field for forward and forwardBackward operations upon completion.
   *
   * @public
   */
  tokenUsage?: TrainingTokenUsage | undefined;
}

/**
 * @public
 */
export interface SampleTrainingSessionInput {
  /**
   * The name of the training session whose model to invoke.
   *
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * The MIME type of the input data in the request body.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The desired MIME type of the inference body in the response.
   *
   * @public
   */
  accept?: string | undefined;

  /**
   * The ARN of the model package whose checkpoint to invoke.
   *
   * @public
   */
  modelPackageArn?: string | undefined;

  /**
   * The raw inference request body.
   *
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SampleTrainingSessionOutput {
  /**
   * The MIME type of the inference result in the response body.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The raw inference response body from the model.
   *
   * @public
   */
  body: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SampleTrainingSessionWithResponseStreamInput {
  /**
   * The name of the training session whose model to invoke.
   *
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * The MIME type of the input data in the request body.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The desired MIME type of the inference body in the response.
   *
   * @public
   */
  accept?: string | undefined;

  /**
   * The ARN of the model package whose checkpoint to invoke.
   *
   * @public
   */
  modelPackageArn?: string | undefined;

  /**
   * The raw inference request body.
   *
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SampleTrainingSessionWithResponseStreamOutput {
  /**
   * The MIME type of the streaming inference result.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The streaming inference response from the model, delivered as a series of chunks.
   *
   * @public
   */
  body: StreamingBlobTypes | undefined;
}
