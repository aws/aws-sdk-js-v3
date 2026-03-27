// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "./ChimeSDKVoiceClient";
import {
  type AssociatePhoneNumbersWithVoiceConnectorCommandInput,
  type AssociatePhoneNumbersWithVoiceConnectorCommandOutput,
  AssociatePhoneNumbersWithVoiceConnectorCommand,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorCommand";
import {
  type AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
  type AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput,
  AssociatePhoneNumbersWithVoiceConnectorGroupCommand,
} from "./commands/AssociatePhoneNumbersWithVoiceConnectorGroupCommand";
import {
  type BatchDeletePhoneNumberCommandInput,
  type BatchDeletePhoneNumberCommandOutput,
  BatchDeletePhoneNumberCommand,
} from "./commands/BatchDeletePhoneNumberCommand";
import {
  type BatchUpdatePhoneNumberCommandInput,
  type BatchUpdatePhoneNumberCommandOutput,
  BatchUpdatePhoneNumberCommand,
} from "./commands/BatchUpdatePhoneNumberCommand";
import {
  type CreatePhoneNumberOrderCommandInput,
  type CreatePhoneNumberOrderCommandOutput,
  CreatePhoneNumberOrderCommand,
} from "./commands/CreatePhoneNumberOrderCommand";
import {
  type CreateProxySessionCommandInput,
  type CreateProxySessionCommandOutput,
  CreateProxySessionCommand,
} from "./commands/CreateProxySessionCommand";
import {
  type CreateSipMediaApplicationCallCommandInput,
  type CreateSipMediaApplicationCallCommandOutput,
  CreateSipMediaApplicationCallCommand,
} from "./commands/CreateSipMediaApplicationCallCommand";
import {
  type CreateSipMediaApplicationCommandInput,
  type CreateSipMediaApplicationCommandOutput,
  CreateSipMediaApplicationCommand,
} from "./commands/CreateSipMediaApplicationCommand";
import {
  type CreateSipRuleCommandInput,
  type CreateSipRuleCommandOutput,
  CreateSipRuleCommand,
} from "./commands/CreateSipRuleCommand";
import {
  type CreateVoiceConnectorCommandInput,
  type CreateVoiceConnectorCommandOutput,
  CreateVoiceConnectorCommand,
} from "./commands/CreateVoiceConnectorCommand";
import {
  type CreateVoiceConnectorGroupCommandInput,
  type CreateVoiceConnectorGroupCommandOutput,
  CreateVoiceConnectorGroupCommand,
} from "./commands/CreateVoiceConnectorGroupCommand";
import {
  type CreateVoiceProfileCommandInput,
  type CreateVoiceProfileCommandOutput,
  CreateVoiceProfileCommand,
} from "./commands/CreateVoiceProfileCommand";
import {
  type CreateVoiceProfileDomainCommandInput,
  type CreateVoiceProfileDomainCommandOutput,
  CreateVoiceProfileDomainCommand,
} from "./commands/CreateVoiceProfileDomainCommand";
import {
  type DeletePhoneNumberCommandInput,
  type DeletePhoneNumberCommandOutput,
  DeletePhoneNumberCommand,
} from "./commands/DeletePhoneNumberCommand";
import {
  type DeleteProxySessionCommandInput,
  type DeleteProxySessionCommandOutput,
  DeleteProxySessionCommand,
} from "./commands/DeleteProxySessionCommand";
import {
  type DeleteSipMediaApplicationCommandInput,
  type DeleteSipMediaApplicationCommandOutput,
  DeleteSipMediaApplicationCommand,
} from "./commands/DeleteSipMediaApplicationCommand";
import {
  type DeleteSipRuleCommandInput,
  type DeleteSipRuleCommandOutput,
  DeleteSipRuleCommand,
} from "./commands/DeleteSipRuleCommand";
import {
  type DeleteVoiceConnectorCommandInput,
  type DeleteVoiceConnectorCommandOutput,
  DeleteVoiceConnectorCommand,
} from "./commands/DeleteVoiceConnectorCommand";
import {
  type DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
  type DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput,
  DeleteVoiceConnectorEmergencyCallingConfigurationCommand,
} from "./commands/DeleteVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  type DeleteVoiceConnectorExternalSystemsConfigurationCommandInput,
  type DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput,
  DeleteVoiceConnectorExternalSystemsConfigurationCommand,
} from "./commands/DeleteVoiceConnectorExternalSystemsConfigurationCommand";
import {
  type DeleteVoiceConnectorGroupCommandInput,
  type DeleteVoiceConnectorGroupCommandOutput,
  DeleteVoiceConnectorGroupCommand,
} from "./commands/DeleteVoiceConnectorGroupCommand";
import {
  type DeleteVoiceConnectorOriginationCommandInput,
  type DeleteVoiceConnectorOriginationCommandOutput,
  DeleteVoiceConnectorOriginationCommand,
} from "./commands/DeleteVoiceConnectorOriginationCommand";
import {
  type DeleteVoiceConnectorProxyCommandInput,
  type DeleteVoiceConnectorProxyCommandOutput,
  DeleteVoiceConnectorProxyCommand,
} from "./commands/DeleteVoiceConnectorProxyCommand";
import {
  type DeleteVoiceConnectorStreamingConfigurationCommandInput,
  type DeleteVoiceConnectorStreamingConfigurationCommandOutput,
  DeleteVoiceConnectorStreamingConfigurationCommand,
} from "./commands/DeleteVoiceConnectorStreamingConfigurationCommand";
import {
  type DeleteVoiceConnectorTerminationCommandInput,
  type DeleteVoiceConnectorTerminationCommandOutput,
  DeleteVoiceConnectorTerminationCommand,
} from "./commands/DeleteVoiceConnectorTerminationCommand";
import {
  type DeleteVoiceConnectorTerminationCredentialsCommandInput,
  type DeleteVoiceConnectorTerminationCredentialsCommandOutput,
  DeleteVoiceConnectorTerminationCredentialsCommand,
} from "./commands/DeleteVoiceConnectorTerminationCredentialsCommand";
import {
  type DeleteVoiceProfileCommandInput,
  type DeleteVoiceProfileCommandOutput,
  DeleteVoiceProfileCommand,
} from "./commands/DeleteVoiceProfileCommand";
import {
  type DeleteVoiceProfileDomainCommandInput,
  type DeleteVoiceProfileDomainCommandOutput,
  DeleteVoiceProfileDomainCommand,
} from "./commands/DeleteVoiceProfileDomainCommand";
import {
  type DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
  type DisassociatePhoneNumbersFromVoiceConnectorCommandOutput,
  DisassociatePhoneNumbersFromVoiceConnectorCommand,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorCommand";
import {
  type DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
  type DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput,
  DisassociatePhoneNumbersFromVoiceConnectorGroupCommand,
} from "./commands/DisassociatePhoneNumbersFromVoiceConnectorGroupCommand";
import {
  type GetGlobalSettingsCommandInput,
  type GetGlobalSettingsCommandOutput,
  GetGlobalSettingsCommand,
} from "./commands/GetGlobalSettingsCommand";
import {
  type GetPhoneNumberCommandInput,
  type GetPhoneNumberCommandOutput,
  GetPhoneNumberCommand,
} from "./commands/GetPhoneNumberCommand";
import {
  type GetPhoneNumberOrderCommandInput,
  type GetPhoneNumberOrderCommandOutput,
  GetPhoneNumberOrderCommand,
} from "./commands/GetPhoneNumberOrderCommand";
import {
  type GetPhoneNumberSettingsCommandInput,
  type GetPhoneNumberSettingsCommandOutput,
  GetPhoneNumberSettingsCommand,
} from "./commands/GetPhoneNumberSettingsCommand";
import {
  type GetProxySessionCommandInput,
  type GetProxySessionCommandOutput,
  GetProxySessionCommand,
} from "./commands/GetProxySessionCommand";
import {
  type GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
  type GetSipMediaApplicationAlexaSkillConfigurationCommandOutput,
  GetSipMediaApplicationAlexaSkillConfigurationCommand,
} from "./commands/GetSipMediaApplicationAlexaSkillConfigurationCommand";
import {
  type GetSipMediaApplicationCommandInput,
  type GetSipMediaApplicationCommandOutput,
  GetSipMediaApplicationCommand,
} from "./commands/GetSipMediaApplicationCommand";
import {
  type GetSipMediaApplicationLoggingConfigurationCommandInput,
  type GetSipMediaApplicationLoggingConfigurationCommandOutput,
  GetSipMediaApplicationLoggingConfigurationCommand,
} from "./commands/GetSipMediaApplicationLoggingConfigurationCommand";
import {
  type GetSipRuleCommandInput,
  type GetSipRuleCommandOutput,
  GetSipRuleCommand,
} from "./commands/GetSipRuleCommand";
import {
  type GetSpeakerSearchTaskCommandInput,
  type GetSpeakerSearchTaskCommandOutput,
  GetSpeakerSearchTaskCommand,
} from "./commands/GetSpeakerSearchTaskCommand";
import {
  type GetVoiceConnectorCommandInput,
  type GetVoiceConnectorCommandOutput,
  GetVoiceConnectorCommand,
} from "./commands/GetVoiceConnectorCommand";
import {
  type GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
  type GetVoiceConnectorEmergencyCallingConfigurationCommandOutput,
  GetVoiceConnectorEmergencyCallingConfigurationCommand,
} from "./commands/GetVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  type GetVoiceConnectorExternalSystemsConfigurationCommandInput,
  type GetVoiceConnectorExternalSystemsConfigurationCommandOutput,
  GetVoiceConnectorExternalSystemsConfigurationCommand,
} from "./commands/GetVoiceConnectorExternalSystemsConfigurationCommand";
import {
  type GetVoiceConnectorGroupCommandInput,
  type GetVoiceConnectorGroupCommandOutput,
  GetVoiceConnectorGroupCommand,
} from "./commands/GetVoiceConnectorGroupCommand";
import {
  type GetVoiceConnectorLoggingConfigurationCommandInput,
  type GetVoiceConnectorLoggingConfigurationCommandOutput,
  GetVoiceConnectorLoggingConfigurationCommand,
} from "./commands/GetVoiceConnectorLoggingConfigurationCommand";
import {
  type GetVoiceConnectorOriginationCommandInput,
  type GetVoiceConnectorOriginationCommandOutput,
  GetVoiceConnectorOriginationCommand,
} from "./commands/GetVoiceConnectorOriginationCommand";
import {
  type GetVoiceConnectorProxyCommandInput,
  type GetVoiceConnectorProxyCommandOutput,
  GetVoiceConnectorProxyCommand,
} from "./commands/GetVoiceConnectorProxyCommand";
import {
  type GetVoiceConnectorStreamingConfigurationCommandInput,
  type GetVoiceConnectorStreamingConfigurationCommandOutput,
  GetVoiceConnectorStreamingConfigurationCommand,
} from "./commands/GetVoiceConnectorStreamingConfigurationCommand";
import {
  type GetVoiceConnectorTerminationCommandInput,
  type GetVoiceConnectorTerminationCommandOutput,
  GetVoiceConnectorTerminationCommand,
} from "./commands/GetVoiceConnectorTerminationCommand";
import {
  type GetVoiceConnectorTerminationHealthCommandInput,
  type GetVoiceConnectorTerminationHealthCommandOutput,
  GetVoiceConnectorTerminationHealthCommand,
} from "./commands/GetVoiceConnectorTerminationHealthCommand";
import {
  type GetVoiceProfileCommandInput,
  type GetVoiceProfileCommandOutput,
  GetVoiceProfileCommand,
} from "./commands/GetVoiceProfileCommand";
import {
  type GetVoiceProfileDomainCommandInput,
  type GetVoiceProfileDomainCommandOutput,
  GetVoiceProfileDomainCommand,
} from "./commands/GetVoiceProfileDomainCommand";
import {
  type GetVoiceToneAnalysisTaskCommandInput,
  type GetVoiceToneAnalysisTaskCommandOutput,
  GetVoiceToneAnalysisTaskCommand,
} from "./commands/GetVoiceToneAnalysisTaskCommand";
import {
  type ListAvailableVoiceConnectorRegionsCommandInput,
  type ListAvailableVoiceConnectorRegionsCommandOutput,
  ListAvailableVoiceConnectorRegionsCommand,
} from "./commands/ListAvailableVoiceConnectorRegionsCommand";
import {
  type ListPhoneNumberOrdersCommandInput,
  type ListPhoneNumberOrdersCommandOutput,
  ListPhoneNumberOrdersCommand,
} from "./commands/ListPhoneNumberOrdersCommand";
import {
  type ListPhoneNumbersCommandInput,
  type ListPhoneNumbersCommandOutput,
  ListPhoneNumbersCommand,
} from "./commands/ListPhoneNumbersCommand";
import {
  type ListProxySessionsCommandInput,
  type ListProxySessionsCommandOutput,
  ListProxySessionsCommand,
} from "./commands/ListProxySessionsCommand";
import {
  type ListSipMediaApplicationsCommandInput,
  type ListSipMediaApplicationsCommandOutput,
  ListSipMediaApplicationsCommand,
} from "./commands/ListSipMediaApplicationsCommand";
import {
  type ListSipRulesCommandInput,
  type ListSipRulesCommandOutput,
  ListSipRulesCommand,
} from "./commands/ListSipRulesCommand";
import {
  type ListSupportedPhoneNumberCountriesCommandInput,
  type ListSupportedPhoneNumberCountriesCommandOutput,
  ListSupportedPhoneNumberCountriesCommand,
} from "./commands/ListSupportedPhoneNumberCountriesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListVoiceConnectorGroupsCommandInput,
  type ListVoiceConnectorGroupsCommandOutput,
  ListVoiceConnectorGroupsCommand,
} from "./commands/ListVoiceConnectorGroupsCommand";
import {
  type ListVoiceConnectorsCommandInput,
  type ListVoiceConnectorsCommandOutput,
  ListVoiceConnectorsCommand,
} from "./commands/ListVoiceConnectorsCommand";
import {
  type ListVoiceConnectorTerminationCredentialsCommandInput,
  type ListVoiceConnectorTerminationCredentialsCommandOutput,
  ListVoiceConnectorTerminationCredentialsCommand,
} from "./commands/ListVoiceConnectorTerminationCredentialsCommand";
import {
  type ListVoiceProfileDomainsCommandInput,
  type ListVoiceProfileDomainsCommandOutput,
  ListVoiceProfileDomainsCommand,
} from "./commands/ListVoiceProfileDomainsCommand";
import {
  type ListVoiceProfilesCommandInput,
  type ListVoiceProfilesCommandOutput,
  ListVoiceProfilesCommand,
} from "./commands/ListVoiceProfilesCommand";
import {
  type PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
  type PutSipMediaApplicationAlexaSkillConfigurationCommandOutput,
  PutSipMediaApplicationAlexaSkillConfigurationCommand,
} from "./commands/PutSipMediaApplicationAlexaSkillConfigurationCommand";
import {
  type PutSipMediaApplicationLoggingConfigurationCommandInput,
  type PutSipMediaApplicationLoggingConfigurationCommandOutput,
  PutSipMediaApplicationLoggingConfigurationCommand,
} from "./commands/PutSipMediaApplicationLoggingConfigurationCommand";
import {
  type PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
  type PutVoiceConnectorEmergencyCallingConfigurationCommandOutput,
  PutVoiceConnectorEmergencyCallingConfigurationCommand,
} from "./commands/PutVoiceConnectorEmergencyCallingConfigurationCommand";
import {
  type PutVoiceConnectorExternalSystemsConfigurationCommandInput,
  type PutVoiceConnectorExternalSystemsConfigurationCommandOutput,
  PutVoiceConnectorExternalSystemsConfigurationCommand,
} from "./commands/PutVoiceConnectorExternalSystemsConfigurationCommand";
import {
  type PutVoiceConnectorLoggingConfigurationCommandInput,
  type PutVoiceConnectorLoggingConfigurationCommandOutput,
  PutVoiceConnectorLoggingConfigurationCommand,
} from "./commands/PutVoiceConnectorLoggingConfigurationCommand";
import {
  type PutVoiceConnectorOriginationCommandInput,
  type PutVoiceConnectorOriginationCommandOutput,
  PutVoiceConnectorOriginationCommand,
} from "./commands/PutVoiceConnectorOriginationCommand";
import {
  type PutVoiceConnectorProxyCommandInput,
  type PutVoiceConnectorProxyCommandOutput,
  PutVoiceConnectorProxyCommand,
} from "./commands/PutVoiceConnectorProxyCommand";
import {
  type PutVoiceConnectorStreamingConfigurationCommandInput,
  type PutVoiceConnectorStreamingConfigurationCommandOutput,
  PutVoiceConnectorStreamingConfigurationCommand,
} from "./commands/PutVoiceConnectorStreamingConfigurationCommand";
import {
  type PutVoiceConnectorTerminationCommandInput,
  type PutVoiceConnectorTerminationCommandOutput,
  PutVoiceConnectorTerminationCommand,
} from "./commands/PutVoiceConnectorTerminationCommand";
import {
  type PutVoiceConnectorTerminationCredentialsCommandInput,
  type PutVoiceConnectorTerminationCredentialsCommandOutput,
  PutVoiceConnectorTerminationCredentialsCommand,
} from "./commands/PutVoiceConnectorTerminationCredentialsCommand";
import {
  type RestorePhoneNumberCommandInput,
  type RestorePhoneNumberCommandOutput,
  RestorePhoneNumberCommand,
} from "./commands/RestorePhoneNumberCommand";
import {
  type SearchAvailablePhoneNumbersCommandInput,
  type SearchAvailablePhoneNumbersCommandOutput,
  SearchAvailablePhoneNumbersCommand,
} from "./commands/SearchAvailablePhoneNumbersCommand";
import {
  type StartSpeakerSearchTaskCommandInput,
  type StartSpeakerSearchTaskCommandOutput,
  StartSpeakerSearchTaskCommand,
} from "./commands/StartSpeakerSearchTaskCommand";
import {
  type StartVoiceToneAnalysisTaskCommandInput,
  type StartVoiceToneAnalysisTaskCommandOutput,
  StartVoiceToneAnalysisTaskCommand,
} from "./commands/StartVoiceToneAnalysisTaskCommand";
import {
  type StopSpeakerSearchTaskCommandInput,
  type StopSpeakerSearchTaskCommandOutput,
  StopSpeakerSearchTaskCommand,
} from "./commands/StopSpeakerSearchTaskCommand";
import {
  type StopVoiceToneAnalysisTaskCommandInput,
  type StopVoiceToneAnalysisTaskCommandOutput,
  StopVoiceToneAnalysisTaskCommand,
} from "./commands/StopVoiceToneAnalysisTaskCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateGlobalSettingsCommandInput,
  type UpdateGlobalSettingsCommandOutput,
  UpdateGlobalSettingsCommand,
} from "./commands/UpdateGlobalSettingsCommand";
import {
  type UpdatePhoneNumberCommandInput,
  type UpdatePhoneNumberCommandOutput,
  UpdatePhoneNumberCommand,
} from "./commands/UpdatePhoneNumberCommand";
import {
  type UpdatePhoneNumberSettingsCommandInput,
  type UpdatePhoneNumberSettingsCommandOutput,
  UpdatePhoneNumberSettingsCommand,
} from "./commands/UpdatePhoneNumberSettingsCommand";
import {
  type UpdateProxySessionCommandInput,
  type UpdateProxySessionCommandOutput,
  UpdateProxySessionCommand,
} from "./commands/UpdateProxySessionCommand";
import {
  type UpdateSipMediaApplicationCallCommandInput,
  type UpdateSipMediaApplicationCallCommandOutput,
  UpdateSipMediaApplicationCallCommand,
} from "./commands/UpdateSipMediaApplicationCallCommand";
import {
  type UpdateSipMediaApplicationCommandInput,
  type UpdateSipMediaApplicationCommandOutput,
  UpdateSipMediaApplicationCommand,
} from "./commands/UpdateSipMediaApplicationCommand";
import {
  type UpdateSipRuleCommandInput,
  type UpdateSipRuleCommandOutput,
  UpdateSipRuleCommand,
} from "./commands/UpdateSipRuleCommand";
import {
  type UpdateVoiceConnectorCommandInput,
  type UpdateVoiceConnectorCommandOutput,
  UpdateVoiceConnectorCommand,
} from "./commands/UpdateVoiceConnectorCommand";
import {
  type UpdateVoiceConnectorGroupCommandInput,
  type UpdateVoiceConnectorGroupCommandOutput,
  UpdateVoiceConnectorGroupCommand,
} from "./commands/UpdateVoiceConnectorGroupCommand";
import {
  type UpdateVoiceProfileCommandInput,
  type UpdateVoiceProfileCommandOutput,
  UpdateVoiceProfileCommand,
} from "./commands/UpdateVoiceProfileCommand";
import {
  type UpdateVoiceProfileDomainCommandInput,
  type UpdateVoiceProfileDomainCommandOutput,
  UpdateVoiceProfileDomainCommand,
} from "./commands/UpdateVoiceProfileDomainCommand";
import {
  type ValidateE911AddressCommandInput,
  type ValidateE911AddressCommandOutput,
  ValidateE911AddressCommand,
} from "./commands/ValidateE911AddressCommand";
import { paginateListPhoneNumberOrders } from "./pagination/ListPhoneNumberOrdersPaginator";
import { paginateListPhoneNumbers } from "./pagination/ListPhoneNumbersPaginator";
import { paginateListProxySessions } from "./pagination/ListProxySessionsPaginator";
import { paginateListSipMediaApplications } from "./pagination/ListSipMediaApplicationsPaginator";
import { paginateListSipRules } from "./pagination/ListSipRulesPaginator";
import { paginateListVoiceConnectorGroups } from "./pagination/ListVoiceConnectorGroupsPaginator";
import { paginateListVoiceConnectors } from "./pagination/ListVoiceConnectorsPaginator";
import { paginateListVoiceProfileDomains } from "./pagination/ListVoiceProfileDomainsPaginator";
import { paginateListVoiceProfiles } from "./pagination/ListVoiceProfilesPaginator";
import { paginateSearchAvailablePhoneNumbers } from "./pagination/SearchAvailablePhoneNumbersPaginator";

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
  DeleteVoiceConnectorExternalSystemsConfigurationCommand,
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
  GetVoiceConnectorExternalSystemsConfigurationCommand,
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
  PutVoiceConnectorExternalSystemsConfigurationCommand,
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
const paginators = {
  paginateListPhoneNumberOrders,
  paginateListPhoneNumbers,
  paginateListProxySessions,
  paginateListSipMediaApplications,
  paginateListSipRules,
  paginateListVoiceConnectorGroups,
  paginateListVoiceConnectors,
  paginateListVoiceProfileDomains,
  paginateListVoiceProfiles,
  paginateSearchAvailablePhoneNumbers,
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
  createSipRule(
    args: CreateSipRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipRuleCommandOutput>;
  createSipRule(
    args: CreateSipRuleCommandInput,
    cb: (err: any, data?: CreateSipRuleCommandOutput) => void
  ): void;
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
  deleteSipRule(
    args: DeleteSipRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSipRuleCommandOutput>;
  deleteSipRule(
    args: DeleteSipRuleCommandInput,
    cb: (err: any, data?: DeleteSipRuleCommandOutput) => void
  ): void;
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
   * @see {@link DeleteVoiceConnectorExternalSystemsConfigurationCommand}
   */
  deleteVoiceConnectorExternalSystemsConfiguration(
    args: DeleteVoiceConnectorExternalSystemsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput>;
  deleteVoiceConnectorExternalSystemsConfiguration(
    args: DeleteVoiceConnectorExternalSystemsConfigurationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput) => void
  ): void;
  deleteVoiceConnectorExternalSystemsConfiguration(
    args: DeleteVoiceConnectorExternalSystemsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorExternalSystemsConfigurationCommandOutput) => void
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
  getGlobalSettings(): Promise<GetGlobalSettingsCommandOutput>;
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
  getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    cb: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): void;
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
  getPhoneNumberSettings(): Promise<GetPhoneNumberSettingsCommandOutput>;
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
  getProxySession(
    args: GetProxySessionCommandInput,
    cb: (err: any, data?: GetProxySessionCommandOutput) => void
  ): void;
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
  getSipRule(
    args: GetSipRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipRuleCommandOutput>;
  getSipRule(
    args: GetSipRuleCommandInput,
    cb: (err: any, data?: GetSipRuleCommandOutput) => void
  ): void;
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
   * @see {@link GetVoiceConnectorExternalSystemsConfigurationCommand}
   */
  getVoiceConnectorExternalSystemsConfiguration(
    args: GetVoiceConnectorExternalSystemsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorExternalSystemsConfigurationCommandOutput>;
  getVoiceConnectorExternalSystemsConfiguration(
    args: GetVoiceConnectorExternalSystemsConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorExternalSystemsConfigurationCommandOutput) => void
  ): void;
  getVoiceConnectorExternalSystemsConfiguration(
    args: GetVoiceConnectorExternalSystemsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorExternalSystemsConfigurationCommandOutput) => void
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
  getVoiceProfile(
    args: GetVoiceProfileCommandInput,
    cb: (err: any, data?: GetVoiceProfileCommandOutput) => void
  ): void;
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
  listAvailableVoiceConnectorRegions(): Promise<ListAvailableVoiceConnectorRegionsCommandOutput>;
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
  listPhoneNumberOrders(): Promise<ListPhoneNumberOrdersCommandOutput>;
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
  listPhoneNumbers(): Promise<ListPhoneNumbersCommandOutput>;
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
  listSipMediaApplications(): Promise<ListSipMediaApplicationsCommandOutput>;
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
  listSipRules(): Promise<ListSipRulesCommandOutput>;
  listSipRules(
    args: ListSipRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSipRulesCommandOutput>;
  listSipRules(
    args: ListSipRulesCommandInput,
    cb: (err: any, data?: ListSipRulesCommandOutput) => void
  ): void;
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
  listVoiceConnectorGroups(): Promise<ListVoiceConnectorGroupsCommandOutput>;
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
  listVoiceConnectors(): Promise<ListVoiceConnectorsCommandOutput>;
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
  listVoiceProfileDomains(): Promise<ListVoiceProfileDomainsCommandOutput>;
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
   * @see {@link PutVoiceConnectorExternalSystemsConfigurationCommand}
   */
  putVoiceConnectorExternalSystemsConfiguration(
    args: PutVoiceConnectorExternalSystemsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorExternalSystemsConfigurationCommandOutput>;
  putVoiceConnectorExternalSystemsConfiguration(
    args: PutVoiceConnectorExternalSystemsConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorExternalSystemsConfigurationCommandOutput) => void
  ): void;
  putVoiceConnectorExternalSystemsConfiguration(
    args: PutVoiceConnectorExternalSystemsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorExternalSystemsConfigurationCommandOutput) => void
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
  searchAvailablePhoneNumbers(): Promise<SearchAvailablePhoneNumbersCommandOutput>;
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalSettingsCommand}
   */
  updateGlobalSettings(): Promise<UpdateGlobalSettingsCommandOutput>;
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
  updateSipRule(
    args: UpdateSipRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipRuleCommandOutput>;
  updateSipRule(
    args: UpdateSipRuleCommandInput,
    cb: (err: any, data?: UpdateSipRuleCommandOutput) => void
  ): void;
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

  /**
   * @see {@link ListPhoneNumberOrdersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPhoneNumberOrdersCommandOutput}.
   */
  paginateListPhoneNumberOrders(
    args?: ListPhoneNumberOrdersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPhoneNumberOrdersCommandOutput>;

  /**
   * @see {@link ListPhoneNumbersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPhoneNumbersCommandOutput}.
   */
  paginateListPhoneNumbers(
    args?: ListPhoneNumbersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPhoneNumbersCommandOutput>;

  /**
   * @see {@link ListProxySessionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProxySessionsCommandOutput}.
   */
  paginateListProxySessions(
    args: ListProxySessionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProxySessionsCommandOutput>;

  /**
   * @see {@link ListSipMediaApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSipMediaApplicationsCommandOutput}.
   */
  paginateListSipMediaApplications(
    args?: ListSipMediaApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSipMediaApplicationsCommandOutput>;

  /**
   * @see {@link ListSipRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSipRulesCommandOutput}.
   */
  paginateListSipRules(
    args?: ListSipRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSipRulesCommandOutput>;

  /**
   * @see {@link ListVoiceConnectorGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVoiceConnectorGroupsCommandOutput}.
   */
  paginateListVoiceConnectorGroups(
    args?: ListVoiceConnectorGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVoiceConnectorGroupsCommandOutput>;

  /**
   * @see {@link ListVoiceConnectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVoiceConnectorsCommandOutput}.
   */
  paginateListVoiceConnectors(
    args?: ListVoiceConnectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVoiceConnectorsCommandOutput>;

  /**
   * @see {@link ListVoiceProfileDomainsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVoiceProfileDomainsCommandOutput}.
   */
  paginateListVoiceProfileDomains(
    args?: ListVoiceProfileDomainsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVoiceProfileDomainsCommandOutput>;

  /**
   * @see {@link ListVoiceProfilesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVoiceProfilesCommandOutput}.
   */
  paginateListVoiceProfiles(
    args: ListVoiceProfilesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVoiceProfilesCommandOutput>;

  /**
   * @see {@link SearchAvailablePhoneNumbersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchAvailablePhoneNumbersCommandOutput}.
   */
  paginateSearchAvailablePhoneNumbers(
    args?: SearchAvailablePhoneNumbersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchAvailablePhoneNumbersCommandOutput>;
}

/**
 * <p>The Amazon Chime SDK telephony APIs in this section enable developers to create PSTN calling solutions that use Amazon Chime SDK Voice Connectors, and Amazon Chime SDK SIP media applications. Developers can
 *           also order and manage phone numbers, create and manage Voice Connectors and SIP media applications, and run voice analytics.</p>
 * @public
 */
export class ChimeSDKVoice extends ChimeSDKVoiceClient implements ChimeSDKVoice {}
createAggregatedClient(commands, ChimeSDKVoice, { paginators });
