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
  defaultPinpointSMSVoiceV2HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociateOriginationIdentityCommandInput,
  AssociateOriginationIdentityCommandOutput,
} from "./commands/AssociateOriginationIdentityCommand";
import type {
  AssociateProtectConfigurationCommandInput,
  AssociateProtectConfigurationCommandOutput,
} from "./commands/AssociateProtectConfigurationCommand";
import type { CarrierLookupCommandInput, CarrierLookupCommandOutput } from "./commands/CarrierLookupCommand";
import type {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "./commands/CreateConfigurationSetCommand";
import type {
  CreateEventDestinationCommandInput,
  CreateEventDestinationCommandOutput,
} from "./commands/CreateEventDestinationCommand";
import type { CreateOptOutListCommandInput, CreateOptOutListCommandOutput } from "./commands/CreateOptOutListCommand";
import type { CreatePoolCommandInput, CreatePoolCommandOutput } from "./commands/CreatePoolCommand";
import type {
  CreateProtectConfigurationCommandInput,
  CreateProtectConfigurationCommandOutput,
} from "./commands/CreateProtectConfigurationCommand";
import type {
  CreateRegistrationAssociationCommandInput,
  CreateRegistrationAssociationCommandOutput,
} from "./commands/CreateRegistrationAssociationCommand";
import type {
  CreateRegistrationAttachmentCommandInput,
  CreateRegistrationAttachmentCommandOutput,
} from "./commands/CreateRegistrationAttachmentCommand";
import type {
  CreateRegistrationCommandInput,
  CreateRegistrationCommandOutput,
} from "./commands/CreateRegistrationCommand";
import type {
  CreateRegistrationVersionCommandInput,
  CreateRegistrationVersionCommandOutput,
} from "./commands/CreateRegistrationVersionCommand";
import type {
  CreateVerifiedDestinationNumberCommandInput,
  CreateVerifiedDestinationNumberCommandOutput,
} from "./commands/CreateVerifiedDestinationNumberCommand";
import type {
  DeleteAccountDefaultProtectConfigurationCommandInput,
  DeleteAccountDefaultProtectConfigurationCommandOutput,
} from "./commands/DeleteAccountDefaultProtectConfigurationCommand";
import type {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "./commands/DeleteConfigurationSetCommand";
import type {
  DeleteDefaultMessageTypeCommandInput,
  DeleteDefaultMessageTypeCommandOutput,
} from "./commands/DeleteDefaultMessageTypeCommand";
import type {
  DeleteDefaultSenderIdCommandInput,
  DeleteDefaultSenderIdCommandOutput,
} from "./commands/DeleteDefaultSenderIdCommand";
import type {
  DeleteEventDestinationCommandInput,
  DeleteEventDestinationCommandOutput,
} from "./commands/DeleteEventDestinationCommand";
import type { DeleteKeywordCommandInput, DeleteKeywordCommandOutput } from "./commands/DeleteKeywordCommand";
import type {
  DeleteMediaMessageSpendLimitOverrideCommandInput,
  DeleteMediaMessageSpendLimitOverrideCommandOutput,
} from "./commands/DeleteMediaMessageSpendLimitOverrideCommand";
import type {
  DeleteOptedOutNumberCommandInput,
  DeleteOptedOutNumberCommandOutput,
} from "./commands/DeleteOptedOutNumberCommand";
import type { DeleteOptOutListCommandInput, DeleteOptOutListCommandOutput } from "./commands/DeleteOptOutListCommand";
import type { DeletePoolCommandInput, DeletePoolCommandOutput } from "./commands/DeletePoolCommand";
import type {
  DeleteProtectConfigurationCommandInput,
  DeleteProtectConfigurationCommandOutput,
} from "./commands/DeleteProtectConfigurationCommand";
import type {
  DeleteProtectConfigurationRuleSetNumberOverrideCommandInput,
  DeleteProtectConfigurationRuleSetNumberOverrideCommandOutput,
} from "./commands/DeleteProtectConfigurationRuleSetNumberOverrideCommand";
import type {
  DeleteRegistrationAttachmentCommandInput,
  DeleteRegistrationAttachmentCommandOutput,
} from "./commands/DeleteRegistrationAttachmentCommand";
import type {
  DeleteRegistrationCommandInput,
  DeleteRegistrationCommandOutput,
} from "./commands/DeleteRegistrationCommand";
import type {
  DeleteRegistrationFieldValueCommandInput,
  DeleteRegistrationFieldValueCommandOutput,
} from "./commands/DeleteRegistrationFieldValueCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type {
  DeleteTextMessageSpendLimitOverrideCommandInput,
  DeleteTextMessageSpendLimitOverrideCommandOutput,
} from "./commands/DeleteTextMessageSpendLimitOverrideCommand";
import type {
  DeleteVerifiedDestinationNumberCommandInput,
  DeleteVerifiedDestinationNumberCommandOutput,
} from "./commands/DeleteVerifiedDestinationNumberCommand";
import type {
  DeleteVoiceMessageSpendLimitOverrideCommandInput,
  DeleteVoiceMessageSpendLimitOverrideCommandOutput,
} from "./commands/DeleteVoiceMessageSpendLimitOverrideCommand";
import type {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import type {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import type {
  DescribeConfigurationSetsCommandInput,
  DescribeConfigurationSetsCommandOutput,
} from "./commands/DescribeConfigurationSetsCommand";
import type { DescribeKeywordsCommandInput, DescribeKeywordsCommandOutput } from "./commands/DescribeKeywordsCommand";
import type {
  DescribeOptedOutNumbersCommandInput,
  DescribeOptedOutNumbersCommandOutput,
} from "./commands/DescribeOptedOutNumbersCommand";
import type {
  DescribeOptOutListsCommandInput,
  DescribeOptOutListsCommandOutput,
} from "./commands/DescribeOptOutListsCommand";
import type {
  DescribePhoneNumbersCommandInput,
  DescribePhoneNumbersCommandOutput,
} from "./commands/DescribePhoneNumbersCommand";
import type { DescribePoolsCommandInput, DescribePoolsCommandOutput } from "./commands/DescribePoolsCommand";
import type {
  DescribeProtectConfigurationsCommandInput,
  DescribeProtectConfigurationsCommandOutput,
} from "./commands/DescribeProtectConfigurationsCommand";
import type {
  DescribeRegistrationAttachmentsCommandInput,
  DescribeRegistrationAttachmentsCommandOutput,
} from "./commands/DescribeRegistrationAttachmentsCommand";
import type {
  DescribeRegistrationFieldDefinitionsCommandInput,
  DescribeRegistrationFieldDefinitionsCommandOutput,
} from "./commands/DescribeRegistrationFieldDefinitionsCommand";
import type {
  DescribeRegistrationFieldValuesCommandInput,
  DescribeRegistrationFieldValuesCommandOutput,
} from "./commands/DescribeRegistrationFieldValuesCommand";
import type {
  DescribeRegistrationsCommandInput,
  DescribeRegistrationsCommandOutput,
} from "./commands/DescribeRegistrationsCommand";
import type {
  DescribeRegistrationSectionDefinitionsCommandInput,
  DescribeRegistrationSectionDefinitionsCommandOutput,
} from "./commands/DescribeRegistrationSectionDefinitionsCommand";
import type {
  DescribeRegistrationTypeDefinitionsCommandInput,
  DescribeRegistrationTypeDefinitionsCommandOutput,
} from "./commands/DescribeRegistrationTypeDefinitionsCommand";
import type {
  DescribeRegistrationVersionsCommandInput,
  DescribeRegistrationVersionsCommandOutput,
} from "./commands/DescribeRegistrationVersionsCommand";
import type {
  DescribeSenderIdsCommandInput,
  DescribeSenderIdsCommandOutput,
} from "./commands/DescribeSenderIdsCommand";
import type {
  DescribeSpendLimitsCommandInput,
  DescribeSpendLimitsCommandOutput,
} from "./commands/DescribeSpendLimitsCommand";
import type {
  DescribeVerifiedDestinationNumbersCommandInput,
  DescribeVerifiedDestinationNumbersCommandOutput,
} from "./commands/DescribeVerifiedDestinationNumbersCommand";
import type {
  DisassociateOriginationIdentityCommandInput,
  DisassociateOriginationIdentityCommandOutput,
} from "./commands/DisassociateOriginationIdentityCommand";
import type {
  DisassociateProtectConfigurationCommandInput,
  DisassociateProtectConfigurationCommandOutput,
} from "./commands/DisassociateProtectConfigurationCommand";
import type {
  DiscardRegistrationVersionCommandInput,
  DiscardRegistrationVersionCommandOutput,
} from "./commands/DiscardRegistrationVersionCommand";
import type {
  GetProtectConfigurationCountryRuleSetCommandInput,
  GetProtectConfigurationCountryRuleSetCommandOutput,
} from "./commands/GetProtectConfigurationCountryRuleSetCommand";
import type {
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import type {
  ListPoolOriginationIdentitiesCommandInput,
  ListPoolOriginationIdentitiesCommandOutput,
} from "./commands/ListPoolOriginationIdentitiesCommand";
import type {
  ListProtectConfigurationRuleSetNumberOverridesCommandInput,
  ListProtectConfigurationRuleSetNumberOverridesCommandOutput,
} from "./commands/ListProtectConfigurationRuleSetNumberOverridesCommand";
import type {
  ListRegistrationAssociationsCommandInput,
  ListRegistrationAssociationsCommandOutput,
} from "./commands/ListRegistrationAssociationsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { PutKeywordCommandInput, PutKeywordCommandOutput } from "./commands/PutKeywordCommand";
import type {
  PutMessageFeedbackCommandInput,
  PutMessageFeedbackCommandOutput,
} from "./commands/PutMessageFeedbackCommand";
import type {
  PutOptedOutNumberCommandInput,
  PutOptedOutNumberCommandOutput,
} from "./commands/PutOptedOutNumberCommand";
import type {
  PutProtectConfigurationRuleSetNumberOverrideCommandInput,
  PutProtectConfigurationRuleSetNumberOverrideCommandOutput,
} from "./commands/PutProtectConfigurationRuleSetNumberOverrideCommand";
import type {
  PutRegistrationFieldValueCommandInput,
  PutRegistrationFieldValueCommandOutput,
} from "./commands/PutRegistrationFieldValueCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type {
  ReleasePhoneNumberCommandInput,
  ReleasePhoneNumberCommandOutput,
} from "./commands/ReleasePhoneNumberCommand";
import type { ReleaseSenderIdCommandInput, ReleaseSenderIdCommandOutput } from "./commands/ReleaseSenderIdCommand";
import type {
  RequestPhoneNumberCommandInput,
  RequestPhoneNumberCommandOutput,
} from "./commands/RequestPhoneNumberCommand";
import type { RequestSenderIdCommandInput, RequestSenderIdCommandOutput } from "./commands/RequestSenderIdCommand";
import type {
  SendDestinationNumberVerificationCodeCommandInput,
  SendDestinationNumberVerificationCodeCommandOutput,
} from "./commands/SendDestinationNumberVerificationCodeCommand";
import type { SendMediaMessageCommandInput, SendMediaMessageCommandOutput } from "./commands/SendMediaMessageCommand";
import type { SendTextMessageCommandInput, SendTextMessageCommandOutput } from "./commands/SendTextMessageCommand";
import type { SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput } from "./commands/SendVoiceMessageCommand";
import type {
  SetAccountDefaultProtectConfigurationCommandInput,
  SetAccountDefaultProtectConfigurationCommandOutput,
} from "./commands/SetAccountDefaultProtectConfigurationCommand";
import type {
  SetDefaultMessageFeedbackEnabledCommandInput,
  SetDefaultMessageFeedbackEnabledCommandOutput,
} from "./commands/SetDefaultMessageFeedbackEnabledCommand";
import type {
  SetDefaultMessageTypeCommandInput,
  SetDefaultMessageTypeCommandOutput,
} from "./commands/SetDefaultMessageTypeCommand";
import type {
  SetDefaultSenderIdCommandInput,
  SetDefaultSenderIdCommandOutput,
} from "./commands/SetDefaultSenderIdCommand";
import type {
  SetMediaMessageSpendLimitOverrideCommandInput,
  SetMediaMessageSpendLimitOverrideCommandOutput,
} from "./commands/SetMediaMessageSpendLimitOverrideCommand";
import type {
  SetTextMessageSpendLimitOverrideCommandInput,
  SetTextMessageSpendLimitOverrideCommandOutput,
} from "./commands/SetTextMessageSpendLimitOverrideCommand";
import type {
  SetVoiceMessageSpendLimitOverrideCommandInput,
  SetVoiceMessageSpendLimitOverrideCommandOutput,
} from "./commands/SetVoiceMessageSpendLimitOverrideCommand";
import type {
  SubmitRegistrationVersionCommandInput,
  SubmitRegistrationVersionCommandOutput,
} from "./commands/SubmitRegistrationVersionCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateEventDestinationCommandInput,
  UpdateEventDestinationCommandOutput,
} from "./commands/UpdateEventDestinationCommand";
import type {
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
} from "./commands/UpdatePhoneNumberCommand";
import type { UpdatePoolCommandInput, UpdatePoolCommandOutput } from "./commands/UpdatePoolCommand";
import type {
  UpdateProtectConfigurationCommandInput,
  UpdateProtectConfigurationCommandOutput,
} from "./commands/UpdateProtectConfigurationCommand";
import type {
  UpdateProtectConfigurationCountryRuleSetCommandInput,
  UpdateProtectConfigurationCountryRuleSetCommandOutput,
} from "./commands/UpdateProtectConfigurationCountryRuleSetCommand";
import type { UpdateSenderIdCommandInput, UpdateSenderIdCommandOutput } from "./commands/UpdateSenderIdCommand";
import type {
  VerifyDestinationNumberCommandInput,
  VerifyDestinationNumberCommandOutput,
} from "./commands/VerifyDestinationNumberCommand";
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
 * <p>Welcome to the <i>End User Messaging SMS, version 2 API Reference</i>. This guide provides information about End User Messaging SMS, version 2 API resources, including supported HTTP methods, parameters, and schemas.</p> <p>Amazon Pinpoint is an Amazon Web Services service that you can use to engage with your recipients across multiple messaging channels. The End User Messaging SMS, version 2 API provides programmatic access to options that are unique to the SMS and voice channels. End User Messaging SMS, version 2 resources such as phone numbers, sender IDs, and opt-out lists can be used by the Amazon Pinpoint API.</p> <p>If you're new to End User Messaging SMS, it's also helpful to review the <a href="https://docs.aws.amazon.com/sms-voice/latest/userguide/what-is-service.html"> End User Messaging SMS User Guide</a>, where you'll find tutorials, code samples, and procedures that demonstrate how to use End User Messaging SMS features programmatically and how to integrate functionality into mobile apps and other types of applications. The guide also provides key information, such as End User Messaging SMS integration with other Amazon Web Services services, and the quotas that apply to use of the service.</p> <p> <b>Regional availability</b> </p> <p>The <i>End User Messaging SMS version 2 API Reference</i> is available in several Amazon Web Services Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/hgeneral/latest/gr/rande.html#pinpoint_region">Amazon Web Services Service Endpoints</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/pinpoint.html">Amazon Pinpoint endpoints and quotas</a> in the Amazon Web Services General Reference. To learn more about Amazon Web Services Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing Amazon Web Services Regions</a> in the Amazon Web Services General Reference.</p> <p>In each Region, Amazon Web Services maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">Amazon Web Services Global Infrastructure.</a> </p>
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
