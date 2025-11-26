import {
  CreateCellCommand,
  CreateCrossAccountAuthorizationCommand,
  CreateReadinessCheckCommand,
  CreateRecoveryGroupCommand,
  CreateResourceSetCommand,
  DeleteCellCommand,
  DeleteCrossAccountAuthorizationCommand,
  DeleteReadinessCheckCommand,
  DeleteRecoveryGroupCommand,
  DeleteResourceSetCommand,
  GetArchitectureRecommendationsCommand,
  GetCellCommand,
  GetCellReadinessSummaryCommand,
  GetReadinessCheckCommand,
  GetReadinessCheckResourceStatusCommand,
  GetReadinessCheckStatusCommand,
  GetRecoveryGroupCommand,
  GetRecoveryGroupReadinessSummaryCommand,
  GetResourceSetCommand,
  ListCellsCommand,
  ListCrossAccountAuthorizationsCommand,
  ListReadinessChecksCommand,
  ListRecoveryGroupsCommand,
  ListResourceSetsCommand,
  ListRulesCommand,
  ListTagsForResourcesCommand,
  Readiness,
  Route53RecoveryReadiness,
  Route53RecoveryReadinessClient,
  Route53RecoveryReadinessServiceException,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCellCommand,
  UpdateReadinessCheckCommand,
  UpdateRecoveryGroupCommand,
  UpdateResourceSetCommand,
  paginateGetCellReadinessSummary,
  paginateGetReadinessCheckResourceStatus,
  paginateGetReadinessCheckStatus,
  paginateGetRecoveryGroupReadinessSummary,
  paginateListCells,
  paginateListCrossAccountAuthorizations,
  paginateListReadinessChecks,
  paginateListRecoveryGroups,
  paginateListResourceSets,
  paginateListRules,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53RecoveryReadinessClient === "function")
assert(typeof Route53RecoveryReadiness === "function")
// commands
assert(typeof CreateCellCommand === "function")
assert(typeof CreateCrossAccountAuthorizationCommand === "function")
assert(typeof CreateReadinessCheckCommand === "function")
assert(typeof CreateRecoveryGroupCommand === "function")
assert(typeof CreateResourceSetCommand === "function")
assert(typeof DeleteCellCommand === "function")
assert(typeof DeleteCrossAccountAuthorizationCommand === "function")
assert(typeof DeleteReadinessCheckCommand === "function")
assert(typeof DeleteRecoveryGroupCommand === "function")
assert(typeof DeleteResourceSetCommand === "function")
assert(typeof GetArchitectureRecommendationsCommand === "function")
assert(typeof GetCellCommand === "function")
assert(typeof GetCellReadinessSummaryCommand === "function")
assert(typeof GetReadinessCheckCommand === "function")
assert(typeof GetReadinessCheckResourceStatusCommand === "function")
assert(typeof GetReadinessCheckStatusCommand === "function")
assert(typeof GetRecoveryGroupCommand === "function")
assert(typeof GetRecoveryGroupReadinessSummaryCommand === "function")
assert(typeof GetResourceSetCommand === "function")
assert(typeof ListCellsCommand === "function")
assert(typeof ListCrossAccountAuthorizationsCommand === "function")
assert(typeof ListReadinessChecksCommand === "function")
assert(typeof ListRecoveryGroupsCommand === "function")
assert(typeof ListResourceSetsCommand === "function")
assert(typeof ListRulesCommand === "function")
assert(typeof ListTagsForResourcesCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateCellCommand === "function")
assert(typeof UpdateReadinessCheckCommand === "function")
assert(typeof UpdateRecoveryGroupCommand === "function")
assert(typeof UpdateResourceSetCommand === "function")
// enums
assert(typeof Readiness === "object");
// errors
assert(Route53RecoveryReadinessServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetCellReadinessSummary === "function")
assert(typeof paginateGetReadinessCheckResourceStatus === "function")
assert(typeof paginateGetReadinessCheckStatus === "function")
assert(typeof paginateGetRecoveryGroupReadinessSummary === "function")
assert(typeof paginateListCells === "function")
assert(typeof paginateListCrossAccountAuthorizations === "function")
assert(typeof paginateListReadinessChecks === "function")
assert(typeof paginateListRecoveryGroups === "function")
assert(typeof paginateListResourceSets === "function")
assert(typeof paginateListRules === "function")
console.log(`Route53RecoveryReadiness index test passed.`);
