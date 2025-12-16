import {
  AccessDeniedException,
  AccessDeniedException$,
  ActionCompletionStrategy,
  ApprovalStrategy$,
  ApprovalStrategyResponse$,
  ApprovalTeamRequestApprover$,
  ApprovalTeamStatus,
  ApprovalTeamStatusCode,
  CancelSession$,
  CancelSessionCommand,
  CancelSessionRequest$,
  CancelSessionResponse$,
  ConflictException,
  ConflictException$,
  CreateApprovalTeam$,
  CreateApprovalTeamCommand,
  CreateApprovalTeamRequest$,
  CreateApprovalTeamResponse$,
  CreateIdentitySource$,
  CreateIdentitySourceCommand,
  CreateIdentitySourceRequest$,
  CreateIdentitySourceResponse$,
  DeleteIdentitySource$,
  DeleteIdentitySourceCommand,
  DeleteIdentitySourceRequest$,
  DeleteInactiveApprovalTeamVersion$,
  DeleteInactiveApprovalTeamVersionCommand,
  DeleteInactiveApprovalTeamVersionRequest$,
  DeleteInactiveApprovalTeamVersionResponse$,
  Filter$,
  FilterField,
  GetApprovalTeam$,
  GetApprovalTeamCommand,
  GetApprovalTeamRequest$,
  GetApprovalTeamResponse$,
  GetApprovalTeamResponseApprover$,
  GetIdentitySource$,
  GetIdentitySourceCommand,
  GetIdentitySourceRequest$,
  GetIdentitySourceResponse$,
  GetPolicyVersion$,
  GetPolicyVersionCommand,
  GetPolicyVersionRequest$,
  GetPolicyVersionResponse$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  GetSession$,
  GetSessionCommand,
  GetSessionRequest$,
  GetSessionResponse$,
  GetSessionResponseApproverResponse$,
  IamIdentityCenter$,
  IamIdentityCenterForGet$,
  IamIdentityCenterForList$,
  IdentitySourceForList$,
  IdentitySourceParameters$,
  IdentitySourceParametersForGet$,
  IdentitySourceParametersForList$,
  IdentitySourceStatus,
  IdentitySourceStatusCode,
  IdentitySourceType,
  IdentityStatus,
  InternalServerException,
  InternalServerException$,
  InvalidParameterException,
  InvalidParameterException$,
  ListApprovalTeams$,
  ListApprovalTeamsCommand,
  ListApprovalTeamsRequest$,
  ListApprovalTeamsResponse$,
  ListApprovalTeamsResponseApprovalTeam$,
  ListIdentitySources$,
  ListIdentitySourcesCommand,
  ListIdentitySourcesRequest$,
  ListIdentitySourcesResponse$,
  ListPolicies$,
  ListPoliciesCommand,
  ListPoliciesRequest$,
  ListPoliciesResponse$,
  ListPolicyVersions$,
  ListPolicyVersionsCommand,
  ListPolicyVersionsRequest$,
  ListPolicyVersionsResponse$,
  ListResourcePolicies$,
  ListResourcePoliciesCommand,
  ListResourcePoliciesRequest$,
  ListResourcePoliciesResponse$,
  ListResourcePoliciesResponseResourcePolicy$,
  ListSessions$,
  ListSessionsCommand,
  ListSessionsRequest$,
  ListSessionsResponse$,
  ListSessionsResponseSession$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MPA,
  MPAClient,
  MPAServiceException,
  MofNApprovalStrategy$,
  Operator,
  PendingUpdate$,
  Policy$,
  PolicyReference$,
  PolicyStatus,
  PolicyType,
  PolicyVersion$,
  PolicyVersionSummary$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionExecutionStatus,
  SessionResponse,
  SessionStatus,
  SessionStatusCode,
  StartActiveApprovalTeamDeletion$,
  StartActiveApprovalTeamDeletionCommand,
  StartActiveApprovalTeamDeletionRequest$,
  StartActiveApprovalTeamDeletionResponse$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApprovalTeam$,
  UpdateApprovalTeamCommand,
  UpdateApprovalTeamRequest$,
  UpdateApprovalTeamResponse$,
  ValidationException,
  ValidationException$,
  paginateListApprovalTeams,
  paginateListIdentitySources,
  paginateListPolicies,
  paginateListPolicyVersions,
  paginateListResourcePolicies,
  paginateListSessions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MPAClient === "function");
