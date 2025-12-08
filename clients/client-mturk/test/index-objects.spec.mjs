import {
  AcceptQualificationRequestCommand,
  ApproveAssignmentCommand,
  AssignmentStatus,
  AssociateQualificationWithWorkerCommand,
  Comparator,
  CreateAdditionalAssignmentsForHITCommand,
  CreateHITCommand,
  CreateHITTypeCommand,
  CreateHITWithHITTypeCommand,
  CreateQualificationTypeCommand,
  CreateWorkerBlockCommand,
  DeleteHITCommand,
  DeleteQualificationTypeCommand,
  DeleteWorkerBlockCommand,
  DisassociateQualificationFromWorkerCommand,
  EventType,
  GetAccountBalanceCommand,
  GetAssignmentCommand,
  GetFileUploadURLCommand,
  GetHITCommand,
  GetQualificationScoreCommand,
  GetQualificationTypeCommand,
  HITAccessActions,
  HITReviewStatus,
  HITStatus,
  ListAssignmentsForHITCommand,
  ListBonusPaymentsCommand,
  ListHITsCommand,
  ListHITsForQualificationTypeCommand,
  ListQualificationRequestsCommand,
  ListQualificationTypesCommand,
  ListReviewPolicyResultsForHITCommand,
  ListReviewableHITsCommand,
  ListWorkerBlocksCommand,
  ListWorkersWithQualificationTypeCommand,
  MTurk,
  MTurkClient,
  MTurkServiceException,
  NotificationTransport,
  NotifyWorkersCommand,
  NotifyWorkersFailureCode,
  QualificationStatus,
  QualificationTypeStatus,
  RejectAssignmentCommand,
  RejectQualificationRequestCommand,
  RequestError,
  ReviewActionStatus,
  ReviewPolicyLevel,
  ReviewableHITStatus,
  SendBonusCommand,
  SendTestEventNotificationCommand,
  ServiceFault,
  UpdateExpirationForHITCommand,
  UpdateHITReviewStatusCommand,
  UpdateHITTypeOfHITCommand,
  UpdateNotificationSettingsCommand,
  UpdateQualificationTypeCommand,
  paginateListAssignmentsForHIT,
  paginateListBonusPayments,
  paginateListHITs,
  paginateListHITsForQualificationType,
  paginateListQualificationRequests,
  paginateListQualificationTypes,
  paginateListReviewPolicyResultsForHIT,
  paginateListReviewableHITs,
  paginateListWorkerBlocks,
  paginateListWorkersWithQualificationType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MTurkClient === "function");
assert(typeof MTurk === "function");
// commands
assert(typeof AcceptQualificationRequestCommand === "function");
assert(typeof ApproveAssignmentCommand === "function");
assert(typeof AssociateQualificationWithWorkerCommand === "function");
assert(typeof CreateAdditionalAssignmentsForHITCommand === "function");
assert(typeof CreateHITCommand === "function");
assert(typeof CreateHITTypeCommand === "function");
assert(typeof CreateHITWithHITTypeCommand === "function");
assert(typeof CreateQualificationTypeCommand === "function");
assert(typeof CreateWorkerBlockCommand === "function");
assert(typeof DeleteHITCommand === "function");
assert(typeof DeleteQualificationTypeCommand === "function");
assert(typeof DeleteWorkerBlockCommand === "function");
assert(typeof DisassociateQualificationFromWorkerCommand === "function");
assert(typeof GetAccountBalanceCommand === "function");
assert(typeof GetAssignmentCommand === "function");
assert(typeof GetFileUploadURLCommand === "function");
assert(typeof GetHITCommand === "function");
assert(typeof GetQualificationScoreCommand === "function");
assert(typeof GetQualificationTypeCommand === "function");
assert(typeof ListAssignmentsForHITCommand === "function");
assert(typeof ListBonusPaymentsCommand === "function");
assert(typeof ListHITsCommand === "function");
assert(typeof ListHITsForQualificationTypeCommand === "function");
assert(typeof ListQualificationRequestsCommand === "function");
assert(typeof ListQualificationTypesCommand === "function");
assert(typeof ListReviewableHITsCommand === "function");
assert(typeof ListReviewPolicyResultsForHITCommand === "function");
assert(typeof ListWorkerBlocksCommand === "function");
assert(typeof ListWorkersWithQualificationTypeCommand === "function");
assert(typeof NotifyWorkersCommand === "function");
assert(typeof RejectAssignmentCommand === "function");
assert(typeof RejectQualificationRequestCommand === "function");
assert(typeof SendBonusCommand === "function");
assert(typeof SendTestEventNotificationCommand === "function");
assert(typeof UpdateExpirationForHITCommand === "function");
assert(typeof UpdateHITReviewStatusCommand === "function");
assert(typeof UpdateHITTypeOfHITCommand === "function");
assert(typeof UpdateNotificationSettingsCommand === "function");
assert(typeof UpdateQualificationTypeCommand === "function");
// enums
assert(typeof AssignmentStatus === "object");
assert(typeof Comparator === "object");
assert(typeof EventType === "object");
assert(typeof HITAccessActions === "object");
assert(typeof HITReviewStatus === "object");
assert(typeof HITStatus === "object");
assert(typeof NotificationTransport === "object");
assert(typeof NotifyWorkersFailureCode === "object");
assert(typeof QualificationStatus === "object");
assert(typeof QualificationTypeStatus === "object");
assert(typeof ReviewableHITStatus === "object");
assert(typeof ReviewActionStatus === "object");
assert(typeof ReviewPolicyLevel === "object");
// errors
assert(RequestError.prototype instanceof MTurkServiceException);
assert(ServiceFault.prototype instanceof MTurkServiceException);
assert(MTurkServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAssignmentsForHIT === "function");
assert(typeof paginateListBonusPayments === "function");
assert(typeof paginateListHITs === "function");
assert(typeof paginateListHITsForQualificationType === "function");
assert(typeof paginateListQualificationRequests === "function");
assert(typeof paginateListQualificationTypes === "function");
assert(typeof paginateListReviewPolicyResultsForHIT === "function");
assert(typeof paginateListReviewableHITs === "function");
assert(typeof paginateListWorkerBlocks === "function");
assert(typeof paginateListWorkersWithQualificationType === "function");
console.log(`MTurk index test passed.`);
