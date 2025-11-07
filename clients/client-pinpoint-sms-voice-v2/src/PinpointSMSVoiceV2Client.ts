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
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultPinpointSMSVoiceV2HttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociateOriginationIdentityCommandInput,
  AssociateOriginationIdentityCommandOutput,
} from "./commands/AssociateOriginationIdentityCommand";
import {
  AssociateProtectConfigurationCommandInput,
  AssociateProtectConfigurationCommandOutput,
} from "./commands/AssociateProtectConfigurationCommand";
import { CarrierLookupCommandInput, CarrierLookupCommandOutput } from "./commands/CarrierLookupCommand";
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
  CreateProtectConfigurationCommandInput,
  CreateProtectConfigurationCommandOutput,
} from "./commands/CreateProtectConfigurationCommand";
import {
  CreateRegistrationAssociationCommandInput,
  CreateRegistrationAssociationCommandOutput,
} from "./commands/CreateRegistrationAssociationCommand";
import {
  CreateRegistrationAttachmentCommandInput,
  CreateRegistrationAttachmentCommandOutput,
} from "./commands/CreateRegistrationAttachmentCommand";
import { CreateRegistrationCommandInput, CreateRegistrationCommandOutput } from "./commands/CreateRegistrationCommand";
import {
  CreateRegistrationVersionCommandInput,
  CreateRegistrationVersionCommandOutput,
} from "./commands/CreateRegistrationVersionCommand";
import {
  CreateVerifiedDestinationNumberCommandInput,
  CreateVerifiedDestinationNumberCommandOutput,
} from "./commands/CreateVerifiedDestinationNumberCommand";
import {
  DeleteAccountDefaultProtectConfigurationCommandInput,
  DeleteAccountDefaultProtectConfigurationCommandOutput,
} from "./commands/DeleteAccountDefaultProtectConfigurationCommand";
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
  DeleteMediaMessageSpendLimitOverrideCommandInput,
  DeleteMediaMessageSpendLimitOverrideCommandOutput,
} from "./commands/DeleteMediaMessageSpendLimitOverrideCommand";
import {
  DeleteOptedOutNumberCommandInput,
  DeleteOptedOutNumberCommandOutput,
} from "./commands/DeleteOptedOutNumberCommand";
import { DeleteOptOutListCommandInput, DeleteOptOutListCommandOutput } from "./commands/DeleteOptOutListCommand";
import { DeletePoolCommandInput, DeletePoolCommandOutput } from "./commands/DeletePoolCommand";
import {
  DeleteProtectConfigurationCommandInput,
  DeleteProtectConfigurationCommandOutput,
} from "./commands/DeleteProtectConfigurationCommand";
import {
  DeleteProtectConfigurationRuleSetNumberOverrideCommandInput,
  DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput,
} from "./commands/DeleteProtectConfigurationRuleSetNumberOverrideCommand";
import {
  DeleteRegistrationAttachmentCommandInput,
  DeleteRegistrationAttachmentCommandOutput,
} from "./commands/DeleteRegistrationAttachmentCommand";
import { DeleteRegistrationCommandInput, DeleteRegistrationCommandOutput } from "./commands/DeleteRegistrationCommand";
import {
  DeleteRegistrationFieldValueCommandInput,
  DeleteRegistrationFieldValueCommandOutput,
} from "./commands/DeleteRegistrationFieldValueCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteTextMessageSpendLimitOverrideCommandInput,
  DeleteTextMessageSpendLimitOverrideCommandOutput,
} from "./commands/DeleteTextMessageSpendLimitOverrideCommand";
import {
  DeleteVerifiedDestinationNumberCommandInput,
  DeleteVerifiedDestinationNumberCommandOutput,
} from "./commands/DeleteVerifiedDestinationNumberCommand";
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
import {
  DescribeProtectConfigurationsCommandInput,
  DescribeProtectConfigurationsCommandOutput,
} from "./commands/DescribeProtectConfigurationsCommand";
import {
  DescribeRegistrationAttachmentsCommandInput,
  DescribeRegistrationAttachmentsCommandOutput,
} from "./commands/DescribeRegistrationAttachmentsCommand";
import {
  DescribeRegistrationFieldDefinitionsCommandInput,
  DescribeRegistrationFieldDefinitionsCommandOutput,
} from "./commands/DescribeRegistrationFieldDefinitionsCommand";
import {
  DescribeRegistrationFieldValuesCommandInput,
  DescribeRegistrationFieldValuesCommandOutput,
} from "./commands/DescribeRegistrationFieldValuesCommand";
import {
  DescribeRegistrationsCommandInput,
  DescribeRegistrationsCommandOutput,
} from "./commands/DescribeRegistrationsCommand";
import {
  DescribeRegistrationSectionDefinitionsCommandInput,
  DescribeRegistrationSectionDefinitionsCommandOutput,
} from "./commands/DescribeRegistrationSectionDefinitionsCommand";
import {
  DescribeRegistrationTypeDefinitionsCommandInput,
  DescribeRegistrationTypeDefinitionsCommandOutput,
} from "./commands/DescribeRegistrationTypeDefinitionsCommand";
import {
  DescribeRegistrationVersionsCommandInput,
  DescribeRegistrationVersionsCommandOutput,
} from "./commands/DescribeRegistrationVersionsCommand";
import { DescribeSenderIdsCommandInput, DescribeSenderIdsCommandOutput } from "./commands/DescribeSenderIdsCommand";
import {
  DescribeSpendLimitsCommandInput,
  DescribeSpendLimitsCommandOutput,
} from "./commands/DescribeSpendLimitsCommand";
import {
  DescribeVerifiedDestinationNumbersCommandInput,
  DescribeVerifiedDestinationNumbersCommandOutput,
} from "./commands/DescribeVerifiedDestinationNumbersCommand";
import {
  DisassociateOriginationIdentityCommandInput,
  DisassociateOriginationIdentityCommandOutput,
} from "./commands/DisassociateOriginationIdentityCommand";
import {
  DisassociateProtectConfigurationCommandInput,
  DisassociateProtectConfigurationCommandOutput,
} from "./commands/DisassociateProtectConfigurationCommand";
import {
  DiscardRegistrationVersionCommandInput,
  DiscardRegistrationVersionCommandOutput,
} from "./commands/DiscardRegistrationVersionCommand";
import {
  GetProtectConfigurationCountryRuleSetCommandInput,
  GetProtectConfigurationCountryRuleSetCommandOutput,
} from "./commands/GetProtectConfigurationCountryRuleSetCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import {
  ListPoolOriginationIdentitiesCommandInput,
  ListPoolOriginationIdentitiesCommandOutput,
} from "./commands/ListPoolOriginationIdentitiesCommand";
import {
  ListProtectConfigurationRuleSetNumberOverridesCommandInput,
  ListProtectConfigurationRuleSetNumberOverridesCommandOutput,
} from "./commands/ListProtectConfigurationRuleSetNumberOverridesCommand";
import {
  ListRegistrationAssociationsCommandInput,
  ListRegistrationAssociationsCommandOutput,
} from "./commands/ListRegistrationAssociationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutKeywordCommandInput, PutKeywordCommandOutput } from "./commands/PutKeywordCommand";
import { PutMessageFeedbackCommandInput, PutMessageFeedbackCommandOutput } from "./commands/PutMessageFeedbackCommand";
import { PutOptedOutNumberCommandInput, PutOptedOutNumberCommandOutput } from "./commands/PutOptedOutNumberCommand";
import {
  PutProtectConfigurationRuleSetNumberOverrideCommandInput,
  PutProtectConfigurationRuleSetNumberOverrideCommandOutput,
} from "./commands/PutProtectConfigurationRuleSetNumberOverrideCommand";
import {
  PutRegistrationFieldValueCommandInput,
  PutRegistrationFieldValueCommandOutput,
} from "./commands/PutRegistrationFieldValueCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { ReleasePhoneNumberCommandInput, ReleasePhoneNumberCommandOutput } from "./commands/ReleasePhoneNumberCommand";
import { ReleaseSenderIdCommandInput, ReleaseSenderIdCommandOutput } from "./commands/ReleaseSenderIdCommand";
import { RequestPhoneNumberCommandInput, RequestPhoneNumberCommandOutput } from "./commands/RequestPhoneNumberCommand";
import { RequestSenderIdCommandInput, RequestSenderIdCommandOutput } from "./commands/RequestSenderIdCommand";
import {
  SendDestinationNumberVerificationCodeCommandInput,
  SendDestinationNumberVerificationCodeCommandOutput,
} from "./commands/SendDestinationNumberVerificationCodeCommand";
import { SendMediaMessageCommandInput, SendMediaMessageCommandOutput } from "./commands/SendMediaMessageCommand";
import { SendTextMessageCommandInput, SendTextMessageCommandOutput } from "./commands/SendTextMessageCommand";
import { SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput } from "./commands/SendVoiceMessageCommand";
import {
  SetAccountDefaultProtectConfigurationCommandInput,
  SetAccountDefaultProtectConfigurationCommandOutput,
} from "./commands/SetAccountDefaultProtectConfigurationCommand";
import {
  SetDefaultMessageFeedbackEnabledCommandInput,
  SetDefaultMessageFeedbackEnabledCommandOutput,
} from "./commands/SetDefaultMessageFeedbackEnabledCommand";
import {
  SetDefaultMessageTypeCommandInput,
  SetDefaultMessageTypeCommandOutput,
} from "./commands/SetDefaultMessageTypeCommand";
import { SetDefaultSenderIdCommandInput, SetDefaultSenderIdCommandOutput } from "./commands/SetDefaultSenderIdCommand";
import {
  SetMediaMessageSpendLimitOverrideCommandInput,
  SetMediaMessageSpendLimitOverrideCommandOutput,
} from "./commands/SetMediaMessageSpendLimitOverrideCommand";
import {
  SetTextMessageSpendLimitOverrideCommandInput,
  SetTextMessageSpendLimitOverrideCommandOutput,
} from "./commands/SetTextMessageSpendLimitOverrideCommand";
import {
  SetVoiceMessageSpendLimitOverrideCommandInput,
  SetVoiceMessageSpendLimitOverrideCommandOutput,
} from "./commands/SetVoiceMessageSpendLimitOverrideCommand";
import {
  SubmitRegistrationVersionCommandInput,
  SubmitRegistrationVersionCommandOutput,
} from "./commands/SubmitRegistrationVersionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateEventDestinationCommandInput,
  UpdateEventDestinationCommandOutput,
} from "./commands/UpdateEventDestinationCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "./commands/UpdatePhoneNumberCommand";
import { UpdatePoolCommandInput, UpdatePoolCommandOutput } from "./commands/UpdatePoolCommand";
import {
  UpdateProtectConfigurationCommandInput,
  UpdateProtectConfigurationCommandOutput,
} from "./commands/UpdateProtectConfigurationCommand";
import {
  UpdateProtectConfigurationCountryRuleSetCommandInput,
  UpdateProtectConfigurationCountryRuleSetCommandOutput,
} from "./commands/UpdateProtectConfigurationCountryRuleSetCommand";
import { UpdateSenderIdCommandInput, UpdateSenderIdCommandOutput } from "./commands/UpdateSenderIdCommand";
import {
  VerifyDestinationNumberCommandInput,
  VerifyDestinationNumberCommandOutput,
} from "./commands/VerifyDestinationNumberCommand";
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
  | AssociateOriginationIdentityCommandInput
  | AssociateProtectConfigurationCommandInput
  | CarrierLookupCommandInput
  | CreateConfigurationSetCommandInput
  | CreateEventDestinationCommandInput
  | CreateOptOutListCommandInput
  | CreatePoolCommandInput
  | CreateProtectConfigurationCommandInput
  | CreateRegistrationAssociationCommandInput
  | CreateRegistrationAttachmentCommandInput
  | CreateRegistrationCommandInput
  | CreateRegistrationVersionCommandInput
  | CreateVerifiedDestinationNumberCommandInput
  | DeleteAccountDefaultProtectConfigurationCommandInput
  | DeleteConfigurationSetCommandInput
  | DeleteDefaultMessageTypeCommandInput
  | DeleteDefaultSenderIdCommandInput
  | DeleteEventDestinationCommandInput
  | DeleteKeywordCommandInput
  | DeleteMediaMessageSpendLimitOverrideCommandInput
  | DeleteOptOutListCommandInput
  | DeleteOptedOutNumberCommandInput
  | DeletePoolCommandInput
  | DeleteProtectConfigurationCommandInput
  | DeleteProtectConfigurationRuleSetNumberOverrideCommandInput
  | DeleteRegistrationAttachmentCommandInput
  | DeleteRegistrationCommandInput
  | DeleteRegistrationFieldValueCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteTextMessageSpendLimitOverrideCommandInput
  | DeleteVerifiedDestinationNumberCommandInput
  | DeleteVoiceMessageSpendLimitOverrideCommandInput
  | DescribeAccountAttributesCommandInput
  | DescribeAccountLimitsCommandInput
  | DescribeConfigurationSetsCommandInput
  | DescribeKeywordsCommandInput
  | DescribeOptOutListsCommandInput
  | DescribeOptedOutNumbersCommandInput
  | DescribePhoneNumbersCommandInput
  | DescribePoolsCommandInput
  | DescribeProtectConfigurationsCommandInput
  | DescribeRegistrationAttachmentsCommandInput
  | DescribeRegistrationFieldDefinitionsCommandInput
  | DescribeRegistrationFieldValuesCommandInput
  | DescribeRegistrationSectionDefinitionsCommandInput
  | DescribeRegistrationTypeDefinitionsCommandInput
  | DescribeRegistrationVersionsCommandInput
  | DescribeRegistrationsCommandInput
  | DescribeSenderIdsCommandInput
  | DescribeSpendLimitsCommandInput
  | DescribeVerifiedDestinationNumbersCommandInput
  | DisassociateOriginationIdentityCommandInput
  | DisassociateProtectConfigurationCommandInput
  | DiscardRegistrationVersionCommandInput
  | GetProtectConfigurationCountryRuleSetCommandInput
  | GetResourcePolicyCommandInput
  | ListPoolOriginationIdentitiesCommandInput
  | ListProtectConfigurationRuleSetNumberOverridesCommandInput
  | ListRegistrationAssociationsCommandInput
  | ListTagsForResourceCommandInput
  | PutKeywordCommandInput
  | PutMessageFeedbackCommandInput
  | PutOptedOutNumberCommandInput
  | PutProtectConfigurationRuleSetNumberOverrideCommandInput
  | PutRegistrationFieldValueCommandInput
  | PutResourcePolicyCommandInput
  | ReleasePhoneNumberCommandInput
  | ReleaseSenderIdCommandInput
  | RequestPhoneNumberCommandInput
  | RequestSenderIdCommandInput
  | SendDestinationNumberVerificationCodeCommandInput
  | SendMediaMessageCommandInput
  | SendTextMessageCommandInput
  | SendVoiceMessageCommandInput
  | SetAccountDefaultProtectConfigurationCommandInput
  | SetDefaultMessageFeedbackEnabledCommandInput
  | SetDefaultMessageTypeCommandInput
  | SetDefaultSenderIdCommandInput
  | SetMediaMessageSpendLimitOverrideCommandInput
  | SetTextMessageSpendLimitOverrideCommandInput
  | SetVoiceMessageSpendLimitOverrideCommandInput
  | SubmitRegistrationVersionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateEventDestinationCommandInput
  | UpdatePhoneNumberCommandInput
  | UpdatePoolCommandInput
  | UpdateProtectConfigurationCommandInput
  | UpdateProtectConfigurationCountryRuleSetCommandInput
  | UpdateSenderIdCommandInput
  | VerifyDestinationNumberCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateOriginationIdentityCommandOutput
  | AssociateProtectConfigurationCommandOutput
  | CarrierLookupCommandOutput
  | CreateConfigurationSetCommandOutput
  | CreateEventDestinationCommandOutput
  | CreateOptOutListCommandOutput
  | CreatePoolCommandOutput
  | CreateProtectConfigurationCommandOutput
  | CreateRegistrationAssociationCommandOutput
  | CreateRegistrationAttachmentCommandOutput
  | CreateRegistrationCommandOutput
  | CreateRegistrationVersionCommandOutput
  | CreateVerifiedDestinationNumberCommandOutput
  | DeleteAccountDefaultProtectConfigurationCommandOutput
  | DeleteConfigurationSetCommandOutput
  | DeleteDefaultMessageTypeCommandOutput
  | DeleteDefaultSenderIdCommandOutput
  | DeleteEventDestinationCommandOutput
  | DeleteKeywordCommandOutput
  | DeleteMediaMessageSpendLimitOverrideCommandOutput
  | DeleteOptOutListCommandOutput
  | DeleteOptedOutNumberCommandOutput
  | DeletePoolCommandOutput
  | DeleteProtectConfigurationCommandOutput
  | DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput
  | DeleteRegistrationAttachmentCommandOutput
  | DeleteRegistrationCommandOutput
  | DeleteRegistrationFieldValueCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteTextMessageSpendLimitOverrideCommandOutput
  | DeleteVerifiedDestinationNumberCommandOutput
  | DeleteVoiceMessageSpendLimitOverrideCommandOutput
  | DescribeAccountAttributesCommandOutput
  | DescribeAccountLimitsCommandOutput
  | DescribeConfigurationSetsCommandOutput
  | DescribeKeywordsCommandOutput
  | DescribeOptOutListsCommandOutput
  | DescribeOptedOutNumbersCommandOutput
  | DescribePhoneNumbersCommandOutput
  | DescribePoolsCommandOutput
  | DescribeProtectConfigurationsCommandOutput
  | DescribeRegistrationAttachmentsCommandOutput
  | DescribeRegistrationFieldDefinitionsCommandOutput
  | DescribeRegistrationFieldValuesCommandOutput
  | DescribeRegistrationSectionDefinitionsCommandOutput
  | DescribeRegistrationTypeDefinitionsCommandOutput
  | DescribeRegistrationVersionsCommandOutput
  | DescribeRegistrationsCommandOutput
  | DescribeSenderIdsCommandOutput
  | DescribeSpendLimitsCommandOutput
  | DescribeVerifiedDestinationNumbersCommandOutput
  | DisassociateOriginationIdentityCommandOutput
  | DisassociateProtectConfigurationCommandOutput
  | DiscardRegistrationVersionCommandOutput
  | GetProtectConfigurationCountryRuleSetCommandOutput
  | GetResourcePolicyCommandOutput
  | ListPoolOriginationIdentitiesCommandOutput
  | ListProtectConfigurationRuleSetNumberOverridesCommandOutput
  | ListRegistrationAssociationsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutKeywordCommandOutput
  | PutMessageFeedbackCommandOutput
  | PutOptedOutNumberCommandOutput
  | PutProtectConfigurationRuleSetNumberOverrideCommandOutput
  | PutRegistrationFieldValueCommandOutput
  | PutResourcePolicyCommandOutput
  | ReleasePhoneNumberCommandOutput
  | ReleaseSenderIdCommandOutput
  | RequestPhoneNumberCommandOutput
  | RequestSenderIdCommandOutput
  | SendDestinationNumberVerificationCodeCommandOutput
  | SendMediaMessageCommandOutput
  | SendTextMessageCommandOutput
  | SendVoiceMessageCommandOutput
  | SetAccountDefaultProtectConfigurationCommandOutput
  | SetDefaultMessageFeedbackEnabledCommandOutput
  | SetDefaultMessageTypeCommandOutput
  | SetDefaultSenderIdCommandOutput
  | SetMediaMessageSpendLimitOverrideCommandOutput
  | SetTextMessageSpendLimitOverrideCommandOutput
  | SetVoiceMessageSpendLimitOverrideCommandOutput
  | SubmitRegistrationVersionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateEventDestinationCommandOutput
  | UpdatePhoneNumberCommandOutput
  | UpdatePoolCommandOutput
  | UpdateProtectConfigurationCommandOutput
  | UpdateProtectConfigurationCountryRuleSetCommandOutput
  | UpdateSenderIdCommandOutput
  | VerifyDestinationNumberCommandOutput;

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
export type PinpointSMSVoiceV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of PinpointSMSVoiceV2Client class constructor that set the region, credentials and other options.
 */
