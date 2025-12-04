import {
  BatchEvaluateFeatureCommand,
  ChangeDirectionEnum,
  CreateExperimentCommand,
  CreateFeatureCommand,
  CreateLaunchCommand,
  CreateProjectCommand,
  CreateSegmentCommand,
  DeleteExperimentCommand,
  DeleteFeatureCommand,
  DeleteLaunchCommand,
  DeleteProjectCommand,
  DeleteSegmentCommand,
  EvaluateFeatureCommand,
  EventType,
  Evidently,
  EvidentlyClient,
  EvidentlyServiceException,
  ExperimentBaseStat,
  ExperimentReportName,
  ExperimentResultRequestType,
  ExperimentResultResponseType,
  ExperimentStatus,
  ExperimentStopDesiredState,
  ExperimentType,
  FeatureEvaluationStrategy,
  FeatureStatus,
  GetExperimentCommand,
  GetExperimentResultsCommand,
  GetFeatureCommand,
  GetLaunchCommand,
  GetProjectCommand,
  GetSegmentCommand,
  LaunchStatus,
  LaunchStopDesiredState,
  LaunchType,
  ListExperimentsCommand,
  ListFeaturesCommand,
  ListLaunchesCommand,
  ListProjectsCommand,
  ListSegmentReferencesCommand,
  ListSegmentsCommand,
  ListTagsForResourceCommand,
  ProjectStatus,
  PutProjectEventsCommand,
  SegmentReferenceResourceType,
  StartExperimentCommand,
  StartLaunchCommand,
  StopExperimentCommand,
  StopLaunchCommand,
  TagResourceCommand,
  TestSegmentPatternCommand,
  UntagResourceCommand,
  UpdateExperimentCommand,
  UpdateFeatureCommand,
  UpdateLaunchCommand,
  UpdateProjectCommand,
  UpdateProjectDataDeliveryCommand,
  VariationValueType,
  paginateListExperiments,
  paginateListFeatures,
  paginateListLaunches,
  paginateListProjects,
  paginateListSegmentReferences,
  paginateListSegments,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof EvidentlyClient === "function");
assert(typeof Evidently === "function");
// commands
assert(typeof BatchEvaluateFeatureCommand === "function");
assert(typeof CreateExperimentCommand === "function");
assert(typeof CreateFeatureCommand === "function");
assert(typeof CreateLaunchCommand === "function");
assert(typeof CreateProjectCommand === "function");
assert(typeof CreateSegmentCommand === "function");
assert(typeof DeleteExperimentCommand === "function");
assert(typeof DeleteFeatureCommand === "function");
assert(typeof DeleteLaunchCommand === "function");
assert(typeof DeleteProjectCommand === "function");
assert(typeof DeleteSegmentCommand === "function");
assert(typeof EvaluateFeatureCommand === "function");
assert(typeof GetExperimentCommand === "function");
assert(typeof GetExperimentResultsCommand === "function");
assert(typeof GetFeatureCommand === "function");
assert(typeof GetLaunchCommand === "function");
assert(typeof GetProjectCommand === "function");
assert(typeof GetSegmentCommand === "function");
assert(typeof ListExperimentsCommand === "function");
assert(typeof ListFeaturesCommand === "function");
assert(typeof ListLaunchesCommand === "function");
assert(typeof ListProjectsCommand === "function");
assert(typeof ListSegmentReferencesCommand === "function");
assert(typeof ListSegmentsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutProjectEventsCommand === "function");
assert(typeof StartExperimentCommand === "function");
assert(typeof StartLaunchCommand === "function");
assert(typeof StopExperimentCommand === "function");
assert(typeof StopLaunchCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestSegmentPatternCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateExperimentCommand === "function");
assert(typeof UpdateFeatureCommand === "function");
assert(typeof UpdateLaunchCommand === "function");
assert(typeof UpdateProjectCommand === "function");
assert(typeof UpdateProjectDataDeliveryCommand === "function");
// enums
assert(typeof ChangeDirectionEnum === "object");
assert(typeof EventType === "object");
assert(typeof ExperimentBaseStat === "object");
assert(typeof ExperimentReportName === "object");
assert(typeof ExperimentResultRequestType === "object");
assert(typeof ExperimentResultResponseType === "object");
assert(typeof ExperimentStatus === "object");
assert(typeof ExperimentStopDesiredState === "object");
assert(typeof ExperimentType === "object");
assert(typeof FeatureEvaluationStrategy === "object");
assert(typeof FeatureStatus === "object");
assert(typeof LaunchStatus === "object");
assert(typeof LaunchStopDesiredState === "object");
assert(typeof LaunchType === "object");
assert(typeof ProjectStatus === "object");
assert(typeof SegmentReferenceResourceType === "object");
assert(typeof VariationValueType === "object");
// errors
assert(EvidentlyServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListExperiments === "function");
assert(typeof paginateListFeatures === "function");
assert(typeof paginateListLaunches === "function");
assert(typeof paginateListProjects === "function");
assert(typeof paginateListSegmentReferences === "function");
assert(typeof paginateListSegments === "function");
console.log(`Evidently index test passed.`);
