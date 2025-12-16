import {
  AcceptAction,
  AccessDeniedException,
  AccessDeniedException$,
  ActionFailurePolicy,
  AddHeaderAction$,
  AddonInstance$,
  AddonSubscription$,
  AddressFilter$,
  AddressList$,
  Analysis$,
  Archive$,
  ArchiveAction$,
  ArchiveBooleanEmailAttribute,
  ArchiveBooleanExpression$,
  ArchiveBooleanOperator,
  ArchiveBooleanToEvaluate$,
  ArchiveFilterCondition$,
  ArchiveFilters$,
  ArchiveRetention$,
  ArchiveState,
  ArchiveStringEmailAttribute,
  ArchiveStringExpression$,
  ArchiveStringOperator,
  ArchiveStringToEvaluate$,
  ConflictException,
  ConflictException$,
  CreateAddonInstance$,
  CreateAddonInstanceCommand,
  CreateAddonInstanceRequest$,
  CreateAddonInstanceResponse$,
  CreateAddonSubscription$,
  CreateAddonSubscriptionCommand,
  CreateAddonSubscriptionRequest$,
  CreateAddonSubscriptionResponse$,
  CreateAddressList$,
  CreateAddressListCommand,
  CreateAddressListImportJob$,
  CreateAddressListImportJobCommand,
  CreateAddressListImportJobRequest$,
  CreateAddressListImportJobResponse$,
  CreateAddressListRequest$,
  CreateAddressListResponse$,
  CreateArchive$,
  CreateArchiveCommand,
  CreateArchiveRequest$,
  CreateArchiveResponse$,
  CreateIngressPoint$,
  CreateIngressPointCommand,
  CreateIngressPointRequest$,
  CreateIngressPointResponse$,
  CreateRelay$,
  CreateRelayCommand,
  CreateRelayRequest$,
  CreateRelayResponse$,
  CreateRuleSet$,
  CreateRuleSetCommand,
  CreateRuleSetRequest$,
  CreateRuleSetResponse$,
  CreateTrafficPolicy$,
  CreateTrafficPolicyCommand,
  CreateTrafficPolicyRequest$,
  CreateTrafficPolicyResponse$,
  DeleteAddonInstance$,
  DeleteAddonInstanceCommand,
  DeleteAddonInstanceRequest$,
  DeleteAddonInstanceResponse$,
  DeleteAddonSubscription$,
  DeleteAddonSubscriptionCommand,
  DeleteAddonSubscriptionRequest$,
  DeleteAddonSubscriptionResponse$,
  DeleteAddressList$,
  DeleteAddressListCommand,
  DeleteAddressListRequest$,
  DeleteAddressListResponse$,
  DeleteArchive$,
  DeleteArchiveCommand,
  DeleteArchiveRequest$,
  DeleteArchiveResponse$,
  DeleteIngressPoint$,
  DeleteIngressPointCommand,
  DeleteIngressPointRequest$,
  DeleteIngressPointResponse$,
  DeleteRelay$,
  DeleteRelayCommand,
  DeleteRelayRequest$,
  DeleteRelayResponse$,
  DeleteRuleSet$,
  DeleteRuleSetCommand,
  DeleteRuleSetRequest$,
  DeleteRuleSetResponse$,
  DeleteTrafficPolicy$,
  DeleteTrafficPolicyCommand,
  DeleteTrafficPolicyRequest$,
  DeleteTrafficPolicyResponse$,
  DeliverToMailboxAction$,
  DeliverToQBusinessAction$,
  DeregisterMemberFromAddressList$,
  DeregisterMemberFromAddressListCommand,
  DeregisterMemberFromAddressListRequest$,
  DeregisterMemberFromAddressListResponse$,
  DropAction$,
  Envelope$,
  ExportDestinationConfiguration$,
  ExportState,
  ExportStatus$,
  ExportSummary$,
  GetAddonInstance$,
  GetAddonInstanceCommand,
  GetAddonInstanceRequest$,
  GetAddonInstanceResponse$,
  GetAddonSubscription$,
  GetAddonSubscriptionCommand,
  GetAddonSubscriptionRequest$,
  GetAddonSubscriptionResponse$,
  GetAddressList$,
  GetAddressListCommand,
  GetAddressListImportJob$,
  GetAddressListImportJobCommand,
  GetAddressListImportJobRequest$,
  GetAddressListImportJobResponse$,
  GetAddressListRequest$,
  GetAddressListResponse$,
  GetArchive$,
  GetArchiveCommand,
  GetArchiveExport$,
  GetArchiveExportCommand,
  GetArchiveExportRequest$,
  GetArchiveExportResponse$,
  GetArchiveMessage$,
  GetArchiveMessageCommand,
  GetArchiveMessageContent$,
  GetArchiveMessageContentCommand,
  GetArchiveMessageContentRequest$,
  GetArchiveMessageContentResponse$,
  GetArchiveMessageRequest$,
  GetArchiveMessageResponse$,
  GetArchiveRequest$,
  GetArchiveResponse$,
  GetArchiveSearch$,
  GetArchiveSearchCommand,
  GetArchiveSearchRequest$,
  GetArchiveSearchResponse$,
  GetArchiveSearchResults$,
  GetArchiveSearchResultsCommand,
  GetArchiveSearchResultsRequest$,
  GetArchiveSearchResultsResponse$,
  GetIngressPoint$,
  GetIngressPointCommand,
  GetIngressPointRequest$,
  GetIngressPointResponse$,
  GetMemberOfAddressList$,
  GetMemberOfAddressListCommand,
  GetMemberOfAddressListRequest$,
  GetMemberOfAddressListResponse$,
  GetRelay$,
  GetRelayCommand,
  GetRelayRequest$,
  GetRelayResponse$,
  GetRuleSet$,
  GetRuleSetCommand,
  GetRuleSetRequest$,
  GetRuleSetResponse$,
  GetTrafficPolicy$,
  GetTrafficPolicyCommand,
  GetTrafficPolicyRequest$,
  GetTrafficPolicyResponse$,
  ImportDataFormat$,
  ImportDataType,
  ImportJob$,
  ImportJobStatus,
  IngressAddressListEmailAttribute,
  IngressAnalysis$,
  IngressBooleanExpression$,
  IngressBooleanOperator,
  IngressBooleanToEvaluate$,
  IngressIpOperator,
  IngressIpToEvaluate$,
  IngressIpv4Attribute,
  IngressIpv4Expression$,
  IngressIpv6Attribute,
  IngressIpv6Expression$,
  IngressIpv6ToEvaluate$,
  IngressIsInAddressList$,
  IngressPoint$,
  IngressPointAuthConfiguration$,
  IngressPointConfiguration$,
  IngressPointPasswordConfiguration$,
  IngressPointStatus,
  IngressPointStatusToUpdate,
  IngressPointType,
  IngressStringEmailAttribute,
  IngressStringExpression$,
  IngressStringOperator,
  IngressStringToEvaluate$,
  IngressTlsAttribute,
  IngressTlsProtocolAttribute,
  IngressTlsProtocolExpression$,
  IngressTlsProtocolOperator,
  IngressTlsProtocolToEvaluate$,
  IpType,
  ListAddonInstances$,
  ListAddonInstancesCommand,
  ListAddonInstancesRequest$,
  ListAddonInstancesResponse$,
  ListAddonSubscriptions$,
  ListAddonSubscriptionsCommand,
  ListAddonSubscriptionsRequest$,
  ListAddonSubscriptionsResponse$,
  ListAddressListImportJobs$,
  ListAddressListImportJobsCommand,
  ListAddressListImportJobsRequest$,
  ListAddressListImportJobsResponse$,
  ListAddressLists$,
  ListAddressListsCommand,
  ListAddressListsRequest$,
  ListAddressListsResponse$,
  ListArchiveExports$,
  ListArchiveExportsCommand,
  ListArchiveExportsRequest$,
  ListArchiveExportsResponse$,
  ListArchiveSearches$,
  ListArchiveSearchesCommand,
  ListArchiveSearchesRequest$,
  ListArchiveSearchesResponse$,
  ListArchives$,
  ListArchivesCommand,
  ListArchivesRequest$,
  ListArchivesResponse$,
  ListIngressPoints$,
  ListIngressPointsCommand,
  ListIngressPointsRequest$,
  ListIngressPointsResponse$,
  ListMembersOfAddressList$,
  ListMembersOfAddressListCommand,
  ListMembersOfAddressListRequest$,
  ListMembersOfAddressListResponse$,
  ListRelays$,
  ListRelaysCommand,
  ListRelaysRequest$,
  ListRelaysResponse$,
  ListRuleSets$,
  ListRuleSetsCommand,
  ListRuleSetsRequest$,
  ListRuleSetsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTrafficPolicies$,
  ListTrafficPoliciesCommand,
  ListTrafficPoliciesRequest$,
  ListTrafficPoliciesResponse$,
  MailFrom,
  MailManager,
  MailManagerClient,
  MailManagerServiceException,
  MessageBody$,
  Metadata$,
  NetworkConfiguration$,
  NoAuthentication$,
  PolicyCondition$,
  PolicyStatement$,
  PrivateNetworkConfiguration$,
  PublicNetworkConfiguration$,
  RegisterMemberToAddressList$,
  RegisterMemberToAddressListCommand,
  RegisterMemberToAddressListRequest$,
  RegisterMemberToAddressListResponse$,
  Relay$,
  RelayAction$,
  RelayAuthentication$,
  ReplaceRecipientAction$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetentionPeriod,
  Row$,
  Rule$,
  RuleAction$,
  RuleAddressListEmailAttribute,
  RuleBooleanEmailAttribute,
  RuleBooleanExpression$,
  RuleBooleanOperator,
  RuleBooleanToEvaluate$,
  RuleCondition$,
  RuleDmarcExpression$,
  RuleDmarcOperator,
  RuleDmarcPolicy,
  RuleIpEmailAttribute,
  RuleIpExpression$,
  RuleIpOperator,
  RuleIpToEvaluate$,
  RuleIsInAddressList$,
  RuleNumberEmailAttribute,
  RuleNumberExpression$,
  RuleNumberOperator,
  RuleNumberToEvaluate$,
  RuleSet$,
  RuleStringEmailAttribute,
  RuleStringExpression$,
  RuleStringOperator,
  RuleStringToEvaluate$,
  RuleVerdict,
  RuleVerdictAttribute,
  RuleVerdictExpression$,
  RuleVerdictOperator,
  RuleVerdictToEvaluate$,
  S3Action$,
  S3ExportDestinationConfiguration$,
  SavedAddress$,
  SearchState,
  SearchStatus$,
  SearchSummary$,
  SendAction$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SnsAction$,
  SnsNotificationEncoding,
  SnsNotificationPayloadType,
  StartAddressListImportJob$,
  StartAddressListImportJobCommand,
  StartAddressListImportJobRequest$,
  StartAddressListImportJobResponse$,
  StartArchiveExport$,
  StartArchiveExportCommand,
  StartArchiveExportRequest$,
  StartArchiveExportResponse$,
  StartArchiveSearch$,
  StartArchiveSearchCommand,
  StartArchiveSearchRequest$,
  StartArchiveSearchResponse$,
  StopAddressListImportJob$,
  StopAddressListImportJobCommand,
  StopAddressListImportJobRequest$,
  StopAddressListImportJobResponse$,
  StopArchiveExport$,
  StopArchiveExportCommand,
  StopArchiveExportRequest$,
  StopArchiveExportResponse$,
  StopArchiveSearch$,
  StopArchiveSearchCommand,
  StopArchiveSearchRequest$,
  StopArchiveSearchResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TrafficPolicy$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateArchive$,
  UpdateArchiveCommand,
  UpdateArchiveRequest$,
  UpdateArchiveResponse$,
  UpdateIngressPoint$,
  UpdateIngressPointCommand,
  UpdateIngressPointRequest$,
  UpdateIngressPointResponse$,
  UpdateRelay$,
  UpdateRelayCommand,
  UpdateRelayRequest$,
  UpdateRelayResponse$,
  UpdateRuleSet$,
  UpdateRuleSetCommand,
  UpdateRuleSetRequest$,
  UpdateRuleSetResponse$,
  UpdateTrafficPolicy$,
  UpdateTrafficPolicyCommand,
  UpdateTrafficPolicyRequest$,
  UpdateTrafficPolicyResponse$,
  ValidationException,
  ValidationException$,
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
assert(typeof MailManagerClient === "function");
assert(typeof MailManager === "function");
// commands
assert(typeof CreateAddonInstanceCommand === "function");
assert(typeof CreateAddonInstance$ === "object");
assert(typeof CreateAddonSubscriptionCommand === "function");
assert(typeof CreateAddonSubscription$ === "object");
assert(typeof CreateAddressListCommand === "function");
assert(typeof CreateAddressList$ === "object");
assert(typeof CreateAddressListImportJobCommand === "function");
assert(typeof CreateAddressListImportJob$ === "object");
assert(typeof CreateArchiveCommand === "function");
assert(typeof CreateArchive$ === "object");
assert(typeof CreateIngressPointCommand === "function");
assert(typeof CreateIngressPoint$ === "object");
assert(typeof CreateRelayCommand === "function");
assert(typeof CreateRelay$ === "object");
assert(typeof CreateRuleSetCommand === "function");
assert(typeof CreateRuleSet$ === "object");
assert(typeof CreateTrafficPolicyCommand === "function");
assert(typeof CreateTrafficPolicy$ === "object");
assert(typeof DeleteAddonInstanceCommand === "function");
assert(typeof DeleteAddonInstance$ === "object");
assert(typeof DeleteAddonSubscriptionCommand === "function");
assert(typeof DeleteAddonSubscription$ === "object");
assert(typeof DeleteAddressListCommand === "function");
assert(typeof DeleteAddressList$ === "object");
assert(typeof DeleteArchiveCommand === "function");
assert(typeof DeleteArchive$ === "object");
assert(typeof DeleteIngressPointCommand === "function");
assert(typeof DeleteIngressPoint$ === "object");
assert(typeof DeleteRelayCommand === "function");
assert(typeof DeleteRelay$ === "object");
assert(typeof DeleteRuleSetCommand === "function");
assert(typeof DeleteRuleSet$ === "object");
assert(typeof DeleteTrafficPolicyCommand === "function");
assert(typeof DeleteTrafficPolicy$ === "object");
assert(typeof DeregisterMemberFromAddressListCommand === "function");
assert(typeof DeregisterMemberFromAddressList$ === "object");
assert(typeof GetAddonInstanceCommand === "function");
assert(typeof GetAddonInstance$ === "object");
assert(typeof GetAddonSubscriptionCommand === "function");
assert(typeof GetAddonSubscription$ === "object");
assert(typeof GetAddressListCommand === "function");
assert(typeof GetAddressList$ === "object");
assert(typeof GetAddressListImportJobCommand === "function");
assert(typeof GetAddressListImportJob$ === "object");
assert(typeof GetArchiveCommand === "function");
assert(typeof GetArchive$ === "object");
assert(typeof GetArchiveExportCommand === "function");
assert(typeof GetArchiveExport$ === "object");
assert(typeof GetArchiveMessageCommand === "function");
assert(typeof GetArchiveMessage$ === "object");
assert(typeof GetArchiveMessageContentCommand === "function");
assert(typeof GetArchiveMessageContent$ === "object");
assert(typeof GetArchiveSearchCommand === "function");
assert(typeof GetArchiveSearch$ === "object");
assert(typeof GetArchiveSearchResultsCommand === "function");
assert(typeof GetArchiveSearchResults$ === "object");
assert(typeof GetIngressPointCommand === "function");
assert(typeof GetIngressPoint$ === "object");
assert(typeof GetMemberOfAddressListCommand === "function");
assert(typeof GetMemberOfAddressList$ === "object");
assert(typeof GetRelayCommand === "function");
assert(typeof GetRelay$ === "object");
assert(typeof GetRuleSetCommand === "function");
assert(typeof GetRuleSet$ === "object");
assert(typeof GetTrafficPolicyCommand === "function");
assert(typeof GetTrafficPolicy$ === "object");
assert(typeof ListAddonInstancesCommand === "function");
assert(typeof ListAddonInstances$ === "object");
assert(typeof ListAddonSubscriptionsCommand === "function");
assert(typeof ListAddonSubscriptions$ === "object");
assert(typeof ListAddressListImportJobsCommand === "function");
assert(typeof ListAddressListImportJobs$ === "object");
assert(typeof ListAddressListsCommand === "function");
assert(typeof ListAddressLists$ === "object");
assert(typeof ListArchiveExportsCommand === "function");
assert(typeof ListArchiveExports$ === "object");
assert(typeof ListArchivesCommand === "function");
assert(typeof ListArchives$ === "object");
assert(typeof ListArchiveSearchesCommand === "function");
assert(typeof ListArchiveSearches$ === "object");
assert(typeof ListIngressPointsCommand === "function");
assert(typeof ListIngressPoints$ === "object");
assert(typeof ListMembersOfAddressListCommand === "function");
assert(typeof ListMembersOfAddressList$ === "object");
assert(typeof ListRelaysCommand === "function");
assert(typeof ListRelays$ === "object");
assert(typeof ListRuleSetsCommand === "function");
assert(typeof ListRuleSets$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTrafficPoliciesCommand === "function");
assert(typeof ListTrafficPolicies$ === "object");
assert(typeof RegisterMemberToAddressListCommand === "function");
assert(typeof RegisterMemberToAddressList$ === "object");
assert(typeof StartAddressListImportJobCommand === "function");
assert(typeof StartAddressListImportJob$ === "object");
assert(typeof StartArchiveExportCommand === "function");
assert(typeof StartArchiveExport$ === "object");
assert(typeof StartArchiveSearchCommand === "function");
assert(typeof StartArchiveSearch$ === "object");
assert(typeof StopAddressListImportJobCommand === "function");
assert(typeof StopAddressListImportJob$ === "object");
assert(typeof StopArchiveExportCommand === "function");
assert(typeof StopArchiveExport$ === "object");
assert(typeof StopArchiveSearchCommand === "function");
assert(typeof StopArchiveSearch$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateArchiveCommand === "function");
assert(typeof UpdateArchive$ === "object");
assert(typeof UpdateIngressPointCommand === "function");
assert(typeof UpdateIngressPoint$ === "object");
assert(typeof UpdateRelayCommand === "function");
assert(typeof UpdateRelay$ === "object");
assert(typeof UpdateRuleSetCommand === "function");
assert(typeof UpdateRuleSet$ === "object");
assert(typeof UpdateTrafficPolicyCommand === "function");
assert(typeof UpdateTrafficPolicy$ === "object");
// structural schemas
assert(typeof AddHeaderAction$ === "object");
assert(typeof AddonInstance$ === "object");
assert(typeof AddonSubscription$ === "object");
assert(typeof AddressFilter$ === "object");
assert(typeof AddressList$ === "object");
assert(typeof Analysis$ === "object");
assert(typeof Archive$ === "object");
assert(typeof ArchiveAction$ === "object");
assert(typeof ArchiveBooleanExpression$ === "object");
assert(typeof ArchiveBooleanToEvaluate$ === "object");
assert(typeof ArchiveFilterCondition$ === "object");
assert(typeof ArchiveFilters$ === "object");
assert(typeof ArchiveRetention$ === "object");
assert(typeof ArchiveStringExpression$ === "object");
assert(typeof ArchiveStringToEvaluate$ === "object");
assert(typeof CreateAddonInstanceRequest$ === "object");
assert(typeof CreateAddonInstanceResponse$ === "object");
assert(typeof CreateAddonSubscriptionRequest$ === "object");
assert(typeof CreateAddonSubscriptionResponse$ === "object");
assert(typeof CreateAddressListImportJobRequest$ === "object");
assert(typeof CreateAddressListImportJobResponse$ === "object");
assert(typeof CreateAddressListRequest$ === "object");
assert(typeof CreateAddressListResponse$ === "object");
assert(typeof CreateArchiveRequest$ === "object");
assert(typeof CreateArchiveResponse$ === "object");
assert(typeof CreateIngressPointRequest$ === "object");
assert(typeof CreateIngressPointResponse$ === "object");
assert(typeof CreateRelayRequest$ === "object");
assert(typeof CreateRelayResponse$ === "object");
assert(typeof CreateRuleSetRequest$ === "object");
assert(typeof CreateRuleSetResponse$ === "object");
assert(typeof CreateTrafficPolicyRequest$ === "object");
assert(typeof CreateTrafficPolicyResponse$ === "object");
assert(typeof DeleteAddonInstanceRequest$ === "object");
assert(typeof DeleteAddonInstanceResponse$ === "object");
assert(typeof DeleteAddonSubscriptionRequest$ === "object");
assert(typeof DeleteAddonSubscriptionResponse$ === "object");
assert(typeof DeleteAddressListRequest$ === "object");
assert(typeof DeleteAddressListResponse$ === "object");
assert(typeof DeleteArchiveRequest$ === "object");
assert(typeof DeleteArchiveResponse$ === "object");
assert(typeof DeleteIngressPointRequest$ === "object");
assert(typeof DeleteIngressPointResponse$ === "object");
assert(typeof DeleteRelayRequest$ === "object");
assert(typeof DeleteRelayResponse$ === "object");
assert(typeof DeleteRuleSetRequest$ === "object");
assert(typeof DeleteRuleSetResponse$ === "object");
assert(typeof DeleteTrafficPolicyRequest$ === "object");
assert(typeof DeleteTrafficPolicyResponse$ === "object");
assert(typeof DeliverToMailboxAction$ === "object");
assert(typeof DeliverToQBusinessAction$ === "object");
assert(typeof DeregisterMemberFromAddressListRequest$ === "object");
assert(typeof DeregisterMemberFromAddressListResponse$ === "object");
assert(typeof DropAction$ === "object");
assert(typeof Envelope$ === "object");
assert(typeof ExportDestinationConfiguration$ === "object");
assert(typeof ExportStatus$ === "object");
assert(typeof ExportSummary$ === "object");
assert(typeof GetAddonInstanceRequest$ === "object");
assert(typeof GetAddonInstanceResponse$ === "object");
assert(typeof GetAddonSubscriptionRequest$ === "object");
assert(typeof GetAddonSubscriptionResponse$ === "object");
assert(typeof GetAddressListImportJobRequest$ === "object");
assert(typeof GetAddressListImportJobResponse$ === "object");
assert(typeof GetAddressListRequest$ === "object");
assert(typeof GetAddressListResponse$ === "object");
assert(typeof GetArchiveExportRequest$ === "object");
assert(typeof GetArchiveExportResponse$ === "object");
assert(typeof GetArchiveMessageContentRequest$ === "object");
assert(typeof GetArchiveMessageContentResponse$ === "object");
assert(typeof GetArchiveMessageRequest$ === "object");
assert(typeof GetArchiveMessageResponse$ === "object");
assert(typeof GetArchiveRequest$ === "object");
assert(typeof GetArchiveResponse$ === "object");
assert(typeof GetArchiveSearchRequest$ === "object");
assert(typeof GetArchiveSearchResponse$ === "object");
assert(typeof GetArchiveSearchResultsRequest$ === "object");
assert(typeof GetArchiveSearchResultsResponse$ === "object");
assert(typeof GetIngressPointRequest$ === "object");
assert(typeof GetIngressPointResponse$ === "object");
assert(typeof GetMemberOfAddressListRequest$ === "object");
assert(typeof GetMemberOfAddressListResponse$ === "object");
assert(typeof GetRelayRequest$ === "object");
assert(typeof GetRelayResponse$ === "object");
assert(typeof GetRuleSetRequest$ === "object");
assert(typeof GetRuleSetResponse$ === "object");
assert(typeof GetTrafficPolicyRequest$ === "object");
assert(typeof GetTrafficPolicyResponse$ === "object");
assert(typeof ImportDataFormat$ === "object");
assert(typeof ImportJob$ === "object");
assert(typeof IngressAnalysis$ === "object");
assert(typeof IngressBooleanExpression$ === "object");
assert(typeof IngressBooleanToEvaluate$ === "object");
assert(typeof IngressIpToEvaluate$ === "object");
assert(typeof IngressIpv4Expression$ === "object");
assert(typeof IngressIpv6Expression$ === "object");
assert(typeof IngressIpv6ToEvaluate$ === "object");
assert(typeof IngressIsInAddressList$ === "object");
assert(typeof IngressPoint$ === "object");
assert(typeof IngressPointAuthConfiguration$ === "object");
assert(typeof IngressPointConfiguration$ === "object");
assert(typeof IngressPointPasswordConfiguration$ === "object");
assert(typeof IngressStringExpression$ === "object");
assert(typeof IngressStringToEvaluate$ === "object");
assert(typeof IngressTlsProtocolExpression$ === "object");
assert(typeof IngressTlsProtocolToEvaluate$ === "object");
assert(typeof ListAddonInstancesRequest$ === "object");
assert(typeof ListAddonInstancesResponse$ === "object");
assert(typeof ListAddonSubscriptionsRequest$ === "object");
assert(typeof ListAddonSubscriptionsResponse$ === "object");
assert(typeof ListAddressListImportJobsRequest$ === "object");
assert(typeof ListAddressListImportJobsResponse$ === "object");
assert(typeof ListAddressListsRequest$ === "object");
assert(typeof ListAddressListsResponse$ === "object");
assert(typeof ListArchiveExportsRequest$ === "object");
assert(typeof ListArchiveExportsResponse$ === "object");
assert(typeof ListArchiveSearchesRequest$ === "object");
assert(typeof ListArchiveSearchesResponse$ === "object");
assert(typeof ListArchivesRequest$ === "object");
assert(typeof ListArchivesResponse$ === "object");
assert(typeof ListIngressPointsRequest$ === "object");
assert(typeof ListIngressPointsResponse$ === "object");
assert(typeof ListMembersOfAddressListRequest$ === "object");
assert(typeof ListMembersOfAddressListResponse$ === "object");
assert(typeof ListRelaysRequest$ === "object");
assert(typeof ListRelaysResponse$ === "object");
assert(typeof ListRuleSetsRequest$ === "object");
assert(typeof ListRuleSetsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTrafficPoliciesRequest$ === "object");
assert(typeof ListTrafficPoliciesResponse$ === "object");
assert(typeof MessageBody$ === "object");
assert(typeof Metadata$ === "object");
assert(typeof NetworkConfiguration$ === "object");
assert(typeof NoAuthentication$ === "object");
assert(typeof PolicyCondition$ === "object");
assert(typeof PolicyStatement$ === "object");
assert(typeof PrivateNetworkConfiguration$ === "object");
assert(typeof PublicNetworkConfiguration$ === "object");
assert(typeof RegisterMemberToAddressListRequest$ === "object");
assert(typeof RegisterMemberToAddressListResponse$ === "object");
assert(typeof Relay$ === "object");
assert(typeof RelayAction$ === "object");
assert(typeof RelayAuthentication$ === "object");
assert(typeof ReplaceRecipientAction$ === "object");
assert(typeof Row$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RuleAction$ === "object");
assert(typeof RuleBooleanExpression$ === "object");
assert(typeof RuleBooleanToEvaluate$ === "object");
assert(typeof RuleCondition$ === "object");
assert(typeof RuleDmarcExpression$ === "object");
assert(typeof RuleIpExpression$ === "object");
assert(typeof RuleIpToEvaluate$ === "object");
assert(typeof RuleIsInAddressList$ === "object");
assert(typeof RuleNumberExpression$ === "object");
assert(typeof RuleNumberToEvaluate$ === "object");
assert(typeof RuleSet$ === "object");
assert(typeof RuleStringExpression$ === "object");
assert(typeof RuleStringToEvaluate$ === "object");
assert(typeof RuleVerdictExpression$ === "object");
assert(typeof RuleVerdictToEvaluate$ === "object");
assert(typeof S3Action$ === "object");
assert(typeof S3ExportDestinationConfiguration$ === "object");
assert(typeof SavedAddress$ === "object");
assert(typeof SearchStatus$ === "object");
assert(typeof SearchSummary$ === "object");
assert(typeof SendAction$ === "object");
assert(typeof SnsAction$ === "object");
assert(typeof StartAddressListImportJobRequest$ === "object");
assert(typeof StartAddressListImportJobResponse$ === "object");
assert(typeof StartArchiveExportRequest$ === "object");
assert(typeof StartArchiveExportResponse$ === "object");
assert(typeof StartArchiveSearchRequest$ === "object");
assert(typeof StartArchiveSearchResponse$ === "object");
assert(typeof StopAddressListImportJobRequest$ === "object");
assert(typeof StopAddressListImportJobResponse$ === "object");
assert(typeof StopArchiveExportRequest$ === "object");
assert(typeof StopArchiveExportResponse$ === "object");
assert(typeof StopArchiveSearchRequest$ === "object");
assert(typeof StopArchiveSearchResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TrafficPolicy$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateArchiveRequest$ === "object");
assert(typeof UpdateArchiveResponse$ === "object");
assert(typeof UpdateIngressPointRequest$ === "object");
assert(typeof UpdateIngressPointResponse$ === "object");
assert(typeof UpdateRelayRequest$ === "object");
assert(typeof UpdateRelayResponse$ === "object");
assert(typeof UpdateRuleSetRequest$ === "object");
assert(typeof UpdateRuleSetResponse$ === "object");
assert(typeof UpdateTrafficPolicyRequest$ === "object");
assert(typeof UpdateTrafficPolicyResponse$ === "object");
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
assert(AccessDeniedException.prototype instanceof MailManagerServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof MailManagerServiceException);
assert(typeof ConflictException$ === "object");
assert(ResourceNotFoundException.prototype instanceof MailManagerServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof MailManagerServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof MailManagerServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof MailManagerServiceException);
assert(typeof ValidationException$ === "object");
assert(MailManagerServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAddonInstances === "function");
assert(typeof paginateListAddonSubscriptions === "function");
assert(typeof paginateListAddressListImportJobs === "function");
assert(typeof paginateListAddressLists === "function");
assert(typeof paginateListArchiveExports === "function");
assert(typeof paginateListArchiveSearches === "function");
assert(typeof paginateListArchives === "function");
assert(typeof paginateListIngressPoints === "function");
assert(typeof paginateListMembersOfAddressList === "function");
assert(typeof paginateListRelays === "function");
assert(typeof paginateListRuleSets === "function");
assert(typeof paginateListTrafficPolicies === "function");
console.log(`MailManager index test passed.`);
