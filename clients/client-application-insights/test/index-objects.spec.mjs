import {
  AccessDeniedException,
  AddWorkloadCommand,
  ApplicationInsights,
  ApplicationInsightsClient,
  ApplicationInsightsServiceException,
  BadRequestException,
  CloudWatchEventSource,
  ConfigurationEventResourceType,
  ConfigurationEventStatus,
  CreateApplicationCommand,
  CreateComponentCommand,
  CreateLogPatternCommand,
  DeleteApplicationCommand,
  DeleteComponentCommand,
  DeleteLogPatternCommand,
  DescribeApplicationCommand,
  DescribeComponentCommand,
  DescribeComponentConfigurationCommand,
  DescribeComponentConfigurationRecommendationCommand,
  DescribeLogPatternCommand,
  DescribeObservationCommand,
  DescribeProblemCommand,
  DescribeProblemObservationsCommand,
  DescribeWorkloadCommand,
  DiscoveryType,
  FeedbackKey,
  FeedbackValue,
  GroupingType,
  InternalServerException,
  ListApplicationsCommand,
  ListComponentsCommand,
  ListConfigurationHistoryCommand,
  ListLogPatternSetsCommand,
  ListLogPatternsCommand,
  ListProblemsCommand,
  ListTagsForResourceCommand,
  ListWorkloadsCommand,
  LogFilter,
  OsType,
  RecommendationType,
  RemoveWorkloadCommand,
  ResolutionMethod,
  ResourceInUseException,
  ResourceNotFoundException,
  SeverityLevel,
  Status,
  TagResourceCommand,
  TagsAlreadyExistException,
  Tier,
  TooManyTagsException,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateComponentCommand,
  UpdateComponentConfigurationCommand,
  UpdateLogPatternCommand,
  UpdateProblemCommand,
  UpdateStatus,
  UpdateWorkloadCommand,
  ValidationException,
  Visibility,
  paginateListApplications,
  paginateListComponents,
  paginateListConfigurationHistory,
  paginateListLogPatternSets,
  paginateListLogPatterns,
  paginateListProblems,
  paginateListWorkloads,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ApplicationInsightsClient === "function");
assert(typeof ApplicationInsights === "function");
// commands
assert(typeof AddWorkloadCommand === "function");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateComponentCommand === "function");
assert(typeof CreateLogPatternCommand === "function");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteComponentCommand === "function");
assert(typeof DeleteLogPatternCommand === "function");
assert(typeof DescribeApplicationCommand === "function");
assert(typeof DescribeComponentCommand === "function");
assert(typeof DescribeComponentConfigurationCommand === "function");
assert(typeof DescribeComponentConfigurationRecommendationCommand === "function");
assert(typeof DescribeLogPatternCommand === "function");
assert(typeof DescribeObservationCommand === "function");
assert(typeof DescribeProblemCommand === "function");
assert(typeof DescribeProblemObservationsCommand === "function");
assert(typeof DescribeWorkloadCommand === "function");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListConfigurationHistoryCommand === "function");
assert(typeof ListLogPatternsCommand === "function");
assert(typeof ListLogPatternSetsCommand === "function");
assert(typeof ListProblemsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWorkloadsCommand === "function");
assert(typeof RemoveWorkloadCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateComponentCommand === "function");
assert(typeof UpdateComponentConfigurationCommand === "function");
assert(typeof UpdateLogPatternCommand === "function");
assert(typeof UpdateProblemCommand === "function");
assert(typeof UpdateWorkloadCommand === "function");
// enums
assert(typeof CloudWatchEventSource === "object");
assert(typeof ConfigurationEventResourceType === "object");
assert(typeof ConfigurationEventStatus === "object");
assert(typeof DiscoveryType === "object");
assert(typeof FeedbackKey === "object");
assert(typeof FeedbackValue === "object");
assert(typeof GroupingType === "object");
assert(typeof LogFilter === "object");
assert(typeof OsType === "object");
assert(typeof RecommendationType === "object");
assert(typeof ResolutionMethod === "object");
assert(typeof SeverityLevel === "object");
assert(typeof Status === "object");
assert(typeof Tier === "object");
assert(typeof UpdateStatus === "object");
assert(typeof Visibility === "object");
// errors
assert(AccessDeniedException.prototype instanceof ApplicationInsightsServiceException);
assert(BadRequestException.prototype instanceof ApplicationInsightsServiceException);
assert(InternalServerException.prototype instanceof ApplicationInsightsServiceException);
assert(ResourceInUseException.prototype instanceof ApplicationInsightsServiceException);
assert(ResourceNotFoundException.prototype instanceof ApplicationInsightsServiceException);
assert(TagsAlreadyExistException.prototype instanceof ApplicationInsightsServiceException);
assert(TooManyTagsException.prototype instanceof ApplicationInsightsServiceException);
assert(ValidationException.prototype instanceof ApplicationInsightsServiceException);
assert(ApplicationInsightsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListApplications === "function");
assert(typeof paginateListComponents === "function");
assert(typeof paginateListConfigurationHistory === "function");
assert(typeof paginateListLogPatternSets === "function");
assert(typeof paginateListLogPatterns === "function");
assert(typeof paginateListProblems === "function");
assert(typeof paginateListWorkloads === "function");
console.log(`ApplicationInsights index test passed.`);
