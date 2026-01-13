import {
  AccessDeniedException,
  AccessDeniedException$,
  ApplicationSignals,
  ApplicationSignalsClient,
  ApplicationSignalsServiceException,
  AttributeFilter$,
  AuditFinding$,
  AuditorResult$,
  AuditTarget$,
  AuditTargetEntity$,
  BatchGetServiceLevelObjectiveBudgetReport$,
  BatchGetServiceLevelObjectiveBudgetReportCommand,
  BatchGetServiceLevelObjectiveBudgetReportInput$,
  BatchGetServiceLevelObjectiveBudgetReportOutput$,
  BatchUpdateExclusionWindows$,
  BatchUpdateExclusionWindowsCommand,
  BatchUpdateExclusionWindowsError$,
  BatchUpdateExclusionWindowsInput$,
  BatchUpdateExclusionWindowsOutput$,
  BurnRateConfiguration$,
  CalendarInterval$,
  CanaryEntity$,
  ChangeEvent$,
  ChangeEventType,
  ConflictException,
  ConflictException$,
  ConnectionType,
  CreateServiceLevelObjective$,
  CreateServiceLevelObjectiveCommand,
  CreateServiceLevelObjectiveInput$,
  CreateServiceLevelObjectiveOutput$,
  DeleteGroupingConfiguration$,
  DeleteGroupingConfigurationCommand,
  DeleteGroupingConfigurationOutput$,
  DeleteServiceLevelObjective$,
  DeleteServiceLevelObjectiveCommand,
  DeleteServiceLevelObjectiveInput$,
  DeleteServiceLevelObjectiveOutput$,
  DependencyConfig$,
  DependencyGraph$,
  DetailLevel,
  Dimension$,
  DurationUnit,
  Edge$,
  EvaluationType,
  ExclusionWindow$,
  GetService$,
  GetServiceCommand,
  GetServiceInput$,
  GetServiceLevelObjective$,
  GetServiceLevelObjectiveCommand,
  GetServiceLevelObjectiveInput$,
  GetServiceLevelObjectiveOutput$,
  GetServiceOutput$,
  Goal$,
  GroupingAttributeDefinition$,
  GroupingConfiguration$,
  Interval$,
  ListAuditFindings$,
  ListAuditFindingsCommand,
  ListAuditFindingsInput$,
  ListAuditFindingsOutput$,
  ListEntityEvents$,
  ListEntityEventsCommand,
  ListEntityEventsInput$,
  ListEntityEventsOutput$,
  ListGroupingAttributeDefinitions$,
  ListGroupingAttributeDefinitionsCommand,
  ListGroupingAttributeDefinitionsInput$,
  ListGroupingAttributeDefinitionsOutput$,
  ListServiceDependencies$,
  ListServiceDependenciesCommand,
  ListServiceDependenciesInput$,
  ListServiceDependenciesOutput$,
  ListServiceDependents$,
  ListServiceDependentsCommand,
  ListServiceDependentsInput$,
  ListServiceDependentsOutput$,
  ListServiceLevelObjectiveExclusionWindows$,
  ListServiceLevelObjectiveExclusionWindowsCommand,
  ListServiceLevelObjectiveExclusionWindowsInput$,
  ListServiceLevelObjectiveExclusionWindowsOutput$,
  ListServiceLevelObjectives$,
  ListServiceLevelObjectivesCommand,
  ListServiceLevelObjectivesInput$,
  ListServiceLevelObjectivesOutput$,
  ListServiceOperations$,
  ListServiceOperationsCommand,
  ListServiceOperationsInput$,
  ListServiceOperationsOutput$,
  ListServices$,
  ListServicesCommand,
  ListServicesInput$,
  ListServicesOutput$,
  ListServiceStates$,
  ListServiceStatesCommand,
  ListServiceStatesInput$,
  ListServiceStatesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Metric$,
  MetricDataQuery$,
  MetricGraph$,
  MetricReference$,
  MetricSourceType,
  MetricStat$,
  MonitoredRequestCountMetricDataQueries$,
  Node$,
  paginateListEntityEvents,
  paginateListServiceDependencies,
  paginateListServiceDependents,
  paginateListServiceLevelObjectiveExclusionWindows,
  paginateListServiceLevelObjectives,
  paginateListServiceOperations,
  paginateListServices,
  paginateListServiceStates,
  PutGroupingConfiguration$,
  PutGroupingConfigurationCommand,
  PutGroupingConfigurationInput$,
  PutGroupingConfigurationOutput$,
  RecurrenceRule$,
  RequestBasedServiceLevelIndicator$,
  RequestBasedServiceLevelIndicatorConfig$,
  RequestBasedServiceLevelIndicatorMetric$,
  RequestBasedServiceLevelIndicatorMetricConfig$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RollingInterval$,
  Service$,
  ServiceDependency$,
  ServiceDependent$,
  ServiceEntity$,
  ServiceGroup$,
  ServiceLevelIndicator$,
  ServiceLevelIndicatorComparisonOperator,
  ServiceLevelIndicatorConfig$,
  ServiceLevelIndicatorMetric$,
  ServiceLevelIndicatorMetricConfig$,
  ServiceLevelIndicatorMetricType,
  ServiceLevelObjective$,
  ServiceLevelObjectiveBudgetReport$,
  ServiceLevelObjectiveBudgetReportError$,
  ServiceLevelObjectiveBudgetStatus,
  ServiceLevelObjectiveEntity$,
  ServiceLevelObjectiveSummary$,
  ServiceOperation$,
  ServiceOperationEntity$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceState$,
  ServiceSummary$,
  Severity,
  StandardUnit,
  StartDiscovery$,
  StartDiscoveryCommand,
  StartDiscoveryInput$,
  StartDiscoveryOutput$,
  Tag$,
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
  UpdateServiceLevelObjective$,
  UpdateServiceLevelObjectiveCommand,
  UpdateServiceLevelObjectiveInput$,
  UpdateServiceLevelObjectiveOutput$,
  ValidationException,
  ValidationException$,
  Window$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApplicationSignalsClient === "function");
