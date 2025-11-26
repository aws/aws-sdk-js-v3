import {
  ActionType,
  AwsRegion,
  BatchGetMemberAccountDetailsCommand,
  CancelMembershipCommand,
  CaseAttachmentStatus,
  CaseStatus,
  CloseCaseCommand,
  ClosureCode,
  CommunicationType,
  CreateCaseCommand,
  CreateCaseCommentCommand,
  CreateMembershipCommand,
  CustomerType,
  EngagementType,
  ExecutionStatus,
  GetCaseAttachmentDownloadUrlCommand,
  GetCaseAttachmentUploadUrlCommand,
  GetCaseCommand,
  GetMembershipCommand,
  ListCaseEditsCommand,
  ListCasesCommand,
  ListCommentsCommand,
  ListInvestigationsCommand,
  ListMembershipsCommand,
  ListTagsForResourceCommand,
  MembershipAccountRelationshipStatus,
  MembershipAccountRelationshipType,
  MembershipStatus,
  OptInFeatureName,
  PendingAction,
  ResolverType,
  SecurityIR,
  SecurityIRClient,
  SecurityIRServiceException,
  SelfManagedCaseStatus,
  SendFeedbackCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCaseCommand,
  UpdateCaseCommentCommand,
  UpdateCaseStatusCommand,
  UpdateMembershipCommand,
  UpdateResolverTypeCommand,
  UsefulnessRating,
  paginateListCaseEdits,
  paginateListCases,
  paginateListComments,
  paginateListInvestigations,
  paginateListMemberships,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SecurityIRClient === "function")
assert(typeof SecurityIR === "function")
// commands
assert(typeof BatchGetMemberAccountDetailsCommand === "function")
assert(typeof CancelMembershipCommand === "function")
assert(typeof CloseCaseCommand === "function")
assert(typeof CreateCaseCommand === "function")
assert(typeof CreateCaseCommentCommand === "function")
assert(typeof CreateMembershipCommand === "function")
assert(typeof GetCaseCommand === "function")
assert(typeof GetCaseAttachmentDownloadUrlCommand === "function")
assert(typeof GetCaseAttachmentUploadUrlCommand === "function")
assert(typeof GetMembershipCommand === "function")
assert(typeof ListCaseEditsCommand === "function")
assert(typeof ListCasesCommand === "function")
assert(typeof ListCommentsCommand === "function")
assert(typeof ListInvestigationsCommand === "function")
assert(typeof ListMembershipsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof SendFeedbackCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateCaseCommand === "function")
assert(typeof UpdateCaseCommentCommand === "function")
assert(typeof UpdateCaseStatusCommand === "function")
assert(typeof UpdateMembershipCommand === "function")
assert(typeof UpdateResolverTypeCommand === "function")
// enums
assert(typeof ActionType === "object");
assert(typeof AwsRegion === "object");
assert(typeof CaseAttachmentStatus === "object");
assert(typeof CaseStatus === "object");
assert(typeof ClosureCode === "object");
assert(typeof CommunicationType === "object");
assert(typeof CustomerType === "object");
assert(typeof EngagementType === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof MembershipAccountRelationshipStatus === "object");
assert(typeof MembershipAccountRelationshipType === "object");
assert(typeof MembershipStatus === "object");
assert(typeof OptInFeatureName === "object");
assert(typeof PendingAction === "object");
assert(typeof ResolverType === "object");
assert(typeof SelfManagedCaseStatus === "object");
assert(typeof UsefulnessRating === "object");
// errors
assert(SecurityIRServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListCaseEdits === "function")
assert(typeof paginateListCases === "function")
assert(typeof paginateListComments === "function")
assert(typeof paginateListInvestigations === "function")
assert(typeof paginateListMemberships === "function")
console.log(`SecurityIR index test passed.`);
