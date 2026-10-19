// smithy-typescript generated code
import type { DocumentType as __DocumentType, StreamingBlobTypes } from "@smithy/types";

import type { EncodedTextChunkType, LossFnName, RequestStatus, StopReason } from "./enums";

/**
 * <p>The Adam optimizer hyperparameters used during an optimizer step.</p>
 * @public
 */
export interface AdamParamsConfig {
  /**
   * <p>The learning rate for the optimizer. Must be greater than 0.</p>
   * @public
   */
  learningRate: number | undefined;

  /**
   * <p>The exponential decay rate for the first moment estimates.</p>
   * @public
   */
  beta1?: number | undefined;

  /**
   * <p>The exponential decay rate for the second moment estimates.</p>
   * @public
   */
  beta2?: number | undefined;

  /**
   * <p>A small constant added to the denominator for numerical stability.</p>
   * @public
   */
  eps?: number | undefined;

  /**
   * <p>The weight decay (L2 regularization) coefficient.</p>
   * @public
   */
  weightDecay?: number | undefined;

  /**
   * <p>The maximum gradient norm for gradient clipping. Gradients are scaled down if their norm exceeds this value.</p>
   * @public
   */
  gradClipNorm?: number | undefined;

  /**
   * <p>The learning rate multiplier for LoRA+ B matrices relative to A matrices. When set, B matrices use <code>learningRate * loraPlusLrRatio</code> while A matrices use the base learning rate.</p>
   * @public
   */
  loraPlusLrRatio?: number | undefined;
}

/**
 * <p>A chunk of pre-tokenized text represented as a list of token IDs.</p>
 * @public
 */
export interface EncodedTextChunk {
  /**
   * <p>The token IDs representing the encoded text.</p>
   * @public
   */
  tokens: number[] | undefined;

  /**
   * <p>The type of the chunk encoding.</p>
   * @public
   */
  type: EncodedTextChunkType | undefined;
}

/**
 * <p>The tokenized model input composed of ordered encoded text chunks.</p>
 * @public
 */
export interface ModelInput {
  /**
   * <p>The ordered list of encoded text chunks forming the input sequence.</p>
   * @public
   */
  chunks: EncodedTextChunk[] | undefined;
}

/**
 * <p>The configuration for computing log-probabilities of prompt tokens without generating new text.</p>
 * @public
 */
export interface ComputeLogprobsConfig {
  /**
   * <p>The input prompt whose token log-probabilities will be computed.</p>
   * @public
   */
  prompt: ModelInput | undefined;

  /**
   * <p>The ARN of the model package whose checkpoint this operation should run against. Must be a valid SageMaker model package ARN in the format <code>arn:aws:sagemaker:REGION:ACCOUNT:model-package/PACKAGE_NAME/VERSION</code>. When absent, the operation runs against the session's latest checkpoint.</p>
   * @public
   */
  modelPackageArn?: string | undefined;
}

/**
 * <p>The result of a compute-logprobs operation.</p>
 * @public
 */
export interface ComputeLogprobsResult {
  /**
   * <p>The per-token log-probabilities for the input prompt.</p>
   * @public
   */
  logprobs: number[] | undefined;
}

/**
 * <p>A tensor with data, data type, and shape metadata.</p>
 * @public
 */
export interface TensorData {
  /**
   * <p>The raw tensor data as JSON. The format is determined by the <code>dtype</code> field: integer arrays for <code>int64</code>, floating-point arrays for <code>float32</code>.</p>
   * @public
   */
  data: __DocumentType | undefined;

  /**
   * <p>The data type of the tensor elements, such as <code>int64</code> or <code>float32</code>.</p>
   * @public
   */
  dtype: string | undefined;

  /**
   * <p>The dimensions of the tensor, such as [batch_size, seq_length].</p>
   * @public
   */
  shape?: number[] | undefined;
}

/**
 * <p>A single training datum containing model input and optional loss function inputs.</p>
 * @public
 */
export interface Datum {
  /**
   * <p>The tokenized input to feed to the model.</p>
   * @public
   */
  modelInput: ModelInput | undefined;

  /**
   * <p>The tensor inputs for the loss function, keyed by name. Unsupported keys are rejected. Supported keys: <code>target_tokens</code>, <code>weights</code>, <code>advantages</code>, <code>logprobs</code>, <code>ref_log_prob</code>, <code>temperature</code>. Required keys depend on the loss function type: SFT (<code>cross_entropy</code>) requires <code>target_tokens</code> and <code>weights</code>; RL (<code>ppo</code>, <code>cispo</code>, <code>importance_sampling</code>) requires <code>target_tokens</code>, <code>weights</code>, <code>advantages</code>, and <code>logprobs</code>.</p>
   * @public
   */
  lossFnInputs?: Record<string, TensorData> | undefined;
}

