import {
  Action,
  CancelGremlinQueryCommand,
  CancelLoaderJobCommand,
  CancelMLDataProcessingJobCommand,
  CancelMLModelTrainingJobCommand,
  CancelMLModelTransformJobCommand,
  CancelOpenCypherQueryCommand,
  CreateMLEndpointCommand,
  DeleteMLEndpointCommand,
  DeletePropertygraphStatisticsCommand,
  DeleteSparqlStatisticsCommand,
  Encoding,
  ExecuteFastResetCommand,
  ExecuteGremlinExplainQueryCommand,
  ExecuteGremlinProfileQueryCommand,
  ExecuteGremlinQueryCommand,
  ExecuteOpenCypherExplainQueryCommand,
  ExecuteOpenCypherQueryCommand,
  Format,
  GetEngineStatusCommand,
  GetGremlinQueryStatusCommand,
  GetLoaderJobStatusCommand,
  GetMLDataProcessingJobCommand,
  GetMLEndpointCommand,
  GetMLModelTrainingJobCommand,
  GetMLModelTransformJobCommand,
  GetOpenCypherQueryStatusCommand,
  GetPropertygraphStatisticsCommand,
  GetPropertygraphStreamCommand,
  GetPropertygraphSummaryCommand,
  GetRDFGraphSummaryCommand,
  GetSparqlStatisticsCommand,
  GetSparqlStreamCommand,
  GraphSummaryType,
  IteratorType,
  ListGremlinQueriesCommand,
  ListLoaderJobsCommand,
  ListMLDataProcessingJobsCommand,
  ListMLEndpointsCommand,
  ListMLModelTrainingJobsCommand,
  ListMLModelTransformJobsCommand,
  ListOpenCypherQueriesCommand,
  ManagePropertygraphStatisticsCommand,
  ManageSparqlStatisticsCommand,
  Mode,
  Neptunedata,
  NeptunedataClient,
  NeptunedataServiceException,
  OpenCypherExplainMode,
  Parallelism,
  S3BucketRegion,
  StartLoaderJobCommand,
  StartMLDataProcessingJobCommand,
  StartMLModelTrainingJobCommand,
  StartMLModelTransformJobCommand,
  StatisticsAutoGenerationMode,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NeptunedataClient === "function")
assert(typeof Neptunedata === "function")
// commands
assert(typeof CancelGremlinQueryCommand === "function")
assert(typeof CancelLoaderJobCommand === "function")
assert(typeof CancelMLDataProcessingJobCommand === "function")
assert(typeof CancelMLModelTrainingJobCommand === "function")
assert(typeof CancelMLModelTransformJobCommand === "function")
assert(typeof CancelOpenCypherQueryCommand === "function")
assert(typeof CreateMLEndpointCommand === "function")
assert(typeof DeleteMLEndpointCommand === "function")
assert(typeof DeletePropertygraphStatisticsCommand === "function")
assert(typeof DeleteSparqlStatisticsCommand === "function")
assert(typeof ExecuteFastResetCommand === "function")
assert(typeof ExecuteGremlinExplainQueryCommand === "function")
assert(typeof ExecuteGremlinProfileQueryCommand === "function")
assert(typeof ExecuteGremlinQueryCommand === "function")
assert(typeof ExecuteOpenCypherExplainQueryCommand === "function")
assert(typeof ExecuteOpenCypherQueryCommand === "function")
assert(typeof GetEngineStatusCommand === "function")
assert(typeof GetGremlinQueryStatusCommand === "function")
assert(typeof GetLoaderJobStatusCommand === "function")
assert(typeof GetMLDataProcessingJobCommand === "function")
assert(typeof GetMLEndpointCommand === "function")
assert(typeof GetMLModelTrainingJobCommand === "function")
assert(typeof GetMLModelTransformJobCommand === "function")
assert(typeof GetOpenCypherQueryStatusCommand === "function")
assert(typeof GetPropertygraphStatisticsCommand === "function")
assert(typeof GetPropertygraphStreamCommand === "function")
assert(typeof GetPropertygraphSummaryCommand === "function")
assert(typeof GetRDFGraphSummaryCommand === "function")
assert(typeof GetSparqlStatisticsCommand === "function")
assert(typeof GetSparqlStreamCommand === "function")
assert(typeof ListGremlinQueriesCommand === "function")
assert(typeof ListLoaderJobsCommand === "function")
assert(typeof ListMLDataProcessingJobsCommand === "function")
assert(typeof ListMLEndpointsCommand === "function")
assert(typeof ListMLModelTrainingJobsCommand === "function")
assert(typeof ListMLModelTransformJobsCommand === "function")
assert(typeof ListOpenCypherQueriesCommand === "function")
assert(typeof ManagePropertygraphStatisticsCommand === "function")
assert(typeof ManageSparqlStatisticsCommand === "function")
assert(typeof StartLoaderJobCommand === "function")
assert(typeof StartMLDataProcessingJobCommand === "function")
assert(typeof StartMLModelTrainingJobCommand === "function")
assert(typeof StartMLModelTransformJobCommand === "function")
// enums
assert(typeof Action === "object");
assert(typeof Encoding === "object");
assert(typeof Format === "object");
assert(typeof GraphSummaryType === "object");
assert(typeof IteratorType === "object");
assert(typeof Mode === "object");
assert(typeof OpenCypherExplainMode === "object");
assert(typeof Parallelism === "object");
assert(typeof S3BucketRegion === "object");
assert(typeof StatisticsAutoGenerationMode === "object");
// errors
assert(NeptunedataServiceException.prototype instanceof Error)
console.log(`Neptunedata index test passed.`);
