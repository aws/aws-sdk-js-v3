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
  defaultKMSHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CancelKeyDeletionCommandInput,
  CancelKeyDeletionCommandOutput,
} from "./commands/CancelKeyDeletionCommand";
import type {
  ConnectCustomKeyStoreCommandInput,
  ConnectCustomKeyStoreCommandOutput,
} from "./commands/ConnectCustomKeyStoreCommand";
import type { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import type {
  CreateCustomKeyStoreCommandInput,
  CreateCustomKeyStoreCommandOutput,
} from "./commands/CreateCustomKeyStoreCommand";
import type { CreateGrantCommandInput, CreateGrantCommandOutput } from "./commands/CreateGrantCommand";
import type { CreateKeyCommandInput, CreateKeyCommandOutput } from "./commands/CreateKeyCommand";
import type { DecryptCommandInput, DecryptCommandOutput } from "./commands/DecryptCommand";
import type { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import type {
  DeleteCustomKeyStoreCommandInput,
  DeleteCustomKeyStoreCommandOutput,
} from "./commands/DeleteCustomKeyStoreCommand";
import type {
  DeleteImportedKeyMaterialCommandInput,
  DeleteImportedKeyMaterialCommandOutput,
} from "./commands/DeleteImportedKeyMaterialCommand";
import type {
  DeriveSharedSecretCommandInput,
  DeriveSharedSecretCommandOutput,
} from "./commands/DeriveSharedSecretCommand";
import type {
  DescribeCustomKeyStoresCommandInput,
  DescribeCustomKeyStoresCommandOutput,
} from "./commands/DescribeCustomKeyStoresCommand";
import type { DescribeKeyCommandInput, DescribeKeyCommandOutput } from "./commands/DescribeKeyCommand";
import type { DisableKeyCommandInput, DisableKeyCommandOutput } from "./commands/DisableKeyCommand";
import type {
  DisableKeyRotationCommandInput,
  DisableKeyRotationCommandOutput,
} from "./commands/DisableKeyRotationCommand";
import type {
  DisconnectCustomKeyStoreCommandInput,
  DisconnectCustomKeyStoreCommandOutput,
} from "./commands/DisconnectCustomKeyStoreCommand";
import type { EnableKeyCommandInput, EnableKeyCommandOutput } from "./commands/EnableKeyCommand";
import type {
  EnableKeyRotationCommandInput,
  EnableKeyRotationCommandOutput,
} from "./commands/EnableKeyRotationCommand";
import type { EncryptCommandInput, EncryptCommandOutput } from "./commands/EncryptCommand";
import type { GenerateDataKeyCommandInput, GenerateDataKeyCommandOutput } from "./commands/GenerateDataKeyCommand";
import type {
  GenerateDataKeyPairCommandInput,
  GenerateDataKeyPairCommandOutput,
} from "./commands/GenerateDataKeyPairCommand";
import type {
  GenerateDataKeyPairWithoutPlaintextCommandInput,
  GenerateDataKeyPairWithoutPlaintextCommandOutput,
} from "./commands/GenerateDataKeyPairWithoutPlaintextCommand";
import type {
  GenerateDataKeyWithoutPlaintextCommandInput,
  GenerateDataKeyWithoutPlaintextCommandOutput,
} from "./commands/GenerateDataKeyWithoutPlaintextCommand";
import type { GenerateMacCommandInput, GenerateMacCommandOutput } from "./commands/GenerateMacCommand";
import type { GenerateRandomCommandInput, GenerateRandomCommandOutput } from "./commands/GenerateRandomCommand";
import type { GetKeyPolicyCommandInput, GetKeyPolicyCommandOutput } from "./commands/GetKeyPolicyCommand";
import type {
  GetKeyRotationStatusCommandInput,
  GetKeyRotationStatusCommandOutput,
} from "./commands/GetKeyRotationStatusCommand";
import type {
  GetParametersForImportCommandInput,
  GetParametersForImportCommandOutput,
} from "./commands/GetParametersForImportCommand";
import type { GetPublicKeyCommandInput, GetPublicKeyCommandOutput } from "./commands/GetPublicKeyCommand";
import type {
  ImportKeyMaterialCommandInput,
  ImportKeyMaterialCommandOutput,
} from "./commands/ImportKeyMaterialCommand";
import type { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import type { ListGrantsCommandInput, ListGrantsCommandOutput } from "./commands/ListGrantsCommand";
import type { ListKeyPoliciesCommandInput, ListKeyPoliciesCommandOutput } from "./commands/ListKeyPoliciesCommand";
import type { ListKeyRotationsCommandInput, ListKeyRotationsCommandOutput } from "./commands/ListKeyRotationsCommand";
import type { ListKeysCommandInput, ListKeysCommandOutput } from "./commands/ListKeysCommand";
import type { ListResourceTagsCommandInput, ListResourceTagsCommandOutput } from "./commands/ListResourceTagsCommand";
import type {
  ListRetirableGrantsCommandInput,
  ListRetirableGrantsCommandOutput,
} from "./commands/ListRetirableGrantsCommand";
import type { PutKeyPolicyCommandInput, PutKeyPolicyCommandOutput } from "./commands/PutKeyPolicyCommand";
import type { ReEncryptCommandInput, ReEncryptCommandOutput } from "./commands/ReEncryptCommand";
import type { ReplicateKeyCommandInput, ReplicateKeyCommandOutput } from "./commands/ReplicateKeyCommand";
import type { RetireGrantCommandInput, RetireGrantCommandOutput } from "./commands/RetireGrantCommand";
import type { RevokeGrantCommandInput, RevokeGrantCommandOutput } from "./commands/RevokeGrantCommand";
import type {
  RotateKeyOnDemandCommandInput,
  RotateKeyOnDemandCommandOutput,
} from "./commands/RotateKeyOnDemandCommand";
import type {
  ScheduleKeyDeletionCommandInput,
  ScheduleKeyDeletionCommandOutput,
} from "./commands/ScheduleKeyDeletionCommand";
import type { SignCommandInput, SignCommandOutput } from "./commands/SignCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import type {
  UpdateCustomKeyStoreCommandInput,
  UpdateCustomKeyStoreCommandOutput,
} from "./commands/UpdateCustomKeyStoreCommand";
import type {
  UpdateKeyDescriptionCommandInput,
  UpdateKeyDescriptionCommandOutput,
} from "./commands/UpdateKeyDescriptionCommand";
import type {
  UpdatePrimaryRegionCommandInput,
  UpdatePrimaryRegionCommandOutput,
} from "./commands/UpdatePrimaryRegionCommand";
import type { VerifyCommandInput, VerifyCommandOutput } from "./commands/VerifyCommand";
import type { VerifyMacCommandInput, VerifyMacCommandOutput } from "./commands/VerifyMacCommand";
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
  | CancelKeyDeletionCommandInput
  | ConnectCustomKeyStoreCommandInput
  | CreateAliasCommandInput
  | CreateCustomKeyStoreCommandInput
  | CreateGrantCommandInput
  | CreateKeyCommandInput
  | DecryptCommandInput
  | DeleteAliasCommandInput
  | DeleteCustomKeyStoreCommandInput
  | DeleteImportedKeyMaterialCommandInput
  | DeriveSharedSecretCommandInput
  | DescribeCustomKeyStoresCommandInput
  | DescribeKeyCommandInput
  | DisableKeyCommandInput
  | DisableKeyRotationCommandInput
  | DisconnectCustomKeyStoreCommandInput
  | EnableKeyCommandInput
  | EnableKeyRotationCommandInput
  | EncryptCommandInput
  | GenerateDataKeyCommandInput
  | GenerateDataKeyPairCommandInput
  | GenerateDataKeyPairWithoutPlaintextCommandInput
  | GenerateDataKeyWithoutPlaintextCommandInput
  | GenerateMacCommandInput
  | GenerateRandomCommandInput
  | GetKeyPolicyCommandInput
  | GetKeyRotationStatusCommandInput
  | GetParametersForImportCommandInput
  | GetPublicKeyCommandInput
  | ImportKeyMaterialCommandInput
  | ListAliasesCommandInput
  | ListGrantsCommandInput
  | ListKeyPoliciesCommandInput
  | ListKeyRotationsCommandInput
  | ListKeysCommandInput
  | ListResourceTagsCommandInput
  | ListRetirableGrantsCommandInput
  | PutKeyPolicyCommandInput
  | ReEncryptCommandInput
  | ReplicateKeyCommandInput
  | RetireGrantCommandInput
  | RevokeGrantCommandInput
  | RotateKeyOnDemandCommandInput
  | ScheduleKeyDeletionCommandInput
  | SignCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAliasCommandInput
  | UpdateCustomKeyStoreCommandInput
  | UpdateKeyDescriptionCommandInput
  | UpdatePrimaryRegionCommandInput
  | VerifyCommandInput
  | VerifyMacCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CancelKeyDeletionCommandOutput
  | ConnectCustomKeyStoreCommandOutput
  | CreateAliasCommandOutput
  | CreateCustomKeyStoreCommandOutput
  | CreateGrantCommandOutput
  | CreateKeyCommandOutput
  | DecryptCommandOutput
  | DeleteAliasCommandOutput
  | DeleteCustomKeyStoreCommandOutput
  | DeleteImportedKeyMaterialCommandOutput
  | DeriveSharedSecretCommandOutput
  | DescribeCustomKeyStoresCommandOutput
  | DescribeKeyCommandOutput
  | DisableKeyCommandOutput
  | DisableKeyRotationCommandOutput
  | DisconnectCustomKeyStoreCommandOutput
  | EnableKeyCommandOutput
  | EnableKeyRotationCommandOutput
  | EncryptCommandOutput
  | GenerateDataKeyCommandOutput
  | GenerateDataKeyPairCommandOutput
  | GenerateDataKeyPairWithoutPlaintextCommandOutput
  | GenerateDataKeyWithoutPlaintextCommandOutput
  | GenerateMacCommandOutput
  | GenerateRandomCommandOutput
  | GetKeyPolicyCommandOutput
  | GetKeyRotationStatusCommandOutput
  | GetParametersForImportCommandOutput
  | GetPublicKeyCommandOutput
  | ImportKeyMaterialCommandOutput
  | ListAliasesCommandOutput
  | ListGrantsCommandOutput
  | ListKeyPoliciesCommandOutput
  | ListKeyRotationsCommandOutput
  | ListKeysCommandOutput
  | ListResourceTagsCommandOutput
  | ListRetirableGrantsCommandOutput
  | PutKeyPolicyCommandOutput
  | ReEncryptCommandOutput
  | ReplicateKeyCommandOutput
  | RetireGrantCommandOutput
  | RevokeGrantCommandOutput
  | RotateKeyOnDemandCommandOutput
  | ScheduleKeyDeletionCommandOutput
  | SignCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAliasCommandOutput
  | UpdateCustomKeyStoreCommandOutput
  | UpdateKeyDescriptionCommandOutput
  | UpdatePrimaryRegionCommandOutput
  | VerifyCommandOutput
  | VerifyMacCommandOutput;

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
export type KMSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of KMSClient class constructor that set the region, credentials and other options.
 */
export interface KMSClientConfig extends KMSClientConfigType {}

/**
 * @public
 */
export type KMSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of KMSClient class. This is resolved and normalized from the {@link KMSClientConfig | constructor configuration interface}.
 */
export interface KMSClientResolvedConfig extends KMSClientResolvedConfigType {}

/**
 * <fullname>Key Management Service</fullname>
 *          <p>Key Management Service (KMS) is an encryption and key management web service. This guide describes
 *       the KMS operations that you can call programmatically. For general information about KMS,
 *       see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/">
 *                <i>Key Management Service Developer Guide</i>
 *             </a>.</p>
 *          <note>
 *             <p>KMS has replaced the term <i>customer master key (CMK)</i> with <i>Key Management Service key</i>
 *   and <i>KMS key</i>. The concept has not changed. To prevent breaking changes, KMS is keeping some variations of this term.</p>
 *             <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Rust, Python, Ruby, .Net, macOS, Android, etc.). The SDKs
 *         provide a convenient way to create programmatic access to KMS and other Amazon Web Services services.
 *         For example, the SDKs take care of tasks such as signing requests (see below), managing
 *         errors, and retrying requests automatically. For more information about the Amazon Web Services SDKs,
 *         including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools
 *           for Amazon Web Services</a>.</p>
 *          </note>
 *          <p>We recommend that you use the Amazon Web Services SDKs to make programmatic API calls to KMS.</p>
 *          <p>If you need to use FIPS 140-2 validated cryptographic modules when communicating with
 *       Amazon Web Services, use one of the FIPS endpoints in your preferred Amazon Web Services Region. If you need communicate
 *       over IPv6, use the dual-stack endpoint in your preferred Amazon Web Services Region. For more information
 *       see <a href="https://docs.aws.amazon.com/general/latest/gr/kms.html#kms_region">Service
 *         endpoints</a> in the Key Management Service topic of the <i>Amazon Web Services General Reference</i> and <a href="https://docs.aws.amazon.com/kms/latest/developerguide/ipv6-kms.html">Dual-stack endpoint
 *         support</a> in the KMS Developer Guide.</p>
 *          <p>All KMS API calls must be signed and be transmitted using Transport Layer Security
 *       (TLS). KMS recommends you always use the latest supported TLS version. Clients must also
 *       support cipher suites with Perfect Forward Secrecy (PFS) such as Ephemeral Diffie-Hellman
 *       (DHE) or Elliptic Curve Ephemeral Diffie-Hellman (ECDHE). Most modern systems such as Java 7
 *       and later support these modes.</p>
 *          <p>
 *             <b>Signing Requests</b>
 *          </p>
 *          <p>Requests must be signed using an access key ID and a secret access key. We strongly
 *       recommend that you do not use your Amazon Web Services account root access key ID and secret access key for
 *       everyday work. You can use the access key ID and secret access key for an IAM user or you
 *       can use the Security Token Service (STS) to generate temporary security credentials and use those to sign
 *       requests. </p>
 *          <p>All KMS requests must be signed with <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4</a>.</p>
 *          <p>
 *             <b>Logging API Requests</b>
 *          </p>
 *          <p>KMS supports CloudTrail, a service that logs Amazon Web Services API calls and related events for your
 *       Amazon Web Services account and delivers them to an Amazon S3 bucket that you specify. By using the
 *       information collected by CloudTrail, you can determine what requests were made to KMS, who made
 *       the request, when it was made, and so on. To learn more about CloudTrail, including how to turn it
 *       on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/">CloudTrail User Guide</a>.</p>
 *          <p>
 *             <b>Additional Resources</b>
 *          </p>
 *          <p>For more information about credentials and request signing, see the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html">Amazon Web Services
 *             Security Credentials</a> - This topic provides general information about the types
 *           of credentials used to access Amazon Web Services.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html">Temporary
 *             Security Credentials</a> - This section of the <i>IAM User Guide</i>
 *           describes how to create and use temporary security credentials.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version
 *             4 Signing Process</a> - This set of topics walks you through the process of signing
 *           a request using an access key ID and a secret access key.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Commonly Used API Operations</b>
 *          </p>
 *          <p>Of the API operations discussed in this guide, the following will prove the most useful
 *       for most applications. You will likely perform operations other than these, such as creating
 *       keys and assigning policies, by using the console.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Encrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Decrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class KMSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KMSClientResolvedConfig
> {
  /**
   * The resolved configuration of KMSClient class. This is resolved and normalized from the {@link KMSClientConfig | constructor configuration interface}.
   */
  readonly config: KMSClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<KMSClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultKMSHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: KMSClientResolvedConfig) =>
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
