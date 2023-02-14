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

import {
  AssociateOriginationIdentityCommandInput,
  AssociateOriginationIdentityCommandOutput,
} from "./commands/AssociateOriginationIdentityCommand";
import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "./commands/CreateConfigurationSetCommand";
import {
  CreateEventDestinationCommandInput,
  CreateEventDestinationCommandOutput,
} from "./commands/CreateEventDestinationCommand";
import { CreateOptOutListCommandInput, CreateOptOutListCommandOutput } from "./commands/CreateOptOutListCommand";
import { CreatePoolCommandInput, CreatePoolCommandOutput } from "./commands/CreatePoolCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "./commands/DeleteConfigurationSetCommand";
import {
  DeleteDefaultMessageTypeCommandInput,
  DeleteDefaultMessageTypeCommandOutput,
} from "./commands/DeleteDefaultMessageTypeCommand";
import {
  DeleteDefaultSenderIdCommandInput,
  DeleteDefaultSenderIdCommandOutput,
} from "./commands/DeleteDefaultSenderIdCommand";
import {
  DeleteEventDestinationCommandInput,
  DeleteEventDestinationCommandOutput,
} from "./commands/DeleteEventDestinationCommand";
import { DeleteKeywordCommandInput, DeleteKeywordCommandOutput } from "./commands/DeleteKeywordCommand";
import {
  DeleteOptedOutNumberCommandInput,
  DeleteOptedOutNumberCommandOutput,
} from "./commands/DeleteOptedOutNumberCommand";
import { DeleteOptOutListCommandInput, DeleteOptOutListCommandOutput } from "./commands/DeleteOptOutListCommand";
import { DeletePoolCommandInput, DeletePoolCommandOutput } from "./commands/DeletePoolCommand";
import {
  DeleteTextMessageSpendLimitOverrideCommandInput,
  DeleteTextMessageSpendLimitOverrideCommandOutput,
} from "./commands/DeleteTextMessageSpendLimitOverrideCommand";
import {
  DeleteVoiceMessageSpendLimitOverrideCommandInput,
  DeleteVoiceMessageSpendLimitOverrideCommandOutput,
} from "./commands/DeleteVoiceMessageSpendLimitOverrideCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeConfigurationSetsCommandInput,
  DescribeConfigurationSetsCommandOutput,
} from "./commands/DescribeConfigurationSetsCommand";
import { DescribeKeywordsCommandInput, DescribeKeywordsCommandOutput } from "./commands/DescribeKeywordsCommand";
import {
  DescribeOptedOutNumbersCommandInput,
  DescribeOptedOutNumbersCommandOutput,
} from "./commands/DescribeOptedOutNumbersCommand";
import {
  DescribeOptOutListsCommandInput,
  DescribeOptOutListsCommandOutput,
} from "./commands/DescribeOptOutListsCommand";
import {
  DescribePhoneNumbersCommandInput,
  DescribePhoneNumbersCommandOutput,
} from "./commands/DescribePhoneNumbersCommand";
import { DescribePoolsCommandInput, DescribePoolsCommandOutput } from "./commands/DescribePoolsCommand";
import { DescribeSenderIdsCommandInput, DescribeSenderIdsCommandOutput } from "./commands/DescribeSenderIdsCommand";
import {
  DescribeSpendLimitsCommandInput,
  DescribeSpendLimitsCommandOutput,
} from "./commands/DescribeSpendLimitsCommand";
import {
  DisassociateOriginationIdentityCommandInput,
  DisassociateOriginationIdentityCommandOutput,
} from "./commands/DisassociateOriginationIdentityCommand";
import {
  ListPoolOriginationIdentitiesCommandInput,
  ListPoolOriginationIdentitiesCommandOutput,
} from "./commands/ListPoolOriginationIdentitiesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutKeywordCommandInput, PutKeywordCommandOutput } from "./commands/PutKeywordCommand";
import { PutOptedOutNumberCommandInput, PutOptedOutNumberCommandOutput } from "./commands/PutOptedOutNumberCommand";
import { ReleasePhoneNumberCommandInput, ReleasePhoneNumberCommandOutput } from "./commands/ReleasePhoneNumberCommand";
import { RequestPhoneNumberCommandInput, RequestPhoneNumberCommandOutput } from "./commands/RequestPhoneNumberCommand";
import { SendTextMessageCommandInput, SendTextMessageCommandOutput } from "./commands/SendTextMessageCommand";
import { SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput } from "./commands/SendVoiceMessageCommand";
import {
  SetDefaultMessageTypeCommandInput,
  SetDefaultMessageTypeCommandOutput,
} from "./commands/SetDefaultMessageTypeCommand";
import { SetDefaultSenderIdCommandInput, SetDefaultSenderIdCommandOutput } from "./commands/SetDefaultSenderIdCommand";
import {
  SetTextMessageSpendLimitOverrideCommandInput,
  SetTextMessageSpendLimitOverrideCommandOutput,
} from "./commands/SetTextMessageSpendLimitOverrideCommand";
import {
  SetVoiceMessageSpendLimitOverrideCommandInput,
  SetVoiceMessageSpendLimitOverrideCommandOutput,
} from "./commands/SetVoiceMessageSpendLimitOverrideCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateEventDestinationCommandInput,
  UpdateEventDestinationCommandOutput,
} from "./commands/UpdateEventDestinationCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "./commands/UpdatePhoneNumberCommand";
import { UpdatePoolCommandInput, UpdatePoolCommandOutput } from "./commands/UpdatePoolCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateOriginationIdentityCommandInput
  | CreateConfigurationSetCommandInput
  | CreateEventDestinationCommandInput
  | CreateOptOutListCommandInput
  | CreatePoolCommandInput
  | DeleteConfigurationSetCommandInput
  | DeleteDefaultMessageTypeCommandInput
  | DeleteDefaultSenderIdCommandInput
  | DeleteEventDestinationCommandInput
  | DeleteKeywordCommandInput
  | DeleteOptOutListCommandInput
  | DeleteOptedOutNumberCommandInput
  | DeletePoolCommandInput
  | DeleteTextMessageSpendLimitOverrideCommandInput
  | DeleteVoiceMessageSpendLimitOverrideCommandInput
  | DescribeAccountAttributesCommandInput
  | DescribeAccountLimitsCommandInput
  | DescribeConfigurationSetsCommandInput
  | DescribeKeywordsCommandInput
  | DescribeOptOutListsCommandInput
  | DescribeOptedOutNumbersCommandInput
  | DescribePhoneNumbersCommandInput
  | DescribePoolsCommandInput
  | DescribeSenderIdsCommandInput
  | DescribeSpendLimitsCommandInput
  | DisassociateOriginationIdentityCommandInput
  | ListPoolOriginationIdentitiesCommandInput
  | ListTagsForResourceCommandInput
  | PutKeywordCommandInput
  | PutOptedOutNumberCommandInput
  | ReleasePhoneNumberCommandInput
  | RequestPhoneNumberCommandInput
  | SendTextMessageCommandInput
  | SendVoiceMessageCommandInput
  | SetDefaultMessageTypeCommandInput
  | SetDefaultSenderIdCommandInput
  | SetTextMessageSpendLimitOverrideCommandInput
  | SetVoiceMessageSpendLimitOverrideCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateEventDestinationCommandInput
  | UpdatePhoneNumberCommandInput
  | UpdatePoolCommandInput;

