import {
  AlreadyExistsException,
  CancelResourceRequestCommand,
  ClientTokenConflictException,
  CloudControl,
  CloudControlClient,
  CloudControlServiceException,
  ConcurrentModificationException,
  ConcurrentOperationException,
  CreateResourceCommand,
  DeleteResourceCommand,
  GeneralServiceException,
  GetResourceCommand,
  GetResourceRequestStatusCommand,
  HandlerErrorCode,
  HandlerFailureException,
  HandlerInternalFailureException,
  InvalidCredentialsException,
  InvalidRequestException,
  ListResourceRequestsCommand,
  ListResourcesCommand,
  NetworkFailureException,
  NotStabilizedException,
  NotUpdatableException,
  Operation,
  OperationStatus,
  PrivateTypeException,
  RequestTokenNotFoundException,
  ResourceConflictException,
  ResourceNotFoundException,
  ServiceInternalErrorException,
  ServiceLimitExceededException,
  ThrottlingException,
  TypeNotFoundException,
  UnsupportedActionException,
  UpdateResourceCommand,
  paginateListResourceRequests,
  paginateListResources,
  waitForResourceRequestSuccess,
  waitUntilResourceRequestSuccess,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudControlClient === "function");
assert(typeof CloudControl === "function");
// commands
assert(typeof CancelResourceRequestCommand === "function");
assert(typeof CreateResourceCommand === "function");
assert(typeof DeleteResourceCommand === "function");
assert(typeof GetResourceCommand === "function");
assert(typeof GetResourceRequestStatusCommand === "function");
assert(typeof ListResourceRequestsCommand === "function");
assert(typeof ListResourcesCommand === "function");
assert(typeof UpdateResourceCommand === "function");
// enums
assert(typeof HandlerErrorCode === "object");
assert(typeof Operation === "object");
assert(typeof OperationStatus === "object");
// errors
assert(AlreadyExistsException.prototype instanceof CloudControlServiceException);
assert(ClientTokenConflictException.prototype instanceof CloudControlServiceException);
assert(ConcurrentModificationException.prototype instanceof CloudControlServiceException);
assert(ConcurrentOperationException.prototype instanceof CloudControlServiceException);
assert(GeneralServiceException.prototype instanceof CloudControlServiceException);
assert(HandlerFailureException.prototype instanceof CloudControlServiceException);
assert(HandlerInternalFailureException.prototype instanceof CloudControlServiceException);
assert(InvalidCredentialsException.prototype instanceof CloudControlServiceException);
assert(InvalidRequestException.prototype instanceof CloudControlServiceException);
assert(NetworkFailureException.prototype instanceof CloudControlServiceException);
assert(NotStabilizedException.prototype instanceof CloudControlServiceException);
assert(NotUpdatableException.prototype instanceof CloudControlServiceException);
assert(PrivateTypeException.prototype instanceof CloudControlServiceException);
assert(RequestTokenNotFoundException.prototype instanceof CloudControlServiceException);
assert(ResourceConflictException.prototype instanceof CloudControlServiceException);
assert(ResourceNotFoundException.prototype instanceof CloudControlServiceException);
assert(ServiceInternalErrorException.prototype instanceof CloudControlServiceException);
assert(ServiceLimitExceededException.prototype instanceof CloudControlServiceException);
assert(ThrottlingException.prototype instanceof CloudControlServiceException);
assert(TypeNotFoundException.prototype instanceof CloudControlServiceException);
assert(UnsupportedActionException.prototype instanceof CloudControlServiceException);
assert(CloudControlServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForResourceRequestSuccess === "function");
assert(typeof waitUntilResourceRequestSuccess === "function");
// paginators
assert(typeof paginateListResourceRequests === "function");
assert(typeof paginateListResources === "function");
console.log(`CloudControl index test passed.`);
