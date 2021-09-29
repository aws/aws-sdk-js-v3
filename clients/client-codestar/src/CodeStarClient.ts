import {
  AssociateTeamMemberCommandInput,
  AssociateTeamMemberCommandOutput,
} from "./commands/AssociateTeamMemberCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "./commands/DeleteUserProfileCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import {
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput,
} from "./commands/DescribeUserProfileCommand";
import {
  DisassociateTeamMemberCommandInput,
  DisassociateTeamMemberCommandOutput,
} from "./commands/DisassociateTeamMemberCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import { ListTagsForProjectCommandInput, ListTagsForProjectCommandOutput } from "./commands/ListTagsForProjectCommand";
import { ListTeamMembersCommandInput, ListTeamMembersCommandOutput } from "./commands/ListTeamMembersCommand";
import { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "./commands/ListUserProfilesCommand";
import { TagProjectCommandInput, TagProjectCommandOutput } from "./commands/TagProjectCommand";
import { UntagProjectCommandInput, UntagProjectCommandOutput } from "./commands/UntagProjectCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { UpdateTeamMemberCommandInput, UpdateTeamMemberCommandOutput } from "./commands/UpdateTeamMemberCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
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
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AssociateTeamMemberCommandInput
  | CreateProjectCommandInput
  | CreateUserProfileCommandInput
  | DeleteProjectCommandInput
  | DeleteUserProfileCommandInput
  | DescribeProjectCommandInput
  | DescribeUserProfileCommandInput
  | DisassociateTeamMemberCommandInput
  | ListProjectsCommandInput
  | ListResourcesCommandInput
  | ListTagsForProjectCommandInput
  | ListTeamMembersCommandInput
  | ListUserProfilesCommandInput
  | TagProjectCommandInput
  | UntagProjectCommandInput
  | UpdateProjectCommandInput
  | UpdateTeamMemberCommandInput
  | UpdateUserProfileCommandInput;

export type ServiceOutputTypes =
  | AssociateTeamMemberCommandOutput
  | CreateProjectCommandOutput
  | CreateUserProfileCommandOutput
  | DeleteProjectCommandOutput
  | DeleteUserProfileCommandOutput
  | DescribeProjectCommandOutput
  | DescribeUserProfileCommandOutput
  | DisassociateTeamMemberCommandOutput
  | ListProjectsCommandOutput
  | ListResourcesCommandOutput
  | ListTagsForProjectCommandOutput
  | ListTeamMembersCommandOutput
  | ListUserProfilesCommandOutput
  | TagProjectCommandOutput
  | UntagProjectCommandOutput
  | UpdateProjectCommandOutput
  | UpdateTeamMemberCommandOutput
  | UpdateUserProfileCommandOutput;

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
  bodyLengthChecker?: (body: any) => number | undefined;

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
}

type CodeStarClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of CodeStarClient class constructor that set the region, credentials and other options.
 */
export interface CodeStarClientConfig extends CodeStarClientConfigType {}

type CodeStarClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of CodeStarClient class. This is resolved and normalized from the {@link CodeStarClientConfig | constructor configuration interface}.
 */
export interface CodeStarClientResolvedConfig extends CodeStarClientResolvedConfigType {}

/**
 * <fullname>AWS CodeStar</fullname>
 *          <p>This is the API reference for AWS CodeStar. This reference provides descriptions of the
 *       operations and data types for the AWS CodeStar API along with usage examples.</p>
 *          <p>You can use the AWS CodeStar API to work with:</p>
 *          <p>Projects and their resources, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DeleteProject</code>, which deletes a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeProject</code>, which lists the attributes of a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListProjects</code>, which lists all projects associated with your AWS
 *           account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListResources</code>, which lists the resources associated with a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTagsForProject</code>, which lists the tags associated with a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TagProject</code>, which adds tags to a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UntagProject</code>, which removes tags from a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateProject</code>, which updates the attributes of a project.</p>
 *             </li>
 *          </ul>
 *          <p>Teams and team members, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AssociateTeamMember</code>, which adds an IAM user to the team for a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DisassociateTeamMember</code>, which removes an IAM user from the team for a
 *           project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTeamMembers</code>, which lists all the IAM users in the team for a
 *           project, including their roles and attributes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateTeamMember</code>, which updates a team member's attributes in a
 *           project.</p>
 *             </li>
 *          </ul>
 *          <p>Users, by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateUserProfile</code>, which creates a user profile that contains data
 *           associated with the user across all projects.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteUserProfile</code>, which deletes all user profile information across
 *           all projects.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeUserProfile</code>, which describes the profile of a user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListUserProfiles</code>, which lists all user profiles.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateUserProfile</code>, which updates the profile for a user.</p>
 *             </li>
 *          </ul>
 */
export class CodeStarClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeStarClientResolvedConfig
> {
  /**
   * The resolved configuration of CodeStarClient class. This is resolved and normalized from the {@link CodeStarClientConfig | constructor configuration interface}.
   */
  readonly config: CodeStarClientResolvedConfig;

  constructor(configuration: CodeStarClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
