import {
  AccessDeniedException,
  Action,
  BadRequestException,
  BulkLoadIdNotFoundException,
  CancelGremlinQueryCommand,
  CancelLoaderJobCommand,
  CancelMLDataProcessingJobCommand,
  CancelMLModelTrainingJobCommand,
  CancelMLModelTransformJobCommand,
  CancelOpenCypherQueryCommand,
  CancelledByUserException,
  ClientTimeoutException,
  ConcurrentModificationException,
  ConstraintViolationException,
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
  ExpiredStreamException,
  FailureByQueryException,
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
  IllegalArgumentException,
  InternalFailureException,
  InvalidArgumentException,
  InvalidNumericDataException,
  InvalidParameterException,
  IteratorType,
  ListGremlinQueriesCommand,
  ListLoaderJobsCommand,
  ListMLDataProcessingJobsCommand,
  ListMLEndpointsCommand,
  ListMLModelTrainingJobsCommand,
  ListMLModelTransformJobsCommand,
  ListOpenCypherQueriesCommand,
  LoadUrlAccessDeniedException,
  MLResourceNotFoundException,
  MalformedQueryException,
  ManagePropertygraphStatisticsCommand,
  ManageSparqlStatisticsCommand,
  MemoryLimitExceededException,
  MethodNotAllowedException,
  MissingParameterException,
  Mode,
  Neptunedata,
  NeptunedataClient,
  NeptunedataServiceException,
  OpenCypherExplainMode,
  Parallelism,
  ParsingException,
  PreconditionsFailedException,
  QueryLimitExceededException,
  QueryLimitException,
  QueryTooLargeException,
  ReadOnlyViolationException,
  S3BucketRegion,
  S3Exception,
  ServerShutdownException,
  StartLoaderJobCommand,
  StartMLDataProcessingJobCommand,
  StartMLModelTrainingJobCommand,
  StartMLModelTransformJobCommand,
  StatisticsAutoGenerationMode,
  StatisticsNotAvailableException,
  StreamRecordsNotFoundException,
  ThrottlingException,
  TimeLimitExceededException,
  TooManyRequestsException,
  UnsupportedOperationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NeptunedataClient === "function");
