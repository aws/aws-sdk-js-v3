// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { CreateDevicePoolCommandInput, CreateDevicePoolCommandOutput } from "./commands/CreateDevicePoolCommand";
import {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "./commands/CreateInstanceProfileCommand";
import {
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput,
} from "./commands/CreateNetworkProfileCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import {
  CreateRemoteAccessSessionCommandInput,
  CreateRemoteAccessSessionCommandOutput,
} from "./commands/CreateRemoteAccessSessionCommand";
import {
  CreateTestGridProjectCommandInput,
  CreateTestGridProjectCommandOutput,
} from "./commands/CreateTestGridProjectCommand";
import { CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput } from "./commands/CreateTestGridUrlCommand";
import { CreateUploadCommandInput, CreateUploadCommandOutput } from "./commands/CreateUploadCommand";
import {
  CreateVPCEConfigurationCommandInput,
  CreateVPCEConfigurationCommandOutput,
} from "./commands/CreateVPCEConfigurationCommand";
import { DeleteDevicePoolCommandInput, DeleteDevicePoolCommandOutput } from "./commands/DeleteDevicePoolCommand";
import {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "./commands/DeleteInstanceProfileCommand";
import {
  DeleteNetworkProfileCommandInput,
  DeleteNetworkProfileCommandOutput,
} from "./commands/DeleteNetworkProfileCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import {
  DeleteRemoteAccessSessionCommandInput,
  DeleteRemoteAccessSessionCommandOutput,
} from "./commands/DeleteRemoteAccessSessionCommand";
import { DeleteRunCommandInput, DeleteRunCommandOutput } from "./commands/DeleteRunCommand";
import {
  DeleteTestGridProjectCommandInput,
  DeleteTestGridProjectCommandOutput,
} from "./commands/DeleteTestGridProjectCommand";
import { DeleteUploadCommandInput, DeleteUploadCommandOutput } from "./commands/DeleteUploadCommand";
import {
  DeleteVPCEConfigurationCommandInput,
  DeleteVPCEConfigurationCommandOutput,
} from "./commands/DeleteVPCEConfigurationCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import { GetDeviceInstanceCommandInput, GetDeviceInstanceCommandOutput } from "./commands/GetDeviceInstanceCommand";
import { GetDevicePoolCommandInput, GetDevicePoolCommandOutput } from "./commands/GetDevicePoolCommand";
import {
  GetDevicePoolCompatibilityCommandInput,
  GetDevicePoolCompatibilityCommandOutput,
} from "./commands/GetDevicePoolCompatibilityCommand";
import { GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput } from "./commands/GetInstanceProfileCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput } from "./commands/GetNetworkProfileCommand";
import { GetOfferingStatusCommandInput, GetOfferingStatusCommandOutput } from "./commands/GetOfferingStatusCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import {
  GetRemoteAccessSessionCommandInput,
  GetRemoteAccessSessionCommandOutput,
} from "./commands/GetRemoteAccessSessionCommand";
import { GetRunCommandInput, GetRunCommandOutput } from "./commands/GetRunCommand";
import { GetSuiteCommandInput, GetSuiteCommandOutput } from "./commands/GetSuiteCommand";
import { GetTestCommandInput, GetTestCommandOutput } from "./commands/GetTestCommand";
import { GetTestGridProjectCommandInput, GetTestGridProjectCommandOutput } from "./commands/GetTestGridProjectCommand";
import { GetTestGridSessionCommandInput, GetTestGridSessionCommandOutput } from "./commands/GetTestGridSessionCommand";
import { GetUploadCommandInput, GetUploadCommandOutput } from "./commands/GetUploadCommand";
import {
  GetVPCEConfigurationCommandInput,
  GetVPCEConfigurationCommandOutput,
} from "./commands/GetVPCEConfigurationCommand";
import {
  InstallToRemoteAccessSessionCommandInput,
  InstallToRemoteAccessSessionCommandOutput,
} from "./commands/InstallToRemoteAccessSessionCommand";
import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "./commands/ListArtifactsCommand";
import {
  ListDeviceInstancesCommandInput,
  ListDeviceInstancesCommandOutput,
} from "./commands/ListDeviceInstancesCommand";
import { ListDevicePoolsCommandInput, ListDevicePoolsCommandOutput } from "./commands/ListDevicePoolsCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "./commands/ListInstanceProfilesCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListNetworkProfilesCommandInput,
  ListNetworkProfilesCommandOutput,
} from "./commands/ListNetworkProfilesCommand";
import {
  ListOfferingPromotionsCommandInput,
  ListOfferingPromotionsCommandOutput,
} from "./commands/ListOfferingPromotionsCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "./commands/ListOfferingsCommand";
import {
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
} from "./commands/ListOfferingTransactionsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import {
  ListRemoteAccessSessionsCommandInput,
  ListRemoteAccessSessionsCommandOutput,
} from "./commands/ListRemoteAccessSessionsCommand";
import { ListRunsCommandInput, ListRunsCommandOutput } from "./commands/ListRunsCommand";
import { ListSamplesCommandInput, ListSamplesCommandOutput } from "./commands/ListSamplesCommand";
import { ListSuitesCommandInput, ListSuitesCommandOutput } from "./commands/ListSuitesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTestGridProjectsCommandInput,
  ListTestGridProjectsCommandOutput,
} from "./commands/ListTestGridProjectsCommand";
import {
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput,
} from "./commands/ListTestGridSessionActionsCommand";
import {
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput,
} from "./commands/ListTestGridSessionArtifactsCommand";
import {
  ListTestGridSessionsCommandInput,
  ListTestGridSessionsCommandOutput,
} from "./commands/ListTestGridSessionsCommand";
import { ListTestsCommandInput, ListTestsCommandOutput } from "./commands/ListTestsCommand";
import { ListUniqueProblemsCommandInput, ListUniqueProblemsCommandOutput } from "./commands/ListUniqueProblemsCommand";
import { ListUploadsCommandInput, ListUploadsCommandOutput } from "./commands/ListUploadsCommand";
import {
  ListVPCEConfigurationsCommandInput,
  ListVPCEConfigurationsCommandOutput,
} from "./commands/ListVPCEConfigurationsCommand";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "./commands/PurchaseOfferingCommand";
import { RenewOfferingCommandInput, RenewOfferingCommandOutput } from "./commands/RenewOfferingCommand";
import { ScheduleRunCommandInput, ScheduleRunCommandOutput } from "./commands/ScheduleRunCommand";
import { StopJobCommandInput, StopJobCommandOutput } from "./commands/StopJobCommand";
import {
  StopRemoteAccessSessionCommandInput,
  StopRemoteAccessSessionCommandOutput,
} from "./commands/StopRemoteAccessSessionCommand";
import { StopRunCommandInput, StopRunCommandOutput } from "./commands/StopRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateDeviceInstanceCommandInput,
  UpdateDeviceInstanceCommandOutput,
} from "./commands/UpdateDeviceInstanceCommand";
import { UpdateDevicePoolCommandInput, UpdateDevicePoolCommandOutput } from "./commands/UpdateDevicePoolCommand";
import {
  UpdateInstanceProfileCommandInput,
  UpdateInstanceProfileCommandOutput,
} from "./commands/UpdateInstanceProfileCommand";
import {
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput,
} from "./commands/UpdateNetworkProfileCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import {
  UpdateTestGridProjectCommandInput,
  UpdateTestGridProjectCommandOutput,
} from "./commands/UpdateTestGridProjectCommand";
import { UpdateUploadCommandInput, UpdateUploadCommandOutput } from "./commands/UpdateUploadCommand";
import {
  UpdateVPCEConfigurationCommandInput,
  UpdateVPCEConfigurationCommandOutput,
} from "./commands/UpdateVPCEConfigurationCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateDevicePoolCommandInput
  | CreateInstanceProfileCommandInput
  | CreateNetworkProfileCommandInput
  | CreateProjectCommandInput
  | CreateRemoteAccessSessionCommandInput
  | CreateTestGridProjectCommandInput
  | CreateTestGridUrlCommandInput
  | CreateUploadCommandInput
  | CreateVPCEConfigurationCommandInput
  | DeleteDevicePoolCommandInput
  | DeleteInstanceProfileCommandInput
  | DeleteNetworkProfileCommandInput
  | DeleteProjectCommandInput
  | DeleteRemoteAccessSessionCommandInput
  | DeleteRunCommandInput
  | DeleteTestGridProjectCommandInput
  | DeleteUploadCommandInput
  | DeleteVPCEConfigurationCommandInput
  | GetAccountSettingsCommandInput
  | GetDeviceCommandInput
  | GetDeviceInstanceCommandInput
  | GetDevicePoolCommandInput
  | GetDevicePoolCompatibilityCommandInput
  | GetInstanceProfileCommandInput
  | GetJobCommandInput
  | GetNetworkProfileCommandInput
  | GetOfferingStatusCommandInput
  | GetProjectCommandInput
  | GetRemoteAccessSessionCommandInput
  | GetRunCommandInput
  | GetSuiteCommandInput
  | GetTestCommandInput
  | GetTestGridProjectCommandInput
  | GetTestGridSessionCommandInput
  | GetUploadCommandInput
  | GetVPCEConfigurationCommandInput
  | InstallToRemoteAccessSessionCommandInput
  | ListArtifactsCommandInput
  | ListDeviceInstancesCommandInput
  | ListDevicePoolsCommandInput
  | ListDevicesCommandInput
  | ListInstanceProfilesCommandInput
  | ListJobsCommandInput
  | ListNetworkProfilesCommandInput
  | ListOfferingPromotionsCommandInput
  | ListOfferingTransactionsCommandInput
  | ListOfferingsCommandInput
  | ListProjectsCommandInput
  | ListRemoteAccessSessionsCommandInput
  | ListRunsCommandInput
  | ListSamplesCommandInput
  | ListSuitesCommandInput
  | ListTagsForResourceCommandInput
  | ListTestGridProjectsCommandInput
  | ListTestGridSessionActionsCommandInput
  | ListTestGridSessionArtifactsCommandInput
  | ListTestGridSessionsCommandInput
  | ListTestsCommandInput
  | ListUniqueProblemsCommandInput
  | ListUploadsCommandInput
  | ListVPCEConfigurationsCommandInput
  | PurchaseOfferingCommandInput
  | RenewOfferingCommandInput
  | ScheduleRunCommandInput
  | StopJobCommandInput
  | StopRemoteAccessSessionCommandInput
  | StopRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDeviceInstanceCommandInput
  | UpdateDevicePoolCommandInput
  | UpdateInstanceProfileCommandInput
  | UpdateNetworkProfileCommandInput
  | UpdateProjectCommandInput
  | UpdateTestGridProjectCommandInput
  | UpdateUploadCommandInput
  | UpdateVPCEConfigurationCommandInput;

