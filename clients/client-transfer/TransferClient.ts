import {
  CreateServerCommandInput,
  CreateServerCommandOutput
} from "./commands/CreateServerCommand";
import {
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "./commands/CreateUserCommand";
import {
  DeleteServerCommandInput,
  DeleteServerCommandOutput
} from "./commands/DeleteServerCommand";
import {
  DeleteSshPublicKeyCommandInput,
  DeleteSshPublicKeyCommandOutput
} from "./commands/DeleteSshPublicKeyCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "./commands/DeleteUserCommand";
import {
  DescribeServerCommandInput,
  DescribeServerCommandOutput
} from "./commands/DescribeServerCommand";
import {
  DescribeUserCommandInput,
  DescribeUserCommandOutput
} from "./commands/DescribeUserCommand";
import {
  ImportSshPublicKeyCommandInput,
  ImportSshPublicKeyCommandOutput
} from "./commands/ImportSshPublicKeyCommand";
import {
  ListServersCommandInput,
  ListServersCommandOutput
} from "./commands/ListServersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput
} from "./commands/ListUsersCommand";
import {
  StartServerCommandInput,
  StartServerCommandOutput
} from "./commands/StartServerCommand";
import {
  StopServerCommandInput,
  StopServerCommandOutput
} from "./commands/StopServerCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  TestIdentityProviderCommandInput,
  TestIdentityProviderCommandOutput
} from "./commands/TestIdentityProviderCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateServerCommandInput,
  UpdateServerCommandOutput
} from "./commands/UpdateServerCommand";
import {
  UpdateUserCommandInput,
  UpdateUserCommandOutput
} from "./commands/UpdateUserCommand";
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
  | CreateServerCommandInput
  | CreateUserCommandInput
  | DeleteServerCommandInput
  | DeleteSshPublicKeyCommandInput
  | DeleteUserCommandInput
  | DescribeServerCommandInput
  | DescribeUserCommandInput
  | ImportSshPublicKeyCommandInput
  | ListServersCommandInput
  | ListTagsForResourceCommandInput
  | ListUsersCommandInput
  | StartServerCommandInput
  | StopServerCommandInput
  | TagResourceCommandInput
  | TestIdentityProviderCommandInput
  | UntagResourceCommandInput
  | UpdateServerCommandInput
  | UpdateUserCommandInput;

export type ServiceOutputTypes =
  | CreateServerCommandOutput
  | CreateUserCommandOutput
  | DeleteServerCommandOutput
  | DeleteSshPublicKeyCommandOutput
  | DeleteUserCommandOutput
  | DescribeServerCommandOutput
  | DescribeUserCommandOutput
  | ImportSshPublicKeyCommandOutput
  | ListServersCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUsersCommandOutput
  | StartServerCommandOutput
  | StopServerCommandOutput
  | TagResourceCommandOutput
  | TestIdentityProviderCommandOutput
  | UntagResourceCommandOutput
  | UpdateServerCommandOutput
  | UpdateUserCommandOutput;

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

export type TransferClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type TransferClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>AWS Transfer for SFTP is a fully managed service that enables the transfer of files
 *       directly into and out of Amazon S3 using the Secure File Transfer Protocol (SFTP)—also known
 *       as Secure Shell (SSH) File Transfer Protocol. AWS helps you seamlessly migrate your file
 *       transfer workflows to AWS Transfer for SFTP—by integrating with existing authentication
 *       systems, and providing DNS routing with Amazon Route 53—so nothing changes for your customers
 *       and partners, or their applications. With your data in S3, you can use it with AWS services
 *       for processing, analytics, machine learning, and archiving. Getting started with AWS Transfer
 *       for SFTP (AWS SFTP) is easy; there is no infrastructure to buy and set
 *       up. </p>
 */
export class TransferClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  TransferClientResolvedConfig
> {
  readonly config: TransferClientResolvedConfig;

  constructor(configuration: TransferClientConfig) {
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
