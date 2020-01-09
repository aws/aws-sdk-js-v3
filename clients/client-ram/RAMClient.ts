import {
  AcceptResourceShareInvitationRequest,
  AcceptResourceShareInvitationResponse,
  AssociateResourceSharePermissionRequest,
  AssociateResourceSharePermissionResponse,
  AssociateResourceShareRequest,
  AssociateResourceShareResponse,
  CreateResourceShareRequest,
  CreateResourceShareResponse,
  DeleteResourceShareRequest,
  DeleteResourceShareResponse,
  DisassociateResourceSharePermissionRequest,
  DisassociateResourceSharePermissionResponse,
  DisassociateResourceShareRequest,
  DisassociateResourceShareResponse,
  EnableSharingWithAwsOrganizationRequest,
  EnableSharingWithAwsOrganizationResponse,
  GetPermissionRequest,
  GetPermissionResponse,
  GetResourcePoliciesRequest,
  GetResourcePoliciesResponse,
  GetResourceShareAssociationsRequest,
  GetResourceShareAssociationsResponse,
  GetResourceShareInvitationsRequest,
  GetResourceShareInvitationsResponse,
  GetResourceSharesRequest,
  GetResourceSharesResponse,
  ListPendingInvitationResourcesRequest,
  ListPendingInvitationResourcesResponse,
  ListPermissionsRequest,
  ListPermissionsResponse,
  ListPrincipalsRequest,
  ListPrincipalsResponse,
  ListResourceSharePermissionsRequest,
  ListResourceSharePermissionsResponse,
  ListResourcesRequest,
  ListResourcesResponse,
  PromoteResourceShareCreatedFromPolicyRequest,
  PromoteResourceShareCreatedFromPolicyResponse,
  RejectResourceShareInvitationRequest,
  RejectResourceShareInvitationResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateResourceShareRequest,
  UpdateResourceShareResponse
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
  | AcceptResourceShareInvitationRequest
  | AssociateResourceSharePermissionRequest
  | AssociateResourceShareRequest
  | CreateResourceShareRequest
  | DeleteResourceShareRequest
  | DisassociateResourceSharePermissionRequest
  | DisassociateResourceShareRequest
  | EnableSharingWithAwsOrganizationRequest
  | GetPermissionRequest
  | GetResourcePoliciesRequest
  | GetResourceShareAssociationsRequest
  | GetResourceShareInvitationsRequest
  | GetResourceSharesRequest
  | ListPendingInvitationResourcesRequest
  | ListPermissionsRequest
  | ListPrincipalsRequest
  | ListResourceSharePermissionsRequest
  | ListResourcesRequest
  | PromoteResourceShareCreatedFromPolicyRequest
  | RejectResourceShareInvitationRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateResourceShareRequest;

export type ServiceOutputTypes =
  | AcceptResourceShareInvitationResponse
  | AssociateResourceSharePermissionResponse
  | AssociateResourceShareResponse
  | CreateResourceShareResponse
  | DeleteResourceShareResponse
  | DisassociateResourceSharePermissionResponse
  | DisassociateResourceShareResponse
  | EnableSharingWithAwsOrganizationResponse
  | GetPermissionResponse
  | GetResourcePoliciesResponse
  | GetResourceShareAssociationsResponse
  | GetResourceShareInvitationsResponse
  | GetResourceSharesResponse
  | ListPendingInvitationResourcesResponse
  | ListPermissionsResponse
  | ListPrincipalsResponse
  | ListResourceSharePermissionsResponse
  | ListResourcesResponse
  | PromoteResourceShareCreatedFromPolicyResponse
  | RejectResourceShareInvitationResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateResourceShareResponse;

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

export type RAMClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type RAMClientResolvedConfig = __SmithyResolvedConfiguration<
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
 *          <p>Use AWS Resource Access Manager to share AWS resources between AWS accounts. To share a resource, you
 *           create a resource share, associate the resource with the resource share, and specify the principals that
 *           can access the resources associated with the resource share. The following principals are supported:
 *           AWS accounts, organizational units (OU) from AWS Organizations, and organizations from
 *           AWS Organizations.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/ram/latest/userguide/">AWS Resource Access Manager User Guide</a>.</p>
 *
 */
export class RAMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RAMClientResolvedConfig
> {
  readonly config: RAMClientResolvedConfig;

  constructor(configuration: RAMClientConfig) {
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
