import {
  AcceptAction,
  ActionFailurePolicy,
  ArchiveBooleanEmailAttribute,
  ArchiveBooleanOperator,
  ArchiveState,
  ArchiveStringEmailAttribute,
  ArchiveStringOperator,
  CreateAddonInstanceCommand,
  CreateAddonSubscriptionCommand,
  CreateAddressListCommand,
  CreateAddressListImportJobCommand,
  CreateArchiveCommand,
  CreateIngressPointCommand,
  CreateRelayCommand,
  CreateRuleSetCommand,
  CreateTrafficPolicyCommand,
  DeleteAddonInstanceCommand,
  DeleteAddonSubscriptionCommand,
  DeleteAddressListCommand,
  DeleteArchiveCommand,
  DeleteIngressPointCommand,
  DeleteRelayCommand,
  DeleteRuleSetCommand,
  DeleteTrafficPolicyCommand,
  DeregisterMemberFromAddressListCommand,
  ExportState,
  GetAddonInstanceCommand,
  GetAddonSubscriptionCommand,
  GetAddressListCommand,
  GetAddressListImportJobCommand,
  GetArchiveCommand,
  GetArchiveExportCommand,
  GetArchiveMessageCommand,
  GetArchiveMessageContentCommand,
  GetArchiveSearchCommand,
  GetArchiveSearchResultsCommand,
  GetIngressPointCommand,
  GetMemberOfAddressListCommand,
  GetRelayCommand,
  GetRuleSetCommand,
  GetTrafficPolicyCommand,
  ImportDataType,
  ImportJobStatus,
  IngressAddressListEmailAttribute,
  IngressBooleanOperator,
  IngressIpOperator,
  IngressIpv4Attribute,
  IngressIpv6Attribute,
  IngressPointStatus,
  IngressPointStatusToUpdate,
  IngressPointType,
  IngressStringEmailAttribute,
  IngressStringOperator,
  IngressTlsAttribute,
  IngressTlsProtocolAttribute,
  IngressTlsProtocolOperator,
  IpType,
  ListAddonInstancesCommand,
  ListAddonSubscriptionsCommand,
  ListAddressListImportJobsCommand,
  ListAddressListsCommand,
  ListArchiveExportsCommand,
  ListArchiveSearchesCommand,
  ListArchivesCommand,
  ListIngressPointsCommand,
  ListMembersOfAddressListCommand,
  ListRelaysCommand,
  ListRuleSetsCommand,
  ListTagsForResourceCommand,
  ListTrafficPoliciesCommand,
  MailFrom,
  MailManager,
  MailManagerClient,
  MailManagerServiceException,
  RegisterMemberToAddressListCommand,
  RetentionPeriod,
  RuleAddressListEmailAttribute,
  RuleBooleanEmailAttribute,
  RuleBooleanOperator,
  RuleDmarcOperator,
  RuleDmarcPolicy,
  RuleIpEmailAttribute,
  RuleIpOperator,
  RuleNumberEmailAttribute,
  RuleNumberOperator,
  RuleStringEmailAttribute,
  RuleStringOperator,
  RuleVerdict,
  RuleVerdictAttribute,
  RuleVerdictOperator,
  SearchState,
  SnsNotificationEncoding,
  SnsNotificationPayloadType,
  StartAddressListImportJobCommand,
  StartArchiveExportCommand,
  StartArchiveSearchCommand,
  StopAddressListImportJobCommand,
  StopArchiveExportCommand,
  StopArchiveSearchCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateArchiveCommand,
  UpdateIngressPointCommand,
  UpdateRelayCommand,
  UpdateRuleSetCommand,
  UpdateTrafficPolicyCommand,
  paginateListAddonInstances,
  paginateListAddonSubscriptions,
  paginateListAddressListImportJobs,
  paginateListAddressLists,
  paginateListArchiveExports,
  paginateListArchiveSearches,
  paginateListArchives,
  paginateListIngressPoints,
  paginateListMembersOfAddressList,
  paginateListRelays,
  paginateListRuleSets,
  paginateListTrafficPolicies,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MailManagerClient === "function")
