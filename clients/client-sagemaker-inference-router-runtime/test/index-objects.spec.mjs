import {
  AccessDeniedException,
  AccessDeniedException$,
  InternalDependencyException,
  InternalDependencyException$,
  InternalFailure,
  InternalFailure$,
  InvokeInferenceRouter$,
  InvokeInferenceRouterAsync$,
  InvokeInferenceRouterAsyncCommand,
  InvokeInferenceRouterAsyncInput$,
  InvokeInferenceRouterAsyncOutput$,
  InvokeInferenceRouterCommand,
  InvokeInferenceRouterInput$,
  InvokeInferenceRouterOutput$,
  ModelError,
  ModelError$,
  ModelNotReadyException,
  ModelNotReadyException$,
  RequestTimeoutException,
  RequestTimeoutException$,
  SageMakerInferenceRouterRuntime,
  SageMakerInferenceRouterRuntimeClient,
  SageMakerInferenceRouterRuntimeServiceException,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  ThrottlingException,
  ThrottlingException$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerInferenceRouterRuntimeClient === "function");
assert(typeof SageMakerInferenceRouterRuntime === "function");
// commands
assert(typeof InvokeInferenceRouterCommand === "function");
assert(typeof InvokeInferenceRouter$ === "object");
assert(typeof InvokeInferenceRouterAsyncCommand === "function");
assert(typeof InvokeInferenceRouterAsync$ === "object");
// structural schemas
assert(typeof InvokeInferenceRouterAsyncInput$ === "object");
assert(typeof InvokeInferenceRouterAsyncOutput$ === "object");
assert(typeof InvokeInferenceRouterInput$ === "object");
assert(typeof InvokeInferenceRouterOutput$ === "object");
// errors
assert(AccessDeniedException.prototype instanceof SageMakerInferenceRouterRuntimeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalDependencyException.prototype instanceof SageMakerInferenceRouterRuntimeServiceException);
assert(typeof InternalDependencyException$ === "object");
assert(InternalFailure.prototype instanceof SageMakerInferenceRouterRuntimeServiceException);
assert(typeof InternalFailure$ === "object");
assert(ModelError.prototype instanceof SageMakerInferenceRouterRuntimeServiceException);
assert(typeof ModelError$ === "object");
assert(ModelNotReadyException.prototype instanceof SageMakerInferenceRouterRuntimeServiceException);
assert(typeof ModelNotReadyException$ === "object");
assert(RequestTimeoutException.prototype instanceof SageMakerInferenceRouterRuntimeServiceException);
assert(typeof RequestTimeoutException$ === "object");
assert(ServiceUnavailableException.prototype instanceof SageMakerInferenceRouterRuntimeServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof SageMakerInferenceRouterRuntimeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SageMakerInferenceRouterRuntimeServiceException);
assert(typeof ValidationException$ === "object");
assert(SageMakerInferenceRouterRuntimeServiceException.prototype instanceof Error);
console.log(`SageMakerInferenceRouterRuntime index test passed.`);
