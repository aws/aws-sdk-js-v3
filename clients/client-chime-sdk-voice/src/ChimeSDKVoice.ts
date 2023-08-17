// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { ChimeSDKVoiceClient, ChimeSDKVoiceClientConfig } from "./ChimeSDKVoiceClient";
import {
  AssociatePhoneNumbersWithVoiceConnectorCommand,
  AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorCommandOutput,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorCommand";
import {
  AssociatePhoneNumbersWithVoiceConnectorGroupCommand,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorGroupCommand";
import {
  BatchDeletePhoneNumberCommand,
  BatchDeletePhoneNumberCommandInput,
  BatchDeletePhoneNumberCommandOutput,
} from "./commands/BatchDeletePhoneNumberCommand";
import {
  BatchUpdatePhoneNumberCommand,
  BatchUpdatePhoneNumberCommandInput,
  BatchUpdatePhoneNumberCommandOutput,
} from "./commands/BatchUpdatePhoneNumberCommand";
import {
  CreatePhoneNumberOrderCommand,
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
} from "./commands/CreatePhoneNumberOrderCommand";
import {
  CreateProxySessionCommand,
  CreateProxySessionCommandInput,
  CreateProxySessionCommandOutput,
} from "./commands/CreateProxySessionCommand";
import {
  CreateSipMediaApplicationCallCommand,
  CreateSipMediaApplicationCallCommandInput,
  CreateSipMediaApplicationCallCommandOutput,
} from "./commands/CreateSipMediaApplicationCallCommand";
import {
  CreateSipMediaApplicationCommand,
  CreateSipMediaApplicationCommandInput,
  CreateSipMediaApplicationCommandOutput,
} from "./commands/CreateSipMediaApplicationCommand";
import {
  CreateSipRuleCommand,
  CreateSipRuleCommandInput,
  CreateSipRuleCommandOutput,
} from "./commands/CreateSipRuleCommand";
import {
  CreateVoiceConnectorCommand,
  CreateVoiceConnectorCommandInput,
  CreateVoiceConnectorCommandOutput,
} from "./commands/CreateVoiceConnectorCommand";
import {
  CreateVoiceConnectorGroupCommand,
  CreateVoiceConnectorGroupCommandInput,
  CreateVoiceConnectorGroupCommandOutput,
} from "./commands/CreateVoiceConnectorGroupCommand";
import {
  CreateVoiceProfileCommand,
  CreateVoiceProfileCommandInput,
  CreateVoiceProfileCommandOutput,
} from "./commands/CreateVoiceProfileCommand";
import {
  CreateVoiceProfileDomainCommand,
  CreateVoiceProfileDomainCommandInput,
  CreateVoiceProfileDomainCommandOutput,
} from "./commands/CreateVoiceProfileDomainCommand";
import {
  DeletePhoneNumberCommand,
  DeletePhoneNumberCommandInput,
  DeletePhoneNumberCommandOutput,
} from "./commands/DeletePhoneNumberCommand";
import {
  DeleteProxySessionCommand,
  DeleteProxySessionCommandInput,
  DeleteProxySessionCommandOutput,
} from "./commands/DeleteProxySessionCommand";
import {
  DeleteSipMediaApplicationCommand,
  DeleteSipMediaApplicationCommandInput,
  DeleteSipMediaApplicationCommandOutput,
} from "./commands/DeleteSipMediaApplicationCommand";
import {
  DeleteSipRuleCommand,
  DeleteSipRuleCommandInput,
  DeleteSipRuleCommandOutput,
} from "./commands/DeleteSipRuleCommand";
import {
  DeleteVoiceConnectorCommand,
  DeleteVoiceConnectorCommandInput,
  DeleteVoiceConnectorCommandOutput,
} from "./commands/DeleteVoiceConnectorCommand";
import {
  DeleteVoiceConnectorEmergencyCallingConfigurationCommand,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  DeleteVoiceConnectorGroupCommand,
  DeleteVoiceConnectorGroupCommandInput,
  DeleteVoiceConnectorGroupCommandOutput,
} from "./commands/DeleteVoiceConnectorGroupCommand";
import {
  DeleteVoiceConnectorOriginationCommand,
  DeleteVoiceConnectorOriginationCommandInput,
  DeleteVoiceConnectorOriginationCommandOutput,
} from "./commands/DeleteVoiceConnectorOriginationCommand";
import {
  DeleteVoiceConnectorProxyCommand,
  DeleteVoiceConnectorProxyCommandInput,
  DeleteVoiceConnectorProxyCommandOutput,
} from "./commands/DeleteVoiceConnectorProxyCommand";
import {
  DeleteVoiceConnectorStreamingConfigurationCommand,
  DeleteVoiceConnectorStreamingConfigurationCommandInput,
  DeleteVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/DeleteVoiceConnectorStreamingConfigurationCommand";
import {
  DeleteVoiceConnectorTerminationCommand,
  DeleteVoiceConnectorTerminationCommandInput,
  DeleteVoiceConnectorTerminationCommandOutput,
} from "./commands/DeleteVoiceConnectorTerminationCommand";
import {
  DeleteVoiceConnectorTerminationCredentialsCommand,
  DeleteVoiceConnectorTerminationCredentialsCommandInput,
  DeleteVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/DeleteVoiceConnectorTerminationCredentialsCommand";
import {
  DeleteVoiceProfileCommand,
  DeleteVoiceProfileCommandInput,
  DeleteVoiceProfileCommandOutput,
} from "./commands/DeleteVoiceProfileCommand";
import {
  DeleteVoiceProfileDomainCommand,
  DeleteVoiceProfileDomainCommandInput,
  DeleteVoiceProfileDomainCommandOutput,
} from "./commands/DeleteVoiceProfileDomainCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
  DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorCommandOutput,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorCommand";
import {
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
import {
  GetGlobalSettingsCommand,
  GetGlobalSettingsCommandInput,
  GetGlobalSettingsCommandOutput,
} from "./commands/GetGlobalSettingsCommand";
import {
  GetPhoneNumberCommand,
  GetPhoneNumberCommandInput,
  GetPhoneNumberCommandOutput,
} from "./commands/GetPhoneNumberCommand";
import {
  GetPhoneNumberOrderCommand,
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput,
} from "./commands/GetPhoneNumberOrderCommand";
import {
  GetPhoneNumberSettingsCommand,
  GetPhoneNumberSettingsCommandInput,
  GetPhoneNumberSettingsCommandOutput,
} from "./commands/GetPhoneNumberSettingsCommand";
import {
  GetProxySessionCommand,
  GetProxySessionCommandInput,
  GetProxySessionCommandOutput,
} from "./commands/GetProxySessionCommand";
import {
  GetSipMediaApplicationAlexaSkillConfigurationCommand,
  GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
  GetSipMediaApplicationAlexaSkillConfigurationCommandOutput,
} from "./commands/GetSipMediaApplicationAlexaSkillConfigurationCommand";
import {
  GetSipMediaApplicationCommand,
  GetSipMediaApplicationCommandInput,
  GetSipMediaApplicationCommandOutput,
} from "./commands/GetSipMediaApplicationCommand";
import {
  GetSipMediaApplicationLoggingConfigurationCommand,
  GetSipMediaApplicationLoggingConfigurationCommandInput,
  GetSipMediaApplicationLoggingConfigurationCommandOutput,
} from "./commands/GetSipMediaApplicationLoggingConfigurationCommand";
import { GetSipRuleCommand, GetSipRuleCommandInput, GetSipRuleCommandOutput } from "./commands/GetSipRuleCommand";
import {
  GetSpeakerSearchTaskCommand,
  GetSpeakerSearchTaskCommandInput,
  GetSpeakerSearchTaskCommandOutput,
} from "./commands/GetSpeakerSearchTaskCommand";
import {
  GetVoiceConnectorCommand,
  GetVoiceConnectorCommandInput,
  GetVoiceConnectorCommandOutput,
} from "./commands/GetVoiceConnectorCommand";
import {
  GetVoiceConnectorEmergencyCallingConfigurationCommand,
  GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  GetVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  GetVoiceConnectorGroupCommand,
  GetVoiceConnectorGroupCommandInput,
  GetVoiceConnectorGroupCommandOutput,
} from "./commands/GetVoiceConnectorGroupCommand";
import {
  GetVoiceConnectorLoggingConfigurationCommand,
  GetVoiceConnectorLoggingConfigurationCommandInput,
  GetVoiceConnectorLoggingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorLoggingConfigurationCommand";
import {
  GetVoiceConnectorOriginationCommand,
  GetVoiceConnectorOriginationCommandInput,
  GetVoiceConnectorOriginationCommandOutput,
} from "./commands/GetVoiceConnectorOriginationCommand";
import {
  GetVoiceConnectorProxyCommand,
  GetVoiceConnectorProxyCommandInput,
  GetVoiceConnectorProxyCommandOutput,
} from "./commands/GetVoiceConnectorProxyCommand";
import {
  GetVoiceConnectorStreamingConfigurationCommand,
  GetVoiceConnectorStreamingConfigurationCommandInput,
  GetVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/GetVoiceConnectorStreamingConfigurationCommand";
import {
  GetVoiceConnectorTerminationCommand,
  GetVoiceConnectorTerminationCommandInput,
  GetVoiceConnectorTerminationCommandOutput,
} from "./commands/GetVoiceConnectorTerminationCommand";
import {
  GetVoiceConnectorTerminationHealthCommand,
  GetVoiceConnectorTerminationHealthCommandInput,
  GetVoiceConnectorTerminationHealthCommandOutput,
} from "./commands/GetVoiceConnectorTerminationHealthCommand";
import {
  GetVoiceProfileCommand,
  GetVoiceProfileCommandInput,
  GetVoiceProfileCommandOutput,
} from "./commands/GetVoiceProfileCommand";
import {
  GetVoiceProfileDomainCommand,
  GetVoiceProfileDomainCommandInput,
  GetVoiceProfileDomainCommandOutput,
} from "./commands/GetVoiceProfileDomainCommand";
import {
  GetVoiceToneAnalysisTaskCommand,
  GetVoiceToneAnalysisTaskCommandInput,
  GetVoiceToneAnalysisTaskCommandOutput,
} from "./commands/GetVoiceToneAnalysisTaskCommand";
import {
  ListAvailableVoiceConnectorRegionsCommand,
  ListAvailableVoiceConnectorRegionsCommandInput,
  ListAvailableVoiceConnectorRegionsCommandOutput,
} from "./commands/ListAvailableVoiceConnectorRegionsCommand";
import {
  ListPhoneNumberOrdersCommand,
  ListPhoneNumberOrdersCommandInput,
  ListPhoneNumberOrdersCommandOutput,
} from "./commands/ListPhoneNumberOrdersCommand";
import {
  ListPhoneNumbersCommand,
  ListPhoneNumbersCommandInput,
  ListPhoneNumbersCommandOutput,
} from "./commands/ListPhoneNumbersCommand";
import {
  ListProxySessionsCommand,
  ListProxySessionsCommandInput,
  ListProxySessionsCommandOutput,
} from "./commands/ListProxySessionsCommand";
import {
  ListSipMediaApplicationsCommand,
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "./commands/ListSipMediaApplicationsCommand";
import {
  ListSipRulesCommand,
  ListSipRulesCommandInput,
  ListSipRulesCommandOutput,
} from "./commands/ListSipRulesCommand";
import {
  ListSupportedPhoneNumberCountriesCommand,
  ListSupportedPhoneNumberCountriesCommandInput,
  ListSupportedPhoneNumberCountriesCommandOutput,
} from "./commands/ListSupportedPhoneNumberCountriesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVoiceConnectorGroupsCommand,
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
} from "./commands/ListVoiceConnectorGroupsCommand";
import {
  ListVoiceConnectorsCommand,
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "./commands/ListVoiceConnectorsCommand";
import {
  ListVoiceConnectorTerminationCredentialsCommand,
  ListVoiceConnectorTerminationCredentialsCommandInput,
  ListVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/ListVoiceConnectorTerminationCredentialsCommand";
import {
  ListVoiceProfileDomainsCommand,
  ListVoiceProfileDomainsCommandInput,
  ListVoiceProfileDomainsCommandOutput,
} from "./commands/ListVoiceProfileDomainsCommand";
import {
  ListVoiceProfilesCommand,
  ListVoiceProfilesCommandInput,
  ListVoiceProfilesCommandOutput,
} from "./commands/ListVoiceProfilesCommand";
import {
  PutSipMediaApplicationAlexaSkillConfigurationCommand,
  PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
  PutSipMediaApplicationAlexaSkillConfigurationCommandOutput,
} from "./commands/PutSipMediaApplicationAlexaSkillConfigurationCommand";
import {
  PutSipMediaApplicationLoggingConfigurationCommand,
  PutSipMediaApplicationLoggingConfigurationCommandInput,
  PutSipMediaApplicationLoggingConfigurationCommandOutput,
} from "./commands/PutSipMediaApplicationLoggingConfigurationCommand";
import {
  PutVoiceConnectorEmergencyCallingConfigurationCommand,
  PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  PutVoiceConnectorEmergencyCallingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  PutVoiceConnectorLoggingConfigurationCommand,
  PutVoiceConnectorLoggingConfigurationCommandInput,
  PutVoiceConnectorLoggingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorLoggingConfigurationCommand";
import {
  PutVoiceConnectorOriginationCommand,
  PutVoiceConnectorOriginationCommandInput,
  PutVoiceConnectorOriginationCommandOutput,
} from "./commands/PutVoiceConnectorOriginationCommand";
import {
  PutVoiceConnectorProxyCommand,
  PutVoiceConnectorProxyCommandInput,
  PutVoiceConnectorProxyCommandOutput,
} from "./commands/PutVoiceConnectorProxyCommand";
import {
  PutVoiceConnectorStreamingConfigurationCommand,
  PutVoiceConnectorStreamingConfigurationCommandInput,
  PutVoiceConnectorStreamingConfigurationCommandOutput,
} from "./commands/PutVoiceConnectorStreamingConfigurationCommand";
import {
  PutVoiceConnectorTerminationCommand,
  PutVoiceConnectorTerminationCommandInput,
  PutVoiceConnectorTerminationCommandOutput,
} from "./commands/PutVoiceConnectorTerminationCommand";
import {
  PutVoiceConnectorTerminationCredentialsCommand,
  PutVoiceConnectorTerminationCredentialsCommandInput,
  PutVoiceConnectorTerminationCredentialsCommandOutput,
} from "./commands/PutVoiceConnectorTerminationCredentialsCommand";
import {
  RestorePhoneNumberCommand,
  RestorePhoneNumberCommandInput,
  RestorePhoneNumberCommandOutput,
} from "./commands/RestorePhoneNumberCommand";
import {
  SearchAvailablePhoneNumbersCommand,
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import {
  StartSpeakerSearchTaskCommand,
  StartSpeakerSearchTaskCommandInput,
  StartSpeakerSearchTaskCommandOutput,
} from "./commands/StartSpeakerSearchTaskCommand";
import {
  StartVoiceToneAnalysisTaskCommand,
  StartVoiceToneAnalysisTaskCommandInput,
  StartVoiceToneAnalysisTaskCommandOutput,
} from "./commands/StartVoiceToneAnalysisTaskCommand";
import {
  StopSpeakerSearchTaskCommand,
  StopSpeakerSearchTaskCommandInput,
  StopSpeakerSearchTaskCommandOutput,
} from "./commands/StopSpeakerSearchTaskCommand";
import {
  StopVoiceToneAnalysisTaskCommand,
  StopVoiceToneAnalysisTaskCommandInput,
  StopVoiceToneAnalysisTaskCommandOutput,
} from "./commands/StopVoiceToneAnalysisTaskCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateGlobalSettingsCommand,
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import {
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberCommandInput,
  UpdatePhoneNumberCommandOutput,
} from "./commands/UpdatePhoneNumberCommand";
import {
  UpdatePhoneNumberSettingsCommand,
  UpdatePhoneNumberSettingsCommandInput,
  UpdatePhoneNumberSettingsCommandOutput,
} from "./commands/UpdatePhoneNumberSettingsCommand";
import {
  UpdateProxySessionCommand,
  UpdateProxySessionCommandInput,
  UpdateProxySessionCommandOutput,
} from "./commands/UpdateProxySessionCommand";
import {
  UpdateSipMediaApplicationCallCommand,
  UpdateSipMediaApplicationCallCommandInput,
  UpdateSipMediaApplicationCallCommandOutput,
} from "./commands/UpdateSipMediaApplicationCallCommand";
import {
  UpdateSipMediaApplicationCommand,
  UpdateSipMediaApplicationCommandInput,
  UpdateSipMediaApplicationCommandOutput,
} from "./commands/UpdateSipMediaApplicationCommand";
import {
  UpdateSipRuleCommand,
  UpdateSipRuleCommandInput,
  UpdateSipRuleCommandOutput,
} from "./commands/UpdateSipRuleCommand";
import {
  UpdateVoiceConnectorCommand,
  UpdateVoiceConnectorCommandInput,
  UpdateVoiceConnectorCommandOutput,
} from "./commands/UpdateVoiceConnectorCommand";
import {
  UpdateVoiceConnectorGroupCommand,
  UpdateVoiceConnectorGroupCommandInput,
  UpdateVoiceConnectorGroupCommandOutput,
} from "./commands/UpdateVoiceConnectorGroupCommand";
import {
  UpdateVoiceProfileCommand,
  UpdateVoiceProfileCommandInput,
  UpdateVoiceProfileCommandOutput,
} from "./commands/UpdateVoiceProfileCommand";
import {
  UpdateVoiceProfileDomainCommand,
  UpdateVoiceProfileDomainCommandInput,
  UpdateVoiceProfileDomainCommandOutput,
} from "./commands/UpdateVoiceProfileDomainCommand";
import {
  ValidateE911AddressCommand,
  ValidateE911AddressCommandInput,
  ValidateE911AddressCommandOutput,
} from "./commands/ValidateE911AddressCommand";

const commands = {
  AssociatePhoneNumbersWithVoiceConnectorCommand,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommand,
  BatchDeletePhoneNumberCommand,
  BatchUpdatePhoneNumberCommand,
  CreatePhoneNumberOrderCommand,
  CreateProxySessionCommand,
  CreateSipMediaApplicationCommand,
  CreateSipMediaApplicationCallCommand,
  CreateSipRuleCommand,
  CreateVoiceConnectorCommand,
  CreateVoiceConnectorGroupCommand,
  CreateVoiceProfileCommand,
  CreateVoiceProfileDomainCommand,
  DeletePhoneNumberCommand,
  DeleteProxySessionCommand,
  DeleteSipMediaApplicationCommand,
  DeleteSipRuleCommand,
  DeleteVoiceConnectorCommand,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommand,
  DeleteVoiceConnectorGroupCommand,
  DeleteVoiceConnectorOriginationCommand,
  DeleteVoiceConnectorProxyCommand,
  DeleteVoiceConnectorStreamingConfigurationCommand,
  DeleteVoiceConnectorTerminationCommand,
  DeleteVoiceConnectorTerminationCredentialsCommand,
  DeleteVoiceProfileCommand,
  DeleteVoiceProfileDomainCommand,
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
  GetGlobalSettingsCommand,
  GetPhoneNumberCommand,
  GetPhoneNumberOrderCommand,
  GetPhoneNumberSettingsCommand,
  GetProxySessionCommand,
  GetSipMediaApplicationCommand,
  GetSipMediaApplicationAlexaSkillConfigurationCommand,
  GetSipMediaApplicationLoggingConfigurationCommand,
  GetSipRuleCommand,
  GetSpeakerSearchTaskCommand,
  GetVoiceConnectorCommand,
  GetVoiceConnectorEmergencyCallingConfigurationCommand,
  GetVoiceConnectorGroupCommand,
  GetVoiceConnectorLoggingConfigurationCommand,
  GetVoiceConnectorOriginationCommand,
  GetVoiceConnectorProxyCommand,
  GetVoiceConnectorStreamingConfigurationCommand,
  GetVoiceConnectorTerminationCommand,
  GetVoiceConnectorTerminationHealthCommand,
  GetVoiceProfileCommand,
  GetVoiceProfileDomainCommand,
  GetVoiceToneAnalysisTaskCommand,
  ListAvailableVoiceConnectorRegionsCommand,
  ListPhoneNumberOrdersCommand,
  ListPhoneNumbersCommand,
  ListProxySessionsCommand,
  ListSipMediaApplicationsCommand,
  ListSipRulesCommand,
  ListSupportedPhoneNumberCountriesCommand,
  ListTagsForResourceCommand,
  ListVoiceConnectorGroupsCommand,
  ListVoiceConnectorsCommand,
  ListVoiceConnectorTerminationCredentialsCommand,
  ListVoiceProfileDomainsCommand,
  ListVoiceProfilesCommand,
  PutSipMediaApplicationAlexaSkillConfigurationCommand,
  PutSipMediaApplicationLoggingConfigurationCommand,
  PutVoiceConnectorEmergencyCallingConfigurationCommand,
  PutVoiceConnectorLoggingConfigurationCommand,
  PutVoiceConnectorOriginationCommand,
  PutVoiceConnectorProxyCommand,
  PutVoiceConnectorStreamingConfigurationCommand,
  PutVoiceConnectorTerminationCommand,
  PutVoiceConnectorTerminationCredentialsCommand,
  RestorePhoneNumberCommand,
  SearchAvailablePhoneNumbersCommand,
  StartSpeakerSearchTaskCommand,
  StartVoiceToneAnalysisTaskCommand,
  StopSpeakerSearchTaskCommand,
  StopVoiceToneAnalysisTaskCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateGlobalSettingsCommand,
  UpdatePhoneNumberCommand,
  UpdatePhoneNumberSettingsCommand,
  UpdateProxySessionCommand,
  UpdateSipMediaApplicationCommand,
  UpdateSipMediaApplicationCallCommand,
  UpdateSipRuleCommand,
  UpdateVoiceConnectorCommand,
  UpdateVoiceConnectorGroupCommand,
  UpdateVoiceProfileCommand,
  UpdateVoiceProfileDomainCommand,
  ValidateE911AddressCommand,
};

export interface ChimeSDKVoice {
  /**
   * @see {@link AssociatePhoneNumbersWithVoiceConnectorCommand}
   */
  associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput>;
  associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): void;
  associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociatePhoneNumbersWithVoiceConnectorGroupCommand}
   */
  associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput>;
  associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): void;
  associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeletePhoneNumberCommand}
   */
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeletePhoneNumberCommandOutput>;
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;
  batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdatePhoneNumberCommand}
   */
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdatePhoneNumberCommandOutput>;
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;
  batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePhoneNumberOrderCommand}
   */
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePhoneNumberOrderCommandOutput>;
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;
  createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProxySessionCommand}
   */
  createProxySession(
    args: CreateProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProxySessionCommandOutput>;
  createProxySession(
    args: CreateProxySessionCommandInput,
    cb: (err: any, data?: CreateProxySessionCommandOutput) => void
  ): void;
  createProxySession(
    args: CreateProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProxySessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSipMediaApplicationCommand}
   */
  createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipMediaApplicationCommandOutput>;
  createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    cb: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): void;
  createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSipMediaApplicationCallCommand}
   */
  createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipMediaApplicationCallCommandOutput>;
  createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    cb: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): void;
  createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSipRuleCommand}
   */
  createSipRule(args: CreateSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateSipRuleCommandOutput>;
  createSipRule(args: CreateSipRuleCommandInput, cb: (err: any, data?: CreateSipRuleCommandOutput) => void): void;
  createSipRule(
    args: CreateSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVoiceConnectorCommand}
   */
  createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceConnectorCommandOutput>;
  createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    cb: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): void;
  createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVoiceConnectorGroupCommand}
   */
  createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceConnectorGroupCommandOutput>;
  createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): void;
  createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVoiceProfileCommand}
   */
  createVoiceProfile(
    args: CreateVoiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceProfileCommandOutput>;
  createVoiceProfile(
    args: CreateVoiceProfileCommandInput,
    cb: (err: any, data?: CreateVoiceProfileCommandOutput) => void
  ): void;
  createVoiceProfile(
    args: CreateVoiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVoiceProfileDomainCommand}
   */
  createVoiceProfileDomain(
    args: CreateVoiceProfileDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceProfileDomainCommandOutput>;
  createVoiceProfileDomain(
    args: CreateVoiceProfileDomainCommandInput,
    cb: (err: any, data?: CreateVoiceProfileDomainCommandOutput) => void
  ): void;
  createVoiceProfileDomain(
    args: CreateVoiceProfileDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceProfileDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePhoneNumberCommand}
   */
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePhoneNumberCommandOutput>;
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;
  deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProxySessionCommand}
   */
  deleteProxySession(
    args: DeleteProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProxySessionCommandOutput>;
  deleteProxySession(
    args: DeleteProxySessionCommandInput,
    cb: (err: any, data?: DeleteProxySessionCommandOutput) => void
  ): void;
  deleteProxySession(
    args: DeleteProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProxySessionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSipMediaApplicationCommand}
   */
  deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSipMediaApplicationCommandOutput>;
  deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    cb: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): void;
  deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSipRuleCommand}
   */
  deleteSipRule(args: DeleteSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSipRuleCommandOutput>;
  deleteSipRule(args: DeleteSipRuleCommandInput, cb: (err: any, data?: DeleteSipRuleCommandOutput) => void): void;
  deleteSipRule(
    args: DeleteSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSipRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorCommand}
   */
  deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorCommandOutput>;
  deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): void;
  deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorEmergencyCallingConfigurationCommand}
   */
  deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorGroupCommand}
   */
  deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorGroupCommandOutput>;
  deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): void;
  deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorOriginationCommand}
   */
  deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorOriginationCommandOutput>;
  deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): void;
  deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorProxyCommand}
   */
  deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorProxyCommandOutput>;
  deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): void;
  deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorStreamingConfigurationCommand}
   */
  deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput>;
  deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorTerminationCommand}
   */
  deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorTerminationCommandOutput>;
  deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): void;
  deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceConnectorTerminationCredentialsCommand}
   */
  deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput>;
  deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceProfileCommand}
   */
  deleteVoiceProfile(
    args: DeleteVoiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceProfileCommandOutput>;
  deleteVoiceProfile(
    args: DeleteVoiceProfileCommandInput,
    cb: (err: any, data?: DeleteVoiceProfileCommandOutput) => void
  ): void;
  deleteVoiceProfile(
    args: DeleteVoiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVoiceProfileDomainCommand}
   */
  deleteVoiceProfileDomain(
    args: DeleteVoiceProfileDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceProfileDomainCommandOutput>;
  deleteVoiceProfileDomain(
    args: DeleteVoiceProfileDomainCommandInput,
    cb: (err: any, data?: DeleteVoiceProfileDomainCommandOutput) => void
  ): void;
  deleteVoiceProfileDomain(
    args: DeleteVoiceProfileDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceProfileDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePhoneNumbersFromVoiceConnectorCommand}
   */
  disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput>;
  disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): void;
  disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociatePhoneNumbersFromVoiceConnectorGroupCommand}
   */
  disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput>;
  disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
  ): void;
  disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGlobalSettingsCommand}
   */
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGlobalSettingsCommandOutput>;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;
  getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPhoneNumberCommand}
   */
  getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberCommandOutput>;
  getPhoneNumber(args: GetPhoneNumberCommandInput, cb: (err: any, data?: GetPhoneNumberCommandOutput) => void): void;
  getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPhoneNumberOrderCommand}
   */
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberOrderCommandOutput>;
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;
  getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPhoneNumberSettingsCommand}
   */
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberSettingsCommandOutput>;
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;
  getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProxySessionCommand}
   */
  getProxySession(
    args: GetProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProxySessionCommandOutput>;
  getProxySession(args: GetProxySessionCommandInput, cb: (err: any, data?: GetProxySessionCommandOutput) => void): void;
  getProxySession(
    args: GetProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProxySessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSipMediaApplicationCommand}
   */
  getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationCommandOutput>;
  getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): void;
  getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSipMediaApplicationAlexaSkillConfigurationCommand}
   */
  getSipMediaApplicationAlexaSkillConfiguration(
    args: GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationAlexaSkillConfigurationCommandOutput>;
  getSipMediaApplicationAlexaSkillConfiguration(
    args: GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void
  ): void;
  getSipMediaApplicationAlexaSkillConfiguration(
    args: GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSipMediaApplicationLoggingConfigurationCommand}
   */
  getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput>;
  getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSipRuleCommand}
   */
  getSipRule(args: GetSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetSipRuleCommandOutput>;
  getSipRule(args: GetSipRuleCommandInput, cb: (err: any, data?: GetSipRuleCommandOutput) => void): void;
  getSipRule(
    args: GetSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSpeakerSearchTaskCommand}
   */
  getSpeakerSearchTask(
    args: GetSpeakerSearchTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSpeakerSearchTaskCommandOutput>;
  getSpeakerSearchTask(
    args: GetSpeakerSearchTaskCommandInput,
    cb: (err: any, data?: GetSpeakerSearchTaskCommandOutput) => void
  ): void;
  getSpeakerSearchTask(
    args: GetSpeakerSearchTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSpeakerSearchTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorCommand}
   */
  getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorCommandOutput>;
  getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    cb: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): void;
  getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorEmergencyCallingConfigurationCommand}
   */
  getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorGroupCommand}
   */
  getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorGroupCommandOutput>;
  getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): void;
  getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorLoggingConfigurationCommand}
   */
  getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput>;
  getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorOriginationCommand}
   */
  getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorOriginationCommandOutput>;
  getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): void;
  getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorProxyCommand}
   */
  getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorProxyCommandOutput>;
  getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): void;
  getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorStreamingConfigurationCommand}
   */
  getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput>;
  getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorTerminationCommand}
   */
  getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorTerminationCommandOutput>;
  getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): void;
  getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceConnectorTerminationHealthCommand}
   */
  getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorTerminationHealthCommandOutput>;
  getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
  ): void;
  getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceProfileCommand}
   */
  getVoiceProfile(
    args: GetVoiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceProfileCommandOutput>;
  getVoiceProfile(args: GetVoiceProfileCommandInput, cb: (err: any, data?: GetVoiceProfileCommandOutput) => void): void;
  getVoiceProfile(
    args: GetVoiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceProfileDomainCommand}
   */
  getVoiceProfileDomain(
    args: GetVoiceProfileDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceProfileDomainCommandOutput>;
  getVoiceProfileDomain(
    args: GetVoiceProfileDomainCommandInput,
    cb: (err: any, data?: GetVoiceProfileDomainCommandOutput) => void
  ): void;
  getVoiceProfileDomain(
    args: GetVoiceProfileDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceProfileDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVoiceToneAnalysisTaskCommand}
   */
  getVoiceToneAnalysisTask(
    args: GetVoiceToneAnalysisTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceToneAnalysisTaskCommandOutput>;
  getVoiceToneAnalysisTask(
    args: GetVoiceToneAnalysisTaskCommandInput,
    cb: (err: any, data?: GetVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  getVoiceToneAnalysisTask(
    args: GetVoiceToneAnalysisTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceToneAnalysisTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableVoiceConnectorRegionsCommand}
   */
  listAvailableVoiceConnectorRegions(
    args: ListAvailableVoiceConnectorRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableVoiceConnectorRegionsCommandOutput>;
  listAvailableVoiceConnectorRegions(
    args: ListAvailableVoiceConnectorRegionsCommandInput,
    cb: (err: any, data?: ListAvailableVoiceConnectorRegionsCommandOutput) => void
  ): void;
  listAvailableVoiceConnectorRegions(
    args: ListAvailableVoiceConnectorRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableVoiceConnectorRegionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPhoneNumberOrdersCommand}
   */
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumberOrdersCommandOutput>;
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;
  listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPhoneNumbersCommand}
   */
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumbersCommandOutput>;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProxySessionsCommand}
   */
  listProxySessions(
    args: ListProxySessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProxySessionsCommandOutput>;
  listProxySessions(
    args: ListProxySessionsCommandInput,
    cb: (err: any, data?: ListProxySessionsCommandOutput) => void
  ): void;
  listProxySessions(
    args: ListProxySessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProxySessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSipMediaApplicationsCommand}
   */
  listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSipMediaApplicationsCommandOutput>;
  listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    cb: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): void;
  listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSipRulesCommand}
   */
  listSipRules(args: ListSipRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListSipRulesCommandOutput>;
  listSipRules(args: ListSipRulesCommandInput, cb: (err: any, data?: ListSipRulesCommandOutput) => void): void;
  listSipRules(
    args: ListSipRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSipRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSupportedPhoneNumberCountriesCommand}
   */
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSupportedPhoneNumberCountriesCommandOutput>;
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): void;
  listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVoiceConnectorGroupsCommand}
   */
  listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorGroupsCommandOutput>;
  listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): void;
  listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVoiceConnectorsCommand}
   */
  listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorsCommandOutput>;
  listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): void;
  listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVoiceConnectorTerminationCredentialsCommand}
   */
  listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput>;
  listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVoiceProfileDomainsCommand}
   */
  listVoiceProfileDomains(
    args: ListVoiceProfileDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceProfileDomainsCommandOutput>;
  listVoiceProfileDomains(
    args: ListVoiceProfileDomainsCommandInput,
    cb: (err: any, data?: ListVoiceProfileDomainsCommandOutput) => void
  ): void;
  listVoiceProfileDomains(
    args: ListVoiceProfileDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceProfileDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVoiceProfilesCommand}
   */
  listVoiceProfiles(
    args: ListVoiceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceProfilesCommandOutput>;
  listVoiceProfiles(
    args: ListVoiceProfilesCommandInput,
    cb: (err: any, data?: ListVoiceProfilesCommandOutput) => void
  ): void;
  listVoiceProfiles(
    args: ListVoiceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSipMediaApplicationAlexaSkillConfigurationCommand}
   */
  putSipMediaApplicationAlexaSkillConfiguration(
    args: PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSipMediaApplicationAlexaSkillConfigurationCommandOutput>;
  putSipMediaApplicationAlexaSkillConfiguration(
    args: PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
    cb: (err: any, data?: PutSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void
  ): void;
  putSipMediaApplicationAlexaSkillConfiguration(
    args: PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSipMediaApplicationLoggingConfigurationCommand}
   */
  putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput>;
  putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorEmergencyCallingConfigurationCommand}
   */
  putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorLoggingConfigurationCommand}
   */
  putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput>;
  putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorOriginationCommand}
   */
  putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorOriginationCommandOutput>;
  putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): void;
  putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorProxyCommand}
   */
  putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorProxyCommandOutput>;
  putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): void;
  putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorStreamingConfigurationCommand}
   */
  putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput>;
  putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorTerminationCommand}
   */
  putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorTerminationCommandOutput>;
  putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): void;
  putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutVoiceConnectorTerminationCredentialsCommand}
   */
  putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput>;
  putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link RestorePhoneNumberCommand}
   */
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestorePhoneNumberCommandOutput>;
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;
  restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAvailablePhoneNumbersCommand}
   */
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAvailablePhoneNumbersCommandOutput>;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;
  searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;

  /**
   * @see {@link StartSpeakerSearchTaskCommand}
   */
  startSpeakerSearchTask(
    args: StartSpeakerSearchTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSpeakerSearchTaskCommandOutput>;
  startSpeakerSearchTask(
    args: StartSpeakerSearchTaskCommandInput,
    cb: (err: any, data?: StartSpeakerSearchTaskCommandOutput) => void
  ): void;
  startSpeakerSearchTask(
    args: StartSpeakerSearchTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSpeakerSearchTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StartVoiceToneAnalysisTaskCommand}
   */
  startVoiceToneAnalysisTask(
    args: StartVoiceToneAnalysisTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVoiceToneAnalysisTaskCommandOutput>;
  startVoiceToneAnalysisTask(
    args: StartVoiceToneAnalysisTaskCommandInput,
    cb: (err: any, data?: StartVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  startVoiceToneAnalysisTask(
    args: StartVoiceToneAnalysisTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVoiceToneAnalysisTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StopSpeakerSearchTaskCommand}
   */
  stopSpeakerSearchTask(
    args: StopSpeakerSearchTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSpeakerSearchTaskCommandOutput>;
  stopSpeakerSearchTask(
    args: StopSpeakerSearchTaskCommandInput,
    cb: (err: any, data?: StopSpeakerSearchTaskCommandOutput) => void
  ): void;
  stopSpeakerSearchTask(
    args: StopSpeakerSearchTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSpeakerSearchTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link StopVoiceToneAnalysisTaskCommand}
   */
  stopVoiceToneAnalysisTask(
    args: StopVoiceToneAnalysisTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopVoiceToneAnalysisTaskCommandOutput>;
  stopVoiceToneAnalysisTask(
    args: StopVoiceToneAnalysisTaskCommandInput,
    cb: (err: any, data?: StopVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  stopVoiceToneAnalysisTask(
    args: StopVoiceToneAnalysisTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopVoiceToneAnalysisTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalSettingsCommand}
   */
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePhoneNumberCommand}
   */
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberCommandOutput>;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePhoneNumberSettingsCommand}
   */
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberSettingsCommandOutput>;
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;
  updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProxySessionCommand}
   */
  updateProxySession(
    args: UpdateProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProxySessionCommandOutput>;
  updateProxySession(
    args: UpdateProxySessionCommandInput,
    cb: (err: any, data?: UpdateProxySessionCommandOutput) => void
  ): void;
  updateProxySession(
    args: UpdateProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProxySessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSipMediaApplicationCommand}
   */
  updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipMediaApplicationCommandOutput>;
  updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    cb: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): void;
  updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSipMediaApplicationCallCommand}
   */
  updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipMediaApplicationCallCommandOutput>;
  updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    cb: (err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void
  ): void;
  updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSipRuleCommand}
   */
  updateSipRule(args: UpdateSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSipRuleCommandOutput>;
  updateSipRule(args: UpdateSipRuleCommandInput, cb: (err: any, data?: UpdateSipRuleCommandOutput) => void): void;
  updateSipRule(
    args: UpdateSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVoiceConnectorCommand}
   */
  updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceConnectorCommandOutput>;
  updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    cb: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): void;
  updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVoiceConnectorGroupCommand}
   */
  updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceConnectorGroupCommandOutput>;
  updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): void;
  updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVoiceProfileCommand}
   */
  updateVoiceProfile(
    args: UpdateVoiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceProfileCommandOutput>;
  updateVoiceProfile(
    args: UpdateVoiceProfileCommandInput,
    cb: (err: any, data?: UpdateVoiceProfileCommandOutput) => void
  ): void;
  updateVoiceProfile(
    args: UpdateVoiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVoiceProfileDomainCommand}
   */
  updateVoiceProfileDomain(
    args: UpdateVoiceProfileDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceProfileDomainCommandOutput>;
  updateVoiceProfileDomain(
    args: UpdateVoiceProfileDomainCommandInput,
    cb: (err: any, data?: UpdateVoiceProfileDomainCommandOutput) => void
  ): void;
  updateVoiceProfileDomain(
    args: UpdateVoiceProfileDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceProfileDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidateE911AddressCommand}
   */
  validateE911Address(
    args: ValidateE911AddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateE911AddressCommandOutput>;
  validateE911Address(
    args: ValidateE911AddressCommandInput,
    cb: (err: any, data?: ValidateE911AddressCommandOutput) => void
  ): void;
  validateE911Address(
    args: ValidateE911AddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateE911AddressCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The Amazon Chime SDK telephony APIs in this section enable developers to create PSTN calling solutions that use Amazon Chime SDK Voice Connectors, and Amazon Chime SDK SIP media applications. Developers can
 *           also order and manage phone numbers, create and manage Voice Connectors and SIP media applications, and run voice analytics.</p>
 */
export class ChimeSDKVoice extends ChimeSDKVoiceClient implements ChimeSDKVoice {}
createAggregatedClient(commands, ChimeSDKVoice);
