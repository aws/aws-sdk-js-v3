import {
  AdamParamsConfig$,
  ComputeLogprobsConfig$,
  ComputeLogprobsResult$,
  ConflictException,
  ConflictException$,
  Datum$,
  EncodedTextChunk$,
  EncodedTextChunkType,
  ExecuteSamplingOperation$,
  ExecuteSamplingOperationCommand,
  ExecuteSamplingOperationInput$,
  ExecuteSamplingOperationOutput$,
  ExecuteTrainingOperation$,
  ExecuteTrainingOperationCommand,
  ExecuteTrainingOperationInput$,
  ExecuteTrainingOperationOutput$,
  ForwardBackwardConfig$,
  ForwardBackwardResult$,
  ForwardConfig$,
  ForwardResult$,
  GetSamplingOperationResult$,
  GetSamplingOperationResultCommand,
  GetSamplingOperationResultInput$,
  GetSamplingOperationResultOutput$,
  GetTrainingOperationResult$,
  GetTrainingOperationResultCommand,
  GetTrainingOperationResultInput$,
  GetTrainingOperationResultOutput$,
  InternalServerException,
  InternalServerException$,
  LoadStateConfig$,
  LoadStateResult$,
  LoadWeightsForSamplingConfig$,
  LoadWeightsForSamplingResult$,
  LossFnName,
  ModelInput$,
  OperationConfig$,
  OperationResult$,
  OptimizerStepConfig$,
  OptimizerStepResult$,
  RequestStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SageMakerTrainingSessionRuntime,
  SageMakerTrainingSessionRuntimeClient,
  SageMakerTrainingSessionRuntimeServiceException,
  SampleConfig$,
  SampledSequence$,
  SampleOperationConfig$,
  SampleOperationResult$,
  SampleResponse$,
  SampleTokenUsage$,
  SampleTrainingSession$,
  SampleTrainingSessionCommand,
  SampleTrainingSessionInput$,
  SampleTrainingSessionOutput$,
  SampleTrainingSessionWithResponseStream$,
  SampleTrainingSessionWithResponseStreamCommand,
  SampleTrainingSessionWithResponseStreamInput$,
  SampleTrainingSessionWithResponseStreamOutput$,
  SamplingParams$,
  SaveStateConfig$,
  SaveStateResult$,
  SaveWeightsConfig$,
  SaveWeightsResult$,
  StopReason,
  TensorData$,
  ThrottlingException,
  ThrottlingException$,
  TokenLogprob$,
  TrainingTokenUsage$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerTrainingSessionRuntimeClient === "function");
assert(typeof SageMakerTrainingSessionRuntime === "function");
// commands
assert(typeof ExecuteSamplingOperationCommand === "function");
assert(typeof ExecuteSamplingOperation$ === "object");
assert(typeof ExecuteTrainingOperationCommand === "function");
assert(typeof ExecuteTrainingOperation$ === "object");
assert(typeof GetSamplingOperationResultCommand === "function");
assert(typeof GetSamplingOperationResult$ === "object");
assert(typeof GetTrainingOperationResultCommand === "function");
assert(typeof GetTrainingOperationResult$ === "object");
assert(typeof SampleTrainingSessionCommand === "function");
assert(typeof SampleTrainingSession$ === "object");
assert(typeof SampleTrainingSessionWithResponseStreamCommand === "function");
assert(typeof SampleTrainingSessionWithResponseStream$ === "object");
// structural schemas
assert(typeof AdamParamsConfig$ === "object");
assert(typeof ComputeLogprobsConfig$ === "object");
assert(typeof ComputeLogprobsResult$ === "object");
assert(typeof Datum$ === "object");
assert(typeof EncodedTextChunk$ === "object");
assert(typeof ExecuteSamplingOperationInput$ === "object");
assert(typeof ExecuteSamplingOperationOutput$ === "object");
assert(typeof ExecuteTrainingOperationInput$ === "object");
assert(typeof ExecuteTrainingOperationOutput$ === "object");
assert(typeof ForwardBackwardConfig$ === "object");
assert(typeof ForwardBackwardResult$ === "object");
assert(typeof ForwardConfig$ === "object");
assert(typeof ForwardResult$ === "object");
assert(typeof GetSamplingOperationResultInput$ === "object");
assert(typeof GetSamplingOperationResultOutput$ === "object");
assert(typeof GetTrainingOperationResultInput$ === "object");
assert(typeof GetTrainingOperationResultOutput$ === "object");
assert(typeof LoadStateConfig$ === "object");
assert(typeof LoadStateResult$ === "object");
assert(typeof LoadWeightsForSamplingConfig$ === "object");
assert(typeof LoadWeightsForSamplingResult$ === "object");
assert(typeof ModelInput$ === "object");
assert(typeof OperationConfig$ === "object");
assert(typeof OperationResult$ === "object");
assert(typeof OptimizerStepConfig$ === "object");
assert(typeof OptimizerStepResult$ === "object");
assert(typeof SampleConfig$ === "object");
assert(typeof SampledSequence$ === "object");
assert(typeof SampleOperationConfig$ === "object");
assert(typeof SampleOperationResult$ === "object");
assert(typeof SampleResponse$ === "object");
assert(typeof SampleTokenUsage$ === "object");
assert(typeof SampleTrainingSessionInput$ === "object");
assert(typeof SampleTrainingSessionOutput$ === "object");
assert(typeof SampleTrainingSessionWithResponseStreamInput$ === "object");
assert(typeof SampleTrainingSessionWithResponseStreamOutput$ === "object");
assert(typeof SamplingParams$ === "object");
assert(typeof SaveStateConfig$ === "object");
assert(typeof SaveStateResult$ === "object");
assert(typeof SaveWeightsConfig$ === "object");
assert(typeof SaveWeightsResult$ === "object");
assert(typeof TensorData$ === "object");
assert(typeof TokenLogprob$ === "object");
assert(typeof TrainingTokenUsage$ === "object");
// enums
assert(typeof EncodedTextChunkType === "object");
assert(typeof LossFnName === "object");
assert(typeof RequestStatus === "object");
assert(typeof StopReason === "object");
// errors
assert(ConflictException.prototype instanceof SageMakerTrainingSessionRuntimeServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SageMakerTrainingSessionRuntimeServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SageMakerTrainingSessionRuntimeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof SageMakerTrainingSessionRuntimeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SageMakerTrainingSessionRuntimeServiceException);
assert(typeof ValidationException$ === "object");
assert(SageMakerTrainingSessionRuntimeServiceException.prototype instanceof Error);
console.log(`SageMakerTrainingSessionRuntime index test passed.`);
