import {
  AcceptNetworkFirewallTransitGatewayAttachmentCommand,
  AssociateAvailabilityZonesCommand,
  AssociateFirewallPolicyCommand,
  AssociateSubnetsCommand,
  AttachRuleGroupsToProxyConfigurationCommand,
  AttachmentStatus,
  ConfigurationSyncState,
  CreateFirewallCommand,
  CreateFirewallPolicyCommand,
  CreateProxyCommand,
  CreateProxyConfigurationCommand,
  CreateProxyRuleGroupCommand,
  CreateProxyRulesCommand,
  CreateRuleGroupCommand,
  CreateTLSInspectionConfigurationCommand,
  CreateVpcEndpointAssociationCommand,
  DeleteFirewallCommand,
  DeleteFirewallPolicyCommand,
  DeleteNetworkFirewallTransitGatewayAttachmentCommand,
  DeleteProxyCommand,
  DeleteProxyConfigurationCommand,
  DeleteProxyRuleGroupCommand,
  DeleteProxyRulesCommand,
  DeleteResourcePolicyCommand,
  DeleteRuleGroupCommand,
  DeleteTLSInspectionConfigurationCommand,
  DeleteVpcEndpointAssociationCommand,
  DescribeFirewallCommand,
  DescribeFirewallMetadataCommand,
  DescribeFirewallPolicyCommand,
  DescribeFlowOperationCommand,
  DescribeLoggingConfigurationCommand,
  DescribeProxyCommand,
  DescribeProxyConfigurationCommand,
  DescribeProxyRuleCommand,
  DescribeProxyRuleGroupCommand,
  DescribeResourcePolicyCommand,
  DescribeRuleGroupCommand,
  DescribeRuleGroupMetadataCommand,
  DescribeRuleGroupSummaryCommand,
  DescribeTLSInspectionConfigurationCommand,
  DescribeVpcEndpointAssociationCommand,
  DetachRuleGroupsFromProxyConfigurationCommand,
  DisassociateAvailabilityZonesCommand,
  DisassociateSubnetsCommand,
  EnabledAnalysisType,
  EncryptionType,
  FirewallStatusValue,
  FlowOperationStatus,
  FlowOperationType,
  GeneratedRulesType,
  GetAnalysisReportResultsCommand,
  IPAddressType,
  IdentifiedType,
  ListAnalysisReportsCommand,
  ListFirewallPoliciesCommand,
  ListFirewallsCommand,
  ListFlowOperationResultsCommand,
  ListFlowOperationsCommand,
  ListProxiesCommand,
  ListProxyConfigurationsCommand,
  ListProxyRuleGroupsCommand,
  ListRuleGroupsCommand,
  ListTLSInspectionConfigurationsCommand,
  ListTagsForResourceCommand,
  ListVpcEndpointAssociationsCommand,
  ListenerPropertyType,
  LogDestinationType,
  LogType,
  NetworkFirewall,
  NetworkFirewallClient,
  NetworkFirewallServiceException,
  OverrideAction,
  PerObjectSyncStatus,
  ProxyModifyState,
  ProxyRulePhaseAction,
  ProxyState,
  PutResourcePolicyCommand,
  RejectNetworkFirewallTransitGatewayAttachmentCommand,
  ResourceManagedStatus,
  ResourceManagedType,
  ResourceStatus,
  RevocationCheckAction,
  RuleGroupRequestPhase,
  RuleGroupType,
  RuleOrder,
  StartAnalysisReportCommand,
  StartFlowCaptureCommand,
  StartFlowFlushCommand,
  StatefulAction,
  StatefulRuleDirection,
  StatefulRuleProtocol,
  StreamExceptionPolicy,
  SubscriptionStatus,
  SummaryRuleOption,
  TCPFlag,
  TagResourceCommand,
  TargetType,
  TlsInterceptMode,
  TransitGatewayAttachmentStatus,
  UntagResourceCommand,
  UpdateAvailabilityZoneChangeProtectionCommand,
  UpdateFirewallAnalysisSettingsCommand,
  UpdateFirewallDeleteProtectionCommand,
  UpdateFirewallDescriptionCommand,
  UpdateFirewallEncryptionConfigurationCommand,
  UpdateFirewallPolicyChangeProtectionCommand,
  UpdateFirewallPolicyCommand,
  UpdateLoggingConfigurationCommand,
  UpdateProxyCommand,
  UpdateProxyConfigurationCommand,
  UpdateProxyRuleCommand,
  UpdateProxyRuleGroupPrioritiesCommand,
  UpdateProxyRulePrioritiesCommand,
  UpdateRuleGroupCommand,
  UpdateSubnetChangeProtectionCommand,
  UpdateTLSInspectionConfigurationCommand,
  paginateGetAnalysisReportResults,
  paginateListAnalysisReports,
  paginateListFirewallPolicies,
  paginateListFirewalls,
  paginateListFlowOperationResults,
  paginateListFlowOperations,
  paginateListProxies,
  paginateListProxyConfigurations,
  paginateListProxyRuleGroups,
  paginateListRuleGroups,
  paginateListTLSInspectionConfigurations,
  paginateListTagsForResource,
  paginateListVpcEndpointAssociations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NetworkFirewallClient === "function");
