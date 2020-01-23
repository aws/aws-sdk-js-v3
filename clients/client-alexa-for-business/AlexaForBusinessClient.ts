import {
  ApproveSkillRequest,
  ApproveSkillResponse,
  AssociateContactWithAddressBookRequest,
  AssociateContactWithAddressBookResponse,
  AssociateDeviceWithNetworkProfileRequest,
  AssociateDeviceWithNetworkProfileResponse,
  AssociateDeviceWithRoomRequest,
  AssociateDeviceWithRoomResponse,
  AssociateSkillGroupWithRoomRequest,
  AssociateSkillGroupWithRoomResponse,
  AssociateSkillWithSkillGroupRequest,
  AssociateSkillWithSkillGroupResponse,
  AssociateSkillWithUsersRequest,
  AssociateSkillWithUsersResponse,
  CreateAddressBookRequest,
  CreateAddressBookResponse,
  CreateBusinessReportScheduleRequest,
  CreateBusinessReportScheduleResponse,
  CreateConferenceProviderRequest,
  CreateConferenceProviderResponse,
  CreateContactRequest,
  CreateContactResponse,
  CreateGatewayGroupRequest,
  CreateGatewayGroupResponse,
  CreateNetworkProfileRequest,
  CreateNetworkProfileResponse,
  CreateProfileRequest,
  CreateProfileResponse,
  CreateRoomRequest,
  CreateRoomResponse,
  CreateSkillGroupRequest,
  CreateSkillGroupResponse,
  CreateUserRequest,
  CreateUserResponse,
  DeleteAddressBookRequest,
  DeleteAddressBookResponse,
  DeleteBusinessReportScheduleRequest,
  DeleteBusinessReportScheduleResponse,
  DeleteConferenceProviderRequest,
  DeleteConferenceProviderResponse,
  DeleteContactRequest,
  DeleteContactResponse,
  DeleteDeviceRequest,
  DeleteDeviceResponse,
  DeleteDeviceUsageDataRequest,
  DeleteDeviceUsageDataResponse,
  DeleteGatewayGroupRequest,
  DeleteGatewayGroupResponse,
  DeleteNetworkProfileRequest,
  DeleteNetworkProfileResponse,
  DeleteProfileRequest,
  DeleteProfileResponse,
  DeleteRoomRequest,
  DeleteRoomResponse,
  DeleteRoomSkillParameterRequest,
  DeleteRoomSkillParameterResponse,
  DeleteSkillAuthorizationRequest,
  DeleteSkillAuthorizationResponse,
  DeleteSkillGroupRequest,
  DeleteSkillGroupResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  DisassociateContactFromAddressBookRequest,
  DisassociateContactFromAddressBookResponse,
  DisassociateDeviceFromRoomRequest,
  DisassociateDeviceFromRoomResponse,
  DisassociateSkillFromSkillGroupRequest,
  DisassociateSkillFromSkillGroupResponse,
  DisassociateSkillFromUsersRequest,
  DisassociateSkillFromUsersResponse,
  DisassociateSkillGroupFromRoomRequest,
  DisassociateSkillGroupFromRoomResponse,
  ForgetSmartHomeAppliancesRequest,
  ForgetSmartHomeAppliancesResponse,
  GetAddressBookRequest,
  GetAddressBookResponse,
  GetConferencePreferenceRequest,
  GetConferencePreferenceResponse,
  GetConferenceProviderRequest,
  GetConferenceProviderResponse,
  GetContactRequest,
  GetContactResponse,
  GetDeviceRequest,
  GetDeviceResponse,
  GetGatewayGroupRequest,
  GetGatewayGroupResponse,
  GetGatewayRequest,
  GetGatewayResponse,
  GetInvitationConfigurationRequest,
  GetInvitationConfigurationResponse,
  GetNetworkProfileRequest,
  GetNetworkProfileResponse,
  GetProfileRequest,
  GetProfileResponse,
  GetRoomRequest,
  GetRoomResponse,
  GetRoomSkillParameterRequest,
  GetRoomSkillParameterResponse,
  GetSkillGroupRequest,
  GetSkillGroupResponse,
  ListBusinessReportSchedulesRequest,
  ListBusinessReportSchedulesResponse,
  ListConferenceProvidersRequest,
  ListConferenceProvidersResponse,
  ListDeviceEventsRequest,
  ListDeviceEventsResponse,
  ListGatewayGroupsRequest,
  ListGatewayGroupsResponse,
  ListGatewaysRequest,
  ListGatewaysResponse,
  ListSkillsRequest,
  ListSkillsResponse,
  ListSkillsStoreCategoriesRequest,
  ListSkillsStoreCategoriesResponse,
  ListSkillsStoreSkillsByCategoryRequest,
  ListSkillsStoreSkillsByCategoryResponse,
  ListSmartHomeAppliancesRequest,
  ListSmartHomeAppliancesResponse,
  ListTagsRequest,
  ListTagsResponse,
  PutConferencePreferenceRequest,
  PutConferencePreferenceResponse,
  PutInvitationConfigurationRequest,
  PutInvitationConfigurationResponse,
  PutRoomSkillParameterRequest,
  PutRoomSkillParameterResponse,
  PutSkillAuthorizationRequest,
  PutSkillAuthorizationResponse,
  RegisterAVSDeviceRequest,
  RegisterAVSDeviceResponse,
  RejectSkillRequest,
  RejectSkillResponse,
  ResolveRoomRequest,
  ResolveRoomResponse,
  RevokeInvitationRequest,
  RevokeInvitationResponse,
  SearchAddressBooksRequest,
  SearchAddressBooksResponse,
  SearchContactsRequest,
  SearchContactsResponse,
  SearchDevicesRequest,
  SearchDevicesResponse,
  SearchNetworkProfilesRequest,
  SearchNetworkProfilesResponse,
  SearchProfilesRequest,
  SearchProfilesResponse,
  SearchRoomsRequest,
  SearchRoomsResponse,
  SearchSkillGroupsRequest,
  SearchSkillGroupsResponse,
  SearchUsersRequest,
  SearchUsersResponse,
  SendAnnouncementRequest,
  SendAnnouncementResponse,
  SendInvitationRequest,
  SendInvitationResponse,
  StartDeviceSyncRequest,
  StartDeviceSyncResponse,
  StartSmartHomeApplianceDiscoveryRequest,
  StartSmartHomeApplianceDiscoveryResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateAddressBookRequest,
  UpdateAddressBookResponse,
  UpdateBusinessReportScheduleRequest,
  UpdateBusinessReportScheduleResponse,
  UpdateConferenceProviderRequest,
  UpdateConferenceProviderResponse,
  UpdateContactRequest,
  UpdateContactResponse,
  UpdateDeviceRequest,
  UpdateDeviceResponse,
  UpdateGatewayGroupRequest,
  UpdateGatewayGroupResponse,
  UpdateGatewayRequest,
  UpdateGatewayResponse,
  UpdateNetworkProfileRequest,
  UpdateNetworkProfileResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  UpdateRoomRequest,
  UpdateRoomResponse,
  UpdateSkillGroupRequest,
  UpdateSkillGroupResponse
} from "./models/index";
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
  | ApproveSkillRequest
  | AssociateContactWithAddressBookRequest
  | AssociateDeviceWithNetworkProfileRequest
  | AssociateDeviceWithRoomRequest
  | AssociateSkillGroupWithRoomRequest
  | AssociateSkillWithSkillGroupRequest
  | AssociateSkillWithUsersRequest
  | CreateAddressBookRequest
  | CreateBusinessReportScheduleRequest
  | CreateConferenceProviderRequest
  | CreateContactRequest
  | CreateGatewayGroupRequest
  | CreateNetworkProfileRequest
  | CreateProfileRequest
  | CreateRoomRequest
  | CreateSkillGroupRequest
  | CreateUserRequest
  | DeleteAddressBookRequest
  | DeleteBusinessReportScheduleRequest
  | DeleteConferenceProviderRequest
  | DeleteContactRequest
  | DeleteDeviceRequest
  | DeleteDeviceUsageDataRequest
  | DeleteGatewayGroupRequest
  | DeleteNetworkProfileRequest
  | DeleteProfileRequest
  | DeleteRoomRequest
  | DeleteRoomSkillParameterRequest
  | DeleteSkillAuthorizationRequest
  | DeleteSkillGroupRequest
  | DeleteUserRequest
  | DisassociateContactFromAddressBookRequest
  | DisassociateDeviceFromRoomRequest
  | DisassociateSkillFromSkillGroupRequest
  | DisassociateSkillFromUsersRequest
  | DisassociateSkillGroupFromRoomRequest
  | ForgetSmartHomeAppliancesRequest
  | GetAddressBookRequest
  | GetConferencePreferenceRequest
  | GetConferenceProviderRequest
  | GetContactRequest
  | GetDeviceRequest
  | GetGatewayGroupRequest
  | GetGatewayRequest
  | GetInvitationConfigurationRequest
  | GetNetworkProfileRequest
  | GetProfileRequest
  | GetRoomRequest
  | GetRoomSkillParameterRequest
  | GetSkillGroupRequest
  | ListBusinessReportSchedulesRequest
  | ListConferenceProvidersRequest
  | ListDeviceEventsRequest
  | ListGatewayGroupsRequest
  | ListGatewaysRequest
  | ListSkillsRequest
  | ListSkillsStoreCategoriesRequest
  | ListSkillsStoreSkillsByCategoryRequest
  | ListSmartHomeAppliancesRequest
  | ListTagsRequest
  | PutConferencePreferenceRequest
  | PutInvitationConfigurationRequest
  | PutRoomSkillParameterRequest
  | PutSkillAuthorizationRequest
  | RegisterAVSDeviceRequest
  | RejectSkillRequest
  | ResolveRoomRequest
  | RevokeInvitationRequest
  | SearchAddressBooksRequest
  | SearchContactsRequest
  | SearchDevicesRequest
  | SearchNetworkProfilesRequest
  | SearchProfilesRequest
  | SearchRoomsRequest
  | SearchSkillGroupsRequest
  | SearchUsersRequest
  | SendAnnouncementRequest
  | SendInvitationRequest
  | StartDeviceSyncRequest
  | StartSmartHomeApplianceDiscoveryRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateAddressBookRequest
  | UpdateBusinessReportScheduleRequest
  | UpdateConferenceProviderRequest
  | UpdateContactRequest
  | UpdateDeviceRequest
  | UpdateGatewayGroupRequest
  | UpdateGatewayRequest
  | UpdateNetworkProfileRequest
  | UpdateProfileRequest
  | UpdateRoomRequest
  | UpdateSkillGroupRequest;

