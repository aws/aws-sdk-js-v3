import {
  AssociatePhoneNumberWithUserRequest,
  AssociatePhoneNumberWithUserResponse,
  AssociatePhoneNumbersWithVoiceConnectorGroupRequest,
  AssociatePhoneNumbersWithVoiceConnectorGroupResponse,
  AssociatePhoneNumbersWithVoiceConnectorRequest,
  AssociatePhoneNumbersWithVoiceConnectorResponse,
  BatchCreateAttendeeRequest,
  BatchCreateAttendeeResponse,
  BatchCreateRoomMembershipRequest,
  BatchCreateRoomMembershipResponse,
  BatchDeletePhoneNumberRequest,
  BatchDeletePhoneNumberResponse,
  BatchSuspendUserRequest,
  BatchSuspendUserResponse,
  BatchUnsuspendUserRequest,
  BatchUnsuspendUserResponse,
  BatchUpdatePhoneNumberRequest,
  BatchUpdatePhoneNumberResponse,
  BatchUpdateUserRequest,
  BatchUpdateUserResponse,
  CreateAccountRequest,
  CreateAccountResponse,
  CreateAttendeeRequest,
  CreateAttendeeResponse,
  CreateBotRequest,
  CreateBotResponse,
  CreateMeetingRequest,
  CreateMeetingResponse,
  CreatePhoneNumberOrderRequest,
  CreatePhoneNumberOrderResponse,
  CreateRoomMembershipRequest,
  CreateRoomMembershipResponse,
  CreateRoomRequest,
  CreateRoomResponse,
  CreateVoiceConnectorGroupRequest,
  CreateVoiceConnectorGroupResponse,
  CreateVoiceConnectorRequest,
  CreateVoiceConnectorResponse,
  DeleteAccountRequest,
  DeleteAccountResponse,
  DeleteAttendeeRequest,
  DeleteEventsConfigurationRequest,
  DeleteMeetingRequest,
  DeletePhoneNumberRequest,
  DeleteRoomMembershipRequest,
  DeleteRoomRequest,
  DeleteVoiceConnectorGroupRequest,
  DeleteVoiceConnectorOriginationRequest,
  DeleteVoiceConnectorRequest,
  DeleteVoiceConnectorStreamingConfigurationRequest,
  DeleteVoiceConnectorTerminationCredentialsRequest,
  DeleteVoiceConnectorTerminationRequest,
  DisassociatePhoneNumberFromUserRequest,
  DisassociatePhoneNumberFromUserResponse,
  DisassociatePhoneNumbersFromVoiceConnectorGroupRequest,
  DisassociatePhoneNumbersFromVoiceConnectorGroupResponse,
  DisassociatePhoneNumbersFromVoiceConnectorRequest,
  DisassociatePhoneNumbersFromVoiceConnectorResponse,
  GetAccountRequest,
  GetAccountResponse,
  GetAccountSettingsRequest,
  GetAccountSettingsResponse,
  GetAttendeeRequest,
  GetAttendeeResponse,
  GetBotRequest,
  GetBotResponse,
  GetEventsConfigurationRequest,
  GetEventsConfigurationResponse,
  GetGlobalSettingsResponse,
  GetMeetingRequest,
  GetMeetingResponse,
  GetPhoneNumberOrderRequest,
  GetPhoneNumberOrderResponse,
  GetPhoneNumberRequest,
  GetPhoneNumberResponse,
  GetPhoneNumberSettingsResponse,
  GetRoomRequest,
  GetRoomResponse,
  GetUserRequest,
  GetUserResponse,
  GetUserSettingsRequest,
  GetUserSettingsResponse,
  GetVoiceConnectorGroupRequest,
  GetVoiceConnectorGroupResponse,
  GetVoiceConnectorLoggingConfigurationRequest,
  GetVoiceConnectorLoggingConfigurationResponse,
  GetVoiceConnectorOriginationRequest,
  GetVoiceConnectorOriginationResponse,
  GetVoiceConnectorRequest,
  GetVoiceConnectorResponse,
  GetVoiceConnectorStreamingConfigurationRequest,
  GetVoiceConnectorStreamingConfigurationResponse,
  GetVoiceConnectorTerminationHealthRequest,
  GetVoiceConnectorTerminationHealthResponse,
  GetVoiceConnectorTerminationRequest,
  GetVoiceConnectorTerminationResponse,
  InviteUsersRequest,
  InviteUsersResponse,
  ListAccountsRequest,
  ListAccountsResponse,
  ListAttendeesRequest,
  ListAttendeesResponse,
  ListBotsRequest,
  ListBotsResponse,
  ListMeetingsRequest,
  ListMeetingsResponse,
  ListPhoneNumberOrdersRequest,
  ListPhoneNumberOrdersResponse,
  ListPhoneNumbersRequest,
  ListPhoneNumbersResponse,
  ListRoomMembershipsRequest,
  ListRoomMembershipsResponse,
  ListRoomsRequest,
  ListRoomsResponse,
  ListUsersRequest,
  ListUsersResponse,
  ListVoiceConnectorGroupsRequest,
  ListVoiceConnectorGroupsResponse,
  ListVoiceConnectorTerminationCredentialsRequest,
  ListVoiceConnectorTerminationCredentialsResponse,
  ListVoiceConnectorsRequest,
  ListVoiceConnectorsResponse,
  LogoutUserRequest,
  LogoutUserResponse,
  PutEventsConfigurationRequest,
  PutEventsConfigurationResponse,
  PutVoiceConnectorLoggingConfigurationRequest,
  PutVoiceConnectorLoggingConfigurationResponse,
  PutVoiceConnectorOriginationRequest,
  PutVoiceConnectorOriginationResponse,
  PutVoiceConnectorStreamingConfigurationRequest,
  PutVoiceConnectorStreamingConfigurationResponse,
  PutVoiceConnectorTerminationCredentialsRequest,
  PutVoiceConnectorTerminationRequest,
  PutVoiceConnectorTerminationResponse,
  RegenerateSecurityTokenRequest,
  RegenerateSecurityTokenResponse,
  ResetPersonalPINRequest,
  ResetPersonalPINResponse,
  RestorePhoneNumberRequest,
  RestorePhoneNumberResponse,
  SearchAvailablePhoneNumbersRequest,
  SearchAvailablePhoneNumbersResponse,
  UpdateAccountRequest,
  UpdateAccountResponse,
  UpdateAccountSettingsRequest,
  UpdateAccountSettingsResponse,
  UpdateBotRequest,
  UpdateBotResponse,
  UpdateGlobalSettingsRequest,
  UpdatePhoneNumberRequest,
  UpdatePhoneNumberResponse,
  UpdatePhoneNumberSettingsRequest,
  UpdateRoomMembershipRequest,
  UpdateRoomMembershipResponse,
  UpdateRoomRequest,
  UpdateRoomResponse,
  UpdateUserRequest,
  UpdateUserResponse,
  UpdateUserSettingsRequest,
  UpdateVoiceConnectorGroupRequest,
  UpdateVoiceConnectorGroupResponse,
  UpdateVoiceConnectorRequest,
  UpdateVoiceConnectorResponse
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
  MetadataBearer as __MetadataBearer,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | {}
  | AssociatePhoneNumberWithUserRequest
  | AssociatePhoneNumbersWithVoiceConnectorGroupRequest
  | AssociatePhoneNumbersWithVoiceConnectorRequest
  | BatchCreateAttendeeRequest
  | BatchCreateRoomMembershipRequest
  | BatchDeletePhoneNumberRequest
  | BatchSuspendUserRequest
  | BatchUnsuspendUserRequest
  | BatchUpdatePhoneNumberRequest
  | BatchUpdateUserRequest
  | CreateAccountRequest
  | CreateAttendeeRequest
  | CreateBotRequest
  | CreateMeetingRequest
  | CreatePhoneNumberOrderRequest
  | CreateRoomMembershipRequest
  | CreateRoomRequest
  | CreateVoiceConnectorGroupRequest
  | CreateVoiceConnectorRequest
  | DeleteAccountRequest
  | DeleteAttendeeRequest
  | DeleteEventsConfigurationRequest
  | DeleteMeetingRequest
  | DeletePhoneNumberRequest
  | DeleteRoomMembershipRequest
  | DeleteRoomRequest
  | DeleteVoiceConnectorGroupRequest
  | DeleteVoiceConnectorOriginationRequest
  | DeleteVoiceConnectorRequest
  | DeleteVoiceConnectorStreamingConfigurationRequest
  | DeleteVoiceConnectorTerminationCredentialsRequest
  | DeleteVoiceConnectorTerminationRequest
  | DisassociatePhoneNumberFromUserRequest
  | DisassociatePhoneNumbersFromVoiceConnectorGroupRequest
  | DisassociatePhoneNumbersFromVoiceConnectorRequest
  | GetAccountRequest
  | GetAccountSettingsRequest
  | GetAttendeeRequest
  | GetBotRequest
  | GetEventsConfigurationRequest
  | GetMeetingRequest
  | GetPhoneNumberOrderRequest
  | GetPhoneNumberRequest
  | GetRoomRequest
  | GetUserRequest
  | GetUserSettingsRequest
  | GetVoiceConnectorGroupRequest
  | GetVoiceConnectorLoggingConfigurationRequest
  | GetVoiceConnectorOriginationRequest
  | GetVoiceConnectorRequest
  | GetVoiceConnectorStreamingConfigurationRequest
  | GetVoiceConnectorTerminationHealthRequest
  | GetVoiceConnectorTerminationRequest
  | InviteUsersRequest
  | ListAccountsRequest
  | ListAttendeesRequest
  | ListBotsRequest
  | ListMeetingsRequest
  | ListPhoneNumberOrdersRequest
  | ListPhoneNumbersRequest
  | ListRoomMembershipsRequest
  | ListRoomsRequest
  | ListUsersRequest
  | ListVoiceConnectorGroupsRequest
  | ListVoiceConnectorTerminationCredentialsRequest
  | ListVoiceConnectorsRequest
  | LogoutUserRequest
  | PutEventsConfigurationRequest
  | PutVoiceConnectorLoggingConfigurationRequest
  | PutVoiceConnectorOriginationRequest
  | PutVoiceConnectorStreamingConfigurationRequest
  | PutVoiceConnectorTerminationCredentialsRequest
  | PutVoiceConnectorTerminationRequest
  | RegenerateSecurityTokenRequest
  | ResetPersonalPINRequest
  | RestorePhoneNumberRequest
  | SearchAvailablePhoneNumbersRequest
  | UpdateAccountRequest
  | UpdateAccountSettingsRequest
  | UpdateBotRequest
  | UpdateGlobalSettingsRequest
  | UpdatePhoneNumberRequest
  | UpdatePhoneNumberSettingsRequest
  | UpdateRoomMembershipRequest
  | UpdateRoomRequest
  | UpdateUserRequest
  | UpdateUserSettingsRequest
  | UpdateVoiceConnectorGroupRequest
  | UpdateVoiceConnectorRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AssociatePhoneNumberWithUserResponse
  | AssociatePhoneNumbersWithVoiceConnectorGroupResponse
  | AssociatePhoneNumbersWithVoiceConnectorResponse
  | BatchCreateAttendeeResponse
  | BatchCreateRoomMembershipResponse
  | BatchDeletePhoneNumberResponse
  | BatchSuspendUserResponse
  | BatchUnsuspendUserResponse
  | BatchUpdatePhoneNumberResponse
  | BatchUpdateUserResponse
  | CreateAccountResponse
  | CreateAttendeeResponse
  | CreateBotResponse
  | CreateMeetingResponse
  | CreatePhoneNumberOrderResponse
  | CreateRoomMembershipResponse
  | CreateRoomResponse
  | CreateVoiceConnectorGroupResponse
  | CreateVoiceConnectorResponse
  | DeleteAccountResponse
  | DisassociatePhoneNumberFromUserResponse
  | DisassociatePhoneNumbersFromVoiceConnectorGroupResponse
  | DisassociatePhoneNumbersFromVoiceConnectorResponse
  | GetAccountResponse
  | GetAccountSettingsResponse
  | GetAttendeeResponse
  | GetBotResponse
  | GetEventsConfigurationResponse
  | GetGlobalSettingsResponse
  | GetMeetingResponse
  | GetPhoneNumberOrderResponse
  | GetPhoneNumberResponse
  | GetPhoneNumberSettingsResponse
  | GetRoomResponse
  | GetUserResponse
  | GetUserSettingsResponse
  | GetVoiceConnectorGroupResponse
  | GetVoiceConnectorLoggingConfigurationResponse
  | GetVoiceConnectorOriginationResponse
  | GetVoiceConnectorResponse
  | GetVoiceConnectorStreamingConfigurationResponse
  | GetVoiceConnectorTerminationHealthResponse
  | GetVoiceConnectorTerminationResponse
  | InviteUsersResponse
  | ListAccountsResponse
  | ListAttendeesResponse
  | ListBotsResponse
  | ListMeetingsResponse
  | ListPhoneNumberOrdersResponse
  | ListPhoneNumbersResponse
  | ListRoomMembershipsResponse
  | ListRoomsResponse
  | ListUsersResponse
  | ListVoiceConnectorGroupsResponse
  | ListVoiceConnectorTerminationCredentialsResponse
  | ListVoiceConnectorsResponse
  | LogoutUserResponse
  | PutEventsConfigurationResponse
  | PutVoiceConnectorLoggingConfigurationResponse
  | PutVoiceConnectorOriginationResponse
  | PutVoiceConnectorStreamingConfigurationResponse
  | PutVoiceConnectorTerminationResponse
  | RegenerateSecurityTokenResponse
  | ResetPersonalPINResponse
  | RestorePhoneNumberResponse
  | SearchAvailablePhoneNumbersResponse
  | UpdateAccountResponse
  | UpdateAccountSettingsResponse
  | UpdateBotResponse
  | UpdatePhoneNumberResponse
  | UpdateRoomMembershipResponse
  | UpdateRoomResponse
  | UpdateUserResponse
  | UpdateVoiceConnectorGroupResponse
  | UpdateVoiceConnectorResponse;

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

export type ChimeClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type ChimeClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *          <p>The Amazon Chime API (application programming interface) is designed for developers to
 *       perform key tasks, such as creating and managing Amazon Chime accounts, users, and Voice
 *       Connectors. This guide provides detailed information about the Amazon Chime API, including
 *       operations, types, inputs and outputs, and error codes. It also includes some server-side API
 *       actions to use with the Amazon Chime SDK. For more information about the Amazon Chime SDK, see <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a> in the
 *         <i>Amazon Chime Developer Guide</i>.</p>
 *          <p>You can use an AWS SDK, the AWS Command Line Interface (AWS CLI), or the REST API to
 *       make API calls. We recommend using an AWS SDK or the AWS CLI. Each API operation includes
 *       links to information about using it with a language-specific AWS SDK or the AWS CLI.</p>
 *          <dl>
 *             <dt>Using an AWS SDK</dt>
 *             <dd>
 *                <p>You don't need to write code to calculate a signature for request
 *             authentication. The SDK clients authenticate your requests by using access keys that you
 *             provide. For more information about AWS SDKs, see the <a href="http://aws.amazon.com/developer/">AWS Developer Center</a>.</p>
 *             </dd>
 *             <dt>Using the AWS CLI</dt>
 *             <dd>
 *                <p>Use your access keys with the AWS CLI to make API calls. For information about
 *             setting up the AWS CLI, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/installing.html">Installing the AWS Command Line
 *               Interface</a> in the <i>AWS Command Line Interface User Guide</i>.
 *             For a list of available Amazon Chime commands, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/chime/index.html">Amazon Chime commands</a> in the
 *               <i>AWS CLI Command Reference</i>.</p>
 *             </dd>
 *             <dt>Using REST API</dt>
 *             <dd>
 *                <p>If you use REST to make API calls, you must authenticate your request by providing
 *             a signature. Amazon Chime supports signature version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature
 *               Version 4 Signing Process</a> in the <i>Amazon Web Services General
 *               Reference</i>.</p>
 *                <p>When making REST API calls, use the service name <code>chime</code> and REST
 *             endpoint <code>https://service.chime.aws.amazon.com</code>.</p>
 *             </dd>
 *          </dl>
 *
 *          <p>Administrative permissions are controlled using AWS Identity and Access Management (IAM). For more information, see <a href="https://docs.aws.amazon.com/chime/latest/ag/security-iam.html">Identity and Access Management for Amazon Chime</a> in the
 *        <i>Amazon Chime Administration Guide</i>.</p>
 *
 */
export class ChimeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ChimeClientResolvedConfig
> {
  readonly config: ChimeClientResolvedConfig;

  constructor(configuration: ChimeClientConfig) {
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
