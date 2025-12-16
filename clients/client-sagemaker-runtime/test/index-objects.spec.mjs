import {
  InternalDependencyException,
  InternalDependencyException$,
  InternalFailure,
  InternalFailure$,
  InternalStreamFailure,
  InternalStreamFailure$,
  InvokeEndpoint$,
  InvokeEndpointAsync$,
  InvokeEndpointAsyncCommand,
  InvokeEndpointAsyncInput$,
  InvokeEndpointAsyncOutput$,
  InvokeEndpointCommand,
  InvokeEndpointInput$,
  InvokeEndpointOutput$,
  InvokeEndpointWithResponseStream$,
  InvokeEndpointWithResponseStreamCommand,
  InvokeEndpointWithResponseStreamInput$,
  InvokeEndpointWithResponseStreamOutput$,
  ModelError,
  ModelError$,
  ModelNotReadyException,
  ModelNotReadyException$,
  ModelStreamError,
  ModelStreamError$,
  PayloadPart$,
  ResponseStream$,
  SageMakerRuntime,
  SageMakerRuntimeClient,
  SageMakerRuntimeServiceException,
  ServiceUnavailable,
  ServiceUnavailable$,
  ValidationError,
  ValidationError$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerRuntimeClient === "function");
assert(typeof SageMakerRuntime === "function");
// commands
assert(typeof InvokeEndpointCommand === "function");
assert(typeof InvokeEndpoint$ === "object");
assert(typeof InvokeEndpointAsyncCommand === "function");
assert(typeof InvokeEndpointAsync$ === "object");
assert(typeof InvokeEndpointWithResponseStreamCommand === "function");
assert(typeof InvokeEndpointWithResponseStream$ === "object");
// structural schemas
assert(typeof InvokeEndpointAsyncInput$ === "object");
assert(typeof InvokeEndpointAsyncOutput$ === "object");
assert(typeof InvokeEndpointInput$ === "object");
assert(typeof InvokeEndpointOutput$ === "object");
assert(typeof InvokeEndpointWithResponseStreamInput$ === "object");
assert(typeof InvokeEndpointWithResponseStreamOutput$ === "object");
assert(typeof PayloadPart$ === "object");
assert(typeof ResponseStream$ === "object");
// errors
assert(InternalDependencyException.prototype instanceof SageMakerRuntimeServiceException);
assert(typeof InternalDependencyException$ === "object");
assert(InternalFailure.prototype instanceof SageMakerRuntimeServiceException);
assert(typeof InternalFailure$ === "object");
assert(InternalStreamFailure.prototype instanceof SageMakerRuntimeServiceException);
assert(typeof InternalStreamFailure$ === "object");
assert(ModelError.prototype instanceof SageMakerRuntimeServiceException);
assert(typeof ModelError$ === "object");
assert(ModelNotReadyException.prototype instanceof SageMakerRuntimeServiceException);
assert(typeof ModelNotReadyException$ === "object");
assert(ModelStreamError.prototype instanceof SageMakerRuntimeServiceException);
assert(typeof ModelStreamError$ === "object");
assert(ServiceUnavailable.prototype instanceof SageMakerRuntimeServiceException);
assert(typeof ServiceUnavailable$ === "object");
assert(ValidationError.prototype instanceof SageMakerRuntimeServiceException);
assert(typeof ValidationError$ === "object");
assert(SageMakerRuntimeServiceException.prototype instanceof Error);
console.log(`SageMakerRuntime index test passed.`);
