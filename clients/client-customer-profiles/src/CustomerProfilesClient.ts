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
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultCustomerProfilesHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AddProfileKeyCommandInput, AddProfileKeyCommandOutput } from "./commands/AddProfileKeyCommand";
import {
  BatchGetCalculatedAttributeForProfileCommandInput,
  BatchGetCalculatedAttributeForProfileCommandOutput,
} from "./commands/BatchGetCalculatedAttributeForProfileCommand";
import { BatchGetProfileCommandInput, BatchGetProfileCommandOutput } from "./commands/BatchGetProfileCommand";
import {
  CreateCalculatedAttributeDefinitionCommandInput,
  CreateCalculatedAttributeDefinitionCommandOutput,
} from "./commands/CreateCalculatedAttributeDefinitionCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateDomainLayoutCommandInput, CreateDomainLayoutCommandOutput } from "./commands/CreateDomainLayoutCommand";
import { CreateEventStreamCommandInput, CreateEventStreamCommandOutput } from "./commands/CreateEventStreamCommand";
import { CreateEventTriggerCommandInput, CreateEventTriggerCommandOutput } from "./commands/CreateEventTriggerCommand";
import {
  CreateIntegrationWorkflowCommandInput,
  CreateIntegrationWorkflowCommandOutput,
} from "./commands/CreateIntegrationWorkflowCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand";
import {
  CreateSegmentDefinitionCommandInput,
  CreateSegmentDefinitionCommandOutput,
} from "./commands/CreateSegmentDefinitionCommand";
import {
  CreateSegmentEstimateCommandInput,
  CreateSegmentEstimateCommandOutput,
} from "./commands/CreateSegmentEstimateCommand";
import {
  CreateSegmentSnapshotCommandInput,
  CreateSegmentSnapshotCommandOutput,
} from "./commands/CreateSegmentSnapshotCommand";
import { CreateUploadJobCommandInput, CreateUploadJobCommandOutput } from "./commands/CreateUploadJobCommand";
import {
  DeleteCalculatedAttributeDefinitionCommandInput,
  DeleteCalculatedAttributeDefinitionCommandOutput,
} from "./commands/DeleteCalculatedAttributeDefinitionCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteDomainLayoutCommandInput, DeleteDomainLayoutCommandOutput } from "./commands/DeleteDomainLayoutCommand";
import { DeleteEventStreamCommandInput, DeleteEventStreamCommandOutput } from "./commands/DeleteEventStreamCommand";
import { DeleteEventTriggerCommandInput, DeleteEventTriggerCommandOutput } from "./commands/DeleteEventTriggerCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "./commands/DeleteProfileCommand";
import { DeleteProfileKeyCommandInput, DeleteProfileKeyCommandOutput } from "./commands/DeleteProfileKeyCommand";
import {
  DeleteProfileObjectCommandInput,
  DeleteProfileObjectCommandOutput,
} from "./commands/DeleteProfileObjectCommand";
import {
  DeleteProfileObjectTypeCommandInput,
  DeleteProfileObjectTypeCommandOutput,
} from "./commands/DeleteProfileObjectTypeCommand";
import {
  DeleteSegmentDefinitionCommandInput,
  DeleteSegmentDefinitionCommandOutput,
} from "./commands/DeleteSegmentDefinitionCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import {
  DetectProfileObjectTypeCommandInput,
  DetectProfileObjectTypeCommandOutput,
} from "./commands/DetectProfileObjectTypeCommand";
import {
  GetAutoMergingPreviewCommandInput,
  GetAutoMergingPreviewCommandOutput,
} from "./commands/GetAutoMergingPreviewCommand";
import {
  GetCalculatedAttributeDefinitionCommandInput,
  GetCalculatedAttributeDefinitionCommandOutput,
} from "./commands/GetCalculatedAttributeDefinitionCommand";
import {
  GetCalculatedAttributeForProfileCommandInput,
  GetCalculatedAttributeForProfileCommandOutput,
} from "./commands/GetCalculatedAttributeForProfileCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import { GetDomainLayoutCommandInput, GetDomainLayoutCommandOutput } from "./commands/GetDomainLayoutCommand";
import { GetEventStreamCommandInput, GetEventStreamCommandOutput } from "./commands/GetEventStreamCommand";
import { GetEventTriggerCommandInput, GetEventTriggerCommandOutput } from "./commands/GetEventTriggerCommand";
import {
  GetIdentityResolutionJobCommandInput,
  GetIdentityResolutionJobCommandOutput,
} from "./commands/GetIdentityResolutionJobCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import { GetMatchesCommandInput, GetMatchesCommandOutput } from "./commands/GetMatchesCommand";
import {
  GetProfileHistoryRecordCommandInput,
  GetProfileHistoryRecordCommandOutput,
} from "./commands/GetProfileHistoryRecordCommand";
import {
  GetProfileObjectTypeCommandInput,
  GetProfileObjectTypeCommandOutput,
} from "./commands/GetProfileObjectTypeCommand";
import {
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
} from "./commands/GetProfileObjectTypeTemplateCommand";
import {
  GetSegmentDefinitionCommandInput,
  GetSegmentDefinitionCommandOutput,
} from "./commands/GetSegmentDefinitionCommand";
import { GetSegmentEstimateCommandInput, GetSegmentEstimateCommandOutput } from "./commands/GetSegmentEstimateCommand";
import {
  GetSegmentMembershipCommandInput,
  GetSegmentMembershipCommandOutput,
} from "./commands/GetSegmentMembershipCommand";
import { GetSegmentSnapshotCommandInput, GetSegmentSnapshotCommandOutput } from "./commands/GetSegmentSnapshotCommand";
import { GetSimilarProfilesCommandInput, GetSimilarProfilesCommandOutput } from "./commands/GetSimilarProfilesCommand";
import { GetUploadJobCommandInput, GetUploadJobCommandOutput } from "./commands/GetUploadJobCommand";
import { GetUploadJobPathCommandInput, GetUploadJobPathCommandOutput } from "./commands/GetUploadJobPathCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import { GetWorkflowStepsCommandInput, GetWorkflowStepsCommandOutput } from "./commands/GetWorkflowStepsCommand";
import {
  ListAccountIntegrationsCommandInput,
  ListAccountIntegrationsCommandOutput,
} from "./commands/ListAccountIntegrationsCommand";
import {
  ListCalculatedAttributeDefinitionsCommandInput,
  ListCalculatedAttributeDefinitionsCommandOutput,
} from "./commands/ListCalculatedAttributeDefinitionsCommand";
import {
  ListCalculatedAttributesForProfileCommandInput,
  ListCalculatedAttributesForProfileCommandOutput,
} from "./commands/ListCalculatedAttributesForProfileCommand";
import { ListDomainLayoutsCommandInput, ListDomainLayoutsCommandOutput } from "./commands/ListDomainLayoutsCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListEventStreamsCommandInput, ListEventStreamsCommandOutput } from "./commands/ListEventStreamsCommand";
import { ListEventTriggersCommandInput, ListEventTriggersCommandOutput } from "./commands/ListEventTriggersCommand";
import {
  ListIdentityResolutionJobsCommandInput,
  ListIdentityResolutionJobsCommandOutput,
} from "./commands/ListIdentityResolutionJobsCommand";
import { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "./commands/ListIntegrationsCommand";
import {
  ListObjectTypeAttributesCommandInput,
  ListObjectTypeAttributesCommandOutput,
} from "./commands/ListObjectTypeAttributesCommand";
import {
  ListProfileAttributeValuesCommandInput,
  ListProfileAttributeValuesCommandOutput,
} from "./commands/ListProfileAttributeValuesCommand";
import {
  ListProfileHistoryRecordsCommandInput,
  ListProfileHistoryRecordsCommandOutput,
} from "./commands/ListProfileHistoryRecordsCommand";
import { ListProfileObjectsCommandInput, ListProfileObjectsCommandOutput } from "./commands/ListProfileObjectsCommand";
import {
  ListProfileObjectTypesCommandInput,
  ListProfileObjectTypesCommandOutput,
} from "./commands/ListProfileObjectTypesCommand";
import {
  ListProfileObjectTypeTemplatesCommandInput,
  ListProfileObjectTypeTemplatesCommandOutput,
} from "./commands/ListProfileObjectTypeTemplatesCommand";
import {
  ListRuleBasedMatchesCommandInput,
  ListRuleBasedMatchesCommandOutput,
} from "./commands/ListRuleBasedMatchesCommand";
import {
  ListSegmentDefinitionsCommandInput,
  ListSegmentDefinitionsCommandOutput,
} from "./commands/ListSegmentDefinitionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUploadJobsCommandInput, ListUploadJobsCommandOutput } from "./commands/ListUploadJobsCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import { MergeProfilesCommandInput, MergeProfilesCommandOutput } from "./commands/MergeProfilesCommand";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "./commands/PutIntegrationCommand";
import { PutProfileObjectCommandInput, PutProfileObjectCommandOutput } from "./commands/PutProfileObjectCommand";
import {
  PutProfileObjectTypeCommandInput,
  PutProfileObjectTypeCommandOutput,
} from "./commands/PutProfileObjectTypeCommand";
import { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "./commands/SearchProfilesCommand";
import { StartUploadJobCommandInput, StartUploadJobCommandOutput } from "./commands/StartUploadJobCommand";
import { StopUploadJobCommandInput, StopUploadJobCommandOutput } from "./commands/StopUploadJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateCalculatedAttributeDefinitionCommandInput,
  UpdateCalculatedAttributeDefinitionCommandOutput,
} from "./commands/UpdateCalculatedAttributeDefinitionCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import { UpdateDomainLayoutCommandInput, UpdateDomainLayoutCommandOutput } from "./commands/UpdateDomainLayoutCommand";
import { UpdateEventTriggerCommandInput, UpdateEventTriggerCommandOutput } from "./commands/UpdateEventTriggerCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "./commands/UpdateProfileCommand";
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
  | AddProfileKeyCommandInput
  | BatchGetCalculatedAttributeForProfileCommandInput
  | BatchGetProfileCommandInput
  | CreateCalculatedAttributeDefinitionCommandInput
  | CreateDomainCommandInput
  | CreateDomainLayoutCommandInput
  | CreateEventStreamCommandInput
  | CreateEventTriggerCommandInput
  | CreateIntegrationWorkflowCommandInput
  | CreateProfileCommandInput
  | CreateSegmentDefinitionCommandInput
  | CreateSegmentEstimateCommandInput
  | CreateSegmentSnapshotCommandInput
  | CreateUploadJobCommandInput
  | DeleteCalculatedAttributeDefinitionCommandInput
  | DeleteDomainCommandInput
  | DeleteDomainLayoutCommandInput
  | DeleteEventStreamCommandInput
  | DeleteEventTriggerCommandInput
  | DeleteIntegrationCommandInput
  | DeleteProfileCommandInput
  | DeleteProfileKeyCommandInput
  | DeleteProfileObjectCommandInput
  | DeleteProfileObjectTypeCommandInput
  | DeleteSegmentDefinitionCommandInput
  | DeleteWorkflowCommandInput
  | DetectProfileObjectTypeCommandInput
  | GetAutoMergingPreviewCommandInput
  | GetCalculatedAttributeDefinitionCommandInput
  | GetCalculatedAttributeForProfileCommandInput
  | GetDomainCommandInput
  | GetDomainLayoutCommandInput
  | GetEventStreamCommandInput
  | GetEventTriggerCommandInput
  | GetIdentityResolutionJobCommandInput
  | GetIntegrationCommandInput
  | GetMatchesCommandInput
  | GetProfileHistoryRecordCommandInput
  | GetProfileObjectTypeCommandInput
  | GetProfileObjectTypeTemplateCommandInput
  | GetSegmentDefinitionCommandInput
  | GetSegmentEstimateCommandInput
  | GetSegmentMembershipCommandInput
  | GetSegmentSnapshotCommandInput
  | GetSimilarProfilesCommandInput
  | GetUploadJobCommandInput
  | GetUploadJobPathCommandInput
  | GetWorkflowCommandInput
  | GetWorkflowStepsCommandInput
  | ListAccountIntegrationsCommandInput
  | ListCalculatedAttributeDefinitionsCommandInput
  | ListCalculatedAttributesForProfileCommandInput
  | ListDomainLayoutsCommandInput
  | ListDomainsCommandInput
  | ListEventStreamsCommandInput
  | ListEventTriggersCommandInput
  | ListIdentityResolutionJobsCommandInput
  | ListIntegrationsCommandInput
  | ListObjectTypeAttributesCommandInput
  | ListProfileAttributeValuesCommandInput
  | ListProfileHistoryRecordsCommandInput
  | ListProfileObjectTypeTemplatesCommandInput
  | ListProfileObjectTypesCommandInput
  | ListProfileObjectsCommandInput
  | ListRuleBasedMatchesCommandInput
  | ListSegmentDefinitionsCommandInput
  | ListTagsForResourceCommandInput
  | ListUploadJobsCommandInput
  | ListWorkflowsCommandInput
  | MergeProfilesCommandInput
  | PutIntegrationCommandInput
  | PutProfileObjectCommandInput
  | PutProfileObjectTypeCommandInput
  | SearchProfilesCommandInput
  | StartUploadJobCommandInput
  | StopUploadJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCalculatedAttributeDefinitionCommandInput
  | UpdateDomainCommandInput
  | UpdateDomainLayoutCommandInput
  | UpdateEventTriggerCommandInput
  | UpdateProfileCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddProfileKeyCommandOutput
  | BatchGetCalculatedAttributeForProfileCommandOutput
  | BatchGetProfileCommandOutput
  | CreateCalculatedAttributeDefinitionCommandOutput
  | CreateDomainCommandOutput
  | CreateDomainLayoutCommandOutput
  | CreateEventStreamCommandOutput
  | CreateEventTriggerCommandOutput
  | CreateIntegrationWorkflowCommandOutput
  | CreateProfileCommandOutput
  | CreateSegmentDefinitionCommandOutput
  | CreateSegmentEstimateCommandOutput
  | CreateSegmentSnapshotCommandOutput
  | CreateUploadJobCommandOutput
  | DeleteCalculatedAttributeDefinitionCommandOutput
  | DeleteDomainCommandOutput
  | DeleteDomainLayoutCommandOutput
  | DeleteEventStreamCommandOutput
  | DeleteEventTriggerCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteProfileCommandOutput
  | DeleteProfileKeyCommandOutput
  | DeleteProfileObjectCommandOutput
  | DeleteProfileObjectTypeCommandOutput
  | DeleteSegmentDefinitionCommandOutput
  | DeleteWorkflowCommandOutput
  | DetectProfileObjectTypeCommandOutput
  | GetAutoMergingPreviewCommandOutput
  | GetCalculatedAttributeDefinitionCommandOutput
  | GetCalculatedAttributeForProfileCommandOutput
  | GetDomainCommandOutput
  | GetDomainLayoutCommandOutput
  | GetEventStreamCommandOutput
  | GetEventTriggerCommandOutput
  | GetIdentityResolutionJobCommandOutput
  | GetIntegrationCommandOutput
  | GetMatchesCommandOutput
  | GetProfileHistoryRecordCommandOutput
  | GetProfileObjectTypeCommandOutput
  | GetProfileObjectTypeTemplateCommandOutput
  | GetSegmentDefinitionCommandOutput
  | GetSegmentEstimateCommandOutput
  | GetSegmentMembershipCommandOutput
  | GetSegmentSnapshotCommandOutput
  | GetSimilarProfilesCommandOutput
  | GetUploadJobCommandOutput
  | GetUploadJobPathCommandOutput
  | GetWorkflowCommandOutput
  | GetWorkflowStepsCommandOutput
  | ListAccountIntegrationsCommandOutput
  | ListCalculatedAttributeDefinitionsCommandOutput
  | ListCalculatedAttributesForProfileCommandOutput
  | ListDomainLayoutsCommandOutput
  | ListDomainsCommandOutput
  | ListEventStreamsCommandOutput
  | ListEventTriggersCommandOutput
  | ListIdentityResolutionJobsCommandOutput
  | ListIntegrationsCommandOutput
  | ListObjectTypeAttributesCommandOutput
  | ListProfileAttributeValuesCommandOutput
  | ListProfileHistoryRecordsCommandOutput
  | ListProfileObjectTypeTemplatesCommandOutput
  | ListProfileObjectTypesCommandOutput
  | ListProfileObjectsCommandOutput
  | ListRuleBasedMatchesCommandOutput
  | ListSegmentDefinitionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUploadJobsCommandOutput
  | ListWorkflowsCommandOutput
  | MergeProfilesCommandOutput
  | PutIntegrationCommandOutput
  | PutProfileObjectCommandOutput
  | PutProfileObjectTypeCommandOutput
  | SearchProfilesCommandOutput
  | StartUploadJobCommandOutput
  | StopUploadJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCalculatedAttributeDefinitionCommandOutput
  | UpdateDomainCommandOutput
  | UpdateDomainLayoutCommandOutput
  | UpdateEventTriggerCommandOutput
  | UpdateProfileCommandOutput;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type CustomerProfilesClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of CustomerProfilesClient class constructor that set the region, credentials and other options.
 */
export interface CustomerProfilesClientConfig extends CustomerProfilesClientConfigType {}

/**
 * @public
 */
export type CustomerProfilesClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of CustomerProfilesClient class. This is resolved and normalized from the {@link CustomerProfilesClientConfig | constructor configuration interface}.
 */
export interface CustomerProfilesClientResolvedConfig extends CustomerProfilesClientResolvedConfigType {}

/**
 * <fullname>Amazon Connect Customer Profiles</fullname>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Customer_Profiles.html">Customer Profiles actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Customer_Profiles.html">Customer Profiles data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon Connect Customer Profiles is a unified customer profile for your contact
 *          center that has pre-built connectors powered by AppFlow that make it easy to combine
 *          customer information from third party applications, such as Salesforce (CRM), ServiceNow
 *          (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. </p>
 *          <p>For more information about the Amazon Connect Customer Profiles feature, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/customer-profiles.html">Use Customer
 *             Profiles</a> in the <i>Amazon Connect Administrator's Guide</i>. </p>
 * @public
 */
export class CustomerProfilesClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CustomerProfilesClientResolvedConfig
> {
  /**
   * The resolved configuration of CustomerProfilesClient class. This is resolved and normalized from the {@link CustomerProfilesClientConfig | constructor configuration interface}.
   */
  readonly config: CustomerProfilesClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CustomerProfilesClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultCustomerProfilesHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CustomerProfilesClientResolvedConfig) =>
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
