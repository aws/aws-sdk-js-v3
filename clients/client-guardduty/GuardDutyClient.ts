import {
  AcceptInvitationRequest,
  AcceptInvitationResponse,
  ArchiveFindingsRequest,
  ArchiveFindingsResponse,
  CreateDetectorRequest,
  CreateDetectorResponse,
  CreateFilterRequest,
  CreateFilterResponse,
  CreateIPSetRequest,
  CreateIPSetResponse,
  CreateMembersRequest,
  CreateMembersResponse,
  CreatePublishingDestinationRequest,
  CreatePublishingDestinationResponse,
  CreateSampleFindingsRequest,
  CreateSampleFindingsResponse,
  CreateThreatIntelSetRequest,
  CreateThreatIntelSetResponse,
  DeclineInvitationsRequest,
  DeclineInvitationsResponse,
  DeleteDetectorRequest,
  DeleteDetectorResponse,
  DeleteFilterRequest,
  DeleteFilterResponse,
  DeleteIPSetRequest,
  DeleteIPSetResponse,
  DeleteInvitationsRequest,
  DeleteInvitationsResponse,
  DeleteMembersRequest,
  DeleteMembersResponse,
  DeletePublishingDestinationRequest,
  DeletePublishingDestinationResponse,
  DeleteThreatIntelSetRequest,
  DeleteThreatIntelSetResponse,
  DescribePublishingDestinationRequest,
  DescribePublishingDestinationResponse,
  DisassociateFromMasterAccountRequest,
  DisassociateFromMasterAccountResponse,
  DisassociateMembersRequest,
  DisassociateMembersResponse,
  GetDetectorRequest,
  GetDetectorResponse,
  GetFilterRequest,
  GetFilterResponse,
  GetFindingsRequest,
  GetFindingsResponse,
  GetFindingsStatisticsRequest,
  GetFindingsStatisticsResponse,
  GetIPSetRequest,
  GetIPSetResponse,
  GetInvitationsCountRequest,
  GetInvitationsCountResponse,
  GetMasterAccountRequest,
  GetMasterAccountResponse,
  GetMembersRequest,
  GetMembersResponse,
  GetThreatIntelSetRequest,
  GetThreatIntelSetResponse,
  InviteMembersRequest,
  InviteMembersResponse,
  ListDetectorsRequest,
  ListDetectorsResponse,
  ListFiltersRequest,
  ListFiltersResponse,
  ListFindingsRequest,
  ListFindingsResponse,
  ListIPSetsRequest,
  ListIPSetsResponse,
  ListInvitationsRequest,
  ListInvitationsResponse,
  ListMembersRequest,
  ListMembersResponse,
  ListPublishingDestinationsRequest,
  ListPublishingDestinationsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListThreatIntelSetsRequest,
  ListThreatIntelSetsResponse,
  StartMonitoringMembersRequest,
  StartMonitoringMembersResponse,
  StopMonitoringMembersRequest,
  StopMonitoringMembersResponse,
  TagResourceRequest,
  TagResourceResponse,
  UnarchiveFindingsRequest,
  UnarchiveFindingsResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDetectorRequest,
  UpdateDetectorResponse,
  UpdateFilterRequest,
  UpdateFilterResponse,
  UpdateFindingsFeedbackRequest,
  UpdateFindingsFeedbackResponse,
  UpdateIPSetRequest,
  UpdateIPSetResponse,
  UpdatePublishingDestinationRequest,
  UpdatePublishingDestinationResponse,
  UpdateThreatIntelSetRequest,
  UpdateThreatIntelSetResponse
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
  | AcceptInvitationRequest
  | ArchiveFindingsRequest
  | CreateDetectorRequest
  | CreateFilterRequest
  | CreateIPSetRequest
  | CreateMembersRequest
  | CreatePublishingDestinationRequest
  | CreateSampleFindingsRequest
  | CreateThreatIntelSetRequest
  | DeclineInvitationsRequest
  | DeleteDetectorRequest
  | DeleteFilterRequest
  | DeleteIPSetRequest
  | DeleteInvitationsRequest
  | DeleteMembersRequest
  | DeletePublishingDestinationRequest
  | DeleteThreatIntelSetRequest
  | DescribePublishingDestinationRequest
  | DisassociateFromMasterAccountRequest
  | DisassociateMembersRequest
  | GetDetectorRequest
  | GetFilterRequest
  | GetFindingsRequest
  | GetFindingsStatisticsRequest
  | GetIPSetRequest
  | GetInvitationsCountRequest
  | GetMasterAccountRequest
  | GetMembersRequest
  | GetThreatIntelSetRequest
  | InviteMembersRequest
  | ListDetectorsRequest
  | ListFiltersRequest
  | ListFindingsRequest
  | ListIPSetsRequest
  | ListInvitationsRequest
  | ListMembersRequest
  | ListPublishingDestinationsRequest
  | ListTagsForResourceRequest
  | ListThreatIntelSetsRequest
  | StartMonitoringMembersRequest
  | StopMonitoringMembersRequest
  | TagResourceRequest
  | UnarchiveFindingsRequest
  | UntagResourceRequest
  | UpdateDetectorRequest
  | UpdateFilterRequest
  | UpdateFindingsFeedbackRequest
  | UpdateIPSetRequest
  | UpdatePublishingDestinationRequest
  | UpdateThreatIntelSetRequest;

export type ServiceOutputTypes =
  | AcceptInvitationResponse
  | ArchiveFindingsResponse
  | CreateDetectorResponse
  | CreateFilterResponse
  | CreateIPSetResponse
  | CreateMembersResponse
  | CreatePublishingDestinationResponse
  | CreateSampleFindingsResponse
  | CreateThreatIntelSetResponse
  | DeclineInvitationsResponse
  | DeleteDetectorResponse
  | DeleteFilterResponse
  | DeleteIPSetResponse
  | DeleteInvitationsResponse
  | DeleteMembersResponse
  | DeletePublishingDestinationResponse
  | DeleteThreatIntelSetResponse
  | DescribePublishingDestinationResponse
  | DisassociateFromMasterAccountResponse
  | DisassociateMembersResponse
  | GetDetectorResponse
  | GetFilterResponse
  | GetFindingsResponse
  | GetFindingsStatisticsResponse
  | GetIPSetResponse
  | GetInvitationsCountResponse
  | GetMasterAccountResponse
  | GetMembersResponse
  | GetThreatIntelSetResponse
  | InviteMembersResponse
  | ListDetectorsResponse
  | ListFiltersResponse
  | ListFindingsResponse
  | ListIPSetsResponse
  | ListInvitationsResponse
  | ListMembersResponse
  | ListPublishingDestinationsResponse
  | ListTagsForResourceResponse
  | ListThreatIntelSetsResponse
  | StartMonitoringMembersResponse
  | StopMonitoringMembersResponse
  | TagResourceResponse
  | UnarchiveFindingsResponse
  | UntagResourceResponse
  | UpdateDetectorResponse
  | UpdateFilterResponse
  | UpdateFindingsFeedbackResponse
  | UpdateIPSetResponse
  | UpdatePublishingDestinationResponse
  | UpdateThreatIntelSetResponse;

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

export type GuardDutyClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type GuardDutyClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Amazon GuardDuty is a continuous security monitoring service that analyzes and processes
 *       the following data sources: VPC Flow Logs, AWS CloudTrail event logs, and DNS logs. It uses
 *       threat intelligence feeds, such as lists of malicious IPs and domains, and machine learning to
 *       identify unexpected and potentially unauthorized and malicious activity within your AWS
 *       environment. This can include issues like escalations of privileges, uses of exposed
 *       credentials, or communication with malicious IPs, URLs, or domains. For example, GuardDuty can
 *       detect compromised EC2 instances serving malware or mining bitcoin. It also monitors AWS
 *       account access behavior for signs of compromise, such as unauthorized infrastructure
 *       deployments, like instances deployed in a region that has never been used, or unusual API
 *       calls, like a password policy change to reduce password strength. GuardDuty informs you of the
 *       status of your AWS environment by producing security findings that you can view in the
 *       GuardDuty console or through Amazon CloudWatch events. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html">Amazon
 *         GuardDuty User Guide</a>. </p>
 */
export class GuardDutyClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GuardDutyClientResolvedConfig
> {
  readonly config: GuardDutyClientResolvedConfig;

  constructor(configuration: GuardDutyClientConfig) {
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
