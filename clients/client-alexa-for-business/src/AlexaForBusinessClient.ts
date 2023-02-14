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

import { ApproveSkillCommandInput, ApproveSkillCommandOutput } from "./commands/ApproveSkillCommand";
import {
  AssociateContactWithAddressBookCommandInput,
  AssociateContactWithAddressBookCommandOutput,
} from "./commands/AssociateContactWithAddressBookCommand";
import {
  AssociateDeviceWithNetworkProfileCommandInput,
  AssociateDeviceWithNetworkProfileCommandOutput,
} from "./commands/AssociateDeviceWithNetworkProfileCommand";
import {
  AssociateDeviceWithRoomCommandInput,
  AssociateDeviceWithRoomCommandOutput,
} from "./commands/AssociateDeviceWithRoomCommand";
import {
  AssociateSkillGroupWithRoomCommandInput,
  AssociateSkillGroupWithRoomCommandOutput,
} from "./commands/AssociateSkillGroupWithRoomCommand";
import {
  AssociateSkillWithSkillGroupCommandInput,
  AssociateSkillWithSkillGroupCommandOutput,
} from "./commands/AssociateSkillWithSkillGroupCommand";
import {
  AssociateSkillWithUsersCommandInput,
  AssociateSkillWithUsersCommandOutput,
} from "./commands/AssociateSkillWithUsersCommand";
import { CreateAddressBookCommandInput, CreateAddressBookCommandOutput } from "./commands/CreateAddressBookCommand";
import {
  CreateBusinessReportScheduleCommandInput,
  CreateBusinessReportScheduleCommandOutput,
} from "./commands/CreateBusinessReportScheduleCommand";
import {
  CreateConferenceProviderCommandInput,
  CreateConferenceProviderCommandOutput,
} from "./commands/CreateConferenceProviderCommand";
import { CreateContactCommandInput, CreateContactCommandOutput } from "./commands/CreateContactCommand";
import { CreateGatewayGroupCommandInput, CreateGatewayGroupCommandOutput } from "./commands/CreateGatewayGroupCommand";
import {
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput,
} from "./commands/CreateNetworkProfileCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand";
import { CreateRoomCommandInput, CreateRoomCommandOutput } from "./commands/CreateRoomCommand";
import { CreateSkillGroupCommandInput, CreateSkillGroupCommandOutput } from "./commands/CreateSkillGroupCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteAddressBookCommandInput, DeleteAddressBookCommandOutput } from "./commands/DeleteAddressBookCommand";
import {
  DeleteBusinessReportScheduleCommandInput,
  DeleteBusinessReportScheduleCommandOutput,
} from "./commands/DeleteBusinessReportScheduleCommand";
import {
  DeleteConferenceProviderCommandInput,
  DeleteConferenceProviderCommandOutput,
} from "./commands/DeleteConferenceProviderCommand";
import { DeleteContactCommandInput, DeleteContactCommandOutput } from "./commands/DeleteContactCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "./commands/DeleteDeviceCommand";
import {
  DeleteDeviceUsageDataCommandInput,
  DeleteDeviceUsageDataCommandOutput,
} from "./commands/DeleteDeviceUsageDataCommand";
import { DeleteGatewayGroupCommandInput, DeleteGatewayGroupCommandOutput } from "./commands/DeleteGatewayGroupCommand";
import {
  DeleteNetworkProfileCommandInput,
  DeleteNetworkProfileCommandOutput,
} from "./commands/DeleteNetworkProfileCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "./commands/DeleteProfileCommand";
import { DeleteRoomCommandInput, DeleteRoomCommandOutput } from "./commands/DeleteRoomCommand";
import {
  DeleteRoomSkillParameterCommandInput,
  DeleteRoomSkillParameterCommandOutput,
} from "./commands/DeleteRoomSkillParameterCommand";
import {
  DeleteSkillAuthorizationCommandInput,
  DeleteSkillAuthorizationCommandOutput,
} from "./commands/DeleteSkillAuthorizationCommand";
import { DeleteSkillGroupCommandInput, DeleteSkillGroupCommandOutput } from "./commands/DeleteSkillGroupCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DisassociateContactFromAddressBookCommandInput,
  DisassociateContactFromAddressBookCommandOutput,
} from "./commands/DisassociateContactFromAddressBookCommand";
import {
  DisassociateDeviceFromRoomCommandInput,
  DisassociateDeviceFromRoomCommandOutput,
} from "./commands/DisassociateDeviceFromRoomCommand";
import {
  DisassociateSkillFromSkillGroupCommandInput,
  DisassociateSkillFromSkillGroupCommandOutput,
} from "./commands/DisassociateSkillFromSkillGroupCommand";
import {
  DisassociateSkillFromUsersCommandInput,
  DisassociateSkillFromUsersCommandOutput,
} from "./commands/DisassociateSkillFromUsersCommand";
import {
  DisassociateSkillGroupFromRoomCommandInput,
  DisassociateSkillGroupFromRoomCommandOutput,
} from "./commands/DisassociateSkillGroupFromRoomCommand";
import {
  ForgetSmartHomeAppliancesCommandInput,
  ForgetSmartHomeAppliancesCommandOutput,
} from "./commands/ForgetSmartHomeAppliancesCommand";
import { GetAddressBookCommandInput, GetAddressBookCommandOutput } from "./commands/GetAddressBookCommand";
import {
  GetConferencePreferenceCommandInput,
  GetConferencePreferenceCommandOutput,
} from "./commands/GetConferencePreferenceCommand";
import {
  GetConferenceProviderCommandInput,
  GetConferenceProviderCommandOutput,
} from "./commands/GetConferenceProviderCommand";
import { GetContactCommandInput, GetContactCommandOutput } from "./commands/GetContactCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "./commands/GetDeviceCommand";
import { GetGatewayCommandInput, GetGatewayCommandOutput } from "./commands/GetGatewayCommand";
import { GetGatewayGroupCommandInput, GetGatewayGroupCommandOutput } from "./commands/GetGatewayGroupCommand";
import {
  GetInvitationConfigurationCommandInput,
  GetInvitationConfigurationCommandOutput,
} from "./commands/GetInvitationConfigurationCommand";
import { GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput } from "./commands/GetNetworkProfileCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "./commands/GetProfileCommand";
import { GetRoomCommandInput, GetRoomCommandOutput } from "./commands/GetRoomCommand";
import {
  GetRoomSkillParameterCommandInput,
  GetRoomSkillParameterCommandOutput,
} from "./commands/GetRoomSkillParameterCommand";
import { GetSkillGroupCommandInput, GetSkillGroupCommandOutput } from "./commands/GetSkillGroupCommand";
import {
  ListBusinessReportSchedulesCommandInput,
  ListBusinessReportSchedulesCommandOutput,
} from "./commands/ListBusinessReportSchedulesCommand";
import {
  ListConferenceProvidersCommandInput,
  ListConferenceProvidersCommandOutput,
} from "./commands/ListConferenceProvidersCommand";
import { ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput } from "./commands/ListDeviceEventsCommand";
import { ListGatewayGroupsCommandInput, ListGatewayGroupsCommandOutput } from "./commands/ListGatewayGroupsCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import { ListSkillsCommandInput, ListSkillsCommandOutput } from "./commands/ListSkillsCommand";
import {
  ListSkillsStoreCategoriesCommandInput,
  ListSkillsStoreCategoriesCommandOutput,
} from "./commands/ListSkillsStoreCategoriesCommand";
import {
  ListSkillsStoreSkillsByCategoryCommandInput,
  ListSkillsStoreSkillsByCategoryCommandOutput,
} from "./commands/ListSkillsStoreSkillsByCategoryCommand";
import {
  ListSmartHomeAppliancesCommandInput,
  ListSmartHomeAppliancesCommandOutput,
} from "./commands/ListSmartHomeAppliancesCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  PutConferencePreferenceCommandInput,
  PutConferencePreferenceCommandOutput,
} from "./commands/PutConferencePreferenceCommand";
import {
  PutInvitationConfigurationCommandInput,
  PutInvitationConfigurationCommandOutput,
} from "./commands/PutInvitationConfigurationCommand";
import {
  PutRoomSkillParameterCommandInput,
  PutRoomSkillParameterCommandOutput,
} from "./commands/PutRoomSkillParameterCommand";
import {
  PutSkillAuthorizationCommandInput,
  PutSkillAuthorizationCommandOutput,
} from "./commands/PutSkillAuthorizationCommand";
import { RegisterAVSDeviceCommandInput, RegisterAVSDeviceCommandOutput } from "./commands/RegisterAVSDeviceCommand";
import { RejectSkillCommandInput, RejectSkillCommandOutput } from "./commands/RejectSkillCommand";
import { ResolveRoomCommandInput, ResolveRoomCommandOutput } from "./commands/ResolveRoomCommand";
import { RevokeInvitationCommandInput, RevokeInvitationCommandOutput } from "./commands/RevokeInvitationCommand";
import { SearchAddressBooksCommandInput, SearchAddressBooksCommandOutput } from "./commands/SearchAddressBooksCommand";
import { SearchContactsCommandInput, SearchContactsCommandOutput } from "./commands/SearchContactsCommand";
import { SearchDevicesCommandInput, SearchDevicesCommandOutput } from "./commands/SearchDevicesCommand";
import {
  SearchNetworkProfilesCommandInput,
  SearchNetworkProfilesCommandOutput,
} from "./commands/SearchNetworkProfilesCommand";
import { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "./commands/SearchProfilesCommand";
import { SearchRoomsCommandInput, SearchRoomsCommandOutput } from "./commands/SearchRoomsCommand";
import { SearchSkillGroupsCommandInput, SearchSkillGroupsCommandOutput } from "./commands/SearchSkillGroupsCommand";
import { SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import { SendAnnouncementCommandInput, SendAnnouncementCommandOutput } from "./commands/SendAnnouncementCommand";
import { SendInvitationCommandInput, SendInvitationCommandOutput } from "./commands/SendInvitationCommand";
import { StartDeviceSyncCommandInput, StartDeviceSyncCommandOutput } from "./commands/StartDeviceSyncCommand";
import {
  StartSmartHomeApplianceDiscoveryCommandInput,
  StartSmartHomeApplianceDiscoveryCommandOutput,
} from "./commands/StartSmartHomeApplianceDiscoveryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAddressBookCommandInput, UpdateAddressBookCommandOutput } from "./commands/UpdateAddressBookCommand";
import {
  UpdateBusinessReportScheduleCommandInput,
  UpdateBusinessReportScheduleCommandOutput,
} from "./commands/UpdateBusinessReportScheduleCommand";
import {
  UpdateConferenceProviderCommandInput,
  UpdateConferenceProviderCommandOutput,
} from "./commands/UpdateConferenceProviderCommand";
import { UpdateContactCommandInput, UpdateContactCommandOutput } from "./commands/UpdateContactCommand";
import { UpdateDeviceCommandInput, UpdateDeviceCommandOutput } from "./commands/UpdateDeviceCommand";
import { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "./commands/UpdateGatewayCommand";
import { UpdateGatewayGroupCommandInput, UpdateGatewayGroupCommandOutput } from "./commands/UpdateGatewayGroupCommand";
import {
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput,
} from "./commands/UpdateNetworkProfileCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "./commands/UpdateProfileCommand";
import { UpdateRoomCommandInput, UpdateRoomCommandOutput } from "./commands/UpdateRoomCommand";
import { UpdateSkillGroupCommandInput, UpdateSkillGroupCommandOutput } from "./commands/UpdateSkillGroupCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | ApproveSkillCommandInput
  | AssociateContactWithAddressBookCommandInput
  | AssociateDeviceWithNetworkProfileCommandInput
  | AssociateDeviceWithRoomCommandInput
  | AssociateSkillGroupWithRoomCommandInput
  | AssociateSkillWithSkillGroupCommandInput
  | AssociateSkillWithUsersCommandInput
  | CreateAddressBookCommandInput
  | CreateBusinessReportScheduleCommandInput
  | CreateConferenceProviderCommandInput
  | CreateContactCommandInput
  | CreateGatewayGroupCommandInput
  | CreateNetworkProfileCommandInput
  | CreateProfileCommandInput
  | CreateRoomCommandInput
  | CreateSkillGroupCommandInput
  | CreateUserCommandInput
  | DeleteAddressBookCommandInput
  | DeleteBusinessReportScheduleCommandInput
  | DeleteConferenceProviderCommandInput
  | DeleteContactCommandInput
  | DeleteDeviceCommandInput
  | DeleteDeviceUsageDataCommandInput
  | DeleteGatewayGroupCommandInput
  | DeleteNetworkProfileCommandInput
  | DeleteProfileCommandInput
  | DeleteRoomCommandInput
  | DeleteRoomSkillParameterCommandInput
  | DeleteSkillAuthorizationCommandInput
  | DeleteSkillGroupCommandInput
  | DeleteUserCommandInput
  | DisassociateContactFromAddressBookCommandInput
  | DisassociateDeviceFromRoomCommandInput
  | DisassociateSkillFromSkillGroupCommandInput
  | DisassociateSkillFromUsersCommandInput
  | DisassociateSkillGroupFromRoomCommandInput
  | ForgetSmartHomeAppliancesCommandInput
  | GetAddressBookCommandInput
  | GetConferencePreferenceCommandInput
  | GetConferenceProviderCommandInput
  | GetContactCommandInput
  | GetDeviceCommandInput
  | GetGatewayCommandInput
  | GetGatewayGroupCommandInput
  | GetInvitationConfigurationCommandInput
  | GetNetworkProfileCommandInput
  | GetProfileCommandInput
  | GetRoomCommandInput
  | GetRoomSkillParameterCommandInput
  | GetSkillGroupCommandInput
  | ListBusinessReportSchedulesCommandInput
  | ListConferenceProvidersCommandInput
  | ListDeviceEventsCommandInput
  | ListGatewayGroupsCommandInput
  | ListGatewaysCommandInput
  | ListSkillsCommandInput
  | ListSkillsStoreCategoriesCommandInput
  | ListSkillsStoreSkillsByCategoryCommandInput
  | ListSmartHomeAppliancesCommandInput
  | ListTagsCommandInput
  | PutConferencePreferenceCommandInput
  | PutInvitationConfigurationCommandInput
  | PutRoomSkillParameterCommandInput
  | PutSkillAuthorizationCommandInput
  | RegisterAVSDeviceCommandInput
  | RejectSkillCommandInput
  | ResolveRoomCommandInput
  | RevokeInvitationCommandInput
  | SearchAddressBooksCommandInput
  | SearchContactsCommandInput
  | SearchDevicesCommandInput
  | SearchNetworkProfilesCommandInput
  | SearchProfilesCommandInput
  | SearchRoomsCommandInput
  | SearchSkillGroupsCommandInput
  | SearchUsersCommandInput
  | SendAnnouncementCommandInput
  | SendInvitationCommandInput
  | StartDeviceSyncCommandInput
  | StartSmartHomeApplianceDiscoveryCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAddressBookCommandInput
  | UpdateBusinessReportScheduleCommandInput
  | UpdateConferenceProviderCommandInput
  | UpdateContactCommandInput
  | UpdateDeviceCommandInput
  | UpdateGatewayCommandInput
  | UpdateGatewayGroupCommandInput
  | UpdateNetworkProfileCommandInput
  | UpdateProfileCommandInput
  | UpdateRoomCommandInput
  | UpdateSkillGroupCommandInput;

export type ServiceOutputTypes =
  | ApproveSkillCommandOutput
  | AssociateContactWithAddressBookCommandOutput
  | AssociateDeviceWithNetworkProfileCommandOutput
  | AssociateDeviceWithRoomCommandOutput
  | AssociateSkillGroupWithRoomCommandOutput
  | AssociateSkillWithSkillGroupCommandOutput
  | AssociateSkillWithUsersCommandOutput
  | CreateAddressBookCommandOutput
  | CreateBusinessReportScheduleCommandOutput
  | CreateConferenceProviderCommandOutput
  | CreateContactCommandOutput
  | CreateGatewayGroupCommandOutput
  | CreateNetworkProfileCommandOutput
  | CreateProfileCommandOutput
  | CreateRoomCommandOutput
  | CreateSkillGroupCommandOutput
  | CreateUserCommandOutput
  | DeleteAddressBookCommandOutput
  | DeleteBusinessReportScheduleCommandOutput
  | DeleteConferenceProviderCommandOutput
  | DeleteContactCommandOutput
  | DeleteDeviceCommandOutput
  | DeleteDeviceUsageDataCommandOutput
  | DeleteGatewayGroupCommandOutput
  | DeleteNetworkProfileCommandOutput
  | DeleteProfileCommandOutput
  | DeleteRoomCommandOutput
  | DeleteRoomSkillParameterCommandOutput
  | DeleteSkillAuthorizationCommandOutput
  | DeleteSkillGroupCommandOutput
  | DeleteUserCommandOutput
  | DisassociateContactFromAddressBookCommandOutput
  | DisassociateDeviceFromRoomCommandOutput
  | DisassociateSkillFromSkillGroupCommandOutput
  | DisassociateSkillFromUsersCommandOutput
  | DisassociateSkillGroupFromRoomCommandOutput
  | ForgetSmartHomeAppliancesCommandOutput
  | GetAddressBookCommandOutput
  | GetConferencePreferenceCommandOutput
  | GetConferenceProviderCommandOutput
  | GetContactCommandOutput
  | GetDeviceCommandOutput
  | GetGatewayCommandOutput
  | GetGatewayGroupCommandOutput
  | GetInvitationConfigurationCommandOutput
  | GetNetworkProfileCommandOutput
  | GetProfileCommandOutput
  | GetRoomCommandOutput
  | GetRoomSkillParameterCommandOutput
  | GetSkillGroupCommandOutput
  | ListBusinessReportSchedulesCommandOutput
  | ListConferenceProvidersCommandOutput
  | ListDeviceEventsCommandOutput
  | ListGatewayGroupsCommandOutput
  | ListGatewaysCommandOutput
  | ListSkillsCommandOutput
  | ListSkillsStoreCategoriesCommandOutput
  | ListSkillsStoreSkillsByCategoryCommandOutput
  | ListSmartHomeAppliancesCommandOutput
  | ListTagsCommandOutput
  | PutConferencePreferenceCommandOutput
  | PutInvitationConfigurationCommandOutput
  | PutRoomSkillParameterCommandOutput
  | PutSkillAuthorizationCommandOutput
  | RegisterAVSDeviceCommandOutput
  | RejectSkillCommandOutput
  | ResolveRoomCommandOutput
  | RevokeInvitationCommandOutput
  | SearchAddressBooksCommandOutput
  | SearchContactsCommandOutput
  | SearchDevicesCommandOutput
  | SearchNetworkProfilesCommandOutput
  | SearchProfilesCommandOutput
  | SearchRoomsCommandOutput
  | SearchSkillGroupsCommandOutput
  | SearchUsersCommandOutput
  | SendAnnouncementCommandOutput
  | SendInvitationCommandOutput
  | StartDeviceSyncCommandOutput
  | StartSmartHomeApplianceDiscoveryCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAddressBookCommandOutput
  | UpdateBusinessReportScheduleCommandOutput
  | UpdateConferenceProviderCommandOutput
  | UpdateContactCommandOutput
  | UpdateDeviceCommandOutput
  | UpdateGatewayCommandOutput
  | UpdateGatewayGroupCommandOutput
  | UpdateNetworkProfileCommandOutput
  | UpdateProfileCommandOutput
  | UpdateRoomCommandOutput
  | UpdateSkillGroupCommandOutput;

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

type AlexaForBusinessClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of AlexaForBusinessClient class constructor that set the region, credentials and other options.
 */
export interface AlexaForBusinessClientConfig extends AlexaForBusinessClientConfigType {}

type AlexaForBusinessClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of AlexaForBusinessClient class. This is resolved and normalized from the {@link AlexaForBusinessClientConfig | constructor configuration interface}.
 */
export interface AlexaForBusinessClientResolvedConfig extends AlexaForBusinessClientResolvedConfigType {}

/**
 * <p>Alexa for Business helps you use Alexa in your organization. Alexa for Business provides you with the tools
 *          to manage Alexa devices, enroll your users, and assign skills, at scale. You can build your
 *          own context-aware voice skills using the Alexa Skills Kit and the Alexa for Business API operations.
 *          You can also make these available as private skills for your organization. Alexa for Business makes it
 *          efficient to voice-enable your products and services, thus providing context-aware voice
 *          experiences for your customers. Device makers building with the Alexa Voice Service (AVS)
 *          can create fully integrated solutions, register their products with Alexa for Business, and manage them
 *          as shared devices in their organization. </p>
 */
export class AlexaForBusinessClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AlexaForBusinessClientResolvedConfig
> {
  /**
   * The resolved configuration of AlexaForBusinessClient class. This is resolved and normalized from the {@link AlexaForBusinessClientConfig | constructor configuration interface}.
   */
  readonly config: AlexaForBusinessClientResolvedConfig;

  constructor(configuration: AlexaForBusinessClientConfig) {
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
