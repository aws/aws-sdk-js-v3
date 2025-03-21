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
  defaultDeadlineHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateMemberToFarmCommandInput,
  AssociateMemberToFarmCommandOutput,
} from "./commands/AssociateMemberToFarmCommand";
import {
  AssociateMemberToFleetCommandInput,
  AssociateMemberToFleetCommandOutput,
} from "./commands/AssociateMemberToFleetCommand";
import {
  AssociateMemberToJobCommandInput,
  AssociateMemberToJobCommandOutput,
} from "./commands/AssociateMemberToJobCommand";
import {
  AssociateMemberToQueueCommandInput,
  AssociateMemberToQueueCommandOutput,
} from "./commands/AssociateMemberToQueueCommand";
import {
  AssumeFleetRoleForReadCommandInput,
  AssumeFleetRoleForReadCommandOutput,
} from "./commands/AssumeFleetRoleForReadCommand";
import {
  AssumeFleetRoleForWorkerCommandInput,
  AssumeFleetRoleForWorkerCommandOutput,
} from "./commands/AssumeFleetRoleForWorkerCommand";
import {
  AssumeQueueRoleForReadCommandInput,
  AssumeQueueRoleForReadCommandOutput,
} from "./commands/AssumeQueueRoleForReadCommand";
import {
  AssumeQueueRoleForUserCommandInput,
  AssumeQueueRoleForUserCommandOutput,
} from "./commands/AssumeQueueRoleForUserCommand";
import {
  AssumeQueueRoleForWorkerCommandInput,
  AssumeQueueRoleForWorkerCommandOutput,
} from "./commands/AssumeQueueRoleForWorkerCommand";
import { BatchGetJobEntityCommandInput, BatchGetJobEntityCommandOutput } from "./commands/BatchGetJobEntityCommand";
import { CopyJobTemplateCommandInput, CopyJobTemplateCommandOutput } from "./commands/CopyJobTemplateCommand";
import { CreateBudgetCommandInput, CreateBudgetCommandOutput } from "./commands/CreateBudgetCommand";
import { CreateFarmCommandInput, CreateFarmCommandOutput } from "./commands/CreateFarmCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import {
  CreateLicenseEndpointCommandInput,
  CreateLicenseEndpointCommandOutput,
} from "./commands/CreateLicenseEndpointCommand";
import { CreateLimitCommandInput, CreateLimitCommandOutput } from "./commands/CreateLimitCommand";
import { CreateMonitorCommandInput, CreateMonitorCommandOutput } from "./commands/CreateMonitorCommand";
import { CreateQueueCommandInput, CreateQueueCommandOutput } from "./commands/CreateQueueCommand";
import {
  CreateQueueEnvironmentCommandInput,
  CreateQueueEnvironmentCommandOutput,
} from "./commands/CreateQueueEnvironmentCommand";
import {
  CreateQueueFleetAssociationCommandInput,
  CreateQueueFleetAssociationCommandOutput,
} from "./commands/CreateQueueFleetAssociationCommand";
import {
  CreateQueueLimitAssociationCommandInput,
  CreateQueueLimitAssociationCommandOutput,
} from "./commands/CreateQueueLimitAssociationCommand";
import {
  CreateStorageProfileCommandInput,
  CreateStorageProfileCommandOutput,
} from "./commands/CreateStorageProfileCommand";
import { CreateWorkerCommandInput, CreateWorkerCommandOutput } from "./commands/CreateWorkerCommand";
import { DeleteBudgetCommandInput, DeleteBudgetCommandOutput } from "./commands/DeleteBudgetCommand";
import { DeleteFarmCommandInput, DeleteFarmCommandOutput } from "./commands/DeleteFarmCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DeleteLicenseEndpointCommandInput,
  DeleteLicenseEndpointCommandOutput,
} from "./commands/DeleteLicenseEndpointCommand";
import { DeleteLimitCommandInput, DeleteLimitCommandOutput } from "./commands/DeleteLimitCommand";
import {
  DeleteMeteredProductCommandInput,
  DeleteMeteredProductCommandOutput,
} from "./commands/DeleteMeteredProductCommand";
import { DeleteMonitorCommandInput, DeleteMonitorCommandOutput } from "./commands/DeleteMonitorCommand";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput } from "./commands/DeleteQueueCommand";
import {
  DeleteQueueEnvironmentCommandInput,
  DeleteQueueEnvironmentCommandOutput,
} from "./commands/DeleteQueueEnvironmentCommand";
import {
  DeleteQueueFleetAssociationCommandInput,
  DeleteQueueFleetAssociationCommandOutput,
} from "./commands/DeleteQueueFleetAssociationCommand";
import {
  DeleteQueueLimitAssociationCommandInput,
  DeleteQueueLimitAssociationCommandOutput,
} from "./commands/DeleteQueueLimitAssociationCommand";
import {
  DeleteStorageProfileCommandInput,
  DeleteStorageProfileCommandOutput,
} from "./commands/DeleteStorageProfileCommand";
import { DeleteWorkerCommandInput, DeleteWorkerCommandOutput } from "./commands/DeleteWorkerCommand";
import {
  DisassociateMemberFromFarmCommandInput,
  DisassociateMemberFromFarmCommandOutput,
} from "./commands/DisassociateMemberFromFarmCommand";
import {
  DisassociateMemberFromFleetCommandInput,
  DisassociateMemberFromFleetCommandOutput,
} from "./commands/DisassociateMemberFromFleetCommand";
import {
  DisassociateMemberFromJobCommandInput,
  DisassociateMemberFromJobCommandOutput,
} from "./commands/DisassociateMemberFromJobCommand";
import {
  DisassociateMemberFromQueueCommandInput,
  DisassociateMemberFromQueueCommandOutput,
} from "./commands/DisassociateMemberFromQueueCommand";
import { GetBudgetCommandInput, GetBudgetCommandOutput } from "./commands/GetBudgetCommand";
import { GetFarmCommandInput, GetFarmCommandOutput } from "./commands/GetFarmCommand";
import { GetFleetCommandInput, GetFleetCommandOutput } from "./commands/GetFleetCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import { GetLicenseEndpointCommandInput, GetLicenseEndpointCommandOutput } from "./commands/GetLicenseEndpointCommand";
import { GetLimitCommandInput, GetLimitCommandOutput } from "./commands/GetLimitCommand";
import { GetMonitorCommandInput, GetMonitorCommandOutput } from "./commands/GetMonitorCommand";
import { GetQueueCommandInput, GetQueueCommandOutput } from "./commands/GetQueueCommand";
import {
  GetQueueEnvironmentCommandInput,
  GetQueueEnvironmentCommandOutput,
} from "./commands/GetQueueEnvironmentCommand";
import {
  GetQueueFleetAssociationCommandInput,
  GetQueueFleetAssociationCommandOutput,
} from "./commands/GetQueueFleetAssociationCommand";
import {
  GetQueueLimitAssociationCommandInput,
  GetQueueLimitAssociationCommandOutput,
} from "./commands/GetQueueLimitAssociationCommand";
import { GetSessionActionCommandInput, GetSessionActionCommandOutput } from "./commands/GetSessionActionCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import {
  GetSessionsStatisticsAggregationCommandInput,
  GetSessionsStatisticsAggregationCommandOutput,
} from "./commands/GetSessionsStatisticsAggregationCommand";
import { GetStepCommandInput, GetStepCommandOutput } from "./commands/GetStepCommand";
import { GetStorageProfileCommandInput, GetStorageProfileCommandOutput } from "./commands/GetStorageProfileCommand";
import {
  GetStorageProfileForQueueCommandInput,
  GetStorageProfileForQueueCommandOutput,
} from "./commands/GetStorageProfileForQueueCommand";
import { GetTaskCommandInput, GetTaskCommandOutput } from "./commands/GetTaskCommand";
import { GetWorkerCommandInput, GetWorkerCommandOutput } from "./commands/GetWorkerCommand";
import {
  ListAvailableMeteredProductsCommandInput,
  ListAvailableMeteredProductsCommandOutput,
} from "./commands/ListAvailableMeteredProductsCommand";
import { ListBudgetsCommandInput, ListBudgetsCommandOutput } from "./commands/ListBudgetsCommand";
import { ListFarmMembersCommandInput, ListFarmMembersCommandOutput } from "./commands/ListFarmMembersCommand";
import { ListFarmsCommandInput, ListFarmsCommandOutput } from "./commands/ListFarmsCommand";
import { ListFleetMembersCommandInput, ListFleetMembersCommandOutput } from "./commands/ListFleetMembersCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import { ListJobMembersCommandInput, ListJobMembersCommandOutput } from "./commands/ListJobMembersCommand";
import {
  ListJobParameterDefinitionsCommandInput,
  ListJobParameterDefinitionsCommandOutput,
} from "./commands/ListJobParameterDefinitionsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListLicenseEndpointsCommandInput,
  ListLicenseEndpointsCommandOutput,
} from "./commands/ListLicenseEndpointsCommand";
import { ListLimitsCommandInput, ListLimitsCommandOutput } from "./commands/ListLimitsCommand";
import {
  ListMeteredProductsCommandInput,
  ListMeteredProductsCommandOutput,
} from "./commands/ListMeteredProductsCommand";
import { ListMonitorsCommandInput, ListMonitorsCommandOutput } from "./commands/ListMonitorsCommand";
import {
  ListQueueEnvironmentsCommandInput,
  ListQueueEnvironmentsCommandOutput,
} from "./commands/ListQueueEnvironmentsCommand";
import {
  ListQueueFleetAssociationsCommandInput,
  ListQueueFleetAssociationsCommandOutput,
} from "./commands/ListQueueFleetAssociationsCommand";
import {
  ListQueueLimitAssociationsCommandInput,
  ListQueueLimitAssociationsCommandOutput,
} from "./commands/ListQueueLimitAssociationsCommand";
import { ListQueueMembersCommandInput, ListQueueMembersCommandOutput } from "./commands/ListQueueMembersCommand";
import { ListQueuesCommandInput, ListQueuesCommandOutput } from "./commands/ListQueuesCommand";
import { ListSessionActionsCommandInput, ListSessionActionsCommandOutput } from "./commands/ListSessionActionsCommand";
import { ListSessionsCommandInput, ListSessionsCommandOutput } from "./commands/ListSessionsCommand";
import {
  ListSessionsForWorkerCommandInput,
  ListSessionsForWorkerCommandOutput,
} from "./commands/ListSessionsForWorkerCommand";
import { ListStepConsumersCommandInput, ListStepConsumersCommandOutput } from "./commands/ListStepConsumersCommand";
import {
  ListStepDependenciesCommandInput,
  ListStepDependenciesCommandOutput,
} from "./commands/ListStepDependenciesCommand";
import { ListStepsCommandInput, ListStepsCommandOutput } from "./commands/ListStepsCommand";
import {
  ListStorageProfilesCommandInput,
  ListStorageProfilesCommandOutput,
} from "./commands/ListStorageProfilesCommand";
import {
  ListStorageProfilesForQueueCommandInput,
  ListStorageProfilesForQueueCommandOutput,
} from "./commands/ListStorageProfilesForQueueCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import { ListWorkersCommandInput, ListWorkersCommandOutput } from "./commands/ListWorkersCommand";
import { PutMeteredProductCommandInput, PutMeteredProductCommandOutput } from "./commands/PutMeteredProductCommand";
import { SearchJobsCommandInput, SearchJobsCommandOutput } from "./commands/SearchJobsCommand";
import { SearchStepsCommandInput, SearchStepsCommandOutput } from "./commands/SearchStepsCommand";
import { SearchTasksCommandInput, SearchTasksCommandOutput } from "./commands/SearchTasksCommand";
import { SearchWorkersCommandInput, SearchWorkersCommandOutput } from "./commands/SearchWorkersCommand";
import {
  StartSessionsStatisticsAggregationCommandInput,
  StartSessionsStatisticsAggregationCommandOutput,
} from "./commands/StartSessionsStatisticsAggregationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateBudgetCommandInput, UpdateBudgetCommandOutput } from "./commands/UpdateBudgetCommand";
import { UpdateFarmCommandInput, UpdateFarmCommandOutput } from "./commands/UpdateFarmCommand";
import { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import { UpdateJobCommandInput, UpdateJobCommandOutput } from "./commands/UpdateJobCommand";
import { UpdateLimitCommandInput, UpdateLimitCommandOutput } from "./commands/UpdateLimitCommand";
import { UpdateMonitorCommandInput, UpdateMonitorCommandOutput } from "./commands/UpdateMonitorCommand";
import { UpdateQueueCommandInput, UpdateQueueCommandOutput } from "./commands/UpdateQueueCommand";
import {
  UpdateQueueEnvironmentCommandInput,
  UpdateQueueEnvironmentCommandOutput,
} from "./commands/UpdateQueueEnvironmentCommand";
import {
  UpdateQueueFleetAssociationCommandInput,
  UpdateQueueFleetAssociationCommandOutput,
} from "./commands/UpdateQueueFleetAssociationCommand";
import {
  UpdateQueueLimitAssociationCommandInput,
  UpdateQueueLimitAssociationCommandOutput,
} from "./commands/UpdateQueueLimitAssociationCommand";
import { UpdateSessionCommandInput, UpdateSessionCommandOutput } from "./commands/UpdateSessionCommand";
import { UpdateStepCommandInput, UpdateStepCommandOutput } from "./commands/UpdateStepCommand";
import {
  UpdateStorageProfileCommandInput,
  UpdateStorageProfileCommandOutput,
} from "./commands/UpdateStorageProfileCommand";
import { UpdateTaskCommandInput, UpdateTaskCommandOutput } from "./commands/UpdateTaskCommand";
import { UpdateWorkerCommandInput, UpdateWorkerCommandOutput } from "./commands/UpdateWorkerCommand";
import {
  UpdateWorkerScheduleCommandInput,
  UpdateWorkerScheduleCommandOutput,
} from "./commands/UpdateWorkerScheduleCommand";
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
  | AssociateMemberToFarmCommandInput
  | AssociateMemberToFleetCommandInput
  | AssociateMemberToJobCommandInput
  | AssociateMemberToQueueCommandInput
  | AssumeFleetRoleForReadCommandInput
  | AssumeFleetRoleForWorkerCommandInput
  | AssumeQueueRoleForReadCommandInput
  | AssumeQueueRoleForUserCommandInput
  | AssumeQueueRoleForWorkerCommandInput
  | BatchGetJobEntityCommandInput
  | CopyJobTemplateCommandInput
  | CreateBudgetCommandInput
  | CreateFarmCommandInput
  | CreateFleetCommandInput
  | CreateJobCommandInput
  | CreateLicenseEndpointCommandInput
  | CreateLimitCommandInput
  | CreateMonitorCommandInput
  | CreateQueueCommandInput
  | CreateQueueEnvironmentCommandInput
  | CreateQueueFleetAssociationCommandInput
  | CreateQueueLimitAssociationCommandInput
  | CreateStorageProfileCommandInput
  | CreateWorkerCommandInput
  | DeleteBudgetCommandInput
  | DeleteFarmCommandInput
  | DeleteFleetCommandInput
  | DeleteLicenseEndpointCommandInput
  | DeleteLimitCommandInput
  | DeleteMeteredProductCommandInput
  | DeleteMonitorCommandInput
  | DeleteQueueCommandInput
  | DeleteQueueEnvironmentCommandInput
  | DeleteQueueFleetAssociationCommandInput
  | DeleteQueueLimitAssociationCommandInput
  | DeleteStorageProfileCommandInput
  | DeleteWorkerCommandInput
  | DisassociateMemberFromFarmCommandInput
  | DisassociateMemberFromFleetCommandInput
  | DisassociateMemberFromJobCommandInput
  | DisassociateMemberFromQueueCommandInput
  | GetBudgetCommandInput
  | GetFarmCommandInput
  | GetFleetCommandInput
  | GetJobCommandInput
  | GetLicenseEndpointCommandInput
  | GetLimitCommandInput
  | GetMonitorCommandInput
  | GetQueueCommandInput
  | GetQueueEnvironmentCommandInput
  | GetQueueFleetAssociationCommandInput
  | GetQueueLimitAssociationCommandInput
  | GetSessionActionCommandInput
  | GetSessionCommandInput
  | GetSessionsStatisticsAggregationCommandInput
  | GetStepCommandInput
  | GetStorageProfileCommandInput
  | GetStorageProfileForQueueCommandInput
  | GetTaskCommandInput
  | GetWorkerCommandInput
  | ListAvailableMeteredProductsCommandInput
  | ListBudgetsCommandInput
  | ListFarmMembersCommandInput
  | ListFarmsCommandInput
  | ListFleetMembersCommandInput
  | ListFleetsCommandInput
  | ListJobMembersCommandInput
  | ListJobParameterDefinitionsCommandInput
  | ListJobsCommandInput
  | ListLicenseEndpointsCommandInput
  | ListLimitsCommandInput
  | ListMeteredProductsCommandInput
  | ListMonitorsCommandInput
  | ListQueueEnvironmentsCommandInput
  | ListQueueFleetAssociationsCommandInput
  | ListQueueLimitAssociationsCommandInput
  | ListQueueMembersCommandInput
  | ListQueuesCommandInput
  | ListSessionActionsCommandInput
  | ListSessionsCommandInput
  | ListSessionsForWorkerCommandInput
  | ListStepConsumersCommandInput
  | ListStepDependenciesCommandInput
  | ListStepsCommandInput
  | ListStorageProfilesCommandInput
  | ListStorageProfilesForQueueCommandInput
  | ListTagsForResourceCommandInput
  | ListTasksCommandInput
  | ListWorkersCommandInput
  | PutMeteredProductCommandInput
  | SearchJobsCommandInput
  | SearchStepsCommandInput
  | SearchTasksCommandInput
  | SearchWorkersCommandInput
  | StartSessionsStatisticsAggregationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBudgetCommandInput
  | UpdateFarmCommandInput
  | UpdateFleetCommandInput
  | UpdateJobCommandInput
  | UpdateLimitCommandInput
  | UpdateMonitorCommandInput
  | UpdateQueueCommandInput
  | UpdateQueueEnvironmentCommandInput
  | UpdateQueueFleetAssociationCommandInput
  | UpdateQueueLimitAssociationCommandInput
  | UpdateSessionCommandInput
  | UpdateStepCommandInput
  | UpdateStorageProfileCommandInput
  | UpdateTaskCommandInput
  | UpdateWorkerCommandInput
  | UpdateWorkerScheduleCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateMemberToFarmCommandOutput
  | AssociateMemberToFleetCommandOutput
  | AssociateMemberToJobCommandOutput
  | AssociateMemberToQueueCommandOutput
  | AssumeFleetRoleForReadCommandOutput
  | AssumeFleetRoleForWorkerCommandOutput
  | AssumeQueueRoleForReadCommandOutput
  | AssumeQueueRoleForUserCommandOutput
  | AssumeQueueRoleForWorkerCommandOutput
  | BatchGetJobEntityCommandOutput
  | CopyJobTemplateCommandOutput
  | CreateBudgetCommandOutput
  | CreateFarmCommandOutput
  | CreateFleetCommandOutput
  | CreateJobCommandOutput
  | CreateLicenseEndpointCommandOutput
  | CreateLimitCommandOutput
  | CreateMonitorCommandOutput
  | CreateQueueCommandOutput
  | CreateQueueEnvironmentCommandOutput
  | CreateQueueFleetAssociationCommandOutput
  | CreateQueueLimitAssociationCommandOutput
  | CreateStorageProfileCommandOutput
  | CreateWorkerCommandOutput
  | DeleteBudgetCommandOutput
  | DeleteFarmCommandOutput
  | DeleteFleetCommandOutput
  | DeleteLicenseEndpointCommandOutput
  | DeleteLimitCommandOutput
  | DeleteMeteredProductCommandOutput
  | DeleteMonitorCommandOutput
  | DeleteQueueCommandOutput
  | DeleteQueueEnvironmentCommandOutput
  | DeleteQueueFleetAssociationCommandOutput
  | DeleteQueueLimitAssociationCommandOutput
  | DeleteStorageProfileCommandOutput
  | DeleteWorkerCommandOutput
  | DisassociateMemberFromFarmCommandOutput
  | DisassociateMemberFromFleetCommandOutput
  | DisassociateMemberFromJobCommandOutput
  | DisassociateMemberFromQueueCommandOutput
  | GetBudgetCommandOutput
  | GetFarmCommandOutput
  | GetFleetCommandOutput
  | GetJobCommandOutput
  | GetLicenseEndpointCommandOutput
  | GetLimitCommandOutput
  | GetMonitorCommandOutput
  | GetQueueCommandOutput
  | GetQueueEnvironmentCommandOutput
  | GetQueueFleetAssociationCommandOutput
  | GetQueueLimitAssociationCommandOutput
  | GetSessionActionCommandOutput
  | GetSessionCommandOutput
  | GetSessionsStatisticsAggregationCommandOutput
  | GetStepCommandOutput
  | GetStorageProfileCommandOutput
  | GetStorageProfileForQueueCommandOutput
  | GetTaskCommandOutput
  | GetWorkerCommandOutput
  | ListAvailableMeteredProductsCommandOutput
  | ListBudgetsCommandOutput
  | ListFarmMembersCommandOutput
  | ListFarmsCommandOutput
  | ListFleetMembersCommandOutput
  | ListFleetsCommandOutput
  | ListJobMembersCommandOutput
  | ListJobParameterDefinitionsCommandOutput
  | ListJobsCommandOutput
  | ListLicenseEndpointsCommandOutput
  | ListLimitsCommandOutput
  | ListMeteredProductsCommandOutput
  | ListMonitorsCommandOutput
  | ListQueueEnvironmentsCommandOutput
  | ListQueueFleetAssociationsCommandOutput
  | ListQueueLimitAssociationsCommandOutput
  | ListQueueMembersCommandOutput
  | ListQueuesCommandOutput
  | ListSessionActionsCommandOutput
  | ListSessionsCommandOutput
  | ListSessionsForWorkerCommandOutput
  | ListStepConsumersCommandOutput
  | ListStepDependenciesCommandOutput
  | ListStepsCommandOutput
  | ListStorageProfilesCommandOutput
  | ListStorageProfilesForQueueCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTasksCommandOutput
  | ListWorkersCommandOutput
  | PutMeteredProductCommandOutput
  | SearchJobsCommandOutput
  | SearchStepsCommandOutput
  | SearchTasksCommandOutput
  | SearchWorkersCommandOutput
  | StartSessionsStatisticsAggregationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBudgetCommandOutput
  | UpdateFarmCommandOutput
  | UpdateFleetCommandOutput
  | UpdateJobCommandOutput
  | UpdateLimitCommandOutput
  | UpdateMonitorCommandOutput
  | UpdateQueueCommandOutput
  | UpdateQueueEnvironmentCommandOutput
  | UpdateQueueFleetAssociationCommandOutput
  | UpdateQueueLimitAssociationCommandOutput
  | UpdateSessionCommandOutput
  | UpdateStepCommandOutput
  | UpdateStorageProfileCommandOutput
  | UpdateTaskCommandOutput
  | UpdateWorkerCommandOutput
  | UpdateWorkerScheduleCommandOutput;

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
export type DeadlineClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of DeadlineClient class constructor that set the region, credentials and other options.
 */
export interface DeadlineClientConfig extends DeadlineClientConfigType {}

/**
 * @public
 */
export type DeadlineClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of DeadlineClient class. This is resolved and normalized from the {@link DeadlineClientConfig | constructor configuration interface}.
 */
export interface DeadlineClientResolvedConfig extends DeadlineClientResolvedConfigType {}

/**
 * <p>The Amazon Web Services Deadline Cloud API provides infrastructure and centralized management for your
 *          projects. Use the Deadline Cloud API to onboard users, assign projects, and attach permissions
 *          specific to their job function.</p>
 *          <p>With Deadline Cloud, content production teams can deploy resources for their workforce
 *          securely in the cloud, reducing the costs of added physical infrastructure. Keep your
 *          content production operations secure, while allowing your contributors to access the tools
 *          they need, such as scalable high-speed storage, licenses, and cost management
 *          services.</p>
 * @public
 */
export class DeadlineClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DeadlineClientResolvedConfig
> {
  /**
   * The resolved configuration of DeadlineClient class. This is resolved and normalized from the {@link DeadlineClientConfig | constructor configuration interface}.
   */
  readonly config: DeadlineClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<DeadlineClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6, { client: () => this });
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultDeadlineHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: DeadlineClientResolvedConfig) =>
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
