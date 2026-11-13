import {
  AcceptNetworkFirewallTransitGatewayAttachment$,
  AcceptNetworkFirewallTransitGatewayAttachmentCommand,
  AcceptNetworkFirewallTransitGatewayAttachmentRequest$,
  AcceptNetworkFirewallTransitGatewayAttachmentResponse$,
  ActionDefinition$,
  ActionScope,
  Address$,
  AnalysisReport$,
  AnalysisResult$,
  AnalysisTypeReportResult$,
  AssociateAvailabilityZones$,
  AssociateAvailabilityZonesCommand,
  AssociateAvailabilityZonesRequest$,
  AssociateAvailabilityZonesResponse$,
  AssociateFirewallPolicy$,
  AssociateFirewallPolicyCommand,
  AssociateFirewallPolicyRequest$,
  AssociateFirewallPolicyResponse$,
  AssociateSubnets$,
  AssociateSubnetsCommand,
  AssociateSubnetsRequest$,
  AssociateSubnetsResponse$,
  Attachment$,
  AttachmentStatus,
  AvailabilityZoneMapping$,
  AvailabilityZoneMetadata$,
  AZSyncState$,
  CapacityUsageSummary$,
  CheckCertificateRevocationStatusActions$,
  CIDRSummary$,
  ConfigurationSyncState,
  ContainerAssociationStatus,
  ContainerAssociationSummary$,
  ContainerAttribute$,
  ContainerMonitoringConfiguration$,
  ContainerMonitoringType,
  CreateContainerAssociation$,
  CreateContainerAssociationCommand,
  CreateContainerAssociationRequest$,
  CreateContainerAssociationResponse$,
  CreateFirewall$,
  CreateFirewallCommand,
  CreateFirewallPolicy$,
  CreateFirewallPolicyCommand,
  CreateFirewallPolicyRequest$,
  CreateFirewallPolicyResponse$,
  CreateFirewallPolicyV2$,
  CreateFirewallPolicyV2Command,
  CreateFirewallPolicyV2Request$,
  CreateFirewallPolicyV2Response$,
  CreateFirewallRequest$,
  CreateFirewallResponse$,
  CreateRuleGroup$,
  CreateRuleGroupCommand,
  CreateRuleGroupRequest$,
  CreateRuleGroupResponse$,
  CreateTLSInspectionConfiguration$,
  CreateTLSInspectionConfigurationCommand,
  CreateTLSInspectionConfigurationRequest$,
  CreateTLSInspectionConfigurationResponse$,
  CreateVpcEndpointAssociation$,
  CreateVpcEndpointAssociationCommand,
  CreateVpcEndpointAssociationRequest$,
  CreateVpcEndpointAssociationResponse$,
  CustomAction$,
  DecryptionAction,
  DeleteContainerAssociation$,
  DeleteContainerAssociationCommand,
  DeleteContainerAssociationRequest$,
  DeleteContainerAssociationResponse$,
  DeleteFirewall$,
  DeleteFirewallCommand,
  DeleteFirewallPolicy$,
  DeleteFirewallPolicyCommand,
  DeleteFirewallPolicyRequest$,
  DeleteFirewallPolicyResponse$,
  DeleteFirewallPolicyV2$,
  DeleteFirewallPolicyV2Command,
  DeleteFirewallPolicyV2Request$,
  DeleteFirewallPolicyV2Response$,
  DeleteFirewallRequest$,
  DeleteFirewallResponse$,
  DeleteNetworkFirewallTransitGatewayAttachment$,
  DeleteNetworkFirewallTransitGatewayAttachmentCommand,
  DeleteNetworkFirewallTransitGatewayAttachmentRequest$,
  DeleteNetworkFirewallTransitGatewayAttachmentResponse$,
  DeleteProxy$,
  DeleteProxyCommand,
  DeleteProxyRequest$,
  DeleteProxyResponse$,
  DeleteResourcePolicy$,
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyRequest$,
  DeleteResourcePolicyResponse$,
  DeleteRuleGroup$,
  DeleteRuleGroupCommand,
  DeleteRuleGroupRequest$,
  DeleteRuleGroupResponse$,
  DeleteTLSInspectionConfiguration$,
  DeleteTLSInspectionConfigurationCommand,
  DeleteTLSInspectionConfigurationRequest$,
  DeleteTLSInspectionConfigurationResponse$,
  DeleteVpcEndpointAssociation$,
  DeleteVpcEndpointAssociationCommand,
  DeleteVpcEndpointAssociationRequest$,
  DeleteVpcEndpointAssociationResponse$,
  DescribeContainerAssociation$,
  DescribeContainerAssociationCommand,
  DescribeContainerAssociationRequest$,
  DescribeContainerAssociationResponse$,
  DescribeFirewall$,
  DescribeFirewallCommand,
  DescribeFirewallMetadata$,
  DescribeFirewallMetadataCommand,
  DescribeFirewallMetadataRequest$,
  DescribeFirewallMetadataResponse$,
  DescribeFirewallPolicy$,
  DescribeFirewallPolicyCommand,
  DescribeFirewallPolicyRequest$,
  DescribeFirewallPolicyResponse$,
  DescribeFirewallPolicyV2$,
  DescribeFirewallPolicyV2Command,
  DescribeFirewallPolicyV2Request$,
  DescribeFirewallPolicyV2Response$,
  DescribeFirewallRequest$,
  DescribeFirewallResponse$,
  DescribeFlowOperation$,
  DescribeFlowOperationCommand,
  DescribeFlowOperationRequest$,
  DescribeFlowOperationResponse$,
  DescribeLoggingConfiguration$,
  DescribeLoggingConfigurationCommand,
  DescribeLoggingConfigurationRequest$,
  DescribeLoggingConfigurationResponse$,
  DescribeProxy$,
  DescribeProxyCommand,
  DescribeProxyRequest$,
  DescribeProxyResource$,
  DescribeProxyResponse$,
  DescribeResourcePolicy$,
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyRequest$,
  DescribeResourcePolicyResponse$,
  DescribeRuleGroup$,
  DescribeRuleGroupCommand,
  DescribeRuleGroupMetadata$,
  DescribeRuleGroupMetadataCommand,
  DescribeRuleGroupMetadataRequest$,
  DescribeRuleGroupMetadataResponse$,
  DescribeRuleGroupRequest$,
  DescribeRuleGroupResponse$,
  DescribeRuleGroupSummary$,
  DescribeRuleGroupSummaryCommand,
  DescribeRuleGroupSummaryRequest$,
  DescribeRuleGroupSummaryResponse$,
  DescribeTLSInspectionConfiguration$,
  DescribeTLSInspectionConfigurationCommand,
  DescribeTLSInspectionConfigurationRequest$,
  DescribeTLSInspectionConfigurationResponse$,
  DescribeVpcEndpointAssociation$,
  DescribeVpcEndpointAssociationCommand,
  DescribeVpcEndpointAssociationRequest$,
  DescribeVpcEndpointAssociationResponse$,
  Dimension$,
  DisassociateAvailabilityZones$,
  DisassociateAvailabilityZonesCommand,
  DisassociateAvailabilityZonesRequest$,
  DisassociateAvailabilityZonesResponse$,
  DisassociateSubnets$,
  DisassociateSubnetsCommand,
  DisassociateSubnetsRequest$,
  DisassociateSubnetsResponse$,
  DNSExpiryExceptionPolicy,
  DomainMatch$,
  EnabledAnalysisType,
  EncryptionConfiguration$,
  EncryptionType,
  Firewall$,
  FirewallMetadata$,
  FirewallPolicy$,
  FirewallPolicyError$,
  FirewallPolicyErrorCode,
  FirewallPolicyMetadata$,
  FirewallPolicyResponse$,
  FirewallPolicyV2$,
  FirewallPolicyV2Metadata$,
  FirewallPolicyV2Response$,
  FirewallRule$,
  FirewallRuleAction,
  FirewallRuleGroup$,
  FirewallRuleGroupEntry$,
  FirewallRuleProtocol,
  FirewallRulesSource$,
  FirewallStatus$,
  FirewallStatusValue,
  Flow$,
  FlowFilter$,
  FlowOperation$,
  FlowOperationMetadata$,
  FlowOperationStatus,
  FlowOperationType,
  FlowTimeouts$,
  GeneratedRulesType,
  GetAnalysisReportResults$,
  GetAnalysisReportResultsCommand,
  GetAnalysisReportResultsRequest$,
  GetAnalysisReportResultsResponse$,
  Header$,
  Hits$,
  HookKey,
  IdentifiedType,
  InsufficientCapacityException,
  InsufficientCapacityException$,
  InternalServerError,
  InternalServerError$,
  InvalidOperationException,
  InvalidOperationException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidResourcePolicyException,
  InvalidResourcePolicyException$,
  InvalidTokenException,
  InvalidTokenException$,
  IPAddressType,
  IPSet$,
  IPSetMetadata$,
  IPSetReference$,
  IpsRuleGroup$,
  IpsRuleGroupEntry$,
  IpsRuleGroupOverride$,
  IpsRulesSource$,
  LimitExceededException,
  LimitExceededException$,
  ListAnalysisReports$,
  ListAnalysisReportsCommand,
  ListAnalysisReportsRequest$,
  ListAnalysisReportsResponse$,
  ListContainerAssociations$,
  ListContainerAssociationsCommand,
  ListContainerAssociationsRequest$,
  ListContainerAssociationsResponse$,
  ListenerProperty$,
  ListenerPropertyType,
  ListFirewallPolicies$,
  ListFirewallPoliciesCommand,
  ListFirewallPoliciesRequest$,
  ListFirewallPoliciesResponse$,
  ListFirewallPoliciesV2$,
  ListFirewallPoliciesV2Command,
  ListFirewallPoliciesV2Request$,
  ListFirewallPoliciesV2Response$,
  ListFirewalls$,
  ListFirewallsCommand,
  ListFirewallsRequest$,
  ListFirewallsResponse$,
  ListFlowOperationResults$,
  ListFlowOperationResultsCommand,
  ListFlowOperationResultsRequest$,
  ListFlowOperationResultsResponse$,
  ListFlowOperations$,
  ListFlowOperationsCommand,
  ListFlowOperationsRequest$,
  ListFlowOperationsResponse$,
  ListRuleGroups$,
  ListRuleGroupsCommand,
  ListRuleGroupsRequest$,
  ListRuleGroupsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTLSInspectionConfigurations$,
  ListTLSInspectionConfigurationsCommand,
  ListTLSInspectionConfigurationsRequest$,
  ListTLSInspectionConfigurationsResponse$,
  ListVpcEndpointAssociations$,
  ListVpcEndpointAssociationsCommand,
  ListVpcEndpointAssociationsRequest$,
  ListVpcEndpointAssociationsResponse$,
  LogDestinationConfig$,
  LogDestinationPermissionException,
  LogDestinationPermissionException$,
  LogDestinationType,
  LoggingConfiguration$,
  LogType,
  MatchAttributes$,
  NatGatewayAttachment$,
  NatGatewayAttachmentStatus,
  NatGatewayCreateMapping$,
  NetworkFirewall,
  NetworkFirewallClient,
  NetworkFirewallServiceException,
  OverrideAction,
  paginateGetAnalysisReportResults,
  paginateListAnalysisReports,
  paginateListContainerAssociations,
  paginateListFirewallPolicies,
  paginateListFirewallPoliciesV2,
  paginateListFirewalls,
  paginateListFlowOperationResults,
  paginateListFlowOperations,
  paginateListRuleGroups,
  paginateListTagsForResource,
  paginateListTLSInspectionConfigurations,
  paginateListVpcEndpointAssociations,
  PerObjectStatus$,
  PerObjectSyncStatus,
  PolicyDefaultAction,
  PolicyMode,
  PolicyVariables$,
  PortRange$,
  PortSet$,
  ProxyModifyState,
  ProxySettings$,
  ProxyState,
  PublishMetricAction$,
  PutResourcePolicy$,
  PutResourcePolicyCommand,
  PutResourcePolicyRequest$,
  PutResourcePolicyResponse$,
  ReferenceSets$,
  RejectNetworkFirewallTransitGatewayAttachment$,
  RejectNetworkFirewallTransitGatewayAttachmentCommand,
  RejectNetworkFirewallTransitGatewayAttachmentRequest$,
  RejectNetworkFirewallTransitGatewayAttachmentResponse$,
  ResourceManagedStatus,
  ResourceManagedType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceOwnerCheckException,
  ResourceOwnerCheckException$,
  ResourceStatus,
  RevocationCheckAction,
  Route53ResolvedIPValidation$,
  Route53ResolvedIPValidationAction,
  RuleDefinition$,
  RuleGroup$,
  RuleGroupMetadata$,
  RuleGroupResponse$,
  RuleGroupType,
  RuleMetadata$,
  RuleOption$,
  RuleOrder,
  RuleOutputFormat,
  RulesSource$,
  RulesSourceList$,
  RuleSummary$,
  RuleVariables$,
  ServerCertificate$,
  ServerCertificateConfiguration$,
  ServerCertificateScope$,
  SourceMetadata$,
  StartAnalysisReport$,
  StartAnalysisReportCommand,
  StartAnalysisReportRequest$,
  StartAnalysisReportResponse$,
  StartFlowCapture$,
  StartFlowCaptureCommand,
  StartFlowCaptureRequest$,
  StartFlowCaptureResponse$,
  StartFlowFlush$,
  StartFlowFlushCommand,
  StartFlowFlushRequest$,
  StartFlowFlushResponse$,
  StatefulAction,
  StatefulEngineOptions$,
  StatefulEngineOptionsV2$,
  StatefulRule$,
  StatefulRuleDirection,
  StatefulRuleGroupOverride$,
  StatefulRuleGroupReference$,
  StatefulRuleOptions$,
  StatefulRuleProtocol,
  StatelessRule$,
  StatelessRuleGroupReference$,
  StatelessRulesAndCustomActions$,
  StreamExceptionPolicy,
  StreamExceptionPolicyV2,
  SubnetMapping$,
  SubscriptionStatus,
  Summary$,
  SummaryConfiguration$,
  SummaryRuleOption,
  SyncState$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetType,
  TCPFlag,
  TCPFlagField$,
  ThrottlingException,
  ThrottlingException$,
  TlsCertificateData$,
  TLSInspectionConfiguration$,
  TLSInspectionConfigurationMetadata$,
  TLSInspectionConfigurationResponse$,
  TLSInspectionScopeDeploymentMode,
  TlsInterceptMode,
  TlsInterceptProperties$,
  TransitGatewayAttachmentStatus,
  TransitGatewayAttachmentSyncState$,
  TransparentFilteringNatScope,
  UniqueSources$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAvailabilityZoneChangeProtection$,
  UpdateAvailabilityZoneChangeProtectionCommand,
  UpdateAvailabilityZoneChangeProtectionRequest$,
  UpdateAvailabilityZoneChangeProtectionResponse$,
  UpdateContainerAssociation$,
  UpdateContainerAssociationCommand,
  UpdateContainerAssociationRequest$,
  UpdateContainerAssociationResponse$,
  UpdateFirewallAnalysisSettings$,
  UpdateFirewallAnalysisSettingsCommand,
  UpdateFirewallAnalysisSettingsRequest$,
  UpdateFirewallAnalysisSettingsResponse$,
  UpdateFirewallDeleteProtection$,
  UpdateFirewallDeleteProtectionCommand,
  UpdateFirewallDeleteProtectionRequest$,
  UpdateFirewallDeleteProtectionResponse$,
  UpdateFirewallDescription$,
  UpdateFirewallDescriptionCommand,
  UpdateFirewallDescriptionRequest$,
  UpdateFirewallDescriptionResponse$,
  UpdateFirewallEncryptionConfiguration$,
  UpdateFirewallEncryptionConfigurationCommand,
  UpdateFirewallEncryptionConfigurationRequest$,
  UpdateFirewallEncryptionConfigurationResponse$,
  UpdateFirewallPolicy$,
  UpdateFirewallPolicyChangeProtection$,
  UpdateFirewallPolicyChangeProtectionCommand,
  UpdateFirewallPolicyChangeProtectionRequest$,
  UpdateFirewallPolicyChangeProtectionResponse$,
  UpdateFirewallPolicyCommand,
  UpdateFirewallPolicyRequest$,
  UpdateFirewallPolicyResponse$,
  UpdateFirewallPolicyV2$,
  UpdateFirewallPolicyV2Command,
  UpdateFirewallPolicyV2Request$,
  UpdateFirewallPolicyV2Response$,
  UpdateLoggingConfiguration$,
  UpdateLoggingConfigurationCommand,
  UpdateLoggingConfigurationRequest$,
  UpdateLoggingConfigurationResponse$,
  UpdateProxySettings$,
  UpdateProxySettingsCommand,
  UpdateProxySettingsRequest$,
  UpdateProxySettingsResponse$,
  UpdateRuleGroup$,
  UpdateRuleGroupCommand,
  UpdateRuleGroupRequest$,
  UpdateRuleGroupResponse$,
  UpdateSubnetChangeProtection$,
  UpdateSubnetChangeProtectionCommand,
  UpdateSubnetChangeProtectionRequest$,
  UpdateSubnetChangeProtectionResponse$,
  UpdateTLSInspectionConfiguration$,
  UpdateTLSInspectionConfigurationCommand,
  UpdateTLSInspectionConfigurationRequest$,
  UpdateTLSInspectionConfigurationResponse$,
  VpcEndpoint$,
  VpcEndpointAssociation$,
  VpcEndpointAssociationMetadata$,
  VpcEndpointAssociationStatus$,
  waitForFirewallPolicyActive,
  waitUntilFirewallPolicyActive,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NetworkFirewallClient === "function");
