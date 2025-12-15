import {
  AccessDeniedException,
  AccessDeniedException$,
  Action,
  BadRequestException,
  BadRequestException$,
  BulkLoadIdNotFoundException,
  BulkLoadIdNotFoundException$,
  CancelGremlinQuery$,
  CancelGremlinQueryCommand,
  CancelGremlinQueryInput$,
  CancelGremlinQueryOutput$,
  CancelLoaderJob$,
  CancelLoaderJobCommand,
  CancelLoaderJobInput$,
  CancelLoaderJobOutput$,
  CancelMLDataProcessingJob$,
  CancelMLDataProcessingJobCommand,
  CancelMLDataProcessingJobInput$,
  CancelMLDataProcessingJobOutput$,
  CancelMLModelTrainingJob$,
  CancelMLModelTrainingJobCommand,
  CancelMLModelTrainingJobInput$,
  CancelMLModelTrainingJobOutput$,
  CancelMLModelTransformJob$,
  CancelMLModelTransformJobCommand,
  CancelMLModelTransformJobInput$,
  CancelMLModelTransformJobOutput$,
  CancelOpenCypherQuery$,
  CancelOpenCypherQueryCommand,
  CancelOpenCypherQueryInput$,
  CancelOpenCypherQueryOutput$,
  CancelledByUserException,
  CancelledByUserException$,
  ClientTimeoutException,
  ClientTimeoutException$,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConstraintViolationException,
  ConstraintViolationException$,
  CreateMLEndpoint$,
  CreateMLEndpointCommand,
  CreateMLEndpointInput$,
  CreateMLEndpointOutput$,
  CustomModelTrainingParameters$,
  CustomModelTransformParameters$,
  DeleteMLEndpoint$,
  DeleteMLEndpointCommand,
  DeleteMLEndpointInput$,
  DeleteMLEndpointOutput$,
  DeletePropertygraphStatistics$,
  DeletePropertygraphStatisticsCommand,
  DeletePropertygraphStatisticsOutput$,
  DeleteSparqlStatistics$,
  DeleteSparqlStatisticsCommand,
  DeleteSparqlStatisticsOutput$,
  DeleteStatisticsValueMap$,
  EdgeStructure$,
  Encoding,
  ExecuteFastReset$,
  ExecuteFastResetCommand,
  ExecuteFastResetInput$,
  ExecuteFastResetOutput$,
  ExecuteGremlinExplainQuery$,
  ExecuteGremlinExplainQueryCommand,
  ExecuteGremlinExplainQueryInput$,
  ExecuteGremlinExplainQueryOutput$,
  ExecuteGremlinProfileQuery$,
  ExecuteGremlinProfileQueryCommand,
  ExecuteGremlinProfileQueryInput$,
  ExecuteGremlinProfileQueryOutput$,
  ExecuteGremlinQuery$,
  ExecuteGremlinQueryCommand,
  ExecuteGremlinQueryInput$,
  ExecuteGremlinQueryOutput$,
  ExecuteOpenCypherExplainQuery$,
  ExecuteOpenCypherExplainQueryCommand,
  ExecuteOpenCypherExplainQueryInput$,
  ExecuteOpenCypherExplainQueryOutput$,
  ExecuteOpenCypherQuery$,
  ExecuteOpenCypherQueryCommand,
  ExecuteOpenCypherQueryInput$,
  ExecuteOpenCypherQueryOutput$,
  ExpiredStreamException,
  ExpiredStreamException$,
  FailureByQueryException,
  FailureByQueryException$,
  FastResetToken$,
  Format,
  GetEngineStatus$,
  GetEngineStatusCommand,
  GetEngineStatusOutput$,
  GetGremlinQueryStatus$,
  GetGremlinQueryStatusCommand,
  GetGremlinQueryStatusInput$,
  GetGremlinQueryStatusOutput$,
  GetLoaderJobStatus$,
  GetLoaderJobStatusCommand,
  GetLoaderJobStatusInput$,
  GetLoaderJobStatusOutput$,
  GetMLDataProcessingJob$,
  GetMLDataProcessingJobCommand,
  GetMLDataProcessingJobInput$,
  GetMLDataProcessingJobOutput$,
  GetMLEndpoint$,
  GetMLEndpointCommand,
  GetMLEndpointInput$,
  GetMLEndpointOutput$,
  GetMLModelTrainingJob$,
  GetMLModelTrainingJobCommand,
  GetMLModelTrainingJobInput$,
  GetMLModelTrainingJobOutput$,
  GetMLModelTransformJob$,
  GetMLModelTransformJobCommand,
  GetMLModelTransformJobInput$,
  GetMLModelTransformJobOutput$,
  GetOpenCypherQueryStatus$,
  GetOpenCypherQueryStatusCommand,
  GetOpenCypherQueryStatusInput$,
  GetOpenCypherQueryStatusOutput$,
  GetPropertygraphStatistics$,
  GetPropertygraphStatisticsCommand,
  GetPropertygraphStatisticsOutput$,
  GetPropertygraphStream$,
  GetPropertygraphStreamCommand,
  GetPropertygraphStreamInput$,
  GetPropertygraphStreamOutput$,
  GetPropertygraphSummary$,
  GetPropertygraphSummaryCommand,
  GetPropertygraphSummaryInput$,
  GetPropertygraphSummaryOutput$,
  GetRDFGraphSummary$,
  GetRDFGraphSummaryCommand,
  GetRDFGraphSummaryInput$,
  GetRDFGraphSummaryOutput$,
  GetSparqlStatistics$,
  GetSparqlStatisticsCommand,
  GetSparqlStatisticsOutput$,
  GetSparqlStream$,
  GetSparqlStreamCommand,
  GetSparqlStreamInput$,
  GetSparqlStreamOutput$,
  GraphSummaryType,
  GremlinQueryStatus$,
  GremlinQueryStatusAttributes$,
  IllegalArgumentException,
  IllegalArgumentException$,
  InternalFailureException,
  InternalFailureException$,
  InvalidArgumentException,
  InvalidArgumentException$,
  InvalidNumericDataException,
  InvalidNumericDataException$,
  InvalidParameterException,
  InvalidParameterException$,
  IteratorType,
  ListGremlinQueries$,
  ListGremlinQueriesCommand,
  ListGremlinQueriesInput$,
  ListGremlinQueriesOutput$,
  ListLoaderJobs$,
  ListLoaderJobsCommand,
  ListLoaderJobsInput$,
  ListLoaderJobsOutput$,
  ListMLDataProcessingJobs$,
  ListMLDataProcessingJobsCommand,
  ListMLDataProcessingJobsInput$,
  ListMLDataProcessingJobsOutput$,
  ListMLEndpoints$,
  ListMLEndpointsCommand,
  ListMLEndpointsInput$,
  ListMLEndpointsOutput$,
  ListMLModelTrainingJobs$,
  ListMLModelTrainingJobsCommand,
  ListMLModelTrainingJobsInput$,
  ListMLModelTrainingJobsOutput$,
  ListMLModelTransformJobs$,
  ListMLModelTransformJobsCommand,
  ListMLModelTransformJobsInput$,
  ListMLModelTransformJobsOutput$,
  ListOpenCypherQueries$,
  ListOpenCypherQueriesCommand,
  ListOpenCypherQueriesInput$,
  ListOpenCypherQueriesOutput$,
  LoadUrlAccessDeniedException,
  LoadUrlAccessDeniedException$,
  LoaderIdResult$,
  MLResourceNotFoundException,
  MLResourceNotFoundException$,
  MalformedQueryException,
  MalformedQueryException$,
  ManagePropertygraphStatistics$,
  ManagePropertygraphStatisticsCommand,
  ManagePropertygraphStatisticsInput$,
  ManagePropertygraphStatisticsOutput$,
  ManageSparqlStatistics$,
  ManageSparqlStatisticsCommand,
  ManageSparqlStatisticsInput$,
  ManageSparqlStatisticsOutput$,
  MemoryLimitExceededException,
  MemoryLimitExceededException$,
  MethodNotAllowedException,
  MethodNotAllowedException$,
  MissingParameterException,
  MissingParameterException$,
  MlConfigDefinition$,
  MlResourceDefinition$,
  Mode,
  Neptunedata,
  NeptunedataClient,
  NeptunedataServiceException,
  NodeStructure$,
  OpenCypherExplainMode,
  Parallelism,
  ParsingException,
  ParsingException$,
  PreconditionsFailedException,
  PreconditionsFailedException$,
  PropertygraphData$,
  PropertygraphRecord$,
  PropertygraphSummary$,
  PropertygraphSummaryValueMap$,
  QueryEvalStats$,
  QueryLanguageVersion$,
  QueryLimitExceededException,
  QueryLimitExceededException$,
  QueryLimitException,
  QueryLimitException$,
  QueryTooLargeException,
  QueryTooLargeException$,
  RDFGraphSummary$,
  RDFGraphSummaryValueMap$,
  ReadOnlyViolationException,
  ReadOnlyViolationException$,
  RefreshStatisticsIdMap$,
  S3BucketRegion,
  S3Exception,
  S3Exception$,
  ServerShutdownException,
  ServerShutdownException$,
  SparqlData$,
  SparqlRecord$,
  StartLoaderJob$,
  StartLoaderJobCommand,
  StartLoaderJobInput$,
  StartLoaderJobOutput$,
  StartMLDataProcessingJob$,
  StartMLDataProcessingJobCommand,
  StartMLDataProcessingJobInput$,
  StartMLDataProcessingJobOutput$,
  StartMLModelTrainingJob$,
  StartMLModelTrainingJobCommand,
  StartMLModelTrainingJobInput$,
  StartMLModelTrainingJobOutput$,
  StartMLModelTransformJob$,
  StartMLModelTransformJobCommand,
  StartMLModelTransformJobInput$,
  StartMLModelTransformJobOutput$,
  Statistics$,
  StatisticsAutoGenerationMode,
  StatisticsNotAvailableException,
  StatisticsNotAvailableException$,
  StatisticsSummary$,
  StreamRecordsNotFoundException,
  StreamRecordsNotFoundException$,
  SubjectStructure$,
  ThrottlingException,
  ThrottlingException$,
  TimeLimitExceededException,
  TimeLimitExceededException$,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NeptunedataClient === "function");
