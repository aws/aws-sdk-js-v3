// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultAppStreamHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateAppBlockBuilderAppBlockCommandInput,
  AssociateAppBlockBuilderAppBlockCommandOutput,
} from "./commands/AssociateAppBlockBuilderAppBlockCommand";
import type {
  AssociateApplicationFleetCommandInput,
  AssociateApplicationFleetCommandOutput,
} from "./commands/AssociateApplicationFleetCommand";
import type {
  AssociateApplicationToEntitlementCommandInput,
  AssociateApplicationToEntitlementCommandOutput,
} from "./commands/AssociateApplicationToEntitlementCommand";
import type { AssociateFleetCommandInput, AssociateFleetCommandOutput } from "./commands/AssociateFleetCommand";
import type {
  AssociateSoftwareToImageBuilderCommandInput,
  AssociateSoftwareToImageBuilderCommandOutput,
} from "./commands/AssociateSoftwareToImageBuilderCommand";
import type {
  BatchAssociateUserStackCommandInput,
  BatchAssociateUserStackCommandOutput,
} from "./commands/BatchAssociateUserStackCommand";
import type {
  BatchDisassociateUserStackCommandInput,
  BatchDisassociateUserStackCommandOutput,
} from "./commands/BatchDisassociateUserStackCommand";
import type { CopyImageCommandInput, CopyImageCommandOutput } from "./commands/CopyImageCommand";
import type {
  CreateAppBlockBuilderCommandInput,
  CreateAppBlockBuilderCommandOutput,
} from "./commands/CreateAppBlockBuilderCommand";
import type {
  CreateAppBlockBuilderStreamingURLCommandInput,
  CreateAppBlockBuilderStreamingURLCommandOutput,
} from "./commands/CreateAppBlockBuilderStreamingURLCommand";
import type { CreateAppBlockCommandInput, CreateAppBlockCommandOutput } from "./commands/CreateAppBlockCommand";
import type {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import type {
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput,
} from "./commands/CreateDirectoryConfigCommand";
import type {
  CreateEntitlementCommandInput,
  CreateEntitlementCommandOutput,
} from "./commands/CreateEntitlementCommand";
import type {
  CreateExportImageTaskCommandInput,
  CreateExportImageTaskCommandOutput,
} from "./commands/CreateExportImageTaskCommand";
import type { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import type {
  CreateImageBuilderCommandInput,
  CreateImageBuilderCommandOutput,
} from "./commands/CreateImageBuilderCommand";
import type {
  CreateImageBuilderStreamingURLCommandInput,
  CreateImageBuilderStreamingURLCommandOutput,
} from "./commands/CreateImageBuilderStreamingURLCommand";
import type {
  CreateImportedImageCommandInput,
  CreateImportedImageCommandOutput,
} from "./commands/CreateImportedImageCommand";
import type { CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import type {
  CreateStreamingURLCommandInput,
  CreateStreamingURLCommandOutput,
} from "./commands/CreateStreamingURLCommand";
import type {
  CreateThemeForStackCommandInput,
  CreateThemeForStackCommandOutput,
} from "./commands/CreateThemeForStackCommand";
import type {
  CreateUpdatedImageCommandInput,
  CreateUpdatedImageCommandOutput,
} from "./commands/CreateUpdatedImageCommand";
import type {
  CreateUsageReportSubscriptionCommandInput,
  CreateUsageReportSubscriptionCommandOutput,
} from "./commands/CreateUsageReportSubscriptionCommand";
import type { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import type {
  DeleteAppBlockBuilderCommandInput,
  DeleteAppBlockBuilderCommandOutput,
} from "./commands/DeleteAppBlockBuilderCommand";
import type { DeleteAppBlockCommandInput, DeleteAppBlockCommandOutput } from "./commands/DeleteAppBlockCommand";
import type {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import type {
  DeleteDirectoryConfigCommandInput,
  DeleteDirectoryConfigCommandOutput,
} from "./commands/DeleteDirectoryConfigCommand";
import type {
  DeleteEntitlementCommandInput,
  DeleteEntitlementCommandOutput,
} from "./commands/DeleteEntitlementCommand";
import type { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import type {
  DeleteImageBuilderCommandInput,
  DeleteImageBuilderCommandOutput,
} from "./commands/DeleteImageBuilderCommand";
import type { DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import type {
  DeleteImagePermissionsCommandInput,
  DeleteImagePermissionsCommandOutput,
} from "./commands/DeleteImagePermissionsCommand";
import type { DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import type {
  DeleteThemeForStackCommandInput,
  DeleteThemeForStackCommandOutput,
} from "./commands/DeleteThemeForStackCommand";
import type {
  DeleteUsageReportSubscriptionCommandInput,
  DeleteUsageReportSubscriptionCommandOutput,
} from "./commands/DeleteUsageReportSubscriptionCommand";
import type { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import type {
  DescribeAppBlockBuilderAppBlockAssociationsCommandInput,
  DescribeAppBlockBuilderAppBlockAssociationsCommandOutput,
} from "./commands/DescribeAppBlockBuilderAppBlockAssociationsCommand";
import type {
  DescribeAppBlockBuildersCommandInput,
  DescribeAppBlockBuildersCommandOutput,
} from "./commands/DescribeAppBlockBuildersCommand";
import type {
  DescribeAppBlocksCommandInput,
  DescribeAppBlocksCommandOutput,
} from "./commands/DescribeAppBlocksCommand";
import type {
  DescribeApplicationFleetAssociationsCommandInput,
  DescribeApplicationFleetAssociationsCommandOutput,
} from "./commands/DescribeApplicationFleetAssociationsCommand";
import type {
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "./commands/DescribeApplicationsCommand";
import type {
  DescribeAppLicenseUsageCommandInput,
  DescribeAppLicenseUsageCommandOutput,
} from "./commands/DescribeAppLicenseUsageCommand";
import type {
  DescribeDirectoryConfigsCommandInput,
  DescribeDirectoryConfigsCommandOutput,
} from "./commands/DescribeDirectoryConfigsCommand";
import type {
  DescribeEntitlementsCommandInput,
  DescribeEntitlementsCommandOutput,
} from "./commands/DescribeEntitlementsCommand";
import type { DescribeFleetsCommandInput, DescribeFleetsCommandOutput } from "./commands/DescribeFleetsCommand";
import type {
  DescribeImageBuildersCommandInput,
  DescribeImageBuildersCommandOutput,
} from "./commands/DescribeImageBuildersCommand";
import type {
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
} from "./commands/DescribeImagePermissionsCommand";
import type { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "./commands/DescribeImagesCommand";
import type { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "./commands/DescribeSessionsCommand";
import type {
  DescribeSoftwareAssociationsCommandInput,
  DescribeSoftwareAssociationsCommandOutput,
} from "./commands/DescribeSoftwareAssociationsCommand";
import type { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "./commands/DescribeStacksCommand";
import type {
  DescribeThemeForStackCommandInput,
  DescribeThemeForStackCommandOutput,
} from "./commands/DescribeThemeForStackCommand";
import type {
  DescribeUsageReportSubscriptionsCommandInput,
  DescribeUsageReportSubscriptionsCommandOutput,
} from "./commands/DescribeUsageReportSubscriptionsCommand";
import type { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand";
import type {
  DescribeUserStackAssociationsCommandInput,
  DescribeUserStackAssociationsCommandOutput,
} from "./commands/DescribeUserStackAssociationsCommand";
import type { DisableUserCommandInput, DisableUserCommandOutput } from "./commands/DisableUserCommand";
import type {
  DisassociateAppBlockBuilderAppBlockCommandInput,
  DisassociateAppBlockBuilderAppBlockCommandOutput,
} from "./commands/DisassociateAppBlockBuilderAppBlockCommand";
import type {
  DisassociateApplicationFleetCommandInput,
  DisassociateApplicationFleetCommandOutput,
} from "./commands/DisassociateApplicationFleetCommand";
import type {
  DisassociateApplicationFromEntitlementCommandInput,
  DisassociateApplicationFromEntitlementCommandOutput,
} from "./commands/DisassociateApplicationFromEntitlementCommand";
import type {
  DisassociateFleetCommandInput,
  DisassociateFleetCommandOutput,
} from "./commands/DisassociateFleetCommand";
import type {
  DisassociateSoftwareFromImageBuilderCommandInput,
  DisassociateSoftwareFromImageBuilderCommandOutput,
} from "./commands/DisassociateSoftwareFromImageBuilderCommand";
import type { EnableUserCommandInput, EnableUserCommandOutput } from "./commands/EnableUserCommand";
import type { ExpireSessionCommandInput, ExpireSessionCommandOutput } from "./commands/ExpireSessionCommand";
import type {
  GetExportImageTaskCommandInput,
  GetExportImageTaskCommandOutput,
} from "./commands/GetExportImageTaskCommand";
import type {
  ListAssociatedFleetsCommandInput,
  ListAssociatedFleetsCommandOutput,
} from "./commands/ListAssociatedFleetsCommand";
import type {
  ListAssociatedStacksCommandInput,
  ListAssociatedStacksCommandOutput,
} from "./commands/ListAssociatedStacksCommand";
import type {
  ListEntitledApplicationsCommandInput,
  ListEntitledApplicationsCommandOutput,
} from "./commands/ListEntitledApplicationsCommand";
import type {
  ListExportImageTasksCommandInput,
  ListExportImageTasksCommandOutput,
} from "./commands/ListExportImageTasksCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  StartAppBlockBuilderCommandInput,
  StartAppBlockBuilderCommandOutput,
} from "./commands/StartAppBlockBuilderCommand";
import type { StartFleetCommandInput, StartFleetCommandOutput } from "./commands/StartFleetCommand";
import type {
  StartImageBuilderCommandInput,
  StartImageBuilderCommandOutput,
} from "./commands/StartImageBuilderCommand";
import type {
  StartSoftwareDeploymentToImageBuilderCommandInput,
  StartSoftwareDeploymentToImageBuilderCommandOutput,
} from "./commands/StartSoftwareDeploymentToImageBuilderCommand";
import type {
  StopAppBlockBuilderCommandInput,
  StopAppBlockBuilderCommandOutput,
} from "./commands/StopAppBlockBuilderCommand";
import type { StopFleetCommandInput, StopFleetCommandOutput } from "./commands/StopFleetCommand";
import type { StopImageBuilderCommandInput, StopImageBuilderCommandOutput } from "./commands/StopImageBuilderCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAppBlockBuilderCommandInput,
  UpdateAppBlockBuilderCommandOutput,
} from "./commands/UpdateAppBlockBuilderCommand";
import type {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import type {
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput,
} from "./commands/UpdateDirectoryConfigCommand";
import type {
  UpdateEntitlementCommandInput,
  UpdateEntitlementCommandOutput,
} from "./commands/UpdateEntitlementCommand";
import type { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import type {
  UpdateImagePermissionsCommandInput,
  UpdateImagePermissionsCommandOutput,
} from "./commands/UpdateImagePermissionsCommand";
import type { UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import type {
  UpdateThemeForStackCommandInput,
  UpdateThemeForStackCommandOutput,
} from "./commands/UpdateThemeForStackCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateAppBlockBuilderAppBlockCommandInput
  | AssociateApplicationFleetCommandInput
  | AssociateApplicationToEntitlementCommandInput
  | AssociateFleetCommandInput
  | AssociateSoftwareToImageBuilderCommandInput
  | BatchAssociateUserStackCommandInput
  | BatchDisassociateUserStackCommandInput
  | CopyImageCommandInput
  | CreateAppBlockBuilderCommandInput
  | CreateAppBlockBuilderStreamingURLCommandInput
  | CreateAppBlockCommandInput
  | CreateApplicationCommandInput
  | CreateDirectoryConfigCommandInput
  | CreateEntitlementCommandInput
  | CreateExportImageTaskCommandInput
  | CreateFleetCommandInput
  | CreateImageBuilderCommandInput
  | CreateImageBuilderStreamingURLCommandInput
  | CreateImportedImageCommandInput
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
  | DescribeAppLicenseUsageCommandInput
  | DescribeApplicationFleetAssociationsCommandInput
  | DescribeApplicationsCommandInput
  | DescribeDirectoryConfigsCommandInput
  | DescribeEntitlementsCommandInput
  | DescribeFleetsCommandInput
  | DescribeImageBuildersCommandInput
  | DescribeImagePermissionsCommandInput
  | DescribeImagesCommandInput
  | DescribeSessionsCommandInput
  | DescribeSoftwareAssociationsCommandInput
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
  | DisassociateSoftwareFromImageBuilderCommandInput
  | EnableUserCommandInput
  | ExpireSessionCommandInput
  | GetExportImageTaskCommandInput
  | ListAssociatedFleetsCommandInput
  | ListAssociatedStacksCommandInput
  | ListEntitledApplicationsCommandInput
  | ListExportImageTasksCommandInput
  | ListTagsForResourceCommandInput
  | StartAppBlockBuilderCommandInput
  | StartFleetCommandInput
  | StartImageBuilderCommandInput
  | StartSoftwareDeploymentToImageBuilderCommandInput
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
  | AssociateSoftwareToImageBuilderCommandOutput
  | BatchAssociateUserStackCommandOutput
  | BatchDisassociateUserStackCommandOutput
  | CopyImageCommandOutput
  | CreateAppBlockBuilderCommandOutput
  | CreateAppBlockBuilderStreamingURLCommandOutput
  | CreateAppBlockCommandOutput
  | CreateApplicationCommandOutput
  | CreateDirectoryConfigCommandOutput
  | CreateEntitlementCommandOutput
  | CreateExportImageTaskCommandOutput
  | CreateFleetCommandOutput
  | CreateImageBuilderCommandOutput
  | CreateImageBuilderStreamingURLCommandOutput
  | CreateImportedImageCommandOutput
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
  | DescribeAppLicenseUsageCommandOutput
  | DescribeApplicationFleetAssociationsCommandOutput
  | DescribeApplicationsCommandOutput
  | DescribeDirectoryConfigsCommandOutput
  | DescribeEntitlementsCommandOutput
  | DescribeFleetsCommandOutput
  | DescribeImageBuildersCommandOutput
  | DescribeImagePermissionsCommandOutput
  | DescribeImagesCommandOutput
  | DescribeSessionsCommandOutput
  | DescribeSoftwareAssociationsCommandOutput
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
  | DisassociateSoftwareFromImageBuilderCommandOutput
  | EnableUserCommandOutput
  | ExpireSessionCommandOutput
  | GetExportImageTaskCommandOutput
  | ListAssociatedFleetsCommandOutput
  | ListAssociatedStacksCommandOutput
  | ListEntitledApplicationsCommandOutput
  | ListExportImageTasksCommandOutput
  | ListTagsForResourceCommandOutput
  | StartAppBlockBuilderCommandOutput
  | StartFleetCommandOutput
  | StartImageBuilderCommandOutput
  | StartSoftwareDeploymentToImageBuilderCommandOutput
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
  defaultUserAgentProvider?: __Provider<__UserAgent>;

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
 * <fullname>Amazon WorkSpaces Applications</fullname>
 *          <p>This is the <i>Amazon WorkSpaces Applications API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in WorkSpaces Applications. WorkSpaces Applications is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. WorkSpaces Applications manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p>
 *          <note>
 *             <p>You can call the WorkSpaces Applications API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access WorkSpaces Applications API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon WorkSpaces Applications Administration Guide</i>.</p>
 *          </note>
 *          <p>To learn more about WorkSpaces Applications, see the following resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/appstream2">Amazon WorkSpaces Applications product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/appstream2">Amazon WorkSpaces Applications documentation</a>
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
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
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
