import {
  CreateDevicePoolRequest,
  CreateDevicePoolResult,
  CreateInstanceProfileRequest,
  CreateInstanceProfileResult,
  CreateNetworkProfileRequest,
  CreateNetworkProfileResult,
  CreateProjectRequest,
  CreateProjectResult,
  CreateRemoteAccessSessionRequest,
  CreateRemoteAccessSessionResult,
  CreateTestGridProjectRequest,
  CreateTestGridProjectResult,
  CreateTestGridUrlRequest,
  CreateTestGridUrlResult,
  CreateUploadRequest,
  CreateUploadResult,
  CreateVPCEConfigurationRequest,
  CreateVPCEConfigurationResult,
  DeleteDevicePoolRequest,
  DeleteDevicePoolResult,
  DeleteInstanceProfileRequest,
  DeleteInstanceProfileResult,
  DeleteNetworkProfileRequest,
  DeleteNetworkProfileResult,
  DeleteProjectRequest,
  DeleteProjectResult,
  DeleteRemoteAccessSessionRequest,
  DeleteRemoteAccessSessionResult,
  DeleteRunRequest,
  DeleteRunResult,
  DeleteTestGridProjectRequest,
  DeleteTestGridProjectResult,
  DeleteUploadRequest,
  DeleteUploadResult,
  DeleteVPCEConfigurationRequest,
  DeleteVPCEConfigurationResult,
  GetAccountSettingsRequest,
  GetAccountSettingsResult,
  GetDeviceInstanceRequest,
  GetDeviceInstanceResult,
  GetDevicePoolCompatibilityRequest,
  GetDevicePoolCompatibilityResult,
  GetDevicePoolRequest,
  GetDevicePoolResult,
  GetDeviceRequest,
  GetDeviceResult,
  GetInstanceProfileRequest,
  GetInstanceProfileResult,
  GetJobRequest,
  GetJobResult,
  GetNetworkProfileRequest,
  GetNetworkProfileResult,
  GetOfferingStatusRequest,
  GetOfferingStatusResult,
  GetProjectRequest,
  GetProjectResult,
  GetRemoteAccessSessionRequest,
  GetRemoteAccessSessionResult,
  GetRunRequest,
  GetRunResult,
  GetSuiteRequest,
  GetSuiteResult,
  GetTestGridProjectRequest,
  GetTestGridProjectResult,
  GetTestGridSessionRequest,
  GetTestGridSessionResult,
  GetTestRequest,
  GetTestResult,
  GetUploadRequest,
  GetUploadResult,
  GetVPCEConfigurationRequest,
  GetVPCEConfigurationResult,
  InstallToRemoteAccessSessionRequest,
  InstallToRemoteAccessSessionResult,
  ListArtifactsRequest,
  ListArtifactsResult,
  ListDeviceInstancesRequest,
  ListDeviceInstancesResult,
  ListDevicePoolsRequest,
  ListDevicePoolsResult,
  ListDevicesRequest,
  ListDevicesResult,
  ListInstanceProfilesRequest,
  ListInstanceProfilesResult,
  ListJobsRequest,
  ListJobsResult,
  ListNetworkProfilesRequest,
  ListNetworkProfilesResult,
  ListOfferingPromotionsRequest,
  ListOfferingPromotionsResult,
  ListOfferingTransactionsRequest,
  ListOfferingTransactionsResult,
  ListOfferingsRequest,
  ListOfferingsResult,
  ListProjectsRequest,
  ListProjectsResult,
  ListRemoteAccessSessionsRequest,
  ListRemoteAccessSessionsResult,
  ListRunsRequest,
  ListRunsResult,
  ListSamplesRequest,
  ListSamplesResult,
  ListSuitesRequest,
  ListSuitesResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTestGridProjectsRequest,
  ListTestGridProjectsResult,
  ListTestGridSessionActionsRequest,
  ListTestGridSessionActionsResult,
  ListTestGridSessionArtifactsRequest,
  ListTestGridSessionArtifactsResult,
  ListTestGridSessionsRequest,
  ListTestGridSessionsResult,
  ListTestsRequest,
  ListTestsResult,
  ListUniqueProblemsRequest,
  ListUniqueProblemsResult,
  ListUploadsRequest,
  ListUploadsResult,
  ListVPCEConfigurationsRequest,
  ListVPCEConfigurationsResult,
  PurchaseOfferingRequest,
  PurchaseOfferingResult,
  RenewOfferingRequest,
  RenewOfferingResult,
  ScheduleRunRequest,
  ScheduleRunResult,
  StopJobRequest,
  StopJobResult,
  StopRemoteAccessSessionRequest,
  StopRemoteAccessSessionResult,
  StopRunRequest,
  StopRunResult,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDeviceInstanceRequest,
  UpdateDeviceInstanceResult,
  UpdateDevicePoolRequest,
  UpdateDevicePoolResult,
  UpdateInstanceProfileRequest,
  UpdateInstanceProfileResult,
  UpdateNetworkProfileRequest,
  UpdateNetworkProfileResult,
  UpdateProjectRequest,
  UpdateProjectResult,
  UpdateTestGridProjectRequest,
  UpdateTestGridProjectResult,
  UpdateUploadRequest,
  UpdateUploadResult,
  UpdateVPCEConfigurationRequest,
  UpdateVPCEConfigurationResult
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
  | CreateDevicePoolRequest
  | CreateInstanceProfileRequest
  | CreateNetworkProfileRequest
  | CreateProjectRequest
  | CreateRemoteAccessSessionRequest
  | CreateTestGridProjectRequest
  | CreateTestGridUrlRequest
  | CreateUploadRequest
  | CreateVPCEConfigurationRequest
  | DeleteDevicePoolRequest
  | DeleteInstanceProfileRequest
  | DeleteNetworkProfileRequest
  | DeleteProjectRequest
  | DeleteRemoteAccessSessionRequest
  | DeleteRunRequest
  | DeleteTestGridProjectRequest
  | DeleteUploadRequest
  | DeleteVPCEConfigurationRequest
  | GetAccountSettingsRequest
  | GetDeviceInstanceRequest
  | GetDevicePoolCompatibilityRequest
  | GetDevicePoolRequest
  | GetDeviceRequest
  | GetInstanceProfileRequest
  | GetJobRequest
  | GetNetworkProfileRequest
  | GetOfferingStatusRequest
  | GetProjectRequest
  | GetRemoteAccessSessionRequest
  | GetRunRequest
  | GetSuiteRequest
  | GetTestGridProjectRequest
  | GetTestGridSessionRequest
  | GetTestRequest
  | GetUploadRequest
  | GetVPCEConfigurationRequest
  | InstallToRemoteAccessSessionRequest
  | ListArtifactsRequest
  | ListDeviceInstancesRequest
  | ListDevicePoolsRequest
  | ListDevicesRequest
  | ListInstanceProfilesRequest
  | ListJobsRequest
  | ListNetworkProfilesRequest
  | ListOfferingPromotionsRequest
  | ListOfferingTransactionsRequest
  | ListOfferingsRequest
  | ListProjectsRequest
  | ListRemoteAccessSessionsRequest
  | ListRunsRequest
  | ListSamplesRequest
  | ListSuitesRequest
  | ListTagsForResourceRequest
  | ListTestGridProjectsRequest
  | ListTestGridSessionActionsRequest
  | ListTestGridSessionArtifactsRequest
  | ListTestGridSessionsRequest
  | ListTestsRequest
  | ListUniqueProblemsRequest
  | ListUploadsRequest
  | ListVPCEConfigurationsRequest
  | PurchaseOfferingRequest
  | RenewOfferingRequest
  | ScheduleRunRequest
  | StopJobRequest
  | StopRemoteAccessSessionRequest
  | StopRunRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateDeviceInstanceRequest
  | UpdateDevicePoolRequest
  | UpdateInstanceProfileRequest
  | UpdateNetworkProfileRequest
  | UpdateProjectRequest
  | UpdateTestGridProjectRequest
  | UpdateUploadRequest
  | UpdateVPCEConfigurationRequest;

export type ServiceOutputTypes =
  | CreateDevicePoolResult
  | CreateInstanceProfileResult
  | CreateNetworkProfileResult
  | CreateProjectResult
  | CreateRemoteAccessSessionResult
  | CreateTestGridProjectResult
  | CreateTestGridUrlResult
  | CreateUploadResult
  | CreateVPCEConfigurationResult
  | DeleteDevicePoolResult
  | DeleteInstanceProfileResult
  | DeleteNetworkProfileResult
  | DeleteProjectResult
  | DeleteRemoteAccessSessionResult
  | DeleteRunResult
  | DeleteTestGridProjectResult
  | DeleteUploadResult
  | DeleteVPCEConfigurationResult
  | GetAccountSettingsResult
  | GetDeviceInstanceResult
  | GetDevicePoolCompatibilityResult
  | GetDevicePoolResult
  | GetDeviceResult
  | GetInstanceProfileResult
  | GetJobResult
  | GetNetworkProfileResult
  | GetOfferingStatusResult
  | GetProjectResult
  | GetRemoteAccessSessionResult
  | GetRunResult
  | GetSuiteResult
  | GetTestGridProjectResult
  | GetTestGridSessionResult
  | GetTestResult
  | GetUploadResult
  | GetVPCEConfigurationResult
  | InstallToRemoteAccessSessionResult
  | ListArtifactsResult
  | ListDeviceInstancesResult
  | ListDevicePoolsResult
  | ListDevicesResult
  | ListInstanceProfilesResult
  | ListJobsResult
  | ListNetworkProfilesResult
  | ListOfferingPromotionsResult
  | ListOfferingTransactionsResult
  | ListOfferingsResult
  | ListProjectsResult
  | ListRemoteAccessSessionsResult
  | ListRunsResult
  | ListSamplesResult
  | ListSuitesResult
  | ListTagsForResourceResponse
  | ListTestGridProjectsResult
  | ListTestGridSessionActionsResult
  | ListTestGridSessionArtifactsResult
  | ListTestGridSessionsResult
  | ListTestsResult
  | ListUniqueProblemsResult
  | ListUploadsResult
  | ListVPCEConfigurationsResult
  | PurchaseOfferingResult
  | RenewOfferingResult
  | ScheduleRunResult
  | StopJobResult
  | StopRemoteAccessSessionResult
  | StopRunResult
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateDeviceInstanceResult
  | UpdateDevicePoolResult
  | UpdateInstanceProfileResult
  | UpdateNetworkProfileResult
  | UpdateProjectResult
  | UpdateTestGridProjectResult
  | UpdateUploadResult
  | UpdateVPCEConfigurationResult;

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

export type DeviceFarmClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type DeviceFarmClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Welcome to the AWS Device Farm API documentation, which contains APIs for:</p>
 *         <ul>
 *             <li>
 *                 <p>Testing on desktop browsers</p>
 *                 <p> Device Farm makes it possible for you to test your web applications on desktop browsers using
 *                     Selenium. The APIs for desktop browser testing contain <code>TestGrid</code> in their names. For
 *                     more information, see <a href="https://docs.aws.amazon.com/devicefarm/latest/testgrid/">Testing Web
 *                         Applications on Selenium with Device Farm</a>.</p>
 *             </li>
 *             <li>
 *                 <p>Testing on real mobile devices</p>
 *                 <p>Device Farm makes it possible for you to test apps on physical phones, tablets, and other
 *                     devices in the cloud. For more information, see the <a href="https://docs.aws.amazon.com/devicefarm/latest/developerguide/">Device Farm Developer Guide</a>.</p>
 *             </li>
 *          </ul>
 */
export class DeviceFarmClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DeviceFarmClientResolvedConfig
> {
  readonly config: DeviceFarmClientResolvedConfig;

  constructor(configuration: DeviceFarmClientConfig) {
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