/**
 * <p>The configuration for loading model weights for inference and sampling without restoring optimizer state.</p>
 * @public
 */
export interface LoadWeightsForSamplingConfig {
  /**
   * <p>The ARN of the model package containing the weights to load for sampling. Must be a valid SageMaker model package ARN in the format <code>arn:aws:sagemaker:REGION:ACCOUNT:model-package/PACKAGE_NAME/VERSION</code>. The model package must belong to the same AWS account as the training session.</p>
   * @public
   */
  modelPackageArn: string | undefined;
}

/**
 * <p>The parameters controlling the text generation sampling strategy.</p>
 * @public
 */
export interface SamplingParams {
  /**
   * <p>The maximum number of tokens to generate per sample.</p>
   * @public
   */
  maxTokens: number | undefined;

  /**
   * <p>The sampling temperature controlling randomness. Higher values produce more diverse outputs.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The number of highest-probability vocabulary tokens to keep for top-k filtering. Set to -1 to disable.</p>
   * @public
   */
  topK?: number | undefined;

  /**
   * <p>The cumulative probability threshold for nucleus (top-p) sampling. Only tokens with cumulative probability below this threshold are considered.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The random seed for reproducible sampling. When set, the same seed with the same input produces deterministic outputs.</p>
   * @public
   */
  seed?: number | undefined;

  /**
   * <p>The list of stop sequences that terminate generation when encountered in the output.</p>
   * @public
   */
  stop?: string[] | undefined;
}

/**
 * <p>The configuration for generating text samples from the model.</p>
 * @public
 */
export interface SampleConfig {
  /**
   * <p>The input prompt to send to the model for text generation.</p>
   * @public
   */
  prompt: ModelInput | undefined;

  /**
   * <p>The number of independent samples to generate for the prompt.</p>
   * @public
   */
  numSamples: number | undefined;

  /**
   * <p>The parameters controlling the sampling strategy.</p>
   * @public
   */
  samplingParams: SamplingParams | undefined;

  /**
   * <p>Specifies whether to include per-token log-probabilities for the input prompt in the response.</p>
   * @public
   */
  includePromptLogprobs?: boolean | undefined;

  /**
   * <p>The number of top-k log-probabilities to return per prompt token.</p>
   * @public
   */
  topkPromptLogprobs?: number | undefined;

  /**
   * <p>The ARN of the model package whose checkpoint this sample should run against. Must be a valid SageMaker model package ARN in the format <code>arn:aws:sagemaker:REGION:ACCOUNT:model-package/PACKAGE_NAME/VERSION</code>. When absent, the sample runs against the session's latest checkpoint.</p>
   * @public
   */
  modelPackageArn?: string | undefined;
}