assert(typeof NetworkFirewall === "function");
// commands
assert(typeof AcceptNetworkFirewallTransitGatewayAttachmentCommand === "function");
assert(typeof AssociateAvailabilityZonesCommand === "function");
assert(typeof AssociateFirewallPolicyCommand === "function");
assert(typeof AssociateSubnetsCommand === "function");
assert(typeof AttachRuleGroupsToProxyConfigurationCommand === "function");
assert(typeof CreateFirewallCommand === "function");
assert(typeof CreateFirewallPolicyCommand === "function");
assert(typeof CreateProxyCommand === "function");
assert(typeof CreateProxyConfigurationCommand === "function");
assert(typeof CreateProxyRuleGroupCommand === "function");
assert(typeof CreateProxyRulesCommand === "function");
assert(typeof CreateRuleGroupCommand === "function");
assert(typeof CreateTLSInspectionConfigurationCommand === "function");
assert(typeof CreateVpcEndpointAssociationCommand === "function");
assert(typeof DeleteFirewallCommand === "function");
assert(typeof DeleteFirewallPolicyCommand === "function");
assert(typeof DeleteNetworkFirewallTransitGatewayAttachmentCommand === "function");
assert(typeof DeleteProxyCommand === "function");
assert(typeof DeleteProxyConfigurationCommand === "function");
assert(typeof DeleteProxyRuleGroupCommand === "function");
assert(typeof DeleteProxyRulesCommand === "function");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteRuleGroupCommand === "function");
assert(typeof DeleteTLSInspectionConfigurationCommand === "function");
assert(typeof DeleteVpcEndpointAssociationCommand === "function");
assert(typeof DescribeFirewallCommand === "function");
assert(typeof DescribeFirewallMetadataCommand === "function");
assert(typeof DescribeFirewallPolicyCommand === "function");
assert(typeof DescribeFlowOperationCommand === "function");
assert(typeof DescribeLoggingConfigurationCommand === "function");
assert(typeof DescribeProxyCommand === "function");
assert(typeof DescribeProxyConfigurationCommand === "function");
assert(typeof DescribeProxyRuleCommand === "function");
assert(typeof DescribeProxyRuleGroupCommand === "function");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeRuleGroupCommand === "function");
assert(typeof DescribeRuleGroupMetadataCommand === "function");
assert(typeof DescribeRuleGroupSummaryCommand === "function");
assert(typeof DescribeTLSInspectionConfigurationCommand === "function");
assert(typeof DescribeVpcEndpointAssociationCommand === "function");
assert(typeof DetachRuleGroupsFromProxyConfigurationCommand === "function");
assert(typeof DisassociateAvailabilityZonesCommand === "function");
assert(typeof DisassociateSubnetsCommand === "function");
assert(typeof GetAnalysisReportResultsCommand === "function");
assert(typeof ListAnalysisReportsCommand === "function");
assert(typeof ListFirewallPoliciesCommand === "function");
assert(typeof ListFirewallsCommand === "function");
assert(typeof ListFlowOperationResultsCommand === "function");
assert(typeof ListFlowOperationsCommand === "function");
assert(typeof ListProxiesCommand === "function");
assert(typeof ListProxyConfigurationsCommand === "function");
assert(typeof ListProxyRuleGroupsCommand === "function");
assert(typeof ListRuleGroupsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTLSInspectionConfigurationsCommand === "function");
assert(typeof ListVpcEndpointAssociationsCommand === "function");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof RejectNetworkFirewallTransitGatewayAttachmentCommand === "function");
assert(typeof StartAnalysisReportCommand === "function");
assert(typeof StartFlowCaptureCommand === "function");
assert(typeof StartFlowFlushCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAvailabilityZoneChangeProtectionCommand === "function");
assert(typeof UpdateFirewallAnalysisSettingsCommand === "function");
assert(typeof UpdateFirewallDeleteProtectionCommand === "function");
assert(typeof UpdateFirewallDescriptionCommand === "function");
assert(typeof UpdateFirewallEncryptionConfigurationCommand === "function");
assert(typeof UpdateFirewallPolicyCommand === "function");
assert(typeof UpdateFirewallPolicyChangeProtectionCommand === "function");
assert(typeof UpdateLoggingConfigurationCommand === "function");
assert(typeof UpdateProxyCommand === "function");
assert(typeof UpdateProxyConfigurationCommand === "function");
assert(typeof UpdateProxyRuleCommand === "function");
assert(typeof UpdateProxyRuleGroupPrioritiesCommand === "function");
assert(typeof UpdateProxyRulePrioritiesCommand === "function");
assert(typeof UpdateRuleGroupCommand === "function");
assert(typeof UpdateSubnetChangeProtectionCommand === "function");
assert(typeof UpdateTLSInspectionConfigurationCommand === "function");
// enums
assert(typeof AttachmentStatus === "object");
assert(typeof ConfigurationSyncState === "object");
assert(typeof EnabledAnalysisType === "object");
assert(typeof EncryptionType === "object");
assert(typeof FirewallStatusValue === "object");
assert(typeof FlowOperationStatus === "object");
assert(typeof FlowOperationType === "object");
assert(typeof GeneratedRulesType === "object");
assert(typeof IdentifiedType === "object");
assert(typeof IPAddressType === "object");
assert(typeof ListenerPropertyType === "object");
assert(typeof LogDestinationType === "object");
assert(typeof LogType === "object");
assert(typeof OverrideAction === "object");
assert(typeof PerObjectSyncStatus === "object");
assert(typeof ProxyModifyState === "object");
assert(typeof ProxyRulePhaseAction === "object");
assert(typeof ProxyState === "object");
assert(typeof ResourceManagedStatus === "object");
assert(typeof ResourceManagedType === "object");
assert(typeof ResourceStatus === "object");
assert(typeof RevocationCheckAction === "object");
assert(typeof RuleGroupRequestPhase === "object");
assert(typeof RuleGroupType === "object");
assert(typeof RuleOrder === "object");
assert(typeof StatefulAction === "object");
assert(typeof StatefulRuleDirection === "object");
assert(typeof StatefulRuleProtocol === "object");
assert(typeof StreamExceptionPolicy === "object");
assert(typeof SubscriptionStatus === "object");
assert(typeof SummaryRuleOption === "object");
assert(typeof TargetType === "object");
assert(typeof TCPFlag === "object");
assert(typeof TlsInterceptMode === "object");
assert(typeof TransitGatewayAttachmentStatus === "object");
// errors
assert(NetworkFirewallServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetAnalysisReportResults === "function");
assert(typeof paginateListAnalysisReports === "function");
assert(typeof paginateListFirewallPolicies === "function");
assert(typeof paginateListFirewalls === "function");
assert(typeof paginateListFlowOperationResults === "function");
assert(typeof paginateListFlowOperations === "function");
assert(typeof paginateListProxies === "function");
assert(typeof paginateListProxyConfigurations === "function");
assert(typeof paginateListProxyRuleGroups === "function");
assert(typeof paginateListRuleGroups === "function");
assert(typeof paginateListTLSInspectionConfigurations === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListVpcEndpointAssociations === "function");
console.log(`NetworkFirewall index test passed.`);
