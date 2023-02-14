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

import { ActivateTypeCommandInput, ActivateTypeCommandOutput } from "./commands/ActivateTypeCommand";
import {
  BatchDescribeTypeConfigurationsCommandInput,
  BatchDescribeTypeConfigurationsCommandOutput,
} from "./commands/BatchDescribeTypeConfigurationsCommand";
import { CancelUpdateStackCommandInput, CancelUpdateStackCommandOutput } from "./commands/CancelUpdateStackCommand";
import {
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput,
} from "./commands/ContinueUpdateRollbackCommand";
import { CreateChangeSetCommandInput, CreateChangeSetCommandOutput } from "./commands/CreateChangeSetCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import {
  CreateStackInstancesCommandInput,
  CreateStackInstancesCommandOutput,
} from "./commands/CreateStackInstancesCommand";
import { CreateStackSetCommandInput, CreateStackSetCommandOutput } from "./commands/CreateStackSetCommand";
import { DeactivateTypeCommandInput, DeactivateTypeCommandOutput } from "./commands/DeactivateTypeCommand";
import { DeleteChangeSetCommandInput, DeleteChangeSetCommandOutput } from "./commands/DeleteChangeSetCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import {
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput,
} from "./commands/DeleteStackInstancesCommand";
import { DeleteStackSetCommandInput, DeleteStackSetCommandOutput } from "./commands/DeleteStackSetCommand";
import { DeregisterTypeCommandInput, DeregisterTypeCommandOutput } from "./commands/DeregisterTypeCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import { DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput } from "./commands/DescribeChangeSetCommand";
import {
  DescribeChangeSetHooksCommandInput,
  DescribeChangeSetHooksCommandOutput,
} from "./commands/DescribeChangeSetHooksCommand";
import { DescribePublisherCommandInput, DescribePublisherCommandOutput } from "./commands/DescribePublisherCommand";
import {
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput,
} from "./commands/DescribeStackDriftDetectionStatusCommand";
import {
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
} from "./commands/DescribeStackEventsCommand";
import {
  DescribeStackInstanceCommandInput,
  DescribeStackInstanceCommandOutput,
} from "./commands/DescribeStackInstanceCommand";
import {
  DescribeStackResourceCommandInput,
  DescribeStackResourceCommandOutput,
} from "./commands/DescribeStackResourceCommand";
import {
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
} from "./commands/DescribeStackResourceDriftsCommand";
import {
  DescribeStackResourcesCommandInput,
  DescribeStackResourcesCommandOutput,
} from "./commands/DescribeStackResourcesCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "./commands/DescribeStacksCommand";
import { DescribeStackSetCommandInput, DescribeStackSetCommandOutput } from "./commands/DescribeStackSetCommand";
import {
  DescribeStackSetOperationCommandInput,
  DescribeStackSetOperationCommandOutput,
} from "./commands/DescribeStackSetOperationCommand";
import { DescribeTypeCommandInput, DescribeTypeCommandOutput } from "./commands/DescribeTypeCommand";
import {
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput,
} from "./commands/DescribeTypeRegistrationCommand";
import { DetectStackDriftCommandInput, DetectStackDriftCommandOutput } from "./commands/DetectStackDriftCommand";
import {
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput,
} from "./commands/DetectStackResourceDriftCommand";
import {
  DetectStackSetDriftCommandInput,
  DetectStackSetDriftCommandOutput,
} from "./commands/DetectStackSetDriftCommand";
import {
  EstimateTemplateCostCommandInput,
  EstimateTemplateCostCommandOutput,
} from "./commands/EstimateTemplateCostCommand";
import { ExecuteChangeSetCommandInput, ExecuteChangeSetCommandOutput } from "./commands/ExecuteChangeSetCommand";
import { GetStackPolicyCommandInput, GetStackPolicyCommandOutput } from "./commands/GetStackPolicyCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import { GetTemplateSummaryCommandInput, GetTemplateSummaryCommandOutput } from "./commands/GetTemplateSummaryCommand";
import {
  ImportStacksToStackSetCommandInput,
  ImportStacksToStackSetCommandOutput,
} from "./commands/ImportStacksToStackSetCommand";
import { ListChangeSetsCommandInput, ListChangeSetsCommandOutput } from "./commands/ListChangeSetsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import { ListStackInstancesCommandInput, ListStackInstancesCommandOutput } from "./commands/ListStackInstancesCommand";
import { ListStackResourcesCommandInput, ListStackResourcesCommandOutput } from "./commands/ListStackResourcesCommand";
import { ListStacksCommandInput, ListStacksCommandOutput } from "./commands/ListStacksCommand";
import {
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
} from "./commands/ListStackSetOperationResultsCommand";
import {
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
} from "./commands/ListStackSetOperationsCommand";
import { ListStackSetsCommandInput, ListStackSetsCommandOutput } from "./commands/ListStackSetsCommand";
import {
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
} from "./commands/ListTypeRegistrationsCommand";
import { ListTypesCommandInput, ListTypesCommandOutput } from "./commands/ListTypesCommand";
import { ListTypeVersionsCommandInput, ListTypeVersionsCommandOutput } from "./commands/ListTypeVersionsCommand";
import { PublishTypeCommandInput, PublishTypeCommandOutput } from "./commands/PublishTypeCommand";
import {
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput,
} from "./commands/RecordHandlerProgressCommand";
import { RegisterPublisherCommandInput, RegisterPublisherCommandOutput } from "./commands/RegisterPublisherCommand";
import { RegisterTypeCommandInput, RegisterTypeCommandOutput } from "./commands/RegisterTypeCommand";
import { RollbackStackCommandInput, RollbackStackCommandOutput } from "./commands/RollbackStackCommand";
import { SetStackPolicyCommandInput, SetStackPolicyCommandOutput } from "./commands/SetStackPolicyCommand";
import {
  SetTypeConfigurationCommandInput,
  SetTypeConfigurationCommandOutput,
} from "./commands/SetTypeConfigurationCommand";
import {
  SetTypeDefaultVersionCommandInput,
  SetTypeDefaultVersionCommandOutput,
} from "./commands/SetTypeDefaultVersionCommand";
import { SignalResourceCommandInput, SignalResourceCommandOutput } from "./commands/SignalResourceCommand";
import {
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput,
} from "./commands/StopStackSetOperationCommand";
import { TestTypeCommandInput, TestTypeCommandOutput } from "./commands/TestTypeCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import {
  UpdateStackInstancesCommandInput,
  UpdateStackInstancesCommandOutput,
} from "./commands/UpdateStackInstancesCommand";
import { UpdateStackSetCommandInput, UpdateStackSetCommandOutput } from "./commands/UpdateStackSetCommand";
import {
  UpdateTerminationProtectionCommandInput,
  UpdateTerminationProtectionCommandOutput,
} from "./commands/UpdateTerminationProtectionCommand";
import { ValidateTemplateCommandInput, ValidateTemplateCommandOutput } from "./commands/ValidateTemplateCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | ActivateTypeCommandInput
  | BatchDescribeTypeConfigurationsCommandInput
  | CancelUpdateStackCommandInput
  | ContinueUpdateRollbackCommandInput
  | CreateChangeSetCommandInput
  | CreateStackCommandInput
  | CreateStackInstancesCommandInput
  | CreateStackSetCommandInput
  | DeactivateTypeCommandInput
  | DeleteChangeSetCommandInput
  | DeleteStackCommandInput
  | DeleteStackInstancesCommandInput
  | DeleteStackSetCommandInput
  | DeregisterTypeCommandInput
  | DescribeAccountLimitsCommandInput
  | DescribeChangeSetCommandInput
  | DescribeChangeSetHooksCommandInput
  | DescribePublisherCommandInput
  | DescribeStackDriftDetectionStatusCommandInput
  | DescribeStackEventsCommandInput
  | DescribeStackInstanceCommandInput
  | DescribeStackResourceCommandInput
  | DescribeStackResourceDriftsCommandInput
  | DescribeStackResourcesCommandInput
  | DescribeStackSetCommandInput
  | DescribeStackSetOperationCommandInput
  | DescribeStacksCommandInput
  | DescribeTypeCommandInput
  | DescribeTypeRegistrationCommandInput
  | DetectStackDriftCommandInput
  | DetectStackResourceDriftCommandInput
  | DetectStackSetDriftCommandInput
  | EstimateTemplateCostCommandInput
  | ExecuteChangeSetCommandInput
  | GetStackPolicyCommandInput
  | GetTemplateCommandInput
  | GetTemplateSummaryCommandInput
  | ImportStacksToStackSetCommandInput
  | ListChangeSetsCommandInput
  | ListExportsCommandInput
  | ListImportsCommandInput
  | ListStackInstancesCommandInput
  | ListStackResourcesCommandInput
  | ListStackSetOperationResultsCommandInput
  | ListStackSetOperationsCommandInput
  | ListStackSetsCommandInput
  | ListStacksCommandInput
  | ListTypeRegistrationsCommandInput
  | ListTypeVersionsCommandInput
  | ListTypesCommandInput
  | PublishTypeCommandInput
  | RecordHandlerProgressCommandInput
  | RegisterPublisherCommandInput
  | RegisterTypeCommandInput
  | RollbackStackCommandInput
  | SetStackPolicyCommandInput
  | SetTypeConfigurationCommandInput
  | SetTypeDefaultVersionCommandInput
  | SignalResourceCommandInput
  | StopStackSetOperationCommandInput
  | TestTypeCommandInput
  | UpdateStackCommandInput
  | UpdateStackInstancesCommandInput
  | UpdateStackSetCommandInput
  | UpdateTerminationProtectionCommandInput
  | ValidateTemplateCommandInput;