/**
 * <p>The configuration for a sampling operation. Exactly one member must be set to specify the operation type.</p>
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
   * <p>The configuration for generating text samples from the model.</p>
   * @public
   */
  export interface SampleMember {
    sample: SampleConfig;
    computeLogprobs?: never;
    loadWeightsForSampling?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for computing log-probabilities of prompt tokens without generating new text.</p>
   * @public
   */
  export interface ComputeLogprobsMember {
    sample?: never;
    computeLogprobs: ComputeLogprobsConfig;
    loadWeightsForSampling?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for loading model weights for inference and sampling without restoring optimizer state.</p>
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
   * <p>The name of the training session to sample from.</p>
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * <p>The configuration for the sample operation. Specify either a sample configuration to generate text or a computeLogprobs configuration to compute token log-probabilities.</p>
   * @public
   */
  operationConfig: SampleOperationConfig | undefined;
}

/**
 * @public
 */
export interface ExecuteSamplingOperationOutput {
  /**
   * <p>The unique identifier for the submitted sample operation. Use this identifier with <code>GetSamplingOperationResult</code> to retrieve the operation status and result.</p>
   * @public
   */
  operationId: string | undefined;
}

/**
 * <p>The configuration for a forward-only pass through the model. This computes loss values without computing gradients.</p>
 * @public
 */
export interface ForwardConfig {
  /**
   * <p>The name of the loss function to evaluate during the forward pass.</p>
   * @public
   */
  lossFnName: LossFnName | undefined;

  /**
   * <p>The list of input data to feed through the model. Must contain at least one datum, and each datum must have a non-empty modelInput with at least one chunk.</p>
   * @public
   */
  datumList: Datum[] | undefined;

  /**
   * <p>Additional loss function configuration passed to the engine. Supported keys are <code>clip_low_threshold</code> (valid range: 0 to 1) and <code>clip_high_threshold</code> (valid range: 1 to 10). Unsupported keys are rejected.</p>
   * @public
   */
  lossFnConfig?: __DocumentType | undefined;
}

/**
 * <p>The configuration for a forward and backward pass through the model. This computes both loss values and gradients for use in subsequent optimizer steps.</p>
 * @public
 */
export interface ForwardBackwardConfig {
  /**
   * <p>The name of the loss function to evaluate during the forward-backward pass.</p>
   * @public
   */
  lossFnName: LossFnName | undefined;

  /**
   * <p>The list of input data to feed through the model. Must contain at least one datum, and each datum must have a non-empty modelInput with at least one chunk.</p>
   * @public
   */
  datumList: Datum[] | undefined;

  /**
   * <p>Additional loss function configuration passed to the engine. Supported keys are <code>clip_low_threshold</code> (valid range: 0 to 1) and <code>clip_high_threshold</code> (valid range: 1 to 10). Unsupported keys are rejected.</p>
   * @public
   */
  lossFnConfig?: __DocumentType | undefined;
}

/**
 * <p>The configuration for loading training state from a previously saved checkpoint. This restores model weights and optionally optimizer state.</p>
 * @public
 */
export interface LoadStateConfig {
  /**
   * <p>The ARN of the model package containing the checkpoint to load. Must be a valid SageMaker model package ARN in the format <code>arn:aws:sagemaker:REGION:ACCOUNT:model-package/PACKAGE_NAME/VERSION</code>. Model package group ARNs are not accepted.</p>
   * @public
   */
  modelPackageArn: string | undefined;

  /**
   * <p>Specifies whether to also restore the optimizer state alongside model weights. When true, optimizer state is restored to resume training from where it left off.</p>
   * @public
   */
  loadOptimizer: boolean | undefined;
}

/**
 * <p>The configuration for an optimizer step that updates model weights using gradients accumulated from previous forward-backward passes.</p>
 * @public
 */
export interface OptimizerStepConfig {
  /**
   * <p>The Adam optimizer hyperparameters for this step.</p>
   * @public
   */
  adamParamsConfig: AdamParamsConfig | undefined;
}

/**
 * <p>The configuration for saving full training state, including model weights and optimizer state. Use this to create resumable checkpoints.</p>
 * @public
 */
export interface SaveStateConfig {
  /**
   * <p>A human-readable description for the saved state checkpoint.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>The configuration for saving model weights as a checkpoint.</p>
 * @public
 */
export interface SaveWeightsConfig {
  /**
   * <p>Specifies whether to merge LoRA adapter weights into the base model before saving. When true, the saved checkpoint contains the full merged model weights.</p>
   * @public
   */
  mergeWeights?: boolean | undefined;

  /**
   * <p>A human-readable description for the saved checkpoint.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>The configuration for a training operation. Exactly one member must be set to specify the operation type and its parameters.</p>
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
   * <p>The configuration for a forward-only pass through the model without gradient computation.</p>
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
   * <p>The configuration for a forward and backward pass that computes gradients.</p>
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
   * <p>The configuration for an optimizer step that updates model weights using accumulated gradients.</p>
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
   * <p>The configuration for saving model weights as a checkpoint.</p>
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
   * <p>The configuration for saving full training state, including model weights and optimizer state.</p>
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
   * <p>The configuration for loading training state from a previously saved checkpoint.</p>
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
   * <p>The name of the training session to submit the operation to.</p>
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * <p>The monotonically increasing sequence number that determines execution order. The training session processes operations strictly in sequence number order. If a gap exists, the session blocks until the missing operation arrives or times out. Must be at least 1.</p>
   * @public
   */
  sequenceNumber: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If you retry a request with the same client token and the same parameters, the service ignores the request but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The configuration that specifies the type and parameters of the training operation. Exactly one member of the union must be set.</p>
   * @public
   */
  operationConfig: OperationConfig | undefined;
}

/**
 * @public
 */
export interface ExecuteTrainingOperationOutput {
  /**
   * <p>The unique identifier for the submitted operation. Use this identifier with <code>GetTrainingOperationResult</code> to retrieve the operation status and result.</p>
   * @public
   */
  operationId: string | undefined;
}

/**
 * <p>The token usage statistics for training operations.</p>
 * @public
 */
export interface TrainingTokenUsage {
  /**
   * <p>The number of training tokens consumed by the operation.</p>
   * @public
   */
  trainingTokens?: number | undefined;
}

/**
 * <p>The result of a forward and backward pass through the model, including computed gradients.</p>
 * @public
 */
export interface ForwardBackwardResult {
  /**
   * <p>The data type of the loss function output tensors.</p>
   * @public
   */
  lossFnOutputType?: string | undefined;

  /**
   * <p>The loss function output tensors, keyed by name.</p>
   * @public
   */
  lossFnOutputs?: Record<string, TensorData>[] | undefined;

  /**
   * <p>The training metrics emitted by the engine, such as loss values.</p>
   * @public
   */
  metrics?: Record<string, number> | undefined;

  /**
   * <p>The token usage statistics for metering.</p>
   * @public
   */
  tokenUsage?: TrainingTokenUsage | undefined;
}

/**
 * <p>The result of a forward-only pass through the model.</p>
 * @public
 */
export interface ForwardResult {
  /**
   * <p>The data type of the loss function output tensors.</p>
   * @public
   */
  lossFnOutputType?: string | undefined;

  /**
   * <p>The loss function output tensors, keyed by name.</p>
   * @public
   */
  lossFnOutputs?: Record<string, TensorData>[] | undefined;

  /**
   * <p>The training metrics emitted by the engine, such as loss values.</p>
   * @public
   */
  metrics?: Record<string, number> | undefined;

  /**
   * <p>The token usage statistics for metering.</p>
   * @public
   */
  tokenUsage?: TrainingTokenUsage | undefined;
}

/**
 * @public
 */
export interface GetSamplingOperationResultInput {
  /**
   * <p>The name of the training session that owns the sample operation.</p>
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * <p>The unique identifier of the sample operation to retrieve, returned by <code>ExecuteSamplingOperation</code>.</p>
   * @public
   */
  operationId: string | undefined;
}

/**
 * <p>The result of loading weights for sampling. An empty response indicates success.</p>
 * @public
 */
export interface LoadWeightsForSamplingResult {}

/**
 * <p>The token usage statistics for a sample generation.</p>
 * @public
 */
export interface SampleTokenUsage {
  /**
   * <p>The number of tokens in the input prompt (prefill phase).</p>
   * @public
   */
  prefill: number | undefined;

  /**
   * <p>The number of tokens generated (decode phase).</p>
   * @public
   */
  decode: number | undefined;
}

/**
 * <p>A single generated sequence from the model.</p>
 * @public
 */
export interface SampledSequence {
  /**
   * <p>The reason why generation stopped. A value of <code>stop</code> indicates a stop sequence was encountered. A value of <code>length</code> indicates the maximum token limit was reached.</p>
   * @public
   */
  stopReason: StopReason | undefined;

  /**
   * <p>The token IDs of the generated sequence.</p>
   * @public
   */
  tokens: number[] | undefined;

  /**
   * <p>The per-token log-probabilities for the generated tokens.</p>
   * @public
   */
  logprobs?: number[] | undefined;

  /**
   * <p>The token usage statistics for this individual sample.</p>
   * @public
   */
  tokenUsage?: SampleTokenUsage | undefined;
}

/**
 * <p>The log-probability for a single token.</p>
 * @public
 */
export interface TokenLogprob {
  /**
   * <p>The vocabulary token ID.</p>
   * @public
   */
  tokenId: number | undefined;

  /**
   * <p>The log-probability of the token.</p>
   * @public
   */
  logprob: number | undefined;
}

/**
 * <p>The response containing generated samples and optional log-probabilities.</p>
 * @public
 */
export interface SampleResponse {
  /**
   * <p>The list of generated sequences.</p>
   * @public
   */
  sequences: SampledSequence[] | undefined;

  /**
   * <p>The per-token log-probabilities for the input prompt. Populated only when <code>includePromptLogprobs</code> is true.</p>
   * @public
   */
  promptLogprobs?: number[] | undefined;

  /**
   * <p>The top-k log-probabilities per prompt token, as a list of lists. Populated only when <code>topkPromptLogprobs</code> is greater than 0.</p>
   * @public
   */
  topkPromptLogprobs?: TokenLogprob[][] | undefined;
}

/**
 * <p>The result of a completed sampling operation. Exactly one member is populated, corresponding to the operation type that was submitted.</p>
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
   * <p>The generated text samples from the model.</p>
   * @public
   */
  export interface SampleMember {
    sample: SampleResponse;
    computeLogprobs?: never;
    loadWeightsForSampling?: never;
    $unknown?: never;
  }

  /**
   * <p>The computed log-probabilities for the prompt tokens.</p>
   * @public
   */
  export interface ComputeLogprobsMember {
    sample?: never;
    computeLogprobs: ComputeLogprobsResult;
    loadWeightsForSampling?: never;
    $unknown?: never;
  }

  /**
   * <p>The result from loading weights for sampling.</p>
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
   * <p>The current status of the sample operation. Possible values are <code>Pending</code>, <code>InProgress</code>, <code>Completed</code>, or <code>Failed</code>.</p>
   * @public
   */
  status: RequestStatus | undefined;

  /**
   * <p>The result payload of the sample operation. The service populates this field only when the status is <code>Completed</code>.</p>
   * @public
   */
  operationResult?: SampleOperationResult | undefined;

  /**
   * <p>A message describing why the sample operation failed. The service populates this field only when the status is <code>Failed</code>.</p>
   * @public
   */
  errorDetails?: string | undefined;
}

/**
 * @public
 */
export interface GetTrainingOperationResultInput {
  /**
   * <p>The name of the training session that owns the operation.</p>
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * <p>The unique identifier of the operation to retrieve, returned by <code>ExecuteTrainingOperation</code>.</p>
   * @public
   */
  operationId: string | undefined;
}

/**
 * <p>The result of loading training state. An empty response indicates success.</p>
 * @public
 */
export interface LoadStateResult {}

/**
 * <p>The result of an optimizer step.</p>
 * @public
 */
export interface OptimizerStepResult {
  /**
   * <p>The training metrics emitted by the engine after the optimizer step.</p>
   * @public
   */
  metrics?: Record<string, number> | undefined;
}

/**
 * <p>The result of saving full training state.</p>
 * @public
 */
export interface SaveStateResult {
  /**
   * <p>The ARN of the model package created for the saved state checkpoint.</p>
   * @public
   */
  modelPackageArn: string | undefined;
}

/**
 * <p>The result of saving model weights.</p>
 * @public
 */
export interface SaveWeightsResult {
  /**
   * <p>The ARN of the model package created for the saved weights.</p>
   * @public
   */
  modelPackageArn?: string | undefined;
}

/**
 * <p>The result of a completed training operation. Exactly one member is populated, corresponding to the operation type that was submitted.</p>
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
   * <p>The result from a forward-only pass.</p>
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
   * <p>The result from a forward and backward pass.</p>
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
   * <p>The result from an optimizer step.</p>
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
   * <p>The result from saving model weights.</p>
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
   * <p>The result from saving full training state.</p>
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
   * <p>The result from loading training state.</p>
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
   * <p>The current status of the operation. Possible values are <code>Pending</code>, <code>InProgress</code>, <code>Completed</code>, <code>Failed</code>, or <code>Skipped</code>.</p>
   * @public
   */
  status: RequestStatus | undefined;

  /**
   * <p>The result payload of the operation. The service populates this field only when the status is <code>Completed</code>. The populated member of the union corresponds to the operation type that was submitted.</p>
   * @public
   */
  operationResult?: OperationResult | undefined;

  /**
   * <p>A message describing why the operation failed. The service populates this field only when the status is <code>Failed</code>.</p>
   * @public
   */
  errorDetails?: string | undefined;

  /**
   * <p>The token usage statistics for metering purposes. The service populates this field for forward and forwardBackward operations upon completion.</p>
   * @public
   */
  tokenUsage?: TrainingTokenUsage | undefined;
}