assert(typeof NetworkFirewall === "function");
// commands
assert(typeof AcceptNetworkFirewallTransitGatewayAttachmentCommand === "function");
assert(typeof AcceptNetworkFirewallTransitGatewayAttachment$ === "object");
assert(typeof AssociateAvailabilityZonesCommand === "function");
assert(typeof AssociateAvailabilityZones$ === "object");
assert(typeof AssociateFirewallPolicyCommand === "function");
assert(typeof AssociateFirewallPolicy$ === "object");
assert(typeof AssociateSubnetsCommand === "function");
assert(typeof AssociateSubnets$ === "object");
assert(typeof CreateContainerAssociationCommand === "function");
assert(typeof CreateContainerAssociation$ === "object");
assert(typeof CreateFirewallCommand === "function");
assert(typeof CreateFirewall$ === "object");
assert(typeof CreateFirewallPolicyCommand === "function");
assert(typeof CreateFirewallPolicy$ === "object");
assert(typeof CreateFirewallPolicyV2Command === "function");
assert(typeof CreateFirewallPolicyV2$ === "object");
assert(typeof CreateRuleGroupCommand === "function");
assert(typeof CreateRuleGroup$ === "object");
assert(typeof CreateTLSInspectionConfigurationCommand === "function");
assert(typeof CreateTLSInspectionConfiguration$ === "object");
assert(typeof CreateVpcEndpointAssociationCommand === "function");
assert(typeof CreateVpcEndpointAssociation$ === "object");
assert(typeof DeleteContainerAssociationCommand === "function");
assert(typeof DeleteContainerAssociation$ === "object");
assert(typeof DeleteFirewallCommand === "function");
assert(typeof DeleteFirewall$ === "object");
assert(typeof DeleteFirewallPolicyCommand === "function");
assert(typeof DeleteFirewallPolicy$ === "object");
assert(typeof DeleteFirewallPolicyV2Command === "function");
assert(typeof DeleteFirewallPolicyV2$ === "object");
assert(typeof DeleteNetworkFirewallTransitGatewayAttachmentCommand === "function");
assert(typeof DeleteNetworkFirewallTransitGatewayAttachment$ === "object");
assert(typeof DeleteProxyCommand === "function");
assert(typeof DeleteProxy$ === "object");
assert(typeof DeleteResourcePolicyCommand === "function");
assert(typeof DeleteResourcePolicy$ === "object");
assert(typeof DeleteRuleGroupCommand === "function");
assert(typeof DeleteRuleGroup$ === "object");
assert(typeof DeleteTLSInspectionConfigurationCommand === "function");
assert(typeof DeleteTLSInspectionConfiguration$ === "object");
assert(typeof DeleteVpcEndpointAssociationCommand === "function");
assert(typeof DeleteVpcEndpointAssociation$ === "object");
assert(typeof DescribeContainerAssociationCommand === "function");
assert(typeof DescribeContainerAssociation$ === "object");
assert(typeof DescribeFirewallCommand === "function");
assert(typeof DescribeFirewall$ === "object");
assert(typeof DescribeFirewallMetadataCommand === "function");
assert(typeof DescribeFirewallMetadata$ === "object");
assert(typeof DescribeFirewallPolicyCommand === "function");
assert(typeof DescribeFirewallPolicy$ === "object");
assert(typeof DescribeFirewallPolicyV2Command === "function");
assert(typeof DescribeFirewallPolicyV2$ === "object");
assert(typeof DescribeFlowOperationCommand === "function");
assert(typeof DescribeFlowOperation$ === "object");
assert(typeof DescribeLoggingConfigurationCommand === "function");
assert(typeof DescribeLoggingConfiguration$ === "object");
assert(typeof DescribeProxyCommand === "function");
assert(typeof DescribeProxy$ === "object");
assert(typeof DescribeResourcePolicyCommand === "function");
assert(typeof DescribeResourcePolicy$ === "object");
assert(typeof DescribeRuleGroupCommand === "function");
assert(typeof DescribeRuleGroup$ === "object");
assert(typeof DescribeRuleGroupMetadataCommand === "function");
assert(typeof DescribeRuleGroupMetadata$ === "object");
assert(typeof DescribeRuleGroupSummaryCommand === "function");
assert(typeof DescribeRuleGroupSummary$ === "object");
assert(typeof DescribeTLSInspectionConfigurationCommand === "function");
assert(typeof DescribeTLSInspectionConfiguration$ === "object");
assert(typeof DescribeVpcEndpointAssociationCommand === "function");
assert(typeof DescribeVpcEndpointAssociation$ === "object");
assert(typeof DisassociateAvailabilityZonesCommand === "function");
assert(typeof DisassociateAvailabilityZones$ === "object");
assert(typeof DisassociateSubnetsCommand === "function");
assert(typeof DisassociateSubnets$ === "object");
assert(typeof GetAnalysisReportResultsCommand === "function");
assert(typeof GetAnalysisReportResults$ === "object");
assert(typeof ListAnalysisReportsCommand === "function");
assert(typeof ListAnalysisReports$ === "object");
assert(typeof ListContainerAssociationsCommand === "function");
assert(typeof ListContainerAssociations$ === "object");
assert(typeof ListFirewallPoliciesCommand === "function");
assert(typeof ListFirewallPolicies$ === "object");
assert(typeof ListFirewallPoliciesV2Command === "function");
assert(typeof ListFirewallPoliciesV2$ === "object");
assert(typeof ListFirewallsCommand === "function");
assert(typeof ListFirewalls$ === "object");
assert(typeof ListFlowOperationResultsCommand === "function");
assert(typeof ListFlowOperationResults$ === "object");
assert(typeof ListFlowOperationsCommand === "function");
assert(typeof ListFlowOperations$ === "object");
assert(typeof ListRuleGroupsCommand === "function");
assert(typeof ListRuleGroups$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTLSInspectionConfigurationsCommand === "function");
assert(typeof ListTLSInspectionConfigurations$ === "object");
assert(typeof ListVpcEndpointAssociationsCommand === "function");
assert(typeof ListVpcEndpointAssociations$ === "object");
assert(typeof PutResourcePolicyCommand === "function");
assert(typeof PutResourcePolicy$ === "object");
assert(typeof RejectNetworkFirewallTransitGatewayAttachmentCommand === "function");
assert(typeof RejectNetworkFirewallTransitGatewayAttachment$ === "object");
assert(typeof StartAnalysisReportCommand === "function");
assert(typeof StartAnalysisReport$ === "object");
assert(typeof StartFlowCaptureCommand === "function");
assert(typeof StartFlowCapture$ === "object");
assert(typeof StartFlowFlushCommand === "function");
assert(typeof StartFlowFlush$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAvailabilityZoneChangeProtectionCommand === "function");
assert(typeof UpdateAvailabilityZoneChangeProtection$ === "object");
assert(typeof UpdateContainerAssociationCommand === "function");
assert(typeof UpdateContainerAssociation$ === "object");
assert(typeof UpdateFirewallAnalysisSettingsCommand === "function");
assert(typeof UpdateFirewallAnalysisSettings$ === "object");
assert(typeof UpdateFirewallDeleteProtectionCommand === "function");
assert(typeof UpdateFirewallDeleteProtection$ === "object");
assert(typeof UpdateFirewallDescriptionCommand === "function");
assert(typeof UpdateFirewallDescription$ === "object");
assert(typeof UpdateFirewallEncryptionConfigurationCommand === "function");
assert(typeof UpdateFirewallEncryptionConfiguration$ === "object");
assert(typeof UpdateFirewallPolicyCommand === "function");
assert(typeof UpdateFirewallPolicy$ === "object");
assert(typeof UpdateFirewallPolicyChangeProtectionCommand === "function");
assert(typeof UpdateFirewallPolicyChangeProtection$ === "object");
assert(typeof UpdateFirewallPolicyV2Command === "function");
assert(typeof UpdateFirewallPolicyV2$ === "object");
assert(typeof UpdateLoggingConfigurationCommand === "function");
assert(typeof UpdateLoggingConfiguration$ === "object");
assert(typeof UpdateProxySettingsCommand === "function");
assert(typeof UpdateProxySettings$ === "object");
assert(typeof UpdateRuleGroupCommand === "function");
assert(typeof UpdateRuleGroup$ === "object");
assert(typeof UpdateSubnetChangeProtectionCommand === "function");
assert(typeof UpdateSubnetChangeProtection$ === "object");
assert(typeof UpdateTLSInspectionConfigurationCommand === "function");
assert(typeof UpdateTLSInspectionConfiguration$ === "object");
// structural schemas
assert(typeof AcceptNetworkFirewallTransitGatewayAttachmentRequest$ === "object");
assert(typeof AcceptNetworkFirewallTransitGatewayAttachmentResponse$ === "object");
assert(typeof ActionDefinition$ === "object");
assert(typeof Address$ === "object");
assert(typeof AnalysisReport$ === "object");
assert(typeof AnalysisResult$ === "object");
assert(typeof AnalysisTypeReportResult$ === "object");
assert(typeof AssociateAvailabilityZonesRequest$ === "object");
assert(typeof AssociateAvailabilityZonesResponse$ === "object");
assert(typeof AssociateFirewallPolicyRequest$ === "object");
assert(typeof AssociateFirewallPolicyResponse$ === "object");
assert(typeof AssociateSubnetsRequest$ === "object");
assert(typeof AssociateSubnetsResponse$ === "object");
assert(typeof Attachment$ === "object");
assert(typeof AvailabilityZoneMapping$ === "object");
assert(typeof AvailabilityZoneMetadata$ === "object");
assert(typeof AZSyncState$ === "object");
assert(typeof CapacityUsageSummary$ === "object");
assert(typeof CheckCertificateRevocationStatusActions$ === "object");
assert(typeof CIDRSummary$ === "object");
assert(typeof ContainerAssociationSummary$ === "object");
assert(typeof ContainerAttribute$ === "object");
assert(typeof ContainerMonitoringConfiguration$ === "object");
assert(typeof CreateContainerAssociationRequest$ === "object");
assert(typeof CreateContainerAssociationResponse$ === "object");
assert(typeof CreateFirewallPolicyRequest$ === "object");
assert(typeof CreateFirewallPolicyResponse$ === "object");
assert(typeof CreateFirewallPolicyV2Request$ === "object");
assert(typeof CreateFirewallPolicyV2Response$ === "object");
assert(typeof CreateFirewallRequest$ === "object");
assert(typeof CreateFirewallResponse$ === "object");
assert(typeof CreateRuleGroupRequest$ === "object");
assert(typeof CreateRuleGroupResponse$ === "object");
assert(typeof CreateTLSInspectionConfigurationRequest$ === "object");
assert(typeof CreateTLSInspectionConfigurationResponse$ === "object");
assert(typeof CreateVpcEndpointAssociationRequest$ === "object");
assert(typeof CreateVpcEndpointAssociationResponse$ === "object");
assert(typeof CustomAction$ === "object");
assert(typeof DeleteContainerAssociationRequest$ === "object");
assert(typeof DeleteContainerAssociationResponse$ === "object");
assert(typeof DeleteFirewallPolicyRequest$ === "object");
assert(typeof DeleteFirewallPolicyResponse$ === "object");
assert(typeof DeleteFirewallPolicyV2Request$ === "object");
assert(typeof DeleteFirewallPolicyV2Response$ === "object");
assert(typeof DeleteFirewallRequest$ === "object");
assert(typeof DeleteFirewallResponse$ === "object");
assert(typeof DeleteNetworkFirewallTransitGatewayAttachmentRequest$ === "object");
assert(typeof DeleteNetworkFirewallTransitGatewayAttachmentResponse$ === "object");
assert(typeof DeleteProxyRequest$ === "object");
assert(typeof DeleteProxyResponse$ === "object");
assert(typeof DeleteResourcePolicyRequest$ === "object");
assert(typeof DeleteResourcePolicyResponse$ === "object");
assert(typeof DeleteRuleGroupRequest$ === "object");
assert(typeof DeleteRuleGroupResponse$ === "object");
assert(typeof DeleteTLSInspectionConfigurationRequest$ === "object");
assert(typeof DeleteTLSInspectionConfigurationResponse$ === "object");
assert(typeof DeleteVpcEndpointAssociationRequest$ === "object");
assert(typeof DeleteVpcEndpointAssociationResponse$ === "object");
assert(typeof DescribeContainerAssociationRequest$ === "object");
assert(typeof DescribeContainerAssociationResponse$ === "object");
assert(typeof DescribeFirewallMetadataRequest$ === "object");
assert(typeof DescribeFirewallMetadataResponse$ === "object");
assert(typeof DescribeFirewallPolicyRequest$ === "object");
assert(typeof DescribeFirewallPolicyResponse$ === "object");
assert(typeof DescribeFirewallPolicyV2Request$ === "object");
assert(typeof DescribeFirewallPolicyV2Response$ === "object");
assert(typeof DescribeFirewallRequest$ === "object");
assert(typeof DescribeFirewallResponse$ === "object");
assert(typeof DescribeFlowOperationRequest$ === "object");
assert(typeof DescribeFlowOperationResponse$ === "object");
assert(typeof DescribeLoggingConfigurationRequest$ === "object");
assert(typeof DescribeLoggingConfigurationResponse$ === "object");
assert(typeof DescribeProxyRequest$ === "object");
assert(typeof DescribeProxyResource$ === "object");
assert(typeof DescribeProxyResponse$ === "object");
assert(typeof DescribeResourcePolicyRequest$ === "object");
assert(typeof DescribeResourcePolicyResponse$ === "object");
assert(typeof DescribeRuleGroupMetadataRequest$ === "object");
assert(typeof DescribeRuleGroupMetadataResponse$ === "object");
assert(typeof DescribeRuleGroupRequest$ === "object");
assert(typeof DescribeRuleGroupResponse$ === "object");
assert(typeof DescribeRuleGroupSummaryRequest$ === "object");
assert(typeof DescribeRuleGroupSummaryResponse$ === "object");
assert(typeof DescribeTLSInspectionConfigurationRequest$ === "object");
assert(typeof DescribeTLSInspectionConfigurationResponse$ === "object");
assert(typeof DescribeVpcEndpointAssociationRequest$ === "object");
assert(typeof DescribeVpcEndpointAssociationResponse$ === "object");
assert(typeof Dimension$ === "object");
assert(typeof DisassociateAvailabilityZonesRequest$ === "object");
assert(typeof DisassociateAvailabilityZonesResponse$ === "object");
assert(typeof DisassociateSubnetsRequest$ === "object");
assert(typeof DisassociateSubnetsResponse$ === "object");
assert(typeof DomainMatch$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof Firewall$ === "object");
assert(typeof FirewallMetadata$ === "object");
assert(typeof FirewallPolicy$ === "object");
assert(typeof FirewallPolicyError$ === "object");
assert(typeof FirewallPolicyMetadata$ === "object");
assert(typeof FirewallPolicyResponse$ === "object");
assert(typeof FirewallPolicyV2$ === "object");
assert(typeof FirewallPolicyV2Metadata$ === "object");
assert(typeof FirewallPolicyV2Response$ === "object");
assert(typeof FirewallRule$ === "object");
assert(typeof FirewallRuleGroup$ === "object");
assert(typeof FirewallRuleGroupEntry$ === "object");
assert(typeof FirewallRulesSource$ === "object");
assert(typeof FirewallStatus$ === "object");
assert(typeof Flow$ === "object");
assert(typeof FlowFilter$ === "object");
assert(typeof FlowOperation$ === "object");
assert(typeof FlowOperationMetadata$ === "object");
assert(typeof FlowTimeouts$ === "object");
assert(typeof GetAnalysisReportResultsRequest$ === "object");
assert(typeof GetAnalysisReportResultsResponse$ === "object");
assert(typeof Header$ === "object");
assert(typeof Hits$ === "object");
assert(typeof IPSet$ === "object");
assert(typeof IPSetMetadata$ === "object");
assert(typeof IPSetReference$ === "object");
assert(typeof IpsRuleGroup$ === "object");
assert(typeof IpsRuleGroupEntry$ === "object");
assert(typeof IpsRuleGroupOverride$ === "object");
assert(typeof IpsRulesSource$ === "object");
assert(typeof ListAnalysisReportsRequest$ === "object");
assert(typeof ListAnalysisReportsResponse$ === "object");
assert(typeof ListContainerAssociationsRequest$ === "object");
assert(typeof ListContainerAssociationsResponse$ === "object");
assert(typeof ListenerProperty$ === "object");
assert(typeof ListFirewallPoliciesRequest$ === "object");
assert(typeof ListFirewallPoliciesResponse$ === "object");
assert(typeof ListFirewallPoliciesV2Request$ === "object");
assert(typeof ListFirewallPoliciesV2Response$ === "object");
assert(typeof ListFirewallsRequest$ === "object");
assert(typeof ListFirewallsResponse$ === "object");
assert(typeof ListFlowOperationResultsRequest$ === "object");
assert(typeof ListFlowOperationResultsResponse$ === "object");
assert(typeof ListFlowOperationsRequest$ === "object");
assert(typeof ListFlowOperationsResponse$ === "object");
assert(typeof ListRuleGroupsRequest$ === "object");
assert(typeof ListRuleGroupsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTLSInspectionConfigurationsRequest$ === "object");
assert(typeof ListTLSInspectionConfigurationsResponse$ === "object");
assert(typeof ListVpcEndpointAssociationsRequest$ === "object");
assert(typeof ListVpcEndpointAssociationsResponse$ === "object");
assert(typeof LogDestinationConfig$ === "object");
assert(typeof LoggingConfiguration$ === "object");
assert(typeof MatchAttributes$ === "object");
assert(typeof NatGatewayAttachment$ === "object");
assert(typeof NatGatewayCreateMapping$ === "object");
assert(typeof PerObjectStatus$ === "object");
assert(typeof PolicyVariables$ === "object");
assert(typeof PortRange$ === "object");
assert(typeof PortSet$ === "object");
assert(typeof ProxySettings$ === "object");
assert(typeof PublishMetricAction$ === "object");
assert(typeof PutResourcePolicyRequest$ === "object");
assert(typeof PutResourcePolicyResponse$ === "object");
assert(typeof ReferenceSets$ === "object");
assert(typeof RejectNetworkFirewallTransitGatewayAttachmentRequest$ === "object");
assert(typeof RejectNetworkFirewallTransitGatewayAttachmentResponse$ === "object");
assert(typeof Route53ResolvedIPValidation$ === "object");
assert(typeof RuleDefinition$ === "object");
assert(typeof RuleGroup$ === "object");
assert(typeof RuleGroupMetadata$ === "object");
assert(typeof RuleGroupResponse$ === "object");
assert(typeof RuleMetadata$ === "object");
assert(typeof RuleOption$ === "object");
assert(typeof RulesSource$ === "object");
assert(typeof RulesSourceList$ === "object");
assert(typeof RuleSummary$ === "object");
assert(typeof RuleVariables$ === "object");
assert(typeof ServerCertificate$ === "object");
assert(typeof ServerCertificateConfiguration$ === "object");
assert(typeof ServerCertificateScope$ === "object");
assert(typeof SourceMetadata$ === "object");
assert(typeof StartAnalysisReportRequest$ === "object");
assert(typeof StartAnalysisReportResponse$ === "object");
assert(typeof StartFlowCaptureRequest$ === "object");
assert(typeof StartFlowCaptureResponse$ === "object");
assert(typeof StartFlowFlushRequest$ === "object");
assert(typeof StartFlowFlushResponse$ === "object");
assert(typeof StatefulEngineOptions$ === "object");
assert(typeof StatefulEngineOptionsV2$ === "object");
assert(typeof StatefulRule$ === "object");
assert(typeof StatefulRuleGroupOverride$ === "object");
assert(typeof StatefulRuleGroupReference$ === "object");
assert(typeof StatefulRuleOptions$ === "object");
assert(typeof StatelessRule$ === "object");
assert(typeof StatelessRuleGroupReference$ === "object");
assert(typeof StatelessRulesAndCustomActions$ === "object");
assert(typeof SubnetMapping$ === "object");
assert(typeof Summary$ === "object");
assert(typeof SummaryConfiguration$ === "object");
assert(typeof SyncState$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TCPFlagField$ === "object");
assert(typeof TlsCertificateData$ === "object");
assert(typeof TLSInspectionConfiguration$ === "object");
assert(typeof TLSInspectionConfigurationMetadata$ === "object");
assert(typeof TLSInspectionConfigurationResponse$ === "object");
assert(typeof TlsInterceptProperties$ === "object");
assert(typeof TransitGatewayAttachmentSyncState$ === "object");
assert(typeof UniqueSources$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAvailabilityZoneChangeProtectionRequest$ === "object");
assert(typeof UpdateAvailabilityZoneChangeProtectionResponse$ === "object");
assert(typeof UpdateContainerAssociationRequest$ === "object");
assert(typeof UpdateContainerAssociationResponse$ === "object");
assert(typeof UpdateFirewallAnalysisSettingsRequest$ === "object");
assert(typeof UpdateFirewallAnalysisSettingsResponse$ === "object");
assert(typeof UpdateFirewallDeleteProtectionRequest$ === "object");
assert(typeof UpdateFirewallDeleteProtectionResponse$ === "object");
assert(typeof UpdateFirewallDescriptionRequest$ === "object");
assert(typeof UpdateFirewallDescriptionResponse$ === "object");
assert(typeof UpdateFirewallEncryptionConfigurationRequest$ === "object");
assert(typeof UpdateFirewallEncryptionConfigurationResponse$ === "object");
assert(typeof UpdateFirewallPolicyChangeProtectionRequest$ === "object");
assert(typeof UpdateFirewallPolicyChangeProtectionResponse$ === "object");
assert(typeof UpdateFirewallPolicyRequest$ === "object");
assert(typeof UpdateFirewallPolicyResponse$ === "object");
assert(typeof UpdateFirewallPolicyV2Request$ === "object");
assert(typeof UpdateFirewallPolicyV2Response$ === "object");
assert(typeof UpdateLoggingConfigurationRequest$ === "object");
assert(typeof UpdateLoggingConfigurationResponse$ === "object");
assert(typeof UpdateProxySettingsRequest$ === "object");
assert(typeof UpdateProxySettingsResponse$ === "object");
assert(typeof UpdateRuleGroupRequest$ === "object");
assert(typeof UpdateRuleGroupResponse$ === "object");
assert(typeof UpdateSubnetChangeProtectionRequest$ === "object");
assert(typeof UpdateSubnetChangeProtectionResponse$ === "object");
assert(typeof UpdateTLSInspectionConfigurationRequest$ === "object");
assert(typeof UpdateTLSInspectionConfigurationResponse$ === "object");
assert(typeof VpcEndpoint$ === "object");
assert(typeof VpcEndpointAssociation$ === "object");
assert(typeof VpcEndpointAssociationMetadata$ === "object");
assert(typeof VpcEndpointAssociationStatus$ === "object");
// enums
assert(typeof ActionScope === "object");
assert(typeof AttachmentStatus === "object");
assert(typeof ConfigurationSyncState === "object");
assert(typeof ContainerAssociationStatus === "object");
assert(typeof ContainerMonitoringType === "object");
assert(typeof DecryptionAction === "object");
assert(typeof DNSExpiryExceptionPolicy === "object");
assert(typeof EnabledAnalysisType === "object");
assert(typeof EncryptionType === "object");
assert(typeof FirewallPolicyErrorCode === "object");
assert(typeof FirewallRuleAction === "object");
assert(typeof FirewallRuleProtocol === "object");
assert(typeof FirewallStatusValue === "object");
assert(typeof FlowOperationStatus === "object");
assert(typeof FlowOperationType === "object");
assert(typeof GeneratedRulesType === "object");
assert(typeof HookKey === "object");
assert(typeof IdentifiedType === "object");
assert(typeof IPAddressType === "object");
assert(typeof ListenerPropertyType === "object");
assert(typeof LogDestinationType === "object");
assert(typeof LogType === "object");
assert(typeof NatGatewayAttachmentStatus === "object");
assert(typeof OverrideAction === "object");
assert(typeof PerObjectSyncStatus === "object");
assert(typeof PolicyDefaultAction === "object");
assert(typeof PolicyMode === "object");
assert(typeof ProxyModifyState === "object");
assert(typeof ProxyState === "object");
assert(typeof ResourceManagedStatus === "object");
assert(typeof ResourceManagedType === "object");
assert(typeof ResourceStatus === "object");
assert(typeof RevocationCheckAction === "object");
assert(typeof Route53ResolvedIPValidationAction === "object");
assert(typeof RuleGroupType === "object");
assert(typeof RuleOrder === "object");
assert(typeof RuleOutputFormat === "object");
assert(typeof StatefulAction === "object");
assert(typeof StatefulRuleDirection === "object");
assert(typeof StatefulRuleProtocol === "object");
assert(typeof StreamExceptionPolicy === "object");
assert(typeof StreamExceptionPolicyV2 === "object");
assert(typeof SubscriptionStatus === "object");
assert(typeof SummaryRuleOption === "object");
assert(typeof TargetType === "object");
assert(typeof TCPFlag === "object");
assert(typeof TLSInspectionScopeDeploymentMode === "object");
assert(typeof TlsInterceptMode === "object");
assert(typeof TransitGatewayAttachmentStatus === "object");
assert(typeof TransparentFilteringNatScope === "object");
// errors
assert(InsufficientCapacityException.prototype instanceof NetworkFirewallServiceException);
assert(typeof InsufficientCapacityException$ === "object");
assert(InternalServerError.prototype instanceof NetworkFirewallServiceException);
assert(typeof InternalServerError$ === "object");
assert(InvalidOperationException.prototype instanceof NetworkFirewallServiceException);
assert(typeof InvalidOperationException$ === "object");
assert(InvalidRequestException.prototype instanceof NetworkFirewallServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(InvalidResourcePolicyException.prototype instanceof NetworkFirewallServiceException);
assert(typeof InvalidResourcePolicyException$ === "object");
assert(InvalidTokenException.prototype instanceof NetworkFirewallServiceException);
assert(typeof InvalidTokenException$ === "object");
assert(LimitExceededException.prototype instanceof NetworkFirewallServiceException);
assert(typeof LimitExceededException$ === "object");
assert(LogDestinationPermissionException.prototype instanceof NetworkFirewallServiceException);
assert(typeof LogDestinationPermissionException$ === "object");
assert(ResourceNotFoundException.prototype instanceof NetworkFirewallServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceOwnerCheckException.prototype instanceof NetworkFirewallServiceException);
assert(typeof ResourceOwnerCheckException$ === "object");
assert(ThrottlingException.prototype instanceof NetworkFirewallServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnsupportedOperationException.prototype instanceof NetworkFirewallServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(NetworkFirewallServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForFirewallPolicyActive === "function");
assert(typeof waitUntilFirewallPolicyActive === "function");
// paginators
assert(typeof paginateGetAnalysisReportResults === "function");
assert(typeof paginateListAnalysisReports === "function");
assert(typeof paginateListContainerAssociations === "function");
assert(typeof paginateListFirewallPolicies === "function");
assert(typeof paginateListFirewallPoliciesV2 === "function");
assert(typeof paginateListFirewalls === "function");
assert(typeof paginateListFlowOperationResults === "function");
assert(typeof paginateListFlowOperations === "function");
assert(typeof paginateListRuleGroups === "function");
assert(typeof paginateListTLSInspectionConfigurations === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListVpcEndpointAssociations === "function");
console.log(`NetworkFirewall index test passed.`);
