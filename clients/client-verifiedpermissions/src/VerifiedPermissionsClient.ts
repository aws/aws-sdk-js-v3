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
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
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
} from "@smithy/types";

import {
  CreateIdentitySourceCommandInput,
  CreateIdentitySourceCommandOutput,
} from "./commands/CreateIdentitySourceCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "./commands/CreatePolicyCommand";
import { CreatePolicyStoreCommandInput, CreatePolicyStoreCommandOutput } from "./commands/CreatePolicyStoreCommand";
import {
  CreatePolicyTemplateCommandInput,
  CreatePolicyTemplateCommandOutput,
} from "./commands/CreatePolicyTemplateCommand";
import {
  DeleteIdentitySourceCommandInput,
  DeleteIdentitySourceCommandOutput,
} from "./commands/DeleteIdentitySourceCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import { DeletePolicyStoreCommandInput, DeletePolicyStoreCommandOutput } from "./commands/DeletePolicyStoreCommand";
import {
  DeletePolicyTemplateCommandInput,
  DeletePolicyTemplateCommandOutput,
} from "./commands/DeletePolicyTemplateCommand";
import { GetIdentitySourceCommandInput, GetIdentitySourceCommandOutput } from "./commands/GetIdentitySourceCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import { GetPolicyStoreCommandInput, GetPolicyStoreCommandOutput } from "./commands/GetPolicyStoreCommand";
import { GetPolicyTemplateCommandInput, GetPolicyTemplateCommandOutput } from "./commands/GetPolicyTemplateCommand";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "./commands/GetSchemaCommand";
import { IsAuthorizedCommandInput, IsAuthorizedCommandOutput } from "./commands/IsAuthorizedCommand";
import {
  IsAuthorizedWithTokenCommandInput,
  IsAuthorizedWithTokenCommandOutput,
} from "./commands/IsAuthorizedWithTokenCommand";
import {
  ListIdentitySourcesCommandInput,
  ListIdentitySourcesCommandOutput,
} from "./commands/ListIdentitySourcesCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "./commands/ListPoliciesCommand";
import { ListPolicyStoresCommandInput, ListPolicyStoresCommandOutput } from "./commands/ListPolicyStoresCommand";
import {
  ListPolicyTemplatesCommandInput,
  ListPolicyTemplatesCommandOutput,
} from "./commands/ListPolicyTemplatesCommand";
import { PutSchemaCommandInput, PutSchemaCommandOutput } from "./commands/PutSchemaCommand";
import {
  UpdateIdentitySourceCommandInput,
  UpdateIdentitySourceCommandOutput,
} from "./commands/UpdateIdentitySourceCommand";
import { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "./commands/UpdatePolicyCommand";
import { UpdatePolicyStoreCommandInput, UpdatePolicyStoreCommandOutput } from "./commands/UpdatePolicyStoreCommand";
import {
  UpdatePolicyTemplateCommandInput,
  UpdatePolicyTemplateCommandOutput,
} from "./commands/UpdatePolicyTemplateCommand";
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
  | CreateIdentitySourceCommandInput
  | CreatePolicyCommandInput
  | CreatePolicyStoreCommandInput
  | CreatePolicyTemplateCommandInput
  | DeleteIdentitySourceCommandInput
  | DeletePolicyCommandInput
  | DeletePolicyStoreCommandInput
  | DeletePolicyTemplateCommandInput
  | GetIdentitySourceCommandInput
  | GetPolicyCommandInput
  | GetPolicyStoreCommandInput
  | GetPolicyTemplateCommandInput
  | GetSchemaCommandInput
  | IsAuthorizedCommandInput
  | IsAuthorizedWithTokenCommandInput
  | ListIdentitySourcesCommandInput
  | ListPoliciesCommandInput
  | ListPolicyStoresCommandInput
  | ListPolicyTemplatesCommandInput
  | PutSchemaCommandInput
  | UpdateIdentitySourceCommandInput
  | UpdatePolicyCommandInput
  | UpdatePolicyStoreCommandInput
  | UpdatePolicyTemplateCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateIdentitySourceCommandOutput
  | CreatePolicyCommandOutput
  | CreatePolicyStoreCommandOutput
  | CreatePolicyTemplateCommandOutput
  | DeleteIdentitySourceCommandOutput
  | DeletePolicyCommandOutput
  | DeletePolicyStoreCommandOutput
  | DeletePolicyTemplateCommandOutput
  | GetIdentitySourceCommandOutput
  | GetPolicyCommandOutput
  | GetPolicyStoreCommandOutput
  | GetPolicyTemplateCommandOutput
  | GetSchemaCommandOutput
  | IsAuthorizedCommandOutput
  | IsAuthorizedWithTokenCommandOutput
  | ListIdentitySourcesCommandOutput
  | ListPoliciesCommandOutput
  | ListPolicyStoresCommandOutput
  | ListPolicyTemplatesCommandOutput
  | PutSchemaCommandOutput
  | UpdateIdentitySourceCommandOutput
  | UpdatePolicyCommandOutput
  | UpdatePolicyStoreCommandOutput
  | UpdatePolicyTemplateCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
export type VerifiedPermissionsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of VerifiedPermissionsClient class constructor that set the region, credentials and other options.
 */
export interface VerifiedPermissionsClientConfig extends VerifiedPermissionsClientConfigType {}

/**
 * @public
 */
export type VerifiedPermissionsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of VerifiedPermissionsClient class. This is resolved and normalized from the {@link VerifiedPermissionsClientConfig | constructor configuration interface}.
 */
export interface VerifiedPermissionsClientResolvedConfig extends VerifiedPermissionsClientResolvedConfigType {}

/**
 * @public
 * <p>Amazon Verified Permissions is a permissions management service from Amazon Web Services. You can use Verified Permissions to manage
 *             permissions for your application, and authorize user access based on those permissions.
 *             Using Verified Permissions, application developers can grant access based on information about the
 *             users, resources, and requested actions. You can also evaluate additional information
 *             like group membership, attributes of the resources, and session context, such as time of
 *             request and IP addresses. Verified Permissions manages these permissions by letting you create and
 *             store authorization policies for your applications, such as consumer-facing web sites
 *             and enterprise business systems.</p>
 *          <p>Verified Permissions uses Cedar as the policy language to express your permission requirements.
 *             Cedar supports both role-based access control (RBAC) and attribute-based access
 *             control (ABAC) authorization models.</p>
 *          <p>For more information about configuring, administering, and using Amazon Verified Permissions in your
 *             applications, see the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/">Amazon Verified Permissions User Guide</a>.</p>
 *          <p>For more information about the Cedar policy language, see the <a href="https://docs.cedarpolicy.com/">Cedar Policy Language Guide</a>.</p>
 *          <important>
 *             <p>When you write Cedar policies that reference principals, resources and actions,
 *                 you can define the unique identifiers used for each of those elements. We strongly
 *                 recommend that you follow these best practices:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <b>Use values like universally unique identifiers
 *                             (UUIDs) for all principal and resource identifiers.</b>
 *                   </p>
 *                   <p>For example, if user <code>jane</code> leaves the company, and you later
 *                         let someone else use the name <code>jane</code>, then that new user
 *                         automatically gets access to everything granted by policies that still
 *                         reference <code>User::"jane"</code>. Cedar can’t distinguish between the
 *                         new user and the old. This applies to both principal and resource
 *                         identifiers. Always use identifiers that are guaranteed unique and never
 *                         reused to ensure that you don’t unintentionally grant access because of the
 *                         presence of an old identifier in a policy.</p>
 *                   <p>Where you use a UUID for an entity, we recommend that you follow it with
 *                         the // comment specifier and the ‘friendly’ name of your entity. This helps
 *                         to make your policies easier to understand. For example: principal ==
 *                         User::"a1b2c3d4-e5f6-a1b2-c3d4-EXAMPLE11111", // alice</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>Do not include personally identifying, confidential,
 *                             or sensitive information as part of the unique identifier for your
 *                             principals or resources.</b> These identifiers are included in
 *                         log entries shared in CloudTrail trails.</p>
 *                </li>
 *             </ul>
 *          </important>
 *          <p>Several operations return structures that appear similar, but have different purposes.
 *             As new functionality is added to the product, the structure used in a parameter of one
 *             operation might need to change in a way that wouldn't make sense for the same parameter
 *             in a different operation. To help you understand the purpose of each, the following
 *             naming convention is used for the structures:</p>
 *          <ul>
 *             <li>
 *                <p>Parameter type structures that end in <code>Detail</code> are used in
 *                         <code>Get</code> operations.</p>
 *             </li>
 *             <li>
 *                <p>Parameter type structures that end in <code>Item</code> are used in
 *                         <code>List</code> operations.</p>
 *             </li>
 *             <li>
 *                <p>Parameter type structures that use neither suffix are used in the mutating
 *                     (create and update) operations.</p>
 *             </li>
 *          </ul>
 */
export class VerifiedPermissionsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  VerifiedPermissionsClientResolvedConfig
> {
  /**
   * The resolved configuration of VerifiedPermissionsClient class. This is resolved and normalized from the {@link VerifiedPermissionsClientConfig | constructor configuration interface}.
   */
  readonly config: VerifiedPermissionsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<VerifiedPermissionsClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