/**
 * @public
 */
export interface SampleTrainingSessionInput {
  /**
   * <p>The name of the training session whose model to invoke.</p>
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * <p>The MIME type of the input data in the request body.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The desired MIME type of the inference body in the response.</p>
   * @public
   */
  accept?: string | undefined;

  /**
   * <p>The ARN of the model package whose checkpoint to invoke.</p>
   * @public
   */
  modelPackageArn?: string | undefined;

  /**
   * <p>The raw inference request body.</p>
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SampleTrainingSessionOutput {
  /**
   * <p>The MIME type of the inference result in the response body.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The raw inference response body from the model.</p>
   * @public
   */
  body: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SampleTrainingSessionWithResponseStreamInput {
  /**
   * <p>The name of the training session whose model to invoke.</p>
   * @public
   */
  trainingSessionName: string | undefined;

  /**
   * <p>The MIME type of the input data in the request body.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The desired MIME type of the inference body in the response.</p>
   * @public
   */
  accept?: string | undefined;

  /**
   * <p>The ARN of the model package whose checkpoint to invoke.</p>
   * @public
   */
  modelPackageArn?: string | undefined;

  /**
   * <p>The raw inference request body.</p>
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface SampleTrainingSessionWithResponseStreamOutput {
  /**
   * <p>The MIME type of the streaming inference result.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The streaming inference response from the model, delivered as a series of chunks.</p>
   * @public
   */
  body: StreamingBlobTypes | undefined;
}
