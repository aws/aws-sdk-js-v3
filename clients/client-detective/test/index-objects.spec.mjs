import {
  AcceptInvitation$,
  AcceptInvitationCommand,
  AcceptInvitationRequest$,
  AccessDeniedException,
  AccessDeniedException$,
  Account$,
  Administrator$,
  BatchGetGraphMemberDatasources$,
  BatchGetGraphMemberDatasourcesCommand,
  BatchGetGraphMemberDatasourcesRequest$,
  BatchGetGraphMemberDatasourcesResponse$,
  BatchGetMembershipDatasources$,
  BatchGetMembershipDatasourcesCommand,
  BatchGetMembershipDatasourcesRequest$,
  BatchGetMembershipDatasourcesResponse$,
  ConflictException,
  ConflictException$,
  CreateGraph$,
  CreateGraphCommand,
  CreateGraphRequest$,
  CreateGraphResponse$,
  CreateMembers$,
  CreateMembersCommand,
  CreateMembersRequest$,
  CreateMembersResponse$,
  DatasourcePackage,
  DatasourcePackageIngestDetail$,
  DatasourcePackageIngestState,
  DatasourcePackageUsageInfo$,
  DateFilter$,
  DeleteGraph$,
  DeleteGraphCommand,
  DeleteGraphRequest$,
  DeleteMembers$,
  DeleteMembersCommand,
  DeleteMembersRequest$,
  DeleteMembersResponse$,
  DescribeOrganizationConfiguration$,
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationRequest$,
  DescribeOrganizationConfigurationResponse$,
  Detective,
  DetectiveClient,
  DetectiveServiceException,
  DisableOrganizationAdminAccount$,
  DisableOrganizationAdminAccountCommand,
  DisassociateMembership$,
  DisassociateMembershipCommand,
  DisassociateMembershipRequest$,
  EnableOrganizationAdminAccount$,
  EnableOrganizationAdminAccountCommand,
  EnableOrganizationAdminAccountRequest$,
  EntityType,
  ErrorCode,
  Field,
  FilterCriteria$,
  FlaggedIpAddressDetail$,
  GetInvestigation$,
  GetInvestigationCommand,
  GetInvestigationRequest$,
  GetInvestigationResponse$,
  GetMembers$,
  GetMembersCommand,
  GetMembersRequest$,
  GetMembersResponse$,
  Graph$,
  ImpossibleTravelDetail$,
  Indicator$,
  IndicatorDetail$,
  IndicatorType,
  InternalServerException,
  InternalServerException$,
  InvestigationDetail$,
  InvitationType,
  ListDatasourcePackages$,
  ListDatasourcePackagesCommand,
  ListDatasourcePackagesRequest$,
  ListDatasourcePackagesResponse$,
  ListGraphs$,
  ListGraphsCommand,
  ListGraphsRequest$,
  ListGraphsResponse$,
  ListIndicators$,
  ListIndicatorsCommand,
  ListIndicatorsRequest$,
  ListIndicatorsResponse$,
  ListInvestigations$,
  ListInvestigationsCommand,
  ListInvestigationsRequest$,
  ListInvestigationsResponse$,
  ListInvitations$,
  ListInvitationsCommand,
  ListInvitationsRequest$,
  ListInvitationsResponse$,
  ListMembers$,
  ListMembersCommand,
  ListMembersRequest$,
  ListMembersResponse$,
  ListOrganizationAdminAccounts$,
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsRequest$,
  ListOrganizationAdminAccountsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MemberDetail$,
  MemberDisabledReason,
  MembershipDatasources$,
  MemberStatus,
  NewAsoDetail$,
  NewGeolocationDetail$,
  NewUserAgentDetail$,
  paginateListDatasourcePackages,
  paginateListGraphs,
  paginateListInvitations,
  paginateListMembers,
  paginateListOrganizationAdminAccounts,
  Reason,
  RejectInvitation$,
  RejectInvitationCommand,
  RejectInvitationRequest$,
  RelatedFindingDetail$,
  RelatedFindingGroupDetail$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Severity,
  SortCriteria$,
  SortOrder,
  StartInvestigation$,
  StartInvestigationCommand,
  StartInvestigationRequest$,
  StartInvestigationResponse$,
  StartMonitoringMember$,
  StartMonitoringMemberCommand,
  StartMonitoringMemberRequest$,
  State,
  Status,
  StringFilter$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TimestampForCollection$,
  TooManyRequestsException,
  TooManyRequestsException$,
  TTPsObservedDetail$,
  UnprocessedAccount$,
  UnprocessedGraph$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDatasourcePackages$,
  UpdateDatasourcePackagesCommand,
  UpdateDatasourcePackagesRequest$,
  UpdateInvestigationState$,
  UpdateInvestigationStateCommand,
  UpdateInvestigationStateRequest$,
  UpdateOrganizationConfiguration$,
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationRequest$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DetectiveClient === "function");
assert(typeof Detective === "function");
// commands
assert(typeof AcceptInvitationCommand === "function");
assert(typeof AcceptInvitation$ === "object");
assert(typeof BatchGetGraphMemberDatasourcesCommand === "function");
assert(typeof BatchGetGraphMemberDatasources$ === "object");
assert(typeof BatchGetMembershipDatasourcesCommand === "function");
assert(typeof BatchGetMembershipDatasources$ === "object");
assert(typeof CreateGraphCommand === "function");
assert(typeof CreateGraph$ === "object");
assert(typeof CreateMembersCommand === "function");
assert(typeof CreateMembers$ === "object");
assert(typeof DeleteGraphCommand === "function");
assert(typeof DeleteGraph$ === "object");
assert(typeof DeleteMembersCommand === "function");
assert(typeof DeleteMembers$ === "object");
assert(typeof DescribeOrganizationConfigurationCommand === "function");
assert(typeof DescribeOrganizationConfiguration$ === "object");
assert(typeof DisableOrganizationAdminAccountCommand === "function");
assert(typeof DisableOrganizationAdminAccount$ === "object");
assert(typeof DisassociateMembershipCommand === "function");
assert(typeof DisassociateMembership$ === "object");
assert(typeof EnableOrganizationAdminAccountCommand === "function");
assert(typeof EnableOrganizationAdminAccount$ === "object");
assert(typeof GetInvestigationCommand === "function");
assert(typeof GetInvestigation$ === "object");
assert(typeof GetMembersCommand === "function");
assert(typeof GetMembers$ === "object");
assert(typeof ListDatasourcePackagesCommand === "function");
assert(typeof ListDatasourcePackages$ === "object");
assert(typeof ListGraphsCommand === "function");
assert(typeof ListGraphs$ === "object");
assert(typeof ListIndicatorsCommand === "function");
assert(typeof ListIndicators$ === "object");
assert(typeof ListInvestigationsCommand === "function");
assert(typeof ListInvestigations$ === "object");
assert(typeof ListInvitationsCommand === "function");
assert(typeof ListInvitations$ === "object");
assert(typeof ListMembersCommand === "function");
assert(typeof ListMembers$ === "object");
assert(typeof ListOrganizationAdminAccountsCommand === "function");
assert(typeof ListOrganizationAdminAccounts$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RejectInvitationCommand === "function");
assert(typeof RejectInvitation$ === "object");
assert(typeof StartInvestigationCommand === "function");
assert(typeof StartInvestigation$ === "object");
assert(typeof StartMonitoringMemberCommand === "function");
assert(typeof StartMonitoringMember$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDatasourcePackagesCommand === "function");
assert(typeof UpdateDatasourcePackages$ === "object");
assert(typeof UpdateInvestigationStateCommand === "function");
assert(typeof UpdateInvestigationState$ === "object");
assert(typeof UpdateOrganizationConfigurationCommand === "function");
assert(typeof UpdateOrganizationConfiguration$ === "object");
// structural schemas
assert(typeof AcceptInvitationRequest$ === "object");
assert(typeof Account$ === "object");
assert(typeof Administrator$ === "object");
assert(typeof BatchGetGraphMemberDatasourcesRequest$ === "object");
assert(typeof BatchGetGraphMemberDatasourcesResponse$ === "object");
assert(typeof BatchGetMembershipDatasourcesRequest$ === "object");
assert(typeof BatchGetMembershipDatasourcesResponse$ === "object");
assert(typeof CreateGraphRequest$ === "object");
assert(typeof CreateGraphResponse$ === "object");
assert(typeof CreateMembersRequest$ === "object");
assert(typeof CreateMembersResponse$ === "object");
assert(typeof DatasourcePackageIngestDetail$ === "object");
assert(typeof DatasourcePackageUsageInfo$ === "object");
assert(typeof DateFilter$ === "object");
assert(typeof DeleteGraphRequest$ === "object");
assert(typeof DeleteMembersRequest$ === "object");
assert(typeof DeleteMembersResponse$ === "object");
assert(typeof DescribeOrganizationConfigurationRequest$ === "object");
assert(typeof DescribeOrganizationConfigurationResponse$ === "object");
assert(typeof DisassociateMembershipRequest$ === "object");
assert(typeof EnableOrganizationAdminAccountRequest$ === "object");
assert(typeof FilterCriteria$ === "object");
assert(typeof FlaggedIpAddressDetail$ === "object");
assert(typeof GetInvestigationRequest$ === "object");
assert(typeof GetInvestigationResponse$ === "object");
assert(typeof GetMembersRequest$ === "object");
assert(typeof GetMembersResponse$ === "object");
assert(typeof Graph$ === "object");
assert(typeof ImpossibleTravelDetail$ === "object");
assert(typeof Indicator$ === "object");
assert(typeof IndicatorDetail$ === "object");
assert(typeof InvestigationDetail$ === "object");
assert(typeof ListDatasourcePackagesRequest$ === "object");
assert(typeof ListDatasourcePackagesResponse$ === "object");
assert(typeof ListGraphsRequest$ === "object");
assert(typeof ListGraphsResponse$ === "object");
assert(typeof ListIndicatorsRequest$ === "object");
assert(typeof ListIndicatorsResponse$ === "object");
assert(typeof ListInvestigationsRequest$ === "object");
assert(typeof ListInvestigationsResponse$ === "object");
assert(typeof ListInvitationsRequest$ === "object");
assert(typeof ListInvitationsResponse$ === "object");
assert(typeof ListMembersRequest$ === "object");
assert(typeof ListMembersResponse$ === "object");
assert(typeof ListOrganizationAdminAccountsRequest$ === "object");
assert(typeof ListOrganizationAdminAccountsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MemberDetail$ === "object");
assert(typeof MembershipDatasources$ === "object");
assert(typeof NewAsoDetail$ === "object");
assert(typeof NewGeolocationDetail$ === "object");
assert(typeof NewUserAgentDetail$ === "object");
assert(typeof RejectInvitationRequest$ === "object");
assert(typeof RelatedFindingDetail$ === "object");
assert(typeof RelatedFindingGroupDetail$ === "object");
assert(typeof SortCriteria$ === "object");
assert(typeof StartInvestigationRequest$ === "object");
assert(typeof StartInvestigationResponse$ === "object");
assert(typeof StartMonitoringMemberRequest$ === "object");
assert(typeof StringFilter$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimestampForCollection$ === "object");
assert(typeof TTPsObservedDetail$ === "object");
assert(typeof UnprocessedAccount$ === "object");
assert(typeof UnprocessedGraph$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDatasourcePackagesRequest$ === "object");
assert(typeof UpdateInvestigationStateRequest$ === "object");
assert(typeof UpdateOrganizationConfigurationRequest$ === "object");
// enums
assert(typeof DatasourcePackage === "object");
assert(typeof DatasourcePackageIngestState === "object");
assert(typeof EntityType === "object");
assert(typeof ErrorCode === "object");
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
assert(AccessDeniedException.prototype instanceof DetectiveServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof DetectiveServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof DetectiveServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof DetectiveServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof DetectiveServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(TooManyRequestsException.prototype instanceof DetectiveServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ValidationException.prototype instanceof DetectiveServiceException);
assert(typeof ValidationException$ === "object");
assert(DetectiveServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDatasourcePackages === "function");
assert(typeof paginateListGraphs === "function");
assert(typeof paginateListInvitations === "function");
assert(typeof paginateListMembers === "function");
assert(typeof paginateListOrganizationAdminAccounts === "function");
console.log(`Detective index test passed.`);
