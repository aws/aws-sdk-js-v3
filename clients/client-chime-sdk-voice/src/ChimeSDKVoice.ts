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
  ValidateE911AddressCommand,
  ValidateE911AddressCommandInput,
  ValidateE911AddressCommandOutput,
} from "./commands/ValidateE911AddressCommand";

export class ChimeSDKVoice extends ChimeSDKVoiceClient {
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