assert(typeof Neptunedata === "function");
// commands
assert(typeof CancelGremlinQueryCommand === "function");
assert(typeof CancelGremlinQuery$ === "object");
assert(typeof CancelLoaderJobCommand === "function");
assert(typeof CancelLoaderJob$ === "object");
assert(typeof CancelMLDataProcessingJobCommand === "function");
assert(typeof CancelMLDataProcessingJob$ === "object");
assert(typeof CancelMLModelTrainingJobCommand === "function");
assert(typeof CancelMLModelTrainingJob$ === "object");
assert(typeof CancelMLModelTransformJobCommand === "function");
assert(typeof CancelMLModelTransformJob$ === "object");
assert(typeof CancelOpenCypherQueryCommand === "function");
assert(typeof CancelOpenCypherQuery$ === "object");
assert(typeof CreateMLEndpointCommand === "function");
assert(typeof CreateMLEndpoint$ === "object");
assert(typeof DeleteMLEndpointCommand === "function");
assert(typeof DeleteMLEndpoint$ === "object");
assert(typeof DeletePropertygraphStatisticsCommand === "function");
assert(typeof DeletePropertygraphStatistics$ === "object");
assert(typeof DeleteSparqlStatisticsCommand === "function");
assert(typeof DeleteSparqlStatistics$ === "object");
assert(typeof ExecuteFastResetCommand === "function");
assert(typeof ExecuteFastReset$ === "object");
assert(typeof ExecuteGremlinExplainQueryCommand === "function");
assert(typeof ExecuteGremlinExplainQuery$ === "object");
assert(typeof ExecuteGremlinProfileQueryCommand === "function");
assert(typeof ExecuteGremlinProfileQuery$ === "object");
assert(typeof ExecuteGremlinQueryCommand === "function");
assert(typeof ExecuteGremlinQuery$ === "object");
assert(typeof ExecuteOpenCypherExplainQueryCommand === "function");
assert(typeof ExecuteOpenCypherExplainQuery$ === "object");
assert(typeof ExecuteOpenCypherQueryCommand === "function");
assert(typeof ExecuteOpenCypherQuery$ === "object");
assert(typeof GetEngineStatusCommand === "function");
assert(typeof GetEngineStatus$ === "object");
assert(typeof GetGremlinQueryStatusCommand === "function");
assert(typeof GetGremlinQueryStatus$ === "object");
assert(typeof GetLoaderJobStatusCommand === "function");
assert(typeof GetLoaderJobStatus$ === "object");
assert(typeof GetMLDataProcessingJobCommand === "function");
assert(typeof GetMLDataProcessingJob$ === "object");
assert(typeof GetMLEndpointCommand === "function");
assert(typeof GetMLEndpoint$ === "object");
assert(typeof GetMLModelTrainingJobCommand === "function");
assert(typeof GetMLModelTrainingJob$ === "object");
assert(typeof GetMLModelTransformJobCommand === "function");
assert(typeof GetMLModelTransformJob$ === "object");
assert(typeof GetOpenCypherQueryStatusCommand === "function");
assert(typeof GetOpenCypherQueryStatus$ === "object");
assert(typeof GetPropertygraphStatisticsCommand === "function");
assert(typeof GetPropertygraphStatistics$ === "object");
assert(typeof GetPropertygraphStreamCommand === "function");
assert(typeof GetPropertygraphStream$ === "object");
assert(typeof GetPropertygraphSummaryCommand === "function");
assert(typeof GetPropertygraphSummary$ === "object");
assert(typeof GetRDFGraphSummaryCommand === "function");
assert(typeof GetRDFGraphSummary$ === "object");
assert(typeof GetSparqlStatisticsCommand === "function");
assert(typeof GetSparqlStatistics$ === "object");
assert(typeof GetSparqlStreamCommand === "function");
assert(typeof GetSparqlStream$ === "object");
assert(typeof ListGremlinQueriesCommand === "function");
assert(typeof ListGremlinQueries$ === "object");
assert(typeof ListLoaderJobsCommand === "function");
assert(typeof ListLoaderJobs$ === "object");
assert(typeof ListMLDataProcessingJobsCommand === "function");
assert(typeof ListMLDataProcessingJobs$ === "object");
assert(typeof ListMLEndpointsCommand === "function");
assert(typeof ListMLEndpoints$ === "object");
assert(typeof ListMLModelTrainingJobsCommand === "function");
assert(typeof ListMLModelTrainingJobs$ === "object");
assert(typeof ListMLModelTransformJobsCommand === "function");
assert(typeof ListMLModelTransformJobs$ === "object");
assert(typeof ListOpenCypherQueriesCommand === "function");
assert(typeof ListOpenCypherQueries$ === "object");
assert(typeof ManagePropertygraphStatisticsCommand === "function");
assert(typeof ManagePropertygraphStatistics$ === "object");
assert(typeof ManageSparqlStatisticsCommand === "function");
assert(typeof ManageSparqlStatistics$ === "object");
assert(typeof StartLoaderJobCommand === "function");
assert(typeof StartLoaderJob$ === "object");
assert(typeof StartMLDataProcessingJobCommand === "function");
assert(typeof StartMLDataProcessingJob$ === "object");
assert(typeof StartMLModelTrainingJobCommand === "function");
assert(typeof StartMLModelTrainingJob$ === "object");
assert(typeof StartMLModelTransformJobCommand === "function");
assert(typeof StartMLModelTransformJob$ === "object");
// structural schemas
assert(typeof CancelGremlinQueryInput$ === "object");
assert(typeof CancelGremlinQueryOutput$ === "object");
assert(typeof CancelLoaderJobInput$ === "object");
assert(typeof CancelLoaderJobOutput$ === "object");
assert(typeof CancelMLDataProcessingJobInput$ === "object");
assert(typeof CancelMLDataProcessingJobOutput$ === "object");
assert(typeof CancelMLModelTrainingJobInput$ === "object");
assert(typeof CancelMLModelTrainingJobOutput$ === "object");
assert(typeof CancelMLModelTransformJobInput$ === "object");
assert(typeof CancelMLModelTransformJobOutput$ === "object");
assert(typeof CancelOpenCypherQueryInput$ === "object");
assert(typeof CancelOpenCypherQueryOutput$ === "object");
assert(typeof CreateMLEndpointInput$ === "object");
assert(typeof CreateMLEndpointOutput$ === "object");
assert(typeof CustomModelTrainingParameters$ === "object");
assert(typeof CustomModelTransformParameters$ === "object");
assert(typeof DeleteMLEndpointInput$ === "object");
assert(typeof DeleteMLEndpointOutput$ === "object");
assert(typeof DeletePropertygraphStatisticsOutput$ === "object");
assert(typeof DeleteSparqlStatisticsOutput$ === "object");
assert(typeof DeleteStatisticsValueMap$ === "object");
assert(typeof EdgeStructure$ === "object");
assert(typeof ExecuteFastResetInput$ === "object");
assert(typeof ExecuteFastResetOutput$ === "object");
assert(typeof ExecuteGremlinExplainQueryInput$ === "object");
assert(typeof ExecuteGremlinExplainQueryOutput$ === "object");
assert(typeof ExecuteGremlinProfileQueryInput$ === "object");
assert(typeof ExecuteGremlinProfileQueryOutput$ === "object");
assert(typeof ExecuteGremlinQueryInput$ === "object");
assert(typeof ExecuteGremlinQueryOutput$ === "object");
assert(typeof ExecuteOpenCypherExplainQueryInput$ === "object");
assert(typeof ExecuteOpenCypherExplainQueryOutput$ === "object");
assert(typeof ExecuteOpenCypherQueryInput$ === "object");
assert(typeof ExecuteOpenCypherQueryOutput$ === "object");
assert(typeof FastResetToken$ === "object");
assert(typeof GetEngineStatusOutput$ === "object");
assert(typeof GetGremlinQueryStatusInput$ === "object");
assert(typeof GetGremlinQueryStatusOutput$ === "object");
assert(typeof GetLoaderJobStatusInput$ === "object");
assert(typeof GetLoaderJobStatusOutput$ === "object");
assert(typeof GetMLDataProcessingJobInput$ === "object");
assert(typeof GetMLDataProcessingJobOutput$ === "object");
assert(typeof GetMLEndpointInput$ === "object");
assert(typeof GetMLEndpointOutput$ === "object");
assert(typeof GetMLModelTrainingJobInput$ === "object");
assert(typeof GetMLModelTrainingJobOutput$ === "object");
assert(typeof GetMLModelTransformJobInput$ === "object");
assert(typeof GetMLModelTransformJobOutput$ === "object");
assert(typeof GetOpenCypherQueryStatusInput$ === "object");
assert(typeof GetOpenCypherQueryStatusOutput$ === "object");
assert(typeof GetPropertygraphStatisticsOutput$ === "object");
assert(typeof GetPropertygraphStreamInput$ === "object");
assert(typeof GetPropertygraphStreamOutput$ === "object");
assert(typeof GetPropertygraphSummaryInput$ === "object");
assert(typeof GetPropertygraphSummaryOutput$ === "object");
assert(typeof GetRDFGraphSummaryInput$ === "object");
assert(typeof GetRDFGraphSummaryOutput$ === "object");
assert(typeof GetSparqlStatisticsOutput$ === "object");
assert(typeof GetSparqlStreamInput$ === "object");
assert(typeof GetSparqlStreamOutput$ === "object");
assert(typeof GremlinQueryStatus$ === "object");
assert(typeof GremlinQueryStatusAttributes$ === "object");
assert(typeof ListGremlinQueriesInput$ === "object");
assert(typeof ListGremlinQueriesOutput$ === "object");
assert(typeof ListLoaderJobsInput$ === "object");
assert(typeof ListLoaderJobsOutput$ === "object");
assert(typeof ListMLDataProcessingJobsInput$ === "object");
assert(typeof ListMLDataProcessingJobsOutput$ === "object");
assert(typeof ListMLEndpointsInput$ === "object");
assert(typeof ListMLEndpointsOutput$ === "object");
assert(typeof ListMLModelTrainingJobsInput$ === "object");
assert(typeof ListMLModelTrainingJobsOutput$ === "object");
assert(typeof ListMLModelTransformJobsInput$ === "object");
assert(typeof ListMLModelTransformJobsOutput$ === "object");
assert(typeof ListOpenCypherQueriesInput$ === "object");
assert(typeof ListOpenCypherQueriesOutput$ === "object");
assert(typeof LoaderIdResult$ === "object");
assert(typeof ManagePropertygraphStatisticsInput$ === "object");
assert(typeof ManagePropertygraphStatisticsOutput$ === "object");
assert(typeof ManageSparqlStatisticsInput$ === "object");
assert(typeof ManageSparqlStatisticsOutput$ === "object");
assert(typeof MlConfigDefinition$ === "object");
assert(typeof MlResourceDefinition$ === "object");
assert(typeof NodeStructure$ === "object");
assert(typeof PropertygraphData$ === "object");
assert(typeof PropertygraphRecord$ === "object");
assert(typeof PropertygraphSummary$ === "object");
assert(typeof PropertygraphSummaryValueMap$ === "object");
assert(typeof QueryEvalStats$ === "object");
assert(typeof QueryLanguageVersion$ === "object");
assert(typeof RDFGraphSummary$ === "object");
assert(typeof RDFGraphSummaryValueMap$ === "object");
assert(typeof RefreshStatisticsIdMap$ === "object");
assert(typeof SparqlData$ === "object");
assert(typeof SparqlRecord$ === "object");
assert(typeof StartLoaderJobInput$ === "object");
assert(typeof StartLoaderJobOutput$ === "object");
assert(typeof StartMLDataProcessingJobInput$ === "object");
assert(typeof StartMLDataProcessingJobOutput$ === "object");
assert(typeof StartMLModelTrainingJobInput$ === "object");
assert(typeof StartMLModelTrainingJobOutput$ === "object");
assert(typeof StartMLModelTransformJobInput$ === "object");
assert(typeof StartMLModelTransformJobOutput$ === "object");
assert(typeof Statistics$ === "object");
assert(typeof StatisticsSummary$ === "object");
assert(typeof SubjectStructure$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof NeptunedataServiceException);
assert(typeof BadRequestException$ === "object");
assert(BulkLoadIdNotFoundException.prototype instanceof NeptunedataServiceException);
assert(typeof BulkLoadIdNotFoundException$ === "object");
assert(CancelledByUserException.prototype instanceof NeptunedataServiceException);
assert(typeof CancelledByUserException$ === "object");
assert(ClientTimeoutException.prototype instanceof NeptunedataServiceException);
assert(typeof ClientTimeoutException$ === "object");
assert(ConcurrentModificationException.prototype instanceof NeptunedataServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConstraintViolationException.prototype instanceof NeptunedataServiceException);
assert(typeof ConstraintViolationException$ === "object");
assert(ExpiredStreamException.prototype instanceof NeptunedataServiceException);
assert(typeof ExpiredStreamException$ === "object");
assert(FailureByQueryException.prototype instanceof NeptunedataServiceException);
assert(typeof FailureByQueryException$ === "object");
assert(IllegalArgumentException.prototype instanceof NeptunedataServiceException);
assert(typeof IllegalArgumentException$ === "object");
assert(InternalFailureException.prototype instanceof NeptunedataServiceException);
assert(typeof InternalFailureException$ === "object");
assert(InvalidArgumentException.prototype instanceof NeptunedataServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(InvalidNumericDataException.prototype instanceof NeptunedataServiceException);
assert(typeof InvalidNumericDataException$ === "object");
assert(InvalidParameterException.prototype instanceof NeptunedataServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(LoadUrlAccessDeniedException.prototype instanceof NeptunedataServiceException);
assert(typeof LoadUrlAccessDeniedException$ === "object");
assert(MalformedQueryException.prototype instanceof NeptunedataServiceException);
assert(typeof MalformedQueryException$ === "object");
assert(MemoryLimitExceededException.prototype instanceof NeptunedataServiceException);
assert(typeof MemoryLimitExceededException$ === "object");
assert(MethodNotAllowedException.prototype instanceof NeptunedataServiceException);
assert(typeof MethodNotAllowedException$ === "object");
assert(MissingParameterException.prototype instanceof NeptunedataServiceException);
assert(typeof MissingParameterException$ === "object");
assert(MLResourceNotFoundException.prototype instanceof NeptunedataServiceException);
assert(typeof MLResourceNotFoundException$ === "object");
assert(ParsingException.prototype instanceof NeptunedataServiceException);
assert(typeof ParsingException$ === "object");
assert(PreconditionsFailedException.prototype instanceof NeptunedataServiceException);
assert(typeof PreconditionsFailedException$ === "object");
assert(QueryLimitExceededException.prototype instanceof NeptunedataServiceException);
assert(typeof QueryLimitExceededException$ === "object");
assert(QueryLimitException.prototype instanceof NeptunedataServiceException);
assert(typeof QueryLimitException$ === "object");
assert(QueryTooLargeException.prototype instanceof NeptunedataServiceException);
assert(typeof QueryTooLargeException$ === "object");
assert(ReadOnlyViolationException.prototype instanceof NeptunedataServiceException);
assert(typeof ReadOnlyViolationException$ === "object");
assert(S3Exception.prototype instanceof NeptunedataServiceException);
assert(typeof S3Exception$ === "object");
assert(ServerShutdownException.prototype instanceof NeptunedataServiceException);
assert(typeof ServerShutdownException$ === "object");
assert(StatisticsNotAvailableException.prototype instanceof NeptunedataServiceException);
assert(typeof StatisticsNotAvailableException$ === "object");
assert(StreamRecordsNotFoundException.prototype instanceof NeptunedataServiceException);
assert(typeof StreamRecordsNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof NeptunedataServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TimeLimitExceededException.prototype instanceof NeptunedataServiceException);
assert(typeof TimeLimitExceededException$ === "object");
assert(TooManyRequestsException.prototype instanceof NeptunedataServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnsupportedOperationException.prototype instanceof NeptunedataServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(NeptunedataServiceException.prototype instanceof Error);
console.log(`Neptunedata index test passed.`);
