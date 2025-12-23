import {
  AcceptQualificationRequest$,
  AcceptQualificationRequestCommand,
  AcceptQualificationRequestRequest$,
  AcceptQualificationRequestResponse$,
  ApproveAssignment$,
  ApproveAssignmentCommand,
  ApproveAssignmentRequest$,
  ApproveAssignmentResponse$,
  Assignment$,
  AssignmentStatus,
  AssociateQualificationWithWorker$,
  AssociateQualificationWithWorkerCommand,
  AssociateQualificationWithWorkerRequest$,
  AssociateQualificationWithWorkerResponse$,
  BonusPayment$,
  Comparator,
  CreateAdditionalAssignmentsForHIT$,
  CreateAdditionalAssignmentsForHITCommand,
  CreateAdditionalAssignmentsForHITRequest$,
  CreateAdditionalAssignmentsForHITResponse$,
  CreateHIT$,
  CreateHITCommand,
  CreateHITRequest$,
  CreateHITResponse$,
  CreateHITType$,
  CreateHITTypeCommand,
  CreateHITTypeRequest$,
  CreateHITTypeResponse$,
  CreateHITWithHITType$,
  CreateHITWithHITTypeCommand,
  CreateHITWithHITTypeRequest$,
  CreateHITWithHITTypeResponse$,
  CreateQualificationType$,
  CreateQualificationTypeCommand,
  CreateQualificationTypeRequest$,
  CreateQualificationTypeResponse$,
  CreateWorkerBlock$,
  CreateWorkerBlockCommand,
  CreateWorkerBlockRequest$,
  CreateWorkerBlockResponse$,
  DeleteHIT$,
  DeleteHITCommand,
  DeleteHITRequest$,
  DeleteHITResponse$,
  DeleteQualificationType$,
  DeleteQualificationTypeCommand,
  DeleteQualificationTypeRequest$,
  DeleteQualificationTypeResponse$,
  DeleteWorkerBlock$,
  DeleteWorkerBlockCommand,
  DeleteWorkerBlockRequest$,
  DeleteWorkerBlockResponse$,
  DisassociateQualificationFromWorker$,
  DisassociateQualificationFromWorkerCommand,
  DisassociateQualificationFromWorkerRequest$,
  DisassociateQualificationFromWorkerResponse$,
  EventType,
  GetAccountBalance$,
  GetAccountBalanceCommand,
  GetAccountBalanceRequest$,
  GetAccountBalanceResponse$,
  GetAssignment$,
  GetAssignmentCommand,
  GetAssignmentRequest$,
  GetAssignmentResponse$,
  GetFileUploadURL$,
  GetFileUploadURLCommand,
  GetFileUploadURLRequest$,
  GetFileUploadURLResponse$,
  GetHIT$,
  GetHITCommand,
  GetHITRequest$,
  GetHITResponse$,
  GetQualificationScore$,
  GetQualificationScoreCommand,
  GetQualificationScoreRequest$,
  GetQualificationScoreResponse$,
  GetQualificationType$,
  GetQualificationTypeCommand,
  GetQualificationTypeRequest$,
  GetQualificationTypeResponse$,
  HIT$,
  HITAccessActions,
  HITLayoutParameter$,
  HITReviewStatus,
  HITStatus,
  ListAssignmentsForHIT$,
  ListAssignmentsForHITCommand,
  ListAssignmentsForHITRequest$,
  ListAssignmentsForHITResponse$,
  ListBonusPayments$,
  ListBonusPaymentsCommand,
  ListBonusPaymentsRequest$,
  ListBonusPaymentsResponse$,
  ListHITs$,
  ListHITsCommand,
  ListHITsForQualificationType$,
  ListHITsForQualificationTypeCommand,
  ListHITsForQualificationTypeRequest$,
  ListHITsForQualificationTypeResponse$,
  ListHITsRequest$,
  ListHITsResponse$,
  ListQualificationRequests$,
  ListQualificationRequestsCommand,
  ListQualificationRequestsRequest$,
  ListQualificationRequestsResponse$,
  ListQualificationTypes$,
  ListQualificationTypesCommand,
  ListQualificationTypesRequest$,
  ListQualificationTypesResponse$,
  ListReviewableHITs$,
  ListReviewableHITsCommand,
  ListReviewableHITsRequest$,
  ListReviewableHITsResponse$,
  ListReviewPolicyResultsForHIT$,
  ListReviewPolicyResultsForHITCommand,
  ListReviewPolicyResultsForHITRequest$,
  ListReviewPolicyResultsForHITResponse$,
  ListWorkerBlocks$,
  ListWorkerBlocksCommand,
  ListWorkerBlocksRequest$,
  ListWorkerBlocksResponse$,
  ListWorkersWithQualificationType$,
  ListWorkersWithQualificationTypeCommand,
  ListWorkersWithQualificationTypeRequest$,
  ListWorkersWithQualificationTypeResponse$,
  Locale$,
  MTurk,
  MTurkClient,
  MTurkServiceException,
  NotificationSpecification$,
  NotificationTransport,
  NotifyWorkers$,
  NotifyWorkersCommand,
  NotifyWorkersFailureCode,
  NotifyWorkersFailureStatus$,
  NotifyWorkersRequest$,
  NotifyWorkersResponse$,
  paginateListAssignmentsForHIT,
  paginateListBonusPayments,
  paginateListHITs,
  paginateListHITsForQualificationType,
  paginateListQualificationRequests,
  paginateListQualificationTypes,
  paginateListReviewableHITs,
  paginateListReviewPolicyResultsForHIT,
  paginateListWorkerBlocks,
  paginateListWorkersWithQualificationType,
  ParameterMapEntry$,
  PolicyParameter$,
  Qualification$,
  QualificationRequest$,
  QualificationRequirement$,
  QualificationStatus,
  QualificationType$,
  QualificationTypeStatus,
  RejectAssignment$,
  RejectAssignmentCommand,
  RejectAssignmentRequest$,
  RejectAssignmentResponse$,
  RejectQualificationRequest$,
  RejectQualificationRequestCommand,
  RejectQualificationRequestRequest$,
  RejectQualificationRequestResponse$,
  RequestError,
  RequestError$,
  ReviewableHITStatus,
  ReviewActionDetail$,
  ReviewActionStatus,
  ReviewPolicy$,
  ReviewPolicyLevel,
  ReviewReport$,
  ReviewResultDetail$,
  SendBonus$,
  SendBonusCommand,
  SendBonusRequest$,
  SendBonusResponse$,
  SendTestEventNotification$,
  SendTestEventNotificationCommand,
  SendTestEventNotificationRequest$,
  SendTestEventNotificationResponse$,
  ServiceFault,
  ServiceFault$,
  UpdateExpirationForHIT$,
  UpdateExpirationForHITCommand,
  UpdateExpirationForHITRequest$,
  UpdateExpirationForHITResponse$,
  UpdateHITReviewStatus$,
  UpdateHITReviewStatusCommand,
  UpdateHITReviewStatusRequest$,
  UpdateHITReviewStatusResponse$,
  UpdateHITTypeOfHIT$,
  UpdateHITTypeOfHITCommand,
  UpdateHITTypeOfHITRequest$,
  UpdateHITTypeOfHITResponse$,
  UpdateNotificationSettings$,
  UpdateNotificationSettingsCommand,
  UpdateNotificationSettingsRequest$,
  UpdateNotificationSettingsResponse$,
  UpdateQualificationType$,
  UpdateQualificationTypeCommand,
  UpdateQualificationTypeRequest$,
  UpdateQualificationTypeResponse$,
  WorkerBlock$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MTurkClient === "function");
