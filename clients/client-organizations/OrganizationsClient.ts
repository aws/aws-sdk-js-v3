import {
  AcceptHandshakeRequest,
  AcceptHandshakeResponse,
  AttachPolicyRequest,
  CancelHandshakeRequest,
  CancelHandshakeResponse,
  CreateAccountRequest,
  CreateAccountResponse,
  CreateGovCloudAccountRequest,
  CreateGovCloudAccountResponse,
  CreateOrganizationRequest,
  CreateOrganizationResponse,
  CreateOrganizationalUnitRequest,
  CreateOrganizationalUnitResponse,
  CreatePolicyRequest,
  CreatePolicyResponse,
  DeclineHandshakeRequest,
  DeclineHandshakeResponse,
  DeleteOrganizationalUnitRequest,
  DeletePolicyRequest,
  DescribeAccountRequest,
  DescribeAccountResponse,
  DescribeCreateAccountStatusRequest,
  DescribeCreateAccountStatusResponse,
  DescribeEffectivePolicyRequest,
  DescribeEffectivePolicyResponse,
  DescribeHandshakeRequest,
  DescribeHandshakeResponse,
  DescribeOrganizationResponse,
  DescribeOrganizationalUnitRequest,
  DescribeOrganizationalUnitResponse,
  DescribePolicyRequest,
  DescribePolicyResponse,
  DetachPolicyRequest,
  DisableAWSServiceAccessRequest,
  DisablePolicyTypeRequest,
  DisablePolicyTypeResponse,
  EnableAWSServiceAccessRequest,
  EnableAllFeaturesRequest,
  EnableAllFeaturesResponse,
  EnablePolicyTypeRequest,
  EnablePolicyTypeResponse,
  InviteAccountToOrganizationRequest,
  InviteAccountToOrganizationResponse,
  ListAWSServiceAccessForOrganizationRequest,
  ListAWSServiceAccessForOrganizationResponse,
  ListAccountsForParentRequest,
  ListAccountsForParentResponse,
  ListAccountsRequest,
  ListAccountsResponse,
  ListChildrenRequest,
  ListChildrenResponse,
  ListCreateAccountStatusRequest,
  ListCreateAccountStatusResponse,
  ListHandshakesForAccountRequest,
  ListHandshakesForAccountResponse,
  ListHandshakesForOrganizationRequest,
  ListHandshakesForOrganizationResponse,
  ListOrganizationalUnitsForParentRequest,
  ListOrganizationalUnitsForParentResponse,
  ListParentsRequest,
  ListParentsResponse,
  ListPoliciesForTargetRequest,
  ListPoliciesForTargetResponse,
  ListPoliciesRequest,
  ListPoliciesResponse,
  ListRootsRequest,
  ListRootsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTargetsForPolicyRequest,
  ListTargetsForPolicyResponse,
  MoveAccountRequest,
  RemoveAccountFromOrganizationRequest,
  TagResourceRequest,
  UntagResourceRequest,
  UpdateOrganizationalUnitRequest,
  UpdateOrganizationalUnitResponse,
  UpdatePolicyRequest,
  UpdatePolicyResponse
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
  | AcceptHandshakeRequest
  | AttachPolicyRequest
  | CancelHandshakeRequest
  | CreateAccountRequest
  | CreateGovCloudAccountRequest
  | CreateOrganizationRequest
  | CreateOrganizationalUnitRequest
  | CreatePolicyRequest
  | DeclineHandshakeRequest
  | DeleteOrganizationalUnitRequest
  | DeletePolicyRequest
  | DescribeAccountRequest
  | DescribeCreateAccountStatusRequest
  | DescribeEffectivePolicyRequest
  | DescribeHandshakeRequest
  | DescribeOrganizationalUnitRequest
  | DescribePolicyRequest
  | DetachPolicyRequest
  | DisableAWSServiceAccessRequest
  | DisablePolicyTypeRequest
  | EnableAWSServiceAccessRequest
  | EnableAllFeaturesRequest
  | EnablePolicyTypeRequest
  | InviteAccountToOrganizationRequest
  | ListAWSServiceAccessForOrganizationRequest
  | ListAccountsForParentRequest
  | ListAccountsRequest
  | ListChildrenRequest
  | ListCreateAccountStatusRequest
  | ListHandshakesForAccountRequest
  | ListHandshakesForOrganizationRequest
  | ListOrganizationalUnitsForParentRequest
  | ListParentsRequest
  | ListPoliciesForTargetRequest
  | ListPoliciesRequest
  | ListRootsRequest
  | ListTagsForResourceRequest
  | ListTargetsForPolicyRequest
  | MoveAccountRequest
  | RemoveAccountFromOrganizationRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateOrganizationalUnitRequest
  | UpdatePolicyRequest;

export type ServiceOutputTypes =
  | __MetadataBearer
  | AcceptHandshakeResponse
  | CancelHandshakeResponse
  | CreateAccountResponse
  | CreateGovCloudAccountResponse
  | CreateOrganizationResponse
  | CreateOrganizationalUnitResponse
  | CreatePolicyResponse
  | DeclineHandshakeResponse
  | DescribeAccountResponse
  | DescribeCreateAccountStatusResponse
  | DescribeEffectivePolicyResponse
  | DescribeHandshakeResponse
  | DescribeOrganizationResponse
  | DescribeOrganizationalUnitResponse
  | DescribePolicyResponse
  | DisablePolicyTypeResponse
  | EnableAllFeaturesResponse
  | EnablePolicyTypeResponse
  | InviteAccountToOrganizationResponse
  | ListAWSServiceAccessForOrganizationResponse
  | ListAccountsForParentResponse
  | ListAccountsResponse
  | ListChildrenResponse
  | ListCreateAccountStatusResponse
  | ListHandshakesForAccountResponse
  | ListHandshakesForOrganizationResponse
  | ListOrganizationalUnitsForParentResponse
  | ListParentsResponse
  | ListPoliciesForTargetResponse
  | ListPoliciesResponse
  | ListRootsResponse
  | ListTagsForResourceResponse
  | ListTargetsForPolicyResponse
  | UpdateOrganizationalUnitResponse
  | UpdatePolicyResponse;

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

export type OrganizationsClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type OrganizationsClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <fullname>AWS Organizations</fullname>
 */
export class OrganizationsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OrganizationsClientResolvedConfig
> {
  readonly config: OrganizationsClientResolvedConfig;

  constructor(configuration: OrganizationsClientConfig) {
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
