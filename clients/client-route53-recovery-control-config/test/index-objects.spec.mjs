import {
  AccessDeniedException,
  AccessDeniedException$,
  AssertionRule$,
  AssertionRuleUpdate$,
  Cluster$,
  ClusterEndpoint$,
  ConflictException,
  ConflictException$,
  ControlPanel$,
  CreateCluster$,
  CreateClusterCommand,
  CreateClusterRequest$,
  CreateClusterResponse$,
  CreateControlPanel$,
  CreateControlPanelCommand,
  CreateControlPanelRequest$,
  CreateControlPanelResponse$,
  CreateRoutingControl$,
  CreateRoutingControlCommand,
  CreateRoutingControlRequest$,
  CreateRoutingControlResponse$,
  CreateSafetyRule$,
  CreateSafetyRuleCommand,
  CreateSafetyRuleRequest$,
  CreateSafetyRuleResponse$,
  DeleteCluster$,
  DeleteClusterCommand,
  DeleteClusterRequest$,
  DeleteClusterResponse$,
  DeleteControlPanel$,
  DeleteControlPanelCommand,
  DeleteControlPanelRequest$,
  DeleteControlPanelResponse$,
  DeleteRoutingControl$,
  DeleteRoutingControlCommand,
  DeleteRoutingControlRequest$,
  DeleteRoutingControlResponse$,
  DeleteSafetyRule$,
  DeleteSafetyRuleCommand,
  DeleteSafetyRuleRequest$,
  DeleteSafetyRuleResponse$,
  DescribeCluster$,
  DescribeClusterCommand,
  DescribeClusterRequest$,
  DescribeClusterResponse$,
  DescribeControlPanel$,
  DescribeControlPanelCommand,
  DescribeControlPanelRequest$,
  DescribeControlPanelResponse$,
  DescribeRoutingControl$,
  DescribeRoutingControlCommand,
  DescribeRoutingControlRequest$,
  DescribeRoutingControlResponse$,
  DescribeSafetyRule$,
  DescribeSafetyRuleCommand,
  DescribeSafetyRuleRequest$,
  DescribeSafetyRuleResponse$,
  GatingRule$,
  GatingRuleUpdate$,
  GetResourcePolicy$,
  GetResourcePolicyCommand,
  GetResourcePolicyRequest$,
  GetResourcePolicyResponse$,
  InternalServerException,
  InternalServerException$,
  ListAssociatedRoute53HealthChecks$,
  ListAssociatedRoute53HealthChecksCommand,
  ListAssociatedRoute53HealthChecksRequest$,
  ListAssociatedRoute53HealthChecksResponse$,
  ListClusters$,
  ListClustersCommand,
  ListClustersRequest$,
  ListClustersResponse$,
  ListControlPanels$,
  ListControlPanelsCommand,
  ListControlPanelsRequest$,
  ListControlPanelsResponse$,
  ListRoutingControls$,
  ListRoutingControlsCommand,
  ListRoutingControlsRequest$,
  ListRoutingControlsResponse$,
  ListSafetyRules$,
  ListSafetyRulesCommand,
  ListSafetyRulesRequest$,
  ListSafetyRulesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  NetworkType,
  NewAssertionRule$,
  NewGatingRule$,
  paginateListAssociatedRoute53HealthChecks,
  paginateListClusters,
  paginateListControlPanels,
  paginateListRoutingControls,
  paginateListSafetyRules,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Route53RecoveryControlConfig,
  Route53RecoveryControlConfigClient,
  Route53RecoveryControlConfigServiceException,
  RoutingControl$,
  Rule$,
  RuleConfig$,
  RuleType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Status,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateCluster$,
  UpdateClusterCommand,
  UpdateClusterRequest$,
  UpdateClusterResponse$,
  UpdateControlPanel$,
  UpdateControlPanelCommand,
  UpdateControlPanelRequest$,
  UpdateControlPanelResponse$,
  UpdateRoutingControl$,
  UpdateRoutingControlCommand,
  UpdateRoutingControlRequest$,
  UpdateRoutingControlResponse$,
  UpdateSafetyRule$,
  UpdateSafetyRuleCommand,
  UpdateSafetyRuleRequest$,
  UpdateSafetyRuleResponse$,
  ValidationException,
  ValidationException$,
  waitForClusterCreated,
  waitForClusterDeleted,
  waitForControlPanelCreated,
  waitForControlPanelDeleted,
  waitForRoutingControlCreated,
  waitForRoutingControlDeleted,
  waitUntilClusterCreated,
  waitUntilClusterDeleted,
  waitUntilControlPanelCreated,
  waitUntilControlPanelDeleted,
  waitUntilRoutingControlCreated,
  waitUntilRoutingControlDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53RecoveryControlConfigClient === "function");