assert(typeof MailManager === "function")
// commands
assert(typeof CreateAddonInstanceCommand === "function")
assert(typeof CreateAddonSubscriptionCommand === "function")
assert(typeof CreateAddressListCommand === "function")
assert(typeof CreateAddressListImportJobCommand === "function")
assert(typeof CreateArchiveCommand === "function")
assert(typeof CreateIngressPointCommand === "function")
assert(typeof CreateRelayCommand === "function")
assert(typeof CreateRuleSetCommand === "function")
assert(typeof CreateTrafficPolicyCommand === "function")
assert(typeof DeleteAddonInstanceCommand === "function")
assert(typeof DeleteAddonSubscriptionCommand === "function")
assert(typeof DeleteAddressListCommand === "function")
assert(typeof DeleteArchiveCommand === "function")
assert(typeof DeleteIngressPointCommand === "function")
assert(typeof DeleteRelayCommand === "function")
assert(typeof DeleteRuleSetCommand === "function")
assert(typeof DeleteTrafficPolicyCommand === "function")
assert(typeof DeregisterMemberFromAddressListCommand === "function")
assert(typeof GetAddonInstanceCommand === "function")
assert(typeof GetAddonSubscriptionCommand === "function")
assert(typeof GetAddressListCommand === "function")
assert(typeof GetAddressListImportJobCommand === "function")
assert(typeof GetArchiveCommand === "function")
assert(typeof GetArchiveExportCommand === "function")
assert(typeof GetArchiveMessageCommand === "function")
assert(typeof GetArchiveMessageContentCommand === "function")
assert(typeof GetArchiveSearchCommand === "function")
assert(typeof GetArchiveSearchResultsCommand === "function")
assert(typeof GetIngressPointCommand === "function")
assert(typeof GetMemberOfAddressListCommand === "function")
assert(typeof GetRelayCommand === "function")
assert(typeof GetRuleSetCommand === "function")
assert(typeof GetTrafficPolicyCommand === "function")
assert(typeof ListAddonInstancesCommand === "function")
assert(typeof ListAddonSubscriptionsCommand === "function")
assert(typeof ListAddressListImportJobsCommand === "function")
assert(typeof ListAddressListsCommand === "function")
assert(typeof ListArchiveExportsCommand === "function")
assert(typeof ListArchivesCommand === "function")
assert(typeof ListArchiveSearchesCommand === "function")
assert(typeof ListIngressPointsCommand === "function")
assert(typeof ListMembersOfAddressListCommand === "function")
assert(typeof ListRelaysCommand === "function")
assert(typeof ListRuleSetsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTrafficPoliciesCommand === "function")
assert(typeof RegisterMemberToAddressListCommand === "function")
assert(typeof StartAddressListImportJobCommand === "function")
assert(typeof StartArchiveExportCommand === "function")
assert(typeof StartArchiveSearchCommand === "function")
assert(typeof StopAddressListImportJobCommand === "function")
assert(typeof StopArchiveExportCommand === "function")
assert(typeof StopArchiveSearchCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateArchiveCommand === "function")
assert(typeof UpdateIngressPointCommand === "function")
assert(typeof UpdateRelayCommand === "function")
assert(typeof UpdateRuleSetCommand === "function")
assert(typeof UpdateTrafficPolicyCommand === "function")
// enums
assert(typeof AcceptAction === "object");
assert(typeof ActionFailurePolicy === "object");
assert(typeof ArchiveBooleanEmailAttribute === "object");
assert(typeof ArchiveBooleanOperator === "object");
assert(typeof ArchiveState === "object");
assert(typeof ArchiveStringEmailAttribute === "object");
assert(typeof ArchiveStringOperator === "object");
assert(typeof ExportState === "object");
assert(typeof ImportDataType === "object");
assert(typeof ImportJobStatus === "object");
assert(typeof IngressAddressListEmailAttribute === "object");
assert(typeof IngressBooleanOperator === "object");
assert(typeof IngressIpOperator === "object");
assert(typeof IngressIpv4Attribute === "object");
assert(typeof IngressIpv6Attribute === "object");
assert(typeof IngressPointStatus === "object");
assert(typeof IngressPointStatusToUpdate === "object");
assert(typeof IngressPointType === "object");
assert(typeof IngressStringEmailAttribute === "object");
assert(typeof IngressStringOperator === "object");
assert(typeof IngressTlsAttribute === "object");
assert(typeof IngressTlsProtocolAttribute === "object");
assert(typeof IngressTlsProtocolOperator === "object");
assert(typeof IpType === "object");
assert(typeof MailFrom === "object");
assert(typeof RetentionPeriod === "object");
assert(typeof RuleAddressListEmailAttribute === "object");
assert(typeof RuleBooleanEmailAttribute === "object");
assert(typeof RuleBooleanOperator === "object");
assert(typeof RuleDmarcOperator === "object");
assert(typeof RuleDmarcPolicy === "object");
assert(typeof RuleIpEmailAttribute === "object");
assert(typeof RuleIpOperator === "object");
assert(typeof RuleNumberEmailAttribute === "object");
assert(typeof RuleNumberOperator === "object");
assert(typeof RuleStringEmailAttribute === "object");
assert(typeof RuleStringOperator === "object");
assert(typeof RuleVerdict === "object");
assert(typeof RuleVerdictAttribute === "object");
assert(typeof RuleVerdictOperator === "object");
assert(typeof SearchState === "object");
assert(typeof SnsNotificationEncoding === "object");
assert(typeof SnsNotificationPayloadType === "object");
// errors
assert(MailManagerServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListAddonInstances === "function")
assert(typeof paginateListAddonSubscriptions === "function")
assert(typeof paginateListAddressListImportJobs === "function")
assert(typeof paginateListAddressLists === "function")
assert(typeof paginateListArchiveExports === "function")
assert(typeof paginateListArchiveSearches === "function")
assert(typeof paginateListArchives === "function")
assert(typeof paginateListIngressPoints === "function")
assert(typeof paginateListMembersOfAddressList === "function")
assert(typeof paginateListRelays === "function")
assert(typeof paginateListRuleSets === "function")
assert(typeof paginateListTrafficPolicies === "function")
console.log(`MailManager index test passed.`);
