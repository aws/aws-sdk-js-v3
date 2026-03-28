// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultCodeDeployHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AddTagsToOnPremisesInstancesCommandInput,
  AddTagsToOnPremisesInstancesCommandOutput,
} from "./commands/AddTagsToOnPremisesInstancesCommand";
import type {
  BatchGetApplicationRevisionsCommandInput,
  BatchGetApplicationRevisionsCommandOutput,
} from "./commands/BatchGetApplicationRevisionsCommand";
import type {
  BatchGetApplicationsCommandInput,
  BatchGetApplicationsCommandOutput,
} from "./commands/BatchGetApplicationsCommand";
import type {
  BatchGetDeploymentGroupsCommandInput,
  BatchGetDeploymentGroupsCommandOutput,
} from "./commands/BatchGetDeploymentGroupsCommand";
import type {
  BatchGetDeploymentInstancesCommandInput,
  BatchGetDeploymentInstancesCommandOutput,
} from "./commands/BatchGetDeploymentInstancesCommand";
import type {
  BatchGetDeploymentsCommandInput,
  BatchGetDeploymentsCommandOutput,
} from "./commands/BatchGetDeploymentsCommand";
import type {
  BatchGetDeploymentTargetsCommandInput,
  BatchGetDeploymentTargetsCommandOutput,
} from "./commands/BatchGetDeploymentTargetsCommand";
import type {
  BatchGetOnPremisesInstancesCommandInput,
  BatchGetOnPremisesInstancesCommandOutput,
} from "./commands/BatchGetOnPremisesInstancesCommand";
import type {
  ContinueDeploymentCommandInput,
  ContinueDeploymentCommandOutput,
} from "./commands/ContinueDeploymentCommand";
import type {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import type { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "./commands/CreateDeploymentCommand";
import type {
  CreateDeploymentConfigCommandInput,
  CreateDeploymentConfigCommandOutput,
} from "./commands/CreateDeploymentConfigCommand";
import type {
  CreateDeploymentGroupCommandInput,
  CreateDeploymentGroupCommandOutput,
} from "./commands/CreateDeploymentGroupCommand";
import type {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import type {
  DeleteDeploymentConfigCommandInput,
  DeleteDeploymentConfigCommandOutput,
} from "./commands/DeleteDeploymentConfigCommand";
import type {
  DeleteDeploymentGroupCommandInput,
  DeleteDeploymentGroupCommandOutput,
} from "./commands/DeleteDeploymentGroupCommand";
import type {
  DeleteGitHubAccountTokenCommandInput,
  DeleteGitHubAccountTokenCommandOutput,
} from "./commands/DeleteGitHubAccountTokenCommand";
import type {
  DeleteResourcesByExternalIdCommandInput,
  DeleteResourcesByExternalIdCommandOutput,
} from "./commands/DeleteResourcesByExternalIdCommand";
import type {
  DeregisterOnPremisesInstanceCommandInput,
  DeregisterOnPremisesInstanceCommandOutput,
} from "./commands/DeregisterOnPremisesInstanceCommand";
import type { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import type {
  GetApplicationRevisionCommandInput,
  GetApplicationRevisionCommandOutput,
} from "./commands/GetApplicationRevisionCommand";
import type { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "./commands/GetDeploymentCommand";
import type {
  GetDeploymentConfigCommandInput,
  GetDeploymentConfigCommandOutput,
} from "./commands/GetDeploymentConfigCommand";
import type {
  GetDeploymentGroupCommandInput,
  GetDeploymentGroupCommandOutput,
} from "./commands/GetDeploymentGroupCommand";
import type {
  GetDeploymentInstanceCommandInput,
  GetDeploymentInstanceCommandOutput,
} from "./commands/GetDeploymentInstanceCommand";
import type {
  GetDeploymentTargetCommandInput,
  GetDeploymentTargetCommandOutput,
} from "./commands/GetDeploymentTargetCommand";
import type {
  GetOnPremisesInstanceCommandInput,
  GetOnPremisesInstanceCommandOutput,
} from "./commands/GetOnPremisesInstanceCommand";
import type {
  ListApplicationRevisionsCommandInput,
  ListApplicationRevisionsCommandOutput,
} from "./commands/ListApplicationRevisionsCommand";
import type { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import type {
  ListDeploymentConfigsCommandInput,
  ListDeploymentConfigsCommandOutput,
} from "./commands/ListDeploymentConfigsCommand";
import type {
  ListDeploymentGroupsCommandInput,
  ListDeploymentGroupsCommandOutput,
} from "./commands/ListDeploymentGroupsCommand";
import type {
  ListDeploymentInstancesCommandInput,
  ListDeploymentInstancesCommandOutput,
} from "./commands/ListDeploymentInstancesCommand";
import type { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "./commands/ListDeploymentsCommand";
import type {
  ListDeploymentTargetsCommandInput,
  ListDeploymentTargetsCommandOutput,
} from "./commands/ListDeploymentTargetsCommand";
import type {
  ListGitHubAccountTokenNamesCommandInput,
  ListGitHubAccountTokenNamesCommandOutput,
} from "./commands/ListGitHubAccountTokenNamesCommand";
import type {
  ListOnPremisesInstancesCommandInput,
  ListOnPremisesInstancesCommandOutput,
} from "./commands/ListOnPremisesInstancesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  PutLifecycleEventHookExecutionStatusCommandInput,
  PutLifecycleEventHookExecutionStatusCommandOutput,
} from "./commands/PutLifecycleEventHookExecutionStatusCommand";
import type {
  RegisterApplicationRevisionCommandInput,
  RegisterApplicationRevisionCommandOutput,
} from "./commands/RegisterApplicationRevisionCommand";
import type {
  RegisterOnPremisesInstanceCommandInput,
  RegisterOnPremisesInstanceCommandOutput,
} from "./commands/RegisterOnPremisesInstanceCommand";
import type {
  RemoveTagsFromOnPremisesInstancesCommandInput,
  RemoveTagsFromOnPremisesInstancesCommandOutput,
} from "./commands/RemoveTagsFromOnPremisesInstancesCommand";
import type {
  SkipWaitTimeForInstanceTerminationCommandInput,
  SkipWaitTimeForInstanceTerminationCommandOutput,
} from "./commands/SkipWaitTimeForInstanceTerminationCommand";
import type { StopDeploymentCommandInput, StopDeploymentCommandOutput } from "./commands/StopDeploymentCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import type {
  UpdateDeploymentGroupCommandInput,
  UpdateDeploymentGroupCommandOutput,
} from "./commands/UpdateDeploymentGroupCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AddTagsToOnPremisesInstancesCommandInput
  | BatchGetApplicationRevisionsCommandInput
  | BatchGetApplicationsCommandInput
  | BatchGetDeploymentGroupsCommandInput
  | BatchGetDeploymentInstancesCommandInput
  | BatchGetDeploymentTargetsCommandInput
  | BatchGetDeploymentsCommandInput
  | BatchGetOnPremisesInstancesCommandInput
  | ContinueDeploymentCommandInput
  | CreateApplicationCommandInput
  | CreateDeploymentCommandInput
  | CreateDeploymentConfigCommandInput
  | CreateDeploymentGroupCommandInput
  | DeleteApplicationCommandInput
  | DeleteDeploymentConfigCommandInput
  | DeleteDeploymentGroupCommandInput
  | DeleteGitHubAccountTokenCommandInput
  | DeleteResourcesByExternalIdCommandInput
  | DeregisterOnPremisesInstanceCommandInput
  | GetApplicationCommandInput
  | GetApplicationRevisionCommandInput
  | GetDeploymentCommandInput
  | GetDeploymentConfigCommandInput
  | GetDeploymentGroupCommandInput
  | GetDeploymentInstanceCommandInput
  | GetDeploymentTargetCommandInput
  | GetOnPremisesInstanceCommandInput
  | ListApplicationRevisionsCommandInput
  | ListApplicationsCommandInput
  | ListDeploymentConfigsCommandInput
  | ListDeploymentGroupsCommandInput
  | ListDeploymentInstancesCommandInput
  | ListDeploymentTargetsCommandInput
  | ListDeploymentsCommandInput
  | ListGitHubAccountTokenNamesCommandInput
  | ListOnPremisesInstancesCommandInput
  | ListTagsForResourceCommandInput
  | PutLifecycleEventHookExecutionStatusCommandInput
  | RegisterApplicationRevisionCommandInput
  | RegisterOnPremisesInstanceCommandInput
  | RemoveTagsFromOnPremisesInstancesCommandInput
  | SkipWaitTimeForInstanceTerminationCommandInput
  | StopDeploymentCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateDeploymentGroupCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddTagsToOnPremisesInstancesCommandOutput
  | BatchGetApplicationRevisionsCommandOutput
  | BatchGetApplicationsCommandOutput
  | BatchGetDeploymentGroupsCommandOutput
  | BatchGetDeploymentInstancesCommandOutput
  | BatchGetDeploymentTargetsCommandOutput
  | BatchGetDeploymentsCommandOutput
  | BatchGetOnPremisesInstancesCommandOutput
  | ContinueDeploymentCommandOutput
  | CreateApplicationCommandOutput
  | CreateDeploymentCommandOutput
  | CreateDeploymentConfigCommandOutput
  | CreateDeploymentGroupCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteDeploymentConfigCommandOutput
  | DeleteDeploymentGroupCommandOutput
  | DeleteGitHubAccountTokenCommandOutput
  | DeleteResourcesByExternalIdCommandOutput
  | DeregisterOnPremisesInstanceCommandOutput
  | GetApplicationCommandOutput
  | GetApplicationRevisionCommandOutput
  | GetDeploymentCommandOutput
  | GetDeploymentConfigCommandOutput
  | GetDeploymentGroupCommandOutput
  | GetDeploymentInstanceCommandOutput
  | GetDeploymentTargetCommandOutput
  | GetOnPremisesInstanceCommandOutput
  | ListApplicationRevisionsCommandOutput
  | ListApplicationsCommandOutput
  | ListDeploymentConfigsCommandOutput
  | ListDeploymentGroupsCommandOutput
  | ListDeploymentInstancesCommandOutput
  | ListDeploymentTargetsCommandOutput
  | ListDeploymentsCommandOutput
  | ListGitHubAccountTokenNamesCommandOutput
  | ListOnPremisesInstancesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutLifecycleEventHookExecutionStatusCommandOutput
  | RegisterApplicationRevisionCommandOutput
  | RegisterOnPremisesInstanceCommandOutput
  | RemoveTagsFromOnPremisesInstancesCommandOutput
  | SkipWaitTimeForInstanceTerminationCommandOutput
  | StopDeploymentCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateDeploymentGroupCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type CodeDeployClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CodeDeployClient class constructor that set the region, credentials and other options.
 */
export interface CodeDeployClientConfig extends CodeDeployClientConfigType {}

/**
 * @public
 */
export type CodeDeployClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CodeDeployClient class. This is resolved and normalized from the {@link CodeDeployClientConfig | constructor configuration interface}.
 */
export interface CodeDeployClientResolvedConfig extends CodeDeployClientResolvedConfigType {}

/**
 * <p>CodeDeploy is a deployment service that automates application deployments
 *             to Amazon EC2 instances, on-premises instances running in your own facility,
 *             serverless Lambda functions, or applications in an Amazon ECS
 *             service.</p>
 *          <p>You can deploy a nearly unlimited variety of application content, such as an updated
 *                 Lambda function, updated applications in an Amazon ECS service,
 *             code, web and configuration files, executables, packages, scripts, multimedia files, and
 *             so on. CodeDeploy can deploy application content stored in Amazon S3
 *             buckets, GitHub repositories, or Bitbucket repositories. You do not need to make changes
 *             to your existing code before you can use CodeDeploy.</p>
 *          <p>CodeDeploy makes it easier for you to rapidly release new features, helps
 *             you avoid downtime during application deployment, and handles the complexity of updating
 *             your applications, without many of the risks associated with error-prone manual
 *             deployments.</p>
 *          <p>
 *             <b>CodeDeploy Components</b>
 *          </p>
 *          <p>Use the information in this guide to help you work with the following CodeDeploy components:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Application</b>: A name that uniquely identifies
 *                     the application you want to deploy. CodeDeploy uses this name, which
 *                     functions as a container, to ensure the correct combination of revision,
 *                     deployment configuration, and deployment group are referenced during a
 *                     deployment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Deployment group</b>: A set of individual
 *                     instances, CodeDeploy
 *                     Lambda deployment configuration settings, or an Amazon ECS
 *                     service and network details. A Lambda deployment group specifies how
 *                     to route traffic to a new version of a Lambda function. An Amazon ECS deployment group specifies the service created in Amazon ECS to deploy, a load balancer, and a listener to reroute production
 *                     traffic to an updated containerized application. An Amazon EC2/On-premises deployment group contains individually tagged instances, Amazon EC2 instances in Amazon EC2 Auto Scaling groups, or both. All
 *                     deployment groups can specify optional trigger, alarm, and rollback
 *                     settings.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Deployment configuration</b>: A set of deployment
 *                     rules and deployment success and failure conditions used by CodeDeploy during a deployment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Deployment</b>: The process and the components used
 *                     when updating a Lambda function, a containerized application in an
 *                         Amazon ECS service, or of installing content on one or more
 *                     instances. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Application revisions</b>: For an Lambda deployment, this is an AppSpec file that specifies the
 *                         Lambda function to be updated and one or more functions to
 *                     validate deployment lifecycle events. For an Amazon ECS deployment, this
 *                     is an AppSpec file that specifies the Amazon ECS task definition,
 *                     container, and port where production traffic is rerouted. For an EC2/On-premises
 *                     deployment, this is an archive file that contains source content—source code,
 *                     webpages, executable files, and deployment scripts—along with an AppSpec file.
 *                     Revisions are stored in Amazon S3 buckets or GitHub repositories. For
 *                         Amazon S3, a revision is uniquely identified by its Amazon S3 object key and its ETag, version, or both. For GitHub, a revision is uniquely
 *                     identified by its commit ID.</p>
 *             </li>
 *          </ul>
 *          <p>This guide also contains information to help you get details about the instances in
 *             your deployments, to make on-premises instances available for CodeDeploy
 *             deployments, to get details about a Lambda function deployment, and to get
 *             details about Amazon ECS service deployments.</p>
 *          <p>
 *             <b>CodeDeploy Information Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/userguide">CodeDeploy User Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/codedeploy/latest/APIReference/">CodeDeploy API Reference Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/deploy/index.html">CLI Reference for CodeDeploy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://forums.aws.amazon.com/forum.jspa?forumID=179">CodeDeploy Developer Forum</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class CodeDeployClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeDeployClientResolvedConfig
> {
  /**
   * The resolved configuration of CodeDeployClient class. This is resolved and normalized from the {@link CodeDeployClientConfig | constructor configuration interface}.
   */
  readonly config: CodeDeployClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CodeDeployClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultCodeDeployHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CodeDeployClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
