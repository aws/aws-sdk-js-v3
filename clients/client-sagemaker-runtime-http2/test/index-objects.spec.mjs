import {
  InputValidationError,
  InternalServerError,
  InternalStreamFailure,
  InvokeEndpointWithBidirectionalStreamCommand,
  ModelError,
  ModelStreamError,
  SageMakerRuntimeHTTP2,
  SageMakerRuntimeHTTP2Client,
  SageMakerRuntimeHTTP2ServiceException,
  ServiceUnavailableError,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerRuntimeHTTP2Client === "function");
assert(typeof SageMakerRuntimeHTTP2 === "function");
// commands
assert(typeof InvokeEndpointWithBidirectionalStreamCommand === "function");
// errors
assert(InputValidationError.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(InternalServerError.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(InternalStreamFailure.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(ModelError.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(ModelStreamError.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(ServiceUnavailableError.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(SageMakerRuntimeHTTP2ServiceException.prototype instanceof Error);
console.log(`SageMakerRuntimeHTTP2 index test passed.`);
