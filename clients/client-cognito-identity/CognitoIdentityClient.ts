import { CreateIdentityPoolCommandInput, CreateIdentityPoolCommandOutput } from "./commands/CreateIdentityPoolCommand";
import { DeleteIdentitiesCommandInput, DeleteIdentitiesCommandOutput } from "./commands/DeleteIdentitiesCommand";
import { DeleteIdentityPoolCommandInput, DeleteIdentityPoolCommandOutput } from "./commands/DeleteIdentityPoolCommand";
import { DescribeIdentityCommandInput, DescribeIdentityCommandOutput } from "./commands/DescribeIdentityCommand";
import {
  DescribeIdentityPoolCommandInput,
  DescribeIdentityPoolCommandOutput,
} from "./commands/DescribeIdentityPoolCommand";
import {
  GetCredentialsForIdentityCommandInput,
  GetCredentialsForIdentityCommandOutput,
} from "./commands/GetCredentialsForIdentityCommand";
import { GetIdCommandInput, GetIdCommandOutput } from "./commands/GetIdCommand";
import {
  GetIdentityPoolRolesCommandInput,
  GetIdentityPoolRolesCommandOutput,
} from "./commands/GetIdentityPoolRolesCommand";
import { GetOpenIdTokenCommandInput, GetOpenIdTokenCommandOutput } from "./commands/GetOpenIdTokenCommand";
import {
  GetOpenIdTokenForDeveloperIdentityCommandInput,
  GetOpenIdTokenForDeveloperIdentityCommandOutput,
} from "./commands/GetOpenIdTokenForDeveloperIdentityCommand";
import {
  GetPrincipalTagAttributeMapCommandInput,
  GetPrincipalTagAttributeMapCommandOutput,
} from "./commands/GetPrincipalTagAttributeMapCommand";
import { ListIdentitiesCommandInput, ListIdentitiesCommandOutput } from "./commands/ListIdentitiesCommand";
import { ListIdentityPoolsCommandInput, ListIdentityPoolsCommandOutput } from "./commands/ListIdentityPoolsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  LookupDeveloperIdentityCommandInput,
  LookupDeveloperIdentityCommandOutput,
} from "./commands/LookupDeveloperIdentityCommand";
import {
  MergeDeveloperIdentitiesCommandInput,
  MergeDeveloperIdentitiesCommandOutput,
} from "./commands/MergeDeveloperIdentitiesCommand";
import {
  SetIdentityPoolRolesCommandInput,
  SetIdentityPoolRolesCommandOutput,
} from "./commands/SetIdentityPoolRolesCommand";
import {
  SetPrincipalTagAttributeMapCommandInput,
  SetPrincipalTagAttributeMapCommandOutput,
} from "./commands/SetPrincipalTagAttributeMapCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UnlinkDeveloperIdentityCommandInput,
  UnlinkDeveloperIdentityCommandOutput,
} from "./commands/UnlinkDeveloperIdentityCommand";
import { UnlinkIdentityCommandInput, UnlinkIdentityCommandOutput } from "./commands/UnlinkIdentityCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateIdentityPoolCommandInput, UpdateIdentityPoolCommandOutput } from "./commands/UpdateIdentityPoolCommand";
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
import { AwsAuthInputConfig, AwsAuthResolvedConfig, resolveAwsAuthConfig } from "@aws-sdk/middleware-signing";
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
  | CreateIdentityPoolCommandInput
  | DeleteIdentitiesCommandInput
  | DeleteIdentityPoolCommandInput
  | DescribeIdentityCommandInput
  | DescribeIdentityPoolCommandInput
  | GetCredentialsForIdentityCommandInput
  | GetIdCommandInput
  | GetIdentityPoolRolesCommandInput
  | GetOpenIdTokenCommandInput
  | GetOpenIdTokenForDeveloperIdentityCommandInput
  | GetPrincipalTagAttributeMapCommandInput
  | ListIdentitiesCommandInput
  | ListIdentityPoolsCommandInput
  | ListTagsForResourceCommandInput
  | LookupDeveloperIdentityCommandInput
  | MergeDeveloperIdentitiesCommandInput
  | SetIdentityPoolRolesCommandInput
  | SetPrincipalTagAttributeMapCommandInput
  | TagResourceCommandInput
  | UnlinkDeveloperIdentityCommandInput
  | UnlinkIdentityCommandInput
  | UntagResourceCommandInput
  | UpdateIdentityPoolCommandInput;

export type ServiceOutputTypes =
  | CreateIdentityPoolCommandOutput
  | DeleteIdentitiesCommandOutput
  | DeleteIdentityPoolCommandOutput
  | DescribeIdentityCommandOutput
  | DescribeIdentityPoolCommandOutput
  | GetCredentialsForIdentityCommandOutput
  | GetIdCommandOutput
  | GetIdentityPoolRolesCommandOutput
  | GetOpenIdTokenCommandOutput
  | GetOpenIdTokenForDeveloperIdentityCommandOutput
  | GetPrincipalTagAttributeMapCommandOutput
  | ListIdentitiesCommandOutput
  | ListIdentityPoolsCommandOutput
  | ListTagsForResourceCommandOutput
  | LookupDeveloperIdentityCommandOutput
  | MergeDeveloperIdentitiesCommandOutput
  | SetIdentityPoolRolesCommandOutput
  | SetPrincipalTagAttributeMapCommandOutput
  | TagResourceCommandOutput
  | UnlinkDeveloperIdentityCommandOutput
  | UnlinkIdentityCommandOutput
  | UntagResourceCommandOutput
  | UpdateIdentityPoolCommandOutput;

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
   * Specifies provider for retry algorithm to use.
   * @internal
   */
  retryModeProvider?: __Provider<string>;

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

type CognitoIdentityClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of CognitoIdentityClient class constructor that set the region, credentials and other options.
 */
export interface CognitoIdentityClientConfig extends CognitoIdentityClientConfigType {}

type CognitoIdentityClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of CognitoIdentityClient class. This is resolved and normalized from the {@link CognitoIdentityClientConfig | constructor configuration interface}.
 */
export interface CognitoIdentityClientResolvedConfig extends CognitoIdentityClientResolvedConfigType {}

/**
 * <fullname>Amazon Cognito Federated Identities</fullname>
 *          <p>Amazon Cognito Federated Identities is a web service that delivers scoped temporary
 *          credentials to mobile devices and other untrusted environments. It uniquely identifies a
 *          device and supplies the user with a consistent identity over the lifetime of an
 *          application.</p>
 *          <p>Using Amazon Cognito Federated Identities, you can enable authentication with one or
 *          more third-party identity providers (Facebook, Google, or Login with Amazon) or an Amazon
 *          Cognito user pool, and you can also choose to support unauthenticated access from your app.
 *          Cognito delivers a unique identifier for each user and acts as an OpenID token provider
 *          trusted by AWS Security Token Service (STS) to access temporary, limited-privilege AWS
 *          credentials.</p>
 *          <p>For a description of the authentication flow from the Amazon Cognito Developer Guide
 *          see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Authentication Flow</a>.</p>
 *          <p>For more information see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito Federated Identities</a>.</p>
 */
export class CognitoIdentityClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CognitoIdentityClientResolvedConfig
> {
  /**
   * The resolved configuration of CognitoIdentityClient class. This is resolved and normalized from the {@link CognitoIdentityClientConfig | constructor configuration interface}.
   */
  readonly config: CognitoIdentityClientResolvedConfig;

  constructor(configuration: CognitoIdentityClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
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
