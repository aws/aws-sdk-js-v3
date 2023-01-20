// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
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
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { CreateAccessorCommandInput, CreateAccessorCommandOutput } from "./commands/CreateAccessorCommand";
import { CreateMemberCommandInput, CreateMemberCommandOutput } from "./commands/CreateMemberCommand";
import { CreateNetworkCommandInput, CreateNetworkCommandOutput } from "./commands/CreateNetworkCommand";
import { CreateNodeCommandInput, CreateNodeCommandOutput } from "./commands/CreateNodeCommand";
import { CreateProposalCommandInput, CreateProposalCommandOutput } from "./commands/CreateProposalCommand";
import { DeleteAccessorCommandInput, DeleteAccessorCommandOutput } from "./commands/DeleteAccessorCommand";
import { DeleteMemberCommandInput, DeleteMemberCommandOutput } from "./commands/DeleteMemberCommand";
import { DeleteNodeCommandInput, DeleteNodeCommandOutput } from "./commands/DeleteNodeCommand";
import { GetAccessorCommandInput, GetAccessorCommandOutput } from "./commands/GetAccessorCommand";
import { GetMemberCommandInput, GetMemberCommandOutput } from "./commands/GetMemberCommand";
import { GetNetworkCommandInput, GetNetworkCommandOutput } from "./commands/GetNetworkCommand";
import { GetNodeCommandInput, GetNodeCommandOutput } from "./commands/GetNodeCommand";
import { GetProposalCommandInput, GetProposalCommandOutput } from "./commands/GetProposalCommand";
import { ListAccessorsCommandInput, ListAccessorsCommandOutput } from "./commands/ListAccessorsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "./commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "./commands/ListMembersCommand";
import { ListNetworksCommandInput, ListNetworksCommandOutput } from "./commands/ListNetworksCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import { ListProposalsCommandInput, ListProposalsCommandOutput } from "./commands/ListProposalsCommand";
import { ListProposalVotesCommandInput, ListProposalVotesCommandOutput } from "./commands/ListProposalVotesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RejectInvitationCommandInput, RejectInvitationCommandOutput } from "./commands/RejectInvitationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateMemberCommandInput, UpdateMemberCommandOutput } from "./commands/UpdateMemberCommand";
import { UpdateNodeCommandInput, UpdateNodeCommandOutput } from "./commands/UpdateNodeCommand";
import { VoteOnProposalCommandInput, VoteOnProposalCommandOutput } from "./commands/VoteOnProposalCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateAccessorCommandInput
  | CreateMemberCommandInput
  | CreateNetworkCommandInput
  | CreateNodeCommandInput
  | CreateProposalCommandInput
  | DeleteAccessorCommandInput
  | DeleteMemberCommandInput
  | DeleteNodeCommandInput
  | GetAccessorCommandInput
  | GetMemberCommandInput
  | GetNetworkCommandInput
  | GetNodeCommandInput
  | GetProposalCommandInput
  | ListAccessorsCommandInput
  | ListInvitationsCommandInput
  | ListMembersCommandInput
  | ListNetworksCommandInput
  | ListNodesCommandInput
  | ListProposalVotesCommandInput
  | ListProposalsCommandInput
  | ListTagsForResourceCommandInput
  | RejectInvitationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateMemberCommandInput
  | UpdateNodeCommandInput
  | VoteOnProposalCommandInput;

export type ServiceOutputTypes =
  | CreateAccessorCommandOutput
  | CreateMemberCommandOutput
  | CreateNetworkCommandOutput
  | CreateNodeCommandOutput
  | CreateProposalCommandOutput
  | DeleteAccessorCommandOutput
  | DeleteMemberCommandOutput
  | DeleteNodeCommandOutput
  | GetAccessorCommandOutput
  | GetMemberCommandOutput
  | GetNetworkCommandOutput
  | GetNodeCommandOutput
  | GetProposalCommandOutput
  | ListAccessorsCommandOutput
  | ListInvitationsCommandOutput
  | ListMembersCommandOutput
  | ListNetworksCommandOutput
  | ListNodesCommandOutput
  | ListProposalVotesCommandOutput
  | ListProposalsCommandOutput
  | ListTagsForResourceCommandOutput
  | RejectInvitationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateMemberCommandOutput
  | UpdateNodeCommandOutput
  | VoteOnProposalCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type ManagedBlockchainClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ManagedBlockchainClient class constructor that set the region, credentials and other options.
 */
export interface ManagedBlockchainClientConfig extends ManagedBlockchainClientConfigType {}

type ManagedBlockchainClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ManagedBlockchainClient class. This is resolved and normalized from the {@link ManagedBlockchainClientConfig | constructor configuration interface}.
 */
export interface ManagedBlockchainClientResolvedConfig extends ManagedBlockchainClientResolvedConfigType {}

/**
 * <p></p>
 *          <p>Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks using open-source frameworks. Blockchain allows you to build applications where multiple parties can securely and transparently run transactions and share data without the need for a trusted, central authority.</p>
 *         <p>Managed Blockchain supports the Hyperledger Fabric and Ethereum open-source frameworks. Because of fundamental differences between the frameworks, some API actions or data types may only apply in the context of one framework and not the other. For example, actions related to Hyperledger Fabric network members such as <code>CreateMember</code> and <code>DeleteMember</code> don't apply to Ethereum.</p>
 *         <p>The description for each action indicates the framework or frameworks to which it applies. Data types and properties that apply only in the context of a particular framework are similarly indicated.</p>
 */
export class ManagedBlockchainClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ManagedBlockchainClientResolvedConfig
> {
  /**
   * The resolved configuration of ManagedBlockchainClient class. This is resolved and normalized from the {@link ManagedBlockchainClientConfig | constructor configuration interface}.
   */
  readonly config: ManagedBlockchainClientResolvedConfig;

  constructor(configuration: ManagedBlockchainClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
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