export type ServiceOutputTypes =
  | ActivateTypeCommandOutput
  | BatchDescribeTypeConfigurationsCommandOutput
  | CancelUpdateStackCommandOutput
  | ContinueUpdateRollbackCommandOutput
  | CreateChangeSetCommandOutput
  | CreateStackCommandOutput
  | CreateStackInstancesCommandOutput
  | CreateStackSetCommandOutput
  | DeactivateTypeCommandOutput
  | DeleteChangeSetCommandOutput
  | DeleteStackCommandOutput
  | DeleteStackInstancesCommandOutput
  | DeleteStackSetCommandOutput
  | DeregisterTypeCommandOutput
  | DescribeAccountLimitsCommandOutput
  | DescribeChangeSetCommandOutput
  | DescribeChangeSetHooksCommandOutput
  | DescribePublisherCommandOutput
  | DescribeStackDriftDetectionStatusCommandOutput
  | DescribeStackEventsCommandOutput
  | DescribeStackInstanceCommandOutput
  | DescribeStackResourceCommandOutput
  | DescribeStackResourceDriftsCommandOutput
  | DescribeStackResourcesCommandOutput
  | DescribeStackSetCommandOutput
  | DescribeStackSetOperationCommandOutput
  | DescribeStacksCommandOutput
  | DescribeTypeCommandOutput
  | DescribeTypeRegistrationCommandOutput
  | DetectStackDriftCommandOutput
  | DetectStackResourceDriftCommandOutput
  | DetectStackSetDriftCommandOutput
  | EstimateTemplateCostCommandOutput
  | ExecuteChangeSetCommandOutput
  | GetStackPolicyCommandOutput
  | GetTemplateCommandOutput
  | GetTemplateSummaryCommandOutput
  | ImportStacksToStackSetCommandOutput
  | ListChangeSetsCommandOutput
  | ListExportsCommandOutput
  | ListImportsCommandOutput
  | ListStackInstancesCommandOutput
  | ListStackResourcesCommandOutput
  | ListStackSetOperationResultsCommandOutput
  | ListStackSetOperationsCommandOutput
  | ListStackSetsCommandOutput
  | ListStacksCommandOutput
  | ListTypeRegistrationsCommandOutput
  | ListTypeVersionsCommandOutput
  | ListTypesCommandOutput
  | PublishTypeCommandOutput
  | RecordHandlerProgressCommandOutput
  | RegisterPublisherCommandOutput
  | RegisterTypeCommandOutput
  | RollbackStackCommandOutput
  | SetStackPolicyCommandOutput
  | SetTypeConfigurationCommandOutput
  | SetTypeDefaultVersionCommandOutput
  | SignalResourceCommandOutput
  | StopStackSetOperationCommandOutput
  | TestTypeCommandOutput
  | UpdateStackCommandOutput
  | UpdateStackInstancesCommandOutput
  | UpdateStackSetCommandOutput
  | UpdateTerminationProtectionCommandOutput
  | ValidateTemplateCommandOutput;

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

type CloudFormationClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of CloudFormationClient class constructor that set the region, credentials and other options.
 */
export interface CloudFormationClientConfig extends CloudFormationClientConfigType {}

type CloudFormationClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of CloudFormationClient class. This is resolved and normalized from the {@link CloudFormationClientConfig | constructor configuration interface}.
 */
export interface CloudFormationClientResolvedConfig extends CloudFormationClientResolvedConfigType {}

/**
 * <fullname>CloudFormation</fullname>
 *          <p>CloudFormation allows you to create and manage Amazon Web Services infrastructure
 *          deployments predictably and repeatedly. You can use CloudFormation to leverage
 *             Amazon Web Services products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store,
 *             Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build highly
 *          reliable, highly scalable, cost-effective applications without creating or configuring the
 *          underlying Amazon Web Services infrastructure.</p>
 *          <p>With CloudFormation, you declare all your resources and dependencies in a template
 *          file. The template defines a collection of resources as a single unit called a stack.
 *             CloudFormation creates and deletes all member resources of the stack together and
 *          manages all dependencies between the resources for you.</p>
 *          <p>For more information about CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">CloudFormation product page</a>.</p>
 *          <p>CloudFormation makes use of other Amazon Web Services products. If you need
 *          additional technical information about a specific Amazon Web Services product, you can find
 *          the product's technical documentation at <a href="https://docs.aws.amazon.com/">
 *                <code>docs.aws.amazon.com</code>
 *             </a>.</p>
 */
export class CloudFormationClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudFormationClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudFormationClient class. This is resolved and normalized from the {@link CloudFormationClientConfig | constructor configuration interface}.
   */
  readonly config: CloudFormationClientResolvedConfig;

  constructor(configuration: CloudFormationClientConfig) {
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
