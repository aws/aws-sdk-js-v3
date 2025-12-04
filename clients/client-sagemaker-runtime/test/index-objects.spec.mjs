import {
  InternalStreamFailure,
  InvokeEndpointAsyncCommand,
  InvokeEndpointCommand,
  InvokeEndpointWithResponseStreamCommand,
  ModelStreamError,
  SageMakerRuntime,
  SageMakerRuntimeClient,
  SageMakerRuntimeServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerRuntimeClient === "function")
assert(typeof SageMakerRuntime === "function")
// commands
assert(typeof InvokeEndpointCommand === "function")
assert(typeof InvokeEndpointAsyncCommand === "function")
assert(typeof InvokeEndpointWithResponseStreamCommand === "function")
// errors
assert(InternalStreamFailure.prototype instanceof SageMakerRuntimeServiceException)
assert(ModelStreamError.prototype instanceof SageMakerRuntimeServiceException)
assert(SageMakerRuntimeServiceException.prototype instanceof Error)
console.log(`SageMakerRuntime index test passed.`);
