import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import {
  CreateApplicationVersionCommandInput,
  CreateApplicationVersionCommandOutput,
} from "./commands/CreateApplicationVersionCommand";
import {
  CreateCloudFormationChangeSetCommandInput,
  CreateCloudFormationChangeSetCommandOutput,
} from "./commands/CreateCloudFormationChangeSetCommand";
import {
  CreateCloudFormationTemplateCommandInput,
  CreateCloudFormationTemplateCommandOutput,
} from "./commands/CreateCloudFormationTemplateCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import {
  GetApplicationPolicyCommandInput,
  GetApplicationPolicyCommandOutput,
} from "./commands/GetApplicationPolicyCommand";
import {
  GetCloudFormationTemplateCommandInput,
  GetCloudFormationTemplateCommandOutput,
} from "./commands/GetCloudFormationTemplateCommand";
import {
  ListApplicationDependenciesCommandInput,
  ListApplicationDependenciesCommandOutput,
} from "./commands/ListApplicationDependenciesCommand";
import {
  ListApplicationVersionsCommandInput,
  ListApplicationVersionsCommandOutput,
} from "./commands/ListApplicationVersionsCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import {
  PutApplicationPolicyCommandInput,
  PutApplicationPolicyCommandOutput,
} from "./commands/PutApplicationPolicyCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
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
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
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
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateApplicationCommandInput
  | CreateApplicationVersionCommandInput
  | CreateCloudFormationChangeSetCommandInput
  | CreateCloudFormationTemplateCommandInput
  | DeleteApplicationCommandInput
  | GetApplicationCommandInput
  | GetApplicationPolicyCommandInput
  | GetCloudFormationTemplateCommandInput
  | ListApplicationDependenciesCommandInput
  | ListApplicationVersionsCommandInput
  | ListApplicationsCommandInput
  | PutApplicationPolicyCommandInput
  | UpdateApplicationCommandInput;

export type ServiceOutputTypes =
  | CreateApplicationCommandOutput
  | CreateApplicationVersionCommandOutput
  | CreateCloudFormationChangeSetCommandOutput
  | CreateCloudFormationTemplateCommandOutput
  | DeleteApplicationCommandOutput
  | GetApplicationCommandOutput
  | GetApplicationPolicyCommandOutput
  | GetCloudFormationTemplateCommandOutput
  | ListApplicationDependenciesCommandOutput
  | ListApplicationVersionsCommandOutput
  | ListApplicationsCommandOutput
  | PutApplicationPolicyCommandOutput
  | UpdateApplicationCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ServerlessApplicationRepositoryClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ServerlessApplicationRepositoryClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>The AWS Serverless Application Repository makes it easy for developers and enterprises to quickly find
 *  and deploy serverless applications in the AWS Cloud. For more information about serverless applications,
 *  see Serverless Computing and Applications on the AWS website.</p><p>The AWS Serverless Application Repository is deeply integrated with the AWS Lambda console, so that developers of
 *  all levels can get started with serverless computing without needing to learn anything new. You can use category
 *  keywords to browse for applications such as web and mobile backends, data processing applications, or chatbots.
 *  You can also search for applications by name, publisher, or event source. To use an application, you simply choose it,
 *  configure any required fields, and deploy it with a few clicks. </p><p>You can also easily publish applications, sharing them publicly with the community at large, or privately
 *  within your team or across your organization. To publish a serverless application (or app), you can use the
 *  AWS Management Console, AWS Command Line Interface (AWS CLI), or AWS SDKs to upload the code. Along with the
 *  code, you upload a simple manifest file, also known as the AWS Serverless Application Model (AWS SAM) template.
 *  For more information about AWS SAM, see AWS Serverless Application Model (AWS SAM) on the AWS Labs
 *  GitHub repository.</p><p>The AWS Serverless Application Repository Developer Guide contains more information about the two developer
 *  experiences available:</p><ul>
 *  <li>
 *  <p>Consuming Applications – Browse for applications and view information about them, including
 *  source code and readme files. Also install, configure, and deploy applications of your choosing. </p>
 *  <p>Publishing Applications – Configure and upload applications to make them available to other
 *  developers, and publish new versions of applications. </p>
 *  </li>
 *  </ul>
 */
export class ServerlessApplicationRepositoryClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ServerlessApplicationRepositoryClientResolvedConfig
> {
  readonly config: ServerlessApplicationRepositoryClientResolvedConfig;

  constructor(configuration: ServerlessApplicationRepositoryClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
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
    super.destroy();
  }
}
