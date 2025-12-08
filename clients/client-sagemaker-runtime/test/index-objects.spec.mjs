import {
  InternalDependencyException,
  InternalFailure,
  InternalStreamFailure,
  InvokeEndpointAsyncCommand,
  InvokeEndpointCommand,
  InvokeEndpointWithResponseStreamCommand,
  ModelError,
  ModelNotReadyException,
  ModelStreamError,
  SageMakerRuntime,
  SageMakerRuntimeClient,
  SageMakerRuntimeServiceException,
  ServiceUnavailable,
  ValidationError,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerRuntimeClient === "function");
assert(typeof SageMakerRuntime === "function");
// commands
assert(typeof InvokeEndpointCommand === "function");
assert(typeof InvokeEndpointAsyncCommand === "function");
assert(typeof InvokeEndpointWithResponseStreamCommand === "function");
// errors
assert(InternalDependencyException.prototype instanceof SageMakerRuntimeServiceException);
assert(InternalFailure.prototype instanceof SageMakerRuntimeServiceException);
assert(InternalStreamFailure.prototype instanceof SageMakerRuntimeServiceException);
assert(ModelError.prototype instanceof SageMakerRuntimeServiceException);
assert(ModelNotReadyException.prototype instanceof SageMakerRuntimeServiceException);
assert(ModelStreamError.prototype instanceof SageMakerRuntimeServiceException);
assert(ServiceUnavailable.prototype instanceof SageMakerRuntimeServiceException);
assert(ValidationError.prototype instanceof SageMakerRuntimeServiceException);
assert(SageMakerRuntimeServiceException.prototype instanceof Error);
console.log(`SageMakerRuntime index test passed.`);
