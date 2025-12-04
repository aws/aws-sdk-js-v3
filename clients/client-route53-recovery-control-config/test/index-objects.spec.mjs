import {
  CreateClusterCommand,
  CreateControlPanelCommand,
  CreateRoutingControlCommand,
  CreateSafetyRuleCommand,
  DeleteClusterCommand,
  DeleteControlPanelCommand,
  DeleteRoutingControlCommand,
  DeleteSafetyRuleCommand,
  DescribeClusterCommand,
  DescribeControlPanelCommand,
  DescribeRoutingControlCommand,
  DescribeSafetyRuleCommand,
  GetResourcePolicyCommand,
  ListAssociatedRoute53HealthChecksCommand,
  ListClustersCommand,
  ListControlPanelsCommand,
  ListRoutingControlsCommand,
  ListSafetyRulesCommand,
  ListTagsForResourceCommand,
  NetworkType,
  Route53RecoveryControlConfig,
  Route53RecoveryControlConfigClient,
  Route53RecoveryControlConfigServiceException,
  RuleType,
  Status,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateClusterCommand,
  UpdateControlPanelCommand,
  UpdateRoutingControlCommand,
  UpdateSafetyRuleCommand,
  paginateListAssociatedRoute53HealthChecks,
  paginateListClusters,
  paginateListControlPanels,
  paginateListRoutingControls,
  paginateListSafetyRules,
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
assert(typeof CreateControlPanelCommand === "function");
assert(typeof CreateRoutingControlCommand === "function");
assert(typeof CreateSafetyRuleCommand === "function");
assert(typeof DeleteClusterCommand === "function");
assert(typeof DeleteControlPanelCommand === "function");
assert(typeof DeleteRoutingControlCommand === "function");
assert(typeof DeleteSafetyRuleCommand === "function");
assert(typeof DescribeClusterCommand === "function");
assert(typeof DescribeControlPanelCommand === "function");
assert(typeof DescribeRoutingControlCommand === "function");
assert(typeof DescribeSafetyRuleCommand === "function");
assert(typeof GetResourcePolicyCommand === "function");
assert(typeof ListAssociatedRoute53HealthChecksCommand === "function");
assert(typeof ListClustersCommand === "function");
assert(typeof ListControlPanelsCommand === "function");
assert(typeof ListRoutingControlsCommand === "function");
assert(typeof ListSafetyRulesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateClusterCommand === "function");
assert(typeof UpdateControlPanelCommand === "function");
assert(typeof UpdateRoutingControlCommand === "function");
assert(typeof UpdateSafetyRuleCommand === "function");
// enums
assert(typeof NetworkType === "object");
assert(typeof RuleType === "object");
assert(typeof Status === "object");
// errors
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