export type ServiceOutputTypes =
  | AssociateOriginationIdentityCommandOutput
  | CreateConfigurationSetCommandOutput
  | CreateEventDestinationCommandOutput
  | CreateOptOutListCommandOutput
  | CreatePoolCommandOutput
  | DeleteConfigurationSetCommandOutput
  | DeleteDefaultMessageTypeCommandOutput
  | DeleteDefaultSenderIdCommandOutput
  | DeleteEventDestinationCommandOutput
  | DeleteKeywordCommandOutput
  | DeleteOptOutListCommandOutput
  | DeleteOptedOutNumberCommandOutput
  | DeletePoolCommandOutput
  | DeleteTextMessageSpendLimitOverrideCommandOutput
  | DeleteVoiceMessageSpendLimitOverrideCommandOutput
  | DescribeAccountAttributesCommandOutput
  | DescribeAccountLimitsCommandOutput
  | DescribeConfigurationSetsCommandOutput
  | DescribeKeywordsCommandOutput
  | DescribeOptOutListsCommandOutput
  | DescribeOptedOutNumbersCommandOutput
  | DescribePhoneNumbersCommandOutput
  | DescribePoolsCommandOutput
  | DescribeSenderIdsCommandOutput
  | DescribeSpendLimitsCommandOutput
  | DisassociateOriginationIdentityCommandOutput
  | ListPoolOriginationIdentitiesCommandOutput
  | ListTagsForResourceCommandOutput
  | PutKeywordCommandOutput
  | PutOptedOutNumberCommandOutput
  | ReleasePhoneNumberCommandOutput
  | RequestPhoneNumberCommandOutput
  | SendTextMessageCommandOutput
  | SendVoiceMessageCommandOutput
  | SetDefaultMessageTypeCommandOutput
  | SetDefaultSenderIdCommandOutput
  | SetTextMessageSpendLimitOverrideCommandOutput
  | SetVoiceMessageSpendLimitOverrideCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateEventDestinationCommandOutput
  | UpdatePhoneNumberCommandOutput
  | UpdatePoolCommandOutput;

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

