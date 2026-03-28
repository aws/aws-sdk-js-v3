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
  defaultChimeSDKVoiceHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorCommandOutput,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorCommand";
import type {
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorGroupCommand";
import type {
  BatchDeletePhoneNumberCommandInput,
  BatchDeletePhoneNumberCommandOutput,
} from "./commands/BatchDeletePhoneNumberCommand";
import type {
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput,
} from "./commands/BatchUpdatePhoneNumberCommand";
import type {
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
} from "./commands/CreatePhoneNumberOrderCommand";
import type {
  CreateProxySessionCommandInput,
  CreateProxySessionCommandOutput,
} from "./commands/CreateProxySessionCommand";
import type {
  CreateSipMediaApplicationCallCommandInput,
  CreateSipMediaApplicationCallCommandOutput,
} from "./commands/CreateSipMediaApplicationCallCommand";
import type {
  CreateSipMediaApplicationCommandInput,
  CreateSipMediaApplicationCommandOutput,
} from "./commands/CreateSipMediaApplicationCommand";
import type { CreateSipRuleCommandInput, CreateSipRuleCommandOutput } from "./commands/CreateSipRuleCommand";
import type {
  CreateVoiceConnectorCommandInput,
  CreateVoiceConnectorCommandOutput,
} from "./commands/CreateVoiceConnectorCommand";
import type {
  CreateVoiceConnectorGroupCommandInput,
  CreateVoiceConnectorGroupCommandOutput,
} from "./commands/CreateVoiceConnectorGroupCommand";
import type {
  CreateVoiceProfileCommandInput,
  CreateVoiceProfileCommandOutput,
} from "./commands/CreateVoiceProfileCommand";
import type {
  CreateVoiceProfileDomainCommandInput,
  CreateVoiceProfileDomainCommandOutput,
} from "./commands/CreateVoiceProfileDomainCommand";
import type {
  DeletePhoneNumberCommandInput,
  DeletePhoneNumberCommandOutput,
} from "./commands/DeletePhoneNumberCommand";
import type {
  DeleteProxySessionCommandInput,
  DeleteProxySessionCommandOutput,
} from "./commands/DeleteProxySessionCommand";
import type {
  DeleteSipMediaApplicationCommandInput,
  DeleteSipMediaApplicationCommandOutput,
} from "./commands/DeleteSipMediaApplicationCommand";
import type { DeleteSipRuleCommandInput, DeleteSipRuleCommandOutput } from "./commands/DeleteSipRuleCommand";
import type {
  DeleteVoiceConnectorCommandInput,
  DeleteVoiceConnectorCommandOutput,
} from "./commands/DeleteVoiceConnectorCommand";
import type {
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorEmergencyCallingConfigurationCommand";
import type {
  DeleteVoiceConnectorExternalSystemsConfigurationCommandInput,
  DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorExternalSystemsConfigurationCommand";
import type {
  DeleteVoiceConnectorGroupCommandInput,
  DeleteVoiceConnectorGroupCommandOutput,
} from "./commands/DeleteVoiceConnectorGroupCommand";
import type {
  DeleteVoiceConnectorOriginationCommandInput,
  DeleteVoiceConnectorOriginationCommandOutput,
} from "./commands/DeleteVoiceConnectorOriginationCommand";
import type {
  DeleteVoiceConnectorProxyCommandInput,
  DeleteVoiceConnectorProxyCommandOutput,
} from "./commands/DeleteVoiceConnectorProxyCommand";
import type {
  DeleteVoiceConnectorStreamingConfigurationCommandInput,
  DeleteVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorStreamingConfigurationCommand";
import type {
  DeleteVoiceConnectorTerminationCommandInput,
  DeleteVoiceConnectorTerminationCommandOutput,
} from "./commands/DeleteVoiceConnectorTerminationCommand";
import type {
  DeleteVoiceConnectorTerminationCredentialsCommandInput,
  DeleteVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/DeleteVoiceConnectorTerminationCredentialsCommand";
import type {
  DeleteVoiceProfileCommandInput,
  DeleteVoiceProfileCommandOutput,
} from "./commands/DeleteVoiceProfileCommand";
import type {
  DeleteVoiceProfileDomainCommandInput,
  DeleteVoiceProfileDomainCommandOutput,
} from "./commands/DeleteVoiceProfileDomainCommand";
import type {
  DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorCommandOutput,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorCommand";
import type {
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
import type {
  GetGlobalSettingsCommandInput,
  GetGlobalSettingsCommandOutput,
} from "./commands/GetGlobalSettingsCommand";
import type { GetPhoneNumberCommandInput, GetPhoneNumberCommandOutput } from "./commands/GetPhoneNumberCommand";
import type {
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput,
} from "./commands/GetPhoneNumberOrderCommand";
import type {
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput,
} from "./commands/GetPhoneNumberSettingsCommand";
import type { GetProxySessionCommandInput, GetProxySessionCommandOutput } from "./commands/GetProxySessionCommand";
import type {
  GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
  GetSipMediaApplicationAlexaSkillConfigurationCommandOutput,
} from "./commands/GetSipMediaApplicationAlexaSkillConfigurationCommand";
import type {
  GetSipMediaApplicationCommandInput,
  GetSipMediaApplicationCommandOutput,
} from "./commands/GetSipMediaApplicationCommand";
import type {
  GetSipMediaApplicationLoggingConfigurationCommandInput,
  GetSipMediaApplicationLoggingConfigurationCommandOutput,
} from "./commands/GetSipMediaApplicationLoggingConfigurationCommand";
import type { GetSipRuleCommandInput, GetSipRuleCommandOutput } from "./commands/GetSipRuleCommand";
import type {
  GetSpeakerSearchTaskCommandInput,
  GetSpeakerSearchTaskCommandOutput,
} from "./commands/GetSpeakerSearchTaskCommand";
import type {
  GetVoiceConnectorCommandInput,
  GetVoiceConnectorCommandOutput,
} from "./commands/GetVoiceConnectorCommand";
import type {
  GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  GetVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorEmergencyCallingConfigurationCommand";
import type {
  GetVoiceConnectorExternalSystemsConfigurationCommandInput,
  GetVoiceConnectorExternalSystemsConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorExternalSystemsConfigurationCommand";
import type {
  GetVoiceConnectorGroupCommandInput,
  GetVoiceConnectorGroupCommandOutput,
} from "./commands/GetVoiceConnectorGroupCommand";
import type {
  GetVoiceConnectorLoggingConfigurationCommandInput,
  GetVoiceConnectorLoggingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorLoggingConfigurationCommand";
import type {
  GetVoiceConnectorOriginationCommandInput,
  GetVoiceConnectorOriginationCommandOutput,
} from "./commands/GetVoiceConnectorOriginationCommand";
import type {
  GetVoiceConnectorProxyCommandInput,
  GetVoiceConnectorProxyCommandOutput,
} from "./commands/GetVoiceConnectorProxyCommand";
import type {
  GetVoiceConnectorStreamingConfigurationCommandInput,
  GetVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorStreamingConfigurationCommand";
import type {
  GetVoiceConnectorTerminationCommandInput,
  GetVoiceConnectorTerminationCommandOutput,
} from "./commands/GetVoiceConnectorTerminationCommand";
import type {
  GetVoiceConnectorTerminationHealthCommandInput,
  GetVoiceConnectorTerminationHealthCommandOutput,
} from "./commands/GetVoiceConnectorTerminationHealthCommand";
import type { GetVoiceProfileCommandInput, GetVoiceProfileCommandOutput } from "./commands/GetVoiceProfileCommand";
import type {
  GetVoiceProfileDomainCommandInput,
  GetVoiceProfileDomainCommandOutput,
} from "./commands/GetVoiceProfileDomainCommand";
import type {
  GetVoiceToneAnalysisTaskCommandInput,
  GetVoiceToneAnalysisTaskCommandOutput,
} from "./commands/GetVoiceToneAnalysisTaskCommand";
import type {
  ListAvailableVoiceConnectorRegionsCommandInput,
  ListAvailableVoiceConnectorRegionsCommandOutput,
} from "./commands/ListAvailableVoiceConnectorRegionsCommand";
import type {
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "./commands/ListPhoneNumberOrdersCommand";
import type { ListPhoneNumbersCommandInput, ListPhoneNumbersCommandOutput } from "./commands/ListPhoneNumbersCommand";
import type {
  ListProxySessionsCommandInput,
  ListProxySessionsCommandOutput,
} from "./commands/ListProxySessionsCommand";
import type {
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "./commands/ListSipMediaApplicationsCommand";
import type { ListSipRulesCommandInput, ListSipRulesCommandOutput } from "./commands/ListSipRulesCommand";
import type {
  ListSupportedPhoneNumberCountriesCommandInput,
  ListSupportedPhoneNumberCountriesCommandOutput,
} from "./commands/ListSupportedPhoneNumberCountriesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
} from "./commands/ListVoiceConnectorGroupsCommand";
import type {
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "./commands/ListVoiceConnectorsCommand";
import type {
  ListVoiceConnectorTerminationCredentialsCommandInput,
  ListVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/ListVoiceConnectorTerminationCredentialsCommand";
import type {
  ListVoiceProfileDomainsCommandInput,
  ListVoiceProfileDomainsCommandOutput,
} from "./commands/ListVoiceProfileDomainsCommand";
import type {
  ListVoiceProfilesCommandInput,
  ListVoiceProfilesCommandOutput,
} from "./commands/ListVoiceProfilesCommand";
import type {
  PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
  PutSipMediaApplicationAlexaSkillConfigurationCommandOutput,
} from "./commands/PutSipMediaApplicationAlexaSkillConfigurationCommand";
import type {
  PutSipMediaApplicationLoggingConfigurationCommandInput,
  PutSipMediaApplicationLoggingConfigurationCommandOutput,
} from "./commands/PutSipMediaApplicationLoggingConfigurationCommand";
import type {
  PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  PutVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorEmergencyCallingConfigurationCommand";
import type {
  PutVoiceConnectorExternalSystemsConfigurationCommandInput,
  PutVoiceConnectorExternalSystemsConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorExternalSystemsConfigurationCommand";
import type {
  PutVoiceConnectorLoggingConfigurationCommandInput,
  PutVoiceConnectorLoggingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorLoggingConfigurationCommand";
import type {
  PutVoiceConnectorOriginationCommandInput,
  PutVoiceConnectorOriginationCommandOutput,
} from "./commands/PutVoiceConnectorOriginationCommand";
import type {
  PutVoiceConnectorProxyCommandInput,
  PutVoiceConnectorProxyCommandOutput,
} from "./commands/PutVoiceConnectorProxyCommand";
import type {
  PutVoiceConnectorStreamingConfigurationCommandInput,
  PutVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorStreamingConfigurationCommand";
import type {
  PutVoiceConnectorTerminationCommandInput,
  PutVoiceConnectorTerminationCommandOutput,
} from "./commands/PutVoiceConnectorTerminationCommand";
import type {
  PutVoiceConnectorTerminationCredentialsCommandInput,
  PutVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/PutVoiceConnectorTerminationCredentialsCommand";
import type {
  RestorePhoneNumberCommandInput,
  RestorePhoneNumberCommandOutput,
} from "./commands/RestorePhoneNumberCommand";
import type {
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import type {
  StartSpeakerSearchTaskCommandInput,
  StartSpeakerSearchTaskCommandOutput,
} from "./commands/StartSpeakerSearchTaskCommand";
import type {
  StartVoiceToneAnalysisTaskCommandInput,
  StartVoiceToneAnalysisTaskCommandOutput,
} from "./commands/StartVoiceToneAnalysisTaskCommand";
import type {
  StopSpeakerSearchTaskCommandInput,
  StopSpeakerSearchTaskCommandOutput,
} from "./commands/StopSpeakerSearchTaskCommand";
import type {
  StopVoiceToneAnalysisTaskCommandInput,
  StopVoiceToneAnalysisTaskCommandOutput,
} from "./commands/StopVoiceToneAnalysisTaskCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import type {
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
} from "./commands/UpdatePhoneNumberCommand";
import type {
  UpdatePhoneNumberSettingsCommandInput,
  UpdatePhoneNumberSettingsCommandOutput,
} from "./commands/UpdatePhoneNumberSettingsCommand";
import type {
  UpdateProxySessionCommandInput,
  UpdateProxySessionCommandOutput,
} from "./commands/UpdateProxySessionCommand";
import type {
  UpdateSipMediaApplicationCallCommandInput,
  UpdateSipMediaApplicationCallCommandOutput,
} from "./commands/UpdateSipMediaApplicationCallCommand";
import type {
  UpdateSipMediaApplicationCommandInput,
  UpdateSipMediaApplicationCommandOutput,
} from "./commands/UpdateSipMediaApplicationCommand";
import type { UpdateSipRuleCommandInput, UpdateSipRuleCommandOutput } from "./commands/UpdateSipRuleCommand";
import type {
  UpdateVoiceConnectorCommandInput,
  UpdateVoiceConnectorCommandOutput,
} from "./commands/UpdateVoiceConnectorCommand";
import type {
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput,
} from "./commands/UpdateVoiceConnectorGroupCommand";
import type {
  UpdateVoiceProfileCommandInput,
  UpdateVoiceProfileCommandOutput,
} from "./commands/UpdateVoiceProfileCommand";
import type {
  UpdateVoiceProfileDomainCommandInput,
  UpdateVoiceProfileDomainCommandOutput,
} from "./commands/UpdateVoiceProfileDomainCommand";
import type {
  ValidateE911AddressCommandInput,
  ValidateE911AddressCommandOutput,
} from "./commands/ValidateE911AddressCommand";
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
