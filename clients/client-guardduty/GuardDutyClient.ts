import {
  AcceptInvitationCommandInput,
  AcceptInvitationCommandOutput
} from "./commands/AcceptInvitationCommand";
import {
  ArchiveFindingsCommandInput,
  ArchiveFindingsCommandOutput
} from "./commands/ArchiveFindingsCommand";
import {
  CreateDetectorCommandInput,
  CreateDetectorCommandOutput
} from "./commands/CreateDetectorCommand";
import {
  CreateFilterCommandInput,
  CreateFilterCommandOutput
} from "./commands/CreateFilterCommand";
import {
  CreateIPSetCommandInput,
  CreateIPSetCommandOutput
} from "./commands/CreateIPSetCommand";
import {
  CreateMembersCommandInput,
  CreateMembersCommandOutput
} from "./commands/CreateMembersCommand";
import {
  CreatePublishingDestinationCommandInput,
  CreatePublishingDestinationCommandOutput
} from "./commands/CreatePublishingDestinationCommand";
import {
  CreateSampleFindingsCommandInput,
  CreateSampleFindingsCommandOutput
} from "./commands/CreateSampleFindingsCommand";
import {
  CreateThreatIntelSetCommandInput,
  CreateThreatIntelSetCommandOutput
} from "./commands/CreateThreatIntelSetCommand";
import {
  DeclineInvitationsCommandInput,
  DeclineInvitationsCommandOutput
} from "./commands/DeclineInvitationsCommand";
import {
  DeleteDetectorCommandInput,
  DeleteDetectorCommandOutput
} from "./commands/DeleteDetectorCommand";
import {
  DeleteFilterCommandInput,
  DeleteFilterCommandOutput
} from "./commands/DeleteFilterCommand";
import {
  DeleteIPSetCommandInput,
  DeleteIPSetCommandOutput
} from "./commands/DeleteIPSetCommand";
import {
  DeleteInvitationsCommandInput,
  DeleteInvitationsCommandOutput
} from "./commands/DeleteInvitationsCommand";
import {
  DeleteMembersCommandInput,
  DeleteMembersCommandOutput
} from "./commands/DeleteMembersCommand";
import {
  DeletePublishingDestinationCommandInput,
  DeletePublishingDestinationCommandOutput
} from "./commands/DeletePublishingDestinationCommand";
import {
  DeleteThreatIntelSetCommandInput,
  DeleteThreatIntelSetCommandOutput
} from "./commands/DeleteThreatIntelSetCommand";
import {
  DescribePublishingDestinationCommandInput,
  DescribePublishingDestinationCommandOutput
} from "./commands/DescribePublishingDestinationCommand";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput
} from "./commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput
} from "./commands/DisassociateMembersCommand";
import {
  GetDetectorCommandInput,
  GetDetectorCommandOutput
} from "./commands/GetDetectorCommand";
import {
  GetFilterCommandInput,
  GetFilterCommandOutput
} from "./commands/GetFilterCommand";
import {
  GetFindingsCommandInput,
  GetFindingsCommandOutput
} from "./commands/GetFindingsCommand";
import {
  GetFindingsStatisticsCommandInput,
  GetFindingsStatisticsCommandOutput
} from "./commands/GetFindingsStatisticsCommand";
import {
  GetIPSetCommandInput,
  GetIPSetCommandOutput
} from "./commands/GetIPSetCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput
} from "./commands/GetInvitationsCountCommand";
import {
  GetMasterAccountCommandInput,
  GetMasterAccountCommandOutput
} from "./commands/GetMasterAccountCommand";
import {
  GetMembersCommandInput,
  GetMembersCommandOutput
} from "./commands/GetMembersCommand";
import {
  GetThreatIntelSetCommandInput,
  GetThreatIntelSetCommandOutput
} from "./commands/GetThreatIntelSetCommand";
import {
  InviteMembersCommandInput,
  InviteMembersCommandOutput
} from "./commands/InviteMembersCommand";
import {
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput
} from "./commands/ListDetectorsCommand";
import {
  ListFiltersCommandInput,
  ListFiltersCommandOutput
} from "./commands/ListFiltersCommand";
import {
  ListFindingsCommandInput,
  ListFindingsCommandOutput
} from "./commands/ListFindingsCommand";
import {
  ListIPSetsCommandInput,
  ListIPSetsCommandOutput
} from "./commands/ListIPSetsCommand";
import {
  ListInvitationsCommandInput,
  ListInvitationsCommandOutput
} from "./commands/ListInvitationsCommand";
import {
  ListMembersCommandInput,
  ListMembersCommandOutput
} from "./commands/ListMembersCommand";
import {
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput
} from "./commands/ListPublishingDestinationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput
} from "./commands/ListThreatIntelSetsCommand";
import {
  StartMonitoringMembersCommandInput,
  StartMonitoringMembersCommandOutput
} from "./commands/StartMonitoringMembersCommand";
import {
  StopMonitoringMembersCommandInput,
  StopMonitoringMembersCommandOutput
} from "./commands/StopMonitoringMembersCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UnarchiveFindingsCommandInput,
  UnarchiveFindingsCommandOutput
} from "./commands/UnarchiveFindingsCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateDetectorCommandInput,
  UpdateDetectorCommandOutput
} from "./commands/UpdateDetectorCommand";
import {
  UpdateFilterCommandInput,
  UpdateFilterCommandOutput
} from "./commands/UpdateFilterCommand";
import {
  UpdateFindingsFeedbackCommandInput,
  UpdateFindingsFeedbackCommandOutput
} from "./commands/UpdateFindingsFeedbackCommand";
import {
  UpdateIPSetCommandInput,
  UpdateIPSetCommandOutput
} from "./commands/UpdateIPSetCommand";
import {
  UpdatePublishingDestinationCommandInput,
  UpdatePublishingDestinationCommandOutput
} from "./commands/UpdatePublishingDestinationCommand";
import {
  UpdateThreatIntelSetCommandInput,
  UpdateThreatIntelSetCommandOutput
} from "./commands/UpdateThreatIntelSetCommand";
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
  | AcceptInvitationCommandInput
  | ArchiveFindingsCommandInput
  | CreateDetectorCommandInput
  | CreateFilterCommandInput
  | CreateIPSetCommandInput
  | CreateMembersCommandInput
  | CreatePublishingDestinationCommandInput
  | CreateSampleFindingsCommandInput
  | CreateThreatIntelSetCommandInput
  | DeclineInvitationsCommandInput
  | DeleteDetectorCommandInput
  | DeleteFilterCommandInput
  | DeleteIPSetCommandInput
  | DeleteInvitationsCommandInput
  | DeleteMembersCommandInput
  | DeletePublishingDestinationCommandInput
  | DeleteThreatIntelSetCommandInput
  | DescribePublishingDestinationCommandInput
  | DisassociateFromMasterAccountCommandInput
  | DisassociateMembersCommandInput
  | GetDetectorCommandInput
  | GetFilterCommandInput
  | GetFindingsCommandInput
  | GetFindingsStatisticsCommandInput
  | GetIPSetCommandInput
  | GetInvitationsCountCommandInput
  | GetMasterAccountCommandInput
  | GetMembersCommandInput
  | GetThreatIntelSetCommandInput
  | InviteMembersCommandInput
  | ListDetectorsCommandInput
  | ListFiltersCommandInput
  | ListFindingsCommandInput
  | ListIPSetsCommandInput
  | ListInvitationsCommandInput
  | ListMembersCommandInput
  | ListPublishingDestinationsCommandInput
  | ListTagsForResourceCommandInput
  | ListThreatIntelSetsCommandInput
  | StartMonitoringMembersCommandInput
  | StopMonitoringMembersCommandInput
  | TagResourceCommandInput
  | UnarchiveFindingsCommandInput
  | UntagResourceCommandInput
  | UpdateDetectorCommandInput
  | UpdateFilterCommandInput
  | UpdateFindingsFeedbackCommandInput
  | UpdateIPSetCommandInput
  | UpdatePublishingDestinationCommandInput
  | UpdateThreatIntelSetCommandInput;

