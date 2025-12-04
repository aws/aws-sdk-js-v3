import {
  AcceptInvitationCommand,
  BatchGetGraphMemberDatasourcesCommand,
  BatchGetMembershipDatasourcesCommand,
  CreateGraphCommand,
  CreateMembersCommand,
  DatasourcePackage,
  DatasourcePackageIngestState,
  DeleteGraphCommand,
  DeleteMembersCommand,
  DescribeOrganizationConfigurationCommand,
  Detective,
  DetectiveClient,
  DetectiveServiceException,
  DisableOrganizationAdminAccountCommand,
  DisassociateMembershipCommand,
  EnableOrganizationAdminAccountCommand,
  EntityType,
  Field,
  GetInvestigationCommand,
  GetMembersCommand,
  IndicatorType,
  InvitationType,
  ListDatasourcePackagesCommand,
  ListGraphsCommand,
  ListIndicatorsCommand,
  ListInvestigationsCommand,
  ListInvitationsCommand,
  ListMembersCommand,
  ListOrganizationAdminAccountsCommand,
  ListTagsForResourceCommand,
  MemberDisabledReason,
  MemberStatus,
  Reason,
  RejectInvitationCommand,
  Severity,
  SortOrder,
  StartInvestigationCommand,
  StartMonitoringMemberCommand,
  State,
  Status,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDatasourcePackagesCommand,
  UpdateInvestigationStateCommand,
  UpdateOrganizationConfigurationCommand,
  paginateListDatasourcePackages,
  paginateListGraphs,
  paginateListInvitations,
  paginateListMembers,
  paginateListOrganizationAdminAccounts,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DetectiveClient === "function");
assert(typeof Detective === "function");
// commands
assert(typeof AcceptInvitationCommand === "function");
assert(typeof BatchGetGraphMemberDatasourcesCommand === "function");
assert(typeof BatchGetMembershipDatasourcesCommand === "function");
assert(typeof CreateGraphCommand === "function");
assert(typeof CreateMembersCommand === "function");
assert(typeof DeleteGraphCommand === "function");
assert(typeof DeleteMembersCommand === "function");
assert(typeof DescribeOrganizationConfigurationCommand === "function");
assert(typeof DisableOrganizationAdminAccountCommand === "function");
assert(typeof DisassociateMembershipCommand === "function");
assert(typeof EnableOrganizationAdminAccountCommand === "function");
assert(typeof GetInvestigationCommand === "function");
assert(typeof GetMembersCommand === "function");
assert(typeof ListDatasourcePackagesCommand === "function");
assert(typeof ListGraphsCommand === "function");
assert(typeof ListIndicatorsCommand === "function");
assert(typeof ListInvestigationsCommand === "function");
assert(typeof ListInvitationsCommand === "function");
assert(typeof ListMembersCommand === "function");
assert(typeof ListOrganizationAdminAccountsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RejectInvitationCommand === "function");
assert(typeof StartInvestigationCommand === "function");
assert(typeof StartMonitoringMemberCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDatasourcePackagesCommand === "function");
assert(typeof UpdateInvestigationStateCommand === "function");
assert(typeof UpdateOrganizationConfigurationCommand === "function");
// enums
assert(typeof DatasourcePackage === "object");
assert(typeof DatasourcePackageIngestState === "object");
assert(typeof EntityType === "object");
assert(typeof Field === "object");
assert(typeof IndicatorType === "object");
assert(typeof InvitationType === "object");
assert(typeof MemberDisabledReason === "object");
assert(typeof MemberStatus === "object");
assert(typeof Reason === "object");
assert(typeof Severity === "object");
assert(typeof SortOrder === "object");
assert(typeof State === "object");
assert(typeof Status === "object");
// errors
assert(DetectiveServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDatasourcePackages === "function");
assert(typeof paginateListGraphs === "function");
assert(typeof paginateListInvitations === "function");
assert(typeof paginateListMembers === "function");
assert(typeof paginateListOrganizationAdminAccounts === "function");
console.log(`Detective index test passed.`);