assert(typeof ApplicationSignals === "function");
// commands
assert(typeof BatchGetServiceLevelObjectiveBudgetReportCommand === "function");
assert(typeof BatchGetServiceLevelObjectiveBudgetReport$ === "object");
assert(typeof BatchUpdateExclusionWindowsCommand === "function");
assert(typeof BatchUpdateExclusionWindows$ === "object");
assert(typeof CreateServiceLevelObjectiveCommand === "function");
assert(typeof CreateServiceLevelObjective$ === "object");
assert(typeof DeleteGroupingConfigurationCommand === "function");
assert(typeof DeleteGroupingConfiguration$ === "object");
assert(typeof DeleteServiceLevelObjectiveCommand === "function");
assert(typeof DeleteServiceLevelObjective$ === "object");
assert(typeof GetServiceCommand === "function");
assert(typeof GetService$ === "object");
assert(typeof GetServiceLevelObjectiveCommand === "function");
assert(typeof GetServiceLevelObjective$ === "object");
assert(typeof ListAuditFindingsCommand === "function");
assert(typeof ListAuditFindings$ === "object");
assert(typeof ListEntityEventsCommand === "function");
assert(typeof ListEntityEvents$ === "object");
assert(typeof ListGroupingAttributeDefinitionsCommand === "function");
assert(typeof ListGroupingAttributeDefinitions$ === "object");
assert(typeof ListServiceDependenciesCommand === "function");
assert(typeof ListServiceDependencies$ === "object");
assert(typeof ListServiceDependentsCommand === "function");
assert(typeof ListServiceDependents$ === "object");
assert(typeof ListServiceLevelObjectiveExclusionWindowsCommand === "function");
assert(typeof ListServiceLevelObjectiveExclusionWindows$ === "object");
assert(typeof ListServiceLevelObjectivesCommand === "function");
assert(typeof ListServiceLevelObjectives$ === "object");
assert(typeof ListServiceOperationsCommand === "function");
assert(typeof ListServiceOperations$ === "object");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServices$ === "object");
assert(typeof ListServiceStatesCommand === "function");
assert(typeof ListServiceStates$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutGroupingConfigurationCommand === "function");
assert(typeof PutGroupingConfiguration$ === "object");
assert(typeof StartDiscoveryCommand === "function");
assert(typeof StartDiscovery$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateServiceLevelObjectiveCommand === "function");
assert(typeof UpdateServiceLevelObjective$ === "object");
// structural schemas
assert(typeof AttributeFilter$ === "object");
assert(typeof AuditFinding$ === "object");
assert(typeof AuditorResult$ === "object");
assert(typeof AuditTarget$ === "object");
assert(typeof AuditTargetEntity$ === "object");
assert(typeof BatchGetServiceLevelObjectiveBudgetReportInput$ === "object");
assert(typeof BatchGetServiceLevelObjectiveBudgetReportOutput$ === "object");
assert(typeof BatchUpdateExclusionWindowsError$ === "object");
assert(typeof BatchUpdateExclusionWindowsInput$ === "object");
assert(typeof BatchUpdateExclusionWindowsOutput$ === "object");
assert(typeof BurnRateConfiguration$ === "object");
assert(typeof CalendarInterval$ === "object");
assert(typeof CanaryEntity$ === "object");
assert(typeof ChangeEvent$ === "object");
assert(typeof CreateServiceLevelObjectiveInput$ === "object");
assert(typeof CreateServiceLevelObjectiveOutput$ === "object");
assert(typeof DeleteGroupingConfigurationOutput$ === "object");
assert(typeof DeleteServiceLevelObjectiveInput$ === "object");
assert(typeof DeleteServiceLevelObjectiveOutput$ === "object");
assert(typeof DependencyConfig$ === "object");
assert(typeof DependencyGraph$ === "object");
assert(typeof Dimension$ === "object");
assert(typeof Edge$ === "object");
assert(typeof ExclusionWindow$ === "object");
assert(typeof GetServiceInput$ === "object");
assert(typeof GetServiceLevelObjectiveInput$ === "object");
assert(typeof GetServiceLevelObjectiveOutput$ === "object");
assert(typeof GetServiceOutput$ === "object");
assert(typeof Goal$ === "object");
assert(typeof GroupingAttributeDefinition$ === "object");
assert(typeof GroupingConfiguration$ === "object");
assert(typeof Interval$ === "object");
assert(typeof ListAuditFindingsInput$ === "object");
assert(typeof ListAuditFindingsOutput$ === "object");
assert(typeof ListEntityEventsInput$ === "object");
assert(typeof ListEntityEventsOutput$ === "object");
assert(typeof ListGroupingAttributeDefinitionsInput$ === "object");
assert(typeof ListGroupingAttributeDefinitionsOutput$ === "object");
assert(typeof ListServiceDependenciesInput$ === "object");
assert(typeof ListServiceDependenciesOutput$ === "object");
assert(typeof ListServiceDependentsInput$ === "object");
assert(typeof ListServiceDependentsOutput$ === "object");
assert(typeof ListServiceLevelObjectiveExclusionWindowsInput$ === "object");
assert(typeof ListServiceLevelObjectiveExclusionWindowsOutput$ === "object");
assert(typeof ListServiceLevelObjectivesInput$ === "object");
assert(typeof ListServiceLevelObjectivesOutput$ === "object");
assert(typeof ListServiceOperationsInput$ === "object");
assert(typeof ListServiceOperationsOutput$ === "object");
assert(typeof ListServicesInput$ === "object");
assert(typeof ListServicesOutput$ === "object");
assert(typeof ListServiceStatesInput$ === "object");
assert(typeof ListServiceStatesOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Metric$ === "object");
assert(typeof MetricDataQuery$ === "object");
assert(typeof MetricGraph$ === "object");
assert(typeof MetricReference$ === "object");
assert(typeof MetricStat$ === "object");
assert(typeof MonitoredRequestCountMetricDataQueries$ === "object");
assert(typeof Node$ === "object");
assert(typeof PutGroupingConfigurationInput$ === "object");
assert(typeof PutGroupingConfigurationOutput$ === "object");
assert(typeof RecurrenceRule$ === "object");
assert(typeof RequestBasedServiceLevelIndicator$ === "object");
assert(typeof RequestBasedServiceLevelIndicatorConfig$ === "object");
assert(typeof RequestBasedServiceLevelIndicatorMetric$ === "object");
assert(typeof RequestBasedServiceLevelIndicatorMetricConfig$ === "object");
assert(typeof RollingInterval$ === "object");
assert(typeof Service$ === "object");
assert(typeof ServiceDependency$ === "object");
assert(typeof ServiceDependent$ === "object");
assert(typeof ServiceEntity$ === "object");
assert(typeof ServiceGroup$ === "object");
assert(typeof ServiceLevelIndicator$ === "object");
assert(typeof ServiceLevelIndicatorConfig$ === "object");
assert(typeof ServiceLevelIndicatorMetric$ === "object");
assert(typeof ServiceLevelIndicatorMetricConfig$ === "object");
assert(typeof ServiceLevelObjective$ === "object");
assert(typeof ServiceLevelObjectiveBudgetReport$ === "object");
assert(typeof ServiceLevelObjectiveBudgetReportError$ === "object");
assert(typeof ServiceLevelObjectiveEntity$ === "object");
assert(typeof ServiceLevelObjectiveSummary$ === "object");
assert(typeof ServiceOperation$ === "object");
assert(typeof ServiceOperationEntity$ === "object");
assert(typeof ServiceState$ === "object");
assert(typeof ServiceSummary$ === "object");
assert(typeof StartDiscoveryInput$ === "object");
assert(typeof StartDiscoveryOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateServiceLevelObjectiveInput$ === "object");
assert(typeof UpdateServiceLevelObjectiveOutput$ === "object");
assert(typeof Window$ === "object");
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
assert(AccessDeniedException.prototype instanceof ApplicationSignalsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof ApplicationSignalsServiceException);
assert(typeof ConflictException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ApplicationSignalsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ApplicationSignalsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ApplicationSignalsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ApplicationSignalsServiceException);
assert(typeof ValidationException$ === "object");
assert(ApplicationSignalsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEntityEvents === "function");
assert(typeof paginateListServiceDependencies === "function");
assert(typeof paginateListServiceDependents === "function");
assert(typeof paginateListServiceLevelObjectiveExclusionWindows === "function");
assert(typeof paginateListServiceLevelObjectives === "function");
assert(typeof paginateListServiceOperations === "function");
assert(typeof paginateListServiceStates === "function");
assert(typeof paginateListServices === "function");
console.log(`ApplicationSignals index test passed.`);