assert(typeof MTurk === "function");
// commands
assert(typeof AcceptQualificationRequestCommand === "function");
assert(typeof AcceptQualificationRequest$ === "object");
assert(typeof ApproveAssignmentCommand === "function");
assert(typeof ApproveAssignment$ === "object");
assert(typeof AssociateQualificationWithWorkerCommand === "function");
assert(typeof AssociateQualificationWithWorker$ === "object");
assert(typeof CreateAdditionalAssignmentsForHITCommand === "function");
assert(typeof CreateAdditionalAssignmentsForHIT$ === "object");
assert(typeof CreateHITCommand === "function");
assert(typeof CreateHIT$ === "object");
assert(typeof CreateHITTypeCommand === "function");
assert(typeof CreateHITType$ === "object");
assert(typeof CreateHITWithHITTypeCommand === "function");
assert(typeof CreateHITWithHITType$ === "object");
assert(typeof CreateQualificationTypeCommand === "function");
assert(typeof CreateQualificationType$ === "object");
assert(typeof CreateWorkerBlockCommand === "function");
assert(typeof CreateWorkerBlock$ === "object");
assert(typeof DeleteHITCommand === "function");
assert(typeof DeleteHIT$ === "object");
assert(typeof DeleteQualificationTypeCommand === "function");
assert(typeof DeleteQualificationType$ === "object");
assert(typeof DeleteWorkerBlockCommand === "function");
assert(typeof DeleteWorkerBlock$ === "object");
assert(typeof DisassociateQualificationFromWorkerCommand === "function");
assert(typeof DisassociateQualificationFromWorker$ === "object");
assert(typeof GetAccountBalanceCommand === "function");
assert(typeof GetAccountBalance$ === "object");
assert(typeof GetAssignmentCommand === "function");
assert(typeof GetAssignment$ === "object");
assert(typeof GetFileUploadURLCommand === "function");
assert(typeof GetFileUploadURL$ === "object");
assert(typeof GetHITCommand === "function");
assert(typeof GetHIT$ === "object");
assert(typeof GetQualificationScoreCommand === "function");
assert(typeof GetQualificationScore$ === "object");
assert(typeof GetQualificationTypeCommand === "function");
assert(typeof GetQualificationType$ === "object");
assert(typeof ListAssignmentsForHITCommand === "function");
assert(typeof ListAssignmentsForHIT$ === "object");
assert(typeof ListBonusPaymentsCommand === "function");
assert(typeof ListBonusPayments$ === "object");
assert(typeof ListHITsCommand === "function");
assert(typeof ListHITs$ === "object");
assert(typeof ListHITsForQualificationTypeCommand === "function");
assert(typeof ListHITsForQualificationType$ === "object");
assert(typeof ListQualificationRequestsCommand === "function");
assert(typeof ListQualificationRequests$ === "object");
assert(typeof ListQualificationTypesCommand === "function");
assert(typeof ListQualificationTypes$ === "object");
assert(typeof ListReviewableHITsCommand === "function");
assert(typeof ListReviewableHITs$ === "object");
assert(typeof ListReviewPolicyResultsForHITCommand === "function");
assert(typeof ListReviewPolicyResultsForHIT$ === "object");
assert(typeof ListWorkerBlocksCommand === "function");
assert(typeof ListWorkerBlocks$ === "object");
assert(typeof ListWorkersWithQualificationTypeCommand === "function");
assert(typeof ListWorkersWithQualificationType$ === "object");
assert(typeof NotifyWorkersCommand === "function");
assert(typeof NotifyWorkers$ === "object");
assert(typeof RejectAssignmentCommand === "function");
assert(typeof RejectAssignment$ === "object");
assert(typeof RejectQualificationRequestCommand === "function");
assert(typeof RejectQualificationRequest$ === "object");
assert(typeof SendBonusCommand === "function");
assert(typeof SendBonus$ === "object");
assert(typeof SendTestEventNotificationCommand === "function");
assert(typeof SendTestEventNotification$ === "object");
assert(typeof UpdateExpirationForHITCommand === "function");
assert(typeof UpdateExpirationForHIT$ === "object");
assert(typeof UpdateHITReviewStatusCommand === "function");
assert(typeof UpdateHITReviewStatus$ === "object");
assert(typeof UpdateHITTypeOfHITCommand === "function");
assert(typeof UpdateHITTypeOfHIT$ === "object");
assert(typeof UpdateNotificationSettingsCommand === "function");
assert(typeof UpdateNotificationSettings$ === "object");
assert(typeof UpdateQualificationTypeCommand === "function");
assert(typeof UpdateQualificationType$ === "object");
// structural schemas
assert(typeof AcceptQualificationRequestRequest$ === "object");
assert(typeof AcceptQualificationRequestResponse$ === "object");
assert(typeof ApproveAssignmentRequest$ === "object");
assert(typeof ApproveAssignmentResponse$ === "object");
assert(typeof Assignment$ === "object");
assert(typeof AssociateQualificationWithWorkerRequest$ === "object");
assert(typeof AssociateQualificationWithWorkerResponse$ === "object");
assert(typeof BonusPayment$ === "object");
assert(typeof CreateAdditionalAssignmentsForHITRequest$ === "object");
assert(typeof CreateAdditionalAssignmentsForHITResponse$ === "object");
assert(typeof CreateHITRequest$ === "object");
assert(typeof CreateHITResponse$ === "object");
assert(typeof CreateHITTypeRequest$ === "object");
assert(typeof CreateHITTypeResponse$ === "object");
assert(typeof CreateHITWithHITTypeRequest$ === "object");
assert(typeof CreateHITWithHITTypeResponse$ === "object");
assert(typeof CreateQualificationTypeRequest$ === "object");
assert(typeof CreateQualificationTypeResponse$ === "object");
assert(typeof CreateWorkerBlockRequest$ === "object");
assert(typeof CreateWorkerBlockResponse$ === "object");
assert(typeof DeleteHITRequest$ === "object");
assert(typeof DeleteHITResponse$ === "object");
assert(typeof DeleteQualificationTypeRequest$ === "object");
assert(typeof DeleteQualificationTypeResponse$ === "object");
assert(typeof DeleteWorkerBlockRequest$ === "object");
assert(typeof DeleteWorkerBlockResponse$ === "object");
assert(typeof DisassociateQualificationFromWorkerRequest$ === "object");
assert(typeof DisassociateQualificationFromWorkerResponse$ === "object");
assert(typeof GetAccountBalanceRequest$ === "object");
assert(typeof GetAccountBalanceResponse$ === "object");
assert(typeof GetAssignmentRequest$ === "object");
assert(typeof GetAssignmentResponse$ === "object");
assert(typeof GetFileUploadURLRequest$ === "object");
assert(typeof GetFileUploadURLResponse$ === "object");
assert(typeof GetHITRequest$ === "object");
assert(typeof GetHITResponse$ === "object");
assert(typeof GetQualificationScoreRequest$ === "object");
assert(typeof GetQualificationScoreResponse$ === "object");
assert(typeof GetQualificationTypeRequest$ === "object");
assert(typeof GetQualificationTypeResponse$ === "object");
assert(typeof HIT$ === "object");
assert(typeof HITLayoutParameter$ === "object");
assert(typeof ListAssignmentsForHITRequest$ === "object");
assert(typeof ListAssignmentsForHITResponse$ === "object");
assert(typeof ListBonusPaymentsRequest$ === "object");
assert(typeof ListBonusPaymentsResponse$ === "object");
assert(typeof ListHITsForQualificationTypeRequest$ === "object");
assert(typeof ListHITsForQualificationTypeResponse$ === "object");
assert(typeof ListHITsRequest$ === "object");
assert(typeof ListHITsResponse$ === "object");
assert(typeof ListQualificationRequestsRequest$ === "object");
assert(typeof ListQualificationRequestsResponse$ === "object");
assert(typeof ListQualificationTypesRequest$ === "object");
assert(typeof ListQualificationTypesResponse$ === "object");
assert(typeof ListReviewableHITsRequest$ === "object");
assert(typeof ListReviewableHITsResponse$ === "object");
assert(typeof ListReviewPolicyResultsForHITRequest$ === "object");
assert(typeof ListReviewPolicyResultsForHITResponse$ === "object");
assert(typeof ListWorkerBlocksRequest$ === "object");
assert(typeof ListWorkerBlocksResponse$ === "object");
assert(typeof ListWorkersWithQualificationTypeRequest$ === "object");
assert(typeof ListWorkersWithQualificationTypeResponse$ === "object");
assert(typeof Locale$ === "object");
assert(typeof NotificationSpecification$ === "object");
assert(typeof NotifyWorkersFailureStatus$ === "object");
assert(typeof NotifyWorkersRequest$ === "object");
assert(typeof NotifyWorkersResponse$ === "object");
assert(typeof ParameterMapEntry$ === "object");
assert(typeof PolicyParameter$ === "object");
assert(typeof Qualification$ === "object");
assert(typeof QualificationRequest$ === "object");
assert(typeof QualificationRequirement$ === "object");
assert(typeof QualificationType$ === "object");
assert(typeof RejectAssignmentRequest$ === "object");
assert(typeof RejectAssignmentResponse$ === "object");
assert(typeof RejectQualificationRequestRequest$ === "object");
assert(typeof RejectQualificationRequestResponse$ === "object");
assert(typeof ReviewActionDetail$ === "object");
assert(typeof ReviewPolicy$ === "object");
assert(typeof ReviewReport$ === "object");
assert(typeof ReviewResultDetail$ === "object");
assert(typeof SendBonusRequest$ === "object");
assert(typeof SendBonusResponse$ === "object");
assert(typeof SendTestEventNotificationRequest$ === "object");
assert(typeof SendTestEventNotificationResponse$ === "object");
assert(typeof UpdateExpirationForHITRequest$ === "object");
assert(typeof UpdateExpirationForHITResponse$ === "object");
assert(typeof UpdateHITReviewStatusRequest$ === "object");
assert(typeof UpdateHITReviewStatusResponse$ === "object");
assert(typeof UpdateHITTypeOfHITRequest$ === "object");
assert(typeof UpdateHITTypeOfHITResponse$ === "object");
assert(typeof UpdateNotificationSettingsRequest$ === "object");
assert(typeof UpdateNotificationSettingsResponse$ === "object");
assert(typeof UpdateQualificationTypeRequest$ === "object");
assert(typeof UpdateQualificationTypeResponse$ === "object");
assert(typeof WorkerBlock$ === "object");
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
assert(typeof RequestError$ === "object");
assert(ServiceFault.prototype instanceof MTurkServiceException);
assert(typeof ServiceFault$ === "object");
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
