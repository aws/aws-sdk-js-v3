import {
  AccessDeniedException,
  AccessDeniedException$,
  ActorInfo$,
  ApprovalType,
  ApproveTimeOff$,
  ApproveTimeOffCommand,
  ApproveTimeOffRequest$,
  ApproveTimeOffResponse$,
  CancelTimeOff$,
  CancelTimeOffCommand,
  CancelTimeOffRequest$,
  CancelTimeOffResponse$,
  ConflictException,
  ConflictException$,
  ConnectScheduling,
  ConnectSchedulingClient,
  ConnectSchedulingServiceException,
  CreateTimeOff$,
  CreateTimeOffCommand,
  CreateTimeOffRequest$,
  CreateTimeOffResponse$,
  Duration$,
  DurationUnit,
  GetTimeOff$,
  GetTimeOffCommand,
  GetTimeOffRequest$,
  GetTimeOffResponse$,
  InternalServerException,
  InternalServerException$,
  PutTimeOffBalance$,
  PutTimeOffBalanceCommand,
  PutTimeOffBalanceRequest$,
  PutTimeOffBalanceResponse$,
  RejectTimeOff$,
  RejectTimeOffCommand,
  RejectTimeOffRequest$,
  RejectTimeOffResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RuleFailureAction,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ThrottlingException,
  ThrottlingException$,
  TimeOffStatus,
  TimeOffValidationCode,
  TimeOffValidationResult$,
  TimeOffValidationSeverity,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ConnectSchedulingClient === "function");
assert(typeof ConnectScheduling === "function");
// commands
assert(typeof ApproveTimeOffCommand === "function");
assert(typeof ApproveTimeOff$ === "object");
assert(typeof CancelTimeOffCommand === "function");
assert(typeof CancelTimeOff$ === "object");
assert(typeof CreateTimeOffCommand === "function");
assert(typeof CreateTimeOff$ === "object");
assert(typeof GetTimeOffCommand === "function");
assert(typeof GetTimeOff$ === "object");
assert(typeof PutTimeOffBalanceCommand === "function");
assert(typeof PutTimeOffBalance$ === "object");
assert(typeof RejectTimeOffCommand === "function");
assert(typeof RejectTimeOff$ === "object");
// structural schemas
assert(typeof ActorInfo$ === "object");
assert(typeof ApproveTimeOffRequest$ === "object");
assert(typeof ApproveTimeOffResponse$ === "object");
assert(typeof CancelTimeOffRequest$ === "object");
assert(typeof CancelTimeOffResponse$ === "object");
assert(typeof CreateTimeOffRequest$ === "object");
assert(typeof CreateTimeOffResponse$ === "object");
assert(typeof Duration$ === "object");
assert(typeof GetTimeOffRequest$ === "object");
assert(typeof GetTimeOffResponse$ === "object");
assert(typeof PutTimeOffBalanceRequest$ === "object");
assert(typeof PutTimeOffBalanceResponse$ === "object");
assert(typeof RejectTimeOffRequest$ === "object");
assert(typeof RejectTimeOffResponse$ === "object");
assert(typeof TimeOffValidationResult$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof ApprovalType === "object");
assert(typeof DurationUnit === "object");
assert(typeof RuleFailureAction === "object");
assert(typeof TimeOffStatus === "object");
assert(typeof TimeOffValidationCode === "object");
assert(typeof TimeOffValidationSeverity === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof ConnectSchedulingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ConnectSchedulingServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof ConnectSchedulingServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ConnectSchedulingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ConnectSchedulingServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ConnectSchedulingServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ConnectSchedulingServiceException);
assert(typeof ValidationException$ === "object");
assert(ConnectSchedulingServiceException.prototype instanceof Error);
console.log(`ConnectScheduling index test passed.`);
