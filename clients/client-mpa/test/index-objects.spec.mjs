import {
  ActionCompletionStrategy,
  ApprovalTeamStatus,
  ApprovalTeamStatusCode,
  CancelSessionCommand,
  CreateApprovalTeamCommand,
  CreateIdentitySourceCommand,
  DeleteIdentitySourceCommand,
  DeleteInactiveApprovalTeamVersionCommand,
  FilterField,
  GetApprovalTeamCommand,
  GetIdentitySourceCommand,
  GetPolicyVersionCommand,
  GetResourcePolicyCommand,
  GetSessionCommand,
  IdentitySourceStatus,
  IdentitySourceStatusCode,
  IdentitySourceType,
  IdentityStatus,
  ListApprovalTeamsCommand,
  ListIdentitySourcesCommand,
  ListPoliciesCommand,
  ListPolicyVersionsCommand,
  ListResourcePoliciesCommand,
  ListSessionsCommand,
  ListTagsForResourceCommand,
  MPA,
  MPAClient,
  MPAServiceException,
  Operator,
  PolicyStatus,
  PolicyType,
  SessionExecutionStatus,
  SessionResponse,
  SessionStatus,
  SessionStatusCode,
  StartActiveApprovalTeamDeletionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApprovalTeamCommand,
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
assert(typeof CreateApprovalTeamCommand === "function");
assert(typeof CreateIdentitySourceCommand === "function");
assert(typeof DeleteIdentitySourceCommand === "function");
assert(typeof DeleteInactiveApprovalTeamVersionCommand === "function");
assert(typeof GetApprovalTeamCommand === "function");
assert(typeof GetIdentitySourceCommand === "function");
assert(typeof GetPolicyVersionCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetSessionCommand === "function");
assert(typeof ListApprovalTeamsCommand === "function");
assert(typeof ListIdentitySourcesCommand === "function");
assert(typeof ListPoliciesCommand === "function");
assert(typeof ListPolicyVersionsCommand === "function");
assert(typeof ListResourcePoliciesCommand === "function");
assert(typeof ListSessionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof StartActiveApprovalTeamDeletionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApprovalTeamCommand === "function");
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
assert(MPAServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApprovalTeams === "function");
assert(typeof paginateListIdentitySources === "function");
assert(typeof paginateListPolicies === "function");
assert(typeof paginateListPolicyVersions === "function");
assert(typeof paginateListResourcePolicies === "function");
assert(typeof paginateListSessions === "function");
console.log(`MPA index test passed.`);