export type ServiceOutputTypes =
  | AcceptInvitationCommandOutput
  | ArchiveFindingsCommandOutput
  | CreateDetectorCommandOutput
  | CreateFilterCommandOutput
  | CreateIPSetCommandOutput
  | CreateMembersCommandOutput
  | CreatePublishingDestinationCommandOutput
  | CreateSampleFindingsCommandOutput
  | CreateThreatIntelSetCommandOutput
  | DeclineInvitationsCommandOutput
  | DeleteDetectorCommandOutput
  | DeleteFilterCommandOutput
  | DeleteIPSetCommandOutput
  | DeleteInvitationsCommandOutput
  | DeleteMembersCommandOutput
  | DeletePublishingDestinationCommandOutput
  | DeleteThreatIntelSetCommandOutput
  | DescribePublishingDestinationCommandOutput
  | DisassociateFromMasterAccountCommandOutput
  | DisassociateMembersCommandOutput
  | GetDetectorCommandOutput
  | GetFilterCommandOutput
  | GetFindingsCommandOutput
  | GetFindingsStatisticsCommandOutput
  | GetIPSetCommandOutput
  | GetInvitationsCountCommandOutput
  | GetMasterAccountCommandOutput
  | GetMembersCommandOutput
  | GetThreatIntelSetCommandOutput
  | InviteMembersCommandOutput
  | ListDetectorsCommandOutput
  | ListFiltersCommandOutput
  | ListFindingsCommandOutput
  | ListIPSetsCommandOutput
  | ListInvitationsCommandOutput
  | ListMembersCommandOutput
  | ListPublishingDestinationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListThreatIntelSetsCommandOutput
  | StartMonitoringMembersCommandOutput
  | StopMonitoringMembersCommandOutput
  | TagResourceCommandOutput
  | UnarchiveFindingsCommandOutput
  | UntagResourceCommandOutput
  | UpdateDetectorCommandOutput
  | UpdateFilterCommandOutput
  | UpdateFindingsFeedbackCommandOutput
  | UpdateIPSetCommandOutput
  | UpdatePublishingDestinationCommandOutput
  | UpdateThreatIntelSetCommandOutput;

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
