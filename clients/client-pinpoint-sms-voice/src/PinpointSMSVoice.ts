// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

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

/**
 * @public
 */
export interface PinpointSMSVoiceRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface PinpointSMSVoice {
  /**
   * @see {@link CreateConfigurationSetCommand}
   */
  createConfigurationSet(): Promise<CreateConfigurationSetCommandOutput>;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options?: PinpointSMSVoiceRequestOptions
  ): Promise<CreateConfigurationSetCommandOutput>;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;
  createConfigurationSet(
    args: CreateConfigurationSetCommandInput,
    options: PinpointSMSVoiceRequestOptions,
    cb: (err: any, data?: CreateConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigurationSetEventDestinationCommand}
   */
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options?: PinpointSMSVoiceRequestOptions
  ): Promise<CreateConfigurationSetEventDestinationCommandOutput>;
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  createConfigurationSetEventDestination(
    args: CreateConfigurationSetEventDestinationCommandInput,
    options: PinpointSMSVoiceRequestOptions,
    cb: (err: any, data?: CreateConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationSetCommand}
   */
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options?: PinpointSMSVoiceRequestOptions
  ): Promise<DeleteConfigurationSetCommandOutput>;
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;
  deleteConfigurationSet(
    args: DeleteConfigurationSetCommandInput,
    options: PinpointSMSVoiceRequestOptions,
    cb: (err: any, data?: DeleteConfigurationSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigurationSetEventDestinationCommand}
   */
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options?: PinpointSMSVoiceRequestOptions
  ): Promise<DeleteConfigurationSetEventDestinationCommandOutput>;
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  deleteConfigurationSetEventDestination(
    args: DeleteConfigurationSetEventDestinationCommandInput,
    options: PinpointSMSVoiceRequestOptions,
    cb: (err: any, data?: DeleteConfigurationSetEventDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationSetEventDestinationsCommand}
   */
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options?: PinpointSMSVoiceRequestOptions
  ): Promise<GetConfigurationSetEventDestinationsCommandOutput>;
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;
  getConfigurationSetEventDestinations(
    args: GetConfigurationSetEventDestinationsCommandInput,
    options: PinpointSMSVoiceRequestOptions,
    cb: (err: any, data?: GetConfigurationSetEventDestinationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigurationSetsCommand}
   */
  listConfigurationSets(): Promise<ListConfigurationSetsCommandOutput>;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options?: PinpointSMSVoiceRequestOptions
  ): Promise<ListConfigurationSetsCommandOutput>;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;
  listConfigurationSets(
    args: ListConfigurationSetsCommandInput,
    options: PinpointSMSVoiceRequestOptions,
    cb: (err: any, data?: ListConfigurationSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link SendVoiceMessageCommand}
   */
  sendVoiceMessage(): Promise<SendVoiceMessageCommandOutput>;
  sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    options?: PinpointSMSVoiceRequestOptions
  ): Promise<SendVoiceMessageCommandOutput>;
  sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    cb: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): void;
  sendVoiceMessage(
    args: SendVoiceMessageCommandInput,
    options: PinpointSMSVoiceRequestOptions,
    cb: (err: any, data?: SendVoiceMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigurationSetEventDestinationCommand}
   */
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options?: PinpointSMSVoiceRequestOptions
  ): Promise<UpdateConfigurationSetEventDestinationCommandOutput>;
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
  updateConfigurationSetEventDestination(
    args: UpdateConfigurationSetEventDestinationCommandInput,
    options: PinpointSMSVoiceRequestOptions,
    cb: (err: any, data?: UpdateConfigurationSetEventDestinationCommandOutput) => void
  ): void;
}

/**
 * Pinpoint SMS and Voice Messaging public facing APIs
 * @public
 */
export class PinpointSMSVoice extends PinpointSMSVoiceClient implements PinpointSMSVoice {}
createAggregatedClient(commands, PinpointSMSVoice);
