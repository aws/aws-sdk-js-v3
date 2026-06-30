import {
  AccessDeniedException,
  AccessDeniedException$,
  ActionSet$,
  ActionSummary$,
  Condition$,
  ConflictException,
  ConflictException$,
  CreateSupportPermit$,
  CreateSupportPermitCommand,
  CreateSupportPermitInput$,
  CreateSupportPermitOutput$,
  DeleteSupportPermit$,
  DeleteSupportPermitCommand,
  DeleteSupportPermitInput$,
  DeleteSupportPermitOutput$,
  GetAction$,
  GetActionCommand,
  GetActionInput$,
  GetActionOutput$,
  GetSupportPermit$,
  GetSupportPermitCommand,
  GetSupportPermitInput$,
  GetSupportPermitOutput$,
  InternalServerException,
  InternalServerException$,
  ListActions$,
  ListActionsCommand,
  ListActionsInput$,
  ListActionsOutput$,
  ListSupportPermitRequests$,
  ListSupportPermitRequestsCommand,
  ListSupportPermitRequestsInput$,
  ListSupportPermitRequestsOutput$,
  ListSupportPermits$,
  ListSupportPermitsCommand,
  ListSupportPermitsInput$,
  ListSupportPermitsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  paginateListActions,
  paginateListSupportPermitRequests,
  paginateListSupportPermits,
  Permit$,
  RejectSupportPermitRequest$,
  RejectSupportPermitRequestCommand,
  RejectSupportPermitRequestInput$,
  RejectSupportPermitRequestOutput$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceSet$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SigningKeyInfo$,
  SupportAuthZ,
  SupportAuthZClient,
  SupportAuthZServiceException,
  SupportPermitRequest$,
  SupportPermitRequestStatus,
  SupportPermitStatus,
  SupportPermitSummary$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SupportAuthZClient === "function");
assert(typeof SupportAuthZ === "function");
// commands
assert(typeof CreateSupportPermitCommand === "function");
assert(typeof CreateSupportPermit$ === "object");
assert(typeof DeleteSupportPermitCommand === "function");
assert(typeof DeleteSupportPermit$ === "object");
assert(typeof GetActionCommand === "function");
assert(typeof GetAction$ === "object");
assert(typeof GetSupportPermitCommand === "function");
assert(typeof GetSupportPermit$ === "object");
assert(typeof ListActionsCommand === "function");
assert(typeof ListActions$ === "object");
assert(typeof ListSupportPermitRequestsCommand === "function");
assert(typeof ListSupportPermitRequests$ === "object");
assert(typeof ListSupportPermitsCommand === "function");
assert(typeof ListSupportPermits$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RejectSupportPermitRequestCommand === "function");
assert(typeof RejectSupportPermitRequest$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof ActionSet$ === "object");
assert(typeof ActionSummary$ === "object");
assert(typeof Condition$ === "object");
assert(typeof CreateSupportPermitInput$ === "object");
assert(typeof CreateSupportPermitOutput$ === "object");
assert(typeof DeleteSupportPermitInput$ === "object");
assert(typeof DeleteSupportPermitOutput$ === "object");
assert(typeof GetActionInput$ === "object");
assert(typeof GetActionOutput$ === "object");
assert(typeof GetSupportPermitInput$ === "object");
assert(typeof GetSupportPermitOutput$ === "object");
assert(typeof ListActionsInput$ === "object");
assert(typeof ListActionsOutput$ === "object");
assert(typeof ListSupportPermitRequestsInput$ === "object");
assert(typeof ListSupportPermitRequestsOutput$ === "object");
assert(typeof ListSupportPermitsInput$ === "object");
assert(typeof ListSupportPermitsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof Permit$ === "object");
assert(typeof RejectSupportPermitRequestInput$ === "object");
assert(typeof RejectSupportPermitRequestOutput$ === "object");
assert(typeof ResourceSet$ === "object");
assert(typeof SigningKeyInfo$ === "object");
assert(typeof SupportPermitRequest$ === "object");
assert(typeof SupportPermitSummary$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof SupportPermitRequestStatus === "object");
assert(typeof SupportPermitStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof SupportAuthZServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SupportAuthZServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SupportAuthZServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SupportAuthZServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SupportAuthZServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SupportAuthZServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SupportAuthZServiceException);
assert(typeof ValidationException$ === "object");
assert(SupportAuthZServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListActions === "function");
assert(typeof paginateListSupportPermitRequests === "function");
assert(typeof paginateListSupportPermits === "function");
console.log(`SupportAuthZ index test passed.`);
