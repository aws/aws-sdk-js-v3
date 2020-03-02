import {
  CreateAppCommandInput,
  CreateAppCommandOutput
} from "./commands/CreateAppCommand";
import {
  CreateBackendEnvironmentCommandInput,
  CreateBackendEnvironmentCommandOutput
} from "./commands/CreateBackendEnvironmentCommand";
import {
  CreateBranchCommandInput,
  CreateBranchCommandOutput
} from "./commands/CreateBranchCommand";
import {
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput
} from "./commands/CreateDeploymentCommand";
import {
  CreateDomainAssociationCommandInput,
  CreateDomainAssociationCommandOutput
} from "./commands/CreateDomainAssociationCommand";
import {
  CreateWebhookCommandInput,
  CreateWebhookCommandOutput
} from "./commands/CreateWebhookCommand";
import {
  DeleteAppCommandInput,
  DeleteAppCommandOutput
} from "./commands/DeleteAppCommand";
import {
  DeleteBackendEnvironmentCommandInput,
  DeleteBackendEnvironmentCommandOutput
} from "./commands/DeleteBackendEnvironmentCommand";
import {
  DeleteBranchCommandInput,
  DeleteBranchCommandOutput
} from "./commands/DeleteBranchCommand";
import {
  DeleteDomainAssociationCommandInput,
  DeleteDomainAssociationCommandOutput
} from "./commands/DeleteDomainAssociationCommand";
import {
  DeleteJobCommandInput,
  DeleteJobCommandOutput
} from "./commands/DeleteJobCommand";
import {
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput
} from "./commands/DeleteWebhookCommand";
import {
  GenerateAccessLogsCommandInput,
  GenerateAccessLogsCommandOutput
} from "./commands/GenerateAccessLogsCommand";
import {
  GetAppCommandInput,
  GetAppCommandOutput
} from "./commands/GetAppCommand";
import {
  GetArtifactUrlCommandInput,
  GetArtifactUrlCommandOutput
} from "./commands/GetArtifactUrlCommand";
import {
  GetBackendEnvironmentCommandInput,
  GetBackendEnvironmentCommandOutput
} from "./commands/GetBackendEnvironmentCommand";
import {
  GetBranchCommandInput,
  GetBranchCommandOutput
} from "./commands/GetBranchCommand";
import {
  GetDomainAssociationCommandInput,
  GetDomainAssociationCommandOutput
} from "./commands/GetDomainAssociationCommand";
import {
  GetJobCommandInput,
  GetJobCommandOutput
} from "./commands/GetJobCommand";
import {
  GetWebhookCommandInput,
  GetWebhookCommandOutput
} from "./commands/GetWebhookCommand";
import {
  ListAppsCommandInput,
  ListAppsCommandOutput
} from "./commands/ListAppsCommand";
import {
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput
} from "./commands/ListArtifactsCommand";
import {
  ListBackendEnvironmentsCommandInput,
  ListBackendEnvironmentsCommandOutput
} from "./commands/ListBackendEnvironmentsCommand";
import {
  ListBranchesCommandInput,
  ListBranchesCommandOutput
} from "./commands/ListBranchesCommand";
import {
  ListDomainAssociationsCommandInput,
  ListDomainAssociationsCommandOutput
} from "./commands/ListDomainAssociationsCommand";
import {
  ListJobsCommandInput,
  ListJobsCommandOutput
} from "./commands/ListJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ListWebhooksCommandInput,
  ListWebhooksCommandOutput
} from "./commands/ListWebhooksCommand";
import {
  StartDeploymentCommandInput,
  StartDeploymentCommandOutput
} from "./commands/StartDeploymentCommand";
import {
  StartJobCommandInput,
  StartJobCommandOutput
} from "./commands/StartJobCommand";
import {
  StopJobCommandInput,
  StopJobCommandOutput
} from "./commands/StopJobCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateAppCommandInput,
  UpdateAppCommandOutput
} from "./commands/UpdateAppCommand";
import {
  UpdateBranchCommandInput,
  UpdateBranchCommandOutput
} from "./commands/UpdateBranchCommand";
import {
  UpdateDomainAssociationCommandInput,
  UpdateDomainAssociationCommandOutput
} from "./commands/UpdateDomainAssociationCommand";
import {
  UpdateWebhookCommandInput,
  UpdateWebhookCommandOutput
} from "./commands/UpdateWebhookCommand";
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
  | CreateAppCommandInput
  | CreateBackendEnvironmentCommandInput
  | CreateBranchCommandInput
  | CreateDeploymentCommandInput
  | CreateDomainAssociationCommandInput
  | CreateWebhookCommandInput
  | DeleteAppCommandInput
  | DeleteBackendEnvironmentCommandInput
  | DeleteBranchCommandInput
  | DeleteDomainAssociationCommandInput
  | DeleteJobCommandInput
  | DeleteWebhookCommandInput
  | GenerateAccessLogsCommandInput
  | GetAppCommandInput
  | GetArtifactUrlCommandInput
  | GetBackendEnvironmentCommandInput
  | GetBranchCommandInput
  | GetDomainAssociationCommandInput
  | GetJobCommandInput
  | GetWebhookCommandInput
  | ListAppsCommandInput
  | ListArtifactsCommandInput
  | ListBackendEnvironmentsCommandInput
  | ListBranchesCommandInput
  | ListDomainAssociationsCommandInput
  | ListJobsCommandInput
  | ListTagsForResourceCommandInput
  | ListWebhooksCommandInput
  | StartDeploymentCommandInput
  | StartJobCommandInput
  | StopJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAppCommandInput
  | UpdateBranchCommandInput
  | UpdateDomainAssociationCommandInput
  | UpdateWebhookCommandInput;

export type ServiceOutputTypes =
  | CreateAppCommandOutput
  | CreateBackendEnvironmentCommandOutput
  | CreateBranchCommandOutput
  | CreateDeploymentCommandOutput
  | CreateDomainAssociationCommandOutput
  | CreateWebhookCommandOutput
  | DeleteAppCommandOutput
  | DeleteBackendEnvironmentCommandOutput
  | DeleteBranchCommandOutput
  | DeleteDomainAssociationCommandOutput
  | DeleteJobCommandOutput
  | DeleteWebhookCommandOutput
  | GenerateAccessLogsCommandOutput
  | GetAppCommandOutput
  | GetArtifactUrlCommandOutput
  | GetBackendEnvironmentCommandOutput
  | GetBranchCommandOutput
  | GetDomainAssociationCommandOutput
  | GetJobCommandOutput
  | GetWebhookCommandOutput
  | ListAppsCommandOutput
  | ListArtifactsCommandOutput
  | ListBackendEnvironmentsCommandOutput
  | ListBranchesCommandOutput
  | ListDomainAssociationsCommandOutput
  | ListJobsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWebhooksCommandOutput
  | StartDeploymentCommandOutput
  | StartJobCommandOutput
  | StopJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAppCommandOutput
  | UpdateBranchCommandOutput
  | UpdateDomainAssociationCommandOutput
  | UpdateWebhookCommandOutput;

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

export type AmplifyClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type AmplifyClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>
 *             Amplify is a fully managed continuous deployment and hosting service for modern web apps.
 *         </p>
 */
export class AmplifyClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AmplifyClientResolvedConfig
> {
  readonly config: AmplifyClientResolvedConfig;

  constructor(configuration: AmplifyClientConfig) {
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
