// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultAppStreamHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateAppBlockBuilderAppBlockCommandInput,
  AssociateAppBlockBuilderAppBlockCommandOutput,
} from "./commands/AssociateAppBlockBuilderAppBlockCommand";
import {
  AssociateApplicationFleetCommandInput,
  AssociateApplicationFleetCommandOutput,
} from "./commands/AssociateApplicationFleetCommand";
import {
  AssociateApplicationToEntitlementCommandInput,
  AssociateApplicationToEntitlementCommandOutput,
} from "./commands/AssociateApplicationToEntitlementCommand";
import { AssociateFleetCommandInput, AssociateFleetCommandOutput } from "./commands/AssociateFleetCommand";
import {
  BatchAssociateUserStackCommandInput,
  BatchAssociateUserStackCommandOutput,
} from "./commands/BatchAssociateUserStackCommand";
import {
  BatchDisassociateUserStackCommandInput,
  BatchDisassociateUserStackCommandOutput,
} from "./commands/BatchDisassociateUserStackCommand";
import { CopyImageCommandInput, CopyImageCommandOutput } from "./commands/CopyImageCommand";
import {
  CreateAppBlockBuilderCommandInput,
  CreateAppBlockBuilderCommandOutput,
} from "./commands/CreateAppBlockBuilderCommand";
import {
  CreateAppBlockBuilderStreamingURLCommandInput,
  CreateAppBlockBuilderStreamingURLCommandOutput,
} from "./commands/CreateAppBlockBuilderStreamingURLCommand";
import { CreateAppBlockCommandInput, CreateAppBlockCommandOutput } from "./commands/CreateAppBlockCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import {
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput,
} from "./commands/CreateDirectoryConfigCommand";
import { CreateEntitlementCommandInput, CreateEntitlementCommandOutput } from "./commands/CreateEntitlementCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import { CreateImageBuilderCommandInput, CreateImageBuilderCommandOutput } from "./commands/CreateImageBuilderCommand";
import {
  CreateImageBuilderStreamingURLCommandInput,
  CreateImageBuilderStreamingURLCommandOutput,
} from "./commands/CreateImageBuilderStreamingURLCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import { CreateStreamingURLCommandInput, CreateStreamingURLCommandOutput } from "./commands/CreateStreamingURLCommand";
import {
  CreateThemeForStackCommandInput,
  CreateThemeForStackCommandOutput,
} from "./commands/CreateThemeForStackCommand";
import { CreateUpdatedImageCommandInput, CreateUpdatedImageCommandOutput } from "./commands/CreateUpdatedImageCommand";
import {
  CreateUsageReportSubscriptionCommandInput,
  CreateUsageReportSubscriptionCommandOutput,
} from "./commands/CreateUsageReportSubscriptionCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteAppBlockBuilderCommandInput,
  DeleteAppBlockBuilderCommandOutput,
} from "./commands/DeleteAppBlockBuilderCommand";
import { DeleteAppBlockCommandInput, DeleteAppBlockCommandOutput } from "./commands/DeleteAppBlockCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import {
  DeleteDirectoryConfigCommandInput,
  DeleteDirectoryConfigCommandOutput,
} from "./commands/DeleteDirectoryConfigCommand";
import { DeleteEntitlementCommandInput, DeleteEntitlementCommandOutput } from "./commands/DeleteEntitlementCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import { DeleteImageBuilderCommandInput, DeleteImageBuilderCommandOutput } from "./commands/DeleteImageBuilderCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import {
  DeleteImagePermissionsCommandInput,
  DeleteImagePermissionsCommandOutput,
} from "./commands/DeleteImagePermissionsCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import {
  DeleteThemeForStackCommandInput,
  DeleteThemeForStackCommandOutput,
} from "./commands/DeleteThemeForStackCommand";
import {
  DeleteUsageReportSubscriptionCommandInput,
  DeleteUsageReportSubscriptionCommandOutput,
} from "./commands/DeleteUsageReportSubscriptionCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  DescribeAppBlockBuilderAppBlockAssociationsCommandOutput,
} from "./commands/DescribeAppBlockBuilderAppBlockAssociationsCommand";
import {
  DescribeAppBlockBuildersCommandInput,
  DescribeAppBlockBuildersCommandOutput,
} from "./commands/DescribeAppBlockBuildersCommand";
import { DescribeAppBlocksCommandInput, DescribeAppBlocksCommandOutput } from "./commands/DescribeAppBlocksCommand";
import {
  DescribeApplicationFleetAssociationsCommandInput,
  DescribeApplicationFleetAssociationsCommandOutput,
} from "./commands/DescribeApplicationFleetAssociationsCommand";
import {
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "./commands/DescribeApplicationsCommand";
import {
  DescribeDirectoryConfigsCommandInput,
  DescribeDirectoryConfigsCommandOutput,
} from "./commands/DescribeDirectoryConfigsCommand";
import {
  DescribeEntitlementsCommandInput,
  DescribeEntitlementsCommandOutput,
} from "./commands/DescribeEntitlementsCommand";
import { DescribeFleetsCommandInput, DescribeFleetsCommandOutput } from "./commands/DescribeFleetsCommand";
import {
  DescribeImageBuildersCommandInput,
  DescribeImageBuildersCommandOutput,
} from "./commands/DescribeImageBuildersCommand";
import {
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
} from "./commands/DescribeImagePermissionsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "./commands/DescribeImagesCommand";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "./commands/DescribeSessionsCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "./commands/DescribeStacksCommand";
import {
  DescribeThemeForStackCommandInput,
  DescribeThemeForStackCommandOutput,
} from "./commands/DescribeThemeForStackCommand";
import {
  DescribeUsageReportSubscriptionsCommandInput,
  DescribeUsageReportSubscriptionsCommandOutput,
} from "./commands/DescribeUsageReportSubscriptionsCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand";
import {
  DescribeUserStackAssociationsCommandInput,
  DescribeUserStackAssociationsCommandOutput,
} from "./commands/DescribeUserStackAssociationsCommand";
import { DisableUserCommandInput, DisableUserCommandOutput } from "./commands/DisableUserCommand";
import {
  DisassociateAppBlockBuilderAppBlockCommandInput,
  DisassociateAppBlockBuilderAppBlockCommandOutput,
} from "./commands/DisassociateAppBlockBuilderAppBlockCommand";
import {
  DisassociateApplicationFleetCommandInput,
  DisassociateApplicationFleetCommandOutput,
} from "./commands/DisassociateApplicationFleetCommand";
import {
  DisassociateApplicationFromEntitlementCommandInput,
  DisassociateApplicationFromEntitlementCommandOutput,
} from "./commands/DisassociateApplicationFromEntitlementCommand";
import { DisassociateFleetCommandInput, DisassociateFleetCommandOutput } from "./commands/DisassociateFleetCommand";
import { EnableUserCommandInput, EnableUserCommandOutput } from "./commands/EnableUserCommand";
import { ExpireSessionCommandInput, ExpireSessionCommandOutput } from "./commands/ExpireSessionCommand";
import {
  ListAssociatedFleetsCommandInput,
  ListAssociatedFleetsCommandOutput,
} from "./commands/ListAssociatedFleetsCommand";
import {
  ListAssociatedStacksCommandInput,
  ListAssociatedStacksCommandOutput,
} from "./commands/ListAssociatedStacksCommand";
import {
  ListEntitledApplicationsCommandInput,
  ListEntitledApplicationsCommandOutput,
} from "./commands/ListEntitledApplicationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartAppBlockBuilderCommandInput,
  StartAppBlockBuilderCommandOutput,
} from "./commands/StartAppBlockBuilderCommand";
import { StartFleetCommandInput, StartFleetCommandOutput } from "./commands/StartFleetCommand";
import { StartImageBuilderCommandInput, StartImageBuilderCommandOutput } from "./commands/StartImageBuilderCommand";
import {
  StopAppBlockBuilderCommandInput,
  StopAppBlockBuilderCommandOutput,
} from "./commands/StopAppBlockBuilderCommand";
import { StopFleetCommandInput, StopFleetCommandOutput } from "./commands/StopFleetCommand";
import { StopImageBuilderCommandInput, StopImageBuilderCommandOutput } from "./commands/StopImageBuilderCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAppBlockBuilderCommandInput,
  UpdateAppBlockBuilderCommandOutput,
} from "./commands/UpdateAppBlockBuilderCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import {
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput,
} from "./commands/UpdateDirectoryConfigCommand";
import { UpdateEntitlementCommandInput, UpdateEntitlementCommandOutput } from "./commands/UpdateEntitlementCommand";
import { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import {
  UpdateImagePermissionsCommandInput,
  UpdateImagePermissionsCommandOutput,
} from "./commands/UpdateImagePermissionsCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import {
  UpdateThemeForStackCommandInput,
  UpdateThemeForStackCommandOutput,
} from "./commands/UpdateThemeForStackCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateAppBlockBuilderAppBlockCommandInput
  | AssociateApplicationFleetCommandInput
  | AssociateApplicationToEntitlementCommandInput
  | AssociateFleetCommandInput
  | BatchAssociateUserStackCommandInput
  | BatchDisassociateUserStackCommandInput
  | CopyImageCommandInput
  | CreateAppBlockBuilderCommandInput
  | CreateAppBlockBuilderStreamingURLCommandInput
  | CreateAppBlockCommandInput
  | CreateApplicationCommandInput
  | CreateDirectoryConfigCommandInput
  | CreateEntitlementCommandInput
  | CreateFleetCommandInput
  | CreateImageBuilderCommandInput
  | CreateImageBuilderStreamingURLCommandInput
  | CreateStackCommandInput
  | CreateStreamingURLCommandInput
  | CreateThemeForStackCommandInput
  | CreateUpdatedImageCommandInput
  | CreateUsageReportSubscriptionCommandInput
  | CreateUserCommandInput
  | DeleteAppBlockBuilderCommandInput
  | DeleteAppBlockCommandInput
  | DeleteApplicationCommandInput
  | DeleteDirectoryConfigCommandInput
  | DeleteEntitlementCommandInput
  | DeleteFleetCommandInput
  | DeleteImageBuilderCommandInput
  | DeleteImageCommandInput
  | DeleteImagePermissionsCommandInput
  | DeleteStackCommandInput
  | DeleteThemeForStackCommandInput
  | DeleteUsageReportSubscriptionCommandInput
  | DeleteUserCommandInput
  | DescribeAppBlockBuilderAppBlockAssociationsCommandInput
  | DescribeAppBlockBuildersCommandInput
  | DescribeAppBlocksCommandInput
  | DescribeApplicationFleetAssociationsCommandInput
  | DescribeApplicationsCommandInput
  | DescribeDirectoryConfigsCommandInput
  | DescribeEntitlementsCommandInput
  | DescribeFleetsCommandInput
  | DescribeImageBuildersCommandInput
  | DescribeImagePermissionsCommandInput
  | DescribeImagesCommandInput
  | DescribeSessionsCommandInput
  | DescribeStacksCommandInput
  | DescribeThemeForStackCommandInput
  | DescribeUsageReportSubscriptionsCommandInput
  | DescribeUserStackAssociationsCommandInput
  | DescribeUsersCommandInput
  | DisableUserCommandInput
  | DisassociateAppBlockBuilderAppBlockCommandInput
  | DisassociateApplicationFleetCommandInput
  | DisassociateApplicationFromEntitlementCommandInput
  | DisassociateFleetCommandInput
  | EnableUserCommandInput
  | ExpireSessionCommandInput
  | ListAssociatedFleetsCommandInput
  | ListAssociatedStacksCommandInput
  | ListEntitledApplicationsCommandInput
  | ListTagsForResourceCommandInput
  | StartAppBlockBuilderCommandInput
  | StartFleetCommandInput
  | StartImageBuilderCommandInput
  | StopAppBlockBuilderCommandInput
  | StopFleetCommandInput
  | StopImageBuilderCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAppBlockBuilderCommandInput
  | UpdateApplicationCommandInput
  | UpdateDirectoryConfigCommandInput
  | UpdateEntitlementCommandInput
  | UpdateFleetCommandInput
  | UpdateImagePermissionsCommandInput
  | UpdateStackCommandInput
  | UpdateThemeForStackCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateAppBlockBuilderAppBlockCommandOutput
  | AssociateApplicationFleetCommandOutput
  | AssociateApplicationToEntitlementCommandOutput
  | AssociateFleetCommandOutput
  | BatchAssociateUserStackCommandOutput
  | BatchDisassociateUserStackCommandOutput
  | CopyImageCommandOutput
  | CreateAppBlockBuilderCommandOutput
  | CreateAppBlockBuilderStreamingURLCommandOutput
  | CreateAppBlockCommandOutput
  | CreateApplicationCommandOutput
  | CreateDirectoryConfigCommandOutput
  | CreateEntitlementCommandOutput
  | CreateFleetCommandOutput
  | CreateImageBuilderCommandOutput
  | CreateImageBuilderStreamingURLCommandOutput
  | CreateStackCommandOutput
  | CreateStreamingURLCommandOutput
  | CreateThemeForStackCommandOutput
  | CreateUpdatedImageCommandOutput
  | CreateUsageReportSubscriptionCommandOutput
  | CreateUserCommandOutput
  | DeleteAppBlockBuilderCommandOutput
  | DeleteAppBlockCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteDirectoryConfigCommandOutput
  | DeleteEntitlementCommandOutput
  | DeleteFleetCommandOutput
  | DeleteImageBuilderCommandOutput
  | DeleteImageCommandOutput
  | DeleteImagePermissionsCommandOutput
  | DeleteStackCommandOutput
  | DeleteThemeForStackCommandOutput
  | DeleteUsageReportSubscriptionCommandOutput
  | DeleteUserCommandOutput
  | DescribeAppBlockBuilderAppBlockAssociationsCommandOutput
  | DescribeAppBlockBuildersCommandOutput
  | DescribeAppBlocksCommandOutput
  | DescribeApplicationFleetAssociationsCommandOutput
  | DescribeApplicationsCommandOutput
  | DescribeDirectoryConfigsCommandOutput
  | DescribeEntitlementsCommandOutput
  | DescribeFleetsCommandOutput
  | DescribeImageBuildersCommandOutput
  | DescribeImagePermissionsCommandOutput
  | DescribeImagesCommandOutput
  | DescribeSessionsCommandOutput
  | DescribeStacksCommandOutput
  | DescribeThemeForStackCommandOutput
  | DescribeUsageReportSubscriptionsCommandOutput
  | DescribeUserStackAssociationsCommandOutput
  | DescribeUsersCommandOutput
  | DisableUserCommandOutput
  | DisassociateAppBlockBuilderAppBlockCommandOutput
  | DisassociateApplicationFleetCommandOutput
  | DisassociateApplicationFromEntitlementCommandOutput
  | DisassociateFleetCommandOutput
  | EnableUserCommandOutput
  | ExpireSessionCommandOutput
  | ListAssociatedFleetsCommandOutput
  | ListAssociatedStacksCommandOutput
  | ListEntitledApplicationsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartAppBlockBuilderCommandOutput
  | StartFleetCommandOutput
  | StartImageBuilderCommandOutput
  | StopAppBlockBuilderCommandOutput
  | StopFleetCommandOutput
  | StopImageBuilderCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAppBlockBuilderCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateDirectoryConfigCommandOutput
  | UpdateEntitlementCommandOutput
  | UpdateFleetCommandOutput
  | UpdateImagePermissionsCommandOutput
  | UpdateStackCommandOutput
  | UpdateThemeForStackCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type AppStreamClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of AppStreamClient class constructor that set the region, credentials and other options.
 */
export interface AppStreamClientConfig extends AppStreamClientConfigType {}

/**
 * @public
 */
export type AppStreamClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of AppStreamClient class. This is resolved and normalized from the {@link AppStreamClientConfig | constructor configuration interface}.
 */
export interface AppStreamClientResolvedConfig extends AppStreamClientResolvedConfigType {}

/**
 * <fullname>Amazon AppStream 2.0</fullname>
 *          <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p>
 *          <note>
 *             <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 *          </note>
 *          <p>To learn more about AppStream 2.0, see the following resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/appstream2">Amazon AppStream 2.0 product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/appstream2">Amazon AppStream 2.0 documentation</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class AppStreamClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppStreamClientResolvedConfig
> {
  /**
   * The resolved configuration of AppStreamClient class. This is resolved and normalized from the {@link AppStreamClientConfig | constructor configuration interface}.
   */
  readonly config: AppStreamClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<AppStreamClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultAppStreamHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: AppStreamClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
