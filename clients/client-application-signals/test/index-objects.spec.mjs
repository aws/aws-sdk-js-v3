import {
  ApplicationSignals,
  ApplicationSignalsClient,
  ApplicationSignalsServiceException,
  BatchGetServiceLevelObjectiveBudgetReportCommand,
  BatchUpdateExclusionWindowsCommand,
  ChangeEventType,
  ConnectionType,
  CreateServiceLevelObjectiveCommand,
  DeleteGroupingConfigurationCommand,
  DeleteServiceLevelObjectiveCommand,
  DetailLevel,
  DurationUnit,
  EvaluationType,
  GetServiceCommand,
  GetServiceLevelObjectiveCommand,
  ListAuditFindingsCommand,
  ListEntityEventsCommand,
  ListGroupingAttributeDefinitionsCommand,
  ListServiceDependenciesCommand,
  ListServiceDependentsCommand,
  ListServiceLevelObjectiveExclusionWindowsCommand,
  ListServiceLevelObjectivesCommand,
  ListServiceOperationsCommand,
  ListServiceStatesCommand,
  ListServicesCommand,
  ListTagsForResourceCommand,
  MetricSourceType,
  PutGroupingConfigurationCommand,
  ServiceLevelIndicatorComparisonOperator,
  ServiceLevelIndicatorMetricType,
  ServiceLevelObjectiveBudgetStatus,
  Severity,
  StandardUnit,
  StartDiscoveryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateServiceLevelObjectiveCommand,
  paginateListEntityEvents,
  paginateListServiceDependencies,
  paginateListServiceDependents,
  paginateListServiceLevelObjectiveExclusionWindows,
  paginateListServiceLevelObjectives,
  paginateListServiceOperations,
  paginateListServiceStates,
  paginateListServices,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApplicationSignalsClient === "function")
assert(typeof ApplicationSignals === "function")
// commands
assert(typeof BatchGetServiceLevelObjectiveBudgetReportCommand === "function")
assert(typeof BatchUpdateExclusionWindowsCommand === "function")
assert(typeof CreateServiceLevelObjectiveCommand === "function")
assert(typeof DeleteGroupingConfigurationCommand === "function")
assert(typeof DeleteServiceLevelObjectiveCommand === "function")
assert(typeof GetServiceCommand === "function")
assert(typeof GetServiceLevelObjectiveCommand === "function")
assert(typeof ListAuditFindingsCommand === "function")
assert(typeof ListEntityEventsCommand === "function")
assert(typeof ListGroupingAttributeDefinitionsCommand === "function")
assert(typeof ListServiceDependenciesCommand === "function")
assert(typeof ListServiceDependentsCommand === "function")
assert(typeof ListServiceLevelObjectiveExclusionWindowsCommand === "function")
assert(typeof ListServiceLevelObjectivesCommand === "function")
assert(typeof ListServiceOperationsCommand === "function")
assert(typeof ListServicesCommand === "function")
assert(typeof ListServiceStatesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof PutGroupingConfigurationCommand === "function")
assert(typeof StartDiscoveryCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateServiceLevelObjectiveCommand === "function")
// enums
assert(typeof ChangeEventType === "object");
assert(typeof ConnectionType === "object");
assert(typeof DetailLevel === "object");
assert(typeof DurationUnit === "object");
assert(typeof EvaluationType === "object");
assert(typeof MetricSourceType === "object");
assert(typeof ServiceLevelIndicatorComparisonOperator === "object");
assert(typeof ServiceLevelIndicatorMetricType === "object");
assert(typeof ServiceLevelObjectiveBudgetStatus === "object");
assert(typeof Severity === "object");
assert(typeof StandardUnit === "object");
// errors
assert(ApplicationSignalsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListEntityEvents === "function")
assert(typeof paginateListServiceDependencies === "function")
assert(typeof paginateListServiceDependents === "function")
assert(typeof paginateListServiceLevelObjectiveExclusionWindows === "function")
assert(typeof paginateListServiceLevelObjectives === "function")
assert(typeof paginateListServiceOperations === "function")
assert(typeof paginateListServiceStates === "function")
assert(typeof paginateListServices === "function")
console.log(`ApplicationSignals index test passed.`);