assert(typeof Neptunedata === "function");
// commands
assert(typeof CancelGremlinQueryCommand === "function");
assert(typeof CancelLoaderJobCommand === "function");
assert(typeof CancelMLDataProcessingJobCommand === "function");
assert(typeof CancelMLModelTrainingJobCommand === "function");
assert(typeof CancelMLModelTransformJobCommand === "function");
assert(typeof CancelOpenCypherQueryCommand === "function");
assert(typeof CreateMLEndpointCommand === "function");
assert(typeof DeleteMLEndpointCommand === "function");
assert(typeof DeletePropertygraphStatisticsCommand === "function");
assert(typeof DeleteSparqlStatisticsCommand === "function");
assert(typeof ExecuteFastResetCommand === "function");
assert(typeof ExecuteGremlinExplainQueryCommand === "function");
assert(typeof ExecuteGremlinProfileQueryCommand === "function");
assert(typeof ExecuteGremlinQueryCommand === "function");
assert(typeof ExecuteOpenCypherExplainQueryCommand === "function");
assert(typeof ExecuteOpenCypherQueryCommand === "function");
assert(typeof GetEngineStatusCommand === "function");
assert(typeof GetGremlinQueryStatusCommand === "function");
assert(typeof GetLoaderJobStatusCommand === "function");
assert(typeof GetMLDataProcessingJobCommand === "function");
assert(typeof GetMLEndpointCommand === "function");
assert(typeof GetMLModelTrainingJobCommand === "function");
assert(typeof GetMLModelTransformJobCommand === "function");
assert(typeof GetOpenCypherQueryStatusCommand === "function");
assert(typeof GetPropertygraphStatisticsCommand === "function");
assert(typeof GetPropertygraphStreamCommand === "function");
assert(typeof GetPropertygraphSummaryCommand === "function");
assert(typeof GetRDFGraphSummaryCommand === "function");
assert(typeof GetSparqlStatisticsCommand === "function");
assert(typeof GetSparqlStreamCommand === "function");
assert(typeof ListGremlinQueriesCommand === "function");
assert(typeof ListLoaderJobsCommand === "function");
assert(typeof ListMLDataProcessingJobsCommand === "function");
assert(typeof ListMLEndpointsCommand === "function");
assert(typeof ListMLModelTrainingJobsCommand === "function");
assert(typeof ListMLModelTransformJobsCommand === "function");
assert(typeof ListOpenCypherQueriesCommand === "function");
assert(typeof ManagePropertygraphStatisticsCommand === "function");
assert(typeof ManageSparqlStatisticsCommand === "function");
assert(typeof StartLoaderJobCommand === "function");
assert(typeof StartMLDataProcessingJobCommand === "function");
assert(typeof StartMLModelTrainingJobCommand === "function");
assert(typeof StartMLModelTransformJobCommand === "function");
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
assert(AccessDeniedException.prototype instanceof NeptunedataServiceException);
assert(BadRequestException.prototype instanceof NeptunedataServiceException);
assert(BulkLoadIdNotFoundException.prototype instanceof NeptunedataServiceException);
assert(CancelledByUserException.prototype instanceof NeptunedataServiceException);
assert(ClientTimeoutException.prototype instanceof NeptunedataServiceException);
assert(ConcurrentModificationException.prototype instanceof NeptunedataServiceException);
assert(ConstraintViolationException.prototype instanceof NeptunedataServiceException);
assert(ExpiredStreamException.prototype instanceof NeptunedataServiceException);
assert(FailureByQueryException.prototype instanceof NeptunedataServiceException);
assert(IllegalArgumentException.prototype instanceof NeptunedataServiceException);
assert(InternalFailureException.prototype instanceof NeptunedataServiceException);
assert(InvalidArgumentException.prototype instanceof NeptunedataServiceException);
assert(InvalidNumericDataException.prototype instanceof NeptunedataServiceException);
assert(InvalidParameterException.prototype instanceof NeptunedataServiceException);
assert(LoadUrlAccessDeniedException.prototype instanceof NeptunedataServiceException);
assert(MalformedQueryException.prototype instanceof NeptunedataServiceException);
assert(MemoryLimitExceededException.prototype instanceof NeptunedataServiceException);
assert(MethodNotAllowedException.prototype instanceof NeptunedataServiceException);
assert(MissingParameterException.prototype instanceof NeptunedataServiceException);
assert(MLResourceNotFoundException.prototype instanceof NeptunedataServiceException);
assert(ParsingException.prototype instanceof NeptunedataServiceException);
assert(PreconditionsFailedException.prototype instanceof NeptunedataServiceException);
assert(QueryLimitExceededException.prototype instanceof NeptunedataServiceException);
assert(QueryLimitException.prototype instanceof NeptunedataServiceException);
assert(QueryTooLargeException.prototype instanceof NeptunedataServiceException);
assert(ReadOnlyViolationException.prototype instanceof NeptunedataServiceException);
assert(S3Exception.prototype instanceof NeptunedataServiceException);
assert(ServerShutdownException.prototype instanceof NeptunedataServiceException);
assert(StatisticsNotAvailableException.prototype instanceof NeptunedataServiceException);
assert(StreamRecordsNotFoundException.prototype instanceof NeptunedataServiceException);
assert(ThrottlingException.prototype instanceof NeptunedataServiceException);
assert(TimeLimitExceededException.prototype instanceof NeptunedataServiceException);
assert(TooManyRequestsException.prototype instanceof NeptunedataServiceException);
assert(UnsupportedOperationException.prototype instanceof NeptunedataServiceException);
assert(NeptunedataServiceException.prototype instanceof Error);
console.log(`Neptunedata index test passed.`);
