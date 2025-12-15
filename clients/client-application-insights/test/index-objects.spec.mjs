import {
  AccessDeniedException,
  AccessDeniedException$,
  AddWorkload$,
  AddWorkloadCommand,
  AddWorkloadRequest$,
  AddWorkloadResponse$,
  ApplicationComponent$,
  ApplicationInfo$,
  ApplicationInsights,
  ApplicationInsightsClient,
  ApplicationInsightsServiceException,
  BadRequestException,
  BadRequestException$,
  CloudWatchEventSource,
  ConfigurationEvent$,
  ConfigurationEventResourceType,
  ConfigurationEventStatus,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateComponent$,
  CreateComponentCommand,
  CreateComponentRequest$,
  CreateComponentResponse$,
  CreateLogPattern$,
  CreateLogPatternCommand,
  CreateLogPatternRequest$,
  CreateLogPatternResponse$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DeleteComponent$,
  DeleteComponentCommand,
  DeleteComponentRequest$,
  DeleteComponentResponse$,
  DeleteLogPattern$,
  DeleteLogPatternCommand,
  DeleteLogPatternRequest$,
  DeleteLogPatternResponse$,
  DescribeApplication$,
  DescribeApplicationCommand,
  DescribeApplicationRequest$,
  DescribeApplicationResponse$,
  DescribeComponent$,
  DescribeComponentCommand,
  DescribeComponentConfiguration$,
  DescribeComponentConfigurationCommand,
  DescribeComponentConfigurationRecommendation$,
  DescribeComponentConfigurationRecommendationCommand,
  DescribeComponentConfigurationRecommendationRequest$,
  DescribeComponentConfigurationRecommendationResponse$,
  DescribeComponentConfigurationRequest$,
  DescribeComponentConfigurationResponse$,
  DescribeComponentRequest$,
  DescribeComponentResponse$,
  DescribeLogPattern$,
  DescribeLogPatternCommand,
  DescribeLogPatternRequest$,
  DescribeLogPatternResponse$,
  DescribeObservation$,
  DescribeObservationCommand,
  DescribeObservationRequest$,
  DescribeObservationResponse$,
  DescribeProblem$,
  DescribeProblemCommand,
  DescribeProblemObservations$,
  DescribeProblemObservationsCommand,
  DescribeProblemObservationsRequest$,
  DescribeProblemObservationsResponse$,
  DescribeProblemRequest$,
  DescribeProblemResponse$,
  DescribeWorkload$,
  DescribeWorkloadCommand,
  DescribeWorkloadRequest$,
  DescribeWorkloadResponse$,
  DiscoveryType,
  FeedbackKey,
  FeedbackValue,
  GroupingType,
  InternalServerException,
  InternalServerException$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListComponents$,
  ListComponentsCommand,
  ListComponentsRequest$,
  ListComponentsResponse$,
  ListConfigurationHistory$,
  ListConfigurationHistoryCommand,
  ListConfigurationHistoryRequest$,
  ListConfigurationHistoryResponse$,
  ListLogPatternSets$,
  ListLogPatternSetsCommand,
  ListLogPatternSetsRequest$,
  ListLogPatternSetsResponse$,
  ListLogPatterns$,
  ListLogPatternsCommand,
  ListLogPatternsRequest$,
  ListLogPatternsResponse$,
  ListProblems$,
  ListProblemsCommand,
  ListProblemsRequest$,
  ListProblemsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWorkloads$,
  ListWorkloadsCommand,
  ListWorkloadsRequest$,
  ListWorkloadsResponse$,
  LogFilter,
  LogPattern$,
  Observation$,
  OsType,
  Problem$,
  RecommendationType,
  RelatedObservations$,
  RemoveWorkload$,
  RemoveWorkloadCommand,
  RemoveWorkloadRequest$,
  RemoveWorkloadResponse$,
  ResolutionMethod,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SeverityLevel,
  Status,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TagsAlreadyExistException,
  TagsAlreadyExistException$,
  Tier,
  TooManyTagsException,
  TooManyTagsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  UpdateComponent$,
  UpdateComponentCommand,
  UpdateComponentConfiguration$,
  UpdateComponentConfigurationCommand,
  UpdateComponentConfigurationRequest$,
  UpdateComponentConfigurationResponse$,
  UpdateComponentRequest$,
  UpdateComponentResponse$,
  UpdateLogPattern$,
  UpdateLogPatternCommand,
  UpdateLogPatternRequest$,
  UpdateLogPatternResponse$,
  UpdateProblem$,
  UpdateProblemCommand,
  UpdateProblemRequest$,
  UpdateProblemResponse$,
  UpdateStatus,
  UpdateWorkload$,
  UpdateWorkloadCommand,
  UpdateWorkloadRequest$,
  UpdateWorkloadResponse$,
  ValidationException,
  ValidationException$,
  Visibility,
  Workload$,
  WorkloadConfiguration$,
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
assert(typeof AddWorkload$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateComponentCommand === "function");
assert(typeof CreateComponent$ === "object");
assert(typeof CreateLogPatternCommand === "function");
assert(typeof CreateLogPattern$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteComponentCommand === "function");
assert(typeof DeleteComponent$ === "object");
assert(typeof DeleteLogPatternCommand === "function");
assert(typeof DeleteLogPattern$ === "object");
assert(typeof DescribeApplicationCommand === "function");
assert(typeof DescribeApplication$ === "object");
assert(typeof DescribeComponentCommand === "function");
assert(typeof DescribeComponent$ === "object");
assert(typeof DescribeComponentConfigurationCommand === "function");
assert(typeof DescribeComponentConfiguration$ === "object");
assert(typeof DescribeComponentConfigurationRecommendationCommand === "function");
assert(typeof DescribeComponentConfigurationRecommendation$ === "object");
assert(typeof DescribeLogPatternCommand === "function");
assert(typeof DescribeLogPattern$ === "object");
assert(typeof DescribeObservationCommand === "function");
assert(typeof DescribeObservation$ === "object");
assert(typeof DescribeProblemCommand === "function");
assert(typeof DescribeProblem$ === "object");
assert(typeof DescribeProblemObservationsCommand === "function");
assert(typeof DescribeProblemObservations$ === "object");
assert(typeof DescribeWorkloadCommand === "function");
assert(typeof DescribeWorkload$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListComponents$ === "object");
assert(typeof ListConfigurationHistoryCommand === "function");
assert(typeof ListConfigurationHistory$ === "object");
assert(typeof ListLogPatternsCommand === "function");
assert(typeof ListLogPatterns$ === "object");
assert(typeof ListLogPatternSetsCommand === "function");
assert(typeof ListLogPatternSets$ === "object");
assert(typeof ListProblemsCommand === "function");
assert(typeof ListProblems$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWorkloadsCommand === "function");
assert(typeof ListWorkloads$ === "object");
assert(typeof RemoveWorkloadCommand === "function");
assert(typeof RemoveWorkload$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateComponentCommand === "function");
assert(typeof UpdateComponent$ === "object");
assert(typeof UpdateComponentConfigurationCommand === "function");
assert(typeof UpdateComponentConfiguration$ === "object");
assert(typeof UpdateLogPatternCommand === "function");
assert(typeof UpdateLogPattern$ === "object");
assert(typeof UpdateProblemCommand === "function");
assert(typeof UpdateProblem$ === "object");
assert(typeof UpdateWorkloadCommand === "function");
assert(typeof UpdateWorkload$ === "object");
// structural schemas
assert(typeof AddWorkloadRequest$ === "object");
assert(typeof AddWorkloadResponse$ === "object");
assert(typeof ApplicationComponent$ === "object");
assert(typeof ApplicationInfo$ === "object");
assert(typeof ConfigurationEvent$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateComponentRequest$ === "object");
assert(typeof CreateComponentResponse$ === "object");
assert(typeof CreateLogPatternRequest$ === "object");
assert(typeof CreateLogPatternResponse$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DeleteComponentRequest$ === "object");
assert(typeof DeleteComponentResponse$ === "object");
assert(typeof DeleteLogPatternRequest$ === "object");
assert(typeof DeleteLogPatternResponse$ === "object");
assert(typeof DescribeApplicationRequest$ === "object");
assert(typeof DescribeApplicationResponse$ === "object");
assert(typeof DescribeComponentConfigurationRecommendationRequest$ === "object");
assert(typeof DescribeComponentConfigurationRecommendationResponse$ === "object");
assert(typeof DescribeComponentConfigurationRequest$ === "object");
assert(typeof DescribeComponentConfigurationResponse$ === "object");
assert(typeof DescribeComponentRequest$ === "object");
assert(typeof DescribeComponentResponse$ === "object");
assert(typeof DescribeLogPatternRequest$ === "object");
assert(typeof DescribeLogPatternResponse$ === "object");
assert(typeof DescribeObservationRequest$ === "object");
assert(typeof DescribeObservationResponse$ === "object");
assert(typeof DescribeProblemObservationsRequest$ === "object");
assert(typeof DescribeProblemObservationsResponse$ === "object");
assert(typeof DescribeProblemRequest$ === "object");
assert(typeof DescribeProblemResponse$ === "object");
assert(typeof DescribeWorkloadRequest$ === "object");
assert(typeof DescribeWorkloadResponse$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListComponentsRequest$ === "object");
assert(typeof ListComponentsResponse$ === "object");
assert(typeof ListConfigurationHistoryRequest$ === "object");
assert(typeof ListConfigurationHistoryResponse$ === "object");
assert(typeof ListLogPatternSetsRequest$ === "object");
assert(typeof ListLogPatternSetsResponse$ === "object");
assert(typeof ListLogPatternsRequest$ === "object");
assert(typeof ListLogPatternsResponse$ === "object");
assert(typeof ListProblemsRequest$ === "object");
assert(typeof ListProblemsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWorkloadsRequest$ === "object");
assert(typeof ListWorkloadsResponse$ === "object");
assert(typeof LogPattern$ === "object");
assert(typeof Observation$ === "object");
assert(typeof Problem$ === "object");
assert(typeof RelatedObservations$ === "object");
assert(typeof RemoveWorkloadRequest$ === "object");
assert(typeof RemoveWorkloadResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof UpdateComponentConfigurationRequest$ === "object");
assert(typeof UpdateComponentConfigurationResponse$ === "object");
assert(typeof UpdateComponentRequest$ === "object");
assert(typeof UpdateComponentResponse$ === "object");
assert(typeof UpdateLogPatternRequest$ === "object");
assert(typeof UpdateLogPatternResponse$ === "object");
assert(typeof UpdateProblemRequest$ === "object");
assert(typeof UpdateProblemResponse$ === "object");
assert(typeof UpdateWorkloadRequest$ === "object");
assert(typeof UpdateWorkloadResponse$ === "object");
assert(typeof Workload$ === "object");
assert(typeof WorkloadConfiguration$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof ApplicationInsightsServiceException);
assert(typeof BadRequestException$ === "object");
assert(InternalServerException.prototype instanceof ApplicationInsightsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceInUseException.prototype instanceof ApplicationInsightsServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ApplicationInsightsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TagsAlreadyExistException.prototype instanceof ApplicationInsightsServiceException);
assert(typeof TagsAlreadyExistException$ === "object");
assert(TooManyTagsException.prototype instanceof ApplicationInsightsServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof ApplicationInsightsServiceException);
assert(typeof ValidationException$ === "object");
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