type PinpointSMSVoiceV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of PinpointSMSVoiceV2Client class constructor that set the region, credentials and other options.
 */
export interface PinpointSMSVoiceV2ClientConfig extends PinpointSMSVoiceV2ClientConfigType {}

type PinpointSMSVoiceV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of PinpointSMSVoiceV2Client class. This is resolved and normalized from the {@link PinpointSMSVoiceV2ClientConfig | constructor configuration interface}.
 */
export interface PinpointSMSVoiceV2ClientResolvedConfig extends PinpointSMSVoiceV2ClientResolvedConfigType {}

/**
 * <p>Welcome to the <i>Amazon Pinpoint SMS and Voice, version 2 API Reference</i>.
 *             This guide provides information about Amazon Pinpoint SMS and Voice, version 2 API
 *             resources, including supported HTTP methods, parameters, and schemas.</p>
 *         <p>Amazon Pinpoint is an Amazon Web Services service that you can use to engage with
 *             your recipients across multiple messaging channels. The Amazon Pinpoint SMS and
 *             Voice, version 2 API provides programmatic access to options that are unique to the SMS
 *             and voice channels and supplements the resources provided by the Amazon Pinpoint
 *             API.</p>
 *         <p>If you're new to Amazon Pinpoint, it's also helpful to review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">
 *                 Amazon Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint
 *                 Developer Guide</i> provides tutorials, code samples, and procedures that
 *             demonstrate how to use Amazon Pinpoint features programmatically and how to integrate
 *                 Amazon Pinpoint functionality into mobile apps and other types of applications.
 *             The guide also provides key information, such as Amazon Pinpoint integration with
 *             other Amazon Web Services services, and the quotas that apply to use of the
 *             service.</p>
 */
export class PinpointSMSVoiceV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PinpointSMSVoiceV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of PinpointSMSVoiceV2Client class. This is resolved and normalized from the {@link PinpointSMSVoiceV2ClientConfig | constructor configuration interface}.
   */
  readonly config: PinpointSMSVoiceV2ClientResolvedConfig;

  constructor(configuration: PinpointSMSVoiceV2ClientConfig) {
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
