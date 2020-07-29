import {
  CreateEnvironmentEC2CommandInput,
  CreateEnvironmentEC2CommandOutput,
} from "./commands/CreateEnvironmentEC2Command";
import {
  CreateEnvironmentMembershipCommandInput,
  CreateEnvironmentMembershipCommandOutput,
} from "./commands/CreateEnvironmentMembershipCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "./commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentMembershipCommandInput,
  DeleteEnvironmentMembershipCommandOutput,
} from "./commands/DeleteEnvironmentMembershipCommand";
import {
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput,
} from "./commands/DescribeEnvironmentMembershipsCommand";
import {
  DescribeEnvironmentStatusCommandInput,
  DescribeEnvironmentStatusCommandOutput,
} from "./commands/DescribeEnvironmentStatusCommand";
import {
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput,
} from "./commands/DescribeEnvironmentsCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "./commands/ListEnvironmentsCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "./commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentMembershipCommandInput,
  UpdateEnvironmentMembershipCommandOutput,
} from "./commands/UpdateEnvironmentMembershipCommand";
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
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateEnvironmentEC2CommandInput
  | CreateEnvironmentMembershipCommandInput
  | DeleteEnvironmentCommandInput
  | DeleteEnvironmentMembershipCommandInput
  | DescribeEnvironmentMembershipsCommandInput
  | DescribeEnvironmentStatusCommandInput
  | DescribeEnvironmentsCommandInput
  | ListEnvironmentsCommandInput
  | UpdateEnvironmentCommandInput
  | UpdateEnvironmentMembershipCommandInput;

export type ServiceOutputTypes =
  | CreateEnvironmentEC2CommandOutput
  | CreateEnvironmentMembershipCommandOutput
  | DeleteEnvironmentCommandOutput
  | DeleteEnvironmentMembershipCommandOutput
  | DescribeEnvironmentMembershipsCommandOutput
  | DescribeEnvironmentStatusCommandOutput
  | DescribeEnvironmentsCommandOutput
  | ListEnvironmentsCommandOutput
  | UpdateEnvironmentCommandOutput
  | UpdateEnvironmentMembershipCommandOutput;

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
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type Cloud9ClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type Cloud9ClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS Cloud9</fullname>
 *          <p>AWS Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and release software in the cloud.</p>
 *          <p>For more information about AWS Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">AWS Cloud9 User Guide</a>.</p>
 *          <p>AWS Cloud9 supports these operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateEnvironmentEC2</code>: Creates an AWS Cloud9 development environment, launches an Amazon EC2 instance, and then connects from the instance to the environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateEnvironmentMembership</code>: Adds an environment member to an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is connected to the environment, also terminates the instance.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironmentMemberships</code>: Gets information about environment members for an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironments</code>: Gets information about environments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironmentStatus</code>: Gets status information for an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListEnvironments</code>: Gets a list of environment identifiers.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateEnvironment</code>: Changes the settings of an existing environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing environment member for an environment.</p>
 *             </li>
 *          </ul>
 */
export class Cloud9Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Cloud9ClientResolvedConfig
> {
  readonly config: Cloud9ClientResolvedConfig;

  constructor(configuration: Cloud9ClientConfig) {
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
  }

  destroy(): void {
    super.destroy();
  }
}
