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
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
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
} from "@smithy/types";

import { AcceptPredictionsCommandInput, AcceptPredictionsCommandOutput } from "./commands/AcceptPredictionsCommand";
import {
  AcceptSubscriptionRequestCommandInput,
  AcceptSubscriptionRequestCommandOutput,
} from "./commands/AcceptSubscriptionRequestCommand";
import { CancelSubscriptionCommandInput, CancelSubscriptionCommandOutput } from "./commands/CancelSubscriptionCommand";
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import {
  CreateAssetRevisionCommandInput,
  CreateAssetRevisionCommandOutput,
} from "./commands/CreateAssetRevisionCommand";
import { CreateAssetTypeCommandInput, CreateAssetTypeCommandOutput } from "./commands/CreateAssetTypeCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "./commands/CreateEnvironmentCommand";
import {
  CreateEnvironmentProfileCommandInput,
  CreateEnvironmentProfileCommandOutput,
} from "./commands/CreateEnvironmentProfileCommand";
import { CreateFormTypeCommandInput, CreateFormTypeCommandOutput } from "./commands/CreateFormTypeCommand";
import { CreateGlossaryCommandInput, CreateGlossaryCommandOutput } from "./commands/CreateGlossaryCommand";
import { CreateGlossaryTermCommandInput, CreateGlossaryTermCommandOutput } from "./commands/CreateGlossaryTermCommand";
import { CreateGroupProfileCommandInput, CreateGroupProfileCommandOutput } from "./commands/CreateGroupProfileCommand";
import {
  CreateListingChangeSetCommandInput,
  CreateListingChangeSetCommandOutput,
} from "./commands/CreateListingChangeSetCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import {
  CreateProjectMembershipCommandInput,
  CreateProjectMembershipCommandOutput,
} from "./commands/CreateProjectMembershipCommand";
import {
  CreateSubscriptionGrantCommandInput,
  CreateSubscriptionGrantCommandOutput,
} from "./commands/CreateSubscriptionGrantCommand";
import {
  CreateSubscriptionRequestCommandInput,
  CreateSubscriptionRequestCommandOutput,
} from "./commands/CreateSubscriptionRequestCommand";
import {
  CreateSubscriptionTargetCommandInput,
  CreateSubscriptionTargetCommandOutput,
} from "./commands/CreateSubscriptionTargetCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import { DeleteAssetTypeCommandInput, DeleteAssetTypeCommandOutput } from "./commands/DeleteAssetTypeCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import {
  DeleteEnvironmentBlueprintConfigurationCommandInput,
  DeleteEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/DeleteEnvironmentBlueprintConfigurationCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentProfileCommandInput,
  DeleteEnvironmentProfileCommandOutput,
} from "./commands/DeleteEnvironmentProfileCommand";
import { DeleteFormTypeCommandInput, DeleteFormTypeCommandOutput } from "./commands/DeleteFormTypeCommand";
import { DeleteGlossaryCommandInput, DeleteGlossaryCommandOutput } from "./commands/DeleteGlossaryCommand";
import { DeleteGlossaryTermCommandInput, DeleteGlossaryTermCommandOutput } from "./commands/DeleteGlossaryTermCommand";
import { DeleteListingCommandInput, DeleteListingCommandOutput } from "./commands/DeleteListingCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import {
  DeleteProjectMembershipCommandInput,
  DeleteProjectMembershipCommandOutput,
} from "./commands/DeleteProjectMembershipCommand";
import {
  DeleteSubscriptionGrantCommandInput,
  DeleteSubscriptionGrantCommandOutput,
} from "./commands/DeleteSubscriptionGrantCommand";
import {
  DeleteSubscriptionRequestCommandInput,
  DeleteSubscriptionRequestCommandOutput,
} from "./commands/DeleteSubscriptionRequestCommand";
import {
  DeleteSubscriptionTargetCommandInput,
  DeleteSubscriptionTargetCommandOutput,
} from "./commands/DeleteSubscriptionTargetCommand";
import { GetAssetCommandInput, GetAssetCommandOutput } from "./commands/GetAssetCommand";
import { GetAssetTypeCommandInput, GetAssetTypeCommandOutput } from "./commands/GetAssetTypeCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import { GetDataSourceRunCommandInput, GetDataSourceRunCommandOutput } from "./commands/GetDataSourceRunCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import {
  GetEnvironmentBlueprintCommandInput,
  GetEnvironmentBlueprintCommandOutput,
} from "./commands/GetEnvironmentBlueprintCommand";
import {
  GetEnvironmentBlueprintConfigurationCommandInput,
  GetEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/GetEnvironmentBlueprintConfigurationCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "./commands/GetEnvironmentCommand";
import {
  GetEnvironmentProfileCommandInput,
  GetEnvironmentProfileCommandOutput,
} from "./commands/GetEnvironmentProfileCommand";
import { GetFormTypeCommandInput, GetFormTypeCommandOutput } from "./commands/GetFormTypeCommand";
import { GetGlossaryCommandInput, GetGlossaryCommandOutput } from "./commands/GetGlossaryCommand";
import { GetGlossaryTermCommandInput, GetGlossaryTermCommandOutput } from "./commands/GetGlossaryTermCommand";
import { GetGroupProfileCommandInput, GetGroupProfileCommandOutput } from "./commands/GetGroupProfileCommand";
import {
  GetIamPortalLoginUrlCommandInput,
  GetIamPortalLoginUrlCommandOutput,
} from "./commands/GetIamPortalLoginUrlCommand";
import { GetListingCommandInput, GetListingCommandOutput } from "./commands/GetListingCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "./commands/GetProjectCommand";
import { GetSubscriptionCommandInput, GetSubscriptionCommandOutput } from "./commands/GetSubscriptionCommand";
import {
  GetSubscriptionGrantCommandInput,
  GetSubscriptionGrantCommandOutput,
} from "./commands/GetSubscriptionGrantCommand";
import {
  GetSubscriptionRequestDetailsCommandInput,
  GetSubscriptionRequestDetailsCommandOutput,
} from "./commands/GetSubscriptionRequestDetailsCommand";
import {
  GetSubscriptionTargetCommandInput,
  GetSubscriptionTargetCommandOutput,
} from "./commands/GetSubscriptionTargetCommand";
import { GetUserProfileCommandInput, GetUserProfileCommandOutput } from "./commands/GetUserProfileCommand";
import { ListAssetRevisionsCommandInput, ListAssetRevisionsCommandOutput } from "./commands/ListAssetRevisionsCommand";
import {
  ListDataSourceRunActivitiesCommandInput,
  ListDataSourceRunActivitiesCommandOutput,
} from "./commands/ListDataSourceRunActivitiesCommand";
import { ListDataSourceRunsCommandInput, ListDataSourceRunsCommandOutput } from "./commands/ListDataSourceRunsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListEnvironmentBlueprintConfigurationsCommandInput,
  ListEnvironmentBlueprintConfigurationsCommandOutput,
} from "./commands/ListEnvironmentBlueprintConfigurationsCommand";
import {
  ListEnvironmentBlueprintsCommandInput,
  ListEnvironmentBlueprintsCommandOutput,
} from "./commands/ListEnvironmentBlueprintsCommand";
import {
  ListEnvironmentProfilesCommandInput,
  ListEnvironmentProfilesCommandOutput,
} from "./commands/ListEnvironmentProfilesCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import { ListNotificationsCommandInput, ListNotificationsCommandOutput } from "./commands/ListNotificationsCommand";
import {
  ListProjectMembershipsCommandInput,
  ListProjectMembershipsCommandOutput,
} from "./commands/ListProjectMembershipsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import {
  ListSubscriptionGrantsCommandInput,
  ListSubscriptionGrantsCommandOutput,
} from "./commands/ListSubscriptionGrantsCommand";
import {
  ListSubscriptionRequestsCommandInput,
  ListSubscriptionRequestsCommandOutput,
} from "./commands/ListSubscriptionRequestsCommand";
import { ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput } from "./commands/ListSubscriptionsCommand";
import {
  ListSubscriptionTargetsCommandInput,
  ListSubscriptionTargetsCommandOutput,
} from "./commands/ListSubscriptionTargetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutEnvironmentBlueprintConfigurationCommandInput,
  PutEnvironmentBlueprintConfigurationCommandOutput,
} from "./commands/PutEnvironmentBlueprintConfigurationCommand";
import { RejectPredictionsCommandInput, RejectPredictionsCommandOutput } from "./commands/RejectPredictionsCommand";
import {
  RejectSubscriptionRequestCommandInput,
  RejectSubscriptionRequestCommandOutput,
} from "./commands/RejectSubscriptionRequestCommand";
import { RevokeSubscriptionCommandInput, RevokeSubscriptionCommandOutput } from "./commands/RevokeSubscriptionCommand";
import { SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import {
  SearchGroupProfilesCommandInput,
  SearchGroupProfilesCommandOutput,
} from "./commands/SearchGroupProfilesCommand";
import { SearchListingsCommandInput, SearchListingsCommandOutput } from "./commands/SearchListingsCommand";
import { SearchTypesCommandInput, SearchTypesCommandOutput } from "./commands/SearchTypesCommand";
import { SearchUserProfilesCommandInput, SearchUserProfilesCommandOutput } from "./commands/SearchUserProfilesCommand";
import { StartDataSourceRunCommandInput, StartDataSourceRunCommandOutput } from "./commands/StartDataSourceRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentProfileCommandInput,
  UpdateEnvironmentProfileCommandOutput,
} from "./commands/UpdateEnvironmentProfileCommand";
import { UpdateGlossaryCommandInput, UpdateGlossaryCommandOutput } from "./commands/UpdateGlossaryCommand";
import { UpdateGlossaryTermCommandInput, UpdateGlossaryTermCommandOutput } from "./commands/UpdateGlossaryTermCommand";
import { UpdateGroupProfileCommandInput, UpdateGroupProfileCommandOutput } from "./commands/UpdateGroupProfileCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import {
  UpdateSubscriptionGrantStatusCommandInput,
  UpdateSubscriptionGrantStatusCommandOutput,
} from "./commands/UpdateSubscriptionGrantStatusCommand";
import {
  UpdateSubscriptionRequestCommandInput,
  UpdateSubscriptionRequestCommandOutput,
} from "./commands/UpdateSubscriptionRequestCommand";
import {
  UpdateSubscriptionTargetCommandInput,
  UpdateSubscriptionTargetCommandOutput,
} from "./commands/UpdateSubscriptionTargetCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand";
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
  | AcceptPredictionsCommandInput
  | AcceptSubscriptionRequestCommandInput
  | CancelSubscriptionCommandInput
  | CreateAssetCommandInput
  | CreateAssetRevisionCommandInput
  | CreateAssetTypeCommandInput
  | CreateDataSourceCommandInput
  | CreateDomainCommandInput
  | CreateEnvironmentCommandInput
  | CreateEnvironmentProfileCommandInput
  | CreateFormTypeCommandInput
  | CreateGlossaryCommandInput
  | CreateGlossaryTermCommandInput
  | CreateGroupProfileCommandInput
  | CreateListingChangeSetCommandInput
  | CreateProjectCommandInput
  | CreateProjectMembershipCommandInput
  | CreateSubscriptionGrantCommandInput
  | CreateSubscriptionRequestCommandInput
  | CreateSubscriptionTargetCommandInput
  | CreateUserProfileCommandInput
  | DeleteAssetCommandInput
  | DeleteAssetTypeCommandInput
  | DeleteDataSourceCommandInput
  | DeleteDomainCommandInput
  | DeleteEnvironmentBlueprintConfigurationCommandInput
  | DeleteEnvironmentCommandInput
  | DeleteEnvironmentProfileCommandInput
  | DeleteFormTypeCommandInput
  | DeleteGlossaryCommandInput
  | DeleteGlossaryTermCommandInput
  | DeleteListingCommandInput
  | DeleteProjectCommandInput
  | DeleteProjectMembershipCommandInput
  | DeleteSubscriptionGrantCommandInput
  | DeleteSubscriptionRequestCommandInput
  | DeleteSubscriptionTargetCommandInput
  | GetAssetCommandInput
  | GetAssetTypeCommandInput
  | GetDataSourceCommandInput
  | GetDataSourceRunCommandInput
  | GetDomainCommandInput
  | GetEnvironmentBlueprintCommandInput
  | GetEnvironmentBlueprintConfigurationCommandInput
  | GetEnvironmentCommandInput
  | GetEnvironmentProfileCommandInput
  | GetFormTypeCommandInput
  | GetGlossaryCommandInput
  | GetGlossaryTermCommandInput
  | GetGroupProfileCommandInput
  | GetIamPortalLoginUrlCommandInput
  | GetListingCommandInput
  | GetProjectCommandInput
  | GetSubscriptionCommandInput
  | GetSubscriptionGrantCommandInput
  | GetSubscriptionRequestDetailsCommandInput
  | GetSubscriptionTargetCommandInput
  | GetUserProfileCommandInput
  | ListAssetRevisionsCommandInput
  | ListDataSourceRunActivitiesCommandInput
  | ListDataSourceRunsCommandInput
  | ListDataSourcesCommandInput
  | ListDomainsCommandInput
  | ListEnvironmentBlueprintConfigurationsCommandInput
  | ListEnvironmentBlueprintsCommandInput
  | ListEnvironmentProfilesCommandInput
  | ListEnvironmentsCommandInput
  | ListNotificationsCommandInput
  | ListProjectMembershipsCommandInput
  | ListProjectsCommandInput
  | ListSubscriptionGrantsCommandInput
  | ListSubscriptionRequestsCommandInput
  | ListSubscriptionTargetsCommandInput
  | ListSubscriptionsCommandInput
  | ListTagsForResourceCommandInput
  | PutEnvironmentBlueprintConfigurationCommandInput
  | RejectPredictionsCommandInput
  | RejectSubscriptionRequestCommandInput
  | RevokeSubscriptionCommandInput
  | SearchCommandInput
  | SearchGroupProfilesCommandInput
  | SearchListingsCommandInput
  | SearchTypesCommandInput
  | SearchUserProfilesCommandInput
  | StartDataSourceRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDataSourceCommandInput
  | UpdateDomainCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateEnvironmentProfileCommandInput
  | UpdateGlossaryCommandInput
  | UpdateGlossaryTermCommandInput
  | UpdateGroupProfileCommandInput
  | UpdateProjectCommandInput
  | UpdateSubscriptionGrantStatusCommandInput
  | UpdateSubscriptionRequestCommandInput
  | UpdateSubscriptionTargetCommandInput
  | UpdateUserProfileCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptPredictionsCommandOutput
  | AcceptSubscriptionRequestCommandOutput
  | CancelSubscriptionCommandOutput
  | CreateAssetCommandOutput
  | CreateAssetRevisionCommandOutput
  | CreateAssetTypeCommandOutput
  | CreateDataSourceCommandOutput
  | CreateDomainCommandOutput
  | CreateEnvironmentCommandOutput
  | CreateEnvironmentProfileCommandOutput
  | CreateFormTypeCommandOutput
  | CreateGlossaryCommandOutput
  | CreateGlossaryTermCommandOutput
  | CreateGroupProfileCommandOutput
  | CreateListingChangeSetCommandOutput
  | CreateProjectCommandOutput
  | CreateProjectMembershipCommandOutput
  | CreateSubscriptionGrantCommandOutput
  | CreateSubscriptionRequestCommandOutput
  | CreateSubscriptionTargetCommandOutput
  | CreateUserProfileCommandOutput
  | DeleteAssetCommandOutput
  | DeleteAssetTypeCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteDomainCommandOutput
  | DeleteEnvironmentBlueprintConfigurationCommandOutput
  | DeleteEnvironmentCommandOutput
  | DeleteEnvironmentProfileCommandOutput
  | DeleteFormTypeCommandOutput
  | DeleteGlossaryCommandOutput
  | DeleteGlossaryTermCommandOutput
  | DeleteListingCommandOutput
  | DeleteProjectCommandOutput
  | DeleteProjectMembershipCommandOutput
  | DeleteSubscriptionGrantCommandOutput
  | DeleteSubscriptionRequestCommandOutput
  | DeleteSubscriptionTargetCommandOutput
  | GetAssetCommandOutput
  | GetAssetTypeCommandOutput
  | GetDataSourceCommandOutput
  | GetDataSourceRunCommandOutput
  | GetDomainCommandOutput
  | GetEnvironmentBlueprintCommandOutput
  | GetEnvironmentBlueprintConfigurationCommandOutput
  | GetEnvironmentCommandOutput
  | GetEnvironmentProfileCommandOutput
  | GetFormTypeCommandOutput
  | GetGlossaryCommandOutput
  | GetGlossaryTermCommandOutput
  | GetGroupProfileCommandOutput
  | GetIamPortalLoginUrlCommandOutput
  | GetListingCommandOutput
  | GetProjectCommandOutput
  | GetSubscriptionCommandOutput
  | GetSubscriptionGrantCommandOutput
  | GetSubscriptionRequestDetailsCommandOutput
  | GetSubscriptionTargetCommandOutput
  | GetUserProfileCommandOutput
  | ListAssetRevisionsCommandOutput
  | ListDataSourceRunActivitiesCommandOutput
  | ListDataSourceRunsCommandOutput
  | ListDataSourcesCommandOutput
  | ListDomainsCommandOutput
  | ListEnvironmentBlueprintConfigurationsCommandOutput
  | ListEnvironmentBlueprintsCommandOutput
  | ListEnvironmentProfilesCommandOutput
  | ListEnvironmentsCommandOutput
  | ListNotificationsCommandOutput
  | ListProjectMembershipsCommandOutput
  | ListProjectsCommandOutput
  | ListSubscriptionGrantsCommandOutput
  | ListSubscriptionRequestsCommandOutput
  | ListSubscriptionTargetsCommandOutput
  | ListSubscriptionsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutEnvironmentBlueprintConfigurationCommandOutput
  | RejectPredictionsCommandOutput
  | RejectSubscriptionRequestCommandOutput
  | RevokeSubscriptionCommandOutput
  | SearchCommandOutput
  | SearchGroupProfilesCommandOutput
  | SearchListingsCommandOutput
  | SearchTypesCommandOutput
  | SearchUserProfilesCommandOutput
  | StartDataSourceRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateDomainCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateEnvironmentProfileCommandOutput
  | UpdateGlossaryCommandOutput
  | UpdateGlossaryTermCommandOutput
  | UpdateGroupProfileCommandOutput
  | UpdateProjectCommandOutput
  | UpdateSubscriptionGrantStatusCommandOutput
  | UpdateSubscriptionRequestCommandOutput
  | UpdateSubscriptionTargetCommandOutput
  | UpdateUserProfileCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
export type DataZoneClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of DataZoneClient class constructor that set the region, credentials and other options.
 */
export interface DataZoneClientConfig extends DataZoneClientConfigType {}

/**
 * @public
 */
export type DataZoneClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of DataZoneClient class. This is resolved and normalized from the {@link DataZoneClientConfig | constructor configuration interface}.
 */
export interface DataZoneClientResolvedConfig extends DataZoneClientResolvedConfigType {}

/**
 * @public
 * <p>Amazon DataZone is a data management service that enables you to catalog, discover,
 *          govern, share, and analyze your data. With Amazon DataZone, you can share and access your
 *          data across accounts and supported regions. Amazon DataZone simplifies your experience
 *          across Amazon Web Services services, including, but not limited to, Amazon Redshift, Amazon
 *          Athena, Amazon Web Services Glue, and Amazon Web Services Lake Formation.</p>
 */
export class DataZoneClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DataZoneClientResolvedConfig
> {
  /**
   * The resolved configuration of DataZoneClient class. This is resolved and normalized from the {@link DataZoneClientConfig | constructor configuration interface}.
   */
  readonly config: DataZoneClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<DataZoneClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
