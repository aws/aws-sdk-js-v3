import {
  AssociateDelegateToResourceRequest,
  AssociateDelegateToResourceResponse,
  AssociateMemberToGroupRequest,
  AssociateMemberToGroupResponse,
  CreateAliasRequest,
  CreateAliasResponse,
  CreateGroupRequest,
  CreateGroupResponse,
  CreateResourceRequest,
  CreateResourceResponse,
  CreateUserRequest,
  CreateUserResponse,
  DeleteAliasRequest,
  DeleteAliasResponse,
  DeleteGroupRequest,
  DeleteGroupResponse,
  DeleteMailboxPermissionsRequest,
  DeleteMailboxPermissionsResponse,
  DeleteResourceRequest,
  DeleteResourceResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  DeregisterFromWorkMailRequest,
  DeregisterFromWorkMailResponse,
  DescribeGroupRequest,
  DescribeGroupResponse,
  DescribeOrganizationRequest,
  DescribeOrganizationResponse,
  DescribeResourceRequest,
  DescribeResourceResponse,
  DescribeUserRequest,
  DescribeUserResponse,
  DisassociateDelegateFromResourceRequest,
  DisassociateDelegateFromResourceResponse,
  DisassociateMemberFromGroupRequest,
  DisassociateMemberFromGroupResponse,
  GetMailboxDetailsRequest,
  GetMailboxDetailsResponse,
  ListAliasesRequest,
  ListAliasesResponse,
  ListGroupMembersRequest,
  ListGroupMembersResponse,
  ListGroupsRequest,
  ListGroupsResponse,
  ListMailboxPermissionsRequest,
  ListMailboxPermissionsResponse,
  ListOrganizationsRequest,
  ListOrganizationsResponse,
  ListResourceDelegatesRequest,
  ListResourceDelegatesResponse,
  ListResourcesRequest,
  ListResourcesResponse,
  ListUsersRequest,
  ListUsersResponse,
  PutMailboxPermissionsRequest,
  PutMailboxPermissionsResponse,
  RegisterToWorkMailRequest,
  RegisterToWorkMailResponse,
  ResetPasswordRequest,
  ResetPasswordResponse,
  UpdateMailboxQuotaRequest,
  UpdateMailboxQuotaResponse,
  UpdatePrimaryEmailAddressRequest,
  UpdatePrimaryEmailAddressResponse,
  UpdateResourceRequest,
  UpdateResourceResponse
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
  | AssociateDelegateToResourceRequest
  | AssociateMemberToGroupRequest
  | CreateAliasRequest
  | CreateGroupRequest
  | CreateResourceRequest
  | CreateUserRequest
  | DeleteAliasRequest
  | DeleteGroupRequest
  | DeleteMailboxPermissionsRequest
  | DeleteResourceRequest
  | DeleteUserRequest
  | DeregisterFromWorkMailRequest
  | DescribeGroupRequest
  | DescribeOrganizationRequest
  | DescribeResourceRequest
  | DescribeUserRequest
  | DisassociateDelegateFromResourceRequest
  | DisassociateMemberFromGroupRequest
  | GetMailboxDetailsRequest
  | ListAliasesRequest
  | ListGroupMembersRequest
  | ListGroupsRequest
  | ListMailboxPermissionsRequest
  | ListOrganizationsRequest
  | ListResourceDelegatesRequest
  | ListResourcesRequest
  | ListUsersRequest
  | PutMailboxPermissionsRequest
  | RegisterToWorkMailRequest
  | ResetPasswordRequest
  | UpdateMailboxQuotaRequest
  | UpdatePrimaryEmailAddressRequest
  | UpdateResourceRequest;

export type ServiceOutputTypes =
  | AssociateDelegateToResourceResponse
  | AssociateMemberToGroupResponse
  | CreateAliasResponse
  | CreateGroupResponse
  | CreateResourceResponse
  | CreateUserResponse
  | DeleteAliasResponse
  | DeleteGroupResponse
  | DeleteMailboxPermissionsResponse
  | DeleteResourceResponse
  | DeleteUserResponse
  | DeregisterFromWorkMailResponse
  | DescribeGroupResponse
  | DescribeOrganizationResponse
  | DescribeResourceResponse
  | DescribeUserResponse
  | DisassociateDelegateFromResourceResponse
  | DisassociateMemberFromGroupResponse
  | GetMailboxDetailsResponse
  | ListAliasesResponse
  | ListGroupMembersResponse
  | ListGroupsResponse
  | ListMailboxPermissionsResponse
  | ListOrganizationsResponse
  | ListResourceDelegatesResponse
  | ListResourcesResponse
  | ListUsersResponse
  | PutMailboxPermissionsResponse
  | RegisterToWorkMailResponse
  | ResetPasswordResponse
  | UpdateMailboxQuotaResponse
  | UpdatePrimaryEmailAddressResponse
  | UpdateResourceResponse;

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

export type WorkMailClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type WorkMailClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Amazon WorkMail is a secure, managed business email and calendaring service with support for
 *          existing desktop and mobile email clients. You can access your email, contacts, and
 *          calendars using Microsoft Outlook, your browser, or other native iOS and Android email
 *          applications. You can integrate WorkMail with your existing corporate directory and control
 *          both the keys that encrypt your data and the location in which your data is
 *          stored.</p>
 *          <p>The WorkMail API is designed for the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>Listing and describing organizations</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing users</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing groups</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing resources</p>
 *             </li>
 *          </ul>
 *          <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only
 *          require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles
 *          to help facilitate access, trust, and permission policies. By creating a role and allowing
 *          an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into
 *          the entire WorkMail organization (or as set in the IAM policy). This includes, but is not
 *          limited to, the ability to create, update, and delete users, groups, and resources. This
 *          allows developers to perform the scenarios listed above, as well as give users the ability
 *          to grant access on a selective basis using the IAM model.</p>
 */
export class WorkMailClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkMailClientResolvedConfig
> {
  readonly config: WorkMailClientResolvedConfig;

  constructor(configuration: WorkMailClientConfig) {
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
