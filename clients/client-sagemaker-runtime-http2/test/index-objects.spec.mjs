import {
  InternalStreamFailure,
  InvokeEndpointWithBidirectionalStreamCommand,
  ModelStreamError,
  SageMakerRuntimeHTTP2,
  SageMakerRuntimeHTTP2Client,
  SageMakerRuntimeHTTP2ServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerRuntimeHTTP2Client === "function");
assert(typeof SageMakerRuntimeHTTP2 === "function");
// commands
assert(typeof InvokeEndpointWithBidirectionalStreamCommand === "function");
// errors
assert(InternalStreamFailure.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(ModelStreamError.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(SageMakerRuntimeHTTP2ServiceException.prototype instanceof Error);
console.log(`SageMakerRuntimeHTTP2 index test passed.`);
