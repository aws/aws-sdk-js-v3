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
  defaultChimeSDKVoiceHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorCommandOutput,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorCommand";
import {
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorGroupCommand";
import {
  BatchDeletePhoneNumberCommandInput,
  BatchDeletePhoneNumberCommandOutput,
} from "./commands/BatchDeletePhoneNumberCommand";
import {
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput,
} from "./commands/BatchUpdatePhoneNumberCommand";
import {
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
} from "./commands/CreatePhoneNumberOrderCommand";
import { CreateProxySessionCommandInput, CreateProxySessionCommandOutput } from "./commands/CreateProxySessionCommand";
import {
  CreateSipMediaApplicationCallCommandInput,
  CreateSipMediaApplicationCallCommandOutput,
} from "./commands/CreateSipMediaApplicationCallCommand";
import {
  CreateSipMediaApplicationCommandInput,
  CreateSipMediaApplicationCommandOutput,
} from "./commands/CreateSipMediaApplicationCommand";
import { CreateSipRuleCommandInput, CreateSipRuleCommandOutput } from "./commands/CreateSipRuleCommand";
import {
  CreateVoiceConnectorCommandInput,
  CreateVoiceConnectorCommandOutput,
} from "./commands/CreateVoiceConnectorCommand";
import {
  CreateVoiceConnectorGroupCommandInput,
  CreateVoiceConnectorGroupCommandOutput,
} from "./commands/CreateVoiceConnectorGroupCommand";
import { CreateVoiceProfileCommandInput, CreateVoiceProfileCommandOutput } from "./commands/CreateVoiceProfileCommand";
import {
  CreateVoiceProfileDomainCommandInput,
  CreateVoiceProfileDomainCommandOutput,
} from "./commands/CreateVoiceProfileDomainCommand";
import { DeletePhoneNumberCommandInput, DeletePhoneNumberCommandOutput } from "./commands/DeletePhoneNumberCommand";
import { DeleteProxySessionCommandInput, DeleteProxySessionCommandOutput } from "./commands/DeleteProxySessionCommand";
import {
  DeleteSipMediaApplicationCommandInput,
  DeleteSipMediaApplicationCommandOutput,
} from "./commands/DeleteSipMediaApplicationCommand";
import { DeleteSipRuleCommandInput, DeleteSipRuleCommandOutput } from "./commands/DeleteSipRuleCommand";
import {
  DeleteVoiceConnectorCommandInput,
  DeleteVoiceConnectorCommandOutput,
} from "./commands/DeleteVoiceConnectorCommand";
import {
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  DeleteVoiceConnectorExternalSystemsConfigurationCommandInput,
  DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorExternalSystemsConfigurationCommand";
import {
  DeleteVoiceConnectorGroupCommandInput,
  DeleteVoiceConnectorGroupCommandOutput,
} from "./commands/DeleteVoiceConnectorGroupCommand";
import {
  DeleteVoiceConnectorOriginationCommandInput,
  DeleteVoiceConnectorOriginationCommandOutput,
} from "./commands/DeleteVoiceConnectorOriginationCommand";
import {
  DeleteVoiceConnectorProxyCommandInput,
  DeleteVoiceConnectorProxyCommandOutput,
} from "./commands/DeleteVoiceConnectorProxyCommand";
import {
  DeleteVoiceConnectorStreamingConfigurationCommandInput,
  DeleteVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorStreamingConfigurationCommand";
import {
  DeleteVoiceConnectorTerminationCommandInput,
  DeleteVoiceConnectorTerminationCommandOutput,
} from "./commands/DeleteVoiceConnectorTerminationCommand";
import {
  DeleteVoiceConnectorTerminationCredentialsCommandInput,
  DeleteVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/DeleteVoiceConnectorTerminationCredentialsCommand";
import { DeleteVoiceProfileCommandInput, DeleteVoiceProfileCommandOutput } from "./commands/DeleteVoiceProfileCommand";
import {
  DeleteVoiceProfileDomainCommandInput,
  DeleteVoiceProfileDomainCommandOutput,
} from "./commands/DeleteVoiceProfileDomainCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorCommandOutput,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
import { GetGlobalSettingsCommandInput, GetGlobalSettingsCommandOutput } from "./commands/GetGlobalSettingsCommand";
import { GetPhoneNumberCommandInput, GetPhoneNumberCommandOutput } from "./commands/GetPhoneNumberCommand";
import {
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput,
} from "./commands/GetPhoneNumberOrderCommand";
import {
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput,
} from "./commands/GetPhoneNumberSettingsCommand";
import { GetProxySessionCommandInput, GetProxySessionCommandOutput } from "./commands/GetProxySessionCommand";
import {
  GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
  GetSipMediaApplicationAlexaSkillConfigurationCommandOutput,
} from "./commands/GetSipMediaApplicationAlexaSkillConfigurationCommand";
import {
  GetSipMediaApplicationCommandInput,
  GetSipMediaApplicationCommandOutput,
} from "./commands/GetSipMediaApplicationCommand";
import {
  GetSipMediaApplicationLoggingConfigurationCommandInput,
  GetSipMediaApplicationLoggingConfigurationCommandOutput,
} from "./commands/GetSipMediaApplicationLoggingConfigurationCommand";
import { GetSipRuleCommandInput, GetSipRuleCommandOutput } from "./commands/GetSipRuleCommand";
import {
  GetSpeakerSearchTaskCommandInput,
  GetSpeakerSearchTaskCommandOutput,
} from "./commands/GetSpeakerSearchTaskCommand";
import { GetVoiceConnectorCommandInput, GetVoiceConnectorCommandOutput } from "./commands/GetVoiceConnectorCommand";
import {
  GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  GetVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  GetVoiceConnectorExternalSystemsConfigurationCommandInput,
  GetVoiceConnectorExternalSystemsConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorExternalSystemsConfigurationCommand";
import {
  GetVoiceConnectorGroupCommandInput,
  GetVoiceConnectorGroupCommandOutput,
} from "./commands/GetVoiceConnectorGroupCommand";
import {
  GetVoiceConnectorLoggingConfigurationCommandInput,
  GetVoiceConnectorLoggingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorLoggingConfigurationCommand";
import {
  GetVoiceConnectorOriginationCommandInput,
  GetVoiceConnectorOriginationCommandOutput,
} from "./commands/GetVoiceConnectorOriginationCommand";
import {
  GetVoiceConnectorProxyCommandInput,
  GetVoiceConnectorProxyCommandOutput,
} from "./commands/GetVoiceConnectorProxyCommand";
import {
  GetVoiceConnectorStreamingConfigurationCommandInput,
  GetVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorStreamingConfigurationCommand";
import {
  GetVoiceConnectorTerminationCommandInput,
  GetVoiceConnectorTerminationCommandOutput,
} from "./commands/GetVoiceConnectorTerminationCommand";
import {
  GetVoiceConnectorTerminationHealthCommandInput,
  GetVoiceConnectorTerminationHealthCommandOutput,
} from "./commands/GetVoiceConnectorTerminationHealthCommand";
import { GetVoiceProfileCommandInput, GetVoiceProfileCommandOutput } from "./commands/GetVoiceProfileCommand";
import {
  GetVoiceProfileDomainCommandInput,
  GetVoiceProfileDomainCommandOutput,
} from "./commands/GetVoiceProfileDomainCommand";
import {
  GetVoiceToneAnalysisTaskCommandInput,
  GetVoiceToneAnalysisTaskCommandOutput,
} from "./commands/GetVoiceToneAnalysisTaskCommand";
import {
  ListAvailableVoiceConnectorRegionsCommandInput,
  ListAvailableVoiceConnectorRegionsCommandOutput,
} from "./commands/ListAvailableVoiceConnectorRegionsCommand";
import {
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "./commands/ListPhoneNumberOrdersCommand";
import { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "./commands/ListPhoneNumbersCommand";
import { ListProxySessionsCommandInput, ListProxySessionsCommandOutput } from "./commands/ListProxySessionsCommand";
import {
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "./commands/ListSipMediaApplicationsCommand";
import { ListSipRulesCommandInput, ListSipRulesCommandOutput } from "./commands/ListSipRulesCommand";
import {
  ListSupportedPhoneNumberCountriesCommandInput,
  ListSupportedPhoneNumberCountriesCommandOutput,
} from "./commands/ListSupportedPhoneNumberCountriesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
} from "./commands/ListVoiceConnectorGroupsCommand";
import {
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "./commands/ListVoiceConnectorsCommand";
import {
  ListVoiceConnectorTerminationCredentialsCommandInput,
  ListVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/ListVoiceConnectorTerminationCredentialsCommand";
import {
  ListVoiceProfileDomainsCommandInput,
  ListVoiceProfileDomainsCommandOutput,
} from "./commands/ListVoiceProfileDomainsCommand";
import { ListVoiceProfilesCommandInput, ListVoiceProfilesCommandOutput } from "./commands/ListVoiceProfilesCommand";
import {
  PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
  PutSipMediaApplicationAlexaSkillConfigurationCommandOutput,
} from "./commands/PutSipMediaApplicationAlexaSkillConfigurationCommand";
import {
  PutSipMediaApplicationLoggingConfigurationCommandInput,
  PutSipMediaApplicationLoggingConfigurationCommandOutput,
} from "./commands/PutSipMediaApplicationLoggingConfigurationCommand";
import {
  PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  PutVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  PutVoiceConnectorExternalSystemsConfigurationCommandInput,
  PutVoiceConnectorExternalSystemsConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorExternalSystemsConfigurationCommand";
import {
  PutVoiceConnectorLoggingConfigurationCommandInput,
  PutVoiceConnectorLoggingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorLoggingConfigurationCommand";
import {
  PutVoiceConnectorOriginationCommandInput,
  PutVoiceConnectorOriginationCommandOutput,
} from "./commands/PutVoiceConnectorOriginationCommand";
import {
  PutVoiceConnectorProxyCommandInput,
  PutVoiceConnectorProxyCommandOutput,
} from "./commands/PutVoiceConnectorProxyCommand";
import {
  PutVoiceConnectorStreamingConfigurationCommandInput,
  PutVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorStreamingConfigurationCommand";
import {
  PutVoiceConnectorTerminationCommandInput,
  PutVoiceConnectorTerminationCommandOutput,
} from "./commands/PutVoiceConnectorTerminationCommand";
import {
  PutVoiceConnectorTerminationCredentialsCommandInput,
  PutVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/PutVoiceConnectorTerminationCredentialsCommand";
import { RestorePhoneNumberCommandInput, RestorePhoneNumberCommandOutput } from "./commands/RestorePhoneNumberCommand";
import {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import {
  StartSpeakerSearchTaskCommandInput,
  StartSpeakerSearchTaskCommandOutput,
} from "./commands/StartSpeakerSearchTaskCommand";
import {
  StartVoiceToneAnalysisTaskCommandInput,
  StartVoiceToneAnalysisTaskCommandOutput,
} from "./commands/StartVoiceToneAnalysisTaskCommand";
import {
  StopSpeakerSearchTaskCommandInput,
  StopSpeakerSearchTaskCommandOutput,
} from "./commands/StopSpeakerSearchTaskCommand";
import {
  StopVoiceToneAnalysisTaskCommandInput,
  StopVoiceToneAnalysisTaskCommandOutput,
} from "./commands/StopVoiceToneAnalysisTaskCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import { UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput } from "./commands/UpdatePhoneNumberCommand";
import {
  UpdatePhoneNumberSettingsCommandInput,
  UpdatePhoneNumberSettingsCommandOutput,
} from "./commands/UpdatePhoneNumberSettingsCommand";
import { UpdateProxySessionCommandInput, UpdateProxySessionCommandOutput } from "./commands/UpdateProxySessionCommand";
import {
  UpdateSipMediaApplicationCallCommandInput,
  UpdateSipMediaApplicationCallCommandOutput,
} from "./commands/UpdateSipMediaApplicationCallCommand";
import {
  UpdateSipMediaApplicationCommandInput,
  UpdateSipMediaApplicationCommandOutput,
} from "./commands/UpdateSipMediaApplicationCommand";
import { UpdateSipRuleCommandInput, UpdateSipRuleCommandOutput } from "./commands/UpdateSipRuleCommand";
import {
  UpdateVoiceConnectorCommandInput,
  UpdateVoiceConnectorCommandOutput,
} from "./commands/UpdateVoiceConnectorCommand";
import {
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput,
} from "./commands/UpdateVoiceConnectorGroupCommand";
import { UpdateVoiceProfileCommandInput, UpdateVoiceProfileCommandOutput } from "./commands/UpdateVoiceProfileCommand";
import {
  UpdateVoiceProfileDomainCommandInput,
  UpdateVoiceProfileDomainCommandOutput,
} from "./commands/UpdateVoiceProfileDomainCommand";
import {
  ValidateE911AddressCommandInput,
  ValidateE911AddressCommandOutput,
} from "./commands/ValidateE911AddressCommand";
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
  | AssociatePhoneNumbersWithVoiceConnectorCommandInput
  | AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput
  | BatchDeletePhoneNumberCommandInput
  | BatchUpdatePhoneNumberCommandInput
  | CreatePhoneNumberOrderCommandInput
  | CreateProxySessionCommandInput
  | CreateSipMediaApplicationCallCommandInput
  | CreateSipMediaApplicationCommandInput
  | CreateSipRuleCommandInput
  | CreateVoiceConnectorCommandInput
  | CreateVoiceConnectorGroupCommandInput
  | CreateVoiceProfileCommandInput
  | CreateVoiceProfileDomainCommandInput
  | DeletePhoneNumberCommandInput
  | DeleteProxySessionCommandInput
  | DeleteSipMediaApplicationCommandInput
  | DeleteSipRuleCommandInput
  | DeleteVoiceConnectorCommandInput
  | DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput
  | DeleteVoiceConnectorExternalSystemsConfigurationCommandInput
  | DeleteVoiceConnectorGroupCommandInput
  | DeleteVoiceConnectorOriginationCommandInput
  | DeleteVoiceConnectorProxyCommandInput
  | DeleteVoiceConnectorStreamingConfigurationCommandInput
  | DeleteVoiceConnectorTerminationCommandInput
  | DeleteVoiceConnectorTerminationCredentialsCommandInput
  | DeleteVoiceProfileCommandInput
  | DeleteVoiceProfileDomainCommandInput
  | DisassociatePhoneNumbersFromVoiceConnectorCommandInput
  | DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput
  | GetGlobalSettingsCommandInput
  | GetPhoneNumberCommandInput
  | GetPhoneNumberOrderCommandInput
  | GetPhoneNumberSettingsCommandInput
  | GetProxySessionCommandInput
  | GetSipMediaApplicationAlexaSkillConfigurationCommandInput
  | GetSipMediaApplicationCommandInput
  | GetSipMediaApplicationLoggingConfigurationCommandInput
  | GetSipRuleCommandInput
  | GetSpeakerSearchTaskCommandInput
  | GetVoiceConnectorCommandInput
  | GetVoiceConnectorEmergencyCallingConfigurationCommandInput
  | GetVoiceConnectorExternalSystemsConfigurationCommandInput
  | GetVoiceConnectorGroupCommandInput
  | GetVoiceConnectorLoggingConfigurationCommandInput
  | GetVoiceConnectorOriginationCommandInput
  | GetVoiceConnectorProxyCommandInput
  | GetVoiceConnectorStreamingConfigurationCommandInput
  | GetVoiceConnectorTerminationCommandInput
  | GetVoiceConnectorTerminationHealthCommandInput
  | GetVoiceProfileCommandInput
  | GetVoiceProfileDomainCommandInput
  | GetVoiceToneAnalysisTaskCommandInput
  | ListAvailableVoiceConnectorRegionsCommandInput
  | ListPhoneNumberOrdersCommandInput
  | ListPhoneNumbersCommandInput
  | ListProxySessionsCommandInput
  | ListSipMediaApplicationsCommandInput
  | ListSipRulesCommandInput
  | ListSupportedPhoneNumberCountriesCommandInput
  | ListTagsForResourceCommandInput
  | ListVoiceConnectorGroupsCommandInput
  | ListVoiceConnectorTerminationCredentialsCommandInput
  | ListVoiceConnectorsCommandInput
  | ListVoiceProfileDomainsCommandInput
  | ListVoiceProfilesCommandInput
  | PutSipMediaApplicationAlexaSkillConfigurationCommandInput
  | PutSipMediaApplicationLoggingConfigurationCommandInput
  | PutVoiceConnectorEmergencyCallingConfigurationCommandInput
  | PutVoiceConnectorExternalSystemsConfigurationCommandInput
  | PutVoiceConnectorLoggingConfigurationCommandInput
  | PutVoiceConnectorOriginationCommandInput
  | PutVoiceConnectorProxyCommandInput
  | PutVoiceConnectorStreamingConfigurationCommandInput
  | PutVoiceConnectorTerminationCommandInput
  | PutVoiceConnectorTerminationCredentialsCommandInput
  | RestorePhoneNumberCommandInput
  | SearchAvailablePhoneNumbersCommandInput
  | StartSpeakerSearchTaskCommandInput
  | StartVoiceToneAnalysisTaskCommandInput
  | StopSpeakerSearchTaskCommandInput
  | StopVoiceToneAnalysisTaskCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateGlobalSettingsCommandInput
  | UpdatePhoneNumberCommandInput
  | UpdatePhoneNumberSettingsCommandInput
  | UpdateProxySessionCommandInput
  | UpdateSipMediaApplicationCallCommandInput
  | UpdateSipMediaApplicationCommandInput
  | UpdateSipRuleCommandInput
  | UpdateVoiceConnectorCommandInput
  | UpdateVoiceConnectorGroupCommandInput
  | UpdateVoiceProfileCommandInput
  | UpdateVoiceProfileDomainCommandInput
  | ValidateE911AddressCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociatePhoneNumbersWithVoiceConnectorCommandOutput
  | AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput
  | BatchDeletePhoneNumberCommandOutput
  | BatchUpdatePhoneNumberCommandOutput
  | CreatePhoneNumberOrderCommandOutput
  | CreateProxySessionCommandOutput
  | CreateSipMediaApplicationCallCommandOutput
  | CreateSipMediaApplicationCommandOutput
  | CreateSipRuleCommandOutput
  | CreateVoiceConnectorCommandOutput
  | CreateVoiceConnectorGroupCommandOutput
  | CreateVoiceProfileCommandOutput
  | CreateVoiceProfileDomainCommandOutput
  | DeletePhoneNumberCommandOutput
  | DeleteProxySessionCommandOutput
  | DeleteSipMediaApplicationCommandOutput
  | DeleteSipRuleCommandOutput
  | DeleteVoiceConnectorCommandOutput
  | DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput
  | DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput
  | DeleteVoiceConnectorGroupCommandOutput
  | DeleteVoiceConnectorOriginationCommandOutput
  | DeleteVoiceConnectorProxyCommandOutput
  | DeleteVoiceConnectorStreamingConfigurationCommandOutput
  | DeleteVoiceConnectorTerminationCommandOutput
  | DeleteVoiceConnectorTerminationCredentialsCommandOutput
  | DeleteVoiceProfileCommandOutput
  | DeleteVoiceProfileDomainCommandOutput
  | DisassociatePhoneNumbersFromVoiceConnectorCommandOutput
  | DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput
  | GetGlobalSettingsCommandOutput
  | GetPhoneNumberCommandOutput
  | GetPhoneNumberOrderCommandOutput
  | GetPhoneNumberSettingsCommandOutput
  | GetProxySessionCommandOutput
  | GetSipMediaApplicationAlexaSkillConfigurationCommandOutput
  | GetSipMediaApplicationCommandOutput
  | GetSipMediaApplicationLoggingConfigurationCommandOutput
  | GetSipRuleCommandOutput
  | GetSpeakerSearchTaskCommandOutput
  | GetVoiceConnectorCommandOutput
  | GetVoiceConnectorEmergencyCallingConfigurationCommandOutput
  | GetVoiceConnectorExternalSystemsConfigurationCommandOutput
  | GetVoiceConnectorGroupCommandOutput
  | GetVoiceConnectorLoggingConfigurationCommandOutput
  | GetVoiceConnectorOriginationCommandOutput
  | GetVoiceConnectorProxyCommandOutput
  | GetVoiceConnectorStreamingConfigurationCommandOutput
  | GetVoiceConnectorTerminationCommandOutput
  | GetVoiceConnectorTerminationHealthCommandOutput
  | GetVoiceProfileCommandOutput
  | GetVoiceProfileDomainCommandOutput
  | GetVoiceToneAnalysisTaskCommandOutput
  | ListAvailableVoiceConnectorRegionsCommandOutput
  | ListPhoneNumberOrdersCommandOutput
  | ListPhoneNumbersCommandOutput
  | ListProxySessionsCommandOutput
  | ListSipMediaApplicationsCommandOutput
  | ListSipRulesCommandOutput
  | ListSupportedPhoneNumberCountriesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVoiceConnectorGroupsCommandOutput
  | ListVoiceConnectorTerminationCredentialsCommandOutput
  | ListVoiceConnectorsCommandOutput
  | ListVoiceProfileDomainsCommandOutput
  | ListVoiceProfilesCommandOutput
  | PutSipMediaApplicationAlexaSkillConfigurationCommandOutput
  | PutSipMediaApplicationLoggingConfigurationCommandOutput
  | PutVoiceConnectorEmergencyCallingConfigurationCommandOutput
  | PutVoiceConnectorExternalSystemsConfigurationCommandOutput
  | PutVoiceConnectorLoggingConfigurationCommandOutput
  | PutVoiceConnectorOriginationCommandOutput
  | PutVoiceConnectorProxyCommandOutput
  | PutVoiceConnectorStreamingConfigurationCommandOutput
  | PutVoiceConnectorTerminationCommandOutput
  | PutVoiceConnectorTerminationCredentialsCommandOutput
  | RestorePhoneNumberCommandOutput
  | SearchAvailablePhoneNumbersCommandOutput
  | StartSpeakerSearchTaskCommandOutput
  | StartVoiceToneAnalysisTaskCommandOutput
  | StopSpeakerSearchTaskCommandOutput
  | StopVoiceToneAnalysisTaskCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateGlobalSettingsCommandOutput
  | UpdatePhoneNumberCommandOutput
  | UpdatePhoneNumberSettingsCommandOutput
  | UpdateProxySessionCommandOutput
  | UpdateSipMediaApplicationCallCommandOutput
  | UpdateSipMediaApplicationCommandOutput
  | UpdateSipRuleCommandOutput
  | UpdateVoiceConnectorCommandOutput
  | UpdateVoiceConnectorGroupCommandOutput
  | UpdateVoiceProfileCommandOutput
  | UpdateVoiceProfileDomainCommandOutput
  | ValidateE911AddressCommandOutput;

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
export type ChimeSDKVoiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ChimeSDKVoiceClient class constructor that set the region, credentials and other options.
 */
export interface ChimeSDKVoiceClientConfig extends ChimeSDKVoiceClientConfigType {}

/**
 * @public
 */
export type ChimeSDKVoiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ChimeSDKVoiceClient class. This is resolved and normalized from the {@link ChimeSDKVoiceClientConfig | constructor configuration interface}.
 */
export interface ChimeSDKVoiceClientResolvedConfig extends ChimeSDKVoiceClientResolvedConfigType {}

/**
 * <p>The Amazon Chime SDK telephony APIs in this section enable developers to create PSTN calling solutions that use Amazon Chime SDK Voice Connectors, and Amazon Chime SDK SIP media applications. Developers can
 *           also order and manage phone numbers, create and manage Voice Connectors and SIP media applications, and run voice analytics.</p>
 * @public
 */
export class ChimeSDKVoiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ChimeSDKVoiceClientResolvedConfig
> {
  /**
   * The resolved configuration of ChimeSDKVoiceClient class. This is resolved and normalized from the {@link ChimeSDKVoiceClientConfig | constructor configuration interface}.
   */
  readonly config: ChimeSDKVoiceClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ChimeSDKVoiceClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultChimeSDKVoiceHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ChimeSDKVoiceClientResolvedConfig) =>
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
