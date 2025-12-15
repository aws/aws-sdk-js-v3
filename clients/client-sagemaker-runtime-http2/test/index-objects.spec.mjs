import {
  InputValidationError,
  InputValidationError$,
  InternalServerError,
  InternalServerError$,
  InternalStreamFailure,
  InternalStreamFailure$,
  InvokeEndpointWithBidirectionalStream$,
  InvokeEndpointWithBidirectionalStreamCommand,
  InvokeEndpointWithBidirectionalStreamInput$,
  InvokeEndpointWithBidirectionalStreamOutput$,
  ModelError,
  ModelError$,
  ModelStreamError,
  ModelStreamError$,
  RequestPayloadPart$,
  RequestStreamEvent$,
  ResponsePayloadPart$,
  ResponseStreamEvent$,
  SageMakerRuntimeHTTP2,
  SageMakerRuntimeHTTP2Client,
  SageMakerRuntimeHTTP2ServiceException,
  ServiceUnavailableError,
  ServiceUnavailableError$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerRuntimeHTTP2Client === "function");
assert(typeof SageMakerRuntimeHTTP2 === "function");
// commands
assert(typeof InvokeEndpointWithBidirectionalStreamCommand === "function");
assert(typeof InvokeEndpointWithBidirectionalStream$ === "object");
// structural schemas
assert(typeof InvokeEndpointWithBidirectionalStreamInput$ === "object");
assert(typeof InvokeEndpointWithBidirectionalStreamOutput$ === "object");
assert(typeof RequestPayloadPart$ === "object");
assert(typeof RequestStreamEvent$ === "object");
assert(typeof ResponsePayloadPart$ === "object");
assert(typeof ResponseStreamEvent$ === "object");
// errors
assert(InputValidationError.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(typeof InputValidationError$ === "object");
assert(InternalServerError.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(typeof InternalServerError$ === "object");
assert(InternalStreamFailure.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(typeof InternalStreamFailure$ === "object");
assert(ModelError.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(typeof ModelError$ === "object");
assert(ModelStreamError.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(typeof ModelStreamError$ === "object");
assert(ServiceUnavailableError.prototype instanceof SageMakerRuntimeHTTP2ServiceException);
assert(typeof ServiceUnavailableError$ === "object");
assert(SageMakerRuntimeHTTP2ServiceException.prototype instanceof Error);
console.log(`SageMakerRuntimeHTTP2 index test passed.`);
