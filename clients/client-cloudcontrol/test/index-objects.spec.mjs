import {
  AlreadyExistsException,
  AlreadyExistsException$,
  CancelResourceRequest$,
  CancelResourceRequestCommand,
  CancelResourceRequestInput$,
  CancelResourceRequestOutput$,
  ClientTokenConflictException,
  ClientTokenConflictException$,
  CloudControl,
  CloudControlClient,
  CloudControlServiceException,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConcurrentOperationException,
  ConcurrentOperationException$,
  CreateResource$,
  CreateResourceCommand,
  CreateResourceInput$,
  CreateResourceOutput$,
  DeleteResource$,
  DeleteResourceCommand,
  DeleteResourceInput$,
  DeleteResourceOutput$,
  GeneralServiceException,
  GeneralServiceException$,
  GetResource$,
  GetResourceCommand,
  GetResourceInput$,
  GetResourceOutput$,
  GetResourceRequestStatus$,
  GetResourceRequestStatusCommand,
  GetResourceRequestStatusInput$,
  GetResourceRequestStatusOutput$,
  HandlerErrorCode,
  HandlerFailureException,
  HandlerFailureException$,
  HandlerInternalFailureException,
  HandlerInternalFailureException$,
  HookProgressEvent$,
  InvalidCredentialsException,
  InvalidCredentialsException$,
  InvalidRequestException,
  InvalidRequestException$,
  ListResourceRequests$,
  ListResourceRequestsCommand,
  ListResourceRequestsInput$,
  ListResourceRequestsOutput$,
  ListResources$,
  ListResourcesCommand,
  ListResourcesInput$,
  ListResourcesOutput$,
  NetworkFailureException,
  NetworkFailureException$,
  NotStabilizedException,
  NotStabilizedException$,
  NotUpdatableException,
  NotUpdatableException$,
  Operation,
  OperationStatus,
  PrivateTypeException,
  PrivateTypeException$,
  ProgressEvent$,
  RequestTokenNotFoundException,
  RequestTokenNotFoundException$,
  ResourceConflictException,
  ResourceConflictException$,
  ResourceDescription$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceRequestStatusFilter$,
  ServiceInternalErrorException,
  ServiceInternalErrorException$,
  ServiceLimitExceededException,
  ServiceLimitExceededException$,
  ThrottlingException,
  ThrottlingException$,
  TypeNotFoundException,
  TypeNotFoundException$,
  UnsupportedActionException,
  UnsupportedActionException$,
  UpdateResource$,
  UpdateResourceCommand,
  UpdateResourceInput$,
  UpdateResourceOutput$,
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
assert(typeof CancelResourceRequest$ === "object");
assert(typeof CreateResourceCommand === "function");
assert(typeof CreateResource$ === "object");
assert(typeof DeleteResourceCommand === "function");
assert(typeof DeleteResource$ === "object");
assert(typeof GetResourceCommand === "function");
assert(typeof GetResource$ === "object");
assert(typeof GetResourceRequestStatusCommand === "function");
assert(typeof GetResourceRequestStatus$ === "object");
assert(typeof ListResourceRequestsCommand === "function");
assert(typeof ListResourceRequests$ === "object");
assert(typeof ListResourcesCommand === "function");
assert(typeof ListResources$ === "object");
assert(typeof UpdateResourceCommand === "function");
assert(typeof UpdateResource$ === "object");
// structural schemas
assert(typeof CancelResourceRequestInput$ === "object");
assert(typeof CancelResourceRequestOutput$ === "object");
assert(typeof CreateResourceInput$ === "object");
assert(typeof CreateResourceOutput$ === "object");
assert(typeof DeleteResourceInput$ === "object");
assert(typeof DeleteResourceOutput$ === "object");
assert(typeof GetResourceInput$ === "object");
assert(typeof GetResourceOutput$ === "object");
assert(typeof GetResourceRequestStatusInput$ === "object");
assert(typeof GetResourceRequestStatusOutput$ === "object");
assert(typeof HookProgressEvent$ === "object");
assert(typeof ListResourceRequestsInput$ === "object");
assert(typeof ListResourceRequestsOutput$ === "object");
assert(typeof ListResourcesInput$ === "object");
assert(typeof ListResourcesOutput$ === "object");
assert(typeof ProgressEvent$ === "object");
assert(typeof ResourceDescription$ === "object");
assert(typeof ResourceRequestStatusFilter$ === "object");
assert(typeof UpdateResourceInput$ === "object");
assert(typeof UpdateResourceOutput$ === "object");
// enums
assert(typeof HandlerErrorCode === "object");
assert(typeof Operation === "object");
assert(typeof OperationStatus === "object");
// errors
assert(AlreadyExistsException.prototype instanceof CloudControlServiceException);
assert(typeof AlreadyExistsException$ === "object");
assert(ClientTokenConflictException.prototype instanceof CloudControlServiceException);
assert(typeof ClientTokenConflictException$ === "object");
assert(ConcurrentModificationException.prototype instanceof CloudControlServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConcurrentOperationException.prototype instanceof CloudControlServiceException);
assert(typeof ConcurrentOperationException$ === "object");
assert(GeneralServiceException.prototype instanceof CloudControlServiceException);
assert(typeof GeneralServiceException$ === "object");
assert(HandlerFailureException.prototype instanceof CloudControlServiceException);
assert(typeof HandlerFailureException$ === "object");
assert(HandlerInternalFailureException.prototype instanceof CloudControlServiceException);
assert(typeof HandlerInternalFailureException$ === "object");
assert(InvalidCredentialsException.prototype instanceof CloudControlServiceException);
assert(typeof InvalidCredentialsException$ === "object");
assert(InvalidRequestException.prototype instanceof CloudControlServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(NetworkFailureException.prototype instanceof CloudControlServiceException);
assert(typeof NetworkFailureException$ === "object");
assert(NotStabilizedException.prototype instanceof CloudControlServiceException);
assert(typeof NotStabilizedException$ === "object");
assert(NotUpdatableException.prototype instanceof CloudControlServiceException);
assert(typeof NotUpdatableException$ === "object");
assert(PrivateTypeException.prototype instanceof CloudControlServiceException);
assert(typeof PrivateTypeException$ === "object");
assert(RequestTokenNotFoundException.prototype instanceof CloudControlServiceException);
assert(typeof RequestTokenNotFoundException$ === "object");
assert(ResourceConflictException.prototype instanceof CloudControlServiceException);
assert(typeof ResourceConflictException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CloudControlServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceInternalErrorException.prototype instanceof CloudControlServiceException);
assert(typeof ServiceInternalErrorException$ === "object");
assert(ServiceLimitExceededException.prototype instanceof CloudControlServiceException);
assert(typeof ServiceLimitExceededException$ === "object");
assert(ThrottlingException.prototype instanceof CloudControlServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TypeNotFoundException.prototype instanceof CloudControlServiceException);
assert(typeof TypeNotFoundException$ === "object");
assert(UnsupportedActionException.prototype instanceof CloudControlServiceException);
assert(typeof UnsupportedActionException$ === "object");
assert(CloudControlServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForResourceRequestSuccess === "function");
assert(typeof waitUntilResourceRequestSuccess === "function");
// paginators
assert(typeof paginateListResourceRequests === "function");
assert(typeof paginateListResources === "function");
console.log(`CloudControl index test passed.`);