export interface PinpointSMSVoiceV2ClientConfig extends PinpointSMSVoiceV2ClientConfigType {}

/**
 * @public
 */
export type PinpointSMSVoiceV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of PinpointSMSVoiceV2Client class. This is resolved and normalized from the {@link PinpointSMSVoiceV2ClientConfig | constructor configuration interface}.
 */
export interface PinpointSMSVoiceV2ClientResolvedConfig extends PinpointSMSVoiceV2ClientResolvedConfigType {}

/**
 * <p>Welcome to the <i>End User MessagingSMS, version 2 API Reference</i>. This guide provides information about End User MessagingSMS, version 2 API resources, including supported HTTP methods, parameters, and schemas.</p> <p>Amazon Pinpoint is an Amazon Web Services service that you can use to engage with your recipients across multiple messaging channels. The End User MessagingSMS, version 2 API provides programmatic access to options that are unique to the SMS and voice channels. End User MessagingSMS, version 2 resources such as phone numbers, sender IDs, and opt-out lists can be used by the Amazon Pinpoint API.</p> <p>If you're new to End User MessagingSMS, it's also helpful to review the <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html"> End User MessagingSMS User Guide</a>, where you'll find tutorials, code samples, and procedures that demonstrate how to use End User MessagingSMS features programmatically and how to integrate functionality into mobile apps and other types of applications. The guide also provides key information, such as End User MessagingSMS integration with other Amazon Web Services services, and the quotas that apply to use of the service.</p> <p> <b>Regional availability</b> </p> <p>The <i>End User MessagingSMS version 2 API Reference</i> is available in several Amazon Web Services Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/hgeneral/latest/gr/rande.html#pinpoint_region">Amazon Web Services Service Endpoints</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/pinpoint.html">Amazon Pinpoint endpoints and quotas</a> in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing Amazon Web Services Regions</a> in the Amazon Web Services General Reference.</p> <p>In each Region, Amazon Web Services maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">Amazon Web Services Global Infrastructure.</a> </p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<PinpointSMSVoiceV2ClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultPinpointSMSVoiceV2HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: PinpointSMSVoiceV2ClientResolvedConfig) =>
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
