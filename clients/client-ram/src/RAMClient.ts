// smithy-typescript generated code
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
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AcceptResourceShareInvitationCommandInput,
  AcceptResourceShareInvitationCommandOutput,
} from "./commands/AcceptResourceShareInvitationCommand";
import {
  AssociateResourceShareCommandInput,
  AssociateResourceShareCommandOutput,
} from "./commands/AssociateResourceShareCommand";
import {
  AssociateResourceSharePermissionCommandInput,
  AssociateResourceSharePermissionCommandOutput,
} from "./commands/AssociateResourceSharePermissionCommand";
import {
  CreateResourceShareCommandInput,
  CreateResourceShareCommandOutput,
} from "./commands/CreateResourceShareCommand";
import {
  DeleteResourceShareCommandInput,
  DeleteResourceShareCommandOutput,
} from "./commands/DeleteResourceShareCommand";
import {
  DisassociateResourceShareCommandInput,
  DisassociateResourceShareCommandOutput,
} from "./commands/DisassociateResourceShareCommand";
import {
  DisassociateResourceSharePermissionCommandInput,
  DisassociateResourceSharePermissionCommandOutput,
} from "./commands/DisassociateResourceSharePermissionCommand";
import {
  EnableSharingWithAwsOrganizationCommandInput,
  EnableSharingWithAwsOrganizationCommandOutput,
} from "./commands/EnableSharingWithAwsOrganizationCommand";
import { GetPermissionCommandInput, GetPermissionCommandOutput } from "./commands/GetPermissionCommand";
import {
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
import {
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput,
} from "./commands/GetResourceShareAssociationsCommand";
import {
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput,
} from "./commands/GetResourceShareInvitationsCommand";
import { GetResourceSharesCommandInput, GetResourceSharesCommandOutput } from "./commands/GetResourceSharesCommand";
import {
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
} from "./commands/ListPendingInvitationResourcesCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand";
import {
  ListPermissionVersionsCommandInput,
  ListPermissionVersionsCommandOutput,
} from "./commands/ListPermissionVersionsCommand";
import { ListPrincipalsCommandInput, ListPrincipalsCommandOutput } from "./commands/ListPrincipalsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import {
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput,
} from "./commands/ListResourceSharePermissionsCommand";
import { ListResourceTypesCommandInput, ListResourceTypesCommandOutput } from "./commands/ListResourceTypesCommand";
import {
  PromoteResourceShareCreatedFromPolicyCommandInput,
  PromoteResourceShareCreatedFromPolicyCommandOutput,
} from "./commands/PromoteResourceShareCreatedFromPolicyCommand";
import {
  RejectResourceShareInvitationCommandInput,
  RejectResourceShareInvitationCommandOutput,
} from "./commands/RejectResourceShareInvitationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateResourceShareCommandInput,
  UpdateResourceShareCommandOutput,
} from "./commands/UpdateResourceShareCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AcceptResourceShareInvitationCommandInput
  | AssociateResourceShareCommandInput
  | AssociateResourceSharePermissionCommandInput
  | CreateResourceShareCommandInput
  | DeleteResourceShareCommandInput
  | DisassociateResourceShareCommandInput
  | DisassociateResourceSharePermissionCommandInput
  | EnableSharingWithAwsOrganizationCommandInput
  | GetPermissionCommandInput
  | GetResourcePoliciesCommandInput
  | GetResourceShareAssociationsCommandInput
  | GetResourceShareInvitationsCommandInput
  | GetResourceSharesCommandInput
  | ListPendingInvitationResourcesCommandInput
  | ListPermissionVersionsCommandInput
  | ListPermissionsCommandInput
  | ListPrincipalsCommandInput
  | ListResourceSharePermissionsCommandInput
  | ListResourceTypesCommandInput
  | ListResourcesCommandInput
  | PromoteResourceShareCreatedFromPolicyCommandInput
  | RejectResourceShareInvitationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateResourceShareCommandInput;

export type ServiceOutputTypes =
  | AcceptResourceShareInvitationCommandOutput
  | AssociateResourceShareCommandOutput
  | AssociateResourceSharePermissionCommandOutput
  | CreateResourceShareCommandOutput
  | DeleteResourceShareCommandOutput
  | DisassociateResourceShareCommandOutput
  | DisassociateResourceSharePermissionCommandOutput
  | EnableSharingWithAwsOrganizationCommandOutput
  | GetPermissionCommandOutput
  | GetResourcePoliciesCommandOutput
  | GetResourceShareAssociationsCommandOutput
  | GetResourceShareInvitationsCommandOutput
  | GetResourceSharesCommandOutput
  | ListPendingInvitationResourcesCommandOutput
  | ListPermissionVersionsCommandOutput
  | ListPermissionsCommandOutput
  | ListPrincipalsCommandOutput
  | ListResourceSharePermissionsCommandOutput
  | ListResourceTypesCommandOutput
  | ListResourcesCommandOutput
  | PromoteResourceShareCreatedFromPolicyCommandOutput
  | RejectResourceShareInvitationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateResourceShareCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type RAMClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of RAMClient class constructor that set the region, credentials and other options.
 */
export interface RAMClientConfig extends RAMClientConfigType {}

type RAMClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of RAMClient class. This is resolved and normalized from the {@link RAMClientConfig | constructor configuration interface}.
 */
export interface RAMClientResolvedConfig extends RAMClientResolvedConfigType {}

/**
 * <p>This is the <i>Resource Access Manager API Reference</i>. This documentation provides
 *             descriptions and syntax for each of the actions and data types in RAM. RAM is a
 *             service that helps you securely share your Amazon Web Services resources across Amazon Web Services accounts. If you
 *             have multiple Amazon Web Services accounts, you can use RAM to share those resources with other
 *             accounts. If you use Organizations to manage your accounts, then you share your resources
 *             with your organization or organizational units (OUs). For supported resource types, you
 *             can also share resources with individual Identity and Access Management (IAM) roles an users. </p>
 *
 *         <p>To learn more about RAM, see the following resources:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a href="http://aws.amazon.com/ram">Resource Access Manager product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/ram/latest/userguide/">Resource Access Manager User
 *                         Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class RAMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  RAMClientResolvedConfig
> {
  /**
   * The resolved configuration of RAMClient class. This is resolved and normalized from the {@link RAMClientConfig | constructor configuration interface}.
   */
  readonly config: RAMClientResolvedConfig;

  constructor(configuration: RAMClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
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
