import {
  AcceptInvitationRequest,
  AcceptInvitationResponse,
  BatchDisableStandardsRequest,
  BatchDisableStandardsResponse,
  BatchEnableStandardsRequest,
  BatchEnableStandardsResponse,
  BatchImportFindingsRequest,
  BatchImportFindingsResponse,
  CreateActionTargetRequest,
  CreateActionTargetResponse,
  CreateInsightRequest,
  CreateInsightResponse,
  CreateMembersRequest,
  CreateMembersResponse,
  DeclineInvitationsRequest,
  DeclineInvitationsResponse,
  DeleteActionTargetRequest,
  DeleteActionTargetResponse,
  DeleteInsightRequest,
  DeleteInsightResponse,
  DeleteInvitationsRequest,
  DeleteInvitationsResponse,
  DeleteMembersRequest,
  DeleteMembersResponse,
  DescribeActionTargetsRequest,
  DescribeActionTargetsResponse,
  DescribeHubRequest,
  DescribeHubResponse,
  DescribeProductsRequest,
  DescribeProductsResponse,
  DisableImportFindingsForProductRequest,
  DisableImportFindingsForProductResponse,
  DisableSecurityHubRequest,
  DisableSecurityHubResponse,
  DisassociateFromMasterAccountRequest,
  DisassociateFromMasterAccountResponse,
  DisassociateMembersRequest,
  DisassociateMembersResponse,
  EnableImportFindingsForProductRequest,
  EnableImportFindingsForProductResponse,
  EnableSecurityHubRequest,
  EnableSecurityHubResponse,
  GetEnabledStandardsRequest,
  GetEnabledStandardsResponse,
  GetFindingsRequest,
  GetFindingsResponse,
  GetInsightResultsRequest,
  GetInsightResultsResponse,
  GetInsightsRequest,
  GetInsightsResponse,
  GetInvitationsCountRequest,
  GetInvitationsCountResponse,
  GetMasterAccountRequest,
  GetMasterAccountResponse,
  GetMembersRequest,
  GetMembersResponse,
  InviteMembersRequest,
  InviteMembersResponse,
  ListEnabledProductsForImportRequest,
  ListEnabledProductsForImportResponse,
  ListInvitationsRequest,
  ListInvitationsResponse,
  ListMembersRequest,
  ListMembersResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateActionTargetRequest,
  UpdateActionTargetResponse,
  UpdateFindingsRequest,
  UpdateFindingsResponse,
  UpdateInsightRequest,
  UpdateInsightResponse
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
  | BatchDisableStandardsRequest
  | BatchEnableStandardsRequest
  | BatchImportFindingsRequest
  | CreateActionTargetRequest
  | CreateInsightRequest
  | CreateMembersRequest
  | DeclineInvitationsRequest
  | DeleteActionTargetRequest
  | DeleteInsightRequest
  | DeleteInvitationsRequest
  | DeleteMembersRequest
  | DescribeActionTargetsRequest
  | DescribeHubRequest
  | DescribeProductsRequest
  | DisableImportFindingsForProductRequest
  | DisableSecurityHubRequest
  | DisassociateFromMasterAccountRequest
  | DisassociateMembersRequest
  | EnableImportFindingsForProductRequest
  | EnableSecurityHubRequest
  | GetEnabledStandardsRequest
  | GetFindingsRequest
  | GetInsightResultsRequest
  | GetInsightsRequest
  | GetInvitationsCountRequest
  | GetMasterAccountRequest
  | GetMembersRequest
  | InviteMembersRequest
  | ListEnabledProductsForImportRequest
  | ListInvitationsRequest
  | ListMembersRequest
  | ListTagsForResourceRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateActionTargetRequest
  | UpdateFindingsRequest
  | UpdateInsightRequest;

export type ServiceOutputTypes =
  | AcceptInvitationResponse
  | BatchDisableStandardsResponse
  | BatchEnableStandardsResponse
  | BatchImportFindingsResponse
  | CreateActionTargetResponse
  | CreateInsightResponse
  | CreateMembersResponse
  | DeclineInvitationsResponse
  | DeleteActionTargetResponse
  | DeleteInsightResponse
  | DeleteInvitationsResponse
  | DeleteMembersResponse
  | DescribeActionTargetsResponse
  | DescribeHubResponse
  | DescribeProductsResponse
  | DisableImportFindingsForProductResponse
  | DisableSecurityHubResponse
  | DisassociateFromMasterAccountResponse
  | DisassociateMembersResponse
  | EnableImportFindingsForProductResponse
  | EnableSecurityHubResponse
  | GetEnabledStandardsResponse
  | GetFindingsResponse
  | GetInsightResultsResponse
  | GetInsightsResponse
  | GetInvitationsCountResponse
  | GetMasterAccountResponse
  | GetMembersResponse
  | InviteMembersResponse
  | ListEnabledProductsForImportResponse
  | ListInvitationsResponse
  | ListMembersResponse
  | ListTagsForResourceResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateActionTargetResponse
  | UpdateFindingsResponse
  | UpdateInsightResponse;

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

export type SecurityHubClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type SecurityHubClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *          <p>Security Hub provides you with a comprehensive view of the security state of your AWS
 *          environment and resources. It also provides you with the compliance status of your
 *          environment based on CIS AWS Foundations compliance checks. Security Hub collects security data
 *          from AWS accounts, services, and integrated third-party products and helps you analyze
 *          security trends in your environment to identify the highest priority security issues. For
 *          more information about Security Hub, see the <i>
 *                <a href="https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html">AWS Security Hub User Guide</a>
 *             </i>.</p>
 *          <p>When you use operations in the Security Hub API, the requests are executed only in the AWS
 *          Region that is currently active or in the specific AWS Region that you specify in your
 *          request. Any configuration or settings change that results from the operation is applied
 *          only to that Region. To make the same change in other Regions, execute the same command for
 *          each Region to apply the change to. For example, if your Region is set to
 *             <code>us-west-2</code>, when you use <code>CreateMembers</code> to add a member account
 *          to Security Hub, the association of the member account with the master account is created only in
 *          the us-west-2 Region. Security Hub must be enabled for the member account in the same Region that
 *          the invite was sent from.</p>
 *
 *
 */
export class SecurityHubClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SecurityHubClientResolvedConfig
> {
  readonly config: SecurityHubClientResolvedConfig;

  constructor(configuration: SecurityHubClientConfig) {
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
