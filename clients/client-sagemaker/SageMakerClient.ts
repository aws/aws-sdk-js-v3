import {
  AddTagsInput,
  AddTagsOutput,
  AssociateTrialComponentRequest,
  AssociateTrialComponentResponse,
  CreateAlgorithmInput,
  CreateAlgorithmOutput,
  CreateAppRequest,
  CreateAppResponse,
  CreateAutoMLJobRequest,
  CreateAutoMLJobResponse,
  CreateCodeRepositoryInput,
  CreateCodeRepositoryOutput,
  CreateCompilationJobRequest,
  CreateCompilationJobResponse,
  CreateDomainRequest,
  CreateDomainResponse,
  CreateEndpointConfigInput,
  CreateEndpointConfigOutput,
  CreateEndpointInput,
  CreateEndpointOutput,
  CreateExperimentRequest,
  CreateExperimentResponse,
  CreateFlowDefinitionRequest,
  CreateFlowDefinitionResponse,
  CreateHumanTaskUiRequest,
  CreateHumanTaskUiResponse,
  CreateHyperParameterTuningJobRequest,
  CreateHyperParameterTuningJobResponse,
  CreateLabelingJobRequest,
  CreateLabelingJobResponse,
  CreateModelInput,
  CreateModelOutput,
  CreateModelPackageInput,
  CreateModelPackageOutput,
  CreateMonitoringScheduleRequest,
  CreateMonitoringScheduleResponse,
  CreateNotebookInstanceInput,
  CreateNotebookInstanceLifecycleConfigInput,
  CreateNotebookInstanceLifecycleConfigOutput,
  CreateNotebookInstanceOutput,
  CreatePresignedDomainUrlRequest,
  CreatePresignedDomainUrlResponse,
  CreatePresignedNotebookInstanceUrlInput,
  CreatePresignedNotebookInstanceUrlOutput,
  CreateProcessingJobRequest,
  CreateProcessingJobResponse,
  CreateTrainingJobRequest,
  CreateTrainingJobResponse,
  CreateTransformJobRequest,
  CreateTransformJobResponse,
  CreateTrialComponentRequest,
  CreateTrialComponentResponse,
  CreateTrialRequest,
  CreateTrialResponse,
  CreateUserProfileRequest,
  CreateUserProfileResponse,
  CreateWorkteamRequest,
  CreateWorkteamResponse,
  DeleteAlgorithmInput,
  DeleteAppRequest,
  DeleteCodeRepositoryInput,
  DeleteDomainRequest,
  DeleteEndpointConfigInput,
  DeleteEndpointInput,
  DeleteExperimentRequest,
  DeleteExperimentResponse,
  DeleteFlowDefinitionRequest,
  DeleteFlowDefinitionResponse,
  DeleteModelInput,
  DeleteModelPackageInput,
  DeleteMonitoringScheduleRequest,
  DeleteNotebookInstanceInput,
  DeleteNotebookInstanceLifecycleConfigInput,
  DeleteTagsInput,
  DeleteTagsOutput,
  DeleteTrialComponentRequest,
  DeleteTrialComponentResponse,
  DeleteTrialRequest,
  DeleteTrialResponse,
  DeleteUserProfileRequest,
  DeleteWorkteamRequest,
  DeleteWorkteamResponse,
  DescribeAlgorithmInput,
  DescribeAlgorithmOutput,
  DescribeAppRequest,
  DescribeAppResponse,
  DescribeAutoMLJobRequest,
  DescribeAutoMLJobResponse,
  DescribeCodeRepositoryInput,
  DescribeCodeRepositoryOutput,
  DescribeCompilationJobRequest,
  DescribeCompilationJobResponse,
  DescribeDomainRequest,
  DescribeDomainResponse,
  DescribeEndpointConfigInput,
  DescribeEndpointConfigOutput,
  DescribeEndpointInput,
  DescribeEndpointOutput,
  DescribeExperimentRequest,
  DescribeExperimentResponse,
  DescribeFlowDefinitionRequest,
  DescribeFlowDefinitionResponse,
  DescribeHumanTaskUiRequest,
  DescribeHumanTaskUiResponse,
  DescribeHyperParameterTuningJobRequest,
  DescribeHyperParameterTuningJobResponse,
  DescribeLabelingJobRequest,
  DescribeLabelingJobResponse,
  DescribeModelInput,
  DescribeModelOutput,
  DescribeModelPackageInput,
  DescribeModelPackageOutput,
  DescribeMonitoringScheduleRequest,
  DescribeMonitoringScheduleResponse,
  DescribeNotebookInstanceInput,
  DescribeNotebookInstanceLifecycleConfigInput,
  DescribeNotebookInstanceLifecycleConfigOutput,
  DescribeNotebookInstanceOutput,
  DescribeProcessingJobRequest,
  DescribeProcessingJobResponse,
  DescribeSubscribedWorkteamRequest,
  DescribeSubscribedWorkteamResponse,
  DescribeTrainingJobRequest,
  DescribeTrainingJobResponse,
  DescribeTransformJobRequest,
  DescribeTransformJobResponse,
  DescribeTrialComponentRequest,
  DescribeTrialComponentResponse,
  DescribeTrialRequest,
  DescribeTrialResponse,
  DescribeUserProfileRequest,
  DescribeUserProfileResponse,
  DescribeWorkteamRequest,
  DescribeWorkteamResponse,
  DisassociateTrialComponentRequest,
  DisassociateTrialComponentResponse,
  GetSearchSuggestionsRequest,
  GetSearchSuggestionsResponse,
  ListAlgorithmsInput,
  ListAlgorithmsOutput,
  ListAppsRequest,
  ListAppsResponse,
  ListAutoMLJobsRequest,
  ListAutoMLJobsResponse,
  ListCandidatesForAutoMLJobRequest,
  ListCandidatesForAutoMLJobResponse,
  ListCodeRepositoriesInput,
  ListCodeRepositoriesOutput,
  ListCompilationJobsRequest,
  ListCompilationJobsResponse,
  ListDomainsRequest,
  ListDomainsResponse,
  ListEndpointConfigsInput,
  ListEndpointConfigsOutput,
  ListEndpointsInput,
  ListEndpointsOutput,
  ListExperimentsRequest,
  ListExperimentsResponse,
  ListFlowDefinitionsRequest,
  ListFlowDefinitionsResponse,
  ListHumanTaskUisRequest,
  ListHumanTaskUisResponse,
  ListHyperParameterTuningJobsRequest,
  ListHyperParameterTuningJobsResponse,
  ListLabelingJobsForWorkteamRequest,
  ListLabelingJobsForWorkteamResponse,
  ListLabelingJobsRequest,
  ListLabelingJobsResponse,
  ListModelPackagesInput,
  ListModelPackagesOutput,
  ListModelsInput,
  ListModelsOutput,
  ListMonitoringExecutionsRequest,
  ListMonitoringExecutionsResponse,
  ListMonitoringSchedulesRequest,
  ListMonitoringSchedulesResponse,
  ListNotebookInstanceLifecycleConfigsInput,
  ListNotebookInstanceLifecycleConfigsOutput,
  ListNotebookInstancesInput,
  ListNotebookInstancesOutput,
  ListProcessingJobsRequest,
  ListProcessingJobsResponse,
  ListSubscribedWorkteamsRequest,
  ListSubscribedWorkteamsResponse,
  ListTagsInput,
  ListTagsOutput,
  ListTrainingJobsForHyperParameterTuningJobRequest,
  ListTrainingJobsForHyperParameterTuningJobResponse,
  ListTrainingJobsRequest,
  ListTrainingJobsResponse,
  ListTransformJobsRequest,
  ListTransformJobsResponse,
  ListTrialComponentsRequest,
  ListTrialComponentsResponse,
  ListTrialsRequest,
  ListTrialsResponse,
  ListUserProfilesRequest,
  ListUserProfilesResponse,
  ListWorkteamsRequest,
  ListWorkteamsResponse,
  RenderUiTemplateRequest,
  RenderUiTemplateResponse,
  SearchRequest,
  SearchResponse,
  StartMonitoringScheduleRequest,
  StartNotebookInstanceInput,
  StopAutoMLJobRequest,
  StopCompilationJobRequest,
  StopHyperParameterTuningJobRequest,
  StopLabelingJobRequest,
  StopMonitoringScheduleRequest,
  StopNotebookInstanceInput,
  StopProcessingJobRequest,
  StopTrainingJobRequest,
  StopTransformJobRequest,
  UpdateCodeRepositoryInput,
  UpdateCodeRepositoryOutput,
  UpdateDomainRequest,
  UpdateDomainResponse,
  UpdateEndpointInput,
  UpdateEndpointOutput,
  UpdateEndpointWeightsAndCapacitiesInput,
  UpdateEndpointWeightsAndCapacitiesOutput,
  UpdateExperimentRequest,
  UpdateExperimentResponse,
  UpdateMonitoringScheduleRequest,
  UpdateMonitoringScheduleResponse,
  UpdateNotebookInstanceInput,
  UpdateNotebookInstanceLifecycleConfigInput,
  UpdateNotebookInstanceLifecycleConfigOutput,
  UpdateNotebookInstanceOutput,
  UpdateTrialComponentRequest,
  UpdateTrialComponentResponse,
  UpdateTrialRequest,
  UpdateTrialResponse,
  UpdateUserProfileRequest,
  UpdateUserProfileResponse,
  UpdateWorkteamRequest,
  UpdateWorkteamResponse,
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddTagsInput
  | AssociateTrialComponentRequest
  | CreateAlgorithmInput
  | CreateAppRequest
  | CreateAutoMLJobRequest
  | CreateCodeRepositoryInput
  | CreateCompilationJobRequest
  | CreateDomainRequest
  | CreateEndpointConfigInput
  | CreateEndpointInput
  | CreateExperimentRequest
  | CreateFlowDefinitionRequest
  | CreateHumanTaskUiRequest
  | CreateHyperParameterTuningJobRequest
  | CreateLabelingJobRequest
  | CreateModelInput
  | CreateModelPackageInput
  | CreateMonitoringScheduleRequest
  | CreateNotebookInstanceInput
  | CreateNotebookInstanceLifecycleConfigInput
  | CreatePresignedDomainUrlRequest
  | CreatePresignedNotebookInstanceUrlInput
  | CreateProcessingJobRequest
  | CreateTrainingJobRequest
  | CreateTransformJobRequest
  | CreateTrialComponentRequest
  | CreateTrialRequest
  | CreateUserProfileRequest
  | CreateWorkteamRequest
  | DeleteAlgorithmInput
  | DeleteAppRequest
  | DeleteCodeRepositoryInput
  | DeleteDomainRequest
  | DeleteEndpointConfigInput
  | DeleteEndpointInput
  | DeleteExperimentRequest
  | DeleteFlowDefinitionRequest
  | DeleteModelInput
  | DeleteModelPackageInput
  | DeleteMonitoringScheduleRequest
  | DeleteNotebookInstanceInput
  | DeleteNotebookInstanceLifecycleConfigInput
  | DeleteTagsInput
  | DeleteTrialComponentRequest
  | DeleteTrialRequest
  | DeleteUserProfileRequest
  | DeleteWorkteamRequest
  | DescribeAlgorithmInput
  | DescribeAppRequest
  | DescribeAutoMLJobRequest
  | DescribeCodeRepositoryInput
  | DescribeCompilationJobRequest
  | DescribeDomainRequest
  | DescribeEndpointConfigInput
  | DescribeEndpointInput
  | DescribeExperimentRequest
  | DescribeFlowDefinitionRequest
  | DescribeHumanTaskUiRequest
  | DescribeHyperParameterTuningJobRequest
  | DescribeLabelingJobRequest
  | DescribeModelInput
  | DescribeModelPackageInput
  | DescribeMonitoringScheduleRequest
  | DescribeNotebookInstanceInput
  | DescribeNotebookInstanceLifecycleConfigInput
  | DescribeProcessingJobRequest
  | DescribeSubscribedWorkteamRequest
  | DescribeTrainingJobRequest
  | DescribeTransformJobRequest
  | DescribeTrialComponentRequest
  | DescribeTrialRequest
  | DescribeUserProfileRequest
  | DescribeWorkteamRequest
  | DisassociateTrialComponentRequest
  | GetSearchSuggestionsRequest
  | ListAlgorithmsInput
  | ListAppsRequest
  | ListAutoMLJobsRequest
  | ListCandidatesForAutoMLJobRequest
  | ListCodeRepositoriesInput
  | ListCompilationJobsRequest
  | ListDomainsRequest
  | ListEndpointConfigsInput
  | ListEndpointsInput
  | ListExperimentsRequest
  | ListFlowDefinitionsRequest
  | ListHumanTaskUisRequest
  | ListHyperParameterTuningJobsRequest
  | ListLabelingJobsForWorkteamRequest
  | ListLabelingJobsRequest
  | ListModelPackagesInput
  | ListModelsInput
  | ListMonitoringExecutionsRequest
  | ListMonitoringSchedulesRequest
  | ListNotebookInstanceLifecycleConfigsInput
  | ListNotebookInstancesInput
  | ListProcessingJobsRequest
  | ListSubscribedWorkteamsRequest
  | ListTagsInput
  | ListTrainingJobsForHyperParameterTuningJobRequest
  | ListTrainingJobsRequest
  | ListTransformJobsRequest
  | ListTrialComponentsRequest
  | ListTrialsRequest
  | ListUserProfilesRequest
  | ListWorkteamsRequest
  | RenderUiTemplateRequest
  | SearchRequest
  | StartMonitoringScheduleRequest
  | StartNotebookInstanceInput
  | StopAutoMLJobRequest
  | StopCompilationJobRequest
  | StopHyperParameterTuningJobRequest
  | StopLabelingJobRequest
  | StopMonitoringScheduleRequest
  | StopNotebookInstanceInput
  | StopProcessingJobRequest
  | StopTrainingJobRequest
  | StopTransformJobRequest
  | UpdateCodeRepositoryInput
  | UpdateDomainRequest
  | UpdateEndpointInput
  | UpdateEndpointWeightsAndCapacitiesInput
  | UpdateExperimentRequest
  | UpdateMonitoringScheduleRequest
  | UpdateNotebookInstanceInput
  | UpdateNotebookInstanceLifecycleConfigInput
  | UpdateTrialComponentRequest
  | UpdateTrialRequest
  | UpdateUserProfileRequest
  | UpdateWorkteamRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AddTagsOutput
  | AssociateTrialComponentResponse
  | CreateAlgorithmOutput
  | CreateAppResponse
  | CreateAutoMLJobResponse
  | CreateCodeRepositoryOutput
  | CreateCompilationJobResponse
  | CreateDomainResponse
  | CreateEndpointConfigOutput
  | CreateEndpointOutput
  | CreateExperimentResponse
  | CreateFlowDefinitionResponse
  | CreateHumanTaskUiResponse
  | CreateHyperParameterTuningJobResponse
  | CreateLabelingJobResponse
  | CreateModelOutput
  | CreateModelPackageOutput
  | CreateMonitoringScheduleResponse
  | CreateNotebookInstanceLifecycleConfigOutput
  | CreateNotebookInstanceOutput
  | CreatePresignedDomainUrlResponse
  | CreatePresignedNotebookInstanceUrlOutput
  | CreateProcessingJobResponse
  | CreateTrainingJobResponse
  | CreateTransformJobResponse
  | CreateTrialComponentResponse
  | CreateTrialResponse
  | CreateUserProfileResponse
  | CreateWorkteamResponse
  | DeleteExperimentResponse
  | DeleteFlowDefinitionResponse
  | DeleteTagsOutput
  | DeleteTrialComponentResponse
  | DeleteTrialResponse
  | DeleteWorkteamResponse
  | DescribeAlgorithmOutput
  | DescribeAppResponse
  | DescribeAutoMLJobResponse
  | DescribeCodeRepositoryOutput
  | DescribeCompilationJobResponse
  | DescribeDomainResponse
  | DescribeEndpointConfigOutput
  | DescribeEndpointOutput
  | DescribeExperimentResponse
  | DescribeFlowDefinitionResponse
  | DescribeHumanTaskUiResponse
  | DescribeHyperParameterTuningJobResponse
  | DescribeLabelingJobResponse
  | DescribeModelOutput
  | DescribeModelPackageOutput
  | DescribeMonitoringScheduleResponse
  | DescribeNotebookInstanceLifecycleConfigOutput
  | DescribeNotebookInstanceOutput
  | DescribeProcessingJobResponse
  | DescribeSubscribedWorkteamResponse
  | DescribeTrainingJobResponse
  | DescribeTransformJobResponse
  | DescribeTrialComponentResponse
  | DescribeTrialResponse
  | DescribeUserProfileResponse
  | DescribeWorkteamResponse
  | DisassociateTrialComponentResponse
  | GetSearchSuggestionsResponse
  | ListAlgorithmsOutput
  | ListAppsResponse
  | ListAutoMLJobsResponse
  | ListCandidatesForAutoMLJobResponse
  | ListCodeRepositoriesOutput
  | ListCompilationJobsResponse
  | ListDomainsResponse
  | ListEndpointConfigsOutput
  | ListEndpointsOutput
  | ListExperimentsResponse
  | ListFlowDefinitionsResponse
  | ListHumanTaskUisResponse
  | ListHyperParameterTuningJobsResponse
  | ListLabelingJobsForWorkteamResponse
  | ListLabelingJobsResponse
  | ListModelPackagesOutput
  | ListModelsOutput
  | ListMonitoringExecutionsResponse
  | ListMonitoringSchedulesResponse
  | ListNotebookInstanceLifecycleConfigsOutput
  | ListNotebookInstancesOutput
  | ListProcessingJobsResponse
  | ListSubscribedWorkteamsResponse
  | ListTagsOutput
  | ListTrainingJobsForHyperParameterTuningJobResponse
  | ListTrainingJobsResponse
  | ListTransformJobsResponse
  | ListTrialComponentsResponse
  | ListTrialsResponse
  | ListUserProfilesResponse
  | ListWorkteamsResponse
  | RenderUiTemplateResponse
  | SearchResponse
  | UpdateCodeRepositoryOutput
  | UpdateDomainResponse
  | UpdateEndpointOutput
  | UpdateEndpointWeightsAndCapacitiesOutput
  | UpdateExperimentResponse
  | UpdateMonitoringScheduleResponse
  | UpdateNotebookInstanceLifecycleConfigOutput
  | UpdateNotebookInstanceOutput
  | UpdateTrialComponentResponse
  | UpdateTrialResponse
  | UpdateUserProfileResponse
  | UpdateWorkteamResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type SageMakerClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type SageMakerClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 *
 *         <p>Provides APIs for creating and managing Amazon SageMaker resources.</p>
 *
 */
export class SageMakerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SageMakerClientResolvedConfig
> {
  readonly config: SageMakerClientResolvedConfig;

  constructor(configuration: SageMakerClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
  }
}
