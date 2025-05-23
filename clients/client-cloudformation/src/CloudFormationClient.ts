// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultCloudFormationHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  ActivateOrganizationsAccessCommandInput,
  ActivateOrganizationsAccessCommandOutput,
} from "./commands/ActivateOrganizationsAccessCommand";
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
import {
  CreateGeneratedTemplateCommandInput,
  CreateGeneratedTemplateCommandOutput,
} from "./commands/CreateGeneratedTemplateCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import {
  CreateStackInstancesCommandInput,
  CreateStackInstancesCommandOutput,
} from "./commands/CreateStackInstancesCommand";
import {
  CreateStackRefactorCommandInput,
  CreateStackRefactorCommandOutput,
} from "./commands/CreateStackRefactorCommand";
import { CreateStackSetCommandInput, CreateStackSetCommandOutput } from "./commands/CreateStackSetCommand";
import {
  DeactivateOrganizationsAccessCommandInput,
  DeactivateOrganizationsAccessCommandOutput,
} from "./commands/DeactivateOrganizationsAccessCommand";
import { DeactivateTypeCommandInput, DeactivateTypeCommandOutput } from "./commands/DeactivateTypeCommand";
import { DeleteChangeSetCommandInput, DeleteChangeSetCommandOutput } from "./commands/DeleteChangeSetCommand";
import {
  DeleteGeneratedTemplateCommandInput,
  DeleteGeneratedTemplateCommandOutput,
} from "./commands/DeleteGeneratedTemplateCommand";
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
import {
  DescribeGeneratedTemplateCommandInput,
  DescribeGeneratedTemplateCommandOutput,
} from "./commands/DescribeGeneratedTemplateCommand";
import {
  DescribeOrganizationsAccessCommandInput,
  DescribeOrganizationsAccessCommandOutput,
} from "./commands/DescribeOrganizationsAccessCommand";
import { DescribePublisherCommandInput, DescribePublisherCommandOutput } from "./commands/DescribePublisherCommand";
import {
  DescribeResourceScanCommandInput,
  DescribeResourceScanCommandOutput,
} from "./commands/DescribeResourceScanCommand";
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
  DescribeStackRefactorCommandInput,
  DescribeStackRefactorCommandOutput,
} from "./commands/DescribeStackRefactorCommand";
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
import {
  ExecuteStackRefactorCommandInput,
  ExecuteStackRefactorCommandOutput,
} from "./commands/ExecuteStackRefactorCommand";
import {
  GetGeneratedTemplateCommandInput,
  GetGeneratedTemplateCommandOutput,
} from "./commands/GetGeneratedTemplateCommand";
import { GetStackPolicyCommandInput, GetStackPolicyCommandOutput } from "./commands/GetStackPolicyCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import { GetTemplateSummaryCommandInput, GetTemplateSummaryCommandOutput } from "./commands/GetTemplateSummaryCommand";
import {
  ImportStacksToStackSetCommandInput,
  ImportStacksToStackSetCommandOutput,
} from "./commands/ImportStacksToStackSetCommand";
import { ListChangeSetsCommandInput, ListChangeSetsCommandOutput } from "./commands/ListChangeSetsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "./commands/ListExportsCommand";
import {
  ListGeneratedTemplatesCommandInput,
  ListGeneratedTemplatesCommandOutput,
} from "./commands/ListGeneratedTemplatesCommand";
import { ListHookResultsCommandInput, ListHookResultsCommandOutput } from "./commands/ListHookResultsCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "./commands/ListImportsCommand";
import {
  ListResourceScanRelatedResourcesCommandInput,
  ListResourceScanRelatedResourcesCommandOutput,
} from "./commands/ListResourceScanRelatedResourcesCommand";
import {
  ListResourceScanResourcesCommandInput,
  ListResourceScanResourcesCommandOutput,
} from "./commands/ListResourceScanResourcesCommand";
import { ListResourceScansCommandInput, ListResourceScansCommandOutput } from "./commands/ListResourceScansCommand";
import {
  ListStackInstanceResourceDriftsCommandInput,
  ListStackInstanceResourceDriftsCommandOutput,
} from "./commands/ListStackInstanceResourceDriftsCommand";
import { ListStackInstancesCommandInput, ListStackInstancesCommandOutput } from "./commands/ListStackInstancesCommand";
import {
  ListStackRefactorActionsCommandInput,
  ListStackRefactorActionsCommandOutput,
} from "./commands/ListStackRefactorActionsCommand";
import { ListStackRefactorsCommandInput, ListStackRefactorsCommandOutput } from "./commands/ListStackRefactorsCommand";
import { ListStackResourcesCommandInput, ListStackResourcesCommandOutput } from "./commands/ListStackResourcesCommand";
import { ListStacksCommandInput, ListStacksCommandOutput } from "./commands/ListStacksCommand";
import {
  ListStackSetAutoDeploymentTargetsCommandInput,
  ListStackSetAutoDeploymentTargetsCommandOutput,
} from "./commands/ListStackSetAutoDeploymentTargetsCommand";
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
import { StartResourceScanCommandInput, StartResourceScanCommandOutput } from "./commands/StartResourceScanCommand";
import {
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput,
} from "./commands/StopStackSetOperationCommand";
import { TestTypeCommandInput, TestTypeCommandOutput } from "./commands/TestTypeCommand";
import {
  UpdateGeneratedTemplateCommandInput,
  UpdateGeneratedTemplateCommandOutput,
} from "./commands/UpdateGeneratedTemplateCommand";
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
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | ActivateOrganizationsAccessCommandInput
  | ActivateTypeCommandInput
  | BatchDescribeTypeConfigurationsCommandInput
  | CancelUpdateStackCommandInput
  | ContinueUpdateRollbackCommandInput
  | CreateChangeSetCommandInput
  | CreateGeneratedTemplateCommandInput
  | CreateStackCommandInput
  | CreateStackInstancesCommandInput
  | CreateStackRefactorCommandInput
  | CreateStackSetCommandInput
  | DeactivateOrganizationsAccessCommandInput
  | DeactivateTypeCommandInput
  | DeleteChangeSetCommandInput
  | DeleteGeneratedTemplateCommandInput
  | DeleteStackCommandInput
  | DeleteStackInstancesCommandInput
  | DeleteStackSetCommandInput
  | DeregisterTypeCommandInput
  | DescribeAccountLimitsCommandInput
  | DescribeChangeSetCommandInput
  | DescribeChangeSetHooksCommandInput
  | DescribeGeneratedTemplateCommandInput
  | DescribeOrganizationsAccessCommandInput
  | DescribePublisherCommandInput
  | DescribeResourceScanCommandInput
  | DescribeStackDriftDetectionStatusCommandInput
  | DescribeStackEventsCommandInput
  | DescribeStackInstanceCommandInput
  | DescribeStackRefactorCommandInput
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
  | ExecuteStackRefactorCommandInput
  | GetGeneratedTemplateCommandInput
  | GetStackPolicyCommandInput
  | GetTemplateCommandInput
  | GetTemplateSummaryCommandInput
  | ImportStacksToStackSetCommandInput
  | ListChangeSetsCommandInput
  | ListExportsCommandInput
  | ListGeneratedTemplatesCommandInput
  | ListHookResultsCommandInput
  | ListImportsCommandInput
  | ListResourceScanRelatedResourcesCommandInput
  | ListResourceScanResourcesCommandInput
  | ListResourceScansCommandInput
  | ListStackInstanceResourceDriftsCommandInput
  | ListStackInstancesCommandInput
  | ListStackRefactorActionsCommandInput
  | ListStackRefactorsCommandInput
  | ListStackResourcesCommandInput
  | ListStackSetAutoDeploymentTargetsCommandInput
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
  | StartResourceScanCommandInput
  | StopStackSetOperationCommandInput
  | TestTypeCommandInput
  | UpdateGeneratedTemplateCommandInput
  | UpdateStackCommandInput
  | UpdateStackInstancesCommandInput
  | UpdateStackSetCommandInput
  | UpdateTerminationProtectionCommandInput
  | ValidateTemplateCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | ActivateOrganizationsAccessCommandOutput
  | ActivateTypeCommandOutput
  | BatchDescribeTypeConfigurationsCommandOutput
  | CancelUpdateStackCommandOutput
  | ContinueUpdateRollbackCommandOutput
  | CreateChangeSetCommandOutput
  | CreateGeneratedTemplateCommandOutput
  | CreateStackCommandOutput
  | CreateStackInstancesCommandOutput
  | CreateStackRefactorCommandOutput
  | CreateStackSetCommandOutput
  | DeactivateOrganizationsAccessCommandOutput
  | DeactivateTypeCommandOutput
  | DeleteChangeSetCommandOutput
  | DeleteGeneratedTemplateCommandOutput
  | DeleteStackCommandOutput
  | DeleteStackInstancesCommandOutput
  | DeleteStackSetCommandOutput
  | DeregisterTypeCommandOutput
  | DescribeAccountLimitsCommandOutput
  | DescribeChangeSetCommandOutput
  | DescribeChangeSetHooksCommandOutput
  | DescribeGeneratedTemplateCommandOutput
  | DescribeOrganizationsAccessCommandOutput
  | DescribePublisherCommandOutput
  | DescribeResourceScanCommandOutput
  | DescribeStackDriftDetectionStatusCommandOutput
  | DescribeStackEventsCommandOutput
  | DescribeStackInstanceCommandOutput
  | DescribeStackRefactorCommandOutput
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
  | ExecuteStackRefactorCommandOutput
  | GetGeneratedTemplateCommandOutput
  | GetStackPolicyCommandOutput
  | GetTemplateCommandOutput
  | GetTemplateSummaryCommandOutput
  | ImportStacksToStackSetCommandOutput
  | ListChangeSetsCommandOutput
  | ListExportsCommandOutput
  | ListGeneratedTemplatesCommandOutput
  | ListHookResultsCommandOutput
  | ListImportsCommandOutput
  | ListResourceScanRelatedResourcesCommandOutput
  | ListResourceScanResourcesCommandOutput
  | ListResourceScansCommandOutput
  | ListStackInstanceResourceDriftsCommandOutput
  | ListStackInstancesCommandOutput
  | ListStackRefactorActionsCommandOutput
  | ListStackRefactorsCommandOutput
  | ListStackResourcesCommandOutput
  | ListStackSetAutoDeploymentTargetsCommandOutput
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
  | StartResourceScanCommandOutput
  | StopStackSetOperationCommandOutput
  | TestTypeCommandOutput
  | UpdateGeneratedTemplateCommandOutput
  | UpdateStackCommandOutput
  | UpdateStackInstancesCommandOutput
  | UpdateStackSetCommandOutput
  | UpdateTerminationProtectionCommandOutput
  | ValidateTemplateCommandOutput;

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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
export type CloudFormationClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CloudFormationClient class constructor that set the region, credentials and other options.
 */
