import {
  BatchCreatePartitionRequest,
  BatchCreatePartitionResponse,
  BatchDeleteConnectionRequest,
  BatchDeleteConnectionResponse,
  BatchDeletePartitionRequest,
  BatchDeletePartitionResponse,
  BatchDeleteTableRequest,
  BatchDeleteTableResponse,
  BatchDeleteTableVersionRequest,
  BatchDeleteTableVersionResponse,
  BatchGetCrawlersRequest,
  BatchGetCrawlersResponse,
  BatchGetDevEndpointsRequest,
  BatchGetDevEndpointsResponse,
  BatchGetJobsRequest,
  BatchGetJobsResponse,
  BatchGetPartitionRequest,
  BatchGetPartitionResponse,
  BatchGetTriggersRequest,
  BatchGetTriggersResponse,
  BatchGetWorkflowsRequest,
  BatchGetWorkflowsResponse,
  BatchStopJobRunRequest,
  BatchStopJobRunResponse,
  CancelMLTaskRunRequest,
  CancelMLTaskRunResponse,
  CreateClassifierRequest,
  CreateClassifierResponse,
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateCrawlerRequest,
  CreateCrawlerResponse,
  CreateDatabaseRequest,
  CreateDatabaseResponse,
  CreateDevEndpointRequest,
  CreateDevEndpointResponse,
  CreateJobRequest,
  CreateJobResponse,
  CreateMLTransformRequest,
  CreateMLTransformResponse,
  CreatePartitionRequest,
  CreatePartitionResponse,
  CreateScriptRequest,
  CreateScriptResponse,
  CreateSecurityConfigurationRequest,
  CreateSecurityConfigurationResponse,
  CreateTableRequest,
  CreateTableResponse,
  CreateTriggerRequest,
  CreateTriggerResponse,
  CreateUserDefinedFunctionRequest,
  CreateUserDefinedFunctionResponse,
  CreateWorkflowRequest,
  CreateWorkflowResponse,
  DeleteClassifierRequest,
  DeleteClassifierResponse,
  DeleteConnectionRequest,
  DeleteConnectionResponse,
  DeleteCrawlerRequest,
  DeleteCrawlerResponse,
  DeleteDatabaseRequest,
  DeleteDatabaseResponse,
  DeleteDevEndpointRequest,
  DeleteDevEndpointResponse,
  DeleteJobRequest,
  DeleteJobResponse,
  DeleteMLTransformRequest,
  DeleteMLTransformResponse,
  DeletePartitionRequest,
  DeletePartitionResponse,
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteSecurityConfigurationRequest,
  DeleteSecurityConfigurationResponse,
  DeleteTableRequest,
  DeleteTableResponse,
  DeleteTableVersionRequest,
  DeleteTableVersionResponse,
  DeleteTriggerRequest,
  DeleteTriggerResponse,
  DeleteUserDefinedFunctionRequest,
  DeleteUserDefinedFunctionResponse,
  DeleteWorkflowRequest,
  DeleteWorkflowResponse,
  GetCatalogImportStatusRequest,
  GetCatalogImportStatusResponse,
  GetClassifierRequest,
  GetClassifierResponse,
  GetClassifiersRequest,
  GetClassifiersResponse,
  GetConnectionRequest,
  GetConnectionResponse,
  GetConnectionsRequest,
  GetConnectionsResponse,
  GetCrawlerMetricsRequest,
  GetCrawlerMetricsResponse,
  GetCrawlerRequest,
  GetCrawlerResponse,
  GetCrawlersRequest,
  GetCrawlersResponse,
  GetDataCatalogEncryptionSettingsRequest,
  GetDataCatalogEncryptionSettingsResponse,
  GetDatabaseRequest,
  GetDatabaseResponse,
  GetDatabasesRequest,
  GetDatabasesResponse,
  GetDataflowGraphRequest,
  GetDataflowGraphResponse,
  GetDevEndpointRequest,
  GetDevEndpointResponse,
  GetDevEndpointsRequest,
  GetDevEndpointsResponse,
  GetJobBookmarkRequest,
  GetJobBookmarkResponse,
  GetJobRequest,
  GetJobResponse,
  GetJobRunRequest,
  GetJobRunResponse,
  GetJobRunsRequest,
  GetJobRunsResponse,
  GetJobsRequest,
  GetJobsResponse,
  GetMLTaskRunRequest,
  GetMLTaskRunResponse,
  GetMLTaskRunsRequest,
  GetMLTaskRunsResponse,
  GetMLTransformRequest,
  GetMLTransformResponse,
  GetMLTransformsRequest,
  GetMLTransformsResponse,
  GetMappingRequest,
  GetMappingResponse,
  GetPartitionRequest,
  GetPartitionResponse,
  GetPartitionsRequest,
  GetPartitionsResponse,
  GetPlanRequest,
  GetPlanResponse,
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetSecurityConfigurationRequest,
  GetSecurityConfigurationResponse,
  GetSecurityConfigurationsRequest,
  GetSecurityConfigurationsResponse,
  GetTableRequest,
  GetTableResponse,
  GetTableVersionRequest,
  GetTableVersionResponse,
  GetTableVersionsRequest,
  GetTableVersionsResponse,
  GetTablesRequest,
  GetTablesResponse,
  GetTagsRequest,
  GetTagsResponse,
  GetTriggerRequest,
  GetTriggerResponse,
  GetTriggersRequest,
  GetTriggersResponse,
  GetUserDefinedFunctionRequest,
  GetUserDefinedFunctionResponse,
  GetUserDefinedFunctionsRequest,
  GetUserDefinedFunctionsResponse,
  GetWorkflowRequest,
  GetWorkflowResponse,
  GetWorkflowRunPropertiesRequest,
  GetWorkflowRunPropertiesResponse,
  GetWorkflowRunRequest,
  GetWorkflowRunResponse,
  GetWorkflowRunsRequest,
  GetWorkflowRunsResponse,
  ImportCatalogToGlueRequest,
  ImportCatalogToGlueResponse,
  ListCrawlersRequest,
  ListCrawlersResponse,
  ListDevEndpointsRequest,
  ListDevEndpointsResponse,
  ListJobsRequest,
  ListJobsResponse,
  ListTriggersRequest,
  ListTriggersResponse,
  ListWorkflowsRequest,
  ListWorkflowsResponse,
  PutDataCatalogEncryptionSettingsRequest,
  PutDataCatalogEncryptionSettingsResponse,
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutWorkflowRunPropertiesRequest,
  PutWorkflowRunPropertiesResponse,
  ResetJobBookmarkRequest,
  ResetJobBookmarkResponse,
  SearchTablesRequest,
  SearchTablesResponse,
  StartCrawlerRequest,
  StartCrawlerResponse,
  StartCrawlerScheduleRequest,
  StartCrawlerScheduleResponse,
  StartExportLabelsTaskRunRequest,
  StartExportLabelsTaskRunResponse,
  StartImportLabelsTaskRunRequest,
  StartImportLabelsTaskRunResponse,
  StartJobRunRequest,
  StartJobRunResponse,
  StartMLEvaluationTaskRunRequest,
  StartMLEvaluationTaskRunResponse,
  StartMLLabelingSetGenerationTaskRunRequest,
  StartMLLabelingSetGenerationTaskRunResponse,
  StartTriggerRequest,
  StartTriggerResponse,
  StartWorkflowRunRequest,
  StartWorkflowRunResponse,
  StopCrawlerRequest,
  StopCrawlerResponse,
  StopCrawlerScheduleRequest,
  StopCrawlerScheduleResponse,
  StopTriggerRequest,
  StopTriggerResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateClassifierRequest,
  UpdateClassifierResponse,
  UpdateConnectionRequest,
  UpdateConnectionResponse,
  UpdateCrawlerRequest,
  UpdateCrawlerResponse,
  UpdateCrawlerScheduleRequest,
  UpdateCrawlerScheduleResponse,
  UpdateDatabaseRequest,
  UpdateDatabaseResponse,
  UpdateDevEndpointRequest,
  UpdateDevEndpointResponse,
  UpdateJobRequest,
  UpdateJobResponse,
  UpdateMLTransformRequest,
  UpdateMLTransformResponse,
  UpdatePartitionRequest,
  UpdatePartitionResponse,
  UpdateTableRequest,
  UpdateTableResponse,
  UpdateTriggerRequest,
  UpdateTriggerResponse,
  UpdateUserDefinedFunctionRequest,
  UpdateUserDefinedFunctionResponse,
  UpdateWorkflowRequest,
  UpdateWorkflowResponse
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchCreatePartitionRequest
  | BatchDeleteConnectionRequest
  | BatchDeletePartitionRequest
  | BatchDeleteTableRequest
  | BatchDeleteTableVersionRequest
  | BatchGetCrawlersRequest
  | BatchGetDevEndpointsRequest
  | BatchGetJobsRequest
  | BatchGetPartitionRequest
  | BatchGetTriggersRequest
  | BatchGetWorkflowsRequest
  | BatchStopJobRunRequest
  | CancelMLTaskRunRequest
  | CreateClassifierRequest
  | CreateConnectionRequest
  | CreateCrawlerRequest
  | CreateDatabaseRequest
  | CreateDevEndpointRequest
  | CreateJobRequest
  | CreateMLTransformRequest
  | CreatePartitionRequest
  | CreateScriptRequest
  | CreateSecurityConfigurationRequest
  | CreateTableRequest
  | CreateTriggerRequest
  | CreateUserDefinedFunctionRequest
  | CreateWorkflowRequest
  | DeleteClassifierRequest
  | DeleteConnectionRequest
  | DeleteCrawlerRequest
  | DeleteDatabaseRequest
  | DeleteDevEndpointRequest
  | DeleteJobRequest
  | DeleteMLTransformRequest
  | DeletePartitionRequest
  | DeleteResourcePolicyRequest
  | DeleteSecurityConfigurationRequest
  | DeleteTableRequest
  | DeleteTableVersionRequest
  | DeleteTriggerRequest
  | DeleteUserDefinedFunctionRequest
  | DeleteWorkflowRequest
  | GetCatalogImportStatusRequest
  | GetClassifierRequest
  | GetClassifiersRequest
  | GetConnectionRequest
  | GetConnectionsRequest
  | GetCrawlerMetricsRequest
  | GetCrawlerRequest
  | GetCrawlersRequest
  | GetDataCatalogEncryptionSettingsRequest
  | GetDatabaseRequest
  | GetDatabasesRequest
  | GetDataflowGraphRequest
  | GetDevEndpointRequest
  | GetDevEndpointsRequest
  | GetJobBookmarkRequest
  | GetJobRequest
  | GetJobRunRequest
  | GetJobRunsRequest
  | GetJobsRequest
  | GetMLTaskRunRequest
  | GetMLTaskRunsRequest
  | GetMLTransformRequest
  | GetMLTransformsRequest
  | GetMappingRequest
  | GetPartitionRequest
  | GetPartitionsRequest
  | GetPlanRequest
  | GetResourcePolicyRequest
  | GetSecurityConfigurationRequest
  | GetSecurityConfigurationsRequest
  | GetTableRequest
  | GetTableVersionRequest
  | GetTableVersionsRequest
  | GetTablesRequest
  | GetTagsRequest
  | GetTriggerRequest
  | GetTriggersRequest
  | GetUserDefinedFunctionRequest
  | GetUserDefinedFunctionsRequest
  | GetWorkflowRequest
  | GetWorkflowRunPropertiesRequest
  | GetWorkflowRunRequest
  | GetWorkflowRunsRequest
  | ImportCatalogToGlueRequest
  | ListCrawlersRequest
  | ListDevEndpointsRequest
  | ListJobsRequest
  | ListTriggersRequest
  | ListWorkflowsRequest
  | PutDataCatalogEncryptionSettingsRequest
  | PutResourcePolicyRequest
  | PutWorkflowRunPropertiesRequest
  | ResetJobBookmarkRequest
  | SearchTablesRequest
  | StartCrawlerRequest
  | StartCrawlerScheduleRequest
  | StartExportLabelsTaskRunRequest
  | StartImportLabelsTaskRunRequest
  | StartJobRunRequest
  | StartMLEvaluationTaskRunRequest
  | StartMLLabelingSetGenerationTaskRunRequest
  | StartTriggerRequest
  | StartWorkflowRunRequest
  | StopCrawlerRequest
  | StopCrawlerScheduleRequest
  | StopTriggerRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateClassifierRequest
  | UpdateConnectionRequest
  | UpdateCrawlerRequest
  | UpdateCrawlerScheduleRequest
  | UpdateDatabaseRequest
  | UpdateDevEndpointRequest
  | UpdateJobRequest
  | UpdateMLTransformRequest
  | UpdatePartitionRequest
  | UpdateTableRequest
  | UpdateTriggerRequest
  | UpdateUserDefinedFunctionRequest
  | UpdateWorkflowRequest;

export type ServiceOutputTypes =
  | BatchCreatePartitionResponse
  | BatchDeleteConnectionResponse
  | BatchDeletePartitionResponse
  | BatchDeleteTableResponse
  | BatchDeleteTableVersionResponse
  | BatchGetCrawlersResponse
  | BatchGetDevEndpointsResponse
  | BatchGetJobsResponse
  | BatchGetPartitionResponse
  | BatchGetTriggersResponse
  | BatchGetWorkflowsResponse
  | BatchStopJobRunResponse
  | CancelMLTaskRunResponse
  | CreateClassifierResponse
  | CreateConnectionResponse
  | CreateCrawlerResponse
  | CreateDatabaseResponse
  | CreateDevEndpointResponse
  | CreateJobResponse
  | CreateMLTransformResponse
  | CreatePartitionResponse
  | CreateScriptResponse
  | CreateSecurityConfigurationResponse
  | CreateTableResponse
  | CreateTriggerResponse
  | CreateUserDefinedFunctionResponse
  | CreateWorkflowResponse
  | DeleteClassifierResponse
  | DeleteConnectionResponse
  | DeleteCrawlerResponse
  | DeleteDatabaseResponse
  | DeleteDevEndpointResponse
  | DeleteJobResponse
  | DeleteMLTransformResponse
  | DeletePartitionResponse
  | DeleteResourcePolicyResponse
  | DeleteSecurityConfigurationResponse
  | DeleteTableResponse
  | DeleteTableVersionResponse
  | DeleteTriggerResponse
  | DeleteUserDefinedFunctionResponse
  | DeleteWorkflowResponse
  | GetCatalogImportStatusResponse
  | GetClassifierResponse
  | GetClassifiersResponse
  | GetConnectionResponse
  | GetConnectionsResponse
  | GetCrawlerMetricsResponse
  | GetCrawlerResponse
  | GetCrawlersResponse
  | GetDataCatalogEncryptionSettingsResponse
  | GetDatabaseResponse
  | GetDatabasesResponse
  | GetDataflowGraphResponse
  | GetDevEndpointResponse
  | GetDevEndpointsResponse
  | GetJobBookmarkResponse
  | GetJobResponse
  | GetJobRunResponse
  | GetJobRunsResponse
  | GetJobsResponse
  | GetMLTaskRunResponse
  | GetMLTaskRunsResponse
  | GetMLTransformResponse
  | GetMLTransformsResponse
  | GetMappingResponse
  | GetPartitionResponse
  | GetPartitionsResponse
  | GetPlanResponse
  | GetResourcePolicyResponse
  | GetSecurityConfigurationResponse
  | GetSecurityConfigurationsResponse
  | GetTableResponse
  | GetTableVersionResponse
  | GetTableVersionsResponse
  | GetTablesResponse
  | GetTagsResponse
  | GetTriggerResponse
  | GetTriggersResponse
  | GetUserDefinedFunctionResponse
  | GetUserDefinedFunctionsResponse
  | GetWorkflowResponse
  | GetWorkflowRunPropertiesResponse
  | GetWorkflowRunResponse
  | GetWorkflowRunsResponse
  | ImportCatalogToGlueResponse
  | ListCrawlersResponse
  | ListDevEndpointsResponse
  | ListJobsResponse
  | ListTriggersResponse
  | ListWorkflowsResponse
  | PutDataCatalogEncryptionSettingsResponse
  | PutResourcePolicyResponse
  | PutWorkflowRunPropertiesResponse
  | ResetJobBookmarkResponse
  | SearchTablesResponse
  | StartCrawlerResponse
  | StartCrawlerScheduleResponse
  | StartExportLabelsTaskRunResponse
  | StartImportLabelsTaskRunResponse
  | StartJobRunResponse
  | StartMLEvaluationTaskRunResponse
  | StartMLLabelingSetGenerationTaskRunResponse
  | StartTriggerResponse
  | StartWorkflowRunResponse
  | StopCrawlerResponse
  | StopCrawlerScheduleResponse
  | StopTriggerResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateClassifierResponse
  | UpdateConnectionResponse
  | UpdateCrawlerResponse
  | UpdateCrawlerScheduleResponse
  | UpdateDatabaseResponse
  | UpdateDevEndpointResponse
  | UpdateJobResponse
  | UpdateMLTransformResponse
  | UpdatePartitionResponse
  | UpdateTableResponse
  | UpdateTriggerResponse
  | UpdateUserDefinedFunctionResponse
  | UpdateWorkflowResponse;

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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

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

export type GlueClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type GlueClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 *
 *          <fullname>AWS Glue</fullname>
 *          <p>Defines the public endpoint for the AWS Glue service.</p>
 *
 */
export class GlueClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GlueClientResolvedConfig
> {
  readonly config: GlueClientResolvedConfig;

  constructor(configuration: GlueClientConfig) {
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

  destroy(): void {}
}
