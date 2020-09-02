import {
  AssociateDelegateToResourceCommandInput,
  AssociateDelegateToResourceCommandOutput,
} from "./commands/AssociateDelegateToResourceCommand";
import {
  AssociateMemberToGroupCommandInput,
  AssociateMemberToGroupCommandOutput,
} from "./commands/AssociateMemberToGroupCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateResourceCommandInput, CreateResourceCommandOutput } from "./commands/CreateResourceCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteMailboxPermissionsCommandInput,
  DeleteMailboxPermissionsCommandOutput,
} from "./commands/DeleteMailboxPermissionsCommand";
import { DeleteResourceCommandInput, DeleteResourceCommandOutput } from "./commands/DeleteResourceCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeregisterFromWorkMailCommandInput,
  DeregisterFromWorkMailCommandOutput,
} from "./commands/DeregisterFromWorkMailCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import {
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "./commands/DescribeOrganizationCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "./commands/DescribeResourceCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import {
  DisassociateDelegateFromResourceCommandInput,
  DisassociateDelegateFromResourceCommandOutput,
} from "./commands/DisassociateDelegateFromResourceCommand";
import {
  DisassociateMemberFromGroupCommandInput,
  DisassociateMemberFromGroupCommandOutput,
} from "./commands/DisassociateMemberFromGroupCommand";
import { GetMailboxDetailsCommandInput, GetMailboxDetailsCommandOutput } from "./commands/GetMailboxDetailsCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import { ListGroupMembersCommandInput, ListGroupMembersCommandOutput } from "./commands/ListGroupMembersCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
} from "./commands/ListMailboxPermissionsCommand";
import { ListOrganizationsCommandInput, ListOrganizationsCommandOutput } from "./commands/ListOrganizationsCommand";
import {
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput,
} from "./commands/ListResourceDelegatesCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  PutMailboxPermissionsCommandInput,
  PutMailboxPermissionsCommandOutput,
} from "./commands/PutMailboxPermissionsCommand";
import { RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput } from "./commands/RegisterToWorkMailCommand";
import { ResetPasswordCommandInput, ResetPasswordCommandOutput } from "./commands/ResetPasswordCommand";
import { UpdateMailboxQuotaCommandInput, UpdateMailboxQuotaCommandOutput } from "./commands/UpdateMailboxQuotaCommand";
import {
  UpdatePrimaryEmailAddressCommandInput,
  UpdatePrimaryEmailAddressCommandOutput,
} from "./commands/UpdatePrimaryEmailAddressCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AssociateDelegateToResourceCommandInput
  | AssociateMemberToGroupCommandInput
  | CreateAliasCommandInput
  | CreateGroupCommandInput
  | CreateResourceCommandInput
  | CreateUserCommandInput
  | DeleteAliasCommandInput
  | DeleteGroupCommandInput
  | DeleteMailboxPermissionsCommandInput
  | DeleteResourceCommandInput
  | DeleteUserCommandInput
  | DeregisterFromWorkMailCommandInput
  | DescribeGroupCommandInput
  | DescribeOrganizationCommandInput
  | DescribeResourceCommandInput
  | DescribeUserCommandInput
  | DisassociateDelegateFromResourceCommandInput
  | DisassociateMemberFromGroupCommandInput
  | GetMailboxDetailsCommandInput
  | ListAliasesCommandInput
  | ListGroupMembersCommandInput
  | ListGroupsCommandInput
  | ListMailboxPermissionsCommandInput
  | ListOrganizationsCommandInput
  | ListResourceDelegatesCommandInput
  | ListResourcesCommandInput
  | ListUsersCommandInput
  | PutMailboxPermissionsCommandInput
  | RegisterToWorkMailCommandInput
  | ResetPasswordCommandInput
  | UpdateMailboxQuotaCommandInput
  | UpdatePrimaryEmailAddressCommandInput
  | UpdateResourceCommandInput;

export type ServiceOutputTypes =
  | AssociateDelegateToResourceCommandOutput
  | AssociateMemberToGroupCommandOutput
  | CreateAliasCommandOutput
  | CreateGroupCommandOutput
  | CreateResourceCommandOutput
  | CreateUserCommandOutput
  | DeleteAliasCommandOutput
  | DeleteGroupCommandOutput
  | DeleteMailboxPermissionsCommandOutput
  | DeleteResourceCommandOutput
  | DeleteUserCommandOutput
  | DeregisterFromWorkMailCommandOutput
  | DescribeGroupCommandOutput
  | DescribeOrganizationCommandOutput
  | DescribeResourceCommandOutput
  | DescribeUserCommandOutput
  | DisassociateDelegateFromResourceCommandOutput
  | DisassociateMemberFromGroupCommandOutput
  | GetMailboxDetailsCommandOutput
  | ListAliasesCommandOutput
  | ListGroupMembersCommandOutput
  | ListGroupsCommandOutput
  | ListMailboxPermissionsCommandOutput
  | ListOrganizationsCommandOutput
  | ListResourceDelegatesCommandOutput
  | ListResourcesCommandOutput
  | ListUsersCommandOutput
  | PutMailboxPermissionsCommandOutput
  | RegisterToWorkMailCommandOutput
  | ResetPasswordCommandOutput
  | UpdateMailboxQuotaCommandOutput
  | UpdatePrimaryEmailAddressCommandOutput
  | UpdateResourceCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type WorkMailClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type WorkMailClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
      ...configuration,
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
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