export interface CloudFormationClientConfig extends CloudFormationClientConfigType {}

/**
 * @public
 */
export type CloudFormationClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CloudFormationClient class. This is resolved and normalized from the {@link CloudFormationClientConfig | constructor configuration interface}.
 */
export interface CloudFormationClientResolvedConfig extends CloudFormationClientResolvedConfigType {}

/**
 * <fullname>CloudFormation</fullname>
 *          <p>CloudFormation allows you to create and manage Amazon Web Services infrastructure deployments predictably and
 *    repeatedly. You can use CloudFormation to leverage Amazon Web Services products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store,
 *    Amazon Simple Notification Service, Elastic Load Balancing, and Amazon EC2 Auto Scaling to build highly reliable, highly scalable, cost-effective
 *    applications without creating or configuring the underlying Amazon Web Services infrastructure.</p>
 *          <p>With CloudFormation, you declare all your resources and dependencies in a template file. The
 *    template defines a collection of resources as a single unit called a stack. CloudFormation creates
 *    and deletes all member resources of the stack together and manages all dependencies between the
 *    resources for you.</p>
 *          <p>For more information about CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">CloudFormation product page</a>.</p>
 *          <p>CloudFormation makes use of other Amazon Web Services products. If you need additional technical information
 *    about a specific Amazon Web Services product, you can find the product's technical documentation at <a href="https://docs.aws.amazon.com/">docs.aws.amazon.com</a>.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<CloudFormationClientConfig>) {
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
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultCloudFormationHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CloudFormationClientResolvedConfig) =>
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
