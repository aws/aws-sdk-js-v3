// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ChimeSDKVoiceClient } from "./ChimeSDKVoiceClient";
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

/**
 * @public
 * <p>The Amazon Chime SDK telephony APIs in this section enable developers to create PSTN calling solutions that use Amazon Chime SDK Voice Connectors, and Amazon Chime SDK SIP media applications. Developers can
 *           also order and manage phone numbers, create and manage Voice Connectors and SIP media applications, and run voice analytics.</p>
 */
export class ChimeSDKVoice extends ChimeSDKVoiceClient {
  /**
   * @public
   * <p>Associates phone numbers with the specified Amazon Chime SDK Voice Connector.</p>
   */
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput>;
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnector(
    args: AssociatePhoneNumbersWithVoiceConnectorCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorCommandOutput) => void
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorCommandOutput> | void {
    const command = new AssociatePhoneNumbersWithVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Associates phone numbers with the specified Amazon Chime SDK Voice Connector group.</p>
   */
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput>;
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): void;
  public associatePhoneNumbersWithVoiceConnectorGroup(
    args: AssociatePhoneNumbersWithVoiceConnectorGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput) => void
  ): Promise<AssociatePhoneNumbersWithVoiceConnectorGroupCommandOutput> | void {
    const command = new AssociatePhoneNumbersWithVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>
   *          Moves phone numbers into the
   *          <b>Deletion queue</b>. Phone numbers must be disassociated from any users or Amazon Chime SDK Voice Connectors before they can be deleted.
   *       </p>
   *          <p>
   *          Phone numbers remain in the
   *          <b>Deletion queue</b> for 7 days before they are deleted permanently.
   *       </p>
   */
  public batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeletePhoneNumberCommandOutput>;
  public batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;
  public batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): void;
  public batchDeletePhoneNumber(
    args: BatchDeletePhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeletePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: BatchDeletePhoneNumberCommandOutput) => void
  ): Promise<BatchDeletePhoneNumberCommandOutput> | void {
    const command = new BatchDeletePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates one or more phone numbers.</p>
   */
  public batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdatePhoneNumberCommandOutput>;
  public batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;
  public batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): void;
  public batchUpdatePhoneNumber(
    args: BatchUpdatePhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdatePhoneNumberCommandOutput) => void
  ): Promise<BatchUpdatePhoneNumberCommandOutput> | void {
    const command = new BatchUpdatePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Creates an order for phone numbers to be provisioned. For numbers outside the U.S., you must use the Amazon Chime SDK SIP media application dial-in product type.</p>
   */
  public createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePhoneNumberOrderCommandOutput>;
  public createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;
  public createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): void;
  public createPhoneNumberOrder(
    args: CreatePhoneNumberOrderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePhoneNumberOrderCommandOutput) => void),
    cb?: (err: any, data?: CreatePhoneNumberOrderCommandOutput) => void
  ): Promise<CreatePhoneNumberOrderCommandOutput> | void {
    const command = new CreatePhoneNumberOrderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Creates a proxy session for the specified Amazon Chime SDK Voice Connector for
   *             the specified participant phone numbers.</p>
   */
  public createProxySession(
    args: CreateProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProxySessionCommandOutput>;
  public createProxySession(
    args: CreateProxySessionCommandInput,
    cb: (err: any, data?: CreateProxySessionCommandOutput) => void
  ): void;
  public createProxySession(
    args: CreateProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProxySessionCommandOutput) => void
  ): void;
  public createProxySession(
    args: CreateProxySessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProxySessionCommandOutput) => void),
    cb?: (err: any, data?: CreateProxySessionCommandOutput) => void
  ): Promise<CreateProxySessionCommandOutput> | void {
    const command = new CreateProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Creates a SIP media application. For more information about SIP media applications, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/ag/manage-sip-applications.html">Managing SIP media applications
   *            and rules</a> in the <i>Amazon Chime SDK Administrator Guide</i>.</p>
   */
  public createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipMediaApplicationCommandOutput>;
  public createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    cb: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): void;
  public createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): void;
  public createSipMediaApplication(
    args: CreateSipMediaApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSipMediaApplicationCommandOutput) => void),
    cb?: (err: any, data?: CreateSipMediaApplicationCommandOutput) => void
  ): Promise<CreateSipMediaApplicationCommandOutput> | void {
    const command = new CreateSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Creates an outbound call to a phone number from the phone number specified
   *          in the request, and it invokes the endpoint of the specified
   *          <code>sipMediaApplicationId</code>.</p>
   */
  public createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipMediaApplicationCallCommandOutput>;
  public createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    cb: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): void;
  public createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): void;
  public createSipMediaApplicationCall(
    args: CreateSipMediaApplicationCallCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void),
    cb?: (err: any, data?: CreateSipMediaApplicationCallCommandOutput) => void
  ): Promise<CreateSipMediaApplicationCallCommandOutput> | void {
    const command = new CreateSipMediaApplicationCallCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Creates a SIP rule, which can be used to run a SIP media application as a target for a specific trigger type. For more information about SIP rules, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/ag/manage-sip-applications.html">Managing SIP media applications
   *            and rules</a> in the <i>Amazon Chime SDK Administrator Guide</i>.</p>
   */
  public createSipRule(
    args: CreateSipRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSipRuleCommandOutput>;
  public createSipRule(
    args: CreateSipRuleCommandInput,
    cb: (err: any, data?: CreateSipRuleCommandOutput) => void
  ): void;
  public createSipRule(
    args: CreateSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSipRuleCommandOutput) => void
  ): void;
  public createSipRule(
    args: CreateSipRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSipRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateSipRuleCommandOutput) => void
  ): Promise<CreateSipRuleCommandOutput> | void {
    const command = new CreateSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Creates an Amazon Chime SDK Voice Connector. For more information about
   *           Voice Connectors,
   *          see <a href="https://docs.aws.amazon.com/chime-sdk/latest/ag/voice-connector-groups.html">Managing Amazon Chime SDK Voice Connector groups</a> in the <i>Amazon Chime SDK
   *             Administrator Guide</i>.</p>
   */
  public createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceConnectorCommandOutput>;
  public createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    cb: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): void;
  public createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): void;
  public createVoiceConnector(
    args: CreateVoiceConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: CreateVoiceConnectorCommandOutput) => void
  ): Promise<CreateVoiceConnectorCommandOutput> | void {
    const command = new CreateVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Creates an Amazon Chime SDK Voice Connector group under the administrator's
   *          AWS account. You can associate Amazon Chime SDK Voice Connectors with the
   *          Voice Connector group by including <code>VoiceConnectorItems</code> in the
   *          request. </p>
   *          <p>You can include Voice Connectors from different AWS Regions in your group.
   *          This creates a fault tolerant mechanism for fallback in case of availability events.</p>
   */
  public createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceConnectorGroupCommandOutput>;
  public createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): void;
  public createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): void;
  public createVoiceConnectorGroup(
    args: CreateVoiceConnectorGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateVoiceConnectorGroupCommandOutput) => void
  ): Promise<CreateVoiceConnectorGroupCommandOutput> | void {
    const command = new CreateVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Creates a voice profile, which consists of an enrolled user and their latest voice print.</p>
   *          <important>
   *             <p>Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
   *          <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p>
   *          </important>
   *          <p>For more information about voice profiles and voice analytics, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/pstn-voice-analytics.html">Using Amazon Chime SDK Voice Analytics</a>
   *       in the <i>Amazon Chime SDK Developer Guide</i>.</p>
   */
  public createVoiceProfile(
    args: CreateVoiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceProfileCommandOutput>;
  public createVoiceProfile(
    args: CreateVoiceProfileCommandInput,
    cb: (err: any, data?: CreateVoiceProfileCommandOutput) => void
  ): void;
  public createVoiceProfile(
    args: CreateVoiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceProfileCommandOutput) => void
  ): void;
  public createVoiceProfile(
    args: CreateVoiceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVoiceProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateVoiceProfileCommandOutput) => void
  ): Promise<CreateVoiceProfileCommandOutput> | void {
    const command = new CreateVoiceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Creates a voice profile domain, a collection of voice profiles, their voice prints, and encrypted enrollment audio.</p>
   *          <important>
   *             <p>Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
   *          <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p>
   *          </important>
   *          <p>For more information about voice profile domains, see <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/pstn-voice-analytics.html">Using Amazon Chime SDK Voice Analytics</a>
   *          in the <i>Amazon Chime SDK Developer Guide</i>.</p>
   */
  public createVoiceProfileDomain(
    args: CreateVoiceProfileDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVoiceProfileDomainCommandOutput>;
  public createVoiceProfileDomain(
    args: CreateVoiceProfileDomainCommandInput,
    cb: (err: any, data?: CreateVoiceProfileDomainCommandOutput) => void
  ): void;
  public createVoiceProfileDomain(
    args: CreateVoiceProfileDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVoiceProfileDomainCommandOutput) => void
  ): void;
  public createVoiceProfileDomain(
    args: CreateVoiceProfileDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVoiceProfileDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateVoiceProfileDomainCommandOutput) => void
  ): Promise<CreateVoiceProfileDomainCommandOutput> | void {
    const command = new CreateVoiceProfileDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Moves the specified phone number into the
   *          <b>Deletion queue</b>. A phone number must
   *          be disassociated from any users or Amazon Chime SDK Voice Connectors before it can be
   *          deleted.</p>
   *          <p>Deleted phone numbers remain in the
   *          <b>Deletion queue</b> queue for 7 days before
   *          they are deleted permanently.</p>
   */
  public deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePhoneNumberCommandOutput>;
  public deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;
  public deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): void;
  public deletePhoneNumber(
    args: DeletePhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: DeletePhoneNumberCommandOutput) => void
  ): Promise<DeletePhoneNumberCommandOutput> | void {
    const command = new DeletePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes the specified proxy session from the specified Amazon Chime SDK Voice
   *             Connector.</p>
   */
  public deleteProxySession(
    args: DeleteProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProxySessionCommandOutput>;
  public deleteProxySession(
    args: DeleteProxySessionCommandInput,
    cb: (err: any, data?: DeleteProxySessionCommandOutput) => void
  ): void;
  public deleteProxySession(
    args: DeleteProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProxySessionCommandOutput) => void
  ): void;
  public deleteProxySession(
    args: DeleteProxySessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProxySessionCommandOutput) => void),
    cb?: (err: any, data?: DeleteProxySessionCommandOutput) => void
  ): Promise<DeleteProxySessionCommandOutput> | void {
    const command = new DeleteProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes a SIP media application.</p>
   */
  public deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSipMediaApplicationCommandOutput>;
  public deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    cb: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): void;
  public deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): void;
  public deleteSipMediaApplication(
    args: DeleteSipMediaApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSipMediaApplicationCommandOutput) => void),
    cb?: (err: any, data?: DeleteSipMediaApplicationCommandOutput) => void
  ): Promise<DeleteSipMediaApplicationCommandOutput> | void {
    const command = new DeleteSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes a SIP rule.</p>
   */
  public deleteSipRule(
    args: DeleteSipRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSipRuleCommandOutput>;
  public deleteSipRule(
    args: DeleteSipRuleCommandInput,
    cb: (err: any, data?: DeleteSipRuleCommandOutput) => void
  ): void;
  public deleteSipRule(
    args: DeleteSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSipRuleCommandOutput) => void
  ): void;
  public deleteSipRule(
    args: DeleteSipRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSipRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteSipRuleCommandOutput) => void
  ): Promise<DeleteSipRuleCommandOutput> | void {
    const command = new DeleteSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes an Amazon Chime SDK Voice Connector. Any phone numbers associated
   *          with the Amazon Chime SDK Voice Connector must be disassociated from it before it
   *          can be deleted.</p>
   */
  public deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorCommandOutput>;
  public deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): void;
  public deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): void;
  public deleteVoiceConnector(
    args: DeleteVoiceConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorCommandOutput) => void
  ): Promise<DeleteVoiceConnectorCommandOutput> | void {
    const command = new DeleteVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes the emergency calling details from the specified Amazon Chime SDK Voice
   *          Connector.</p>
   */
  public deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  public deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorEmergencyCallingConfiguration(
    args: DeleteVoiceConnectorEmergencyCallingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): Promise<DeleteVoiceConnectorEmergencyCallingConfigurationCommandOutput> | void {
    const command = new DeleteVoiceConnectorEmergencyCallingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes an Amazon Chime SDK Voice Connector group. Any <code>VoiceConnectorItems</code>
   *          and phone numbers associated with the group must be removed before it can be
   *          deleted.</p>
   */
  public deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorGroupCommandOutput>;
  public deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): void;
  public deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): void;
  public deleteVoiceConnectorGroup(
    args: DeleteVoiceConnectorGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorGroupCommandOutput) => void
  ): Promise<DeleteVoiceConnectorGroupCommandOutput> | void {
    const command = new DeleteVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes the origination settings for the specified Amazon Chime SDK Voice Connector. </p>
   *          <note>
   *             <p>If emergency calling is configured for the Voice Connector, it must be
   *          deleted prior to deleting the origination settings.</p>
   *          </note>
   */
  public deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorOriginationCommandOutput>;
  public deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorOrigination(
    args: DeleteVoiceConnectorOriginationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorOriginationCommandOutput) => void
  ): Promise<DeleteVoiceConnectorOriginationCommandOutput> | void {
    const command = new DeleteVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes the proxy configuration from the specified Amazon Chime SDK Voice Connector.</p>
   */
  public deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorProxyCommandOutput>;
  public deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): void;
  public deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): void;
  public deleteVoiceConnectorProxy(
    args: DeleteVoiceConnectorProxyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorProxyCommandOutput) => void
  ): Promise<DeleteVoiceConnectorProxyCommandOutput> | void {
    const command = new DeleteVoiceConnectorProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes a Voice Connector's streaming configuration.</p>
   */
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput>;
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorStreamingConfiguration(
    args: DeleteVoiceConnectorStreamingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): Promise<DeleteVoiceConnectorStreamingConfigurationCommandOutput> | void {
    const command = new DeleteVoiceConnectorStreamingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes the termination settings for the specified Amazon Chime SDK Voice Connector.</p>
   *          <note>
   *             <p>If emergency calling is configured for the Voice Connector, it must be
   *          deleted prior to deleting the termination settings.</p>
   *          </note>
   */
  public deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorTerminationCommandOutput>;
  public deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public deleteVoiceConnectorTermination(
    args: DeleteVoiceConnectorTerminationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorTerminationCommandOutput) => void
  ): Promise<DeleteVoiceConnectorTerminationCommandOutput> | void {
    const command = new DeleteVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes the specified SIP credentials used by your equipment to
   *          authenticate during call termination.</p>
   */
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput>;
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public deleteVoiceConnectorTerminationCredentials(
    args: DeleteVoiceConnectorTerminationCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): Promise<DeleteVoiceConnectorTerminationCredentialsCommandOutput> | void {
    const command = new DeleteVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes a voice profile, including its voice print and enrollment data. WARNING: This action is not reversible.</p>
   */
  public deleteVoiceProfile(
    args: DeleteVoiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceProfileCommandOutput>;
  public deleteVoiceProfile(
    args: DeleteVoiceProfileCommandInput,
    cb: (err: any, data?: DeleteVoiceProfileCommandOutput) => void
  ): void;
  public deleteVoiceProfile(
    args: DeleteVoiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceProfileCommandOutput) => void
  ): void;
  public deleteVoiceProfile(
    args: DeleteVoiceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceProfileCommandOutput) => void
  ): Promise<DeleteVoiceProfileCommandOutput> | void {
    const command = new DeleteVoiceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Deletes all voice profiles in the domain. WARNING: This action is not reversible.</p>
   */
  public deleteVoiceProfileDomain(
    args: DeleteVoiceProfileDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVoiceProfileDomainCommandOutput>;
  public deleteVoiceProfileDomain(
    args: DeleteVoiceProfileDomainCommandInput,
    cb: (err: any, data?: DeleteVoiceProfileDomainCommandOutput) => void
  ): void;
  public deleteVoiceProfileDomain(
    args: DeleteVoiceProfileDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVoiceProfileDomainCommandOutput) => void
  ): void;
  public deleteVoiceProfileDomain(
    args: DeleteVoiceProfileDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVoiceProfileDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteVoiceProfileDomainCommandOutput) => void
  ): Promise<DeleteVoiceProfileDomainCommandOutput> | void {
    const command = new DeleteVoiceProfileDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Disassociates the specified phone numbers from the specified
   *          Amazon Chime SDK Voice Connector.</p>
   */
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput>;
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnector(
    args: DisassociatePhoneNumbersFromVoiceConnectorCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorCommandOutput) => void
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorCommandOutput> | void {
    const command = new DisassociatePhoneNumbersFromVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Disassociates the specified phone numbers from the specified Amazon Chime SDK Voice
   *          Connector group.</p>
   */
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput>;
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
  ): void;
  public disassociatePhoneNumbersFromVoiceConnectorGroup(
    args: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput) => void
  ): Promise<DisassociatePhoneNumbersFromVoiceConnectorGroupCommandOutput> | void {
    const command = new DisassociatePhoneNumbersFromVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the global settings for the Amazon Chime SDK Voice Connectors in an AWS account.</p>
   */
  public getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGlobalSettingsCommandOutput>;
  public getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;
  public getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): void;
  public getGlobalSettings(
    args: GetGlobalSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGlobalSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetGlobalSettingsCommandOutput) => void
  ): Promise<GetGlobalSettingsCommandOutput> | void {
    const command = new GetGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves details for the specified phone number ID, such as associations,
   *          capabilities, and product type.</p>
   */
  public getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberCommandOutput>;
  public getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    cb: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): void;
  public getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): void;
  public getPhoneNumber(
    args: GetPhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: GetPhoneNumberCommandOutput) => void
  ): Promise<GetPhoneNumberCommandOutput> | void {
    const command = new GetPhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves details for the specified phone number order, such as the order
   *          creation timestamp, phone numbers in E.164 format, product type, and
   *          order status.</p>
   */
  public getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberOrderCommandOutput>;
  public getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;
  public getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): void;
  public getPhoneNumberOrder(
    args: GetPhoneNumberOrderCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPhoneNumberOrderCommandOutput) => void),
    cb?: (err: any, data?: GetPhoneNumberOrderCommandOutput) => void
  ): Promise<GetPhoneNumberOrderCommandOutput> | void {
    const command = new GetPhoneNumberOrderCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the phone number settings for the administrator's AWS account,
   *          such as the default outbound calling name.</p>
   */
  public getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPhoneNumberSettingsCommandOutput>;
  public getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;
  public getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): void;
  public getPhoneNumberSettings(
    args: GetPhoneNumberSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPhoneNumberSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetPhoneNumberSettingsCommandOutput) => void
  ): Promise<GetPhoneNumberSettingsCommandOutput> | void {
    const command = new GetPhoneNumberSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the specified proxy session details for the specified Amazon Chime SDK Voice Connector.</p>
   */
  public getProxySession(
    args: GetProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProxySessionCommandOutput>;
  public getProxySession(
    args: GetProxySessionCommandInput,
    cb: (err: any, data?: GetProxySessionCommandOutput) => void
  ): void;
  public getProxySession(
    args: GetProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProxySessionCommandOutput) => void
  ): void;
  public getProxySession(
    args: GetProxySessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProxySessionCommandOutput) => void),
    cb?: (err: any, data?: GetProxySessionCommandOutput) => void
  ): Promise<GetProxySessionCommandOutput> | void {
    const command = new GetProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the information for a SIP media application, including name,
   *          AWS Region, and endpoints.</p>
   */
  public getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationCommandOutput>;
  public getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): void;
  public getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): void;
  public getSipMediaApplication(
    args: GetSipMediaApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSipMediaApplicationCommandOutput) => void),
    cb?: (err: any, data?: GetSipMediaApplicationCommandOutput) => void
  ): Promise<GetSipMediaApplicationCommandOutput> | void {
    const command = new GetSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Gets the Alexa Skill configuration for the SIP media application.</p>
   */
  public getSipMediaApplicationAlexaSkillConfiguration(
    args: GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationAlexaSkillConfigurationCommandOutput>;
  public getSipMediaApplicationAlexaSkillConfiguration(
    args: GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void
  ): void;
  public getSipMediaApplicationAlexaSkillConfiguration(
    args: GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void
  ): void;
  public getSipMediaApplicationAlexaSkillConfiguration(
    args: GetSipMediaApplicationAlexaSkillConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void
  ): Promise<GetSipMediaApplicationAlexaSkillConfigurationCommandOutput> | void {
    const command = new GetSipMediaApplicationAlexaSkillConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the logging configuration for the specified SIP media application.</p>
   */
  public getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput>;
  public getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  public getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  public getSipMediaApplicationLoggingConfiguration(
    args: GetSipMediaApplicationLoggingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): Promise<GetSipMediaApplicationLoggingConfigurationCommandOutput> | void {
    const command = new GetSipMediaApplicationLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and
   *          target endpoints.</p>
   */
  public getSipRule(args: GetSipRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetSipRuleCommandOutput>;
  public getSipRule(args: GetSipRuleCommandInput, cb: (err: any, data?: GetSipRuleCommandOutput) => void): void;
  public getSipRule(
    args: GetSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSipRuleCommandOutput) => void
  ): void;
  public getSipRule(
    args: GetSipRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSipRuleCommandOutput) => void),
    cb?: (err: any, data?: GetSipRuleCommandOutput) => void
  ): Promise<GetSipRuleCommandOutput> | void {
    const command = new GetSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the details of the specified speaker search task.</p>
   */
  public getSpeakerSearchTask(
    args: GetSpeakerSearchTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSpeakerSearchTaskCommandOutput>;
  public getSpeakerSearchTask(
    args: GetSpeakerSearchTaskCommandInput,
    cb: (err: any, data?: GetSpeakerSearchTaskCommandOutput) => void
  ): void;
  public getSpeakerSearchTask(
    args: GetSpeakerSearchTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSpeakerSearchTaskCommandOutput) => void
  ): void;
  public getSpeakerSearchTask(
    args: GetSpeakerSearchTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSpeakerSearchTaskCommandOutput) => void),
    cb?: (err: any, data?: GetSpeakerSearchTaskCommandOutput) => void
  ): Promise<GetSpeakerSearchTaskCommandOutput> | void {
    const command = new GetSpeakerSearchTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves details for the specified Amazon Chime SDK Voice Connector, such as
   *          timestamps,name, outbound host, and encryption requirements.</p>
   */
  public getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorCommandOutput>;
  public getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    cb: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): void;
  public getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): void;
  public getVoiceConnector(
    args: GetVoiceConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorCommandOutput) => void
  ): Promise<GetVoiceConnectorCommandOutput> | void {
    const command = new GetVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the emergency calling configuration details for the specified Voice Connector.</p>
   */
  public getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  public getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorEmergencyCallingConfiguration(
    args: GetVoiceConnectorEmergencyCallingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): Promise<GetVoiceConnectorEmergencyCallingConfigurationCommandOutput> | void {
    const command = new GetVoiceConnectorEmergencyCallingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves details for the specified Amazon Chime SDK Voice Connector group,
   *          such as timestamps,name, and associated <code>VoiceConnectorItems</code>.</p>
   */
  public getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorGroupCommandOutput>;
  public getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): void;
  public getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): void;
  public getVoiceConnectorGroup(
    args: GetVoiceConnectorGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorGroupCommandOutput) => void
  ): Promise<GetVoiceConnectorGroupCommandOutput> | void {
    const command = new GetVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the logging configuration settings for the specified Voice Connector.
   *          Shows whether SIP message logs are enabled for sending to Amazon CloudWatch Logs.</p>
   */
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput>;
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorLoggingConfiguration(
    args: GetVoiceConnectorLoggingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): Promise<GetVoiceConnectorLoggingConfigurationCommandOutput> | void {
    const command = new GetVoiceConnectorLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the origination settings for the specified Voice Connector.</p>
   */
  public getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorOriginationCommandOutput>;
  public getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public getVoiceConnectorOrigination(
    args: GetVoiceConnectorOriginationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorOriginationCommandOutput) => void
  ): Promise<GetVoiceConnectorOriginationCommandOutput> | void {
    const command = new GetVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the proxy configuration details for the specified Amazon Chime SDK Voice
   *             Connector.</p>
   */
  public getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorProxyCommandOutput>;
  public getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): void;
  public getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): void;
  public getVoiceConnectorProxy(
    args: GetVoiceConnectorProxyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorProxyCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorProxyCommandOutput) => void
  ): Promise<GetVoiceConnectorProxyCommandOutput> | void {
    const command = new GetVoiceConnectorProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the streaming configuration details for the specified Amazon Chime SDK
   *          Voice Connector. Shows whether media streaming is enabled for sending to Amazon
   *          Kinesis. It also shows the retention period, in hours, for the Amazon Kinesis data.</p>
   */
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput>;
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public getVoiceConnectorStreamingConfiguration(
    args: GetVoiceConnectorStreamingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): Promise<GetVoiceConnectorStreamingConfigurationCommandOutput> | void {
    const command = new GetVoiceConnectorStreamingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the termination setting details for the specified Voice Connector.</p>
   */
  public getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorTerminationCommandOutput>;
  public getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public getVoiceConnectorTermination(
    args: GetVoiceConnectorTerminationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorTerminationCommandOutput) => void
  ): Promise<GetVoiceConnectorTerminationCommandOutput> | void {
    const command = new GetVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves information about the last time a <code>SIP OPTIONS</code> ping
   *          was received from your SIP infrastructure for the specified Amazon Chime SDK Voice
   *          Connector.</p>
   */
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceConnectorTerminationHealthCommandOutput>;
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    cb: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
  ): void;
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
  ): void;
  public getVoiceConnectorTerminationHealth(
    args: GetVoiceConnectorTerminationHealthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceConnectorTerminationHealthCommandOutput) => void
  ): Promise<GetVoiceConnectorTerminationHealthCommandOutput> | void {
    const command = new GetVoiceConnectorTerminationHealthCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the details of the specified voice profile.</p>
   */
  public getVoiceProfile(
    args: GetVoiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceProfileCommandOutput>;
  public getVoiceProfile(
    args: GetVoiceProfileCommandInput,
    cb: (err: any, data?: GetVoiceProfileCommandOutput) => void
  ): void;
  public getVoiceProfile(
    args: GetVoiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceProfileCommandOutput) => void
  ): void;
  public getVoiceProfile(
    args: GetVoiceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceProfileCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceProfileCommandOutput) => void
  ): Promise<GetVoiceProfileCommandOutput> | void {
    const command = new GetVoiceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the details of the specified voice profile domain.</p>
   */
  public getVoiceProfileDomain(
    args: GetVoiceProfileDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceProfileDomainCommandOutput>;
  public getVoiceProfileDomain(
    args: GetVoiceProfileDomainCommandInput,
    cb: (err: any, data?: GetVoiceProfileDomainCommandOutput) => void
  ): void;
  public getVoiceProfileDomain(
    args: GetVoiceProfileDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceProfileDomainCommandOutput) => void
  ): void;
  public getVoiceProfileDomain(
    args: GetVoiceProfileDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceProfileDomainCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceProfileDomainCommandOutput) => void
  ): Promise<GetVoiceProfileDomainCommandOutput> | void {
    const command = new GetVoiceProfileDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Retrieves the details of a voice tone analysis task.</p>
   */
  public getVoiceToneAnalysisTask(
    args: GetVoiceToneAnalysisTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVoiceToneAnalysisTaskCommandOutput>;
  public getVoiceToneAnalysisTask(
    args: GetVoiceToneAnalysisTaskCommandInput,
    cb: (err: any, data?: GetVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  public getVoiceToneAnalysisTask(
    args: GetVoiceToneAnalysisTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  public getVoiceToneAnalysisTask(
    args: GetVoiceToneAnalysisTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVoiceToneAnalysisTaskCommandOutput) => void),
    cb?: (err: any, data?: GetVoiceToneAnalysisTaskCommandOutput) => void
  ): Promise<GetVoiceToneAnalysisTaskCommandOutput> | void {
    const command = new GetVoiceToneAnalysisTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the available AWS Regions in which you can create an Amazon Chime SDK Voice Connector.</p>
   */
  public listAvailableVoiceConnectorRegions(
    args: ListAvailableVoiceConnectorRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableVoiceConnectorRegionsCommandOutput>;
  public listAvailableVoiceConnectorRegions(
    args: ListAvailableVoiceConnectorRegionsCommandInput,
    cb: (err: any, data?: ListAvailableVoiceConnectorRegionsCommandOutput) => void
  ): void;
  public listAvailableVoiceConnectorRegions(
    args: ListAvailableVoiceConnectorRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableVoiceConnectorRegionsCommandOutput) => void
  ): void;
  public listAvailableVoiceConnectorRegions(
    args: ListAvailableVoiceConnectorRegionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAvailableVoiceConnectorRegionsCommandOutput) => void),
    cb?: (err: any, data?: ListAvailableVoiceConnectorRegionsCommandOutput) => void
  ): Promise<ListAvailableVoiceConnectorRegionsCommandOutput> | void {
    const command = new ListAvailableVoiceConnectorRegionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the phone numbers for an administrator's Amazon Chime SDK account.</p>
   */
  public listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumberOrdersCommandOutput>;
  public listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;
  public listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): void;
  public listPhoneNumberOrders(
    args: ListPhoneNumberOrdersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPhoneNumberOrdersCommandOutput) => void),
    cb?: (err: any, data?: ListPhoneNumberOrdersCommandOutput) => void
  ): Promise<ListPhoneNumberOrdersCommandOutput> | void {
    const command = new ListPhoneNumberOrdersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the phone numbers for the specified Amazon Chime SDK account,
   *          Amazon Chime SDK user, Amazon Chime SDK Voice Connector, or Amazon Chime SDK Voice
   *          Connector group.</p>
   */
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPhoneNumbersCommandOutput>;
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): void;
  public listPhoneNumbers(
    args: ListPhoneNumbersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPhoneNumbersCommandOutput) => void),
    cb?: (err: any, data?: ListPhoneNumbersCommandOutput) => void
  ): Promise<ListPhoneNumbersCommandOutput> | void {
    const command = new ListPhoneNumbersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the proxy sessions for the specified Amazon Chime SDK Voice Connector.</p>
   */
  public listProxySessions(
    args: ListProxySessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProxySessionsCommandOutput>;
  public listProxySessions(
    args: ListProxySessionsCommandInput,
    cb: (err: any, data?: ListProxySessionsCommandOutput) => void
  ): void;
  public listProxySessions(
    args: ListProxySessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProxySessionsCommandOutput) => void
  ): void;
  public listProxySessions(
    args: ListProxySessionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProxySessionsCommandOutput) => void),
    cb?: (err: any, data?: ListProxySessionsCommandOutput) => void
  ): Promise<ListProxySessionsCommandOutput> | void {
    const command = new ListProxySessionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the SIP media applications  under the administrator's AWS account.</p>
   */
  public listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSipMediaApplicationsCommandOutput>;
  public listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    cb: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): void;
  public listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): void;
  public listSipMediaApplications(
    args: ListSipMediaApplicationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSipMediaApplicationsCommandOutput) => void),
    cb?: (err: any, data?: ListSipMediaApplicationsCommandOutput) => void
  ): Promise<ListSipMediaApplicationsCommandOutput> | void {
    const command = new ListSipMediaApplicationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the SIP rules under the administrator's AWS account.</p>
   */
  public listSipRules(
    args: ListSipRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSipRulesCommandOutput>;
  public listSipRules(args: ListSipRulesCommandInput, cb: (err: any, data?: ListSipRulesCommandOutput) => void): void;
  public listSipRules(
    args: ListSipRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSipRulesCommandOutput) => void
  ): void;
  public listSipRules(
    args: ListSipRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSipRulesCommandOutput) => void),
    cb?: (err: any, data?: ListSipRulesCommandOutput) => void
  ): Promise<ListSipRulesCommandOutput> | void {
    const command = new ListSipRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the countries that you can order phone numbers from.</p>
   */
  public listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSupportedPhoneNumberCountriesCommandOutput>;
  public listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): void;
  public listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): void;
  public listSupportedPhoneNumberCountries(
    args: ListSupportedPhoneNumberCountriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void),
    cb?: (err: any, data?: ListSupportedPhoneNumberCountriesCommandOutput) => void
  ): Promise<ListSupportedPhoneNumberCountriesCommandOutput> | void {
    const command = new ListSupportedPhoneNumberCountriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Returns a list of the tags in a given resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the Amazon Chime SDK Voice Connector groups in the administrator's AWS
   *          account.</p>
   */
  public listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorGroupsCommandOutput>;
  public listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): void;
  public listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): void;
  public listVoiceConnectorGroups(
    args: ListVoiceConnectorGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListVoiceConnectorGroupsCommandOutput) => void
  ): Promise<ListVoiceConnectorGroupsCommandOutput> | void {
    const command = new ListVoiceConnectorGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the Amazon Chime SDK Voice Connectors in the administrators
   *          AWS account.</p>
   */
  public listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorsCommandOutput>;
  public listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): void;
  public listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): void;
  public listVoiceConnectors(
    args: ListVoiceConnectorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVoiceConnectorsCommandOutput) => void),
    cb?: (err: any, data?: ListVoiceConnectorsCommandOutput) => void
  ): Promise<ListVoiceConnectorsCommandOutput> | void {
    const command = new ListVoiceConnectorsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the SIP credentials for the specified Amazon Chime SDK Voice Connector.</p>
   */
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput>;
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public listVoiceConnectorTerminationCredentials(
    args: ListVoiceConnectorTerminationCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void),
    cb?: (err: any, data?: ListVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): Promise<ListVoiceConnectorTerminationCredentialsCommandOutput> | void {
    const command = new ListVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the specified voice profile domains in the administrator's AWS account.
   *          </p>
   */
  public listVoiceProfileDomains(
    args: ListVoiceProfileDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceProfileDomainsCommandOutput>;
  public listVoiceProfileDomains(
    args: ListVoiceProfileDomainsCommandInput,
    cb: (err: any, data?: ListVoiceProfileDomainsCommandOutput) => void
  ): void;
  public listVoiceProfileDomains(
    args: ListVoiceProfileDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceProfileDomainsCommandOutput) => void
  ): void;
  public listVoiceProfileDomains(
    args: ListVoiceProfileDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVoiceProfileDomainsCommandOutput) => void),
    cb?: (err: any, data?: ListVoiceProfileDomainsCommandOutput) => void
  ): Promise<ListVoiceProfileDomainsCommandOutput> | void {
    const command = new ListVoiceProfileDomainsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Lists the voice profiles in a voice profile domain.</p>
   */
  public listVoiceProfiles(
    args: ListVoiceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVoiceProfilesCommandOutput>;
  public listVoiceProfiles(
    args: ListVoiceProfilesCommandInput,
    cb: (err: any, data?: ListVoiceProfilesCommandOutput) => void
  ): void;
  public listVoiceProfiles(
    args: ListVoiceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVoiceProfilesCommandOutput) => void
  ): void;
  public listVoiceProfiles(
    args: ListVoiceProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVoiceProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListVoiceProfilesCommandOutput) => void
  ): Promise<ListVoiceProfilesCommandOutput> | void {
    const command = new ListVoiceProfilesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates the Alexa Skill configuration for the SIP media application.</p>
   */
  public putSipMediaApplicationAlexaSkillConfiguration(
    args: PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSipMediaApplicationAlexaSkillConfigurationCommandOutput>;
  public putSipMediaApplicationAlexaSkillConfiguration(
    args: PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
    cb: (err: any, data?: PutSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void
  ): void;
  public putSipMediaApplicationAlexaSkillConfiguration(
    args: PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void
  ): void;
  public putSipMediaApplicationAlexaSkillConfiguration(
    args: PutSipMediaApplicationAlexaSkillConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutSipMediaApplicationAlexaSkillConfigurationCommandOutput) => void
  ): Promise<PutSipMediaApplicationAlexaSkillConfigurationCommandOutput> | void {
    const command = new PutSipMediaApplicationAlexaSkillConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates the logging configuration for the specified SIP media application.</p>
   */
  public putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput>;
  public putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  public putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): void;
  public putSipMediaApplicationLoggingConfiguration(
    args: PutSipMediaApplicationLoggingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutSipMediaApplicationLoggingConfigurationCommandOutput) => void
  ): Promise<PutSipMediaApplicationLoggingConfigurationCommandOutput> | void {
    const command = new PutSipMediaApplicationLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates a Voice Connector's emergency calling configuration.</p>
   */
  public putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput>;
  public putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorEmergencyCallingConfiguration(
    args: PutVoiceConnectorEmergencyCallingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorEmergencyCallingConfigurationCommandOutput) => void
  ): Promise<PutVoiceConnectorEmergencyCallingConfigurationCommandOutput> | void {
    const command = new PutVoiceConnectorEmergencyCallingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates a Voice Connector's logging configuration.</p>
   */
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput>;
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorLoggingConfiguration(
    args: PutVoiceConnectorLoggingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorLoggingConfigurationCommandOutput) => void
  ): Promise<PutVoiceConnectorLoggingConfigurationCommandOutput> | void {
    const command = new PutVoiceConnectorLoggingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates a Voice Connector's origination settings.</p>
   */
  public putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorOriginationCommandOutput>;
  public putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): void;
  public putVoiceConnectorOrigination(
    args: PutVoiceConnectorOriginationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorOriginationCommandOutput) => void
  ): Promise<PutVoiceConnectorOriginationCommandOutput> | void {
    const command = new PutVoiceConnectorOriginationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Puts the specified proxy configuration to the specified Amazon Chime SDK Voice Connector.</p>
   */
  public putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorProxyCommandOutput>;
  public putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    cb: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): void;
  public putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): void;
  public putVoiceConnectorProxy(
    args: PutVoiceConnectorProxyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutVoiceConnectorProxyCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorProxyCommandOutput) => void
  ): Promise<PutVoiceConnectorProxyCommandOutput> | void {
    const command = new PutVoiceConnectorProxyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates a Voice Connector's streaming configuration settings.</p>
   */
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput>;
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): void;
  public putVoiceConnectorStreamingConfiguration(
    args: PutVoiceConnectorStreamingConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorStreamingConfigurationCommandOutput) => void
  ): Promise<PutVoiceConnectorStreamingConfigurationCommandOutput> | void {
    const command = new PutVoiceConnectorStreamingConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates a Voice Connector's termination settings.</p>
   */
  public putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorTerminationCommandOutput>;
  public putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): void;
  public putVoiceConnectorTermination(
    args: PutVoiceConnectorTerminationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorTerminationCommandOutput) => void
  ): Promise<PutVoiceConnectorTerminationCommandOutput> | void {
    const command = new PutVoiceConnectorTerminationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates a Voice Connector's termination credentials.</p>
   */
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput>;
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    cb: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): void;
  public putVoiceConnectorTerminationCredentials(
    args: PutVoiceConnectorTerminationCredentialsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void),
    cb?: (err: any, data?: PutVoiceConnectorTerminationCredentialsCommandOutput) => void
  ): Promise<PutVoiceConnectorTerminationCredentialsCommandOutput> | void {
    const command = new PutVoiceConnectorTerminationCredentialsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Restores a deleted phone number.</p>
   */
  public restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestorePhoneNumberCommandOutput>;
  public restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;
  public restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): void;
  public restorePhoneNumber(
    args: RestorePhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestorePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: RestorePhoneNumberCommandOutput) => void
  ): Promise<RestorePhoneNumberCommandOutput> | void {
    const command = new RestorePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Searches the provisioned phone numbers in an organization.</p>
   */
  public searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAvailablePhoneNumbersCommandOutput>;
  public searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;
  public searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): void;
  public searchAvailablePhoneNumbers(
    args: SearchAvailablePhoneNumbersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void),
    cb?: (err: any, data?: SearchAvailablePhoneNumbersCommandOutput) => void
  ): Promise<SearchAvailablePhoneNumbersCommandOutput> | void {
    const command = new SearchAvailablePhoneNumbersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Starts a speaker search task.</p>
   *          <important>
   *             <p>Before starting any speaker search tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
   *          <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p>
   *          </important>
   */
  public startSpeakerSearchTask(
    args: StartSpeakerSearchTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSpeakerSearchTaskCommandOutput>;
  public startSpeakerSearchTask(
    args: StartSpeakerSearchTaskCommandInput,
    cb: (err: any, data?: StartSpeakerSearchTaskCommandOutput) => void
  ): void;
  public startSpeakerSearchTask(
    args: StartSpeakerSearchTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSpeakerSearchTaskCommandOutput) => void
  ): void;
  public startSpeakerSearchTask(
    args: StartSpeakerSearchTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSpeakerSearchTaskCommandOutput) => void),
    cb?: (err: any, data?: StartSpeakerSearchTaskCommandOutput) => void
  ): Promise<StartSpeakerSearchTaskCommandOutput> | void {
    const command = new StartSpeakerSearchTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Starts a voice tone analysis task. For more information about voice tone analysis, see
   *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/pstn-voice-analytics.html">Using Amazon Chime SDK voice analytics</a>
   *          in the <i>Amazon Chime SDK Developer Guide</i>.</p>
   *          <important>
   *             <p>Before starting any voice tone analysis tasks, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the
   *          <a href="https://aws.amazon.com/service-terms/">AWS service terms</a> for the Amazon Chime SDK.</p>
   *          </important>
   */
  public startVoiceToneAnalysisTask(
    args: StartVoiceToneAnalysisTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVoiceToneAnalysisTaskCommandOutput>;
  public startVoiceToneAnalysisTask(
    args: StartVoiceToneAnalysisTaskCommandInput,
    cb: (err: any, data?: StartVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  public startVoiceToneAnalysisTask(
    args: StartVoiceToneAnalysisTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  public startVoiceToneAnalysisTask(
    args: StartVoiceToneAnalysisTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartVoiceToneAnalysisTaskCommandOutput) => void),
    cb?: (err: any, data?: StartVoiceToneAnalysisTaskCommandOutput) => void
  ): Promise<StartVoiceToneAnalysisTaskCommandOutput> | void {
    const command = new StartVoiceToneAnalysisTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Stops a speaker search task.</p>
   */
  public stopSpeakerSearchTask(
    args: StopSpeakerSearchTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopSpeakerSearchTaskCommandOutput>;
  public stopSpeakerSearchTask(
    args: StopSpeakerSearchTaskCommandInput,
    cb: (err: any, data?: StopSpeakerSearchTaskCommandOutput) => void
  ): void;
  public stopSpeakerSearchTask(
    args: StopSpeakerSearchTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopSpeakerSearchTaskCommandOutput) => void
  ): void;
  public stopSpeakerSearchTask(
    args: StopSpeakerSearchTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopSpeakerSearchTaskCommandOutput) => void),
    cb?: (err: any, data?: StopSpeakerSearchTaskCommandOutput) => void
  ): Promise<StopSpeakerSearchTaskCommandOutput> | void {
    const command = new StopSpeakerSearchTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Stops a voice tone analysis task.</p>
   */
  public stopVoiceToneAnalysisTask(
    args: StopVoiceToneAnalysisTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopVoiceToneAnalysisTaskCommandOutput>;
  public stopVoiceToneAnalysisTask(
    args: StopVoiceToneAnalysisTaskCommandInput,
    cb: (err: any, data?: StopVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  public stopVoiceToneAnalysisTask(
    args: StopVoiceToneAnalysisTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopVoiceToneAnalysisTaskCommandOutput) => void
  ): void;
  public stopVoiceToneAnalysisTask(
    args: StopVoiceToneAnalysisTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopVoiceToneAnalysisTaskCommandOutput) => void),
    cb?: (err: any, data?: StopVoiceToneAnalysisTaskCommandOutput) => void
  ): Promise<StopVoiceToneAnalysisTaskCommandOutput> | void {
    const command = new StopVoiceToneAnalysisTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Adds a tag to the specified resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Removes tags from a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates global settings for the Amazon Chime SDK Voice Connectors in an AWS account.</p>
   */
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  public updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGlobalSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): Promise<UpdateGlobalSettingsCommandOutput> | void {
    const command = new UpdateGlobalSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates phone number details, such as product type or calling name, for the
   *          specified phone number ID. You can update one phone number detail at a time. For
   *          example, you can update either the product type or the calling name in one action.</p>
   *          <p>For numbers outside the U.S., you must use the Amazon Chime SDK SIP Media
   *          Application Dial-In product type.</p>
   *          <p>Updates to outbound calling names can take 72 hours to complete. Pending
   *          updates to outbound calling names must be complete before you can request another
   *          update.</p>
   */
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberCommandOutput>;
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): void;
  public updatePhoneNumber(
    args: UpdatePhoneNumberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePhoneNumberCommandOutput) => void),
    cb?: (err: any, data?: UpdatePhoneNumberCommandOutput) => void
  ): Promise<UpdatePhoneNumberCommandOutput> | void {
    const command = new UpdatePhoneNumberCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates the phone number settings for the administrator's AWS account, such
   *          as the default outbound calling name. You can update the default outbound calling
   *          name once every seven days. Outbound calling names can take up to 72 hours to
   *          update.</p>
   */
  public updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePhoneNumberSettingsCommandOutput>;
  public updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;
  public updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): void;
  public updatePhoneNumberSettings(
    args: UpdatePhoneNumberSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdatePhoneNumberSettingsCommandOutput) => void
  ): Promise<UpdatePhoneNumberSettingsCommandOutput> | void {
    const command = new UpdatePhoneNumberSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates the specified proxy session details, such as voice or SMS capabilities.</p>
   */
  public updateProxySession(
    args: UpdateProxySessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProxySessionCommandOutput>;
  public updateProxySession(
    args: UpdateProxySessionCommandInput,
    cb: (err: any, data?: UpdateProxySessionCommandOutput) => void
  ): void;
  public updateProxySession(
    args: UpdateProxySessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProxySessionCommandOutput) => void
  ): void;
  public updateProxySession(
    args: UpdateProxySessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProxySessionCommandOutput) => void),
    cb?: (err: any, data?: UpdateProxySessionCommandOutput) => void
  ): Promise<UpdateProxySessionCommandOutput> | void {
    const command = new UpdateProxySessionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates the details of the specified SIP media application.</p>
   */
  public updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipMediaApplicationCommandOutput>;
  public updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    cb: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): void;
  public updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): void;
  public updateSipMediaApplication(
    args: UpdateSipMediaApplicationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSipMediaApplicationCommandOutput) => void),
    cb?: (err: any, data?: UpdateSipMediaApplicationCommandOutput) => void
  ): Promise<UpdateSipMediaApplicationCommandOutput> | void {
    const command = new UpdateSipMediaApplicationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Invokes the AWS Lambda function associated with the SIP media application and
   *          transaction ID in an update request. The Lambda function can then return a new set
   *          of actions.</p>
   */
  public updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipMediaApplicationCallCommandOutput>;
  public updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    cb: (err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void
  ): void;
  public updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void
  ): void;
  public updateSipMediaApplicationCall(
    args: UpdateSipMediaApplicationCallCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void),
    cb?: (err: any, data?: UpdateSipMediaApplicationCallCommandOutput) => void
  ): Promise<UpdateSipMediaApplicationCallCommandOutput> | void {
    const command = new UpdateSipMediaApplicationCallCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates the details of the specified SIP rule.</p>
   */
  public updateSipRule(
    args: UpdateSipRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSipRuleCommandOutput>;
  public updateSipRule(
    args: UpdateSipRuleCommandInput,
    cb: (err: any, data?: UpdateSipRuleCommandOutput) => void
  ): void;
  public updateSipRule(
    args: UpdateSipRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSipRuleCommandOutput) => void
  ): void;
  public updateSipRule(
    args: UpdateSipRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSipRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateSipRuleCommandOutput) => void
  ): Promise<UpdateSipRuleCommandOutput> | void {
    const command = new UpdateSipRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates the details for the specified Amazon Chime SDK Voice Connector.</p>
   */
  public updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceConnectorCommandOutput>;
  public updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    cb: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): void;
  public updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): void;
  public updateVoiceConnector(
    args: UpdateVoiceConnectorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVoiceConnectorCommandOutput) => void),
    cb?: (err: any, data?: UpdateVoiceConnectorCommandOutput) => void
  ): Promise<UpdateVoiceConnectorCommandOutput> | void {
    const command = new UpdateVoiceConnectorCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates the settings for the specified Amazon Chime SDK Voice Connector group.</p>
   */
  public updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceConnectorGroupCommandOutput>;
  public updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    cb: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): void;
  public updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): void;
  public updateVoiceConnectorGroup(
    args: UpdateVoiceConnectorGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateVoiceConnectorGroupCommandOutput) => void
  ): Promise<UpdateVoiceConnectorGroupCommandOutput> | void {
    const command = new UpdateVoiceConnectorGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates the specified voice profile’s voice print and refreshes its expiration timestamp.</p>
   *          <important>
   *             <p>As a condition of using this feature, you acknowledge that the collection, use, storage, and retention of
   *             your caller’s biometric identifiers and biometric information (“biometric data”) in the form of a digital voiceprint
   *             requires the caller’s informed consent via a written release. Such consent is required under various state laws,
   *             including biometrics laws in Illinois, Texas, Washington and other state privacy laws.</p>
   *             <p>You must provide a written release to each caller through a process that clearly reflects each caller’s informed
   *             consent before using Amazon Chime SDK Voice Insights service, as required under the terms of your agreement
   *             with AWS governing your use of the service.</p>
   *          </important>
   */
  public updateVoiceProfile(
    args: UpdateVoiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceProfileCommandOutput>;
  public updateVoiceProfile(
    args: UpdateVoiceProfileCommandInput,
    cb: (err: any, data?: UpdateVoiceProfileCommandOutput) => void
  ): void;
  public updateVoiceProfile(
    args: UpdateVoiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceProfileCommandOutput) => void
  ): void;
  public updateVoiceProfile(
    args: UpdateVoiceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVoiceProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateVoiceProfileCommandOutput) => void
  ): Promise<UpdateVoiceProfileCommandOutput> | void {
    const command = new UpdateVoiceProfileCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Updates the settings for the specified voice profile domain.</p>
   */
  public updateVoiceProfileDomain(
    args: UpdateVoiceProfileDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVoiceProfileDomainCommandOutput>;
  public updateVoiceProfileDomain(
    args: UpdateVoiceProfileDomainCommandInput,
    cb: (err: any, data?: UpdateVoiceProfileDomainCommandOutput) => void
  ): void;
  public updateVoiceProfileDomain(
    args: UpdateVoiceProfileDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVoiceProfileDomainCommandOutput) => void
  ): void;
  public updateVoiceProfileDomain(
    args: UpdateVoiceProfileDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVoiceProfileDomainCommandOutput) => void),
    cb?: (err: any, data?: UpdateVoiceProfileDomainCommandOutput) => void
  ): Promise<UpdateVoiceProfileDomainCommandOutput> | void {
    const command = new UpdateVoiceProfileDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * @public
   * <p>Validates an address to be used for 911 calls made with Amazon Chime SDK Voice
   *          Connectors. You can use validated addresses in a Presence Information Data Format
   *          Location Object file that you include in SIP requests. That helps ensure that addresses
   *          are routed to the appropriate Public Safety Answering Point.</p>
   */
  public validateE911Address(
    args: ValidateE911AddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidateE911AddressCommandOutput>;
  public validateE911Address(
    args: ValidateE911AddressCommandInput,
    cb: (err: any, data?: ValidateE911AddressCommandOutput) => void
  ): void;
  public validateE911Address(
    args: ValidateE911AddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidateE911AddressCommandOutput) => void
  ): void;
  public validateE911Address(
    args: ValidateE911AddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ValidateE911AddressCommandOutput) => void),
    cb?: (err: any, data?: ValidateE911AddressCommandOutput) => void
  ): Promise<ValidateE911AddressCommandOutput> | void {
    const command = new ValidateE911AddressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