export type ServiceOutputTypes =
  | ApproveSkillResponse
  | AssociateContactWithAddressBookResponse
  | AssociateDeviceWithNetworkProfileResponse
  | AssociateDeviceWithRoomResponse
  | AssociateSkillGroupWithRoomResponse
  | AssociateSkillWithSkillGroupResponse
  | AssociateSkillWithUsersResponse
  | CreateAddressBookResponse
  | CreateBusinessReportScheduleResponse
  | CreateConferenceProviderResponse
  | CreateContactResponse
  | CreateGatewayGroupResponse
  | CreateNetworkProfileResponse
  | CreateProfileResponse
  | CreateRoomResponse
  | CreateSkillGroupResponse
  | CreateUserResponse
  | DeleteAddressBookResponse
  | DeleteBusinessReportScheduleResponse
  | DeleteConferenceProviderResponse
  | DeleteContactResponse
  | DeleteDeviceResponse
  | DeleteDeviceUsageDataResponse
  | DeleteGatewayGroupResponse
  | DeleteNetworkProfileResponse
  | DeleteProfileResponse
  | DeleteRoomResponse
  | DeleteRoomSkillParameterResponse
  | DeleteSkillAuthorizationResponse
  | DeleteSkillGroupResponse
  | DeleteUserResponse
  | DisassociateContactFromAddressBookResponse
  | DisassociateDeviceFromRoomResponse
  | DisassociateSkillFromSkillGroupResponse
  | DisassociateSkillFromUsersResponse
  | DisassociateSkillGroupFromRoomResponse
  | ForgetSmartHomeAppliancesResponse
  | GetAddressBookResponse
  | GetConferencePreferenceResponse
  | GetConferenceProviderResponse
  | GetContactResponse
  | GetDeviceResponse
  | GetGatewayGroupResponse
  | GetGatewayResponse
  | GetInvitationConfigurationResponse
  | GetNetworkProfileResponse
  | GetProfileResponse
  | GetRoomResponse
  | GetRoomSkillParameterResponse
  | GetSkillGroupResponse
  | ListBusinessReportSchedulesResponse
  | ListConferenceProvidersResponse
  | ListDeviceEventsResponse
  | ListGatewayGroupsResponse
  | ListGatewaysResponse
  | ListSkillsResponse
  | ListSkillsStoreCategoriesResponse
  | ListSkillsStoreSkillsByCategoryResponse
  | ListSmartHomeAppliancesResponse
  | ListTagsResponse
  | PutConferencePreferenceResponse
  | PutInvitationConfigurationResponse
  | PutRoomSkillParameterResponse
  | PutSkillAuthorizationResponse
  | RegisterAVSDeviceResponse
  | RejectSkillResponse
  | ResolveRoomResponse
  | RevokeInvitationResponse
  | SearchAddressBooksResponse
  | SearchContactsResponse
  | SearchDevicesResponse
  | SearchNetworkProfilesResponse
  | SearchProfilesResponse
  | SearchRoomsResponse
  | SearchSkillGroupsResponse
  | SearchUsersResponse
  | SendAnnouncementResponse
  | SendInvitationResponse
  | StartDeviceSyncResponse
  | StartSmartHomeApplianceDiscoveryResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateAddressBookResponse
  | UpdateBusinessReportScheduleResponse
  | UpdateConferenceProviderResponse
  | UpdateContactResponse
  | UpdateDeviceResponse
  | UpdateGatewayGroupResponse
  | UpdateGatewayResponse
  | UpdateNetworkProfileResponse
  | UpdateProfileResponse
  | UpdateRoomResponse
  | UpdateSkillGroupResponse;

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

export type AlexaForBusinessClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type AlexaForBusinessClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *
 *          <p>Alexa for Business helps you use Alexa in your organization. Alexa for Business provides you with the tools
 *          to manage Alexa devices, enroll your users, and assign skills, at scale. You can build your
 *          own context-aware voice skills using the Alexa Skills Kit and the Alexa for Business API operations.
 *          You can also make these available as private skills for your organization. Alexa for Business makes it
 *          efficient to voice-enable your products and services, thus providing context-aware voice
 *          experiences for your customers. Device makers building with the Alexa Voice Service (AVS)
 *          can create fully integrated solutions, register their products with Alexa for Business, and manage them
 *          as shared devices in their organization. </p>
 *
 */
export class AlexaForBusinessClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AlexaForBusinessClientResolvedConfig
> {
  readonly config: AlexaForBusinessClientResolvedConfig;

  constructor(configuration: AlexaForBusinessClientConfig) {
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