assert(typeof MPA === "function");
// commands
assert(typeof CancelSessionCommand === "function");
assert(typeof CancelSession$ === "object");
assert(typeof CreateApprovalTeamCommand === "function");
assert(typeof CreateApprovalTeam$ === "object");
assert(typeof CreateIdentitySourceCommand === "function");
assert(typeof CreateIdentitySource$ === "object");
assert(typeof DeleteIdentitySourceCommand === "function");
assert(typeof DeleteIdentitySource$ === "object");
assert(typeof DeleteInactiveApprovalTeamVersionCommand === "function");
assert(typeof DeleteInactiveApprovalTeamVersion$ === "object");
assert(typeof GetApprovalTeamCommand === "function");
assert(typeof GetApprovalTeam$ === "object");
assert(typeof GetIdentitySourceCommand === "function");
assert(typeof GetIdentitySource$ === "object");
assert(typeof GetPolicyVersionCommand === "function");
assert(typeof GetPolicyVersion$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof GetSessionCommand === "function");
assert(typeof GetSession$ === "object");
assert(typeof ListApprovalTeamsCommand === "function");
assert(typeof ListApprovalTeams$ === "object");
assert(typeof ListIdentitySourcesCommand === "function");
assert(typeof ListIdentitySources$ === "object");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicies$ === "object");
assert(typeof ListPolicyVersionsCommand === "function");
assert(typeof ListPolicyVersions$ === "object");
assert(typeof ListResourcePoliciesCommand === "function");
assert(typeof ListResourcePolicies$ === "object");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListSessions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartActiveApprovalTeamDeletionCommand === "function");
assert(typeof StartActiveApprovalTeamDeletion$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApprovalTeamCommand === "function");
assert(typeof UpdateApprovalTeam$ === "object");
// structural schemas
assert(typeof ApprovalStrategy$ === "object");
assert(typeof ApprovalStrategyResponse$ === "object");
assert(typeof ApprovalTeamRequestApprover$ === "object");
assert(typeof CancelSessionRequest$ === "object");
assert(typeof CancelSessionResponse$ === "object");
assert(typeof CreateApprovalTeamRequest$ === "object");
assert(typeof CreateApprovalTeamResponse$ === "object");
assert(typeof CreateIdentitySourceRequest$ === "object");
assert(typeof CreateIdentitySourceResponse$ === "object");
assert(typeof DeleteIdentitySourceRequest$ === "object");
assert(typeof DeleteInactiveApprovalTeamVersionRequest$ === "object");
assert(typeof DeleteInactiveApprovalTeamVersionResponse$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetApprovalTeamRequest$ === "object");
assert(typeof GetApprovalTeamResponse$ === "object");
assert(typeof GetApprovalTeamResponseApprover$ === "object");
assert(typeof GetIdentitySourceRequest$ === "object");
assert(typeof GetIdentitySourceResponse$ === "object");
assert(typeof GetPolicyVersionRequest$ === "object");
assert(typeof GetPolicyVersionResponse$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof GetSessionRequest$ === "object");
assert(typeof GetSessionResponse$ === "object");
assert(typeof GetSessionResponseApproverResponse$ === "object");
assert(typeof IamIdentityCenter$ === "object");
assert(typeof IamIdentityCenterForGet$ === "object");
assert(typeof IamIdentityCenterForList$ === "object");
assert(typeof IdentitySourceForList$ === "object");
assert(typeof IdentitySourceParameters$ === "object");
assert(typeof IdentitySourceParametersForGet$ === "object");
assert(typeof IdentitySourceParametersForList$ === "object");
assert(typeof ListApprovalTeamsRequest$ === "object");
assert(typeof ListApprovalTeamsResponse$ === "object");
assert(typeof ListApprovalTeamsResponseApprovalTeam$ === "object");
assert(typeof ListIdentitySourcesRequest$ === "object");
assert(typeof ListIdentitySourcesResponse$ === "object");
assert(typeof ListPoliciesRequest$ === "object");
assert(typeof ListPoliciesResponse$ === "object");
assert(typeof ListPolicyVersionsRequest$ === "object");
assert(typeof ListPolicyVersionsResponse$ === "object");
assert(typeof ListResourcePoliciesRequest$ === "object");
assert(typeof ListResourcePoliciesResponse$ === "object");
assert(typeof ListResourcePoliciesResponseResourcePolicy$ === "object");
assert(typeof ListSessionsRequest$ === "object");
assert(typeof ListSessionsResponse$ === "object");
assert(typeof ListSessionsResponseSession$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MofNApprovalStrategy$ === "object");
assert(typeof PendingUpdate$ === "object");
assert(typeof Policy$ === "object");
assert(typeof PolicyReference$ === "object");
assert(typeof PolicyVersion$ === "object");
assert(typeof PolicyVersionSummary$ === "object");
assert(typeof StartActiveApprovalTeamDeletionRequest$ === "object");
assert(typeof StartActiveApprovalTeamDeletionResponse$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApprovalTeamRequest$ === "object");
assert(typeof UpdateApprovalTeamResponse$ === "object");
// enums
assert(typeof ActionCompletionStrategy === "object");
assert(typeof ApprovalTeamStatus === "object");
assert(typeof ApprovalTeamStatusCode === "object");
assert(typeof FilterField === "object");
assert(typeof IdentitySourceStatus === "object");
assert(typeof IdentitySourceStatusCode === "object");
assert(typeof IdentitySourceType === "object");
assert(typeof IdentityStatus === "object");
assert(typeof Operator === "object");
assert(typeof PolicyStatus === "object");
assert(typeof PolicyType === "object");
assert(typeof SessionExecutionStatus === "object");
assert(typeof SessionResponse === "object");
assert(typeof SessionStatus === "object");
assert(typeof SessionStatusCode === "object");
// errors
assert(AccessDeniedException.prototype instanceof MPAServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MPAServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof MPAServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidParameterException.prototype instanceof MPAServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MPAServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof MPAServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof MPAServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof MPAServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof MPAServiceException);
assert(typeof ValidationException$ === "object");
assert(MPAServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApprovalTeams === "function");
assert(typeof paginateListIdentitySources === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListPolicyVersions === "function");
assert(typeof paginateListResourcePolicies === "function");
assert(typeof paginateListSessions === "function");
console.log(`MPA index test passed.`);