assert(typeof Route53RecoveryControlConfig === "function");
// commands
assert(typeof CreateClusterCommand === "function");
assert(typeof CreateCluster$ === "object");
assert(typeof CreateControlPanelCommand === "function");
assert(typeof CreateControlPanel$ === "object");
assert(typeof CreateRoutingControlCommand === "function");
assert(typeof CreateRoutingControl$ === "object");
assert(typeof CreateSafetyRuleCommand === "function");
assert(typeof CreateSafetyRule$ === "object");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteCluster$ === "object");
assert(typeof DeleteControlPanelCommand === "function");
assert(typeof DeleteControlPanel$ === "object");
assert(typeof DeleteRoutingControlCommand === "function");
assert(typeof DeleteRoutingControl$ === "object");
assert(typeof DeleteSafetyRuleCommand === "function");
assert(typeof DeleteSafetyRule$ === "object");
assert(typeof DescribeClusterCommand === "function");
assert(typeof DescribeCluster$ === "object");
assert(typeof DescribeControlPanelCommand === "function");
assert(typeof DescribeControlPanel$ === "object");
assert(typeof DescribeRoutingControlCommand === "function");
assert(typeof DescribeRoutingControl$ === "object");
assert(typeof DescribeSafetyRuleCommand === "function");
assert(typeof DescribeSafetyRule$ === "object");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof GetResourcePolicy$ === "object");
assert(typeof ListAssociatedRoute53HealthChecksCommand === "function");
assert(typeof ListAssociatedRoute53HealthChecks$ === "object");
assert(typeof ListClustersCommand === "function");
assert(typeof ListClusters$ === "object");
assert(typeof ListControlPanelsCommand === "function");
assert(typeof ListControlPanels$ === "object");
assert(typeof ListRoutingControlsCommand === "function");
assert(typeof ListRoutingControls$ === "object");
assert(typeof ListSafetyRulesCommand === "function");
assert(typeof ListSafetyRules$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateCluster$ === "object");
assert(typeof UpdateControlPanelCommand === "function");
assert(typeof UpdateControlPanel$ === "object");
assert(typeof UpdateRoutingControlCommand === "function");
assert(typeof UpdateRoutingControl$ === "object");
assert(typeof UpdateSafetyRuleCommand === "function");
assert(typeof UpdateSafetyRule$ === "object");
// structural schemas
assert(typeof AssertionRule$ === "object");
assert(typeof AssertionRuleUpdate$ === "object");
assert(typeof Cluster$ === "object");
assert(typeof ClusterEndpoint$ === "object");
assert(typeof ControlPanel$ === "object");
assert(typeof CreateClusterRequest$ === "object");
assert(typeof CreateClusterResponse$ === "object");
assert(typeof CreateControlPanelRequest$ === "object");
assert(typeof CreateControlPanelResponse$ === "object");
assert(typeof CreateRoutingControlRequest$ === "object");
assert(typeof CreateRoutingControlResponse$ === "object");
assert(typeof CreateSafetyRuleRequest$ === "object");
assert(typeof CreateSafetyRuleResponse$ === "object");
assert(typeof DeleteClusterRequest$ === "object");
assert(typeof DeleteClusterResponse$ === "object");
assert(typeof DeleteControlPanelRequest$ === "object");
assert(typeof DeleteControlPanelResponse$ === "object");
assert(typeof DeleteRoutingControlRequest$ === "object");
assert(typeof DeleteRoutingControlResponse$ === "object");
assert(typeof DeleteSafetyRuleRequest$ === "object");
assert(typeof DeleteSafetyRuleResponse$ === "object");
assert(typeof DescribeClusterRequest$ === "object");
assert(typeof DescribeClusterResponse$ === "object");
assert(typeof DescribeControlPanelRequest$ === "object");
assert(typeof DescribeControlPanelResponse$ === "object");
assert(typeof DescribeRoutingControlRequest$ === "object");
assert(typeof DescribeRoutingControlResponse$ === "object");
assert(typeof DescribeSafetyRuleRequest$ === "object");
assert(typeof DescribeSafetyRuleResponse$ === "object");
assert(typeof GatingRule$ === "object");
assert(typeof GatingRuleUpdate$ === "object");
assert(typeof GetResourcePolicyRequest$ === "object");
assert(typeof GetResourcePolicyResponse$ === "object");
assert(typeof ListAssociatedRoute53HealthChecksRequest$ === "object");
assert(typeof ListAssociatedRoute53HealthChecksResponse$ === "object");
assert(typeof ListClustersRequest$ === "object");
assert(typeof ListClustersResponse$ === "object");
assert(typeof ListControlPanelsRequest$ === "object");
assert(typeof ListControlPanelsResponse$ === "object");
assert(typeof ListRoutingControlsRequest$ === "object");
assert(typeof ListRoutingControlsResponse$ === "object");
assert(typeof ListSafetyRulesRequest$ === "object");
assert(typeof ListSafetyRulesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof NewAssertionRule$ === "object");
assert(typeof NewGatingRule$ === "object");
assert(typeof RoutingControl$ === "object");
assert(typeof Rule$ === "object");
assert(typeof RuleConfig$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateClusterRequest$ === "object");
assert(typeof UpdateClusterResponse$ === "object");
assert(typeof UpdateControlPanelRequest$ === "object");
assert(typeof UpdateControlPanelResponse$ === "object");
assert(typeof UpdateRoutingControlRequest$ === "object");
assert(typeof UpdateRoutingControlResponse$ === "object");
assert(typeof UpdateSafetyRuleRequest$ === "object");
assert(typeof UpdateSafetyRuleResponse$ === "object");
// enums
assert(typeof NetworkType === "object");
assert(typeof RuleType === "object");
assert(typeof Status === "object");
// errors
assert(AccessDeniedException.prototype instanceof Route53RecoveryControlConfigServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof Route53RecoveryControlConfigServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof Route53RecoveryControlConfigServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof Route53RecoveryControlConfigServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof Route53RecoveryControlConfigServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof Route53RecoveryControlConfigServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof Route53RecoveryControlConfigServiceException);
assert(typeof ValidationException$ === "object");
assert(Route53RecoveryControlConfigServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForClusterCreated === "function");
assert(typeof waitForClusterDeleted === "function");
assert(typeof waitForControlPanelCreated === "function");
assert(typeof waitForControlPanelDeleted === "function");
assert(typeof waitForRoutingControlCreated === "function");
assert(typeof waitForRoutingControlDeleted === "function");
assert(typeof waitUntilClusterCreated === "function");
assert(typeof waitUntilClusterDeleted === "function");
assert(typeof waitUntilControlPanelCreated === "function");
assert(typeof waitUntilControlPanelDeleted === "function");
assert(typeof waitUntilRoutingControlCreated === "function");
assert(typeof waitUntilRoutingControlDeleted === "function");
// paginators
assert(typeof paginateListAssociatedRoute53HealthChecks === "function");
assert(typeof paginateListClusters === "function");
assert(typeof paginateListControlPanels === "function");
assert(typeof paginateListRoutingControls === "function");
assert(typeof paginateListSafetyRules === "function");
console.log(`Route53RecoveryControlConfig index test passed.`);