export type ServiceOutputTypes =
  | CreateDevicePoolCommandOutput
  | CreateInstanceProfileCommandOutput
  | CreateNetworkProfileCommandOutput
  | CreateProjectCommandOutput
  | CreateRemoteAccessSessionCommandOutput
  | CreateTestGridProjectCommandOutput
  | CreateTestGridUrlCommandOutput
  | CreateUploadCommandOutput
  | CreateVPCEConfigurationCommandOutput
  | DeleteDevicePoolCommandOutput
  | DeleteInstanceProfileCommandOutput
  | DeleteNetworkProfileCommandOutput
  | DeleteProjectCommandOutput
  | DeleteRemoteAccessSessionCommandOutput
  | DeleteRunCommandOutput
  | DeleteTestGridProjectCommandOutput
  | DeleteUploadCommandOutput
  | DeleteVPCEConfigurationCommandOutput
  | GetAccountSettingsCommandOutput
  | GetDeviceCommandOutput
  | GetDeviceInstanceCommandOutput
  | GetDevicePoolCommandOutput
  | GetDevicePoolCompatibilityCommandOutput
  | GetInstanceProfileCommandOutput
  | GetJobCommandOutput
  | GetNetworkProfileCommandOutput
  | GetOfferingStatusCommandOutput
  | GetProjectCommandOutput
  | GetRemoteAccessSessionCommandOutput
  | GetRunCommandOutput
  | GetSuiteCommandOutput
  | GetTestCommandOutput
  | GetTestGridProjectCommandOutput
  | GetTestGridSessionCommandOutput
  | GetUploadCommandOutput
  | GetVPCEConfigurationCommandOutput
  | InstallToRemoteAccessSessionCommandOutput
  | ListArtifactsCommandOutput
  | ListDeviceInstancesCommandOutput
  | ListDevicePoolsCommandOutput
  | ListDevicesCommandOutput
  | ListInstanceProfilesCommandOutput
  | ListJobsCommandOutput
  | ListNetworkProfilesCommandOutput
  | ListOfferingPromotionsCommandOutput
  | ListOfferingTransactionsCommandOutput
  | ListOfferingsCommandOutput
  | ListProjectsCommandOutput
  | ListRemoteAccessSessionsCommandOutput
  | ListRunsCommandOutput
  | ListSamplesCommandOutput
  | ListSuitesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTestGridProjectsCommandOutput
  | ListTestGridSessionActionsCommandOutput
  | ListTestGridSessionArtifactsCommandOutput
  | ListTestGridSessionsCommandOutput
  | ListTestsCommandOutput
  | ListUniqueProblemsCommandOutput
  | ListUploadsCommandOutput
  | ListVPCEConfigurationsCommandOutput
  | PurchaseOfferingCommandOutput
  | RenewOfferingCommandOutput
  | ScheduleRunCommandOutput
  | StopJobCommandOutput
  | StopRemoteAccessSessionCommandOutput
  | StopRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDeviceInstanceCommandOutput
  | UpdateDevicePoolCommandOutput
  | UpdateInstanceProfileCommandOutput
  | UpdateNetworkProfileCommandOutput
  | UpdateProjectCommandOutput
  | UpdateTestGridProjectCommandOutput
  | UpdateUploadCommandOutput
  | UpdateVPCEConfigurationCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type DeviceFarmClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of DeviceFarmClient class constructor that set the region, credentials and other options.
 */
export interface DeviceFarmClientConfig extends DeviceFarmClientConfigType {}

type DeviceFarmClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of DeviceFarmClient class. This is resolved and normalized from the {@link DeviceFarmClientConfig | constructor configuration interface}.
 */
export interface DeviceFarmClientResolvedConfig extends DeviceFarmClientResolvedConfigType {}

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
  /**
   * The resolved configuration of DeviceFarmClient class. This is resolved and normalized from the {@link DeviceFarmClientConfig | constructor configuration interface}.
   */
  readonly config: DeviceFarmClientResolvedConfig;

  constructor(configuration: DeviceFarmClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
