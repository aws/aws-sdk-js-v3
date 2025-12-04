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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultMTurkHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptQualificationRequestCommandInput,
  AcceptQualificationRequestCommandOutput,
} from "./commands/AcceptQualificationRequestCommand";
import { ApproveAssignmentCommandInput, ApproveAssignmentCommandOutput } from "./commands/ApproveAssignmentCommand";
import {
  AssociateQualificationWithWorkerCommandInput,
  AssociateQualificationWithWorkerCommandOutput,
} from "./commands/AssociateQualificationWithWorkerCommand";
import {
  CreateAdditionalAssignmentsForHITCommandInput,
  CreateAdditionalAssignmentsForHITCommandOutput,
} from "./commands/CreateAdditionalAssignmentsForHITCommand";
import { CreateHITCommandInput, CreateHITCommandOutput } from "./commands/CreateHITCommand";
import { CreateHITTypeCommandInput, CreateHITTypeCommandOutput } from "./commands/CreateHITTypeCommand";
import {
  CreateHITWithHITTypeCommandInput,
  CreateHITWithHITTypeCommandOutput,
} from "./commands/CreateHITWithHITTypeCommand";
import {
  CreateQualificationTypeCommandInput,
  CreateQualificationTypeCommandOutput,
} from "./commands/CreateQualificationTypeCommand";
import { CreateWorkerBlockCommandInput, CreateWorkerBlockCommandOutput } from "./commands/CreateWorkerBlockCommand";
import { DeleteHITCommandInput, DeleteHITCommandOutput } from "./commands/DeleteHITCommand";
import {
  DeleteQualificationTypeCommandInput,
  DeleteQualificationTypeCommandOutput,
} from "./commands/DeleteQualificationTypeCommand";
import { DeleteWorkerBlockCommandInput, DeleteWorkerBlockCommandOutput } from "./commands/DeleteWorkerBlockCommand";
import {
  DisassociateQualificationFromWorkerCommandInput,
  DisassociateQualificationFromWorkerCommandOutput,
} from "./commands/DisassociateQualificationFromWorkerCommand";
import { GetAccountBalanceCommandInput, GetAccountBalanceCommandOutput } from "./commands/GetAccountBalanceCommand";
import { GetAssignmentCommandInput, GetAssignmentCommandOutput } from "./commands/GetAssignmentCommand";
import { GetFileUploadURLCommandInput, GetFileUploadURLCommandOutput } from "./commands/GetFileUploadURLCommand";
import { GetHITCommandInput, GetHITCommandOutput } from "./commands/GetHITCommand";
import {
  GetQualificationScoreCommandInput,
  GetQualificationScoreCommandOutput,
} from "./commands/GetQualificationScoreCommand";
import {
  GetQualificationTypeCommandInput,
  GetQualificationTypeCommandOutput,
} from "./commands/GetQualificationTypeCommand";
import {
  ListAssignmentsForHITCommandInput,
  ListAssignmentsForHITCommandOutput,
} from "./commands/ListAssignmentsForHITCommand";
import { ListBonusPaymentsCommandInput, ListBonusPaymentsCommandOutput } from "./commands/ListBonusPaymentsCommand";
import { ListHITsCommandInput, ListHITsCommandOutput } from "./commands/ListHITsCommand";
import {
  ListHITsForQualificationTypeCommandInput,
  ListHITsForQualificationTypeCommandOutput,
} from "./commands/ListHITsForQualificationTypeCommand";
import {
  ListQualificationRequestsCommandInput,
  ListQualificationRequestsCommandOutput,
} from "./commands/ListQualificationRequestsCommand";
import {
  ListQualificationTypesCommandInput,
  ListQualificationTypesCommandOutput,
} from "./commands/ListQualificationTypesCommand";
import { ListReviewableHITsCommandInput, ListReviewableHITsCommandOutput } from "./commands/ListReviewableHITsCommand";
import {
  ListReviewPolicyResultsForHITCommandInput,
  ListReviewPolicyResultsForHITCommandOutput,
} from "./commands/ListReviewPolicyResultsForHITCommand";
import { ListWorkerBlocksCommandInput, ListWorkerBlocksCommandOutput } from "./commands/ListWorkerBlocksCommand";
import {
  ListWorkersWithQualificationTypeCommandInput,
  ListWorkersWithQualificationTypeCommandOutput,
} from "./commands/ListWorkersWithQualificationTypeCommand";
import { NotifyWorkersCommandInput, NotifyWorkersCommandOutput } from "./commands/NotifyWorkersCommand";
import { RejectAssignmentCommandInput, RejectAssignmentCommandOutput } from "./commands/RejectAssignmentCommand";
import {
  RejectQualificationRequestCommandInput,
  RejectQualificationRequestCommandOutput,
} from "./commands/RejectQualificationRequestCommand";
import { SendBonusCommandInput, SendBonusCommandOutput } from "./commands/SendBonusCommand";
import {
  SendTestEventNotificationCommandInput,
  SendTestEventNotificationCommandOutput,
} from "./commands/SendTestEventNotificationCommand";
import {
  UpdateExpirationForHITCommandInput,
  UpdateExpirationForHITCommandOutput,
} from "./commands/UpdateExpirationForHITCommand";
import {
  UpdateHITReviewStatusCommandInput,
  UpdateHITReviewStatusCommandOutput,
} from "./commands/UpdateHITReviewStatusCommand";
import { UpdateHITTypeOfHITCommandInput, UpdateHITTypeOfHITCommandOutput } from "./commands/UpdateHITTypeOfHITCommand";
import {
  UpdateNotificationSettingsCommandInput,
  UpdateNotificationSettingsCommandOutput,
} from "./commands/UpdateNotificationSettingsCommand";
import {
  UpdateQualificationTypeCommandInput,
  UpdateQualificationTypeCommandOutput,
} from "./commands/UpdateQualificationTypeCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptQualificationRequestCommandInput
  | ApproveAssignmentCommandInput
  | AssociateQualificationWithWorkerCommandInput
  | CreateAdditionalAssignmentsForHITCommandInput
  | CreateHITCommandInput
  | CreateHITTypeCommandInput
  | CreateHITWithHITTypeCommandInput
  | CreateQualificationTypeCommandInput
  | CreateWorkerBlockCommandInput
  | DeleteHITCommandInput
  | DeleteQualificationTypeCommandInput
  | DeleteWorkerBlockCommandInput
  | DisassociateQualificationFromWorkerCommandInput
  | GetAccountBalanceCommandInput
  | GetAssignmentCommandInput
  | GetFileUploadURLCommandInput
  | GetHITCommandInput
  | GetQualificationScoreCommandInput
  | GetQualificationTypeCommandInput
  | ListAssignmentsForHITCommandInput
  | ListBonusPaymentsCommandInput
  | ListHITsCommandInput
  | ListHITsForQualificationTypeCommandInput
  | ListQualificationRequestsCommandInput
  | ListQualificationTypesCommandInput
  | ListReviewPolicyResultsForHITCommandInput
  | ListReviewableHITsCommandInput
  | ListWorkerBlocksCommandInput
  | ListWorkersWithQualificationTypeCommandInput
  | NotifyWorkersCommandInput
  | RejectAssignmentCommandInput
  | RejectQualificationRequestCommandInput
  | SendBonusCommandInput
  | SendTestEventNotificationCommandInput
  | UpdateExpirationForHITCommandInput
  | UpdateHITReviewStatusCommandInput
  | UpdateHITTypeOfHITCommandInput
  | UpdateNotificationSettingsCommandInput
  | UpdateQualificationTypeCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptQualificationRequestCommandOutput
  | ApproveAssignmentCommandOutput
  | AssociateQualificationWithWorkerCommandOutput
  | CreateAdditionalAssignmentsForHITCommandOutput
  | CreateHITCommandOutput
  | CreateHITTypeCommandOutput
  | CreateHITWithHITTypeCommandOutput
  | CreateQualificationTypeCommandOutput
  | CreateWorkerBlockCommandOutput
  | DeleteHITCommandOutput
  | DeleteQualificationTypeCommandOutput
  | DeleteWorkerBlockCommandOutput
  | DisassociateQualificationFromWorkerCommandOutput
  | GetAccountBalanceCommandOutput
  | GetAssignmentCommandOutput
  | GetFileUploadURLCommandOutput
  | GetHITCommandOutput
  | GetQualificationScoreCommandOutput
  | GetQualificationTypeCommandOutput
  | ListAssignmentsForHITCommandOutput
  | ListBonusPaymentsCommandOutput
  | ListHITsCommandOutput
  | ListHITsForQualificationTypeCommandOutput
  | ListQualificationRequestsCommandOutput
  | ListQualificationTypesCommandOutput
  | ListReviewPolicyResultsForHITCommandOutput
  | ListReviewableHITsCommandOutput
  | ListWorkerBlocksCommandOutput
  | ListWorkersWithQualificationTypeCommandOutput
  | NotifyWorkersCommandOutput
  | RejectAssignmentCommandOutput
  | RejectQualificationRequestCommandOutput
  | SendBonusCommandOutput
  | SendTestEventNotificationCommandOutput
  | UpdateExpirationForHITCommandOutput
  | UpdateHITReviewStatusCommandOutput
  | UpdateHITTypeOfHITCommandOutput
  | UpdateNotificationSettingsCommandOutput
  | UpdateQualificationTypeCommandOutput;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type MTurkClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of MTurkClient class constructor that set the region, credentials and other options.
 */
export interface MTurkClientConfig extends MTurkClientConfigType {}

/**
 * @public
 */
export type MTurkClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of MTurkClient class. This is resolved and normalized from the {@link MTurkClientConfig | constructor configuration interface}.
 */
export interface MTurkClientResolvedConfig extends MTurkClientResolvedConfigType {}

/**
 * <fullname>Amazon Mechanical Turk API Reference</fullname>
 * @public
 */
export class MTurkClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MTurkClientResolvedConfig
> {
  /**
   * The resolved configuration of MTurkClient class. This is resolved and normalized from the {@link MTurkClientConfig | constructor configuration interface}.
   */
  readonly config: MTurkClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<MTurkClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultMTurkHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: MTurkClientResolvedConfig) =>
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
