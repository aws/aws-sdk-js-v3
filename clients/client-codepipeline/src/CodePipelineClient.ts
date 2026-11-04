// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  defaultCodePipelineHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AcknowledgeJobCommandInput, AcknowledgeJobCommandOutput } from "./commands/AcknowledgeJobCommand";
import type {
  AcknowledgeThirdPartyJobCommandInput,
  AcknowledgeThirdPartyJobCommandOutput,
} from "./commands/AcknowledgeThirdPartyJobCommand";
import type {
  CreateCustomActionTypeCommandInput,
  CreateCustomActionTypeCommandOutput,
} from "./commands/CreateCustomActionTypeCommand";
import type { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand";
import type {
  DeleteCustomActionTypeCommandInput,
  DeleteCustomActionTypeCommandOutput,
} from "./commands/DeleteCustomActionTypeCommand";
import type { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand";
import type { DeleteWebhookCommandInput, DeleteWebhookCommandOutput } from "./commands/DeleteWebhookCommand";
import type {
  DeregisterWebhookWithThirdPartyCommandInput,
  DeregisterWebhookWithThirdPartyCommandOutput,
} from "./commands/DeregisterWebhookWithThirdPartyCommand";
import type {
  DisableStageTransitionCommandInput,
  DisableStageTransitionCommandOutput,
} from "./commands/DisableStageTransitionCommand";
import type {
  EnableStageTransitionCommandInput,
  EnableStageTransitionCommandOutput,
} from "./commands/EnableStageTransitionCommand";
import type { GetActionTypeCommandInput, GetActionTypeCommandOutput } from "./commands/GetActionTypeCommand";
import type { GetJobDetailsCommandInput, GetJobDetailsCommandOutput } from "./commands/GetJobDetailsCommand";
import type { GetPipelineCommandInput, GetPipelineCommandOutput } from "./commands/GetPipelineCommand";
import type {
  GetPipelineExecutionCommandInput,
  GetPipelineExecutionCommandOutput,
} from "./commands/GetPipelineExecutionCommand";
import type { GetPipelineStateCommandInput, GetPipelineStateCommandOutput } from "./commands/GetPipelineStateCommand";
import type {
  GetThirdPartyJobDetailsCommandInput,
  GetThirdPartyJobDetailsCommandOutput,
} from "./commands/GetThirdPartyJobDetailsCommand";
import type {
  ListActionExecutionsCommandInput,
  ListActionExecutionsCommandOutput,
} from "./commands/ListActionExecutionsCommand";
import type { ListActionTypesCommandInput, ListActionTypesCommandOutput } from "./commands/ListActionTypesCommand";
import type {
  ListDeployActionExecutionTargetsCommandInput,
  ListDeployActionExecutionTargetsCommandOutput,
} from "./commands/ListDeployActionExecutionTargetsCommand";
import type {
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "./commands/ListPipelineExecutionsCommand";
import type { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand";
import type {
  ListRuleExecutionsCommandInput,
  ListRuleExecutionsCommandOutput,
} from "./commands/ListRuleExecutionsCommand";
import type { ListRuleTypesCommandInput, ListRuleTypesCommandOutput } from "./commands/ListRuleTypesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListWebhooksCommandInput, ListWebhooksCommandOutput } from "./commands/ListWebhooksCommand";
import type {
  OverrideStageConditionCommandInput,
  OverrideStageConditionCommandOutput,
} from "./commands/OverrideStageConditionCommand";
import type { PollForJobsCommandInput, PollForJobsCommandOutput } from "./commands/PollForJobsCommand";
import type {
  PollForThirdPartyJobsCommandInput,
  PollForThirdPartyJobsCommandOutput,
} from "./commands/PollForThirdPartyJobsCommand";
import type {
  PutActionRevisionCommandInput,
  PutActionRevisionCommandOutput,
} from "./commands/PutActionRevisionCommand";
import type {
  PutApprovalResultCommandInput,
  PutApprovalResultCommandOutput,
} from "./commands/PutApprovalResultCommand";
import type {
  PutJobFailureResultCommandInput,
  PutJobFailureResultCommandOutput,
} from "./commands/PutJobFailureResultCommand";
import type {
  PutJobSuccessResultCommandInput,
  PutJobSuccessResultCommandOutput,
} from "./commands/PutJobSuccessResultCommand";
import type {
  PutThirdPartyJobFailureResultCommandInput,
  PutThirdPartyJobFailureResultCommandOutput,
} from "./commands/PutThirdPartyJobFailureResultCommand";
import type {
  PutThirdPartyJobSuccessResultCommandInput,
  PutThirdPartyJobSuccessResultCommandOutput,
} from "./commands/PutThirdPartyJobSuccessResultCommand";
import type { PutWebhookCommandInput, PutWebhookCommandOutput } from "./commands/PutWebhookCommand";
import type {
  RegisterWebhookWithThirdPartyCommandInput,
  RegisterWebhookWithThirdPartyCommandOutput,
} from "./commands/RegisterWebhookWithThirdPartyCommand";
import type {
  RetryStageExecutionCommandInput,
  RetryStageExecutionCommandOutput,
} from "./commands/RetryStageExecutionCommand";
import type { RollbackStageCommandInput, RollbackStageCommandOutput } from "./commands/RollbackStageCommand";
import type {
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
} from "./commands/StartPipelineExecutionCommand";
import type {
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput,
} from "./commands/StopPipelineExecutionCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateActionTypeCommandInput, UpdateActionTypeCommandOutput } from "./commands/UpdateActionTypeCommand";
import type { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "./commands/UpdatePipelineCommand";
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
  | AcknowledgeJobCommandInput
  | AcknowledgeThirdPartyJobCommandInput
  | CreateCustomActionTypeCommandInput
  | CreatePipelineCommandInput
  | DeleteCustomActionTypeCommandInput
  | DeletePipelineCommandInput
  | DeleteWebhookCommandInput
  | DeregisterWebhookWithThirdPartyCommandInput
  | DisableStageTransitionCommandInput
  | EnableStageTransitionCommandInput
  | GetActionTypeCommandInput
  | GetJobDetailsCommandInput
  | GetPipelineCommandInput
  | GetPipelineExecutionCommandInput
  | GetPipelineStateCommandInput
  | GetThirdPartyJobDetailsCommandInput
  | ListActionExecutionsCommandInput
  | ListActionTypesCommandInput
  | ListDeployActionExecutionTargetsCommandInput
  | ListPipelineExecutionsCommandInput
  | ListPipelinesCommandInput
  | ListRuleExecutionsCommandInput
  | ListRuleTypesCommandInput
  | ListTagsForResourceCommandInput
  | ListWebhooksCommandInput
  | OverrideStageConditionCommandInput
  | PollForJobsCommandInput
  | PollForThirdPartyJobsCommandInput
  | PutActionRevisionCommandInput
  | PutApprovalResultCommandInput
  | PutJobFailureResultCommandInput
  | PutJobSuccessResultCommandInput
  | PutThirdPartyJobFailureResultCommandInput
  | PutThirdPartyJobSuccessResultCommandInput
  | PutWebhookCommandInput
  | RegisterWebhookWithThirdPartyCommandInput
  | RetryStageExecutionCommandInput
  | RollbackStageCommandInput
  | StartPipelineExecutionCommandInput
  | StopPipelineExecutionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateActionTypeCommandInput
  | UpdatePipelineCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcknowledgeJobCommandOutput
  | AcknowledgeThirdPartyJobCommandOutput
  | CreateCustomActionTypeCommandOutput
  | CreatePipelineCommandOutput
  | DeleteCustomActionTypeCommandOutput
  | DeletePipelineCommandOutput
  | DeleteWebhookCommandOutput
  | DeregisterWebhookWithThirdPartyCommandOutput
  | DisableStageTransitionCommandOutput
  | EnableStageTransitionCommandOutput
  | GetActionTypeCommandOutput
  | GetJobDetailsCommandOutput
  | GetPipelineCommandOutput
  | GetPipelineExecutionCommandOutput
  | GetPipelineStateCommandOutput
  | GetThirdPartyJobDetailsCommandOutput
  | ListActionExecutionsCommandOutput
  | ListActionTypesCommandOutput
  | ListDeployActionExecutionTargetsCommandOutput
  | ListPipelineExecutionsCommandOutput
  | ListPipelinesCommandOutput
  | ListRuleExecutionsCommandOutput
  | ListRuleTypesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWebhooksCommandOutput
  | OverrideStageConditionCommandOutput
  | PollForJobsCommandOutput
  | PollForThirdPartyJobsCommandOutput
  | PutActionRevisionCommandOutput
  | PutApprovalResultCommandOutput
  | PutJobFailureResultCommandOutput
  | PutJobSuccessResultCommandOutput
  | PutThirdPartyJobFailureResultCommandOutput
  | PutThirdPartyJobSuccessResultCommandOutput
  | PutWebhookCommandOutput
  | RegisterWebhookWithThirdPartyCommandOutput
  | RetryStageExecutionCommandOutput
  | RollbackStageCommandOutput
  | StartPipelineExecutionCommandOutput
  | StopPipelineExecutionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateActionTypeCommandOutput
  | UpdatePipelineCommandOutput;

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
   * Accepted values are "standard" and "adaptive".
   * @see https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html
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
export type CodePipelineClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CodePipelineClient class constructor that set the region, credentials and other options.
 */
export interface CodePipelineClientConfig extends CodePipelineClientConfigType {}

/**
 * @public
 */
export type CodePipelineClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CodePipelineClient class. This is resolved and normalized from the {@link CodePipelineClientConfig | constructor configuration interface}.
 */
export interface CodePipelineClientResolvedConfig extends CodePipelineClientResolvedConfigType {}

/**
 * CodePipeline
 *
 * **Overview**
 *
 * This is the CodePipeline API Reference. This guide provides descriptions of the actions and data types for CodePipeline. Some functionality for your pipeline can only be configured through the API. For more information, see the [CodePipeline User Guide](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html).
 *
 * You can use the CodePipeline API to work with pipelines, stages, actions, and transitions.
 *
 * *Pipelines* are models of automated release processes. Each pipeline is uniquely named, and consists of stages, actions, and transitions.
 *
 * You can work with pipelines by calling:
 *
 * - CreatePipeline, which creates a uniquely named pipeline.
 * - DeletePipeline, which deletes the specified pipeline.
 * - GetPipeline, which returns information about the pipeline structure and pipeline metadata, including the pipeline Amazon Resource Name (ARN).
 * - GetPipelineExecution, which returns information about a specific execution of a pipeline.
 * - GetPipelineState, which returns information about the current state of the stages and actions of a pipeline.
 * - ListActionExecutions, which returns action-level details for past executions. The details include full stage and action-level details, including individual action duration, status, any errors that occurred during the execution, and input and output artifact location details.
 * - ListPipelines, which gets a summary of all of the pipelines associated with your account.
 * - ListPipelineExecutions, which gets a summary of the most recent executions for a pipeline.
 * - StartPipelineExecution, which runs the most recent revision of an artifact through the pipeline.
 * - StopPipelineExecution, which stops the specified pipeline execution from continuing through the pipeline.
 * - UpdatePipeline, which updates a pipeline with edits or changes to the structure of the pipeline.
 *
 * Pipelines include *stages*. Each stage contains one or more actions that must complete before the next stage begins. A stage results in success or failure. If a stage fails, the pipeline stops at that stage and remains stopped until either a new version of an artifact appears in the source location, or a user takes action to rerun the most recent artifact through the pipeline. You can call GetPipelineState, which displays the status of a pipeline, including the status of stages in the pipeline, or GetPipeline, which returns the entire structure of the pipeline, including the stages of that pipeline. For more information about the structure of stages and actions, see [CodePipeline Pipeline Structure Reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html).
 *
 * Pipeline stages include *actions* that are categorized into categories such as source or build actions performed in a stage of a pipeline. For example, you can use a source action to import artifacts into a pipeline from a source such as Amazon S3. Like stages, you do not work with actions directly in most cases, but you do define and interact with actions when working with pipeline operations such as CreatePipeline and GetPipelineState. Valid action categories are:
 *
 * - Source
 * - Build
 * - Test
 * - Deploy
 * - Approval
 * - Invoke
 * - Compute
 *
 * Pipelines also include *transitions*, which allow the transition of artifacts from one stage to the next in a pipeline after the actions in one stage complete.
 *
 * You can work with transitions by calling:
 *
 * - DisableStageTransition, which prevents artifacts from transitioning to the next stage in a pipeline.
 * - EnableStageTransition, which enables transition of artifacts between stages in a pipeline.
 *
 * **Using the API to integrate with CodePipeline**
 *
 * For third-party integrators or developers who want to create their own integrations with CodePipeline, the expected sequence varies from the standard API user. To integrate with CodePipeline, developers need to work with the following items:
 *
 * **Jobs**, which are instances of an action. For example, a job for a source action might import a revision of an artifact from a source.
 *
 * You can work with jobs by calling:
 *
 * - AcknowledgeJob, which confirms whether a job worker has received the specified job.
 * - GetJobDetails, which returns the details of a job.
 * - PollForJobs, which determines whether there are any jobs to act on.
 * - PutJobFailureResult, which provides details of a job failure.
 * - PutJobSuccessResult, which provides details of a job success.
 *
 * **Third party jobs**, which are instances of an action created by a partner action and integrated into CodePipeline. Partner actions are created by members of the Amazon Web Services Partner Network.
 *
 * You can work with third party jobs by calling:
 *
 * - AcknowledgeThirdPartyJob, which confirms whether a job worker has received the specified job.
 * - GetThirdPartyJobDetails, which requests the details of a job for a partner action.
 * - PollForThirdPartyJobs, which determines whether there are any jobs to act on.
 * - PutThirdPartyJobFailureResult, which provides details of a job failure.
 * - PutThirdPartyJobSuccessResult, which provides details of a job success.
 *
 * @public
 */
export class CodePipelineClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodePipelineClientResolvedConfig
> {
  /**
   * The resolved configuration of CodePipelineClient class. This is resolved and normalized from the {@link CodePipelineClientConfig | constructor configuration interface}.
   */
  readonly config: CodePipelineClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CodePipelineClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultCodePipelineHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CodePipelineClientResolvedConfig) =>
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
