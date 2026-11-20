import {
  AccessDeniedException,
  AccessDeniedException$,
  BadGatewayException,
  BadGatewayException$,
  GatewayTimeoutException,
  GatewayTimeoutException$,
  InternalServerException,
  InternalServerException$,
  InternalStreamFailure,
  InternalStreamFailure$,
  InvokeGlobalInferenceGateway$,
  InvokeGlobalInferenceGatewayCommand,
  InvokeGlobalInferenceGatewayInput$,
  InvokeGlobalInferenceGatewayOutput$,
  InvokeGlobalInferenceGatewayWithResponseStream$,
  InvokeGlobalInferenceGatewayWithResponseStreamCommand,
  InvokeGlobalInferenceGatewayWithResponseStreamInput$,
  InvokeGlobalInferenceGatewayWithResponseStreamOutput$,
  ModelStreamError,
  ModelStreamError$,
  PayloadPart$,
  PayloadTooLargeException,
  PayloadTooLargeException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResponseStream$,
  SageMakerGatewayRuntime,
  SageMakerGatewayRuntimeClient,
  SageMakerGatewayRuntimeServiceException,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StreamErrorCode,
  ThrottlingException,
  ThrottlingException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SageMakerGatewayRuntimeClient === "function");
assert(typeof SageMakerGatewayRuntime === "function");
// commands
assert(typeof InvokeGlobalInferenceGatewayCommand === "function");
assert(typeof InvokeGlobalInferenceGateway$ === "object");
assert(typeof InvokeGlobalInferenceGatewayWithResponseStreamCommand === "function");
assert(typeof InvokeGlobalInferenceGatewayWithResponseStream$ === "object");
// structural schemas
assert(typeof InvokeGlobalInferenceGatewayInput$ === "object");
assert(typeof InvokeGlobalInferenceGatewayOutput$ === "object");
assert(typeof InvokeGlobalInferenceGatewayWithResponseStreamInput$ === "object");
assert(typeof InvokeGlobalInferenceGatewayWithResponseStreamOutput$ === "object");
assert(typeof PayloadPart$ === "object");
assert(typeof ResponseStream$ === "object");
// enums
assert(typeof StreamErrorCode === "object");
// errors
assert(AccessDeniedException.prototype instanceof SageMakerGatewayRuntimeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadGatewayException.prototype instanceof SageMakerGatewayRuntimeServiceException);
assert(typeof BadGatewayException$ === "object");
assert(GatewayTimeoutException.prototype instanceof SageMakerGatewayRuntimeServiceException);
assert(typeof GatewayTimeoutException$ === "object");
assert(InternalServerException.prototype instanceof SageMakerGatewayRuntimeServiceException);
assert(typeof InternalServerException$ === "object");
assert(InternalStreamFailure.prototype instanceof SageMakerGatewayRuntimeServiceException);
assert(typeof InternalStreamFailure$ === "object");
assert(ModelStreamError.prototype instanceof SageMakerGatewayRuntimeServiceException);
assert(typeof ModelStreamError$ === "object");
assert(PayloadTooLargeException.prototype instanceof SageMakerGatewayRuntimeServiceException);
assert(typeof PayloadTooLargeException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SageMakerGatewayRuntimeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof SageMakerGatewayRuntimeServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof SageMakerGatewayRuntimeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(SageMakerGatewayRuntimeServiceException.prototype instanceof Error);
console.log(`SageMakerGatewayRuntime index test passed.`);
