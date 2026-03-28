// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type CreateConfigurationSetCommandInput,
  type CreateConfigurationSetCommandOutput,
  CreateConfigurationSetCommand,
} from "./commands/CreateConfigurationSetCommand";
import {
  type CreateConfigurationSetEventDestinationCommandInput,
  type CreateConfigurationSetEventDestinationCommandOutput,
  CreateConfigurationSetEventDestinationCommand,
} from "./commands/CreateConfigurationSetEventDestinationCommand";
import {
  type DeleteConfigurationSetCommandInput,
  type DeleteConfigurationSetCommandOutput,
  DeleteConfigurationSetCommand,
} from "./commands/DeleteConfigurationSetCommand";
import {
  type DeleteConfigurationSetEventDestinationCommandInput,
  type DeleteConfigurationSetEventDestinationCommandOutput,
  DeleteConfigurationSetEventDestinationCommand,
} from "./commands/DeleteConfigurationSetEventDestinationCommand";
import {
  type GetConfigurationSetEventDestinationsCommandInput,
  type GetConfigurationSetEventDestinationsCommandOutput,
  GetConfigurationSetEventDestinationsCommand,
} from "./commands/GetConfigurationSetEventDestinationsCommand";
import {
  type ListConfigurationSetsCommandInput,
  type ListConfigurationSetsCommandOutput,
  ListConfigurationSetsCommand,
} from "./commands/ListConfigurationSetsCommand";
import {
  type SendVoiceMessageCommandInput,
  type SendVoiceMessageCommandOutput,
  SendVoiceMessageCommand,
} from "./commands/SendVoiceMessageCommand";
import {
  type UpdateConfigurationSetEventDestinationCommandInput,
  type UpdateConfigurationSetEventDestinationCommandOutput,
  UpdateConfigurationSetEventDestinationCommand,
} from "./commands/UpdateConfigurationSetEventDestinationCommand";
import { PinpointSMSVoiceClient } from "./PinpointSMSVoiceClient";

const commands = {
  CreateConfigurationSetCommand,
  CreateConfigurationSetEventDestinationCommand,
  DeleteConfigurationSetCommand,
  DeleteConfigurationSetEventDestinationCommand,
  GetConfigurationSetEventDestinationsCommand,
  ListConfigurationSetsCommand,
  SendVoiceMessageCommand,
  UpdateConfigurationSetEventDestinationCommand,
};

export interface PinpointSMSVoice {
  /**
   * @see {@link CreateConfigurationSetCommand}
   */
  createConfigurationSet(): Promise<CreateConfigurationSetCommandOutput>;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetCommandOutput>;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationSetEventDestinationCommand}
   */
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput>;
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationSetCommand}
   */
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetCommandOutput>;
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationSetEventDestinationCommand}
   */
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput>;
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationSetEventDestinationsCommand}
   */
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput>;
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationSetsCommand}
   */
  listConfigurationSets(): Promise<ListConfigurationSetsCommandOutput>;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfigurationSetsCommandOutput>;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendVoiceMessageCommand}
   */
  sendVoiceMessage(): Promise<SendVoiceMessageCommandOutput>;
  sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendVoiceMessageCommandOutput>;
  sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    cb: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): void;
  sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationSetEventDestinationCommand}
   */
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput>;
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
}

/**
 * Pinpoint SMS and Voice Messaging public facing APIs
 * @public
 */
export class PinpointSMSVoice extends PinpointSMSVoiceClient implements PinpointSMSVoice {}
createAggregatedClient(commands, PinpointSMSVoice);
